import type { UltraText } from "./types";

export const en: UltraText = {
  metaTitle: "Ultra-Luxury Egypt — Four Private Journeys | Kemet",
  metaDescription:
    "Kemet Ultra: the Great Pyramid opened for your party, dinner inside Karnak, a chartered dahabiya or yacht, the finest suites. 7 to 15 days, priced openly.",
  keywords:
    "ultra luxury egypt tour, private egypt luxury journey, great pyramid private opening, dinner at karnak temple, private dahabiya charter, red sea private yacht, mena house suite, old cataract aswan, oberoi philae, luxury egypt itinerary",
  crumb: "Kemet Ultra",

  heroTag: "Kemet Ultra · by private arrangement",
  h1: ["Egypt, opened", "for you alone"],
  lede:
    "Four private journeys at the very top of the Egyptian market: the Great Pyramid opened for your party, dinner inside Karnak after the gates close, a dahabiya or a yacht with no other guests, and the landmark hotels in their best rooms. Priced openly, and confirmed in writing before anything is paid.",
  ctaPrimary: "Speak to us privately",
  ctaQuiet: "or send a confidential brief",

  signaturesOverline: "The signatures",
  signatures: [
    ["The Great Pyramid, alone", "two hours inside, with no other visitor"],
    ["Dinner inside Karnak", "the temple opened after dark for your party"],
    ["The Nile, chartered", "a dahabiya of your own, or the Oberoi Philae in a suite"],
    ["The Red Sea, by yacht", "a crewed yacht among the Giftun reefs"],
    ["The sky, privately", "private aircraft to Abu Simbel and the coast"],
  ],

  question: "What is Kemet Ultra?",
  answer: ({ from2, to2, from4 }) =>
    `Kemet Ultra is Kemet's top tier: four fully private Egypt journeys of 7 to 15 days, with the Great Pyramid opened for your party, dinner inside Karnak after closing, a chartered dahabiya or yacht, and suites at the Mena House, the Old Cataract and the Oberoi. From ${from2} to ${to2} per person for two; from ${from4} for four.`,

  glanceOverline: "At a glance",
  glanceTitle: "Choose your journey",

  journeysOverline: "The journeys",
  journeysTitle: ["Four ways to take Egypt", "at this level"],

  labels: {
    duration: (d, n) => `${d} days / ${n} nights`,
    from: "From",
    perPersonTwo: "per person, for two",
    perPersonFour: (p) => `${p} per person for four`,
    stays: "Where you stay",
    nights: (n) => (n === 1 ? "1 night" : `${n} nights`),
    view: "View the journey",
    dayByDay: "Day by day",
    day: "Day",
    enquire: (t) => `Enquire about ${t}`,
    priceNote: (peak) =>
      `Prices are in euros, per person, for October 2026 to September 2027, and include every element named on this page. International flights and gratuities are not included. The peak weeks — 20 December to 5 January, and Easter week — carry a ${peak}% supplement.`,
  },

  place: { giza: "Giza", cairo: "Cairo", luxor: "Luxor, West Bank", aswan: "Aswan", nile: "The Nile", redsea: "The Red Sea" },
  room: {
    pyramidSuite: "Pyramid-view suite",
    nileSuite: "Nile-view suite",
    palaceWing: "Historic Palace wing, Nile view",
    suite: "Suite",
    charter: "Full charter — the whole boat",
    cruiseSuite: "Luxury suite",
    poolSuite: "Grand suite with private pool",
  },
  dahabiya: "Private dahabiya",

  journeys: {
    "private-pharaoh": {
      title: "The Private Pharaoh",
      kicker: "The Great Pyramid and Karnak, each opened for your party alone",
      route: "Cairo · Giza · Luxor · Abydos",
      body:
        "A week built around two doors that are normally shut. At Giza the Great Pyramid is opened for your party for two hours, with nobody else inside; in Luxor, Karnak is held for you after closing and dinner is set in the precinct. Between them: the Grand Egyptian Museum with a senior Egyptologist, the finest tombs in the Valley of the Kings, and the two temples most visitors never reach.",
      highlights: [
        "Great Pyramid private opening — two hours, your party only",
        "Karnak opened after closing, with dinner in the precinct",
        "The tombs of Seti I, Nefertari and Tutankhamun",
        "A private balloon basket and a private felucca",
        "One senior Egyptologist throughout, a chauffeured car on call",
        "VIP handling at every arrival and departure",
      ],
      days: [
        { t: "Arrival, met at the aircraft door", d: "VIP handling through immigration, then the Mena House, where the Great Pyramid fills the window." },
        { t: "The Grand Egyptian Museum", d: "Tutankhamun's complete treasure and the Grand Staircase with a senior Egyptologist; the afternoon is yours." },
        { t: "Inside the Great Pyramid, alone", d: "Two hours inside Khufu's pyramid, opened for your party only, then Saqqara's Step Pyramid and the Serapeum." },
        { t: "Luxor, and Karnak after dark", d: "The flight south with VIP handling; at night Karnak is opened for you and dinner is served in the precinct." },
        { t: "Dawn balloon and the royal tombs", d: "A private basket over the West Bank, then the tombs of Seti I, Tutankhamun and Queen Nefertari." },
        { t: "Abydos and Dendera", d: "Egypt's two most beautiful temples by private car, lunch on the way, and sunset on a private felucca." },
        { t: "Departure", d: "The flight to Cairo, met and escorted through to your international departure." },
      ],
    },
    "royal-nile": {
      title: "The Royal Nile",
      kicker: "A dahabiya chartered for your party, from Aswan to Esna",
      route: "Cairo · Aswan · Abu Simbel · the Nile · Luxor",
      body:
        "Four nights on a sailing dahabiya with no other guests aboard: the crew, the chef and the moorings are yours, and the boat stops where large ships cannot. Before it, Cairo with the Great Pyramid opened privately and a night at the Old Cataract; Abu Simbel by private aircraft; and at the end, Karnak held for your dinner.",
      highlights: [
        "Full charter of a first-rank dahabiya — no other guests",
        "Great Pyramid private opening; dinner in Karnak after closing",
        "Abu Simbel by private aircraft",
        "The Old Cataract, historic Palace wing, facing the Nile",
        "The tombs of Seti I and Nefertari; a private balloon",
        "VIP handling at every arrival and departure",
      ],
      days: [
        { t: "Arrival, met at the aircraft door", d: "VIP handling, then the Four Seasons at The First Residence, above the Nile." },
        { t: "The Grand Egyptian Museum", d: "Tutankhamun's treasure and the Grand Staircase with a senior Egyptologist; an unhurried afternoon." },
        { t: "Inside the Great Pyramid, alone", d: "Two private hours inside Khufu's pyramid, then Saqqara's Step Pyramid and the Serapeum." },
        { t: "Aswan and the Old Cataract", d: "The morning flight south; Philae by private launch, then sunset from the terrace where Agatha Christie stayed." },
        { t: "Abu Simbel, then aboard", d: "Ramesses II's temples at first light by private aircraft; back for lunch, and your dahabiya casts off." },
        { t: "Kom Ombo", d: "Sailing north to the double temple of Sobek and Horus, moored for the night on a quiet bank." },
        { t: "Gebel el-Silsila and Edfu", d: "The ancient sandstone quarries and their shrines, then Edfu, the best-preserved temple in Egypt." },
        { t: "El Kab", d: "Rock-cut tombs few visitors see, a last afternoon under sail and dinner on deck." },
        { t: "Luxor, and Karnak by night", d: "Ashore at Esna; the tombs of Seti I and Nefertari; Karnak opened after closing, with dinner in the precinct." },
        { t: "Balloon, then departure", d: "A private basket at dawn over the West Bank; the flight to Cairo and VIP departure." },
      ],
    },
    "karnak-to-coral-sea": {
      title: "Karnak to the Coral Sea",
      kicker: "The Oberoi Philae up the Nile, then a private yacht on the Red Sea",
      route: "Cairo · Luxor · the Nile · Aswan · Abu Simbel · the Red Sea",
      body:
        "The classic river journey on the most refined cruiser on the Nile, taken in a suite, then ended properly: a private aircraft from Aswan to the Red Sea, a suite with its own pool, and a crewed yacht for the day among the Giftun reefs. The Great Pyramid and Karnak are opened for you along the way.",
      highlights: [
        "The Oberoi Philae, four nights in a luxury suite",
        "Great Pyramid private opening; dinner in Karnak after closing",
        "Private aircraft to Abu Simbel and on to the Red Sea",
        "A crewed motor yacht for a full day",
        "Suites at the Old Cataract and the Oberoi, Sahl Hasheesh",
        "VIP handling at every arrival and departure",
      ],
      days: [
        { t: "Arrival, met at the aircraft door", d: "VIP handling, then the Mena House with the Great Pyramid in the window." },
        { t: "The Grand Egyptian Museum", d: "Tutankhamun's treasure with a senior Egyptologist; the afternoon is yours." },
        { t: "Inside the Great Pyramid, alone", d: "Two private hours inside Khufu's pyramid, then Saqqara's Step Pyramid and the Serapeum." },
        { t: "Luxor, aboard the Oberoi Philae", d: "The flight south and embarkation; at night Karnak is opened for you, with dinner in the precinct." },
        { t: "The West Bank", d: "A private balloon at dawn, the tombs of Seti I and Nefertari, then the ship casts off south." },
        { t: "Esna and Edfu", d: "Through the Esna lock to the Temple of Horus at Edfu." },
        { t: "Kom Ombo to Aswan", d: "The river temple of Kom Ombo, and Aswan by evening." },
        { t: "The Old Cataract", d: "Ashore in Aswan; Philae by private launch; a private felucca among the islands at sunset." },
        { t: "Abu Simbel by private aircraft", d: "Ramesses II's temples at first light, back in Aswan for lunch and a quiet afternoon." },
        { t: "To the Red Sea, privately", d: "A private aircraft to Hurghada and the Oberoi at Sahl Hasheesh — a suite with its own pool." },
        { t: "A yacht for the day", d: "A crewed motor yacht to the Giftun reefs: snorkelling, lunch aboard, back at sunset." },
        { t: "Departure", d: "The flight home from Hurghada, or to Cairo to connect, with VIP handling." },
      ],
    },
    "grand-odyssey": {
      title: "The Grand Private Odyssey",
      kicker: "Every movement private — aircraft, dahabiya and yacht",
      route: "Cairo · Aswan · Abu Simbel · the Nile · Luxor · the Red Sea",
      body:
        "The whole of Egypt without a single shared moment. A private aircraft on every internal leg; a dahabiya chartered for four nights between Aswan and Esna; the Great Pyramid and Karnak opened for you; and three nights on the Red Sea with two days aboard your own yacht. Designed for a first visit meant to be the definitive one.",
      highlights: [
        "A private aircraft on every internal leg",
        "Full charter of a dahabiya for four nights",
        "Great Pyramid private opening; dinner in Karnak after closing",
        "Two days aboard a crewed yacht",
        "Mena House, Old Cataract, Al Moudira and Oberoi suites",
        "One Egyptologist and one attaché for the whole journey",
      ],
      days: [
        { t: "Arrival, met at the aircraft door", d: "VIP handling, then the Mena House with the Great Pyramid in the window." },
        { t: "The Grand Egyptian Museum", d: "Tutankhamun's treasure with a senior Egyptologist; an unhurried afternoon." },
        { t: "The Great Pyramid, Saqqara and Dahshur", d: "Two private hours inside Khufu's pyramid, then the Step Pyramid and the Red Pyramid." },
        { t: "By private aircraft to Aswan", d: "The Old Cataract, and Philae by private launch in the afternoon." },
        { t: "Abu Simbel", d: "By private aircraft at first light; a private felucca among the islands at sunset." },
        { t: "Aboard your dahabiya", d: "The boat is yours from lunch, sailing north to Kom Ombo." },
        { t: "Gebel el-Silsila", d: "Ancient quarries and shrines cut into the cliffs; moored on a quiet bank." },
        { t: "Edfu", d: "The Temple of Horus early, before the day's visitors arrive." },
        { t: "El Kab", d: "Rock-cut tombs few people see; a last dinner on deck." },
        { t: "Luxor, and Karnak by night", d: "Ashore at Esna, then Al Moudira; Karnak opened after closing, with dinner in the precinct." },
        { t: "Dawn balloon and the royal tombs", d: "A private basket over the West Bank; the tombs of Seti I, Tutankhamun and Nefertari." },
        { t: "To the Red Sea, privately", d: "A private aircraft to Hurghada; a suite with its own pool at the Oberoi, Sahl Hasheesh." },
        { t: "The yacht", d: "The Giftun reefs aboard a crewed motor yacht, lunch on deck." },
        { t: "The yacht again — or nothing at all", d: "Another reef, a dive, or the day at the spa." },
        { t: "Departure", d: "A private aircraft to Cairo and VIP handling to your flight home." },
      ],
    },
  },

  standardOverline: "How this tier is run",
  standard: [
    { title: "Priced, then proven", body: "Every price is on this page, and every element of the journey is confirmed in writing, under your name, before any money moves." },
    { title: "One point of contact", body: "The person who designs the journey is the person who answers while you are in Egypt. Not a call centre, and not a number that stops answering after the deposit." },
    { title: "Changed without fuss", body: "Every journey can be reshaped — days, hotels, pace, a larger party or staff travelling with you — and is re-priced on the same basis." },
    { title: "Discretion as standard", body: "No group, no shared vehicle, no published departure list. Nothing about who you are or where you go is discussed outside the team delivering it." },
  ],

  faqOverline: "Before you write",
  faqs: ({ from2, to2, from4, to4, peak }) => [
    { q: "What does an ultra-luxury journey in Egypt cost?", a: `Kemet's four Ultra journeys cost from ${from2} per person for seven days to ${to2} for fifteen, for a party of two. For four guests the per-person price falls to between ${from4} and ${to4}, because the charter, the aircraft and the private openings are shared. The peak weeks at Christmas, New Year and Easter carry a ${peak}% supplement.` },
    { q: "Can the Great Pyramid really be opened just for us?", a: "Yes. For two hours the Great Pyramid is opened for your party alone, outside public hours, with your Egyptologist beside you and nobody else inside. It is all arranged for you; you simply arrive." },
    { q: "How does dinner inside Karnak work?", a: "After the last visitors have left, Karnak is opened for your party. You walk the hypostyle hall with your Egyptologist, and dinner is served within the temple precinct. There is nothing for you to arrange." },
    { q: "Why is the Winter Palace not in these journeys?", a: "The Winter Palace in Luxor closed in early 2026 for a complete restoration and reopens in July 2027 as the Mandarin Oriental Winter Palace. Until then Luxor nights are at Al Moudira on the West Bank. The Old Cataract in Aswan stays open in its historic Palace wing while the Nile wing is renovated." },
    { q: "Which dahabiya is chartered?", a: "A first-rank dahabiya of six to ten cabins, chartered whole, with its own crew and chef — chosen for your dates and named in your written proposal." },
    { q: "Can a journey be changed, or made longer?", a: "Every one. Days, hotels, the order of the country and the pace can all change, and the price is re-quoted on the same basis. Larger parties, staff travelling with you and arrival by private jet are all planned for." },
    { q: "How far ahead should we book?", a: "Eight to twelve weeks for travel between October and April, when private openings and dahabiya charters are most contested. Shorter notice is sometimes possible; you will be told which elements can still be secured before you commit." },
    { q: "Who will we deal with?", a: "One person, from the first message to the last day in Egypt. Where a family office or an assistant is making the arrangements, they deal with the same person throughout." },
  ],

  closeTitle: "Tell us who is travelling, and when.",
  closeBody:
    "Every journey here can be changed. You receive a written outline first and the price second, and nothing is paid until each element is confirmed in your name. Everything stays between us.",
  closeCta: "WhatsApp, privately",
  closeQuiet: "or by email",

  whatsapp: "Hello Kemet — I would like to talk about a Kemet Ultra journey in Egypt.",
  whatsappJourney: (t) => `Hello Kemet — I would like to talk about "${t}" (Kemet Ultra).`,
  mailSubject: "Kemet Ultra — private enquiry",
  mailBody: "Please tell us who is travelling, roughly when, and which journey interests you.\n\n",
};
