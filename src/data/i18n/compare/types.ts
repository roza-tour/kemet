// ---------------------------------------------------------------------------
// A translated comparison page ("Sharm El Sheikh or Hurghada?") — the words
// only. ./build.ts turns it into a page for the translated-article template;
// the side-by-side table becomes a list, one line per aspect.
// ---------------------------------------------------------------------------
export interface CompText {
  id: string;
  localeSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  title: string;
  optionA: string;
  optionB: string;
  shortSummary: string;
  verdict: string;
  lede: string;
  rows: Array<{ aspect: string; a: string; b: string }>;
  chooseA: { heading: string; points: string[] };
  chooseB: { heading: string; points: string[] };
  sections: Array<{ title: string; body: string }>;
  faqs: Array<{ q: string; a: string }>;
}
export interface CompLabels {
  verdict: string; sideBySide: string;
  /** Enquiry block; %s is the page's title. */
  ctaHeading: string; ctaText: string; whatsapp: string; emailSubject: string;
  moreLabel: string; moreText: string;
}
