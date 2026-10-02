// ---------------------------------------------------------------------------
// The booking terms, as NUMBERS.
//
// data/booking.ts is the single source of truth for the deposit, the balance
// and the cancellation schedule — and it holds them as English sentences,
// which is right for the booking page and useless for any other language. A
// German landing page cannot quote "25% of the total trip cost" and it must
// not hard-code "25%" either, or the day somebody changes the deposit the two
// pages disagree and only one of them is true.
//
// So the figures are READ out of those sentences here, once, and every landing
// page — in any language — builds its own wording around the numbers.
//
// IF THE SENTENCES EVER CHANGE SHAPE, THIS THROWS AND THE BUILD FAILS. That is
// deliberate and it is the whole point: a silent fallback would publish a
// German page quoting a deposit that is no longer charged. A failed build is
// a five-minute fix; a wrong price in writing is not.
// ---------------------------------------------------------------------------
import { bookingTerms } from "@/data/booking";

function need<T>(value: T | null | undefined, what: string): T {
  if (value === null || value === undefined) {
    throw new Error(
      `landing/terms.ts: could not read ${what} out of data/booking.ts. ` +
      `The wording there has changed shape — update the patterns in this file ` +
      `so every landing page keeps quoting the real figure.`,
    );
  }
  return value;
}

const num = (s: string, re: RegExp, what: string) =>
  Number(need(re.exec(s)?.[1], what));

/** What a cancellation at a given range actually costs. */
export type Charge = { kind: "deposit" } | { kind: "percent"; percent: number };

export interface Tier {
  /** The fewest days before departure this tier still applies at. */
  minDays: number;
  /**
   * The most days before departure it applies at — one less than the next
   * tier up. Undefined on the most generous tier, which has no ceiling.
   *
   * Derived rather than parsed: data/booking.ts writes the bands as "30–44
   * days", and reading the 44 out of that would break the moment somebody
   * writes "30 to 44". The schedule is contiguous by construction, so the
   * ceiling is simply the next threshold minus a day — and a German page that
   * printed "ab 15 Tagen" for the 15-to-29 band would be telling a traveller
   * the 75% charge applies at four months out.
   */
  maxDays?: number;
  charge: Charge;
}

function parseCharge(s: string): Charge {
  if (/^deposit only/i.test(s)) return { kind: "deposit" };
  return { kind: "percent", percent: num(s, /^(\d+)\s*%/, `a cancellation charge from "${s}"`) };
}

function parseMinDays(s: string): number {
  // "Under 15 days before departure" is the last tier — it starts at zero.
  if (/^under\b/i.test(s)) return 0;
  return num(s, /(\d+)/, `a cancellation window from "${s}"`);
}

export const TERMS = {
  /** Percentage of the trip cost taken as the confirming deposit. */
  depositPercent: num(bookingTerms.deposit.label, /(\d+)\s*%/, "the deposit percentage"),
  /** Days before departure the balance falls due. */
  balanceDays: num(bookingTerms.balance.label, /(\d+)\s*days?/, "the balance due date"),
  /** Highest minDays first, so `tierAt` can take the first match. */
  tiers: bookingTerms.cancellationTiers
    .map((t): Tier => ({ minDays: parseMinDays(t.window), charge: parseCharge(t.charge) }))
    .sort((a, b) => b.minDays - a.minDays)
    .map((t, i, all): Tier => (i === 0 ? t : { ...t, maxDays: all[i - 1].minDays - 1 })),
};

/** The cancellation tier a booking confirmed `days` before departure falls in. */
export function tierAt(days: number): Tier {
  return TERMS.tiers.find((t) => days >= t.minDays) ?? TERMS.tiers[TERMS.tiers.length - 1];
}

// The schedule has to start at the most generous tier and end at zero, or
// `tierAt` would silently return the wrong row for some ranges. Checked here
// rather than assumed, for the same reason as everything else in this file.
if (TERMS.tiers.length === 0 || TERMS.tiers[TERMS.tiers.length - 1].minDays !== 0) {
  throw new Error(
    "landing/terms.ts: the cancellation schedule in data/booking.ts no longer " +
    "reaches zero days. Every landing page quotes a tier read from it, so the " +
    "last row must be the one that applies right up to departure.",
  );
}
