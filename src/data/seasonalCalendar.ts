// ---------------------------------------------------------------------------
// Seasonal calendar — the dated schedule that drives the site's automatic
// seasonal skin. Nothing here is switched on by hand: a small runtime script
// reads this calendar, finds the window that contains today's date, and applies
// that occasion's theme site-wide (see SeasonalSkin.astro).
//
// WHY EXPLICIT DATES RATHER THAN RULES
// Ramadan follows the lunar Hijri calendar and Sham El-Nessim follows the
// Coptic Paschal calculation — neither can be derived from a simple month rule,
// so each occurrence is listed with its own dates.
//
// ⚠️ ISLAMIC DATES ARE EXPECTED, NOT FIXED. The start of Ramadan depends on the
// sighting of the crescent moon and can shift by a day either way. The windows
// below deliberately open weeks early and close a few days late, so a one-day
// shift never leaves the site showing the wrong season.
//
// TO EXTEND: add rows. Keep them sorted by `start`. Everything else follows.
// ---------------------------------------------------------------------------
import type { SeasonalTheme } from "@/types";

export interface SeasonalWindow {
  /** Visual identity to apply while this window is active. */
  theme: SeasonalTheme;
  /** Collection page this occasion links to. */
  slug: string;
  /** Short label shown in the seasonal ribbon. */
  label: string;
  /** One line shown beside the label. */
  note: string;
  /** Inclusive window, ISO `YYYY-MM-DD`, in which the skin is active. */
  start: string;
  end: string;
  /**
   * Higher wins when two windows overlap. Dated one-off events (a festival,
   * a religious month) outrank broad seasons.
   */
  priority: number;
  /** The event's own date(s), for the ribbon copy. Optional. */
  eventDate?: string;
}

export const seasonalCalendar: SeasonalWindow[] = [
  // ===== 2026 ==============================================================
  { theme: "red-sea", slug: "red-sea-egypt", label: "Red Sea season",
    note: "Warmest water of the year on the Sinai and Hurghada reefs.",
    start: "2026-05-01", end: "2026-09-30", priority: 20 },

  { theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: "Sunrise reaches the inner sanctuary on 22 October.",
    start: "2026-09-22", end: "2026-10-23", priority: 60, eventDate: "22 October 2026" },

  { theme: "christmas", slug: "christmas-new-year-egypt", label: "Christmas & New Year in Egypt",
    note: "Winter sun, New Year's Eve on the Nile, Coptic Christmas on 7 January.",
    start: "2026-10-24", end: "2027-01-08", priority: 50 },

  // ===== 2027 ==============================================================
  // Ramadan 1448: expected 8 Feb – 8 Mar 2027, Eid al-Fitr ~9 Mar (moon-sighting).
  { theme: "ramadan", slug: "ramadan-in-egypt", label: "Ramadan in Egypt",
    note: "Expected 8 February – 8 March 2027. Islamic Cairo is lantern-lit until dawn.",
    start: "2027-01-09", end: "2027-03-13", priority: 70, eventDate: "8 Feb – 8 Mar 2027" },

  { theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: "Sunrise reaches the inner sanctuary on 22 February.",
    start: "2027-02-14", end: "2027-02-23", priority: 80, eventDate: "22 February 2027" },

  // Sham El-Nessim: Monday after Coptic Easter (2 May 2027) → 3 May 2027.
  { theme: "spring", slug: "sham-el-nessim-egypt", label: "Sham El-Nessim",
    note: "Egypt's spring festival falls on 3 May 2027 — the whole country goes outdoors.",
    start: "2027-03-14", end: "2027-05-08", priority: 65, eventDate: "3 May 2027" },

  // Eid al-Adha 1448: expected 16-19 May 2027 (moon-sighting confirms).
  { theme: "eid", slug: "eid-al-adha-egypt", label: "Eid al-Adha",
    note: "Expected 16-19 May 2027 - Egypt's biggest holiday; quiet monuments, festive cities.",
    start: "2027-05-12", end: "2027-05-20", priority: 75, eventDate: "16-19 May 2027" },

  { theme: "red-sea", slug: "red-sea-egypt", label: "Red Sea season",
    note: "Warmest water of the year on the Sinai and Hurghada reefs.",
    start: "2027-05-09", end: "2027-09-21", priority: 20 },

  { theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: "Sunrise reaches the inner sanctuary on 22 October.",
    start: "2027-09-22", end: "2027-10-23", priority: 60, eventDate: "22 October 2027" },

  { theme: "christmas", slug: "christmas-new-year-egypt", label: "Christmas & New Year in Egypt",
    note: "Winter sun, New Year's Eve on the Nile, Coptic Christmas on 7 January.",
    start: "2027-10-24", end: "2028-01-08", priority: 50 },

  // ===== 2028 ==============================================================
  // Ramadan 1449: expected 28 Jan – 27 Feb 2028, Eid al-Fitr ~28 Feb.
  { theme: "ramadan", slug: "ramadan-in-egypt", label: "Ramadan in Egypt",
    note: "Expected 28 January – 27 February 2028. Islamic Cairo is lantern-lit until dawn.",
    start: "2028-01-09", end: "2028-03-03", priority: 70, eventDate: "28 Jan – 27 Feb 2028" },

  { theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: "Sunrise reaches the inner sanctuary on 22 February.",
    start: "2028-02-14", end: "2028-02-23", priority: 80, eventDate: "22 February 2028" },

  // Coptic Easter 16 Apr 2028 → Sham El-Nessim 17 Apr 2028.
  { theme: "spring", slug: "sham-el-nessim-egypt", label: "Sham El-Nessim",
    note: "Egypt's spring festival falls on 17 April 2028 — the whole country goes outdoors.",
    start: "2028-03-04", end: "2028-04-22", priority: 65, eventDate: "17 April 2028" },

  // Eid al-Adha 1449: expected 5-8 May 2028.
  { theme: "eid", slug: "eid-al-adha-egypt", label: "Eid al-Adha",
    note: "Expected 5-8 May 2028 - Egypt's biggest holiday; quiet monuments, festive cities.",
    start: "2028-05-01", end: "2028-05-09", priority: 75, eventDate: "5-8 May 2028" },

  { theme: "red-sea", slug: "red-sea-egypt", label: "Red Sea season",
    note: "Warmest water of the year on the Sinai and Hurghada reefs.",
    start: "2028-04-23", end: "2028-09-21", priority: 20 },

  { theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: "Sunrise reaches the inner sanctuary on 22 October.",
    start: "2028-09-22", end: "2028-10-23", priority: 60, eventDate: "22 October 2028" },

  { theme: "christmas", slug: "christmas-new-year-egypt", label: "Christmas & New Year in Egypt",
    note: "Winter sun, New Year's Eve on the Nile, Coptic Christmas on 7 January.",
    start: "2028-10-24", end: "2029-01-06", priority: 50 },

  // ===== 2029 ==============================================================
  // Ramadan 1450: expected 16 Jan – 14 Feb 2029, Eid al-Fitr ~15 Feb.
  { theme: "ramadan", slug: "ramadan-in-egypt", label: "Ramadan in Egypt",
    note: "Expected 16 January – 14 February 2029. Islamic Cairo is lantern-lit until dawn.",
    start: "2029-01-07", end: "2029-02-19", priority: 70, eventDate: "16 Jan – 14 Feb 2029" },

  { theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: "Sunrise reaches the inner sanctuary on 22 February.",
    start: "2029-02-20", end: "2029-02-23", priority: 80, eventDate: "22 February 2029" },

  // Coptic Easter 8 Apr 2029 → Sham El-Nessim 9 Apr 2029.
  { theme: "spring", slug: "sham-el-nessim-egypt", label: "Sham El-Nessim",
    note: "Egypt's spring festival falls on 9 April 2029 — the whole country goes outdoors.",
    start: "2029-02-24", end: "2029-04-14", priority: 65, eventDate: "9 April 2029" },

  { theme: "red-sea", slug: "red-sea-egypt", label: "Red Sea season",
    note: "Warmest water of the year on the Sinai and Hurghada reefs.",
    start: "2029-04-15", end: "2029-09-21", priority: 20 },

  { theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: "Sunrise reaches the inner sanctuary on 22 October.",
    start: "2029-09-22", end: "2029-10-23", priority: 60, eventDate: "22 October 2029" },

  { theme: "christmas", slug: "christmas-new-year-egypt", label: "Christmas & New Year in Egypt",
    note: "Winter sun, New Year's Eve on the Nile, Coptic Christmas on 7 January.",
    start: "2029-10-24", end: "2030-01-05", priority: 50 },

  // ===== 2030 ==============================================================
  // Ramadan 1451: expected 6 Jan – 4 Feb 2030, Eid al-Fitr ~5 Feb.
  { theme: "ramadan", slug: "ramadan-in-egypt", label: "Ramadan in Egypt",
    note: "Expected 6 January – 4 February 2030. Islamic Cairo is lantern-lit until dawn.",
    start: "2030-01-06", end: "2030-02-09", priority: 70, eventDate: "6 Jan – 4 Feb 2030" },

  { theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: "Sunrise reaches the inner sanctuary on 22 February.",
    start: "2030-02-14", end: "2030-02-23", priority: 80, eventDate: "22 February 2030" },

  // Coptic Easter 28 Apr 2030 → Sham El-Nessim 29 Apr 2030.
  { theme: "spring", slug: "sham-el-nessim-egypt", label: "Sham El-Nessim",
    note: "Egypt's spring festival falls on 29 April 2030 — the whole country goes outdoors.",
    start: "2030-02-24", end: "2030-05-04", priority: 65, eventDate: "29 April 2030" },

  { theme: "red-sea", slug: "red-sea-egypt", label: "Red Sea season",
    note: "Warmest water of the year on the Sinai and Hurghada reefs.",
    start: "2030-05-05", end: "2030-09-21", priority: 20 },

  { theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: "Sunrise reaches the inner sanctuary on 22 October.",
    start: "2030-09-22", end: "2030-10-23", priority: 60, eventDate: "22 October 2030" },

  { theme: "christmas", slug: "christmas-new-year-egypt", label: "Christmas & New Year in Egypt",
    note: "Winter sun, New Year's Eve on the Nile, Coptic Christmas on 7 January.",
    start: "2030-10-24", end: "2031-01-08", priority: 50 },
];

/** The last date the calendar covers — used to warn when it needs extending. */
export const calendarCoverEnd =
  seasonalCalendar.map((w) => w.end).sort().slice(-1)[0] ?? "";
