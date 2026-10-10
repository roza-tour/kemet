// ---------------------------------------------------------------------------
// Pages that exist in one language only.
//
// Some pages answer a question only one market asks — Carnival is Brazil's long
// holiday and nobody else's. Such a page has no English original, so it cannot
// sit in a translation group: a group needs a route in every language, and an
// hreflang cluster of one is noise. It is rendered by the same template as the
// translated pages, carries no hreflang, and is linked from its language's own
// pages so it is never an orphan.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";
import type { LocalizedPage } from "./types";
import { carnaval } from "./pt-carnaval";
import { idUmrah, idZiarah, idSinai, idHalal } from "./id-extra";
import { msUmrah, msZiarah, msSinai, msHalal } from "./ms-extra";
import { frToussaint, esSemanaSanta, itFerragosto, itCapodanno, deWeihnachten, ruNovyGod } from "./eu-holidays";
import { itDoveDormire, itMongolfiera, itAlbaPiramidi } from "./it-extra";

export interface StandalonePage {
  locale: TranslatedLocale;
  /** File name under /<locale>/, without ".html". */
  slug: string;
  page: LocalizedPage;
}

export const STANDALONE_PAGES: StandalonePage[] = [
  { locale: "pt", slug: "carnaval-no-egito", page: carnaval },

  // Indonesia and Malaysia. Four each, and none of them a translation of an
  // English page — these answer what those two markets search and the English
  // site does not address at all: whether Egypt can be attached to an Umrah,
  // what a ziarah route through Islamic Cairo contains, how to reach Mount
  // Sinai, and how food and prayer work across a touring day. Translating four
  // English pages instead would have competed for terms the site already ranks
  // for in English.
  { locale: "id", slug: "umrah-plus-mesir", page: idUmrah },
  { locale: "id", slug: "ziarah-kairo-islam", page: idZiarah },
  { locale: "id", slug: "gunung-sinai", page: idSinai },
  { locale: "id", slug: "halal-dan-waktu-salat", page: idHalal },

  { locale: "ms", slug: "umrah-plus-mesir", page: msUmrah },
  { locale: "ms", slug: "ziarah-kaherah-islam", page: msZiarah },
  { locale: "ms", slug: "bukit-tursina", page: msSinai },
  { locale: "ms", slug: "halal-dan-waktu-solat", page: msHalal },

  // Europe. One holiday window per market — the thing a European types three
  // months before booking is the name of their own holiday next to the word
  // Egypt, and no English page can answer that. Five holidays, five seasons,
  // five different arguments; none is a translation of another.
  { locale: "fr", slug: "toussaint-en-egypte", page: frToussaint },
  { locale: "es", slug: "semana-santa-en-egipto", page: esSemanaSanta },
  { locale: "it", slug: "ferragosto-in-egitto", page: itFerragosto },
  // Italy is the one market with two: Italian is the second language among
  // the site's visitors (46 in the 30 days to 10 Oct 2026, ahead of German),
  // and Christmas-to-Epiphany is the window Italians most often give to Egypt.
  { locale: "it", slug: "natale-e-capodanno-in-egitto", page: itCapodanno },
  // The Italian edition of guides/where-to-stay-in-egypt.html — standalone
  // because a translation group needs all ten locales (see it-extra.ts).
  { locale: "it", slug: "dove-dormire-in-egitto", page: itDoveDormire },
  // Italian editions of two experiences, with their photographs and films.
  { locale: "it", slug: "mongolfiera-luxor-alba", page: itMongolfiera },
  { locale: "it", slug: "alba-alle-piramidi-di-giza", page: itAlbaPiramidi },
  { locale: "de", slug: "weihnachten-in-aegypten", page: deWeihnachten },
  { locale: "ru", slug: "novyy-god-v-egipte", page: ruNovyGod },
];

export const standaloneRoute = (p: StandalonePage) => `${p.locale}/${p.slug}.html`;
