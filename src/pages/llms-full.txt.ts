// ---------------------------------------------------------------------------
// /llms-full.txt — the companion to /llms.txt under the same convention.
//
// llms.txt is an INDEX: titles, URLs and one-line descriptions, so an assistant
// knows which page to fetch. llms-full.txt is the CONTENT: the substance of the
// site as clean Markdown in a single document, so an assistant that will not or
// cannot fetch twenty pages still has the actual answers.
//
// WHY THIS MATTERS (GEO)
// A generative engine reaching for a fact about visiting Egypt has two ways to
// get it: parse our HTML — nav, footer, scripts, styling and all — or read a
// document written for it. The second produces cleaner, more quotable
// extraction, and it is the difference between being cited and being
// paraphrased into anonymity.
//
// EDITORIAL RULES
//   · Every claim here also appears on a real page. This file summarises the
//     site; it never becomes a separate source of truth that can drift.
//   · Prices, fees, counts and dates are interpolated from the same data
//     modules the pages use, so they cannot go stale independently.
//   · The named reviewer is stated up front, because attribution is what makes
//     a passage safe for an engine to quote.
// ---------------------------------------------------------------------------
import type { APIRoute } from "astro";
import { SITE_URL, site } from "@/config/site";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { guides } from "@/data/guides";
import { months } from "@/data/months";
import { comparisons } from "@/data/comparisons";
import { faqGroups } from "@/data/faq";
import { alwaysTrue, notOurTraveller, ourTraveller, priceStance } from "@/data/standard";
import { reviewer } from "@/data/experts";
import {
  nationalities, VISA_FEE_USD, VISA_FEE_MULTI_USD, VISA_STAY_DAYS,
  GCC_STAY_DAYS, VERIFIED_ON, OFFICIAL_PORTAL,
} from "@/data/entryRequirements";
import { company } from "@/data/company";
import { formatPrice, monthYear } from "@/utils/format";

const u = (path: string) => `${SITE_URL}/${path}`;
const clean = (s: string) => s.replace(/\s+/g, " ").trim();

export const GET: APIRoute = () => {
  const L: string[] = [];
  const h = (level: number, text: string) => { L.push(""); L.push("#".repeat(level) + " " + text); L.push(""); };
  const p = (text: string) => { L.push(clean(text)); L.push(""); };

  const prices = tours.map((t) => t.price).sort((a, b) => a - b);
  const cheapest = prices[0];
  const dearest = prices[prices.length - 1];

  L.push(`# ${site.name} — Luxury Egypt Travel: full content`);
  L.push("");
  p(`${company.description} Kemet designs entirely private, tailor-made journeys in Egypt, led by licensed Egyptologist guides, priced per person in EUR, with no group departures and no fixed dates.`);
  p(`Source: ${SITE_URL}. Index version: ${SITE_URL}/llms.txt`);
  p(`Editorial review: ${reviewer.name}, ${reviewer.role} — ${reviewer.short}. Profile: ${u(`about.html#${reviewer.id}`)}`);
  p(`This document restates content published on the site. Where a figure carries a checked-on date, that date is given with it.`);

  // --- Positioning ----------------------------------------------------------
  h(2, "What Kemet is");
  for (const point of alwaysTrue) p(`**${point.title}.** ${point.body}`);
  h(3, "Who these journeys suit");
  for (const i of ourTraveller) L.push(`- ${clean(i)}`);
  L.push("");
  h(3, "Who they do not suit");
  for (const i of notOurTraveller) L.push(`- ${clean(i)}`);
  L.push("");
  h(3, "Position on price");
  p(`**${priceStance.headline}** ${priceStance.body}`);

  // --- Entry requirements ---------------------------------------------------
  h(2, "Egypt entry requirements");
  p(`Checked ${monthYear(VERIFIED_ON)} against public sources. The authority is the official portal ${OFFICIAL_PORTAL}; rules are set by the Egyptian government and change.`);
  p(`A single-entry tourist visa costs US$${VISA_FEE_USD} and permits a stay of up to ${VISA_STAY_DAYS} days. The multiple-entry e-Visa costs US$${VISA_FEE_MULTI_USD}. GCC nationals (Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain, Oman) enter without a tourist visa for up to ${GCC_STAY_DAYS} days. Passports must be valid for at least six months beyond the date of entry.`);
  p(`Entry rules for ${nationalities.length} nationalities are published individually at ${u("visa.html")}.`);
  const byRoute = nationalities.reduce<Record<string, string[]>>((acc, n) => {
    (acc[n.route] ??= []).push(n.country);
    return acc;
  }, {});
  for (const [route, list] of Object.entries(byRoute)) {
    L.push(`- **${route.replace(/-/g, " ")}** (${list.length}): ${list.sort().join(", ")}`);
  }
  L.push("");

  // --- Cost -----------------------------------------------------------------
  h(2, "What a private Egypt journey costs");
  p(`A fully private, tailor-made journey with a licensed Egyptologist, a private vehicle and driver and good hotels costs roughly EUR 200-450 per person per day in the Egyptian market. Kemet's published journeys run from ${formatPrice(cheapest)} per person for a single day to ${formatPrice(dearest)} per person for a fourteen-day grand tour. The per-person figure falls as the party grows, because the guide and the vehicle are shared across more people. Full detail: ${u("egypt-tour-cost.html")}`);

  // --- Safety ---------------------------------------------------------------
  h(2, "Safety in Egypt");
  p(`The tourist regions — Cairo, Giza, Luxor, Aswan, Alexandria and the Red Sea coast — are heavily policed and receive millions of visitors a year. The practical nuisances are persistent sellers at the major sites and heavy Cairo traffic, not crime; a private guide and driver remove most of both. The genuine seasonal risk in Upper Egypt between May and September is heat, not crime.`);
  p(`North Sinai and remote border areas carry standing advisories from most Western governments and are not part of any itinerary. The South Sinai resort coast — Sharm el-Sheikh, Dahab, Nuweiba — is a different region several hundred kilometres away and is generally excepted from those advisories. Travellers should read their own government's current advice before booking. Full detail: ${u("egypt-safety.html")}`);

  // --- When to go -----------------------------------------------------------
  h(2, "When to visit Egypt, month by month");
  for (const m of months) {
    L.push(`- **${m.name}.** ${clean(m.verdict)} (${u(`when-to-go/${m.slug}.html`)})`);
  }
  L.push("");

  // --- The decisions --------------------------------------------------------
  h(2, "The decisions travellers get stuck on");
  for (const c of comparisons) {
    h(3, c.title);
    p(c.verdict);
    p(`Full comparison: ${u(`compare/${c.slug}.html`)}`);
  }

  // --- Catalogue ------------------------------------------------------------
  h(2, "Private journeys");
  p(`${tours.length} journeys, every one private and adjustable. Prices are per person, "from", in EUR.`);
  for (const t of [...tours].sort((a, b) => a.price - b.price)) {
    L.push(`- **${t.title}** — ${t.durationLabel}. ${clean(t.summary)} From ${formatPrice(t.price)} per person. ${u(`${t.slug}.html`)}`);
  }
  L.push("");

  h(2, "Destinations");
  for (const d of destinations) {
    L.push(`- **${d.title}.** ${clean(d.shortSummary)} ${u(`destinations/${d.slug}.html`)}`);
  }
  L.push("");

  h(2, "Travel guides");
  for (const g of guides) {
    L.push(`- **${g.title}.** ${clean(g.shortSummary)}${g.lastUpdated ? ` Updated ${monthYear(g.lastUpdated)}.` : ""} ${u(`guides/${g.slug}.html`)}`);
  }
  L.push("");

  // --- FAQ ------------------------------------------------------------------
  h(2, "Frequently asked questions");
  for (const group of faqGroups) {
    h(3, group.heading);
    for (const f of group.items) {
      L.push(`**${clean(f.q)}**`);
      L.push("");
      p(f.a);
    }
  }

  h(2, "Contact");
  p(`Email ${site.email}. WhatsApp ${site.phoneDisplay}. Enquiries: ${u("contact.html")}. Based in Cairo, Egypt; clients travel from worldwide.`);

  return new Response(L.join("\n").replace(/\n{3,}/g, "\n\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
