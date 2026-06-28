// ---------------------------------------------------------------------------
// Content registry — the single wired instance of the relationship engine.
// Every domain registers here, so any Ref resolves to its entity and inverse
// relationships are derived once (never hand-maintained, never duplicated).
//
// This is the integration point the brief calls for: destinations participate
// in relationships, navigation, search/filter prep and future recommendations
// through this one graph.
// ---------------------------------------------------------------------------
import { ContentRegistry, deriveInverse } from "@/utils/relationships";
import { toursByOrder } from "@/data/tours";
import { getTourMeta } from "@/data/tours.taxonomy";
import { destinations } from "@/data/destinations";
import { activities } from "@/data/activities";
import { guides } from "@/data/guides";
import { experiences } from "@/data/experiences";
import { collections } from "@/data/collections";
import { rankByRelevance, type EntitySignals } from "@/utils/knowledge";
import type { Collection, Destination, Experience, Guide, Tour } from "@/types";

export const registry = new ContentRegistry()
  .register("destination", destinations)
  .register("tour", toursByOrder)
  .register("activity", activities)
  .register("guide", guides)
  .register("experience", experiences)
  .register("seasonal", collections);

/**
 * Inverse of the canonical Tour→Destination edge: Map<destinationId, Tour[]>.
 * "A destination contains many tours" is derived here, so adding a tour with a
 * destination ref automatically surfaces it on that destination — no edit to
 * the destination data.
 */
export const toursByDestination = deriveInverse(
  toursByOrder,
  (tour) => getTourMeta(tour.slug)?.relationships?.destinations,
);

/** Tours that belong to a destination, in catalogue order. */
export function relatedTours(destinationId: string): Tour[] {
  return toursByDestination.get(destinationId) ?? [];
}

/** Resolve a destination's authored nearby-destination refs to entities. */
export function nearbyDestinations(destination: Destination): Destination[] {
  return registry.resolve<Destination>(destination.relationships?.nearbyDestinations);
}

/**
 * Experiences that belong to a destination, derived from the canonical
 * Experience→Destination edge (never stored on the destination). Adding an
 * experience with a destination ref surfaces it here automatically — no change
 * to the destination data, components or pages.
 */
export function relatedExperiences(destinationId: string): Experience[] {
  return registry
    .all<Experience>("experience")
    .filter((e) =>
      e.relationships?.destinations?.some((ref) => ref.id === destinationId),
    );
}

/**
 * Resolve an experience's authored relatedExperiences refs to entities. These
 * are the editorial "similar experiences" cross-links stored on the canonical side.
 */
export function resolveRelatedExperiences(exp: Experience): Experience[] {
  return registry.resolve<Experience>(exp.relationships?.relatedExperiences ?? []);
}

/**
 * Inverse of the canonical Guide→Destination edge: Map<destinationId, Guide[]>.
 * A destination's guide list is derived here — never hand-maintained on the
 * destination. Adding a guide with destination refs surfaces it automatically.
 */
export const guidesByDestination = deriveInverse(
  guides,
  (g) => g.relationships?.destinations,
);

/** Guides that relate to a destination, in catalogue order. */
export function relatedGuidesForDestination(destinationId: string): Guide[] {
  return guidesByDestination.get(destinationId) ?? [];
}

/** Inverse of the canonical Guide→Tour edge: Map<tourId, Guide[]>. */
export const guidesByTour = deriveInverse(
  guides,
  (g) => g.relationships?.tours,
);

/** Guides that relate to a tour. */
export function relatedGuidesForTour(tourId: string): Guide[] {
  return guidesByTour.get(tourId) ?? [];
}

/**
 * Resolve a guide's authored relatedGuides refs to entities. These are the
 * editorial "further reading" cross-links stored on the guide's canonical side.
 */
export function resolveRelatedGuides(g: Guide): Guide[] {
  return registry.resolve<Guide>(g.relationships?.relatedGuides ?? []);
}

// ---------------------------------------------------------------------------
// Knowledge Graph — signal extractors + scored recommendation functions.
// All computation happens at build time. No runtime JS.
// ---------------------------------------------------------------------------

/** Normalised signal vector for a tour (derived from taxonomy side-car). */
function tourSignals(tour: Tour): EntitySignals {
  const meta = getTourMeta(tour.slug);
  return {
    id: tour.slug,
    destinationIds: meta?.relationships?.destinations?.map((r) => r.id),
    regionIds: meta?.taxonomy?.regions,
    travelStyles: meta?.taxonomy?.travelStyles,
    seasons: meta?.taxonomy?.seasons,
    categoryIds: meta?.relationships?.categories?.map((r) => r.id),
    difficulty: meta?.taxonomy?.difficulty,
  };
}

/** Normalised signal vector for a guide. */
function guideSignals(guide: Guide): EntitySignals {
  const destIds = guide.relationships?.destinations?.map((r) => r.id);
  // Planning/practical guides pair well with any tour — include as broad category
  const isPlanningGuide = ["planning", "practical", "overview", "seasonal"].includes(
    guide.guideType ?? "",
  );
  return {
    id: guide.slug,
    destinationIds: destIds,
    categoryIds: guide.category
      ? [guide.category, ...(isPlanningGuide ? ["planning-resources"] : [])]
      : isPlanningGuide
        ? ["planning-resources"]
        : [],
  };
}

/** Normalised signal vector for an experience. */
function experienceSignals(exp: Experience): EntitySignals {
  const travelStyles: string[] = [];
  if (exp.luxuryFriendly) travelStyles.push("luxury");
  if (exp.adventureFriendly) travelStyles.push("adventure");
  if (exp.familyFriendly) travelStyles.push("family");
  return {
    id: exp.slug,
    destinationIds: exp.relationships?.destinations?.map((r) => r.id),
    regionIds: [exp.region],
    travelStyles,
    seasons: exp.bestSeasons,
    categoryIds: [exp.category],
    difficulty: exp.difficulty,
  };
}

/** Scored similar tours for a given tour (same destinations / travel styles). */
export function findSimilarTours(tour: Tour, limit = 3): Tour[] {
  const source = tourSignals(tour);
  const candidates = registry
    .all<Tour>("tour")
    .filter((t) => t.slug !== tour.slug)
    .map((t) => ({ entity: t, signals: tourSignals(t) }));
  return rankByRelevance(source, candidates, { limit });
}

/**
 * Preparation guides most relevant to a tour.
 * Guides are matched on shared destinations or as planning resources.
 * A category "planning-resources" is added to guides of type planning/practical/overview.
 * Tours receive the same category so they score against such guides.
 */
export function findPreparationGuides(tour: Tour, limit = 3): Guide[] {
  const meta = getTourMeta(tour.slug);
  const source: EntitySignals = {
    ...tourSignals(tour),
    categoryIds: [
      ...(meta?.relationships?.categories?.map((r) => r.id) ?? []),
      "planning-resources",
    ],
  };
  const candidates = guides.map((g) => ({ entity: g, signals: guideSignals(g) }));
  return rankByRelevance(source, candidates, { limit });
}

/**
 * Experiences most relevant to a guide.
 * Matched on shared destinations.
 */
export function findRelatedExperiencesForGuide(guide: Guide, limit = 3): Experience[] {
  const source = guideSignals(guide);
  const candidates = registry
    .all<Experience>("experience")
    .map((e) => ({ entity: e, signals: experienceSignals(e) }));
  return rankByRelevance(source, candidates, { limit });
}

/** Normalised signal vector for a collection. */
function collectionSignals(col: Collection): EntitySignals {
  return {
    id: col.slug,
    destinationIds: col.relationships?.destinations?.map((r) => r.id),
    travelStyles: col.travelStyles,
    seasons: col.seasons,
    categoryIds: [col.collectionType],
    editorialBoost: col.featured ? 2 : 0,
  };
}

/**
 * Resolve a collection's authored relatedCollections refs to entities.
 */
export function resolveRelatedCollections(col: Collection): Collection[] {
  return registry.resolve<Collection>(col.relationships?.relatedCollections ?? []);
}

/**
 * Scored related collections for a given collection.
 * Matches on shared travel styles, seasons and destination overlap.
 */
export function findRelatedCollections(col: Collection, limit = 3): Collection[] {
  const source = collectionSignals(col);
  const candidates = registry
    .all<Collection>("seasonal")
    .filter((c) => c.slug !== col.slug)
    .map((c) => ({ entity: c, signals: collectionSignals(c) }));
  return rankByRelevance(source, candidates, { limit });
}
