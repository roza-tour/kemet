// ---------------------------------------------------------------------------
// Primitive, cross-cutting types shared by every content domain.
//
// These are deliberately transport-friendly (plain ids, slugs and references)
// so the same models can be hydrated from local data today or from an API
// later, with no presentation concepts leaking in.
// ---------------------------------------------------------------------------

/** Stable, URL-safe, language-independent identifier (the cross-system key). */
export type ID = string;

/** URL slug used to build a route. May differ from `id` for legacy reasons. */
export type Slug = string;

/** BCP-47 language tag, e.g. "en", "fr", "ar". */
export type Locale = string;

/**
 * The top-level content domains that make up the site's information
 * architecture. Every routable entity belongs to exactly one domain.
 */
export type ContentDomain =
  | "tour"
  | "destination"
  | "experience"
  | "guide"
  | "activity"
  | "category"
  | "seasonal"  // editorial collections
  | "identity"
  | "page"; // company / legal / support / static marketing pages

/**
 * A typed, by-id reference to another entity. Relationships are expressed as
 * references rather than embedded objects, which keeps the data graph acyclic
 * and serialisable (API-ready) and avoids duplicated content.
 */
export interface Ref<D extends ContentDomain = ContentDomain> {
  domain: D;
  id: ID;
}

/**
 * A geographic point. `null` lat/lng means "placeholder, not yet sourced" — the
 * field exists so maps/GeoCoordinates can be added later without a model change,
 * but no coordinates are fabricated now.
 */
export interface GeoPoint {
  lat: number | null;
  lng: number | null;
}

/**
 * A media slot with no binary yet — alt text (for a11y/SEO) and an optional
 * label for the placeholder UI. Real `src`/`width`/`height` are added later
 * without touching consumers.
 */
export interface MediaPlaceholder {
  alt: string;
  label?: string;
  src?: string;
  width?: number;
  height?: number;
}

/** SEO/meta any page-backed entity can carry; unset fields inherit defaults. */
export interface SeoMeta {
  title?: string;
  description?: string;
  /** Canonical route file (relative to site root); defaults to the entity route. */
  canonical?: string;
  /** Share image path; defaults to the site-wide OG image. */
  ogImage?: string;
  /** Exclude from indexing (e.g. thin or duplicate pages). */
  noindex?: boolean;
}

/**
 * The contract every major content entity satisfies. New domains (destinations,
 * experiences, guides, categories, seasonal collections) extend this directly;
 * the legacy Tour conforms to it via its `slug`/`title` plus optional `id`.
 */
export interface ContentEntity {
  /** Stable identifier, unique within the domain. */
  id: ID;
  /** Slug that drives the route. */
  slug: Slug;
  domain: ContentDomain;
  /** Default-locale display title. */
  title: string;
  /** Locales this entity is available in (multi-language readiness). */
  locales?: Locale[];
  seo?: SeoMeta;
}

// --- View-model primitives (presentation layer only) -----------------------

/** A navigation entry: [href, label]. */
export type NavLink = readonly [href: string, label: string];

/** A breadcrumb entry: [name, file] where file is relative to the site root. */
export type BreadcrumbItem = readonly [name: string, file: string];

/** A plain JSON-LD object graph (kept loose by design — schema.org is open). */
export type JsonLd = Record<string, unknown>;
