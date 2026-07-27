// ---------------------------------------------------------------------------
// The standard of travel — Kemet's market position, stated in concrete terms.
//
// WHY THIS EXISTS
// Saying "luxury" does not make a journey luxurious; the word appears on every
// tour site in Egypt, including the ones selling a seat on a forty-seat coach.
// What separates the tiers is verifiable specifics: whose car you are in, who
// is standing next to you at Karnak, and what you are not asked to share.
//
// This file is that specificity, in one place. It is used to state the tier
// plainly on the pages where a first-time visitor lands — so the segment we
// serve is obvious within a few seconds, without adjectives doing the work.
//
// RULE: everything here must be true and already reflected in what we deliver
// (see the inclusion lists in src/data/tours.ts). Nothing aspirational.
// ---------------------------------------------------------------------------

export interface StandardPoint {
  /** SymbolIcon name for the mark beside it. */
  symbol: string;
  /** Short label — the claim. */
  title: string;
  /** The substance behind the claim. Concrete, checkable, no adjectives. */
  body: string;
}

/** What is true of every Kemet journey, without exception. */
export const alwaysTrue: StandardPoint[] = [
  {
    symbol: "eye",
    title: "A licensed Egyptologist, not a guide",
    body:
      "Every journey is led by a guide licensed by the Egyptian Ministry of Tourism with a degree in Egyptology. They are with you at the monuments, not waiting in the car park — and they are yours for the day, answering your questions rather than reciting to forty people.",
  },
  {
    symbol: "ankh",
    title: "Your party only",
    body:
      "No shared coaches. No fixed departure dates. No strangers on your itinerary. If you are two people, the vehicle, the guide and the pace belong to two people.",
  },
  {
    symbol: "lotus",
    title: "Built around you, then written down",
    body:
      "We design the itinerary from your interests and your dates — not from a catalogue page. You receive it in writing before anything is paid, and it changes as often as you want it to until it is right.",
  },
  {
    symbol: "sun",
    title: "One price, itemised",
    body:
      "The quote lists what is included and what is not, line by line, before you commit. Entrance fees, private air-conditioned transfers, your Egyptologist and lunch on touring days are inside the price — they are not add-ons revealed later.",
  },
  {
    symbol: "scarab",
    title: "Reachable while you travel",
    body:
      "You have a direct line to the people who planned your journey for the whole time you are in Egypt — not a call centre, and not a number that stops answering after the deposit clears.",
  },
  {
    symbol: "horus",
    title: "Time protected, not filled",
    body:
      "A day with four sites crammed into it is a cheaper day to sell and a worse day to live. We plan around light, heat and crowds — the Valley of the Kings at opening, the Egyptian Museum when the coaches have gone — and we leave the afternoon alone.",
  },
];

/**
 * Who this does not suit. Stated plainly and without judgement: a traveller
 * who wants what is below is better served elsewhere, and saying so protects
 * both sides. This is also the clearest possible signal of the tier — clearer
 * than any superlative.
 */
export const notOurTraveller: string[] = [
  "Anyone looking for the lowest price on a trip to Egypt — we are not the cheapest and do not try to be",
  "Coach tours, shared group departures and fixed itineraries sold by the seat",
  "Hostels, dormitories and hop-on backpacking routes",
  "Travellers who would rather organise the logistics themselves and value independence over service",
  "Trips built primarily around nightlife or a resort beach",
];

/** Who it is for — the mirror image, equally specific. */
export const ourTraveller: string[] = [
  "Travellers who would rather see four things properly than twelve badly",
  "Couples marking something — a honeymoon, an anniversary, a birthday that ends in a zero",
  "Families travelling across three generations, where pace and comfort decide whether it works",
  "Repeat visitors who have done the headline sites and want the ones nobody queues for",
  "Anyone for whom the difference between a good guide and a great one is the whole trip",
];

/**
 * The honest sentence about price. A luxury brand that will not discuss money
 * reads as evasive; one that states its position reads as confident.
 */
export const priceStance = {
  headline: "On price, plainly",
  body:
    "Kemet sits at the upper end of the Egyptian market and we are comfortable saying so. A private Egyptologist for a week costs what it costs; so does a car that is yours alone and a room that faces the river rather than the car park. What we will not do is quote low, then recover the difference through optional extras, shopping stops and an itinerary that quietly turns into a group. Every price on this site is a per-person starting point for a private journey, and the written quote that follows is the price you pay.",
};
