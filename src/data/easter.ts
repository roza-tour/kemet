// ---------------------------------------------------------------------------
// Easter in Egypt — the dates, read from the computus, never typed.
//
// Egypt has two Easters. The Western date (Catholic and Protestant) is the
// one Europe and North America take their holidays around. The Orthodox date
// is the one the Coptic Orthodox Church keeps — Egypt's own Easter — and the
// same day Greek, Russian and other Orthodox churches keep. They coincide in
// some years (2028, 2031) and are up to five weeks apart in others.
//
// Sham El-Nessim, the spring festival the whole country spends outdoors, is
// always the Monday after the Orthodox date. Palm Sunday is the Sunday before.
//
// Everything here rolls forward on its own: the "next" Easter is the first one
// whose Sham El-Nessim has not yet passed on the day the site is built.
//
// Used by the English page (collections.ts → easter-in-egypt) and by its
// translations (data/i18n/easter.ts), each of which formats the dates in its
// own language with fmtDay().
// ---------------------------------------------------------------------------
import { westernEasterDay, orthodoxEasterDay } from "@/data/seasonalCalendar";

const DAY = 86_400_000;
/** An ISO day moved by `n` days. */
const shift = (iso: string, n: number) =>
  new Date(new Date(`${iso}T12:00:00Z`).getTime() + n * DAY).toISOString().slice(0, 10);

export interface EasterYear {
  year: number;
  /** Western Easter Sunday (Catholic and Protestant). */
  western: string;
  /** Orthodox and Coptic Easter Sunday. */
  orthodox: string;
  /** Coptic Palm Sunday, a week before the Orthodox date. */
  palm: string;
  /** Sham El-Nessim, the Monday after the Orthodox date. */
  sham: string;
  /** True when both churches keep Easter on the same Sunday. */
  same: boolean;
  /** Days between the two, 0 when they coincide. */
  gap: number;
}

export function easterYear(year: number): EasterYear {
  const western = westernEasterDay(year);
  const orthodox = orthodoxEasterDay(year);
  return {
    year, western, orthodox,
    palm: shift(orthodox, -7),
    sham: shift(orthodox, 1),
    same: western === orthodox,
    gap: Math.round((Date.parse(orthodox) - Date.parse(western)) / DAY),
  };
}

const TODAY = new Date().toISOString().slice(0, 10);
function nextYear(): number {
  let y = new Date().getUTCFullYear();
  while (easterYear(y).sham < TODAY) y++;
  return y;
}

/** The Easter season the pages talk about. */
export const EASTER_Y = nextYear();
export const EASTER = easterYear(EASTER_Y);
/** This season and the four after it, for the dates table. */
export const EASTER_YEARS: EasterYear[] = Array.from({ length: 5 }, (_, i) => easterYear(EASTER_Y + i));

/**
 * An ISO day in a language: fmtDay("2027-05-02", "de-DE") → "2. Mai 2027".
 * `opts` replaces the default day–month–year format.
 */
export const fmtDay = (
  iso: string,
  locale: string,
  opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" },
) => new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, { timeZone: "UTC", ...opts });
/** Day and month only: "2 May", "2. Mai". */
export const fmtDayMonth = (iso: string, locale: string) => fmtDay(iso, locale, { day: "numeric", month: "long" });
