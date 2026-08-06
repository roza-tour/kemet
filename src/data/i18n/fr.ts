// ---------------------------------------------------------------------------
// Pages françaises — seven key pages for the French-speaking market.
//
// This is not the German file with French words in it. The French market comes
// to Egypt with its own reference points: Paris and Marseille rather than
// Frankfurt, the Toussaint and February school holidays rather than German
// terms, the Louvre's Egyptian galleries and Champollion as the cultural
// entry point, and the Quai d'Orsay rather than the Auswärtiges Amt for travel
// advice. Belgium, Switzerland and Quebec read the same pages, so the copy
// avoids France-only administrative detail where a neutral wording works.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";

export const fr: LocalizedPage[] = [
  // ===== Accueil ===========================================================
  {
    groupId: "home",
    symbol: "ankh",
    title: "Kemet — Voyages privés en Égypte avec égyptologue",
    description:
      "Voyages privés sur mesure en Égypte : un égyptologue diplômé rien que pour vous, véhicule privé, aucun autocar de groupe et aucune date imposée.",
    keywords:
      "voyage egypte, voyage prive egypte, egypte sur mesure, croisiere sur le nil, guide egyptologue francophone, voyage de luxe egypte",
    crumb: "Accueil",
    h1: "L'Égypte, en privé",
    standfirst:
      "Pas d'autocar, pas de date de départ imposée, personne d'autre dans votre itinéraire.",
    lede:
      "L'Égypte n'est pas un pays mais huit mondes culturels superposés le long d'un même fleuve. Kemet conçoit des voyages privés et sans hâte à travers ces mondes — des pyramides de Gizeh aux temples de Louxor, puis la descente du Nil jusqu'à Assouan. Chaque voyage est accompagné d'un égyptologue agréé par le ministère égyptien du Tourisme, et construit entièrement autour de vous.",
    facts: [
      { label: "Formule", value: "Exclusivement privé" },
      { label: "Guide", value: "Égyptologue diplômé" },
      { label: "Vol depuis Paris", value: "environ 4 h 30" },
      { label: "Meilleure période", value: "d'octobre à avril" },
    ],
    sections: [
      {
        title: "Un égyptologue, pas un accompagnateur",
        body:
          "Chaque voyage est mené par une personne agréée par le ministère égyptien du Tourisme et diplômée en égyptologie. Elle reste avec vous devant les monuments au lieu d'attendre au parking, et ce jour-là elle n'appartient qu'à vous : elle répond à vos questions plutôt que de réciter un texte devant quarante personnes. En français, si vous le demandez à la conception.",
      },
      {
        title: "Votre groupe, et personne d'autre",
        body:
          "Aucun autocar partagé. Aucune date fixe. Si vous voyagez à deux, la voiture, le guide et le rythme appartiennent à deux personnes. Le prix par personne baisse nettement lorsque le groupe s'agrandit : une famille de six paie souvent moins par tête, pour un voyage entièrement privé, qu'un couple pour le même itinéraire.",
      },
      {
        title: "D'abord conçu, ensuite écrit",
        body:
          "Nous construisons l'itinéraire à partir de vos centres d'intérêt et de vos dates, pas d'une page de catalogue. Vous le recevez par écrit avant tout paiement, et il est repris autant de fois qu'il le faut jusqu'à ce qu'il soit juste. Sont compris : l'égyptologue, toutes les entrées, les transferts privés climatisés, la prise en charge à l'hôtel, le déjeuner les jours de visite et l'eau.",
      },
      {
        title: "Le temps se protège, il ne se remplit pas",
        body:
          "Une journée à quatre sites se vend plus facilement et se vit moins bien. Nous concevons autour de la lumière, de la chaleur et de l'affluence — la vallée des Rois à l'ouverture, le Grand Musée égyptien quand les cars sont repartis — et l'après-midi, nous le laissons tranquille.",
      },
      {
        title: "Sur le prix, franchement",
        body:
          "Kemet travaille dans le haut du marché égyptien et le dit sans détour. Un égyptologue privé pendant une semaine coûte ce qu'il coûte ; de même une voiture qui n'est qu'à vous et une chambre qui donne sur le fleuve plutôt que sur le parking. Ce que nous ne faisons pas : annoncer un prix bas puis le rattraper en suppléments, en arrêts boutiques et en itinéraire qui redevient discrètement collectif.",
      },
    ],
    highlights: {
      heading: "Ce que ces voyages ne sont pas",
      items: [
        "Le prix le plus bas pour l'Égypte — nous ne le sommes pas et n'essayons pas de l'être",
        "Des circuits en autocar et des départs de groupe à date fixe, vendus à la place",
        "Auberges, dortoirs et itinéraires sac au dos",
        "Pour qui préfère organiser sa logistique soi-même",
      ],
    },
    faqs: [
      { q: "Combien coûte un voyage privé en Égypte ?", a: "Pour un voyage entièrement privé et sur mesure, avec égyptologue agréé, voiture et chauffeur privés et de bons hôtels, comptez entre 200 et 450 euros par personne et par jour. Le montant par personne baisse nettement à mesure que le groupe grandit, puisque le guide et le véhicule se partagent." },
      { q: "Proposez-vous des guides francophones ?", a: "Oui. Nous travaillons avec des égyptologues agréés qui guident en français. Signalez-le dès la conception du voyage : les égyptologues francophones ne sont pas nombreux et, en haute saison, ils sont retenus longtemps à l'avance." },
      { q: "Faut-il un visa pour l'Égypte ?", a: "Pour les ressortissants français, belges et suisses, oui, mais la démarche est simple : le visa touristique s'achète à l'arrivée à l'aéroport pour 30 dollars américains et autorise un séjour de 30 jours. L'e-Visa en ligne existe au même tarif. Le passeport doit être valable six mois après l'entrée." },
      { q: "Combien de jours faut-il pour l'Égypte ?", a: "Huit à dix jours sur place couvrent Le Caire, Louxor, une croisière sur le Nil et Assouan sans courir. Six à sept jours suffisent pour Le Caire et Louxor. Douze à quatorze laissent la place à Abou Simbel, à Alexandrie ou à une semaine en mer Rouge." },
      { q: "L'Égypte est-elle sûre ?", a: "Les zones touristiques — Le Caire, Gizeh, Louxor, Assouan, Alexandrie et la côte de la mer Rouge — sont surveillées et reçoivent des millions de visiteurs chaque année. Les vraies nuisances sont les vendeurs insistants sur les grands sites et la circulation du Caire, deux problèmes que le guide et le chauffeur privés effacent en grande partie. Consultez malgré tout les conseils aux voyageurs de votre ministère des Affaires étrangères avant de réserver." },
    ],
    cta: {
      heading: "Dites-nous ce que vous avez en tête",
      text: "Envoyez-nous vos dates et qui voyage. Vous recevrez un vrai itinéraire avec le prix détaillé — sans engagement et sans centre d'appels.",
      whatsapp: "Bonjour Kemet — je souhaite organiser un voyage privé en Égypte.",
      emailSubject: "Demande — voyage privé en Égypte",
    },
    moreLabel: "Le site complet",
    moreText:
      "Ces pages sont une sélection en français. Le catalogue complet de Kemet — tous les voyages, destinations, expériences et guides pratiques — est disponible en anglais. Nous vous répondons évidemment en français.",
  },

  // ===== Voyages ===========================================================
  {
    groupId: "journeys",
    symbol: "sun",
    title: "Voyage en Égypte — circuits privés sur mesure | Kemet",
    description:
      "Circuits privés et sur mesure en Égypte, d'une journée à deux semaines — égyptologue agréé, véhicule privé et aucune date de départ imposée.",
    keywords:
      "voyage egypte, circuit egypte, sejour egypte prive, itineraire egypte, croisiere nil reservation, le caire louxor assouan",
    crumb: "Voyages en Égypte",
    h1: "Nos voyages en Égypte",
    standfirst:
      "Des points de départ, pas des programmes figés — chaque itinéraire est réécrit sur vos dates et votre groupe.",
    lede:
      "Tous nos voyages sont privés. Ce que vous voyez ici, ce sont des formes éprouvées, pas des produits à acheter tels quels. Dites-nous quand vous partez, qui vous accompagne et ce qui vous intéresse, et l'itinéraire est redessiné autour de cela.",
    facts: [
      { label: "Voyage le plus court", value: "1 jour" },
      { label: "Voyage le plus long", value: "14 jours" },
      { label: "Groupe", value: "Le vôtre uniquement" },
      { label: "Acompte", value: "25 %" },
    ],
    sections: [
      {
        title: "L'itinéraire classique, et pourquoi il fonctionne",
        body:
          "Le Caire pour les pyramides, le Grand Musée égyptien et la ville médiévale ; Louxor pour les temples et la vallée des Rois ; puis le Nil jusqu'à Assouan par bateau. Cet ordre n'est pas un hasard : les temples entre Louxor et Assouan sont bâtis sur la rive et ont été conçus pour être abordés depuis l'eau. Huit à dix jours couvrent l'ensemble sans se presser.",
      },
      {
        title: "Ce que le prix comprend",
        body:
          "Votre égyptologue agréé pour tout le voyage, tous les droits d'entrée, les transferts privés climatisés, la prise en charge et le retour à l'hôtel, le déjeuner chaque jour de visite et l'eau. Ne sont pas compris : les vols internationaux, le visa d'entrée, les pourboires, les dépenses personnelles et les suppléments expressément indiqués. Chaque devis énumère les deux listes avant que vous ne vous engagiez.",
      },
      {
        title: "Les durées, sans enjolivement",
        body:
          "Un jour au Caire permet Gizeh et Saqqarah, ou le Grand Musée égyptien — pas les deux correctement. Quatre à cinq jours donnent Le Caire et Louxor. Huit à dix ajoutent le Nil et Assouan. Au-delà de quatorze jours, on n'ajoute plus des sites mais du souffle : Abou Simbel sans réveil à quatre heures, Alexandrie, ou une fin de voyage en mer Rouge.",
      },
      {
        title: "Une croisière sur le Nil, ou par la route ?",
        body:
          "Entre Louxor et Assouan, le bateau reste la meilleure manière de voyager : les temples d'Edfou et de Kôm Ombo sont sur la rive et vous n'avez pas à défaire vos valises. Un dahabieh — voilier de quelques cabines — approche ce qu'un grand navire ne peut pas atteindre. Le trajet par la route existe et se justifie si vos dates sont serrées ; nous vous dirons franchement lequel convient à votre voyage.",
      },
    ],
    faqs: [
      { q: "Peut-on modifier un itinéraire proposé ?", a: "C'est le principe même. Les itinéraires publiés sont des points de départ. Vous pouvez rallonger une étape, en retirer une, changer la catégorie d'hôtel ou repartir d'une page blanche — le devis est recalculé à chaque version et rien n'est payé avant que le texte ne vous convienne." },
      { q: "Combien de temps à l'avance faut-il réserver ?", a: "Pour un voyage entre octobre et avril, comptez deux à trois mois : ce sont les mois où les bons égyptologues francophones, les dahabiehs et les chambres avec vue partent en premier. Hors saison, quelques semaines suffisent souvent." },
      { q: "Voyage-t-on vraiment seuls ?", a: "Oui. Le véhicule, le chauffeur et l'égyptologue sont réservés pour votre groupe seul, quel que soit le nombre de participants. Vous ne serez jamais regroupés avec d'autres clients pour compléter une voiture." },
      { q: "Que se passe-t-il si un vol intérieur est retardé ?", a: "L'itinéraire est reconstruit sur place le jour même, sans supplément : c'est l'avantage d'un voyage privé — il n'y a pas de groupe qui attend et pas de créneau collectif à respecter. Votre interlocuteur en Égypte est joignable pendant tout le séjour." },
    ],
    cta: {
      heading: "Faisons esquisser votre itinéraire",
      text: "Vos dates, le nombre de voyageurs et ce que vous ne voulez surtout pas manquer suffisent pour commencer.",
      whatsapp: "Bonjour Kemet — j'aimerais un itinéraire privé en Égypte.",
      emailSubject: "Demande d'itinéraire — Égypte",
    },
    moreLabel: "Le catalogue complet",
    moreText:
      "Les vingt-cinq itinéraires, avec jour par jour, hôtels et prix, sont détaillés en anglais sur le site principal. Envoyez-nous une demande en français : nous vous répondons en français.",
  },

  // ===== Croisière sur le Nil ==============================================
  {
    groupId: "nile-cruise",
    symbol: "boat",
    title: "Croisière sur le Nil — bateau privé ou dahabieh | Kemet",
    description:
      "Croisière privée sur le Nil entre Louxor et Assouan : dahabieh à voile ou navire cinq étoiles, égyptologue à bord et temples abordés depuis l'eau.",
    keywords:
      "croisiere sur le nil, croisiere nil louxor assouan, dahabieh nil, croisiere egypte prive, bateau nil egypte",
    crumb: "Croisière sur le Nil",
    h1: "La croisière sur le Nil",
    standfirst:
      "Entre Louxor et Assouan, le fleuve reste la bonne façon de voyager — et le bateau change tout le voyage.",
    lede:
      "Les temples entre Louxor et Assouan ont été bâtis face au fleuve. On les aborde par l'eau parce que c'est ainsi qu'ils ont été pensés : Edfou et Kôm Ombo apparaissent depuis le pont avant d'apparaître depuis un parking. Trois à quatre nuits suffisent pour la section, et le choix du bateau compte plus que la durée.",
    facts: [
      { label: "Trajet", value: "Louxor ⇄ Assouan" },
      { label: "Durée", value: "3 à 4 nuits" },
      { label: "Dahabieh", value: "6 à 12 cabines" },
      { label: "Navire", value: "40 à 80 cabines" },
    ],
    sections: [
      {
        title: "Dahabieh ou navire : la vraie différence",
        body:
          "Un dahabieh est un voilier de quelques cabines. Il navigue à la voile, il mouille contre un banc de sable où aucun grand bateau ne peut approcher, et il n'y a personne d'autre à bord que votre groupe si vous l'affrétez en entier. Un navire cinq étoiles offre plus d'espace, une piscine et un pont supérieur, mais il suit un horaire partagé et accoste là où accostent les autres. Les deux sont excellents ; ils ne racontent pas la même chose.",
      },
      {
        title: "Ce que l'on voit depuis le fleuve",
        body:
          "Edfou, le temple d'Horus, le mieux conservé d'Égypte. Kôm Ombo, double temple posé sur une courbe du fleuve, splendide en fin de journée. L'écluse d'Esna, la campagne, les villages, les pêcheurs, et à Assouan le temple de Philae sur son île. Entre les visites, il ne se passe rien — et c'est exactement ce que l'on vient chercher.",
      },
      {
        title: "Dans quel sens naviguer",
        body:
          "De Louxor vers Assouan, on remonte le courant : la navigation est un peu plus lente et les journées un peu plus longues. D'Assouan vers Louxor, on descend. La plupart des voyageurs enchaînent avec Abou Simbel depuis Assouan, ce qui rend le sens sud-nord plus pratique — mais la différence est mince et vos vols la tranchent souvent d'eux-mêmes.",
      },
      {
        title: "Quand partir sur le fleuve",
        body:
          "D'octobre à avril, la navigation est parfaite : chaudes journées, soirées fraîches sur le pont. De mai à septembre, la Haute-Égypte devient très chaude — 40 °C et davantage à Assouan — et les visites se font tôt le matin. Les prix baissent nettement en été, et pour qui supporte la chaleur, les temples sont presque vides.",
      },
    ],
    faqs: [
      { q: "Combien de nuits sur le Nil ?", a: "Trois à quatre nuits couvrent la section Louxor–Assouan avec Edfou et Kôm Ombo, sans temps mort. Sept nuits existent sur certains dahabiehs et ajoutent des escales que les grands bateaux ne font pas, comme El-Kab ou Gebel Silsileh." },
      { q: "Peut-on privatiser un bateau entier ?", a: "Oui, pour un dahabieh. L'affrètement complet réserve le bateau, l'équipage et le chef à votre seul groupe, ce qui est courant à partir de huit à douze personnes, et possible en dessous. Un navire de croisière classique ne se privatise pas en pratique." },
      { q: "Y a-t-il un égyptologue à bord ?", a: "Sur nos voyages, votre égyptologue vous accompagne pendant toute la croisière et fait chaque temple avec vous — ce n'est pas un guide différent à chaque escale. C'est la principale différence avec une croisière achetée seule." },
      { q: "La croisière convient-elle aux enfants ?", a: "Très bien, à condition d'adapter le rythme. Un dahabieh plaît particulièrement aux familles : les enfants circulent librement à bord, les journées sont courtes et il y a des heures entières sans rien à faire d'autre que regarder le fleuve." },
      { q: "Le Nil est-il calme ?", a: "Oui. Il n'y a ni houle ni mal de mer sur le fleuve : c'est une eau plate. Le seul mouvement notable est celui du passage de l'écluse d'Esna, et il est lent." },
    ],
    cta: {
      heading: "Choisissons le bateau ensemble",
      text: "Dites-nous vos dates et le nombre de voyageurs ; nous vous dirons franchement si le dahabieh ou le navire convient mieux à votre voyage.",
      whatsapp: "Bonjour Kemet — je m'intéresse à une croisière privée sur le Nil.",
      emailSubject: "Demande — croisière sur le Nil",
    },
    moreLabel: "Les itinéraires détaillés",
    moreText:
      "Le détail jour par jour des croisières, les bateaux et les prix figurent en anglais sur le site principal. Écrivez-nous en français.",
  },

  // ===== Prix ==============================================================
  {
    groupId: "cost",
    symbol: "scales",
    title: "Prix d'un voyage en Égypte — combien prévoir | Kemet",
    description:
      "Ce que coûte réellement un voyage privé en Égypte : fourchettes par personne et par jour, ce qui fait monter le prix et ce qui n'y change rien.",
    keywords:
      "prix voyage egypte, budget voyage egypte, cout sejour egypte, combien coute egypte, tarif circuit egypte",
    crumb: "Prix d'un voyage",
    h1: "Ce que coûte un voyage en Égypte",
    standfirst:
      "Des fourchettes réelles, et les cinq choses qui font vraiment bouger le chiffre.",
    lede:
      "Un voyage privé en Égypte se situe le plus souvent entre 200 et 450 euros par personne et par jour, hors vols internationaux. L'écart entre ces deux bornes ne vient pas du hasard : il vient de cinq décisions que vous prenez à la conception, et il est utile de savoir lesquelles avant de comparer deux devis.",
    facts: [
      { label: "Entrée de gamme", value: "≈ 200 € / pers. / jour" },
      { label: "Milieu de gamme", value: "≈ 300 € / pers. / jour" },
      { label: "Haut de gamme", value: "450 € et plus" },
      { label: "Acompte", value: "25 %" },
    ],
    sections: [
      {
        title: "1. Le nombre de voyageurs",
        body:
          "C'est le facteur le plus puissant, et de loin. L'égyptologue, le véhicule et le chauffeur coûtent la même chose pour deux personnes que pour six : leur coût se divise. Une famille de six paie souvent nettement moins par tête, pour un voyage entièrement privé, qu'un couple sur le même itinéraire.",
      },
      {
        title: "2. La catégorie d'hôtel",
        body:
          "C'est le deuxième levier. Entre un bon quatre-étoiles et un palace au bord du Nil, l'écart par nuit peut dépasser le reste de la journée additionné. À l'inverse, changer d'hôtel ne change ni les sites, ni le guide, ni les entrées : c'est le poste le plus facile à ajuster sans abîmer le voyage.",
      },
      {
        title: "3. La saison",
        body:
          "D'octobre à avril, tout est plus cher — c'est la saison de la Haute-Égypte. De mai à septembre, les mêmes hôtels et les mêmes bateaux baissent nettement, parfois de moitié, parce qu'il fait 40 °C à Assouan. La saison ne change pas la qualité du voyage, seulement l'heure à laquelle on visite.",
      },
      {
        title: "4. Le bateau",
        body:
          "Une cabine sur un navire cinq étoiles et l'affrètement complet d'un dahabieh ne jouent pas dans le même ordre de grandeur. C'est souvent le poste qui explique à lui seul la différence entre deux devis qui semblent proposer le même voyage.",
      },
      {
        title: "5. Les vols intérieurs",
        body:
          "Le Caire–Louxor et Assouan–Le Caire se prennent en avion : environ une heure contre dix heures de route. C'est un poste modeste mais réel, et il figure séparément sur nos devis plutôt que dilué dans un forfait.",
      },
    ],
    highlights: {
      heading: "Ce qui est compris dans nos prix",
      items: [
        "L'égyptologue agréé pour toute la durée du voyage",
        "Tous les droits d'entrée aux sites de l'itinéraire",
        "Les transferts privés climatisés et la prise en charge à l'hôtel",
        "Le déjeuner les jours de visite, et l'eau tous les jours",
        "Non compris : vols internationaux, visa, pourboires, dépenses personnelles",
      ],
    },
    faqs: [
      { q: "Pourquoi ne publiez-vous pas un prix fixe par voyage ?", a: "Parce qu'il serait faux pour presque tout le monde. Le même itinéraire à deux en janvier et à six en juin n'a pas le même prix par personne, et l'écart est important. Nous préférons une fourchette honnête et un devis exact plutôt qu'un chiffre d'appel." },
      { q: "Y a-t-il des frais cachés ?", a: "Non. Chaque devis liste ce qui est compris et ce qui ne l'est pas avant que vous ne payiez quoi que ce soit. Nous ne faisons pas d'arrêts boutiques rémunérés et n'ajoutons pas de supplément une fois sur place." },
      { q: "Combien prévoir pour les pourboires ?", a: "En Égypte, le pourboire fait partie de l'usage. Prévoyez l'équivalent de 8 à 12 euros par jour et par voyageur pour l'ensemble guide, chauffeur et équipage. Nous vous donnons une répartition précise avant le départ, pour éviter à la fois la gêne et l'excès." },
      { q: "En quelle monnaie payer ?", a: "Les devis sont en euros. Sur place, la livre égyptienne sert pour les petites dépenses ; les cartes passent dans les hôtels et les grands restaurants, moins ailleurs. Prévoyez un peu d'espèces pour les pourboires et les marchés." },
    ],
    cta: {
      heading: "Recevez un devis exact",
      text: "Vos dates, le nombre de voyageurs et la catégorie d'hôtel souhaitée suffisent pour un chiffre précis, pas une fourchette.",
      whatsapp: "Bonjour Kemet — je souhaite un devis pour un voyage en Égypte.",
      emailSubject: "Demande de devis — Égypte",
    },
    moreLabel: "Le détail des prix",
    moreText:
      "Le détail poste par poste, avec les prix de chaque itinéraire, est publié en anglais sur le site principal. Écrivez-nous en français pour un devis.",
  },

  // ===== Quand partir ======================================================
  {
    groupId: "when-to-go",
    symbol: "sun",
    title: "Quand partir en Égypte — mois par mois | Kemet",
    description:
      "Quand partir en Égypte : chaleur, affluence, prix et fêtes, mois par mois — pour Le Caire, Louxor, Assouan et la mer Rouge.",
    keywords:
      "quand partir en egypte, meilleure periode egypte, meteo egypte, egypte en ete, egypte vacances scolaires",
    crumb: "Quand partir",
    h1: "Quand partir en Égypte",
    standfirst:
      "D'octobre à avril pour la vallée du Nil. Le reste de l'année a ses raisons, et elles sont bonnes.",
    lede:
      "La réponse courte : d'octobre à avril. La vallée du Nil est alors chaude sans être écrasante, et les journées de visite sont confortables du matin au soir. La réponse longue est plus intéressante, parce que l'été a de vrais arguments et que la mer Rouge ne suit pas le même calendrier que Louxor.",
    facts: [
      { label: "Meilleure période", value: "octobre à avril" },
      { label: "Le plus fréquenté", value: "Noël et Pâques" },
      { label: "Le plus chaud", value: "juin à août" },
      { label: "Mer Rouge", value: "agréable toute l'année" },
    ],
    sections: [
      {
        title: "Octobre à avril — la saison",
        body:
          "Louxor et Assouan tournent autour de 25 à 30 °C en journée, avec des soirées fraîches sur le pont d'un bateau. Le Caire est doux. C'est la période où l'on peut visiter l'après-midi sans souffrir, et c'est pourquoi tout le monde vient. Réservez deux à trois mois à l'avance, davantage pour Noël et Pâques.",
      },
      {
        title: "Mai à septembre — la chaleur, et ses avantages",
        body:
          "Assouan dépasse régulièrement 40 °C. Les visites se font de six à onze heures, puis on rentre. En échange : des temples presque vides, des hôtels et des bateaux à des prix qui n'ont plus rien à voir, et une lumière que la saison haute ne donne pas. Pour la mer Rouge, l'été est excellent — l'eau y est à son meilleur.",
      },
      {
        title: "Les périodes à connaître",
        body:
          "Noël et le Nouvel An sont les deux semaines les plus chargées et les plus chères de l'année ; il faut s'y prendre très tôt. Pâques et les vacances de printemps suivent. Le ramadan change les horaires de la vie locale plus que ceux des sites, et les soirées deviennent remarquables au Caire. Les vacances de la Toussaint et de février tombent en pleine bonne saison : ce sont d'excellentes fenêtres, à condition de réserver tôt.",
      },
      {
        title: "Deux dates qui ne se déplacent pas",
        body:
          "Les 22 février et 22 octobre, le soleil traverse le temple d'Abou Simbel et éclaire le sanctuaire — un alignement calculé il y a plus de trois mille ans. Ces deux matinées sont exceptionnelles et se réservent très longtemps à l'avance. La deuxième date tombe en pleine belle saison, ce qui la rend un peu plus facile à combiner.",
      },
    ],
    faqs: [
      { q: "Peut-on visiter l'Égypte en été ?", a: "Oui, en acceptant le rythme : visites tôt le matin, retour à l'hôtel aux heures chaudes, sortie en fin de journée. En contrepartie, les sites sont vides et les prix baissent fortement. La mer Rouge, elle, est parfaite en été." },
      { q: "Quel est le mois le plus agréable ?", a: "Novembre et mars sont les deux meilleurs compromis : la chaleur est confortable, l'affluence reste raisonnable et les prix n'ont pas atteint les sommets des fêtes de fin d'année." },
      { q: "Pleut-il en Égypte ?", a: "Presque jamais dans la vallée du Nil : quelques millimètres par an à Louxor et à Assouan. Alexandrie et la côte méditerranéenne reçoivent de vraies pluies en hiver, ce qui est à prendre en compte si votre itinéraire descend jusqu'à la mer." },
      { q: "Faut-il éviter le ramadan ?", a: "Non. Les sites, les musées et les hôtels fonctionnent normalement et le pays est plus calme la journée. Certains restaurants locaux ferment jusqu'au coucher du soleil, et les soirées du Caire sont l'un des grands moments de l'année." },
    ],
    cta: {
      heading: "Choisissons vos dates",
      text: "Dites-nous quand vous pouvez partir : nous vous dirons ce que cette période donne réellement, avantages et inconvénients.",
      whatsapp: "Bonjour Kemet — quand serait-il préférable de partir en Égypte ?",
      emailSubject: "Question — quand partir en Égypte",
    },
    moreLabel: "Le guide mois par mois",
    moreText:
      "Un guide détaillé pour chacun des douze mois — températures, affluence, prix et fêtes — est publié en anglais sur le site principal.",
  },

  // ===== Sécurité ==========================================================
  {
    groupId: "safety",
    symbol: "eye",
    title: "L'Égypte est-elle sûre ? Réponse région par région | Kemet",
    description:
      "L'Égypte est-elle sûre ? Région par région — Le Caire, Louxor, la mer Rouge et le Sinaï — avec les femmes seules, l'eau, les rabatteurs et les zones déconseillées.",
    keywords:
      "egypte securite, est-ce que l'egypte est sure, voyage egypte danger, sinai securite, femme seule egypte",
    crumb: "Sécurité",
    h1: "L'Égypte est-elle sûre ?",
    standfirst:
      "Oui pour les régions touristiques, avec des nuances réelles — et une zone qu'aucun itinéraire ne doit contenir.",
    lede:
      "Les régions que visitent les voyageurs — Le Caire, Gizeh, Louxor, Assouan, Alexandrie et la côte de la mer Rouge — accueillent des millions de personnes chaque année et sont étroitement surveillées. La criminalité violente contre les visiteurs y est rare. Les problèmes réels sont d'un autre ordre : l'insistance commerciale, la circulation et la chaleur. Voici le détail, sans enjolivement.",
    facts: [
      { label: "Vallée du Nil", value: "sûre, très surveillée" },
      { label: "Mer Rouge", value: "sûre" },
      { label: "Sinaï du Sud", value: "sûr sur la côte" },
      { label: "Sinaï du Nord", value: "à ne pas visiter" },
    ],
    sections: [
      {
        title: "Ce qui est sûr, et pourquoi",
        body:
          "Le Caire, Gizeh, Saqqarah, Louxor, Assouan, Abou Simbel, Alexandrie, Hurghada et Charm el-Cheikh reçoivent l'essentiel du tourisme égyptien, et la présence policière y est visible sur les sites, les routes et les entrées d'hôtel. Une famille en voyage privé n'est pas une cible ; le risque quotidien ressemble davantage à celui d'une grande ville européenne, en moins violent.",
      },
      {
        title: "La zone à exclure",
        body:
          "Le nord du Sinaï — au-delà de la bande côtière touristique, vers la frontière avec Gaza — fait l'objet d'un avertissement formel de la plupart des ministères des Affaires étrangères, dont le Quai d'Orsay. Aucun itinéraire sérieux ne s'y rend, le nôtre non plus. À l'inverse, Charm el-Cheikh, Dahab et la côte du Sinaï du Sud sont d'un autre monde et se visitent normalement.",
      },
      {
        title: "Les femmes qui voyagent seules",
        body:
          "C'est faisable et beaucoup le font, mais soyons directs : l'attention et les remarques de rue sont plus fréquentes qu'en Europe, en particulier au Caire. Une tenue couvrant les épaules et les genoux, une voiture privée plutôt que la rue le soir, et un guide qui reste avec vous suppriment la quasi-totalité du problème. La plupart des voyageuses seules décrivent leur séjour comme fatigant socialement plutôt que dangereux.",
      },
      {
        title: "L'eau, la nourriture et la chaleur",
        body:
          "Ne buvez pas l'eau du robinet : l'eau en bouteille est partout et nous en fournissons chaque jour. Les hôtels et les restaurants fréquentés posent rarement problème ; les jus de rue et la salade lavée à l'eau du robinet en posent davantage. En été, la chaleur est le vrai risque de santé, pas la criminalité — d'où le rythme de visite du petit matin.",
      },
      {
        title: "Les rabatteurs, et comment ils disparaissent",
        body:
          "Aux abords des pyramides et des grands temples, la sollicitation est constante : chameaux, souvenirs, « photo gratuite » qui ne l'est pas. Ce n'est pas dangereux, c'est fatigant. Avec un égyptologue et un chauffeur privés, l'essentiel s'évapore : vous ne stationnez pas au mauvais endroit, vous n'êtes pas seuls et quelqu'un répond à votre place.",
      },
    ],
    faqs: [
      { q: "Que disent les recommandations officielles ?", a: "La plupart des ministères des Affaires étrangères, dont le Quai d'Orsay, recommandent une vigilance normale pour les régions touristiques et déconseillent formellement le nord du Sinaï ainsi que les zones frontalières désertiques de l'ouest et du sud. Consultez la fiche actualisée de votre pays avant de réserver : elle prime sur toute page commerciale, y compris celle-ci." },
      { q: "L'Égypte convient-elle aux enfants ?", a: "Oui, et c'est un pays qui leur parle particulièrement. Ce qu'il faut adapter, c'est le rythme : des matinées plus courtes, une pause aux heures chaudes et de l'eau en permanence. Beaucoup de nos voyages sont familiaux." },
      { q: "Faut-il une assurance particulière ?", a: "Une assurance voyage couvrant les soins médicaux et le rapatriement est vivement recommandée, comme partout. Si votre programme inclut la plongée, vérifiez que cette activité est bien couverte : beaucoup de contrats standard l'excluent au-delà d'une certaine profondeur." },
      { q: "Peut-on se déplacer seuls dans Le Caire ?", a: "Oui, dans les quartiers habituels et en journée. Le vrai obstacle n'est pas la sécurité mais la circulation : traverser une avenue du Caire est un exercice, et les taxis négocient. Une voiture avec chauffeur coûte peu et supprime ces deux frictions." },
    ],
    cta: {
      heading: "Une question précise sur la sécurité ?",
      text: "Posez-la : nous répondons franchement, y compris quand la réponse est « ce n'est pas une bonne idée ».",
      whatsapp: "Bonjour Kemet — j'ai une question sur la sécurité en Égypte.",
      emailSubject: "Question — sécurité en Égypte",
    },
    moreLabel: "Le guide complet",
    moreText:
      "Le guide détaillé de la sécurité en Égypte, région par région, est publié en anglais sur le site principal.",
  },

  // ===== Visa ==============================================================
  {
    groupId: "visa",
    symbol: "ankh",
    title: "Visa pour l'Égypte — démarches et tarifs 2026 | Kemet",
    description:
      "Visa pour l'Égypte : 30 dollars à l'arrivée ou e-Visa en ligne, séjour de 30 jours, passeport valable six mois. Ce qu'il faut savoir avant de partir.",
    keywords:
      "visa egypte, visa egypte prix, e-visa egypte, visa a l'arrivee egypte, formalites egypte",
    crumb: "Visa",
    h1: "Le visa pour l'Égypte",
    standfirst:
      "Simple pour la plupart des passeports européens : 30 dollars, à l'arrivée ou en ligne.",
    lede:
      "Pour les ressortissants français, belges, suisses, luxembourgeois et canadiens, l'Égypte délivre un visa touristique de 30 jours. Il s'achète soit à l'arrivée à l'aéroport, soit en ligne avant le départ. Les deux voies aboutissent au même document ; la seule vraie différence est de savoir si vous voulez faire la queue ou non.",
    facts: [
      { label: "Tarif", value: "30 USD (entrée simple)" },
      { label: "Séjour", value: "30 jours" },
      { label: "Passeport", value: "valable 6 mois" },
      { label: "e-Visa", value: "visa2egypt.gov.eg" },
    ],
    sections: [
      {
        title: "À l'arrivée, ou en ligne ?",
        body:
          "À l'arrivée : vous achetez la vignette au guichet bancaire de l'aéroport avant le contrôle des passeports, en dollars américains de préférence en espèces, puis vous passez l'immigration. Cela prend en général quelques minutes. En ligne : l'e-Visa se demande sur le portail officiel du gouvernement égyptien, se paie par carte et arrive par courriel ; vous l'imprimez et vous présentez directement à l'immigration. En haute saison, l'e-Visa fait gagner du temps.",
      },
      {
        title: "Le seul site officiel",
        body:
          "L'e-Visa se demande uniquement sur visa2egypt.gov.eg, le portail du gouvernement égyptien. De nombreux sites intermédiaires d'apparence officielle facturent trois à cinq fois le tarif pour remplir le même formulaire. Si l'adresse ne se termine pas par gov.eg, ce n'est pas le service officiel.",
      },
      {
        title: "Le permis Sinaï, et sa limite",
        body:
          "Si vous entrez par Charm el-Cheikh ou Taba et que vous restez sur la côte du Sinaï du Sud, un permis gratuit de 15 jours est délivré à l'arrivée. Il ne couvre PAS le reste du pays : avec ce permis, vous ne pouvez aller ni au Caire, ni à Louxor. Une excursion au mont Sinaï et à Sainte-Catherine reste possible. Dès que l'itinéraire quitte le Sinaï, il faut le visa complet.",
      },
      {
        title: "Ce que nous faisons, et ce que nous ne faisons pas",
        body:
          "Nous vous disons exactement quelle voie choisir pour votre passeport et vos dates, et notre représentant vous accueille à l'aéroport pour vous accompagner jusqu'au guichet. Nous ne demandons pas le visa à votre place et nous ne facturons rien pour cela : la démarche est personnelle et bon marché, et vous n'avez aucune raison de payer un intermédiaire.",
      },
    ],
    faqs: [
      { q: "Faut-il des dollars en espèces à l'arrivée ?", a: "C'est le plus simple : le guichet accepte les dollars américains sans difficulté, et souvent les euros à un taux moins favorable. Prévoyez des billets en bon état. Si vous préférez ne rien avoir à gérer, prenez l'e-Visa avant de partir." },
      { q: "Combien de temps à l'avance demander l'e-Visa ?", a: "Le portail officiel recommande au moins sept jours avant le départ. En pratique, l'approbation arrive souvent en un à trois jours ouvrés, mais ne vous y prenez pas la veille." },
      { q: "Mon passeport doit-il être valable six mois ?", a: "Oui, six mois après la date d'entrée en Égypte. C'est le motif de refus le plus fréquent à l'embarquement, et il est entièrement évitable : vérifiez la date avant de réserver, pas la semaine du départ." },
      { q: "Les enfants ont-ils besoin d'un visa ?", a: "Oui. Tout voyageur avec son propre passeport a besoin de son propre visa, quel que soit son âge, au même tarif. Un enfant inscrit sur le passeport d'un parent — cas devenu rare — est couvert par celui-ci." },
      { q: "Peut-on prolonger son séjour ?", a: "Oui, auprès des services de l'immigration en Égypte, mais c'est une démarche administrative qui prend du temps. Si vous savez d'avance que vous restez plus de 30 jours, demandez directement le visa à entrées multiples." },
    ],
    cta: {
      heading: "Un doute sur votre passeport ?",
      text: "Dites-nous votre nationalité et vos dates ; nous vous confirmons la voie exacte à suivre — gratuitement, avant même toute réservation.",
      whatsapp: "Bonjour Kemet — une question sur le visa pour l'Égypte.",
      emailSubject: "Question — visa pour l'Égypte",
    },
    moreLabel: "Les règles par nationalité",
    moreText:
      "Les règles d'entrée détaillées, passeport par passeport, sont publiées en anglais sur le site principal. Le portail officiel du gouvernement égyptien reste l'autorité en la matière.",
  },
];
