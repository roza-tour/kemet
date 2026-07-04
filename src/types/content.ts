// ---------------------------------------------------------------------------
// Content domain entities and their relationship shapes.
//
// Relationship rule (prevents circular dependencies and duplicated content):
// each conceptual edge is stored on ONE canonical side only, and the inverse is
// derived at build time by the relationship resolver. Canonical direction is
// the "belongs-to" side — e.g. a Tour stores its destinations/categories; a
// Destination's tour list is derived, never hand-maintained.
// ---------------------------------------------------------------------------
import type {
  ContentEntity,
  GeoPoint,
  MediaPlaceholder,
  Ref,
} from "@/types/primitives";
import type {
  Difficulty,
  RegionId,
  Season,
  TourTaxonomy,
  TravelStyle,
} from "@/types/taxonomy";

// --- Shared editorial primitives ------------------------------------------

export type TourKind = "multiday" | "day";

/** One step of an itinerary — a day (multi-day tours) or a stop (day tours). */
export interface ItineraryStep {
  /** Small caption inside the timeline node. */
  label: "Day" | "Stop";
  /** Display number, e.g. "01". */
  num: string;
  title: string;
  /** Bullet list — used for multi-day day-by-day programmes. */
  items?: string[];
  /** Single paragraph — used for stop-by-stop day tours. */
  text?: string;
}

export interface Faq {
  q: string;
  a: string;
}

// --- Relationship shapes ---------------------------------------------------

export interface TourRelationships {
  /** Canonical: the destinations this tour belongs to. */
  destinations?: Ref<"destination">[];
  experiences?: Ref<"experience">[];
  guides?: Ref<"guide">[];
  /** Canonical: the categories that organise this tour (no content duplicated). */
  categories?: Ref<"category">[];
  /** Editorial "you may also like" — symmetric, stored here. */
  relatedTours?: Ref<"tour">[];
}

export interface DestinationRelationships {
  /** Symmetric neighbour links, stored on the destination. */
  nearbyDestinations?: Ref<"destination">[];
  /** Editorial guide picks; tour/experience lists are derived from their refs. */
  guides?: Ref<"guide">[];
  /** Future: activities/articles authored against the destination. */
  activities?: Ref<"activity">[];
}

export interface ExperienceRelationships {
  /** Canonical: the destinations this experience is located at / primarily serves. */
  destinations?: Ref<"destination">[];
  /** Tours that include or pair well with this experience. */
  tours?: Ref<"tour">[];
  /** Travel guides that cover this experience or its context. */
  guides?: Ref<"guide">[];
  /** Reusable activity concepts this experience instantiates. */
  activities?: Ref<"activity">[];
  categories?: Ref<"category">[];
  /** Editorial "similar experiences" — authored cross-links. */
  relatedExperiences?: Ref<"experience">[];
}

export interface GuideRelationships {
  tours?: Ref<"tour">[];
  destinations?: Ref<"destination">[];
  experiences?: Ref<"experience">[];
  activities?: Ref<"activity">[];
  relatedGuides?: Ref<"guide">[];
  categories?: Ref<"category">[];
}

export interface ActivityRelationships {
  destinations?: Ref<"destination">[];
  categories?: Ref<"category">[];
}

// --- Collections (Seasonal / Editorial) ------------------------------------

export type CollectionType =
  | "seasonal"
  | "travel-inspiration"
  | "family"
  | "luxury"
  | "adventure"
  | "photography"
  | "historical"
  | "food"
  | "festival"
  | "nile"
  | "weekend"
  | "first-time"
  | "hidden-gems"
  | "best-of"
  | "road-trip";

/** Intended audience for a collection. */
export type CollectionAudience =
  | "everyone"
  | "families"
  | "couples"
  | "solo"
  | "luxury-travellers"
  | "adventure-seekers"
  | "photographers"
  | "history-enthusiasts"
  | "first-timers";

export interface CollectionRelationships {
  /** Canonical: tours that belong to this collection. */
  tours?: Ref<"tour">[];
  /** Canonical: destinations this collection covers. */
  destinations?: Ref<"destination">[];
  /** Canonical: experiences this collection includes. */
  experiences?: Ref<"experience">[];
  /** Canonical: guides that support this collection's planning. */
  guides?: Ref<"guide">[];
  /** Editorial cross-links to related collections. */
  relatedCollections?: Ref<"seasonal">[];
}

/**
 * An Editorial Collection — a first-class content domain that curates existing
 * entities around a travel theme, season or visitor intent. Collections do NOT
 * duplicate content; they reference it. They are presentation-independent:
 * adding a collection is data-only, no template or component change is required.
 */
export interface Collection extends ContentEntity {
  domain: "seasonal";
  subtitle: string;
  shortSummary: string;
  editorialIntro: string;
  collectionType: CollectionType;
  /** Primary season(s) this collection is most relevant for. */
  seasons?: Season[];
  /** Thematic travel styles that characterise this collection. */
  travelStyles?: TravelStyle[];
  /** Target audience. */
  audience?: CollectionAudience[];
  /** Editorial priority — higher numbers surface first on hub. */
  priority?: number;
  /** Pin to featured slots on hub and homepage. */
  featured?: boolean;
  /** Key reasons to visit / highlights used as the editorial intro list. */
  highlights?: string[];
  /** Practical planning notes (not duplicated from guides). */
  planningNotes?: string[];
  /** Short travel tips specific to this collection's theme. */
  travelTips?: string[];
  faqs?: Faq[];
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];
  /** When this editorial content was last reviewed. */
  lastReviewed?: string;
  relationships?: CollectionRelationships;
}

// --- Tours -----------------------------------------------------------------
// Existing fields are unchanged so the current catalogue and rendering are
// byte-identical. Architecture fields are optional and supplied by the
// taxonomy side-car (src/data/tours.taxonomy.ts) or a future API.

export interface Tour {
  /** Route file stem → e.g. "tour-7-day" emits tour-7-day.html. */
  slug: string;
  title: string;
  /** Hero supporting line. */
  subtitle: string;
  kind: TourKind;
  /** Editorial category label. */
  category: string;
  /** Short chip on cards ("10 Days", "Day Tour"…). */
  tag: string;
  /** "10 Days / 9 Nights". */
  durationLabel: string;
  startPoint: string;
  /** Route, shown as chips. */
  cities: string[];
  /** Condensed "Visiting" line for the price card. */
  visiting: string;
  /** "Yes — your party only". */
  isPrivate: string;
  /** Price in EUR, per person — already source operator price +20%. */
  price: number;
  /** Original price (struck-through) where given, in EUR. */
  was?: number;
  flightsIncluded?: boolean;
  /** Card description. */
  summary: string;
  /** Overview paragraph on the detail page. */
  overview: string;
  itinerary: ItineraryStep[];
  included: string[];
  excluded: string[];
  faqs: Faq[];
  /** Sort order across listings. */
  order: number;

  // --- Architecture (optional, additive) ----------------------------------
  /** Stable cross-system id; for legacy tours it mirrors the slug. */
  id?: string;
  domain?: "tour";
  taxonomy?: TourTaxonomy;
  relationships?: TourRelationships;
  /** Hero/card photography (optional; placeholder is shown until supplied). */
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];
}

// --- Future domains (modelled now; data/pages added later) -----------------

/**
 * A place users explore and plan around. The model is intentionally complete
 * and UI-independent: every field is data (facts, ids, refs, placeholders), so
 * pages render from it and a future API/CMS maps onto it unchanged. `title`
 * (from ContentEntity) is the destination name.
 */
export interface Destination extends ContentEntity {
  domain: "destination";

  // Identity & copy
  /** One-line factual summary (definition block / meta description source). */
  shortSummary: string;
  /** Full factual description (overview body). */
  longDescription: string;

  // Geography
  region: RegionId;
  /** Coordinates placeholder — null until sourced (no fabricated values). */
  coordinates?: GeoPoint;
  /** Metres above sea level, where known. */
  elevationMeters?: number;
  /** UNESCO World Heritage status, where applicable. */
  unesco?: { listed: boolean; siteName?: string };

  // When to go
  bestSeasons?: Season[];
  climateSummary?: string;
  /** Recommended length of stay, e.g. "2–3 days". */
  recommendedStay?: string;

  // Suitability / facets (reuse the shared taxonomy)
  travelStyles?: TravelStyle[];
  accessibilityNotes?: string;
  familyFriendly?: boolean;
  luxuryFriendly?: boolean;
  adventureFriendly?: boolean;

  // Significance (short factual notes)
  historicalImportance?: string;
  culturalImportance?: string;

  // Scannable, AI-search-friendly lists
  highlights?: string[];
  photographyHighlights?: string[];
  thingsToKnow?: string[];
  whyVisit?: string[];

  // Presentation-agnostic content references
  /** SymbolIcon name for the hero glyph (a content association, not styling). */
  symbol?: string;
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];

  // Q&A (future) — rendered when present
  faqs?: Faq[];

  // Graph (tours/experiences are derived from their refs; never stored here)
  relationships?: DestinationRelationships;
}

/**
 * A visitor experience — the activity layer of the platform. Represents a real
 * bookable (or enquirable) offering rather than a destination or a tour.
 * Every field is data and presentation-independent; pages render from it and a
 * future booking API maps onto it without a model change.
 *
 * Relationship rule: Experience stores canonical edges to its destinations, tours,
 * guides and activities. Inverse lookups (e.g. experiences-on-a-destination) are
 * derived by the registry — never hand-maintained here.
 */
export interface Experience extends ContentEntity {
  domain: "experience";

  // Copy
  /** 1–2 sentence factual summary — meta description source and AI snippet. */
  shortSummary: string;
  /** Full factual description paragraph(s) — overview body. */
  longDescription: string;

  // Classification
  /** Experience category id — references experienceCategories in config/taxonomy. */
  category: string;

  // Logistics
  /** Human-readable duration label, e.g. "3–4 hours", "Full day". */
  durationLabel: string;
  /** Duration in minutes — for future filtering and sorting. */
  durationMinutes?: number;
  /** Physical demand level for the visitor. */
  difficulty?: Difficulty;

  // Suitability
  minAge?: number;
  familyFriendly?: boolean;
  luxuryFriendly?: boolean;
  adventureFriendly?: boolean;
  accessibilityNotes?: string;

  // Seasonality
  bestSeasons?: Season[];

  // Location
  region: RegionId;
  /** Human-readable location, e.g. "Giza Plateau, Giza". */
  location?: string;
  /** Meeting point description — placeholder until booking system is live. */
  meetingPointNote?: string;
  coordinates?: GeoPoint;

  // Format
  /** True if the experience runs for a single party only (no shared groups). */
  isPrivate?: boolean;
  /** BCP-47 language codes the experience is offered in. */
  languages?: string[];
  /** Human-readable group-size note, e.g. "Your private party only." */
  groupSizeNote?: string;

  // Future availability & pricing (architecture-ready, not yet live)
  /** Availability description — e.g. "Available most mornings year-round." */
  availabilityNote?: string;
  /** Pricing note — e.g. "Pricing confirmed on enquiry." No fabricated prices. */
  priceNote?: string;

  // Scannable, AI-search-friendly content blocks
  highlights?: string[];
  /** Sidebar key–value facts table. */
  keyFacts?: { label: string; value: string }[];
  whatsIncluded?: string[];
  whatsExcluded?: string[];
  preparationTips?: string[];
  goodToKnow?: string[];

  // Q&A — rendered as FAQPage JSON-LD and an accordion
  faqs?: Faq[];

  // Future media (placeholders until photography is sourced)
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];

  // Future reviews & ratings (intentionally omitted — Phase 9+)

  relationships?: ExperienceRelationships;
}

export type GuideType =
  | "overview"
  | "planning"
  | "practical"
  | "cultural"
  | "food"
  | "seasonal"
  | "experience"
  | "sustainability";

/** One structured content block within a guide. */
export interface GuideSection {
  heading: string;
  /** Body paragraphs — each string renders as a <p>. */
  paragraphs?: string[];
  /** Scannable bullet list items. */
  items?: string[];
  /** Advisory callout (tip, warning, or informational note). */
  note?: string;
  noteType?: "tip" | "warning" | "info";
}

/**
 * A travel guide — the knowledge layer of the platform. The model is
 * presentation-independent: all fields are data (facts, refs, structured text).
 * Pages and future CMS/API surfaces render from this without any logic changes.
 * Relationships follow the canonical one-directional rule: guides list their
 * destinations/tours/guides; inverse lookups are derived by the registry.
 */
export interface Guide extends ContentEntity {
  domain: "guide";

  // Classification
  /** Top-level guide type — drives icon, colour and schema type selection. */
  guideType: GuideType;
  /** Guide category id — references guideCategories in config/taxonomy. */
  category: string;
  /** Id of the parent guide in the knowledge tree (unlimited depth). */
  parentGuideId?: string;

  // Copy
  /** 1–2 sentence factual summary — meta description source and AI snippet. */
  shortSummary: string;
  /** Structured content body — each section is a heading + paragraphs/items. */
  sections: GuideSection[];

  // Scannable / AI-search-friendly blocks
  /** Sidebar key–value facts table. */
  keyFacts?: { label: string; value: string }[];
  /** Top-of-page scannable bullets — rendered before the main sections. */
  keyTakeaways?: string[];
  /** Sidebar practical tips. */
  planningTips?: string[];
  /** Sidebar warnings and caveats. */
  importantNotes?: string[];
  /** Q&A — rendered as FAQPage JSON-LD and a scannable accordion. */
  faqs?: Faq[];

  // Metadata
  /** Planning complexity for readers (not difficulty of the activity). */
  difficulty?: Difficulty;
  readingTimeMinutes?: number;
  /** ISO year-month string, e.g. "2026-01". */
  lastUpdated?: string;

  // Future media (placeholders until photography is sourced)
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];

  // Future attribution (null until author system is built)
  authorId?: string;
  reviewDate?: string;

  relationships?: GuideRelationships;
}

/** A lightweight grouping (e.g. "Nile Cruises"). Membership is derived from the
 *  member entities' refs, so categories never duplicate content. */
export interface Category extends ContentEntity {
  domain: "category";
  /** Which domain this category organises (usually "tour"). */
  groups: "tour" | "experience" | "guide";
  summary?: string;
}

// --- Existing taxonomy/marketing content (unchanged shapes) ----------------

export interface Identity {
  id: string;
  name: string;
  /** SymbolIcon name. */
  symbol: string;
  /** CSS custom property carrying the accent colour, e.g. "--pharaonic". */
  accentVar: string;
  intro: string;
  experiences: string[];
  /** Representative photograph; the symbol placeholder renders when absent. */
  image?: MediaPlaceholder;
}

export interface Activity {
  id: string;
  title: string;
  place: string;
  blurb: string;
  // Architecture (optional, additive)
  domain?: "activity";
  taxonomy?: { destinations?: string[]; travelStyles?: TravelStyle[] };
  relationships?: ActivityRelationships;
}

export interface Dish {
  name: string;
  note: string;
}

export interface CultureSymbol {
  /** SymbolIcon name. */
  symbol: string;
  name: string;
  /** Short italic descriptor. */
  nature: string;
  note: string;
}

export interface Craft {
  /** SymbolIcon name reused as a small marker. */
  symbol: string;
  name: string;
  note: string;
}
