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
import { alternatesFor, LOCALES, LOCALE_META } from "@/config/i18n";
import registry from "@/config/translation-groups.json";
import { tourAlternatesFor } from "@/config/tour-i18n";

// A third, small kind: a subject published in English and SOME of the other
// languages, where the missing one is a decision and not a gap (Christmas and
// New Year has no Arabic edition). translation-groups.json → `partial`.
const PARTIAL = ((registry as { partial?: Array<Record<string, string>> }).partial ?? []).map((g) =>
  LOCALES.filter((loc) => g[loc]).map((loc) => ({ hreflang: LOCALE_META[loc].tag, route: g[loc] })),
);

/** The full, self-referential hreflang set for any route on the site. */
export function allAlternatesFor(route: string): Alternate[] {
  const group = alternatesFor(route);
  if (group.length) return group;
  const partial = PARTIAL.find((set) => set.some((a) => a.route === route));
  if (partial) return [...partial, { hreflang: "x-default", route: partial.find((a) => a.hreflang === "en")!.route }];
  return tourAlternatesFor(route);
}
