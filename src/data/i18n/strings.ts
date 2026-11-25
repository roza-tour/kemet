// ---------------------------------------------------------------------------
// Short strings every translated page needs and no single page owns: image
// descriptions for photographs shared with the English catalogue, a handful
// of interface labels, and the four-day Nile cruise as each language's cruise
// page presents it.
//
// GENERATED from the translators' files on 25 Nov 2026 (one translator per
// language, checked for the same keys and counts). Edit a string here; add a
// KEY in every language at once, because `LocalStrings` requires them all.
//
// `alts` is keyed by the English alt text. That is deliberate: the
// photographs belong to English records (a journey's hero, a programme's
// photograph, a card), and the lookup `localAlt(locale, alt)` lets every
// template that borrows one show it in the page's language without each
// record growing nine more fields. An alt with no entry falls back to the
// English, and the build lists those so they are not missed (see localAlt).
// ---------------------------------------------------------------------------
import type { TranslatedLocale, SiteLocale } from "@/config/i18n";

export interface LocalStrings {
  alts: Record<string, string>;
  ogAlt: string;
  cruise: {
    /** The cruise as its page in this language is headed ("Die Nilkreuzfahrt"). */
    name: string;
    durationLabel: string;
    days: Array<{ title: string; items: string[] }>;
    productHeading: string;
    productLede: string;
  };
  ui: {
    /** "%p per person for two travellers" — %p is the formatted price. */
    priceForTwo: string;
    /** The flight version of a journey with sleeper-train nights; %p is its price. */
    flyVersion: string;
    monthByMonth: string;
    compareOptions: string;
    byOccasion: string;
    travelGuides: string;
    ariaBreadcrumb: string;
    ariaLanguage: string;
    ariaLanguageFooter: string;
    ariaMainNav: string;
    email: string;
    /** Opening words of the WhatsApp message the MCP server pre-fills. */
    mcpHello: string;
    /** The same, naming a journey: %s is its name. */
    mcpAbout: string;
  };
}

/** The English of the same labels, for the English pages and as the fallback. */
export const EN_STRINGS: LocalStrings["ui"] & { ogAlt: string } = {
  "priceForTwo": "%p per person for two travellers",
  "flyVersion": "With domestic flights instead of the two sleeper-train nights, and those nights in hotels: %p per person",
  "monthByMonth": "Month by month",
  "compareOptions": "Compare the options",
  "byOccasion": "By occasion",
  "travelGuides": "Travel guides",
  "ariaBreadcrumb": "Breadcrumb",
  "ariaLanguage": "Language",
  "ariaLanguageFooter": "Language (footer)",
  "ariaMainNav": "Main menu",
  "email": "Email",
  "mcpHello": "Hello Kemet.",
  "mcpAbout": "Hello Kemet — I am asking about \"%s\".",
  "ogAlt": "Kemet — luxury private Egypt travel"
};

export const LOCAL_STRINGS: Record<TranslatedLocale, LocalStrings> = {
  "de": {
    "alts": {
      "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea": "Eine Schale Ful Medames mit Tomate und Kräutern, dazu Zitrone und ein Glas Tee",
      "A colossus of Ramesses II at the entrance of Luxor Temple": "Ein Koloss Ramses' II. am Eingang des Luxor-Tempels",
      "A decorated camel resting before the Pyramids of Giza in early light": "Ein geschmücktes Kamel ruht im frühen Licht vor den Pyramiden von Gizeh",
      "A jetty reaching over turquoise water to an island near Hurghada": "Ein Steg führt über türkisfarbenes Wasser zu einer Insel bei Hurghada",
      "A painted royal tomb in the Valley of the Kings, Luxor": "Ein bemaltes Königsgrab im Tal der Könige, Luxor",
      "A scuba diver beside a vivid Red Sea coral reef teeming with fish": "Ein Taucher neben einem farbenprächtigen Korallenriff im Roten Meer voller Fische",
      "A stone-paved lane of Islamic Cairo glowing with lanterns at night": "Eine steingepflasterte Gasse im islamischen Kairo, nachts von Laternen erleuchtet",
      "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh": "Ein strohgedecktes Strandcamp über den flachen Korallenriffen des Roten Meeres bei Scharm el-Scheich",
      "Brightly decorated Nubian boats moored on the Nile at Aswan": "Bunt bemalte nubische Boote am Nilufer bei Assuan",
      "Fortified walls, bell tower and cypress garden of Saint Catherine's Monastery below a granite slope": "Festungsmauern, Glockenturm und Zypressengarten des Katharinenklosters unterhalb eines Granithangs",
      "Green sea turtle grazing on a seagrass meadow underwater at Abu Dabbab, Marsa Alam": "Eine Grüne Meeresschildkröte weidet unter Wasser eine Seegraswiese bei Abu Dabbab, Marsa Alam ab",
      "Hathor-headed columns and blue painted ceiling in the hypostyle hall of the Temple of Hathor at Dendera": "Hathor-Säulen und blau bemalte Decke in der Säulenhalle des Hathor-Tempels von Dendera",
      "Hot-air balloons drifting over the West Bank of Luxor at dawn": "Heißluftballons schweben im Morgengrauen über dem Westufer von Luxor",
      "Kemet guests jumping for joy above the Giza pyramid panorama": "Gäste von Kemet springen vor dem Panorama der Pyramiden von Gizeh vor Freude in die Luft",
      "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions": "Koschari: Nudeln, Linsen, Kichererbsen und knusprige Röstzwiebeln, übergossen mit Tomatensauce",
      "Layered red granite ridges of the Sinai mountains at sunrise seen from Mount Sinai": "Gestaffelte Kämme aus rotem Granit im Sinai-Gebirge bei Sonnenaufgang, vom Berg Sinai aus gesehen",
      "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri": "Osirispfeilerstatuen der Hatschepsut auf der oberen Terrasse ihres Tempels in Deir el-Bahari",
      "Rounded white chalk formations rising from sand in Egypt's White Desert in low sunlight": "Runde weiße Kalksteinformationen ragen im tiefen Sonnenlicht aus dem Sand der Weißen Wüste Ägyptens",
      "The Great Pyramid of Khufu on the Giza plateau": "Die Große Pyramide des Cheops auf dem Plateau von Gizeh",
      "The Great Sphinx of Giza facing the dawn": "Die Große Sphinx von Gizeh im Morgengrauen",
      "The Great Sphinx of Giza with a pyramid rising behind it": "Die Große Sphinx von Gizeh mit einer Pyramide im Hintergrund",
      "The Magic Lake and desert dunes of the Fayoum oasis under a wide sky": "Der Magische See und die Wüstendünen der Oase Fayyum unter weitem Himmel",
      "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo": "Die Muhammad-Ali-Moschee krönt die Saladin-Zitadelle in Kairo",
      "The Nile and desert hills framed through an ancient temple doorway at Aswan": "Der Nil und Wüstenhügel, gerahmt von einem antiken Tempeltor bei Assuan",
      "The Red Pyramid of Dahshur under a clear desert sky": "Die Rote Pyramide von Dahschur unter klarem Wüstenhimmel",
      "The Roman Amphitheatre at Kom el-Dikka in Alexandria": "Das römische Amphitheater von Kom el-Dikka in Alexandria",
      "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument": "Die Stufenpyramide des Djoser in Sakkara, das älteste Steinbauwerk der Welt",
      "The ancient Mosque of Amr ibn al-As in Old Cairo": "Die alte Amr-ibn-al-As-Moschee in Alt-Kairo",
      "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel": "Die vier sitzenden Kolosse Ramses' II. am Großen Tempel von Abu Simbel",
      "The grand hall of the Egyptian Museum in Cairo": "Die große Halle des Ägyptischen Museums in Kairo",
      "The great hypostyle hall of Karnak Temple in Luxor": "Die große Säulenhalle des Karnak-Tempels in Luxor",
      "The island Temple of Philae rising from the Nile near Aswan": "Der Inseltempel von Philae erhebt sich aus dem Nil bei Assuan",
      "The lighthouse on the Alexandria seafront on the Mediterranean": "Der Leuchtturm an der Uferpromenade von Alexandria am Mittelmeer",
      "The mud-brick fortress of Shali rising above Siwa Oasis": "Die Lehmziegelfestung Schali erhebt sich über der Oase Siwa",
      "The seafront Montaza Palace and its gardens in Alexandria": "Der Montaza-Palast und seine Gärten an der Küste von Alexandria",
      "The shaded deck of a Nile dahabiya, set for a private party": "Das schattige Deck einer Nil-Dahabije, für eine private Feier gedeckt",
      "The teak sun-deck of a Nile cruise vessel set for the day": "Das Teak-Sonnendeck eines Nilkreuzfahrtschiffs, für den Tag hergerichtet",
      "The two rock temples of Abu Simbel above Lake Nasser": "Die beiden Felsentempel von Abu Simbel über dem Nassersee",
      "Turquoise salt lake with a white salt-crusted shore in Siwa Oasis": "Ein türkisfarbener Salzsee mit weißem Salzrand am Ufer in der Oase Siwa"
    },
    "ogAlt": "Kemet — private Luxusreisen durch Ägypten",
    "cruise": {
      "name": "Die Nilkreuzfahrt",
"durationLabel": "4 Tage / 3 Nächte",
      "days": [
        {
          "title": "Assuan — Philae, Hochdamm & Einschiffung",
          "items": [
            "Private Begrüßung in Assuan und Besuch des Hochdamms und des Unvollendeten Obelisken am Vormittag",
            "Mit dem Motorboot zum Inseltempel von Philae, dem Heiligtum der Isis",
            "Einschiffung vor dem Mittagessen; Nachmittag zur freien Verfügung auf dem Sonnendeck"
          ]
        },
        {
          "title": "Kom Ombo & Edfu",
          "items": [
            "Am Morgen Fahrt nach Kom Ombo und zu seinem Doppeltempel über dem Flussufer",
            "Weiter nach Edfu — der Horus-Tempel, der besterhaltene Tempel Ägyptens",
            "Abend an Bord, während das Schiff unterhalb der Tempelstadt anlegt"
          ]
        },
        {
          "title": "Die Schleuse von Esna & Ankunft in Luxor",
          "items": [
            "Durchfahrt durch die Schleuse von Esna, während sich das Tal Richtung Theben weitet",
            "Ankunft in Luxor am Nachmittag; auf Wunsch abends Besuch des beleuchteten Luxor-Tempels",
            "Letzte Nacht an Bord"
          ]
        },
        {
          "title": "Luxor — beide Ufer & Ausschiffung",
          "items": [
            "Die große Säulenhalle von Karnak mit Ihrer ägyptologischen Reiseleitung",
            "Übersetzen zum Westufer — Tal der Könige und Tempel der Hatschepsut",
            "Ausschiffung und Transfer zu Ihrem Hotel, Bahnhof oder Flughafen in Luxor"
          ]
        }
      ],
      "productHeading": "Die viertägige Kreuzfahrt, Tag für Tag",
      "productLede": "So führen wir die Kreuzfahrt durch: drei Nächte auf dem Fluss von Assuan nach Luxor, jeder Besuch an Land privat und mit Ihrer eigenen ägyptologischen Reiseleitung. Das Schiff teilen Sie mit anderen; Ihre Reiseleitung, Ihr Fahrzeug und Ihre Besuche gehören Ihnen allein."
    },
    "ui": {
      "priceForTwo": "%p pro Person bei zwei Reisenden",
      "flyVersion": "Mit Inlandsflügen statt der zwei Nächte im Schlafwagen, diese Nächte im Hotel: %p pro Person",
      "monthByMonth": "Monat für Monat",
      "compareOptions": "Die Möglichkeiten im Vergleich",
      "byOccasion": "Nach Anlass",
      "travelGuides": "Reiseführer",
      "ariaBreadcrumb": "Brotkrumennavigation",
      "ariaLanguage": "Sprache",
      "ariaLanguageFooter": "Sprache (Fußzeile)",
      "ariaMainNav": "Hauptmenü",
      "email": "E-Mail",
      "mcpHello": "Guten Tag Kemet.",
      "mcpAbout": "Guten Tag Kemet — ich interessiere mich für „%s“."
    }
  },
  "fr": {
    "alts": {
      "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea": "Un bol de foul medames garni de tomate et d'herbes, avec du citron et un verre de thé",
      "A colossus of Ramesses II at the entrance of Luxor Temple": "Un colosse de Ramsès II à l'entrée du temple de Louxor",
      "A decorated camel resting before the Pyramids of Giza in early light": "Un chameau paré se reposant devant les pyramides de Gizeh dans la lumière du petit matin",
      "A jetty reaching over turquoise water to an island near Hurghada": "Une jetée s'avançant sur une eau turquoise vers une île près d'Hurghada",
      "A painted royal tomb in the Valley of the Kings, Luxor": "Une tombe royale peinte dans la Vallée des Rois, à Louxor",
      "A scuba diver beside a vivid Red Sea coral reef teeming with fish": "Un plongeur près d'un récif corallien éclatant de la mer Rouge, grouillant de poissons",
      "A stone-paved lane of Islamic Cairo glowing with lanterns at night": "Une ruelle pavée du Caire islamique, éclairée de lanternes la nuit",
      "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh": "Un camp de plage au toit de chaume surplombant les eaux peu profondes du récif corallien de la mer Rouge, à Charm el-Cheikh",
      "Brightly decorated Nubian boats moored on the Nile at Aswan": "Des bateaux nubiens aux couleurs vives amarrés sur le Nil à Assouan",
      "Fortified walls, bell tower and cypress garden of Saint Catherine's Monastery below a granite slope": "Remparts, clocher et jardin de cyprès du monastère Sainte-Catherine au pied d'une pente de granit",
      "Green sea turtle grazing on a seagrass meadow underwater at Abu Dabbab, Marsa Alam": "Une tortue verte broutant un herbier sous l'eau à Abou Dabbab, Marsa Alam",
      "Hathor-headed columns and blue painted ceiling in the hypostyle hall of the Temple of Hathor at Dendera": "Colonnes à tête d'Hathor et plafond peint en bleu dans la salle hypostyle du temple d'Hathor à Dendera",
      "Hot-air balloons drifting over the West Bank of Luxor at dawn": "Des montgolfières dérivant au-dessus de la rive ouest de Louxor à l'aube",
      "Kemet guests jumping for joy above the Giza pyramid panorama": "Des voyageurs de Kemet bondissant de joie devant le panorama des pyramides de Gizeh",
      "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions": "Du koshari : pâtes nappées de sauce tomate, lentilles, pois chiches et oignons frits croustillants",
      "Layered red granite ridges of the Sinai mountains at sunrise seen from Mount Sinai": "Crêtes étagées de granit rouge des montagnes du Sinaï au lever du soleil, vues du mont Sinaï",
      "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri": "Statues osiriaques d'Hatchepsout sur la terrasse supérieure de son temple, à Deir el-Bahari",
      "Rounded white chalk formations rising from sand in Egypt's White Desert in low sunlight": "Formations arrondies de craie blanche surgissant du sable dans le désert Blanc d'Égypte, sous une lumière rasante",
      "The Great Pyramid of Khufu on the Giza plateau": "La Grande Pyramide de Khéops sur le plateau de Gizeh",
      "The Great Sphinx of Giza facing the dawn": "Le Grand Sphinx de Gizeh face à l'aube",
      "The Great Sphinx of Giza with a pyramid rising behind it": "Le Grand Sphinx de Gizeh, une pyramide s'élevant derrière lui",
      "The Magic Lake and desert dunes of the Fayoum oasis under a wide sky": "Le Magic Lake et les dunes de l'oasis du Fayoum sous un vaste ciel",
      "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo": "La mosquée de Méhémet Ali couronnant la citadelle de Saladin au Caire",
      "The Nile and desert hills framed through an ancient temple doorway at Aswan": "Le Nil et les collines du désert encadrés par la porte d'un temple antique à Assouan",
      "The Red Pyramid of Dahshur under a clear desert sky": "La pyramide Rouge de Dahchour sous un ciel de désert dégagé",
      "The Roman Amphitheatre at Kom el-Dikka in Alexandria": "L'amphithéâtre romain de Kôm el-Dikka à Alexandrie",
      "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument": "La pyramide à degrés de Djéser à Saqqarah, le plus ancien monument de pierre au monde",
      "The ancient Mosque of Amr ibn al-As in Old Cairo": "L'antique mosquée d'Amr ibn al-As dans le Vieux Caire",
      "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel": "Les quatre colosses assis de Ramsès II au grand temple d'Abou Simbel",
      "The grand hall of the Egyptian Museum in Cairo": "La grande salle du Musée égyptien du Caire",
      "The great hypostyle hall of Karnak Temple in Luxor": "La grande salle hypostyle du temple de Karnak, à Louxor",
      "The island Temple of Philae rising from the Nile near Aswan": "Le temple insulaire de Philae émergeant du Nil près d'Assouan",
      "The lighthouse on the Alexandria seafront on the Mediterranean": "Le phare sur le front de mer d'Alexandrie, au bord de la Méditerranée",
      "The mud-brick fortress of Shali rising above Siwa Oasis": "La forteresse de briques crues de Shali dominant l'oasis de Siwa",
      "The seafront Montaza Palace and its gardens in Alexandria": "Le palais de Montaza et ses jardins en bord de mer, à Alexandrie",
      "The shaded deck of a Nile dahabiya, set for a private party": "Le pont ombragé d'une dahabeya sur le Nil, dressé pour une réception privée",
      "The teak sun-deck of a Nile cruise vessel set for the day": "Le pont-soleil en teck d'un bateau de croisière sur le Nil, préparé pour la journée",
      "The two rock temples of Abu Simbel above Lake Nasser": "Les deux temples rupestres d'Abou Simbel au-dessus du lac Nasser",
      "Turquoise salt lake with a white salt-crusted shore in Siwa Oasis": "Lac salé turquoise à la rive blanche croûtée de sel dans l'oasis de Siwa"
    },
    "ogAlt": "Kemet — voyages privés de luxe en Égypte",
    "cruise": {
      "name": "La croisière sur le Nil",
"durationLabel": "4 jours / 3 nuits",
      "days": [
        {
          "title": "Assouan — Philae, le haut barrage et l'embarquement",
          "items": [
            "Accueil privé à Assouan, puis visite du haut barrage et de l'obélisque inachevé le matin",
            "Bateau à moteur jusqu'au temple insulaire de Philae, sanctuaire d'Isis",
            "Embarquement sur votre bateau de croisière avant le déjeuner ; après-midi libre sur le pont-soleil"
          ]
        },
        {
          "title": "Kom Ombo et Edfou",
          "items": [
            "Navigation le matin vers Kom Ombo et son temple double dominant la rive",
            "Poursuite vers Edfou — le temple d'Horus, le mieux conservé d'Égypte",
            "Soirée à bord, le bateau étant amarré au pied de la ville du temple"
          ]
        },
        {
          "title": "L'écluse d'Esna et l'arrivée à Louxor",
          "items": [
            "Passage de l'écluse d'Esna, là où la vallée s'ouvre vers Thèbes",
            "Arrivée à Louxor dans l'après-midi ; en option, visite en soirée du temple de Louxor illuminé",
            "Dernière nuit à bord"
          ]
        },
        {
          "title": "Louxor — les deux rives et le débarquement",
          "items": [
            "La grande salle hypostyle de Karnak, avec votre égyptologue",
            "Traversée vers la rive ouest — Vallée des Rois et temple d'Hatchepsout",
            "Débarquement et transfert à votre hôtel de Louxor, à la gare ou à l'aéroport"
          ]
        }
      ],
      "productHeading": "La croisière de quatre jours, jour après jour",
      "productLede": "Voici la croisière telle que nous la menons : trois nuits sur le fleuve, d'Assouan à Louxor, chaque visite à terre étant privée, avec votre propre égyptologue. Le bateau est partagé ; votre guide, votre véhicule et vos visites, eux, ne le sont pas."
    },
    "ui": {
      "priceForTwo": "%p par personne pour deux voyageurs",
      "flyVersion": "Avec des vols intérieurs à la place des deux nuits en train-couchettes, ces nuits-là à l'hôtel : %p par personne",
      "monthByMonth": "Mois par mois",
      "compareOptions": "Comparer les options",
      "byOccasion": "Selon l'occasion",
      "travelGuides": "Guides de voyage",
      "ariaBreadcrumb": "Fil d'Ariane",
      "ariaLanguage": "Langue",
      "ariaLanguageFooter": "Langue (pied de page)",
      "ariaMainNav": "Menu principal",
      "email": "E-mail",
      "mcpHello": "Bonjour Kemet.",
      "mcpAbout": "Bonjour Kemet — je vous écris au sujet de « %s »."
    }
  },
  "it": {
    "alts": {
      "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea": "Una ciotola di ful medames con pomodoro ed erbe, accompagnata da limone e un bicchiere di tè",
      "A colossus of Ramesses II at the entrance of Luxor Temple": "Un colosso di Ramses II all'ingresso del Tempio di Luxor",
      "A decorated camel resting before the Pyramids of Giza in early light": "Un cammello bardato a riposo davanti alle piramidi di Giza nella luce del primo mattino",
      "A jetty reaching over turquoise water to an island near Hurghada": "Un molo che si allunga sull'acqua turchese verso un'isola vicino a Hurghada",
      "A painted royal tomb in the Valley of the Kings, Luxor": "Una tomba reale dipinta nella Valle dei Re, a Luxor",
      "A scuba diver beside a vivid Red Sea coral reef teeming with fish": "Un subacqueo accanto a una vivida barriera corallina del Mar Rosso gremita di pesci",
      "A stone-paved lane of Islamic Cairo glowing with lanterns at night": "Un vicolo lastricato del Cairo islamico illuminato dalle lanterne di notte",
      "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh": "Un campo sulla spiaggia con tetti di paglia sopra i bassi fondali corallini del Mar Rosso a Sharm el-Sheikh",
      "Brightly decorated Nubian boats moored on the Nile at Aswan": "Barche nubiane dai colori vivaci ormeggiate sul Nilo ad Assuan",
      "Fortified walls, bell tower and cypress garden of Saint Catherine's Monastery below a granite slope": "Mura fortificate, campanile e giardino di cipressi del Monastero di Santa Caterina ai piedi di un pendio di granito",
      "Green sea turtle grazing on a seagrass meadow underwater at Abu Dabbab, Marsa Alam": "Una tartaruga verde che bruca una prateria di posidonia sott'acqua ad Abu Dabbab, Marsa Alam",
      "Hathor-headed columns and blue painted ceiling in the hypostyle hall of the Temple of Hathor at Dendera": "Colonne con capitelli di Hathor e soffitto dipinto di blu nella sala ipostila del Tempio di Hathor a Dendera",
      "Hot-air balloons drifting over the West Bank of Luxor at dawn": "Mongolfiere che sorvolano la riva occidentale di Luxor all'alba",
      "Kemet guests jumping for joy above the Giza pyramid panorama": "Ospiti di Kemet che saltano di gioia davanti al panorama delle piramidi di Giza",
      "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions": "Koshari, con salsa di pomodoro versata su pasta, lenticchie, ceci e cipolle fritte croccanti",
      "Layered red granite ridges of the Sinai mountains at sunrise seen from Mount Sinai": "Creste stratificate di granito rosso dei monti del Sinai all'alba, viste dal Monte Sinai",
      "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri": "Statue osiridee di Hatshepsut sulla terrazza superiore del suo tempio a Deir el-Bahari",
      "Rounded white chalk formations rising from sand in Egypt's White Desert in low sunlight": "Formazioni tondeggianti di gesso bianco che emergono dalla sabbia nel Deserto Bianco d'Egitto, nella luce radente",
      "The Great Pyramid of Khufu on the Giza plateau": "La Grande Piramide di Cheope sull'altopiano di Giza",
      "The Great Sphinx of Giza facing the dawn": "La Grande Sfinge di Giza rivolta verso l'alba",
      "The Great Sphinx of Giza with a pyramid rising behind it": "La Grande Sfinge di Giza con una piramide che si staglia alle sue spalle",
      "The Magic Lake and desert dunes of the Fayoum oasis under a wide sky": "Il Lago Magico e le dune del deserto nell'oasi del Fayyum sotto un ampio cielo",
      "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo": "La moschea di Mohammed Ali che sovrasta la Cittadella di Saladino al Cairo",
      "The Nile and desert hills framed through an ancient temple doorway at Aswan": "Il Nilo e le colline del deserto inquadrati dalla porta di un antico tempio ad Assuan",
      "The Red Pyramid of Dahshur under a clear desert sky": "La Piramide Rossa di Dahshur sotto un limpido cielo del deserto",
      "The Roman Amphitheatre at Kom el-Dikka in Alexandria": "L'anfiteatro romano di Kom el-Dikka ad Alessandria",
      "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument": "La Piramide a gradoni di Djoser a Saqqara, il più antico monumento in pietra del mondo",
      "The ancient Mosque of Amr ibn al-As in Old Cairo": "L'antica moschea di Amr ibn al-As nel Cairo Vecchio",
      "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel": "I quattro colossi seduti di Ramses II al Grande Tempio di Abu Simbel",
      "The grand hall of the Egyptian Museum in Cairo": "La grande sala del Museo Egizio del Cairo",
      "The great hypostyle hall of Karnak Temple in Luxor": "La grande sala ipostila del Tempio di Karnak a Luxor",
      "The island Temple of Philae rising from the Nile near Aswan": "Il Tempio di File, sull'isola, che emerge dal Nilo vicino ad Assuan",
      "The lighthouse on the Alexandria seafront on the Mediterranean": "Il faro sul lungomare di Alessandria, sul Mediterraneo",
      "The mud-brick fortress of Shali rising above Siwa Oasis": "La fortezza di fango di Shali che si innalza sopra l'oasi di Siwa",
      "The seafront Montaza Palace and its gardens in Alexandria": "Il Palazzo di Montaza e i suoi giardini sul lungomare di Alessandria",
      "The shaded deck of a Nile dahabiya, set for a private party": "Il ponte ombreggiato di una dahabiya sul Nilo, allestito per una festa privata",
      "The teak sun-deck of a Nile cruise vessel set for the day": "Il ponte sole in teak di una nave da crociera sul Nilo, preparato per la giornata",
      "The two rock temples of Abu Simbel above Lake Nasser": "I due templi rupestri di Abu Simbel sopra il Lago Nasser",
      "Turquoise salt lake with a white salt-crusted shore in Siwa Oasis": "Un lago salato turchese con una riva bianca incrostata di sale nell'oasi di Siwa"
    },
    "ogAlt": "Kemet — viaggi privati di lusso in Egitto",
    "cruise": {
      "name": "La crociera sul Nilo",
"durationLabel": "4 giorni / 3 notti",
      "days": [
        {
          "title": "Assuan — File, la Grande Diga e l'imbarco",
          "items": [
            "Accoglienza privata ad Assuan e visita mattutina alla Grande Diga e all'obelisco incompiuto",
            "In motoscafo fino al tempio sull'isola di File, santuario di Iside",
            "Imbarco sulla nave prima di pranzo; pomeriggio libero sul ponte sole"
          ]
        },
        {
          "title": "Kom Ombo ed Edfu",
          "items": [
            "Navigazione mattutina verso Kom Ombo e il suo tempio doppio sopra la riva del fiume",
            "Si prosegue per Edfu — il Tempio di Horus, il più completo d'Egitto",
            "Serata a bordo, con la nave ormeggiata sotto la città del tempio"
          ]
        },
        {
          "title": "La chiusa di Esna e l'arrivo a Luxor",
          "items": [
            "Passaggio della chiusa di Esna, mentre la valle si apre verso Tebe",
            "Arrivo a Luxor nel pomeriggio; in serata, facoltativa, visita al Tempio di Luxor illuminato",
            "Ultima notte a bordo"
          ]
        },
        {
          "title": "Luxor — le due rive e lo sbarco",
          "items": [
            "La grande sala ipostila di Karnak con la vostra guida esperta di egittologia",
            "Si attraversa il fiume verso la riva occidentale — Valle dei Re e Tempio di Hatshepsut",
            "Sbarco e trasferimento al vostro hotel di Luxor, alla stazione o all'aeroporto"
          ]
        }
      ],
      "productHeading": "La crociera di quattro giorni, giorno per giorno",
      "productLede": "Questa è la crociera così come la organizziamo: tre notti sul fiume da Assuan a Luxor, con ogni visita a terra in privato insieme alla vostra guida esperta di egittologia. La nave è condivisa; la vostra guida, il vostro veicolo e le vostre visite no."
    },
    "ui": {
      "priceForTwo": "%p a persona per due viaggiatori",
      "flyVersion": "Con voli interni al posto delle due notti in treno letto, quelle notti in hotel: %p a persona",
      "monthByMonth": "Mese per mese",
      "compareOptions": "Confrontare le opzioni",
      "byOccasion": "Per occasione",
      "travelGuides": "Guide di viaggio",
      "ariaBreadcrumb": "Percorso di navigazione",
      "ariaLanguage": "Lingua",
      "ariaLanguageFooter": "Lingua (piè di pagina)",
      "ariaMainNav": "Menu principale",
      "email": "Email",
      "mcpHello": "Buongiorno Kemet.",
      "mcpAbout": "Buongiorno Kemet — vorrei informazioni su \"%s\"."
    }
  },
  "es": {
    "alts": {
      "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea": "Un plato de ful medames con tomate y hierbas, acompañado de limón y un vaso de té",
      "A colossus of Ramesses II at the entrance of Luxor Temple": "Un coloso de Ramsés II a la entrada del templo de Luxor",
      "A decorated camel resting before the Pyramids of Giza in early light": "Un camello engalanado descansa ante las Pirámides de Guiza con la primera luz del día",
      "A jetty reaching over turquoise water to an island near Hurghada": "Un embarcadero se adentra sobre aguas turquesa hacia una isla cercana a Hurghada",
      "A painted royal tomb in the Valley of the Kings, Luxor": "Una tumba real pintada en el Valle de los Reyes, Luxor",
      "A scuba diver beside a vivid Red Sea coral reef teeming with fish": "Un buceador junto a un vivo arrecife de coral del mar Rojo repleto de peces",
      "A stone-paved lane of Islamic Cairo glowing with lanterns at night": "Una calle empedrada de El Cairo islámico iluminada por faroles de noche",
      "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh": "Un campamento de playa con techo de paja sobre los bajíos coralinos del mar Rojo en Sharm el-Sheikh",
      "Brightly decorated Nubian boats moored on the Nile at Aswan": "Barcas nubias de vivos colores amarradas en el Nilo, en Asuán",
      "Fortified walls, bell tower and cypress garden of Saint Catherine's Monastery below a granite slope": "Murallas, campanario y jardín de cipreses del monasterio de Santa Catalina al pie de una ladera de granito",
      "Green sea turtle grazing on a seagrass meadow underwater at Abu Dabbab, Marsa Alam": "Una tortuga verde pastando en una pradera de posidonia bajo el agua en Abu Dabbab, Marsa Alam",
      "Hathor-headed columns and blue painted ceiling in the hypostyle hall of the Temple of Hathor at Dendera": "Columnas con capiteles de Hathor y techo pintado de azul en la sala hipóstila del templo de Hathor en Dendera",
      "Hot-air balloons drifting over the West Bank of Luxor at dawn": "Globos aerostáticos sobre la orilla occidental de Luxor al amanecer",
      "Kemet guests jumping for joy above the Giza pyramid panorama": "Viajeros de Kemet saltando de alegría ante el panorama de las pirámides de Guiza",
      "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions": "Koshari: pasta, lentejas, garbanzos y cebolla frita crujiente bañados en salsa de tomate",
      "Layered red granite ridges of the Sinai mountains at sunrise seen from Mount Sinai": "Crestas escalonadas de granito rojo de las montañas del Sinaí al amanecer, vistas desde el monte Sinaí",
      "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri": "Estatuas osiríacas de Hatshepsut en la terraza superior de su templo de Deir el-Bahari",
      "Rounded white chalk formations rising from sand in Egypt's White Desert in low sunlight": "Formaciones redondeadas de caliza blanca que emergen de la arena en el Desierto Blanco de Egipto, con luz rasante",
      "The Great Pyramid of Khufu on the Giza plateau": "La Gran Pirámide de Keops en la meseta de Guiza",
      "The Great Sphinx of Giza facing the dawn": "La Gran Esfinge de Guiza de cara al amanecer",
      "The Great Sphinx of Giza with a pyramid rising behind it": "La Gran Esfinge de Guiza con una pirámide al fondo",
      "The Magic Lake and desert dunes of the Fayoum oasis under a wide sky": "El lago Mágico y las dunas del desierto del oasis de El Fayum bajo un cielo inmenso",
      "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo": "La mezquita de Mohamed Alí corona la Ciudadela de Saladino en El Cairo",
      "The Nile and desert hills framed through an ancient temple doorway at Aswan": "El Nilo y las colinas del desierto enmarcados por la puerta de un templo antiguo en Asuán",
      "The Red Pyramid of Dahshur under a clear desert sky": "La Pirámide Roja de Dahshur bajo un cielo despejado del desierto",
      "The Roman Amphitheatre at Kom el-Dikka in Alexandria": "El anfiteatro romano de Kom el-Dikka en Alejandría",
      "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument": "La pirámide escalonada de Djoser en Saqqara, el monumento de piedra más antiguo del mundo",
      "The ancient Mosque of Amr ibn al-As in Old Cairo": "La antigua mezquita de Amr ibn al-As en el Viejo Cairo",
      "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel": "Los cuatro colosos sentados de Ramsés II en el Gran Templo de Abu Simbel",
      "The grand hall of the Egyptian Museum in Cairo": "La gran sala del Museo Egipcio de El Cairo",
      "The great hypostyle hall of Karnak Temple in Luxor": "La gran sala hipóstila del templo de Karnak, en Luxor",
      "The island Temple of Philae rising from the Nile near Aswan": "El templo de File, en una isla, se alza sobre el Nilo cerca de Asuán",
      "The lighthouse on the Alexandria seafront on the Mediterranean": "El faro del paseo marítimo de Alejandría, a orillas del Mediterráneo",
      "The mud-brick fortress of Shali rising above Siwa Oasis": "La fortaleza de adobe de Shali sobre el oasis de Siwa",
      "The seafront Montaza Palace and its gardens in Alexandria": "El palacio de Montaza, junto al mar, y sus jardines en Alejandría",
      "The shaded deck of a Nile dahabiya, set for a private party": "La cubierta sombreada de una dahabiya del Nilo, preparada para una fiesta privada",
      "The teak sun-deck of a Nile cruise vessel set for the day": "La cubierta de teca de un crucero por el Nilo, preparada para la jornada",
      "The two rock temples of Abu Simbel above Lake Nasser": "Los dos templos rupestres de Abu Simbel sobre el lago Nasser",
      "Turquoise salt lake with a white salt-crusted shore in Siwa Oasis": "Lago salado turquesa de orilla blanca cubierta de costra de sal en el oasis de Siwa"
    },
    "ogAlt": "Kemet — viajes privados de lujo por Egipto",
    "cruise": {
      "name": "El crucero por el Nilo",
"durationLabel": "4 días / 3 noches",
      "days": [
        {
          "title": "Asuán — File, la Presa Alta y embarque",
          "items": [
            "Encuentro privado en Asuán y visita matinal a la Presa Alta y al Obelisco Inacabado",
            "En lancha a la isla del templo de File, santuario de Isis",
            "Embarque en su crucero antes del almuerzo; tarde libre en la cubierta solárium"
          ]
        },
        {
          "title": "Kom Ombo y Edfu",
          "items": [
            "Navegación matinal hasta Kom Ombo y su templo doble sobre la ribera",
            "Continuación hasta Edfu, el templo de Horus, el más completo de Egipto",
            "Velada a bordo mientras el barco atraca a los pies de la ciudad del templo"
          ]
        },
        {
          "title": "La esclusa de Esna y llegada a Luxor",
          "items": [
            "Paso por la esclusa de Esna mientras el valle se ensancha hacia Tebas",
            "Llegada a Luxor por la tarde; visita opcional y nocturna al templo de Luxor iluminado",
            "Última noche a bordo"
          ]
        },
        {
          "title": "Luxor — las dos orillas y desembarque",
          "items": [
            "La gran sala hipóstila de Karnak, con su egiptólogo",
            "Cruce a la orilla occidental: el Valle de los Reyes y el templo de Hatshepsut",
            "Desembarque y traslado a su hotel, a la estación o al aeropuerto de Luxor"
          ]
        }
      ],
      "productHeading": "El crucero de cuatro días, día a día",
      "productLede": "Así es el crucero tal como lo organizamos: tres noches en el río de Asuán a Luxor, con todas las visitas en tierra en privado y con su propio egiptólogo. El barco se comparte; su guía, su vehículo y sus visitas, no."
    },
    "ui": {
      "priceForTwo": "%p por persona para dos viajeros",
      "flyVersion": "Con vuelos internos en lugar de las dos noches en tren cama, y esas noches en hotel: %p por persona",
      "monthByMonth": "Mes a mes",
      "compareOptions": "Comparar las opciones",
      "byOccasion": "Según la ocasión",
      "travelGuides": "Guías de viaje",
      "ariaBreadcrumb": "Ruta de navegación",
      "ariaLanguage": "Idioma",
      "ariaLanguageFooter": "Idioma (pie de página)",
      "ariaMainNav": "Menú principal",
      "email": "Correo electrónico",
      "mcpHello": "Hola, Kemet.",
      "mcpAbout": "Hola, Kemet: les escribo para consultar sobre «%s»."
    }
  },
  "pt": {
    "alts": {
      "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea": "Uma tigela de ful medames com tomate e ervas, acompanhada de limão e um copo de chá",
      "A colossus of Ramesses II at the entrance of Luxor Temple": "Um colosso de Ramsés II na entrada do Templo de Luxor",
      "A decorated camel resting before the Pyramids of Giza in early light": "Um camelo enfeitado descansando diante das Pirâmides de Gizé à luz da manhã",
      "A jetty reaching over turquoise water to an island near Hurghada": "Um cais que avança sobre a água turquesa até uma ilha perto de Hurghada",
      "A painted royal tomb in the Valley of the Kings, Luxor": "Uma tumba real pintada no Vale dos Reis, em Luxor",
      "A scuba diver beside a vivid Red Sea coral reef teeming with fish": "Um mergulhador junto a um vívido recife de coral do Mar Vermelho, repleto de peixes",
      "A stone-paved lane of Islamic Cairo glowing with lanterns at night": "Uma ruela de pedra do Cairo islâmico iluminada por lanternas à noite",
      "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh": "Um acampamento de praia com telhado de palha sobre as águas rasas do recife de coral do Mar Vermelho, em Sharm el-Sheikh",
      "Brightly decorated Nubian boats moored on the Nile at Aswan": "Barcos núbios de decoração colorida ancorados no Nilo, em Assuã",
      "Fortified walls, bell tower and cypress garden of Saint Catherine's Monastery below a granite slope": "Muralhas fortificadas, campanário e jardim de ciprestes do Mosteiro de Santa Catarina, aos pés de uma encosta de granito",
      "Green sea turtle grazing on a seagrass meadow underwater at Abu Dabbab, Marsa Alam": "Tartaruga-verde pastando em um campo de ervas marinhas debaixo d'água em Abu Dabbab, Marsa Alam",
      "Hathor-headed columns and blue painted ceiling in the hypostyle hall of the Temple of Hathor at Dendera": "Colunas com cabeça de Hathor e teto pintado de azul na sala hipostila do Templo de Hathor, em Dendera",
      "Hot-air balloons drifting over the West Bank of Luxor at dawn": "Balões de ar quente sobre a margem oeste de Luxor ao amanhecer",
      "Kemet guests jumping for joy above the Giza pyramid panorama": "Hóspedes da Kemet pulando de alegria diante do panorama das pirâmides de Gizé",
      "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions": "Koshari, com molho de tomate sobre macarrão, lentilhas, grão-de-bico e cebola frita crocante",
      "Layered red granite ridges of the Sinai mountains at sunrise seen from Mount Sinai": "Camadas de cristas de granito vermelho das montanhas do Sinai ao nascer do sol, vistas do Monte Sinai",
      "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri": "Estátuas osiríacas de Hatshepsut no terraço superior do seu templo, em Deir el-Bahari",
      "Rounded white chalk formations rising from sand in Egypt's White Desert in low sunlight": "Formações arredondadas de calcário branco emergindo da areia no Deserto Branco do Egito, sob a luz baixa do sol",
      "The Great Pyramid of Khufu on the Giza plateau": "A Grande Pirâmide de Quéops no planalto de Gizé",
      "The Great Sphinx of Giza facing the dawn": "A Grande Esfinge de Gizé voltada para o amanhecer",
      "The Great Sphinx of Giza with a pyramid rising behind it": "A Grande Esfinge de Gizé com uma pirâmide erguendo-se ao fundo",
      "The Magic Lake and desert dunes of the Fayoum oasis under a wide sky": "O Lago Mágico e as dunas do deserto do oásis do Faium sob um céu aberto",
      "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo": "A Mesquita de Muhammad Ali coroando a Cidadela de Saladino, no Cairo",
      "The Nile and desert hills framed through an ancient temple doorway at Aswan": "O Nilo e as colinas do deserto emoldurados pela porta de um templo antigo em Assuã",
      "The Red Pyramid of Dahshur under a clear desert sky": "A Pirâmide Vermelha de Dahshur sob um céu limpo de deserto",
      "The Roman Amphitheatre at Kom el-Dikka in Alexandria": "O Anfiteatro Romano de Kom el-Dikka, em Alexandria",
      "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument": "A Pirâmide de Degraus de Djoser, em Saqqara, o monumento de pedra mais antigo do mundo",
      "The ancient Mosque of Amr ibn al-As in Old Cairo": "A antiga Mesquita de Amr ibn al-As, no Cairo Antigo",
      "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel": "Os quatro colossos sentados de Ramsés II no Grande Templo de Abu Simbel",
      "The grand hall of the Egyptian Museum in Cairo": "O grande salão do Museu Egípcio, no Cairo",
      "The great hypostyle hall of Karnak Temple in Luxor": "A grande sala hipostila do Templo de Karnak, em Luxor",
      "The island Temple of Philae rising from the Nile near Aswan": "O templo de Filae, na sua ilha, erguendo-se do Nilo perto de Assuã",
      "The lighthouse on the Alexandria seafront on the Mediterranean": "O farol da orla de Alexandria, no Mediterrâneo",
      "The mud-brick fortress of Shali rising above Siwa Oasis": "A fortaleza de tijolos de barro de Shali erguendo-se acima do oásis de Siwa",
      "The seafront Montaza Palace and its gardens in Alexandria": "O Palácio de Montaza, à beira-mar, e os seus jardins, em Alexandria",
      "The shaded deck of a Nile dahabiya, set for a private party": "O convés sombreado de uma dahabiya no Nilo, preparado para uma festa privada",
      "The teak sun-deck of a Nile cruise vessel set for the day": "O sundeck de teca de um navio de cruzeiro pelo Nilo, preparado para o dia",
      "The two rock temples of Abu Simbel above Lake Nasser": "Os dois templos escavados na rocha de Abu Simbel, acima do lago Nasser",
      "Turquoise salt lake with a white salt-crusted shore in Siwa Oasis": "Lago salgado turquesa com margem branca coberta de sal no oásis de Siwa"
    },
    "ogAlt": "Kemet — viagens privadas de luxo ao Egito",
    "cruise": {
      "name": "O cruzeiro pelo Nilo",
"durationLabel": "4 dias / 3 noites",
      "days": [
        {
          "title": "Assuã — Filae, a Alta Barragem e o embarque",
          "items": [
            "Recepção privativa em Assuã e visita matinal à Alta Barragem e ao Obelisco Inacabado",
            "De lancha até o templo de Filae, na sua ilha, santuário de Ísis",
            "Embarque no navio antes do almoço; tarde livre no sundeck"
          ]
        },
        {
          "title": "Kom Ombo e Edfu",
          "items": [
            "Navegação pela manhã até Kom Ombo e o seu templo duplo, acima da margem do rio",
            "Continuação até Edfu — o Templo de Hórus, o mais bem conservado do Egito",
            "Noite a bordo, com o navio atracado abaixo da cidade do templo"
          ]
        },
        {
          "title": "A eclusa de Esna e a chegada a Luxor",
          "items": [
            "Passagem pela eclusa de Esna, enquanto o vale se alarga em direção a Tebas",
            "Chegada a Luxor à tarde; visita opcional, à noite, ao Templo de Luxor iluminado",
            "Última noite a bordo"
          ]
        },
        {
          "title": "Luxor — as duas margens e o desembarque",
          "items": [
            "A grande sala hipostila de Karnak, com o seu egiptólogo",
            "Travessia até a margem oeste — o Vale dos Reis e o Templo de Hatshepsut",
            "Desembarque e traslado até o seu hotel, a estação ou o aeroporto de Luxor"
          ]
        }
      ],
      "productHeading": "O cruzeiro de quatro dias, dia a dia",
      "productLede": "Este é o cruzeiro como o realizamos: três noites no rio, de Assuã a Luxor, com todas as visitas em terra privativas e o seu próprio egiptólogo. O navio é compartilhado; o seu guia, o seu veículo e as suas visitas, não."
    },
    "ui": {
      "priceForTwo": "%p por pessoa, para dois viajantes",
      "flyVersion": "Com voos domésticos em vez das duas noites no comboio-cama, e essas noites em hotel: %p por pessoa",
      "monthByMonth": "Mês a mês",
      "compareOptions": "Compare as opções",
      "byOccasion": "Por ocasião",
      "travelGuides": "Guias de viagem",
      "ariaBreadcrumb": "Trilha de navegação",
      "ariaLanguage": "Idioma",
      "ariaLanguageFooter": "Idioma (rodapé)",
      "ariaMainNav": "Menu principal",
      "email": "E-mail",
      "mcpHello": "Olá, Kemet.",
      "mcpAbout": "Olá, Kemet — gostaria de informações sobre \"%s\"."
    }
  },
  "ru": {
    "alts": {
      "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea": "Миска фуль медамес с помидорами и зеленью, лимон и стакан чая",
      "A colossus of Ramesses II at the entrance of Luxor Temple": "Колосс Рамсеса II у входа в Луксорский храм",
      "A decorated camel resting before the Pyramids of Giza in early light": "Украшенный верблюд отдыхает перед пирамидами Гизы в раннем утреннем свете",
      "A jetty reaching over turquoise water to an island near Hurghada": "Пирс над бирюзовой водой ведёт к острову у Хургады",
      "A painted royal tomb in the Valley of the Kings, Luxor": "Расписная царская гробница в Долине царей, Луксор",
      "A scuba diver beside a vivid Red Sea coral reef teeming with fish": "Дайвер у яркого кораллового рифа Красного моря, где кишат рыбы",
      "A stone-paved lane of Islamic Cairo glowing with lanterns at night": "Мощёный камнем переулок исламского Каира, освещённый фонарями ночью",
      "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh": "Пляжный лагерь с соломенными крышами над коралловым мелководьем Красного моря в Шарм-эль-Шейхе",
      "Brightly decorated Nubian boats moored on the Nile at Aswan": "Ярко украшенные нубийские лодки у причала на Ниле в Асуане",
      "Fortified walls, bell tower and cypress garden of Saint Catherine's Monastery below a granite slope": "Крепостные стены, колокольня и кипарисовый сад монастыря Святой Екатерины у подножия гранитного склона",
      "Green sea turtle grazing on a seagrass meadow underwater at Abu Dabbab, Marsa Alam": "Зелёная морская черепаха пасётся на подводном лугу морской травы в Абу-Даббабе, Марса-Алам",
      "Hathor-headed columns and blue painted ceiling in the hypostyle hall of the Temple of Hathor at Dendera": "Колонны с головами Хатор и расписной синий потолок в гипостильном зале храма Хатор в Дендере",
      "Hot-air balloons drifting over the West Bank of Luxor at dawn": "Воздушные шары плывут над Западным берегом Луксора на рассвете",
      "Kemet guests jumping for joy above the Giza pyramid panorama": "Гости Kemet радостно прыгают на фоне панорамы пирамид Гизы",
      "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions": "Кошари: паста, чечевица и нут под томатным соусом с хрустящим жареным луком",
      "Layered red granite ridges of the Sinai mountains at sunrise seen from Mount Sinai": "Слоистые гребни красного гранита Синайских гор на рассвете, вид с горы Синай",
      "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri": "Осирические статуи Хатшепсут на верхней террасе её храма в Дейр-эль-Бахри",
      "Rounded white chalk formations rising from sand in Egypt's White Desert in low sunlight": "Округлые белые меловые формы поднимаются из песка Белой пустыни Египта в косых лучах солнца",
      "The Great Pyramid of Khufu on the Giza plateau": "Великая пирамида Хеопса на плато Гиза",
      "The Great Sphinx of Giza facing the dawn": "Большой сфинкс в Гизе, обращённый к рассвету",
      "The Great Sphinx of Giza with a pyramid rising behind it": "Большой сфинкс в Гизе, за ним поднимается пирамида",
      "The Magic Lake and desert dunes of the Fayoum oasis under a wide sky": "Волшебное озеро и дюны оазиса Файюм под широким небом",
      "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo": "Мечеть Мухаммеда Али венчает Цитадель Салах ад-Дина в Каире",
      "The Nile and desert hills framed through an ancient temple doorway at Aswan": "Нил и пустынные холмы в проёме двери древнего храма в Асуане",
      "The Red Pyramid of Dahshur under a clear desert sky": "Красная пирамида в Дахшуре под ясным пустынным небом",
      "The Roman Amphitheatre at Kom el-Dikka in Alexandria": "Римский амфитеатр Ком-эль-Дикка в Александрии",
      "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument": "Ступенчатая пирамида Джосера в Саккаре, древнейший каменный монумент мира",
      "The ancient Mosque of Amr ibn al-As in Old Cairo": "Древняя мечеть Амра ибн аль-Аса в Старом Каире",
      "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel": "Четыре сидящих колосса Рамсеса II у Великого храма в Абу-Симбеле",
      "The grand hall of the Egyptian Museum in Cairo": "Главный зал Египетского музея в Каире",
      "The great hypostyle hall of Karnak Temple in Luxor": "Большой гипостильный зал Карнакского храма в Луксоре",
      "The island Temple of Philae rising from the Nile near Aswan": "Островной храм Филе поднимается из вод Нила у Асуана",
      "The lighthouse on the Alexandria seafront on the Mediterranean": "Маяк на набережной Александрии у Средиземного моря",
      "The mud-brick fortress of Shali rising above Siwa Oasis": "Глинобитная крепость Шали над оазисом Сива",
      "The seafront Montaza Palace and its gardens in Alexandria": "Дворец Монтаза на берегу моря и его сады в Александрии",
      "The shaded deck of a Nile dahabiya, set for a private party": "Тенистая палуба нильской дахабии, накрытая для частного приёма",
      "The teak sun-deck of a Nile cruise vessel set for the day": "Солнечная палуба из тика на круизном теплоходе по Нилу, приготовленная к дню",
      "The two rock temples of Abu Simbel above Lake Nasser": "Два скальных храма Абу-Симбела над озером Насер",
      "Turquoise salt lake with a white salt-crusted shore in Siwa Oasis": "Бирюзовое солёное озеро с белым соляным берегом в оазисе Сива"
    },
    "ogAlt": "Kemet — частные люкс-путешествия по Египту",
    "cruise": {
      "name": "Круиз по Нилу",
"durationLabel": "4 дня / 3 ночи",
      "days": [
        {
          "title": "Асуан — Филе, Высотная плотина и посадка на теплоход",
          "items": [
            "Индивидуальная встреча в Асуане и утренний осмотр Высотной плотины и Незаконченного обелиска",
            "На моторной лодке — к островному храму Филе, святилищу Исиды",
            "Посадка на круизный теплоход до обеда; вторая половина дня свободна, можно отдохнуть на солнечной палубе"
          ]
        },
        {
          "title": "Ком-Омбо и Эдфу",
          "items": [
            "Утром плывём к Ком-Омбо и его двойному храму над берегом реки",
            "Далее — Эдфу: храм Гора, лучше всех сохранившийся в Египте",
            "Вечер на борту: теплоход встаёт на ночную стоянку у подножия храмового городка"
          ]
        },
        {
          "title": "Шлюз в Эсне и прибытие в Луксор",
          "items": [
            "Проходим шлюз в Эсне — долина расширяется в сторону Фив",
            "Днём прибываем в Луксор; по желанию — вечерний осмотр подсвеченного Луксорского храма",
            "Последняя ночь на борту"
          ]
        },
        {
          "title": "Луксор — оба берега и высадка",
          "items": [
            "Большой гипостильный зал Карнака — с вашим египтологом",
            "Переправа на Западный берег: Долина царей и храм Хатшепсут",
            "Высадка и трансфер в ваш отель в Луксоре, на вокзал или в аэропорт"
          ]
        }
      ],
      "productHeading": "Четырёхдневный круиз по дням",
      "productLede": "Так проходит наш круиз: три ночи на реке из Асуана в Луксор, а все экскурсии на берегу — индивидуальные, с вашим египтологом. Теплоход общий, а вот гид, автомобиль и программа посещений — только ваши."
    },
    "ui": {
      "priceForTwo": "%p с человека при поездке вдвоём",
      "flyVersion": "С внутренними перелётами вместо двух ночей в спальном поезде (эти ночи — в отеле): %p с человека",
      "monthByMonth": "По месяцам",
      "compareOptions": "Сравнить варианты",
      "byOccasion": "По поводу поездки",
      "travelGuides": "Путеводители",
      "ariaBreadcrumb": "Навигационная цепочка",
      "ariaLanguage": "Язык",
      "ariaLanguageFooter": "Язык (нижняя часть страницы)",
      "ariaMainNav": "Главное меню",
      "email": "Эл. почта",
      "mcpHello": "Здравствуйте, Kemet.",
      "mcpAbout": "Здравствуйте, Kemet! Меня интересует «%s»."
    }
  },
  "id": {
    "alts": {
      "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea": "Semangkuk ful medames dengan tomat dan rempah segar, disajikan bersama lemon dan segelas teh",
      "A colossus of Ramesses II at the entrance of Luxor Temple": "Kolosus Ramses II di pintu masuk Kuil Luxor",
      "A decorated camel resting before the Pyramids of Giza in early light": "Seekor unta berhias beristirahat di depan Piramida Giza dalam cahaya pagi",
      "A jetty reaching over turquoise water to an island near Hurghada": "Dermaga yang menjorok di atas air biru kehijauan menuju sebuah pulau dekat Hurghada",
      "A painted royal tomb in the Valley of the Kings, Luxor": "Makam kerajaan berlukis di Lembah Para Raja, Luxor",
      "A scuba diver beside a vivid Red Sea coral reef teeming with fish": "Seorang penyelam di samping terumbu karang Laut Merah yang semarak dan dipenuhi ikan",
      "A stone-paved lane of Islamic Cairo glowing with lanterns at night": "Lorong berpaving batu di Kairo Islam yang berpendar oleh lentera di malam hari",
      "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh": "Perkemahan pantai beratap jerami di atas perairan dangkal terumbu karang Laut Merah di Sharm El Sheikh",
      "Brightly decorated Nubian boats moored on the Nile at Aswan": "Perahu-perahu Nubia berhias warna-warni bersandar di Sungai Nil di Aswan",
      "Fortified walls, bell tower and cypress garden of Saint Catherine's Monastery below a granite slope": "Tembok benteng, menara lonceng, dan taman pohon sipres Biara Santa Katarina di kaki lereng granit",
      "Green sea turtle grazing on a seagrass meadow underwater at Abu Dabbab, Marsa Alam": "Penyu hijau merumput di padang lamun bawah laut di Abu Dabbab, Marsa Alam",
      "Hathor-headed columns and blue painted ceiling in the hypostyle hall of the Temple of Hathor at Dendera": "Pilar berkepala Hathor dan langit-langit biru berlukis di aula hipostil Kuil Hathor di Dendera",
      "Hot-air balloons drifting over the West Bank of Luxor at dawn": "Balon udara melayang di atas Tepi Barat Luxor saat fajar",
      "Kemet guests jumping for joy above the Giza pyramid panorama": "Para tamu Kemet melompat gembira di depan panorama piramida Giza",
      "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions": "Koshari, dengan saus tomat dituang di atas pasta, lentil, buncis, dan bawang goreng renyah",
      "Layered red granite ridges of the Sinai mountains at sunrise seen from Mount Sinai": "Punggung-punggung granit merah berlapis di pegunungan Sinai saat matahari terbit, dilihat dari Gunung Sinai",
      "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri": "Patung-patung Osiris Hatshepsut di teras atas kuilnya di Deir el-Bahri",
      "Rounded white chalk formations rising from sand in Egypt's White Desert in low sunlight": "Formasi kapur putih membulat yang menjulang dari pasir di Gurun Putih Mesir dalam cahaya rendah",
      "The Great Pyramid of Khufu on the Giza plateau": "Piramida Agung Khufu di plateau Giza",
      "The Great Sphinx of Giza facing the dawn": "Sphinx Agung Giza menghadap fajar",
      "The Great Sphinx of Giza with a pyramid rising behind it": "Sphinx Agung Giza dengan sebuah piramida menjulang di belakangnya",
      "The Magic Lake and desert dunes of the Fayoum oasis under a wide sky": "Danau Ajaib dan bukit pasir gurun di oasis Fayoum di bawah langit luas",
      "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo": "Masjid Muhammad Ali memahkotai Benteng Salahuddin di Kairo",
      "The Nile and desert hills framed through an ancient temple doorway at Aswan": "Sungai Nil dan perbukitan gurun terbingkai pintu sebuah kuil kuno di Aswan",
      "The Red Pyramid of Dahshur under a clear desert sky": "Piramida Merah Dahshur di bawah langit gurun yang cerah",
      "The Roman Amphitheatre at Kom el-Dikka in Alexandria": "Amfiteater Romawi di Kom el-Dikka, Aleksandria",
      "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument": "Piramida Bertingkat Djoser di Saqqara, monumen batu tertua di dunia",
      "The ancient Mosque of Amr ibn al-As in Old Cairo": "Masjid Amr bin al-As yang kuno di Kairo Lama",
      "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel": "Empat kolosus Ramses II yang duduk di Kuil Agung Abu Simbel",
      "The grand hall of the Egyptian Museum in Cairo": "Aula agung Museum Mesir di Kairo",
      "The great hypostyle hall of Karnak Temple in Luxor": "Aula hipostil agung Kuil Karnak di Luxor",
      "The island Temple of Philae rising from the Nile near Aswan": "Kuil Philae di pulaunya menjulang dari Sungai Nil dekat Aswan",
      "The lighthouse on the Alexandria seafront on the Mediterranean": "Mercusuar di tepi laut Aleksandria di Laut Mediterania",
      "The mud-brick fortress of Shali rising above Siwa Oasis": "Benteng bata lumpur Shali menjulang di atas Oasis Siwa",
      "The seafront Montaza Palace and its gardens in Alexandria": "Istana Montaza di tepi laut beserta tamannya di Aleksandria",
      "The shaded deck of a Nile dahabiya, set for a private party": "Dek teduh sebuah dahabiya Nil, ditata untuk pesta privat",
      "The teak sun-deck of a Nile cruise vessel set for the day": "Dek jemur berlantai kayu jati sebuah kapal pesiar Nil, siap untuk hari itu",
      "The two rock temples of Abu Simbel above Lake Nasser": "Dua kuil batu Abu Simbel di atas Danau Nasser",
      "Turquoise salt lake with a white salt-crusted shore in Siwa Oasis": "Danau garam biru kehijauan dengan tepian putih berkerak garam di Oasis Siwa"
    },
    "ogAlt": "Kemet — perjalanan privat mewah ke Mesir",
    "cruise": {
      "name": "Pesiar di Sungai Nil",
"durationLabel": "4 hari / 3 malam",
      "days": [
        {
          "title": "Aswan — Philae, Bendungan Tinggi & naik kapal",
          "items": [
            "Penjemputan privat di Aswan, lalu kunjungan pagi ke Bendungan Tinggi dan Obelisk yang Belum Selesai",
            "Perahu motor menuju Kuil Philae di pulaunya, tempat suci Isis",
            "Naik ke kapal pesiar sebelum makan siang; sore santai di dek jemur"
          ]
        },
        {
          "title": "Kom Ombo & Edfu",
          "items": [
            "Berlayar pada pagi hari ke Kom Ombo dan kuil kembarnya di atas tepi sungai",
            "Berlanjut ke Edfu — Kuil Horus, kuil paling utuh di Mesir",
            "Malam di kapal saat berlabuh di bawah kota kuil itu"
          ]
        },
        {
          "title": "Pintu air Esna & tiba di Luxor",
          "items": [
            "Melewati pintu air Esna saat lembah mulai melebar menuju Thebes",
            "Tiba di Luxor pada sore hari; pilihan kunjungan malam ke Kuil Luxor yang diterangi lampu",
            "Malam terakhir di kapal"
          ]
        },
        {
          "title": "Luxor — kedua tepi sungai & turun dari kapal",
          "items": [
            "Aula hipostil agung Karnak bersama Egyptologist Anda",
            "Menyeberang ke Tepi Barat — Lembah Para Raja dan Kuil Hatshepsut",
            "Turun dari kapal dan transfer ke hotel, stasiun, atau bandara Anda di Luxor"
          ]
        }
      ],
      "productHeading": "Pesiar empat hari, hari demi hari",
      "productLede": "Inilah pesiar sebagaimana kami menjalankannya: tiga malam di sungai dari Aswan ke Luxor, setiap kunjungan di darat bersifat privat bersama Egyptologist Anda sendiri. Kapalnya dipakai bersama; pemandu, kendaraan, dan kunjungan Anda tidak."
    },
    "ui": {
      "priceForTwo": "%p per orang untuk dua wisatawan",
      "flyVersion": "Dengan penerbangan domestik sebagai ganti dua malam di kereta tidur, dan malam-malam itu di hotel: %p per orang",
      "monthByMonth": "Bulan demi bulan",
      "compareOptions": "Bandingkan pilihan",
      "byOccasion": "Menurut kesempatan",
      "travelGuides": "Panduan wisata",
      "ariaBreadcrumb": "Jejak navigasi",
      "ariaLanguage": "Bahasa",
      "ariaLanguageFooter": "Bahasa (footer)",
      "ariaMainNav": "Menu utama",
      "email": "Email",
      "mcpHello": "Halo Kemet.",
      "mcpAbout": "Halo Kemet — saya ingin bertanya tentang \"%s\"."
    }
  },
  "ms": {
    "alts": {
      "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea": "Semangkuk ful medames bertabur tomato dan herba, dengan limau dan segelas teh",
      "A colossus of Ramesses II at the entrance of Luxor Temple": "Patung gergasi Ramses II di pintu masuk Kuil Luxor",
      "A decorated camel resting before the Pyramids of Giza in early light": "Seekor unta berhias berehat di hadapan Piramid Giza dalam cahaya awal pagi",
      "A jetty reaching over turquoise water to an island near Hurghada": "Jeti menjulur di atas air biru kehijauan ke sebuah pulau berhampiran Hurghada",
      "A painted royal tomb in the Valley of the Kings, Luxor": "Makam diraja berlukis di Lembah Raja-Raja, Luxor",
      "A scuba diver beside a vivid Red Sea coral reef teeming with fish": "Penyelam skuba di sisi terumbu karang Laut Merah yang berwarna-warni dan dipenuhi ikan",
      "A stone-paved lane of Islamic Cairo glowing with lanterns at night": "Lorong berturap batu di Kaherah Islam yang bercahaya dengan tanglung pada waktu malam",
      "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh": "Kem pantai beratap rumbia di atas perairan cetek terumbu karang Laut Merah di Sharm El Sheikh",
      "Brightly decorated Nubian boats moored on the Nile at Aswan": "Bot Nubia yang berhias warna-warni ditambat di Sungai Nil di Aswan",
      "Fortified walls, bell tower and cypress garden of Saint Catherine's Monastery below a granite slope": "Tembok kubu, menara loceng dan taman pokok saipres Biara Saint Catherine di kaki cerun granit",
      "Green sea turtle grazing on a seagrass meadow underwater at Abu Dabbab, Marsa Alam": "Penyu hijau meragut di padang rumput laut di dasar air Abu Dabbab, Marsa Alam",
      "Hathor-headed columns and blue painted ceiling in the hypostyle hall of the Temple of Hathor at Dendera": "Tiang berkepala Hathor dan siling berlukis biru di dewan hipostil Kuil Hathor di Dendera",
      "Hot-air balloons drifting over the West Bank of Luxor at dawn": "Belon udara panas melayang di atas Tebing Barat Luxor ketika fajar",
      "Kemet guests jumping for joy above the Giza pyramid panorama": "Tetamu Kemet melompat kegembiraan di hadapan panorama piramid Giza",
      "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions": "Koshari, dengan sos tomato dituang ke atas pasta, kekacang lentil, kacang kuda dan bawang goreng rangup",
      "Layered red granite ridges of the Sinai mountains at sunrise seen from Mount Sinai": "Banjaran granit merah berlapis-lapis di pergunungan Sinai ketika matahari terbit, dilihat dari Gunung Sinai",
      "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri": "Arca Osiris Hatshepsut di teres atas kuilnya di Deir el-Bahri",
      "Rounded white chalk formations rising from sand in Egypt's White Desert in low sunlight": "Bentuk kapur putih bulat menjulang dari pasir di Gurun Putih Mesir dalam cahaya matahari rendah",
      "The Great Pyramid of Khufu on the Giza plateau": "Piramid Agung Khufu di dataran Giza",
      "The Great Sphinx of Giza facing the dawn": "Sphinx Agung Giza menghadap fajar",
      "The Great Sphinx of Giza with a pyramid rising behind it": "Sphinx Agung Giza dengan sebuah piramid menjulang di belakangnya",
      "The Magic Lake and desert dunes of the Fayoum oasis under a wide sky": "Tasik Ajaib dan bukit pasir gurun di oasis Fayoum di bawah langit yang luas",
      "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo": "Masjid Muhammad Ali memahkotai Kubu Salahuddin di Kaherah",
      "The Nile and desert hills framed through an ancient temple doorway at Aswan": "Sungai Nil dan bukit gurun dilihat melalui pintu kuil purba di Aswan",
      "The Red Pyramid of Dahshur under a clear desert sky": "Piramid Merah Dahshur di bawah langit gurun yang cerah",
      "The Roman Amphitheatre at Kom el-Dikka in Alexandria": "Amfiteater Rom di Kom el-Dikka, Alexandria",
      "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument": "Piramid Berundak Djoser di Saqqara, monumen batu tertua di dunia",
      "The ancient Mosque of Amr ibn al-As in Old Cairo": "Masjid Amr ibn al-As yang purba di Kaherah Lama",
      "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel": "Empat patung gergasi Ramses II yang sedang duduk di Kuil Agung Abu Simbel",
      "The grand hall of the Egyptian Museum in Cairo": "Dewan agung Muzium Mesir di Kaherah",
      "The great hypostyle hall of Karnak Temple in Luxor": "Dewan hipostil agung Kuil Karnak di Luxor",
      "The island Temple of Philae rising from the Nile near Aswan": "Kuil Philae di pulau, menjulang dari Sungai Nil berhampiran Aswan",
      "The lighthouse on the Alexandria seafront on the Mediterranean": "Rumah api di tepi laut Alexandria, di Laut Mediterranean",
      "The mud-brick fortress of Shali rising above Siwa Oasis": "Kubu bata lumpur Shali menjulang di atas Oasis Siwa",
      "The seafront Montaza Palace and its gardens in Alexandria": "Istana Montaza di tepi laut beserta tamannya di Alexandria",
      "The shaded deck of a Nile dahabiya, set for a private party": "Geladak beratap sebuah dahabiya Sungai Nil, disediakan untuk majlis persendirian",
      "The teak sun-deck of a Nile cruise vessel set for the day": "Geladak jemur kayu jati sebuah kapal pelayaran Sungai Nil, tersedia untuk hari itu",
      "The two rock temples of Abu Simbel above Lake Nasser": "Dua kuil batu Abu Simbel di atas Tasik Nasser",
      "Turquoise salt lake with a white salt-crusted shore in Siwa Oasis": "Tasik garam biru kehijauan dengan tebing berkerak garam putih di Oasis Siwa"
    },
    "ogAlt": "Kemet — percutian persendirian mewah ke Mesir",
    "cruise": {
      "name": "Pelayaran di Sungai Nil",
"durationLabel": "4 hari / 3 malam",
      "days": [
        {
          "title": "Aswan — Philae, Empangan Tinggi & menaiki kapal",
          "items": [
            "Disambut secara persendirian di Aswan dan lawatan pagi ke Empangan Tinggi serta Obelisk Tidak Siap",
            "Bot bermotor ke Kuil Philae di pulaunya, tempat suci Isis",
            "Menaiki kapal pelayaran anda sebelum makan tengah hari; petang bebas di geladak jemur"
          ]
        },
        {
          "title": "Kom Ombo & Edfu",
          "items": [
            "Belayar pada waktu pagi ke Kom Ombo dan kuil berkembarnya di atas tebing sungai",
            "Terus ke Edfu — Kuil Horus, kuil paling terpelihara di Mesir",
            "Malam di atas kapal ketika kapal berlabuh di kaki bandar kuil itu"
          ]
        },
        {
          "title": "Pintu air Esna & tiba di Luxor",
          "items": [
            "Melalui pintu air Esna ketika lembah semakin luas menghala ke Thebes",
            "Tiba di Luxor pada petang hari; lawatan malam pilihan ke Kuil Luxor yang diterangi cahaya",
            "Malam terakhir di atas kapal"
          ]
        },
        {
          "title": "Luxor — kedua-dua tebing & turun dari kapal",
          "items": [
            "Dewan hipostil agung Karnak bersama Egyptologist anda",
            "Menyeberang ke Tebing Barat — Lembah Raja-Raja dan Kuil Hatshepsut",
            "Turun dari kapal dan pemindahan ke hotel anda di Luxor, stesen kereta api atau lapangan terbang"
          ]
        }
      ],
      "productHeading": "Pelayaran empat hari, hari demi hari",
      "productLede": "Inilah pelayaran seperti yang kami jalankan: tiga malam di sungai dari Aswan ke Luxor, setiap lawatan di darat bersifat persendirian bersama Egyptologist anda sendiri. Kapalnya dikongsi; panduan, kenderaan dan lawatan anda tidak."
    },
    "ui": {
      "priceForTwo": "%p seorang bagi dua pengembara",
      "flyVersion": "Dengan penerbangan domestik menggantikan dua malam di kereta api tidur, dan malam-malam itu di hotel: %p seorang",
      "monthByMonth": "Bulan demi bulan",
      "compareOptions": "Bandingkan pilihan",
      "byOccasion": "Mengikut majlis",
      "travelGuides": "Panduan perjalanan",
      "ariaBreadcrumb": "Jejak navigasi",
      "ariaLanguage": "Bahasa",
      "ariaLanguageFooter": "Bahasa (pengaki)",
      "ariaMainNav": "Menu utama",
      "email": "E-mel",
      "mcpHello": "Helo Kemet.",
      "mcpAbout": "Helo Kemet — saya ingin bertanya tentang \"%s\"."
    }
  },
  "ar": {
    "alts": {
      "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea": "وعاء من الفول المدمس تعلوه الطماطم والأعشاب، إلى جانبه ليمون وكوب شاي",
      "A colossus of Ramesses II at the entrance of Luxor Temple": "تمثال ضخم لرمسيس الثاني عند مدخل معبد الأقصر",
      "A decorated camel resting before the Pyramids of Giza in early light": "جمل مزيّن يستريح أمام أهرامات الجيزة في ضوء الصباح الأول",
      "A jetty reaching over turquoise water to an island near Hurghada": "رصيف ميناء يمتد فوق مياه فيروزية نحو جزيرة قرب الغردقة",
      "A painted royal tomb in the Valley of the Kings, Luxor": "مقبرة ملكية مزخرفة بالرسوم في وادي الملوك بالأقصر",
      "A scuba diver beside a vivid Red Sea coral reef teeming with fish": "غوّاص بجوار شعاب مرجانية نابضة بالألوان في البحر الأحمر تعجّ بالأسماك",
      "A stone-paved lane of Islamic Cairo glowing with lanterns at night": "زقاق مرصوف بالحجر في القاهرة الإسلامية تتوهج فيه الفوانيس ليلًا",
      "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh": "مخيم شاطئي بسقف من القش فوق مياه الشعاب المرجانية الضحلة في البحر الأحمر عند شرم الشيخ",
      "Brightly decorated Nubian boats moored on the Nile at Aswan": "قوارب نوبية مزدانة بالألوان راسية على النيل في أسوان",
      "Fortified walls, bell tower and cypress garden of Saint Catherine's Monastery below a granite slope": "أسوار محصّنة وبرج الأجراس وحديقة السرو في دير سانت كاترين تحت سفح من الجرانيت",
      "Green sea turtle grazing on a seagrass meadow underwater at Abu Dabbab, Marsa Alam": "سلحفاة بحرية خضراء ترعى في مرج من الأعشاب البحرية تحت الماء في أبو دباب بمرسى علم",
      "Hathor-headed columns and blue painted ceiling in the hypostyle hall of the Temple of Hathor at Dendera": "أعمدة تعلوها رؤوس حتحور وسقف أزرق مزخرف في بهو الأعمدة بمعبد حتحور في دندرة",
      "Hot-air balloons drifting over the West Bank of Luxor at dawn": "مناطيد تحلّق فوق البر الغربي للأقصر عند الفجر",
      "Kemet guests jumping for joy above the Giza pyramid panorama": "ضيوف Kemet يقفزون فرحًا أمام بانوراما أهرامات الجيزة",
      "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions": "كشري، تعلوه صلصة الطماطم فوق المعكرونة والعدس والحمص والبصل المقرمش المقلي",
      "Layered red granite ridges of the Sinai mountains at sunrise seen from Mount Sinai": "سلاسل متراصّة من الجرانيت الأحمر في جبال سيناء عند الشروق، كما تُرى من جبل موسى",
      "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri": "تماثيل أوزيرية لحتشبسوت على الشرفة العليا من معبدها في الدير البحري",
      "Rounded white chalk formations rising from sand in Egypt's White Desert in low sunlight": "تكوينات بيضاء مستديرة من الحجر الجيري تنبثق من الرمال في الصحراء البيضاء بمصر في ضوء الشمس المنخفض",
      "The Great Pyramid of Khufu on the Giza plateau": "الهرم الأكبر لخوفو على هضبة الجيزة",
      "The Great Sphinx of Giza facing the dawn": "أبو الهول في الجيزة في مواجهة الفجر",
      "The Great Sphinx of Giza with a pyramid rising behind it": "أبو الهول في الجيزة وخلفه هرم شامخ",
      "The Magic Lake and desert dunes of the Fayoum oasis under a wide sky": "بحيرة السحر وكثبان الصحراء في واحة الفيوم تحت سماء رحبة",
      "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo": "مسجد محمد علي يتوّج قلعة صلاح الدين في القاهرة",
      "The Nile and desert hills framed through an ancient temple doorway at Aswan": "النيل والتلال الصحراوية يظهران من خلال مدخل معبد قديم في أسوان",
      "The Red Pyramid of Dahshur under a clear desert sky": "الهرم الأحمر في دهشور تحت سماء صحراوية صافية",
      "The Roman Amphitheatre at Kom el-Dikka in Alexandria": "المدرج الروماني في كوم الدكة بالإسكندرية",
      "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument": "هرم زوسر المدرّج في سقارة، أقدم صرح حجري في العالم",
      "The ancient Mosque of Amr ibn al-As in Old Cairo": "جامع عمرو بن العاص العتيق في القاهرة القديمة",
      "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel": "التماثيل الأربعة الجالسة لرمسيس الثاني في المعبد الكبير بأبو سمبل",
      "The grand hall of the Egyptian Museum in Cairo": "القاعة الكبرى في المتحف المصري بالقاهرة",
      "The great hypostyle hall of Karnak Temple in Luxor": "بهو الأعمدة الكبير في معبد الكرنك بالأقصر",
      "The island Temple of Philae rising from the Nile near Aswan": "معبد فيلة الواقع على جزيرة ينهض من النيل قرب أسوان",
      "The lighthouse on the Alexandria seafront on the Mediterranean": "المنارة على كورنيش الإسكندرية المطل على البحر المتوسط",
      "The mud-brick fortress of Shali rising above Siwa Oasis": "قلعة شالي المشيّدة من الطوب اللبن ترتفع فوق واحة سيوة",
      "The seafront Montaza Palace and its gardens in Alexandria": "قصر المنتزه وحدائقه المطلة على البحر في الإسكندرية",
      "The shaded deck of a Nile dahabiya, set for a private party": "سطح مظلل في ذهبية نيلية، جُهّز لحفل خاص",
      "The teak sun-deck of a Nile cruise vessel set for the day": "سطح الشمس المكسوّ بخشب الساج في سفينة نيلية، جُهّز لنهار جديد",
      "The two rock temples of Abu Simbel above Lake Nasser": "معبدا أبو سمبل المنحوتان في الصخر فوق بحيرة ناصر",
      "Turquoise salt lake with a white salt-crusted shore in Siwa Oasis": "بحيرة مالحة فيروزية بشاطئ أبيض تغطيه قشرة الملح في واحة سيوة"
    },
    "ogAlt": "Kemet — رحلات خاصة فاخرة إلى مصر",
    "cruise": {
      "name": "رحلة النيل",
"durationLabel": "٤ أيام / ٣ ليالٍ",
      "days": [
        {
          "title": "أسوان — فيلة والسد العالي وصعود السفينة",
          "items": [
            "استقبال خاص في أسوان، وزيارة صباحية للسد العالي والمسلة الناقصة",
            "بقارب آلي إلى معبد فيلة القائم على الجزيرة، حرم إيزيس",
            "الصعود إلى سفينتكم النيلية قبل الغداء، وبعد الظهر وقت حر على سطح الشمس"
          ]
        },
        {
          "title": "كوم أمبو وإدفو",
          "items": [
            "إبحار صباحي إلى كوم أمبو ومعبدها المزدوج المطل على ضفة النهر",
            "مواصلة الرحلة إلى إدفو — معبد حورس، أكمل المعابد المحفوظة في مصر",
            "أمسية على متن السفينة وهي ترسو أسفل بلدة المعبد"
          ]
        },
        {
          "title": "قناطر إسنا والوصول إلى الأقصر",
          "items": [
            "عبور قناطر إسنا فيما يتسع الوادي في اتجاه طيبة",
            "وصول بعد الظهر إلى الأقصر، وزيارة مسائية اختيارية لمعبد الأقصر مضاءً",
            "الليلة الأخيرة على متن السفينة"
          ]
        },
        {
          "title": "الأقصر — البرّان والنزول من السفينة",
          "items": [
            "بهو الأعمدة الكبير في الكرنك برفقة مرشدكم المتخصص في المصريات",
            "عبور إلى البر الغربي — وادي الملوك ومعبد حتشبسوت",
            "مغادرة السفينة والانتقال إلى فندقكم في الأقصر أو المحطة أو المطار"
          ]
        }
      ],
      "productHeading": "رحلة الأربعة أيام، يومًا بيوم",
      "productLede": "هذه الرحلة كما ننظّمها: ثلاث ليالٍ على النهر من أسوان إلى الأقصر، وكل زيارة على البر خاصة بكم برفقة مرشدكم المتخصص في المصريات. السفينة مشتركة؛ أما مرشدكم ومركبتكم وزياراتكم فلكم وحدكم."
    },
    "ui": {
      "priceForTwo": "%p للفرد، لمسافرَين اثنين",
      "flyVersion": "بالطيران الداخلي بدل ليلتَي قطار النوم، مع قضاء هاتين الليلتين في فندق: %p للفرد",
      "monthByMonth": "شهرًا بشهر",
      "compareOptions": "قارنوا بين الخيارات",
      "byOccasion": "بحسب المناسبة",
      "travelGuides": "أدلة السفر",
      "ariaBreadcrumb": "مسار التنقل",
      "ariaLanguage": "اللغة",
      "ariaLanguageFooter": "اللغة (التذييل)",
      "ariaMainNav": "القائمة الرئيسية",
      "email": "البريد الإلكتروني",
      "mcpHello": "مرحبًا Kemet.",
      "mcpAbout": "مرحبًا Kemet — أستفسر عن «%s»."
    }
  }
};

const missed = new Set<string>();
/**
 * An English alt text in the page's language. English pages get it back
 * unchanged. A string with no translation also comes back unchanged, and is
 * reported once per build: an English description on a German page is a
 * defect (it was on 360 pages before this existed), not a silent default.
 */
export function localAlt(locale: SiteLocale | undefined, alt: string): string {
  if (!locale || locale === "en" || !alt) return alt;
  const hit = LOCAL_STRINGS[locale as TranslatedLocale]?.alts[alt];
  if (hit) return hit;
  const key = `${locale}|${alt}`;
  if (!missed.has(key)) {
    missed.add(key);
    console.warn(`  [i18n] no ${locale} alt text for: "${alt}" (add it to data/i18n/strings.ts)`);
  }
  return alt;
}

/**
 * Numbers a template prints itself (a section's "01", "Day 3"), in the digits
 * the page's language reads. The Arabic pages write their prices and dates in
 * Arabic-Indic digits; the template's own numbering was Western, so 89 of the
 * 121 Arabic pages mixed the two on one screen.
 */
export function localDigits(locale: SiteLocale | undefined, value: string | number): string {
  const text = String(value);
  return locale === "ar" ? text.replace(/[0-9]/g, (d) => String.fromCharCode(0x660 + Number(d))) : text;
}
