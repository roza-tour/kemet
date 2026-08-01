// ---------------------------------------------------------------------------
// VIP programmes — the tier above the published catalogue.
//
// WHY THESE CARRY NO PRICE
// Not a coy sales tactic. Every element here is arranged individually: a
// dahabiya charter, a private aircraft leg or an after-hours opening is
// quoted by date, by party size and by what is actually available that week.
// A published figure would be wrong for almost everyone who read it, and this
// is precisely the tier where a wrong number costs credibility. So each
// programme states what it is built around, and the number follows the brief.
//
// ACCURACY NOTE FOR WHOEVER MAINTAINS THIS
// Everything listed below is genuinely arrangeable at the top of the Egyptian
// market — private after-hours access at major sites is a real, permitted
// arrangement; dahabiya full charter, private domestic aircraft, VIP airport
// handling and yacht charter all exist and are bookable. But they are
// arranged per booking, not held on standing contract. Before this page goes
// out in any advertising, confirm with operations that each element can still
// be delivered, and remove anything that cannot. Nothing on this page should
// promise something the business would have to improvise.
// ---------------------------------------------------------------------------

export interface VipProgramme {
  /** Roman numeral shown as the plate's mark. */
  numeral: string;
  /** Programme name. */
  title: string;
  /** One line under the name — the shape of it. */
  kicker: string;
  /** Duration, stated the way the catalogue states it. */
  duration: string;
  /** Where it runs. */
  route: string;
  /** Two or three sentences. Written to be read slowly. */
  body: string;
  /** The specific things that make this tier different from the catalogue. */
  includes: string[];
  /** Hero image for the plate. */
  image: { src: string; alt: string };
  /** Accent: "crimson" or "emerald". Plates alternate. */
  accent: "crimson" | "emerald";
}

export const vipProgrammes: VipProgramme[] = [
  {
    numeral: "I",
    title: "The Royal Nile",
    kicker: "A dahabiya held for your party alone, from Aswan to Luxor",
    duration: "10 days / 9 nights",
    route: "Cairo · Aswan · the river · Luxor",
    body:
      "A dahabiya is not a cruise ship. It carries a handful of cabins, it sails " +
      "rather than motors, and it moors where a large vessel cannot — against a " +
      "sandbank with nothing on either shore but reeds and the sound of the water. " +
      "This programme charters one entirely, so the boat, the crew, the chef and the " +
      "pace belong to your party for the length of the river. Cairo is taken first, " +
      "unhurried, and the flight south is private.",
    includes: [
      "Full charter of a dahabiya — no other guests aboard",
      "Private aircraft between Cairo and Aswan",
      "Your own Egyptologist for the whole journey, not a new one each city",
      "A chef briefed on your table before you arrive",
      "Moorings arranged for sunset, not for the schedule",
      "Suites on the river side, chosen and inspected in advance",
    ],
    image: {
      src: "/images/cruise/nile-dahabiya-deck.webp",
      alt: "The open teak deck of a dahabiya under sail on the Nile",
    },
    accent: "emerald",
  },
  {
    numeral: "II",
    title: "The Plateau, Privately",
    kicker: "Giza and the Grand Egyptian Museum outside public hours",
    duration: "5 days / 4 nights",
    route: "Cairo · Giza · Saqqara · Dahshur",
    body:
      "The pyramids are extraordinary and the plateau at eleven in the morning is " +
      "not. This programme is built around the hours nobody else has: a private " +
      "opening arranged in advance, the Grand Egyptian Museum after the doors close, " +
      "and Saqqara and Dahshur on a day when the coaches are elsewhere. What changes " +
      "is not the monuments. It is the silence around them.",
    includes: [
      "Private access arranged outside public hours at the headline sites",
      "The Grand Egyptian Museum after closing, with a curator-led route",
      "An Egyptologist who specialises in the Old Kingdom",
      "Meet-and-greet at the aircraft door and VIP airport handling",
      "A suite with the plateau in the window, not a courtyard",
      "A car and driver held for your party, all day, every day",
    ],
    image: {
      src: "/images/giza/giza-sound-and-light-show.webp",
      alt: "The Giza plateau lit at night with the pyramids behind the Sphinx",
    },
    accent: "crimson",
  },
  {
    numeral: "III",
    title: "Kings & Cataracts",
    kicker: "Upper Egypt by private aircraft, at dawn each day",
    duration: "12 days / 11 nights",
    route: "Luxor · Aswan · Abu Simbel · Philae",
    body:
      "Thebes deserves more than a day and a half, and Abu Simbel deserves better " +
      "than a coach convoy at four in the morning. Flying privately turns the whole " +
      "south into one unhurried arc: the Valley of the Kings at opening, Karnak " +
      "before the light hardens, Abu Simbel at the hour it was carved to catch. " +
      "Afternoons are left alone on purpose.",
    includes: [
      "Private aircraft on every internal leg, on your hours",
      "The Valley of the Kings at opening, before the first coach",
      "A private balloon basket over the west bank — not a shared one",
      "Access to tombs that are closed on the standard ticket",
      "An Egyptologist and, for one session, a specialist academic",
      "A felucca held at Aswan for the evening you choose",
    ],
    image: {
      src: "/images/luxor/luxor-karnak-hypostyle-hall.webp",
      alt: "The hypostyle hall of Karnak Temple in low morning light",
    },
    accent: "emerald",
  },
  {
    numeral: "IV",
    title: "The Grand Odyssey",
    kicker: "The whole country, taken properly, over three weeks",
    duration: "21 days / 20 nights",
    route: "Cairo · Alexandria · the Nile · Abu Simbel · the Red Sea",
    body:
      "Egypt is not one country but eight, and this is the only programme that " +
      "reaches all of them without hurrying: the Delta and the Mediterranean, " +
      "Coptic and Islamic Cairo, the pharaonic south by river, Nubia at the second " +
      "cataract, and the Red Sea at the end because three weeks of monuments " +
      "deserve a coda. It is designed once, for one party, and it is never " +
      "repeated in the same shape.",
    includes: [
      "Every internal movement private — aircraft, vehicle or vessel",
      "A dahabiya for the river section and a yacht for the coast",
      "One Egyptologist throughout, so nothing is explained twice",
      "A personal attaché reachable for the whole three weeks",
      "Residences and suites held under your name before deposit",
      "The itinerary written, revised and agreed before anything is paid",
    ],
    image: {
      src: "/images/aswan/abu-simbel-great-temple-colossi.webp",
      alt: "The colossal seated figures of Ramesses II at Abu Simbel",
    },
    accent: "crimson",
  },
];

/** What every programme in this tier carries, stated once rather than four times. */
export const vipStandard: Array<{ title: string; body: string }> = [
  {
    title: "Arranged, not assembled",
    body:
      "Nothing here is pulled from a catalogue page. The brief is taken first — " +
      "who is travelling, what has already been seen, what the days should feel " +
      "like — and the programme is drawn from that.",
  },
  {
    title: "One point of contact",
    body:
      "The person who designs the journey is the person who answers while you are " +
      "in Egypt. Not a call centre, and not a number that stops answering once the " +
      "deposit has cleared.",
  },
  {
    title: "Held before it is paid for",
    body:
      "Suites, charters and access are confirmed in writing, under your name, " +
      "before any money moves. If something cannot be secured, you are told before " +
      "you commit rather than on arrival.",
  },
  {
    title: "Discretion as standard",
    body:
      "No group, no shared vehicle, no published departure list. Where privacy is " +
      "the point of the trip, arrangements are made accordingly and no detail of " +
      "your itinerary is discussed outside the people delivering it.",
  },
];
