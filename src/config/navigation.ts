// ---------------------------------------------------------------------------
// Navigation architecture — the structural source of truth for primary nav,
// footer nav and breadcrumb hierarchy. Components render from this, so the
// link set lives in one place and the markup never changes when sections grow.
//
// The NavItem shape already carries optional `children`, so a mega-menu can be
// added later by populating children — with no change to the data contract or
// the components that don't use them.
// ---------------------------------------------------------------------------
import type { BreadcrumbItem, ContentDomain } from "@/types";
import { hubFor } from "@/config/routes";

export interface NavItem {
  label: string;
  href: string;
  /** Sub-items for a future mega-menu / dropdown (unused today). */
  children?: NavItem[];
}

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}

/**
 * Primary navigation — four groups, each a dropdown.
 *
 * The site outgrew a flat bar. Eight top-level links could reach eight pages
 * out of 192, and everything else was only findable from the footer or by
 * luck. Grouping instead lets the bar carry the whole site: a parent is still
 * a real link to its hub, and its children are the pages underneath it.
 *
 * The grouping follows the order a traveller actually thinks in — what am I
 * booking, where am I going, what do I need to settle — rather than how the
 * content happens to be filed.
 */
export const primaryNav: NavItem[] = [
  {
    label: "Journeys",
    href: "tours.html",
    children: [
      { label: "Kemet VIP", href: "vip.html" },
      { label: "All journeys", href: "tours.html" },
      { label: "By occasion", href: "occasions.html" },
      { label: "Collections", href: hubFor("seasonal") },
      { label: "Compare the options", href: "compare.html" },
      { label: "What it costs", href: "egypt-tour-cost.html" },
    ],
  },
  {
    label: "Egypt",
    href: hubFor("destination"),
    children: [
      { label: "Destinations", href: hubFor("destination") },
      { label: "Experiences", href: hubFor("experience") },
      { label: "Activities", href: "activities.html" },
      { label: "The 8 Identities", href: "identities.html" },
      { label: "Culture", href: "culture.html" },
      { label: "Cuisine", href: "cuisine.html" },
    ],
  },
  {
    label: "Plan",
    href: hubFor("guide"),
    children: [
      { label: "When to go", href: "when-to-go.html" },
      { label: "Visa by nationality", href: "visa.html" },
      { label: "Is Egypt safe?", href: "egypt-safety.html" },
      { label: "Travel FAQ", href: "faq.html" },
      { label: "Travel guides", href: hubFor("guide") },
      { label: "Booking & cancellation", href: "booking.html" },
    ],
  },
  {
    label: "About",
    href: "about.html",
    children: [
      { label: "About Kemet", href: "about.html" },
      { label: "Our travellers", href: "about.html" },
      { label: "Site index", href: "sitemap.html" },
    ],
  },
];

/** Footer "Explore" column (the static link group). The Journeys column is
 *  derived from tour data and the Contact column from link helpers, both in
 *  Footer.astro — kept dynamic on purpose. */
export const footerExplore: FooterColumn = {
  heading: "Explore",
  links: [
    { label: "Kemet VIP", href: "vip.html" },
    { label: "Journeys", href: "tours.html" },
    { label: "Destinations", href: hubFor("destination") },
    { label: "Experiences", href: hubFor("experience") },
    { label: "Guides", href: hubFor("guide") },
    { label: "Collections", href: hubFor("seasonal") },
    { label: "Occasions", href: "occasions.html" },
    { label: "Cultures", href: "culture.html" },
    { label: "The 8 Identities", href: "identities.html" },
    { label: "Activities", href: "activities.html" },
    { label: "Cuisine", href: "cuisine.html" },
    { label: "When to go", href: "when-to-go.html" },
    { label: "Compare", href: "compare.html" },
    { label: "Travel FAQ", href: "faq.html" },
    { label: "Is Egypt safe?", href: "egypt-safety.html" },
    { label: "Egypt Visa by Nationality", href: "visa.html" },
  ],
};

/** Footer "Company" column — about, contact and future legal/policy links. */
export const footerCompany: FooterColumn = {
  heading: "Company",
  links: [
    { label: "About Kemet", href: "about.html" },
    { label: "Contact", href: "contact.html" },
    { label: "What a journey costs", href: "egypt-tour-cost.html" },
    { label: "Booking & Cancellation", href: "booking.html" },
    { label: "Privacy Policy", href: "privacy.html" },
    { label: "Terms of Use", href: "terms.html" },
    { label: "Site Index", href: "sitemap.html" },
  ],
};

// --- Breadcrumb hierarchy --------------------------------------------------
// Every routable domain maps to a section hub, so breadcrumbs (and their
// JSON-LD) can be generated consistently for any page from one place.

export const HOME_CRUMB: BreadcrumbItem = ["Home", "index.html"];

/** The section hub each domain rolls up to. Future hubs (destinations/… ) use
 *  the routing convention from config/routes and are wired when those pages
 *  are built — defined now so breadcrumbs need no rework later. */
export const SECTION_HUB: Partial<Record<ContentDomain, BreadcrumbItem>> = {
  tour: ["Tours", "tours.html"],
  identity: ["The 8 Identities", "identities.html"],
  activity: ["Activities", "activities.html"],
  destination: ["Destinations", hubFor("destination")],
  experience: ["Experiences", hubFor("experience")],
  guide: ["Travel Guides", hubFor("guide")],
  category: ["Categories", hubFor("category")],
  seasonal: ["Collections", hubFor("seasonal")],
};

/**
 * Build a breadcrumb trail: Home › [section hub] › [leaf]. Returns the tuple
 * form consumed by the breadcrumb JSON-LD builder.
 */
export function trailFor(domain: ContentDomain, leaf?: BreadcrumbItem): BreadcrumbItem[] {
  const hub = SECTION_HUB[domain];
  const trail: BreadcrumbItem[] = [HOME_CRUMB];
  if (hub) trail.push(hub);
  if (leaf) trail.push(leaf);
  return trail;
}
