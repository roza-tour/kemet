// ---------------------------------------------------------------------------
// SEO resolution — one place that turns page/entity inputs into the resolved
// metadata the layout renders (title, description, canonical, OG image). Every
// current and future page inherits the same defaults, so a new page type needs
// no bespoke head logic.
// ---------------------------------------------------------------------------
import { OG_IMAGE_PATH, SITE_URL, site } from "@/config/site";
import { canonical } from "@/utils/links";
import type { SeoMeta } from "@/types";

export interface PageSeoInput {
  title?: string;
  description?: string;
  /** Route file of this page (canonical source), e.g. "tours.html". */
  route?: string;
  /** Share image path relative to the site root; defaults to the site OG image. */
  ogImage?: string;
}

export interface ResolvedSeo {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
}

const DEFAULT_TITLE = `${site.name} — The Black Land`;

/** Resolve page inputs against site defaults. */
export function buildPageSeo(input: PageSeoInput = {}): ResolvedSeo {
  const route = input.route ?? "index.html";
  const image = input.ogImage ?? OG_IMAGE_PATH;
  return {
    title: input.title ?? DEFAULT_TITLE,
    description: input.description ?? site.description,
    canonicalUrl: canonical(route),
    ogImage: `${SITE_URL}${image}`,
  };
}

/**
 * Resolve an entity's optional SeoMeta plus its route into page SEO. Future
 * entity detail pages call this so per-entity overrides and defaults are
 * handled uniformly.
 */
export function entitySeo(
  meta: SeoMeta | undefined,
  route: string,
  fallbackTitle: string,
): ResolvedSeo {
  return buildPageSeo({
    title: meta?.title ?? fallbackTitle,
    description: meta?.description,
    route: meta?.canonical ?? route,
    ogImage: meta?.ogImage,
  });
}
