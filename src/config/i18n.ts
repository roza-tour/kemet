// ---------------------------------------------------------------------------
// Localisation — the registry that keeps translated pages honest.
//
// SCOPE
// English remains the full site. Each translated locale carries the same seven
// key pages — the funnel, not the catalogue: the market's own home page, the
// journeys, the Nile cruise, what it costs, when to go, whether Egypt is safe,
// and the entry rules for that passport. Those seven answer the questions that
// stop someone booking; the catalogue can be read in English once they have.
//
// WHICH LANGUAGES, AND WHY THESE
//   de, it, es  Egypt's largest Western European source markets.
//   fr          France, Belgium, Switzerland, Quebec and francophone Africa —
//               the largest single gap in the original three.
//   ru          Russia is one of Egypt's biggest inbound markets by volume;
//               the Red Sea resorts are built around it. Almost none of that
//               traffic searches in English.
//   id, ms      Indonesia and Malaysia. Egypt is a major destination for both,
//               and neither market searches in English by default.
// Slugs are transliterated to Latin script even where the language is not
// (Russian). A percent-encoded Cyrillic path is valid and Google reads it, but
// it breaks in email clients, chat apps and analytics — and this site is
// hand-deployed to shared hosting, where an unreadable filename is a hazard.
//
// A NOTE ON WHAT IS *NOT* HERE
// Arabic is the highest-value language still missing — the Gulf is a top-three
// market for Egypt — but it is right-to-left, and doing it properly means a
// layout pass over every physical-direction rule in the stylesheet, not a data
// file. It is deliberately left for its own change rather than bolted on here.
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

import registry from "./translation-groups.json";

export const LOCALES = ["en", "de", "it", "es", "fr", "ru", "id", "ms"] as const;
export type SiteLocale = (typeof LOCALES)[number];

/** English is served unprefixed so no existing URL ever changes. */
export const DEFAULT_LOCALE: SiteLocale = "en";

/** Locales that have translated pages. */
export const TRANSLATED_LOCALES = ["de", "it", "es", "fr", "ru", "id", "ms"] as const;
export type TranslatedLocale = (typeof TRANSLATED_LOCALES)[number];

export interface LocaleMeta {
  /** BCP 47 tag used in hreflang, <html lang> and schema inLanguage. */
  tag: string;
  /** The language's own name, for the switcher. Never translated. */
  endonym: string;
  /** The word "Home" in this language — used by the breadcrumb, visible and
   *  in BreadcrumbList. A German page whose crumb trail reads "HOME" is a
   *  small but real tell that the page is a translation of an English one. */
  home: string;
  /** Short label for the switcher chip. */
  short: string;
  /** Locale used for number and date formatting. */
  formatLocale: string;
}

export const LOCALE_META: Record<SiteLocale, LocaleMeta> = {
  en: { tag: "en", home: "Home", endonym: "English", short: "EN", formatLocale: "en-IE" },
  de: { tag: "de", home: "Startseite", endonym: "Deutsch", short: "DE", formatLocale: "de-DE" },
  it: { tag: "it", home: "Home", endonym: "Italiano", short: "IT", formatLocale: "it-IT" },
  es: { tag: "es", home: "Inicio", endonym: "Español", short: "ES", formatLocale: "es-ES" },
  fr: { tag: "fr", home: "Accueil", endonym: "Français", short: "FR", formatLocale: "fr-FR" },
  ru: { tag: "ru", home: "Главная", endonym: "Русский", short: "RU", formatLocale: "ru-RU" },
  id: { tag: "id", home: "Beranda", endonym: "Bahasa Indonesia", short: "ID", formatLocale: "id-ID" },
  ms: { tag: "ms", home: "Utama", endonym: "Bahasa Melayu", short: "MS", formatLocale: "ms-MY" },
};

/**
 * One entry per translated page group.
 *
 * `en` is the route file of the English original. The other keys are the
 * localised slugs, which live under /<locale>/. Localised slugs are used rather
 * than mirroring the English ones because the words in the URL are read by both
 * the search engine and the visitor in that market.
 *
 * The group's own identifier is `key`, not `id` — "id" is Indonesian's locale
 * code, and a group object cannot hold both.
 *
 * Typed as a full record over SiteLocale rather than a hand-listed set of keys.
 * Adding a locale to LOCALES then fails to compile until every group has a slug
 * for it — which is the only way to guarantee the hreflang set stays complete.
 * A group missing one language is exactly the partial declaration Google throws
 * the whole cluster away for.
 */
export type TranslationGroup = { key: string } & Record<SiteLocale, string>;

export const TRANSLATION_GROUPS: TranslationGroup[] =
  registry.groups as unknown as TranslationGroup[];

// The JSON is data, not types: assert once, here, that it actually carries a
// route for every locale in LOCALES. A missing route would otherwise surface as
// `undefined` inside an hreflang href — a broken alternate that Google reads as
// a broken cluster — and it would surface at runtime in a built page rather
// than at build time where it can be fixed.
for (const g of TRANSLATION_GROUPS) {
  for (const loc of LOCALES) {
    if (!g[loc]) {
      throw new Error(
        `translation-groups.json: group "${g.key}" has no route for locale "${loc}".`,
      );
    }
  }
}


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
