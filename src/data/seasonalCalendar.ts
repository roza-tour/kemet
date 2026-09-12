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

/**
 * Easter, as the Western church dates it — Good Friday through Easter Monday.
 *
 * This replaces Sham El-Nessim, which was an Egyptian pharaonic festival rather
 * than a holiday this site's markets take time off for. Ten of the markets in
 * data/markets.ts are Western European and two North American: Easter is the
 * spring week they actually travel in, and the window is the long weekend, not
 * the Sunday alone.
 */
const easter = (friday: string, monday: string, sunday: string, alsoOrthodox: boolean): Occasion => ({
  theme: "spring", slug: "sham-el-nessim-egypt", label: "Easter in Egypt",
  note: alsoOrthodox
    ? "Easter Sunday is {dates}, Western and Orthodox together this year — the Nile valley at its best, and booked early."
    : "Easter Sunday is {dates} — spring on the Nile, warm days and cool evenings, and the long weekend most of Europe travels in.",
  from: friday, to: monday, dates: sunday, priority: 65,
});

/**
 * Orthodox Easter, in the years it falls apart from the Western date — by as
 * much as five weeks. It is on the calendar for two reasons at once: Russia and
 * Ukraine are in the market list, and it is the date Egypt's own Coptic church
 * keeps, so it is also what is happening on the ground. Emitted only when the
 * two Easters differ; when they coincide the single Easter window says so.
 */
const orthodoxEaster = (friday: string, monday: string, sunday: string): Occasion => ({
  theme: "spring", slug: "sham-el-nessim-egypt", label: "Orthodox Easter",
  note: "Orthodox and Coptic Easter falls on {dates} — Egypt's own Easter, and the spring weekend the country spends outdoors.",
  from: friday, to: monday, dates: sunday, priority: 62,
});

/**
 * US Thanksgiving — the fourth Thursday in November, and the week two North
 * American markets travel long-haul in. It lands in the best month of the
 * Egyptian year, which is the whole reason it is worth marking.
 */
const thanksgiving = (thursday: string, dates: string): Occasion => ({
  theme: "autumn", slug: "egypt-in-winter", label: "Thanksgiving week",
  note: "{dates} — the American long weekend, in the best month on the Nile. Book it a season ahead.",
  from: thursday, to: thursday, dates, priority: 45, href: "when-to-go.html",
});

/**
 * 14 February. On the calendar at low priority on purpose: it is a commercial
 * hook rather than an Egyptian occasion, so Ramadan, an Eid or the Abu Simbel
 * alignment all take the site back off it.
 */
const valentines = (y: number): Occasion => ({
  theme: "honeymoon", slug: "honeymoon-egypt", label: "Valentine's on the Nile",
  note: `14 February ${y} — a felucca at sunset and dinner on the water, in the best month of the year for it.`,
  from: `${y}-02-14`, to: `${y}-02-14`, dates: `14 February ${y}`, priority: 40,
});

/** Western Christmas through Coptic Christmas on 7 January. */
const christmas = (y: number): Occasion => ({
  theme: "christmas", slug: "christmas-new-year-egypt", label: "Christmas & New Year in Egypt",
  note: "Winter sun, New Year's Eve on the Nile, Coptic Christmas on 7 January.",
  from: `${y}-12-24`, to: `${y + 1}-01-07`, dates: `24 December ${y} – 7 January ${y + 1}`,
  priority: 60,
});

const occasions: Occasion[] = [
  // The holidays this site's markets actually take time off for — see
  // data/markets.ts: ten Western European, six Gulf, three Northern European,
  // two North American, plus Russia and Ukraine. Christmas and New Year,
  // Easter (both dates, in the years they differ), Thanksgiving, Valentine's,
  // Ramadan and the two Eids, and the one thing that is only in Egypt: the
  // sun reaching the sanctuary at Abu Simbel, twice a year.
  //
  // Deliberately absent: Egypt's national days (25 January, 25 April, 1 May,
  // 23 July, 6 October). They are real public holidays and they change what an
  // itinerary can do, but a political or military anniversary is not something
  // a travel brand should dress its pages in — that belongs in the planning
  // guides. Also absent: Black Friday. A discount weekend is the wrong signal
  // for a brand whose position is that it is not the cheapest.

  // ===== 2026 ==============================================================
  sunFestival(2026, 10),
  thanksgiving("2026-11-26", "26 November 2026"),
  christmas(2026),

  // ===== 2027 ==============================================================
  ramadan("2027-02-08", "2027-03-08", "8 February – 8 March 2027"),
  eidAlFitr("2027-03-09", "2027-03-11", "9–11 March 2027"),
  valentines(2027),
  sunFestival(2027, 2),
  easter("2027-03-26", "2027-03-29", "28 March 2027", false),
  orthodoxEaster("2027-04-30", "2027-05-03", "2 May 2027"),
  eidAlAdha("2027-05-16", "2027-05-19", "16–19 May 2027"),
  sunFestival(2027, 10),
  thanksgiving("2027-11-25", "25 November 2027"),
  christmas(2027),

  // ===== 2028 ==============================================================
  ramadan("2028-01-28", "2028-02-27", "28 January – 27 February 2028"),
  eidAlFitr("2028-02-28", "2028-03-01", "28 February – 1 March 2028"),
  valentines(2028),
  sunFestival(2028, 2),
  easter("2028-04-14", "2028-04-17", "16 April 2028", true),
  eidAlAdha("2028-05-05", "2028-05-08", "5–8 May 2028"),
  sunFestival(2028, 10),
  thanksgiving("2028-11-23", "23 November 2028"),
  christmas(2028),

  // ===== 2029 ==============================================================
  ramadan("2029-01-16", "2029-02-14", "16 January – 14 February 2029"),
  eidAlFitr("2029-02-15", "2029-02-17", "15–17 February 2029"),
  valentines(2029),
  sunFestival(2029, 2),
  easter("2029-03-30", "2029-04-02", "1 April 2029", false),
  orthodoxEaster("2029-04-06", "2029-04-09", "8 April 2029"),
  eidAlAdha("2029-04-25", "2029-04-28", "25–28 April 2029"),
  sunFestival(2029, 10),
  thanksgiving("2029-11-22", "22 November 2029"),
  christmas(2029),

  // ===== 2030 ==============================================================
  ramadan("2030-01-06", "2030-02-04", "6 January – 4 February 2030"),
  eidAlFitr("2030-02-05", "2030-02-07", "5–7 February 2030"),
  valentines(2030),
  sunFestival(2030, 2),
  eidAlAdha("2030-04-14", "2030-04-17", "14–17 April 2030"),
  easter("2030-04-19", "2030-04-22", "21 April 2030", false),
  orthodoxEaster("2030-04-26", "2030-04-29", "28 April 2030"),
  sunFestival(2030, 10),
  thanksgiving("2030-11-28", "28 November 2030"),
  christmas(2030),
  // Ramadan 1452 opens before the year is out.
  ramadan("2030-12-26", "2031-01-24", "26 December 2030 – 24 January 2031"),

  // ===== 2031 ==============================================================
  eidAlFitr("2031-01-25", "2031-01-27", "25–27 January 2031"),
  valentines(2031),
  sunFestival(2031, 2),
  eidAlAdha("2031-04-03", "2031-04-06", "3–6 April 2031"),
  easter("2031-04-11", "2031-04-14", "13 April 2031", true),
  sunFestival(2031, 10),
  thanksgiving("2031-11-27", "27 November 2031"),
  christmas(2031),
  ramadan("2031-12-15", "2032-01-13", "15 December 2031 – 13 January 2032"),

  // ===== 2032 ==============================================================
  eidAlFitr("2032-01-14", "2032-01-16", "14–16 January 2032"),
  valentines(2032),
  sunFestival(2032, 2),
  eidAlAdha("2032-03-22", "2032-03-25", "22–25 March 2032"),
  easter("2032-03-26", "2032-03-29", "28 March 2032", false),
  orthodoxEaster("2032-04-30", "2032-05-03", "2 May 2032"),
  sunFestival(2032, 10),
  thanksgiving("2032-11-25", "25 November 2032"),
  christmas(2032),
];

/** Both layers, sorted by start date so the file reads as a timeline. */
export const seasonalCalendar: SeasonalWindow[] = [
  ...Object.keys(SOLAR).map(Number).flatMap(baseSeasons),
  ...occasions.map(toWindow),
].sort((a, b) => (a.start < b.start ? -1 : a.start > b.start ? 1 : b.priority - a.priority));

/** The last date the calendar covers — used to warn when it needs extending. */
export const calendarCoverEnd =
  seasonalCalendar.map((w) => w.end).sort().slice(-1)[0] ?? "";
