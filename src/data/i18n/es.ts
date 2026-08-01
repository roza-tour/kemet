// ---------------------------------------------------------------------------
// Páginas en español — six key pages for the Spanish market.
//
// Written for Spain (Madrid/Barcelona flight times, Semana Santa and the summer
// break as the travel windows, prices in euros). Latin American Spanish
// speakers are served by the same pages; where a word choice differs we take
// the peninsular form, since the flight and price references are European and
// a Latin American reader is well used to reading peninsular Spanish.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";

export const es: LocalizedPage[] = [
  // ===== Inicio ============================================================
  {
    groupId: "home",
    symbol: "ankh",
    title: "Kemet — Viajes privados a Egipto con egiptólogo",
    description:
      "Viajes privados a medida por Egipto: egiptólogo titulado solo para ustedes, vehículo privado, sin autocares de grupo ni fechas fijas.",
    keywords:
      "viajes a egipto, viaje privado egipto, egipto a medida, crucero por el nilo, egiptólogo guía, viaje de lujo egipto",
    crumb: "Inicio",
    h1: "Egipto, en privado",
    standfirst:
      "Sin autocar, sin fechas de salida fijas, sin desconocidos en su itinerario.",
    lede:
      "Egipto no es un país: son ocho mundos culturales superpuestos a lo largo de un solo río. Kemet diseña viajes privados y sin prisa por esos mundos — de las Pirámides de Guiza a los templos de Luxor y la navegación del Nilo hasta Asuán. Cada viaje lo acompaña un egiptólogo titulado por el Ministerio de Turismo egipcio y se construye enteramente en torno a ustedes.",
    facts: [
      { label: "Modalidad", value: "Exclusivamente privado" },
      { label: "Guía", value: "Egiptólogo titulado" },
      { label: "Vuelo desde Madrid", value: "unas 4 h 30 min" },
      { label: "Mejor época", value: "de octubre a abril" },
    ],
    sections: [
      {
        title: "Un egiptólogo, no un acompañante",
        body:
          "Cada viaje lo guía una persona titulada por el Ministerio de Turismo egipcio y licenciada en egiptología. Está con ustedes ante los monumentos, no esperando en el aparcamiento — y ese día les pertenece únicamente a ustedes, respondiendo a sus preguntas en lugar de recitar ante cuarenta personas. En español, si lo piden.",
      },
      {
        title: "Solo su grupo",
        body:
          "Sin autocares compartidos. Sin fechas fijas. Si viajan dos personas, el vehículo, el guía y el ritmo son de dos personas. El precio por persona baja notablemente al crecer el grupo: una familia de seis suele pagar menos por cabeza, en un viaje enteramente privado, de lo que paga una pareja por el mismo itinerario.",
      },
      {
        title: "Primero diseñado, luego por escrito",
        body:
          "Construimos el itinerario a partir de sus intereses y sus fechas, no de una página de catálogo. Lo reciben por escrito antes de pagar nada y se modifica tantas veces como haga falta hasta que esté bien. Incluye el egiptólogo, todas las entradas, los traslados privados con aire acondicionado, la recogida en el hotel, el almuerzo en los días de visita y el agua.",
      },
      {
        title: "El tiempo se protege, no se rellena",
        body:
          "Un día con cuatro yacimientos es más barato de vender y peor de vivir. Planificamos en torno a la luz, el calor y las aglomeraciones — el Valle de los Reyes a la apertura, el Museo Egipcio cuando los autocares se han ido — y la tarde la dejamos en paz.",
      },
      {
        title: "Sobre el precio, con franqueza",
        body:
          "Kemet trabaja en el segmento alto del mercado egipcio y lo decimos sin rodeos. Un egiptólogo privado durante una semana cuesta lo que cuesta; igual que un coche que es solo suyo y una habitación que mira al río en vez de al aparcamiento. Lo que no hacemos es cotizar bajo y recuperar la diferencia con extras opcionales, paradas comerciales y un itinerario que en silencio se convierte en grupo.",
      },
    ],
    highlights: {
      heading: "Para quién no son estos viajes",
      items: [
        "Para quien busca el precio más bajo de Egipto — no somos los más baratos ni pretendemos serlo",
        "Viajes en autocar y salidas de grupo con fecha fija, vendidas por plaza",
        "Albergues, habitaciones compartidas y rutas de mochilero",
        "Viajeros que prefieren organizarse ellos mismos la logística",
      ],
    },
    faqs: [
      { q: "¿Cuánto cuesta un viaje privado a Egipto?", a: "Para un viaje enteramente privado y a medida, con egiptólogo titulado, coche y conductor privados y buenos hoteles, calculen entre 200 y 450 euros por persona y día. La cifra por persona baja notablemente al crecer el grupo, porque el guía y el vehículo se reparten entre más personas." },
      { q: "¿Hay guías que hablen español?", a: "Sí. Trabajamos con egiptólogos titulados que guían en español. Indíquenlo al planificar el viaje: el número de egiptólogos hispanohablantes es limitado y en temporada alta están comprometidos con mucha antelación." },
      { q: "¿Necesitan visado los españoles para Egipto?", a: "Sí, pero es sencillo: los ciudadanos españoles pueden comprar el visado de turista a la llegada al aeropuerto por 30 dólares estadounidenses, válido para una estancia de hasta 30 días. También existe el visado electrónico en línea al mismo precio." },
      { q: "¿Cuántos días hacen falta para Egipto?", a: "Ocho a diez días sobre el terreno cubren El Cairo, Luxor, un crucero por el Nilo y Asuán sin prisas. Seis o siete bastan para El Cairo y Luxor. Doce a catorce dejan margen para Abu Simbel, Alejandría o una semana en el mar Rojo." },
      { q: "¿Es seguro Egipto?", a: "Las zonas turísticas — El Cairo, Guiza, Luxor, Asuán, Alejandría y la costa del mar Rojo — están vigiladas y las visitan millones de personas al año. Las molestias reales son los vendedores insistentes en los grandes yacimientos y el tráfico de El Cairo, y ambas desaparecen en gran medida con guía y conductor privados. Consulten en todo caso las recomendaciones de viaje vigentes antes de reservar." },
    ],
    cta: {
      heading: "Cuéntennos qué tienen en mente",
      text: "Envíennos sus fechas y quién viaja. Recibirán un itinerario real con el precio desglosado — sin compromiso y sin centro de llamadas.",
      whatsapp: "Buenos días Kemet — me interesa un viaje privado a Egipto.",
      emailSubject: "Consulta — viaje privado a Egipto",
    },
    moreLabel: "El sitio completo",
    moreText:
      "Estas páginas son una selección en español. El catálogo completo de Kemet — todos los viajes, destinos, experiencias y guías — está disponible en inglés. Respondemos, naturalmente, en español.",
  },

  // ===== Viajes ============================================================
  {
    groupId: "journeys",
    symbol: "sun",
    title: "Viajes a Egipto — itinerarios privados | Kemet",
    description:
      "Itinerarios privados y a medida por Egipto, de un día a dos semanas — con egiptólogo titulado, vehículo privado y sin fechas fijas.",
    keywords:
      "viajes a egipto, itinerario egipto, circuito egipto privado, reservar crucero nilo, egipto a medida, el cairo luxor asuán",
    crumb: "Viajes a Egipto",
    h1: "Nuestros viajes a Egipto",
    standfirst:
      "Puntos de partida, no programas cerrados — cada ruta se reescribe según sus fechas y su grupo.",
    lede:
      "Todos nuestros viajes son privados. Lo que ven aquí son formas probadas, no productos que haya que comprar tal cual. Díganos cuándo viajan, quién les acompaña y qué les interesa, y el itinerario se rediseña en torno a eso.",
    facts: [
      { label: "Viaje más corto", value: "1 día" },
      { label: "Viaje más largo", value: "14 días" },
      { label: "Grupo", value: "Solo el suyo" },
      { label: "Señal", value: "25 %" },
    ],
    sections: [
      {
        title: "La ruta clásica y por qué funciona",
        body:
          "El Cairo para las Pirámides, el Gran Museo Egipcio y la ciudad medieval; Luxor para los templos y el Valle de los Reyes; el tramo del Nilo hasta Asuán en barco. Ese orden no es casual: los templos entre Luxor y Asuán se levantan en la orilla y se construyeron para llegar a ellos desde el agua. Ocho a diez días lo cubren sin prisa.",
      },
      {
        title: "Qué incluye el precio",
        body:
          "Su egiptólogo titulado durante todo el viaje, todas las entradas, los traslados privados con aire acondicionado, la recogida y el regreso al hotel, el almuerzo en cada día de visita y agua a diario. No incluye: vuelos internacionales, visado de entrada, propinas, gastos personales y los extras expresamente indicados. Cada presupuesto detalla ambas listas antes de que se comprometan.",
      },
      {
        title: "Por qué el precio por persona baja con el grupo",
        body:
          "Un guía privado, un vehículo y un conductor cuestan lo mismo los usen dos personas o seis. Dos viajeros soportan todo el coste del coche; seis lo reparten. Por eso una familia de seis suele pagar menos por cabeza, en un viaje enteramente privado, de lo que paga una pareja por el mismo itinerario.",
      },
      {
        title: "Señal, resto y cambios",
        body:
          "Una señal del 25 % confirma el viaje; el resto se abona 30 días antes de la salida. Antes reciben el itinerario por escrito con el precio desglosado. Los cambios antes de la confirmación son normales y gratuitos: para eso está la fase de diseño.",
      },
    ],
    faqs: [
      { q: "¿Cuántos días se necesitan para visitar Egipto?", a: "Ocho a diez días sobre el terreno cubren El Cairo, Luxor, un crucero por el Nilo y Asuán sin prisas. Seis o siete bastan para El Cairo y Luxor. Por debajo de cinco días conviene quedarse en El Cairo y hacerlo bien, en lugar de cruzar el país dos veces." },
      { q: "¿Cuál es la mejor época para viajar a Egipto?", a: "De octubre a abril. Dentro de ese periodo, octubre, febrero y la primera mitad de marzo son los más fuertes: el mismo clima que el pico de diciembre y enero, pero con bastante menos gente y precios más bajos." },
      { q: "¿Merece la pena un crucero por el Nilo?", a: "Entre Luxor y Asuán, sí, y no principalmente por el barco. Los templos de ese tramo están en la orilla y se llegan mucho mejor desde el agua que desde un aparcamiento de autocares. Además el alojamiento se mueve mientras ustedes se quedan, lo que evita dos o tres cambios de hotel." },
      { q: "¿Se puede modificar el itinerario?", a: "Se modifica de todas formas: ese es el sentido. Cada ruta de esta página es un punto de partida. Díganos qué quieren ver más, menos o nada en absoluto, y el viaje se reescribe antes de pagar nada." },
    ],
    cta: {
      heading: "¿Qué ruta les encaja?",
      text: "Envíennos sus fechas y el tamaño del grupo. Respondemos personalmente, normalmente en un día laborable, con un itinerario real y un precio.",
      whatsapp: "Buenos días Kemet — quisiera un presupuesto para un viaje privado a Egipto.",
      emailSubject: "Solicitud de presupuesto — viaje a Egipto",
    },
    moreLabel: "Ver todos los viajes",
    moreText:
      "El catálogo completo, con todos los viajes, destinos y experiencias, está disponible en inglés. Asesoramos y respondemos en español.",
  },

  // ===== Crucero ===========================================================
  {
    groupId: "nile-cruise",
    symbol: "fish",
    title: "Crucero por el Nilo Luxor–Asuán privado | Kemet",
    description:
      "Crucero privado por el Nilo entre Luxor y Asuán con egiptólogo propio — los templos desde el agua, dahabiya o barco, y qué importa de verdad.",
    keywords:
      "crucero por el nilo, crucero nilo luxor asuán, dahabiya nilo, crucero nilo privado, barco nilo egipto, kom ombo edfu",
    crumb: "Crucero por el Nilo",
    h1: "El crucero por el Nilo",
    standfirst: "Entre Luxor y Asuán, el río es la carretera.",
    lede:
      "Casi todo aquello por lo que merece la pena detenerse entre Luxor y Asuán está a unos cientos de metros del Nilo. Por eso el río es la carretera, y por eso para ese tramo recomendamos casi siempre el barco. La ventaja real no es la embarcación: es la llegada. Bajan y ya están allí, en lugar de entrar cruzando un aparcamiento de autocares.",
    facts: [
      { label: "Tramo", value: "Luxor ↔ Asuán" },
      { label: "Duración", value: "3–4 noches" },
      { label: "Templos del recorrido", value: "Kom Ombo, Edfu, Esna" },
      { label: "Mejor época", value: "octubre–abril" },
    ],
    sections: [
      {
        title: "Qué se ve por el camino",
        body:
          "Kom Ombo, el insólito templo doble dedicado al dios cocodrilo Sobek y a Horus el Viejo, justo en la orilla. Edfu, el templo mejor conservado de Egipto, con los muros aún completos. Esna, cuyo techo policromado se ha recuperado solo en los últimos años. En un extremo Luxor — Karnak, el templo de Luxor, el Valle de los Reyes — y en el otro Asuán, con File y la ruta a Abu Simbel.",
      },
      {
        title: "Dahabiya o barco de crucero",
        body:
          "Una dahabiya es un velero tradicional, normalmente de ocho a doce camarotes. Fondea en bancos de arena y aldeas a las que los barcos grandes no llegan, lleva una décima parte del pasaje y no tiene programa de animación. Cuesta bastante más. Un barco de crucero de sesenta a ciento cuarenta camarotes es el estándar del mercado, tiene buena disponibilidad y es perfectamente adecuado para un primer viaje. Si el viaje celebra algo, la dahabiya es la mejora que recomendamos antes que cualquier otra.",
      },
      {
        title: "El sentido de navegación importa",
        body:
          "Los barcos hacen los dos sentidos y no es el mismo viaje. Hacia el norte, es decir de Asuán a Luxor, se va a favor de corriente y es más rápido, y Luxor queda al final — lo que significa llegar a la orilla occidental y al Valle de los Reyes cuando ya saben leer un templo. Solemos recomendar ese sentido y les explicamos por qué en su itinerario concreto.",
      },
      {
        title: "Lo que un crucero no hace",
        body:
          "No les aleja del río. Abidos y Dendera, los dos grandes templos al norte de Luxor, no están en ninguna ruta de crucero; tampoco el Fayum, el Egipto Medio ni el desierto. Si el motivo del viaje es ver Egipto más allá del circuito habitual, el barco es la herramienta equivocada y diseñamos sin dudarlo un itinerario por tierra.",
      },
    ],
    faqs: [
      { q: "¿Cuántas noches debe durar un crucero por el Nilo?", a: "Tres o cuatro noches es lo estándar y suficiente. Tres noches cubren Luxor–Asuán o al revés con los templos principales; cuatro añaden un ritmo más pausado y normalmente Esna. Los cruceros de siete noches repiten en su mayor parte el mismo tramo: una dahabiya aprovecha mejor esas noches de más." },
      { q: "¿Qué es una dahabiya?", a: "Un velero tradicional del Nilo, con dos mástiles y normalmente de ocho a doce camarotes, que navega el río como se hacía antes de los motores. Fondea en bancos de arena y aldeas inalcanzables para los barcos grandes y no tiene programa de animación. Cuesta bastante más por noche que un barco de crucero convencional." },
      { q: "¿Se marea uno en un crucero por el Nilo?", a: "Prácticamente nunca. El Nilo es agua interior en calma, los barcos van despacio y no hay oleaje. Quien no soporta una travesía marítima suele estar perfectamente cómodo en el río." },
      { q: "¿Con cuánta antelación reservar un crucero por el Nilo?", a: "Tres o cuatro meses para hoteles y barcos convencionales; seis meses si hay una dahabiya concreta en el plan. Para Navidad, Nochevieja y Semana Santa, hasta un año antes: solo hay unas decenas de dahabiyas y se ocupan las primeras." },
    ],
    cta: {
      heading: "Planificar el crucero",
      text: "Díganos sus fechas y quién viaja. En el presupuesto nombramos el barco — con las dahabiyas, ahí está exactamente la diferencia.",
      whatsapp: "Buenos días Kemet — me interesa un crucero privado por el Nilo.",
      emailSubject: "Consulta — crucero por el Nilo",
    },
    moreLabel: "Más sobre el tramo del Nilo",
    moreText:
      "Programas detallados, descripciones de las embarcaciones y el catálogo completo están disponibles en inglés.",
  },

  // ===== Coste =============================================================
  {
    groupId: "cost",
    symbol: "sun",
    title: "¿Cuánto cuesta viajar a Egipto? (2026) | Kemet",
    description:
      "Cuánto cuesta de verdad un viaje privado a Egipto — las franjas reales del mercado, los cinco factores que mueven el precio y dónde está Kemet.",
    keywords:
      "cuánto cuesta viajar a egipto, precio viaje egipto, coste crucero nilo, viaje egipto precio por persona, presupuesto egipto",
    crumb: "Coste",
    h1: "Cuánto cuesta un viaje privado a Egipto",
    standfirst:
      "Una respuesta honesta, escrita para el segmento alto del mercado y no para el bajo.",
    lede:
      "Casi todas las páginas que responden a esta pregunta están escritas para otro viajero: presupuestos diarios, habitaciones compartidas y cómo regatear una faluca. Es una forma legítima de ver Egipto y no es la que diseñamos nosotros. Aquí está la misma pregunta respondida para un viaje privado y guiado, con las cifras que realmente presupuestamos.",
    facts: [
      { label: "Privado, a medida", value: "200–450 € p.p./día" },
      { label: "Una semana en pareja", value: "2.800–6.000 € en total" },
      { label: "Señal", value: "25 %" },
      { label: "Resto", value: "30 días antes" },
    ],
    sections: [
      {
        title: "Cuatro maneras de ver Egipto",
        body:
          "Viaje independiente con transporte público y hoteles sencillos: unos 40 a 90 euros por persona y día. Viaje de grupo en autocar con veinte o cuarenta acompañantes y fechas fijas: 90 a 180 euros. Privado y a medida con egiptólogo propio, vehículo propio y buenos hoteles: 200 a 450 euros — aquí está Kemet. En la cima del mercado, con dahabiya en exclusiva y vuelos privados entre ciudades: desde 600 euros. La distancia entre el suelo y el techo del mercado es en Egipto mayor que en casi cualquier otro país.",
      },
      {
        title: "Cuántos son — el factor de mayor peso",
        body:
          "Un guía privado, un vehículo y un conductor cuestan lo mismo los usen dos personas o seis. El precio por persona cae, por tanto, de forma clara al crecer el grupo. Una familia de seis suele pagar menos por cabeza, en un viaje enteramente privado, de lo que paga una pareja por el mismo itinerario.",
      },
      {
        title: "Cuándo viajan",
        body:
          "Egipto tiene una temporada alta real — grosso modo de octubre a abril, más Navidad, Nochevieja y Semana Santa — y la diferencia no es marginal. La misma suite en el Nilo puede costar el doble en Nochevieja que a principios de junio. Si sus fechas son flexibles aunque sea dos semanas, finales de octubre, principios de marzo y la primera mitad de junio compran bastante más viaje por el mismo dinero.",
      },
      {
        title: "Dónde duermen",
        body:
          "Los hoteles son la partida mayor de casi todo presupuesto y el abanico en Egipto es enorme. Un buen cinco estrellas en El Cairo y un hotel histórico con vista despejada a las Pirámides son ambos «cinco estrellas»: ni cuestan lo mismo ni son lo mismo. En el Nilo la diferencia es todavía mayor.",
      },
      {
        title: "Cuánto trabajan los días",
        body:
          "Un itinerario con cuatro yacimientos al día es más barato de construir y peor de vivir. Los días más pausados requieren más noches, y más noches cuestan más — pero son la diferencia entre «haber visto Egipto» y «haber estado allí». Preferimos presupuestarles siete días tranquilos que cinco agotadores.",
      },
    ],
    faqs: [
      { q: "¿Cuánto cuesta un circuito privado por Egipto?", a: "Para un viaje enteramente privado y a medida, con egiptólogo titulado, coche y conductor privados y buenos hoteles, calculen entre 200 y 450 euros por persona y día. La cifra baja notablemente al crecer el grupo, porque el guía y el vehículo se reparten entre más personas." },
      { q: "¿Por qué un viaje privado cuesta más que uno de grupo?", a: "Porque casi nada se comparte. Un viaje de grupo reparte un guía, un autocar y un conductor entre treinta personas; uno privado los dedica solo a su grupo. Además compran la posibilidad de cambiar el plan: quedarse más en Abu Simbel, saltarse la tienda de papiros, salir a las seis porque la luz es mejor." },
      { q: "¿Cuánto presupuestar para una semana en Egipto?", a: "En el nivel privado y a medida, una semana para dos personas suele situarse entre 2.800 y 6.000 euros en total, según hoteles, temporada y si entre ciudades se vuela o se conduce. Los vuelos internacionales, el visado de 30 dólares y las propinas quedan fuera." },
      { q: "¿Es caro Egipto?", a: "Egipto está entre los países más baratos del mundo en comida, transporte y entradas, y a la vez es uno de los que tienen mayor distancia entre la franja baja y la alta. No cuesta el acceso: cuesta la calidad de la persona que está a su lado explicando lo que están viendo." },
      { q: "¿Cuándo se paga?", a: "Una señal del 25 % del total confirma el viaje; el resto se abona 30 días antes de la salida. No se paga nada antes de tener delante el itinerario por escrito y el precio desglosado." },
    ],
    cta: {
      heading: "Un presupuesto concreto",
      text: "Envíennos sus fechas, su grupo y a grandes rasgos qué quieren que sea el viaje. Recibirán un itinerario por escrito con el precio desglosado, sin compromiso.",
      whatsapp: "Buenos días Kemet — quisiera un presupuesto para un viaje privado a Egipto.",
      emailSubject: "Solicitud de presupuesto — Egipto",
    },
    moreLabel: "Detalle completo de precios",
    moreText:
      "El desglose completo de precios y servicios, con todos los viajes, está disponible en inglés.",
  },

  // ===== Cuándo ============================================================
  {
    groupId: "when-to-go",
    symbol: "sun",
    title: "Mejor época para viajar a Egipto — mes a mes | Kemet",
    description:
      "Cuándo viajar a Egipto: temperaturas de El Cairo, Luxor, Asuán y el mar Rojo, afluencia, precios y un veredicto honesto mes a mes.",
    keywords:
      "mejor época para viajar a egipto, clima egipto, egipto temperaturas mes, cuándo ir a egipto, mar rojo temperatura agua, egipto verano calor",
    crumb: "Mejor época",
    h1: "La mejor época para viajar a Egipto",
    standfirst:
      "El momento cambia un viaje a Egipto más que cualquier otra decisión.",
    lede:
      "La respuesta corta es de octubre a abril. La respuesta útil es que en Egipto conviven dos climas — los monumentos del interior y los arrecifes de la costa — y sus mejores momentos están en extremos opuestos del año. Octubre es el único mes en que ambos están casi en su punto.",
    facts: [
      { label: "Mejor mes en conjunto", value: "octubre" },
      { label: "Mejor mes para monumentos", value: "febrero" },
      { label: "Mejor relación precio-clima", value: "marzo" },
      { label: "Mejor época de buceo", value: "mayo, junio, septiembre" },
    ],
    sections: [
      {
        title: "De octubre a abril — la temporada alta",
        body:
          "En estos meses las temperaturas diurnas del interior se mantienen agradables: Luxor entre 22 y 37 grados según el mes, El Cairo entre 19 y 31. Dentro de la temporada, octubre, febrero y la primera mitad de marzo son los más fuertes. Diciembre y enero ofrecen el mejor clima de todos, junto con los precios más altos y la mayor afluencia del año.",
      },
      {
        title: "De mayo a septiembre — caluroso en el interior, ideal en el mar",
        body:
          "En pleno verano Asuán alcanza con regularidad los 42-45 grados y un itinerario por el Nilo debe construirse enteramente en torno al calor: salida al amanecer, visitas hasta las once, la tarde como descanso de verdad. A cambio se obtienen monumentos prácticamente vacíos y los precios más bajos del año. En el mar Rojo, en cambio, es la mejor época: agua entre 27 y 30 grados.",
      },
      {
        title: "Semana Santa y verano",
        body:
          "Son las dos ventanas en que la demanda española hacia Egipto es más fuerte, y aquellas en que los buenos barcos del Nilo y las mejores habitaciones se agotan primero. Semana Santa cae en el periodo más agradable del año y hay que reservarla con mucha antelación. El verano cae en el pico del calor: para el mar Rojo es excelente; para Luxor y Asuán exige un itinerario diseñado sobre el amanecer.",
      },
      {
        title: "Ramadán y festividades",
        body:
          "El Ramadán se desplaza cada año unos once días. Los yacimientos siguen abiertos, a menudo con horario reducido, y el ritmo del día se invierte: tardes silenciosas y luego todo el país se enciende al atardecer para el iftar. Muchos viajeros lo describen después como la parte más memorable del viaje. La fiesta del sol de Abu Simbel es el 22 de febrero y el 22 de octubre.",
      },
    ],
    faqs: [
      { q: "¿Cuál es la mejor época para viajar a Egipto?", a: "De octubre a abril. Dentro de ese periodo, octubre, febrero y la primera mitad de marzo son los más fuertes: octubre ofrece días cálidos y un mar Rojo todavía veraniego, febrero el clima más agradable para los monumentos y marzo casi el mismo clima a precios más bajos." },
      { q: "¿Cuánto calor hace en Egipto en verano?", a: "En julio y agosto Asuán alcanza con regularidad 42-45 grados y Luxor los cuarenta y pocos; El Cairo se sitúa en los treinta y cinco. El calor es seco y por tanto más llevadero que esas mismas cifras en otros lugares, pero exige un itinerario que empiece al amanecer y deje libre la tarde." },
      { q: "¿Cuál es la mejor época para bucear en el mar Rojo?", a: "Mayo, junio, septiembre y octubre. El agua alcanza los 27-30 grados en verano y la visibilidad es mejor en otoño. Septiembre y octubre son la combinación ideal: agua todavía veraniega y las aglomeraciones de vacaciones ya de vuelta." },
      { q: "¿Egipto está lleno en Navidad?", a: "Es el pico del año. El clima es excelente y los precios de los barcos del Nilo y de las buenas habitaciones pueden duplicarse en Nochevieja — esa semana se agota hasta un año antes. La Navidad copta del 7 de enero prolonga la temporada otras dos semanas." },
    ],
    cta: {
      heading: "¿Dudan sobre cuándo?",
      text: "Díganos qué quieren que sea el viaje — monumentos, arrecife, crucero o los tres — y cuándo pueden viajar aproximadamente. Les diremos qué mes lo sostiene de verdad.",
      whatsapp: "Buenos días Kemet — quisiera consejo sobre cuándo viajar a Egipto.",
      emailSubject: "Consulta — mejor época para viajar a Egipto",
    },
    moreLabel: "Los doce meses en detalle",
    moreText:
      "Un desglose detallado de cada mes — temperaturas, afluencia, precios y veredicto — está disponible en inglés.",
  },

  // ===== Visado ============================================================
  {
    groupId: "visa",
    symbol: "ankh",
    title: "Visado de Egipto para españoles (2026) | Kemet",
    description:
      "Visado de Egipto para ciudadanos españoles: 30 dólares a la llegada o visado electrónico, estancia de hasta 30 días, pasaporte válido seis meses.",
    keywords:
      "visado egipto, visado egipto españoles, visado a la llegada egipto, e-visa egipto, entrada a egipto requisitos, precio visado egipto",
    crumb: "Visado de Egipto",
    h1: "Visado de Egipto para españoles",
    standfirst:
      "Se obtiene a la llegada, cuesta 30 dólares y vale 30 días. Verificado el 27 de julio de 2026.",
    lede:
      "Los ciudadanos españoles necesitan visado de turista para Egipto, pero pueden comprarlo sin complicaciones a la llegada al aeropuerto. También existe el visado electrónico en línea al mismo precio, si prefieren llegar con el visado ya emitido.",
    facts: [
      { label: "Coste", value: "30 dólares EE. UU." },
      { label: "Estancia", value: "hasta 30 días" },
      { label: "Pasaporte", value: "válido 6 meses" },
      { label: "Páginas libres", value: "al menos 2" },
    ],
    sections: [
      {
        title: "¿Visado a la llegada o electrónico?",
        body:
          "Ambos son válidos y cuestan lo mismo. A la llegada es más rápido de organizar y se resuelve en pocos minutos en la ventanilla bancaria de la sala de llegadas — se paga en efectivo en dólares estadounidenses, así que lleven billetes en buen estado. El electrónico es la opción más tranquila: aterrizan con el visado ya emitido y pasan directamente al control de pasaportes, algo que se nota sobre todo tras un vuelo largo o llegando de noche con niños.",
      },
      {
        title: "Qué hay que llevar",
        body:
          "Un pasaporte válido al menos seis meses más allá de la fecha de entrada, con al menos dos páginas libres. Los agentes pueden pedir la reserva de hotel de la primera noche y un billete de vuelta o de continuación: tengan ambos accesibles en el móvil. Si organizamos nosotros el viaje, reciben un único documento de confirmación con todo lo que pudieran preguntarles.",
      },
      {
        title: "El permiso solo Sinaí",
        body:
          "Si todo el viaje se queda dentro de Sharm el-Sheij, Dahab, Nuweiba y Taba, los ciudadanos españoles pueden obtener en los puestos del Sinaí un permiso gratuito de 15 días en lugar del visado. Es realmente restrictivo: no permite viajar a El Cairo, Luxor, Asuán ni al Egipto continental, ni siquiera en excursión de un día. Si existe la más mínima posibilidad de querer ver las Pirámides, compren el visado normal.",
      },
      {
        title: "Llegar desde España",
        body:
          "Unas 4 horas y 30 minutos sin escalas desde Madrid o Barcelona a El Cairo. Hurgada y Marsa Alam reciben vuelos directos desde varios aeropuertos españoles en temporada, algo relevante si el viaje se construye en torno al mar Rojo. Desde otros aeropuertos peninsulares lo habitual es una escala en un hub europeo o del Golfo.",
      },
    ],
    highlights: {
      heading: "Importante",
      items: [
        "Las normas de entrada las fija el Gobierno egipcio y pueden cambiar",
        "Esta información se verificó el 27 de julio de 2026 con fuentes públicas",
        "La única referencia válida es el portal oficial visa2egypt.gov.eg — consúltenlo antes de reservar",
        "Si viajan con nosotros, confirmamos por escrito sus requisitos exactos antes de pagar nada",
      ],
    },
    faqs: [
      { q: "¿Necesitan visado los españoles para Egipto?", a: "Sí. Los ciudadanos españoles pueden comprar el visado de turista de entrada única a la llegada a los aeropuertos egipcios por 30 dólares estadounidenses, válido para una estancia de hasta 30 días. El visado electrónico está disponible en línea al mismo precio si prefieren llegar con él ya emitido." },
      { q: "¿Cuánto cuesta el visado de Egipto?", a: "30 dólares estadounidenses para la entrada única, tanto comprado en el aeropuerto como solicitado en línea. El visado electrónico de entradas múltiples cuesta 65 dólares. El precio de la entrada única pasó de 25 a 30 dólares el 1 de marzo de 2026. Las ventanillas del aeropuerto solo aceptan efectivo." },
      { q: "¿Cuánto tiempo puedo quedarme con el visado de turista?", a: "Hasta 30 días desde la fecha de entrada. Las prórrogas son posibles dentro de Egipto ante las autoridades de pasaportes, pero llevan tiempo. Si ya saben que quieren quedarse más, soliciten el visado electrónico de entradas múltiples o planifiquen dentro de los 30 días." },
      { q: "¿Cuánta validez debe tener el pasaporte?", a: "Al menos seis meses más allá de su fecha de entrada, con al menos dos páginas libres. Es el requisito estándar y se comprueba a la llegada." },
      { q: "¿Cuánto dura el vuelo de España a Egipto?", a: "Unas 4 horas y 30 minutos sin escalas desde Madrid o Barcelona a El Cairo. Hurgada y Marsa Alam reciben vuelos directos desde varios aeropuertos españoles en temporada; desde el resto lo habitual es una escala." },
    ],
    cta: {
      heading: "¿Un viaje desde España?",
      text: "Envíennos sus fechas y quién viaja. Confirmamos los requisitos de entrada y construimos el viaje en torno a ellos.",
      whatsapp: "Buenos días Kemet — viajo desde España y quisiera organizar un viaje privado a Egipto.",
      emailSubject: "Consulta desde España — Kemet Egipto",
    },
    moreLabel: "Requisitos de entrada para otras nacionalidades",
    moreText:
      "Las normas de entrada de cincuenta nacionalidades — con coste, duración de la estancia y tiempos de vuelo — están disponibles en inglés.",
  },

  // ===== ¿Es seguro viajar a Egipto? =======================================
  // La referencia es el Ministerio de Asuntos Exteriores español, y la
  // distinción entre el Sinaí del Norte y el del Sur se explica de forma
  // expresa: el mercado español vuela a Sharm el-Sheikh y Hurghada y lee
  // titulares sobre el "Sinaí" que hablan de otra región.
  {
    groupId: "safety",
    symbol: "horus",
    title: "¿Es seguro viajar a Egipto? Respuesta honesta | Kemet",
    description:
      "¿Es seguro Egipto? Región por región — El Cairo, Luxor, mar Rojo y Sinaí — con mujeres que viajan solas, agua, vendedores insistentes y las zonas desaconsejadas.",
    keywords:
      "es seguro viajar a egipto, seguridad en egipto, egipto es peligroso, sharm el sheikh seguro, hurghada seguro, viajar sola a egipto, egipto 2026 seguridad",
    crumb: "Seguridad",
    h1: "¿Es seguro viajar a Egipto?",
    standfirst:
      "La versión honesta — lo que importa de verdad, lo que es ruido, y la única región que sí es una excepción.",
    lede:
      "Casi toda la inquietud que rodea a un viaje a Egipto viene de los titulares, no del país. Las zonas a las que un viajero va realmente están entre las áreas turísticas más vigiladas que existen, y los problemas que los visitantes describen de verdad son corrientes: vendedores que no aceptan un primer no, un tráfico con lógica propia, un calor que en junio es peligroso si no se planifica alrededor de él, y un estómago que protesta ante un agua distinta. Nada de eso es menor. Nada de eso es tampoco lo que la gente se imagina.",
    facts: [
      { label: "Emergencias", value: "Policía 122 · Ambulancia 123 · Policía turística 126" },
      { label: "Agua del grifo", value: "No potable — embotellada en todas partes" },
      { label: "Molestia principal", value: "Vendedores insistentes · tráfico de El Cairo" },
      { label: "Antes de reservar", value: "Consultar las recomendaciones oficiales" },
    ],
    sections: [
      {
        title: "El Sinaí del Norte y el del Sur no son lo mismo",
        body:
          "Es el punto más importante de esta página y el que más se confunde. El Sinaí del Norte tiene una recomendación permanente de no viajar por parte del Ministerio de Asuntos Exteriores español y de la mayoría de los gobiernos occidentales. Los destinos que un viajero español quiere decir cuando dice \"Sinaí\" — Sharm el-Sheikh, Dahab, Nuweiba — están en el Sinaí del Sur, a varios cientos de kilómetros, y quedan normalmente excluidos de esa recomendación. Los vuelos chárter europeos operan allí con normalidad. Ningún itinerario de Kemet entra en el Sinaí del Norte ni en las zonas fronterizas del desierto occidental.",
      },
      {
        title: "El Cairo y Guiza",
        body:
          "Las pirámides, los museos y El Cairo islámico reciben millones de visitantes al año sin incidentes. Las dos molestias reales son el tráfico —denso e improvisado— y los vendedores insistentes en la meseta de Guiza. Un conductor privado elimina el primero por completo y un guía egiptólogo elimina en buena medida el segundo: las abordadas se interceptan antes de llegar hasta usted, porque quien las intercepta es alguien a quien los vendedores reconocen como local.",
      },
      {
        title: "Alto Egipto: el riesgo es el calor, no la delincuencia",
        body:
          "Luxor y Asuán son más tranquilas que El Cairo en todos los sentidos, y los recintos monumentales están fuertemente vigilados. El riesgo real entre mayo y septiembre no es la delincuencia sino el calor: 45 °C a las dos de la tarde son una cuestión médica, no una incomodidad. En esos meses construimos los itinerarios en torno a salidas al amanecer y tardes libres — o le decimos que octubre sería mejor elección.",
      },
      {
        title: "Viajar sola",
        body:
          "Las mujeres viajan solas por Egipto, y lo que se describe con más frecuencia no es peligro sino atención: miradas, comentarios, abordajes insistentes, sobre todo en zonas concurridas de El Cairo. Un guía privado cambia esa dinámica más que cualquier otra medida, porque los abordajes cesan cuando se va visiblemente acompañada por un profesional egipcio. Llevar hombros y rodillas cubiertos fuera de las zonas turísticas reduce aún más la atención, y en mezquitas e iglesias se espera de todos modos.",
      },
      {
        title: "Agua, comida y estómago",
        body:
          "El agua del grifo no es potable en ninguna parte de Egipto, tampoco en buenos hoteles ni para lavarse los dientes. El agua embotellada está en todas partes, es barata y va incluida en cada jornada de visita. El hielo de hoteles y restaurantes establecidos se hace con agua tratada y no da problemas; el de un puesto callejero, sí. Coma donde haya rotación: un mostrador concurrido es un mostrador seguro.",
      },
      {
        title: "Lo que no pretendemos ser",
        body:
          "Las recomendaciones cambian, y nosotros somos un operador de viajes, no una autoridad. Antes de reservar nada, lea las recomendaciones de viaje vigentes del Ministerio de Asuntos Exteriores para Egipto: están escritas para ciudadanos españoles y están más actualizadas que la página de cualquier operador, esta incluida. Si consideramos que una ruta que nos pide es mala idea, se lo diremos — aunque nos cueste la reserva.",
      },
    ],
    highlights: {
      heading: "En resumen",
      items: [
        "Las regiones turísticas — El Cairo, Guiza, Luxor, Asuán, Alejandría, mar Rojo — están fuertemente vigiladas",
        "Sinaí del Norte: desaconsejado. Sinaí del Sur con Sharm el-Sheikh y Dahab: normalmente excluido",
        "Ningún itinerario de Kemet entra en el Sinaí del Norte ni en las zonas fronterizas occidentales",
        "Agua del grifo nunca, tampoco para los dientes",
        "Consulte las recomendaciones oficiales antes de reservar",
      ],
    },
    faqs: [
      { q: "¿Es seguro viajar a Egipto en 2026?", a: "Las regiones turísticas — El Cairo, Guiza, Luxor, Asuán, Alejandría y la costa del mar Rojo — están fuertemente vigiladas y reciben millones de viajeros al año sin incidentes. Las molestias prácticas son los vendedores insistentes en los grandes recintos y el tráfico de El Cairo, y ambas desaparecen en gran medida con un guía privado y conductor. El Sinaí del Norte y algunas zonas fronterizas están desaconsejados y no forman parte de ningún itinerario. Consulte las recomendaciones oficiales antes de reservar." },
      { q: "¿Es seguro Sharm el-Sheikh?", a: "Sharm el-Sheikh está en el Sinaí del Sur, normalmente excluido de las recomendaciones relativas al Sinaí del Norte, y recibe vuelos chárter europeos de forma continua. La zona hotelera y los fondos de Ras Mohammed son autónomos y se visitan con normalidad. La advertencia de la que muchos han leído se refiere al Sinaí del Norte, a cientos de kilómetros y fuera de cualquier itinerario." },
      { q: "¿Es seguro Hurghada?", a: "Sí. Hurghada y Marsa Alam son destinos del mar Rojo en el Egipto continental, lejos del Sinaí, con vuelos directos desde varios aeropuertos españoles y europeos. Funcionan todo el año para el tráfico chárter europeo. El buceo y los deportes acuáticos conllevan el riesgo habitual del operador: por eso el operador importa más que el precio, y le decimos cuál es el nuestro antes de reservar." },
      { q: "¿Puedo viajar sola a Egipto?", a: "Sí, y muchas lo hacen. Lo que se describe es sobre todo atención más que peligro — miradas, comentarios, abordajes insistentes, especialmente en zonas concurridas de El Cairo. Un guía privado cambia mucho la situación, porque los abordajes cesan cuando se va visiblemente acompañada. Hombros y rodillas cubiertos fuera de las zonas turísticas reducen aún más la atención." },
      { q: "¿Se puede beber el agua del grifo en Egipto?", a: "No, en ningún sitio, tampoco en buenos hoteles ni para lavarse los dientes. El agua embotellada está disponible en todas partes, es barata y va incluida en cada jornada de visita. El hielo de hoteles y restaurantes establecidos no da problemas; el de la calle, sí." },
      { q: "¿Necesito vacunas o seguro de viaje?", a: "Para entrar desde España no se exige ninguna vacuna, pero conviene que su médico o un centro de medicina del viajero confirme qué se recomienda en su caso y si sus vacunas habituales están al día. El seguro de viaje no es obligatorio pero sí muy recomendable, sobre todo si hay buceo o globo aerostático en el plan: muchas pólizas los excluyen por defecto." },
    ],
    cta: {
      heading: "¿Sigue con dudas?",
      text: "Pregúntenos exactamente lo que le preocupa. Recibirá una respuesta directa — incluso cuando la respuesta sea que un plan concreto no es buena idea.",
      whatsapp: "Hola Kemet — tengo una pregunta sobre la seguridad en Egipto.",
      emailSubject: "Pregunta sobre seguridad en Egipto — Kemet",
    },
    moreLabel: "Versión completa en inglés",
    moreText:
      "La versión íntegra, con más regiones y más preguntas, está disponible en inglés.",
  },
];
