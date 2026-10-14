// ---------------------------------------------------------------------------
// Sunrise at the nine pyramids of Giza — one page per language.
//
// Confirmed by the owner on 11 Oct 2026: we arrive before sunrise at a quiet
// viewpoint from which all nine pyramids of Giza are seen together, and the
// time there is the guests' own — for yoga, a photo session or nothing at
// all — before the guided early-access visit to the plateau. The English
// original is experiences/sunrise-giza-pyramids.html; the Italian edition,
// written first, is itAlbaPiramidi in it-extra.ts.
//
// What these pages do NOT promise, because it was not confirmed: a yoga
// teacher or a mat; guests bring their own. A professional photographer IS
// arranged on request — confirmed by the owner on 13 Oct 2026, with flowers
// and decoration for a proposal or a wedding-dress shoot (see honeymoon.ts).
//
// Standalone pages rather than a translation group: a group needs every
// locale and an English page built from the same template, and the English
// original is an experience page with its own template (see standalone.ts).
//
// The photographs are our own guests at the panorama point, by day, plus
// the camel at first light and the Sphinx — the alt text says which is which.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import type { MediaPlaceholder } from "@/types/primitives";

/** The same four photographs on every edition, described in its language. */
function photos(alt: [string, string, string, string], label: [string, string, string, string]): MediaPlaceholder[] {
  return [
    { alt: alt[0], label: label[0], src: "/images/clients/clients-26-giza-pose.webp", width: 680, height: 680 },
    { alt: alt[1], label: label[1], src: "/images/giza/giza-camel-pyramids-sunrise.webp", width: 736, height: 736 },
    { alt: alt[2], label: label[2], src: "/images/clients/clients-09-giza-panorama.webp", width: 680, height: 680 },
    { alt: alt[3], label: label[3], src: "/images/giza/giza-great-sphinx-frontal.webp", width: 736, height: 920 },
  ];
}

// ── German ──────────────────────────────────────────────────────────────────
export const deSunrise: LocalizedPage = {
  groupId: "standalone-de-sunrise",
  symbol: "sun",
  theme: "sunrise",
  title: "Sonnenaufgang Pyramiden Gizeh: Yoga & Fotoshooting | Kemet",
  description:
    "Vor Sonnenaufgang an einem ruhigen Aussichtspunkt mit allen neun Pyramiden von Gizeh — Zeit für Yoga oder ein Fotoshooting, danach das Plateau vor der Öffnung.",
  keywords:
    "sonnenaufgang pyramiden gizeh, yoga bei den pyramiden, fotoshooting pyramiden, neun pyramiden aussichtspunkt, pyramiden privat früh, sonnenaufgang ägypten",
  crumb: "Sonnenaufgang an den Pyramiden",
  h1: "Sonnenaufgang an den neun Pyramiden von Gizeh",
  standfirst:
    "Vor Sonnenaufgang an einem stillen Aussichtspunkt, von dem aus alle neun Pyramiden zu sehen sind — die erste Stunde gehört Ihnen: für Yoga, ein Fotoshooting oder einfach den Blick.",
  lede:
    "Bevor die Tagesbesucher kommen, liegt die Wüste vor Gizeh still. Wir sind vor Sonnenaufgang an einem ruhigen Aussichtspunkt, von dem aus alle neun Pyramiden von Gizeh zusammen zu sehen sind: die drei großen Pyramiden und die sechs kleineren Königinnenpyramiden neben ihnen. Wenn der Himmel im Osten von Violett zu Bernstein wechselt, treten ihre Umrisse aus dem Dunkel — darunter die Cheops-Pyramide, das einzige der Sieben Weltwunder der Antike, das noch steht.",
  facts: [
    { label: "Dauer", value: "3–4 Stunden" },
    { label: "Beginn", value: "vor Sonnenaufgang" },
    { label: "Der Blick", value: "alle neun Pyramiden von Gizeh" },
    { label: "Führung", value: "lizenziert, auf Deutsch" },
  ],
  sections: [
    {
      title: "Neun Pyramiden in einer Linie",
      body:
        "Von diesem Punkt in der Wüste stehen alle neun Pyramiden von Gizeh nebeneinander: Cheops, Chephren und Mykerinos, dazu drei Königinnenpyramiden neben der Cheops- und drei neben der Mykerinos-Pyramide. Um diese Stunde ist es dort ruhig — kein Bus, kein Händler, nur das Licht, das langsam über den Stein wandert.",
    },
    {
      title: "Die erste Stunde gehört Ihnen",
      body:
        "Was Sie mit ihr machen, entscheiden Sie: eine Yogamatte ausrollen und den Sonnengruß wörtlich nehmen, ein Fotoshooting im weichen Morgenlicht — mit einem Fotografen, den wir auf Wunsch organisieren, oder mit Ihrer eigenen Kamera — oder einfach sitzen und schauen. Ihr Ägyptologe hält sich zurück und lässt Ihnen Raum und Zeit.",
    },
    {
      title: "Danach das Plateau, vor der Öffnung",
      body:
        "Anschließend beginnt der private Frühzugang zum Plateau, bevor es für die Tagesbesucher öffnet — mit einem lizenzierten Ägyptologen nur für Ihre Gruppe, auf Deutsch. Auf dem fast leeren Gelände gehen Sie in Ihrem Tempo, fotografieren ohne Menschenmengen und sehen den Bezirk der Sphinx im ersten Licht, bevor die Reisebusse kommen.",
    },
    {
      title: "Wie Sie sich vorbereiten",
      body:
        "Ziehen Sie sich in Schichten an: Im Winter sind die Wüstenmorgen kalt, auch wenn es mittags warm wird. Eine kleine Taschenlampe hilft auf dem Weg vor Sonnenaufgang, feste, flache Schuhe auf Sand und Kies. Für Yoga bringen Sie bitte Ihre eigene Matte mit; für Fotos bringt ein Weitwinkelobjektiv alle neun Pyramiden in ein einziges Bild.",
    },
  ],
  photos: photos(
    [
      "Kemet-Gäste am Panoramapunkt von Gizeh, die Pyramiden in einer Linie hinter ihnen",
      "Ein geschmücktes Kamel ruht im ersten Licht vor den Pyramiden von Gizeh",
      "Kemet-Gäste am Panorama von Gizeh, die Pyramiden am Horizont",
      "Die Große Sphinx von Gizeh, der Morgensonne zugewandt",
    ],
    ["Der Aussichtspunkt", "Erstes Licht", "Die Pyramiden in einer Linie", "Die Sphinx"],
  ),
  highlights: {
    heading: "Auf einen Blick",
    items: [
      "Vor Sonnenaufgang an einem ruhigen Aussichtspunkt mit allen neun Pyramiden",
      "Freie Zeit im ersten Licht — für Yoga, ein Fotoshooting oder den Blick",
      "Privater Frühzugang zum Plateau, vor der öffentlichen Öffnung",
      "Lizenzierter Ägyptologe nur für Ihre Gruppe, auf Deutsch",
      "Abholung und Rückfahrt zum Hotel inklusive (Kairo und Gizeh)",
    ],
  },
  faqs: [
    {
      q: "Wann geht es los?",
      a: "Das hängt von der Jahreszeit und der Uhrzeit des Sonnenaufgangs ab: Meist holen wir Sie zwischen 5:00 und 6:30 Uhr im Hotel ab. Die genaue Zeit bestätigen wir bei der Buchung.",
    },
    {
      q: "Welche sind die neun Pyramiden?",
      a: "Die drei großen — Cheops, Chephren und Mykerinos — und sechs kleinere Königinnenpyramiden: drei neben der Cheops- und drei neben der Mykerinos-Pyramide. Vom Aussichtspunkt, zu dem wir Sie vor Sonnenaufgang bringen, sieht man alle neun zusammen.",
    },
    {
      q: "Können wir dort Yoga machen oder ein Fotoshooting?",
      a: "Ja — genau dafür ist die Zeit am Aussichtspunkt da. Bringen Sie eine Matte für Yoga mit; für ein Shooting organisieren wir auf Wunsch einen professionellen Fotografen — auch für ein Shooting im Brautkleid oder einen Heiratsantrag, mit Blumen, die bereitstehen, bevor Sie ankommen. Um diese Stunde ist es dort ruhig, und Ihr Ägyptologe lässt Ihnen Raum und Zeit, bevor der Besuch auf dem Plateau beginnt.",
    },
    {
      q: "Ist das für Kinder geeignet?",
      a: "Ja. Man geht ruhig auf befestigten und sandigen Wegen, es passt für fast jedes Alter, und die Führung erzählt so, dass auch junge Zuhörer folgen.",
    },
    {
      q: "Spricht der Guide Deutsch?",
      a: "Ja: Die Führung gibt es auf Deutsch, mit einem Ägyptologen aus unserem Team. Sagen Sie es uns bei der Buchung.",
    },
  ],
  cta: {
    heading: "Nennen Sie uns Ihren Tag in Kairo",
    text: "Mit Datum und Personenzahl bestätigen wir die Uhrzeit des Sonnenaufgangs und den Preis — Eintritt zum Plateau und Führung sind inbegriffen.",
    whatsapp: "Guten Tag Kemet — wir möchten den Sonnenaufgang an den Pyramiden von Gizeh.",
    emailSubject: "Sonnenaufgang an den Pyramiden — Anfrage",
  },
  moreLabel: "Weiter",
  moreRoute: "de/gizeh-und-grand-egyptian-museum.html",
  moreText: "Gizeh bei Tag, mit dem Grand Egyptian Museum — unsere ganze Tagestour.",
  links: [
    { label: "Monumente exklusiv mieten", route: "de/exklusive-nutzung-monumente-aegypten.html" },
    { label: "Kairo VIP in 3 Tagen", route: "de/kairo-kurzreise-vip-3-tage.html" },
    { label: "Beste Reisezeit für Ägypten", route: "de/beste-reisezeit-aegypten.html" },
  ],
};

// ── French ──────────────────────────────────────────────────────────────────
export const frSunrise: LocalizedPage = {
  groupId: "standalone-fr-sunrise",
  symbol: "sun",
  theme: "sunrise",
  title: "Lever du soleil aux pyramides : yoga et photos | Kemet",
  description:
    "Avant l'aube, un point de vue tranquille sur les neuf pyramides de Gizeh — yoga ou séance photo — puis le plateau avant l'ouverture, avec votre égyptologue.",
  keywords:
    "lever du soleil pyramides gizeh, yoga pyramides, séance photo pyramides, point de vue neuf pyramides, visite privée pyramides aube, lever de soleil égypte",
  crumb: "Lever du soleil aux pyramides",
  h1: "Le lever du soleil sur les neuf pyramides de Gizeh",
  standfirst:
    "Avant l'aube, un point de vue tranquille d'où l'on voit les neuf pyramides — la première heure vous appartient : yoga, séance photo ou simplement le regard.",
  lede:
    "Avant l'arrivée des visiteurs de la journée, le désert de Gizeh est silencieux. Nous arrivons avant le lever du soleil à un point de vue tranquille d'où l'on voit ensemble les neuf pyramides de Gizeh : les trois grandes et les six petites pyramides des reines qui les bordent. Quand le ciel passe, à l'est, du violet à l'ambre, leurs silhouettes sortent de l'ombre — parmi elles la pyramide de Khéops, la seule des Sept Merveilles du monde antique encore debout.",
  facts: [
    { label: "Durée", value: "3 à 4 heures" },
    { label: "Départ", value: "avant l'aube" },
    { label: "La vue", value: "les neuf pyramides de Gizeh" },
    { label: "Guide", value: "égyptologue agréé, en français" },
  ],
  sections: [
    {
      title: "Neuf pyramides sur une seule ligne",
      body:
        "De ce point du désert, les neuf pyramides de Gizeh se tiennent côte à côte : Khéops, Khéphren et Mykérinos, plus trois pyramides de reines près de Khéops et trois près de Mykérinos. À cette heure, l'endroit est calme — ni autocar ni vendeur, seulement la lumière qui glisse lentement sur la pierre.",
    },
    {
      title: "La première heure est à vous",
      body:
        "C'est vous qui décidez : dérouler un tapis et faire votre yoga face au soleil levant, organiser une séance photo dans la lumière douce du matin — avec un photographe professionnel que nous organisons sur demande, ou votre propre appareil —, ou simplement vous asseoir et regarder. Votre égyptologue se met en retrait et vous laisse l'espace et le temps.",
    },
    {
      title: "Puis le plateau, avant l'ouverture",
      body:
        "Commence ensuite l'accès privé anticipé au plateau, avant son ouverture aux visiteurs de la journée, avec un égyptologue agréé pour votre seul groupe, en français. Le site presque vide, vous avancez à votre rythme, photographiez sans foule et découvrez l'enclos du Sphinx dans la première lumière, avant les autocars.",
    },
    {
      title: "Comment se préparer",
      body:
        "Habillez-vous en couches : en hiver, les matins du désert sont froids, même s'il fait chaud à midi. Une petite lampe aide pour la marche avant l'aube, et des chaussures fermées et plates conviennent au sable et au gravier. Pour le yoga, apportez votre propre tapis ; pour les photos, un grand-angle fait tenir les neuf pyramides dans une seule image.",
    },
  ],
  photos: photos(
    [
      "Des voyageurs Kemet au point de vue panoramique de Gizeh, les pyramides alignées derrière eux",
      "Un chameau paré se repose devant les pyramides de Gizeh à la première lumière",
      "Des voyageurs Kemet au panorama de Gizeh, les pyramides à l'horizon",
      "Le grand Sphinx de Gizeh, tourné vers l'aube",
    ],
    ["Le point de vue", "Première lumière", "Les pyramides alignées", "Le Sphinx"],
  ),
  highlights: {
    heading: "En bref",
    items: [
      "Avant l'aube, un point de vue tranquille sur les neuf pyramides",
      "Du temps libre à la première lumière — yoga, séance photo ou simplement la vue",
      "Accès privé anticipé au plateau, avant l'ouverture au public",
      "Égyptologue agréé pour votre seul groupe, en français",
      "Prise en charge et retour à l'hôtel compris (Le Caire et Gizeh)",
    ],
  },
  faqs: [
    {
      q: "À quelle heure commence-t-on ?",
      a: "Cela dépend de la saison et de l'heure du lever du soleil : nous venons généralement vous chercher à l'hôtel entre 5 h et 6 h 30. L'heure exacte est confirmée à la réservation.",
    },
    {
      q: "Quelles sont les neuf pyramides ?",
      a: "Les trois grandes — Khéops, Khéphren et Mykérinos — et six petites pyramides de reines : trois près de Khéops et trois près de Mykérinos. Depuis le point de vue où nous vous emmenons avant l'aube, on les voit toutes les neuf ensemble.",
    },
    {
      q: "Peut-on y faire du yoga ou une séance photo ?",
      a: "Oui — c'est précisément à cela que sert le temps passé au point de vue. Apportez un tapis pour le yoga ; pour une séance photo, nous organisons sur demande un photographe professionnel — y compris pour une séance en robe de mariée ou une demande en mariage, avec des fleurs installées avant votre arrivée. L'endroit est calme à cette heure, et votre égyptologue vous laisse l'espace et le temps avant la visite du plateau.",
    },
    {
      q: "Est-ce adapté aux enfants ?",
      a: "Oui. On marche tranquillement sur des allées pavées et sableuses ; c'est adapté à presque tous les âges, et le guide adapte le récit aux plus jeunes.",
    },
    {
      q: "Le guide parle-t-il français ?",
      a: "Oui : la visite se fait en français, avec un égyptologue de notre équipe. Dites-le-nous à la réservation.",
    },
  ],
  cta: {
    heading: "Dites-nous votre jour au Caire",
    text: "Avec la date et le nombre de personnes, nous vous confirmons l'heure du lever du soleil et le prix — l'entrée du plateau et le guide sont compris.",
    whatsapp: "Bonjour Kemet — nous aimerions le lever du soleil aux pyramides de Gizeh.",
    emailSubject: "Lever du soleil aux pyramides — demande",
  },
  moreLabel: "Continuer",
  moreRoute: "fr/gizeh-et-grand-musee-egyptien.html",
  moreText: "Gizeh de jour, avec le Grand Musée égyptien — notre journée complète.",
  links: [
    { label: "Monuments en exclusivité", route: "fr/monuments-en-exclusivite-egypte.html" },
    { label: "Le Caire VIP en 3 jours", route: "fr/le-caire-vip-3-jours.html" },
    { label: "Quand partir en Égypte", route: "fr/quand-partir-en-egypte.html" },
  ],
};

// ── Spanish ─────────────────────────────────────────────────────────────────
export const esSunrise: LocalizedPage = {
  groupId: "standalone-es-sunrise",
  symbol: "sun",
  theme: "sunrise",
  title: "Amanecer en las pirámides de Giza: yoga y fotos | Kemet",
  description:
    "Antes del amanecer, un mirador tranquilo frente a las nueve pirámides de Giza — tiempo para yoga o una sesión de fotos — y luego la meseta antes de que abra.",
  keywords:
    "amanecer pirámides de giza, yoga en las pirámides, sesión de fotos pirámides, mirador nueve pirámides, visita privada pirámides al amanecer, amanecer egipto",
  crumb: "Amanecer en las pirámides",
  h1: "El amanecer sobre las nueve pirámides de Giza",
  standfirst:
    "Antes de que salga el sol, en un mirador tranquilo desde el que se ven las nueve pirámides — la primera hora es suya: yoga, una sesión de fotos o simplemente la vista.",
  lede:
    "Antes de que lleguen los visitantes del día, el desierto de Giza está en silencio. Llegamos antes del amanecer a un mirador tranquilo desde el que se ven juntas las nueve pirámides de Giza: las tres grandes y las seis pirámides menores de las reinas que las acompañan. Cuando el cielo del este pasa del violeta al ámbar, sus siluetas salen de la oscuridad — entre ellas la Gran Pirámide de Keops, la única de las Siete Maravillas del mundo antiguo que sigue en pie.",
  facts: [
    { label: "Duración", value: "3–4 horas" },
    { label: "Salida", value: "antes del amanecer" },
    { label: "La vista", value: "las nueve pirámides de Giza" },
    { label: "Guía", value: "con licencia, en español" },
  ],
  sections: [
    {
      title: "Nueve pirámides en una línea",
      body:
        "Desde este punto del desierto, las nueve pirámides de Giza aparecen una junto a otra: Keops, Kefrén y Micerino, más tres pirámides de reinas junto a la de Keops y tres junto a la de Micerino. A esa hora el lugar está tranquilo — ni autocares ni vendedores, solo la luz que avanza despacio sobre la piedra.",
    },
    {
      title: "La primera hora es suya",
      body:
        "Lo que hagan con ella lo deciden ustedes: extender una esterilla y hacer yoga frente al sol que sale, una sesión de fotos con la luz suave de la mañana — con un fotógrafo profesional que organizamos a petición, o con su propia cámara — o simplemente sentarse a mirar. Su egiptólogo se queda en segundo plano y les deja el espacio y el tiempo.",
    },
    {
      title: "Después, la meseta antes de que abra",
      body:
        "Luego empieza el acceso privado anticipado a la meseta, antes de que abra a los visitantes del día, con un egiptólogo con licencia solo para su grupo, en español. Con el recinto casi vacío caminan a su ritmo, fotografían sin multitudes y ven el recinto de la Esfinge con la primera luz, antes de que lleguen los autocares.",
    },
    {
      title: "Cómo prepararse",
      body:
        "Vístanse por capas: en invierno las mañanas del desierto son frías, aunque al mediodía haga calor. Una linterna pequeña ayuda en el camino antes del amanecer, y conviene calzado cerrado y plano para la arena y la grava. Para el yoga, traigan su propia esterilla; para las fotos, un gran angular mete las nueve pirámides en una sola imagen.",
    },
  ],
  photos: photos(
    [
      "Viajeros de Kemet en el mirador panorámico de Giza, con las pirámides en línea detrás",
      "Un camello engalanado descansa ante las pirámides de Giza con la primera luz",
      "Viajeros de Kemet en el panorama de Giza, con las pirámides en el horizonte",
      "La Gran Esfinge de Giza, mirando hacia el amanecer",
    ],
    ["El mirador", "Primera luz", "Las pirámides en línea", "La Esfinge"],
  ),
  highlights: {
    heading: "En resumen",
    items: [
      "Antes del amanecer, en un mirador tranquilo con las nueve pirámides",
      "Tiempo libre con la primera luz — para yoga, una sesión de fotos o la vista",
      "Acceso privado anticipado a la meseta, antes de que abra al público",
      "Egiptólogo con licencia solo para su grupo, en español",
      "Recogida y regreso al hotel incluidos (El Cairo y Giza)",
    ],
  },
  faqs: [
    {
      q: "¿A qué hora se empieza?",
      a: "Depende de la estación y de la hora del amanecer: normalmente les recogemos en el hotel entre las 5:00 y las 6:30. La hora exacta se confirma al reservar.",
    },
    {
      q: "¿Cuáles son las nueve pirámides?",
      a: "Las tres grandes — Keops, Kefrén y Micerino — y seis pirámides menores de reinas: tres junto a la de Keops y tres junto a la de Micerino. Desde el mirador al que les llevamos antes del amanecer se ven las nueve juntas.",
    },
    {
      q: "¿Se puede hacer yoga o una sesión de fotos allí?",
      a: "Sí — para eso es el tiempo en el mirador. Traigan una esterilla para el yoga; para una sesión de fotos organizamos a petición un fotógrafo profesional, también para una sesión con el vestido de novia o una pedida de mano, con flores colocadas antes de que lleguen. A esa hora el lugar está tranquilo, y su egiptólogo les deja el espacio y el tiempo antes de la visita a la meseta.",
    },
    {
      q: "¿Es adecuado para niños?",
      a: "Sí. Se camina con calma por senderos pavimentados y de arena; sirve para casi todas las edades, y el guía adapta el relato a los más pequeños.",
    },
    {
      q: "¿El guía habla español?",
      a: "Sí: la visita se hace en español, con un egiptólogo de nuestro equipo. Indíquenlo al reservar.",
    },
  ],
  cta: {
    heading: "Díganos su día en El Cairo",
    text: "Con la fecha y el número de personas les confirmamos la hora del amanecer y el precio — la entrada a la meseta y el guía están incluidos.",
    whatsapp: "Hola Kemet — nos gustaría el amanecer en las pirámides de Giza.",
    emailSubject: "Amanecer en las pirámides — consulta",
  },
  moreLabel: "Seguir",
  moreRoute: "es/viajes-a-egipto.html",
  moreText: "Si quieren unir el amanecer a un viaje completo, estos son nuestros recorridos privados.",
  links: [
    { label: "Monumentos en exclusiva", route: "es/monumentos-en-exclusiva-egipto.html" },
    { label: "Mejor época para viajar a Egipto", route: "es/mejor-epoca-para-viajar-a-egipto.html" },
    { label: "Semana Santa en Egipto", route: "es/semana-santa-en-egipto.html" },
  ],
};

// ── Russian ─────────────────────────────────────────────────────────────────
export const ruSunrise: LocalizedPage = {
  groupId: "standalone-ru-sunrise",
  symbol: "sun",
  theme: "sunrise",
  title: "Рассвет у пирамид Гизы: йога и фотосессия | Kemet",
  description:
    "До восхода — тихая смотровая точка, откуда видны все девять пирамид Гизы: время для йоги или фотосессии, а затем плато до открытия, с вашим египтологом.",
  keywords:
    "рассвет у пирамид гизы, йога у пирамид, фотосессия у пирамид, девять пирамид смотровая площадка, индивидуальная экскурсия к пирамидам на рассвете, рассвет египет",
  crumb: "Рассвет у пирамид",
  h1: "Рассвет над девятью пирамидами Гизы",
  standfirst:
    "До восхода солнца — тихая смотровая точка, откуда видны все девять пирамид. Первый час принадлежит вам: йога, фотосессия или просто вид.",
  lede:
    "Пока не приехали дневные посетители, пустыня у Гизы молчит. Мы приезжаем до восхода на тихую смотровую точку, откуда все девять пирамид Гизы видны вместе: три великие и шесть малых пирамид цариц рядом с ними. Когда небо на востоке меняет фиолетовый цвет на янтарный, их силуэты выходят из темноты — среди них пирамида Хеопса, единственное из семи чудес света, которое стоит до сих пор.",
  facts: [
    { label: "Продолжительность", value: "3–4 часа" },
    { label: "Начало", value: "до восхода солнца" },
    { label: "Вид", value: "все девять пирамид Гизы" },
    { label: "Гид", value: "лицензированный, на русском" },
  ],
  sections: [
    {
      title: "Девять пирамид в одну линию",
      body:
        "С этой точки в пустыне все девять пирамид Гизы стоят рядом: Хеопс, Хефрен и Микерин, а также три пирамиды цариц у пирамиды Хеопса и три — у пирамиды Микерина. В этот час здесь тихо: ни автобусов, ни торговцев, только свет, который медленно скользит по камню.",
    },
    {
      title: "Первый час — ваш",
      body:
        "Как его провести, решаете вы: расстелить коврик и заняться йогой навстречу восходящему солнцу, устроить фотосессию в мягком утреннем свете — с профессиональным фотографом, которого мы организуем по запросу, или со своей камерой — или просто сидеть и смотреть. Ваш египтолог держится в стороне и даёт вам и пространство, и время.",
    },
    {
      title: "Затем плато — до открытия",
      body:
        "После этого начинается индивидуальный ранний доступ на плато, до того как его откроют для дневных посетителей, — с лицензированным египтологом только для вашей группы, на русском языке. Почти пустая территория позволяет идти в своём темпе, фотографировать без толпы и увидеть ограду Сфинкса в первом свете, раньше туристических автобусов.",
    },
    {
      title: "Как подготовиться",
      body:
        "Одевайтесь слоями: зимой утро в пустыне холодное, даже если в полдень тепло. Небольшой фонарик пригодится по дороге до рассвета, а закрытая обувь на плоской подошве — на песке и гравии. Для йоги возьмите свой коврик; для фотографий широкоугольный объектив вместит все девять пирамид в один кадр.",
    },
  ],
  photos: photos(
    [
      "Гости Kemet на панорамной точке Гизы, пирамиды выстроились в линию за ними",
      "Нарядный верблюд отдыхает перед пирамидами Гизы в первом утреннем свете",
      "Гости Kemet на панораме Гизы, пирамиды на горизонте",
      "Большой Сфинкс Гизы, обращённый к рассвету",
    ],
    ["Смотровая точка", "Первый свет", "Пирамиды в линию", "Сфинкс"],
  ),
  highlights: {
    heading: "Коротко",
    items: [
      "До восхода — тихая смотровая точка со всеми девятью пирамидами",
      "Свободное время в первом свете — для йоги, фотосессии или просто вида",
      "Индивидуальный ранний доступ на плато, до открытия для всех",
      "Лицензированный египтолог только для вашей группы, на русском",
      "Трансфер из отеля и обратно включён (Каир и Гиза)",
    ],
  },
  faqs: [
    {
      q: "Во сколько начало?",
      a: "Зависит от сезона и времени восхода: обычно мы забираем вас из отеля между 5:00 и 6:30. Точное время подтверждаем при бронировании.",
    },
    {
      q: "Что за девять пирамид?",
      a: "Три великие — Хеопса, Хефрена и Микерина — и шесть малых пирамид цариц: три у пирамиды Хеопса и три у пирамиды Микерина. С точки, куда мы привозим вас до рассвета, видны все девять вместе.",
    },
    {
      q: "Можно ли там заняться йогой или устроить фотосессию?",
      a: "Да — именно для этого и нужно время на смотровой точке. Возьмите коврик для йоги; для фотосессии мы по запросу организуем профессионального фотографа — в том числе для съёмки в свадебном платье или предложения руки и сердца, с цветами, подготовленными заранее. В этот час там тихо, и ваш египтолог даёт вам пространство и время до начала осмотра плато.",
    },
    {
      q: "Подходит ли это детям?",
      a: "Да. Идти нужно спокойно, по мощёным и песчаным дорожкам; подходит почти для любого возраста, а гид рассказывает так, чтобы было интересно и младшим.",
    },
    {
      q: "Гид говорит по-русски?",
      a: "Да: экскурсия проходит на русском языке, с египтологом из нашей команды. Сообщите об этом при бронировании.",
    },
  ],
  cta: {
    heading: "Назовите ваш день в Каире",
    text: "По дате и числу гостей мы подтвердим время восхода и цену — вход на плато и гид включены.",
    whatsapp: "Здравствуйте, Kemet — мы хотели бы встретить рассвет у пирамид Гизы.",
    emailSubject: "Рассвет у пирамид — запрос",
  },
  moreLabel: "Дальше",
  moreRoute: "ru/tury-v-egipet.html",
  moreText: "Если хотите включить рассвет в полноценное путешествие — вот наши индивидуальные маршруты.",
  links: [
    { label: "Эксклюзивный доступ к памятникам", route: "ru/ekskluzivnyy-dostup-k-pamyatnikam.html" },
    { label: "Когда лучше ехать в Египет", route: "ru/kogda-luchshe-ehat-v-egipet.html" },
    { label: "Новый год в Египте", route: "ru/novyy-god-v-egipte.html" },
  ],
};

// ── Portuguese (Brazil) ─────────────────────────────────────────────────────
export const ptSunrise: LocalizedPage = {
  groupId: "standalone-pt-sunrise",
  symbol: "sun",
  theme: "sunrise",
  title: "Nascer do sol nas pirâmides de Gizé: ioga e fotos | Kemet",
  description:
    "Antes do sol nascer, um mirante tranquilo diante das nove pirâmides de Gizé — tempo para ioga ou um ensaio fotográfico — e depois o planalto antes de abrir.",
  keywords:
    "nascer do sol pirâmides de gizé, ioga nas pirâmides, ensaio fotográfico pirâmides, mirante nove pirâmides, visita privada pirâmides ao amanhecer, nascer do sol egito",
  crumb: "Nascer do sol nas pirâmides",
  h1: "O nascer do sol sobre as nove pirâmides de Gizé",
  standfirst:
    "Antes do sol nascer, num mirante tranquilo de onde se veem as nove pirâmides — a primeira hora é sua: ioga, um ensaio fotográfico ou simplesmente a vista.",
  lede:
    "Antes de chegarem os visitantes do dia, o deserto de Gizé fica em silêncio. Chegamos antes do nascer do sol a um mirante tranquilo de onde se veem juntas as nove pirâmides de Gizé: as três grandes e as seis pirâmides menores das rainhas ao lado delas. Quando o céu a leste passa do violeta ao âmbar, as silhuetas saem do escuro — entre elas a Grande Pirâmide de Quéops, a única das Sete Maravilhas do mundo antigo que continua de pé.",
  facts: [
    { label: "Duração", value: "3–4 horas" },
    { label: "Saída", value: "antes do nascer do sol" },
    { label: "A vista", value: "as nove pirâmides de Gizé" },
    { label: "Guia", value: "credenciado, em português" },
  ],
  sections: [
    {
      title: "Nove pirâmides em uma linha",
      body:
        "Deste ponto do deserto, as nove pirâmides de Gizé aparecem lado a lado: Quéops, Quéfren e Miquerinos, mais três pirâmides de rainhas junto à de Quéops e três junto à de Miquerinos. A essa hora o lugar está tranquilo — nada de ônibus nem de vendedores, só a luz avançando devagar sobre a pedra.",
    },
    {
      title: "A primeira hora é sua",
      body:
        "O que fazer com ela, você decide: estender um tapete e fazer ioga de frente para o sol nascendo, um ensaio fotográfico na luz suave da manhã — com um fotógrafo profissional que providenciamos sob pedido, ou com a sua própria câmera — ou simplesmente sentar e olhar. O seu egiptólogo fica em segundo plano e deixa a você o espaço e o tempo.",
    },
    {
      title: "Depois, o planalto antes de abrir",
      body:
        "Em seguida começa o acesso privado antecipado ao planalto, antes da abertura para os visitantes do dia, com um egiptólogo credenciado só para o seu grupo, em português. Com o sítio quase vazio, você caminha no seu ritmo, fotografa sem multidão e vê o recinto da Esfinge na primeira luz, antes dos ônibus de excursão.",
    },
    {
      title: "Como se preparar",
      body:
        "Vista-se em camadas: no inverno as manhãs no deserto são frias, mesmo que faça calor ao meio-dia. Uma lanterna pequena ajuda no caminho antes do nascer do sol, e sapatos fechados e baixos são o certo para areia e cascalho. Para a ioga, traga o seu próprio tapete; para as fotos, uma grande-angular põe as nove pirâmides numa única imagem.",
    },
  ],
  photos: photos(
    [
      "Viajantes da Kemet no mirante panorâmico de Gizé, com as pirâmides em linha atrás deles",
      "Um camelo enfeitado descansa diante das pirâmides de Gizé na primeira luz",
      "Viajantes da Kemet no panorama de Gizé, com as pirâmides no horizonte",
      "A Grande Esfinge de Gizé, voltada para o nascer do sol",
    ],
    ["O mirante", "Primeira luz", "As pirâmides em linha", "A Esfinge"],
  ),
  highlights: {
    heading: "Em resumo",
    items: [
      "Antes do nascer do sol, num mirante tranquilo com as nove pirâmides",
      "Tempo livre na primeira luz — para ioga, um ensaio fotográfico ou a vista",
      "Acesso privado antecipado ao planalto, antes da abertura ao público",
      "Egiptólogo credenciado só para o seu grupo, em português",
      "Busca e retorno ao hotel incluídos (Cairo e Gizé)",
    ],
  },
  faqs: [
    {
      q: "A que horas começa?",
      a: "Depende da estação e do horário do nascer do sol: normalmente buscamos você no hotel entre 5h00 e 6h30. O horário exato é confirmado na reserva.",
    },
    {
      q: "Quais são as nove pirâmides?",
      a: "As três grandes — Quéops, Quéfren e Miquerinos — e seis pirâmides menores de rainhas: três junto à de Quéops e três junto à de Miquerinos. Do mirante para onde levamos você antes do nascer do sol, as nove aparecem juntas.",
    },
    {
      q: "Dá para fazer ioga ou um ensaio fotográfico lá?",
      a: "Sim — é para isso que serve o tempo no mirante. Traga um tapete para a ioga; para um ensaio, providenciamos sob pedido um fotógrafo profissional — também para um ensaio com vestido de noiva ou um pedido de casamento, com flores arrumadas antes da sua chegada. A essa hora o lugar está tranquilo, e o seu egiptólogo deixa a você o espaço e o tempo antes da visita ao planalto.",
    },
    {
      q: "É adequado para crianças?",
      a: "Sim. Caminha-se com calma por trilhas pavimentadas e de areia; serve para quase todas as idades, e o guia adapta a conversa aos mais novos.",
    },
    {
      q: "O guia fala português?",
      a: "Sim: a visita é feita em português, com um egiptólogo da nossa equipe. Avise-nos na reserva.",
    },
  ],
  cta: {
    heading: "Conte-nos o seu dia no Cairo",
    text: "Com a data e o número de pessoas, confirmamos o horário do nascer do sol e o preço — a entrada no planalto e o guia estão incluídos.",
    whatsapp: "Olá Kemet — gostaríamos do nascer do sol nas pirâmides de Gizé.",
    emailSubject: "Nascer do sol nas pirâmides — pedido",
  },
  moreLabel: "Continuar",
  moreRoute: "pt/viagens-ao-egito.html",
  moreText: "Se quiser incluir o nascer do sol numa viagem completa, estes são os nossos roteiros privados.",
  links: [
    { label: "Monumentos exclusivos", route: "pt/monumentos-exclusivos-egito.html" },
    { label: "Melhor época para ir ao Egito", route: "pt/melhor-epoca-para-ir-ao-egito.html" },
    { label: "Carnaval no Egito", route: "pt/carnaval-no-egito.html" },
  ],
};

// ── Indonesian ──────────────────────────────────────────────────────────────
export const idSunrise: LocalizedPage = {
  groupId: "standalone-id-sunrise",
  symbol: "sun",
  theme: "sunrise",
  title: "Matahari Terbit di Piramida Giza: Yoga & Sesi Foto | Kemet",
  description:
    "Sebelum matahari terbit di titik pandang yang tenang menghadap sembilan piramida Giza — waktu untuk yoga atau sesi foto — lalu kompleks piramida sebelum dibuka.",
  keywords:
    "matahari terbit piramida giza, yoga di piramida, sesi foto piramida, titik pandang sembilan piramida, tur privat piramida pagi, sunrise mesir",
  crumb: "Matahari terbit di piramida",
  h1: "Matahari terbit di sembilan piramida Giza",
  standfirst:
    "Sebelum matahari terbit, di titik pandang yang tenang tempat kesembilan piramida terlihat sekaligus — satu jam pertama milik Anda: yoga, sesi foto, atau sekadar menikmati pemandangan.",
  lede:
    "Sebelum pengunjung harian datang, gurun di Giza masih sunyi. Kami tiba sebelum matahari terbit di sebuah titik pandang yang tenang, tempat kesembilan piramida Giza terlihat bersama: tiga piramida besar dan enam piramida ratu yang lebih kecil di sampingnya. Saat langit timur berganti dari ungu ke kuning keemasan, siluetnya muncul dari kegelapan — di antaranya Piramida Agung Khufu, satu-satunya dari Tujuh Keajaiban Dunia Kuno yang masih berdiri.",
  facts: [
    { label: "Durasi", value: "3–4 jam" },
    { label: "Mulai", value: "sebelum matahari terbit" },
    { label: "Pemandangan", value: "kesembilan piramida Giza" },
    { label: "Pemandu", value: "Egyptologist berlisensi, berbahasa Indonesia" },
  ],
  sections: [
    {
      title: "Sembilan piramida dalam satu garis",
      body:
        "Dari titik di gurun ini, kesembilan piramida Giza berdiri berdampingan: Khufu, Khafre, dan Menkaure, ditambah tiga piramida ratu di samping piramida Khufu dan tiga di samping piramida Menkaure. Pada jam ini tempatnya tenang — tanpa bus, tanpa pedagang, hanya cahaya yang perlahan bergerak di atas batu.",
    },
    {
      title: "Satu jam pertama milik Anda",
      body:
        "Anda yang menentukan: menggelar matras dan beryoga menghadap matahari terbit, mengadakan sesi foto dalam cahaya pagi yang lembut — dengan fotografer profesional yang kami siapkan atas permintaan, atau dengan kamera Anda sendiri — atau sekadar duduk dan menikmati. Egyptologist Anda menepi dan memberi Anda ruang serta waktu.",
    },
    {
      title: "Lalu kompleks piramida, sebelum dibuka",
      body:
        "Setelah itu dimulai akses awal privat ke kompleks piramida, sebelum dibuka untuk pengunjung harian, bersama Egyptologist berlisensi khusus untuk rombongan Anda, dalam bahasa Indonesia. Dengan situs yang hampir kosong, Anda berjalan sesuai ritme sendiri, memotret tanpa keramaian, dan melihat area Sphinx dalam cahaya pertama, sebelum bus wisata tiba.",
    },
    {
      title: "Persiapan",
      body:
        "Kenakan pakaian berlapis: di musim dingin pagi di gurun terasa dingin, meskipun siangnya hangat. Senter kecil membantu di perjalanan sebelum matahari terbit, dan sepatu tertutup bersol datar cocok untuk pasir dan kerikil. Untuk yoga, bawalah matras sendiri; untuk foto, lensa sudut lebar memuat kesembilan piramida dalam satu bingkai.",
    },
  ],
  photos: photos(
    [
      "Tamu Kemet di titik panorama Giza, piramida berjajar di belakang mereka",
      "Seekor unta berhias beristirahat di depan piramida Giza dalam cahaya pagi",
      "Tamu Kemet di panorama Giza, piramida di cakrawala",
      "Sphinx Agung Giza, menghadap ke arah fajar",
    ],
    ["Titik pandang", "Cahaya pertama", "Piramida berjajar", "Sphinx"],
  ),
  highlights: {
    heading: "Ringkasnya",
    items: [
      "Sebelum matahari terbit di titik pandang tenang dengan kesembilan piramida",
      "Waktu bebas di cahaya pertama — untuk yoga, sesi foto, atau pemandangan",
      "Akses awal privat ke kompleks piramida, sebelum dibuka untuk umum",
      "Egyptologist berlisensi khusus rombongan Anda, berbahasa Indonesia",
      "Jemput dan antar hotel termasuk (Kairo dan Giza)",
    ],
  },
  faqs: [
    {
      q: "Mulai jam berapa?",
      a: "Tergantung musim dan jam matahari terbit: biasanya kami menjemput Anda di hotel antara pukul 05.00 dan 06.30. Jam pastinya kami konfirmasi saat pemesanan.",
    },
    {
      q: "Apa saja sembilan piramida itu?",
      a: "Tiga piramida besar — Khufu, Khafre, dan Menkaure — serta enam piramida ratu yang lebih kecil: tiga di samping piramida Khufu dan tiga di samping piramida Menkaure. Dari titik pandang yang kami datangi sebelum matahari terbit, kesembilannya terlihat bersama.",
    },
    {
      q: "Bisakah kami beryoga atau mengadakan sesi foto di sana?",
      a: "Bisa — memang untuk itulah waktu di titik pandang. Bawalah matras untuk yoga; untuk sesi foto, kami menyiapkan fotografer profesional atas permintaan — termasuk untuk foto pengantin atau lamaran, dengan bunga yang ditata sebelum Anda tiba. Pada jam itu tempatnya tenang, dan Egyptologist Anda memberi ruang serta waktu sebelum kunjungan ke kompleks piramida dimulai.",
    },
    {
      q: "Apakah cocok untuk anak-anak?",
      a: "Ya. Jalannya santai di jalur berpaving dan berpasir; cocok untuk hampir semua usia, dan pemandu menyesuaikan cerita untuk anak-anak.",
    },
    {
      q: "Apakah pemandunya berbahasa Indonesia?",
      a: "Ya: kunjungan bisa dilakukan dalam bahasa Indonesia, dengan Egyptologist dari tim kami. Beri tahu kami saat memesan.",
    },
  ],
  cta: {
    heading: "Beri tahu kami hari Anda di Kairo",
    text: "Dengan tanggal dan jumlah orang, kami konfirmasi jam matahari terbit dan harganya — tiket masuk kompleks piramida dan pemandu sudah termasuk.",
    whatsapp: "Halo Kemet — kami ingin melihat matahari terbit di piramida Giza.",
    emailSubject: "Matahari terbit di piramida — permintaan",
  },
  moreLabel: "Lanjutkan",
  moreRoute: "id/paket-tour-mesir.html",
  moreText: "Jika ingin menjadikan matahari terbit bagian dari perjalanan lengkap, inilah rute privat kami.",
  links: [
    { label: "Sewa eksklusif situs Mesir", route: "id/sewa-eksklusif-situs-mesir.html" },
    { label: "Umrah plus Mesir", route: "id/umrah-plus-mesir.html" },
    { label: "Waktu terbaik ke Mesir", route: "id/waktu-terbaik-ke-mesir.html" },
  ],
};

// ── Malay ───────────────────────────────────────────────────────────────────
export const msSunrise: LocalizedPage = {
  groupId: "standalone-ms-sunrise",
  symbol: "sun",
  theme: "sunrise",
  title: "Matahari Terbit di Piramid Giza: Yoga & Sesi Foto | Kemet",
  description:
    "Sebelum matahari terbit di titik pandang yang tenang menghadap sembilan piramid Giza — yoga atau sesi foto — kemudian kompleks piramid sebelum dibuka.",
  keywords:
    "matahari terbit piramid giza, yoga di piramid, sesi foto piramid, titik pandang sembilan piramid, lawatan persendirian piramid waktu pagi, matahari terbit mesir",
  crumb: "Matahari terbit di piramid",
  h1: "Matahari terbit di sembilan piramid Giza",
  standfirst:
    "Sebelum matahari terbit, di titik pandang yang tenang tempat kesemua sembilan piramid kelihatan serentak — sejam pertama milik anda: yoga, sesi foto atau sekadar menikmati pemandangan.",
  lede:
    "Sebelum pengunjung harian tiba, padang pasir di Giza masih sunyi. Kami tiba sebelum matahari terbit di sebuah titik pandang yang tenang, tempat kesemua sembilan piramid Giza kelihatan bersama: tiga piramid besar dan enam piramid permaisuri yang lebih kecil di sisinya. Apabila langit timur bertukar daripada ungu kepada keemasan, siluetnya muncul dari kegelapan — antaranya Piramid Agung Khufu, satu-satunya daripada Tujuh Keajaiban Dunia Purba yang masih berdiri.",
  facts: [
    { label: "Tempoh", value: "3–4 jam" },
    { label: "Bermula", value: "sebelum matahari terbit" },
    { label: "Pemandangan", value: "kesemua sembilan piramid Giza" },
    { label: "Pemandu", value: "Egyptologist berlesen, berbahasa Melayu" },
  ],
  sections: [
    {
      title: "Sembilan piramid dalam satu barisan",
      body:
        "Dari titik di padang pasir ini, kesemua sembilan piramid Giza berdiri bersebelahan: Khufu, Khafre dan Menkaure, ditambah tiga piramid permaisuri di sisi piramid Khufu dan tiga di sisi piramid Menkaure. Pada waktu ini tempatnya tenang — tiada bas, tiada penjaja, hanya cahaya yang perlahan bergerak di atas batu.",
    },
    {
      title: "Sejam pertama milik anda",
      body:
        "Anda yang menentukan: membentang tikar dan beryoga menghadap matahari terbit, mengadakan sesi foto dalam cahaya pagi yang lembut — dengan jurugambar profesional yang kami aturkan atas permintaan, atau dengan kamera anda sendiri — atau sekadar duduk dan menikmati. Egyptologist anda berundur ke tepi dan memberi anda ruang serta masa.",
    },
    {
      title: "Kemudian kompleks piramid, sebelum dibuka",
      body:
        "Selepas itu bermula akses awal persendirian ke kompleks piramid, sebelum dibuka kepada pengunjung harian, bersama Egyptologist berlesen khas untuk rombongan anda, dalam bahasa Melayu. Dengan tapak yang hampir kosong, anda berjalan mengikut rentak sendiri, mengambil gambar tanpa orang ramai dan melihat kawasan Sphinx dalam cahaya pertama, sebelum bas pelancong tiba.",
    },
    {
      title: "Persediaan",
      body:
        "Pakai pakaian berlapis: pada musim sejuk pagi di padang pasir terasa dingin, walaupun tengah harinya panas. Lampu suluh kecil membantu dalam perjalanan sebelum matahari terbit, dan kasut tertutup bertapak rata sesuai untuk pasir dan batu kerikil. Untuk yoga, bawa tikar sendiri; untuk foto, lensa sudut lebar memuatkan kesemua sembilan piramid dalam satu bingkai.",
    },
  ],
  photos: photos(
    [
      "Tetamu Kemet di titik panorama Giza, piramid berbaris di belakang mereka",
      "Seekor unta berhias berehat di hadapan piramid Giza dalam cahaya pagi",
      "Tetamu Kemet di panorama Giza, piramid di kaki langit",
      "Sphinx Agung Giza, menghadap ke arah fajar",
    ],
    ["Titik pandang", "Cahaya pertama", "Piramid berbaris", "Sphinx"],
  ),
  highlights: {
    heading: "Ringkasnya",
    items: [
      "Sebelum matahari terbit di titik pandang tenang dengan kesemua sembilan piramid",
      "Masa bebas dalam cahaya pertama — untuk yoga, sesi foto atau pemandangan",
      "Akses awal persendirian ke kompleks piramid, sebelum dibuka kepada umum",
      "Egyptologist berlesen khas untuk rombongan anda, berbahasa Melayu",
      "Ambil dan hantar dari hotel termasuk (Kaherah dan Giza)",
    ],
  },
  faqs: [
    {
      q: "Bermula pukul berapa?",
      a: "Bergantung pada musim dan waktu matahari terbit: biasanya kami mengambil anda di hotel antara pukul 5.00 dan 6.30 pagi. Waktu tepatnya kami sahkan semasa tempahan.",
    },
    {
      q: "Apakah sembilan piramid itu?",
      a: "Tiga piramid besar — Khufu, Khafre dan Menkaure — serta enam piramid permaisuri yang lebih kecil: tiga di sisi piramid Khufu dan tiga di sisi piramid Menkaure. Dari titik pandang yang kami tuju sebelum matahari terbit, kesemua sembilan kelihatan bersama.",
    },
    {
      q: "Bolehkah kami beryoga atau mengadakan sesi foto di sana?",
      a: "Boleh — memang untuk itulah masa di titik pandang. Bawa tikar untuk yoga; untuk sesi foto, kami mengaturkan jurugambar profesional atas permintaan — termasuk untuk fotografi pengantin atau lamaran, dengan bunga yang disediakan sebelum anda tiba. Pada waktu itu tempatnya tenang, dan Egyptologist anda memberi ruang serta masa sebelum lawatan ke kompleks piramid bermula.",
    },
    {
      q: "Adakah ia sesuai untuk kanak-kanak?",
      a: "Ya. Perjalanannya santai di laluan berturap dan berpasir; sesuai untuk hampir semua peringkat umur, dan pemandu menyesuaikan cerita untuk kanak-kanak.",
    },
    {
      q: "Adakah pemandunya berbahasa Melayu?",
      a: "Ya: lawatan boleh dibuat dalam bahasa Melayu, bersama Egyptologist daripada pasukan kami. Beritahu kami semasa membuat tempahan.",
    },
  ],
  cta: {
    heading: "Beritahu kami hari anda di Kaherah",
    text: "Dengan tarikh dan bilangan orang, kami sahkan waktu matahari terbit dan harganya — tiket masuk kompleks piramid dan pemandu sudah termasuk.",
    whatsapp: "Salam Kemet — kami ingin melihat matahari terbit di piramid Giza.",
    emailSubject: "Matahari terbit di piramid — permintaan",
  },
  moreLabel: "Teruskan",
  moreRoute: "ms/pakej-pelancongan-mesir.html",
  moreText: "Jika mahu menjadikan matahari terbit sebahagian daripada perjalanan penuh, inilah laluan persendirian kami.",
  links: [
    { label: "Tempahan eksklusif tapak Mesir", route: "ms/tempahan-eksklusif-tapak-mesir.html" },
    { label: "Umrah plus Mesir", route: "ms/umrah-plus-mesir.html" },
    { label: "Masa terbaik ke Mesir", route: "ms/masa-terbaik-ke-mesir.html" },
  ],
};

// ── Arabic ──────────────────────────────────────────────────────────────────
export const arSunrise: LocalizedPage = {
  groupId: "standalone-ar-sunrise",
  symbol: "sun",
  theme: "sunrise",
  title: "شروق الشمس عند أهرامات الجيزة: يوغا وجلسة تصوير | كيميت",
  description:
    "قبل الشروق في نقطة مطلّة هادئة تُرى منها أهرامات الجيزة التسعة — وقت لليوغا أو جلسة تصوير — ثم هضبة الأهرامات قبل فتحها للزوار، مع خبير آثار مرخَّص.",
  keywords:
    "شروق الشمس عند الأهرامات، يوغا عند الأهرامات، جلسة تصوير عند الأهرامات، بانوراما الأهرامات التسعة، زيارة خاصة للأهرامات وقت الشروق، الشروق في مصر",
  crumb: "شروق الشمس عند الأهرامات",
  h1: "الشروق فوق أهرامات الجيزة التسعة",
  standfirst:
    "قبل شروق الشمس، في نقطة مطلّة هادئة تُرى منها الأهرامات التسعة معاً — والساعة الأولى لكم: يوغا، أو جلسة تصوير، أو مجرد التأمل في المنظر.",
  lede:
    "قبل وصول زوار النهار تكون صحراء الجيزة صامتة. نصل قبل الشروق إلى نقطة مطلّة هادئة تُرى منها أهرامات الجيزة التسعة معاً: الأهرامات الثلاثة الكبرى، وإلى جانبها أهرامات الملكات الستة الأصغر. وحين تتحوّل السماء في الشرق من البنفسجي إلى الكهرماني، تخرج ظلالها من العتمة — وبينها الهرم الأكبر، الوحيد الباقي من عجائب الدنيا السبع في العالم القديم.",
  facts: [
    { label: "المدة", value: "٣–٤ ساعات" },
    { label: "البداية", value: "قبل شروق الشمس" },
    { label: "المنظر", value: "أهرامات الجيزة التسعة" },
    { label: "الإرشاد", value: "خبير آثار مرخَّص، بالعربية" },
  ],
  sections: [
    {
      title: "تسعة أهرامات على خط واحد",
      body:
        "من هذه النقطة في الصحراء تقف أهرامات الجيزة التسعة جنباً إلى جنب: خوفو وخفرع ومنكاورع، ومعها ثلاثة أهرامات للملكات بجوار هرم خوفو وثلاثة بجوار هرم منكاورع. في هذه الساعة يكون المكان هادئاً — لا حافلات ولا باعة، فقط الضوء يتحرّك ببطء فوق الحجر.",
    },
    {
      title: "الساعة الأولى لكم",
      body:
        "أنتم من يقرّر كيف تقضونها: فرش سجادة اليوغا ومواجهة الشمس وهي تشرق، أو جلسة تصوير في ضوء الصباح الناعم — مع مصوّر محترف نرتّبه عند الطلب، أو بكاميرتكم — أو الجلوس والتأمل فحسب. يبتعد خبير الآثار قليلاً ويترك لكم المكان والوقت.",
    },
    {
      title: "ثم الهضبة، قبل أن تُفتح",
      body:
        "بعدها تبدأ الزيارة الخاصة المبكرة لهضبة الأهرامات قبل فتحها لزوار النهار، مع خبير آثار مرخَّص لمجموعتكم وحدها، وبالعربية. والموقع شبه خالٍ، فتمشون على مهلكم، وتصوّرون بلا زحام، وتشاهدون ساحة أبو الهول في أول الضوء قبل وصول الحافلات السياحية.",
    },
    {
      title: "كيف تستعدون",
      body:
        "البسوا طبقات: صباح الصحراء بارد في الشتاء حتى لو كان الظهر دافئاً. يفيد مصباح صغير في الطريق قبل الشروق، وحذاء مغلق مسطّح على الرمل والحصى. لليوغا أحضروا سجادتكم الخاصة، وللتصوير تُدخل عدسة واسعة الزاوية الأهرامات التسعة كلها في صورة واحدة.",
    },
  ],
  photos: photos(
    [
      "ضيوف كيميت عند نقطة بانوراما الجيزة، والأهرامات مصطفّة خلفهم",
      "جمل مزيَّن يستريح أمام أهرامات الجيزة في أول ضوء الصباح",
      "ضيوف كيميت عند بانوراما الجيزة، والأهرامات في الأفق",
      "أبو الهول في الجيزة، متجهاً نحو الفجر",
    ],
    ["النقطة المطلّة", "أول الضوء", "الأهرامات مصطفّة", "أبو الهول"],
  ),
  highlights: {
    heading: "باختصار",
    items: [
      "قبل الشروق في نقطة مطلّة هادئة تُرى منها الأهرامات التسعة",
      "وقت حرّ مع أول الضوء — لليوغا أو جلسة تصوير أو المنظر",
      "زيارة خاصة مبكرة للهضبة قبل فتحها للجمهور",
      "خبير آثار مرخَّص لمجموعتكم وحدها، بالعربية",
      "الاستقبال من الفندق والعودة إليه مشمولان (القاهرة والجيزة)",
    ],
  },
  faqs: [
    {
      q: "متى نبدأ؟",
      a: "يتوقف ذلك على الموسم وموعد الشروق: عادةً نمرّ عليكم في الفندق بين الخامسة والسادسة والنصف صباحاً، ونؤكد الموعد الدقيق عند الحجز.",
    },
    {
      q: "ما الأهرامات التسعة؟",
      a: "الأهرامات الثلاثة الكبرى — خوفو وخفرع ومنكاورع — وستة أهرامات أصغر للملكات: ثلاثة بجوار هرم خوفو وثلاثة بجوار هرم منكاورع. ومن النقطة التي نصحبكم إليها قبل الشروق تُرى التسعة معاً.",
    },
    {
      q: "هل يمكن ممارسة اليوغا أو إقامة جلسة تصوير هناك؟",
      a: "نعم — فهذا بالضبط ما خُصّص له الوقت عند النقطة المطلّة. أحضروا سجادة لليوغا؛ ولجلسة التصوير نرتّب عند الطلب مصوّراً محترفاً — ومنها جلسة بفستان الزفاف أو طلب زواج، مع ورد مهيّأ قبل وصولكم. المكان هادئ في تلك الساعة، ويترك لكم خبير الآثار المكان والوقت قبل أن تبدأ زيارة الهضبة.",
    },
    {
      q: "هل تناسب الأطفال؟",
      a: "نعم. المشي هادئ على ممرات مرصوفة ورملية، وتناسب معظم الأعمار، ويكيّف المرشد حديثه للصغار.",
    },
    {
      q: "هل يتحدث المرشد العربية؟",
      a: "نعم، الزيارة بالعربية مع خبير آثار من فريقنا. أخبرونا بذلك عند الحجز.",
    },
  ],
  cta: {
    heading: "أخبرونا بيومكم في القاهرة",
    text: "مع التاريخ وعدد الأشخاص نؤكد لكم موعد الشروق والسعر — تذكرة دخول الهضبة والإرشاد مشمولان.",
    whatsapp: "السلام عليكم كيميت — نرغب في مشاهدة الشروق عند أهرامات الجيزة.",
    emailSubject: "الشروق عند الأهرامات — طلب",
  },
  moreLabel: "للمتابعة",
  moreRoute: "ar/rehlat-masr-khassa.html",
  moreText: "إن أردتم أن يكون الشروق جزءاً من رحلة كاملة، فهذه برامجنا الخاصة.",
  links: [
    { label: "حجز مواقع أثرية خاصة", route: "ar/hajz-mawaqea-athariya-khas.html" },
    { label: "أفضل وقت لزيارة مصر", route: "ar/afdal-waqt-lizyarat-masr.html" },
    { label: "هل مصر آمنة؟", route: "ar/hal-masr-amina.html" },
  ],
};
