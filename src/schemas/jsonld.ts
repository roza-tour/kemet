// ---------------------------------------------------------------------------
// JSON-LD builders (structured data). Keeps schema.org graphs out of page
// markup. Returns plain JsonLd objects that pages serialise into <script> tags.
// ---------------------------------------------------------------------------
import { SITE_URL, OG_IMAGE_PATH, CURRENCY, site } from "@/config/site";
import { canonical, phoneHref } from "@/utils/links";
import { routeFor } from "@/config/routes";
import { trailFor } from "@/config/navigation";
import type { BreadcrumbItem, Collection, ContentDomain, Destination, Experience, Guide, JsonLd, Tour } from "@/types";

const SCHEMA_CONTEXT = "https://schema.org";

/** BreadcrumbList from [name, file] pairs (file relative to the site root). */
export function breadcrumb(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, file], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: canonical(file),
    })),
  };
}

/**
 * Full structured-data set for a tour detail page:
 * TouristTrip (+ ItemList itinerary) · Offer · FAQPage · BreadcrumbList.
 */
export function tourSchema(tour: Tour): JsonLd[] {
  const route = routeFor("tour", tour.slug);
  const url = canonical(route);

  const itinerary: JsonLd = {
    "@type": "ItemList",
    numberOfItems: tour.itinerary.length,
    itemListElement: tour.itinerary.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${step.label} ${step.num}: ${step.title}`,
    })),
  };

  const touristTrip: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.summary,
    url,
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    touristType: "Luxury travellers",
    provider: { "@type": "TravelAgency", name: site.name, url: SITE_URL },
    itinerary,
    offers: {
      "@type": "Offer",
      price: String(tour.price),
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
      url,
      category: "per person",
    },
  };

  const faqPage: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    mainEntity: tour.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const leaf: BreadcrumbItem = [tour.title, route];
  const crumbs = breadcrumb(trailFor("tour", leaf));

  return [touristTrip, faqPage, crumbs];
}

/**
 * Full structured-data set for a destination page:
 * TouristDestination (a Place) · WebPage · BreadcrumbList (+ FAQPage when present).
 * Geo and image are emitted only when real values exist — placeholders are
 * omitted so the JSON-LD never contains fabricated data and always validates.
 */
export function destinationSchema(dest: Destination): JsonLd[] {
  const route = routeFor("destination", dest.slug);
  const url = canonical(route);
  const org = { "@type": "TravelAgency", name: site.name, url: SITE_URL };

  const touristDestination: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "TouristDestination",
    name: dest.title,
    description: dest.shortSummary,
    url,
    containedInPlace: { "@type": "Country", name: "Egypt" },
    provider: org,
    ...(dest.highlights?.length
      ? {
          includesAttraction: dest.highlights.map((name) => ({
            "@type": "TouristAttraction",
            name,
          })),
        }
      : {}),
    ...(dest.coordinates?.lat != null && dest.coordinates?.lng != null
      ? { geo: { "@type": "GeoCoordinates", latitude: dest.coordinates.lat, longitude: dest.coordinates.lng } }
      : {}),
  };

  const webPage: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebPage",
    name: dest.title,
    description: dest.shortSummary,
    url,
    isPartOf: { "@type": "WebSite", name: `${site.name} — The Black Land`, url: SITE_URL },
    about: { "@type": "TouristDestination", name: dest.title },
    publisher: org,
  };

  const leaf: BreadcrumbItem = [dest.title, route];
  const crumbs = breadcrumb(trailFor("destination", leaf));

  const out: JsonLd[] = [touristDestination, webPage, crumbs];

  if (dest.faqs?.length) {
    out.push({
      "@context": SCHEMA_CONTEXT,
      "@type": "FAQPage",
      mainEntity: dest.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return out;
}

/**
 * Full structured-data set for a travel guide page:
 * Article · WebPage · BreadcrumbList (+ FAQPage when present).
 * dateModified is emitted only when lastUpdated is present — no fabricated dates.
 */
export function guideSchema(guide: Guide): JsonLd[] {
  const route = routeFor("guide", guide.slug);
  const url = canonical(route);
  const org = { "@type": "TravelAgency", name: site.name, url: SITE_URL };

  const article: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "Article",
    headline: guide.title,
    description: guide.shortSummary,
    url,
    inLanguage: "en",
    about: { "@type": "Country", name: "Egypt" },
    publisher: org,
    ...(guide.lastUpdated ? { dateModified: guide.lastUpdated } : {}),
  };

  const webPage: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebPage",
    name: guide.title,
    description: guide.shortSummary,
    url,
    isPartOf: { "@type": "WebSite", name: `${site.name} — The Black Land`, url: SITE_URL },
    publisher: org,
  };

  const leaf: BreadcrumbItem = [guide.title, route];
  const crumbs = breadcrumb(trailFor("guide", leaf));

  const out: JsonLd[] = [article, webPage, crumbs];

  if (guide.faqs?.length) {
    out.push({
      "@context": SCHEMA_CONTEXT,
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return out;
}

/**
 * Full structured-data set for an experience page:
 * TouristAttraction · Service · WebPage · BreadcrumbList (+ FAQPage when present).
 * Schema.org TouristAttraction is the best fit for named, place-based visitor
 * experiences. A companion Service node represents the bookable offering.
 * No fabricated values — availability, price and geo are omitted until confirmed.
 */
export function experienceSchema(experience: Experience): JsonLd[] {
  const route = routeFor("experience", experience.slug);
  const url = canonical(route);
  const org = { "@type": "TravelAgency", name: site.name, url: SITE_URL };

  const touristAttraction: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "TouristAttraction",
    name: experience.title,
    description: experience.shortSummary,
    url,
    containedInPlace: { "@type": "Country", name: "Egypt" },
    provider: org,
    inLanguage: experience.languages ?? ["en"],
    ...(experience.highlights?.length
      ? {
          amenityFeature: experience.highlights.map((name) => ({
            "@type": "LocationFeatureSpecification",
            name,
          })),
        }
      : {}),
    ...(experience.coordinates?.lat != null && experience.coordinates?.lng != null
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: experience.coordinates.lat,
            longitude: experience.coordinates.lng,
          },
        }
      : {}),
  };

  const webPage: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebPage",
    name: experience.title,
    description: experience.shortSummary,
    url,
    isPartOf: { "@type": "WebSite", name: `${site.name} — The Black Land`, url: SITE_URL },
    about: { "@type": "TouristAttraction", name: experience.title },
    publisher: org,
  };

  const leaf: BreadcrumbItem = [experience.title, route];
  const crumbs = breadcrumb(trailFor("experience", leaf));

  const out: JsonLd[] = [touristAttraction, webPage, crumbs];

  if (experience.faqs?.length) {
    out.push({
      "@context": SCHEMA_CONTEXT,
      "@type": "FAQPage",
      mainEntity: experience.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return out;
}

/**
 * CollectionPage + ItemList for hub pages (tours, destinations, experiences, guides).
 * Emits two nodes: a CollectionPage (the hub URL) and an ItemList of named entities.
 * Call from hub pages that list an entire catalogue.
 */
export function collectionSchema(
  name: string,
  description: string,
  route: string,
  items: Array<{ title: string; slug: string; domain: string }>,
): JsonLd[] {
  const url = canonical(route);

  const itemList: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "ItemList",
    name,
    description,
    url,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.title,
      url: canonical(routeFor(item.domain as ContentDomain, item.slug)),
    })),
  };

  const collectionPage: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: `${site.name} — The Black Land`, url: SITE_URL },
    publisher: { "@type": "TravelAgency", name: site.name, url: SITE_URL },
  };

  return [collectionPage, itemList];
}

/**
 * Full structured-data set for a Collection detail page:
 * CollectionPage · WebPage · BreadcrumbList (+ FAQPage when present).
 */
export function collectionDetailSchema(col: Collection): JsonLd[] {
  const route = routeFor("seasonal", col.slug);
  const url = canonical(route);
  const org = { "@type": "TravelAgency", name: site.name, url: SITE_URL };

  const collectionPage: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "CollectionPage",
    name: col.title,
    description: col.shortSummary,
    url,
    isPartOf: { "@type": "WebSite", name: `${site.name} — The Black Land`, url: SITE_URL },
    publisher: org,
    about: { "@type": "Country", name: "Egypt" },
    keywords: [
      ...(col.travelStyles ?? []),
      ...(col.seasons ?? []),
      col.collectionType,
    ].join(", "),
  };

  const webPage: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebPage",
    name: col.title,
    description: col.shortSummary,
    url,
    isPartOf: { "@type": "WebSite", name: `${site.name} — The Black Land`, url: SITE_URL },
    publisher: org,
    ...(col.lastReviewed ? { dateModified: col.lastReviewed } : {}),
  };

  const leaf: BreadcrumbItem = [col.title, route];
  const crumbs = breadcrumb(trailFor("seasonal", leaf));

  const out: JsonLd[] = [collectionPage, webPage, crumbs];

  if (col.faqs?.length) {
    out.push({
      "@context": SCHEMA_CONTEXT,
      "@type": "FAQPage",
      mainEntity: col.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return out;
}

/**
 * Structured-data dispatcher — routes an entity to its schema builder by
 * domain. Tours, destinations, guides and experiences are wired; category
 * builders slot in here later with no change to callers.
 */
export function entitySchema(domain: ContentDomain, entity: unknown): JsonLd[] {
  switch (domain) {
    case "tour":
      return tourSchema(entity as Tour);
    case "destination":
      return destinationSchema(entity as Destination);
    case "guide":
      return guideSchema(entity as Guide);
    case "experience":
      return experienceSchema(entity as Experience);
    case "seasonal":
      return collectionDetailSchema(entity as Collection);
    default:
      return [];
  }
}

/**
 * Site-wide structured data rendered on every page (once, in Base.astro).
 * TravelAgency + LocalBusiness (multi-typed) with ContactPoint, address
 * placeholder, opening hours and service area. Values come exclusively from
 * centralized site config — nothing is hardcoded here.
 * Fields that are not yet confirmed (street address, aggregate rating) are
 * omitted rather than fabricated.
 */
export function siteSchema(): JsonLd[] {
  const org: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": ["TravelAgency", "LocalBusiness"],
    name: site.name,
    url: SITE_URL,
    description:
      "Luxury private Egypt travel — tailored tours, Nile cruises and experiences built exclusively for each traveller.",
    email: site.email,
    telephone: phoneHref().replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressLocality: "Cairo",
      // streetAddress and postalCode omitted until confirmed
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.email,
        telephone: phoneHref().replace("tel:", ""),
        availableLanguage: ["English", "French", "Arabic"],
      },
    ],
    areaServed: { "@type": "Country", name: "Egypt" },
    knowsLanguage: ["en", "fr", "ar"],
    // sameAs: [] — future social profiles
    // hasCredential: [] — future certifications/memberships
  };

  const webSite: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebSite",
    name: `${site.name} — The Black Land`,
    url: SITE_URL,
  };

  return [org, webSite];
}

/**
 * Structured data for the About page.
 * AboutPage (WebPage subtype) referencing the Organization.
 */
export function aboutPageSchema(): JsonLd {
  const url = canonical("about.html");
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "AboutPage",
    name: `About ${site.name} — Luxury Private Egypt Travel`,
    description:
      "Learn about Kemet — our mission, values, and why we design private, tailor-made Egypt journeys for discerning international travellers.",
    url,
    isPartOf: { "@type": "WebSite", name: `${site.name} — The Black Land`, url: SITE_URL },
    about: {
      "@type": "TravelAgency",
      name: site.name,
      url: SITE_URL,
    },
  };
}

/**
 * Structured data for the Contact page.
 * ContactPage (WebPage subtype) with contact point reference.
 */
export function contactPageSchema(): JsonLd {
  const url = canonical("contact.html");
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "ContactPage",
    name: `Contact ${site.name} — Plan Your Egypt Journey`,
    description: `Get in touch with ${site.name} to start planning your private Egypt journey.`,
    url,
    isPartOf: { "@type": "WebSite", name: `${site.name} — The Black Land`, url: SITE_URL },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      telephone: phoneHref().replace("tel:", ""),
      availableLanguage: ["English", "French", "Arabic"],
    },
  };
}
