// ---------------------------------------------------------------------------
// Tour metadata side-car — structured taxonomy + relationship edges for the
// existing tours, keyed by slug. Kept separate from the editorial catalogue
// (tours.ts) so copy and structured data evolve independently; a future API
// would return the two merged. This is the concrete proof of the taxonomy and
// relationship model and the data a future search/filter index reads.
//
// Edge convention: destinations / categories / relatedTours are stored here as
// the canonical, by-id edges. Inverse views (a destination's tours, a
// category's members) are DERIVED via utils/relationships — never duplicated.
// ---------------------------------------------------------------------------
import type { Ref, TourRelationships, TourTaxonomy } from "@/types";

const dest = (...ids: string[]): Ref<"destination">[] =>
  ids.map((id) => ({ domain: "destination", id }));
const cat = (...ids: string[]): Ref<"category">[] =>
  ids.map((id) => ({ domain: "category", id }));
const related = (...ids: string[]): Ref<"tour">[] =>
  ids.map((id) => ({ domain: "tour", id }));

export interface TourMeta {
  taxonomy: TourTaxonomy;
  relationships: TourRelationships;
}

export const tourMetadata: Record<string, TourMeta> = {
  "tour-10-day": {
    taxonomy: {
      regions: ["cairo", "mediterranean", "nile-valley", "nubia"],
      durationDays: 10,
      nights: 9,
      difficulty: "moderate",
      travelStyles: ["luxury", "cultural", "historical"],
      budgetLevel: "luxury",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: true,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "giza", "alexandria", "aswan", "luxor"),
      categories: cat("multi-day", "nile-cruises"),
      relatedTours: related("tour-7-day", "tour-3-day"),
    },
  },

  "tour-7-day": {
    taxonomy: {
      regions: ["cairo", "mediterranean", "nile-valley"],
      durationDays: 7,
      nights: 6,
      difficulty: "moderate",
      travelStyles: ["luxury", "cultural", "historical"],
      budgetLevel: "premium",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "giza", "alexandria", "luxor"),
      categories: cat("multi-day"),
      relatedTours: related("tour-10-day", "tour-4-day"),
    },
  },

  "tour-4-day": {
    taxonomy: {
      regions: ["cairo", "mediterranean"],
      durationDays: 4,
      nights: 3,
      difficulty: "easy",
      travelStyles: ["cultural", "historical", "luxury"],
      budgetLevel: "comfort",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "giza", "alexandria"),
      categories: cat("multi-day"),
      relatedTours: related("tour-7-day", "tour-3-day"),
    },
  },

  "tour-3-day": {
    taxonomy: {
      regions: ["cairo", "nile-valley", "nubia"],
      durationDays: 3,
      nights: 2,
      difficulty: "moderate",
      travelStyles: ["cultural", "historical"],
      budgetLevel: "comfort",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: true,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "luxor", "aswan"),
      categories: cat("multi-day"),
      relatedTours: related("tour-10-day", "tour-7-day"),
    },
  },

  "tour-fayoum": {
    taxonomy: {
      regions: ["western-desert"],
      durationDays: 1,
      nights: 0,
      difficulty: "moderate",
      travelStyles: ["nature", "adventure", "photography"],
      budgetLevel: "value",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        accommodationIncluded: false,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("fayoum"),
      categories: cat("day-tours", "nature-desert"),
    },
  },

  "tour-giza-museum": {
    taxonomy: {
      regions: ["cairo"],
      durationDays: 1,
      nights: 0,
      difficulty: "easy",
      travelStyles: ["historical", "cultural"],
      budgetLevel: "value",
      seasons: ["autumn", "winter", "spring", "summer"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        accommodationIncluded: false,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("giza"),
      categories: cat("day-tours", "pyramids-museums"),
    },
  },

  "tour-saqqara": {
    taxonomy: {
      regions: ["cairo"],
      durationDays: 1,
      nights: 0,
      difficulty: "moderate",
      travelStyles: ["historical", "cultural"],
      budgetLevel: "value",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        accommodationIncluded: false,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("saqqara", "memphis", "dahshur"),
      categories: cat("day-tours", "pyramids-museums"),
    },
  },

  "tour-religious-citadel": {
    taxonomy: {
      regions: ["cairo"],
      durationDays: 1,
      nights: 0,
      difficulty: "easy",
      travelStyles: ["cultural", "historical"],
      budgetLevel: "value",
      seasons: ["autumn", "winter", "spring", "summer"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        accommodationIncluded: false,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo"),
      categories: cat("day-tours", "cultural-heritage"),
    },
  },

  "tour-cairo-museums": {
    taxonomy: {
      regions: ["cairo"],
      durationDays: 1,
      nights: 0,
      difficulty: "easy",
      travelStyles: ["cultural", "historical"],
      budgetLevel: "value",
      seasons: ["spring", "summer", "autumn", "winter"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        accommodationIncluded: false,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo"),
      categories: cat("day-tours", "cultural-heritage"),
    },
  },

  "tour-alexandria": {
    taxonomy: {
      regions: ["mediterranean"],
      durationDays: 1,
      nights: 0,
      difficulty: "easy",
      travelStyles: ["cultural", "historical"],
      budgetLevel: "value",
      seasons: ["spring", "summer", "autumn"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        accommodationIncluded: false,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("alexandria"),
      categories: cat("day-tours", "coastal", "cultural-heritage"),
    },
  },

  "tour-giza-sphinx": {
    taxonomy: {
      regions: ["cairo"],
      durationDays: 1,
      nights: 0,
      difficulty: "easy",
      travelStyles: ["historical", "photography"],
      budgetLevel: "value",
      seasons: ["autumn", "winter", "spring", "summer"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        accommodationIncluded: false,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("giza"),
      categories: cat("day-tours", "pyramids-museums"),
    },
  },

  "tour-cairo-food": {
    taxonomy: {
      regions: ["cairo"],
      durationDays: 1,
      nights: 0,
      difficulty: "easy",
      travelStyles: ["cultural", "relaxed", "family"],
      budgetLevel: "value",
      seasons: ["spring", "summer", "autumn", "winter"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        accommodationIncluded: false,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo"),
      categories: cat("day-tours", "culinary"),
    },
  },

  // --- RC2 additions: the expanded catalogue -------------------------------
  "tour-nile-cruise": {
    taxonomy: {
      regions: ["nile-valley", "nubia"],
      durationDays: 4,
      nights: 3,
      difficulty: "easy",
      travelStyles: ["luxury", "cultural", "historical", "relaxed"],
      budgetLevel: "premium",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: true,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("aswan", "luxor"),
      categories: cat("multi-day", "nile-cruises"),
      relatedTours: related("tour-10-day", "tour-upper-egypt-5day"),
    },
  },

  "tour-upper-egypt-5day": {
    taxonomy: {
      regions: ["nile-valley", "nubia"],
      durationDays: 5,
      nights: 4,
      difficulty: "moderate",
      travelStyles: ["historical", "cultural", "luxury"],
      budgetLevel: "premium",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("luxor", "aswan"),
      categories: cat("multi-day"),
      relatedTours: related("tour-nile-cruise", "tour-luxor-3day"),
    },
  },

  "tour-honeymoon-9day": {
    taxonomy: {
      regions: ["cairo", "nile-valley", "nubia"],
      durationDays: 9,
      nights: 8,
      difficulty: "easy",
      travelStyles: ["luxury", "relaxed", "cultural"],
      budgetLevel: "luxury",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: false,
        walkingRequired: true,
        boatIncluded: true,
        flightIncluded: true,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "giza", "aswan", "luxor"),
      categories: cat("multi-day", "nile-cruises"),
      relatedTours: related("tour-10-day", "tour-nile-cruise"),
    },
  },

  "tour-family-8day": {
    taxonomy: {
      regions: ["cairo", "nile-valley", "nubia"],
      durationDays: 8,
      nights: 7,
      difficulty: "easy",
      travelStyles: ["family", "cultural", "historical"],
      budgetLevel: "premium",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: true,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "giza", "luxor", "aswan"),
      categories: cat("multi-day"),
      relatedTours: related("tour-7-day", "tour-10-day"),
    },
  },

  "tour-photography-7day": {
    taxonomy: {
      regions: ["cairo", "nile-valley", "nubia"],
      durationDays: 7,
      nights: 6,
      difficulty: "moderate",
      travelStyles: ["photography", "luxury", "historical"],
      budgetLevel: "premium",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: false,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: true,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "giza", "luxor", "aswan"),
      categories: cat("multi-day"),
      relatedTours: related("tour-10-day", "tour-luxor-3day"),
    },
  },

  "tour-grand-14day": {
    taxonomy: {
      regions: ["cairo", "mediterranean", "nile-valley", "nubia", "red-sea"],
      durationDays: 14,
      nights: 13,
      difficulty: "moderate",
      travelStyles: ["luxury", "cultural", "historical", "relaxed"],
      budgetLevel: "luxury",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: true,
        flightIncluded: true,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "giza", "alexandria", "aswan", "luxor"),
      categories: cat("multi-day", "nile-cruises"),
      relatedTours: related("tour-10-day", "tour-sharm-5day"),
    },
  },

  "tour-cairo-culture-5day": {
    taxonomy: {
      regions: ["cairo"],
      durationDays: 5,
      nights: 4,
      difficulty: "moderate",
      travelStyles: ["cultural", "historical"],
      budgetLevel: "premium",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "giza"),
      categories: cat("multi-day", "cultural-heritage"),
      relatedTours: related("tour-cairo-vip-3day", "tour-4-day"),
    },
  },

  "tour-sharm-5day": {
    taxonomy: {
      regions: ["red-sea"],
      durationDays: 5,
      nights: 4,
      difficulty: "easy",
      travelStyles: ["luxury", "relaxed", "nature"],
      budgetLevel: "premium",
      seasons: ["spring", "summer", "autumn", "winter"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: false,
        boatIncluded: true,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      categories: cat("multi-day", "coastal"),
      relatedTours: related("tour-red-sea-diving-4day", "tour-grand-14day"),
    },
  },

  "tour-red-sea-diving-4day": {
    taxonomy: {
      regions: ["red-sea"],
      durationDays: 4,
      nights: 3,
      difficulty: "moderate",
      travelStyles: ["adventure", "nature"],
      budgetLevel: "premium",
      seasons: ["spring", "summer", "autumn", "winter"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: false,
        walkingRequired: false,
        boatIncluded: true,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      categories: cat("multi-day", "coastal"),
      relatedTours: related("tour-sharm-5day", "tour-grand-14day"),
    },
  },

  "tour-luxor-3day": {
    taxonomy: {
      regions: ["nile-valley"],
      durationDays: 3,
      nights: 2,
      difficulty: "moderate",
      travelStyles: ["historical", "cultural"],
      budgetLevel: "comfort",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("luxor"),
      categories: cat("multi-day"),
      relatedTours: related("tour-upper-egypt-5day", "tour-3-day"),
    },
  },

  "tour-cairo-vip-3day": {
    taxonomy: {
      regions: ["cairo"],
      durationDays: 3,
      nights: 2,
      difficulty: "easy",
      travelStyles: ["luxury", "cultural", "historical"],
      budgetLevel: "premium",
      seasons: ["autumn", "winter", "spring", "summer"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("cairo", "giza"),
      categories: cat("multi-day", "cultural-heritage"),
      relatedTours: related("tour-cairo-culture-5day", "tour-giza-museum"),
    },
  },

  "tour-alexandria-2day": {
    taxonomy: {
      regions: ["mediterranean"],
      durationDays: 2,
      nights: 1,
      difficulty: "easy",
      travelStyles: ["cultural", "historical", "relaxed"],
      budgetLevel: "comfort",
      seasons: ["spring", "summer", "autumn"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        boatIncluded: false,
        flightIncluded: false,
        accommodationIncluded: true,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("alexandria"),
      categories: cat("multi-day", "coastal"),
      relatedTours: related("tour-alexandria", "tour-4-day"),
    },
  },

  "tour-abu-simbel": {
    taxonomy: {
      regions: ["nubia"],
      durationDays: 1,
      nights: 0,
      difficulty: "easy",
      travelStyles: ["historical", "photography"],
      budgetLevel: "value",
      seasons: ["autumn", "winter", "spring"],
      languages: ["en"],
      features: {
        privateOrGroup: "private",
        familyFriendly: true,
        walkingRequired: true,
        accommodationIncluded: false,
        transferIncluded: true,
      },
    },
    relationships: {
      destinations: dest("aswan"),
      categories: cat("day-tours", "cultural-heritage"),
      relatedTours: related("tour-nile-cruise", "tour-3-day"),
    },
  },
};

/** Structured taxonomy + relationship edges for a tour, by slug. */
export function getTourMeta(slug: string): TourMeta | undefined {
  return tourMetadata[slug];
}
