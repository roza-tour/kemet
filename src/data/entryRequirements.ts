// ---------------------------------------------------------------------------
// Entry requirements by nationality — the data behind /visa/<slug>.html.
//
// WHY THIS EXISTS
// Nobody searches "Egypt visa". They search "Egypt visa for US citizens",
// "do Indians need a visa for Egypt", "Ägypten Visum für Deutsche". Entry to
// Egypt genuinely differs by passport — visa-free, visa on arrival, e-Visa, or
// a visa arranged in advance — so one page cannot serve the world. This file
// is the single source of truth; the pages, the index, the sitemap and
// llms.txt all derive from it. Adding a nationality is a data-only change.
//
// ⚠️ ACCURACY POLICY
// Entry rules change, and a wrong answer here costs a traveller their trip.
// Three rules are enforced:
//   1. Only nationalities with corroborated public sources are listed. When a
//      passport is not in this file the index sends the visitor to the official
//      portal rather than guessing.
//   2. Every page renders VERIFIED_ON and links to visa2egypt.gov.eg as the
//      authority. We describe; the Egyptian government decides.
//   3. Fees and durations live in one constant each, so a change is one edit.
//
// LAST REVIEW: see VERIFIED_ON. Re-check before each tourist season.
// ---------------------------------------------------------------------------

/** Date the fees and eligibility below were last checked against public sources. */
export const VERIFIED_ON = "2026-07-27";

/** The official Egyptian government portal — the authority for every rule here. */
export const OFFICIAL_PORTAL = "https://visa2egypt.gov.eg";

/** Single-entry tourist visa fee (visa on arrival and e-Visa), USD.
 *  Raised from $25 on 1 March 2026. */
export const VISA_FEE_USD = 30;

/** Multiple-entry tourist e-Visa fee, USD. */
export const VISA_FEE_MULTI_USD = 65;

/** Standard permitted stay on a single-entry tourist visa, in days. */
export const VISA_STAY_DAYS = 30;

/** Stay granted to visa-exempt GCC nationals, in days. */
export const GCC_STAY_DAYS = 14;

/** Stay granted under the Sinai-only entry permit, in days. */
export const SINAI_PERMIT_DAYS = 15;

/** How a passport holder is admitted. */
export type EntryRoute =
  /** No visa needed at all for a short stay. */
  | "visa-free"
  /** May buy the visa at the airport on landing (e-Visa also available). */
  | "visa-on-arrival"
  /** Must obtain the e-Visa online before travelling. */
  | "e-visa";

export interface Nationality {
  /** URL segment: /visa/<slug>.html */
  slug: string;
  /** Country name, as written in prose. */
  country: string;
  /** How the page addresses the reader, e.g. "US citizens". */
  demonym: string;
  /** ISO 3166-1 alpha-2 — used for schema and grouping, never for flags. */
  code: string;
  /** Continent/region grouping, for the index page. */
  region: "Europe" | "Middle East" | "North America" | "Asia-Pacific" | "Africa" | "South America";
  route: EntryRoute;
  /** Permitted stay in days on the primary route. */
  stayDays: number;
  /** Eligible for the free Sinai-only entry permit at Sinai entry points. */
  sinaiPermit: boolean;
  /** Typical non-stop or one-stop flying time to Cairo, in prose. */
  flightTime: string;
  /** Cities with useful direct services to Cairo (or the main gateway). */
  directFrom: string[];
  /** When travellers from this market usually come, and the practical
   *  consequence — this is the part a generic visa page cannot give. */
  seasonNote: string;
  /** Anything genuinely specific to this passport. Optional. */
  note?: string;
}

// The list is ordered by region, then alphabetically. Flight times are typical
// non-stop durations where a direct service exists, otherwise realistic
// one-stop totals.
export const nationalities: Nationality[] = [
  // ===== Middle East =======================================================
  {
    slug: "saudi-arabia", country: "Saudi Arabia", demonym: "Saudi citizens", code: "SA",
    region: "Middle East", route: "visa-free", stayDays: GCC_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 2h 15m from Riyadh, 2h 40m from Jeddah",
    directFrom: ["Riyadh", "Jeddah", "Dammam", "Medina"],
    seasonNote:
      "Saudi travellers come heavily over Eid and the summer school holiday, when Cairo is hot but the North Coast and Red Sea are at their best. Book Nile and Red Sea hotels early for both Eids — they are the two busiest weeks of the Egyptian year.",
    note: "GCC nationals enter without a visa; GCC *residents* on another passport follow their own passport's rule and normally need the visa on arrival with a residence permit valid six months or more.",
  },
  {
    slug: "united-arab-emirates", country: "United Arab Emirates", demonym: "UAE citizens", code: "AE",
    region: "Middle East", route: "visa-free", stayDays: GCC_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 3h 45m from Dubai or Abu Dhabi",
    directFrom: ["Dubai", "Abu Dhabi", "Sharjah"],
    seasonNote:
      "Emirati travel peaks over Eid and in the Gulf summer, when Egypt's Mediterranean coast is markedly cooler than the Gulf. For monuments rather than coast, December to February is the comfortable window.",
    note: "GCC nationals enter without a visa; GCC residents on another passport follow their own passport's rule.",
  },
  {
    slug: "kuwait", country: "Kuwait", demonym: "Kuwaiti citizens", code: "KW",
    region: "Middle East", route: "visa-free", stayDays: GCC_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 3h from Kuwait City",
    directFrom: ["Kuwait City"],
    seasonNote:
      "Kuwaiti families travel in summer and over Eid. Alexandria and the North Coast are the classic choice; Upper Egypt in July and August is genuinely hot and better left to winter.",
  },
  {
    slug: "qatar", country: "Qatar", demonym: "Qatari citizens", code: "QA",
    region: "Middle East", route: "visa-free", stayDays: GCC_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 3h 30m from Doha",
    directFrom: ["Doha"],
    seasonNote:
      "Short flight, so Egypt works as a long weekend as easily as a fortnight. Cairo and Luxor read best between November and March.",
  },
  {
    slug: "bahrain", country: "Bahrain", demonym: "Bahraini citizens", code: "BH",
    region: "Middle East", route: "visa-free", stayDays: GCC_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 3h 15m from Manama",
    directFrom: ["Manama"],
    seasonNote:
      "Peak Bahraini travel falls over Eid and midsummer. For a first visit built around the monuments, aim for the cooler half of the year.",
  },
  {
    slug: "oman", country: "Oman", demonym: "Omani citizens", code: "OM",
    region: "Middle East", route: "visa-free", stayDays: GCC_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 4h from Muscat",
    directFrom: ["Muscat"],
    seasonNote:
      "Omani travellers often pair Cairo with the Red Sea. Water temperatures on the Egyptian side peak from June to September; the reefs are diveable year-round.",
  },

  // ===== Europe ============================================================
  {
    slug: "united-kingdom", country: "United Kingdom", demonym: "UK citizens", code: "GB",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 5h from London",
    directFrom: ["London", "Manchester", "Birmingham"],
    seasonNote:
      "British travellers come in force over Christmas, February half-term and Easter — the three periods when Egypt is both pleasant and fully booked. Late October and early March give the same weather with far fewer people.",
  },
  {
    slug: "germany", country: "Germany", demonym: "German citizens", code: "DE",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 15m from Frankfurt or Munich",
    directFrom: ["Frankfurt", "Munich", "Berlin", "Düsseldorf"],
    seasonNote:
      "Germany is one of Egypt's largest source markets, concentrated on the Red Sea in winter and on Nile cruises between October and April. Hurghada and Marsa Alam have the densest direct service.",
  },
  {
    slug: "france", country: "France", demonym: "French citizens", code: "FR",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 30m from Paris",
    directFrom: ["Paris", "Lyon", "Marseille"],
    seasonNote:
      "French visitors travel mainly over the Toussaint and February holidays and at Easter. Nile cruises between Luxor and Aswan are the classic French itinerary and fill early in those windows.",
  },
  {
    slug: "italy", country: "Italy", demonym: "Italian citizens", code: "IT",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 3h 15m from Rome or Milan",
    directFrom: ["Rome", "Milan", "Venice", "Naples"],
    seasonNote:
      "One of the shortest flights into Egypt from Western Europe. Italian travel clusters at Easter, Ferragosto and Christmas; the Red Sea absorbs the summer, the Nile the winter.",
  },
  {
    slug: "spain", country: "Spain", demonym: "Spanish citizens", code: "ES",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 30m from Madrid or Barcelona",
    directFrom: ["Madrid", "Barcelona"],
    seasonNote:
      "Spanish visitors favour Semana Santa and the summer. If the plan is Luxor and Aswan rather than the coast, shift to November–March: August in Upper Egypt regularly passes 40°C.",
  },
  {
    slug: "netherlands", country: "Netherlands", demonym: "Dutch citizens", code: "NL",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 45m from Amsterdam",
    directFrom: ["Amsterdam"],
    seasonNote:
      "Dutch travel peaks in the May and autumn school holidays and over Christmas. Amsterdam has reliable direct service to Cairo and seasonal charters to Hurghada.",
  },
  {
    slug: "poland", country: "Poland", demonym: "Polish citizens", code: "PL",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h from Warsaw",
    directFrom: ["Warsaw", "Kraków", "Katowice", "Gdańsk"],
    seasonNote:
      "Poland is a major Red Sea market with heavy charter capacity to Hurghada and Marsa Alam from autumn to spring. Adding Luxor and Cairo to a coast holiday is straightforward and worth doing.",
  },
  {
    slug: "austria", country: "Austria", demonym: "Austrian citizens", code: "AT",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 3h 45m from Vienna",
    directFrom: ["Vienna"],
    seasonNote:
      "Austrian travel concentrates on the winter half of the year, when Egypt offers reliable sun within four hours. February and March are the sweet spot for the monuments.",
  },
  {
    slug: "belgium", country: "Belgium", demonym: "Belgian citizens", code: "BE",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 30m from Brussels",
    directFrom: ["Brussels"],
    seasonNote:
      "Peak Belgian travel falls in the Carnival and Easter holidays. Both land in Egypt's most comfortable months, so book Nile cruises well ahead.",
  },
  {
    slug: "switzerland", country: "Switzerland", demonym: "Swiss citizens", code: "CH",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h from Zurich or Geneva",
    directFrom: ["Zurich", "Geneva"],
    seasonNote:
      "Swiss visitors travel year-round with a winter bias. Christmas and New Year on the Nile is a long-standing Swiss tradition and the single most contested week of the year.",
  },
  {
    slug: "sweden", country: "Sweden", demonym: "Swedish citizens", code: "SE",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 5h from Stockholm",
    directFrom: ["Stockholm"],
    seasonNote:
      "Scandinavian travel to Egypt is overwhelmingly a winter escape, from November to March. That is also when Egypt is at its best inland, so the two align neatly.",
  },
  {
    slug: "norway", country: "Norway", demonym: "Norwegian citizens", code: "NO",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 5h 15m from Oslo",
    directFrom: ["Oslo"],
    seasonNote:
      "Norwegian visitors come for winter sun between November and March, mostly to the Red Sea. Pairing a week of reef with four days of Luxor and Cairo is the most rewarding use of the trip.",
  },
  {
    slug: "denmark", country: "Denmark", demonym: "Danish citizens", code: "DK",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 45m from Copenhagen",
    directFrom: ["Copenhagen"],
    seasonNote:
      "Danish travel peaks in the February winter holiday and at Easter. Both fall inside Egypt's best months for the monuments.",
  },
  {
    slug: "ireland", country: "Ireland", demonym: "Irish citizens", code: "IE",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 5h 30m from Dublin, or via London",
    directFrom: ["Dublin (seasonal)", "via London"],
    seasonNote:
      "Irish travellers mostly connect through London or a European hub. October and March give the best weather-to-crowd ratio for a first visit.",
  },
  {
    slug: "portugal", country: "Portugal", demonym: "Portuguese citizens", code: "PT",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 5h 30m from Lisbon",
    directFrom: ["Lisbon"],
    seasonNote:
      "Portuguese travel concentrates at Easter and in late summer. For Upper Egypt, the shoulder months of October and April are far more comfortable than August.",
  },
  {
    slug: "greece", country: "Greece", demonym: "Greek citizens", code: "GR",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 2h from Athens",
    directFrom: ["Athens"],
    seasonNote:
      "The shortest hop into Egypt from Europe — two hours. Alexandria's Greco-Roman layer has particular resonance for Greek visitors, and the city is an easy add-on to Cairo.",
  },
  {
    slug: "czechia", country: "Czechia", demonym: "Czech citizens", code: "CZ",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h from Prague",
    directFrom: ["Prague"],
    seasonNote:
      "Strong Red Sea charter market from autumn through spring. Nile cruises from Czech departure points are most common between October and April.",
  },
  {
    slug: "hungary", country: "Hungary", demonym: "Hungarian citizens", code: "HU",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 3h 30m from Budapest",
    directFrom: ["Budapest"],
    seasonNote:
      "Hungarian travel peaks in spring and autumn — precisely Egypt's two best windows for combining coast and monuments in one trip.",
  },
  {
    slug: "romania", country: "Romania", demonym: "Romanian citizens", code: "RO",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 3h from Bucharest",
    directFrom: ["Bucharest"],
    seasonNote:
      "A three-hour flight makes Egypt viable for a week rather than a fortnight. Winter and early spring are the strongest months for a Cairo-and-Luxor pairing.",
  },
  {
    slug: "bulgaria", country: "Bulgaria", demonym: "Bulgarian citizens", code: "BG",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 2h 45m from Sofia",
    directFrom: ["Sofia"],
    seasonNote:
      "One of the shorter European approaches. Autumn and early spring give warm Red Sea water without Upper Egypt's summer heat.",
  },
  {
    slug: "croatia", country: "Croatia", demonym: "Croatian citizens", code: "HR",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 3h 30m from Zagreb, usually via a hub",
    directFrom: ["via Vienna, Istanbul or Rome"],
    seasonNote:
      "Travel clusters around the autumn and spring school breaks, both excellent months for the Nile.",
  },
  {
    slug: "slovakia", country: "Slovakia", demonym: "Slovak citizens", code: "SK",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h from Bratislava or Vienna",
    directFrom: ["via Vienna", "Bratislava (seasonal charter)"],
    seasonNote:
      "Mostly a winter-sun and Red Sea market. Adding Luxor to a Hurghada week is a four-hour drive or a short flight and transforms the trip.",
  },
  {
    slug: "slovenia", country: "Slovenia", demonym: "Slovenian citizens", code: "SI",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h from Ljubljana via a hub",
    directFrom: ["via Vienna, Istanbul or Frankfurt"],
    seasonNote:
      "Spring and autumn suit Slovenian holiday patterns and are Egypt's most comfortable months inland.",
  },
  {
    slug: "finland", country: "Finland", demonym: "Finnish citizens", code: "FI",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 5h from Helsinki",
    directFrom: ["Helsinki (seasonal)"],
    seasonNote:
      "A winter market almost exclusively — November to March, when Finland is dark and Egypt is 25°C. That is also the best time to be in Luxor.",
  },
  {
    slug: "estonia", country: "Estonia", demonym: "Estonian citizens", code: "EE",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 5h from Tallinn via a hub",
    directFrom: ["via Helsinki, Warsaw or Istanbul"],
    seasonNote: "Winter-sun travel from November to March, matching Egypt's best inland months.",
  },
  {
    slug: "latvia", country: "Latvia", demonym: "Latvian citizens", code: "LV",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 45m from Riga",
    directFrom: ["Riga (seasonal)", "via Warsaw or Istanbul"],
    seasonNote: "A winter market with charter capacity to the Red Sea from late autumn to spring.",
  },
  {
    slug: "lithuania", country: "Lithuania", demonym: "Lithuanian citizens", code: "LT",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 30m from Vilnius",
    directFrom: ["Vilnius (seasonal)", "via Warsaw or Istanbul"],
    seasonNote: "Charter-led winter travel to Hurghada and Sharm, strongest between November and April.",
  },
  {
    slug: "luxembourg", country: "Luxembourg", demonym: "Luxembourg citizens", code: "LU",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 30m via Frankfurt or Brussels",
    directFrom: ["via Frankfurt, Brussels or Paris"],
    seasonNote: "Winter and Easter are the usual windows, both comfortable months in Egypt.",
  },
  {
    slug: "malta", country: "Malta", demonym: "Maltese citizens", code: "MT",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 2h 45m from Malta",
    directFrom: ["Malta (seasonal)", "via Rome or Istanbul"],
    seasonNote: "A short Mediterranean crossing. Alexandria pairs naturally with a Cairo stay.",
  },
  {
    slug: "cyprus", country: "Cyprus", demonym: "Cypriot citizens", code: "CY",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 1h 30m from Larnaca",
    directFrom: ["Larnaca"],
    seasonNote:
      "The closest European approach of all — ninety minutes. Egypt works as a long weekend from Cyprus, and the shoulder months are ideal.",
  },
  {
    slug: "iceland", country: "Iceland", demonym: "Icelandic citizens", code: "IS",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 7h from Reykjavík via a European hub",
    directFrom: ["via London, Copenhagen or Frankfurt"],
    seasonNote: "A deep-winter escape. December to March offers the largest contrast and the best inland weather.",
  },
  {
    slug: "russia", country: "Russia", demonym: "Russian citizens", code: "RU",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 5h from Moscow",
    directFrom: ["Moscow", "St Petersburg", "Yekaterinburg"],
    seasonNote:
      "One of Egypt's largest markets, concentrated on Hurghada and Sharm el-Sheikh and busiest from October to April. Nile cruises are typically added to a coast stay rather than booked alone.",
  },
  {
    slug: "ukraine", country: "Ukraine", demonym: "Ukrainian citizens", code: "UA",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 4h 30m from Kyiv, routings vary",
    directFrom: ["routings currently vary — check at time of booking"],
    seasonNote:
      "Traditionally a strong Red Sea winter market. Confirm current air routings when you plan, as services have changed.",
  },
  {
    slug: "serbia", country: "Serbia", demonym: "Serbian citizens", code: "RS",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 3h 15m from Belgrade",
    directFrom: ["Belgrade"],
    seasonNote: "Direct service to Cairo makes a week-long Cairo-and-Luxor trip practical. Best from October to April.",
  },
  {
    slug: "north-macedonia", country: "North Macedonia", demonym: "North Macedonian citizens", code: "MK",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 3h from Skopje via a hub",
    directFrom: ["via Istanbul, Vienna or Belgrade"],
    seasonNote: "Spring and autumn suit both the climate and the school calendar.",
  },
  {
    slug: "georgia", country: "Georgia", demonym: "Georgian citizens", code: "GE",
    region: "Europe", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 3h 30m from Tbilisi",
    directFrom: ["Tbilisi (seasonal)", "via Istanbul or Dubai"],
    seasonNote: "Autumn and spring are the strongest windows for combining Cairo with the Nile valley.",
  },

  // ===== North America =====================================================
  {
    slug: "united-states", country: "United States", demonym: "US citizens", code: "US",
    region: "North America", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 11h non-stop from New York, or one stop from anywhere else",
    directFrom: ["New York (JFK)", "Washington (IAD, seasonal)"],
    seasonNote:
      "American travel to Egypt concentrates on spring break, Thanksgiving and the Christmas–New Year window. Late October and early March give the same weather with meaningfully lower prices and thinner crowds at the Valley of the Kings.",
    note: "Most travellers arriving on a US passport buy the visa at Cairo airport in a few minutes. The e-Visa is the calmer option if you would rather arrive with it already in hand.",
  },
  {
    slug: "canada", country: "Canada", demonym: "Canadian citizens", code: "CA",
    region: "North America", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 11h from Toronto via Europe, or one stop from Montreal",
    directFrom: ["Toronto (seasonal)", "via London, Paris, Frankfurt or Istanbul"],
    seasonNote:
      "Canadian visitors travel largely between November and April — a winter escape that happens to coincide exactly with Egypt's best months inland.",
  },

  // ===== Asia-Pacific ======================================================
  {
    slug: "australia", country: "Australia", demonym: "Australian citizens", code: "AU",
    region: "Asia-Pacific", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 20h from Sydney with one stop in the Gulf",
    directFrom: ["via Dubai, Doha, Abu Dhabi or Singapore"],
    seasonNote:
      "Australians usually fold Egypt into a longer northern-hemisphere trip, arriving in the northern spring or autumn. Given the flight, plan at least ten days on the ground.",
  },
  {
    slug: "new-zealand", country: "New Zealand", demonym: "New Zealand citizens", code: "NZ",
    region: "Asia-Pacific", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 23h from Auckland with one or two stops",
    directFrom: ["via Dubai, Doha or Singapore"],
    seasonNote:
      "Nearly always part of a longer journey. The northern spring and autumn are the comfortable months, and a fortnight is the minimum that justifies the flight.",
  },
  {
    slug: "japan", country: "Japan", demonym: "Japanese citizens", code: "JP",
    region: "Asia-Pacific", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 14h from Tokyo via the Gulf or Istanbul",
    directFrom: ["Tokyo (seasonal)", "via Dubai, Doha or Istanbul"],
    seasonNote:
      "Japanese travel clusters around Golden Week, Obon and the New Year. Golden Week in late spring is still comfortable in Cairo; Obon in August is not, and is better spent on the Red Sea.",
  },
  {
    slug: "south-korea", country: "South Korea", demonym: "South Korean citizens", code: "KR",
    region: "Asia-Pacific", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: true,
    flightTime: "about 14h from Seoul with one stop",
    directFrom: ["via Dubai, Doha, Istanbul or Frankfurt"],
    seasonNote:
      "Korean travel peaks in the summer holiday and around Chuseok. For the monuments, the autumn window is far more comfortable than midsummer.",
  },
  {
    slug: "malaysia", country: "Malaysia", demonym: "Malaysian citizens", code: "MY",
    region: "Asia-Pacific", route: "visa-on-arrival", stayDays: VISA_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 13h from Kuala Lumpur with one stop",
    directFrom: ["via Dubai, Doha, Abu Dhabi or Istanbul"],
    seasonNote:
      "Malaysian travel to Egypt is strong around the school holidays and often combines Cairo's Islamic quarter with the classical sites. November to March is the comfortable half of the year.",
  },
  {
    slug: "india", country: "India", demonym: "Indian citizens", code: "IN",
    region: "Asia-Pacific", route: "e-visa", stayDays: VISA_STAY_DAYS, sinaiPermit: false,
    flightTime: "about 6h from Delhi or Mumbai with one stop in the Gulf",
    directFrom: ["via Dubai, Doha, Abu Dhabi or Kuwait"],
    seasonNote:
      "Indian travel peaks over the winter holidays and in the spring wedding-and-honeymoon season, both of which fall in Egypt's most pleasant months. Book Nile cruises early for December and January.",
    note: "Apply for the e-Visa online before you fly — do not plan on buying a visa at the airport. Supporting documents may be requested depending on your travel history, so allow time.",
  },
];

/** Nationalities that hold a page, ordered for the index. */
export const REGION_ORDER = [
  "Europe", "Middle East", "North America", "Asia-Pacific", "Africa", "South America",
] as const;

/** Look a nationality up by slug. */
export const findNationality = (slug: string): Nationality | undefined =>
  nationalities.find((n) => n.slug === slug);

/** Human label for a route, used in copy and in the index table. */
export const ROUTE_LABEL: Record<EntryRoute, string> = {
  "visa-free": "No visa required",
  "visa-on-arrival": "Visa on arrival",
  "e-visa": "e-Visa required in advance",
};

/** One-line summary of what a route means in practice. */
export const ROUTE_SUMMARY: Record<EntryRoute, string> = {
  "visa-free":
    "You do not need a tourist visa for a short stay. Present your passport at immigration and you are admitted.",
  "visa-on-arrival":
    `You may buy the visa at the airport when you land — a sticker in your passport, paid in cash. The e-Visa is available online if you prefer to arrive with it already issued.`,
  "e-visa":
    "You must obtain the e-Visa online before you travel. Do not plan on buying a visa at the airport.",
};
