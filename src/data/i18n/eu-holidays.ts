// ---------------------------------------------------------------------------
// European holiday-window pages — one per market, no English original.
//
// WHY THESE AND NOT MORE TRANSLATED PAGES
// Europe is where the traffic already is, and the European locales already
// carry the eight funnel pages. What none of them carry is the thing a
// European actually types three months before they book: the name of their own
// holiday next to the word Egypt. "Vacances de la Toussaint en Égypte" is a
// French search; nobody else publishes it in French. Each of these is a real
// window in one country's calendar, and each makes a different argument:
//
//   fr  Toussaint      the two weeks that land in the best month of the year
//   es  Semana Santa   spring on the Nile, and the computus moves it yearly
//   it  Ferragosto     the contrarian one — August is wrong for Luxor and
//                      right for the Red Sea, said plainly rather than sold
//   de  Weihnachten    winter sun against Christmas at home, and the single
//                      most contested fortnight in Egypt
//   ru  Новый год      the ten-day Russian holiday, the country's biggest
//                      travel window of the year
//
// Five holidays, five seasons, five arguments. None is a translation of
// another, and the German and Russian pages — both in winter — are arguing
// different things to different readers.
//
// EVERY DATE AND FIGURE IS READ, NOT TYPED. Easter comes from the computus,
// temperatures and sea temperatures from the month guide, prices from the
// catalogue. Each page rolls its own year forward once its window has passed,
// so none of them can quietly go stale. This is the pattern pt-carnaval
// established; it is followed here rather than reinvented.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import { tours } from "@/data/tours";
import { findMonth } from "@/data/months";
import { weihnachtenLanding, SEASON_Y } from "@/data/landing/christmas-de";

// --- date machinery ---------------------------------------------------------
const DAY = 86_400_000;
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * DAY);
const now = new Date();
const THIS_YEAR = now.getUTCFullYear();

/** Gregorian Easter (anonymous computus), as a UTC date. */
function easter(y: number): Date {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(y, month - 1, day));
}

/**
 * The year the NEXT occurrence of a fixed date falls in. A few days of grace
 * after the window so a page does not jump to next year while the holiday is
 * still running.
 */
const yearOf = (month: number, day: number, grace = 3) =>
  now > new Date(Date.UTC(THIS_YEAR, month - 1, day + grace)) ? THIS_YEAR + 1 : THIS_YEAR;

const fmt = (loc: string, opts: Intl.DateTimeFormatOptions) => (d: Date) =>
  d.toLocaleDateString(loc, { timeZone: "UTC", ...opts });

const tour = (slug: string) => tours.find((t) => t.slug === slug)!;
const price = (slug: string) => `${tour(slug).price.toLocaleString("de-DE")} €`;

const oct = findMonth("october")!;
const nov = findMonth("november")!;
const mar = findMonth("march")!;
const apr = findMonth("april")!;
const aug = findMonth("august")!;
const dec = findMonth("december")!;
const jan = findMonth("january")!;

// ===== FRANÇAIS — Toussaint ================================================
const TOUSSAINT_Y = yearOf(11, 1, 10);
const frDate = fmt("fr-FR", { day: "numeric", month: "long" });
const frDateY = fmt("fr-FR", { day: "numeric", month: "long", year: "numeric" });
// The French autumn break runs roughly the fortnight around 1 November.
const TS_START = new Date(Date.UTC(TOUSSAINT_Y, 9, 18));
const TS_END = new Date(Date.UTC(TOUSSAINT_Y, 10, 3));

export const frToussaint: LocalizedPage = {
  groupId: "standalone-fr-toussaint",
  symbol: "sun",
  title: `Vacances de la Toussaint en Égypte ${TOUSSAINT_Y} | Kemet`,
  description:
    `Partir en Égypte à la Toussaint ${TOUSSAINT_Y} : la saison qui s'ouvre, la mer Rouge à ${oct.seaTemp}, le 22 octobre à Abou Simbel, et des circuits privés avec leurs prix.`,
  keywords:
    "vacances toussaint egypte, egypte octobre novembre, voyage egypte vacances scolaires, circuit egypte automne, croisiere nil toussaint",
  crumb: "Toussaint en Égypte",
  h1: "La Toussaint tombe pile sur le changement de saison",
  standfirst:
    `Du ${frDate(TS_START)} au ${frDateY(TS_END)} — deux semaines pendant lesquelles la Haute-Égypte passe de l'été à la saison.`,
  lede:
    `Personne ne vous dira que fin octobre il fait frais à Louxor : il y fait encore ${oct.temps.luxor}. Ce qui rend cette fenêtre intéressante est ailleurs. La bascule se produit pendant ces deux semaines — début novembre Louxor est retombé à ${nov.temps.luxor} — la mer Rouge est à ${oct.seaTemp}, ce qui est son meilleur niveau de l'année, et ni les prix ni la foule n'ont encore atteint ceux de décembre. Pour une famille française, c'est la seule fenêtre où les congés scolaires rencontrent tout cela en même temps.`,
  facts: [
    { label: "Fenêtre", value: `${frDate(TS_START)} – ${frDate(TS_END)}` },
    { label: "Louxor fin octobre", value: oct.temps.luxor },
    { label: "Louxor début novembre", value: nov.temps.luxor },
    { label: "Mer Rouge", value: oct.seaTemp },
  ],
  sections: [
    {
      title: "Ce qu'il faut savoir sur la chaleur, dit franchement",
      body:
        `Fin octobre, la Haute-Égypte est encore chaude : ${oct.temps.luxor} à Louxor, ${oct.temps.aswan} à Assouan. Le Caire est nettement plus doux, à ${oct.temps.cairo}. Concrètement, la première semaine se visite le matin — départ à sept heures, retour vers midi — et l'après-midi se passe à la piscine ou au musée. À partir du 1er novembre Louxor redescend à ${nov.temps.luxor} et les journées redeviennent complètes. Si vous avez le choix, placez la moitié Haute-Égypte de votre voyage sur la seconde semaine.`,
    },
    {
      title: "Ce que deux semaines permettent réellement",
      body:
        `Dix jours sur place couvrent Le Caire, Louxor, la croisière sur le Nil et Assouan sans courir — c'est la forme de notre circuit de ${/^(\d+)/.exec(tour("tour-10-day").durationLabel)?.[1]} jours, à partir de ${price("tour-10-day")} par personne. Avec quatorze jours on ajoute Abou Simbel sans réveil à quatre heures, ou quelques jours en mer Rouge à la fin. Une semaine seule suffit pour Le Caire et Louxor, et c'est déjà un vrai voyage.`,
    },
    {
      title: "Le 22 octobre, à Abou Simbel",
      body:
        `Deux fois par an seulement, le soleil levant pénètre jusqu'au sanctuaire d'Abou Simbel : le 22 février et le 22 octobre. La seconde date tombe en pleine fenêtre de la Toussaint, ce qui la rend infiniment plus facile à intégrer qu'en février. Ce matin-là se réserve très longtemps à l'avance ; si vos dates le permettent, dites-le nous dès le premier échange.`,
    },
    {
      title: "Ce qu'il faut réserver tôt, et ce qui peut attendre",
      body:
        "Tôt : les dahabiehs, les bons égyptologues francophones et les chambres avec vue sur le Nil — deux à trois mois. Cela peut attendre : les vols intérieurs, les entrées, les transferts. C'est pourquoi nous demandons d'abord vos dates et le nombre de voyageurs, puis nous discutons du reste : ce sont les deux seules informations qui bloquent les éléments contestés.",
    },
  ],
  highlights: {
    heading: "Ce que la Toussaint a de particulier",
    items: [
      `La bascule : ${oct.temps.luxor} fin octobre, ${nov.temps.luxor} début novembre`,
      "Le 22 octobre à Abou Simbel, si vos dates le permettent",
      `La mer Rouge à ${oct.seaTemp} — son meilleur niveau de l'année`,
      "Des tarifs qui n'ont pas encore atteint les sommets de Noël",
      "Deux semaines : assez pour le Nil complet, pas seulement Le Caire",
    ],
  },
  faqs: [
    { q: "Fait-il trop chaud fin octobre ?", a: `Pas trop, mais il fait chaud : ${oct.temps.luxor} à Louxor, ${oct.temps.cairo} au Caire. On visite le matin et on s'arrête aux heures les plus chaudes. Début novembre Louxor est à ${nov.temps.luxor} et la question ne se pose plus. Nous construisons le programme en conséquence plutôt que de prétendre le contraire.` },
    { q: "Deux semaines, est-ce trop pour l'Égypte ?", a: "Non — c'est la durée qui permet de ne pas choisir. Dix jours couvrent Le Caire, Louxor, le Nil et Assouan ; les quatre restants ajoutent Abou Simbel, Alexandrie ou la mer Rouge, au choix." },
    { q: "Y a-t-il beaucoup de monde pendant les vacances scolaires ?", a: "Moins qu'à Noël et à Pâques, nettement. L'affluence est modérée fin octobre et monte d'un cran en novembre ; elle n'atteint son maximum qu'à la mi-décembre. Nos départs matinaux vous placent devant les groupes dans tous les cas." },
    { q: "Quand faut-il réserver pour la Toussaint ?", a: "Deux à trois mois avant, et davantage si vous visez une dahabieh ou le 22 octobre à Abou Simbel. Ce sont les deux éléments qui partent en premier ; le reste se cale ensuite." },
  ],
  cta: {
    heading: "Dites-nous vos dates de Toussaint",
    text: "Les dates exactes de vos congés et le nombre de voyageurs suffisent pour un itinéraire écrit et un prix détaillé.",
    whatsapp: "Bonjour Kemet — nous pensons à l'Égypte pour les vacances de la Toussaint.",
    emailSubject: "Toussaint en Égypte — demande d'itinéraire",
  },
  moreLabel: "Aller plus loin",
  moreRoute: "fr/voyage-egypte.html",
  moreText:
    "Tous nos itinéraires, avec leur déroulé jour par jour, sont sur la page des voyages. Le catalogue complet est en anglais.",
  links: [
    { label: "Quand partir en Égypte", route: "fr/quand-partir-en-egypte.html" },
    { label: "Prix d'un voyage en Égypte", route: "fr/prix-voyage-egypte.html" },
  ],
};

// ===== ESPAÑOL — Semana Santa ==============================================
const SS_Y = now > easter(THIS_YEAR) ? THIS_YEAR + 1 : THIS_YEAR;
const EASTER = easter(SS_Y);
const PALM = addDays(EASTER, -7);
const esDate = fmt("es-ES", { day: "numeric", month: "long" });
const esDateY = fmt("es-ES", { day: "numeric", month: "long", year: "numeric" });
const ssMonth = EASTER.getUTCMonth() === 2 ? mar : apr;
/**
 * Easter swings by a month, and Upper Egypt does not feel the same at either
 * end of that swing: Luxor is 28–31°C in March and 34–37°C in April. The page
 * cannot claim "comfortable walking" in both cases, so the claim is derived
 * from which month the computus actually landed on this year.
 */
const SS_IS_MARCH = EASTER.getUTCMonth() === 2;
const SS_WALK = SS_IS_MARCH
  ? `se camina cómodamente a cualquier hora: ${mar.temps.luxor} en Luxor y ${mar.temps.cairo} en El Cairo`
  : `ya aprieta en el Alto Egipto — ${apr.temps.luxor} en Luxor — de modo que se visita por la mañana y se para a mediodía; El Cairo, a ${apr.temps.cairo}, sigue siendo llevadero`;

export const esSemanaSanta: LocalizedPage = {
  groupId: "standalone-es-semanasanta",
  symbol: "lotus",
  title: `Semana Santa en Egipto ${SS_Y} — viajes privados | Kemet`,
  description:
    `Semana Santa ${SS_Y} en Egipto: del ${esDate(PALM)} al ${esDate(EASTER)}, con ${ssMonth.temps.luxor} en Luxor. Itinerarios privados con precio y qué reservar con antelación.`,
  keywords:
    "semana santa en egipto, viaje egipto semana santa, egipto en primavera, crucero nilo semana santa, vacaciones egipto abril",
  crumb: "Semana Santa",
  h1: "Semana Santa en Egipto",
  standfirst:
    `Del ${esDate(PALM)} al ${esDateY(EASTER)} — primavera en el Nilo, y la última ventana buena antes del calor.`,
  lede:
    `Semana Santa cae al final de la temporada alta egipcia, y eso tiene dos consecuencias opuestas que conviene conocer antes de reservar. La primera: en ${SS_Y} la Semana Santa cae en ${ssMonth.name.toLowerCase() === "march" ? "marzo" : "abril"}, y Egipto ${SS_WALK}. La segunda: es una de las tres semanas más disputadas del año, y se reserva con meses de antelación o no se reserva.`,
  facts: [
    { label: "Domingo de Ramos", value: esDate(PALM) },
    { label: "Domingo de Resurrección", value: esDateY(EASTER) },
    { label: "Luxor de día", value: ssMonth.temps.luxor },
    { label: "Reservar", value: "3 meses antes" },
  ],
  sections: [
    {
      title: "La primavera en el valle del Nilo",
      body:
        SS_IS_MARCH
          ? `Marzo es el último mes en que Egipto se camina cómodamente a cualquier hora: ${mar.temps.luxor} en Luxor, ${mar.temps.cairo} en El Cairo, y noches frescas en la cubierta de un barco. A partir de mayo la cosa cambia deprisa, y en junio las visitas ya se hacen al amanecer. Con la Semana Santa en marzo, ha tocado usted el buen extremo del calendario.`
          : `Con la Semana Santa en abril, el Alto Egipto ya va caliente: ${apr.temps.luxor} en Luxor y ${apr.temps.aswan} en Asuán. No es un impedimento, es un horario: salida temprano, Valle de los Reyes a la apertura, vuelta al hotel hacia mediodía y de nuevo fuera a última hora. El Cairo, a ${apr.temps.cairo}, aguanta el día entero. Lo decimos antes y organizamos el día en consecuencia, en lugar de fingir que abril es marzo.`,
    },
    {
      title: "El jamsín, dicho sin rodeos",
      body:
        "Entre marzo y mayo puede soplar el jamsín, un viento cálido del desierto que levanta polvo y enturbia el aire durante uno o dos días. No es peligroso ni frecuente, pero sí real, y ningún folleto lo menciona. Si ocurre durante su viaje, reordenamos el día: museos e interiores en lugar de plataformas abiertas. Se pierde una vista, no un día.",
    },
    {
      title: "Qué se agota primero",
      body:
        "Las dahabiyas completas, los egiptólogos que guían en español y las habitaciones con vistas al Nilo, por ese orden. Tres meses es lo razonable para Semana Santa; dos es apurado; con menos, lo que cambia no es si viaja, sino qué barco y qué guía le tocan. Se lo diremos con franqueza antes de que se comprometa.",
    },
    {
      title: "Cuántos días caben",
      body:
        `Si encadena Semana Santa con unos días de vacaciones, diez días cubren El Cairo, Luxor, el crucero por el Nilo y Asuán sin prisas — es la forma de nuestro itinerario de ${/^(\d+)/.exec(tour("tour-10-day").durationLabel)?.[1]} días, desde ${price("tour-10-day")} por persona. Con solo la semana santa propiamente dicha, El Cairo y Luxor entran bien y el viaje sigue mereciendo la pena.`,
    },
  ],
  faqs: [
    { q: "¿Hace calor en Semana Santa?", a: SS_IS_MARCH
        ? `Todavía no. Luxor está a ${mar.temps.luxor} durante el día y El Cairo a ${mar.temps.cairo}. Es agradable para caminar, que es exactamente lo que se deja de poder hacer unas semanas después.`
        : `En el Alto Egipto sí: Luxor a ${apr.temps.luxor}. Se resuelve con el horario — mañanas tempranas y parada a mediodía — no con optimismo. El Cairo, a ${apr.temps.cairo}, se lleva bien todo el día.` },
    { q: "¿Se celebra la Semana Santa en Egipto?", a: "Sí, y de dos maneras. La Semana Santa copta suele caer en fechas distintas a la católica, y el lunes siguiente es Sham El-Nessim, la fiesta de primavera del país entero: todo Egipto sale al aire libre. Si sus fechas coinciden, es un día extraordinario para estar aquí." },
    { q: "¿Hay guías que hablen español?", a: "Sí, trabajamos con egiptólogos titulados que guían en español. Dígalo al planificar: en Semana Santa son pocos y se comprometen con mucha antelación." },
    { q: "¿Merece la pena con niños?", a: "Mucho, y la primavera es el mejor momento para ello: el calor aún no obliga a madrugar tanto. Acortamos las mañanas y dejamos tiempo de piscina, que es lo que hace que un niño recuerde el viaje y no el cansancio." },
  ],
  cta: {
    heading: "Cuéntenos sus fechas",
    text: "Las fechas exactas y cuántos viajan bastan para un itinerario escrito y un precio detallado, sin compromiso.",
    whatsapp: "Hola Kemet — estamos pensando en Egipto para Semana Santa.",
    emailSubject: "Semana Santa en Egipto — solicitud de itinerario",
  },
  moreLabel: "Seguir leyendo",
  moreRoute: "es/viajes-a-egipto.html",
  moreText:
    "Todos nuestros itinerarios, con su desarrollo día a día, están en la página de viajes. El catálogo completo está en inglés.",
  links: [
    { label: "Mejor época para viajar a Egipto", route: "es/mejor-epoca-para-viajar-a-egipto.html" },
    { label: "Cuánto cuesta viajar a Egipto", route: "es/cuanto-cuesta-viajar-a-egipto.html" },
  ],
};

// ===== ITALIANO — Ferragosto ===============================================
const FERRA_Y = yearOf(8, 15, 5);
const itDateY = fmt("it-IT", { day: "numeric", month: "long", year: "numeric" });
const FERRAGOSTO = new Date(Date.UTC(FERRA_Y, 7, 15));

export const itFerragosto: LocalizedPage = {
  groupId: "standalone-it-ferragosto",
  symbol: "boat",
  title: `Ferragosto in Egitto ${FERRA_Y} — dove funziona davvero | Kemet`,
  description:
    `Ferragosto ${FERRA_Y} in Egitto: il Mar Rosso a ${aug.seaTemp} è la risposta giusta, la valle del Nilo quasi no. Cosa funziona ad agosto, cosa no, e i prezzi.`,
  keywords:
    "ferragosto in egitto, egitto ad agosto, mar rosso agosto, vacanze estive egitto, sharm ferragosto, crociera nilo estate",
  crumb: "Ferragosto",
  h1: "Ferragosto in Egitto: metà sì, metà no",
  standfirst:
    `${itDateY(FERRAGOSTO)} — il Mar Rosso è al suo meglio assoluto, la valle del Nilo è a ${aug.temps.aswan}. Sono due viaggi diversi.`,
  lede:
    "Quasi tutti gli operatori vi diranno che agosto in Egitto va benissimo. Non è vero, e non è nemmeno falso: dipende interamente da dove andate. Il Mar Rosso ad agosto è semplicemente il posto migliore del Mediterraneo allargato per stare in acqua. Luxor e Assuan ad agosto sono un'altra cosa, e chi ve lo vende senza dirvelo non vi sta facendo un favore.",
  facts: [
    { label: "Mar Rosso, acqua", value: aug.seaTemp },
    { label: "Assuan di giorno", value: aug.temps.aswan },
    { label: "Prezzi", value: "i più bassi dell'anno" },
    { label: "Visite in valle", value: "dalle 6 alle 11" },
  ],
  sections: [
    {
      title: "Il Mar Rosso: la parte che funziona senza riserve",
      body:
        `Acqua a ${aug.seaTemp}, visibilità che d'inverno non si vede, e la barriera di Ras Mohammed e di Tiran al massimo. Ad agosto non serve la muta, le giornate sono lunghe e i voli diretti da Milano e Roma verso Sharm e Hurghada sono al loro massimo di frequenza. Se il viaggio è mare, immersioni e riposo, agosto non è un compromesso: è la stagione.`,
    },
    {
      title: "La valle del Nilo: come si fa, se proprio la volete",
      body:
        `Assuan supera regolarmente i ${aug.temps.aswan.split("–").pop()}, e questo non si aggira. Si aggira l'orario: partenza alle sei, Valle dei Re all'apertura, rientro in hotel entro le undici, e si esce di nuovo verso le cinque. Fatta così è assolutamente fattibile, e in cambio i templi sono praticamente vuoti — il che ad agosto non capita da nessun'altra parte al mondo per monumenti di questo livello.`,
    },
    {
      title: "Quello che ad agosto costa la metà",
      body:
        "I prezzi egiziani di agosto non somigliano a quelli di febbraio. Gli stessi alberghi, le stesse navi e le stesse dahabiye scendono sensibilmente, a volte del quaranta o cinquanta per cento, perché il mercato europeo sta altrove. Per una famiglia numerosa la differenza tra agosto e Natale sullo stesso itinerario è spesso la differenza tra andare e rimandare.",
    },
    {
      title: "La forma che consigliamo per Ferragosto",
      body:
        `Il Cairo per due o tre giorni con mattine presto — le piramidi all'apertura e il Grand Egyptian Museum, che è al chiuso e climatizzato — e poi il Mar Rosso per il resto. È l'ordine giusto: le visite quando si è freschi, il mare quando non si ha più voglia di camminare. Se invece volete il Nilo per intero, ve lo organizziamo, ma con l'orario di cui sopra e detto chiaramente prima.`,
    },
  ],
  highlights: {
    heading: "Ad agosto, in breve",
    items: [
      `Mar Rosso: acqua a ${aug.seaTemp}, il periodo migliore dell'anno`,
      `Valle del Nilo: ${aug.temps.luxor} a Luxor — visite solo all'alba`,
      "Prezzi ai minimi: alberghi e barche molto sotto le tariffe invernali",
      "Templi quasi vuoti, per chi sopporta il caldo",
      "Voli diretti da Milano e Roma al massimo della frequenza",
    ],
  },
  faqs: [
    { q: "Si può davvero visitare Luxor a Ferragosto?", a: `Sì, con l'orario giusto: dalle sei alle undici e poi di nuovo nel tardo pomeriggio. Assuan tocca i ${aug.temps.aswan.split("–").pop()} e non si finge il contrario, ma i siti sono vuoti e i prezzi sono un'altra cosa.` },
    { q: "Meglio Sharm o Hurghada ad agosto?", a: "Sharm ha la barriera migliore — Ras Mohammed e Tiran sono di un altro livello — e un mare più riparato. Hurghada ha più voli e sta più vicina a Luxor se volete combinare. Per le immersioni: Sharm. Per una famiglia che vuole anche i templi: Hurghada." },
    { q: "Fa troppo caldo per i bambini?", a: "Sul Mar Rosso no, è la situazione classica di mare d'agosto. Nella valle del Nilo va gestita: mattine corte, pausa lunga, tanta acqua. Con bambini piccoli consigliamo di tenere la valle a due o tre giorni e dare il resto al mare." },
    { q: "Quanto si risparmia rispetto a dicembre?", a: "Molto, e non è marginale: gli stessi alberghi e le stesse barche stanno spesso sotto della metà. È il motivo principale per cui Ferragosto ha senso, insieme al mare." },
  ],
  cta: {
    heading: "Diteci che tipo di Ferragosto",
    text: "Solo mare, o mare più qualche giorno di templi? Con le date e il numero di persone vi mandiamo un itinerario vero e il prezzo.",
    whatsapp: "Buongiorno Kemet — stiamo pensando all'Egitto per Ferragosto.",
    emailSubject: "Ferragosto in Egitto — richiesta itinerario",
  },
  moreLabel: "Continuare",
  moreRoute: "it/viaggi-in-egitto.html",
  moreText:
    "Tutti i nostri itinerari, giorno per giorno, sono nella pagina dei viaggi. Il catalogo completo è in inglese.",
  links: [
    { label: "Quando andare in Egitto", route: "it/quando-andare-in-egitto.html" },
    { label: "Crociera sul Nilo", route: "it/crociera-sul-nilo.html" },
  ],
};

// ===== DEUTSCH — Weihnachten & Silvester ===================================
// The season year comes from the landing layer this page carries, not from
// yearOf(): the two used different rollover dates, so between 1 and 7 January
// the <title> was offering next December while the landing run on the same
// page was still selling the week that was running. One rule, one place.
const XMAS_Y = SEASON_Y;
const deDateY = fmt("de-DE", { day: "numeric", month: "long", year: "numeric" });
const NYE = new Date(Date.UTC(XMAS_Y, 11, 31));

export const deWeihnachten: LocalizedPage = {
  groupId: "standalone-de-weihnachten",
  symbol: "ankh",
  title: `Weihnachten & Silvester in Ägypten ${XMAS_Y} | Kemet`,
  description:
    `Weihnachten und Silvester ${XMAS_Y} in Ägypten: ${dec.temps.luxor} in Luxor, Silvester auf dem Nil, private Rundreisen mit Preis — und warum jetzt gebucht wird.`,
  keywords:
    "weihnachten in aegypten, silvester aegypten, aegypten winterurlaub, nilkreuzfahrt weihnachten, aegypten rundreise dezember",
  crumb: "Weihnachten & Silvester",
  // The campaign face of this page — see data/landing/christmas-de.ts. The
  // whole German page below is unchanged; the landing run is inserted above
  // it. This is the only localised page that carries one, because it is the
  // only one the site advertises in its own language.
  landing: weihnachtenLanding,
  h1: "Weihnachten und Silvester in Ägypten",
  standfirst:
    `${dec.temps.luxor} in Luxor, während es zu Hause dunkel ist — und die am stärksten umkämpften zwei Wochen des ägyptischen Jahres.`,
  lede:
    `Es gibt einen guten Grund, warum diese Wochen in Ägypten die teuersten des Jahres sind: Dezember ist klimatisch nahezu perfekt. Luxor liegt bei ${dec.temps.luxor}, die Luft ist klar, und man kann eine Tempelanlage auch um drei Uhr nachmittags zu Fuß erkunden. Der Preis dafür ist, dass alle anderen dieselbe Rechnung aufgemacht haben — und die guten Schiffe und Zimmer ein halbes Jahr vorher weg sind.`,
  facts: [
    { label: "Luxor tagsüber", value: dec.temps.luxor },
    { label: "Kairo tagsüber", value: dec.temps.cairo },
    { label: "Silvester", value: deDateY(NYE) },
    { label: "Buchen", value: "4 bis 6 Monate vorher" },
  ],
  sections: [
    {
      title: "Warum Dezember klimatisch stimmt",
      body:
        `Trockene Luft, klare Sicht, ${dec.temps.luxor} in Luxor und ${dec.temps.cairo} in Kairo. Das ist das Wetter, für das Ägypten eigentlich gebaut ist: Man steht mittags im Karnak-Tempel, ohne zu leiden. Die Abende sind kühl — auf dem Sonnendeck eines Schiffes braucht man eine Jacke, was regelmäßig überrascht.`,
    },
    {
      title: "Silvester auf dem Nil",
      body:
        "Die Schiffe und die großen Häuser in Luxor und Assuan machen aus dem 31. Dezember einen eigenen Abend, und ein Dinner an Deck mit dem Westufer im Dunkeln dahinter ist eine andere Sache als ein Hotelsaal. Das ist allerdings auch der Abend, der als Erstes ausgebucht ist: Wer Silvester auf dem Wasser verbringen will, entscheidet das im Sommer, nicht im November.",
    },
    {
      title: "Das koptische Weihnachten am 7. Januar",
      body:
        "Ägyptens eigenes Weihnachtsfest fällt auf den 7. Januar, und wer bis dahin bleibt, erlebt in Alt-Kairo etwas, das keine Reisegruppe auf dem Programm hat. Die Preise fallen nach dem 3. oder 4. Januar spürbar, und die Sehenswürdigkeiten leeren sich. Die zweite Januarwoche ist, nüchtern betrachtet, die bessere Reisezeit als die erste.",
    },
    {
      title: "Was das kostet, und woran es liegt",
      body:
        `Unsere ${/^(\d+)/.exec(tour("tour-10-day").durationLabel)?.[1]}-Tage-Rundreise beginnt bei ${price("tour-10-day")} pro Person; über Weihnachten und Silvester liegt der Aufschlag im Bereich der Hotel- und Schiffszuschläge, die uns selbst berechnet werden — wir geben sie weiter und weisen sie im Angebot getrennt aus, statt sie im Gesamtpreis verschwinden zu lassen. Wer flexibel ist: Anfang Dezember und die zweite Januarhälfte kosten deutlich weniger bei praktisch gleichem Wetter.`,
    },
  ],
  highlights: {
    heading: "Kurz gefasst",
    items: [
      `Luxor bei ${dec.temps.luxor} — Besichtigungen auch nachmittags`,
      "Silvester an Deck: der erste Termin, der ausgebucht ist",
      "Koptisches Weihnachten am 7. Januar in Alt-Kairo",
      "Ab dem 4. Januar fallen Preise und Besucherzahlen deutlich",
      "Abends kühl: eine Jacke gehört ins Gepäck",
    ],
  },
  faqs: [
    { q: "Wie früh muss man für Silvester buchen?", a: "Vier bis sechs Monate, und für eine ganze Dahabiya oder eine Nilsuite eher mehr. Das ist keine Verkaufstaktik: Es sind schlicht wenige gute Schiffe, und sie sind im Sommer vergeben." },
    { q: "Ist es an Weihnachten in Ägypten warm genug zum Baden?", a: `Am Roten Meer ja — das Wasser liegt bei ${dec.seaTemp}, was für die meisten angenehm ist. Im Nil wird nicht gebadet, und die Hotelpools in Oberägypten sind im Dezember eine Frage der Tapferkeit, sofern sie nicht beheizt sind.` },
    { q: "Lohnt sich die Woche nach Neujahr mehr?", a: "Preislich eindeutig, klimatisch gleichwertig. Wenn Sie nicht an Schulferien gebunden sind, ist die zweite Januarhälfte die vernünftigste Reisezeit des ganzen Winters." },
    { q: "Gibt es deutschsprachige Ägyptologen?", a: "Ja, und wir arbeiten regelmäßig mit ihnen. Über Weihnachten sind sie allerdings genauso früh vergeben wie die Schiffe — sagen Sie es bei der ersten Anfrage, nicht bei der Bestätigung." },
  ],
  cta: {
    heading: "Sagen Sie uns Ihre Termine",
    text: "Reisezeitraum und Personenzahl genügen für einen echten Reiseverlauf mit ausgewiesenem Preis — unverbindlich.",
    whatsapp: "Guten Tag Kemet — wir überlegen, Weihnachten oder Silvester in Ägypten zu verbringen.",
    emailSubject: "Weihnachten in Ägypten — Anfrage",
  },
  moreLabel: "Weiterlesen",
  moreRoute: "de/aegypten-reisen.html",
  moreText:
    "Alle Reiseverläufe Tag für Tag finden Sie auf der Reisen-Seite. Der vollständige Katalog ist auf Englisch.",
  links: [
    { label: "Beste Reisezeit für Ägypten", route: "de/beste-reisezeit-aegypten.html" },
    { label: "Was eine Ägypten-Reise kostet", route: "de/aegypten-reise-kosten.html" },
  ],
};

// ===== РУССКИЙ — Новогодние каникулы =======================================
const RU_NY_Y = yearOf(1, 8, 2) === THIS_YEAR ? THIS_YEAR : THIS_YEAR + 1;
const NY_START = new Date(Date.UTC(RU_NY_Y - 1, 11, 31));
const NY_END = new Date(Date.UTC(RU_NY_Y, 0, 8));
const ruDate = fmt("ru-RU", { day: "numeric", month: "long" });

export const ruNovyGod: LocalizedPage = {
  groupId: "standalone-ru-novy-god",
  symbol: "sun",
  title: `Новый год в Египте ${RU_NY_Y} — частные туры | Kemet`,
  description:
    `Новогодние каникулы ${RU_NY_Y} в Египте: ${jan.temps.luxor} в Луксоре, море ${jan.seaTemp}, частные маршруты с ценами и что бронировать заранее.`,
  keywords:
    "новый год в египте, египет на новогодние каникулы, египет в январе, круиз по нилу новый год, хургада новый год",
  crumb: "Новый год",
  h1: "Новогодние каникулы в Египте",
  standfirst:
    `С ${ruDate(NY_START)} по ${ruDate(NY_END)} — десять дней подряд, и это единственный длинный отпуск в году, который совпадает с лучшим сезоном в долине Нила.`,
  lede:
    `Десятидневные каникулы — редкая возможность: столько времени подряд не бывает больше ни разу за год. И они приходятся ровно на тот месяц, когда Египет наиболее пригоден для осмотра: ${jan.temps.luxor} в Луксоре, сухой воздух, чистый свет. Плата за это — что так думают все, и хорошие теплоходы и номера уходят за полгода.`,
  facts: [
    { label: "Каникулы", value: `${ruDate(NY_START)} – ${ruDate(NY_END)}` },
    { label: "Луксор днём", value: jan.temps.luxor },
    { label: "Красное море", value: jan.seaTemp },
    { label: "Бронировать", value: "за 4–6 месяцев" },
  ],
  sections: [
    {
      title: "Не только море",
      body:
        "Для большинства российских путешественников Египет — это Хургада и Шарм, и это понятно: прямые рейсы, всё включено, минимум хлопот. Но десять дней — это слишком много для пляжа и ровно столько, сколько нужно, чтобы наконец увидеть то, ради чего в Египет вообще ездят: Гизу, Большой Египетский музей, Луксор и Нил. Комбинация работает лучше всего именно в эти даты.",
    },
    {
      title: "Как выглядят десять дней",
      body:
        `Каир на три дня — пирамиды на открытии и Большой Египетский музей, на который нужно полдня, а не час. Перелёт в Луксор, Долина царей и Карнак. Затем Нил до Асуана на теплоходе или дахабии, три-четыре ночи. И, если хочется, два-три дня на Красном море в конце. Это форма нашего маршрута на ${/^(\d+)/.exec(tour("tour-10-day").durationLabel)?.[1]} дней, от ${price("tour-10-day")} на человека.`,
    },
    {
      title: "Что уходит первым",
      body:
        "Дахабии целиком, русскоговорящие египтологи и номера с видом на Нил — именно в таком порядке. Четыре-шесть месяцев для новогодних дат это норма, а не перестраховка. При более позднем обращении вопрос уже не в том, поедете ли вы, а в том, какое судно и какой гид останутся, — и мы скажем это прямо до того, как вы внесёте предоплату.",
    },
    {
      title: "После 4 января становится заметно дешевле",
      body:
        "Пик — это последняя неделя декабря и первые три-четыре дня января. Дальше цены ощутимо падают, а погода не меняется вовсе. Если вы не привязаны к школьным каникулам, вторая половина января — самое разумное время всей зимы: тот же климат, вдвое спокойнее и значительно дешевле.",
    },
  ],
  highlights: {
    heading: "Коротко",
    items: [
      `Луксор ${jan.temps.luxor} — осматривать можно и после обеда`,
      `Красное море ${jan.seaTemp}: купаться комфортно, дайвинг отличный`,
      "Десять дней — достаточно для Каира, Луксора, Нила и моря",
      "Пик цен до 4 января; дальше заметно дешевле",
      "Вечера прохладные — на палубе нужна куртка",
    ],
  },
  faqs: [
    { q: "За сколько бронировать на Новый год?", a: "За четыре-шесть месяцев, а для полной дахабии или номера с видом на Нил — раньше. Это не приём продаж: хороших судов немного, и летом они уже расписаны." },
    { q: "Можно ли купаться в январе?", a: `На Красном море да: вода ${jan.seaTemp}, и для большинства это комфортно. В Ниле не купаются, а бассейны в Верхнем Египте в январе — вопрос характера, если они не с подогревом.` },
    { q: "Есть ли русскоговорящие гиды?", a: "Да, мы работаем с лицензированными египтологами, которые ведут экскурсии по-русски. На новогодние даты их разбирают заранее — скажите об этом в первом же сообщении, а не при подтверждении." },
    { q: "Стоит ли ехать после каникул?", a: "Если вы не связаны школьным расписанием — безусловно. Вторая половина января даёт ту же погоду при значительно меньших ценах и заметно меньшем количестве людей." },
  ],
  cta: {
    heading: "Назовите даты",
    text: "Даты и число путешественников — этого достаточно для настоящего маршрута с подробной ценой, без обязательств.",
    whatsapp: "Здравствуйте, Kemet — думаем о Египте на новогодние каникулы.",
    emailSubject: "Новый год в Египте — запрос маршрута",
  },
  moreLabel: "Дальше",
  moreRoute: "ru/tury-v-egipet.html",
  moreText:
    "Все маршруты с разбивкой по дням — на странице туров. Полный каталог опубликован на английском.",
  links: [
    { label: "Когда лучше ехать в Египет", route: "ru/kogda-luchshe-ehat-v-egipet.html" },
    { label: "Сколько стоит поездка в Египет", route: "ru/stoimost-tura-v-egipet.html" },
  ],
};
