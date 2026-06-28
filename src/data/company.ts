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
  socialProfiles: {}, // e.g. { instagram: "https://...", facebook: "https://..." }
  teamMembers: [],
  partners: [],
  paymentMethods: [], // e.g. ["Bank transfer", "Credit card"]
};
