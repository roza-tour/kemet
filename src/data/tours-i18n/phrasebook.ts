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
  /** For journeys with a scheduled Nile cruise: "Guide, vehicle and visits —
   *  yes; the cruise ship is shared". */
  privateShared: string;
  /** The journey's editorial category. */
  categories: Record<string, string>;
  /** comfort.walking, which is one of two fixed English values. */
  walking: Record<string, string>;
  /** The enquiry block under the itinerary. */
  cta: { heading: string; text: string; button: string; whatsapp: string };
  /** What the price is, said once under it. */
  priceNote: string;
  /** Added to the price note when the food itself is not in the price. */
  foodNote: string;
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
  privateShared: "Guide, Fahrzeug und Besichtigungen — ja; das Schiff teilen Sie mit anderen Gästen",
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
  foodNote: "Speisen und Getränke sind nicht enthalten — Sie bezahlen sie direkt an jeder Station.",
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
    "Sleeper-train berths Cairo–Upper Egypt (both directions)":
      "Schlafwagenplätze Kairo–Oberägypten (in beiden Richtungen)",
    "6 nights' accommodation in 4- or 5-star hotels":
      "6 Übernachtungen in 4- oder 5-Sterne-Hotels",
    "Sleeper-train berths Cairo–Luxor (both directions)":
      "Schlafwagenplätze Kairo–Luxor (in beiden Richtungen)",
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
    "9 nights' accommodation — hotels and a Nile cruise": "9 Übernachtungen — Hotels und eine Nilkreuzfahrt",
    "3-night Nile cruise, Aswan to Luxor": "Dreitägige Nilkreuzfahrt, Assuan bis Luxor",
    "6 nights' hotel accommodation": "6 Übernachtungen im Hotel",
    "13 nights — hotels, a 3-night Nile cruise and a Red Sea resort": "13 Übernachtungen — Hotels, dreitägige Nilkreuzfahrt und ein Resort am Roten Meer",
    "2 nights' hotel accommodation in Luxor": "2 Übernachtungen im Hotel in Luxor",
    "2 nights' hotel accommodation": "2 Übernachtungen im Hotel",
    "3 nights' hotel accommodation": "3 Übernachtungen im Hotel",
    "4 nights' hotel accommodation (Luxor & Aswan)": "4 Übernachtungen im Hotel (Luxor und Assuan)",
    "4 nights' hotel accommodation": "4 Übernachtungen im Hotel",
    "1 night in a seafront hotel": "1 Übernachtung in einem Hotel direkt am Meer",
    "7 nights' accommodation — family suites or connecting rooms": "7 Übernachtungen — Familiensuiten oder Verbindungszimmer",
    "8 nights — Nile-view suites and a 3-night Nile cruise": "8 Übernachtungen — Suiten mit Nilblick und eine dreitägige Nilkreuzfahrt",
    "4 nights in a Red Sea resort": "4 Übernachtungen in einem Resort am Roten Meer",
    "3 nights in a Red Sea resort": "3 Übernachtungen in einem Resort am Roten Meer",
    "Sinai desert evening under the stars": "Abend unter Sternen in der Sinai-Wüste",
    "Bottled water": "Wasser in Flaschen",
    "Meals": "Mahlzeiten",
    "Meals, except on board the Nile cruise": "Mahlzeiten, außer an Bord der Nilkreuzfahrt",
    "8 nights — Nile-view suites and a 3-night full-board Nile cruise": "8 Übernachtungen — Suiten mit Nilblick und eine dreitägige Nilkreuzfahrt mit Vollpension",
    "13 nights — hotels, a 3-night full-board Nile cruise and a Red Sea resort": "13 Übernachtungen — Hotels, dreitägige Nilkreuzfahrt mit Vollpension und ein Resort am Roten Meer",
    "A Zar music evening in Cairo (optional extra)": "Ein Zar-Musikabend in Kairo (optionale Zusatzleistung)",
    "Cooking with your own hands in a Cairo restaurant kitchen (optional extra)": "Selbst kochen in einer Restaurantküche in Kairo (optionale Zusatzleistung)",
    "Optional extras you choose to add — activities, drinks":
      "Optionale Zusatzleistungen nach Wahl — Aktivitäten, Getränke",
    "Hot-air balloon flight (optional extra)":
      "Ballonfahrt (optionale Zusatzleistung)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)":
      "Gräber mit gesondertem Ticket (Tutanchamun, Sethos I. — auf Wunsch arrangiert)",

    // --- the rest of the catalogue ---
    "3 nights' accommodation in a 4- or 5-star hotel":
      "3 Übernachtungen in einem 4- oder 5-Sterne-Hotel",
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
    "Your guide's choice of places, and help ordering at every stop":
      "Die Auswahl der Lokale durch Ihren Guide und Hilfe beim Bestellen an jeder Station",
    "Bottled water through the evening":
      "Wasser in Flaschen den ganzen Abend",
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
    "Private golf cart around the plateau (optional extra)":
      "Privates Golfcart auf dem Plateau (optionale Zusatzleistung)",
    "Private opening of the Tutankhamun galleries, an hour and a half (optional extra)":
      "Private Öffnung der Tutanchamun-Säle, anderthalb Stunden (optionale Zusatzleistung)",
    "Other optional extras — dinner cruise, drinks":
      "Weitere optionale Zusatzleistungen — Dinner-Cruise, Getränke",
    "Food and drinks at each stop, paid directly to the venue":
      "Speisen und Getränke an den Stationen — direkt vor Ort bezahlt",
    "Abu Simbel excursion (optional extra)":
      "Ausflug nach Abu Simbel (optionale Zusatzleistung)",
    "Hot-air balloon flight (booked on request, about €120 per person)":
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


const fr: TourPhrasebook = {
  h: {
    overview: "Le voyage",
    itinerary: "Jour après jour",
    included: "Compris",
    excluded: "Non compris",
    faq: "Questions fréquentes",
    atAGlance: "En bref",
    comfort: "Le rythme",
    enquire: "Demander",
  },
  f: {
    duration: "Durée",
    startPoint: "Départ",
    visiting: "Étapes",
    isPrivate: "Privé",
    from: "à partir de",
    walking: "À pied",
    sleep: "Nuits",
    early: "Départ matinal",
    drives: "Longues routes",
  },
  dayLabel: "Jour",
  stopLabel: "Étape",
  privateYes: "Oui — votre groupe seul",
  privateShared: "Guide, véhicule et visites — oui ; le bateau est partagé avec d’autres passagers",
  categories: {
    "Signature Journey": "Voyage signature",
    "Short Break": "Court séjour",
    "Day Tour": "Excursion à la journée",
    "Nile Cruise": "Croisière sur le Nil",
    "Honeymoon": "Voyage de noces",
    "Family Journey": "Voyage en famille",
    "Photography Journey": "Voyage photo",
    "Grand Tour": "Grand tour",
    "Cultural Journey": "Voyage culturel",
    "Red Sea": "Mer Rouge",
  },
  walking: { Moderate: "Modéré", Light: "Léger" },
  cta: {
    heading: "Donnez-nous vos dates",
    text: "Vos dates et le nombre de voyageurs suffisent. Nous répondons sous un jour ouvré avec un itinéraire réel et un prix détaillé — sans engagement.",
    button: "Envoyer la demande",
    whatsapp: "Bonjour Kemet — ce voyage nous intéresse.",
  },
  priceNote: "Par personne, en saison normale. Les suppléments de fêtes sont indiqués séparément dans le devis.",
  foodNote: "Les plats et les boissons ne sont pas compris : ils se règlent directement à chaque étape.",
  allJourneys: "Voir tous les voyages",
  lines: {
    "Private Egyptologist guide throughout": "Un égyptologue privé tout au long du voyage",
    "All entrance fees to sites and monuments": "Tous les droits d'entrée aux sites et monuments",
    "Lunch on each touring day": "Le déjeuner chaque jour de visite",
    "Private air-conditioned transfers": "Transferts privés climatisés",
    "Hotel pickup & drop-off": "Prise en charge et retour à l'hôtel",
    "Bottled water every day": "De l'eau en bouteille chaque jour",
    "9 nights' accommodation — 4- or 5-star hotels and a deluxe Nile cruise":
      "9 nuits — hôtels 4 ou 5 étoiles et une croisière de luxe sur le Nil",
    "3-night full-board Nile cruise, Aswan to Luxor":
      "Croisière de 3 nuits en pension complète, d'Assouan à Louxor",
    "Sleeper-train berths Cairo–Upper Egypt (both directions)":
      "Couchettes de train de nuit Le Caire–Haute-Égypte (aller et retour)",
    "6 nights' accommodation in 4- or 5-star hotels": "6 nuits en hôtels 4 ou 5 étoiles",
    "Sleeper-train berths Cairo–Luxor (both directions)":
      "Couchettes de train de nuit Le Caire–Louxor (aller et retour)",
    "All shore excursions as private visits with your own guide":
      "Toutes les escales en visites privées avec votre propre guide",
    "13 nights — 4- or 5-star hotels, a 3-night full-board Nile cruise and a Red Sea resort":
      "13 nuits — hôtels 4 ou 5 étoiles, croisière de 3 nuits en pension complète et un resort en mer Rouge",
    "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)":
      "Tous les vols intérieurs (Le Caire–Assouan, Louxor–Charm el-Cheikh, Charm–Le Caire)",
    "Abu Simbel excursion by private vehicle": "Excursion à Abou Simbel en véhicule privé",
    "Ras Mohammed boat day with snorkelling equipment":
      "Journée en bateau à Ras Mohammed, équipement de snorkeling compris",
    "2 nights' accommodation in a 4- or 5-star Luxor hotel":
      "2 nuits dans un hôtel 4 ou 5 étoiles à Louxor",
    "Evening entry to Luxor Temple and the Avenue of Sphinxes":
      "Entrée en soirée au temple de Louxor et à l'allée des Sphinx",
    "2 nights' accommodation in a 4- or 5-star hotel": "2 nuits dans un hôtel 4 ou 5 étoiles",
    "VIP airport meet & assist with fast-track, both directions":
      "Accueil VIP à l'aéroport avec passage prioritaire, à l'arrivée et au départ",
    "3 nights' accommodation in a 4- or 5-star hotel": "3 nuits dans un hôtel 4 ou 5 étoiles",
    "2 nights' accommodation in 4- or 5-star hotels": "2 nuits en hôtels 4 ou 5 étoiles",
    "4 nights' accommodation in 4- or 5-star hotels (Luxor & Aswan)":
      "4 nuits en hôtels 4 ou 5 étoiles (Louxor et Assouan)",
    "4 nights' accommodation in a 4- or 5-star hotel": "4 nuits dans un hôtel 4 ou 5 étoiles",
    "1 night's accommodation in a seafront 4/5-star hotel":
      "1 nuit dans un hôtel 4 ou 5 étoiles en bord de mer",
    "7 nights' accommodation — family suites or connecting rooms, 4- or 5-star":
      "7 nuits — suites familiales ou chambres communicantes, 4 ou 5 étoiles",
    "8 nights — Nile-view suites, 4- or 5-star hotels and a 3-night full-board cruise":
      "8 nuits — suites avec vue sur le Nil, hôtels 4 ou 5 étoiles et une croisière de 3 nuits en pension complète",
    "4 nights' accommodation in a 4- or 5-star Red Sea resort (half board)":
      "4 nuits dans un resort 4 ou 5 étoiles en mer Rouge (demi-pension)",
    "3 nights' accommodation in a 4- or 5-star Red Sea resort (half board)":
      "3 nuits dans un resort 4 ou 5 étoiles en mer Rouge (demi-pension)",
    "Domestic flights Cairo–Luxor and Aswan–Cairo":
      "Vols intérieurs Le Caire–Louxor et Assouan–Le Caire",
    "Domestic flights Cairo–Aswan and Luxor–Cairo":
      "Vols intérieurs Le Caire–Assouan et Louxor–Le Caire",
    "4x4 desert transfer where required": "Transfert en 4x4 sur les sections désertiques",
    "Lakeside fish lunch": "Déjeuner de poisson au bord du lac",
    "Seafront seafood lunch": "Déjeuner de fruits de mer face à la Méditerranée",
    "Private local food guide for the evening": "Un guide culinaire local privé pour la soirée",
    "Your guide's choice of places, and help ordering at every stop": "Le choix des adresses par votre guide, et son aide pour commander à chaque étape",
    "Bottled water through the evening": "Eau en bouteille toute la soirée",
    "Private felucca sail in Aswan": "Navigation privée en felouque à Assouan",
    "Sunset felucca charter in Aswan": "Felouque privée au coucher du soleil à Assouan",
    "Golden-hour felucca charter in Aswan": "Felouque privée à l'heure dorée à Assouan",
    "Felucca sail and Nubian village visit in Aswan":
      "Felouque et visite d'un village nubien à Assouan",
    "Private early-access Giza sunrise session":
      "Accès privé anticipé au plateau de Gizeh au lever du soleil",
    "Private family-specialist Egyptologist throughout":
      "Un égyptologue privé spécialiste des familles tout au long du voyage",
    "Private photography-aware Egyptologist guide throughout":
      "Un égyptologue privé habitué aux photographes tout au long du voyage",
    "Private historian-Egyptologist guide throughout":
      "Un guide égyptologue et historien privé tout au long du voyage",
    "Photography permits where required (tripod/site)":
      "Permis de photographie lorsqu'ils sont exigés (trépied ou site)",
    "Sufi tanoura performance tickets": "Billets pour le spectacle soufi de tanoura",
    "Private full-day Ras Mohammed boat charter with snorkelling equipment":
      "Bateau privé pour la journée à Ras Mohammed, équipement de snorkeling compris",
    "Sinai desert evening with Bedouin dinner":
      "Soirée dans le désert du Sinaï avec dîner bédouin",
    "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre":
      "5 plongées guidées (1 plongée de contrôle et 2 journées bateau de deux plongées) avec un centre PADI agréé",
    "Full equipment rental, tanks and weights": "Location de l'équipement complet, blocs et plombs",
    "Marine park fees for Ras Mohammed": "Droits du parc marin de Ras Mohammed",
    "Seafood dinner on the first evening": "Dîner de fruits de mer le premier soir",
    "Private air-conditioned vehicle for the desert road, both ways":
      "Véhicule privé climatisé pour la route du désert, aller et retour",
    "Breakfast box and bottled water": "Panier petit-déjeuner et eau en bouteille",
    "Hotel or cruise-ship pickup & drop-off in Aswan":
      "Prise en charge et retour à l'hôtel ou au bateau à Assouan",

    "Entrance tickets to sites and monuments — paid at the published gate rate, with nothing added":
      "Les billets d'entrée aux sites et monuments — réglés au tarif officiel affiché, sans majoration",
    "Entrance tickets to both temples — paid at the published gate rate, with nothing added":
      "Les billets d'entrée aux deux temples — réglés au tarif officiel affiché, sans majoration",
    "Entry inside the pyramid chambers (optional extra)":
      "L'entrée dans les chambres intérieures des pyramides (en option)",
    "Lunch (half-day tour)": "Le déjeuner (excursion d'une demi-journée)",
    "Lunch (returned to Aswan by early afternoon)":
      "Le déjeuner (retour à Assouan en début d'après-midi)",
    "Camel or horse rides (optional extra)": "Les promenades à dos de chameau ou à cheval (en option)",
    "Private golf cart around the plateau (optional extra)": "Une voiturette de golf privée sur le plateau (en option)",
    "Private opening of the Tutankhamun galleries, an hour and a half (optional extra)":
      "L'ouverture privée des salles de Toutânkhamon, une heure et demie (en option)",
    "Other optional extras — dinner cruise, drinks":
      "Les autres options — dîner-croisière, boissons",
    "Food and drinks at each stop, paid directly to the venue": "Les plats et les boissons à chaque étape, réglés directement sur place",
    "Abu Simbel excursion (optional extra)": "L'excursion à Abou Simbel (en option)",
    "Hot-air balloon flight (booked on request, about €120 per person)":
      "Le vol en montgolfière (sur demande, environ 120 € par personne)",
    "Hot-air balloon flight (booked on request)": "Le vol en montgolfière (sur demande)",
    "Hot-air balloon flight (optional extra)": "Le vol en montgolfière (en option)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)":
      "Les tombes à billet séparé (Toutânkhamon, Séthi Ier — organisées sur demande)",
    "Sound & Light show and camel rides (optional extras)":
      "Le spectacle son et lumière et les promenades à dos de chameau (en option)",
    "Camera equipment and drone permits (drones are effectively prohibited in Egypt)":
      "Le matériel photo et les autorisations de drone (les drones sont de fait interdits en Égypte)",
    "Scuba diving (arranged on request with licensed centres)":
      "La plongée bouteille (organisée sur demande avec des centres agréés)",
    "Marine park fees where applicable": "Les droits de parc marin, le cas échéant",
    "Dive insurance (mandatory — arranged at booking if you have none)":
      "L'assurance plongée (obligatoire — souscrite à la réservation si vous n'en avez pas)",
    "Certification courses (available as an alternative programme)":
      "Les cours de certification (proposés comme programme alternatif)",
    "Flight option Aswan–Abu Simbel (available on request, limited schedule)":
      "L'option avion Assouan–Abou Simbel (sur demande, vols limités)",
    "International flights to and from Egypt": "Les vols internationaux à destination et au départ de l'Égypte",
    "Egypt entry visa": "Le visa d'entrée en Égypte",
    "Tipping (gratuities)": "Les pourboires",
    "Personal expenses": "Les dépenses personnelles",
    "9 nights' accommodation — hotels and a Nile cruise": "9 nuits — hôtels et une croisière sur le Nil",
    "3-night Nile cruise, Aswan to Luxor": "Croisière de 3 nuits, d'Assouan à Louxor",
    "6 nights' hotel accommodation": "6 nuits d'hôtel",
    "13 nights — hotels, a 3-night Nile cruise and a Red Sea resort": "13 nuits — hôtels, croisière de 3 nuits sur le Nil et un resort en mer Rouge",
    "2 nights' hotel accommodation in Luxor": "2 nuits d'hôtel à Louxor",
    "2 nights' hotel accommodation": "2 nuits d'hôtel",
    "3 nights' hotel accommodation": "3 nuits d'hôtel",
    "4 nights' hotel accommodation (Luxor & Aswan)": "4 nuits d'hôtel (Louxor et Assouan)",
    "4 nights' hotel accommodation": "4 nuits d'hôtel",
    "1 night in a seafront hotel": "1 nuit dans un hôtel en bord de mer",
    "7 nights' accommodation — family suites or connecting rooms": "7 nuits — suites familiales ou chambres communicantes",
    "8 nights — Nile-view suites and a 3-night Nile cruise": "8 nuits — suites avec vue sur le Nil et une croisière de 3 nuits",
    "4 nights in a Red Sea resort": "4 nuits dans un resort en mer Rouge",
    "3 nights in a Red Sea resort": "3 nuits dans un resort en mer Rouge",
    "Sinai desert evening under the stars": "Soirée sous les étoiles dans le désert du Sinaï",
    "Bottled water": "Eau en bouteille",
    "Meals": "Les repas",
    "Meals, except on board the Nile cruise": "Les repas, sauf à bord de la croisière sur le Nil",
    "8 nights — Nile-view suites and a 3-night full-board Nile cruise": "8 nuits — suites avec vue sur le Nil et une croisière de 3 nuits en pension complète",
    "13 nights — hotels, a 3-night full-board Nile cruise and a Red Sea resort": "13 nuits — hôtels, croisière de 3 nuits en pension complète et un resort en mer Rouge",
    "A Zar music evening in Cairo (optional extra)": "Une soirée de musique zar au Caire (en option)",
    "Cooking with your own hands in a Cairo restaurant kitchen (optional extra)": "Cuisiner de vos propres mains dans la cuisine d'un restaurant du Caire (en option)",
    "Optional extras you choose to add — activities, drinks":
      "Les options que vous ajoutez — activités, boissons",
  },
};

const it: TourPhrasebook = {
  h: {
    overview: "Il viaggio",
    itinerary: "Giorno per giorno",
    included: "Incluso",
    excluded: "Non incluso",
    faq: "Domande frequenti",
    atAGlance: "In breve",
    comfort: "Il ritmo",
    enquire: "Richiedi",
  },
  f: {
    duration: "Durata",
    startPoint: "Partenza",
    visiting: "Tappe",
    isPrivate: "Privato",
    from: "da",
    walking: "A piedi",
    sleep: "Pernottamenti",
    early: "Partenza all'alba",
    drives: "Tratti lunghi in auto",
  },
  dayLabel: "Giorno",
  stopLabel: "Tappa",
  privateYes: "Sì — solo il vostro gruppo",
  privateShared: "Guida, veicolo e visite — sì; la nave è condivisa con altri ospiti",
  categories: {
    "Signature Journey": "Viaggio signature",
    "Short Break": "Viaggio breve",
    "Day Tour": "Escursione in giornata",
    "Nile Cruise": "Crociera sul Nilo",
    "Honeymoon": "Viaggio di nozze",
    "Family Journey": "Viaggio in famiglia",
    "Photography Journey": "Viaggio fotografico",
    "Grand Tour": "Gran tour",
    "Cultural Journey": "Viaggio culturale",
    "Red Sea": "Mar Rosso",
  },
  walking: { Moderate: "Moderato", Light: "Leggero" },
  cta: {
    heading: "Diteci le vostre date",
    text: "Bastano il periodo e il numero di persone. Rispondiamo entro un giorno lavorativo con un itinerario vero e un prezzo dettagliato — senza impegno.",
    button: "Invia la richiesta",
    whatsapp: "Buongiorno Kemet — questo viaggio ci interessa.",
  },
  priceNote: "A persona, in stagione normale. I supplementi delle festività sono indicati separatamente nel preventivo.",
  foodNote: "Cibo e bevande non sono inclusi: si pagano direttamente a ogni tappa.",
  allJourneys: "Vedi tutti i viaggi",
  lines: {
    "Private Egyptologist guide throughout": "Un egittologo privato per tutto il viaggio",
    "All entrance fees to sites and monuments": "Tutti i biglietti d'ingresso a siti e monumenti",
    "Lunch on each touring day": "Il pranzo in ogni giornata di visita",
    "Private air-conditioned transfers": "Trasferimenti privati con aria condizionata",
    "Hotel pickup & drop-off": "Prelievo e rientro in hotel",
    "Bottled water every day": "Acqua in bottiglia ogni giorno",
    "9 nights' accommodation — 4- or 5-star hotels and a deluxe Nile cruise":
      "9 notti — hotel 4 o 5 stelle e una crociera deluxe sul Nilo",
    "3-night full-board Nile cruise, Aswan to Luxor":
      "Crociera di 3 notti in pensione completa, da Assuan a Luxor",
    "Sleeper-train berths Cairo–Upper Egypt (both directions)":
      "Cuccette sul treno notturno Il Cairo–Alto Egitto (andata e ritorno)",
    "6 nights' accommodation in 4- or 5-star hotels": "6 notti in hotel 4 o 5 stelle",
    "Sleeper-train berths Cairo–Luxor (both directions)":
      "Cuccette sul treno notturno Il Cairo–Luxor (andata e ritorno)",
    "All shore excursions as private visits with your own guide":
      "Tutte le escursioni a terra come visite private con la vostra guida",
    "13 nights — 4- or 5-star hotels, a 3-night full-board Nile cruise and a Red Sea resort":
      "13 notti — hotel 4 o 5 stelle, crociera di 3 notti in pensione completa e un resort sul Mar Rosso",
    "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)":
      "Tutti i voli interni (Il Cairo–Assuan, Luxor–Sharm el-Sheikh, Sharm–Il Cairo)",
    "Abu Simbel excursion by private vehicle": "Escursione ad Abu Simbel in veicolo privato",
    "Ras Mohammed boat day with snorkelling equipment":
      "Giornata in barca a Ras Mohammed, attrezzatura da snorkeling inclusa",
    "2 nights' accommodation in a 4- or 5-star Luxor hotel":
      "2 notti in un hotel 4 o 5 stelle a Luxor",
    "Evening entry to Luxor Temple and the Avenue of Sphinxes":
      "Ingresso serale al Tempio di Luxor e al Viale delle Sfingi",
    "2 nights' accommodation in a 4- or 5-star hotel": "2 notti in un hotel 4 o 5 stelle",
    "VIP airport meet & assist with fast-track, both directions":
      "Accoglienza VIP in aeroporto con corsia preferenziale, all'arrivo e alla partenza",
    "3 nights' accommodation in a 4- or 5-star hotel": "3 notti in un hotel 4 o 5 stelle",
    "2 nights' accommodation in 4- or 5-star hotels": "2 notti in hotel 4 o 5 stelle",
    "4 nights' accommodation in 4- or 5-star hotels (Luxor & Aswan)":
      "4 notti in hotel 4 o 5 stelle (Luxor e Assuan)",
    "4 nights' accommodation in a 4- or 5-star hotel": "4 notti in un hotel 4 o 5 stelle",
    "1 night's accommodation in a seafront 4/5-star hotel":
      "1 notte in un hotel 4 o 5 stelle fronte mare",
    "7 nights' accommodation — family suites or connecting rooms, 4- or 5-star":
      "7 notti — suite familiari o camere comunicanti, 4 o 5 stelle",
    "8 nights — Nile-view suites, 4- or 5-star hotels and a 3-night full-board cruise":
      "8 notti — suite con vista sul Nilo, hotel 4 o 5 stelle e una crociera di 3 notti in pensione completa",
    "4 nights' accommodation in a 4- or 5-star Red Sea resort (half board)":
      "4 notti in un resort 4 o 5 stelle sul Mar Rosso (mezza pensione)",
    "3 nights' accommodation in a 4- or 5-star Red Sea resort (half board)":
      "3 notti in un resort 4 o 5 stelle sul Mar Rosso (mezza pensione)",
    "Domestic flights Cairo–Luxor and Aswan–Cairo":
      "Voli interni Il Cairo–Luxor e Assuan–Il Cairo",
    "Domestic flights Cairo–Aswan and Luxor–Cairo":
      "Voli interni Il Cairo–Assuan e Luxor–Il Cairo",
    "4x4 desert transfer where required": "Trasferimento in 4x4 nei tratti desertici",
    "Lakeside fish lunch": "Pranzo di pesce in riva al lago",
    "Seafront seafood lunch": "Pranzo di pesce sul lungomare",
    "Private local food guide for the evening": "Una guida gastronomica locale privata per la serata",
    "Your guide's choice of places, and help ordering at every stop": "La scelta dei locali da parte della guida e il suo aiuto per ordinare a ogni tappa",
    "Bottled water through the evening": "Acqua in bottiglia per tutta la serata",
    "Private felucca sail in Aswan": "Navigazione privata in feluca ad Assuan",
    "Sunset felucca charter in Aswan": "Feluca privata al tramonto ad Assuan",
    "Golden-hour felucca charter in Aswan": "Feluca privata nell'ora d'oro ad Assuan",
    "Felucca sail and Nubian village visit in Aswan":
      "Giro in feluca e visita a un villaggio nubiano ad Assuan",
    "Private early-access Giza sunrise session":
      "Accesso privato anticipato alla piana di Giza all'alba",
    "Private family-specialist Egyptologist throughout":
      "Un egittologo privato specializzato in famiglie per tutto il viaggio",
    "Private photography-aware Egyptologist guide throughout":
      "Un egittologo privato abituato ai fotografi per tutto il viaggio",
    "Private historian-Egyptologist guide throughout":
      "Una guida egittologa e storica privata per tutto il viaggio",
    "Photography permits where required (tripod/site)":
      "I permessi fotografici dove richiesti (treppiede o sito)",
    "Sufi tanoura performance tickets": "Biglietti per lo spettacolo sufi di tanoura",
    "Private full-day Ras Mohammed boat charter with snorkelling equipment":
      "Barca privata per l'intera giornata a Ras Mohammed, attrezzatura da snorkeling inclusa",
    "Sinai desert evening with Bedouin dinner": "Serata nel deserto del Sinai con cena beduina",
    "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre":
      "5 immersioni guidate (1 di prova e 2 giornate in barca con due immersioni ciascuna) con un centro PADI autorizzato",
    "Full equipment rental, tanks and weights": "Noleggio dell'attrezzatura completa, bombole e zavorra",
    "Marine park fees for Ras Mohammed": "Le tasse del parco marino di Ras Mohammed",
    "Seafood dinner on the first evening": "Cena di pesce la prima sera",
    "Private air-conditioned vehicle for the desert road, both ways":
      "Veicolo privato con aria condizionata per la strada del deserto, andata e ritorno",
    "Breakfast box and bottled water": "Cestino per la colazione e acqua in bottiglia",
    "Hotel or cruise-ship pickup & drop-off in Aswan":
      "Prelievo e rientro in hotel o sulla motonave ad Assuan",

    "Entrance tickets to sites and monuments — paid at the published gate rate, with nothing added":
      "I biglietti d'ingresso a siti e monumenti — pagati alla tariffa ufficiale, senza ricarichi",
    "Entrance tickets to both temples — paid at the published gate rate, with nothing added":
      "I biglietti d'ingresso ai due templi — pagati alla tariffa ufficiale, senza ricarichi",
    "Entry inside the pyramid chambers (optional extra)":
      "L'ingresso nelle camere interne delle piramidi (supplemento facoltativo)",
    "Lunch (half-day tour)": "Il pranzo (escursione di mezza giornata)",
    "Lunch (returned to Aswan by early afternoon)":
      "Il pranzo (rientro ad Assuan nel primo pomeriggio)",
    "Camel or horse rides (optional extra)": "I giri in cammello o a cavallo (supplemento facoltativo)",
    "Private golf cart around the plateau (optional extra)": "Una golf car privata sulla piana (supplemento facoltativo)",
    "Private opening of the Tutankhamun galleries, an hour and a half (optional extra)":
      "L'apertura privata delle sale di Tutankhamon, un'ora e mezza (supplemento facoltativo)",
    "Other optional extras — dinner cruise, drinks":
      "Gli altri supplementi facoltativi — cena-crociera, bevande",
    "Food and drinks at each stop, paid directly to the venue": "Cibo e bevande a ogni tappa, pagati direttamente sul posto",
    "Abu Simbel excursion (optional extra)": "L'escursione ad Abu Simbel (supplemento facoltativo)",
    "Hot-air balloon flight (booked on request, about €120 per person)":
      "Il volo in mongolfiera (su richiesta, circa 120 € a persona)",
    "Hot-air balloon flight (booked on request)": "Il volo in mongolfiera (su richiesta)",
    "Hot-air balloon flight (optional extra)": "Il volo in mongolfiera (supplemento facoltativo)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)":
      "Le tombe con biglietto separato (Tutankhamon, Seti I — organizzate su richiesta)",
    "Sound & Light show and camel rides (optional extras)":
      "Lo spettacolo Suoni e Luci e i giri in cammello (supplementi facoltativi)",
    "Camera equipment and drone permits (drones are effectively prohibited in Egypt)":
      "L'attrezzatura fotografica e i permessi per droni (in Egitto i droni sono di fatto vietati)",
    "Scuba diving (arranged on request with licensed centres)":
      "Le immersioni (organizzate su richiesta con centri autorizzati)",
    "Marine park fees where applicable": "Le tasse dei parchi marini, dove previste",
    "Dive insurance (mandatory — arranged at booking if you have none)":
      "L'assicurazione subacquea (obbligatoria — stipulata alla prenotazione se non ne avete una)",
    "Certification courses (available as an alternative programme)":
      "I corsi di certificazione (disponibili come programma alternativo)",
    "Flight option Aswan–Abu Simbel (available on request, limited schedule)":
      "L'opzione aereo Assuan–Abu Simbel (su richiesta, voli limitati)",
    "International flights to and from Egypt": "I voli internazionali da e per l'Egitto",
    "Egypt entry visa": "Il visto d'ingresso in Egitto",
    "Tipping (gratuities)": "Le mance",
    "Personal expenses": "Le spese personali",
    "9 nights' accommodation — hotels and a Nile cruise": "9 notti — hotel e una crociera sul Nilo",
    "3-night Nile cruise, Aswan to Luxor": "Crociera di 3 notti, da Assuan a Luxor",
    "6 nights' hotel accommodation": "6 notti in hotel",
    "13 nights — hotels, a 3-night Nile cruise and a Red Sea resort": "13 notti — hotel, crociera di 3 notti sul Nilo e un resort sul Mar Rosso",
    "2 nights' hotel accommodation in Luxor": "2 notti in hotel a Luxor",
    "2 nights' hotel accommodation": "2 notti in hotel",
    "3 nights' hotel accommodation": "3 notti in hotel",
    "4 nights' hotel accommodation (Luxor & Aswan)": "4 notti in hotel (Luxor e Assuan)",
    "4 nights' hotel accommodation": "4 notti in hotel",
    "1 night in a seafront hotel": "1 notte in un hotel fronte mare",
    "7 nights' accommodation — family suites or connecting rooms": "7 notti — suite familiari o camere comunicanti",
    "8 nights — Nile-view suites and a 3-night Nile cruise": "8 notti — suite con vista sul Nilo e una crociera di 3 notti",
    "4 nights in a Red Sea resort": "4 notti in un resort sul Mar Rosso",
    "3 nights in a Red Sea resort": "3 notti in un resort sul Mar Rosso",
    "Sinai desert evening under the stars": "Serata sotto le stelle nel deserto del Sinai",
    "Bottled water": "Acqua in bottiglia",
    "Meals": "I pasti",
    "Meals, except on board the Nile cruise": "I pasti, tranne a bordo della crociera sul Nilo",
    "8 nights — Nile-view suites and a 3-night full-board Nile cruise": "8 notti — suite con vista sul Nilo e una crociera di 3 notti in pensione completa",
    "13 nights — hotels, a 3-night full-board Nile cruise and a Red Sea resort": "13 notti — hotel, crociera di 3 notti in pensione completa e un resort sul Mar Rosso",
    "A Zar music evening in Cairo (optional extra)": "Una serata di musica zar al Cairo (supplemento facoltativo)",
    "Cooking with your own hands in a Cairo restaurant kitchen (optional extra)": "Cucinare con le vostre mani nella cucina di un ristorante del Cairo (supplemento facoltativo)",
    "Optional extras you choose to add — activities, drinks":
      "I supplementi facoltativi a scelta — attività, bevande",
  },
};

/** Only the languages a journey has actually been translated into. */
const es: TourPhrasebook = {
  h: {overview: "El viaje", itinerary: "Paso a paso", included: "Incluido", excluded: "No incluido", faq: "Preguntas frecuentes", atAGlance: "De un vistazo", comfort: "El ritmo", enquire: "Consultar"},
  f: {duration: "Duración", startPoint: "Salida", visiting: "Paradas", isPrivate: "Privado", from: "desde", walking: "A pie", sleep: "Noches", early: "Salida temprana", drives: "Trayectos largos"},
  dayLabel: "Día",
  stopLabel: "Parada",
  privateYes: "Sí — solo su grupo",
  privateShared: "Guía, vehículo y visitas — sí; el barco se comparte con otros pasajeros",
  categories: {
    "Signature Journey": "Viaje insignia",
    "Short Break": "Escapada",
    "Day Tour": "Excursión de un día",
    "Nile Cruise": "Crucero por el Nilo",
    "Honeymoon": "Luna de miel",
    "Family Journey": "Viaje en familia",
    "Photography Journey": "Viaje fotográfico",
    "Grand Tour": "Gran viaje",
    "Cultural Journey": "Viaje cultural",
    "Red Sea": "Mar Rojo",
  },
  walking: {Moderate: "Moderado", Light: "Ligero"},
  cta: {
    heading: "Díganos sus fechas",
    text: "Con sus fechas y el número de viajeros es suficiente. Respondemos en un día hábil con un itinerario real y un precio detallado, sin compromiso.",
    button: "Enviar consulta",
    whatsapp: "Hola Kemet — nos interesa este viaje.",
  },
  priceNote: "Por persona, en temporada normal. Los suplementos de fechas festivas se indican por separado en el presupuesto.",
  foodNote: "La comida y las bebidas no están incluidas: se pagan directamente en cada parada.",
  allJourneys: "Ver todos los viajes",
  // Every line the 24 translated journeys use.
  lines: {
    "Private local food guide for the evening": "Guía gastronómico local privado para la noche",
    "Your guide's choice of places, and help ordering at every stop": "La elección de los lugares por parte del guía, y su ayuda para pedir en cada parada",
    "Bottled water through the evening": "Agua embotellada durante toda la noche",
    "Private air-conditioned transfers": "Traslados privados con aire acondicionado",
    "Hotel pickup & drop-off": "Recogida y regreso al hotel",
    "Food and drinks at each stop, paid directly to the venue": "La comida y las bebidas en cada parada, pagadas directamente en el local",
    "International flights to and from Egypt": "Vuelos internacionales hacia y desde Egipto",
    "Egypt entry visa": "Visa de entrada a Egipto",
    "Personal expenses": "Gastos personales",
    "Tipping (gratuities)": "Propinas",
    "Private Egyptologist guide throughout": "Guía egiptólogo privado durante todo el viaje",
    "9 nights' accommodation — hotels and a Nile cruise": "9 noches de alojamiento — hoteles y un crucero por el Nilo",
    "3-night full-board Nile cruise, Aswan to Luxor": "Crucero por el Nilo de 3 noches en pensión completa, de Asuán a Luxor",
    "Sleeper-train berths Cairo–Upper Egypt (both directions)": "Plazas en coche cama El Cairo–Alto Egipto (ida y vuelta)",
    "All entrance fees to sites and monuments": "Todas las entradas a yacimientos y monumentos",
    "Bottled water every day": "Agua embotellada todos los días",
    "Meals, except on board the Nile cruise": "Comidas, salvo a bordo del crucero por el Nilo",
    "Optional extras you choose to add — activities, drinks": "Extras opcionales que decida añadir — actividades, bebidas",
    "6 nights' hotel accommodation": "6 noches de hotel",
    "Sleeper-train berths Cairo–Luxor (both directions)": "Plazas en coche cama El Cairo–Luxor (ida y vuelta)",
    "Meals": "Comidas",
    "3 nights' hotel accommodation": "3 noches de hotel",
    "Domestic flights Cairo–Luxor and Aswan–Cairo": "Vuelos internos El Cairo–Luxor y Asuán–El Cairo",
    "2 nights' hotel accommodation": "2 noches de hotel",
    "4x4 desert transfer where required": "Traslado en 4x4 por el desierto donde sea necesario",
    "Entrance tickets to sites and monuments — paid at the published gate rate, with nothing added": "Entradas a yacimientos y monumentos — se pagan a la tarifa oficial de taquilla, sin ningún recargo",
    "Entry inside the pyramid chambers (optional extra)": "Entrada a las cámaras interiores de las pirámides (extra opcional)",
    "Private golf cart around the plateau (optional extra)": "Carrito de golf privado por la meseta (extra opcional)",
    "Private opening of the Tutankhamun galleries, an hour and a half (optional extra)": "Apertura privada de las salas de Tutankamón, hora y media (extra opcional)",
    "Camel or horse rides (optional extra)": "Paseos en camello o a caballo (extra opcional)",
    "Other optional extras — dinner cruise, drinks": "Otros extras opcionales — crucero con cena, bebidas",
    "4 nights' hotel accommodation (Luxor & Aswan)": "4 noches de hotel (Luxor y Asuán)",
    "Private felucca sail in Aswan": "Paseo privado en faluca en Asuán",
    "Abu Simbel excursion (optional extra)": "Excursión a Abu Simbel (extra opcional)",
    "8 nights — Nile-view suites and a 3-night full-board Nile cruise": "8 noches — suites con vistas al Nilo y un crucero por el Nilo de 3 noches en pensión completa",
    "Domestic flights Cairo–Aswan and Luxor–Cairo": "Vuelos internos El Cairo–Asuán y Luxor–El Cairo",
    "Private early-access Giza sunrise session": "Acceso privado anticipado a Guiza al amanecer",
    "Sunset felucca charter in Aswan": "Faluca privada al atardecer en Asuán",
    "Hot-air balloon flight (booked on request, about €120 per person)": "Vuelo en globo aerostático (se reserva previa solicitud, unos 120 € por persona)",
    "Private family-specialist Egyptologist throughout": "Egiptólogo privado con experiencia en familias durante todo el viaje",
    "7 nights' accommodation — family suites or connecting rooms": "7 noches de alojamiento — suites familiares o habitaciones comunicadas",
    "Felucca sail and Nubian village visit in Aswan": "Paseo en faluca y visita a una aldea nubia en Asuán",
    "Sound & Light show and camel rides (optional extras)": "Espectáculo de luz y sonido y paseos en camello (extras opcionales)",
    "Private photography-aware Egyptologist guide throughout": "Guía egiptólogo privado con experiencia en viajes fotográficos, durante todo el viaje",
    "Golden-hour felucca charter in Aswan": "Faluca privada a la hora dorada en Asuán",
    "Photography permits where required (tripod/site)": "Permisos de fotografía donde se exijan (trípode/yacimiento)",
    "Hot-air balloon flight (booked on request)": "Vuelo en globo aerostático (se reserva previa solicitud)",
    "Camera equipment and drone permits (drones are effectively prohibited in Egypt)": "Equipo fotográfico y permisos de dron (en la práctica, los drones están prohibidos en Egipto)",
    "13 nights — hotels, a 3-night full-board Nile cruise and a Red Sea resort": "13 noches — hoteles, un crucero por el Nilo de 3 noches en pensión completa y un resort en el mar Rojo",
    "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)": "Todos los vuelos internos (El Cairo–Asuán, Luxor–Sharm el-Sheikh, Sharm–El Cairo)",
    "Abu Simbel excursion by private vehicle": "Excursión a Abu Simbel en vehículo privado",
    "Ras Mohammed boat day with snorkelling equipment": "Día en barco en Ras Mohammed, con equipo de esnórquel",
    "Private historian-Egyptologist guide throughout": "Guía privado, egiptólogo e historiador, durante todo el viaje",
    "4 nights' hotel accommodation": "4 noches de hotel",
    "Sufi tanoura performance tickets": "Entradas al espectáculo sufí de tanoura",
    "A Zar music evening in Cairo (optional extra)": "Una velada de música zar en El Cairo (extra opcional)",
    "Cooking with your own hands in a Cairo restaurant kitchen (optional extra)": "Cocinar con sus propias manos en la cocina de un restaurante de El Cairo (extra opcional)",
    "4 nights in a Red Sea resort": "4 noches en un resort del mar Rojo",
    "Private full-day Ras Mohammed boat charter with snorkelling equipment": "Barco privado durante todo el día en Ras Mohammed, con equipo de esnórquel",
    "Sinai desert evening under the stars": "Velada bajo las estrellas en el desierto del Sinaí",
    "Scuba diving (arranged on request with licensed centres)": "Buceo con botella (se organiza previa solicitud con centros autorizados)",
    "Marine park fees where applicable": "Tasas del parque marino, cuando corresponda",
    "3 nights in a Red Sea resort": "3 noches en un resort del mar Rojo",
    "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre": "5 inmersiones guiadas (1 inmersión de control + 2 días de barco con dos inmersiones) con un centro PADI autorizado",
    "Full equipment rental, tanks and weights": "Alquiler del equipo completo, botellas y lastre",
    "Marine park fees for Ras Mohammed": "Tasas del parque marino de Ras Mohammed",
    "Dive insurance (mandatory — arranged at booking if you have none)": "Seguro de buceo (obligatorio — se contrata al reservar si no lo tiene)",
    "Certification courses (available as an alternative programme)": "Cursos de certificación (disponibles como programa alternativo)",
    "2 nights' hotel accommodation in Luxor": "2 noches de hotel en Luxor",
    "Evening entry to Luxor Temple and the Avenue of Sphinxes": "Entrada nocturna al templo de Luxor y a la Avenida de las Esfinges",
    "Hot-air balloon flight (optional extra)": "Vuelo en globo aerostático (extra opcional)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)": "Tumbas especiales con entrada aparte (Tutankamón, Seti I — se organizan previa solicitud)",
    "VIP airport meet & assist with fast-track, both directions": "Recibimiento y asistencia VIP en el aeropuerto con vía rápida, a la llegada y a la salida",
    "1 night in a seafront hotel": "1 noche en un hotel frente al mar",
    "Private air-conditioned vehicle for the desert road, both ways": "Vehículo privado con aire acondicionado para la carretera del desierto, ida y vuelta",
    "Bottled water": "Agua embotellada",
    "Hotel or cruise-ship pickup & drop-off in Aswan": "Recogida y regreso al hotel o al barco de crucero en Asuán",
    "Entrance tickets to both temples — paid at the published gate rate, with nothing added": "Entradas a los dos templos — se pagan a la tarifa oficial de taquilla, sin ningún recargo",
    "Flight option Aswan–Abu Simbel (available on request, limited schedule)": "Opción en avión Asuán–Abu Simbel (disponible previa solicitud, horarios limitados)",
  },
};

const pt: TourPhrasebook = {
  h: {overview: "A viagem", itinerary: "Passo a passo", included: "Incluído", excluded: "Não incluído", faq: "Perguntas frequentes", atAGlance: "Em resumo", comfort: "O ritmo", enquire: "Solicitar"},
  f: {duration: "Duração", startPoint: "Saída", visiting: "Paradas", isPrivate: "Privativo", from: "a partir de", walking: "A pé", sleep: "Noites", early: "Saída cedo", drives: "Trajetos longos"},
  dayLabel: "Dia",
  stopLabel: "Parada",
  privateYes: "Sim — só o seu grupo",
  privateShared: "Guia, veículo e visitas — sim; o navio é compartilhado com outros hóspedes",
  categories: {
    "Signature Journey": "Viagem assinatura",
    "Short Break": "Escapada",
    "Day Tour": "Passeio de um dia",
    "Nile Cruise": "Cruzeiro pelo Nilo",
    "Honeymoon": "Lua de mel",
    "Family Journey": "Viagem em família",
    "Photography Journey": "Viagem fotográfica",
    "Grand Tour": "Grande viagem",
    "Cultural Journey": "Viagem cultural",
    "Red Sea": "Mar Vermelho",
  },
  walking: {Moderate: "Moderado", Light: "Leve"},
  cta: {
    heading: "Conte-nos suas datas",
    text: "Suas datas e o número de viajantes bastam. Respondemos em um dia útil com um roteiro real e um preço detalhado — sem compromisso.",
    button: "Enviar pedido",
    whatsapp: "Olá Kemet — temos interesse nesta viagem.",
  },
  priceNote: "Por pessoa, em temporada normal. Acréscimos de feriados aparecem separados no orçamento.",
  foodNote: "Comida e bebidas não estão incluídas: são pagas diretamente em cada parada.",
  allJourneys: "Ver todas as viagens",
  // Every line the 24 translated journeys use.
  lines: {
    "Private local food guide for the evening": "Guia gastronômico local privativo para a noite",
    "Your guide's choice of places, and help ordering at every stop": "A escolha dos lugares feita pelo guia, e ajuda para pedir em cada parada",
    "Bottled water through the evening": "Água mineral durante toda a noite",
    "Private air-conditioned transfers": "Traslados privativos com ar-condicionado",
    "Hotel pickup & drop-off": "Busca e retorno no hotel",
    "Food and drinks at each stop, paid directly to the venue": "Comida e bebidas em cada parada, pagas diretamente no local",
    "International flights to and from Egypt": "Voos internacionais de ida e volta ao Egito",
    "Egypt entry visa": "Visto de entrada no Egito",
    "Personal expenses": "Despesas pessoais",
    "Tipping (gratuities)": "Gorjetas",
    "Private Egyptologist guide throughout": "Guia egiptólogo privativo durante toda a viagem",
    "9 nights' accommodation — hotels and a Nile cruise": "9 noites de hospedagem — hotéis e um cruzeiro pelo Nilo",
    "3-night full-board Nile cruise, Aswan to Luxor": "Cruzeiro de 3 noites pelo Nilo com pensão completa, de Assuã a Luxor",
    "Sleeper-train berths Cairo–Upper Egypt (both directions)": "Cabines no trem-leito Cairo–Alto Egito (ida e volta)",
    "All entrance fees to sites and monuments": "Todas as entradas dos sítios e monumentos",
    "Bottled water every day": "Água mineral todos os dias",
    "Meals, except on board the Nile cruise": "Refeições, exceto a bordo do cruzeiro pelo Nilo",
    "Optional extras you choose to add — activities, drinks": "Extras opcionais que vocês escolherem acrescentar — atividades, bebidas",
    "6 nights' hotel accommodation": "6 noites de hotel",
    "Sleeper-train berths Cairo–Luxor (both directions)": "Cabines no trem-leito Cairo–Luxor (ida e volta)",
    "Meals": "Refeições",
    "3 nights' hotel accommodation": "3 noites de hotel",
    "Domestic flights Cairo–Luxor and Aswan–Cairo": "Voos internos Cairo–Luxor e Assuã–Cairo",
    "2 nights' hotel accommodation": "2 noites de hotel",
    "4x4 desert transfer where required": "Traslado de 4x4 no deserto, quando necessário",
    "Entrance tickets to sites and monuments — paid at the published gate rate, with nothing added": "Ingressos dos sítios e monumentos — pagos pela tarifa oficial da bilheteria, sem nenhum acréscimo",
    "Entry inside the pyramid chambers (optional extra)": "Entrada nas câmaras internas das pirâmides (opcional)",
    "Private golf cart around the plateau (optional extra)": "Carrinho de golfe privativo pelo planalto (opcional)",
    "Private opening of the Tutankhamun galleries, an hour and a half (optional extra)": "Abertura privativa das galerias de Tutancâmon, por uma hora e meia (opcional)",
    "Camel or horse rides (optional extra)": "Passeios de camelo ou a cavalo (opcional)",
    "Other optional extras — dinner cruise, drinks": "Outros extras opcionais — cruzeiro com jantar, bebidas",
    "4 nights' hotel accommodation (Luxor & Aswan)": "4 noites de hotel (Luxor e Assuã)",
    "Private felucca sail in Aswan": "Passeio privativo de falua em Assuã",
    "Abu Simbel excursion (optional extra)": "Excursão a Abu Simbel (opcional)",
    "8 nights — Nile-view suites and a 3-night full-board Nile cruise": "8 noites — suítes com vista para o Nilo e um cruzeiro de 3 noites pelo Nilo com pensão completa",
    "Domestic flights Cairo–Aswan and Luxor–Cairo": "Voos internos Cairo–Assuã e Luxor–Cairo",
    "Private early-access Giza sunrise session": "Acesso privativo antecipado a Gizé ao nascer do sol",
    "Sunset felucca charter in Aswan": "Falua exclusiva ao pôr do sol em Assuã",
    "Hot-air balloon flight (booked on request, about €120 per person)": "Voo de balão (reservado sob pedido, cerca de 120 € por pessoa)",
    "Private family-specialist Egyptologist throughout": "Egiptólogo privativo, especialista em famílias, durante toda a viagem",
    "7 nights' accommodation — family suites or connecting rooms": "7 noites de hospedagem — suítes familiares ou quartos conjugados",
    "Felucca sail and Nubian village visit in Aswan": "Passeio de falua e visita a um vilarejo núbio em Assuã",
    "Sound & Light show and camel rides (optional extras)": "Espetáculo de Som e Luz e passeios de camelo (opcionais)",
    "Private photography-aware Egyptologist guide throughout": "Guia egiptólogo privativo com experiência em fotografia, durante toda a viagem",
    "Golden-hour felucca charter in Aswan": "Falua exclusiva na hora dourada em Assuã",
    "Photography permits where required (tripod/site)": "Autorizações para fotografar onde forem exigidas (tripé ou sítio)",
    "Hot-air balloon flight (booked on request)": "Voo de balão (reservado sob pedido)",
    "Camera equipment and drone permits (drones are effectively prohibited in Egypt)": "Equipamento fotográfico e autorizações para drone (na prática, drones são proibidos no Egito)",
    "13 nights — hotels, a 3-night full-board Nile cruise and a Red Sea resort": "13 noites — hotéis, um cruzeiro de 3 noites pelo Nilo com pensão completa e um resort no Mar Vermelho",
    "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)": "Todos os voos internos (Cairo–Assuã, Luxor–Sharm el-Sheikh, Sharm–Cairo)",
    "Abu Simbel excursion by private vehicle": "Excursão a Abu Simbel em veículo privativo",
    "Ras Mohammed boat day with snorkelling equipment": "Dia de barco em Ras Mohammed, com equipamento de snorkel",
    "Private historian-Egyptologist guide throughout": "Guia egiptólogo privativo, especialista em história, durante toda a viagem",
    "4 nights' hotel accommodation": "4 noites de hotel",
    "Sufi tanoura performance tickets": "Ingressos para o espetáculo sufi de tanoura",
    "A Zar music evening in Cairo (optional extra)": "Uma noite de música zar no Cairo (opcional)",
    "Cooking with your own hands in a Cairo restaurant kitchen (optional extra)": "Cozinhar com as próprias mãos na cozinha de um restaurante do Cairo (opcional)",
    "4 nights in a Red Sea resort": "4 noites em um resort no Mar Vermelho",
    "Private full-day Ras Mohammed boat charter with snorkelling equipment": "Barco privativo por um dia inteiro em Ras Mohammed, com equipamento de snorkel",
    "Sinai desert evening under the stars": "Noite sob as estrelas no deserto do Sinai",
    "Scuba diving (arranged on request with licensed centres)": "Mergulho com cilindro (organizado sob pedido com centros licenciados)",
    "Marine park fees where applicable": "Taxas do parque marinho, quando aplicáveis",
    "3 nights in a Red Sea resort": "3 noites em um resort no Mar Vermelho",
    "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre": "5 mergulhos guiados (1 mergulho de checagem + 2 dias de barco com dois mergulhos cada) com um centro PADI licenciado",
    "Full equipment rental, tanks and weights": "Aluguel do equipamento completo, cilindros e lastro",
    "Marine park fees for Ras Mohammed": "Taxas do parque marinho de Ras Mohammed",
    "Dive insurance (mandatory — arranged at booking if you have none)": "Seguro de mergulho (obrigatório — contratado na reserva, se vocês não tiverem um)",
    "Certification courses (available as an alternative programme)": "Cursos de certificação (disponíveis como programa alternativo)",
    "2 nights' hotel accommodation in Luxor": "2 noites de hotel em Luxor",
    "Evening entry to Luxor Temple and the Avenue of Sphinxes": "Entrada noturna no Templo de Luxor e na Avenida das Esfinges",
    "Hot-air balloon flight (optional extra)": "Voo de balão (opcional)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)": "Tumbas especiais com ingresso à parte (Tutancâmon, Seti I — organizadas sob pedido)",
    "VIP airport meet & assist with fast-track, both directions": "Recepção e assistência VIP no aeroporto, com acesso prioritário, na chegada e na partida",
    "1 night in a seafront hotel": "1 noite em um hotel à beira-mar",
    "Private air-conditioned vehicle for the desert road, both ways": "Veículo privativo com ar-condicionado pela estrada do deserto, ida e volta",
    "Bottled water": "Água mineral",
    "Hotel or cruise-ship pickup & drop-off in Aswan": "Busca e retorno no hotel ou no navio de cruzeiro em Assuã",
    "Entrance tickets to both temples — paid at the published gate rate, with nothing added": "Ingressos dos dois templos — pagos pela tarifa oficial da bilheteria, sem nenhum acréscimo",
    "Flight option Aswan–Abu Simbel (available on request, limited schedule)": "Opção de voo Assuã–Abu Simbel (sob pedido, horários limitados)",
  },
};

const ru: TourPhrasebook = {
  h: {overview: "О поездке", itinerary: "Программа", included: "Включено", excluded: "Не включено", faq: "Частые вопросы", atAGlance: "Коротко", comfort: "Темп", enquire: "Запросить"},
  f: {duration: "Продолжительность", startPoint: "Начало", visiting: "Остановки", isPrivate: "Индивидуально", from: "от", walking: "Пешком", sleep: "Ночёвки", early: "Ранний выезд", drives: "Долгие переезды"},
  dayLabel: "День",
  stopLabel: "Остановка",
  privateYes: "Да — только ваша группа",
  privateShared: "Сопровождение, транспорт и экскурсии — да; теплоход общий с другими гостями",
  categories: {
    "Signature Journey": "Фирменное путешествие",
    "Short Break": "Короткая поездка",
    "Day Tour": "Однодневная экскурсия",
    "Nile Cruise": "Круиз по Нилу",
    "Honeymoon": "Медовый месяц",
    "Family Journey": "Семейное путешествие",
    "Photography Journey": "Фототур",
    "Grand Tour": "Большое путешествие",
    "Cultural Journey": "Культурное путешествие",
    "Red Sea": "Красное море",
  },
  walking: {Moderate: "Умеренно", Light: "Немного"},
  cta: {
    heading: "Назовите ваши даты",
    text: "Достаточно дат и числа путешественников. Мы ответим в течение одного рабочего дня с настоящей программой и понятной ценой — без обязательств.",
    button: "Отправить запрос",
    whatsapp: "Здравствуйте, Kemet! Нас интересует эта поездка.",
  },
  priceNote: "За человека, в обычный сезон. Праздничные доплаты мы указываем в предложении отдельно.",
  foodNote: "Еда и напитки не включены: их оплачивают на месте, на каждой остановке.",
  allJourneys: "Все поездки",
  // Every line the 24 translated journeys use.
  lines: {
    "Private local food guide for the evening": "Личный гид по местной кухне на весь вечер",
    "Your guide's choice of places, and help ordering at every stop": "Гид выбирает места и помогает сделать заказ на каждой остановке",
    "Bottled water through the evening": "Бутилированная вода весь вечер",
    "Private air-conditioned transfers": "Индивидуальные трансферы на автомобиле с кондиционером",
    "Hotel pickup & drop-off": "Встреча в отеле и доставка обратно",
    "Food and drinks at each stop, paid directly to the venue": "Еда и напитки на каждой остановке — оплата на месте",
    "International flights to and from Egypt": "Международные перелёты в Египет и обратно",
    "Egypt entry visa": "Въездная виза в Египет",
    "Personal expenses": "Личные расходы",
    "Tipping (gratuities)": "Чаевые",
    "Private Egyptologist guide throughout": "Личный гид-египтолог на всё путешествие",
    "9 nights' accommodation — hotels and a Nile cruise": "Проживание, 9 ночей — отели и круиз по Нилу",
    "3-night full-board Nile cruise, Aswan to Luxor": "Круиз по Нилу на 3 ночи с полным пансионом, из Асуана в Луксор",
    "Sleeper-train berths Cairo–Upper Egypt (both directions)": "Места в спальном поезде Каир–Верхний Египет (в обе стороны)",
    "All entrance fees to sites and monuments": "Все входные билеты на объекты и к памятникам",
    "Bottled water every day": "Бутилированная вода каждый день",
    "Meals, except on board the Nile cruise": "Питание — кроме как на борту во время круиза по Нилу",
    "Optional extras you choose to add — activities, drinks": "Дополнительные услуги на ваш выбор — развлечения, напитки",
    "6 nights' hotel accommodation": "Проживание в отелях, 6 ночей",
    "Sleeper-train berths Cairo–Luxor (both directions)": "Места в спальном поезде Каир–Луксор (в обе стороны)",
    "Meals": "Питание",
    "3 nights' hotel accommodation": "Проживание в отеле, 3 ночи",
    "Domestic flights Cairo–Luxor and Aswan–Cairo": "Внутренние перелёты Каир–Луксор и Асуан–Каир",
    "2 nights' hotel accommodation": "Гостиничное проживание, 2 ночи",
    "4x4 desert transfer where required": "Трансфер по пустыне на внедорожнике, где это необходимо",
    "Entrance tickets to sites and monuments — paid at the published gate rate, with nothing added": "Входные билеты на объекты и к памятникам — по официальной цене кассы, без наценки",
    "Entry inside the pyramid chambers (optional extra)": "Вход во внутренние камеры пирамид (по желанию, за доплату)",
    "Private golf cart around the plateau (optional extra)": "Гольф-кар по плато только для вас (по желанию, за доплату)",
    "Private opening of the Tutankhamun galleries, an hour and a half (optional extra)": "Залы Тутанхамона, открытые только для вас на полтора часа (по желанию, за доплату)",
    "Camel or horse rides (optional extra)": "Прогулки на верблюде или лошади (по желанию, за доплату)",
    "Other optional extras — dinner cruise, drinks": "Прочие услуги за доплату — круиз с ужином, напитки",
    "4 nights' hotel accommodation (Luxor & Aswan)": "Проживание в отелях, 4 ночи (Луксор и Асуан)",
    "Private felucca sail in Aswan": "Прогулка на фелуке в Асуане только для вас",
    "Abu Simbel excursion (optional extra)": "Поездка в Абу-Симбел (по желанию, за доплату)",
    "8 nights — Nile-view suites and a 3-night full-board Nile cruise": "8 ночей — люксы с видом на Нил и круиз по Нилу на 3 ночи с полным пансионом",
    "Domestic flights Cairo–Aswan and Luxor–Cairo": "Внутренние перелёты Каир–Асуан и Луксор–Каир",
    "Private early-access Giza sunrise session": "Ранний доступ в Гизу на рассвете — только для вас",
    "Sunset felucca charter in Aswan": "Фелука на закате в Асуане — только для вас",
    "Hot-air balloon flight (booked on request, about €120 per person)": "Полёт на воздушном шаре (бронируется по запросу, около 120 € на человека)",
    "Private family-specialist Egyptologist throughout": "Личный египтолог — специалист по семейным поездкам — на всё путешествие",
    "7 nights' accommodation — family suites or connecting rooms": "Проживание, 7 ночей — семейные люксы или смежные номера",
    "Felucca sail and Nubian village visit in Aswan": "Прогулка на фелуке и посещение нубийской деревни в Асуане",
    "Sound & Light show and camel rides (optional extras)": "Шоу «Звук и свет» и прогулки на верблюдах (по желанию, за доплату)",
    "Private photography-aware Egyptologist guide throughout": "Личный гид-египтолог с опытом работы с фотографами — на всё путешествие",
    "Golden-hour felucca charter in Aswan": "Фелука в золотой час в Асуане — только для вас",
    "Photography permits where required (tripod/site)": "Разрешения на съёмку там, где они нужны (штатив/объект)",
    "Hot-air balloon flight (booked on request)": "Полёт на воздушном шаре (бронируется по запросу)",
    "Camera equipment and drone permits (drones are effectively prohibited in Egypt)": "Фототехника и разрешения на дрон (дроны в Египте фактически запрещены)",
    "13 nights — hotels, a 3-night full-board Nile cruise and a Red Sea resort": "13 ночей — отели, круиз по Нилу на 3 ночи с полным пансионом и курорт на Красном море",
    "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)": "Все внутренние перелёты (Каир–Асуан, Луксор–Шарм-эль-Шейх, Шарм–Каир)",
    "Abu Simbel excursion by private vehicle": "Поездка в Абу-Симбел на индивидуальном автомобиле",
    "Ras Mohammed boat day with snorkelling equipment": "День на лодке в Рас-Мохаммеде со снаряжением для снорклинга",
    "Private historian-Egyptologist guide throughout": "Личный гид — историк и египтолог — на всё путешествие",
    "4 nights' hotel accommodation": "Проживание в отеле, 4 ночи",
    "Sufi tanoura performance tickets": "Билеты на суфийское представление танура",
    "A Zar music evening in Cairo (optional extra)": "Вечер музыки зар в Каире (по желанию, за доплату)",
    "Cooking with your own hands in a Cairo restaurant kitchen (optional extra)": "Готовка своими руками на кухне каирского ресторана (по желанию, за доплату)",
    "4 nights in a Red Sea resort": "4 ночи на курорте Красного моря",
    "Private full-day Ras Mohammed boat charter with snorkelling equipment": "Лодка только для вас на целый день в Рас-Мохаммеде, со снаряжением для снорклинга",
    "Sinai desert evening under the stars": "Вечер под звёздами в пустыне Синая",
    "Scuba diving (arranged on request with licensed centres)": "Дайвинг с аквалангом (по запросу, в лицензированных центрах)",
    "Marine park fees where applicable": "Сборы морского парка, где они взимаются",
    "3 nights in a Red Sea resort": "3 ночи на курорте Красного моря",
    "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre": "5 погружений с гидом (1 проверочное + 2 дня на лодке по два погружения) с лицензированным центром PADI",
    "Full equipment rental, tanks and weights": "Аренда полного комплекта снаряжения, баллоны и грузы",
    "Marine park fees for Ras Mohammed": "Сборы морского парка Рас-Мохаммед",
    "Dive insurance (mandatory — arranged at booking if you have none)": "Страховка для дайвинга (обязательна — оформляется при бронировании, если у вас её нет)",
    "Certification courses (available as an alternative programme)": "Курсы с получением сертификата (доступны как отдельная программа)",
    "2 nights' hotel accommodation in Luxor": "Проживание в отеле в Луксоре, 2 ночи",
    "Evening entry to Luxor Temple and the Avenue of Sphinxes": "Вечерний вход в Луксорский храм и на Аллею сфинксов",
    "Hot-air balloon flight (optional extra)": "Полёт на воздушном шаре (по желанию, за доплату)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)": "Особые гробницы с отдельными билетами (Тутанхамона, Сети I — по запросу)",
    "VIP airport meet & assist with fast-track, both directions": "VIP-встреча и сопровождение в аэропорту с ускоренным прохождением, в обе стороны",
    "1 night in a seafront hotel": "1 ночь в отеле на берегу моря",
    "Private air-conditioned vehicle for the desert road, both ways": "Индивидуальный автомобиль с кондиционером по пустынной дороге, туда и обратно",
    "Bottled water": "Бутилированная вода",
    "Hotel or cruise-ship pickup & drop-off in Aswan": "Встреча в отеле или на теплоходе в Асуане и доставка обратно",
    "Entrance tickets to both temples — paid at the published gate rate, with nothing added": "Входные билеты в оба храма — по официальной цене кассы, без наценки",
    "Flight option Aswan–Abu Simbel (available on request, limited schedule)": "Вариант с перелётом Асуан–Абу-Симбел (по запросу, рейсов немного)",
  },
};

const id: TourPhrasebook = {
  h: {overview: "Tentang perjalanan", itinerary: "Rute perjalanan", included: "Termasuk", excluded: "Tidak termasuk", faq: "Pertanyaan umum", atAGlance: "Sekilas", comfort: "Ritme perjalanan", enquire: "Tanya sekarang"},
  f: {duration: "Durasi", startPoint: "Titik mulai", visiting: "Persinggahan", isPrivate: "Privat", from: "mulai", walking: "Jalan kaki", sleep: "Menginap", early: "Berangkat pagi", drives: "Perjalanan panjang"},
  dayLabel: "Hari",
  stopLabel: "Persinggahan",
  privateYes: "Ya — hanya rombongan Anda",
  privateShared: "Pemandu, kendaraan, dan kunjungan — ya; kapal pesiar dipakai bersama tamu lain",
  categories: {
    "Signature Journey": "Perjalanan unggulan",
    "Short Break": "Liburan singkat",
    "Day Tour": "Tur sehari",
    "Nile Cruise": "Pesiar Sungai Nil",
    "Honeymoon": "Bulan madu",
    "Family Journey": "Liburan keluarga",
    "Photography Journey": "Perjalanan fotografi",
    "Grand Tour": "Tur akbar",
    "Cultural Journey": "Perjalanan budaya",
    "Red Sea": "Laut Merah",
  },
  walking: {Moderate: "Sedang", Light: "Ringan"},
  cta: {
    heading: "Beri tahu kami tanggal Anda",
    text: "Cukup tanggal dan jumlah peserta. Kami membalas dalam satu hari kerja dengan rencana perjalanan nyata dan harga yang jelas — tanpa kewajiban.",
    button: "Kirim permintaan",
    whatsapp: "Halo Kemet — kami tertarik dengan perjalanan ini.",
  },
  priceNote: "Per orang, musim normal. Biaya tambahan hari libur kami cantumkan terpisah dalam penawaran.",
  foodNote: "Makanan dan minuman tidak termasuk: dibayar langsung di setiap persinggahan.",
  allJourneys: "Lihat semua perjalanan",
  // Every line the 24 translated journeys use.
  lines: {
    "Private local food guide for the evening": "Pemandu kuliner lokal pribadi sepanjang malam",
    "Your guide's choice of places, and help ordering at every stop": "Pemandu memilihkan tempat dan membantu memesan di setiap persinggahan",
    "Bottled water through the evening": "Air mineral sepanjang malam",
    "Private air-conditioned transfers": "Transfer pribadi ber-AC",
    "Hotel pickup & drop-off": "Penjemputan dan pengantaran di hotel",
    "Food and drinks at each stop, paid directly to the venue": "Makanan dan minuman di setiap persinggahan, dibayar langsung di tempat",
    "International flights to and from Egypt": "Tiket pesawat internasional ke dan dari Mesir",
    "Egypt entry visa": "Visa masuk Mesir",
    "Personal expenses": "Pengeluaran pribadi",
    "Tipping (gratuities)": "Tip",
    "Private Egyptologist guide throughout": "Pemandu Egyptologist pribadi sepanjang perjalanan",
    "9 nights' accommodation — hotels and a Nile cruise": "Akomodasi 9 malam — hotel dan pesiar Sungai Nil",
    "3-night full-board Nile cruise, Aswan to Luxor": "Pesiar Sungai Nil 3 malam dengan makan lengkap (full board), dari Aswan ke Luxor",
    "Sleeper-train berths Cairo–Upper Egypt (both directions)": "Kabin kereta tidur Kairo–Mesir Hulu (pulang-pergi)",
    "All entrance fees to sites and monuments": "Semua tiket masuk ke situs dan monumen",
    "Bottled water every day": "Air mineral setiap hari",
    "Meals, except on board the Nile cruise": "Makanan, kecuali selama di kapal pesiar Nil",
    "Optional extras you choose to add — activities, drinks": "Tambahan opsional yang Anda pilih — aktivitas, minuman",
    "6 nights' hotel accommodation": "Menginap 6 malam di hotel",
    "Sleeper-train berths Cairo–Luxor (both directions)": "Kabin kereta tidur Kairo–Luxor (pulang-pergi)",
    "Meals": "Makanan",
    "3 nights' hotel accommodation": "Menginap 3 malam di hotel",
    "Domestic flights Cairo–Luxor and Aswan–Cairo": "Penerbangan domestik Kairo–Luxor dan Aswan–Kairo",
    "2 nights' hotel accommodation": "Menginap 2 malam di hotel",
    "4x4 desert transfer where required": "Transfer gurun dengan kendaraan 4x4 bila diperlukan",
    "Entrance tickets to sites and monuments — paid at the published gate rate, with nothing added": "Tiket masuk ke situs dan monumen — dibayar sesuai tarif resmi di loket, tanpa tambahan apa pun",
    "Entry inside the pyramid chambers (optional extra)": "Masuk ke ruang-ruang di dalam piramida (tambahan opsional)",
    "Private golf cart around the plateau (optional extra)": "Mobil golf pribadi untuk berkeliling plateau (tambahan opsional)",
    "Private opening of the Tutankhamun galleries, an hour and a half (optional extra)": "Pembukaan privat galeri Tutankhamun selama satu setengah jam (tambahan opsional)",
    "Camel or horse rides (optional extra)": "Naik unta atau kuda (tambahan opsional)",
    "Other optional extras — dinner cruise, drinks": "Tambahan opsional lainnya — makan malam di kapal pesiar, minuman",
    "4 nights' hotel accommodation (Luxor & Aswan)": "Menginap 4 malam di hotel (Luxor dan Aswan)",
    "Private felucca sail in Aswan": "Berlayar dengan felucca pribadi di Aswan",
    "Abu Simbel excursion (optional extra)": "Perjalanan ke Abu Simbel (tambahan opsional)",
    "8 nights — Nile-view suites and a 3-night full-board Nile cruise": "8 malam — suite dengan pemandangan Sungai Nil dan pesiar Nil 3 malam dengan makan lengkap (full board)",
    "Domestic flights Cairo–Aswan and Luxor–Cairo": "Penerbangan domestik Kairo–Aswan dan Luxor–Kairo",
    "Private early-access Giza sunrise session": "Sesi matahari terbit di Giza dengan akses awal privat",
    "Sunset felucca charter in Aswan": "Sewa felucca pribadi saat matahari terbenam di Aswan",
    "Hot-air balloon flight (booked on request, about €120 per person)": "Terbang dengan balon udara (dipesan atas permintaan, sekitar 120 € per orang)",
    "Private family-specialist Egyptologist throughout": "Egyptologist pribadi yang khusus menangani keluarga, sepanjang perjalanan",
    "7 nights' accommodation — family suites or connecting rooms": "Akomodasi 7 malam — suite keluarga atau kamar yang saling terhubung",
    "Felucca sail and Nubian village visit in Aswan": "Berlayar dengan felucca dan mengunjungi desa Nubia di Aswan",
    "Sound & Light show and camel rides (optional extras)": "Pertunjukan Suara dan Cahaya serta naik unta (tambahan opsional)",
    "Private photography-aware Egyptologist guide throughout": "Pemandu Egyptologist pribadi yang memahami kebutuhan fotografi, sepanjang perjalanan",
    "Golden-hour felucca charter in Aswan": "Sewa felucca pribadi pada jam keemasan di Aswan",
    "Photography permits where required (tripod/site)": "Izin fotografi bila diwajibkan (tripod/situs)",
    "Hot-air balloon flight (booked on request)": "Terbang dengan balon udara (dipesan atas permintaan)",
    "Camera equipment and drone permits (drones are effectively prohibited in Egypt)": "Perlengkapan kamera dan izin drone (drone praktis dilarang di Mesir)",
    "13 nights — hotels, a 3-night full-board Nile cruise and a Red Sea resort": "13 malam — hotel, pesiar Nil 3 malam dengan makan lengkap (full board), dan resor di Laut Merah",
    "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)": "Semua penerbangan domestik (Kairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Kairo)",
    "Abu Simbel excursion by private vehicle": "Perjalanan ke Abu Simbel dengan kendaraan pribadi",
    "Ras Mohammed boat day with snorkelling equipment": "Sehari berperahu di Ras Mohammed, dengan perlengkapan snorkeling",
    "Private historian-Egyptologist guide throughout": "Pemandu pribadi, sejarawan sekaligus Egyptologist, sepanjang perjalanan",
    "4 nights' hotel accommodation": "Menginap 4 malam di hotel",
    "Sufi tanoura performance tickets": "Tiket pertunjukan tanoura sufi",
    "A Zar music evening in Cairo (optional extra)": "Malam musik Zar di Kairo (tambahan opsional)",
    "Cooking with your own hands in a Cairo restaurant kitchen (optional extra)": "Memasak dengan tangan Anda sendiri di dapur sebuah restoran di Kairo (tambahan opsional)",
    "4 nights in a Red Sea resort": "4 malam di resor Laut Merah",
    "Private full-day Ras Mohammed boat charter with snorkelling equipment": "Sewa perahu pribadi sehari penuh ke Ras Mohammed, dengan perlengkapan snorkeling",
    "Sinai desert evening under the stars": "Malam di gurun Sinai di bawah bintang",
    "Scuba diving (arranged on request with licensed centres)": "Selam scuba (diatur atas permintaan bersama pusat selam berlisensi)",
    "Marine park fees where applicable": "Biaya taman laut bila berlaku",
    "3 nights in a Red Sea resort": "3 malam di resor Laut Merah",
    "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre": "5 penyelaman berpemandu (1 penyelaman uji + 2 hari berperahu, masing-masing dua penyelaman) bersama pusat selam PADI berlisensi",
    "Full equipment rental, tanks and weights": "Sewa perlengkapan lengkap, tabung, dan pemberat",
    "Marine park fees for Ras Mohammed": "Biaya taman laut Ras Mohammed",
    "Dive insurance (mandatory — arranged at booking if you have none)": "Asuransi selam (wajib — diurus saat pemesanan bila Anda belum memilikinya)",
    "Certification courses (available as an alternative programme)": "Kursus sertifikasi (tersedia sebagai program alternatif)",
    "2 nights' hotel accommodation in Luxor": "Menginap 2 malam di hotel di Luxor",
    "Evening entry to Luxor Temple and the Avenue of Sphinxes": "Masuk malam hari ke Kuil Luxor dan Jalan Sphinx",
    "Hot-air balloon flight (optional extra)": "Terbang dengan balon udara (tambahan opsional)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)": "Makam khusus dengan tiket terpisah (Tutankhamun, Seti I — diatur atas permintaan)",
    "VIP airport meet & assist with fast-track, both directions": "Layanan VIP penyambutan dan pendampingan di bandara dengan jalur cepat, saat tiba dan berangkat",
    "1 night in a seafront hotel": "1 malam di hotel tepi laut",
    "Private air-conditioned vehicle for the desert road, both ways": "Kendaraan pribadi ber-AC untuk jalan gurun, pulang-pergi",
    "Bottled water": "Air mineral",
    "Hotel or cruise-ship pickup & drop-off in Aswan": "Penjemputan dan pengantaran di hotel atau kapal pesiar di Aswan",
    "Entrance tickets to both temples — paid at the published gate rate, with nothing added": "Tiket masuk ke kedua kuil — dibayar sesuai tarif resmi di loket, tanpa tambahan apa pun",
    "Flight option Aswan–Abu Simbel (available on request, limited schedule)": "Pilihan penerbangan Aswan–Abu Simbel (tersedia atas permintaan, jadwal terbatas)",
  },
};

const ms: TourPhrasebook = {
  h: {overview: "Tentang perjalanan", itinerary: "Laluan perjalanan", included: "Termasuk", excluded: "Tidak termasuk", faq: "Soalan lazim", atAGlance: "Sepintas lalu", comfort: "Rentak perjalanan", enquire: "Tanya sekarang"},
  f: {duration: "Tempoh", startPoint: "Titik mula", visiting: "Hentian", isPrivate: "Persendirian", from: "dari", walking: "Berjalan kaki", sleep: "Penginapan", early: "Bertolak awal", drives: "Perjalanan jauh"},
  dayLabel: "Hari",
  stopLabel: "Hentian",
  privateYes: "Ya — kumpulan anda sahaja",
  privateShared: "Pemandu, kenderaan dan lawatan — ya; kapal persiaran dikongsi dengan tetamu lain",
  categories: {
    "Signature Journey": "Perjalanan istimewa",
    "Short Break": "Percutian singkat",
    "Day Tour": "Lawatan sehari",
    "Nile Cruise": "Pelayaran Sungai Nil",
    "Honeymoon": "Bulan madu",
    "Family Journey": "Percutian keluarga",
    "Photography Journey": "Perjalanan fotografi",
    "Grand Tour": "Jelajah besar",
    "Cultural Journey": "Perjalanan budaya",
    "Red Sea": "Laut Merah",
  },
  walking: {Moderate: "Sederhana", Light: "Ringan"},
  cta: {
    heading: "Beritahu kami tarikh anda",
    text: "Cukup tarikh dan bilangan peserta. Kami membalas dalam satu hari bekerja dengan jadual perjalanan sebenar dan harga yang jelas — tanpa sebarang komitmen.",
    button: "Hantar pertanyaan",
    whatsapp: "Salam Kemet — kami berminat dengan perjalanan ini.",
  },
  priceNote: "Bagi setiap orang, musim biasa. Caj tambahan cuti umum dinyatakan berasingan dalam sebut harga.",
  foodNote: "Makanan dan minuman tidak termasuk: dibayar terus di setiap hentian.",
  allJourneys: "Lihat semua perjalanan",
  // Every line the 24 translated journeys use.
  lines: {
    "Private local food guide for the evening": "Pemandu makanan tempatan peribadi sepanjang malam",
    "Your guide's choice of places, and help ordering at every stop": "Pemandu memilih tempat dan membantu membuat pesanan di setiap hentian",
    "Bottled water through the evening": "Air botol sepanjang malam",
    "Private air-conditioned transfers": "Pemindahan peribadi berhawa dingin",
    "Hotel pickup & drop-off": "Ambil dan hantar di hotel",
    "Food and drinks at each stop, paid directly to the venue": "Makanan dan minuman di setiap hentian, dibayar terus di premis",
    "International flights to and from Egypt": "Penerbangan antarabangsa ke dan dari Mesir",
    "Egypt entry visa": "Visa masuk Mesir",
    "Personal expenses": "Perbelanjaan peribadi",
    "Tipping (gratuities)": "Tip",
    "Private Egyptologist guide throughout": "Pemandu Egyptologist peribadi sepanjang perjalanan",
    "9 nights' accommodation — hotels and a Nile cruise": "Penginapan 9 malam — hotel dan pelayaran Sungai Nil",
    "3-night full-board Nile cruise, Aswan to Luxor": "Pelayaran Sungai Nil 3 malam termasuk semua hidangan, dari Aswan ke Luxor",
    "Sleeper-train berths Cairo–Upper Egypt (both directions)": "Katil kereta api tidur Kaherah–Mesir Hulu (pergi dan balik)",
    "All entrance fees to sites and monuments": "Semua bayaran masuk ke tapak dan monumen",
    "Bottled water every day": "Air botol setiap hari",
    "Meals, except on board the Nile cruise": "Makanan, kecuali di atas kapal pelayaran Sungai Nil",
    "Optional extras you choose to add — activities, drinks": "Tambahan pilihan yang anda pilih sendiri — aktiviti, minuman",
    "6 nights' hotel accommodation": "Penginapan hotel 6 malam",
    "Sleeper-train berths Cairo–Luxor (both directions)": "Katil kereta api tidur Kaherah–Luxor (pergi dan balik)",
    "Meals": "Makanan",
    "3 nights' hotel accommodation": "Penginapan hotel 3 malam",
    "Domestic flights Cairo–Luxor and Aswan–Cairo": "Penerbangan domestik Kaherah–Luxor dan Aswan–Kaherah",
    "2 nights' hotel accommodation": "Penginapan hotel 2 malam",
    "4x4 desert transfer where required": "Pemindahan dengan kenderaan 4x4 di padang pasir apabila perlu",
    "Entrance tickets to sites and monuments — paid at the published gate rate, with nothing added": "Tiket masuk ke tapak dan monumen — dibayar pada harga rasmi di pintu masuk, tanpa sebarang tambahan",
    "Entry inside the pyramid chambers (optional extra)": "Masuk ke dalam ruang piramid (tambahan pilihan)",
    "Private golf cart around the plateau (optional extra)": "Kereta golf peribadi mengelilingi dataran (tambahan pilihan)",
    "Private opening of the Tutankhamun galleries, an hour and a half (optional extra)": "Galeri Tutankhamun dibuka secara peribadi selama satu jam setengah (tambahan pilihan)",
    "Camel or horse rides (optional extra)": "Menunggang unta atau kuda (tambahan pilihan)",
    "Other optional extras — dinner cruise, drinks": "Tambahan pilihan lain — pelayaran makan malam, minuman",
    "4 nights' hotel accommodation (Luxor & Aswan)": "Penginapan hotel 4 malam (Luxor dan Aswan)",
    "Private felucca sail in Aswan": "Belayar dengan felucca peribadi di Aswan",
    "Abu Simbel excursion (optional extra)": "Lawatan ke Abu Simbel (tambahan pilihan)",
    "8 nights — Nile-view suites and a 3-night full-board Nile cruise": "8 malam — suite berpemandangan Sungai Nil dan pelayaran Sungai Nil 3 malam termasuk semua hidangan",
    "Domestic flights Cairo–Aswan and Luxor–Cairo": "Penerbangan domestik Kaherah–Aswan dan Luxor–Kaherah",
    "Private early-access Giza sunrise session": "Sesi matahari terbit di Giza dengan akses awal secara peribadi",
    "Sunset felucca charter in Aswan": "Felucca sewaan ketika matahari terbenam di Aswan",
    "Hot-air balloon flight (booked on request, about €120 per person)": "Penerbangan belon udara panas (ditempah atas permintaan, kira-kira €120 seorang)",
    "Private family-specialist Egyptologist throughout": "Egyptologist peribadi yang pakar melayan keluarga, sepanjang perjalanan",
    "7 nights' accommodation — family suites or connecting rooms": "Penginapan 7 malam — suite keluarga atau bilik bersambung",
    "Felucca sail and Nubian village visit in Aswan": "Belayar dengan felucca dan lawatan ke perkampungan Nubia di Aswan",
    "Sound & Light show and camel rides (optional extras)": "Pertunjukan Bunyi dan Cahaya serta menunggang unta (tambahan pilihan)",
    "Private photography-aware Egyptologist guide throughout": "Pemandu Egyptologist peribadi yang memahami keperluan jurugambar, sepanjang perjalanan",
    "Golden-hour felucca charter in Aswan": "Felucca sewaan pada waktu keemasan di Aswan",
    "Photography permits where required (tripod/site)": "Permit fotografi apabila diperlukan (tripod/tapak)",
    "Hot-air balloon flight (booked on request)": "Penerbangan belon udara panas (ditempah atas permintaan)",
    "Camera equipment and drone permits (drones are effectively prohibited in Egypt)": "Peralatan kamera dan permit dron (dron pada hakikatnya dilarang di Mesir)",
    "13 nights — hotels, a 3-night full-board Nile cruise and a Red Sea resort": "13 malam — hotel, pelayaran Sungai Nil 3 malam termasuk semua hidangan dan resort di Laut Merah",
    "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)": "Semua penerbangan domestik (Kaherah–Aswan, Luxor–Sharm El Sheikh, Sharm–Kaherah)",
    "Abu Simbel excursion by private vehicle": "Lawatan ke Abu Simbel dengan kenderaan peribadi",
    "Ras Mohammed boat day with snorkelling equipment": "Sehari menaiki bot di Ras Mohammed, dengan peralatan snorkeling",
    "Private historian-Egyptologist guide throughout": "Pemandu sejarawan dan Egyptologist peribadi sepanjang perjalanan",
    "4 nights' hotel accommodation": "Penginapan hotel 4 malam",
    "Sufi tanoura performance tickets": "Tiket persembahan tanoura sufi",
    "A Zar music evening in Cairo (optional extra)": "Malam muzik Zar di Kaherah (tambahan pilihan)",
    "Cooking with your own hands in a Cairo restaurant kitchen (optional extra)": "Memasak sendiri di dapur sebuah restoran di Kaherah (tambahan pilihan)",
    "4 nights in a Red Sea resort": "4 malam di resort Laut Merah",
    "Private full-day Ras Mohammed boat charter with snorkelling equipment": "Bot sewaan peribadi sehari penuh ke Ras Mohammed, dengan peralatan snorkeling",
    "Sinai desert evening under the stars": "Malam di padang pasir Sinai di bawah bintang",
    "Scuba diving (arranged on request with licensed centres)": "Selam skuba (diatur atas permintaan bersama pusat selam berlesen)",
    "Marine park fees where applicable": "Bayaran taman laut, jika berkenaan",
    "3 nights in a Red Sea resort": "3 malam di resort Laut Merah",
    "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre": "5 selaman berpemandu (1 selaman semakan + 2 hari bot dengan dua selaman) bersama pusat PADI berlesen",
    "Full equipment rental, tanks and weights": "Sewaan peralatan lengkap, tangki dan pemberat",
    "Marine park fees for Ras Mohammed": "Bayaran taman laut Ras Mohammed",
    "Dive insurance (mandatory — arranged at booking if you have none)": "Insurans selam (wajib — diatur semasa tempahan jika anda belum memilikinya)",
    "Certification courses (available as an alternative programme)": "Kursus pensijilan (ditawarkan sebagai program alternatif)",
    "2 nights' hotel accommodation in Luxor": "Penginapan hotel 2 malam di Luxor",
    "Evening entry to Luxor Temple and the Avenue of Sphinxes": "Masuk ke Kuil Luxor dan Laluan Sphinx pada waktu malam",
    "Hot-air balloon flight (optional extra)": "Penerbangan belon udara panas (tambahan pilihan)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)": "Makam khas yang memerlukan tiket berasingan (Tutankhamun, Seti I — diatur atas permintaan)",
    "VIP airport meet & assist with fast-track, both directions": "Sambutan dan bantuan VIP di lapangan terbang dengan laluan pantas, semasa ketibaan dan pelepasan",
    "1 night in a seafront hotel": "1 malam di hotel tepi laut",
    "Private air-conditioned vehicle for the desert road, both ways": "Kenderaan peribadi berhawa dingin untuk jalan padang pasir, pergi dan balik",
    "Bottled water": "Air botol",
    "Hotel or cruise-ship pickup & drop-off in Aswan": "Ambil dan hantar di hotel atau kapal pelayaran di Aswan",
    "Entrance tickets to both temples — paid at the published gate rate, with nothing added": "Tiket masuk ke kedua-dua kuil — dibayar pada harga rasmi di pintu masuk, tanpa sebarang tambahan",
    "Flight option Aswan–Abu Simbel (available on request, limited schedule)": "Pilihan penerbangan Aswan–Abu Simbel (atas permintaan, jadual terhad)",
  },
};

const ar: TourPhrasebook = {
  h: {overview: "عن الرحلة", itinerary: "برنامج الرحلة", included: "يشمل", excluded: "لا يشمل", faq: "أسئلة شائعة", atAGlance: "باختصار", comfort: "إيقاع الرحلة", enquire: "استفسروا الآن"},
  f: {duration: "المدة", startPoint: "نقطة البداية", visiting: "المحطات", isPrivate: "خاصة", from: "ابتداءً من", walking: "المشي", sleep: "الإقامة", early: "انطلاق مبكر", drives: "مسافات طويلة"},
  dayLabel: "اليوم",
  stopLabel: "المحطة",
  privateYes: "نعم — لمجموعتكم وحدها",
  privateShared: "الإرشاد والسيارة والزيارات — نعم؛ أما الباخرة فمشتركة مع ضيوف آخرين",
  categories: {
    "Signature Journey": "رحلة مميزة",
    "Short Break": "عطلة قصيرة",
    "Day Tour": "جولة ليوم واحد",
    "Nile Cruise": "رحلة نيلية",
    "Honeymoon": "شهر العسل",
    "Family Journey": "رحلة عائلية",
    "Photography Journey": "رحلة تصوير",
    "Grand Tour": "الرحلة الكبرى",
    "Cultural Journey": "رحلة ثقافية",
    "Red Sea": "البحر الأحمر",
  },
  walking: {Moderate: "متوسط", Light: "خفيف"},
  cta: {
    heading: "أخبرونا بمواعيدكم",
    text: "تكفينا مواعيدكم وعدد المسافرين. نرد خلال يوم عمل واحد ببرنامج حقيقي وسعر واضح، دون أي التزام.",
    button: "أرسلوا طلبكم",
    whatsapp: "مرحبًا كيميت، نحن مهتمون بهذه الرحلة.",
  },
  priceNote: "للفرد، في الموسم العادي. رسوم مواسم الأعياد تُذكر منفصلة في عرض السعر.",
  foodNote: "الطعام والمشروبات غير مشمولة، وتُدفع مباشرة في كل محطة.",
  allJourneys: "كل الرحلات",
  // Every line the 24 translated journeys use.
  lines: {
    "Private local food guide for the evening": "مرشد طعام محلي خاص طوال السهرة",
    "Your guide's choice of places, and help ordering at every stop": "المرشد يختار الأماكن ويساعدكم في الطلب في كل محطة",
    "Bottled water through the evening": "مياه معبأة طوال السهرة",
    "Private air-conditioned transfers": "تنقلات خاصة بسيارات مكيفة",
    "Hotel pickup & drop-off": "الاستقبال من الفندق والعودة إليه",
    "Food and drinks at each stop, paid directly to the venue": "الطعام والمشروبات في كل محطة، تُدفع مباشرة للمكان",
    "International flights to and from Egypt": "تذاكر الطيران الدولية من مصر وإليها",
    "Egypt entry visa": "تأشيرة دخول مصر",
    "Personal expenses": "المصروفات الشخصية",
    "Tipping (gratuities)": "البقشيش",
    "Private Egyptologist guide throughout": "خبير آثار خاص طوال الرحلة",
    "9 nights' accommodation — hotels and a Nile cruise": "إقامة لمدة ٩ ليالٍ — فنادق ورحلة نيلية",
    "3-night full-board Nile cruise, Aswan to Luxor": "رحلة نيلية من ٣ ليالٍ شاملة جميع الوجبات، من أسوان إلى الأقصر",
    "Sleeper-train berths Cairo–Upper Egypt (both directions)": "أسرّة في قطار النوم بين القاهرة والصعيد (ذهابًا وإيابًا)",
    "All entrance fees to sites and monuments": "جميع رسوم دخول المواقع والآثار",
    "Bottled water every day": "مياه معبأة يوميًا",
    "Meals, except on board the Nile cruise": "الوجبات، عدا ما يُقدَّم على متن الباخرة النيلية",
    "Optional extras you choose to add — activities, drinks": "الإضافات الاختيارية التي تختارونها — أنشطة ومشروبات",
    "6 nights' hotel accommodation": "إقامة فندقية لمدة ٦ ليالٍ",
    "Sleeper-train berths Cairo–Luxor (both directions)": "أسرّة في قطار النوم بين القاهرة والأقصر (ذهابًا وإيابًا)",
    "Meals": "الوجبات",
    "3 nights' hotel accommodation": "إقامة فندقية لمدة ٣ ليالٍ",
    "Domestic flights Cairo–Luxor and Aswan–Cairo": "رحلات جوية داخلية: القاهرة–الأقصر وأسوان–القاهرة",
    "2 nights' hotel accommodation": "إقامة فندقية لليلتين",
    "4x4 desert transfer where required": "انتقال بسيارة دفع رباعي في الصحراء حيث يلزم",
    "Entrance tickets to sites and monuments — paid at the published gate rate, with nothing added": "تذاكر دخول المواقع والآثار — تُدفع بالسعر الرسمي المعلن عند البوابة، دون أي زيادة",
    "Entry inside the pyramid chambers (optional extra)": "دخول الحجرات الداخلية للأهرامات (إضافة اختيارية)",
    "Private golf cart around the plateau (optional extra)": "عربة غولف خاصة للتجوّل في الهضبة (إضافة اختيارية)",
    "Private opening of the Tutankhamun galleries, an hour and a half (optional extra)": "فتح خاص لقاعات توت عنخ آمون لمدة ساعة ونصف (إضافة اختيارية)",
    "Camel or horse rides (optional extra)": "ركوب الجمال أو الخيل (إضافة اختيارية)",
    "Other optional extras — dinner cruise, drinks": "إضافات اختيارية أخرى — عشاء على مركب نيلي، ومشروبات",
    "4 nights' hotel accommodation (Luxor & Aswan)": "إقامة فندقية لمدة ٤ ليالٍ (الأقصر وأسوان)",
    "Private felucca sail in Aswan": "إبحار خاص بالفلوكة في أسوان",
    "Abu Simbel excursion (optional extra)": "رحلة أبو سمبل (إضافة اختيارية)",
    "8 nights — Nile-view suites and a 3-night full-board Nile cruise": "٨ ليالٍ — أجنحة تطل على النيل، ورحلة نيلية من ٣ ليالٍ شاملة جميع الوجبات",
    "Domestic flights Cairo–Aswan and Luxor–Cairo": "رحلات جوية داخلية: القاهرة–أسوان والأقصر–القاهرة",
    "Private early-access Giza sunrise session": "دخول خاص مبكر إلى الجيزة عند الشروق",
    "Sunset felucca charter in Aswan": "فلوكة خاصة عند الغروب في أسوان",
    "Hot-air balloon flight (booked on request, about €120 per person)": "رحلة المنطاد (تُحجز عند الطلب، نحو ١٢٠ يورو للفرد)",
    "Private family-specialist Egyptologist throughout": "خبير آثار خاص متخصص في العائلات طوال الرحلة",
    "7 nights' accommodation — family suites or connecting rooms": "إقامة لمدة ٧ ليالٍ — أجنحة عائلية أو غرف متصلة",
    "Felucca sail and Nubian village visit in Aswan": "إبحار بالفلوكة وزيارة قرية نوبية في أسوان",
    "Sound & Light show and camel rides (optional extras)": "عرض الصوت والضوء وركوب الجمال (إضافات اختيارية)",
    "Private photography-aware Egyptologist guide throughout": "خبير آثار خاص على دراية بالتصوير طوال الرحلة",
    "Golden-hour felucca charter in Aswan": "فلوكة خاصة في أسوان في الساعة الذهبية",
    "Photography permits where required (tripod/site)": "تصاريح التصوير حيث تلزم (للحامل الثلاثي أو للموقع)",
    "Hot-air balloon flight (booked on request)": "رحلة المنطاد (تُحجز عند الطلب)",
    "Camera equipment and drone permits (drones are effectively prohibited in Egypt)": "معدات التصوير وتصاريح الطائرات المسيّرة (المسيّرات ممنوعة عمليًا في مصر)",
    "13 nights — hotels, a 3-night full-board Nile cruise and a Red Sea resort": "١٣ ليلة — فنادق، ورحلة نيلية من ٣ ليالٍ شاملة جميع الوجبات، ومنتجع على البحر الأحمر",
    "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)": "جميع الرحلات الجوية الداخلية (القاهرة–أسوان، الأقصر–شرم الشيخ، شرم–القاهرة)",
    "Abu Simbel excursion by private vehicle": "رحلة أبو سمبل بسيارة خاصة",
    "Ras Mohammed boat day with snorkelling equipment": "يوم بالقارب في رأس محمد مع معدات الغطس السطحي",
    "Private historian-Egyptologist guide throughout": "خبير آثار ومؤرخ خاص طوال الرحلة",
    "4 nights' hotel accommodation": "إقامة فندقية لمدة ٤ ليالٍ",
    "Sufi tanoura performance tickets": "تذاكر عرض التنورة الصوفي",
    "A Zar music evening in Cairo (optional extra)": "أمسية موسيقى الزار في القاهرة (إضافة اختيارية)",
    "Cooking with your own hands in a Cairo restaurant kitchen (optional extra)": "الطبخ بأيديكم في مطبخ مطعم بالقاهرة (إضافة اختيارية)",
    "4 nights in a Red Sea resort": "٤ ليالٍ في منتجع على البحر الأحمر",
    "Private full-day Ras Mohammed boat charter with snorkelling equipment": "قارب خاص ليوم كامل في رأس محمد مع معدات الغطس السطحي",
    "Sinai desert evening under the stars": "أمسية في صحراء سيناء تحت النجوم",
    "Scuba diving (arranged on request with licensed centres)": "الغوص بأسطوانات الهواء (يُرتَّب عند الطلب مع مراكز مرخّصة)",
    "Marine park fees where applicable": "رسوم المحميات البحرية حيث تنطبق",
    "3 nights in a Red Sea resort": "٣ ليالٍ في منتجع على البحر الأحمر",
    "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre": "٥ غطسات بإشراف مرشد (غطسة تقييم واحدة + يوما إبحار بغطستين في كل يوم) مع مركز PADI مرخّص",
    "Full equipment rental, tanks and weights": "استئجار المعدات كاملة، مع الأسطوانات والأثقال",
    "Marine park fees for Ras Mohammed": "رسوم محمية رأس محمد البحرية",
    "Dive insurance (mandatory — arranged at booking if you have none)": "تأمين الغوص (إلزامي — نرتّبه عند الحجز إن لم يكن لديكم تأمين)",
    "Certification courses (available as an alternative programme)": "دورات الحصول على شهادة الغوص (متاحة كبرنامج بديل)",
    "2 nights' hotel accommodation in Luxor": "إقامة فندقية لليلتين في الأقصر",
    "Evening entry to Luxor Temple and the Avenue of Sphinxes": "دخول مسائي إلى معبد الأقصر وطريق الكباش",
    "Hot-air balloon flight (optional extra)": "رحلة المنطاد (إضافة اختيارية)",
    "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)": "المقابر الخاصة ذات التذاكر المنفصلة (توت عنخ آمون، سيتي الأول — تُرتَّب عند الطلب)",
    "VIP airport meet & assist with fast-track, both directions": "استقبال ومساعدة كبار الزوار في المطار مع المسار السريع، عند الوصول والمغادرة",
    "1 night in a seafront hotel": "ليلة واحدة في فندق على البحر",
    "Private air-conditioned vehicle for the desert road, both ways": "سيارة خاصة مكيّفة للطريق الصحراوي، ذهابًا وإيابًا",
    "Bottled water": "مياه معبأة",
    "Hotel or cruise-ship pickup & drop-off in Aswan": "الاصطحاب من الفندق أو الباخرة في أسوان والعودة إليهما",
    "Entrance tickets to both temples — paid at the published gate rate, with nothing added": "تذاكر دخول المعبدين — تُدفع بالسعر الرسمي المعلن عند البوابة، دون أي زيادة",
    "Flight option Aswan–Abu Simbel (available on request, limited schedule)": "خيار الطيران أسوان–أبو سمبل (متاح عند الطلب، والمواعيد محدودة)",
  },
};

export const TOUR_PHRASEBOOK: Partial<Record<TranslatedLocale, TourPhrasebook>> = { de, fr, it, es, pt, ru, id, ms, ar };

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
