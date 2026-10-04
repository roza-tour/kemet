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
    "Sleeper-train berths Cairo↔Upper Egypt (both directions)":
      "Couchettes de train de nuit Le Caire↔Haute-Égypte (aller et retour)",
    "6 nights' accommodation in 4- or 5-star hotels": "6 nuits en hôtels 4 ou 5 étoiles",
    "Sleeper-train berths Cairo↔Luxor (both directions)":
      "Couchettes de train de nuit Le Caire↔Louxor (aller et retour)",
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
    "3 nights' accommodation in 4- or 5-star hotels": "3 nuits en hôtels 4 ou 5 étoiles",
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
    "All food tastings listed in the itinerary": "Toutes les dégustations indiquées au programme",
    "Bottled water and tea/coffee at the ahwa": "Eau en bouteille et thé ou café à l'ahwa",
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
    "Other optional extras — dinner cruise, drinks":
      "Les autres options — dîner-croisière, boissons",
    "Alcoholic drinks": "Les boissons alcoolisées",
    "Additional dishes beyond the tasting menu": "Les plats supplémentaires hors menu de dégustation",
    "Abu Simbel excursion (optional extra)": "L'excursion à Abou Simbel (en option)",
    "Hot-air balloon flight (booked on request, ~EUR 120 per person)":
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
    "Optional extras — Abu Simbel, camel rides, dinner cruise, drinks":
      "Les options — Abou Simbel, promenades à dos de chameau, dîner-croisière, boissons",
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
    "Sleeper-train berths Cairo↔Upper Egypt (both directions)":
      "Cuccette sul treno notturno Il Cairo↔Alto Egitto (andata e ritorno)",
    "6 nights' accommodation in 4- or 5-star hotels": "6 notti in hotel 4 o 5 stelle",
    "Sleeper-train berths Cairo↔Luxor (both directions)":
      "Cuccette sul treno notturno Il Cairo↔Luxor (andata e ritorno)",
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
    "3 nights' accommodation in 4- or 5-star hotels": "3 notti in hotel 4 o 5 stelle",
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
    "All food tastings listed in the itinerary": "Tutte le degustazioni indicate nel programma",
    "Bottled water and tea/coffee at the ahwa": "Acqua in bottiglia e tè o caffè all'ahwa",
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
    "Other optional extras — dinner cruise, drinks":
      "Gli altri supplementi facoltativi — cena-crociera, bevande",
    "Alcoholic drinks": "Le bevande alcoliche",
    "Additional dishes beyond the tasting menu": "I piatti aggiuntivi oltre al menu di degustazione",
    "Abu Simbel excursion (optional extra)": "L'escursione ad Abu Simbel (supplemento facoltativo)",
    "Hot-air balloon flight (booked on request, ~EUR 120 per person)":
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
    "Optional extras — Abu Simbel, camel rides, dinner cruise, drinks":
      "I supplementi facoltativi — Abu Simbel, giri in cammello, cena-crociera, bevande",
  },
};

/** Only the languages a journey has actually been translated into. */
export const TOUR_PHRASEBOOK: Partial<Record<TranslatedLocale, TourPhrasebook>> = { de, fr, it };

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
