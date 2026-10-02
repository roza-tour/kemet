// ---------------------------------------------------------------------------
// THE CHRISTMAS & NEW YEAR LANDING LAYER — for European traffic, paid and
// organic, on the page that already owns the subject.
//
// WHY IT IS THIS PAGE AND NOT A NEW ONE
// collections/christmas-new-year-egypt.html already exists, is indexed, is the
// target the seasonal ribbon points at from 1 October (seasonalCalendar:
// XMAS_BOOKING), and is linked from four other collections. A second English
// page about Christmas in Egypt would compete with it for the same query,
// split the signal, and carry the ad spend on the weaker of the two. So this
// is a LAYER on that page: same URL, same canonical, same sitemap entry. The
// ad click gets the offer and the form above the fold; the organic visitor
// still gets every editorial section, below.
//
// WHY EVERY DATE AND NUMBER IS COMPUTED
// A landing page is the one page that cannot be written once. It names a year,
// it counts the weeks to a fixed date, and what it should honestly promise
// changes completely between nine months out and nine days out. All of that is
// derived here at build time:
//
//   · the season year rolls over after Coptic Christmas, not after 25 December
//   · the weeks remaining come from the clock
//   · WHAT IS SAID changes with them — five stages, from "nothing is gone yet"
//     to "this is late, and here is the honest alternative"
//   · temperatures and sea temperature are read from the month guide
//   · prices and durations from the journey catalogue
//   · the deposit, the balance and the cancellation tier that applies to a
//     booking made THIS close to departure come from the booking terms
//
// WHAT IT DELIBERATELY DOES NOT DO
// It does not claim availability it cannot know, invent a discount, or quote a
// holiday price. The catalogue prices are standard-season and the page says so
// — the 20 December – 5 January supplement is stated, not buried, because a
// traveller who discovers it in the quote is a traveller who stops replying.
// And when the dates are genuinely too close, the page says that too, and
// offers mid-January instead: same weather, materially lower price, from the
// month guide's own words. A landing page that sells a bad date once has
// bought one booking and lost the market.
// ---------------------------------------------------------------------------
import type { LandingPage } from "@/types";
import { tours } from "@/data/tours";
import { findMonth } from "@/data/months";
import { bookingTerms } from "@/data/booking";
import { formatPrice } from "@/utils/format";

// --- the clock --------------------------------------------------------------
const DAY = 86_400_000;
const now = new Date();
const THIS_YEAR = now.getUTCFullYear();

/**
 * The season year — the Y in "24 December Y – 7 January Y+1".
 *
 * It rolls over after COPTIC Christmas, not after Boxing Day: between 26
 * December and 7 January the festive window is still running in Egypt, and a
 * page that had already jumped to next December would be telling a traveller
 * who is standing in Old Cairo that the thing they came for is a year away.
 */
const SEASON_Y = now < new Date(Date.UTC(THIS_YEAR, 0, 8)) ? THIS_YEAR - 1 : THIS_YEAR;

const EVE = new Date(Date.UTC(SEASON_Y, 11, 24));
const NYE = new Date(Date.UTC(SEASON_Y, 11, 31));
const COPTIC = new Date(Date.UTC(SEASON_Y + 1, 0, 7));
/** The holiday-supplement window, from the collection's own planning notes. */
const PEAK_FROM = new Date(Date.UTC(SEASON_Y, 11, 20));
const PEAK_TO = new Date(Date.UTC(SEASON_Y + 1, 0, 5));
/** January eases from about the 12th — months.ts, January "watch for". */
const EASES = new Date(Date.UTC(SEASON_Y + 1, 0, 12));

/** Whole days from today to Christmas Eve. Negative once the window is running. */
const DAYS_OUT = Math.round((EVE.getTime() - now.getTime()) / DAY);
const WEEKS_OUT = Math.round(DAYS_OUT / 7);
const MONTHS_OUT = Math.round(DAYS_OUT / 30.44);

/** First letter down, for a sentence quoted into the middle of another. */
const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

const d = (x: Date) => x.toLocaleDateString("en-GB", { timeZone: "UTC", day: "numeric", month: "long" });
const dY = (x: Date) => x.toLocaleDateString("en-GB", { timeZone: "UTC", day: "numeric", month: "long", year: "numeric" });

// --- read, never typed ------------------------------------------------------
const dec = findMonth("december")!;
const jan = findMonth("january")!;

const JOURNEY_SLUGS = [
  "tour-10-day", // the cruise and the land itinerary together — the Christmas shape
  "tour-nile-cruise", // the New Year's Eve night itself
  "tour-7-day",
  "tour-grand-14day",
  "tour-cairo-vip-3day",
  "tour-luxor-3day",
];
const journeyTours = JOURNEY_SLUGS.map((s) => tours.find((t) => t.slug === s)!);
const FROM_PRICE = Math.min(...journeyTours.map((t) => t.price));

/**
 * The cancellation tier a booking made TODAY would fall under, read from the
 * booking terms rather than described loosely. Only shown when the dates are
 * close enough for it to be the thing a traveller most needs to know.
 */
const tierFor = (days: number) =>
  days >= 45 ? bookingTerms.cancellationTiers[0]
  : days >= 30 ? bookingTerms.cancellationTiers[1]
  : days >= 15 ? bookingTerms.cancellationTiers[2]
  : bookingTerms.cancellationTiers[3];

// --- the booking window, in five honest states ------------------------------
// The thresholds come from what the site already says out loud: the collection
// puts the best cabins and Giza-view rooms at six to nine months, the December
// month guide at six to twelve. So: over nine months is early, four to nine is
// the right moment, under four months the shape of the trip starts being
// decided by what is left, and under six weeks it is genuinely late.
// NOTE: the "live" threshold also protects the "last" copy from saying
// "1 days out" — "last" only ever sees three days or more. Raise one and the
// other has to grow a plural.
type Stage = "early" | "prime" | "late" | "last" | "live";
const STAGE: Stage =
  DAYS_OUT <= 2 ? "live"
  : DAYS_OUT <= 45 ? "last"
  : DAYS_OUT <= 120 ? "late"
  : DAYS_OUT <= 275 ? "prime"
  : "early";

const DATES = `${dY(EVE)} – ${dY(COPTIC)}`;
const PEAK = `${d(PEAK_FROM)} to ${d(PEAK_TO)}`;
const TIER = tierFor(DAYS_OUT);

const WINDOWS: Record<Stage, LandingPage["window"]> = {
  early: {
    eyebrow: `About ${MONTHS_OUT} months out`,
    heading: "Nothing is gone yet — which is the whole advantage",
    body:
      `This is the earliest anyone sensibly plans ${SEASON_Y}'s festive fortnight, and it is the only point at which you choose rather than accept. The small dahabiyas, the Giza-facing rooms and the ${d(NYE)} sailings are all still open. Tell us the shape you want and we build it around the vessel, not the other way round.`,
    bullets: [
      `Christmas Eve falls on ${EVE.toLocaleDateString("en-GB", { timeZone: "UTC", weekday: "long" })} in ${SEASON_Y}`,
      `Book the Nile cruise first and the land days around its fixed departure day — that order matters more at Christmas than at any other time of year`,
      `${PEAK} carries a holiday supplement at every hotel and on every vessel; booking early does not remove it, but it does get you the room worth paying it for`,
    ],
  },
  prime: {
    eyebrow: `${MONTHS_OUT} months out`,
    heading: "This is the window the good boats are booked in",
    body:
      `Four to nine months is when ${SEASON_Y}'s festive fortnight is actually decided. The best-run vessels still have cabins and the landmark hotels still have their good rooms, but both are going, and the ${d(NYE)} sailing is always the first cabin to sell on any Egyptian itinerary. There is still room to design the trip properly; in two months there will be room to fit it around what is left.`,
    bullets: [
      `Christmas Eve falls on ${EVE.toLocaleDateString("en-GB", { timeZone: "UTC", weekday: "long" })} in ${SEASON_Y}`,
      `Domestic flights to Luxor and Aswan and the sleeper-train cabins fill as early as the hotels — they are booked at the same time, not afterwards`,
      `${PEAK} carries a holiday supplement at every hotel and on every vessel; we put it in the quote, itemised, before you commit to anything`,
    ],
  },
  late: {
    eyebrow: `${WEEKS_OUT} weeks out`,
    heading: "Late, but genuinely workable — here is what that means",
    body:
      `At ${WEEKS_OUT} weeks the honest position is this: the small dahabiyas and most Giza-facing rooms for ${PEAK} are gone, and the ${d(NYE)} sailings are close to it. What is still entirely possible is a very good ${SEASON_Y} Christmas built around what is actually free — and because we hold nothing in advance and quote from live availability, we can tell you within a day which of the journeys below can still be run on your dates, rather than taking the booking and finding out afterwards.`,
    bullets: [
      `Flexibility on the cruise departure day is worth more than flexibility on anything else at this range`,
      `If New Year's Eve on the river is the one non-negotiable, say so in the form — it changes what we look for first`,
      // The tier at this range is the mildest one, so it is stated as the
      // reassurance it actually is. The WARNING version of this line belongs
      // to the "last" stage below, where the tier genuinely bites — reading a
      // 45-days-out notice as a threat three months out is the kind of
      // manufactured urgency that gets a page distrusted.
      `${PEAK} carries a holiday supplement at every hotel and on every vessel, itemised in your quote; and ${bookingTerms.cancellationTiers[0].window.toLowerCase()}, cancelling costs the ${bookingTerms.cancellationTiers[0].charge.toLowerCase()}`,
    ],
  },
  last: {
    eyebrow: `${DAYS_OUT} days out`,
    heading: "This is late. We will say so, and then say what still works",
    body:
      `${DAYS_OUT} days before Christmas Eve, ${PEAK} is close to full and anything we can still arrange will be shaped by availability rather than by preference. We will look, and we will tell you plainly what is there. But the alternative deserves saying: from about ${d(EASES)} the same weather costs materially less — ${jan.temps.luxor} in Luxor, ${jan.temps.cairo} in Cairo, the same clear winter light, and the New Year pricing gone. If your dates can move two weeks, they should.`,
    bullets: [
      `Tell us in the form whether the dates are fixed or movable — it is the single most useful thing you can say at this range`,
      `Cancellation, on a booking confirmed this close: ${TIER.charge.toLowerCase()} (${TIER.window.toLowerCase()})`,
      `Mid-January instead: the first ten days are still ${jan.crowds.toLowerCase()} season at ${jan.prices.toLowerCase()} prices, and then it eases noticeably while the weather does not change at all`,
    ],
  },
  live: {
    eyebrow: "The window is running now",
    heading: `${DATES} — and then the best-value weeks of the winter`,
    body:
      `Egypt's festive season is under way: ${d(NYE)} on the river, and Coptic Christmas on ${d(COPTIC)}, when midnight liturgy at the Hanging Church in Old Cairo marks one of the oldest continuous Christmas observances anywhere. For travel, two things are true at once — these exact dates are effectively sold, and the fortnight that follows is one of the best-value stretches of the Egyptian year. From about ${d(EASES)} the New Year supplement comes off and the weather stays exactly as it is.`,
    bullets: [
      `Coptic Christmas on ${d(COPTIC)} — visitors are welcome; it is worship rather than a spectacle, so modest dress and an early arrival`,
      `From ${d(EASES)}: ${jan.temps.luxor} in Luxor and ${jan.temps.cairo} in Cairo, the same light, without the holiday supplement`,
      `For next Christmas — ${dY(new Date(Date.UTC(SEASON_Y + 1, 11, 24)))} — this is the earliest and best moment to start, and the only one at which you choose the vessel`,
    ],
  },
};

// --- the page ---------------------------------------------------------------
export const christmasLanding: LandingPage = {
  eyebrow: `${DATES} · private journeys`,
  h1: `Christmas & New Year in Egypt, ${SEASON_Y}`,
  standfirst:
    `Northern Europe is dark by four. Cairo is ${dec.temps.cairo} under a clear sky, Luxor and Aswan warmer still, every monument open on Christmas Day, and on ${d(NYE)} the Nile cruise fleet moors together for one of the more extraordinary New Year's Eves available anywhere. Three hours' flight from Rome, under five from London, and an hour's time difference. Private journeys only — your party, your Egyptologist, your pace.`,
  ctaLabel: "Plan these dates",

  // Values, not adjectives. Every one of these is read from the data above.
  facts: [
    { label: "Cairo, by day", value: dec.temps.cairo },
    { label: "Luxor & Aswan", value: `${dec.temps.luxor} · ${dec.temps.aswan}` },
    { label: "Red Sea water", value: dec.seaTemp },
    { label: "Christmas Day at the sites", value: "Normal hours" },
    { label: "From Europe", value: "3–5 hours, +1h" },
    { label: "Private journeys from", value: formatPrice(FROM_PRICE) },
  ],

  window: WINDOWS[STAGE],

  argument: [
    {
      heading: "25 December is a working day in Egypt — which is why it is worth being here",
      body:
        "Egypt is a majority-Muslim country, so Christmas Day is not a public holiday and nothing closes for it. Every site keeps its normal hours, and a Christmas morning at the Pyramids is an ordinary working morning on the plateau — no queue built by a holiday, no reduced opening, no closed museum. The festive part happens where you sleep: international hotels and every Nile vessel put on a full programme. You get the day, and the monuments, and neither interferes with the other.",
    },
    {
      heading: "New Year's Eve, moored with the fleet",
      body:
        `On ${d(NYE)} the cruise boats are generally tied up together at Luxor or Edfu, and each puts on a gala dinner with live music on the upper deck. You get the celebration without any of the logistics — no taxis, no queue, no getting home — and the temples the following morning before the crowds arrive. It is also the single most contested booking in Egyptian travel: on any itinerary, the New Year sailing is the first cabin to go.`,
    },
    {
      heading: `And then Egypt's own Christmas, on ${d(COPTIC)}`,
      body:
        "The Coptic Orthodox Church follows the older calendar, so the Nativity falls thirteen days after 25 December, with the main liturgy late on the evening of the 6th. Services at the Hanging Church and Abu Serga in Old Cairo — buildings in continuous use for well over a thousand years — are among the oldest Christmas observances on earth. Visitors are genuinely welcome. It is worship and not a spectacle, so modest dress and an early arrival matter, and your Egyptologist will take the lead.",
    },
    {
      heading: "What it costs, and why it costs more",
      body:
        `The prices on the journeys above are the catalogue's standard-season rates per person. ${PEAK} carries a holiday supplement at every hotel and on every vessel in the country — not a small one — and the quote we send you itemises it rather than folding it in. ${dec.prices === "Highest" ? "December is the most expensive month of the Egyptian year and we are not going to pretend otherwise." : ""} If the budget leads and the dates can move, the month guide's own verdict is worth reading: the first week of December, or the second half of January, gives you nearly the same weather for considerably less.`,
    },
  ],

  journeys: JOURNEY_SLUGS.map((id) => ({ domain: "tour" as const, id })),
  journeysIntro: {
    heading: "Journeys that work over the holiday",
    text:
      `Private, your party only, each one adaptable to your dates. Prices are per person in euros at standard-season rates; the ${PEAK} supplement is confirmed in your quote before anything is committed.`,
  },

  form: {
    // Naming the season is the right heading while it is still ahead; once it
    // is running, the enquiry in front of us is for mid-January or for next
    // December, and a heading naming dates that have started is wrong.
    heading: STAGE === "live"
      ? "Tell us your dates"
      : `Tell us your dates for ${SEASON_Y}–${String(SEASON_Y + 1).slice(2)}`,
    subtext:
      `We reply within one business day with what is actually available on those dates and an itemised quote. Free, and without obligation${STAGE === "late" || STAGE === "last" ? " — including, if that is the honest answer, telling you the dates no longer work" : ""}.`,
    datesPlaceholder: `e.g. ${d(PEAK_FROM)} – ${d(PEAK_TO)}, or flexible`,
    messagePlaceholder:
      "Party size, whether New Year's Eve on the Nile is the priority, and whether your dates can move.",
  },

  // Read from the booking terms, so the deposit and the balance on a landing
  // page can never drift from the ones on the booking page. Stitching one
  // sentence out of another needs the joins lowercased — a sentence reading
  // "the booking — It is applied" is a tell that nobody read the output.
  assurances: [
    bookingTerms.steps[0].body,
    `${bookingTerms.deposit.label} confirms the booking, and ${lower(bookingTerms.deposit.note.replace(/^Payable to confirm your booking\. /, ""))} Balance ${bookingTerms.balance.label.toLowerCase()}.`,
    `${bookingTerms.paymentMethods.map((m, i) => (i === 0 ? m : lower(m))).join(" or ")}. Priced per person in euros, itemised, with what is and is not included stated.`,
    "Your party only, with a private Egyptologist and a private vehicle throughout — no seat-in-coach, no joining a group at the gate.",
  ],

  // The same subject in two more European languages. These are not
  // translations of this page and carry no hreflang — they are separate
  // arguments written for Germany and Russia (see i18n/eu-holidays.ts), and
  // this is the page best placed to send a reader to the right one.
  otherLanguages: [
    { route: "de/weihnachten-in-aegypten.html", label: "Weihnachten in Ägypten", lang: "de" },
    { route: "ru/novyy-god-v-egipte.html", label: "Новый год в Египте", lang: "ru" },
  ],
};
