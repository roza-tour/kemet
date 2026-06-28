// ---------------------------------------------------------------------------
// Conversion configuration — the single source of truth for enquiry types,
// user journeys, CTA placement strategy and decision-support defaults.
//
// No contact information is stored here — all hrefs are built at render time
// from site.ts via links.ts. Adding a new enquiry type or journey is
// data-only; no component changes are required.
// ---------------------------------------------------------------------------

import type {
  EnquiryType,
  UserJourney,
  CTAPlacement,
} from "@/types/conversion";

// ---------------------------------------------------------------------------
// Enquiry types — each drives an EnquiryPanel card and pre-fills
// WhatsApp / email links via links.ts helpers.
// ---------------------------------------------------------------------------

export const enquiryTypes: EnquiryType[] = [
  {
    id: "general",
    label: "General Enquiry",
    description: "Questions about Egypt, our destinations or how we work.",
    icon: "𓂀",
    whatsappMessage: "Hello Kemet — I have a question about Egypt travel.",
    emailSubject: "General enquiry — Kemet Egypt",
  },
  {
    id: "quote",
    label: "Request a Quote",
    description: "Share your dates and group size for a personalised price.",
    icon: "𓋴",
    whatsappMessage: "Hello Kemet — I'd like to request a quote for an Egypt journey.",
    emailSubject: "Quote request — Kemet Egypt",
    emailBody:
      "Hello Kemet,\n\nI'd like to request a quote for an Egypt journey.\n\nTravel dates:\nGroup size:\nDestinations of interest:\nBudget range:\n\nThank you.",
  },
  {
    id: "custom-itinerary",
    label: "Custom Itinerary",
    description: "Tell us your vision — we design a private journey from scratch.",
    icon: "𓆣",
    whatsappMessage:
      "Hello Kemet — I'd like to build a custom Egypt itinerary.",
    emailSubject: "Custom itinerary request — Kemet Egypt",
    emailBody:
      "Hello Kemet,\n\nI'd like to discuss a custom Egypt itinerary.\n\nTravel dates:\nDuration:\nGroup size:\nDestinations / interests:\nBudget range:\n\nThank you.",
  },
  {
    id: "private-tour",
    label: "Private Tour",
    description: "Exclusively yours — a fully private guide, driver and vehicle.",
    icon: "𓇋",
    whatsappMessage:
      "Hello Kemet — I'm interested in a private tour of Egypt.",
    emailSubject: "Private tour enquiry — Kemet Egypt",
    emailBody:
      "Hello Kemet,\n\nI'm interested in a private tour of Egypt.\n\nPreferred tour:\nTravel dates:\nGroup size:\n\nThank you.",
  },
  {
    id: "group-travel",
    label: "Group Travel",
    description: "Special programmes for groups of 8 or more travellers.",
    icon: "𓀀",
    whatsappMessage:
      "Hello Kemet — I'd like to discuss a group Egypt journey.",
    emailSubject: "Group travel enquiry — Kemet Egypt",
    emailBody:
      "Hello Kemet,\n\nI'd like to discuss group travel to Egypt.\n\nGroup size:\nTravel dates:\nSpecial requirements:\n\nThank you.",
  },
  {
    id: "luxury-travel",
    label: "Luxury Travel",
    description: "Five-star hotels, private Nile cruises and exclusive access.",
    icon: "𓂋",
    whatsappMessage:
      "Hello Kemet — I'd like to discuss a luxury Egypt journey.",
    emailSubject: "Luxury travel enquiry — Kemet Egypt",
    emailBody:
      "Hello Kemet,\n\nI'm interested in a luxury Egypt journey.\n\nTravel dates:\nGroup size:\nAccommodation preference:\n\nThank you.",
  },
  {
    id: "family-travel",
    label: "Family Travel",
    description: "Egypt through a child's eyes — safe, age-appropriate and unforgettable.",
    icon: "𓆑",
    whatsappMessage:
      "Hello Kemet — I'd like to plan a family Egypt journey.",
    emailSubject: "Family travel enquiry — Kemet Egypt",
    emailBody:
      "Hello Kemet,\n\nI'd like to plan a family trip to Egypt.\n\nTravel dates:\nAdults:\nChildren (ages):\n\nThank you.",
  },
  {
    id: "business-travel",
    label: "Business Travel",
    description: "Corporate retreats, incentive travel and MICE programmes.",
    icon: "𓏠",
    whatsappMessage:
      "Hello Kemet — I'd like to discuss a corporate Egypt programme.",
    emailSubject: "Business travel enquiry — Kemet Egypt",
    emailBody:
      "Hello Kemet,\n\nI'd like to discuss a corporate travel programme to Egypt.\n\nType of event:\nGroup size:\nTravel dates:\nBudget range:\n\nThank you.",
  },
];

// ---------------------------------------------------------------------------
// User journeys — map the most common visitor paths from discovery to enquiry.
// These are reference architecture; no routing logic depends on them.
// ---------------------------------------------------------------------------

export const userJourneys: UserJourney[] = [
  {
    id: "organic-to-tour",
    name: "Organic Search → Tour → Enquiry",
    entryPoint: "Google / organic",
    stages: [
      {
        stage: 1,
        page: "homepage",
        intent: "Brand discovery",
        ctaRole: "soft",
        conversionGoal: "Orient the visitor; establish trust",
      },
      {
        stage: 2,
        page: "destination",
        intent: "Destination research",
        ctaRole: "planning",
        conversionGoal: "Surface related tours; keep the journey moving",
      },
      {
        stage: 3,
        page: "tour",
        intent: "Tour evaluation",
        ctaRole: "quote",
        conversionGoal: "Drive to enquiry; answer objections in-page",
      },
      {
        stage: 4,
        page: "contact",
        intent: "Ready to enquire",
        ctaRole: "primary",
        conversionGoal: "Convert to WhatsApp or email lead",
      },
    ],
  },
  {
    id: "guide-to-tour",
    name: "Travel Guide → Destination → Tour → Quote",
    entryPoint: "Google / travel guide",
    stages: [
      {
        stage: 1,
        page: "guide",
        intent: "Trip planning research",
        ctaRole: "soft",
        conversionGoal: "Establish expertise; surface expert help offer",
      },
      {
        stage: 2,
        page: "destination",
        intent: "Destination shortlisting",
        ctaRole: "planning",
        conversionGoal: "Connect destination interest to available tours",
      },
      {
        stage: 3,
        page: "tour",
        intent: "Tour selection",
        ctaRole: "quote",
        conversionGoal: "Convert to quote request",
      },
    ],
  },
  {
    id: "direct-to-contact",
    name: "Direct / Referral → Contact Page",
    entryPoint: "Direct / referral",
    stages: [
      {
        stage: 1,
        page: "contact",
        intent: "High intent — ready to enquire",
        ctaRole: "primary",
        conversionGoal: "Immediate conversion via WhatsApp or email",
      },
    ],
  },
  {
    id: "homepage-custom",
    name: "Homepage → Custom Trip Builder",
    entryPoint: "Homepage",
    stages: [
      {
        stage: 1,
        page: "homepage",
        intent: "General inspiration",
        ctaRole: "soft",
        conversionGoal: "Engage; surface Eight Egypts concept",
      },
      {
        stage: 2,
        page: "tour",
        intent: "Tour browsing",
        ctaRole: "planning",
        conversionGoal: "Transition from browsing to planning",
      },
      {
        stage: 3,
        page: "contact",
        intent: "Custom journey planning",
        ctaRole: "consultation",
        conversionGoal: "Convert to custom itinerary request",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// CTA placement strategy — intentional density per page context.
// Used as reference architecture; components read this at build time.
// ---------------------------------------------------------------------------

export const ctaPlacements: CTAPlacement[] = [
  {
    context: "homepage",
    primary: ["whatsapp", "email"],
    secondary: ["phone"],
    maxBlocks: 2,
    strategy:
      "Hero CTA drives to WhatsApp (fastest path). Bottom CTA section drives custom-trip enquiry. High trust, low pressure.",
  },
  {
    context: "tour",
    primary: ["quote", "whatsapp"],
    secondary: ["email", "consultation"],
    maxBlocks: 3,
    strategy:
      "Sidebar price card is the primary conversion point. TourFit decision support reduces friction. LeadCapture below content catches undecided visitors.",
  },
  {
    context: "destination",
    primary: ["planning", "whatsapp"],
    secondary: ["email"],
    maxBlocks: 2,
    strategy:
      "Destination pages are mid-funnel. LeadCapture section bridges discovery to planning. Avoid hard sell; let the tours do the work.",
  },
  {
    context: "guide",
    primary: ["consultation", "whatsapp"],
    secondary: ["email"],
    maxBlocks: 2,
    strategy:
      "Guide readers are in research mode. Expert-help framing ('Talk to a local expert') is more effective than a direct quote CTA.",
  },
  {
    context: "about",
    primary: ["whatsapp", "email"],
    secondary: ["phone"],
    maxBlocks: 2,
    strategy:
      "Trust-building page. CTAs reinforce accessibility and personal service rather than urgency.",
  },
  {
    context: "contact",
    primary: ["whatsapp", "email", "phone"],
    secondary: ["quote", "custom-itinerary"],
    maxBlocks: 3,
    strategy:
      "High-intent page. Show all channels. EnquiryPanel lets the visitor self-select the right path. BookingConfidence reduces last-moment hesitation.",
  },
  {
    context: "footer",
    primary: ["whatsapp", "email"],
    secondary: [],
    maxBlocks: 1,
    strategy:
      "Footer is a catch-all safety net. Keep it minimal — one CTA line, no duplicate of page-level CTAs.",
  },
];

// ---------------------------------------------------------------------------
// Default decision-support content — used by TourFit when no tour-specific
// content is provided. Components should prefer tour-level data when present.
// ---------------------------------------------------------------------------

export const defaultTourFitFor: string[] = [
  "Travellers who prefer a private, guided experience",
  "Those with a deep interest in ancient history and culture",
  "Visitors who want a curated itinerary rather than self-guided travel",
  "Anyone seeking high-quality, professionally managed logistics",
];

export const defaultTourNotFor: string[] = [
  "Travellers seeking large group or coach tours",
  "Budget-focused independent backpackers",
  "Visitors looking primarily for nightlife or beach holidays",
];
