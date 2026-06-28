// ---------------------------------------------------------------------------
// Taxonomy types — the reusable, filter-ready vocabulary every tour (and, in
// future, other entities) can be described with. Values are stable ids; their
// human labels live in src/config/taxonomy.ts so they can be localised later
// without touching the data.
// ---------------------------------------------------------------------------

/** Geographic region id — references the regions list in config/taxonomy. */
export type RegionId = string;

/** Destination id — references a Destination entity (config/taxonomy + future data). */
export type DestinationId = string;

export type Difficulty = "easy" | "moderate" | "challenging";

/**
 * Thematic travel styles — the canonical multi-select facet covering the
 * "luxury / adventure / historical / cultural / nature / photography / family"
 * dimensions, so those are never duplicated as separate booleans.
 */
export type TravelStyle =
  | "luxury"
  | "adventure"
  | "cultural"
  | "historical"
  | "nature"
  | "photography"
  | "family"
  | "relaxed";

export type BudgetLevel = "value" | "comfort" | "premium" | "luxury";

export type Season = "spring" | "summer" | "autumn" | "winter";

/** BCP-47 language code offered for guiding. */
export type LanguageCode = string;

export type GroupType = "private" | "group";

/**
 * Logistical / binary attributes that are not thematic styles. Thematic
 * dimensions (luxury, adventure, …) belong in `travelStyles`, not here.
 */
export interface TourFeatures {
  privateOrGroup?: GroupType;
  familyFriendly?: boolean;
  walkingRequired?: boolean;
  boatIncluded?: boolean;
  flightIncluded?: boolean;
  accommodationIncluded?: boolean;
  transferIncluded?: boolean;
  /** Accessibility: step-free / assistance feasible. */
  accessible?: boolean;
}

/**
 * The complete, reusable taxonomy block for a tour. Every field is optional so
 * it can be enriched incrementally and supplied by a future API unchanged.
 */
export interface TourTaxonomy {
  destinations?: DestinationId[];
  regions?: RegionId[];
  durationDays?: number;
  nights?: number;
  difficulty?: Difficulty;
  travelStyles?: TravelStyle[];
  budgetLevel?: BudgetLevel;
  seasons?: Season[];
  /** Languages the experience can be guided in. */
  languages?: LanguageCode[];
  features?: TourFeatures;
}

/** A controlled-vocabulary option: a stable id plus a default-locale label. */
export interface TaxonomyTerm<T extends string = string> {
  id: T;
  label: string;
  /** Optional short description for facet tooltips / landing copy. */
  description?: string;
}
