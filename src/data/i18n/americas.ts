// ---------------------------------------------------------------------------
// The Americas — added October 2026 to reach Latin America and Brazil without
// changing anything the European pages say.
//
// One page per market, written for it: Spanish for Mexico, Central and South
// America (usted, no vosotros; the Southern Cone's summer is Egypt's winter),
// Brazilian Portuguese for Brazil. Neither is a translation of an English page,
// so they live in standalone.ts. Facts that move — visa fees, which passports
// may apply online — are stated as what to check on the official portal, not
// as numbers that age.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";

export const esLatam: LocalizedPage = {
  groupId: "standalone-es-latam",
  symbol: "sun",
  title: "Viajar a Egipto desde Latinoamérica: vuelos, visa y época | Kemet",
  description:
    "Cómo viajar a Egipto desde México, Colombia, Argentina, Chile o Perú: vuelos con una escala, la visa electrónica, la diferencia horaria y la mejor época.",
  keywords:
    "viajar a egipto desde mexico, viaje a egipto desde colombia, egipto desde argentina, visa egipto mexicanos, viaje a egipto desde latinoamerica",
  crumb: "Desde Latinoamérica",
  h1: "Viajar a Egipto desde Latinoamérica",
  standfirst:
    "Desde México, Colombia, Argentina, Chile o Perú: una escala, una visa en línea y la mejor temporada de Egipto.",
  lede:
    "Desde América Latina no hay vuelos directos a El Cairo, pero sí muy buenas conexiones con una sola escala, y la mayoría de los pasaportes de la región tramitan la visa egipcia en línea. Esta página reúne lo que preguntan quienes viajan desde México, Centroamérica y Sudamérica: cómo llegar, la visa, la diferencia horaria, cuándo conviene venir y cómo funciona un viaje privado con nosotros.",
  facts: [
    { label: "Vuelos", value: "Con una escala" },
    { label: "Visa", value: "Electrónica, en línea" },
    { label: "Diferencia horaria", value: "De 5 a 9 horas más" },
    { label: "Mejor época", value: "Octubre a abril" },
  ],
  sections: [
    {
      title: "Cómo llegar",
      body:
        "No hay vuelos directos entre América Latina y Egipto, pero la conexión es sencilla: una escala en Madrid, París, Fráncfort, Estambul, Doha o Dubái lleva a El Cairo desde Ciudad de México, Bogotá, Lima, Santiago, Buenos Aires o São Paulo. Nuestros viajes pueden empezar en el aeropuerto de El Cairo: le recibimos a la llegada y le llevamos al hotel.",
    },
    {
      title: "La visa",
      body:
        "La mayoría de los pasaportes latinoamericanos —entre ellos los de México, Argentina, Brasil, Chile, Colombia, Ecuador, Perú y Uruguay— pueden solicitar la visa electrónica de turista en el portal oficial, visa2egypt.gov.eg, antes de viajar. Compruebe allí que su nacionalidad figura en la lista y cuál es la tarifa vigente, porque cambió en 2026, y pague solo en ese portal: hay sitios que lo imitan y cobran una comisión. El pasaporte debe tener al menos seis meses de vigencia desde la llegada. Con su itinerario le enviamos los pasos actualizados para su pasaporte.",
    },
    {
      title: "La diferencia horaria",
      body:
        "El Cairo va entre cinco y nueve horas por delante, según el país y la época del año: unas ocho o nueve respecto a Ciudad de México, siete u ocho respecto a Bogotá y Lima, y de cinco a siete respecto a Buenos Aires, Santiago y São Paulo. Por eso el primer día lo dejamos tranquilo: desayuno sin prisa, un paseo junto al Nilo y las pirámides a la mañana siguiente, cuando de verdad se disfrutan.",
    },
    {
      title: "Cuándo venir",
      body:
        "De octubre a abril es la temporada: días cálidos y secos, noches frescas, el tiempo justo para los templos y para la cubierta de un barco en el Nilo. Para quien viaja desde el Cono Sur hay una suerte añadida: sus vacaciones de verano, de diciembre a febrero, coinciden con los mejores meses de Egipto. En julio, en cambio, el Alto Egipto supera a menudo los 40 °C a mediodía; se puede, con mañanas tempranas y descanso a mediodía, y el mar Rojo y Alejandría están entonces en su mejor momento.",
    },
    {
      title: "Precios, dinero y propinas",
      body:
        "Nuestros precios están fijados en euros; si nos visita desde América, verá junto a cada uno una cifra aproximada en dólares, y puede pagar con PayPal desde su país, con tarjeta o por transferencia. En Egipto la moneda es la libra egipcia, y las tarjetas funcionan en los hoteles y en la mayoría de los restaurantes. La propina forma parte de la vida diaria, en cantidades pequeñas y frecuentes: con el itinerario le enviamos una guía breve para que nunca tenga que adivinar.",
    },
    {
      title: "Guías en español",
      body:
        "Trabajamos con egiptólogos titulados de nuestro propio equipo que guían en español, de la primera visita a la última.",
    },
    {
      title: "Cómo funciona un viaje privado",
      body:
        "Todo es privado: su propio egiptólogo, su propio vehículo con conductor y hoteles elegidos por la habitación, no por las estrellas. Díganos sus fechas y cuántos viajan; respondemos en un día hábil con un itinerario real y un precio detallado, sin compromiso.",
    },
  ],
  faqs: [
    { q: "¿Los mexicanos necesitan visa para Egipto?", a: "Sí, pero se tramita en línea: el pasaporte mexicano puede solicitar la visa electrónica de turista en el portal oficial visa2egypt.gov.eg antes de viajar. Compruebe allí la tarifa vigente y pague solo en ese portal." },
    { q: "¿Hay vuelos directos desde Latinoamérica a Egipto?", a: "No. Lo habitual es una escala en Madrid, París, Fráncfort, Estambul, Doha o Dubái; desde las principales capitales de la región se llega a El Cairo en un día." },
    { q: "¿Cuál es la mejor época para viajar desde Argentina o Chile?", a: "Sus vacaciones de verano, de diciembre a febrero: son los mejores meses del año en Egipto, con días templados y noches frescas. Conviene reservar con tres o cuatro meses de antelación, porque coinciden con la temporada alta." },
    { q: "¿Puedo ver los precios en dólares y pagar desde mi país?", a: "Sí. Nuestros precios están fijados en euros y, si nos visita desde América, verá junto a cada uno una cifra aproximada en dólares; el presupuesto indica el importe exacto. Puede pagar con PayPal desde su país, con tarjeta o por transferencia." },
  ],
  cta: {
    heading: "Cuéntenos desde dónde viaja",
    text: "Su país, sus fechas y cuántos viajan bastan para un itinerario escrito y un precio detallado, sin compromiso.",
    whatsapp: "Hola Kemet — viajamos desde Latinoamérica y estamos pensando en Egipto.",
    emailSubject: "Viaje a Egipto desde Latinoamérica — solicitud de itinerario",
  },
  moreLabel: "Seguir leyendo",
  moreRoute: "es/viajes-a-egipto.html",
  moreText: "Todos nuestros itinerarios, con su desarrollo día a día, están en la página de viajes.",
  links: [
    { label: "Mejor época para viajar a Egipto", route: "es/mejor-epoca-para-viajar-a-egipto.html" },
    { label: "Cuánto cuesta viajar a Egipto", route: "es/cuanto-cuesta-viajar-a-egipto.html" },
    { label: "¿Es seguro viajar a Egipto?", route: "es/es-seguro-viajar-a-egipto.html" },
  ],
};

export const ptBrasil: LocalizedPage = {
  groupId: "standalone-pt-brasil",
  symbol: "sun",
  title: "Viajar ao Egito saindo do Brasil: voos, visto e época | Kemet",
  description:
    "Como viajar ao Egito saindo do Brasil: voos com uma escala, o visto eletrônico, o fuso horário e a melhor época — que cai nas suas férias de verão.",
  keywords:
    "viajar ao egito saindo do brasil, visto egito brasileiros, voo para o egito, quando ir ao egito, viagem ao egito do brasil",
  crumb: "Saindo do Brasil",
  h1: "Viajar ao Egito saindo do Brasil",
  standfirst: "Uma escala, um visto pela internet e o melhor inverno do Egito bem nas suas férias de verão.",
  lede:
    "Não há voo direto do Brasil para o Egito, mas há ótimas conexões com uma escala só, e o passaporte brasileiro tira o visto egípcio pela internet. Aqui está o que quem viaja do Brasil pergunta: como chegar, o visto, o fuso horário, quando vale a pena ir e como funciona uma viagem privativa com a gente.",
  facts: [
    { label: "Voos", value: "Com uma escala" },
    { label: "Visto", value: "Eletrônico, pela internet" },
    { label: "Fuso horário", value: "5 a 6 horas à frente de Brasília" },
    { label: "Melhor época", value: "Outubro a abril" },
  ],
  sections: [
    {
      title: "Como chegar",
      body:
        "Não há voo direto entre o Brasil e o Egito, mas a conexão é simples: uma escala em Istambul, Dubai, Doha ou na Europa leva de São Paulo ou do Rio ao Cairo. Nossas viagens podem começar no aeroporto do Cairo: recebemos vocês na chegada e levamos ao hotel.",
    },
    {
      title: "O visto",
      body:
        "O passaporte brasileiro pode pedir o visto eletrônico de turista no portal oficial, visa2egypt.gov.eg, antes da viagem. Confira lá a taxa em vigor, que mudou em 2026, e pague só nesse portal: há sites que o imitam e cobram comissão. O passaporte deve ter pelo menos seis meses de validade a partir da chegada. Junto com o roteiro, mandamos os passos atualizados para o seu passaporte.",
    },
    {
      title: "O fuso horário",
      body:
        "O Cairo fica cinco horas à frente de Brasília no inverno egípcio e seis no verão de lá, quando o Egito adota o horário de verão. Por isso deixamos o primeiro dia tranquilo: café da manhã sem pressa, um passeio à beira do Nilo e as pirâmides na manhã seguinte, quando dá para aproveitar de verdade.",
    },
    {
      title: "Quando ir",
      body:
        "De outubro a abril é a temporada: dias quentes e secos, noites frescas, o clima certo para os templos e para o convés de um barco no Nilo. E para quem sai do Brasil há uma sorte a mais: as férias de verão, de dezembro a fevereiro, caem justamente nos melhores meses do Egito. Em julho, nas férias de inverno, o Alto Egito passa muitas vezes dos 40 °C ao meio-dia; dá para ir, com manhãs cedo e descanso no meio do dia, e o Mar Vermelho e Alexandria estão então no seu melhor.",
    },
    {
      title: "Preços, dinheiro e gorjetas",
      body:
        "Nossos preços são definidos em euros; quem nos visita das Américas vê ao lado de cada um um valor aproximado em dólares, e dá para pagar com PayPal direto do Brasil, com cartão ou por transferência. No Egito a moeda é a libra egípcia, e cartões funcionam nos hotéis e na maioria dos restaurantes. A gorjeta faz parte do dia a dia, em valores pequenos e frequentes: junto com o roteiro mandamos um guia rápido para vocês nunca precisarem adivinhar.",
    },
    {
      title: "Como funciona uma viagem privativa",
      body:
        "Tudo é privativo: seu próprio egiptólogo, seu próprio veículo com motorista e hotéis escolhidos pelo quarto, não pelas estrelas. Nossos próprios egiptólogos guiam em português. Diga-nos as datas e quantas pessoas viajam; respondemos em um dia útil com um roteiro real e um preço detalhado — sem compromisso.",
    },
  ],
  faqs: [
    { q: "Brasileiro precisa de visto para o Egito?", a: "Sim, mas é simples: o passaporte brasileiro pode pedir o visto eletrônico de turista no portal oficial visa2egypt.gov.eg antes de viajar. Confira lá a taxa em vigor e pague só nesse portal." },
    { q: "Tem voo direto do Brasil para o Egito?", a: "Não. O mais comum é uma escala em Istambul, Dubai, Doha ou na Europa; de São Paulo ou do Rio se chega ao Cairo em cerca de um dia." },
    { q: "Qual a melhor época para ir ao Egito saindo do Brasil?", a: "As férias de verão, de dezembro a fevereiro: são os melhores meses do ano no Egito, com dias amenos e noites frescas. Vale reservar com três a quatro meses de antecedência, porque é alta temporada." },
    { q: "Dá para ver os preços em dólar e pagar do Brasil?", a: "Sim. Nossos preços são definidos em euros e, para quem nos visita das Américas, aparece ao lado de cada um um valor aproximado em dólares; o orçamento traz o valor exato. Dá para pagar com PayPal direto do Brasil, com cartão ou por transferência." },
  ],
  cta: {
    heading: "Conte-nos suas datas",
    text: "Datas, quantas pessoas e de onde vocês saem bastam para um roteiro escrito e um preço detalhado — sem compromisso.",
    whatsapp: "Olá Kemet — saímos do Brasil e estamos pensando no Egito.",
    emailSubject: "Viagem ao Egito saindo do Brasil — pedido de roteiro",
  },
  moreLabel: "Continue lendo",
  moreRoute: "pt/viagens-ao-egito.html",
  moreText: "Todos os nossos roteiros, dia a dia, estão na página de viagens.",
  links: [
    { label: "Melhor época para ir ao Egito", route: "pt/melhor-epoca-para-ir-ao-egito.html" },
    { label: "Quanto custa viajar para o Egito", route: "pt/quanto-custa-viajar-para-o-egito.html" },
    { label: "Carnaval no Egito", route: "pt/carnaval-no-egito.html" },
  ],
};
