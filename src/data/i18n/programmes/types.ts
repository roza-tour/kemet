// ---------------------------------------------------------------------------
// A translated programme page — the words only. The English programme
// (data/programmes.ts) holds what is not prose: the photograph, the places,
// the catalogue journeys it pairs with. ./build.ts joins the two into the page
// the translated-article template renders.
// ---------------------------------------------------------------------------
export interface ProgText {
  /** The English programme's slug, unchanged. */
  id: string;
  /** File name under /<locale>/, without ".html". */
  localeSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  title: string;
  standfirst: string;
  forWhom: string;
  length: string;
  route: string;
  bestMonths: string;
  avoid: string;
  days: Array<{ label: string; title: string; text: string }>;
  different: string[];
  privateNote: string;
  stay: string;
  fixed: string;
  faqs: Array<{ q: string; a: string }>;
}

/** The fixed words of a programme page, once per language. */
export interface ProgLabels {
  /** Fact labels. */
  length: string; route: string; best: string; price: string; onRequest: string; forWhom: string;
  /** Section headings. */
  plan: string; order: string; different: string; private: string; stay: string; avoid: string;
  /** The two shared notes (data/programmes.ts → ORDER_NOTE, PRICE_NOTE) and their questions. */
  orderNote: string; orderQ: string;
  priceNote: string; priceQ: string;
  /** "What sets the order here." */
  fixedLead: string;
  /** Enquiry block. %s is the programme's name. */
  ctaHeading: string; ctaText: string; whatsapp: string; emailSubject: string;
  moreLabel: string; moreText: string;
}
