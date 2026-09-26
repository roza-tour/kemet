import type { UltraText } from "./types";

export const de: UltraText = {
  metaTitle: "Ultra-Luxusreisen Ägypten — vier private Reisen | Kemet",
  metaDescription:
    "Kemet Ultra: die Cheops-Pyramide nur für Sie geöffnet, Dinner im Karnak-Tempel, eigene Dahabiya oder Jacht, die besten Suiten. 7 bis 15 Tage, offene Preise.",
  keywords:
    "ultra luxusreise ägypten, private luxusreise ägypten, cheops pyramide private öffnung, dinner karnak tempel, dahabiya charter privat, privatjacht rotes meer, mena house suite, old cataract assuan, oberoi philae",
  crumb: "Kemet Ultra",

  heroTag: "Kemet Ultra · auf private Anfrage",
  h1: ["Ägypten, geöffnet", "nur für Sie"],
  lede:
    "Vier private Reisen an der Spitze des ägyptischen Marktes: die Cheops-Pyramide für Ihre Gruppe geöffnet, ein Dinner in Karnak, nachdem die Tore geschlossen sind, eine Dahabiya oder eine Jacht ohne andere Gäste und die großen Hotels in ihren besten Zimmern. Mit offenen Preisen — und jedes Element schriftlich bestätigt, bevor Sie etwas bezahlen.",
  ctaPrimary: "Vertraulich sprechen",
  ctaQuiet: "oder eine vertrauliche Anfrage senden",

  signaturesOverline: "Die Signaturen",
  signatures: [
    ["Die Cheops-Pyramide, allein", "zwei Stunden darin, ohne einen anderen Besucher"],
    ["Dinner in Karnak", "der Tempel nach Einbruch der Dunkelheit für Sie geöffnet"],
    ["Der Nil, gechartert", "eine eigene Dahabiya oder die Oberoi Philae in einer Suite"],
    ["Das Rote Meer, per Jacht", "eine Jacht mit Crew an den Riffen von Giftun"],
    ["Der Himmel, privat", "Privatflugzeug nach Abu Simbel und an die Küste"],
  ],

  question: "Was ist Kemet Ultra?",
  answer: ({ from2, to2, from4 }) =>
    `Kemet Ultra ist die höchste Stufe von Kemet: vier vollständig private Ägypten-Reisen von 7 bis 15 Tagen — die Cheops-Pyramide nur für Ihre Gruppe geöffnet, ein Dinner in Karnak nach Schließung, eine gecharterte Dahabiya oder Jacht und Suiten im Mena House, im Old Cataract und bei Oberoi. Zu zweit ${from2} bis ${to2} pro Person; zu viert ab ${from4}.`,

  glanceOverline: "Auf einen Blick",
  glanceTitle: "Wählen Sie Ihre Reise",

  journeysOverline: "Die Reisen",
  journeysTitle: ["Vier Wege, Ägypten", "auf diesem Niveau zu erleben"],

  labels: {
    duration: (d, n) => `${d} Tage / ${n} Nächte`,
    from: "Ab",
    perPersonTwo: "pro Person, zu zweit",
    perPersonFour: (p) => `${p} pro Person zu viert`,
    stays: "Wo Sie wohnen",
    nights: (n) => (n === 1 ? "1 Nacht" : `${n} Nächte`),
    view: "Zur Reise",
    dayByDay: "Tag für Tag",
    day: "Tag",
    enquire: (t) => `Anfrage: ${t}`,
    priceNote: (peak) =>
      `Preise in Euro, pro Person, für Oktober 2026 bis September 2027, einschließlich aller auf dieser Seite genannten Leistungen. Internationale Flüge und Trinkgelder sind nicht enthalten. In den Spitzenwochen — 20. Dezember bis 5. Januar sowie die Osterwoche — gilt ein Zuschlag von ${peak} %.`,
  },

  place: { giza: "Gizeh", cairo: "Kairo", luxor: "Luxor, Westufer", aswan: "Assuan", nile: "Auf dem Nil", redsea: "Rotes Meer" },
  room: {
    pyramidSuite: "Suite mit Pyramidenblick",
    nileSuite: "Suite mit Nilblick",
    palaceWing: "Historischer Palastflügel, Nilblick",
    suite: "Suite",
    charter: "Vollcharter — das ganze Schiff",
    cruiseSuite: "Luxus-Suite",
    poolSuite: "Grand Suite mit privatem Pool",
  },
  dahabiya: "Private Dahabiya",

  journeys: {
    "private-pharaoh": {
      title: "Der private Pharao",
      kicker: "Die Cheops-Pyramide und Karnak, jeweils nur für Ihre Gruppe geöffnet",
      route: "Kairo · Gizeh · Luxor · Abydos",
      body:
        "Eine Woche, gebaut um zwei Türen, die sonst verschlossen sind. In Gizeh wird die Cheops-Pyramide zwei Stunden lang nur für Ihre Gruppe geöffnet; in Luxor bleibt Karnak nach Schließung für Sie offen, und im Tempelbezirk wird das Dinner serviert. Dazwischen: das Grand Egyptian Museum mit einem erfahrenen Ägyptologen, die schönsten Gräber im Tal der Könige und die zwei Tempel, die die meisten Besucher nie erreichen.",
      highlights: [
        "Private Öffnung der Cheops-Pyramide — zwei Stunden, nur Ihre Gruppe",
        "Karnak nach Schließung geöffnet, mit Dinner im Tempelbezirk",
        "Die Gräber von Sethos I., Nefertari und Tutanchamun",
        "Ein privater Ballonkorb und eine private Feluke",
        "Ein erfahrener Ägyptologe durchgehend, Chauffeur auf Abruf",
        "VIP-Service bei jeder Ankunft und Abreise",
      ],
      days: [
        { t: "Ankunft, Empfang an der Flugzeugtür", d: "VIP-Service durch die Einreise, dann das Mena House, wo die Cheops-Pyramide das Fenster füllt." },
        { t: "Das Grand Egyptian Museum", d: "Der vollständige Schatz des Tutanchamun und die Große Treppe mit einem erfahrenen Ägyptologen; der Nachmittag gehört Ihnen." },
        { t: "Allein in der Cheops-Pyramide", d: "Zwei Stunden in der Pyramide, nur für Ihre Gruppe geöffnet, danach die Stufenpyramide und das Serapeum in Sakkara." },
        { t: "Luxor, und Karnak bei Nacht", d: "Flug nach Süden mit VIP-Service; am Abend wird Karnak für Sie geöffnet und das Dinner im Tempelbezirk serviert." },
        { t: "Ballon im Morgengrauen, die Königsgräber", d: "Ein privater Korb über dem Westufer, dann die Gräber von Sethos I., Tutanchamun und Königin Nefertari." },
        { t: "Abydos und Dendera", d: "Die zwei schönsten Tempel Ägyptens im privaten Wagen, Mittagessen unterwegs, Sonnenuntergang auf einer privaten Feluke." },
        { t: "Abreise", d: "Flug nach Kairo, Begleitung bis zu Ihrem internationalen Abflug." },
      ],
    },
    "royal-nile": {
      title: "Der königliche Nil",
      kicker: "Eine Dahabiya nur für Ihre Gruppe, von Assuan nach Esna",
      route: "Kairo · Assuan · Abu Simbel · der Nil · Luxor",
      body:
        "Vier Nächte auf einer Segel-Dahabiya ohne andere Gäste: Crew, Koch und Liegeplätze gehören Ihnen, und das Boot hält, wo große Schiffe nicht anlegen können. Davor Kairo mit der privat geöffneten Cheops-Pyramide und eine Nacht im Old Cataract; Abu Simbel im Privatflugzeug; und zum Schluss Karnak, für Ihr Dinner geöffnet.",
      highlights: [
        "Vollcharter einer erstklassigen Dahabiya — keine anderen Gäste",
        "Private Öffnung der Cheops-Pyramide; Dinner in Karnak nach Schließung",
        "Abu Simbel im Privatflugzeug",
        "Old Cataract, historischer Palastflügel, zum Nil gelegen",
        "Die Gräber von Sethos I. und Nefertari; ein privater Ballon",
        "VIP-Service bei jeder Ankunft und Abreise",
      ],
      days: [
        { t: "Ankunft, Empfang an der Flugzeugtür", d: "VIP-Service, dann das Four Seasons at The First Residence über dem Nil." },
        { t: "Das Grand Egyptian Museum", d: "Der Schatz des Tutanchamun und die Große Treppe mit einem erfahrenen Ägyptologen; ein ruhiger Nachmittag." },
        { t: "Allein in der Cheops-Pyramide", d: "Zwei private Stunden in der Pyramide, danach die Stufenpyramide und das Serapeum in Sakkara." },
        { t: "Assuan und das Old Cataract", d: "Morgenflug nach Süden; Philae mit dem Privatboot, dann Sonnenuntergang auf der Terrasse, auf der Agatha Christie wohnte." },
        { t: "Abu Simbel, dann an Bord", d: "Die Tempel Ramses' II. im ersten Licht, per Privatflugzeug; zurück zum Mittagessen, dann legt Ihre Dahabiya ab." },
        { t: "Kom Ombo", d: "Segeln nach Norden zum Doppeltempel von Sobek und Horus; Übernachtung an einem stillen Ufer." },
        { t: "Gebel el-Silsila und Edfu", d: "Die antiken Sandsteinbrüche und ihre Kapellen, dann Edfu, der besterhaltene Tempel Ägyptens." },
        { t: "El Kab", d: "Felsgräber, die kaum jemand sieht, ein letzter Nachmittag unter Segeln und Dinner an Deck." },
        { t: "Luxor, und Karnak bei Nacht", d: "Ausschiffung in Esna; die Gräber von Sethos I. und Nefertari; Karnak nach Schließung geöffnet, mit Dinner im Tempelbezirk." },
        { t: "Ballon, dann Abreise", d: "Ein privater Korb im Morgengrauen über dem Westufer; Flug nach Kairo und VIP-Abflug." },
      ],
    },
    "karnak-to-coral-sea": {
      title: "Von Karnak ans Korallenmeer",
      kicker: "Mit der Oberoi Philae auf dem Nil, dann eine Privatjacht am Roten Meer",
      route: "Kairo · Luxor · der Nil · Assuan · Abu Simbel · Rotes Meer",
      body:
        "Die klassische Nilreise auf dem feinsten Schiff des Flusses, in einer Suite — und dann ein würdiger Abschluss: im Privatflugzeug von Assuan ans Rote Meer, eine Suite mit eigenem Pool und eine Jacht mit Crew für einen Tag an den Riffen von Giftun. Die Cheops-Pyramide und Karnak werden unterwegs für Sie geöffnet.",
      highlights: [
        "Die Oberoi Philae, vier Nächte in einer Luxus-Suite",
        "Private Öffnung der Cheops-Pyramide; Dinner in Karnak nach Schließung",
        "Privatflugzeug nach Abu Simbel und weiter ans Rote Meer",
        "Eine Motorjacht mit Crew für einen ganzen Tag",
        "Suiten im Old Cataract und im Oberoi, Sahl Hasheesh",
        "VIP-Service bei jeder Ankunft und Abreise",
      ],
      days: [
        { t: "Ankunft, Empfang an der Flugzeugtür", d: "VIP-Service, dann das Mena House mit der Cheops-Pyramide im Fenster." },
        { t: "Das Grand Egyptian Museum", d: "Der Schatz des Tutanchamun mit einem erfahrenen Ägyptologen; der Nachmittag gehört Ihnen." },
        { t: "Allein in der Cheops-Pyramide", d: "Zwei private Stunden in der Pyramide, danach die Stufenpyramide und das Serapeum in Sakkara." },
        { t: "Luxor, an Bord der Oberoi Philae", d: "Flug nach Süden und Einschiffung; am Abend wird Karnak für Sie geöffnet, mit Dinner im Tempelbezirk." },
        { t: "Das Westufer", d: "Ein privater Ballon im Morgengrauen, die Gräber von Sethos I. und Nefertari, dann legt das Schiff nach Süden ab." },
        { t: "Esna und Edfu", d: "Durch die Schleuse von Esna zum Horus-Tempel von Edfu." },
        { t: "Kom Ombo bis Assuan", d: "Der Flusstempel von Kom Ombo, am Abend Assuan." },
        { t: "Das Old Cataract", d: "Ausschiffung in Assuan; Philae mit dem Privatboot; eine private Feluke zwischen den Inseln bei Sonnenuntergang." },
        { t: "Abu Simbel im Privatflugzeug", d: "Die Tempel Ramses' II. im ersten Licht, zum Mittagessen zurück in Assuan, ein ruhiger Nachmittag." },
        { t: "Privat ans Rote Meer", d: "Im Privatflugzeug nach Hurghada und ins Oberoi in Sahl Hasheesh — eine Suite mit eigenem Pool." },
        { t: "Ein Tag auf der Jacht", d: "Mit einer Motorjacht und Crew zu den Riffen von Giftun: Schnorcheln, Mittagessen an Bord, zurück bei Sonnenuntergang." },
        { t: "Abreise", d: "Heimflug ab Hurghada oder Weiterflug über Kairo, mit VIP-Service." },
      ],
    },
    "grand-odyssey": {
      title: "Die große private Odyssee",
      kicker: "Jede Strecke privat — Flugzeug, Dahabiya und Jacht",
      route: "Kairo · Assuan · Abu Simbel · der Nil · Luxor · Rotes Meer",
      body:
        "Ganz Ägypten, ohne einen einzigen geteilten Moment. Ein Privatflugzeug auf jeder Inlandsstrecke; eine Dahabiya, vier Nächte lang gechartert zwischen Assuan und Esna; die Cheops-Pyramide und Karnak für Sie geöffnet; und drei Nächte am Roten Meer mit zwei Tagen auf Ihrer eigenen Jacht. Für eine erste Reise, die die maßgebliche sein soll.",
      highlights: [
        "Privatflugzeug auf jeder Inlandsstrecke",
        "Vollcharter einer Dahabiya für vier Nächte",
        "Private Öffnung der Cheops-Pyramide; Dinner in Karnak nach Schließung",
        "Zwei Tage auf einer Jacht mit Crew",
        "Suiten im Mena House, Old Cataract, Al Moudira und Oberoi",
        "Ein Ägyptologe und ein persönlicher Betreuer für die ganze Reise",
      ],
      days: [
        { t: "Ankunft, Empfang an der Flugzeugtür", d: "VIP-Service, dann das Mena House mit der Cheops-Pyramide im Fenster." },
        { t: "Das Grand Egyptian Museum", d: "Der Schatz des Tutanchamun mit einem erfahrenen Ägyptologen; ein ruhiger Nachmittag." },
        { t: "Cheops-Pyramide, Sakkara und Dahschur", d: "Zwei private Stunden in der Pyramide, dann die Stufenpyramide und die Rote Pyramide." },
        { t: "Im Privatflugzeug nach Assuan", d: "Das Old Cataract, am Nachmittag Philae mit dem Privatboot." },
        { t: "Abu Simbel", d: "Im Privatflugzeug im ersten Licht; bei Sonnenuntergang eine private Feluke zwischen den Inseln." },
        { t: "An Bord Ihrer Dahabiya", d: "Das Boot gehört Ihnen ab dem Mittagessen; Segeln nach Norden bis Kom Ombo." },
        { t: "Gebel el-Silsila", d: "Antike Steinbrüche und in den Fels geschlagene Kapellen; Übernachtung an einem stillen Ufer." },
        { t: "Edfu", d: "Der Horus-Tempel am frühen Morgen, bevor die Tagesbesucher kommen." },
        { t: "El Kab", d: "Felsgräber, die kaum jemand sieht; ein letztes Dinner an Deck." },
        { t: "Luxor, und Karnak bei Nacht", d: "Ausschiffung in Esna, dann Al Moudira; Karnak nach Schließung geöffnet, mit Dinner im Tempelbezirk." },
        { t: "Ballon im Morgengrauen, die Königsgräber", d: "Ein privater Korb über dem Westufer; die Gräber von Sethos I., Tutanchamun und Nefertari." },
        { t: "Privat ans Rote Meer", d: "Im Privatflugzeug nach Hurghada; eine Suite mit eigenem Pool im Oberoi, Sahl Hasheesh." },
        { t: "Die Jacht", d: "Die Riffe von Giftun auf einer Motorjacht mit Crew, Mittagessen an Deck." },
        { t: "Noch einmal die Jacht — oder gar nichts", d: "Ein anderes Riff, ein Tauchgang oder ein Tag im Spa." },
        { t: "Abreise", d: "Im Privatflugzeug nach Kairo und VIP-Service bis zu Ihrem Heimflug." },
      ],
    },
  },

  standardOverline: "Wie diese Stufe geführt wird",
  standard: [
    { title: "Erst der Preis, dann der Beweis", body: "Jeder Preis steht auf dieser Seite, und jedes Element der Reise wird schriftlich und auf Ihren Namen bestätigt, bevor Geld fließt." },
    { title: "Ein Ansprechpartner", body: "Wer die Reise entwirft, antwortet auch, während Sie in Ägypten sind. Kein Callcenter und keine Nummer, die nach der Anzahlung schweigt." },
    { title: "Änderungen ohne Umstände", body: "Jede Reise lässt sich umgestalten — Tage, Hotels, Tempo, eine größere Gruppe oder mitreisendes Personal — und wird nach derselben Grundlage neu berechnet." },
    { title: "Diskretion als Standard", body: "Keine Gruppe, kein geteiltes Fahrzeug, keine veröffentlichte Abfahrtsliste. Nichts darüber, wer Sie sind oder wohin Sie reisen, wird außerhalb des ausführenden Teams besprochen." },
  ],

  faqOverline: "Bevor Sie schreiben",
  faqs: ({ from2, to2, from4, to4, peak }) => [
    { q: "Was kostet eine Ultra-Luxusreise in Ägypten?", a: `Die vier Kemet-Ultra-Reisen kosten zu zweit ${from2} pro Person für sieben Tage bis ${to2} für fünfzehn. Zu viert sinkt der Preis pro Person auf ${from4} bis ${to4}, weil Charter, Flugzeug und private Öffnungen geteilt werden. In den Spitzenwochen zu Weihnachten, Neujahr und Ostern gilt ein Zuschlag von ${peak} %.` },
    { q: "Kann die Cheops-Pyramide wirklich nur für uns geöffnet werden?", a: "Ja. Zwei Stunden lang wird die Cheops-Pyramide außerhalb der Öffnungszeiten nur für Ihre Gruppe geöffnet — Ihr Ägyptologe an Ihrer Seite, sonst niemand darin. Wir kümmern uns um alles; Sie kommen einfach." },
    { q: "Wie funktioniert ein Dinner in Karnak?", a: "Wenn die letzten Besucher gegangen sind, wird Karnak für Ihre Gruppe geöffnet. Sie gehen mit Ihrem Ägyptologen durch den Säulensaal, und das Dinner wird im Tempelbezirk serviert. Für Sie gibt es nichts zu organisieren." },
    { q: "Warum ist das Winter Palace nicht dabei?", a: "Das Winter Palace in Luxor ist seit Anfang 2026 für eine vollständige Restaurierung geschlossen und öffnet im Juli 2027 als Mandarin Oriental Winter Palace wieder. Bis dahin wohnen Sie in Luxor im Al Moudira am Westufer. Das Old Cataract in Assuan bleibt in seinem historischen Palastflügel geöffnet, während der Nilflügel renoviert wird." },
    { q: "Welche Dahabiya wird gechartert?", a: "Eine erstklassige Dahabiya mit sechs bis zehn Kabinen, vollständig gechartert, mit eigener Crew und eigenem Koch — passend zu Ihren Daten ausgewählt und in Ihrem schriftlichen Angebot genannt." },
    { q: "Kann eine Reise geändert oder verlängert werden?", a: "Jede. Tage, Hotels, Reihenfolge und Tempo lassen sich ändern, und der Preis wird nach derselben Grundlage neu berechnet. Größere Gruppen, mitreisendes Personal und die Ankunft im Privatjet werden von Anfang an eingeplant." },
    { q: "Wie früh sollten wir buchen?", a: "Acht bis zwölf Wochen für Reisen zwischen Oktober und April, wenn private Öffnungen und Dahabiya-Charter am gefragtesten sind. Kürzere Fristen sind manchmal möglich; Sie erfahren vor der Zusage, welche Elemente sich noch sichern lassen." },
    { q: "Mit wem haben wir zu tun?", a: "Mit einer Person, von der ersten Nachricht bis zum letzten Tag in Ägypten. Wenn ein Family Office oder eine Assistenz die Planung übernimmt, bleibt auch für sie dieselbe Person zuständig." },
  ],

  closeTitle: "Sagen Sie uns, wer reist, und wann.",
  closeBody:
    "Jede Reise hier lässt sich ändern. Sie erhalten zuerst einen schriftlichen Entwurf, dann den Preis, und bezahlt wird erst, wenn jedes Element auf Ihren Namen bestätigt ist. Alles bleibt unter uns.",
  closeCta: "WhatsApp, vertraulich",
  closeQuiet: "oder per E-Mail",

  whatsapp: "Guten Tag Kemet — ich möchte über eine Kemet-Ultra-Reise in Ägypten sprechen.",
  whatsappJourney: (t) => `Guten Tag Kemet — ich interessiere mich für „${t}" (Kemet Ultra).`,
  mailSubject: "Kemet Ultra — vertrauliche Anfrage",
  mailBody: "Bitte teilen Sie uns mit, wer reist, ungefähr wann, und welche Reise Sie interessiert.\n\n",
};
