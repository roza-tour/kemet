import type { UltraText } from "./types";

export const fr: UltraText = {
  metaTitle: "Voyages ultra-luxe en Égypte — quatre voyages privés | Kemet",
  metaDescription:
    "Kemet Ultra : la Grande Pyramide ouverte pour vous seuls, un dîner dans Karnak, dahabeya ou yacht privés, les plus belles suites. 7 à 15 jours, prix affichés.",
  keywords:
    "voyage ultra luxe égypte, voyage privé de luxe égypte, ouverture privée grande pyramide, dîner temple de karnak, dahabeya privatisée, yacht privé mer rouge, mena house suite, old cataract assouan, oberoi philae",
  crumb: "Kemet Ultra",

  heroTag: "Kemet Ultra · sur demande privée",
  h1: ["L'Égypte, ouverte", "pour vous seuls"],
  lede:
    "Quatre voyages privés au sommet du marché égyptien : la Grande Pyramide ouverte pour votre groupe, un dîner dans Karnak une fois les portes fermées, une dahabeya ou un yacht sans autres passagers, et les grands hôtels dans leurs plus belles chambres. Des prix affichés, et chaque élément confirmé par écrit avant tout paiement.",
  ctaPrimary: "Parlons en privé",
  ctaQuiet: "ou envoyez une demande confidentielle",

  signaturesOverline: "Les signatures",
  signatures: [
    ["La Grande Pyramide, seuls", "deux heures à l'intérieur, sans aucun autre visiteur"],
    ["Dîner dans Karnak", "le temple ouvert à la nuit pour votre groupe"],
    ["Le Nil, privatisé", "une dahabeya à vous seuls, ou l'Oberoi Philae en suite"],
    ["La mer Rouge, en yacht", "un yacht avec équipage parmi les récifs de Giftun"],
    ["Le ciel, en privé", "avion privé vers Abou Simbel et la côte"],
  ],

  question: "Qu'est-ce que Kemet Ultra ?",
  answer: ({ from2, to2, from4 }) =>
    `Kemet Ultra est le plus haut niveau de Kemet : quatre voyages entièrement privés en Égypte, de 7 à 15 jours, avec la Grande Pyramide ouverte pour votre seul groupe, un dîner dans Karnak après la fermeture, une dahabeya ou un yacht privatisés et des suites au Mena House, à l'Old Cataract et chez Oberoi. À deux, de ${from2} à ${to2} par personne ; à quatre, dès ${from4}.`,

  glanceOverline: "En un coup d'œil",
  glanceTitle: "Choisissez votre voyage",

  journeysOverline: "Les voyages",
  journeysTitle: ["Quatre façons de vivre l'Égypte", "à ce niveau"],

  labels: {
    duration: (d, n) => `${d} jours / ${n} nuits`,
    from: "À partir de",
    perPersonTwo: "par personne, à deux",
    perPersonFour: (p) => `${p} par personne à quatre`,
    stays: "Où vous séjournez",
    nights: (n) => (n === 1 ? "1 nuit" : `${n} nuits`),
    view: "Voir le voyage",
    dayByDay: "Jour après jour",
    day: "Jour",
    enquire: (t) => `Se renseigner sur ${t}`,
    priceNote: (peak) =>
      `Prix en euros, par personne, d'octobre 2026 à septembre 2027, comprenant tout ce qui est indiqué sur cette page. Les vols internationaux et les pourboires ne sont pas inclus. Les semaines de pointe — du 20 décembre au 5 janvier, et la semaine de Pâques — sont majorées de ${peak} %.`,
  },

  place: { giza: "Gizeh", cairo: "Le Caire", luxor: "Louxor, rive ouest", aswan: "Assouan", nile: "Sur le Nil", redsea: "Mer Rouge" },
  room: {
    pyramidSuite: "Suite avec vue sur les pyramides",
    nileSuite: "Suite avec vue sur le Nil",
    palaceWing: "Aile historique Palace, vue sur le Nil",
    suite: "Suite",
    charter: "Privatisation complète — tout le bateau",
    cruiseSuite: "Suite de luxe",
    poolSuite: "Grande suite avec piscine privée",
  },
  dahabiya: "Dahabeya privée",

  journeys: {
    "private-pharaoh": {
      title: "Le pharaon privé",
      kicker: "La Grande Pyramide et Karnak, chacune ouverte pour votre seul groupe",
      route: "Le Caire · Gizeh · Louxor · Abydos",
      body:
        "Une semaine construite autour de deux portes d'ordinaire fermées. À Gizeh, la Grande Pyramide s'ouvre deux heures pour votre seul groupe ; à Louxor, Karnak reste ouvert pour vous après la fermeture et le dîner est servi dans l'enceinte. Entre les deux : le Grand Musée égyptien avec un égyptologue chevronné, les plus belles tombes de la Vallée des Rois et les deux temples que presque personne n'atteint.",
      highlights: [
        "Ouverture privée de la Grande Pyramide — deux heures, votre groupe seul",
        "Karnak ouvert après la fermeture, avec dîner dans l'enceinte",
        "Les tombes de Séthi Ier, de Néfertari et de Toutânkhamon",
        "Une nacelle privée en montgolfière et une felouque privée",
        "Un égyptologue chevronné tout au long, un chauffeur à disposition",
        "Service VIP à chaque arrivée et départ",
      ],
      days: [
        { t: "Arrivée, accueil à la porte de l'avion", d: "Service VIP à l'immigration, puis le Mena House, où la Grande Pyramide remplit la fenêtre." },
        { t: "Le Grand Musée égyptien", d: "Le trésor complet de Toutânkhamon et le Grand Escalier avec un égyptologue chevronné ; l'après-midi est libre." },
        { t: "Seuls dans la Grande Pyramide", d: "Deux heures dans la pyramide de Khéops, ouverte pour vous seuls, puis la pyramide à degrés et le Sérapéum de Saqqarah." },
        { t: "Louxor, et Karnak de nuit", d: "Vol vers le sud avec service VIP ; le soir, Karnak s'ouvre pour vous et le dîner est servi dans l'enceinte." },
        { t: "Montgolfière à l'aube, tombes royales", d: "Une nacelle privée au-dessus de la rive ouest, puis les tombes de Séthi Ier, Toutânkhamon et la reine Néfertari." },
        { t: "Abydos et Dendérah", d: "Les deux plus beaux temples d'Égypte en voiture privée, déjeuner en route, coucher de soleil en felouque privée." },
        { t: "Départ", d: "Vol vers Le Caire, avec accompagnement jusqu'à votre vol international." },
      ],
    },
    "royal-nile": {
      title: "Le Nil royal",
      kicker: "Une dahabeya privatisée pour votre groupe, d'Assouan à Esna",
      route: "Le Caire · Assouan · Abou Simbel · le Nil · Louxor",
      body:
        "Quatre nuits sur une dahabeya à voile sans autres passagers : l'équipage, le cuisinier et les mouillages sont à vous, et le bateau s'arrête là où les grands navires ne peuvent pas. Avant cela, Le Caire avec la Grande Pyramide ouverte en privé et une nuit à l'Old Cataract ; Abou Simbel en avion privé ; et pour finir, Karnak ouvert pour votre dîner.",
      highlights: [
        "Privatisation complète d'une dahabeya de premier rang — aucun autre passager",
        "Ouverture privée de la Grande Pyramide ; dîner à Karnak après la fermeture",
        "Abou Simbel en avion privé",
        "L'Old Cataract, aile historique Palace, face au Nil",
        "Les tombes de Séthi Ier et de Néfertari ; une montgolfière privée",
        "Service VIP à chaque arrivée et départ",
      ],
      days: [
        { t: "Arrivée, accueil à la porte de l'avion", d: "Service VIP, puis le Four Seasons at The First Residence, au-dessus du Nil." },
        { t: "Le Grand Musée égyptien", d: "Le trésor de Toutânkhamon et le Grand Escalier avec un égyptologue chevronné ; un après-midi sans hâte." },
        { t: "Seuls dans la Grande Pyramide", d: "Deux heures privées dans la pyramide de Khéops, puis la pyramide à degrés et le Sérapéum de Saqqarah." },
        { t: "Assouan et l'Old Cataract", d: "Vol du matin vers le sud ; Philae en vedette privée, puis le coucher de soleil depuis la terrasse où séjourna Agatha Christie." },
        { t: "Abou Simbel, puis à bord", d: "Les temples de Ramsès II aux premières lueurs, en avion privé ; retour pour le déjeuner, et votre dahabeya largue les amarres." },
        { t: "Kom Ombo", d: "Navigation vers le nord jusqu'au double temple de Sobek et d'Horus ; nuit au mouillage sur une rive paisible." },
        { t: "Gebel el-Silsila et Edfou", d: "Les anciennes carrières de grès et leurs chapelles, puis Edfou, le temple le mieux conservé d'Égypte." },
        { t: "El Kab", d: "Des tombes rupestres que peu de gens voient, un dernier après-midi à la voile et un dîner sur le pont." },
        { t: "Louxor, et Karnak de nuit", d: "Débarquement à Esna ; les tombes de Séthi Ier et de Néfertari ; Karnak ouvert après la fermeture, avec dîner dans l'enceinte." },
        { t: "Montgolfière, puis départ", d: "Une nacelle privée à l'aube au-dessus de la rive ouest ; vol vers Le Caire et départ VIP." },
      ],
    },
    "karnak-to-coral-sea": {
      title: "De Karnak à la mer de corail",
      kicker: "L'Oberoi Philae sur le Nil, puis un yacht privé en mer Rouge",
      route: "Le Caire · Louxor · le Nil · Assouan · Abou Simbel · mer Rouge",
      body:
        "La croisière classique sur le Nil à bord du plus raffiné des bateaux du fleuve, en suite, suivie d'une vraie conclusion : un avion privé d'Assouan à la mer Rouge, une suite avec sa propre piscine et un yacht avec équipage pour une journée parmi les récifs de Giftun. En chemin, la Grande Pyramide et Karnak s'ouvrent pour vous.",
      highlights: [
        "L'Oberoi Philae, quatre nuits en suite de luxe",
        "Ouverture privée de la Grande Pyramide ; dîner à Karnak après la fermeture",
        "Avion privé vers Abou Simbel, puis jusqu'à la mer Rouge",
        "Un yacht à moteur avec équipage pour une journée entière",
        "Suites à l'Old Cataract et à l'Oberoi de Sahl Hasheesh",
        "Service VIP à chaque arrivée et départ",
      ],
      days: [
        { t: "Arrivée, accueil à la porte de l'avion", d: "Service VIP, puis le Mena House, la Grande Pyramide à la fenêtre." },
        { t: "Le Grand Musée égyptien", d: "Le trésor de Toutânkhamon avec un égyptologue chevronné ; l'après-midi est libre." },
        { t: "Seuls dans la Grande Pyramide", d: "Deux heures privées dans la pyramide de Khéops, puis la pyramide à degrés et le Sérapéum de Saqqarah." },
        { t: "Louxor, à bord de l'Oberoi Philae", d: "Vol vers le sud et embarquement ; le soir, Karnak s'ouvre pour vous, avec dîner dans l'enceinte." },
        { t: "La rive ouest", d: "Une montgolfière privée à l'aube, les tombes de Séthi Ier et de Néfertari, puis le bateau part vers le sud." },
        { t: "Esna et Edfou", d: "Par l'écluse d'Esna jusqu'au temple d'Horus à Edfou." },
        { t: "De Kom Ombo à Assouan", d: "Le temple au bord du fleuve de Kom Ombo, et Assouan le soir." },
        { t: "L'Old Cataract", d: "Débarquement à Assouan ; Philae en vedette privée ; une felouque privée entre les îles au coucher du soleil." },
        { t: "Abou Simbel en avion privé", d: "Les temples de Ramsès II aux premières lueurs, retour à Assouan pour le déjeuner et un après-midi calme." },
        { t: "Vers la mer Rouge, en privé", d: "Avion privé jusqu'à Hurghada et l'Oberoi de Sahl Hasheesh — une suite avec sa propre piscine." },
        { t: "Une journée en yacht", d: "Un yacht à moteur avec équipage vers les récifs de Giftun : snorkeling, déjeuner à bord, retour au coucher du soleil." },
        { t: "Départ", d: "Vol retour depuis Hurghada, ou vers Le Caire en correspondance, avec service VIP." },
      ],
    },
    "grand-odyssey": {
      title: "La grande odyssée privée",
      kicker: "Chaque déplacement privé — avion, dahabeya et yacht",
      route: "Le Caire · Assouan · Abou Simbel · le Nil · Louxor · mer Rouge",
      body:
        "Toute l'Égypte sans un seul moment partagé. Un avion privé sur chaque trajet intérieur ; une dahabeya privatisée quatre nuits entre Assouan et Esna ; la Grande Pyramide et Karnak ouverts pour vous ; et trois nuits en mer Rouge avec deux journées à bord de votre propre yacht. Conçu pour un premier voyage qui doit être le voyage de référence.",
      highlights: [
        "Avion privé sur chaque trajet intérieur",
        "Privatisation complète d'une dahabeya pendant quatre nuits",
        "Ouverture privée de la Grande Pyramide ; dîner à Karnak après la fermeture",
        "Deux journées à bord d'un yacht avec équipage",
        "Suites au Mena House, à l'Old Cataract, à Al Moudira et à l'Oberoi",
        "Un égyptologue et un assistant personnel pendant tout le voyage",
      ],
      days: [
        { t: "Arrivée, accueil à la porte de l'avion", d: "Service VIP, puis le Mena House, la Grande Pyramide à la fenêtre." },
        { t: "Le Grand Musée égyptien", d: "Le trésor de Toutânkhamon avec un égyptologue chevronné ; un après-midi sans hâte." },
        { t: "Grande Pyramide, Saqqarah et Dahchour", d: "Deux heures privées dans la pyramide de Khéops, puis la pyramide à degrés et la pyramide rouge." },
        { t: "En avion privé vers Assouan", d: "L'Old Cataract, et Philae en vedette privée l'après-midi." },
        { t: "Abou Simbel", d: "En avion privé aux premières lueurs ; au coucher du soleil, une felouque privée entre les îles." },
        { t: "À bord de votre dahabeya", d: "Le bateau est à vous dès le déjeuner, cap au nord jusqu'à Kom Ombo." },
        { t: "Gebel el-Silsila", d: "Carrières antiques et chapelles taillées dans la falaise ; mouillage sur une rive paisible." },
        { t: "Edfou", d: "Le temple d'Horus tôt le matin, avant les visiteurs de la journée." },
        { t: "El Kab", d: "Des tombes rupestres que peu de gens voient ; un dernier dîner sur le pont." },
        { t: "Louxor, et Karnak de nuit", d: "Débarquement à Esna, puis Al Moudira ; Karnak ouvert après la fermeture, avec dîner dans l'enceinte." },
        { t: "Montgolfière à l'aube, tombes royales", d: "Une nacelle privée au-dessus de la rive ouest ; les tombes de Séthi Ier, Toutânkhamon et Néfertari." },
        { t: "Vers la mer Rouge, en privé", d: "Avion privé jusqu'à Hurghada ; une suite avec sa propre piscine à l'Oberoi de Sahl Hasheesh." },
        { t: "Le yacht", d: "Les récifs de Giftun à bord d'un yacht à moteur avec équipage, déjeuner sur le pont." },
        { t: "Encore le yacht — ou rien du tout", d: "Un autre récif, une plongée ou la journée au spa." },
        { t: "Départ", d: "Avion privé vers Le Caire et service VIP jusqu'à votre vol retour." },
      ],
    },
  },

  standardOverline: "Comment ce niveau fonctionne",
  standard: [
    { title: "Le prix, puis la preuve", body: "Chaque prix figure sur cette page, et chaque élément du voyage est confirmé par écrit, à votre nom, avant tout mouvement d'argent." },
    { title: "Un seul interlocuteur", body: "Celui qui conçoit le voyage est celui qui vous répond pendant votre séjour en Égypte. Pas de centre d'appels, pas de numéro qui se tait après l'acompte." },
    { title: "Des changements sans histoires", body: "Chaque voyage peut être remanié — jours, hôtels, rythme, un groupe plus nombreux ou du personnel qui vous accompagne — et il est recalculé sur la même base." },
    { title: "La discrétion pour règle", body: "Pas de groupe, pas de véhicule partagé, pas de liste de départs publiée. Rien sur qui vous êtes ni où vous allez n'est évoqué en dehors de l'équipe qui organise." },
  ],

  faqOverline: "Avant de nous écrire",
  faqs: ({ from2, to2, from4, to4, peak }) => [
    { q: "Combien coûte un voyage ultra-luxe en Égypte ?", a: `Les quatre voyages Kemet Ultra coûtent, à deux, de ${from2} par personne pour sept jours à ${to2} pour quinze. À quatre, le prix par personne descend entre ${from4} et ${to4}, car la privatisation, l'avion et les ouvertures privées sont partagés. Les semaines de Noël, du Nouvel An et de Pâques sont majorées de ${peak} %.` },
    { q: "La Grande Pyramide peut-elle vraiment être ouverte pour nous seuls ?", a: "Oui. Pendant deux heures, la Grande Pyramide est ouverte pour votre seul groupe, en dehors des horaires publics, votre égyptologue à vos côtés et personne d'autre à l'intérieur. Nous nous occupons de tout ; il vous suffit de venir." },
    { q: "Comment se passe le dîner dans Karnak ?", a: "Une fois les derniers visiteurs partis, Karnak s'ouvre pour votre groupe. Vous parcourez la salle hypostyle avec votre égyptologue, puis le dîner est servi dans l'enceinte du temple. Vous n'avez rien à organiser." },
    { q: "Pourquoi le Winter Palace n'y figure-t-il pas ?", a: "Le Winter Palace de Louxor a fermé début 2026 pour une restauration complète et rouvrira en juillet 2027 sous le nom de Mandarin Oriental Winter Palace. D'ici là, à Louxor, vous séjournez à Al Moudira, sur la rive ouest. L'Old Cataract d'Assouan reste ouvert dans son aile historique Palace pendant la rénovation de l'aile sur le Nil." },
    { q: "Quelle dahabeya est privatisée ?", a: "Une dahabeya de premier rang de six à dix cabines, privatisée en entier, avec son propre équipage et son chef — choisie pour vos dates et nommée dans votre proposition écrite." },
    { q: "Peut-on modifier ou allonger un voyage ?", a: "Tous. Les jours, les hôtels, l'ordre du parcours et le rythme peuvent changer, et le prix est recalculé sur la même base. Groupes plus nombreux, personnel qui vous accompagne et arrivée en jet privé sont prévus dès le départ." },
    { q: "Combien de temps à l'avance réserver ?", a: "Huit à douze semaines pour un voyage entre octobre et avril, période où les ouvertures privées et les dahabeyas sont les plus demandées. Un délai plus court est parfois possible ; vous saurez avant de vous engager quels éléments peuvent encore être garantis." },
    { q: "Qui sera notre interlocuteur ?", a: "Une seule personne, du premier message au dernier jour en Égypte. Si un family office ou un assistant organise le voyage, il traite lui aussi toujours avec la même personne." },
  ],

  closeTitle: "Dites-nous qui voyage, et quand.",
  closeBody:
    "Chaque voyage de cette page peut être modifié. Vous recevez d'abord un programme écrit, puis le prix, et rien n'est payé tant que chaque élément n'est pas confirmé à votre nom. Tout reste entre nous.",
  closeCta: "WhatsApp, en privé",
  closeQuiet: "ou par e-mail",

  whatsapp: "Bonjour Kemet — j'aimerais parler d'un voyage Kemet Ultra en Égypte.",
  whatsappJourney: (t) => `Bonjour Kemet — j'aimerais parler du voyage « ${t} » (Kemet Ultra).`,
  mailSubject: "Kemet Ultra — demande confidentielle",
  mailBody: "Dites-nous qui voyage, à peu près quand, et quel voyage vous intéresse.\n\n",
};
