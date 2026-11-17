// ---------------------------------------------------------------------------
// Turns a language's experience and activity texts into the pages the
// translated-article template renders (components/i18n/LocalizedArticle.astro).
//
// The words come from ./<lang>.ts, the fixed labels from ./labels.ts and
// ../destinations/labels.ts, and everything that is not prose — seasons,
// photographs, what is related to what — from data/experiences.ts and
// data/activities.ts.
//
// Each page is one translation group ("experience-<slug>" or
// "activity-<slug>" in config/translation-groups.json). The build stops if a
// text's address is not the one its group declares, or if the photograph
// captions do not match the English photographs one for one.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import type { LocalizedPage, LocalizedSection } from "../types";
import type { ExpText } from "./types";
import { EXP_LABELS } from "./labels";
import { DEST_LABELS } from "../destinations/labels";
import { experiences } from "@/data/experiences";
import { activities } from "@/data/activities";
import type { MediaPlaceholder } from "@/types";

const withSrc = (p: MediaPlaceholder | undefined): p is MediaPlaceholder => !!p && !!p.src;

export function experiencePages(locale: TranslatedLocale, texts: ExpText[]): LocalizedPage[] {
  const L = EXP_LABELS[locale];
  const D = DEST_LABELS[locale];
  const where = `i18n/experiences/${locale}.ts`;

  return texts.map((t) => {
    const groupId = `${t.kind}-${t.id}`;
    const route = `${locale}/${t.localeSlug}.html`;
    const group = TRANSLATION_GROUPS.find((g) => g.key === groupId);
    if (!group || group[locale] !== route) {
      throw new Error(`${where}: "${t.id}" is at ${route}, but translation-groups.json says ${group ? group[locale] : "nothing (no group)"}.`);
    }

    const exp = t.kind === "experience" ? experiences.find((x) => x.slug === t.id) : undefined;
    const act = t.kind === "activity" ? activities.find((x) => x.slug === t.id) : undefined;
    if (!exp && !act) throw new Error(`${where}: "${t.id}" is not ${t.kind === "experience" ? "an experience" : "an activity"} in the English data.`);

    const shots = (exp ? [exp.hero, ...(exp.gallery ?? [])] : [act!.image]).filter(withSrc);
    if (shots.length !== t.photos.length) {
      throw new Error(`${where}: "${t.id}" has ${t.photos.length} photo captions for ${shots.length} photographs.`);
    }

    // Related pages that exist in this language, by the English relationships.
    const relatedIds = exp
      ? (exp.relationships?.relatedExperiences ?? []).map((r) => r.id)
      : activities.filter((a) => a.slug && !a.canonicalTo && a.slug !== t.id).map((a) => a.slug!);
    const related = relatedIds
      .map((id) => texts.find((x) => x.id === id || (x.kind === "experience" && experiences.find((e) => e.id === id)?.slug === x.id)))
      .filter((x): x is ExpText => !!x && x.id !== t.id)
      .slice(0, 4);

    const list = (title: string, items: string[]): LocalizedSection[] => (items.length ? [{ title, body: "", items }] : []);
    const notes = [t.meetingPoint, t.groupSize, t.availability, t.priceNote].filter(Boolean);
    const sections: LocalizedSection[] = exp
      ? [
          ...list(L.included, t.included),
          ...list(L.excluded, t.excluded),
          ...list(L.prepare, t.prepare),
          ...list(D.know, t.goodToKnow),
          ...list(L.glance, t.keyFacts.map((f) => `${f.label}: ${f.value}`)),
          ...list(L.practical, notes),
        ]
      : [
          ...list(L.goodFor, t.goodFor),
          ...list(D.know, t.goodToKnow),
        ];

    const best = exp ? (exp.bestSeasons ?? []).map((s) => D.seasons[s]).join(D.comma) : t.bestTime;
    const fill = (s: string) => s.replace("%s", t.name);
    return {
      groupId,
      symbol: "lotus",
      title: t.metaTitle,
      description: t.metaDescription,
      keywords: t.keywords,
      crumb: t.name,
      h1: t.name,
      standfirst: t.summary,
      lede: t.description,
      facts: [
        { label: L.duration, value: t.duration },
        { label: L.where, value: t.where },
        ...(best ? [{ label: D.best, value: best }] : []),
      ],
      sections,
      highlights: { heading: exp ? D.highlights : L.expect, items: t.highlights },
      faqs: t.faqs,
      cta: { heading: D.cta.heading, text: D.cta.text, whatsapp: fill(L.whatsapp), emailSubject: fill(D.cta.emailSubject) },
      moreLabel: D.moreLabel,
      moreText: L.moreText,
      links: related.map((r) => ({ label: r.name, route: `${locale}/${r.localeSlug}.html` })),
      photos: shots.map((p, i) => ({ ...p, alt: t.photos[i].alt, label: t.photos[i].label })),
    };
  });
}
