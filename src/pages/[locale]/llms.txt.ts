// /<locale>/llms.txt — one language's page index for assistants.
// The text is built in utils/localeIndex.ts, which says why it exists.
import type { APIRoute } from "astro";
import { TRANSLATED_LOCALES } from "@/config/i18n";
import type { TranslatedLocale } from "@/config/i18n";
import { localeIndex } from "@/utils/localeIndex";

export function getStaticPaths() {
  return TRANSLATED_LOCALES.map((locale) => ({ params: { locale } }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(localeIndex(params.locale as TranslatedLocale), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
