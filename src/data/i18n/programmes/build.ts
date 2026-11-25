// ---------------------------------------------------------------------------
// Turns a language's programme texts into pages for the translated-article
// template (components/i18n/LocalizedArticle.astro). Each programme is one
// translation group ("programme-<slug>"); the build stops if a text's address
// is not the one the group declares, or if its days do not match the English.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import type { LocalizedPage } from "../types";
import type { ProgText, ProgLabels } from "./types";
import { programmes } from "@/data/programmes";
import { destinations } from "@/data/destinations";

import { tripLd } from "@/schemas/localized";
import { localAlt } from "../strings";
export function programmePages(locale: TranslatedLocale, L: ProgLabels, texts: ProgText[]): LocalizedPage[] {
  const where = `i18n/programmes/${locale}.ts`;
  return texts.map((t) => {
    const p = programmes.find((x) => x.slug === t.id);
    if (!p) throw new Error(`${where}: "${t.id}" is not a programme in data/programmes.ts.`);
    const route = `${locale}/${t.localeSlug}.html`;
    const group = TRANSLATION_GROUPS.find((g) => g.key === `programme-${t.id}`);
    if (!group || group[locale] !== route) {
      throw new Error(`${where}: "${t.id}" is at ${route}, but translation-groups.json says ${group ? group[locale] : "nothing (no group)"}.`);
    }
    if (t.days.length !== p.days.length) throw new Error(`${where}: "${t.id}" has ${t.days.length} days; the English has ${p.days.length}.`);

    const d = destinations.find((x) => x.id === p.photo.destination)!;
    const photo = [d.hero, ...(d.gallery ?? [])].filter((x) => x && x.src)[p.photo.index] ?? d.hero!;
    const others = texts.filter((x) => x.id !== t.id).slice(0, 4);
    const fill = (s: string) => s.replace("%s", t.title);
    return {
      groupId: `programme-${t.id}`,
      symbol: "lotus",
      title: t.metaTitle,
      description: t.metaDescription,
      keywords: t.keywords,
      crumb: t.title,
      h1: t.title,
      standfirst: t.standfirst,
      lede: `${L.forWhom}: ${t.forWhom}`,
      facts: [
        { label: L.length, value: t.length },
        { label: L.route, value: t.route },
        { label: L.best, value: t.bestMonths },
        { label: L.price, value: L.onRequest },
      ],
      sections: [
        { title: L.plan, body: "", items: t.days.map((x) => (x.text ? `${x.label} — ${x.title}. ${x.text}` : `${x.label} — ${x.title}.`)) },
        { title: L.order, body: `${L.orderNote} ${L.fixedLead} ${t.fixed}` },
        { title: L.different, body: "", items: t.different },
        { title: L.private, body: t.privateNote },
        { title: L.stay, body: t.stay },
        { title: L.avoid, body: t.avoid },
      ],
      faqs: [...t.faqs, { q: L.orderQ, a: L.orderNote }, { q: L.priceQ, a: L.priceNote }],
      cta: { heading: L.ctaHeading, text: L.ctaText, whatsapp: fill(L.whatsapp), emailSubject: fill(L.emailSubject) },
      moreLabel: L.moreLabel,
      moreText: L.moreText,
      links: others.map((o) => ({ label: o.title, route: `${locale}/${o.localeSlug}.html` })),
      photos: [{ ...photo!, alt: localAlt(locale, photo!.alt), label: t.title }],
      schema: [tripLd(locale, route, { title: t.title, summary: t.standfirst, days: t.days }, photo!.src)],
    };
  });
}
