// ---------------------------------------------------------------------------
// Turns a language's occasion and guide texts into translated-article pages.
// Each is one translation group ("occasion-<slug>" / "guide-<slug>"); the build
// stops if a text's address is not the one its group declares.
//
// NOT EVERY GROUP HAS A TEXT HERE: where a language already had its own page on
// the subject (the Italian "dove dormire in Egitto"), the group points at that
// page and no second one is built.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import type { LocalizedPage } from "../types";
import type { ArtText, ArtLabels } from "./types";
import { occasions } from "@/data/occasions";
import { guides } from "@/data/guides";

export function articlePages(locale: TranslatedLocale, L: ArtLabels, texts: ArtText[]): LocalizedPage[] {
  const where = `i18n/articles/${locale}.ts`;
  return texts.map((t) => {
    const src = t.kind === "occasion" ? occasions.find((x) => x.slug === t.id) : guides.find((x) => x.slug === t.id);
    if (!src) throw new Error(`${where}: "${t.id}" is not ${t.kind === "occasion" ? "an occasion" : "a guide"} in the English data.`);
    const route = `${locale}/${t.localeSlug}.html`;
    const group = TRANSLATION_GROUPS.find((g) => g.key === `${t.kind}-${t.id}`);
    if (!group || group[locale] !== route) {
      throw new Error(`${where}: "${t.id}" is at ${route}, but translation-groups.json says ${group ? group[locale] : "nothing (no group)"}.`);
    }
    const fill = (s: string) => s.replace("%s", t.title);
    const hero = (src as { hero?: { src?: string; alt: string; width?: number; height?: number; label?: string } }).hero;
    return {
      groupId: `${t.kind}-${t.id}`,
      symbol: (src as { symbol?: string }).symbol ?? "lotus",
      title: t.metaTitle,
      description: t.metaDescription,
      keywords: t.keywords,
      crumb: t.title,
      h1: t.title,
      standfirst: t.summary,
      lede: t.lede,
      ...(t.facts.length ? { facts: t.facts } : {}),
      sections: t.sections.map((s) => ({ title: s.title, body: s.body, ...(s.items.length ? { items: s.items } : {}) })),
      ...(t.highlights ? { highlights: t.highlights } : {}),
      faqs: t.faqs,
      cta: { heading: L.ctaHeading, text: L.ctaText, whatsapp: fill(L.whatsapp), emailSubject: fill(L.emailSubject) },
      moreLabel: L.moreLabel,
      moreText: L.moreText,
      links: texts.filter((x) => x.id !== t.id && x.kind === t.kind).map((x) => ({ label: x.title, route: `${locale}/${x.localeSlug}.html` })),
      ...(hero?.src ? { photos: [{ ...hero, alt: hero.alt, label: hero.label ?? t.title } as never] } : {}),
    };
  });
}
