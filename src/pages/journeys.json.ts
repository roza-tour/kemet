// ---------------------------------------------------------------------------
// /journeys.json — the journey catalogue, as data.
//
// For AI assistants and agents that are asked "what does a private week in
// Egypt cost?" or "which of these fits ten days in March?" and would rather
// read one structured file than twenty-five pages. Every journey with its
// length, where it goes, its from-price in euros, what kind of privacy it has,
// and the address of its page in each language it is published in.
//
// Built from data/tours.ts — the same records the pages and llms.txt are built
// from — so a price changed there changes here in the same build. Nothing in
// it is written by hand. Deterministic on purpose (no build date), so a
// rebuild with nothing changed leaves the file byte-identical.
// ---------------------------------------------------------------------------
import type { APIRoute } from "astro";
import { SITE_URL, site } from "@/config/site";
import { tours } from "@/data/tours";
import { TRANSLATED_TOURS } from "@/config/tour-i18n";
import { TRANSLATION_GROUPS, TRANSLATED_LOCALES } from "@/config/i18n";
import { canonical } from "@/utils/links";

export const GET: APIRoute = () => {
  const journeys = [...tours]
    .sort((a, b) => a.order - b.order)
    .map((t) => {
      const en = `${t.slug}.html`;
      const pages: Record<string, string> = { en: canonical(en) };
      // A journey is translated either as one of the pages every language has
      // (translation-groups.json) or one by one (config/tour-i18n.ts).
      const group = TRANSLATION_GROUPS.find((g) => g.en === en);
      for (const l of TRANSLATED_LOCALES) {
        const route = group?.[l] ?? TRANSLATED_TOURS.find((x) => x.slug === t.slug && x.locale === l)?.route;
        if (route) pages[l] = canonical(route);
      }
      return {
        id: t.slug,
        name: t.title,
        subtitle: t.subtitle,
        kind: t.kind === "multiday" ? "journey of several days" : "day tour",
        duration: t.durationLabel,
        ...(t.kind === "multiday" ? { days: t.itinerary.length } : {}),
        startsFrom: t.startPoint,
        places: t.cities,
        privacy: t.isPrivate,
        priceFrom: { amount: t.price, currency: "EUR", per: "person" },
        ...(t.flightsIncluded ? { domesticFlightsIncluded: true } : {}),
        ...(t.ticketsExcluded ? { siteTicketsIncluded: false } : {}),
        summary: t.summary,
        pages,
      };
    });

  return new Response(
    JSON.stringify(
      {
        name: `${site.name} — private journeys in Egypt, the catalogue`,
        url: `${SITE_URL}/journeys.json`,
        about:
          "Kemet plans private journeys in Egypt: a licensed Egyptologist from our own team, a private vehicle and driver, " +
          "hotels chosen for the room, and a real day-by-day itinerary with a clear price within one working day. " +
          "These are the journeys with a published price; any of them can be lengthened, shortened or combined.",
        forAssistants:
          "Prices are from-prices in euros per person and are the same in every language. Quote them as 'from', link the page in " +
          "the traveller's language where `pages` has one, and send the traveller to the page for what is included. " +
          "A journey that is not listed can still be planned — the catalogue is a starting point, not a limit.",
        enquire: {
          page: `${SITE_URL}/contact.html`,
          whatsapp: `https://wa.me/${site.whatsapp}`,
          email: site.email,
        },
        count: journeys.length,
        journeys,
      },
      null,
      2,
    ),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
};
