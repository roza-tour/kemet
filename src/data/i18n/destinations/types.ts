// ---------------------------------------------------------------------------
// A destination, in another language.
//
// Only the words. Everything about a destination that is not prose — its
// region, its seasons, its photographs, its neighbours — stays in
// data/destinations.ts and is shared by every language; ./build.ts joins the
// two into the page the translated-article template renders.
// ---------------------------------------------------------------------------
export interface DestText {
  /** The English destination this translates — must match a destinations.ts id. */
  id: string;
  /** File name under /<locale>/, without ".html". */
  localeSlug: string;
  /** <title>, at most 65 characters including the brand. */
  metaTitle: string;
  /** <meta description>, at most 160 characters. */
  metaDescription: string;
  /** Comma-separated search phrases in the target language. */
  keywords: string;
  /** The place's name as this language writes it (the H1 and the breadcrumb). */
  name: string;
  /** One line under the name. */
  summary: string;
  /** The overview paragraph. */
  description: string;
  /** Recommended length of stay ("2–3 nights"). */
  stay: string;
  /** The climate in a sentence. */
  climate: string;
  /** Same number of entries as the English lists, in the same order. */
  whyVisit: string[];
  highlights: string[];
  thingsToKnow: string[];
  faqs: Array<{ q: string; a: string }>;
  /** Alt text and caption for each English photograph (hero first), same order. */
  photos: Array<{ alt: string; label: string }>;
}
