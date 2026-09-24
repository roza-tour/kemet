// ---------------------------------------------------------------------------
// Formatting helpers — pure, presentation-free value formatters.
// ---------------------------------------------------------------------------
import { CURRENCY_SYMBOL, NUMBER_LOCALE } from "@/config/site";

/** Format a whole-EUR amount, e.g. 1741 → "€1,741". */
export function formatPrice(amount: number): string {
  return CURRENCY_SYMBOL + amount.toLocaleString(NUMBER_LOCALE);
}

/**
 * The qualifying line under a published price: the party size it assumes and
 * whether entrance tickets sit outside it. Returns `undefined` when a tour
 * carries neither qualifier, so callers render nothing rather than an empty
 * element. `short` is the card variant — the same facts, fewer words.
 */
export function priceBasis(
  tour: { priceBasisPax?: number; ticketsExcluded?: boolean },
  short = false,
): string | undefined {
  const parts: string[] = [];
  if (tour.priceBasisPax) {
    parts.push(short ? `from ${tour.priceBasisPax} travellers` : `Based on a private party of ${tour.priceBasisPax} or more`);
  }
  if (tour.ticketsExcluded) {
    parts.push(short ? "tickets not included" : "entrance tickets not included");
  }
  if (parts.length === 0) return undefined;
  const line = parts.join(" · ");
  return short ? line : `${line[0].toUpperCase()}${line.slice(1)}.`;
}

/** Zero-pad a number to two digits, e.g. 3 → "03". */
export function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/**
 * Render an ISO date or year-month for a reader: "2026-07" → "July 2026",
 * "2026-07-27" → "27 July 2026". Anything unrecognised is returned unchanged
 * rather than guessed at — these values end up in <time> elements and in
 * structured data, so inventing precision would be worse than showing none.
 */
export function monthYear(iso: string): string {
  const m = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(iso.trim());
  if (!m) return iso;
  const [, year, month, day] = m;
  const name = MONTHS[Number(month) - 1];
  if (!name) return iso;
  return day ? `${Number(day)} ${name} ${year}` : `${name} ${year}`;
}

/**
 * The year this build was made.
 *
 * Nine page titles carried a hand-typed "2026" — "Is Egypt Safe to Visit in
 * 2026?", "How Much a Private Egypt Tour Costs (2026)" and their translations.
 * Those are exactly the searches where the year decides the click, and on
 * 1 January every one of them would have read a year out of date in the
 * results until somebody noticed. Stamping the build year instead means every
 * publish re-dates them, the same way the seasonal calendar rolls its windows.
 */
export const BUILD_YEAR = new Date().getUTCFullYear();

/**
 * The question a flight version answers, as a FAQ entry. Built in one place
 * because it is shown in the page's FAQ and emitted in its FAQPage schema, and
 * the two must say the same thing — schema whose answer differs from the page
 * is exactly what the FAQ rich-result rules exclude.
 */
type FlyTour = { title: string; price: number; flyOption?: { extra: number; replaces: string } };

/** Per-person "from" price of a journey's flight version, or undefined. */
export function flyPrice(tour: FlyTour): number | undefined {
  return tour.flyOption ? tour.price + tour.flyOption.extra : undefined;
}

export function flyFaq(tour: FlyTour) {
  if (!tour.flyOption) return undefined;
  return {
    q: "Can we fly instead of taking the sleeper train?",
    a: `Yes. ${tour.title} is also arranged with domestic flights in place of ${tour.flyOption.replaces}, ` +
       `with those nights in hotels instead — from ${formatPrice(flyPrice(tour)!)} per person. ` +
       `Ask for the flight version when you enquire.`,
  };
}

/**
 * The direct answer at the top of a journey page — what it is, where it goes,
 * what it costs and what it includes, in the 40-60 words the AnswerBox rules
 * ask for. Built from the journey's own data, so it cannot quote a price or an
 * inclusion the page itself does not state.
 */
export function tourAnswer(tour: {
  title: string; kind?: string; durationLabel: string; visiting: string; cities?: string[]; price: number;
  included: string[]; excluded: string[]; priceBasisPax?: number; ticketsExcluded?: boolean;
  flyOption?: { extra: number; replaces: string };
}): string {
  const list = (xs: string[]) => xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`;
  // A list whose items carry their own commas ("…the desert road, both ways")
  // needs semicolons between items, or the reader cannot see where one ends.
  const items = (xs: string[]) => xs.some((x) => /,| and /.test(x)) && xs.length > 2
    ? `${xs.slice(0, -1).join("; ")}; and ${xs.at(-1)}`
    : list(xs);
  // Lower-case the label's first letter for mid-sentence use — unless the first
  // word is a name ("Sinai desert evening", "Nubian village visit").
  const NAMES = /^(Sinai|Nile|Nubian|Egyptian|Egypt|Red|Bedouin|Aswan|Luxor|Cairo|Giza|Sufi|Alexandria|Abu|Karnak|Coptic|Islamic|Fayoum|Saqqara)\b/;
  const lower = (s: string) => NAMES.test(s) ? s : s.replace(/^([A-Z])(?=[a-z])/, (c) => c.toLowerCase());
  // Inclusions are written as labels ("Private Egyptologist guide throughout");
  // in a sentence the singular ones need their article back.
  const phrase = (s: string) => {
    const l = lower(s);
    return /^private [^,—]*\b(guide|egyptologist|historian|vehicle|car|driver|cabin|boat|dahabiya|transfer)\b/i.test(l) ? `a ${l}` : l;
  };
  const m = /(\d+)\s*Days?\s*\/\s*(\d+)\s*Nights?/i.exec(tour.durationLabel);
  // Places, not sights: "through Luxor", not "through Karnak, Luxor Temple and
  // West Bank" — the sights are listed on the page itself.
  const places = list(tour.cities?.length ? tour.cities : tour.visiting.split(/\s*·\s*/));
  const when = tour.durationLabel.replace(/\s*\(.*\)$/, "").replace(/^(Full|Half) day$/i, (x) => x.replace(" ", "-"));
  const lead = m
    ? `${tour.title} is a private ${m[1]}-day, ${m[2]}-night journey through ${places}, from ${formatPrice(tour.price)} per person.`
    : `${tour.title} is a private ${lower(when)} tour of ${places}, from ${formatPrice(tour.price)} per person${tour.priceBasisPax ? ` for a party of ${tour.priceBasisPax} or more` : ""}.`;
  const tickets = tour.ticketsExcluded ? " Entrance tickets are paid at the gate." : "";
  // Worth saying on a journey someone flies in for; noise on an afternoon in Giza.
  const flights = m && tour.excluded.some((x) => /international flights/i.test(x)) ? " International flights are not included." : "";
  const fly = tour.flyOption
    ? ` A flight version, in place of ${tour.flyOption.replaces}, is from ${formatPrice(tour.price + tour.flyOption.extra)}.`
    : "";
  const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
  // As many inclusions as fit under 60 words, never fewer than one.
  for (let k = Math.min(4, tour.included.length); k >= 1; k--) {
    const text = `${lead} It includes ${items(tour.included.slice(0, k).map(phrase))}.${tickets}${flights}${fly}`;
    if (words(text) <= 60 || k === 1) return text;
  }
  return lead;
}

/**
 * "How demanding is it?" — the comfort profile as a FAQ entry. Shown in the
 * page's FAQ and emitted in its FAQPage schema from this one function, so the
 * two cannot say different things.
 */
export function comfortFaq(tour: {
  title: string;
  comfort?: { walking: "Light" | "Moderate"; sleep: string; drives?: string; early?: string };
}) {
  const c = tour.comfort;
  if (!c) return undefined;
  const walk = c.walking === "Light"
    ? `The walking on ${tour.title} is light — it is a journey for resting.`
    : `The walking on ${tour.title} is moderate, as on any journey built around monuments.`;
  return {
    q: `How demanding is ${tour.title}?`,
    a: `${walk} Nights: ${c.sleep}. ${c.drives ? `By road: ${c.drives}.` : "There are no long drives."} ` +
       `${c.early ? `Early starts: ${c.early}.` : "There are no pre-dawn starts."}`,
  };
}
