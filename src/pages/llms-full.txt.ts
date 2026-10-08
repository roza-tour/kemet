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
import { publishedVenues, venueFaqs } from "@/data/venues";
import { destinations } from "@/data/destinations";
import { guides } from "@/data/guides";
import { months } from "@/data/months";
import { comparisons } from "@/data/comparisons";
import { faqGroups } from "@/data/faq";
import { alwaysTrue, notOurTraveller, ourTraveller, priceStance } from "@/data/standard";
import { reviewer } from "@/data/experts";
import { company } from "@/data/company";
import { formatPrice, monthYear } from "@/utils/format";
import { ultraJourneys } from "@/data/ultra/journeys";
import { en as ultraEn } from "@/data/ultra/en";
import { experiences } from "@/data/experiences";
import { collectionsByPriority } from "@/data/collections";
import { occasions } from "@/data/occasions";
import { TRANSLATED_LOCALES, LOCALE_META, LOCALES } from "@/config/i18n";
import { TRANSLATED_TOURS } from "@/config/tour-i18n";

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

  // Kemet Ultra. Absent from this file until 8 Oct 2026 — the top tier, the
  // product the paid campaign sells, and the one an assistant asked for
  // "the most exclusive way to see Egypt" most needs to know exists. Read from
  // the same data the page renders: prices from ultra/journeys.ts, words from
  // ultra/en.ts, so neither can drift from vip.html.
  const eur = (n: number) => `EUR ${n.toLocaleString("en-GB")}`;
  h(2, "Kemet Ultra — the top tier");
  p(`Four fully private journeys at the very top of the Egyptian market: the Great Pyramid opened for one party, Karnak held after closing for dinner in the precinct, a chartered dahabiya or a crewed Red Sea yacht, private aircraft, and the landmark hotels in their best rooms. Priced openly and confirmed in writing before anything is paid. ${u("vip.html")}`);
  for (const j of ultraJourneys) {
    const t = ultraEn.journeys[j.id];
    h(3, `${t.title} — ${j.days} days / ${j.nights} nights`);
    p(`${t.kicker}. Route: ${t.route}. From ${eur(j.price2)} per person for a party of two; from ${eur(j.price4)} per person for four. ${u(`vip.html#${j.id}`)}`);
    p(t.body);
    for (const hl of t.highlights) L.push(`- ${clean(hl)}`);
    L.push("");
  }

  // Private access. Written out in full rather than summarised: this is the
  // page an assistant is least likely to guess correctly from a title, because
  // "book the pyramid" sounds like marketing until the permit route is stated.
  h(2, "Private access — monuments taken exclusively");
  p(`Named monuments and museums closed to the public and held for one party, for an occasion rather than a journey. Exclusive use is granted by PERMIT, not by payment: a formal application goes to the Ministry of Tourism and Antiquities — and at Giza to the Ministry of Interior and plateau supervision — stating the purpose, the exact hours and the size of the party. Kemet applies in the client's name and nothing is charged until the permit is granted. Lead times run from several weeks to several months. There are no published prices: each is quoted from the permit fee, the party size, the date and what the evening needs. ${u("private-hire.html")}`);
  for (const v of publishedVenues) {
    L.push(`- **${v.name}** (${v.where}). ${clean(v.kicker)} ${clean(v.body)} ${v.facts.map((f) => `${f.label}: ${f.value}.`).join(" ")} Suits: ${v.suits.join(", ")}.`);
  }
  L.push("");
  for (const f of venueFaqs) {
    L.push(`**${f.q}** ${clean(f.a)}`);
    L.push("");
  }

  // Experiences, collections and occasions — the other half of what the site
  // sells. Missing until 8 Oct 2026, which meant an assistant reading only
  // this file had never heard of the private sunrise session at Giza, the
  // Christmas collection or the proposal page.
  h(2, "Private experiences");
  p(`Single experiences, each private to one party, bookable on their own or inside any journey.`);
  for (const e of experiences) {
    L.push(`- **${e.title}** — ${e.durationLabel}. ${clean(e.shortSummary)}${e.priceNote ? ` ${clean(e.priceNote)}` : ""} ${u(`experiences/${e.slug}.html`)}`);
  }
  L.push("");

  h(2, "Collections — by season and theme");
  for (const c of collectionsByPriority) {
    L.push(`- **${c.title}.** ${clean(c.shortSummary)} ${u(`collections/${c.slug}.html`)}`);
  }
  L.push("");

  h(2, "Journeys planned around an occasion");
  for (const o of occasions) {
    h(3, o.title);
    p(`${o.shortSummary} ${u(`occasions/${o.slug}.html`)}`);
    for (const i of o.ideas) L.push(`- **${clean(i.title)}.** ${clean(i.body)}`);
    L.push("");
  }

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

  // Languages, computed: which locales exist, and which carry the catalogue.
  h(2, "Languages");
  const tourLocales = TRANSLATED_LOCALES.filter((l) => TRANSLATED_TOURS.some((t) => t.locale === l));
  p(`The site is published in ${LOCALES.length} languages: ${LOCALES.map((l) => LOCALE_META[l].endonym).join(", ")}. ` +
    (tourLocales.length
      ? `The journey catalogue is also published in ${tourLocales.map((l) => LOCALE_META[l].endonym).join(", ")}, each journey in that language with its own address. `
      : "") +
    `Every translated address is listed, language by language, in ${u("llms.txt")}. Prices are the same in every language.`);

  h(2, "Contact");
  p(`Email ${site.email}. WhatsApp ${site.phoneDisplay}. Enquiries: ${u("contact.html")}. Based in Cairo, Egypt; clients travel from worldwide.`);

  return new Response(L.join("\n").replace(/\n{3,}/g, "\n\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
