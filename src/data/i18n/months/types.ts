// ---------------------------------------------------------------------------
// A translated month page ("Egypt in January") — the words only. Temperatures,
// crowd and price levels come from the English data (data/months.ts); the
// builder (./build.ts) prints them with this language's labels.
// ---------------------------------------------------------------------------
export interface MonthText {
  /** The English month's slug ("january"). */
  id: string;
  localeSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  /** The H1 — "Egypt in January" in this language. */
  title: string;
  /** The month's name alone, for links between months. */
  monthName: string;
  shortSummary: string;
  lede: string;
  goodFor: string[];
  watchFor: string[];
  occasions: string;
  verdict: string;
  faqs: Array<{ q: string; a: string }>;
}

export interface MonthLabels {
  cairo: string; luxor: string; aswan: string; redSea: string; sea: string;
  crowds: string; prices: string;
  crowdLevels: { Quiet: string; Moderate: string; Busy: string; Peak: string };
  priceLevels: { Lowest: string; Low: string; Mid: string; High: string; Highest: string };
  goodFor: string; watchFor: string; occasions: string; verdict: string;
  /** Enquiry block; %s is the month's name. */
  ctaHeading: string; ctaText: string; whatsapp: string; emailSubject: string;
  moreLabel: string; moreText: string;
  /** The link to this language's "when to go" page. */
  allMonths: string;
}
