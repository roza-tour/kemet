// ---------------------------------------------------------------------------
// Structured data for a TRANSLATED page's subject.
//
// The English pages declare what they are about with the builders in
// schemas/jsonld.ts (destinationSchema, experienceSchema, programmeSchema,
// guideSchema). Those take English records and print English names. A
// translated page needs the same entity, with the same language-neutral facts
// (coordinates, photograph, date) and its own words. These are that: one
// function per entity type, each returning a single node the translated
// template adds beside its WebPage.
//
// They deliberately carry NO reviewer. A named reviewer in markup is a claim
// that a person checked this page; nobody has read the nine translations as a
// reviewer, the pages show no byline, and llms.txt tells assistants that a
// page without a byline is published by Kemet. The organisation is the author.
// ---------------------------------------------------------------------------
import { SITE_URL } from "@/config/site";
import { LOCALE_META } from "@/config/i18n";
import type { TranslatedLocale } from "@/config/i18n";
import { canonical } from "@/utils/links";
import { orgRef } from "@/schemas/jsonld";
import { PRICES_VALID_UNTIL } from "@/data/tours";

type Ld = Record<string, unknown>;
const CTX = "https://schema.org";
const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);
const egypt = { "@type": "Country", name: "Egypt" };
const geoOf = (c?: { lat?: number | null; lng?: number | null }) =>
  c?.lat != null && c?.lng != null
    ? { geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lng } }
    : {};

export function destinationLd(
  _locale: TranslatedLocale, route: string,
  t: { name: string; summary: string; highlights: string[] },
  d: { coordinates?: { lat?: number | null; lng?: number | null }; hero?: { src?: string } },
): Ld {
  return {
    "@context": CTX,
    "@type": "TouristDestination",
    name: t.name,
    description: t.summary,
    url: canonical(route),
    containedInPlace: egypt,
    ...(d.hero?.src ? { image: abs(d.hero.src) } : {}),
    ...(t.highlights.length ? { includesAttraction: t.highlights.map((name) => ({ "@type": "TouristAttraction", name })) } : {}),
    ...geoOf(d.coordinates),
  };
}

export function attractionLd(
  _locale: TranslatedLocale, route: string,
  t: { name: string; summary: string; where?: string },
  src: { coordinates?: { lat?: number | null; lng?: number | null }; image?: string },
): Ld {
  return {
    "@context": CTX,
    "@type": "TouristAttraction",
    name: t.name,
    description: t.summary,
    url: canonical(route),
    containedInPlace: egypt,
    ...(src.image ? { image: abs(src.image) } : {}),
    ...(t.where ? { address: { "@type": "PostalAddress", addressLocality: t.where, addressCountry: "EG" } } : {}),
    ...geoOf(src.coordinates),
  };
}

export function tripLd(
  locale: TranslatedLocale, route: string,
  t: { title: string; summary: string; days: Array<{ label?: string; title: string }> },
  image?: string,
  offer?: { price: number },
): Ld {
  return {
    "@context": CTX,
    "@type": "TouristTrip",
    name: t.title,
    description: t.summary,
    url: canonical(route),
    inLanguage: LOCALE_META[locale].tag,
    provider: orgRef(),
    ...(image ? { image: abs(image) } : {}),
    itinerary: {
      "@type": "ItemList",
      numberOfItems: t.days.length,
      itemListElement: t.days.map((d, i) => ({
        "@type": "ListItem", position: i + 1, name: d.label ? `${d.label}: ${d.title}` : d.title,
      })),
    },
    ...(offer
      ? {
          offers: {
            "@type": "Offer",
            price: offer.price,
            priceCurrency: "EUR",
            url: canonical(route),
            availability: "https://schema.org/InStock",
            priceValidUntil: PRICES_VALID_UNTIL,
            seller: orgRef(),
          },
        }
      : {}),
  };
}

export function articleLd(
  locale: TranslatedLocale, route: string,
  t: { title: string; summary: string },
  src: { image?: string; dateModified?: string },
): Ld {
  return {
    "@context": CTX,
    "@type": "Article",
    headline: t.title,
    description: t.summary,
    url: canonical(route),
    mainEntityOfPage: canonical(route),
    inLanguage: LOCALE_META[locale].tag,
    about: egypt,
    author: orgRef(),
    publisher: orgRef(),
    ...(src.image ? { image: abs(src.image) } : {}),
    ...(src.dateModified ? { dateModified: src.dateModified } : {}),
  };
}
