// ---------------------------------------------------------------------------
// Formatting helpers — pure, presentation-free value formatters.
// ---------------------------------------------------------------------------
import { CURRENCY_SYMBOL, NUMBER_LOCALE } from "@/config/site";

/** Format a whole-EUR amount, e.g. 1741 → "€1,741". */
export function formatPrice(amount: number): string {
  return CURRENCY_SYMBOL + amount.toLocaleString(NUMBER_LOCALE);
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
