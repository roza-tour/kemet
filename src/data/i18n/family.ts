// ---------------------------------------------------------------------------
// Egypt with children — one page per language.
//
// The English original is collections/family-egypt.html. These carry its
// playful family theme (bunting, balloons, kites, a caravan), its story, and
// the services the owner confirmed on 13 Oct 2026: a babysitter or nanny,
// children's activities, child seats in our vehicles, guides used to
// children — and, for the parents, a birthday surprise and spa time.
//
// Each market's school calendar shapes its edition: the German autumn and
// Easter holidays, the French Toussaint, the Spanish Semana Santa, Brazil's
// long January holidays, the Gulf's winter break; the Indonesian, Malay and
// Arabic editions add halal food and prayer times to the day's plan.
//
// The facts are the English page's: from about seven or eight children
// engage with the monuments; the Royal Mummies Hall is the highlight for most
// children of eight and over; heat, pacing and water are the practical
// questions. The price is the catalogue's family journey, per locale.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import type { MediaPlaceholder } from "@/types/primitives";
import { tours } from "@/data/tours";

const FAM = tours.find((t) => t.slug === "tour-family-8day")!;
const FAM_DAYS = /^(\d+)/.exec(FAM.durationLabel)?.[1] ?? "8";
const eur = (loc: string) =>
  new Intl.NumberFormat(loc, { style: "currency", currency: "EUR", maximumFractionDigits: 0, useGrouping: "always" }).format(FAM.price);

const family = (alt: string, label: string): MediaPlaceholder[] => [
  { src: "/images/clients/clients-19-red-pyramid.webp", alt, label, width: 680, height: 680 },
];

// ── German ──────────────────────────────────────────────────────────────────
export const deFamily: LocalizedPage = {
  groupId: "standalone-de-family",
  symbol: "camel",
  theme: "family",
  title: "Ägypten mit Kindern: Familienurlaub, privat geplant | Kemet",
  description:
    "Familienurlaub in Ägypten mit Kindern: Pyramiden, Mumien, Kamelritt und Feluke — dazu Babysitter, Kindersitze und Guides, die Kinder begeistern.",
  keywords:
    "ägypten mit kindern, familienurlaub ägypten, ägypten rundreise familie, pyramiden mit kindern, nilkreuzfahrt mit kindern, ägypten herbstferien familie",
  crumb: "Mit Kindern",
  h1: "Ägypten mit Kindern",
  standfirst:
    "Eine Reise, von der Ihre Kinder noch ihren eigenen Kindern erzählen werden.",
  lede:
    "Ägypten ist einer der seltenen Orte, an denen Kinder und Eltern über dasselbe staunen. Die Große Pyramide ist genau so groß, wie ein Kind es sich wünscht; eine Mumie genau so geheimnisvoll; ein Kamel genau so komisch. Und weil die Herbst- und Osterferien in die beste Reisezeit fallen, passt Ägypten auch in den Familienkalender.",
  facts: [
    { label: "Beste Zeit", value: "Herbst- und Osterferien" },
    { label: "Ideales Alter", value: "ab etwa 7 Jahren" },
    { label: "Für die Eltern", value: "Babysitter auf Wunsch" },
    { label: `${FAM_DAYS}-Tage-Familienreise ab`, value: `${eur("de-DE")} p. P.` },
  ],
  story: {
    eyebrow: "Familien",
    heading: "Eine Reise, von der Ihre Kinder ihren Kindern erzählen",
    paragraphs: [
      "Wir bauen jeden Tag so, dass diese Momente zur besten Stunde kommen: die Monumente in der Kühle des Morgens, nachmittags der Pool, und jeden Tag etwas, das die Kinder mit den eigenen Händen tun — Papyrus schöpfen, kochen, auf einem Kamel reiten.",
      "Und wir planen Zeit für Sie beide ein. Ein vertrauenswürdiger, erfahrener Babysitter bleibt bei den Kindern, während Sie mit der Feluke in den Sonnenuntergang segeln, lange zu Abend essen oder eine Stunde im Spa verbringen. Die Kindersitze sind schon im Auto, wenn Sie landen, und Ihr Ägyptologe weiß, dass die Fragen eines Achtjährigen das Beste am ganzen Besuch sind.",
    ],
    quote: "Die schönsten Familienreisen sind die, von denen jeder mit einem anderen Lieblingsmoment nach Hause kommt.",
    photos: family("Eine Familie, Gäste von Kemet, mit Kindern jubelnd am Fuß der Roten Pyramide von Dahschur", "Unsere Gäste in Dahschur"),
  },
  sections: [
    {
      title: "Tage, die Kindern gehören",
      body:
        "Das Grand Egyptian Museum hat ein eigenes Kindermuseum, und die Halle der Königsmumien im Nationalmuseum der Ägyptischen Zivilisation ist für die meisten Kinder ab acht der Höhepunkt der Reise. Dazu eine Feluke auf dem Nil — die sanfteste Art, den Fluss kennenzulernen — und am Ende ein paar Tage Schnorcheln am Roten Meer.",
    },
    {
      title: "Das Tempo, das Familien brauchen",
      body:
        "Sehr lange Besichtigungen ermüden Kinder unter sechs. Wir legen Monumente in den Vormittag, lassen den Nachmittag fürs Hotel und den Pool, und achten auf Hitze und Wasser — besonders bei Kindern unter zehn. Mit einem privaten Guide und eigenem Fahrzeug wartet niemand auf eine Gruppe.",
    },
    {
      title: "Ist Ägypten sicher für Familien?",
      body:
        "Ja. Ägypter sind Kindern gegenüber herzlich und aufmerksam, und die großen touristischen Gebiete sind für Familien sicher. Die praktischen Fragen sind Hitze, Tempo und genug Wasser — und genau die planen wir mit.",
    },
  ],
  touches: {
    eyebrow: "Für Familien gemacht",
    heading: "Was wir für Familien arrangieren",
    intro: "Auf Wunsch und im Angebot einzeln ausgewiesen — damit die Reise zu Ihrer Familie passt.",
    items: [
      { symbol: "horus", title: "Ein Babysitter für den Abend", text: "Ein vertrauenswürdiger, erfahrener Babysitter für die Kinder, damit Sie zu zweit essen gehen, ins Spa oder einen ruhigen Abend am Nil verbringen können." },
      { symbol: "camel", title: "Erlebnisse, die bleiben", text: "Ein Kamelritt an den Pyramiden, Papyrus selbst herstellen, ein Kinderkochkurs, das Kindermuseum im Grand Egyptian Museum, eine Feluke auf dem Nil." },
      { symbol: "ankh", title: "Kindersitze in jedem Auto", text: "Kinder- und Sitzerhöhungen sind in unseren Fahrzeugen eingebaut und warten bei der Landung — keine Frage am Bordstein." },
      { symbol: "eye", title: "Guides, denen Kinder folgen", text: "Ägyptologen mit Erfahrung mit jungen Reisenden, die von den Pharaonen so erzählen, dass Kinder mehr hören wollen." },
      { symbol: "scarab", title: "Ein Geburtstag auf Reisen", text: "Torte und ein geschmücktes Zimmer oder eine Kabine für den Geburtstag eines Kindes — oder eines Elternteils." },
      { symbol: "palm", title: "Spa-Zeit für die Eltern", text: "Eine Massage im Hotel, während die Kinder gut betreut sind." },
    ],
  },
  faqs: [
    { q: "Ab welchem Alter lohnt sich Ägypten mit Kindern?", a: "Es gibt kein Mindestalter. Ab etwa sieben oder acht Jahren beschäftigen sich Kinder richtig mit den Monumenten — die Pyramiden und die Geschichten um Mumien und Pharaonen fesseln dieses Alter. Jüngere Kinder genießen Nil, Tiere und Essen, erinnern sich aber weniger." },
    { q: "Gibt es einen Babysitter?", a: "Ja, auf Wunsch: einen vertrauenswürdigen, erfahrenen Babysitter, damit Sie als Eltern auch einen Abend, ein Dinner oder eine Stunde im Spa für sich haben." },
    { q: "Ist Ägypten sicher für Familien mit Kindern?", a: "Ja. Ägypter sind Kindern gegenüber sehr herzlich, und die großen touristischen Gebiete sind sicher. Die praktischen Themen sind Hitze, Tempo und Wasser — besonders bei Kindern unter zehn." },
    { q: "Wann reist man am besten mit Kindern?", a: "Von Oktober bis April. Die Herbst- und Osterferien fallen genau in diese Zeit; im Sommer ist das Niltal für Kinder zu heiß, das Rote Meer dagegen ideal." },
  ],
  cta: {
    heading: "Erzählen Sie uns von Ihrer Familie",
    text: "Termine, Zahl und Alter der Kinder genügen — wir planen die Reise mit ausgewiesenem Preis, unverbindlich.",
    whatsapp: "Guten Tag Kemet — wir planen eine Ägyptenreise mit Kindern.",
    emailSubject: "Ägypten mit Kindern — Anfrage",
  },
  moreLabel: "Weiter",
  moreRoute: "de/aegypten-reisen.html",
  moreText: "Alle Reiseverläufe Tag für Tag und auf Deutsch finden Sie auf der Reisen-Seite.",
  links: [
    { label: "Ist Ägypten sicher?", route: "de/ist-aegypten-sicher.html" },
    { label: "Nilkreuzfahrt", route: "de/nilkreuzfahrt.html" },
    { label: "Beste Reisezeit für Ägypten", route: "de/beste-reisezeit-aegypten.html" },
  ],
};

// ── French ──────────────────────────────────────────────────────────────────
export const frFamily: LocalizedPage = {
  groupId: "standalone-fr-family",
  symbol: "camel",
  theme: "family",
  title: "L'Égypte en famille avec des enfants, en privé | Kemet",
  description:
    "Voyage en Égypte en famille : pyramides, momies, balade à dos de chameau et felouque — avec baby-sitter, sièges enfants et guides qui captivent les enfants.",
  keywords:
    "egypte en famille, voyage egypte avec enfants, egypte avec enfants, croisiere nil en famille, pyramides avec enfants, vacances toussaint egypte famille",
  crumb: "En famille",
  h1: "L'Égypte en famille",
  standfirst:
    "Un voyage que vos enfants raconteront un jour à leurs propres enfants.",
  lede:
    "L'Égypte est l'un des rares endroits où enfants et parents s'émerveillent des mêmes choses. La Grande Pyramide est exactement aussi grande qu'un enfant l'espère ; une momie, exactement aussi mystérieuse ; un chameau, exactement aussi drôle. Et les vacances de la Toussaint et de Pâques tombent pile dans la meilleure saison.",
  facts: [
    { label: "Meilleure période", value: "Toussaint et Pâques" },
    { label: "Âge idéal", value: "à partir de 7 ans environ" },
    { label: "Pour les parents", value: "baby-sitter sur demande" },
    { label: `Voyage famille de ${FAM_DAYS} jours dès`, value: `${eur("fr-FR")} / pers.` },
  ],
  story: {
    eyebrow: "En famille",
    heading: "Un voyage que vos enfants raconteront à leurs enfants",
    paragraphs: [
      "Nous construisons chaque journée pour que ces moments arrivent à leur meilleure heure : les monuments dans la fraîcheur du matin, la piscine l'après-midi, et chaque jour quelque chose à faire de leurs propres mains — fabriquer du papyrus, cuisiner, monter à dos de chameau.",
      "Et nous gardons du temps pour vous deux. Une baby-sitter de confiance et expérimentée reste avec les enfants pendant que vous partez en felouque au coucher du soleil, que vous dînez sans vous presser ou que vous passez une heure au spa. Les sièges enfants sont déjà dans la voiture quand vous atterrissez, et votre égyptologue sait que les questions d'un enfant de huit ans sont le meilleur moment de la visite.",
    ],
    quote: "Les plus beaux voyages en famille sont ceux dont chacun revient avec un moment préféré différent.",
    photos: family("Une famille de voyageurs Kemet, enfants compris, levant les bras au pied de la pyramide rouge de Dahchour", "Nos voyageurs à Dahchour"),
  },
  sections: [
    {
      title: "Des journées pour les enfants",
      body:
        "Le Grand Musée égyptien a son propre musée des enfants, et la salle des momies royales du Musée national de la civilisation égyptienne est, pour la plupart des enfants de huit ans et plus, le sommet du voyage. Ajoutez une felouque sur le Nil — la façon la plus douce de découvrir le fleuve — et quelques jours de snorkeling en mer Rouge pour finir.",
    },
    {
      title: "Le rythme qu'il faut aux familles",
      body:
        "Les très longues visites fatiguent les moins de six ans. Nous plaçons les monuments le matin, laissons l'après-midi à l'hôtel et à la piscine, et veillons à la chaleur et à l'eau — surtout pour les moins de dix ans. Avec un guide privé et votre véhicule, personne n'attend un groupe.",
    },
    {
      title: "L'Égypte est-elle sûre pour les familles ?",
      body:
        "Oui. Les Égyptiens sont chaleureux et attentifs avec les enfants, et les grandes zones touristiques sont sûres pour les familles. Les questions pratiques sont la chaleur, le rythme et l'hydratation — et nous les intégrons au programme.",
    },
  ],
  touches: {
    eyebrow: "Pensé pour les familles",
    heading: "Ce que nous organisons pour les familles",
    intro: "Sur demande et détaillé dans votre devis — pour que le voyage ressemble à votre famille.",
    items: [
      { symbol: "horus", title: "Une baby-sitter pour la soirée", text: "Une baby-sitter ou une nounou de confiance et expérimentée, pour un dîner à deux, une heure au spa ou une soirée tranquille au bord du Nil." },
      { symbol: "camel", title: "Des activités qu'ils n'oublieront pas", text: "Une balade à dos de chameau près des pyramides, fabriquer du papyrus, un cours de cuisine pour enfants, le musée des enfants du Grand Musée égyptien, une felouque sur le Nil." },
      { symbol: "ankh", title: "Des sièges enfants dans chaque voiture", text: "Sièges et rehausseurs installés dans nos véhicules et prêts à votre arrivée." },
      { symbol: "eye", title: "Des guides que les enfants suivent", text: "Des égyptologues habitués aux jeunes voyageurs, qui racontent les pharaons de telle façon qu'un enfant en redemande." },
      { symbol: "scarab", title: "Un anniversaire en voyage", text: "Un gâteau et une chambre ou une cabine décorée pour l'anniversaire d'un enfant — ou d'un parent." },
      { symbol: "palm", title: "Un moment de spa pour les parents", text: "Un massage à l'hôtel pendant que les enfants sont bien entourés." },
    ],
  },
  faqs: [
    { q: "À partir de quel âge partir en Égypte avec des enfants ?", a: "Il n'y a pas d'âge minimum. Vers sept ou huit ans, les enfants s'intéressent vraiment aux monuments — les pyramides et les histoires de momies et de pharaons captivent cet âge. Les plus petits profitent du Nil, des animaux et de la cuisine, mais en gardent moins de souvenirs." },
    { q: "Proposez-vous une baby-sitter ?", a: "Oui, sur demande : une baby-sitter de confiance et expérimentée, pour que les parents aient eux aussi une soirée, un dîner ou une heure au spa." },
    { q: "L'Égypte est-elle sûre pour les familles ?", a: "Oui. Les Égyptiens sont très chaleureux avec les enfants et les grandes zones touristiques sont sûres. Les points pratiques sont la chaleur, le rythme et l'eau — surtout pour les moins de dix ans." },
    { q: "Quand partir en Égypte avec des enfants ?", a: "D'octobre à avril : les vacances de la Toussaint et de Pâques tombent dans cette période. En été, la vallée du Nil est trop chaude pour les enfants, mais la mer Rouge est idéale." },
  ],
  cta: {
    heading: "Parlez-nous de votre famille",
    text: "Vos dates, le nombre et l'âge des enfants suffisent : nous préparons le voyage avec un prix détaillé, sans engagement.",
    whatsapp: "Bonjour Kemet — nous préparons un voyage en Égypte avec nos enfants.",
    emailSubject: "L'Égypte en famille — demande",
  },
  moreLabel: "Continuer",
  moreRoute: "fr/voyage-egypte.html",
  moreText: "Tous nos itinéraires, jour par jour et en français, sont sur la page des voyages.",
  links: [
    { label: "La Toussaint en Égypte", route: "fr/toussaint-en-egypte.html" },
    { label: "Sécurité en Égypte", route: "fr/securite-en-egypte.html" },
    { label: "Croisière sur le Nil", route: "fr/croisiere-sur-le-nil.html" },
  ],
};

// ── Spanish ─────────────────────────────────────────────────────────────────
export const esFamily: LocalizedPage = {
  groupId: "standalone-es-family",
  symbol: "camel",
  theme: "family",
  title: "Egipto con niños: viaje en familia, en privado | Kemet",
  description:
    "Egipto con niños: pirámides, momias, paseo en camello y falúa por el Nilo, con canguro, sillas infantiles y guías que encantan a los niños.",
  keywords:
    "egipto con niños, viaje a egipto en familia, egipto en familia, crucero por el nilo con niños, piramides con niños, semana santa egipto con niños",
  crumb: "Con niños",
  h1: "Egipto con niños",
  standfirst:
    "Un viaje que sus hijos contarán algún día a sus propios hijos.",
  lede:
    "Egipto es uno de los pocos lugares donde niños y padres se asombran con lo mismo. La Gran Pirámide es exactamente tan grande como un niño espera; una momia, exactamente igual de misteriosa; un camello, exactamente igual de gracioso. Y la Semana Santa cae en plena primavera del Nilo.",
  facts: [
    { label: "Mejor época", value: "otoño y Semana Santa" },
    { label: "Edad ideal", value: "desde unos 7 años" },
    { label: "Para los padres", value: "canguro a petición" },
    { label: `Viaje en familia de ${FAM_DAYS} días desde`, value: `${eur("es-ES")} por persona` },
  ],
  story: {
    eyebrow: "En familia",
    heading: "Un viaje que sus hijos contarán a sus hijos",
    paragraphs: [
      "Construimos cada día para que esos momentos lleguen a su mejor hora: los monumentos con el fresco de la mañana, la piscina por la tarde y, cada día, algo que hacer con sus propias manos — fabricar papiro, cocinar, montar en camello.",
      "Y reservamos tiempo para ustedes dos. Una canguro de confianza y con experiencia se queda con los niños mientras ustedes salen en falúa al atardecer, cenan sin prisas o pasan una hora en el spa. Las sillas infantiles ya están en el coche cuando aterrizan, y su egiptólogo sabe que las preguntas de un niño de ocho años son lo mejor de la visita.",
    ],
    quote: "Los mejores viajes en familia son aquellos de los que cada uno vuelve con un momento favorito distinto.",
    photos: family("Una familia de viajeros de Kemet, con niños, celebrando al pie de la Pirámide Roja de Dahshur", "Nuestros viajeros en Dahshur"),
  },
  sections: [
    {
      title: "Días para los niños",
      body:
        "El Gran Museo Egipcio tiene su propio museo infantil, y la sala de las momias reales del Museo Nacional de la Civilización Egipcia es, para la mayoría de los niños a partir de ocho años, lo mejor del viaje. Súmenle una falúa por el Nilo —la forma más tranquila de conocer el río— y unos días de esnórquel en el mar Rojo para terminar.",
    },
    {
      title: "El ritmo que necesitan las familias",
      body:
        "Las visitas muy largas cansan a los menores de seis años. Ponemos los monumentos por la mañana, dejamos la tarde para el hotel y la piscina, y cuidamos el calor y el agua, sobre todo con menores de diez. Con guía privado y vehículo propio, nadie espera a un grupo.",
    },
    {
      title: "¿Es Egipto seguro para las familias?",
      body:
        "Sí. Los egipcios son cariñosos y atentos con los niños, y las grandes zonas turísticas son seguras para viajar en familia. Lo práctico es el calor, el ritmo y beber suficiente agua, y lo tenemos en cuenta en el programa.",
    },
  ],
  touches: {
    eyebrow: "Pensado para familias",
    heading: "Lo que organizamos para las familias",
    intro: "A petición y desglosado en su presupuesto, para que el viaje se adapte a su familia.",
    items: [
      { symbol: "horus", title: "Una canguro para la noche", text: "Una canguro o niñera de confianza y con experiencia, para una cena a solas, una hora de spa o una noche tranquila junto al Nilo." },
      { symbol: "camel", title: "Actividades que recordarán", text: "Un paseo en camello junto a las pirámides, fabricar papiro, una clase de cocina para niños, el museo infantil del Gran Museo Egipcio, una falúa por el Nilo." },
      { symbol: "ankh", title: "Sillas infantiles en cada coche", text: "Sillas y alzadores instalados en nuestros vehículos y listos cuando aterrizan." },
      { symbol: "eye", title: "Guías a los que los niños siguen", text: "Egiptólogos acostumbrados a viajeros pequeños, que cuentan la historia de los faraones de forma que un niño pide más." },
      { symbol: "scarab", title: "Un cumpleaños de viaje", text: "Una tarta y una habitación o un camarote decorados para el cumpleaños de un niño, o de uno de los padres." },
      { symbol: "palm", title: "Spa para los padres", text: "Un masaje en el hotel mientras los niños están bien atendidos." },
    ],
  },
  faqs: [
    { q: "¿Desde qué edad merece la pena Egipto con niños?", a: "No hay edad mínima. Hacia los siete u ocho años los niños se implican de verdad con los monumentos: las pirámides y las historias de momias y faraones atrapan a esa edad. Los más pequeños disfrutan del Nilo, los animales y la comida, aunque recuerdan menos." },
    { q: "¿Ofrecen servicio de canguro?", a: "Sí, a petición: una canguro de confianza y con experiencia, para que los padres también tengan una noche, una cena o una hora de spa." },
    { q: "¿Es Egipto seguro para viajar con niños?", a: "Sí. Los egipcios son muy cariñosos con los niños y las grandes zonas turísticas son seguras. Lo práctico es el calor, el ritmo y el agua, sobre todo con menores de diez años." },
    { q: "¿Cuándo es mejor ir a Egipto con niños?", a: "De octubre a abril; la Semana Santa cae en esa temporada. En verano el valle del Nilo es demasiado caluroso para los niños, aunque el mar Rojo es ideal." },
  ],
  cta: {
    heading: "Cuéntennos cómo es su familia",
    text: "Las fechas y cuántos niños viajan, y de qué edades, bastan: preparamos el viaje con el precio detallado y sin compromiso.",
    whatsapp: "Hola Kemet: estamos preparando un viaje a Egipto con niños.",
    emailSubject: "Egipto con niños — consulta",
  },
  moreLabel: "Seguir",
  moreRoute: "es/viajes-a-egipto.html",
  moreText: "Todos nuestros itinerarios, día a día y en español, están en la página de viajes.",
  links: [
    { label: "Semana Santa en Egipto", route: "es/semana-santa-en-egipto.html" },
    { label: "¿Es seguro viajar a Egipto?", route: "es/es-seguro-viajar-a-egipto.html" },
    { label: "Crucero por el Nilo", route: "es/crucero-por-el-nilo.html" },
  ],
};

// ── Italian ─────────────────────────────────────────────────────────────────
export const itFamily: LocalizedPage = {
  groupId: "standalone-it-family",
  symbol: "camel",
  theme: "family",
  title: "Egitto con bambini: viaggio in famiglia, privato | Kemet",
  description:
    "Egitto con bambini: piramidi, mummie, giro in cammello e feluca sul Nilo — con babysitter, seggiolini e guide che appassionano i bambini.",
  keywords:
    "egitto con bambini, viaggio in egitto con bambini, egitto in famiglia, crociera sul nilo con bambini, piramidi con bambini, vacanze di natale egitto famiglia",
  crumb: "Con i bambini",
  h1: "Egitto con i bambini",
  standfirst:
    "Un viaggio che i vostri figli racconteranno un giorno ai loro figli.",
  lede:
    "L'Egitto è uno dei rari luoghi in cui bambini e genitori si stupiscono delle stesse cose. La Grande Piramide è esattamente grande quanto un bambino spera; una mummia esattamente misteriosa; un cammello esattamente buffo. E le vacanze di Natale e di Pasqua cadono nella stagione migliore.",
  facts: [
    { label: "Periodo migliore", value: "Natale e Pasqua" },
    { label: "Età ideale", value: "dai 7 anni circa" },
    { label: "Per i genitori", value: "babysitter su richiesta" },
    { label: `Viaggio in famiglia di ${FAM_DAYS} giorni da`, value: `${eur("it-IT")} a persona` },
  ],
  story: {
    eyebrow: "In famiglia",
    heading: "Un viaggio che i vostri figli racconteranno ai loro figli",
    paragraphs: [
      "Costruiamo ogni giornata perché quei momenti arrivino all'ora giusta: i monumenti nel fresco del mattino, la piscina nel pomeriggio e ogni giorno qualcosa da fare con le proprie mani — fare il papiro, cucinare, salire su un cammello.",
      "E teniamo del tempo per voi due. Una babysitter fidata ed esperta resta con i bambini mentre voi andate in feluca al tramonto, cenate con calma o passate un'ora alla spa. I seggiolini sono già in auto quando atterrate, e il vostro egittologo sa che le domande di un bambino di otto anni sono la parte migliore della visita.",
    ],
    quote: "I viaggi in famiglia più belli sono quelli da cui ognuno torna con un momento preferito diverso.",
    photos: family("Una famiglia di ospiti Kemet, con i bambini, che esulta ai piedi della Piramide Rossa di Dahshur", "I nostri ospiti a Dahshur"),
  },
  sections: [
    {
      title: "Giornate per i bambini",
      body:
        "Il Grand Egyptian Museum ha un suo museo dei bambini, e la sala delle mummie reali al Museo Nazionale della Civiltà Egizia è per la maggior parte dei bambini dagli otto anni in su il momento più bello del viaggio. Aggiungete una feluca sul Nilo — il modo più dolce di conoscere il fiume — e qualche giorno di snorkeling sul Mar Rosso alla fine.",
    },
    {
      title: "Il ritmo giusto per una famiglia",
      body:
        "Le visite molto lunghe stancano i bambini sotto i sei anni. Mettiamo i monumenti al mattino, lasciamo il pomeriggio per l'albergo e la piscina, e stiamo attenti al caldo e all'acqua, soprattutto sotto i dieci anni. Con guida privata e auto vostra, nessuno aspetta un gruppo.",
    },
    {
      title: "L'Egitto è sicuro per le famiglie?",
      body:
        "Sì. Gli egiziani sono affettuosi e attenti con i bambini, e le grandi zone turistiche sono sicure per le famiglie. Le questioni pratiche sono il caldo, il ritmo e bere a sufficienza, e le mettiamo nel programma.",
    },
  ],
  touches: {
    eyebrow: "Pensato per le famiglie",
    heading: "Cosa organizziamo per le famiglie",
    intro: "Su richiesta e indicato a parte nel preventivo, perché il viaggio sia a misura della vostra famiglia.",
    items: [
      { symbol: "horus", title: "Una babysitter per la sera", text: "Una babysitter o tata fidata ed esperta, per una cena a due, un'ora alla spa o una serata tranquilla sul Nilo." },
      { symbol: "camel", title: "Attività che ricorderanno", text: "Un giro in cammello vicino alle piramidi, fare il papiro, una lezione di cucina per bambini, il museo dei bambini del Grand Egyptian Museum, una feluca sul Nilo." },
      { symbol: "ankh", title: "Seggiolini in ogni auto", text: "Seggiolini e rialzi montati nei nostri veicoli e pronti al vostro arrivo." },
      { symbol: "eye", title: "Guide che i bambini seguono", text: "Egittologi abituati ai piccoli viaggiatori, che raccontano i faraoni in modo che un bambino ne voglia ancora." },
      { symbol: "scarab", title: "Un compleanno in viaggio", text: "Una torta e una camera o una cabina decorata per il compleanno di un bambino — o di un genitore." },
      { symbol: "palm", title: "Spa per i genitori", text: "Un massaggio in albergo mentre i bambini sono in buone mani." },
    ],
  },
  faqs: [
    { q: "Da che età conviene l'Egitto con i bambini?", a: "Non c'è un'età minima. Dai sette-otto anni i bambini si appassionano davvero ai monumenti: le piramidi e le storie di mummie e faraoni conquistano questa età. I più piccoli si godono il Nilo, gli animali e il cibo, ma ricordano meno." },
    { q: "Avete un servizio di babysitter?", a: "Sì, su richiesta: una babysitter fidata ed esperta, perché anche i genitori abbiano una serata, una cena o un'ora alla spa." },
    { q: "L'Egitto è sicuro per una famiglia con bambini?", a: "Sì. Gli egiziani sono molto affettuosi con i bambini e le grandi zone turistiche sono sicure. Le attenzioni pratiche sono il caldo, il ritmo e l'acqua, soprattutto sotto i dieci anni." },
    { q: "Qual è il periodo migliore con i bambini?", a: "Da ottobre ad aprile: le vacanze di Natale e di Pasqua cadono in questa stagione. D'estate la valle del Nilo è troppo calda per i bambini, mentre il Mar Rosso è perfetto." },
  ],
  cta: {
    heading: "Raccontateci la vostra famiglia",
    text: "Date, numero ed età dei bambini bastano: prepariamo il viaggio con il prezzo dettagliato, senza impegno.",
    whatsapp: "Buongiorno Kemet, stiamo organizzando un viaggio in Egitto con i bambini.",
    emailSubject: "Egitto con i bambini — richiesta",
  },
  moreLabel: "Continuare",
  moreRoute: "it/viaggi-in-egitto.html",
  moreText: "Tutti i nostri itinerari, giorno per giorno e in italiano, sono nella pagina dei viaggi.",
  links: [
    { label: "Natale e Capodanno in Egitto", route: "it/natale-e-capodanno-in-egitto.html" },
    { label: "È sicuro viaggiare in Egitto?", route: "it/e-sicuro-viaggiare-in-egitto.html" },
    { label: "Crociera sul Nilo", route: "it/crociera-sul-nilo.html" },
  ],
};

// ── Russian ─────────────────────────────────────────────────────────────────
export const ruFamily: LocalizedPage = {
  groupId: "standalone-ru-family",
  symbol: "camel",
  theme: "family",
  title: "Египет с детьми: семейный тур, индивидуально | Kemet",
  description:
    "Египет с детьми: пирамиды, мумии, прогулка на верблюде и фелука по Нилу — с няней, детскими креслами и гидами, которых дети слушают.",
  keywords:
    "египет с детьми, семейный тур в египет, отдых в египте с детьми, круиз по нилу с детьми, пирамиды с детьми, экскурсии в египте для детей",
  crumb: "С детьми",
  h1: "Египет с детьми",
  standfirst:
    "Путешествие, о котором ваши дети однажды расскажут своим детям.",
  lede:
    "Египет — одно из редких мест, где дети и родители удивляются одному и тому же. Великая пирамида ровно такая огромная, как ребёнок надеется; мумия — ровно такая загадочная; верблюд — ровно такой смешной. А Красное море рядом: пирамиды и Нил легко соединить с пляжем.",
  facts: [
    { label: "Лучшее время", value: "с октября по апрель" },
    { label: "Возраст", value: "примерно с 7 лет" },
    { label: "Для родителей", value: "няня по запросу" },
    { label: `Семейный тур на ${FAM_DAYS} дней от`, value: `${eur("ru-RU")} с человека` },
  ],
  story: {
    eyebrow: "Для семьи",
    heading: "Путешествие, о котором ваши дети расскажут своим детям",
    paragraphs: [
      "Мы строим каждый день так, чтобы эти моменты приходились на лучший час: памятники утром, пока прохладно, бассейн после обеда и каждый день что-то, что дети делают своими руками, — папирус, кулинарный урок, прогулка на верблюде.",
      "И мы оставляем время для вас двоих. Надёжная, опытная няня остаётся с детьми, пока вы плывёте на фелуке на закате, не спеша ужинаете или проводите час в спа. Детские кресла уже в машине, когда вы прилетаете, а ваш египтолог знает, что вопросы восьмилетнего — лучшая часть экскурсии.",
    ],
    quote: "Лучшие семейные путешествия — те, из которых каждый привозит свой любимый момент.",
    photos: family("Семья, гости Kemet, вместе с детьми у подножия Красной пирамиды в Дахшуре", "Наши гости в Дахшуре"),
  },
  sections: [
    {
      title: "Дни для детей",
      body:
        "В Большом Египетском музее есть собственный детский музей, а Зал царских мумий в Национальном музее египетской цивилизации для большинства детей от восьми лет — главное впечатление поездки. Добавьте фелуку на Ниле — самый спокойный способ познакомиться с рекой — и несколько дней снорклинга на Красном море в финале.",
    },
    {
      title: "Ритм, который нужен семье",
      body:
        "Очень длинные экскурсии утомляют детей до шести лет. Мы ставим памятники на утро, оставляем день для отеля и бассейна и следим за жарой и водой — особенно для детей до десяти. С личным гидом и своей машиной никто не ждёт группу.",
    },
    {
      title: "Безопасен ли Египет для семей?",
      body:
        "Да. Египтяне очень тепло относятся к детям, а основные туристические районы безопасны для семей. Практические вопросы — жара, темп и вода, и мы учитываем их в программе.",
    },
  ],
  touches: {
    eyebrow: "Для семей",
    heading: "Что мы организуем для семей",
    intro: "По запросу и отдельной строкой в предложении — чтобы поездка подходила именно вашей семье.",
    items: [
      { symbol: "horus", title: "Няня на вечер", text: "Надёжная, опытная няня для детей, чтобы вы могли поужинать вдвоём, сходить в спа или провести тихий вечер на Ниле." },
      { symbol: "camel", title: "Занятия, которые запомнятся", text: "Прогулка на верблюде у пирамид, изготовление папируса, кулинарный урок для детей, детский музей Большого Египетского музея, фелука на Ниле." },
      { symbol: "ankh", title: "Детские кресла в каждой машине", text: "Детские кресла и бустеры установлены в наших машинах и ждут вас по прилёте." },
      { symbol: "eye", title: "Гиды, которых слушают дети", text: "Египтологи с опытом работы с детьми, которые рассказывают о фараонах так, что ребёнок просит ещё." },
      { symbol: "scarab", title: "День рождения в поездке", text: "Торт и украшенный номер или каюта ко дню рождения ребёнка — или одного из родителей." },
      { symbol: "palm", title: "Спа для родителей", text: "Массаж в отеле, пока дети под присмотром." },
    ],
  },
  faqs: [
    { q: "С какого возраста ехать в Египет с детьми?", a: "Минимального возраста нет. Примерно с семи-восьми лет дети по-настоящему увлекаются памятниками — пирамиды и истории о мумиях и фараонах захватывают этот возраст. Малыши радуются Нилу, животным и еде, но запоминают меньше." },
    { q: "Есть ли няня?", a: "Да, по запросу: надёжная, опытная няня, чтобы у родителей тоже был вечер, ужин или час в спа." },
    { q: "Безопасно ли в Египте с детьми?", a: "Да. Египтяне очень тепло относятся к детям, основные туристические районы безопасны. Практические вопросы — жара, темп и вода, особенно для детей до десяти лет." },
    { q: "Можно ли совместить экскурсии и море?", a: "Да, и это лучший формат для семьи: Каир и пирамиды, Луксор и Нил, а затем несколько дней на Красном море. Летом долина Нила для детей слишком жаркая, а море — идеально." },
  ],
  cta: {
    heading: "Расскажите о вашей семье",
    text: "Даты, сколько детей и их возраст — этого достаточно: мы спланируем поездку с подробной ценой, без обязательств.",
    whatsapp: "Здравствуйте, Kemet — планируем поездку в Египет с детьми.",
    emailSubject: "Египет с детьми — запрос",
  },
  moreLabel: "Дальше",
  moreRoute: "ru/tury-v-egipet.html",
  moreText: "Все маршруты с разбивкой по дням — на странице туров.",
  links: [
    { label: "Безопасность в Египте", route: "ru/bezopasnost-v-egipte.html" },
    { label: "Круиз по Нилу", route: "ru/kruiz-po-nilu.html" },
    { label: "Новый год в Египте", route: "ru/novyy-god-v-egipte.html" },
  ],
};

// ── Portuguese (Brazil) ─────────────────────────────────────────────────────
export const ptFamily: LocalizedPage = {
  groupId: "standalone-pt-family",
  symbol: "camel",
  theme: "family",
  title: "Egito com crianças: viagem em família, privativa | Kemet",
  description:
    "Egito com crianças: pirâmides, múmias, passeio de camelo e falua no Nilo — com babá, cadeirinhas e guias que encantam as crianças.",
  keywords:
    "egito com crianças, viagem ao egito em família, egito em família, cruzeiro no nilo com crianças, pirâmides com crianças, férias de janeiro no egito",
  crumb: "Com crianças",
  h1: "Egito com crianças",
  standfirst:
    "Uma viagem que seus filhos vão contar um dia para os filhos deles.",
  lede:
    "O Egito é um dos raros lugares em que crianças e pais se encantam com as mesmas coisas. A Grande Pirâmide é exatamente tão grande quanto a criança imagina; uma múmia, exatamente tão misteriosa; um camelo, exatamente tão engraçado. E as férias de janeiro caem na melhor época do ano no Nilo.",
  facts: [
    { label: "Melhor época", value: "férias de janeiro" },
    { label: "Idade ideal", value: "a partir de uns 7 anos" },
    { label: "Para os pais", value: "babá sob pedido" },
    { label: `Viagem em família de ${FAM_DAYS} dias a partir de`, value: `${eur("pt-BR")} por pessoa` },
  ],
  story: {
    eyebrow: "Em família",
    heading: "Uma viagem que seus filhos vão contar para os filhos deles",
    paragraphs: [
      "Montamos cada dia para que esses momentos aconteçam na melhor hora: os monumentos no frescor da manhã, a piscina à tarde e, todo dia, alguma coisa para fazer com as próprias mãos — papiro, uma aula de culinária, um passeio de camelo.",
      "E guardamos um tempo para vocês dois. Uma babá de confiança e experiente fica com as crianças enquanto vocês fazem um passeio de falua no pôr do sol, jantam sem pressa ou passam uma hora no spa. As cadeirinhas já estão no carro quando vocês pousam, e o seu egiptólogo sabe que as perguntas de uma criança de oito anos são a melhor parte da visita.",
    ],
    quote: "As melhores viagens em família são aquelas de que cada um volta com um momento favorito diferente.",
    photos: family("Uma família de viajantes da Kemet, com crianças, comemorando ao pé da Pirâmide Vermelha de Dahshur", "Nossos viajantes em Dahshur"),
  },
  sections: [
    {
      title: "Dias pensados para as crianças",
      body:
        "O Grande Museu Egípcio tem o seu próprio museu infantil, e a sala das múmias reais do Museu Nacional da Civilização Egípcia é, para a maioria das crianças a partir de oito anos, o ponto alto da viagem. Some uma falua no Nilo — o jeito mais tranquilo de conhecer o rio — e alguns dias de snorkel no mar Vermelho no fim.",
    },
    {
      title: "O ritmo de que uma família precisa",
      body:
        "Visitas muito longas cansam crianças menores de seis anos. Colocamos os monumentos de manhã, deixamos a tarde para o hotel e a piscina e cuidamos do calor e da água, principalmente com menores de dez. Com guia privativo e carro próprio, ninguém espera por um grupo.",
    },
    {
      title: "O Egito é seguro para famílias?",
      body:
        "Sim. Os egípcios são carinhosos e atenciosos com as crianças, e as grandes áreas turísticas são seguras para famílias. As questões práticas são o calor, o ritmo e a hidratação — e elas entram no roteiro.",
    },
  ],
  touches: {
    eyebrow: "Pensado para famílias",
    heading: "O que providenciamos para famílias",
    intro: "Sob pedido e discriminado no orçamento, para que a viagem seja do jeito da sua família.",
    items: [
      { symbol: "horus", title: "Uma babá para a noite", text: "Uma babá de confiança e experiente para as crianças, para que vocês possam jantar a dois, ir ao spa ou ter uma noite tranquila no Nilo." },
      { symbol: "camel", title: "Atividades inesquecíveis", text: "Passeio de camelo perto das pirâmides, fazer papiro, aula de culinária para crianças, o museu infantil do Grande Museu Egípcio, uma falua no Nilo." },
      { symbol: "ankh", title: "Cadeirinhas em todos os carros", text: "Cadeirinhas e assentos de elevação instalados nos nossos veículos e prontos na chegada." },
      { symbol: "eye", title: "Guias que as crianças seguem", text: "Egiptólogos acostumados com pequenos viajantes, que contam a história dos faraós de um jeito que a criança pede mais." },
      { symbol: "scarab", title: "Um aniversário na viagem", text: "Bolo e um quarto ou cabine decorados para o aniversário de uma criança — ou de um dos pais." },
      { symbol: "palm", title: "Spa para os pais", text: "Uma massagem no hotel enquanto as crianças estão bem cuidadas." },
    ],
  },
  faqs: [
    { q: "A partir de que idade vale a pena o Egito com crianças?", a: "Não há idade mínima. Por volta dos sete ou oito anos as crianças se envolvem de verdade com os monumentos — as pirâmides e as histórias de múmias e faraós encantam essa idade. Os menores aproveitam o Nilo, os animais e a comida, mas lembram menos." },
    { q: "Vocês oferecem babá?", a: "Sim, sob pedido: uma babá de confiança e experiente, para que os pais também tenham uma noite, um jantar ou uma hora no spa." },
    { q: "O Egito é seguro para viajar com crianças?", a: "Sim. Os egípcios são muito carinhosos com as crianças e as grandes áreas turísticas são seguras. O que pede atenção é o calor, o ritmo e a água, principalmente com menores de dez anos." },
    { q: "Qual a melhor época para ir com crianças?", a: "De outubro a abril — e as férias de janeiro caem bem nesse período. Em julho o vale do Nilo é quente demais para as crianças, mas o mar Vermelho é ótimo." },
  ],
  cta: {
    heading: "Conte como é a sua família",
    text: "As datas, quantas crianças e as idades bastam: preparamos a viagem com o preço detalhado e sem compromisso.",
    whatsapp: "Olá Kemet — estamos planejando uma viagem ao Egito com as crianças.",
    emailSubject: "Egito com crianças — pedido",
  },
  moreLabel: "Continuar",
  moreRoute: "pt/viagens-ao-egito.html",
  moreText: "Todos os nossos roteiros, dia a dia e em português, estão na página de viagens.",
  links: [
    { label: "Natal e Réveillon no Egito", route: "pt/natal-e-reveillon-no-egito.html" },
    { label: "É seguro viajar para o Egito?", route: "pt/e-seguro-viajar-para-o-egito.html" },
    { label: "Cruzeiro pelo Nilo", route: "pt/cruzeiro-pelo-nilo.html" },
  ],
};

// ── Indonesian ──────────────────────────────────────────────────────────────
export const idFamily: LocalizedPage = {
  groupId: "standalone-id-family",
  symbol: "camel",
  theme: "family",
  title: "Liburan Keluarga ke Mesir Bersama Anak-Anak | Kemet",
  description:
    "Liburan keluarga ke Mesir: piramida, mumi, naik unta dan felucca di Sungai Nil — dengan babysitter, kursi anak, pemandu yang disukai anak, makanan halal.",
  keywords:
    "liburan keluarga ke mesir, tour mesir keluarga, mesir bersama anak, wisata mesir untuk anak, pesiar sungai nil keluarga, liburan sekolah ke mesir",
  crumb: "Liburan keluarga",
  h1: "Liburan Keluarga di Mesir",
  standfirst:
    "Perjalanan yang suatu hari akan diceritakan anak-anak Anda kepada anak-anak mereka.",
  lede:
    "Mesir adalah salah satu tempat langka di mana anak-anak dan orang tua kagum pada hal yang sama. Piramida Agung persis sebesar yang dibayangkan anak-anak; mumi persis semisterius itu; unta persis selucu itu. Makanan halal dan waktu salat kami perhitungkan di setiap hari perjalanan.",
  facts: [
    { label: "Waktu terbaik", value: "Oktober sampai April" },
    { label: "Usia ideal", value: "mulai sekitar 7 tahun" },
    { label: "Untuk orang tua", value: "babysitter atas permintaan" },
    { label: `Tur keluarga ${FAM_DAYS} hari mulai`, value: `${eur("id-ID")} per orang` },
  ],
  story: {
    eyebrow: "Keluarga",
    heading: "Perjalanan yang akan diceritakan anak-anak kepada anak mereka",
    paragraphs: [
      "Kami menyusun setiap hari agar momen-momen itu datang pada jam terbaiknya: monumen di pagi yang sejuk, kolam renang di siang hari, dan setiap hari sesuatu yang bisa dikerjakan anak-anak dengan tangan mereka sendiri — membuat papirus, memasak, naik unta.",
      "Dan kami menyediakan waktu untuk Anda berdua. Babysitter tepercaya dan berpengalaman menemani anak-anak selama Anda berlayar dengan felucca saat matahari terbenam, makan malam dengan santai, atau menghabiskan satu jam di spa. Kursi anak sudah terpasang di mobil saat Anda mendarat, dan Egyptologist Anda tahu bahwa pertanyaan anak delapan tahun adalah bagian terbaik dari kunjungan.",
    ],
    quote: "Liburan keluarga terbaik adalah yang membuat setiap orang pulang dengan momen favorit yang berbeda.",
    photos: family("Keluarga tamu Kemet bersama anak-anak bersorak di kaki Piramida Merah Dahshur", "Tamu kami di Dahshur"),
  },
  sections: [
    {
      title: "Hari-hari untuk anak-anak",
      body:
        "Grand Egyptian Museum punya museum anak-anaknya sendiri, dan Aula Mumi Kerajaan di Museum Nasional Peradaban Mesir menjadi puncak perjalanan bagi kebanyakan anak berusia delapan tahun ke atas. Tambahkan felucca di Sungai Nil — cara paling tenang mengenal sungai itu — dan beberapa hari snorkeling di Laut Merah sebagai penutup.",
    },
    {
      title: "Ritme yang dibutuhkan keluarga",
      body:
        "Kunjungan yang sangat panjang melelahkan anak di bawah enam tahun. Kami menaruh monumen di pagi hari, menyisakan siang untuk hotel dan kolam renang, serta memperhatikan panas dan minum air — terutama untuk anak di bawah sepuluh tahun. Libur sekolah Juni–Juli jatuh di musim panas, jadi untuk Lembah Nil kami sarankan Desember atau tinggal lebih lama di Laut Merah.",
    },
    {
      title: "Apakah Mesir aman untuk keluarga?",
      body:
        "Ya. Orang Mesir sangat hangat dan perhatian kepada anak-anak, dan kawasan wisata utama aman untuk keluarga. Hal praktisnya adalah panas, ritme, dan cukup minum — dan semua itu masuk dalam rencana kami.",
    },
  ],
  touches: {
    eyebrow: "Untuk keluarga",
    heading: "Yang kami siapkan untuk keluarga",
    intro: "Atas permintaan dan dirinci dalam penawaran, agar perjalanan pas untuk keluarga Anda.",
    items: [
      { symbol: "horus", title: "Babysitter untuk malam hari", text: "Babysitter atau pengasuh tepercaya dan berpengalaman, agar Anda berdua bisa makan malam, ke spa, atau menikmati malam yang tenang di tepi Sungai Nil." },
      { symbol: "camel", title: "Kegiatan yang tak terlupakan", text: "Naik unta di dekat piramida, membuat papirus, kelas memasak untuk anak, museum anak di Grand Egyptian Museum, felucca di Sungai Nil." },
      { symbol: "ankh", title: "Kursi anak di setiap mobil", text: "Kursi anak dan booster terpasang di kendaraan kami dan siap saat Anda tiba." },
      { symbol: "eye", title: "Pemandu yang disukai anak", text: "Egyptologist yang terbiasa dengan pelancong cilik, yang menceritakan kisah para firaun sampai anak-anak minta lagi." },
      { symbol: "scarab", title: "Ulang tahun di perjalanan", text: "Kue dan kamar atau kabin yang dihias untuk ulang tahun anak — atau orang tua." },
      { symbol: "palm", title: "Spa untuk orang tua", text: "Pijat di hotel sementara anak-anak diasuh dengan baik." },
    ],
  },
  faqs: [
    { q: "Mulai usia berapa anak cocok diajak ke Mesir?", a: "Tidak ada batas usia minimal. Sekitar usia tujuh atau delapan tahun, anak-anak benar-benar tertarik pada monumen — piramida serta kisah mumi dan firaun memikat usia ini. Anak yang lebih kecil menikmati Sungai Nil, hewan, dan makanannya, meski lebih sedikit yang diingat." },
    { q: "Apakah tersedia babysitter?", a: "Ya, atas permintaan: babysitter tepercaya dan berpengalaman, agar orang tua juga punya waktu untuk makan malam atau satu jam di spa." },
    { q: "Bagaimana dengan makanan halal dan salat?", a: "Mesir negeri mayoritas Muslim: makanan halal mudah ditemukan dan masjid ada di mana-mana. Kami menyusun hari agar waktu salat terjaga, termasuk salat Jumat." },
    { q: "Kapan waktu terbaik bersama anak-anak?", a: "Oktober sampai April, termasuk libur akhir tahun di bulan Desember. Libur Juni–Juli jatuh di musim panas: Lembah Nil terlalu panas untuk anak-anak, tetapi Laut Merah sangat menyenangkan." },
  ],
  cta: {
    heading: "Ceritakan tentang keluarga Anda",
    text: "Tanggal, jumlah anak, dan usia mereka sudah cukup: kami menyusun perjalanan dengan rincian harga, tanpa komitmen.",
    whatsapp: "Halo Kemet — kami merencanakan liburan keluarga ke Mesir bersama anak-anak.",
    emailSubject: "Liburan keluarga ke Mesir — pertanyaan",
  },
  moreLabel: "Lanjutkan",
  moreRoute: "id/paket-tour-mesir.html",
  moreText: "Semua rute privat kami ada di halaman paket tour Mesir.",
  links: [
    { label: "Libur akhir tahun", route: "id/libur-akhir-tahun-ke-mesir.html" },
    { label: "Apakah Mesir aman?", route: "id/apakah-mesir-aman.html" },
    { label: "Halal & waktu salat", route: "id/halal-dan-waktu-salat.html" },
  ],
};

// ── Malay ───────────────────────────────────────────────────────────────────
export const msFamily: LocalizedPage = {
  groupId: "standalone-ms-family",
  symbol: "camel",
  theme: "family",
  title: "Percutian Keluarga ke Mesir Bersama Anak-Anak | Kemet",
  description:
    "Percutian keluarga ke Mesir: piramid, mumia, menunggang unta dan felucca di Sungai Nil — dengan pengasuh, kerusi kanak-kanak, pemandu mesra kanak-kanak, halal.",
  keywords:
    "percutian keluarga ke mesir, pakej mesir keluarga, mesir bersama anak, lawatan mesir untuk kanak-kanak, pelayaran sungai nil keluarga, cuti sekolah ke mesir",
  crumb: "Percutian keluarga",
  h1: "Percutian Keluarga di Mesir",
  standfirst:
    "Perjalanan yang suatu hari akan diceritakan anak-anak anda kepada anak-anak mereka.",
  lede:
    "Mesir ialah salah satu tempat yang jarang ada, di mana kanak-kanak dan ibu bapa kagum pada perkara yang sama. Piramid Agung betul-betul sebesar yang dibayangkan kanak-kanak; mumia betul-betul semisteri itu; unta betul-betul selucu itu. Makanan halal dan waktu solat diambil kira setiap hari perjalanan.",
  facts: [
    { label: "Masa terbaik", value: "Oktober hingga April" },
    { label: "Umur ideal", value: "dari sekitar 7 tahun" },
    { label: "Untuk ibu bapa", value: "pengasuh atas permintaan" },
    { label: `Lawatan keluarga ${FAM_DAYS} hari dari`, value: `${eur("ms-MY")} seorang` },
  ],
  story: {
    eyebrow: "Keluarga",
    heading: "Perjalanan yang akan diceritakan anak-anak kepada anak mereka",
    paragraphs: [
      "Kami menyusun setiap hari supaya saat-saat itu tiba pada waktu terbaiknya: monumen pada pagi yang sejuk, kolam renang pada waktu tengah hari, dan setiap hari sesuatu yang dibuat kanak-kanak dengan tangan sendiri — membuat papirus, memasak, menunggang unta.",
      "Dan kami menyediakan masa untuk anda berdua. Pengasuh yang dipercayai dan berpengalaman menemani kanak-kanak semasa anda belayar dengan felucca ketika matahari terbenam, makan malam dengan santai, atau menghabiskan sejam di spa. Kerusi kanak-kanak sudah dipasang di dalam kereta apabila anda mendarat, dan Egyptologist anda tahu bahawa soalan kanak-kanak lapan tahun ialah bahagian terbaik lawatan.",
    ],
    quote: "Percutian keluarga terbaik ialah yang membuat setiap orang pulang dengan saat kegemaran yang berbeza.",
    photos: family("Sebuah keluarga tetamu Kemet bersama anak-anak bersorak di kaki Piramid Merah Dahshur", "Tetamu kami di Dahshur"),
  },
  sections: [
    {
      title: "Hari-hari untuk kanak-kanak",
      body:
        "Grand Egyptian Museum mempunyai muzium kanak-kanaknya sendiri, dan Dewan Mumia Diraja di Muzium Kebangsaan Tamadun Mesir menjadi kemuncak perjalanan bagi kebanyakan kanak-kanak berumur lapan tahun ke atas. Tambahkan felucca di Sungai Nil — cara paling tenang untuk mengenali sungai itu — dan beberapa hari snorkeling di Laut Merah sebagai penutup.",
    },
    {
      title: "Rentak yang diperlukan keluarga",
      body:
        "Lawatan yang terlalu panjang meletihkan kanak-kanak di bawah enam tahun. Kami meletakkan monumen pada waktu pagi, membiarkan tengah hari untuk hotel dan kolam renang, serta menjaga soal panas dan minum air — terutamanya untuk kanak-kanak di bawah sepuluh tahun. Cuti sekolah hujung tahun pada bulan Disember ialah masa terbaik untuk Lembah Nil.",
    },
    {
      title: "Adakah Mesir selamat untuk keluarga?",
      body:
        "Ya. Orang Mesir sangat mesra dan prihatin terhadap kanak-kanak, dan kawasan pelancongan utama selamat untuk keluarga. Perkara praktikalnya ialah panas, rentak dan cukup minum — dan semuanya ada dalam rancangan kami.",
    },
  ],
  touches: {
    eyebrow: "Untuk keluarga",
    heading: "Apa yang kami aturkan untuk keluarga",
    intro: "Atas permintaan dan diperincikan dalam sebut harga, supaya perjalanan sesuai dengan keluarga anda.",
    items: [
      { symbol: "horus", title: "Pengasuh untuk waktu malam", text: "Pengasuh yang dipercayai dan berpengalaman, supaya anda berdua boleh makan malam, ke spa, atau menikmati malam yang tenang di tebing Sungai Nil." },
      { symbol: "camel", title: "Aktiviti yang tidak dilupakan", text: "Menunggang unta berhampiran piramid, membuat papirus, kelas memasak kanak-kanak, muzium kanak-kanak di Grand Egyptian Museum, felucca di Sungai Nil." },
      { symbol: "ankh", title: "Kerusi kanak-kanak dalam setiap kereta", text: "Kerusi kanak-kanak dan booster dipasang dalam kenderaan kami dan sedia apabila anda tiba." },
      { symbol: "eye", title: "Pemandu yang disukai kanak-kanak", text: "Egyptologist yang biasa dengan pelancong cilik, yang menceritakan kisah firaun sehingga kanak-kanak mahu mendengar lagi." },
      { symbol: "scarab", title: "Hari jadi dalam perjalanan", text: "Kek dan bilik atau kabin yang dihias untuk hari jadi kanak-kanak — atau ibu bapa." },
      { symbol: "palm", title: "Spa untuk ibu bapa", text: "Urutan di hotel sementara kanak-kanak dijaga dengan baik." },
    ],
  },
  faqs: [
    { q: "Dari umur berapa kanak-kanak sesuai dibawa ke Mesir?", a: "Tiada had umur minimum. Sekitar tujuh atau lapan tahun, kanak-kanak benar-benar berminat dengan monumen — piramid serta kisah mumia dan firaun memikat umur ini. Kanak-kanak yang lebih kecil menikmati Sungai Nil, haiwan dan makanannya, walaupun kurang yang diingati." },
    { q: "Adakah pengasuh disediakan?", a: "Ya, atas permintaan: pengasuh yang dipercayai dan berpengalaman, supaya ibu bapa juga ada masa untuk makan malam atau sejam di spa." },
    { q: "Bagaimana dengan makanan halal dan solat?", a: "Mesir negara majoriti Muslim: makanan halal mudah didapati dan masjid ada di mana-mana. Kami menyusun hari supaya waktu solat terjaga, termasuk solat Jumaat." },
    { q: "Bilakah masa terbaik bersama kanak-kanak?", a: "Oktober hingga April, termasuk cuti sekolah hujung tahun. Pada musim panas Lembah Nil terlalu panas untuk kanak-kanak, tetapi Laut Merah sangat menyeronokkan." },
  ],
  cta: {
    heading: "Ceritakan tentang keluarga anda",
    text: "Tarikh, bilangan anak dan umur mereka sudah cukup: kami menyusun perjalanan dengan perincian harga, tanpa komitmen.",
    whatsapp: "Salam Kemet — kami merancang percutian keluarga ke Mesir bersama anak-anak.",
    emailSubject: "Percutian keluarga ke Mesir — pertanyaan",
  },
  moreLabel: "Teruskan",
  moreRoute: "ms/pakej-pelancongan-mesir.html",
  moreText: "Semua laluan persendirian kami ada di halaman pakej pelancongan Mesir.",
  links: [
    { label: "Cuti hujung tahun", route: "ms/cuti-hujung-tahun-ke-mesir.html" },
    { label: "Adakah Mesir selamat?", route: "ms/adakah-mesir-selamat.html" },
    { label: "Halal & waktu solat", route: "ms/halal-dan-waktu-solat.html" },
  ],
};

// ── Arabic ──────────────────────────────────────────────────────────────────
export const arFamily: LocalizedPage = {
  groupId: "standalone-ar-family",
  symbol: "camel",
  theme: "family",
  title: "رحلة عائلية إلى مصر مع الأطفال | كيميت",
  description:
    "رحلة عائلية إلى مصر: الأهرامات، والمومياوات، وركوب الجمال، والفلوكة في النيل — مع مربية، ومقاعد للأطفال، ومرشدين يحبهم الصغار، وطعام حلال.",
  keywords:
    "رحلة عائلية إلى مصر، مصر مع الأطفال، سياحة عائلية في مصر، أنشطة للأطفال في مصر، رحلة نيلية للعائلات، عطلة الشتاء في مصر",
  crumb: "رحلة عائلية",
  h1: "رحلة عائلية إلى مصر",
  standfirst:
    "رحلة سيحكيها أطفالكم يوماً لأطفالهم.",
  lede:
    "مصر من الأماكن النادرة التي يندهش فيها الصغار والكبار من الأشياء نفسها. الهرم الأكبر ضخم تماماً كما يتمنّاه الطفل، والمومياء غامضة تماماً كما يتخيّلها، والجمل مضحك تماماً كما يأمل. ونراعي في كل يوم الطعام الحلال ومواعيد الصلاة وخصوصية العائلة.",
  facts: [
    { label: "أفضل وقت", value: "عطلة الشتاء ومن أكتوبر إلى أبريل" },
    { label: "العمر المثالي", value: "من نحو ٧ سنوات" },
    { label: "للوالدين", value: "مربية عند الطلب" },
    { label: `رحلة عائلية ${Number(FAM_DAYS).toLocaleString("ar-EG")} أيام تبدأ من`, value: `${FAM.price.toLocaleString("ar-EG")} يورو للفرد` },
  ],
  story: {
    eyebrow: "العائلات",
    heading: "رحلة سيحكيها أطفالكم لأطفالهم",
    paragraphs: [
      "نرتّب كل يوم بحيث تأتي هذه اللحظات في أفضل ساعاتها: المعالم في برودة الصباح، والمسبح بعد الظهر، وكل يوم نشاط يصنعه الأطفال بأيديهم — ورق البردي، أو حصة طبخ، أو ركوب جمل.",
      "ونخصّص وقتاً لكما أيضاً. مربية موثوقة وذات خبرة تبقى مع الأطفال بينما تبحران بالفلوكة وقت الغروب، أو تتناولان العشاء على مهل، أو تقضيان ساعة في السبا. مقاعد الأطفال في السيارة من لحظة وصولكم، ومرشدكم يعرف أن أسئلة طفل في الثامنة هي أجمل ما في الزيارة.",
    ],
    quote: "أجمل الرحلات العائلية هي التي يعود منها كل فرد بلحظته المفضّلة المختلفة.",
    photos: family("عائلة من ضيوف كيميت مع أطفالها تحتفل عند سفح الهرم الأحمر في دهشور", "ضيوفنا في دهشور"),
  },
  sections: [
    {
      title: "أيام للأطفال",
      body:
        "في المتحف المصري الكبير متحف خاص بالأطفال، وقاعة المومياوات الملكية في المتحف القومي للحضارة المصرية هي أجمل ما في الرحلة لمعظم الأطفال من سن الثامنة. وأضيفوا فلوكة في النيل — أهدأ طريقة للتعرّف على النهر — وأياماً من الغطس السطحي في البحر الأحمر في الختام.",
    },
    {
      title: "الإيقاع الذي تحتاجه العائلة",
      body:
        "الزيارات الطويلة جداً ترهق الأطفال دون السادسة. نضع المعالم في الصباح، ونترك ما بعد الظهر للفندق والمسبح، وننتبه للحرارة وشرب الماء — خصوصاً لمن هم دون العاشرة. وعطلة الصيف في الخليج حارّة في وادي النيل، فالأفضل لها البحر الأحمر، أما عطلة الشتاء فهي أجمل وقت للنيل.",
    },
    {
      title: "هل مصر آمنة للعائلات؟",
      body:
        "نعم. المصريون ودودون جداً مع الأطفال، والمناطق السياحية الرئيسية آمنة للعائلات. والأمور العملية هي الحرارة والإيقاع وشرب الماء — ونحسب حسابها كلها في البرنامج.",
    },
  ],
  touches: {
    eyebrow: "مصمَّم للعائلات",
    heading: "ما نرتّبه للعائلات",
    intro: "عند الطلب، ومذكور بنداً منفصلاً في عرض السعر، لتكون الرحلة على مقاس عائلتكم.",
    items: [
      { symbol: "horus", title: "مربية للأمسيات", text: "مربية موثوقة وذات خبرة مع الأطفال، لتتناولا العشاء معاً، أو تذهبا إلى السبا، أو تقضيا أمسية هادئة على النيل." },
      { symbol: "camel", title: "أنشطة لا تُنسى", text: "ركوب الجمال قرب الأهرامات، وصناعة ورق البردي، وحصة طبخ للأطفال، ومتحف الأطفال في المتحف المصري الكبير، وفلوكة في النيل." },
      { symbol: "ankh", title: "مقاعد أطفال في كل سيارة", text: "مقاعد الأطفال والمقاعد المرتفعة مثبّتة في سياراتنا وجاهزة لحظة وصولكم." },
      { symbol: "eye", title: "مرشدون يحبهم الصغار", text: "مرشدون معتادون على الأطفال، يحكون قصة الفراعنة بطريقة تجعل الطفل يطلب المزيد." },
      { symbol: "scarab", title: "عيد ميلاد في الرحلة", text: "كعكة وغرفة أو قمرة مزيّنة لعيد ميلاد أحد الأطفال — أو أحد الوالدين." },
      { symbol: "palm", title: "سبا للوالدين", text: "جلسة تدليك في الفندق بينما الأطفال في رعاية جيدة." },
    ],
  },
  faqs: [
    { q: "من أي عمر تناسب الرحلة الأطفال؟", a: "لا يوجد حدّ أدنى للعمر. من نحو السابعة أو الثامنة يتفاعل الأطفال فعلاً مع المعالم — فالأهرامات وحكايات المومياوات والفراعنة تأسر هذا العمر. والأصغر سناً يستمتعون بالنيل والحيوانات والطعام، وإن كانوا يتذكّرون أقل." },
    { q: "هل توفّرون مربية؟", a: "نعم، عند الطلب: مربية موثوقة وذات خبرة، ليحظى الوالدان أيضاً بأمسية أو عشاء أو ساعة في السبا." },
    { q: "هل الطعام حلال وهل نراعي الصلاة؟", a: "نعم. مصر بلد أغلب أهله مسلمون، والطعام الحلال متوفر في كل مكان، والمساجد قريبة دائماً. ونرتّب اليوم بحيث تُحفظ مواعيد الصلاة، ومنها صلاة الجمعة." },
    { q: "متى أفضل وقت للعائلات؟", a: "من أكتوبر إلى أبريل، وعطلة الشتاء تقع في هذه الفترة. وفي الصيف يكون وادي النيل حاراً جداً على الأطفال، بينما البحر الأحمر ممتع." },
  ],
  cta: {
    heading: "حدّثونا عن عائلتكم",
    text: "التواريخ وعدد الأطفال وأعمارهم تكفي: نرتّب الرحلة بسعر مفصّل، دون أي التزام.",
    whatsapp: "السلام عليكم كيميت — نخطّط لرحلة عائلية إلى مصر مع الأطفال.",
    emailSubject: "رحلة عائلية إلى مصر — استفسار",
  },
  moreLabel: "للمتابعة",
  moreRoute: "ar/rehlat-masr-khassa.html",
  moreText: "برامجنا الخاصة كلها في صفحة الرحلات.",
  links: [
    { label: "هل مصر آمنة؟", route: "ar/hal-masr-amina.html" },
    { label: "رحلة نيلية خاصة", route: "ar/rehla-niliya-khassa.html" },
    { label: "أفضل وقت لزيارة مصر", route: "ar/afdal-waqt-lizyarat-masr.html" },
  ],
};
