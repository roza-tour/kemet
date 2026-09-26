// ---------------------------------------------------------------------------
// Kemet Ultra — the four journeys at the top of the market, language-neutral.
//
// Everything here is the same in every language: the price, the length, the
// hotels (proper names are not translated), the photograph. The words live in
// the locale files beside this one (en.ts, de.ts, …), keyed by `id`, so a price
// cannot say one thing in English and another in German.
//
// HOW THE PRICES WERE SET (September 2026)
// Each price is built up from the unit cost of what the journey contains —
// suites, charter, private aircraft legs, the private openings, the guide and
// chauffeur — at the rates published by the hotels, vessels and charter firms
// for the 2026–27 season, plus Kemet's margin. `price2` is per person for a
// party of two; `price4` is per person for a party of four, lower because the
// charter, the aircraft, the openings and the guide are shared between more
// people while the suites are not. Peak weeks are stated separately (PEAK).
//
// HOTEL STATUS, CHECKED SEPTEMBER 2026 — read before changing a hotel:
//   · Winter Palace, Luxor: closed early 2026 for a complete restoration,
//     reopening July 2027 as the Mandarin Oriental Winter Palace. Not bookable
//     for the 2026–27 season, which is why Luxor nights are at Al Moudira.
//   · Old Cataract, Aswan: under Mandarin Oriental management since May 2026;
//     guests stay in the historic Palace wing while the Nile wing is renovated
//     (reopens fully July 2027). Bookable — in the Palace wing.
//   · Marriott Mena House, Four Seasons at The First Residence, The Oberoi
//     Philae and The Oberoi Beach Resort Sahl Hasheesh: operating.
// ---------------------------------------------------------------------------

export type UltraId = "private-pharaoh" | "royal-nile" | "karnak-to-coral-sea" | "grand-odyssey";

/** A place a journey sleeps. `hotel` is a proper name; `room` is a key into the locale's ROOM words. */
export interface UltraStay {
  hotel: string;
  /** Key into the locale's PLACE words (Giza, Aswan, …). */
  place: PlaceKey;
  nights: number;
  room: RoomKey;
}

export type PlaceKey = "giza" | "cairo" | "luxor" | "aswan" | "nile" | "redsea";
export type RoomKey = "pyramidSuite" | "nileSuite" | "palaceWing" | "suite" | "charter" | "cruiseSuite" | "poolSuite";

export interface UltraJourney {
  id: UltraId;
  numeral: "I" | "II" | "III" | "IV";
  days: number;
  nights: number;
  /** EUR per person, party of two. */
  price2: number;
  /** EUR per person, party of four. */
  price4: number;
  stays: UltraStay[];
  image: { src: string; width: number; height: number };
  accent: "crimson" | "emerald";
}

/** Supplement for the peak weeks (20 Dec – 5 Jan, and Easter week), as a percentage. */
export const PEAK = 25;

export const ultraJourneys: UltraJourney[] = [
  {
    id: "private-pharaoh",
    numeral: "I",
    days: 7,
    nights: 6,
    price2: 17400,
    price4: 11500,
    stays: [
      { hotel: "Marriott Mena House", place: "giza", nights: 3, room: "pyramidSuite" },
      { hotel: "Al Moudira", place: "luxor", nights: 3, room: "suite" },
    ],
    image: { src: "/images/giza/giza-great-pyramid-clear-sky.webp", width: 1600, height: 1062 },
    accent: "crimson",
  },
  {
    id: "royal-nile",
    numeral: "II",
    days: 10,
    nights: 9,
    price2: 36700,
    price4: 21000,
    stays: [
      { hotel: "Four Seasons Hotel Cairo at The First Residence", place: "cairo", nights: 3, room: "nileSuite" },
      { hotel: "Old Cataract", place: "aswan", nights: 1, room: "palaceWing" },
      { hotel: "Dahabiya", place: "nile", nights: 4, room: "charter" },
      { hotel: "Al Moudira", place: "luxor", nights: 1, room: "suite" },
    ],
    image: { src: "/images/cruise/nile-dahabiya-deck.webp", width: 1200, height: 900 },
    accent: "emerald",
  },
  {
    id: "karnak-to-coral-sea",
    numeral: "III",
    days: 12,
    nights: 11,
    price2: 38300,
    price4: 25300,
    stays: [
      { hotel: "Marriott Mena House", place: "giza", nights: 3, room: "pyramidSuite" },
      { hotel: "The Oberoi Philae", place: "nile", nights: 4, room: "cruiseSuite" },
      { hotel: "Old Cataract", place: "aswan", nights: 2, room: "palaceWing" },
      { hotel: "The Oberoi Beach Resort, Sahl Hasheesh", place: "redsea", nights: 2, room: "poolSuite" },
    ],
    image: { src: "/images/redsea/red-sea-coral-reef-fish.webp", width: 764, height: 458 },
    accent: "crimson",
  },
  {
    id: "grand-odyssey",
    numeral: "IV",
    days: 15,
    nights: 14,
    price2: 66800,
    price4: 37700,
    stays: [
      { hotel: "Marriott Mena House", place: "giza", nights: 3, room: "pyramidSuite" },
      { hotel: "Old Cataract", place: "aswan", nights: 2, room: "palaceWing" },
      { hotel: "Dahabiya", place: "nile", nights: 4, room: "charter" },
      { hotel: "Al Moudira", place: "luxor", nights: 2, room: "suite" },
      { hotel: "The Oberoi Beach Resort, Sahl Hasheesh", place: "redsea", nights: 3, room: "poolSuite" },
    ],
    image: { src: "/images/aswan/aswan-philae-temple-island.webp", width: 1080, height: 810 },
    accent: "emerald",
  },
];

/** Per-person, per-day range for a party of two — stated in the answer and on the cost page. */
export const ULTRA_PER_DAY = {
  low: Math.round(Math.min(...ultraJourneys.map((j) => j.price2 / j.days))),
  high: Math.round(Math.max(...ultraJourneys.map((j) => j.price2 / j.days))),
};

// Guard: every stay list must add up to the journey's nights, or a day-by-day
// and a "where you stay" panel disagree on the same page.
for (const j of ultraJourneys) {
  const n = j.stays.reduce((s, x) => s + x.nights, 0);
  if (n !== j.nights) throw new Error(`ultra ${j.id}: stays add up to ${n} nights, journey has ${j.nights}`);
}
