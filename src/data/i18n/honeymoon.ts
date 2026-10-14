// ---------------------------------------------------------------------------
// Honeymoons in Egypt — one page per language.
//
// The English original is collections/honeymoon-egypt.html. These carry the
// same story the owner asked for on 13 Oct 2026 — the first sunrise of a
// marriage, over the nine pyramids, with a wedding-dress photo session or a
// proposal there — the same warm red-and-pink theme, and the same confirmed
// services: a photographer, flowers and decoration, a private dinner, a
// surprise in the room, spa time and a private chef. Hair and make-up is not
// offered and is not mentioned in any language.
//
// Written for each market, not translated: the Italian edition knows weddings
// cluster in summer and honeymoons follow in the autumn; the Indonesian and
// Malay editions speak to couples who may begin with an umrah, and call the
// shoot what it is called there; the Arabic one keeps the proposal discreet.
//
// Prices are the catalogue's, formatted per locale; the photograph is our own
// newly-wed guests at Giza.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import type { MediaPlaceholder } from "@/types/primitives";
import { tours } from "@/data/tours";

const HM = tours.find((t) => t.slug === "tour-honeymoon-9day")!;
const HM_DAYS = /^(\d+)/.exec(HM.durationLabel)?.[1] ?? "9";
const eur = (loc: string) =>
  new Intl.NumberFormat(loc, { style: "currency", currency: "EUR", maximumFractionDigits: 0, useGrouping: "always" }).format(HM.price);

const couple = (alt: string, label: string): MediaPlaceholder[] => [
  { src: "/images/clients/clients-03-giza-wedding.webp", alt, label, width: 680, height: 680 },
];

// ── German ──────────────────────────────────────────────────────────────────
export const deHoneymoon: LocalizedPage = {
  groupId: "standalone-de-honeymoon",
  symbol: "lotus",
  theme: "honeymoon",
  title: "Flitterwochen in Ägypten: Nil, Pyramiden & Rotes Meer | Kemet",
  description:
    "Hochzeitsreise nach Ägypten, ganz privat: Sonnenaufgang an den neun Pyramiden, eine Dahabiya unter Segeln, Feluke in Assuan, Rotes Meer — mit Fotoshooting.",
  keywords:
    "flitterwochen ägypten, hochzeitsreise ägypten, flitterwochen nilkreuzfahrt, hochzeitsreise pyramiden, fotoshooting brautkleid pyramiden, heiratsantrag pyramiden",
  crumb: "Flitterwochen",
  h1: "Flitterwochen in Ägypten",
  standfirst:
    "Zwei Menschen, fünftausend Jahre — und niemandes Zeitplan außer Ihrem eigenen.",
  lede:
    "Eine Hochzeitsreise hier ist kein Strandhotel mit angeschraubtem Tempel. Es ist eine Dahabiya unter Segeln, der Sonnenaufgang an den Pyramiden, bevor die Tore öffnen, und am Ende das Rote Meer — so geplant, dass Sie beide nie Teil einer Gruppe sind. Die Lotusblüte, paarweise verschlungen, war im alten Ägypten das Zeichen der Verbindung. Es passt.",
  facts: [
    { label: "Beste Zeit", value: "Oktober bis April" },
    { label: "Ideale Dauer", value: "9 bis 12 Nächte" },
    { label: "Sonnenaufgang", value: "an den neun Pyramiden" },
    { label: `${HM_DAYS}-Tage-Reise ab`, value: `${eur("de-DE")} p. P.` },
  ],
  story: {
    eyebrow: "Sonnenaufgang an den neun Pyramiden",
    heading: "Der erste Sonnenaufgang Ihres gemeinsamen Lebens",
    paragraphs: [
      "Bevor die Tore öffnen, solange Gizeh noch blau und still ist, bringen wir Sie beide zu einem ruhigen Aussichtspunkt in der Wüste, von dem aus alle neun Pyramiden in einer Linie stehen. Dann beginnt der Himmel — violett, dann rosa, dann golden —, und das erste Licht des Tages berührt die ältesten Bauwerke der Welt. Ein schöneres Bild für das, was Sie gerade begonnen haben, gibt es kaum: ein neuer Tag, der über etwas aufgeht, das für die Ewigkeit gebaut ist.",
      "Die Stunde gehört Ihnen. Manche Paare sitzen einfach eng beieinander und schauen. Manche bringen Brautkleid und Anzug mit, und ein Fotograf, den wir organisieren, macht die Bilder, von denen die meisten nur träumen — Sie beide, das Kleid im Morgenwind, neun Pyramiden am Horizont. Und manche kommen zu zweit und gehen verlobt: Die Blumen stehen bereit, bevor Sie ankommen, der Fotograf wartet außer Sicht, und Ihr Ägyptologe tritt im richtigen Moment zur Seite.",
      "Danach das Plateau vor den Besuchermassen, Frühstück und ein Tag in Ihrem Tempo. Und am Abend, wenn Sie mögen, ein Tisch für zwei — auf einer Feluke unter Segeln, auf einer Dachterrasse über dem islamischen Kairo oder in der Wüste unter mehr Sternen, als Sie je gesehen haben.",
    ],
    quote: "Jede Ehe hat einen ersten Sonnenaufgang. Möge Ihrer über den Pyramiden aufgehen — und jeder Morgen danach so golden sein.",
    photos: couple("Ein Brautpaar, Gäste von Kemet, in Hochzeitskleidung vor den Pyramiden von Gizeh", "Unsere Gäste, frisch verheiratet"),
  },
  sections: [
    {
      title: "Privat, von Anfang bis Ende",
      body:
        "Fast alles, was sich hier lohnt, lässt sich privat machen. Eine Dahabiya, das kleine Segelschiff aus der Zeit vor der Kreuzfahrtflotte, hat nur wenige Kabinen und legt an Inseln an, die große Schiffe nicht erreichen. Eine Feluke in Assuan zur goldenen Stunde ist das, woran sich Paare am längsten erinnern. Und in Luxor steigt der Ballon über dem Westufer kurz vor Sonnenaufgang auf.",
    },
    {
      title: "Zum Schluss das Rote Meer",
      body:
        "Neunzig Minuten Flug nach Osten, und Sie enden an einem Riff: drei oder vier Nächte, in denen die einzige Verpflichtung das Wasser ist. Erst das macht aus einer Rundreise eine Hochzeitsreise — Sie haben gemeinsam etwas Außergewöhnliches gesehen und sich danach wirklich erholt.",
    },
    {
      title: "Gut zu wissen",
      body:
        "Sagen Sie uns gleich bei der Anfrage, dass es die Flitterwochen sind: Zimmerkategorie, private Liegeplätze, ein eigener Tisch und der frühe Zugang müssen vorher arrangiert werden. Für Dezember und Januar rechnen Sie mit sechs Monaten Vorlauf. Und Ägypten ist in der Öffentlichkeit zurückhaltend: Zärtlichkeiten gehören ins Hotel und an Bord, wo sie völlig selbstverständlich sind.",
    },
  ],
  touches: {
    eyebrow: "Für zwei arrangiert",
    heading: "Was wir für Sie arrangieren",
    intro: "Alles auf Wunsch, privat und im Angebot einzeln ausgewiesen — es kommt nichts hinzu, worum Sie nicht gebeten haben.",
    items: [
      { symbol: "eye", title: "Ein Fotograf bei Sonnenaufgang", text: "Für ein Fotoshooting im Brautkleid am Aussichtspunkt der neun Pyramiden — oder um einen Heiratsantrag aus der Ferne festzuhalten, ohne gesehen zu werden." },
      { symbol: "lotus", title: "Blumen für den Moment", text: "Blumen und ein vorbereiteter Platz — am Aussichtspunkt, an Deck der Dahabiya oder an Ihrem Tisch —, arrangiert, bevor Sie ankommen." },
      { symbol: "boat", title: "Ein Tisch für zwei", text: "Dinner auf einer Feluke unter Segeln, auf einer Dachterrasse über dem islamischen Kairo oder in einem Wüstencamp unter den Sternen." },
      { symbol: "scarab", title: "Eine Überraschung im Zimmer", text: "Torte, Blumen und ein geschmücktes Zimmer oder eine Kabine — für die Ankunft, einen Geburtstag oder den Jahrestag, den Sie feiern." },
      { symbol: "palm", title: "Zeit im Spa", text: "Eine Massage oder Spa-Zeit im Hotel oder an Bord, an den Tagen, die fürs Nichtstun gemacht sind." },
      { symbol: "ankh", title: "Ein privater Koch", text: "Ein Koch, der nur für Sie beide kocht — auf der Dahabiya, in einer Villa oder in einem privaten Wüstencamp." },
    ],
  },
  faqs: [
    { q: "Ist Ägypten gut für die Flitterwochen?", a: "Ungewöhnlich gut, aus einem bestimmten Grund: Fast alles lässt sich hier wirklich privat machen — eine Dahabiya, der frühe Zugang in Gizeh, eine Feluke zur goldenen Stunde, ein privates Boot am Riff. Sie bekommen eines der großen Reiseziele der Welt und dazu die Zweisamkeit, die eine Hochzeitsreise braucht." },
    { q: "Können wir ein Fotoshooting im Brautkleid oder einen Heiratsantrag an den Pyramiden machen?", a: "Ja. Bei Sonnenaufgang bringen wir Sie zu einem ruhigen Aussichtspunkt, von dem aus alle neun Pyramiden zu sehen sind, und die Zeit dort gehört Ihnen. Wir organisieren einen Fotografen für das Shooting — oder für einen Antrag, aus der Ferne fotografiert — und stellen vorher Blumen bereit. Bei einem Antrag halten wir alles vor Ihrem Partner geheim." },
    { q: "Wie viele Tage braucht man?", a: "Neun bis zwölf Nächte: drei in Kairo und Gizeh, vier oder fünf auf dem Nil zwischen Luxor und Assuan, drei oder vier am Roten Meer. Kürzer geht, aber das Ende am Meer braucht eigene Tage." },
    { q: "Was ist eine Dahabiya, und lohnt sie sich?", a: "Ein kleines Nilschiff mit zwei Segeln und meist weniger als einem Dutzend Kabinen. Sie segelt statt zu motoren, legt an Inseln und Dörfern an, und das Tempo ist ein völlig anderes. Für Flitterwochen ist sie meist das schönste Upgrade — und weil es so wenige Kabinen gibt, wird sie zuerst gebucht." },
  ],
  cta: {
    heading: "Erzählen Sie uns von Ihrer Reise",
    text: "Termine und Wünsche genügen — wir planen Ihre Hochzeitsreise mit ausgewiesenem Preis, unverbindlich.",
    whatsapp: "Guten Tag Kemet — wir planen unsere Flitterwochen in Ägypten.",
    emailSubject: "Flitterwochen in Ägypten — Anfrage",
  },
  moreLabel: "Weiter",
  moreRoute: "de/aegypten-reisen.html",
  moreText: "Alle Reiseverläufe Tag für Tag und auf Deutsch finden Sie auf der Reisen-Seite.",
  links: [
    { label: "Sonnenaufgang an den Pyramiden", route: "de/sonnenaufgang-pyramiden-gizeh.html" },
    { label: "Nilkreuzfahrt", route: "de/nilkreuzfahrt.html" },
    { label: "Beste Reisezeit für Ägypten", route: "de/beste-reisezeit-aegypten.html" },
  ],
};

// ── French ──────────────────────────────────────────────────────────────────
export const frHoneymoon: LocalizedPage = {
  groupId: "standalone-fr-honeymoon",
  symbol: "lotus",
  theme: "honeymoon",
  title: "Voyage de noces en Égypte : Nil, pyramides et mer Rouge | Kemet",
  description:
    "Un voyage de noces en Égypte, tout en privé : le lever du soleil sur les neuf pyramides, une dahabiya à la voile, une felouque à Assouan, la mer Rouge.",
  keywords:
    "voyage de noces egypte, lune de miel egypte, croisiere nil voyage de noces, demande en mariage pyramides, seance photo robe de mariee pyramides, egypte en amoureux",
  crumb: "Voyage de noces",
  h1: "Voyage de noces en Égypte",
  standfirst:
    "Deux personnes, cinq mille ans d'histoire — et aucun autre emploi du temps que le vôtre.",
  lede:
    "Ici, un voyage de noces n'est pas un hôtel de plage avec un temple en option. C'est une dahabiya à la voile, le lever du soleil sur les pyramides avant l'ouverture, et la mer Rouge pour finir — organisé pour que vous ne soyez jamais deux au milieu d'un groupe. Le lotus, enlacé par paires, était dans l'Égypte ancienne le symbole de l'union. Cela tombe bien.",
  facts: [
    { label: "Meilleure période", value: "d'octobre à avril" },
    { label: "Durée idéale", value: "9 à 12 nuits" },
    { label: "Lever du soleil", value: "sur les neuf pyramides" },
    { label: `Voyage de ${HM_DAYS} jours dès`, value: `${eur("fr-FR")} / pers.` },
  ],
  story: {
    eyebrow: "Lever du soleil sur les neuf pyramides",
    heading: "Le premier lever de soleil de votre vie à deux",
    paragraphs: [
      "Avant l'ouverture, quand Gizeh est encore bleue et silencieuse, nous vous emmenons tous les deux vers un point de vue tranquille du désert, d'où les neuf pyramides se tiennent sur une seule ligne. Puis le ciel commence — violet, puis rose, puis or — et la première lumière du jour touche les plus anciens monuments du monde. Difficile d'imaginer plus belle image de ce que vous venez de commencer : un jour nouveau qui se lève sur quelque chose de bâti pour toujours.",
      "Cette heure est à vous. Certains couples s'assoient simplement l'un contre l'autre et regardent. D'autres apportent la robe de mariée et le costume, et un photographe que nous organisons signe les portraits dont tout le monde rêve — vous deux, la robe dans le vent de l'aube, neuf pyramides à l'horizon. Et certains arrivent à deux et repartent fiancés : les fleurs sont en place avant votre arrivée, le photographe attend hors de vue, et votre égyptologue s'éclipse au moment exact.",
      "Ensuite, le plateau avant la foule, le petit-déjeuner, et une journée à votre rythme. Le soir, si vous le souhaitez, une table pour deux — sur une felouque à la voile, sur un toit au-dessus du Caire islamique, ou dans le désert sous plus d'étoiles que vous n'en avez jamais vu.",
    ],
    quote: "Chaque mariage a son premier lever de soleil. Que le vôtre se lève sur les pyramides — et que chaque matin qui suivra soit aussi doré.",
    photos: couple("Un couple de jeunes mariés, voyageurs de Kemet, en tenue de mariage devant les pyramides de Gizeh", "Nos voyageurs, jeunes mariés"),
  },
  sections: [
    {
      title: "En privé, du début à la fin",
      body:
        "Presque tout ce qui compte ici peut se faire en privé. Une dahabiya, le petit voilier qui précède la flotte de croisière, compte quelques cabines et accoste aux îles que les grands bateaux ne peuvent pas atteindre. Une felouque à Assouan à l'heure dorée est ce dont les couples se souviennent le plus longtemps. Et à Louxor, la montgolfière s'élève au-dessus de la rive ouest juste avant l'aube.",
    },
    {
      title: "La mer Rouge pour finir",
      body:
        "Quatre-vingt-dix minutes de vol vers l'est, et vous terminez sur un récif : trois ou quatre nuits où la seule obligation est l'eau. C'est ce qui fait d'un circuit un voyage de noces — vous aurez vu ensemble quelque chose d'extraordinaire, et vous vous serez vraiment reposés.",
    },
    {
      title: "Bon à savoir",
      body:
        "Dites-nous dès la demande qu'il s'agit d'un voyage de noces : catégorie de chambre, amarrages privés, table à part et accès à l'aube se réservent à l'avance. Pour décembre et janvier, comptez six mois. Et l'Égypte est pudique en public : la tendresse se réserve à l'hôtel et à bord, où elle est tout à fait naturelle.",
    },
  ],
  touches: {
    eyebrow: "Organisé pour deux",
    heading: "Les attentions que nous organisons",
    intro: "Chacune sur demande, en privé, et détaillée dans votre devis — rien n'est ajouté que vous n'ayez demandé.",
    items: [
      { symbol: "eye", title: "Un photographe au lever du soleil", text: "Pour une séance photo en robe de mariée face aux neuf pyramides, ou pour saisir une demande en mariage de loin, sans jamais être vu." },
      { symbol: "lotus", title: "Des fleurs pour l'instant", text: "Des fleurs et une place dressée — au point de vue, sur le pont de la dahabiya ou à votre table — avant votre arrivée." },
      { symbol: "boat", title: "Une table pour deux", text: "Un dîner sur une felouque à la voile, sur un toit au-dessus du Caire islamique ou dans un camp du désert sous les étoiles." },
      { symbol: "scarab", title: "Une surprise dans la chambre", text: "Un gâteau, des fleurs et une chambre ou une cabine décorée — pour l'arrivée, un anniversaire ou l'anniversaire de mariage." },
      { symbol: "palm", title: "Un moment au spa", text: "Un massage ou un soin à l'hôtel ou à bord, les jours faits pour ne rien faire du tout." },
      { symbol: "ankh", title: "Un chef privé", text: "Un chef qui cuisine pour vous deux seulement — sur une dahabiya, dans une villa ou dans un camp privé du désert." },
    ],
  },
  faqs: [
    { q: "L'Égypte est-elle une bonne destination de voyage de noces ?", a: "Remarquablement bonne, pour une raison précise : presque tout peut s'y faire vraiment en privé — une dahabiya, l'accès matinal à Gizeh, une felouque à l'heure dorée, un bateau privé sur le récif. Vous avez l'une des grandes destinations du monde, et l'intimité qu'exige un voyage de noces." },
    { q: "Peut-on faire une séance photo en robe de mariée ou une demande en mariage aux pyramides ?", a: "Oui. Au lever du soleil, nous vous emmenons vers un point de vue tranquille d'où l'on voit les neuf pyramides, et le temps sur place est à vous. Nous organisons un photographe pour la séance — ou pour une demande photographiée de loin — et des fleurs installées avant votre arrivée. Pour une demande, nous gardons le secret vis-à-vis de votre partenaire." },
    { q: "Combien de jours prévoir ?", a: "Neuf à douze nuits : trois au Caire et à Gizeh, quatre ou cinq sur le Nil entre Louxor et Assouan, trois ou quatre en mer Rouge. On peut faire plus court, mais la fin au bord de la mer mérite ses propres jours." },
    { q: "Qu'est-ce qu'une dahabiya, et cela vaut-il la peine ?", a: "Un petit voilier du Nil à deux voiles, avec en général moins d'une douzaine de cabines. Il navigue à la voile, accoste aux îles et aux villages, et le rythme n'a rien à voir. Pour un voyage de noces, c'est souvent le plus beau surclassement — et comme les cabines sont rares, c'est la première chose à réserver." },
  ],
  cta: {
    heading: "Racontez-nous votre voyage",
    text: "Vos dates et vos envies suffisent : nous préparons votre voyage de noces avec un prix détaillé, sans engagement.",
    whatsapp: "Bonjour Kemet — nous préparons notre voyage de noces en Égypte.",
    emailSubject: "Voyage de noces en Égypte — demande",
  },
  moreLabel: "Continuer",
  moreRoute: "fr/voyage-egypte.html",
  moreText: "Tous nos itinéraires, jour par jour et en français, sont sur la page des voyages.",
  links: [
    { label: "Le lever du soleil aux pyramides", route: "fr/lever-du-soleil-pyramides-gizeh.html" },
    { label: "Croisière sur le Nil", route: "fr/croisiere-sur-le-nil.html" },
    { label: "Quand partir en Égypte", route: "fr/quand-partir-en-egypte.html" },
  ],
};

// ── Spanish ─────────────────────────────────────────────────────────────────
export const esHoneymoon: LocalizedPage = {
  groupId: "standalone-es-honeymoon",
  symbol: "lotus",
  theme: "honeymoon",
  title: "Luna de miel en Egipto: Nilo, pirámides y mar Rojo | Kemet",
  description:
    "Luna de miel en Egipto, todo en privado: el amanecer sobre las nueve pirámides, una dahabiya a vela, una falúa en Asuán y el mar Rojo, con sesión de fotos.",
  keywords:
    "luna de miel en egipto, viaje de novios egipto, crucero por el nilo luna de miel, pedida de mano en las piramides, sesion de fotos vestido de novia piramides",
  crumb: "Luna de miel",
  h1: "Luna de miel en Egipto",
  standfirst:
    "Dos personas, cinco mil años de historia y ningún horario que no sea el suyo.",
  lede:
    "Aquí una luna de miel no es un hotel de playa con un templo de excursión. Es una dahabiya a vela, el amanecer en las pirámides antes de que abran, y el mar Rojo para terminar, organizado para que nunca sean dos personas dentro de un grupo. El loto, entrelazado por parejas, era en el antiguo Egipto el símbolo de la unión. Viene al caso.",
  facts: [
    { label: "Mejor época", value: "de octubre a abril" },
    { label: "Duración ideal", value: "9 a 12 noches" },
    { label: "Amanecer", value: "sobre las nueve pirámides" },
    { label: `Viaje de ${HM_DAYS} días desde`, value: `${eur("es-ES")} por persona` },
  ],
  story: {
    eyebrow: "Amanecer sobre las nueve pirámides",
    heading: "El primer amanecer de su vida juntos",
    paragraphs: [
      "Antes de que abran las puertas, cuando Giza todavía está azul y en silencio, los llevamos a un mirador tranquilo del desierto desde el que las nueve pirámides se alinean en una sola fila. Entonces empieza el cielo —violeta, luego rosa, luego oro— y la primera luz del día toca los monumentos más antiguos del mundo. Es difícil imaginar una imagen mejor de lo que acaban de empezar: un día nuevo que amanece sobre algo construido para siempre.",
      "Esa hora es suya. Hay parejas que solo se sientan muy juntas a mirar. Otras traen el vestido de novia y el traje, y un fotógrafo que organizamos hace los retratos con los que casi todos sueñan: ustedes dos, el vestido al viento del alba, nueve pirámides en el horizonte. Y otras llegan siendo dos y se van prometidas: las flores están colocadas antes de que lleguen, el fotógrafo espera sin dejarse ver y su egiptólogo se aparta en el momento justo.",
      "Después, la meseta antes de la multitud, el desayuno y un día a su ritmo. Por la noche, si les apetece, una mesa para dos: en una falúa a vela, en una azotea sobre El Cairo islámico o en el desierto bajo más estrellas de las que han visto nunca.",
    ],
    quote: "Todo matrimonio tiene un primer amanecer. Que el suyo salga sobre las pirámides, y que cada mañana después sea igual de dorada.",
    photos: couple("Una pareja de recién casados, viajeros de Kemet, vestidos de boda ante las pirámides de Giza", "Nuestros viajeros, recién casados"),
  },
  sections: [
    {
      title: "En privado, de principio a fin",
      body:
        "Casi todo lo que merece la pena aquí puede hacerse en privado. Una dahabiya, el pequeño velero anterior a la flota de cruceros, tiene pocos camarotes y atraca en islas a las que los grandes barcos no llegan. Una falúa en Asuán a la hora dorada es lo que las parejas recuerdan durante más tiempo. Y en Luxor, el globo se eleva sobre la orilla oeste justo antes del amanecer.",
    },
    {
      title: "El mar Rojo para terminar",
      body:
        "Noventa minutos de vuelo hacia el este y terminan en un arrecife: tres o cuatro noches en las que la única obligación es el agua. Es lo que convierte un circuito en una luna de miel: habrán visto juntos algo extraordinario y, además, habrán descansado de verdad. Si se casan en primavera o verano, octubre es el mes perfecto para salir.",
    },
    {
      title: "Conviene saber",
      body:
        "Díganos desde el primer mensaje que es su luna de miel: la categoría de habitación, los amarres privados, una mesa aparte y el acceso al alba se reservan con antelación. Para diciembre y enero, cuenten con seis meses. Y Egipto es reservado en público: el cariño, en el hotel y a bordo, donde es de lo más natural.",
    },
  ],
  touches: {
    eyebrow: "Para dos",
    heading: "Los detalles que organizamos",
    intro: "Cada uno a petición, en privado y desglosado en su presupuesto: no se añade nada que no hayan pedido.",
    items: [
      { symbol: "eye", title: "Un fotógrafo al amanecer", text: "Para una sesión de fotos con el vestido de novia frente a las nueve pirámides, o para captar una pedida de mano desde lejos, sin que nadie lo note." },
      { symbol: "lotus", title: "Flores para el momento", text: "Flores y un rincón preparado —en el mirador, en la cubierta de la dahabiya o en su mesa— antes de que lleguen." },
      { symbol: "boat", title: "Una mesa para dos", text: "Una cena en una falúa a vela, en una azotea sobre El Cairo islámico o en un campamento del desierto bajo las estrellas." },
      { symbol: "scarab", title: "Una sorpresa en la habitación", text: "Una tarta, flores y una habitación o un camarote decorados: para la llegada, un cumpleaños o el aniversario que vienen a celebrar." },
      { symbol: "palm", title: "Un rato de spa", text: "Un masaje o una sesión de spa en el hotel o a bordo, los días pensados para no hacer nada." },
      { symbol: "ankh", title: "Un chef privado", text: "Un chef que cocina solo para ustedes dos: en una dahabiya, en una villa o en un campamento privado en el desierto." },
    ],
  },
  faqs: [
    { q: "¿Es Egipto un buen destino de luna de miel?", a: "Inusualmente bueno, por una razón concreta: casi todo puede hacerse de verdad en privado —una dahabiya, el acceso temprano a Giza, una falúa a la hora dorada, un barco privado en el arrecife—. Tienen uno de los grandes destinos del mundo y la intimidad que necesita una luna de miel." },
    { q: "¿Podemos hacer una sesión de fotos con el vestido de novia o una pedida de mano en las pirámides?", a: "Sí. Al amanecer los llevamos a un mirador tranquilo desde el que se ven las nueve pirámides, y el tiempo allí es suyo. Organizamos un fotógrafo para la sesión —o para una pedida fotografiada desde lejos— y flores colocadas antes de que lleguen. Si es una pedida, se lo guardamos en secreto a su pareja." },
    { q: "¿Cuántos días hacen falta?", a: "De nueve a doce noches: tres en El Cairo y Giza, cuatro o cinco en el Nilo entre Luxor y Asuán, y tres o cuatro en el mar Rojo. Se puede hacer en menos, pero el final junto al mar necesita sus propios días." },
    { q: "¿Qué es una dahabiya y merece la pena?", a: "Un pequeño velero del Nilo de dos velas, normalmente con menos de una docena de camarotes. Navega a vela, atraca en islas y pueblos, y el ritmo es otro. Para una luna de miel suele ser la mejor mejora del viaje, y como hay tan pocos camarotes, es lo primero que se reserva." },
  ],
  cta: {
    heading: "Cuéntennos su viaje",
    text: "Las fechas y lo que les ilusiona bastan: preparamos su luna de miel con el precio detallado y sin compromiso.",
    whatsapp: "Hola Kemet: estamos preparando nuestra luna de miel en Egipto.",
    emailSubject: "Luna de miel en Egipto — consulta",
  },
  moreLabel: "Seguir",
  moreRoute: "es/viajes-a-egipto.html",
  moreText: "Todos nuestros itinerarios, día a día y en español, están en la página de viajes.",
  links: [
    { label: "Amanecer en las pirámides", route: "es/amanecer-en-las-piramides-de-giza.html" },
    { label: "Crucero por el Nilo", route: "es/crucero-por-el-nilo.html" },
    { label: "Mejor época para viajar a Egipto", route: "es/mejor-epoca-para-viajar-a-egipto.html" },
  ],
};

// ── Italian ─────────────────────────────────────────────────────────────────
export const itHoneymoon: LocalizedPage = {
  groupId: "standalone-it-honeymoon",
  symbol: "lotus",
  theme: "honeymoon",
  title: "Viaggio di nozze in Egitto: Nilo, piramidi e Mar Rosso | Kemet",
  description:
    "Viaggio di nozze in Egitto, tutto privato: l'alba sulle nove piramidi, una dahabiya a vela, una feluca ad Assuan e il Mar Rosso — con servizio fotografico.",
  keywords:
    "viaggio di nozze egitto, luna di miele egitto, crociera sul nilo viaggio di nozze, proposta di matrimonio piramidi, servizio fotografico abito da sposa piramidi",
  crumb: "Viaggio di nozze",
  h1: "Viaggio di nozze in Egitto",
  standfirst:
    "Due persone, cinquemila anni di storia — e nessun programma che non sia il vostro.",
  lede:
    "Qui un viaggio di nozze non è un resort con un tempio aggiunto. È una dahabiya a vela, l'alba sulle piramidi prima dell'apertura e il Mar Rosso per finire, organizzato perché non siate mai due persone dentro un gruppo. Il loto, intrecciato a coppie, era nell'antico Egitto il simbolo dell'unione. Calza a pennello.",
  facts: [
    { label: "Periodo migliore", value: "da ottobre ad aprile" },
    { label: "Durata ideale", value: "9–12 notti" },
    { label: "L'alba", value: "sulle nove piramidi" },
    { label: `Viaggio di ${HM_DAYS} giorni da`, value: `${eur("it-IT")} a persona` },
  ],
  story: {
    eyebrow: "L'alba sulle nove piramidi",
    heading: "La prima alba della vostra vita insieme",
    paragraphs: [
      "Prima dell'apertura, quando Giza è ancora blu e silenziosa, vi portiamo in un punto panoramico tranquillo nel deserto, da cui tutte e nove le piramidi stanno in un'unica fila. Poi comincia il cielo — viola, poi rosa, poi oro — e la prima luce del giorno tocca i monumenti più antichi del mondo. Difficile pensare a un'immagine più bella di ciò che avete appena iniziato: un giorno nuovo che sorge su qualcosa costruito per durare per sempre.",
      "Quell'ora è vostra. Alcune coppie si siedono vicine e guardano, semplicemente. Altre portano l'abito da sposa e il vestito, e un fotografo che organizziamo firma i ritratti che quasi tutti sognano — voi due, l'abito nel vento dell'alba, nove piramidi all'orizzonte. E altre arrivano in due e ripartono fidanzate: i fiori sono già al loro posto, il fotografo aspetta senza farsi vedere e il vostro egittologo si allontana nel momento esatto.",
      "Poi l'altopiano prima della folla, la colazione e una giornata al vostro ritmo. La sera, se vi va, un tavolo per due — su una feluca a vela, su una terrazza sopra il Cairo islamico o nel deserto sotto più stelle di quante ne abbiate mai viste.",
    ],
    quote: "Ogni matrimonio ha la sua prima alba. Che la vostra sorga sulle piramidi — e che ogni mattina dopo sia altrettanto dorata.",
    photos: couple("Una coppia di sposi, ospiti di Kemet, in abito nuziale davanti alle piramidi di Giza", "I nostri ospiti, appena sposati"),
  },
  sections: [
    {
      title: "Dopo le nozze d'estate, l'Egitto d'autunno",
      body:
        "In Italia ci si sposa soprattutto tra maggio e settembre, e il viaggio di nozze arriva subito dopo. È una fortuna: da ottobre la valle del Nilo torna piacevole, il Mar Rosso è ancora caldo, e i giorni sono lunghi e luminosi. Chi si sposa a settembre trova a ottobre il momento perfetto per partire.",
    },
    {
      title: "Privato, dall'inizio alla fine",
      body:
        "Quasi tutto ciò che conta qui si può fare in privato. Una dahabiya, il piccolo veliero che precede la flotta delle crociere, ha poche cabine e attracca a isole che le grandi navi non raggiungono. Una feluca ad Assuan all'ora d'oro è ciò che le coppie ricordano più a lungo. A Luxor la mongolfiera si alza sulla riva occidentale poco prima dell'alba, e alla fine novanta minuti di volo vi portano su una barriera corallina.",
    },
    {
      title: "Da sapere",
      body:
        "Diteci fin dal primo messaggio che è il vostro viaggio di nozze: categoria di camera, ormeggi privati, un tavolo appartato e l'accesso all'alba vanno prenotati prima. Per dicembre e gennaio contate sei mesi. E l'Egitto è riservato in pubblico: le tenerezze, in albergo e a bordo, dove sono del tutto naturali.",
    },
  ],
  touches: {
    eyebrow: "Per due",
    heading: "Le attenzioni che organizziamo",
    intro: "Ciascuna su richiesta, in privato e indicata a parte nel preventivo — non si aggiunge nulla che non abbiate chiesto.",
    items: [
      { symbol: "eye", title: "Un fotografo all'alba", text: "Per un servizio fotografico in abito da sposa davanti alle nove piramidi, o per cogliere una proposta di matrimonio da lontano, senza farsi vedere." },
      { symbol: "lotus", title: "Fiori per il momento", text: "Fiori e un angolo preparato — al punto panoramico, sul ponte della dahabiya o al vostro tavolo — prima del vostro arrivo." },
      { symbol: "boat", title: "Un tavolo per due", text: "Una cena su una feluca a vela, su una terrazza sopra il Cairo islamico o in un campo nel deserto sotto le stelle." },
      { symbol: "scarab", title: "Una sorpresa in camera", text: "Una torta, fiori e una camera o una cabina decorata — per l'arrivo, un compleanno o l'anniversario che venite a festeggiare." },
      { symbol: "palm", title: "Tempo per la spa", text: "Un massaggio o un trattamento in albergo o a bordo, nei giorni fatti per non fare niente." },
      { symbol: "ankh", title: "Uno chef privato", text: "Uno chef che cucina solo per voi due — su una dahabiya, in una villa o in un campo privato nel deserto." },
    ],
  },
  faqs: [
    { q: "L'Egitto è una buona meta per il viaggio di nozze?", a: "Insolitamente buona, per un motivo preciso: quasi tutto si può fare davvero in privato — una dahabiya, l'accesso all'alba a Giza, una feluca all'ora d'oro, una barca privata sulla barriera. Avete una delle grandi mete del mondo e l'intimità che un viaggio di nozze richiede." },
    { q: "Possiamo fare un servizio fotografico in abito da sposa o una proposta alle piramidi?", a: "Sì. All'alba vi portiamo in un punto panoramico tranquillo da cui si vedono tutte e nove le piramidi, e il tempo lì è vostro. Organizziamo un fotografo per il servizio — o per una proposta fotografata da lontano — e fiori pronti prima del vostro arrivo. Se è una proposta, manteniamo il segreto con il partner." },
    { q: "Quanti giorni servono?", a: "Da nove a dodici notti: tre al Cairo e a Giza, quattro o cinque sul Nilo tra Luxor e Assuan, tre o quattro sul Mar Rosso. Si può fare in meno, ma il finale al mare ha bisogno dei suoi giorni." },
    { q: "Che cos'è una dahabiya, e vale la pena?", a: "Un piccolo veliero del Nilo a due vele, di solito con meno di una dozzina di cabine. Naviga a vela, attracca a isole e villaggi, e il ritmo è un altro. Per un viaggio di nozze è spesso il miglior upgrade, e siccome le cabine sono poche è la prima cosa da prenotare." },
  ],
  cta: {
    heading: "Raccontateci il vostro viaggio",
    text: "Date e desideri bastano: prepariamo il vostro viaggio di nozze con il prezzo dettagliato, senza impegno.",
    whatsapp: "Buongiorno Kemet, stiamo organizzando il nostro viaggio di nozze in Egitto.",
    emailSubject: "Viaggio di nozze in Egitto — richiesta",
  },
  moreLabel: "Continuare",
  moreRoute: "it/viaggi-in-egitto.html",
  moreText: "Tutti i nostri itinerari, giorno per giorno e in italiano, sono nella pagina dei viaggi.",
  links: [
    { label: "L'alba alle piramidi", route: "it/alba-alle-piramidi-di-giza.html" },
    { label: "Crociera sul Nilo", route: "it/crociera-sul-nilo.html" },
    { label: "Dove dormire in Egitto", route: "it/dove-dormire-in-egitto.html" },
  ],
};

// ── Russian ─────────────────────────────────────────────────────────────────
export const ruHoneymoon: LocalizedPage = {
  groupId: "standalone-ru-honeymoon",
  symbol: "lotus",
  theme: "honeymoon",
  title: "Медовый месяц в Египте: Нил, пирамиды и море | Kemet",
  description:
    "Свадебное путешествие в Египет, всё индивидуально: рассвет у девяти пирамид, дахабия под парусом, фелука в Асуане и Красное море — с фотосессией.",
  keywords:
    "медовый месяц в египте, свадебное путешествие египет, круиз по нилу медовый месяц, предложение у пирамид, фотосессия в свадебном платье у пирамид",
  crumb: "Медовый месяц",
  h1: "Медовый месяц в Египте",
  standfirst:
    "Двое, пять тысяч лет истории — и никакого расписания, кроме вашего собственного.",
  lede:
    "Медовый месяц здесь — это не пляжный отель с экскурсией в храм. Это дахабия под парусом, рассвет у пирамид до открытия и Красное море в финале — устроенные так, чтобы вы ни разу не оказались частью группы. Лотос, сплетённый попарно, в Древнем Египте был символом союза. Очень к месту.",
  facts: [
    { label: "Лучшее время", value: "с октября по апрель" },
    { label: "Идеальная длительность", value: "9–12 ночей" },
    { label: "Рассвет", value: "у девяти пирамид" },
    { label: `Тур на ${HM_DAYS} дней от`, value: `${eur("ru-RU")} с человека` },
  ],
  story: {
    eyebrow: "Рассвет у девяти пирамид",
    heading: "Первый рассвет вашей общей жизни",
    paragraphs: [
      "До открытия, пока Гиза ещё синяя и тихая, мы привозим вас двоих на спокойную смотровую точку в пустыне, откуда все девять пирамид стоят в одну линию. Потом начинается небо — фиолетовое, затем розовое, затем золотое, — и первый свет дня касается древнейших сооружений на земле. Трудно придумать лучший образ для того, что вы только что начали: новый день, восходящий над тем, что построено навсегда.",
      "Этот час принадлежит вам. Одни пары просто сидят рядом и смотрят. Другие привозят свадебное платье и костюм, и фотограф, которого мы организуем, делает портреты, о которых мечтают почти все: вы вдвоём, платье на утреннем ветру, девять пирамид на горизонте. А кто-то приезжает вдвоём, а уезжает помолвленным: цветы уже на месте, фотограф ждёт незаметно, а ваш египтолог отходит в нужную минуту.",
      "Потом плато до наплыва туристов, завтрак и день в вашем ритме. А вечером, если захотите, столик на двоих — на фелуке под парусом, на крыше над исламским Каиром или в пустыне под небом, где звёзд больше, чем вы когда-либо видели.",
    ],
    quote: "У каждого брака есть свой первый рассвет. Пусть ваш взойдёт над пирамидами — и пусть каждое утро после него будет таким же золотым.",
    photos: couple("Молодожёны, гости Kemet, в свадебных нарядах на фоне пирамид Гизы", "Наши гости, только что поженились"),
  },
  sections: [
    {
      title: "Индивидуально от начала до конца",
      body:
        "Почти всё стоящее здесь можно сделать приватно. Дахабия — небольшое парусное судно времён до круизной флотилии — имеет лишь несколько кают и швартуется у островов, куда большие теплоходы не заходят. Фелука в Асуане в золотой час запоминается парам дольше всего. А в Луксоре воздушный шар поднимается над западным берегом перед рассветом.",
    },
    {
      title: "В финале — Красное море",
      body:
        "Полтора часа перелёта на восток — и вы заканчиваете путешествие у кораллового рифа: три-четыре ночи, где единственная обязанность — вода. Именно это превращает экскурсионный тур в медовый месяц: вы вместе увидели нечто необыкновенное и по-настоящему отдохнули.",
    },
    {
      title: "Что важно знать",
      body:
        "Сразу скажите нам, что это медовый месяц: категория номера, частные стоянки, отдельный столик и доступ на рассвете бронируются заранее. На декабрь и январь закладывайте полгода. И Египет сдержан на людях: нежности — в отеле и на борту, где они совершенно естественны.",
    },
  ],
  touches: {
    eyebrow: "Для двоих",
    heading: "Что мы устраиваем для вас",
    intro: "Всё по запросу, приватно и отдельной строкой в предложении — ничего лишнего без вашей просьбы.",
    items: [
      { symbol: "eye", title: "Фотограф на рассвете", text: "Для фотосессии в свадебном платье у девяти пирамид — или чтобы незаметно снять предложение руки и сердца издалека." },
      { symbol: "lotus", title: "Цветы для этого момента", text: "Цветы и подготовленное место — на смотровой точке, на палубе дахабии или у вашего столика — ещё до вашего приезда." },
      { symbol: "boat", title: "Столик на двоих", text: "Ужин на фелуке под парусом, на крыше над исламским Каиром или в лагере в пустыне под звёздами." },
      { symbol: "scarab", title: "Сюрприз в номере", text: "Торт, цветы и украшенный номер или каюта — к приезду, ко дню рождения или к годовщине, которую вы отмечаете." },
      { symbol: "palm", title: "Время для спа", text: "Массаж или спа-процедуры в отеле или на борту — в дни, созданные для безделья." },
      { symbol: "ankh", title: "Личный повар", text: "Повар, который готовит только для вас двоих — на дахабии, на вилле или в частном лагере в пустыне." },
    ],
  },
  faqs: [
    { q: "Подходит ли Египет для медового месяца?", a: "Необычайно хорошо, и по понятной причине: почти всё здесь можно сделать по-настоящему приватно — дахабию, ранний доступ в Гизу, фелуку в золотой час, частную лодку на рифе. Вы получаете одно из великих направлений мира и уединение, которое нужно медовому месяцу." },
    { q: "Можно ли устроить фотосессию в свадебном платье или предложение у пирамид?", a: "Да. На рассвете мы привозим вас на спокойную смотровую точку, откуда видны все девять пирамид, и время там принадлежит вам. Мы организуем фотографа для фотосессии — или для предложения, снятого издалека, — и цветы, подготовленные заранее. Если это предложение, мы сохраним тайну." },
    { q: "Сколько нужно дней?", a: "Девять–двенадцать ночей: три в Каире и Гизе, четыре-пять на Ниле между Луксором и Асуаном и три-четыре на Красном море. Можно короче, но финалу у моря нужны свои дни." },
    { q: "Что такое дахабия и стоит ли она того?", a: "Небольшое двухмачтовое судно на Ниле, обычно менее чем с дюжиной кают. Оно идёт под парусом, швартуется у островов и деревень, и ритм совсем другой. Для медового месяца это часто лучший апгрейд — а кают так мало, что бронировать её нужно первой." },
  ],
  cta: {
    heading: "Расскажите о вашем путешествии",
    text: "Даты и пожелания — этого достаточно: мы спланируем ваш медовый месяц с подробной ценой, без обязательств.",
    whatsapp: "Здравствуйте, Kemet — мы планируем медовый месяц в Египте.",
    emailSubject: "Медовый месяц в Египте — запрос",
  },
  moreLabel: "Дальше",
  moreRoute: "ru/tury-v-egipet.html",
  moreText: "Все маршруты с разбивкой по дням — на странице туров.",
  links: [
    { label: "Рассвет у пирамид", route: "ru/rassvet-u-piramid-gizy.html" },
    { label: "Круиз по Нилу", route: "ru/kruiz-po-nilu.html" },
    { label: "Когда лучше ехать в Египет", route: "ru/kogda-luchshe-ehat-v-egipet.html" },
  ],
};

// ── Portuguese (Brazil) ─────────────────────────────────────────────────────
export const ptHoneymoon: LocalizedPage = {
  groupId: "standalone-pt-honeymoon",
  symbol: "lotus",
  theme: "honeymoon",
  title: "Lua de mel no Egito: Nilo, pirâmides e mar Vermelho | Kemet",
  description:
    "Lua de mel no Egito, tudo privativo: o nascer do sol nas nove pirâmides, uma dahabiya à vela, uma falua em Assuã e o mar Vermelho — com ensaio fotográfico.",
  keywords:
    "lua de mel no egito, viagem de lua de mel egito, cruzeiro no nilo lua de mel, pedido de casamento nas piramides, ensaio fotografico vestido de noiva piramides",
  crumb: "Lua de mel",
  h1: "Lua de mel no Egito",
  standfirst:
    "Duas pessoas, cinco mil anos de história — e nenhuma agenda além da de vocês.",
  lede:
    "Aqui, uma lua de mel não é um resort com um templo de passeio. É uma dahabiya à vela, o nascer do sol nas pirâmides antes da abertura e o mar Vermelho no fim — organizado para que vocês nunca sejam duas pessoas dentro de um grupo. O lótus, entrelaçado aos pares, era no Egito antigo o símbolo da união. Combina.",
  facts: [
    { label: "Melhor época", value: "de outubro a abril" },
    { label: "Duração ideal", value: "9 a 12 noites" },
    { label: "Nascer do sol", value: "nas nove pirâmides" },
    { label: `Viagem de ${HM_DAYS} dias a partir de`, value: `${eur("pt-BR")} por pessoa` },
  ],
  story: {
    eyebrow: "Nascer do sol nas nove pirâmides",
    heading: "O primeiro nascer do sol da vida de vocês juntos",
    paragraphs: [
      "Antes da abertura, quando Gizé ainda está azul e em silêncio, levamos vocês dois a um mirante tranquilo no deserto, de onde as nove pirâmides ficam numa única linha. Então o céu começa — violeta, depois rosa, depois dourado — e a primeira luz do dia toca os monumentos mais antigos do mundo. É difícil imaginar imagem melhor para o que vocês acabaram de começar: um dia novo nascendo sobre algo construído para sempre.",
      "Essa hora é de vocês. Alguns casais só se sentam bem juntinhos e olham. Outros trazem o vestido de noiva e o terno, e um fotógrafo que providenciamos faz os retratos com que quase todo mundo sonha — vocês dois, o vestido ao vento da madrugada, nove pirâmides no horizonte. E alguns chegam namorando e saem noivos: as flores já estão no lugar, o fotógrafo espera fora de vista e o seu egiptólogo se afasta no momento exato.",
      "Depois, o planalto antes da multidão, o café da manhã e um dia no ritmo de vocês. À noite, se quiserem, uma mesa para dois — numa falua à vela, num terraço sobre o Cairo islâmico ou no deserto sob mais estrelas do que vocês já viram.",
    ],
    quote: "Todo casamento tem um primeiro nascer do sol. Que o de vocês nasça sobre as pirâmides — e que cada manhã depois dele seja tão dourada quanto.",
    photos: couple("Um casal de recém-casados, viajantes da Kemet, em trajes de casamento diante das pirâmides de Gizé", "Nossos viajantes, recém-casados"),
  },
  sections: [
    {
      title: "Privativo, do começo ao fim",
      body:
        "Quase tudo o que vale a pena aqui pode ser feito de forma privativa. Uma dahabiya, o pequeno veleiro de antes da frota de cruzeiros, tem poucas cabines e atraca em ilhas onde os navios grandes não chegam. Uma falua em Assuã na hora dourada é o que os casais lembram por mais tempo. E em Luxor o balão sobe sobre a margem oeste pouco antes do amanhecer.",
    },
    {
      title: "Uma viagem longa merece um final no mar",
      body:
        "A viagem desde o Brasil é longa, então vale ficar o suficiente: com doze noites dá para fazer o Cairo, o Nilo e ainda terminar no mar Vermelho, a noventa minutos de voo, com três ou quatro noites em que a única obrigação é a água. É isso que transforma um roteiro numa lua de mel.",
    },
    {
      title: "Bom saber",
      body:
        "Contem desde o primeiro contato que é a lua de mel de vocês: categoria de quarto, atracações privativas, mesa reservada e o acesso ao amanhecer precisam ser combinados antes. Para dezembro e janeiro, contem com seis meses de antecedência. E o Egito é reservado em público: o carinho fica para o hotel e o barco, onde é absolutamente natural.",
    },
  ],
  touches: {
    eyebrow: "Para dois",
    heading: "Os detalhes que providenciamos",
    intro: "Cada um sob pedido, de forma privativa e discriminado no orçamento — nada é acrescentado sem que vocês peçam.",
    items: [
      { symbol: "eye", title: "Um fotógrafo ao nascer do sol", text: "Para um ensaio com o vestido de noiva diante das nove pirâmides, ou para registrar um pedido de casamento de longe, sem ser visto." },
      { symbol: "lotus", title: "Flores para o momento", text: "Flores e um cantinho preparado — no mirante, no convés da dahabiya ou na mesa de vocês — antes que cheguem." },
      { symbol: "boat", title: "Uma mesa para dois", text: "Um jantar numa falua à vela, num terraço sobre o Cairo islâmico ou num acampamento no deserto sob as estrelas." },
      { symbol: "scarab", title: "Uma surpresa no quarto", text: "Bolo, flores e um quarto ou cabine decorados — para a chegada, um aniversário ou as bodas que vieram comemorar." },
      { symbol: "palm", title: "Um tempo no spa", text: "Uma massagem ou um tratamento no hotel ou a bordo, nos dias feitos para não fazer nada." },
      { symbol: "ankh", title: "Um chef particular", text: "Um chef que cozinha só para vocês dois — numa dahabiya, numa villa ou num acampamento privativo no deserto." },
    ],
  },
  faqs: [
    { q: "O Egito é um bom destino de lua de mel?", a: "Excepcionalmente bom, por um motivo claro: quase tudo pode ser feito de verdade de forma privativa — uma dahabiya, o acesso cedo a Gizé, uma falua na hora dourada, um barco privativo no recife. Vocês têm um dos grandes destinos do mundo e a intimidade que uma lua de mel pede." },
    { q: "Dá para fazer um ensaio com vestido de noiva ou um pedido de casamento nas pirâmides?", a: "Sim. Ao nascer do sol levamos vocês a um mirante tranquilo de onde se veem as nove pirâmides, e o tempo lá é de vocês. Providenciamos um fotógrafo para o ensaio — ou para um pedido fotografado de longe — e flores arrumadas antes da chegada. Se for um pedido, guardamos segredo." },
    { q: "Quantos dias são necessários?", a: "De nove a doze noites: três no Cairo e em Gizé, quatro ou cinco no Nilo entre Luxor e Assuã, e três ou quatro no mar Vermelho. Vindo do Brasil, o ideal é ficar mais perto das doze." },
    { q: "O que é uma dahabiya, e vale a pena?", a: "Um pequeno veleiro do Nilo de duas velas, normalmente com menos de uma dúzia de cabines. Navega à vela, atraca em ilhas e vilarejos, e o ritmo é outro. Para uma lua de mel costuma ser o melhor upgrade — e, como há poucas cabines, é a primeira coisa a reservar." },
  ],
  cta: {
    heading: "Contem a viagem dos sonhos",
    text: "As datas e o que vocês imaginam bastam: preparamos a lua de mel com preço detalhado e sem compromisso.",
    whatsapp: "Olá Kemet — estamos planejando nossa lua de mel no Egito.",
    emailSubject: "Lua de mel no Egito — pedido",
  },
  moreLabel: "Continuar",
  moreRoute: "pt/viagens-ao-egito.html",
  moreText: "Todos os nossos roteiros, dia a dia e em português, estão na página de viagens.",
  links: [
    { label: "Nascer do sol nas pirâmides", route: "pt/nascer-do-sol-nas-piramides-de-gize.html" },
    { label: "Cruzeiro pelo Nilo", route: "pt/cruzeiro-pelo-nilo.html" },
    { label: "Melhor época para ir ao Egito", route: "pt/melhor-epoca-para-ir-ao-egito.html" },
  ],
};

// ── Indonesian ──────────────────────────────────────────────────────────────
export const idHoneymoon: LocalizedPage = {
  groupId: "standalone-id-honeymoon",
  symbol: "lotus",
  theme: "honeymoon",
  title: "Bulan Madu ke Mesir: Sungai Nil, Piramida & Laut Merah | Kemet",
  description:
    "Bulan madu ke Mesir serba privat: matahari terbit di sembilan piramida, dahabiya berlayar, felucca di Aswan, Laut Merah — dengan sesi foto gaun pengantin.",
  keywords:
    "bulan madu ke mesir, honeymoon mesir, foto pengantin di piramida, pesiar sungai nil bulan madu, umrah plus bulan madu mesir, melamar di piramida",
  crumb: "Bulan madu",
  h1: "Bulan Madu di Mesir",
  standfirst:
    "Berdua, lima ribu tahun sejarah — dan tak ada jadwal selain jadwal kalian sendiri.",
  lede:
    "Bulan madu di sini bukan hotel pantai dengan tur kuil tambahan. Ini dahabiya yang berlayar, matahari terbit di piramida sebelum gerbang dibuka, dan Laut Merah sebagai penutup — disusun agar kalian berdua tak pernah menjadi bagian dari rombongan. Banyak pasangan memulainya dengan umrah, lalu melanjutkan bulan madu di Mesir; penerbangan Jeddah–Kairo hanya sekitar dua jam.",
  facts: [
    { label: "Waktu terbaik", value: "Oktober sampai April" },
    { label: "Lama ideal", value: "9–12 malam" },
    { label: "Matahari terbit", value: "di sembilan piramida" },
    { label: `Perjalanan ${HM_DAYS} hari mulai`, value: `${eur("id-ID")} per orang` },
  ],
  story: {
    eyebrow: "Matahari terbit di sembilan piramida",
    heading: "Matahari terbit pertama dalam hidup kalian berdua",
    paragraphs: [
      "Sebelum gerbang dibuka, saat Giza masih biru dan sunyi, kami membawa kalian berdua ke sebuah titik pandang yang tenang di gurun, tempat kesembilan piramida berdiri dalam satu garis. Lalu langit mulai berubah — ungu, kemudian merah muda, kemudian keemasan — dan cahaya pertama hari itu menyentuh bangunan tertua di dunia. Sulit membayangkan gambaran yang lebih indah untuk apa yang baru kalian mulai: hari baru yang terbit di atas sesuatu yang dibangun untuk selamanya.",
      "Jam itu milik kalian. Ada pasangan yang cukup duduk berdampingan dan menikmati pemandangan. Ada yang membawa gaun pengantin dan jas, lalu fotografer yang kami siapkan membuat foto pengantin yang diimpikan banyak orang — kalian berdua, gaun tertiup angin fajar, sembilan piramida di cakrawala. Dan ada yang datang berdua lalu pulang bertunangan: bunga sudah ditata sebelum kalian tiba, fotografer menunggu tanpa terlihat, dan Egyptologist kalian menyingkir tepat pada waktunya.",
      "Setelah itu, kompleks piramida sebelum keramaian, sarapan, dan hari dengan ritme kalian sendiri. Malamnya, bila ingin, meja untuk berdua — di felucca yang berlayar, di teras atap di atas Kairo Islam, atau di gurun di bawah bintang yang lebih banyak daripada yang pernah kalian lihat.",
    ],
    quote: "Setiap pernikahan punya matahari terbit pertamanya. Semoga milik kalian terbit di atas piramida — dan setiap pagi sesudahnya seindah itu.",
    photos: couple("Sepasang pengantin, tamu Kemet, berbusana pengantin di depan Piramida Giza", "Tamu kami, pengantin baru"),
  },
  sections: [
    {
      title: "Privat dari awal sampai akhir",
      body:
        "Hampir semua yang layak di sini bisa dibuat privat. Dahabiya, kapal layar kecil dari masa sebelum armada pesiar, hanya punya sedikit kabin dan bersandar di pulau-pulau yang tak terjangkau kapal besar. Felucca di Aswan pada jam keemasan adalah kenangan yang paling lama diingat pasangan. Dan di Luxor, balon udara naik di atas Tepi Barat menjelang matahari terbit.",
    },
    {
      title: "Laut Merah sebagai penutup",
      body:
        "Sembilan puluh menit terbang ke timur, dan kalian menutup perjalanan di terumbu karang: tiga atau empat malam yang kewajibannya hanya laut. Inilah yang mengubah tur menjadi bulan madu — kalian telah melihat sesuatu yang luar biasa bersama, lalu benar-benar beristirahat.",
    },
    {
      title: "Perlu diketahui",
      body:
        "Sampaikan sejak pesan pertama bahwa ini bulan madu: jenis kamar, tambatan privat, meja tersendiri, dan akses fajar perlu diatur sebelumnya. Makanan halal dan waktu salat kami perhitungkan setiap hari. Untuk Desember dan Januari, pesanlah enam bulan sebelumnya.",
    },
  ],
  touches: {
    eyebrow: "Untuk berdua",
    heading: "Sentuhan yang kami siapkan",
    intro: "Semuanya atas permintaan, privat, dan dirinci dalam penawaran — tidak ada tambahan yang tidak kalian minta.",
    items: [
      { symbol: "eye", title: "Fotografer saat matahari terbit", text: "Untuk sesi foto pengantin dengan gaun di titik pandang sembilan piramida, atau untuk mengabadikan lamaran dari jauh tanpa terlihat." },
      { symbol: "lotus", title: "Bunga untuk momen itu", text: "Bunga dan tempat yang sudah ditata — di titik pandang, di dek dahabiya, atau di meja kalian — sebelum kalian tiba." },
      { symbol: "boat", title: "Meja untuk berdua", text: "Makan malam di felucca yang berlayar, di teras atap di atas Kairo Islam, atau di perkemahan gurun di bawah bintang." },
      { symbol: "scarab", title: "Kejutan di kamar", text: "Kue, bunga, dan kamar atau kabin yang dihias — untuk hari kedatangan, ulang tahun, atau ulang tahun pernikahan." },
      { symbol: "palm", title: "Waktu untuk spa", text: "Pijat atau perawatan spa di hotel atau di kapal, pada hari-hari yang memang untuk bersantai." },
      { symbol: "ankh", title: "Koki pribadi", text: "Koki yang memasak hanya untuk kalian berdua — di dahabiya, di vila, atau di perkemahan gurun privat." },
    ],
  },
  faqs: [
    { q: "Apakah Mesir cocok untuk bulan madu?", a: "Sangat cocok, karena satu alasan: hampir semuanya bisa dibuat benar-benar privat — dahabiya, akses pagi di Giza, felucca pada jam keemasan, kapal privat di terumbu karang. Kalian mendapat salah satu destinasi terbesar di dunia sekaligus privasi yang dibutuhkan bulan madu." },
    { q: "Bisakah kami melakukan foto pengantin atau lamaran di piramida?", a: "Bisa. Saat matahari terbit kami membawa kalian ke titik pandang yang tenang tempat kesembilan piramida terlihat, dan waktu di sana milik kalian. Kami menyiapkan fotografer untuk sesi foto pengantin — atau untuk lamaran yang difoto dari jauh — dan bunga yang ditata sebelum kalian tiba." },
    { q: "Bisakah digabung dengan umrah?", a: "Bisa. Banyak pasangan berangkat umrah lebih dulu, lalu melanjutkan bulan madu di Mesir. Penerbangan Jeddah–Kairo hanya sekitar dua jam, dan kami menyusun program di Mesir mengikuti jadwal umrah kalian." },
    { q: "Berapa hari yang dibutuhkan?", a: "Sembilan sampai dua belas malam: tiga di Kairo dan Giza, empat atau lima di Sungai Nil antara Luxor dan Aswan, serta tiga atau empat di Laut Merah." },
  ],
  cta: {
    heading: "Ceritakan rencana bulan madu kalian",
    text: "Tanggal dan keinginan kalian sudah cukup: kami menyusun bulan madu dengan rincian harga, tanpa komitmen.",
    whatsapp: "Halo Kemet — kami merencanakan bulan madu di Mesir.",
    emailSubject: "Bulan madu di Mesir — pertanyaan",
  },
  moreLabel: "Lanjutkan",
  moreRoute: "id/paket-tour-mesir.html",
  moreText: "Semua rute privat kami ada di halaman paket tour Mesir.",
  links: [
    { label: "Matahari terbit di piramida", route: "id/matahari-terbit-di-piramida-giza.html" },
    { label: "Umrah plus Mesir", route: "id/umrah-plus-mesir.html" },
    { label: "Pesiar Sungai Nil", route: "id/pesiar-sungai-nil.html" },
  ],
};

// ── Malay ───────────────────────────────────────────────────────────────────
export const msHoneymoon: LocalizedPage = {
  groupId: "standalone-ms-honeymoon",
  symbol: "lotus",
  theme: "honeymoon",
  title: "Bulan Madu ke Mesir: Sungai Nil, Piramid & Laut Merah | Kemet",
  description:
    "Bulan madu ke Mesir serba persendirian: matahari terbit di sembilan piramid, dahabiya belayar, felucca di Aswan, Laut Merah — dengan sesi foto pengantin.",
  keywords:
    "bulan madu ke mesir, honeymoon mesir, fotografi pengantin di piramid, pelayaran sungai nil bulan madu, umrah dan bulan madu mesir, melamar di piramid",
  crumb: "Bulan madu",
  h1: "Bulan Madu di Mesir",
  standfirst:
    "Berdua, lima ribu tahun sejarah — dan tiada jadual selain jadual anda sendiri.",
  lede:
    "Bulan madu di sini bukan resort pantai dengan lawatan kuil sebagai tambahan. Ia dahabiya yang belayar, matahari terbit di piramid sebelum pintu dibuka, dan Laut Merah sebagai penutup — disusun supaya anda berdua tidak pernah menjadi sebahagian daripada rombongan. Ramai pasangan memulakannya dengan umrah, lalu meneruskan bulan madu di Mesir; penerbangan Jeddah–Kaherah hanya kira-kira dua jam.",
  facts: [
    { label: "Masa terbaik", value: "Oktober hingga April" },
    { label: "Tempoh ideal", value: "9–12 malam" },
    { label: "Matahari terbit", value: "di sembilan piramid" },
    { label: `Perjalanan ${HM_DAYS} hari dari`, value: `${eur("ms-MY")} seorang` },
  ],
  story: {
    eyebrow: "Matahari terbit di sembilan piramid",
    heading: "Matahari terbit pertama dalam hidup anda berdua",
    paragraphs: [
      "Sebelum pintu dibuka, ketika Giza masih biru dan sunyi, kami membawa anda berdua ke sebuah titik pandang yang tenang di padang pasir, dari mana kesembilan-sembilan piramid berdiri dalam satu barisan. Kemudian langit bermula — ungu, kemudian merah jambu, kemudian keemasan — dan cahaya pertama hari itu menyentuh binaan tertua di dunia. Sukar membayangkan gambaran yang lebih indah untuk apa yang baru anda mulakan: hari baharu yang terbit di atas sesuatu yang dibina untuk selama-lamanya.",
      "Waktu itu milik anda. Ada pasangan yang sekadar duduk rapat dan menikmati pemandangan. Ada yang membawa gaun pengantin dan sut, dan jurugambar yang kami aturkan merakam potret yang diimpikan ramai — anda berdua, gaun ditiup angin subuh, sembilan piramid di kaki langit. Dan ada yang datang berdua lalu pulang bertunang: bunga sudah tersedia sebelum anda tiba, jurugambar menunggu tanpa kelihatan, dan Egyptologist anda berundur tepat pada saatnya.",
      "Selepas itu, dataran piramid sebelum orang ramai, sarapan, dan hari mengikut rentak anda sendiri. Pada waktu malam, jika mahu, meja untuk berdua — di atas felucca yang belayar, di teres bumbung di atas Kaherah Islam, atau di padang pasir di bawah bintang yang lebih banyak daripada yang pernah anda lihat.",
    ],
    quote: "Setiap perkahwinan ada matahari terbit pertamanya. Semoga milik anda terbit di atas piramid — dan setiap pagi selepasnya seindah itu.",
    photos: couple("Sepasang pengantin, tetamu Kemet, berpakaian pengantin di hadapan Piramid Giza", "Tetamu kami, pengantin baharu"),
  },
  sections: [
    {
      title: "Persendirian dari awal hingga akhir",
      body:
        "Hampir semua yang berbaloi di sini boleh dibuat secara persendirian. Dahabiya, kapal layar kecil dari zaman sebelum armada pelayaran, hanya mempunyai beberapa kabin dan berlabuh di pulau-pulau yang tidak dapat dicapai kapal besar. Felucca di Aswan pada waktu keemasan ialah kenangan yang paling lama diingati pasangan. Dan di Luxor, belon udara panas naik di atas Tebing Barat sebelum matahari terbit.",
    },
    {
      title: "Laut Merah sebagai penutup",
      body:
        "Sembilan puluh minit penerbangan ke timur, dan anda menamatkan perjalanan di terumbu karang: tiga atau empat malam yang tanggungjawabnya hanya air laut. Inilah yang menjadikan lawatan sebuah bulan madu — anda telah melihat sesuatu yang luar biasa bersama, kemudian benar-benar berehat.",
    },
    {
      title: "Perlu diketahui",
      body:
        "Beritahu kami dari mesej pertama bahawa ini bulan madu: kategori bilik, tambatan persendirian, meja tersendiri dan akses subuh perlu diatur lebih awal. Makanan halal dan waktu solat diambil kira setiap hari. Untuk Disember dan Januari, tempahlah enam bulan lebih awal.",
    },
  ],
  touches: {
    eyebrow: "Untuk berdua",
    heading: "Sentuhan yang kami aturkan",
    intro: "Semuanya atas permintaan, secara persendirian, dan diperincikan dalam sebut harga — tiada tambahan yang tidak anda minta.",
    items: [
      { symbol: "eye", title: "Jurugambar ketika matahari terbit", text: "Untuk sesi fotografi pengantin bergaun di titik pandang sembilan piramid, atau untuk merakam lamaran dari jauh tanpa kelihatan." },
      { symbol: "lotus", title: "Bunga untuk saat itu", text: "Bunga dan tempat yang disediakan — di titik pandang, di dek dahabiya atau di meja anda — sebelum anda tiba." },
      { symbol: "boat", title: "Meja untuk berdua", text: "Makan malam di atas felucca yang belayar, di teres bumbung di atas Kaherah Islam, atau di kem padang pasir di bawah bintang." },
      { symbol: "scarab", title: "Kejutan di bilik", text: "Kek, bunga dan bilik atau kabin yang dihias — untuk hari ketibaan, hari jadi, atau ulang tahun perkahwinan." },
      { symbol: "palm", title: "Masa di spa", text: "Urutan atau rawatan spa di hotel atau di atas kapal, pada hari-hari yang memang untuk berehat." },
      { symbol: "ankh", title: "Chef peribadi", text: "Chef yang memasak hanya untuk anda berdua — di dahabiya, di vila, atau di kem padang pasir persendirian." },
    ],
  },
  faqs: [
    { q: "Adakah Mesir sesuai untuk bulan madu?", a: "Sangat sesuai, kerana satu sebab: hampir semuanya boleh dibuat benar-benar persendirian — dahabiya, akses awal di Giza, felucca pada waktu keemasan, bot persendirian di terumbu. Anda mendapat salah satu destinasi terhebat dunia beserta privasi yang diperlukan bulan madu." },
    { q: "Bolehkah kami membuat fotografi pengantin atau melamar di piramid?", a: "Boleh. Ketika matahari terbit kami membawa anda ke titik pandang yang tenang dari mana kesembilan-sembilan piramid kelihatan, dan masa di sana milik anda. Kami mengaturkan jurugambar untuk sesi pengantin — atau untuk lamaran yang dirakam dari jauh — dan bunga yang disediakan sebelum anda tiba." },
    { q: "Bolehkah digabungkan dengan umrah?", a: "Boleh. Ramai pasangan menunaikan umrah dahulu, kemudian meneruskan bulan madu di Mesir. Penerbangan Jeddah–Kaherah hanya kira-kira dua jam, dan kami menyusun program di Mesir mengikut jadual umrah anda." },
    { q: "Berapa hari yang diperlukan?", a: "Sembilan hingga dua belas malam: tiga di Kaherah dan Giza, empat atau lima di Sungai Nil antara Luxor dan Aswan, serta tiga atau empat di Laut Merah." },
  ],
  cta: {
    heading: "Ceritakan rancangan bulan madu anda",
    text: "Tarikh dan hasrat anda sudah cukup: kami menyusun bulan madu dengan perincian harga, tanpa komitmen.",
    whatsapp: "Salam Kemet — kami merancang bulan madu di Mesir.",
    emailSubject: "Bulan madu di Mesir — pertanyaan",
  },
  moreLabel: "Teruskan",
  moreRoute: "ms/pakej-pelancongan-mesir.html",
  moreText: "Semua laluan persendirian kami ada di halaman pakej pelancongan Mesir.",
  links: [
    { label: "Matahari terbit di piramid", route: "ms/matahari-terbit-di-piramid-giza.html" },
    { label: "Umrah plus Mesir", route: "ms/umrah-plus-mesir.html" },
    { label: "Pelayaran Sungai Nil", route: "ms/pelayaran-sungai-nil.html" },
  ],
};

// ── Arabic ──────────────────────────────────────────────────────────────────
export const arHoneymoon: LocalizedPage = {
  groupId: "standalone-ar-honeymoon",
  symbol: "lotus",
  theme: "honeymoon",
  title: "شهر العسل في مصر: النيل والأهرامات والبحر الأحمر | كيميت",
  description:
    "شهر عسل خاص في مصر: شروق الشمس على الأهرامات التسعة، دهبية بالأشرعة، فلوكة في أسوان، والبحر الأحمر — مع جلسة تصوير بفستان الزفاف.",
  keywords:
    "شهر العسل في مصر، رحلة شهر العسل، تصوير العرسان عند الأهرامات، رحلة نيلية لشهر العسل، طلب الزواج عند الأهرامات، شهر عسل خاص",
  crumb: "شهر العسل",
  h1: "شهر العسل في مصر",
  standfirst:
    "اثنان، وخمسة آلاف عام من التاريخ — ولا جدول سوى جدولكما.",
  lede:
    "شهر العسل هنا ليس منتجعاً على البحر مع زيارة معبد على الهامش. إنه دهبية تبحر بالأشرعة، وشروق الشمس على الأهرامات قبل فتح الأبواب، والبحر الأحمر في الختام — مرتّب بحيث لا تكونان يوماً جزءاً من مجموعة. وكانت زهرة اللوتس المتعانقة في مصر القديمة رمزاً للاتحاد بين اثنين.",
  facts: [
    { label: "أفضل وقت", value: "من أكتوبر إلى أبريل" },
    { label: "المدة المثالية", value: "٩–١٢ ليلة" },
    { label: "الشروق", value: "على الأهرامات التسعة" },
    { label: `رحلة ${Number(HM_DAYS).toLocaleString("ar-EG")} أيام تبدأ من`, value: `${HM.price.toLocaleString("ar-EG")} يورو للفرد` },
  ],
  story: {
    eyebrow: "الشروق على الأهرامات التسعة",
    heading: "أول شروق في حياتكما معاً",
    paragraphs: [
      "قبل أن تُفتح الأبواب، والجيزة ما زالت زرقاء صامتة، نأخذكما إلى نقطة هادئة في الصحراء تقف منها الأهرامات التسعة على خط واحد. ثم تبدأ السماء — بنفسجية، ثم وردية، ثم ذهبية — ويلمس أول ضوء النهار أقدم ما بناه الإنسان على الأرض. يصعب أن نتخيّل صورة أجمل لما بدأتماه للتو: يوم جديد يشرق على شيء بُني ليبقى إلى الأبد.",
      "هذه الساعة لكما. بعض الأزواج يجلسان متقاربين ويتأمّلان فحسب. وبعضهم يحضر فستان الزفاف والبدلة، فيلتقط مصوّر نرتّبه لكما صوراً يحلم بها الكثيرون — أنتما الاثنان، والفستان يتمايل مع نسيم الفجر، والأهرامات التسعة في الأفق. وبعضهم يصل اثنين ويعود مخطوبين: الورد في مكانه قبل وصولكما، والمصوّر ينتظر بعيداً عن الأنظار، والمرشد يبتعد في اللحظة المناسبة تماماً.",
      "بعدها هضبة الأهرامات قبل الزحام، ثم الإفطار، ويوم على مهلكما. وفي المساء، إن أحببتما، مائدة لاثنين — على فلوكة تبحر بالشراع، أو على سطح يطلّ على القاهرة الإسلامية، أو في الصحراء تحت نجوم لم تريا مثلها من قبل.",
    ],
    quote: "لكل زواج شروقه الأول. فليشرق شروقكما على الأهرامات — ولتكن كل صباحاتكما بعده ذهبية مثله.",
    photos: couple("عروسان من ضيوف كيميت بملابس الزفاف أمام أهرامات الجيزة", "ضيوفنا، عروسان جديدان"),
  },
  sections: [
    {
      title: "خصوصية من البداية إلى النهاية",
      body:
        "كل ما يستحق التجربة هنا تقريباً يمكن أن يكون خاصاً. الدهبية، المركب الشراعي الصغير الذي سبق البواخر، فيها قمرات قليلة وترسو عند جزر لا تصلها البواخر الكبيرة. والفلوكة في أسوان وقت الغروب الذهبي هي أكثر ما يتذكّره العرسان. وفي الأقصر يرتفع المنطاد فوق البرّ الغربي قبيل الشروق.",
    },
    {
      title: "البحر الأحمر في الختام",
      body:
        "تسعون دقيقة بالطائرة شرقاً، وتختمان الرحلة عند الشعاب المرجانية: ثلاث أو أربع ليالٍ لا التزام فيها إلا البحر. هذا ما يجعل الجولة شهر عسل — تريان معاً شيئاً استثنائياً، ثم ترتاحان حقاً.",
    },
    {
      title: "ما يحسن معرفته",
      body:
        "أخبرونا من أول رسالة أنه شهر عسل: فئة الغرفة، والمراسي الخاصة، والمائدة المنفصلة، والدخول عند الفجر تُرتَّب مسبقاً. ونراعي الخصوصية والطعام الحلال ومواعيد الصلاة في كل يوم. ولشهري ديسمبر ويناير احجزوا قبلها بستة أشهر.",
    },
  ],
  touches: {
    eyebrow: "لاثنين",
    heading: "لمسات نرتّبها لكما",
    intro: "كل منها عند الطلب، وبخصوصية، ومذكور بنداً منفصلاً في عرض السعر — لا يُضاف شيء لم تطلباه.",
    items: [
      { symbol: "eye", title: "مصوّر وقت الشروق", text: "لجلسة تصوير بفستان الزفاف عند نقطة الأهرامات التسعة، أو لالتقاط لحظة طلب الزواج من بعيد دون أن يُرى." },
      { symbol: "lotus", title: "ورد للحظة", text: "ورد ومكان مهيّأ — عند نقطة المشاهدة، أو على سطح الدهبية، أو على مائدتكما — قبل وصولكما." },
      { symbol: "boat", title: "مائدة لاثنين", text: "عشاء على فلوكة تبحر بالشراع، أو على سطح يطلّ على القاهرة الإسلامية، أو في مخيّم صحراوي تحت النجوم." },
      { symbol: "scarab", title: "مفاجأة في الغرفة", text: "كعكة وورد وغرفة أو قمرة مزيّنة — ليلة الوصول، أو لعيد ميلاد، أو لذكرى الزواج." },
      { symbol: "palm", title: "وقت في السبا", text: "تدليك أو جلسة سبا في الفندق أو على المركب، في الأيام المخصّصة للراحة." },
      { symbol: "ankh", title: "طاهٍ خاص", text: "طاهٍ يطبخ لكما وحدكما — على الدهبية، أو في فيلا، أو في مخيّم صحراوي خاص." },
    ],
  },
  faqs: [
    { q: "هل مصر وجهة مناسبة لشهر العسل؟", a: "مناسبة جداً لسبب واضح: كل شيء تقريباً يمكن أن يكون خاصاً فعلاً — الدهبية، والدخول المبكر إلى الجيزة، والفلوكة وقت الغروب، والقارب الخاص عند الشعاب. تجمعان بين واحدة من أعظم وجهات العالم والخصوصية التي يحتاجها شهر العسل." },
    { q: "هل يمكن عمل جلسة تصوير بفستان الزفاف أو طلب الزواج عند الأهرامات؟", a: "نعم. عند الشروق نأخذكما إلى نقطة هادئة تُرى منها الأهرامات التسعة، والوقت هناك لكما. نرتّب مصوّراً لجلسة التصوير — أو لطلب زواج يُصوَّر من بعيد — مع ورد مهيّأ قبل وصولكما، ونحفظ السرّ إن كانت مفاجأة." },
    { q: "كم يوماً نحتاج؟", a: "من تسع إلى اثنتي عشرة ليلة: ثلاث في القاهرة والجيزة، وأربع أو خمس على النيل بين الأقصر وأسوان، وثلاث أو أربع على البحر الأحمر." },
    { q: "ما الدهبية، وهل تستحق؟", a: "مركب نيلي صغير بشراعين، فيه عادةً أقل من اثنتي عشرة قمرة. يبحر بالشراع، ويرسو عند الجزر والقرى، وإيقاعه مختلف تماماً. هو غالباً أجمل ترقية لشهر العسل — ولأن قمراته قليلة، يُحجز أولاً." },
  ],
  cta: {
    heading: "حدّثونا عن رحلتكما",
    text: "التواريخ وما تحلمان به يكفيان: نرتّب شهر العسل بسعر مفصّل، دون أي التزام.",
    whatsapp: "السلام عليكم كيميت — نخطّط لشهر العسل في مصر.",
    emailSubject: "شهر العسل في مصر — استفسار",
  },
  moreLabel: "للمتابعة",
  moreRoute: "ar/rehlat-masr-khassa.html",
  moreText: "برامجنا الخاصة كلها في صفحة الرحلات.",
  links: [
    { label: "الشروق عند الأهرامات", route: "ar/shorouq-al-shams-ind-al-ahramat.html" },
    { label: "رحلة نيلية خاصة", route: "ar/rehla-niliya-khassa.html" },
    { label: "أفضل وقت لزيارة مصر", route: "ar/afdal-waqt-lizyarat-masr.html" },
  ],
};
