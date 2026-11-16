// ---------------------------------------------------------------------------
// Turns a language's destination texts into the pages the translated-article
// template renders (components/i18n/LocalizedArticle.astro).
//
// The words come from ./<lang>.ts, the fixed labels from ./labels.ts, and
// everything that is not prose — region, seasons, photographs, neighbours —
// from data/destinations.ts, so a fact changed there changes in ten languages.
//
// Each destination is one translation group ("destination-<id>" in
// config/translation-groups.json). The build stops if a text's address is not
// the one the group declares, or if the photograph captions do not match the
// English photographs one for one.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import type { LocalizedPage } from "../types";
import type { DestText } from "./types";
import { DEST_LABELS } from "./labels";
import { DEST_HUB, destHubRoute } from "./hub";
import { destinations } from "@/data/destinations";

export function destinationPages(locale: TranslatedLocale, texts: DestText[]): LocalizedPage[] {
  const L = DEST_LABELS[locale];
  return texts.map((t) => {
    const d = destinations.find((x) => x.id === t.id);
    if (!d) throw new Error(`i18n/destinations/${locale}.ts: "${t.id}" is not a destination in data/destinations.ts.`);
    const route = `${locale}/${t.localeSlug}.html`;
    const group = TRANSLATION_GROUPS.find((g) => g.key === `destination-${t.id}`);
    if (!group || group[locale] !== route) {
      throw new Error(`i18n/destinations/${locale}.ts: "${t.id}" is at ${route}, but translation-groups.json says ${group ? group[locale] : "nothing (no group)"}.`);
    }
    const shots = [d.hero, ...(d.gallery ?? [])].filter((p) => p && p.src);
    if (shots.length !== t.photos.length) {
      throw new Error(`i18n/destinations/${locale}.ts: "${t.id}" has ${t.photos.length} photo captions for ${shots.length} photographs.`);
    }
    const near = (d.relationships?.nearbyDestinations ?? [])
      .map((n) => texts.find((x) => x.id === n.id))
      .filter((x): x is DestText => !!x);
    const fill = (s: string) => s.replace("%s", t.name);
    return {
      groupId: `destination-${t.id}`,
      symbol: d.symbol ?? "sun",
      title: t.metaTitle,
      description: t.metaDescription,
      keywords: t.keywords,
      crumb: t.name,
      h1: t.name,
      standfirst: t.summary,
      lede: t.description,
      facts: [
        { label: L.region, value: L.regions[d.region] ?? d.region },
        { label: L.stay, value: t.stay },
        { label: L.best, value: (d.bestSeasons ?? []).map((s) => L.seasons[s]).join(L.comma) },
      ],
      sections: [
        { title: L.why, body: "", items: t.whyVisit },
        { title: L.know, body: "", items: t.thingsToKnow },
        { title: L.when, body: t.climate },
      ],
      highlights: { heading: L.highlights, items: t.highlights },
      faqs: t.faqs,
      cta: { heading: L.cta.heading, text: L.cta.text, whatsapp: fill(L.cta.whatsapp), emailSubject: fill(L.cta.emailSubject) },
      moreLabel: L.moreLabel,
      moreText: L.moreText,
      links: [
        ...near.map((n) => ({ label: n.name, route: `${locale}/${n.localeSlug}.html` })),
        { label: DEST_HUB[locale].all, route: destHubRoute(locale) },
      ],
      photos: shots.map((p, i) => ({ ...p!, alt: t.photos[i].alt, label: t.photos[i].label })),
    };
  });
}
