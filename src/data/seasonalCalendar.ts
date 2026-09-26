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
// WHERE THE DATES COME FROM
// The seasons are meteorological — see the note above layer 1. The occasions
// are each dated from the real event: Ramadan and the Eids from researched
// dates, Easter from the Gregorian computus and Orthodox Easter from the
// Julian one plus the 13-day offset (verified against the Coptic Easter dates
// this file already carried before it was trusted for the rest).
import type { SeasonalTheme } from "@/types";

/**
 * Every kind of window the calendar can produce. The wording for each lives in
 * src/data/i18n/seasons.ts, in all eight languages.
 */
export type SeasonKey =
  | "winter" | "spring" | "summer" | "autumn"
  | "ramadan" | "eid-fitr" | "eid-adha"
  | "easter" | "easter-both" | "orthodox-easter"
  | "sun-festival" | "thanksgiving" | "valentines" | "christmas" | "christmas-booking";

export interface SeasonalWindow {
  /**
   * Stable identifier for WHAT this window is, independent of its wording.
   *
   * The label and note are translated into eight languages (see
   * src/data/i18n/seasons.ts) and keying that off the English label would mean
   * a copy edit in one language silently dropping the other seven. This never
   * changes and is never shown to anyone.
   */
  key: SeasonKey;
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
  /**
   * The event's own dates. `eventDate` is the English rendering; `eventFrom`
   * and `eventTo` are the ISO values it was rendered from, kept so the ribbon
   * can format them in the reader's own language and calendar conventions
   * rather than showing "9–11 March 2027" to a German or Indonesian reader.
   */
  eventDate?: string;
  eventFrom?: string;
  eventTo?: string;
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

/**
 * How many days before an occasion the site starts dressing for it. One rule,
 * applied to every occasion, rather than a lead-in hand-typed thirty times and
 * quietly inconsistent between them.
 */
const PREP_DAYS = 3;

// --- Layer 1: the four seasons -------------------------------------------
//
// WHICH DEFINITION OF "SEASON"
// This was built on the equinoxes and solstices first, computed properly, and
// it was wrong in practice: it kept the site in summer until 23 September, when
// nobody in Egypt or in the markets this site sells to thinks September is
// summer. Astronomically right, experientially wrong — and the site is read by
// people, not by astronomers.
//
// It now uses the METEOROLOGICAL seasons: three whole months each, starting on
// 1 March, 1 June, 1 September and 1 December. That is the standard national
// weather services use for exactly this reason — it matches how a season is
// lived, it lines up with how travel is sold ("September departures"), and it
// never drifts, so a season starts on the same date every year.

// A ROLLING RANGE, NOT A HAND-TYPED LIST.
//
// This was [2026 … 2032]. Tested by faking the clock, the site's whole seasonal
// system went dark on 1 January 2033: no season on <html>, no chip in the nav,
// no ribbon, no palette. Nothing failed, nothing logged — the feature simply
// stopped existing, six years out, in a way nobody would have connected to a
// list in this file.
//
// The four seasons are fixed calendar dates. There is no reason to type them
// out. The range starts at the year the site is BUILT and runs twelve years
// forward, so every deploy pushes the horizon out again and it cannot expire
// while the site is being maintained. The occasions below still need entering
// by hand — Ramadan and Easter cannot be derived from a month number — but
// those degrade to a correct season rather than to nothing.
const BUILD_YEAR = new Date().getUTCFullYear();
const BASE_YEARS = Array.from({ length: 13 }, (_, i) => BUILD_YEAR + i);

const WINTER = {
  key: "winter" as const,
  theme: "winter" as const, slug: "egypt-in-winter", label: "Winter in Egypt",
  note: "Peak season — clear skies, 22 °C on the Theban west bank, and the Nile at its best.",
};
const SPRING = {
  key: "spring" as const,
  theme: "spring" as const, slug: "sham-el-nessim-egypt", label: "Spring in Egypt",
  note: "Warm days, cool evenings, and the desert in flower before the summer heat arrives.",
  href: "when-to-go.html",
};
const SUMMER = {
  key: "summer" as const,
  theme: "summer" as const, slug: "egypt-in-summer", label: "Summer in Egypt",
  note: "Luxor at its hottest, so the touring day starts at dawn — and the Red Sea is at its warmest.",
};
const AUTUMN = {
  key: "autumn" as const,
  theme: "autumn" as const, slug: "egypt-in-winter", label: "Autumn in Egypt",
  note: "The heat breaks and the season reopens — the best light of the year on the Nile, before the winter crowds.",
  href: "when-to-go.html",
};

/**
 * CHRISTMAS & NEW YEAR, WHILE IT CAN STILL BE BOOKED
 *
 * The Christmas occasion below dresses the site for the event itself, three
 * days before 24 December — correct for the event, and useless for selling
 * it: the best Nile cabins and Giza-view rooms for that fortnight are gone
 * six to nine months ahead, so by 21 December the ribbon was announcing a
 * week nobody could still book.
 *
 * This is the other half: from 1 October to 20 December the ribbon points at
 * the Christmas page with a line about booking, not about tinsel. It does NOT
 * put the site in Christmas colours in October — that was the mistake the
 * two-layer design removed ("Christmas & New Year started on 24 October") —
 * it keeps the season's own theme underneath (autumn, then winter) and only
 * changes what the ribbon says and where it leads. Priority 20: above the
 * base seasons, below every real occasion, so the Abu Simbel sun festival and
 * Thanksgiving still take their own days.
 */
const XMAS_BOOKING = {
  key: "christmas-booking" as const,
  slug: "christmas-new-year-egypt",
  label: "Christmas & New Year",
  note: "The first week of Egypt's year to sell out — the best Nile cabins and Giza-view rooms go first.",
};
function christmasBooking(y: number): SeasonalWindow[] {
  return [
    { ...XMAS_BOOKING, theme: "autumn", start: `${y}-10-01`, end: `${y}-11-30`, priority: 20 },
    { ...XMAS_BOOKING, theme: "winter", start: `${y}-12-01`, end: `${y}-12-20`, priority: 20 },
  ];
}

/**
 * The year's seasons. Winter appears twice because it straddles New Year: the
 * tail of the one that began last December, and the one that begins in this.
 */
function baseSeasons(y: number): SeasonalWindow[] {
  return [
    { ...WINTER, start: `${y}-01-01`, end: `${y}-02-${y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0) ? 29 : 28}`, priority: 10 },
    { ...SPRING, start: `${y}-03-01`, end: `${y}-05-31`, priority: 10 },
    { ...SUMMER, start: `${y}-06-01`, end: `${y}-08-31`, priority: 10 },
    { ...AUTUMN, start: `${y}-09-01`, end: `${y}-11-30`, priority: 10 },
    { ...WINTER, start: `${y}-12-01`, end: `${y}-12-31`, priority: 10 },
  ];
}

// --- Layer 2: the occasions -------------------------------------------------
//
// Each declares the real dates of the event. The window is derived: PREP_DAYS
// before it opens, and — for the moon-sighting ones — a day of tail slack.

interface Occasion {
  key: SeasonKey;
  theme: SeasonalTheme;
  slug: string;
  label: string;
  /** Note text; `{dates}` is replaced with the human-readable event dates. */
  note: string;
  /** First and last day of the event itself — this drives the WINDOW. */
  from: string;
  to: string;
  /**
   * The dates to SHOW, when they are narrower than the window. Easter's window
   * runs Good Friday to Easter Monday but the sentence says "Easter Sunday is
   * …", and the Abu Simbel alignment is one morning inside a two-day window.
   * Defaults to from/to. Getting this wrong is not cosmetic: the ribbon told
   * readers Easter Sunday was "26–29 March" when it is the 28th.
   */
  showFrom?: string;
  showTo?: string;
  /** Human-readable event dates for the ribbon (English fallback). */
  dates: string;
  priority: number;
  /** Islamic dates shift with the crescent — hold the skin a day longer. */
  moonSighted?: boolean;
  href?: string;
}

// --- Occasions that can be computed, and the ones that cannot ---------------
//
// Easter, Orthodox Easter, Thanksgiving, Valentine's, Christmas and the two Abu
// Simbel alignments are all deterministic. They were typed out by hand for
// 2026–2032 and then the calendar simply stopped, so from 2033 the site would
// have shown nothing but the four base seasons and nobody would have noticed
// until a Christmas went unmarked.
//
// The algorithms below were checked against all seventeen hand-typed dates in
// that range before the hand entries were removed — every Easter Sunday, every
// Orthodox Easter including the two years it coincides with the Western date
// (2028 and 2031, where the calendar correctly emitted no separate window),
// and every Thanksgiving. They agree exactly.
//
// Ramadan and the two Eids stay hand-entered. The Islamic calendar is
// observational — the month turns when the crescent is sighted — and a tabular
// approximation is wrong by a day often enough that it cannot be published as
// a date. Those run out after 2032, and after that the site falls back to a
// correct season rather than to nothing.

const pad2 = (n: number) => String(n).padStart(2, "0");

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2027-03-28" → "28 March 2027". */
const readable = (day: string): string => {
  const [y, m, d] = day.split("-").map(Number);
  return `${d} ${MONTH_NAMES[m - 1]} ${y}`;
};

/** Western Easter Sunday — the anonymous Gregorian computus. */
const westernEasterDay = (y: number): string => {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100;
  const d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return `${y}-${pad2(month)}-${pad2(day)}`;
};

/**
 * Orthodox and Coptic Easter Sunday — Meeus's Julian algorithm, then Julian to
 * Gregorian. The +13 day offset holds until 2100; the calendar's horizon is
 * thirteen years, so it will be someone else's problem long before it drifts.
 */
const orthodoxEasterDay = (y: number): string => {
  const a = y % 4, b = y % 7, c = y % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  const j = new Date(Date.UTC(y, month - 1, day));
  j.setUTCDate(j.getUTCDate() + 13);
  return iso(j);
};

/** US Thanksgiving — the fourth Thursday in November. */
const thanksgivingDay = (y: number): string => {
  const first = new Date(Date.UTC(y, 10, 1)).getUTCDay();   // 4 = Thursday
  return `${y}-11-${pad2(((11 - first) % 7) + 22)}`;
};

const toWindow = (o: Occasion): SeasonalWindow => ({
  key: o.key,
  theme: o.theme,
  slug: o.slug,
  label: o.label,
  note: o.note.replace("{dates}", o.dates),
  start: shift(o.from, -PREP_DAYS),
  end: o.moonSighted ? shift(o.to, 1) : o.to,
  priority: o.priority,
  eventDate: o.dates,
  eventFrom: o.showFrom ?? o.from,
  eventTo: o.showTo ?? o.to,
  ...(o.href ? { href: o.href } : {}),
});

const ramadan = (from: string, to: string, dates: string): Occasion => ({
  key: "ramadan",
  theme: "ramadan", slug: "ramadan-in-egypt", label: "Ramadan in Egypt",
  note: "Expected {dates}. Islamic Cairo is lantern-lit until dawn.",
  from, to, dates, priority: 70, moonSighted: true,
});

const eidAlFitr = (from: string, to: string, dates: string): Occasion => ({
  key: "eid-fitr",
  theme: "eid", slug: "ramadan-in-egypt", label: "Eid al-Fitr",
  note: "Expected {dates} — the feast that closes Ramadan; festive cities, quiet monuments.",
  from, to, dates, priority: 75, moonSighted: true,
});

const eidAlAdha = (from: string, to: string, dates: string): Occasion => ({
  key: "eid-adha",
  theme: "eid", slug: "eid-al-adha-egypt", label: "Eid al-Adha",
  note: "Expected {dates} — Egypt's biggest holiday; quiet monuments, festive cities.",
  from, to, dates, priority: 75, moonSighted: true,
});

/** The sun reaches the inner sanctuary on 22 February and 22 October. */
const sunFestival = (y: number, month: 2 | 10): Occasion => {
  const mm = String(month).padStart(2, "0");
  const name = month === 2 ? "February" : "October";
  return {
    key: "sun-festival",
    theme: "sun-festival", slug: "abu-simbel-sun-festival", label: "Abu Simbel Sun Festival",
    note: `Sunrise reaches the inner sanctuary on 22 ${name}.`,
    from: `${y}-${mm}-22`, to: `${y}-${mm}-23`,
    showFrom: `${y}-${mm}-22`, showTo: `${y}-${mm}-22`,
    dates: `22 ${name} ${y}`, priority: 80,
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
const easter = (y: number): Occasion => {
  const sunday = westernEasterDay(y);
  const alsoOrthodox = orthodoxEasterDay(y) === sunday;
  return { ...easterWindow(shift(sunday, -2), shift(sunday, 1), readable(sunday), alsoOrthodox),
           showFrom: sunday, showTo: sunday };
};
const easterWindow = (friday: string, monday: string, sunday: string, alsoOrthodox: boolean): Occasion => ({
  // Two keys, because the two readings are different sentences, not one
  // sentence with a variable in it: in the years the calendars coincide the
  // note says so, and that is the whole point of the distinction.
  key: alsoOrthodox ? "easter-both" : "easter",
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
const orthodoxEaster = (y: number): Occasion => {
  const sunday = orthodoxEasterDay(y);
  return { ...orthodoxWindow(shift(sunday, -2), shift(sunday, 1), readable(sunday)),
           showFrom: sunday, showTo: sunday };
};
const orthodoxWindow = (friday: string, monday: string, sunday: string): Occasion => ({
  key: "orthodox-easter",
  theme: "spring", slug: "sham-el-nessim-egypt", label: "Orthodox Easter",
  note: "Orthodox and Coptic Easter falls on {dates} — Egypt's own Easter, and the spring weekend the country spends outdoors.",
  from: friday, to: monday, dates: sunday, priority: 62,
});

/**
 * US Thanksgiving — the fourth Thursday in November, and the week two North
 * American markets travel long-haul in. It lands in the best month of the
 * Egyptian year, which is the whole reason it is worth marking.
 */
const thanksgiving = (y: number): Occasion => {
  const thu = thanksgivingDay(y);
  return thanksgivingWindow(thu, readable(thu));
};
const thanksgivingWindow = (thursday: string, dates: string): Occasion => ({
  key: "thanksgiving",
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
  key: "valentines",
  theme: "honeymoon", slug: "honeymoon-egypt", label: "Valentine's on the Nile",
  note: `14 February ${y} — a felucca at sunset and dinner on the water, in the best month of the year for it.`,
  from: `${y}-02-14`, to: `${y}-02-14`, dates: `14 February ${y}`, priority: 40,
});

/** Western Christmas through Coptic Christmas on 7 January. */
const christmas = (y: number): Occasion => ({
  key: "christmas",
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

  // ===== 2027 ==============================================================
  ramadan("2027-02-08", "2027-03-08", "8 February – 8 March 2027"),
  eidAlFitr("2027-03-09", "2027-03-11", "9–11 March 2027"),
  eidAlAdha("2027-05-16", "2027-05-19", "16–19 May 2027"),

  // ===== 2028 ==============================================================
  ramadan("2028-01-28", "2028-02-27", "28 January – 27 February 2028"),
  eidAlFitr("2028-02-28", "2028-03-01", "28 February – 1 March 2028"),
  eidAlAdha("2028-05-05", "2028-05-08", "5–8 May 2028"),

  // ===== 2029 ==============================================================
  ramadan("2029-01-16", "2029-02-14", "16 January – 14 February 2029"),
  eidAlFitr("2029-02-15", "2029-02-17", "15–17 February 2029"),
  eidAlAdha("2029-04-25", "2029-04-28", "25–28 April 2029"),

  // ===== 2030 ==============================================================
  ramadan("2030-01-06", "2030-02-04", "6 January – 4 February 2030"),
  eidAlFitr("2030-02-05", "2030-02-07", "5–7 February 2030"),
  eidAlAdha("2030-04-14", "2030-04-17", "14–17 April 2030"),
  // Ramadan 1452 opens before the year is out.
  ramadan("2030-12-26", "2031-01-24", "26 December 2030 – 24 January 2031"),

  // ===== 2031 ==============================================================
  eidAlFitr("2031-01-25", "2031-01-27", "25–27 January 2031"),
  eidAlAdha("2031-04-03", "2031-04-06", "3–6 April 2031"),
  ramadan("2031-12-15", "2032-01-13", "15 December 2031 – 13 January 2032"),

  // ===== 2032 ==============================================================
  eidAlFitr("2032-01-14", "2032-01-16", "14–16 January 2032"),
  eidAlAdha("2032-03-22", "2032-03-25", "22–25 March 2032"),
];

/**
 * The occasions that are the same arithmetic every year, generated for the
 * whole horizon instead of typed out. Orthodox Easter is emitted only in the
 * years it falls apart from the Western date; when they coincide, the single
 * Easter window says so itself.
 */
const computedOccasions = (y: number): Occasion[] => {
  const out: Occasion[] = [
    valentines(y),
    sunFestival(y, 2),
    easter(y),
    sunFestival(y, 10),
    thanksgiving(y),
    christmas(y),
  ];
  if (orthodoxEasterDay(y) !== westernEasterDay(y)) out.push(orthodoxEaster(y));
  return out;
};

/**
 * Both layers, sorted by start date so the file reads as a timeline.
 *
 * Windows that have already ended are dropped. Without this the file would
 * carry every Easter and Valentine's since the site was built — dead rows that
 * can never match, and noise in the seasonal dispatch on the desk, which reads
 * this same data to plan what to send.
 */
const TODAY = iso(new Date());

export const seasonalCalendar: SeasonalWindow[] = [
  ...BASE_YEARS.flatMap(baseSeasons),
  ...BASE_YEARS.flatMap(christmasBooking),
  ...occasions.map(toWindow),
  ...BASE_YEARS.flatMap(computedOccasions).map(toWindow),
]
  .filter((w) => w.end >= TODAY)
  .sort((a, b) => (a.start < b.start ? -1 : a.start > b.start ? 1 : b.priority - a.priority));

/** The last date the calendar covers at all. Rolls forward with every build. */
export const calendarCoverEnd =
  seasonalCalendar.map((w) => w.end).sort().slice(-1)[0] ?? "";

/**
 * The last date a hand-entered Islamic occasion covers.
 *
 * This is the one that can actually run out. Everything else in the calendar
 * is arithmetic and extends itself on every build; Ramadan and the two Eids
 * are observational and have to be typed in. When this date gets close, the
 * site does not break — it falls back to the correct base season — but Ramadan
 * stops being marked, which is a real loss on a site selling Egypt.
 *
 * `npm run audit:design` prints it and warns inside two years.
 */
export const islamicCoverEnd = occasions
  .filter((o) => /Ramadan|Eid/.test(o.label))
  .map((o) => o.to)
  .sort()
  .slice(-1)[0] ?? "";
