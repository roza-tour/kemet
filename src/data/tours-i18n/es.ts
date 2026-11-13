// ---------------------------------------------------------------------------
// Los viajes en español.
//
// Escrito para quien lee en español a ambos lados del Atlántico: «usted»,
// sin «vosotros», y las palabras que se entienden en Madrid y en Ciudad de
// México (visa, recogida, traslados). Las líneas repetidas viven en
// phrasebook.ts.
// ---------------------------------------------------------------------------
import type { TourText } from "./types";

export const es: TourText[] = [
  // ===== Cairo Authentic Food ===========================================
  {
    slug: "tour-cairo-food",
    localeSlug: "noche-gastronomica-en-el-cairo",
    metaTitle: "Noche gastronómica en El Cairo, en privado | Kemet",
    metaDescription: "Una noche por los sabores de El Cairo: koshari, ful y ta'meya, hawawshi y pichón, kunafa y basbousa, y al final un ahwa tradicional.",
    keywords: "tour gastronómico el cairo, comida callejera el cairo, koshari, comida egipcia, tour nocturno el cairo",
    crumb: "Noche gastronómica",
    title: "El Cairo, con todos sus sabores",
    subtitle: "Una noche a pie por los sabores de El Cairo: koshari, clásicos callejeros, pichón a la parrilla y dulces bañados en almíbar.",
    durationLabel: "Noche (unas 4 horas)",
    startPoint: "Hotel en El Cairo",
    summary: "Una degustación guiada por la noche de los platos más queridos de El Cairo: koshari, ful y ta'meya, hawawshi y pichón a la parrilla, kunafa y basbousa, para terminar en un ahwa tradicional.",
    overview: "La capital de Egipto se descubre mejor a pie y después del atardecer. Esta noche guiada le lleva por los platos que definen el día a día de El Cairo: el koshari, una sinfonía de carbohidratos; el ful y la ta'meya, que se comen a cualquier hora; el hawawshi relleno de carne y el pichón a la parrilla; y, como final dulce, la kunafa y la basbousa. Se termina donde terminan los cairotas: con té de menta y shisha en un ahwa, el café tradicional. Un contrapunto relajado y sabroso a los monumentos.",
    itinerary: [
      {
        title: "Koshari",
        text: "Se empieza con el plato nacional de Egipto: el koshari, una reconfortante combinación de arroz, lentejas, pasta y garbanzos bajo cebolla frita crujiente y una salsa de tomate ácida.",
        photos: [{ alt: "Koshari: la salsa de tomate vertida sobre la pasta, las lentejas, los garbanzos y la cebolla frita", label: "Koshari" }],
      },
      {
        title: "Ful y ta'meya",
        text: "Pruebe el ful medames, las habas cocidas a fuego lento que se comen de la mañana a la noche, junto a la ta'meya, la versión egipcia del falafel hecha con habas, frita al momento.",
        photos: [{ alt: "Un plato hondo de ful medames con tomate y hierbas, limón y un vaso de té", label: "Ful medames" }, { alt: "Ta'meya con costra de sésamo en un plato y, detrás, bolsas de la masa verde de habas y hierbas", label: "Ta'meya" }],
      },
      {
        title: "Hawawshi y pichón a la parrilla",
        text: "Llega el corazón salado de la noche: el hawawshi, carne picada especiada horneada dentro de un pan crujiente, y el hamam mahshi, pichón a la parrilla relleno de arroz sazonado.",
        photos: [{ alt: "Hawawshi abierto que muestra la carne picada especiada, con encurtidos al lado", label: "Hawawshi" }, { alt: "Dos pichones asados rellenos de arroz (hamam mahshi) sobre hojas verdes", label: "Pichón relleno" }],
      },
      {
        title: "Kunafa y basbousa",
        text: "Llega el postre: kunafa tibia, con su masa de hilos sobre queso dulce, y cuadrados de basbousa, el pastel de sémola bañado en almíbar.",
        photos: [{ alt: "Kunafa con pistacho, con una porción levantada sobre el queso fundido", label: "Kunafa" }, { alt: "Cuadrados de basbousa, cada uno con una almendra", label: "Basbousa" }],
      },
      {
        title: "Un ahwa tradicional",
        text: "Se termina en un ahwa de una calle secundaria, con té de menta, café turco y el murmullo de la ciudad: así debería terminar toda noche en El Cairo.",
        photos: [{ alt: "Dos vasos de té en la mesa de un café tradicional, con las paredes cubiertas de viejas fotos enmarcadas", label: "En el ahwa" }],
      },
    ],
    faqs: [
      { q: "¿La comida está incluida en el precio?", a: "No. El precio cubre su guía gastronómico privado, el recorrido y los traslados. La comida y las bebidas se pagan directamente en cada parada; su guía se encarga de pedir y puede indicarle el precio de cada plato." },
      { q: "¿La comida es segura para los visitantes?", a: "Sí: elegimos locales concurridos y de confianza, con mucha rotación, y su guía se encarga de pedir. Hay agua embotellada durante toda la noche." },
      { q: "¿Se adaptan a dietas especiales?", a: "Los vegetarianos comen muy bien: el koshari, el ful, la ta'meya y los dulces no llevan carne. Avísenos con antelación de cualquier alergia y adaptaremos el recorrido." },
      { q: "¿Terminaré demasiado lleno?", a: "Usted decide cuánto pedir en cada parada, y compartiendo los platos se prueba de todo sin excederse en ninguno. Venga con hambre, pero sin preocupación." },
    ],
  },
  // ===== Egypt Icons & Nile Cruise =====
  {
    slug: "tour-10-day",
    localeSlug: "egipto-10-dias-con-crucero-por-el-nilo",
    metaTitle: "Viaje a Egipto de 10 días con crucero por el Nilo | Kemet",
    metaDescription: "Diez días en privado: El Cairo, Alejandría, tren nocturno a Asuán y tres noches de crucero hasta Luxor, con su propio egiptólogo.",
    keywords: "viaje a egipto 10 días, egipto con crucero por el nilo, viaje privado egipto, el cairo luxor asuán, circuito egipto y crucero",
    crumb: "Iconos y crucero",
    title: "Iconos de Egipto y crucero por el Nilo",
    subtitle: "Diez días sin prisa, de las Pirámides de Guiza a los templos del Alto Egipto, enlazados por tres noches de crucero por el Nilo.",
    durationLabel: "10 días / 9 noches",
    startPoint: "El Cairo (aeropuerto u hotel)",
    summary: "Nuestro viaje insignia: El Cairo, Alejandría, un tren nocturno hacia el sur y tres noches de crucero por el Nilo de Asuán a Luxor; todas las capas de Egipto en un solo recorrido.",
    overview: "Es Egipto de punta a punta, a un ritmo pensado para vivirlo y no para ir tachando visitas. Empieza en El Cairo con los tesoros del Museo Egipcio, pasa un día junto al Mediterráneo en Alejandría y toma después el tren nocturno hacia el sur, hasta Asuán. Desde allí, un crucero de tres noches desciende el río por Kom Ombo y Edfu hasta Luxor, donde esperan los templos de Karnak y las tumbas reales de la orilla occidental. De vuelta en El Cairo, las Pirámides de Guiza y las callejuelas gastadas por los siglos de El Cairo islámico. Todo el viaje es privado, con su propio egiptólogo.",
    itinerary: [
      {
        title: "El Cairo y el Museo Egipcio",
        items: [
          "Recibimiento privado en el Aeropuerto Internacional de El Cairo",
          "Traslado al hotel y reunión de bienvenida",
          "Tarde en el Museo Egipcio de Tahrir: el oro real de Tanis y las obras maestras del Imperio Antiguo",
        ],
      },
      {
        title: "Alejandría, junto al Mediterráneo",
        items: [
          "A Alejandría por la carretera del desierto",
          "Catacumbas de Kom el-Shoqafa y Columna de Pompeyo",
          "Ciudadela de Qaitbay, en el lugar del antiguo Faro, y la moderna Bibliotheca Alexandrina",
          "Almuerzo de pescado y marisco frente al mar antes de volver a El Cairo",
        ],
      },
      {
        title: "El Cairo copto y tren nocturno a Asuán",
        items: [
          "La Iglesia Colgante, Abu Serga y las callejuelas del Viejo Cairo",
          "Traslado a la estación al caer la tarde",
          "Tren nocturno hacia el sur, hasta Asuán, con compartimentos privados y cena a bordo",
        ],
      },
      {
        title: "Asuán y embarque",
        items: [
          "Llegada a Asuán y visita a la Presa Alta y al Obelisco Inacabado",
          "En lancha motora hasta el templo de File, en su isla, dedicado a Isis",
          "Embarque en su crucero por el Nilo y almuerzo ya en el río",
        ],
      },
      {
        title: "Navegación hacia Kom Ombo y Edfu",
        items: [
          "Mañana de navegación río abajo por el valle del Nilo",
          "Kom Ombo, el templo doble de Sobek y Horus el Viejo",
          "Continuación hasta Edfu y el gran templo de Horus, el mejor conservado de Egipto",
        ],
      },
      {
        title: "La esclusa de Esna y llegada a Luxor",
        items: [
          "Paso por la esclusa de Esna, donde el valle se abre",
          "Llegada a Luxor por la tarde, con tiempo para descansar a bordo",
          "Opcional: espectáculo nocturno de luz y sonido en Karnak (con suplemento)",
        ],
      },
      {
        title: "Luxor, orilla oriental",
        items: [
          "Karnak, el mayor complejo de templos del mundo antiguo",
          "El templo de Luxor, en el corazón de la ciudad",
          "Desembarque y traslado a su hotel en Luxor",
        ],
      },
      {
        title: "Orilla occidental y tren a El Cairo",
        items: [
          "El Valle de los Reyes y las colinas de Tebas, horadadas de tumbas pintadas",
          "Templo funerario de Hatshepsut y Colosos de Memnón",
          "Tren nocturno de regreso a El Cairo",
        ],
      },
      {
        title: "Guiza y Saqqara",
        items: [
          "Las pirámides de Keops, Kefrén y Micerinos y la Gran Esfinge",
          "Mirador panorámico sobre la meseta de Guiza",
          "La pirámide escalonada de Zoser en Saqqara, el monumento de piedra más antiguo del mundo",
        ],
      },
      {
        title: "El Cairo islámico y salida",
        items: [
          "La Ciudadela de Saladino y la Mezquita de Alabastro de Mohamed Alí",
          "El bazar de Khan el-Khalili, para un último paseo",
          "Traslado privado al aeropuerto para su vuelo de salida",
        ],
      },
    ],
    comfort: {
      sleep: "Hoteles en El Cairo y Luxor, tres noches en el crucero por el Nilo y dos en el tren nocturno; en la versión con vuelos, hoteles en su lugar",
      drives: "Una excursión de un día de El Cairo a Alejandría, ida y vuelta por carretera",
    },
    faqs: [
      { q: "¿El crucero por el Nilo es privado?", a: "Viaja con su propio egiptólogo y con traslados privados, pero el barco se comparte con otros pasajeros. Los camarotes son privados y todas las visitas se hacen en grupo privado." },
      { q: "¿Cómo funcionan los trenes nocturnos?", a: "Viaja en un compartimento privado de coche cama, con cena y desayuno servidos a bordo. Se ahorra un traslado de día y llega a las visitas de la mañana tras una noche de descanso." },
      { q: "¿Se puede añadir Abu Simbel?", a: "Sí. Abu Simbel se ofrece como extra opcional desde Asuán, en un vuelo corto o en coche privado, y lo ideal es añadirlo el día de Asuán. Lo organizamos si lo solicita." },
      { q: "¿Cuál es la mejor época del año para viajar?", a: "De octubre a abril las temperaturas son agradables tanto en El Cairo como en el Alto Egipto. En verano hace calor en el sur, así que empezamos temprano y descansamos por la tarde." },
    ],
  },

  // ===== The Grand Tour of Egypt =====
  {
    slug: "tour-grand-14day",
    localeSlug: "gran-viaje-por-egipto-14-dias",
    metaTitle: "Gran viaje por Egipto en 14 días, con el mar Rojo | Kemet",
    metaDescription: "Catorce días en privado: El Cairo, Alejandría, crucero por el Nilo, Abu Simbel y tres noches en el mar Rojo. Con todos los vuelos internos.",
    keywords: "viaje a egipto 14 días, gran viaje por egipto, egipto y mar rojo, crucero por el nilo y abu simbel, viaje privado egipto",
    crumb: "Gran viaje, 14 días",
    title: "El gran viaje por Egipto",
    subtitle: "Catorce días con todos los registros del país: El Cairo, Alejandría, el Nilo en crucero, Abu Simbel y, para terminar, el mar Rojo.",
    durationLabel: "14 días / 13 noches",
    startPoint: "El Cairo (aeropuerto u hotel)",
    summary: "Nuestro viaje más completo: El Cairo y Alejandría, un crucero por el Nilo, el templo de Ramsés II excavado en la montaña de Abu Simbel y tres noches en el mar Rojo para asimilarlo todo.",
    overview: "Es el itinerario para quienes piensan venir una sola vez y verlo entero. Los diez primeros días pertenecen a la historia: las Pirámides y el Gran Museo Egipcio, los barrios medieval y copto de El Cairo, Alejandría junto al Mediterráneo y luego un vuelo al sur para ver Abu Simbel —el templo de Ramsés II excavado en la montaña, sobre el lago Nasser— antes de bajar el Nilo de Asuán a Luxor en un crucero de tres noches. Los cuatro últimos días cambian por completo de tono: tras las tumbas y los templos de Luxor, vuela a Sharm el-Sheikh, donde el desierto se encuentra con algunas de las aguas más transparentes del planeta. Tres noches en el mar Rojo cierran el viaje con esnórquel sobre los arrecifes de Ras Mohammed y nada en el programa que no pueda cancelarse en favor de la piscina. Todos los vuelos internos están incluidos; cada día guiado es privado.",
    itinerary: [
      {
        title: "Llegada a El Cairo",
        items: [
          "Recibimiento privado en el aeropuerto y traslado al hotel",
          "Por la noche, reunión de orientación con quien ha planificado su viaje",
        ],
      },
      {
        title: "Guiza y el Gran Museo Egipcio",
        items: [
          "Las pirámides, el mirador panorámico y la Esfinge con el fresco de la mañana",
          "El tesoro completo de Tutankamón en el Gran Museo Egipcio",
        ],
      },
      {
        title: "El Cairo islámico y copto",
        items: [
          "La Ciudadela y la Mezquita de Alabastro de Mohamed Alí",
          "La Iglesia Colgante y las callejuelas del Viejo Cairo",
          "Khan el-Khalili al anochecer",
        ],
      },
      {
        title: "Un día en Alejandría",
        items: [
          "Catacumbas de Kom el-Shoqafa y Columna de Pompeyo",
          "La Ciudadela de Qaitbay, en el lugar del antiguo Faro",
          "Almuerzo de pescado y marisco en la Corniche; regreso a El Cairo",
        ],
      },
      {
        title: "Vuelo al sur: Asuán",
        items: [
          "Vuelo a Asuán por la mañana",
          "File en lancha motora y el Obelisco Inacabado",
          "Velada libre en la Corniche",
        ],
      },
      {
        title: "Abu Simbel",
        items: [
          "Al amanecer, por carretera a Abu Simbel",
          "El Gran Templo de Ramsés II y el templo de Nefertari",
          "Regreso a Asuán; faluca a la hora dorada",
        ],
      },
      {
        title: "Embarque en su crucero por el Nilo",
        items: [
          "Mañana libre; embarque antes del almuerzo",
          "Tarde en el río mientras el barco zarpa",
        ],
      },
      {
        title: "Kom Ombo y Edfu",
        items: [
          "El templo doble de Sobek y Horus el Viejo",
          "Edfu, el templo mejor conservado de Egipto",
        ],
      },
      {
        title: "Llegada a Luxor",
        items: [
          "Por la esclusa de Esna hasta Tebas",
          "El templo de Luxor iluminado por la noche (opcional)",
        ],
      },
      {
        title: "Luxor, las dos orillas",
        items: [
          "Karnak a la hora de apertura, con su egiptólogo",
          "El Valle de los Reyes y el templo de Hatshepsut",
          "Desembarque y traslado a su hotel en Luxor",
        ],
      },
      {
        title: "Vuelo al mar Rojo",
        items: [
          "Vuelo a Sharm el-Sheikh por la mañana",
          "Llegada al hotel; el programa termina aquí, a propósito",
        ],
      },
      {
        title: "Los arrecifes de Ras Mohammed",
        items: [
          "Día en barco por el parque nacional: dos paradas de esnórquel sobre paredes de coral",
          "Almuerzo en cubierta, a bordo",
        ],
      },
      {
        title: "El mar Rojo, a su aire",
        items: [
          "Día libre: buceo, spa o simplemente el mar",
          "Cena de despedida en el Mercado Viejo de Sharm",
        ],
      },
      {
        title: "Salida",
        items: [
          "Vuelo a El Cairo con conexión a su vuelo internacional",
        ],
      },
    ],
    comfort: {
      sleep: "Hoteles en El Cairo y Asuán, tres noches en el crucero por el Nilo, un hotel en Luxor y después un resort en el mar Rojo",
      drives: "Una excursión de un día a Alejandría, y de Asuán a Abu Simbel ida y vuelta por carretera",
      early: "Salida por carretera antes del amanecer hacia Abu Simbel",
    },
    faqs: [
      { q: "¿Son demasiados catorce días para una primera visita?", a: "Es lo que Egipto necesita para verse entero y no a pequeñas dosis. Los días de mar Rojo del final son los que hacen llevadera la semana de historia: el viaje respira en lugar de acumular cansancio." },
      { q: "¿Cuánto de este viaje se hace en avión?", a: "Tres vuelos internos, de alrededor de una hora cada uno, que sustituyen lo que de otro modo serían trayectos de doce horas por carretera o en tren. Dos trayectos largos siguen siendo por carretera: la excursión a Alejandría y la ida y vuelta de Asuán a Abu Simbel; el segundo forma parte de la experiencia, porque cruza el desierto abierto al amanecer." },
      { q: "¿Se puede cambiar o alargar la parte del mar Rojo?", a: "Con total libertad. Algunos viajeros la cambian por más noches en Luxor o por Siwa; otros alargan Sharm hasta una semana entera. Los diez primeros días son la columna vertebral, y el acto final lo define usted." },
    ],
  },

  // ===== Honeymoon on the Nile =====
  {
    slug: "tour-honeymoon-9day",
    localeSlug: "luna-de-miel-en-el-nilo-9-dias",
    metaTitle: "Luna de miel en Egipto: 9 días por el Nilo | Kemet",
    metaDescription: "Nueve días para dos: amanecer privado en las pirámides, faluca a la hora dorada, tres noches de crucero por el Nilo y suites elegidas por sus vistas.",
    keywords: "luna de miel en egipto, viaje de novios egipto, luna de miel crucero por el nilo, egipto para parejas, viaje de novios de lujo",
    crumb: "Luna de miel",
    title: "Luna de miel en el Nilo",
    subtitle: "Nueve días pensados para dos: los iconos de El Cairo, tres noches de crucero, las islas de Asuán y largos atardeceres dorados sin ninguna prisa.",
    durationLabel: "9 días / 8 noches",
    startPoint: "El Cairo (aeropuerto u hotel)",
    summary: "Egipto como debe ser una luna de miel: amanecer privado en las pirámides, faluca a la hora dorada, tres noches en el Nilo y suites elegidas por sus vistas.",
    overview: "Un itinerario de luna de miel no es un itinerario estándar con pétalos de rosa. El ritmo es otro: salidas más tardías, veladas más largas, un gran momento al día en lugar de cuatro. El viaje empieza en El Cairo con un amanecer privado en Guiza, con acceso anticipado antes de que abra la meseta, y después el Gran Museo Egipcio a su propio ritmo. Vuelan al sur, a Asuán —la ciudad más suave y romántica del río—, para navegar en faluca privada a la hora dorada y cenar con vistas a la catarata. Un crucero de tres noches navega hasta Luxor pasando por Kom Ombo y Edfu, y la imagen final es un globo aerostático al amanecer sobre las colinas de Tebas. Hoteles y camarotes se eligen en todo el viaje por sus vistas al Nilo, y cada guía sabe que esto es una luna de miel, no una marcha forzada.",
    itinerary: [
      {
        title: "Llegada a El Cairo",
        items: [
          "Recibimiento privado en el aeropuerto y traslado a una suite con vistas al Nilo",
          "Velada libre, con recomendaciones para cenar de quien ha organizado su viaje",
        ],
      },
      {
        title: "Amanecer en Guiza y el museo",
        items: [
          "Amanecer en el mirador de las nueve pirámides y, después, acceso anticipado a la meseta antes de la apertura al público",
          "Desayuno tardío y, a continuación, el Gran Museo Egipcio a su propio ritmo",
          "Descanso por la tarde; al anochecer, una copa en faluca por el Nilo de El Cairo",
        ],
      },
      {
        title: "Vuelo a Asuán",
        items: [
          "Vuelo al sur por la mañana",
          "File, el templo insular de Isis, diosa del amor, en lancha motora",
          "Faluca al atardecer entre las islas de granito; cena en una terraza nubia",
        ],
      },
      {
        title: "Asuán y embarque",
        items: [
          "Mañana tranquila: la isla botánica o el zoco, como prefieran",
          "Embarque en su crucero por el Nilo antes del almuerzo",
          "Tarde en la cubierta, al sol, mientras el barco zarpa",
        ],
      },
      {
        title: "Kom Ombo y Edfu",
        items: [
          "El templo doble de Kom Ombo con la luz de la mañana",
          "El templo de Horus en Edfu, por la tarde",
          "Cena a bordo mientras el barco amarra para pasar la noche",
        ],
      },
      {
        title: "La esclusa de Esna y llegada a Luxor",
        items: [
          "Un día en el agua: el día de la luna de miel en que no se hace nada, y se hace de maravilla",
          "Llegada a Luxor al anochecer; el templo de Luxor iluminado, si lo desean",
        ],
      },
      {
        title: "Globos y la orilla occidental",
        items: [
          "Globo aerostático al amanecer sobre la orilla occidental de Luxor, si lo añaden (si el tiempo lo permite)",
          "El Valle de los Reyes y el templo de Hatshepsut con su egiptólogo",
          "Desembarque y traslado a un hotel de Luxor para las últimas noches",
        ],
      },
      {
        title: "Karnak y un día para dos",
        items: [
          "Karnak en la calma de primera hora de la mañana",
          "Tarde enteramente libre: piscina, spa o el museo",
          "Cena de despedida organizada por quien ha planificado su viaje",
        ],
      },
      {
        title: "Vuelo a El Cairo y salida",
        items: [
          "Vuelo a El Cairo por la mañana con conexión a su vuelo internacional",
        ],
      },
    ],
    comfort: {
      sleep: "Una suite con vistas al Nilo en El Cairo, un hotel en Asuán, tres noches en el crucero por el Nilo y después un hotel en Luxor",
      early: "El amanecer en Guiza, un globo al amanecer sobre la orilla occidental de Luxor y Karnak a primera hora de la mañana",
    },
    faqs: [
      { q: "¿En qué se diferencia del viaje de 10 días Iconos de Egipto?", a: "La ruta coincide; el ritmo, no. Este itinerario cambia Alejandría y los trenes nocturnos por vuelos, suites con vistas al Nilo, mañanas más tardías y veladas reservadas. Está pensado para el tiempo en pareja, no para abarcarlo todo." },
      { q: "¿Pueden preparar sorpresas: flores, una cena privada, una propuesta de matrimonio?", a: "Sí, con discreción y a menudo. Cuenten a quien organiza su viaje lo que tienen en mente y nosotros nos ocupamos de la puesta en escena; una propuesta en un templo requiere un poco de coreografía previa, y sabemos exactamente dónde están los rincones tranquilos." },
      { q: "¿Es seguro incluir el vuelo en globo?", a: "Los vuelos en globo de Luxor los realizan operadores con licencia bajo la supervisión de la aviación civil, solo despegan con la calma del amanecer y se cancelan sin dudarlo si hay viento. Reservamos con fechas flexibles para que una mañana cancelada pueda pasar a la siguiente." },
    ],
  },

  // ===== Egypt Through the Lens =====
  {
    slug: "tour-photography-7day",
    localeSlug: "viaje-fotografico-egipto-7-dias",
    metaTitle: "Viaje fotográfico por Egipto, 7 días según la luz | Kemet",
    metaDescription: "Siete días organizados según la luz y no según los horarios: Guiza al amanecer con acceso anticipado, Karnak sin multitudes y Asuán a la hora dorada.",
    keywords: "viaje fotográfico egipto, fotografía en egipto, egipto para fotógrafos, viaje de fotografía luxor, fotografiar las pirámides",
    crumb: "Viaje fotográfico, 7 días",
    title: "Egipto a través del objetivo",
    subtitle: "Siete días organizados según la luz y no según los horarios de apertura: mesetas al amanecer, templos en la hora azul y el Nilo a la hora dorada.",
    durationLabel: "7 días / 6 noches",
    startPoint: "El Cairo (aeropuerto u hotel)",
    summary: "Un itinerario construido a partir de la luz: Guiza al amanecer con acceso anticipado, Karnak antes de las multitudes, un globo opcional sobre Tebas y falucas a la hora dorada.",
    overview: "La mayoría de los itinerarios por Egipto llevan al viajero a los grandes lugares en el centro del día, con luz plana y llenos de gente: las peores horas que verá nunca una cámara. Este viaje invierte la lógica. Cada día se organiza en torno a la primera y la última luz: acceso privado anticipado en Guiza antes de que abra la meseta, la sala hipóstila de Karnak con el sol bajo de la mañana que, rasante, hace saltar los relieves, la Avenida de las Esfinges iluminada en la hora azul y las velas latinas de Asuán a contraluz a la hora dorada. Su guía entiende a los fotógrafos: sabe cuándo hablar, cuándo llevar un permiso de trípode y cuándo, sencillamente, apartarse y dejarle a solas con la escena. Las parejas que no fotografían también disfrutan de este viaje; la luz que favorece a un sensor favorece igual a un recuerdo.",
    itinerary: [
      {
        title: "Llegada a El Cairo y presentación",
        items: [
          "Traslado privado y, por la noche, repaso de la ruta con su guía",
          "Revisión del equipo: permisos de trípode tramitados donde se exigen",
        ],
      },
      {
        title: "Guiza con la primera luz",
        items: [
          "Amanecer en el mirador de las nueve pirámides —con tiempo para fotografiar— y después la meseta antes de que abra",
          "A media mañana: el mirador panorámico y los ángulos del recinto de la Esfinge",
          "Pausa por la tarde para editar; la ciudad en la hora azul desde el parque Al-Azhar",
        ],
      },
      {
        title: "El Cairo islámico: calles y faroles",
        items: [
          "Paseo a la hora dorada por la calle Al-Muizz mientras se encienden los faroles",
          "Las callejuelas de Khan el-Khalili: gente, cobre y haces de luz",
          "Vuelo a Luxor por la noche",
        ],
      },
      {
        title: "Globos y la orilla occidental",
        items: [
          "Globo aerostático al amanecer sobre la necrópolis tebana, si lo añade (si el tiempo lo permite)",
          "Interiores del Valle de los Reyes: técnica a pulso donde se prohíbe el trípode",
          "Las terrazas de Hatshepsut con la luz lateral de última hora",
        ],
      },
      {
        title: "Karnak y el templo de Luxor de noche",
        items: [
          "Karnak a la hora de apertura, una hora antes de que lleguen los autocares",
          "Tarde en el río: pescadores, falucas y reflejos",
          "La Avenida de las Esfinges y el templo de Luxor iluminados en la hora azul",
        ],
      },
      {
        title: "Asuán: velas y granito",
        items: [
          "Por carretera hacia el sur por la mañana (parada en Edfu si lo desea)",
          "File en lancha motora: el templo que surge del agua",
          "Faluca privada a la hora dorada entre las islas de la catarata",
        ],
      },
      {
        title: "Color nubio y salida",
        items: [
          "Primera luz en una aldea nubia pintada",
          "Vuelo a El Cairo para su conexión",
        ],
      },
    ],
    comfort: {
      sleep: "Hoteles en El Cairo, Luxor y Asuán",
      drives: "De Luxor a Asuán por carretera",
      early: "El amanecer en Guiza, un globo al amanecer sobre la orilla occidental y la primera luz en una aldea nubia",
    },
    faqs: [
      { q: "¿Se puede llevar un dron?", a: "No: cuente con que no. Las normas egipcias sobre drones están entre las más estrictas del mundo y el equipo se confisca en el aeropuerto. Todo en este itinerario está pensado para perspectivas a ras de suelo y desde el globo." },
      { q: "¿Se permiten trípodes en los yacimientos?", a: "Depende del lugar y cambia: algunos exigen un permiso de pago, otros los prohíben sin más, y en el interior de las tumbas reales solo se fotografía a pulso. Tramitamos los permisos con antelación donde existen y, donde no, planificamos la técnica en consecuencia." },
      { q: "¿Merece la pena este viaje si mi pareja no hace fotos?", a: "Sí, de verdad. El programa significa simplemente ver los lugares en sus horas más vacías y más bellas; el único precio es madrugar, y la luz lo compensa." },
    ],
  },

  // ===== Family Egypt: Pyramids to the Nile =====
  {
    slug: "tour-family-8day",
    localeSlug: "egipto-en-familia-8-dias",
    metaTitle: "Egipto en familia: viaje de 8 días con niños | Kemet",
    metaDescription: "Ocho días para niños curiosos y padres sin prisa: mañanas guiadas cortas, egiptólogos con experiencia en familias, tardes de piscina y faluca en Asuán.",
    keywords: "egipto en familia, viaje a egipto con niños, egipto con niños 8 días, vacaciones en familia egipto, viaje familiar egipto",
    crumb: "En familia, 8 días",
    title: "Egipto en familia: de las pirámides al Nilo",
    subtitle: "Ocho días pensados para niños curiosos y padres sin prisa: momias, falucas, los colores de las tumbas pintadas y tardes junto a la piscina.",
    durationLabel: "8 días / 7 noches",
    startPoint: "El Cairo (aeropuerto u hotel)",
    summary: "Egipto con niños, bien hecho: mañanas guiadas cortas, egiptólogos con experiencia en familias, tardes de piscina y momentos que ninguna clase puede igualar.",
    overview: "Egipto es el aula más gratificante del mundo, siempre que el ritmo respete cómo viajan de verdad los niños. Este viaje reserva las visitas guiadas para las mañanas, deja las tardes a las piscinas y los jardines y cuenta con guías especialistas en familias, capaces de explicar la momificación a un niño de ocho años con tanta viveza que, en la cena, es el niño quien la explica. El Cairo y Guiza abren el viaje con la Esfinge, las salas de Tutankamón del Gran Museo Egipcio y las momias del Museo Nacional de la Civilización Egipcia (NMEC). Un vuelo al sur (a los niños rara vez les gusta el tren nocturno la segunda vez) lleva a las tumbas pintadas de Luxor y a una hora en faluca en Asuán, donde lo único que se pide es dejar que la mano roce el agua del Nilo. En todo el viaje se duerme en suites familiares o en habitaciones comunicadas.",
    itinerary: [
      {
        title: "Llegada a El Cairo",
        items: [
          "Recibimiento privado en el aeropuerto, con sillas infantiles instaladas si se necesitan",
          "Instalación en habitaciones comunicadas; velada libre",
        ],
      },
      {
        title: "Las pirámides y la Esfinge",
        items: [
          "La meseta de Guiza con el fresco de la mañana: pirámides, mirador panorámico y Esfinge",
          "Paseo corto opcional en camello en el mirador panorámico",
          "Tarde de piscina; por la noche, espectáculo de luz y sonido en las pirámides (opcional)",
        ],
      },
      {
        title: "Tutankamón y las momias",
        items: [
          "El Gran Museo Egipcio: el tesoro del faraón niño, contado para mentes jóvenes",
          "La Sala de las Momias Reales del NMEC, para los niños mayores que se atrevan",
          "Helado en la Corniche del Nilo",
        ],
      },
      {
        title: "Vuelo a Luxor: Karnak",
        items: [
          "Vuelo al sur por la mañana",
          "Karnak como una búsqueda del tesoro: encontrar el escarabajo, contar las columnas",
          "Tarde en la piscina del hotel",
        ],
      },
      {
        title: "El Valle de los Reyes",
        items: [
          "Visita temprana a la orilla occidental: tres tumbas elegidas por la viveza de sus colores",
          "El templo de Hatshepsut y los Colosos de Memnón",
          "Tarde libre; demostración de cocina en familia en el hotel (opcional)",
        ],
      },
      {
        title: "A Asuán por carretera: Edfu",
        items: [
          "Hacia el sur por carretera con parada en Edfu, donde se llega al templo en calesa de caballos",
          "Llegada a Asuán; gelato por la noche en la Corniche",
        ],
      },
      {
        title: "Falucas y color nubio",
        items: [
          "File en lancha motora: un templo en una isla ya es toda una aventura",
          "Por la tarde, paseo en faluca y visita a una aldea nubia pintada",
          "Dibujos de henna y té de hibisco con una familia nubia",
        ],
      },
      {
        title: "Regreso vía El Cairo",
        items: [
          "Vuelo a El Cairo por la mañana con conexión a su vuelo de salida",
        ],
      },
    ],
    comfort: {
      sleep: "Hoteles en El Cairo, Luxor y Asuán",
      drives: "De Luxor a Asuán por carretera, con parada en Edfu",
      early: "Una salida temprana para el Valle de los Reyes",
    },
    faqs: [
      { q: "¿Para qué edades es este itinerario?", a: "Está pensado para niños de entre 6 y 15 años, aproximadamente. Los más pequeños también lo llevan bien —las mañanas son cortas—, pero las tumbas y los museos calan más a partir de los siete años. Cada guía se adapta sobre la marcha a quien tenga delante." },
      { q: "¿Cuánto caminarán los niños?", a: "Las visitas se limitan a dos o tres horas con el fresco de la mañana, con el vehículo siempre cerca. El paseo más largo es Karnak, y se interrumpe con paradas a la sombra y, para qué negarlo, con juegos." },
      { q: "¿Comerán bien los niños que son exigentes con la comida?", a: "Sí. Los hoteles ofrecen opciones conocidas junto a los platos egipcios, y su guía siempre sabe dónde encontrar una pasta o un pollo a la parrilla de confianza. La mayoría de los niños se van enganchados al jugo de mango natural." },
    ],
  },

  // ===== Egypt Highlights Deluxe =====
  {
    slug: "tour-7-day",
    localeSlug: "egipto-en-7-dias-el-cairo-alejandria-luxor",
    metaTitle: "Egipto en 7 días: El Cairo, Alejandría y Luxor | Kemet",
    metaDescription: "Lo esencial de Egipto en siete días privados: el Museo Egipcio, Alejandría, los templos y tumbas de Luxor y las Pirámides de Guiza, con su egiptólogo.",
    keywords: "viaje a egipto 7 días, egipto en una semana, el cairo y luxor, tren nocturno egipto, viaje privado egipto",
    crumb: "Egipto en 7 días",
    title: "Los imprescindibles de Egipto",
    subtitle: "Una semana que reúne lo esencial —El Cairo, Alejandría y Luxor— con noches en tren nocturno entre una y otra ciudad.",
    durationLabel: "7 días / 6 noches",
    startPoint: "El Cairo (aeropuerto u hotel)",
    summary: "Lo más destacado de Egipto en siete días: el Museo Egipcio, Alejandría, los templos y las tumbas de Luxor y las Pirámides de Guiza.",
    overview: "Para quienes disponen de una semana, este viaje destila Egipto en sus grandes imprescindibles sin precipitarlos. El Cairo abre con el Museo Egipcio; un día entero junto al Mediterráneo permite conocer Alejandría; después, el tren nocturno lleva hasta Luxor, a los templos de los vivos y las tumbas de los muertos. De vuelta al norte, las Pirámides de Guiza, Saqqara y el corazón medieval de El Cairo islámico. Privado de principio a fin, con su propio egiptólogo.",
    itinerary: [
      {
        title: "El Cairo y el Museo Egipcio",
        items: [
          "Recibimiento privado en el aeropuerto y traslado al hotel",
          "Tarde en el Museo Egipcio de Tahrir",
          "Por la noche, reunión de orientación con su guía",
        ],
      },
      {
        title: "Excursión a Alejandría",
        items: [
          "Por carretera hasta la costa mediterránea",
          "Catacumbas de Kom el-Shoqafa, Columna de Pompeyo y Ciudadela de Qaitbay",
          "La Bibliotheca Alexandrina y almuerzo de pescado y marisco frente al mar",
        ],
      },
      {
        title: "El Cairo copto y tren nocturno a Luxor",
        items: [
          "La Iglesia Colgante y el Viejo Cairo por la mañana",
          "Traslado a la estación por la tarde",
          "Tren nocturno hacia el sur, con compartimentos privados",
        ],
      },
      {
        title: "Luxor, orilla oriental",
        items: [
          "El complejo de templos de Karnak y la avenida de las esfinges",
          "El templo de Luxor, en el corazón de la ciudad",
          "Llegada a su hotel en Luxor",
        ],
      },
      {
        title: "Orilla occidental y tren a El Cairo",
        items: [
          "El Valle de los Reyes y el templo funerario de Hatshepsut",
          "Los Colosos de Memnón",
          "Tren nocturno de regreso a El Cairo",
        ],
      },
      {
        title: "Guiza y Saqqara",
        items: [
          "Las Pirámides de Guiza y la Gran Esfinge",
          "Mirador panorámico sobre la meseta",
          "La pirámide escalonada de Zoser en Saqqara",
        ],
      },
      {
        title: "El Cairo islámico y salida",
        items: [
          "La Ciudadela de Saladino y la Mezquita de Mohamed Alí",
          "El bazar de Khan el-Khalili",
          "Traslado privado al aeropuerto",
        ],
      },
    ],
    comfort: {
      sleep: "Hoteles en El Cairo y Luxor, y dos noches en el tren nocturno; en la versión con vuelos, hoteles en su lugar",
      drives: "Una excursión de un día de El Cairo a Alejandría, ida y vuelta por carretera",
    },
    faqs: [
      { q: "¿Cuánto hay que caminar?", a: "Una cantidad cómoda: los complejos de templos como Karnak suponen una o dos horas a pie por terreno irregular. Dosificamos cada día y descansamos en las horas de calor." },
      { q: "¿Son cómodos los trenes nocturnos?", a: "Sí. Dispone de un compartimento privado de coche cama, con cena y desayuno servidos a bordo, así que los largos traslados se hacen mientras descansa." },
      { q: "¿Se puede ampliar con un crucero por el Nilo?", a: "Por supuesto: muchos viajeros añaden un crucero de 3 o 4 noches entre Asuán y Luxor. Díganos sus fechas y adaptaremos la ampliación." },
    ],
  },

  // ===== Cairo of the Eight Worlds =====
  {
    slug: "tour-cairo-culture-5day",
    localeSlug: "el-cairo-cultural-5-dias",
    metaTitle: "El Cairo cultural: 5 días con guía historiador | Kemet",
    metaDescription: "Cinco días en las capas de El Cairo: faraónica, copta, islámica y moderna. Dos museos, tres religiones, calles medievales y la necrópolis de Saqqara.",
    keywords: "el cairo cultural, viaje a el cairo 5 días, el cairo islámico, el cairo copto, qué ver en el cairo",
    crumb: "El Cairo cultural",
    title: "El Cairo de los ocho mundos",
    subtitle: "Cinco días dentro de las capas de una sola ciudad: El Cairo faraónico, copto, islámico y moderno, leído calle a calle con guía historiador.",
    durationLabel: "5 días / 4 noches",
    startPoint: "El Cairo (aeropuerto u hotel)",
    summary: "Una lectura lenta y profunda de la ciudad con más capas del mundo: sus dos museos, sus tres religiones, sus calles medievales y la necrópolis donde se inventó la pirámide.",
    overview: "La mayoría de los visitantes dedica a El Cairo dos noches y una lista. Este viaje le dedica cinco días y una tesis: que El Cairo no es una escala, sino el lugar cultural más denso del mundo mediterráneo. La capa faraónica recibe dos días —Guiza y el arco de Saqqara, Menfis y Dahshur, donde se inventó la forma de la pirámide—, pero el corazón del itinerario es la ciudad viva: el barrio copto, construido dentro de una fortaleza romana; el tejido milenario de El Cairo islámico, recorrido mezquita a mezquita con guía historiador; las rutas comerciales que aún se adivinan en las callejuelas de Khan el-Khalili; y los dos grandes museos, leídos como una sola colección dividida por un siglo. Las veladas se planifican con el mismo cuidado que las mañanas: un paseo por las calles belle époque del centro, un espectáculo sufí de tanoura y un té allí donde de verdad lo toman los cairotas.",
    itinerary: [
      {
        title: "Llegada y el Museo Egipcio",
        items: [
          "Recibimiento privado en el aeropuerto y traslado",
          "Las densas salas antiguas del Museo Egipcio con su guía historiador",
          "Paseo al anochecer por las calles belle époque del centro",
        ],
      },
      {
        title: "Guiza y el Gran Museo Egipcio",
        items: [
          "La meseta a la hora de apertura: pirámides, mirador panorámico y Esfinge",
          "Tarde en las salas de Tutankamón del Gran Museo Egipcio",
          "Espectáculo de luz y sonido opcional por la noche",
        ],
      },
      {
        title: "Saqqara, Menfis y Dahshur",
        items: [
          "La pirámide escalonada de Zoser, donde empieza la arquitectura en piedra",
          "El coloso de Ramsés II en Menfis",
          "La Pirámide Acodada y la Pirámide Roja de Dahshur, normalmente casi vacías",
        ],
      },
      {
        title: "El Cairo copto e islámico",
        items: [
          "La fortaleza romana de Babilonia, la Iglesia Colgante y la sinagoga de Ben Ezra",
          "La mezquita de Ibn Tulun, del siglo IX, y la Ciudadela",
          "La calle Al-Muizz al anochecer; espectáculo sufí de tanoura ya de noche",
        ],
      },
      {
        title: "El bazar y salida",
        items: [
          "Khan el-Khalili con contexto: talleres, no solo puestos",
          "Último almuerzo en una casa otomana restaurada",
          "Traslado privado al aeropuerto",
        ],
      },
    ],
    comfort: {
      sleep: "Un solo hotel en El Cairo para las cuatro noches",
    },
    faqs: [
      { q: "¿De verdad hay material para cinco días en una sola ciudad?", a: "El Cairo daría para quince. Cinco días es el punto en que la ciudad deja de ser un torbellino de monumentos y se vuelve legible: empieza a reconocer dinastías, estilos de mezquita y trazados de calles sin que nadie se lo indique. Ese es el objetivo." },
      { q: "¿Cuánto se camina el día de El Cairo islámico?", a: "Unos cuatro kilómetros a lo largo del día, sobre adoquines y piedra, con continuas pausas para las visitas. En este viaje un calzado cómodo importa más que en cualquier otro de los que organizamos." },
      { q: "¿Se puede añadir Alejandría?", a: "Sí: un sexto día junto al Mediterráneo prolonga este viaje de forma natural. Pídalo al reservar y lo incorporaremos." },
    ],
  },

  // ===== Temples of the South =====
  {
    slug: "tour-upper-egypt-5day",
    localeSlug: "alto-egipto-5-dias-luxor-asuan",
    metaTitle: "Alto Egipto en 5 días: Luxor, Edfu y Asuán | Kemet",
    metaDescription: "Cinco días privados por el Alto Egipto: las dos orillas de Luxor, Edfu y Kom Ombo por carretera y las islas de Asuán, con su propio egiptólogo.",
    keywords: "alto egipto 5 días, viaje luxor y asuán, viaje privado luxor, templos de egipto, de luxor a asuán por carretera",
    crumb: "Alto Egipto, 5 días",
    title: "Los templos del sur",
    subtitle: "Cinco días sin prisa por el Alto Egipto: las dos orillas de Luxor, la carretera hacia el sur por Edfu y Kom Ombo y las islas de Asuán.",
    durationLabel: "5 días / 4 noches",
    startPoint: "Luxor (hotel, estación o aeropuerto)",
    summary: "El corazón de la historia más antigua de Egipto, por carretera y en privado: Karnak, el Valle de los Reyes, Edfu, Kom Ombo y File, con tiempo para asimilarlos de verdad.",
    overview: "El Alto Egipto concentra la mayor densidad de monumentos del país, y la mayoría de los itinerarios lo recorren a la carrera. Este no. Dos días completos en Luxor separan los templos de la orilla oriental de la necrópolis de la occidental, para que ninguno se vea con prisas. El trayecto hacia el sur, hasta Asuán, pasa a ser parte del viaje y no un simple traslado: Edfu y Kom Ombo interrumpen la carretera justo donde antaño se detenía el tráfico fluvial. Asuán cierra el viaje en un tono más suave —File en lancha motora, las canteras de granito y una hora de faluca a vela— antes del regreso en avión o en tren. Su propio egiptólogo privado, del primer al último día.",
    itinerary: [
      {
        title: "Llegada a Luxor y la orilla oriental",
        items: [
          "Recibimiento privado en el aeropuerto o la estación de Luxor",
          "El complejo de templos de Karnak: la gran sala hipóstila con la luz de la tarde",
          "El templo de Luxor al anochecer, cuando se encienden los focos",
        ],
      },
      {
        title: "La orilla occidental a fondo",
        items: [
          "El Valle de los Reyes: tres tumbas reales con su egiptólogo",
          "El templo funerario de Hatshepsut, en terrazas, en Deir el-Bahari",
          "Los Colosos de Memnón y regreso por caminos rurales a través de la llanura aluvial",
        ],
      },
      {
        title: "Hacia el sur por carretera: Edfu y Kom Ombo",
        items: [
          "Por la mañana, por carretera a Edfu y el templo de Horus, el mejor conservado de Egipto",
          "El santuario doble de Kom Ombo, sobre un meandro del Nilo",
          "Llegada a Asuán a última hora de la tarde; velada libre en la Corniche",
        ],
      },
      {
        title: "Asuán: File y el río",
        items: [
          "La Presa Alta y el Obelisco Inacabado en la cantera de granito",
          "En lancha motora hasta el templo de File, en su isla",
          "Paseo en faluca a la hora dorada entre las islas de la Primera Catarata",
        ],
      },
      {
        title: "Salida, o Abu Simbel",
        items: [
          "Mañana libre o, si lo desea, una excursión temprana opcional a Abu Simbel",
          "Traslado privado al aeropuerto o la estación de Asuán",
        ],
      },
    ],
    comfort: {
      sleep: "Un hotel en Luxor y después otro en Asuán",
      drives: "De Luxor a Asuán por carretera, con paradas en Edfu y Kom Ombo",
      early: "Solo si elige la excursión opcional a Abu Simbel el último día",
    },
    faqs: [
      { q: "¿Por qué ir de Luxor a Asuán por carretera y no en crucero?", a: "La carretera permite ver Edfu y Kom Ombo sin atarse al horario fijo de un barco de crucero, y todas las noches se duerme en una habitación de hotel de tamaño completo. Si prefiere navegar, nuestro crucero Nile in Style recorre el mismo tramo por el agua." },
      { q: "¿Este viaje incluye Abu Simbel?", a: "No de serie, pero encaja sin problemas como excursión a primera hora desde Asuán el último día, en coche privado o en un vuelo corto. Avísenos al reservar para que podamos asegurar los horarios." },
      { q: "¿Cómo se llega a Luxor para empezar?", a: "En un vuelo de EgyptAir desde El Cairo (55 minutos) o en el tren nocturno. Ambos se añaden fácilmente; el itinerario comienza en cuanto llegue." },
    ],
  },

  // ===== From Pyramids to the Sea =====
  {
    slug: "tour-4-day",
    localeSlug: "el-cairo-y-alejandria-4-dias",
    metaTitle: "El Cairo y Alejandría en 4 días, en privado | Kemet",
    metaDescription: "Cuatro días en privado: el Museo Egipcio, las capas grecorromanas de Alejandría, las Pirámides de Guiza y El Cairo medieval.",
    keywords: "el cairo y alejandría, viaje a egipto 4 días, escapada a el cairo, excursión a alejandría, pirámides de giza",
    crumb: "El Cairo y Alejandría",
    title: "De las pirámides al mar",
    subtitle: "Cuatro días que combinan los monumentos de El Cairo y Guiza con un día junto al Mediterráneo, en Alejandría.",
    durationLabel: "4 días / 3 noches",
    startPoint: "El Cairo (aeropuerto u hotel)",
    summary: "Un viaje compacto por el norte: el Museo Egipcio, las capas grecorromanas de Alejandría, las Pirámides de Guiza y El Cairo medieval.",
    overview: "Corta en días pero amplia en variedad, esta escapada une los monumentos fundacionales del Imperio Antiguo con la cosmópolis mediterránea de Alejandría. Empieza por el Museo Egipcio, pasa un día entero entre las catacumbas y la ciudadela de Alejandría y dedica después a Guiza y Saqqara la luz de la mañana que merecen, antes de terminar en las callejuelas de El Cairo islámico. Ideal como viaje independiente o como primera mitad de un itinerario más largo por Egipto.",
    itinerary: [
      {
        title: "Llegada y el Museo Egipcio",
        items: [
          "Recibimiento privado en el aeropuerto y traslado al hotel",
          "Tarde en el Museo Egipcio de Tahrir",
          "Recomendaciones de su guía para la cena de bienvenida",
        ],
      },
      {
        title: "Excursión a Alejandría",
        items: [
          "Catacumbas de Kom el-Shoqafa",
          "La Ciudadela de Qaitbay y la Bibliotheca Alexandrina",
          "La Columna de Pompeyo y almuerzo de pescado y marisco frente al mar",
        ],
      },
      {
        title: "Guiza y Saqqara",
        items: [
          "Las Pirámides de Guiza y la Gran Esfinge",
          "La pirámide escalonada de Zoser en Saqqara",
          "Menfis, primera capital del Egipto unificado",
        ],
      },
      {
        title: "El Cairo islámico y salida",
        items: [
          "La Ciudadela de Saladino y la Mezquita de Mohamed Alí",
          "El bazar de Khan el-Khalili",
          "Traslado privado al aeropuerto",
        ],
      },
    ],
    comfort: {
      sleep: "Un solo hotel en El Cairo para las tres noches",
      drives: "Una excursión de un día de El Cairo a Alejandría, ida y vuelta por carretera",
    },
    faqs: [
      { q: "¿Bastan cuatro días para El Cairo y Alejandría?", a: "Sí: este itinerario está pensado para cubrir lo esencial de ambas sin prisas, con un día entero dedicado a Alejandría y una mañana completa a la meseta de Guiza." },
      { q: "¿Se puede añadir Luxor o un crucero por el Nilo?", a: "Fácilmente. Esta escapada es una primera mitad natural; añadimos un vuelo o el tren nocturno a Luxor y Asuán siempre que disponga de más días." },
      { q: "¿Cuánto dura el trayecto a Alejandría?", a: "Entre dos horas y media y tres horas en cada sentido por la carretera del desierto, en un vehículo privado con aire acondicionado y con su guía." },
    ],
  },
  // ===== Red Sea Retreat: Sharm El Sheikh =====
  {
    slug: "tour-sharm-5day",
    localeSlug: "sharm-el-sheikh-5-dias",
    metaTitle: "Mar Rojo: Sharm el-Sheikh, 5 días en privado | Kemet",
    metaDescription: "Cinco días donde las montañas del Sinaí se encuentran con el agua más clara del hemisferio norte: barco privado en Ras Mohammed y una noche en el desierto.",
    keywords: "sharm el sheikh viaje, vacaciones en el mar rojo, snorkel en ras mohammed, desierto del sinaí, egipto playa y relax",
    crumb: "Mar Rojo, 5 días",
    title: "Retiro en el mar Rojo: Sharm el-Sheikh",
    subtitle: "Cinco días donde las montañas del Sinaí se encuentran con el agua más clara del hemisferio norte: arrecifes, veladas en el desierto y una ociosidad deliberada.",
    durationLabel: "5 días / 4 noches",
    startPoint: "Sharm el-Sheikh (aeropuerto u hotel)",
    summary: "El mar Rojo con intención: un día en barco privado por Ras Mohammed, una velada bajo las estrellas en el desierto del Sinaí y tiempo que se deja libre a propósito.",
    overview: "Sharm el-Sheikh ocupa el extremo de la península del Sinaí, donde las montañas del desierto se hunden en un agua tan clara que, desde la superficie, los arrecifes se leen como mapas. Es el gran respiro de Egipto, y así lo trata este itinerario. Dos días clave se organizan en privado: una jornada en barco por el Parque Nacional de Ras Mohammed, cuyas paredes de coral, en el punto donde se encuentran los golfos de Suez y Áqaba, figuran entre los mejores lugares del mundo para hacer esnórquel; y una velada en el desierto del Sinaí con té beduino, cena a la brasa y astronomía bajo algunos de los cielos más oscuros a los que se llega desde un resort. El resto queda sin programar, por principio. Funciona como escapada independiente o como capítulo final de un viaje más largo por Egipto: Luxor está a menos de una hora de vuelo.",
    itinerary: [
      {
        title: "Llegada al mar Rojo",
        items: [
          "Recibimiento privado en el aeropuerto y llegada al resort",
          "Presentación con una copa: la semana se organiza según sus preferencias",
        ],
      },
      {
        title: "Ras Mohammed en barco",
        items: [
          "Día completo en barco privado por el parque nacional",
          "Dos o tres paradas de esnórquel sobre paredes y jardines de coral",
          "Almuerzo en cubierta",
        ],
      },
      {
        title: "Día libre",
        items: [
          "Un día libre: bautismo de buceo, spa o simplemente la playa",
          "Paseo al anochecer por el Mercado Viejo de Sharm y la mezquita de Al Sahaba",
        ],
      },
      {
        title: "Velada en el desierto del Sinaí",
        items: [
          "A última hora de la tarde, en 4x4 hacia el interior del Sinaí",
          "Té beduino, cena al carbón y observación de estrellas lejos de las luces de los resorts",
        ],
      },
      {
        title: "Salida",
        items: [
          "Mañana libre y traslado privado al aeropuerto",
        ],
      },
    ],
    comfort: { sleep: "Un mismo resort del mar Rojo las cuatro noches" },
    faqs: [
      { q: "¿Cuándo está el mar lo bastante templado?", a: "Prácticamente siempre. El agua va de 21 °C en invierno a 28 °C a finales del verano; el esnórquel se practica todo el año, e incluso en enero se está cómodo con un neopreno corto, que se lleva a bordo." },
      { q: "¿Necesito saber bucear?", a: "No. Los arrecifes de Ras Mohammed llegan tan cerca de la superficie que con esnórquel se ve la mayor parte del espectáculo. Si quiere probar el buceo, organizamos un bautismo homologado en el arrecife de su propio resort." },
      { q: "¿Se puede combinar con los itinerarios por el Nilo?", a: "Perfectamente: así lo aprovecha la mayoría de nuestros viajeros. Luxor–Sharm es un vuelo corto, y cuatro días de mar Rojo después de una semana de templos es el orden más acertado que conocemos para Egipto." },
    ],
  },
  // ===== Dive the Red Sea =====
  {
    slug: "tour-red-sea-diving-4day",
    localeSlug: "buceo-mar-rojo-4-dias",
    metaTitle: "Buceo en el mar Rojo, 4 días desde Sharm | Kemet",
    metaDescription: "Cuatro inmersiones guiadas en barco en los dos mejores conjuntos de puntos del Sinaí, Ras Mohammed y Tirán, con un centro PADI que hemos verificado.",
    keywords: "buceo en el mar rojo, buceo en sharm el sheikh, bucear en ras mohammed, buceo estrecho de tirán, viaje de buceo egipto padi",
    crumb: "Buceo, 4 días",
    title: "Bucear en el mar Rojo",
    subtitle: "Cuatro días pensados para el tiempo bajo el agua: las paredes de Ras Mohammed, los arrecifes de deriva del estrecho de Tirán y barcos para grupos pequeños que salen temprano.",
    durationLabel: "4 días / 3 noches",
    startPoint: "Sharm el-Sheikh (aeropuerto u hotel)",
    summary: "Cuatro inmersiones guiadas desde barco en los dos mejores conjuntos de puntos de buceo del Sinaí, Ras Mohammed y Tirán, con un centro PADI que hemos verificado, tras una inmersión de chequeo en el arrecife del resort.",
    overview: "El norte del mar Rojo es una de las regiones de referencia del buceo mundial: más de 20 metros de visibilidad como norma, un agua que nunca llega a estar fría de verdad y paredes de arrecife que caen desde la profundidad del esnórquel hasta el azul. Este programa lo concentra en cuatro días sin recortar en seguridad ni en intervalos de superficie. Tras una inmersión de chequeo en el arrecife de su resort, dos días completos en barco cubren los dos conjuntos imprescindibles: el Parque Nacional de Ras Mohammed, donde los arrecifes Shark y Yolanda forman el doble punto de buceo más famoso del Sinaí, y los cuatro arrecifes con nombre propio del estrecho de Tirán, barridos por suaves corrientes de deriva y visitados por especies pelágicas. El buceo se hace con un centro PADI autorizado con el que trabajamos de forma continua; los grupos se mantienen reducidos, y los acompañantes que no bucean son bienvenidos a bordo con equipo de esnórquel.",
    itinerary: [
      {
        title: "Llegada e inmersión de chequeo",
        items: [
          "Recibimiento privado en el aeropuerto y llegada al resort",
          "Por la tarde, prueba del equipo e inmersión de chequeo en el arrecife del resort",
        ],
      },
      {
        title: "Día en barco en Ras Mohammed",
        items: [
          "Dos inmersiones guiadas: arrecifes Shark y Yolanda, si las condiciones lo permiten",
          "Almuerzo en cubierta y largos intervalos de superficie en los fondeaderos del parque",
        ],
      },
      {
        title: "Día en barco en el estrecho de Tirán",
        items: [
          "Dos inmersiones guiadas a la deriva en la cadena de arrecifes de Tirán",
          "Tercera inmersión opcional por la tarde, o regreso temprano para disfrutar del spa",
        ],
      },
      {
        title: "Mañana sin inmersiones y salida",
        items: [
          "Una mañana en superficie: el intervalo de 18–24 h sin volar ya está previsto",
          "Traslado privado al aeropuerto",
        ],
      },
    ],
    comfort: { sleep: "Un mismo resort del mar Rojo las tres noches" },
    faqs: [
      { q: "¿Qué titulación necesito?", a: "Con Open Water basta para todo lo programado; los puntos se bucean con perfiles de 18–30 m. Si no tiene titulación, díganoslo: los mismos cuatro días se convierten sin problema en un curso Open Water con el mismo centro." },
      { q: "¿Por qué la última mañana no hay inmersiones?", a: "Volar demasiado pronto después de bucear conlleva riesgo de enfermedad descompresiva. El itinerario respeta el intervalo estándar sin vuelo, de modo que su último día en barco nunca tenga que recortarse para llegar a un avión." },
      { q: "¿Qué veré realmente?", a: "En Ras Mohammed, densas paredes de coral blando, nubes de anthias, peces napoleón, tortugas y tiburones de arrecife; en las corrientes de Tirán, rayas águila y bancos de barracudas. El norte del mar Rojo recompensa a buceadores de cualquier nivel de experiencia." },
    ],
  },
  // ===== Luxor Immersion =====
  {
    slug: "tour-luxor-3day",
    localeSlug: "luxor-3-dias",
    metaTitle: "Luxor en 3 días, en privado: las dos orillas | Kemet",
    metaDescription: "Tres días en Luxor sin prisas: Karnak a la apertura, el Valle de los Reyes antes del calor, Hatshepsut y el templo de Luxor iluminado de noche.",
    keywords: "luxor en 3 días, qué ver en luxor, visita valle de los reyes, templo de karnak, viaje privado a luxor",
    crumb: "Luxor, 3 días",
    title: "Luxor a fondo",
    subtitle: "Tres días en el mayor museo al aire libre del mundo: las dos orillas vistas como merecen, con el templo iluminado de noche como eje.",
    durationLabel: "3 días / 2 noches",
    startPoint: "Luxor (aeropuerto, estación u hotel)",
    summary: "Luxor sin carreras: Karnak a la apertura, el Valle de los Reyes antes del calor, las terrazas de Hatshepsut y la Avenida de las Esfinges de noche.",
    overview: "A Luxor se le suele dedicar un único día frenético y, sin embargo, reúne una de las mayores concentraciones de monumentos antiguos del planeta. Esta escapada le devuelve el tiempo que le falta. El día de la orilla oriental empieza en Karnak a la apertura, una hora antes que los autocares, y vuelve de noche al templo de Luxor, iluminado a lo largo de la restaurada Avenida de las Esfinges: de noche es, sencillamente, otro monumento. El día de la orilla occidental desciende a tres tumbas reales elegidas por su color y por el flujo de visitantes, y sigue con las terrazas de Hatshepsut, excavadas en el acantilado, y los Colosos de Memnón. La última mañana es suya: un globo al amanecer sobre la necrópolis, el excelente Museo de Luxor o nada en absoluto. Se añade sin complicaciones al principio o al final de cualquier itinerario por El Cairo, en avión o en tren nocturno.",
    itinerary: [
      {
        title: "La orilla oriental y el templo de noche",
        items: [
          "Recibimiento a la llegada al aeropuerto o la estación de Luxor",
          "El complejo de templos de Karnak a la apertura, con su egiptólogo",
          "Por la noche: el templo de Luxor iluminado, entrando por la Avenida de las Esfinges",
        ],
      },
      {
        title: "La orilla occidental",
        items: [
          "Valle de los Reyes: tres tumbas antes del calor del día",
          "El templo funerario de Hatshepsut en Deir el-Bahari",
          "Los Colosos de Memnón y la aldea de los artesanos de Deir el-Medina (si hay tiempo)",
        ],
      },
      {
        title: "Su mañana en Luxor y salida",
        items: [
          "Globo aerostático opcional al amanecer, o la selecta colección del Museo de Luxor",
          "Traslado privado al aeropuerto o la estación",
        ],
      },
    ],
    comfort: { sleep: "Un mismo hotel en Luxor las dos noches", early: "Solo si elige el globo opcional al amanecer de la última mañana" },
    faqs: [
      { q: "¿Qué tumbas del Valle de los Reyes están incluidas?", a: "La entrada general cubre tres de las que estén abiertas en ese momento, y su guía le llevará a las mejor pintadas del día. Las de Tutankamón, Seti I y Ramsés V/VI tienen entrada aparte, que podemos gestionar con antelación." },
      { q: "¿Merece la pena la visita nocturna al templo de Luxor?", a: "Es la velada con mejor relación calidad-precio de Egipto. La iluminación recupera el color y la profundidad que borra el sol del mediodía, y la Avenida de las Esfinges iluminada de punta a punta es inolvidable." },
      { q: "¿Cómo lo combino con El Cairo?", a: "En avión (55 minutos) o en tren nocturno, en cualquiera de los dos sentidos. La mayoría de los viajeros hace primero El Cairo y usa esta escapada como capítulo del sur; nosotros ajustamos los traslados en un sentido u otro." },
    ],
  },
  // ===== Cairo VIP Short Stay =====
  {
    slug: "tour-cairo-vip-3day",
    localeSlug: "el-cairo-vip-3-dias",
    metaTitle: "El Cairo VIP en 3 días: pirámides y Gran Museo | Kemet",
    metaDescription: "Tres días en El Cairo sin fricciones: llegada por vía rápida, la meseta en privado a primera hora, el Gran Museo Egipcio y El Cairo islámico de noche.",
    keywords: "el cairo en 3 días, escala en el cairo, visita gran museo egipcio, el cairo con guía privado, asistencia vip aeropuerto el cairo",
    crumb: "El Cairo VIP",
    title: "Escapada VIP a El Cairo",
    subtitle: "Tres días sin fricciones: llegada por vía rápida, las pirámides y el Gran Museo Egipcio, y El Cairo medieval cuando ya se han ido los excursionistas.",
    durationLabel: "3 días / 2 noches",
    startPoint: "El Cairo (aeropuerto, asistencia VIP)",
    summary: "Lo esencial de El Cairo, con servicio de conserjería: inmigración por vía rápida, la meseta en privado por la mañana, el Gran Museo Egipcio y El Cairo islámico de noche, a la luz de los faroles.",
    overview: "Pensada para quienes pasan por El Cairo con poco tiempo y se niegan a vivirlo mal, esta estancia corta condensa lo esencial sin que nunca se sienta apretada. Le reciben nada más bajar del avión, con inmigración por vía rápida y gestión del equipaje. La mañana en Guiza empieza temprano y en privado; el Gran Museo Egipcio llega después, mientras la afluencia en la meseta alcanza su punto máximo. La última velada pertenece a El Cairo medieval en su mejor hora: la calle Al-Muizz y el Khan el-Khalili al anochecer, cuando los faroles toman el relevo a los grupos organizados. Un conductor y un egiptólogo le acompañan en todo momento, solo para usted, y el programa se adapta hora a hora según cómo se sienta realmente.",
    itinerary: [
      {
        title: "Llegada VIP y la Ciudadela",
        items: [
          "Recibimiento al bajar del avión, inmigración por vía rápida y traslado privado",
          "Tarde en la Ciudadela de Saladino y la mezquita de Mohamed Alí",
          "Puesta de sol sobre la ciudad antigua desde el parque Al-Azhar",
        ],
      },
      {
        title: "Guiza y el Gran Museo Egipcio",
        items: [
          "La meseta a la apertura: pirámides, panorámica y Esfinge",
          "Tras el almuerzo, la gran escalinata y las galerías de Tutankamón del Gran Museo Egipcio",
          "Noche libre; si lo desea, nos encargamos de reservarle restaurante",
        ],
      },
      {
        title: "El Cairo medieval y salida",
        items: [
          "El Museo Egipcio de Tahrir o El Cairo copto, a su elección",
          "La calle Al-Muizz y el Khan el-Khalili cuando se encienden los faroles",
          "Asistencia por vía rápida a la salida en el aeropuerto",
        ],
      },
    ],
    comfort: { sleep: "Un mismo hotel en El Cairo las dos noches" },
    faqs: [
      { q: "¿Qué incluye exactamente el servicio VIP en el aeropuerto?", a: "Le reciben en la puerta del avión o en la pasarela, le acompañan por un carril rápido de inmigración y su equipaje se lleva hasta el coche. A la salida, el mismo equipo se ocupa del check-in y del control de seguridad, a la inversa. El aeropuerto de El Cairo deja de ser un trámite pesado y pasa casi inadvertido." },
      { q: "¿Se puede adaptar el itinerario si llego tarde o con desfase horario?", a: "Por completo. El orden de arriba es el previsto, no un contrato: su guía reordena el programa según su energía, y no se pierde nada por intercambiar los días." },
      { q: "¿Bastan dos noches para El Cairo?", a: "Bastan para lo esencial bien hecho, que es lo que promete este itinerario. Si puede añadir una tercera noche, el día de Saqqara y Dahshur es la mejor ampliación." },
    ],
  },
  // ===== Alexandria Overnight =====
  {
    slug: "tour-alexandria-2day",
    localeSlug: "alejandria-2-dias-desde-el-cairo",
    metaTitle: "Alejandría, 2 días con noche desde El Cairo | Kemet",
    metaDescription: "Dos días mediterráneos: catacumbas, la Ciudadela sobre el lugar del Faro, la Biblioteca renacida y la velada que las excursiones de un día nunca ven.",
    keywords: "alejandría desde el cairo, alejandría en 2 días, dormir en alejandría, catacumbas de kom el shoqafa, biblioteca de alejandría",
    crumb: "Alejandría, 2 días",
    title: "Una noche en Alejandría",
    subtitle: "Dos días mediterráneos: las catacumbas, la Ciudadela sobre el emplazamiento del Faro, la Biblioteca renacida y una velada que las excursiones de un día nunca ven.",
    durationLabel: "2 días / 1 noche",
    startPoint: "El Cairo (recogida en el hotel)",
    summary: "Alejandría con la mitad que le faltaba: los lugares grecorromanos de día y, después, la Corniche al atardecer, pescado y marisco junto al agua y la luz de la mañana que las excursiones de un día nunca alcanzan.",
    overview: "En excursión de un día, Alejandría es una carrera que vale la pena; con una noche, es otra ciudad. Este viaje recorre como merece el circuito esencial —las Catacumbas de Kom el-Shoqafa, de tres niveles, la Columna de Pompeyo, la Ciudadela de Qaitbay, levantada exactamente sobre la huella del antiguo faro, y la Bibliotheca Alexandrina— y luego se queda para las horas que dan sentido a la ciudad: el paseo por la Corniche al atardecer, pescado y marisco elegidos al peso en un clásico junto al mar, y una mañana tranquila por los jardines del Palacio de Montaza y el Anfiteatro Romano antes de un regreso sin prisas a El Cairo. El ritmo mediterráneo es la clave: una noche aquí reajusta todo un itinerario por Egipto.",
    itinerary: [
      {
        title: "La ciudad antigua",
        items: [
          "Por la mañana, trayecto desde El Cairo por la carretera del desierto",
          "Catacumbas de Kom el-Shoqafa y Columna de Pompeyo",
          "La Ciudadela de Qaitbay y la Bibliotheca Alexandrina",
          "Atardecer en la Corniche y cena de pescado y marisco junto al mar",
        ],
      },
      {
        title: "Palacios, romanos y regreso",
        items: [
          "Los jardines del Palacio de Montaza con la brisa marina de la mañana",
          "El Anfiteatro Romano de Kom el-Dikka",
          "Regreso tranquilo, con llegada a El Cairo a última hora de la tarde",
        ],
      },
    ],
    comfort: { sleep: "Una noche en un hotel frente al mar en Alejandría", drives: "De El Cairo a Alejandría y vuelta, por carretera" },
    faqs: [
      { q: "¿Por qué pasar la noche en lugar de hacer la excursión de un día?", a: "El trayecto suma de cinco a seis horas entre ida y vuelta; en una excursión de un día, a Alejandría solo le queda el mediodía. Con una noche está allí al atardecer, para la cena y con la luz de la mañana —las tres mejores horas de la ciudad— por un coste adicional moderado." },
      { q: "¿Cuál es la mejor época para Alejandría?", a: "De abril a octubre, cuando el clima mediterráneo es precisamente el atractivo. En verano está 5–10 °C más fresca que El Cairo y se convierte en el refugio costero de los propios egipcios." },
      { q: "¿De verdad hay que probar el pescado?", a: "Sin ninguna duda. Usted elige el pescado al peso en el mostrador de hielo con la pesca del día, y llega a la mesa a la parrilla o frito, con guarniciones alejandrinas. Su guía sabe qué clásicos de la Corniche merecen su fama." },
    ],
  },
  // ===== Cairo to Luxor & Aswan =====
  {
    slug: "tour-3-day",
    localeSlug: "luxor-y-asuan-3-dias-vuelos-incluidos",
    metaTitle: "Luxor y Asuán en 3 días, vuelos incluidos | Kemet",
    metaDescription: "Tres días en el Alto Egipto desde El Cairo, con vuelos internos incluidos: Karnak, el Valle de los Reyes, la Presa Alta y el templo de File.",
    keywords: "luxor y asuán en 3 días, viaje corto alto egipto, el cairo a luxor en avión, karnak valle de los reyes file, egipto vuelos internos incluidos",
    crumb: "Luxor y Asuán",
    title: "De El Cairo a Luxor y Asuán",
    subtitle: "Tres días por los templos y las tumbas del Alto Egipto, con los vuelos internos incluidos en el precio.",
    durationLabel: "3 días / 2 noches",
    startPoint: "El Cairo (vuelos incluidos)",
    summary: "Un circuito rápido, con vuelos incluidos, por Luxor y Asuán —Karnak, el Valle de los Reyes, File y la Presa Alta—, con ida y vuelta desde El Cairo.",
    overview: "Cuando el tiempo escasea pero lo que atrae es el Alto Egipto, este circuito con vuelos incluidos ofrece los grandes lugares del sur en tres días bien aprovechados. Se vuela de El Cairo a Luxor para los templos de la orilla oriental y las tumbas reales de la occidental, se sigue por carretera hasta Asuán para la Presa Alta y el templo insular de File, y se regresa en avión a El Cairo. Los vuelos internos están incluidos, así que las largas distancias desaparecen y los días se llenan de monumentos en lugar de traslados.",
    itinerary: [
      {
        title: "Vuelo a Luxor: la orilla oriental",
        items: [
          "Vuelo de mañana de El Cairo a Luxor, con recibimiento a la llegada",
          "El complejo de templos de Karnak",
          "El templo de Luxor y noche en Luxor",
        ],
      },
      {
        title: "La orilla occidental y rumbo a Asuán",
        items: [
          "El Valle de los Reyes y el templo funerario de Hatshepsut",
          "Los Colosos de Memnón",
          "Por carretera a Asuán junto al Nilo, y noche allí",
        ],
      },
      {
        title: "Asuán y vuelo a El Cairo",
        items: [
          "La Presa Alta de Asuán y el Obelisco Inacabado",
          "El templo insular de File, en lancha a motor",
          "Vuelo de tarde de regreso a El Cairo",
        ],
      },
    ],
    comfort: { sleep: "Un hotel en Luxor y después otro en Asuán", drives: "De Luxor a Asuán por carretera" },
    faqs: [
      { q: "¿De verdad están incluidos los vuelos internos?", a: "Sí: tanto el vuelo El Cairo–Luxor como el Asuán–El Cairo forman parte del precio. Usted solo se ocupa de sus vuelos internacionales de ida y vuelta a El Cairo." },
      { q: "¿No son tres días demasiado apresurados?", a: "Es un ritmo ágil, pero bien ordenado: los vuelos eliminan los largos traslados por carretera, de modo que cada día se pasa en los monumentos y no viajando entre ellos." },
      { q: "¿Puedo añadir Abu Simbel desde Asuán?", a: "Sí, como extra opcional, en un vuelo temprano o en coche privado. Añade unas horas a la mañana en Asuán, así que lo planificamos con antelación." },
    ],
  },
  // ===== Fayoum Oasis =====
  {
    slug: "tour-fayoum",
    localeSlug: "excursion-al-oasis-del-fayum",
    metaTitle: "Oasis del Fayum, excursión privada de un día | Kemet",
    metaDescription: "El lago Qarun, las cascadas de Wadi el-Rayan, las ballenas fósiles de Wadi al-Hitan y la aldea alfarera de Tunis: la otra cara de Egipto, verde y salvaje.",
    keywords: "excursión al fayum, oasis de el fayum, wadi el rayan, valle de las ballenas wadi al hitan, lago qarun, excursiones desde el cairo",
    crumb: "Oasis del Fayum",
    title: "El oasis del Fayum",
    subtitle: "Un día completo en el oasis verde al suroeste de El Cairo: lagos, cascadas en el desierto, ballenas fósiles y una aldea de alfareros.",
    durationLabel: "Día completo (unas 10 horas)",
    startPoint: "Hotel en El Cairo o Guiza",
    summary: "El lago Qarun, las cascadas y dunas de Wadi el-Rayan, las ballenas fósiles de Wadi al-Hitan y los alfareros de la aldea de Tunis: la otra mitad de Egipto, verde y salvaje.",
    overview: "A hora y media al suroeste de El Cairo, la depresión del Fayum cambia los monumentos por el paisaje: un gran lago salado, cascadas de agua dulce en pleno desierto, un valle de ballenas fosilizadas declarado Patrimonio Mundial por la UNESCO y una aldea de alfareros en una ladera. Este día completo supone un cambio total de registro respecto a los templos: horizontes amplios, aves, dunas y un almuerzo de pescado junto al lago. El viaje es privado, con su guía y su conductor durante todo el día.",
    itinerary: [
      {
        title: "El lago Qarun",
        text: "Se empieza en la orilla del lago Qarun, el antiguo lago Moeris, donde se reúnen las aves migratorias y las viejas barcas de pesca bordean el agua. Un primer contacto con el oasis antes de adentrarse en el desierto.",
      },
      {
        title: "Las cascadas de Wadi el-Rayan",
        text: "Las mayores cascadas de Egipto, donde las aguas de los dos lagos de Rayan se derraman entre dunas. Hay tiempo para recorrer la orilla y contemplar un paisaje que no se parece en nada al valle del Nilo.",
      },
      {
        title: "El Valle de las Ballenas (Wadi al-Hitan)",
        text: "Un lugar Patrimonio Mundial de la UNESCO que conserva esqueletos de ballenas primitivas de 40 millones de años, allí donde un día se extendía un mar antiguo. Un museo al aire libre del tiempo profundo, entre la arena.",
      },
      {
        title: "El Lago Mágico y el monte Mudawara",
        text: "El llamado Lago Mágico, alimentado por manantiales minerales y cuyo color cambia con la luz, al pie de las dunas de Mudawara: un lugar muy apreciado para el sandboard y para un momento de quietud.",
      },
      {
        title: "La aldea alfarera de Tunis y almuerzo junto al lago",
        text: "Se termina en Tunis, la aldea en la ladera famosa por sus alfareros y sus talleres, y después llega un almuerzo tranquilo de pescado junto al lago antes de regresar a El Cairo.",
      },
    ],
    faqs: [
      { q: "¿El Fayum es adecuado para familias?", a: "Sí: la mezcla de lagos, dunas y fósiles atrae a todas las edades. El terreno es fácil, con paseos cortos y no largas caminatas." },
      { q: "¿Qué ropa conviene llevar y qué hay que traer?", a: "Calzado cómodo, protección solar y una prenda ligera para la brisa del lago. Los tramos de desierto pueden tener polvo, así que las gafas de sol ayudan." },
      { q: "¿A qué distancia está de El Cairo?", a: "Entre 90 minutos y dos horas en cada sentido en vehículo privado, según su hotel y el tráfico para salir de la ciudad." },
    ],
  },
  // ===== Giza & the Grand Museum =====
  {
    slug: "tour-giza-museum",
    localeSlug: "piramides-de-giza-y-gran-museo-egipcio",
    metaTitle: "Guiza y el Gran Museo Egipcio, día privado | Kemet",
    metaDescription: "La Gran Pirámide, la panorámica de las tres pirámides, el Templo del Valle y la Esfinge, y después el nuevo Gran Museo Egipcio, justo al lado.",
    keywords: "visita gran museo egipcio, pirámides de giza y gran museo egipcio, excursión pirámides de giza, gem el cairo, tesoro de tutankamón",
    crumb: "Guiza y Gran Museo",
    title: "Guiza y el Gran Museo",
    subtitle: "Las pirámides y la Esfinge por la mañana, el Gran Museo Egipcio por la tarde: la antigua maravilla y la nueva, en un solo día.",
    durationLabel: "Día completo (unas 8 horas)",
    startPoint: "Hotel en El Cairo o Guiza",
    summary: "La Gran Pirámide, la panorámica de las tres pirámides, el Templo del Valle y la Esfinge, y después el inmenso y nuevo Gran Museo Egipcio, junto a ellas.",
    overview: "Este día pone la maravilla más antigua del mundo junto al museo más nuevo, construido para albergar sus tesoros. La mañana pertenece a la meseta de Guiza: las pirámides de Keops, Kefrén y Micerinos, el mirador panorámico y la Gran Esfinge, que custodia su templo del valle. La tarde pasa al Gran Museo Egipcio, el mayor museo arqueológico del mundo, cuyas galerías y gran escalinata reúnen por fin al completo la colección de Tutankamón. Guía y traslados privados durante todo el día.",
    itinerary: [
      {
        title: "La Gran Pirámide de Keops",
        text: "Al pie de la única maravilla del mundo antiguo que sigue en pie, la pirámide de Keops, descubrirá cómo se levantó. La entrada a las cámaras interiores es posible como extra opcional.",
      },
      {
        title: "Kefrén, Micerinos y la panorámica",
        text: "Se continúa hacia las pirámides de Kefrén y Micerinos y el mirador panorámico donde las tres se alinean sobre el desierto: la imagen clásica de Guiza.",
      },
      {
        title: "El Templo del Valle y la Gran Esfinge",
        text: "Se recorre el Templo del Valle de Kefrén, construido en granito, hasta el pie de la Gran Esfinge, el guardián con cuerpo de león tallado en la roca viva de la meseta.",
      },
      {
        title: "Gran Museo Egipcio (GEM)",
        text: "Se cruza al Gran Museo Egipcio, junto a la meseta: su gran escalinata poblada de estatuas y las galerías completas de Tutankamón, la colección estrella del Egipto moderno.",
      },
    ],
    faqs: [
      { q: "¿Podemos entrar en la Gran Pirámide?", a: "Sí, como extra opcional. Cada día se vende un número limitado de entradas para las cámaras interiores; podemos conseguirle una a petición, según disponibilidad." },
      { q: "¿Está abierto por completo el Gran Museo Egipcio?", a: "Las galerías principales, la gran escalinata y la colección de Tutankamón están abiertas al público. Su guía se centrará en lo más destacado para que la tarde nunca resulte apresurada." },
      { q: "¿Cuánto se camina en este día?", a: "Una cantidad moderada, por la meseta y por las galerías del museo. Vamos a su ritmo, con descansos a la sombra." },
      { q: "¿Podemos ver las galerías de Tutankamón en privado?", a: "Sí, como extra opcional: las galerías de Tutankamón se abren solo para su grupo durante una hora y media, sin ningún otro visitante entre el tesoro del rey niño. Indíquelo en su consulta para que pueda organizarse en su fecha." },
      { q: "¿Podemos recorrer la meseta en carrito de golf?", a: "Sí, como extra opcional privado. Un carrito de golf solo para su grupo le lleva por la meseta en lugar de recorrer a pie los largos tramos entre los monumentos: algo que se agradece con niños pequeños, para viajeros de más edad o con el calor del mediodía." },
    ],
  },
  // ===== Saqqara, Memphis & Dahshur =====
  {
    slug: "tour-saqqara",
    localeSlug: "saqqara-menfis-y-dahshur",
    metaTitle: "Saqqara, Menfis y Dahshur, día privado | Kemet",
    metaDescription: "La Pirámide Escalonada de Zoser, las ruinas de Menfis y las pirámides Acodada y Roja de Dahshur: la historia de cómo se inventó la pirámide.",
    keywords: "excursión a saqqara, pirámide escalonada de zoser, pirámide roja dahshur, menfis egipto, saqqara y dahshur desde el cairo",
    crumb: "Saqqara, Menfis y Dahshur",
    title: "Saqqara, Menfis y Dahshur",
    subtitle: "La cuna de la pirámide: de la primera pirámide escalonada, la de Zoser, a las grandes tumbas geométricas de Dahshur.",
    durationLabel: "Día completo (unas 8 horas)",
    startPoint: "Hotel en El Cairo o Guiza",
    summary: "La Pirámide Escalonada de Zoser, las ruinas al aire libre de Menfis y las pirámides Acodada y Roja de Dahshur: la historia de cómo se inventó la pirámide.",
    overview: "Antes de Guiza estuvo Saqqara. Este día sigue la invención de la pirámide a través de tres yacimientos al sur de El Cairo, a menudo más tranquilos que Guiza y, por eso mismo, con más atmósfera. Se empieza en la Pirámide Escalonada de Zoser, el edificio monumental de piedra más antiguo del mundo; se recorren los restos al aire libre de Menfis, la primera capital, y se termina en Dahshur, donde las pirámides Acodada y Roja muestran el salto técnico hacia la forma de pirámide verdadera. Privado de principio a fin.",
    itinerary: [
      {
        title: "La Pirámide Escalonada de Zoser",
        text: "La joya de Saqqara: la pirámide escalonada que Imhotep diseñó para el rey Zoser, el gran monumento de piedra más antiguo del mundo, en medio de su vasto recinto funerario.",
      },
      {
        title: "Menfis y el coloso de Ramsés II",
        text: "El museo al aire libre de Menfis, antigua capital del Egipto unificado, con un coloso yacente de Ramsés II y una esfinge de alabastro finamente tallada.",
      },
      {
        title: "La Pirámide Acodada de Dahshur",
        text: "En Dahshur, la Pirámide Acodada de Seneferu, cuyo cambio de ángulo deja constancia del momento en que los antiguos ingenieros corrigieron el rumbo en plena obra.",
      },
      {
        title: "La Pirámide Roja",
        text: "Muy cerca, la Pirámide Roja, la primera pirámide verdadera lograda con éxito, en la que se puede entrar para descender a sus cámaras con falsa bóveda.",
      },
    ],
    faqs: [
      { q: "¿Cómo se compara Saqqara con Guiza?", a: "Saqqara es más antigua y suele estar más tranquila. Cuenta cómo evolucionaron las pirámides, desde la forma escalonada de Zoser hasta las pirámides verdaderas de Dahshur: el complemento perfecto de un día en Guiza." },
      { q: "¿Podemos entrar en las pirámides de Dahshur?", a: "Sí: la Pirámide Roja suele estar abierta al interior, con un pasadizo bajo, que se recorre agachándose, hasta las cámaras funerarias. Su guía le indicará ese mismo día." },
      { q: "¿Es un buen primer día en El Cairo?", a: "Es uno excelente: menos gente y un hilo narrativo claro que enriquece la visita posterior a Guiza." },
    ],
  },
  // ===== Religious Cairo & the Citadel =====
  {
    slug: "tour-religious-citadel",
    localeSlug: "el-cairo-religioso-y-la-ciudadela",
    metaTitle: "El Cairo religioso y la Ciudadela, día privado | Kemet",
    metaDescription: "La Iglesia Colgante, la sinagoga de Ben Ezra y Abu Serga en el Viejo Cairo, y después la Ciudadela de Saladino y la mezquita de Mohamed Alí.",
    keywords: "el cairo copto, iglesia colgante el cairo, ciudadela de saladino, mezquita de mohamed alí, sinagoga ben ezra",
    crumb: "El Cairo religioso",
    title: "El Cairo religioso y la Ciudadela",
    subtitle: "Las religiones de El Cairo en un día: iglesias coptas, una antigua sinagoga y la gran Ciudadela coronada por su mezquita.",
    durationLabel: "Día completo (unas 8 horas)",
    startPoint: "Hotel en El Cairo o Guiza",
    summary: "La Iglesia Colgante, la sinagoga de Ben Ezra y Abu Serga en el Viejo Cairo, y después la Ciudadela de Saladino y la mezquita de alabastro de Mohamed Alí.",
    overview: "El patrimonio religioso de El Cairo superpone historias coptas, judías e islámicas en unos pocos kilómetros cuadrados. Este día va de las callejuelas del Viejo Cairo —la Iglesia Colgante, la antigua sinagoga de Ben Ezra y la iglesia de Abu Serga— a la Ciudadela medieval de Saladino, coronada por la mezquita de alabastro de Mohamed Alí y sus amplias vistas sobre la ciudad. Un día reflexivo y lleno de atmósfera, guiado por su egiptólogo.",
    itinerary: [
      {
        title: "La Iglesia Colgante",
        text: "Se empieza en El Cairo copto, en la Iglesia Colgante, suspendida sobre una torre de una puerta romana: una de las iglesias más antiguas de Egipto, con sus delicadas celosías de madera y sus iconos.",
      },
      {
        title: "La sinagoga de Ben Ezra y Abu Serga",
        text: "Por estrechas callejuelas se llega a la sinagoga de Ben Ezra y a la iglesia de Abu Serga, que según la tradición señala el lugar donde se refugió la Sagrada Familia en Egipto.",
      },
      {
        title: "La Ciudadela de Saladino",
        text: "Se sube a la Ciudadela de Saladino, la fortaleza medieval que dominó El Cairo durante siglos, con panorámicas que, en un día despejado, alcanzan las pirámides.",
      },
      {
        title: "La mezquita de Mohamed Alí",
        text: "Se termina dentro de la mezquita de alabastro de Mohamed Alí, el emblema de estilo otomano cuyas cúpulas definen el perfil de El Cairo.",
      },
    ],
    faqs: [
      { q: "¿Hay alguna norma de vestimenta?", a: "Sí: en los lugares religiosos se exige ropa discreta, con hombros y rodillas cubiertos, y en la mezquita hay que descalzarse. Lleve un pañuelo; ese día le iremos indicando." },
      { q: "¿Están cerca unos lugares de otros?", a: "Los lugares de El Cairo copto están a poca distancia a pie unos de otros; la Ciudadela queda a un breve trayecto en vehículo privado, así que el día transcurre con comodidad." },
      { q: "¿Estarán abiertos los lugares?", a: "Planificamos en función de los horarios de oración y de cualquier cierre para que la visita discurra sin contratiempos. Por lo general se permite hacer fotos, con algunas restricciones en los interiores." },
    ],
  },
  // ===== Cairo Museums =====
  {
    slug: "tour-cairo-museums",
    localeSlug: "museos-de-el-cairo",
    metaTitle: "Museos de El Cairo y las Momias Reales, en privado | Kemet",
    metaDescription: "Los tesoros del Museo Egipcio de Tahrir y, después, el Museo Nacional de la Civilización Egipcia y su Sala de las Momias Reales.",
    keywords: "museo egipcio el cairo, museo nacional de la civilización egipcia, momias reales el cairo, museo egipcio tahrir, museos de el cairo",
    crumb: "Museos de El Cairo",
    title: "Los museos de El Cairo",
    subtitle: "Dos grandes colecciones en un día: el histórico Museo Egipcio y el Museo Nacional de la Civilización Egipcia, con las Momias Reales.",
    durationLabel: "Día completo (unas 7 horas)",
    startPoint: "Hotel en El Cairo o Guiza",
    summary: "Los tesoros del Museo Egipcio de Tahrir y, después, el Museo Nacional de la Civilización Egipcia y su Sala de las Momias Reales.",
    overview: "Un día para quienes aman los objetos en sí mismos. Se empieza en el legendario Museo Egipcio de Tahrir, cuyas salas centenarias guardan la mayor concentración de tesoros faraónicos del mundo, y se pasa después al moderno Museo Nacional de la Civilización Egipcia (NMEC), donde la gran Sala de las Momias Reales presenta a los reyes y reinas del Imperio Nuevo en galerías silenciosas y climatizadas. Un día para entendidos, narrado por su egiptólogo.",
    itinerary: [
      {
        title: "Museo Egipcio, Tahrir",
        text: "El gran museo histórico de la plaza Tahrir: estatuas, sarcófagos, papiros y el oro del Imperio Nuevo, recorridos con su guía de una pieza destacada a la siguiente.",
      },
      {
        title: "Museo Nacional de la Civilización Egipcia",
        text: "Se cruza la ciudad hasta el NMEC, en Fustat, un museo moderno que recorre Egipto desde la prehistoria hasta hoy en un único y amplio relato.",
      },
      {
        title: "La Sala de las Momias Reales",
        text: "Se desciende a la penumbra de la Sala de las Momias Reales, donde los cuerpos conservados de faraones como Ramsés II y Hatshepsut reposan expuestos con dignidad.",
      },
    ],
    faqs: [
      { q: "¿Está incluida la Sala de las Momias Reales?", a: "Sí: la Sala de las Momias Reales forma parte de la visita. La cubre la entrada del NMEC que, como todas las entradas de nuestras excursiones de un día, se paga a la tarifa oficial de taquilla, sin ningún recargo. Es un espacio silencioso y respetuoso, y en su interior no se permite hacer fotos." },
      { q: "¿En qué se diferencian los dos museos?", a: "El Museo Egipcio es denso, histórico y repleto de tesoros; el NMEC es moderno y narrativo, con las momias como pieza central. Juntos ofrecen una imagen completa." },
      { q: "¿No es demasiado para un solo día?", a: "No, si su guía selecciona lo más destacado. Nos centramos en las piezas esenciales de cada museo, con una pausa entre uno y otro." },
    ],
  },
  // ===== Alexandria Sightseeing =====
  {
    slug: "tour-alexandria",
    localeSlug: "excursion-a-alejandria-desde-el-cairo",
    metaTitle: "Alejandría, excursión de un día desde El Cairo | Kemet",
    metaDescription: "Las Catacumbas de Kom el-Shoqafa, la Columna de Pompeyo, la Ciudadela de Qaitbay sobre el Faro y la Bibliotheca Alexandrina, con almuerzo de pescado.",
    keywords: "excursión a alejandría, alejandría desde el cairo, qué ver en alejandría, ciudadela de qaitbay, biblioteca de alejandría",
    crumb: "Alejandría en un día",
    title: "Alejandría en un día",
    subtitle: "Un día completo en el Mediterráneo: catacumbas, una columna romana, una ciudadela rodeada de mar y la gran biblioteca moderna.",
    durationLabel: "Día completo (unas 11 horas)",
    startPoint: "Hotel en El Cairo o Guiza",
    summary: "Las Catacumbas de Kom el-Shoqafa, la Columna de Pompeyo, la Ciudadela de Qaitbay sobre el antiguo emplazamiento del Faro y la Bibliotheca Alexandrina, con un almuerzo de pescado y marisco.",
    overview: "La ciudad de Alejandro lleva con ligereza su pasado grecorromano a lo largo de la curva de la Corniche, frente al Mediterráneo. Este día completo abarca las Catacumbas subterráneas de Kom el-Shoqafa, la imponente Columna de Pompeyo, la Ciudadela de Qaitbay, construida sobre los cimientos del legendario Faro, y la altísima y moderna Bibliotheca Alexandrina, heredera de la antigua Biblioteca. Un almuerzo de pescado y marisco frente al mar forma parte de la experiencia. Guía y traslados privados desde El Cairo.",
    itinerary: [
      {
        title: "Catacumbas de Kom el-Shoqafa",
        text: "Se desciende a las Catacumbas de Kom el-Shoqafa, una necrópolis romana de varios niveles donde los estilos egipcio y clásico se funden en la piedra tallada: una de las maravillas más singulares de la Antigüedad.",
      },
      {
        title: "La Columna de Pompeyo",
        text: "Visita a la Columna de Pompeyo, la gran columna triunfal romana que se alza entre las ruinas del Serapeum, flanqueada por esfinges de granito.",
      },
      {
        title: "La Ciudadela de Qaitbay",
        text: "Paseo por las murallas junto al mar de la Ciudadela de Qaitbay, levantada en el lugar exacto donde se alzaba el Faro, una de las maravillas del mundo antiguo.",
      },
      {
        title: "Bibliotheca Alexandrina y almuerzo de pescado",
        text: "Tras un almuerzo tranquilo de pescado y marisco frente al Mediterráneo, se termina en la espectacular y moderna Bibliotheca Alexandrina, la Biblioteca de Alejandría renacida.",
      },
    ],
    faqs: [
      { q: "¿Cuánto dura el trayecto desde El Cairo?", a: "Entre dos horas y media y tres horas en cada sentido por la carretera del desierto; por eso es una excursión de día completo larga, pero que merece la pena." },
      { q: "¿Se puede ir en tren?", a: "Sí: si lo prefiere, podemos organizar el viaje en tren y recibirle en Alejandría con su guía y su vehículo privado. Solo tiene que pedirlo." },
      { q: "¿Merece la pena la Bibliotheca Alexandrina?", a: "Mucho: su arquitectura ya impresiona por sí sola, y el edificio se concibió como un eco deliberado de la antigua Biblioteca que hizo famosa la ciudad." },
    ],
  },
  // ===== Giza Pyramids & Sphinx =====
  {
    slug: "tour-giza-sphinx",
    localeSlug: "piramides-de-giza-y-esfinge-medio-dia",
    metaTitle: "Pirámides de Guiza y Esfinge, medio día privado | Kemet",
    metaDescription: "La Gran Pirámide, las pirámides de Kefrén y Micerinos, el mirador panorámico y el Templo del Valle con la Gran Esfinge: Guiza en una mañana.",
    keywords: "excursión pirámides de giza, visita pirámides de giza y esfinge, pirámides de giza medio día, gran pirámide de keops, esfinge de giza",
    crumb: "Pirámides de Guiza",
    title: "Pirámides de Guiza y Esfinge",
    subtitle: "Medio día concentrado entre las tres grandes pirámides y la Esfinge, con el clásico mirador panorámico.",
    durationLabel: "Medio día (unas 5 horas)",
    startPoint: "Hotel en El Cairo o Guiza",
    summary: "La Gran Pirámide, las pirámides de Kefrén y Micerinos, el mirador panorámico y el Templo del Valle con la Gran Esfinge: Guiza en una mañana.",
    overview: "Para quienes tienen poco tiempo o solo un hueco el día de llegada, este medio día ofrece la meseta de Guiza sin relleno. Se ven la Gran Pirámide de Keops, las vecinas pirámides de Kefrén y Micerinos, el mirador panorámico donde las tres se alinean y el Templo del Valle que conduce a la Gran Esfinge. Con guía privado, la breve visita da mucho de sí, y combina muy bien con una tarde libre o con el Gran Museo Egipcio.",
    itinerary: [
      {
        title: "La Gran Pirámide de Keops",
        text: "Se empieza al pie de la Gran Pirámide, la última maravilla del mundo antiguo que sigue en pie, mientras su guía le explica cómo y por qué se construyó.",
      },
      {
        title: "Kefrén y Micerinos",
        text: "Se continúa hacia la pirámide de Kefrén, que aún conserva en la cúspide parte de su revestimiento original, y la más pequeña de Micerinos.",
      },
      {
        title: "El mirador panorámico",
        text: "Una pausa en el mirador del desierto donde se alinean las tres pirámides, la fotografía clásica de Guiza, con paseos opcionales en camello o a caballo muy cerca.",
      },
      {
        title: "El Templo del Valle y la Gran Esfinge",
        text: "Se termina en el Templo del Valle, de granito, y en la Gran Esfinge, el colosal guardián tallado en la roca madre de la meseta.",
      },
    ],
    faqs: [
      { q: "¿Por qué elegir el medio día en lugar del día completo?", a: "Es ideal el día de llegada o de salida, o cuando quiere ver las pirámides sin un museo. Si desea también el Gran Museo Egipcio, elija nuestra excursión de día completo Guiza y el Gran Museo." },
      { q: "¿Puedo montar en camello en las pirámides?", a: "Sí: en la meseta hay paseos en camello y a caballo como extra opcional. Su guía le ayudará a acordar un precio justo ese mismo día." },
      { q: "¿Podemos entrar en una pirámide?", a: "La entrada al interior está disponible como extra opcional, en la Gran Pirámide o en una de las pirámides menores, según el cupo diario de entradas." },
      { q: "¿Podemos recorrer la meseta en carrito de golf?", a: "Sí, como extra opcional privado. Un carrito de golf solo para su grupo le lleva por la meseta en lugar de recorrer a pie los largos tramos entre los monumentos: algo que se agradece con niños pequeños, para viajeros de más edad o con el calor del mediodía." },
    ],
  },
  // ===== Abu Simbel Private Excursion =====
  {
    slug: "tour-abu-simbel",
    localeSlug: "abu-simbel-desde-asuan",
    metaTitle: "Abu Simbel desde Asuán, excursión privada | Kemet",
    metaDescription: "Los colosales templos de Ramsés II, excavados en una montaña de Nubia, trasladados bloque a bloque por encima del lago y aún alineados con el sol.",
    keywords: "excursión a abu simbel, abu simbel desde asuán, templos de abu simbel, festival del sol abu simbel, templo de nefertari",
    crumb: "Abu Simbel",
    title: "Excursión privada a Abu Simbel",
    subtitle: "Los templos de montaña de Ramsés II sobre el lago Nasser: una carretera del desierto al amanecer, dos santuarios excavados en la roca y de vuelta en Asuán para almorzar.",
    durationLabel: "Día completo (unas 8 horas, desde Asuán)",
    startPoint: "Hotel o barco de crucero en Asuán",
    summary: "Los colosales templos rupestres de Ramsés II: excavados en una ladera de Nubia, trasladados bloque a bloque por encima de las aguas crecientes del lago y todavía alineados con el sol.",
    overview: "Abu Simbel es lo imprescindible del extremo sur: dos templos excavados directamente en una montaña de arenisca por Ramsés II hacia el 1264 a. C., con cuatro colosos sentados de veinte metros de altura en la fachada. Cuando el lago Nasser creció tras la Presa Alta en la década de 1960, el rescate de la UNESCO cortó todo el conjunto en mil bloques y lo reconstruyó sesenta y cinco metros más arriba: una hazaña de ingeniería casi tan notable como el original. Esta excursión privada se hace a la manera clásica: salida de Asuán antes del amanecer a través del desierto abierto, llegada cuando la primera luz toca los colosos, tiempo sin prisa en el interior del Gran Templo y del santuario menor de Nefertari con su egiptólogo, y regreso a Asuán a primera hora de la tarde. Dos veces al año, el 22 de febrero y el 22 de octubre, el sol naciente llega hasta el santuario más interior: pregúntenos cómo hacer coincidir sus fechas.",
    itinerary: [
      {
        title: "La carretera del desierto al amanecer",
        text: "Salida de Asuán hacia las 4 de la madrugada en vehículo privado, cruzando 280 km de desierto abierto mientras clarea el cielo: un trayecto con su propia belleza austera, con café incluido.",
      },
      {
        title: "El Gran Templo de Ramsés II",
        text: "Ante los cuatro colosos sentados, y después al interior, por salas de pilares osiríacos, hasta el santuario donde se sientan cuatro dioses, orientado para que el sol los alcance solo dos mañanas al año.",
      },
      {
        title: "El templo de Nefertari",
        text: "El templo menor que Ramsés dedicó a su reina y a la diosa Hathor: uno de los poquísimos templos egipcios donde las estatuas de una reina tienen la misma escala que las del rey.",
      },
      {
        title: "Regreso a Asuán",
        text: "De vuelta a través del desierto para llegar a Asuán a primera hora de la tarde, a tiempo para el almuerzo, la salida de su crucero o una falúa a la hora dorada.",
      },
    ],
    faqs: [
      { q: "¿Por qué el día empieza a las 4 de la madrugada?", a: "Por tres razones: la carretera del desierto funciona en franjas horarias organizadas, los templos están más vacíos y frescos a la hora de apertura, y volver a primera hora de la tarde mantiene intacto su día en Asuán, o el horario de su crucero." },
      { q: "¿Se puede ir en avión en lugar de por carretera?", a: "Sí: EgyptAir opera un vuelo corto de 45 minutos con horarios limitados, que reduce la ida y vuelta a unas cinco horas. Las plazas se agotan pronto; indíquelo al reservar y le presupuestaremos las dos opciones." },
      { q: "¿Qué es el Festival del Sol?", a: "El 22 de febrero y el 22 de octubre, el sol naciente penetra 60 metros en el Gran Templo e ilumina a los dioses sentados del santuario: la alineación que los arquitectos de Ramsés incorporaron hace tres mil años. Visitarlo en esas fechas exige planificarlo con meses de antelación; lo organizamos a petición." },
    ],
  },
];
