// ---------------------------------------------------------------------------
// The links between a language's own pages that no single builder can write.
//
// WHY THIS EXISTS
// The month, comparison, occasion and guide pages were added family by family,
// each builder linking a page to its siblings. Nothing linked INTO a family
// from the rest of its language: the German "best time" page did not link to
// one German month, and there is no German hub for comparisons, occasions or
// guides at all. Measured on 24 Nov 2026, 269 translated pages (30 in each
// language) could not be reached from their own language's home page by
// following same-language links — they were held up by the sitemap and by
// the language switcher on the English original, and nothing else.
//
// WHAT IT DOES
// Given the whole set of a language's pages, it hangs each family from the
// page a reader would look for it on:
//
//     the twelve months      → that language's "when to go" page
//     comparisons, occasions → that language's journeys page
//     the general guides     → that language's home page
//
// and gives every page in those families a way back up. It works on the
// finished set, so a new month, comparison or guide in any language is linked
// the day it is added, with nothing to remember.
// ---------------------------------------------------------------------------
import { TRANSLATION_GROUPS } from "@/config/i18n";
import type { TranslatedLocale } from "@/config/i18n";
import type { LocalizedPage } from "./types";
import { LOCAL_STRINGS } from "./strings";

type Link = { label: string; route: string };

export function withCrossLinks(locale: TranslatedLocale, pages: LocalizedPage[]): LocalizedPage[] {
  const S = LOCAL_STRINGS[locale].ui;
  const routeOf = (p: LocalizedPage): string | undefined =>
    TRANSLATION_GROUPS.find((g) => g.key === p.groupId)?.[locale];
  const family = (prefix: string): Link[] =>
    pages
      .filter((p) => p.groupId.startsWith(prefix))
      .map((p) => ({ label: p.crumb, route: routeOf(p) }))
      .filter((l): l is Link => !!l.route);
  const hub = (key: string): Link | undefined => {
    const p = pages.find((x) => x.groupId === key);
    const route = p && routeOf(p);
    return p && route ? { label: p.crumb, route } : undefined;
  };

  const months = family("month-");
  const compare = family("compare-");
  const occasions = family("occasion-");
  const guides = family("guide-");
  const journeys = hub("journeys");

  const down: Record<string, Array<{ heading: string; links: Link[] }>> = {
    "when-to-go": [{ heading: S.monthByMonth, links: months }],
    journeys: [
      { heading: S.compareOptions, links: compare },
      { heading: S.byOccasion, links: occasions },
    ],
    home: [{ heading: S.travelGuides, links: guides }],
  };

  // Two pages answer "when should I go": the hub, month by month, and the
  // guide, season by season. Each names the other, so they read as two halves
  // of one answer and not as two pages competing for it.
  const whenHub = hub("when-to-go");
  const seasonGuide = hub("guide-best-time-to-visit-egypt");
  const pair: Record<string, Link | undefined> = {
    "when-to-go": seasonGuide,
    "guide-best-time-to-visit-egypt": whenHub,
  };

  return pages.map((p0) => {
    const other = pair[p0.groupId];
    const p = other && !p0.links?.some((l) => l.route === other.route)
      ? { ...p0, links: [...(p0.links ?? []), other] }
      : p0;
    const further = (down[p.groupId] ?? []).filter((b) => b.links.length);
    // The way back up. Months already name their hub; comparisons and
    // occasions go to the journeys page, where they are listed.
    const up = journeys && /^(compare|occasion)-/.test(p.groupId) && !p.links?.some((l) => l.route === journeys.route)
      ? [journeys]
      : [];
    if (!further.length && !up.length) return p;
    return {
      ...p,
      ...(further.length ? { further: [...(p.further ?? []), ...further] } : {}),
      ...(up.length ? { links: [...(p.links ?? []), ...up] } : {}),
    };
  });
}
