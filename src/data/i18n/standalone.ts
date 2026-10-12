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
import { deSunrise, frSunrise, esSunrise, ruSunrise, ptSunrise, idSunrise, msSunrise, arSunrise } from "./sunrise";
import { deEclipse, frEclipse, esEclipse, itEclipse, ruEclipse, ptEclipse, idEclipse, msEclipse, arEclipse } from "./eclipse";
import { deRamadan, frRamadan, esRamadan, itRamadan, ruRamadan, ptRamadan, idRamadan, msRamadan, arRamadan } from "./ramadan";

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

  // Sunrise at the nine pyramids of Giza, with time for yoga or a photo
  // session — confirmed by the owner on 11 Oct 2026 and wanted "in every
  // language". The Italian edition is alba-alle-piramidi-di-giza above.
  { locale: "de", slug: "sonnenaufgang-pyramiden-gizeh", page: deSunrise },
  { locale: "fr", slug: "lever-du-soleil-pyramides-gizeh", page: frSunrise },
  { locale: "es", slug: "amanecer-en-las-piramides-de-giza", page: esSunrise },
  { locale: "ru", slug: "rassvet-u-piramid-gizy", page: ruSunrise },
  { locale: "pt", slug: "nascer-do-sol-nas-piramides-de-gize", page: ptSunrise },
  { locale: "id", slug: "matahari-terbit-di-piramida-giza", page: idSunrise },
  { locale: "ms", slug: "matahari-terbit-di-piramid-giza", page: msSunrise },
  { locale: "ar", slug: "shorouq-al-shams-ind-al-ahramat", page: arSunrise },

  // The total solar eclipse of 2 August 2027 over Luxor, in the nine other
  // languages. The English original is guides/total-solar-eclipse-2027-luxor
  // .html; see eclipse.ts for the facts and where they come from.
  { locale: "de", slug: "sonnenfinsternis-2027-luxor", page: deEclipse },
  { locale: "fr", slug: "eclipse-solaire-2027-louxor", page: frEclipse },
  { locale: "es", slug: "eclipse-solar-2027-luxor", page: esEclipse },
  { locale: "it", slug: "eclissi-solare-2027-luxor", page: itEclipse },
  { locale: "ru", slug: "solnechnoe-zatmenie-2027-luksor", page: ruEclipse },
  { locale: "pt", slug: "eclipse-solar-2027-luxor", page: ptEclipse },
  { locale: "id", slug: "gerhana-matahari-2027-luxor", page: idEclipse },
  { locale: "ms", slug: "gerhana-matahari-2027-luxor", page: msEclipse },
  { locale: "ar", slug: "kusuf-al-shams-2027-al-uqsur", page: arEclipse },

  // Ramadan in Egypt, in the nine other languages: practical for the European
  // markets, written for those who fast in Arabic, Indonesian and Malay. The
  // English original is collections/ramadan-in-egypt.html; see ramadan.ts.
  // The seasonal ribbon leads each language here during Ramadan and Eid.
  { locale: "de", slug: "ramadan-in-aegypten", page: deRamadan },
  { locale: "fr", slug: "ramadan-en-egypte", page: frRamadan },
  { locale: "es", slug: "ramadan-en-egipto", page: esRamadan },
  { locale: "it", slug: "ramadan-in-egitto", page: itRamadan },
  { locale: "ru", slug: "ramadan-v-egipte", page: ruRamadan },
  { locale: "pt", slug: "ramada-no-egito", page: ptRamadan },
  { locale: "id", slug: "ramadan-di-mesir", page: idRamadan },
  { locale: "ms", slug: "ramadan-di-mesir", page: msRamadan },
  { locale: "ar", slug: "ramadan-fi-masr", page: arRamadan },
];

export const standaloneRoute = (p: StandalonePage) => `${p.locale}/${p.slug}.html`;
