// ---------------------------------------------------------------------------
// The experience and activity pages in Deutsch — the words only. See
// ./types.ts for the fields and ./build.ts for how they become pages.
// ---------------------------------------------------------------------------
import type { ExpText } from "./types";

export const deExperiences: ExpText[] = [

  // ===== Private Felucca Sailing on the Nile =====
  {
    kind: "experience",
    id: "private-felucca-nile",
    localeSlug: "private-feluke-nil-assuan",
    metaTitle: "Private Feluken-Fahrt in Assuan — Exklusive Charter | Kemet",
    metaDescription:
      "Chartern Sie in Assuan eine ganze traditionelle Feluke für eine geruhsame private Nilfahrt vorbei an Elephantine, dem Ersten Katarakt und dem Westufer.",
    keywords:
      "feluke assuan, private feluken-fahrt, feluke nil charter, segeln auf dem nil, assuan bootsfahrt, elephantine feluke",
    name: "Private Feluken-Fahrt auf dem Nil",
    summary:
      "Chartern Sie eine ganze traditionelle Feluke und gleiten Sie den Nil hinab, vorbei an uralten Tempeln, Granitfelsen und palmengesäumten Ufern — im selben gemächlichen Tempo, in dem Ägypter seit Jahrtausenden segeln.",
    description:
      "Die Feluke — ein hölzernes Boot mit Lateinersegel, das sich im Wesentlichen seit Jahrtausenden nicht verändert hat — ist die vertrauteste Art, den Nil zu erleben. Bei exklusiver Charter gehört das Schiff Ihrer Gruppe allein. Sobald Sie an der Corniche von Assuan ablegen, verklingt das Summen der Stadt; an seine Stelle treten der Wind im Segel und das leise Klatschen des Wassers am Rumpf. Der Fluss ist hier von außerordentlicher Schönheit: Die Granitfelsen des Ersten Katarakts durchbrechen in markanten Formationen die Wasseroberfläche, die Insel Elephantine liegt flach und grün in mittlerer Ferne, und hinter dem Westufer erheben sich die Dünen der Westlichen Wüste. Ihre Felukenführung lenkt das Boot mit dem sicheren Gespür, das aus Generationen der Nilschifffahrt erwächst. Eine typische Nachmittagsfahrt führt an der Insel Elephantine, dem Botanischen Garten auf der Kitchener-Insel und dem Aga-Khan-Mausoleum auf dem Hügel am Westufer vorbei, doch die Route richtet sich nach Wind, Strömung und Ihren Wünschen.",
    duration: "2 Stunden",
    where: "Assuan, Oberägypten",
    bestTime: "",
    highlights: [
      "Eine ganze Feluke exklusiv für Ihre Gruppe gechartert",
      "Granitinseln des Ersten Katarakts und die Insel Elephantine",
      "Der Botanische Garten auf der Kitchener-Insel, vom Wasser aus gesehen",
      "Dünen am Westufer und das Aga-Khan-Mausoleum",
      "Völlig ohne Eile — kein Fahrplan, keine weiteren Fahrgäste",
    ],
    keyFacts: [
      { label: "Dauer", value: "2 Stunden" },
      { label: "Schwierigkeit", value: "Leicht" },
      { label: "Abfahrt", value: "Corniche von Assuan (wird bei der Buchung bestätigt)" },
      { label: "Gruppenart", value: "Private Charter — bis zu 8 Gäste" },
      { label: "Sprachen", value: "Englisch, Deutsch, Italienisch, Spanisch, Französisch, Russisch, Indonesisch, Malaiisch, Portugiesisch, Arabisch, Mandarin-Chinesisch" },
      { label: "Beste Reisezeit", value: "Oktober – April" },
    ],
    included: [
      "Exklusive Feluken-Charter (das gesamte Schiff)",
      "Erfahrene Nil-Schiffsführung",
      "Schwimmwesten",
      "Wasser in Flaschen",
    ],
    excluded: [
      "Landgänge auf Inseln (auf Anfrage möglich, vorbehaltlich der Genehmigung des Betreibers)",
      "Mittagessen oder Erfrischungen über das Flaschenwasser hinaus",
      "Trinkgelder",
      "Hoteltransfers",
    ],
    prepare: [
      "Bringen Sie Sonnenschutz mit — auf einer Feluke gibt es wenig Schatten, und der Nil reflektiert die UV-Strahlung stark",
      "Eine leichte Schicht ist bei einer Fahrt am späten Nachmittag nützlich; nach Sonnenuntergang sinken die Temperaturen rasch",
      "Flache Schuhe werden empfohlen — beim Ein- und Aussteigen ist eine kleine Stufe zu nehmen",
    ],
    goodToKnow: [
      "Feluken werden vom Wind angetrieben und können nicht gegen starken Gegenwind motoren; die Schiffsführung berät Sie zu den Bedingungen",
      "Das Erlebnis verläuft entspannt und ohne Eile — es gibt keine formelle Kommentierung, es sei denn, Sie wünschen sie",
      "Die Flussufer dürfen uneingeschränkt fotografiert werden; ägyptische Militäranlagen an der Corniche dürfen nicht fotografiert werden",
    ],
    goodFor: [],
    meetingPoint: "Die Feluke legt an der Corniche von Assuan ab. Ihr Hotel und der genaue Abfahrtsort werden bei der Buchung bestätigt.",
    groupSize: "Das ganze Schiff ist für Ihre Gruppe gechartert — höchstens 8 Personen.",
    availability: "In der Saison täglich verfügbar. Die Windverhältnisse beeinflussen gelegentlich den Zeitplan; Ihre Schiffsführung berät Sie am Tag selbst.",
    priceNote: "Preis auf Anfrage. Charter des gesamten Schiffs inklusive — keine Gebühr pro Person.",
    faqs: [
      {
        q: "Können wir auf der Insel Elephantine anlegen?",
        a: "Eine Segelrunde an der Insel vorbei ist Standard. Ein Landgang erfordert eine gesonderte Genehmigung und Vorbereitung; das lässt sich auf Wunsch bei der Buchung organisieren.",
      },
      {
        q: "Ist das Erlebnis für Nichtschwimmer geeignet?",
        a: "Ja. Schwimmwesten werden gestellt, und die Feluke fährt in ruhigen, geschützten Abschnitten des Flusses. Das Erlebnis ist gemächlich und risikoarm.",
      },
    ],
    photos: [
      { alt: "Eine traditionelle Feluke mit weißem Lateinersegel auf dem Nil bei Assuan", label: "Private Feluke" },
      { alt: "Eine Feluke zeichnet sich als Silhouette auf dem Nil ab, während die Sonne über dem Wasser untergeht", label: "Goldene Stunde" },
      { alt: "Eine Feluke mit Lateinersegel gleitet bei Sonnenuntergang an Palmen auf dem Nil vorbei", label: "Unter Segeln" },
    ],
  },

  // ===== Old Cairo Walking Experience =====
  {
    kind: "experience",
    id: "old-cairo-walking",
    localeSlug: "altes-kairo-private-stadtfuehrung",
    metaTitle: "Altes Kairo zu Fuß — Private Tour mit Guide | Kemet",
    metaDescription:
      "Private Fußtour durch das islamische Kairo und das koptische Viertel: Festung Babylon, Ibn-Tulun-Moschee, Hängende Kirche und Khan el-Khalili.",
    keywords:
      "altes kairo führung, islamisches kairo tour, koptisches kairo, ibn tulun moschee, khan el-khalili führung, kairo stadtrundgang privat",
    name: "Altes Kairo zu Fuß",
    summary:
      "Gehen Sie durch die mittelalterlichen Gassen des islamischen Kairo und des koptischen Viertels, begleitet von einem Guide mit historischem Fachwissen, der in knapp zweitausend Jahren Stadtgeschichte zu lesen versteht — von römischen Befestigungen bis zu osmanischen Kaufmannspalästen.",
    description:
      "Kairo ist nicht eine Stadt, sondern ein Dutzend, jede auf den Ruinen ihrer Vorgängerin erbaut. Dieses private Erlebnis zu Fuß führt durch die ältesten bewohnten Schichten: die römische Festung Babylon, das Herz des koptischen Kairo; das koptische Viertel mit der Hängenden Kirche, die über dem römischen Tor der Festung errichtet wurde; und das mittelalterliche Gefüge des islamischen Kairo — die größte erhaltene mittelalterliche Stadt der Welt und UNESCO-Welterbe. Ihr Guide liest keine Texte ab, sondern kennt die Stadt wirklich: Im Hof der Ibn-Tulun-Moschee erklärt er, was ihren Gründer aus dem neunten Jahrhundert von jedem anderen abbasidischen Statthalter unterschied, oder zeigt Ihnen die mamlukischen Wasserverteilungssysteme, die in den Gassenmauern noch sichtbar sind. Das koptische Viertel und das islamische Kairo liegen einige Kilometer auseinander, daher bringt Sie ein Privatwagen von einem zum anderen, und die Zeit zu Fuß verbringen Sie dort, wo es darauf ankommt. Der Rundgang endet im Basarviertel Khan el-Khalili und in der Gasse der Parfümhändler an seinem Rand — mit dem Wissen, sich dort später auf Ihrer Reise selbstständig zurechtzufinden und es zu schätzen.",
    duration: "3 Stunden",
    where: "Islamisches Kairo & koptisches Viertel, Kairo",
    bestTime: "",
    highlights: [
      "Römische Festung Babylon und die Hängende Kirche",
      "Ben-Esra-Synagoge — eine der ältesten Afrikas",
      "Ibn-Tulun-Moschee — Kairos älteste vollständig erhaltene Moschee (879 n. Chr.)",
      "Das mittelalterliche Gefüge des islamischen Kairo (UNESCO-Welterbe)",
      "Das Basarviertel Khan el-Khalili und die Gasse der Parfümhändler",
    ],
    keyFacts: [
      { label: "Dauer", value: "3 Stunden" },
      { label: "Schwierigkeit", value: "Mittel (Kopfsteinpflaster und unebener Untergrund)" },
      { label: "Startpunkt", value: "Koptisches Kairo (Festung Babylon)" },
      { label: "Gruppenart", value: "Privat — nur Ihre Reisegruppe" },
      { label: "Sprachen", value: "Englisch, Deutsch, Italienisch, Spanisch, Französisch, Russisch, Indonesisch, Malaiisch, Portugiesisch, Arabisch, Mandarin-Chinesisch" },
      { label: "Geeignet für", value: "Ab 8 Jahren" },
    ],
    included: [
      "Privater Guide mit historischem Fachwissen",
      "Privatwagen zwischen dem koptischen Viertel und dem islamischen Kairo",
      "Alle Eintrittsgebühren für Moscheen und Kirchen",
      "Wasser in Flaschen",
    ],
    excluded: [
      "Eintritt in das Museum für Islamische Kunst (optionale Ergänzung, 1 Stunde)",
      "Mittagessen oder Erfrischungen über das Wasser hinaus",
      "Hoteltransfers (auf Anfrage möglich)",
      "Trinkgelder",
    ],
    prepare: [
      "Tragen Sie bequeme, flache Schuhe — die Gassen sind gepflastert und mitunter uneben",
      "Für den Zutritt zu Moscheen und Kirchen müssen Schultern und Knie bedeckt sein; bei Bedarf stellt Ihnen der Guide Tücher zur Verfügung",
      "Der Rundgang umfasst mäßige Strecken (ca. 3–4 km zu Fuß, mit einer kurzen Privatfahrt zwischen den beiden Vierteln) sowie einige Stufen und Steigungen",
      "Ein Start am Vormittag (vor 10 Uhr) umgeht die größte Hitze und die frühesten Reisegruppen",
    ],
    goodToKnow: [
      "Freitag ist der islamische Feiertag — einige Moscheen sind während der Gebetszeiten (am späten Vormittag) für Besucher geschlossen; die Route wird entsprechend angepasst",
      "Fotografieren ist in den meisten öffentlichen Bereichen und an den Außenseiten religiöser Bauten erlaubt; für das Innere gelten unterschiedliche Regeln",
      "Der Abschnitt in Khan el-Khalili dient dem Schauen — Käufe sind keineswegs verpflichtend, und der Guide liefert Hintergründe, die das Stöbern lohnender machen",
    ],
    goodFor: [],
    meetingPoint: "Treffpunkt ist die römische Festung Babylon im koptischen Kairo. Hotelabholung auf Anfrage möglich.",
    groupSize: "Privat — nur Ihre Reisegruppe. Höchstens 8 Personen, damit man bequem durch die Gassen kommt.",
    availability: "An den meisten Morgen verfügbar. Das Freitagsgebet beeinträchtigt den Zugang zu einigen Moscheen; alternative Zeiten werden arrangiert.",
    priceNote: "Preis auf Anfrage. Alle Eintrittsgebühren inklusive.",
    faqs: [
      {
        q: "Wie viel wird gelaufen?",
        a: "Die Route umfasst in drei Stunden etwa 3–4 km zu Fuß, mit einer kurzen Privatfahrt zwischen dem koptischen Viertel und dem islamischen Kairo und Pausen für Erläuterungen an jeder Stätte. Das Gelände bietet Kopfsteinpflaster und gelegentlich Stufen, aber keine anhaltenden Anstiege.",
      },
      {
        q: "Lässt sich der Rundgang für jüngere Kinder anpassen?",
        a: "Ja. Der Guide kann die Route verkürzen und die Erläuterungen auf Familien mit jüngeren Kindern abstimmen. Eine kürzere Variante von 2 Stunden, die nur das koptische Viertel umfasst, ist verfügbar.",
      },
    ],
    photos: [
      { alt: "Eine laternenbeleuchtete mittelalterliche Gasse des islamischen Kairo entlang der Al-Muizz-Straße, Minarette über den Dächern", label: "Altes Kairo" },
    ],
  },

  // ===== Egyptian Cooking Experience =====
  {
    kind: "experience",
    id: "egyptian-cooking",
    localeSlug: "aegyptische-kochschule-kairo",
    metaTitle: "Ägyptischer Kochkurs in Kairo — Privat | Kemet",
    metaDescription:
      "Privater ägyptischer Kochkurs in Kairo: Marktbesuch, vier Gerichte aus 7.000 Jahren Esskultur und ein gemeinsames Essen. Zum Mitmachen, geschichtlich begleitet.",
    keywords:
      "kochkurs kairo, ägyptischer kochkurs, ägyptisch kochen lernen, kochen in kairo privat, ägyptische küche kurs, ful medames kochkurs",
    name: "Ägyptisches Kocherlebnis",
    summary:
      "Lernen Sie vier Gerichte kochen, die Ägyptens 7.000-jährige Esskultur nachzeichnen — von antiken Getreidespeisen bis zu gefülltem Gemüse aus osmanischer Zeit —, in einer privaten Küche unter Anleitung einer Kulinarik-Fachkraft aus Kairo.",
    description:
      "Die ägyptische Küche gehört zu den ältesten ununterbrochenen Esstraditionen der Erde, geprägt von der pharaonischen Getreidekultur, koptischen Fastenbräuchen, arabischen Gewürzrouten und der osmanischen Palastküche. Diese private Kochstunde erschließt diese Geschichte mit den eigenen Händen. Sie beginnen mit einem geführten Besuch auf einem Markt im Viertel, wo Ihre Kursleitung erklärt, wie Ägypter tatsächlich einkaufen — was die saisonalen Zeichen bedeuten, welchen Gewürzhändlern man vertraut, warum die eingelegten Gemüse im Laden an der Ecke seit der fatimidischen Zeit auf dieselbe Weise zubereitet werden. Zurück in der Küche bereiten Sie vier Gerichte zu, die für verschiedene Epochen und Einflüsse stehen. Zum Abschluss essen Sie gemeinsam, was Sie gekocht haben, dazu gibt es eine kleine Verkostung ägyptischer Brote und Mezze, die das Gekochte in einen Zusammenhang stellt.",
    duration: "4 Stunden",
    where: "Zentrales Kairo (genaue Adresse wird bei der Buchung bestätigt)",
    bestTime: "",
    highlights: [
      "Geführter Besuch eines Marktes im Viertel mit Ihrer Kursleitung",
      "Vier Gerichte aus pharaonischer, koptischer, arabischer und osmanischer Esstradition",
      "Kochen zum Mitmachen in einer privaten Küche",
      "Gemeinsames Essen Ihrer Gerichte mit ägyptischen Broten und Mezze",
      "Rezeptheft zum Mitnehmen",
    ],
    keyFacts: [
      { label: "Dauer", value: "4 Stunden (einschließlich Marktbesuch und Essen)" },
      { label: "Schwierigkeit", value: "Leicht — keine Kocherfahrung nötig" },
      { label: "Ort", value: "Zentrales Kairo (wird bei der Buchung bestätigt)" },
      { label: "Gruppenart", value: "Privat — höchstens 6 Gäste" },
      { label: "Sprachen", value: "Englisch, Deutsch, Italienisch, Spanisch, Französisch, Russisch, Indonesisch, Malaiisch, Portugiesisch, Arabisch, Mandarin-Chinesisch" },
      { label: "Ernährungshinweise", value: "Vegetarische Optionen verfügbar; bitte bei der Buchung angeben" },
    ],
    included: [
      "Geführter Besuch eines Marktes im Viertel",
      "Alle Zutaten und die gesamte Küchenausstattung",
      "Private Kochanleitung",
      "Gemeinsames Essen und Verkostung ägyptischer Brote und Mezze",
      "Rezeptheft",
      "Abholung und Rückfahrt zum Hotel",
    ],
    excluded: [
      "Getränke über Wasser und ägyptischen Tee hinaus",
      "Trinkgelder",
    ],
    prepare: [
      "Tragen Sie bequeme Kleidung, der ein Spritzer Öl oder Kurkuma nichts ausmacht",
      "Geben Sie Ernährungseinschränkungen oder Allergien bei der Buchung an — das Menü lässt sich anpassen",
      "Der Marktbesuch umfasst einen kurzen Fußweg (15–20 Minuten) über wechselnden Untergrund",
    ],
    goodToKnow: [
      "Der Marktbesuch gilt einem Markt im Viertel, auf dem tatsächlich gearbeitet wird, nicht einem Touristenbasar",
      "Alle Ernährungswünsche werden bei rechtzeitiger Mitteilung berücksichtigt — vegane und glutenfreie Optionen sind verfügbar",
      "Kinder, die gern kochen, sind willkommen; die Kursleitung passt die Aufgaben für jüngere Teilnehmer an",
    ],
    goodFor: [],
    meetingPoint: "Die Kochstunde beginnt auf einem Markt im Viertel; die Hotelabholung ist inklusive.",
    groupSize: "Privat — nur Ihre Reisegruppe. Höchstens 6 Personen, damit es in der Küche bequem bleibt.",
    availability: "Ganzjährig an den meisten Vormittagen und einigen Abenden verfügbar.",
    priceNote: "Preis auf Anfrage. Alle Zutaten, der Marktbesuch und das gemeinsame Essen sind inklusive.",
    faqs: [
      {
        q: "Welche Gerichte kochen wir?",
        a: "Das Menü wechselt mit den Jahreszeiten und wird von der Kursleitung zusammengestellt. Eine typische Kochstunde umfasst Ful Medames (antiker Eintopf aus dicken Bohnen), Mahshi (gefülltes Gemüse nach osmanischer Art), einen von der pharaonischen Küche inspirierten Getreidesalat und Kunafa (die Süßspeise aus Engelshaar-Teig, die Kairo seit fatimidischer Zeit zubereitet). Die genauen Gerichte werden vor der Kochstunde bestätigt.",
      },
      {
        q: "Brauchen wir Kocherfahrung?",
        a: "Überhaupt keine. Die Kochstunde ist für neugierige Reisende gedacht, nicht für ausgebildete Köche. Im Mittelpunkt stehen Esskultur und Geschmack, nicht Technik.",
      },
    ],
    photos: [
      { alt: "Eine Platte mit gefüllten Weinblättern, dazu Zitrone und Petersilie", label: "Ägyptische Küche" },
    ],
  },

  // ===== Luxor Temple by Night =====
  {
    kind: "experience",
    id: "luxor-temple-night",
    localeSlug: "luxor-tempel-bei-nacht",
    metaTitle: "Luxor-Tempel bei Nacht — Sphinxallee | Kemet",
    metaDescription:
      "Privater geführter Abend am Luxor-Tempel und an der restaurierten Sphinxallee — eines der eindrucksvollsten Erlebnisse Ägyptens, nach Einbruch der Dunkelheit.",
    keywords:
      "luxor tempel bei nacht, sphinxallee luxor, luxor abendführung, luxor tempel beleuchtet, luxor private führung, luxor abends",
    name: "Der Luxor-Tempel bei Nacht",
    summary:
      "Gehen Sie nach Einbruch der Dunkelheit die beleuchtete Sphinxallee entlang bis in den Luxor-Tempel — eines der eindrucksvollsten Erlebnisse des ägyptischen Kulturerbes, seit der Restaurierung von 2021 wieder vollständig zugänglich.",
    description:
      "Mit der Fertigstellung der Sphinxallee im Jahr 2021 — einer 2,7 km langen Prozessionsstraße, gesäumt von 1.057 widder- und menschenköpfigen Sphingen, die einst den Luxor-Tempel mit Karnak verband — hat sich der nächtliche Besuch in Luxor von Grund auf verwandelt. Diese Allee nach Einbruch der Dunkelheit entlangzugehen, wobei jede Sphinx und jeder Pylon von unten angestrahlt wird, gehört zu den wahrhaft filmreifsten Erlebnissen auf einer Reise zum ägyptischen Kulturerbe. Auch der Luxor-Tempel selbst wirkt im Licht außerordentlich stimmungsvoll: seine Farben schärfer als bei Tag, seine Dimensionen besser zu erfassen, ohne das Ausbleichen durch die Mittagssonne. Dieses private Erlebnis wird von einem lizenzierten Ägyptologie-Guide geleitet, der die Sphinxallee mit Ihnen abschreitet und die rituellen Prozessionen (das Opet-Fest) erläutert, die sich einst auf dieser Straße bewegten; danach betreten Sie den Tempelbezirk und besuchen seine wichtigsten Räume, die im Pylon errichtete Abu-Haggag-Moschee und die bemerkenswerten römischen Malereien, die in einem zeitweilig als Heiligtum des Kaiserkults genutzten Raum erhalten sind.",
    duration: "2–3 Stunden",
    where: "Luxor-Tempel & Sphinxallee, Luxor",
    bestTime: "",
    highlights: [
      "Die 2,7 km lange Sphinxallee — vollständig restauriert und nach Einbruch der Dunkelheit beleuchtet",
      "Der Luxor-Tempel im Scheinwerferlicht — Farben und Proportionen in ihrer dramatischsten Wirkung",
      "Die im Pylon des Neuen Reiches errichtete Abu-Haggag-Moschee",
      "Römische Malereien des Kaiserkults im innersten Heiligtum des Tempels",
      "Weniger Besucher als bei Tagesbesuchen — ein besinnlicheres Erlebnis",
    ],
    keyFacts: [
      { label: "Dauer", value: "2–3 Stunden" },
      { label: "Schwierigkeit", value: "Leicht" },
      { label: "Beginn", value: "Nach Sonnenuntergang (ca. 19 Uhr, wird bei der Buchung bestätigt)" },
      { label: "Ort", value: "Luxor-Tempel, Luxor" },
      { label: "Gruppenart", value: "Privat — nur Ihre Reisegruppe" },
      { label: "Sprachen", value: "Englisch, Deutsch, Italienisch, Spanisch, Französisch, Russisch, Indonesisch, Malaiisch, Portugiesisch, Arabisch, Mandarin-Chinesisch" },
    ],
    included: [
      "Privater, lizenzierter Ägyptologie-Guide",
      "Eintrittsgebühr für den Luxor-Tempel",
      "Zugang zur Sphinxallee",
      "Abholung und Rückfahrt zum Hotel (Luxor)",
    ],
    excluded: [
      "Karnak-Tempel (eigene Anlage, eigenes Ticket — Besuch bei Tag empfohlen)",
      "Trinkgelder",
      "Abendessen oder Erfrischungen",
    ],
    prepare: [
      "Nehmen Sie eine leichte Schicht mit — Winterabende in Luxor kühlen nach Sonnenuntergang rasch ab",
      "Tragen Sie flache, bequeme Schuhe; die Sphinxallee ist gepflastert, aber lang",
      "Ein Stativ verbessert Aufnahmen des beleuchteten Pylons und der Sphingen bei wenig Licht erheblich",
    ],
    goodToKnow: [
      "Die im Pylon Ramses' II. errichtete Abu-Haggag-Moschee ist ein aktiver Ort des Gebets — respektvolle Kleidung und angemessenes Verhalten werden erwartet",
      "Am ruhigsten ist der Tempel spätabends; in der ersten Stunde nach Sonnenuntergang kann es noch recht belebt sein",
      "Auf dem gesamten Gelände darf uneingeschränkt fotografiert werden",
    ],
    goodFor: [],
    meetingPoint: "Der Rundgang beginnt am nördlichen Ende der Sphinxallee, nahe Karnak. Hotelabholung möglich.",
    groupSize: "Privat — nur Ihre Reisegruppe.",
    availability: "An den meisten Abenden verfügbar. Der Tempel bleibt bis in den Abend geöffnet und wird ab Sonnenuntergang angestrahlt.",
    priceNote: "Preis auf Anfrage. Alle Eintrittsgebühren und der Ägyptologie-Guide inklusive.",
    faqs: [
      {
        q: "Unterscheidet sich das von einem Tagesbesuch im Luxor-Tempel?",
        a: "Erheblich. Die Beleuchtung verändert Farbtemperatur und Tiefe der Reliefs und lässt Details hervortreten, die im direkten Sonnenlicht verblassen. Die Sphinxallee bei Nacht ist ein völlig anderes Erlebnis als bei Tageslicht.",
      },
      {
        q: "Können wir das mit einem Besuch in Karnak verbinden?",
        a: "Karnak ist eine eigene Anlage am anderen Ende der Sphinxallee, etwa 2,7 km nördlich. Nach Einbruch der Dunkelheit öffnet es nur für die Ton-und-Licht-Show; die beste Kombination ist daher Karnak bei Tag und dieser Rundgang am Abend — oder die Show und anschließend dieser Rundgang, was wir arrangieren können.",
      },
    ],
    photos: [
      { alt: "Geschnitzte Tempelsäulen in Luxor, nachts beleuchtet, der Mond zwischen ihnen", label: "Luxor bei Nacht" },
    ],
  },

  // ===== Private Nile Dinner Cruise =====
  {
    kind: "experience",
    id: "private-nile-dinner-cruise",
    localeSlug: "private-nil-dinner-kreuzfahrt-kairo",
    metaTitle: "Private Dinner-Kreuzfahrt auf dem Nil in Kairo | Kemet",
    metaDescription:
      "Privat reservierte Dinner-Fahrt auf dem Nil in Kairo — festes ägyptisches Menü, Skyline in der Dämmerung, Hoteltransfers inklusive. Keine geteilten Decks.",
    keywords:
      "nil dinner kreuzfahrt kairo, private dinnerfahrt nil, abendessen auf dem nil, kairo abendfahrt privat, nilfahrt kairo abends, nil schiff kairo",
    name: "Private Dinner-Kreuzfahrt auf dem Nil",
    summary:
      "Abendessen auf dem Nil in Kairo an Bord eines privat reservierten Schiffs — die Skyline der Hauptstadt gleitet vorüber, während ein langsamer, gut gekochter Abend vergeht.",
    description:
      "Kairo ist eine Flussstadt, die die meisten Besucher nur vom Ufer aus sehen. Dieser Abend ändert das. Ein Dinner-Schiff wird für Ihre Gruppe reserviert — keine geteilten Tische, kein Fließband aus Bühnenshows — und legt ab, wenn das Licht sinkt, die Stadt weicher wird und Minarette, Turm und Brücken nach und nach aufleuchten. Das Abendessen ist ein festes ägyptisches Menü rund um Holzkohlegrill und Mezze statt Buffettheater, serviert in Ihrem Tempo, während das Schiff seine langsame Schleife zwischen der Corniche und der Inselspitze von Zamalek zieht. Live-Oud-Musik lässt sich organisieren, oder der Abend bleibt einfach still — auf dem Wasser sinkt das Dröhnen der Stadt zu einem Summen, was viele Gäste als den eigentlichen Sinn empfinden.",
    duration: "2,5–3 Stunden",
    where: "Nil-Corniche, zentrales Kairo",
    bestTime: "",
    highlights: [
      "Privat reserviertes Schiff — Ihr Tisch ist der einzige, der zählt",
      "Kairos Skyline in der Dämmerung, von der Flussmitte aus",
      "Festes ägyptisches Abendessen mit Holzkohlegrill und Mezze, kein Buffet",
      "Optional Live-Oud-Musik, auf Anfrage organisiert",
      "Abholung und Rückfahrt zum Hotel inklusive",
    ],
    keyFacts: [
      { label: "Dauer", value: "2,5–3 Stunden" },
      { label: "Abfahrt", value: "Nach Sonnenuntergang (Zeit je nach Jahreszeit unterschiedlich)" },
      { label: "Gruppenart", value: "Privat — bis zu 12 Gäste" },
      { label: "Ernährung", value: "Vegetarische Kost und Allergien werden bei Voranmeldung berücksichtigt" },
      { label: "Sprachen", value: "Englisch, Deutsch, Italienisch, Spanisch, Französisch, Russisch, Indonesisch, Malaiisch, Portugiesisch, Arabisch, Mandarin-Chinesisch" },
    ],
    included: [
      "Reservierung des privaten Schiffs",
      "Festes ägyptisches Abendessen mit Softdrinks und Mineralwasser",
      "Private Transfers von und zu Ihrem Hotel in Kairo oder Gizeh",
    ],
    excluded: [
      "Alkoholische Getränke (dürfen mit an Bord gebracht werden; bitte bei der Buchung nachfragen)",
      "Live-Musiker (optional, auf Anfrage organisiert)",
      "Trinkgelder",
    ],
    prepare: [
      "Nehmen Sie eine leichte Schicht mit — der Fahrtwind auf dem Fluss ist spürbar kühler als in den Straßen, selbst im Sommer",
      "Buchen Sie die frühere Abfahrt, wenn Sie mit kleinen Kindern reisen; die spätere Fahrt passt besser zu Paaren",
    ],
    goodToKnow: [
      "Die Route beschreibt eine Schleife auf dem Nilabschnitt im zentralen Kairo; Ein- und Ausstieg erfolgen am selben Anleger",
      "Auch Fahrten im Winter lohnen sich uneingeschränkt — in den kühlen Monaten ist die Skyline am klarsten",
    ],
    goodFor: [],
    meetingPoint: "Einstiegsstelle an der Corniche im zentralen Kairo, wird bei der Buchung bestätigt. Abholung und Rückfahrt zum Hotel inklusive.",
    groupSize: "Schiff für Ihre Gruppe reserviert — von 2 bis zu 12 Gästen.",
    availability: "Fährt ganzjährig jeden Abend; frühere Abfahrten für Familien möglich.",
    priceNote: "Preis auf Anfrage. Reservierung des gesamten Schiffs und festes Abendessen inklusive.",
    faqs: [
      {
        q: "Ist das eines der großen Partyschiffe?",
        a: "Nein — bewusst nicht. Diese bieten gemeinsame Decks, Buffets und verstärkte Shows. Dies hier ist ein kleineres, privat reserviertes Schiff mit festem Menü und gedrosselter Lautstärke. Das Spektakel liefert die Stadt.",
      },
      {
        q: "Können Sie auf Ernährungswünsche eingehen?",
        a: "Ja. Das Menü lässt sich bei rechtzeitiger Mitteilung auf vegetarische und pescetarische Kost sowie auf die meisten Allergien abstimmen — sagen Sie es uns bei der Buchung, nicht erst am Anleger.",
      },
    ],
    photos: [
      { alt: "Der Kairo-Turm und die Skyline am Nil, mit einer Feluke auf dem Wasser — der Fluss, auf dem die Dinnerfahrt unterwegs ist", label: "Nil-Dinnerfahrt" },
    ],
  },

  // ===== Hot-Air Balloon over Luxor =====
  {
    kind: "experience",
    id: "hot-air-balloon-luxor",
    localeSlug: "heissluftballon-luxor",
    metaTitle: "Heißluftballon über Luxor — Fahrt bei Sonnenaufgang | Kemet",
    metaDescription:
      "Ballonfahrt bei Sonnenaufgang über dem Westufer von Luxor — Tal der Könige, Hatschepsut-Tempel und der Nil im Morgengrauen, mit lizenzierten Piloten.",
    keywords:
      "heißluftballon luxor, ballonfahrt luxor, luxor ballon sonnenaufgang, ballonfahrt tal der könige, luxor ballonfahrt buchen, ballon luxor privat",
    name: "Heißluftballon über Luxor",
    summary:
      "Schweben Sie im Morgengrauen über der thebanischen Nekropole — das Tal der Könige, der Tempel der Hatschepsut und der grüne Saum des Nils, so gesehen, wie es nur ein Ballon erlaubt.",
    description:
      "Luxor im Morgengrauen aus einem Ballonkorb gehört zu den prägenden Bildern des Reisens überhaupt, und es verdient diesen Ruf zu Recht: Nirgendwo sonst schweben Sie so lautlos über dreieinhalb Jahrtausenden Monumenten, während über dem Fluss, der sie möglich machte, die Sonne aufgeht. Die Fahrten starten am Westufer in den ruhigen ersten Minuten des Tages, steigen über Zuckerrohrfelder und den Rand der Flussebene auf und enthüllen die in die Felswand gehauenen Terrassen der Hatschepsut, die wabenartig durchlöcherten Hügel des Tals der Könige und, jenseits des Wassers, Karnak im ersten Licht. Die Fahrten dauern 45 bis 60 Minuten, mit lizenzierten Piloten unter der Aufsicht der ägyptischen Zivilluftfahrt, und werden bei ungeeignetem Wind ohne Zögern abgesagt — genau das, was Sie von einem Ballonanbieter erwarten sollten. Wir halten flexible Termine bereit, sodass ein abgesagter Morgen auf den nächsten verschoben wird.",
    duration: "3 Stunden (45–60 Min. Fahrt)",
    where: "Westufer, Luxor",
    bestTime: "",
    highlights: [
      "Das Tal der Könige und der Tempel der Hatschepsut aus der Luft",
      "Sonnenaufgang über dem Nil und den Tempeln des Ostufers",
      "Lizenzierte Piloten unter Aufsicht der Zivilluftfahrt",
      "Buchung mit flexiblem Termin — abgesagte Morgen werden verschoben",
      "Private Korbcharter für Paare und Familien möglich",
    ],
    keyFacts: [
      { label: "Fahrtdauer", value: "45–60 Minuten" },
      { label: "Beginn", value: "Abholung vor Tagesanbruch (Zeit wird am Vorabend bestätigt)" },
      { label: "Saison", value: "Ganzjährig; am verlässlichsten von Oktober bis Mai" },
      { label: "Mindestalter", value: "6 Jahre (wegen der Höhe der Korbwand)" },
      { label: "Gruppenart", value: "Gemeinsamer Korb; private Charter auf Anfrage" },
    ],
    included: [
      "Abholung und Rückfahrt zum Hotel in Luxor",
      "Bootsüberfahrt zum Startplatz am Westufer",
      "Fahrt von 45–60 Minuten mit lizenzierter Flugführung",
      "Kleine Erfrischung vor der Fahrt und Fahrtzertifikat",
    ],
    excluded: [
      "Private Korbcharter (optional, Angebot auf Anfrage)",
      "Trinkgelder",
    ],
    prepare: [
      "Ziehen Sie sich mehrschichtig an — auf dem Startfeld ist es vor Sonnenaufgang kalt, eine Stunde später warm",
      "Flache, geschlossene Schuhe; die Landung ist sanft, aber es bleibt ein Feld",
      "Laden Sie Ihre Kamera am Vorabend auf; dies ist nicht der Morgen, an dem der Akku leer sein sollte",
    ],
    goodToKnow: [
      "Absagen wegen Wind sind ein Merkmal, kein Versagen — fahren Sie nie mit einem Anbieter, der nicht absagt",
      "Buchen Sie früh in Ihrem Luxor-Aufenthalt, damit ein abgesagter Morgen Raum zum Verschieben hat",
    ],
    goodFor: [],
    meetingPoint: "Abholung am Hotel in Luxor vor Tagesanbruch; eine kurze Bootsüberfahrt zum Startfeld am Westufer gehört zum Erlebnis.",
    groupSize: "Die Körbe werden geteilt (unterteilte Abteile); private Korbcharter auf Anfrage möglich.",
    availability: "Fährt ganzjährig an den meisten Morgen, streng wetterabhängig; Oktober bis Mai ist die verlässlichste Zeit. Abgesagte Fahrten werden umgebucht oder erstattet.",
    priceNote: "Preis auf Anfrage; private Korbcharter wird gesondert angeboten.",
    faqs: [
      {
        q: "Ist eine Ballonfahrt in Luxor sicher?",
        a: "Die Fahrten finden unter Aufsicht der ägyptischen Zivilluftfahrtbehörde statt, mit lizenzierten Piloten, nur in Zeitfenstern am Morgen und mit strengen Windgrenzen. Die richtige Antwort auf grenzwertiges Wetter ist die Absage, und die Anbieter, mit denen wir arbeiten, sagen ohne Zögern ab. Buchen Sie früh in Ihrem Aufenthalt, damit Raum für eine Umbuchung bleibt.",
      },
      {
        q: "Können wir einen Korb für uns allein haben?",
        a: "Ja — private Korbcharter sind verfügbar und für Paare und Familien die beste Variante des Erlebnisses. Fragen Sie bei der Buchung danach; die Verfügbarkeit ist knapper als bei gemeinsamen Plätzen.",
      },
    ],
    photos: [
      { alt: "Heißluftballons im ersten Licht über dem Westufer von Luxor", label: "Ballon über Luxor" },
      { alt: "Heißluftballons bei Sonnenaufgang über den Dörfern und grünen Feldern des Westufers von Luxor, aus einem Korb gesehen", label: "Aus dem Korb" },
      { alt: "Ballons als Silhouetten, während die Sonne über Luxor den Horizont überschreitet", label: "Sonnenaufgang" },
      { alt: "Eine Flotte von Heißluftballons steigt im Morgengrauen über dem Niltal und den Tempeln von Luxor auf", label: "Ballonflotte" },
      { alt: "Ballons schweben über dem Westufer und der grünen Nilebene", label: "Über Theben" },
      { alt: "Ballons steigen im ersten Licht über dem Niltal bei Luxor auf", label: "Erstes Licht" },
    ],
  },

  // ===== Grand Egyptian Museum Private Tour =====
  {
    kind: "experience",
    id: "grand-egyptian-museum-private",
    localeSlug: "grand-egyptian-museum-private-fuehrung",
    metaTitle: "Grand Egyptian Museum — Private Führung, Tutanchamun | Kemet",
    metaDescription:
      "Private Führung durch das Grand Egyptian Museum — der vollständige Tutanchamun-Schatz, die Große Treppe und das Sonnenboot des Cheops, abseits des Andrangs.",
    keywords:
      "grand egyptian museum private führung, gem führung, tutanchamun schatz museum, grand egyptian museum tour, sonnenboot cheops, museum gizeh privat",
    name: "Grand Egyptian Museum — Private Führung",
    summary:
      "Das größte archäologische Museum, das je gebaut wurde, privat durchwandert mit einem Ägyptologie-Guide — der vollständige Schatz des Tutanchamun, die Große Treppe und das Sonnenboot.",
    description:
      "Das Grand Egyptian Museum ist zu groß, um es gut auf eigene Faust zu erkunden. Seine Dauerausstellung umfasst über 50.000 Objekte; allein die Tutanchamun-Sammlung — erstmals vollständig ausgestellt seit Carters Öffnung des Grabes 1922 — zählt mehr als 5.000 Stücke. Ohne Struktur treiben Besucher dahin; mit einem erfahrenen Ägyptologie-Guide wird das Gebäude zu einer Erzählung. Diese private Führung durchquert das Museum in der Reihenfolge einer Geschichte: der elf Meter hohe Koloss Ramses' II. im Atrium, die Prozession der Könige auf der Großen Treppe, die zu den im Fenster gerahmten Pyramiden hinaufführt, das Gold des Knabenkönigs in der Abfolge, in der das Grab selbst es enthüllte, und das 44 Meter lange Sonnenboot des Cheops — ein echtes, 4.500 Jahre altes Schiff, gebaut, um einen Pharao durch das Jenseits zu tragen. Der Zeitplan richtet sich nach den Wellen der Reisebusse, und das Tempo bestimmen ganz Sie. Für den allernächsten Blick können die Tutanchamun-Galerien privat für Ihre Gruppe geöffnet werden: anderthalb Stunden mit dem Schatz des Knabenkönigs und keinem anderen Besucher im Raum.",
    duration: "4 Stunden",
    where: "Grand Egyptian Museum, Rand des Plateaus von Gizeh",
    bestTime: "",
    highlights: [
      "Die vollständige Tutanchamun-Sammlung — über 5.000 Objekte endlich beisammen",
      "Die Große Treppe der königlichen Statuen mit den Pyramiden im Fenster",
      "Das 4.500 Jahre alte Sonnenboot des Cheops, 44 Meter aus originalem Zedernholz",
      "Ein erfahrener Ägyptologie-Guide, der fünfzigtausend Objekte zu einer einzigen Geschichte macht",
      "Zeitlich auf die Wellen der Reisebusse abgestimmt; das ganze Jahr über vollständig klimatisiert",
      "Optional: die Tutanchamun-Galerien privat für Ihre Gruppe geöffnet, anderthalb Stunden lang",
    ],
    keyFacts: [
      { label: "Dauer", value: "4 Stunden" },
      { label: "Ort", value: "Rand des Plateaus von Gizeh" },
      { label: "Gruppenart", value: "Privat — nur Ihre Reisegruppe" },
      { label: "Ideal kombinierbar mit", value: "Einem Vormittag auf dem Plateau von Gizeh" },
      { label: "Sprachen", value: "Englisch, Deutsch, Italienisch, Spanisch, Französisch, Russisch, Indonesisch, Malaiisch, Portugiesisch, Arabisch, Mandarin-Chinesisch" },
    ],
    included: [
      "Privater, erfahrener Ägyptologie-Guide",
      "Eintrittsgebühren des Museums (Hauptgalerien und Tutanchamun)",
      "Private klimatisierte Transfers, Kairo & Gizeh",
    ],
    excluded: [
      "Sonderausstellungen, für die gesonderte Tickets nötig sind",
      "Private Öffnung der Tutanchamun-Galerien (optionale Zusatzleistung — anderthalb Stunden, nur Ihre Gruppe)",
      "Mittagessen (die Restaurants des Museums sind gut; Ihr Guide berät Sie)",
      "Trinkgelder",
    ],
    prepare: [
      "Bequeme Schuhe — das Gebäude misst von einem Ende zum anderen fast einen Kilometer",
      "Fotografieren ist in den meisten Galerien ohne Blitz erlaubt; in den Tutanchamun-Räumen ist es eingeschränkt",
    ],
    goodToKnow: [
      "Das GEM und das alte Ägyptische Museum am Tahrir-Platz sind verschiedene Gebäude mit verschiedenen Sammlungen — ein ernsthafter Besuch verdient beide",
      "Der Sommer ist eine ausgezeichnete Zeit für dieses Erlebnis; das Gebäude ist vollständig klimatisiert",
    ],
    goodFor: [],
    meetingPoint: "Abholung vom Hotel in Kairo oder Gizeh inklusive; das Museum liegt neben dem Plateau.",
    groupSize: "Privat — nur Ihre Reisegruppe.",
    availability: "Täglich verfügbar; Termine am Vormittag und am Nachmittag.",
    priceNote: "Preis auf Anfrage. Eintrittsgebühren und Ägyptologie-Guide inklusive.",
    faqs: [
      {
        q: "Was unterscheidet das von einem einfachen Museumsticket?",
        a: "Der Maßstab. Das GEM ist das größte archäologische Museum der Erde, und Besucher ohne Führung sind erfahrungsgemäß schon im ersten Drittel erschöpft. Ein privater Ägyptologie-Guide ordnet die Sammlung zu einer Geschichte, weiß, wo die Besucherströme anschwellen, und lässt vier Stunden kürzer wirken als zwei auf eigene Faust.",
      },
      {
        q: "Sollten wir die Pyramiden und das GEM am selben Tag besuchen?",
        a: "Das ist die natürliche Kombination — das Plateau in der Kühle des Morgens, das Museum am klimatisierten Nachmittag. Unsere Tagestour Gizeh und Grand Egyptian Museum folgt genau diesem Muster; dieses Erlebnis ist die Museumshälfte für sich allein, für alle, die ihr Tempo anders einteilen.",
      },
      {
        q: "Können wir den Schatz des Tutanchamun ohne Menschenmengen sehen?",
        a: "Ja. Als optionale Zusatzleistung werden die Tutanchamun-Galerien anderthalb Stunden lang privat für Ihre Gruppe geöffnet, mit Ihrem Ägyptologie-Guide und ohne weitere Besucher beim Gold des Knabenkönigs. Erwähnen Sie es bei Ihrer Anfrage, damit es für Ihren Termin organisiert werden kann.",
      },
    ],
    photos: [
      { alt: "Das Grand Egyptian Museum am Rand des Plateaus von Gizeh", label: "Grand Egyptian Museum" },
      { alt: "Das Zedern-Sonnenboot des Cheops, in seiner Museumshalle ausgestellt", label: "Sonnenboot" },
    ],
  },

  // ===== Red Sea Private Yacht Day =====
  {
    kind: "experience",
    id: "red-sea-yacht-day",
    localeSlug: "private-yacht-rotes-meer-scharm",
    metaTitle: "Private Yachtcharter Scharm el-Scheich — Ras Mohammed | Kemet",
    metaDescription:
      "Chartern Sie ab Scharm el-Scheich eine private Yacht für einen Tag — Schnorcheln an den Riffen von Ras Mohammed, Mittagessen vor Anker, Route nach Ihrem Wunsch.",
    keywords:
      "yachtcharter sharm el sheikh, private yacht rotes meer, ras mohammed schnorcheln, yacht sharm el sheikh tagestour, bootstour sharm privat, rotes meer yacht",
    name: "Private Yacht-Tour auf dem Roten Meer",
    summary:
      "Ein Tag auf einer privaten Yacht ab Scharm el-Scheich — die Riffe von Ras Mohammed, Mittagessen an Deck vor Anker und eine Route, die ganz Ihre Gruppe bestimmt.",
    description:
      "Der Unterschied zwischen einer Gemeinschaftsfahrt und einer privaten Charter auf dem Roten Meer ist der Unterschied zwischen einem Fahrplan und einem Tag. Ist die Yacht allein für Ihre Gruppe reserviert, folgt die Route den Vorlieben statt einem Programm: lange Schnorchelstopps über den Korallengärten des Ras-Mohammed-Nationalparks, ein Ankerplatz in einer türkisfarbenen Lagune zum Mittagessen vom Grill, ein Umweg, weil das Wasser einfach richtig aussieht. Die Crew kümmert sich um alles — Begleitung im Wasser, Getränke an Deck, jene stille Kompetenz, die einen Tag auf See mühelos macht —, und die Kulisse des Sinai tut den Rest: kahle Wüstenberge, die in Wasser mit zwanzig Metern Sicht als Normalfall abfallen. Es ist der schönste Tag am Roten Meer, im Tempo der Menschen an Bord statt nach der Passagierliste.",
    duration: "Ganztägig (≈ 7 Stunden)",
    where: "Yachthafen von Scharm el-Scheich & Ras-Mohammed-Nationalpark",
    bestTime: "",
    highlights: [
      "Eine ganze Yacht exklusiv für Ihre Gruppe gechartert",
      "Schnorchelstopps an den Korallenwänden und -gärten von Ras Mohammed",
      "Frisches Mittagessen an Deck vom Bordgrill, vor Anker in einer Lagune",
      "Route und Tempo bestimmt Ihre Gruppe, nicht eine gemeinsame Passagierliste",
      "Schnorchelausrüstung, Begleitung und Crew inklusive",
    ],
    keyFacts: [
      { label: "Dauer", value: "Ganztägig (≈ 7 Stunden)" },
      { label: "Abfahrt", value: "Yachthafen von Scharm el-Scheich, ca. 9 Uhr" },
      { label: "Gruppenart", value: "Private Charter — bis zu 10 Gäste" },
      { label: "Meeresschutzgebiet", value: "Ras-Mohammed-Nationalpark" },
      { label: "Wassertemperatur", value: "21–28 °C im Jahresverlauf" },
    ],
    included: [
      "Private Yachtcharter mit kompletter Crew",
      "Schnorchelausrüstung und Begleitung im Wasser",
      "Mittagessen an Deck, Softdrinks und Wasser",
      "Gebühren für das Meeresschutzgebiet Ras Mohammed",
      "Hoteltransfers innerhalb von Scharm el-Scheich",
    ],
    excluded: [
      "Gerätetauchen von der Yacht aus (auf Anfrage mit einem lizenzierten Zentrum organisiert)",
      "Alkoholische Getränke (im Voraus organisierbar)",
      "Trinkgelder für die Crew",
    ],
    prepare: [
      "Sonnenschutz mit hohem Lichtschutzfaktor, riffschonend — die Sonne an Deck samt Spiegelung auf dem Wasser ist kräftig",
      "Bringen Sie trockene Wechselkleidung mit; die Heimfahrt ist windiger als die Hinfahrt",
    ],
    goodToKnow: [
      "Seetage fallen selten aus, doch im Winter kann es Wellengang geben — die Crew sagt es ehrlich",
      "Nichtschwimmer sind willkommen; Schwimmwesten und schattige Plätze an Deck machen den Tag trotzdem schön",
    ],
    goodFor: [],
    meetingPoint: "Yachthafen von Scharm el-Scheich; Hoteltransfers innerhalb von Scharm inklusive.",
    groupSize: "Die ganze Yacht ist für Ihre Gruppe gechartert — bis zu 10 Gäste.",
    availability: "Fährt täglich, sofern die Seebedingungen es zulassen.",
    priceNote: "Preis auf Anfrage. Volle Charter — kein Preis pro Person an Bord.",
    faqs: [
      {
        q: "Können wir Schnorcheln und Tauchen auf derselben Charter verbinden?",
        a: "Ja — ein lizenzierter Tauchguide samt Flaschen kann bei rechtzeitiger Anmeldung an Bord kommen, sodass zertifizierte Taucher abtauchen, während der Rest der Gruppe dasselbe Riff von oben schnorchelnd erkundet.",
      },
      {
        q: "Ist der Tag für Kinder geeignet?",
        a: "Sehr. Die Ankerplätze in den Lagunen sind ruhig und flach, Schnorchelausrüstung in Kindergrößen ist an Bord, und die Crew ist im Umgang mit jungen Schwimmern geübt. Nennen Sie uns bei der Buchung die Alter, damit die Ausrüstung passt.",
      },
    ],
    photos: [
      { alt: "Eine türkisfarbene Lagune trifft bei Ras Mohammed am Roten Meer auf kahle Wüstenkaps", label: "Rotes Meer" },
      { alt: "Die geschwungenen Buchten von Scharm el-Scheich von oben gesehen", label: "Scharm el-Scheich" },
      { alt: "Ein strohgedecktes Strandcamp über dem flachen Korallenwasser bei Scharm el-Scheich", label: "Flache Korallen" },
    ],
  },

  // ===== Guided Red Sea Diving =====
  {
    kind: "experience",
    id: "luxury-red-sea-diving",
    localeSlug: "tauchen-rotes-meer-scharm-el-scheich",
    metaTitle: "Tauchen im Roten Meer, Scharm el-Scheich — Ras Mohammed | Kemet",
    metaDescription:
      "Zwei geführte Bootstauchgänge im Roten Meer mit geprüftem PADI-Zentrum — Riffwände von Ras Mohammed, kleine Gruppen, volle Ausrüstung. Schnupperkurs möglich.",
    keywords:
      "tauchen rotes meer, tauchen sharm el sheikh, ras mohammed tauchen, geführte tauchgänge, padi tauchen sharm, schnuppertauchen rotes meer",
    name: "Geführtes Tauchen im Roten Meer",
    summary:
      "Zwei geführte Bootstauchgänge an den Maßstabsriffen des Sinai mit einem geprüften PADI-Zentrum — kleine Gruppen, entspannte Oberflächenpausen und passende Ausrüstung.",
    description:
      "Im nördlichen Roten Meer hat ein großer Teil der Welt das Tauchen gelernt, und die Gründe gelten fort: Wasser, das nie wirklich kalt wird, eine Sicht, die bei zwanzig Metern beginnt, und Riffwände, die in Schnorcheltiefe ansetzen und im Blau abfallen. Dieses Erlebnis ist ein einziger, ordentlich geführter Tag auf dem Boot — zwei geführte Tauchgänge an Plätzen, die je nach den Bedingungen des Morgens aus den Riffgruppen von Ras Mohammed und der näheren Umgebung von Scharm ausgewählt werden, mit einem lizenzierten PADI-Zentrum, mit dem wir laufend zusammenarbeiten, statt mit demjenigen, der am günstigsten angeboten hat. Die Gruppen sind klein begrenzt, die Oberflächenpausen sind wirklich erholsam, und das Boot nimmt Schnorchelgäste bequem mit, sodass gemischte Gruppen gut zurechtkommen. Zertifizierte Taucher steigen direkt ein; derselbe Tag lässt sich für Anfänger in einen Schnupperkurs (Discover Scuba) mit Einzelbetreuung verwandeln.",
    duration: "Ganztägig (2 Tauchgänge)",
    where: "Riffe von Scharm el-Scheich & Ras Mohammed",
    bestTime: "",
    highlights: [
      "Zwei geführte Tauchgänge an den Riffgruppen von Ras Mohammed / Scharm",
      "Geprüftes PADI-Zentrum — kleine Gruppen, ehrliche Wetterentscheidungen",
      "Weichkorallenwände, Fahnenbarsch-Schwärme, Meeresschildkröten und Napoleon-Lippfische",
      "Umwandlung in einen Schnupperkurs für Anfänger ohne Zertifikat",
      "Schnorchelbegleiter sind auf demselben Boot willkommen",
    ],
    keyFacts: [
      { label: "Dauer", value: "Ganztägig" },
      { label: "Tauchgänge", value: "2 geführte Bootstauchgänge" },
      { label: "Betreuungsschlüssel", value: "Höchstens 4 Taucher pro Guide" },
      { label: "Voraussetzung", value: "Open-Water-Zertifikat (oder Schnupperkurs-Option)" },
      { label: "Wasser", value: "21–28 °C; Sicht von über 20 m üblich" },
    ],
    included: [
      "Zwei geführte Bootstauchgänge mit einem lizenzierten PADI-Zentrum",
      "Komplette Ausrüstungsmiete, Flaschen und Bleigewichte",
      "Gebühren für das Meeresschutzgebiet, soweit anfallend",
      "Mittagessen an Bord und Softdrinks",
      "Hoteltransfers innerhalb von Scharm el-Scheich",
    ],
    excluded: [
      "Tauchversicherung (verpflichtend; bei Bedarf bei der Buchung organisiert)",
      "Nitrox-Füllungen (auf Anfrage verfügbar)",
      "Trinkgelder",
    ],
    prepare: [
      "Bringen Sie Ihre Tauchzertifikatskarte und Ihr Logbuch mit — das Zentrum wird danach fragen, was ein gutes Zeichen ist",
      "Fliegen Sie frühestens 24 Stunden nach Ihrem letzten Tauchgang; wir legen Ihren Reiseplan entsprechend",
    ],
    goodToKnow: [
      "Tauchen im Winter ist ausgezeichnet — ein 5-mm-Anzug wird an Bord mitgeführt, und die Plätze sind ruhiger",
      "Derselbe Tag auf dem Boot lässt sich in einen Schnupperkurs mit Einzelbetreuung umwandeln",
    ],
    goodFor: [],
    meetingPoint: "Steg des Tauchzentrums, Scharm el-Scheich; Hoteltransfers inklusive.",
    groupSize: "Höchstens 4 Taucher pro Guide; privater Guide auf Anfrage möglich.",
    availability: "Tägliche Abfahrten, sofern die Bedingungen es zulassen. Für geführte Tauchgänge ist ein Tauchzertifikat erforderlich.",
    priceNote: "Preis auf Anfrage. Ausrüstung, Boot und Parkgebühren inklusive.",
    faqs: [
      {
        q: "Ich bin noch nie getaucht — kann ich trotzdem mitkommen?",
        a: "Ja, als Schnupperkurs (Discover Scuba Diving): morgens Theorie und Übungen im flachen Wasser, danach ein flacher geführter Riffgang mit einer Tauchlehrkraft im Betreuungsschlüssel von eins zu eins. Ein Zertifikat ist nicht nötig, und er wird auf einen Open-Water-Kurs angerechnet, wenn Sie das Tauchfieber packt.",
      },
      {
        q: "Wie fügt sich das in eine Nilreise ein?",
        a: "Reibungslos — von Luxor nach Scharm el-Scheich sind es etwa eine Flugstunde, auch wenn der Nonstop-Flug nicht täglich geht. Die einzige Regel ist die Flugpause nach dem Tauchen, daher legen wir Tauchtage mindestens einen vollen Tag vor einen Flug.",
      },
    ],
    photos: [
      { alt: "Ein farbenprächtiges Korallenriff im Roten Meer, voller tropischer Fische", label: "Tauchen" },
    ],
  },

  // ===== Sinai Desert Evening & Stargazing =====
  {
    kind: "experience",
    id: "sinai-stargazing-bedouin",
    localeSlug: "sinai-sternenhimmel-beduinen-abend",
    metaTitle: "Sinai: Sterne & Beduinen-Abendessen, Scharm el-Scheich | Kemet",
    metaDescription:
      "Privater Abend bei Beduinen im Sinai — Tee vom Feuer, Abendessen vom Holzkohlegrill und geführte Sternbeobachtung unter einem der dunkelsten Himmel Ägyptens.",
    keywords:
      "sinai sternenhimmel, beduinen abendessen sinai, sterne beobachten wüste, wüstenabend scharm el scheich, sinai nacht ausflug, beduinen erlebnis sinai",
    name: "Abend in der Sinai-Wüste mit Sternenhimmel",
    summary:
      "Weg vom Licht der Hotelanlagen, hinein ins Innere des Sinai — Beduinentee am Feuer, ein Abendessen vom Holzkohlegrill und einer der dunkelsten Himmel, die von einem Flughafen aus erreichbar sind.",
    description:
      "Zwanzig Minuten hinter der letzten Straßenlaterne von Scharm el-Scheich wird der Sinai wieder zu dem, was er schon immer war: kahle Granitberge, vollkommene Stille und ein Nachthimmel, den die meisten Besucher noch nie wirklich gesehen haben. Gastgeber dieses Abends ist eine Beduinenfamilie, deren Verbindung zu dieser Landschaft älter ist als jedes Hotel an der Küste. Er beginnt mit süßem Tee, über dem Feuer im Windschatten einer Felswand gebrüht, führt weiter zu einem Abendessen vom Holzkohlegrill, das man auf Teppichen unter freiem Himmel isst, und endet im Zurücklehnen, bei einer geführten Deutung eines Himmels, der so dicht ist, dass man die Struktur der Milchstraße mit bloßem Auge erkennt — bei guten Bedingungen mit einem Teleskop für die Planeten. Das ist keine inszenierte Folklore. Es ist ein Abendessen in der Wüste mit Menschen, die dort leben, und es justiert die ganze Küste neu.",
    duration: "5 Stunden (abends)",
    where: "Inneres des Sinai, ab Scharm el-Scheich",
    bestTime: "",
    highlights: [
      "Echte Beduinengastfreundschaft — Tee, Feuer und unhastige Gespräche",
      "Abendessen vom Holzkohlegrill auf Teppichen unter freiem Himmel",
      "Ein Himmel, dunkel genug, um die Struktur der Milchstraße ohne Hilfsmittel zu zeigen",
      "Geführte Deutung der Sternbilder; Teleskop, wenn die Bedingungen es erlauben",
      "Privater 4x4-Transfer in die Wüste und zurück",
    ],
    keyFacts: [
      { label: "Dauer", value: "≈ 5 Stunden, vom späten Nachmittag bis in die Nacht" },
      { label: "Gruppenart", value: "Privat — nur Ihre Reisegruppe" },
      { label: "Bester Himmel", value: "Um Neumond" },
      { label: "Gelände", value: "Leicht — Teppiche und niedrige Sitzgelegenheiten im Camp" },
      { label: "Temperatur", value: "Wüstennächte kühlen stark ab — bringen Sie eine warme Schicht mit" },
    ],
    included: [
      "Private 4x4-Transfers ab Ihrem Hotel in Scharm",
      "Abendessen und Tee bei Ihren beduinischen Gastgebern",
      "Geführte Sternbeobachtung",
      "Decken und Sitzgelegenheiten im Camp",
    ],
    excluded: [
      "Alkoholische Getränke (im Camp nicht angeboten)",
      "Trinkgelder für Ihre Gastgeber",
    ],
    prepare: [
      "Nehmen Sie auch im Frühling eine warme Schicht mit — die Wüstentemperaturen fallen nach Sonnenuntergang schnell",
      "Lassen Sie Ihre Augen sich anpassen: Zwanzig Minuten ohne Handybildschirm machen den Himmel doppelt so tief",
    ],
    goodToKnow: [
      "Der Zeitpunkt verschiebt sich mit dem Mondkalender — wir lenken Buchungen in die dunkelsten Zeitfenster",
      "Der Abend passt hervorragend zu einem Tag auf See; Wüste und Riff innerhalb von vierundzwanzig Stunden",
    ],
    goodFor: [],
    meetingPoint: "Abholung am Hotel in Scharm el-Scheich im 4x4 am späten Nachmittag.",
    groupSize: "Privat — nur Ihre Reisegruppe, bewirtet von einer Beduinenfamilie.",
    availability: "Findet an den meisten Abenden statt; um Neumond ist der Himmel am dunkelsten.",
    priceNote: "Preis auf Anfrage. Abendessen, Transfers und Bewirtung inklusive.",
    faqs: [
      {
        q: "Ist das eine inszenierte „Beduinenshow“?",
        a: "Nein — und genau das ist der Punkt. Es gibt keine Bühne mit Bauchtanz und keinen Quad-Konvoi. Es ist ein Abendessen bei einer Familie im Camp, mit dem Himmel als Hauptereignis.",
      },
      {
        q: "Was werden wir am Himmel tatsächlich sehen?",
        a: "In einer klaren, mondlosen Nacht: den Kern der Milchstraße in der passenden Jahreszeit, mehrere Planeten, Satelliten und in jeder Stunde Sternschnuppen. Der Guide deutet den Himmel sowohl in der Sternenkunde der Beduinen als auch in moderner Astronomie, was eine bessere Verbindung ist als jede der beiden allein.",
      },
    ],
    photos: [
      { alt: "Reisende am Lagerfeuer in der offenen Wüste in der Abenddämmerung", label: "Sinai-Abend" },
    ],
  },

  // ===== Pyramids Sound & Light, Privately =====
  {
    kind: "experience",
    id: "giza-sound-light-private",
    localeSlug: "ton-und-licht-show-pyramiden-privat",
    metaTitle: "Ton-und-Licht-Show Pyramiden Gizeh — Privat | Kemet",
    metaDescription:
      "Die Ton-und-Licht-Show von Gizeh, wie sie sein sollte — reservierte Terrassenplätze, private Transfers, optional Abendessen mit Plateaublick.",
    keywords:
      "ton und licht show gizeh, pyramiden ton und licht, sound and light pyramiden, gizeh abends privat, pyramiden nachts, ton und licht kairo",
    name: "Ton und Licht an den Pyramiden — privat",
    summary:
      "Das Plateau von Gizeh bei Nacht — die Sphinx erzählt fünftausend Jahre, während Licht über die Pyramiden spielt, mit privaten Terrassenplätzen und Transfers.",
    description:
      "Nachts leert sich das Plateau von Gizeh, die Wüste kühlt ab, und die Monumente gehören wieder dem Theater. Die Ton-und-Licht-Show ist unverhohlen klassisch — die Sphinx „spricht“, die Pyramiden nehmen nacheinander das Licht auf, und fünf Jahrtausende werden in eine Stunde Erzählung gepresst —, und vom richtigen Platz aus gesehen wirkt sie überraschend gut. Diese Organisation übernimmt, was sonst nicht gelingt: private Transfers, so getaktet, dass Sie dem Andrang am Eingang entgehen, reservierte Terrassenplätze mit freier Sicht statt der allgemeinen Bänke und ein Ägyptologie-Guide, der beim Abendessen davor oder beim Kaffee danach zur Hand ist, um die Poesie der Show von der tatsächlichen Archäologie zu trennen. Sie fügt sich gut in einen Ankunftsabend, an dem der Jetlag etwas Spektakuläres will, das nichts verlangt.",
    duration: "3 Stunden (1 Stunde Show)",
    where: "Plateau von Gizeh, Bereich des Sphinx-Theaters",
    bestTime: "",
    highlights: [
      "Pyramiden und Sphinx, beleuchtet vor der Wüstennacht",
      "Reservierte Terrassenplätze mit ungehinderter Sicht",
      "Private Transfers, auf den Andrang am Eingang abgestimmt",
      "Ideale Unternehmung für den Ankunftsabend — spektakulär, mühelos",
      "Optional Abendessen vor der Show mit Blick auf das Plateau",
    ],
    keyFacts: [
      { label: "Dauer", value: "≈ 3 Stunden von Tür zu Tür; 1 Stunde Show" },
      { label: "Vorstellungszeiten", value: "Abends, je nach Jahreszeit unterschiedlich" },
      { label: "Sprachen", value: "Wechselnder Plan; an den meisten Abenden Englisch" },
      { label: "Gruppenart", value: "Private Transfers & reservierte Plätze" },
      { label: "Geeignet für", value: "Alle Altersgruppen" },
    ],
    included: [
      "Reservierte Terrassenplätze für die Show",
      "Private klimatisierte Transfers, Kairo & Gizeh",
      "Buchungsabwicklung rund um den Sprachenplan",
    ],
    excluded: [
      "Abendessen vor der Show (optional, auf Anfrage organisiert)",
      "Trinkgelder",
    ],
    prepare: [
      "Nehmen Sie im Winter eine zusätzliche Schicht mit — das Plateau ist nachts deutlich kälter als die Stadt",
      "Kommen Sie hungrig, wenn Sie das Abendessen dazubuchen; die Aussicht erledigt die halbe Arbeit",
    ],
    goodToKnow: [
      "Die Show ist Theater, kein Vortrag — genießen Sie sie als Spektakel und heben Sie sich die Archäologie für das Tageslicht auf",
      "Passt natürlich zu einem Besuch des Plateaus oder des Grand Egyptian Museum am nächsten Morgen",
    ],
    goodFor: [],
    meetingPoint: "Abholung vom Hotel in Kairo oder Gizeh inklusive; die Vorstellungszeiten variieren je nach Jahreszeit und Sprache.",
    groupSize: "Private Transfers und reservierte Plätze für Ihre Gruppe.",
    availability: "Läuft jeden Abend mit wechselndem Sprachenplan; an den meisten Abenden englische Vorstellungen.",
    priceNote: "Preis auf Anfrage. Reservierte Plätze und Transfers inklusive.",
    faqs: [
      {
        q: "Lohnt sich die Ton-und-Licht-Show?",
        a: "Als Theater unter den echten Pyramiden ja — besonders an einem Ankunftsabend, wenn die Energie niedrig ist und die Erwartungen Pflege brauchen. Nehmen Sie sie als Spektakel statt als Wissenschaft, und sie verdient ihre Stunde mehr als genug.",
      },
      {
        q: "In welcher Sprache wird erzählt?",
        a: "Der Plan wechselt jeden Abend zwischen Englisch, Französisch, Spanisch, Deutsch und weiteren Sprachen; bei den meisten Vorstellungen stehen Kopfhörer mit Übersetzung zur Verfügung. Wir bestätigen das Sprachprogramm für Ihre Termine vor der Buchung.",
      },
    ],
    photos: [
      { alt: "Die Ton-und-Licht-Show beleuchtet eine Pyramide und die Sphinx in Gizeh", label: "Ton und Licht" },
    ],
  },

  // ===== Nubian Village Experience =====
  {
    kind: "experience",
    id: "nubian-village-experience",
    localeSlug: "nubisches-dorf-assuan-besuch",
    metaTitle: "Nubisches Dorf bei Assuan — Privater Familienbesuch | Kemet",
    metaDescription:
      "Über den Nil in ein bemaltes nubisches Dorf oberhalb von Assuan — ein privater Besuch bei einer Gastgeberfamilie mit Hibiskustee, Henna und lebendiger Kultur.",
    keywords:
      "nubisches dorf assuan, nubisches dorf besuch, nubier assuan familie, nubische kultur erleben, assuan nubien ausflug, hibiskustee nubisch",
    name: "Besuch in einem nubischen Dorf",
    summary:
      "Über den Nil in ein bemaltes nubisches Dorf oberhalb von Assuan — Hibiskustee im Haus einer Familie, Henna, Gespräche über Gewürze und eine Kultur, die älter ist als die Grenze der Pharaonen.",
    description:
      "Nubien ist kein Themenausflug, sondern eine lebendige Kultur mit eigener Sprache, Musik und Architektur, getragen von Gemeinschaften, die ihre Welt rund um Assuan neu aufgebaut haben, nachdem der Nassersee in den 1960er-Jahren ihre Heimat überflutet hatte. Dieser Besuch beruht auf einer dauerhaften Beziehung zu einem Dorf und einer Großfamilie. Sie setzen am späten Nachmittag mit dem Boot über, wenn die bemalten Häuser — satte Blau- und Gelbtöne und geometrisches Weiß — das beste Licht haben, und der Besuch entfaltet sich im Rhythmus des Hauses: Hibiskustee und frisch gebackenes Brot im Familienhof, die Klänge der nubischen Sprache auf den Lippen Ihrer Gastgeber, Henna für alle, die möchten, und ein Blick vom Dach auf den Nil, der sich durch den Granit windet und auf einen Blick erklärt, warum diese Kultur den Fluss nie verlassen hat. Sie sind Gast, nicht Publikum.",
    duration: "3–4 Stunden",
    where: "Nubisches Dorf am Westufer, Assuan",
    bestTime: "",
    highlights: [
      "Eine dauerhafte Beziehung zu einer Familie, kein wechselnder Tourstopp",
      "Das bemalte Dorf im besten Licht des späten Nachmittags",
      "Hibiskustee, frisches Brot und unhastige Gespräche",
      "Blick vom Dach auf die Granitbiegung des Nils",
      "Henna und nubische Musik, wo die Familie sie anbietet, nie inszeniert",
    ],
    keyFacts: [
      { label: "Dauer", value: "3–4 Stunden einschließlich Flussüberfahrt" },
      { label: "Gruppenart", value: "Privat — nur Ihre Reisegruppe" },
      { label: "Beste Zeit", value: "Später Nachmittag" },
      { label: "Gelände", value: "Leichte Dorfgassen; einige sandige Wege" },
      { label: "Sprachen", value: "Englisch, Arabisch (zu Hause Nubisch)" },
    ],
    included: [
      "Privater Boots-Transfer von der Corniche von Assuan, hin und zurück",
      "Bewirtung durch die Familie mit Tee, Brot und Erfrischungen",
      "Guide die ganze Zeit über — kulturelle Einordnung in beide Richtungen",
      "Abholung und Rückfahrt zum Hotel in Assuan",
    ],
    excluded: [
      "Kauf von Kunsthandwerk (nie verpflichtend; direkter Kauf kommt den Herstellern zugute)",
      "Trinkgelder",
    ],
    prepare: [
      "Kleiden Sie sich dezent — Sie betreten ein Familienhaus, keine Veranstaltungsstätte",
      "Fragen Sie vor dem Fotografieren von Menschen; Ihr Guide ebnet den Weg",
    ],
    goodToKnow: [
      "Einkäufe im Dorf gehen direkt an die Herstellenden — die beste Souvenir-Ökonomie in Ägypten",
      "Der Besuch passt natürlich zu einer Feluken-Fahrt; derselbe Nachmittag kann beides enthalten",
    ],
    goodFor: [],
    meetingPoint: "Abfahrt des Bootes an der Corniche von Assuan; Hotelabholung inklusive.",
    groupSize: "Privat — nur Ihre Reisegruppe, bewirtet von einer Familie.",
    availability: "Nachmittags ganzjährig; der späte Termin bietet das beste Licht und die angenehmste Temperatur.",
    priceNote: "Preis auf Anfrage. Boot, Bewirtung und Erfrischungen inklusive.",
    faqs: [
      {
        q: "Ist ein solcher Besuch respektvoll oder aufdringlich?",
        a: "Auf unsere Art ist es Gastfreundschaft, für die sich beide Seiten entschieden haben. Wir arbeiten mit einer Familie auf dauerhafter Grundlage, die Besuche sind privat und werden von den Gastgebern getaktet, und das Geld bleibt direkt im Dorf. Was wir ablehnen, ist die Version mit dem Konvoi aus zwanzig Booten.",
      },
      {
        q: "Welche Verbindung besteht zwischen Nubien und dem alten Ägypten?",
        a: "Eine tiefe und wechselseitige. Nubien war der südliche Nachbar des alten Ägypten, Handelspartner, Rivale und — in der 25. Dynastie — sein Herrscher, als nubische Pharaonen das ganze Land regierten. Der Granit der Steinbrüche von Assuan und ein Großteil des ägyptischen Goldes stammten aus diesem Grenzland.",
      },
    ],
    photos: [
      { alt: "Eine bemalte nubische Terrasse über dem Nil bei Sonnenuntergang in Assuan", label: "Nubisches Dorf" },
    ],
  },

  // ===== Alexandria Heritage Walk =====
  {
    kind: "experience",
    id: "alexandria-heritage-walk",
    localeSlug: "alexandria-stadtrundgang-privat",
    metaTitle: "Alexandria zu Fuß — Private geführte Stadttour | Kemet",
    metaDescription:
      "Privater Rundgang durch Alexandrias Schichten — römisches Amphitheater, Belle-Époque-Zentrum, historische Cafés und die Corniche bis Qaitbay am Ort des Pharos.",
    keywords:
      "alexandria stadtrundgang, alexandria führung privat, alexandria sehenswürdigkeiten zu fuß, römisches amphitheater alexandria, qaitbay zitadelle, alexandria corniche",
    name: "Alexandria zu Fuß",
    summary:
      "Die verlorene Hauptstadt des Mittelmeers zu Fuß — griechisch-römische Überreste, Cafés der Belle Époque und die Corniche, gelesen von einem Guide, der weiß, wo die Schichten zutage treten.",
    description:
      "Alexandria verbirgt seine Vergangenheit vor aller Augen: ein römisches Theater unter einem modernen Platz, die Steine des antiken Leuchtturms, wiederverwendet in einer mamlukischen Festung, die große Bibliothek, wiedergeboren aus Glas und Granit nur wenige hundert Meter von dem Ort, an dem ihre Vorgängerin verbrannte. Dieser Rundgang liest die Stadt Schicht für Schicht. Er führt vom römischen Amphitheater in Kom el-Dikka durch die Straßenzüge der Innenstadt, in denen Belle-Époque-Fassaden noch griechische und italienische Namen tragen, hält gebührend inne — Kaffee und Gebäck in einem der erhaltenen großen Cafés, in denen einst die Dichter und Exilanten der Stadt stritten — und endet an der Corniche, mit der Zitadelle von Qaitbay jenseits des Wassers, die auf dem genauen Grundriss des Pharos steht. Es ist das Verbindungsgewebe, das die Monumentenrundfahrt im Vorbeifahren nie liefert: nicht nur, was Alexandria hat, sondern was Alexandria war.",
    duration: "3 Stunden",
    where: "Innenstadt von Alexandria & die Corniche",
    bestTime: "",
    highlights: [
      "Das römische Amphitheater in Kom el-Dikka — ein Theater unter der modernen Stadt",
      "Fassaden der Belle Époque in der Innenstadt und ihre kosmopolitische Geschichte",
      "Kaffee in einem erhaltenen großen Café des literarischen Alexandria",
      "Die Corniche und Qaitbay am Ort des antiken Pharos",
      "Ein Guide, der die Schichten der Stadt liest, nicht nur ihre Sehenswürdigkeiten",
    ],
    keyFacts: [
      { label: "Dauer", value: "3 Stunden" },
      { label: "Strecke", value: "≈ 3 km im Schlenderschritt" },
      { label: "Gruppenart", value: "Privat — nur Ihre Reisegruppe" },
      { label: "Bestes Licht", value: "Später Nachmittag bis zur Dämmerung" },
      { label: "Sprachen", value: "Englisch, Deutsch, Italienisch, Spanisch, Französisch, Russisch, Indonesisch, Malaiisch, Portugiesisch, Arabisch, Mandarin-Chinesisch" },
    ],
    included: [
      "Privater Guide die ganze Zeit über",
      "Eintritt in das römische Amphitheater",
      "Kaffee und Gebäck in einem historischen Café",
    ],
    excluded: [
      "Anreise ab Kairo (siehe unsere Alexandria-Tagestour und die Reisen mit Übernachtung)",
      "Mittagessen",
      "Trinkgelder",
    ],
    prepare: [
      "Bequeme Schuhe; die Gehwege sind ehrliche Gehwege einer Mittelmeer-Hafenstadt",
      "Eine leichte Jacke außerhalb der Saison — die Meeresbrise beherrscht diese Stadt",
    ],
    goodToKnow: [
      "Der Rundgang fügt sich als kulturelles Rückgrat in unsere Alexandria-Tagestour oder die Übernachtungsreise ein",
      "Sommerabende verwandeln die Corniche — die ganze Stadt kommt heraus, um sie entlangzuspazieren",
    ],
    goodFor: [],
    meetingPoint: "Treffpunkt in der Innenstadt, wird bei der Buchung bestätigt; lässt sich mühelos mit jedem Alexandria-Tag verbinden.",
    groupSize: "Privat — nur Ihre Reisegruppe.",
    availability: "Vormittags und am späten Nachmittag; Sommerabende sind besonders schön.",
    priceNote: "Preis auf Anfrage. Eintritte und Café-Halt inklusive.",
    faqs: [
      {
        q: "Gehören die Katakomben und die Bibliothek dazu?",
        a: "Sie werden bewusst nicht doppelt behandelt — sie bilden den Kern unserer vollständigen Alexandria-Tagestour. Dieser Rundgang gilt der verbindenden Stadt zwischen den großen Sehenswürdigkeiten: dem Theater, den Cafés, den Straßen und der Uferpromenade, die den Monumenten ihren Sinn geben.",
      },
      {
        q: "Kann man Alexandria zu Fuß erkunden?",
        a: "Der historische Kern ja — flach, kompakt und zum Flanieren gemacht, besonders wenn am Nachmittag die Brise aufkommt. Die Corniche gehört zu den großen städtischen Uferpromenaden des Mittelmeers.",
      },
    ],
    photos: [
      { alt: "Der Leuchtturm an der Uferpromenade von Alexandria", label: "Alexandria" },
    ],
  },

  // ===== VIP Airport Meet & Assist =====
  {
    kind: "experience",
    id: "vip-airport-service",
    localeSlug: "vip-flughafen-service-kairo",
    metaTitle: "VIP-Flughafenservice Kairo — Fast-Track | Kemet",
    metaDescription:
      "Empfang an der Flugzeugtür, Fast-Track bei der Einreise, Gepäck bis zum Auto. VIP-Service am Flughafen Kairo, rund um die Uhr an allen Terminals.",
    keywords:
      "vip flughafenservice kairo, flughafen kairo fast track, meet and assist kairo, flughafen kairo abholung, vip service flughafen ägypten, visum flughafen kairo",
    name: "VIP-Flughafenservice (Meet & Assist)",
    summary:
      "Empfang an der Flugzeugtür, Begleitung durch die Fast-Track-Einreise, Gepäck bis zum Wagen — der Flughafen Kairo auf einen Korridor und einen Handschlag reduziert.",
    description:
      "Der Flughafen Kairo International ist ein durchaus funktionierender Flughafen, den man ausgerechnet in den falschen Momenten schlecht erlebt: nach einer Langstrecke über Nacht, vor einem Abflug im Morgengrauen, mit Kindern oder mit vierzig Minuten Umsteigezeit. Dieser Service nimmt ihn aus der Rechnung. Bei der Ankunft werden Sie an der Flugzeugtür oder an der Fluggastbrücke mit Namen empfangen, durch die Fast-Track-Spur der Einreise begleitet, wobei Ihr Visum erledigt wird, und Ihr Gepäck wird abgeholt und zu einem Fahrer gebracht, der bereits wartet. Bei Abflügen läuft es spiegelbildlich: vom Bordstein zur Lounge, wobei Check-in, Sicherheitskontrolle und Ausreise auf wenige Minuten zusammenschrumpfen. Es ist das am wenigsten fotogene Erlebnis, das wir anbieten, und eines der nützlichsten — denn die erste und die letzte Stunde einer Reise geben den Ton für alles dazwischen an.",
    duration: "≈ 1 Stunde pro Richtung",
    where: "Flughafen Kairo International (alle Terminals)",
    bestTime: "",
    highlights: [
      "Empfang im Sicherheitsbereich an der Flugzeugtür, mit Namen",
      "Fast-Track-Spur bei der Einreise, Visum wird für Sie erledigt",
      "Gepäckservice — vom Band bis zum Fahrzeug",
      "Spiegelbildlicher Abflugservice: vom Bordstein in Minuten zur Lounge",
      "Rund um die Uhr an allen Terminals von Kairo International",
    ],
    keyFacts: [
      { label: "Dauer", value: "≈ 1 Stunde pro Richtung" },
      { label: "Abdeckung", value: "Kairo International, alle Terminals" },
      { label: "Verfügbarkeit", value: "Rund um die Uhr, alle Fluggesellschaften" },
      { label: "Gruppenart", value: "Privat — pro Reisegruppe" },
      { label: "Ebenfalls verfügbar", value: "Flughäfen Luxor, Assuan & Scharm auf Anfrage" },
    ],
    included: [
      "Empfang im Sicherheitsbereich am Ankunftsgate oder an der Fluggastbrücke",
      "Fast-Track-Einreise und Abwicklung des Visums",
      "Gepäckservice und Gepäckabfertigung",
      "Begleitung zu Ihrem Fahrer oder zum Anschlussflug",
    ],
    excluded: [
      "Die Visumgebühr selbst (wird abgewickelt, ist aber nicht abgedeckt)",
      "Zugang zur Lounge der Fluggesellschaft (auf Anfrage organisiert)",
      "Trinkgelder",
    ],
    prepare: [
      "Senden Sie uns bei der Buchung Ihre Flugnummer — das Team verfolgt Verspätungen automatisch",
      "Halten Sie Ihren Reisepass und die Visumgebühr griffbereit; alles Weitere wird erledigt",
    ],
    goodToKnow: [
      "Der Service entfaltet sich am besten bei Ankünften nach Langstrecken über Nacht und bei frühen Abflügen",
      "Regionale Flughäfen (Luxor, Assuan, Scharm el-Scheich) bieten denselben Service auf Anfrage",
    ],
    goodFor: [],
    meetingPoint: "Ankunft: Empfang an der Flugzeugtür oder Fluggastbrücke. Abflug: Empfang am Bordstein des Terminals.",
    groupSize: "Privat — Preis pro Reisegruppe, nicht pro Reisendem.",
    availability: "Alle Flüge, alle Terminals, rund um die Uhr bei Voranmeldung.",
    priceNote: "Preis auf Anfrage; automatisch in unseren VIP-Reiseplänen enthalten.",
    faqs: [
      {
        q: "Lohnt sich das wirklich für einen versierten Reisenden?",
        a: "Für einen erfahrenen Alleinreisenden mit Handgepäck vielleicht nicht. Für Familien, erste Besuche, knappe Anschlüsse oder jeden, der nach vierzehn Stunden in der Luft um 3 Uhr nachts landet, wird die schlimmste Stunde der Reise zu einem Nicht-Ereignis — weshalb der Service in alle unsere VIP-Reisepläne eingebaut ist.",
      },
      {
        q: "Verfolgen Sie Flugverspätungen?",
        a: "Ja — das Team überwacht Ihre Flugnummer ab dem Abflug, sodass eine dreistündige Verspätung den Empfang lediglich verschiebt, aber nie ausfallen lässt.",
      },
    ],
    photos: [
      { alt: "Ein Flugzeug an seiner Position auf dem Flughafen Kairo International, die Fluggasttreppe angelegt", label: "Flughafenservice" },
    ],
  },

  // ===== Sufi Tanoura Show =====
  {
    kind: "activity",
    id: "sufi-tanoura-cairo",
    localeSlug: "sufi-tanoura-show-kairo",
    metaTitle: "Sufi-Tanoura-Show in Kairo | Kemet",
    metaDescription:
      "Ein Abend mit ägyptischer Sufi-Musik und Tanoura-Drehtanz im mittelalterlichen Kairo — andächtige Aufführung, keine touristische Bühnenshow.",
    keywords:
      "tanoura show kairo, sufi tanz kairo, derwisch tanz kairo, sufi show kairo, tanoura aufführung, kairo abend kultur",
    name: "Sufi-Tanoura-Show",
    summary:
      "Ein Abend mit ägyptischer Sufi-Musik und Tanoura-Drehtanz im mittelalterlichen Kairo — andächtige Aufführung, keine touristische Bühnenshow.",
    description:
      "Die Tanoura trägt ihren Namen nach dem Rock, und die Form geht auf die Mevlevi-Praxis der Sufis zurück, sich als meditative Übung zu drehen. In Ägypten hat sie ihr eigenes Vokabular entwickelt: mehrere beschwerte Röcke in satten Farben, die beim Drehen angehoben und gefächert werden, begleitet von einem Live-Ensemble aus Ney, Rababa, Oud und Perkussion. Die Aufführungen in den restaurierten osmanischen Gebäuden des mittelalterlichen Kairo sind echt — die Musiker nehmen ihre Kunst ernst, das Repertoire ist andächtig, und das Drehen hält weit länger an, als möglich scheint. Es ist eines der wenigen Abenderlebnisse in Kairo, das wirklich zur Stadt gehört und nicht für Besucher inszeniert wird.",
    duration: "Etwa 1 Stunde Aufführung · 2–3 Stunden mit Transfers",
    where: "Kairo",
    bestTime: "An den meisten Abenden ganzjährig; die Abende im Ramadan sind außergewöhnlich und am stärksten besucht.",
    highlights: [
      "Ein Transfer am frühen Abend ins mittelalterliche Kairo, oft verbunden mit einem vorherigen Spaziergang entlang der Al-Muizz-Straße",
      "Sitzplätze in einem restaurierten Hof oder Saal aus osmanischer Zeit — stimmungsvoll und nicht groß",
      "Ein Live-Ensemble eröffnet das Programm: Ney-Flöte, Rababa, Oud und Handperkussion",
      "Die Tanoura selbst — anhaltendes Drehen mit geschichteten Röcken, beleuchtet und angehoben, während sich der Tanzende dreht",
      "Danach Zeit für Tee und die umliegenden Gassen, die bis tief in die Nacht belebt sind",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Die Plätze sind oft nicht reserviert und die Veranstaltungsorte klein — frühes Eintreffen verbessert Ihren Sitzplatz spürbar",
      "Dezente Kleidung ist angemessen: Dies ist eine andächtige Kunstform in einem historischen religiösen Viertel",
      "Fotografieren ist in der Regel ohne Blitz erlaubt; fragen Sie am Abend nach, da es je nach Ort variiert",
      "Die Aufführung ist auf Arabisch und ohne Erzählung — Ihr Guide kann den Aufbau und das Repertoire erläutern",
      "Programme können rund um religiöse Feiertage kurzfristig wechseln",
    ],
    goodFor: [
      "Reisende, denen Kultur an erster Stelle steht",
      "Familien mit älteren Kindern",
      "Fotografen",
      "Ein Abend nach einem Museumstag",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Was ist der Tanoura-Tanz?",
        a: "Tanoura ist die ägyptische Form des Sufi-Drehtanzes. Der Tanzende dreht sich ununterbrochen in beschwerten, leuchtend bunten Röcken — Tanoura bedeutet Rock —, während ein Live-Ensemble andächtige Musik spielt. Er teilt seinen Ursprung mit der Mevlevi-Tradition der Türkei, hat aber in Kostüm, Musik und Inszenierung einen ausgeprägt ägyptischen Charakter entwickelt.",
      },
      {
        q: "Ist die Sufi-Show in Kairo für Kinder geeignet?",
        a: "Ja, und ältere Kinder haben meist Freude daran — die Farben, das Trommeln und das schiere Spektakel des anhaltenden Drehens fesseln gut. Es ist eine Abendveranstaltung von etwa einer Stunde, daher kann sie sehr kleinen Kindern lang vorkommen.",
      },
      {
        q: "Wo findet die Sufi-Tanoura-Aufführung statt?",
        a: "In restaurierten historischen Gebäuden im mittelalterlichen islamischen Kairo, meist in einem Palast oder einer Wikala aus osmanischer Zeit nahe der Al-Muizz-Straße. Der Rahmen ist ein großer Teil des Erlebnisses, und er verbindet sich natürlich mit einem vorherigen Spaziergang durch die umliegenden Gassen.",
      },
    ],
    photos: [
      { alt: "Ein Sufi-Tanoura-Tänzer dreht sich in einem leuchtend bunten Rock", label: "Tanoura" },
    ],
  },

  // ===== Banana Boat Ride =====
  {
    kind: "activity",
    id: "banana-boat-sharm",
    localeSlug: "bananaboot-fahrt-scharm-el-scheich",
    metaTitle: "Bananenboot-Fahrt in Scharm el-Scheich | Kemet",
    metaDescription:
      "Rasante Fahrt auf dem Schlauchboot über das geschützte, türkisfarbene Flachwasser des Roten Meeres — der einfachste Einstieg für gemischte Altersgruppen.",
    keywords:
      "bananaboot scharm el scheich, bananenboot rotes meer, banana boat fahrt, wassersport scharm el scheich, bananaboot familie, bananenboot ägypten",
    name: "Bananenboot-Fahrt",
    summary:
      "Eine rasante Fahrt auf dem Schlauchboot über das geschützte, türkisfarbene Flachwasser des Roten Meeres — der einfachste Einstieg aufs Wasser für gemischte Altersgruppen.",
    description:
      "Nicht alles am Roten Meer braucht Maske und Einweisung. Das Bananenboot ist genau das, wonach es klingt: ein aufblasbares Boot, das hinter einem Schnellboot über das ruhige Wasser innerhalb der Riffkante gezogen wird, im Tempo, das die Gruppe sich wünscht. Es funktioniert, weil das Wasser bei Scharm warm, klar und geschützt ist und weil es die eine Aktivität an der Küste ist, die eine gemischte Gruppe aus Altersstufen und Schwimmkönnen gemeinsam machen kann. Es ist auch ein guter Auftakt für die erste halbe Stunde eines Bootstags, bevor das Schnorcheln beginnt und das Tempo ruhiger wird.",
    duration: "Etwa 15–20 Minuten auf dem Wasser",
    where: "Scharm el-Scheich",
    bestTime: "April bis November für das wärmste Wasser; morgens ist es am ruhigsten.",
    highlights: [
      "Eine kurze Einweisung und eine passend angelegte Schwimmhilfe vor dem Einsteigen",
      "Einsteigen in das Schlauchboot von einem Steg oder aus dem flachen Wasser am Strand",
      "Eine Fahrt über das ruhige Wasser innerhalb des Riffs, in einem Tempo, das die Bootsführung der Gruppe anpasst",
      "Das Herunterfallen gehört dazu — die Bootsführung dreht sofort um",
      "Direkt zurück aufs Boot oder an den Strand, meist mit Zeit für ein Bad danach",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Schwimmhilfen werden gestellt und von allen getragen, sodass sicheres Schwimmen nicht erforderlich ist",
      "Halten Sie sich mit beiden Händen fest und lassen Sie lose Gegenstände — Sonnenbrille, Handy, Schmuck — am Ufer",
      "Nicht empfohlen in der Schwangerschaft oder bei Rücken-, Nacken- oder Schulterproblemen; die Fahrt ist bewusst holprig",
      "Die Anbieter setzen meist ein Mindestalter von etwa sechs Jahren, mit einem Erwachsenen neben jüngeren Kindern",
      "Nur riffschonende Sonnencreme, und danach erneut auftragen — Sie werden nass",
    ],
    goodFor: [
      "Familien",
      "Freundesgruppen",
      "Nichtschwimmer mit Schwimmweste",
      "Eine leichte erste Aktivität an der Küste",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Muss ich für eine Bananenboot-Fahrt schwimmen können?",
        a: "Nein. Alle tragen eine Schwimmhilfe, die Fahrt bleibt im geschützten flachen Wasser innerhalb der Riffkante, und das Schnellboot dreht sofort um, wenn jemand herunterfällt. Ängstliche oder nicht schwimmende Gäste machen es mühelos mit, und die Bootsführung hält das Tempo sanft, wenn Sie darum bitten.",
      },
      {
        q: "Ist das Bananenboot für Kinder geeignet?",
        a: "Ja, ab etwa sechs Jahren mit einem Erwachsenen daneben, wobei die Anbieter ihr Mindestalter selbst festlegen. Es ist eine der wenigen Aktivitäten am Roten Meer, die für eine ganze Familie gleichzeitig funktioniert, unabhängig vom Schwimmkönnen.",
      },
      {
        q: "Wo findet die Bananenboot-Fahrt statt?",
        a: "In den geschützten Buchten entlang der Küste von Scharm el-Scheich, innerhalb der Riffkante, wo das Wasser flach, ruhig und warm ist. Sie startet meist von einem Hotelsteg oder bildet den Auftakt eines privaten Bootstags.",
      },
    ],
    photos: [
      { alt: "Gäste auf einem Bananenboot über das türkisfarbene Rote Meer", label: "Bananenboot" },
    ],
  },

  // ===== Parasailing =====
  {
    kind: "activity",
    id: "parasailing-sharm",
    localeSlug: "parasailing-scharm-el-scheich",
    metaTitle: "Parasailing in Scharm el-Scheich | Kemet",
    metaDescription:
      "Ein Flug am Schirm über der Riffkante des Roten Meeres bei Scharm el-Scheich — wenige Minuten Stille und die Küste ausgebreitet unter Ihnen.",
    keywords:
      "parasailing scharm el scheich, parasailing rotes meer, fallschirm segeln ägypten, parasailing sharm, wassersport scharm el scheich, parasailing buchen",
    name: "Parasailing",
    summary:
      "Ein Flug am Schirm über der Riffkante des Roten Meeres bei Scharm el-Scheich — wenige Minuten Stille und die Küste ausgebreitet unter Ihnen.",
    description:
      "Parasailing ist der mühelosteste Weg, an dieser Küste Höhe zu gewinnen. Sie hängen im Gurtzeug unter einem Schirm, werden hinter einem Boot gezogen, heben vom Deck ab und steigen auf etwa hundert Meter. Was es in Scharm lohnend macht, ist das, was darunter liegt: Das Wasser ist so klar, dass Sie aus der Höhe die Struktur des Riffs lesen können — das helle Flachwasser, die dunklen Korallenköpfe, die abrupte marineblaue Linie, wo die Wand abfällt —, mit den Bergen des Sinai hinter der Stadt. Die Fahrt selbst ist überraschend leise, sobald Sie oben sind, fern vom Motor.",
    duration: "Etwa 10–15 Minuten in der Luft · 1–2 Stunden einschließlich Bootsfahrt",
    where: "Scharm el-Scheich",
    bestTime: "Vormittags, bevor der Nachmittagswind aufkommt. April bis November für die wärmsten Bedingungen.",
    highlights: [
      "Eine kurze Bootsfahrt vom Hafen oder Steg zum Schleppgebiet",
      "Anlegen des Gurtzeugs und Einweisung in die Start- und Landesignale",
      "Start direkt von der Plattform des Bootes, während die Leine ausläuft — kein Rennen und kein Springen",
      "Zehn bis fünfzehn Minuten in der Höhe, meist allein oder im Tandem geflogen",
      "Mit der Winde zurück auf das Deck, normalerweise mit trockener Landung",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Die Anbieter setzen Gewichtsgrenzen für Einzel- und für Tandemflüge; klären Sie das vorab",
      "Nicht geeignet in der Schwangerschaft oder bei Herz-, Rücken- oder Schulterleiden",
      "Der Wind entscheidet alles: Flüge werden abgesagt oder auf den folgenden Morgen verschoben, wenn er auffrischt",
      "Sichern Sie Hüte, Brillen und Handys oder lassen Sie sie zurück — was herunterfällt, ist verloren",
      "Meist bleiben Sie trocken, doch bitten Sie um eine Landung mit Wasserkontakt, wenn Sie eine möchten",
    ],
    goodFor: [
      "Erstmalige, die Höhe ohne Anstrengung wollen",
      "Paare (Tandemflüge)",
      "Fotografen",
      "Alle, die nicht tauchen möchten",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Ist Parasailing in Scharm el-Scheich sicher?",
        a: "Es zählt zu den kontrollierteren Wasseraktivitäten an der Küste: Start und Landung erfolgen vom Boot selbst per Winde, die Gurtzeuge werden vor jedem Flug geprüft, und der Betrieb ruht ganz, wenn die Windverhältnisse grenzwertig sind. Es gibt kein Springen und kein Rennen — das Boot erledigt die Arbeit.",
      },
      {
        q: "Wie hoch fliegt man beim Parasailing?",
        a: "In der Regel etwa hundert Meter, je nach Leinenlänge und Wind. Das genügt, um die gesamte Riffstruktur unter sich zu lesen und die Berge des Sinai hinter der Küste zu sehen, und die Fahrt ist ruhig, sobald Sie oben sind.",
      },
      {
        q: "Können zwei Personen gemeinsam parasailen?",
        a: "Ja — Tandemflüge sind üblich. Paare bevorzugen sie meist, und die Anbieter beraten zum Gewichtsbereich für Einzel- und Tandemflug, wenn der Flug organisiert wird.",
      },
    ],
    photos: [
      { alt: "Ein Paar beim Parasailing über dem Roten Meer unter einem bunten Schirm", label: "Parasailing" },
    ],
  },

  // ===== Camel Ride at the Pyramids =====
  {
    kind: "activity",
    id: "camel-ride-pyramids",
    localeSlug: "kamelritt-pyramiden-gizeh",
    metaTitle: "Kamelritt an den Pyramiden von Gizeh | Kemet",
    metaDescription:
      "Ein kurzer Kamelritt am Wüstenrand von Gizeh zum Panorama-Aussichtspunkt — der klassische Zugang, so organisiert, dass niemand feilschen muss.",
    keywords:
      "kamelritt pyramiden, kamelreiten gizeh, kamel pyramiden preis, kamelritt gizeh organisiert, pyramiden panorama kamel, kamelritt ägypten",
    name: "Kamelritt an den Pyramiden",
    summary:
      "Ein kurzer Kamelritt am Wüstenrand von Gizeh zum Panorama-Aussichtspunkt — der klassische Zugang, so organisiert, dass niemand feilschen muss.",
    description:
      "Der Kamelritt in Gizeh hat einen Ruf, und er ist weitgehend verdient: Das Plateau gehört zu den hartnäckigeren Orten Ägyptens, was aufdringliche Anbieter betrifft, und ein nicht arrangierter Ritt kann mitten im Sand zu einer Verhandlung werden. Richtig organisiert ist er etwas ganz anderes. Ein kurzer Ritt am Wüstenrand bringt Sie zum Panorama-Aussichtspunkt, an dem sich alle drei Pyramiden aufreihen, auf einer Route, die ruhiger ist als die Straße und seit jeher für die Annäherung an Gizeh genutzt wird. Zwanzig bis dreißig Minuten genügen wirklich — lang genug für den Ausblick und die Fotos, kurz genug, um bequem zu bleiben.",
    duration: "20–30 Minuten Reitzeit, im Rahmen eines halben oder ganzen Tages in Gizeh",
    where: "Gizeh",
    bestTime: "Früher Morgen oder später Nachmittag. Die Mittagszeit im Sommer ganz meiden.",
    highlights: [
      "Treffen mit der Kamelbegleitung an einem vereinbarten Punkt auf dem Plateau, der Preis ist bereits geklärt",
      "Aufsteigen, solange das Kamel liegt — es steht mit den Hinterbeinen zuerst auf, daher lehnen Sie sich zurück, dann nach vorn",
      "Ein Ritt am Wüstenrand, die Pyramiden auf der einen Seite, offener Sand auf der anderen",
      "Zeit am Panoramapunkt, an dem sich alle drei Pyramiden für Fotos aufreihen",
      "Absteigen auf dieselbe Weise, danach Fortsetzung des Besuchs zu Fuß oder mit dem Fahrzeug",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Alles wird im Voraus über uns arrangiert und bezahlt — kein Verhandeln im Sand und kein Druck für Extras",
      "Auf- und Absteigen sind die unsicheren Momente; die Kamelbegleitung hält das Tier die ganze Zeit",
      "Lange Hosen sind weit bequemer als Shorts, und geschlossene Schuhe halten den Sand draußen",
      "Nicht empfohlen in der Schwangerschaft oder bei Rücken- oder Hüftproblemen; eine Pferdekutsche ist eine sanftere Alternative",
      "Wirkt ein Tier mager oder schlecht gehalten, arbeiten wir nicht mit dieser Kamelbegleitung — sagen Sie es Ihrem Guide, und es wird auf der Stelle gewechselt",
    ],
    goodFor: [
      "Erstbesucher",
      "Fotografen",
      "Familien mit älteren Kindern",
      "Das klassische Foto von Gizeh",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Lohnt sich ein Kamelritt an den Pyramiden?",
        a: "Für die meisten Erstbesucher ja — aber halten Sie ihn kurz. Zwanzig bis dreißig Minuten am Wüstenrand zum Panorama-Aussichtspunkt bieten Ihnen die Annäherung und die Fotos, ohne dass der Ritt unbequem wird. Sein Ruf leidet vor allem unter nicht arrangierten Ritten, die in Feilschen ausarten, was bei Vorausbuchung vermieden wird.",
      },
      {
        q: "Was kostet ein Kamelritt in Gizeh?",
        a: "Wenn er über uns arrangiert wird, ist er im Voraus in Ihrer Reiseroute eingepreist, sodass es auf dem Plateau keine Verhandlung und keinen Druck für Zusatzzahlungen unterwegs gibt. Die Preise, die Laufkundschaft im Sand genannt werden, schwanken enorm, was die Ursache der meisten Beschwerden ist.",
      },
      {
        q: "Werden die Kamele an den Pyramiden gut behandelt?",
        a: "Das hängt von der jeweiligen Kamelbegleitung ab, und genau deshalb arbeiten wir mit bestimmten. Wir nutzen keine Anbieter, deren Tiere mager, wund oder schlecht ausgerüstet sind, und wenn Sie mit dem Zustand eines Tieres nicht zufrieden sind, sagen Sie es Ihrem Guide, und es wird sofort gewechselt.",
      },
    ],
    photos: [
      { alt: "Ein geschmücktes Kamel ruht im frühen Licht vor den Pyramiden von Gizeh", label: "Kamel" },
    ],
  },

  // ===== Diving the Red Sea =====
  {
    kind: "activity",
    id: "diving-marsa-alam",
    localeSlug: "tauchen-marsa-alam-rotes-meer",
    metaTitle: "Tauchen im Roten Meer — Marsa Alam | Kemet",
    metaDescription:
      "Riffwand-Tauchen im südlichen Roten Meer bei Marsa Alam — 20–30 Meter Sicht, ganzjährig warmes Wasser und Riffe in besserem Zustand als im Norden.",
    keywords:
      "tauchen marsa alam, tauchen rotes meer süden, marsa alam tauchgänge, elphinstone tauchen, tauchurlaub ägypten, dugong marsa alam",
    name: "Tauchen im Roten Meer",
    summary:
      "Riffwand-Tauchen im südlichen Roten Meer bei Marsa Alam — 20–30 Meter Sicht, ganzjährig warmes Wasser und Riffe in besserem Zustand als im Norden.",
    description:
      "Marsa Alam liegt so weit im Süden, dass das Tauchen einen anderen Charakter annimmt. Die Riffe hier haben weniger Betrieb gesehen als jene vor Scharm und Hurghada, die Wände sind steil und liegen nah am Ufer, und die Plätze sind für größere Lebewesen bekannt: Dugongs in den Seegrasbuchten, Meeresschildkröten fast routinemäßig und, für Taucher mit der nötigen Erfahrung, die vorgelagerten Riffe von Elphinstone und den Fury Shoals. Die Wassertemperatur reicht von etwa 22 °C im Winter bis 28 °C im Spätsommer, und eine Sicht von 20 bis 30 Metern ist eher die Regel als die Ausnahme. Es eignet sich für einen ersten Open-Water-Kurs ebenso wie für eine ernsthafte Tauchwoche, was ungewöhnlich ist.",
    duration: "Ein halber Tag für zwei Bootstauchgänge; eine ganze Woche für eine richtige Serie",
    where: "Marsa Alam",
    bestTime: "Ganzjährig. März–Mai und September–November sind die Zeit mit dem besten Verhältnis aus warmem Wasser und leichtem Wind.",
    highlights: [
      "Abfahrt am Morgen vom Hafen, mit Tauchplätzen, die nach den Bedingungen und Ihrer Zertifizierungsstufe gewählt werden",
      "Ein Briefing pro Tauchgang zu Platzprofil, Ein- und Ausstieg und geplanter Maximaltiefe",
      "In der Regel zwei Tauchgänge mit Oberflächenpause und Mittagessen an Bord dazwischen",
      "Riffwände, Korallengärten und — je nach Platz — Meeresschildkröten, Napoleon-Lippfische und an den vorgelagerten Riffen Riffhaie",
      "Rückkehr zum Hafen am Nachmittag, mit abgezeichneten Logbüchern",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Bringen Sie Ihre Tauchzertifikatskarte und Ihr Logbuch mit; ein Zentrum kann einen Check-Tauchgang verlangen, wenn Sie länger nicht getaucht sind",
      "Fliegen Sie nach Ihrem letzten Tauchgang mindestens 24 Stunden nicht — das prägt, wie das Ende einer Ägyptenreise aufgebaut wird",
      "Nur riffschonende Sonnencreme, und stehen Sie nie auf Korallen und berühren Sie sie nie: Dies sind geschützte Riffe",
      "Nichttaucher können auf demselben Boot mitkommen und an denselben Plätzen schnorcheln — die Wände beginnen nahe der Oberfläche",
      "Elphinstone und die weit vorgelagerten Riffe sind strömungsreich und nur für erfahrene Taucher",
    ],
    goodFor: [
      "Zertifizierte Taucher",
      "Einsteiger mit Schnuppertauchgang oder Kurs",
      "Schnorchler auf demselben Boot",
      "Fotografen",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Ist Marsa Alam gut zum Tauchen?",
        a: "Es gehört zu den besten Orten Ägyptens. Die südlichen Riffe hatten weniger Belastung als jene weiter im Norden, die Wände sind steil und nah, und die Gegend ist bekannt für Dugongs, Meeresschildkröten und — an den vorgelagerten Riffen — größere Hochseefische. Eine Sicht von 20–30 Metern ist die Regel, und das Wasser bleibt das ganze Jahr zwischen etwa 22 und 28 °C.",
      },
      {
        q: "Können Anfänger im Roten Meer tauchen?",
        a: "Ja. Die geschützten Buchten sind ideal für Schnuppertauchgänge und Open-Water-Kurse: warm, klar, zunächst flach und mit sofortigem Riffleben. Anfänger und erfahrene Taucher lassen sich in der Regel am selben Bootstag unterbringen, mit unterschiedlichen Plätzen oder Profilen.",
      },
      {
        q: "Wie lange sollte ich nach dem Tauchen mit dem Fliegen warten?",
        a: "Mindestens 24 Stunden nach Ihrem letzten Tauchgang. Das ist eine feste Vorgabe, keine Empfehlung, und sie wirkt sich auf die Reiseplanung aus — wir legen die Tauchtage stets so, dass dieser Puffer vor jedem Inlands- oder Auslandsflug gegeben ist.",
      },
      {
        q: "Muss ich tauchen, um das Rote Meer zu genießen?",
        a: "Nein. Da die Riffwände sehr nah an der Oberfläche beginnen, sehen Schnorchler vieles von dem, was Taucher sehen. Nichttauchende Mitglieder einer Gruppe kommen regelmäßig auf demselben Boot mit und verbringen den Tag schnorchelnd an denselben Plätzen.",
      },
    ],
    photos: [
      { alt: "Ein Taucher neben einem farbenprächtigen Korallenriff im Roten Meer, voller Fische", label: "Tauchen" },
    ],
  },

  // ===== Quad Biking =====
  {
    kind: "activity",
    id: "quad-biking-desert",
    localeSlug: "quad-tour-wueste-sonnenuntergang",
    metaTitle: "Quad-Tour in der Westlichen Wüste | Kemet",
    metaDescription:
      "Geführte Quad-Tour in die offene Wüste mit Beduinentee und Sonnenuntergang — Dünen, Stille und ein Himmel, der von Gold zu Violett wechselt.",
    keywords:
      "quad tour wüste, quad fahren ägypten, quad sonnenuntergang wüste, quad abenteuer ägypten, wüstentour quad, quad beduinentee",
    name: "Quad-Tour",
    summary:
      "Geführte Quad-Tour in die offene Wüste mit Beduinentee und Sonnenuntergang — Dünen, Stille und ein Himmel, der von Gold zu Violett wechselt.",
    description:
      "In Ägypten beginnt die Wüste abrupt. Wenige Minuten hinter dem letzten Gebäude wird der Boden zu offener Sand- und Kiesebene, und der Lärm verstummt. Eine geführte Quad-Tour ist der schnellste ehrliche Weg hinein: etwa eine Stunde Fahrt im Konvoi über Dünen und Ebenen, hinaus zu einem Punkt, der weit genug entfernt ist, dass in keiner Richtung etwas Menschengemachtes zu sehen ist, dann ein Halt für süßen Tee, während die Sonne untergeht. Was in Erinnerung bleibt, ist nicht das Fahren — es ist das Abstellen der Motoren. Die Stille in der tiefen Wüste ist vollkommen, und das Farbenspiel bei Sonnenuntergang, von Gold über Rosé zu Violett, dauert etwa zwanzig Minuten und ist den Staub wert.",
    duration: "1–2 Stunden Fahrt · etwa 3–4 Stunden mit Transfers und Teepause",
    where: "Westliche Wüste",
    bestTime: "Später Nachmittag bis Sonnenuntergang, Oktober bis April. Die Mittagszeit im Sommer meiden.",
    highlights: [
      "Ein Transfer am späten Nachmittag zum Ausgangspunkt am Wüstenrand",
      "Eine Sicherheitseinweisung und eine kurze Übungsrunde vor der Abfahrt — Erfahrung wird nicht vorausgesetzt",
      "Fahrt im Konvoi hinter einem Guide an der Spitze, mit einer Begleitung am Ende",
      "Ein Halt an einem Beduinencamp oder offenen Aussichtspunkt für süßen Tee, während die Sonne sinkt",
      "Rückfahrt oder Rücktransfer im letzten Licht",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Schutzbrille und eine Kopfbedeckung sind unverzichtbar — der Staub ist das eigentliche Merkmal des Tages; beides wird gestellt",
      "Tragen Sie geschlossene Schuhe, lange Ärmel und Kleidung, der Sie nichts ausmacht",
      "Für alleinfahrende Gäste gelten Mindestaltersgrenzen; jüngere Kinder fahren in der Regel hinter einem Guide mit",
      "Nicht empfohlen in der Schwangerschaft oder bei Rücken-, Handgelenks- oder Schulterproblemen — Quads vibrieren auf unebenem Boden stark",
      "Kontaktlinsen und Flugsand vertragen sich nicht; eine Brille unter der Schutzbrille ist die bessere Wahl",
    ],
    goodFor: [
      "Abenteuerlustige Reisende",
      "Familien mit Teenagern",
      "Fotografen des Sonnenuntergangs",
      "Eine Abwechslung nach Tempeltagen",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Brauche ich Erfahrung, um in der Wüste Quad zu fahren?",
        a: "Nein. Die Fahrzeuge haben Automatik, die Einweisung deckt alles Nötige ab, und Sie fahren vor dem Start eine kurze Übungsrunde. Sie fahren im Konvoi hinter einem Guide an der Spitze, mit einer Begleitung am Ende, im Tempo des langsamsten Fahrers der Gruppe.",
      },
      {
        q: "Was soll ich für eine Quad-Tour in der Wüste anziehen?",
        a: "Geschlossene Schuhe, lange Ärmel und lange Hosen sowie Kleidung, die ruhig staubig werden darf — und Staub ist garantiert. Schutzbrille und Kopfbedeckung werden gestellt und sind wirklich notwendig. Wenn Sie Kontaktlinsen tragen, bringen Sie stattdessen eine Brille mit: Flugsand und Linsen sind eine schlechte Kombination.",
      },
      {
        q: "Ist Quad-Fahren für Kinder geeignet?",
        a: "Ältere Kinder und Teenager fahren meist selbst, vorbehaltlich des Mindestalters des Anbieters für Alleinfahrer; jüngere Kinder fahren hinter einem Guide mit. In der Schwangerschaft oder bei Rücken-, Handgelenks- oder Schulterproblemen ist es nicht geeignet, weil die Fahrt wirklich holprig ist.",
      },
    ],
    photos: [
      { alt: "Eine Reihe roter Quads fährt über offenes Wüstengelände, die Fahrer in Schals und mit Sonnenbrillen", label: "Quad-Tour" },
    ],
  },
];
