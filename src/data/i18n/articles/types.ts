// ---------------------------------------------------------------------------
// A translated occasion or guide page — the words only, in one generic shape:
// a lede, titled sections (paragraphs and/or a list), an optional highlights
// panel and optional key facts, and questions. ./build.ts makes the page.
// ---------------------------------------------------------------------------
export interface ArtText {
  kind: "occasion" | "guide";
  /** The English page's slug, unchanged. */
  id: string;
  localeSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  title: string;
  summary: string;
  lede: string;
  facts: Array<{ label: string; value: string }>;
  /** `body` may hold several paragraphs, separated by a blank line. */
  sections: Array<{ title: string; body: string; items: string[] }>;
  highlights: { heading: string; items: string[] } | null;
  faqs: Array<{ q: string; a: string }>;
}
export interface ArtLabels {
  /** Enquiry block; %s is the page's title. */
  ctaHeading: string; ctaText: string; whatsapp: string; emailSubject: string;
  moreLabel: string; moreText: string;
}
