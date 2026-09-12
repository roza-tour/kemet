// ---------------------------------------------------------------------------
// Seasonal calendar — the dated schedule that drives the site's seasonal skin.
// Nothing here is switched on by hand: a small runtime script reads this
// calendar, finds the highest-priority window containing today's date, and
// applies that theme site-wide (see SeasonalSkin.astro).
//
// TWO LAYERS, AND WHY
// The first version had one layer, so every day of the year had to be covered
// by an *occasion* — which meant stretching them until they stopped being true.
// "Red Sea season" ran May to September and was still showing in autumn;
// "Christmas & New Year" started on 24 October. An occasion was doing a
// season's job, and it read as a mistake because it was one.
//
//   · BASE SEASONS (priority 10) — spring, summer, autumn, winter. Continuous
//     by construction, so a gap is impossible and nothing ever has to be
//     stretched again.
//   · OCCASIONS (priority 50+) — Ramadan, both Eids, Christmas & New Year, the
//     Abu Simbel alignment, Sham El-Nessim. Each declares the REAL dates of the
//     event; the window around it is derived, never hand-typed. When one ends
//     the site falls back to the season underneath it.
//
// WHERE THE SEASON DATES COME FROM
// The seasons turn on the equinoxes and solstices, which are astronomical
// events and move by up to two days from year to year — the September equinox
// falls on the 23rd in 2026 and the 22nd in 2028. These are not "1 March, 1
// June" placeholders and they are not remembered: every date in SOLAR below was
// computed with Meeus, *Astronomical Algorithms* ch. 27, and converted to Egypt
// local time (UTC+2, or UTC+3 under summer time, which is what June and
// September fall inside). Recompute rather than extrapolate when extending.
//
// ⚠️ ISLAMIC DATES ARE EXPECTED, NOT FIXED. Ramadan and the Eids depend on the
// sighting of the crescent moon and can shift by a day either way, so their
// windows carry a day of tail slack and the copy says "expected".
// ---------------------------------------------------------------------------
import type { SeasonalTheme } from "@/types";

export interface SeasonalWindow {
  /** Visual identity to apply while this window is active. */
  theme: SeasonalTheme;
  /** Collection page this window links to. */
  slug: string;
  /** Short label shown in the seasonal ribbon and the nav chip. */
  label: string;
  /** One line shown beside the label — about THIS season or occasion. */
  note: string;
  /** Inclusive window, ISO `YYYY-MM-DD`, in which the skin is active. */
  start: string;
  end: string;
  /**
   * Higher wins when two windows overlap. Base seasons sit at 10 so every
   * occasion outranks them; a dated one-off outranks a religious month.
   */
  priority: number;
  /** The event's own date(s), for the ribbon copy. Optional. */
  eventDate?: string;
  /**
   * Route to link to, relative to the site root, when the destination is not a
   * collection page. Defaults to `collections/<slug>.html`.
   */
  href?: string;
}

// --- Date arithmetic -------------------------------------------------------
// Plain UTC arithmetic on ISO strings: the calendar is compared as text against
// the visitor's local date, so nothing here needs a timezone of its own.

const iso = (d: Date) => d.toISOString().slice(0, 10);
const shift = (day: string, by: number) => {
  const d = new Date(`${day}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + by);
  return iso(d);
};
const dayBefore = (day: string) => shift(day, -1);

/**
 * How many days before an occasion the site starts dressing for it. One rule,
 * applied to every occasion, rather than a lead-in hand-typed thirty times and
 * quietly inconsistent between them.
 */
const PREP_DAYS = 3;

// --- Layer 1: the four seasons, on the real solar dates ---------------------

/**
 * Equinoxes and solstices in Egypt local time — see the header note. The order
 * is [March equinox, June solstice, September equinox, December solstice].
 */
const SOLAR: Record<number, [string, string, string, string]> = {
  2026: ["2026-03-20", "2026-06-21", "2026-09-23", "2026-12-21"],
  2027: ["2027-03-20", "2027-06-21", "2027-09-23", "2027-12-22"],
  2028: ["2028-03-20", "2028-06-20", "2028-09-22", "2028-12-21"],
  2029: ["2029-03-20", "2029-06-21", "2029-09-22", "2029-12-21"],
  2030: ["2030-03-20", "2030-06-21", "2030-09-23", "2030-12-21"],
  2031: ["2031-03-20", "2031-06-21", "2031-09-23", "2031-12-22"],
  2032: ["2032-03-20", "2032-06-20", "2032-09-22", "2032-12-21"],
};

const WINTER = {
  theme: "winter" as const, slug: "egypt-in-winter", label: "Winter in Egypt",
  note: "Peak season — clear skies, 22 °C on the Theban west bank, and the Nile at its best.",
};
const SPRING = {
  theme: "spring" as const, slug: "sham-el-nessim-egypt", label: "Spring in Egypt",
  note: "Warm days, cool evenings, and the desert in flower before the summer heat arrives.",
  href: "when-to-go.html",
};
const SUMMER = {
  theme: "summer" as const, slug: "egypt-in-summer", label: "Summer in Egypt",
  note: "Luxor at its hottest, so the touring day starts at dawn — and the Red Sea is at its warmest.",
};
const AUTUMN = {
  theme: "autumn" as const, slug: "egypt-in-winter", label: "Autumn in Egypt",
  note: "The heat breaks and the season reopens — the best light of the year on the Nile, before the winter crowds.",
  href: "when-to-go.html",
};

/**
 * The year's four seasons, bounded by that year's own solar dates. Winter
 * appears twice because it straddles New Year: the tail of the winter that
 * began at last December's solstice, and the one that begins at this one.
 */
function baseSeasons(y: number): SeasonalWindow[] {
  const [spring, summer, autumn, winter] = SOLAR[y];
  const prevWinter = SOLAR[y - 1]?.[3];
  const out: SeasonalWindow[] = [];

  // 1 January until the equinox belongs to the winter that started in December.
  // Only emitted when the previous year is on the calendar, so the first year
  // covered does not claim a winter whose solstice is not recorded here.
  if (prevWinter) out.push({ ...WINTER, start: `${y}-01-01`, end: dayBefore(spring), priority: 10 });

  out.push({ ...SPRING, start: spring, end: dayBefore(summer), priority: 10 });
  out.push({ ...SUMMER, start: summer, end: dayBefore(autumn), priority: 10 });
  out.push({ ...AUTUMN, start: autumn, end: dayBefore(winter), priority: 10 });
  out.push({ ...WINTER, start: winter, end: `${y}-12-31`, priority: 10 });
  return out;
}

// --- Layer 2: the occasions -------------------------------------------------
//
// Each declares the real dates of the event. The window is derived: PREP_DAYS
// before it opens, and — for the moon-sighting ones — a day of tail slack.

interface Occasion {
  theme: SeasonalTheme;
  slug: string;
  label: string;
  /** Note text; `{dates}` is replaced with the human-readable event dates. */
  note: string;
  /** First and last day of the event itself. */
  from: string;
  to: string;
  /** Human-readable event dates for the ribbon. */
  dates: string;
  priority: number;
  /** Islamic dates shift with the crescent — hold the skin a day longer. */
  moonSighted?: boolean;
  href?: string;
}

const toWindow = (o: Occasion): SeasonalWindow => ({
  theme: o.theme,
  slug: o.slug,
  label: o.label,
  note: o.note.replace("{dates}", o.dates),
  start: shift(o.from, -PREP_DAYS),
  end: o.moonSighted ? shift(o.to, 1) : o.to,
  priority: o.priority,
  eventDate: o.dates,
  ...(o.href ? { href: o.href } : {}),
});

const ramadan = (from: string, to: string, dates: string): Occasion => ({
  theme: "ramadan", slug: "ramadan-in-egypt", label: "Ramadan in Egypt",
  note: "Expected {dates}. Islamic Cairo is lantern-lit until dawn.",
  from, to, dates, priority: 70, moonSighted: true,
});

const eidAlFitr = (from: string, to: string, dates: string): Occasion => ({
  theme: "eid", slug: "ramadan-in-egypt", label: "Eid al-Fitr",
  note: "Expected {dates} — the feast that closes Ramadan; festive cities, quiet monuments.",
  from, to, dates, priority: 75, moonSighted: true,
});

const eidAlAdha = (from: string, to: string, dates: string): Occasion => ({
  theme: "eid", slug: "eid-al-adha-egypt", label: "Eid al-Adha",
  note: "Expected {dates} — Egypt's biggest holiday; quiet monuments, festive cities.",
  from, to, dates, priority: 75, moonSighted: true,
});

/** The sun reaches the inner sanctuary on 22 February and 22 October. */
const sunFestival = (y: number, month: 2 | 10): Occasion => {
  const mm = String(month).padStart(2, "0");
  const name = month === 2 ? "February" : "October";
  return {
    theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: `Sunrise reaches the inner sanctuary on 22 ${name}.`,
    from: `${y}-${mm}-22`, to: `${y}-${mm}-23`, dates: `22 ${name} ${y}`, priority: 80,
  };
};

/** The Monday after Coptic Easter — Egypt's spring festival, one day. */
const shamElNessim = (day: string, dates: string): Occasion => ({
  theme: "spring", slug: "sham-el-nessim-egypt", label: "Sham El-Nessim",
  note: "Egypt's spring festival falls on {dates} — the whole country goes outdoors.",
  from: day, to: day, dates, priority: 65,
});

/** Western Christmas through Coptic Christmas on 7 January. */
const christmas = (y: number): Occasion => ({
  theme: "christmas", slug: "christmas-new-year-egypt", label: "Christmas & New Year in Egypt",
  note: "Winter sun, New Year's Eve on the Nile, Coptic Christmas on 7 January.",
  from: `${y}-12-24`, to: `${y + 1}-01-07`, dates: `24 December ${y} – 7 January ${y + 1}`,
  priority: 60,
});

const occasions: Occasion[] = [
  // ===== 2026 ==============================================================
  sunFestival(2026, 10),
  christmas(2026),

  // ===== 2027 — Ramadan 1448 ===============================================
  ramadan("2027-02-08", "2027-03-08", "8 February – 8 March 2027"),
  eidAlFitr("2027-03-09", "2027-03-11", "9–11 March 2027"),
  sunFestival(2027, 2),
  // Coptic Easter 2 May 2027 → Sham El-Nessim 3 May 2027.
  shamElNessim("2027-05-03", "3 May 2027"),
  eidAlAdha("2027-05-16", "2027-05-19", "16–19 May 2027"),
  sunFestival(2027, 10),
  christmas(2027),

  // ===== 2028 — Ramadan 1449 ===============================================
  ramadan("2028-01-28", "2028-02-27", "28 January – 27 February 2028"),
  eidAlFitr("2028-02-28", "2028-03-01", "28 February – 1 March 2028"),
  sunFestival(2028, 2),
  // Coptic Easter 16 April 2028 → Sham El-Nessim 17 April 2028.
  shamElNessim("2028-04-17", "17 April 2028"),
  eidAlAdha("2028-05-05", "2028-05-08", "5–8 May 2028"),
  sunFestival(2028, 10),
  christmas(2028),

  // ===== 2029 — Ramadan 1450 ===============================================
  ramadan("2029-01-16", "2029-02-14", "16 January – 14 February 2029"),
  eidAlFitr("2029-02-15", "2029-02-17", "15–17 February 2029"),
  sunFestival(2029, 2),
  // Coptic Easter 8 April 2029 → Sham El-Nessim 9 April 2029.
  shamElNessim("2029-04-09", "9 April 2029"),
  eidAlAdha("2029-04-25", "2029-04-28", "25–28 April 2029"),
  sunFestival(2029, 10),
  christmas(2029),

  // ===== 2030 — Ramadan 1451 ===============================================
  ramadan("2030-01-06", "2030-02-04", "6 January – 4 February 2030"),
  eidAlFitr("2030-02-05", "2030-02-07", "5–7 February 2030"),
  sunFestival(2030, 2),
  // Coptic Easter 28 April 2030 → Sham El-Nessim 29 April 2030.
  shamElNessim("2030-04-29", "29 April 2030"),
  eidAlAdha("2030-04-14", "2030-04-17", "14–17 April 2030"),
  sunFestival(2030, 10),
  christmas(2030),
  // Ramadan 1452 opens before the year is out.
  ramadan("2030-12-26", "2031-01-24", "26 December 2030 – 24 January 2031"),

  // ===== 2031 ==============================================================
  eidAlFitr("2031-01-25", "2031-01-27", "25–27 January 2031"),
  sunFestival(2031, 2),
  sunFestival(2031, 10),
  christmas(2031),
];

/** Both layers, sorted by start date so the file reads as a timeline. */
export const seasonalCalendar: SeasonalWindow[] = [
  ...Object.keys(SOLAR).map(Number).flatMap(baseSeasons),
  ...occasions.map(toWindow),
].sort((a, b) => (a.start < b.start ? -1 : a.start > b.start ? 1 : b.priority - a.priority));

/** The last date the calendar covers — used to warn when it needs extending. */
export const calendarCoverEnd =
  seasonalCalendar.map((w) => w.end).sort().slice(-1)[0] ?? "";
