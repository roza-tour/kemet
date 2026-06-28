// ---------------------------------------------------------------------------
// Relationship resolution — generic, presentation-free primitives for turning
// by-id references into entities, and for deriving inverse relationships.
//
// Storing each conceptual edge once (on its canonical side) and deriving the
// inverse here is what keeps the content graph acyclic, duplication-free and
// trivial to feed from an API later. No domain knowledge lives here.
// ---------------------------------------------------------------------------
import type { ContentDomain, Ref } from "@/types";

/** The minimum a registry needs to key an entity. */
export interface Keyed {
  id?: string;
  slug?: string;
}

/** Stable key for an entity: prefer `id`, fall back to `slug`. */
export function keyOf(entity: Keyed): string {
  const key = entity.id ?? entity.slug;
  if (!key) throw new Error("Entity has neither an id nor a slug");
  return key;
}

/**
 * An in-memory index of entities by domain and id. A single registry can hold
 * every domain, so a Ref<domain, id> resolves to its entity regardless of type.
 */
export class ContentRegistry {
  private readonly domains = new Map<ContentDomain, Map<string, Keyed>>();

  register(domain: ContentDomain, entities: readonly Keyed[]): this {
    const map = this.domains.get(domain) ?? new Map<string, Keyed>();
    for (const entity of entities) map.set(keyOf(entity), entity);
    this.domains.set(domain, map);
    return this;
  }

  get<E extends Keyed = Keyed>(domain: ContentDomain, id: string): E | undefined {
    return this.domains.get(domain)?.get(id) as E | undefined;
  }

  all<E extends Keyed = Keyed>(domain: ContentDomain): E[] {
    return [...(this.domains.get(domain)?.values() ?? [])] as E[];
  }

  /** Resolve references to entities; unknown refs are skipped (graceful). */
  resolve<E extends Keyed = Keyed>(refs: readonly Ref[] = []): E[] {
    const out: E[] = [];
    for (const ref of refs) {
      const entity = this.get<E>(ref.domain, ref.id);
      if (entity) out.push(entity);
    }
    return out;
  }
}

/**
 * Derive an inverse index from a one-directional relationship — e.g. tours that
 * each list their destinations → Map<destinationId, Tour[]>. This produces
 * "a Destination contains many Tours" without ever storing (and risking drift
 * in) the reverse edge.
 */
export function deriveInverse<S>(
  sources: readonly S[],
  getRefs: (source: S) => readonly Ref[] | undefined,
): Map<string, S[]> {
  const index = new Map<string, S[]>();
  for (const source of sources) {
    for (const ref of getRefs(source) ?? []) {
      const list = index.get(ref.id) ?? [];
      list.push(source);
      index.set(ref.id, list);
    }
  }
  return index;
}
