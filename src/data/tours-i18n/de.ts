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

  // ===== 6. From Pyramids to the Sea =====================================
  {
    slug: "tour-4-day",
    localeSlug: "kairo-alexandria-4-tage",
    metaTitle: "Kairo & Alexandria, 4 Tage privat | Kemet",
    metaDescription:
      "Vier Tage im Norden Ägyptens: Ägyptisches Museum, ein ganzer Tag in Alexandria, die Pyramiden von Gizeh und das islamische Kairo.",
    keywords:
      "kairo alexandria reise, ägypten 4 tage, kairo kurzreise pyramiden, alexandria tagesausflug, ägypten privatreise kurz",
    crumb: "Kairo & Alexandria, 4 Tage",
    title: "Von den Pyramiden ans Meer",
    subtitle:
      "Vier Tage, die die Monumente von Kairo und Gizeh mit einem Tag am Mittelmeer in Alexandria verbinden.",
    durationLabel: "4 Tage / 3 Nächte",
    startPoint: "Kairo (Flughafen oder Hotel)",
    summary:
      "Eine kompakte Reise durch den Norden — das Ägyptische Museum, Alexandrias griechisch-römische Schichten, die Pyramiden von Gizeh und das mittelalterliche Kairo.",
    overview:
      "Wenige Tage, aber große Spannweite: Diese Kurzreise stellt die Gründungsbauten des Alten Reiches neben die mittelmeerische Weltstadt Alexandria. Sie beginnen im Ägyptischen Museum, verbringen einen ganzen Tag zwischen Alexandrias Katakomben und seiner Zitadelle und geben Gizeh und Sakkara dann das Morgenlicht, das ihnen zusteht, bevor Sie in den Gassen des islamischen Kairo schließen. Ideal als eigenständige Reise oder als erste Hälfte einer längeren Ägypten-Route.",
    itinerary: [
      {
        title: "Ankunft & das Ägyptische Museum",
        items: [
          "Privater Empfang am Flughafen und Transfer zum Hotel",
          "Nachmittags ins Ägyptische Museum am Tahrir",
          "Empfehlungen Ihres Guides für das Abendessen",
        ],
      },
      {
        title: "Tagesausflug nach Alexandria",
        items: [
          "Katakomben von Kom esch-Schukafa",
          "Zitadelle von Qaitbay und die Bibliotheca Alexandrina",
          "Pompeiussäule und Fischessen direkt am Meer",
        ],
      },
      {
        title: "Gizeh & Sakkara",
        items: [
          "Pyramiden von Gizeh und die Große Sphinx",
          "Stufenpyramide des Djoser in Sakkara",
          "Memphis, erste Hauptstadt des geeinten Ägypten",
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
      sleep: "Alle drei Nächte in einem Hotel in Kairo",
      drives: "Ein Tagesausflug von Kairo nach Alexandria und zurück auf der Straße",
    },
    faqs: [
      {
        q: "Reichen vier Tage für Kairo und Alexandria?",
        a: "Ja — die Reise ist so gebaut, dass beide in ihren Grundzügen vorkommen, ohne Hetze: ein ganzer Tag für Alexandria und ein ganzer Vormittag für das Plateau von Gizeh.",
      },
      {
        q: "Kann ich Luxor oder eine Nilkreuzfahrt anhängen?",
        a: "Ohne Weiteres. Diese Kurzreise ist eine natürliche erste Hälfte; wir ergänzen Flug oder Nachtzug nach Luxor und Assuan, sobald Sie mehr Tage haben.",
      },
      {
        q: "Wie lange dauert die Fahrt nach Alexandria?",
        a: "Etwa zweieinhalb bis drei Stunden pro Richtung auf der Wüstenstraße, im privaten klimatisierten Fahrzeug mit Ihrem Guide.",
      },
    ],
  },

  // ===== 7. Cairo to Luxor & Aswan =======================================
  {
    slug: "tour-3-day",
    localeSlug: "luxor-assuan-3-tage-mit-fluegen",
    metaTitle: "Luxor & Assuan in 3 Tagen, Flüge inklusive | Kemet",
    metaDescription:
      "Drei Tage Oberägypten ab Kairo mit Inlandsflügen im Preis: Karnak, Tal der Könige, Hochdamm und der Inseltempel von Philae.",
    keywords:
      "luxor assuan 3 tage, oberägypten kurzreise, ägypten mit inlandsflug, karnak tal der könige philae, kairo luxor flug tour",
    crumb: "Luxor & Assuan, 3 Tage",
    title: "Von Kairo nach Luxor und Assuan",
    subtitle:
      "Drei Tage mit den Tempeln und Gräbern Oberägyptens, die Inlandsflüge sind im Preis enthalten.",
    durationLabel: "3 Tage / 2 Nächte",
    startPoint: "Kairo (Flüge inbegriffen)",
    summary:
      "Eine schnelle Schleife durch Luxor und Assuan mit enthaltenen Flügen — Karnak, Tal der Könige, Philae und der Hochdamm, ab Kairo und zurück.",
    overview:
      "Wenn die Zeit knapp ist, Oberägypten aber der eigentliche Grund der Reise, bringt diese Schleife die großen Namen des Südens in drei konzentrierten Tagen. Sie fliegen von Kairo nach Luxor zu den Tempeln des Ostufers und den Königsgräbern des Westens, fahren weiter nach Assuan zum Hochdamm und zum Inseltempel von Philae und fliegen zurück nach Kairo. Weil die Inlandsflüge enthalten sind, verschwinden die großen Entfernungen, und die Tage bleiben voller Monumente statt voller Transfers.",
    itinerary: [
      {
        title: "Flug nach Luxor — das Ostufer",
        items: [
          "Vormittags Flug Kairo–Luxor, Empfang bei der Ankunft",
          "Tempelanlage von Karnak",
          "Luxor-Tempel und Übernachtung in Luxor",
        ],
      },
      {
        title: "Westufer & weiter nach Assuan",
        items: [
          "Tal der Könige und der Totentempel der Hatschepsut",
          "Memnonkolosse",
          "Fahrt am Nil entlang nach Assuan, Übernachtung dort",
        ],
      },
      {
        title: "Assuan & Rückflug nach Kairo",
        items: [
          "Hochdamm von Assuan und der Unvollendete Obelisk",
          "Mit dem Boot zum Inseltempel von Philae",
          "Nachmittags Rückflug nach Kairo",
        ],
      },
    ],
    comfort: {
      sleep: "Ein Hotel in Luxor, dann eines in Assuan",
      drives: "Luxor nach Assuan auf der Straße",
    },
    faqs: [
      {
        q: "Sind die Inlandsflüge wirklich enthalten?",
        a: "Ja — Kairo–Luxor und Assuan–Kairo gehören beide zum Preis. Sie organisieren nur Ihre eigenen internationalen Flüge nach und ab Kairo.",
      },
      {
        q: "Sind drei Tage zu gehetzt?",
        a: "Es ist zügig, aber gut sortiert: Die Flüge nehmen die langen Straßenstrecken heraus, deshalb verbringen Sie jeden Tag an den Monumenten statt zwischen ihnen.",
      },
      {
        q: "Kann ich Abu Simbel ab Assuan ergänzen?",
        a: "Ja, als Zusatzleistung per Frühflug oder im privaten Wagen. Das verlängert den Vormittag in Assuan um einige Stunden, deshalb planen wir es vorher ein.",
      },
    ],
  },

  // ===== 8. Alexandria Overnight =========================================
  {
    slug: "tour-alexandria-2day",
    localeSlug: "alexandria-mit-uebernachtung",
    metaTitle: "Alexandria mit Übernachtung, 2 Tage ab Kairo | Kemet",
    metaDescription:
      "Zwei Mittelmeertage: Katakomben, Zitadelle auf dem Pharos-Platz, die neue Bibliothek — und der Abend, den Tagesausflüge nie sehen.",
    keywords:
      "alexandria übernachtung, alexandria ab kairo, alexandria 2 tage, katakomben kom esch schukafa, bibliotheca alexandrina besuch",
    crumb: "Alexandria mit Übernachtung",
    title: "Alexandria über Nacht",
    subtitle:
      "Zwei Mittelmeertage — die Katakomben, die Zitadelle auf dem Platz des Pharos, die wiedergeborene Bibliothek, und ein Abend, den die Tagesgäste nie erleben.",
    durationLabel: "2 Tage / 1 Nacht",
    startPoint: "Kairo (Abholung am Hotel)",
    summary:
      "Alexandria mit seiner fehlenden Hälfte: die griechisch-römischen Stätten bei Tag, dann die Corniche in der Dämmerung, Fisch am Wasser und das Morgenlicht, das kein Tagesausflug je erwischt.",
    overview:
      "Alexandria als Tagesausflug ist ein ordentlicher Sprint; Alexandria über Nacht ist eine andere Stadt. Diese Reise macht den Pflichtteil richtig — die dreistöckigen Katakomben von Kom esch-Schukafa, die Pompeiussäule, die Zitadelle von Qaitbay, die exakt auf dem Grundriss des antiken Leuchtturms steht, und die Bibliotheca Alexandrina — und bleibt dann für die Stunden, in denen die Stadt Sinn ergibt: die Corniche in der Dämmerung, Fisch nach Gewicht ausgesucht in einem Lokal am Wasser, und ein langsamer Vormittag durch die Gärten des Montaza-Palasts und das römische Amphitheater, bevor es ohne Eile zurück nach Kairo geht. Das mediterrane Tempo ist der eigentliche Punkt; eine Nacht hier stellt eine ganze Ägypten-Reise neu ein.",
    itinerary: [
      {
        title: "Die antike Stadt",
        items: [
          "Vormittags Fahrt von Kairo über die Wüstenstraße",
          "Katakomben von Kom esch-Schukafa und die Pompeiussäule",
          "Die Zitadelle von Qaitbay und die Bibliotheca Alexandrina",
          "Dämmerung auf der Corniche und Fischessen am Wasser",
        ],
      },
      {
        title: "Paläste, Römer & Rückfahrt",
        items: [
          "Die Gärten des Montaza-Palasts in der Morgenluft am Meer",
          "Das römische Amphitheater von Kom el-Dikka",
          "Entspannte Rückfahrt nach Kairo bis zum späten Nachmittag",
        ],
      },
    ],
    comfort: {
      sleep: "Eine Nacht in einem Hotel direkt am Meer in Alexandria",
      drives: "Kairo nach Alexandria und zurück auf der Straße",
    },
    faqs: [
      {
        q: "Warum übernachten statt Tagesausflug?",
        a: "Die Fahrt dauert hin und zurück fünf bis sechs Stunden; als Tagestour bleibt von Alexandria nur der Mittag. Die Übernachtung bringt Sie für Dämmerung, Abendessen und Morgenlicht dorthin — die drei besten Stunden der Stadt — zu überschaubaren Mehrkosten.",
      },
      {
        q: "Wann ist Alexandria am schönsten?",
        a: "April bis Oktober, wenn das mediterrane Klima genau der Punkt ist. Im Sommer liegt die Stadt 5 bis 10 Grad unter Kairo und wird zu Ägyptens eigenem Seebad.",
      },
      {
        q: "Ist der Fisch wirklich das Richtige?",
        a: "Unbedingt. Sie wählen den Fisch nach Gewicht aus der Eisauslage des Tages, und er kommt gegrillt oder frittiert mit alexandrinischen Beilagen. Ihr Guide weiß, welche Lokale an der Corniche ihren Ruf verdienen.",
      },
    ],
  },

  // ===== 9. Temples of the South =========================================
  {
    slug: "tour-upper-egypt-5day",
    localeSlug: "oberaegypten-5-tage",
    metaTitle: "Oberägypten in 5 Tagen — Luxor, Edfu, Assuan | Kemet",
    metaDescription:
      "Fünf Tage Oberägypten privat auf der Straße: beide Ufer Luxors, Edfu und Kom Ombo unterwegs, dann Philae und die Inseln von Assuan.",
    keywords:
      "oberägypten rundreise, luxor assuan 5 tage, edfu kom ombo, ägypten ohne kreuzfahrt, tempel oberägypten reise",
    crumb: "Oberägypten, 5 Tage",
    title: "Die Tempel des Südens",
    subtitle:
      "Fünf ruhige Tage durch Oberägypten — Luxors beide Ufer, die Straße nach Süden über Edfu und Kom Ombo, und die Inseln von Assuan.",
    durationLabel: "5 Tage / 4 Nächte",
    startPoint: "Luxor (Hotel, Bahnhof oder Flughafen)",
    summary:
      "Das geschichtliche Herz Ägyptens als private Straßenreise — Karnak, Tal der Könige, Edfu, Kom Ombo und Philae, mit der Zeit, sie wirklich aufzunehmen.",
    overview:
      "Oberägypten trägt die dichteste Konzentration an Monumenten des Landes, und die meisten Reisen sprinten hindurch. Diese nicht. Zwei volle Tage in Luxor trennen die Tempel des Ostufers von der Nekropole des Westens, damit keines von beiden gehetzt wird. Die Fahrt nach Süden wird dann Teil der Reise statt bloßer Transfer: Edfu und Kom Ombo unterbrechen die Straße genau dort, wo der antike Flussverkehr einst pausierte. Assuan schließt die Reise in ruhigerer Tonlage — Philae mit dem Boot, die Granitbrüche und eine Stunde unter Segeln, bevor Sie fliegen oder den Zug nehmen. Durchgehend Hotels der vier- und fünf-Sterne-Kategorie und vom ersten bis zum letzten Tag Ihr eigener Ägyptologe.",
    itinerary: [
      {
        title: "Ankunft in Luxor & das Ostufer",
        items: [
          "Privater Empfang am Flughafen oder Bahnhof von Luxor",
          "Tempelanlage von Karnak — die große Säulenhalle im Nachmittagslicht",
          "Luxor-Tempel in der Dämmerung, wenn die Scheinwerfer angehen",
        ],
      },
      {
        title: "Das Westufer in voller Länge",
        items: [
          "Tal der Könige — drei Königsgräber mit Ihrem Ägyptologen",
          "Der terrassierte Totentempel der Hatschepsut in Deir el-Bahari",
          "Memnonkolosse und die Rückfahrt über die Dorfstraßen der Flussebene",
        ],
      },
      {
        title: "Nach Süden — Edfu & Kom Ombo",
        items: [
          "Vormittags Fahrt nach Edfu zum Horus-Tempel, dem besterhaltenen Ägyptens",
          "Kom Ombos Doppelheiligtum über einer Nilbiegung",
          "Ankunft in Assuan am späten Nachmittag; Abend frei an der Corniche",
        ],
      },
      {
        title: "Assuan — Philae & der Fluss",
        items: [
          "Hochdamm und der Unvollendete Obelisk im Granitbruch",
          "Mit dem Boot zum Inseltempel von Philae",
          "Felukenfahrt zur goldenen Stunde zwischen den Inseln des Ersten Katarakts",
        ],
      },
      {
        title: "Abreise — oder Abu Simbel",
        items: [
          "Vormittag zur freien Verfügung, oder optional ein früher Ausflug nach Abu Simbel",
          "Privater Transfer zum Flughafen oder Bahnhof von Assuan",
        ],
      },
    ],
    comfort: {
      sleep: "Ein Hotel in Luxor, dann eines in Assuan",
      drives: "Luxor nach Assuan auf der Straße, mit Halt in Edfu und Kom Ombo",
      early: "Nur wenn Sie sich am letzten Tag für den Ausflug nach Abu Simbel entscheiden",
    },
    faqs: [
      {
        q: "Warum von Luxor nach Assuan fahren statt zu kreuzen?",
        a: "Die Straße erlaubt Edfu und Kom Ombo, ohne sich dem festen Fahrplan eines Schiffs zu unterwerfen, und jede Nacht bleibt ein vollwertiges Hotelzimmer. Wenn Sie lieber segeln: Unsere Reise „Nil in Stil“ deckt denselben Abschnitt auf dem Wasser ab.",
      },
      {
        q: "Ist Abu Simbel in dieser Reise enthalten?",
        a: "Standardmäßig nicht — aber es fügt sich am letzten Tag sauber als früher Ausflug ab Assuan ein, im privaten Wagen oder per Kurzflug. Sagen Sie es bei der Buchung, dann halten wir die Zeiten frei.",
      },
      {
        q: "Wie komme ich für den Start nach Luxor?",
        a: "Mit EgyptAir ab Kairo (55 Minuten) oder mit dem Nachtzug. Beides ergänzen wir problemlos; die Reise beginnt, sobald Sie landen.",
      },
    ],
  },

  // ===== 10. Honeymoon on the Nile =======================================
  {
    slug: "tour-honeymoon-9day",
    localeSlug: "hochzeitsreise-aegypten-9-tage",
    metaTitle: "Hochzeitsreise Ägypten, 9 Tage am Nil | Kemet",
    metaDescription:
      "Neun Tage zu zweit: privater Sonnenaufgang an den Pyramiden, Feluke zur goldenen Stunde, drei Nächte auf dem Nil und Suiten mit Blick.",
    keywords:
      "hochzeitsreise ägypten, flitterwochen ägypten, honeymoon nil, romantische reise ägypten, nilkreuzfahrt zu zweit",
    crumb: "Hochzeitsreise, 9 Tage",
    title: "Hochzeitsreise am Nil",
    subtitle:
      "Neun Tage für zwei — Kairos große Namen, drei Nächte auf dem Schiff, die Inseln von Assuan und lange goldene Abende, an denen nichts drängt.",
    durationLabel: "9 Tage / 8 Nächte",
    startPoint: "Kairo (Flughafen oder Hotel)",
    summary:
      "Ägypten, wie eine Hochzeitsreise sein sollte — privater Sonnenaufgang an den Pyramiden, eine Feluke zur goldenen Stunde, drei Nächte auf dem Nil und Suiten, die nach ihrer Aussicht ausgesucht sind.",
    overview:
      "Eine Hochzeitsreise ist keine normale Reise mit Rosenblättern. Der Takt ist ein anderer: spätere Starts, längere Abende, ein Höhepunkt am Tag statt vier. Diese Reise beginnt in Kairo mit dem Ägyptischen Museum und einem privaten Sonnenaufgang in Gizeh, bevor das Plateau öffnet. Sie fliegen nach Assuan — der sanftesten, romantischsten Stadt am Fluss — zu einer privaten Felukenfahrt zur goldenen Stunde und einem Abendessen über dem Katarakt. Eine dreitägige Kreuzfahrt trägt Sie an Kom Ombo und Edfu vorbei nach Luxor, und als Schlussbild steht eine Ballonfahrt im Morgengrauen über den thebanischen Hügeln. Hotels und Kabinen sind durchgehend nach dem Nilblick ausgewählt, und jeder Guide weiß, dass dies eine Hochzeitsreise ist und kein Gewaltmarsch.",
    itinerary: [
      {
        title: "Ankunft in Kairo",
        items: [
          "Privater Empfang am Flughafen und Transfer in eine Suite mit Nilblick",
          "Abend zur freien Verfügung — Restaurantempfehlungen Ihres Reiseplaners",
        ],
      },
      {
        title: "Sonnenaufgang in Gizeh & das Museum",
        items: [
          "Privater Zugang zum Plateau von Gizeh zum Sonnenaufgang, vor der öffentlichen Öffnung",
          "Spätes Frühstück, danach das Grand Egyptian Museum in Ihrem eigenen Tempo",
          "Nachmittags Ruhe; abends Drinks auf einer Feluke auf dem Kairoer Nil",
        ],
      },
      {
        title: "Flug nach Assuan",
        items: [
          "Vormittags Flug nach Süden",
          "Philae — der Inseltempel der Isis, Göttin der Liebe, mit dem Boot",
          "Felukenfahrt zum Sonnenuntergang zwischen den Granitinseln; Abendessen auf einer nubischen Terrasse",
        ],
      },
      {
        title: "Assuan & Einschiffung",
        items: [
          "Langsamer Vormittag — die botanische Insel oder der Souk, ganz wie Sie mögen",
          "Vor dem Mittagessen an Bord Ihres Nilschiffs",
          "Nachmittags Auslaufen, auf dem Sonnendeck",
        ],
      },
      {
        title: "Kom Ombo & Edfu",
        items: [
          "Der Doppeltempel von Kom Ombo im Morgenlicht",
          "Edfus Horus-Tempel am Nachmittag",
          "Abendessen an Bord, während das Schiff für die Nacht festmacht",
        ],
      },
      {
        title: "Schleuse von Esna & Ankunft in Luxor",
        items: [
          "Ein Tag auf dem Wasser — der Hochzeitsreisetag, an dem man schön gar nichts tut",
          "Abends Ankunft in Luxor; auf Wunsch der beleuchtete Luxor-Tempel",
        ],
      },
      {
        title: "Ballons & das Westufer",
        items: [
          "Ballonfahrt im Morgengrauen über dem Tal der Könige (wetterabhängig)",
          "Tal der Könige und Tempel der Hatschepsut mit Ihrem Ägyptologen",
          "Ausschiffung in ein Hotel in Luxor für die letzten Nächte",
        ],
      },
      {
        title: "Karnak & ein Tag zu zweit",
        items: [
          "Karnak in der Stille des frühen Morgens",
          "Nachmittag ganz frei — Pool, Spa oder das Museum",
          "Abschiedsessen, von Ihrem Reiseplaner arrangiert",
        ],
      },
      {
        title: "Flug nach Kairo & Abreise",
        items: ["Vormittags Flug nach Kairo, Anschluss an Ihren internationalen Rückflug"],
      },
    ],
    comfort: {
      sleep:
        "Eine Suite mit Nilblick in Kairo, ein Hotel in Assuan, drei Nächte auf dem Nilschiff, danach ein Hotel in Luxor",
      early:
        "Sonnenaufgang in Gizeh, eine Ballonfahrt im Morgengrauen über Luxors Westufer und Karnak am frühen Morgen",
    },
    faqs: [
      {
        q: "Worin unterscheidet sich diese Reise von der 10-Tage-Rundreise?",
        a: "Die Route überschneidet sich, der Rhythmus nicht. Diese Reise tauscht Alexandria und die Nachtzüge gegen Flüge, Suiten mit Nilblick, spätere Vormittage und reservierte Abende. Sie ist um die Zeit zu zweit herum gebaut, nicht um möglichst viel Abdeckung.",
      },
      {
        q: "Können Sie Überraschungen arrangieren — Blumen, ein privates Dinner, einen Antrag?",
        a: "Ja, diskret und regelmäßig. Sagen Sie Ihrem Reiseplaner, was Ihnen vorschwebt, dann übernehmen wir die Inszenierung; ein Antrag im Tempel braucht etwas Vorlauf, und wir wissen genau, wo die stillen Ecken sind.",
      },
      {
        q: "Ist die Ballonfahrt sicher genug, um sie einzuplanen?",
        a: "Ballonfahrten in Luxor werden von lizenzierten Betreibern unter Aufsicht der Zivilluftfahrt durchgeführt, starten nur bei ruhigen Bedingungen im Morgengrauen und werden bei Wind ohne Zögern abgesagt. Wir buchen flexible Termine, damit ein abgesagter Morgen auf den nächsten rutschen kann.",
      },
    ],
  },

  // ===== 11. Family Egypt ================================================
  {
    slug: "tour-family-8day",
    localeSlug: "familienreise-aegypten-8-tage",
    metaTitle: "Familienreise Ägypten, 8 Tage mit Kindern | Kemet",
    metaDescription:
      "Ägypten mit Kindern richtig gemacht: kurze geführte Vormittage, auf Familien spezialisierte Ägyptologen, Nachmittage am Pool.",
    keywords:
      "ägypten mit kindern, familienreise ägypten, ägypten familienurlaub, pyramiden mit kindern, ägypten reise familie",
    crumb: "Familienreise, 8 Tage",
    title: "Ägypten für Familien: von den Pyramiden an den Nil",
    subtitle:
      "Acht Tage, gebaut für neugierige Kinder und entspannte Eltern — Mumien, Feluken, die Farben der Grabmalereien und Nachmittage am Pool.",
    durationLabel: "8 Tage / 7 Nächte",
    startPoint: "Kairo (Flughafen oder Hotel)",
    summary:
      "Ägypten mit Kindern richtig gemacht: kurze geführte Vormittage, auf Familien spezialisierte Ägyptologen, Nachmittage am Pool und Momente, die kein Klassenzimmer bietet.",
    overview:
      "Ägypten ist das dankbarste Klassenzimmer der Welt — wenn der Takt respektiert, wie Kinder tatsächlich reisen. Diese Reise hält die geführten Besuche in den Vormittagen, überlässt die Nachmittage Pools und Gärten und arbeitet mit Guides, die auf Familien spezialisiert sind: mit denen, die einem Achtjährigen die Mumifizierung so anschaulich erklären, dass der Achtjährige sie beim Abendessen zurückerzählt. Kairo und Gizeh eröffnen die Reise mit der Sphinx, den Tutanchamun-Sälen des Grand Egyptian Museum und den Mumien im NMEC. Ein Flug nach Süden (Nachtzüge finden Kinder beim zweiten Mal selten noch toll) führt zu Luxors bemalten Gräbern und zu einer Felukenstunde in Assuan, bei der die einzige Anforderung darin besteht, eine Hand durch den Nil zu ziehen. Durchgehend Familiensuiten oder Verbindungszimmer.",
    itinerary: [
      {
        title: "Ankunft in Kairo",
        items: [
          "Privater Empfang am Flughafen — Kindersitze auf Wunsch eingebaut",
          "Ankommen in den Verbindungszimmern; Abend zur freien Verfügung",
        ],
      },
      {
        title: "Pyramiden & die Sphinx",
        items: [
          "Das Plateau von Gizeh in der Morgenkühle — Pyramiden, Panorama und Sphinx",
          "Optional ein kurzer Kamelritt am Panoramapunkt",
          "Nachmittags Pool; abends optional die Ton-und-Licht-Show an den Pyramiden",
        ],
      },
      {
        title: "Tutanchamun & die Mumien",
        items: [
          "Grand Egyptian Museum — der Schatz des Kindkönigs, für junge Köpfe erzählt",
          "Die Mumienhalle im NMEC für mutige ältere Kinder",
          "Eis an der Nil-Corniche",
        ],
      },
      {
        title: "Flug nach Luxor — Karnak",
        items: [
          "Vormittags Flug nach Süden",
          "Karnak als Schnitzeljagd: den Skarabäus finden, die Säulen zählen",
          "Nachmittags Hotelpool",
        ],
      },
      {
        title: "Tal der Könige",
        items: [
          "Früher Besuch am Westufer — drei Gräber, ausgewählt nach kräftiger Farbe",
          "Tempel der Hatschepsut und die Memnonkolosse",
          "Freier Nachmittag; optional eine Familien-Kochvorführung im Hotel",
        ],
      },
      {
        title: "Nach Assuan über die Straße — Edfu",
        items: [
          "Fahrt nach Süden mit Halt in Edfu, erreicht in der Pferdekutsche",
          "Ankunft in Assuan; abends Eis an der Corniche",
        ],
      },
      {
        title: "Feluken & nubische Farben",
        items: [
          "Philae mit dem Boot — ein Inseltempel ist für sich schon ein Abenteuer",
          "Nachmittags Felukenfahrt und Besuch eines bunten nubischen Dorfes",
          "Henna-Zeichnungen und Hibiskustee bei einer nubischen Familie",
        ],
      },
      {
        title: "Heimflug über Kairo",
        items: ["Vormittags Flug nach Kairo, Anschluss an Ihren Rückflug"],
      },
    ],
    comfort: {
      sleep: "Hotels in Kairo, Luxor und Assuan",
      drives: "Luxor nach Assuan auf der Straße, mit Halt in Edfu",
      early: "Ein früher Start für das Tal der Könige",
    },
    faqs: [
      {
        q: "Für welches Alter ist diese Reise gedacht?",
        a: "Sie ist auf etwa 6 bis 15 Jahre abgestimmt. Jüngere Kinder kommen ebenfalls gut mit — die Vormittage sind kurz —, aber Gräber und Museen zünden am stärksten ab etwa sieben. Die Guides stellen sich vor Ort auf das Kind ein, das vor ihnen steht.",
      },
      {
        q: "Wie viel müssen die Kinder laufen?",
        a: "Die Besichtigungen bleiben bei zwei bis drei Stunden in der Morgenkühle, mit dem Fahrzeug immer in der Nähe. Der längste Weg ist Karnak, und er wird mit Schattenpausen und, ganz ehrlich, mit Spielen unterbrochen.",
      },
      {
        q: "Ist das Essen auch für wählerische Esser machbar?",
        a: "Ja. Die Hotels führen vertraute Gerichte neben der ägyptischen Küche, und Ihr Guide weiß immer, wo es verlässlich Pasta oder gegrilltes Hähnchen gibt. Die meisten Kinder fahren süchtig nach frischem Mangosaft nach Hause.",
      },
    ],
  },

  // ===== 12. Egypt Through the Lens ======================================
  {
    slug: "tour-photography-7day",
    localeSlug: "fotoreise-aegypten-7-tage",
    metaTitle: "Fotoreise Ägypten, 7 Tage nach dem Licht geplant | Kemet",
    metaDescription:
      "Sieben Tage, geplant nach dem Licht statt nach Öffnungszeiten: Gizeh zum Sonnenaufgang, Karnak vor den Bussen, Ballons über Theben.",
    keywords:
      "fotoreise ägypten, fotografie reise ägypten, gizeh sonnenaufgang foto, karnak fotografieren, ägypten fotoworkshop",
    crumb: "Fotoreise, 7 Tage",
    title: "Ägypten durch die Linse",
    subtitle:
      "Sieben Tage, geplant nach dem Licht und nicht nach Öffnungszeiten — Plateaus im Morgengrauen, Tempel zur blauen Stunde und der Nil zur goldenen.",
    durationLabel: "7 Tage / 6 Nächte",
    startPoint: "Kairo (Flughafen oder Hotel)",
    summary:
      "Eine Reise, rückwärts aus dem Licht geplant: privater Zugang zu Gizeh zum Sonnenaufgang, Karnak vor den Gruppen, Ballons über Theben und Feluken zur goldenen Stunde.",
    overview:
      "Die meisten Ägypten-Reisen stellen Sie in der flachen, überfüllten Tagesmitte vor die großen Stätten — den schlechtesten Stunden, die eine Kamera je sieht. Diese Reise dreht die Logik um. Jeder Tag ist um das erste und letzte Licht herum geplant: privater Frühzugang in Gizeh, bevor das Plateau öffnet; Karnaks Säulenhalle in der tiefen Morgensonne, die die Reliefs herausarbeitet; die beleuchtete Sphinxallee zur blauen Stunde; und Assuans Lateinersegel im Gegenlicht zur goldenen Stunde. Ihr Guide versteht Fotografen — das heißt: er weiß, wann er redet, wann er eine Stativgenehmigung mitbringt und wann er Sie einfach mit der Szene allein lässt. Nicht fotografierende Begleitung reist hier übrigens ebenso gut mit; das Licht, das einem Sensor schmeichelt, schmeichelt einer Erinnerung genauso.",
    itinerary: [
      {
        title: "Ankunft in Kairo & Besprechung",
        items: [
          "Privater Transfer und abends Besprechung der Route mit Ihrem Guide",
          "Ausrüstungscheck — Genehmigungen für Stative, wo nötig, arrangiert",
        ],
      },
      {
        title: "Gizeh im ersten Licht",
        items: [
          "Privater Frühzugang zum Plateau zum Sonnenaufgang, vor der Öffnung",
          "Am späten Vormittag: der Panoramapunkt und die Blickachsen am Sphinx-Hof",
          "Nachmittags Pause zum Sichten; zur blauen Stunde die Stadtsilhouette vom Al-Azhar-Park",
        ],
      },
      {
        title: "Islamisches Kairo — Gassen & Laternen",
        items: [
          "Gang zur goldenen Stunde die Al-Muizz-Straße hinunter, während die Laternen angehen",
          "Die Gassen des Khan el-Khalili — Menschen, Kupfer und Lichtschächte",
          "Abends Flug nach Luxor",
        ],
      },
      {
        title: "Ballons & das Westufer",
        items: [
          "Ballonfahrt im Morgengrauen über der thebanischen Nekropole (wetterabhängig)",
          "Die Grabkammern im Tal der Könige — Technik aus der Hand, wo Stative verboten sind",
          "Die Terrassen der Hatschepsut im späten Streiflicht",
        ],
      },
      {
        title: "Karnak & der Luxor-Tempel bei Nacht",
        items: [
          "Karnak zur Öffnung — eine Stunde, bevor die Busse kommen",
          "Nachmittags auf dem Fluss: Fischer, Feluken und Spiegelungen",
          "Die Sphinxallee und der angestrahlte Luxor-Tempel zur blauen Stunde",
        ],
      },
      {
        title: "Assuan — Segel & Granit",
        items: [
          "Vormittags Fahrt nach Süden (Halt in Edfu auf Wunsch)",
          "Philae mit dem Boot — der Tempel, der aus dem Wasser steigt",
          "Private Felukenfahrt zur goldenen Stunde zwischen den Katarakt-Inseln",
        ],
      },
      {
        title: "Nubische Farben & Abreise",
        items: [
          "Frühes Licht in einem bunten nubischen Dorf",
          "Flug nach Kairo für Ihren Anschluss",
        ],
      },
    ],
    comfort: {
      sleep: "Hotels in Kairo, Luxor und Assuan",
      drives: "Luxor nach Assuan auf der Straße",
      early:
        "Sonnenaufgang in Gizeh, eine Ballonfahrt im Morgengrauen über dem Westufer und frühes Licht in einem nubischen Dorf",
    },
    faqs: [
      {
        q: "Darf ich eine Drohne mitbringen?",
        a: "Nein — gehen Sie davon aus, dass es nicht geht. Ägyptens Drohnenregeln gehören zu den strengsten überhaupt, und die Geräte werden am Flughafen einbehalten. Alles in dieser Reise ist stattdessen auf Perspektiven vom Boden und aus dem Ballon geplant.",
      },
      {
        q: "Sind Stative an den Stätten erlaubt?",
        a: "Das hängt von der Stätte ab und ändert sich: Manche verlangen eine kostenpflichtige Genehmigung, manche verbieten sie ganz, und in den Königsgräbern wird ausschließlich aus der Hand fotografiert. Wo es Genehmigungen gibt, besorgen wir sie vorab; wo nicht, planen wir die Technik entsprechend.",
      },
      {
        q: "Lohnt sich die Reise für eine nicht fotografierende Begleitung?",
        a: "Wirklich ja. Der Plan bedeutet schlicht, die Stätten in ihren leersten und schönsten Stunden zu sehen; der einzige Preis sind frühe Wecker, und den zahlt das Licht zurück.",
      },
    ],
  },

  // ===== 13. Cairo of the Eight Worlds ===================================
  {
    slug: "tour-cairo-culture-5day",
    localeSlug: "kairo-kulturreise-5-tage",
    metaTitle: "Kairo Kulturreise, 5 Tage mit Historiker | Kemet",
    metaDescription:
      "Fünf Tage in den Schichten einer Stadt: pharaonisches, koptisches, islamisches und modernes Kairo, Straße für Straße mit einem Historiker gelesen.",
    keywords:
      "kairo kulturreise, islamisches kairo führung, koptisches kairo, sakkara dahschur tour, kairo 5 tage",
    crumb: "Kairo, Kulturreise",
    title: "Kairo der acht Welten",
    subtitle:
      "Fünf Tage in den Schichten einer einzigen Stadt — das pharaonische, koptische, islamische und moderne Kairo, Straße für Straße mit einem Historiker gelesen.",
    durationLabel: "5 Tage / 4 Nächte",
    startPoint: "Kairo (Flughafen oder Hotel)",
    summary:
      "Eine tiefe, langsame Lektüre der am stärksten geschichteten Stadt der Welt — ihre zwei Museen, drei Glaubensrichtungen, mittelalterlichen Straßen und die Nekropole, in der die Pyramide erfunden wurde.",
    overview:
      "Die meisten Besucher geben Kairo zwei Nächte und eine Liste. Diese Reise gibt ihm fünf Tage und eine These: dass Kairo keine Zwischenstation ist, sondern die dichteste Kulturstätte des Mittelmeerraums. Die pharaonische Schicht bekommt zwei Tage — Gizeh sowie der Bogen Sakkara–Memphis–Dahschur, in dem die Pyramidenform erfunden wurde —, aber das Herz der Reise ist die lebende Stadt: das koptische Viertel, das in eine römische Festung hineingebaut ist; das tausend Jahre alte Gewebe des islamischen Kairo, Moschee für Moschee mit einem Historiker abgegangen; der Khan el-Khalili, in dessen Gassen die alten Handelswege noch schwach lesbar sind; und die beiden großen Museen, gelesen als eine Sammlung, die über ein Jahrhundert hinweg geteilt wurde. Die Abende sind so sorgfältig gebaut wie die Vormittage — eine Sufi-Tanoura-Vorführung, Abendessen in einem restaurierten osmanischen Haus, Tee dort, wo die Kairoer ihn tatsächlich trinken.",
    itinerary: [
      {
        title: "Ankunft & das Ägyptische Museum",
        items: [
          "Privater Empfang am Flughafen und Transfer",
          "Die dichten alten Säle des Ägyptischen Museums mit Ihrem Historiker",
          "Abendspaziergang durch die Belle-Époque-Straßen der Innenstadt",
        ],
      },
      {
        title: "Gizeh & das Grand Egyptian Museum",
        items: [
          "Das Plateau zur Öffnung — Pyramiden, Panorama, Sphinx",
          "Nachmittags in den Tutanchamun-Sälen des GEM",
          "Optional abends die Ton-und-Licht-Show",
        ],
      },
      {
        title: "Sakkara, Memphis & Dahschur",
        items: [
          "Djosers Stufenpyramide — wo die Steinarchitektur beginnt",
          "Der Koloss Ramses' II. in Memphis",
          "Knickpyramide und Rote Pyramide in Dahschur, meist nahezu menschenleer",
        ],
      },
      {
        title: "Koptisches & islamisches Kairo",
        items: [
          "Die römische Festung Babylon, die Hängende Kirche und die Ben-Esra-Synagoge",
          "Die Ibn-Tulun-Moschee aus dem neunten Jahrhundert und die Zitadelle",
          "Die Al-Muizz-Straße in der Dämmerung; nach Einbruch der Dunkelheit eine Sufi-Tanoura-Vorführung",
        ],
      },
      {
        title: "Der Basar & Abreise",
        items: [
          "Khan el-Khalili mit Einordnung — Werkstätten, nicht nur Stände",
          "Letztes Mittagessen in einem restaurierten osmanischen Haus",
          "Privater Transfer zum Flughafen",
        ],
      },
    ],
    comfort: {
      sleep: "Alle vier Nächte in einem Hotel in Kairo",
    },
    faqs: [
      {
        q: "Geben fünf Tage in einer einzigen Stadt wirklich genug her?",
        a: "Kairo könnte fünfzehn füllen. Fünf Tage sind der Punkt, an dem die Stadt aufhört, ein Wirrwarr von Monumenten zu sein, und lesbar wird — Sie erkennen Dynastien, Moscheestile und Straßenmuster von selbst. Genau das ist das Ziel.",
      },
      {
        q: "Wie viel läuft man am Tag im islamischen Kairo?",
        a: "Über den Tag verteilt etwa vier Kilometer, auf Kopfstein und Stein, ständig von Besichtigungen unterbrochen. Bequeme Schuhe zählen auf dieser Reise mehr als auf jeder anderen, die wir anbieten.",
      },
      {
        q: "Lässt sich Alexandria ergänzen?",
        a: "Ja — ein sechster Tag am Mittelmeer verlängert diese Reise ganz natürlich. Sagen Sie es bei der Buchung, dann bauen wir ihn ein.",
      },
    ],
  },

  // ===== 14. Red Sea Retreat =============================================
  {
    slug: "tour-sharm-5day",
    localeSlug: "rotes-meer-scharm-5-tage",
    metaTitle: "Rotes Meer: Scharm el-Scheich, 5 Tage privat | Kemet",
    metaDescription:
      "Fünf Tage, wo die Sinai-Berge auf das klarste Wasser der Nordhalbkugel treffen: privater Bootstag in Ras Mohammed und ein Wüstenabend.",
    keywords:
      "scharm el scheich reise, rotes meer urlaub, ras mohammed schnorcheln, sinai wüste abend, ägypten strand reise",
    crumb: "Rotes Meer, 5 Tage",
    title: "Rückzug ans Rote Meer: Scharm el-Scheich",
    subtitle:
      "Fünf Tage dort, wo die Berge des Sinai auf das klarste Wasser der Nordhalbkugel treffen — Riffe, Wüstenabende und bewusstes Nichtstun.",
    durationLabel: "5 Tage / 4 Nächte",
    startPoint: "Scharm el-Scheich (Flughafen oder Hotel)",
    summary:
      "Das Rote Meer mit Absicht — ein privater Bootstag im Ras-Mohammed-Nationalpark, ein Abend in der Sinai-Wüste unter Sternen, und bewusst leer gelassene Zeit.",
    overview:
      "Scharm el-Scheich liegt an der Spitze der Sinai-Halbinsel, wo Wüstenberge in Wasser abfallen, das so klar ist, dass sich die Riffe von der Oberfläche aus wie Karten lesen. Es ist Ägyptens großes Ausatmen — und genau so behandelt diese Reise es. Zwei Tage sind privat arrangiert: ein Bootstag im Ras-Mohammed-Nationalpark, dessen Korallenwände am Treffpunkt der Golfe von Suez und Akaba zum Besten gehören, was sich auf der Welt schnorcheln lässt, und ein Abend in der Sinai-Wüste mit beduinischem Tee, gegrilltem Abendessen und Sternenhimmel in einer der dunkelsten Nächte, die von einem Resort aus erreichbar sind. Der Rest ist aus Prinzip nicht verplant. Funktioniert als eigenständige Auszeit oder als Schlusskapitel einer längeren Ägypten-Reise — Luxor ist keine Flugstunde entfernt.",
    itinerary: [
      {
        title: "Ankunft am Roten Meer",
        items: [
          "Privater Empfang am Flughafen und Check-in im Resort",
          "Einführung bei einem Drink — die Tage werden um Ihre Vorlieben herum gelegt",
        ],
      },
      {
        title: "Ras Mohammed per Boot",
        items: [
          "Ganztägiger privater Bootsausflug in den Nationalpark",
          "Zwei bis drei Schnorchelstopps über Korallenwänden und -gärten",
          "Mittagessen an Deck",
        ],
      },
      {
        title: "Zur freien Verfügung",
        items: [
          "Ein freier Tag — Schnuppertauchen, Spa oder einfach der Strand",
          "Abendbummel durch den Old Market von Scharm und zur Al-Sahaba-Moschee",
        ],
      },
      {
        title: "Abend in der Sinai-Wüste",
        items: [
          "Am späten Nachmittag mit dem Geländewagen ins Innere des Sinai",
          "Beduinischer Tee, Abendessen vom Holzkohlegrill und Sternenhimmel fernab der Resortlichter",
        ],
      },
      {
        title: "Abreise",
        items: ["Vormittag zur freien Verfügung und privater Transfer zum Flughafen"],
      },
    ],
    comfort: {
      sleep: "Alle vier Nächte in einem Resort am Roten Meer",
    },
    faqs: [
      {
        q: "Wann ist das Meer warm genug?",
        a: "Praktisch immer. Die Wassertemperatur liegt zwischen 21 Grad im Winter und 28 Grad im Spätsommer; geschnorchelt wird ganzjährig, und selbst der Januar ist im Shorty angenehm, den das Boot an Bord hat.",
      },
      {
        q: "Muss ich tauchen können?",
        a: "Nein. Die Riffe von Ras Mohammed reichen nah genug an die Oberfläche, dass Schnorcheln Ihnen das meiste vom Schauspiel zeigt. Wenn Sie das Tauchen ausprobieren möchten, arrangieren wir eine lizenzierte Schnupperstunde am Hausriff Ihres Resorts.",
      },
      {
        q: "Lässt sich das mit den Nil-Reisen verbinden?",
        a: "Hervorragend — so nutzen es die meisten Gäste. Luxor–Scharm ist ein Kurzflug, und vier Tage am Roten Meer nach einer Woche Tempel sind die am besten sortierte Fassung von Ägypten, die wir kennen.",
      },
    ],
  },

  // ===== 15. Dive the Red Sea ============================================
  {
    slug: "tour-red-sea-diving-4day",
    localeSlug: "tauchen-rotes-meer-4-tage",
    metaTitle: "Tauchen im Roten Meer, 4 Tage ab Scharm | Kemet",
    metaDescription:
      "Sechs geführte Bootstauchgänge an den beiden besten Revieren des Sinai — Ras Mohammed und die Straße von Tiran — mit einem geprüften PADI-Center.",
    keywords:
      "tauchen rotes meer, tauchsafari scharm el scheich, ras mohammed tauchen, straße von tiran, padi tauchreise ägypten",
    crumb: "Tauchen, 4 Tage",
    title: "Tauchen im Roten Meer",
    subtitle:
      "Vier Tage, gebaut um Grundzeit — die Wände von Ras Mohammed, die Driftriffe der Straße von Tiran und kleine Boote, die früh ablegen.",
    durationLabel: "4 Tage / 3 Nächte",
    startPoint: "Scharm el-Scheich (Flughafen oder Hotel)",
    summary:
      "Sechs geführte Bootstauchgänge an den zwei besten Revieren des Sinai — Ras Mohammed und Tiran — mit einem von uns geprüften PADI-Center, plus ein Check-Dive vom Ufer.",
    overview:
      "Das nördliche Rote Meer ist eines der Maßstabsreviere der Welt: über 20 Meter Sicht als Normalfall, nie wirklich kaltes Wasser und Riffwände, die von Schnorcheltiefe ins Blaue abfallen. Dieses Programm verdichtet das auf vier Tage, ohne bei Sicherheit oder Oberflächenpausen zu kürzen. Nach einem Check-Dive am Hausriff Ihres Resorts decken zwei volle Bootstage die beiden Pflichtreviere ab — den Ras-Mohammed-Nationalpark, wo Shark Reef und Yolanda Reef den berühmtesten Doppelplatz des Sinai bilden, und die vier benannten Riffe der Straße von Tiran, über die sanfte Driftströmungen und Großfische ziehen. Getaucht wird mit einem lizenzierten PADI-Center, mit dem wir dauerhaft zusammenarbeiten; die Gruppen bleiben klein, und nicht tauchende Begleitung ist mit Schnorchelausrüstung an Bord willkommen.",
    itinerary: [
      {
        title: "Ankunft & Check-Dive",
        items: [
          "Privater Empfang am Flughafen und Check-in im Resort",
          "Nachmittags Ausrüstungsanpassung und Check-Dive am Hausriff",
        ],
      },
      {
        title: "Bootstag Ras Mohammed",
        items: [
          "Zwei geführte Tauchgänge — Shark und Yolanda Reef, sofern die Bedingungen es zulassen",
          "Mittagessen an Deck und lange Oberflächenpausen in den Ankerbuchten des Parks",
        ],
      },
      {
        title: "Bootstag Straße von Tiran",
        items: [
          "Zwei geführte Drifttauchgänge an der Riffkette von Tiran",
          "Optional ein dritter Tauchgang am Nachmittag oder frühe Rückkehr für das Spa",
        ],
      },
      {
        title: "Flugpausen-Vormittag & Abreise",
        items: [
          "Ein Vormittag an der Oberfläche — die Flugpause von 18 bis 24 Stunden ist eingeplant",
          "Privater Transfer zum Flughafen",
        ],
      },
    ],
    comfort: {
      sleep: "Alle drei Nächte in einem Resort am Roten Meer",
    },
    faqs: [
      {
        q: "Welches Brevet brauche ich?",
        a: "Open Water deckt alles Geplante ab; die Plätze werden mit Profilen zwischen 18 und 30 Metern getaucht. Wenn Sie kein Brevet haben, sagen Sie es uns — dieselben vier Tage lassen sich sauber in einen Open-Water-Kurs beim selben Center umwandeln.",
      },
      {
        q: "Warum wird am letzten Vormittag nicht getaucht?",
        a: "Zu früh nach dem Tauchen zu fliegen, birgt das Risiko einer Dekompressionskrankheit. Die Reise hält die übliche Flugpause ein, damit Ihr letzter Bootstag nie wegen eines Fluges gekürzt werden muss.",
      },
      {
        q: "Was bekomme ich tatsächlich zu sehen?",
        a: "Dichte Weichkorallenwände, Anthiaswolken, Napoleon-Lippfische, Schildkröten und Riffhaie in Ras Mohammed; Adlerrochen und Barrakudaschwärme ziehen in den Strömungen von Tiran. Das nördliche Rote Meer belohnt Taucher auf jedem Erfahrungsstand.",
      },
    ],
  },

  // ===== 16. Giza Pyramids & Sphinx ======================================
  {
    slug: "tour-giza-sphinx",
    localeSlug: "pyramiden-von-gizeh-halbtags",
    metaTitle: "Pyramiden von Gizeh & Sphinx, halber Tag privat | Kemet",
    metaDescription:
      "Ein konzentrierter halber Tag bei den drei großen Pyramiden und der Sphinx, mit dem klassischen Panoramapunkt — privat geführt.",
    keywords:
      "pyramiden von gizeh tour, sphinx besichtigung, gizeh halbtagestour, kairo pyramiden ausflug, pyramiden privat führung",
    crumb: "Pyramiden von Gizeh",
    title: "Pyramiden von Gizeh & Sphinx",
    subtitle:
      "Ein konzentrierter halber Tag zwischen den drei großen Pyramiden und der Sphinx, mit dem klassischen Panoramapunkt.",
    durationLabel: "Halber Tag (ca. 5 Stunden)",
    startPoint: "Hotel in Kairo oder Gizeh",
    summary:
      "Die Cheops-Pyramide, die Pyramiden des Chephren und Mykerinos, der Panoramapunkt und der Taltempel mit der Großen Sphinx — Gizeh an einem Vormittag.",
    overview:
      "Für Reisende mit wenig Zeit oder einem freien Fenster am Ankunftstag liefert dieser halbe Tag das Plateau von Gizeh ohne Füllmaterial. Sie sehen die Cheops-Pyramide, die benachbarten Pyramiden des Chephren und Mykerinos, den Panoramapunkt, an dem sich alle drei aufreihen, und den Taltempel, der zur Großen Sphinx führt. Ein privater Guide macht den kurzen Besuch wertvoll, und er lässt sich gut mit einem freien Nachmittag oder dem Grand Egyptian Museum verbinden.",
    itinerary: [
      {
        title: "Die Cheops-Pyramide",
        text: "Beginn am Fuß der Großen Pyramide, dem letzten erhaltenen Weltwunder der Antike, während Ihr Guide erklärt, wie und warum sie gebaut wurde.",
      },
      {
        title: "Chephren & Mykerinos",
        text: "Weiter zu den Pyramiden des Chephren — an der Spitze noch mit der ursprünglichen Verkleidung — und zur kleineren des Mykerinos.",
      },
      {
        title: "Der Panoramapunkt",
        text: "Halt am Wüstenpanorama, wo sich alle drei Pyramiden aufreihen, die klassische Aufnahme von Gizeh; in der Nähe sind optional Kamel- oder Pferderitte möglich.",
      },
      {
        title: "Taltempel & die Große Sphinx",
        text: "Zum Abschluss der granitene Taltempel und die Große Sphinx, der kolossale Wächter, aus dem gewachsenen Fels des Plateaus geschnitten.",
      },
    ],
    faqs: [
      {
        q: "Warum der halbe statt des ganzen Tages?",
        a: "Er ist ideal am Ankunfts- oder Abreisetag, oder wenn Sie die Pyramiden ohne Museum wollen. Wenn das Grand Egyptian Museum dazugehören soll, wählen Sie unsere Ganztagestour Gizeh & Großes Museum.",
      },
      {
        q: "Kann ich an den Pyramiden Kamel reiten?",
        a: "Ja — Kamel- und Pferderitte sind am Plateau als Zusatzleistung möglich. Ihr Guide hilft Ihnen vor Ort, einen fairen Preis auszuhandeln.",
      },
      {
        q: "Kann man in eine Pyramide hineingehen?",
        a: "Der Zutritt ins Innere ist als Zusatzleistung für die Cheops-Pyramide oder eine der kleineren möglich, abhängig vom Tageskontingent an Tickets.",
      },
    ],
  },

  // ===== 17. Giza & the Grand Museum =====================================
  {
    slug: "tour-giza-museum",
    localeSlug: "gizeh-und-grand-egyptian-museum",
    metaTitle: "Gizeh & Grand Egyptian Museum, Tagestour | Kemet",
    metaDescription:
      "Vormittags Pyramiden und Sphinx, nachmittags das Grand Egyptian Museum — das alte Weltwunder und das neue Museum an einem Tag, privat geführt.",
    keywords:
      "grand egyptian museum tour, gizeh tagestour, pyramiden und museum, gem kairo besuch, tutanchamun ausstellung tour",
    crumb: "Gizeh & GEM",
    title: "Gizeh & das Große Museum",
    subtitle:
      "Die Pyramiden und die Sphinx am Vormittag, das Grand Egyptian Museum am Nachmittag — das alte Wunder und das neue, an einem Tag.",
    durationLabel: "Ganzer Tag (ca. 8 Stunden)",
    startPoint: "Hotel in Kairo oder Gizeh",
    summary:
      "Die Cheops-Pyramide, das Panorama aller drei Pyramiden, der Taltempel und die Sphinx, danach das riesige neue Grand Egyptian Museum gleich daneben.",
    overview:
      "Dieser Tag stellt das älteste Weltwunder neben das neueste Museum, das gebaut wurde, um seine Schätze aufzunehmen. Der Vormittag gehört dem Plateau von Gizeh — den Pyramiden des Cheops, Chephren und Mykerinos, dem Panoramapunkt und der Großen Sphinx, die ihren Taltempel bewacht. Der Nachmittag führt ins Grand Egyptian Museum, das größte archäologische Museum der Welt, dessen Säle und große Treppe Tutanchamuns Sammlung endlich vollständig zusammenbringen. Durchgehend privater Guide und private Transfers.",
    itinerary: [
      {
        title: "Die Cheops-Pyramide",
        text: "Stehen Sie am Fuß des einzigen erhaltenen Weltwunders der Antike, der Pyramide des Cheops, und erfahren Sie, wie sie errichtet wurde. Der Zutritt zu den Kammern im Inneren ist als Zusatzleistung möglich.",
      },
      {
        title: "Chephren, Mykerinos & das Panorama",
        text: "Weiter zu den Pyramiden des Chephren und Mykerinos und zum Panoramapunkt, an dem sich alle drei quer durch die Wüste aufreihen — das klassische Bild von Gizeh.",
      },
      {
        title: "Taltempel & die Große Sphinx",
        text: "Durch den aus Granit gebauten Taltempel des Chephren bis an den Fuß der Großen Sphinx, des Wächters mit Löwenleib, aus dem gewachsenen Fels des Plateaus geschnitten.",
      },
      {
        title: "Grand Egyptian Museum (GEM)",
        text: "Hinüber ins Grand Egyptian Museum neben dem Plateau — seine große Statuentreppe und die vollständigen Tutanchamun-Säle, die Hauptsammlung des modernen Ägypten.",
      },
    ],
    faqs: [
      {
        q: "Können wir in die Cheops-Pyramide hinein?",
        a: "Ja, als Zusatzleistung. Für die Kammern im Inneren wird täglich nur eine begrenzte Zahl an Tickets verkauft; auf Wunsch sichern wir Ihnen eines, sofern verfügbar.",
      },
      {
        q: "Ist das Grand Egyptian Museum vollständig geöffnet?",
        a: "Die Hauptsäle, die große Treppe und die Tutanchamun-Sammlung sind für Besucher offen. Ihr Guide konzentriert sich auf die Höhepunkte, damit der Nachmittag nie gehetzt wirkt.",
      },
      {
        q: "Wie viel läuft man an diesem Tag?",
        a: "Ein mittleres Maß, über das Plateau und durch die Museumssäle. Wir gehen es in Ihrem Tempo an, mit Pausen im Schatten.",
      },
    ],
  },

  // ===== 18. Saqqara, Memphis & Dahshur ==================================
  {
    slug: "tour-saqqara",
    localeSlug: "sakkara-memphis-dahschur",
    metaTitle: "Sakkara, Memphis & Dahschur — Tagestour privat | Kemet",
    metaDescription:
      "Die Geburtsstätte der Pyramide: Djosers Stufenpyramide, das Freiluftmuseum von Memphis und die Knick- und Rote Pyramide in Dahschur.",
    keywords:
      "sakkara tour, stufenpyramide djoser, daschur rote pyramide, memphis ägypten, kairo tagesausflug sakkara",
    crumb: "Sakkara, Memphis & Dahschur",
    title: "Sakkara, Memphis & Dahschur",
    subtitle:
      "Die Geburtsstätte der Pyramide — von Djosers erster Stufenpyramide zu den großen geometrischen Gräbern von Dahschur.",
    durationLabel: "Ganzer Tag (ca. 8 Stunden)",
    startPoint: "Hotel in Kairo oder Gizeh",
    summary:
      "Djosers Stufenpyramide, die Freiluftruinen von Memphis und die Knick- und Rote Pyramide von Dahschur — die Geschichte, wie die Pyramide erfunden wurde.",
    overview:
      "Vor Gizeh war Sakkara. Dieser Tag folgt der Erfindung der Pyramide über drei Stätten südlich von Kairo, meist ruhiger als Gizeh und gerade deshalb eindrucksvoller. Sie beginnen an der Stufenpyramide des Djoser, dem ältesten monumentalen Steinbau der Welt, gehen durch die freiliegenden Reste von Memphis, der ersten Hauptstadt, und enden in Dahschur, wo Knickpyramide und Rote Pyramide den ingenieurtechnischen Sprung zur echten Pyramidenform zeigen. Durchgehend privat.",
    itinerary: [
      {
        title: "Die Stufenpyramide des Djoser",
        text: "Sakkaras Mittelpunkt — die gestufte Pyramide, die Imhotep für König Djoser entwarf, das älteste große Steinmonument der Welt, in seinem weiten Grabbezirk.",
      },
      {
        title: "Memphis & der Koloss Ramses' II.",
        text: "Das Freiluftmuseum von Memphis, antike Hauptstadt des geeinten Ägypten, mit einem liegenden Koloss Ramses' II. und einer fein gearbeiteten Alabastersphinx.",
      },
      {
        title: "Die Knickpyramide von Dahschur",
        text: "In Dahschur die Knickpyramide des Snofru, deren wechselnder Winkel den Moment festhält, in dem die alten Baumeister mitten im Bau korrigierten.",
      },
      {
        title: "Die Rote Pyramide",
        text: "Nebenan die Rote Pyramide, die erste gelungene echte Pyramide, die man betreten kann, um in ihre Kraggewölbekammern hinabzusteigen.",
      },
    ],
    faqs: [
      {
        q: "Wie verhält sich Sakkara zu Gizeh?",
        a: "Sakkara ist älter und meist ruhiger. Es erzählt, wie sich die Pyramide entwickelte, von Djosers Stufenform bis zu den echten Pyramiden in Dahschur — eine perfekte Ergänzung zu einem Gizeh-Tag.",
      },
      {
        q: "Kann man die Pyramiden in Dahschur betreten?",
        a: "Ja — die Rote Pyramide ist in der Regel zugänglich, über einen gebückten Gang hinunter zu den Grabkammern. Ihr Guide berät Sie vor Ort.",
      },
      {
        q: "Ist das ein guter erster Tag in Kairo?",
        a: "Ein ausgezeichneter — weniger Andrang und ein klarer roter Faden, der den späteren Besuch in Gizeh reicher macht.",
      },
    ],
  },

  // ===== 19. Abu Simbel Private Excursion ================================
  {
    slug: "tour-abu-simbel",
    localeSlug: "abu-simbel-ab-assuan",
    metaTitle: "Abu Simbel ab Assuan — privater Tagesausflug | Kemet",
    metaDescription:
      "Die Bergtempel Ramses' II. über dem Nassersee: Wüstenstraße im Morgengrauen, zwei Felsheiligtümer, zurück in Assuan zum Mittagessen.",
    keywords:
      "abu simbel ab assuan, abu simbel ausflug, ramses tempel abu simbel, nefertari tempel, sonnenfest abu simbel",
    crumb: "Abu Simbel",
    title: "Abu Simbel, privater Ausflug",
    subtitle:
      "Die Bergtempel Ramses' II. über dem Nassersee — eine Wüstenstraße im Morgengrauen, zwei in den Fels geschlagene Heiligtümer, und zum Mittagessen zurück in Assuan.",
    durationLabel: "Ganzer Tag (ca. 8 Stunden, ab Assuan)",
    startPoint: "Hotel oder Nilschiff in Assuan",
    summary:
      "Ramses' II. kolossale Felsentempel — in einen nubischen Berghang geschlagen, Block für Block über den steigenden See versetzt, und noch immer auf die Sonne ausgerichtet.",
    overview:
      "Abu Simbel ist das Unverhandelbare des tiefen Südens: zwei Tempel, die Ramses II. um 1264 v. Chr. unmittelbar in einen Sandsteinberg schlagen ließ, davor vier sitzende Kolosse von zwanzig Metern Höhe. Als der Nassersee hinter dem Hochdamm in den 1960er-Jahren stieg, zersägte die Rettungsaktion der UNESCO die gesamte Anlage in tausend Blöcke und baute sie fünfundsechzig Meter höher wieder auf — eine ingenieurtechnische Leistung, die der ursprünglichen kaum nachsteht. Dieser private Ausflug läuft auf die klassische Weise: Aufbruch vor Sonnenaufgang aus Assuan quer durch offene Wüste, Ankunft, wenn das erste Licht die Kolosse trifft, in Ruhe Zeit im Großen Tempel und im kleineren Heiligtum der Nefertari mit Ihrem Ägyptologen, und Rückkehr nach Assuan am frühen Nachmittag. Zweimal im Jahr, am 22. Februar und am 22. Oktober, erreicht die aufgehende Sonne das innerste Allerheiligste — fragen Sie uns, wenn Sie Ihre Termine danach legen möchten.",
    itinerary: [
      {
        title: "Die Wüstenstraße im Morgengrauen",
        text: "Aufbruch aus Assuan gegen 4 Uhr im privaten Fahrzeug, 280 Kilometer offene Wüste, während der Himmel hell wird — eine Fahrt von eigener karger Schönheit, Kaffee inklusive.",
      },
      {
        title: "Der Große Tempel Ramses' II.",
        text: "Erst vor den vier sitzenden Kolossen stehen, dann hinein durch Hallen mit Osiris-Pfeilern bis ins Allerheiligste, wo vier Götter sitzen — so ausgerichtet, dass die Sonne sie an nur zwei Morgen im Jahr erreicht.",
      },
      {
        title: "Der Tempel der Nefertari",
        text: "Der kleinere Tempel, den Ramses seiner Königin und der Göttin Hathor widmete — einer der ganz wenigen ägyptischen Tempel, in dem die Statuen einer Königin den gleichen Maßstab haben wie die des Königs.",
      },
      {
        title: "Rückfahrt nach Assuan",
        text: "Zurück durch die Wüste, um Assuan am frühen Nachmittag zu erreichen — rechtzeitig zum Mittagessen, zur Abfahrt Ihres Schiffs oder zu einer Feluke in der goldenen Stunde.",
      },
    ],
    faqs: [
      {
        q: "Warum beginnt der Tag um 4 Uhr?",
        a: "Aus drei Gründen: Die Wüstenstraße wird in geregelten Zeitfenstern befahren, die Tempel sind zur Öffnung am leersten und kühlsten, und die Rückkehr am frühen Nachmittag lässt Ihren Tag in Assuan — oder den Fahrplan Ihres Schiffs — unangetastet.",
      },
      {
        q: "Geht es auch mit dem Flugzeug statt über die Straße?",
        a: "Ja — EgyptAir fliegt die Strecke in 45 Minuten, allerdings nach eingeschränktem Flugplan, was den Ausflug auf etwa fünf Stunden verkürzt. Die Plätze sind früh vergeben; sagen Sie es bei der Buchung, dann nennen wir Ihnen beide Preise.",
      },
      {
        q: "Was ist das Sonnenfest?",
        a: "Am 22. Februar und am 22. Oktober dringt die aufgehende Sonne 60 Meter weit in den Großen Tempel und beleuchtet die sitzenden Götter des Allerheiligsten — die Ausrichtung, die Ramses' Baumeister vor dreitausend Jahren eingeplant haben. Ein Besuch an diesen Tagen will Monate im Voraus geplant sein; wir arrangieren ihn auf Anfrage.",
      },
    ],
  },

  // ===== 20. Fayoum Oasis ================================================
  {
    slug: "tour-fayoum",
    localeSlug: "fayyum-oase-tagesausflug",
    metaTitle: "Fayyum-Oase — Tagesausflug ab Kairo, privat | Kemet",
    metaDescription:
      "Ein ganzer Tag in der grünen Oase südwestlich von Kairo: Qarun-See, Wüstenwasserfälle, das Tal der Wale und ein Töpferdorf.",
    keywords:
      "fayyum oase ausflug, wadi el rayan, tal der wale wadi al hitan, kairo tagesausflug natur, qarun see",
    crumb: "Fayyum-Oase",
    title: "Die Oase Fayyum",
    subtitle:
      "Ein ganzer Tag in der grünen Oase südwestlich von Kairo — Seen, Wüstenwasserfälle, fossile Wale und ein Töpferdorf.",
    durationLabel: "Ganzer Tag (ca. 10 Stunden)",
    startPoint: "Hotel in Kairo oder Gizeh",
    summary:
      "Der Qarun-See, die Wasserfälle und Dünen des Wadi El Rayan, die fossilen Wale des Wadi Al-Hitan und die Töpfer des Dorfes Tunis — Ägyptens wilde, grüne andere Hälfte.",
    overview:
      "Anderthalb Stunden südwestlich von Kairo tauscht die Senke von Fayyum Monumente gegen Landschaft: ein großer Salzsee, Süßwasserfälle in der Wüste, ein UNESCO-Tal voller versteinerter Wale und ein Töpferdorf am Hang. Dieser ganze Tag ist ein vollständiger Tonartwechsel gegenüber den Tempeln — weite Horizonte, Vogelwelt, Dünen und ein Fischessen am See. Gereist wird privat, mit Ihrem Guide und Fahrer für den ganzen Tag.",
    itinerary: [
      {
        title: "Der Qarun-See",
        text: "Beginn am Ufer des Qarun-Sees, des antiken Moeris-Sees, wo sich Zugvögel sammeln und alte Fischerboote am Wasser liegen. Ein erstes Gefühl für die Oase, bevor es tiefer in die Wüste geht.",
      },
      {
        title: "Die Wasserfälle des Wadi El Rayan",
        text: "Ägyptens größte Wasserfälle, wo die beiden Rayan-Seen zwischen Dünen überlaufen. Zeit, das Ufer entlangzugehen und eine Landschaft aufzunehmen, die mit dem Niltal nichts gemein hat.",
      },
      {
        title: "Das Tal der Wale (Wadi Al-Hitan)",
        text: "Ein UNESCO-Welterbe mit 40 Millionen Jahre alten Skeletten früher Wale, erhalten dort, wo einst ein Urmeer lag. Ein Freiluftmuseum der Erdgeschichte zwischen Sand.",
      },
      {
        title: "Magic Lake & der Berg Mudawara",
        text: "Der sogenannte Magic Lake, von Mineralquellen gespeist und mit dem Licht die Farbe wechselnd, unterhalb der Dünen von Mudawara — ein beliebter Ort zum Sandboarden und für einen Moment Stille.",
      },
      {
        title: "Das Töpferdorf Tunis & Mittagessen am See",
        text: "Zum Abschluss Tunis, das Hangdorf, das für seine Töpfer und Werkstätten bekannt ist, danach ein entspanntes Fischessen am See vor der Rückfahrt nach Kairo.",
      },
    ],
    faqs: [
      {
        q: "Eignet sich Fayyum für Familien?",
        a: "Ja — die Mischung aus Seen, Dünen und Fossilien spricht über alle Altersgruppen hinweg an. Das Gelände ist einfach, mit kurzen Wegen statt langer Wanderungen.",
      },
      {
        q: "Was soll ich anziehen und mitnehmen?",
        a: "Bequeme Schuhe, Sonnenschutz und eine leichte Jacke für den Wind vom See. Die Wüstenabschnitte können staubig sein, eine Sonnenbrille hilft.",
      },
      {
        q: "Wie weit ist es von Kairo?",
        a: "Etwa 90 Minuten bis zwei Stunden pro Richtung im privaten Fahrzeug, je nach Hotel und Verkehr beim Verlassen der Stadt.",
      },
    ],
  },

  // ===== 21. Religious Cairo & the Citadel ===============================
  {
    slug: "tour-religious-citadel",
    localeSlug: "religioeses-kairo-und-zitadelle",
    metaTitle: "Religiöses Kairo & die Zitadelle — Tagestour | Kemet",
    metaDescription:
      "Die Glaubensrichtungen Kairos an einem Tag: koptische Kirchen, eine alte Synagoge und die von der Alabastermoschee gekrönte Zitadelle.",
    keywords:
      "koptisches kairo tour, hängende kirche, ben esra synagoge, saladin zitadelle, moschee muhammad ali besuch",
    crumb: "Religiöses Kairo",
    title: "Religiöses Kairo & die Zitadelle",
    subtitle:
      "Die Glaubensrichtungen Kairos an einem Tag — koptische Kirchen, eine alte Synagoge und die große, von einer Moschee gekrönte Zitadelle.",
    durationLabel: "Ganzer Tag (ca. 8 Stunden)",
    startPoint: "Hotel in Kairo oder Gizeh",
    summary:
      "Die Hängende Kirche, die Ben-Esra-Synagoge und Abu Serga in Alt-Kairo, danach Saladins Zitadelle und die Alabastermoschee Muhammad Alis.",
    overview:
      "Kairos religiöses Erbe schichtet koptische, jüdische und islamische Geschichte auf wenigen Quadratkilometern übereinander. Dieser Tag führt von den Gassen Alt-Kairos — der Hängenden Kirche, der alten Ben-Esra-Synagoge und der Kirche Abu Serga — hinauf zur mittelalterlichen Saladin-Zitadelle, gekrönt von der Alabastermoschee Muhammad Alis mit ihrem weiten Blick über die Stadt. Ein nachdenklicher, atmosphärischer Tag unter Führung Ihres Ägyptologen.",
    itinerary: [
      {
        title: "Die Hängende Kirche",
        text: "Beginn im koptischen Kairo an der Hängenden Kirche, die über einem römischen Torturm schwebt, eine der ältesten Kirchen Ägyptens, mit feinen Holzschranken und Ikonen.",
      },
      {
        title: "Ben-Esra-Synagoge & Abu Serga",
        text: "Durch die engen Gassen zur Ben-Esra-Synagoge und zur Kirche Abu Serga, von der die Überlieferung sagt, dass dort die Heilige Familie in Ägypten Zuflucht fand.",
      },
      {
        title: "Die Saladin-Zitadelle",
        text: "Hinauf zur Zitadelle Saladins, der mittelalterlichen Festung, die Kairo jahrhundertelang beherrschte, mit Ausblicken, die an klaren Tagen bis zu den Pyramiden reichen.",
      },
      {
        title: "Die Moschee Muhammad Alis",
        text: "Zum Abschluss das Innere der Alabastermoschee Muhammad Alis, des Wahrzeichens im osmanischen Stil, dessen Kuppeln die Silhouette Kairos prägen.",
      },
    ],
    faqs: [
      {
        q: "Gibt es eine Kleiderordnung?",
        a: "Ja — an den religiösen Stätten ist zurückhaltende Kleidung erforderlich: Schultern und Knie bedeckt, in der Moschee die Schuhe aus. Bringen Sie ein Tuch mit; wir weisen Sie vor Ort an.",
      },
      {
        q: "Liegen die Stätten nah beieinander?",
        a: "Die Stätten im koptischen Kairo liegen zu Fuß beieinander; zur Zitadelle ist es eine kurze private Fahrt, sodass der Tag angenehm fließt.",
      },
      {
        q: "Sind die Stätten geöffnet?",
        a: "Wir planen um Gebetszeiten und etwaige Schließungen herum, damit Ihr Besuch reibungslos läuft. Fotografieren ist in der Regel erlaubt, im Inneren teilweise eingeschränkt.",
      },
    ],
  },

  // ===== 22. Cairo Museums ===============================================
  {
    slug: "tour-cairo-museums",
    localeSlug: "kairoer-museen-tagestour",
    metaTitle: "Die Museen Kairos — Tagestour mit Königsmumien | Kemet",
    metaDescription:
      "Zwei große Sammlungen an einem Tag: das historische Ägyptische Museum am Tahrir und das NMEC mit der Halle der Königsmumien.",
    keywords:
      "ägyptisches museum kairo, nmec königsmumien, museen kairo tour, mumienhalle kairo, kairo museum führung",
    crumb: "Die Museen Kairos",
    title: "Die Museen Kairos",
    subtitle:
      "Zwei große Sammlungen an einem Tag — das historische Ägyptische Museum und das Nationalmuseum der Ägyptischen Zivilisation mit den Königsmumien.",
    durationLabel: "Ganzer Tag (ca. 7 Stunden)",
    startPoint: "Hotel in Kairo oder Gizeh",
    summary:
      "Die Schätze des Ägyptischen Museums am Tahrir, danach das Nationalmuseum der Ägyptischen Zivilisation und seine Halle der Königsmumien.",
    overview:
      "Ein Tag für alle, die die Objekte selbst lieben. Sie beginnen im geschichtsträchtigen Ägyptischen Museum am Tahrir, dessen hundert Jahre alte Säle die dichteste Ansammlung pharaonischer Schätze überhaupt beherbergen, und wechseln dann ins moderne Nationalmuseum der Ägyptischen Zivilisation (NMEC), wo die große Halle der Königsmumien die Könige und Königinnen des Neuen Reiches in stillen, klimatisierten Sälen zeigt. Ein Tag für Kenner, erzählt von Ihrem Ägyptologen.",
    itinerary: [
      {
        title: "Ägyptisches Museum, Tahrir",
        text: "Das große alte Museum am Tahrir-Platz — Statuen, Sarkophage, Papyri und das Gold des Neuen Reiches, Höhepunkt für Höhepunkt mit Ihrem Guide abgegangen.",
      },
      {
        title: "Nationalmuseum der Ägyptischen Zivilisation",
        text: "Quer durch die Stadt zum NMEC in Fustat, einem modernen Museum, das Ägypten von der Vorgeschichte bis heute in einem einzigen großen Bogen erzählt.",
      },
      {
        title: "Die Halle der Königsmumien",
        text: "Hinab in die gedämpft beleuchtete Halle der Königsmumien, wo die erhaltenen Körper von Pharaonen wie Ramses II. und Hatschepsut würdevoll ruhen.",
      },
    ],
    faqs: [
      {
        q: "Ist die Halle der Königsmumien enthalten?",
        a: "Ja — der Eintritt zur Mumienhalle innerhalb des NMEC ist enthalten. Es ist ein stiller, respektvoller Raum, und Fotografieren ist dort nicht erlaubt.",
      },
      {
        q: "Worin unterscheiden sich die beiden Museen?",
        a: "Das Ägyptische Museum ist dicht, historisch und voller Schätze; das NMEC ist modern und erzählend, mit den Mumien als Mittelpunkt. Zusammen ergeben sie ein vollständiges Bild.",
      },
      {
        q: "Ist das nicht zu viel für einen Tag?",
        a: "Nicht mit einem Guide, der die Höhepunkte auswählt. Wir konzentrieren uns in jedem Haus auf die wesentlichen Objekte, mit einer Pause zwischen beiden Museen.",
      },
    ],
  },

  // ===== 23. Alexandria Sightseeing ======================================
  {
    slug: "tour-alexandria",
    localeSlug: "alexandria-tagesausflug",
    metaTitle: "Alexandria — Tagesausflug ab Kairo, privat | Kemet",
    metaDescription:
      "Ein ganzer Tag am Mittelmeer: Katakomben, Pompeiussäule, die Zitadelle auf dem Pharos-Platz und die Bibliotheca Alexandrina.",
    keywords:
      "alexandria tagesausflug, alexandria ab kairo, katakomben kom esch schukafa, zitadelle qaitbay, bibliotheca alexandrina",
    crumb: "Alexandria, Tagesausflug",
    title: "Alexandria an einem Tag",
    subtitle:
      "Ein ganzer Tag am Mittelmeer — Katakomben, eine römische Säule, eine vom Meer umspülte Zitadelle und die große moderne Bibliothek.",
    durationLabel: "Ganzer Tag (ca. 11 Stunden)",
    startPoint: "Hotel in Kairo oder Gizeh",
    summary:
      "Die Katakomben von Kom esch-Schukafa, die Pompeiussäule, die Zitadelle von Qaitbay auf dem Platz des alten Pharos und die Bibliotheca Alexandrina, mit einem Fischessen.",
    overview:
      "Alexanders Stadt trägt ihre griechisch-römische Vergangenheit leichthin entlang einer geschwungenen Mittelmeer-Corniche. Dieser ganze Tag nimmt die unterirdischen Katakomben von Kom esch-Schukafa mit, die aufragende Pompeiussäule, die Zitadelle von Qaitbay auf den Fundamenten des legendären Pharos-Leuchtturms und die emporschwingende moderne Bibliotheca Alexandrina — Erbin der antiken Bibliothek. Ein Fischessen am Meer gehört dazu. Privater Guide und private Transfers ab Kairo.",
    itinerary: [
      {
        title: "Katakomben von Kom esch-Schukafa",
        text: "Hinab in die Katakomben von Kom esch-Schukafa, eine mehrgeschossige römische Nekropole, in der sich ägyptische und klassische Formen im Stein vermischen — eines der sonderbareren Wunder der Antike.",
      },
      {
        title: "Die Pompeiussäule",
        text: "Besuch der Pompeiussäule, der großen römischen Triumphsäule, die sich aus den Ruinen des Serapeums erhebt, flankiert von Granitsphingen.",
      },
      {
        title: "Die Zitadelle von Qaitbay",
        text: "Ein Gang über die Seemauern der Zitadelle von Qaitbay, errichtet genau an der Stelle, an der einst der Pharos-Leuchtturm stand — ein Weltwunder der Antike.",
      },
      {
        title: "Bibliotheca Alexandrina & Fischessen",
        text: "Zum Abschluss die eindrucksvolle moderne Bibliotheca Alexandrina, die wiedergeborene Bibliothek von Alexandria, nach einem entspannten Fischessen direkt am Mittelmeer.",
      },
    ],
    faqs: [
      {
        q: "Wie lange dauert die Fahrt ab Kairo?",
        a: "Etwa zweieinhalb bis drei Stunden pro Richtung auf der Wüstenstraße — deshalb ist dies ein langer, aber lohnender Ganztagesausflug.",
      },
      {
        q: "Geht es auch mit dem Zug?",
        a: "Ja — wer das lieber mag, für den organisieren wir die Anreise mit der Bahn und empfängt Sie in Alexandria mit privatem Guide und Fahrzeug. Fragen Sie einfach.",
      },
      {
        q: "Lohnt sich die Bibliotheca Alexandrina?",
        a: "Sehr. Schon die Architektur ist bemerkenswert, und das Gebäude steht als bewusstes Echo auf die antike Bibliothek, die die Stadt berühmt gemacht hat.",
      },
    ],
  },

  // ===== 24. Cairo Authentic Food ========================================
  {
    slug: "tour-cairo-food",
    localeSlug: "kairo-kulinarischer-abend",
    metaTitle: "Kulinarischer Abend in Kairo — Streetfood privat | Kemet",
    metaDescription:
      "Ein Abend durch die Aromen Kairos: Koshari, Ful und Ta'meya, Hawawshi und gegrillte Taube, Kunafa und Basbousa, zum Schluss ein Ahwa.",
    keywords:
      "kairo streetfood tour, koshari essen, kulinarische tour kairo, ägyptisches essen probieren, kairo abendtour",
    crumb: "Kulinarischer Abend",
    title: "Kairo, echt gegessen",
    subtitle:
      "Ein Abend zu Fuß durch die Aromen Kairos — Koshari, Straßenklassiker, gegrillte Taube und in Sirup getränkte Süßigkeiten.",
    durationLabel: "Abend (ca. 4 Stunden)",
    startPoint: "Hotel in Kairo",
    summary:
      "Eine geführte Verkostung der beliebtesten Gerichte Kairos am Abend — Koshari, Ful und Ta'meya, Hawawshi und gegrillte Taube, Kunafa und Basbousa, zum Abschluss in einem traditionellen Ahwa.",
    overview:
      "Ägyptens Hauptstadt entdeckt man kulinarisch am besten zu Fuß und nach Einbruch der Dunkelheit. Dieser geführte Abend führt Sie durch die Gerichte, die den Alltag Kairos ausmachen — die Kohlenhydrat-Sinfonie des Koshari, die Grundnahrungsmittel Ful und Ta'meya, die man zu jeder Tageszeit isst, das mit Fleisch gefüllte Hawawshi und die gegrillte Taube, und zum süßen Abschluss Kunafa und Basbousa. Sie enden dort, wo die Kairoer enden: bei Minztee und Schischa in einem traditionellen Ahwa, einem Straßencafé. Ein entspannter, vom Geschmack geführter Gegenpol zu den Monumenten.",
    itinerary: [
      {
        title: "Koshari",
        text: "Der Anfang mit Ägyptens Nationalgericht — Koshari, eine wohltuende Schichtung aus Reis, Linsen, Nudeln und Kichererbsen unter knusprigen Röstzwiebeln und einer säuerlichen Tomatensauce.",
      },
      {
        title: "Ful & Ta'meya",
        text: "Probieren Sie Ful Medames, die langsam gegarten Saubohnen, die man von morgens bis abends isst, dazu Ta'meya, Ägyptens Falafel-Variante aus Saubohnen, frisch frittiert.",
      },
      {
        title: "Hawawshi & gegrillte Taube",
        text: "Weiter ins herzhafte Zentrum des Abends — Hawawshi, gewürztes Hackfleisch in knusprigem Brot gebacken, und Hamam Mahschi, mit gewürztem Reis gefüllte gegrillte Taube.",
      },
      {
        title: "Kunafa & Basbousa",
        text: "Zum Nachtisch warme Kunafa mit ihrem Teigfaden-Mantel über süßem Käse und Stücke der in Sirup getränkten Grießkuchen Basbousa.",
      },
      {
        title: "Ein traditionelles Ahwa",
        text: "Abschluss in einem Ahwa in einer Seitenstraße, bei Minztee, türkischem Kaffee und dem Gemurmel der Stadt — so sollte jeder Abend in Kairo enden.",
      },
    ],
    faqs: [
      {
        q: "Ist das Essen für Besucher unbedenklich?",
        a: "Ja — wir wählen gut besuchte, bewährte Lokale mit hohem Durchsatz, und Ihr Guide übernimmt das Bestellen. Wasser in Flaschen gibt es durchgehend.",
      },
      {
        q: "Lassen sich Ernährungswünsche berücksichtigen?",
        a: "Vegetarier sind gut versorgt — Koshari, Ful, Ta'meya und die Süßspeisen sind alle fleischlos. Sagen Sie uns Allergien vorab, dann passen wir die Route an.",
      },
      {
        q: "Werde ich zu satt?",
        a: "Die Portionen sind Verkostungsgrößen und über den ganzen Weg verteilt, sodass Sie breit probieren, ohne es an einer Station zu übertreiben. Kommen Sie hungrig, aber ohne Sorge.",
      },
    ],
  },
];
