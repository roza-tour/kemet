// ---------------------------------------------------------------------------
// The total solar eclipse of 2 August 2027 over Luxor — one page per language.
//
// The English original is guides/total-solar-eclipse-2027-luxor.html, and
// every fact here is the fact there, from the same source: the eclipse's
// NASA-derived tables as published on Wikipedia, read 12 Oct 2026. Totality
// in Luxor 13:02:14–13:08:36 local time, about 6 min 22 s; the longest point,
// 6 min 23 s, about 60 km south-east of Luxor; Cairo partial, about 95%; the
// next longer total eclipse on easily accessible land on 3 June 2114.
//
// HOME TIMES. Each edition gives the moment in its readers' own clock as
// well. They are worked from 10:02 UTC (13:02 in Egypt's summer time,
// UTC+3), so they hold whatever Egypt does with its clocks: 12:02 in Berlin,
// Paris, Rome and Madrid; 13:02 in Moscow and Riyadh; 11:02 in Lisbon; 07:02
// in Brasília; 17:02 in Jakarta (WIB); 18:02 in Kuala Lumpur; 14:02 in the
// UAE. Change one and change them all.
//
// WHAT EACH EDITION ADDS FOR ITS READERS. Spanish: the same eclipse crosses
// the far south of Spain, more briefly. French and Italian: it falls in the
// summer holidays. Indonesian, Malay and Arabic: an eclipse is the time of
// the eclipse prayer (salat al-kusuf), and the day is planned to leave room
// for it. No edition promises a viewing site, glasses or a room we have not
// confirmed — like the English, they say we quote from live availability.
//
// Standalone pages, as the sunrise pages are: the English original is a
// guide with its own template, so these cannot form a translation group.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import type { MediaPlaceholder } from "@/types/primitives";

/** The English original, linked from every edition's "more" line. */
const EN_GUIDE = "guides/total-solar-eclipse-2027-luxor.html";

/** The same four photographs on every edition, described in its language. */
function photos(alt: [string, string, string, string], label: [string, string, string, string]): MediaPlaceholder[] {
  return [
    { alt: alt[0], label: label[0], src: "/images/luxor/luxor-karnak-sacred-lake.webp", width: 1000, height: 600 },
    { alt: alt[1], label: label[1], src: "/images/luxor/luxor-hatshepsut-temple-deir-el-bahri.webp", width: 1000, height: 600 },
    { alt: alt[2], label: label[2], src: "/images/luxor/luxor-karnak-hypostyle-hall.webp", width: 652, height: 980 },
    { alt: alt[3], label: label[3], src: "/images/cruise/nile-dahabiya-deck.webp", width: 1200, height: 900 },
  ];
}

// ── German ──────────────────────────────────────────────────────────────────
export const deEclipse: LocalizedPage = {
  groupId: "standalone-de-eclipse",
  symbol: "sun",
  theme: "eclipse",
  title: "Sonnenfinsternis 2027 in Luxor: Zeiten & Planung | Kemet",
  description:
    "Totale Sonnenfinsternis am 2. August 2027 über Luxor: rund 6 Min. 22 Sek. Totalität, die längste auf gut erreichbarem Land in diesem Jahrhundert.",
  keywords:
    "sonnenfinsternis 2027 ägypten, sonnenfinsternis luxor, totale sonnenfinsternis 2. august 2027, sofi 2027, sonnenfinsternis reise ägypten, finsternis nilkreuzfahrt",
  crumb: "Sonnenfinsternis 2027",
  h1: "Die totale Sonnenfinsternis 2027 in Luxor",
  standfirst:
    "Am Montag, dem 2. August 2027, verdeckt der Mond über Luxor rund sechs Minuten und 22 Sekunden lang die Sonne — die längste totale Finsternis auf gut erreichbarem Land in diesem Jahrhundert.",
  lede:
    "Eine totale Sonnenfinsternis sind die wenigen Minuten, in denen der Mond die Sonne vollständig bedeckt: Mitten am Tag wird der Himmel dunkel, die Temperatur fällt, die Korona erscheint als weißer Strahlenkranz, und rundum leuchtet der Horizont wie bei Sonnenuntergang. Meist dauert die Totalität zwei oder drei Minuten. Am 2. August 2027 dauert sie über Oberägypten am längsten — und sie findet über dem alten Theben statt, über Karnak, dem Luxor-Tempel und dem Tal der Könige, in einer Stadt, deren Erbauer ihre Tempel nach der Sonne ausrichteten.",
  facts: [
    { label: "Datum", value: "Montag, 2. August 2027" },
    { label: "Totalität in Luxor", value: "rund 6 Min. 22 Sek." },
    { label: "Beginn der Totalität", value: "ca. 13:02 Ortszeit (12:02 MESZ)" },
    { label: "Kairo", value: "nur partiell, rund 95 %" },
  ],
  sections: [
    {
      title: "Warum Luxor — und warum diese Finsternis",
      body:
        "Am 2. August 2027 zieht der Kernschatten des Mondes über Nordafrika und den Nahen Osten, und über Oberägypten ist die Totalität am längsten: rund sechs Minuten und 22 Sekunden in Luxor, sechs Minuten und 23 Sekunden am längsten Punkt, etwa 60 km südöstlich der Stadt. Eine längere totale Finsternis auf gut erreichbarem Land gibt es erst wieder am 3. Juni 2114. Wer am 12. August 2026 in Spanien unter dem Mondschatten stand, weiß, wie schnell die Totalität vorbei ist — hier sind es mehr als sechs Minuten.",
    },
    {
      title: "Wann es passiert",
      body:
        "Der Mond schiebt sich kurz vor Mittag vor die Sonne. Die Totalität beginnt in Luxor gegen 13:02 Uhr Ortszeit (12:02 Uhr MESZ) und endet gegen 13:08 Uhr; danach klingt die partielle Phase in gut einer Stunde aus. Innerhalb Luxors unterscheiden sich die Zeiten nur um Sekunden — wir bestätigen sie für Ihren Beobachtungsort, wenn das Programm geschrieben wird.",
    },
    {
      title: "Wo man zuschaut",
      body:
        "Ganz Luxor liegt im Kernschatten; es geht also um Komfort, nicht um Geometrie: Schatten, ein Sitzplatz, Wasser und freier Blick nach oben ohne Menschenmenge davor. Eine Terrasse am Nil, ein ruhiger Platz am Westufer unter den thebanischen Bergen oder das Deck eines Schiffes — alles eignet sich. Auch Qena und Edfu liegen in der Totalität, sodass eine Nilkreuzfahrt oder Dahabiya zwischen Luxor und Edfu im richtigen Moment auf dem Wasser sein kann. Kairo dagegen sieht nur eine partielle Finsternis von rund 95 % — eindrucksvoll, aber der Himmel wird nicht dunkel und die Korona bleibt unsichtbar.",
    },
    {
      title: "August in Luxor, ehrlich gesagt",
      body:
        "Der August ist einer der beiden heißesten Monate in Luxor, mit Nachmittagen um 41–43 °C, und die Totalität fällt in die heißeste Stunde des Tages. Mit Planung ist das gut zu machen, ohne Planung nicht. Dafür ist der Himmel über Oberägypten im August so zuverlässig klar wie kaum anderswo — genau das, was eine Finsternis braucht. Der Tag richtet sich also nach der Hitze: Tempel zur Öffnung, gegen späten Vormittag zurück in den Schatten, die Finsternis von einem kühlen Ort mit Wasser in Reichweite, der Nachmittag zum Ausruhen.",
    },
    {
      title: "Sicher hinschauen",
      body:
        "In den partiellen Phasen — vor und nach der Totalität — nie ohne zertifizierte Finsternisbrille (ISO 12312-2) oder geeigneten Sonnenfilter vor Kamera oder Fernglas in die Sonne blicken. Nur während der Totalität selbst, wenn die Sonne ganz bedeckt ist, darf man mit bloßem Auge hinsehen; sobald der erste helle Rand wieder erscheint, kommt die Brille zurück. Eine normale Sonnenbrille ist keine Finsternisbrille.",
    },
    {
      title: "Zuerst das Zimmer",
      body:
        "Luxor ist eine kleine Stadt mit wenigen wirklich guten Hotelzimmern, und die Nächte um den 2. August 2027 sind die gefragtesten des Jahres; die Preise dieser Woche liegen weit über den üblichen Sommerpreisen. Darum zuerst die Unterkunft, dann die Tage drumherum. Der Winter Palace soll im Juli 2027 als Mandarin Oriental Winter Palace wiedereröffnen — gerade rechtzeitig, falls der Termin hält. Am Westufer wohnen unsere Gäste im Al Moudira, und ein Nilschiff oder eine Dahabiya kann selbst das Hotel sein. Wir reservieren nichts vorab und kalkulieren nach aktueller Verfügbarkeit; den Aufschlag für die Finsterniswoche weisen wir gesondert aus.",
    },
  ],
  photos: photos(
    [
      "Der Tempel von Karnak und sein heiliger See in Luxor",
      "Der Tempel der Hatschepsut in Deir el-Bahari, unter den Felsen des Westufers",
      "Säulen eines Tempels in Luxor",
      "Das schattige Deck einer Dahabiya auf dem Nil",
    ],
    ["Karnak", "Das Westufer", "Säulen", "Auf dem Nil"],
  ),
  highlights: {
    heading: "Drei Reiseformen, die gut funktionieren",
    items: [
      "Nur Luxor: drei oder vier Nächte rund um die Finsternis",
      "Erst Kairo und die Pyramiden, dann Luxor für den Tag selbst",
      "Eine Nilreise zwischen Assuan und Luxor, so gelegt, dass der 2. August in Luxor oder Edfu liegt",
      "Auf Wunsch danach einige Tage am Roten Meer, bei 29–30 °C Wassertemperatur",
    ],
  },
  faqs: [
    {
      q: "Wann ist die Sonnenfinsternis in Ägypten?",
      a: "Am Montag, dem 2. August 2027. Über Luxor beginnt die Totalität gegen 13:02 Uhr Ortszeit (12:02 Uhr MESZ) und dauert rund sechs Minuten und 22 Sekunden. Die partielle Phase beginnt kurz vor Mittag und endet am frühen Nachmittag.",
    },
    {
      q: "Kann man die Finsternis in Kairo sehen?",
      a: "Nur als partielle Finsternis: Kairo liegt außerhalb des Kernschattens, dort werden rund 95 % der Sonne bedeckt. Das ist eindrucksvoll, aber der Himmel wird nicht dunkel und die Korona ist nicht zu sehen. Für die Totalität muss man in Luxor, Qena, Edfu oder an einem anderen Ort im Kernschatten sein.",
    },
    {
      q: "Kann man sie von einem Nilschiff aus sehen?",
      a: "Ja, wenn das Schiff am 2. August im Kernschatten liegt. Luxor, Qena und Edfu liegen alle in der Totalität, also kann eine Kreuzfahrt oder Dahabiya zwischen Luxor und Edfu im richtigen Moment auf dem Wasser sein. Wir planen dann die Fahrt um die Finsternis herum, nicht umgekehrt.",
    },
    {
      q: "Ist der August nicht zu heiß für Luxor?",
      a: "Es ist sehr heiß — nachmittags um 41–43 °C —, und die Totalität fällt auf etwa ein Uhr mittags. Es funktioniert, wenn der Tag dafür geplant ist: Besichtigungen zur Öffnung, ein schattiger, kühler Platz zum Zuschauen, viel Wasser und ein ruhiger Nachmittag. Dafür ist der Augusthimmel über Oberägypten so zuverlässig klar wie kaum anderswo.",
    },
    {
      q: "Wann sollte man buchen?",
      a: "Jetzt, wenn Luxor der Plan ist. Die Stadt hat nur wenige wirklich gute Zimmer, und die Nächte um den 2. August 2027 sind die gefragtesten des Jahres. Zuerst das Hotel festlegen; den Rest der Reise kann man später gestalten.",
    },
    {
      q: "Brauche ich eine spezielle Brille?",
      a: "Ja, für die partiellen Phasen: eine zertifizierte Finsternisbrille nach ISO 12312-2 oder einen Sonnenfilter vor Kamera und Fernglas. Eine normale Sonnenbrille schützt nicht. Nur während der Totalität selbst darf man ohne Brille hinsehen.",
    },
  ],
  cta: {
    heading: "Planen wir Ihre Finsternis",
    text: "Nennen Sie uns Personenzahl und Reisedauer. Wir schlagen Hotel und Ablauf vor und nennen den Preis nach aktueller Verfügbarkeit — den Aufschlag für die Finsterniswoche gesondert ausgewiesen.",
    whatsapp: "Guten Tag Kemet — wir möchten die Sonnenfinsternis am 2. August 2027 in Luxor erleben.",
    emailSubject: "Sonnenfinsternis 2027 in Luxor — Anfrage",
  },
  moreLabel: "Auf Englisch",
  moreRoute: EN_GUIDE,
  moreText: "Unser vollständiger Ratgeber zur Finsternis, auf Englisch.",
  links: [
    { label: "Nilkreuzfahrt", route: "de/nilkreuzfahrt.html" },
    { label: "Beste Reisezeit für Ägypten", route: "de/beste-reisezeit-aegypten.html" },
    { label: "Ägypten-Reisen", route: "de/aegypten-reisen.html" },
  ],
};

// ── French ──────────────────────────────────────────────────────────────────
export const frEclipse: LocalizedPage = {
  groupId: "standalone-fr-eclipse",
  symbol: "sun",
  theme: "eclipse",
  title: "Éclipse solaire 2027 à Louxor : horaires, conseils | Kemet",
  description:
    "Éclipse totale du 2 août 2027 à Louxor : environ 6 min 22 s de totalité, la plus longue de ce siècle sur une terre facile d'accès. Horaires, où la voir.",
  keywords:
    "éclipse 2027 égypte, éclipse solaire louxor, éclipse totale 2 août 2027, voyage éclipse égypte, éclipse croisière nil, où voir l'éclipse de 2027",
  crumb: "Éclipse 2027",
  h1: "L'éclipse totale de Soleil de 2027 à Louxor",
  standfirst:
    "Le lundi 2 août 2027, la Lune masque le Soleil au-dessus de Louxor pendant environ six minutes et 22 secondes — la plus longue éclipse totale de ce siècle sur une terre facile d'accès.",
  lede:
    "Une éclipse totale, ce sont ces quelques minutes où la Lune couvre entièrement le Soleil : le ciel s'assombrit en plein jour, la température baisse, la couronne solaire apparaît en halo blanc et tout l'horizon s'embrase comme au coucher du soleil. La totalité dure d'ordinaire deux ou trois minutes. Le 2 août 2027, c'est au-dessus de la Haute-Égypte qu'elle dure le plus longtemps — au-dessus de l'ancienne Thèbes, de Karnak, du temple de Louxor et de la Vallée des Rois, dans une ville dont les bâtisseurs orientaient leurs temples sur le Soleil.",
  facts: [
    { label: "Date", value: "lundi 2 août 2027" },
    { label: "Totalité à Louxor", value: "environ 6 min 22 s" },
    { label: "Début de la totalité", value: "vers 13h02 locales (12h02 à Paris)" },
    { label: "Le Caire", value: "partielle seulement, environ 95 %" },
  ],
  sections: [
    {
      title: "Pourquoi Louxor, et pourquoi celle-ci",
      body:
        "Le 2 août 2027, l'ombre de la Lune traverse l'Afrique du Nord et le Moyen-Orient, et c'est au-dessus de la Haute-Égypte que la totalité est la plus longue : environ six minutes et 22 secondes à Louxor, six minutes et 23 secondes au point le plus long, à une soixantaine de kilomètres au sud-est de la ville. Il faudra attendre le 3 juin 2114 pour une éclipse totale plus longue sur une terre facile d'accès. Et la date tombe au cœur des grandes vacances.",
    },
    {
      title: "Quand cela se passe",
      body:
        "La Lune commence à mordre le Soleil peu avant midi. À Louxor, la totalité commence vers 13h02, heure locale (12h02 à Paris), et s'achève vers 13h08 ; la phase partielle s'estompe ensuite en un peu plus d'une heure. D'un point à l'autre de Louxor, les horaires ne varient que de quelques secondes : nous les confirmons pour votre lieu d'observation au moment d'écrire le programme.",
    },
    {
      title: "Où l'observer",
      body:
        "Tout Louxor se trouve dans la bande de totalité ; le choix tient donc au confort plus qu'à la géométrie : de l'ombre, un siège, de l'eau, et le ciel dégagé sans foule devant soi. Une terrasse au bord du Nil, un coin tranquille sur la rive ouest au pied des montagnes thébaines ou le pont d'un bateau conviennent tous. Qena et Edfou sont aussi dans la totalité : une croisière ou une dahabiya entre Louxor et Edfou peut donc être sur l'eau au bon moment. Le Caire, en revanche, ne voit qu'une éclipse partielle d'environ 95 % — saisissante, mais le ciel ne s'assombrit pas et la couronne reste invisible.",
    },
    {
      title: "Août à Louxor, franchement",
      body:
        "Août est l'un des deux mois les plus chauds à Louxor, avec des après-midi autour de 41–43 °C, et la totalité tombe à l'heure la plus chaude de la journée. Avec de l'organisation, c'est tout à fait faisable ; sans, c'est pénible. En échange, le ciel de Haute-Égypte en août est l'un des plus sûrement dégagés du monde — exactement ce qu'il faut pour une éclipse. La journée se construit donc autour de la chaleur : les temples à l'ouverture, retour à l'ombre en fin de matinée, l'éclipse depuis un endroit frais avec de l'eau à portée de main, et l'après-midi au repos.",
    },
    {
      title: "Regarder sans danger",
      body:
        "Pendant les phases partielles — avant et après la totalité — ne regardez jamais le Soleil sans lunettes d'éclipse certifiées (norme ISO 12312-2) ou sans filtre solaire adapté sur l'appareil photo ou les jumelles. Ce n'est que pendant la totalité elle-même, quand le Soleil est entièrement couvert, qu'on peut le regarder à l'œil nu ; les lunettes se remettent dès que réapparaît le premier liseré lumineux. Des lunettes de soleil ordinaires ne sont pas des lunettes d'éclipse.",
    },
    {
      title: "La chambre d'abord",
      body:
        "Louxor est une petite ville qui compte peu de très bonnes chambres, et les nuits autour du 2 août 2027 seront les plus demandées de l'année ; les tarifs de cette semaine-là dépassent de loin ceux d'un été ordinaire. Il faut donc fixer l'hébergement d'abord, puis construire les journées autour. Le Winter Palace doit rouvrir en juillet 2027 sous le nom de Mandarin Oriental Winter Palace — juste à temps, si la date est tenue. Sur la rive ouest, nos voyageurs séjournent à Al Moudira, et un bateau de croisière ou une dahabiya peut servir d'hôtel. Nous ne bloquons rien à l'avance et chiffrons selon les disponibilités réelles, le supplément de la semaine de l'éclipse étant indiqué à part.",
    },
  ],
  photos: photos(
    [
      "Le temple de Karnak et son lac sacré, à Louxor",
      "Le temple d'Hatchepsout à Deir el-Bahari, au pied des falaises de la rive ouest",
      "Colonnes d'un temple de Louxor",
      "Le pont ombragé d'une dahabiya sur le Nil",
    ],
    ["Karnak", "La rive ouest", "Colonnes", "Sur le Nil"],
  ),
  highlights: {
    heading: "Trois formules qui fonctionnent bien",
    items: [
      "Louxor seul : trois ou quatre nuits autour de l'éclipse",
      "D'abord Le Caire et les pyramides, puis Louxor pour le jour même",
      "Un voyage sur le Nil entre Assouan et Louxor, calé pour que le 2 août se passe à Louxor ou à Edfou",
      "Si vous le souhaitez, quelques jours ensuite au bord de la mer Rouge, dans une eau à 29–30 °C",
    ],
  },
  faqs: [
    {
      q: "Quand a lieu l'éclipse solaire en Égypte ?",
      a: "Le lundi 2 août 2027. À Louxor, la totalité commence vers 13h02, heure locale (12h02 à Paris), et dure environ six minutes et 22 secondes. La phase partielle commence peu avant midi et se termine en début d'après-midi.",
    },
    {
      q: "Peut-on voir l'éclipse depuis Le Caire ?",
      a: "Seulement en partie : Le Caire est en dehors de la bande de totalité et verra environ 95 % du Soleil masqué. C'est spectaculaire, mais le ciel ne s'assombrit pas et la couronne n'est pas visible. Pour la totalité, il faut être à Louxor, Qena, Edfou ou ailleurs dans la bande.",
    },
    {
      q: "Peut-on la voir depuis une croisière sur le Nil ?",
      a: "Oui, si le bateau se trouve dans la bande de totalité le 2 août. Louxor, Qena et Edfou sont toutes dans la totalité : une croisière ou une dahabiya entre Louxor et Edfou peut être sur l'eau au bon moment. Nous organisons alors la navigation autour de l'éclipse, et non l'inverse.",
    },
    {
      q: "Août n'est-il pas trop chaud pour Louxor ?",
      a: "Il fait très chaud — autour de 41–43 °C l'après-midi — et la totalité tombe vers une heure de l'après-midi. Cela fonctionne si la journée est pensée pour : visites à l'ouverture, un endroit ombragé et frais pour observer, beaucoup d'eau et un après-midi calme. En échange, le ciel d'août en Haute-Égypte est l'un des plus sûrement dégagés qui soient.",
    },
    {
      q: "Quand faut-il réserver ?",
      a: "Dès maintenant, si Louxor est le projet. La ville compte peu de très bonnes chambres, et les nuits autour du 2 août 2027 seront les plus demandées de l'année. Fixez d'abord l'hôtel ; le reste du voyage peut se dessiner ensuite.",
    },
    {
      q: "Faut-il des lunettes spéciales ?",
      a: "Oui, pour les phases partielles : des lunettes d'éclipse certifiées ISO 12312-2, ou un filtre solaire sur l'appareil photo et les jumelles. Des lunettes de soleil ordinaires ne protègent pas. Ce n'est que pendant la totalité qu'on peut regarder sans lunettes.",
    },
  ],
  cta: {
    heading: "Préparons votre éclipse",
    text: "Dites-nous combien vous êtes et de combien de jours vous disposez. Nous proposons l'hôtel et le déroulé, et chiffrons selon les disponibilités réelles — le supplément de la semaine de l'éclipse indiqué à part.",
    whatsapp: "Bonjour Kemet — nous aimerions voir l'éclipse du 2 août 2027 à Louxor.",
    emailSubject: "Éclipse 2027 à Louxor — demande",
  },
  moreLabel: "En anglais",
  moreRoute: EN_GUIDE,
  moreText: "Notre guide complet de l'éclipse, en anglais.",
  links: [
    { label: "Croisière sur le Nil", route: "fr/croisiere-sur-le-nil.html" },
    { label: "Quand partir en Égypte", route: "fr/quand-partir-en-egypte.html" },
    { label: "Voyage en Égypte", route: "fr/voyage-egypte.html" },
  ],
};

// ── Spanish ─────────────────────────────────────────────────────────────────
export const esEclipse: LocalizedPage = {
  groupId: "standalone-es-eclipse",
  symbol: "sun",
  theme: "eclipse",
  title: "Eclipse solar 2027 en Luxor: horarios y consejos | Kemet",
  description:
    "Eclipse total del 2 de agosto de 2027 en Luxor: unos 6 min 22 s de totalidad, el más largo del siglo en tierra de fácil acceso. Horarios y dónde verlo.",
  keywords:
    "eclipse 2027 egipto, eclipse solar luxor, eclipse total 2 de agosto de 2027, viaje eclipse egipto, eclipse crucero nilo, dónde ver el eclipse de 2027",
  crumb: "Eclipse 2027",
  h1: "El eclipse total de Sol de 2027 en Luxor",
  standfirst:
    "El lunes 2 de agosto de 2027, la Luna tapará el Sol sobre Luxor durante unos seis minutos y 22 segundos: el eclipse total más largo del siglo en tierra de fácil acceso.",
  lede:
    "Un eclipse total son esos pocos minutos en que la Luna cubre el Sol por completo: el cielo se oscurece en pleno día, baja la temperatura, la corona solar aparece como un halo blanco y todo el horizonte brilla como en un atardecer. La totalidad suele durar dos o tres minutos. El 2 de agosto de 2027 dura más que en ningún otro sitio sobre el Alto Egipto, y sucede sobre la antigua Tebas —Karnak, el templo de Luxor, el Valle de los Reyes—, en una ciudad cuyos constructores orientaban sus templos hacia el Sol.",
  facts: [
    { label: "Fecha", value: "lunes 2 de agosto de 2027" },
    { label: "Totalidad en Luxor", value: "unos 6 min 22 s" },
    { label: "Inicio de la totalidad", value: "hacia las 13:02 locales (12:02 en la Península)" },
    { label: "El Cairo", value: "solo parcial, en torno al 95 %" },
  ],
  sections: [
    {
      title: "Por qué Luxor, y por qué este",
      body:
        "El 2 de agosto de 2027 la sombra de la Luna cruza el norte de África y Oriente Medio, y es sobre el Alto Egipto donde la totalidad dura más: unos seis minutos y 22 segundos en Luxor, y seis minutos y 23 segundos en el punto máximo, a unos 60 km al sureste de la ciudad. No habrá un eclipse total más largo en tierra de fácil acceso hasta el 3 de junio de 2114. Ese mismo día la franja cruza también el extremo sur de España, en torno al Estrecho, pero allí la totalidad es más breve; y llega un año después del eclipse del 12 de agosto de 2026 en España.",
    },
    {
      title: "Cuándo sucede",
      body:
        "La Luna empieza a cubrir el Sol poco antes del mediodía. En Luxor la totalidad comienza hacia las 13:02, hora local (las 12:02 en la España peninsular), y termina hacia las 13:08; después, la fase parcial se va apagando en algo más de una hora. Dentro de Luxor los horarios solo cambian unos segundos: los confirmamos para su punto de observación al escribir el programa.",
    },
    {
      title: "Dónde verlo",
      body:
        "Todo Luxor está dentro de la franja de totalidad, así que la elección es de comodidad, no de geometría: sombra, un sitio para sentarse, agua y el cielo despejado sin multitudes delante. Una terraza junto al Nilo, un rincón tranquilo en la orilla oeste al pie de los montes tebanos o la cubierta de un barco sirven por igual. Qena y Edfu también quedan dentro de la totalidad, de modo que un crucero o una dahabiya entre Luxor y Edfu puede estar navegando en el momento justo. El Cairo, en cambio, solo verá un eclipse parcial de alrededor del 95 %: impresionante, pero el cielo no se oscurece y la corona no se ve.",
    },
    {
      title: "Agosto en Luxor, con franqueza",
      body:
        "Agosto es uno de los dos meses más calurosos de Luxor, con tardes de 41–43 °C, y la totalidad cae en la hora más calurosa del día. Con planificación es perfectamente llevadero; sin ella, no. A cambio, el cielo del Alto Egipto en agosto es de los más fiablemente despejados del mundo, justo lo que pide un eclipse. Así que el día se organiza en torno al calor: templos a la hora de apertura, de vuelta a la sombra a media mañana, el eclipse desde un lugar fresco con agua a mano y la tarde para descansar.",
    },
    {
      title: "Mirar sin riesgo",
      body:
        "Durante las fases parciales —antes y después de la totalidad— no miren nunca al Sol sin gafas de eclipse homologadas (norma ISO 12312-2) o sin un filtro solar adecuado en la cámara o los prismáticos. Solo durante la totalidad, cuando el Sol está completamente cubierto, se puede mirar a simple vista; las gafas vuelven a ponerse en cuanto reaparece el primer borde brillante. Unas gafas de sol normales no son gafas de eclipse.",
    },
    {
      title: "Primero, la habitación",
      body:
        "Luxor es una ciudad pequeña con pocas habitaciones realmente buenas, y las noches en torno al 2 de agosto de 2027 serán las más solicitadas del año; las tarifas de esa semana superan con mucho las de un verano normal. Por eso conviene fijar primero el alojamiento y construir los días alrededor. Está previsto que el Winter Palace reabra en julio de 2027 como Mandarin Oriental Winter Palace: justo a tiempo, si se cumple la fecha. En la orilla oeste alojamos a nuestros viajeros en Al Moudira, y un crucero o una dahabiya puede hacer de hotel. No bloqueamos nada por adelantado y presupuestamos según la disponibilidad real, con el suplemento de la semana del eclipse indicado aparte.",
    },
  ],
  photos: photos(
    [
      "El templo de Karnak y su lago sagrado, en Luxor",
      "El templo de Hatshepsut en Deir el-Bahari, al pie de los acantilados de la orilla oeste",
      "Columnas de un templo de Luxor",
      "La cubierta en sombra de una dahabiya en el Nilo",
    ],
    ["Karnak", "La orilla oeste", "Columnas", "En el Nilo"],
  ),
  highlights: {
    heading: "Tres fórmulas que funcionan bien",
    items: [
      "Solo Luxor: tres o cuatro noches en torno al eclipse",
      "Primero El Cairo y las pirámides, luego Luxor para el día del eclipse",
      "Un viaje por el Nilo entre Asuán y Luxor, ajustado para pasar el 2 de agosto en Luxor o Edfu",
      "Si lo desean, después unos días en el mar Rojo, con el agua a 29–30 °C",
    ],
  },
  faqs: [
    {
      q: "¿Cuándo es el eclipse solar en Egipto?",
      a: "El lunes 2 de agosto de 2027. En Luxor la totalidad empieza hacia las 13:02, hora local (12:02 en la España peninsular), y dura unos seis minutos y 22 segundos. La fase parcial comienza poco antes del mediodía y termina a primera hora de la tarde.",
    },
    {
      q: "¿Se puede ver desde España?",
      a: "Sí: ese día la franja de totalidad también cruza el extremo sur de España, en torno al Estrecho, aunque allí la totalidad es más breve. En Luxor dura unos seis minutos y 22 segundos, prácticamente el máximo de todo el eclipse; si lo que buscan es la totalidad más larga, Egipto es el lugar.",
    },
    {
      q: "¿Se ve desde El Cairo?",
      a: "Solo como eclipse parcial: El Cairo queda fuera de la franja de totalidad y verá cubierto alrededor del 95 % del Sol. Es espectacular, pero el cielo no se oscurece y la corona no se ve. Para la totalidad hay que estar en Luxor, Qena, Edfu o en otro punto dentro de la franja.",
    },
    {
      q: "¿Se puede ver desde un crucero por el Nilo?",
      a: "Sí, si el 2 de agosto el barco está dentro de la franja de totalidad. Luxor, Qena y Edfu están todas en ella, así que un crucero o una dahabiya entre Luxor y Edfu puede estar en el agua en el momento justo. En ese caso organizamos la navegación en torno al eclipse, y no al revés.",
    },
    {
      q: "¿No hace demasiado calor en Luxor en agosto?",
      a: "Hace mucho calor —unos 41–43 °C por la tarde— y la totalidad cae hacia la una. Funciona si el día está pensado para ello: visitas a la hora de apertura, un lugar fresco y a la sombra desde el que mirar, mucha agua y una tarde tranquila. A cambio, el cielo de agosto en el Alto Egipto es de los más fiablemente despejados que existen.",
    },
    {
      q: "¿Cuándo hay que reservar?",
      a: "Ya, si el plan es Luxor. La ciudad tiene pocas habitaciones realmente buenas y las noches en torno al 2 de agosto de 2027 serán las más solicitadas del año. Fijen primero el hotel; el resto del viaje puede definirse después.",
    },
  ],
  cta: {
    heading: "Preparemos su eclipse",
    text: "Díganos cuántos son y de cuántos días disponen. Proponemos hotel y programa y les damos el precio según la disponibilidad real, con el suplemento de la semana del eclipse indicado aparte.",
    whatsapp: "Hola Kemet: queremos ver el eclipse del 2 de agosto de 2027 en Luxor.",
    emailSubject: "Eclipse 2027 en Luxor — consulta",
  },
  moreLabel: "En inglés",
  moreRoute: EN_GUIDE,
  moreText: "Nuestra guía completa del eclipse, en inglés.",
  links: [
    { label: "Crucero por el Nilo", route: "es/crucero-por-el-nilo.html" },
    { label: "Mejor época para viajar a Egipto", route: "es/mejor-epoca-para-viajar-a-egipto.html" },
    { label: "Viajes a Egipto", route: "es/viajes-a-egipto.html" },
  ],
};

// ── Italian ─────────────────────────────────────────────────────────────────
export const itEclipse: LocalizedPage = {
  groupId: "standalone-it-eclipse",
  symbol: "sun",
  theme: "eclipse",
  title: "Eclissi solare 2027 a Luxor: orari e consigli | Kemet",
  description:
    "Eclissi totale del 2 agosto 2027 a Luxor: circa 6 min 22 s di totalità, la più lunga del secolo su una terra facilmente raggiungibile. Orari e dove vederla.",
  keywords:
    "eclissi 2027 egitto, eclissi solare luxor, eclissi totale 2 agosto 2027, viaggio eclissi egitto, eclissi crociera nilo, dove vedere l'eclissi del 2027",
  crumb: "Eclissi 2027",
  h1: "L'eclissi totale di Sole del 2027 a Luxor",
  standfirst:
    "Lunedì 2 agosto 2027 la Luna copre il Sole sopra Luxor per circa sei minuti e 22 secondi: l'eclissi totale più lunga del secolo su una terra facilmente raggiungibile.",
  lede:
    "Un'eclissi totale sono quei pochi minuti in cui la Luna copre completamente il Sole: il cielo si oscura in pieno giorno, la temperatura scende, la corona solare appare come un alone bianco e tutto l'orizzonte si accende come al tramonto. Di solito la totalità dura due o tre minuti. Il 2 agosto 2027 dura più a lungo proprio sopra l'Alto Egitto, e accade sopra l'antica Tebe — Karnak, il tempio di Luxor, la Valle dei Re — in una città i cui costruttori orientavano i templi sul Sole.",
  facts: [
    { label: "Data", value: "lunedì 2 agosto 2027" },
    { label: "Totalità a Luxor", value: "circa 6 min 22 s" },
    { label: "Inizio della totalità", value: "verso le 13:02 locali (12:02 in Italia)" },
    { label: "Il Cairo", value: "solo parziale, circa 95%" },
  ],
  sections: [
    {
      title: "Perché Luxor, e perché questa",
      body:
        "Il 2 agosto 2027 l'ombra della Luna attraversa il Nord Africa e il Medio Oriente, ed è sopra l'Alto Egitto che la totalità dura di più: circa sei minuti e 22 secondi a Luxor, sei minuti e 23 secondi nel punto massimo, una sessantina di chilometri a sud-est della città. Per un'eclissi totale più lunga su una terra facilmente raggiungibile bisognerà aspettare il 3 giugno 2114. E cade a inizio agosto, nelle settimane in cui l'Italia va in ferie, prima di Ferragosto.",
    },
    {
      title: "Quando succede",
      body:
        "La Luna comincia a coprire il Sole poco prima di mezzogiorno. A Luxor la totalità inizia verso le 13:02 ora locale (le 12:02 in Italia) e finisce verso le 13:08; poi la fase parziale si esaurisce in poco più di un'ora. Da un punto all'altro di Luxor gli orari cambiano solo di qualche secondo: li confermiamo per il vostro punto di osservazione quando scriviamo il programma.",
    },
    {
      title: "Dove vederla",
      body:
        "Tutta Luxor è dentro la fascia di totalità, quindi la scelta riguarda la comodità, non la geometria: ombra, un posto a sedere, acqua e il cielo libero senza folla davanti. Una terrazza sul Nilo, un angolo tranquillo sulla riva occidentale ai piedi dei monti tebani o il ponte di una barca vanno tutti bene. Anche Qena ed Edfu sono nella totalità, così una crociera o una dahabiya tra Luxor ed Edfu può trovarsi sull'acqua nel momento giusto. Il Cairo invece vedrà solo un'eclissi parziale di circa il 95%: impressionante, ma il cielo non si oscura e la corona non si vede.",
    },
    {
      title: "Agosto a Luxor, onestamente",
      body:
        "Agosto è uno dei due mesi più caldi di Luxor, con pomeriggi intorno ai 41–43 °C, e la totalità cade nell'ora più calda della giornata. Con un'organizzazione attenta si fa benissimo; senza, è faticoso. In cambio, il cielo dell'Alto Egitto in agosto è tra i più sicuramente sereni al mondo: esattamente ciò che serve a un'eclissi. La giornata si costruisce quindi intorno al caldo: templi all'apertura, di nuovo all'ombra a fine mattinata, l'eclissi da un luogo fresco con acqua a portata di mano e il pomeriggio a riposo.",
    },
    {
      title: "Guardare in sicurezza",
      body:
        "Durante le fasi parziali — prima e dopo la totalità — non guardate mai il Sole senza occhiali per eclissi certificati (norma ISO 12312-2) o senza un filtro solare adatto su macchina fotografica e binocolo. Solo durante la totalità, quando il Sole è completamente coperto, si può guardare a occhio nudo; gli occhiali si rimettono appena ricompare il primo bordo luminoso. I normali occhiali da sole non sono occhiali per eclissi.",
    },
    {
      title: "Prima di tutto, la camera",
      body:
        "Luxor è una città piccola con poche camere davvero buone, e le notti intorno al 2 agosto 2027 saranno le più richieste dell'anno; le tariffe di quella settimana superano di molto quelle di una normale estate. Conviene quindi fissare prima l'alloggio e costruire i giorni intorno. Il Winter Palace dovrebbe riaprire a luglio 2027 come Mandarin Oriental Winter Palace: giusto in tempo, se la data sarà rispettata. Sulla riva occidentale i nostri ospiti alloggiano all'Al Moudira, e una crociera o una dahabiya può fare da albergo. Non blocchiamo nulla in anticipo e quotiamo sulla disponibilità reale, con il supplemento della settimana dell'eclissi indicato a parte.",
    },
  ],
  photos: photos(
    [
      "Il tempio di Karnak e il suo lago sacro, a Luxor",
      "Il tempio di Hatshepsut a Deir el-Bahari, sotto le falesie della riva occidentale",
      "Colonne di un tempio di Luxor",
      "Il ponte ombreggiato di una dahabiya sul Nilo",
    ],
    ["Karnak", "La riva occidentale", "Colonne", "Sul Nilo"],
  ),
  highlights: {
    heading: "Tre formule che funzionano bene",
    items: [
      "Solo Luxor: tre o quattro notti intorno all'eclissi",
      "Prima Il Cairo e le piramidi, poi Luxor per il giorno dell'eclissi",
      "Un viaggio sul Nilo tra Assuan e Luxor, calibrato perché il 2 agosto si trascorra a Luxor o a Edfu",
      "Se volete, qualche giorno dopo sul Mar Rosso, con l'acqua a 29–30 °C",
    ],
  },
  faqs: [
    {
      q: "Quando c'è l'eclissi solare in Egitto?",
      a: "Lunedì 2 agosto 2027. A Luxor la totalità inizia verso le 13:02 ora locale (le 12:02 in Italia) e dura circa sei minuti e 22 secondi. La fase parziale comincia poco prima di mezzogiorno e finisce nel primo pomeriggio.",
    },
    {
      q: "Si vede dal Cairo?",
      a: "Solo come eclissi parziale: Il Cairo è fuori dalla fascia di totalità e vedrà coperto circa il 95% del Sole. È spettacolare, ma il cielo non si oscura e la corona non è visibile. Per la totalità bisogna essere a Luxor, Qena, Edfu o altrove nella fascia.",
    },
    {
      q: "Si può vedere da una crociera sul Nilo?",
      a: "Sì, se il 2 agosto la barca si trova nella fascia di totalità. Luxor, Qena ed Edfu sono tutte nella totalità, quindi una crociera o una dahabiya tra Luxor ed Edfu può essere sull'acqua al momento giusto. In quel caso organizziamo la navigazione intorno all'eclissi, non il contrario.",
    },
    {
      q: "Agosto non è troppo caldo per Luxor?",
      a: "Fa molto caldo — intorno ai 41–43 °C il pomeriggio — e la totalità cade verso l'una. Funziona se la giornata è pensata per questo: visite all'apertura, un posto fresco e all'ombra da cui guardare, tanta acqua e un pomeriggio tranquillo. In cambio, il cielo d'agosto sull'Alto Egitto è tra i più sicuramente sereni che esistano.",
    },
    {
      q: "Quando conviene prenotare?",
      a: "Adesso, se il progetto è Luxor. La città ha poche camere davvero buone e le notti intorno al 2 agosto 2027 saranno le più richieste dell'anno. Fissate prima l'albergo; il resto del viaggio si può definire dopo.",
    },
    {
      q: "Servono occhiali speciali?",
      a: "Sì, per le fasi parziali: occhiali per eclissi certificati ISO 12312-2, oppure un filtro solare su macchina fotografica e binocolo. I normali occhiali da sole non proteggono. Solo durante la totalità si può guardare senza.",
    },
  ],
  cta: {
    heading: "Organizziamo la vostra eclissi",
    text: "Diteci in quanti siete e quanti giorni avete. Vi proponiamo albergo e programma e vi diamo il prezzo sulla disponibilità reale, con il supplemento della settimana dell'eclissi indicato a parte.",
    whatsapp: "Buongiorno Kemet, vorremmo vedere l'eclissi del 2 agosto 2027 a Luxor.",
    emailSubject: "Eclissi 2027 a Luxor — richiesta",
  },
  moreLabel: "In inglese",
  moreRoute: EN_GUIDE,
  moreText: "La nostra guida completa all'eclissi, in inglese.",
  links: [
    { label: "Crociera sul Nilo", route: "it/crociera-sul-nilo.html" },
    { label: "Dove dormire in Egitto", route: "it/dove-dormire-in-egitto.html" },
    { label: "Ferragosto in Egitto", route: "it/ferragosto-in-egitto.html" },
    { label: "Quando andare in Egitto", route: "it/quando-andare-in-egitto.html" },
  ],
};

// ── Russian ─────────────────────────────────────────────────────────────────
export const ruEclipse: LocalizedPage = {
  groupId: "standalone-ru-eclipse",
  symbol: "sun",
  theme: "eclipse",
  title: "Солнечное затмение 2027 в Луксоре: время и советы | Kemet",
  description:
    "Полное солнечное затмение 2 августа 2027 года в Луксоре: около 6 мин 22 с полной фазы — самое долгое в этом веке на легкодоступной суше. Время, где смотреть.",
  keywords:
    "солнечное затмение 2027 египет, затмение луксор, полное солнечное затмение 2 августа 2027, тур на затмение в египет, затмение круиз по нилу, где смотреть затмение 2027",
  crumb: "Затмение 2027",
  h1: "Полное солнечное затмение 2027 года в Луксоре",
  standfirst:
    "В понедельник, 2 августа 2027 года, Луна закроет Солнце над Луксором примерно на шесть минут 22 секунды — это самое продолжительное полное затмение века на легкодоступной суше.",
  lede:
    "Полное солнечное затмение — это несколько минут, когда Луна целиком закрывает Солнце: среди дня темнеет небо, падает температура, вокруг Солнца проступает белое сияние короны, а по всему горизонту разливается закатный свет. Обычно полная фаза длится две-три минуты. 2 августа 2027 года дольше всего она продлится над Верхним Египтом — над древними Фивами, Карнаком, Луксорским храмом и Долиной царей, в городе, чьи строители ориентировали храмы по Солнцу.",
  facts: [
    { label: "Дата", value: "понедельник, 2 августа 2027" },
    { label: "Полная фаза в Луксоре", value: "около 6 мин 22 с" },
    { label: "Начало полной фазы", value: "около 13:02 — как в Москве" },
    { label: "Каир", value: "только частное, около 95 %" },
  ],
  sections: [
    {
      title: "Почему Луксор и почему именно это затмение",
      body:
        "2 августа 2027 года тень Луны пройдёт через Северную Африку и Ближний Восток, и над Верхним Египтом полная фаза будет самой долгой: около шести минут 22 секунд в Луксоре и шесть минут 23 секунды в точке максимума, примерно в 60 км к юго-востоку от города. Более долгое полное затмение на легкодоступной суше будет только 3 июня 2114 года.",
    },
    {
      title: "Когда это произойдёт",
      body:
        "Луна начнёт закрывать Солнце незадолго до полудня. В Луксоре полная фаза начнётся около 13:02 по местному времени — в августе оно совпадает с московским — и закончится около 13:08; затем частная фаза постепенно сойдёт на нет за час с небольшим. В пределах Луксора время различается лишь на секунды: мы уточним его для вашей точки наблюдения, когда будем составлять программу.",
    },
    {
      title: "Откуда смотреть",
      body:
        "Весь Луксор находится в полосе полной фазы, поэтому выбор места — вопрос комфорта, а не геометрии: тень, где присесть, вода и открытое небо без толпы перед глазами. Подойдёт терраса на берегу Нила, тихое место на западном берегу у Фиванских гор или палуба судна. Кена и Эдфу тоже в полосе полной фазы, так что круизный теплоход или дахабия между Луксором и Эдфу могут оказаться на воде в нужный момент. А вот в Каире затмение будет лишь частным, около 95 %: впечатляюще, но небо не темнеет и корону не видно.",
    },
    {
      title: "Август в Луксоре — честно",
      body:
        "Август — один из двух самых жарких месяцев в Луксоре, днём около 41–43 °C, и полная фаза приходится на самый жаркий час. С хорошей организацией это вполне выносимо, без неё — тяжело. Зато небо над Верхним Египтом в августе — одно из самых надёжно ясных на свете, а именно это и нужно для затмения. Поэтому день строится вокруг жары: храмы к открытию, к концу утра — обратно в тень, затмение — из прохладного места с водой под рукой, а после — отдых.",
    },
    {
      title: "Как смотреть безопасно",
      body:
        "Во время частных фаз — до и после полной — никогда не смотрите на Солнце без сертифицированных очков для затмений (стандарт ISO 12312-2) или без солнечного фильтра на камере и бинокле. Смотреть невооружённым глазом можно только во время самой полной фазы, когда Солнце закрыто целиком; очки надевают снова, как только появляется первый яркий край. Обычные солнцезащитные очки — это не очки для затмений.",
    },
    {
      title: "Сначала — номер",
      body:
        "Луксор — небольшой город, в котором мало по-настоящему хороших номеров, а ночи вокруг 2 августа 2027 года станут самыми востребованными за год; цены на эту неделю намного выше обычных летних. Поэтому сначала решаем, где вы живёте, а дни выстраиваем вокруг этого. Отель Winter Palace должен вновь открыться в июле 2027 года как Mandarin Oriental Winter Palace — как раз вовремя, если сроки не сдвинутся. На западном берегу наши гости живут в Al Moudira, а круизный теплоход или дахабия могут сами стать отелем. Мы ничего не бронируем заранее и считаем стоимость по реальному наличию мест, а надбавку за неделю затмения указываем отдельно.",
    },
  ],
  photos: photos(
    [
      "Карнакский храм и его священное озеро в Луксоре",
      "Храм Хатшепсут в Дейр-эль-Бахри у скал западного берега",
      "Колонны храма в Луксоре",
      "Тенистая палуба дахабии на Ниле",
    ],
    ["Карнак", "Западный берег", "Колонны", "На Ниле"],
  ),
  highlights: {
    heading: "Три формата, которые хорошо работают",
    items: [
      "Только Луксор: три-четыре ночи вокруг затмения",
      "Сначала Каир и пирамиды, затем Луксор на сам день затмения",
      "Путешествие по Нилу между Асуаном и Луксором, рассчитанное так, чтобы 2 августа быть в Луксоре или Эдфу",
      "По желанию — потом несколько дней на Красном море, вода 29–30 °C",
    ],
  },
  faqs: [
    {
      q: "Когда будет солнечное затмение в Египте?",
      a: "В понедельник, 2 августа 2027 года. В Луксоре полная фаза начнётся около 13:02 по местному времени (оно совпадает с московским) и продлится около шести минут 22 секунд. Частная фаза начнётся незадолго до полудня и закончится в начале второй половины дня.",
    },
    {
      q: "Видно ли затмение из Каира?",
      a: "Только частное: Каир находится вне полосы полной фазы, там Луна закроет около 95 % Солнца. Это эффектно, но небо не темнеет и корона не видна. Для полной фазы нужно быть в Луксоре, Кене, Эдфу или в другом месте внутри полосы.",
    },
    {
      q: "Можно ли увидеть затмение с круизного теплохода на Ниле?",
      a: "Да, если 2 августа судно будет в полосе полной фазы. Луксор, Кена и Эдфу — все в полосе, поэтому круиз или дахабия между Луксором и Эдфу могут быть на воде в нужный момент. Тогда мы планируем маршрут вокруг затмения, а не наоборот.",
    },
    {
      q: "Не слишком ли жарко в Луксоре в августе?",
      a: "Очень жарко — днём около 41–43 °C, — и полная фаза приходится примерно на час дня. Всё получается, если день спланирован под это: осмотр к открытию, тенистое прохладное место для наблюдения, много воды и спокойная вторая половина дня. Зато августовское небо над Верхним Египтом — одно из самых надёжно ясных.",
    },
    {
      q: "Когда бронировать?",
      a: "Сейчас, если вы выбрали Луксор. В городе мало по-настоящему хороших номеров, а ночи вокруг 2 августа 2027 года будут самыми востребованными за год. Сначала отель, остальное можно спланировать позже.",
    },
    {
      q: "Нужны ли специальные очки?",
      a: "Да, для частных фаз: сертифицированные очки для затмений по стандарту ISO 12312-2 или солнечный фильтр на камеру и бинокль. Обычные солнцезащитные очки не защищают. Без очков можно смотреть только во время полной фазы.",
    },
  ],
  cta: {
    heading: "Спланируем ваше затмение",
    text: "Напишите, сколько вас и сколько у вас дней. Мы предложим отель и программу и назовём цену по реальному наличию мест — надбавку за неделю затмения укажем отдельно.",
    whatsapp: "Здравствуйте, Kemet — мы хотим увидеть затмение 2 августа 2027 года в Луксоре.",
    emailSubject: "Затмение 2027 в Луксоре — запрос",
  },
  moreLabel: "На английском",
  moreRoute: EN_GUIDE,
  moreText: "Наш полный гид по затмению — на английском.",
  links: [
    { label: "Круиз по Нилу", route: "ru/kruiz-po-nilu.html" },
    { label: "Когда лучше ехать в Египет", route: "ru/kogda-luchshe-ehat-v-egipet.html" },
    { label: "Туры в Египет", route: "ru/tury-v-egipet.html" },
  ],
};

// ── Portuguese (Brazil) ─────────────────────────────────────────────────────
export const ptEclipse: LocalizedPage = {
  groupId: "standalone-pt-eclipse",
  symbol: "sun",
  theme: "eclipse",
  title: "Eclipse solar de 2027 em Luxor: horários e dicas | Kemet",
  description:
    "Eclipse total de 2 de agosto de 2027 em Luxor: cerca de 6 min 22 s de totalidade, o mais longo do século em terra de fácil acesso. Horários e onde ver.",
  keywords:
    "eclipse 2027 egito, eclipse solar luxor, eclipse total 2 de agosto de 2027, viagem eclipse egito, eclipse cruzeiro nilo, onde ver o eclipse de 2027",
  crumb: "Eclipse de 2027",
  h1: "O eclipse solar total de 2027 em Luxor",
  standfirst:
    "Na segunda-feira, 2 de agosto de 2027, a Lua cobre o Sol sobre Luxor por cerca de seis minutos e 22 segundos — o eclipse total mais longo do século em terra de fácil acesso.",
  lede:
    "Um eclipse total são aqueles poucos minutos em que a Lua cobre o Sol por completo: o céu escurece em pleno dia, a temperatura cai, a coroa solar aparece como um halo branco e todo o horizonte brilha como no pôr do sol. A totalidade costuma durar dois ou três minutos. Em 2 de agosto de 2027, ela é mais longa justamente sobre o Alto Egito — e acontece sobre a antiga Tebas, Karnak, o templo de Luxor e o Vale dos Reis, numa cidade cujos construtores alinhavam os templos com o Sol.",
  facts: [
    { label: "Data", value: "segunda-feira, 2 de agosto de 2027" },
    { label: "Totalidade em Luxor", value: "cerca de 6 min 22 s" },
    { label: "Início da totalidade", value: "por volta das 13h02 locais (7h02 em Brasília)" },
    { label: "Cairo", value: "só parcial, cerca de 95%" },
  ],
  sections: [
    {
      title: "Por que Luxor, e por que este",
      body:
        "Em 2 de agosto de 2027, a sombra da Lua atravessa o Norte da África e o Oriente Médio, e é sobre o Alto Egito que a totalidade dura mais: cerca de seis minutos e 22 segundos em Luxor e seis minutos e 23 segundos no ponto máximo, uns 60 km a sudeste da cidade. Um eclipse total mais longo em terra de fácil acesso só acontecerá em 3 de junho de 2114.",
    },
    {
      title: "Quando acontece",
      body:
        "A Lua começa a cobrir o Sol pouco antes do meio-dia. Em Luxor, a totalidade começa por volta das 13h02, hora local (7h02 em Brasília, 11h02 em Lisboa), e termina por volta das 13h08; depois, a fase parcial vai se desfazendo em pouco mais de uma hora. Dentro de Luxor os horários mudam apenas alguns segundos: nós os confirmamos para o seu ponto de observação quando o roteiro é escrito.",
    },
    {
      title: "Onde assistir",
      body:
        "Toda Luxor está dentro da faixa de totalidade, então a escolha é de conforto, não de geometria: sombra, um lugar para sentar, água e o céu livre, sem multidão na frente. Um terraço à beira do Nilo, um canto tranquilo na margem oeste, aos pés das montanhas tebanas, ou o convés de um barco servem igualmente. Qena e Edfu também estão na totalidade, de modo que um cruzeiro ou uma dahabiya entre Luxor e Edfu pode estar navegando na hora certa. Já o Cairo verá apenas um eclipse parcial de cerca de 95%: impressionante, mas o céu não escurece e a coroa não aparece.",
    },
    {
      title: "Agosto em Luxor, com franqueza",
      body:
        "Agosto é um dos dois meses mais quentes de Luxor, com tardes de 41–43 °C, e a totalidade cai na hora mais quente do dia. Com planejamento, é perfeitamente viável; sem ele, é sofrido. Em troca, o céu do Alto Egito em agosto é um dos mais confiavelmente limpos do mundo — exatamente o que um eclipse pede. Por isso o dia é montado em torno do calor: templos na abertura, de volta à sombra no fim da manhã, o eclipse de um lugar fresco com água à mão e a tarde para descansar.",
    },
    {
      title: "Olhar com segurança",
      body:
        "Durante as fases parciais — antes e depois da totalidade — nunca olhe para o Sol sem óculos de eclipse certificados (norma ISO 12312-2) ou sem um filtro solar adequado na câmera e no binóculo. Só durante a totalidade, quando o Sol está totalmente coberto, é seguro olhar a olho nu; os óculos voltam assim que reaparece a primeira borda brilhante. Óculos de sol comuns não são óculos de eclipse.",
    },
    {
      title: "Primeiro, o quarto",
      body:
        "Luxor é uma cidade pequena, com poucos quartos realmente bons, e as noites em torno de 2 de agosto de 2027 serão as mais disputadas do ano; as diárias dessa semana ficam muito acima das de um agosto normal. Por isso, primeiro se define a hospedagem, e os dias são montados em volta dela. O Winter Palace deve reabrir em julho de 2027 como Mandarin Oriental Winter Palace — bem a tempo, se a data se mantiver. Na margem oeste, hospedamos nossos viajantes no Al Moudira, e um cruzeiro ou uma dahabiya pode ser o próprio hotel. Não bloqueamos nada com antecedência e fazemos o orçamento pela disponibilidade real, com o suplemento da semana do eclipse indicado à parte.",
    },
  ],
  photos: photos(
    [
      "O templo de Karnak e seu lago sagrado, em Luxor",
      "O templo de Hatshepsut em Deir el-Bahari, aos pés dos penhascos da margem oeste",
      "Colunas de um templo de Luxor",
      "O convés sombreado de uma dahabiya no Nilo",
    ],
    ["Karnak", "A margem oeste", "Colunas", "No Nilo"],
  ),
  highlights: {
    heading: "Três formatos que funcionam bem",
    items: [
      "Só Luxor: três ou quatro noites em torno do eclipse",
      "Primeiro o Cairo e as pirâmides, depois Luxor para o dia do eclipse",
      "Uma viagem pelo Nilo entre Assuã e Luxor, ajustada para passar o 2 de agosto em Luxor ou Edfu",
      "Se quiserem, depois alguns dias no mar Vermelho, com a água a 29–30 °C",
    ],
  },
  faqs: [
    {
      q: "Quando é o eclipse solar no Egito?",
      a: "Na segunda-feira, 2 de agosto de 2027. Em Luxor, a totalidade começa por volta das 13h02, hora local (7h02 em Brasília, 11h02 em Lisboa), e dura cerca de seis minutos e 22 segundos. A fase parcial começa pouco antes do meio-dia e termina no início da tarde.",
    },
    {
      q: "Dá para ver o eclipse do Cairo?",
      a: "Só como eclipse parcial: o Cairo fica fora da faixa de totalidade e verá cerca de 95% do Sol coberto. É impressionante, mas o céu não escurece e a coroa não fica visível. Para a totalidade, é preciso estar em Luxor, Qena, Edfu ou em outro ponto dentro da faixa.",
    },
    {
      q: "Dá para ver de um cruzeiro pelo Nilo?",
      a: "Sim, se no dia 2 de agosto o barco estiver dentro da faixa de totalidade. Luxor, Qena e Edfu estão todas na totalidade, então um cruzeiro ou uma dahabiya entre Luxor e Edfu pode estar na água na hora certa. Nesse caso, planejamos a navegação em torno do eclipse, e não o contrário.",
    },
    {
      q: "Agosto não é quente demais em Luxor?",
      a: "É muito quente — cerca de 41–43 °C à tarde — e a totalidade cai por volta da uma da tarde. Funciona quando o dia é planejado para isso: visitas na abertura, um lugar fresco e à sombra para assistir, muita água e uma tarde tranquila. Em troca, o céu de agosto no Alto Egito é um dos mais confiavelmente limpos que existem.",
    },
    {
      q: "Quando reservar?",
      a: "Agora, se o plano é Luxor. A cidade tem poucos quartos realmente bons e as noites em torno de 2 de agosto de 2027 serão as mais disputadas do ano. Defina primeiro o hotel; o resto da viagem pode ser desenhado depois.",
    },
    {
      q: "Preciso de óculos especiais?",
      a: "Sim, para as fases parciais: óculos de eclipse certificados ISO 12312-2, ou um filtro solar na câmera e no binóculo. Óculos de sol comuns não protegem. Só durante a totalidade se pode olhar sem eles.",
    },
  ],
  cta: {
    heading: "Vamos planejar o seu eclipse",
    text: "Diga quantas pessoas são e quantos dias vocês têm. Sugerimos hotel e roteiro e passamos o preço pela disponibilidade real, com o suplemento da semana do eclipse indicado à parte.",
    whatsapp: "Olá Kemet — queremos ver o eclipse de 2 de agosto de 2027 em Luxor.",
    emailSubject: "Eclipse de 2027 em Luxor — pedido",
  },
  moreLabel: "Em inglês",
  moreRoute: EN_GUIDE,
  moreText: "Nosso guia completo do eclipse, em inglês.",
  links: [
    { label: "Cruzeiro pelo Nilo", route: "pt/cruzeiro-pelo-nilo.html" },
    { label: "Melhor época para ir ao Egito", route: "pt/melhor-epoca-para-ir-ao-egito.html" },
    { label: "Viagens ao Egito", route: "pt/viagens-ao-egito.html" },
  ],
};

// ── Indonesian ──────────────────────────────────────────────────────────────
export const idEclipse: LocalizedPage = {
  groupId: "standalone-id-eclipse",
  symbol: "sun",
  theme: "eclipse",
  title: "Gerhana Matahari Total 2027 di Luxor, Mesir | Kemet",
  description:
    "Gerhana matahari total 2 Agustus 2027 di Luxor: sekitar 6 menit 22 detik, terlama abad ini di daratan yang mudah dijangkau. Jam, lokasi, dan salat gerhana.",
  keywords:
    "gerhana matahari 2027 mesir, gerhana matahari total luxor, gerhana 2 agustus 2027, salat gerhana di mesir, shalat gerhana, wisata gerhana mesir, pesiar sungai nil gerhana",
  crumb: "Gerhana 2027",
  h1: "Gerhana Matahari Total 2027 di Luxor",
  standfirst:
    "Pada Senin, 2 Agustus 2027, Bulan menutupi Matahari di atas Luxor selama sekitar enam menit 22 detik — gerhana total terlama abad ini di daratan yang mudah dijangkau.",
  lede:
    "Gerhana matahari total adalah beberapa menit ketika Bulan menutupi Matahari sepenuhnya: langit menjadi gelap di siang hari, suhu turun, korona Matahari tampak seperti lingkaran cahaya putih, dan seluruh cakrawala bercahaya seperti saat matahari terbenam. Biasanya totalitas berlangsung dua atau tiga menit. Pada 2 Agustus 2027, totalitas paling lama justru terjadi di atas Mesir Hulu — di atas Thebes kuno, Karnak, Kuil Luxor, dan Lembah Para Raja, di kota yang para pembangunnya menyelaraskan kuil-kuil mereka dengan Matahari.",
  facts: [
    { label: "Tanggal", value: "Senin, 2 Agustus 2027" },
    { label: "Totalitas di Luxor", value: "sekitar 6 menit 22 detik" },
    { label: "Awal totalitas", value: "sekitar 13.02 waktu setempat (17.02 WIB)" },
    { label: "Kairo", value: "hanya sebagian, sekitar 95%" },
  ],
  sections: [
    {
      title: "Mengapa Luxor, dan mengapa gerhana ini",
      body:
        "Pada 2 Agustus 2027, bayangan Bulan melintasi Afrika Utara dan Timur Tengah, dan di atas Mesir Hulu totalitas berlangsung paling lama: sekitar enam menit 22 detik di Luxor, dan enam menit 23 detik di titik terlamanya, sekitar 60 km di tenggara kota. Gerhana total yang lebih lama di daratan yang mudah dijangkau baru akan terjadi lagi pada 3 Juni 2114.",
    },
    {
      title: "Salat gerhana",
      body:
        "Bagi umat Islam, gerhana matahari adalah waktu salat gerhana (salat kusuf), yang disunnahkan selama gerhana berlangsung, sejak fase sebagian sampai Matahari kembali terang. Luxor memiliki banyak masjid, dan kami menyusun hari itu agar ada waktu untuk salat sekaligus menyaksikan totalitas — di masjid terdekat atau di tempat Anda menyaksikan gerhana.",
    },
    {
      title: "Kapan terjadi",
      body:
        "Bulan mulai menutupi Matahari sesaat sebelum tengah hari. Di Luxor totalitas dimulai sekitar pukul 13.02 waktu setempat (17.02 WIB) dan berakhir sekitar pukul 13.08; setelah itu fase sebagian perlahan berakhir dalam waktu sedikit lebih dari satu jam. Di dalam kota Luxor, perbedaan waktunya hanya hitungan detik: kami memastikannya untuk titik pengamatan Anda saat program disusun.",
    },
    {
      title: "Menyaksikan dari mana",
      body:
        "Seluruh Luxor berada di jalur totalitas, jadi pilihannya soal kenyamanan, bukan geometri: teduh, tempat duduk, air minum, dan langit yang lapang tanpa kerumunan di depan. Teras di tepi Sungai Nil, sudut yang tenang di Tepi Barat di kaki pegunungan Thebes, atau dek kapal — semuanya cocok. Qena dan Edfu juga berada di jalur totalitas, sehingga kapal pesiar atau dahabiya antara Luxor dan Edfu bisa berada di atas air pada saat yang tepat. Sebaliknya, Kairo hanya mengalami gerhana sebagian sekitar 95%: mengesankan, tetapi langit tidak menjadi gelap dan korona tidak terlihat.",
    },
    {
      title: "Agustus di Luxor, terus terang",
      body:
        "Agustus adalah salah satu dari dua bulan terpanas di Luxor, dengan siang hingga sore sekitar 41–43 °C, dan totalitas jatuh pada jam terpanas hari itu. Dengan perencanaan, ini sangat bisa dijalani; tanpa perencanaan, berat. Sebagai gantinya, langit Mesir Hulu pada bulan Agustus termasuk yang paling dapat diandalkan cerahnya di dunia — persis yang dibutuhkan gerhana. Jadi hari itu disusun mengikuti panas: kuil saat baru dibuka, kembali ke tempat teduh menjelang siang, gerhana dari tempat yang sejuk dengan air di dekat Anda, dan sore untuk beristirahat.",
    },
    {
      title: "Melihat dengan aman",
      body:
        "Selama fase sebagian — sebelum dan sesudah totalitas — jangan pernah menatap Matahari tanpa kacamata gerhana bersertifikat (standar ISO 12312-2) atau tanpa filter surya yang sesuai pada kamera dan teropong. Hanya selama totalitas, ketika Matahari tertutup sepenuhnya, aman dilihat dengan mata telanjang; kacamata dipakai lagi begitu tepi terang pertama muncul kembali. Kacamata hitam biasa bukan kacamata gerhana.",
    },
    {
      title: "Kamar dulu",
      body:
        "Luxor adalah kota kecil dengan sedikit kamar yang benar-benar baik, dan malam-malam di sekitar 2 Agustus 2027 akan menjadi yang paling dicari sepanjang tahun; tarif pekan itu jauh di atas tarif musim panas biasa. Karena itu, tentukan dulu tempat menginap, lalu susun hari-hari di sekitarnya. Winter Palace dijadwalkan dibuka kembali pada Juli 2027 sebagai Mandarin Oriental Winter Palace — tepat waktu, jika jadwalnya tidak bergeser. Di Tepi Barat, tamu kami menginap di Al Moudira, dan kapal pesiar atau dahabiya bisa sekaligus menjadi hotel. Kami tidak memesan apa pun di muka dan menghitung harga dari ketersediaan nyata, dengan biaya tambahan pekan gerhana dirinci terpisah.",
    },
  ],
  photos: photos(
    [
      "Kuil Karnak dan danau sucinya di Luxor",
      "Kuil Hatshepsut di Deir el-Bahari, di kaki tebing Tepi Barat",
      "Pilar-pilar sebuah kuil di Luxor",
      "Dek teduh sebuah dahabiya di Sungai Nil",
    ],
    ["Karnak", "Tepi Barat", "Pilar-pilar", "Di Sungai Nil"],
  ),
  highlights: {
    heading: "Tiga pilihan perjalanan yang cocok",
    items: [
      "Luxor saja: tiga atau empat malam di sekitar hari gerhana",
      "Kairo dan piramida dulu, lalu Luxor untuk hari gerhana",
      "Perjalanan Sungai Nil antara Aswan dan Luxor, diatur agar 2 Agustus dilewati di Luxor atau Edfu",
      "Makanan halal dan waktu salat diperhitungkan di setiap hari perjalanan",
    ],
  },
  faqs: [
    {
      q: "Kapan gerhana matahari di Mesir?",
      a: "Senin, 2 Agustus 2027. Di Luxor totalitas dimulai sekitar pukul 13.02 waktu setempat (17.02 WIB) dan berlangsung sekitar enam menit 22 detik. Fase sebagian dimulai sesaat sebelum tengah hari dan berakhir pada awal sore.",
    },
    {
      q: "Apakah bisa salat gerhana di Luxor?",
      a: "Bisa. Salat gerhana (salat kusuf) disunnahkan selama gerhana berlangsung, dan Luxor memiliki banyak masjid. Kami menyusun hari itu agar ada waktu untuk salat sekaligus menyaksikan totalitas.",
    },
    {
      q: "Apakah gerhana terlihat dari Kairo?",
      a: "Hanya sebagian: Kairo berada di luar jalur totalitas, dan sekitar 95% Matahari akan tertutup. Itu mengesankan, tetapi langit tidak menjadi gelap dan korona tidak terlihat. Untuk totalitas, Anda harus berada di Luxor, Qena, Edfu, atau tempat lain di dalam jalur.",
    },
    {
      q: "Bisakah menyaksikannya dari kapal pesiar Sungai Nil?",
      a: "Bisa, jika pada 2 Agustus kapal berada di jalur totalitas. Luxor, Qena, dan Edfu semuanya berada di jalur, jadi kapal pesiar atau dahabiya antara Luxor dan Edfu bisa berada di atas air pada saat yang tepat. Dalam hal itu, kami mengatur pelayaran mengikuti gerhana, bukan sebaliknya.",
    },
    {
      q: "Apakah Agustus terlalu panas untuk Luxor?",
      a: "Sangat panas — sekitar 41–43 °C pada siang dan sore hari — dan totalitas jatuh sekitar pukul satu siang. Semuanya berjalan baik jika hari itu direncanakan: kunjungan saat kuil baru dibuka, tempat yang teduh dan sejuk untuk menyaksikan, banyak air, dan sore yang tenang. Sebagai gantinya, langit Agustus di Mesir Hulu termasuk yang paling dapat diandalkan cerahnya.",
    },
    {
      q: "Kapan sebaiknya memesan?",
      a: "Sekarang, jika Luxor yang dituju. Kota ini hanya punya sedikit kamar yang benar-benar baik, dan malam-malam di sekitar 2 Agustus 2027 akan menjadi yang paling dicari sepanjang tahun. Tentukan hotel dulu; sisa perjalanan bisa disusun kemudian.",
    },
  ],
  cta: {
    heading: "Mari rencanakan gerhana Anda",
    text: "Beri tahu kami jumlah peserta dan berapa hari yang Anda miliki. Kami mengusulkan hotel dan susunan acara, dan memberi harga sesuai ketersediaan nyata — biaya tambahan pekan gerhana dirinci terpisah.",
    whatsapp: "Halo Kemet — kami ingin menyaksikan gerhana matahari 2 Agustus 2027 di Luxor.",
    emailSubject: "Gerhana 2027 di Luxor — pertanyaan",
  },
  moreLabel: "Dalam bahasa Inggris",
  moreRoute: EN_GUIDE,
  moreText: "Panduan lengkap kami tentang gerhana ini, dalam bahasa Inggris.",
  links: [
    { label: "Pesiar Sungai Nil", route: "id/pesiar-sungai-nil.html" },
    { label: "Halal & waktu salat", route: "id/halal-dan-waktu-salat.html" },
    { label: "Waktu terbaik ke Mesir", route: "id/waktu-terbaik-ke-mesir.html" },
  ],
};

// ── Malay ───────────────────────────────────────────────────────────────────
export const msEclipse: LocalizedPage = {
  groupId: "standalone-ms-eclipse",
  symbol: "sun",
  theme: "eclipse",
  title: "Gerhana Matahari Penuh 2027 di Luxor, Mesir | Kemet",
  description:
    "Gerhana matahari penuh 2 Ogos 2027 di Luxor: kira-kira 6 minit 22 saat, terpanjang abad ini di daratan yang mudah dikunjungi. Waktu, lokasi dan solat gerhana.",
  keywords:
    "gerhana matahari 2027 mesir, gerhana matahari penuh luxor, gerhana 2 ogos 2027, solat gerhana di mesir, pelancongan gerhana mesir, pelayaran sungai nil gerhana",
  crumb: "Gerhana 2027",
  h1: "Gerhana Matahari Penuh 2027 di Luxor",
  standfirst:
    "Pada hari Isnin, 2 Ogos 2027, Bulan menutup Matahari di atas Luxor selama kira-kira enam minit 22 saat — gerhana penuh terpanjang abad ini di daratan yang mudah dikunjungi.",
  lede:
    "Gerhana matahari penuh ialah beberapa minit apabila Bulan menutup Matahari sepenuhnya: langit menjadi gelap pada siang hari, suhu menurun, korona Matahari kelihatan seperti lingkaran cahaya putih, dan seluruh ufuk bercahaya seperti waktu matahari terbenam. Kebiasaannya fasa penuh berlangsung dua atau tiga minit. Pada 2 Ogos 2027, fasa penuh paling lama berlaku di atas Mesir Hulu — di atas Thebes purba, Karnak, Kuil Luxor dan Lembah Raja-Raja, di kota yang pembinanya menjajarkan kuil-kuil mereka dengan Matahari.",
  facts: [
    { label: "Tarikh", value: "Isnin, 2 Ogos 2027" },
    { label: "Fasa penuh di Luxor", value: "kira-kira 6 minit 22 saat" },
    { label: "Fasa penuh bermula", value: "kira-kira 1.02 petang waktu tempatan (6.02 petang di Malaysia)" },
    { label: "Kaherah", value: "separa sahaja, kira-kira 95%" },
  ],
  sections: [
    {
      title: "Mengapa Luxor, dan mengapa gerhana ini",
      body:
        "Pada 2 Ogos 2027, bayang-bayang Bulan merentasi Afrika Utara dan Timur Tengah, dan di atas Mesir Hulu fasa penuh berlangsung paling lama: kira-kira enam minit 22 saat di Luxor, dan enam minit 23 saat di titik terpanjangnya, kira-kira 60 km di tenggara bandar. Gerhana penuh yang lebih panjang di daratan yang mudah dikunjungi hanya akan berlaku lagi pada 3 Jun 2114.",
    },
    {
      title: "Solat sunat gerhana",
      body:
        "Bagi umat Islam, gerhana matahari ialah waktu solat sunat gerhana (solat kusuf), yang dilakukan sepanjang gerhana berlangsung, dari fasa separa sehingga Matahari kembali terang. Luxor mempunyai banyak masjid, dan kami menyusun hari itu supaya ada masa untuk solat dan untuk menyaksikan fasa penuh — di masjid berhampiran atau di tempat anda menonton.",
    },
    {
      title: "Bila ia berlaku",
      body:
        "Bulan mula menutup Matahari sejurus sebelum tengah hari. Di Luxor fasa penuh bermula kira-kira jam 1.02 petang waktu tempatan (6.02 petang waktu Malaysia) dan berakhir kira-kira jam 1.08 petang; selepas itu fasa separa beransur hilang dalam tempoh lebih sedikit daripada sejam. Dalam bandar Luxor, perbezaan waktunya hanya beberapa saat: kami mengesahkannya untuk lokasi tontonan anda semasa jadual perjalanan ditulis.",
    },
    {
      title: "Menonton dari mana",
      body:
        "Seluruh Luxor berada dalam laluan gerhana penuh, jadi pilihannya soal keselesaan, bukan geometri: teduh, tempat duduk, air minuman dan langit yang lapang tanpa orang ramai di hadapan. Teres di tebing Sungai Nil, sudut yang tenang di Tebing Barat di kaki bukit Thebes, atau dek kapal — semuanya sesuai. Qena dan Edfu juga dalam laluan gerhana penuh, jadi kapal pelayaran atau dahabiya antara Luxor dan Edfu boleh berada di atas air pada saat yang tepat. Sebaliknya, Kaherah hanya mengalami gerhana separa kira-kira 95%: mengagumkan, tetapi langit tidak menjadi gelap dan korona tidak kelihatan.",
    },
    {
      title: "Ogos di Luxor, secara jujur",
      body:
        "Ogos ialah salah satu daripada dua bulan paling panas di Luxor, dengan suhu tengah hari hingga petang sekitar 41–43 °C, dan fasa penuh jatuh pada jam paling panas hari itu. Dengan perancangan, ia sangat boleh diharungi; tanpa perancangan, ia memenatkan. Sebagai gantinya, langit Mesir Hulu pada bulan Ogos antara yang paling boleh diharap cerahnya di dunia — tepat seperti yang diperlukan gerhana. Jadi hari itu disusun mengikut panas: kuil sebaik dibuka, kembali ke tempat teduh menjelang tengah hari, gerhana dari tempat yang sejuk dengan air di sisi, dan petang untuk berehat.",
    },
    {
      title: "Menonton dengan selamat",
      body:
        "Semasa fasa separa — sebelum dan selepas fasa penuh — jangan sekali-kali merenung Matahari tanpa cermin mata gerhana yang diperakui (piawaian ISO 12312-2) atau tanpa penapis suria yang sesuai pada kamera dan teropong. Hanya semasa fasa penuh, apabila Matahari tertutup sepenuhnya, ia selamat dilihat dengan mata kasar; cermin mata dipakai semula sebaik sahaja pinggir terang yang pertama muncul kembali. Cermin mata hitam biasa bukan cermin mata gerhana.",
    },
    {
      title: "Bilik dahulu",
      body:
        "Luxor ialah bandar kecil dengan sedikit bilik yang benar-benar baik, dan malam-malam sekitar 2 Ogos 2027 akan menjadi yang paling dicari sepanjang tahun; kadar minggu itu jauh melebihi kadar musim panas biasa. Oleh itu, tetapkan tempat menginap dahulu, kemudian susun hari-hari di sekelilingnya. Winter Palace dijadualkan dibuka semula pada Julai 2027 sebagai Mandarin Oriental Winter Palace — tepat pada masanya, jika jadualnya tidak berubah. Di Tebing Barat, tetamu kami menginap di Al Moudira, dan kapal pelayaran atau dahabiya boleh menjadi hotel itu sendiri. Kami tidak menempah apa-apa lebih awal dan mengira harga berdasarkan kekosongan sebenar, dengan caj tambahan minggu gerhana diperincikan secara berasingan.",
    },
  ],
  photos: photos(
    [
      "Kuil Karnak dan tasik sucinya di Luxor",
      "Kuil Hatshepsut di Deir el-Bahari, di kaki cenuram Tebing Barat",
      "Tiang-tiang sebuah kuil di Luxor",
      "Dek teduh sebuah dahabiya di Sungai Nil",
    ],
    ["Karnak", "Tebing Barat", "Tiang-tiang kuil", "Di Sungai Nil"],
  ),
  highlights: {
    heading: "Tiga bentuk perjalanan yang sesuai",
    items: [
      "Luxor sahaja: tiga atau empat malam sekitar hari gerhana",
      "Kaherah dan piramid dahulu, kemudian Luxor untuk hari gerhana",
      "Pelayaran Sungai Nil antara Aswan dan Luxor, diatur supaya 2 Ogos berada di Luxor atau Edfu",
      "Makanan halal dan waktu solat diambil kira setiap hari perjalanan",
    ],
  },
  faqs: [
    {
      q: "Bilakah gerhana matahari di Mesir?",
      a: "Isnin, 2 Ogos 2027. Di Luxor fasa penuh bermula kira-kira jam 1.02 petang waktu tempatan (6.02 petang waktu Malaysia) dan berlangsung kira-kira enam minit 22 saat. Fasa separa bermula sejurus sebelum tengah hari dan berakhir pada awal petang.",
    },
    {
      q: "Bolehkah solat gerhana di Luxor?",
      a: "Boleh. Solat sunat gerhana (solat kusuf) dilakukan sepanjang gerhana berlangsung, dan Luxor mempunyai banyak masjid. Kami menyusun hari itu supaya ada masa untuk solat dan untuk menyaksikan fasa penuh.",
    },
    {
      q: "Adakah gerhana kelihatan dari Kaherah?",
      a: "Separa sahaja: Kaherah berada di luar laluan gerhana penuh, dan kira-kira 95% Matahari akan tertutup. Ia mengagumkan, tetapi langit tidak menjadi gelap dan korona tidak kelihatan. Untuk fasa penuh, anda perlu berada di Luxor, Qena, Edfu atau tempat lain dalam laluan.",
    },
    {
      q: "Bolehkah menontonnya dari kapal pelayaran Sungai Nil?",
      a: "Boleh, jika pada 2 Ogos kapal berada dalam laluan gerhana penuh. Luxor, Qena dan Edfu semuanya dalam laluan, jadi kapal pelayaran atau dahabiya antara Luxor dan Edfu boleh berada di atas air pada saat yang tepat. Dalam keadaan itu, kami merancang pelayaran mengikut gerhana, bukan sebaliknya.",
    },
    {
      q: "Adakah Ogos terlalu panas untuk Luxor?",
      a: "Sangat panas — sekitar 41–43 °C pada tengah hari hingga petang — dan fasa penuh jatuh kira-kira jam satu tengah hari. Ia berjalan lancar jika hari itu dirancang: lawatan sebaik kuil dibuka, tempat yang teduh dan sejuk untuk menonton, banyak air dan petang yang tenang. Sebagai gantinya, langit Ogos di Mesir Hulu antara yang paling boleh diharap cerahnya.",
    },
    {
      q: "Bilakah patut menempah?",
      a: "Sekarang, jika Luxor destinasinya. Bandar ini hanya ada sedikit bilik yang benar-benar baik, dan malam-malam sekitar 2 Ogos 2027 akan menjadi yang paling dicari sepanjang tahun. Tetapkan hotel dahulu; selebihnya boleh disusun kemudian.",
    },
  ],
  cta: {
    heading: "Mari rancang gerhana anda",
    text: "Beritahu kami bilangan peserta dan berapa hari yang anda ada. Kami mencadangkan hotel dan jadual, dan memberi harga mengikut kekosongan sebenar — caj tambahan minggu gerhana diperincikan secara berasingan.",
    whatsapp: "Salam Kemet — kami ingin menyaksikan gerhana matahari 2 Ogos 2027 di Luxor.",
    emailSubject: "Gerhana 2027 di Luxor — pertanyaan",
  },
  moreLabel: "Dalam bahasa Inggeris",
  moreRoute: EN_GUIDE,
  moreText: "Panduan lengkap kami tentang gerhana ini, dalam bahasa Inggeris.",
  links: [
    { label: "Pelayaran Sungai Nil", route: "ms/pelayaran-sungai-nil.html" },
    { label: "Halal & waktu solat", route: "ms/halal-dan-waktu-solat.html" },
    { label: "Masa terbaik ke Mesir", route: "ms/masa-terbaik-ke-mesir.html" },
  ],
};

// ── Arabic ──────────────────────────────────────────────────────────────────
export const arEclipse: LocalizedPage = {
  groupId: "standalone-ar-eclipse",
  symbol: "sun",
  theme: "eclipse",
  title: "كسوف الشمس الكلي ٢٠٢٧ في الأقصر: المواعيد والنصائح | كيميت",
  description:
    "كسوف كلي للشمس فوق الأقصر يوم ٢ أغسطس ٢٠٢٧: نحو ٦ دقائق و٢٢ ثانية، الأطول في هذا القرن على أرض يسهل بلوغها. المواعيد، وأين تشاهدونه، وصلاة الكسوف.",
  keywords:
    "كسوف الشمس 2027، كسوف الشمس في مصر، كسوف الأقصر، الكسوف الكلي 2 أغسطس 2027، صلاة الكسوف، رحلة لمشاهدة الكسوف، كسوف الشمس رحلة نيلية",
  crumb: "كسوف الشمس ٢٠٢٧",
  h1: "كسوف الشمس الكلي ٢٠٢٧ في الأقصر",
  standfirst:
    "يوم الاثنين ٢ أغسطس ٢٠٢٧ يحجب القمر الشمس فوق الأقصر نحو ست دقائق و٢٢ ثانية — أطول كسوف كلي في هذا القرن على أرض يسهل الوصول إليها.",
  lede:
    "الكسوف الكلي هو تلك الدقائق القليلة التي يغطي فيها القمر قرص الشمس كاملاً: تُظلم السماء في عزّ النهار، وتنخفض الحرارة، ويظهر إكليل الشمس هالةً بيضاء، ويتوهّج الأفق من كل الجهات كأنه وقت الغروب. وعادةً لا تتجاوز مرحلة الكسوف الكلي دقيقتين أو ثلاثاً. أما في ٢ أغسطس ٢٠٢٧ فتبلغ أطول مدة لها فوق صعيد مصر — فوق طيبة القديمة، والكرنك، ومعبد الأقصر، ووادي الملوك، في مدينة وجّه بُناتها معابدهم نحو الشمس.",
  facts: [
    { label: "التاريخ", value: "الاثنين ٢ أغسطس ٢٠٢٧" },
    { label: "الكسوف الكلي في الأقصر", value: "نحو ٦ دقائق و٢٢ ثانية" },
    { label: "بداية الكسوف الكلي", value: "نحو ١:٠٢ ظهراً بالتوقيت المحلي (كتوقيت الرياض)" },
    { label: "القاهرة", value: "كسوف جزئي فقط، نحو ٩٥٪" },
  ],
  sections: [
    {
      title: "لماذا الأقصر، ولماذا هذا الكسوف",
      body:
        "في ٢ أغسطس ٢٠٢٧ يعبر ظلّ القمر شمال أفريقيا والشرق الأوسط، وتكون مرحلة الكسوف الكلي في أطول حالاتها فوق صعيد مصر: نحو ست دقائق و٢٢ ثانية في الأقصر، وست دقائق و٢٣ ثانية عند أطول نقطة في المسار، على بُعد نحو ٦٠ كيلومتراً جنوب شرقي المدينة. ولن يتكرّر كسوف كلي أطول منه على أرض يسهل بلوغها قبل ٣ يونيو ٢١١٤.",
    },
    {
      title: "صلاة الكسوف",
      body:
        "الكسوف عند المسلمين وقتُ صلاة الكسوف، وهي سُنّة تُصلّى ما دام الكسوف قائماً، من بدايته حتى تنجلي الشمس. وفي الأقصر مساجد كثيرة، ونرتّب ذلك اليوم بحيث يتّسع الوقت للصلاة ولمشاهدة لحظة الكسوف الكلي معاً — في أقرب مسجد أو في مكان المشاهدة نفسه.",
    },
    {
      title: "متى يحدث",
      body:
        "يبدأ القمر في حجب الشمس قبيل الظهر. وفي الأقصر يبدأ الكسوف الكلي نحو الساعة ١:٠٢ ظهراً بالتوقيت المحلي — وهو توقيت الرياض نفسه، و٢:٠٢ في الإمارات — وينتهي نحو ١:٠٨، ثم تتلاشى المرحلة الجزئية خلال ما يزيد قليلاً على ساعة. والفرق في المواعيد داخل الأقصر ثوانٍ معدودة، ونؤكّدها لمكان مشاهدتكم عند كتابة البرنامج.",
    },
    {
      title: "من أين تشاهدونه",
      body:
        "الأقصر كلها داخل مسار الكسوف الكلي، فالاختيار مسألة راحة لا حسابات: ظلّ، ومكان للجلوس، وماء، وسماء مفتوحة بلا زحام أمامكم. شرفة على النيل، أو ركن هادئ في البرّ الغربي عند سفح جبال طيبة، أو سطح مركب — كلها تصلح. وقنا وإدفو أيضاً داخل المسار، فيمكن لرحلة نيلية أو دهبية بين الأقصر وإدفو أن تكون على الماء في اللحظة المناسبة. أما القاهرة فلا ترى إلا كسوفاً جزئياً بنحو ٩٥٪: مشهد لافت، لكن السماء لا تُظلم ولا يظهر الإكليل.",
    },
    {
      title: "أغسطس في الأقصر، بصراحة",
      body:
        "أغسطس من أشدّ شهرين حرّاً في الأقصر، وبعد الظهر فيه نحو ٤١–٤٣ درجة، والكسوف الكلي يقع في أحرّ ساعات النهار. مع التخطيط يمرّ الأمر بسهولة، ومن دونه يصبح متعباً — وأهل الخليج يعرفون هذا الحرّ جيداً. والمقابل أن سماء الصعيد في أغسطس من أصفى سماوات العالم وأكثرها ثباتاً، وهذا تحديداً ما يحتاجه الكسوف. لذلك يُبنى اليوم حول الحرّ: المعابد عند فتحها، والعودة إلى الظلّ قبل الظهر، ومشاهدة الكسوف من مكان بارد والماء في المتناول، ثم راحة بعد الظهر.",
    },
    {
      title: "المشاهدة الآمنة",
      body:
        "في المرحلتين الجزئيتين — قبل الكسوف الكلي وبعده — لا تنظروا إلى الشمس أبداً من دون نظارات كسوف معتمدة (المعيار ISO 12312-2) أو مرشِّح شمسي مناسب على الكاميرا والمنظار. ولا يكون النظر بالعين المجرّدة آمناً إلا خلال الكسوف الكلي نفسه، حين تكون الشمس محجوبة تماماً؛ وتُعاد النظارات فور ظهور أول حافة مضيئة. والنظارات الشمسية العادية ليست نظارات كسوف.",
    },
    {
      title: "الغرفة أولاً",
      body:
        "الأقصر مدينة صغيرة غرفها الجيدة فعلاً قليلة، والليالي المحيطة بيوم ٢ أغسطس ٢٠٢٧ ستكون الأكثر طلباً في العام، وأسعار ذلك الأسبوع أعلى بكثير من أسعار الصيف المعتادة. لذلك نحدّد مكان الإقامة أولاً ثم نبني الأيام حوله. ومن المقرّر أن يُعاد افتتاح فندق وينتر بالاس في يوليو ٢٠٢٧ باسم ماندارين أورينتال وينتر بالاس — في الوقت المناسب تماماً إن لم يتغيّر الموعد. وفي البرّ الغربي ينزل ضيوفنا في فندق المضيرة (Al Moudira)، ويمكن أن تكون الباخرة النيلية أو الدهبية هي الفندق نفسه. لا نحجز شيئاً مسبقاً، ونسعّر وفق المتاح فعلاً، مع ذكر زيادة أسبوع الكسوف بنداً منفصلاً.",
    },
  ],
  photos: photos(
    [
      "معبد الكرنك وبحيرته المقدسة في الأقصر",
      "معبد حتشبسوت في الدير البحري، عند سفح جروف البرّ الغربي",
      "أعمدة أحد معابد الأقصر",
      "سطح دهبية مظلّل على النيل",
    ],
    ["الكرنك", "البرّ الغربي", "الأعمدة", "على النيل"],
  ),
  highlights: {
    heading: "ثلاث صيغ مناسبة للرحلة",
    items: [
      "الأقصر وحدها: ثلاث أو أربع ليالٍ حول يوم الكسوف",
      "القاهرة والأهرامات أولاً، ثم الأقصر ليوم الكسوف",
      "رحلة نيلية بين أسوان والأقصر، مرتّبة بحيث يكون ٢ أغسطس في الأقصر أو إدفو",
      "وإن شئتم، أيام بعدها على البحر الأحمر، والماء بين ٢٩ و٣٠ درجة",
    ],
  },
  faqs: [
    {
      q: "متى كسوف الشمس في مصر؟",
      a: "يوم الاثنين ٢ أغسطس ٢٠٢٧. في الأقصر يبدأ الكسوف الكلي نحو الساعة ١:٠٢ ظهراً بالتوقيت المحلي (توقيت الرياض نفسه) ويستمر نحو ست دقائق و٢٢ ثانية. وتبدأ المرحلة الجزئية قبيل الظهر وتنتهي بعده بقليل.",
    },
    {
      q: "هل يمكن أداء صلاة الكسوف في الأقصر؟",
      a: "نعم. صلاة الكسوف سُنّة تُصلّى ما دام الكسوف قائماً، وفي الأقصر مساجد كثيرة. ونرتّب اليوم بحيث يتّسع الوقت للصلاة ولمشاهدة الكسوف الكلي.",
    },
    {
      q: "هل يُرى الكسوف من القاهرة؟",
      a: "جزئياً فقط: القاهرة خارج مسار الكسوف الكلي، ويُحجب فيها نحو ٩٥٪ من قرص الشمس. مشهد لافت، لكن السماء لا تُظلم ولا يظهر الإكليل. وللكسوف الكلي ينبغي أن تكونوا في الأقصر أو قنا أو إدفو أو مكان آخر داخل المسار.",
    },
    {
      q: "هل يمكن مشاهدته من رحلة نيلية؟",
      a: "نعم، إن كانت الباخرة داخل المسار يوم ٢ أغسطس. فالأقصر وقنا وإدفو كلها داخل مسار الكسوف الكلي، ويمكن لرحلة نيلية أو دهبية بين الأقصر وإدفو أن تكون على الماء في اللحظة المناسبة. وحينها نرتّب الإبحار حول الكسوف، لا العكس.",
    },
    {
      q: "أليس أغسطس شديد الحرّ في الأقصر؟",
      a: "حارّ جداً — نحو ٤١–٤٣ درجة بعد الظهر — والكسوف الكلي نحو الواحدة ظهراً. لكن الأمر ينجح حين يُخطَّط اليوم له: زيارات عند فتح المعابد، ومكان مظلّل وبارد للمشاهدة، وماء كثير، وبعد ظهر هادئ. والمقابل سماء صافية في أغسطس قلّما تخذل.",
    },
    {
      q: "متى نحجز؟",
      a: "الآن، إن كانت الأقصر هي الخطة. غرف المدينة الجيدة قليلة، والليالي المحيطة بيوم ٢ أغسطس ٢٠٢٧ ستكون الأكثر طلباً في العام. حدّدوا الفندق أولاً، وبقية الرحلة يمكن تشكيلها لاحقاً.",
    },
  ],
  cta: {
    heading: "لنخطّط لكسوفكم",
    text: "أخبرونا بعدد المسافرين وعدد الأيام المتاحة لكم. نقترح الفندق والبرنامج ونرسل السعر وفق المتاح فعلاً، مع زيادة أسبوع الكسوف بنداً منفصلاً.",
    whatsapp: "السلام عليكم كيميت — نرغب في مشاهدة كسوف الشمس يوم ٢ أغسطس ٢٠٢٧ في الأقصر.",
    emailSubject: "كسوف ٢٠٢٧ في الأقصر — استفسار",
  },
  moreLabel: "بالإنجليزية",
  moreRoute: EN_GUIDE,
  moreText: "دليلنا الكامل عن الكسوف، بالإنجليزية.",
  links: [
    { label: "رحلة نيلية خاصة", route: "ar/rehla-niliya-khassa.html" },
    { label: "أفضل وقت لزيارة مصر", route: "ar/afdal-waqt-lizyarat-masr.html" },
    { label: "رحلات مصر الخاصة", route: "ar/rehlat-masr-khassa.html" },
  ],
};
