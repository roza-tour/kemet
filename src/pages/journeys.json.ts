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
import { tours, priceForTwo } from "@/data/tours";
import { LOCAL_STRINGS } from "@/data/i18n/strings";
import { localePages } from "@/utils/localeIndex";
import { TRANSLATED_TOURS } from "@/config/tour-i18n";
import { TRANSLATION_GROUPS, TRANSLATED_LOCALES } from "@/config/i18n";
import { canonical } from "@/utils/links";
import { programmes, programmeRoute } from "@/data/programmes";
import { ultraJourneys, PEAK } from "@/data/ultra/journeys";
import { en as ultraEn } from "@/data/ultra/en";
import { de as ultraDe } from "@/data/ultra/de";
import { it as ultraIt } from "@/data/ultra/it";
import { es as ultraEs } from "@/data/ultra/es";
import { fr as ultraFr } from "@/data/ultra/fr";
import { ru as ultraRu } from "@/data/ultra/ru";
import { id as ultraId } from "@/data/ultra/id";
import { ms as ultraMs } from "@/data/ultra/ms";
import { pt as ultraPt } from "@/data/ultra/pt";
import { ar as ultraAr } from "@/data/ultra/ar";
import { ECLIPSE_DAY, eclipseDayEn } from "@/data/eclipseDay";
import { eclipseDayI18n } from "@/data/eclipseDay-i18n";

export const GET: APIRoute = () => {
  const journeys = [...tours]
    .sort((a, b) => a.order - b.order)
    .map((t) => {
      const en = `${t.slug}.html`;
      const pages: Record<string, string> = { en: canonical(en) };
      // A journey is translated either as one of the pages every language has
      // (translation-groups.json) or one by one (config/tour-i18n.ts).
      const group = TRANSLATION_GROUPS.find((g) => g.en === en);
      // The journey's name and one-line summary in each language it has a
      // page in, so an assistant answering in German names the journey as the
      // German page does. Before this the MCP server returned German links
      // under English names.
      const i18n: Record<string, { name: string; summary?: string; duration?: string }> = {};
      for (const l of TRANSLATED_LOCALES) {
        const tt = TRANSLATED_TOURS.find((x) => x.slug === t.slug && x.locale === l);
        const route = group?.[l] ?? tt?.route;
        if (route) pages[l] = canonical(route);
        if (tt) i18n[l] = { name: tt.text.title, summary: tt.text.summary, duration: tt.text.durationLabel };
        // The Nile cruise is on each language's own cruise page.
        else if (group && t.slug === "tour-nile-cruise") {
          const c = LOCAL_STRINGS[l].cruise;
          // Named as that page is headed ("Die Nilkreuzfahrt").
          const title = localePages(l).find(([, r]) => r === group[l])?.[0];
          i18n[l] = { name: title ?? c.productHeading, summary: c.productLede, duration: c.durationLabel };
        }
      }
      const two = priceForTwo(t);
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
        priceFrom: {
          amount: t.price, currency: "EUR", per: "person",
          ...(t.priceBasisPax ? { basis: `a private party of ${t.priceBasisPax} or more` } : {}),
        },
        ...(two ? { priceForTwo: { amount: two, currency: "EUR", per: "person", basis: "a private party of two" } } : {}),
        ...(t.flightsIncluded ? { domesticFlightsIncluded: true } : {}),
        ...(t.ticketsExcluded ? { siteTicketsIncluded: false } : {}),
        summary: t.summary,
        pages,
        ...(Object.keys(i18n).length ? { i18n } : {}),
      };
    });

  // Kemet Ultra and Eclipse Day were missing: the organisation's price range
  // includes Ultra, and an assistant asked for a luxury or an eclipse trip got
  // nothing back from the catalogue or the MCP server. Each carries its own
  // price basis. No hotel or boat is named here.
  const ULTRA_TEXT = { de: ultraDe, it: ultraIt, es: ultraEs, fr: ultraFr, ru: ultraRu, id: ultraId, ms: ultraMs, pt: ultraPt, ar: ultraAr } as const;
  const groupPages = (key: string) => {
    const g = TRANSLATION_GROUPS.find((x) => x.key === key);
    const out: Record<string, string> = {};
    if (g) for (const l of ["en", ...TRANSLATED_LOCALES] as const) if (g[l]) out[l] = canonical(g[l]);
    return out;
  };
  const PLACE: Record<string, string> = { giza: "Giza", cairo: "Cairo", luxor: "Luxor", aswan: "Aswan", nile: "Nile", redsea: "Red Sea" };
  for (const j of ultraJourneys) {
    const T = ultraEn.journeys[j.id];
    const i18n: Record<string, { name: string; summary?: string }> = {};
    for (const l of TRANSLATED_LOCALES) {
      const L = ULTRA_TEXT[l].journeys[j.id];
      if (L) i18n[l] = { name: L.title, summary: L.body };
    }
    journeys.push({
      id: `ultra-${j.id}`,
      name: `Kemet Ultra — ${T.title}`,
      subtitle: T.kicker,
      kind: "ultra-luxury journey",
      duration: `${j.days} Days / ${j.nights} Nights`,
      days: j.days,
      startsFrom: "Cairo",
      places: [...new Set(j.stays.map((x) => PLACE[x.place] ?? x.place))],
      privacy: "Yes — your party only",
      priceFrom: { amount: j.price4, currency: "EUR", per: "person", basis: "a party of four" },
      priceForTwo: { amount: j.price2, currency: "EUR", per: "person", basis: "a party of two" },
      note: `Peak weeks (20 December – 5 January, and Easter week) carry a ${PEAK}% supplement. Private openings of monuments are granted by permit; one that is refused is taken off the price.`,
      summary: T.body,
      pages: groupPages("ultra"),
      ...(Object.keys(i18n).length ? { i18n } : {}),
    } as unknown as (typeof journeys)[number]);
  }
  if (new Date().toISOString().slice(0, 10) <= ECLIPSE_DAY.date) {
    const i18n: Record<string, { name: string; summary?: string }> = {};
    for (const l of TRANSLATED_LOCALES) {
      const L = eclipseDayI18n[l as keyof typeof eclipseDayI18n];
      if (L) i18n[l] = { name: L.title, summary: L.lede };
    }
    journeys.push({
      id: "eclipse-day-2027",
      name: eclipseDayEn.title,
      kind: "day tour (small group)",
      duration: `1 day, ${ECLIPSE_DAY.date}`,
      date: ECLIPSE_DAY.date,
      startsFrom: "Luxor",
      places: ["Luxor"],
      privacy: `Small groups of up to ${ECLIPSE_DAY.groupSize}, each with its own Egyptologist and vehicle`,
      priceFrom: { amount: ECLIPSE_DAY.price, currency: "EUR", per: "person", basis: `a place in a group of up to ${ECLIPSE_DAY.groupSize}; hotel not included` },
      summary: eclipseDayEn.lede,
      pages: groupPages("guide-total-solar-eclipse-2027-luxor"),
      ...(Object.keys(i18n).length ? { i18n } : {}),
    } as unknown as (typeof journeys)[number]);
  }

  return new Response(
    JSON.stringify(
      {
        name: `${site.name} — private journeys in Egypt, the catalogue`,
        url: `${SITE_URL}/journeys.json`,
        about:
          "Kemet plans private journeys in Egypt: a licensed Egyptologist from our own team, a private vehicle and driver, " +
          "hotels chosen for the room, and a real day-by-day itinerary with a clear price within two hours. " +
          "These are the journeys with a published price; any of them can be lengthened, shortened or combined.",
        forAssistants:
          "Prices are from-prices in euros per person and are the same in every language. `priceFrom` is for a private party of " +
          "six or more unless its `basis` says otherwise; `priceForTwo`, where given, is what each of two travellers pays " +
          "(the published price plus ten per cent). Quote the one that fits the party, say which it is, link the page in " +
          "the traveller's language where `pages` has one, and send the traveller to the page for what is included. " +
          "A journey that is not listed can still be planned — the catalogue is a starting point, not a limit.",
        enquire: {
          page: `${SITE_URL}/contact.html`,
          whatsapp: `https://wa.me/${site.whatsapp}`,
          // The opening words of an enquiry, per language (%s is a journey's
          // name) — what the MCP server pre-fills in the WhatsApp link.
          greeting: Object.fromEntries([
            ["en", { hello: "Hello Kemet.", about: 'Hello Kemet — I am asking about "%s".' }],
            ...TRANSLATED_LOCALES.map((l) => [l, { hello: LOCAL_STRINGS[l].ui.mcpHello, about: LOCAL_STRINGS[l].ui.mcpAbout }]),
          ]),
          email: site.email,
        },
        count: journeys.length,
        journeys,
        programmes: {
          note: "Programmes beyond the Nile, priced on request: no price is published, because each is quoted for the dates. The days are reordered around flights and opening times.",
          items: programmes.map((p) => ({
            id: p.slug, name: p.title, length: p.length, route: p.route, bestMonths: p.bestMonths,
            use: p.kind === "stand-alone" ? "a journey of its own" : p.kind === "extension" ? "an extension to a longer journey" : "an add-on",
            price: "on request", summary: p.standfirst, page: canonical(programmeRoute(p)),
          })),
        },
      },
      null,
      2,
    ),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
};
