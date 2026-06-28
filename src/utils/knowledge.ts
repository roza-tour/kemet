// ---------------------------------------------------------------------------
// Knowledge scoring engine — pure build-time utilities.
// No imports from data files. No side-effects. No runtime JS.
//
// Entities are represented as EntitySignals — a normalised, domain-agnostic
// signal vector. Callers (registry.ts) extract signals from typed entities;
// this file only contains the maths.
// ---------------------------------------------------------------------------

export interface EntitySignals {
  id: string;
  destinationIds?: string[];
  regionIds?: string[];
  travelStyles?: string[];
  seasons?: string[];
  categoryIds?: string[];
  difficulty?: string;
  /** 0–10 editorial boost applied by authors. Default: 0. */
  editorialBoost?: number;
}

export interface ScoringWeights {
  sharedDestination: number;
  sharedRegion: number;
  sharedTravelStyle: number;
  sharedSeason: number;
  sharedCategory: number;
  sharedDifficulty: number;
  editorialBoost: number;
}

const DEFAULT_WEIGHTS: ScoringWeights = {
  sharedDestination: 5,
  sharedRegion: 2,
  sharedTravelStyle: 3,
  sharedSeason: 1,
  sharedCategory: 2,
  sharedDifficulty: 1,
  editorialBoost: 4,
};

function intersectCount(a?: string[], b?: string[]): number {
  if (!a?.length || !b?.length) return 0;
  const setB = new Set(b);
  return a.filter((v) => setB.has(v)).length;
}

/** Score a candidate against a source using the weighted signal vector. */
export function scoreSignals(
  source: EntitySignals,
  candidate: EntitySignals,
  weights: ScoringWeights = DEFAULT_WEIGHTS,
): number {
  if (source.id === candidate.id) return -1;

  let score = 0;

  const destHits = intersectCount(source.destinationIds, candidate.destinationIds);
  score += destHits * weights.sharedDestination;

  const regionHits = intersectCount(source.regionIds, candidate.regionIds);
  score += regionHits * weights.sharedRegion;

  const styleHits = intersectCount(source.travelStyles, candidate.travelStyles);
  score += styleHits * weights.sharedTravelStyle;

  const seasonHits = intersectCount(source.seasons, candidate.seasons);
  score += seasonHits * weights.sharedSeason;

  const catHits = intersectCount(source.categoryIds, candidate.categoryIds);
  score += catHits * weights.sharedCategory;

  if (
    source.difficulty &&
    candidate.difficulty &&
    source.difficulty === candidate.difficulty
  ) {
    score += weights.sharedDifficulty;
  }

  score += (candidate.editorialBoost ?? 0) * weights.editorialBoost;

  return score;
}

export interface RankOptions {
  limit?: number;
  minScore?: number;
}

/**
 * Rank candidates by relevance to source and return the top entities.
 * Candidates with score ≤ 0 are excluded (no signal overlap with source).
 */
export function rankByRelevance<T>(
  source: EntitySignals,
  candidates: Array<{ entity: T; signals: EntitySignals }>,
  options: RankOptions = {},
): T[] {
  const { limit = 3, minScore = 1 } = options;

  return candidates
    .map(({ entity, signals }) => ({
      entity,
      score: scoreSignals(source, signals),
    }))
    .filter(({ score }) => score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entity }) => entity);
}
