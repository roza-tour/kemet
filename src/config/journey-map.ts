// ---------------------------------------------------------------------------
// Design your journey on the map (components/JourneyMap.astro).
//
// The visitor taps the places they want, sets the nights, and sends the route
// to us on WhatsApp or by email. Nothing is priced here: a custom route is
// quoted in writing, as everything else is. Under the route the page shows the
// catalogue journeys that come closest, with their real catalogue prices.
//
// THE MAP is drawn from the coordinates below — the coast, the borders and the
// Nile are a simplified outline, enough to recognise the country, not a chart.
// Suggested nights are a starting point the visitor changes freely.
// ---------------------------------------------------------------------------
import type { SiteLocale } from "@/config/i18n";

export type StopKey =
  | "alexandria" | "matruh" | "portsaid" | "cairo" | "fayoum" | "siwa" | "bahariya" | "minya" | "kharga"
  | "stcatherine" | "dahab" | "sharm" | "hurghada" | "marsaalam" | "abydos" | "dendera" | "luxor" | "aswan" | "abusimbel";

export interface MapStop {
  key: StopKey;
  lon: number;
  lat: number;
  /** Nights suggested when the stop is added. 0 = a day visit. */
  nights: number;
  /** Where the name sits around the dot. */
  side: "left" | "right" | "above" | "below";
  /** The catalogue's city names (data/tours.ts → cities) that count as this stop. */
  cities: string[];
  /** A photograph of the place, where the site has one of its own. */
  photo?: { src: string; width: number; height: number };
}

// North to south. Suggested nights are a starting point, not a rule.
export const MAP_STOPS: MapStop[] = [
  { key: "matruh", lon: 27.24, lat: 31.35, nights: 2, side: "below", cities: [] },
  { key: "alexandria", lon: 29.92, lat: 31.2, nights: 1, side: "left", cities: ["Alexandria"], photo: { src: "/images/alexandria/alexandria-qaitbay-citadel.webp", width: 736, height: 981 } },
  { key: "portsaid", lon: 32.3, lat: 31.27, nights: 0, side: "right", cities: [] },
  { key: "cairo", lon: 31.24, lat: 30.04, nights: 3, side: "right", cities: ["Cairo", "Giza", "Saqqara", "Memphis", "Dahshur"], photo: { src: "/images/stock/giza-sphinx-with-pyramid.webp", width: 1024, height: 683 } },
  { key: "fayoum", lon: 30.84, lat: 29.31, nights: 1, side: "left", cities: ["Fayoum"], photo: { src: "/images/fayoum/fayoum-wadi-rayan.webp", width: 764, height: 458 } },
  { key: "siwa", lon: 25.52, lat: 29.2, nights: 2, side: "right", cities: ["Siwa"], photo: { src: "/images/stock/siwa-shali-fortress.webp", width: 1280, height: 960 } },
  { key: "bahariya", lon: 28.9, lat: 28.35, nights: 2, side: "left", cities: [] },
  { key: "stcatherine", lon: 33.95, lat: 28.56, nights: 1, side: "above", cities: [] },
  { key: "dahab", lon: 34.52, lat: 28.5, nights: 2, side: "right", cities: [] },
  { key: "minya", lon: 30.75, lat: 28.1, nights: 1, side: "left", cities: [] },
  { key: "sharm", lon: 34.33, lat: 27.91, nights: 3, side: "right", cities: ["Sharm El Sheikh", "Ras Mohammed", "Tiran"], photo: { src: "/images/redsea/ras-mohammed-lagoon.webp", width: 764, height: 458 } },
  { key: "hurghada", lon: 33.81, lat: 27.26, nights: 3, side: "right", cities: ["Hurghada"], photo: { src: "/images/redsea/hurghada-island-jetty.webp", width: 764, height: 458 } },
  { key: "abydos", lon: 31.92, lat: 26.18, nights: 0, side: "left", cities: [] },
  { key: "dendera", lon: 32.67, lat: 26.14, nights: 0, side: "right", cities: [] },
  { key: "luxor", lon: 32.64, lat: 25.69, nights: 2, side: "left", cities: ["Luxor", "Edfu", "Kom Ombo"], photo: { src: "/images/luxor/luxor-karnak-hypostyle-hall.webp", width: 652, height: 980 } },
  { key: "kharga", lon: 30.55, lat: 25.44, nights: 2, side: "left", cities: [] },
  { key: "marsaalam", lon: 34.9, lat: 25.07, nights: 3, side: "right", cities: [] },
  { key: "aswan", lon: 32.9, lat: 24.09, nights: 2, side: "left", cities: ["Aswan", "Edfu", "Kom Ombo"], photo: { src: "/images/aswan/aswan-philae-temple-island.webp", width: 1080, height: 810 } },
  { key: "abusimbel", lon: 31.62, lat: 22.34, nights: 0, side: "left", cities: ["Abu Simbel"], photo: { src: "/images/stock/abu-simbel-both-temples.webp", width: 1024, height: 768 } },
];

/** Coast and borders, clockwise from Sallum. [lon, lat]. */
export const EGYPT_OUTLINE: Array<[number, number]> = [
  [25.15, 31.57], [25.9, 31.62], [27.24, 31.36], [28.4, 31.08], [28.95, 30.85], [29.92, 31.21], [30.42, 31.47], [31.1, 31.6],
  [31.82, 31.53], [32.3, 31.28], [33.1, 31.08], [33.8, 31.14], [34.22, 31.32],
  [34.9, 29.5], [34.68, 29.03], [34.52, 28.5], [34.44, 28.05], [34.33, 27.86], [34.25, 27.73],
  [33.62, 28.24], [33.2, 28.9], [33.0, 29.25], [32.72, 29.62], [32.58, 29.95],
  [32.36, 29.6], [32.66, 29.1], [32.95, 28.6], [33.1, 28.35], [33.6, 27.75], [33.81, 27.26], [33.95, 26.75], [34.28, 26.1],
  [34.9, 25.07], [35.3, 24.4], [35.48, 23.95], [35.6, 23.1], [36.3, 22.6], [36.88, 22.0],
  [25.0, 22.0], [25.0, 29.25], [24.7, 30.15], [24.9, 30.9],
];

/** The Nile from the southern border to Cairo, then its two branches. */
export const NILE: Array<[number, number]> = [
  [31.3, 22.0], [31.9, 22.6], [32.3, 23.1], [32.7, 23.6], [32.88, 23.97], [32.9, 24.09], [32.93, 24.45], [32.87, 24.98], [32.55, 25.29],
  [32.64, 25.69], [32.72, 26.16], [32.24, 26.05], [31.69, 26.56], [31.18, 27.18], [30.82, 27.73], [30.75, 28.1], [30.9, 28.6],
  [31.1, 29.07], [31.25, 29.6], [31.24, 30.04], [31.1, 30.18],
];
export const NILE_ROSETTA: Array<[number, number]> = [[31.1, 30.18], [30.8, 30.8], [30.42, 31.47]];
export const NILE_DAMIETTA: Array<[number, number]> = [[31.1, 30.18], [31.25, 30.5], [31.4, 31.0], [31.82, 31.53]];

export interface MapWords {
  /** <title> and <meta description> of the map's own page. */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  mapLabel: string;
  yourRoute: string;
  empty: string;
  nights: string;
  dayVisit: string;
  total: string;
  cruise: string;
  wa: string;
  mail: string;
  note: string;
  closest: string;
  from: string;
  clear: string;
  remove: string;
  moreNight: string;
  fewerNight: string;
  hello: string;
  subject: string;
  /** The two seas, written on the map. */
  med: string;
  red: string;
  /** Under the map: the same stops as a list, for small screens and keyboards. */
  pick: string;
  /** Moves a stop one place earlier in the route. */
  earlier: string;
  stops: Record<StopKey, string>;
  /** One line on each place, shown when it is tapped. */
  about: Record<StopKey, string>;
}

export const MAP_WORDS: Record<SiteLocale, MapWords> = {
  en: {
    metaTitle: "Design Your Egypt Journey on the Map | Kemet",
    metaDescription: "Draw your own route across Egypt: tap the places you want, set the nights, and send it to us. We reply with a private itinerary and a price in writing.",
    eyebrow: "Design your journey", heading: "Draw your route across Egypt", intro: "Tap the places you want to see, set the nights, and send us the route. We reply with a real itinerary and a price in writing.",
    mapLabel: "Map of Egypt — choose your stops", yourRoute: "Your route", empty: "Tap a place on the map to begin.", nights: "Nights", dayVisit: "day visit", total: "Total nights",
    cruise: "Sail between Luxor and Aswan on the Nile", wa: "Send on WhatsApp", mail: "Send by email", note: "A route of your own is priced on request. We reply within one working day.",
    closest: "The closest journeys in our catalogue", from: "from", clear: "Start again", remove: "Remove", moreNight: "One night more", fewerNight: "One night fewer",
    hello: "Hello Kemet — this is the route I have in mind:", subject: "My route across Egypt",
    med: "Mediterranean Sea", red: "Red Sea",
    pick: "Or choose from the list", earlier: "Move earlier",
    stops: { alexandria: "Alexandria", cairo: "Cairo & Giza", fayoum: "Fayoum", siwa: "Siwa Oasis", luxor: "Luxor", aswan: "Aswan", abusimbel: "Abu Simbel", hurghada: "Hurghada", sharm: "Sharm El Sheikh", matruh: "Marsa Matruh", portsaid: "Port Said", stcatherine: "Saint Catherine", dahab: "Dahab", marsaalam: "Marsa Alam", minya: "Minya", abydos: "Abydos", dendera: "Dendera", bahariya: "Bahariya Oasis", kharga: "Kharga & Dakhla" },
    about: {
      alexandria: "The Mediterranean city: the Corniche, the Bibliotheca, and Qaitbay's citadel on the site of the Pharos.",
      cairo: "The Pyramids and the Sphinx, the Grand Egyptian Museum, Islamic and Coptic Cairo.",
      fayoum: "An oasis two hours from Cairo: Lake Qarun, Wadi El Rayan's waterfalls and the Valley of the Whales.",
      siwa: "A far oasis near Libya: the Oracle of Amun, salt lakes and the mud-brick fortress of Shali.",
      matruh: "White sand and turquoise water on the Mediterranean; El Alamein's memorials on the way.",
      portsaid: "Where the Suez Canal meets the Mediterranean, with its nineteenth-century waterfront.",
      stcatherine: "The sixth-century monastery at the foot of Mount Sinai, and the sunrise climb above it.",
      dahab: "A laid-back town on the Gulf of Aqaba: the Blue Hole, reef diving and the Sinai mountains behind.",
      sharm: "Red Sea reefs at Ras Mohammed and Tiran, and resorts along Naama Bay.",
      hurghada: "The Red Sea's main resort coast: boat days to the islands, snorkelling and diving, with El Gouna nearby.",
      minya: "Middle Egypt: the painted tombs of Beni Hasan and Akhenaten's city at Tell el-Amarna.",
      abydos: "The Temple of Seti I, with some of the finest carved reliefs in Egypt.",
      dendera: "The Temple of Hathor, its ceilings still in colour — an easy day from Luxor.",
      luxor: "Karnak and Luxor Temple on the East Bank; the Valley of the Kings and Hatshepsut's temple on the West.",
      kharga: "The Western Desert oases: the Temple of Hibis, the mud-brick town of Al-Qasr and hot springs.",
      bahariya: "The gateway to the White Desert's chalk formations, and to a night under the stars.",
      marsaalam: "The quieter southern Red Sea: untouched reefs, sea turtles and, with luck, dugongs.",
      aswan: "The Nile at its most beautiful: Philae, Nubian villages and feluccas at sunset.",
      abusimbel: "The two rock temples of Ramesses II on Lake Nasser, moved block by block in the 1960s.",
    },
  },
  de: {
    metaTitle: "Ägyptenreise auf der Karte entwerfen | Kemet",
    metaDescription: "Zeichnen Sie Ihre eigene Route durch Ägypten: Orte antippen, Nächte festlegen, absenden. Wir antworten schriftlich mit einer privaten Route und einem Preis.",
    eyebrow: "Ihre Reise entwerfen", heading: "Zeichnen Sie Ihre Route durch Ägypten", intro: "Tippen Sie die Orte an, die Sie sehen möchten, legen Sie die Nächte fest und senden Sie uns die Route. Wir antworten mit einer echten Route und einem Preis, schriftlich.",
    mapLabel: "Karte von Ägypten — wählen Sie Ihre Stationen", yourRoute: "Ihre Route", empty: "Tippen Sie einen Ort auf der Karte an.", nights: "Nächte", dayVisit: "Tagesbesuch", total: "Nächte insgesamt",
    cruise: "Zwischen Luxor und Assuan auf dem Nil fahren", wa: "Per WhatsApp senden", mail: "Per E-Mail senden", note: "Eine eigene Route wird auf Anfrage kalkuliert. Wir antworten innerhalb eines Werktags.",
    closest: "Die ähnlichsten Reisen aus unserem Programm", from: "ab", clear: "Neu beginnen", remove: "Entfernen", moreNight: "Eine Nacht mehr", fewerNight: "Eine Nacht weniger",
    hello: "Hallo Kemet — diese Route stelle ich mir vor:", subject: "Meine Route durch Ägypten",
    med: "Mittelmeer", red: "Rotes Meer",
    pick: "Oder aus der Liste wählen", earlier: "Früher einordnen",
    stops: { alexandria: "Alexandria", cairo: "Kairo & Gizeh", fayoum: "Fayyum", siwa: "Oase Siwa", luxor: "Luxor", aswan: "Assuan", abusimbel: "Abu Simbel", hurghada: "Hurghada", sharm: "Scharm el-Scheich", matruh: "Marsa Matruh", portsaid: "Port Said", stcatherine: "Katharinenkloster", dahab: "Dahab", marsaalam: "Marsa Alam", minya: "Minia", abydos: "Abydos", dendera: "Dendera", bahariya: "Oase Bahariya", kharga: "Charga & Dachla" },
    about: {
      alexandria: "Die Stadt am Mittelmeer: die Corniche, die Bibliotheca und die Qaitbay-Zitadelle an der Stelle des Pharos.",
      cairo: "Die Pyramiden und die Sphinx, das Grand Egyptian Museum, das islamische und das koptische Kairo.",
      fayoum: "Eine Oase zwei Stunden von Kairo: der Qarun-See, die Wasserfälle im Wadi El Rayan und das Tal der Wale.",
      siwa: "Eine ferne Oase nahe Libyen: das Orakel des Amun, Salzseen und die Lehmfestung Shali.",
      matruh: "Weißer Sand und türkisfarbenes Wasser am Mittelmeer; unterwegs die Gedenkstätten von El Alamein.",
      portsaid: "Wo der Suezkanal auf das Mittelmeer trifft, mit seiner Uferfront aus dem 19. Jahrhundert.",
      stcatherine: "Das Kloster aus dem 6. Jahrhundert am Fuß des Berges Sinai — und der Aufstieg zum Sonnenaufgang darüber.",
      dahab: "Ein entspannter Ort am Golf von Akaba: das Blue Hole, Rifftauchen und dahinter die Berge des Sinai.",
      sharm: "Die Riffe des Roten Meeres bei Ras Mohammed und Tiran, und die Resorts an der Naama Bay.",
      hurghada: "Die große Resortküste des Roten Meeres: Bootstage zu den Inseln, Schnorcheln und Tauchen, El Gouna nebenan.",
      minya: "Mittelägypten: die bemalten Gräber von Beni Hasan und Echnatons Stadt in Tell el-Amarna.",
      abydos: "Der Tempel Sethos' I. mit einigen der feinsten Reliefs Ägyptens.",
      dendera: "Der Hathor-Tempel, dessen Decken noch in Farbe stehen — ein leichter Tagesausflug ab Luxor.",
      luxor: "Karnak und der Luxor-Tempel am Ostufer; das Tal der Könige und der Tempel der Hatschepsut am Westufer.",
      kharga: "Die Oasen der Westlichen Wüste: der Hibis-Tempel, die Lehmstadt Al-Qasr und heiße Quellen.",
      bahariya: "Das Tor zu den Kalkformationen der Weißen Wüste — und zu einer Nacht unter den Sternen.",
      marsaalam: "Das ruhigere südliche Rote Meer: unberührte Riffe, Meeresschildkröten und mit etwas Glück Dugongs.",
      aswan: "Der Nil von seiner schönsten Seite: Philae, nubische Dörfer und Feluken im Abendlicht.",
      abusimbel: "Die beiden Felsentempel Ramses' II. am Nassersee, in den 1960er-Jahren Block für Block versetzt.",
    },
  },
  fr: {
    metaTitle: "Dessinez votre voyage en Égypte sur la carte | Kemet",
    metaDescription: "Tracez votre itinéraire en Égypte : touchez les lieux, fixez les nuits, envoyez. Nous répondons par écrit avec un programme privé et un prix.",
    eyebrow: "Dessinez votre voyage", heading: "Tracez votre itinéraire à travers l'Égypte", intro: "Touchez les lieux que vous voulez voir, fixez les nuits et envoyez-nous l'itinéraire. Nous répondons par écrit, avec un vrai programme et un prix.",
    mapLabel: "Carte de l'Égypte — choisissez vos étapes", yourRoute: "Votre itinéraire", empty: "Touchez un lieu sur la carte pour commencer.", nights: "Nuits", dayVisit: "visite à la journée", total: "Total des nuits",
    cruise: "Naviguer sur le Nil entre Louxor et Assouan", wa: "Envoyer sur WhatsApp", mail: "Envoyer par e-mail", note: "Un itinéraire sur mesure est chiffré sur demande. Nous répondons sous un jour ouvré.",
    closest: "Les voyages les plus proches dans notre catalogue", from: "dès", clear: "Recommencer", remove: "Retirer", moreNight: "Une nuit de plus", fewerNight: "Une nuit de moins",
    hello: "Bonjour Kemet — voici l'itinéraire que j'ai en tête :", subject: "Mon itinéraire en Égypte",
    med: "Méditerranée", red: "Mer Rouge",
    pick: "Ou choisissez dans la liste", earlier: "Placer plus tôt",
    stops: { alexandria: "Alexandrie", cairo: "Le Caire & Gizeh", fayoum: "Le Fayoum", siwa: "Oasis de Siwa", luxor: "Louxor", aswan: "Assouan", abusimbel: "Abou Simbel", hurghada: "Hurghada", sharm: "Charm el-Cheikh", matruh: "Marsa Matrouh", portsaid: "Port-Saïd", stcatherine: "Sainte-Catherine", dahab: "Dahab", marsaalam: "Marsa Alam", minya: "Minya", abydos: "Abydos", dendera: "Dendérah", bahariya: "Oasis de Bahariya", kharga: "Kharga & Dakhla" },
    about: {
      alexandria: "La ville de la Méditerranée : la Corniche, la Bibliotheca et la citadelle de Qaitbay, à l'emplacement du Phare.",
      cairo: "Les pyramides et le Sphinx, le Grand Musée égyptien, Le Caire islamique et copte.",
      fayoum: "Une oasis à deux heures du Caire : le lac Qaroun, les cascades du Wadi El Rayan et la Vallée des Baleines.",
      siwa: "Une oasis lointaine près de la Libye : l'oracle d'Amon, des lacs salés et la forteresse de terre de Shali.",
      matruh: "Sable blanc et eau turquoise sur la Méditerranée ; en chemin, les mémoriaux d'El Alamein.",
      portsaid: "Là où le canal de Suez rejoint la Méditerranée, avec son front de mer du XIXe siècle.",
      stcatherine: "Le monastère du VIe siècle au pied du mont Sinaï, et l'ascension au lever du soleil au-dessus.",
      dahab: "Une ville détendue sur le golfe d'Aqaba : le Blue Hole, la plongée sur les récifs et les montagnes du Sinaï derrière.",
      sharm: "Les récifs de la mer Rouge à Ras Mohammed et Tiran, et les resorts de la baie de Naama.",
      hurghada: "La grande côte balnéaire de la mer Rouge : journées en bateau vers les îles, snorkeling et plongée, El Gouna tout près.",
      minya: "La Moyenne-Égypte : les tombes peintes de Beni Hassan et la cité d'Akhenaton à Tell el-Amarna.",
      abydos: "Le temple de Séthi Ier, avec certains des plus beaux reliefs d'Égypte.",
      dendera: "Le temple d'Hathor, aux plafonds encore en couleurs — une journée facile depuis Louxor.",
      luxor: "Karnak et le temple de Louxor sur la rive est ; la Vallée des Rois et le temple d'Hatchepsout sur la rive ouest.",
      kharga: "Les oasis du désert Occidental : le temple d'Hibis, la ville de terre d'Al-Qasr et des sources chaudes.",
      bahariya: "La porte des formations de craie du désert Blanc, et d'une nuit sous les étoiles.",
      marsaalam: "La mer Rouge du sud, plus calme : récifs intacts, tortues marines et, avec de la chance, dugongs.",
      aswan: "Le Nil dans ce qu'il a de plus beau : Philae, les villages nubiens et les felouques au couchant.",
      abusimbel: "Les deux temples rupestres de Ramsès II au bord du lac Nasser, déplacés bloc par bloc dans les années 1960.",
    },
  },
  it: {
    metaTitle: "Disegnate il vostro viaggio in Egitto | Kemet",
    metaDescription: "Tracciate il vostro itinerario in Egitto: toccate i luoghi, scegliete le notti, inviate. Rispondiamo per iscritto con un programma privato e un prezzo.",
    eyebrow: "Disegnate il vostro viaggio", heading: "Tracciate il vostro itinerario in Egitto", intro: "Toccate i luoghi che volete vedere, scegliete le notti e inviateci l'itinerario. Rispondiamo per iscritto, con un programma vero e un prezzo.",
    mapLabel: "Mappa dell'Egitto — scegliete le tappe", yourRoute: "Il vostro itinerario", empty: "Toccate un luogo sulla mappa per cominciare.", nights: "Notti", dayVisit: "visita in giornata", total: "Notti in totale",
    cruise: "Navigare sul Nilo tra Luxor e Assuan", wa: "Invia su WhatsApp", mail: "Invia per e-mail", note: "Un itinerario su misura si quota su richiesta. Rispondiamo entro un giorno lavorativo.",
    closest: "I viaggi più vicini nel nostro catalogo", from: "da", clear: "Ricomincia", remove: "Rimuovi", moreNight: "Una notte in più", fewerNight: "Una notte in meno",
    hello: "Buongiorno Kemet — questo è l'itinerario che ho in mente:", subject: "Il mio itinerario in Egitto",
    med: "Mar Mediterraneo", red: "Mar Rosso",
    pick: "Oppure scegliete dall'elenco", earlier: "Sposta prima",
    stops: { alexandria: "Alessandria", cairo: "Il Cairo e Giza", fayoum: "Fayyum", siwa: "Oasi di Siwa", luxor: "Luxor", aswan: "Assuan", abusimbel: "Abu Simbel", hurghada: "Hurghada", sharm: "Sharm el-Sheikh", matruh: "Marsa Matruh", portsaid: "Porto Said", stcatherine: "Santa Caterina", dahab: "Dahab", marsaalam: "Marsa Alam", minya: "Minya", abydos: "Abido", dendera: "Dendera", bahariya: "Oasi di Bahariya", kharga: "Kharga e Dakhla" },
    about: {
      alexandria: "La città del Mediterraneo: la Corniche, la Bibliotheca e la cittadella di Qaitbay, dove sorgeva il Faro.",
      cairo: "Le piramidi e la Sfinge, il Grand Egyptian Museum, il Cairo islamico e copto.",
      fayoum: "Un'oasi a due ore dal Cairo: il lago Qarun, le cascate di Wadi El Rayan e la Valle delle Balene.",
      siwa: "Un'oasi lontana, vicino alla Libia: l'oracolo di Amon, i laghi salati e la fortezza di fango di Shali.",
      matruh: "Sabbia bianca e acqua turchese sul Mediterraneo; lungo la strada, i sacrari di El Alamein.",
      portsaid: "Dove il canale di Suez incontra il Mediterraneo, con il suo lungomare ottocentesco.",
      stcatherine: "Il monastero del VI secolo ai piedi del monte Sinai, e la salita all'alba sopra di esso.",
      dahab: "Una cittadina rilassata sul golfo di Aqaba: il Blue Hole, le immersioni sul reef e i monti del Sinai alle spalle.",
      sharm: "I reef del Mar Rosso a Ras Mohammed e Tiran, e i resort lungo Naama Bay.",
      hurghada: "La grande costa balneare del Mar Rosso: giornate in barca alle isole, snorkeling e immersioni, con El Gouna a due passi.",
      minya: "Il Medio Egitto: le tombe dipinte di Beni Hasan e la città di Akhenaton a Tell el-Amarna.",
      abydos: "Il tempio di Seti I, con alcuni dei rilievi più raffinati d'Egitto.",
      dendera: "Il tempio di Hathor, con i soffitti ancora a colori — una facile giornata da Luxor.",
      luxor: "Karnak e il tempio di Luxor sulla riva orientale; la Valle dei Re e il tempio di Hatshepsut su quella occidentale.",
      kharga: "Le oasi del Deserto Occidentale: il tempio di Hibis, la città di fango di Al-Qasr e le sorgenti calde.",
      bahariya: "La porta delle formazioni di gesso del Deserto Bianco, e di una notte sotto le stelle.",
      marsaalam: "Il Mar Rosso del sud, più tranquillo: reef intatti, tartarughe marine e, con un po' di fortuna, dugonghi.",
      aswan: "Il Nilo nel suo tratto più bello: File, i villaggi nubiani e le feluche al tramonto.",
      abusimbel: "I due templi rupestri di Ramesse II sul lago Nasser, spostati blocco per blocco negli anni Sessanta.",
    },
  },
  es: {
    metaTitle: "Diseñe su viaje a Egipto en el mapa | Kemet",
    metaDescription: "Trace su propia ruta por Egipto: toque los lugares, elija las noches y envíela. Respondemos por escrito con un itinerario privado y un precio.",
    eyebrow: "Diseñe su viaje", heading: "Trace su ruta por Egipto", intro: "Toque los lugares que quiere ver, elija las noches y envíenos la ruta. Respondemos por escrito, con un itinerario real y un precio.",
    mapLabel: "Mapa de Egipto — elija sus paradas", yourRoute: "Su ruta", empty: "Toque un lugar en el mapa para empezar.", nights: "Noches", dayVisit: "visita de un día", total: "Noches en total",
    cruise: "Navegar por el Nilo entre Luxor y Asuán", wa: "Enviar por WhatsApp", mail: "Enviar por correo", note: "Una ruta propia se presupuesta bajo petición. Respondemos en un día hábil.",
    closest: "Los viajes más parecidos de nuestro catálogo", from: "desde", clear: "Empezar de nuevo", remove: "Quitar", moreNight: "Una noche más", fewerNight: "Una noche menos",
    hello: "Hola Kemet — esta es la ruta que tengo en mente:", subject: "Mi ruta por Egipto",
    med: "Mar Mediterráneo", red: "Mar Rojo",
    pick: "O elija de la lista", earlier: "Mover antes",
    stops: { alexandria: "Alejandría", cairo: "El Cairo y Guiza", fayoum: "El Fayum", siwa: "Oasis de Siwa", luxor: "Luxor", aswan: "Asuán", abusimbel: "Abu Simbel", hurghada: "Hurghada", sharm: "Sharm el-Sheikh", matruh: "Marsa Matruh", portsaid: "Puerto Saíd", stcatherine: "Santa Catalina", dahab: "Dahab", marsaalam: "Marsa Alam", minya: "Minia", abydos: "Abidos", dendera: "Dendera", bahariya: "Oasis de Bahariya", kharga: "Jarga y Dajla" },
    about: {
      alexandria: "La ciudad del Mediterráneo: la Corniche, la Bibliotheca y la ciudadela de Qaitbay, donde se alzó el Faro.",
      cairo: "Las pirámides y la Esfinge, el Gran Museo Egipcio, El Cairo islámico y copto.",
      fayoum: "Un oasis a dos horas de El Cairo: el lago Qarun, las cascadas de Wadi El Rayan y el Valle de las Ballenas.",
      siwa: "Un oasis lejano, cerca de Libia: el oráculo de Amón, lagos salados y la fortaleza de adobe de Shali.",
      matruh: "Arena blanca y agua turquesa en el Mediterráneo; de camino, los memoriales de El Alamein.",
      portsaid: "Donde el canal de Suez se encuentra con el Mediterráneo, con su paseo marítimo del siglo XIX.",
      stcatherine: "El monasterio del siglo VI al pie del monte Sinaí, y la subida al amanecer sobre él.",
      dahab: "Un pueblo tranquilo en el golfo de Áqaba: el Blue Hole, buceo en arrecifes y las montañas del Sinaí detrás.",
      sharm: "Los arrecifes del mar Rojo en Ras Mohammed y Tirán, y los resorts de la bahía de Naama.",
      hurghada: "La gran costa de resorts del mar Rojo: días de barco a las islas, esnórquel y buceo, con El Gouna al lado.",
      minya: "El Egipto Medio: las tumbas pintadas de Beni Hasan y la ciudad de Akenatón en Tell el-Amarna.",
      abydos: "El templo de Seti I, con algunos de los relieves más finos de Egipto.",
      dendera: "El templo de Hathor, con los techos aún en color — una excursión fácil desde Luxor.",
      luxor: "Karnak y el templo de Luxor en la orilla oriental; el Valle de los Reyes y el templo de Hatshepsut en la occidental.",
      kharga: "Los oasis del Desierto Occidental: el templo de Hibis, la ciudad de adobe de Al-Qasr y aguas termales.",
      bahariya: "La puerta a las formaciones de creta del Desierto Blanco, y a una noche bajo las estrellas.",
      marsaalam: "El mar Rojo del sur, más tranquilo: arrecifes intactos, tortugas marinas y, con suerte, dugongos.",
      aswan: "El Nilo en su tramo más bello: File, las aldeas nubias y las falucas al atardecer.",
      abusimbel: "Los dos templos excavados en la roca de Ramsés II junto al lago Nasser, trasladados bloque a bloque en los años sesenta.",
    },
  },
  pt: {
    metaTitle: "Desenhe a sua viagem ao Egito no mapa | Kemet",
    metaDescription: "Trace o seu roteiro pelo Egito: toquem nos lugares, escolham as noites e enviem. Respondemos por escrito com um roteiro privativo e um preço.",
    eyebrow: "Desenhe a sua viagem", heading: "Trace o seu roteiro pelo Egito", intro: "Toquem nos lugares que querem ver, escolham as noites e enviem o roteiro. Respondemos por escrito, com um roteiro de verdade e um preço.",
    mapLabel: "Mapa do Egito — escolham as paradas", yourRoute: "O seu roteiro", empty: "Toquem em um lugar do mapa para começar.", nights: "Noites", dayVisit: "visita de um dia", total: "Total de noites",
    cruise: "Navegar pelo Nilo entre Luxor e Assuã", wa: "Enviar pelo WhatsApp", mail: "Enviar por e-mail", note: "Um roteiro próprio é orçado sob consulta. Respondemos em um dia útil.",
    closest: "As viagens mais próximas do nosso catálogo", from: "a partir de", clear: "Recomeçar", remove: "Remover", moreNight: "Uma noite a mais", fewerNight: "Uma noite a menos",
    hello: "Olá, Kemet — este é o roteiro que tenho em mente:", subject: "Meu roteiro pelo Egito",
    med: "Mar Mediterrâneo", red: "Mar Vermelho",
    pick: "Ou escolham na lista", earlier: "Mover para antes",
    stops: { alexandria: "Alexandria", cairo: "Cairo e Gizé", fayoum: "Faium", siwa: "Oásis de Siwa", luxor: "Luxor", aswan: "Assuã", abusimbel: "Abu Simbel", hurghada: "Hurghada", sharm: "Sharm el-Sheikh", matruh: "Marsa Matruh", portsaid: "Porto Said", stcatherine: "Santa Catarina", dahab: "Dahab", marsaalam: "Marsa Alam", minya: "Minia", abydos: "Abidos", dendera: "Dendera", bahariya: "Oásis de Bahariya", kharga: "Kharga e Dakhla" },
    about: {
      alexandria: "A cidade do Mediterrâneo: a Corniche, a Bibliotheca e a cidadela de Qaitbay, onde ficava o Farol.",
      cairo: "As pirâmides e a Esfinge, o Grande Museu Egípcio, o Cairo islâmico e copta.",
      fayoum: "Um oásis a duas horas do Cairo: o lago Qarun, as cachoeiras de Wadi El Rayan e o Vale das Baleias.",
      siwa: "Um oásis distante, perto da Líbia: o oráculo de Amon, lagos salgados e a fortaleza de barro de Shali.",
      matruh: "Areia branca e água turquesa no Mediterrâneo; no caminho, os memoriais de El Alamein.",
      portsaid: "Onde o canal de Suez encontra o Mediterrâneo, com a sua orla do século XIX.",
      stcatherine: "O mosteiro do século VI aos pés do monte Sinai, e a subida ao nascer do sol acima dele.",
      dahab: "Uma cidade tranquila no golfo de Aqaba: o Blue Hole, mergulho nos recifes e as montanhas do Sinai ao fundo.",
      sharm: "Os recifes do Mar Vermelho em Ras Mohammed e Tiran, e os resorts de Naama Bay.",
      hurghada: "A grande costa de resorts do Mar Vermelho: dias de barco às ilhas, snorkel e mergulho, com El Gouna ao lado.",
      minya: "O Médio Egito: os túmulos pintados de Beni Hasan e a cidade de Akhenaton em Tell el-Amarna.",
      abydos: "O templo de Seti I, com alguns dos relevos mais refinados do Egito.",
      dendera: "O templo de Hathor, com os tetos ainda coloridos — um bate-volta fácil saindo de Luxor.",
      luxor: "Karnak e o Templo de Luxor na margem leste; o Vale dos Reis e o templo de Hatshepsut na margem oeste.",
      kharga: "Os oásis do Deserto Ocidental: o templo de Hibis, a cidade de barro de Al-Qasr e fontes termais.",
      bahariya: "A porta para as formações de calcário do Deserto Branco, e para uma noite sob as estrelas.",
      marsaalam: "O Mar Vermelho do sul, mais tranquilo: recifes intocados, tartarugas marinhas e, com sorte, dugongos.",
      aswan: "O Nilo no seu trecho mais bonito: Filae, as aldeias núbias e as faluas ao pôr do sol.",
      abusimbel: "Os dois templos escavados na rocha de Ramsés II à beira do lago Nasser, transferidos bloco a bloco nos anos 1960.",
    },
  },
  ru: {
    metaTitle: "Составьте маршрут по Египту на карте | Kemet",
    metaDescription: "Проложите свой маршрут по Египту: отметьте места, задайте ночи и отправьте нам. Мы ответим письменно — с индивидуальной программой и ценой.",
    eyebrow: "Составьте своё путешествие", heading: "Проложите маршрут по Египту", intro: "Отметьте места, которые хотите увидеть, задайте число ночей и отправьте нам маршрут. Мы ответим письменно — с настоящей программой и ценой.",
    mapLabel: "Карта Египта — выберите остановки", yourRoute: "Ваш маршрут", empty: "Нажмите на место на карте, чтобы начать.", nights: "Ночей", dayVisit: "визит на день", total: "Всего ночей",
    cruise: "Пройти по Нилу между Луксором и Асуаном", wa: "Отправить в WhatsApp", mail: "Отправить по почте", note: "Собственный маршрут рассчитывается по запросу. Отвечаем в течение одного рабочего дня.",
    closest: "Самые близкие путешествия из нашего каталога", from: "от", clear: "Начать заново", remove: "Убрать", moreNight: "На ночь больше", fewerNight: "На ночь меньше",
    hello: "Здравствуйте, Kemet — вот маршрут, который я задумал(а):", subject: "Мой маршрут по Египту",
    med: "Средиземное море", red: "Красное море",
    pick: "Или выберите из списка", earlier: "Переместить раньше",
    stops: { alexandria: "Александрия", cairo: "Каир и Гиза", fayoum: "Файюм", siwa: "Оазис Сива", luxor: "Луксор", aswan: "Асуан", abusimbel: "Абу-Симбел", hurghada: "Хургада", sharm: "Шарм-эш-Шейх", matruh: "Марса-Матрух", portsaid: "Порт-Саид", stcatherine: "Святая Екатерина", dahab: "Дахаб", marsaalam: "Марса-Алам", minya: "Эль-Минья", abydos: "Абидос", dendera: "Дендера", bahariya: "Оазис Бахария", kharga: "Харга и Дахла" },
    about: {
      alexandria: "Город на Средиземном море: набережная Корниш, Александрийская библиотека и цитадель Кайтбей на месте Фаросского маяка.",
      cairo: "Пирамиды и Сфинкс, Большой Египетский музей, исламский и коптский Каир.",
      fayoum: "Оазис в двух часах от Каира: озеро Карун, водопады Вади-эль-Райян и Долина китов.",
      siwa: "Далёкий оазис у ливийской границы: оракул Амона, солёные озёра и глинобитная крепость Шали.",
      matruh: "Белый песок и бирюзовая вода Средиземного моря; по дороге — мемориалы Эль-Аламейна.",
      portsaid: "Там, где Суэцкий канал выходит в Средиземное море, — с набережной XIX века.",
      stcatherine: "Монастырь VI века у подножия горы Синай и подъём на вершину к рассвету.",
      dahab: "Спокойный городок на берегу залива Акаба: Голубая дыра, дайвинг на рифах и горы Синая за спиной.",
      sharm: "Рифы Красного моря у Рас-Мохаммеда и Тирана и курорты бухты Наама-Бей.",
      hurghada: "Главное курортное побережье Красного моря: морские прогулки к островам, снорклинг и дайвинг, рядом Эль-Гуна.",
      minya: "Средний Египет: расписные гробницы Бени-Хасана и город Эхнатона в Телль-эль-Амарне.",
      abydos: "Храм Сети I с одними из самых тонких рельефов Египта.",
      dendera: "Храм Хатхор, потолки которого сохранили цвет, — лёгкая поездка на день из Луксора.",
      luxor: "Карнак и Луксорский храм на восточном берегу; Долина царей и храм Хатшепсут на западном.",
      kharga: "Оазисы Западной пустыни: храм Хибис, глинобитный город Аль-Каср и горячие источники.",
      bahariya: "Ворота к меловым скалам Белой пустыни — и к ночи под звёздами.",
      marsaalam: "Более тихий юг Красного моря: нетронутые рифы, морские черепахи и, если повезёт, дюгони.",
      aswan: "Нил во всей красе: Филе, нубийские деревни и фелюги на закате.",
      abusimbel: "Два скальных храма Рамсеса II на берегу озера Насер, перенесённые блок за блоком в 1960-х.",
    },
  },
  id: {
    metaTitle: "Rancang Perjalanan Mesir Anda di Peta | Kemet",
    metaDescription: "Gambar rute Anda sendiri di Mesir: ketuk tempatnya, tentukan malamnya, lalu kirim. Kami membalas tertulis dengan rencana perjalanan privat dan harganya.",
    eyebrow: "Rancang perjalanan Anda", heading: "Gambar rute Anda melintasi Mesir", intro: "Ketuk tempat yang ingin Anda lihat, tentukan jumlah malam, lalu kirimkan rutenya. Kami membalas secara tertulis, dengan rencana perjalanan nyata dan harganya.",
    mapLabel: "Peta Mesir — pilih persinggahan Anda", yourRoute: "Rute Anda", empty: "Ketuk satu tempat di peta untuk memulai.", nights: "Malam", dayVisit: "kunjungan sehari", total: "Jumlah malam",
    cruise: "Berlayar di Sungai Nil antara Luxor dan Aswan", wa: "Kirim lewat WhatsApp", mail: "Kirim lewat email", note: "Rute buatan sendiri dihitung atas permintaan. Kami membalas dalam satu hari kerja.",
    closest: "Perjalanan terdekat dalam katalog kami", from: "mulai", clear: "Mulai lagi", remove: "Hapus", moreNight: "Tambah satu malam", fewerNight: "Kurangi satu malam",
    hello: "Halo Kemet — inilah rute yang saya inginkan:", subject: "Rute saya di Mesir",
    med: "Laut Tengah", red: "Laut Merah",
    pick: "Atau pilih dari daftar", earlier: "Pindahkan lebih awal",
    stops: { alexandria: "Aleksandria", cairo: "Kairo & Giza", fayoum: "Fayoum", siwa: "Oasis Siwa", luxor: "Luxor", aswan: "Aswan", abusimbel: "Abu Simbel", hurghada: "Hurghada", sharm: "Sharm El Sheikh", matruh: "Marsa Matruh", portsaid: "Port Said", stcatherine: "Santa Katarina", dahab: "Dahab", marsaalam: "Marsa Alam", minya: "Minya", abydos: "Abydos", dendera: "Dendera", bahariya: "Oasis Bahariya", kharga: "Kharga & Dakhla" },
    about: {
      alexandria: "Kota di tepi Laut Tengah: Corniche, Bibliotheca, dan Benteng Qaitbay di lokasi bekas Mercusuar Pharos.",
      cairo: "Piramida dan Sphinx, Grand Egyptian Museum, serta Kairo Islam dan Koptik.",
      fayoum: "Oasis dua jam dari Kairo: Danau Qarun, air terjun Wadi El Rayan, dan Lembah Paus.",
      siwa: "Oasis jauh di dekat Libya: Orakel Amun, danau-danau garam, dan benteng lumpur Shali.",
      matruh: "Pasir putih dan air biru kehijauan di Laut Tengah; di perjalanan, tugu-tugu peringatan El Alamein.",
      portsaid: "Tempat Terusan Suez bertemu Laut Tengah, dengan tepi laut dari abad ke-19.",
      stcatherine: "Biara abad ke-6 di kaki Gunung Sinai, dan pendakian menyambut matahari terbit di atasnya.",
      dahab: "Kota santai di Teluk Aqaba: Blue Hole, penyelaman terumbu, dan pegunungan Sinai di belakangnya.",
      sharm: "Terumbu Laut Merah di Ras Mohammed dan Tiran, serta resor-resor di sepanjang Naama Bay.",
      hurghada: "Pantai resor utama Laut Merah: wisata perahu ke pulau-pulau, snorkeling dan menyelam, dengan El Gouna di dekatnya.",
      minya: "Mesir Tengah: makam berlukis Beni Hasan dan kota Akhenaten di Tell el-Amarna.",
      abydos: "Kuil Seti I, dengan beberapa relief terhalus di Mesir.",
      dendera: "Kuil Hathor, dengan langit-langit yang masih berwarna — kunjungan sehari yang mudah dari Luxor.",
      luxor: "Karnak dan Kuil Luxor di Tepi Timur; Lembah Para Raja dan Kuil Hatshepsut di Tepi Barat.",
      kharga: "Oasis-oasis Gurun Barat: Kuil Hibis, kota lumpur Al-Qasr, dan mata air panas.",
      bahariya: "Gerbang menuju formasi kapur Gurun Putih, dan semalam di bawah bintang.",
      marsaalam: "Laut Merah bagian selatan yang lebih tenang: terumbu yang masih alami, penyu, dan — bila beruntung — dugong.",
      aswan: "Sungai Nil di bagian terindahnya: Philae, desa-desa Nubia, dan felucca saat matahari terbenam.",
      abusimbel: "Dua kuil cadas Ramses II di tepi Danau Nasser, dipindahkan balok demi balok pada 1960-an.",
    },
  },
  ms: {
    metaTitle: "Reka Perjalanan Mesir Anda pada Peta | Kemet",
    metaDescription: "Lukis laluan anda sendiri di Mesir: ketik tempatnya, tetapkan malamnya, kemudian hantar. Kami membalas bertulis dengan jadual persendirian dan harganya.",
    eyebrow: "Reka perjalanan anda", heading: "Lukis laluan anda merentasi Mesir", intro: "Ketik tempat yang ingin anda lihat, tetapkan bilangan malam, kemudian hantar laluannya. Kami membalas secara bertulis, dengan jadual perjalanan sebenar dan harganya.",
    mapLabel: "Peta Mesir — pilih persinggahan anda", yourRoute: "Laluan anda", empty: "Ketik satu tempat pada peta untuk bermula.", nights: "Malam", dayVisit: "lawatan sehari", total: "Jumlah malam",
    cruise: "Belayar di Sungai Nil antara Luxor dan Aswan", wa: "Hantar melalui WhatsApp", mail: "Hantar melalui e-mel", note: "Laluan rekaan sendiri dikira atas permintaan. Kami membalas dalam satu hari bekerja.",
    closest: "Perjalanan paling hampir dalam katalog kami", from: "dari", clear: "Mula semula", remove: "Buang", moreNight: "Tambah satu malam", fewerNight: "Kurang satu malam",
    hello: "Helo Kemet — inilah laluan yang saya inginkan:", subject: "Laluan saya di Mesir",
    med: "Laut Mediterranean", red: "Laut Merah",
    pick: "Atau pilih daripada senarai", earlier: "Alihkan lebih awal",
    stops: { alexandria: "Alexandria", cairo: "Kaherah & Giza", fayoum: "Fayoum", siwa: "Oasis Siwa", luxor: "Luxor", aswan: "Aswan", abusimbel: "Abu Simbel", hurghada: "Hurghada", sharm: "Sharm El Sheikh", matruh: "Marsa Matruh", portsaid: "Port Said", stcatherine: "Saint Catherine", dahab: "Dahab", marsaalam: "Marsa Alam", minya: "Minya", abydos: "Abydos", dendera: "Dendera", bahariya: "Oasis Bahariya", kharga: "Kharga & Dakhla" },
    about: {
      alexandria: "Kota di tepi Laut Mediterranean: Corniche, Bibliotheca dan Kubu Qaitbay di tapak Rumah Api Pharos.",
      cairo: "Piramid dan Sphinx, Grand Egyptian Museum, serta Kaherah Islam dan Koptik.",
      fayoum: "Oasis dua jam dari Kaherah: Tasik Qarun, air terjun Wadi El Rayan dan Lembah Paus.",
      siwa: "Oasis terpencil berhampiran Libya: Orakel Amun, tasik-tasik garam dan kubu lumpur Shali.",
      matruh: "Pasir putih dan air biru kehijauan di Laut Mediterranean; dalam perjalanan, tugu peringatan El Alamein.",
      portsaid: "Tempat Terusan Suez bertemu Laut Mediterranean, dengan tepi lautnya dari abad ke-19.",
      stcatherine: "Biara abad ke-6 di kaki Gunung Sinai, dan pendakian menyambut matahari terbit di atasnya.",
      dahab: "Pekan santai di Teluk Aqaba: Blue Hole, selaman terumbu dan pergunungan Sinai di belakangnya.",
      sharm: "Terumbu Laut Merah di Ras Mohammed dan Tiran, serta resort di sepanjang Naama Bay.",
      hurghada: "Pantai resort utama Laut Merah: lawatan bot ke pulau-pulau, snorkeling dan selam skuba, dengan El Gouna berdekatan.",
      minya: "Mesir Tengah: makam berlukis Beni Hasan dan kota Akhenaten di Tell el-Amarna.",
      abydos: "Kuil Seti I, dengan antara ukiran timbul terhalus di Mesir.",
      dendera: "Kuil Hathor, dengan siling yang masih berwarna — lawatan sehari yang mudah dari Luxor.",
      luxor: "Karnak dan Kuil Luxor di Tebing Timur; Lembah Raja-Raja dan Kuil Hatshepsut di Tebing Barat.",
      kharga: "Oasis-oasis Gurun Barat: Kuil Hibis, pekan lumpur Al-Qasr dan mata air panas.",
      bahariya: "Pintu masuk ke formasi kapur Gurun Putih, dan semalam di bawah bintang.",
      marsaalam: "Laut Merah selatan yang lebih tenang: terumbu yang belum terusik, penyu dan — jika bernasib baik — dugong.",
      aswan: "Sungai Nil pada bahagian terindahnya: Philae, kampung-kampung Nubia dan felucca ketika matahari terbenam.",
      abusimbel: "Dua kuil batu Ramses II di tepi Tasik Nasser, dipindahkan blok demi blok pada 1960-an.",
    },
  },
  ar: {
    metaTitle: "صمّموا رحلتكم إلى مصر على الخريطة | كيميت",
    metaDescription: "ارسموا مساركم في مصر: اضغطوا على الأماكن، حدّدوا الليالي، وأرسلوا المسار. نرد كتابةً ببرنامج خاص وسعر.",
    eyebrow: "صمّموا رحلتكم", heading: "ارسموا مساركم على خريطة مصر", intro: "اضغطوا على الأماكن التي تودّون زيارتها، وحدّدوا عدد الليالي، ثم أرسلوا لنا المسار. نرد كتابةً ببرنامج حقيقي وسعر.",
    mapLabel: "خريطة مصر — اختاروا محطاتكم", yourRoute: "مساركم", empty: "اضغطوا على مكان في الخريطة للبدء.", nights: "الليالي", dayVisit: "زيارة ليوم واحد", total: "مجموع الليالي",
    cruise: "الإبحار في النيل بين الأقصر وأسوان", wa: "إرسال عبر واتساب", mail: "إرسال بالبريد الإلكتروني", note: "المسار الخاص يُسعَّر عند الطلب. نرد خلال يوم عمل واحد.",
    closest: "أقرب الرحلات في برامجنا", from: "من", clear: "البدء من جديد", remove: "حذف", moreNight: "ليلة إضافية", fewerNight: "ليلة أقل",
    hello: "مرحبًا كيميت — هذا هو المسار الذي أفكر فيه:", subject: "مساري في مصر",
    med: "البحر المتوسط", red: "البحر الأحمر",
    pick: "أو اختاروا من القائمة", earlier: "تقديم المحطة",
    stops: { alexandria: "الإسكندرية", cairo: "القاهرة والجيزة", fayoum: "الفيوم", siwa: "واحة سيوة", luxor: "الأقصر", aswan: "أسوان", abusimbel: "أبو سمبل", hurghada: "الغردقة", sharm: "شرم الشيخ", matruh: "مرسى مطروح", portsaid: "بورسعيد", stcatherine: "سانت كاترين", dahab: "دهب", marsaalam: "مرسى علم", minya: "المنيا", abydos: "أبيدوس", dendera: "دندرة", bahariya: "الواحات البحرية", kharga: "الخارجة والداخلة" },
    about: {
      alexandria: "مدينة البحر المتوسط: الكورنيش، ومكتبة الإسكندرية، وقلعة قايتباي في موضع فنار فاروس.",
      cairo: "الأهرامات وأبو الهول، والمتحف المصري الكبير، والقاهرة الإسلامية والقبطية.",
      fayoum: "واحة على بُعد ساعتين من القاهرة: بحيرة قارون، وشلالات وادي الريان، ووادي الحيتان.",
      siwa: "واحة بعيدة قرب ليبيا: معبد وحي آمون، والبحيرات المالحة، وقلعة شالي الطينية.",
      matruh: "رمال بيضاء ومياه فيروزية على البحر المتوسط، وفي الطريق مقابر العلمين التذكارية.",
      portsaid: "حيث تلتقي قناة السويس بالبحر المتوسط، بواجهتها البحرية من القرن التاسع عشر.",
      stcatherine: "دير من القرن السادس عند سفح جبل سيناء، والصعود لرؤية الشروق من فوقه.",
      dahab: "مدينة هادئة على خليج العقبة: البلو هول، والغوص بين الشعاب، وجبال سيناء من خلفها.",
      sharm: "شعاب البحر الأحمر في رأس محمد وتيران، والمنتجعات على خليج نعمة.",
      hurghada: "ساحل المنتجعات الرئيسي على البحر الأحمر: رحلات بحرية إلى الجزر، وسنوركلينج وغوص، والجونة بجوارها.",
      minya: "مصر الوسطى: مقابر بني حسن الملوّنة، ومدينة إخناتون في تل العمارنة.",
      abydos: "معبد سيتي الأول، وفيه من أدق النقوش البارزة في مصر.",
      dendera: "معبد حتحور بسقوفه التي ما زالت تحتفظ بألوانها — رحلة يوم سهلة من الأقصر.",
      luxor: "الكرنك ومعبد الأقصر في البر الشرقي، ووادي الملوك ومعبد حتشبسوت في البر الغربي.",
      kharga: "واحات الصحراء الغربية: معبد هيبس، وبلدة القصر الطينية، والعيون الساخنة.",
      bahariya: "بوابة تكوينات الصحراء البيضاء الطباشيرية، وليلة تحت النجوم.",
      marsaalam: "جنوب البحر الأحمر الأهدأ: شعاب بِكر، وسلاحف بحرية، ومع شيء من الحظ عرائس البحر.",
      aswan: "النيل في أجمل صوره: فيلة، والقرى النوبية، والفلوكات وقت الغروب.",
      abusimbel: "معبدا رمسيس الثاني المنحوتان في الصخر على بحيرة ناصر، وقد نُقلا حجرًا حجرًا في ستينيات القرن العشرين.",
    },
  },
};

/** Where the map lives in each language (config/translation-groups.json → "design-journey"). */
export const MAP_ROUTE: Record<SiteLocale, string> = {
  en: "design-your-journey.html",
  de: "de/reise-auf-der-karte-entwerfen.html",
  it: "it/disegna-il-tuo-viaggio-in-egitto.html",
  es: "es/disene-su-viaje-a-egipto.html",
  fr: "fr/dessinez-votre-voyage-en-egypte.html",
  ru: "ru/sostavte-marshrut-po-egiptu.html",
  id: "id/rancang-perjalanan-mesir.html",
  ms: "ms/reka-perjalanan-mesir.html",
  pt: "pt/desenhe-sua-viagem-ao-egito.html",
  ar: "ar/sammem-rehlatak-fi-masr.html",
};

/** The destination page for each stop (data/destinations.ts). Those pages are English only for now, so only the English map links to them. */
export const STOP_PAGE: Record<StopKey, string> = {
  alexandria: "alexandria", matruh: "marsa-matruh-north-coast", portsaid: "port-said", cairo: "cairo", fayoum: "fayoum", siwa: "siwa",
  bahariya: "bahariya-white-desert", minya: "minya", kharga: "kharga-dakhla-oases", stcatherine: "saint-catherine", dahab: "dahab",
  sharm: "sharm-el-sheikh", hurghada: "hurghada", marsaalam: "marsa-alam", abydos: "dendera-abydos", dendera: "dendera-abydos",
  luxor: "luxor", aswan: "aswan", abusimbel: "abu-simbel",
};
