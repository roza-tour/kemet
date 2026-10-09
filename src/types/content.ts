// ---------------------------------------------------------------------------
// Content domain entities and their relationship shapes.
//
// Relationship rule (prevents circular dependencies and duplicated content):
// each conceptual edge is stored on ONE canonical side only, and the inverse is
// derived at build time by the relationship resolver. Canonical direction is
// the "belongs-to" side — e.g. a Tour stores its destinations/categories; a
// Destination's tour list is derived, never hand-maintained.
// ---------------------------------------------------------------------------
import type {
  ContentEntity,
  GeoPoint,
  MediaPlaceholder,
  Ref,
  SeoMeta,
} from "@/types/primitives";
import type {
  Difficulty,
  RegionId,
  Season,
  TourTaxonomy,
  TravelStyle,
} from "@/types/taxonomy";

// --- Shared editorial primitives ------------------------------------------

export type TourKind = "multiday" | "day";

/** One step of an itinerary — a day (multi-day tours) or a stop (day tours). */
export interface ItineraryStep {
  /** Small caption inside the timeline node. */
  label: "Day" | "Stop";
  /** Display number, e.g. "01". */
  num: string;
  title: string;
  /** Bullet list — used for multi-day day-by-day programmes. */
  items?: string[];
  /** Single paragraph — used for stop-by-stop day tours. */
  text?: string;
}

export interface Faq {
  q: string;
  a: string;
}

// --- Relationship shapes ---------------------------------------------------

export interface TourRelationships {
  /** Canonical: the destinations this tour belongs to. */
  destinations?: Ref<"destination">[];
  experiences?: Ref<"experience">[];
  guides?: Ref<"guide">[];
  /** Canonical: the categories that organise this tour (no content duplicated). */
  categories?: Ref<"category">[];
  /** Editorial "you may also like" — symmetric, stored here. */
  relatedTours?: Ref<"tour">[];
}

export interface DestinationRelationships {
  /** Symmetric neighbour links, stored on the destination. */
  nearbyDestinations?: Ref<"destination">[];
  /** Editorial guide picks; tour/experience lists are derived from their refs. */
  guides?: Ref<"guide">[];
  /** Future: activities/articles authored against the destination. */
  activities?: Ref<"activity">[];
}

export interface ExperienceRelationships {
  /** Canonical: the destinations this experience is located at / primarily serves. */
  destinations?: Ref<"destination">[];
  /** Tours that include or pair well with this experience. */
  tours?: Ref<"tour">[];
  /** Travel guides that cover this experience or its context. */
  guides?: Ref<"guide">[];
  /** Reusable activity concepts this experience instantiates. */
  activities?: Ref<"activity">[];
  categories?: Ref<"category">[];
  /** Editorial "similar experiences" — authored cross-links. */
  relatedExperiences?: Ref<"experience">[];
}

export interface GuideRelationships {
  tours?: Ref<"tour">[];
  destinations?: Ref<"destination">[];
  experiences?: Ref<"experience">[];
  activities?: Ref<"activity">[];
  relatedGuides?: Ref<"guide">[];
  categories?: Ref<"category">[];
}

export interface ActivityRelationships {
  destinations?: Ref<"destination">[];
  categories?: Ref<"category">[];
}

// --- Collections (Seasonal / Editorial) ------------------------------------

export type CollectionType =
  | "seasonal"
  | "travel-inspiration"
  | "family"
  | "luxury"
  | "adventure"
  | "photography"
  | "historical"
  | "food"
  | "festival"
  | "nile"
  | "weekend"
  | "first-time"
  | "hidden-gems"
  | "best-of"
  | "road-trip";

/** Intended audience for a collection. */
/**
 * Seasonal visual identity for a collection page. Each theme swaps the accent
 * palette and adds its own ornament layer — Ramadan lanterns and crescents,
 * Christmas stars and evergreen, the solar burst of the Abu Simbel alignment.
 */
export type SeasonalTheme =
  // The four base seasons — one of these is always active (seasonalCalendar).
  | "spring"
  | "summer"
  | "autumn"
  | "winter"
  // Occasions, which outrank the season underneath them while they run.
  | "ramadan"
  | "eid"
  | "christmas"
  | "sun-festival"
  // Collection-page identities that are not on the calendar.
  | "red-sea"
  | "honeymoon";

export type CollectionAudience =
  | "everyone"
  | "families"
  | "couples"
  | "solo"
  | "luxury-travellers"
  | "adventure-seekers"
  | "photographers"
  | "history-enthusiasts"
  | "first-timers";

export interface CollectionRelationships {
  /** Canonical: tours that belong to this collection. */
  tours?: Ref<"tour">[];
  /** Canonical: destinations this collection covers. */
  destinations?: Ref<"destination">[];
  /** Canonical: experiences this collection includes. */
  experiences?: Ref<"experience">[];
  /** Canonical: guides that support this collection's planning. */
  guides?: Ref<"guide">[];
  /** Editorial cross-links to related collections. */
  relatedCollections?: Ref<"seasonal">[];
}

/**
 * A LANDING LAYER for a collection — the campaign face of a page that already
 * exists.
 *
 * WHY THIS IS A LAYER AND NOT A SECOND PAGE
 * A paid campaign and an organic search want different things from the same
 * subject: the ad click wants one promise, one price and one form, and the
 * search result wants the whole argument. The obvious move is two URLs, and it
 * is the wrong one — two English pages about Christmas in Egypt split their own
 * ranking signal, and the one carrying the ad spend is the one with no links to
 * it. So the landing page IS the collection page: same URL, same canonical,
 * same place in the sitemap and in the seasonal ribbon. When a collection
 * carries this field the template leads with the offer and the form and keeps
 * every editorial section below it; when it does not, nothing changes.
 *
 * Everything time-sensitive in here is COMPUTED at build time (see
 * data/landing/) — a landing page that names a year or counts weeks cannot be
 * typed by hand or it is wrong by the next campaign.
 *
 * SHORT ABOVE, LONG BELOW
 * The shape of this type enforces the one rule that makes the page pleasant to
 * read: nothing above the form is allowed to be an essay. The hero gets a few
 * lines, the holiday itself is told as four dated moments, the booking window
 * gets ONE sentence — and everything that genuinely needs a paragraph lives in
 * `detail`, under the form, for the reader who wants it. The page still says
 * every honest thing it said before; it just stops saying all of it at once.
 */
/**
 * Every word of chrome on a landing page, in the page's own language.
 *
 * REQUIRED, not optional with English defaults. A German landing page whose
 * form still said "Your name *" and "Send message" would convert worse than
 * no German page at all, and an optional field with a fallback is exactly how
 * that ships unnoticed. Making it mandatory means a half-translated landing
 * page does not compile.
 *
 * The SELECT VALUES are deliberately not in here. They are fixed English keys
 * ("couple", "unhurried", "comfort") that contact-handler.php re-checks and
 * turns back into English for the inbox — the labels are translated, the
 * values are not, so an enquiry from the German page is still readable by the
 * people who answer it.
 */
export interface LandingFormLabels {
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  datesLabel: string;
  messageLabel: string;
  partyLabel: string;
  paceLabel: string;
  priorityLabel: string;
  /** The empty first option on every select. */
  chooseLabel: string;
  /** In the fixed order of the form's own option values. */
  partyOptions: [couple: string, family: string, generations: string, group: string, solo: string];
  paceOptions: [unhurried: string, balanced: string, full: string];
  priorityOptions: [comfort: string, balance: string, cost: string];
  submit: string;
  sending: string;
  /** Shown after a successful send, and after a failed one. */
  okNote: string;
  errNote: string;
  /** The honeypot's label — hidden from people, read by screen readers. */
  honeypotLabel: string;
}

export interface LandingUi {
  /** Second, quieter button in the hero. */
  seeJourneys: string;
  /** Eyebrow above the journeys grid. */
  journeysEyebrow: string;
  /** Heading on the reassurance card beside the form. */
  assurancesHeading: string;
  /** Eyebrow above the detail section, when there is one. */
  detailEyebrow: string;
  /** Label before the other-language links. */
  otherLanguagesLabel: string;
  form: LandingFormLabels;
}

export interface LandingPage {
  /** Every string of chrome, in this page's language. */
  ui: LandingUi;
  /** Small line above the h1. */
  eyebrow: string;
  /** Replaces the collection title as the page's h1. */
  h1: string;
  /** Two or three sentences. Not a paragraph — the detail blocks are below. */
  standfirst: string;
  /** The primary call to action, as it reads on the button. */
  ctaLabel: string;
  /** Four to six hard facts under the hero. Values, not claims. */
  facts: { label: string; value: string }[];
  /**
   * The occasion told as dated moments rather than described in prose — what
   * the fortnight actually consists of, read in about ten seconds. One line
   * each; anything longer belongs in `detail`.
   */
  moments: { date: string; title: string; line: string }[];
  /**
   * The honest state of the booking window, recomputed every build. ONE
   * sentence: how long until the dates and what is realistically still
   * available. The reasoning behind it goes in `detail`, where a reader who
   * wants it will look — put here, it is a wall of text between a visitor and
   * the thing they came to see.
   */
  window: { eyebrow: string; heading: string; line: string };
  /** Journeys shown with their price, in campaign order. */
  journeys: Ref<"tour">[];
  /** Heading and supporting line above the journey cards. */
  journeysIntro: { heading: string; text: string };
  /** The enquiry form's own words. */
  form: {
    heading: string;
    subtext: string;
    datesPlaceholder: string;
    messagePlaceholder: string;
  };
  /** What happens after they send it — stated, not implied. */
  assurances: string[];
  /**
   * Heading and supporting line above the detail blocks. Omitted, with
   * `detail`, when the page the landing layer sits on already carries its own
   * long-form sections — on a localised page it does, and repeating them
   * under a second heading would be the same essay twice.
   */
  detailIntro?: { heading: string; text: string };
  /**
   * Everything that needs more than a line: the booking-window reasoning, the
   * costs, the occasion in full. Rendered BELOW the form, on purpose.
   */
  detail?: { heading: string; body: string }[];
  /** Same subject, other languages. Route files, with a native label. */
  otherLanguages?: { route: string; label: string; lang: string }[];
}

/**
 * An Editorial Collection — a first-class content domain that curates existing
 * entities around a travel theme, season or visitor intent. Collections do NOT
 * duplicate content; they reference it. They are presentation-independent:
 * adding a collection is data-only, no template or component change is required.
 */
export interface Collection extends ContentEntity {
  domain: "seasonal";
  subtitle: string;
  shortSummary: string;
  editorialIntro: string;
  collectionType: CollectionType;
  /** Primary season(s) this collection is most relevant for. */
  seasons?: Season[];
  /** Thematic travel styles that characterise this collection. */
  travelStyles?: TravelStyle[];
  /** Target audience. */
  audience?: CollectionAudience[];
  /** Editorial priority — higher numbers surface first on hub. */
  priority?: number;
  /** Pin to featured slots on hub and homepage. */
  featured?: boolean;
  /** Key reasons to visit / highlights used as the editorial intro list. */
  highlights?: string[];
  /** Practical planning notes (not duplicated from guides). */
  planningNotes?: string[];
  /** Short travel tips specific to this collection's theme. */
  travelTips?: string[];
  faqs?: Faq[];
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];
  /** When this editorial content was last reviewed. */
  lastReviewed?: string;
  /**
   * Seasonal visual identity applied to this collection's page — shifts the
   * accent palette and adds themed ornament (see SeasonalTheme.astro).
   * Omit for the default Kemet gold treatment.
   */
  theme?: SeasonalTheme;
  /**
   * Present only on a collection that is also a campaign destination. See
   * LandingPage: the page keeps its URL and all of its editorial content, and
   * leads with the offer instead of the essay.
   */
  landing?: LandingPage;
  relationships?: CollectionRelationships;
}

// --- Tours -----------------------------------------------------------------
// Existing fields are unchanged so the current catalogue and rendering are
// byte-identical. Architecture fields are optional and supplied by the
// taxonomy side-car (src/data/tours.taxonomy.ts) or a future API.

export interface Tour {
  /** Route file stem → e.g. "tour-7-day" emits tour-7-day.html. */
  slug: string;
  title: string;
  /** Hero supporting line. */
  subtitle: string;
  kind: TourKind;
  /** Editorial category label. */
  category: string;
  /** Short chip on cards ("10 Days", "Day Tour"…). */
  tag: string;
  /** "10 Days / 9 Nights". */
  durationLabel: string;
  startPoint: string;
  /** Route, shown as chips. */
  cities: string[];
  /** Condensed "Visiting" line for the price card. */
  visiting: string;
  /** "Yes — your party only". */
  isPrivate: string;
  /** Price in EUR, per person — already source operator price +20%. */
  price: number;
  /** Original price (struck-through) where given, in EUR. */
  was?: number;
  /**
   * Party size the published per-person price is based on. Day tours are
   * quoted from six travellers; smaller parties are priced on enquiry because
   * a private car and a private Egyptologist cost the same for two as for six.
   */
  priceBasisPax?: number;
  /**
   * True when monument and museum entrance tickets sit outside the quoted
   * price and are charged at the published gate rate. Kept explicit rather
   * than implied by the exclusion list so cards, price blocks and structured
   * data all state the same thing.
   */
  ticketsExcluded?: boolean;
  flightsIncluded?: boolean;
  /** Card description. */
  summary: string;
  /** Overview paragraph on the detail page. */
  overview: string;
  itinerary: ItineraryStep[];
  /**
   * How the journey feels to do, not what it sees — read from the itinerary
   * day by day and confirmed by Kemet. The traveller who puts comfort before
   * cost decides on exactly these: where they will sleep, how long they will
   * sit in a car, how early they will be woken, and how much walking there is.
   */
  comfort?: {
    walking: "Light" | "Moderate";
    /** Where the nights are spent, in order. */
    sleep: string;
    /** Long stretches by road, if any. */
    drives?: string;
    /** Starts before breakfast, if any. */
    early?: string;
  };
  /**
   * The same journey with domestic flights in place of the sleeper trains.
   * Offered on the journeys whose published route uses the overnight train;
   * the traveller who puts comfort before cost will not spend twelve hours on
   * a train to save a flight, so the page names the alternative and its price
   * instead of leaving them to ask. Omit it and nothing renders.
   */
  flyOption?: {
    /**
     * What the flight version adds per person, EUR — a difference, not a
     * price, so the flight version moves with the journey when prices move
     * (they rose 10% across the catalogue in September 2026).
     */
    extra: number;
    /** What the flights replace, as the page should say it. */
    replaces: string;
  };
  included: string[];
  excluded: string[];
  faqs: Faq[];
  /** Sort order across listings. */
  order: number;

  // --- Architecture (optional, additive) ----------------------------------
  /** Stable cross-system id; for legacy tours it mirrors the slug. */
  id?: string;
  domain?: "tour";
  taxonomy?: TourTaxonomy;
  relationships?: TourRelationships;
  /** Hero/card photography (optional; placeholder is shown until supplied). */
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];
}

// --- Future domains (modelled now; data/pages added later) -----------------

/**
 * A place users explore and plan around. The model is intentionally complete
 * and UI-independent: every field is data (facts, ids, refs, placeholders), so
 * pages render from it and a future API/CMS maps onto it unchanged. `title`
 * (from ContentEntity) is the destination name.
 */
export interface Destination extends ContentEntity {
  domain: "destination";

  // Identity & copy
  /** One-line factual summary (definition block / meta description source). */
  shortSummary: string;
  /** Full factual description (overview body). */
  longDescription: string;

  // Geography
  region: RegionId;
  /** Coordinates placeholder — null until sourced (no fabricated values). */
  coordinates?: GeoPoint;
  /** Metres above sea level, where known. */
  elevationMeters?: number;
  /** UNESCO World Heritage status, where applicable. */
  unesco?: { listed: boolean; siteName?: string };

  // When to go
  bestSeasons?: Season[];
  climateSummary?: string;
  /** Recommended length of stay, e.g. "2–3 days". */
  recommendedStay?: string;

  // Suitability / facets (reuse the shared taxonomy)
  travelStyles?: TravelStyle[];
  accessibilityNotes?: string;
  familyFriendly?: boolean;
  luxuryFriendly?: boolean;
  adventureFriendly?: boolean;

  // Significance (short factual notes)
  historicalImportance?: string;
  culturalImportance?: string;

  // Scannable, AI-search-friendly lists
  highlights?: string[];
  photographyHighlights?: string[];
  thingsToKnow?: string[];
  whyVisit?: string[];

  // Presentation-agnostic content references
  /** SymbolIcon name for the hero glyph (a content association, not styling). */
  symbol?: string;
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];

  // Q&A (future) — rendered when present
  faqs?: Faq[];

  // Graph (tours/experiences are derived from their refs; never stored here)
  relationships?: DestinationRelationships;
}

/**
 * A visitor experience — the activity layer of the platform. Represents a real
 * bookable (or enquirable) offering rather than a destination or a tour.
 * Every field is data and presentation-independent; pages render from it and a
 * future booking API maps onto it without a model change.
 *
 * Relationship rule: Experience stores canonical edges to its destinations, tours,
 * guides and activities. Inverse lookups (e.g. experiences-on-a-destination) are
 * derived by the registry — never hand-maintained here.
 */
export interface Experience extends ContentEntity {
  domain: "experience";

  // Copy
  /** 1–2 sentence factual summary — meta description source and AI snippet. */
  shortSummary: string;
  /** Full factual description paragraph(s) — overview body. */
  longDescription: string;

  // Classification
  /** Experience category id — references experienceCategories in config/taxonomy. */
  category: string;

  // Logistics
  /** Human-readable duration label, e.g. "3–4 hours", "Full day". */
  durationLabel: string;
  /** Duration in minutes — for future filtering and sorting. */
  durationMinutes?: number;
  /** Physical demand level for the visitor. */
  difficulty?: Difficulty;

  // Suitability
  minAge?: number;
  familyFriendly?: boolean;
  luxuryFriendly?: boolean;
  adventureFriendly?: boolean;
  accessibilityNotes?: string;

  // Seasonality
  bestSeasons?: Season[];

  // Location
  region: RegionId;
  /** Human-readable location, e.g. "Giza Plateau, Giza". */
  location?: string;
  /** Meeting point description — placeholder until booking system is live. */
  meetingPointNote?: string;
  coordinates?: GeoPoint;

  // Format
  /** True if the experience runs for a single party only (no shared groups). */
  isPrivate?: boolean;
  /** BCP-47 language codes the experience is offered in. */
  languages?: string[];
  /** Human-readable group-size note, e.g. "Your private party only." */
  groupSizeNote?: string;

  // Future availability & pricing (architecture-ready, not yet live)
  /** Availability description — e.g. "Available most mornings year-round." */
  availabilityNote?: string;
  /** Pricing note — e.g. "Pricing confirmed on enquiry." No fabricated prices. */
  priceNote?: string;

  // Scannable, AI-search-friendly content blocks
  highlights?: string[];
  /** Sidebar key–value facts table. */
  keyFacts?: { label: string; value: string }[];
  whatsIncluded?: string[];
  whatsExcluded?: string[];
  preparationTips?: string[];
  goodToKnow?: string[];

  // Q&A — rendered as FAQPage JSON-LD and an accordion
  faqs?: Faq[];

  // Future media (placeholders until photography is sourced)
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];
  /**
   * A short silent clip, shown as one more tile at the end of the gallery.
   * It only plays when pressed (preload="none"), so a page that has one
   * downloads nothing for it but the poster until somebody asks to watch.
   * Root-absolute paths under /media/ — outside /images/, so the responsive-
   * image script does not make srcset rungs of a poster that never uses them.
   */
  film?: { src: string; poster: string; width: number; height: number; label: string; alt: string };

  // Future reviews & ratings (intentionally omitted — Phase 9+)

  relationships?: ExperienceRelationships;
}

export type GuideType =
  | "overview"
  | "planning"
  | "practical"
  | "cultural"
  | "food"
  | "seasonal"
  | "experience"
  | "sustainability";

/** One structured content block within a guide. */
export interface GuideSection {
  heading: string;
  /** Body paragraphs — each string renders as a <p>. */
  paragraphs?: string[];
  /** Scannable bullet list items. */
  items?: string[];
  /** Advisory callout (tip, warning, or informational note). */
  note?: string;
  noteType?: "tip" | "warning" | "info";
  /** A page that takes this section further, shown at the end of its note. */
  noteLink?: { label: string; href: string };
}

/**
 * A travel guide — the knowledge layer of the platform. The model is
 * presentation-independent: all fields are data (facts, refs, structured text).
 * Pages and future CMS/API surfaces render from this without any logic changes.
 * Relationships follow the canonical one-directional rule: guides list their
 * destinations/tours/guides; inverse lookups are derived by the registry.
 */
export interface Guide extends ContentEntity {
  domain: "guide";

  // Classification
  /** Top-level guide type — drives icon, colour and schema type selection. */
  guideType: GuideType;
  /** Guide category id — references guideCategories in config/taxonomy. */
  category: string;
  /** Id of the parent guide in the knowledge tree (unlimited depth). */
  parentGuideId?: string;

  // Copy
  /** 1–2 sentence factual summary — meta description source and AI snippet. */
  shortSummary: string;
  /** Structured content body — each section is a heading + paragraphs/items. */
  sections: GuideSection[];

  // Scannable / AI-search-friendly blocks
  /** Sidebar key–value facts table. */
  keyFacts?: { label: string; value: string }[];
  /** Top-of-page scannable bullets — rendered before the main sections. */
  keyTakeaways?: string[];
  /** Sidebar practical tips. */
  planningTips?: string[];
  /** Sidebar warnings and caveats. */
  importantNotes?: string[];
  /** Q&A — rendered as FAQPage JSON-LD and a scannable accordion. */
  faqs?: Faq[];

  // Metadata
  /** Planning complexity for readers (not difficulty of the activity). */
  difficulty?: Difficulty;
  readingTimeMinutes?: number;
  /** ISO year-month string, e.g. "2026-01". */
  lastUpdated?: string;

  // Future media (placeholders until photography is sourced)
  hero?: MediaPlaceholder;
  gallery?: MediaPlaceholder[];

  // Future attribution (null until author system is built)
  authorId?: string;
  reviewDate?: string;

  relationships?: GuideRelationships;
}

/** A lightweight grouping (e.g. "Nile Cruises"). Membership is derived from the
 *  member entities' refs, so categories never duplicate content. */
export interface Category extends ContentEntity {
  domain: "category";
  /** Which domain this category organises (usually "tour"). */
  groups: "tour" | "experience" | "guide";
  summary?: string;
}

// --- Existing taxonomy/marketing content (unchanged shapes) ----------------

export interface Identity {
  id: string;
  name: string;
  /** SymbolIcon name. */
  symbol: string;
  /** CSS custom property carrying the accent colour, e.g. "--pharaonic". */
  accentVar: string;
  intro: string;
  experiences: string[];
  /** Representative photograph; the symbol placeholder renders when absent. */
  image?: MediaPlaceholder;
}

export interface Activity {
  id: string;
  title: string;
  place: string;
  blurb: string;
  /** Card photograph; the branded placeholder renders when absent. */
  image?: MediaPlaceholder;
  // Architecture (optional, additive)
  domain?: "activity";
  taxonomy?: { destinations?: string[]; travelStyles?: TravelStyle[] };
  relationships?: ActivityRelationships;

  // --- Detail page (optional; an activity renders a page once `slug` is set) --
  /** URL slug — presence of this is what generates /activities/<slug>.html. */
  slug?: string;
  /**
   * Route of the page that is the search authority for this subject, when
   * another page on the site covers the same thing more fully. The page still
   * renders and stays in the funnel; its canonical points here so the two do
   * not compete for the same query.
   */
  canonicalTo?: string;
  /** One-line factual summary — meta description source and AI snippet. */
  shortSummary?: string;
  /** Full editorial description. */
  longDescription?: string;
  /** e.g. "About 45 minutes airborne, 3–4 hours door to door". */
  durationLabel?: string;
  /** When this is at its best. */
  bestTime?: string;
  /** Who it suits — short phrases. */
  goodFor?: string[];
  /** What actually happens, in order. */
  whatToExpect?: string[];
  /** Honest practicalities: fitness, safety, restrictions, what to bring. */
  practicalities?: string[];
  faqs?: Faq[];
  /** When this content was last reviewed. */
  lastReviewed?: string;
  seo?: SeoMeta;
}

export interface Dish {
  name: string;
  note: string;
}

export interface CultureSymbol {
  /** SymbolIcon name. */
  symbol: string;
  name: string;
  /** Short italic descriptor. */
  nature: string;
  note: string;
}

export interface Craft {
  /** SymbolIcon name reused as a small marker. */
  symbol: string;
  name: string;
  note: string;
}
