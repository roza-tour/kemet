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
      "¿Es seguro Egipto? Región por región — El Cairo, Luxor, mar Rojo y Sinaí — con mujeres que viajan solas, el agua y las zonas desaconsejadas.",
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
  // ===== Uso exclusivo ======================================================
  // El mercado hispanohablante llega aquí sobre todo por bodas y aniversarios,
  // y por el viaje de incentivo corporativo. La objeción real no es el precio
  // sino la credibilidad: por eso el permiso se explica antes que los lugares.
  {
    groupId: "private-access",
    symbol: "horus",
    title: "Monumentos en exclusiva en Egipto | Kemet",
    description:
      "Monumentos cerrados al público y reservados para un solo grupo: la Gran Pirámide fuera de horario, la meseta de Giza antes de abrir, cena dentro de Karnak.",
    keywords:
      "alquilar pirámide para evento, acceso privado gran pirámide, boda en egipto, evento de empresa en egipto, cena privada karnak, monumento en exclusiva egipto",
    crumb: "Uso exclusivo",
    h1: "Cerrado para todos los demás",
    standfirst:
      "No una hora tranquila ni una entrada lateral — el monumento, vacío, y dentro solo su grupo.",
    lede:
      "Hay lugares en Egipto que pueden cerrarse al público y reservarse para un solo grupo. La Gran Pirámide se vuelve a abrir después del cierre; a la meseta de Giza se entra antes de que abran las puertas; dentro del recinto de Karnak se pone la mesa. No es cuestión de pagar más: es cuestión de PERMISO — y el permiso lo solicitamos a su nombre.",
    facts: [
      { label: "Base", value: "Un permiso, no un pago" },
      { label: "Solicitado", value: "A su nombre" },
      { label: "Antelación", value: "De semanas a meses" },
      { label: "Coste", value: "Ninguno antes de concederse" },
    ],
    sections: [
      {
        title: "La Gran Pirámide, dos horas sin nadie más",
        body:
          "La pirámide se cierra al público y se vuelve a abrir para un solo grupo, con dos horas ininterrumpidas dentro. Se sube la Gran Galería sin cola detrás ni voces delante, y se puede estar sentado en silencio en la Cámara del Rey: justo lo que nadie que visite de día llega a hacer. El permiso pasa por el Ministerio de Turismo y Antigüedades, el Ministerio del Interior y la supervisión de la meseta. Por internet no se compra a ningún precio.",
      },
      {
        title: "La meseta antes del amanecer",
        body:
          "La meseta con la primera luz y otras cuatrocientas personas dentro es una fotografía que ya tiene todo el mundo. Antes de abrir es otro lugar: sin autocares, sin vendedores de camellos, sin cola en la Esfinge, y con la luz entrando rasante desde el este. La franja es de 5 a 7 (abril–septiembre) y de 6 a 8 (octubre–marzo). El desayuno puede montarse en la arena frente a las tres pirámides.",
      },
      {
        title: "Cena dentro del recinto de Karnak",
        body:
          "Karnak es el mayor edificio religioso jamás levantado, y su sala hipóstila sostiene ciento treinta y cuatro columnas de la altura de un edificio de seis plantas. Cerrado el recinto, puede ponerse la mesa dentro e iluminarse las columnas desde abajo, que es como estaban pensadas. Desde una mesa íntima hasta unos doscientos invitados, con iluminación, sonido, escenario y catering.",
      },
      {
        title: "La discreción, por norma",
        body:
          "De una celebración privada no publicamos, no nombramos ni fotografiamos nada. Ningún cliente se convierte en referencia sin que se le haya preguntado, y ninguna velada aparece en esta web. Si la ocasión exige un acuerdo de confidencialidad antes de la primera conversación y no después, dígalo: sale el mismo día.",
      },
    ],
    highlights: {
      heading: "Lugares que pueden reservarse en exclusiva",
      items: [
        "Gran Pirámide de Keops — dos horas ininterrumpidas tras el cierre",
        "Meseta de Giza — antes de abrir, desde dos personas hasta un grupo grande",
        "Recinto de Karnak, Luxor — cena hasta unos 200 invitados",
        "Grand Egyptian Museum — galerías cerradas para un solo grupo",
        "Ciudadela de Saladino, El Cairo — terraza sobre toda la ciudad",
        "File, Asuán — templo isla después de la última barca pública",
        "Terrazas de Hatshepsut, Luxor — tres niveles en la roca tebana",
        "Dahabiya — el barco entero, no un camarote",
      ],
    },
    faqs: [
      {
        q: "¿De verdad se puede reservar la Gran Pirámide en privado?",
        a: "Sí, y es el acuerdo más difícil de Egipto. La pirámide se cierra al público y se reabre para un grupo, con dos horas ininterrumpidas dentro. Se basa en un permiso del Ministerio de Turismo y Antigüedades, del Ministerio del Interior y de la supervisión de la meseta, sobre una solicitud escrita que indica finalidad, horas exactas y número de personas. Quien lo ofrezca como reserva inmediata no está ofreciendo lo auténtico.",
      },
      {
        q: "¿Con cuánta antelación debo pedirlo?",
        a: "Varias semanas para la meseta antes de abrir, la Ciudadela o una velada en el museo. Dos o tres meses para una producción completa dentro de un recinto, porque iluminación, sonido, escenario y catering llevan cada uno su propia autorización. Meses para la Gran Pirámide. Si la fecha es fija, es lo primero que necesitamos saber: todo puede diseñarse alrededor de un permiso, pero un permiso no se diseña alrededor de una fecha.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Se presupuesta, no se publica. La cifra se construye con la tasa del permiso de ese lugar, el número de invitados, la fecha y lo que la velada necesite — una mesa para ocho dentro de Karnak y una cena de doscientos con escenario no son dos versiones de un mismo precio. Presupuesto por escrito y desglosado antes de cualquier compromiso.",
      },
      {
        q: "¿Y si deniegan el permiso?",
        a: "No se cobra nada antes de que se conceda, así que una denegación no le cuesta nada. En la primera conversación le diremos qué probabilidad le damos, y si una fecha o un lugar nos parecen poco realistas se lo diremos entonces, no después de una señal. Cuando la denegación es posible, la segunda opción se acuerda antes de presentar la solicitud.",
      },
    ],
    cta: {
      heading: "Cuéntenos la ocasión",
      text: "Las fechas primero, si ya las tiene — el permiso es el tramo largo y lo demás va detrás. Si lo que tiene en mente no es posible, se lo diremos en la primera respuesta y no en la cuarta.",
      whatsapp: "Hola Kemet — consulto por el uso exclusivo de un monumento para una ocasión. ¿Podemos hablar de fechas?",
      emailSubject: "Uso exclusivo — consulta",
    },
    moreLabel: "Más en inglés",
    moreText: "Ocho lugares, cada uno con su vía de permiso, explicados por extenso en la página en inglés.",
  },
];
