// ---------------------------------------------------------------------------
// Market guides, October 2026 — the UK & Ireland, Scandinavia & the Nordics,
// the Netherlands & Belgium. English pages for travellers who research Egypt in
// English. Same rules as the market guides in guides.ts: facts that move (visa
// fees, new routes, school dates) are stated as what to check, or dated; no
// prices; temperatures come from the month table, never typed in by hand.
// ---------------------------------------------------------------------------
import type { Guide } from "@/types";
import { findMonth } from "@/data/months";

/** A month's daytime temperature for a place, from the same table as the month pages. */
const temp = (month: string, place: "cairo" | "luxor" | "aswan" | "redSea") => findMonth(month)!.temps[place];
/** The Red Sea's water temperature in a month, from the same table. */
const sea = (month: string) => findMonth(month)!.seaTemp;
const dest = (...ids: string[]) => ids.map((id) => ({ domain: "destination" as const, id }));
const tour = (...ids: string[]) => ids.map((id) => ({ domain: "tour" as const, id }));
const guide = (...ids: string[]) => ids.map((id) => ({ domain: "guide" as const, id }));
const exp = (...ids: string[]) => ids.map((id) => ({ domain: "experience" as const, id }));

export const segmentGuidesEurope: Guide[] = [
  // -------------------------------------------------------------------------
  // The UK & Ireland — the general planning page. School holidays have their
  // own page (guides/egypt-half-term-uk.html); this one links to it rather
  // than repeating it.
  // -------------------------------------------------------------------------
  {
    id: "egypt-from-uk-ireland",
    slug: "egypt-from-uk-ireland",
    domain: "guide",
    title: "Egypt from the UK & Ireland",
    locales: ["en"],
    guideType: "practical",
    category: "planning-your-trip",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "Planning Egypt from the UK or Ireland: nonstop flights from Heathrow, Manchester, Birmingham and Dublin, the visa, the time difference, the best months and how long to go for.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-10",
    noReviewer: true,
    keyFacts: [
      { label: "Nonstop to Cairo", value: "Heathrow, Manchester, Birmingham, Dublin" },
      { label: "Flight time", value: "About 5 hours from London" },
      { label: "Visa", value: "Online e-visa, or on arrival" },
      { label: "Time difference", value: "Cairo is 2 hours ahead most of the year" },
      { label: "Best months", value: "October to April" },
      { label: "Holiday weeks", value: "Book 3–4 months ahead" },
      { label: "Pay by", value: "PayPal, card or bank transfer" },
    ],
    keyTakeaways: [
      "British Airways and EgyptAir fly nonstop from Heathrow to Cairo in about five hours; EgyptAir also flies from Manchester, Birmingham (from late October 2026) and Dublin",
      "British and Irish passport holders can get the tourist e-visa online before flying, or a visa on arrival",
      "Cairo is two hours ahead of London and Dublin for most of the year — no real jet lag",
      "October to April is the season; half-term, Christmas and Easter are its busiest weeks",
      "A long weekend covers Cairo, a week adds Luxor, and ten days takes you up the Nile to Aswan",
    ],
    sections: [
      {
        heading: "Nonstop flights from the UK and Ireland",
        paragraphs: [
          "Four airports in the UK and Ireland have a nonstop flight to Cairo. Frequencies change by season, so check the current schedule when you book. Holiday flights also reach the Red Sea resorts from several UK airports; we meet you on arrival, in Cairo or on the coast.",
        ],
        items: [
          "London Heathrow — British Airways and EgyptAir, about five hours.",
          "Manchester — EgyptAir.",
          "Birmingham — EgyptAir, from late October 2026.",
          "Dublin — EgyptAir, about five and a quarter hours.",
        ],
        note: "There is no nonstop from Gatwick. From Scotland, Belfast and other regional airports, one stop — through London, Dublin or a European or Gulf hub — is the simple route.",
        noteType: "info",
      },
      {
        heading: "The visa",
        paragraphs: [
          "British and Irish passport holders can apply for Egypt's tourist e-visa online before they fly, on the official portal visa2egypt.gov.eg, or get a visa on arrival. The paper visa on arrival is paid in cash and allows up to 30 days; since 1 August 2026 Cairo airport has also been piloting a digital version, paid by card with a QR code.",
          "The fee changed during 2026 and a further rise has been announced for January 2027: check the current amount on the official portal, and pay only there. Your passport should be valid for at least six months beyond your stay.",
          "The free \"Sinai only\" stamp given at Sharm el-Sheikh airport covers stays of under 15 days in Sharm, Dahab, Nuweiba and Taba — nothing more. For Cairo, Luxor or the Nile you need the full visa.",
        ],
        note: "Pay for an e-visa only on visa2egypt.gov.eg. Look-alike sites add their own fee.",
        noteType: "warning",
      },
      {
        heading: "The time difference",
        paragraphs: [
          "Cairo is two hours ahead of the UK and Ireland for most of the year, and one hour ahead from late March, when your clocks go forward, to the last Friday of April, when Egypt's do.",
          "In 2026 Egypt's summer time ends at the end of Thursday 29 October, four days after the UK and Ireland put their clocks back. For those few days, during the October half-term, Cairo is three hours ahead — check the local times on your tickets.",
        ],
      },
      {
        heading: "When to go, and the holiday weeks",
        paragraphs: [
          `October to April is Egypt's season. November to February is the most comfortable time for temples — ${temp("december", "luxor")} by day in Luxor in December, ${temp("january", "cairo")} in Cairo in January. March and April are warmer, with longer days. From May to September Upper Egypt is hot and the temples are visited at dawn, while the Red Sea and Alexandria come into their own.`,
          "The October and February half-terms (mid-term breaks in Ireland), Christmas and New Year — the single busiest fortnight of Egypt's year — and Easter all fall in the season. Book three to four months ahead for half-term and Easter, and as early as you can for Christmas.",
        ],
        noteLink: { label: "Egypt for half-term: dates, nine-day plans and booking", href: "guides/egypt-half-term-uk.html" },
      },
      {
        heading: "How long to go for",
        paragraphs: [
          "The short flight means Egypt works at almost any length:",
        ],
        items: [
          "A long weekend: Cairo alone — the pyramids and Sphinx, the Grand Egyptian Museum, an evening in Islamic Cairo.",
          "A week: Cairo and Giza, then a short flight to Luxor for Karnak and the Valley of the Kings — or a three-night Nile cruise from Luxor to Aswan.",
          "Ten days: Cairo, Luxor and the Nile to Aswan at an easy pace, with Abu Simbel if you wish.",
          "Two weeks: all of it, with Alexandria or a few days on the Red Sea to finish.",
        ],
        noteLink: { label: "A 10-day Egypt itinerary, day by day", href: "guides/10-day-egypt-itinerary.html" },
      },
      {
        heading: "Money and payment",
        paragraphs: [
          "Egypt's currency is the Egyptian pound. Cards work in hotels and most restaurants; keep some pounds for small purchases and tips — we send a short tipping guide with your itinerary. Our prices are set in euros: from the UK, the amount in sterling depends on the exchange rate when you pay; from Ireland there is nothing to convert. You can pay us by PayPal, by card or by bank transfer.",
        ],
      },
      {
        heading: "How a private journey works",
        paragraphs: [
          "Everything is private: your own licensed Egyptologist, your own vehicle and driver, and hotels chosen for the room rather than the star rating. The days are shaped around you — an early start in the Valley of the Kings, a long lunch, the Nile at sunset. Tell us your dates and how many of you are travelling; we reply within one working day with a real itinerary and a clear price, with no obligation.",
        ],
      },
    ],
    planningTips: [
      "For a nonstop flight, fly from Heathrow, Manchester, Birmingham (from late October 2026) or Dublin — there is no nonstop from Gatwick.",
      "Book half-term and Easter three to four months ahead, and Christmas as early as you can.",
      "Check the visa fee on visa2egypt.gov.eg when you book — it changed in 2026 and a further rise has been announced for January 2027.",
    ],
    importantNotes: [
      "Your passport should be valid for at least six months beyond your stay in Egypt.",
      "The free Sinai-only stamp at Sharm el-Sheikh does not cover Cairo, Luxor or the Nile.",
    ],
    faqs: [
      { q: "Do British and Irish citizens need a visa for Egypt?", a: "Yes, but it is simple: apply for the tourist e-visa online before you fly, on the official portal visa2egypt.gov.eg, or get a visa on arrival. Check the current fee on the official portal — it changed during 2026 and a further rise has been announced for January 2027." },
      { q: "Are there direct flights from the UK to Egypt?", a: "Yes. British Airways and EgyptAir fly nonstop from Heathrow to Cairo in about five hours. EgyptAir also flies nonstop from Manchester, and from Birmingham from late October 2026. There is no nonstop from Gatwick." },
      { q: "Is there a direct flight from Dublin to Cairo?", a: "Yes. EgyptAir flies nonstop from Dublin to Cairo in about five and a quarter hours. Frequencies change by season, so check the current schedule when you book." },
      { q: "What is the time difference between the UK and Egypt?", a: "Cairo is two hours ahead of the UK and Ireland for most of the year, and one hour ahead from late March to late April. In 2026 Egypt's clocks go back at the end of 29 October, four days after the UK's, so Cairo is three hours ahead for those few days." },
      { q: "How many days do we need in Egypt?", a: "A long weekend covers Cairo and the pyramids. A week adds Luxor or a short Nile cruise; ten days takes you up the Nile to Aswan at an easy pace; two weeks adds Alexandria or the Red Sea." },
    ],
    hero: {
      alt: "The terraced Temple of Hatshepsut at Deir el-Bahri, below the cliffs of Luxor's West Bank",
      label: "Egypt from the UK & Ireland",
      src: "/images/luxor/luxor-hatshepsut-temple-deir-el-bahri.webp",
      width: 1000,
      height: 600,
    },
    seo: {
      title: "Egypt from the UK & Ireland: Flights, Visa, Time | Kemet",
      description:
        "Planning Egypt from the UK or Ireland: nonstop flights from Heathrow, Manchester, Birmingham and Dublin, the visa, the time difference and the best months.",
    },
    relationships: {
      tours: tour("tour-cairo-vip-3day", "tour-10-day", "tour-grand-14day"),
      destinations: dest("cairo", "giza", "luxor", "aswan"),
      experiences: exp("vip-airport-service"),
      relatedGuides: guide("egypt-half-term-uk", "best-time-to-visit-egypt", "10-day-egypt-itinerary"),
    },
  },

  // -------------------------------------------------------------------------
  // Scandinavia & the Nordics — Sweden, Norway, Denmark, Finland, Iceland.
  // The argument is the season (their darkest months are the Nile's best) and
  // the charter reality (winter-sun flights land on the Red Sea, not Cairo).
  // -------------------------------------------------------------------------
  {
    id: "egypt-from-scandinavia",
    slug: "egypt-from-scandinavia",
    domain: "guide",
    title: "Egypt from Scandinavia & the Nordics",
    locales: ["en"],
    guideType: "practical",
    category: "planning-your-trip",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "Planning Egypt from Sweden, Norway, Denmark, Finland or Iceland: flights, the visa, the time difference, the winter holidays, and how to pair the Red Sea with the Nile.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-10",
    noReviewer: true,
    keyFacts: [
      { label: "Nonstop to Cairo", value: "Copenhagen; Stockholm from 18 December 2026" },
      { label: "Oslo", value: "Nonstop planned from 21 December 2026" },
      { label: "Helsinki & Reykjavik", value: "One stop" },
      { label: "Visa", value: "Online e-visa, or on arrival" },
      { label: "Time difference", value: "Cairo is 1 hour ahead of Stockholm, Oslo and Copenhagen" },
      { label: "Best months", value: "November to March" },
      { label: "Winter-sun flights", value: "Mostly to Hurghada and Marsa Alam" },
    ],
    keyTakeaways: [
      "November to March — the darkest months at home — are the best months on the Nile: dry, sunny and mild",
      "EgyptAir flies nonstop to Cairo from Copenhagen, and from Stockholm from 18 December 2026; Helsinki and Reykjavik are one stop",
      "Most winter-sun charters land on the Red Sea; Luxor is about four hours by road from Hurghada, so a private Nile extension fits easily",
      "Nordic passport holders can get the tourist e-visa online before flying, or a visa on arrival",
      "The February winter-holiday week and Christmas are the busiest weeks: book early",
    ],
    sections: [
      {
        heading: "The dark months are the Nile's best",
        paragraphs: [
          `Egypt's season matches the Nordic winter. From November to March, when the days at home are shortest, Upper Egypt is dry and sunny: ${temp("december", "luxor")} by day in Luxor in December, ${temp("january", "aswan")} in Aswan in January, ${temp("february", "cairo")} in Cairo in February. Evenings are cool — a jacket on the deck after dark, sun cream by day.`,
          `By April Luxor reaches ${temp("april", "luxor")}, and from May the temples of Upper Egypt become a dawn affair.`,
        ],
        noteLink: { label: "Egypt in winter", href: "collections/egypt-in-winter.html" },
      },
      {
        heading: "Flights from the Nordics",
        paragraphs: [
          "New routes start this winter and frequencies change by season — check the current schedule when you book.",
        ],
        items: [
          "Copenhagen — EgyptAir, nonstop to Cairo in about four and a half hours.",
          "Stockholm Arlanda — EgyptAir nonstop from 18 December 2026 (about five hours), Air Cairo from 21 December 2026. Until then, one stop.",
          "Oslo — no nonstop yet; Air Cairo has planned one from 21 December 2026. Confirm with the airline before you plan around it.",
          "Helsinki — one stop, through Istanbul, Frankfurt, Athens or a Gulf hub.",
          "Reykjavik — one stop, through a European hub.",
        ],
        note: "We meet you on arrival, at Cairo airport or on the Red Sea coast.",
        noteType: "info",
      },
      {
        heading: "Red Sea charters, with the Nile added",
        paragraphs: [
          `Most winter-sun charters from the Nordics fly to the Red Sea — Hurghada and Marsa Alam, sometimes Sharm el-Sheikh — not to Cairo. In winter the coast is ${temp("january", "redSea")} by day in January, with the sea at ${sea("december")} in December and ${sea("february")} in February. It is also a good base for the monuments: Luxor is about four hours by road from Hurghada, and Cairo under an hour's flight away.`,
          "Three ways to divide the time:",
        ],
        items: [
          "One week: four or five nights on the coast, then two or three in Luxor with your own Egyptologist — Karnak, the Valley of the Kings, both banks of the river.",
          "Ten days to two weeks: Cairo and Giza, a flight to Luxor, a three-night Nile cruise to Aswan, then a week by the sea.",
          "One big day: Luxor as a day trip from Hurghada is possible, but it means about eight hours on the road; a night in Luxor is better if you can spare one.",
        ],
        note: "We suggest the monuments first and the sea last, so you fly home rested. If your charter fixes the dates, we fit the Nile around them.",
        noteType: "tip",
        noteLink: { label: "The Red Sea, with or without the Nile", href: "collections/red-sea-egypt.html" },
      },
      {
        heading: "The visa",
        paragraphs: [
          "Swedish, Norwegian, Danish, Finnish and Icelandic passport holders can apply for Egypt's tourist e-visa online before they fly, on the official portal visa2egypt.gov.eg, or get a visa on arrival. At Hurghada, Marsa Alam and the other Red Sea airports the visa on arrival is a paper sticker, paid in cash and allowing up to 30 days; Cairo has piloted a digital version, paid by card, since 1 August 2026.",
          "The fee changed during 2026 and a further rise has been announced for January 2027: check the current amount on the official portal and pay only there. Your passport should be valid for at least six months beyond your stay.",
        ],
        note: "Landing at Sharm el-Sheikh? The free \"Sinai only\" stamp is for stays of under 15 days in Sharm, Dahab, Nuweiba and Taba. It does not cover Luxor, Cairo or the Nile — for an extension, get the full visa.",
        noteType: "warning",
      },
      {
        heading: "The time difference, country by country",
        paragraphs: [
          "There is no jet lag to speak of from anywhere in the Nordics:",
        ],
        items: [
          "Sweden, Norway and Denmark — Egypt is one hour ahead for most of the year; for a few weeks in spring, from late March to late April, the clocks are level.",
          "Finland — the same time as Egypt for most of the year; from late March to late April, Finland is one hour ahead.",
          "Iceland — Egypt is two hours ahead in winter and three in summer.",
        ],
      },
      {
        heading: "February, Christmas and the autumn break",
        paragraphs: [
          `The February winter-holiday week — sportlov, vinterferie, hiihtoloma — falls in the heart of Egypt's season, with ${temp("february", "luxor")} by day in Luxor. The exact week depends on where you live, and families from across Europe travel at the same time: book three to four months ahead.`,
          "Christmas and New Year are the single busiest fortnight of Egypt's year. The Stockholm nonstop starts on 18 December 2026, in time for the holidays; for Christmas, book as early as you can.",
          `The October autumn break catches the start of the season: Luxor is still hot, ${temp("october", "luxor")}, so the days start early, and the Red Sea is ${sea("october")} in the water.`,
        ],
        noteLink: { label: "Christmas & New Year in Egypt", href: "collections/christmas-new-year-egypt.html" },
      },
      {
        heading: "How a private journey works",
        paragraphs: [
          "Everything is private: your own licensed Egyptologist, your own vehicle and driver, and hotels and Nile boats chosen for the room rather than the star rating. Our prices are set in euros — Finland's own currency; from Sweden, Norway, Denmark and Iceland your bank converts — and you can pay by PayPal, card or bank transfer.",
          "Tell us your dates, how many of you are travelling and where your flight lands, Cairo or the Red Sea; we reply within one working day with a real itinerary and a clear price, with no obligation.",
        ],
      },
    ],
    planningTips: [
      "If your winter-sun flight lands in Hurghada, add two or three nights in Luxor rather than a single long day trip.",
      "Book the February winter-holiday week three to four months ahead, and Christmas as early as you can.",
      "Check the visa fee on visa2egypt.gov.eg when you book — it changed in 2026 and a further rise has been announced for January 2027.",
    ],
    importantNotes: [
      "The Oslo nonstop is planned, not yet flying — confirm with the airline before fixing your dates.",
      "The free Sinai-only entry stamp at Sharm el-Sheikh does not cover Luxor, Cairo or the Nile.",
      "Your passport should be valid for at least six months beyond your stay in Egypt.",
    ],
    faqs: [
      { q: "Are there direct flights from Scandinavia to Egypt?", a: "To Cairo, EgyptAir flies nonstop from Copenhagen, and from Stockholm Arlanda from 18 December 2026, with Air Cairo following from 21 December. An Air Cairo nonstop from Oslo is planned from 21 December 2026 — confirm with the airline. Helsinki and Reykjavik are one stop. Winter-sun charters mostly fly to the Red Sea resorts." },
      { q: "Do Swedes, Norwegians and Danes need a visa for Egypt?", a: "Yes, as do Finns and Icelanders, but it is simple: apply for the tourist e-visa online on visa2egypt.gov.eg before you fly, or get a visa on arrival. Check the current fee on the official portal — it changed during 2026 and a further rise has been announced for January 2027." },
      { q: "What is the time difference between Scandinavia and Egypt?", a: "Egypt is one hour ahead of Sweden, Norway and Denmark for most of the year, and level for a few weeks in spring. Finland keeps the same time as Egypt most of the year. Iceland is two hours behind Egypt in winter and three in summer." },
      { q: "Can I combine a Red Sea holiday with Luxor?", a: "Yes. Luxor is about four hours by road from Hurghada, so two or three nights there with your own Egyptologist fit easily into a week on the coast. A day trip is possible, but with about eight hours on the road we suggest staying at least one night." },
      { q: "When is the best time to visit Egypt from the Nordics?", a: `November to March, when the days at home are shortest: ${temp("december", "luxor")} by day in Luxor in December, dry air and clear skies. The February winter-holiday week and Christmas are the busiest weeks, so book early.` },
    ],
    hero: {
      alt: "A two-masted dahabiya sailing on the Nile in low golden sunlight",
      label: "Egypt from Scandinavia & the Nordics",
      src: "/images/cruise/nile-cruise-golden.webp",
      width: 720,
      height: 397,
    },
    seo: {
      title: "Egypt from Scandinavia: Flights, Visa, Winter Sun | Kemet",
      description:
        "Egypt from Sweden, Norway, Denmark, Finland and Iceland: flights to Cairo, the visa, the time difference, winter holidays and pairing the Red Sea with the Nile.",
    },
    relationships: {
      tours: tour("tour-luxor-3day", "tour-nile-cruise", "tour-10-day"),
      destinations: dest("luxor", "aswan", "hurghada", "cairo", "giza"),
      experiences: exp("private-felucca-nile", "red-sea-yacht-day"),
      relatedGuides: guide("best-time-to-visit-egypt", "transportation-in-egypt", "egypt-packing-list"),
    },
  },

  // -------------------------------------------------------------------------
  // The Netherlands & Belgium (and Luxembourg). Prices are in their own
  // currency; Dutch and Flemish travellers research in English, French-speaking
  // Belgians have the French site and French-speaking Egyptologists.
  // -------------------------------------------------------------------------
  {
    id: "egypt-from-netherlands-belgium",
    slug: "egypt-from-netherlands-belgium",
    domain: "guide",
    title: "Egypt from the Netherlands & Belgium",
    locales: ["en"],
    guideType: "practical",
    category: "planning-your-trip",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "Planning Egypt from the Netherlands, Belgium or Luxembourg: nonstop flights from Amsterdam and Brussels, the visa, the time difference, school holidays, and guiding in English or French.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-10",
    noReviewer: true,
    keyFacts: [
      { label: "Nonstop to Cairo", value: "Amsterdam (EgyptAir, Transavia), Brussels (EgyptAir)" },
      { label: "Flight time", value: "About 5 hours" },
      { label: "Visa", value: "Online e-visa, or on arrival" },
      { label: "Time difference", value: "Egypt is 1 hour ahead most of the year" },
      { label: "Best months", value: "October to April" },
      { label: "Prices", value: "In euros — nothing to convert" },
      { label: "In French", value: "French site and French-speaking Egyptologists" },
    ],
    keyTakeaways: [
      "EgyptAir (daily) and Transavia fly nonstop from Amsterdam to Cairo in about five hours; EgyptAir also flies from Brussels, and Air Cairo from 18 December 2026",
      "Dutch and Belgian passport holders can get the tourist e-visa online before flying, or a visa on arrival",
      "Egypt is one hour ahead for most of the year: no jet lag, no recovery day",
      "The autumn, Christmas and February holidays fall in Egypt's best weather; May is hot in Upper Egypt",
      "French-speaking Belgians can plan on our French site and travel with an Egyptologist who guides in French",
    ],
    sections: [
      {
        heading: "Flights from Amsterdam and Brussels",
        paragraphs: [
          "Both capitals have a nonstop flight to Cairo. Frequencies change by season, so check the current schedule when you book.",
        ],
        items: [
          "Amsterdam Schiphol — EgyptAir daily, and Transavia, nonstop to Cairo in about four and three-quarter to five hours.",
          "Brussels — EgyptAir nonstop to Cairo; Air Cairo adds flights from 18 December 2026.",
          "Luxembourg — one stop, or the nonstop from Brussels.",
        ],
        note: "Winter-sun charters from the Netherlands mostly fly to Hurghada and Marsa Alam, not Cairo. From Hurghada, Luxor is about four hours by road — we can add the monuments to the beach.",
        noteType: "info",
      },
      {
        heading: "The visa",
        paragraphs: [
          "Dutch and Belgian passport holders can apply for Egypt's tourist e-visa online before they fly, on the official portal visa2egypt.gov.eg, or get a visa on arrival: a paper sticker, paid in cash and allowing up to 30 days, or at Cairo, where it has been piloted since 1 August 2026, a digital version paid by card. Luxembourg passport holders should check their options on the same portal.",
          "The fee changed during 2026 and a further rise has been announced for January 2027, so check the current amount on the official portal and pay only there. Your passport should be valid for at least six months beyond your stay.",
        ],
        note: "Pay for an e-visa only on visa2egypt.gov.eg. Look-alike sites add their own fee.",
        noteType: "warning",
      },
      {
        heading: "The time difference",
        paragraphs: [
          "Egypt is one hour ahead of Amsterdam, Brussels and Luxembourg for most of the year; for a few weeks in spring, from late March to the last Friday of April, the clocks are level. With no jet lag, there is no recovery day to plan in.",
        ],
      },
      {
        heading: "School holidays",
        paragraphs: [
          "Apart from the summer, Dutch and Belgian school holidays fall in or near Egypt's October-to-April season:",
        ],
        items: [
          `Autumn (herfstvakantie, or the Belgian autumn break around 1 November): ${temp("october", "luxor")} in Luxor in October, ${temp("november", "luxor")} in November, and the Red Sea still warm enough to swim.`,
          `Christmas: ${temp("december", "luxor")} in Luxor and cool evenings — in the single busiest fortnight of Egypt's year. Book as early as you can.`,
          `February (voorjaarsvakantie, krokusvakantie): ${temp("february", "luxor")} in Luxor, among the most comfortable weeks of the year for temples.`,
          `Easter and May: ${temp("april", "luxor")} in Luxor in April and ${temp("may", "luxor")} in May, so temple visits start at dawn. For the meivakantie, Cairo with Alexandria, or the Red Sea, suits the heat better.`,
        ],
        note: "In the Netherlands the autumn and February holidays are staggered by region; in Belgium, French- and Dutch-speaking schools have followed different calendars since 2022. Check your own school's dates, and book holiday weeks three to four months ahead.",
        noteType: "tip",
        noteLink: { label: "The best time to visit Egypt, month by month", href: "guides/best-time-to-visit-egypt.html" },
      },
      {
        heading: "In English, or in French",
        paragraphs: [
          "Many Dutch and Flemish travellers research long-haul trips in English, and this English site is our complete one. Your Egyptologist guides in English — or in German, or another of our languages, if that suits your party better.",
          "French-speaking Belgians can plan on our French site and travel with an Egyptologist from our own team who guides in French. From Luxembourg, French or German both work.",
        ],
        noteLink: { label: "Kemet in French", href: "fr/index.html" },
      },
      {
        heading: "How long to go for",
        paragraphs: [
          "Five hours from Amsterdam or Brussels makes short trips worthwhile:",
        ],
        items: [
          "Four days: Cairo and Giza — the pyramids and Sphinx, the Grand Egyptian Museum, the Step Pyramid at Saqqara.",
          "Nine days, a school holiday week: Cairo, then Luxor — or a three-night Nile cruise from Luxor to Aswan. With younger children we shorten the mornings and leave time for the pool.",
          "Two weeks: Cairo, Luxor, the Nile to Aswan, and a few days on the Red Sea to finish.",
        ],
        noteLink: { label: "Egypt with children", href: "collections/family-egypt.html" },
      },
      {
        heading: "How a private journey works",
        paragraphs: [
          "Everything is private: your own licensed Egyptologist, your own vehicle and driver, and hotels chosen for the room rather than the star rating. Our prices are set in euros, so there is no exchange rate to watch; you can pay by PayPal, card or bank transfer. In Egypt, cards work in hotels and most restaurants; keep some Egyptian pounds for small purchases and tips.",
          "Tell us your dates, how many of you are travelling and the language you would like to be guided in; we reply within one working day with a real itinerary and a clear price, with no obligation.",
        ],
      },
    ],
    planningTips: [
      "From Luxembourg, compare one-stop flights with the Brussels nonstop.",
      "Check your own school's holiday dates — they differ by region in the Netherlands and by language community in Belgium.",
      "Check the visa fee on visa2egypt.gov.eg when you book — it changed in 2026 and a further rise has been announced for January 2027.",
    ],
    importantNotes: [
      "Your passport should be valid for at least six months beyond your stay in Egypt.",
      "The free Sinai-only entry stamp at Sharm el-Sheikh covers short stays on the Sinai coast only — not Cairo, Luxor or the Nile.",
    ],
    faqs: [
      { q: "Are there direct flights from the Netherlands and Belgium to Egypt?", a: "Yes. From Amsterdam, EgyptAir flies nonstop to Cairo daily and Transavia also flies the route, in about five hours. From Brussels, EgyptAir flies nonstop, and Air Cairo adds flights from 18 December 2026. Check the current schedule when you book." },
      { q: "Do Dutch and Belgian citizens need a visa for Egypt?", a: "Yes, but it is simple: apply for the tourist e-visa online on visa2egypt.gov.eg before you fly, or get a visa on arrival. Check the current fee on the official portal — it changed during 2026 and a further rise has been announced for January 2027." },
      { q: "What is the time difference between the Netherlands and Egypt?", a: "Egypt is one hour ahead of the Netherlands, Belgium and Luxembourg for most of the year, and level for a few weeks in spring, from late March to late April." },
      { q: "Can we travel with a French-speaking guide?", a: "Yes. We have Egyptologists on our own team who guide in French, and our French site covers planning in French. German-speaking Egyptologists are part of the team too." },
      { q: "Is Egypt a good idea for the May holiday?", a: `It is hot in Upper Egypt in May — ${temp("may", "luxor")} in Luxor — so temple visits start at dawn. Cairo with Alexandria, or the Red Sea, suits the week better; for Luxor and the Nile, the autumn, Christmas and February holidays are more comfortable.` },
    ],
    hero: {
      alt: "The Step Pyramid of Djoser at Saqqara under a pale blue sky",
      label: "Egypt from the Netherlands & Belgium",
      src: "/images/giza/saqqara-step-pyramid-djoser.webp",
      width: 1600,
      height: 1200,
    },
    seo: {
      title: "Egypt from the Netherlands & Belgium: Flights, Visa | Kemet",
      description:
        "Egypt from the Netherlands, Belgium and Luxembourg: nonstop flights from Amsterdam and Brussels, the visa, time difference, school holidays, French guides.",
    },
    relationships: {
      tours: tour("tour-10-day", "tour-family-8day", "tour-saqqara"),
      destinations: dest("cairo", "giza", "luxor", "aswan", "hurghada"),
      experiences: exp("grand-egyptian-museum-private"),
      relatedGuides: guide("best-time-to-visit-egypt", "10-day-egypt-itinerary", "where-to-stay-in-egypt"),
    },
  },
];
