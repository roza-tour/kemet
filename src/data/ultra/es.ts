import type { UltraText } from "./types";

export const es: UltraText = {
  metaTitle: "Viajes de ultra lujo a Egipto — cuatro viajes privados | Kemet",
  metaDescription:
    "Kemet Ultra: la Gran Pirámide abierta solo para ustedes, cena dentro de Karnak, dahabiya o yate privados, las mejores suites. De 7 a 15 días, precios claros.",
  keywords:
    "viaje ultra lujo egipto, viaje privado de lujo egipto, apertura privada gran pirámide, cena templo de karnak, dahabiya chárter privado, yate privado mar rojo, mena house suite, old cataract asuán, oberoi philae",
  crumb: "Kemet Ultra",

  heroTag: "Kemet Ultra · por encargo privado",
  h1: ["Egipto, abierto", "solo para ustedes"],
  lede:
    "Cuatro viajes privados en lo más alto del mercado egipcio: la Gran Pirámide abierta para su grupo, una cena dentro de Karnak cuando ya han cerrado las puertas, una dahabiya o un yate sin otros huéspedes y los grandes hoteles en sus mejores habitaciones. Con precios a la vista, y cada elemento confirmado por escrito antes de pagar nada.",
  ctaPrimary: "Hablemos en privado",
  ctaQuiet: "o envíe una consulta confidencial",

  signaturesOverline: "Las firmas",
  signatures: [
    ["La Gran Pirámide, a solas", "dos horas dentro, sin ningún otro visitante"],
    ["Cena dentro de Karnak", "el templo abierto de noche para su grupo"],
    ["El Nilo, fletado", "una dahabiya propia, o el Oberoi Philae en suite"],
    ["El mar Rojo, en yate", "un yate con tripulación entre los arrecifes de Giftun"],
    ["El cielo, en privado", "avión privado a Abu Simbel y a la costa"],
  ],

  question: "¿Qué es Kemet Ultra?",
  answer: ({ from2, to2, from4 }) =>
    `Kemet Ultra es el nivel más alto de Kemet: cuatro viajes por Egipto totalmente privados, de 7 a 15 días, con la Gran Pirámide abierta solo para su grupo, cena dentro de Karnak tras el cierre, una dahabiya o un yate fletados y suites en el Mena House, el Old Cataract y los Oberoi. Para dos, de ${from2} a ${to2} por persona; para cuatro, desde ${from4}.`,

  glanceOverline: "De un vistazo",
  glanceTitle: "Elija su viaje",

  journeysOverline: "Los viajes",
  journeysTitle: ["Cuatro maneras de vivir Egipto", "a este nivel"],

  labels: {
    duration: (d, n) => `${d} días / ${n} noches`,
    from: "Desde",
    perPersonTwo: "por persona, para dos",
    perPersonFour: (p) => `${p} por persona para cuatro`,
    stays: "Dónde se alojan",
    nights: (n) => (n === 1 ? "1 noche" : `${n} noches`),
    view: "Ver el viaje",
    dayByDay: "Día a día",
    day: "Día",
    enquire: (t) => `Consultar ${t}`,
    priceNote: (peak) =>
      `Precios en euros, por persona, de octubre de 2026 a septiembre de 2027, e incluyen todo lo indicado en esta página. No incluyen vuelos internacionales ni propinas. Las semanas de mayor demanda — del 20 de diciembre al 5 de enero y la Semana Santa — llevan un suplemento del ${peak} %.`,
  },

  place: { giza: "Guiza", cairo: "El Cairo", luxor: "Luxor, orilla oeste", aswan: "Asuán", nile: "En el Nilo", redsea: "Mar Rojo" },
  room: {
    pyramidSuite: "Suite con vistas a las pirámides",
    nileSuite: "Suite con vistas al Nilo",
    palaceWing: "Ala histórica Palace, vistas al Nilo",
    suite: "Suite",
    charter: "Chárter completo — todo el barco",
    cruiseSuite: "Suite de lujo",
    poolSuite: "Grand suite con piscina privada",
  },
  dahabiya: "Dahabiya privada",

  journeys: {
    "private-pharaoh": {
      title: "El faraón privado",
      kicker: "La Gran Pirámide y Karnak, cada una abierta solo para su grupo",
      route: "El Cairo · Guiza · Luxor · Abidos",
      body:
        "Una semana construida en torno a dos puertas que normalmente están cerradas. En Guiza, la Gran Pirámide se abre dos horas solo para su grupo; en Luxor, Karnak sigue abierto para ustedes tras el cierre y la cena se sirve dentro del recinto. Entre ambas: el Gran Museo Egipcio con un egiptólogo veterano, las mejores tumbas del Valle de los Reyes y los dos templos a los que casi nadie llega.",
      highlights: [
        "Apertura privada de la Gran Pirámide — dos horas, solo su grupo",
        "Karnak abierto tras el cierre, con cena en el recinto",
        "Las tumbas de Seti I, Nefertari y Tutankamón",
        "Una canasta privada en globo y una falúa privada",
        "Un egiptólogo veterano todo el viaje, chófer siempre disponible",
        "Servicio VIP en cada llegada y salida",
      ],
      days: [
        { t: "Llegada, recibidos en la puerta del avión", d: "Servicio VIP en inmigración y luego el Mena House, donde la Gran Pirámide llena la ventana." },
        { t: "El Gran Museo Egipcio", d: "El tesoro completo de Tutankamón y la Gran Escalera con un egiptólogo veterano; la tarde es libre." },
        { t: "Solos dentro de la Gran Pirámide", d: "Dos horas dentro de la pirámide de Keops, abierta solo para ustedes, y después la Pirámide Escalonada y el Serapeum de Saqqara." },
        { t: "Luxor, y Karnak de noche", d: "Vuelo al sur con servicio VIP; por la noche Karnak se abre para ustedes y la cena se sirve en el recinto." },
        { t: "Globo al amanecer y tumbas reales", d: "Una canasta privada sobre la orilla oeste y después las tumbas de Seti I, Tutankamón y la reina Nefertari." },
        { t: "Abidos y Dendera", d: "Los dos templos más bellos de Egipto en coche privado, almuerzo en el camino y atardecer en una falúa privada." },
        { t: "Salida", d: "Vuelo a El Cairo, con acompañamiento hasta su vuelo internacional." },
      ],
    },
    "royal-nile": {
      title: "El Nilo real",
      kicker: "Una dahabiya fletada para su grupo, de Asuán a Esna",
      route: "El Cairo · Asuán · Abu Simbel · el Nilo · Luxor",
      body:
        "Cuatro noches en una dahabiya de vela sin otros huéspedes: la tripulación, el cocinero y los amarres son suyos, y el barco se detiene donde los grandes cruceros no pueden. Antes, El Cairo con la Gran Pirámide abierta en privado y una noche en el Old Cataract; Abu Simbel en avión privado; y al final, Karnak abierto para su cena.",
      highlights: [
        "Chárter completo de una dahabiya de primer nivel — sin otros huéspedes",
        "Apertura privada de la Gran Pirámide; cena en Karnak tras el cierre",
        "Abu Simbel en avión privado",
        "Old Cataract, ala histórica Palace, frente al Nilo",
        "Las tumbas de Seti I y Nefertari; un globo privado",
        "Servicio VIP en cada llegada y salida",
      ],
      days: [
        { t: "Llegada, recibidos en la puerta del avión", d: "Servicio VIP y luego el Four Seasons at The First Residence, sobre el Nilo." },
        { t: "El Gran Museo Egipcio", d: "El tesoro de Tutankamón y la Gran Escalera con un egiptólogo veterano; una tarde sin prisa." },
        { t: "Solos dentro de la Gran Pirámide", d: "Dos horas privadas dentro de la pirámide de Keops y después la Pirámide Escalonada y el Serapeum de Saqqara." },
        { t: "Asuán y el Old Cataract", d: "Vuelo de la mañana al sur; Filé en lancha privada y el atardecer desde la terraza donde se alojó Agatha Christie." },
        { t: "Abu Simbel, y a bordo", d: "Los templos de Ramsés II con la primera luz, en avión privado; de vuelta para almorzar, su dahabiya zarpa." },
        { t: "Kom Ombo", d: "Navegando al norte hasta el templo doble de Sobek y Horus; noche amarrados en una orilla tranquila." },
        { t: "Gebel el-Silsila y Edfu", d: "Las antiguas canteras de arenisca y sus capillas, y después Edfu, el templo mejor conservado de Egipto." },
        { t: "El Kab", d: "Tumbas excavadas en la roca que pocos ven, una última tarde a vela y cena en cubierta." },
        { t: "Luxor, y Karnak de noche", d: "Desembarco en Esna; las tumbas de Seti I y Nefertari; Karnak abierto tras el cierre, con cena en el recinto." },
        { t: "Globo y salida", d: "Una canasta privada al amanecer sobre la orilla oeste; vuelo a El Cairo y salida VIP." },
      ],
    },
    "karnak-to-coral-sea": {
      title: "De Karnak al mar de coral",
      kicker: "El Oberoi Philae por el Nilo, y después un yate privado en el mar Rojo",
      route: "El Cairo · Luxor · el Nilo · Asuán · Abu Simbel · mar Rojo",
      body:
        "El crucero clásico por el Nilo en el barco más refinado del río, en suite, con el final que merece: un avión privado de Asuán al mar Rojo, una suite con piscina propia y un yate con tripulación para pasar el día entre los arrecifes de Giftun. Por el camino, la Gran Pirámide y Karnak se abren para ustedes.",
      highlights: [
        "El Oberoi Philae, cuatro noches en suite de lujo",
        "Apertura privada de la Gran Pirámide; cena en Karnak tras el cierre",
        "Avión privado a Abu Simbel y hasta el mar Rojo",
        "Un yate a motor con tripulación durante un día entero",
        "Suites en el Old Cataract y en el Oberoi de Sahl Hasheesh",
        "Servicio VIP en cada llegada y salida",
      ],
      days: [
        { t: "Llegada, recibidos en la puerta del avión", d: "Servicio VIP y luego el Mena House, con la Gran Pirámide en la ventana." },
        { t: "El Gran Museo Egipcio", d: "El tesoro de Tutankamón con un egiptólogo veterano; la tarde es libre." },
        { t: "Solos dentro de la Gran Pirámide", d: "Dos horas privadas dentro de la pirámide de Keops y después la Pirámide Escalonada y el Serapeum de Saqqara." },
        { t: "Luxor, a bordo del Oberoi Philae", d: "Vuelo al sur y embarque; por la noche Karnak se abre para ustedes, con cena en el recinto." },
        { t: "La orilla oeste", d: "Un globo privado al amanecer, las tumbas de Seti I y Nefertari, y el barco zarpa hacia el sur." },
        { t: "Esna y Edfu", d: "Por la esclusa de Esna hasta el templo de Horus en Edfu." },
        { t: "De Kom Ombo a Asuán", d: "El templo junto al río de Kom Ombo, y Asuán al anochecer." },
        { t: "El Old Cataract", d: "Desembarco en Asuán; Filé en lancha privada; una falúa privada entre las islas al atardecer." },
        { t: "Abu Simbel en avión privado", d: "Los templos de Ramsés II con la primera luz, de vuelta en Asuán para almorzar y una tarde tranquila." },
        { t: "Al mar Rojo, en privado", d: "Avión privado a Hurghada y al Oberoi de Sahl Hasheesh — una suite con piscina propia." },
        { t: "Un día en yate", d: "Un yate a motor con tripulación hasta los arrecifes de Giftun: esnórquel, almuerzo a bordo y regreso al atardecer." },
        { t: "Salida", d: "Vuelo de regreso desde Hurghada, o a El Cairo para conectar, con servicio VIP." },
      ],
    },
    "grand-odyssey": {
      title: "La gran odisea privada",
      kicker: "Cada trayecto privado — avión, dahabiya y yate",
      route: "El Cairo · Asuán · Abu Simbel · el Nilo · Luxor · mar Rojo",
      body:
        "Todo Egipto sin un solo momento compartido. Un avión privado en cada trayecto interior; una dahabiya fletada cuatro noches entre Asuán y Esna; la Gran Pirámide y Karnak abiertos para ustedes; y tres noches en el mar Rojo con dos días a bordo de su propio yate. Pensado para una primera visita que quiere ser la definitiva.",
      highlights: [
        "Avión privado en cada trayecto interior",
        "Chárter completo de una dahabiya durante cuatro noches",
        "Apertura privada de la Gran Pirámide; cena en Karnak tras el cierre",
        "Dos días a bordo de un yate con tripulación",
        "Suites en el Mena House, el Old Cataract, Al Moudira y el Oberoi",
        "Un egiptólogo y un asistente personal durante todo el viaje",
      ],
      days: [
        { t: "Llegada, recibidos en la puerta del avión", d: "Servicio VIP y luego el Mena House, con la Gran Pirámide en la ventana." },
        { t: "El Gran Museo Egipcio", d: "El tesoro de Tutankamón con un egiptólogo veterano; una tarde sin prisa." },
        { t: "Gran Pirámide, Saqqara y Dahshur", d: "Dos horas privadas dentro de la pirámide de Keops, y después la Pirámide Escalonada y la Pirámide Roja." },
        { t: "En avión privado a Asuán", d: "El Old Cataract, y por la tarde Filé en lancha privada." },
        { t: "Abu Simbel", d: "En avión privado con la primera luz; al atardecer, una falúa privada entre las islas." },
        { t: "A bordo de su dahabiya", d: "El barco es suyo desde el almuerzo, navegando al norte hasta Kom Ombo." },
        { t: "Gebel el-Silsila", d: "Canteras antiguas y capillas talladas en el acantilado; amarre en una orilla tranquila." },
        { t: "Edfu", d: "El templo de Horus a primera hora, antes de los visitantes del día." },
        { t: "El Kab", d: "Tumbas excavadas en la roca que pocos ven; una última cena en cubierta." },
        { t: "Luxor, y Karnak de noche", d: "Desembarco en Esna y Al Moudira; Karnak abierto tras el cierre, con cena en el recinto." },
        { t: "Globo al amanecer y tumbas reales", d: "Una canasta privada sobre la orilla oeste; las tumbas de Seti I, Tutankamón y Nefertari." },
        { t: "Al mar Rojo, en privado", d: "Avión privado a Hurghada; una suite con piscina propia en el Oberoi de Sahl Hasheesh." },
        { t: "El yate", d: "Los arrecifes de Giftun en un yate a motor con tripulación, almuerzo en cubierta." },
        { t: "Otra vez el yate — o nada en absoluto", d: "Otro arrecife, una inmersión o el día en el spa." },
        { t: "Salida", d: "Avión privado a El Cairo y servicio VIP hasta su vuelo de regreso." },
      ],
    },
  },

  standardOverline: "Cómo funciona este nivel",
  standard: [
    { title: "Primero el precio, luego la prueba", body: "Cada precio está en esta página, y cada elemento del viaje se confirma por escrito, a su nombre, antes de mover dinero." },
    { title: "Un solo interlocutor", body: "Quien diseña el viaje es quien les responde mientras están en Egipto. Ni un centro de llamadas ni un número que deja de contestar después del depósito." },
    { title: "Cambios sin complicaciones", body: "Cada viaje puede rehacerse — días, hoteles, ritmo, un grupo mayor o personal que les acompaña — y se recalcula con el mismo criterio." },
    { title: "Discreción por norma", body: "Sin grupos, sin vehículos compartidos, sin listas de salidas publicadas. Nada sobre quiénes son o adónde van se comenta fuera del equipo que lo organiza." },
  ],

  faqOverline: "Antes de escribirnos",
  faqs: ({ from2, to2, from4, to4, peak }) => [
    { q: "¿Cuánto cuesta un viaje de ultra lujo a Egipto?", a: `Los cuatro viajes Kemet Ultra cuestan, para dos, desde ${from2} por persona por siete días hasta ${to2} por quince. Para cuatro, el precio por persona baja a entre ${from4} y ${to4}, porque el chárter, el avión y las aperturas privadas se comparten. Las semanas de Navidad, Año Nuevo y Semana Santa llevan un suplemento del ${peak} %.` },
    { q: "¿De verdad pueden abrir la Gran Pirámide solo para nosotros?", a: "Sí. Durante dos horas la Gran Pirámide se abre solo para su grupo, fuera del horario público, con su egiptólogo al lado y nadie más dentro. Nos ocupamos de todo; ustedes solo tienen que llegar." },
    { q: "¿Cómo es la cena dentro de Karnak?", a: "Cuando se han ido los últimos visitantes, Karnak se abre para su grupo. Recorren la sala hipóstila con su egiptólogo y la cena se sirve dentro del recinto del templo. No tienen nada que organizar." },
    { q: "¿Por qué no está el Winter Palace?", a: "El Winter Palace de Luxor cerró a principios de 2026 para una restauración completa y reabrirá en julio de 2027 como Mandarin Oriental Winter Palace. Hasta entonces, en Luxor se alojan en Al Moudira, en la orilla oeste. El Old Cataract de Asuán sigue abierto en su histórica ala Palace mientras se renueva el ala del Nilo." },
    { q: "¿Qué dahabiya se fleta?", a: "Una dahabiya de primer nivel de seis a diez camarotes, fletada entera, con tripulación y cocinero propios — elegida para sus fechas y nombrada en su propuesta escrita." },
    { q: "¿Se puede cambiar o alargar un viaje?", a: "Todos. Días, hoteles, el orden del recorrido y el ritmo pueden cambiar, y el precio se recalcula con el mismo criterio. Grupos más grandes, personal que viaja con ustedes y llegadas en jet privado se planifican desde el principio." },
    { q: "¿Con cuánta antelación reservar?", a: "De ocho a doce semanas para viajar entre octubre y abril, cuando las aperturas privadas y los chárteres de dahabiya están más solicitados. A veces es posible con menos margen; antes de comprometerse sabrán qué elementos pueden asegurarse todavía." },
    { q: "¿Con quién trataremos?", a: "Con una sola persona, desde el primer mensaje hasta el último día en Egipto. Si la organización la lleva una family office o un asistente, también ellos tratan siempre con la misma persona." },
  ],

  closeTitle: "Cuéntenos quién viaja, y cuándo.",
  closeBody:
    "Cada viaje de esta página puede cambiarse. Primero reciben un programa por escrito y después el precio, y no se paga nada hasta que cada elemento está confirmado a su nombre. Todo queda entre nosotros.",
  closeCta: "WhatsApp, en privado",
  closeQuiet: "o por correo electrónico",

  whatsapp: "Hola Kemet — me gustaría hablar de un viaje Kemet Ultra por Egipto.",
  whatsappJourney: (t) => `Hola Kemet — me gustaría hablar de «${t}» (Kemet Ultra).`,
  mailSubject: "Kemet Ultra — consulta confidencial",
  mailBody: "Cuéntenos quién viaja, aproximadamente cuándo y qué viaje les interesa.\n\n",
};
