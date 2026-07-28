// ---------------------------------------------------------------------------
// Shape of a translated page.
//
// A translated page is NOT a mechanical mirror of its English original. It
// targets the same intent for a different market, and the copy is written for
// that market — a German traveller planning Egypt has different reference
// points, different school holidays and different direct flights from an
// Italian or a Spanish one. The structure is shared so the template is one
// file; the words are not.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";

export interface LocalizedSection {
  title: string;
  body: string;
}

export interface LocalizedFact {
  label: string;
  value: string;
}

export interface LocalizedPage {
  /** Must match a TRANSLATION_GROUPS id. */
  groupId: string;
  /** SymbolIcon name for the hero mark. */
  symbol: string;
  /** <title>, kept under 65 characters including the brand. */
  title: string;
  /** <meta description>, kept under 165 characters. */
  description: string;
  /** Comma-separated keywords in the target language. */
  keywords: string;
  /** Breadcrumb leaf label. */
  crumb: string;
  h1: string;
  /** One-line standfirst under the H1. */
  standfirst: string;
  /** Opening argument, displayed as a lede. */
  lede: string;
  /** Optional quick-facts strip. */
  facts?: LocalizedFact[];
  sections: LocalizedSection[];
  /** Optional bullet list, rendered as a highlights panel. */
  highlights?: { heading: string; items: string[] };
  faqs: Array<{ q: string; a: string }>;
  cta: { heading: string; text: string; whatsapp: string; emailSubject: string };
  /** Label above the "see the full English site" link. */
  moreLabel: string;
  moreText: string;
}

export type LocalePageSet = Record<TranslatedLocale, LocalizedPage[]>;
