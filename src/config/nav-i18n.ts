// ---------------------------------------------------------------------------
// The navigation a localised page gets.
//
// THE PROBLEM WITH TRANSLATING THE ENGLISH NAV
// The English bar reaches 192 pages. Nine of them exist in German. Translating
// its 25 labels would have produced a German menu in which almost every item
// opens an English page — which is not a translated site, it is an English
// site wearing German labels, and the reader finds out one click in.
//
// WHAT THIS DOES INSTEAD
// It builds the bar out of what actually exists in that language: the eight
// translated pages, plus whatever one-language pages that locale has (the
// German Christmas page, the Indonesian Umrah pages, the French Toussaint
// page — see i18n/standalone.ts). Every item opens a page in the reader's own
// language. The rest of the site is reachable through ONE labelled link that
// says, in their language, that it is in English.
//
// NOTHING HERE IS A NEW TRANSLATION. Each item's label is the page's own
// `crumb`, already written for that market by whoever wrote the page; only
// the two group headings come from config/ui.ts. Add a localised page
// anywhere and it appears in its own language's menu with no edit here.
// ---------------------------------------------------------------------------
import type { NavItem } from "@/config/navigation";
import type { TranslatedLocale } from "@/config/i18n";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import type { LocalizedPage } from "@/data/i18n/types";
import { STANDALONE_PAGES, standaloneRoute } from "@/data/i18n/standalone";
import { ui } from "@/config/ui";
import { de } from "@/data/i18n/de";
import { it } from "@/data/i18n/it";
import { es } from "@/data/i18n/es";
import { fr } from "@/data/i18n/fr";
import { ru } from "@/data/i18n/ru";
import { id } from "@/data/i18n/id";
import { ms } from "@/data/i18n/ms";
import { pt } from "@/data/i18n/pt";
import { ar } from "@/data/i18n/ar";
// Kemet Ultra is not in the LocalizedPage sets — each language has its own
// page component and its own text object — so its label is read from there.
import type { UltraText } from "@/data/ultra/types";
import { de as ultraDe } from "@/data/ultra/de";
import { it as ultraIt } from "@/data/ultra/it";
import { es as ultraEs } from "@/data/ultra/es";
import { fr as ultraFr } from "@/data/ultra/fr";
import { ru as ultraRu } from "@/data/ultra/ru";
import { id as ultraId } from "@/data/ultra/id";
import { ms as ultraMs } from "@/data/ultra/ms";
import { pt as ultraPt } from "@/data/ultra/pt";
import { ar as ultraAr } from "@/data/ultra/ar";

const SETS: Record<TranslatedLocale, LocalizedPage[]> = { de, it, es, fr, ru, id, ms, pt, ar };

const ULTRA: Record<TranslatedLocale, UltraText> = {
  de: ultraDe, it: ultraIt, es: ultraEs, fr: ultraFr, ru: ultraRu,
  id: ultraId, ms: ultraMs, pt: ultraPt, ar: ultraAr,
};

/** The groups each menu is built from, in the order a traveller reads them. */
const JOURNEY_GROUPS = ["journeys", "nile-cruise", "ultra", "private-access", "cost"] as const;
const PLAN_GROUPS = ["when-to-go", "safety"] as const;

/** A page's label in its own language, taken from the page's own breadcrumb. */
function entry(locale: TranslatedLocale, groupId: string): NavItem | null {
  const group = TRANSLATION_GROUPS.find((g) => g.key === groupId);
  if (!group) return null;
  // Ultra has a page per language but no LocalizedPage record; its text
  // object carries the same `crumb` field, so it reads the same way.
  const label = groupId === "ultra"
    ? ULTRA[locale].crumb
    : SETS[locale].find((p) => p.groupId === groupId)?.crumb;
  return label ? { label, href: group[locale] } : null;
}

const present = (locale: TranslatedLocale, ids: readonly string[]) =>
  ids.map((g) => entry(locale, g)).filter((x): x is NavItem => x !== null);

/** This locale's one-language pages, in the order the registry lists them. */
const standalone = (locale: TranslatedLocale): NavItem[] =>
  STANDALONE_PAGES.filter((p) => p.locale === locale)
    .map((p) => ({ label: p.page.crumb, href: standaloneRoute(p) }));

/**
 * The bar for a localised page: two groups of real pages in that language,
 * then the honest way out to the English catalogue.
 *
 * A group with nothing under it is dropped rather than rendered empty — no
 * locale is in that position today, and a future one that is half-built
 * should not ship a menu that opens onto nothing.
 */
export function localeNav(locale: TranslatedLocale): NavItem[] {
  const t = ui(locale);
  const journeys = present(locale, JOURNEY_GROUPS);
  // The planning group carries this locale's own one-language pages too: the
  // German Christmas page and the Indonesian Umrah pages have nowhere else to
  // be, and they are exactly what that market came looking for.
  const plan = [...present(locale, PLAN_GROUPS), ...standalone(locale)];

  // The group's parent is a real link to its first page. Where that page's
  // own name is also the group heading — Arabic calls both "الرحلات" — the
  // child is dropped, because a menu whose first item repeats its own title
  // reads as a mistake rather than as a shortcut.
  const group = (label: string, items: NavItem[]): NavItem => ({
    label,
    href: items[0].href,
    children: items[0].label === label ? items.slice(1) : items,
  });

  const out: NavItem[] = [];
  if (journeys.length) out.push(group(t.navJourneys, journeys));
  if (plan.length) out.push(group(t.navPlan, plan));
  // Said plainly, in their language, rather than discovered after the click.
  // The href is empty on purpose: callers write `${base}${href}`, and from a
  // locale folder that is "../", which IS the site root. "index.html" would
  // have been right too, except .htaccess 301s it to "/" — an internal link
  // that redirects on every click, 200 times over.
  out.push({ label: t.englishShort, href: "" });
  return out;
}
