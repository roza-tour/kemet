// ---------------------------------------------------------------------------
// Site configuration — the single place to change brand, contact and deploy
// settings. Values fall back to placeholders when the matching PUBLIC_* env
// var is unset (see .env.example), so a default build is reproducible.
//
// Replace the placeholders (or set the env vars) before going live.
//
// Navigation has moved to src/config/navigation.ts; routing/URL conventions to
// src/config/routes.ts; the filter/search vocabulary to src/config/taxonomy.ts.
// ---------------------------------------------------------------------------

const env = import.meta.env;

/** Live origin, no trailing slash. Must match `site` in astro.config.mjs. */
export const SITE_URL = (env.PUBLIC_SITE_URL ?? "https://kemet-travel.com").replace(/\/+$/, "");

/** Pricing/format constants. */
export const CURRENCY = "EUR";
export const CURRENCY_SYMBOL = "€";
/** Locale used for number formatting (en-IE renders EUR as "€1,741"). */
export const NUMBER_LOCALE = "en-IE";

/** Document/meta constants. */
export const HTML_LANG = "en";
export const OG_LOCALE = "en_US";
/** Open Graph share image path, relative to the site root, and its intrinsic
 *  dimensions (scrapers use these for card layout). */
export const OG_IMAGE_PATH = "/og.jpg";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT = "Kemet — luxury private Egypt travel";

/** Approximate geographic centre used for geo-targeting meta (Cairo). */
export const GEO_REGION = "EG";
export const GEO_PLACENAME = "Egypt";
export const GEO_POSITION = "30.0444;31.2357";

/** Default keyword set (site-wide fallback). Note: the <meta keywords> tag has
 *  negligible weight with Google — kept for smaller engines and completeness;
 *  real ranking comes from titles, content and structured data. Pages may pass
 *  a more specific `keywords` string to override this. */
export const DEFAULT_KEYWORDS = [
  "Egypt tours",
  "luxury Egypt travel",
  "private Egypt tours",
  "tailor-made Egypt holidays",
  "Egypt vacation packages", // US phrasing
  "Egypt holidays", // UK/AU phrasing
  "trip to Egypt",
  "Egypt travel packages",
  "Egypt tour operator",
  "all-inclusive Egypt tours",
  "Nile cruise",
  "Nile river cruise",
  "Cairo tours",
  "Giza pyramids tour",
  "Luxor tours",
  "Aswan tours",
  "Abu Simbel tour",
  "Red Sea holidays",
  "Egypt travel agency",
  "Egypt tour packages",
  "bespoke Egypt itinerary",
  "Egyptologist guided tours",
].join(", ");

export const site = {
  name: "Kemet",
  // Wordmark + meaning
  wordmark: "KEMET",
  meaning: "the Black Land",
  eyebrow: "Luxury Travel · Egypt",
  hiero: "𓆎𓅓𓏏𓊖", // mꜣt / Kemet glyph row
  tagline: "Eight Egypts. One journey, made for you.",

  // Deploy-time values (env-driven, with placeholders as fallback)
  domain: SITE_URL,
  whatsapp: env.PUBLIC_WHATSAPP ?? "201158367162", // international format, digits only
  email: env.PUBLIC_CONTACT_EMAIL ?? "info@kemet-travel.com",
  phoneDisplay: env.PUBLIC_CONTACT_PHONE ?? "+20 11 5836 7162",

  description:
    "Kemet designs private, luxury journeys through every layer of Egypt — twenty-five curated tours from Cairo and Giza to a 14-day grand tour, Nile cruises, the Red Sea, and the country's eight cultural worlds.",

  copyright: "© 2026 Kemet — Luxury Egypt Travel",
} as const;
