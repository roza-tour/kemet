// ---------------------------------------------------------------------------
// Company profile — the single, centralized source of truth for all company
// identity, trust, contact and editorial content on the site. No component
// hardcodes company information; every piece renders from this object.
//
// INTEGRITY NOTE: All fields contain either verified information or are
// explicitly marked as placeholder. No statistics, awards, testimonials,
// certifications or team counts have been invented. Placeholders are filled
// in before going live; they are never published as factual claims.
// ---------------------------------------------------------------------------
import type { CompanyProfile } from "@/types/trust";

export const company: CompanyProfile = {
  name: "Kemet",
  legalName: undefined, // placeholder — confirm legal entity name before publishing

  description:
    "Kemet designs private, luxury journeys through every layer of Egypt — tailored tours, Nile cruises and experiences built around each traveller's interests, pace and timeline.",

  mission:
    "To design deeply researched, entirely private Egypt journeys that connect international travellers to the country's full depth — not just its monuments, but its culture, landscapes and living history.",

  vision:
    "To be the most trusted private travel company in Egypt for discerning international visitors who want more than a standard itinerary.",

  values: [
    "Local knowledge over desk research",
    "Private and tailor-made over group packages",
    "Transparent pricing with no hidden costs",
    "Responsible tourism that benefits Egyptian communities",
    "Authentic cultural connection over surface-level sightseeing",
    "Meticulous curation over volume",
  ],

  headquarters: {
    city: "Cairo",
    country: "Egypt",
    countryCode: "EG",
    streetAddress: undefined, // placeholder — confirm registered address before publishing
    postalCode: undefined,
  },

  serviceArea: ["Egypt"],

  languages: ["English", "French", "Arabic"],
  languageCodes: ["en", "fr", "ar"],

  businessHours: [
    {
      days: "Monday – Friday",
      opens: "09:00",
      closes: "18:00",
      timezone: "EET (UTC+2)",
    },
  ],

  contactChannels: [
    {
      type: "whatsapp",
      label: "WhatsApp",
      availability: "Typically within 2 hours during business hours",
    },
    {
      type: "email",
      label: "Email",
      availability: "Response within 24 hours",
    },
    {
      type: "phone",
      label: "Phone",
      availability: "Mon–Fri, 09:00–18:00 EET",
    },
  ],

  emergencyContactNote:
    "For urgent assistance during an active trip, contact us by WhatsApp at any hour and we will respond as quickly as possible.",

  // -------------------------------------------------------------------------
  // Trust signals — reusable credibility points shown across the site
  // -------------------------------------------------------------------------
  trustSignals: [
    {
      id: "local-expertise",
      symbol: "horus",
      headline: "Local Egypt Expertise",
      body: "Our team lives and works in Egypt. Every itinerary is built on first-hand knowledge of sites, guides and logistics — not desk research or generic templates.",
    },
    {
      id: "entirely-private",
      symbol: "ankh",
      headline: "Entirely Private",
      body: "Every journey is exclusively yours. No shared coaches, no set departure dates, no compromises on pace or priorities.",
    },
    {
      id: "tailor-made",
      symbol: "lotus",
      headline: "Tailor-Made",
      body: "We design each journey around you — your interests, your timeline, your pace. No two Kemet itineraries are identical.",
    },
    {
      id: "transparent-pricing",
      symbol: "sun",
      headline: "Transparent Pricing",
      body: "Your quoted price is your final price. We itemise what is included and excluded before you commit to anything.",
    },
    {
      id: "dedicated-support",
      symbol: "crescent",
      headline: "Dedicated Support",
      body: "From first enquiry to safe return home, you have a named contact who knows your trip in full and is reachable throughout.",
    },
    {
      id: "curated-quality",
      symbol: "lotus",
      headline: "Carefully Curated",
      body: "Our itineraries are researched, tested and refined continuously. We recommend what we know to be excellent — never by commission.",
    },
    {
      id: "responsible-tourism",
      symbol: "ankh",
      headline: "Responsible Tourism",
      body: "We work with locally owned suppliers, follow responsible site-visit practices and prioritise tourism that benefits Egyptian communities.",
    },
    {
      id: "travel-knowledge",
      symbol: "horus",
      headline: "Deep Travel Knowledge",
      body: "Our guides are licensed Egyptologists. Our planning team has visited every site on our programmes. Knowledge is our core product.",
    },
  ],

  // -------------------------------------------------------------------------
  // Our process — how a Kemet journey comes together
  // -------------------------------------------------------------------------
  process: [
    {
      step: 1,
      heading: "Share your vision",
      body: "Tell us your travel dates, the places you've always wanted to see and the pace that suits you. There is no standard starting point — every conversation begins with you.",
    },
    {
      step: 2,
      heading: "We design your itinerary",
      body: "Our team builds a bespoke programme from scratch, matched to what you've told us. No template itineraries, no adapted group tours — a journey designed specifically for you.",
    },
    {
      step: 3,
      heading: "Refine until it's right",
      body: "We revise, add and remove until the programme is exactly what you envisioned. Most itineraries go through two or three rounds of refinement before they're confirmed.",
    },
    {
      step: 4,
      heading: "Travel with confidence",
      body: "You travel knowing every detail has been arranged by people who know Egypt in depth — accommodation, guides, transfers, permits and contingencies.",
    },
  ],

  // -------------------------------------------------------------------------
  // Booking confidence — pre-commitment trust points
  // -------------------------------------------------------------------------
  bookingConfidence: [
    {
      id: "transparent-price",
      headline: "The price you confirm is the price you pay",
      body: "Every quote includes a full itemisation of what is included and what is not. There are no surprises at check-out.",
    },
    {
      id: "built-for-you",
      headline: "Your itinerary, not an adapted template",
      body: "We don't adapt a standard programme to your dates. We build yours from a blank page.",
    },
    {
      id: "direct-contact",
      headline: "A named contact throughout",
      body: "You deal with one person who knows your trip in detail — not a call centre, not a different agent each time.",
    },
    {
      id: "no-pressure",
      headline: "No pressure to decide",
      body: "We take the time needed to get the itinerary right. There is no artificial deadline on a revised proposal.",
    },
    {
      id: "responsible-suppliers",
      headline: "Responsible, licensed operators",
      body: "Every supplier we use — guides, hotels, vessels — is selected for quality, local ownership and responsible practice.",
    },
  ],

  // -------------------------------------------------------------------------
  // Editorial standards — architecture for future content governance
  // -------------------------------------------------------------------------
  editorialStandards: [
    {
      heading: "Written by specialists",
      body: "All destination, guide and tour content is written or reviewed by team members with direct experience of the places and subjects described.",
    },
    {
      heading: "Verified, not fabricated",
      body: "We do not invent statistics, quotes, reviews or credentials. Where information is not yet confirmed, we note it clearly as a placeholder.",
    },
    {
      heading: "Regularly reviewed",
      body: "Content is reviewed on a rolling basis and updated to reflect changes in visa rules, site access, opening hours and travel conditions.",
    },
  ],

  // -------------------------------------------------------------------------
  // Credentials — all marked as placeholder until formally confirmed
  // -------------------------------------------------------------------------
  credentials: [
    {
      type: "license",
      name: "Egypt Tourism Authority Registration",
      issuedBy: "Egypt Tourism Authority",
      placeholder: true,
    },
    {
      type: "membership",
      name: "IATA Accreditation",
      issuedBy: "International Air Transport Association",
      placeholder: true,
    },
    {
      type: "insurance",
      name: "Professional Indemnity Insurance",
      placeholder: true,
    },
  ],

  // Future fields — populated when data is confirmed
  // The profiles Kemet keeps. Each one goes out as schema `sameAs` on every
  // page AND as a visible link in the footer — the pair of signals that tells
  // a search engine kemet-travel.com and the profile are one business.
  //
  // ⚠️ ADD ONLY PROFILES KEMET ACTUALLY RUNS, AND CHECK THE URL TWICE.
  // "Kemet" is a crowded name in Egyptian travel: kemet.travel,
  // kemetexperience.com, kemetegypttravel.net, travelkemet.com and a separate
  // "Kemet Travel Egypt — Day Tours" on TripAdvisor are all different
  // companies. A sameAs pointing at one of THEM does not just fail to help —
  // it actively asks Google to merge this business with a competitor's
  // entity. Open the profile, confirm it links back to kemet-travel.com, then
  // add it here.
  socialProfiles: {
    instagram: "https://www.instagram.com/kemet.travels/",
    // The Giza listing (g294202 / d34709973), supplied by the owner. NOTE it
    // is NOT the older Cairo listing "Kemet Travel Egypt — Day Tours"
    // (g294201 / d3870730) that a search for the brand name turns up first —
    // that is a different company, and pointing sameAs at it would ask Google
    // to merge this business with a competitor.
    tripadvisor:
      "https://www.tripadvisor.com/Attraction_Review-g294202-d34709973-Reviews-Kemet_travel-Giza_Giza_Governorate.html",
    // facebook: pending. The link to hand was a /share/r/ reel link, which
    // points at one post rather than at the page, and share links are
    // short-lived redirects. sameAs has to be the page's own permanent URL —
    // https://www.facebook.com/<page name or profile.php?id=…>. Add it here
    // and it appears in the footer, the schema and llms.txt with no other
    // change.
    //
    // Supplied as web.facebook.com and normalised to www: `web.` is one of
    // Facebook's alternate hosts, and sameAs should carry the canonical one.
    // The numeric profile.php?id= form is permanent and correct — it is what
    // a page has before it is given a username. If a username is ever set
    // (facebook.com/KemetTravel), replace this with it; the id form will keep
    // working either way.
    facebook: "https://www.facebook.com/profile.php?id=61591936196547",
    // The Google Business Profile, supplied by the owner on 9 Oct 2026 as a
    // share.google link. Like Facebook's share links, that is a short-lived
    // redirect; it resolves to a search carrying the profile's Knowledge
    // Graph id (kgmid), and the id is the permanent part. A search URL with
    // only the kgmid opens this profile and nothing else — a plain search for
    // "kemet travel" would also turn up the unrelated Cairo day-tour company
    // noted above.
    google: "https://www.google.com/search?kgmid=/g/11zy30n66w",
  },
  teamMembers: [],
  partners: [],
  paymentMethods: [], // e.g. ["Bank transfer", "Credit card"]
};

// ---------------------------------------------------------------------------
// Profile URLs are validated here rather than trusted, because a wrong one is
// worse than a missing one: `sameAs` is an assertion that two things are the
// same entity, and a typo or a competitor's page asks Google to merge this
// business with somebody else's. A bare domain is the most likely slip —
// "https://instagram.com" says nothing about who we are — so it is rejected.
// ---------------------------------------------------------------------------
/**
 * How each profile is NAMED in public — the footer link and llms.txt both read
 * this, so the brand is spelled the way its owner spells it in both places.
 * Capitalising the object key instead produced "Tripadvisor".
 * A key with no entry falls back to the capitalised key, so adding a network
 * can never render a blank label.
 */
export const SOCIAL_LABELS: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  tripadvisor: "TripAdvisor",
  google: "Google",
  youtube: "YouTube",
  tiktok: "TikTok",
  pinterest: "Pinterest",
  linkedin: "LinkedIn",
  x: "X",
};

/** The public name for a profile key. */
export const socialLabel = (key: string): string =>
  SOCIAL_LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1);

const PROFILE_HOSTS: Record<string, RegExp> = {
  instagram: /(^|\.)instagram\.com$/i,
  facebook: /(^|\.)facebook\.com$/i,
  tripadvisor: /(^|\.)tripadvisor\.[a-z.]+$/i,
  // google.com, not share.google: the share host is the short-lived redirect.
  google: /(^|\.)google\.[a-z.]+$/i,
  youtube: /(^|\.)youtube\.com$/i,
  tiktok: /(^|\.)tiktok\.com$/i,
  pinterest: /(^|\.)pinterest\.[a-z.]+$/i,
  linkedin: /(^|\.)linkedin\.com$/i,
  x: /(^|\.)(x|twitter)\.com$/i,
};
for (const [key, url] of Object.entries(company.socialProfiles ?? {})) {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`company.socialProfiles.${key}: "${url}" is not a valid URL.`);
  }
  if (parsed.protocol !== "https:") {
    throw new Error(`company.socialProfiles.${key}: must be https, got "${url}".`);
  }
  if (parsed.pathname.replace(/\/+$/, "") === "") {
    throw new Error(
      `company.socialProfiles.${key}: "${url}" is a bare domain, not a profile. ` +
        `sameAs must point at the account itself.`,
    );
  }
  const expected = PROFILE_HOSTS[key];
  if (expected && !expected.test(parsed.hostname)) {
    throw new Error(
      `company.socialProfiles.${key}: "${url}" is not on a ${key} domain.`,
    );
  }
  // Facebook's numeric form carries the identity in the QUERY, not the path,
  // so the bare-domain check above cannot catch a truncated one: plain
  // "/profile.php" has a path, looks fine, and identifies nobody. Losing the
  // query string is the likeliest way to copy this URL wrongly.
  if (parsed.pathname === "/profile.php" && !parsed.searchParams.get("id")) {
    throw new Error(
      `company.socialProfiles.${key}: "${url}" is missing its ?id= — ` +
        `profile.php on its own points at no page.`,
    );
  }
  // A Google profile is identified by its query, never its path: /search or
  // /maps on its own is every business on Earth. Same slip as profile.php.
  if (key === "google" && !parsed.searchParams.get("kgmid") && !parsed.searchParams.get("cid")) {
    throw new Error(
      `company.socialProfiles.${key}: "${url}" carries no kgmid= or cid= — ` +
        `without one it points at no profile.`,
    );
  }
  // A link to a POST is not a link to the account. sameAs is a claim about
  // identity, and these paths are all content: a share redirect, a reel, a
  // single post, a photo, a story.
  if (/^\/(share|reel|reels|posts|photo|photos|videos|stories|p)\//.test(parsed.pathname)) {
    throw new Error(
      `company.socialProfiles.${key}: "${url}" points at a post, not the profile. ` +
        `sameAs must be the account's own permanent URL.`,
    );
  }
}
