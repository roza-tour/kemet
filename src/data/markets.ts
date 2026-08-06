// ---------------------------------------------------------------------------
// SOURCE MARKETS — who this site is trying to be found by.
//
// WHY THIS FILE EXISTS
// Until now the site told search engines it served "Worldwide". That is true
// and completely useless: it is the same thing every travel site says, it
// distinguishes nothing, and it gives an answer engine no reason to surface
// Kemet when someone in Riyadh or Zurich asks about a private Egypt trip.
// "Worldwide" is not targeting — it is the absence of targeting.
//
// This file is the targeting, written down once, in the code, so that:
//   · the organisation's structured data names the markets it serves instead
//     of shrugging at the planet;
//   · every per-nationality page can say plainly which passport it is for;
//   · the gaps are VISIBLE — `npm run audit` prints which priority market has
//     no entry-requirements page and which market's language is not published,
//     so "we should cover X" is a fact on a screen rather than a memory.
//
// WHAT MAKES A MARKET PRIORITY HERE
// Not raw arrival numbers. This is the list for the tier Kemet actually sells:
// private, guided, high-spend travel. A market earns its place through some
// combination of — good direct or one-stop connectivity to Cairo, a habit of
// buying guided rather than independent travel, and enough spend for a private
// Egyptologist and a river-facing suite to be a normal decision rather than a
// stretch. Several very high-volume charter markets are therefore ranked below
// smaller markets that buy the top of the range.
//
// ⚠️ WHAT IS NOT CLAIMED HERE
// No arrival figures, no market-share percentages, no rankings presented as
// research. Every `why` below is a statement of who we are aiming at and the
// practical reason — connectivity, language, season, buying habit — not a
// statistic dressed up as one. If a number is ever added to this file it needs
// a source next to it, in the same way entryRequirements carries VERIFIED_ON.
// ---------------------------------------------------------------------------
import { nationalities } from "@/data/entryRequirements";
import { LOCALES } from "@/config/i18n";

export type MarketRegion =
  | "Western Europe"
  | "Northern Europe"
  | "Central & Eastern Europe"
  | "Gulf"
  | "North America"
  | "Asia-Pacific";

export interface SourceMarket {
  /** ISO 3166-1 alpha-2. Used as the schema.org Country identifier. */
  code: string;
  /** Country name, as it should read in structured data and in prose. */
  country: string;
  /** How this market's travellers are addressed, e.g. "Swiss travellers". */
  demonym: string;
  region: MarketRegion;
  /**
   * The language this market SEARCHES in — not necessarily its official
   * language. The Gulf searches in Arabic and English; the Netherlands and the
   * Nordics search for long-haul travel largely in English. Getting this wrong
   * is how a site publishes a page nobody in the market would ever type.
   */
  searchLanguage: string;
  /**
   * Route file of the entry-requirements page for this passport. Validated at
   * build time against data/entryRequirements — a typo here would otherwise
   * publish a link to a page that does not exist.
   */
  visaSlug?: string;
  /** When this market travels to Egypt, and the practical consequence. */
  season: string;
  /** Why this market is a priority for the private, high-spend tier. */
  why: string;
}

/**
 * Ordered by how directly the market maps onto what Kemet sells. The order is
 * an editorial judgement, not a measurement, and it is the order the markets
 * appear in the structured data.
 */
export const sourceMarkets: SourceMarket[] = [
  // ===== Gulf ==============================================================
  // Short-haul, high-spend, and the one region that travels to Egypt in the
  // months Europe avoids. Large family parties are the norm rather than the
  // exception, which is precisely where a private vehicle and a private guide
  // stop being a luxury and start being the only sensible arrangement.
  {
    code: "SA", country: "Saudi Arabia", demonym: "Saudi travellers", region: "Gulf",
    searchLanguage: "ar", visaSlug: "saudi-arabia",
    season: "Summer and school holidays — the months European demand drops, which makes them easy to serve well.",
    why: "Two to three hours from Cairo, travels in large family groups, and buys private guiding and private transport as standard rather than as an upgrade.",
  },
  {
    code: "AE", country: "United Arab Emirates", demonym: "UAE travellers", region: "Gulf",
    searchLanguage: "ar", visaSlug: "united-arab-emirates",
    season: "Year-round, with a strong summer peak and long-weekend breaks around national holidays.",
    why: "A dense expatriate and resident market with excellent daily connectivity to Cairo and an established habit of buying the top of the range.",
  },
  {
    code: "KW", country: "Kuwait", demonym: "Kuwaiti travellers", region: "Gulf",
    searchLanguage: "ar", visaSlug: "kuwait",
    season: "Summer, and Eid holidays in both directions of the year.",
    why: "Long summer holidays, large parties, and a strong preference for privately arranged travel over packaged departures.",
  },
  {
    code: "QA", country: "Qatar", demonym: "Qatari travellers", region: "Gulf",
    searchLanguage: "ar", visaSlug: "qatar",
    season: "Summer and Eid, plus short winter breaks.",
    why: "Small market, high spend per party, and direct connectivity — the profile the VIP tier is written for.",
  },
  {
    code: "BH", country: "Bahrain", demonym: "Bahraini travellers", region: "Gulf",
    searchLanguage: "ar", visaSlug: "bahrain",
    season: "Summer and Eid.",
    why: "Small but consistent, and reached by the same Arabic-language and Gulf-season material as its neighbours.",
  },
  {
    code: "OM", country: "Oman", demonym: "Omani travellers", region: "Gulf",
    searchLanguage: "ar", visaSlug: "oman",
    season: "Summer and Eid.",
    why: "Completes Gulf coverage; the same entry rules and the same season as the rest of the GCC.",
  },

  // ===== Western Europe ====================================================
  {
    code: "GB", country: "United Kingdom", demonym: "British travellers", region: "Western Europe",
    searchLanguage: "en", visaSlug: "united-kingdom",
    season: "October to April, concentrated on half-term, Christmas and Easter.",
    why: "Searches in English, so it lands on the complete site rather than a seven-page summary — and it is a long-established market for guided Nile travel at the top of the range.",
  },
  {
    code: "DE", country: "Germany", demonym: "German travellers", region: "Western Europe",
    searchLanguage: "de", visaSlug: "germany",
    season: "October to April for the Nile Valley; the Red Sea runs year-round.",
    why: "Buys guided cultural travel rather than independent itineraries, plans a long way ahead, and reads detail before booking — which is what this site is built to provide.",
  },
  {
    code: "FR", country: "France", demonym: "French travellers", region: "Western Europe",
    searchLanguage: "fr", visaSlug: "france",
    season: "October to April, with the Toussaint and February school holidays falling inside the good season.",
    why: "A deep-rooted Egyptology audience — this is the market that produced Champollion and fills the Louvre's Egyptian galleries — and it expects a guide who is a specialist rather than an escort.",
  },
  {
    code: "IT", country: "Italy", demonym: "Italian travellers", region: "Western Europe",
    searchLanguage: "it", visaSlug: "italy",
    season: "October to April, plus Easter and short spring breaks.",
    why: "The shortest flight of any major Western European market, which makes shorter high-quality trips realistic rather than a compromise.",
  },
  {
    code: "ES", country: "Spain", demonym: "Spanish travellers", region: "Western Europe",
    searchLanguage: "es", visaSlug: "spain",
    season: "October to April, with Semana Santa a distinct peak.",
    why: "Strong guided-travel culture and a growing appetite for private rather than coach arrangements.",
  },
  {
    code: "CH", country: "Switzerland", demonym: "Swiss travellers", region: "Western Europe",
    searchLanguage: "de", visaSlug: "switzerland",
    season: "October to April.",
    why: "Small market, high spend per party, and comfortable with the price of a genuinely private arrangement. Searches in German, French and Italian — all three already published.",
  },
  {
    code: "AT", country: "Austria", demonym: "Austrian travellers", region: "Western Europe",
    searchLanguage: "de", visaSlug: "austria",
    season: "October to April.",
    why: "Reached by the same German-language material as Germany and Switzerland, with the same preference for guided cultural travel.",
  },
  {
    code: "NL", country: "Netherlands", demonym: "Dutch travellers", region: "Western Europe",
    searchLanguage: "en", visaSlug: "netherlands",
    season: "October to April, plus the May and autumn school breaks.",
    why: "Researches long-haul travel in English, so the full English site serves it directly — no translation needed to compete here.",
  },
  {
    code: "BE", country: "Belgium", demonym: "Belgian travellers", region: "Western Europe",
    searchLanguage: "fr", visaSlug: "belgium",
    season: "October to April.",
    why: "Served by the French and Dutch-facing material already in place; a compact market that buys guided travel.",
  },
  {
    code: "IE", country: "Ireland", demonym: "Irish travellers", region: "Western Europe",
    searchLanguage: "en", visaSlug: "ireland",
    season: "October to April.",
    why: "English-searching, and reaches Egypt on one stop — the full site serves it with no additional work.",
  },

  // ===== Northern Europe ===================================================
  {
    code: "SE", country: "Sweden", demonym: "Swedish travellers", region: "Northern Europe",
    searchLanguage: "en", visaSlug: "sweden",
    season: "November to March — the darkest months at home are the best months on the Nile.",
    why: "Long winter holidays, high disposable spend, and English-language research habits that put the full site in front of them.",
  },
  {
    code: "NO", country: "Norway", demonym: "Norwegian travellers", region: "Northern Europe",
    searchLanguage: "en", visaSlug: "norway",
    season: "November to March, plus the February winter holiday week.",
    why: "The highest-spending of the Nordic markets and entirely comfortable researching and booking in English.",
  },
  {
    code: "DK", country: "Denmark", demonym: "Danish travellers", region: "Northern Europe",
    searchLanguage: "en", visaSlug: "denmark",
    season: "November to March.",
    why: "Completes Nordic coverage on the same English-language footing.",
  },

  // ===== Central & Eastern Europe ==========================================
  {
    code: "RU", country: "Russia", demonym: "Russian travellers", region: "Central & Eastern Europe",
    searchLanguage: "ru", visaSlug: "russia",
    season: "Year-round on the Red Sea; New Year is the peak fortnight.",
    why: "A very large market that arrives almost entirely on all-inclusive resort packages. The opportunity is not the volume — it is the minority within it that wants the Nile Valley done properly, and that minority searches in Russian and finds almost nothing written for it.",
  },
  {
    code: "PL", country: "Poland", demonym: "Polish travellers", region: "Central & Eastern Europe",
    searchLanguage: "en", visaSlug: "poland",
    season: "October to April for the Nile; Red Sea year-round.",
    why: "High and rising outbound volume with a fast-growing premium segment; currently reached through English.",
  },
  {
    code: "CZ", country: "Czechia", demonym: "Czech travellers", region: "Central & Eastern Europe",
    searchLanguage: "en", visaSlug: "czechia",
    season: "October to April.",
    why: "Established Egypt market with a distinct Egyptology following; reached through English today.",
  },
  {
    code: "UA", country: "Ukraine", demonym: "Ukrainian travellers", region: "Central & Eastern Europe",
    searchLanguage: "ru", visaSlug: "ukraine",
    season: "Year-round on the Red Sea.",
    why: "Reads the Russian-language material; entry rules are published separately for the Ukrainian passport.",
  },

  // ===== North America =====================================================
  {
    code: "US", country: "United States", demonym: "American travellers", region: "North America",
    searchLanguage: "en", visaSlug: "united-states",
    season: "October to April, with a distinct spring-break and Thanksgiving pattern.",
    why: "The single most important market for the top of the range: it books private guiding as the default, plans a year ahead for the best boats, and expects the itinerary in writing before it commits — all of which this site is designed around.",
  },
  {
    code: "CA", country: "Canada", demonym: "Canadian travellers", region: "North America",
    searchLanguage: "en", visaSlug: "canada",
    season: "November to March.",
    why: "Same buying habits as the US market, with a francophone segment served by the French material.",
  },

  // ===== Asia-Pacific ======================================================
  {
    code: "AU", country: "Australia", demonym: "Australian travellers", region: "Asia-Pacific",
    searchLanguage: "en", visaSlug: "australia",
    season: "September to April, on long trips — the distance means nobody comes for four days.",
    why: "Travels far and stays long, which suits the twelve-to-twenty-one-day programmes rather than the short breaks.",
  },
  {
    code: "JP", country: "Japan", demonym: "Japanese travellers", region: "Asia-Pacific",
    searchLanguage: "ja", visaSlug: "japan",
    season: "October to April, concentrated around Golden Week and the autumn holidays.",
    why: "A long-standing Egyptology audience that buys guided, meticulously planned travel. Searches in Japanese, which is not yet published — the clearest single language gap on this list.",
  },
  {
    code: "KR", country: "South Korea", demonym: "South Korean travellers", region: "Asia-Pacific",
    searchLanguage: "ko", visaSlug: "south-korea",
    season: "October to April.",
    why: "Fast-growing long-haul market with a strong preference for fully arranged private travel; searches in Korean, not yet published.",
  },
  {
    code: "IN", country: "India", demonym: "Indian travellers", region: "Asia-Pacific",
    searchLanguage: "en", visaSlug: "india",
    season: "October to March, plus large celebration and milestone travel year-round.",
    why: "Researches and books in English, travels in large multi-generation parties, and buys private arrangements — the profile the family and occasion programmes are written for.",
  },
  {
    code: "MY", country: "Malaysia", demonym: "Malaysian travellers", region: "Asia-Pacific",
    searchLanguage: "ms", visaSlug: "malaysia",
    season: "School holidays and the Raya period; often attached to an Umrah.",
    why: "Frequently combines Egypt with travel to Saudi Arabia, and looks for Islamic Cairo alongside the pharaonic sites — a different itinerary from the European one, and one worth being explicit about.",
  },
  {
    code: "ID", country: "Indonesia", demonym: "Indonesian travellers", region: "Asia-Pacific",
    searchLanguage: "id",
    season: "June–July school holidays and the Lebaran period; often attached to an Umrah.",
    why: "Same itinerary shape as Malaysia and the same Umrah pattern. No entry-requirements page yet — the route for the Indonesian passport is not corroborated in entryRequirements, and this file does not guess.",
  },
];

// ---------------------------------------------------------------------------
// Build-time validation. A targeting file that has quietly rotted is worse than
// none: it would keep declaring markets whose pages have been renamed away.
// ---------------------------------------------------------------------------
const VISA_SLUGS = new Set(nationalities.map((n) => n.slug));
for (const m of sourceMarkets) {
  if (m.visaSlug && !VISA_SLUGS.has(m.visaSlug)) {
    throw new Error(
      `markets.ts: "${m.country}" points at visa slug "${m.visaSlug}", which does not exist in entryRequirements.`,
    );
  }
}

/** Priority markets with no entry-requirements page yet. */
export const marketsWithoutVisaPage = sourceMarkets.filter((m) => !m.visaSlug);

/** Priority markets whose search language the site does not publish. */
export const marketsWithoutLanguage = sourceMarkets.filter(
  (m) => !(LOCALES as readonly string[]).includes(m.searchLanguage),
);

/** Distinct search languages across the priority markets. */
export const marketLanguages = [...new Set(sourceMarkets.map((m) => m.searchLanguage))];

/**
 * The markets as schema.org Country nodes, for `audience.geographicArea`.
 *
 * `identifier` carries the ISO code so the country resolves unambiguously —
 * "Georgia" is both a country and a US state, and a bare name leaves that to
 * chance.
 */
export const marketCountries = () =>
  sourceMarkets.map((m) => ({
    "@type": "Country",
    name: m.country,
    identifier: m.code,
  }));
