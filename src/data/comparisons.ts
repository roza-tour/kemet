// ---------------------------------------------------------------------------
// Comparisons — /compare/<slug>.html
//
// WHY THESE
// "X or Y" is the query a traveller types at the exact moment they are about to
// commit, and it is the one page type the site had none of. Each comparison
// below is a decision a real client has asked us to settle, and each is chosen
// so it does not compete with an existing page: no "private vs group" (the cost
// page and occasions/private-group-egypt already own that argument), and no
// "when to visit" (the twelve month pages own it).
//
// RULE OF WRITING: give the verdict first, then earn it. A comparison page that
// refuses to answer is worse than no page. Where the honest answer is "both, in
// this order", say that instead of manufacturing a winner.
// ---------------------------------------------------------------------------

export interface CompareRow {
  /** The attribute being compared. */
  aspect: string;
  /** Option A's answer. */
  a: string;
  /** Option B's answer. */
  b: string;
}

export interface Comparison {
  slug: string;
  /** Page H1. */
  title: string;
  /** Short label for cards and breadcrumbs. */
  label: string;
  symbol: string;
  /** The two things being compared, as they appear in the table header. */
  optionA: string;
  optionB: string;
  shortSummary: string;
  metaDescription: string;
  /** The answer, given before the argument. */
  verdict: string;
  /** The opening framing. */
  lede: string;
  rows: CompareRow[];
  /** Who each option is right for. */
  chooseA: { heading: string; points: string[] };
  chooseB: { heading: string; points: string[] };
  /** Longer discussion after the table. */
  sections: Array<{ title: string; body: string }>;
  faqs: Array<{ q: string; a: string }>;
  keywords: string[];
}

export const comparisons: Comparison[] = [
  // =========================================================================
  {
    slug: "nile-cruise-vs-land-tour",
    title: "Nile cruise or land tour?",
    label: "Cruise or land",
    symbol: "fish",
    optionA: "Nile cruise",
    optionB: "Land tour",
    shortSummary: "Between Luxor and Aswan, the boat wins — and the reason is not the boat.",
    metaDescription:
      "Nile cruise or land tour between Luxor and Aswan? An honest comparison of cost, comfort, what you see, and who each one actually suits.",
    verdict:
      "For the Luxor–Aswan stretch, cruise. The temples on that section — Kom Ombo, Edfu, Esna — sit on the riverbank and were built to be approached from the water; arriving by road means a coach park and a walk in, arriving by boat means stepping off and being there. The accommodation also moves while you stay put, which on a four-night section removes three hotel changes. Go by land only if a specific reason makes the boat wrong for you.",
    lede:
      "This is the most common question we are asked, and it is usually framed as a question about comfort or cost. It is really a question about geography. Almost everything worth stopping for between Luxor and Aswan is within a few hundred metres of the river, which is why the river is the road.",
    rows: [
      { aspect: "What you actually see", a: "Kom Ombo, Edfu and Esna from the water, plus Luxor and Aswan at each end", b: "The same temples, reached by road with a coach park in between" },
      { aspect: "Hotel changes", a: "None — one cabin for the whole stretch", b: "Two or three, each costing half a morning" },
      { aspect: "Time lost to transfers", a: "Almost none; you move while you sleep or eat", b: "Roughly 4 hours Luxor–Aswan, plus stops" },
      { aspect: "Cost", a: "Higher per night, but includes accommodation, meals and transport", b: "Lower headline cost; more separate lines once hotels and transfers are added" },
      { aspect: "Flexibility of pace", a: "Fixed sailing schedule — the boat leaves when it leaves", b: "Fully flexible; stop, stay longer, change the order" },
      { aspect: "Best for", a: "First visits and anyone who wants the classic Egypt experience", b: "Second visits, tight budgets, or itineraries that go off the river" },
      { aspect: "Motion sickness", a: "Effectively none — the Nile is flat water, not sea", b: "Not applicable" },
      { aspect: "Evenings", a: "On deck, moored at a temple town, with the river going dark", b: "In a hotel, which could be anywhere" },
    ],
    chooseA: {
      heading: "Choose a cruise if",
      points: [
        "This is a first visit to Egypt and you want the version people describe afterwards",
        "You would rather unpack once than three times",
        "The idea of dinner on deck with Edfu ahead of you is part of the appeal",
        "You are travelling with family and want a base that everyone can retreat to",
      ],
    },
    chooseB: {
      heading: "Choose land if",
      points: [
        "You have seen the Nile temples already and want Abydos, Dendera or the desert instead",
        "Your dates fall in high summer, when some boats reduce sailings",
        "You want to stop somewhere for three days rather than one",
        "Someone in the party genuinely dislikes being on a boat of any kind",
      ],
    },
    sections: [
      {
        title: "The cost question is not what it looks like",
        body:
          "A cruise looks more expensive per night, and per night it is. But the fare covers the cabin, all meals, and the movement between three towns — so the honest comparison is against a hotel plus a driver plus restaurants plus four hours of road. Once those are added, the gap narrows considerably and sometimes closes. What the cruise does not include is flexibility, and that is the real trade.",
      },
      {
        title: "The sailing direction matters more than people expect",
        body:
          "Boats run Luxor to Aswan and Aswan to Luxor, and they are not the same trip. Sailing south (Luxor to Aswan) is against the current and slightly slower, with the temples spaced through the middle days. Sailing north is quicker and ends in Luxor, which means the west bank — the Valley of the Kings, Hatshepsut, the Colossi — comes at the end when you already know how to read a temple. We usually recommend north, and we will say why for your particular itinerary.",
      },
      {
        title: "What a cruise does not do",
        body:
          "It does not take you off the river. Abydos and Dendera, the two great temples north of Luxor, are not on any cruise route; nor is the Fayoum, nor Middle Egypt, nor the desert. If your reason for coming is to see beyond the standard circuit, the boat is the wrong tool and we would plan a land itinerary without hesitation.",
      },
    ],
    faqs: [
      { q: "Is a Nile cruise worth it?", a: "Between Luxor and Aswan, yes — and not primarily for the boat. The temples on that stretch sit on the riverbank and are far better approached from the water than from a coach park. The accommodation also moves while you stay put, removing two or three hotel changes from a four-night section." },
      { q: "How many nights should a Nile cruise be?", a: "Three or four is standard and enough. Three nights covers Luxor to Aswan or the reverse with the main temples; four adds a slower pace and usually Esna. Seven-night cruises exist and mostly repeat the same stretch twice — a dahabiya is a better use of the extra nights." },
      { q: "Is a Nile cruise better than staying in hotels?", a: "For the Luxor–Aswan section, in most cases yes. For Cairo, Alexandria or anywhere off the river it does not apply. The common structure we plan is hotels in Cairo, then a boat for the river stretch, then a hotel again — using each for what it is good at." },
      { q: "Do you get seasick on a Nile cruise?", a: "Essentially never. The Nile is flat inland water, boats travel slowly, and there is no swell. Travellers who cannot manage a sea crossing are almost always completely comfortable on the river." },
    ],
    keywords: ["nile cruise vs land tour", "is a nile cruise worth it", "luxor to aswan by road or boat", "nile cruise or hotel", "how many nights nile cruise"],
  },

  // =========================================================================
  {
    slug: "dahabiya-vs-cruise-ship",
    title: "Dahabiya or cruise ship?",
    label: "Dahabiya or ship",
    symbol: "fish",
    optionA: "Dahabiya",
    optionB: "Cruise ship",
    shortSummary: "Eight cabins under sail against a hundred and forty with an engine.",
    metaDescription:
      "Dahabiya or standard Nile cruise ship? What the difference actually is — size, moorings, pace, cost — and which one suits your journey.",
    verdict:
      "If the budget allows and the dates are flexible, the dahabiya, without much hesitation. It is not a nicer version of the same thing — it is a different river. Eight to twelve cabins instead of a hundred and forty, moorings at villages the large ships cannot reach, and a boat that stops when you want to swim. The cruise ship is the right answer when dates are fixed, the party is large and unwilling to split, or the difference in cost matters more than the difference in experience.",
    lede:
      "Almost everyone booking their first Nile cruise is choosing between vessels that look, in photographs, broadly similar. They are not. The distinction that matters is not the star rating or the pool — it is the number of people on board and whether the boat has sails.",
    rows: [
      { aspect: "Cabins", a: "Typically 8–12", b: "Typically 60–140" },
      { aspect: "Propulsion", a: "Sail, with a tug for still air", b: "Engine" },
      { aspect: "Where it moors", a: "Sandbanks, islands and villages with no dock", b: "Established quays in the main towns" },
      { aspect: "Pace", a: "Set by wind and by you — it can stop", b: "Fixed schedule shared with every other vessel" },
      { aspect: "Sound", a: "Water and wind", b: "Engine, and the boat moored alongside you" },
      { aspect: "Dining", a: "One sitting, everyone together, often on deck", b: "Buffet, multiple sittings, indoor dining room" },
      { aspect: "Entertainment", a: "None, deliberately", b: "Nightly programme, sometimes unavoidable" },
      { aspect: "Cost", a: "Substantially higher per night", b: "The standard market rate" },
      { aspect: "Availability", a: "Very limited — few boats, booked far ahead", b: "Wide, most weeks of the year" },
      { aspect: "Whole-boat charter", a: "Realistic for a party of 10–20", b: "Possible but rarely worth it" },
    ],
    chooseA: {
      heading: "Choose a dahabiya if",
      points: [
        "This trip is marking something — a honeymoon, an anniversary, a milestone",
        "Quiet is the point, and a nightly entertainment programme would spoil it",
        "You are a party of eight or more and could take the whole boat",
        "You can book six months out and are not tied to a fixed week",
      ],
    },
    chooseB: {
      heading: "Choose a cruise ship if",
      points: [
        "Your dates are fixed and fall in a busy month",
        "The party is large, mixed in age, and wants a pool and options",
        "The cost difference would come out of something you would rather keep",
        "It is a first visit and the priority is seeing the temples, not the boat",
      ],
    },
    sections: [
      {
        title: "What the mooring difference actually buys",
        body:
          "A large cruise vessel needs a quay, and there are a limited number of them — which is why boats raft up three and four deep at Edfu and you walk through someone else's lobby to reach the shore. A dahabiya draws less water and moors almost anywhere: a sandbank, an island, a village with a path up the bank. That is the difference between an evening looking at another boat's windows and an evening looking at the Nile.",
      },
      {
        title: "The trade you are making is availability",
        body:
          "There are a few dozen dahabiyas working the Nile against several hundred cruise vessels. They are small, they book early, and over Christmas, New Year and Easter they are gone the previous spring. If your dates cannot move, the honest answer is often that the choice is not available to you — and a good cruise ship well chosen is a genuinely fine experience.",
      },
      {
        title: "Not every small boat is a dahabiya",
        body:
          "The word has become a marketing term and is applied to vessels that are simply small motor cruisers. A real dahabiya has masts and sails and works with the wind. If this matters to you — and it should, because it is the whole point — ask for the boat by name before booking. We name the vessel in every quote for exactly this reason.",
      },
    ],
    faqs: [
      { q: "What is a dahabiya?", a: "A traditional Nile sailing boat with two masts, typically eight to twelve cabins, working the river the way boats did before engines. It moors at sandbanks and villages the large vessels cannot reach, carries a tenth of the passengers and has no entertainment programme. It costs substantially more per night than a standard cruise ship." },
      { q: "Is a dahabiya worth the extra cost?", a: "For a journey that is marking something — a honeymoon, an anniversary, a milestone birthday — it is the single upgrade we recommend before any other. For a first visit where the priority is seeing the temples and the budget is better spent elsewhere, a well-chosen cruise ship does the job properly." },
      { q: "How many people does a dahabiya hold?", a: "Usually sixteen to twenty-four passengers across eight to twelve cabins. That size also makes whole-boat charter realistic for a private group — a family or a set of friends of ten or more can take the vessel entirely, which is the best version of Nile travel available." },
      { q: "How far in advance should I book a dahabiya?", a: "Six months for most of the season, and up to a year for Christmas, New Year and Easter. There are only a few dozen genuine dahabiyas on the river and they are taken early — this is the booking that constrains the rest of the itinerary, so it is the one we settle first." },
    ],
    keywords: ["dahabiya vs cruise ship", "what is a dahabiya", "best nile cruise boat", "small nile cruise", "luxury nile cruise egypt"],
  },

  // =========================================================================
  {
    slug: "luxor-vs-aswan",
    title: "Luxor or Aswan?",
    label: "Luxor or Aswan",
    symbol: "palm",
    optionA: "Luxor",
    optionB: "Aswan",
    shortSummary: "One is the greatest concentration of monuments on earth. The other is where you breathe.",
    metaDescription:
      "Luxor or Aswan — which to choose if you only have time for one, what each is actually for, and why most itineraries should include both.",
    verdict:
      "If you can only visit one, Luxor — it holds more of the ancient world than anywhere else on the planet and no other Egyptian city comes close. But the honest answer is that they do different jobs: Luxor is where you look at things, Aswan is where you stop looking and simply sit by the river. A trip with only Luxor is complete but relentless; adding two nights in Aswan is what turns it from a survey into a journey.",
    lede:
      "This question usually arrives when someone is trying to save two days. It is worth understanding what each city is before deciding which to cut, because they are not lesser and greater versions of the same thing — they are opposites that happen to sit on the same river.",
    rows: [
      { aspect: "What it is", a: "Ancient Thebes: temples, tombs, the densest site concentration on earth", b: "A river town where Egypt becomes Nubian" },
      { aspect: "The headline sights", a: "Karnak, Luxor Temple, Valley of the Kings, Hatshepsut, the Colossi", b: "Philae, the High Dam, Elephantine, Nubian villages, Abu Simbel" },
      { aspect: "Days needed", a: "Three to do it without rushing", b: "Two, plus a day if Abu Simbel is included" },
      { aspect: "Pace", a: "Demanding — early starts, long site days, real walking", b: "Slow. The point of Aswan is that nothing is urgent" },
      { aspect: "The river itself", a: "Present but secondary to the monuments", b: "The main event — granite islands, feluccas, the cataract" },
      { aspect: "Heat", a: "Hot; the west bank is fully exposed", b: "Hotter, but the river and the breeze make it feel less so" },
      { aspect: "Evenings", a: "Karnak sound and light, or the corniche", b: "A felucca at sunset, which is the best hour in Egypt" },
      { aspect: "If you have one day", a: "West bank at opening: Valley of the Kings and Hatshepsut", b: "Philae by boat, then a felucca at sunset" },
    ],
    chooseA: {
      heading: "Prioritise Luxor if",
      points: [
        "This is a first visit and the ancient world is the reason you came",
        "You want the Valley of the Kings, Karnak and Hatshepsut — none of which is anywhere else",
        "A dawn balloon over the Theban necropolis is on the list",
        "You have three days or fewer south of Cairo",
      ],
    },
    chooseB: {
      heading: "Prioritise Aswan if",
      points: [
        "You have been to Luxor before",
        "Abu Simbel is the thing you most want to see — Aswan is the base for it",
        "The trip needs a place to slow down, and every itinerary does",
        "Nubian Egypt — a different language, architecture and colour palette — interests you",
      ],
    },
    sections: [
      {
        title: "Why Luxor takes three days and not two",
        body:
          "The east bank is Karnak and Luxor Temple, which is a full morning and an evening. The west bank is the Valley of the Kings, Hatshepsut's terraces, the Colossi and the Valley of the Queens — another full day, and it has to start at opening because there is no shade anywhere on it. That is two days for the headline material and none at all for Medinet Habu, the Ramesseum, Deir el-Medina or the Luxor Museum, any one of which would be a country's leading attraction elsewhere. Two days in Luxor is not a short version; it is an incomplete one.",
      },
      {
        title: "Aswan is the base for Abu Simbel",
        body:
          "Abu Simbel is 280km south of Aswan — a forty-minute flight or a three-hour drive each way through open desert. It cannot sensibly be done from Luxor. If Abu Simbel is on your list, and for many people it is the single image that made them want to come to Egypt, then Aswan is not optional.",
      },
      {
        title: "The honest recommendation",
        body:
          "Three nights in Luxor, two in Aswan, and the stretch between them by boat. That is five nights, it covers everything above without hurrying, and it is the shape we plan more often than any other. If the trip cannot hold five, cut a day from Cairo before cutting Aswan — Cairo will still be there and it is the easiest part of Egypt to return to.",
      },
    ],
    faqs: [
      { q: "Is Luxor or Aswan better?", a: "Luxor if you can only choose one — it holds Karnak, Luxor Temple, the Valley of the Kings and Hatshepsut, a concentration of ancient monuments unmatched anywhere on earth. Aswan is the better place to slow down, is the base for Abu Simbel, and is where the Nile is at its most beautiful. Most good itineraries include both." },
      { q: "How many days do you need in Luxor?", a: "Three. One for the east bank (Karnak and Luxor Temple), one for the west bank starting at opening (Valley of the Kings, Hatshepsut, the Colossi), and one for the sites almost everyone skips — Medinet Habu, the Ramesseum, Deir el-Medina and the Luxor Museum." },
      { q: "Is Aswan worth visiting?", a: "Yes, for two reasons. It is the base for Abu Simbel, which cannot be sensibly reached from anywhere else. And it is the only place on a classical Egyptian itinerary where the pace genuinely drops — the river between the granite islands at sunset is, for many travellers, the memory that outlasts the temples." },
      { q: "Can you visit Abu Simbel from Luxor?", a: "Not sensibly. Abu Simbel is 280km south of Aswan, which is itself 220km south of Luxor. From Aswan it is a forty-minute flight or a three-hour drive each way; from Luxor it becomes an entire punishing day. If Abu Simbel matters to you, build Aswan into the itinerary." },
    ],
    keywords: ["luxor or aswan", "luxor vs aswan which is better", "how many days in luxor", "is aswan worth visiting", "abu simbel from luxor"],
  },

  // =========================================================================
  {
    slug: "egyptian-museum-vs-grand-egyptian-museum",
    title: "Egyptian Museum or the Grand Egyptian Museum?",
    label: "Which museum",
    symbol: "eye",
    optionA: "Egyptian Museum (Tahrir)",
    optionB: "Grand Egyptian Museum (Giza)",
    shortSummary: "One is the new wonder. The other is the hundred-year-old attic, and it is not the lesser one.",
    metaDescription:
      "Egyptian Museum on Tahrir or the Grand Egyptian Museum at Giza? What is in each, how long each takes, and which to choose if you only have time for one.",
    verdict:
      "If you have one visit, the Grand Egyptian Museum — it holds the complete Tutankhamun collection, it is purpose-built, and the grand staircase of royal statuary with the Pyramids framed at the top is the single most impressive museum space in the world. But do not write off the old museum. It holds the Royal Mummies, a density of objects the new building deliberately avoids, and an atmosphere that a modern museum cannot manufacture. They are twenty kilometres apart and both deserve a half-day.",
    lede:
      "For a century the Egyptian Museum on Tahrir Square held essentially everything, in glass cases, with handwritten labels, packed to the ceiling. The Grand Egyptian Museum on the edge of the Giza plateau changed that — and the question of which to visit is now the most common Cairo planning question we are asked.",
    rows: [
      { aspect: "Where", a: "Tahrir Square, central Cairo", b: "Giza plateau edge, ~20km west" },
      { aspect: "Opened", a: "1902", b: "Progressively from 2021" },
      { aspect: "Tutankhamun", a: "A small selection remains", b: "The complete collection — over 5,000 objects" },
      { aspect: "Royal Mummies", a: "Moved to the National Museum of Egyptian Civilisation (Fustat)", b: "Not held here" },
      { aspect: "The building", a: "A historic museum, dense and atmospheric", b: "Purpose-built, vast, with the Pyramids in the sightline" },
      { aspect: "Time needed", a: "2–3 hours", b: "3–4 hours minimum, easily a full day" },
      { aspect: "Crowds", a: "Moderate and manageable", b: "Heavy — go at opening or late afternoon" },
      { aspect: "Best paired with", a: "Islamic and Coptic Cairo, both central", b: "The Giza plateau, ten minutes away" },
    ],
    chooseA: {
      heading: "Choose the Tahrir museum if",
      points: [
        "You have been to Egypt before and want density rather than curation",
        "Your day is otherwise in central Cairo and crossing the city is not worth it",
        "The nineteenth-century museum experience appeals — cases, labels, dust and all",
        "You have limited time and are not making a special trip to Giza that day",
      ],
    },
    chooseB: {
      heading: "Choose the Grand Egyptian Museum if",
      points: [
        "Tutankhamun is the reason you came — the complete collection is only here",
        "This is a first visit to Egypt",
        "You are seeing the Pyramids the same day; they are ten minutes apart",
        "You are travelling with people who tire of dense displays and need space",
      ],
    },
    sections: [
      {
        title: "Where the mummies went",
        body:
          "The Royal Mummies are in neither building. They were moved in 2021 to the National Museum of Egyptian Civilisation at Fustat, in a purpose-built hall, and the transfer itself — a televised procession of twenty-two pharaohs through Cairo — was one of the great pieces of national theatre of the decade. If seeing Ramesses II's face is on your list, that is a third museum and a separate half-day, and it is worth it.",
      },
      {
        title: "How to do both without losing a day",
        body:
          "They are twenty kilometres apart across a city with genuinely difficult traffic, so combining them in one day means most of the middle of it in a car. The structure that works: the Grand Egyptian Museum in the morning followed by the Giza plateau in the afternoon, since they are neighbours; and the Tahrir museum on a separate day paired with Islamic Cairo, the Citadel or the Coptic quarter — all of which are central.",
      },
      {
        title: "Why the old museum still matters",
        body:
          "The Grand Egyptian Museum is curated: objects have space, light and explanation. The Tahrir museum is the opposite — an accumulation, room after room, with more in one hall than most national museums hold in total. For a first visit the new building is the better introduction. For anyone with a real interest, the old one is where you find the thing nobody told you about, in a case in a corner, with a card that has been there since 1930.",
      },
    ],
    faqs: [
      { q: "What is the difference between the Egyptian Museum and the Grand Egyptian Museum?", a: "The Egyptian Museum on Tahrir Square opened in 1902 and is dense, historic and packed with objects. The Grand Egyptian Museum, on the edge of the Giza plateau, opened progressively from 2021 and is purpose-built, vast, and holds the complete Tutankhamun collection of over 5,000 objects. They are twenty kilometres apart and hold different things." },
      { q: "Where is Tutankhamun's treasure now?", a: "At the Grand Egyptian Museum in Giza, where the complete collection — over 5,000 objects, many never previously displayed — is shown together for the first time since its discovery. A small selection remains at the Tahrir museum." },
      { q: "Where are the Royal Mummies?", a: "At the National Museum of Egyptian Civilisation in Fustat, in a dedicated hall, since the 2021 transfer. They are in neither the Tahrir museum nor the Grand Egyptian Museum. Seeing them is a separate half-day and well worth planning in." },
      { q: "How long do you need at the Grand Egyptian Museum?", a: "Three to four hours as a minimum and a full day if you are genuinely interested. It is very large, the Tutankhamun galleries alone absorb over an hour, and rushing it defeats the purpose. Go at opening or in the late afternoon — the middle of the day is the busiest." },
    ],
    keywords: ["grand egyptian museum vs egyptian museum", "where is tutankhamun treasure", "royal mummies cairo", "which cairo museum to visit", "grand egyptian museum how long"],
  },

  // =========================================================================
  {
    slug: "sharm-el-sheikh-vs-hurghada",
    title: "Sharm el-Sheikh or Hurghada?",
    label: "Sharm or Hurghada",
    symbol: "fish",
    optionA: "Sharm el-Sheikh",
    optionB: "Hurghada",
    shortSummary: "Better reefs on one side, better access to everything else on the other.",
    metaDescription:
      "Sharm el-Sheikh or Hurghada for a Red Sea stay? Reefs, diving, access to Luxor and Cairo, and which coast suits which trip.",
    verdict:
      "For diving and snorkelling, Sharm el-Sheikh — Ras Mohammed and the Straits of Tiran are the best reefs in Egypt and among the best in the world. For a trip that combines the sea with the monuments, Hurghada, because Luxor is a four-hour drive rather than a flight and Cairo is closer. If the sea is the whole point, go to Sinai; if the sea is the reward at the end of an Egypt itinerary, go to Hurghada or Marsa Alam.",
    lede:
      "Both are on the Red Sea, both have direct international flights, and both are sold in the same brochures — which hides the fact that they are on opposite sides of a sea, three hundred kilometres apart, with genuinely different reefs and genuinely different logistics.",
    rows: [
      { aspect: "Where", a: "South Sinai, east side of the Red Sea", b: "Mainland Egypt, west side" },
      { aspect: "The reefs", a: "Ras Mohammed and Tiran — world-class, dramatic walls", b: "Giftun and the offshore islands — good, gentler" },
      { aspect: "Best for", a: "Serious diving and snorkelling", b: "Family beach days, watersports, easier entries" },
      { aspect: "Drive to Luxor", a: "Not practical — requires a flight", b: "About 4 hours by road" },
      { aspect: "Drive to Cairo", a: "6–7 hours, or a short flight", b: "5–6 hours, or a short flight" },
      { aspect: "Day trip to St Catherine's", a: "Yes — 2.5 hours, Mount Sinai and the monastery", b: "No" },
      { aspect: "Visa", a: "A free Sinai-only permit is possible for short stays", b: "Standard Egypt visa required" },
      { aspect: "Feel", a: "Purpose-built resort strip, well established", b: "Larger, busier, more variety at every price level" },
    ],
    chooseA: {
      heading: "Choose Sharm el-Sheikh if",
      points: [
        "Diving or snorkelling is the main reason for the trip",
        "You want Ras Mohammed, one of the world's great marine parks",
        "St Catherine's Monastery and Mount Sinai appeal",
        "The trip is a standalone Red Sea holiday rather than an add-on",
      ],
    },
    chooseB: {
      heading: "Choose Hurghada if",
      points: [
        "You want to combine the sea with Luxor and the Valley of the Kings",
        "You are travelling with children and want gentler entries and more choice",
        "You would rather drive to the monuments than take another flight",
        "Marsa Alam, further south and quieter, is also on the table",
      ],
    },
    sections: [
      {
        title: "The reef difference is real",
        body:
          "Ras Mohammed sits where the Gulfs of Suez and Aqaba meet, which produces currents, walls dropping hundreds of metres and a density of fish that has made it famous for fifty years. The Straits of Tiran add four more reefs of the same quality. Hurghada's reefs are good — Giftun, Abu Nuhas, the offshore islands — and for a snorkeller or a new diver they are entirely satisfying. For an experienced diver the gap is noticeable.",
      },
      {
        title: "Hurghada wins on logistics, decisively",
        body:
          "Hurghada to Luxor is a four-hour drive on a good road, which makes a two-day monument excursion from a beach base entirely practical. From Sharm it means flying, usually via Cairo. If your trip is 'a week on the Red Sea with a couple of days at the temples', that difference decides it. If your trip is 'a week diving', it does not matter at all.",
      },
      {
        title: "The third option nobody mentions",
        body:
          "Marsa Alam, two hundred kilometres south of Hurghada with its own international airport, is quieter than both, has excellent reefs, and offers dugong and turtle sightings in the seagrass beds at Abu Dabbab. It is the answer for travellers who want Sharm's water quality with Hurghada's access and neither's crowds — and it is the one we suggest most often for a second Red Sea trip.",
      },
    ],
    faqs: [
      { q: "Is Sharm el-Sheikh or Hurghada better?", a: "For diving and snorkelling, Sharm — Ras Mohammed and the Straits of Tiran are world-class. For combining the sea with Luxor and the monuments, Hurghada, because Luxor is a four-hour drive rather than a flight. If the sea is the whole trip, go to Sinai; if it is the reward at the end of an Egypt itinerary, go to Hurghada or Marsa Alam." },
      { q: "Can you visit Luxor from Hurghada?", a: "Yes — it is roughly four hours by road each way, so a full day trip is possible and an overnight is far better. Doing the Valley of the Kings, Hatshepsut and Karnak properly needs two days, and we would always recommend staying rather than driving back the same night." },
      { q: "Do I need a visa for Sharm el-Sheikh?", a: "If your entire trip stays within Sharm el-Sheikh, Dahab, Nuweiba and Taba, many nationalities can be issued a free Sinai-only entry permit for up to fifteen days instead of a visa. It does not allow travel to Cairo, Luxor or the Egyptian mainland — so if there is any chance of a day trip, buy the ordinary visa." },
      { q: "Which Red Sea resort is best for families?", a: "Hurghada for variety and gentler beach entries, and Marsa Alam for quiet with excellent snorkelling straight off the shore. Sharm works well for families too, particularly for older children who snorkel, but its best reefs are reached by boat rather than from the beach." },
    ],
    keywords: ["sharm el sheikh vs hurghada", "best red sea resort egypt", "luxor from hurghada", "ras mohammed diving", "marsa alam vs hurghada"],
  },
];

export const findComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
