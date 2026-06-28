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
import type { Destination, Experience, Guide, Tour } from "@/types";

export const registry = new ContentRegistry()
  .register("destination", destinations)
  .register("tour", toursByOrder)
  .register("activity", activities)
  .register("guide", guides)
  .register("experience", experiences);

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
