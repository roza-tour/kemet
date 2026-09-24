// ---------------------------------------------------------------------------
// scripts/price-audit.mjs — proves that every money figure the site serves is
// either a real catalogue price or a declared exception.
//
//     npm run audit:price
//
// WHY THIS EXISTS
// Prices live in one file, but they are QUOTED in prose in several others: the
// FAQ answer about cost, the cost page's market-band table, llms.txt. When the
// catalogue moved 10% on 23 September 2026, three of those quotes would have
// silently kept the old numbers — a site telling a reader €52 on one page and
// €57 on another, with no build error and nothing to notice it.
//
// It also caught something older and worse. The cost page placed Kemet in the
// "private, tailor-made, €200–450 per person per day" band and printed Kemet's
// real prices a paragraph below. Dividing those prices by their own durations
// gave €140–188 a day — every journey below the floor of the band the page
// said it sat in. The page contradicted itself for anyone who did the sum. It
// now computes the per-day figure from the catalogue and states it.
//
// The rule enforced here: a € figure in the built output is a catalogue price,
// a catalogue `was` value, or it appears in KNOWN below with a reason. There is
// no fourth kind.
// ---------------------------------------------------------------------------
import { readFile, readdir } from "node:fs/promises";
import { join, extname } from "node:path";
import { tours } from "../src/data/tours.ts";

const DIST = new URL("../dist/", import.meta.url).pathname;

/** Figures that are deliberately NOT Kemet prices. Each needs a reason. */
const KNOWN = new Map([
  [40,   "market band — independent travel, per day"],
  [90,   "market band — independent / group boundary, per day"],
  [180,  "market band — group tours ceiling, per day"],
  [200,  "market band — private tailor-made floor, per day"],
  [450,  "market band — private tailor-made ceiling, per day"],
  [600,  "market band — top of market, per day"],
  [2800, "market figure — a week for two, total"],
  [6000, "market figure — a week for two, total"],
  [400,  "rounded prose in faq.ts: 'roughly €400 and €1,950'"],
  [1950, "rounded prose in faq.ts: 'roughly €400 and €1,950'"],
  [120,  "third-party cost — hot-air balloon add-on, booked on request"],
  [12,   "gratuities guidance, per day"],
  [8,    "gratuities guidance, per day"],
]);

const days = (label) => {
  const m = /^(\d+)\s*Days?/i.exec(label);
  return m ? Number(m[1]) : 1;
};

const prices = new Set(tours.map((t) => t.price));
const wases = new Set(tours.filter((t) => t.was).map((t) => t.was));
// Flight versions are priced as the journey plus a stated difference, so they
// are computed here the same way the pages compute them — never listed by hand,
// which is how a quoted figure falls behind the moment prices move.
const flies = new Set(tours.filter((t) => t.flyOption).map((t) => t.price + t.flyOption.extra));
const multi = tours.filter((t) => t.kind === "multiday");
const perDay = multi.map((t) => t.price / days(t.durationLabel));
// The computed per-day range the cost page prints, so it is not "unexplained".
KNOWN.set(Math.round(Math.min(...perDay)), "computed per-day floor, printed on the cost page");
KNOWN.set(Math.round(Math.max(...perDay)), "computed per-day ceiling, printed on the cost page");

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else if ([".html", ".txt", ".json"].includes(extname(e.name))) out.push(p);
  }
  return out;
}

const seen = new Map();
for (const f of await walk(DIST)) {
  const s = await readFile(f, "utf8");
  for (const m of s.matchAll(/€\s?(\d[\d,]*)/g)) {
    const n = Number(m[1].replace(/,/g, ""));
    if (!seen.has(n)) seen.set(n, new Set());
    seen.get(n).add(f.replace(DIST, ""));
  }
}

const unexplained = [];
console.log("figure   kind                                   pages");
for (const n of [...seen.keys()].sort((a, b) => a - b)) {
  const where = [...seen.get(n)];
  const kind = prices.has(n) ? "tour price"
    : wases.has(n) ? "struck-through 'was'"
    : flies.has(n) ? "flight version (price + stated difference)"
    : KNOWN.has(n) ? KNOWN.get(n)
    : (unexplained.push([n, where]), "*** UNEXPLAINED ***");
  console.log(`€${String(n).padEnd(7)} ${kind.padEnd(38)} ${where.length}`);
}

// --- internal consistency of the catalogue itself ---------------------------
const problems = [];
for (const t of tours) {
  if (t.was && t.was <= t.price) problems.push(`${t.slug}: was ${t.was} is not above price ${t.price}`);
  if (t.price <= 0) problems.push(`${t.slug}: non-positive price`);
  if (t.kind === "multiday" && days(t.durationLabel) < 2) problems.push(`${t.slug}: multiday but durationLabel "${t.durationLabel}" parses to 1 day`);
}
const dayTours = tours.filter((t) => t.kind !== "multiday").map((t) => t.price);
console.log(`\ncatalogue  ${tours.length} journeys · ${wases.size} struck-through values`);
console.log(`day tours  €${Math.min(...dayTours)}–${Math.max(...dayTours)}`);
console.log(`multi-day  €${Math.min(...multi.map(t=>t.price))}–${Math.max(...multi.map(t=>t.price))}`);
console.log(`per day    €${Math.round(Math.min(...perDay))}–${Math.round(Math.max(...perDay))} (multi-day, fully inclusive)`);

if (problems.length) { console.log("\nCATALOGUE PROBLEMS:"); problems.forEach((p) => console.log("  " + p)); }
if (unexplained.length) {
  console.log("\nUNEXPLAINED FIGURES — add to KNOWN with a reason, or fix the page:");
  for (const [n, w] of unexplained) console.log(`  €${n}  on ${w.slice(0, 3).join(", ")}`);
}
if (problems.length || unexplained.length) process.exit(1);
console.log("\nEvery money figure on the site is a catalogue price or a declared exception.");
