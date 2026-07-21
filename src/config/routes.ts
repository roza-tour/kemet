// ---------------------------------------------------------------------------
// URL strategy — one predictable, collision-free routing convention for every
// content domain. This module does NOT create pages; it defines the conventions
// future pages (and canonical/sitemap/breadcrumb logic) follow.
//
// Hosting reality: static `.html` files on cPanel (build.format: "file").
//
// Conventions
//   • Main marketing pages  →  /<name>.html               (root, flat — existing)
//   • Tours                 →  /<slug>.html               (root, flat — existing,
//                              slug already carries the "tour-" prefix; grandfathered)
//   • All future domains    →  /<segment>/<slug>.html     (namespaced subfolders)
//
// Namespacing every NEW domain under its own segment guarantees no collision
// with the root tour namespace, with the main pages, or with each other —
// however many hundreds of pages are added.
// ---------------------------------------------------------------------------
import type { ContentDomain, Locale } from "@/types";

/** Default locale is served unprefixed so existing URLs never change. Future
 *  locales are prefixed: /fr/..., /ar/... (see localizedPath). */
export const DEFAULT_LOCALE: Locale = "en";

/** Existing flat main pages (root, grandfathered). */
export const MAIN_PAGES = [
  "index.html",
  "tours.html",
  "identities.html",
  "activities.html",
  "cuisine.html",
  "culture.html",
  "about.html",
  "contact.html",
  "booking.html",
  "faq.html",
] as const;

/**
 * Per-domain URL segment. `null` means the domain lives flat at the root
 * (grandfathered). Every future domain gets a dedicated subfolder segment.
 */
export const DOMAIN_SEGMENT: Record<ContentDomain, string | null> = {
  tour: null, // /<slug>.html  (existing flat URLs preserved)
  page: null, // /<name>.html  (company/legal/support landing handled per-page)
  identity: null, // taxonomy landing, currently /identities.html
  destination: "destinations",
  experience: "experiences",
  guide: "guides",
  category: "categories",
  seasonal: "collections",
  activity: "activities", // /activities.html today; detail pages → /activities/<slug>.html
};

/** Reserved root slugs a flat (tour/page) route must never reuse, to protect
 *  the main pages and key future namespaces from collisions. */
export const RESERVED_ROOT_SLUGS: ReadonlySet<string> = new Set([
  ...MAIN_PAGES.map((f) => f.replace(/\.html$/, "")),
  "destinations",
  "experiences",
  "guides",
  "categories",
  "collections",
  "company",
  "legal",
  "support",
  "search",
  "sitemap",
]);

/** True if a slug would collide with a reserved root name. */
export function isReservedRootSlug(slug: string): boolean {
  return RESERVED_ROOT_SLUGS.has(slug);
}

/**
 * Canonical route file for an entity, e.g.
 *   routeFor("tour", "tour-7-day")        → "tour-7-day.html"
 *   routeFor("destination", "luxor")      → "destinations/luxor.html"
 */
export function routeFor(domain: ContentDomain, slug: string): string {
  const segment = DOMAIN_SEGMENT[domain];
  return segment ? `${segment}/${slug}.html` : `${slug}.html`;
}

/**
 * Section-hub route file for a namespaced domain. With build.format "file" a
 * folder's index.astro emits a FLAT file (`destinations/index.astro` →
 * `destinations.html`), which matches the site's flat-hub convention
 * (`tours.html`). Detail pages stay namespaced under the folder
 * (`destinations/<slug>.html` via routeFor). Defining the hub path here once
 * keeps nav, breadcrumbs and the hero link from drifting apart.
 *   hubFor("destination") → "destinations.html"
 */
export function hubFor(domain: ContentDomain): string {
  const segment = DOMAIN_SEGMENT[domain];
  return segment ? `${segment}.html` : `${domain}.html`;
}

/** Prefix a route with a locale (default locale stays unprefixed). */
export function localizedPath(file: string, locale: Locale = DEFAULT_LOCALE): string {
  return locale === DEFAULT_LOCALE ? file : `${locale}/${file}`;
}

/**
 * Relative path prefix from a route's directory back to the site root, so
 * shared components emit links that resolve from any depth. Root pages get ""
 * (output unchanged); a page at "destinations/cairo.html" gets "../".
 * Every internal link is then `${base}${rootRelativeFile}`.
 */
export function relativePrefix(route: string): string {
  const depth = route.split("/").length - 1;
  return "../".repeat(depth);
}

/** getStaticPaths entries for the grandfathered root tour route. */
export function tourStaticPaths<T extends { slug: string }>(
  tours: readonly T[],
): { params: { slug: string }; props: { tour: T } }[] {
  return tours.map((tour) => ({ params: { slug: tour.slug }, props: { tour } }));
}

/**
 * Generic getStaticPaths builder for any namespaced [slug] route (destinations,
 * and later experiences/guides/categories). One entry per entity, keyed by
 * slug, with the entity passed through as the `entity` prop. Adding a domain's
 * detail route is then a three-line page; adding an entity is data-only. This
 * is what lets the routing scale to 50/100/500 destinations with no
 * architectural change — the page count tracks the data, nothing else.
 */
export function entityStaticPaths<T extends { slug: string }>(
  entities: readonly T[],
): { params: { slug: string }; props: { entity: T } }[] {
  return entities.map((entity) => ({ params: { slug: entity.slug }, props: { entity } }));
}
