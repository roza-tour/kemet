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
