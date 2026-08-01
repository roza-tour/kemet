// ---------------------------------------------------------------------------
// JSON-LD builders (structured data). Keeps schema.org graphs out of page
// markup. Returns plain JsonLd objects that pages serialise into <script> tags.
// ---------------------------------------------------------------------------
import { SITE_URL, OG_IMAGE_PATH, CURRENCY, site } from "@/config/site";
import { canonical, phoneHref } from "@/utils/links";
import { routeFor } from "@/config/routes";
import { trailFor } from "@/config/navigation";
import { company } from "@/data/company";
import { reviewer, type Expert } from "@/data/experts";
import type { BreadcrumbItem, Collection, ContentDomain, Destination, Experience, Guide, JsonLd, Tour } from "@/types";

const SCHEMA_CONTEXT = "https://schema.org";

/**
 * The single, stable identity of the business in the graph.
 *
 * WHY THIS EXISTS
 * Google's Rich Results Test was reporting TWO "Kemet" TravelAgency entities on
 * every page, and listing telephone, priceRange, address and image as missing.
 * They were not missing — the FULL organisation node has all four. What it had
 * found was the second entity: the shorthand `{ "@type": "TravelAgency", name,
 * url }` that every provider/publisher/seller slot was repeating. Each of those
 * looked to a validator like a separate, half-populated business.
 *
 * Those slots now emit a bare @id reference instead. JSON-LD merges nodes that
 * share an @id, so the graph carries exactly one business — the complete one.
 */
export const ORG_ID = `${SITE_URL}#organization`;
const orgRef = () => ({ "@id": ORG_ID });

/** Site-relative asset path → absolute URL, as structured data requires. */
const absolute = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

/**
 * A named person, as a schema.org Person.
 *
 * Given an @id anchored to the About page so every Article, WebPage and
 * reviewedBy reference across the site resolves to ONE entity rather than a
 * separate unlinked Person per page — that single node is what a knowledge
 * graph (and an answer engine deciding whether a claim is attributable) can
 * actually accumulate trust against.
 */
export function personSchema(expert: Expert = reviewer, standalone = false): JsonLd {
  return {
    ...(standalone ? { "@context": SCHEMA_CONTEXT } : {}),
    "@type": "Person",
    "@id": `${canonical("about.html")}#${expert.id}`,
    name: expert.name,
    jobTitle: expert.role,
    description: expert.bio,
    nationality: { "@type": "Country", name: "Egypt" },
    knowsAbout: expert.knowsAbout,
    worksFor: orgRef(),
    ...(expert.sameAs.length ? { sameAs: expert.sameAs } : {}),
  };
}

/**
 * Compact reference to the same Person node, for author/reviewedBy slots.
 *
 * The @id is what actually unifies these into one entity, but a validator —
 * and a crawler — reads each page on its own and sees only what is on it. So
 * the reference carries the job title and a link to the full profile: enough
 * to identify the person without duplicating the whole node on 48 pages. The
 * outbound profile link stays on the About page only, by design.
 */
export function personRef(expert: Expert = reviewer): JsonLd {
  const profile = `${canonical("about.html")}#${expert.id}`;
  return {
    "@type": "Person",
    "@id": profile,
    name: expert.name,
    jobTitle: expert.role,
    url: profile,
  };
}

/**
 * speakable — marks the passage on a page that is a complete, self-contained
 * answer to the page's question. Answer and voice engines lift these; the
 * selector points at the AnswerBox component, which is written to be quotable
 * on its own with no surrounding context.
 */
export const SPEAKABLE = {
  "@type": "SpeakableSpecification",
  cssSelector: [".answer-box h2", ".answer-box .answer-body"],
};

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

  // Use the tour's own hero image (absolute), falling back to the site OG image
  // only when a tour has no hero — never the generic image when a real one exists.
  const image = tour.hero?.src ? `${SITE_URL}${tour.hero.src}` : `${SITE_URL}${OG_IMAGE_PATH}`;

  const touristTrip: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.summary,
    url,
    image,
    inLanguage: "en",
    touristType: "Luxury travellers",
    provider: orgRef(),
    itinerary,
    offers: {
      "@type": "Offer",
      name: `${tour.title} — private, per person`,
      price: String(tour.price),
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
      url,
      // Google warns on an Offer with no stated validity and will eventually
      // treat the price as stale. These are published "from" prices reviewed
      // each season, so the honest horizon is the end of the current year —
      // computed, never hardcoded, so it cannot silently fall into the past.
      priceValidUntil: `${new Date().getUTCFullYear()}-12-31`,
      // Correct pricing unit (was misusing Offer.category for "per person").
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(tour.price),
        priceCurrency: CURRENCY,
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: "person" },
      },
      seller: orgRef(),
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
  const org = orgRef();

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
  const org = orgRef();

  const article: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "Article",
    headline: guide.title,
    description: guide.shortSummary,
    url,
    inLanguage: "en",
    about: { "@type": "Country", name: "Egypt" },
    publisher: org,
    // Attribution. An unsigned travel article is the weakest thing a search
    // system or an answer engine can be handed; naming the specialist who
    // checked it is what makes a claim on this page quotable.
    author: personRef(),
    reviewedBy: personRef(),
    // Google's Rich Results Test flags an Article with no image. The hero is
    // already published on the page, so this is a field we simply were not
    // passing through rather than one we lack. datePublished stays out: we have
    // no true first-published date for these, and inventing one to silence a
    // warning is worse than the warning.
    ...(guide.hero?.src ? { image: absolute(guide.hero.src) } : {}),
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
    reviewedBy: personRef(),
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
  const org = orgRef();

  const touristAttraction: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "TouristAttraction",
    name: experience.title,
    description: experience.shortSummary,
    url,
    containedInPlace: { "@type": "Country", name: "Egypt" },
    provider: org,
    inLanguage: experience.languages ?? ["en"],
    // Both of these come straight from data the page already renders. The
    // Rich Results Test was reporting them missing on 70 pages purely because
    // the builder never forwarded them.
    ...(experience.hero?.src ? { image: absolute(experience.hero.src) } : {}),
    ...(experience.location
      ? {
          address: {
            "@type": "PostalAddress",
            addressLocality: experience.location,
            addressCountry: "EG",
          },
        }
      : {}),
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
    publisher: orgRef(),
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
  const org = orgRef();

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
/** Verified external profiles for the same entity, for schema `sameAs`.
 *  Reads company.socialProfiles — add a URL there and it appears site-wide. */
const socialProfiles: string[] = Object.values(company.socialProfiles ?? {})
  .filter((u): u is string => typeof u === "string" && /^https?:\/\//.test(u));

export function siteSchema(): JsonLd[] {
  const org: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: "Kemet — Luxury Egypt Travel",
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/kemet-logo-gold.webp`,
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    slogan: site.tagline,
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
    // The service is delivered in Egypt; the clientele is worldwide. Stating
    // both stops search engines reading this as an Egypt-local business that
    // only serves people already in Egypt.
    audience: {
      "@type": "Audience",
      audienceType: "International leisure travellers",
      geographicArea: { "@type": "AdministrativeArea", name: "Worldwide" },
    },
    serviceArea: { "@type": "AdministrativeArea", name: "Worldwide" },
    serviceType: "Luxury private tours, Nile cruises and tailor-made travel",
    priceRange: "€€€€",
    knowsLanguage: ["en", "fr", "ar"],
    // Verified profiles that represent this same entity. Populated from
    // company data so adding a profile is a one-line change; omitted entirely
    // while empty rather than emitted as an empty array.
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
    // hasCredential: [] — future certifications/memberships
  };

  const webSite: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebSite",
    name: `${site.name} — The Black Land`,
    url: SITE_URL,
    inLanguage: "en",
    publisher: orgRef(),
  };

  return [org, webSite];
}

/**
 * WebPage node for a page whose job is to answer one question.
 *
 * Carries three things a plain page does not:
 *   · `speakable`, pointing at the AnswerBox — the passage that is written to
 *     survive being lifted out of the page and read on its own.
 *   · `reviewedBy`, so the answer is attributable to a named specialist rather
 *     than to nobody, which is what decides whether a generative engine will
 *     quote it or paraphrase around it.
 *   · `mainEntity` as a Question/Answer pair, restating the answer in machine
 *     -readable form so it does not depend on the parser finding the prose.
 *
 * `dateModified` is passed through only when a real checked-on date exists.
 * There is no build-date fallback: a rebuild is not a review, and stamping
 * every page with today's date would be a freshness claim we cannot support.
 */
export function answerPageSchema(opts: {
  route: string;
  name: string;
  description: string;
  question: string;
  answer: string;
  dateModified?: string;
}): JsonLd {
  const url = canonical(opts.route);
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: `${site.name} — The Black Land`, url: SITE_URL },
    publisher: orgRef(),
    reviewedBy: personRef(),
    speakable: SPEAKABLE,
    mainEntity: {
      "@type": "Question",
      name: opts.question,
      acceptedAnswer: { "@type": "Answer", text: opts.answer },
    },
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
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
    about: orgRef(),
    // The About page is where the Person node lives in full — every byline
    // and every reviewedBy elsewhere on the site is a reference back to here.
    mainEntity: personSchema(),
  };
}

/**
 * Structured data for the standalone Egypt Travel FAQ page:
 * FAQPage (for rich results and answer-engine citation) + BreadcrumbList.
 */
export function faqPageSchema(items: Array<{ q: string; a: string }>): JsonLd[] {
  const faqPage: JsonLd = {
    "@context": SCHEMA_CONTEXT,
    "@type": "FAQPage",
    name: "Egypt Travel FAQ",
    url: canonical("faq.html"),
    inLanguage: "en",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const crumbs = breadcrumb([
    ["Home", "index.html"],
    ["Travel FAQ", "faq.html"],
  ]);
  return [faqPage, crumbs];
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
