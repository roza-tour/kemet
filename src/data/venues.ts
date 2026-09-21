// ---------------------------------------------------------------------------
// Private access — monuments and museums that can be closed to everyone else
// and held for one party, for an occasion rather than an itinerary.
//
// This is NOT the VIP page. That page sells journeys in which named sites are
// reserved along the way; this one sells the site itself, for an evening: a
// proposal, a wedding, an anniversary, a board's private dinner. The unit is a
// venue and a date, not a route and a duration.
//
// ⚠️ `confirmed` IS A PUBLICATION SWITCH, NOT A DESCRIPTION.
// Only venues marked true are rendered. Everything here is a real arrangement
// that exists in Egypt, but "it exists" and "we deliver it" are different
// claims, and only the second one belongs on a page a client reads. A venue is
// switched on when the office has actually secured it, not when it sounds
// good. Each entry records where its facts came from so the next person can
// check them rather than trust them.
//
// NO PRICES, and not from squeamishness: every one of these is quoted from the
// permit fee, the guest count, the date and what the evening needs. A figure
// here would be wrong in both directions and would also invite comparison
// shopping on the one product where that is beside the point.
// ---------------------------------------------------------------------------

export interface Venue {
  id: string;
  /** The place, as it would be named on an invitation. */
  name: string;
  /** Where it is, in three or four words. */
  where: string;
  /** The one line that does the selling. */
  kicker: string;
  /** What exclusive use of this place actually means. */
  body: string;
  /** Hard facts a host needs before they can picture it. */
  facts: { label: string; value: string }[];
  /** What it genuinely suits. Honest — not every place suits every occasion. */
  suits: string[];
  image: { src: string; alt: string; width: number; height: number };
  /** Render only when true. See the note above. */
  confirmed: boolean;
  /** Where the facts above came from, for whoever checks them next. */
  source: string;
}

export const venues: Venue[] = [
  {
    id: "great-pyramid",
    name: "The Great Pyramid of Khufu",
    where: "Giza plateau",
    kicker: "The King's Chamber, with nobody else in the pyramid.",
    body:
      "The Great Pyramid closes to the public and is opened again for one party. " +
      "You walk the Grand Gallery with no queue behind you and no voices ahead, " +
      "and you have two uninterrupted hours inside — long enough to sit in the " +
      "King's Chamber in silence, which is the thing nobody who visits in daylight " +
      "ever gets to do. It is the single most difficult arrangement in Egypt and it " +
      "cannot be bought online at any price.",
    facts: [
      { label: "Inside", value: "Two uninterrupted hours" },
      { label: "Party", value: "Small by necessity — the chamber decides" },
      { label: "Permit", value: "Ministry of Tourism & Antiquities, Ministry of Interior, and plateau supervision" },
      { label: "Notice", value: "Months, not weeks" },
    ],
    suits: ["A proposal", "A milestone birthday", "A private vow renewal", "A serious Egyptology interest"],
    image: {
      src: "/images/giza/giza-great-pyramid-khufu.webp",
      alt: "The Great Pyramid of Khufu on the Giza plateau",
      width: 736, height: 981,
    },
    confirmed: true,
    source: "Private openings outside public hours are arranged by formal application to the Ministry of Tourism & Antiquities, the Ministry of Interior and plateau supervision, stating purpose, timing and party size; two uninterrupted hours inside is the standard grant.",
  },
  {
    id: "giza-plateau",
    name: "The Giza plateau before sunrise",
    where: "Giza",
    kicker: "The three pyramids and the Sphinx, before the gates open.",
    body:
      "The plateau at first light with four hundred other people on it is a " +
      "photograph everyone already has. Before the gates open it is a different " +
      "place: no coaches, no camel touts, no queue at the Sphinx enclosure, and " +
      "the light coming in flat across the desert from the east. Breakfast can be " +
      "set on the sand facing all three pyramids while the city behind is still " +
      "asleep.",
    facts: [
      { label: "Window", value: "05:00–07:00 April–September · 06:00–08:00 October–March" },
      { label: "Party", value: "From two to a large gathering" },
      { label: "Permit", value: "Special permission for entry outside official hours" },
      { label: "Notice", value: "Several weeks" },
    ],
    suits: ["A wedding photograph", "A family gathering", "A brand or editorial shoot", "Breakfast on the sand"],
    image: {
      src: "/images/giza/giza-camel-pyramids-sunrise.webp",
      alt: "The pyramids of Giza at sunrise with the desert empty in front of them",
      width: 736, height: 736,
    },
    confirmed: true,
    source: "Early access to the plateau outside official opening runs 05:00–07:00 (Apr–Sep) and 06:00–08:00 (Oct–Mar) and requires advance special permission from the Ministry of Tourism.",
  },
  {
    id: "karnak",
    name: "The precinct at Karnak",
    where: "Luxor, east bank",
    kicker: "Dinner among the columns, after the last visitor has gone.",
    body:
      "Karnak is the largest religious building ever raised, and the hypostyle " +
      "hall holds a hundred and thirty-four columns the height of a six-storey " +
      "building. After the site closes, a table can be laid inside the precinct " +
      "and the columns lit from the base, which is how they were meant to be seen " +
      "— from below, at night, by fire. It seats a private dinner or a gathering " +
      "of two hundred without either feeling crowded.",
    facts: [
      { label: "Capacity", value: "From an intimate table to around 200 guests" },
      { label: "Includes", value: "Lighting, sound, staging and catering inside the precinct" },
      { label: "Permit", value: "Site authority, applied for in your name" },
      { label: "Notice", value: "Two to three months for a full production" },
    ],
    suits: ["A wedding dinner", "A significant anniversary", "A company's own occasion", "A private concert"],
    image: {
      src: "/images/luxor/luxor-karnak-hypostyle-hall.webp",
      alt: "The great hypostyle hall of Karnak Temple, its columns rising into shadow",
      width: 652, height: 980,
    },
    confirmed: true,
    source: "Private catered events inside the Karnak precinct are an established arrangement for up to roughly 200 guests, with site-authority permitting handled by the operator alongside lighting, sound, staging and catering.",
  },
  {
    id: "gem",
    name: "The Grand Egyptian Museum, after hours",
    where: "Giza",
    kicker: "Tutankhamun's collection, with the galleries closed.",
    body:
      "The largest archaeological museum in the world, after the doors shut. " +
      "Galleries can be closed to the public and held for one party, which means " +
      "the Tutankhamun rooms — five thousand objects, the whole burial assemblage " +
      "together for the first time — walked at your own pace with a curator rather " +
      "than a guide. The grand staircase alone takes a reception of some size.",
    facts: [
      { label: "When", value: "After public closing" },
      { label: "Party", value: "A private viewing, or a reception on the grand staircase" },
      { label: "Led by", value: "A curator, not a guide" },
      { label: "Notice", value: "Weeks — longer around the Tutankhamun galleries" },
    ],
    suits: ["A reception", "A collector's evening", "A board dinner", "A quiet viewing for a few"],
    image: {
      src: "/images/giza/giza-grand-egyptian-museum.webp",
      alt: "The Grand Egyptian Museum at Giza",
      width: 474, height: 592,
    },
    confirmed: true,
    source: "The museum runs an official after-hours programme and takes private events through its own events office; individual galleries can be closed to the public for a private party.",
  },
  {
    id: "citadel",
    name: "The Citadel of Salah al-Din",
    where: "Cairo",
    kicker: "The alabaster mosque, and the whole city below it.",
    body:
      "Eight hundred years of fortress on the only hill in Cairo, with the " +
      "Mosque of Muhammad Ali at the top of it and the minarets of the medieval " +
      "city laid out underneath. The terrace looks west over the entire capital to " +
      "the pyramids on a clear evening, which makes it the one place in Cairo where " +
      "a gathering can see the whole thing at once.",
    facts: [
      { label: "The view", value: "West over Islamic Cairo to the Giza pyramids" },
      { label: "Best", value: "Dusk, as the call to prayer goes up across the city" },
      { label: "Permit", value: "Site authority, applied for in your name" },
      { label: "Notice", value: "Several weeks" },
    ],
    suits: ["An evening reception", "A cultural performance", "A company's own occasion"],
    image: {
      src: "/images/cairo/cairo-citadel-mosque-dusk.webp",
      alt: "The Mosque of Muhammad Ali at the Citadel of Cairo at dusk",
      width: 1600, height: 1066,
    },
    confirmed: true,
    source: "Named by the business as an arrangement it already makes. Permit route is the site authority, as for other monuments.",
  },

  // ---------------------------------------------------------------------
  // Below this line: real arrangements that exist in Egypt, NOT yet switched
  // on because the office has not confirmed it has secured them. Each needs
  // one word changed — confirmed: true — and nothing else.
  // ---------------------------------------------------------------------
  {
    id: "philae",
    name: "Philae, after the last launch",
    where: "Aswan, Agilkia island",
    kicker: "An island temple, and the only boat on the water is yours.",
    body:
      "Philae sits on its own island and is reached only by boat, which makes it " +
      "the most naturally private monument in Egypt: when the last public launch " +
      "leaves, the island is empty. The temple of Isis was cut into forty thousand " +
      "blocks and rebuilt here stone by stone when the dam rose, and at night, lit, " +
      "with the water around it, it is the most theatrical setting in the country.",
    facts: [
      { label: "Access", value: "By private launch only" },
      { label: "When", value: "After the last public boat" },
      { label: "Permit", value: "Site authority and river permission" },
      { label: "Notice", value: "Several weeks" },
    ],
    suits: ["A proposal", "A wedding for few", "A private performance"],
    image: {
      src: "/images/aswan/aswan-philae-temple-island.webp",
      alt: "The Temple of Philae on its island at Aswan, seen across the water",
      width: 1080, height: 810,
    },
    confirmed: false,
    source: "NOT VERIFIED. Island access by private launch is ordinary; exclusive after-hours use needs confirming with the site authority before this is published.",
  },
  {
    id: "dahabiya",
    name: "A dahabiya, whole boat",
    where: "Aswan to Luxor",
    kicker: "Not a cabin on a ship — the ship.",
    body:
      "A dahabiya is the sailing boat the Nile was travelled on before engines: " +
      "eight to twelve cabins, two lateen sails, no motor, and a crew that moors " +
      "wherever the party wants rather than where the schedule says. Taken whole, " +
      "there are no other guests, no fixed dinner sitting and no announcement over " +
      "a tannoy. It is the only way to have the river itself to yourselves for a week.",
    facts: [
      { label: "Capacity", value: "Typically 8–12 cabins" },
      { label: "Route", value: "Aswan to Luxor, four to six nights under sail" },
      { label: "Permit", value: "None beyond the ordinary — the boat is chartered, not permitted" },
      { label: "Notice", value: "Early. There are very few of these boats" },
    ],
    suits: ["A family across generations", "A wedding party", "A milestone week", "A small company retreat"],
    image: {
      src: "/images/cruise/nile-dahabiya-deck.webp",
      alt: "The teak deck of a dahabiya under sail on the Nile",
      width: 1300, height: 867,
    },
    confirmed: false,
    source: "NOT VERIFIED against this business's own suppliers. Whole-boat dahabiya charter is a standard arrangement in the market; switch on once the office has held one.",
  },
  {
    id: "hatshepsut",
    name: "Hatshepsut's terraces",
    where: "Luxor, west bank",
    kicker: "Three colonnaded terraces cut into the cliff, as a stage.",
    body:
      "Deir el-Bahari is built straight into the rock face of the Theban " +
      "mountain — three terraces, one above the next, with a ramp running up the " +
      "middle of them. It has been used as a stage before, and it is the rare " +
      "monument that was designed to be approached ceremonially and still works " +
      "that way. Lit after dark, the cliff behind it does most of the work.",
    facts: [
      { label: "The setting", value: "Three terraces against the Theban cliff" },
      { label: "Best", value: "After dark, lit from the terraces" },
      { label: "Permit", value: "Site authority, applied for in your name" },
      { label: "Notice", value: "Two to three months" },
    ],
    suits: ["A performance", "A ceremonial arrival", "A large private dinner"],
    image: {
      src: "/images/luxor/luxor-hatshepsut-temple-deir-el-bahri.webp",
      alt: "The terraced temple of Hatshepsut at Deir el-Bahari beneath the Theban cliff",
      width: 1600, height: 1066,
    },
    confirmed: false,
    source: "NOT VERIFIED. The site has hosted staged performances historically; current permitting for private hire needs confirming before publication.",
  },
];

/** Only what the office has actually secured reaches the page. */
export const publishedVenues = venues.filter((v) => v.confirmed);

export const VENUE_QUESTION = "Can you book an Egyptian monument privately for an event?";
export const VENUE_ANSWER =
  "Yes, for a defined list of sites. Exclusive use of an Egyptian monument is granted " +
  "by permit, not by payment: a formal application goes to the Ministry of Tourism and " +
  "Antiquities and, at Giza, to the Ministry of Interior and plateau supervision, stating " +
  "the purpose, the exact hours and the size of the party. Kemet applies in your name and " +
  "does not take a booking until the permit is granted. The Great Pyramid can be opened " +
  "after public closing for two uninterrupted hours; the Giza plateau can be entered before " +
  "the gates open; dinner can be laid inside the precinct at Karnak for up to around two " +
  "hundred; and galleries at the Grand Egyptian Museum can be closed for a private viewing. " +
  "Lead times run from several weeks to several months depending on the site.";
