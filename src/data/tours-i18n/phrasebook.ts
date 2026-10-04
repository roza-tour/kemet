// ---------------------------------------------------------------------------
// The lines every journey repeats, translated once per language.
//
// Across the 25 journeys there are 179 "included" entries but only 56
// distinct ones, and 26 distinct "excluded" entries; "Private air-conditioned
// transfers" appears 24 times and "Tipping (gratuities)" on every single
// journey. Translating them per journey would mean translating the same
// sentence two dozen times and keeping two dozen copies in step.
//
// So they are looked up by their ENGLISH TEXT, which is the key. That has one
// consequence worth stating plainly: edit a line in data/tours.ts and its
// translations stop resolving. That is deliberate — assertPhrasebook() below
// fails the build and names the missing line, which is the right outcome. A
// silent fallback to English would put one English bullet in the middle of a
// German list, and nobody would notice for months.
//
// Only the lines the translated journeys actually use are present. The rest
// arrive with the journeys that need them.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";

export interface TourPhrasebook {
  /** Headings and labels on a journey page. */
  h: {
    overview: string;
    itinerary: string;
    included: string;
    excluded: string;
    faq: string;
    atAGlance: string;
    comfort: string;
    enquire: string;
  };
  /** Field labels in the facts panel. */
  f: {
    duration: string;
    startPoint: string;
    visiting: string;
    isPrivate: string;
    from: string;
    walking: string;
    sleep: string;
    early: string;
    drives: string;
  };
  /** The two words an itinerary row is numbered with. */
  dayLabel: string;
  stopLabel: string;
  /** "Yes — your party only", as this language says it. */
  privateYes: string;
  /** The journey's editorial category. */
  categories: Record<string, string>;
  /** comfort.walking, which is one of two fixed English values. */
  walking: Record<string, string>;
  /** The enquiry block under the itinerary. */
  cta: { heading: string; text: string; button: string; whatsapp: string };
  /** What the price is, said once under it. */
  priceNote: string;
  /** Back to this language's journeys page. */
  allJourneys: string;
  /** Keyed by the English line in data/tours.ts. */
  lines: Record<string, string>;
}

const de: TourPhrasebook = {
  h: {
    overview: "Die Reise",
    itinerary: "Tag für Tag",
    included: "Inbegriffen",
    excluded: "Nicht inbegriffen",
    faq: "Häufige Fragen",
    atAGlance: "Auf einen Blick",
    comfort: "Wie anstrengend ist das",
    enquire: "Anfragen",
  },
  f: {
    duration: "Dauer",
    startPoint: "Start",
    visiting: "Stationen",
    isPrivate: "Privat",
    from: "ab",
    walking: "Zu Fuß",
    sleep: "Übernachtung",
    early: "Früher Start",
    drives: "Lange Fahrten",
  },
  dayLabel: "Tag",
  stopLabel: "Station",
  privateYes: "Ja — nur Ihre Gruppe",
  categories: {
    "Signature Journey": "Signature-Reise",
    "Short Break": "Kurzreise",
    "Day Tour": "Tagesausflug",
    "Nile Cruise": "Nilkreuzfahrt",
    "Honeymoon": "Hochzeitsreise",
    "Family Journey": "Familienreise",
    "Photography Journey": "Fotoreise",
    "Grand Tour": "Große Rundreise",
    "Cultural Journey": "Kulturreise",
    "Red Sea": "Rotes Meer",
  },
  walking: {
    Moderate: "Mittel",
    Light: "Wenig",
  },
  cta: {
    heading: "Sagen Sie uns Ihre Termine",
    text: "Reisezeitraum und Personenzahl genügen. Wir antworten innerhalb eines Werktages mit einem echten Reiseverlauf und einem ausgewiesenen Preis — unverbindlich.",
    button: "Anfrage senden",
    whatsapp: "Guten Tag Kemet — wir interessieren uns für diese Reise.",
  },
  priceNote: "Pro Person, Normalsaison. Zuschläge für Feiertage weisen wir im Angebot getrennt aus.",
  allJourneys: "Alle Reisen ansehen",
  lines: {
    // --- included ---
    "Private Egyptologist guide throughout":
      "Durchgehend ein privater Ägyptologe als Reiseleitung",
    "All entrance fees to sites and monuments":
      "Alle Eintrittsgelder für Stätten und Monumente",
    "Lunch on each touring day": "Mittagessen an jedem Besichtigungstag",
    "Private air-conditioned transfers": "Private, klimatisierte Transfers",
    "Hotel pickup & drop-off": "Abholung und Rückbringung am Hotel",
    "Bottled water every day": "Wasser in Flaschen an jedem Tag",
    "9 nights' accommodation — 4- or 5-star hotels and a deluxe Nile cruise":
      "9 Übernachtungen — 4- oder 5-Sterne-Hotels und eine Deluxe-Nilkreuzfahrt",
    "3-night full-board Nile cruise, Aswan to Luxor":
      "Dreitägige Nilkreuzfahrt mit Vollpension, Assuan bis Luxor",
    "Sleeper-train berths Cairo↔Upper Egypt (both directions)":
      "Schlafwagenplätze Kairo↔Oberägypten (in beiden Richtungen)",
    "6 nights' accommodation in 4- or 5-star hotels":
      "6 Übernachtungen in 4- oder 5-Sterne-Hotels",
    "Sleeper-train berths Cairo↔Luxor (both directions)":
      "Schlafwagenplätze Kairo↔Luxor (in beiden Richtungen)",
    "All shore excursions as private visits with your own guide":
      "Alle Landgänge als private Besichtigungen mit Ihrem eigenen Guide",
    "13 nights — 4- or 5-star hotels, a 3-night full-board Nile cruise and a Red Sea resort":
      "13 Übernachtungen — 4- oder 5-Sterne-Hotels, dreitägige Nilkreuzfahrt mit Vollpension und ein Resort am Roten Meer",
    "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)":
      "Alle Inlandsflüge (Kairo–Assuan, Luxor–Scharm el-Scheich, Scharm–Kairo)",
    "Abu Simbel excursion by private vehicle":
      "Ausflug nach Abu Simbel im privaten Fahrzeug",
    "Ras Mohammed boat day with snorkelling equipment":
      "Bootstag im Ras-Mohammed-Nationalpark inklusive Schnorchelausrüstung",
    "2 nights' accommodation in a 4- or 5-star Luxor hotel":
      "2 Übernachtungen in einem 4- oder 5-Sterne-Hotel in Luxor",
    "Evening entry to Luxor Temple and the Avenue of Sphinxes":
      "Abendlicher Eintritt zum Luxor-Tempel und zur Sphinxallee",
    "2 nights' accommodation in a 4- or 5-star hotel":
      "2 Übernachtungen in einem 4- oder 5-Sterne-Hotel",
    "VIP airport meet & assist with fast-track, both directions":
      "VIP-Empfang am Flughafen mit Fast-Track, bei Ankunft und Abflug",

    // --- excluded ---
    "International flights to and from Egypt":
      "Internationale Flüge nach und aus Ägypten",
    "Egypt entry visa": "Einreisevisum für Ägypten",
    "Tipping (gratuities)": "Trinkgelder",
    "Personal expenses": "Persönliche Ausgaben",
    "Optional extras — Abu Simbel, camel rides, dinner cruise, drinks":
      "Optionale Zusatzleistungen — Abu Simbel, Kamelritte, Dinner-Cruise, Getränke",
    "Hot-air balloon flight (optional extra)":
      "Ballonfahrt (optionale Zusatzleistung)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)":
      "Gräber mit gesondertem Ticket (Tutanchamun, Sethos I. — auf Wunsch arrangiert)",

    // --- the rest of the catalogue ---
    "3 nights' accommodation in 4- or 5-star hotels":
      "3 Übernachtungen in 4- oder 5-Sterne-Hotels",
    "2 nights' accommodation in 4- or 5-star hotels":
      "2 Übernachtungen in 4- oder 5-Sterne-Hotels",
    "4 nights' accommodation in 4- or 5-star hotels (Luxor & Aswan)":
      "4 Übernachtungen in 4- oder 5-Sterne-Hotels (Luxor und Assuan)",
    "4 nights' accommodation in a 4- or 5-star hotel":
      "4 Übernachtungen in einem 4- oder 5-Sterne-Hotel",
    "1 night's accommodation in a seafront 4/5-star hotel":
      "1 Übernachtung in einem 4- oder 5-Sterne-Hotel direkt am Meer",
    "7 nights' accommodation — family suites or connecting rooms, 4- or 5-star":
      "7 Übernachtungen — Familiensuiten oder Verbindungszimmer, 4 oder 5 Sterne",
    "8 nights — Nile-view suites, 4- or 5-star hotels and a 3-night full-board cruise":
      "8 Übernachtungen — Suiten mit Nilblick, 4- oder 5-Sterne-Hotels und eine dreitägige Nilkreuzfahrt mit Vollpension",
    "4 nights' accommodation in a 4- or 5-star Red Sea resort (half board)":
      "4 Übernachtungen in einem 4- oder 5-Sterne-Resort am Roten Meer (Halbpension)",
    "3 nights' accommodation in a 4- or 5-star Red Sea resort (half board)":
      "3 Übernachtungen in einem 4- oder 5-Sterne-Resort am Roten Meer (Halbpension)",
    "Domestic flights Cairo–Luxor and Aswan–Cairo":
      "Inlandsflüge Kairo–Luxor und Assuan–Kairo",
    "Domestic flights Cairo–Aswan and Luxor–Cairo":
      "Inlandsflüge Kairo–Assuan und Luxor–Kairo",
    "4x4 desert transfer where required":
      "Geländewagen für die Wüstenabschnitte, wo nötig",
    "Lakeside fish lunch": "Fischessen am See",
    "Seafront seafood lunch": "Fischessen direkt am Meer",
    "Private local food guide for the evening":
      "Privater lokaler Food-Guide für den Abend",
    "All food tastings listed in the itinerary":
      "Alle im Programm genannten Verkostungen",
    "Bottled water and tea/coffee at the ahwa":
      "Wasser in Flaschen sowie Tee oder Kaffee im Ahwa",
    "Private felucca sail in Aswan": "Private Felukenfahrt in Assuan",
    "Sunset felucca charter in Aswan":
      "Private Felukenfahrt zum Sonnenuntergang in Assuan",
    "Golden-hour felucca charter in Aswan":
      "Private Felukenfahrt zur goldenen Stunde in Assuan",
    "Felucca sail and Nubian village visit in Aswan":
      "Felukenfahrt und Besuch eines nubischen Dorfes in Assuan",
    "Private early-access Giza sunrise session":
      "Privater Zugang zum Plateau von Gizeh zum Sonnenaufgang",
    "Private family-specialist Egyptologist throughout":
      "Durchgehend ein auf Familien spezialisierter privater Ägyptologe",
    "Private photography-aware Egyptologist guide throughout":
      "Durchgehend ein privater Ägyptologe mit Blick für die Fotografie",
    "Private historian-Egyptologist guide throughout":
      "Durchgehend ein privater Ägyptologe und Historiker",
    "Photography permits where required (tripod/site)":
      "Fotogenehmigungen, wo erforderlich (Stativ bzw. Stätte)",
    "Sufi tanoura performance tickets":
      "Eintritt zur Sufi-Tanoura-Vorführung",
    "Private full-day Ras Mohammed boat charter with snorkelling equipment":
      "Privat gecharterter Bootstag im Ras-Mohammed-Nationalpark inklusive Schnorchelausrüstung",
    "Sinai desert evening with Bedouin dinner":
      "Abend in der Sinai-Wüste mit beduinischem Abendessen",
    "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre":
      "5 geführte Tauchgänge (1 Check-Dive und 2 Bootstage mit je zwei Tauchgängen) mit einem lizenzierten PADI-Center",
    "Full equipment rental, tanks and weights":
      "Komplette Ausrüstung, Flaschen und Blei",
    "Marine park fees for Ras Mohammed":
      "Nationalparkgebühren für Ras Mohammed",
    "Seafood dinner on the first evening":
      "Fischessen am ersten Abend",
    "Private air-conditioned vehicle for the desert road, both ways":
      "Privates, klimatisiertes Fahrzeug für die Wüstenstraße, hin und zurück",
    "Breakfast box and bottled water":
      "Frühstückspaket und Wasser in Flaschen",
    "Hotel or cruise-ship pickup & drop-off in Aswan":
      "Abholung und Rückbringung am Hotel oder Schiff in Assuan",

    // --- excluded, the rest ---
    "Entrance tickets to sites and monuments — paid at the published gate rate, with nothing added":
      "Eintrittskarten für Stätten und Monumente — zum offiziellen Kassenpreis, ohne Aufschlag",
    "Entrance tickets to both temples — paid at the published gate rate, with nothing added":
      "Eintrittskarten für beide Tempel — zum offiziellen Kassenpreis, ohne Aufschlag",
    "Entry inside the pyramid chambers (optional extra)":
      "Zutritt zu den Kammern im Inneren der Pyramiden (optionale Zusatzleistung)",
    "Lunch (half-day tour)": "Mittagessen (Halbtagestour)",
    "Lunch (returned to Aswan by early afternoon)":
      "Mittagessen (Rückkehr nach Assuan am frühen Nachmittag)",
    "Camel or horse rides (optional extra)":
      "Kamel- oder Pferderitte (optionale Zusatzleistung)",
    "Other optional extras — dinner cruise, drinks":
      "Weitere optionale Zusatzleistungen — Dinner-Cruise, Getränke",
    "Alcoholic drinks": "Alkoholische Getränke",
    "Additional dishes beyond the tasting menu":
      "Zusätzliche Gerichte über das Verkostungsmenü hinaus",
    "Abu Simbel excursion (optional extra)":
      "Ausflug nach Abu Simbel (optionale Zusatzleistung)",
    "Hot-air balloon flight (booked on request, ~EUR 120 per person)":
      "Ballonfahrt (auf Anfrage buchbar, ca. 120 € pro Person)",
    "Hot-air balloon flight (booked on request)":
      "Ballonfahrt (auf Anfrage buchbar)",
    "Sound & Light show and camel rides (optional extras)":
      "Ton-und-Licht-Show und Kamelritte (optionale Zusatzleistungen)",
    "Camera equipment and drone permits (drones are effectively prohibited in Egypt)":
      "Fotoausrüstung und Drohnengenehmigungen (Drohnen sind in Ägypten faktisch verboten)",
    "Scuba diving (arranged on request with licensed centres)":
      "Gerätetauchen (auf Anfrage mit lizenzierten Centern arrangiert)",
    "Marine park fees where applicable":
      "Nationalparkgebühren, wo sie anfallen",
    "Dive insurance (mandatory — arranged at booking if you have none)":
      "Tauchversicherung (verpflichtend — bei der Buchung arrangiert, falls nicht vorhanden)",
    "Certification courses (available as an alternative programme)":
      "Tauchkurse mit Zertifikat (als alternatives Programm verfügbar)",
    "Flight option Aswan–Abu Simbel (available on request, limited schedule)":
      "Flugvariante Assuan–Abu Simbel (auf Anfrage, eingeschränkter Flugplan)",
  },
};

/** Only the languages a journey has actually been translated into. */
export const TOUR_PHRASEBOOK: Partial<Record<TranslatedLocale, TourPhrasebook>> = { de };

/**
 * Every repeated line a translated journey uses must be in its phrasebook.
 *
 * Called once at build time from tours-i18n/index.ts. It throws rather than
 * falling back to English, because one English bullet in the middle of a
 * German list is exactly the kind of thing that ships and is never noticed.
 */
export function assertPhrasebook(
  locale: TranslatedLocale,
  tourSlug: string,
  lines: readonly string[],
): void {
  const book = TOUR_PHRASEBOOK[locale];
  if (!book) {
    throw new Error(
      `tours-i18n: "${tourSlug}" is translated into "${locale}" but there is ` +
      `no ${locale} phrasebook. Add one in tours-i18n/phrasebook.ts.`,
    );
  }
  const missing = lines.filter((l) => !book.lines[l]);
  if (missing.length) {
    throw new Error(
      `tours-i18n/phrasebook.ts [${locale}]: journey "${tourSlug}" uses lines ` +
      `that have no translation:\n  ${missing.join("\n  ")}\n` +
      `Either add them, or — if a line was reworded in data/tours.ts — update ` +
      `the key here to match the new English exactly.`,
    );
  }
}
