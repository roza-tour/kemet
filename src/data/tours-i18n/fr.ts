// ---------------------------------------------------------------------------
// Les voyages en français.
//
// Écrit pour un lecteur francophone, pas transposé mot à mot depuis l'anglais.
// Les noms de lieux suivent l'usage français — Le Caire, Gizeh, Assouan,
// Louxor, Abou Simbel, Saqqarah, Dahchour, Charm el-Cheikh — parce que c'est
// sous ces noms que ce lecteur a rencontré l'Égypte dans chaque livre et
// chaque documentaire de sa vie.
//
// Les lignes répétées — transferts, droits d'entrée, pourboires — ne sont pas
// ici : elles vivent une fois par langue dans phrasebook.ts, indexées par leur
// texte anglais. Voir tours-i18n/types.ts pour ce que ce fichier porte et ce
// qu'il ne porte pas.
// ---------------------------------------------------------------------------
import type { TourText } from "./types";

export const fr: TourText[] = [
  {
    slug: "tour-10-day",
    localeSlug: "egypte-essentielle-croisiere-nil",
    metaTitle: "Circuit Égypte 10 jours avec croisière sur le Nil | Kemet",
    metaDescription:
      "Dix jours en privé : Le Caire, Alexandrie, train de nuit vers Assouan et trois nuits de croisière jusqu'à Louxor, avec votre égyptologue.",
    keywords:
      "circuit egypte 10 jours, croisiere nil circuit, voyage prive egypte, le caire louxor assouan, egypte avec croisiere",
    crumb: "Essentiel & croisière",
    title: "L'Égypte essentielle & croisière sur le Nil",
    subtitle:
      "Dix jours sans hâte, des pyramides de Gizeh aux temples de Haute-Égypte, reliés par trois nuits de croisière sur le Nil.",
    durationLabel: "10 jours / 9 nuits",
    startPoint: "Le Caire (aéroport ou hôtel)",
    summary:
      "Notre voyage le plus complet : Le Caire, Alexandrie, un train de nuit vers le sud et trois nuits de croisière d'Assouan à Louxor — toutes les couches de l'Égypte en un seul arc.",
    overview:
      "Voici l'Égypte dans toute son étendue, à un rythme fait pour être vécu plutôt que coché. Vous commencez au Caire avec les trésors du Musée égyptien, passez une journée en Méditerranée à Alexandrie, puis prenez le train de nuit vers Assouan. De là, une croisière de trois nuits vous porte vers l'aval, par Kom Ombo et Edfou, jusqu'à Louxor, où attendent les temples de Karnak et les tombes royales de la rive ouest. Retour au Caire pour les pyramides de Gizeh et les ruelles du Caire islamique. Le voyage est privé d'un bout à l'autre, mené par votre propre égyptologue.",
    itinerary: [
      { title: "Le Caire & le Musée égyptien", items: [
        "Accueil privé à l'aéroport international du Caire",
        "Transfert à votre hôtel et briefing de bienvenue",
        "Après-midi au Musée égyptien de Tahrir — l'or royal de Tanis et les chefs-d'œuvre de l'Ancien Empire",
      ]},
      { title: "Alexandrie, sur la Méditerranée", items: [
        "Route du désert jusqu'à Alexandrie",
        "Catacombes de Kom el-Chogafa et colonne de Pompée",
        "Citadelle de Qaitbay sur l'emplacement du Phare et la Bibliotheca Alexandrina",
        "Déjeuner de poisson en front de mer avant le retour au Caire",
      ]},
      { title: "Le Caire copte & train de nuit vers Assouan", items: [
        "Église suspendue, Abou Serga et les ruelles du Vieux Caire",
        "Transfert à la gare en début de soirée",
        "Train de nuit vers Assouan, cabines privées et dîner à bord",
      ]},
      { title: "Assouan & embarquement", items: [
        "Arrivée à Assouan, visite du haut barrage et de l'obélisque inachevé",
        "Bateau jusqu'au temple insulaire de Philae, dédié à Isis",
        "Embarquement sur votre bateau de croisière et déjeuner sur le fleuve",
      ]},
      { title: "Navigation vers Kom Ombo & Edfou", items: [
        "Matinée de navigation vers l'aval à travers la vallée",
        "Kom Ombo, le temple double de Sobek et d'Horus l'Ancien",
        "Puis Edfou et le grand temple d'Horus, le mieux conservé d'Égypte",
      ]},
      { title: "Écluse d'Esna & arrivée à Louxor", items: [
        "Passage de l'écluse d'Esna, là où la vallée s'ouvre",
        "Arrivée à Louxor dans l'après-midi, temps de repos à bord",
        "En option, soirée son et lumière à Karnak (supplément)",
      ]},
      { title: "Louxor, rive est", items: [
        "Karnak, le plus vaste ensemble de temples du monde antique",
        "Le temple de Louxor au cœur de la ville",
        "Débarquement et transfert à votre hôtel de Louxor",
      ]},
      { title: "Rive ouest & train vers Le Caire", items: [
        "Vallée des Rois et les collines creusées de tombes de Thèbes",
        "Temple funéraire d'Hatchepsout et colosses de Memnon",
        "Train de nuit vers Le Caire en soirée",
      ]},
      { title: "Gizeh & Saqqarah", items: [
        "Les pyramides de Khéops, Khéphren et Mykérinos et le grand Sphinx",
        "Pyramide à degrés de Djéser à Saqqarah, le plus ancien monument de pierre au monde",
        "Point de vue panoramique sur le plateau de Gizeh",
      ]},
      { title: "Le Caire islamique & départ", items: [
        "Citadelle de Saladin et mosquée d'albâtre de Méhémet Ali",
        "Souk de Khan el-Khalili pour une dernière flânerie",
        "Transfert privé à l'aéroport",
      ]},
    ],
    comfort: {
      sleep: "Hôtels au Caire et à Louxor, trois nuits sur le bateau et deux nuits en train-couchettes — des hôtels à la place dans la version avion",
      drives: "Une excursion du Caire à Alexandrie et retour par la route",
    },
    faqs: [
      { q: "La croisière est-elle privée ?", a: "Vous voyagez avec votre propre égyptologue et vos transferts privés, mais le bateau est partagé avec d'autres passagers. La cabine est la vôtre et toutes les visites se font en privé." },
      { q: "Comment fonctionnent les trains de nuit ?", a: "Vous disposez d'une cabine-couchettes privée, le dîner et le petit-déjeuner sont servis à bord. Cela supprime une journée de transfert et vous arrivez reposé pour les visites du matin." },
      { q: "Peut-on ajouter Abou Simbel ?", a: "Oui. Abou Simbel est proposé en option depuis Assouan, par vol court ou en voiture privée, et s'ajoute idéalement à la journée d'Assouan. Nous l'organisons sur demande." },
      { q: "Quelle est la meilleure période ?", a: "D'octobre à avril, les températures sont agréables au Caire comme en Haute-Égypte. L'été est chaud dans le sud : nous partons tôt et nous reposons l'après-midi." },
    ],
  },

  {
    slug: "tour-7-day",
    localeSlug: "egypte-7-jours",
    metaTitle: "Circuit Égypte 7 jours — Le Caire, Alexandrie, Louxor | Kemet",
    metaDescription:
      "Une semaine en privé : le Musée égyptien, Alexandrie, les temples et tombes de Louxor et les pyramides de Gizeh.",
    keywords:
      "circuit egypte 7 jours, egypte une semaine, le caire louxor circuit, voyage prive egypte semaine, alexandrie excursion",
    crumb: "Égypte en 7 jours",
    title: "L'Égypte essentielle, en une semaine",
    subtitle:
      "Une semaine qui rassemble l'essentiel — Le Caire, Alexandrie et Louxor — avec des nuits en train-couchettes entre les deux.",
    durationLabel: "7 jours / 6 nuits",
    startPoint: "Le Caire (aéroport ou hôtel)",
    summary:
      "Les grands noms de l'Égypte en sept jours — le Musée égyptien, Alexandrie, les temples et les tombes de Louxor, et les pyramides de Gizeh.",
    overview:
      "Pour qui dispose d'une semaine, ce voyage ramène l'Égypte à ses plus belles pages sans les expédier. Le Caire s'ouvre sur le Musée égyptien ; une journée entière en Méditerranée revient à Alexandrie ; puis le train de nuit vous emmène à Louxor, vers les temples des vivants et les tombes des morts. Retour au nord pour les pyramides de Gizeh, Saqqarah et le cœur médiéval du Caire islamique. Privé d'un bout à l'autre, avec votre égyptologue et des hôtels quatre ou cinq étoiles.",
    itinerary: [
      { title: "Le Caire & le Musée égyptien", items: [
        "Accueil privé à l'aéroport et transfert à l'hôtel",
        "Après-midi au Musée égyptien de Tahrir",
        "Présentation du programme avec votre guide en soirée",
      ]},
      { title: "Journée à Alexandrie", items: [
        "Route vers la côte méditerranéenne",
        "Catacombes de Kom el-Chogafa, colonne de Pompée et citadelle de Qaitbay",
        "Bibliotheca Alexandrina et déjeuner de poisson en front de mer",
      ]},
      { title: "Le Caire copte & train de nuit vers Louxor", items: [
        "Église suspendue et Vieux Caire le matin",
        "Transfert à la gare en soirée",
        "Train de nuit vers le sud, cabines privées",
      ]},
      { title: "Louxor, rive est", items: [
        "Ensemble de Karnak et allée des Sphinx",
        "Le temple de Louxor au cœur de la ville",
        "Installation à votre hôtel de Louxor",
      ]},
      { title: "Rive ouest & train vers Le Caire", items: [
        "Vallée des Rois et temple funéraire d'Hatchepsout",
        "Colosses de Memnon",
        "Train de nuit vers Le Caire en soirée",
      ]},
      { title: "Gizeh & Saqqarah", items: [
        "Pyramides de Gizeh et grand Sphinx",
        "Pyramide à degrés de Djéser à Saqqarah",
        "Point de vue panoramique sur le plateau",
      ]},
      { title: "Le Caire islamique & départ", items: [
        "Citadelle de Saladin et mosquée de Méhémet Ali",
        "Souk de Khan el-Khalili",
        "Transfert privé à l'aéroport",
      ]},
    ],
    comfort: {
      sleep: "Hôtels au Caire et à Louxor et deux nuits en train-couchettes — des hôtels à la place dans la version avion",
      drives: "Une excursion du Caire à Alexandrie et retour par la route",
    },
    faqs: [
      { q: "Faut-il beaucoup marcher ?", a: "Raisonnablement : des ensembles comme Karnak demandent une à deux heures de marche sur un sol irrégulier. Nous calons le rythme de chaque journée et nous reposons aux heures chaudes." },
      { q: "Les trains de nuit sont-ils confortables ?", a: "Oui. Vous avez une cabine-couchettes privée, dîner et petit-déjeuner servis à bord : les longs trajets se font pendant que vous dormez." },
      { q: "Peut-on prolonger par une croisière ?", a: "Tout à fait — beaucoup de voyageurs ajoutent trois ou quatre nuits entre Assouan et Louxor. Donnez-nous vos dates et nous intégrons la prolongation." },
    ],
  },

  {
    slug: "tour-grand-14day",
    localeSlug: "grand-tour-egypte-14-jours",
    metaTitle: "Grand tour d'Égypte, 14 jours avec mer Rouge | Kemet",
    metaDescription:
      "Quatorze jours en privé : Le Caire, Alexandrie, Abou Simbel, trois nuits de croisière et quatre jours en mer Rouge. Vols intérieurs compris.",
    keywords:
      "grand tour egypte, circuit egypte 14 jours, egypte et mer rouge, abou simbel circuit, voyage egypte 2 semaines",
    crumb: "Grand tour, 14 jours",
    title: "Le grand tour d'Égypte",
    subtitle:
      "Quatorze jours, tous les registres du pays — Le Caire, Alexandrie, le Nil en croisière, Abou Simbel et la mer Rouge pour finir.",
    durationLabel: "14 jours / 13 nuits",
    startPoint: "Le Caire (aéroport ou hôtel)",
    summary:
      "Notre voyage le plus complet : deux capitales, une croisière sur le Nil, le temple de montagne de Ramsès II à Abou Simbel, et quatre jours en mer Rouge pour tout laisser décanter.",
    overview:
      "C'est l'itinéraire de ceux qui comptent venir une fois et tout voir. La première semaine appartient à l'histoire : les deux grands musées du Caire et ses quartiers médiévaux, Alexandrie sur la Méditerranée, puis un vol vers le sud pour Abou Simbel — le temple de montagne de Ramsès II au-dessus du lac Nasser — avant qu'une croisière de trois nuits ne vous porte d'Assouan à Louxor. La seconde semaine change entièrement de ton : après les tombes et les temples de Louxor, vous volez vers Charm el-Cheikh, là où le désert rencontre l'une des eaux les plus claires de la planète. Quatre jours en mer Rouge referment le voyage, avec le snorkeling sur les récifs de Ras Mohammed et rien au programme qui ne puisse être annulé au profit de la piscine. Tous les vols intérieurs sont compris ; chaque journée guidée est privée.",
    itinerary: [
      { title: "Arrivée au Caire", items: [
        "Accueil privé à l'aéroport et transfert à l'hôtel",
        "Présentation du voyage avec votre conseiller en soirée",
      ]},
      { title: "Gizeh & le Grand Musée égyptien", items: [
        "Les pyramides, le panorama et le Sphinx à la fraîche",
        "Le trésor complet de Toutânkhamon au GEM",
      ]},
      { title: "Le Caire islamique & copte", items: [
        "La Citadelle et la mosquée d'albâtre de Méhémet Ali",
        "L'Église suspendue et les ruelles du Vieux Caire",
        "Khan el-Khalili au crépuscule",
      ]},
      { title: "Journée à Alexandrie", items: [
        "Catacombes de Kom el-Chogafa et colonne de Pompée",
        "Citadelle de Qaitbay sur l'emplacement du Phare",
        "Déjeuner de poisson sur la corniche ; retour au Caire",
      ]},
      { title: "Vol vers le sud — Assouan", items: [
        "Vol matinal vers Assouan",
        "Philae en bateau et l'obélisque inachevé",
        "Soirée libre sur la corniche",
      ]},
      { title: "Abou Simbel", items: [
        "Route à l'aube vers Abou Simbel",
        "Le grand temple de Ramsès II et le temple de Néfertari",
        "Retour à Assouan ; felouque à l'heure dorée",
      ]},
      { title: "Embarquement pour la croisière", items: [
        "Matinée libre ; embarquement avant le déjeuner",
        "Appareillage dans l'après-midi",
      ]},
      { title: "Kom Ombo & Edfou", items: [
        "Le temple double de Sobek et d'Horus l'Ancien",
        "Edfou — le temple le mieux conservé d'Égypte",
      ]},
      { title: "Arrivée à Louxor", items: [
        "Passage de l'écluse d'Esna vers Thèbes",
        "Le temple de Louxor illuminé en soirée (en option)",
      ]},
      { title: "Louxor — les deux rives", items: [
        "Karnak à l'ouverture avec votre égyptologue",
        "Vallée des Rois et temple d'Hatchepsout",
        "Débarquement vers votre hôtel de Louxor",
      ]},
      { title: "Vol vers la mer Rouge", items: [
        "Vol matinal vers Charm el-Cheikh",
        "Installation ; le programme s'arrête ici, volontairement",
      ]},
      { title: "Les récifs de Ras Mohammed", items: [
        "Journée en bateau dans le parc national — deux arrêts snorkeling au-dessus des murs de corail",
        "Déjeuner à bord",
      ]},
      { title: "Mer Rouge, journée libre", items: [
        "Une journée libre — plongée, spa, ou simplement la mer",
        "Dîner d'adieu au Vieux Marché de Charm",
      ]},
      { title: "Départ", items: ["Vol vers Le Caire en correspondance avec votre vol international"] },
    ],
    comfort: {
      sleep: "Hôtels au Caire et à Assouan, trois nuits sur le bateau, un hôtel à Louxor, puis un resort en mer Rouge",
      drives: "Une excursion à Alexandrie, et Assouan–Abou Simbel aller-retour par la route",
      early: "Un départ avant l'aube pour Abou Simbel",
    },
    faqs: [
      { q: "Quatorze jours, est-ce trop pour un premier voyage ?", a: "C'est la durée que la plupart des voyageurs qui reviennent auraient aimé réserver la première fois. Ce sont précisément les journées en mer Rouge qui rendent la semaine d'histoire tenable : le voyage respire au lieu d'accumuler la fatigue." },
      { q: "Quelle part du voyage se fait en avion ?", a: "Trois vols intérieurs d'environ une heure chacun, qui remplacent ce qui serait sinon douze heures de route ou de rail. La seule longue route que nous gardons — Assouan–Abou Simbel — fait elle-même partie de l'expérience : le désert ouvert à l'aube." },
      { q: "Peut-on échanger ou prolonger la mer Rouge ?", a: "Sans difficulté. Certains la troquent contre des nuits supplémentaires à Louxor ou contre Siwa, d'autres prolongent Charm d'une semaine entière. Les dix premiers jours forment la colonne vertébrale ; la fin vous appartient." },
    ],
  },

  {
    slug: "tour-cairo-vip-3day",
    localeSlug: "le-caire-vip-3-jours",
    metaTitle: "Le Caire en 3 jours, VIP — pyramides & GEM | Kemet",
    metaDescription:
      "Trois jours au Caire sans friction : passage prioritaire à l'arrivée, plateau privé au petit matin, le GEM et le Caire islamique aux lanternes.",
    keywords:
      "le caire 3 jours, escale le caire, grand musee egyptien visite, le caire prive guide, court sejour le caire",
    crumb: "Le Caire VIP, 3 jours",
    title: "Le Caire VIP, court séjour",
    subtitle:
      "Trois jours, zéro friction — passage prioritaire à l'arrivée, les pyramides et les deux grands musées, et le Caire médiéval une fois les excursionnistes partis.",
    durationLabel: "3 jours / 2 nuits",
    startPoint: "Le Caire (aéroport, accueil VIP)",
    summary:
      "Le Caire essentiel, mené comme une conciergerie : passage prioritaire à l'immigration, matinée privée sur le plateau, le Grand Musée égyptien et le Caire islamique éclairé aux lanternes.",
    overview:
      "Conçu pour les voyageurs qui passent par Le Caire avec peu de temps et refusent de le vivre mal, ce court séjour condense l'essentiel sans jamais donner l'impression d'être condensé. Vous êtes accueilli côté piste, avec passage prioritaire à l'immigration et prise en charge des bagages. La matinée à Gizeh se fait tôt et en privé ; le Grand Musée égyptien suit pendant que la foule se masse ailleurs sur le plateau. La dernière soirée appartient au Caire médiéval à sa meilleure heure — la rue Al-Muizz et le Khan el-Khalili après la tombée du jour, quand les lanternes remplacent les groupes. Un chauffeur et un égyptologue dédiés restent avec vous, et le programme se plie heure par heure à votre état réel.",
    itinerary: [
      { title: "Arrivée VIP & la Citadelle", items: [
        "Accueil côté piste, passage prioritaire et transfert privé",
        "Après-midi à la citadelle de Saladin et à la mosquée de Méhémet Ali",
        "Coucher de soleil sur la vieille ville depuis le parc Al-Azhar",
      ]},
      { title: "Gizeh & le Grand Musée égyptien", items: [
        "Le plateau à l'ouverture — pyramides, panorama et Sphinx",
        "Le grand escalier et les galeries Toutânkhamon du GEM après le déjeuner",
        "Soirée libre, avec nos réservations de restaurant si vous le souhaitez",
      ]},
      { title: "Le Caire médiéval & départ", items: [
        "Le Musée égyptien de Tahrir ou le Caire copte — à vous de choisir",
        "Rue Al-Muizz et Khan el-Khalili quand les lanternes s'allument",
        "Assistance prioritaire au départ à l'aéroport",
      ]},
    ],
    comfort: { sleep: "Les deux nuits dans un hôtel du Caire" },
    faqs: [
      { q: "Que comprend exactement le service VIP à l'aéroport ?", a: "Vous êtes accueilli à la porte de l'avion ou à la passerelle, accompagné dans une file prioritaire à l'immigration, et vos bagages sont portés jusqu'à la voiture. Au départ, la même équipe gère l'enregistrement et les contrôles en sens inverse. L'aéroport du Caire cesse d'être une corvée." },
      { q: "Le programme s'adapte-t-il si j'arrive tard ou décalé ?", a: "Entièrement. L'ordre ci-dessus est la version par défaut, pas un contrat : votre guide le réorganise selon votre énergie, et rien ne se perd à intervertir les journées." },
      { q: "Deux nuits suffisent-elles pour Le Caire ?", a: "Elles suffisent à l'essentiel bien fait, ce que promet cet itinéraire. Si vous pouvez ajouter une troisième nuit, la journée Saqqarah–Dahchour est le meilleur complément." },
    ],
  },

  {
    slug: "tour-luxor-3day",
    localeSlug: "louxor-3-jours",
    metaTitle: "Louxor en 3 jours, privé — les deux rives | Kemet",
    metaDescription:
      "Trois jours à Louxor sans hâte : Karnak à l'ouverture, la Vallée des Rois avant la chaleur, Hatchepsout et le temple illuminé.",
    keywords:
      "louxor 3 jours, vallee des rois visite, karnak temple louxor, louxor voyage prive, court sejour louxor",
    crumb: "Louxor, 3 jours",
    title: "Louxor, sans hâte",
    subtitle:
      "Trois jours dans le plus grand musée à ciel ouvert du monde — les deux rives faites correctement, avec le temple illuminé la nuit comme pivot.",
    durationLabel: "3 jours / 2 nuits",
    startPoint: "Louxor (aéroport, gare ou hôtel)",
    summary:
      "Louxor sans course : Karnak à l'ouverture, la Vallée des Rois avant la chaleur, les terrasses d'Hatchepsout et l'allée des Sphinx à la nuit tombée.",
    overview:
      "On accorde d'ordinaire à Louxor une seule journée frénétique ; la ville conserve plus de monuments que tout le reste du pays réuni. Ce court séjour rend le temps manquant. La journée sur la rive est prend Karnak à l'ouverture — une heure avant les autocars — et revient après la tombée du jour pour le temple de Louxor illuminé, abordé par l'allée des Sphinx restaurée, qui en fait tout simplement un autre monument. La journée sur la rive ouest descend dans trois tombes royales choisies pour leurs couleurs et la fréquentation du jour, puis gagne les terrasses taillées d'Hatchepsout et les colosses de Memnon. La dernière matinée est à vous : une montgolfière à l'aube au-dessus de la nécropole, l'excellent musée de Louxor, ou rien du tout. Le séjour se greffe proprement avant ou après n'importe quel itinéraire cairote, par avion ou par train de nuit.",
    itinerary: [
      { title: "La rive est & le temple de nuit", items: [
        "Accueil à l'aéroport ou à la gare de Louxor",
        "Ensemble de Karnak à l'ouverture, avec votre égyptologue",
        "En soirée : le temple de Louxor illuminé, abordé par l'allée des Sphinx",
      ]},
      { title: "La rive ouest", items: [
        "Vallée des Rois — trois tombes avant la chaleur du jour",
        "Le temple funéraire d'Hatchepsout à Deir el-Bahari",
        "Colosses de Memnon et le village d'artisans de Deir el-Médineh (si le temps le permet)",
      ]},
      { title: "Votre matinée à Louxor & départ", items: [
        "En option une montgolfière à l'aube, ou la collection choisie du musée de Louxor",
        "Transfert privé à l'aéroport ou à la gare",
      ]},
    ],
    comfort: {
      sleep: "Les deux nuits dans un hôtel de Louxor",
      early: "Seulement si vous choisissez la montgolfière de la dernière matinée",
    },
    faqs: [
      { q: "Quelles tombes sont comprises dans la Vallée des Rois ?", a: "Le billet standard en couvre trois parmi celles ouvertes ce jour-là, et votre guide vous orientera vers les mieux peintes du moment. Toutânkhamon, Séthi Ier et Ramsès V/VI exigent des billets séparés que nous pouvons réserver à l'avance." },
      { q: "La visite nocturne du temple de Louxor vaut-elle la peine ?", a: "C'est la meilleure soirée d'Égypte, rapportée à son prix. L'éclairage rend la couleur et la profondeur que le soleil de midi efface, et l'allée des Sphinx illuminée de bout en bout ne s'oublie pas." },
      { q: "Comment combiner avec Le Caire ?", a: "En avion (55 minutes) ou en train de nuit, dans un sens comme dans l'autre. La plupart des voyageurs font Le Caire d'abord et utilisent ce séjour comme chapitre méridional ; nous calons les transferts dans les deux cas." },
    ],
  },

  {
    slug: "tour-4-day",
    localeSlug: "le-caire-alexandrie-4-jours",
    metaTitle: "Le Caire & Alexandrie, 4 jours en privé | Kemet",
    metaDescription:
      "Quatre jours dans le nord de l'Égypte : Musée égyptien, une journée entière à Alexandrie, les pyramides de Gizeh et le Caire islamique.",
    keywords: "le caire alexandrie voyage, egypte 4 jours, court sejour le caire pyramides, excursion alexandrie, voyage prive egypte court",
    crumb: "Le Caire & Alexandrie",
    title: "Des pyramides à la mer",
    subtitle: "Quatre jours qui associent les monuments du Caire et de Gizeh à une journée méditerranéenne à Alexandrie.",
    durationLabel: "4 jours / 3 nuits",
    startPoint: "Le Caire (aéroport ou hôtel)",
    summary: "Un voyage compact dans le nord — le Musée égyptien, les strates gréco-romaines d'Alexandrie, les pyramides de Gizeh et le Caire médiéval.",
    overview: "Peu de jours mais une grande amplitude : ce court séjour met les monuments fondateurs de l'Ancien Empire en regard de la cosmopolite Alexandrie. Vous commencez au Musée égyptien, passez une journée entière entre les catacombes et la citadelle d'Alexandrie, puis accordez à Gizeh et à Saqqarah la lumière du matin qu'elles méritent avant de refermer dans les ruelles du Caire islamique. Idéal en voyage autonome ou en première moitié d'un itinéraire plus long.",
    itinerary: [
      { title: "Arrivée & le Musée égyptien", items: [
        "Accueil privé à l'aéroport et transfert à l'hôtel",
        "Après-midi au Musée égyptien de Tahrir",
        "Suggestions de dîner de votre guide",
      ]},
      { title: "Journée à Alexandrie", items: [
        "Catacombes de Kom el-Chogafa",
        "Citadelle de Qaitbay et Bibliotheca Alexandrina",
        "Colonne de Pompée et déjeuner de poisson en front de mer",
      ]},
      { title: "Gizeh & Saqqarah", items: [
        "Pyramides de Gizeh et grand Sphinx",
        "Pyramide à degrés de Djéser à Saqqarah",
        "Memphis, première capitale de l'Égypte unifiée",
      ]},
      { title: "Le Caire islamique & départ", items: [
        "Citadelle de Saladin et mosquée de Méhémet Ali",
        "Souk de Khan el-Khalili",
        "Transfert privé à l'aéroport",
      ]},
    ],
    comfort: { sleep: "Les trois nuits dans un hôtel du Caire", drives: "Une excursion du Caire à Alexandrie et retour par la route" },
    faqs: [
      { q: "Quatre jours suffisent-ils pour Le Caire et Alexandrie ?", a: "Oui — l'itinéraire est construit pour couvrir l'essentiel des deux sans précipitation, avec une journée entière pour Alexandrie et une matinée complète pour le plateau de Gizeh." },
      { q: "Peut-on ajouter Louxor ou une croisière ?", a: "Facilement. Ce séjour fait une première moitié naturelle ; nous ajoutons un vol ou un train de nuit vers Louxor et Assouan dès que vous avez plus de jours." },
      { q: "Combien de temps dure la route vers Alexandrie ?", a: "Environ deux heures et demie à trois heures par trajet sur la route du désert, en véhicule privé climatisé avec votre guide." },
    ],
  },

  {
    slug: "tour-3-day",
    localeSlug: "louxor-assouan-3-jours-vols-inclus",
    metaTitle: "Louxor & Assouan en 3 jours, vols inclus | Kemet",
    metaDescription:
      "Trois jours en Haute-Égypte depuis Le Caire, vols intérieurs compris : Karnak, Vallée des Rois, haut barrage et le temple de Philae.",
    keywords: "louxor assouan 3 jours, haute egypte court sejour, egypte vol interieur inclus, karnak vallee des rois philae, le caire louxor avion",
    crumb: "Louxor & Assouan, 3 jours",
    title: "Du Caire à Louxor et Assouan",
    subtitle: "Trois jours de temples et de tombes en Haute-Égypte, les vols intérieurs compris dans le prix.",
    durationLabel: "3 jours / 2 nuits",
    startPoint: "Le Caire (vols compris)",
    summary: "Une boucle rapide par Louxor et Assouan, vols compris — Karnak, la Vallée des Rois, Philae et le haut barrage, au départ du Caire et retour.",
    overview: "Quand le temps manque mais que la Haute-Égypte est la vraie raison du voyage, cette boucle avec vols livre les grands noms du sud en trois journées concentrées. Vous volez du Caire à Louxor pour les temples de la rive est et les tombes royales de la rive ouest, poursuivez vers Assouan pour le haut barrage et le temple insulaire de Philae, puis revolez vers Le Caire. Les vols intérieurs étant compris, les grandes distances disparaissent et les journées restent pleines de monuments plutôt que de transferts.",
    itinerary: [
      { title: "Vol vers Louxor — la rive est", items: [
        "Vol matinal Le Caire–Louxor, accueil à l'arrivée",
        "Ensemble de Karnak",
        "Temple de Louxor et nuit à Louxor",
      ]},
      { title: "Rive ouest & route vers Assouan", items: [
        "Vallée des Rois et temple funéraire d'Hatchepsout",
        "Colosses de Memnon",
        "Route le long du Nil vers Assouan et nuit sur place",
      ]},
      { title: "Assouan & vol vers Le Caire", items: [
        "Haut barrage d'Assouan et obélisque inachevé",
        "Temple insulaire de Philae en bateau",
        "Vol de retour vers Le Caire dans l'après-midi",
      ]},
    ],
    comfort: { sleep: "Un hôtel à Louxor, puis un à Assouan", drives: "Louxor–Assouan par la route" },
    faqs: [
      { q: "Les vols intérieurs sont-ils vraiment compris ?", a: "Oui — Le Caire–Louxor et Assouan–Le Caire font tous deux partie du prix. Vous n'organisez que vos vols internationaux à destination et au départ du Caire." },
      { q: "Trois jours, n'est-ce pas trop court ?", a: "C'est soutenu mais bien enchaîné : les vols suppriment les longues routes, si bien que chaque journée se passe aux monuments et non entre eux." },
      { q: "Peut-on ajouter Abou Simbel depuis Assouan ?", a: "Oui, en option par vol matinal ou en voiture privée. Cela allonge la matinée d'Assouan de quelques heures, nous le planifions donc à l'avance." },
    ],
  },

  {
    slug: "tour-alexandria-2day",
    localeSlug: "alexandrie-une-nuit",
    metaTitle: "Alexandrie avec une nuit, 2 jours depuis Le Caire | Kemet",
    metaDescription:
      "Deux jours méditerranéens : catacombes, citadelle sur l'emplacement du Phare, la nouvelle Bibliothèque — et la soirée que les excursions ne voient jamais.",
    keywords: "alexandrie nuit, alexandrie depuis le caire, alexandrie 2 jours, catacombes kom el chogafa, bibliotheca alexandrina",
    crumb: "Alexandrie, une nuit",
    title: "Alexandrie, une nuit sur place",
    subtitle: "Deux jours méditerranéens — les catacombes, la citadelle sur l'emplacement du Phare, la Bibliothèque renaissante, et une soirée que les excursionnistes ne voient jamais.",
    durationLabel: "2 jours / 1 nuit",
    startPoint: "Le Caire (prise en charge à l'hôtel)",
    summary: "Alexandrie avec sa moitié manquante : les sites gréco-romains le jour, puis la corniche au crépuscule, le poisson au bord de l'eau et la lumière du matin qu'aucune excursion ne saisit.",
    overview: "Alexandrie en excursion est un sprint honorable ; Alexandrie avec une nuit est une autre ville. Ce voyage fait le circuit essentiel correctement — les catacombes de Kom el-Chogafa sur trois niveaux, la colonne de Pompée, la citadelle de Qaitbay posée exactement sur l'emprise de l'ancien phare, et la Bibliotheca Alexandrina — puis reste pour les heures qui donnent son sens à la ville : la promenade de la corniche au crépuscule, le poisson choisi au poids dans une institution du front de mer, et une matinée lente par les jardins du palais de Montazah et l'amphithéâtre romain avant un retour tranquille au Caire. Le rythme méditerranéen est précisément l'objet ; une nuit ici recalibre tout un itinéraire égyptien.",
    itinerary: [
      { title: "La ville antique", items: [
        "Route du désert depuis Le Caire le matin",
        "Catacombes de Kom el-Chogafa et colonne de Pompée",
        "La citadelle de Qaitbay et la Bibliotheca Alexandrina",
        "Crépuscule sur la corniche et dîner de poisson au bord de l'eau",
      ]},
      { title: "Palais, Romains & retour", items: [
        "Les jardins du palais de Montazah dans l'air marin du matin",
        "L'amphithéâtre romain de Kom el-Dikka",
        "Retour tranquille au Caire en fin d'après-midi",
      ]},
    ],
    comfort: { sleep: "Une nuit dans un hôtel en front de mer à Alexandrie", drives: "Le Caire–Alexandrie aller-retour par la route" },
    faqs: [
      { q: "Pourquoi dormir sur place plutôt que l'excursion ?", a: "La route représente cinq à six heures aller-retour ; en excursion, il ne reste d'Alexandrie que son midi. La nuit sur place vous donne le crépuscule, le dîner et la lumière du matin — les trois meilleures heures de la ville — pour un surcoût modeste." },
      { q: "Quelle est la meilleure saison ?", a: "D'avril à octobre, quand le climat méditerranéen est tout l'intérêt. L'été, la ville affiche 5 à 10 °C de moins que Le Caire et devient la station balnéaire des Égyptiens." },
      { q: "Le poisson est-il vraiment incontournable ?", a: "Absolument. Vous choisissez au poids sur l'étal de glace du jour et il arrive grillé ou frit avec les accompagnements alexandrins. Votre guide sait quelles institutions de la corniche méritent leur réputation." },
    ],
  },

  {
    slug: "tour-upper-egypt-5day",
    localeSlug: "haute-egypte-5-jours",
    metaTitle: "Haute-Égypte en 5 jours — Louxor, Edfou, Assouan | Kemet",
    metaDescription:
      "Cinq jours en Haute-Égypte par la route, en privé : les deux rives de Louxor, Edfou et Kom Ombo en chemin, puis Philae et les îles d'Assouan.",
    keywords: "haute egypte circuit, louxor assouan 5 jours, edfou kom ombo, egypte sans croisiere, temples haute egypte",
    crumb: "Haute-Égypte, 5 jours",
    title: "Les temples du Sud",
    subtitle: "Cinq jours sans hâte à travers la Haute-Égypte — les deux rives de Louxor, la route du sud par Edfou et Kom Ombo, et les îles d'Assouan.",
    durationLabel: "5 jours / 4 nuits",
    startPoint: "Louxor (hôtel, gare ou aéroport)",
    summary: "Le cœur historique de l'Égypte en voyage privé par la route — Karnak, la Vallée des Rois, Edfou, Kom Ombo et Philae, avec le temps de les absorber.",
    overview: "La Haute-Égypte concentre la plus forte densité de monuments du pays, et la plupart des itinéraires la traversent au pas de course. Pas celui-ci. Deux journées pleines à Louxor séparent les temples de la rive est de la nécropole de la rive ouest, pour que ni l'une ni l'autre ne soit expédiée. La route vers le sud devient alors une partie du voyage plutôt qu'un transfert : Edfou et Kom Ombo coupent le trajet exactement là où le trafic fluvial antique faisait halte. Assouan referme le voyage sur un registre plus doux — Philae en bateau, les carrières de granit, et une heure de felouque sous voile avant l'avion ou le train. Hôtels quatre et cinq étoiles tout du long, égyptologue privé du premier au dernier jour.",
    itinerary: [
      { title: "Arrivée à Louxor & la rive est", items: [
        "Accueil privé à l'aéroport ou à la gare de Louxor",
        "Ensemble de Karnak — la grande salle hypostyle dans la lumière de l'après-midi",
        "Le temple de Louxor au crépuscule, quand les projecteurs s'allument",
      ]},
      { title: "La rive ouest en entier", items: [
        "Vallée des Rois — trois tombes royales avec votre égyptologue",
        "Le temple funéraire en terrasses d'Hatchepsout à Deir el-Bahari",
        "Colosses de Memnon et retour par les routes de village de la plaine",
      ]},
      { title: "Vers le sud — Edfou & Kom Ombo", items: [
        "Route matinale vers Edfou et le temple d'Horus, le mieux conservé d'Égypte",
        "Le sanctuaire double de Kom Ombo au-dessus d'un coude du Nil",
        "Arrivée à Assouan en fin d'après-midi ; soirée libre sur la corniche",
      ]},
      { title: "Assouan — Philae & le fleuve", items: [
        "Haut barrage et obélisque inachevé dans la carrière de granit",
        "Bateau jusqu'au temple insulaire de Philae",
        "Felouque à l'heure dorée parmi les îles de la première cataracte",
      ]},
      { title: "Départ — ou Abou Simbel", items: [
        "Matinée libre, ou excursion matinale en option à Abou Simbel",
        "Transfert privé à l'aéroport ou à la gare d'Assouan",
      ]},
    ],
    comfort: {
      sleep: "Un hôtel à Louxor, puis un à Assouan",
      drives: "Louxor–Assouan par la route, avec arrêts à Edfou et Kom Ombo",
      early: "Seulement si vous choisissez l'excursion à Abou Simbel le dernier jour",
    },
    faqs: [
      { q: "Pourquoi rouler de Louxor à Assouan plutôt que croiser ?", a: "La route permet Edfou et Kom Ombo sans se soumettre à l'horaire fixe d'un bateau, et garde chaque nuit une vraie chambre d'hôtel. Si vous préférez naviguer, notre croisière Nil en Grand couvre le même corridor par l'eau." },
      { q: "Abou Simbel est-il compris ?", a: "Pas par défaut — mais il s'insère proprement le dernier jour en excursion matinale depuis Assouan, en voiture privée ou en vol court. Dites-le à la réservation pour que nous réservions les horaires." },
      { q: "Comment rejoindre Louxor pour commencer ?", a: "Par vol EgyptAir depuis Le Caire (55 minutes) ou par le train de nuit. Les deux s'ajoutent sans difficulté ; le voyage commence dès votre arrivée." },
    ],
  },

  {
    slug: "tour-honeymoon-9day",
    localeSlug: "voyage-de-noces-nil-9-jours",
    metaTitle: "Voyage de noces en Égypte, 9 jours sur le Nil | Kemet",
    metaDescription:
      "Neuf jours à deux : lever de soleil privé aux pyramides, felouque à l'heure dorée, trois nuits sur le Nil et des suites choisies pour la vue.",
    keywords: "voyage de noces egypte, lune de miel nil, egypte romantique, croisiere nil en amoureux, honeymoon egypte",
    crumb: "Voyage de noces, 9 jours",
    title: "Voyage de noces sur le Nil",
    subtitle: "Neuf jours faits pour deux — les grands noms du Caire, trois nuits de croisière, les îles d'Assouan et de longues soirées dorées où rien ne presse.",
    durationLabel: "9 jours / 8 nuits",
    startPoint: "Le Caire (aéroport ou hôtel)",
    summary: "L'Égypte comme un voyage de noces devrait l'être — lever de soleil privé aux pyramides, felouque à l'heure dorée, trois nuits sur le Nil et des suites choisies pour leur vue.",
    overview: "Un voyage de noces n'est pas un itinéraire ordinaire avec des pétales de rose. Le rythme diffère : départs plus tardifs, soirées plus longues, un moment fort par jour plutôt que quatre. Ce voyage s'ouvre au Caire avec le Musée égyptien et un lever de soleil privé à Gizeh avant l'ouverture du plateau. Vous volez vers Assouan — la ville la plus douce et la plus romantique du fleuve — pour une felouque privée à l'heure dorée et un dîner au-dessus de la cataracte. Une croisière de trois nuits vous porte vers Louxor par Kom Ombo et Edfou, avec une montgolfière à l'aube sur les collines thébaines comme image finale. Hôtels et cabines sont choisis pour leur vue sur le Nil, et chaque guide sait qu'il s'agit d'un voyage de noces et non d'une marche forcée.",
    itinerary: [
      { title: "Arrivée au Caire", items: [
        "Accueil privé à l'aéroport et transfert vers une suite avec vue sur le Nil",
        "Soirée libre — suggestions de dîner de votre conseiller",
      ]},
      { title: "Lever de soleil à Gizeh & le musée", items: [
        "Accès privé anticipé au plateau de Gizeh au lever du soleil, avant l'ouverture",
        "Petit-déjeuner tardif, puis le Grand Musée égyptien à votre rythme",
        "Repos l'après-midi ; apéritif en felouque sur le Nil du Caire en soirée",
      ]},
      { title: "Vol vers Assouan", items: [
        "Vol matinal vers le sud",
        "Philae — le temple insulaire d'Isis, déesse de l'amour, en bateau",
        "Felouque au coucher du soleil entre les îles de granit ; dîner sur une terrasse nubienne",
      ]},
      { title: "Assouan & embarquement", items: [
        "Matinée lente — l'île botanique ou le souk, comme il vous plaira",
        "Embarquement avant le déjeuner",
        "Appareillage dans l'après-midi, sur le pont soleil",
      ]},
      { title: "Kom Ombo & Edfou", items: [
        "Le temple double de Kom Ombo dans la lumière du matin",
        "Le temple d'Horus à Edfou l'après-midi",
        "Dîner à bord tandis que le bateau s'amarre pour la nuit",
      ]},
      { title: "Écluse d'Esna & arrivée à Louxor", items: [
        "Une journée sur l'eau — la journée de noces où l'on ne fait rien, magnifiquement",
        "Arrivée à Louxor en soirée ; le temple de Louxor illuminé, si vous le souhaitez",
      ]},
      { title: "Montgolfière & rive ouest", items: [
        "Montgolfière à l'aube au-dessus de la Vallée des Rois (selon la météo)",
        "Vallée des Rois et temple d'Hatchepsout avec votre égyptologue",
        "Débarquement vers un hôtel de Louxor pour les dernières nuits",
      ]},
      { title: "Karnak & une journée à deux", items: [
        "Karnak dans le calme du petit matin",
        "Après-midi entièrement libre — piscine, spa ou musée",
        "Dîner d'adieu organisé par votre conseiller",
      ]},
      { title: "Vol vers Le Caire & départ", items: ["Vol matinal vers Le Caire en correspondance avec votre vol international"] },
    ],
    comfort: {
      sleep: "Une suite avec vue sur le Nil au Caire, un hôtel à Assouan, trois nuits sur le bateau, puis un hôtel à Louxor",
      early: "Lever de soleil à Gizeh, une montgolfière à l'aube sur la rive ouest de Louxor, et Karnak au petit matin",
    },
    faqs: [
      { q: "En quoi diffère-t-il du circuit de 10 jours ?", a: "L'itinéraire se recoupe, le rythme non. Ce voyage troque Alexandrie et les trains de nuit contre des vols, des suites avec vue sur le Nil, des matinées plus tardives et des soirées réservées. Il est construit autour du temps à deux, pas de la couverture." },
      { q: "Pouvez-vous organiser des surprises — fleurs, dîner privé, demande en mariage ?", a: "Oui, discrètement et souvent. Dites à votre conseiller ce que vous avez en tête et nous nous chargeons de la mise en scène ; une demande dans un temple demande un peu de chorégraphie, et nous savons exactement où sont les coins tranquilles." },
      { q: "La montgolfière est-elle sûre ?", a: "Les vols de Louxor sont assurés par des opérateurs agréés sous contrôle de l'aviation civile, ne décollent qu'à l'aube par temps calme et sont annulés sans hésitation en cas de vent. Nous réservons des dates souples pour qu'une matinée annulée glisse à la suivante." },
    ],
  },

  {
    slug: "tour-family-8day",
    localeSlug: "egypte-en-famille-8-jours",
    metaTitle: "Égypte en famille, 8 jours avec enfants | Kemet",
    metaDescription:
      "L'Égypte avec des enfants, bien faite : matinées guidées courtes, égyptologues spécialistes des familles, après-midi à la piscine.",
    keywords: "egypte avec enfants, voyage famille egypte, pyramides avec enfants, egypte en famille circuit, vacances famille egypte",
    crumb: "En famille, 8 jours",
    title: "L'Égypte en famille : des pyramides au Nil",
    subtitle: "Huit jours pensés pour des enfants curieux et des parents détendus — momies, felouques, couleurs des tombes et après-midi au bord de la piscine.",
    durationLabel: "8 jours / 7 nuits",
    startPoint: "Le Caire (aéroport ou hôtel)",
    summary: "L'Égypte avec des enfants, bien faite : matinées guidées courtes, égyptologues spécialistes des familles, après-midi libres, et des moments qu'aucune salle de classe n'égale.",
    overview: "L'Égypte est la plus belle salle de classe du monde — à condition que le rythme respecte la façon dont les enfants voyagent réellement. Ce voyage garde les visites guidées le matin, confie les après-midi aux piscines et aux jardins, et s'appuie sur des guides spécialisés dans les familles : ceux qui expliquent la momification à un enfant de huit ans assez vivement pour que l'enfant la raconte à son tour au dîner. Le Caire et Gizeh ouvrent le voyage avec le Sphinx, les galeries Toutânkhamon du Grand Musée égyptien et les momies du NMEC. Un vol vers le sud (le train de nuit séduit rarement deux fois) mène aux tombes peintes de Louxor et à une heure de felouque à Assouan, où la seule exigence est de laisser traîner une main dans le Nil. Suites familiales ou chambres communicantes tout du long.",
    itinerary: [
      { title: "Arrivée au Caire", items: [
        "Accueil privé à l'aéroport — sièges enfants installés si besoin",
        "Installation dans les chambres communicantes ; soirée libre",
      ]},
      { title: "Pyramides & Sphinx", items: [
        "Le plateau de Gizeh à la fraîche — pyramides, panorama et Sphinx",
        "En option, une courte promenade à dos de chameau au point panoramique",
        "Après-midi piscine ; spectacle son et lumière aux pyramides en soirée (en option)",
      ]},
      { title: "Toutânkhamon & les momies", items: [
        "Grand Musée égyptien — le trésor du roi-enfant, raconté pour de jeunes esprits",
        "La salle des momies royales au NMEC pour les plus grands et les plus braves",
        "Glace sur la corniche du Nil",
      ]},
      { title: "Vol vers Louxor — Karnak", items: [
        "Vol matinal vers le sud",
        "Karnak en chasse au trésor : trouver le scarabée, compter les colonnes",
        "Après-midi à la piscine de l'hôtel",
      ]},
      { title: "Vallée des Rois", items: [
        "Visite matinale de la rive ouest — trois tombes choisies pour leurs couleurs vives",
        "Temple d'Hatchepsout et colosses de Memnon",
        "Après-midi libre ; atelier cuisine en famille à l'hôtel (en option)",
      ]},
      { title: "Vers Assouan par la route — Edfou", items: [
        "Route vers le sud avec un arrêt à Edfou, abordé en calèche",
        "Arrivée à Assouan ; glace sur la corniche en soirée",
      ]},
      { title: "Felouques & couleurs nubiennes", items: [
        "Philae en bateau — un temple sur une île est déjà une aventure",
        "Felouque l'après-midi et visite d'un village nubien peint",
        "Dessins au henné et thé d'hibiscus chez une famille nubienne",
      ]},
      { title: "Retour via Le Caire", items: ["Vol matinal vers Le Caire en correspondance avec votre départ"] },
    ],
    comfort: {
      sleep: "Hôtels au Caire, à Louxor et à Assouan",
      drives: "Louxor–Assouan par la route, avec un arrêt à Edfou",
      early: "Un départ matinal pour la Vallée des Rois",
    },
    faqs: [
      { q: "Pour quels âges ?", a: "Il est calibré pour 6 à 15 ans environ. Les plus jeunes s'en sortent aussi — les matinées sont courtes — mais les tombes et les musées prennent surtout à partir de sept ans. Les guides s'adaptent sur place à l'enfant qu'ils ont devant eux." },
      { q: "Les enfants marcheront-ils beaucoup ?", a: "Les visites tiennent en deux ou trois heures dans la fraîcheur du matin, le véhicule jamais loin. La plus longue marche est Karnak, et elle est coupée de pauses à l'ombre et, très franchement, de jeux." },
      { q: "La cuisine convient-elle aux enfants difficiles ?", a: "Oui. Les hôtels proposent des plats familiers à côté de la cuisine égyptienne, et votre guide sait toujours où trouver des pâtes ou du poulet grillé. La plupart des enfants repartent accros au jus de mangue frais." },
    ],
  },

  {
    slug: "tour-photography-7day",
    localeSlug: "voyage-photo-egypte-7-jours",
    metaTitle: "Voyage photo en Égypte, 7 jours réglés sur la lumière | Kemet",
    metaDescription:
      "Sept jours organisés selon la lumière et non les horaires : Gizeh au lever du soleil, Karnak avant les cars, montgolfières sur Thèbes.",
    keywords: "voyage photo egypte, photographie egypte, gizeh lever du soleil photo, karnak photographier, stage photo egypte",
    crumb: "Voyage photo, 7 jours",
    title: "L'Égypte à travers l'objectif",
    subtitle: "Sept jours réglés sur la lumière et non sur les horaires d'ouverture — plateaux à l'aube, temples à l'heure bleue et le Nil à l'heure dorée.",
    durationLabel: "7 jours / 6 nuits",
    startPoint: "Le Caire (aéroport ou hôtel)",
    summary: "Un itinéraire construit à rebours depuis la lumière : accès anticipé à Gizeh au lever du soleil, Karnak avant la foule, montgolfières sur Thèbes et felouques à l'heure dorée.",
    overview: "La plupart des itinéraires égyptiens vous déposent devant les grands sites au milieu d'une journée plate et bondée — les pires heures qu'un appareil puisse connaître. Ce voyage inverse la logique. Chaque journée s'organise autour de la première et de la dernière lumière : accès privé anticipé à Gizeh avant l'ouverture du plateau, la salle hypostyle de Karnak dans le soleil rasant du matin qui sculpte les reliefs, l'allée des Sphinx illuminée à l'heure bleue, et les voiles latines d'Assouan à contre-jour à l'heure dorée. Votre guide comprend les photographes — c'est-à-dire qu'il sait quand parler, quand apporter un permis de trépied, et quand vous laisser simplement seul avec la scène. Un conjoint non photographe voyage très bien ici aussi : la lumière qui flatte un capteur flatte autant un souvenir.",
    itinerary: [
      { title: "Arrivée au Caire & briefing", items: [
        "Transfert privé et briefing du parcours avec votre guide en soirée",
        "Vérification du matériel — permis de trépied organisés là où ils sont exigés",
      ]},
      { title: "Gizeh à la première lumière", items: [
        "Accès anticipé au plateau au lever du soleil, avant l'ouverture",
        "En fin de matinée : le point panoramique et les angles de l'enceinte du Sphinx",
        "Pause tri l'après-midi ; silhouette de la ville à l'heure bleue depuis le parc Al-Azhar",
      ]},
      { title: "Le Caire islamique — ruelles & lanternes", items: [
        "Marche à l'heure dorée dans la rue Al-Muizz, quand les lanternes s'allument",
        "Les ruelles du Khan el-Khalili — visages, cuivre et puits de lumière",
        "Vol vers Louxor en soirée",
      ]},
      { title: "Montgolfière & rive ouest", items: [
        "Montgolfière à l'aube au-dessus de la nécropole thébaine (selon la météo)",
        "Intérieurs de la Vallée des Rois — à main levée là où le trépied est interdit",
        "Les terrasses d'Hatchepsout en lumière rasante de fin de journée",
      ]},
      { title: "Karnak & le temple de Louxor de nuit", items: [
        "Karnak à l'ouverture — une heure avant les autocars",
        "Après-midi sur le fleuve : pêcheurs, felouques et reflets",
        "L'allée des Sphinx et le temple de Louxor illuminés à l'heure bleue",
      ]},
      { title: "Assouan — voiles & granit", items: [
        "Route matinale vers le sud (arrêt à Edfou sur demande)",
        "Philae en bateau — le temple qui sort de l'eau",
        "Felouque privée à l'heure dorée parmi les îles de la cataracte",
      ]},
      { title: "Couleurs nubiennes & départ", items: [
        "Lumière du matin dans un village nubien peint",
        "Vol vers Le Caire pour votre correspondance",
      ]},
    ],
    comfort: {
      sleep: "Hôtels au Caire, à Louxor et à Assouan",
      drives: "Louxor–Assouan par la route",
      early: "Lever de soleil à Gizeh, une montgolfière à l'aube sur la rive ouest, et la lumière du matin dans un village nubien",
    },
    faqs: [
      { q: "Puis-je emporter un drone ?", a: "Non — partez du principe que c'est impossible. La réglementation égyptienne sur les drones est parmi les plus strictes qui soient et le matériel est confisqué à l'aéroport. Tout l'itinéraire est pensé pour des perspectives au sol et depuis la montgolfière." },
      { q: "Les trépieds sont-ils autorisés ?", a: "Cela varie selon les sites et change : certains exigent un permis payant, d'autres les interdisent, et les intérieurs des tombes royales se font strictement à main levée. Nous obtenons les permis à l'avance là où ils existent et adaptons la technique là où ils n'existent pas." },
      { q: "Le voyage vaut-il pour un conjoint non photographe ?", a: "Vraiment oui. Le programme revient simplement à voir les sites à leurs heures les plus vides et les plus belles ; le seul prix à payer, ce sont des réveils matinaux, et la lumière les rembourse." },
    ],
  },

  {
    slug: "tour-cairo-culture-5day",
    localeSlug: "le-caire-culturel-5-jours",
    metaTitle: "Le Caire culturel, 5 jours avec un historien | Kemet",
    metaDescription:
      "Cinq jours dans les strates d'une ville : Le Caire pharaonique, copte, islamique et moderne, lu rue par rue avec un historien.",
    keywords: "le caire culturel, caire islamique visite guidee, caire copte, saqqarah dahchour excursion, le caire 5 jours",
    crumb: "Le Caire culturel",
    title: "Le Caire aux huit mondes",
    subtitle: "Cinq jours dans les strates d'une seule ville — Le Caire pharaonique, copte, islamique et moderne, lu rue par rue avec un historien.",
    durationLabel: "5 jours / 4 nuits",
    startPoint: "Le Caire (aéroport ou hôtel)",
    summary: "Une lecture lente et profonde de la ville la plus stratifiée du monde — ses deux musées, trois confessions, rues médiévales et la nécropole où la pyramide fut inventée.",
    overview: "La plupart des visiteurs accordent au Caire deux nuits et une liste. Ce voyage lui accorde cinq jours et une thèse : que Le Caire n'est pas une escale mais le site culturel le plus dense du monde méditerranéen. La strate pharaonique reçoit deux journées — Gizeh, plus l'arc Saqqarah–Memphis–Dahchour où la forme pyramidale fut inventée — mais le cœur de l'itinéraire est la ville vivante : le quartier copte bâti dans une forteresse romaine, le tissu millénaire du Caire islamique parcouru mosquée par mosquée avec un historien, le Khan el-Khalili dont les ruelles gardent la trace des routes commerciales, et les deux grands musées lus comme une seule collection séparée par un siècle. Les soirées sont construites avec autant de soin que les matinées — un spectacle soufi de tanoura, un dîner dans une maison ottomane restaurée, le thé là où les Cairotes le boivent vraiment.",
    itinerary: [
      { title: "Arrivée & le Musée égyptien", items: [
        "Accueil privé à l'aéroport et transfert",
        "Les salles anciennes et denses du Musée égyptien avec votre historien",
        "Promenade du soir dans les rues Belle Époque du centre-ville",
      ]},
      { title: "Gizeh & le Grand Musée égyptien", items: [
        "Le plateau à l'ouverture — pyramides, panorama, Sphinx",
        "Après-midi dans les galeries Toutânkhamon du GEM",
        "Spectacle son et lumière en soirée (en option)",
      ]},
      { title: "Saqqarah, Memphis & Dahchour", items: [
        "La pyramide à degrés de Djéser — là où commence l'architecture de pierre",
        "Le colosse de Ramsès II à Memphis",
        "Les pyramides rhomboïdale et rouge de Dahchour, presque toujours désertes",
      ]},
      { title: "Le Caire copte & islamique", items: [
        "La forteresse romaine de Babylone, l'Église suspendue et la synagogue Ben Ezra",
        "La mosquée d'Ibn Touloun, du neuvième siècle, et la Citadelle",
        "La rue Al-Muizz au crépuscule ; spectacle soufi de tanoura à la nuit tombée",
      ]},
      { title: "Le souk & départ", items: [
        "Khan el-Khalili avec le contexte — des ateliers, pas seulement des étals",
        "Dernier déjeuner dans une maison ottomane restaurée",
        "Transfert privé à l'aéroport",
      ]},
    ],
    comfort: { sleep: "Les quatre nuits dans un hôtel du Caire" },
    faqs: [
      { q: "Cinq jours dans une seule ville, est-ce tenable ?", a: "Le Caire pourrait en remplir quinze. Cinq jours sont le moment où la ville cesse d'être un flou de monuments et devient lisible — vous reconnaissez les dynasties, les styles de mosquées et les trames de rues sans qu'on vous le dise. C'est tout l'objectif." },
      { q: "Combien marche-t-on la journée du Caire islamique ?", a: "Environ quatre kilomètres sur la journée, sur pavés et pierre, constamment coupés de visites. Les chaussures confortables comptent plus sur ce voyage que sur tout autre." },
      { q: "Peut-on ajouter Alexandrie ?", a: "Oui — une sixième journée méditerranéenne prolonge naturellement ce voyage. Demandez-le à la réservation et nous l'intégrons." },
    ],
  },

  {
    slug: "tour-sharm-5day",
    localeSlug: "mer-rouge-charm-5-jours",
    metaTitle: "Mer Rouge : Charm el-Cheikh, 5 jours en privé | Kemet",
    metaDescription:
      "Cinq jours là où les montagnes du Sinaï rencontrent l'eau la plus claire de l'hémisphère nord : journée bateau privée à Ras Mohammed et soirée dans le désert.",
    keywords: "charm el cheikh voyage, mer rouge sejour, ras mohammed snorkeling, soiree desert sinai, egypte plage voyage",
    crumb: "Mer Rouge, 5 jours",
    title: "Retraite en mer Rouge : Charm el-Cheikh",
    subtitle: "Cinq jours là où les montagnes du Sinaï plongent dans l'eau la plus claire de l'hémisphère nord — récifs, soirées dans le désert et oisiveté assumée.",
    durationLabel: "5 jours / 4 nuits",
    startPoint: "Charm el-Cheikh (aéroport ou hôtel)",
    summary: "La mer Rouge avec intention — une journée bateau privée à Ras Mohammed, une soirée sous les étoiles dans le désert du Sinaï, et du temps laissé volontairement vide.",
    overview: "Charm el-Cheikh occupe la pointe de la péninsule du Sinaï, là où des montagnes désertiques tombent dans une eau si claire que les récifs se lisent depuis la surface comme des cartes. C'est la grande respiration de l'Égypte — et c'est exactement ainsi que cet itinéraire la traite. Deux journées sont organisées en privé : une sortie en bateau dans le parc national de Ras Mohammed, dont les murs de corail, au point de rencontre des golfes de Suez et d'Aqaba, comptent parmi les plus beaux sites de snorkeling du monde, et une soirée dans le désert du Sinaï, thé bédouin, dîner au charbon et ciel étoilé parmi les plus noirs accessibles depuis un resort. Le reste n'est pas programmé, par principe. Fonctionne en escapade autonome ou en dernier chapitre d'un voyage plus long — Louxor est à moins d'une heure de vol.",
    itinerary: [
      { title: "Arrivée en mer Rouge", items: [
        "Accueil privé à l'aéroport et installation au resort",
        "Présentation autour d'un verre — les journées se calent sur vos envies",
      ]},
      { title: "Ras Mohammed en bateau", items: [
        "Journée entière en bateau privé dans le parc national",
        "Deux ou trois arrêts snorkeling au-dessus des murs et jardins de corail",
        "Déjeuner à bord",
      ]},
      { title: "Journée libre", items: [
        "Une journée libre — baptême de plongée, spa ou simplement la plage",
        "Promenade du soir dans le Vieux Marché de Charm et à la mosquée Al-Sahaba",
      ]},
      { title: "Soirée dans le désert du Sinaï", items: [
        "Départ en 4x4 en fin d'après-midi vers l'intérieur du Sinaï",
        "Thé bédouin, dîner au charbon et observation des étoiles loin des lumières",
      ]},
      { title: "Départ", items: ["Matinée libre et transfert privé à l'aéroport"] },
    ],
    comfort: { sleep: "Les quatre nuits dans un resort de mer Rouge" },
    faqs: [
      { q: "Quand la mer est-elle assez chaude ?", a: "Pratiquement toujours. L'eau va de 21 °C en hiver à 28 °C en fin d'été ; le snorkeling se pratique toute l'année, et même janvier reste confortable en shorty, que le bateau fournit." },
      { q: "Faut-il savoir plonger ?", a: "Non. Les récifs de Ras Mohammed remontent assez près de la surface pour que le snorkeling montre l'essentiel du spectacle. Si vous voulez essayer la plongée, nous organisons un baptême encadré au récif maison de votre resort." },
      { q: "Est-ce compatible avec les circuits du Nil ?", a: "Parfaitement — c'est ainsi que la plupart des voyageurs l'utilisent. Louxor–Charm est un vol court, et quatre jours de mer Rouge après une semaine de temples sont la meilleure façon d'ordonner l'Égypte." },
    ],
  },

  {
    slug: "tour-red-sea-diving-4day",
    localeSlug: "plongee-mer-rouge-4-jours",
    metaTitle: "Plongée en mer Rouge, 4 jours depuis Charm | Kemet",
    metaDescription:
      "Six plongées guidées sur les deux meilleurs sites du Sinaï — Ras Mohammed et le détroit de Tiran — avec un centre PADI que nous avons vérifié.",
    keywords: "plongee mer rouge, plongee charm el cheikh, ras mohammed plongee, detroit de tiran, sejour plongee egypte padi",
    crumb: "Plongée, 4 jours",
    title: "Plonger en mer Rouge",
    subtitle: "Quatre jours construits autour du temps de fond — les murs de Ras Mohammed, les récifs en dérive du détroit de Tiran et des bateaux en petit comité qui partent tôt.",
    durationLabel: "4 jours / 3 nuits",
    startPoint: "Charm el-Cheikh (aéroport ou hôtel)",
    summary: "Six plongées guidées en bateau sur les deux meilleurs ensembles de sites du Sinaï — Ras Mohammed et Tiran — avec un centre PADI vérifié, plus une plongée de contrôle depuis le bord.",
    overview: "Le nord de la mer Rouge est l'une des régions de plongée de référence au monde : plus de 20 mètres de visibilité comme norme, une eau jamais vraiment froide, et des murs récifaux qui descendent de la surface jusqu'au bleu. Ce programme concentre tout cela en quatre jours sans rogner sur la sécurité ni sur les intervalles de surface. Après une plongée de contrôle au récif maison de votre resort, deux journées bateau couvrent les deux ensembles incontournables — le parc national de Ras Mohammed, où Shark Reef et Yolanda Reef forment le site double le plus célèbre du Sinaï, et les quatre récifs nommés du détroit de Tiran, balayés par de douces dérives et fréquentés par les pélagiques. La plongée se fait avec un centre PADI agréé avec lequel nous travaillons en continu ; les groupes restent réduits, et les accompagnants non plongeurs sont les bienvenus à bord avec un masque et un tuba.",
    itinerary: [
      { title: "Arrivée & plongée de contrôle", items: [
        "Accueil privé à l'aéroport et installation au resort",
        "Réglage de l'équipement et plongée de contrôle au récif maison l'après-midi",
      ]},
      { title: "Journée bateau à Ras Mohammed", items: [
        "Deux plongées guidées — Shark et Yolanda Reef si les conditions le permettent",
        "Déjeuner à bord et longs intervalles de surface dans les mouillages du parc",
      ]},
      { title: "Journée bateau au détroit de Tiran", items: [
        "Deux plongées dérivantes guidées sur la chaîne de récifs de Tiran",
        "Troisième plongée en option l'après-midi, ou retour anticipé pour le spa",
      ]},
      { title: "Matinée sans plongée & départ", items: [
        "Une matinée en surface — l'intervalle de 18 à 24 heures avant vol est intégré",
        "Transfert privé à l'aéroport",
      ]},
    ],
    comfort: { sleep: "Les trois nuits dans un resort de mer Rouge" },
    faqs: [
      { q: "Quel niveau faut-il ?", a: "Le niveau Open Water couvre tout le programme ; les sites se plongent sur des profils de 18 à 30 mètres. Si vous n'êtes pas certifié, dites-le-nous — ces mêmes quatre jours se convertissent proprement en formation Open Water dans le même centre." },
      { q: "Pourquoi pas de plongée le dernier matin ?", a: "Prendre l'avion trop tôt après une plongée expose à un accident de décompression. L'itinéraire respecte l'intervalle standard pour que votre dernière journée bateau n'ait jamais à être écourtée." },
      { q: "Que verra-t-on réellement ?", a: "Des murs de coraux mous denses, des nuages d'anthias, des napoléons, des tortues et des requins de récif à Ras Mohammed ; des raies-aigles et des bancs de barracudas portés par les courants de Tiran. Le nord de la mer Rouge récompense tous les niveaux." },
    ],
  },

  {
    slug: "tour-giza-sphinx",
    localeSlug: "pyramides-de-gizeh-demi-journee",
    metaTitle: "Pyramides de Gizeh & Sphinx, demi-journée privée | Kemet",
    metaDescription:
      "Une demi-journée concentrée entre les trois grandes pyramides et le Sphinx, avec le point de vue panoramique classique — en privé.",
    keywords: "pyramides de gizeh visite, sphinx visite, gizeh demi journee, excursion pyramides le caire, pyramides guide prive",
    crumb: "Pyramides de Gizeh",
    title: "Pyramides de Gizeh & Sphinx",
    subtitle: "Une demi-journée concentrée parmi les trois grandes pyramides et le Sphinx, avec le point de vue panoramique classique.",
    durationLabel: "Demi-journée (environ 5 heures)",
    startPoint: "Hôtel au Caire ou à Gizeh",
    summary: "La grande pyramide, celles de Khéphren et de Mykérinos, le point de vue panoramique et le temple de la Vallée avec le grand Sphinx — Gizeh en une matinée.",
    overview: "Pour les voyageurs pressés ou disposant d'une fenêtre le jour de l'arrivée, cette demi-journée livre le plateau de Gizeh sans remplissage. Vous verrez la grande pyramide de Khéops, les pyramides voisines de Khéphren et de Mykérinos, le point de vue panoramique où les trois s'alignent, et le temple de la Vallée qui mène au grand Sphinx. Un guide privé rend cette courte visite précieuse, et elle s'associe bien à un après-midi libre ou au Grand Musée égyptien.",
    itinerary: [
      { title: "La grande pyramide de Khéops", text: "Départ au pied de la grande pyramide, dernière merveille debout du monde antique, pendant que votre guide explique comment et pourquoi elle fut bâtie." },
      { title: "Khéphren & Mykérinos", text: "Puis les pyramides de Khéphren — encore coiffée de son revêtement d'origine au sommet — et la plus petite de Mykérinos." },
      { title: "Le point de vue panoramique", text: "Halte au panorama du désert où les trois pyramides s'alignent, la photographie classique de Gizeh, avec promenades à dos de chameau ou à cheval en option à proximité." },
      { title: "Temple de la Vallée & le grand Sphinx", text: "Pour finir, le temple de la Vallée en granit et le grand Sphinx, gardien colossal taillé dans la roche même du plateau." },
    ],
    faqs: [
      { q: "Pourquoi la demi-journée plutôt que la journée ?", a: "Elle est idéale un jour d'arrivée ou de départ, ou quand vous voulez les pyramides sans musée. Pour y ajouter le Grand Musée égyptien, choisissez notre journée Gizeh & Grand Musée." },
      { q: "Peut-on monter à dos de chameau ?", a: "Oui — les promenades à dos de chameau ou à cheval sont proposées en option sur le plateau. Votre guide vous aidera à convenir d'un prix juste sur place." },
      { q: "Peut-on entrer dans une pyramide ?", a: "L'entrée à l'intérieur est proposée en option pour la grande pyramide ou pour l'une des plus petites, dans la limite du quota de billets du jour." },
    ],
  },

  {
    slug: "tour-giza-museum",
    localeSlug: "gizeh-et-grand-musee-egyptien",
    metaTitle: "Gizeh & le Grand Musée égyptien, journée privée | Kemet",
    metaDescription:
      "Pyramides et Sphinx le matin, le Grand Musée égyptien l'après-midi — la vieille merveille et le nouveau musée en une journée, en privé.",
    keywords: "grand musee egyptien visite, gizeh journee, pyramides et musee, gem le caire, toutankhamon exposition visite",
    crumb: "Gizeh & GEM",
    title: "Gizeh & le Grand Musée",
    subtitle: "Les pyramides et le Sphinx le matin, le Grand Musée égyptien l'après-midi — la vieille merveille et la nouvelle, en une journée.",
    durationLabel: "Journée entière (environ 8 heures)",
    startPoint: "Hôtel au Caire ou à Gizeh",
    summary: "La grande pyramide, le panorama des trois pyramides, le temple de la Vallée et le Sphinx, puis l'immense Grand Musée égyptien juste à côté.",
    overview: "Cette journée place la plus ancienne merveille du monde à côté du plus récent musée bâti pour en abriter les trésors. La matinée appartient au plateau de Gizeh — les pyramides de Khéops, Khéphren et Mykérinos, le point de vue panoramique, et le grand Sphinx gardant son temple de la Vallée. L'après-midi passe au Grand Musée égyptien, le plus vaste musée archéologique du monde, dont les galeries et le grand escalier rassemblent enfin la collection de Toutânkhamon au complet. Guide et transferts privés tout du long.",
    itinerary: [
      { title: "La grande pyramide de Khéops", text: "Tenez-vous au pied de la seule merveille subsistante du monde antique, la pyramide de Khéops, et apprenez comment elle fut élevée. L'entrée dans les chambres intérieures est proposée en option." },
      { title: "Khéphren, Mykérinos & le panorama", text: "Puis les pyramides de Khéphren et de Mykérinos et le point de vue où les trois s'alignent à travers le désert — l'image classique de Gizeh." },
      { title: "Temple de la Vallée & le grand Sphinx", text: "Le temple de la Vallée de Khéphren, bâti en granit, jusqu'au pied du grand Sphinx, gardien à corps de lion taillé dans la roche vive du plateau." },
      { title: "Grand Musée égyptien (GEM)", text: "Traversée vers le Grand Musée égyptien voisin du plateau — son grand escalier de statues et les galeries Toutânkhamon au complet, la collection phare de l'Égypte moderne." },
    ],
    faqs: [
      { q: "Peut-on entrer dans la grande pyramide ?", a: "Oui, en option. Un nombre limité de billets est vendu chaque jour pour les chambres intérieures ; nous pouvons en obtenir un sur demande, selon disponibilité." },
      { q: "Le Grand Musée égyptien est-il entièrement ouvert ?", a: "Les galeries principales, le grand escalier et la collection de Toutânkhamon sont ouverts au public. Votre guide se concentre sur les pièces essentielles pour que l'après-midi ne soit jamais précipité." },
      { q: "Faut-il beaucoup marcher ?", a: "Modérément, sur le plateau puis dans les galeries du musée. Nous avançons à votre rythme, avec des pauses à l'ombre." },
    ],
  },

  {
    slug: "tour-saqqara",
    localeSlug: "saqqarah-memphis-dahchour",
    metaTitle: "Saqqarah, Memphis & Dahchour — journée privée | Kemet",
    metaDescription:
      "Le berceau de la pyramide : la pyramide à degrés de Djéser, le musée à ciel ouvert de Memphis et les pyramides rhomboïdale et rouge de Dahchour.",
    keywords: "saqqarah excursion, pyramide a degres djeser, dahchour pyramide rouge, memphis egypte, excursion journee le caire saqqarah",
    crumb: "Saqqarah, Memphis & Dahchour",
    title: "Saqqarah, Memphis & Dahchour",
    subtitle: "Le berceau de la pyramide — de la première pyramide à degrés de Djéser aux grands tombeaux géométriques de Dahchour.",
    durationLabel: "Journée entière (environ 8 heures)",
    startPoint: "Hôtel au Caire ou à Gizeh",
    summary: "La pyramide à degrés de Djéser, les ruines à ciel ouvert de Memphis, et les pyramides rhomboïdale et rouge de Dahchour — l'histoire de l'invention de la pyramide.",
    overview: "Avant Gizeh, il y eut Saqqarah. Cette journée suit l'invention de la pyramide sur trois sites au sud du Caire, souvent plus calmes que Gizeh et d'autant plus évocateurs. Vous commencez à la pyramide à degrés de Djéser, le plus ancien édifice monumental en pierre au monde, parcourez les vestiges à ciel ouvert de Memphis, la première capitale, et terminez à Dahchour, où les pyramides rhomboïdale et rouge montrent le saut d'ingénierie vers la véritable forme pyramidale. Privé d'un bout à l'autre.",
    itinerary: [
      { title: "La pyramide à degrés de Djéser", text: "Le cœur de Saqqarah — la pyramide à degrés conçue par Imhotep pour le roi Djéser, le plus ancien grand monument de pierre au monde, dans son vaste enclos funéraire." },
      { title: "Memphis & le colosse de Ramsès II", text: "Le musée à ciel ouvert de Memphis, capitale antique de l'Égypte unifiée, qui abrite un colosse couché de Ramsès II et un sphinx d'albâtre finement sculpté." },
      { title: "La pyramide rhomboïdale de Dahchour", text: "À Dahchour, la pyramide rhomboïdale de Snéfrou, dont l'angle changeant garde la trace du moment où les bâtisseurs ont corrigé leur projet en cours de chantier." },
      { title: "La pyramide rouge", text: "Tout près, la pyramide rouge, première véritable pyramide réussie, dans laquelle on peut descendre jusqu'aux chambres à encorbellement." },
    ],
    faqs: [
      { q: "Comment Saqqarah se compare-t-elle à Gizeh ?", a: "Saqqarah est plus ancienne et généralement plus calme. Elle raconte comment la pyramide s'est développée, de la forme à degrés de Djéser aux vraies pyramides de Dahchour — un complément parfait à une journée à Gizeh." },
      { q: "Peut-on entrer dans les pyramides de Dahchour ?", a: "Oui — la pyramide rouge est en général accessible, par un couloir où l'on descend courbé jusqu'aux chambres funéraires. Votre guide vous conseillera sur place." },
      { q: "Est-ce une bonne première journée au Caire ?", a: "Excellente — moins de monde et un fil narratif clair qui enrichit la visite ultérieure de Gizeh." },
    ],
  },

  {
    slug: "tour-abu-simbel",
    localeSlug: "abou-simbel-depuis-assouan",
    metaTitle: "Abou Simbel depuis Assouan — excursion privée | Kemet",
    metaDescription:
      "Les temples de montagne de Ramsès II au-dessus du lac Nasser : route du désert à l'aube, deux sanctuaires rupestres, retour à Assouan pour le déjeuner.",
    keywords: "abou simbel depuis assouan, excursion abou simbel, temple ramses abou simbel, temple nefertari, fete du soleil abou simbel",
    crumb: "Abou Simbel",
    title: "Abou Simbel, excursion privée",
    subtitle: "Les temples de montagne de Ramsès II au-dessus du lac Nasser — une route du désert à l'aube, deux sanctuaires taillés dans le roc, et retour à Assouan pour le déjeuner.",
    durationLabel: "Journée entière (environ 8 heures, depuis Assouan)",
    startPoint: "Hôtel ou bateau de croisière à Assouan",
    summary: "Les temples rupestres colossaux de Ramsès II — taillés dans un flanc de montagne nubien, déplacés bloc par bloc au-dessus du lac montant, et toujours alignés sur le soleil.",
    overview: "Abou Simbel est l'incontournable du grand sud : deux temples creusés directement dans une montagne de grès par Ramsès II vers 1264 av. J.-C., précédés de quatre colosses assis de vingt mètres. Quand le lac Nasser est monté derrière le haut barrage dans les années 1960, le sauvetage de l'UNESCO a scié l'ensemble en un millier de blocs et l'a reconstruit soixante-cinq mètres plus haut — un exploit d'ingénierie presque aussi remarquable que l'original. Cette excursion privée se fait de façon classique : départ d'Assouan avant l'aube à travers le désert ouvert, arrivée quand la première lumière touche les colosses, du temps sans hâte dans le grand temple et dans le sanctuaire plus petit de Néfertari avec votre égyptologue, et retour à Assouan en début d'après-midi. Deux fois par an, les 22 février et 22 octobre, le soleil levant atteint le sanctuaire le plus intérieur — demandez-nous si vous souhaitez caler vos dates dessus.",
    itinerary: [
      { title: "La route du désert à l'aube", text: "Départ d'Assouan vers 4 heures en véhicule privé, 280 kilomètres de désert ouvert tandis que le ciel s'éclaircit — un trajet qui a sa propre beauté austère, café fourni." },
      { title: "Le grand temple de Ramsès II", text: "D'abord devant les quatre colosses assis, puis à l'intérieur par des salles à piliers osiriaques jusqu'au sanctuaire où siègent quatre dieux — alignés pour que le soleil ne les atteigne que deux matins par an." },
      { title: "Le temple de Néfertari", text: "Le temple plus petit que Ramsès dédia à sa reine et à la déesse Hathor — l'un des très rares temples égyptiens où les statues d'une reine égalent en taille celles du roi." },
      { title: "Retour à Assouan", text: "Retour à travers le désert pour atteindre Assouan en début d'après-midi, à temps pour le déjeuner, le départ de votre bateau ou une felouque à l'heure dorée." },
    ],
    faqs: [
      { q: "Pourquoi partir à 4 heures ?", a: "Trois raisons : la route du désert se parcourt par créneaux organisés, les temples sont au plus vide et au plus frais à l'ouverture, et le retour en début d'après-midi préserve votre journée à Assouan — ou l'horaire de votre bateau." },
      { q: "Peut-on y aller en avion ?", a: "Oui — EgyptAir assure un saut de 45 minutes sur un programme limité, ce qui ramène l'aller-retour à environ cinq heures. Les places partent tôt ; dites-le à la réservation et nous chiffrerons les deux options." },
      { q: "Qu'est-ce que la fête du Soleil ?", a: "Les 22 février et 22 octobre, le soleil levant pénètre de 60 mètres dans le grand temple et éclaire les dieux assis du sanctuaire — l'alignement que les architectes de Ramsès ont intégré il y a trois mille ans. Y assister demande des mois de préparation ; nous l'organisons sur demande." },
    ],
  },

  {
    slug: "tour-fayoum",
    localeSlug: "oasis-du-fayoum",
    metaTitle: "Oasis du Fayoum — excursion d'une journée privée | Kemet",
    metaDescription:
      "Une journée entière dans l'oasis verte au sud-ouest du Caire : lacs, cascades du désert, baleines fossiles et un village de potiers.",
    keywords: "oasis fayoum excursion, wadi el rayan, vallee des baleines wadi al hitan, excursion nature le caire, lac qaroun",
    crumb: "Oasis du Fayoum",
    title: "L'oasis du Fayoum",
    subtitle: "Une journée entière dans l'oasis verte au sud-ouest du Caire — lacs, cascades du désert, baleines fossiles et un village de potiers.",
    durationLabel: "Journée entière (environ 10 heures)",
    startPoint: "Hôtel au Caire ou à Gizeh",
    summary: "Le lac Qaroun, les cascades et les dunes du Wadi el-Rayan, les baleines fossiles du Wadi al-Hitan et les potiers du village de Tunis — l'autre Égypte, verte et sauvage.",
    overview: "À une heure et demie au sud-ouest du Caire, la dépression du Fayoum échange les monuments contre le paysage : un grand lac salé, des cascades d'eau douce en plein désert, une vallée classée à l'UNESCO pleine de baleines fossilisées, et un village de potiers à flanc de colline. Cette journée complète est un changement de registre total après les temples — horizons larges, oiseaux, dunes et un déjeuner de poisson au bord du lac. Le voyage est privé, avec votre guide et votre chauffeur pour toute la journée.",
    itinerary: [
      { title: "Le lac Qaroun", text: "Début sur la rive du lac Qaroun, l'antique lac Moeris, où se rassemblent les oiseaux migrateurs et où de vieilles barques de pêche bordent l'eau. Un premier contact avec l'oasis avant d'aller plus loin dans le désert." },
      { title: "Les cascades du Wadi el-Rayan", text: "Les plus grandes cascades d'Égypte, là où les deux lacs du Rayan débordent entre les dunes. Le temps de longer la rive et de prendre la mesure d'un paysage qui ne ressemble en rien à la vallée du Nil." },
      { title: "La vallée des Baleines (Wadi al-Hitan)", text: "Un site du patrimoine mondial de l'UNESCO qui conserve des squelettes de baleines primitives vieux de 40 millions d'années, préservés là où s'étendait une mer ancienne. Un musée à ciel ouvert du temps profond, au milieu des sables." },
      { title: "Le Magic Lake & le mont Mudawara", text: "Le fameux Magic Lake, alimenté par des sources minérales et changeant de couleur avec la lumière, au pied des dunes de Mudawara — un lieu prisé pour le sandboard et pour un moment d'immobilité." },
      { title: "Le village de potiers de Tunis & déjeuner au lac", text: "Pour finir, Tunis, le village à flanc de colline réputé pour ses potiers et ses ateliers, puis un déjeuner de poisson tranquille au bord du lac avant le retour au Caire." },
    ],
    faqs: [
      { q: "Le Fayoum convient-il aux familles ?", a: "Oui — le mélange de lacs, de dunes et de fossiles plaît à tous les âges. Le terrain est facile, avec de courtes marches plutôt que de longues randonnées." },
      { q: "Que faut-il porter et emporter ?", a: "Des chaussures confortables, une protection solaire et une petite veste pour la brise du lac. Les sections désertiques peuvent être poussiéreuses : des lunettes de soleil aident." },
      { q: "À quelle distance du Caire ?", a: "Environ 90 minutes à deux heures par trajet en véhicule privé, selon votre hôtel et la circulation à la sortie de la ville." },
    ],
  },

  {
    slug: "tour-religious-citadel",
    localeSlug: "le-caire-religieux-et-la-citadelle",
    metaTitle: "Le Caire religieux & la Citadelle — journée privée | Kemet",
    metaDescription:
      "Les confessions du Caire en une journée : églises coptes, une ancienne synagogue et la grande Citadelle couronnée de sa mosquée.",
    keywords: "caire copte visite, eglise suspendue, synagogue ben ezra, citadelle saladin, mosquee mehemet ali visite",
    crumb: "Le Caire religieux",
    title: "Le Caire religieux & la Citadelle",
    subtitle: "Les confessions du Caire en une journée — églises coptes, une ancienne synagogue, et la grande Citadelle couronnée d'une mosquée.",
    durationLabel: "Journée entière (environ 8 heures)",
    startPoint: "Hôtel au Caire ou à Gizeh",
    summary: "L'Église suspendue, la synagogue Ben Ezra et Abou Serga dans le Vieux Caire, puis la citadelle de Saladin et la mosquée d'albâtre de Méhémet Ali.",
    overview: "Le patrimoine religieux du Caire superpose les histoires copte, juive et islamique sur quelques kilomètres carrés. Cette journée va des ruelles du Vieux Caire — l'Église suspendue, l'ancienne synagogue Ben Ezra et l'église d'Abou Serga — jusqu'à la citadelle médiévale de Saladin, couronnée par la mosquée d'albâtre de Méhémet Ali et ses vues immenses sur la ville. Une journée réfléchie et évocatrice, menée par votre égyptologue.",
    itinerary: [
      { title: "L'Église suspendue", text: "Début dans le Caire copte à l'Église suspendue, posée au-dessus d'une tour de porte romaine, l'une des plus anciennes d'Égypte, avec ses fines claustras de bois et ses icônes." },
      { title: "Synagogue Ben Ezra & Abou Serga", text: "Par les ruelles étroites jusqu'à la synagogue Ben Ezra et à l'église d'Abou Serga, dont la tradition dit qu'elle marque l'endroit où la Sainte Famille trouva refuge en Égypte." },
      { title: "La citadelle de Saladin", text: "Montée vers la citadelle de Saladin, forteresse médiévale qui commanda Le Caire pendant des siècles, avec des panoramas qui portent jusqu'aux pyramides par temps clair." },
      { title: "La mosquée de Méhémet Ali", text: "Pour finir, l'intérieur de la mosquée d'albâtre de Méhémet Ali, monument de style ottoman dont les coupoles dessinent la silhouette du Caire." },
    ],
    faqs: [
      { q: "Y a-t-il une tenue à respecter ?", a: "Oui — une tenue couvrante est exigée sur les sites religieux : épaules et genoux couverts, chaussures retirées à la mosquée. Emportez un foulard ; nous vous guiderons sur place." },
      { q: "Les sites sont-ils proches les uns des autres ?", a: "Ceux du Caire copte se font à pied ; la Citadelle est à un court trajet privé, si bien que la journée s'enchaîne confortablement." },
      { q: "Les sites seront-ils ouverts ?", a: "Nous organisons la journée autour des heures de prière et des éventuelles fermetures pour que la visite se déroule sans heurt. La photographie est généralement autorisée, avec quelques restrictions à l'intérieur." },
    ],
  },

  {
    slug: "tour-cairo-museums",
    localeSlug: "musees-du-caire",
    metaTitle: "Les musées du Caire — journée avec les momies royales | Kemet",
    metaDescription:
      "Deux grandes collections en une journée : le Musée égyptien historique de Tahrir et le NMEC avec sa salle des momies royales.",
    keywords: "musee egyptien le caire, nmec momies royales, musees du caire visite, salle des momies, le caire musee guide",
    crumb: "Les musées du Caire",
    title: "Les musées du Caire",
    subtitle: "Deux grandes collections en une journée — le Musée égyptien historique et le Musée national de la civilisation égyptienne, avec les momies royales.",
    durationLabel: "Journée entière (environ 7 heures)",
    startPoint: "Hôtel au Caire ou à Gizeh",
    summary: "Les trésors du Musée égyptien de Tahrir, puis le Musée national de la civilisation égyptienne et sa salle des momies royales.",
    overview: "Une journée pour ceux qui aiment les objets eux-mêmes. Vous commencez au vénérable Musée égyptien de Tahrir, dont les salles centenaires abritent la plus forte concentration de trésors pharaoniques au monde, puis passez au moderne Musée national de la civilisation égyptienne (NMEC), où la grande salle des momies royales présente les rois et les reines du Nouvel Empire dans des galeries silencieuses et climatisées. Une journée de connaisseur, racontée par votre égyptologue.",
    itinerary: [
      { title: "Musée égyptien, Tahrir", text: "Le grand musée ancien de la place Tahrir — statues, sarcophages, papyrus et l'or du Nouvel Empire, parcourus pièce maîtresse par pièce maîtresse avec votre guide." },
      { title: "Musée national de la civilisation égyptienne", text: "Traversée de la ville jusqu'au NMEC à Fustat, musée moderne qui retrace l'Égypte de la préhistoire à nos jours en un seul grand récit." },
      { title: "La salle des momies royales", text: "Descente dans la salle des momies royales, à la lumière tamisée, où reposent dignement les corps préservés de pharaons dont Ramsès II et Hatchepsout." },
    ],
    faqs: [
      { q: "La salle des momies royales est-elle comprise ?", a: "Oui — l'entrée à la salle des momies royales au sein du NMEC est comprise. C'est un espace calme et respectueux, où la photographie n'est pas autorisée." },
      { q: "En quoi les deux musées diffèrent-ils ?", a: "Le Musée égyptien est dense, historique et chargé de trésors ; le NMEC est moderne et narratif, avec les momies pour point d'orgue. Ensemble, ils donnent une image complète." },
      { q: "N'est-ce pas trop pour une journée ?", a: "Pas avec un guide qui sélectionne les pièces maîtresses. Nous nous concentrons sur l'essentiel dans chacun, avec une pause entre les deux." },
    ],
  },

  {
    slug: "tour-alexandria",
    localeSlug: "alexandrie-excursion-journee",
    metaTitle: "Alexandrie — excursion d'une journée depuis Le Caire | Kemet",
    metaDescription:
      "Une journée entière sur la Méditerranée : catacombes, colonne romaine, citadelle cernée par la mer et la grande bibliothèque moderne.",
    keywords: "alexandrie excursion journee, alexandrie depuis le caire, catacombes kom el chogafa, citadelle qaitbay, bibliotheca alexandrina",
    crumb: "Alexandrie, à la journée",
    title: "Alexandrie en une journée",
    subtitle: "Une journée entière sur la Méditerranée — catacombes, une colonne romaine, une citadelle cernée par la mer et la grande bibliothèque moderne.",
    durationLabel: "Journée entière (environ 11 heures)",
    startPoint: "Hôtel au Caire ou à Gizeh",
    summary: "Les catacombes de Kom el-Chogafa, la colonne de Pompée, la citadelle de Qaitbay sur l'emplacement du Phare et la Bibliotheca Alexandrina, avec un déjeuner de poisson.",
    overview: "La ville d'Alexandre porte son passé gréco-romain avec légèreté le long d'une corniche méditerranéenne incurvée. Cette journée complète prend les catacombes souterraines de Kom el-Chogafa, la colonne de Pompée qui se dresse au-dessus des ruines du Sérapéum, la citadelle de Qaitbay bâtie sur les fondations du légendaire phare, et l'élan de la Bibliotheca Alexandrina moderne — héritière de l'ancienne bibliothèque. Un déjeuner de poisson en front de mer va de soi. Guide et transferts privés depuis Le Caire.",
    itinerary: [
      { title: "Catacombes de Kom el-Chogafa", text: "Descente dans les catacombes de Kom el-Chogafa, nécropole romaine sur plusieurs niveaux où styles égyptien et classique se mêlent dans la pierre sculptée — l'une des curiosités les plus étranges de l'Antiquité." },
      { title: "La colonne de Pompée", text: "Visite de la colonne de Pompée, grande colonne triomphale romaine qui s'élève des ruines du Sérapéum, flanquée de sphinx de granit." },
      { title: "La citadelle de Qaitbay", text: "Promenade sur les remparts maritimes de la citadelle de Qaitbay, élevée à l'endroit exact où se dressait le phare d'Alexandrie, merveille du monde antique." },
      { title: "Bibliotheca Alexandrina & déjeuner de poisson", text: "Pour finir, la spectaculaire Bibliotheca Alexandrina moderne, la bibliothèque d'Alexandrie renaissante, après un déjeuner de poisson tranquille face à la Méditerranée." },
    ],
    faqs: [
      { q: "Combien de temps dure la route depuis Le Caire ?", a: "Environ deux heures et demie à trois heures par trajet sur la route du désert — d'où une journée longue mais généreuse." },
      { q: "Peut-on y aller en train ?", a: "Oui — pour ceux qui le préfèrent, nous organisons le trajet en train et vous accueillons à Alexandrie avec votre guide et votre véhicule privés. Il suffit de demander." },
      { q: "La Bibliotheca Alexandrina vaut-elle la visite ?", a: "Tout à fait — son architecture seule est saisissante, et le bâtiment se veut un écho délibéré à l'ancienne bibliothèque qui fit la célébrité de la ville." },
    ],
  },

  {
    slug: "tour-cairo-food",
    localeSlug: "soiree-gastronomique-le-caire",
    metaTitle: "Soirée gastronomique au Caire — street food privée | Kemet",
    metaDescription:
      "Une soirée dans les saveurs du Caire : koshari, ful et ta'meya, hawawshi et pigeon grillé, kunafa et basbousa, et pour finir un ahwa.",
    keywords: "street food le caire, koshari degustation, tour gastronomique le caire, cuisine egyptienne gouter, soiree le caire",
    crumb: "Soirée gastronomique",
    title: "Le Caire, vraiment goûté",
    subtitle: "Une soirée à pied dans les saveurs du Caire — koshari, classiques de la rue, pigeon grillé et pâtisseries gorgées de sirop.",
    durationLabel: "Soirée (environ 4 heures)",
    startPoint: "Hôtel au Caire",
    summary: "Une dégustation guidée en soirée des plats préférés du Caire — koshari, ful et ta'meya, hawawshi et pigeon grillé, kunafa et basbousa, pour finir dans un ahwa traditionnel.",
    overview: "La capitale égyptienne se découvre, côté table, à pied et à la nuit tombée. Cette soirée guidée vous mène à travers les plats qui font le quotidien du Caire — la symphonie de féculents qu'est le koshari, le ful et la ta'meya qu'on mange à toute heure, le hawawshi farci de viande et le pigeon grillé, puis la conclusion sucrée de la kunafa et de la basbousa. Vous terminez là où terminent les Cairotes : devant un thé à la menthe et une chicha dans un ahwa traditionnel. Un contrepoint détendu et gourmand aux monuments.",
    itinerary: [
      { title: "Le koshari", text: "On commence par le plat national — le koshari, superposition réconfortante de riz, lentilles, pâtes et pois chiches sous des oignons frits croustillants et une sauce tomate relevée." },
      { title: "Ful & ta'meya", text: "Goûtez le ful medames, les fèves mijotées qu'on mange du matin au soir, avec la ta'meya, la version égyptienne du falafel à base de fèves, frite à la commande." },
      { title: "Hawawshi & pigeon grillé", text: "On passe au cœur salé de la soirée — le hawawshi, viande hachée épicée cuite dans un pain croustillant, et le hamam mahchi, pigeon grillé farci au riz parfumé." },
      { title: "Kunafa & basbousa", text: "Puis le dessert : la kunafa tiède et ses cheveux de pâte sur un fromage doux, et les carrés de basbousa, gâteau de semoule imbibé de sirop." },
      { title: "Un ahwa traditionnel", text: "On finit dans un ahwa d'une rue adjacente, autour d'un thé à la menthe, d'un café turc et du murmure de la ville — la bonne façon de terminer une soirée cairote." },
    ],
    faqs: [
      { q: "La nourriture est-elle sans risque ?", a: "Oui — nous choisissons des établissements fréquentés et éprouvés, à forte rotation, et votre guide se charge de commander. L'eau en bouteille est fournie tout du long." },
      { q: "Les régimes particuliers sont-ils pris en compte ?", a: "Les végétariens sont bien servis — koshari, ful, ta'meya et les desserts sont tous sans viande. Signalez-nous les allergies à l'avance et nous adapterons le parcours." },
      { q: "Vais-je être trop repu ?", a: "Les portions sont des formats dégustation réparties sur la marche : vous goûtez largement sans excès à aucune étape. Venez avec de l'appétit, sans inquiétude." },
    ],
  },
];
