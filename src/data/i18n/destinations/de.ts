// ---------------------------------------------------------------------------
// The destination pages in Deutsch — the words only. See ./types.ts for the
// fields and ./build.ts for how they become pages.
// ---------------------------------------------------------------------------
import type { DestText } from "./types";

export const deDestinations: DestText[] = [
  // ===== Cairo =====
  {
    id: "cairo",
    localeSlug: "kairo-sehenswuerdigkeiten",
    metaTitle: "Kairo — Museen, islamisches & koptisches Kairo | Kemet",
    metaDescription:
      "Kairo planen: Ägyptisches Museum, Grand Egyptian Museum, Khan el-Khalili, die Zitadelle und das Tor zu den Pyramiden von Gizeh.",
    keywords:
      "kairo sehenswürdigkeiten, kairo reiseführer, ägyptisches museum kairo, islamisches kairo, koptisches kairo, kairo reise",
    name: "Kairo",
    summary:
      "Ägyptens Hauptstadt am Nil — mittelalterliche islamische und koptische Viertel, das Ägyptische Museum und das Tor nach Gizeh.",
    description:
      "Kairo ist die größte Stadt der arabischen Welt und eine der ältesten durchgehend bewohnten Hauptstädte der Erde. Die Siedlungsschichten reichen hier mehr als zweitausend Jahre zurück: Das römische Babylon, die Festung, die den Nilübergang sicherte, ist im koptischen Viertel noch zu sehen; ihre Türme sind in die Hängende Kirche einbezogen — eines der ältesten christlichen Gotteshäuser Afrikas. Das Kalifat der Fatimiden gründete Kairo 969 n. Chr. als Residenzstadt und stiftete sogleich Moschee und Universität Al-Azhar, heute die älteste ununterbrochen betriebene Universität der Welt. In den folgenden Jahrhunderten wuchs das islamische Kairo zu einer der großen mittelalterlichen Städte der Welt heran: ein dichtes Gefüge aus Moscheen, Madrasas und Kaufmannspalästen rund um den Basar Khan el-Khalili aus dem vierzehnten Jahrhundert, in dem bis heute gehandelt wird. Im heutigen Großraum Kairo leben rund zwanzig Millionen Menschen. Hier steht am Tahrir-Platz das Ägyptische Museum — die weltweit größte Sammlung pharaonischer Altertümer — und am westlichen Stadtrand, neben dem Plateau von Gizeh, das Grand Egyptian Museum: das größte archäologische Museum, das je gebaut wurde, eigens dafür entworfen, den vollständigen Schatz des Tutanchamun in Sichtweite der Pyramiden zu zeigen.",
    stay: "2–3 Tage",
    climate: "Heißes Wüstenklima: sehr heiße, trockene Sommer und milde Winter mit wenig Niederschlag.",
    whyVisit: [
      "Zwei Museen von Weltrang zum alten Ägypten — das historische Ägyptische Museum und das neue Grand Egyptian Museum",
      "Tausend Jahre islamischer und koptischer Architektur in der größten erhaltenen mittelalterlichen Stadt der Welt",
      "Der natürliche Ausgangspunkt für Tagesausflüge nach Gizeh, Sakkara, Memphis, Dahschur und Alexandria",
      "Eine der großen kulinarischen Städte der arabischen Welt — von Koshari-Lokalen bis zum Abendessen auf Dachterrassen am Nil",
    ],
    highlights: [
      "Das Ägyptische Museum am Tahrir-Platz — die weltweit größte Sammlung pharaonischer Altertümer",
      "Das Grand Egyptian Museum — das größte je gebaute archäologische Museum, mit dem vollständigen Schatz des Tutanchamun",
      "Die Saladin-Zitadelle und die Alabastermoschee Muhammad Alis",
      "Der Basar Khan el-Khalili und die mittelalterlichen Gassen der Al-Muizz-Straße",
      "Das koptische Kairo — die Hängende Kirche, die Ben-Esra-Synagoge und die römische Festung Babylon",
    ],
    thingsToKnow: [
      "In Moscheen und Kirchen ist zurückhaltende Kleidung Pflicht — Schultern und Knie bedeckt; nehmen Sie vorsorglich ein Tuch mit.",
      "Freitag ist der Hauptgebetstag; manche Stätten verkürzen dann ihre Öffnungszeiten oder schließen während des Gebets am späten Vormittag.",
      "Der Verkehr in Kairo ist zu fast jeder Stunde dicht — planen Sie zwischen den Stadtvierteln großzügig Zeit ein und buchen Sie Transfers im Voraus.",
      "Kairo lebt später als Nordeuropa: Die Restaurants füllen sich nach 20 Uhr, der Basar ist ab dem mittleren Vormittag am lebhaftesten.",
      "Das Ägyptische Museum am Tahrir und das Grand Egyptian Museum bei Gizeh sind getrennte Häuser, 20 km voneinander entfernt und mit unterschiedlichen Sammlungen — beide sind jeweils einen halben Tag wert.",
    ],
    faqs: [
      {
        q: "Wie viele Tage brauche ich für Kairo?",
        a: "Zwei bis drei Tage decken das Wesentliche ab: ein Tag im Ägyptischen Museum oder im Grand Egyptian Museum, ein Tag für das islamische Kairo und die Zitadelle und ein Tag für Gizeh und Sakkara. Drei Tage sind die bequemere Variante und lassen Raum für das koptische Viertel und einen kulinarischen Spaziergang. Fünf Tage oder mehr erlauben einen Tagesausflug nach Alexandria und ein wirklich entspanntes Tempo.",
      },
      {
        q: "Worin unterscheiden sich das Ägyptische Museum und das Grand Egyptian Museum?",
        a: "Das Ägyptische Museum am Tahrir-Platz ist das hundert Jahre alte Original — dicht, atmosphärisch, und in seinen vollgestellten Sälen liegt der Großteil der pharaonischen Sammlung Ägyptens. Das Grand Egyptian Museum (GEM), im November 2025 offiziell eröffnet, ist der eigens errichtete Neubau am Rand des Plateaus von Gizeh, mit der vollständigen Tutanchamun-Galerie als Herzstück und einer großen Treppe voller Königsstatuen. Zwischen beiden liegen 20 Kilometer. Ein Besuch lohnt sich in beiden; das GEM ist der bessere Einstieg, das alte Museum das tiefere Archiv.",
      },
      {
        q: "Ist Kairo für Touristen sicher?",
        a: "Ja. Die wichtigsten touristischen Gegenden Kairos — der Tahrir-Platz, das islamische Kairo, das koptische Viertel und Gizeh — sind gut bewacht und für internationale Gäste sicher. Lästig sind in der Praxis die hartnäckigen Händler an den Pyramiden und, in geringerem Maß, im Basar. Mit privater Reiseleitung entfällt der größte Teil dieser Reibung. Ansonsten gelten die üblichen Vorsichtsmaßnahmen wie in jeder Großstadt.",
      },
      {
        q: "Wie komme ich vom Zentrum Kairos zu den Pyramiden von Gizeh?",
        a: "Das Plateau von Gizeh liegt rund 25 Kilometer vom Zentrum Kairos entfernt — etwa 45 Minuten im privaten Fahrzeug oder mit Uber. Die Linie 2 der Kairoer Metro fährt bis zur Station Gizeh; von dort legt ein Taxi oder Uber die letzten 5 km zum Plateau in 10–15 Minuten zurück. Bei einer geführten Tour sind alle Transfers organisiert.",
      },
    ],
    photos: [
      { alt: "Die Moschee Muhammad Alis krönt die Saladin-Zitadelle in Kairo in der Abenddämmerung", label: "Kairo" },
      { alt: "Der von Arkaden gesäumte Innenhof der Al-Azhar-Moschee in Kairo", label: "Al-Azhar" },
      { alt: "Die von Laternen erleuchtete Al-Muizz-Straße im mittelalterlichen islamischen Kairo", label: "Al-Muizz-Straße" },
      { alt: "Der Kairo-Turm ragt über dem Nil auf", label: "Kairo-Turm" },
      { alt: "Der Baron-Empain-Palast in Heliopolis, Kairo", label: "Baron-Palast" },
    ],
  },

  // ===== Giza =====
  {
    id: "giza",
    localeSlug: "gizeh-pyramiden-und-sphinx",
    metaTitle: "Pyramiden von Gizeh & Große Sphinx — Reiseführer | Kemet",
    metaDescription:
      "Pyramiden von Gizeh, Große Sphinx und Grand Egyptian Museum: Tickets, beste Zeiten, früher Zugang und alles Wissenswerte — von Ägypten-Spezialisten.",
    keywords:
      "pyramiden von gizeh, gizeh pyramiden besuch, große sphinx, cheops pyramide innen, grand egyptian museum, pyramiden tickets",
    name: "Gizeh",
    summary:
      "Heimat der Großen Pyramide und der Sphinx, auf dem Wüstenplateau am anderen Nilufer gegenüber von Kairo.",
    description:
      "Das Plateau von Gizeh erhebt sich am Rand des Großraums Kairo auf dem Westufer des Nils, eine Kalksteinstufe, an der die Sahara beginnt. Die drei Pyramiden, die hier in der 4. Dynastie Ägyptens errichtet wurden — für die Pharaonen Cheops (um 2560 v. Chr.), seinen Sohn Chephren und seinen Enkel Mykerinos —, sind das einzige erhaltene Weltwunder der Antike. Die Große Pyramide des Cheops war fast viertausend Jahre lang das höchste Bauwerk der Erde, errichtet aus schätzungsweise 2,3 Millionen Steinblöcken von durchschnittlich je 2,5 Tonnen. Die Pyramide des Chephren trägt an der Spitze noch ein Band der ursprünglichen polierten Kalksteinverkleidung; die Große Sphinx, 73 Meter lang und 20 Meter hoch, wurde aus dem gewachsenen Fels des Plateaus gehauen und bewacht den Zugang zum Taltempel des Chephren — einer Totenanlage aus rotem Assuan-Granit und Alabaster, die zu den schönsten erhaltenen Beispielen der Steinbaukunst des Alten Reiches zählt. Das Grand Egyptian Museum, im November 2025 offiziell eröffnet, wurde eigens am Rand des Plateaus gebaut, um die Altertümer von Gizeh zu zeigen und dem vollständigen Schatz des Tutanchamun — über 5.000 Objekte — ein dauerhaftes, eigens entworfenes Zuhause neben den Pyramiden zu geben.",
    stay: "1 Tag",
    climate: "Heißes Wüstenklima; wer früh am Morgen kommt, entgeht Hitze und Andrang gleichermaßen.",
    whyVisit: [
      "Das einzige erhaltene Weltwunder der Antike — die Große Pyramide steht seit 4.500 Jahren",
      "Die Große Sphinx und die Taltempel des Alten Reiches — die feinste Steinbaukunst der 4. Dynastie",
      "Das Grand Egyptian Museum, eigens neben den Pyramiden gebaut, um ihre Schätze aufzunehmen",
      "Sonnenaufgang auf dem Plateau, bevor der Andrang einsetzt — einer der prägenden Reisemomente Ägyptens",
    ],
    highlights: [
      "Die Große Pyramide des Cheops — das einzige erhaltene Weltwunder der Antike",
      "Die Pyramiden des Chephren (mit ursprünglicher Kalksteinverkleidung an der Spitze) und des Mykerinos",
      "Die Große Sphinx und der Taltempel des Chephren — Granit und Alabaster des Alten Reiches",
      "Der Panoramapunkt in der Wüste, an dem sich alle drei Pyramiden aufreihen",
      "Das Grand Egyptian Museum — der vollständige Schatz des Tutanchamun und königliche Statuen",
    ],
    thingsToKnow: [
      "Tickets für das Innere der Pyramiden werden täglich am Plateau verkauft, solange der Vorrat reicht, und ihre Zahl ist streng begrenzt — kommen Sie früh oder bitten Sie Ihren Veranstalter, entsprechend zu planen.",
      "Nehmen Sie Wasser, Sonnenschutz und geschlossene Schuhe mit; das Plateau ist offene Wüste mit sandigem, unebenem Gelände.",
      "Vereinbaren Sie jeden Kamel- oder Pferderitt samt Preis, bevor Sie aufsteigen — die Anbieter arbeiten auf eigene Rechnung und gehören nicht zur offiziellen Stätte.",
      "Das Grand Egyptian Museum erfordert ein eigenes Ticket und füllt für sich allein einen guten halben Tag; planen Sie einen ganzen Tag ein, wenn Sie beides verbinden.",
      "Auf dem Plateau im Freien darf uneingeschränkt fotografiert werden; im Inneren gelten je nach Pyramide unterschiedliche Regeln — Ihr Guide berät Sie.",
    ],
    faqs: [
      {
        q: "Kann man in die Große Pyramide hineingehen?",
        a: "Ja, als optionale Zusatzleistung. Am Plateau wird jeden Tag eine begrenzte Zahl von Tickets für das Innere verkauft; sie berechtigen zum Zugang zu den aufsteigenden Gängen der Großen Pyramide und zur Königskammer. Das Tageskontingent ist fest und rasch vergriffen — kommen Sie früh oder bitten Sie Ihren Reiseveranstalter, das einzuplanen. Auch die Rote Pyramide im nahen Dahschur kann von innen besichtigt werden und ist oft weniger besucht.",
      },
      {
        q: "Wie viel Zeit sollte ich für Gizeh einplanen?",
        a: "Mindestens drei bis vier Stunden für das eigentliche Plateau — die drei Pyramiden, den Panoramapunkt und die Sphinx. Mit dem Grand Egyptian Museum wird daraus ein ganzer Tag. Ist die Zeit knapp, lässt sich das Plateau allein gut an einem halben Tag besuchen; dazu passt ganz natürlich ein eigener Nachmittag im GEM.",
      },
      {
        q: "Welche Tageszeit ist die beste für die Pyramiden von Gizeh?",
        a: "Der frühe Morgen, unmittelbar nach Öffnung des Plateaus (in der Regel um 7 oder 8 Uhr, je nach Jahreszeit). Das Licht schmeichelt jedem Foto, die Temperaturen sind erträglich, und in den ersten zwei Stunden sind deutlich weniger Besucher unterwegs als zur Mittagszeit. Private Besuche mit frühem Zugang vor der öffentlichen Öffnung sind über spezialisierte Veranstalter möglich.",
      },
      {
        q: "Was ist das Grand Egyptian Museum?",
        a: "Das Grand Egyptian Museum (GEM) ist das größte archäologische Museum der Welt, gebaut auf dem Plateau von Gizeh direkt neben den Pyramiden. Zu seiner Dauerausstellung gehören der vollständige Schatz des Tutanchamun — über 5.000 Objekte, erstmals gemeinsam ausgestellt — und eine große Treppe, gesäumt von pharaonischen Statuen. Es ist ein anderes Gebäude als das historische Ägyptische Museum am Tahrir-Platz im Zentrum Kairos.",
      },
    ],
    photos: [
      { alt: "Ein geschmücktes Kamel ruht im frühen Licht vor den Pyramiden von Gizeh", label: "Gizeh" },
      { alt: "Die Große Sphinx von Gizeh, der Morgendämmerung zugewandt", label: "Große Sphinx" },
      { alt: "Die Große Pyramide des Cheops auf dem Plateau von Gizeh", label: "Große Pyramide" },
      { alt: "Kemet-Gäste am Panoramapunkt von Gizeh, hinter ihnen die Pyramiden", label: "Panoramapunkt" },
      { alt: "Das Grand Egyptian Museum neben dem Plateau von Gizeh", label: "Grand Egyptian Museum" },
    ],
  },

  // ===== Luxor =====
  {
    id: "luxor",
    localeSlug: "luxor-sehenswuerdigkeiten",
    metaTitle: "Luxor, Ägypten — Karnak & das Tal der Könige | Kemet",
    metaDescription:
      "Luxor-Reiseführer: Karnak, das Tal der Könige, der Luxor-Tempel bei Nacht und das Westufer — so nutzen Sie zwei Tage in Ägyptens Stadt der Monumente.",
    keywords:
      "luxor sehenswürdigkeiten, luxor reiseführer, tal der könige, karnak tempel, luxor tempel, luxor ballonfahrt",
    name: "Luxor",
    summary:
      "Das Freilichtmuseum des antiken Theben — Karnak, der Luxor-Tempel und die Königsgräber im Tal der Könige.",
    description:
      "Luxor liegt am Ostufer des Nils an der Stelle des antiken Theben, der Hauptstadt Ägyptens auf dem Höhepunkt des Neuen Reiches (um 1550–1070 v. Chr.). Nirgendwo sonst auf der Erde stehen Monumente so dicht beieinander. Am Ostufer erheben sich die Tempel der Stadt der Lebenden: Karnak, die größte je errichtete Sakralanlage — ein Bezirk von 2 Kilometern Ausdehnung aus Tempeln, Säulenhallen und Prozessionsstraßen, an dem aufeinanderfolgende Pharaonen dreizehn Jahrhunderte lang ununterbrochen bauten —, und der Luxor-Tempel am Fluss, mit Karnak verbunden durch die 2,7 Kilometer lange Sphinxallee, gesäumt von 1.057 widderköpfigen Sphingen und seit der Restaurierung der Allee im Jahr 2021 eindrucksvoll beleuchtet. Das Westufer war die antike Stadt der Toten: das Tal der Könige, wo man zweiundsechzig Königsgräber entdeckt hat, in den Kalkstein der thebanischen Berge geschlagen, darunter das unversehrte Grab des Tutanchamun, das Howard Carter 1922 fand; der terrassenförmige Totentempel der Hatschepsut in Deir el-Bahari; und die Memnonkolosse — zwei 18 Meter hohe Quarzitstatuen Amenophis' III., das Einzige, was von Ägyptens einst größtem Totentempel geblieben ist. Luxor ist keine Ruinenstadt, sondern eine lebendige Stadt mit einer halben Million Einwohnern, die neben — und manchmal mitten in — dreieinhalbtausend Jahren Stein leben.",
    stay: "2 Tage",
    climate:
      "Sehr heiße, trockene Sommer und warme, sonnige Winter; Oktober bis März ist die beste Zeit für die Monumente unter freiem Himmel.",
    whyVisit: [
      "Karnak — die größte Sakralanlage der Antike, an der dreizehn Jahrhunderte lang ununterbrochen gebaut wurde",
      "Das Tal der Könige — zweiundsechzig Königsgräber in den thebanischen Bergen, darunter das 1922 unversehrt gefundene Grab des Tutanchamun",
      "Die beleuchtete Sphinxallee bei Nacht — 1.057 Sphingen säumen eine 2,7 km lange, restaurierte Prozessionsstraße",
      "Ballonfahrt über dem Westufer im Morgengrauen — eines der unverwechselbarsten und meistgerühmten Erlebnisse Ägyptens",
    ],
    highlights: [
      "Der Karnak-Tempel und seine große Säulenhalle — 134 Säulen von bis zu 23 Metern Höhe, begonnen unter Sethos I. und vollendet von Ramses II.",
      "Der Luxor-Tempel im Herzen der Stadt, nach Einbruch der Dunkelheit entlang der Sphinxallee beleuchtet",
      "Das Tal der Könige — 62 Königsgräber, darunter die von Tutanchamun, Ramses II. und Sethos I.",
      "Der Totentempel der Hatschepsut, in Terrassen in die thebanischen Felswände von Deir el-Bahari gebaut",
      "Die Memnonkolosse — 18 Meter hohe Statuen Amenophis' III., die über die Ebene des Westufers wachen",
    ],
    thingsToKnow: [
      "Beginnen Sie die Besichtigungen früh — Karnak und das Tal der Könige sind vor 9 Uhr am schönsten, danach steigen Temperaturen und Besucherdichte deutlich.",
      "Das Standardticket für das Tal der Könige umfasst drei Gräber; für die Gräber von Tutanchamun, Sethos I. und Ramses V./VI. werden gesonderte Tickets verkauft — klären Sie mit Ihrem Guide, welche Vorrang haben sollen.",
      "Die Fotoregeln unterscheiden sich von Grab zu Grab — in manchen sind Kameras ganz verboten, in anderen ist das Fotografieren ohne Blitz erlaubt. Ihr Guide informiert Sie jeweils vor dem Betreten.",
      "Der Luxor-Tempel ist nach Einbruch der Dunkelheit geöffnet und beleuchtet; ein nächtlicher Besuch der Sphinxallee gehört zu den eindrucksvollsten Erlebnissen einer Kulturreise durch Ägypten.",
      "Ost- und Westufer sind durch die Luxor-Brücke (mit dem Fahrzeug) oder eine lokale Fähre verbunden — Ihr Guide kümmert sich um die gesamte Logistik.",
    ],
    faqs: [
      {
        q: "Wie viele Tage sollte ich in Luxor verbringen?",
        a: "Zwei volle Tage sind das praktische Minimum. Der erste Tag gilt Karnak und dem Luxor-Tempel am Ostufer. Der zweite gilt dem Tal der Könige, dem Tempel der Hatschepsut und den Memnonkolossen am Westufer. Drei Tage erlauben ein entspannteres Tempo, Zeit im Luxor-Museum und einen Abend an der beleuchteten Allee oder eine Ballonfahrt zum Sonnenaufgang. Die meisten Gäste, die nur einen Tag in Luxor verbringen, wünschen sich im Nachhinein, sie hätten zwei eingeplant.",
      },
      {
        q: "Was ist der Unterschied zwischen Ostufer und Westufer in Luxor?",
        a: "Im antiken Theben war das Ostufer die Stadt der Lebenden — dort wurden die Tempel von Karnak und der Luxor-Tempel für die Verehrung des Amun und die Feier des Königtums erbaut. Das Westufer war die Stadt der Toten: die Nekropole, in der alle königlichen Bestattungen stattfanden. Die alten Ägypter bestatteten ihre Toten im Westen, weil die untergehende Sonne jeden Abend im Westen verschwand — ein Sinnbild für den Übergang ins Jenseits. Diese Unterscheidung gibt einem Besuch in Luxor bis heute seinen Rahmen.",
      },
      {
        q: "Lohnt sich der Besuch von Tutanchamuns Grab im Tal der Könige?",
        a: "Ja, mit einer wichtigen Einschränkung. Das Grab des Tutanchamun (KV62) ist viel kleiner als die Gräber von Ramses II. oder Sethos I. — der gesamte Schatz wurde entnommen und befindet sich heute im Grand Egyptian Museum in Kairo. Geblieben sind die Grabkammer mit ihren bemalten Wänden in außergewöhnlichem Zustand und die Mumie des Königs, noch immer an Ort und Stelle in ihrem äußersten Sarg. Die historische Bedeutung des Grabes ist immens. Seine sichtbaren Ausmaße sind jedoch bescheiden im Vergleich zu den großen ramessidischen Gräbern in der Nähe.",
      },
      {
        q: "Kann man in Luxor eine Ballonfahrt unternehmen?",
        a: "Ja. Ballonfahrten über dem Westufer von Luxor im Morgengrauen zählen zu den meistgerühmten Erlebnissen Ägyptens und sind zwischen Oktober und Mai an den meisten Morgen möglich. Die Fahrten dauern etwa 45 bis 60 Minuten; die Ballons starten am Westufer und treiben über die thebanischen Berge, das Tal der Könige und die Totentempel. Ihr Reiseveranstalter übernimmt die Buchung; ob gefahren wird, hängt von den Windverhältnissen ab.",
      },
    ],
    photos: [
      { alt: "Der terrassenförmige Totentempel der Hatschepsut in Deir el-Bahari am Westufer von Luxor", label: "Luxor" },
      { alt: "Die große Säulenhalle des Karnak-Tempels in Luxor", label: "Karnak" },
      { alt: "Ein ausgemaltes Königsgrab im Tal der Könige", label: "Tal der Könige" },
      { alt: "Heißluftballons im Morgengrauen über dem Westufer von Luxor", label: "Ballonfahrt im Morgengrauen" },
      { alt: "Die Kolonnade des Luxor-Tempels mit ihren Königsstatuen", label: "Luxor-Tempel" },
    ],
  },

  // ===== Aswan =====
  {
    id: "aswan",
    localeSlug: "assuan-sehenswuerdigkeiten",
    metaTitle: "Assuan, Ägypten — Philae, Nil & nubische Kultur | Kemet",
    metaDescription:
      "Assuan-Reiseführer: Tempel von Philae, Unvollendeter Obelisk, Ausflüge nach Abu Simbel, Felukenfahrten und nubische Kultur — von Ägypten-Spezialisten.",
    keywords:
      "assuan sehenswürdigkeiten, assuan reiseführer, philae tempel, unvollendeter obelisk, nubisches dorf assuan, abu simbel ab assuan",
    name: "Assuan",
    summary:
      "Ägyptens ruhige Stadt im Süden am Nil — nubische Kultur, der Hochdamm und der Inseltempel von Philae.",
    description:
      "Assuan ist die südlichste Stadt Ägyptens und liegt dort, wo der Nil auf den Ersten Katarakt trifft — eine Strecke aus Granitstromschnellen und felsübersäten Inseln, die in der Antike die Grenze zwischen Ägypten und Nubien bildete. Viertausend Jahre lang war die Stadt Ägyptens Grenzgarnison und Steinbruch: Der charakteristische rosafarbene Assuan-Granit, der im ganzen Land für Obelisken, Kolossalstatuen und Tempelsäulen verwendet wurde, stammt aus diesen Felsen, und der Unvollendete Obelisk liegt noch immer im gewachsenen Fels des antiken Steinbruchs — mitten in der Arbeit aufgegeben, als sich ein Riss zeigte. Mit 42 Metern und schätzungsweise 1.168 Tonnen wäre er der größte je aufgerichtete Obelisk gewesen. Die Inseltempel von Philae, der Göttin Isis geweiht, waren der letzte Vorposten gelebter pharaonischer Religion und zogen noch im sechsten Jahrhundert n. Chr. Pilger an. Als der Assuan-Hochdamm in den 1960er- und 70er-Jahren den Nassersee entstehen ließ, drohte die Anlage von Philae für immer zu versinken; in einer der ehrgeizigsten Rettungsaktionen der UNESCO wurden die Tempel zwischen 1972 und 1980 Stein für Stein abgetragen und auf dem höher gelegenen Gelände der Insel Agilkia wieder aufgebaut, wo sie heute stehen. Der Damm selbst, 1970 fertiggestellt, beendete den jährlichen Flutzyklus des Nils und erzeugt Strom für ganz Ägypten. Über seine Monumente hinaus ist Assuan das Kernland der lebendigen nubischen Kultur: Die bemalten Dörfer, die Musik und die außergewöhnliche Gastfreundschaft der Nubier geben der Stadt eine Wärme und Farbigkeit, die sie von jedem anderen Ort Ägyptens unterscheidet.",
    stay: "2 Tage",
    climate:
      "Einer der trockensten und sonnigsten Orte der Erde; warme Winter mit 20–25 °C und extrem heiße Sommer mit bis zu 42 °C.",
    whyVisit: [
      "Der Nil von seiner schönsten Seite — Granitkatarakte, Inseltempel und bemalte nubische Dörfer am Westufer",
      "Der Tempel von Philae — Stein für Stein abgetragen und auf einer neuen Insel wieder aufgebaut, um ihn vor dem Nassersee zu retten",
      "Der Ausgangspunkt für Besuche in Abu Simbel und für Nilkreuzfahrten nach Luxor",
      "Lebendige nubische Kultur — Musik, Küche und Gastfreundschaft einer der unverwechselbarsten Flussgemeinschaften Afrikas",
    ],
    highlights: [
      "Der Inseltempel von Philae — von der UNESCO vor dem Nassersee gerettet und auf der Insel Agilkia wieder aufgebaut",
      "Der Assuan-Hochdamm und der Nassersee — die Ingenieurleistung, die das moderne Ägypten umgestaltet hat",
      "Der Unvollendete Obelisk im antiken Granitsteinbruch — der größte Obelisk, der je in Angriff genommen wurde",
      "Nubische Dörfer am Westufer und die Insel Elephantine",
      "Felukenfahrt zwischen den Granitinseln des Ersten Katarakts bei Sonnenuntergang",
    ],
    thingsToKnow: [
      "Abu Simbel ist ein ganzer Tagesausflug nach Süden im privaten Wagen (3,5 Stunden pro Strecke, Abfahrt gegen 4 Uhr, um vor der Hitze anzukommen) oder ein kurzer Flug mit EgyptAir (45 Minuten, eingeschränkter Flugplan).",
      "Philae, die Insel Elephantine und Kitcheners Botanischer Garten sind jeweils mit einer kurzen Motorbootfahrt von der Corniche in Assuan aus zu erreichen.",
      "Assuan ist der übliche Ein- oder Ausschiffungshafen für Nilkreuzfahrten zwischen Assuan und Luxor.",
      "Die Temperaturen in Assuan sind die höchsten in Ägypten; Oktober bis Februar ist das angenehmste Zeitfenster für Besichtigungen im Freien.",
      "Besuche in nubischen Dörfern und auf der Insel Elephantine sind am lohnendsten mit einer lokalen Führung, die den kulturellen Hintergrund vermittelt.",
    ],
    faqs: [
      {
        q: "Wie komme ich von Assuan nach Abu Simbel?",
        a: "Auf der Straße: 3,5 Stunden Fahrt pro Strecke durch offene Wüste, Abfahrt in Assuan um 3–4 Uhr, um vor der Hitze anzukommen. Unterwegs gibt es Polizeikontrollpunkte — führen Sie also Ihren Reisepass mit. Mit dem Flugzeug: EgyptAir bietet eine begrenzte Zahl von Flügen (rund 45 Minuten) ab dem Flughafen Assuan an — eine frühzeitige Buchung ist unerlässlich, die Plätze sind schnell vergeben. Die meisten Gäste besuchen Abu Simbel als Tagesausflug von Assuan aus. Wer in Abu Simbel übernachtet, erlebt die Tempel im ersten Licht, bevor die Tagesgäste eintreffen. Zweimal im Jahr, am 22. Februar und am 22. Oktober, erreicht die aufgehende Sonne das innere Heiligtum und beleuchtet drei seiner vier sitzenden Statuen.",
      },
      {
        q: "Was ist nubische Kultur?",
        a: "Die Nubier sind das alte Volk des Niltal-Korridors zwischen dem Süden Ägyptens und dem Norden des Sudan. Sie haben eine eigene Sprache (die Hauptdialekte sind Nobiin und Kenzi), eine Tradition bemalter Architektur in kräftigen Farben, eine unverwechselbare Musik und Webkunst sowie eine Kultur außergewöhnlicher Gastfreundschaft. Ihre historische Heimat am Nil zwischen Assuan und dem Sudan versank im Nassersee, als der Assuan-Hochdamm fertiggestellt wurde. Viele nubische Familien wurden in Dörfer rund um Assuan umgesiedelt, wo ihre kulturellen Traditionen fortleben und Gäste sie bei geführten Dorfbesuchen kennenlernen können.",
      },
      {
        q: "Lohnt sich Assuan für sich allein — oder vor allem als Ausgangspunkt für Abu Simbel?",
        a: "Beides. Assuan hat für sich genommen viel zu bieten: Der Tempel von Philae ist eines der schönsten Inselheiligtümer Ägyptens; der Unvollendete Obelisk in seinem antiken Steinbruch gehört zu den unmittelbarsten und lehrreichsten Monumenten des Landes; und eine Feluke zwischen den Granitinseln des Ersten Katarakts bei Sonnenuntergang zählt zu den friedlichsten Erlebnissen einer Ägyptenreise. Die meisten Gäste bleiben zwei Nächte in Assuan — eine für die Monumente der Stadt und den Besuch eines nubischen Dorfes, eine für den Ausflug nach Abu Simbel.",
      },
      {
        q: "Beginnen Nilkreuzfahrten in Assuan?",
        a: "Ja. Die klassische Nilkreuzfahrt zwischen Assuan und Luxor führt rund 200 Kilometer flussabwärts nach Norden und hält über drei bis vier Nächte in Kom Ombo und Edfu. Kreuzfahrten starten in beiden Richtungen — von Assuan nach Norden ist die häufigere, weil sich so vor der Einschiffung der Hochdamm und Philae besuchen lassen. Ihr Reiseveranstalter bestätigt Richtung und Fahrplan passend zu Ihrer gesamten Reiseroute.",
      },
    ],
    photos: [
      { alt: "Der Inseltempel von Philae erhebt sich bei Assuan aus dem Nil", label: "Assuan" },
      { alt: "Bunt bemalte nubische Boote am Nilufer in Assuan", label: "Nubische Boote" },
      { alt: "Eine Feluke unter Segeln auf dem Nil bei Assuan", label: "Feluke" },
      { alt: "Der Assuan-Hochdamm, der den Nassersee aufstaut", label: "Hochdamm" },
      { alt: "Die Kolosse des Großen Tempels Ramses' II. in Abu Simbel", label: "Abu Simbel" },
    ],
  },

  // ===== Alexandria =====
  {
    id: "alexandria",
    localeSlug: "alexandria-sehenswuerdigkeiten",
    metaTitle: "Alexandria — Katakomben, Qaitbay & die Bibliothek | Kemet",
    metaDescription:
      "Alexandria-Reiseführer: die Katakomben von Kom esch-Schukafa, die Zitadelle von Qaitbay am Ort des Pharos und die Bibliotheca Alexandrina.",
    keywords:
      "alexandria sehenswürdigkeiten, alexandria ägypten reiseführer, bibliotheca alexandrina, zitadelle qaitbay, katakomben kom esch schukafa, alexandria ab kairo",
    name: "Alexandria",
    summary:
      "Ägyptens Mittelmeerhafen, gegründet von Alexander dem Großen — griechisch-römische Ruinen und die wiedergeborene Bibliothek.",
    description:
      "Alexandria wurde 331 v. Chr. von Alexander dem Großen auf einem schmalen Landstreifen zwischen dem Mittelmeer und dem Mareotis-See gegründet — gewählt wegen seines natürlichen Hafens und seiner Lage als Drehpunkt zwischen Afrika und der griechischen Welt. Drei Jahrhunderte lang war es unter der Dynastie der Ptolemäer die führende Stadt des Geistes in der antiken Welt — Heimat der großen Bibliothek, um 295 v. Chr. gegründet, die von jedem existierenden Text eine Abschrift zusammentragen wollte; des Museions, einer frühen Gelehrtenakademie; und des Leuchtturms von Pharos, um 280 v. Chr. erbaut und eines der sieben Weltwunder der Antike, der mehr als tausend Jahre lang Schiffe in den Hafen leitete, bevor ihn Erdbeben im vierzehnten Jahrhundert n. Chr. zum Einsturz brachten. Die vielschichtige Vergangenheit der Stadt zeigt sich in ihren erhaltenen Monumenten. Die Katakomben von Kom esch-Schukafa, eine Nekropole aus römischer Zeit (zweites Jahrhundert n. Chr.), entdeckt im Jahr 1900, als ein Esel durch den Eingang brach, führen drei Ebenen tief unter die Erde und verbinden ägyptische, griechische und römische Grabmotive auf eine in der antiken Welt einzigartige Weise. Die Pompeiussäule — tatsächlich 297 n. Chr. zu Ehren des Kaisers Diokletian errichtet — ist eine 27 Meter hohe monolithische Säule inmitten der Ruinen des antiken Serapeums, die größte römische Säule außerhalb Konstantinopels. Die Zitadelle von Qaitbay, 1477 n. Chr. vom Mamlukensultan mit Steinen des zerstörten Pharos erbaut, blickt genau von der Stelle aufs Meer, an der der antike Leuchtturm stand. Das heutige Alexandria ist eine geschäftige Hafenstadt am Mittelmeer mit über fünf Millionen Einwohnern — kühler und luftiger als das Niltal, mit einer 20 Kilometer langen Corniche am Meer. Die Bibliotheca Alexandrina, 2002 eröffnet, lässt den Geist der antiken Bibliothek bewusst wieder aufleben: ein gewaltiger Rundbau aus grauem Granit und Glas, der über zwei Millionen Bände fasst.",
    stay: "1–2 Tage",
    climate:
      "Mildes Mittelmeerklima mit warmen Sommern von durchschnittlich 28–30 °C, kühlen, feuchten Wintern und ganzjährig einer Brise vom Meer.",
    whyVisit: [
      "Die Katakomben von Kom esch-Schukafa — eines der ungewöhnlichsten und fesselndsten unterirdischen Monumente der Antike",
      "Die Zitadelle von Qaitbay genau am Ort des antiken Leuchtturms von Pharos, eines der sieben Weltwunder der Antike",
      "Die Bibliotheca Alexandrina — die zeitgenössische Erbin der berühmtesten Bibliothek der Welt",
      "Das mediterrane Ägypten — ein kühlerer, vom Meer und vom Geistesleben geprägter Gegenpol zur Hitze und Dichte des Niltals",
    ],
    highlights: [
      "Die Katakomben von Kom esch-Schukafa — eine römische Nekropole auf drei Ebenen, die ägyptische, griechische und römische Kunst verbindet",
      "Die Pompeiussäule — die größte antike monolithische Säule außerhalb Konstantinopels, in den Ruinen des Serapeums",
      "Die Zitadelle von Qaitbay, erbaut genau am Ort des Leuchtturms von Pharos",
      "Die Bibliotheca Alexandrina — die zeitgenössische Erbin der antiken Bibliothek, 2002 eröffnet",
      "Alexandrias 20 Kilometer lange Corniche am Mittelmeer und ihre gerühmte Fisch- und Meeresfrüchteküche direkt am Wasser",
    ],
    thingsToKnow: [
      "Alexandria liegt 2,5 bis 3 Fahrstunden pro Strecke von Kairo entfernt, über die Wüstenstraße — ein langer, aber lohnender Ganztagesausflug; eine Übernachtung erlaubt ein angenehmeres Tempo.",
      "Die Meeresbrise macht Alexandria spürbar kühler als das Niltal — im Sommer ein echter Vorteil, an Winterabenden ein Grund für eine leichte zusätzliche Schicht.",
      "Fisch und Meeresfrüchte, nach Gewicht bestellt und in den Restaurants an der Corniche frisch gegrillt oder frittiert, sind die Spezialität der Stadt.",
      "In den Katakomben von Kom esch-Schukafa führt eine Wendeltreppe drei Ebenen tief unter die Erde — für Gäste mit eingeschränkter Mobilität nicht geeignet.",
      "Das Griechisch-Römische Museum ist seit Oktober 2023 nach langer Restaurierung wieder geöffnet — ein Besuch lohnt sich.",
    ],
    faqs: [
      {
        q: "Lohnt sich Alexandria als Tagesausflug von Kairo?",
        a: "Ja — es ist der lohnendste Tagesausflug von Kairo aus. Die Fahrt (2,5 bis 3 Stunden pro Strecke) ist lang, weshalb der Tag früh beginnt, doch die Verbindung aus Katakomben, Zitadelle, Bibliotheca Alexandrina und einem Fischessen am Meer ist die Mühe wirklich wert. Eine Übernachtung in Alexandria erlaubt ein entspannteres Tempo, Zeit an der Corniche am Abend und einen Zugang zur ganz eigenen Atmosphäre der Stadt.",
      },
      {
        q: "Gibt es die antike Bibliothek von Alexandria noch?",
        a: "Nein. Die ursprüngliche Bibliothek von Alexandria ging über mehrere Jahrhunderte hinweg in Etappen verloren — durch Feuer, Konflikte und allmähliche Vernachlässigung, nicht in einem einzigen dramatischen Ereignis. Die 2002 eröffnete Bibliotheca Alexandrina ist eine moderne Einrichtung, errichtet als bewusste kulturelle Hommage an die antike Bibliothek, ungefähr an deren ursprünglichem Standort. Sie ist ein Neubau, keine Wiederherstellung des Originals, birgt aber über zwei Millionen Bände und gehört zu den architektonisch eindrucksvollsten Gebäuden Ägyptens.",
      },
      {
        q: "Wie unterscheidet sich Alexandria vom übrigen Ägypten?",
        a: "Alexandria fühlt sich mediterran an, nicht wie das Niltal. Das Klima ist kühler, das Tempo langsamer, die Küche dreht sich um Fisch und Meeresfrüchte, und der historische Charakter ist griechisch-römisch statt pharaonisch. Es gibt keine Pyramiden und keine Tempelanlagen — der Reiz liegt in einer vielschichtigen, weltoffenen Geschichte (hellenistisch, römisch, mittelalterlich-arabisch), in der deutlich europäisch beeinflussten Architektur und in dem Vergnügen, am Meer zu sein. Viele Gäste empfinden die Stadt nach Kairo und Luxor als erfrischenden Tonartwechsel.",
      },
      {
        q: "Was ist die Pompeiussäule, und warum ist sie nach Pompeius benannt?",
        a: "Die Pompeiussäule ist eine 27 Meter hohe römische Triumphsäule inmitten der Ruinen des antiken Serapeums in Alexandria — die größte antike monolithische Säule außerhalb Konstantinopels. Trotz des volkstümlichen Namens hat sie nichts mit dem römischen Feldherrn Pompeius zu tun: Sie wurde 297 n. Chr. zu Ehren des Kaisers Diokletian errichtet. Die falsche Benennung geht auf mittelalterliche europäische Reisende zurück, die sie irrtümlich mit dem Tod des Pompeius in Ägypten in Verbindung brachten. Die Säule ist aus einem einzigen Stück rosafarbenem Assuan-Granit gehauen.",
      },
    ],
    photos: [
      { alt: "Die Zitadelle von Qaitbay aus dem 15. Jahrhundert an der Küste von Alexandria, erbaut am Ort des Leuchtturms von Pharos", label: "Alexandria" },
      { alt: "Die Scheibe der Bibliotheca Alexandrina am Wasser", label: "Bibliotheca" },
      { alt: "Die Pompeiussäule erhebt sich aus den Ruinen des Serapeums", label: "Pompeiussäule" },
      { alt: "Das römische Amphitheater von Kom el-Dikka in Alexandria", label: "Römisches Amphitheater" },
      { alt: "Die unterirdischen Katakomben von Kom esch-Schukafa", label: "Katakomben" },
    ],
  },

  // ===== Hurghada =====
  {
    id: "hurghada",
    localeSlug: "hurghada-rotes-meer",
    metaTitle: "Hurghada — Riffe, Inseln & Resorts am Roten Meer | Kemet",
    metaDescription:
      "Hurghada-Reiseführer: die Riffe der Giftun-Inseln, private Bootstage, das alte Hafenviertel — und wie sich das Rote Meer mit Luxor oder dem Nil verbinden lässt.",
    keywords:
      "hurghada urlaub, hurghada rotes meer, giftun insel schnorcheln, hurghada luxor kombinieren, hurghada mit kindern",
    name: "Hurghada",
    summary:
      "Ägyptens wichtigste Resortküste am Roten Meer — warmes, klares Wasser über Inselriffen und die unkomplizierteste Strandergänzung zu einer Luxor- oder Nilreise.",
    description:
      "Hurghada ist von einem Fischerdorf zum Arbeitspferd der ägyptischen Rotmeerküste herangewachsen: ein langes Band aus Resorts, Marinas und Tauchbasen vor einem von Lagunen durchsetzten Meer. Sein eigentlicher Trumpf ist die Lage — die vorgelagerten Giftun-Inseln und die Riffbänke um sie herum liegen in flachem, geschütztem Wasser, das Schnorchlern und Tauchanfängern ebenso entgegenkommt wie einem privaten Bootstag, und Luxor ist nur vier Stunden Straßentransfer entfernt, was Hurghada zum natürlichen Strandausklang einer Nilreise macht. Die Stadt selbst hat zwei Gesichter: das alte Hafenviertel El Dahar mit Markt und Moschee und im Süden die gepflegte Marina-Promenade, wo sich der Abend abspielt.",
    stay: "3–4 Tage",
    climate:
      "Praktisch ganzjährig sonnig; Meer 22–29 °C. Lufttemperatur 20–25 °C im Winter, 35–40 °C im Hochsommer, gekühlt von einer nahezu beständigen Nordbrise.",
    whyVisit: [
      "Die unkomplizierteste Rotmeer-Ergänzung zu einer klassischen Nilreise",
      "Flache, geschützte Riffe, die sich auch für Kinder und unsichere Schwimmer eignen",
      "Ganzjährig warmes Meer und nahezu garantierter Sonnenschein",
    ],
    highlights: [
      "Die Giftun-Inseln — weiße Sandbänke und Hausriffe, eine kurze Bootsfahrt von der Marina entfernt",
      "Schnorcheln und Tauchen an sanften, geschützten Riffen für jedes Niveau",
      "Ein privater Bootstag: Riffe, Mittagessen auf einer Sandbank, mit etwas Glück Delfine",
      "Der alte Markt von El Dahar und die El-Mina-Moschee am Meer",
      "Die Marina-Promenade in der Abenddämmerung — Abendessen mit Blick auf die Boote",
    ],
    thingsToKnow: [
      "Der Flughafen Hurghada wird aus weiten Teilen Europas direkt angeflogen; Luxor liegt etwa vier Stunden privaten Straßentransfer entfernt.",
      "Wind gehört zum Charakter dieser Küste — am ruhigsten ist es morgens, ideal für Bootsausflüge und Schnorcheln.",
      "Nur riffverträglichen Sonnenschutz verwenden; in den Schutzgebieten ist es verboten, auf Korallen zu stehen.",
      "Die Resorts sind in sich geschlossen; wer zum Abendessen ausgehen möchte, fährt zur Marina oder nach El Dahar — beides bequem mit dem Taxi.",
    ],
    faqs: [
      {
        q: "Wie verbinde ich Hurghada mit Luxor?",
        a: "Per privatem Straßentransfer — etwa vier Stunden von Tür zu Tür durch die Östliche Wüste, bequem nach einem letzten Vormittag in Luxor zu machen. Es ist die klassische Kombination: erst die Tempel, dann drei oder vier Nächte Riff und Strand vor dem Heimflug, entweder vom internationalen Flughafen Hurghada oder zurück über Kairo.",
      },
      {
        q: "Eignet sich Hurghada für Familien?",
        a: "Es ist einer der besten Standorte in Ägypten für sie. Die Buchten sind flach und geschützt, an den Hausriffen schnorcheln Kinder in Sichtweite des Strandes, die Resorts sind um Pools und Angebote für Kinder herum gebaut, und ein privater Bootstag hält das Tempo so flexibel, wie es geteilte Ausflüge nie können.",
      },
      {
        q: "Hurghada oder Scharm el-Scheich — was soll ich wählen?",
        a: "Entscheiden Sie nach der Geografie. Hurghada passt ganz natürlich zu Luxor und dem Nil (vier Stunden Fahrt); Scharm liegt auf der Sinai-Seite, näher an den dramatischen Steilwänden von Ras Mohammed und an der Wüsten- und Sternenhimmel-Seite der Halbinsel. Tauchen lässt es sich an beiden Orten hervorragend; Familien neigen leicht zu Hurghada, Taucher auf der Suche nach großen Steilwänden leicht zu Scharm.",
      },
    ],
    photos: [
      { alt: "Boote vor dem Strand von Hurghada am Roten Meer", label: "Hurghada" },
      { alt: "Ein Steg führt über türkisfarbenes Wasser zu einer Insel bei Hurghada", label: "Gewässer von Giftun" },
      { alt: "Die El-Mina-Moschee am Meer in Hurghada", label: "El-Mina-Moschee" },
      { alt: "Von Palmen gesäumter Resortstrand am Roten Meer", label: "Die Resortküste" },
    ],
  },

  // ===== Sharm El Sheikh =====
  {
    id: "sharm-el-sheikh",
    localeSlug: "scharm-el-scheich-urlaub",
    metaTitle: "Scharm el-Scheich — Ras Mohammed, Riffe & Sinai-Wüste | Kemet",
    metaDescription:
      "Scharm el-Scheich: Nationalpark Ras Mohammed, die Riffe von Tiran, Schnorcheln vom Ufer, Sternennächte bei den Beduinen — und wie der Sinai in die Reise passt.",
    keywords:
      "scharm el scheich urlaub, scharm el scheich reiseführer, ras mohammed nationalpark, tauchen scharm el scheich, schnorcheln scharm el scheich, sinai wüste",
    name: "Scharm el-Scheich",
    summary:
      "Die Resorthauptstadt des Sinai zwischen Wüstenbergen und Rotem Meer — Tor zu Ras Mohammed, den Riffen von Tiran und Sternennächten bei den Beduinen.",
    description:
      "Scharm el-Scheich liegt an der Spitze der Sinai-Halbinsel, wo kahle rote Berge unmittelbar in eines der klarsten Gewässer der Welt abfallen. Diese Geografie ist die ganze Geschichte: Der Nationalpark Ras Mohammed — regelmäßig unter die besten Tauchreviere überhaupt gezählt — liegt zwanzig Bootsminuten entfernt, die Straße von Tiran ein wenig weiter, und entlang der gesamten Küste stürzen Riffwände wenige Meter vom Ufer in die Tiefe. Die Naama Bay liefert die Seite mit Promenade und Restaurants; in den ruhigeren Buchten nördlich und südlich liegen die Resorts. Und eine Stunde landeinwärts übernimmt die Wüste ganz — Beduinencamps, Canyonwanderungen und einige der dunkelsten, klarsten Nachthimmel, die sich von einem Strandurlaub aus erreichen lassen.",
    stay: "3–5 Tage",
    climate:
      "Trocken und verlässlich sonnig; Meer 22–28 °C. Im Winter kühler und windiger als die Festlandküste, im Hochsommer heiß.",
    whyVisit: [
      "Einige der besten Tauch- und Schnorchelreviere der Erde, wenige Minuten vom Ufer",
      "Wüste und Riff in einem Aufenthalt — Canyon, Camp und Korallen am selben Tag",
      "Eine ausgereifte Resort-Infrastruktur zu Preisen deutlich unter denen vergleichbarer Küsten",
    ],
    highlights: [
      "Der Nationalpark Ras Mohammed — das Zusammentreffen zweier Golfe und Riffwände von Weltrang",
      "Die Straße von Tiran: Strömungstauchgänge und Begegnungen mit Großfisch",
      "Uferriffe, die wenige Meter vom Strand beginnen — das Schnorcheln ist so gut wie das Tauchen",
      "Ein Abend in der Sinai-Wüste: beduinisches Abendessen und ernsthafte Sternenbeobachtung eine Stunde landeinwärts",
      "Die Promenade der Naama Bay für die gesellige Abendstunde",
    ],
    thingsToKnow: [
      "Der internationale Flughafen von Scharm macht die direkte Anreise aus Europa einfach; Kairo ist eine Flugstunde entfernt.",
      "Fliegen Sie nicht innerhalb von 24 Stunden nach Ihrem letzten Tauchgang — planen Sie den letzten Tag für Strand, Wüste oder Promenade.",
      "Die besten Plätze sind Bootsplätze: Ein privater Bootstag erreicht die Außenwände von Ras Mohammed vor der Flotte der Tagesausflügler.",
      "Nachmittags frischt der Wind fast das ganze Jahr über auf — buchen Sie Wasseraktivitäten für den Vormittag.",
    ],
    faqs: [
      {
        q: "Was macht Ras Mohammed so besonders?",
        a: "Es liegt dort, wo an der Spitze des Sinai der Golf von Suez und der Golf von Akaba aufeinandertreffen; nährstoffreiche Strömungen speisen deshalb Riffwände von ungewöhnlicher Dichte und Dramatik — Shark Reef und Yolanda Reef sind das berühmte Paar. Sichtweiten von 20–30 Metern sind die Regel, und weil die Wände bis nah an die Oberfläche reichen, sehen Schnorchler an einem Bootstag einen bemerkenswert großen Teil dessen, was Taucher sehen.",
      },
      {
        q: "Ist Scharm el-Scheich nur etwas für Taucher?",
        a: "Keineswegs. Das Schnorcheln vom Ufer ist für sich genommen Weltklasse, die Resorts sind wirklich erholsam, und das Innere des Sinai fügt einen zweiten Urlaub hinzu: Abendessen im Beduinencamp, Canyonwanderungen und Sternenbeobachtung unter einigen der dunkelsten erreichbaren Himmel überhaupt. Viele Gäste setzen nie eine Tauchflasche auf und reisen begeistert ab.",
      },
      {
        q: "Wie füge ich Scharm in eine Ägyptenreise ein?",
        a: "Mit dem Flugzeug — von Kairo nach Scharm ist es etwa eine Stunde, was einen Sinai-Ausklang von drei oder vier Nächten nach Kairo und dem Nil praktikabel macht. Denken Sie bei der Planung des letzten Tages an die 24-stündige Flugpause nach dem letzten Tauchgang, und erwägen Sie, über den eigenen internationalen Flughafen von Scharm an- oder abzureisen, um sich das Umsteigen in Kairo zu sparen.",
      },
    ],
    photos: [
      { alt: "Luftaufnahme der geschwungenen Buchten von Scharm el-Scheich", label: "Scharm el-Scheich" },
      { alt: "Eine türkisfarbene Lagune trifft auf kahle Wüstenlandzungen in Ras Mohammed", label: "Ras Mohammed" },
      { alt: "Ein strohgedecktes Strandcamp über dem flachen Korallenwasser in Scharm el-Scheich", label: "Flaches Korallenwasser" },
      { alt: "Ein Strandcafé bei Sonnenuntergang an der Küste von Scharm el-Scheich", label: "Farsha in der Dämmerung" },
    ],
  },

  // ===== The Fayoum =====
  {
    id: "fayoum",
    localeSlug: "oase-fayyum",
    metaTitle: "Fayyum, Ägypten — Tal der Wale, Wasserfälle & Dünen | Kemet",
    metaDescription:
      "Fayyum ab Kairo: die Walfossilien im UNESCO-Tal Wadi Al-Hitan, die Wasserfälle im Wadi El Rayan, Sandboarden über dem Magic Lake und die Töpfer von Tunis.",
    keywords:
      "fayyum oase, fayoum ägypten, tal der wale wadi al hitan, wadi el rayan wasserfälle, ausflug kairo fayyum, dorf tunis fayyum",
    name: "Fayyum",
    summary:
      "Eine grüne Senke anderthalb Stunden von Kairo — Wasserfälle in der Wüste, ein See voller Vögel, Walfossilien und ein Töpferdorf.",
    description:
      "Fayyum ist Ägyptens älteste Oase und sein überraschendster Reisetag: ein fruchtbares Becken anderthalb Stunden südwestlich von Kairo, in dem die Regeln der Wüste außer Kraft gesetzt sind. Die beiden Seen des Wadi El Rayan ergießen sich über Ägyptens einzige Wasserfälle ineinander, Dünen laufen bis unmittelbar ans Wasser, und der Vogelreichtum des Qarun-Sees zieht seit pharaonischer Zeit Reisende an — die Wasserräder der Region, die sich noch immer drehen, sind ihr Wahrzeichen. Jenseits des grünen Randes liegt Wadi Al-Hitan, das Tal der Wale, ein UNESCO-Welterbe, übersät mit vierzig Millionen Jahre alten Skeletten früher Wale, die noch Beine hatten. Verbinden Sie das Ganze mit einem Mittagessen bei den Töpfern des Dorfes Tunis, und Sie haben den reichhaltigsten Tagesausflug, den Kairo zu bieten hat — oder eine geruhsame Nacht unter dem Sternenhimmel der Wüste.",
    stay: "Ein ganzer Tag oder 1 Nacht",
    climate: "Wüstenklima, von den Seen gemildert; ideal von Oktober bis April, im Sommer mittags heiß.",
    whyVisit: [
      "Der abwechslungsreichste Tagesausflug von Kairo aus — Fossilien, Wasserfälle, Dünen und Handwerk",
      "Ein UNESCO-Welterbe, von dem die meisten Ägypten-Reisenden nie hören",
      "Der Gegenpol zu den Monumenten: Ägyptens Landschaften, lebendig und bewirtschaftet",
    ],
    highlights: [
      "Wadi Al-Hitan — das UNESCO-geschützte Tal der 40 Millionen Jahre alten Walfossilien, zu Fuß auf offenen Wüstenpfaden erkundet",
      "Die Seen des Wadi El Rayan und Ägyptens einzige Wasserfälle",
      "Sandboarden und Geländewagenfahrten auf den Dünen über dem Magic Lake",
      "Das Dorf Tunis — ein Hang voller arbeitender Töpfereien über dem Qarun-See",
      "Die alten Wasserräder von Fayyum, die noch immer in den Kanälen knarren",
    ],
    thingsToKnow: [
      "Etwa 1,5–2 Stunden Fahrt von Kairo oder Gizeh; für die Wüstenstätten braucht es einen Geländewagen und eine lokale Genehmigung — beides wird für Sie organisiert.",
      "Wadi Al-Hitan ist ein Rundgang von ein bis zwei Stunden unter freiem Himmel — Hut, Wasser und geschlossene Schuhe zählen hier mehr als irgendwo sonst.",
      "Das Dorf Tunis ist die erste Wahl für die Mittagspause; mehrere Töpfereien empfangen Besucher, und Kinder dürfen sich an der Töpferscheibe versuchen.",
      "Eine Nacht im Wüstencamp nahe dem Magic Lake macht aus einem langen Tag etwas Besonderes.",
    ],
    faqs: [
      {
        q: "Lohnt sich Fayyum als Tagesausflug von Kairo?",
        a: "Wenn Sie vier oder mehr Tage in Kairo haben, unbedingt — es ist der Tag, der die meisten überrascht. Auf einer einzigen Runde gehen Sie an einer UNESCO-Stätte zwischen vierzig Millionen Jahre alten Walskeletten umher, sehen Wasserfälle in der Wüste, fahren über Dünen oberhalb eines Sees und essen in einem Töpferdorf zu Mittag. Es ist Ägypten ohne Warteschlangen und fast ohne Reisebusse.",
      },
      {
        q: "Was ist Wadi Al-Hitan, das Tal der Wale?",
        a: "Ein UNESCO-Welterbe in der Wüste südwestlich von Fayyum, mit Hunderten versteinerter Skelette früher Wale — Tiere, die noch Hinterbeine trugen — aus der Zeit vor rund vierzig Millionen Jahren, als diese Wüste ein flaches Meer war. Die Fossilien liegen entlang offener Wanderpfade, dazu gibt es ein kleines, ausgezeichnetes Besucherzentrum.",
      },
      {
        q: "Haben auch Kinder Freude an Fayyum?",
        a: "Es ist einer der besten Familientage in Ägypten: Sandboarden auf den Dünen, Boote und Vogelwelt auf den Seen, Walskelette, die die Fantasie stärker beflügeln als jedes Museum, und eine Töpferscheibe zum Ausprobieren im Dorf Tunis. Die Wege zwischen den Stationen sind kurz, sodass die Geduld selten auf die Probe gestellt wird.",
      },
    ],
    photos: [
      { alt: "Der Magic Lake zwischen den Dünen der Wüste von Fayyum", label: "Fayyum" },
      { alt: "Die Wasserfälle des Wadi El Rayan in Fayyum", label: "Wadi El Rayan" },
      { alt: "Traditionelle hölzerne Wasserräder in Fayyum", label: "Die Wasserräder" },
      { alt: "Die Lehmziegelpyramide von Hawara in Fayyum", label: "Pyramide von Hawara" },
    ],
  },

  // ===== Abu Simbel =====
  {
    id: "abu-simbel",
    localeSlug: "abu-simbel-tempel",
    metaTitle: "Abu Simbel, Ägypten — die Tempel Ramses' II. | Kemet",
    metaDescription:
      "Abu Simbel ab Assuan: der Große Tempel Ramses' II., der Tempel der Nefertari, die Rettung der 1960er und die Sonnenausrichtung am 22. Februar und 22. Oktober.",
    keywords:
      "abu simbel tempel, abu simbel ab assuan, ramses tempel abu simbel, nefertari tempel, sonnenfest abu simbel",
    name: "Abu Simbel",
    summary:
      "Zwei Tempel, die Ramses II. am Ufer des Nassersees in eine Felswand schlagen ließ — und die in den 1960er-Jahren Block für Block versetzt wurden.",
    description:
      "Abu Simbel ist der tiefe Süden Ägyptens, etwa 280 Kilometer hinter Assuan, und das eine Monument, für das Menschen eine Wüste durchqueren. Ramses II. ließ um 1264 v. Chr. zwei Tempel unmittelbar in eine Sandsteinwand schlagen: den Großen Tempel, vor dem vier sitzende Kolosse des Königs von zwanzig Metern Höhe thronen, und daneben einen kleineren Tempel für Hathor und seine Königin Nefertari. Als der Hochdamm den Nassersee entstehen ließ, zersägte eine UNESCO-Kampagne zwischen 1964 und 1968 beide Tempel in mehr als tausend Blöcke und baute sie fünfundsechzig Meter höher wieder auf, im Inneren eines künstlichen Hügels. Zweimal im Jahr, am 22. Februar und am 22. Oktober, erreicht die aufgehende Sonne das innerste Heiligtum des Großen Tempels.",
    stay: "Ein Tag ab Assuan oder 1 Nacht",
    climate:
      "Einer der heißesten und trockensten Orte Ägyptens: mild von Oktober bis März, sengend von Mai bis September, wenn Besuche in die ersten Stunden des Tages gehören.",
    whyVisit: [
      "Die eindrucksvollste Tempelfassade Ägyptens",
      "Eine Meisterleistung antiker Baukunst und moderner Rettung am selben Ort",
      "Der natürliche Schlusspunkt einer Reise nilaufwärts",
    ],
    highlights: [
      "Der Große Tempel Ramses' II. — vier zwanzig Meter hohe Kolosse an der Fassade und dahinter die Halle der Osirispfeiler",
      "Der Tempel der Hathor und der Nefertari, in dem eine Königin so groß dasteht wie ihr König",
      "Die Sonnenausrichtung am 22. Februar und 22. Oktober, wenn das Morgenlicht das Heiligtum erhellt",
      "Der Blick über den Nassersee von der Tempelterrasse",
      "Die abendliche Ton-und-Licht-Show, für alle, die über Nacht bleiben",
    ],
    thingsToKnow: [
      "Ab Assuan sind es auf der Straße etwa drei bis dreieinhalb Stunden pro Strecke, oder ein kurzer Flug; auf der Straße wird vor Tagesanbruch aufgebrochen.",
      "Wer eine Nacht bleibt, sieht die Tempel bei Sonnenaufgang und am späten Nachmittag, wenn die Tagesgäste fort sind.",
      "Die Termine des Sonnenfestes ziehen große Menschenmengen an, und die Zimmer sind Monate im Voraus ausgebucht.",
      "Die Fotoregeln im Inneren der Tempel ändern sich von Zeit zu Zeit; Ihre ägyptologische Reiseleitung kennt die aktuellen.",
    ],
    faqs: [
      {
        q: "Lohnt sich die Fahrt von Assuan nach Abu Simbel?",
        a: "Ja, wenn Sie einen Tag dafür haben. Die Fahrt ist lang und der Aufbruch früh, aber nichts sonst in Ägypten gleicht dem ersten Anblick der vier Kolosse, und die Geschichte der Versetzung der Tempel ist so bemerkenswert wie die Tempel selbst. Wer ungern früh aufbricht, kann fliegen oder eine Nacht bleiben.",
      },
      {
        q: "Auf der Straße, mit dem Flugzeug oder mit Übernachtung?",
        a: "Die Straße ist der klassische Weg: Aufbruch vor Tagesanbruch durch offene Wüste, etwa drei bis dreieinhalb Stunden pro Strecke. Der Flug ab Assuan ist kurz und passt zu einem engen Zeitplan. Am ruhigsten ist eine Übernachtung: Sie sehen die Tempel zweimal, im späten Licht und bei Sonnenaufgang, mit weit weniger Menschen.",
      },
      {
        q: "Was geschieht am 22. Februar und am 22. Oktober?",
        a: "Bei Sonnenaufgang an diesen beiden Tagen wandert das Licht durch die ganze Länge des Großen Tempels und fällt auf die Statuen im Heiligtum. Das dauert wenige Minuten, und Tausende kommen dafür — es muss also weit im Voraus geplant und gebucht werden.",
      },
    ],
    photos: [
      { alt: "Die beiden Felsentempel von Abu Simbel über dem Nassersee", label: "Abu Simbel" },
      { alt: "Die Fassade des Tempels der Hathor und der Nefertari in Abu Simbel", label: "Der Tempel der Nefertari" },
      { alt: "Die Pfeilerhalle des Hathor-Tempels in Abu Simbel", label: "Die Hathor-Halle" },
    ],
  },

  // ===== Siwa Oasis =====
  {
    id: "siwa",
    localeSlug: "oase-siwa",
    metaTitle: "Oase Siwa — Orakel, Shali & das Große Sandmeer | Kemet",
    metaDescription:
      "Oase Siwa: das Orakel des Amun, die Festung Shali, die Kleopatra-Quelle, Salzseen und die Dünen des Großen Sandmeers — Anreise und empfohlene Dauer.",
    keywords:
      "oase siwa, siwa ägypten reise, orakel des amun siwa, shali festung, siwa salzseen, großes sandmeer",
    name: "Oase Siwa",
    summary:
      "Eine abgelegene Oase nahe der libyschen Grenze: das Orakel des Amun, eine Festung aus Lehm und Salz, Quellen unter Palmen und die Dünen des Großen Sandmeers.",
    description:
      "Siwa liegt in einer Senke unter dem Meeresspiegel im äußersten Westen Ägyptens, rund fünfzig Kilometer von der libyschen Grenze und eine lange Tagesfahrt von Kairo entfernt. Die Entfernung hielt die Oase die längste Zeit ihrer Geschichte für sich: Die Siwaner sind Amazigh, sprechen ihre eigene Sprache und bauten mit Kerschef, einer Mischung aus Lehm und Salz. Alexander der Große kam 331 v. Chr. hierher, um das Orakel des Amun zu befragen, und der Tempel, den er betrat, steht noch immer auf dem Felsen von Aghurmi. Die Altstadt Shali ist eine Festung aus dem dreizehnten Jahrhundert, die der Regen von 1926 zur Hälfte auflöste — zu den Formen, die sie heute hat. Ringsum liegen Dattel- und Olivengärten, kalte und warme Quellen, Salzseen von unwahrscheinlichem Blau und im Süden die ersten großen Dünen der Sahara.",
    stay: "2–3 Nächte",
    climate: "Echtes Wüstenklima: warme Tage und kalte Nächte von Oktober bis April, im Sommer sehr heiß.",
    whyVisit: [
      "Die eigenständigste Kultur Ägyptens, in seiner abgelegensten Oase",
      "Ein Orakel, für das Alexander der Große die Wüste durchquerte",
      "Quellen, Salzseen und die Dünen der Sahara, nur wenige Kilometer voneinander entfernt",
    ],
    highlights: [
      "Der Tempel des Amun-Orakels in Aghurmi, wo Alexander der Große 331 v. Chr. empfangen wurde",
      "Shali, die Festung aus Lehm und Salz im Zentrum des Ortes",
      "Die Kleopatra-Quelle und die Gärten mit Dattelpalmen und Olivenbäumen",
      "Die Salzseen und der Sonnenuntergang von der Insel Fatnas",
      "Ein Nachmittag in den Dünen des Großen Sandmeers, mit dem quellgespeisten Becken von Bir Wahed",
      "Gebel al-Mawta, der Berg der Toten, mit dem ausgemalten Grab des Si-Amun",
    ],
    thingsToKnow: [
      "Siwa ist weit: etwa dreieinhalb Stunden Fahrt von Marsa Matruh und ein ganzer Tag von Kairo. Eine Reise hierher wird meist mit der Mittelmeerküste oder mit Alexandria verbunden.",
      "Für die Wüste jenseits der Oase braucht es einen Geländewagen und eine Genehmigung — beides wird für Sie organisiert.",
      "Siwa ist konservativ; zurückhaltende Kleidung im Ort wird geschätzt.",
      "Die Lodges sind klein und im lokalen Stil gebaut; die besten sind in den kühlen Monaten früh ausgebucht.",
    ],
    faqs: [
      {
        q: "Wie kommt man nach Siwa?",
        a: "Auf der Straße. Der übliche Weg führt die Mittelmeerküste entlang nach Marsa Matruh und dann nach Süden durch die Wüste, etwa dreieinhalb Stunden ab Matruh. Von Kairo aus ist es ein ganzer Tag, weshalb die meisten Reisen die Strecke mit einer Nacht in Alexandria oder an der Küste unterbrechen.",
      },
      {
        q: "Wie viele Nächte braucht Siwa?",
        a: "Mindestens zwei, drei, wenn Sie können. Ein Tag gehört der Oase selbst — dem Orakeltempel, Shali, den Quellen und den Salzseen —, einer der Wüste, mit dem Sonnenuntergang auf den Dünen als Abschluss. Ein dritter lässt zu, dass der Ort Sie langsamer macht, und genau dafür ist er da.",
      },
      {
        q: "Wann ist die beste Reisezeit für Siwa?",
        a: "Von Oktober bis April. Die Tage sind warm und klar, die Nächte kalt genug für ein Feuer. Im Sommer ist die Hitze extrem, und die Wüstenausflüge werden auf den ganz frühen Morgen verlegt.",
      },
    ],
    photos: [
      { alt: "Die Lehmziegelfestung Shali erhebt sich über der Oase Siwa", label: "Oase Siwa" },
      { alt: "Türkisfarbener Salzsee mit weißem, salzverkrustetem Ufer in der Oase Siwa", label: "Salzseen" },
      { alt: "Lehmziegelruinen und ein spitz zulaufendes Minarett in Aghurmi, dem Standort des Orakeltempels von Siwa", label: "Orakeltempel" },
    ],
  },

  // ===== Marsa Matruh & the North Coast =====
  {
    id: "marsa-matruh-north-coast",
    localeSlug: "marsa-matruh-nordkueste",
    metaTitle: "Marsa Matruh & Ägyptens Nordküste — Strände, El Alamein | Kemet",
    metaDescription:
      "Ägyptens Mittelmeerküste westlich Alexandrias: Agiba-Strand und Bad der Kleopatra bei Marsa Matruh, die Kriegsgedenkstätten von El Alamein, der Weg nach Siwa.",
    keywords:
      "marsa matruh urlaub, ägypten nordküste, ägypten mittelmeer strand, el alamein gedenkstätte, agiba strand",
    name: "Marsa Matruh & die Nordküste",
    summary:
      "Ägyptens Mittelmeerufer westlich von Alexandria: weißer Sand, türkisfarbene Buchten und die Gedenkstätten des Schlachtfelds von El Alamein.",
    description:
      "Westlich von Alexandria zieht sich die Mittelmeerküste über Hunderte Kilometer hin — heller Sand und Wasser von einer Farbe, die man von Ägypten nicht erwartet. Marsa Matruh, etwa drei Stunden die Küste entlang, liegt an einer geschützten Bucht; seine besten Strände sind eine kurze Fahrt entfernt: Agiba, eine Bucht unter Kalksteinklippen, und das als Bad der Kleopatra bekannte Felsbecken. Auf dem Weg liegt El Alamein, wo sich 1942 der Wüstenkrieg wendete; der Commonwealth-Friedhof, die deutsche und die italienische Gedenkstätte und das Militärmuseum stehen wenige Kilometer voneinander entfernt an der Straße. Hierher kommen die Ägypter selbst im Sommer, und es ist zugleich der Weg nach Siwa, das etwa dreieinhalb Stunden südlich von Matruh liegt.",
    stay: "2–3 Nächte",
    climate:
      "Mediterran: warme, windige Sommer, weit milder als im Niltal; kühle, mitunter regnerische Winter, in denen ein Großteil der Küste geschlossen ist.",
    whyVisit: [
      "Ein Strandurlaub am Mittelmeer, von dem nur wenige ausländische Gäste wissen, dass Ägypten ihn bietet",
      "Die Gedenkstätten von El Alamein, die zu den bewegendsten Orten des Zweiten Weltkriegs gehören",
      "Die natürliche Station auf dem Weg nach Siwa",
    ],
    highlights: [
      "Der Agiba-Strand, eine kleine Bucht unter Kalksteinklippen",
      "Das Bad der Kleopatra, ein natürliches, zum Meer hin offenes Felsbecken",
      "Der Commonwealth-Soldatenfriedhof in El Alamein und die deutsche und die italienische Gedenkstätte",
      "Das Militärmuseum von El Alamein",
      "Die Rommel-Höhle, das zum kleinen Museum gewordene Feldhauptquartier in Matruh",
    ],
    thingsToKnow: [
      "Saison ist der Sommer — etwa Juni bis September —, also umgekehrt wie im Niltal. Im Winter ist das Meer kalt, und viele Hotels schließen.",
      "El Alamein liegt etwa anderthalb Stunden von Alexandria entfernt, Marsa Matruh etwa drei Stunden.",
      "Die ägyptischen Schulferien füllen die Küste im Juli und August; Juni und September sind ruhiger.",
      "Die Küste lässt sich ganz natürlich mit Alexandria davor und Siwa danach verbinden.",
    ],
    faqs: [
      {
        q: "Wann ist die beste Reisezeit für Ägyptens Nordküste?",
        a: "Im Sommer. Von Juni bis September ist das Meer warm, und die Brise hält die Küste weit kühler als Kairo oder Luxor. Es ist der eine Teil Ägyptens, in dem Juli und August Saison sind und nicht etwas, das man meidet — allerdings sind es auch die vollsten Wochen.",
      },
      {
        q: "Lässt sich El Alamein an einem Tag besuchen?",
        a: "Ja, von Alexandria aus oder auf dem Weg nach Westen. Der Commonwealth-Friedhof, das Museum und die deutsche und die italienische Gedenkstätte liegen nah beieinander an der Küstenstraße und beanspruchen zusammen einen halben Tag.",
      },
      {
        q: "Ist Marsa Matruh eine gute Station auf dem Weg nach Siwa?",
        a: "Es ist die übliche. Die Straße nach Siwa verlässt die Küste bei Matruh; eine oder zwei Nächte am Meer unterbrechen also eine lange Fahrt und schenken Ihnen beide Landschaften des Westens: das Mittelmeer und die Oase.",
      },
    ],
    photos: [
      { alt: "Leuchtend türkisfarbenes Meer unter hellen Kalksteinklippen und Felsplatten bei Agiba, Marsa Matruh", label: "Agiba" },
      { alt: "Sandbucht unter einer Kalksteinlandzunge mit türkisfarbenem Meer am Strand von Agiba bei Marsa Matruh", label: "Strand von Agiba" },
      { alt: "Reihen weißer Grabsteine und ein einzelner Baum im Sand auf dem Kriegsfriedhof von El Alamein", label: "El Alamein" },
    ],
  },

  // ===== Port Said =====
  {
    id: "port-said",
    localeSlug: "port-said-suezkanal",
    metaTitle: "Port Said, Ägypten — die Stadt am Suezkanal | Kemet",
    metaDescription:
      "Port Said an der Mündung des Suezkanals: Schiffe vor der Corniche, die Fähre nach Port Fuad, Straßen des 19. Jahrhunderts und der Weg nach Kairo.",
    keywords:
      "port said sehenswürdigkeiten, port said suezkanal, port said kreuzfahrt ausflug, port said pyramiden ausflug, port fuad fähre",
    name: "Port Said",
    summary:
      "Die Stadt an der nördlichen Mündung des Suezkanals — Balkone des neunzehnten Jahrhunderts, Schiffe, die am Ende der Straße vorbeiziehen, und eine Fähre zwischen zwei Kontinenten.",
    description:
      "Port Said wurde 1859 gegründet, als die Arbeiten am Suezkanal begannen, und sieht noch immer aus wie der Hafen des neunzehnten Jahrhunderts, als der es gebaut wurde: Straßen mit Holzbalkonen und Arkaden und am Wasser das Gebäude der Kanalbehörde mit seinen grünen Kuppeln. Der Kanal ist die Sehenswürdigkeit. Schiffe von der Größe ganzer Gebäude gleiten am Ende der Corniche vorbei, unterwegs zwischen Mittelmeer und Rotem Meer, und eine kostenlose Fähre setzt in wenigen Minuten nach Port Fuad über, auf das asiatische Ufer. Für Reisende, die mit dem Kreuzfahrtschiff ankommen, ist Port Said zudem eines der Tore nach Kairo und zu den Pyramiden, etwa drei Stunden auf der Straße entfernt.",
    stay: "Ein halber bis 1 Tag",
    climate:
      "Mediterran und mild: warme, feuchte Sommer, von der Meeresbrise gemildert; kühle Winter mit gelegentlichem Regen.",
    whyVisit: [
      "Der Suezkanal, von der Straße aus gesehen statt auf der Landkarte",
      "Eine Hafenstadt des neunzehnten Jahrhunderts, die nur wenige Gäste erreichen",
      "Ein Tor nach Kairo für Reisende, die über das Meer ankommen",
    ],
    highlights: [
      "Vom Ufer aus zusehen, wie Schiffe in den Suezkanal einfahren",
      "Die kostenlose Fähre nach Port Fuad — von Afrika nach Asien in wenigen Minuten",
      "Das Gebäude der Suezkanalbehörde mit seinen grünen Kuppeln",
      "Die Holzbalkone und Arkaden der Altstadt",
      "Das Militärmuseum von Port Said",
    ],
    thingsToKnow: [
      "Etwa zweieinhalb bis drei Stunden auf der Straße von Kairo.",
      "Für Kreuzfahrtgäste ist ein privater Tag vom Hafen nach Gizeh und zurück möglich, aber lang; er wird nach den Zeiten des Schiffes geplant.",
      "Die Stadt ist flach und gut zu Fuß zu erkunden; am schönsten ist die Uferpromenade am späten Nachmittag.",
    ],
    faqs: [
      {
        q: "Was gibt es in Port Said zu sehen?",
        a: "Vor allem den Kanal selbst: Schiffe, die nur wenige hundert Meter vor der Corniche vorbeiziehen. Dann die Straßen des neunzehnten Jahrhunderts mit ihren Holzbalkonen, das Gebäude der Kanalbehörde und die kurze Überfahrt mit der Fähre nach Port Fuad auf der asiatischen Seite.",
      },
      {
        q: "Kann ich von einem Kreuzfahrtschiff in Port Said aus die Pyramiden besuchen?",
        a: "Ja. Es sind etwa drei Stunden pro Strecke auf der Straße; der Tag ist also lang und wird nach Ankunft und Abfahrt Ihres Schiffes geplant. Mit privatem Wagen und ägyptologischer Reiseleitung holen Sie das Beste aus den Stunden heraus, die Sie in Gizeh haben.",
      },
      {
        q: "Lohnt sich Port Said als Station auf einer Reise durch Ägypten?",
        a: "Für Reisende, die sich für den Kanal, für neuere Geschichte oder für eine andere Art ägyptischer Stadt interessieren: ja — als Tagesausflug von Kairo oder als Station zwischen Kairo und der Küste. Wer nur eine Woche Zeit hat, schenkt diesen Tag meist lieber Alexandria.",
      },
    ],
    photos: [
      { alt: "Rote Holzboote mit geschnitzten Kabinen am Suezkanal in Port Said, die Stadt am gegenüberliegenden Ufer", label: "Suezkanal" },
      { alt: "Weißes Gebäude der Suezkanalbehörde mit Arkaden und drei grünen Kuppeln, vom Kanal in Port Said aus gesehen", label: "Kanalbehörde" },
      { alt: "Grüne Autofähre auf dem Suezkanal unter den Zwillingsminaretten der Moschee von Port Fuad", label: "Port-Fuad-Fähre" },
    ],
  },

  // ===== Saint Catherine & Mount Sinai =====
  {
    id: "saint-catherine",
    localeSlug: "katharinenkloster-berg-sinai",
    metaTitle: "Katharinenkloster & Berg Sinai — Kloster und Gipfel | Kemet",
    metaDescription:
      "Katharinenkloster im Sinai: das Kloster aus dem 6. Jahrhundert, der Aufstieg auf den Berg Sinai zum Sonnenaufgang, Dauer und Anreise ab Dahab oder Scharm.",
    keywords:
      "katharinenkloster sinai, berg sinai besteigen, mosesberg sonnenaufgang, katharinenkloster ausflug dahab, katharinenkloster ab scharm el scheich",
    name: "Katharinenkloster & Berg Sinai",
    summary:
      "Ein Kloster aus dem sechsten Jahrhundert am Fuß des Berges Sinai, im hohen Granitgebirge der Halbinsel — und der Aufstieg zum Gipfel zum Sonnenaufgang.",
    description:
      "In den Bergen des südlichen Sinai, rund 1.500 Meter über dem Meer, steht das Katharinenkloster, seit Kaiser Justinian es zwischen 548 und 565 erbauen ließ. Es ist eines der ältesten noch aktiven christlichen Klöster der Welt: Seine Mauern umschließen die Verklärungskirche, eine Sammlung früher Ikonen, eine gerühmte Handschriftenbibliothek und den Dornbusch, den die Überlieferung mit jenem gleichsetzt, den Moses brennen sah. Darüber erhebt sich der Berg Sinai — der Dschebel Musa — mit 2.285 Metern, bestiegen über einen langen Kamelpfad oder über die Steinstufen der Mönche, meist bei Nacht, um den Gipfel zum Sonnenaufgang zu erreichen. Das Kloster und die Berge ringsum sind UNESCO-Welterbe, und das Land hier ist Beduinenland, die Heimat der Dschebeliya.",
    stay: "1 Nacht",
    climate:
      "Gebirgsklima: warme Tage und kühle Nächte im Frühjahr und Herbst, heiße Sommer und Winter, die kalt genug sind für Frost und gelegentlichen Schnee auf den Gipfeln.",
    whyVisit: [
      "Eines der ältesten noch aktiven Klöster der Christenheit",
      "Ein Gipfel, der drei Religionen heilig ist und zu Fuß erreicht wird",
      "Das Innere des Sinai, eine Welt entfernt von seinen Stränden",
    ],
    highlights: [
      "Das Katharinenkloster, erbaut zwischen 548 und 565",
      "Der Aufstieg auf den Berg Sinai zum Sonnenaufgang, über den Kamelpfad oder die Stufen der Reue",
      "Die Ikonen des Klosters und das Mosaik der Verklärung",
      "Die Granitberge des Sinai-Hochgebirges",
      "Beduinengärten in den Wadis rund um den Ort",
    ],
    thingsToKnow: [
      "Das Kloster ist für Besucher nur wenige Stunden am Vormittag und nicht jeden Tag geöffnet; der Besuch muss darauf abgestimmt werden.",
      "Der Aufstieg zum Gipfel dauert etwa zweieinhalb bis drei Stunden. Oben ist es vor Tagesanbruch zu jeder Jahreszeit kalt — warme Kleidungsschichten sind unerlässlich.",
      "Von Dahab sind es etwa zwei Stunden Fahrt, von Scharm el-Scheich zweieinhalb bis drei.",
      "Der Aufstieg ist gleichmäßig und nicht technisch, aber es ist eine echte Bergwanderung bei Nacht und nicht für jeden geeignet.",
    ],
    faqs: [
      {
        q: "Wie schwer ist der Aufstieg auf den Berg Sinai?",
        a: "Es ist eher eine lange Wanderung bergauf als eine Kletterei. Der Kamelpfad steigt die meiste Zeit sanft an und endet mit etwa 750 Steinstufen zum Gipfel; rechnen Sie mit zweieinhalb bis drei Stunden hinauf und etwas weniger hinunter. Die meisten gehen bei Nacht, um zum Sonnenaufgang oben zu sein — das heißt Stirnlampe, warme Kleidung und sicherer Tritt.",
      },
      {
        q: "Kann ich das Kloster besuchen, ohne den Berg zu besteigen?",
        a: "Ja. Das Kloster liegt am Fuß des Berges und wird für sich besucht, als Tagesausflug von Dahab oder Scharm el-Scheich. Seine Öffnungszeiten sind kurz, und an bestimmten Tagen ist es geschlossen; der Besuch wird also danach geplant.",
      },
      {
        q: "Wann ist die beste Reisezeit?",
        a: "Frühjahr und Herbst. Im Sommer sind die Tage auf dem unteren Pfad heiß, und im Winter herrscht auf dem Gipfel vor Tagesanbruch Frost, manchmal mit Schnee. Zu jeder Jahreszeit ist es oben weit kälter als an der Küste.",
      },
    ],
    photos: [
      { alt: "Geschichtete rote Granitrücken des Sinai-Gebirges bei Sonnenaufgang, gesehen vom Berg Sinai", label: "Berg Sinai" },
      { alt: "Befestigte Mauern, Glockenturm und Zypressengarten des Katharinenklosters unterhalb eines Granithangs", label: "Katharinenkloster" },
      { alt: "Zerklüftete Granitgipfel des Hochsinai im frühen Licht, gesehen von der felsigen Treppe auf dem Berg Sinai", label: "Hochsinai" },
    ],
  },

  // ===== Dahab =====
  {
    id: "dahab",
    localeSlug: "dahab-blue-hole",
    metaTitle: "Dahab, Ägypten — Blue Hole, Uferriffe & Sinai | Kemet",
    metaDescription:
      "Dahab am Golf von Akaba: Schnorcheln am Blue Hole, Tauchen vom Ufer, Windsurfen, Beduinenabende und das Katharinenkloster — und der Unterschied zu Scharm.",
    keywords:
      "dahab urlaub, dahab blue hole, dahab tauchen, dahab schnorcheln, dahab oder scharm el scheich, dahab windsurfen",
    name: "Dahab",
    summary:
      "Ein entspannter Ort am Golf von Akaba, mit Riffen wenige Schritte vom Ufer, dem Blue Hole im Norden und den Bergen des Sinai im Rücken.",
    description:
      "Dahab begann als beduinisches Fischerdorf am Golf von Akaba, etwa eine Stunde nördlich von Scharm el-Scheich, und hat dessen Tempo behalten. Eine Promenade mit Cafés zieht sich am Wasser entlang, und das Riff beginnt beinahe zu ihren Füßen: Dies ist einer der wenigen Orte am Roten Meer, an denen man die besten Tauch- und Schnorchelplätze erreicht, indem man vom Strand aus ins Wasser geht. Eine kurze Fahrt nach Norden liegt das Blue Hole, ein mehr als hundert Meter tiefer Einsturztrichter im Riff, mit einem Korallenrand, dem Schnorchler folgen, und Tiefen, die allein ausgebildeten technischen Tauchern vorbehalten sind. Die Lagune im Süden hat beständigen Wind zum Windsurfen und Kitesurfen, und landeinwärts beginnt der Granit des Sinai — Canyons, beduinische Abendessen unter den Sternen und das Katharinenkloster zwei Stunden entfernt.",
    stay: "2–4 Nächte",
    climate:
      "Trockene Wüstenküste: im Winter warm, im Sommer heiß, mit einem Wind, der vom Frühjahr bis zum Herbst am beständigsten weht.",
    whyVisit: [
      "Riffe, die Sie vom Strand aus erreichen, ohne Boot",
      "Der entspannteste Ort am ägyptischen Roten Meer",
      "Meer und Berge im selben Aufenthalt",
    ],
    highlights: [
      "Das Blue Hole — Schnorcheln entlang seines Korallenrandes",
      "Tauchen vom Ufer am Canyon, am Lighthouse und im Eel Garden",
      "Windsurfen und Kitesurfen in der Lagune",
      "Ein beduinisches Abendessen in der Wüste hinter dem Ort",
      "Ein Tag am Katharinenkloster oder der nächtliche Aufstieg auf den Berg Sinai",
    ],
    thingsToKnow: [
      "Etwa eine Stunde auf der Straße vom Flughafen Scharm el-Scheich.",
      "Dahab ist ungezwungen: kleine Hotels, eine Promenade zum Flanieren, wenige große Resorts. Wer einen vollwertigen Resortaufenthalt sucht, wählt meist Scharm el-Scheich.",
      "Die Tiefen des Blue Hole haben einen ernsten Ruf; Schnorcheln und geführte Sporttauchgänge entlang des Randes sind etwas ganz anderes und finden jeden Tag statt.",
      "Lassen Sie zwischen Ihrem letzten Tauchgang und einem Flug einen vollen Tag vergehen.",
    ],
    faqs: [
      {
        q: "Dahab oder Scharm el-Scheich?",
        a: "Scharm ist eine Resortstadt: große Hotels, Bootstage nach Ras Mohammed und Tiran, alles organisiert. Dahab ist ein Ort: kleinere Unterkünfte, Riffe, die man vom Ufer aus erreicht, und eine langsamere, unabhängigere Stimmung. Taucher und Reisende, die Resorts nicht mögen, ziehen meist Dahab vor; Familien, die einen Aufenthalt mit vollem Service wünschen, meist Scharm.",
      },
      {
        q: "Ist ein Besuch am Blue Hole sicher?",
        a: "Schnorchler und Sporttaucher, die entlang des Riffs innerhalb ihrer Grenzen bleiben, besuchen es jeden Tag sicher. Seine Gefahren liegen in der Tiefe, bei Tauchgängen, die nur ausgebildete technische Taucher unternehmen sollten. Gehen Sie mit einer seriösen Tauchbasis und bleiben Sie im Rahmen Ihres Brevets.",
      },
      {
        q: "Wie verbinde ich Dahab mit dem übrigen Ägypten?",
        a: "Die meisten Reisenden fliegen von Kairo oder Luxor nach Scharm el-Scheich und fahren eine Stunde nach Norden. Dahab eignet sich gut als letztes Kapitel einer Reise — ein paar unverplante Tage am Meer nach den Tempeln —, mit dem Katharinenkloster als Tagesausflug ins Landesinnere.",
      },
    ],
    photos: [
      { alt: "Kahle Sinai-Berge fallen zu einer von Riffen gesäumten Küste und tiefblauem Meer am Blue Hole in Dahab ab", label: "Blue Hole" },
      { alt: "Kites über einer türkisfarbenen Lagune vor den Bergen des Sinai bei Dahab", label: "Lagune" },
      { alt: "Caféterrassen und weiße Gebäude an der Strandpromenade von Dahab über klarem blauem Wasser mit einem Boot", label: "Promenade" },
    ],
  },

  // ===== Marsa Alam =====
  {
    id: "marsa-alam",
    localeSlug: "marsa-alam-rotes-meer",
    metaTitle: "Marsa Alam — Schildkröten, Delfine & stille Riffe | Kemet",
    metaDescription:
      "Marsa Alam am südlichen Roten Meer: Schildkröten in Abu Dabbab, Delfine in Samadai, das Elphinstone-Riff und Wadi el-Gemal — und der Vergleich mit Hurghada.",
    keywords:
      "marsa alam urlaub, marsa alam schnorcheln, abu dabbab schildkröten, marsa alam delfine, marsa alam oder hurghada, elphinstone riff tauchen",
    name: "Marsa Alam",
    summary:
      "Das ruhigere südliche Rote Meer: Riffe in bestem Zustand, Meeresschildkröten in den Buchten und Delfine in Samadai.",
    description:
      "Marsa Alam ist der Süden der ägyptischen Rotmeerküste, rund 270 Kilometer unterhalb von Hurghada, mit eigenem Flughafen und einem Bruchteil der Besucher. Was es hat, ist ein Meer in besserem Zustand als fast überall weiter nördlich. Grüne Meeresschildkröten weiden auf dem Seegras der Bucht von Abu Dabbab, wo sich manchmal ein Dugong zeigt; Spinnerdelfine ruhen im hufeisenförmigen Riff von Samadai, das nach Regeln besucht wird, die Boote und Schwimmer auf markierte Zonen beschränken; und vor der Küste ist Elphinstone eine der gerühmten Steilwände des Roten Meeres, für erfahrene Taucher. Landeinwärts liegt Wadi el-Gemal, ein Nationalpark aus Mangroven, Wüste und dem Land der Ababda-Beduinen. Die Resorts verteilen sich dünn über eine lange Küste, und die Nächte sind dunkel und still.",
    stay: "3–5 Nächte",
    climate:
      "Das ganze Jahr warm und trocken; im Sommer heiß, und das Meer bleibt in jedem Monat warm genug zum Schwimmen.",
    whyVisit: [
      "Einige der intaktesten Riffe der ägyptischen Küste",
      "Schildkröten und Delfine in ihren eigenen Buchten",
      "Das Rote Meer ohne den Andrang",
    ],
    highlights: [
      "Schnorcheln mit Grünen Meeresschildkröten in Abu Dabbab",
      "Die Spinnerdelfine des Samadai-Riffs, nach den Regeln des Schutzgebiets beobachtet",
      "Das Elphinstone-Riff, für erfahrene Taucher",
      "Der Nationalpark Wadi el-Gemal — Mangroven, Wüste und Küste",
      "Hausriffe, die wenige Schritte vom Strand beginnen",
    ],
    thingsToKnow: [
      "Marsa Alam hat einen eigenen Flughafen; auf der Straße sind es etwa dreieinhalb Stunden von Hurghada.",
      "Wildtiere halten sich an ihre eigenen Zeiten: Schildkröten sieht man an den meisten Tagen, Delfine oft, Dugongs nur mit Glück.",
      "Die Resorts liegen weit auseinander, und es gibt kaum städtisches Leben; dies ist ein Ort für das Meer und für Erholung.",
      "Elphinstone und die Riffe vor der Küste sind brevetierten, erfahrenen Tauchern vorbehalten.",
    ],
    faqs: [
      {
        q: "Marsa Alam oder Hurghada?",
        a: "Hurghada hat von allem mehr — Hotels, Restaurants, Bootsausflüge, Nachtleben — und liegt näher an Luxor. Marsa Alam hat weniger, und das mit Absicht: weniger Menschen, dunklere Nächte und Riffe in besserem Zustand. Wählen Sie Hurghada für Bequemlichkeit und Auswahl, Marsa Alam für das Meer selbst.",
      },
      {
        q: "Werde ich Schildkröten und Delfine sehen?",
        a: "Schildkröten sieht man in Abu Dabbab an den meisten Tagen. Delfine sieht man in Samadai oft, aber nicht immer, und das Riff wird so verwaltet, dass sie nicht gestört werden. Ein Dugong ist Glückssache. Niemand kann ein Wildtier versprechen, und einem Anbieter, der es tut, sollte man misstrauen.",
      },
      {
        q: "Eignet sich Marsa Alam für Nichttaucher?",
        a: "Ja. Viele der besten Plätze sind flache Buchten und Hausriffe, die man mit Maske und Schnorchel erkundet, und für viele Gäste liegt der Reiz schlicht in einem ruhigen Strand und warmem Wasser. Es passt zu Familien und zu Reisenden, die sich am Ende einer Reise erholen möchten.",
      },
    ],
    photos: [
      { alt: "Grüne Meeresschildkröte beim Fressen auf einer Seegraswiese unter Wasser bei Abu Dabbab, Marsa Alam", label: "Abu Dabbab" },
      { alt: "Rosafarbene und gelbe Weichkorallen mit einem Schwarm oranger Fahnenbarsche an einem Riff im Roten Meer vor Marsa Alam", label: "Korallenriff" },
      { alt: "Kamele laufen in einer Reihe an einer Akazie und felsigen Hügeln im Wadi el-Gemal vorbei", label: "Wadi el-Gemal" },
    ],
  },

  // ===== Bahariya & the White Desert =====
  {
    id: "bahariya-white-desert",
    localeSlug: "oase-bahariya-weisse-wueste",
    metaTitle: "Bahariya & die Weiße Wüste — Camping in der Sahara | Kemet",
    metaDescription:
      "Oase Bahariya und Weiße Wüste ab Kairo: die Kreideformationen, die Schwarze Wüste, der Kristallberg, eine Nacht unter den Sternen — und wie viel Zeit nötig ist.",
    keywords:
      "weiße wüste ägypten, oase bahariya, weiße wüste tour ab kairo, wüstencamp ägypten, schwarze wüste kristallberg",
    name: "Bahariya & die Weiße Wüste",
    summary:
      "Eine Oase vier bis fünf Stunden von Kairo und dahinter die Kreideformationen der Weißen Wüste — am schönsten bei Sonnenuntergang und von einem Camp unter den Sternen aus.",
    description:
      "Bahariya ist von den Oasen der Westlichen Wüste diejenige, die Kairo am nächsten liegt, etwa 370 Kilometer südwestlich, und der Ausgangspunkt für eine der seltsamsten Landschaften Ägyptens. Südlich der Oase durchquert die Straße die Schwarze Wüste, deren Hügel mit dunklem Vulkangestein bestäubt sind, führt am Kristallberg und an den Felswänden von Agabat vorbei und erreicht den Nationalpark Weiße Wüste: eine Kreideebene, die der Wind zu Pilzen, Kuppeln und Formen geschliffen hat, die wie gewollt wirken. Sie ist weiß genug, um mittags an Schnee zu erinnern, und färbt sich bei Sonnenuntergang rosa und golden. Die meisten Reisenden verbringen dort die Nacht, in einem Camp auf dem Sand. Bahariya selbst hat heiße Quellen, Palmengärten und die vergoldeten Mumien, die hier in den 1990er-Jahren gefunden wurden.",
    stay: "2 Nächte, eine davon in der Wüste",
    climate:
      "Wüste: angenehme Tage von Oktober bis April mit kalten Nächten, besonders in der offenen Wüste; im Sommer sehr heiß.",
    whyVisit: [
      "Eine Landschaft, wie es sie in Ägypten kein zweites Mal gibt",
      "Der Nachthimmel der offenen Sahara",
      "Ein vollständiger Tonartwechsel gegenüber Tempeln und Museen",
    ],
    highlights: [
      "Die Kreideformationen des Nationalparks Weiße Wüste bei Sonnenuntergang und Sonnenaufgang",
      "Eine Nacht im Wüstencamp unter einem Himmel ohne ein Licht auf hundert Kilometer",
      "Die Schwarze Wüste und der Blick von ihren Vulkanhügeln",
      "Der Kristallberg und das Tal von Agabat",
      "Die vergoldeten Mumien von Bahariya im kleinen Museum von Bawiti",
    ],
    thingsToKnow: [
      "Bahariya liegt etwa vier bis fünf Stunden Fahrt von Kairo entfernt; bis in die Weiße Wüste sind es noch einmal rund zwei Stunden im Geländewagen.",
      "Wüstenfahrten erfordern hier Genehmigungen und eine zugelassene Geländewagen-Crew, beides wird für Sie organisiert; die Routen können sich ändern, wenn die Vorschriften es tun.",
      "Das Campen ist von Natur aus einfach — Zelte, ein Feuer, ein frisch gekochtes Abendessen. Winternächte in der Wüste sind kalt und verlangen wirklich warme Kleidung.",
      "Am besten als Reise mit zwei Nächten ab Kairo, nicht als gehetzte einzelne Nacht.",
    ],
    faqs: [
      {
        q: "Wie viele Tage braucht die Weiße Wüste?",
        a: "Zwei Nächte ab Kairo sind die bequeme Variante: Fahrt nach Bahariya, weiter durch die Schwarze Wüste zum Camp in der Weißen Wüste und Rückkehr am nächsten Tag oder nach einer zweiten Nacht in der Oase. Es geht auch mit einer Nacht, doch dann drängen die langen Fahrten die Wüste selbst an den Rand.",
      },
      {
        q: "Wie ist das Campen in der Weißen Wüste?",
        a: "Einfach und unvergesslich. Die Crew schlägt zwischen den Formationen Zelte oder einen Windschutz auf, kocht das Abendessen über dem Feuer, und den Rest übernimmt die Wüste. Im Park gibt es keinerlei Einrichtungen, die Stille ist vollkommen, und in einer klaren Nacht sind die Sterne die hellsten, die die meisten Gäste je gesehen haben.",
      },
      {
        q: "Ist das für Kinder geeignet?",
        a: "Für Kinder, die gern draußen sind, sehr — die Formationen sind ein natürlicher Spielplatz, und die Nacht unter den Sternen ist das, woran sie sich erinnern. Die Fahrten sind lang, deshalb passt es besser zu Schulkindern als zu ganz kleinen.",
      },
    ],
    photos: [
      { alt: "Runde weiße Kreideformationen ragen im Streiflicht aus dem Sand der Weißen Wüste Ägyptens", label: "Weiße Wüste" },
      { alt: "Dunkle vulkanische Kegelhügel auf einer hellen Sandebene in der Schwarzen Wüste bei Bahariya", label: "Schwarze Wüste" },
      { alt: "Leuchtende Zelte neben einem pilzförmigen Kreidefelsen bei Nacht in der Weißen Wüste", label: "Wüstencamp" },
    ],
  },

  // ===== Kharga & Dakhla Oases =====
  {
    id: "kharga-dakhla-oases",
    localeSlug: "oasen-charga-und-dachla",
    metaTitle: "Oasen Charga & Dachla — Hibis, Bagawat & Al-Qasr | Kemet",
    metaDescription:
      "Ägyptens südliche Oasen: Hibis-Tempel und Kapellen von Bagawat in Charga, die Lehmziegelstadt Al-Qasr und Deir el-Hagar in Dachla — und die Anreise.",
    keywords:
      "oase charga, oase dachla, kharga oase ägypten, hibis tempel, al-qasr dachla, westliche wüste ägypten oasen",
    name: "Oasen Charga & Dachla",
    summary:
      "Die südlichen Oasen der Westlichen Wüste: ein Tempel aus der Perserzeit, einer der frühesten christlichen Friedhöfe und eine mittelalterliche Stadt aus Lehmziegeln.",
    description:
      "Charga und Dachla liegen tief in der Westlichen Wüste, an den alten Karawanenrouten, die zwischen dem Nil und dem Inneren Afrikas verliefen. In Charga, der größeren, steht der Hibis-Tempel, erbaut unter dem Perserkönig Dareios I. und der besterhaltene Tempel dieser Epoche in Ägypten, und daneben die Nekropole von Bagawat, wo Hunderte Lehmziegelkapellen — manche mit bemalten Kuppeln — einen der ältesten christlichen Friedhöfe überhaupt bilden. Nördlich davon stehen römische Kastelle draußen in der Wüste. Dachla, etwa drei Stunden weiter westlich, ist grüner und stiller: Die mittelalterliche Stadt Al-Qasr ist ein Labyrinth aus überdachten Gassen und geschnitzten hölzernen Türstürzen, der römische Tempel Deir el-Hagar steht allein am Rand der Dünen, und in den Feldern entspringen warme Quellen.",
    stay: "3–4 Nächte für beide Oasen",
    climate:
      "Einer der trockensten Orte der Erde: warme, klare Tage von Oktober bis April, kalte Nächte im Winter, extreme Hitze im Sommer.",
    whyVisit: [
      "Monumente aus Epochen, die das Niltal selten zeigt: persisch, römisch und frühchristlich",
      "Eine mittelalterliche islamische Stadt, die noch immer in Lehmziegeln steht",
      "Die Westliche Wüste von ihrer abgelegensten und am wenigsten besuchten Seite",
    ],
    highlights: [
      "Der Hibis-Tempel in Charga, aus der Perserzeit",
      "Die ausgemalten Kapellen der Nekropole von Bagawat",
      "Al-Qasr, die mittelalterliche Lehmziegelstadt von Dachla",
      "Der römische Tempel Deir el-Hagar am Rand der Dünen",
      "Wüstenkastelle an den alten Karawanenrouten nördlich von Charga",
    ],
    thingsToKnow: [
      "Die Entfernungen sind groß: Charga liegt etwa drei bis vier Stunden auf der Straße von Luxor, Dachla etwa drei Stunden hinter Charga.",
      "Die Hotels sind einfach, dazu kommen einige wenige komfortable Lodges; man reist hierher für die Stätten und die Wüste, nicht für Resortkomfort.",
      "Die Reise wird meist als Rundfahrt ab Luxor angelegt oder mit Bahariya und der Weißen Wüste zu einer vollständigen Runde durch die Westliche Wüste verbunden.",
      "Von Reisen im Sommer ist hier abzuraten.",
    ],
    faqs: [
      {
        q: "Wie erreicht man Charga und Dachla?",
        a: "Auf der Straße. Am praktischsten ist die Anfahrt von Luxor nach Charga, etwa drei bis vier Stunden, mit Weiterfahrt nach Dachla am folgenden Tag. Wer die ganze Westliche Wüste bereist, kann nach Norden über Farafra zur Weißen Wüste und nach Bahariya weiterfahren und nach Kairo zurückkehren.",
      },
      {
        q: "Für wen sind diese Oasen gedacht?",
        a: "Für Reisende auf einem zweiten oder längeren Ägyptenbesuch — oder für alle, denen leere Stätten mehr bedeuten als berühmte. Die Monumente sind bemerkenswert, und oft haben Sie sie für sich allein, aber die Fahrten sind lang und der Komfort bescheiden.",
      },
      {
        q: "Wie viel Zeit sollte ich einplanen?",
        a: "Drei bis vier Nächte für beide Oasen ab Luxor. Charga allein lässt sich in einer langen Zweitagesfahrt sehen. Mit der Weißen Wüste und Bahariya wird daraus eine Runde von etwa einer Woche.",
      },
    ],
    photos: [
      { alt: "Flache Lehmziegeldächer des alten Al-Qasr in der Oase Dakhla mit Dattelpalmenhain und Wüste dahinter", label: "Al-Qasr" },
      { alt: "Sandsteintor und Säulen des Hibis-Tempels in der Oase Kharga mit Palmen im Hintergrund", label: "Hibis-Tempel" },
      { alt: "Lehmziegel-Grabkapellen mit Bogennischen an einem Hang in der Nekropole Bagawat, Oase Kharga", label: "Bagawat" },
    ],
  },

  // ===== Minya & Middle Egypt =====
  {
    id: "minya",
    localeSlug: "minia-mittelaegypten",
    metaTitle: "Minia & Mittelägypten — Beni Hasan und Tell el-Amarna | Kemet",
    metaDescription:
      "Mittelägypten ab Kairo: die bemalten Gräber von Beni Hasan, Echnatons Stadt in Tell el-Amarna, Tuna el-Gebel und Hermopolis — und wie sie in die Reise passen.",
    keywords:
      "minia ägypten, mittelägypten reise, tell el-amarna besuch, beni hasan gräber, tuna el-gebel, echnaton stadt amarna",
    name: "Minia & Mittelägypten",
    summary:
      "Der Abschnitt des Nils, den die meisten Reisen auslassen: die bemalten Gräber von Beni Hasan, Echnatons Stadt in Tell el-Amarna und die Nekropole von Tuna el-Gebel.",
    description:
      "Zwischen Kairo und Luxor liegt Mittelägypten und in seiner Mitte die Stadt Minia am Fluss, etwa 245 Kilometer südlich der Hauptstadt. Nur wenige Reiserouten halten hier, und genau das ist der Grund, es zu tun. In Beni Hasan sind die Gräber, die für die Gaufürsten des Mittleren Reiches in die Felswand geschlagen wurden, mit Ringern, Jägern, Akrobaten und Handwerkern bemalt — der Alltag vor viertausend Jahren, in Reihen. In Tell el-Amarna bauten der Pharao Echnaton und Nofretete eine neue Hauptstadt für einen einzigen Gott, die binnen einer Generation wieder aufgegeben wurde; ihre Gräber und Grenzstelen stehen noch am Rand einer leeren Ebene. Weiter südlich birgt Tuna el-Gebel das Grab des Petosiris, in seinen Reliefs halb ägyptisch und halb griechisch, und Galerien, in denen Tausende mumifizierter Ibisse und Paviane für den Gott Thot niedergelegt wurden.",
    stay: "1–2 Nächte",
    climate: "Klima des Niltals: warme, trockene Tage von Oktober bis April; heiß von Mai bis September.",
    whyVisit: [
      "Bemalte Gräber mit fast keinen anderen Besuchern",
      "Die Stadt Echnatons und Nofretetes, in der Ägyptens seltsamste Herrschaft gelebt wurde",
      "Das fehlende Kapitel zwischen Kairo und Luxor",
    ],
    highlights: [
      "Die bemalten Gräber von Beni Hasan, aus dem Mittleren Reich",
      "Tell el-Amarna — die Nordgräber und das Königsgrab von Echnatons Stadt",
      "Das Grab des Petosiris und die Tierkatakomben in Tuna el-Gebel",
      "Die Überreste von Hermopolis und seine kolossalen Paviane des Thot",
      "Die Nil-Corniche von Minia am Abend",
    ],
    thingsToKnow: [
      "Minia liegt etwa drei bis dreieinhalb Stunden auf der Straße von Kairo und zudem an der Hauptbahnstrecke.",
      "Die Stätten verteilen sich über beide Ufer; zwei volle Tage decken sie ohne Eile ab, ein Tag reicht in zügigem Tempo für Beni Hasan und Amarna.",
      "Tell el-Amarna belohnt die Vorstellungskraft mehr als das Auge: Von der Stadt selbst steht wenig, und eine ägyptologische Reiseleitung macht den Unterschied.",
      "Hotels sind rar und einfach im Vergleich zu Kairo oder Luxor.",
    ],
    faqs: [
      {
        q: "Lohnt es sich, Minia in eine Reise aufzunehmen?",
        a: "Bei einem ersten Besuch von einer Woche meist nicht — Kairo, Luxor und Assuan gehen vor. Bei einer längeren oder zweiten Reise, oder für alle, die Echnaton und die Amarna-Zeit anzieht, ist es eine der lohnendsten Ergänzungen in Ägypten, und Sie teilen die Stätten mit fast niemandem.",
      },
      {
        q: "Was gibt es in Tell el-Amarna zu sehen?",
        a: "Die Felsgräber von Echnatons Beamten, mit ihren Reliefs der königlichen Familie unter den Strahlen der Sonnenscheibe; das Königsgrab in seinem Wüstental; und die Grenzstelen, die die Stadt absteckten. Von der Stadt selbst sind nur Fundamente geblieben — weshalb eine gute ägyptologische Reiseleitung hier unverzichtbar ist.",
      },
      {
        q: "Wie füge ich Mittelägypten zwischen Kairo und Luxor ein?",
        a: "Am einfachsten auf der Straße ab Kairo mit einer oder zwei Nächten in Minia und anschließender Weiterreise nach Süden auf der Straße oder mit der Bahn. Es geht auch als zweitägiger Ausflug ab Kairo und zurück.",
      },
    ],
    photos: [
      { alt: "Kleines Ruderboot auf dem ruhigen Nil bei Minya, am anderen Ufer Palmen und helle Kalksteinfelsen", label: "Nil bei Minya" },
      { alt: "Vorhalle mit zwei in den Fels gehauenen Säulen am Eingang eines Grabes in der Kalksteinklippe bei Beni Hasan", label: "Beni Hasan" },
      { alt: "Tempelförmiges Grab des Petosiris mit vier Säulen und Schrankenwänden im Sand bei Tuna el-Gebel", label: "Tuna el-Gebel" },
    ],
  },

  // ===== Dendera & Abydos =====
  {
    id: "dendera-abydos",
    localeSlug: "dendera-und-abydos",
    metaTitle: "Dendera & Abydos ab Luxor — Hathor und Sethos I. | Kemet",
    metaDescription:
      "Dendera und Abydos als Tagesausflug ab Luxor: die farbigen Decken des Hathor-Tempels, die Reliefs im Tempel Sethos' I., die Königsliste und das Osireion.",
    keywords:
      "dendera tempel, abydos tempel, dendera abydos ausflug ab luxor, hathor tempel dendera, sethos tempel abydos, königsliste von abydos",
    name: "Dendera & Abydos",
    summary:
      "Zwei Tempel nördlich von Luxor, die viele Reisende über die berühmten stellen: der Hathor-Tempel in Dendera mit seinen farbigen Decken und der Tempel Sethos' I. in Abydos.",
    description:
      "Nördlich von Luxor, abseits der Kreuzfahrtroute, stehen zwei der besterhaltenen Tempel Ägyptens. Dendera, etwa sechzig Kilometer flussabwärts bei Qena, ist der Tempel der Hathor: unter den letzten Ptolemäern und den ersten römischen Kaisern erbaut, überdacht und nahezu vollständig, mit astronomischen Decken, deren Blautöne durch Reinigung ihre Leuchtkraft zurückerhalten haben, Krypten in den Mauern, Kapellen auf dem Dach und einem Relief Kleopatras VII. und ihres Sohnes Caesarion an der Rückwand. Abydos, weiter nördlich, war der heiligste Boden Ägyptens, das Kultzentrum des Osiris. Der Tempel, den Sethos I. dort um 1290 v. Chr. errichten ließ, birgt Reliefs, die viele für die feinsten halten, die je in Ägypten gemeißelt wurden, und die noch immer ihre Farbe tragen, sowie die Königsliste von Abydos, ein Verzeichnis von sechsundsiebzig Pharaonen. Dahinter liegt das Osireion, eine versenkte Halle aus Granit.",
    stay: "Ein Tag ab Luxor",
    climate: "Oberägypten: warm, trocken und sonnig von Oktober bis April; sehr heiß von Mai bis September.",
    whyVisit: [
      "Farbe, wie die alten Ägypter sie sahen",
      "Reliefkunst von einer Qualität, an die die größeren Tempel nicht heranreichen",
      "Große Tempel ohne den Andrang",
    ],
    highlights: [
      "Die farbigen astronomischen Decken des Hathor-Tempels in Dendera",
      "Die Dachkapellen und Krypten von Dendera",
      "Das Relief Kleopatras VII. und Caesarions an der Rückwand von Dendera",
      "Die bemalten Reliefs im Tempel Sethos' I. in Abydos",
      "Die Königsliste von Abydos und das Osireion",
    ],
    thingsToKnow: [
      "Dendera liegt etwa eine bis anderthalb Stunden von Luxor entfernt, Abydos etwa zweieinhalb bis drei Stunden.",
      "Beide an einem Tag zu sehen, ergibt einen langen, aber sehr guten Tag, meist zehn bis elf Stunden von Tür zu Tür. Dendera allein ist ein bequemer halber Tag.",
      "Keiner der beiden liegt an der üblichen Nilkreuzfahrt-Route, deshalb sind sie weit weniger besucht als die Stätten in Luxor selbst.",
      "Die Tierkreisdecke in Dendera ist ein Abguss; das Original befindet sich seit dem neunzehnten Jahrhundert im Louvre.",
    ],
    faqs: [
      {
        q: "Lassen sich Dendera und Abydos an einem Tag ab Luxor besuchen?",
        a: "Ja, und die meisten, die es tun, nennen es einen Höhepunkt ihrer Reise. Es ist ein voller Tag von etwa zehn bis elf Stunden, mit Abydos zuerst, solange der Tag noch kühl ist, und Dendera auf dem Rückweg. Bei weniger Zeit ist Dendera allein ein bequemer Halbtagesausflug.",
      },
      {
        q: "Welchen soll ich wählen, wenn ich nur einen sehen kann?",
        a: "Dendera, wenn Sie den vollständigeren Bau und die berühmten Decken möchten — und eine kürzere Fahrt. Abydos, wenn Ihnen die Qualität der Reliefs und die Bedeutung des Ortes in der ägyptischen Religion am wichtigsten sind. Die beiden sind verschieden genug, dass es den langen Tag wert ist, beide zu sehen.",
      },
      {
        q: "Warum sind diese Tempel so gut erhalten?",
        a: "Dendera ist spät — unter den letzten Ptolemäern und den Römern erbaut —, und jahrhundertelang schützten Sand und ein darüber gebautes Dorf seine Mauern und sein Dach. In Abydos haben die überdachten Hallen im Tempel Sethos' I. die Reliefs und ihre Bemalung geschützt.",
      },
    ],
    photos: [
      { alt: "Hathor-Säulen und blau bemalte Decke in der Säulenhalle des Hathor-Tempels von Dendera", label: "Dendera" },
      { alt: "Bemaltes Relief des Königs, der heiligen Barken Weihrauch darbringt, im Tempel Sethos' I. in Abydos", label: "Tempel Sethos' I." },
      { alt: "Mächtige Granitpfeiler stehen im grünen Wasser in der versunkenen Halle des Osireions von Abydos", label: "Osireion" },
    ],
  },
];
