// ---------------------------------------------------------------------------
// The catalogue's translations — a PARTIAL registry, on purpose.
//
// config/translation-groups.json is all-or-nothing: a group must carry a route
// in every one of the ten locales or the build fails. That is right for the
// eight pages the site promises in every language, and impossible for the
// catalogue — 25 journeys × 9 languages is 225 pages, and they will not all
// land on the same day.
//
// hreflang does not require them to. A cluster is valid when it is RECIPROCAL
// and SELF-REFERENTIAL, not when it is complete: English + German is a perfectly
// good cluster, and English + German + French is a better one tomorrow. What
// would be invalid is an English page claiming a German alternate that does
// not exist, or a German page that forgets to point back. Both sides are
// generated from this one object, so neither can happen.
//
// x-default points at the English journey, which is the complete one.
// ---------------------------------------------------------------------------
import type { Alternate } from "@/config/i18n";
import { LOCALE_META, TRANSLATED_LOCALES, TRANSLATION_GROUPS } from "@/config/i18n";
import type { TranslatedLocale } from "@/config/i18n";
import type { TourText } from "@/data/tours-i18n/types";
import { assertPhrasebook } from "@/data/tours-i18n/phrasebook";
import { de } from "@/data/tours-i18n/de";
import { tours } from "@/data/tours";

/** Every language a journey has been translated into. Add a file, add it here. */
const SETS: Partial<Record<TranslatedLocale, TourText[]>> = { de };

export interface TranslatedTour {
  locale: TranslatedLocale;
  /** The English journey's slug. */
  slug: string;
  /** Route file, e.g. "de/luxor-3-tage.html". */
  route: string;
  text: TourText;
}

/** Flat list of every translated journey page the site builds. */
export const TRANSLATED_TOURS: TranslatedTour[] = [];

for (const locale of TRANSLATED_LOCALES) {
  for (const text of SETS[locale] ?? []) {
    const tour = tours.find((t) => t.slug === text.slug);
    // A translation of a journey that no longer exists would build a page
    // with no price, no photographs and no itinerary length to check against.
    if (!tour) {
      throw new Error(
        `tours-i18n/${locale}.ts: "${text.slug}" is not a journey in data/tours.ts. ` +
        `Either the slug is wrong or the journey was removed — in which case ` +
        `remove the translation too rather than leaving it to 404.`,
      );
    }
    // The itinerary is rendered day by day against the English one, which
    // carries the numbering and the Day/Stop label. A translation with the
    // wrong number of days would silently drop or duplicate one.
    if (text.itinerary.length !== tour.itinerary.length) {
      throw new Error(
        `tours-i18n/${locale}.ts: "${text.slug}" has ${text.itinerary.length} ` +
        `days but the English journey has ${tour.itinerary.length}. They are ` +
        `rendered in parallel, so the counts have to match.`,
      );
    }
    // Four of the eight funnel pages ARE journeys — "nile-cruise" is
    // tour-nile-cruise.html — and those already have a page in every
    // language through translation-groups.json. Translating one again here
    // would publish two German pages about the same cruise, competing for
    // the same query, with an hreflang cluster that cannot name both.
    const inGroup = TRANSLATION_GROUPS.find((g) => g.en === `${text.slug}.html`);
    if (inGroup) {
      throw new Error(
        `tours-i18n/${locale}.ts: "${text.slug}" is already translated as the ` +
        `"${inGroup.key}" funnel page — this language has it at ${inGroup[locale]}. ` +
        `Remove it here; a second page would compete with that one.`,
      );
    }
    // A multi-day journey writes each day as a list of lines; a day tour
    // writes each stop as a paragraph. A translation that used the other
    // shape would render an empty row, so the shapes are checked per row
    // rather than assumed from the journey's kind.
    tour.itinerary.forEach((en, i) => {
      const got = text.itinerary[i];
      const wantsList = Array.isArray(en.items);
      if (wantsList && (!got.items || got.items.length !== en.items!.length)) {
        throw new Error(
          `tours-i18n/${locale}.ts: "${text.slug}" row ${i + 1} needs ` +
          `${en.items!.length} items to match the English day; it has ` +
          `${got.items?.length ?? 0}.`,
        );
      }
      if (!wantsList && !got.text) {
        throw new Error(
          `tours-i18n/${locale}.ts: "${text.slug}" row ${i + 1} is a day-tour ` +
          `stop and needs \`text\`, not \`items\`.`,
        );
      }
    });
    assertPhrasebook(locale, text.slug, [...(tour.included ?? []), ...(tour.excluded ?? [])]);
    TRANSLATED_TOURS.push({ locale, slug: text.slug, route: `${locale}/${text.localeSlug}.html`, text });
  }
}

/** English journey slug → the locales it exists in, and at which route. */
const BY_SLUG = new Map<string, Map<TranslatedLocale, string>>();
for (const t of TRANSLATED_TOURS) {
  if (!BY_SLUG.has(t.slug)) BY_SLUG.set(t.slug, new Map());
  BY_SLUG.get(t.slug)!.set(t.locale, t.route);
}

/** English slug + locale → the translated text, for cards and listings. */
const TEXT_BY = new Map<string, TourText>();
for (const t of TRANSLATED_TOURS) TEXT_BY.set(`${t.locale}|${t.slug}`, t.text);

/** The translated words for a journey, where that language has them. */
export const tourTextFor = (slug: string, locale: TranslatedLocale): TourText | undefined =>
  TEXT_BY.get(`${locale}|${slug}`);

/** Route file → the English journey slug it translates. */
const BY_ROUTE = new Map<string, string>();
for (const t of TRANSLATED_TOURS) BY_ROUTE.set(t.route, t.slug);

/**
 * The localised route for a journey in a language, if it has one.
 *
 * Checks the funnel groups first: a journey that is also one of the eight
 * pages promised in every language (the Nile cruise, Kemet Ultra, private
 * access) is translated there, and a card on a German page must open THAT
 * page rather than the English one.
 */
export function tourRouteFor(slug: string, locale: TranslatedLocale): string | undefined {
  const group = TRANSLATION_GROUPS.find((g) => g.en === `${slug}.html`);
  return group ? group[locale] : BY_SLUG.get(slug)?.get(locale);
}

/** True when this route is an English journey that has at least one translation. */
export const englishTourSlugOf = (route: string): string | undefined => {
  const slug = route.replace(/\.html$/, "");
  return BY_SLUG.has(slug) ? slug : undefined;
};

/**
 * The hreflang set for a journey page, English or translated. Empty when the
 * journey has no translations at all — an hreflang block pointing only at
 * itself is noise.
 */
export function tourAlternatesFor(route: string): Alternate[] {
  const slug = BY_ROUTE.get(route) ?? englishTourSlugOf(route);
  const locales = slug ? BY_SLUG.get(slug) : undefined;
  if (!slug || !locales || locales.size === 0) return [];

  const en = `${slug}.html`;
  const out: Alternate[] = [{ hreflang: "en", route: en }];
  for (const [loc, r] of locales) out.push({ hreflang: LOCALE_META[loc].tag, route: r });
  out.push({ hreflang: "x-default", route: en });
  return out;
}
