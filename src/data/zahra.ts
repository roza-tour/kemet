// ---------------------------------------------------------------------------
// The Oberoi Zahra — the words and facts for oberoi-zahra-nile-cruise.html.
// English first (November 2026); kept as data so the other languages can
// follow without touching the page.
//
// WHERE THE FACTS COME FROM
// Every figure here is the ship's own, read on oberoihotels.com
// (/nile-cruise-zahra/ — accommodation, dining, wellness, itineraries,
// sailing dates, policies, FAQs) on 13 November 2026. Where the ship's pages
// were silent or contradicted each other, the fact was left out rather than
// filled in: guest capacity, crew, a dress code, whether drinks are included,
// the split of the 28 cabins and suites by type, a cigar lounge, a cinema and
// whole-ship charter are NOT stated here for that reason. The launch year is
// from Oberoi's own magazine (2019). Refresh ZAHRA_CHECKED when re-read.
//
// NO PRICE, ON PURPOSE
// The owner's brief: this ship is booked on request. The rate belongs to a
// sailing, a season and a cabin, so the page prints none and says why.
//
// NOT OUR SHIP
// The Zahra is operated by Oberoi Hotels & Resorts; Kemet books it. The page
// says so in plain words, and its photographs are of the route — we hold no
// rights to the ship's own images.
// ---------------------------------------------------------------------------

export const ZAHRA_ROUTE = "oberoi-zahra-nile-cruise.html";
export const ZAHRA_CHECKED = "November 2026";

export const ZAHRA_QUESTION = "What is the Oberoi Zahra, and how is it booked?";
export const ZAHRA_ANSWER =
  "The Oberoi Zahra is a luxury Nile cruiser operated by Oberoi Hotels & Resorts, sailing between Luxor and Aswan on three-, four- and seven-night itineraries. It has 28 cabins and suites, all facing the river, an 11-metre temperature-controlled pool, a spa and an à la carte restaurant. Kemet books it on request: you send dates, we confirm availability and the rate with the ship in writing, and build the rest of your journey around the sailing.";

/** One line for llms.txt, the search index and the HTML sitemap. */
export const zahraOneLine =
  "The Oberoi Zahra, a 28-cabin luxury Nile cruiser between Luxor and Aswan, booked on request with the journey planned around the sailing.";

export const zahraFacts: Array<{ label: string; value: string }> = [
  { label: "Route", value: "Luxor ⇄ Aswan" },
  { label: "Sailings", value: "3, 4 or 7 nights" },
  { label: "Departures", value: "Tuesdays and Saturdays" },
  { label: "On board", value: "28 cabins and suites, all with Nile views" },
  { label: "Launched", value: "2007" },
  { label: "Price", value: "On request" },
];

export interface ZahraRoom {
  name: string;
  size: string;
  sleeps: string;
  body: string;
}
export const zahraRooms: ZahraRoom[] = [
  {
    name: "Luxury Cabin",
    size: "26.4 m²",
    sleeps: "Sleeps two",
    body: "A king bed or twins beside a picture window on the river, and a naturally lit bathroom whose glass-walled rain shower looks out on the Nile as well.",
  },
  {
    name: "Luxury Suite with Two Bedrooms",
    size: "92 m²",
    sleeps: "Sleeps four",
    body: "One king bedroom and one twin, a separate living room and dining space behind floor-to-ceiling windows, and a terrace with loungers.",
  },
  {
    name: "Luxury Suite",
    size: "115 m² with its terrace · 50 m² inside",
    sleeps: "Sleeps two",
    body: "A bedroom, a living room and a private dining area; outside, a terrace with sun loungers and a heated whirlpool of your own. The bathroom has a standalone tub and a rain shower.",
  },
];

export const zahraOnBoard: Array<{ title: string; body: string }> = [
  { title: "The pool", body: "Eleven metres long, temperature-controlled, on the upper deck." },
  { title: "The Oberoi Spa", body: "Massages, facials, scrubs and wraps, and yoga. Treatments are charged on board." },
  { title: "The Restaurant", body: "À la carte at breakfast, lunch and dinner, from a menu that changes daily. Dietary requirements are met with notice." },
  { title: "By the pool", body: "Light meals, and a cocktail bar beside the water." },
  { title: "The Club Lounge", body: "Afternoon tea, and on each cruise an evening of live music and a Nubian performance." },
  { title: "The Library Lounge", body: "Books, quiet, and drinks until midnight." },
];

export interface ZahraSailing {
  title: string;
  when: string;
  days: Array<{ day: string; text: string }>;
  note?: string;
}
export const zahraSailings: ZahraSailing[] = [
  {
    title: "Aswan to Luxor · 3 nights",
    when: "Saturdays",
    days: [
      { day: "Day 1", text: "Board at noon in Aswan. The High Dam and the island Temple of Philae." },
      { day: "Day 2", text: "Kom Ombo, then Edfu." },
      { day: "Day 3", text: "Luxor's West Bank — the Valley of the Kings, Medinet Habu and the Colossi of Memnon — then Luxor and Karnak Temples." },
      { day: "Day 4", text: "Disembark in Luxor at 8 am." },
    ],
  },
  {
    title: "Luxor to Aswan · 4 nights",
    when: "Tuesdays",
    days: [
      { day: "Day 1", text: "Board at noon in Luxor. Luxor and Karnak Temples." },
      { day: "Day 2", text: "The West Bank: the Valley of the Kings, Deir el-Medina, the Colossi of Memnon and the Temple of Hatshepsut." },
      { day: "Day 3", text: "Edfu, then Kom Ombo." },
      { day: "Day 4", text: "Aswan: the High Dam, Philae and the Botanical Garden; a Nubian evening on board." },
      { day: "Day 5", text: "Disembark in Aswan at 8 am." },
    ],
  },
  {
    title: "Seven nights · either direction",
    when: "A handful of dates a year",
    days: [
      { day: "Added", text: "Dendera, the Valley of the Nobles, Deir el-Medina, the Temple of Hatshepsut, Luxor Museum and Aswan's Botanical Garden." },
      { day: "Also", text: "Sunset cocktails on a private island. Abu Simbel is an optional visit." },
    ],
    note: "When the river is low, Dendera is reached by road — about ninety minutes each way.",
  },
];

/** What the ship's own terms include. Confirmed again in every quote. */
export const zahraIncluded: string[] = [
  "All meals on board",
  "The visits in the itinerary, with the ship's Egyptologists — in English, other languages with notice",
  "Entrance fees to the monuments visited",
  "Transfers between the ship and Luxor or Aswan airport",
  "Internet on board",
];
export const zahraCharged: string[] = [
  "Spa treatments, laundry and the minibar",
  "Drinks — we state in your quote what your rate covers",
];

export const zahraSteps: Array<{ symbol: string; title: string; body: string }> = [
  { symbol: "eye", title: "Your dates",
    body: "Tell us when, and how many of you. The Zahra leaves on fixed days, so a day either side can decide which sailing is yours." },
  { symbol: "scarab", title: "The ship's answer",
    body: "We ask the ship about that sailing: which cabins and suites are free, and at what rate. You see both in writing. Nothing is held and nothing is charged before that." },
  { symbol: "ankh", title: "The journey around it",
    body: "Cairo before, Abu Simbel or the Red Sea after, the flights and the private transfers between them — one itinerary and one person to call." },
  { symbol: "horus", title: "Your own Egyptologist, if you wish",
    body: "The ship's visits run in small groups of its own guests. If you would rather have the temples with your party alone, we arrange your own Egyptologist and car for the same stops." },
];

export const zahraFaqs: Array<{ q: string; a: string }> = [
  {
    q: "How much does the Oberoi Zahra cost?",
    a: "There is no single price to print. The rate depends on the sailing, the season and the cabin or suite, and it is the ship's to quote. We ask for your dates and send the figure in writing, with what it includes, before anything is paid.",
  },
  {
    q: "Is the ship private?",
    a: "No. You share the ship with the guests of the other cabins — 28 cabins and suites in all. Your cabin is your own, and in the suites so is the terrace. For a vessel with nobody else aboard, we charter a dahabiya, a sailing boat of a few cabins, on the same stretch of river.",
  },
  {
    q: "Are the temple visits part of the cruise?",
    a: "On the ship's published terms, yes: the visits in the itinerary, the guiding and the entrance fees are included, led by the ship's Egyptologists in English, or in other languages with notice. We confirm it in your quote. A private Egyptologist for your party alone can be arranged alongside.",
  },
  {
    q: "Zahra or Philae — which Oberoi ship?",
    a: "They are sister ships. The Philae is the smaller: 22 cabins and suites, larger standard cabins at 36 m², and sailings of four or six nights. The Zahra has 28, sails three, four or seven nights, and has the largest suite of the two — 115 m² with its terrace and a private whirlpool. In practice your dates usually decide.",
  },
  {
    q: "Can children sail?",
    a: "The ship does not accommodate children under seven, and its policy gives older children a cabin of their own. Tell us the ages when you enquire and we ask the ship what suits your family.",
  },
  {
    q: "When does it sail?",
    a: "Through the year. On the ship's published calendars for 2026 and 2027 there are no departures in June. October to April is the comfortable season on the river; from June to August Upper Egypt reaches 40 °C and visits start early in the day.",
  },
  {
    q: "Can the whole ship be taken for one party?",
    a: "The ship does not publish a charter. For an occasion we will ask about a specific date on your behalf. Where a party wants the boat entirely to itself, a chartered dahabiya is the certain way.",
  },
];

/** Stated as the awarding bodies published them. */
export const zahraRecognition =
  "Readers of Travel + Leisure ranked The Oberoi's Nile cruisers the No. 1 river cruise line in the World's Best Awards of 2025 and 2026. The Zahra itself was named Africa's Best River Cruise Ship at the World Cruise Awards in 2021.";

export const zahraDisclosure =
  `The Oberoi Zahra is operated by Oberoi Hotels & Resorts. Kemet is an independent travel company: we book the ship for our guests and plan the journey around it. The ship's details are as the ship publishes them, checked in ${ZAHRA_CHECKED}, and are confirmed again in every quote. The photographs on this page are of the river and the temples on the route.`;

export const zahraPhotos = {
  hero: { src: "/images/aswan/aswan-philae-temple-island.webp", alt: "The island Temple of Philae at Aswan, seen across the water", width: 1080, height: 810 },
  rooms: { src: "/images/aswan/aswan-felucca-sailing-nile.webp", alt: "The Nile at Aswan, a felucca under sail on the river", width: 736, height: 981 },
  route: { src: "/images/luxor/luxor-karnak-hypostyle-hall.webp", alt: "The columns of the Hypostyle Hall at Karnak, Luxor", width: 652, height: 980 },
} as const;
