// ---------------------------------------------------------------------------
// Die Reisen auf Deutsch — the journeys the German campaign actually sends
// people to.
//
// WHY THESE FIVE AND IN THIS ORDER
// They are the journeys on the German Christmas landing page that did not
// already have a German page — the Nile cruise did, through the funnel
// groups, so it is not repeated here. Until now every one of those cards opened an English page:
// the ad was in German, the landing page was in German, and the moment a
// reader clicked the thing they were being sold, they were in English. These
// are the pages that close that gap.
//
// NOT A MECHANICAL TRANSLATION
// The German is written for a German reader, not transposed word for word.
// Where the English says "the world's greatest open-air museum" the German
// says what a German traveller would actually be told. Site names use the
// German conventions (Assuan, Gizeh, Sethos I., Cheops) because that is what
// this reader has met in every book and documentary about Egypt they have
// ever seen, and "Khufu" would read as a different pharaoh.
//
// The repeated lines — transfers, entrance fees, tipping — are NOT here. They
// are in phrasebook.ts, looked up by their English text, so each of them is
// translated once for all 25 journeys rather than once per journey.
// ---------------------------------------------------------------------------
import type { TourText } from "./types";

export const de: TourText[] = [
  // ===== 1. Egypt Icons & Nile Cruise =====================================
  {
    slug: "tour-10-day",
    localeSlug: "aegypten-hoehepunkte-nilkreuzfahrt",
    metaTitle: "Ägypten-Rundreise 10 Tage mit Nilkreuzfahrt | Kemet",
    metaDescription:
      "Zehn Tage Ägypten privat: Kairo, Alexandria, Nachtzug nach Assuan und drei Nächte Nilkreuzfahrt bis Luxor — mit eigenem Ägyptologen.",
    keywords:
      "ägypten rundreise 10 tage, nilkreuzfahrt rundreise, ägypten privatreise, kairo luxor assuan reise, ägypten reise mit nilkreuzfahrt",
    crumb: "Höhepunkte & Nilkreuzfahrt",
    title: "Ägyptens Höhepunkte & Nilkreuzfahrt",
    subtitle:
      "Zehn ruhige Tage von den Pyramiden von Gizeh bis zu den Tempeln Oberägyptens, zusammengehalten von drei Nächten auf dem Nil.",
    durationLabel: "10 Tage / 9 Nächte",
    startPoint: "Kairo (Flughafen oder Hotel)",
    summary:
      "Unsere vollständigste Reise: Kairo, Alexandria, mit dem Nachtzug nach Süden und drei Nächte auf dem Nil von Assuan nach Luxor — jede Schicht Ägyptens in einem Bogen.",
    overview:
      "Das ist Ägypten in ganzer Breite, und im Tempo so angelegt, dass man es erlebt statt abhakt. Sie beginnen in Kairo mit den Schätzen des Ägyptischen Museums, verbringen einen Tag am Mittelmeer in Alexandria und fahren dann mit dem Nachtzug nach Assuan. Von dort trägt Sie eine dreitägige Nilkreuzfahrt flussabwärts vorbei an Kom Ombo und Edfu nach Luxor, wo die Tempel von Karnak und die Königsgräber des Westufers warten. Zurück in Kairo stehen die Pyramiden von Gizeh und die alten Gassen des islamischen Kairo. Gereist wird durchgehend privat, geführt von Ihrem eigenen Ägyptologen.",
    itinerary: [
      {
        title: "Kairo & das Ägyptische Museum",
        items: [
          "Privater Empfang am Flughafen Kairo",
          "Transfer zum Hotel und Begrüßungsgespräch",
          "Nachmittags ins Ägyptische Museum am Tahrir — das Königsgold von Tanis und die Meisterwerke des Alten Reiches",
        ],
      },
      {
        title: "Alexandria am Mittelmeer",
        items: [
          "Fahrt über die Wüstenstraße nach Alexandria",
          "Katakomben von Kom esch-Schukafa und die Pompeiussäule",
          "Zitadelle von Qaitbay auf dem Platz des alten Pharos und die moderne Bibliotheca Alexandrina",
          "Fischessen an der Corniche, dann zurück nach Kairo",
        ],
      },
      {
        title: "Koptisches Kairo & Nachtzug nach Assuan",
        items: [
          "Hängende Kirche, Abu Serga und die Gassen von Alt-Kairo",
          "Am frühen Abend Transfer zum Bahnhof",
          "Nachtzug nach Assuan, mit eigenem Abteil und Abendessen an Bord",
        ],
      },
      {
        title: "Assuan & Einschiffung",
        items: [
          "Ankunft in Assuan, Besuch des Hochdamms und des Unvollendeten Obelisken",
          "Mit dem Boot zum Inseltempel von Philae, dem Heiligtum der Isis",
          "An Bord Ihres Nilschiffs; Mittagessen auf dem Fluss",
        ],
      },
      {
        title: "Fahrt nach Kom Ombo & Edfu",
        items: [
          "Vormittags flussabwärts durch das Niltal",
          "Kom Ombo, der Doppeltempel des Sobek und des älteren Horus",
          "Weiter nach Edfu zum großen Horus-Tempel, dem besterhaltenen Ägyptens",
        ],
      },
      {
        title: "Schleuse von Esna & Ankunft in Luxor",
        items: [
          "Durch die Schleuse von Esna, wo sich das Tal öffnet",
          "Nachmittags Ankunft in Luxor, Zeit zum Ausruhen an Bord",
          "Optional: Ton-und-Licht-Abend in Karnak (gegen Aufpreis)",
        ],
      },
      {
        title: "Luxor, Ostufer",
        items: [
          "Karnak, die größte Tempelanlage der Antike",
          "Luxor-Tempel mitten in der Stadt",
          "Ausschiffung und Transfer in Ihr Hotel in Luxor",
        ],
      },
      {
        title: "Westufer & Zug nach Kairo",
        items: [
          "Tal der Könige und die grabdurchzogenen Hänge von Theben",
          "Totentempel der Hatschepsut und die Memnonkolosse",
          "Abends mit dem Nachtzug zurück nach Kairo",
        ],
      },
      {
        title: "Gizeh & Sakkara",
        items: [
          "Die Pyramiden des Cheops, Chephren und Mykerinos und die Große Sphinx",
          "Stufenpyramide des Djoser in Sakkara, das älteste Steinbauwerk der Welt",
          "Panoramablick über das Plateau von Gizeh",
        ],
      },
      {
        title: "Islamisches Kairo & Abreise",
        items: [
          "Saladin-Zitadelle und die Alabastermoschee Muhammad Alis",
          "Basar Khan el-Khalili für einen letzten Bummel",
          "Privater Transfer zum Flughafen",
        ],
      },
    ],
    comfort: {
      sleep:
        "Hotels in Kairo und Luxor, drei Nächte auf dem Nilschiff und zwei Nächte im Schlafwagen — bei der Flugvariante stattdessen Hotels",
      drives: "Ein Tagesausflug von Kairo nach Alexandria und zurück auf der Straße",
    },
    faqs: [
      {
        q: "Ist die Nilkreuzfahrt privat?",
        a: "Sie reisen mit Ihrem eigenen Ägyptologen und privaten Transfers, das Schiff selbst teilen Sie jedoch mit anderen Gästen. Die Kabine gehört Ihnen, und alle Besichtigungen laufen privat.",
      },
      {
        q: "Wie funktionieren die Nachtzüge?",
        a: "Sie fahren in einem eigenen Schlafwagenabteil, Abendessen und Frühstück werden an Bord serviert. Das erspart einen Transfertag, und Sie kommen ausgeruht zur morgendlichen Besichtigung an.",
      },
      {
        q: "Lässt sich Abu Simbel ergänzen?",
        a: "Ja. Abu Simbel bieten wir als Zusatzleistung ab Assuan an, per Kurzflug oder im privaten Wagen, und am besten am Assuan-Tag. Wir arrangieren es auf Wunsch.",
      },
      {
        q: "Wann ist die beste Reisezeit?",
        a: "Oktober bis April bringt angenehme Temperaturen in Kairo wie in Oberägypten. Im Sommer ist der Süden heiß, dann beginnen wir früh und legen nachmittags eine Pause ein.",
      },
    ],
  },

  // tour-nile-cruise is NOT here, and must not be: it is one of the eight
  // funnel pages, so it already has a German page at de/nilkreuzfahrt.html
  // through config/translation-groups.json. A second German page about the
  // same cruise would compete with it for the same query and split the
  // ranking — and the hreflang audit caught exactly that when this file
  // briefly carried one. tour-i18n.ts now refuses the duplicate at build time.

  // ===== 2. Egypt Highlights Deluxe =======================================
  {
    slug: "tour-7-day",
    localeSlug: "aegypten-rundreise-7-tage",
    metaTitle: "Ägypten Rundreise 7 Tage — Kairo, Alexandria, Luxor | Kemet",
    metaDescription:
      "Eine Woche Ägypten privat: Ägyptisches Museum, Alexandria, die Tempel und Gräber von Luxor und die Pyramiden von Gizeh.",
    keywords:
      "ägypten rundreise 7 tage, ägypten eine woche, kairo luxor rundreise, ägypten privatreise woche, alexandria tagesausflug kairo",
    crumb: "Rundreise in 7 Tagen",
    title: "Ägyptens Höhepunkte Deluxe",
    subtitle:
      "Eine Woche, die das Wesentliche einsammelt — Kairo, Alexandria und Luxor, mit Nachtzugfahrten dazwischen.",
    durationLabel: "7 Tage / 6 Nächte",
    startPoint: "Kairo (Flughafen oder Hotel)",
    summary:
      "Die großen Namen Ägyptens in sieben Tagen — das Ägyptische Museum, Alexandria, die Tempel und Gräber von Luxor und die Pyramiden von Gizeh.",
    overview:
      "Für Reisende, die eine Woche haben, bringt diese Reise Ägypten auf seine stärksten Stücke, ohne sie zu hetzen. Kairo beginnt mit dem Ägyptischen Museum; ein ganzer Tag am Mittelmeer gehört Alexandria; dann trägt Sie der Nachtzug nach Luxor zu den Tempeln der Lebenden und den Gräbern der Toten. Zurück im Norden stehen die Pyramiden von Gizeh, Sakkara und das mittelalterliche Herz des islamischen Kairo. Durchgehend privat, mit Ihrem eigenen Ägyptologen und Hotels der vier- bis fünf-Sterne-Kategorie.",
    itinerary: [
      {
        title: "Kairo & das Ägyptische Museum",
        items: [
          "Privater Empfang am Flughafen und Transfer zum Hotel",
          "Nachmittags ins Ägyptische Museum am Tahrir",
          "Abends Einführung mit Ihrem Guide",
        ],
      },
      {
        title: "Tagesausflug nach Alexandria",
        items: [
          "Fahrt an die Mittelmeerküste",
          "Katakomben von Kom esch-Schukafa, Pompeiussäule und Zitadelle von Qaitbay",
          "Bibliotheca Alexandrina und Fischessen an der Corniche",
        ],
      },
      {
        title: "Koptisches Kairo & Nachtzug nach Luxor",
        items: [
          "Vormittags Hängende Kirche und Alt-Kairo",
          "Abends Transfer zum Bahnhof",
          "Nachtzug nach Süden mit eigenem Abteil",
        ],
      },
      {
        title: "Luxor, Ostufer",
        items: [
          "Tempelanlage von Karnak und die Sphinxallee",
          "Luxor-Tempel im Herzen der Stadt",
          "Bezug Ihres Hotels in Luxor",
        ],
      },
      {
        title: "Westufer & Zug nach Kairo",
        items: [
          "Tal der Könige und der Totentempel der Hatschepsut",
          "Memnonkolosse",
          "Abends mit dem Nachtzug zurück nach Kairo",
        ],
      },
      {
        title: "Gizeh & Sakkara",
        items: [
          "Pyramiden von Gizeh und die Große Sphinx",
          "Stufenpyramide des Djoser in Sakkara",
          "Panoramablick über das Plateau",
        ],
      },
      {
        title: "Islamisches Kairo & Abreise",
        items: [
          "Saladin-Zitadelle und die Moschee Muhammad Alis",
          "Basar Khan el-Khalili",
          "Privater Transfer zum Flughafen",
        ],
      },
    ],
    comfort: {
      sleep:
        "Hotels in Kairo und Luxor und zwei Nächte im Schlafwagen — bei der Flugvariante stattdessen Hotels",
      drives: "Ein Tagesausflug von Kairo nach Alexandria und zurück auf der Straße",
    },
    faqs: [
      {
        q: "Wie viel muss ich laufen?",
        a: "Ein gut machbares Maß — Tempelanlagen wie Karnak bedeuten ein bis zwei Stunden zu Fuß auf unebenem Boden. Wir takten jeden Tag entsprechend und ruhen in der Mittagshitze.",
      },
      {
        q: "Sind die Nachtzüge bequem?",
        a: "Ja. Sie haben ein eigenes Schlafwagenabteil, Abendessen und Frühstück werden an Bord serviert — die langen Strecken passieren, während Sie schlafen.",
      },
      {
        q: "Kann ich um eine Nilkreuzfahrt verlängern?",
        a: "Sehr gern — viele Gäste hängen drei oder vier Nächte zwischen Assuan und Luxor an. Nennen Sie uns Ihre Termine, dann planen wir die Verlängerung ein.",
      },
    ],
  },

  // ===== 3. The Grand Tour of Egypt =======================================
  {
    slug: "tour-grand-14day",
    localeSlug: "grosse-aegypten-rundreise-14-tage",
    metaTitle: "Große Ägypten-Rundreise, 14 Tage mit Rotem Meer | Kemet",
    metaDescription:
      "Vierzehn Tage privat: Kairo, Alexandria, Abu Simbel, drei Nächte Nilkreuzfahrt und vier Tage am Roten Meer. Alle Inlandsflüge inbegriffen.",
    keywords:
      "ägypten rundreise 14 tage, große ägypten rundreise, ägypten mit rotem meer, abu simbel rundreise, ägypten privatreise 2 wochen",
    crumb: "Große Rundreise, 14 Tage",
    title: "Die große Ägypten-Rundreise",
    subtitle:
      "Vierzehn Tage, jede Tonlage des Landes — Kairo, Alexandria, der Nil per Schiff, Abu Simbel und zum Schluss das Rote Meer.",
    durationLabel: "14 Tage / 13 Nächte",
    startPoint: "Kairo (Flughafen oder Hotel)",
    summary:
      "Unsere vollständigste Reise: zwei Hauptstädte, eine Nilkreuzfahrt, der Bergtempel Ramses' II. in Abu Simbel und vier Tage am Roten Meer, um alles sacken zu lassen.",
    overview:
      "Das ist die Reise für alle, die einmal kommen und es ganz sehen wollen. Die erste Woche gehört der Geschichte: Kairos zwei große Museen und seine mittelalterlichen Viertel, Alexandria am Mittelmeer, dann ein Flug nach Süden zu Abu Simbel — dem Bergtempel Ramses' II. über dem Nassersee —, bevor eine dreitägige Kreuzfahrt Sie von Assuan nach Luxor trägt. Die zweite Woche wechselt vollständig die Tonart: nach Luxors Gräbern und Tempeln fliegen Sie nach Scharm el-Scheich, wo die Wüste auf eines der klarsten Gewässer der Erde trifft. Vier Tage am Roten Meer beschließen die Reise, mit Schnorcheln über den Riffen von Ras Mohammed und nichts im Programm, das sich nicht zugunsten des Pools streichen ließe. Alle Inlandsflüge sind inbegriffen; jeder geführte Tag ist privat.",
    itinerary: [
      {
        title: "Ankunft in Kairo",
        items: [
          "Privater Empfang am Flughafen und Transfer zum Hotel",
          "Abends Einführung mit Ihrem Reiseplaner",
        ],
      },
      {
        title: "Gizeh & das Grand Egyptian Museum",
        items: [
          "Pyramiden, Panorama und Sphinx in der Morgenkühle",
          "Tutanchamuns vollständiger Schatz im GEM",
        ],
      },
      {
        title: "Islamisches & koptisches Kairo",
        items: [
          "Die Zitadelle und die Alabastermoschee Muhammad Alis",
          "Die Hängende Kirche und die Gassen von Alt-Kairo",
          "Khan el-Khalili in der Dämmerung",
        ],
      },
      {
        title: "Tag in Alexandria",
        items: [
          "Katakomben von Kom esch-Schukafa und die Pompeiussäule",
          "Zitadelle von Qaitbay auf dem Platz des Pharos",
          "Fischessen an der Corniche; zurück nach Kairo",
        ],
      },
      {
        title: "Nach Süden — Assuan",
        items: [
          "Vormittags Flug nach Assuan",
          "Philae mit dem Boot und der Unvollendete Obelisk",
          "Abends frei an der Corniche",
        ],
      },
      {
        title: "Abu Simbel",
        items: [
          "Vor Sonnenaufgang auf der Straße nach Abu Simbel",
          "Der Große Tempel Ramses' II. und der Tempel der Nefertari",
          "Zurück nach Assuan; Felukenfahrt zur goldenen Stunde",
        ],
      },
      {
        title: "Einschiffung zur Nilkreuzfahrt",
        items: [
          "Vormittag zur freien Verfügung; vor dem Mittagessen an Bord",
          "Nachmittags Auslaufen auf den Fluss",
        ],
      },
      {
        title: "Kom Ombo & Edfu",
        items: [
          "Der Doppeltempel des Sobek und des älteren Horus",
          "Edfu — der besterhaltene Tempel Ägyptens",
        ],
      },
      {
        title: "Ankunft in Luxor",
        items: [
          "Durch die Schleuse von Esna nach Theben",
          "Abends der beleuchtete Luxor-Tempel (optional)",
        ],
      },
      {
        title: "Luxor — beide Ufer",
        items: [
          "Karnak mit Ihrem Ägyptologen zur Öffnung",
          "Tal der Könige und Tempel der Hatschepsut",
          "Ausschiffung in Ihr Hotel in Luxor",
        ],
      },
      {
        title: "Flug ans Rote Meer",
        items: [
          "Vormittags Flug nach Scharm el-Scheich",
          "Check-in; hier endet das Programm mit Absicht",
        ],
      },
      {
        title: "Die Riffe von Ras Mohammed",
        items: [
          "Bootstag im Nationalpark — zwei Schnorchelstopps über Korallenwänden",
          "Mittagessen an Deck",
        ],
      },
      {
        title: "Rotes Meer zur freien Verfügung",
        items: [
          "Ein freier Tag — tauchen, Spa oder einfach das Meer",
          "Abschiedsessen im Old Market von Scharm",
        ],
      },
      {
        title: "Abreise",
        items: ["Flug nach Kairo, Anschluss an Ihren internationalen Rückflug"],
      },
    ],
    comfort: {
      sleep:
        "Hotels in Kairo und Assuan, drei Nächte auf dem Nilschiff, ein Hotel in Luxor, danach ein Resort am Roten Meer",
      drives: "Ein Tagesausflug nach Alexandria, und Assuan–Abu Simbel und zurück auf der Straße",
      early: "Eine Fahrt nach Abu Simbel vor Sonnenaufgang",
    },
    faqs: [
      {
        q: "Sind vierzehn Tage für einen ersten Besuch zu lang?",
        a: "Es ist die Länge, die sich die meisten Wiederkehrer beim ersten Mal gewünscht hätten. Gerade die Tage am Roten Meer machen die Geschichtswoche tragfähig — die Reise atmet, statt Erschöpfung anzusammeln.",
      },
      {
        q: "Wie viel von dieser Reise wird geflogen?",
        a: "Drei Inlandsflüge von je etwa einer Stunde, die sonst zwölfstündige Straßen- oder Bahnetappen wären. Die eine lange Fahrt, die wir behalten — Assuan nach Abu Simbel —, ist selbst Teil des Erlebnisses: offene Wüste im Morgengrauen.",
      },
      {
        q: "Lässt sich der Teil am Roten Meer tauschen oder verlängern?",
        a: "Ohne Weiteres. Manche Gäste tauschen ihn gegen zusätzliche Nächte in Luxor oder gegen Siwa, andere dehnen Scharm auf eine volle Woche aus. Die ersten zehn Tage sind das Rückgrat, der Schluss gehört Ihnen.",
      },
    ],
  },

  // ===== 4. Cairo VIP Short Stay ==========================================
  {
    slug: "tour-cairo-vip-3day",
    localeSlug: "kairo-kurzreise-vip-3-tage",
    metaTitle: "Kairo Kurzreise 3 Tage, VIP — Pyramiden & GEM | Kemet",
    metaDescription:
      "Drei Tage Kairo ohne Reibungsverluste: Fast-Track bei der Einreise, privater Morgen am Plateau, das GEM und das islamische Kairo bei Laternenlicht.",
    keywords:
      "kairo kurzreise, kairo 3 tage, kairo stopover, grand egyptian museum besuch, kairo privat mit guide",
    crumb: "Kairo VIP, 3 Tage",
    title: "Kairo VIP-Kurzreise",
    subtitle:
      "Drei Tage, null Reibung — Fast-Track bei der Ankunft, die Pyramiden und beide großen Museen, und das mittelalterliche Kairo, wenn die Tagesgäste weg sind.",
    durationLabel: "3 Tage / 2 Nächte",
    startPoint: "Kairo (Flughafen, VIP-Empfang)",
    summary:
      "Kairo auf das Wesentliche gebracht und concierge-geführt: Fast-Track bei der Einreise, ein privater Morgen am Plateau, das Grand Egyptian Museum und das laternenbeleuchtete islamische Kairo.",
    overview:
      "Gemacht für Reisende, die mit wenig Zeit durch Kairo kommen und sich weigern, es schlecht zu erleben. Diese Kurzreise verdichtet das Wesentliche, ohne je gedrängt zu wirken. Empfangen werden Sie noch im Sicherheitsbereich, mit Fast-Track bei der Einreise und Gepäckbetreuung. Der Morgen in Gizeh läuft früh und privat; das Grand Egyptian Museum folgt, während sich die Menge am Plateau woanders staut. Der letzte Abend gehört dem mittelalterlichen Kairo zu seiner besten Stunde — die Al-Muizz-Straße und der Khan el-Khalili nach Einbruch der Dunkelheit, wenn die Laternen die Reisegruppen ablösen. Ein fester Fahrer und ein Ägyptologe bleiben die ganze Zeit bei Ihnen, und das Programm richtet sich Stunde für Stunde danach, wie Sie sich tatsächlich fühlen.",
    itinerary: [
      {
        title: "VIP-Ankunft & die Zitadelle",
        items: [
          "Empfang im Sicherheitsbereich, Fast-Track bei der Einreise und privater Transfer",
          "Nachmittags Saladin-Zitadelle und Moschee Muhammad Alis",
          "Sonnenuntergang über der Altstadt vom Al-Azhar-Park",
        ],
      },
      {
        title: "Gizeh & das Grand Egyptian Museum",
        items: [
          "Das Plateau zur Öffnung — Pyramiden, Panorama und Sphinx",
          "Nach dem Mittagessen die große Treppe und die Tutanchamun-Säle des GEM",
          "Abend frei, auf Wunsch mit unseren Restaurantreservierungen",
        ],
      },
      {
        title: "Mittelalterliches Kairo & Abreise",
        items: [
          "Das Ägyptische Museum am Tahrir oder das koptische Kairo — Sie entscheiden",
          "Al-Muizz-Straße und Khan el-Khalili, wenn die Laternen angehen",
          "Fast-Track-Begleitung beim Abflug",
        ],
      },
    ],
    comfort: {
      sleep: "Beide Nächte in einem Hotel in Kairo",
    },
    faqs: [
      {
        q: "Was umfasst der VIP-Service am Flughafen genau?",
        a: "Sie werden an der Flugzeugtür oder an der Fluggastbrücke abgeholt, durch eine Fast-Track-Spur bei der Einreise begleitet, und Ihr Gepäck wird bis zum Wagen gebracht. Beim Abflug übernimmt dasselbe Team Check-in und Sicherheitskontrolle in umgekehrter Reihenfolge. Damit wird aus dem Flughafen Kairo ein Nicht-Ereignis.",
      },
      {
        q: "Lässt sich das Programm anpassen, wenn ich spät oder mit Jetlag ankomme?",
        a: "Vollständig. Die Reihenfolge oben ist der Normalfall, kein Vertrag — Ihr Guide legt sie nach Ihrer Verfassung neu, und beim Tauschen der Tage geht nichts verloren.",
      },
      {
        q: "Reichen zwei Nächte für Kairo?",
        a: "Sie reichen für das Wesentliche, gut gemacht — genau das verspricht diese Reise. Wenn Sie eine dritte Nacht anhängen können, ist der Tag Sakkara–Dahschur die stärkste Erweiterung.",
      },
    ],
  },

  // ===== 5. Luxor Immersion ===============================================
  {
    slug: "tour-luxor-3day",
    localeSlug: "luxor-3-tage",
    metaTitle: "Luxor 3 Tage privat — beide Ufer in Ruhe | Kemet",
    metaDescription:
      "Drei Tage Luxor ohne Hetze: Karnak zur Öffnung, Tal der Könige vor der Hitze, Hatschepsut und der beleuchtete Tempel samt Sphinxallee.",
    keywords:
      "luxor 3 tage, luxor privat reise, tal der könige besuch, karnak luxor tempel, luxor kurzreise",
    crumb: "Luxor, 3 Tage",
    title: "Luxor in Ruhe",
    subtitle:
      "Drei Tage im größten Freilichtmuseum der Welt — beide Ufer richtig gemacht, mit dem beleuchteten Tempel bei Nacht als Angelpunkt.",
    durationLabel: "3 Tage / 2 Nächte",
    startPoint: "Luxor (Flughafen, Bahnhof oder Hotel)",
    summary:
      "Luxor ohne Sprint: Karnak zur Öffnung, das Tal der Könige vor der Hitze, die Terrassen der Hatschepsut und die Sphinxallee nach Einbruch der Dunkelheit.",
    overview:
      "Luxor bekommt üblicherweise einen einzigen gehetzten Tag; es trägt mehr erhaltene Monumente als der ganze Rest des Landes zusammen. Diese Kurzreise gibt die fehlende Zeit zurück. Der Tag am Ostufer nimmt Karnak zur Öffnung — eine Stunde vor den Reisebussen — und kehrt nach Einbruch der Dunkelheit zum angestrahlten Luxor-Tempel zurück, erreicht über die wiederhergestellte Sphinxallee, was schlicht ein anderes Bauwerk ergibt. Der Tag am Westufer führt in drei Königsgräber hinab, ausgewählt nach Farbe und Besucherströmen, dann zu den in den Fels geschnittenen Terrassen der Hatschepsut und zu den Memnonkolossen. Der letzte Vormittag gehört Ihnen: eine Ballonfahrt über der Nekropole im Morgengrauen, das ausgezeichnete Luxor-Museum, oder gar nichts. Die Reise lässt sich sauber vor oder hinter jede Kairo-Route setzen, per Flug oder Nachtzug.",
    itinerary: [
      {
        title: "Das Ostufer & der Tempel bei Nacht",
        items: [
          "Empfang am Flughafen oder Bahnhof von Luxor",
          "Tempelanlage von Karnak zur Öffnung, mit Ihrem Ägyptologen",
          "Abends: der angestrahlte Luxor-Tempel, betreten über die Sphinxallee",
        ],
      },
      {
        title: "Das Westufer",
        items: [
          "Tal der Könige — drei Gräber vor der Tageshitze",
          "Der Totentempel der Hatschepsut in Deir el-Bahari",
          "Memnonkolosse und das Handwerkerdorf Deir el-Medina (sofern die Zeit reicht)",
        ],
      },
      {
        title: "Ihr Vormittag in Luxor & Abreise",
        items: [
          "Optional eine Ballonfahrt im Morgengrauen, oder die erlesene Sammlung des Luxor-Museums",
          "Privater Transfer zum Flughafen oder Bahnhof",
        ],
      },
    ],
    comfort: {
      sleep: "Beide Nächte in einem Hotel in Luxor",
      early: "Nur wenn Sie sich am letzten Morgen für die Ballonfahrt entscheiden",
    },
    faqs: [
      {
        q: "Welche Gräber im Tal der Könige sind enthalten?",
        a: "Das Standardticket umfasst drei aus der jeweils geöffneten Auswahl, und Ihr Guide führt Sie zu den am besten erhaltenen Malereien des Tages. Tutanchamun, Sethos I. und Ramses V./VI. kosten gesonderte Tickets, die wir vorab besorgen können.",
      },
      {
        q: "Lohnt sich der Abendbesuch im Luxor-Tempel?",
        a: "Es ist der lohnendste Abend Ägyptens. Die Beleuchtung holt Farbe und Tiefe zurück, die die Mittagssonne ausbleicht, und die durchgehend beleuchtete Sphinxallee vergisst man nicht.",
      },
      {
        q: "Wie kombiniere ich das mit Kairo?",
        a: "Per Flug (55 Minuten) oder mit dem Nachtzug, in beide Richtungen. Die meisten Gäste nehmen zuerst Kairo und setzen diese Kurzreise als südliches Kapitel an; wir stimmen die Transfers in beide Richtungen ab.",
      },
    ],
  },
];
