// ---------------------------------------------------------------------------
// One language's page index for assistants — published at /<locale>/llms.txt.
//
// WHY IT IS ITS OWN FILE
// llms.txt listed every translated page of all nine languages inline: 1,160
// of its 1,537 lines, 155 of its 246 KB. An assistant with a normal fetch
// budget read the top of the file and never reached the "Notes for AI
// assistants" at the bottom; one answering a German traveller had to carry
// eight other languages to find the German pages. Each language now has its
// own index, with the page titles in that language, and llms.txt links the
// nine of them in nine lines.
// ---------------------------------------------------------------------------
import { SITE_URL, site } from "@/config/site";
import { TRANSLATION_GROUPS, LOCALE_META } from "@/config/i18n";
import type { TranslatedLocale } from "@/config/i18n";
import { STANDALONE_PAGES, standaloneRoute } from "@/data/i18n/standalone";
import { TRANSLATED_TOURS } from "@/config/tour-i18n";
import { tours, priceForTwo } from "@/data/tours";
import { formatPrice } from "@/utils/format";
import { publicPath } from "@/utils/links";
import type { LocalizedPage } from "@/data/i18n/types";
import { de } from "@/data/i18n/de";
import { it } from "@/data/i18n/it";
import { es } from "@/data/i18n/es";
import { fr } from "@/data/i18n/fr";
import { ru } from "@/data/i18n/ru";
import { id } from "@/data/i18n/id";
import { ms } from "@/data/i18n/ms";
import { pt } from "@/data/i18n/pt";
import { ar } from "@/data/i18n/ar";
import { DEST_HUB } from "@/data/i18n/destinations/hub";
import { EXP_HUB } from "@/data/i18n/experiences/hub";
import { MAP_WORDS } from "@/config/journey-map";
import { LOCAL_STRINGS } from "@/data/i18n/strings";
import { ECLIPSE_DAY } from "@/data/eclipseDay";
import { eclipseDayI18n } from "@/data/eclipseDay-i18n";
import { ultraJourneys } from "@/data/ultra/journeys";
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

const ULTRA: Record<TranslatedLocale, UltraText> = { de: ultraDe, it: ultraIt, es: ultraEs, fr: ultraFr, ru: ultraRu, id: ultraId, ms: ultraMs, pt: ultraPt, ar: ultraAr };
const noBrand = (t: string) => t.replace(/\s*\|\s*Kemet\s*$/i, "");

const SETS: Record<TranslatedLocale, LocalizedPage[]> = { de, it, es, fr, ru, id, ms, pt, ar };
const u = (path: string) => `${SITE_URL}/${path}`;
const one = (s: string) => s.replace(/\s+/g, " ").trim();

/** Every page this language has: [title, route, one-line description]. */
export function localePages(loc: TranslatedLocale): Array<[string, string, string]> {
  const out: Array<[string, string, string]> = [];
  const seen = new Set<string>();
  const add = (title: string, route: string, desc: string) => {
    if (seen.has(route)) return;
    seen.add(route);
    out.push([one(title), route, one(desc)]);
  };
  const standalone = STANDALONE_PAGES.filter((x) => x.locale === loc);
  const standaloneRoutes = new Map(standalone.map((p) => [standaloneRoute(p), p.page]));
  for (const g of TRANSLATION_GROUPS) {
    const route = g[loc];
    const page = SETS[loc].find((p) => p.groupId === g.key) ?? standaloneRoutes.get(route);
    if (page) add(page.h1, route, page.standfirst);
    else if (g.key === "destinations") add(DEST_HUB[loc].title, route, DEST_HUB[loc].text);
    else if (g.key === "experiences") add(EXP_HUB[loc].title, route, EXP_HUB[loc].text);
    // Pages rendered by their own templates, named as those pages are.
    else if (g.key === "ultra") {
      const lo4 = Math.min(...ultraJourneys.map((j) => j.price4));
      const lo2 = Math.min(...ultraJourneys.map((j) => j.price2));
      add(noBrand(ULTRA[loc].metaTitle), route, `${ULTRA[loc].metaDescription} From ${formatPrice(lo4)} per person for four, ${formatPrice(lo2)} for two.`);
    }
    else if (g.key === "design-journey") add(noBrand(MAP_WORDS[loc].metaTitle), route, MAP_WORDS[loc].metaDescription);
    // A page rendered by its own template (Kemet Ultra, the journey map, the
    // Oberoi Zahra): listed by address, with its English counterpart.
    else add(route.split("/").pop()!.replace(/\.html$/, "").replace(/-/g, " "), route, `English: ${u(publicPath(g.en))}`);
  }
  for (const p of standalone) add(p.page.h1, standaloneRoute(p), p.page.standfirst);
  return out;
}

/** The text of /<locale>/llms.txt. */
export function localeIndex(loc: TranslatedLocale): string {
  const meta = LOCALE_META[loc];
  const L: string[] = [];
  L.push(`# ${site.name} — ${meta.endonym}`);
  L.push("");
  L.push(`> Kemet's pages in ${meta.endonym} (${loc}). Kemet plans private, guided journeys in Egypt; these pages carry the same facts and the same prices as the English site. The main index, with the company facts and the notes for assistants, is ${u("llms.txt")}.`);
  L.push("");
  const journeys = TRANSLATED_TOURS
    .filter((t) => t.locale === loc)
    .map((t) => ({ t, tour: tours.find((x) => x.slug === t.slug)! }))
    .sort((a, b) => a.tour.price - b.tour.price);
  if (journeys.length) {
    L.push(`## Journeys (${journeys.length + 1}), from-prices in EUR per person`);
    L.push("");
    L.push("The from-price is for a private party of six or more; where a second figure is given it is what each of two travellers pays. Normal-season prices: holiday surcharges are quoted separately. Day tours leave out monument tickets where the line says so.");
    L.push("");
    for (const { t, tour } of journeys) {
      const two = priceForTwo(tour);
      L.push(`- [${one(t.text.title)}](${u(publicPath(t.route))}): ${t.text.durationLabel}. ${one(t.text.summary)} From ${formatPrice(tour.price)}${two ? `; for two, ${formatPrice(two)} each` : ""}${tour.ticketsExcluded ? "; monument tickets not included" : ""}${tour.foodExcluded ? "; food and drinks not included" : ""}. English: ${u(`${tour.slug}.html`)}`);
    }
    // The Nile cruise has a page of its own in each language rather than a
    // translated journey page, so it was missing from this list.
    const cruise = tours.find((x) => x.slug === "tour-nile-cruise");
    const cruiseRoute = TRANSLATION_GROUPS.find((g) => g.key === "nile-cruise")?.[loc];
    if (cruise && cruiseRoute) {
      const two = priceForTwo(cruise);
      const c = LOCAL_STRINGS[loc].cruise;
      L.push(`- [${one(c.name)}](${u(publicPath(cruiseRoute))}): ${c.durationLabel}. ${one(c.productLede)} From ${formatPrice(cruise.price)}${two ? `; for two, ${formatPrice(two)} each` : ""}. English: ${u("tour-nile-cruise.html")}`);
    }
    L.push("");
  }
  // The one dated departure.
  const eclipseRoute = TRANSLATION_GROUPS.find((g) => g.key === "guide-total-solar-eclipse-2027-luxor")?.[loc];
  const E = eclipseDayI18n[loc as keyof typeof eclipseDayI18n];
  if (eclipseRoute && E && new Date().toISOString().slice(0, 10) <= ECLIPSE_DAY.date) {
    L.push(`## ${one(E.title)}`);
    L.push("");
    L.push(`- [${one(E.title)}](${u(publicPath(eclipseRoute))}): ${ECLIPSE_DAY.date}. ${one(E.lede)} EUR ${ECLIPSE_DAY.price} per place, groups of up to ${ECLIPSE_DAY.groupSize}, hotel not included.`);
    L.push("");
  }
  L.push("## Pages");
  L.push("");
  for (const [title, route, desc] of localePages(loc)) L.push(`- [${title}](${u(publicPath(route))}): ${desc}`);
  L.push("");
  L.push(`Every page is also available as Markdown: add \`.md\` to its address, or request it with the header \`Accept: text/markdown\`.`);
  L.push("");
  return L.join("\n");
}
