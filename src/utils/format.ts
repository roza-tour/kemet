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
