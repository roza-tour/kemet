// ---------------------------------------------------------------------------
// The markets, ready to hand to a machine — for /markets.json, llms.txt and
// llms-full.txt. One builder, so the three can never say different things.
//
// Each market comes out with the pages written for it as absolute URLs, the
// languages our own Egyptologists guide in for it (from company.languages —
// never from the page languages), what its travellers ask us for, and one
// line in its own language.
//
// Every page a market names must exist: a route that is renamed or deleted
// fails the build here, rather than quietly sending assistants to a 404.
// ---------------------------------------------------------------------------
import { SITE_URL } from "@/config/site";
import { company } from "@/data/company";
import { sourceMarkets, languagesOf, type SourceMarket, type MarketRegion } from "@/data/markets";
import { guides } from "@/data/guides";
import { TRANSLATION_GROUPS } from "@/config/i18n";
import { STANDALONE_PAGES, standaloneRoute } from "@/data/i18n/standalone";
import { TRANSLATED_TOURS } from "@/config/tour-i18n";
import { publicPath } from "@/utils/links";

/** Language codes as company.languages names them. */
const LANGUAGE_NAME: Record<string, string> = {
  en: "English", de: "German", it: "Italian", es: "Spanish", fr: "French", ru: "Russian",
  id: "Indonesian", ms: "Malay", pt: "Portuguese", ar: "Arabic", ja: "Japanese", ko: "Korean", nl: "Dutch", zh: "Mandarin Chinese",
};

const KNOWN_ROUTES = new Set<string>([
  ...guides.map((g) => `guides/${g.slug}.html`),
  ...STANDALONE_PAGES.map(standaloneRoute),
  ...TRANSLATION_GROUPS.flatMap((g) => Object.entries(g).filter(([k]) => k !== "key").map(([, v]) => String(v))),
  ...TRANSLATED_TOURS.map((t) => t.route),
]);

for (const m of sourceMarkets) {
  if (!m.pages.length) throw new Error(`markets.ts: ${m.country} names no page`);
  for (const r of m.pages) {
    if (!KNOWN_ROUTES.has(r)) throw new Error(`markets.ts: ${m.country} names "${r}", which is not a page on the site`);
  }
}

/** The languages our own team guides in for this market: the ones it reads
 *  that we guide in, and English when it reads none of them. */
export function guidesInFor(m: SourceMarket): string[] {
  const spoken = new Set(company.languages ?? ["English"]);
  const ours = languagesOf(m).map((c) => LANGUAGE_NAME[c]).filter((n) => n && spoken.has(n));
  return ours.length ? ours : ["English"];
}

/** The language `welcome` is written in: the market's own, where we publish it. */
export function welcomeLanguage(m: SourceMarket): string {
  const own = m.searchLanguage;
  return (company.languages ?? []).includes(LANGUAGE_NAME[own]) && own !== "en" && !/^We plan /.test(m.welcome) ? own : "en";
}

export interface MarketEntry {
  code: string;
  country: string;
  travellers: string;
  region: MarketRegion;
  reads: string[];
  guidesIn: string[];
  pages: string[];
  season: string;
  interests: string[];
  welcome: { language: string; text: string };
}

export const marketDirectory: MarketEntry[] = sourceMarkets.map((m) => ({
  code: m.code,
  country: m.country,
  travellers: m.demonym,
  region: m.region,
  reads: languagesOf(m).map((c) => LANGUAGE_NAME[c] ?? c),
  guidesIn: guidesInFor(m),
  pages: m.pages.map((r) => `${SITE_URL}/${publicPath(r)}`),
  season: m.season,
  interests: m.interests,
  welcome: { language: welcomeLanguage(m), text: m.welcome },
}));

/** The regions in the order the markets first name them. */
export const marketRegions: MarketRegion[] = [...new Set(sourceMarkets.map((m) => m.region))];
