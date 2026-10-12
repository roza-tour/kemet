// ---------------------------------------------------------------------------
// Links that matter only until a date.
//
// The guide to the total solar eclipse of 2 August 2027 is placed by hand on
// the pages a traveller planning it passes through — Luxor, the three Luxor
// journeys, the guides on when to go and where to stay — because the
// automatic "related reading" picks rank it below the evergreen guides. Those
// placements are worth having only while the eclipse is ahead. Each is wrapped
// in beforeDate(), so the first build after the day drops them by itself; the
// guide stays in the guides hub as a record.
// ---------------------------------------------------------------------------

/** The day of the eclipse over Luxor. Placements show up to and including it. */
export const ECLIPSE_2027 = "2027-08-02";

/** `refs` while the build date is on or before `iso` (YYYY-MM-DD); after it, none. */
export function beforeDate<T>(iso: string, refs: T[]): T[] {
  return new Date().toISOString().slice(0, 10) <= iso ? refs : [];
}
