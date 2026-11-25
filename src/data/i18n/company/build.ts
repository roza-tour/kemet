// ---------------------------------------------------------------------------
// Who Kemet is, and how to reach it — about.html and contact.html as
// translated pages (components/i18n/LocalizedArticle). The words are in
// ./texts.ts, translated on 25 Nov 2026 from data/company.ts, data/experts.ts
// and pages/contact.astro; the groups ("company-about", "company-contact") are
// in config/translation-groups.json.
//
// Until then both existed in English only: an assistant answering in German or
// Arabic had no page in that language that said who the company is.
// When the English changes, these must change with it.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import { company } from "@/data/company";
import { site } from "@/config/site";
import { reviewer } from "@/data/experts";
import type { LocalizedPage } from "../types";
import { LEGAL } from "../legal/texts";
import { COMPANY } from "./texts";

const routeOf = (key: string, locale: TranslatedLocale): string => {
  const g = TRANSLATION_GROUPS.find((x) => x.key === key);
  if (!g) throw new Error(`i18n/company: no translation group "${key}"`);
  return g[locale];
};

const pair = (x: { heading: string; body: string }) => `${x.heading} — ${x.body}`;

export function companyPages(locale: TranslatedLocale): LocalizedPage[] {
  const T = COMPANY[locale];
  const A = T.about;
  const C = T.contact;
  const L = LEGAL[locale];
  for (const [key, slug] of [["company-about", T.slugs.about], ["company-contact", T.slugs.contact]] as const) {
    const want = routeOf(key, locale);
    if (want !== `${locale}/${slug}.html`) throw new Error(`i18n/company/texts.ts [${locale}]: ${key} is at ${slug}, the group says ${want}.`);
  }
  const legalLinks = [
    { label: L.privacy.title, route: routeOf("legal-privacy", locale) },
    { label: L.terms.title, route: routeOf("legal-terms", locale) },
    { label: L.booking.title, route: routeOf("legal-booking", locale) },
  ];
  const cta = { heading: C.ctaHeading, text: C.ctaText, whatsapp: C.whatsappMessage, emailSubject: C.emailSubject };
  const about: LocalizedPage = {
    groupId: "company-about",
    symbol: "lotus",
    title: A.metaTitle,
    description: A.metaDescription,
    keywords: "",
    crumb: A.crumb,
    h1: A.h1,
    standfirst: A.standfirst,
    lede: A.vision,
    facts: [
      { label: A.factLabels.serviceArea, value: A.serviceAreaValue },
      { label: A.factLabels.guideLanguages, value: A.guideLanguagesValue },
      ...(company.founded ? [{ label: A.factLabels.founded, value: String(company.founded) }] : []),
      { label: A.factLabels.basedIn, value: A.basedInValue },
    ],
    sections: [
      { title: A.valuesHeading, body: "", items: A.values },
      { title: A.whyHeading, body: "", items: A.why.map(pair) },
      { title: A.reviewerHeading, body: `${reviewer.name} — ${A.reviewerRole}\n\n${A.reviewerBio}` },
      { title: A.processHeading, body: "", items: A.process.map(pair) },
      { title: A.confidenceHeading, body: "", items: A.confidence.map(pair) },
      { title: A.standardsHeading, body: "", items: A.standards.map(pair) },
      { title: A.factLabels.onlyWebsite, body: `${company.identity?.domain ?? "kemet-travel.com"}. ${A.namesake}` },
    ],
    faqs: [],
    cta,
    moreLabel: L.labels.moreLabel,
    moreText: "",
    links: [{ label: C.h1, route: routeOf("company-contact", locale) }, ...legalLinks],
  };
  const contact: LocalizedPage = {
    groupId: "company-contact",
    symbol: "crescent",
    title: C.metaTitle,
    description: C.metaDescription,
    keywords: "",
    crumb: C.crumb,
    h1: C.h1,
    standfirst: C.standfirst,
    lede: "",
    facts: [
      { label: C.whatsappLabel, value: C.whatsappNote },
      { label: C.emailLabel, value: `${site.email} — ${C.emailNote}` },
      { label: C.hoursLabel, value: C.hoursValue },
    ],
    sections: [
      { title: C.nextHeading, body: "", items: C.next },
      { title: C.duringTripHeading, body: C.duringTrip },
      { title: A.confidenceHeading, body: "", items: A.confidence.map(pair) },
    ],
    faqs: [],
    cta,
    moreLabel: L.labels.moreLabel,
    moreText: "",
    links: [{ label: A.h1, route: routeOf("company-about", locale) }, ...legalLinks],
  };
  return [about, contact];
}
