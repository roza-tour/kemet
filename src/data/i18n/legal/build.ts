// ---------------------------------------------------------------------------
// The three documents a traveller reads before paying — privacy, terms,
// booking — as translated pages (components/i18n/LocalizedArticle). The words
// are in ./texts.ts; the groups ("legal-privacy", "legal-terms",
// "legal-booking") in config/translation-groups.json.
//
// Until 25 Nov 2026 these existed in English only, so a German reader asked to
// tick "I agree" on a German form was sent to an English privacy policy.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import type { LocalizedPage, LocalizedSection } from "../types";
import { LEGAL } from "./texts";

const routeOf = (key: string, locale: TranslatedLocale): string => {
  const g = TRANSLATION_GROUPS.find((x) => x.key === key);
  if (!g) throw new Error(`i18n/legal: no translation group "${key}"`);
  return g[locale];
};

export function legalPages(locale: TranslatedLocale): LocalizedPage[] {
  const T = LEGAL[locale];
  const L = T.labels;
  const docs = [
    { key: "legal-privacy", title: T.privacy.title, slug: T.privacy.localeSlug },
    { key: "legal-terms", title: T.terms.title, slug: T.terms.localeSlug },
    { key: "legal-booking", title: T.booking.title, slug: T.booking.localeSlug },
  ];
  for (const d of docs) {
    const want = routeOf(d.key, locale);
    if (want !== `${locale}/${d.slug}.html`) throw new Error(`i18n/legal/texts.ts [${locale}]: ${d.key} is at ${d.slug}, the group says ${want}.`);
  }
  const others = (key: string) => docs.filter((d) => d.key !== key).map((d) => ({ label: d.title, route: routeOf(d.key, locale) }));
  const common = {
    faqs: [],
    cta: { heading: L.ctaHeading, text: L.ctaText, whatsapp: L.whatsapp, emailSubject: L.emailSubject },
    moreLabel: L.moreLabel,
    moreText: L.moreText,
  };
  const doc = (key: string, D: typeof T.privacy, symbol: string): LocalizedPage => ({
    groupId: key,
    symbol,
    title: D.metaTitle,
    description: D.metaDescription,
    keywords: "",
    crumb: D.title,
    h1: D.title,
    standfirst: D.standfirst,
    lede: `${D.intro} ${L.englishPrevails}`,
    facts: [{ label: L.lastUpdatedLabel, value: D.lastUpdated }],
    sections: D.sections.map((s) => ({ title: s.heading, body: s.body.join("\n\n") })),
    ...common,
    links: others(key),
  });
  const B = T.booking;
  const bookingSections: LocalizedSection[] = [
    { title: B.stepsHeading, body: "", items: B.steps.map((s) => `${s.heading} — ${s.body}`) },
    {
      title: B.paymentHeading,
      body: [`${B.depositLabel}: ${B.deposit.label}. ${B.deposit.note}`, `${B.balanceLabel}: ${B.balance.label}. ${B.balance.note}`].join("\n\n"),
    },
    { title: B.methodsLabel, body: "", items: B.paymentMethods },
    { title: B.cancelHeading, body: B.cancelText, items: B.cancellationTiers.map((x) => `${x.window}: ${x.charge}`) },
    ...B.policies.map((p) => ({ title: p.heading, body: p.body })),
  ];
  return [
    doc("legal-privacy", T.privacy, "eye"),
    doc("legal-terms", T.terms, "scales"),
    {
      groupId: "legal-booking",
      symbol: "scales",
      title: B.metaTitle,
      description: B.metaDescription,
      keywords: "",
      crumb: B.title,
      h1: B.title,
      standfirst: B.standfirst,
      lede: L.englishPrevails,
      facts: [
        { label: B.depositLabel, value: B.deposit.label },
        { label: B.balanceLabel, value: B.balance.label },
        { label: B.methodsLabel, value: B.paymentMethods.join(" · ") },
      ],
      sections: bookingSections,
      ...common,
      links: others("legal-booking"),
    },
  ];
}

/** This language's privacy page — for the consent line under its forms. */
export const privacyRoute = (locale: TranslatedLocale) => routeOf("legal-privacy", locale);
