// ---------------------------------------------------------------------------
// scripts/design-audit.mjs — measures the things a design review usually only
// asserts: how many font sizes and spacing values the site really renders, how
// much of its spacing sits on the scale, whether text meets contrast, and
// whether a keyboard user can see where they are.
//
//     npm run audit:design
//
// WHY THIS IS A COMMITTED SCRIPT AND NOT A ONE-OFF
// "The typography is more consistent now" is not a claim anyone can check. The
// numbers below are. Every one of them caught something real:
//
//   62 font sizes / 51 spacings   is what the site rendered before it had a
//                                 scale. Nothing was wrong with any single
//                                 value; they simply were not a system, and a
//                                 reader feels that as "assembled".
//
//   focus ring                    measured with REAL Tab presses. An earlier
//                                 version called el.focus() and reported 9/25.
//                                 That number was meaningless: :focus-visible
//                                 does not fire on programmatic focus. The
//                                 true figure was 23/25, and the two genuine
//                                 gaps it hid were worth fixing.
//
//   contrast                      composites every semi-transparent layer from
//                                 the root down. A first version took the
//                                 first non-transparent backgroundColor it
//                                 found and treated it as opaque, which turned
//                                 rgba(255,255,255,.04) cards into near-white
//                                 and invented a dozen failures. Elements
//                                 painted with a gradient are skipped and
//                                 counted separately — a gradient lives in
//                                 background-image, where no colour walk can
//                                 see it, so .btn-solid (gold, near-black
//                                 label, 10.3:1 by hand) read as 1.0:1.
//
// It needs a build to measure, and serves it itself:  npm run build first.
// ---------------------------------------------------------------------------
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";


// Playwright is not a dependency of this project — it would add ~300MB to an
// install whose only other job is `astro build`, and the live server never runs
// npm install at all. It is resolved at runtime from wherever it happens to be
// (a global install is fine) and the script says so plainly when it is not.
let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  // ESM does not consult NODE_PATH, so a global install is invisible to a bare
  // import. Ask npm where it put one and import it by path.
  try {
    const { execSync } = await import("node:child_process");
    const globalRoot = execSync("npm root -g", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    ({ chromium } = await import(`file://${globalRoot}/playwright/index.mjs`));
  } catch {
    console.error("This audit needs Playwright, which this project does not depend on.");
    console.error("Install it once, globally or locally:  npm i -D playwright");
    console.error("Then, if the browser is not bundled:   npx playwright install chromium");
    process.exit(1);
  }
}

const ROOT = new URL("../dist/", import.meta.url).pathname;
const PORT = 8790;

const PAGES = [
  "index.html", "tours.html", "tour-10-day.html", "vip.html", "private-hire.html",
  "destinations/aswan.html", "experiences/sunrise-giza-pyramids.html",
  "guides/egypt-travel-guide.html", "faq.html", "about.html", "plan.html",
  "collections/luxury-egypt.html",
];

/** The space scale from global.css. Kept here so a drift shows up as a number. */
const SCALE = ["6px", "12px", "18px", "24px", "30px", "42px", "64px", "96px"];

const TYPES = {
  ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".svg": "image/svg+xml", ".webp": "image/webp",
  ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2",
  ".xml": "application/xml", ".txt": "text/plain",
};

const server = createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(req.url.split("?")[0]);
    const body = await readFile(join(ROOT, path === "/" ? "index.html" : path));
    res.writeHead(200, { "Content-Type": TYPES[extname(path)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404).end("not found");
  }
});
await new Promise((r) => server.listen(PORT, r));

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
});
const base = `http://localhost:${PORT}/`;

const allSizes = new Set(), allGaps = new Set(), h1s = new Set();
let onScale = 0, offScale = 0, lowContrast = 0, skippedGradient = 0;

console.log("page".padEnd(42), "H1".padEnd(9), "sizes", "gaps", "contrast<4.5");
for (const path of PAGES) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(300);

  const r = await page.evaluate(() => {
    const lum = (c) => {
      const m = c.match(/[\d.]+/g).map(Number);
      const [r, g, b] = m.slice(0, 3).map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    const sizes = new Set(), gaps = [];
    let low = 0, gradient = 0;

    for (const el of document.querySelectorAll("main *")) {
      const cs = getComputedStyle(el);
      for (const k of ["marginTop", "marginBottom", "paddingTop", "paddingBottom"]) {
        if (cs[k] !== "0px") gaps.push(cs[k]);
      }
      if (!el.textContent?.trim() || el.children.length) continue;
      sizes.add(cs.fontSize);

      if (/gradient/.test(cs.backgroundImage)) { gradient++; continue; }
      const chain = [];
      for (let n = el; n; n = n.parentElement) chain.push(getComputedStyle(n).backgroundColor);
      let bg = [11, 9, 7];
      for (let i = chain.length - 1; i >= 0; i--) {
        const p = chain[i].match(/[\d.]+/g);
        if (!p) continue;
        const a = p.length > 3 ? +p[3] : 1;
        if (a === 0) continue;
        bg = [0, 1, 2].map((k) => +p[k] * a + bg[k] * (1 - a));
      }
      const fg = lum(cs.color), bgL = lum(`rgb(${bg.join(",")})`);
      const ratio = (Math.max(fg, bgL) + 0.05) / (Math.min(fg, bgL) + 0.05);
      if (ratio < 4.5 && parseFloat(cs.fontSize) < 24) low++;
    }
    const h1 = document.querySelector("h1");
    return { sizes: [...sizes], gaps, low, gradient, h1: h1 ? getComputedStyle(h1).fontSize : "none" };
  });

  r.sizes.forEach((s) => allSizes.add(s));
  r.gaps.forEach((g) => { allGaps.add(g); SCALE.includes(g) ? onScale++ : offScale++; });
  h1s.add(r.h1);
  lowContrast += r.low;
  skippedGradient += r.gradient;
  console.log(path.padEnd(42), String(r.h1).padEnd(9), String(r.sizes.length).padEnd(5),
    String(new Set(r.gaps).size).padEnd(4), String(r.low));
  await page.close();
}

// --- Core Web Vitals ---------------------------------------------------------
// Added because the localised pages shipped with CLS 0.2947 — a failing Core
// Web Vital, on the pages built to rank in new markets — and nothing in this
// repository would have noticed: not the build, not astro check, not the SEO
// audit, not a screenshot. The cause was a web font swapping in and adding a
// line to a paragraph, which is invisible unless something is watching for it.
//
// Thresholds are Google's: LCP good under 2500ms, CLS good under 0.1, poor at
// 0.25. Served from localhost, so LCP here measures the page's own work rather
// than the network — a regression shows up as a change, not as an absolute.
console.log("\nCore Web Vitals (localhost — watch for CHANGES, not absolutes)");
console.log("  page".padEnd(28), "LCP", "     CLS");
for (const path of [...PAGES.slice(0, 5), "de/index.html", "id/index.html"]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + path, { waitUntil: "networkidle" });
  const v = await page.evaluate(() => new Promise((res) => {
    let lcp = 0, cls = 0;
    new PerformanceObserver((l) => { for (const e of l.getEntries()) lcp = Math.max(lcp, e.startTime); })
      .observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value; })
      .observe({ type: "layout-shift", buffered: true });
    setTimeout(() => res({ lcp: Math.round(lcp), cls: +cls.toFixed(4) }), 900);
  }));
  const flag = v.cls >= 0.25 ? "  ✗ POOR" : v.cls >= 0.1 ? "  ! needs work" : "";
  console.log("  " + path.padEnd(26), String(v.lcp + "ms").padEnd(8), String(v.cls).padEnd(8) + flag);
  await page.close();
}

// --- focus: real Tab presses, never el.focus() ------------------------------
console.log("\nfocus ring, 25 Tab stops");
for (const path of ["index.html", "tours.html", "vip.html", "plan.html", "private-hire.html"]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(300);
  let seen = 0, ringed = 0;
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press("Tab");
    const ok = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const cs = getComputedStyle(el);
      const wrap = el.closest(".nsearch");
      return (cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) > 0)
        || cs.boxShadow !== "none"
        || (wrap && getComputedStyle(wrap).boxShadow !== "none");
    });
    if (ok === null) continue;
    seen++; if (ok) ringed++;
  }
  console.log(" ", path.padEnd(22), `${ringed}/${seen}`);
  await page.close();
}

// --- how long the seasonal calendar has left ---------------------------------
// The base seasons and the computable occasions roll forward on every build.
// Ramadan and the two Eids cannot be computed — the Islamic month turns on a
// sighting — so they are typed in and they do run out. When they do, the site
// keeps working and quietly stops marking Ramadan, which is not something
// anyone would notice from the outside.
{
  const cal = await readFile(new URL("../src/data/seasonalCalendar.ts", import.meta.url), "utf8");
  const islamic = [...cal.matchAll(/(?:ramadan|eidAlFitr|eidAlAdha)\("[\d-]+", "([\d-]+)"/g)]
    .map((m) => m[1]).sort();
  const last = islamic.at(-1) ?? "none";
  const years = last === "none" ? 0 : (new Date(last) - Date.now()) / 31557600000;
  console.log(`\nRamadan and Eid are entered through ${last} (${years.toFixed(1)} years)`);
  if (years < 2) console.log("   ADD MORE — inside two years. Everything else in the calendar extends itself.");
}

// --- images that are referenced but not there --------------------------------
// This check exists because the trip designer shipped with a hero pointing at
// /images/aswan/aswan-felucca-sunset.webp, a file that has never existed. The
// page rendered its alt text instead, and nothing failed: not the build, not
// astro check, not the SEO audit. A missing photograph on a page selling
// photography is invisible to every check that does not look for it.
{
  const { readdir } = await import("node:fs/promises");
  const { existsSync } = await import("node:fs");
  const SRC = new URL("../src/", import.meta.url).pathname;
  const PUB = new URL("../public/", import.meta.url).pathname;
  const walk = async (dir) => {
    const out = [];
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) out.push(...await walk(p));
      else if (/\.(astro|ts)$/.test(e.name)) out.push(p);
    }
    return out;
  };
  const refs = new Map();
  for (const file of await walk(SRC)) {
    const text = await readFile(file, "utf8");
    for (const m of text.matchAll(/["'](\/images\/[^"']+\.(?:webp|jpg|jpeg|png|svg))["']/g)) {
      if (!refs.has(m[1])) refs.set(m[1], file.replace(SRC, "src/"));
    }
  }
  const missing = [...refs].filter(([p]) => !existsSync(join(PUB, p)));
  console.log("\nimage references:", refs.size, " missing:", missing.length);
  for (const [p, file] of missing) console.log("   MISSING", p, "←", file);
}

const pct = (100 * onScale / (onScale + offScale)).toFixed(1);
console.log("\n── across all pages ──");
console.log("distinct font sizes rendered:", allSizes.size, " (was 62 before the scale)");
console.log("distinct spacing values:     ", allGaps.size, " (was 51)");
console.log("spacing on the scale:        ", `${pct}%`, ` (was 47.8%)`);
console.log("distinct H1 sizes:           ", [...h1s].join(" · "));
console.log("text under 4.5:1:            ", lowContrast);
console.log("gradient-painted, not measurable by colour:", skippedGradient);

await browser.close();
server.close();
