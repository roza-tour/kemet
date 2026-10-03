// ---------------------------------------------------------------------------
// A journey, in another language.
//
// WHAT IS HERE AND WHAT IS NOT
// Only the prose. Everything a journey carries that is a NUMBER, a DATE, an
// IMAGE or a RELATIONSHIP stays in data/tours.ts and is shared by every
// language: the price, the party-size basis, the fly-option supplement, the
// photographs, the order on the hub. A translated journey that carried its own
// price would be the second place a price lives, and the two would drift.
//
// The repeated lines — "Private air-conditioned transfers" appears on 24 of
// the 25 journeys, "Tipping (gratuities)" on all 25 — are NOT here either.
// They live once per language in phrasebook.ts and are looked up by their
// English text, so translating them is 82 lines rather than 179 + 26 copies,
// and a wording change in one place changes every journey.
//
// WHY A SEPARATE REGISTRY FROM THE EIGHT FUNNEL PAGES
// config/translation-groups.json is all-or-nothing by design: a group must
// carry a route in every locale or the build fails, which is right for the
// eight pages the site promises in every language. The catalogue cannot work
// that way — 25 journeys × 9 languages is 225 pages and they will not all
// land on the same day. hreflang does not require them to: a cluster of
// English + German is perfectly valid as long as it is reciprocal and
// self-referential. config/tour-i18n.ts builds exactly that, from whatever
// translations exist.
// ---------------------------------------------------------------------------

export interface TourDayText {
  /** The day's heading. */
  title: string;
  /** What happens, one line each. Same count as the English day. */
  items: string[];
}

export interface TourText {
  /** The English journey this translates — must match a tours.ts slug. */
  slug: string;
  /** File name under /<locale>/, without ".html". */
  localeSlug: string;

  /** <title>, kept under ~60 characters including the brand. */
  metaTitle: string;
  /** <meta description>, under ~160 characters. */
  metaDescription: string;
  /** Comma-separated keywords in the target language. */
  keywords: string;
  /** Breadcrumb leaf, and the label this journey takes in menus. */
  crumb: string;

  title: string;
  subtitle: string;
  /** "10 Tage / 9 Nächte" — the shape differs per language, so it is written. */
  durationLabel: string;
  startPoint: string;
  summary: string;
  overview: string;

  /** One entry per day of the English itinerary, in the same order. */
  itinerary: TourDayText[];

  /**
   * Only the written parts of the comfort profile. `walking` is one of two
   * fixed values and comes from the phrasebook instead.
   */
  comfort?: { sleep?: string; early?: string; drives?: string };

  faqs: Array<{ q: string; a: string }>;
}
