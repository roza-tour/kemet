// ---------------------------------------------------------------------------
// Hub-page editorial.
//
// WHY THIS EXISTS
// An audit of word counts found the five section hubs to be the THINNEST pages
// on the site — destinations.html at 390 words, activities.html at 438 — while
// being the pages that compete for the broadest queries ("Egypt destinations",
// "things to do in Egypt", "Egyptian food"). A hero and a grid of cards gives a
// search engine nothing to rank and a reader nothing to decide with.
//
// Each hub below gets: a real opening argument, a set of numbered sections that
// answer the question the hub is actually for, a decision aid, and an FAQ block
// that doubles as FAQPage structured data.
//
// TONE: the same as the rest of the site — specific, unhurried, and written for
// someone choosing how to do this properly rather than how to do it cheaply.
// ---------------------------------------------------------------------------

export interface HubSection {
  /** Short heading. */
  title: string;
  /** Two or three paragraphs' worth, as a single string. */
  body: string;
}

export interface HubRow {
  /** Left column — the thing being compared. */
  label: string;
  /** Middle column — the short answer. */
  value: string;
  /** Right column — the caveat that actually decides it. */
  note: string;
}

export interface HubEditorial {
  /** Section eyebrow above the editorial block. */
  eyebrow: string;
  /** The heading for the editorial block. */
  heading: string;
  /** The opening argument — displayed larger, as a lede. */
  lede: string;
  sections: HubSection[];
  /** Optional decision table. */
  table?: { heading: string; intro: string; columns: [string, string, string]; rows: HubRow[] };
  faqs: Array<{ q: string; a: string }>;
}

export const hubs: Record<string, HubEditorial> = {
  // =========================================================================
  destinations: {
    eyebrow: "How Egypt fits together",
    heading: "Five places, one river, and the order they make sense in",
    lede:
      "Egypt is easier to plan than it looks, because almost all of it sits on a single line. The Nile runs south to north for a thousand kilometres and nearly every city, temple and tomb you have heard of is within sight of it. Once you see the country as a river with two deserts on either side and two seas at the ends, choosing where to go stops being a matter of picking from a list and becomes a matter of deciding how far up the line you want to travel.",
    sections: [
      {
        title: "The river is the itinerary",
        body:
          "Cairo sits where the Nile fans out into its delta. Six hundred kilometres south is Luxor, built over ancient Thebes, holding more of the pharaonic world than anywhere else on earth. Two hundred kilometres further south again is Aswan, where the river narrows between granite islands and Egypt starts to feel Nubian rather than Mediterranean. That is the spine, and every classic Egyptian journey is some version of travelling along it. The stretch between Luxor and Aswan is the one people cruise, because the temples — Kom Ombo, Edfu, Esna — sit on the bank and arriving by water is both easier and better than arriving by road.",
      },
      {
        title: "What each place is actually for",
        body:
          "Cairo is a city, not a monument: twenty million people, a thousand years of Islamic architecture, the Coptic quarter, two world-class museums and — on its western edge — Giza. Luxor is the opposite; a modest town wrapped around an extraordinary concentration of pharaonic building, with the temples on the east bank and the tombs on the west. Aswan is where you slow down: the river at its most beautiful, Philae on its island, Nubian villages of painted houses, and the road or flight to Abu Simbel. Alexandria is Egypt's Mediterranean face, Greco-Roman rather than pharaonic, and the only place in the country that feels European. The Red Sea coast is the reason people extend a trip by a week.",
      },
      {
        title: "How many days each one deserves",
        body:
          "Cairo needs three days to be done without rushing — one for the Giza plateau and the Grand Egyptian Museum, one for Islamic and Coptic Cairo, one for Saqqara, Memphis and Dahshur. Luxor needs three: east bank, west bank, and a third for the things everyone skips. Aswan needs two, plus a day if Abu Simbel is on the list. Alexandria is a comfortable overnight rather than a day trip. The Red Sea is a week or nothing — three days on a reef is a tease. Add it up and the honest answer for a first visit that does not exhaust you is eight to ten days on the ground.",
      },
      {
        title: "Getting between them",
        body:
          "Cairo to Luxor is an hour by air and roughly ten by road, which makes the choice straightforward on any trip shorter than a fortnight. Luxor to Aswan is either a four-hour drive or, far better, three or four nights on the river. Cairo to Alexandria is under three hours by fast train through the delta. The Red Sea resorts have their own international airports, so a beach coda does not have to route back through Cairo. Domestic flights cost money and give back the one thing an itinerary cannot manufacture, which is daylight on the ground.",
      },
      {
        title: "The places that are not on the list",
        body:
          "Everything above is the spine. Off it, Egypt holds Abydos and Dendera — two of the most complete temples in the country, north of Luxor and almost empty; the Fayoum, ninety minutes from Cairo, with a fossil valley and Greco-Roman portraiture; Siwa on the Libyan border, a Berber oasis unlike anywhere else; and the White Desert, where the chalk formations look like a seabed because they were one. None of these belongs on a first visit of eight days. All of them are why people come back.",
      },
    ],
    table: {
      heading: "Choosing by how long you have",
      intro:
        "Realistic shapes rather than maximum coverage. Each assumes a private journey with a licensed Egyptologist, and each leaves the afternoons alone.",
      columns: ["Days on the ground", "The shape that works", "What it means leaving out"],
      rows: [
        { label: "4–5 days", value: "Cairo and Giza only, properly", note: "No Luxor. A short first trip spent well in one place beats two rushed ones." },
        { label: "6–7 days", value: "Cairo, then fly to Luxor", note: "No Aswan and no cruise — the river stretch needs nights, not hours." },
        { label: "8–10 days", value: "Cairo, Luxor, a Nile cruise, Aswan", note: "The complete classical Egypt. Nothing important is missing." },
        { label: "12–14 days", value: "The above plus Abu Simbel and the Red Sea, or Alexandria", note: "Room for a second thread — diving, the Mediterranean, or the desert." },
        { label: "A second visit", value: "Abydos, Dendera, the Fayoum, Middle Egypt, Siwa", note: "The highlights are behind you. This is the country nobody queues for." },
      ],
    },
    faqs: [
      { q: "Which cities should I visit in Egypt?", a: "For a first visit: Cairo for the Pyramids, the Grand Egyptian Museum and the medieval city; Luxor for the temples and the Valley of the Kings; and Aswan for the river, Philae and Abu Simbel. The stretch between Luxor and Aswan is best travelled by boat. Alexandria and the Red Sea are worthwhile additions once those three are covered." },
      { q: "How many days do you need in Egypt?", a: "Eight to ten days on the ground covers Cairo, Luxor, a Nile cruise and Aswan without rushing. Six or seven works for Cairo and Luxor. Under five, stay in Cairo and do it properly rather than crossing the country twice. Twelve to fourteen adds Abu Simbel, Alexandria or a week on the Red Sea." },
      { q: "What is the best way to travel between Cairo and Luxor?", a: "Fly. It is an hour in the air against roughly ten hours by road, and on any trip shorter than two weeks the time saved is worth considerably more than the fare. An overnight sleeper train is the pleasant alternative if you would rather watch the Nile valley arrive at dawn than sit in a departure lounge." },
      { q: "Is a Nile cruise worth it?", a: "Between Luxor and Aswan, yes — and not mainly for the boat. The temples on that stretch sit on the riverbank, so arriving by water is how they were meant to be approached, and the accommodation moves while you stay put. Three or four nights is the usual length. A small restored dahabiya is a different and better experience than a large cruise vessel." },
      { q: "Where should I base myself in Egypt?", a: "There is no single base — the country is too long. The standard structure is three or four nights in Cairo, then Luxor or a boat, then Aswan. Trying to run Luxor as a day trip from Cairo is a fourteen-hour day for four hours of sightseeing, and we would talk you out of it." },
    ],
  },

  // =========================================================================
  activities: {
    eyebrow: "How this works",
    heading: "Not add-ons sold at a desk",
    lede:
      "In most of Egypt, an 'activity' is something offered to you in a hotel lobby the night before, at a price that depends on how you look. That is not what these are. Each one below is planned into the itinerary from the start, at the hour it is actually good, with the operator we would put our own family with — and priced inside the journey rather than extracted from it afterwards.",
    sections: [
      {
        title: "The hour matters more than the activity",
        body:
          "A hot-air balloon over the Theban necropolis is extraordinary at 5.30am and pointless at ten. A felucca in Aswan is a different thing at sunset than at noon. Diving on a Red Sea reef is best on the first boat out, before the day trips arrive. Almost everything on this page has a right hour, and half the value of planning a journey properly is being in the right place during it. That means early starts on some days, which is why the days around them are deliberately unhurried.",
      },
      {
        title: "Everything here is optional and nothing is filler",
        body:
          "We do not pad itineraries. If a balloon at dawn is not your idea of a holiday, say so and the morning becomes something else — the Valley of the Kings at opening, or nothing at all. Nothing on this page is included by default in a quote; each is priced separately and clearly, so you can see exactly what it adds before you decide. What we will not do is sell you an activity we think is a poor use of your day.",
      },
      {
        title: "Who takes you",
        body:
          "For anything technical — diving, ballooning, desert driving — the operator matters more than the price by a wide margin. We work with the same handful of operators repeatedly, chosen for their equipment and their safety record rather than their commission, and we will tell you who they are before you book. For everything else, your licensed Egyptologist is with you, which turns a camel ride at Giza from a photograph into a conversation about what you are riding past.",
      },
      {
        title: "The seasons underneath",
        body:
          "Red Sea water is warmest from June to September and diveable all year; visibility is at its best in the autumn. Balloons fly year-round but are grounded by wind, so plan them early in a stay rather than on the last morning. The desert is best from October to March — the White Desert in July is not a matter of comfort but of sense. Feluccas need wind, and Aswan almost always has it. Where an activity depends on weather we build a fallback into the day rather than leaving it to chance.",
      },
    ],
    faqs: [
      { q: "Are activities included in the tour price?", a: "No, and deliberately. Each is quoted separately and clearly so you can see what it adds before committing. Included in every journey are your licensed Egyptologist, all entrance fees to sites and monuments, private air-conditioned transfers, hotel pickup and drop-off, lunch on touring days and bottled water. Activities sit outside that and are yours to choose." },
      { q: "What is the best thing to do in Egypt besides the Pyramids?", a: "A dawn hot-air balloon over the Theban necropolis at Luxor, a sunset felucca on the Nile at Aswan, and diving or snorkelling on a Red Sea reef. Each is a genuinely different experience from monument-visiting, and each has a right hour that turns it from pleasant into memorable." },
      { q: "Is hot-air ballooning in Luxor safe?", a: "It is a mature, regulated operation flown daily, and the operator matters more than anything else. We work with a small number of companies chosen for their maintenance and safety record, and we will name the operator before you book. Flights are grounded when wind conditions are wrong — which is why we schedule balloons early in a stay, so there is room to try again." },
      { q: "Do I need to book activities in advance?", a: "For balloons, diving and anything involving a private boat, yes — capacity is genuinely limited and high season fills. We arrange all of it as part of the itinerary before you travel, so nothing depends on a conversation at a hotel desk when you arrive." },
      { q: "Can we skip an activity if we change our minds?", a: "Yes, subject to the operator's own terms, which we set out in writing when the activity is confirmed. If the weather makes something impossible we rearrange it or remove it from your bill — you are not charged for a balloon that never left the ground." },
    ],
  },

  // =========================================================================
  cuisine: {
    eyebrow: "How Egypt eats",
    heading: "A cuisine of patience, not of spice",
    lede:
      "Egyptian food surprises people who arrive expecting the fire of a Levantine or North African table. It is not a spicy cuisine. It is a slow one — beans left overnight, greens cooked down for an hour, bread baked twice a day, meat treated as a punctuation rather than a subject. It is also, unusually, a cuisine where the best version of almost every dish is the cheapest and most ordinary one, which is a genuinely difficult thing to explain to a traveller who has paid for a good hotel.",
    sections: [
      {
        title: "The three dishes to understand first",
        body:
          "Ful medames — fava beans stewed overnight with oil, lemon and cumin — is what Egypt has eaten for breakfast since the pharaohs, and versions of it appear in tomb reliefs. Koshari is the national dish and an oddity: rice, lentils, macaroni, chickpeas, fried onions and a tomato-vinegar sauce, layered in one bowl, entirely vegetarian, invented in the nineteenth century and now sold on every corner. Molokhia is the one that divides visitors — jute leaves cooked to a green, faintly viscous soup with garlic and coriander, served over rice with rabbit or chicken. Get these three and you have the shape of the cuisine.",
      },
      {
        title: "When Egyptians actually eat",
        body:
          "Later than you. Breakfast is early and substantial, lunch is the main meal of the day and falls somewhere between two and four, and dinner starts at nine and can run past midnight. Restaurants that fill at seven are full of visitors; the same room at ten is full of Egyptians. During Ramadan the rhythm inverts entirely — the city is quiet all afternoon and then erupts at sunset for iftar, which is worth planning a trip around rather than avoiding.",
      },
      {
        title: "Where the good food is",
        body:
          "Not, generally, in hotels. The best koshari in Cairo comes from shops that sell nothing else and have done for eighty years. The best grilled meat comes from places with a counter and no menu. Fish in Alexandria is chosen from ice at the front and cooked while you sit. There is excellent restaurant cooking in Egypt too — modern Egyptian kitchens in Cairo doing serious work — but the ceiling and the floor of this cuisine are much closer together than in Europe, and a journey that eats only in hotel dining rooms misses most of it. We build food into itineraries on purpose, with a guide who knows which counter.",
      },
      {
        title: "Vegetarians, and everyone else",
        body:
          "Egypt is one of the easiest countries in the world to eat well in without meat, largely by accident: koshari, ful, ta'ameya (the Egyptian falafel, made with fava beans rather than chickpeas and greener inside), mahshi, baba ghanoush and a long list of cooked-vegetable dishes are all standard, everywhere, and none is a special request. Vegans do well too, with dairy the main thing to watch. Coeliac and severe allergy requirements need more care — bread is central and cross-contamination is real — and are worth telling us about at the planning stage rather than at the table.",
      },
      {
        title: "The practical part",
        body:
          "Tap water is not for drinking anywhere in Egypt; bottled is universal and included in every journey day. Salads and cut fruit are fine in good restaurants and hotels and best approached with more caution at street level. Eat where there is turnover — a busy counter is a safe counter. Tea is drunk constantly, black and very sweet; ask for it with mint. Coffee is Turkish-style and ordering it 'mazbout' gets you medium sugar, which is the correct answer.",
      },
    ],
    faqs: [
      { q: "What food is Egypt known for?", a: "Ful medames (slow-cooked fava beans, the national breakfast), koshari (rice, lentils, pasta, chickpeas and fried onions in one bowl — Egypt's national dish and entirely vegetarian), molokhia (a green jute-leaf stew), ta'ameya (fava-bean falafel) and mahshi (stuffed vegetables). For dessert: basbousa, konafa and om ali." },
      { q: "Is Egyptian food spicy?", a: "No. Egyptian cooking is aromatic rather than hot — cumin, coriander, garlic and dill do the work. Chilli appears as a condiment on the table (shatta) for those who want it, not in the dish itself. Travellers who find Indian or Thai food too hot are almost always comfortable in Egypt." },
      { q: "Is Egypt good for vegetarians?", a: "Unusually good, and without any special effort. Koshari, ful, ta'ameya, mahshi, baba ghanoush and most mezze are vegetarian as standard rather than as an accommodation. Vegans manage well too — dairy is the main thing to check. Tell us at the planning stage and restaurants are chosen accordingly." },
      { q: "Can I eat street food in Egypt?", a: "With judgement, yes, and some of the best food in the country is sold this way. The rule is turnover: eat where there is a queue and the food is cooked in front of you. Avoid anything that has been sitting, and drink bottled water only. Your guide knows which counters are worth stopping at, which is most of the value." },
      { q: "What should I drink in Egypt?", a: "Tea, constantly — black, sweet, and better with mint. Turkish-style coffee; ask for it 'mazbout' for medium sugar. Fresh sugarcane juice and hibiscus (karkadeh), served hot in winter and iced in summer, are both worth seeking out. Bottled water everywhere, and never from the tap." },
    ],
  },

  // =========================================================================
  guides: {
    eyebrow: "Before you go",
    heading: "What to read, and in what order",
    lede:
      "Most of the anxiety around planning a trip to Egypt comes from a small number of practical unknowns — the visa, the heat, the money, whether it is safe, and how long any of it takes. None is complicated once answered. These guides exist so that the questions are settled before you start choosing itineraries, because the shape of a journey follows from the answers rather than the other way round.",
    sections: [
      {
        title: "Start with when",
        body:
          "Timing decides more about an Egyptian journey than any other single choice. It sets what you pay, how crowded the Valley of the Kings is at nine in the morning, whether Upper Egypt is comfortable in the middle of the day, and whether the Red Sea is warm. October to April is the straightforward answer; the interesting answers are the shoulders — late October, early March — where the weather is the same and the crowds and prices are not.",
      },
      {
        title: "Then settle entry and money",
        body:
          "Whether you need a visa, and which kind, depends entirely on your passport, and getting it wrong is the one planning error that can end a trip at the airport. Money is simpler than people fear: cards work in hotels and better restaurants, cash is needed everywhere else, and tipping is a genuine part of Egyptian life rather than an imposition — budget for it deliberately and it stops being awkward.",
      },
      {
        title: "Then work out how long it takes",
        body:
          "Egypt is longer than it looks on a map, and the difference between flying and driving between cities is the difference between an eight-day itinerary and a ten-day one. Read the transport guide before deciding how many places to include; almost everyone's first draft has one city too many in it.",
      },
      {
        title: "The rest is texture",
        body:
          "What to pack, what to eat, what the etiquette is at a mosque, how to photograph a tomb without a permit problem — none of these will change your itinerary, but all of them change how the days feel. They are worth an hour of reading before you fly and are the parts travellers most often say they wished they had known.",
      },
    ],
    faqs: [
      { q: "When is the best time to visit Egypt?", a: "October to April, when daytime temperatures inland are comfortable. Within that, late October and early March are the sweet spot: the same weather as the December–February peak with noticeably fewer people and lower prices. May to September is hot in Upper Egypt but perfectly workable at dawn and dusk, and it is the best time for the Red Sea." },
      { q: "Do I need a visa for Egypt?", a: "It depends entirely on your passport. Most European, North American and Asia-Pacific nationals can buy a visa on arrival or apply for an e-Visa online; Gulf nationals do not need one; some nationalities must obtain the e-Visa in advance. We publish the rule for each nationality separately, with the fee and permitted stay, and link to the official government portal as the authority." },
      { q: "How much should I tip in Egypt?", a: "Tipping — baksheesh — is a normal and expected part of daily life rather than an extra. Plan for it: small notes for the person who opens a door or carries a bag, more for your driver and guide at the end of a journey. Treating it as a budgeted, cheerful part of the trip rather than a series of surprises changes the experience entirely." },
      { q: "Is Egypt safe for tourists?", a: "The tourist regions — Cairo, Giza, Luxor, Aswan, Alexandria and the Red Sea coast — are well policed and routinely visited by millions of people a year without incident. The practical nuisances are persistent touts at the major sites and heavy Cairo traffic, both of which a private guide and driver remove almost entirely. Check your own government's current travel advice before booking." },
      { q: "How far in advance should I book a trip to Egypt?", a: "Three months is comfortable for most of the year. Six months if you are travelling over Christmas, New Year or Easter, or if a specific Nile boat or hotel room matters — there are very few dahabiyas and they are taken early." },
    ],
  },

  // =========================================================================
  culture: {
    eyebrow: "Reading the country",
    heading: "Four Egypts, stacked on the same ground",
    lede:
      "The mistake most visitors make is treating Egypt as one civilisation with a very long history. It is closer to four, built on top of each other and still all present: the pharaonic world that ended two thousand years ago, the Greco-Roman layer that followed it, the Coptic Christian Egypt that has been continuous since the first century, and the Islamic Egypt that has shaped the last fourteen hundred years. Most of what confuses people about the country resolves the moment you can tell which layer you are standing in.",
    sections: [
      {
        title: "The pharaonic layer, and why it looks the way it does",
        body:
          "Almost nothing on an Egyptian temple wall is decoration. The figures are sized by importance rather than perspective, the poses are fixed by convention that held for three thousand years, and the texts are instructions — offerings to be made, spells to be spoken, names to be preserved because a name spoken aloud kept its owner alive. Once you know that a cartouche is a rope encircling a king's name to protect it, or that the ankh in a god's hand is being held to a pharaoh's nose because it is literally the breath of life, the walls stop being beautiful patterns and start being readable.",
      },
      {
        title: "The gods are a system, not a cast list",
        body:
          "There are a great many Egyptian gods and they are easier than they look, because most of the important ones belong to one story. Osiris is murdered by his brother Set, dismembered, reassembled by his wife Isis, and becomes lord of the dead; their son Horus avenges him and every living pharaoh is Horus, every dead one Osiris. The wedjat — the eye of Horus, lost in the fight and restored — is why the symbol means healing and protection and appears on everything from tomb walls to fishing boats today. Ra crosses the sky by day and the underworld by night, which is what the entire Valley of the Kings is decorated with.",
      },
      {
        title: "Coptic Egypt is not a footnote",
        body:
          "Christianity reached Egypt in the first century and the Coptic Church claims Mark the Evangelist as its founder. Egypt is where monasticism was invented — the desert fathers of the fourth century are the origin of every monastery in the world. The Coptic language is the last living descendant of ancient Egyptian, written in Greek letters, still used in liturgy. In Old Cairo, the Hanging Church stands on the towers of a Roman fortress and Ben Ezra Synagogue is a few minutes' walk away. Three faiths, one small quarter, continuously inhabited for two thousand years.",
      },
      {
        title: "Islamic Cairo is a city, not a museum",
        body:
          "Founded in 969 CE as a royal enclosure and grown into one of the great medieval cities of the world, it holds more standing Islamic architecture than anywhere else — mosques, madrasas, merchant houses, gates and a bazaar that has been trading since the fourteenth century. Al-Azhar, founded in 970, is the oldest continuously operating university on earth. And all of it is in use: people pray in these mosques, live in these lanes and sell in this market. Visiting it as a monument misses the point of it.",
      },
      {
        title: "The crafts that never stopped",
        body:
          "A surprising amount of Egypt is still made by hand, in the same places and often by the same families. Appliquéd tentmaker textiles in a covered street in Cairo, alabaster turned and polished in workshops on the Luxor west bank, Nubian beadwork in Aswan in colours that appear nowhere else in Egypt, oud and goblet-drum making, glass, copper. These are not demonstrations arranged for visitors — they are working trades, and the difference is obvious the moment you are in one.",
      },
    ],
    faqs: [
      { q: "What are the main ancient Egyptian gods?", a: "Osiris (lord of the dead), Isis (his wife, magic and protection), Horus (their son, kingship — every living pharaoh was Horus), Set (Osiris's murderer, chaos), Ra (the sun), Anubis (embalming), Thoth (writing and wisdom) and Hathor (love and music). Most of the important ones belong to a single story — the murder of Osiris and Horus's revenge — which is why they keep appearing together." },
      { q: "What does the ankh symbol mean?", a: "The ankh is the hieroglyph for 'life'. On temple walls it is usually shown being held by a god to a pharaoh's nose — not as decoration but as an action: the god is giving the king the breath of life. It is the most recognisable Egyptian symbol in the world and one of the few whose meaning is completely unambiguous." },
      { q: "What is the eye of Horus?", a: "The wedjat — the eye Horus lost fighting Set to avenge his father Osiris, and which was restored. Because it was made whole again it means healing, protection and wholeness, and it has been painted on tomb walls, carved into amulets and put on the bows of Nile fishing boats for four thousand years. It is still painted on boats today." },
      { q: "Who are the Copts?", a: "Egypt's indigenous Christian community, continuous since the first century and around ten per cent of the population. The Coptic language is the last living descendant of ancient Egyptian. Egypt is where Christian monasticism was invented in the fourth century, and Coptic Cairo — the Hanging Church, built on a Roman fortress — is one of the oldest continuously used Christian sites anywhere." },
      { q: "What should I wear when visiting mosques and churches in Egypt?", a: "Shoulders and knees covered for everyone; women should carry a scarf for the head at mosques, and shoes come off at the door. Outside religious sites Egypt is relaxed in tourist areas and more conservative elsewhere — light, covering clothing is also simply the sensible answer to the sun. Friday late morning is the main prayer time and some mosques limit visits then." },
    ],
  },
};
