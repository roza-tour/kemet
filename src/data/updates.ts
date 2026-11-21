// Egypt travel updates — the dated page at /egypt-travel-updates.html.
//
// WHAT THIS IS
// The one page on the site whose value is that it is CURRENT: what has
// changed for a visitor this season, each entry with the date it was last
// checked and, where one exists, the official place to check it again.
// Guides explain; this page reports.
//
// THE RULES FOR AN ENTRY
//   · Only something a traveller can act on: a rule, an opening, a closure,
//     a fee, a date.
//   · `checked` is the day the fact was last verified, never the build date.
//     An entry nobody has re-checked keeps its old date and says so.
//   · A figure goes in only when the official source and the published
//     reports agree. Where they do not (monument ticket prices changed
//     several times in 2026 and the Ministry's own pages disagreed with its
//     booking portal), the entry says where to read the figure for the day
//     of the visit and does not print one.
//   · `official` is the body that sets the rule, never a blog or a reseller.
//   · Nothing here is signed by the reviewer on the About page: these were
//     checked against sources, not read by her as a passage, so the page
//     carries no "checked by" line and its schema no reviewedBy.
//
// REVISING IT
// Once a month: re-check every entry, move `checked` on the ones that still
// hold, rewrite or remove the ones that do not, add what is new, then set
// UPDATES_CHECKED and UPDATES_EDITION. An entry that has stopped being news
// (a rule everyone now knows) moves into the relevant guide and leaves here.

/** The day the whole page was last gone through. */
export const UPDATES_CHECKED = "2026-11-21";
/** The edition named in the title and the heading. */
export const UPDATES_EDITION = "November 2026";

export type UpdateGroup = "sites" | "entry" | "hotels" | "dates";

export interface TravelUpdate {
  id: string;
  group: UpdateGroup;
  /** One or two words: Open, Closed, Changed, Ahead. */
  status: "Open" | "Closed" | "Changed" | "Ahead";
  title: string;
  body: string;
  /** What it means on the day, in one sentence. */
  practical: string;
  /** ISO date (or year-month) this entry was last verified. */
  checked: string;
  /** The body that sets the rule, for a reader who wants to re-check. */
  official?: { label: string; url: string };
  /** A page on this site that goes further. */
  more?: { label: string; href: string };
}

export const UPDATE_GROUPS: { id: UpdateGroup; eyebrow: string; title: string; text: string }[] = [
  {
    id: "sites",
    eyebrow: "Museums & sites",
    title: "At the monuments",
    text: "What has changed about getting in, and what is open that was not.",
  },
  {
    id: "entry",
    eyebrow: "Entry",
    title: "Visas and arrival",
    text: "Fees move more often than guidebooks are reprinted. These are the current ones, with the date they were read.",
  },
  {
    id: "hotels",
    eyebrow: "Hotels",
    title: "Landmark hotels this season",
    text: "Two of Upper Egypt's historic hotels are under restoration, and it changes where a journey sleeps.",
  },
  {
    id: "dates",
    eyebrow: "Dates ahead",
    title: "On the calendar for 2027",
    text: "Fixed and expected dates that shape a journey planned now.",
  },
];

export const TRAVEL_UPDATES: TravelUpdate[] = [
  {
    id: "gem-tickets",
    group: "sites",
    status: "Changed",
    title: "Grand Egyptian Museum: timed tickets, bought online",
    body:
      "The Grand Egyptian Museum sells tickets through its own ticketing site, for a dated entry slot. The galleries open from 9:00 to 18:00 on Sunday, Monday, Tuesday, Thursday and Friday, and from 9:00 to 21:00 on Wednesday and Saturday; last entry is one hour before the galleries close. A ticket is good for a single entry and is not transferable. The museum says it is not responsible for tickets bought on other platforms.",
    practical:
      "Book the slot before the day, and plan lunch inside the complex: once you leave, the ticket does not let you back in.",
    checked: "2026-11-21",
    official: { label: "Grand Egyptian Museum ticketing", url: "https://tickets.gem.eg/" },
    more: { label: "Egyptian Museum or the Grand Egyptian Museum?", href: "compare/egyptian-museum-vs-grand-egyptian-museum.html" },
  },
  {
    id: "ticket-prices",
    group: "sites",
    status: "Changed",
    title: "Monument ticket prices: read them for your date",
    body:
      "Entry prices for foreign visitors are set in Egyptian pounds and were revised more than once during 2026, including at the Grand Egyptian Museum at the start of November. Published figures for the same site currently disagree with one another, so this page prints none. The price that applies is the one shown by the official seller for the day of your visit. Tickets at the major sites and museums are paid by card; cash is no longer taken at the Pyramids, Karnak or the main museums.",
    practical:
      "Carry a Visa or Mastercard, and treat any price in a guidebook or a blog as a guide only. On a multi-day Kemet journey the site tickets are arranged for you.",
    checked: "2026-11-21",
    official: { label: "Ministry of Tourism and Antiquities", url: "https://egymonuments.gov.eg/" },
    more: { label: "What a journey costs", href: "egypt-tour-cost.html" },
  },
  {
    id: "giza-entrance",
    group: "sites",
    status: "Changed",
    title: "Giza plateau: one entrance, and buses inside",
    body:
      "Since 2025 visitors reach the Pyramids through the gate on the Fayoum road, south of the plateau, in place of the old entrance beside the Mena House. Cars and coaches stop at the visitor centre there, and hop-on, hop-off buses carry visitors between the stops on the plateau. Sellers and animal owners are kept to set areas.",
    practical:
      "Allow more time for the approach than older itineraries show. With a guide, the entry, the route between the stops and the exit are handled for you.",
    checked: "2026-11-21",
    more: { label: "Giza", href: "destinations/giza.html" },
  },
  {
    id: "amenhotep-iii",
    group: "sites",
    status: "Open",
    title: "Luxor: the tomb of Amenhotep III is open again",
    body:
      "The tomb of Amenhotep III in the Western Valley of the Kings reopened on 4 October 2025, after more than twenty years of conservation. It is one of the largest royal tombs on the West Bank and had been closed to visitors for a generation, so it is missing from most itineraries written before this season.",
    practical:
      "It sits apart from the main valley, so it needs its own place in a West Bank morning. Ask for it by name when the journey is planned.",
    checked: "2026-11-21",
    more: { label: "Luxor", href: "destinations/luxor.html" },
  },
  {
    id: "visa-fee",
    group: "entry",
    status: "Changed",
    title: "Tourist visa: USD 30 since spring 2026",
    body:
      "The single-entry tourist visa on arrival has cost USD 30 since 1 March 2026, up from USD 25. The single-entry e-visa was raised to the same USD 30 in late April 2026, and the multiple-entry e-visa to USD 65. A further change to visa charges from 1 January 2027 has been reported, but it is not yet in the published fee schedule. Whether you can take a visa on arrival at all depends on your nationality.",
    practical:
      "If you travel after 1 January 2027, read the fee on the e-visa portal or ask your nearest Egyptian consulate before you fly, and do not rely on a figure printed earlier, this one included.",
    checked: "2026-11-21",
    official: { label: "Egypt e-Visa portal", url: "https://visa2egypt.gov.eg/" },
    more: { label: "Egypt travel guide: visa and entry", href: "guides/egypt-travel-guide.html" },
  },
  {
    id: "winter-palace",
    group: "hotels",
    status: "Closed",
    title: "Luxor: the Winter Palace is closed until July 2027",
    body:
      "The Winter Palace, Luxor's historic hotel on the East Bank, closed in early 2026 for a complete restoration. It is due to reopen in July 2027 as the Mandarin Oriental Winter Palace, and cannot be booked for the 2026–27 season.",
    practical:
      "A Luxor stay this season is built on the West Bank or at another East Bank address; the guide below sets out which, and why.",
    checked: "2026-09",
    more: { label: "Where to stay in Egypt", href: "guides/where-to-stay-in-egypt.html" },
  },
  {
    id: "old-cataract",
    group: "hotels",
    status: "Open",
    title: "Aswan: the Old Cataract is open, Palace wing only",
    body:
      "The Old Cataract in Aswan has been under Mandarin Oriental management since May 2026 and is open. Guests stay in the historic Palace wing, the original building facing the Nile and Elephantine Island, while the newer Nile wing is renovated until July 2027.",
    practical:
      "Fewer rooms are on sale than in a normal season, so the Aswan nights are worth fixing early.",
    checked: "2026-09",
    more: { label: "Where to stay in Egypt", href: "guides/where-to-stay-in-egypt.html" },
  },
  {
    id: "ramadan-2027",
    group: "dates",
    status: "Ahead",
    title: "Ramadan 2027: expected 8 February to 8 March",
    body:
      "Ramadan follows the lunar calendar. In 2027 it is expected to begin on or about 8 February and end on or about 8 March, with Eid al-Fitr in the days that follow; the exact dates are confirmed in Egypt by the sighting of the moon. Many monuments and museums shorten their afternoon hours during the month.",
    practical:
      "Days start early and finish before the pre-iftar rush, and the evenings in old Cairo are the best of the year.",
    checked: "2026-11-21",
    more: { label: "Ramadan in Egypt", href: "collections/ramadan-in-egypt.html" },
  },
  {
    id: "abu-simbel-sun",
    group: "dates",
    status: "Ahead",
    title: "Abu Simbel: the sun alignment, 22 February 2027",
    body:
      "Twice a year, on 22 February and 22 October, the rising sun reaches the inner sanctuary of the Great Temple at Abu Simbel. Both mornings draw the largest crowds of the year to the temple, and entry on those two days is ticketed at a higher rate than on ordinary days.",
    practical:
      "Rooms near the temple and seats on the Aswan flights go first. Decide by the end of the year if you want to be there in February.",
    checked: "2026-11-21",
    more: { label: "Aswan and Abu Simbel", href: "destinations/aswan.html" },
  },
  {
    id: "eclipse-2027",
    group: "dates",
    status: "Ahead",
    title: "Total solar eclipse over Luxor: 2 August 2027",
    body:
      "On Monday 2 August 2027 the Moon covers the Sun over Luxor for about six minutes and 22 seconds, from about 13:02 to 13:08 local time. Luxor has a modest number of good rooms, and the nights around the eclipse are the most sought-after of its year.",
    practical:
      "Plan the stay first and the touring around it. August in Luxor is extremely hot, so the days are built around dawn and evening.",
    checked: "2026-10",
    more: { label: "The 2027 total solar eclipse in Luxor", href: "guides/total-solar-eclipse-2027-luxor.html" },
  },
];

export const UPDATES_ANSWER_Q = "What has changed for travellers to Egypt this season?";
export const UPDATES_ANSWER_A =
  "For the 2026–27 season in Egypt, Grand Egyptian Museum tickets are sold online for a dated slot, the tourist visa costs USD 30, and the Giza plateau is entered from the Fayoum road with buses inside. In Luxor the Winter Palace is closed until July 2027 and the tomb of Amenhotep III has reopened.";

export const UPDATES_FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need to book Grand Egyptian Museum tickets in advance?",
    a: "Yes. The Grand Egyptian Museum sells tickets through its own ticketing site for a dated entry slot, and says it is not responsible for tickets bought elsewhere. The galleries open at 9:00 and close at 18:00, or at 21:00 on Wednesday and Saturday, with last entry an hour before closing. A ticket allows one entry only.",
  },
  {
    q: "How much is the Egypt tourist visa?",
    a: "The single-entry tourist visa costs USD 30, on arrival since 1 March 2026 and as an e-visa since late April 2026; the multiple-entry e-visa costs USD 65. A further change from 1 January 2027 has been reported but not yet published in the official fee schedule, so check the e-visa portal before you travel.",
  },
  {
    q: "Is the Winter Palace in Luxor open?",
    a: "No. The Winter Palace closed in early 2026 for a complete restoration and is due to reopen in July 2027 as the Mandarin Oriental Winter Palace. It cannot be booked for the 2026–27 season. The Old Cataract in Aswan is open, with guests in the historic Palace wing while the Nile wing is renovated.",
  },
  {
    q: "When is Ramadan in 2027?",
    a: "Ramadan in 2027 is expected to run from about 8 February to about 8 March, with Eid al-Fitr in the days after. The dates are confirmed in Egypt by the sighting of the moon, so they can move by a day. Many monuments shorten their afternoon hours during the month.",
  },
  {
    q: "How often is this page updated?",
    a: "Once a month. Every entry carries the date it was last checked, and an entry that has not been re-checked keeps its older date. Where the official source and published reports disagree on a figure, the page says where to read it and does not print one.",
  },
];
