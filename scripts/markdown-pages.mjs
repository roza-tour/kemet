// =============================================================================
//  A Markdown copy of every page, for assistants and agents — run after build.
//
//      node scripts/markdown-pages.mjs            (reads and writes dist/)
//
//  WHAT IT MAKES
//  For each indexable page dist/<path>.html it writes dist/<path>.html.md:
//  the page's own content (what sits inside <main>) as plain Markdown, with a
//  short header giving the title, the canonical address, the language and the
//  description. Nothing is rewritten or summarised; it is the same text a
//  reader sees, without the navigation, the scripts and the styling.
//
//  WHY
//  An assistant that fetches a page gets ~100 KB of HTML of which a tenth is
//  the content. Agents now ask for Markdown directly (an `Accept:
//  text/markdown` request header); .htaccess answers that request with these
//  files, and every page declares its copy with
//  <link rel="alternate" type="text/markdown">. llms-full.txt carries the
//  substance of the site in one file; this is the same idea per page, so an
//  agent that wants one journey reads one journey.
//
//  WHAT IT MUST NOT DO
//  · Change any address. The .md files are additions beside the pages.
//  · Compete with the pages in search. They are served with
//    `X-Robots-Tag: noindex` (.htaccess) and are in no sitemap.
//  · Cover a page that is itself not indexable (404, a page whose canonical
//    points elsewhere): no copy is written for those.
//
//  The HTML parser is hast-util-from-html, which Astro already depends on.
// =============================================================================
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { fromHtml } from "hast-util-from-html";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const SITE = "https://kemet-travel.com";

// Elements that carry no content for a reader of text.
const SKIP_TAGS = new Set([
  "script", "style", "svg", "nav", "form", "button", "input", "select", "textarea",
  "noscript", "template", "iframe", "video", "audio", "picture", "img", "canvas", "source",
]);
// Blocks that are navigation or a call to action, not content. The enquiry
// details are given once, at the foot of every copy.
const SKIP_CLASS = /(^|\s)(lead-capture|cta|lz-cta|custom-trip-cta|hero-actions|lz-actions|frieze|medallion|rule|pcredit|arrow|sstrip-glyph|sot-sym|dec-sym|sym|wafab|wafab-land)(\s|$)/;
const BLOCK_TAGS = new Set([
  "address", "article", "aside", "blockquote", "details", "div", "dl", "dd", "dt", "fieldset",
  "figcaption", "figure", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "li",
  "main", "ol", "p", "pre", "section", "summary", "table", "tbody", "thead", "tfoot", "tr", "td", "th", "ul",
]);

const cls = (n) => {
  const c = n.properties?.className;
  return Array.isArray(c) ? c.join(" ") : (c ?? "");
};
const skipped = (n) =>
  n.type !== "element" ? n.type !== "text" :
  SKIP_TAGS.has(n.tagName) || n.properties?.hidden !== undefined ||
  n.properties?.ariaHidden === "true" || SKIP_CLASS.test(cls(n)) ||
  // "Explore →" on a card that is already one link: decoration.
  (n.tagName === "span" && /(^|\s)(more|sstrip-more)(\s|$)/.test(cls(n)));

const isBlock = (n) => n.type === "element" && BLOCK_TAGS.has(n.tagName);
/** True when the element, or anything inside it, is block-level. */
const hasBlock = (n) => (n.children ?? []).some((c) => !skipped(c) && (isBlock(c) || hasBlock(c)));

const esc = (s) => s.replace(/([\\`*_\[\]])/g, "\\$1");
const squash = (s) => s.replace(/\s+/g, " ");

function absolute(href, pageUrl) {
  if (!href || href.startsWith("#") || /^(javascript|data):/i.test(href)) return null;
  try { return new URL(href, pageUrl).href; } catch { return null; }
}

/** Inline content of a node as one line of Markdown. */
function inline(n, ctx) {
  if (n.type === "text") return esc(squash(n.value));
  if (skipped(n)) return "";
  const kids = () => (n.children ?? []).map((c) => inline(c, ctx)).join("");
  switch (n.tagName) {
    case "br": return " ";
    case "strong": case "b": { const t = kids().trim(); return t ? `**${t}**` : ""; }
    case "em": case "i": { const t = kids().trim(); return t ? `*${t}*` : ""; }
    case "code": return "`" + squash(text(n)) + "`";
    case "a": {
      const t = kids().trim();
      const url = absolute(n.properties?.href, ctx.url);
      if (!t) return "";
      return url ? `[${t}](${url})` : t;
    }
    default: {
      // An inline wrapper. Separate adjacent label/value spans with a space
      // so "<span>Checked</span><b>Nov</b>" does not read "CheckedNov".
      const t = kids();
      return /^(span|b|small|time|abbr|cite|q|sup|sub|label)$/.test(n.tagName) ? t : ` ${t} `;
    }
  }
}

function text(n) {
  if (n.type === "text") return n.value;
  if (skipped(n)) return "";
  return (n.children ?? []).map(text).join(" ");
}

const para = (n, ctx) => squash((n.children ?? []).map((c) => {
  const t = inline(c, ctx);
  // Sibling inline elements (label + value) need a separator.
  return c.type === "element" ? ` ${t} ` : t;
}).join("")).trim().replace(/ ([,.;:!?])/g, "$1");

/** A block-level node as an array of Markdown blocks. */
function blocks(n, ctx) {
  if (n.type === "text") { const t = esc(squash(n.value)).trim(); return t ? [t] : []; }
  if (skipped(n)) return [];
  const tag = n.tagName;
  const walk = (c = ctx) => (n.children ?? []).flatMap((k) => blocks(k, c));

  if (/^h[1-6]$/.test(tag)) {
    let t = para(n, ctx);
    if (!t) return [];
    // Inside a card that is one big link, the heading carries the link.
    if (ctx.link && !ctx.link.used) { t = `[${t}](${ctx.link.url})`; ctx.link.used = true; }
    return [`${"#".repeat(Math.min(6, Number(tag[1]) + (ctx.shift ?? 0)))} ${t}`];
  }
  if (tag === "hr") return ["---"];
  if (tag === "ul" || tag === "ol") {
    const items = (n.children ?? []).filter((c) => c.type === "element" && c.tagName === "li" && !skipped(c));
    const out = items.map((li, i) => {
      const mark = tag === "ol" ? `${i + 1}.` : "-";
      const body = hasBlock(li) ? blocks({ ...li, tagName: "div" }, ctx).join("\n\n") : para(li, ctx);
      return body ? `${mark} ${body.replace(/\n/g, "\n  ")}` : "";
    }).filter(Boolean);
    return out.length ? [out.join("\n")] : [];
  }
  if (tag === "blockquote") {
    const b = hasBlock(n) ? walk().join("\n\n") : para(n, ctx);
    return b ? [b.split("\n").map((l) => `> ${l}`).join("\n")] : [];
  }
  if (tag === "table") {
    const rows = [];
    const collect = (x) => (x.children ?? []).forEach((c) => {
      if (c.type !== "element") return;
      if (c.tagName === "tr") rows.push(c.children.filter((d) => d.type === "element" && /^t[dh]$/.test(d.tagName)));
      else collect(c);
    });
    collect(n);
    if (!rows.length) return [];
    const cell = (c) => (para(c, ctx) || text(c).trim()).replace(/\|/g, "\\|").replace(/\n/g, " ");
    const width = Math.max(...rows.map((r) => r.length));
    const line = (r) => `| ${Array.from({ length: width }, (_, i) => (r[i] ? cell(r[i]) : "")).join(" | ")} |`;
    return [[line(rows[0]), `| ${Array(width).fill("---").join(" | ")} |`, ...rows.slice(1).map(line)].join("\n")];
  }
  if (tag === "dl") {
    const out = [];
    let term = "";
    for (const c of n.children ?? []) {
      if (c.type !== "element") continue;
      if (c.tagName === "dt") term = para(c, ctx);
      else if (c.tagName === "dd") { out.push(`- **${term}**: ${para(c, ctx)}`); term = ""; }
      else out.push(...blocks(c, ctx));
    }
    return out.length ? [out.join("\n")] : [];
  }
  if (tag === "summary") { const t = para(n, ctx); return t ? [`**${t}**`] : []; }
  if (tag === "a") {
    const url = absolute(n.properties?.href, ctx.url);
    if (!hasBlock(n)) { const t = para(n, ctx); return t ? [url ? `[${t}](${url})` : t] : []; }
    if (!url) return walk();
    const link = { url, used: false };
    const out = walk({ ...ctx, link });
    if (!out.length) return [];
    if (!link.used) out[0] = `[${out[0].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")}](${url})`;
    return out;
  }
  if (tag === "p" || tag === "figcaption" || tag === "li" || tag === "td" || tag === "th" || !isBlock(n) || !hasBlock(n)) {
    const t = hasBlock(n) ? walk().join("\n\n") : para(n, ctx);
    return t ? [t] : [];
  }
  return walk();
}

function find(n, test) {
  if (n.type === "element" && test(n)) return n;
  for (const c of n.children ?? []) { const r = find(c, test); if (r) return r; }
  return null;
}
function findAll(n, test, out = []) {
  if (n.type === "element" && test(n)) out.push(n);
  for (const c of n.children ?? []) findAll(c, test, out);
  return out;
}

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== "_astro") yield* htmlFiles(p); }
    else if (e.name.endsWith(".html")) yield p;
  }
}

const yaml = (s) => `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

let written = 0, skippedPages = 0, bytesIn = 0, bytesOut = 0;
for await (const file of htmlFiles(DIST)) {
  const rel = relative(DIST, file).split("\\").join("/");
  const html = await readFile(file, "utf8");
  const tree = fromHtml(html);
  const head = find(tree, (n) => n.tagName === "head");
  const main = find(tree, (n) => n.tagName === "main");
  if (!head || !main) { skippedPages++; continue; }

  const meta = (name) => find(head, (n) => n.tagName === "meta" && n.properties?.name === name)?.properties?.content ?? "";
  const canonicalUrl = find(head, (n) => n.tagName === "link" && [].concat(n.properties?.rel ?? []).includes("canonical"))?.properties?.href ?? "";
  // The page's own address, as the site spells it: /x.html, or / for an index.
  const own = `${SITE}/${rel.replace(/(^|\/)index\.html$/, "$1")}`;
  if (/noindex/i.test(meta("robots")) || canonicalUrl !== own) { skippedPages++; continue; }

  const title = text(find(head, (n) => n.tagName === "title") ?? { children: [] }).trim();
  const lang = find(tree, (n) => n.tagName === "html")?.properties?.lang ?? "en";
  const ctx = { url: own };
  const body = blocks(main, ctx)
    .map((b) => b.trim()).filter(Boolean)
    // A block repeated straight after itself is a label printed twice for
    // layout (a card's badge and its heading), not content.
    .filter((b, i, a) => b !== a[i - 1])
    .join("\n\n");

  const out =
    `---\ntitle: ${yaml(title)}\nurl: ${own}\nlanguage: ${lang}\n` +
    (meta("description") ? `description: ${yaml(meta("description"))}\n` : "") +
    `---\n\n${body}\n\n---\n\n` +
    `Kemet — private journeys in Egypt. This is the Markdown copy of ${own}\n` +
    `Enquiries: ${SITE}/contact.html · Site index for assistants: ${SITE}/llms.txt\n`;

  await writeFile(`${file}.md`, out);
  written++; bytesIn += html.length; bytesOut += out.length;
}

// Every page declares its copy in <head>; a declared copy that was not
// written is a broken link an agent will follow. Fail the build on it.
let broken = 0;
for await (const file of htmlFiles(DIST)) {
  const html = await readFile(file, "utf8");
  const m = /<link rel="alternate" type="text\/markdown" href="([^"]+)"/.exec(html);
  if (!m) continue;
  const target = join(DIST, new URL(m[1]).pathname);
  try { await stat(target); } catch { broken++; console.error(`markdown-pages: ${relative(DIST, file)} declares ${m[1]}, which was not written`); }
}
if (broken) process.exit(1);

console.log(
  `markdown-pages: ${written} copies written, ${skippedPages} pages without one ` +
  `(not indexable) — ${(bytesIn / 1048576).toFixed(1)} MB of HTML as ${(bytesOut / 1048576).toFixed(1)} MB of Markdown`,
);
