// ---------------------------------------------------------------------------
// Turns a language's month texts into pages for the translated-article
// template. Each month is one translation group ("month-<slug>"); the build
// stops if a text's address is not the one the group declares.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import type { LocalizedPage } from "../types";
import type { MonthText, MonthLabels } from "./types";
import { months } from "@/data/months";

export function monthPages(locale: TranslatedLocale, L: MonthLabels, texts: MonthText[]): LocalizedPage[] {
  const where = `i18n/months/${locale}.ts`;
  const hub = TRANSLATION_GROUPS.find((g) => g.key === "when-to-go");
  return texts.map((t) => {
    const m = months.find((x) => x.slug === t.id);
    if (!m) throw new Error(`${where}: "${t.id}" is not a month in data/months.ts.`);
    const route = `${locale}/${t.localeSlug}.html`;
    const group = TRANSLATION_GROUPS.find((g) => g.key === `month-${t.id}`);
    if (!group || group[locale] !== route) {
      throw new Error(`${where}: "${t.id}" is at ${route}, but translation-groups.json says ${group ? group[locale] : "nothing (no group)"}.`);
    }
    const at = (i: number) => texts.find((x) => months.find((y) => y.slug === x.id)?.index === ((i + 11) % 12) + 1);
    const prev = at(m.index - 1), next = at(m.index + 1);
    const fill = (s: string) => s.replace("%s", t.monthName);
    // Arabic pages write their numbers in Arabic-Indic digits, as the rest of the Arabic site does.
    const n = (v: string) => (locale === "ar" ? v.replace(/[0-9]/g, (d) => String.fromCharCode(0x660 + Number(d))) : v);
    return {
      groupId: `month-${t.id}`,
      symbol: "sun",
      title: t.metaTitle,
      description: t.metaDescription,
      keywords: t.keywords,
      crumb: t.title,
      h1: t.title,
      standfirst: t.shortSummary,
      lede: t.lede,
      facts: [
        { label: L.luxor, value: n(m.temps.luxor) },
        { label: L.cairo, value: n(m.temps.cairo) },
        { label: L.aswan, value: n(m.temps.aswan) },
        { label: L.redSea, value: n(`${m.temps.redSea} · ${L.sea} ${m.seaTemp}`) },
        { label: L.crowds, value: L.crowdLevels[m.crowds] },
        { label: L.prices, value: L.priceLevels[m.prices] },
      ],
      sections: [
        { title: L.goodFor, body: "", items: t.goodFor },
        { title: L.watchFor, body: "", items: t.watchFor },
        { title: L.occasions, body: t.occasions },
        { title: L.verdict, body: t.verdict },
      ],
      faqs: t.faqs,
      cta: { heading: L.ctaHeading, text: L.ctaText, whatsapp: fill(L.whatsapp), emailSubject: fill(L.emailSubject) },
      moreLabel: L.moreLabel,
      moreText: L.moreText,
      links: [
        ...(prev ? [{ label: `← ${prev.monthName}`, route: `${locale}/${prev.localeSlug}.html` }] : []),
        ...(next ? [{ label: `${next.monthName} →`, route: `${locale}/${next.localeSlug}.html` }] : []),
        ...(hub ? [{ label: L.allMonths, route: hub[locale] }] : []),
      ],
      ...(hub ? { parent: { label: L.allMonths, route: hub[locale] } } : {}),
    };
  });
}
