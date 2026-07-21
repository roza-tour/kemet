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

/** Primary navigation — a short, minimal set. The logo links Home; Contact is
 *  the nav CTA. Activities/Cuisine remain reachable from the footer. */
export const primaryNav: NavItem[] = [
  { label: "Journeys", href: "tours.html" },
  { label: "Experiences", href: hubFor("experience") },
  { label: "Destinations", href: hubFor("destination") },
  { label: "Guides", href: hubFor("guide") },
  { label: "Collections", href: hubFor("seasonal") },
  { label: "Cultures", href: "culture.html" },
];

/** Footer "Explore" column (the static link group). The Journeys column is
 *  derived from tour data and the Contact column from link helpers, both in
 *  Footer.astro — kept dynamic on purpose. */
export const footerExplore: FooterColumn = {
  heading: "Explore",
  links: [
    { label: "Journeys", href: "tours.html" },
    { label: "Destinations", href: hubFor("destination") },
    { label: "Experiences", href: hubFor("experience") },
    { label: "Guides", href: hubFor("guide") },
    { label: "Collections", href: hubFor("seasonal") },
    { label: "Cultures", href: "culture.html" },
    { label: "The 8 Identities", href: "identities.html" },
    { label: "Activities", href: "activities.html" },
    { label: "Cuisine", href: "cuisine.html" },
  ],
};

/** Footer "Company" column — about, contact and future legal/policy links. */
export const footerCompany: FooterColumn = {
  heading: "Company",
  links: [
    { label: "About Kemet", href: "about.html" },
    { label: "Contact", href: "contact.html" },
    { label: "Booking & Cancellation", href: "booking.html" },
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
