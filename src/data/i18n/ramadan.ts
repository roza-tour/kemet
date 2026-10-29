// ---------------------------------------------------------------------------
// Ramadan in Egypt — one page per language.
//
// The English original is collections/ramadan-in-egypt.html (collections.ts),
// and the practical facts here are the facts there: monuments and museums
// open, some with shorter afternoon hours; hotel restaurants, tourist-area
// cafés and Nile boats serving through the day; the hour before sunset the
// worst traffic of the day; alcohol reduced, still served discreetly by the
// international hotels; Eid al-Fitr a national holiday when domestic flights
// and trains fill. The dates are the seasonal calendar's (seasonalCalendar.ts):
// Ramadan 1448 expected 8 February – 8 March 2027, Eid al-Fitr around
// 9 March, both subject to the sighting of the moon.
//
// TWO KINDS OF READER. The European editions (de, fr, es, it, ru, pt) are
// written for travellers who will see Ramadan from outside: is it a good time,
// what is open, what is polite — each with the holiday of its own market that
// falls inside Ramadan 2027 (Fasching, the French winter holidays, Carnival,
// 23 February and 8 March), or, for Spain, Semana Santa just after it. The
// Arabic, Indonesian and Malay editions are written for readers who keep the
// fast: tarawih in Cairo's historic mosques, iftar and suhoor, a day planned
// around fasting, Eid in Egypt and — for Indonesia and Malaysia — Egypt before
// or after a Ramadan umrah, which their own umrah pages already cover.
//
// Fasting length in Cairo, 12½–13 hours, is from dawn (Fajr) to sunset
// between 8 February (about 05:13–17:40) and 8 March (about 04:50–18:00).
//
// Standalone pages: the English original is a collection with its own
// template, so these cannot form a translation group (see standalone.ts).
// They are also where the seasonal ribbon sends each language during Ramadan
// and Eid (components/SeasonalSkin.astro → LOCAL_SEASON_ROUTES).
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import type { MediaPlaceholder } from "@/types/primitives";

/** The English original, linked from every edition's "more" line. */
const EN_PAGE = "collections/ramadan-in-egypt.html";

const STREET = { src: "/images/cairo/cairo-islamic-old-street-night.webp", width: 850, height: 477 };
const ROOFTOPS = { src: "/images/cairo/cairo-islamic-rooftops-sunset.webp", width: 735, height: 649 };
const AZHAR = { src: "/images/cairo/cairo-al-azhar-mosque-courtyard.webp", width: 736, height: 920 };
const AMR = { src: "/images/cairo/cairo-amr-ibn-al-as-mosque.webp", width: 1200, height: 630 };
const QATAYEF = { src: "/images/stock/qatayef.webp", width: 1280, height: 960 };

/** Four photographs, described in the edition's language. */
function photos(set: Array<typeof STREET>, alt: string[], label: string[]): MediaPlaceholder[] {
  return set.map((p, i) => ({ ...p, alt: alt[i], label: label[i] }));
}
/** The European editions: the evening street, the iftar hour, Al-Azhar, Ramadan sweets. */
const OUTSIDE = [STREET, ROOFTOPS, AZHAR, QATAYEF];
/** The Arabic, Indonesian and Malay editions: the two mosques their tarawih section names. */
const FASTING = [STREET, AZHAR, AMR, QATAYEF];

// ── German ──────────────────────────────────────────────────────────────────
export const deRamadan: LocalizedPage = {
  groupId: "standalone-de-ramadan",
  symbol: "crescent",
  theme: "ramadan",
  title: "Ramadan in Ägypten 2027: Reisen, Tipps & Termine | Kemet",
  description:
    "Ägypten im Ramadan 2027 (voraussichtlich 8. Februar – 8. März): was geöffnet ist, was sich ändert, das islamische Kairo bei Nacht, Iftar und Eid al-Fitr.",
  keywords:
    "ramadan ägypten 2027, ägypten reise ramadan, ramadan kairo, urlaub ägypten ramadan, ramadan ägypten touristen, eid al-fitr ägypten",
  crumb: "Ramadan in Ägypten",
  h1: "Ägypten im Ramadan",
  standfirst:
    "Der Ramadan 2027 fällt voraussichtlich auf den 8. Februar bis 8. März — mitten in die beste Reisezeit. Was sich ändert, was gleich bleibt, und warum die Abende in Kairo dann die schönsten des Jahres sind.",
  lede:
    "Die meisten Reiserouten machen einen Bogen um den Ramadan. Wir halten das für einen Fehler. Rund dreißig Tage lang kehrt sich der Rhythmus Ägyptens um: Die Vormittage sind ruhig, die großen Stätten spürbar leerer, und bei Sonnenuntergang atmet das ganze Land gleichzeitig auf. Laternen hängen die ganze Al-Muizz-Straße entlang, auf den Gehwegen stehen Tische mit Essen für jeden, der vorbeikommt, und im Khan el-Khalili wird bis zwei oder drei Uhr morgens gehandelt.",
  facts: [
    { label: "Ramadan 2027", value: "voraussichtlich 8. Februar – 8. März" },
    { label: "Eid al-Fitr", value: "um den 9.–11. März 2027" },
    { label: "Kairo tagsüber", value: "20–26 °C" },
    { label: "Monumente", value: "geöffnet, teils kürzere Nachmittags\u00ADzeiten" },
  ],
  sections: [
    {
      title: "Warum gerade im Ramadan",
      body:
        "Das Fastenbrechen bei Sonnenuntergang, der Iftar, ist die geselligste Stunde des ägyptischen Jahres, und eine Einladung dazu ist keine Seltenheit. Danach füllen sich das islamische Kairo, die Gassen um die Al-Azhar-Moschee und die alten Cafés bis tief in die Nacht. Dazu kommt das Wetter: Der Ramadan fällt für den Rest dieses Jahrzehnts in die kühle Jahreszeit, 2027 mit 20–26 °C in Kairo. Und die Faschingswoche rund um Rosenmontag, den 8. Februar 2027, liegt genau in diesen Wochen.",
    },
    {
      title: "Was sich tagsüber ändert",
      body:
        "Alle großen Monumente, Museen, Hotels und Nilschiffe sind den ganzen Ramadan über in Betrieb, und von Reisenden erwartet niemand, dass sie fasten. Einige Stätten schließen nachmittags früher. Hotelrestaurants, Cafés in den touristischen Vierteln und die Nilschiffe servieren tagsüber wie immer; viele kleine Lokale in den Wohnvierteln öffnen erst zum Sonnenuntergang. Alkohol wird zurückhaltender ausgeschenkt; internationale Hotels servieren ihren Gästen in der Regel weiter, diskret.",
    },
    {
      title: "Wie wir den Tag planen",
      body:
        "Früh zu den Monumenten, eine lange Mittagspause, dann ab Sonnenuntergang hinaus bis Mitternacht — so passt die Reise zum tatsächlichen Rhythmus des Landes. Die Stunde vor Sonnenuntergang ist jeden Tag die schlimmste Verkehrsstunde, weil alle zum Fastenbrechen nach Hause eilen; in diese Stunde legen wir bewusst nichts. Einen Iftar-Tisch reservieren wir im Voraus: Die guten, besonders die Dachterrassen über dem islamischen Kairo, sind Wochen vorher vergeben. Luxor, Assuan und die Nilkreuzfahrt laufen wie gewohnt.",
    },
    {
      title: "Was Höflichkeit bedeutet",
      body:
        "Tagsüber auf der Straße nicht essen, trinken oder rauchen — im Hotel, im Restaurant und im eigenen Fahrzeug ist das völlig in Ordnung. Etwas zurückhaltendere Kleidung als sonst, besonders an Moscheen und in den Altstadtvierteln. Geduld in der Stunde vor Sonnenuntergang. Und wenn Sie zu einem Iftar eingeladen werden: annehmen. Etwas Besseres können Sie in diesem Monat nicht tun.",
    },
    {
      title: "Eid al-Fitr",
      body:
        "Das dreitägige Fest am Ende des Ramadan, 2027 um den 9. März, ist im ganzen Land ein Feiertag: Inlandsflüge und Züge sind stark gebucht, manche Ämter geschlossen, die Monumente aber geöffnet — und die Stimmung ist festlich, mit Familien in den Parks und auf dem Nil. Wer über Eid reist, bucht Flüge und Zugplätze früh.",
    },
  ],
  photos: photos(
    OUTSIDE,
    [
      "Eine gepflasterte Gasse im islamischen Kairo am Abend, im Licht der Laternen",
      "Minarette über den Dächern des islamischen Kairo bei Sonnenuntergang",
      "Der Innenhof der Al-Azhar-Moschee in Kairo",
      "Qatayef, gefüllte Teigtaschen, die zum Ramadan gehören",
    ],
    ["Kairo am Abend", "Die Stunde des Iftar", "Al-Azhar", "Qatayef"],
  ),
  highlights: {
    heading: "Auf einen Blick",
    items: [
      "Ramadan 2027: voraussichtlich 8. Februar – 8. März; Eid al-Fitr um den 9. März",
      "Monumente, Museen, Hotels und Nilschiffe sind geöffnet",
      "Vormittags Besichtigungen, nachmittags Ruhe, abends das islamische Kairo",
      "Nichts in der Stunde vor Sonnenuntergang — dann ist der Verkehr am dichtesten",
      "Den Iftar-Tisch reservieren wir Wochen im Voraus",
    ],
  },
  faqs: [
    {
      q: "Kann man im Ramadan nach Ägypten reisen?",
      a: "Ja, und es ist eine der lohnendsten Zeiten. Alle großen Monumente, Museen, Hotels und Nilschiffe sind in Betrieb, und von Touristen erwartet niemand, dass sie fasten. Einige Stätten schließen nachmittags früher, und nach Sonnenuntergang verändert sich die Stimmung völlig — mit einer Planung, die sich nach dem Tagesrhythmus richtet, ist es eine einfache und ungewöhnlich eindrucksvolle Reise.",
    },
    {
      q: "Wann ist Ramadan 2027?",
      a: "Voraussichtlich vom 8. Februar bis 8. März 2027, mit Eid al-Fitr um den 9. März. Der genaue Beginn hängt von der Sichtung der Mondsichel am Vorabend ab; vorab veröffentlichte Daten können sich deshalb um einen Tag verschieben.",
    },
    {
      q: "Haben Restaurants und Monumente geschlossen?",
      a: "Monumente und Museen sind geöffnet, einige mit kürzeren Nachmittagszeiten. Hotelrestaurants, Cafés in den touristischen Vierteln und Nilschiffe servieren tagsüber normal. Tagsüber geschlossen sind vor allem kleine Lokale in den Wohnvierteln, die erst zum Iftar öffnen.",
    },
    {
      q: "Darf ich als Tourist tagsüber essen und trinken?",
      a: "Ja — im Hotel, im Restaurant und im eigenen Fahrzeug ohne Weiteres. Nur auf der Straße verzichtet man tagsüber aus Höflichkeit darauf, ebenso aufs Rauchen.",
    },
    {
      q: "Bekommt man im Ramadan Alkohol?",
      a: "Eingeschränkt. Internationale Hotels und Nilschiffe servieren ihren Gästen in der Regel weiter, diskret; außerhalb ist es schwieriger.",
    },
  ],
  cta: {
    heading: "Ihre Reise im Ramadan",
    text: "Nennen Sie uns Ihre Daten und die Personenzahl. Wir planen die Tage nach dem Rhythmus des Monats und reservieren den Iftar-Tisch rechtzeitig.",
    whatsapp: "Guten Tag Kemet — wir möchten im Ramadan 2027 nach Ägypten reisen.",
    emailSubject: "Ramadan 2027 in Ägypten — Anfrage",
  },
  moreLabel: "Auf Englisch",
  moreRoute: EN_PAGE,
  moreText: "Unsere Seite zum Ramadan in Ägypten, auf Englisch.",
  links: [
    { label: "Beste Reisezeit für Ägypten", route: "de/beste-reisezeit-aegypten.html" },
    { label: "Nilkreuzfahrt", route: "de/nilkreuzfahrt.html" },
    { label: "Ägypten-Reisen", route: "de/aegypten-reisen.html" },
  ],
};

// ── French ──────────────────────────────────────────────────────────────────
export const frRamadan: LocalizedPage = {
  groupId: "standalone-fr-ramadan",
  symbol: "crescent",
  theme: "ramadan",
  title: "Ramadan en Égypte 2027 : voyager, conseils, dates | Kemet",
  description:
    "L'Égypte pendant le Ramadan 2027 (prévu du 8 février au 8 mars) : ce qui est ouvert, ce qui change, Le Caire islamique la nuit, l'iftar et l'Aïd el-Fitr.",
  keywords:
    "ramadan égypte 2027, voyage égypte ramadan, ramadan le caire, partir en égypte pendant le ramadan, égypte ramadan touristes, aïd el-fitr égypte",
  crumb: "Ramadan en Égypte",
  h1: "L'Égypte pendant le Ramadan",
  standfirst:
    "Le Ramadan 2027 devrait aller du 8 février au 8 mars — en pleine meilleure saison. Ce qui change, ce qui ne change pas, et pourquoi les soirées du Caire sont alors les plus belles de l'année.",
  lede:
    "La plupart des itinéraires contournent le Ramadan. Nous pensons que c'est une erreur. Pendant une trentaine de jours, le rythme de l'Égypte s'inverse : les matinées sont tranquilles, les grands sites nettement moins fréquentés, puis au coucher du soleil tout le pays souffle d'un coup. Des lanternes courent tout le long de la rue al-Muizz, des tables garnies apparaissent sur les trottoirs pour quiconque passe, et le Khan el-Khalili commerce jusqu'à deux ou trois heures du matin.",
  facts: [
    { label: "Ramadan 2027", value: "prévu du 8 février au 8 mars" },
    { label: "Aïd el-Fitr", value: "vers le 9–11 mars 2027" },
    { label: "Le Caire en journée", value: "20–26 °C" },
    { label: "Monuments", value: "ouverts, après-midi parfois écourtés" },
  ],
  sections: [
    {
      title: "Pourquoi pendant le Ramadan",
      body:
        "La rupture du jeûne au coucher du soleil, l'iftar, est l'heure la plus conviviale de l'année égyptienne, et y être invité n'a rien de rare. Ensuite, Le Caire islamique, les ruelles autour de la mosquée al-Azhar et les vieux cafés se remplissent jusque tard dans la nuit. S'y ajoute le temps : le Ramadan tombe en saison fraîche jusqu'à la fin de la décennie, avec 20–26 °C au Caire en 2027. Et les vacances d'hiver 2027, de février à début mars selon les zones, tombent en grande partie pendant le Ramadan.",
    },
    {
      title: "Ce qui change en journée",
      body:
        "Tous les grands monuments, musées, hôtels et bateaux du Nil fonctionnent pendant tout le Ramadan, et personne n'attend des voyageurs qu'ils jeûnent. Certains sites ferment plus tôt l'après-midi. Les restaurants d'hôtel, les cafés des quartiers touristiques et les bateaux servent normalement en journée ; beaucoup de petits restaurants des quartiers résidentiels n'ouvrent qu'au coucher du soleil. L'alcool est servi plus discrètement ; les hôtels internationaux continuent en général d'en servir à leurs clients.",
    },
    {
      title: "Comment nous organisons la journée",
      body:
        "Les monuments tôt le matin, une longue pause l'après-midi, puis dehors du coucher du soleil jusqu'à minuit : le voyage suit le vrai rythme du pays. L'heure qui précède le coucher du soleil est chaque jour la pire pour la circulation, car chacun rentre rompre le jeûne ; nous n'y plaçons volontairement rien. Nous réservons la table d'iftar à l'avance : les bonnes, surtout les terrasses sur les toits du Caire islamique, sont prises des semaines avant. Louxor, Assouan et la croisière sur le Nil se déroulent normalement.",
    },
    {
      title: "Les usages",
      body:
        "En journée, on évite de manger, de boire ou de fumer dans la rue — à l'hôtel, au restaurant et dans votre véhicule, aucun problème. Une tenue un peu plus couvrante que d'habitude, surtout près des mosquées et dans les vieux quartiers. De la patience dans l'heure qui précède le coucher du soleil. Et si l'on vous invite à un iftar : acceptez. C'est ce que vous pourrez faire de mieux ce mois-là.",
    },
    {
      title: "L'Aïd el-Fitr",
      body:
        "La fête de trois jours qui clôt le Ramadan, vers le 9 mars en 2027, est fériée dans tout le pays : vols intérieurs et trains sont très demandés, certains bureaux ferment, mais les monuments restent ouverts — et l'ambiance est à la fête, avec des familles dans les parcs et sur le Nil. Si vous voyagez pendant l'Aïd, réservez tôt vols et trains.",
    },
  ],
  photos: photos(
    OUTSIDE,
    [
      "Une ruelle pavée du Caire islamique le soir, à la lumière des lanternes",
      "Minarets au-dessus des toits du Caire islamique au coucher du soleil",
      "La cour de la mosquée al-Azhar, au Caire",
      "Des qatayef, crêpes farcies du Ramadan",
    ],
    ["Le Caire le soir", "L'heure de l'iftar", "Al-Azhar", "Qatayef"],
  ),
  highlights: {
    heading: "En bref",
    items: [
      "Ramadan 2027 : prévu du 8 février au 8 mars ; Aïd el-Fitr vers le 9 mars",
      "Monuments, musées, hôtels et bateaux du Nil ouverts",
      "Visites le matin, repos l'après-midi, Le Caire islamique le soir",
      "Rien dans l'heure qui précède le coucher du soleil — la circulation y est la plus dense",
      "La table d'iftar réservée des semaines à l'avance",
    ],
  },
  faqs: [
    {
      q: "Peut-on voyager en Égypte pendant le Ramadan ?",
      a: "Oui, et c'est l'une des périodes les plus riches. Tous les grands monuments, musées, hôtels et bateaux du Nil fonctionnent, et personne n'attend des touristes qu'ils jeûnent. Certains sites ferment plus tôt l'après-midi, et l'ambiance change du tout au tout après le coucher du soleil — avec un programme calé sur le rythme de la journée, c'est un voyage simple et singulièrement marquant.",
    },
    {
      q: "Quand a lieu le Ramadan 2027 ?",
      a: "Il devrait aller du 8 février au 8 mars 2027, avec l'Aïd el-Fitr vers le 9 mars. Le début exact dépend de l'observation du croissant de lune la veille ; les dates publiées à l'avance peuvent donc bouger d'un jour.",
    },
    {
      q: "Les restaurants et les monuments sont-ils fermés ?",
      a: "Les monuments et musées sont ouverts, certains avec des horaires d'après-midi écourtés. Les restaurants d'hôtel, les cafés des quartiers touristiques et les bateaux du Nil servent normalement en journée. Ce sont surtout les petits restaurants des quartiers résidentiels qui n'ouvrent qu'à l'iftar.",
    },
    {
      q: "Puis-je manger et boire en journée en tant que touriste ?",
      a: "Oui — à l'hôtel, au restaurant et dans votre véhicule, sans aucun problème. Dans la rue, on s'en abstient par courtoisie en journée, de même que de fumer.",
    },
    {
      q: "Trouve-t-on de l'alcool pendant le Ramadan ?",
      a: "De façon restreinte. Les hôtels internationaux et les bateaux du Nil continuent en général d'en servir à leurs clients, discrètement ; ailleurs, c'est plus difficile.",
    },
  ],
  cta: {
    heading: "Votre voyage pendant le Ramadan",
    text: "Donnez-nous vos dates et le nombre de voyageurs. Nous organisons les journées au rythme du mois et réservons la table d'iftar à temps.",
    whatsapp: "Bonjour Kemet — nous aimerions voyager en Égypte pendant le Ramadan 2027.",
    emailSubject: "Ramadan 2027 en Égypte — demande",
  },
  moreLabel: "En anglais",
  moreRoute: EN_PAGE,
  moreText: "Notre page sur le Ramadan en Égypte, en anglais.",
  links: [
    { label: "Quand partir en Égypte", route: "fr/quand-partir-en-egypte.html" },
    { label: "Croisière sur le Nil", route: "fr/croisiere-sur-le-nil.html" },
    { label: "Voyage en Égypte", route: "fr/voyage-egypte.html" },
  ],
};

// ── Spanish ─────────────────────────────────────────────────────────────────
export const esRamadan: LocalizedPage = {
  groupId: "standalone-es-ramadan",
  symbol: "crescent",
  theme: "ramadan",
  title: "Ramadán en Egipto 2027: viajar, consejos y fechas | Kemet",
  description:
    "Egipto durante el Ramadán de 2027 (previsto del 8 de febrero al 8 de marzo): qué abre, qué cambia, El Cairo islámico de noche, el iftar y el Eid al-Fitr.",
  keywords:
    "ramadán egipto 2027, viajar a egipto en ramadán, ramadán el cairo, egipto en ramadán turistas, eid al-fitr egipto, fechas ramadán 2027",
  crumb: "Ramadán en Egipto",
  h1: "Egipto durante el Ramadán",
  standfirst:
    "El Ramadán de 2027 irá, previsiblemente, del 8 de febrero al 8 de marzo, en plena mejor temporada. Qué cambia, qué sigue igual y por qué las noches de El Cairo son entonces las mejores del año.",
  lede:
    "La mayoría de los itinerarios esquivan el Ramadán. Creemos que es un error. Durante unos treinta días el ritmo de Egipto se invierte: las mañanas son tranquilas, los grandes sitios están notablemente más vacíos y, al ponerse el sol, todo el país respira a la vez. Los farolillos recorren toda la calle al-Muizz, aparecen en las aceras mesas con comida para quien pase y el Khan el-Khalili sigue vendiendo hasta las dos o las tres de la madrugada.",
  facts: [
    { label: "Ramadán 2027", value: "previsto del 8 de febrero al 8 de marzo" },
    { label: "Eid al-Fitr", value: "hacia el 9–11 de marzo de 2027" },
    { label: "El Cairo de día", value: "20–26 °C" },
    { label: "Monumentos", value: "abiertos, a veces con tardes más cortas" },
  ],
  sections: [
    {
      title: "Por qué en Ramadán",
      body:
        "La ruptura del ayuno al ponerse el sol, el iftar, es la hora más sociable del año egipcio, y que les inviten a uno no es nada raro. Después, El Cairo islámico, las callejuelas en torno a la mezquita de al-Azhar y los cafés antiguos se llenan hasta muy tarde. Y el tiempo acompaña: el Ramadán cae en la estación fresca durante el resto de esta década, con 20–26 °C en El Cairo en 2027. Si prefieren Egipto sin Ramadán, la Semana Santa de 2027, del 21 al 28 de marzo, llega justo después.",
    },
    {
      title: "Qué cambia durante el día",
      body:
        "Todos los grandes monumentos, museos, hoteles y barcos del Nilo funcionan durante todo el Ramadán, y nadie espera que los viajeros ayunen. Algunos sitios cierran antes por la tarde. Los restaurantes de hotel, los cafés de las zonas turísticas y los barcos sirven con normalidad durante el día; muchos restaurantes pequeños de los barrios residenciales no abren hasta la puesta de sol. El alcohol se sirve con más discreción; los hoteles internacionales suelen seguir sirviéndolo a sus clientes.",
    },
    {
      title: "Cómo organizamos el día",
      body:
        "Monumentos temprano, una larga pausa a mediodía y, desde la puesta de sol, a la calle hasta medianoche: así el viaje sigue el ritmo real del país. La hora anterior a la puesta de sol es cada día la peor para el tráfico, porque todos vuelven a casa a romper el ayuno; a propósito, no programamos nada en ella. Reservamos con antelación la mesa del iftar: las buenas, sobre todo las terrazas sobre El Cairo islámico, se llenan semanas antes. Luxor, Asuán y el crucero por el Nilo funcionan como siempre.",
    },
    {
      title: "Cortesías",
      body:
        "De día, no comer, beber ni fumar en la calle; en el hotel, en el restaurante y en su vehículo, sin ningún problema. Algo más de recato al vestir que de costumbre, sobre todo junto a las mezquitas y en los barrios antiguos. Paciencia en la hora anterior a la puesta de sol. Y si les invitan a un iftar, acepten: es lo mejor que pueden hacer ese mes.",
    },
    {
      title: "El Eid al-Fitr",
      body:
        "La fiesta de tres días que cierra el Ramadán, hacia el 9 de marzo en 2027, es festiva en todo el país: los vuelos nacionales y los trenes se llenan, algunas oficinas cierran, pero los monumentos siguen abiertos y el ambiente es de celebración, con familias en los parques y en el Nilo. Si viajan durante el Eid, reserven pronto vuelos y trenes.",
    },
  ],
  photos: photos(
    OUTSIDE,
    [
      "Una calle empedrada de El Cairo islámico al anochecer, a la luz de los farolillos",
      "Minaretes sobre los tejados de El Cairo islámico al atardecer",
      "El patio de la mezquita de al-Azhar, en El Cairo",
      "Qatayef, las crepes rellenas del Ramadán",
    ],
    ["El Cairo de noche", "La hora del iftar", "Al-Azhar", "Qatayef"],
  ),
  highlights: {
    heading: "En resumen",
    items: [
      "Ramadán 2027: previsto del 8 de febrero al 8 de marzo; Eid al-Fitr hacia el 9 de marzo",
      "Monumentos, museos, hoteles y barcos del Nilo, abiertos",
      "Visitas por la mañana, descanso por la tarde, El Cairo islámico por la noche",
      "Nada en la hora anterior a la puesta de sol, la de más tráfico",
      "La mesa del iftar, reservada con semanas de antelación",
    ],
  },
  faqs: [
    {
      q: "¿Se puede viajar a Egipto en Ramadán?",
      a: "Sí, y es una de las épocas más gratificantes. Todos los grandes monumentos, museos, hoteles y barcos del Nilo funcionan, y nadie espera que los turistas ayunen. Algunos sitios cierran antes por la tarde y el ambiente cambia por completo tras la puesta de sol; con un programa que siga el ritmo del día, es un viaje sencillo e inusualmente memorable.",
    },
    {
      q: "¿Cuándo es el Ramadán de 2027?",
      a: "Previsiblemente del 8 de febrero al 8 de marzo de 2027, con el Eid al-Fitr hacia el 9 de marzo. El comienzo exacto depende del avistamiento de la luna creciente la víspera, así que las fechas publicadas con antelación pueden moverse un día.",
    },
    {
      q: "¿Están cerrados los restaurantes y los monumentos?",
      a: "Los monumentos y museos abren, algunos con horario de tarde más corto. Los restaurantes de hotel, los cafés de las zonas turísticas y los barcos del Nilo sirven con normalidad durante el día. Lo que cierra de día son sobre todo los restaurantes pequeños de los barrios residenciales, que abren con el iftar.",
    },
    {
      q: "¿Puedo comer y beber de día siendo turista?",
      a: "Sí: en el hotel, en el restaurante y en su vehículo, sin problema. En la calle, por cortesía, se evita durante el día, igual que fumar.",
    },
    {
      q: "¿Hay alcohol durante el Ramadán?",
      a: "Con restricciones. Los hoteles internacionales y los barcos del Nilo suelen seguir sirviéndolo a sus clientes, con discreción; fuera de ellos es más difícil.",
    },
  ],
  cta: {
    heading: "Su viaje en Ramadán",
    text: "Indíquenos sus fechas y cuántos son. Organizamos los días al ritmo del mes y reservamos a tiempo la mesa del iftar.",
    whatsapp: "Hola Kemet: queremos viajar a Egipto durante el Ramadán de 2027.",
    emailSubject: "Ramadán 2027 en Egipto — consulta",
  },
  moreLabel: "En inglés",
  moreRoute: EN_PAGE,
  moreText: "Nuestra página sobre el Ramadán en Egipto, en inglés.",
  links: [
    { label: "Semana Santa en Egipto", route: "es/semana-santa-en-egipto.html" },
    { label: "Mejor época para viajar a Egipto", route: "es/mejor-epoca-para-viajar-a-egipto.html" },
    { label: "Viajes a Egipto", route: "es/viajes-a-egipto.html" },
  ],
};

// ── Italian ─────────────────────────────────────────────────────────────────
export const itRamadan: LocalizedPage = {
  groupId: "standalone-it-ramadan",
  symbol: "crescent",
  theme: "ramadan",
  title: "Ramadan in Egitto 2027: viaggiare, consigli, date | Kemet",
  description:
    "L'Egitto durante il Ramadan 2027 (previsto dall'8 febbraio all'8 marzo): cosa è aperto, cosa cambia, il Cairo islamico di notte, l'iftar e l'Eid al-Fitr.",
  keywords:
    "ramadan egitto 2027, viaggio in egitto durante il ramadan, ramadan il cairo, egitto ramadan turisti, eid al-fitr egitto, date ramadan 2027",
  crumb: "Ramadan in Egitto",
  h1: "L'Egitto durante il Ramadan",
  standfirst:
    "Il Ramadan 2027 dovrebbe andare dall'8 febbraio all'8 marzo, in piena stagione migliore. Cosa cambia, cosa resta uguale e perché le sere del Cairo sono allora le più belle dell'anno.",
  lede:
    "Quasi tutti gli itinerari girano alla larga dal Ramadan. Secondo noi è un errore. Per una trentina di giorni il ritmo dell'Egitto si capovolge: le mattine sono tranquille, i grandi siti sensibilmente più vuoti e al tramonto l'intero paese tira il fiato nello stesso momento. Le lanterne corrono lungo tutta via al-Muizz, sui marciapiedi compaiono tavole imbandite per chiunque passi e il Khan el-Khalili resta aperto fino alle due o alle tre di notte.",
  facts: [
    { label: "Ramadan 2027", value: "previsto dall'8 febbraio all'8 marzo" },
    { label: "Eid al-Fitr", value: "intorno al 9–11 marzo 2027" },
    { label: "Il Cairo di giorno", value: "20–26 °C" },
    { label: "Monumenti", value: "aperti, a volte con pomeriggi più brevi" },
  ],
  sections: [
    {
      title: "Perché proprio durante il Ramadan",
      body:
        "La rottura del digiuno al tramonto, l'iftar, è l'ora più conviviale dell'anno egiziano, ed essere invitati non è affatto raro. Poi il Cairo islamico, i vicoli intorno alla moschea di al-Azhar e i vecchi caffè si riempiono fino a notte fonda. E il clima aiuta: per il resto di questo decennio il Ramadan cade nella stagione fresca, nel 2027 con 20–26 °C al Cairo. Anche il Carnevale 2027, con il martedì grasso il 9 febbraio, cade proprio in queste settimane.",
    },
    {
      title: "Cosa cambia di giorno",
      body:
        "Tutti i grandi monumenti, musei, alberghi e battelli sul Nilo funzionano per tutto il Ramadan, e nessuno si aspetta che i viaggiatori digiunino. Alcuni siti chiudono prima nel pomeriggio. I ristoranti degli alberghi, i caffè delle zone turistiche e i battelli servono normalmente durante il giorno; molti piccoli locali dei quartieri residenziali aprono solo al tramonto. L'alcol si serve con più discrezione; gli alberghi internazionali in genere continuano a servirlo ai propri ospiti.",
    },
    {
      title: "Come organizziamo la giornata",
      body:
        "Monumenti di buon mattino, una lunga pausa a metà giornata, poi fuori dal tramonto fino a mezzanotte: così il viaggio segue il vero ritmo del paese. L'ora prima del tramonto è ogni giorno la peggiore per il traffico, perché tutti corrono a casa a rompere il digiuno; di proposito non vi mettiamo nulla. Prenotiamo in anticipo il tavolo per l'iftar: i migliori, soprattutto le terrazze sui tetti del Cairo islamico, sono presi settimane prima. Luxor, Assuan e la crociera sul Nilo procedono come sempre.",
    },
    {
      title: "Le cortesie",
      body:
        "Di giorno si evita di mangiare, bere o fumare per strada: in albergo, al ristorante e nel vostro veicolo nessun problema. Un abbigliamento un po' più coperto del solito, soprattutto vicino alle moschee e nei quartieri antichi. Pazienza nell'ora prima del tramonto. E se vi invitano a un iftar, accettate: è la cosa migliore che possiate fare in quel mese.",
    },
    {
      title: "L'Eid al-Fitr",
      body:
        "La festa di tre giorni che chiude il Ramadan, intorno al 9 marzo nel 2027, è festiva in tutto il paese: voli interni e treni sono molto richiesti, alcuni uffici chiudono, ma i monumenti restano aperti e l'atmosfera è di festa, con le famiglie nei parchi e sul Nilo. Se viaggiate durante l'Eid, prenotate presto voli e treni.",
    },
  ],
  photos: photos(
    OUTSIDE,
    [
      "Un vicolo lastricato del Cairo islamico la sera, alla luce delle lanterne",
      "Minareti sopra i tetti del Cairo islamico al tramonto",
      "Il cortile della moschea di al-Azhar, al Cairo",
      "Qatayef, le crêpe ripiene del Ramadan",
    ],
    ["Il Cairo la sera", "L'ora dell'iftar", "Al-Azhar", "Qatayef"],
  ),
  highlights: {
    heading: "In breve",
    items: [
      "Ramadan 2027: previsto dall'8 febbraio all'8 marzo; Eid al-Fitr intorno al 9 marzo",
      "Monumenti, musei, alberghi e battelli sul Nilo aperti",
      "Visite al mattino, riposo il pomeriggio, il Cairo islamico la sera",
      "Niente nell'ora prima del tramonto, quella del traffico peggiore",
      "Il tavolo per l'iftar prenotato settimane prima",
    ],
  },
  faqs: [
    {
      q: "Si può viaggiare in Egitto durante il Ramadan?",
      a: "Sì, ed è uno dei periodi più ricchi. Tutti i grandi monumenti, musei, alberghi e battelli sul Nilo funzionano, e nessuno si aspetta che i turisti digiunino. Alcuni siti chiudono prima nel pomeriggio e dopo il tramonto l'atmosfera cambia del tutto: con un programma che segue il ritmo della giornata è un viaggio semplice e insolitamente memorabile.",
    },
    {
      q: "Quando cade il Ramadan 2027?",
      a: "Dovrebbe andare dall'8 febbraio all'8 marzo 2027, con l'Eid al-Fitr intorno al 9 marzo. L'inizio esatto dipende dall'avvistamento della luna crescente la sera prima, quindi le date pubblicate in anticipo possono spostarsi di un giorno.",
    },
    {
      q: "Ristoranti e monumenti sono chiusi?",
      a: "Monumenti e musei sono aperti, alcuni con orario pomeridiano ridotto. I ristoranti degli alberghi, i caffè delle zone turistiche e i battelli sul Nilo servono normalmente di giorno. A restare chiusi di giorno sono soprattutto i piccoli locali dei quartieri residenziali, che aprono all'iftar.",
    },
    {
      q: "Da turista posso mangiare e bere di giorno?",
      a: "Sì: in albergo, al ristorante e nel vostro veicolo, senza problemi. Per strada, per cortesia, di giorno si evita, così come fumare.",
    },
    {
      q: "Si trova alcol durante il Ramadan?",
      a: "In modo limitato. Gli alberghi internazionali e i battelli sul Nilo in genere continuano a servirlo ai propri ospiti, con discrezione; altrove è più difficile.",
    },
  ],
  cta: {
    heading: "Il vostro viaggio durante il Ramadan",
    text: "Diteci le date e in quanti siete. Organizziamo le giornate al ritmo del mese e prenotiamo per tempo il tavolo per l'iftar.",
    whatsapp: "Buongiorno Kemet, vorremmo viaggiare in Egitto durante il Ramadan 2027.",
    emailSubject: "Ramadan 2027 in Egitto — richiesta",
  },
  moreLabel: "In inglese",
  moreRoute: EN_PAGE,
  moreText: "La nostra pagina sul Ramadan in Egitto, in inglese.",
  links: [
    { label: "Quando andare in Egitto", route: "it/quando-andare-in-egitto.html" },
    { label: "Crociera sul Nilo", route: "it/crociera-sul-nilo.html" },
    { label: "Viaggi in Egitto", route: "it/viaggi-in-egitto.html" },
  ],
};

// ── Russian ─────────────────────────────────────────────────────────────────
export const ruRamadan: LocalizedPage = {
  groupId: "standalone-ru-ramadan",
  symbol: "crescent",
  theme: "ramadan",
  title: "Рамадан в Египте 2027: поездка, советы, даты | Kemet",
  description:
    "Египет в Рамадан 2027 года (ожидается с 8 февраля по 8 марта): что открыто, что меняется, исламский Каир ночью, ифтар и Ураза-байрам (Ид аль-Фитр).",
  keywords:
    "рамадан в египте 2027, поездка в египет в рамадан, рамадан каир, египет в рамадан туристам, ураза-байрам египет, даты рамадана 2027",
  crumb: "Рамадан в Египте",
  h1: "Египет в Рамадан",
  standfirst:
    "Рамадан 2027 года ожидается с 8 февраля по 8 марта — в самый лучший сезон. Что меняется, что остаётся прежним и почему вечера в Каире в это время — лучшие в году.",
  lede:
    "Большинство маршрутов обходят Рамадан стороной. Мы считаем это ошибкой. Примерно тридцать дней ритм Египта переворачивается: утро спокойное, на главных памятниках заметно свободнее, а на закате вся страна разом выдыхает. Вдоль всей улицы аль-Муизз висят фонари, на тротуарах появляются столы с едой для любого прохожего, а базар Хан аль-Халили торгует до двух-трёх часов ночи.",
  facts: [
    { label: "Рамадан 2027", value: "ожидается с 8 февраля по 8 марта" },
    { label: "Ураза-байрам", value: "около 9–11 марта 2027" },
    { label: "Каир днём", value: "20–26 °C" },
    { label: "Памятники", value: "открыты, иногда короче во второй половине дня" },
  ],
  sections: [
    {
      title: "Почему именно в Рамадан",
      body:
        "Разговение на закате, ифтар, — самый радушный час египетского года, и приглашение на него — не редкость. После него исламский Каир, переулки вокруг мечети аль-Азхар и старые кафе заполняются до глубокой ночи. Добавьте погоду: до конца этого десятилетия Рамадан приходится на прохладный сезон, в 2027 году — 20–26 °C в Каире. А праздники 23 февраля и 8 марта 2027 года приходятся как раз на Рамадан.",
    },
    {
      title: "Что меняется днём",
      body:
        "Все главные памятники, музеи, отели и нильские суда работают весь Рамадан, и никто не ждёт от путешественников, что они будут поститься. Некоторые объекты закрываются раньше во второй половине дня. Рестораны отелей, кафе в туристических районах и теплоходы работают днём как обычно; многие небольшие заведения в жилых кварталах открываются только на закате. Алкоголь подают сдержаннее; международные отели, как правило, продолжают подавать его своим гостям.",
    },
    {
      title: "Как мы планируем день",
      body:
        "Памятники с раннего утра, долгий дневной отдых, а с заката — на улицы до полуночи: так поездка совпадает с настоящим ритмом страны. Час перед закатом — каждый день худший для дорог, потому что все спешат домой разговляться; в этот час мы сознательно ничего не ставим. Стол на ифтар бронируем заранее: хорошие места, особенно террасы на крышах над исламским Каиром, разбирают за недели. Луксор, Асуан и круиз по Нилу идут как обычно.",
    },
    {
      title: "Правила вежливости",
      body:
        "Днём не стоит есть, пить или курить на улице — в отеле, в ресторане и в своём автомобиле это совершенно нормально. Одежда чуть скромнее обычного, особенно у мечетей и в старых кварталах. Терпение в час перед закатом. А если вас пригласят на ифтар — соглашайтесь: ничего лучше в этом месяце сделать нельзя.",
    },
    {
      title: "Ураза-байрам (Ид аль-Фитр)",
      body:
        "Трёхдневный праздник в конце Рамадана, в 2027 году около 9 марта, — выходные по всей стране: внутренние рейсы и поезда сильно загружены, часть учреждений закрыта, но памятники открыты, а настроение праздничное — семьи в парках и на Ниле. Если поездка выпадает на праздник, бронируйте перелёты и поезда заранее.",
    },
  ],
  photos: photos(
    OUTSIDE,
    [
      "Мощёный переулок исламского Каира вечером, в свете фонарей",
      "Минареты над крышами исламского Каира на закате",
      "Двор мечети аль-Азхар в Каире",
      "Катаеф — фаршированные блинчики Рамадана",
    ],
    ["Каир вечером", "Час ифтара", "Аль-Азхар", "Катаеф"],
  ),
  highlights: {
    heading: "Коротко",
    items: [
      "Рамадан 2027: ожидается с 8 февраля по 8 марта; Ураза-байрам около 9 марта",
      "Памятники, музеи, отели и нильские суда работают",
      "Утром экскурсии, днём отдых, вечером исламский Каир",
      "Ничего в час перед закатом — это самый плотный трафик",
      "Стол на ифтар бронируем за несколько недель",
    ],
  },
  faqs: [
    {
      q: "Можно ли ехать в Египет в Рамадан?",
      a: "Да, и это одно из самых интересных времён. Все главные памятники, музеи, отели и нильские суда работают, и никто не ждёт от туристов соблюдения поста. Некоторые объекты закрываются раньше во второй половине дня, а после заката атмосфера меняется полностью — при программе, построенной под ритм дня, это простая и необычайно запоминающаяся поездка.",
    },
    {
      q: "Когда Рамадан в 2027 году?",
      a: "Ожидается с 8 февраля по 8 марта 2027 года, Ураза-байрам — около 9 марта. Точное начало зависит от наблюдения молодого месяца накануне, поэтому заранее объявленные даты могут сдвинуться на день.",
    },
    {
      q: "Закрыты ли рестораны и памятники?",
      a: "Памятники и музеи открыты, некоторые — с сокращёнными часами во второй половине дня. Рестораны отелей, кафе в туристических районах и нильские суда днём работают как обычно. Днём закрыты в основном небольшие заведения в жилых кварталах, которые открываются к ифтару.",
    },
    {
      q: "Можно ли туристу есть и пить днём?",
      a: "Да — в отеле, в ресторане и в своём автомобиле без всяких проблем. На улице днём этого из вежливости избегают, как и курения.",
    },
    {
      q: "Можно ли купить алкоголь в Рамадан?",
      a: "С ограничениями. Международные отели и нильские суда, как правило, продолжают подавать его гостям, сдержанно; вне их найти сложнее.",
    },
  ],
  cta: {
    heading: "Ваша поездка в Рамадан",
    text: "Напишите даты и сколько вас. Мы выстроим дни под ритм месяца и заранее забронируем стол на ифтар.",
    whatsapp: "Здравствуйте, Kemet — мы хотим поехать в Египет в Рамадан 2027 года.",
    emailSubject: "Рамадан 2027 в Египте — запрос",
  },
  moreLabel: "На английском",
  moreRoute: EN_PAGE,
  moreText: "Наша страница о Рамадане в Египте — на английском.",
  links: [
    { label: "Когда лучше ехать в Египет", route: "ru/kogda-luchshe-ehat-v-egipet.html" },
    { label: "Круиз по Нилу", route: "ru/kruiz-po-nilu.html" },
    { label: "Туры в Египет", route: "ru/tury-v-egipet.html" },
  ],
};

// ── Portuguese (Brazil) ─────────────────────────────────────────────────────
export const ptRamadan: LocalizedPage = {
  groupId: "standalone-pt-ramadan",
  symbol: "crescent",
  theme: "ramadan",
  title: "Ramadã no Egito 2027: viagem, dicas e datas | Kemet",
  description:
    "O Egito durante o Ramadã de 2027 (previsto de 8 de fevereiro a 8 de março): o que abre, o que muda, o Cairo islâmico à noite, o iftar e o Eid al-Fitr.",
  keywords:
    "ramadã egito 2027, viajar ao egito no ramadã, ramadã cairo, egito no ramadã turistas, eid al-fitr egito, datas do ramadã 2027",
  crumb: "Ramadã no Egito",
  h1: "O Egito durante o Ramadã",
  standfirst:
    "O Ramadã de 2027 deve ir de 8 de fevereiro a 8 de março, em plena melhor temporada. O que muda, o que continua igual e por que as noites do Cairo são, então, as melhores do ano.",
  lede:
    "A maioria dos roteiros desvia do Ramadã. Achamos que é um erro. Durante uns trinta dias o ritmo do Egito se inverte: as manhãs são tranquilas, os grandes sítios ficam bem mais vazios e, ao pôr do sol, o país inteiro respira ao mesmo tempo. Lanternas enfeitam toda a rua al-Muizz, surgem nas calçadas mesas com comida para quem passar e o Khan el-Khalili vende até as duas ou três da manhã.",
  facts: [
    { label: "Ramadã 2027", value: "previsto de 8 de fevereiro a 8 de março" },
    { label: "Eid al-Fitr", value: "por volta de 9 a 11 de março de 2027" },
    { label: "Cairo de dia", value: "20–26 °C" },
    { label: "Monumentos", value: "abertos, às vezes com tardes mais curtas" },
  ],
  sections: [
    {
      title: "Por que no Ramadã",
      body:
        "A quebra do jejum ao pôr do sol, o iftar, é a hora mais sociável do ano egípcio, e ser convidado para um não é nada raro. Depois, o Cairo islâmico, as vielas em volta da mesquita de al-Azhar e os cafés antigos se enchem até tarde da noite. E o clima ajuda: até o fim desta década o Ramadã cai na estação fresca, com 20–26 °C no Cairo em 2027. O Carnaval de 2027, de 6 a 10 de fevereiro, coincide com o começo do Ramadã — os dias de folga caem justamente nessas semanas.",
    },
    {
      title: "O que muda durante o dia",
      body:
        "Todos os grandes monumentos, museus, hotéis e barcos do Nilo funcionam durante todo o Ramadã, e ninguém espera que os viajantes jejuem. Alguns sítios fecham mais cedo à tarde. Os restaurantes de hotel, os cafés das áreas turísticas e os barcos servem normalmente durante o dia; muitos restaurantes pequenos dos bairros residenciais só abrem ao pôr do sol. O álcool é servido com mais discrição; os hotéis internacionais costumam continuar servindo seus hóspedes.",
    },
    {
      title: "Como organizamos o dia",
      body:
        "Monumentos cedo, uma longa pausa à tarde e, a partir do pôr do sol, rua até a meia-noite: assim a viagem acompanha o ritmo real do país. A hora antes do pôr do sol é, todos os dias, a pior para o trânsito, porque todo mundo corre para casa para quebrar o jejum; de propósito, não marcamos nada nela. Reservamos a mesa do iftar com antecedência: as boas, sobretudo os terraços sobre o Cairo islâmico, lotam semanas antes. Luxor, Assuã e o cruzeiro pelo Nilo seguem normalmente.",
    },
    {
      title: "Boas maneiras",
      body:
        "De dia, evite comer, beber ou fumar na rua — no hotel, no restaurante e no seu veículo, tudo bem. Roupas um pouco mais discretas que o habitual, principalmente perto das mesquitas e nos bairros antigos. Paciência na hora antes do pôr do sol. E, se for convidado para um iftar, aceite: é a melhor coisa que você pode fazer nesse mês.",
    },
    {
      title: "O Eid al-Fitr",
      body:
        "A festa de três dias que encerra o Ramadã, por volta de 9 de março em 2027, é feriado no país inteiro: voos domésticos e trens ficam muito cheios, alguns escritórios fecham, mas os monumentos continuam abertos e o clima é de festa, com famílias nos parques e no Nilo. Se a viagem cair no Eid, reserve voos e trens cedo.",
    },
  ],
  photos: photos(
    OUTSIDE,
    [
      "Uma viela de pedra do Cairo islâmico à noite, à luz das lanternas",
      "Minaretes sobre os telhados do Cairo islâmico ao pôr do sol",
      "O pátio da mesquita de al-Azhar, no Cairo",
      "Qatayef, as panquecas recheadas do Ramadã",
    ],
    ["O Cairo à noite", "A hora do iftar", "Al-Azhar", "Qatayef"],
  ),
  highlights: {
    heading: "Em resumo",
    items: [
      "Ramadã 2027: previsto de 8 de fevereiro a 8 de março; Eid al-Fitr por volta de 9 de março",
      "Monumentos, museus, hotéis e barcos do Nilo abertos",
      "Passeios de manhã, descanso à tarde, o Cairo islâmico à noite",
      "Nada na hora antes do pôr do sol, a de pior trânsito",
      "A mesa do iftar reservada com semanas de antecedência",
    ],
  },
  faqs: [
    {
      q: "Dá para viajar ao Egito no Ramadã?",
      a: "Sim, e é uma das épocas mais recompensadoras. Todos os grandes monumentos, museus, hotéis e barcos do Nilo funcionam, e ninguém espera que turistas jejuem. Alguns sítios fecham mais cedo à tarde, e o clima muda por completo depois do pôr do sol — com um roteiro que siga o ritmo do dia, é uma viagem simples e muito marcante.",
    },
    {
      q: "Quando é o Ramadã de 2027?",
      a: "Deve ir de 8 de fevereiro a 8 de março de 2027, com o Eid al-Fitr por volta de 9 de março. O início exato depende da observação da lua crescente na véspera, então as datas divulgadas com antecedência podem mudar em um dia.",
    },
    {
      q: "Restaurantes e monumentos ficam fechados?",
      a: "Monumentos e museus abrem, alguns com horário da tarde reduzido. Restaurantes de hotel, cafés das áreas turísticas e barcos do Nilo servem normalmente durante o dia. O que fica fechado de dia são sobretudo os restaurantes pequenos dos bairros residenciais, que abrem no iftar.",
    },
    {
      q: "Turista pode comer e beber de dia?",
      a: "Sim — no hotel, no restaurante e no seu veículo, sem problema. Na rua, por cortesia, evita-se de dia, assim como fumar.",
    },
    {
      q: "Dá para encontrar bebida alcoólica no Ramadã?",
      a: "Com restrições. Hotéis internacionais e barcos do Nilo costumam continuar servindo seus hóspedes, com discrição; fora deles é mais difícil.",
    },
  ],
  cta: {
    heading: "Sua viagem no Ramadã",
    text: "Diga as datas e quantas pessoas são. Organizamos os dias no ritmo do mês e reservamos a mesa do iftar a tempo.",
    whatsapp: "Olá Kemet — queremos viajar ao Egito durante o Ramadã de 2027.",
    emailSubject: "Ramadã 2027 no Egito — pedido",
  },
  moreLabel: "Em inglês",
  moreRoute: EN_PAGE,
  moreText: "Nossa página sobre o Ramadã no Egito, em inglês.",
  links: [
    { label: "Carnaval no Egito", route: "pt/carnaval-no-egito.html" },
    { label: "Melhor época para ir ao Egito", route: "pt/melhor-epoca-para-ir-ao-egito.html" },
    { label: "Viagens ao Egito", route: "pt/viagens-ao-egito.html" },
  ],
};

// ── Indonesian ──────────────────────────────────────────────────────────────
export const idRamadan: LocalizedPage = {
  groupId: "standalone-id-ramadan",
  symbol: "crescent",
  theme: "ramadan",
  title: "Ramadan di Mesir 2027: Tarawih, Iftar & Lebaran | Kemet",
  description:
    "Ramadan 1448 H di Kairo (perkiraan 8 Februari – 8 Maret 2027): tarawih di masjid bersejarah, buka puasa, sahur, umrah plus Mesir, dan Idulfitri di Mesir.",
  keywords:
    "ramadan di mesir 2027, ramadan di kairo, tarawih di kairo, umrah ramadan plus mesir, lebaran di mesir, idulfitri di mesir, buka puasa di kairo",
  crumb: "Ramadan di Mesir",
  h1: "Ramadan di Kairo",
  standfirst:
    "Ramadan 1448 H diperkirakan jatuh pada 8 Februari sampai 8 Maret 2027, di musim sejuk. Tarawih di masjid-masjid tertua Kairo, buka puasa di atas atap kota tua, dan Lebaran di tepi Sungai Nil.",
  lede:
    "Kairo dijuluki kota seribu menara, dan pada bulan Ramadan julukan itu terasa paling hidup. Lentera — fanous — digantung di sepanjang Jalan Al-Muizz dan di sekitar Masjid Al-Hussein; menjelang magrib, meja-meja makanan dibentangkan di trotoar untuk siapa saja yang lewat; dan setelah berbuka, kota tua ramai sampai waktu sahur.",
  facts: [
    { label: "Ramadan 1448 H", value: "perkiraan 8 Februari – 8 Maret 2027" },
    { label: "Idulfitri", value: "sekitar 9 Maret 2027" },
    { label: "Lama puasa di Kairo", value: "sekitar 12½–13 jam" },
    { label: "Cuaca siang di Kairo", value: "20–26 °C" },
  ],
  sections: [
    {
      title: "Tarawih di masjid bersejarah",
      body:
        "Masjid Al-Azhar, yang berdiri sejak tahun 970, dan Masjid Amr bin Ash, masjid pertama yang dibangun di Mesir dan di Afrika, penuh jamaah pada malam-malam Ramadan, terutama pada sepuluh malam terakhir. Masjid-masjid besar memiliki tempat salat untuk perempuan. Kami menyusun malam Anda agar bisa salat tarawih di masjid pilihan Anda, lalu menikmati kota tua sesudahnya.",
    },
    {
      title: "Hari-hari bagi yang berpuasa",
      body:
        "Ramadan 2027 jatuh pada musim sejuk: siang di Kairo sekitar 20–26 °C, dan puasa berlangsung sekitar 12½ sampai 13 jam. Kami menaruh kunjungan di pagi hari, menjaga jarak jalan kaki tetap pendek, memberi waktu istirahat di siang hari, dan tidak menjadwalkan apa pun pada jam menjelang magrib, ketika lalu lintas paling padat. Anggota rombongan yang tidak berpuasa — anak-anak, misalnya — tetap bisa makan di hotel, restoran, atau di mobil.",
    },
    {
      title: "Buka puasa dan sahur",
      body:
        "Buka puasa di teras atap yang menghadap menara-menara Kairo Islam, atau di atas kapal di Sungai Nil; sahur di kedai-kedai sekitar Al-Hussein, dengan ful dan roti hangat. Banyak hotel di Kairo mendirikan tenda Ramadan untuk sahur. Jangan lewatkan manisan khas Ramadan: kunafa dan qatayef. Tempat buka puasa yang baik cepat penuh, jadi kami memesannya jauh hari.",
    },
    {
      title: "Umrah Ramadan plus Mesir",
      body:
        "Banyak jamaah menggabungkan umrah di bulan Ramadan dengan beberapa hari di Mesir — Kairo sebelum ke Tanah Suci, atau sesudahnya untuk berlebaran di Mesir. Penerbangan Jeddah–Kairo hanya sekitar dua jam. Kami menyusun program di Mesir mengikuti jadwal umrah Anda.",
    },
    {
      title: "Idulfitri di Mesir",
      body:
        "Idulfitri, sekitar 9 Maret 2027, adalah libur nasional tiga hari. Salat Id digelar di masjid-masjid besar dan lapangan terbuka, dan keluarga memenuhi taman serta tepi Sungai Nil. Penerbangan domestik dan kereta penuh, jadi pesanlah lebih awal; situs-situs bersejarah tetap buka.",
    },
  ],
  photos: photos(
    FASTING,
    [
      "Jalan berbatu di Kairo Islam pada malam hari, diterangi lentera",
      "Halaman Masjid Al-Azhar di Kairo",
      "Masjid Amr bin Ash di Kairo, masjid pertama di Mesir",
      "Qatayef, kue isi khas Ramadan",
    ],
    ["Kairo di malam hari", "Masjid Al-Azhar", "Masjid Amr bin Ash", "Qatayef"],
  ),
  highlights: {
    heading: "Sekilas",
    items: [
      "Ramadan 1448 H: perkiraan 8 Februari – 8 Maret 2027; Idulfitri sekitar 9 Maret",
      "Tarawih di Masjid Al-Azhar dan Masjid Amr bin Ash",
      "Kunjungan pagi, istirahat siang, kota tua di malam hari",
      "Makanan halal dan waktu salat diperhitungkan setiap hari",
      "Bisa digabung dengan umrah Ramadan",
    ],
  },
  faqs: [
    {
      q: "Kapan Ramadan 2027 di Mesir?",
      a: "Perkiraan 8 Februari sampai 8 Maret 2027 (Ramadan 1448 H), dengan Idulfitri sekitar 9 Maret. Awal pastinya bergantung pada rukyat hilal pada malam sebelumnya, jadi tanggalnya bisa bergeser satu hari.",
    },
    {
      q: "Apakah situs bersejarah tetap buka selama Ramadan?",
      a: "Ya. Monumen dan museum tetap buka, sebagian dengan jam sore yang lebih pendek. Hotel, kapal pesiar Sungai Nil, dan restoran di kawasan wisata melayani seperti biasa.",
    },
    {
      q: "Di mana salat tarawih di Kairo?",
      a: "Masjid Al-Azhar dan Masjid Amr bin Ash adalah yang paling terkenal, dan sangat ramai pada sepuluh malam terakhir. Masjid Al-Hussein dan banyak masjid bersejarah di Kairo Islam juga bisa dipilih. Masjid-masjid besar memiliki tempat salat untuk perempuan.",
    },
    {
      q: "Bagaimana kalau kami berpuasa selama tur?",
      a: "Kami menyusun hari mengikuti puasa Anda: kunjungan di pagi hari, jalan kaki yang tidak jauh, istirahat siang, dan waktu luang menjelang berbuka. Cuaca Februari–Maret sejuk, dan puasa di Kairo sekitar 12½–13 jam.",
    },
    {
      q: "Bisakah digabung dengan umrah?",
      a: "Bisa. Banyak yang ke Kairo sebelum atau sesudah umrah Ramadan, misalnya untuk berlebaran di Mesir. Kami menyusun program di Mesir mengikuti jadwal umrah Anda.",
    },
  ],
  cta: {
    heading: "Ramadan Anda di Kairo",
    text: "Beri tahu kami tanggal, jumlah peserta, dan apakah Anda menggabungkannya dengan umrah. Kami menyusun hari mengikuti waktu puasa dan memesan tempat buka puasa lebih awal.",
    whatsapp: "Halo Kemet — kami ingin ke Mesir pada Ramadan 2027.",
    emailSubject: "Ramadan 2027 di Mesir — pertanyaan",
  },
  moreLabel: "Dalam bahasa Inggris",
  moreRoute: EN_PAGE,
  moreText: "Halaman kami tentang Ramadan di Mesir, dalam bahasa Inggris.",
  links: [
    { label: "Umrah plus Mesir", route: "id/umrah-plus-mesir.html" },
    { label: "Ziarah Kairo Islam", route: "id/ziarah-kairo-islam.html" },
    { label: "Halal & waktu salat", route: "id/halal-dan-waktu-salat.html" },
  ],
};

// ── Malay ───────────────────────────────────────────────────────────────────
export const msRamadan: LocalizedPage = {
  groupId: "standalone-ms-ramadan",
  symbol: "crescent",
  theme: "ramadan",
  title: "Ramadan di Mesir 2027: Tarawih, Iftar & Hari Raya | Kemet",
  description:
    "Ramadan 1448 H di Kaherah (jangkaan 8 Februari – 8 Mac 2027): tarawih di masjid bersejarah, berbuka, sahur, umrah plus Mesir dan Hari Raya di Mesir.",
  keywords:
    "ramadan di mesir 2027, ramadan di kaherah, tarawih di kaherah, umrah ramadan plus mesir, hari raya di mesir, aidilfitri di mesir, berbuka puasa di kaherah",
  crumb: "Ramadan di Mesir",
  h1: "Ramadan di Kaherah",
  standfirst:
    "Ramadan 1448 H dijangka jatuh pada 8 Februari hingga 8 Mac 2027, pada musim sejuk. Tarawih di masjid-masjid tertua Kaherah, berbuka di atas bumbung kota lama, dan Hari Raya di tebing Sungai Nil.",
  lede:
    "Kaherah digelar kota seribu menara, dan pada bulan Ramadan gelaran itu terasa paling hidup. Tanglung — fanous — digantung di sepanjang Jalan Al-Muizz dan di sekitar Masjid Al-Hussein; menjelang maghrib, meja-meja makanan dibentangkan di kaki lima untuk sesiapa yang lalu; dan selepas berbuka, kota lama meriah sehingga waktu sahur.",
  facts: [
    { label: "Ramadan 1448 H", value: "jangkaan 8 Februari – 8 Mac 2027" },
    { label: "Hari Raya Aidilfitri", value: "sekitar 9 Mac 2027" },
    { label: "Tempoh berpuasa di Kaherah", value: "kira-kira 12½–13 jam" },
    { label: "Cuaca siang di Kaherah", value: "20–26 °C" },
  ],
  sections: [
    {
      title: "Tarawih di masjid bersejarah",
      body:
        "Masjid Al-Azhar, yang berdiri sejak tahun 970, dan Masjid Amr ibn al-As, masjid pertama yang dibina di Mesir dan di Afrika, penuh dengan jemaah pada malam-malam Ramadan, terutama pada sepuluh malam terakhir. Masjid-masjid besar mempunyai ruang solat wanita. Kami menyusun malam anda supaya dapat bersolat tarawih di masjid pilihan anda, kemudian menikmati kota lama selepasnya.",
    },
    {
      title: "Hari-hari bagi yang berpuasa",
      body:
        "Ramadan 2027 jatuh pada musim sejuk: siang di Kaherah sekitar 20–26 °C, dan puasa berlangsung kira-kira 12½ hingga 13 jam. Kami meletakkan lawatan pada waktu pagi, memastikan jarak berjalan kaki pendek, memberi masa berehat pada waktu tengah hari, dan tidak menjadualkan apa-apa pada jam menjelang maghrib, ketika lalu lintas paling sesak. Ahli rombongan yang tidak berpuasa — kanak-kanak, misalnya — masih boleh makan di hotel, restoran atau di dalam kereta.",
    },
    {
      title: "Berbuka dan bersahur",
      body:
        "Berbuka di teres bumbung yang menghadap menara-menara Kaherah Islam, atau di atas kapal di Sungai Nil; bersahur di kedai-kedai sekitar Al-Hussein, dengan ful dan roti panas. Banyak hotel di Kaherah mendirikan khemah Ramadan untuk bersahur. Jangan lepaskan manisan Ramadan: kunafa dan qatayef. Tempat berbuka yang baik cepat penuh, jadi kami menempahnya awal.",
    },
    {
      title: "Umrah Ramadan plus Mesir",
      body:
        "Ramai jemaah menggabungkan umrah pada bulan Ramadan dengan beberapa hari di Mesir — Kaherah sebelum ke Tanah Suci, atau selepasnya untuk berhari raya di Mesir. Penerbangan Jeddah–Kaherah hanya kira-kira dua jam. Kami menyusun program di Mesir mengikut jadual umrah anda.",
    },
    {
      title: "Hari Raya di Mesir",
      body:
        "Hari Raya Aidilfitri, sekitar 9 Mac 2027, ialah cuti umum selama tiga hari. Solat sunat Aidilfitri diadakan di masjid-masjid besar dan di kawasan lapang, dan keluarga memenuhi taman serta tebing Sungai Nil. Penerbangan domestik dan kereta api penuh, jadi tempahlah awal; tapak-tapak bersejarah tetap dibuka.",
    },
  ],
  photos: photos(
    FASTING,
    [
      "Jalan berbatu di Kaherah Islam pada waktu malam, diterangi tanglung",
      "Halaman Masjid Al-Azhar di Kaherah",
      "Masjid Amr ibn al-As di Kaherah, masjid pertama di Mesir",
      "Qatayef, kuih berinti khas Ramadan",
    ],
    ["Kaherah pada waktu malam", "Masjid Al-Azhar", "Masjid Amr ibn al-As", "Qatayef"],
  ),
  highlights: {
    heading: "Sepintas lalu",
    items: [
      "Ramadan 1448 H: jangkaan 8 Februari – 8 Mac 2027; Aidilfitri sekitar 9 Mac",
      "Tarawih di Masjid Al-Azhar dan Masjid Amr ibn al-As",
      "Lawatan pagi, rehat tengah hari, kota lama pada waktu malam",
      "Makanan halal dan waktu solat diambil kira setiap hari",
      "Boleh digabungkan dengan umrah Ramadan",
    ],
  },
  faqs: [
    {
      q: "Bilakah Ramadan 2027 di Mesir?",
      a: "Jangkaan 8 Februari hingga 8 Mac 2027 (Ramadan 1448 H), dengan Aidilfitri sekitar 9 Mac. Tarikh mula yang tepat bergantung pada rukyah hilal pada malam sebelumnya, jadi tarikhnya boleh berganjak sehari.",
    },
    {
      q: "Adakah tapak bersejarah dibuka sepanjang Ramadan?",
      a: "Ya. Monumen dan muzium tetap dibuka, sebahagiannya dengan waktu petang yang lebih pendek. Hotel, kapal pelayaran Sungai Nil dan restoran di kawasan pelancongan beroperasi seperti biasa.",
    },
    {
      q: "Di manakah solat tarawih di Kaherah?",
      a: "Masjid Al-Azhar dan Masjid Amr ibn al-As ialah yang paling terkenal, dan sangat sesak pada sepuluh malam terakhir. Masjid Al-Hussein dan banyak masjid bersejarah di Kaherah Islam juga boleh dipilih. Masjid-masjid besar mempunyai ruang solat wanita.",
    },
    {
      q: "Bagaimana jika kami berpuasa semasa lawatan?",
      a: "Kami menyusun hari mengikut puasa anda: lawatan pada waktu pagi, jarak berjalan yang pendek, rehat tengah hari dan masa lapang menjelang berbuka. Cuaca Februari–Mac sejuk, dan puasa di Kaherah kira-kira 12½–13 jam.",
    },
    {
      q: "Bolehkah digabungkan dengan umrah?",
      a: "Boleh. Ramai yang ke Kaherah sebelum atau selepas umrah Ramadan, misalnya untuk berhari raya di Mesir. Kami menyusun program di Mesir mengikut jadual umrah anda.",
    },
  ],
  cta: {
    heading: "Ramadan anda di Kaherah",
    text: "Beritahu kami tarikh, bilangan peserta dan sama ada anda menggabungkannya dengan umrah. Kami menyusun hari mengikut waktu puasa dan menempah tempat berbuka lebih awal.",
    whatsapp: "Salam Kemet — kami ingin ke Mesir pada Ramadan 2027.",
    emailSubject: "Ramadan 2027 di Mesir — pertanyaan",
  },
  moreLabel: "Dalam bahasa Inggeris",
  moreRoute: EN_PAGE,
  moreText: "Halaman kami tentang Ramadan di Mesir, dalam bahasa Inggeris.",
  links: [
    { label: "Umrah plus Mesir", route: "ms/umrah-plus-mesir.html" },
    { label: "Ziarah Kaherah Islam", route: "ms/ziarah-kaherah-islam.html" },
    { label: "Halal & waktu solat", route: "ms/halal-dan-waktu-solat.html" },
  ],
};

// ── Arabic ──────────────────────────────────────────────────────────────────
export const arRamadan: LocalizedPage = {
  groupId: "standalone-ar-ramadan",
  symbol: "crescent",
  theme: "ramadan",
  title: "رمضان في مصر ٢٠٢٧: التراويح والإفطار والعيد | كيميت",
  description:
    "رمضان ١٤٤٨هـ في القاهرة (متوقَّع من ٨ فبراير إلى ٨ مارس ٢٠٢٧): التراويح في المساجد التاريخية، والإفطار والسحور، وعيد الفطر في مصر، وكيف نرتّب الرحلة.",
  keywords:
    "رمضان في مصر 2027، رمضان في القاهرة، التراويح في الأزهر، جامع عمرو بن العاص رمضان، عيد الفطر في مصر، الإفطار في القاهرة، سياحة رمضان مصر",
  crumb: "رمضان في مصر",
  h1: "رمضان في القاهرة",
  standfirst:
    "يُتوقَّع أن يكون رمضان ١٤٤٨هـ من ٨ فبراير إلى ٨ مارس ٢٠٢٧، في جوّ معتدل. تراويح في أعرق مساجد القاهرة، وإفطار فوق أسطح المدينة القديمة، وعيد على ضفاف النيل.",
  lede:
    "للقاهرة في رمضان طعم لا يشبه غيره. تُعلَّق الفوانيس على امتداد شارع المعز وحول مسجد الحسين، وقبيل المغرب تُمدّ موائد الرحمن على الأرصفة لكل عابر، وبعد الإفطار تبقى المدينة القديمة عامرة حتى السحور، وما زال المسحّراتي يجوب بعض أحيائها القديمة.",
  facts: [
    { label: "رمضان ١٤٤٨هـ", value: "متوقَّع من ٨ فبراير إلى ٨ مارس ٢٠٢٧" },
    { label: "عيد الفطر", value: "نحو ٩ مارس ٢٠٢٧" },
    { label: "مدة الصيام في القاهرة", value: "نحو ١٢ ساعة ونصف إلى ١٣ ساعة" },
    { label: "الطقس نهاراً في القاهرة", value: "٢٠–٢٦ درجة" },
  ],
  sections: [
    {
      title: "التراويح في المساجد التاريخية",
      body:
        "يمتلئ الجامع الأزهر، القائم منذ عام ٩٧٠م، وجامع عمرو بن العاص، أول مسجد بُني في مصر وأفريقيا، بالمصلّين في ليالي رمضان، وتزداد الحشود في العشر الأواخر. وفي المساجد الكبرى مصلّيات للنساء. نرتّب أمسياتكم بحيث تصلّون التراويح في المسجد الذي تختارونه، ثم تتجوّلون في المدينة القديمة بعدها.",
    },
    {
      title: "أيام الصائمين",
      body:
        "يأتي رمضان ٢٠٢٧ في جوّ معتدل: نهار القاهرة نحو ٢٠–٢٦ درجة، والصيام نحو ١٢ ساعة ونصف إلى ١٣ ساعة. نضع الزيارات في الصباح، ونُبقي المشي قصيراً، ونترك وقتاً للراحة بعد الظهر، ولا نرتّب شيئاً في الساعة التي تسبق المغرب، حين يكون الزحام في أشدّه. ومن لا يصوم من المسافرين — كالأطفال — يأكل في الفندق أو المطعم أو السيارة دون حرج.",
    },
    {
      title: "الإفطار والسحور",
      body:
        "إفطار على سطح يطلّ على مآذن القاهرة الإسلامية، أو على مركب في النيل؛ وسحور في مقاهي الحسين على الفول والطعمية والخبز الساخن. وكثير من فنادق القاهرة تقيم خياماً رمضانية للسحور. ولا تفوتكم حلويات رمضان: الكنافة والقطايف. أماكن الإفطار الجيدة تمتلئ سريعاً، لذلك نحجزها مبكراً.",
    },
    {
      title: "عيد الفطر في مصر",
      body:
        "عيد الفطر، نحو ٩ مارس ٢٠٢٧، عطلة رسمية لثلاثة أيام. تُقام صلاة العيد في المساجد الكبرى والساحات، وتملأ الأسر الحدائق وكورنيش النيل. والعيد موسم يقصد فيه كثيرون مصر، فالطيران الداخلي والقطارات مزدحمة — احجزوا مبكراً — أما المواقع الأثرية فتبقى مفتوحة.",
    },
  ],
  photos: photos(
    FASTING,
    [
      "شارع مرصوف بالحجر في القاهرة الإسلامية ليلاً، تضيئه الفوانيس",
      "صحن الجامع الأزهر في القاهرة",
      "جامع عمرو بن العاص في القاهرة، أول مسجد في مصر",
      "القطايف، من حلويات رمضان",
    ],
    ["القاهرة ليلاً", "الجامع الأزهر", "جامع عمرو بن العاص", "القطايف"],
  ),
  highlights: {
    heading: "باختصار",
    items: [
      "رمضان ١٤٤٨هـ: متوقَّع من ٨ فبراير إلى ٨ مارس ٢٠٢٧، وعيد الفطر نحو ٩ مارس",
      "التراويح في الجامع الأزهر وجامع عمرو بن العاص",
      "زيارات في الصباح، وراحة بعد الظهر، والمدينة القديمة ليلاً",
      "لا شيء في الساعة التي تسبق المغرب",
      "أماكن الإفطار محجوزة مسبقاً",
    ],
  },
  faqs: [
    {
      q: "متى رمضان ٢٠٢٧ في مصر؟",
      a: "يُتوقَّع من ٨ فبراير إلى ٨ مارس ٢٠٢٧ (رمضان ١٤٤٨هـ)، وعيد الفطر نحو ٩ مارس. وبدايته الدقيقة تتوقف على رؤية الهلال في الليلة السابقة، فقد يتغيّر الموعد يوماً.",
    },
    {
      q: "هل تبقى المواقع الأثرية مفتوحة في رمضان؟",
      a: "نعم. المعابد والمتاحف مفتوحة، وبعضها يختصر ساعات العصر. والفنادق والبواخر النيلية ومطاعم المناطق السياحية تعمل كالمعتاد.",
    },
    {
      q: "أين نصلّي التراويح في القاهرة؟",
      a: "أشهر الخيارات الجامع الأزهر وجامع عمرو بن العاص، ويشتدّ الزحام فيهما في العشر الأواخر. ومسجد الحسين ومساجد القاهرة الإسلامية التاريخية خيارات أيضاً، وفي المساجد الكبرى مصلّيات للنساء.",
    },
    {
      q: "كيف تكون الرحلة ونحن صائمون؟",
      a: "نرتّب اليوم على صيامكم: زيارات صباحية، ومشي قليل، وراحة بعد الظهر، ووقت حرّ قبيل الإفطار. والجوّ في فبراير ومارس معتدل، والصيام في القاهرة نحو ١٢ ساعة ونصف إلى ١٣ ساعة.",
    },
    {
      q: "هل نقضي عيد الفطر في مصر؟",
      a: "خيار جميل: صلاة العيد في مسجد كبير، ثم أيام على النيل أو في الأقصر وأسوان. لكن الطيران الداخلي والقطارات مزدحمة في العيد، فاحجزوا مبكراً.",
    },
  ],
  cta: {
    heading: "رمضانكم في القاهرة",
    text: "أخبرونا بالتواريخ وعدد المسافرين. نرتّب الأيام على مواعيد الصيام ونحجز أماكن الإفطار مبكراً.",
    whatsapp: "السلام عليكم كيميت — نرغب في زيارة مصر في رمضان ٢٠٢٧.",
    emailSubject: "رمضان ٢٠٢٧ في مصر — استفسار",
  },
  moreLabel: "بالإنجليزية",
  moreRoute: EN_PAGE,
  moreText: "صفحتنا عن رمضان في مصر، بالإنجليزية.",
  links: [
    { label: "أفضل وقت لزيارة مصر", route: "ar/afdal-waqt-lizyarat-masr.html" },
    { label: "رحلات مصر الخاصة", route: "ar/rehlat-masr-khassa.html" },
    { label: "رحلة نيلية خاصة", route: "ar/rehla-niliya-khassa.html" },
  ],
};
