// ---------------------------------------------------------------------------
// Conversion architecture types — enquiry categories, CTA roles, journey
// stages and placement contexts. Presentation-independent; every field is
// data. No contact information is stored here — all contact values come from
// site.ts via links.ts.
// ---------------------------------------------------------------------------

/** All supported enquiry categories. Drives EnquiryPanel and link builders. */
export type EnquiryKind =
  | "general"
  | "quote"
  | "custom-itinerary"
  | "private-tour"
  | "group-travel"
  | "luxury-travel"
  | "family-travel"
  | "business-travel"
  | "support";

/** Visual / semantic role of a CTA within a page hierarchy. */
export type CTARole =
  | "primary"
  | "secondary"
  | "soft"
  | "planning"
  | "consultation"
  | "quote"
  | "contextual";

/** Where on the site a conversion component is placed. */
export type PlacementContext =
  | "homepage"
  | "tour"
  | "destination"
  | "experience"
  | "collection"
  | "guide"
  | "about"
  | "contact"
  | "footer";

/** One enquiry type — drives EnquiryPanel cards and link pre-fills. */
export interface EnquiryType {
  id: EnquiryKind;
  label: string;
  description: string;
  /** Decorative glyph used as the card icon. */
  icon: string;
  /** Pre-filled WhatsApp message for this enquiry kind. */
  whatsappMessage: string;
  /** Pre-filled email subject. */
  emailSubject: string;
  /** Optional pre-filled email body. */
  emailBody?: string;
}

/** One stage in a visitor journey from discovery to enquiry. */
export interface JourneyStage {
  stage: number;
  /** Page type the visitor is on at this stage. */
  page: PlacementContext;
  /** Primary visitor intent at this stage. */
  intent: string;
  /** Recommended CTA role for this stage. */
  ctaRole: CTARole;
  /** Human-readable description of the conversion goal at this stage. */
  conversionGoal: string;
}

/** A defined user journey from entry point to conversion. */
export interface UserJourney {
  id: string;
  name: string;
  /** URL or page type where this journey typically begins. */
  entryPoint: string;
  stages: JourneyStage[];
}

/** CTA placement strategy for a given page context. */
export interface CTAPlacement {
  context: PlacementContext;
  /** Primary CTA types to render. */
  primary: string[];
  /** Secondary CTA types (softer, lower visual weight). */
  secondary?: string[];
  /** Soft cap on total conversion blocks to avoid overwhelming the visitor. */
  maxBlocks: number;
  /** Rationale for this placement approach. */
  strategy: string;
}

/** Decision support item — helps a visitor self-qualify. */
export interface FitItem {
  label: string;
  /** true = this tour IS right for this visitor; false = it may not be. */
  positive: boolean;
}

/** Props for the TourFit decision-support component. */
export interface TourFitConfig {
  /** Items the tour IS suited for — positive signals. */
  fitFor: string[];
  /** Items the tour may NOT suit — honest qualification. */
  notFor?: string[];
}
