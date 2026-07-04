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
export const SITE_URL = (env.PUBLIC_SITE_URL ?? "https://kemetvoyages.com").replace(/\/+$/, "");

/** Pricing/format constants. */
export const CURRENCY = "EUR";
export const CURRENCY_SYMBOL = "€";
/** Locale used for number formatting (en-IE renders EUR as "€1,741"). */
export const NUMBER_LOCALE = "en-IE";

/** Document/meta constants. */
export const HTML_LANG = "en";
export const OG_LOCALE = "en_US";
/** Open Graph share image path, relative to the site root. */
export const OG_IMAGE_PATH = "/og.jpg";

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
  whatsapp: env.PUBLIC_WHATSAPP ?? "201000000000", // international format, digits only
  email: env.PUBLIC_CONTACT_EMAIL ?? "hello@kemetvoyages.com",
  phoneDisplay: env.PUBLIC_CONTACT_PHONE ?? "+20 100 000 0000",

  description:
    "Kemet designs private, luxury journeys through every layer of Egypt — twenty-five curated tours from Cairo and Giza to a 14-day grand tour, Nile cruises, the Red Sea, and the country's eight cultural worlds.",

  copyright: "© 2026 Kemet — Luxury Egypt Travel",
} as const;
