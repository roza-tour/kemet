import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

// Deploy-time configuration is read from the environment (see .env.example),
// with safe fallbacks so a default build is fully reproducible. `site` must
// match `config/site.ts` — both read the same PUBLIC_SITE_URL variable.
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const SITE_URL = (PUBLIC_SITE_URL || "https://kemet-travel.com").replace(/\/$/, "");


// Pages whose canonical points at a different page. They stay on the site and
// in the navigation; they are simply not submitted for indexing.
const CANONICALISED_AWAY = ["/activities/hot-air-balloon-luxor.html"];

// Translation clusters. Read from the SAME file src/config/i18n.ts reads, not
// copied. This block used to be a hand-maintained duplicate "mirrored from
// src/config/i18n.ts" — and the moment four locales were added it was silently
// wrong, which would have published a sitemap advertising alternates the pages
// themselves never declared. astro.config.mjs cannot resolve the "@/" alias, so
// the shared source is JSON rather than TypeScript.
const REGISTRY = JSON.parse(readFileSync("./src/config/translation-groups.json", "utf8"));
const LOCALES = REGISTRY.locales;

// A locale home is published at the directory, not at its index.html.
const LOCALE_HOME = new RegExp(`^/(${LOCALES.slice(1).join("|")})/index$`);
// Any route that sits under a locale folder, for the freshness map below.
const LOCALE_ROUTE = new RegExp(`^(${LOCALES.slice(1).join("|")})/`);

// Sitemap wants the published URL of each member: the locale home is the bare
// directory ("de/"), everything else is the .html file.
const GROUPS = REGISTRY.groups.map((g) =>
  LOCALES.map((loc) => {
    const route = g[loc];
    if (route === "index.html") return "";
    return route.replace(/(^|\/)index\.html$/, "$1");
  }),
);
const LANGS = LOCALES;

// ---------------------------------------------------------------------------
// lastmod — a real content date, or none at all.
//
// This previously stamped every URL with `new Date()` at build time, so all
// 190 entries claimed to have changed at the same millisecond on every
// publish. That is not a freshness signal: Google's guidance is that a lastmod
// it cannot trust is ignored, and an unreliable one risks the whole file being
// discounted.
//
// The obvious fix — the last commit that touched the page's built .html — was
// measured and rejected: every publish rewrites every page (a footer link
// changes all 190), so the git dates came back identical too. The date has to
// come from the SOURCE OF THE CONTENT, not from the rendered artefact.
//
// So each URL is mapped to the files that actually decide what is on it: its
// own page template plus the data module its content lives in. The newest
// commit among those is the answer, and a URL with no match gets no lastmod at
// all rather than a fabricated one.
// ---------------------------------------------------------------------------
const FILE_DATES = new Map();
try {
  const log = execSync("git log --pretty=format:%x00%cI --name-only", {
    maxBuffer: 128 * 1024 * 1024,
    stdio: ["ignore", "pipe", "ignore"],
  }).toString();
  let commitDate = null;
  for (const line of log.split("\n")) {
    if (line.startsWith("\0")) { commitDate = line.slice(1).trim(); continue; }
    const file = line.trim();
    // git log is reverse-chronological, so the first sighting is the newest.
    if (commitDate && file.startsWith("src/") && !FILE_DATES.has(file)) {
      FILE_DATES.set(file, commitDate);
    }
  }
} catch {
  // No git history available (a tarball build). Every entry omits lastmod.
}

/** Section prefix → [page template, data module] that decide its content. */
const CONTENT_SOURCES = [
  [/^destinations\//, ["src/pages/destinations/[slug].astro", "src/data/destinations.ts"]],
  [/^experiences\//, ["src/pages/experiences/[slug].astro", "src/data/experiences.ts"]],
  [/^activities\//, ["src/pages/activities/[slug].astro", "src/data/activities.ts"]],
  [/^collections\//, ["src/pages/collections/[slug].astro", "src/data/collections.ts"]],
  [/^guides\//, ["src/pages/guides/[slug].astro", "src/data/guides.ts"]],
  [/^visa\//, ["src/pages/visa/[slug].astro", "src/data/entryRequirements.ts"]],
  [/^compare\//, ["src/pages/compare/[slug].astro", "src/data/comparisons.ts"]],
  [/^when-to-go\//, ["src/pages/when-to-go/[slug].astro", "src/data/months.ts"]],
  [/^occasions\//, ["src/pages/occasions/[slug].astro", "src/data/occasions.ts"]],
  [LOCALE_ROUTE, ["src/pages/[locale]/[slug].astro"]],
  [/^tour-/, ["src/pages/[slug].astro", "src/data/tours.ts"]],
];

/** Newest commit date among the sources that decide this route's content. */
function contentLastmod(route) {
  const sources = [];
  for (const [pattern, files] of CONTENT_SOURCES) {
    if (pattern.test(route)) {
      sources.push(...files);
      // A localised route's words live in its own locale module.
      const locale = route.match(LOCALE_ROUTE);
      if (locale) sources.push(`src/data/i18n/${locale[1]}.ts`);
      break;
    }
  }
  // Standalone pages. A section hub is authored either as `<name>.astro` or as
  // `<name>/index.astro` — both spellings are in use here, so try both, and
  // pull in the section's data module too since that is what the hub lists.
  const stem = route.replace(/\.html$/, "") || "index";
  sources.push(`src/pages/${stem}.astro`, `src/pages/${stem}/index.astro`);
  for (const [pattern, files] of CONTENT_SOURCES) {
    if (pattern.test(`${stem}/`)) { sources.push(...files); break; }
  }
  const dates = sources.map((f) => FILE_DATES.get(f)).filter(Boolean);
  return dates.length ? dates.sort().at(-1) : undefined;
}
const SITEMAP_ALTERNATES = {};
for (const g of GROUPS) {
  const links = g.map((path, i) => ({ lang: LANGS[i], url: `${SITE_URL}/${path}` }));
  links.push({ lang: "x-default", url: `${SITE_URL}/${g[0]}` });
  for (const path of g) SITEMAP_ALTERNATES[`${SITE_URL}/${path}`] = links;
}

// Static output. build.format "file" emits flat .html files (index.html,
// tours.html, tour-7-day.html ...) so the in-page ".html" links resolve on any
// static host such as cPanel / public_html.
export default defineConfig({
  site: SITE_URL,
  build: { format: "file" },
  // This is a multi-page site: every click is a full document load. Prefetching
  // on hover/focus fetches the next page ~200-800ms before the click lands, so
  // navigation feels instant instead of "heavy". Only same-origin links are
  // prefetched, Astro skips it on save-data and 2G connections, and a
  // `<link rel="prefetch">` is a browser hint only — crawlers ignore it, so
  // this carries no indexing risk.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [
    sitemap({
      // A sitemap must list exactly the URLs the canonical tags declare. Any
      // disagreement is a conflicting signal and Search Console reports it.
      //
      //   • build.format "file" emits flat .html files, so the sitemap uses the
      //     .html form — crawlers never hit an extensionless 404.
      //   • A directory index is published at the directory (/de/), never at
      //     /de/index.html, matching utils/links → publicPath.
      //   • Pages that canonicalise to another page are excluded entirely: a
      //     URL cannot both be submitted for indexing and point elsewhere.
      // NOTE: `filter` sees the pre-serialize URL, which has no ".html"
      // suffix under build.format "file" — compare against both forms.
      filter: (page) => {
        const p = page.replace(/\/$/, "").replace(/\.html$/, "");
        return !CANONICALISED_AWAY.some((c) => p.endsWith(c.replace(/\.html$/, "")));
      },
      serialize(item) {
        const url = new URL(item.url);
        let path = url.pathname.replace(/\/$/, "");
        if (path === "") {
          item.url = `${url.origin}/`;
        } else if (LOCALE_HOME.test(path)) {
          // "/de/index" → "/de/"
          item.url = `${url.origin}${path.replace(/index$/, "")}`;
        } else {
          item.url = `${url.origin}${path}.html`;
        }
        // hreflang alternates, so Google finds the whole translation cluster
        // from the sitemap as well as from the page head.
        const group = SITEMAP_ALTERNATES[item.url];
        if (group) item.links = group;
        // Freshness: when this page's content last actually changed, or nothing.
        // A directory URL (/, /de/) is served by its index.html.
        const rel = new URL(item.url).pathname.replace(/^\//, "");
        const when = contentLastmod(rel === "" || rel.endsWith("/") ? `${rel}index.html` : rel);
        if (when) item.lastmod = when;
        else delete item.lastmod;
        return item;
      },
    }),
  ],
});
