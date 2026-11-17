// ---------------------------------------------------------------------------
// A translated experience or activity page — the words only.
//
// The English pages are built from data/experiences.ts and data/activities.ts,
// which also hold everything that is not prose (region, seasons, photographs,
// what is related to what). A translation carries the prose and nothing else;
// ./build.ts joins the two into the page the translated-article template
// renders, so a fact changed in the English data changes in every language.
//
// One shape serves both catalogues. Where a field belongs to only one of them
// it is left empty in the other ("" or []), never omitted — an empty section
// is simply not printed.
// ---------------------------------------------------------------------------
export interface ExpText {
  /** Which English catalogue the page belongs to. */
  kind: "experience" | "activity";
  /** The English page's slug, unchanged. */
  id: string;
  /** File name under /<locale>/, without ".html". */
  localeSlug: string;

  /** <title>, at most 65 characters including the brand. */
  metaTitle: string;
  /** <meta description>, at most 160 characters. */
  metaDescription: string;
  /** Comma-separated search phrases in the target language. */
  keywords: string;

  /** The page's H1 and its label in menus and breadcrumbs. */
  name: string;
  /** One or two sentences under the H1. */
  summary: string;
  /** The opening description. */
  description: string;

  /** How long it takes, as the English states it. */
  duration: string;
  /** Where it happens. */
  where: string;
  /** Activities: the best time for it. Experiences: "". */
  bestTime: string;

  /** Experiences: the highlights. Activities: what to expect, step by step. */
  highlights: string[];
  /** Experiences: the "at a glance" pairs. Activities: []. */
  keyFacts: Array<{ label: string; value: string }>;
  /** Experiences only. */
  included: string[];
  excluded: string[];
  /** Experiences: how to prepare. */
  prepare: string[];
  /** Experiences: good to know. Activities: the practicalities. */
  goodToKnow: string[];
  /** Activities: who it suits. */
  goodFor: string[];
  /** Experiences: the four short notes — where you are met, who is in the
   *  party, when it runs, how it is priced. Activities: all "". */
  meetingPoint: string;
  groupSize: string;
  availability: string;
  priceNote: string;

  faqs: Array<{ q: string; a: string }>;
  /** One caption per English photograph, in the same order. */
  photos: Array<{ alt: string; label: string }>;
}
