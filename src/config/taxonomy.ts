// ---------------------------------------------------------------------------
// Controlled vocabularies — the single source of truth for every taxonomy term
// the site filters, facets or searches on. UI (future filter chips, facet
// counts, search synonyms) and content both read from here, so a term is
// defined once.
//
// Each term is { id, label } — the `id` is stable and language-independent and
// is what gets stored on entities; the `label` is the default-locale display
// string and will move into translation files when i18n lands. No filtering or
// search logic lives here — only the vocabulary.
// ---------------------------------------------------------------------------
import type {
  BudgetLevel,
  Difficulty,
  Season,
  TaxonomyTerm,
  TravelStyle,
} from "@/types";

/** Egypt's regions — the geographic spine destinations and tours hang off. */
export const regions: TaxonomyTerm[] = [
  { id: "cairo", label: "Cairo & Giza" },
  { id: "nile-valley", label: "Nile Valley (Luxor & Aswan)" },
  { id: "mediterranean", label: "Mediterranean Coast" },
  { id: "red-sea", label: "Red Sea & Sinai" },
  { id: "western-desert", label: "Western Desert & Oases" },
  { id: "nubia", label: "Nubia" },
];

export const difficulties: TaxonomyTerm<Difficulty>[] = [
  { id: "easy", label: "Easy", description: "Gentle pace, minimal walking." },
  { id: "moderate", label: "Moderate", description: "Some walking over uneven ground." },
  { id: "challenging", label: "Challenging", description: "Long active days." },
];

export const travelStyles: TaxonomyTerm<TravelStyle>[] = [
  { id: "luxury", label: "Luxury" },
  { id: "adventure", label: "Adventure" },
  { id: "cultural", label: "Cultural" },
  { id: "historical", label: "Historical" },
  { id: "nature", label: "Nature" },
  { id: "photography", label: "Photography" },
  { id: "family", label: "Family" },
  { id: "relaxed", label: "Relaxed" },
];

export const budgetLevels: TaxonomyTerm<BudgetLevel>[] = [
  { id: "value", label: "Value" },
  { id: "comfort", label: "Comfort" },
  { id: "premium", label: "Premium" },
  { id: "luxury", label: "Luxury" },
];

export const seasons: TaxonomyTerm<Season>[] = [
  { id: "spring", label: "Spring" },
  { id: "summer", label: "Summer" },
  { id: "autumn", label: "Autumn" },
  { id: "winter", label: "Winter" },
];

/**
 * Logistical / binary tour feature facets. Thematic facets (luxury, adventure,
 * …) are intentionally NOT here — they live in `travelStyles` to avoid
 * duplicated meaning. Keys match `TourFeatures` in src/types/taxonomy.
 */
export const tourFeatureFacets: TaxonomyTerm[] = [
  { id: "privateOrGroup", label: "Private or group" },
  { id: "familyFriendly", label: "Family friendly" },
  { id: "walkingRequired", label: "Walking required" },
  { id: "boatIncluded", label: "Boat / cruise included" },
  { id: "flightIncluded", label: "Flight included" },
  { id: "accommodationIncluded", label: "Accommodation included" },
  { id: "transferIncluded", label: "Transfers included" },
  { id: "accessible", label: "Step-free / accessible" },
];

/** Languages the experiences can be guided in (BCP-47 ids). */
export const guideLanguages: TaxonomyTerm[] = [
  { id: "en", label: "English" },
  { id: "fr", label: "French" },
  { id: "de", label: "German" },
  { id: "es", label: "Spanish" },
  { id: "it", label: "Italian" },
  { id: "ar", label: "Arabic" },
];

/**
 * A guide category — a taxonomy term that supports an optional parent for
 * two-level hierarchical grouping (root → child). Deeper nesting is modelled
 * by the `parentGuideId` field on the Guide entity itself.
 */
export interface GuideCategory extends TaxonomyTerm {
  /** Id of the parent category (undefined = root category). */
  parentId?: string;
}

/**
 * Controlled vocabulary for the Travel Guide System. Root categories (no
 * parentId) are used as hub section headings; child categories label individual
 * guides. Adding a new category never requires structural changes to the system.
 */
export const guideCategories: GuideCategory[] = [
  // Root categories
  { id: "planning-your-trip", label: "Planning Your Trip" },
  { id: "culture-history", label: "Culture & History" },
  { id: "food-drink", label: "Food & Drink" },
  { id: "travel-styles", label: "Travel Styles" },

  // Under planning-your-trip
  { id: "visa-entry", label: "Visa & Entry", parentId: "planning-your-trip" },
  { id: "transportation", label: "Transportation", parentId: "planning-your-trip" },
  { id: "weather-seasons", label: "Weather & Seasons", parentId: "planning-your-trip" },
  { id: "money-budget", label: "Money & Budget", parentId: "planning-your-trip" },
  { id: "safety", label: "Safety", parentId: "planning-your-trip" },
  { id: "packing", label: "Packing", parentId: "planning-your-trip" },
  { id: "internet-connectivity", label: "Internet & SIM Cards", parentId: "planning-your-trip" },
  { id: "photography-tips", label: "Photography Tips", parentId: "planning-your-trip" },

  // Under culture-history
  { id: "history", label: "History", parentId: "culture-history" },
  { id: "culture-etiquette", label: "Culture & Etiquette", parentId: "culture-history" },
  { id: "language", label: "Language", parentId: "culture-history" },
  { id: "festivals", label: "Festivals & Events", parentId: "culture-history" },

  // Under food-drink
  { id: "cuisine", label: "Egyptian Cuisine", parentId: "food-drink" },
  { id: "street-food", label: "Street Food", parentId: "food-drink" },
  { id: "dining", label: "Dining Out", parentId: "food-drink" },

  // Under travel-styles
  { id: "luxury-travel", label: "Luxury Travel", parentId: "travel-styles" },
  { id: "family-travel", label: "Family Travel", parentId: "travel-styles" },
  { id: "adventure-travel", label: "Adventure Travel", parentId: "travel-styles" },
  { id: "solo-travel", label: "Solo Travel", parentId: "travel-styles" },
  { id: "budget-travel", label: "Budget Travel", parentId: "travel-styles" },
  { id: "sustainable-travel", label: "Sustainable Travel", parentId: "travel-styles" },
  { id: "accessibility", label: "Accessible Travel", parentId: "travel-styles" },
];

/**
 * Controlled vocabulary for the Experience domain. Flat taxonomy — no hierarchy
 * required at this stage; deeper nesting can be added later via parentId without
 * touching entity data. Adding a new category never requires structural changes.
 */
export const experienceCategories: TaxonomyTerm[] = [
  { id: "historical", label: "Historical" },
  { id: "cultural", label: "Cultural" },
  { id: "food-drink", label: "Food & Drink" },
  { id: "walking-tour", label: "Walking Tour" },
  { id: "museum-visit", label: "Museum Visit" },
  { id: "religious-site", label: "Religious Site" },
  { id: "photography", label: "Photography" },
  { id: "desert-adventure", label: "Desert Adventure" },
  { id: "nile-experience", label: "Nile Experience" },
  { id: "family-activity", label: "Family Activity" },
  { id: "luxury-experience", label: "Luxury Experience" },
  { id: "night-experience", label: "Night Experience" },
  { id: "shopping", label: "Shopping" },
  { id: "workshop", label: "Workshop" },
  { id: "nature", label: "Nature" },
  { id: "archaeology", label: "Archaeology" },
];

/**
 * Controlled vocabulary for the Collections domain. Flat taxonomy — each entry
 * is a collection "type" (theme). New types can be added here without any
 * structural change to the Collection entity or its components.
 */
export const collectionTypes: TaxonomyTerm[] = [
  { id: "seasonal", label: "Seasonal", description: "Travel tied to Egypt's seasons and climate." },
  { id: "travel-inspiration", label: "Travel Inspiration", description: "Curated thematic inspiration for planning." },
  { id: "family", label: "Family", description: "Collections designed for families travelling with children." },
  { id: "luxury", label: "Luxury", description: "High-end experiences and premium-level itineraries." },
  { id: "adventure", label: "Adventure", description: "Active, off-the-beaten-path and nature journeys." },
  { id: "photography", label: "Photography", description: "Collections optimised for photographers." },
  { id: "historical", label: "Historical", description: "Deep dives into ancient Egypt and its monuments." },
  { id: "food", label: "Food & Drink", description: "Culinary-focused collections across Egypt." },
  { id: "festival", label: "Festival & Events", description: "Collections tied to festivals and cultural events." },
  { id: "nile", label: "Nile", description: "River-centric journeys and experiences." },
  { id: "weekend", label: "Weekend Escapes", description: "Short break itineraries from Cairo or other hubs." },
  { id: "first-time", label: "First-Time Visitors", description: "Essential curations for first trips to Egypt." },
  { id: "hidden-gems", label: "Hidden Gems", description: "Lesser-known destinations and off-the-path gems." },
  { id: "best-of", label: "Best of Egypt", description: "Top-picks across destinations, tours and experiences." },
  { id: "road-trip", label: "Road Trips", description: "Self-drive and overland journey collections." },
];

/** Convenience: look up a term's label by id within a vocabulary. */
export function labelOf(terms: TaxonomyTerm[], id: string): string | undefined {
  return terms.find((t) => t.id === id)?.label;
}
