// ---------------------------------------------------------------------------
// One answer to "what are this page's alternates?", from two registries.
//
// The site has two kinds of translation cluster and they cannot live in the
// same file:
//
//   · config/i18n.ts — the eight funnel pages, COMPLETE by construction. The
//     build fails if a group is missing any of the ten locales, which is the
//     right guarantee for the pages the site promises in every language.
//   · config/tour-i18n.ts — the catalogue, PARTIAL on purpose. 25 journeys ×
//     9 languages is 225 pages that will not land on the same day, and
//     hreflang only requires a cluster to be reciprocal, never complete.
//
// tour-i18n imports i18n for LOCALE_META, so i18n cannot import it back
// without a cycle whose evaluation order would depend on which module the
// bundler happened to reach first. This module imports both and is what
// pages call, which keeps the dependency flowing one way.
// ---------------------------------------------------------------------------
import type { Alternate } from "@/config/i18n";
import { alternatesFor } from "@/config/i18n";
import { tourAlternatesFor } from "@/config/tour-i18n";

/** The full, self-referential hreflang set for any route on the site. */
export function allAlternatesFor(route: string): Alternate[] {
  const group = alternatesFor(route);
  return group.length ? group : tourAlternatesFor(route);
}
