// ---------------------------------------------------------------------------
// Egypt Travel FAQ — the single source for /faq.html and its FAQPage schema.
//
// Most answers are pulled live from the maintained travel guides (src/data/
// guides.ts), so this page can never drift out of sync with them. The
// "Planning & booking" group is authored here and grounded entirely in real
// site data (tour price range, private-tour model, the booking flow in
// src/data/booking.ts) — no fabricated figures.
// ---------------------------------------------------------------------------
import { guides } from "@/data/guides";
import type { Faq } from "@/types";

/** Pull a guide's authored FAQs by slug (stays in sync with the guide). */
const fromGuide = (slug: string): Faq[] => guides.find((g) => g.slug === slug)?.faqs ?? [];

export interface FaqGroup {
  heading: string;
  intro?: string;
  items: Faq[];
}

// Authored, grounded in real catalogue data (prices per person, EUR).
const planningAndBooking: Faq[] = [
  {
    q: "How many days do I need in Egypt?",
    a: "A week is the most popular length for a first visit — enough for Cairo and Giza, Luxor and Aswan, and a stretch of the Nile at an unhurried pace. Five days covers the essentials if time is short; ten days to two weeks lets you add Abu Simbel, Alexandria or the Red Sea without rushing. Kemet's private journeys range from 3-day short breaks to a 14-day grand tour, and because every itinerary is built from scratch, the length is matched to you rather than a fixed package.",
  },
  {
    q: "How much does a private Egypt tour cost?",
    a: "Kemet's journeys are priced per person and depend on length, season, accommodation level and party size. Private full-day excursions start from around €52 per person, most multi-day private journeys fall between roughly €479 and €2,000, and the 14-day grand tour is about €2,480 per person. Every quote is fully itemised — what is included and excluded is shown before you commit, with no hidden costs.",
  },
  {
    q: "Is a private tour better than a group tour?",
    a: "For Egypt, a private tour is usually the difference between seeing the country and being processed through it. You travel on your own schedule with your own licensed Egyptologist guide and driver, start early to beat the crowds and heat, linger where you want and skip what doesn't interest you. There are no shared coaches, fixed departure dates or forced shopping stops. Kemet designs every journey privately and exclusively for one party.",
  },
  {
    q: "What is included in a Kemet journey?",
    a: "Inclusions vary by itinerary and are listed in full on every tour page, but a private Kemet journey typically covers your licensed Egyptologist guide, private air-conditioned transfers, accommodation, monument and site entrance fees, and internal logistics such as domestic flights or Nile-cruise segments where the route calls for them. International flights, visa fees, travel insurance and personal spending are normally excluded — each tour states exactly which.",
  },
  {
    q: "How do I book a trip with Kemet?",
    a: "Start by sending an enquiry with your dates, interests and party size — there is no charge or obligation. We reply within one business day and design a private itinerary with a fully itemised quote, refining it with you until it is right. A deposit then confirms your journey and lets us secure hotels, guides and permits in your name, with the balance due before departure. Full details are on our Booking & Cancellation page.",
  },
  {
    q: "Do you arrange honeymoons, family trips and solo travel?",
    a: "Yes. Because every itinerary is built privately from a blank page, Kemet designs journeys for couples and honeymooners, multi-generation families, solo travellers and small private groups alike — matching the pace, accommodation and experiences to who is travelling. Dedicated honeymoon and family journeys are among our signature routes, and any of them can be tailored further.",
  },
];

export const faqGroups: FaqGroup[] = [
  {
    heading: "Planning & booking",
    intro: "How long to go for, what it costs and how a private Kemet journey comes together.",
    items: planningAndBooking,
  },
  { heading: "Egypt travel basics", items: fromGuide("egypt-travel-guide") },
  { heading: "Visas & entry", items: fromGuide("egypt-visa-guide") },
  { heading: "When to go & weather", items: fromGuide("best-time-to-visit-egypt") },
  { heading: "Getting around Egypt", items: fromGuide("transportation-in-egypt") },
  { heading: "Food & drink", items: fromGuide("egyptian-food-guide") },
];

/** Flattened list for the FAQPage JSON-LD. */
export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);
