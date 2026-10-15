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
// a source next to it.
// ---------------------------------------------------------------------------
import { LOCALES } from "@/config/i18n";

export type MarketRegion =
  | "Western Europe"
  | "Northern Europe"
  | "Central & Eastern Europe"
  | "Gulf"
  | "North America"
  | "Latin America"
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
  /** When this market travels to Egypt, and the practical consequence. */
  season: string;
  /** Why this market is a priority for the private, high-spend tier. */
  why: string;
  /** Other languages a real share of this market reads — Switzerland reads
   *  French and Italian too, the Gulf and Malaysia read English. */
  alsoReads?: string[];
  /**
   * The pages written for this market, most specific first, as site routes.
   * They are what an assistant should hand a traveller from here, and what
   * `audienceForRoute` declares each page is for. The build fails if one of
   * them stops existing (src/pages/markets.json.ts).
   */
  pages: string[];
  /**
   * What travellers from here ask us for, and what we do about it — stated
   * on the pages above, not added for colour. English, because it is read by
   * machines and by us; `welcome` is the line in the traveller's own language.
   */
  interests: string[];
  /**
   * One sentence, in this market's language where the site publishes it
   * (English where it does not), saying who we are for them. Written per
   * country rather than per language: a Mexican reader is "de México".
   * Every promise in it is one the site already makes — our own
   * Egyptologists in that language (company.languages), private vehicle,
   * a real itinerary within one working day, prices in dollars where the
   * page shows them.
   */
  welcome: string;
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
    searchLanguage: "ar",
    season: "Summer and school holidays — the months European demand drops, which makes them easy to serve well.",
    why: "Two to three hours from Cairo, travels in large family groups, and buys private guiding and private transport as standard rather than as an upgrade.",
    alsoReads: ["en"],
    pages: ["ar/sayf-masr-lil-aailat-al-khalijiya.html", "ar/index.html"],
    interests: [
      "Summer and the Eid holidays",
      "Alexandria's sea breeze, the Red Sea and Cairo evenings on the Nile",
      "Connecting rooms and family suites, and a lighter pace for children and older relatives",
      "A day planned around prayer times; halal food, as in almost every restaurant and hotel in Egypt",
    ],
    welcome: "نرتّب رحلات خاصة في مصر للعائلات القادمة من السعودية، بالعربية: خبير آثار من فريقنا، وسيارة وسائق لكم وحدكم، وبرنامج على إيقاع عائلتكم.",
  },
  {
    code: "AE", country: "United Arab Emirates", demonym: "UAE travellers", region: "Gulf",
    searchLanguage: "ar",
    season: "Year-round, with a strong summer peak and long-weekend breaks around national holidays.",
    why: "A dense expatriate and resident market with excellent daily connectivity to Cairo and an established habit of buying the top of the range.",
    alsoReads: ["en"],
    pages: ["ar/sayf-masr-lil-aailat-al-khalijiya.html", "ar/index.html"],
    interests: [
      "Summer and the Eid holidays",
      "Alexandria's sea breeze, the Red Sea and Cairo evenings on the Nile",
      "Connecting rooms and family suites, and a lighter pace for children and older relatives",
      "A day planned around prayer times; halal food, as in almost every restaurant and hotel in Egypt",
    ],
    welcome: "نرتّب رحلات خاصة في مصر للعائلات القادمة من الإمارات، بالعربية: خبير آثار من فريقنا، وسيارة وسائق لكم وحدكم، وبرنامج على إيقاع عائلتكم.",
  },
  {
    code: "KW", country: "Kuwait", demonym: "Kuwaiti travellers", region: "Gulf",
    searchLanguage: "ar",
    season: "Summer, and Eid holidays in both directions of the year.",
    why: "Long summer holidays, large parties, and a strong preference for privately arranged travel over packaged departures.",
    alsoReads: ["en"],
    pages: ["ar/sayf-masr-lil-aailat-al-khalijiya.html", "ar/index.html"],
    interests: [
      "Summer and the Eid holidays",
      "Alexandria's sea breeze, the Red Sea and Cairo evenings on the Nile",
      "Connecting rooms and family suites, and a lighter pace for children and older relatives",
      "A day planned around prayer times; halal food, as in almost every restaurant and hotel in Egypt",
    ],
    welcome: "نرتّب رحلات خاصة في مصر للعائلات القادمة من الكويت، بالعربية: خبير آثار من فريقنا، وسيارة وسائق لكم وحدكم، وبرنامج على إيقاع عائلتكم.",
  },
  {
    code: "QA", country: "Qatar", demonym: "Qatari travellers", region: "Gulf",
    searchLanguage: "ar",
    season: "Summer and Eid, plus short winter breaks.",
    why: "Small market, high spend per party, and direct connectivity — the profile the VIP tier is written for.",
    alsoReads: ["en"],
    pages: ["ar/sayf-masr-lil-aailat-al-khalijiya.html", "ar/index.html"],
    interests: [
      "Summer and the Eid holidays",
      "Alexandria's sea breeze, the Red Sea and Cairo evenings on the Nile",
      "Connecting rooms and family suites, and a lighter pace for children and older relatives",
      "A day planned around prayer times; halal food, as in almost every restaurant and hotel in Egypt",
    ],
    welcome: "نرتّب رحلات خاصة في مصر للعائلات القادمة من قطر، بالعربية: خبير آثار من فريقنا، وسيارة وسائق لكم وحدكم، وبرنامج على إيقاع عائلتكم.",
  },
  {
    code: "BH", country: "Bahrain", demonym: "Bahraini travellers", region: "Gulf",
    searchLanguage: "ar",
    season: "Summer and Eid.",
    why: "Small but consistent, and reached by the same Arabic-language and Gulf-season material as its neighbours.",
    alsoReads: ["en"],
    pages: ["ar/sayf-masr-lil-aailat-al-khalijiya.html", "ar/index.html"],
    interests: [
      "Summer and the Eid holidays",
      "Alexandria's sea breeze, the Red Sea and Cairo evenings on the Nile",
      "Connecting rooms and family suites, and a lighter pace for children and older relatives",
      "A day planned around prayer times; halal food, as in almost every restaurant and hotel in Egypt",
    ],
    welcome: "نرتّب رحلات خاصة في مصر للعائلات القادمة من البحرين، بالعربية: خبير آثار من فريقنا، وسيارة وسائق لكم وحدكم، وبرنامج على إيقاع عائلتكم.",
  },
  {
    code: "OM", country: "Oman", demonym: "Omani travellers", region: "Gulf",
    searchLanguage: "ar",
    season: "Summer and Eid.",
    why: "Completes Gulf coverage; the same entry rules and the same season as the rest of the GCC.",
    alsoReads: ["en"],
    pages: ["ar/sayf-masr-lil-aailat-al-khalijiya.html", "ar/index.html"],
    interests: [
      "Summer and the Eid holidays",
      "Alexandria's sea breeze, the Red Sea and Cairo evenings on the Nile",
      "Connecting rooms and family suites, and a lighter pace for children and older relatives",
      "A day planned around prayer times; halal food, as in almost every restaurant and hotel in Egypt",
    ],
    welcome: "نرتّب رحلات خاصة في مصر للعائلات القادمة من عُمان، بالعربية: خبير آثار من فريقنا، وسيارة وسائق لكم وحدكم، وبرنامج على إيقاع عائلتكم.",
  },

  // ===== Western Europe ====================================================
  {
    code: "GB", country: "United Kingdom", demonym: "British travellers", region: "Western Europe",
    searchLanguage: "en",
    season: "October to April, concentrated on half-term, Christmas and Easter.",
    why: "Searches in English, so it lands on the complete site rather than a seven-page summary — and it is a long-established market for guided Nile travel at the top of the range.",
    pages: ["guides/egypt-half-term-uk.html", "index.html"],
    interests: [
      "Half-term, Christmas and Easter dates",
      "The Nile Valley in the October-to-April season",
      "Private guiding rather than group departures",
    ],
    welcome: "We plan private journeys in Egypt for travellers from the UK — half-term, Christmas and Easter included, with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },
  {
    code: "DE", country: "Germany", demonym: "German travellers", region: "Western Europe",
    searchLanguage: "de",
    season: "October to April for the Nile Valley; the Red Sea runs year-round.",
    why: "Buys guided cultural travel rather than independent itineraries, plans a long way ahead, and reads detail before booking — which is what this site is built to provide.",
    pages: ["de/index.html", "de/weihnachten-in-aegypten.html"],
    interests: [
      "Egyptologists from our own team who guide in German",
      "The Nile Valley from October to April, the Red Sea all year",
      "A real day-by-day itinerary and a clear price within one working day",
    ],
    welcome: "Wir planen private Reisen durch Ägypten für Reisende aus Deutschland — auf Deutsch, mit Ägyptologen aus unserem eigenen Team.",
  },
  {
    code: "FR", country: "France", demonym: "French travellers", region: "Western Europe",
    searchLanguage: "fr",
    season: "October to April, with the Toussaint and February school holidays falling inside the good season.",
    why: "A deep-rooted Egyptology audience — this is the market that produced Champollion and fills the Louvre's Egyptian galleries — and it expects a guide who is a specialist rather than an escort.",
    pages: ["fr/index.html", "fr/toussaint-en-egypte.html", "fr/noel-et-nouvel-an-en-egypte.html"],
    interests: [
      "Egyptologists from our own team who guide in French",
      "The Toussaint and February school holidays, Christmas and New Year",
      "A guide who is a specialist, not an escort",
    ],
    welcome: "Nous organisons des voyages privés en Égypte pour les voyageurs venus de France — en français, avec des égyptologues de notre propre équipe.",
  },
  {
    code: "IT", country: "Italy", demonym: "Italian travellers", region: "Western Europe",
    searchLanguage: "it",
    season: "October to April, plus Easter and short spring breaks.",
    why: "The shortest flight of any major Western European market, which makes shorter high-quality trips realistic rather than a compromise.",
    pages: ["it/index.html", "it/natale-e-capodanno-in-egitto.html", "it/ferragosto-in-egitto.html"],
    interests: [
      "Egyptologists from our own team who guide in Italian",
      "The shortest flight to Cairo from Western Europe",
      "Easter, Ferragosto, Christmas and New Year",
    ],
    welcome: "Organizziamo viaggi privati in Egitto per chi parte dall'Italia — in italiano, con egittologi del nostro team.",
  },
  {
    code: "ES", country: "Spain", demonym: "Spanish travellers", region: "Western Europe",
    searchLanguage: "es",
    season: "October to April, with Semana Santa a distinct peak.",
    why: "Strong guided-travel culture and a growing appetite for private rather than coach arrangements.",
    pages: ["es/index.html", "es/semana-santa-en-egipto.html", "es/navidad-y-fin-de-ano-en-egipto.html"],
    interests: [
      "Egyptologists from our own team who guide in Spanish",
      "Semana Santa, Christmas and New Year",
      "Private arrangements rather than coach tours",
    ],
    welcome: "Organizamos viajes privados por Egipto para viajeros de España, en español y con egiptólogos de nuestro propio equipo.",
  },
  {
    code: "PT", country: "Portugal", demonym: "Portuguese travellers", region: "Western Europe",
    searchLanguage: "pt",
    season: "October to April, with Easter and the Christmas break as the peaks.",
    why: "Reads the Portuguese pages written for Brazil — the same language, with European flight times a short hop away.",
    pages: ["pt/index.html"],
    interests: [
      "Egyptologists from our own team who guide in Portuguese",
      "Easter and the Christmas break",
    ],
    welcome: "Organizamos viagens privativas pelo Egito para viajantes de Portugal, em português, com egiptólogos da nossa própria equipe.",
  },
  {
    code: "CH", country: "Switzerland", demonym: "Swiss travellers", region: "Western Europe",
    searchLanguage: "de",
    season: "October to April.",
    why: "Small market, high spend per party, and comfortable with the price of a genuinely private arrangement. Searches in German, French and Italian — all three already published.",
    alsoReads: ["fr", "it"],
    pages: ["de/index.html", "fr/index.html", "it/index.html"],
    interests: [
      "Egyptologists from our own team who guide in German, French or Italian",
      "The Nile Valley from October to April",
    ],
    welcome: "Wir planen private Reisen durch Ägypten für Reisende aus der Schweiz — auf Deutsch, mit Ägyptologen aus unserem eigenen Team.",
  },
  {
    code: "AT", country: "Austria", demonym: "Austrian travellers", region: "Western Europe",
    searchLanguage: "de",
    season: "October to April.",
    why: "Reached by the same German-language material as Germany and Switzerland, with the same preference for guided cultural travel.",
    pages: ["de/index.html", "de/weihnachten-in-aegypten.html"],
    interests: [
      "Egyptologists from our own team who guide in German",
      "The Nile Valley from October to April, the Red Sea all year",
      "A real day-by-day itinerary and a clear price within one working day",
    ],
    welcome: "Wir planen private Reisen durch Ägypten für Reisende aus Österreich — auf Deutsch, mit Ägyptologen aus unserem eigenen Team.",
  },
  {
    code: "NL", country: "Netherlands", demonym: "Dutch travellers", region: "Western Europe",
    searchLanguage: "en",
    season: "October to April, plus the May and autumn school breaks.",
    why: "Researches long-haul travel in English, so the full English site serves it directly — no translation needed to compete here.",
    pages: ["index.html"],
    interests: [
      "The complete site, in English",
      "The Nile Valley from October to April, and the May and autumn school breaks",
    ],
    welcome: "We plan private journeys in Egypt for travellers from the Netherlands — with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },
  {
    code: "BE", country: "Belgium", demonym: "Belgian travellers", region: "Western Europe",
    searchLanguage: "fr",
    season: "October to April.",
    why: "Served by the French and Dutch-facing material already in place; a compact market that buys guided travel.",
    pages: ["fr/index.html"],
    interests: [
      "Egyptologists from our own team who guide in French",
      "The Nile Valley from October to April",
    ],
    welcome: "Nous organisons des voyages privés en Égypte pour les voyageurs venus de Belgique — en français, avec des égyptologues de notre propre équipe.",
  },
  {
    code: "IE", country: "Ireland", demonym: "Irish travellers", region: "Western Europe",
    searchLanguage: "en",
    season: "October to April.",
    why: "English-searching, and reaches Egypt on one stop — the full site serves it with no additional work.",
    pages: ["index.html"],
    interests: [
      "One stop to Cairo",
      "The Nile Valley from October to April",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Ireland — with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },

  // ===== Northern Europe ===================================================
  {
    code: "SE", country: "Sweden", demonym: "Swedish travellers", region: "Northern Europe",
    searchLanguage: "en",
    season: "November to March — the darkest months at home are the best months on the Nile.",
    why: "Long winter holidays, high disposable spend, and English-language research habits that put the full site in front of them.",
    pages: ["index.html"],
    interests: [
      "The darkest months at home are the best months on the Nile",
      "Private guiding, researched and booked in English",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Sweden — with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },
  {
    code: "NO", country: "Norway", demonym: "Norwegian travellers", region: "Northern Europe",
    searchLanguage: "en",
    season: "November to March, plus the February winter holiday week.",
    why: "The highest-spending of the Nordic markets and entirely comfortable researching and booking in English.",
    pages: ["index.html"],
    interests: [
      "November to March, and the February winter holiday",
      "Private guiding, researched and booked in English",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Norway — with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },
  {
    code: "DK", country: "Denmark", demonym: "Danish travellers", region: "Northern Europe",
    searchLanguage: "en",
    season: "November to March.",
    why: "Completes Nordic coverage on the same English-language footing.",
    pages: ["index.html"],
    interests: [
      "November to March on the Nile",
      "Private guiding, researched and booked in English",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Denmark — with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },

  // ===== Central & Eastern Europe ==========================================
  {
    code: "RU", country: "Russia", demonym: "Russian travellers", region: "Central & Eastern Europe",
    searchLanguage: "ru",
    season: "Year-round on the Red Sea; New Year is the peak fortnight.",
    why: "A very large market that arrives almost entirely on all-inclusive resort packages. The opportunity is not the volume — it is the minority within it that wants the Nile Valley done properly, and that minority searches in Russian and finds almost nothing written for it.",
    pages: ["ru/index.html", "ru/novyy-god-v-egipte.html"],
    interests: [
      "Egyptologists from our own team who guide in Russian",
      "The Nile Valley done properly, beyond the Red Sea resorts",
      "New Year",
    ],
    welcome: "Мы организуем индивидуальные путешествия по Египту для путешественников из России — на русском языке, с египтологами из нашей собственной команды.",
  },
  {
    code: "PL", country: "Poland", demonym: "Polish travellers", region: "Central & Eastern Europe",
    searchLanguage: "en",
    season: "October to April for the Nile; Red Sea year-round.",
    why: "High and rising outbound volume with a fast-growing premium segment; currently reached through English.",
    pages: ["index.html"],
    interests: [
      "The Nile Valley from October to April, the Red Sea all year",
      "Private guiding in English",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Poland — with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },
  {
    code: "CZ", country: "Czechia", demonym: "Czech travellers", region: "Central & Eastern Europe",
    searchLanguage: "en",
    season: "October to April.",
    why: "Established Egypt market with a distinct Egyptology following; reached through English today.",
    pages: ["index.html"],
    interests: [
      "Egyptology, with a private specialist guide",
      "The Nile Valley from October to April",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Czechia — with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },
  {
    code: "UA", country: "Ukraine", demonym: "Ukrainian travellers", region: "Central & Eastern Europe",
    searchLanguage: "ru",
    season: "Year-round on the Red Sea.",
    why: "Reads the Russian-language material; entry rules are published separately for the Ukrainian passport.",
    pages: ["index.html", "ru/index.html"],
    interests: [
      "The Red Sea all year",
      "The Nile Valley beyond the resorts",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Ukraine — with your own licensed Egyptologist, in English or Russian, and your own vehicle and driver.",
  },

  // ===== North America =====================================================
  {
    code: "US", country: "United States", demonym: "American travellers", region: "North America",
    searchLanguage: "en",
    season: "October to April, with a distinct spring-break and Thanksgiving pattern.",
    why: "The single most important market for the top of the range: it books private guiding as the default, plans a year ahead for the best boats, and expects the itinerary in writing before it commits — all of which this site is designed around.",
    pages: ["guides/egypt-from-usa-canada.html", "guides/thanksgiving-spring-break-egypt.html"],
    interests: [
      "Nonstop EgyptAir flights to Cairo from New York JFK, Newark and Washington Dulles",
      "Thanksgiving, Christmas and spring break — Egypt's best weather",
      "Prices shown in US dollars beside the euro price",
      "PayPal, card or bank transfer",
    ],
    welcome: "We plan private journeys in Egypt for travellers from the United States — with your own licensed Egyptologist, prices shown in dollars, and PayPal accepted.",
  },
  {
    code: "CA", country: "Canada", demonym: "Canadian travellers", region: "North America",
    searchLanguage: "en",
    season: "November to March.",
    why: "Same buying habits as the US market, with a francophone segment served by the French material.",
    alsoReads: ["fr"],
    pages: ["guides/egypt-from-usa-canada.html", "fr/index.html"],
    interests: [
      "Nonstop EgyptAir flights to Cairo from Toronto",
      "Prices shown in Canadian dollars beside the euro price",
      "PayPal, card or bank transfer",
      "Egyptologists from our own team who guide in English or French",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Canada — with your own licensed Egyptologist, in English or French, prices shown in Canadian dollars, and PayPal accepted.",
  },

  // ===== Latin America =====================================================
  {
    code: "BR", country: "Brazil", demonym: "Brazilian travellers", region: "Latin America",
    searchLanguage: "pt",
    season: "December to February and the July school holidays; Carnival and Easter are the peak windows.",
    why: "A large long-haul market that buys guided, fully arranged travel and reaches Cairo on one stop through the Gulf, Istanbul or Addis Ababa. Searches in Portuguese, and finds very little written for it at this level.",
    pages: ["pt/viajar-ao-egito-saindo-do-brasil.html", "pt/carnaval-no-egito.html", "pt/index.html"],
    interests: [
      "Egyptologists from our own team who guide in Portuguese",
      "Carnival, Easter, December to February and the July school holidays",
      "PayPal from Brazil, card or bank transfer",
      "One stop to Cairo through the Gulf, Istanbul or Addis Ababa",
    ],
    welcome: "Organizamos viagens privativas pelo Egito para viajantes do Brasil, em português, com egiptólogos da nossa própria equipe.",
  },

  {
    code: "MX", country: "Mexico", demonym: "Mexican travellers", region: "Latin America",
    searchLanguage: "es",
    season: "December to April, with Semana Santa and the winter holidays as peaks.",
    why: "The largest Spanish-speaking market in the Americas; connects to Cairo with one stop and reads the Latin American page written for it, in Spanish.",
    pages: ["es/viajar-a-egipto-desde-latinoamerica.html", "es/index.html"],
    interests: [
      "Egyptologists from our own team who guide in Spanish",
      "One stop to Cairo through Madrid, Paris, Frankfurt, Istanbul, Doha or Dubai",
      "Egypt's tourist e-visa, applied for online",
      "Prices in euros with an approximate dollar figure beside them; PayPal accepted",
    ],
    welcome: "Organizamos viajes privados por Egipto para viajeros de México, en español y con egiptólogos de nuestro propio equipo.",
  },
  {
    code: "CO", country: "Colombia", demonym: "Colombian travellers", region: "Latin America",
    searchLanguage: "es",
    season: "December to January and Semana Santa.",
    why: "A growing long-haul market that buys guided, fully arranged travel; served by the Latin American page, in Spanish.",
    pages: ["es/viajar-a-egipto-desde-latinoamerica.html", "es/index.html"],
    interests: [
      "Egyptologists from our own team who guide in Spanish",
      "One stop to Cairo through Madrid, Paris, Frankfurt, Istanbul, Doha or Dubai",
      "Egypt's tourist e-visa, applied for online",
      "Prices in euros with an approximate dollar figure beside them; PayPal accepted",
    ],
    welcome: "Organizamos viajes privados por Egipto para viajeros de Colombia, en español y con egiptólogos de nuestro propio equipo.",
  },
  {
    code: "AR", country: "Argentina", demonym: "Argentine travellers", region: "Latin America",
    searchLanguage: "es",
    season: "December to February — their summer is Egypt's best season.",
    why: "The southern summer falls in Egypt's best weather; served by the Latin American page, in Spanish.",
    pages: ["es/viajar-a-egipto-desde-latinoamerica.html", "es/index.html"],
    interests: [
      "Egyptologists from our own team who guide in Spanish",
      "One stop to Cairo through Madrid, Paris, Frankfurt, Istanbul, Doha or Dubai",
      "Egypt's tourist e-visa, applied for online",
      "Prices in euros with an approximate dollar figure beside them; PayPal accepted",
      "Their December-to-February summer is Egypt's best season",
    ],
    welcome: "Organizamos viajes privados por Egipto para viajeros de Argentina, en español y con egiptólogos de nuestro propio equipo.",
  },
  {
    code: "CL", country: "Chile", demonym: "Chilean travellers", region: "Latin America",
    searchLanguage: "es",
    season: "December to February — their summer is Egypt's best season.",
    why: "Same southern-summer timing as Argentina; served by the Latin American page, in Spanish.",
    pages: ["es/viajar-a-egipto-desde-latinoamerica.html", "es/index.html"],
    interests: [
      "Egyptologists from our own team who guide in Spanish",
      "One stop to Cairo through Madrid, Paris, Frankfurt, Istanbul, Doha or Dubai",
      "Egypt's tourist e-visa, applied for online",
      "Prices in euros with an approximate dollar figure beside them; PayPal accepted",
      "Their December-to-February summer is Egypt's best season",
    ],
    welcome: "Organizamos viajes privados por Egipto para viajeros de Chile, en español y con egiptólogos de nuestro propio equipo.",
  },
  {
    code: "PE", country: "Peru", demonym: "Peruvian travellers", region: "Latin America",
    searchLanguage: "es",
    season: "December to April and Semana Santa.",
    why: "A culture-led travel market with its own great ancient civilisation; served by the Latin American page, in Spanish.",
    pages: ["es/viajar-a-egipto-desde-latinoamerica.html", "es/index.html"],
    interests: [
      "Egyptologists from our own team who guide in Spanish",
      "One stop to Cairo through Madrid, Paris, Frankfurt, Istanbul, Doha or Dubai",
      "Egypt's tourist e-visa, applied for online",
      "Prices in euros with an approximate dollar figure beside them; PayPal accepted",
    ],
    welcome: "Organizamos viajes privados por Egipto para viajeros del Perú, en español y con egiptólogos de nuestro propio equipo.",
  },

  // ===== Asia-Pacific ======================================================
  {
    code: "AU", country: "Australia", demonym: "Australian travellers", region: "Asia-Pacific",
    searchLanguage: "en",
    season: "September to April, on long trips — the distance means nobody comes for four days.",
    why: "Travels far and stays long, which suits the twelve-to-twenty-one-day programmes rather than the short breaks.",
    pages: ["guides/egypt-from-australia-new-zealand.html"],
    interests: [
      "One stop to Cairo through Dubai, Doha, Abu Dhabi or Asia",
      "Ten days or more: Cairo, the Nile, Aswan, perhaps the Red Sea",
      "The southern-summer holidays fall in Egypt's best weather",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Australia — journeys long enough to be worth the flight, with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },
  {
    code: "JP", country: "Japan", demonym: "Japanese travellers", region: "Asia-Pacific",
    searchLanguage: "ja",
    season: "October to April, concentrated around Golden Week and the autumn holidays.",
    why: "A long-standing Egyptology audience that buys guided, meticulously planned travel. Searches in Japanese, which is not yet published — the clearest single language gap on this list.",
    pages: ["index.html"],
    interests: [
      "Egyptology in depth, with a private licensed specialist",
      "Fully arranged, carefully planned private travel",
    ],
    welcome: "We plan private journeys in Egypt for travellers from Japan — with your own licensed Egyptologist, guiding in English or another of our ten languages.",
  },
  {
    code: "KR", country: "South Korea", demonym: "South Korean travellers", region: "Asia-Pacific",
    searchLanguage: "ko",
    season: "October to April.",
    why: "Fast-growing long-haul market with a strong preference for fully arranged private travel; searches in Korean, not yet published.",
    pages: ["index.html"],
    interests: [
      "Fully arranged private travel",
      "A private licensed Egyptologist",
    ],
    welcome: "We plan private journeys in Egypt for travellers from South Korea — with your own licensed Egyptologist, guiding in English or another of our ten languages.",
  },
  {
    code: "IN", country: "India", demonym: "Indian travellers", region: "Asia-Pacific",
    searchLanguage: "en",
    season: "October to March, plus large celebration and milestone travel year-round.",
    why: "Researches and books in English, travels in large multi-generation parties, and buys private arrangements — the profile the family and occasion programmes are written for.",
    pages: ["guides/egypt-from-india.html"],
    interests: [
      "Nonstop EgyptAir flights from Mumbai and Delhi, about six hours",
      "Vegetarian, no-egg and no-onion-and-garlic meals, briefed to every hotel and boat before they arrive",
      "Diwali and the winter holidays, in Egypt's best weather",
      "The e-visa, applied for online well before travel",
    ],
    welcome: "We plan private journeys in Egypt for travellers from India — your own licensed Egyptologist, and your food rules sent to every hotel and boat before you arrive.",
  },
  {
    code: "MY", country: "Malaysia", demonym: "Malaysian travellers", region: "Asia-Pacific",
    searchLanguage: "ms",
    season: "School holidays and the Raya period; often attached to an Umrah.",
    why: "Frequently combines Egypt with travel to Saudi Arabia, and looks for Islamic Cairo alongside the pharaonic sites — a different itinerary from the European one, and one worth being explicit about.",
    alsoReads: ["en"],
    pages: ["ms/index.html", "ms/umrah-plus-mesir.html", "ms/ziarah-kaherah-islam.html"],
    interests: [
      "Egyptologists from our own team who guide in Malay",
      "Egypt after or before an Umrah",
      "Islamic Cairo alongside the pharaohs",
      "Halal food and prayer times",
    ],
    welcome: "Kami menyusun perjalanan persendirian di Mesir untuk pelancong dari Malaysia — dalam bahasa Melayu, bersama Egyptologist daripada pasukan kami sendiri.",
  },
  {
    code: "ID", country: "Indonesia", demonym: "Indonesian travellers", region: "Asia-Pacific",
    searchLanguage: "id",
    season: "June–July school holidays and the Lebaran period; often attached to an Umrah.",
    why: "Same itinerary shape as Malaysia and the same Umrah pattern.",
    pages: ["id/index.html", "id/umrah-plus-mesir.html", "id/ziarah-kairo-islam.html"],
    interests: [
      "Egyptologists from our own team who guide in Indonesian",
      "Egypt after or before an Umrah",
      "Islamic Cairo alongside the pharaohs",
      "Halal food and prayer times",
    ],
    welcome: "Kami merancang perjalanan privat di Mesir untuk wisatawan dari Indonesia — dalam bahasa Indonesia, bersama Egyptologist dari tim kami sendiri.",
  },
  {
    code: "NZ", country: "New Zealand", demonym: "New Zealand travellers", region: "Asia-Pacific",
    searchLanguage: "en",
    season: "September to April, on long trips.",
    why: "Same long-haul shape as Australia, and served by the same guide.",
    pages: ["guides/egypt-from-australia-new-zealand.html"],
    interests: [
      "One stop to Cairo through Dubai, Doha, Abu Dhabi or Asia",
      "Ten days or more: Cairo, the Nile, Aswan, perhaps the Red Sea",
      "The southern-summer holidays fall in Egypt's best weather",
    ],
    welcome: "We plan private journeys in Egypt for travellers from New Zealand — journeys long enough to be worth the flight, with your own licensed Egyptologist, your own vehicle and driver, and a real itinerary within one working day.",
  },
];

// ---------------------------------------------------------------------------
// Build-time validation. A targeting file that has quietly rotted is worse than
// none: it would keep declaring markets whose pages have been renamed away.
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// WHO A PAGE IS FOR — the same list, read the other way round.
//
// The organisation's structured data names every market at once. A page can
// say more: the USA & Canada guide is for American and Canadian travellers,
// the Latin American page for Mexico, Colombia, Argentina, Chile and Peru,
// every German page for Germany, Austria and Switzerland. Base.astro puts
// this on each page's WebPage/Article node as schema.org `audience`, so
// Google and answer engines are told, page by page, which travellers it was
// written for — derived from this file, never typed per page.
// ---------------------------------------------------------------------------

/** Every language a market reads, its search language first. */
export const languagesOf = (m: SourceMarket) => [m.searchLanguage, ...(m.alsoReads ?? [])];

/**
 * The markets a page was written for: those that list it, or — for a page in
 * another language that no market lists — every market that reads that
 * language. The English home page and other English pages are for everyone,
 * which the organisation's own audience already says.
 */
export function marketsForRoute(route: string, locale: string): SourceMarket[] {
  if (route !== "index.html") {
    const named = sourceMarkets.filter((m) => m.pages.includes(route));
    if (named.length) return named;
  }
  if (locale === "en") return [];
  return sourceMarkets.filter((m) => languagesOf(m).includes(locale));
}

const listOf = (xs: string[]) => (xs.length > 1 ? `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}` : xs[0]);

/** A schema.org Audience naming the travellers a page is for, or undefined. */
export function audienceForRoute(route: string, locale: string) {
  const ms = marketsForRoute(route, locale);
  if (!ms.length) return undefined;
  return {
    "@type": "Audience",
    audienceType: `Private travellers from ${listOf(ms.map((m) => (/^(United |Netherlands)/.test(m.country) ? `the ${m.country}` : m.country)))}`,
    geographicArea: ms.map((m) => ({ "@type": "Country", name: m.country, identifier: m.code })),
  };
}
