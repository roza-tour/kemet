// ---------------------------------------------------------------------------
// Easter in Egypt — the German, French, Italian and Brazilian Portuguese pages.
//
// The English original is collections/easter-in-egypt.html (collections.ts),
// and the facts here are the facts there: two Easters in most years, the
// Western one and the Coptic Orthodox one (Egypt's own, on the Julian
// reckoning); Coptic Holy Week in Cairo — palm crosses on Palm Sunday, the
// Saturday-night liturgy that ends after midnight, the 55-day fast broken at
// home with kahk; Sham El-Nessim on the Monday after, a national holiday for
// everyone; the last easy weeks in the Nile Valley and the khamaseen; Western
// Easter week as Egypt's peak, Coptic Easter and Sham El-Nessim as the weeks
// Egyptians travel. Monuments and museums open throughout.
//
// EVERY DATE IS COMPUTED, NEVER TYPED. The Easter dates come from
// data/easter.ts (EASTER, EASTER_Y), the temperatures from the month guide
// (data/months.ts) for the month the computus actually lands in. The text
// switches on EASTER.same (both Easters on one Sunday, as in 2028) and on
// EASTER.gap, so it stays true as the pages roll to the next season by
// themselves. In a "same" year Easter Monday IS Sham El-Nessim, so the line
// "Western Easter Monday is a working day" is only written when they differ.
//
// NOT TRANSLATIONS. Each edition writes for its own market:
//   de  Osterferien around Western Easter, Karfreitag and Ostermontag at home
//   fr  the Easter weekend and lundi de Pâques (Belgium, Switzerland too),
//       the spring holidays by zone, without zone dates
//   it  Pasqua and Pasquetta, and — computed from EASTER.orthodox — where
//       25 aprile and 1° maggio land against Coptic Holy Week
//   pt  Brazilian Portuguese: Sexta-feira Santa as a long weekend in Brazil
//       and Portugal, and Easter in Brazil's autumn against Egypt's spring
//
// The guide's gender is never stated (as in data/eclipseDay-i18n.ts): German
// "ägyptologische Reiseleitung", French "votre égyptologue", Italian "guida",
// Portuguese "guia" with no article.
//
// Standalone pages: the English original is a collection with its own
// template, so these cannot form a translation group (see standalone.ts).
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import type { MediaPlaceholder } from "@/types/primitives";
import { EASTER, EASTER_Y, fmtDay } from "@/data/easter";
import { findMonth } from "@/data/months";

/** The English original, linked from every edition's "more" line. */
const EN_PAGE = "collections/easter-in-egypt.html";

// --- dates and weather, read from the computus and the month guide ----------
const DAY = 86_400_000;
/** Days from Coptic Easter Sunday to an ISO day: −7 is Palm Sunday, +1 Sham El-Nessim. */
const fromCoptic = (iso: string) => Math.round((Date.parse(iso) - Date.parse(EASTER.orthodox)) / DAY);
/** A fixed day in the Easter season's year, as an ISO day. */
const fixedDay = (month: number, day: number) =>
  `${EASTER_Y}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

/** Whole weeks between the two Easters: 0, 1, 4 or 5. */
const WEEKS = Math.round(EASTER.gap / 7);
/** Western Easter Sunday is Coptic Palm Sunday when the gap is one week. */
const PALM_IS_WESTERN = EASTER.palm === EASTER.western;

const MONTH_SLUGS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];
const monthGuide = (iso: string) => findMonth(MONTH_SLUGS[Number(iso.slice(5, 7)) - 1])!;
/** Daytime highs in the month of Western Easter, and of Coptic Easter. */
const W_T = monthGuide(EASTER.western).temps;
const C_T = monthGuide(EASTER.orthodox).temps;
const ONE_MONTH = EASTER.western.slice(0, 7) === EASTER.orthodox.slice(0, 7);

/**
 * The dates in one language. `first` is how the language writes the first of
 * a month ("1er mai", "1° maggio", "1º de maio"); Intl writes a bare 1.
 */
function datesIn(locale: string, first = "1") {
  const fix = (s: string) => s.replace(/^1(?= )/, first);
  const dm = (iso: string) => fix(fmtDay(iso, locale, { day: "numeric", month: "long" }));
  const dmy = (iso: string) => fix(fmtDay(iso, locale));
  return {
    W: dm(EASTER.western), WY: dmy(EASTER.western),
    C: dm(EASTER.orthodox), CY: dmy(EASTER.orthodox),
    P: dm(EASTER.palm),
    S: dm(EASTER.sham), SY: dmy(EASTER.sham),
    /** The month of Western Easter, and of Coptic Easter, named in the language. */
    wMonth: fmtDay(EASTER.western, locale, { month: "long" }),
    cMonth: fmtDay(EASTER.orthodox, locale, { month: "long" }),
  };
}
/** "five weeks", from a list of the words for one to five. */
const weeks = (words: string[]) => words[WEEKS - 1] ?? String(WEEKS);

// --- photographs --------------------------------------------------------------
const EGGS = "/images/stock/sham-el-nessim-coloured-eggs.webp";
const PHOTOS = [
  { src: "/images/stock/hanging-church-cairo-interior.webp", width: 900, height: 679 },
  { src: "/images/stock/palm-sunday-woven-palm-crosses.webp", width: 1024, height: 865 },
  { src: "/images/stock/coptic-church-iconostasis-old-cairo.webp", width: 768, height: 920 },
  { src: "/images/stock/coptic-cairo-abu-serga-church.webp", width: 1024, height: 769 },
  { src: EGGS, width: 1024, height: 683 },
  { src: "/images/stock/kahk-easter-biscuits.webp", width: 1024, height: 640 },
];
/** The six photographs, described in the edition's language. */
function photos(alt: string[], label: string[]): MediaPlaceholder[] {
  return PHOTOS.map((p, i) => ({ ...p, alt: alt[i], label: label[i] }));
}

// ── German ──────────────────────────────────────────────────────────────────
const DE = datesIn("de-DE");
const DE_WEEKS = weeks(["eine Woche", "zwei Wochen", "drei Wochen", "vier Wochen", "fünf Wochen"]);
/** Where Coptic Easter lands against the Osterferien, which follow Western Easter. */
const DE_FERIEN = EASTER.same
  ? ""
  : WEEKS === 1
    ? `Das koptische Ostern folgt ${EASTER_Y} eine Woche später und kann in vielen Bundesländern noch in die Ferien fallen: Wer die zweite Ferienwoche in Ägypten verbringt, erlebt die koptische Karwoche bis zur Osternacht.`
    : `Das koptische Ostern liegt ${EASTER_Y} ${DE_WEEKS} später und damit meist nach den Osterferien.`;

export const deEaster: LocalizedPage = {
  groupId: "standalone-de-easter",
  symbol: "lotus",
  theme: "easter",
  title: `Ostern in Ägypten ${EASTER_Y}: koptisches Ostern & Termine | Kemet`,
  description: EASTER.same
    ? `Ostern ${EASTER_Y} in Ägypten: Alle Kirchen feiern am ${DE.C}, Sham El-Nessim folgt am ${DE.S}. Karwoche in Alt-Kairo, Wetter, Osterferien und Buchung.`
    : `Ostern ${EASTER_Y} in Ägypten: westliches Ostern am ${DE.W}, koptisches am ${DE.C}, Sham El-Nessim am ${DE.S}. Karwoche in Alt-Kairo, Wetter, Osterferien.`,
  keywords:
    `ostern ägypten, ostern in ägypten ${EASTER_Y}, koptisches ostern, koptisches ostern ${EASTER_Y}, osterferien ägypten, ägypten reise ostern, ostern kairo, sham el-nessim`,
  crumb: "Ostern in Ägypten",
  h1: "Ostern in Ägypten",
  standfirst: EASTER.same
    ? `Im Jahr ${EASTER_Y} feiern alle Kirchen Ostern am selben Tag, dem ${DE.C} — und am Montag danach geht ganz Ägypten ins Freie.`
    : `Zweimal Ostern in einem Frühling: das westliche Fest am ${DE.W}, das koptische am ${DE.CY} — und am Montag danach geht ganz Ägypten ins Freie.`,
  lede:
    "Ostern ist aus zwei Gründen eine gute Zeit für Ägypten, die nichts miteinander zu tun haben. Der erste ist das Wetter: Von Ende März bis Ende April kommen die letzten leichten Wochen im Niltal, bevor die Hitze einsetzt. Der zweite: Ägypten hat ein eigenes Ostern. Die koptisch-orthodoxe Kirche, der Überlieferung nach vom Evangelisten Markus in Alexandria gegründet, ist die größte christliche Gemeinschaft im Nahen Osten, und sie feiert Ostern nach der älteren julianischen Rechnung. Wir planen Osterreisen nach beiden Kalendern: die Monumente früh am Morgen, die Kirchen Alt-Kairos dann, wenn Gäste willkommen sind, und die langen Wochenenden, an denen auch die Ägypter unterwegs sind.",
  facts: EASTER.same
    ? [
        { label: "Ostern (alle Kirchen)", value: DE.CY },
        { label: "Koptischer Palmsonntag", value: DE.P },
        { label: "Sham El-Nessim", value: `Montag, ${DE.S}` },
        { label: `Luxor im ${DE.wMonth}`, value: W_T.luxor },
      ]
    : [
        { label: "Westliches Ostern", value: DE.WY },
        { label: "Koptisches Ostern", value: DE.CY },
        { label: "Sham El-Nessim", value: `Montag, ${DE.S}` },
        { label: `Luxor im ${DE.wMonth}`, value: W_T.luxor },
      ],
  sections: [
    {
      title: "Zweimal Ostern",
      body: EASTER.same
        ? `Im Jahr ${EASTER_Y} fallen die beiden Osterfeste zusammen: Die katholische und die evangelischen Kirchen feiern gemeinsam mit der koptisch-orthodoxen Kirche, Ägyptens eigener, am ${DE.C}. Das ist nicht jedes Jahr so. Die Kopten rechnen wie die griechische und die russische Orthodoxie nach dem älteren julianischen Kalender, und meist liegt ihr Ostern bis zu fünf Wochen nach dem westlichen. Für Reisende heißt das: Die Osterferien und Ägyptens eigenes Fest fallen in dieselbe Woche. Monumente und Museen bleiben geöffnet.`
        : `In den meisten Jahren feiert Ägypten Ostern zweimal. Für die katholische und die evangelischen Kirchen fällt Ostern ${EASTER_Y} auf den ${DE.W}, das Datum, nach dem sich die Osterferien richten. Die koptisch-orthodoxe Kirche, Ägyptens eigene, rechnet wie die griechische und die russische Orthodoxie nach dem älteren julianischen Kalender und feiert am ${DE.C}, ${DE_WEEKS} später.${PALM_IS_WESTERN ? " Der westliche Ostersonntag ist damit zugleich der koptische Palmsonntag." : ""} In Ägypten selbst sind der westliche Ostersonntag und der Ostermontag gewöhnliche Arbeitstage; Monumente und Museen haben geöffnet.`,
    },
    {
      title: "Palmsonntag und Osternacht in Kairo",
      body:
        `Am Sonntag vor dem koptischen Ostern, ${EASTER_Y} am ${DE.P}, werden die Gehwege vor Kairos Kirchen grün. Händler flechten aus frischen Palmwedeln Kreuze, Kronen, Ringe und kleine Esel für die Kinder; die Familien nehmen sie mit nach Hause und bewahren sie ein Jahr lang auf. Die ganze Woche über folgen täglich Gottesdienste. Die Osterliturgie beginnt am Samstagabend, dauert Stunden und endet nach Mitternacht mit dem Läuten der Glocken; mit ihr endet auch ein Fasten von 55 Tagen, rund acht Wochen. In Alt-Kairo sind die Hängende Kirche und Abu Serga, wo der Überlieferung nach die Heilige Familie Zuflucht fand, in dieser Nacht bis an die Türen gefüllt. Zu Hause kommen danach wieder Fleisch, Eier und Käse auf den Tisch, dazu Kahk und Kekse, dasselbe Festgebäck wie zum Eid am Ende des Ramadan. Am Ostermorgen grüßt man sich mit „al-Masih qam“ (Christus ist auferstanden) und antwortet „bil-haqiqa qam“ (er ist wahrhaftig auferstanden).`,
    },
    {
      title: "Sham El-Nessim: ganz Ägypten im Freien",
      body:
        `Am Montag nach dem koptischen Ostern, ${EASTER_Y} am ${DE.S}, ist Sham El-Nessim, ein landesweiter Feiertag für alle, Muslime wie Christen. Das Frühlingsfest hat altägyptische Wurzeln und ist älter als beide Religionen. Man verbringt den Tag draußen: am Nil, in Parks und Gärten, an der Corniche von Alexandria. Dazu gehören gefärbte Eier, wie man sie zu Ostern auch in Deutschland kennt, Frühlingszwiebeln, Salat, Lupinenkerne (Termis) und Fesikh, gesalzene graue Meeräsche, an die man sich erst gewöhnen muss. Parks und Uferpromenaden sind an diesem Tag voll. Wir planen ihn deshalb um den Fluss herum, mit einer Feluke oder auf einer Garteninsel, statt mitten im Gedränge.`,
    },
    {
      title: "Wetter und Chamsin",
      body:
        `Die Wochen von Ende März bis Ende April sind die letzten leichten im Niltal, bevor die Hitze kommt. ${EASTER.same ? "Zu Ostern" : "Zum westlichen Ostern"} im ${DE.wMonth} hat Luxor tagsüber ${W_T.luxor}, Assuan ${W_T.aswan} und Kairo ${W_T.cairo}.${ONE_MONTH ? "" : ` Zum koptischen Ostern im ${DE.cMonth} sind es in Luxor ${C_T.luxor} und in Kairo ${C_T.cairo}.`} Ab April planen wir im Süden das Tal der Könige zur Öffnung und lassen die Nachmittage frei; in Kairo ist es milder. Zwischen März und Mai kann außerdem der Chamsin wehen, ein heißer, staubiger Frühlingswind, meist für ein oder zwei Tage. Dafür halten wir im Programm einen halben Tag frei.`,
    },
    {
      title: "Osterferien: früh buchen",
      body:
        `In den meisten Bundesländern liegen die Osterferien rund um das westliche Osterfest, etwa zwei Wochen lang. Weil Karfreitag und Ostermontag in Deutschland Feiertage sind, reichen vier Urlaubstage für zehn freie Tage am Stück. Genau diese Woche ist in Ägypten Hochsaison: Ein Großteil Europas reist dann, und die besten Kabinen auf dem Nil, die Zimmer mit Blick auf die Pyramiden von Gizeh und die Flüge nach Abu Simbel sind Monate im Voraus vergeben. Buchen Sie drei bis sechs Monate vorher.${DE_FERIEN ? ` ${DE_FERIEN}` : ""} Rund um Ägyptens eigenes Ostern und Sham El-Nessim reisen die Ägypter selbst: Alexandria, das Rote Meer und der Sinai füllen sich mit einheimischen Familien, und die Züge sind voll.${EASTER.same ? ` Im Jahr ${EASTER_Y} fällt all das in dieselbe Woche wie Ihre Osterferien.` : ""}`,
    },
  ],
  photos: photos(
    [
      "Das Kirchenschiff der Hängenden Kirche im koptischen Kairo",
      "Aus Palmblättern geflochtene Kreuze zum Palmsonntag",
      "Die Ikonostase der Kirche St. Barbara in Alt-Kairo",
      "Ein koptisches Kreuz im Ziegelmauerwerk der Kirche Abu Serga in Alt-Kairo",
      "Gefärbte Eier zu Ostern und Sham El-Nessim",
      "Kahk und Kekse, das Festgebäck zu Ostern und zum Eid",
    ],
    ["Die Hängende Kirche", "Palmsonntag", "St. Barbara, Alt-Kairo", "Abu Serga", "Gefärbte Eier", "Kahk"],
  ),
  sharePhoto: EGGS,
  highlights: {
    heading: "Auf einen Blick",
    items: [
      `Palmsonntag in Kairo, ${EASTER_Y} am ${DE.P}: Kreuze und Kronen aus Palmwedeln vor den Kirchen`,
      "Die Osternacht in Alt-Kairo, eine Liturgie, die nach Mitternacht mit den Glocken endet",
      `Sham El-Nessim am ${DE.S}: ganz Ägypten beim Picknick am Nil, mit gefärbten Eiern`,
      `Die letzten leichten Wochen im Niltal: Kairo im ${DE.wMonth} bei ${W_T.cairo}`,
      "Kahk und Kekse, das Festgebäck zu Ostern wie zum Eid",
    ],
  },
  faqs: [
    {
      q: `Wann ist Ostern in Ägypten ${EASTER_Y}?`,
      a: EASTER.same
        ? `Im Jahr ${EASTER_Y} fallen beide Termine zusammen: Die katholische und die evangelischen Kirchen feiern gemeinsam mit der koptisch-orthodoxen Kirche am ${DE.CY}. Palmsonntag ist am ${DE.P}, und Sham El-Nessim, der landesweite Frühlingsfeiertag, folgt am Montag, dem ${DE.SY}.`
        : `Es gibt zwei Termine. Das westliche Ostern der katholischen und evangelischen Kirchen ist am ${DE.WY}. Das koptisch-orthodoxe Ostern, das Ägypten selbst feiert, ist am ${DE.CY}, der koptische Palmsonntag eine Woche davor, am ${DE.P}. Sham El-Nessim, der landesweite Frühlingsfeiertag, folgt am Montag, dem ${DE.SY}.`,
    },
    {
      q: "Ist Ostern in Ägypten ein Feiertag?",
      a: EASTER.same
        ? `Im Jahr ${EASTER_Y} ist der Ostermontag zugleich Sham El-Nessim und damit ein landesweiter Feiertag für alle. Den Ostersonntag feiern Ägyptens Christen. Monumente und Museen haben durchgehend geöffnet.`
        : "Sham El-Nessim, der Montag nach dem koptischen Ostern, ist ein landesweiter Feiertag für alle. Den koptischen Ostersonntag feiern Ägyptens Christen; der westliche Ostersonntag und der Ostermontag sind gewöhnliche Arbeitstage. Monumente und Museen haben durchgehend geöffnet.",
    },
    {
      q: "Kann man als Gast an einem Ostergottesdienst teilnehmen?",
      a: "Ja. Koptische Kirchen empfangen respektvolle Gäste, und katholische und anglikanische Kirchen in Kairo halten Gottesdienste zum westlichen Ostern. Bedecken Sie Schultern und Knie (ein leichtes Tuch ist praktisch), stehen Sie während der Liturgie hinten und fragen Sie, bevor Sie fotografieren. Koptische Liturgien sind lang; leise hinauszugehen ist völlig in Ordnung. Die Hängende Kirche und Abu Serga sind in der Osternacht voll. Wenn Sie teilnehmen möchten, sagen Sie es uns, und wir empfehlen Ihnen die Kirche und die Zeit, zu der Sie dort sein sollten.",
    },
    {
      q: "Ist Ostern eine gute Reisezeit für Ägypten?",
      a: `Ja, mit zwei Einschränkungen. Von Ende März bis Ende April sind die letzten angenehmen Wochen im Niltal: Im ${DE.wMonth} hat Kairo ${W_T.cairo} und Luxor ${W_T.luxor}. Die Einschränkungen sind volle Häuser und hohe Preise in der westlichen Osterwoche und der Reiseandrang der Ägypter rund um Sham El-Nessim. Also früh buchen und im Süden die Vormittage nutzen.`,
    },
    {
      q: "Was ist Sham El-Nessim?",
      a: "Ägyptens Frühlingsfest, am Montag nach dem koptischen Ostern. Seine Wurzeln reichen ins alte Ägypten zurück, und weil es älter ist als Christentum und Islam, feiern es alle Ägypter. Familien verbringen den Tag draußen, am Nil, in Parks und Gärten, an der Corniche von Alexandria, mit gefärbten Eiern, Frühlingszwiebeln, Lupinen und Fesikh.",
    },
    {
      q: "Führt die Reiseleitung auf Deutsch?",
      a: "Ja. Ihre ägyptologische Reiseleitung gehört zu unserem eigenen Team und führt auf Deutsch, auch durch die Kirchen Alt-Kairos. Jede Reise ist privat, mit eigener Reiseleitung und eigenem Fahrzeug für Ihre Gruppe.",
    },
  ],
  cta: {
    heading: `Ostern ${EASTER_Y} in Ägypten`,
    text: "Nennen Sie uns Ihre Reisedaten und die Zahl der Reisenden. Wir planen nach beiden Osterkalendern, mit eigener ägyptologischer Reiseleitung und eigenem Fahrzeug, und sagen Ihnen, was in Ihrer Woche in Kairo geschieht.",
    whatsapp: `Guten Tag Kemet — wir möchten über Ostern ${EASTER_Y} nach Ägypten reisen.`,
    emailSubject: `Ostern ${EASTER_Y} in Ägypten — Anfrage`,
  },
  moreLabel: "Auf Englisch",
  moreRoute: EN_PAGE,
  moreText: "Unsere Seite zu Ostern in Ägypten, auf Englisch, mit den Terminen der nächsten fünf Jahre.",
  links: [
    { label: "Religiöses Kairo & die Zitadelle", route: "de/religioeses-kairo-und-zitadelle.html" },
    { label: "Beste Reisezeit für Ägypten", route: "de/beste-reisezeit-aegypten.html" },
    { label: "Ägypten mit Kindern", route: "de/aegypten-mit-kindern.html" },
  ],
};

// ── French ──────────────────────────────────────────────────────────────────
const FR = datesIn("fr-FR", "1er");
const FR_WEEKS = weeks(["une semaine", "deux semaines", "trois semaines", "quatre semaines", "cinq semaines"]);
const FR_ZONES = EASTER.same
  ? ""
  : `Selon votre zone, les vacances de printemps, échelonnées en avril, peuvent tomber près de la Pâque copte, le ${FR.C} : vérifiez le calendrier de votre académie.`;

export const frEaster: LocalizedPage = {
  groupId: "standalone-fr-easter",
  symbol: "lotus",
  theme: "easter",
  title: `Pâques en Égypte ${EASTER_Y} : Pâque copte, dates et conseils | Kemet`,
  description: EASTER.same
    ? `Pâques ${EASTER_Y} en Égypte : toutes les Églises fêtent le ${FR.C}, Sham El-Nessim suit le ${FR.S}. Semaine sainte au Vieux-Caire, météo, vacances, réservation.`
    : `Pâques ${EASTER_Y} en Égypte : le ${FR.W} en Occident, le ${FR.C} pour les coptes, Sham El-Nessim le ${FR.S}. Semaine sainte au Vieux-Caire, météo, réservation.`,
  keywords:
    `pâques en égypte, pâques égypte ${EASTER_Y}, pâque copte, pâques coptes ${EASTER_Y}, voyage égypte pâques, vacances de printemps égypte, semaine sainte le caire, sham el-nessim, cham el-nessim`,
  crumb: "Pâques en Égypte",
  h1: "Pâques en Égypte",
  standfirst: EASTER.same
    ? `En ${EASTER_Y}, toutes les Églises fêtent Pâques le même jour, le ${FR.C} — et le lundi suivant, toute l'Égypte sort au grand air.`
    : `Deux Pâques pour un seul printemps : le ${FR.W} pour les Églises d'Occident, le ${FR.CY} pour l'Église copte — et le lundi suivant, toute l'Égypte sort au grand air.`,
  lede:
    "Pâques est un bon moment pour l'Égypte, pour deux raisons qui n'ont rien à voir l'une avec l'autre. La première, c'est le climat : de fin mars à fin avril, ce sont les dernières semaines faciles dans la vallée du Nil avant la chaleur. La seconde, c'est que l'Égypte a sa propre Pâque. L'Église copte orthodoxe, fondée selon la tradition par saint Marc à Alexandrie, est la plus grande communauté chrétienne du Moyen-Orient, et elle calcule la date de Pâques selon l'ancien comput julien. Nous construisons les voyages de Pâques autour des deux calendriers : les monuments tôt le matin, les églises du Vieux-Caire aux heures où les visiteurs sont bienvenus, et les longs week-ends où les Égyptiens voyagent eux aussi.",
  facts: EASTER.same
    ? [
        { label: "Pâques (toutes Églises)", value: FR.CY },
        { label: "Rameaux coptes", value: FR.P },
        { label: "Sham El-Nessim", value: `lundi ${FR.S}` },
        { label: `Louxor en ${FR.wMonth}`, value: W_T.luxor },
      ]
    : [
        { label: "Pâques (Occident)", value: FR.WY },
        { label: "Pâque copte", value: FR.CY },
        { label: "Sham El-Nessim", value: `lundi ${FR.S}` },
        { label: `Louxor en ${FR.wMonth}`, value: W_T.luxor },
      ],
  sections: [
    {
      title: "Deux Pâques, un printemps",
      body: EASTER.same
        ? `En ${EASTER_Y}, les deux Pâques coïncident : catholiques, protestants et coptes orthodoxes, l'Église de l'Égypte, fêtent ensemble le ${FR.C}. Ce n'est pas le cas chaque année. Les coptes suivent, comme les orthodoxes grecs et russes, l'ancien comput julien, et leur Pâque tombe d'ordinaire jusqu'à cinq semaines après la date occidentale. Pour vous, cela signifie que votre week-end de Pâques et la grande fête égyptienne tombent la même semaine. Monuments et musées restent ouverts.`
        : `La plupart des années, l'Égypte fête Pâques deux fois. Pour les Églises catholique et protestantes, Pâques tombe en ${EASTER_Y} le ${FR.W} : c'est votre week-end de Pâques. L'Église copte orthodoxe, celle de l'Égypte, suit comme les orthodoxes grecs et russes l'ancien comput julien, et sa Pâque tombe le ${FR.C}, ${FR_WEEKS} plus tard.${PALM_IS_WESTERN ? " Le dimanche de Pâques occidental est donc aussi le dimanche des Rameaux copte." : ""} En Égypte, le dimanche et le lundi de Pâques occidentaux sont des jours ouvrés ordinaires ; monuments et musées restent ouverts.`,
    },
    {
      title: "La Semaine sainte au Caire",
      body:
        `Le dimanche qui précède la Pâque copte, en ${EASTER_Y} le ${FR.P}, les trottoirs devant les églises du Caire virent au vert. Des vendeurs tressent sous vos yeux des palmes fraîches en croix, en couronnes, en bagues et en petits ânes pour les enfants ; les familles les rapportent chez elles et les gardent un an. Les offices se succèdent ensuite chaque jour. La liturgie pascale a lieu le samedi soir : elle dure des heures, s'achève après minuit au son des cloches et clôt un jeûne de 55 jours, environ huit semaines. Au Vieux-Caire, l'église Suspendue et Abou Serga, où la tradition veut que la Sainte Famille se soit réfugiée, sont pleines cette nuit-là. À la maison, on retrouve ensuite la viande, les œufs et le fromage, avec le kahk et les biscuits, les mêmes pâtisseries de fête que pour l'Aïd. Au matin de Pâques, on se salue d'un « al-Masih qam » (le Christ est ressuscité) et l'on répond « bil-haqiqa qam » (il est vraiment ressuscité).`,
    },
    {
      title: "Sham El-Nessim, le lundi de tous",
      body:
        `Le lundi qui suit la Pâque copte, en ${EASTER_Y} le ${FR.S}, c'est Sham El-Nessim, jour férié pour tout le pays, musulmans comme chrétiens. Cette fête du printemps a des racines dans l'Égypte ancienne et elle est plus ancienne que les deux religions. On passe la journée dehors : au bord du Nil, dans les parcs et les jardins, sur la corniche d'Alexandrie. Au menu, des œufs colorés, des oignons verts, de la laitue, des lupins (termis) et le fessikh, un mulet salé qui ne plaît pas à tout le monde. Ce jour-là, parcs et corniches sont bondés ; nous organisons donc la journée autour du fleuve, en felouque ou sur une île-jardin, plutôt qu'au milieu de la foule.`,
    },
    {
      title: "Météo et khamsin",
      body:
        `De fin mars à fin avril, ce sont les dernières semaines faciles dans la vallée du Nil avant la chaleur. ${EASTER.same ? "À Pâques" : "Le week-end de Pâques"}, en ${FR.wMonth}, Louxor affiche ${W_T.luxor} en journée, Assouan ${W_T.aswan} et Le Caire ${W_T.cairo}.${ONE_MONTH ? "" : ` À la Pâque copte, en ${FR.cMonth}, on monte à ${C_T.luxor} à Louxor et ${C_T.cairo} au Caire.`} À partir d'avril, dans le Sud, nous plaçons la Vallée des Rois à l'ouverture et laissons les après-midi libres ; Le Caire reste plus doux. Entre mars et mai peut aussi souffler le khamsin, un vent de printemps chaud et chargé de poussière, en général pendant un jour ou deux. Nous gardons pour lui une demi-journée libre dans le programme.`,
    },
    {
      title: "Week-end de Pâques et vacances de printemps",
      body:
        `Le lundi de Pâques est férié en France, en Belgique et dans la plupart des cantons suisses : quatre jours de congé suffisent pour neuf jours de suite. Mais la semaine de Pâques est la haute saison en Égypte. Une grande partie de l'Europe voyage alors, et les plus belles cabines sur le Nil, les chambres avec vue sur les pyramides de Gizeh et les vols pour Abou Simbel partent des mois à l'avance. Réservez trois à six mois avant.${FR_ZONES ? ` ${FR_ZONES}` : ""} La Pâque copte et Sham El-Nessim sont des fêtes égyptiennes : Alexandrie, la mer Rouge et le Sinaï se remplissent de familles égyptiennes, et les trains sont complets.${EASTER.same ? ` En ${EASTER_Y}, tout cela tombe la même semaine que votre week-end de Pâques.` : ""}`,
    },
  ],
  photos: photos(
    [
      "La nef de l'église Suspendue, au Caire copte",
      "Des croix tressées en feuilles de palmier pour le dimanche des Rameaux",
      "L'iconostase de l'église Sainte-Barbe, au Vieux-Caire",
      "Une croix copte sculptée dans le mur de brique de l'église Abou Serga, au Vieux-Caire",
      "Des œufs colorés pour Pâques et Sham El-Nessim",
      "Du kahk et des biscuits, les pâtisseries de fête de Pâques et de l'Aïd",
    ],
    ["L'église Suspendue", "Les Rameaux", "Sainte-Barbe, Vieux-Caire", "Abou Serga", "Œufs colorés", "Kahk"],
  ),
  sharePhoto: EGGS,
  highlights: {
    heading: "En bref",
    items: [
      `Les Rameaux au Caire, le ${FR.P} : croix et couronnes de palmes tressées devant les églises`,
      "La nuit de Pâques au Vieux-Caire, une liturgie qui s'achève après minuit au son des cloches",
      `Sham El-Nessim, le ${FR.S} : toute l'Égypte pique-nique au bord du Nil, œufs colorés compris`,
      `Les dernières semaines faciles dans la vallée du Nil : Le Caire à ${W_T.cairo} en ${FR.wMonth}`,
      "Le kahk et les biscuits, pâtisseries de fête de Pâques comme de l'Aïd",
    ],
  },
  faqs: [
    {
      q: `Quand est Pâques en Égypte en ${EASTER_Y} ?`,
      a: EASTER.same
        ? `En ${EASTER_Y}, les deux dates coïncident : catholiques, protestants et coptes orthodoxes fêtent Pâques ensemble le ${FR.CY}. Le dimanche des Rameaux est le ${FR.P}, et Sham El-Nessim, fête du printemps fériée dans tout le pays, tombe le lundi ${FR.SY}.`
        : `Il y a deux dates. Pour les Églises catholique et protestantes, Pâques tombe le ${FR.WY}. La Pâque copte orthodoxe, celle que fête l'Égypte, est le ${FR.CY}, et le dimanche des Rameaux copte une semaine plus tôt, le ${FR.P}. Sham El-Nessim, fête du printemps fériée dans tout le pays, suit le lundi ${FR.SY}.`,
    },
    {
      q: "Le lundi de Pâques est-il férié en Égypte ?",
      a: EASTER.same
        ? `En ${EASTER_Y}, oui : le lundi de Pâques est aussi Sham El-Nessim, jour férié pour tout le pays. Le dimanche de Pâques est fêté par les chrétiens d'Égypte. Monuments et musées restent ouverts tout du long.`
        : "Non. En Égypte, le dimanche et le lundi de Pâques occidentaux sont des jours ouvrés ordinaires. Le jour férié pour tout le pays est Sham El-Nessim, le lundi qui suit la Pâque copte ; le dimanche de la Pâque copte est fêté par les chrétiens d'Égypte. Monuments et musées restent ouverts tout du long.",
    },
    {
      q: "Peut-on assister à un office de Pâques au Caire ?",
      a: "Oui. Les églises coptes accueillent les visiteurs respectueux, et des églises catholiques et anglicanes du Caire célèbrent Pâques à la date occidentale. Couvrez épaules et genoux (un foulard léger est utile), restez au fond pendant la liturgie et demandez avant de photographier. Les liturgies coptes sont longues : sortir discrètement ne pose aucun problème. L'église Suspendue et Abou Serga sont pleines la nuit de Pâques ; si vous souhaitez y assister, dites-le-nous et nous vous conseillerons l'église et l'heure d'arrivée.",
    },
    {
      q: "Pâques, une bonne période pour l'Égypte ?",
      a: `Oui, avec deux réserves. De fin mars à fin avril, ce sont les dernières semaines agréables dans la vallée du Nil : en ${FR.wMonth}, Le Caire est à ${W_T.cairo} et Louxor à ${W_T.luxor}. Les réserves : l'affluence et les prix de la semaine de Pâques, et les déplacements des Égyptiens eux-mêmes autour de Sham El-Nessim. Réservez tôt, et organisez le Sud autour des matinées.`,
    },
    {
      q: "Qu'est-ce que Sham El-Nessim ?",
      a: "La fête du printemps en Égypte, le lundi qui suit la Pâque copte. Ses racines remontent à l'Égypte ancienne, et comme elle est plus ancienne que le christianisme et l'islam, tous les Égyptiens la fêtent. Les familles passent la journée dehors, au bord du Nil, dans les parcs et les jardins, sur la corniche d'Alexandrie, avec des œufs colorés, des oignons verts, des lupins et du fessikh.",
    },
    {
      q: "La visite peut-elle se faire en français ?",
      a: "Oui. Les égyptologues de notre propre équipe guident en français, y compris dans les églises du Vieux-Caire. Chaque voyage est privé : votre égyptologue et votre véhicule ne sont que pour vous.",
    },
  ],
  cta: {
    heading: `Pâques ${EASTER_Y} en Égypte`,
    text: "Donnez-nous vos dates et le nombre de voyageurs. Nous organisons le voyage autour des deux calendriers de Pâques, avec votre égyptologue et votre véhicule, et nous vous disons ce qui se passe au Caire la semaine où vous y êtes.",
    whatsapp: `Bonjour Kemet — nous aimerions passer Pâques ${EASTER_Y} en Égypte.`,
    emailSubject: `Pâques ${EASTER_Y} en Égypte — demande`,
  },
  moreLabel: "En anglais",
  moreRoute: EN_PAGE,
  moreText: "Notre page sur Pâques en Égypte, en anglais, avec les dates des cinq prochaines années.",
  links: [
    { label: "Le Caire religieux & la Citadelle", route: "fr/le-caire-religieux-et-la-citadelle.html" },
    { label: "Quand partir en Égypte", route: "fr/quand-partir-en-egypte.html" },
    { label: "L'Égypte en famille", route: "fr/egypte-en-famille.html" },
  ],
};

// ── Italian ─────────────────────────────────────────────────────────────────
const IT = datesIn("it-IT", "1°");
const IT_WEEKS = weeks(["una settimana", "due settimane", "tre settimane", "quattro settimane", "cinque settimane"]);
/** "il 2 maggio", but "l'8 aprile" and "l'11 aprile". */
const itIl = (d: string) => (/^(8|11) /.test(d) ? `l'${d}` : `il ${d}`);
/** "a marzo", "ad aprile". */
const itA = (month: string) => (/^[aeiou]/.test(month) ? `ad ${month}` : `a ${month}`);
/**
 * Where an Italian spring holiday lands against Coptic Holy Week, computed
 * from EASTER.orthodox; null when it is not near enough to mention.
 */
function itPonte(iso: string, name: string): string | null {
  const n = fromCoptic(iso);
  const wd = fmtDay(iso, "it-IT", { weekday: "long" });
  if (n === -7) return `${name} è la Domenica delle Palme copta`;
  if (n >= -6 && n <= -4) return `${name}, ${wd}, cade nella Settimana Santa copta`;
  if (n === -3) return `${name} è il Giovedì Santo copto`;
  if (n === -2) return `${name} è il Venerdì Santo copto`;
  if (n === -1) return `${name} è il Sabato Santo copto, con la veglia di Pasqua la sera`;
  if (n === 0) return EASTER.same ? `${name} è la domenica di Pasqua di tutte le Chiese` : `${name} coincide con la Pasqua copta`;
  if (n === 1) return EASTER.same ? `${name} è Pasquetta e, in Egitto, Sham El-Nessim` : `${name} coincide con Sham El-Nessim`;
  if (n === 2) return `${name}, ${wd}, è il giorno dopo Sham El-Nessim`;
  if (n >= 3 && n <= 7) return `${name}, ${wd}, cade nella settimana dopo la Pasqua copta`;
  if (n >= -10 && n <= -8) return `${name}, ${wd}, cade pochi giorni prima della Domenica delle Palme copta`;
  return null;
}
const IT_PONTI = [itPonte(fixedDay(4, 25), "il 25 aprile"), itPonte(fixedDay(5, 1), "il 1° maggio")]
  .filter((s): s is string => s !== null);
const IT_PONTI_TEXT = IT_PONTI.length
  ? `Nel ${EASTER_Y} ${IT_PONTI.join(" e ")}: chi parte in quei giorni vede da vicino la Pasqua d'Egitto.`
  : `Nel ${EASTER_Y} il 25 aprile e il 1° maggio cadono lontani dalla Pasqua${EASTER.same ? "" : " copta"} (${itIl(IT.C)}): sono ponti per un viaggio più tranquillo, passata la settimana di punta.`;
const IT_SAME_WEEK = EASTER.same
  ? " Quest'anno tutto questo cade nella stessa settimana di Pasqua e Pasquetta."
  : "";

export const itEaster: LocalizedPage = {
  groupId: "standalone-it-easter",
  symbol: "lotus",
  theme: "easter",
  title: `Pasqua in Egitto ${EASTER_Y}: Pasqua copta, date e consigli | Kemet`,
  description: EASTER.same
    ? `Pasqua ${EASTER_Y} in Egitto: tutte le Chiese festeggiano ${itIl(IT.C)}, Sham El-Nessim segue ${itIl(IT.S)}. Settimana Santa al Cairo, clima, ponti e prenotazioni.`
    : `Pasqua ${EASTER_Y} in Egitto: la nostra ${itIl(IT.W)}, quella copta ${itIl(IT.C)}, Sham El-Nessim ${itIl(IT.S)}. Settimana Santa al Cairo, clima, ponti e prenotazioni.`,
  keywords:
    `pasqua in egitto, pasqua in egitto ${EASTER_Y}, pasqua copta, pasqua copta ${EASTER_Y}, viaggio in egitto a pasqua, ponte 25 aprile egitto, ponte primo maggio egitto, settimana santa cairo, sham el-nessim`,
  crumb: "Pasqua in Egitto",
  h1: "Pasqua in Egitto",
  standfirst: EASTER.same
    ? `Nel ${EASTER_Y} tutte le Chiese festeggiano la Pasqua lo stesso giorno, ${itIl(IT.C)}, e il lunedì dopo tutto l'Egitto esce all'aperto.`
    : `Due Pasque in una sola primavera: la nostra ${itIl(IT.W)}, quella copta ${itIl(IT.CY)}. E il lunedì dopo, tutto l'Egitto esce all'aperto.`,
  lede:
    "La Pasqua è un buon momento per l'Egitto per due ragioni che non hanno nulla a che vedere l'una con l'altra. La prima è il clima: da fine marzo a fine aprile sono le ultime settimane facili nella valle del Nilo, prima del caldo. La seconda è che l'Egitto ha una Pasqua tutta sua. La Chiesa copta ortodossa, fondata secondo la tradizione da san Marco ad Alessandria, è la più grande comunità cristiana del Medio Oriente e calcola la Pasqua secondo l'antico computo giuliano. Organizziamo i viaggi di Pasqua tenendo conto di entrambi i calendari: i monumenti di buon mattino, le chiese del Cairo copto quando i visitatori sono benvenuti, e i ponti in cui viaggiano anche gli egiziani.",
  facts: EASTER.same
    ? [
        { label: "Pasqua (tutte le Chiese)", value: IT.CY },
        { label: "Domenica delle Palme copta", value: IT.P },
        { label: "Sham El-Nessim", value: `lunedì ${IT.S}` },
        { label: `Luxor ${itA(IT.wMonth)}`, value: W_T.luxor },
      ]
    : [
        { label: "Pasqua occidentale", value: IT.WY },
        { label: "Pasqua copta", value: IT.CY },
        { label: "Sham El-Nessim", value: `lunedì ${IT.S}` },
        { label: `Luxor ${itA(IT.wMonth)}`, value: W_T.luxor },
      ],
  sections: [
    {
      title: "Due Pasque, una primavera",
      body: EASTER.same
        ? `Nel ${EASTER_Y} le due Pasque coincidono: cattolici, protestanti e copti ortodossi, la Chiesa d'Egitto, festeggiano insieme ${itIl(IT.C)}. Non succede ogni anno. I copti seguono, come gli ortodossi greci e russi, l'antico computo giuliano, e di solito la loro Pasqua cade fino a cinque settimane dopo la nostra. Per chi viaggia significa che Pasqua, Pasquetta e la grande festa egiziana cadono nella stessa settimana. Monumenti e musei restano aperti.`
        : `Quasi ogni anno l'Egitto festeggia la Pasqua due volte. Per la Chiesa cattolica e le Chiese protestanti, nel ${EASTER_Y} cade ${itIl(IT.W)}: la vostra Pasqua, con la Pasquetta il giorno dopo. La Chiesa copta ortodossa, quella d'Egitto, segue come gli ortodossi greci e russi l'antico computo giuliano, e la sua Pasqua cade ${itIl(IT.C)}, ${IT_WEEKS} dopo.${PALM_IS_WESTERN ? " La domenica di Pasqua occidentale è quindi anche la Domenica delle Palme copta." : ""} In Egitto la domenica e il lunedì di Pasqua occidentali sono normali giorni lavorativi; monumenti e musei restano aperti.`,
    },
    {
      title: "La Settimana Santa al Cairo",
      body:
        `La domenica prima della Pasqua copta, nel ${EASTER_Y} ${itIl(IT.P)}, i marciapiedi davanti alle chiese del Cairo diventano verdi. I venditori intrecciano sotto i vostri occhi foglie di palma fresche in croci, corone, anelli e asinelli per i bambini; le famiglie le portano a casa e le conservano per un anno. Poi le funzioni si susseguono ogni giorno. La liturgia di Pasqua si celebra il sabato sera: dura ore, finisce dopo mezzanotte con il suono delle campane e chiude un digiuno di 55 giorni, circa otto settimane. Nel Cairo copto la Chiesa Sospesa e Abu Serga, dove secondo la tradizione trovò rifugio la Sacra Famiglia, quella notte sono piene. A casa tornano poi in tavola carne, uova e formaggio, con il kahk e i biscotti, gli stessi dolci di festa dell'Eid, la festa di fine Ramadan. La mattina di Pasqua ci si saluta con «al-Masih qam» (Cristo è risorto) e si risponde «bil-haqiqa qam» (è veramente risorto).`,
    },
    {
      title: "Sham El-Nessim, il lunedì di tutti",
      body:
        `Il lunedì dopo la Pasqua copta, nel ${EASTER_Y} ${itIl(IT.S)}, è Sham El-Nessim, giorno festivo in tutto il paese, per musulmani e cristiani. È una festa di primavera con radici nell'antico Egitto, più antica di entrambe le religioni. Si passa la giornata all'aperto: lungo il Nilo, nei parchi e nei giardini, sulla corniche di Alessandria. In tavola uova colorate, cipollotti, lattuga, lupini (termis) e fesikh, un cefalo salato che non piace a tutti al primo assaggio. Quel giorno parchi e lungofiume sono affollati: per questo organizziamo la giornata intorno al fiume, in feluca o su un'isola-giardino, lontano dalla folla.`,
    },
    {
      title: "Clima e khamsin",
      body:
        `Da fine marzo a fine aprile sono le ultime settimane facili nella valle del Nilo, prima del caldo. ${EASTER.same ? "A Pasqua" : "Per la nostra Pasqua"}, ${itA(IT.wMonth)}, Luxor ha di giorno ${W_T.luxor}, Assuan ${W_T.aswan} e il Cairo ${W_T.cairo}.${ONE_MONTH ? "" : ` Per la Pasqua copta, ${itA(IT.cMonth)}, si sale a ${C_T.luxor} a Luxor e ${C_T.cairo} al Cairo.`} Da aprile, al sud, mettiamo la Valle dei Re all'apertura e lasciamo liberi i pomeriggi; il Cairo è più mite. Tra marzo e maggio può soffiare anche il khamsin, un vento di primavera caldo e carico di polvere, di solito per un giorno o due: per questo teniamo mezza giornata libera nel programma.`,
    },
    {
      title: "Pasquetta, 25 aprile e 1° maggio",
      body:
        `Con la Pasquetta, quattro giorni di ferie bastano per nove giorni di fila. Ma la settimana di Pasqua è l'alta stagione in Egitto: viaggia gran parte d'Europa, e le cabine migliori sul Nilo, le camere con vista sulle piramidi di Giza e i voli per Abu Simbel finiscono con mesi di anticipo. Prenotate da tre a sei mesi prima. ${IT_PONTI_TEXT} La Pasqua copta e Sham El-Nessim sono feste egiziane: Alessandria, il Mar Rosso e il Sinai si riempiono di famiglie egiziane e i treni sono pieni.${IT_SAME_WEEK}`,
    },
  ],
  photos: photos(
    [
      "La navata della Chiesa Sospesa, nel Cairo copto",
      "Croci intrecciate con foglie di palma per la Domenica delle Palme",
      "L'iconostasi della chiesa di Santa Barbara, nel Cairo vecchio",
      "Una croce copta scolpita nel muro di mattoni della chiesa di Abu Serga, nel Cairo vecchio",
      "Uova colorate per la Pasqua e Sham El-Nessim",
      "Kahk e biscotti, i dolci di festa di Pasqua e dell'Eid",
    ],
    ["La Chiesa Sospesa", "Domenica delle Palme", "Santa Barbara, Cairo vecchio", "Abu Serga", "Uova colorate", "Kahk"],
  ),
  sharePhoto: EGGS,
  highlights: {
    heading: "In breve",
    items: [
      `La Domenica delle Palme al Cairo, ${itIl(IT.P)}: croci e corone di palma intrecciate davanti alle chiese`,
      "La notte di Pasqua nel Cairo copto, con una liturgia che finisce dopo mezzanotte tra le campane",
      `Sham El-Nessim, ${itIl(IT.S)}: tutto l'Egitto all'aperto, con uova colorate e picnic sul Nilo`,
      `Le ultime settimane facili nella valle del Nilo: il Cairo ${itA(IT.wMonth)} a ${W_T.cairo}`,
      "Kahk e biscotti, i dolci di festa di Pasqua e dell'Eid",
    ],
  },
  faqs: [
    {
      q: `Quando è Pasqua in Egitto nel ${EASTER_Y}?`,
      a: EASTER.same
        ? `Nel ${EASTER_Y} le due date coincidono: cattolici, protestanti e copti ortodossi festeggiano insieme ${itIl(IT.CY)}. La Domenica delle Palme è ${itIl(IT.P)} e Sham El-Nessim, la festa di primavera, giorno festivo in tutto il paese, cade lunedì ${IT.SY}.`
        : `Le date sono due. La Pasqua cattolica e protestante cade ${itIl(IT.WY)}. La Pasqua copta ortodossa, quella che festeggia l'Egitto, cade ${itIl(IT.CY)}, con la Domenica delle Palme copta una settimana prima, ${itIl(IT.P)}. Sham El-Nessim, la festa di primavera, giorno festivo in tutto il paese, segue lunedì ${IT.SY}.`,
    },
    {
      q: "Pasqua e Pasquetta sono festive in Egitto?",
      a: EASTER.same
        ? `Nel ${EASTER_Y} la Pasquetta è anche Sham El-Nessim, giorno festivo per tutto il paese. La domenica di Pasqua la festeggiano i cristiani d'Egitto. Monumenti e musei restano sempre aperti.`
        : "No. In Egitto la domenica e il lunedì di Pasqua occidentali sono normali giorni lavorativi. Il giorno festivo per tutto il paese è Sham El-Nessim, il lunedì dopo la Pasqua copta; la domenica di Pasqua copta la festeggiano i cristiani d'Egitto. Monumenti e musei restano sempre aperti.",
    },
    {
      q: "Si può assistere a una funzione di Pasqua al Cairo?",
      a: "Sì. Le chiese copte accolgono i visitatori rispettosi, e alcune chiese cattoliche e anglicane del Cairo celebrano la Pasqua secondo la data occidentale. Coprite spalle e ginocchia (una sciarpa leggera è utile), restate in fondo durante la liturgia e chiedete prima di fotografare. Le liturgie copte sono lunghe: uscire in silenzio va benissimo. La Chiesa Sospesa e Abu Serga sono piene la notte di Pasqua; se volete partecipare, ditecelo e vi consigliamo in quale chiesa andare e a che ora arrivare.",
    },
    {
      q: "La Pasqua è un buon periodo per l'Egitto?",
      a: `Sì, con due avvertenze. Da fine marzo a fine aprile sono le ultime settimane piacevoli nella valle del Nilo: ${itA(IT.wMonth)} il Cairo è a ${W_T.cairo} e Luxor a ${W_T.luxor}. Le avvertenze: folla e prezzi nella settimana di Pasqua, e il grande movimento degli egiziani stessi intorno a Sham El-Nessim. Prenotate presto e al sud organizzate le visite al mattino.`,
    },
    {
      q: "Che cos'è Sham El-Nessim?",
      a: "La festa di primavera dell'Egitto, il lunedì dopo la Pasqua copta. Ha radici nell'antico Egitto, e poiché è più antica del cristianesimo e dell'islam la festeggiano tutti gli egiziani. Le famiglie passano la giornata all'aperto, lungo il Nilo, nei parchi e nei giardini, sulla corniche di Alessandria, con uova colorate, cipollotti, lupini e fesikh.",
    },
    {
      q: "C'è una guida che parla italiano?",
      a: "Sì. La vostra guida, specializzata in egittologia, fa parte del nostro team e accompagna in italiano, anche nelle chiese del Cairo copto. Ogni viaggio è privato: guida e veicolo sono solo per voi.",
    },
  ],
  cta: {
    heading: `Pasqua ${EASTER_Y} in Egitto`,
    text: "Diteci le date e in quanti siete. Organizziamo il viaggio intorno ai due calendari della Pasqua, con la vostra guida specializzata in egittologia e il vostro veicolo, e vi diciamo che cosa succede al Cairo nella vostra settimana.",
    whatsapp: `Buongiorno Kemet, vorremmo passare la Pasqua ${EASTER_Y} in Egitto.`,
    emailSubject: `Pasqua ${EASTER_Y} in Egitto — richiesta`,
  },
  moreLabel: "In inglese",
  moreRoute: EN_PAGE,
  moreText: "La nostra pagina sulla Pasqua in Egitto, in inglese, con le date dei prossimi cinque anni.",
  links: [
    { label: "Il Cairo religioso & la Cittadella", route: "it/cairo-religioso-e-cittadella.html" },
    { label: "Quando andare in Egitto", route: "it/quando-andare-in-egitto.html" },
    { label: "Egitto con i bambini", route: "it/egitto-con-bambini.html" },
  ],
};

// ── Portuguese (Brazil) ─────────────────────────────────────────────────────
const PT = datesIn("pt-BR", "1º");
const PT_WEEKS = weeks(["uma semana", "duas semanas", "três semanas", "quatro semanas", "cinco semanas"]);
const PT_SAME_WEEK = EASTER.same
  ? ` Em ${EASTER_Y}, tudo isso cai na mesma semana da Páscoa ocidental.`
  : "";

export const ptEaster: LocalizedPage = {
  groupId: "standalone-pt-easter",
  symbol: "lotus",
  theme: "easter",
  title: `Páscoa no Egito ${EASTER_Y}: Páscoa copta, datas e dicas | Kemet`,
  description: EASTER.same
    ? `Páscoa ${EASTER_Y} no Egito: todas as igrejas celebram em ${PT.C}, e o Sham El-Nessim vem em ${PT.S}. Semana Santa no Cairo, clima, feriado e reservas.`
    : `Páscoa ${EASTER_Y} no Egito: a ocidental em ${PT.W}, a copta em ${PT.C} e o Sham El-Nessim em ${PT.S}. Semana Santa no Cairo, clima, feriado e reservas.`,
  keywords:
    `páscoa no egito, páscoa no egito ${EASTER_Y}, páscoa copta, páscoa copta ${EASTER_Y}, viagem egito páscoa, feriado de páscoa viagem internacional, semana santa no egito, sham el-nessim`,
  crumb: "Páscoa no Egito",
  h1: "Páscoa no Egito",
  standfirst: EASTER.same
    ? `Em ${EASTER_Y}, todas as igrejas celebram a Páscoa no mesmo dia, ${PT.C}. E, na segunda-feira seguinte, o Egito inteiro sai ao ar livre.`
    : `Duas Páscoas na primavera egípcia: a ocidental em ${PT.W}, a copta em ${PT.CY}. E, na segunda-feira seguinte, o Egito inteiro sai ao ar livre.`,
  lede:
    "A Páscoa é uma boa época para o Egito por dois motivos que não têm nada a ver um com o outro. O primeiro é o clima: do fim de março ao fim de abril vão as últimas semanas tranquilas no vale do Nilo antes do calor. O segundo é que o Egito tem uma Páscoa só sua. A Igreja Copta Ortodoxa, fundada segundo a tradição por são Marcos em Alexandria, é a maior comunidade cristã do Oriente Médio e calcula a Páscoa pelo antigo cômputo juliano. Planejamos as viagens de Páscoa em torno dos dois calendários: os monumentos cedo, as igrejas do Cairo Antigo quando os visitantes são bem-vindos e os feriados longos em que os egípcios também viajam.",
  facts: EASTER.same
    ? [
        { label: "Páscoa (todas as igrejas)", value: PT.CY },
        { label: "Domingo de Ramos copto", value: PT.P },
        { label: "Sham El-Nessim", value: `segunda-feira, ${PT.S}` },
        { label: `Luxor em ${PT.wMonth}`, value: W_T.luxor },
      ]
    : [
        { label: "Páscoa ocidental", value: PT.WY },
        { label: "Páscoa copta", value: PT.CY },
        { label: "Sham El-Nessim", value: `segunda-feira, ${PT.S}` },
        { label: `Luxor em ${PT.wMonth}`, value: W_T.luxor },
      ],
  sections: [
    {
      title: "Duas Páscoas, uma primavera",
      body: EASTER.same
        ? `Em ${EASTER_Y} as duas Páscoas coincidem: católicos, protestantes e coptas ortodoxos, a Igreja do Egito, celebram juntos em ${PT.C}. Isso não acontece todo ano. Os coptas seguem, como os ortodoxos gregos e russos, o antigo cômputo juliano, e a Páscoa copta costuma cair até cinco semanas depois da ocidental. Para quem viaja, isso quer dizer que o feriado de Páscoa e a grande festa egípcia caem na mesma semana. Monumentos e museus ficam abertos.`
        : `Na maioria dos anos o Egito celebra a Páscoa duas vezes. Para as igrejas católica e protestantes, em ${EASTER_Y} ela cai em ${PT.W}: é a Páscoa que você conhece, com o feriado da Sexta-feira Santa. A Igreja Copta Ortodoxa, a do Egito, segue como os ortodoxos gregos e russos o antigo cômputo juliano, e a Páscoa copta cai em ${PT.C}, ${PT_WEEKS} depois.${PALM_IS_WESTERN ? " O domingo de Páscoa ocidental é, portanto, o Domingo de Ramos copto." : ""} No Egito, o domingo e a segunda-feira da Páscoa ocidental são dias úteis normais; monumentos e museus ficam abertos.`,
    },
    {
      title: "A Semana Santa no Cairo",
      body:
        `No domingo antes da Páscoa copta, em ${EASTER_Y} no dia ${PT.P}, as calçadas na frente das igrejas do Cairo ficam verdes. Vendedores trançam na sua frente folhas frescas de palmeira em cruzes, coroas, anéis e burrinhos para as crianças; as famílias levam tudo para casa e guardam por um ano. Depois vêm celebrações todos os dias. A liturgia de Páscoa acontece no sábado à noite: dura horas, termina depois da meia-noite ao som dos sinos e encerra um jejum de 55 dias, cerca de oito semanas. No Cairo Antigo, a Igreja Suspensa e Abu Serga, onde segundo a tradição a Sagrada Família se abrigou, ficam lotadas nessa noite. Em casa, voltam então à mesa a carne, os ovos e o queijo, com kahk e biscoitos, os mesmos doces de festa do Eid, a festa do fim do Ramadã. Na manhã de Páscoa, as pessoas se cumprimentam com «al-Masih qam» (Cristo ressuscitou) e respondem «bil-haqiqa qam» (ressuscitou de verdade).`,
    },
    {
      title: "Sham El-Nessim, a segunda-feira de todos",
      body:
        `Na segunda-feira depois da Páscoa copta, em ${EASTER_Y} no dia ${PT.S}, é o Sham El-Nessim, feriado nacional para todos, muçulmanos e cristãos. É uma festa de primavera com raízes no Egito antigo, mais antiga que as duas religiões. O dia é passado ao ar livre: à beira do Nilo, em parques e jardins, na corniche de Alexandria. Na mesa, ovos coloridos (de verdade, não de chocolate), cebola verde, alface, tremoços (termis) e fesikh, uma tainha salgada que nem todo mundo aprecia de primeira. Nesse dia, parques e orlas ficam lotados; por isso montamos o dia em torno do rio, num passeio de faluca ou numa ilha-jardim, longe da multidão.`,
    },
    {
      title: "Clima e khamsin",
      body:
        `No Brasil, a Páscoa cai no outono; no Egito, é primavera, e do fim de março ao fim de abril vão as últimas semanas fáceis no vale do Nilo antes do calor. ${EASTER.same ? "Na Páscoa" : "Na Páscoa ocidental"}, em ${PT.wMonth}, Luxor tem ${W_T.luxor} de dia, Assuã ${W_T.aswan} e o Cairo ${W_T.cairo}.${ONE_MONTH ? "" : ` Na Páscoa copta, em ${PT.cMonth}, Luxor chega a ${C_T.luxor} e o Cairo a ${C_T.cairo}.`} A partir de abril, no sul, fazemos o Vale dos Reis na abertura e deixamos as tardes livres; o Cairo é mais ameno. Entre março e maio pode soprar o khamsin, um vento de primavera quente e carregado de poeira, em geral por um ou dois dias. Por isso deixamos meio dia livre no roteiro.`,
    },
    {
      title: "Sexta-feira Santa, feriado e reservas",
      body:
        `A Sexta-feira Santa é feriado no Brasil e em Portugal: um fim de semana prolongado, e com quatro dias de férias dá para emendar nove dias seguidos. Vindo do Brasil, o voo é longo, então vale juntar mais alguns dias. Atenção, porém: a semana da Páscoa ocidental é alta temporada no Egito. Boa parte da Europa viaja nela, e as melhores cabines no Nilo, os quartos com vista para as pirâmides de Gizé e os voos para Abu Simbel acabam meses antes. Reserve com três a seis meses de antecedência. A Páscoa copta e o Sham El-Nessim são feriados egípcios: Alexandria, o Mar Vermelho e o Sinai se enchem de famílias egípcias, e os trens lotam.${PT_SAME_WEEK}`,
    },
  ],
  photos: photos(
    [
      "A nave da Igreja Suspensa, no Cairo Copta",
      "Cruzes trançadas com folhas de palmeira para o Domingo de Ramos",
      "A iconóstase da Igreja de Santa Bárbara, no Cairo Antigo",
      "Uma cruz copta esculpida na parede de tijolos da igreja de Abu Serga, no Cairo Antigo",
      "Ovos coloridos para a Páscoa e o Sham El-Nessim",
      "Kahk e biscoitos, os doces de festa da Páscoa e do Eid",
    ],
    ["Igreja Suspensa", "Domingo de Ramos", "Santa Bárbara, Cairo Antigo", "Abu Serga", "Ovos coloridos", "Kahk"],
  ),
  sharePhoto: EGGS,
  highlights: {
    heading: "Em resumo",
    items: [
      `Domingo de Ramos no Cairo, ${PT.P}: cruzes e coroas de palmeira trançadas na porta das igrejas`,
      "A noite de Páscoa no Cairo Antigo, com uma liturgia que termina depois da meia-noite, ao som dos sinos",
      `Sham El-Nessim, ${PT.S}: o Egito inteiro ao ar livre, com ovos coloridos e piquenique à beira do Nilo`,
      `As últimas semanas fáceis no vale do Nilo: o Cairo com ${W_T.cairo} em ${PT.wMonth}`,
      "Kahk e biscoitos, os doces de festa da Páscoa e do Eid",
    ],
  },
  faqs: [
    {
      q: `Quando é a Páscoa no Egito em ${EASTER_Y}?`,
      a: EASTER.same
        ? `Em ${EASTER_Y} as duas datas coincidem: católicos, protestantes e coptas ortodoxos celebram juntos em ${PT.CY}. O Domingo de Ramos é em ${PT.P}, e o Sham El-Nessim, feriado nacional de primavera, cai na segunda-feira, ${PT.SY}.`
        : `São duas datas. A Páscoa das igrejas católica e protestantes cai em ${PT.WY}. A Páscoa copta ortodoxa, a que o Egito celebra, cai em ${PT.CY}, e o Domingo de Ramos copto uma semana antes, em ${PT.P}. O Sham El-Nessim, feriado nacional de primavera, vem na segunda-feira, ${PT.SY}.`,
    },
    {
      q: "A Páscoa é feriado no Egito?",
      a: EASTER.same
        ? `Em ${EASTER_Y}, a segunda-feira depois da Páscoa é o Sham El-Nessim, feriado nacional para todos. O domingo de Páscoa é celebrado pelos cristãos do Egito. Monumentos e museus ficam abertos o tempo todo.`
        : "O feriado nacional, para todos, é o Sham El-Nessim, a segunda-feira depois da Páscoa copta. O domingo de Páscoa copta é celebrado pelos cristãos do Egito; o domingo e a segunda-feira da Páscoa ocidental são dias úteis normais. Monumentos e museus ficam abertos o tempo todo.",
    },
    {
      q: "Turistas podem assistir às celebrações de Páscoa no Cairo?",
      a: "Sim. As igrejas coptas recebem bem visitantes respeitosos, e igrejas católicas e anglicanas do Cairo celebram a Páscoa na data ocidental. Cubra ombros e joelhos (um lenço leve ajuda), fique no fundo durante a liturgia e pergunte antes de fotografar. As liturgias coptas são longas, e sair em silêncio não é problema. A Igreja Suspensa e Abu Serga ficam lotadas na noite de Páscoa; se quiser participar, nos avise e indicamos a igreja e a hora de chegar.",
    },
    {
      q: "A Páscoa é uma boa época para ir ao Egito?",
      a: `Sim, com duas ressalvas. Do fim de março ao fim de abril vão as últimas semanas agradáveis no vale do Nilo: em ${PT.wMonth}, o Cairo tem ${W_T.cairo} e Luxor ${W_T.luxor}. As ressalvas: lotação e preços na semana da Páscoa ocidental e o movimento dos próprios egípcios em torno do Sham El-Nessim. Reserve cedo e, no sul, faça as visitas de manhã.`,
    },
    {
      q: "O que é o Sham El-Nessim?",
      a: "A festa de primavera do Egito, na segunda-feira depois da Páscoa copta. Tem raízes no Egito antigo e, por ser mais antiga que o cristianismo e o islã, é celebrada por todos os egípcios. As famílias passam o dia ao ar livre, à beira do Nilo, em parques e jardins, na corniche de Alexandria, com ovos coloridos, cebola verde, tremoços e fesikh.",
    },
    {
      q: "Tem guia que fala português?",
      a: "Sim. A viagem é conduzida em português por guia especialista em egiptologia da nossa própria equipe, inclusive nas igrejas do Cairo Antigo. Toda viagem é privada: guia e veículo só para o seu grupo.",
    },
  ],
  cta: {
    heading: `Páscoa ${EASTER_Y} no Egito`,
    text: "Diga as datas e quantas pessoas são. Planejamos a viagem em torno dos dois calendários da Páscoa, com seu próprio veículo e guia especialista em egiptologia, e contamos o que acontece no Cairo na sua semana.",
    whatsapp: `Olá Kemet — queremos passar a Páscoa de ${EASTER_Y} no Egito.`,
    emailSubject: `Páscoa ${EASTER_Y} no Egito — pedido`,
  },
  moreLabel: "Em inglês",
  moreRoute: EN_PAGE,
  moreText: "Nossa página sobre a Páscoa no Egito, em inglês, com as datas dos próximos cinco anos.",
  links: [
    { label: "Melhor época para ir ao Egito", route: "pt/melhor-epoca-para-ir-ao-egito.html" },
    { label: "Viajar ao Egito saindo do Brasil", route: "pt/viajar-ao-egito-saindo-do-brasil.html" },
    { label: "Egito com crianças", route: "pt/egito-com-criancas.html" },
  ],
};
