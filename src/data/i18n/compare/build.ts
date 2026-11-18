// Turns a language's comparison texts into translated-article pages. Each is one
// translation group ("compare-<slug>"); the build stops if the address disagrees.
import type { TranslatedLocale } from "@/config/i18n";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import type { LocalizedPage } from "../types";
import type { CompText, CompLabels } from "./types";
import { comparisons } from "@/data/comparisons";

export function comparePages(locale: TranslatedLocale, L: CompLabels, texts: CompText[]): LocalizedPage[] {
  const where = `i18n/compare/${locale}.ts`;
  return texts.map((t) => {
    const c = comparisons.find((x) => x.slug === t.id);
    if (!c) throw new Error(`${where}: "${t.id}" is not a comparison in data/comparisons.ts.`);
    const route = `${locale}/${t.localeSlug}.html`;
    const group = TRANSLATION_GROUPS.find((g) => g.key === `compare-${t.id}`);
    if (!group || group[locale] !== route) {
      throw new Error(`${where}: "${t.id}" is at ${route}, but translation-groups.json says ${group ? group[locale] : "nothing (no group)"}.`);
    }
    if (t.rows.length !== c.rows.length) throw new Error(`${where}: "${t.id}" has ${t.rows.length} rows; the English has ${c.rows.length}.`);
    const fill = (s: string) => s.replace("%s", t.title);
    return {
      groupId: `compare-${t.id}`,
      symbol: c.symbol,
      title: t.metaTitle,
      description: t.metaDescription,
      keywords: t.keywords,
      crumb: t.title,
      h1: t.title,
      standfirst: t.shortSummary,
      lede: t.lede,
      sections: [
        { title: L.verdict, body: t.verdict },
        { title: L.sideBySide, body: "", items: t.rows.map((r) => `${r.aspect} — ${t.optionA}: ${r.a} · ${t.optionB}: ${r.b}`) },
        { title: t.chooseA.heading, body: "", items: t.chooseA.points },
        { title: t.chooseB.heading, body: "", items: t.chooseB.points },
        ...t.sections.map((s) => ({ title: s.title, body: s.body })),
      ],
      faqs: t.faqs,
      cta: { heading: L.ctaHeading, text: L.ctaText, whatsapp: fill(L.whatsapp), emailSubject: fill(L.emailSubject) },
      moreLabel: L.moreLabel,
      moreText: L.moreText,
      links: texts.filter((x) => x.id !== t.id).map((x) => ({ label: x.title, route: `${locale}/${x.localeSlug}.html` })),
    };
  });
}
