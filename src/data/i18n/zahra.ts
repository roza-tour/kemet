// ---------------------------------------------------------------------------
// The Oberoi Zahra, in the nine other languages.
//
// The English page is pages/oberoi-zahra-nile-cruise.astro with its words in
// data/zahra.ts — read that file's header before changing a fact here. The
// same rules hold in every language: every figure is the ship's own
// (oberoihotels.com, read 13 November 2026), what the ship does not publish is
// left out, there is no price, and the page says the ship is Oberoi's and the
// photographs are of the route.
//
// One group in translation-groups.json ("oberoi-zahra") ties the ten pages
// together. Each language's Nile-cruise page links here, so none is an orphan.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";

const base = { groupId: "oberoi-zahra", symbol: "boat", crumb: "The Oberoi Zahra", h1: "The Oberoi Zahra" } as const;

/** The four photographs, with the words in the page's language. */
const photos = (w: { philae: [string, string]; karnak: [string, string]; kings: [string, string]; nile: [string, string] }) => [
  { alt: w.philae[0], label: w.philae[1], src: "/images/aswan/aswan-philae-temple-island.webp", width: 1080, height: 810 },
  { alt: w.karnak[0], label: w.karnak[1], src: "/images/luxor/luxor-karnak-hypostyle-hall.webp", width: 652, height: 980 },
  { alt: w.kings[0], label: w.kings[1], src: "/images/luxor/luxor-valley-of-the-kings-tomb.webp", width: 1000, height: 600 },
  { alt: w.nile[0], label: w.nile[1], src: "/images/aswan/aswan-felucca-sailing-nile.webp", width: 736, height: 981 },
];

// ===== Deutsch ===============================================================
export const deZahra: LocalizedPage = {
  ...base,
  title: "The Oberoi Zahra — Luxus-Nilkreuzfahrt auf Anfrage | Kemet",
  description:
    "The Oberoi Zahra zwischen Luxor und Assuan: 28 Kabinen und Suiten mit Nilblick, 3, 4 oder 7 Nächte. Buchung auf Anfrage, Ihre Reise darum herum geplant.",
  keywords: "oberoi zahra, oberoi zahra nilkreuzfahrt, luxus nilkreuzfahrt, nilkreuzfahrt luxor assuan luxus, oberoi nilschiff",
  standfirst: "Achtundzwanzig Kabinen und Suiten auf dem Fluss zwischen Luxor und Assuan — jede einzelne mit Blick aufs Wasser.",
  lede:
    "The Oberoi Zahra ist ein Luxus-Nilschiff, betrieben von Oberoi Hotels & Resorts, das zwischen Luxor und Assuan auf Routen von drei, vier und sieben Nächten fährt. An Bord: 28 Kabinen und Suiten, alle zum Fluss, ein elf Meter langer, temperierter Pool, ein Spa und ein À-la-carte-Restaurant. Kemet bucht das Schiff auf Anfrage: Sie nennen uns Ihre Daten, wir klären Verfügbarkeit und Preis schriftlich mit dem Schiff und planen den Rest Ihrer Reise um die Fahrt herum.",
  facts: [
    { label: "Strecke", value: "Luxor ⇄ Assuan" },
    { label: "Fahrten", value: "3, 4 oder 7 Nächte" },
    { label: "An Bord", value: "28 Kabinen und Suiten" },
    { label: "Preis", value: "Auf Anfrage" },
  ],
  sections: [
    {
      title: "Jedes Fenster geht auf den Fluss",
      body:
        "Die Luxury Cabin misst 26,4 m² für zwei: ein Kingsize-Bett oder zwei Einzelbetten neben einem großen Fenster zum Fluss, dazu ein Tageslichtbad, dessen verglaste Regendusche ebenfalls auf den Nil blickt. Die Luxury Suite with Two Bedrooms hat 92 m² für vier Gäste — ein Schlafzimmer mit Kingsize-Bett, eines mit zwei Einzelbetten, ein separater Wohn- und Essbereich hinter raumhohen Fenstern und eine Terrasse mit Liegen. Die Luxury Suite misst mit ihrer Terrasse 115 m², davon 50 m² innen: Schlafzimmer, Wohnzimmer und ein eigener Essbereich, draußen eine Terrasse mit Sonnenliegen und ein beheizter Whirlpool nur für Sie.",
    },
    {
      title: "Zwischen den Tempeln",
      body:
        "Auf dem Oberdeck liegt ein elf Meter langer, temperierter Pool; daneben gibt es leichte Gerichte und eine Cocktailbar. Das Oberoi Spa bietet Massagen, Gesichtsbehandlungen, Peelings und Packungen sowie Yoga; Behandlungen werden an Bord berechnet. Das Restaurant serviert morgens, mittags und abends à la carte von einer täglich wechselnden Karte und richtet sich nach Voranmeldung auf Ernährungswünsche ein. In der Club Lounge gibt es Nachmittagstee und auf jeder Fahrt einen Abend mit Livemusik und einer nubischen Darbietung; die Library Lounge schenkt bis Mitternacht aus.",
    },
    {
      title: "Drei, vier oder sieben Nächte",
      body:
        "Das Schiff fährt an festen Tagen, wie sein Kalender sie veröffentlicht; Einschiffung ist um 12 Uhr, Ausschiffung um 8 Uhr. Von Assuan nach Luxor, drei Nächte, samstags: Hochdamm und Philae, Kom Ombo und Edfu, dann das Westufer von Luxor — Tal der Könige, Medinet Habu und die Memnonkolosse — sowie Luxor- und Karnak-Tempel. Von Luxor nach Assuan, vier Nächte, dienstags: Luxor und Karnak, das Westufer mit dem Tal der Könige, Deir el-Medina, den Memnonkolossen und dem Tempel der Hatschepsut, Edfu und Kom Ombo, dann Assuan mit Hochdamm, Philae und dem Botanischen Garten. Fahrten über sieben Nächte gibt es in beiden Richtungen an wenigen Terminen im Jahr; sie ergänzen Dendera, die Gräber der Noblen und das Luxor-Museum, Abu Simbel ist ein optionaler Ausflug.",
    },
    {
      title: "Was eingeschlossen ist",
      body:
        "Nach den Bedingungen des Schiffes umfasst die Kreuzfahrt alle Mahlzeiten an Bord, die Besichtigungen der Route mit den Ägyptologen des Schiffes — auf Englisch, andere Sprachen nach Voranmeldung —, die Eintrittsgelder der besuchten Monumente, die Transfers zwischen Schiff und Flughafen Luxor oder Assuan sowie Internet an Bord. Spa-Behandlungen, Wäscheservice und Minibar werden an Bord berechnet. Bei den Getränken nennen wir Ihnen im Angebot, was Ihr Preis abdeckt.",
    },
    {
      title: "Auf Anfrage, und schriftlich",
      body:
        "Bei achtundzwanzig Kabinen und Suiten und festen Abfahrtstagen ist die Frage, ob Platz ist, eine Frage an eine bestimmte Fahrt — und der Preis ebenso. Deshalb steht auf dieser Seite keiner. Nennen Sie uns Ihre Daten und die Zahl der Reisenden; wir fragen beim Schiff an, welche Kabinen und Suiten frei sind und zu welchem Preis, und Sie erhalten beides schriftlich. Vorher wird nichts reserviert und nichts berechnet. Um die Fahrt herum planen wir den Rest: Kairo davor, Abu Simbel oder das Rote Meer danach, Flüge und private Transfers. Die Besichtigungen des Schiffes finden in kleinen Gruppen seiner Gäste statt; wenn Sie die Tempel lieber nur mit Ihrer eigenen Gruppe sehen, organisieren wir für dieselben Stationen Ihren eigenen Ägyptologen und Wagen.",
    },
    {
      title: "Wessen Schiff es ist",
      body:
        "The Oberoi Zahra wird von Oberoi Hotels & Resorts betrieben. Kemet ist ein unabhängiges Reiseunternehmen: Wir buchen das Schiff für unsere Gäste und planen die Reise darum herum. Die Leser von Travel + Leisure wählten die Nilschiffe von Oberoi in den World's Best Awards 2025 und 2026 zur Nummer eins der Flusskreuzfahrt-Reedereien; die Zahra selbst wurde bei den World Cruise Awards 2021 als bestes Flusskreuzfahrtschiff Afrikas ausgezeichnet. Die Angaben zum Schiff entsprechen dem, was das Schiff veröffentlicht, geprüft im November 2026, und werden in jedem Angebot erneut bestätigt. Die Fotos auf dieser Seite zeigen den Fluss und die Tempel der Route.",
    },
  ],
  faqs: [
    { q: "Was kostet The Oberoi Zahra?", a: "Einen festen Preis gibt es nicht zu nennen. Er hängt von der Fahrt, der Saison und der Kabine oder Suite ab, und das Schiff legt ihn fest. Wir fragen für Ihre Daten an und senden Ihnen die Summe schriftlich, mit allem, was sie enthält, bevor irgendetwas bezahlt wird." },
    { q: "Ist das Schiff privat?", a: "Nein. Sie teilen das Schiff mit den Gästen der anderen Kabinen — 28 Kabinen und Suiten insgesamt. Ihre Kabine gehört Ihnen, in den Suiten auch die Terrasse. Für ein Schiff ganz ohne andere Gäste chartern wir auf derselben Strecke eine Dahabiya, ein Segelschiff mit wenigen Kabinen." },
    { q: "Gehören die Tempelbesuche zur Kreuzfahrt?", a: "Nach den veröffentlichten Bedingungen des Schiffes ja: Die Besichtigungen der Route, die Führung und die Eintritte sind eingeschlossen, geführt von den Ägyptologen des Schiffes auf Englisch oder nach Voranmeldung in anderen Sprachen. Wir bestätigen es in Ihrem Angebot. Ein privater Ägyptologe nur für Ihre Gruppe lässt sich zusätzlich organisieren." },
    { q: "Zahra oder Philae — welches Oberoi-Schiff?", a: "Es sind Schwesterschiffe. Die Philae ist das kleinere: 22 Kabinen und Suiten, größere Standardkabinen mit 36 m² und Fahrten über vier oder sechs Nächte. Die Zahra hat 28, fährt drei, vier oder sieben Nächte und bietet die größte Suite der beiden — 115 m² mit Terrasse und eigenem Whirlpool. In der Praxis entscheiden meist Ihre Daten." },
    { q: "Können Kinder mitfahren?", a: "Das Schiff nimmt keine Kinder unter sieben Jahren auf, und ältere Kinder erhalten nach seinen Regeln eine eigene Kabine. Nennen Sie uns bei der Anfrage das Alter, und wir klären mit dem Schiff, was zu Ihrer Familie passt." },
    { q: "Wann fährt das Schiff?", a: "Das ganze Jahr über. In den veröffentlichten Kalendern für 2026 und 2027 gibt es im Juni keine Abfahrten. Oktober bis April ist die angenehme Zeit auf dem Fluss; von Juni bis August erreicht Oberägypten 40 °C, und die Besichtigungen beginnen früh am Tag." },
    { q: "Kann man das ganze Schiff für eine Gruppe nehmen?", a: "Einen Charter veröffentlicht das Schiff nicht. Für einen Anlass fragen wir in Ihrem Namen für ein bestimmtes Datum an. Wer das Schiff ganz für sich haben möchte, ist mit einer gecharterten Dahabiya auf der sicheren Seite." },
  ],
  cta: {
    heading: "Nennen Sie uns Ihre Daten",
    text: "Reisedaten und die Zahl der Reisenden genügen. Wir fragen beim Schiff an und antworten schriftlich mit den freien Kabinen oder Suiten und dem Preis.",
    whatsapp: "Hallo Kemet — ich interessiere mich für The Oberoi Zahra. Meine Reisedaten: ",
    emailSubject: "The Oberoi Zahra — Anfrage",
  },
  moreLabel: "Mehr dazu",
  moreText: "Die Fahrten Tag für Tag und die Einrichtungen des Schiffes stehen ausführlich auf der englischen Seite.",
  links: [{ label: "Nilkreuzfahrt: Dahabiya oder Kreuzfahrtschiff", route: "de/nilkreuzfahrt.html" }],
  photos: photos({
    philae: ["Der Inseltempel von Philae bei Assuan, über das Wasser gesehen", "Philae"],
    karnak: ["Die Säulen der Hypostylhalle von Karnak in Luxor", "Karnak"],
    kings: ["Ein ausgemaltes Königsgrab im Tal der Könige", "Tal der Könige"],
    nile: ["Der Nil bei Assuan, eine Feluke unter Segeln", "Der Nil bei Assuan"],
  }),
};

// ===== Français ==============================================================
export const frZahra: LocalizedPage = {
  ...base,
  title: "The Oberoi Zahra — croisière de luxe sur le Nil | Kemet",
  description:
    "The Oberoi Zahra entre Louxor et Assouan : 28 cabines et suites avec vue sur le Nil, 3, 4 ou 7 nuits. Réservation sur demande, votre voyage bâti autour.",
  keywords: "oberoi zahra, oberoi zahra croisiere nil, croisiere de luxe sur le nil, croisiere louxor assouan luxe, bateau oberoi nil",
  standfirst: "Vingt-huit cabines et suites sur le fleuve, entre Louxor et Assouan — toutes tournées vers l'eau.",
  lede:
    "The Oberoi Zahra est un navire de croisière de luxe exploité par Oberoi Hotels & Resorts, qui navigue entre Louxor et Assouan sur des itinéraires de trois, quatre et sept nuits. Il compte 28 cabines et suites, toutes face au fleuve, une piscine de onze mètres à température contrôlée, un spa et un restaurant à la carte. Kemet le réserve sur demande : vous nous donnez vos dates, nous confirmons par écrit la disponibilité et le tarif auprès du navire, et nous bâtissons le reste de votre voyage autour de la croisière.",
  facts: [
    { label: "Trajet", value: "Louxor ⇄ Assouan" },
    { label: "Croisières", value: "3, 4 ou 7 nuits" },
    { label: "À bord", value: "28 cabines et suites" },
    { label: "Prix", value: "Sur demande" },
  ],
  sections: [
    {
      title: "Chaque fenêtre donne sur le fleuve",
      body:
        "La Luxury Cabin fait 26,4 m² pour deux : un grand lit ou deux lits jumeaux près d'une large fenêtre sur le fleuve, et une salle de bains à la lumière du jour dont la douche de pluie vitrée regarde elle aussi le Nil. La Luxury Suite with Two Bedrooms offre 92 m² pour quatre personnes — une chambre à grand lit, une chambre à lits jumeaux, un salon et un espace repas séparés derrière des baies du sol au plafond, et une terrasse avec transats. La Luxury Suite mesure 115 m² avec sa terrasse, dont 50 m² à l'intérieur : une chambre, un salon et un coin repas privé ; dehors, une terrasse avec bains de soleil et un bain à remous chauffé rien que pour vous.",
    },
    {
      title: "Entre les temples",
      body:
        "Sur le pont supérieur, une piscine de onze mètres à température contrôlée, avec des repas légers et un bar à cocktails à côté. The Oberoi Spa propose massages, soins du visage, gommages et enveloppements, ainsi que du yoga ; les soins sont facturés à bord. Le Restaurant sert à la carte au petit déjeuner, au déjeuner et au dîner, avec un menu qui change chaque jour, et s'adapte aux régimes particuliers sur demande préalable. Le Club Lounge sert le thé de l'après-midi et, à chaque croisière, accueille une soirée de musique live et un spectacle nubien ; le Library Lounge sert des boissons jusqu'à minuit.",
    },
    {
      title: "Trois, quatre ou sept nuits",
      body:
        "Le navire part à jours fixes, tels que son calendrier les publie ; l'embarquement est à midi, le débarquement à 8 h. D'Assouan à Louxor, trois nuits, le samedi : le Haut Barrage et Philae, Kôm Ombo et Edfou, puis la rive ouest de Louxor — la Vallée des Rois, Médinet Habou et les colosses de Memnon — et les temples de Louxor et de Karnak. De Louxor à Assouan, quatre nuits, le mardi : Louxor et Karnak, la rive ouest avec la Vallée des Rois, Deir el-Médineh, les colosses de Memnon et le temple d'Hatchepsout, Edfou et Kôm Ombo, puis Assouan avec le Haut Barrage, Philae et le Jardin botanique. Les croisières de sept nuits partent dans les deux sens à quelques dates par an ; elles ajoutent Dendérah, la Vallée des Nobles et le musée de Louxor, et Abou Simbel est une visite en option.",
    },
    {
      title: "Ce qui est compris",
      body:
        "Selon les conditions du navire, la croisière comprend tous les repas à bord, les visites de l'itinéraire avec les égyptologues du navire — en anglais, d'autres langues sur demande préalable —, les droits d'entrée des monuments visités, les transferts entre le navire et l'aéroport de Louxor ou d'Assouan, et l'internet à bord. Les soins du spa, la blanchisserie et le minibar sont facturés à bord. Pour les boissons, nous précisons dans votre devis ce que votre tarif couvre.",
    },
    {
      title: "Sur demande, et par écrit",
      body:
        "Avec vingt-huit cabines et suites et des départs à jours fixes, savoir s'il reste de la place est une question posée à une croisière précise — le tarif aussi. C'est pourquoi cette page n'affiche aucun prix. Donnez-nous vos dates et le nombre de voyageurs ; nous demandons au navire quelles cabines et suites sont libres et à quel tarif, et vous recevez les deux par écrit. Rien n'est bloqué ni facturé avant cela. Autour de la croisière, nous organisons le reste : Le Caire avant, Abou Simbel ou la mer Rouge après, les vols et les transferts privés. Les visites du navire se font en petits groupes de ses passagers ; si vous préférez voir les temples avec votre seul groupe, nous prévoyons votre propre égyptologue et votre voiture pour les mêmes escales.",
    },
    {
      title: "À qui est ce navire",
      body:
        "The Oberoi Zahra est exploité par Oberoi Hotels & Resorts. Kemet est une agence de voyages indépendante : nous réservons le navire pour nos voyageurs et bâtissons le voyage autour. Les lecteurs de Travel + Leisure ont classé les navires d'Oberoi sur le Nil première compagnie de croisière fluviale aux World's Best Awards 2025 et 2026 ; le Zahra lui-même a été nommé meilleur navire de croisière fluviale d'Afrique aux World Cruise Awards 2021. Les informations sur le navire sont celles qu'il publie, vérifiées en novembre 2026, et sont confirmées de nouveau dans chaque devis. Les photographies de cette page montrent le fleuve et les temples de l'itinéraire.",
    },
  ],
  faqs: [
    { q: "Combien coûte The Oberoi Zahra ?", a: "Il n'y a pas de prix unique à afficher. Le tarif dépend de la croisière, de la saison et de la cabine ou de la suite, et c'est au navire de le fixer. Nous le demandons pour vos dates et vous envoyons le montant par écrit, avec ce qu'il comprend, avant tout paiement." },
    { q: "Le navire est-il privatif ?", a: "Non. Vous partagez le navire avec les passagers des autres cabines — 28 cabines et suites en tout. Votre cabine est à vous, et dans les suites la terrasse aussi. Pour un bateau sans personne d'autre à bord, nous affrétons sur le même tronçon un dahabieh, un voilier de quelques cabines." },
    { q: "Les visites des temples font-elles partie de la croisière ?", a: "Selon les conditions publiées par le navire, oui : les visites de l'itinéraire, le guidage et les entrées sont compris, avec les égyptologues du navire en anglais, ou dans d'autres langues sur demande préalable. Nous le confirmons dans votre devis. Un égyptologue privé pour votre seul groupe peut être prévu en plus." },
    { q: "Zahra ou Philae : quel navire Oberoi ?", a: "Ce sont deux navires jumeaux. Le Philae est le plus petit : 22 cabines et suites, des cabines standard plus grandes, de 36 m², et des croisières de quatre ou six nuits. Le Zahra en compte 28, navigue trois, quatre ou sept nuits, et possède la plus grande suite des deux — 115 m² avec sa terrasse et un bain à remous privé. En pratique, ce sont souvent vos dates qui décident." },
    { q: "Les enfants sont-ils acceptés ?", a: "Le navire n'accueille pas les enfants de moins de sept ans, et son règlement attribue aux plus grands une cabine à part. Indiquez-nous les âges dans votre demande et nous voyons avec le navire ce qui convient à votre famille." },
    { q: "Quand navigue-t-il ?", a: "Toute l'année. Les calendriers publiés pour 2026 et 2027 ne comptent aucun départ en juin. D'octobre à avril, la saison est agréable sur le fleuve ; de juin à août, la Haute-Égypte atteint 40 °C et les visites commencent tôt." },
    { q: "Peut-on réserver le navire entier pour un groupe ?", a: "Le navire ne publie pas d'offre d'affrètement. Pour une occasion, nous posons la question en votre nom pour une date précise. Si vous voulez un bateau entièrement à vous, le dahabieh affrété reste la voie sûre." },
  ],
  cta: {
    heading: "Donnez-nous vos dates",
    text: "Vos dates et le nombre de voyageurs suffisent. Nous interrogeons le navire et vous répondons par écrit, avec les cabines ou suites libres et le tarif.",
    whatsapp: "Bonjour Kemet — je souhaite me renseigner sur The Oberoi Zahra. Mes dates : ",
    emailSubject: "The Oberoi Zahra — demande",
  },
  moreLabel: "Pour aller plus loin",
  moreText: "Les croisières jour par jour et les équipements du navire sont détaillés sur la page en anglais.",
  links: [{ label: "Croisière sur le Nil : dahabieh ou navire", route: "fr/croisiere-sur-le-nil.html" }],
  photos: photos({
    philae: ["Le temple de Philae sur son île à Assouan, vu depuis l'eau", "Philae"],
    karnak: ["Les colonnes de la salle hypostyle de Karnak, à Louxor", "Karnak"],
    kings: ["Une tombe royale peinte dans la Vallée des Rois", "Vallée des Rois"],
    nile: ["Le Nil à Assouan, une felouque sous voile", "Le Nil à Assouan"],
  }),
};

// ===== Italiano ==============================================================
export const itZahra: LocalizedPage = {
  ...base,
  title: "The Oberoi Zahra — crociera di lusso sul Nilo | Kemet",
  description:
    "The Oberoi Zahra tra Luxor e Assuan: 28 cabine e suite con vista sul Nilo, 3, 4 o 7 notti. Prenotazione su richiesta, con il viaggio costruito intorno.",
  keywords: "oberoi zahra, oberoi zahra crociera nilo, crociera di lusso sul nilo, crociera luxor assuan lusso, motonave oberoi nilo",
  standfirst: "Ventotto cabine e suite sul fiume tra Luxor e Assuan — ognuna affacciata sull'acqua.",
  lede:
    "The Oberoi Zahra è una motonave di lusso gestita da Oberoi Hotels & Resorts, che naviga tra Luxor e Assuan con itinerari di tre, quattro e sette notti. Ha 28 cabine e suite, tutte affacciate sul fiume, una piscina di undici metri a temperatura controllata, una spa e un ristorante à la carte. Kemet la prenota su richiesta: ci indicate le date, confermiamo per iscritto disponibilità e tariffa con la nave e costruiamo il resto del viaggio intorno alla crociera.",
  facts: [
    { label: "Tratta", value: "Luxor ⇄ Assuan" },
    { label: "Crociere", value: "3, 4 o 7 notti" },
    { label: "A bordo", value: "28 cabine e suite" },
    { label: "Prezzo", value: "Su richiesta" },
  ],
  sections: [
    {
      title: "Ogni finestra dà sul fiume",
      body:
        "La Luxury Cabin misura 26,4 m² per due: un letto king o due letti singoli accanto a una grande finestra sul fiume, e un bagno illuminato dalla luce naturale la cui doccia a pioggia vetrata guarda anch'essa il Nilo. La Luxury Suite with Two Bedrooms ha 92 m² per quattro persone — una camera con letto king e una con due letti, soggiorno e zona pranzo separati dietro vetrate a tutta altezza, e una terrazza con lettini. La Luxury Suite misura 115 m² con la terrazza, di cui 50 m² interni: camera, soggiorno e zona pranzo privata; fuori, una terrazza con lettini e una vasca idromassaggio riscaldata tutta per voi.",
    },
    {
      title: "Tra un tempio e l'altro",
      body:
        "Sul ponte superiore c'è una piscina di undici metri a temperatura controllata, con pasti leggeri e un cocktail bar accanto. The Oberoi Spa propone massaggi, trattamenti viso, scrub e impacchi, oltre allo yoga; i trattamenti si pagano a bordo. Il Ristorante serve à la carte a colazione, pranzo e cena, con un menù che cambia ogni giorno, e con preavviso tiene conto delle esigenze alimentari. Nel Club Lounge c'è il tè del pomeriggio e, a ogni crociera, una serata di musica dal vivo con uno spettacolo nubiano; il Library Lounge serve da bere fino a mezzanotte.",
    },
    {
      title: "Tre, quattro o sette notti",
      body:
        "La nave parte in giorni fissi, come li pubblica il suo calendario; l'imbarco è a mezzogiorno, lo sbarco alle 8. Da Assuan a Luxor, tre notti, di sabato: l'Alta Diga e File, Kom Ombo ed Edfu, poi la riva occidentale di Luxor — la Valle dei Re, Medinet Habu e i Colossi di Memnone — e i templi di Luxor e di Karnak. Da Luxor ad Assuan, quattro notti, di martedì: Luxor e Karnak, la riva occidentale con la Valle dei Re, Deir el-Medina, i Colossi di Memnone e il tempio di Hatshepsut, Edfu e Kom Ombo, poi Assuan con l'Alta Diga, File e il Giardino botanico. Le crociere di sette notti partono in entrambe le direzioni in poche date all'anno; aggiungono Dendera, la Valle dei Nobili e il Museo di Luxor, e Abu Simbel è una visita facoltativa.",
    },
    {
      title: "Che cosa è compreso",
      body:
        "Secondo le condizioni della nave, la crociera comprende tutti i pasti a bordo, le visite dell'itinerario con gli egittologi della nave — in inglese, altre lingue con preavviso —, gli ingressi ai monumenti visitati, i trasferimenti tra la nave e l'aeroporto di Luxor o di Assuan e internet a bordo. I trattamenti della spa, la lavanderia e il minibar si pagano a bordo. Per le bevande, indichiamo nel preventivo che cosa copre la vostra tariffa.",
    },
    {
      title: "Su richiesta, e per iscritto",
      body:
        "Con ventotto cabine e suite e partenze in giorni fissi, sapere se c'è posto è una domanda su una crociera precisa — e così la tariffa. Per questo la pagina non riporta alcun prezzo. Diteci le date e in quanti siete; chiediamo alla nave quali cabine e suite sono libere e a quale tariffa, e ricevete entrambe le cose per iscritto. Prima di allora nulla viene bloccato e nulla addebitato. Intorno alla crociera organizziamo il resto: Il Cairo prima, Abu Simbel o il Mar Rosso dopo, i voli e i trasferimenti privati. Le visite della nave si fanno in piccoli gruppi dei suoi ospiti; se preferite vedere i templi solo con il vostro gruppo, prevediamo il vostro egittologo e la vostra auto per le stesse tappe.",
    },
    {
      title: "Di chi è la nave",
      body:
        "The Oberoi Zahra è gestita da Oberoi Hotels & Resorts. Kemet è un'agenzia di viaggi indipendente: prenotiamo la nave per i nostri ospiti e costruiamo il viaggio intorno. I lettori di Travel + Leisure hanno classificato le navi di Oberoi sul Nilo prima compagnia di crociere fluviali ai World's Best Awards 2025 e 2026; la Zahra è stata nominata miglior nave da crociera fluviale d'Africa ai World Cruise Awards 2021. Le informazioni sulla nave sono quelle che la nave pubblica, verificate a novembre 2026, e vengono confermate di nuovo in ogni preventivo. Le fotografie di questa pagina mostrano il fiume e i templi dell'itinerario.",
    },
  ],
  faqs: [
    { q: "Quanto costa The Oberoi Zahra?", a: "Non c'è un prezzo unico da pubblicare. La tariffa dipende dalla crociera, dalla stagione e dalla cabina o suite, ed è la nave a stabilirla. La chiediamo per le vostre date e vi mandiamo la cifra per iscritto, con ciò che comprende, prima di qualsiasi pagamento." },
    { q: "La nave è privata?", a: "No. Si condivide la nave con gli ospiti delle altre cabine — 28 cabine e suite in tutto. La cabina è vostra, e nelle suite anche la terrazza. Per un'imbarcazione senza nessun altro a bordo, noleggiamo sullo stesso tratto una dahabeya, un veliero di poche cabine." },
    { q: "Le visite ai templi fanno parte della crociera?", a: "Secondo le condizioni pubblicate dalla nave, sì: le visite dell'itinerario, la guida e gli ingressi sono compresi, con gli egittologi della nave in inglese o, con preavviso, in altre lingue. Lo confermiamo nel preventivo. Un egittologo privato solo per il vostro gruppo si può organizzare in aggiunta." },
    { q: "Zahra o Philae: quale nave Oberoi?", a: "Sono navi gemelle. La Philae è la più piccola: 22 cabine e suite, cabine standard più grandi, di 36 m², e crociere di quattro o sei notti. La Zahra ne ha 28, naviga tre, quattro o sette notti e ha la suite più grande delle due — 115 m² con la terrazza e una vasca idromassaggio privata. In pratica, spesso decidono le vostre date." },
    { q: "I bambini possono salire a bordo?", a: "La nave non ospita bambini sotto i sette anni, e il suo regolamento assegna ai più grandi una cabina propria. Indicateci le età nella richiesta e verifichiamo con la nave che cosa è adatto alla vostra famiglia." },
    { q: "Quando naviga?", a: "Tutto l'anno. Nei calendari pubblicati per il 2026 e il 2027 non ci sono partenze a giugno. Da ottobre ad aprile è la stagione piacevole sul fiume; da giugno ad agosto l'Alto Egitto arriva a 40 °C e le visite cominciano presto." },
    { q: "Si può prendere l'intera nave per un gruppo?", a: "La nave non pubblica un'offerta di noleggio esclusivo. Per un'occasione lo chiediamo a vostro nome per una data precisa. Se volete un'imbarcazione tutta per voi, la dahabeya noleggiata è la strada sicura." },
  ],
  cta: {
    heading: "Diteci le vostre date",
    text: "Bastano le date e il numero di viaggiatori. Chiediamo alla nave e vi rispondiamo per iscritto, con le cabine o suite libere e la tariffa.",
    whatsapp: "Buongiorno Kemet — vorrei informazioni su The Oberoi Zahra. Le mie date: ",
    emailSubject: "The Oberoi Zahra — richiesta",
  },
  moreLabel: "Per saperne di più",
  moreText: "Le crociere giorno per giorno e gli spazi della nave sono descritti per esteso nella pagina in inglese.",
  links: [{ label: "Crociera sul Nilo: dahabeya o motonave", route: "it/crociera-sul-nilo.html" }],
  photos: photos({
    philae: ["Il tempio di File sulla sua isola ad Assuan, visto dall'acqua", "File"],
    karnak: ["Le colonne della sala ipostila di Karnak, a Luxor", "Karnak"],
    kings: ["Una tomba reale dipinta nella Valle dei Re", "Valle dei Re"],
    nile: ["Il Nilo ad Assuan, una feluca a vele spiegate", "Il Nilo ad Assuan"],
  }),
};

// ===== Español ===============================================================
export const esZahra: LocalizedPage = {
  ...base,
  title: "The Oberoi Zahra — crucero de lujo por el Nilo | Kemet",
  description:
    "The Oberoi Zahra entre Luxor y Asuán: 28 camarotes y suites con vistas al Nilo, 3, 4 o 7 noches. Reserva bajo petición, con su viaje diseñado alrededor.",
  keywords: "oberoi zahra, oberoi zahra crucero nilo, crucero de lujo por el nilo, crucero luxor asuan lujo, barco oberoi nilo",
  standfirst: "Veintiocho camarotes y suites sobre el río, entre Luxor y Asuán — todos mirando al agua.",
  lede:
    "The Oberoi Zahra es un crucero de lujo por el Nilo operado por Oberoi Hotels & Resorts, que navega entre Luxor y Asuán en itinerarios de tres, cuatro y siete noches. Tiene 28 camarotes y suites, todos frente al río, una piscina de once metros con temperatura controlada, un spa y un restaurante a la carta. Kemet lo reserva bajo petición: usted nos da sus fechas, confirmamos por escrito la disponibilidad y la tarifa con el barco, y diseñamos el resto de su viaje alrededor del crucero.",
  facts: [
    { label: "Ruta", value: "Luxor ⇄ Asuán" },
    { label: "Cruceros", value: "3, 4 o 7 noches" },
    { label: "A bordo", value: "28 camarotes y suites" },
    { label: "Precio", value: "Bajo petición" },
  ],
  sections: [
    {
      title: "Todas las ventanas dan al río",
      body:
        "La Luxury Cabin mide 26,4 m² para dos: una cama king o dos camas junto a un gran ventanal sobre el río, y un baño con luz natural cuya ducha de lluvia acristalada mira también al Nilo. La Luxury Suite with Two Bedrooms tiene 92 m² para cuatro personas — un dormitorio con cama king y otro con dos camas, salón y comedor separados tras ventanales de suelo a techo, y una terraza con tumbonas. La Luxury Suite mide 115 m² con su terraza, 50 m² en el interior: dormitorio, salón y un comedor privado; fuera, una terraza con tumbonas y una bañera de hidromasaje climatizada solo para usted.",
    },
    {
      title: "Entre templo y templo",
      body:
        "En la cubierta superior hay una piscina de once metros con temperatura controlada, con comidas ligeras y un bar de cócteles al lado. The Oberoi Spa ofrece masajes, tratamientos faciales, exfoliaciones y envolturas, además de yoga; los tratamientos se pagan a bordo. El Restaurante sirve a la carta en el desayuno, el almuerzo y la cena, con un menú que cambia cada día, y atiende las necesidades dietéticas con aviso previo. El Club Lounge ofrece el té de la tarde y, en cada crucero, una velada de música en vivo con un espectáculo nubio; el Library Lounge sirve bebidas hasta la medianoche.",
    },
    {
      title: "Tres, cuatro o siete noches",
      body:
        "El barco zarpa en días fijos, tal como los publica su calendario; el embarque es al mediodía y el desembarque a las 8 h. De Asuán a Luxor, tres noches, los sábados: la Alta Presa y File, Kom Ombo y Edfu, y después la orilla occidental de Luxor — el Valle de los Reyes, Medinet Habu y los Colosos de Memnón — y los templos de Luxor y Karnak. De Luxor a Asuán, cuatro noches, los martes: Luxor y Karnak, la orilla occidental con el Valle de los Reyes, Deir el-Medina, los Colosos de Memnón y el templo de Hatshepsut, Edfu y Kom Ombo, y luego Asuán con la Alta Presa, File y el Jardín Botánico. Los cruceros de siete noches salen en ambos sentidos en pocas fechas al año; añaden Dendera, el Valle de los Nobles y el Museo de Luxor, y Abu Simbel es una visita opcional.",
    },
    {
      title: "Qué está incluido",
      body:
        "Según las condiciones del barco, el crucero incluye todas las comidas a bordo, las visitas del itinerario con los egiptólogos del barco — en inglés, otros idiomas con aviso previo —, las entradas a los monumentos visitados, los traslados entre el barco y el aeropuerto de Luxor o de Asuán, e internet a bordo. Los tratamientos de spa, la lavandería y el minibar se pagan a bordo. En cuanto a las bebidas, indicamos en su presupuesto qué cubre su tarifa.",
    },
    {
      title: "Bajo petición, y por escrito",
      body:
        "Con veintiocho camarotes y suites y salidas en días fijos, saber si hay sitio es una pregunta sobre un crucero concreto — y la tarifa también. Por eso esta página no lleva precio. Díganos sus fechas y cuántos viajan; preguntamos al barco qué camarotes y suites están libres y a qué tarifa, y usted recibe ambas cosas por escrito. Antes de eso no se bloquea ni se cobra nada. Alrededor del crucero organizamos el resto: El Cairo antes, Abu Simbel o el mar Rojo después, los vuelos y los traslados privados. Las visitas del barco se hacen en grupos pequeños de sus pasajeros; si prefiere ver los templos solo con su grupo, organizamos su propio egiptólogo y vehículo para las mismas paradas.",
    },
    {
      title: "De quién es el barco",
      body:
        "The Oberoi Zahra está operado por Oberoi Hotels & Resorts. Kemet es una agencia de viajes independiente: reservamos el barco para nuestros viajeros y diseñamos el viaje alrededor. Los lectores de Travel + Leisure situaron a los cruceros de Oberoi en el Nilo como la mejor línea de cruceros fluviales en los World's Best Awards de 2025 y 2026; el Zahra fue elegido mejor barco de crucero fluvial de África en los World Cruise Awards de 2021. Los datos del barco son los que el propio barco publica, comprobados en noviembre de 2026, y se confirman de nuevo en cada presupuesto. Las fotografías de esta página son del río y de los templos de la ruta.",
    },
  ],
  faqs: [
    { q: "¿Cuánto cuesta The Oberoi Zahra?", a: "No hay un precio único que publicar. La tarifa depende del crucero, de la temporada y del camarote o la suite, y es el barco quien la fija. La pedimos para sus fechas y le enviamos la cifra por escrito, con lo que incluye, antes de cualquier pago." },
    { q: "¿El barco es privado?", a: "No. Se comparte el barco con los pasajeros de los demás camarotes — 28 camarotes y suites en total. Su camarote es suyo, y en las suites también la terraza. Para una embarcación sin nadie más a bordo, fletamos en el mismo tramo una dahabiya, un velero de pocos camarotes." },
    { q: "¿Las visitas a los templos forman parte del crucero?", a: "Según las condiciones publicadas por el barco, sí: las visitas del itinerario, el guiado y las entradas están incluidos, con los egiptólogos del barco en inglés o, con aviso previo, en otros idiomas. Lo confirmamos en su presupuesto. Además puede organizarse un egiptólogo privado solo para su grupo." },
    { q: "¿Zahra o Philae: qué barco de Oberoi?", a: "Son barcos gemelos. El Philae es el más pequeño: 22 camarotes y suites, camarotes estándar más grandes, de 36 m², y cruceros de cuatro o seis noches. El Zahra tiene 28, navega tres, cuatro o siete noches y cuenta con la suite más grande de los dos — 115 m² con su terraza y una bañera de hidromasaje privada. En la práctica suelen decidir sus fechas." },
    { q: "¿Pueden viajar niños?", a: "El barco no admite niños menores de siete años, y su política asigna a los mayores un camarote propio. Indíquenos las edades al consultar y preguntamos al barco qué conviene a su familia." },
    { q: "¿Cuándo navega?", a: "Todo el año. En los calendarios publicados para 2026 y 2027 no hay salidas en junio. De octubre a abril es la temporada agradable en el río; de junio a agosto el Alto Egipto alcanza los 40 °C y las visitas empiezan temprano." },
    { q: "¿Se puede reservar el barco entero para un grupo?", a: "El barco no publica una oferta de fletamento. Para una ocasión lo consultamos en su nombre para una fecha concreta. Si desea una embarcación solo para su grupo, la dahabiya fletada es la vía segura." },
  ],
  cta: {
    heading: "Díganos sus fechas",
    text: "Con sus fechas y el número de viajeros es suficiente. Consultamos al barco y respondemos por escrito, con los camarotes o suites libres y la tarifa.",
    whatsapp: "Hola Kemet — quisiera consultar por The Oberoi Zahra. Mis fechas: ",
    emailSubject: "The Oberoi Zahra — consulta",
  },
  moreLabel: "Más información",
  moreText: "Los cruceros día a día y las instalaciones del barco se detallan por extenso en la página en inglés.",
  links: [{ label: "Crucero por el Nilo: dahabiya o barco de crucero", route: "es/crucero-por-el-nilo.html" }],
  photos: photos({
    philae: ["El templo de File en su isla, en Asuán, visto desde el agua", "File"],
    karnak: ["Las columnas de la sala hipóstila de Karnak, en Luxor", "Karnak"],
    kings: ["Una tumba real pintada en el Valle de los Reyes", "Valle de los Reyes"],
    nile: ["El Nilo en Asuán, una faluca a vela", "El Nilo en Asuán"],
  }),
};

// ===== Português =============================================================
export const ptZahra: LocalizedPage = {
  ...base,
  title: "The Oberoi Zahra — cruzeiro de luxo pelo Nilo | Kemet",
  description:
    "The Oberoi Zahra entre Luxor e Assuã: 28 cabines e suítes com vista para o Nilo, 3, 4 ou 7 noites. Reserva sob consulta, com a viagem planejada em torno.",
  keywords: "oberoi zahra, oberoi zahra cruzeiro nilo, cruzeiro de luxo pelo nilo, cruzeiro luxor assuã luxo, navio oberoi nilo",
  standfirst: "Vinte e oito cabines e suítes sobre o rio, entre Luxor e Assuã — todas voltadas para a água.",
  lede:
    "The Oberoi Zahra é um navio de cruzeiro de luxo operado pela Oberoi Hotels & Resorts, que navega entre Luxor e Assuã em roteiros de três, quatro e sete noites. Tem 28 cabines e suítes, todas de frente para o rio, uma piscina de onze metros com temperatura controlada, um spa e um restaurante à la carte. A Kemet reserva o navio sob consulta: vocês nos passam as datas, confirmamos por escrito a disponibilidade e a tarifa com o navio e planejamos o restante da viagem em torno do cruzeiro.",
  facts: [
    { label: "Rota", value: "Luxor ⇄ Assuã" },
    { label: "Cruzeiros", value: "3, 4 ou 7 noites" },
    { label: "A bordo", value: "28 cabines e suítes" },
    { label: "Preço", value: "Sob consulta" },
  ],
  sections: [
    {
      title: "Todas as janelas dão para o rio",
      body:
        "A Luxury Cabin tem 26,4 m² para duas pessoas: uma cama king ou duas camas ao lado de uma grande janela para o rio, e um banheiro com luz natural cuja ducha de chuva envidraçada também olha para o Nilo. A Luxury Suite with Two Bedrooms tem 92 m² para quatro pessoas — um quarto com cama king e outro com duas camas, sala de estar e de jantar separadas atrás de janelas do piso ao teto, e um terraço com espreguiçadeiras. A Luxury Suite mede 115 m² com o terraço, sendo 50 m² internos: quarto, sala de estar e um espaço de jantar privativo; do lado de fora, um terraço com espreguiçadeiras e uma hidromassagem aquecida só para vocês.",
    },
    {
      title: "Entre um templo e outro",
      body:
        "No deque superior fica uma piscina de onze metros com temperatura controlada, com refeições leves e um bar de coquetéis ao lado. O The Oberoi Spa oferece massagens, tratamentos faciais, esfoliações e envoltórios, além de ioga; os tratamentos são cobrados a bordo. O Restaurante serve à la carte no café da manhã, no almoço e no jantar, com um cardápio que muda todos os dias, e atende a restrições alimentares com aviso prévio. O Club Lounge serve o chá da tarde e, em cada cruzeiro, recebe uma noite de música ao vivo com uma apresentação núbia; o Library Lounge serve bebidas até a meia-noite.",
    },
    {
      title: "Três, quatro ou sete noites",
      body:
        "O navio parte em dias fixos, como o seu calendário publica; o embarque é ao meio-dia e o desembarque às 8h. De Assuã a Luxor, três noites, aos sábados: a Grande Represa e Filae, Kom Ombo e Edfu, depois a margem oeste de Luxor — o Vale dos Reis, Medinet Habu e os Colossos de Mêmnon — e os templos de Luxor e de Karnak. De Luxor a Assuã, quatro noites, às terças-feiras: Luxor e Karnak, a margem oeste com o Vale dos Reis, Deir el-Medina, os Colossos de Mêmnon e o Templo de Hatshepsut, Edfu e Kom Ombo, e então Assuã com a Grande Represa, Filae e o Jardim Botânico. Os cruzeiros de sete noites partem nos dois sentidos em poucas datas por ano; acrescentam Dendera, o Vale dos Nobres e o Museu de Luxor, e Abu Simbel é uma visita opcional.",
    },
    {
      title: "O que está incluído",
      body:
        "Pelas condições do navio, o cruzeiro inclui todas as refeições a bordo, as visitas do roteiro com os egiptólogos do navio — em inglês, outros idiomas com aviso prévio —, os ingressos dos monumentos visitados, os traslados entre o navio e o aeroporto de Luxor ou de Assuã, e internet a bordo. Tratamentos de spa, lavanderia e frigobar são cobrados a bordo. Quanto às bebidas, informamos no orçamento o que a tarifa de vocês cobre.",
    },
    {
      title: "Sob consulta, e por escrito",
      body:
        "Com vinte e oito cabines e suítes e saídas em dias fixos, saber se há lugar é uma pergunta sobre um cruzeiro específico — e a tarifa também. É por isso que esta página não traz preço. Digam-nos as datas e quantos viajam; perguntamos ao navio quais cabines e suítes estão livres e a que tarifa, e vocês recebem as duas respostas por escrito. Antes disso, nada é bloqueado nem cobrado. Em torno do cruzeiro planejamos o restante: o Cairo antes, Abu Simbel ou o Mar Vermelho depois, os voos e os traslados privativos. As visitas do navio acontecem em pequenos grupos dos seus hóspedes; se preferirem ver os templos só com o grupo de vocês, providenciamos egiptólogo e carro próprios para as mesmas paradas.",
    },
    {
      title: "De quem é o navio",
      body:
        "The Oberoi Zahra é operado pela Oberoi Hotels & Resorts. A Kemet é uma agência de viagens independente: reservamos o navio para os nossos viajantes e planejamos a viagem em torno dele. Os leitores da Travel + Leisure classificaram os navios da Oberoi no Nilo como a melhor companhia de cruzeiros fluviais nos World's Best Awards de 2025 e 2026; o Zahra foi eleito o melhor navio de cruzeiro fluvial da África nos World Cruise Awards de 2021. As informações do navio são as que o próprio navio publica, conferidas em novembro de 2026, e são confirmadas de novo em cada orçamento. As fotografias desta página são do rio e dos templos do roteiro.",
    },
  ],
  faqs: [
    { q: "Quanto custa o The Oberoi Zahra?", a: "Não há um preço único para publicar. A tarifa depende do cruzeiro, da temporada e da cabine ou suíte, e é o navio que a define. Pedimos a tarifa para as datas de vocês e enviamos o valor por escrito, com o que inclui, antes de qualquer pagamento." },
    { q: "O navio é privativo?", a: "Não. O navio é compartilhado com os hóspedes das outras cabines — 28 cabines e suítes ao todo. A cabine é de vocês, e nas suítes o terraço também. Para uma embarcação sem mais ninguém a bordo, fretamos no mesmo trecho uma dahabiya, um veleiro de poucas cabines." },
    { q: "As visitas aos templos fazem parte do cruzeiro?", a: "Pelas condições publicadas pelo navio, sim: as visitas do roteiro, o acompanhamento e os ingressos estão incluídos, com os egiptólogos do navio em inglês ou, com aviso prévio, em outros idiomas. Confirmamos isso no orçamento. Um egiptólogo privativo só para o grupo de vocês pode ser providenciado à parte." },
    { q: "Zahra ou Philae: qual navio da Oberoi?", a: "São navios irmãos. O Philae é o menor: 22 cabines e suítes, cabines padrão maiores, de 36 m², e cruzeiros de quatro ou seis noites. O Zahra tem 28, navega três, quatro ou sete noites e tem a maior suíte dos dois — 115 m² com o terraço e uma hidromassagem privativa. Na prática, as datas de vocês costumam decidir." },
    { q: "Crianças podem embarcar?", a: "O navio não hospeda crianças com menos de sete anos, e a política dele dá às maiores uma cabine própria. Informem as idades na consulta e verificamos com o navio o que serve para a família de vocês." },
    { q: "Quando ele navega?", a: "O ano todo. Nos calendários publicados para 2026 e 2027 não há saídas em junho. De outubro a abril é a temporada agradável no rio; de junho a agosto o Alto Egito chega a 40 °C e as visitas começam cedo." },
    { q: "Dá para reservar o navio inteiro para um grupo?", a: "O navio não publica uma oferta de fretamento. Para uma ocasião, consultamos em nome de vocês uma data específica. Se a ideia é ter a embarcação só para o grupo, a dahabiya fretada é o caminho certo." },
  ],
  cta: {
    heading: "Mandem as datas",
    text: "As datas e o número de viajantes bastam. Consultamos o navio e respondemos por escrito, com as cabines ou suítes livres e a tarifa.",
    whatsapp: "Olá, Kemet — gostaria de consultar o The Oberoi Zahra. Minhas datas: ",
    emailSubject: "The Oberoi Zahra — consulta",
  },
  moreLabel: "Para saber mais",
  moreText: "Os cruzeiros dia a dia e os espaços do navio estão descritos por extenso na página em inglês.",
  links: [{ label: "Cruzeiro pelo Nilo: dahabiya ou navio de cruzeiro", route: "pt/cruzeiro-pelo-nilo.html" }],
  photos: photos({
    philae: ["O templo de Filae em sua ilha, em Assuã, visto da água", "Filae"],
    karnak: ["As colunas da sala hipostila de Karnak, em Luxor", "Karnak"],
    kings: ["Uma tumba real pintada no Vale dos Reis", "Vale dos Reis"],
    nile: ["O Nilo em Assuã, uma falua à vela", "O Nilo em Assuã"],
  }),
};

// ===== Русский ===============================================================
export const ruZahra: LocalizedPage = {
  ...base,
  title: "The Oberoi Zahra — люксовый круиз по Нилу | Kemet",
  description:
    "The Oberoi Zahra между Луксором и Асуаном: 28 кают и сьютов с видом на Нил, 3, 4 или 7 ночей. Бронируем по запросу и строим всё путешествие вокруг круиза.",
  keywords: "oberoi zahra, оберой захра, люксовый круиз по нилу, круиз луксор асуан люкс, теплоход oberoi нил",
  standfirst: "Двадцать восемь кают и сьютов на реке между Луксором и Асуаном — и каждая смотрит на воду.",
  lede:
    "The Oberoi Zahra — теплоход класса люкс под управлением Oberoi Hotels & Resorts, который ходит между Луксором и Асуаном по маршрутам на три, четыре и семь ночей. На борту 28 кают и сьютов, все с видом на реку, одиннадцатиметровый бассейн с поддерживаемой температурой, спа и ресторан à la carte. Kemet бронирует его по запросу: вы называете даты, мы письменно подтверждаем у судна наличие мест и тариф и выстраиваем остальное путешествие вокруг круиза.",
  facts: [
    { label: "Маршрут", value: "Луксор ⇄ Асуан" },
    { label: "Круизы", value: "3, 4 или 7 ночей" },
    { label: "На борту", value: "28 кают и сьютов" },
    { label: "Цена", value: "По запросу" },
  ],
  sections: [
    {
      title: "Каждое окно выходит на реку",
      body:
        "Luxury Cabin — 26,4 м² на двоих: кровать king-size или две отдельные у большого окна на реку и ванная с дневным светом, где из-за стеклянной стенки тропического душа тоже виден Нил. Luxury Suite with Two Bedrooms — 92 м² для четверых: спальня с кроватью king-size и спальня с двумя кроватями, отдельные гостиная и столовая зона за окнами от пола до потолка, терраса с лежаками. Luxury Suite — 115 м² вместе с террасой, из них 50 м² внутри: спальня, гостиная и своя столовая зона; снаружи — терраса с лежаками и подогреваемая гидромассажная ванна только для вас.",
    },
    {
      title: "Между храмами",
      body:
        "На верхней палубе — одиннадцатиметровый бассейн с поддерживаемой температурой, рядом лёгкие блюда и коктейль-бар. The Oberoi Spa предлагает массаж, уход за лицом, скрабы и обёртывания, а также йогу; процедуры оплачиваются на борту. Ресторан подаёт завтрак, обед и ужин à la carte по меню, которое меняется каждый день, и при предварительном уведомлении учитывает особенности питания. В Club Lounge — послеобеденный чай и, в каждом круизе, вечер живой музыки с нубийским представлением; в Library Lounge напитки подают до полуночи.",
    },
    {
      title: "Три, четыре или семь ночей",
      body:
        "Теплоход отправляется по фиксированным дням, как опубликовано в его календаре; посадка в полдень, высадка в 8 утра. Из Асуана в Луксор, три ночи, по субботам: Высотная плотина и Филе, Ком-Омбо и Эдфу, затем западный берег Луксора — Долина царей, Мединет-Абу и колоссы Мемнона — и Луксорский и Карнакский храмы. Из Луксора в Асуан, четыре ночи, по вторникам: Луксор и Карнак, западный берег с Долиной царей, Дейр-эль-Мединой, колоссами Мемнона и храмом Хатшепсут, Эдфу и Ком-Омбо, затем Асуан с Высотной плотиной, Филе и Ботаническим садом. Круизы на семь ночей идут в обоих направлениях всего несколько раз в год; к программе добавляются Дендера, Долина знати и Луксорский музей, Абу-Симбел — экскурсия по желанию.",
    },
    {
      title: "Что включено",
      body:
        "По условиям самого судна в круиз входят всё питание на борту, экскурсии по маршруту с египтологами теплохода — на английском, другие языки по предварительной заявке, — входные билеты в посещаемые памятники, трансферы между теплоходом и аэропортом Луксора или Асуана и интернет на борту. Спа-процедуры, прачечная и мини-бар оплачиваются на борту. Что касается напитков, в предложении мы указываем, что покрывает ваш тариф.",
    },
    {
      title: "По запросу и письменно",
      body:
        "При двадцати восьми каютах и сьютах и фиксированных днях отправления вопрос, есть ли место, относится к конкретному рейсу — как и тариф. Поэтому на этой странице нет цены. Назовите даты и число путешественников; мы узнаём у судна, какие каюты и сьюты свободны и по какому тарифу, и вы получаете и то и другое письменно. До этого ничего не бронируется и ничего не списывается. Вокруг круиза мы выстраиваем остальное: Каир до него, Абу-Симбел или Красное море после, перелёты и индивидуальные трансферы. Экскурсии теплохода проходят небольшими группами его гостей; если вы хотите видеть храмы только своей компанией, мы организуем для тех же остановок личного египтолога и автомобиль.",
    },
    {
      title: "Чей это теплоход",
      body:
        "The Oberoi Zahra управляется компанией Oberoi Hotels & Resorts. Kemet — независимая туристическая компания: мы бронируем теплоход для наших гостей и планируем путешествие вокруг него. Читатели Travel + Leisure назвали нильские теплоходы Oberoi лучшей речной круизной компанией в World's Best Awards 2025 и 2026 годов; сам Zahra получил звание лучшего речного круизного судна Африки на World Cruise Awards 2021. Сведения о теплоходе приведены так, как их публикует само судно, проверены в ноябре 2026 года и подтверждаются заново в каждом предложении. На фотографиях этой страницы — река и храмы маршрута.",
    },
  ],
  faqs: [
    { q: "Сколько стоит The Oberoi Zahra?", a: "Единой цены, которую можно напечатать, нет. Тариф зависит от рейса, сезона и каюты или сьюта, и назначает его судно. Мы запрашиваем его на ваши даты и присылаем сумму письменно, с перечнем того, что в неё входит, до любой оплаты." },
    { q: "Теплоход будет только нашим?", a: "Нет. Вы делите теплоход с гостями других кают — всего 28 кают и сьютов. Каюта только ваша, а в сьютах и терраса. Если нужно судно, на котором нет никого, кроме вас, мы фрахтуем на том же участке реки дахабию — парусное судно на несколько кают." },
    { q: "Входят ли посещения храмов в круиз?", a: "По опубликованным условиям судна — да: экскурсии маршрута, сопровождение и входные билеты включены, их проводят египтологи теплохода на английском или, по предварительной заявке, на других языках. Мы подтверждаем это в вашем предложении. Дополнительно можно организовать личного египтолога только для вашей группы." },
    { q: "Zahra или Philae — какой теплоход Oberoi выбрать?", a: "Это суда-близнецы. Philae меньше: 22 каюты и сьюта, стандартные каюты просторнее — 36 м², круизы на четыре или шесть ночей. У Zahra 28 кают и сьютов, круизы на три, четыре или семь ночей и самый большой сьют из двух — 115 м² с террасой и собственной гидромассажной ванной. На практике чаще всего решают ваши даты." },
    { q: "Можно ли с детьми?", a: "Теплоход не принимает детей младше семи лет, а детям постарше по его правилам полагается отдельная каюта. Укажите возраст в запросе, и мы уточним у судна, что подойдёт вашей семье." },
    { q: "Когда он ходит?", a: "Круглый год. В опубликованных календарях на 2026 и 2027 годы в июне отправлений нет. С октября по апрель на реке комфортный сезон; с июня по август в Верхнем Египте до 40 °C, и экскурсии начинаются рано утром." },
    { q: "Можно ли взять весь теплоход для одной компании?", a: "Судно не публикует условий полного фрахта. Для особого случая мы спросим от вашего имени о конкретной дате. Если нужно судно целиком для себя, надёжный путь — зафрахтованная дахабия." },
  ],
  cta: {
    heading: "Назовите ваши даты",
    text: "Достаточно дат и числа путешественников. Мы запрашиваем судно и отвечаем письменно: какие каюты или сьюты свободны и по какому тарифу.",
    whatsapp: "Здравствуйте, Kemet — хочу узнать о The Oberoi Zahra. Мои даты: ",
    emailSubject: "The Oberoi Zahra — запрос",
  },
  moreLabel: "Подробнее",
  moreText: "Круизы по дням и всё, что есть на борту, подробно описаны на английской странице.",
  links: [{ label: "Круиз по Нилу: дахабия или теплоход", route: "ru/kruiz-po-nilu.html" }],
  photos: photos({
    philae: ["Храм Филе на острове в Асуане, вид с воды", "Филе"],
    karnak: ["Колонны гипостильного зала Карнака в Луксоре", "Карнак"],
    kings: ["Расписанная царская гробница в Долине царей", "Долина царей"],
    nile: ["Нил в Асуане, фелюга под парусом", "Нил в Асуане"],
  }),
};

// ===== Bahasa Indonesia ======================================================
export const idZahra: LocalizedPage = {
  ...base,
  title: "The Oberoi Zahra — Pesiar Mewah Sungai Nil | Kemet",
  description:
    "The Oberoi Zahra antara Luxor dan Aswan: 28 kabin dan suite menghadap Nil, 3, 4, atau 7 malam. Dipesan atas permintaan, perjalanan Anda disusun di sekitarnya.",
  keywords: "oberoi zahra, pesiar oberoi zahra, pesiar mewah sungai nil, pesiar luxor aswan mewah, kapal oberoi nil",
  standfirst: "Dua puluh delapan kabin dan suite di atas sungai antara Luxor dan Aswan — semuanya menghadap air.",
  lede:
    "The Oberoi Zahra adalah kapal pesiar mewah Sungai Nil yang dioperasikan Oberoi Hotels & Resorts, berlayar antara Luxor dan Aswan dengan rute tiga, empat, dan tujuh malam. Kapal ini memiliki 28 kabin dan suite, semuanya menghadap sungai, kolam renang sebelas meter bersuhu terkendali, spa, dan restoran à la carte. Kemet memesannya atas permintaan: Anda memberi tahu tanggalnya, kami memastikan ketersediaan dan tarifnya secara tertulis kepada pihak kapal, lalu menyusun sisa perjalanan Anda di sekitar pelayaran itu.",
  facts: [
    { label: "Rute", value: "Luxor ⇄ Aswan" },
    { label: "Pelayaran", value: "3, 4, atau 7 malam" },
    { label: "Di kapal", value: "28 kabin dan suite" },
    { label: "Harga", value: "Atas permintaan" },
  ],
  sections: [
    {
      title: "Setiap jendela menghadap sungai",
      body:
        "Luxury Cabin seluas 26,4 m² untuk dua orang: ranjang king atau dua ranjang di samping jendela besar ke arah sungai, serta kamar mandi bercahaya alami dengan pancuran hujan berdinding kaca yang juga menghadap Sungai Nil. Luxury Suite with Two Bedrooms seluas 92 m² untuk empat orang — satu kamar tidur dengan ranjang king dan satu dengan dua ranjang, ruang duduk dan ruang makan terpisah di balik jendela setinggi langit-langit, serta teras dengan kursi berjemur. Luxury Suite seluas 115 m² termasuk terasnya, 50 m² di dalam: kamar tidur, ruang duduk, dan ruang makan pribadi; di luar, teras dengan kursi berjemur dan kolam pusaran air hangat khusus untuk Anda.",
    },
    {
      title: "Di antara kuil-kuil",
      body:
        "Di geladak atas terdapat kolam renang sebelas meter bersuhu terkendali, dengan hidangan ringan dan bar koktail di sampingnya. The Oberoi Spa menawarkan pijat, perawatan wajah, lulur dan balutan tubuh, serta yoga; perawatan dibayar di kapal. Restoran menyajikan menu à la carte untuk sarapan, makan siang, dan makan malam dengan pilihan yang berganti setiap hari, dan menyesuaikan kebutuhan makanan khusus bila diberi tahu sebelumnya. Club Lounge menyajikan teh sore dan, di setiap pelayaran, satu malam musik langsung dengan pertunjukan Nubia; Library Lounge menyajikan minuman hingga tengah malam.",
    },
    {
      title: "Tiga, empat, atau tujuh malam",
      body:
        "Kapal berangkat pada hari-hari tetap, sesuai kalender yang diterbitkannya; naik kapal pukul 12.00 dan turun pukul 08.00. Dari Aswan ke Luxor, tiga malam, setiap Sabtu: Bendungan Tinggi dan Philae, Kom Ombo dan Edfu, lalu Tepi Barat Luxor — Lembah Para Raja, Medinet Habu, dan Kolosus Memnon — serta Kuil Luxor dan Karnak. Dari Luxor ke Aswan, empat malam, setiap Selasa: Luxor dan Karnak, Tepi Barat dengan Lembah Para Raja, Deir el-Medina, Kolosus Memnon, dan Kuil Hatshepsut, Edfu dan Kom Ombo, lalu Aswan dengan Bendungan Tinggi, Philae, dan Kebun Raya. Pelayaran tujuh malam berangkat ke dua arah pada beberapa tanggal saja dalam setahun; rutenya menambahkan Dendera, Lembah Para Bangsawan, dan Museum Luxor, sedangkan Abu Simbel adalah kunjungan pilihan.",
    },
    {
      title: "Apa yang termasuk",
      body:
        "Menurut ketentuan pihak kapal, pelayaran ini mencakup semua makanan di kapal, kunjungan dalam rute bersama para Egyptologist kapal — dalam bahasa Inggris, bahasa lain dengan pemberitahuan sebelumnya —, tiket masuk monumen yang dikunjungi, transfer antara kapal dan bandara Luxor atau Aswan, serta internet di kapal. Perawatan spa, penatu, dan minibar dibayar di kapal. Untuk minuman, kami sebutkan dalam penawaran apa saja yang dicakup tarif Anda.",
    },
    {
      title: "Atas permintaan, dan tertulis",
      body:
        "Dengan dua puluh delapan kabin dan suite serta hari keberangkatan yang tetap, ada tidaknya tempat adalah pertanyaan untuk satu pelayaran tertentu — begitu pula tarifnya. Itulah sebabnya halaman ini tidak mencantumkan harga. Beri tahu kami tanggal dan jumlah orangnya; kami menanyakan kepada pihak kapal kabin dan suite mana yang kosong dan berapa tarifnya, dan Anda menerima keduanya secara tertulis. Sebelum itu, tidak ada yang ditahan dan tidak ada yang ditagih. Di sekitar pelayaran itu kami menyusun sisanya: Kairo sebelumnya, Abu Simbel atau Laut Merah sesudahnya, penerbangan dan transfer privat. Kunjungan dari kapal berlangsung dalam kelompok kecil tamu kapal; bila Anda lebih suka melihat kuil hanya bersama rombongan sendiri, kami mengatur Egyptologist dan mobil Anda sendiri untuk perhentian yang sama.",
    },
    {
      title: "Milik siapa kapal ini",
      body:
        "The Oberoi Zahra dioperasikan oleh Oberoi Hotels & Resorts. Kemet adalah perusahaan perjalanan independen: kami memesankan kapal ini untuk tamu kami dan menyusun perjalanan di sekitarnya. Pembaca Travel + Leisure menempatkan kapal-kapal pesiar Nil milik Oberoi sebagai perusahaan pesiar sungai nomor satu dalam World's Best Awards 2025 dan 2026; Zahra sendiri dinobatkan sebagai kapal pesiar sungai terbaik di Afrika pada World Cruise Awards 2021. Keterangan tentang kapal adalah sebagaimana diterbitkan pihak kapal, diperiksa pada November 2026, dan dipastikan kembali dalam setiap penawaran. Foto-foto di halaman ini memperlihatkan sungai dan kuil-kuil di sepanjang rute.",
    },
  ],
  faqs: [
    { q: "Berapa harga The Oberoi Zahra?", a: "Tidak ada satu harga yang bisa dicantumkan. Tarifnya bergantung pada pelayaran, musim, dan kabin atau suite, dan pihak kapallah yang menetapkannya. Kami menanyakannya untuk tanggal Anda dan mengirimkan angkanya secara tertulis, beserta apa saja yang termasuk, sebelum ada pembayaran apa pun." },
    { q: "Apakah kapalnya privat?", a: "Tidak. Anda berbagi kapal dengan tamu di kabin lain — seluruhnya 28 kabin dan suite. Kabin itu milik Anda sendiri, dan di suite begitu pula terasnya. Untuk kapal tanpa penumpang lain, kami menyewa penuh sebuah dahabiya, kapal layar dengan beberapa kabin, di ruas sungai yang sama." },
    { q: "Apakah kunjungan ke kuil termasuk dalam pelayaran?", a: "Menurut ketentuan yang diterbitkan pihak kapal, ya: kunjungan dalam rute, pemanduan, dan tiket masuk sudah termasuk, dipandu para Egyptologist kapal dalam bahasa Inggris, atau bahasa lain dengan pemberitahuan sebelumnya. Kami memastikannya dalam penawaran Anda. Egyptologist privat khusus untuk rombongan Anda dapat diatur sebagai tambahan." },
    { q: "Zahra atau Philae — kapal Oberoi yang mana?", a: "Keduanya kapal kembar. Philae lebih kecil: 22 kabin dan suite, kabin standar yang lebih luas yaitu 36 m², dan pelayaran empat atau enam malam. Zahra memiliki 28, berlayar tiga, empat, atau tujuh malam, dan memiliki suite terbesar di antara keduanya — 115 m² termasuk teras dan kolam pusaran air pribadi. Pada praktiknya, tanggal Anda yang biasanya menentukan." },
    { q: "Bolehkah anak-anak ikut berlayar?", a: "Kapal ini tidak menerima anak di bawah tujuh tahun, dan menurut kebijakannya anak yang lebih besar menempati kabin tersendiri. Sebutkan usia mereka saat bertanya, dan kami menanyakan kepada pihak kapal apa yang sesuai untuk keluarga Anda." },
    { q: "Kapan kapal ini berlayar?", a: "Sepanjang tahun. Dalam kalender yang diterbitkan untuk 2026 dan 2027 tidak ada keberangkatan pada bulan Juni. Oktober hingga April adalah musim yang nyaman di sungai; dari Juni hingga Agustus suhu Mesir Hulu mencapai 40 °C dan kunjungan dimulai pagi-pagi." },
    { q: "Bisakah seluruh kapal dipesan untuk satu rombongan?", a: "Pihak kapal tidak menerbitkan penawaran sewa penuh. Untuk sebuah acara, kami menanyakannya atas nama Anda untuk tanggal tertentu. Bila Anda menginginkan kapal sepenuhnya untuk rombongan sendiri, dahabiya sewaan adalah jalan yang pasti." },
  ],
  cta: {
    heading: "Kirimkan tanggal Anda",
    text: "Tanggal dan jumlah orang sudah cukup. Kami menanyakan kepada pihak kapal dan membalas secara tertulis, dengan kabin atau suite yang kosong beserta tarifnya.",
    whatsapp: "Halo Kemet — saya ingin bertanya tentang The Oberoi Zahra. Tanggal saya: ",
    emailSubject: "The Oberoi Zahra — pertanyaan",
  },
  moreLabel: "Selengkapnya",
  moreText: "Pelayaran hari demi hari dan fasilitas kapal diuraikan lengkap di halaman berbahasa Inggris.",
  links: [{ label: "Pesiar Sungai Nil: dahabiya atau kapal besar", route: "id/pesiar-sungai-nil.html" }],
  photos: photos({
    philae: ["Kuil Philae di pulaunya di Aswan, terlihat dari seberang air", "Philae"],
    karnak: ["Tiang-tiang Aula Hipostil Karnak di Luxor", "Karnak"],
    kings: ["Makam raja berlukis di Lembah Para Raja", "Lembah Para Raja"],
    nile: ["Sungai Nil di Aswan, sebuah felucca dengan layar terkembang", "Sungai Nil di Aswan"],
  }),
};

// ===== Bahasa Melayu =========================================================
export const msZahra: LocalizedPage = {
  ...base,
  title: "The Oberoi Zahra — Pelayaran Mewah Sungai Nil | Kemet",
  description:
    "The Oberoi Zahra antara Luxor dan Aswan: 28 kabin dan suite menghadap Nil, 3, 4 atau 7 malam. Ditempah atas permintaan, dengan perjalanan anda dirancang sekali.",
  keywords: "oberoi zahra, pelayaran oberoi zahra, pelayaran mewah sungai nil, pelayaran luxor aswan mewah, kapal oberoi nil",
  standfirst: "Dua puluh lapan kabin dan suite di atas sungai antara Luxor dan Aswan — semuanya menghadap air.",
  lede:
    "The Oberoi Zahra ialah kapal persiaran mewah Sungai Nil yang dikendalikan oleh Oberoi Hotels & Resorts, belayar antara Luxor dan Aswan dengan laluan tiga, empat dan tujuh malam. Kapal ini mempunyai 28 kabin dan suite, semuanya menghadap sungai, kolam renang sebelas meter dengan suhu terkawal, spa dan restoran à la carte. Kemet menempahnya atas permintaan: anda memberitahu tarikhnya, kami mengesahkan kekosongan dan kadarnya secara bertulis dengan pihak kapal, kemudian merancang baki perjalanan anda di sekeliling pelayaran itu.",
  facts: [
    { label: "Laluan", value: "Luxor ⇄ Aswan" },
    { label: "Pelayaran", value: "3, 4 atau 7 malam" },
    { label: "Di atas kapal", value: "28 kabin dan suite" },
    { label: "Harga", value: "Atas permintaan" },
  ],
  sections: [
    {
      title: "Setiap tingkap menghadap sungai",
      body:
        "Luxury Cabin berkeluasan 26.4 m² untuk dua orang: katil king atau dua katil di sisi tingkap besar ke arah sungai, serta bilik mandi bercahaya semula jadi dengan pancuran hujan berdinding kaca yang turut menghadap Sungai Nil. Luxury Suite with Two Bedrooms berkeluasan 92 m² untuk empat orang — satu bilik tidur dengan katil king dan satu dengan dua katil, ruang tamu dan ruang makan berasingan di sebalik tingkap dari lantai ke siling, serta teres dengan kerusi rehat. Luxury Suite berkeluasan 115 m² termasuk teresnya, 50 m² di dalam: bilik tidur, ruang tamu dan ruang makan peribadi; di luar, teres dengan kerusi rehat dan kolam pusaran air panas khas untuk anda.",
    },
    {
      title: "Di antara kuil-kuil",
      body:
        "Di geladak atas terdapat kolam renang sebelas meter dengan suhu terkawal, dengan hidangan ringan dan bar koktel di sisinya. The Oberoi Spa menawarkan urutan, rawatan muka, skrub dan balutan badan, serta yoga; rawatan dibayar di atas kapal. Restoran menghidangkan menu à la carte untuk sarapan, makan tengah hari dan makan malam dengan pilihan yang bertukar setiap hari, dan memenuhi keperluan pemakanan khas dengan notis awal. Club Lounge menghidangkan minum petang dan, pada setiap pelayaran, satu malam muzik secara langsung dengan persembahan Nubia; Library Lounge menghidangkan minuman hingga tengah malam.",
    },
    {
      title: "Tiga, empat atau tujuh malam",
      body:
        "Kapal bertolak pada hari-hari tetap, seperti yang diterbitkan dalam kalendarnya; menaiki kapal pada pukul 12 tengah hari dan turun pada pukul 8 pagi. Dari Aswan ke Luxor, tiga malam, setiap Sabtu: Empangan Tinggi dan Philae, Kom Ombo dan Edfu, kemudian Tebing Barat Luxor — Lembah Raja-Raja, Medinet Habu dan Kolosus Memnon — serta Kuil Luxor dan Karnak. Dari Luxor ke Aswan, empat malam, setiap Selasa: Luxor dan Karnak, Tebing Barat dengan Lembah Raja-Raja, Deir el-Medina, Kolosus Memnon dan Kuil Hatshepsut, Edfu dan Kom Ombo, kemudian Aswan dengan Empangan Tinggi, Philae dan Taman Botani. Pelayaran tujuh malam bertolak ke kedua-dua arah pada beberapa tarikh sahaja dalam setahun; laluannya menambah Dendera, Lembah Para Bangsawan dan Muzium Luxor, manakala Abu Simbel ialah lawatan pilihan.",
    },
    {
      title: "Apa yang termasuk",
      body:
        "Mengikut terma pihak kapal, pelayaran ini merangkumi semua hidangan di atas kapal, lawatan dalam laluan bersama para Egyptologist kapal — dalam bahasa Inggeris, bahasa lain dengan notis awal —, bayaran masuk monumen yang dilawati, pemindahan antara kapal dan lapangan terbang Luxor atau Aswan, serta internet di atas kapal. Rawatan spa, dobi dan minibar dibayar di atas kapal. Bagi minuman, kami nyatakan dalam sebut harga apa yang diliputi oleh kadar anda.",
    },
    {
      title: "Atas permintaan, dan secara bertulis",
      body:
        "Dengan dua puluh lapan kabin dan suite serta hari bertolak yang tetap, ada atau tidaknya tempat ialah soalan untuk satu pelayaran tertentu — begitu juga kadarnya. Itulah sebabnya halaman ini tidak memaparkan harga. Beritahu kami tarikh dan bilangan pengembara; kami bertanya kepada pihak kapal kabin dan suite mana yang kosong dan pada kadar berapa, dan anda menerima kedua-duanya secara bertulis. Sebelum itu, tiada apa yang ditahan dan tiada apa yang dicaj. Di sekeliling pelayaran itu kami merancang selebihnya: Kaherah sebelumnya, Abu Simbel atau Laut Merah selepasnya, penerbangan dan pemindahan peribadi. Lawatan kapal dijalankan dalam kumpulan kecil tetamu kapal; jika anda lebih suka melihat kuil hanya bersama rombongan sendiri, kami mengaturkan Egyptologist dan kereta anda sendiri untuk perhentian yang sama.",
    },
    {
      title: "Milik siapa kapal ini",
      body:
        "The Oberoi Zahra dikendalikan oleh Oberoi Hotels & Resorts. Kemet ialah syarikat pelancongan bebas: kami menempah kapal ini untuk tetamu kami dan merancang perjalanan di sekelilingnya. Pembaca Travel + Leisure meletakkan kapal-kapal persiaran Nil milik Oberoi sebagai syarikat pelayaran sungai nombor satu dalam World's Best Awards 2025 dan 2026; Zahra sendiri dinamakan kapal persiaran sungai terbaik di Afrika pada World Cruise Awards 2021. Butiran tentang kapal adalah seperti yang diterbitkan oleh pihak kapal, disemak pada November 2026, dan disahkan semula dalam setiap sebut harga. Gambar-gambar di halaman ini menunjukkan sungai dan kuil-kuil di sepanjang laluan.",
    },
  ],
  faqs: [
    { q: "Berapakah harga The Oberoi Zahra?", a: "Tiada satu harga yang boleh dipaparkan. Kadarnya bergantung pada pelayaran, musim dan kabin atau suite, dan pihak kapallah yang menetapkannya. Kami memintanya untuk tarikh anda dan menghantar jumlahnya secara bertulis, bersama apa yang termasuk, sebelum sebarang bayaran dibuat." },
    { q: "Adakah kapal ini persendirian?", a: "Tidak. Anda berkongsi kapal dengan tetamu di kabin lain — 28 kabin dan suite kesemuanya. Kabin itu milik anda sendiri, dan di suite begitu juga teresnya. Untuk kapal tanpa penumpang lain, kami menyewa penuh sebuah dahabiya, kapal layar dengan beberapa kabin, di bahagian sungai yang sama." },
    { q: "Adakah lawatan ke kuil termasuk dalam pelayaran?", a: "Mengikut terma yang diterbitkan pihak kapal, ya: lawatan dalam laluan, panduan dan bayaran masuk sudah termasuk, dipandu oleh para Egyptologist kapal dalam bahasa Inggeris, atau bahasa lain dengan notis awal. Kami mengesahkannya dalam sebut harga anda. Egyptologist persendirian khas untuk rombongan anda boleh diaturkan sebagai tambahan." },
    { q: "Zahra atau Philae — kapal Oberoi yang mana?", a: "Kedua-duanya kapal kembar. Philae lebih kecil: 22 kabin dan suite, kabin standard yang lebih luas iaitu 36 m², dan pelayaran empat atau enam malam. Zahra mempunyai 28, belayar tiga, empat atau tujuh malam, dan memiliki suite terbesar antara keduanya — 115 m² termasuk teres dan kolam pusaran air peribadi. Pada praktiknya, tarikh anda yang biasanya menentukan." },
    { q: "Bolehkah kanak-kanak ikut belayar?", a: "Kapal ini tidak menerima kanak-kanak di bawah tujuh tahun, dan mengikut dasarnya kanak-kanak yang lebih besar menduduki kabin sendiri. Nyatakan umur mereka semasa bertanya, dan kami bertanya kepada pihak kapal apa yang sesuai untuk keluarga anda." },
    { q: "Bilakah kapal ini belayar?", a: "Sepanjang tahun. Dalam kalendar yang diterbitkan untuk 2026 dan 2027 tiada pelayaran bertolak pada bulan Jun. Oktober hingga April ialah musim yang selesa di sungai; dari Jun hingga Ogos suhu Mesir Hulu mencecah 40 °C dan lawatan bermula awal pagi." },
    { q: "Bolehkah seluruh kapal ditempah untuk satu rombongan?", a: "Pihak kapal tidak menerbitkan tawaran sewa penuh. Untuk sesuatu majlis, kami bertanya bagi pihak anda untuk tarikh tertentu. Jika anda mahukan kapal sepenuhnya untuk rombongan sendiri, dahabiya yang disewa penuh ialah jalan yang pasti." },
  ],
  cta: {
    heading: "Hantarkan tarikh anda",
    text: "Tarikh dan bilangan pengembara sudah memadai. Kami bertanya kepada pihak kapal dan membalas secara bertulis, dengan kabin atau suite yang kosong serta kadarnya.",
    whatsapp: "Helo Kemet — saya ingin bertanya tentang The Oberoi Zahra. Tarikh saya: ",
    emailSubject: "The Oberoi Zahra — pertanyaan",
  },
  moreLabel: "Selanjutnya",
  moreText: "Pelayaran hari demi hari dan kemudahan kapal dihuraikan sepenuhnya di halaman bahasa Inggeris.",
  links: [{ label: "Pelayaran Sungai Nil: dahabiya atau kapal besar", route: "ms/pelayaran-sungai-nil.html" }],
  photos: photos({
    philae: ["Kuil Philae di pulaunya di Aswan, dilihat dari seberang air", "Philae"],
    karnak: ["Tiang-tiang Dewan Hipostil Karnak di Luxor", "Karnak"],
    kings: ["Makam diraja berlukis di Lembah Raja-Raja", "Lembah Raja-Raja"],
    nile: ["Sungai Nil di Aswan, sebuah felucca dengan layar terkembang", "Sungai Nil di Aswan"],
  }),
};

// ===== العربية ================================================================
export const arZahra: LocalizedPage = {
  ...base,
  crumb: "أوبروي زهرة",
  h1: "أوبروي زهرة",
  title: "أوبروي زهرة — رحلة نيلية فاخرة عند الطلب | كيميت",
  description:
    "الباخرة أوبروي زهرة بين الأقصر وأسوان: ٢٨ كابينة وجناحًا تطل كلها على النيل، لثلاث أو أربع أو سبع ليالٍ. تُحجز عند الطلب، ونبني رحلتكم حولها.",
  keywords: "أوبروي زهرة, باخرة أوبروي زهرة, رحلة نيلية فاخرة, كروز الأقصر أسوان فاخر, باخرة نيلية فاخرة",
  standfirst: "ثمانٍ وعشرون كابينة وجناحًا على النهر بين الأقصر وأسوان — وكلها تطل على الماء.",
  lede:
    "أوبروي زهرة باخرة نيلية فاخرة تديرها مجموعة فنادق ومنتجعات أوبروي، تبحر بين الأقصر وأسوان في رحلات من ثلاث وأربع وسبع ليالٍ. فيها ٢٨ كابينة وجناحًا تطل كلها على النهر، ومسبح طوله أحد عشر مترًا بحرارة مضبوطة، ومنتجع صحي ومطعم يقدّم أطباقه حسب الطلب. تحجزها كيميت عند الطلب: تخبروننا بتواريخكم، فنؤكد مع الباخرة كتابةً توافر الأماكن والسعر، ثم نبني بقية رحلتكم حول موعد الإبحار.",
  facts: [
    { label: "المسار", value: "الأقصر ⇄ أسوان" },
    { label: "الرحلات", value: "٣ أو ٤ أو ٧ ليالٍ" },
    { label: "على متنها", value: "٢٨ كابينة وجناحًا" },
    { label: "السعر", value: "عند الطلب" },
  ],
  sections: [
    {
      title: "كل نافذة تطل على النهر",
      body:
        "الكابينة الفاخرة مساحتها ٢٦٫٤ م² لشخصين: سرير كبير أو سريران بجوار نافذة واسعة على النهر، وحمّام يدخله ضوء النهار، يطل دشّه المطري من خلف الزجاج على النيل أيضًا. الجناح الفاخر بغرفتَي نوم مساحته ٩٢ م² لأربعة أشخاص — غرفة بسرير كبير وأخرى بسريرين، وغرفة معيشة وركن طعام منفصلان خلف نوافذ من الأرض إلى السقف، وشرفة بمقاعد استرخاء. أما الجناح الفاخر فمساحته ١١٥ م² مع شرفته، منها ٥٠ م² في الداخل: غرفة نوم وغرفة معيشة وركن طعام خاص، وفي الخارج شرفة بمقاعد للتشمس وحوض جاكوزي دافئ لكم وحدكم.",
    },
    {
      title: "بين معبد وآخر",
      body:
        "على السطح العلوي مسبح طوله أحد عشر مترًا بحرارة مضبوطة، وبجواره وجبات خفيفة وبار للمشروبات. يقدّم منتجع أوبروي الصحي التدليك وعناية الوجه والتقشير واللفائف، إضافةً إلى اليوغا، وتُدفع قيمة الجلسات على متن الباخرة. يقدّم المطعم أطباقه حسب الطلب في الإفطار والغداء والعشاء من قائمة تتغير كل يوم، ويلبّي المتطلبات الغذائية الخاصة بإشعار مسبق. في صالة النادي شاي العصر، وفي كل رحلة أمسية من الموسيقى الحية وعرض نوبي؛ وصالة المكتبة تقدّم المشروبات حتى منتصف الليل.",
    },
    {
      title: "ثلاث أو أربع أو سبع ليالٍ",
      body:
        "تبحر الباخرة في أيام ثابتة كما ينشرها تقويمها؛ الصعود عند الظهر والنزول في الثامنة صباحًا. من أسوان إلى الأقصر، ثلاث ليالٍ، أيام السبت: السد العالي ومعبد فيلة، ثم كوم أمبو وإدفو، ثم البر الغربي في الأقصر — وادي الملوك ومدينة هابو وتمثالا ممنون — ومعبدا الأقصر والكرنك. من الأقصر إلى أسوان، أربع ليالٍ، أيام الثلاثاء: الأقصر والكرنك، ثم البر الغربي بوادي الملوك ودير المدينة وتمثالَي ممنون ومعبد حتشبسوت، ثم إدفو وكوم أمبو، ثم أسوان بالسد العالي وفيلة والحديقة النباتية. أما رحلات السبع ليالٍ فتبحر في الاتجاهين في تواريخ قليلة في السنة، وتضيف دندرة ومقابر النبلاء ومتحف الأقصر، وزيارة أبو سمبل اختيارية.",
    },
    {
      title: "ما تشمله الرحلة",
      body:
        "بحسب شروط الباخرة نفسها، تشمل الرحلة جميع الوجبات على متنها، وزيارات البرنامج مع خبراء الآثار التابعين للباخرة — بالإنجليزية، وبلغات أخرى بإشعار مسبق —، ورسوم دخول الآثار التي تُزار، والتنقل بين الباخرة ومطار الأقصر أو أسوان، والإنترنت على متنها. أما جلسات المنتجع الصحي وغسيل الملابس والميني بار فتُدفع على الباخرة. وبخصوص المشروبات، نذكر في عرضنا ما الذي يغطيه سعركم.",
    },
    {
      title: "عند الطلب، وكتابةً",
      body:
        "مع ثمانٍ وعشرين كابينة وجناحًا وأيام إبحار ثابتة، يصبح السؤال عن توافر مكان سؤالًا عن رحلة بعينها — وكذلك السعر. لهذا لا تحمل هذه الصفحة سعرًا. أخبرونا بتواريخكم وعددكم؛ نسأل الباخرة عن الكبائن والأجنحة المتاحة وبأي سعر، ويصلكم الأمران كتابةً. قبل ذلك لا يُحجز شيء ولا يُحصَّل شيء. وحول موعد الإبحار نرتب الباقي: القاهرة قبله، وأبو سمبل أو البحر الأحمر بعده، والطيران والتنقلات الخاصة. زيارات الباخرة تجري في مجموعات صغيرة من نزلائها؛ وإن فضّلتم رؤية المعابد مع مجموعتكم وحدها، نرتب لكم خبير آثار وسيارة خاصَّين بكم للمحطات نفسها.",
    },
    {
      title: "لمن هذه الباخرة",
      body:
        "تدير أوبروي زهرة مجموعة فنادق ومنتجعات أوبروي. وكيميت شركة سفر مستقلة: نحجز الباخرة لضيوفنا ونبني الرحلة حولها. صنّف قرّاء مجلة «ترافل آند ليجر» بواخر أوبروي النيلية أفضل شركة رحلات نهرية في جوائز World's Best Awards لعامَي ٢٠٢٥ و٢٠٢٦، ونالت زهرة نفسها لقب أفضل باخرة رحلات نهرية في أفريقيا في جوائز World Cruise Awards لعام ٢٠٢١. بيانات الباخرة هي ما تنشره الباخرة نفسها، وقد روجعت في نوفمبر ٢٠٢٦، ونؤكدها من جديد في كل عرض. وصور هذه الصفحة للنهر وللمعابد الواقعة على المسار.",
    },
  ],
  faqs: [
    { q: "كم تكلفة أوبروي زهرة؟", a: "لا يوجد سعر واحد يُنشر. السعر يتوقف على الرحلة والموسم ونوع الكابينة أو الجناح، والباخرة هي التي تحدده. نطلبه لتواريخكم ونرسل لكم المبلغ كتابةً، مع ما يشمله، قبل دفع أي شيء." },
    { q: "هل الباخرة خاصة بنا؟", a: "لا. تشاركون الباخرة مع نزلاء الكبائن الأخرى — ٢٨ كابينة وجناحًا في المجموع. كابينتكم لكم وحدكم، وفي الأجنحة الشرفة كذلك. ولمن يريد مركبًا لا أحد عليه سواه، نستأجر على المسار نفسه دهبية كاملة، وهي مركب شراعي بغرف معدودة." },
    { q: "هل زيارات المعابد ضمن الرحلة؟", a: "بحسب الشروط التي تنشرها الباخرة، نعم: زيارات البرنامج والإرشاد ورسوم الدخول مشمولة، مع خبراء الآثار التابعين للباخرة بالإنجليزية، أو بلغات أخرى بإشعار مسبق. ونؤكد ذلك في عرضكم. ويمكن إضافة خبير آثار خاص بمجموعتكم وحدها." },
    { q: "زهرة أم فيلة — أي بواخر أوبروي نختار؟", a: "هما باخرتان شقيقتان. فيلة هي الأصغر: ٢٢ كابينة وجناحًا، وكبائنها العادية أوسع بمساحة ٣٦ م²، ورحلاتها أربع أو ست ليالٍ. وزهرة فيها ٢٨، وتبحر ثلاث أو أربع أو سبع ليالٍ، وفيها أكبر جناح بين الاثنتين — ١١٥ م² مع شرفته وحوض جاكوزي خاص. وعمليًا تواريخكم هي التي تحسم الاختيار غالبًا." },
    { q: "هل يمكن اصطحاب الأطفال؟", a: "لا تستقبل الباخرة الأطفال دون سبع سنوات، وتقضي قواعدها بأن يقيم الأطفال الأكبر في كابينة مستقلة. اذكروا لنا الأعمار عند الاستفسار، ونسأل الباخرة عمّا يناسب عائلتكم." },
    { q: "متى تبحر؟", a: "على مدار العام. وفي التقويمَين المنشورَين لعامَي ٢٠٢٦ و٢٠٢٧ لا توجد رحلات في شهر يونيو. ومن أكتوبر إلى أبريل هو الموسم المريح على النهر؛ ومن يونيو إلى أغسطس تبلغ الحرارة في صعيد مصر ٤٠ درجة مئوية وتبدأ الزيارات في الصباح الباكر." },
    { q: "هل يمكن حجز الباخرة كاملة لمجموعة واحدة؟", a: "لا تنشر الباخرة عرضًا لحجزها كاملة. وإن كانت لديكم مناسبة، نسأل باسمكم عن تاريخ محدد. ولمن يريد مركبًا له وحده، الدهبية المستأجرة كاملة هي الطريق المضمون." },
  ],
  cta: {
    heading: "أرسلوا لنا تواريخكم",
    text: "تكفي التواريخ وعدد المسافرين. نسأل الباخرة ونرد عليكم كتابةً بالكبائن أو الأجنحة المتاحة وبالسعر.",
    whatsapp: "مرحبًا كيميت — أودّ الاستفسار عن الباخرة أوبروي زهرة. تواريخي: ",
    emailSubject: "أوبروي زهرة — استفسار",
  },
  moreLabel: "للمزيد",
  moreText: "تفاصيل الرحلات يومًا بيوم ومرافق الباخرة مشروحة كاملةً في الصفحة الإنجليزية.",
  links: [{ label: "الرحلة النيلية: دهبية أم باخرة", route: "ar/rehla-niliya-khassa.html" }],
  photos: photos({
    philae: ["معبد فيلة على جزيرته في أسوان، كما يُرى من الماء", "فيلة"],
    karnak: ["أعمدة بهو الأعمدة في الكرنك بالأقصر", "الكرنك"],
    kings: ["مقبرة ملكية ملوّنة في وادي الملوك", "وادي الملوك"],
    nile: ["النيل في أسوان، وفلوكة ناشرة شراعها", "النيل في أسوان"],
  }),
};
