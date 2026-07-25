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


// Money, connectivity and on-the-ground practicalities — authored here,
// grounded in stable facts (currency, plugs, SIM availability, tipping norms).
const practicalities: Faq[] = [
  {
    q: "What currency is used in Egypt, and should I bring cash?",
    a: "The Egyptian pound (EGP). Cards are accepted at hotels, cruise vessels and larger restaurants, but Egypt remains a cash-friendly country: bazaars, cafés, small shops and tips all run on cash. ATMs are plentiful in cities and dispense pounds at fair rates — drawing a modest amount on arrival and topping up as you go works better than carrying large sums. Euros and dollars are easily exchanged, and our quotes are settled before travel, so day-to-day cash needs stay small.",
  },
  {
    q: "How does tipping work in Egypt?",
    a: "Tipping — baksheesh — is woven into daily life and is best treated as a planned, cheerful part of the budget rather than a surprise. Small notes cover most moments: restroom attendants, porters, a mosque custodian who unlocks something special. Restaurants typically warrant around 10% if service isn't included. For guides and drivers on a private journey, we give you clear, honest guidance on customary amounts before you travel, so it never feels awkward.",
  },
  {
    q: "Can I get a SIM card or eSIM in Egypt? Is there good internet?",
    a: "Yes, easily. Vodafone, Orange and Etisalat sell visitor SIMs at the airport and in every city — bring your passport, and a generous data package costs a few dollars. Most travellers now simply activate an eSIM before flying. Hotel and cruise Wi-Fi ranges from good to patchy; a local data plan is the reliable constant, and coverage along the whole Cairo–Luxor–Aswan corridor is strong.",
  },
  {
    q: "Do I need vaccinations to visit Egypt?",
    a: "There are no mandatory vaccinations for entry from Europe or the Americas. Health authorities commonly suggest being current on routine immunisations, and some travellers opt for hepatitis A and typhoid cover — decisions to make with your own doctor or a travel clinic a few weeks before departure, based on your health and plans. Pharmacies in Egypt are excellent and everywhere, and private medical care in Cairo and the resort towns is of a good standard.",
  },
  {
    q: "What are the electrical plugs in Egypt?",
    a: "European-style two-pin sockets (types C and F) at 220 volts. Travellers from the UK, Ireland, North America and Australia need a simple plug adapter — worth packing two, though they are cheap and easy to buy locally. Modern phone and camera chargers handle 220V automatically; only high-wattage appliances like hair dryers need a voltage check, and hotels provide those anyway.",
  },
  {
    q: "Is haggling expected in Egyptian markets?",
    a: "In the bazaars — Khan el-Khalili, Aswan's souk — yes, it is part of the exchange and done with humour on both sides. Opening prices assume negotiation, so counteroffering around half and settling somewhere comfortable is normal; walking away politely is a legitimate move that often improves the price. Fixed-price shops, pharmacies, restaurants and anything with a printed tag are exactly that — no haggling there.",
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
  {
    heading: "Money, connectivity & practicalities",
    intro: "Cash and cards, tipping, SIM cards, plugs and the small logistics that smooth a trip.",
    items: practicalities,
  },
];

/** Flattened list for the FAQPage JSON-LD. */
export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);
