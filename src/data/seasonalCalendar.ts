// ---------------------------------------------------------------------------
// Seasonal calendar — the dated schedule that drives the site's seasonal skin.
// Nothing here is switched on by hand: a small runtime script reads this
// calendar, finds the highest-priority window containing today's date, and
// applies that theme site-wide (see SeasonalSkin.astro).
//
// TWO LAYERS, AND WHY
// The first version of this file had one layer, so every day of the year had
// to be covered by an *occasion* — which meant stretching them until they
// stopped being true. "Red Sea season" ran May to September and was still on
// the site in autumn; "Christmas & New Year" started on 24 October. An occasion
// was doing a season's job, and it read as a mistake because it was one.
//
//   · BASE SEASONS (priority 10) — spring, summer, autumn, winter. Generated,
//     continuous, and always exactly right for the date. They are what the site
//     wears on an ordinary day, and they are why a gap is now impossible.
//   · OCCASIONS (priority 50+) — Ramadan, the two Eids, Christmas & New Year,
//     the Abu Simbel sun alignment, Sham El-Nessim. Authored, and now cut to
//     the length of the actual event plus a few days of lead-in. When one ends
//     the site falls back to the season underneath it, not to nothing.
//
// ⚠️ ISLAMIC DATES ARE EXPECTED, NOT FIXED. Ramadan and the Eids depend on the
// sighting of the crescent moon and can shift by a day either way, so every
// window opens and closes with a few days of slack and the copy says "expected".
//
// TO EXTEND: add a year to BASE_YEARS, and add that year's occasions below.
// ---------------------------------------------------------------------------
import type { SeasonalTheme } from "@/types";

export interface SeasonalWindow {
  /** Visual identity to apply while this window is active. */
  theme: SeasonalTheme;
  /** Collection page this occasion links to. */
  slug: string;
  /** Short label shown in the seasonal ribbon and the nav chip. */
  label: string;
  /** One line shown beside the label — about THIS season or occasion. */
  note: string;
  /** Inclusive window, ISO `YYYY-MM-DD`, in which the skin is active. */
  start: string;
  end: string;
  /**
   * Higher wins when two windows overlap. Base seasons sit at 10 so any
   * occasion outranks them; dated one-off events outrank a religious month.
   */
  priority: number;
  /** The event's own date(s), for the ribbon copy. Optional. */
  eventDate?: string;
  /**
   * Route to link to, relative to the site root, when the destination is not a
   * collection page — e.g. the base seasons that point at "when to go".
   * Defaults to `collections/<slug>.html`.
   */
  href?: string;
}

// --- Layer 1: the four seasons, always on ----------------------------------
//
// Egypt's travel year, as it actually behaves rather than by the equinox:
// winter is the peak, summer empties the Nile valley and fills the Red Sea,
// and the season turns in the middle of September, not at the end of it.

const BASE_YEARS = [2026, 2027, 2028, 2029, 2030, 2031];

/** 29 February exists only in a leap year, and the window must not overrun. */
const febEnd = (y: number) => ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? "29" : "28");

function baseSeasons(y: number): SeasonalWindow[] {
  return [
    {
      theme: "winter", slug: "egypt-in-winter", label: "Winter in Egypt",
      note: "Peak season — clear skies, 22 °C on the Theban west bank, and the Nile at its best.",
      start: `${y}-01-01`, end: `${y}-02-${febEnd(y)}`, priority: 10,
    },
    {
      theme: "spring", slug: "sham-el-nessim-egypt", label: "Spring in Egypt",
      note: "Warm days, cool evenings, and the desert in flower before the summer heat arrives.",
      start: `${y}-03-01`, end: `${y}-05-31`, priority: 10,
      href: "when-to-go.html",
    },
    {
      theme: "summer", slug: "egypt-in-summer", label: "Summer in Egypt",
      note: "Luxor at its hottest, so the touring day starts at dawn — and the Red Sea is at its warmest.",
      start: `${y}-06-01`, end: `${y}-09-15`, priority: 10,
    },
    {
      theme: "autumn", slug: "egypt-in-winter", label: "Autumn in Egypt",
      note: "The heat breaks and the season reopens — the best light of the year on the Nile, before the winter crowds.",
      start: `${y}-09-16`, end: `${y}-11-30`, priority: 10,
      href: "when-to-go.html",
    },
    {
      theme: "winter", slug: "egypt-in-winter", label: "Winter in Egypt",
      note: "Peak season — clear skies, 22 °C on the Theban west bank, and the Nile at its best.",
      start: `${y}-12-01`, end: `${y}-12-31`, priority: 10,
    },
  ];
}

// --- Layer 2: the occasions, cut to the event ------------------------------

const RAMADAN = (start: string, end: string, dates: string, eventDate: string): SeasonalWindow => ({
  theme: "ramadan", slug: "ramadan-in-egypt", label: "Ramadan in Egypt",
  note: `Expected ${dates}. Islamic Cairo is lantern-lit until dawn.`,
  start, end, priority: 70, eventDate,
});

const EID_FITR = (start: string, end: string, dates: string): SeasonalWindow => ({
  theme: "eid", slug: "ramadan-in-egypt", label: "Eid al-Fitr",
  note: `Expected ${dates} — the feast that closes Ramadan; festive cities, quiet monuments.`,
  start, end, priority: 75, eventDate: dates,
});

const EID_ADHA = (start: string, end: string, dates: string): SeasonalWindow => ({
  theme: "eid", slug: "eid-al-adha-egypt", label: "Eid al-Adha",
  note: `Expected ${dates} — Egypt's biggest holiday; quiet monuments, festive cities.`,
  start, end, priority: 75, eventDate: dates,
});

const SUN_FESTIVAL = (start: string, end: string, eventDate: string, month: string): SeasonalWindow => ({
  theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
  note: `Sunrise reaches the inner sanctuary on 22 ${month}.`,
  start, end, priority: 80, eventDate,
});

const SHAM = (start: string, end: string, eventDate: string): SeasonalWindow => ({
  theme: "spring", slug: "sham-el-nessim-egypt", label: "Sham El-Nessim",
  note: `Egypt's spring festival falls on ${eventDate} — the whole country goes outdoors.`,
  start, end, priority: 65, eventDate,
});

const CHRISTMAS = (y: number): SeasonalWindow => ({
  theme: "christmas", slug: "christmas-new-year-egypt", label: "Christmas & New Year in Egypt",
  note: "Winter sun, New Year's Eve on the Nile, Coptic Christmas on 7 January.",
  start: `${y}-12-18`, end: `${y + 1}-01-08`, priority: 60,
});

const occasions: SeasonalWindow[] = [
  // ===== 2026 ==============================================================
  SUN_FESTIVAL("2026-10-17", "2026-10-24", "22 October 2026", "October"),
  CHRISTMAS(2026),

  // ===== 2027 ==============================================================
  // Ramadan 1448: expected 8 Feb – 8 Mar 2027, Eid al-Fitr ~9-11 Mar.
  RAMADAN("2027-02-05", "2027-03-08", "8 February – 8 March 2027", "8 Feb – 8 Mar 2027"),
  EID_FITR("2027-03-09", "2027-03-13", "9-11 March 2027"),
  SUN_FESTIVAL("2027-02-17", "2027-02-24", "22 February 2027", "February"),
  // Sham El-Nessim: Monday after Coptic Easter (2 May 2027) → 3 May 2027.
  SHAM("2027-04-28", "2027-05-08", "3 May 2027"),
  // Eid al-Adha 1448: expected 16-19 May 2027.
  EID_ADHA("2027-05-13", "2027-05-21", "16-19 May 2027"),
  SUN_FESTIVAL("2027-10-17", "2027-10-24", "22 October 2027", "October"),
  CHRISTMAS(2027),

  // ===== 2028 ==============================================================
  // Ramadan 1449: expected 28 Jan – 27 Feb 2028, Eid al-Fitr ~28 Feb – 1 Mar.
  RAMADAN("2028-01-25", "2028-02-27", "28 January – 27 February 2028", "28 Jan – 27 Feb 2028"),
  EID_FITR("2028-02-28", "2028-03-03", "28 February – 1 March 2028"),
  SUN_FESTIVAL("2028-02-17", "2028-02-24", "22 February 2028", "February"),
  // Coptic Easter 16 Apr 2028 → Sham El-Nessim 17 Apr 2028.
  SHAM("2028-04-12", "2028-04-22", "17 April 2028"),
  // Eid al-Adha 1449: expected 5-8 May 2028.
  EID_ADHA("2028-05-02", "2028-05-10", "5-8 May 2028"),
  SUN_FESTIVAL("2028-10-17", "2028-10-24", "22 October 2028", "October"),
  CHRISTMAS(2028),

  // ===== 2029 ==============================================================
  // Ramadan 1450: expected 16 Jan – 14 Feb 2029, Eid al-Fitr ~15-17 Feb.
  RAMADAN("2029-01-13", "2029-02-14", "16 January – 14 February 2029", "16 Jan – 14 Feb 2029"),
  EID_FITR("2029-02-15", "2029-02-19", "15-17 February 2029"),
  SUN_FESTIVAL("2029-02-17", "2029-02-24", "22 February 2029", "February"),
  // Coptic Easter 8 Apr 2029 → Sham El-Nessim 9 Apr 2029.
  SHAM("2029-04-04", "2029-04-14", "9 April 2029"),
  // Eid al-Adha 1450: expected 25-28 April 2029.
  EID_ADHA("2029-04-22", "2029-04-30", "25-28 April 2029"),
  SUN_FESTIVAL("2029-10-17", "2029-10-24", "22 October 2029", "October"),
  CHRISTMAS(2029),

  // ===== 2030 ==============================================================
  // Ramadan 1451: expected 6 Jan – 4 Feb 2030, Eid al-Fitr ~5-7 Feb.
  RAMADAN("2030-01-03", "2030-02-04", "6 January – 4 February 2030", "6 Jan – 4 Feb 2030"),
  EID_FITR("2030-02-05", "2030-02-09", "5-7 February 2030"),
  SUN_FESTIVAL("2030-02-17", "2030-02-24", "22 February 2030", "February"),
  // Coptic Easter 28 Apr 2030 → Sham El-Nessim 29 Apr 2030.
  SHAM("2030-04-24", "2030-05-04", "29 April 2030"),
  // Eid al-Adha 1451: expected 14-17 April 2030.
  EID_ADHA("2030-04-11", "2030-04-19", "14-17 April 2030"),
  SUN_FESTIVAL("2030-10-17", "2030-10-24", "22 October 2030", "October"),
  // Ramadan 1452 opens before the year ends: expected 26 Dec 2030 – 24 Jan 2031.
  CHRISTMAS(2030),
  RAMADAN("2030-12-23", "2031-01-24", "26 December 2030 – 24 January 2031", "26 Dec – 24 Jan"),

  // ===== 2031 ==============================================================
  EID_FITR("2031-01-25", "2031-01-29", "25-27 January 2031"),
  SUN_FESTIVAL("2031-02-17", "2031-02-24", "22 February 2031", "February"),
  SUN_FESTIVAL("2031-10-17", "2031-10-24", "22 October 2031", "October"),
  CHRISTMAS(2031),
];

/** Both layers, sorted by start date so the file reads as a timeline. */
export const seasonalCalendar: SeasonalWindow[] = [
  ...BASE_YEARS.flatMap(baseSeasons),
  ...occasions,
].sort((a, b) => (a.start < b.start ? -1 : a.start > b.start ? 1 : b.priority - a.priority));

/** The last date the calendar covers — used to warn when it needs extending. */
export const calendarCoverEnd =
  seasonalCalendar.map((w) => w.end).sort().slice(-1)[0] ?? "";
