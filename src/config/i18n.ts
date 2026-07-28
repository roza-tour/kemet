// ---------------------------------------------------------------------------
// Localisation — the registry that keeps translated pages honest.
//
// SCOPE (deliberately small)
// English remains the full site. German, Italian and Spanish carry six key
// pages each — the funnel, not the catalogue. Those three are Egypt's largest
// European source markets and the ones where travellers search in their own
// language rather than in English.
//
// THE RULE THAT MATTERS
// hreflang is only valid when it is RECIPROCAL and SELF-REFERENTIAL: every page
// in a translation group must list every member of that group INCLUDING itself,
// and the English original must list its translations too. A one-way
// declaration is worse than none — Google discards the whole cluster. The
// registry below is the single source of truth, so the annotations on both
// sides are generated from the same object and cannot drift apart.
//
// WHAT WE DELIBERATELY DO NOT DO
// No automatic redirect based on browser language or IP. Googlebot crawls
// predominantly from the United States; a language redirect would mean it only
// ever sees English and the translated pages never get indexed at all. The
// language switcher is a link the visitor chooses, and nothing more.
// ---------------------------------------------------------------------------

export const LOCALES = ["en", "de", "it", "es"] as const;
export type SiteLocale = (typeof LOCALES)[number];

/** English is served unprefixed so no existing URL ever changes. */
export const DEFAULT_LOCALE: SiteLocale = "en";

/** Locales that have translated pages. */
export const TRANSLATED_LOCALES = ["de", "it", "es"] as const;
export type TranslatedLocale = (typeof TRANSLATED_LOCALES)[number];

export interface LocaleMeta {
  /** BCP 47 tag used in hreflang, <html lang> and schema inLanguage. */
  tag: string;
  /** The language's own name, for the switcher. Never translated. */
  endonym: string;
  /** Short label for the switcher chip. */
  short: string;
  /** Locale used for number and date formatting. */
  formatLocale: string;
}

export const LOCALE_META: Record<SiteLocale, LocaleMeta> = {
  en: { tag: "en", endonym: "English", short: "EN", formatLocale: "en-IE" },
  de: { tag: "de", endonym: "Deutsch", short: "DE", formatLocale: "de-DE" },
  it: { tag: "it", endonym: "Italiano", short: "IT", formatLocale: "it-IT" },
  es: { tag: "es", endonym: "Español", short: "ES", formatLocale: "es-ES" },
};

/**
 * One entry per translated page group.
 *
 * `en` is the route file of the English original. The other keys are the
 * localised slugs, which live under /<locale>/. Localised slugs are used rather
 * than mirroring the English ones because the words in the URL are read by both
 * the search engine and the visitor in that market.
 */
export interface TranslationGroup {
  id: string;
  en: string;
  de: string;
  it: string;
  es: string;
}

export const TRANSLATION_GROUPS: TranslationGroup[] = [
  {
    id: "home",
    en: "index.html",
    de: "de/index.html",
    it: "it/index.html",
    es: "es/index.html",
  },
  {
    id: "journeys",
    en: "tours.html",
    de: "de/aegypten-reisen.html",
    it: "it/viaggi-in-egitto.html",
    es: "es/viajes-a-egipto.html",
  },
  {
    id: "nile-cruise",
    en: "tour-nile-cruise.html",
    de: "de/nilkreuzfahrt.html",
    it: "it/crociera-sul-nilo.html",
    es: "es/crucero-por-el-nilo.html",
  },
  {
    id: "cost",
    en: "egypt-tour-cost.html",
    de: "de/aegypten-reise-kosten.html",
    it: "it/quanto-costa-viaggio-egitto.html",
    es: "es/cuanto-cuesta-viajar-a-egipto.html",
  },
  {
    id: "when-to-go",
    en: "when-to-go.html",
    de: "de/beste-reisezeit-aegypten.html",
    it: "it/quando-andare-in-egitto.html",
    es: "es/mejor-epoca-para-viajar-a-egipto.html",
  },
  {
    id: "visa",
    // Each market gets the entry rules for its own passport, not a generic page.
    en: "visa.html",
    de: "de/aegypten-visum.html",
    it: "it/visto-egitto.html",
    es: "es/visado-egipto.html",
  },
];

/** Every route that belongs to any translation group, for fast lookup. */
const ROUTE_TO_GROUP = new Map<string, TranslationGroup>();
for (const g of TRANSLATION_GROUPS) {
  for (const loc of LOCALES) ROUTE_TO_GROUP.set(g[loc], g);
}

/** The group a route belongs to, or undefined if it is English-only. */
export const groupForRoute = (route: string): TranslationGroup | undefined =>
  ROUTE_TO_GROUP.get(route);

/** The locale a route is served in, derived from its path prefix. */
export function localeOfRoute(route: string): SiteLocale {
  const seg = route.split("/")[0];
  return (LOCALES as readonly string[]).includes(seg) && seg !== "en"
    ? (seg as SiteLocale)
    : "en";
}

export interface Alternate {
  /** hreflang value. */
  hreflang: string;
  /** Route file, relative to the site root. */
  route: string;
}

/**
 * The full, self-referential hreflang set for a route.
 *
 * Returns an empty array for pages with no translations — an hreflang block
 * pointing only at itself is noise, and a partial one is a liability.
 */
export function alternatesFor(route: string): Alternate[] {
  const g = groupForRoute(route);
  if (!g) return [];
  const out: Alternate[] = LOCALES.map((loc) => ({
    hreflang: LOCALE_META[loc].tag,
    route: g[loc],
  }));
  // x-default points at the English page: it is the complete version, and it is
  // what a visitor whose language we do not publish should land on.
  out.push({ hreflang: "x-default", route: g.en });
  return out;
}

/** Link prefix back to the site root from a route ("" at root, "../" inside a locale folder). */
export const basePrefixFor = (route: string): string =>
  "../".repeat(route.split("/").length - 1);
