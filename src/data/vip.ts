// ---------------------------------------------------------------------------
// VIP programmes — the tier above the published catalogue.
//
// WHY THESE CARRY NO PRICE
// Not a coy sales tactic. Every element here is arranged individually: a
// dahabiya charter, a private aircraft leg or an exclusive site booking is
// quoted by date, by party size and by what is actually available that week.
// A published figure would be wrong for almost everyone who read it, and this
// is precisely the tier where a wrong number costs credibility. So each
// programme states what it is built around, and the number follows the brief.
//
// ACCURACY NOTE FOR WHOEVER MAINTAINS THIS
// Everything listed below is genuinely arrangeable at the top of the Egyptian
// market — a named site can be reserved for a single party and closed to other
// visitors while they are inside it, which is a real and permitted arrangement
// (it is NOT "after hours"; the correction matters). Dahabiya full charter,
// private domestic aircraft, VIP airport
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
    kicker: "Sites reserved for your party alone, with nobody else admitted",
    duration: "5 days / 4 nights",
    route: "Cairo · Giza · Saqqara · Dahshur",
    body:
      "The pyramids are extraordinary and the plateau with four hundred other " +
      "people on it is not. This programme is built on exclusivity rather than " +
      "timing: named sites are reserved for your party and closed to everyone else " +
      "while you are inside them. A chamber, a temple, a gallery — booked, and " +
      "yours alone. What changes is not the monuments. It is that nobody else is " +
      "standing in them.",
    includes: [
      "Named sites booked exclusively — closed to other visitors while you are there",
      "A reserved gallery at the Grand Egyptian Museum, walked with a curator",
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
      "The Valley of the Kings at opening, and a tomb held for your party alone",
      "A private balloon basket over the west bank — not a shared one",
      "Tombs that are not on the standard ticket, opened for you",
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

/**
 * The direct answer, written to be lifted out of the page and quoted with no
 * surrounding context — 40-60 words, the ruling in the first sentence, the
 * subject restated rather than pronouned. See components/aeo/AnswerBox.
 */
export const VIP_QUESTION = "Can you arrange a private VIP tour of Egypt for a head of state or a royal household?";
export const VIP_ANSWER =
  "Yes. Kemet arranges private VIP travel in Egypt for heads of state and their " +
  "delegations, royal households, and ultra-high-net-worth families. Named sites " +
  "can be reserved for one party and closed to other visitors, movement is by " +
  "private aircraft and full dahabiya charter, and arrangements are coordinated " +
  "with the principal's own security team. No prices are published; each " +
  "programme is quoted per brief.";

/**
 * The questions this clientele actually asks before they will engage — not the
 * questions a leisure traveller asks. Each is answered plainly and none
 * promises anything the business would have to improvise.
 */
export const vipFaqs: Array<{ q: string; a: string }> = [
  {
    q: "Can Kemet arrange travel for a head of state, a royal household or a diplomatic delegation?",
    a: "Yes. Programmes at this tier are designed for heads of state and their delegations, royal households, government and diplomatic parties, and ultra-high-net-worth families. Planning starts from the protocol and privacy requirements rather than from an itinerary, because those requirements decide what the itinerary can be. Enquiries are handled by one person and are not discussed outside the team delivering the journey.",
  },
  {
    q: "Can a monument or museum gallery be closed to other visitors for our party?",
    a: "Named sites can be reserved for a single party and closed to other visitors for the duration of the visit. This is a permitted arrangement in Egypt, granted case by case by the antiquities authorities, and it needs lead time — typically four to eight weeks, longer in peak season. It is not the same as an after-hours opening, and we will tell you before you commit which specific sites can be secured for your dates rather than promising a category.",
  },
  {
    q: "Do you work with our own security detail?",
    a: "Yes, and it is the normal way we operate at this level. Kemet does not supply protection; we coordinate with the principal's own detail and with the Egyptian authorities on routing, timings, site access, vehicle arrangements and advance reconnaissance. Your team sets the security requirement and we build the programme inside it, rather than presenting an itinerary and asking them to make it work.",
  },
  {
    q: "Will you sign a non-disclosure agreement?",
    a: "Yes, on request and as a matter of course at this tier. Nothing about a client's identity, dates, routing or party is discussed outside the people delivering the journey, and no VIP itinerary is used as a reference, a case study or marketing material. If your office prefers its own form of agreement, we will work to it.",
  },
  {
    q: "Can we arrive by private jet, and is VIP terminal handling arranged?",
    a: "Yes. Private and government aircraft arrivals are handled through the VIP terminal with meet-and-greet at the aircraft door, immigration and customs cleared away from the public halls, and vehicles positioned airside where permitted. Internal movement between Cairo, Luxor, Aswan and Abu Simbel is by private aircraft on your hours rather than on a schedule.",
  },
  {
    q: "Why are there no prices on this page?",
    a: "Because a published figure would be wrong for almost everyone reading it. A dahabiya charter, a private aircraft leg and an exclusive site reservation are each quoted by date, by party size and by what is genuinely available that week. You receive a written outline first, a figure second, and nothing is committed until both are agreed.",
  },
  {
    q: "Who will we actually deal with?",
    a: "One person, from the first conversation to the last day in Egypt. The individual who designs the programme is the individual who answers while you are travelling — not a call centre, not a rota, and not a number that stops answering once a deposit clears. Where a family office, private secretary or executive assistant is managing the arrangements, they deal with the same person throughout.",
  },
  {
    q: "How far in advance should this be arranged?",
    a: "For exclusive site reservations and full dahabiya charter, allow four to eight weeks as a minimum and considerably longer for the October-to-April season, which is when both are most contested. Shorter notice is sometimes possible; what changes is which elements can be secured, and we will say plainly which ones can and cannot rather than accepting a booking we cannot deliver in full.",
  },
];
