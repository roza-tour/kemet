// ---------------------------------------------------------------------------
// One glyph per kind of section, fixed for the whole site.
//
// WHY A MAP AND NOT A PROP PER PAGE
// The point of a symbol is recognition: a reader should learn, without being
// told, that the palm means destinations and the camel means journeys. That
// only happens if the pairing never varies. Choosing per page — even choosing
// well per page — destroys the thing the symbols are for.
//
// Add a key here before using it. If two sections would take the same key,
// they are the same kind of section and should look the same.
// ---------------------------------------------------------------------------
export const SECTION_SYMBOL = {
  journeys: "camel",      // multi-day tours, itineraries, the trips themselves
  standard: "scarab",     // how we work — the craft claim
  questions: "eye",       // FAQ, "before you choose", anything that answers
  experiences: "sun",     // single experiences, activities, days out
  destinations: "palm",   // places
  travellers: "lotus",    // people — reviews, gallery, who travels with us
  identities: "ankh",     // the eight cultural identities of Egypt
  cuisine: "fish",        // food
  culture: "anubis",      // gods, heritage, the ancient world
  guides: "horus",        // written guidance, planning, knowledge
  seasons: "crescent",    // when to go, the calendar, the seasonal skin
  greco: "greco",         // the Greco-Roman layer (Alexandria)
  coptic: "cross",        // the Coptic layer
} as const;

export type SectionSymbol = keyof typeof SECTION_SYMBOL;

/** Glyph name for a section key, or undefined when the key is not mapped. */
export function sectionGlyph(key?: string): string | undefined {
  if (!key) return undefined;
  return (SECTION_SYMBOL as Record<string, string>)[key];
}
