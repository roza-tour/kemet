// ---------------------------------------------------------------------------
// Trust, editorial and conversion types — the data layer for all EEAT,
// contact and CTA content across the site. Presentation-independent: every
// field is data; components render from it with no business logic embedded.
// ---------------------------------------------------------------------------

/** A single credibility point shown in trust grids, strips and sidebars. */
export interface TrustSignal {
  id: string;
  /** SymbolIcon name — renders a glyph when present. */
  symbol?: string;
  headline: string;
  body: string;
}

/** Which CTA link type to build — the component resolves the href from site config. */
export type CTAType =
  | "whatsapp"
  | "email"
  | "phone"
  | "form"
  | "quote"
  | "consultation";

/** A single CTA descriptor — href is always resolved from centralized config, never hardcoded. */
export interface CTAConfig {
  type: CTAType;
  label: string;
  /** Hint text prepended to the WhatsApp message or email subject. */
  hint?: string;
  variant?: "primary" | "secondary";
}

/** A contact channel descriptor — values come from site config, not from here. */
export interface ContactChannel {
  type: CTAType;
  label: string;
  /** Human-readable availability note displayed alongside the link. */
  availability?: string;
}

/** Operating hours for one period. Maps to OpeningHoursSpecification in schema.org. */
export interface BusinessHours {
  days: string;
  opens: string;
  closes: string;
  timezone: string;
}

/** A company credential — always marked as `placeholder: true` until confirmed. */
export interface CompanyCredential {
  type: "certification" | "membership" | "award" | "license" | "insurance";
  name: string;
  issuedBy?: string;
  year?: number;
  url?: string;
  /** When true, the credential is not yet confirmed and renders as placeholder only. */
  placeholder: boolean;
}

/** One editorial content review step. */
export interface EditorialStep {
  heading: string;
  body: string;
}

/**
 * Editorial attribution — attached to any content entity that tracks
 * authorship or review status. Architecture ready; populated when the
 * author system is built.
 */
export interface EditorialAttribution {
  authorId?: string;
  authorName?: string;
  reviewerName?: string;
  lastUpdated?: string;
  reviewDate?: string;
}

/** One step in the client journey / our process section. */
export interface ProcessStep {
  step: number;
  heading: string;
  body: string;
}

/** One peace-of-mind point shown in the booking confidence section. */
export interface ConfidencePoint {
  id: string;
  headline: string;
  body: string;
}

/**
 * Complete company profile — the single source of truth for all trust,
 * contact and identity content across the site. Presentation-independent.
 * Every field is optional (with the exception of name/description) so the
 * model can be enriched incrementally without breaking consumers.
 */
export interface CompanyProfile {
  name: string;
  /** Legal registered name — placeholder until confirmed with legal team. */
  legalName?: string;
  description: string;
  mission?: string;
  vision?: string;
  values?: string[];
  /** Year the company was established — omit if unconfirmed. */
  founded?: number;
  headquarters?: {
    city: string;
    country: string;
    /** ISO 3166-1 alpha-2 code. */
    countryCode: string;
    /** Full postal address — placeholder until confirmed. */
    streetAddress?: string;
    postalCode?: string;
  };
  serviceArea?: string[];
  /** Human-readable language list for display; BCP-47 codes for schema.org. */
  languages?: string[];
  languageCodes?: string[];
  businessHours?: BusinessHours[];
  contactChannels?: ContactChannel[];
  /** Short note about out-of-hours emergency support. */
  emergencyContactNote?: string;
  trustSignals?: TrustSignal[];
  process?: ProcessStep[];
  bookingConfidence?: ConfidencePoint[];
  credentials?: CompanyCredential[];
  editorialStandards?: EditorialStep[];
  // Future fields — architecture present, populated when data is confirmed
  socialProfiles?: Record<string, string>;
  teamMembers?: { name: string; role: string; authorId?: string }[];
  partners?: { name: string; url?: string; placeholder?: boolean }[];
  paymentMethods?: string[];
  insuranceNote?: string;
}
