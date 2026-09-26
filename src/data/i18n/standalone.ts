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

export interface StandalonePage {
  locale: TranslatedLocale;
  /** File name under /<locale>/, without ".html". */
  slug: string;
  page: LocalizedPage;
}

export const STANDALONE_PAGES: StandalonePage[] = [
  { locale: "pt", slug: "carnaval-no-egito", page: carnaval },
];

export const standaloneRoute = (p: StandalonePage) => `${p.locale}/${p.slug}.html`;
