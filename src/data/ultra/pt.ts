import type { UltraText } from "./types";

export const pt: UltraText = {
  metaTitle: "Viagens de ultraluxo ao Egito — quatro roteiros privados | Kemet",
  metaDescription:
    "Kemet Ultra: a Grande Pirâmide aberta só para vocês, jantar dentro de Karnak, dahabiya ou iate privados, as melhores suítes. De 7 a 15 dias, preços claros.",
  keywords:
    "viagem de ultraluxo egito, viagem privada de luxo egito, grande pirâmide abertura privada, jantar no templo de karnak, dahabiya fretada, iate privado mar vermelho, mena house suíte, old cataract assuã, oberoi philae, lua de mel egito luxo",
  crumb: "Kemet Ultra",

  heroTag: "Kemet Ultra · sob encomenda privada",
  h1: ["O Egito, aberto", "só para vocês"],
  lede:
    "Quatro viagens privadas no topo do mercado egípcio: a Grande Pirâmide aberta para o seu grupo, um jantar dentro de Karnak depois que os portões fecham, uma dahabiya ou um iate sem outros hóspedes e os grandes hotéis nos seus melhores quartos. Com preços à vista, e cada item confirmado por escrito antes de vocês pagarem qualquer coisa.",
  ctaPrimary: "Falar em particular",
  ctaQuiet: "ou envie uma consulta confidencial",

  signaturesOverline: "As assinaturas",
  signatures: [
    ["A Grande Pirâmide, a sós", "duas horas lá dentro, sem nenhum outro visitante"],
    ["Jantar dentro de Karnak", "o templo aberto à noite para o seu grupo"],
    ["O Nilo, fretado", "uma dahabiya só sua, ou o Oberoi Philae em suíte"],
    ["O Mar Vermelho, de iate", "um iate com tripulação entre os recifes de Giftun"],
    ["O céu, em privado", "avião particular para Abu Simbel e para o litoral"],
  ],

  question: "O que é o Kemet Ultra?",
  answer: ({ from2, to2, from4 }) =>
    `O Kemet Ultra é o nível mais alto da Kemet: quatro viagens pelo Egito totalmente privadas, de 7 a 15 dias, com a Grande Pirâmide aberta só para o seu grupo, jantar dentro de Karnak depois do fechamento, uma dahabiya ou um iate fretados e suítes no Mena House, no Old Cataract e nos Oberoi. Para dois, de ${from2} a ${to2} por pessoa; para quatro, a partir de ${from4}.`,

  glanceOverline: "Num relance",
  glanceTitle: "Escolham a sua viagem",

  journeysOverline: "As viagens",
  journeysTitle: ["Quatro maneiras de viver o Egito", "neste nível"],

  labels: {
    duration: (d, n) => `${d} dias / ${n} noites`,
    from: "A partir de",
    perPersonTwo: "por pessoa, para dois",
    perPersonFour: (p) => `${p} por pessoa para quatro`,
    stays: "Onde vocês ficam",
    nights: (n) => (n === 1 ? "1 noite" : `${n} noites`),
    view: "Ver a viagem",
    dayByDay: "Dia a dia",
    day: "Dia",
    enquire: (t) => `Consultar ${t}`,
    priceNote: (peak) =>
      `Preços em euros, por pessoa, de outubro de 2026 a setembro de 2027, incluindo tudo o que está nesta página. Não incluem voos internacionais nem gorjetas. As semanas de maior procura — de 20 de dezembro a 5 de janeiro e a Páscoa — têm um acréscimo de ${peak} %.`,
  },

  place: { giza: "Gizé", cairo: "Cairo", luxor: "Luxor, margem oeste", aswan: "Assuã", nile: "No Nilo", redsea: "Mar Vermelho" },
  room: {
    pyramidSuite: "Suíte com vista para as pirâmides",
    nileSuite: "Suíte com vista para o Nilo",
    palaceWing: "Ala histórica Palace, vista para o Nilo",
    suite: "Suíte",
    charter: "Fretamento completo — o barco inteiro",
    cruiseSuite: "Suíte de luxo",
    poolSuite: "Grand suite com piscina privativa",
  },
  dahabiya: "Dahabiya privada",

  journeys: {
    "private-pharaoh": {
      title: "O faraó privado",
      kicker: "A Grande Pirâmide e Karnak, cada uma aberta só para o seu grupo",
      route: "Cairo · Gizé · Luxor · Abidos",
      body:
        "Uma semana construída em torno de duas portas que normalmente ficam fechadas. Em Gizé, a Grande Pirâmide abre duas horas só para o seu grupo; em Luxor, Karnak continua aberto para vocês depois do fechamento, e o jantar é servido dentro do recinto. Entre as duas: o Grande Museu Egípcio com um egiptólogo sênior, os melhores túmulos do Vale dos Reis e os dois templos aonde quase ninguém chega.",
      highlights: [
        "Abertura privada da Grande Pirâmide — duas horas, só o seu grupo",
        "Karnak aberto depois do fechamento, com jantar no recinto",
        "Os túmulos de Seti I, Nefertari e Tutancâmon",
        "Um cesto de balão privado e uma faluca privada",
        "Um egiptólogo sênior a viagem toda, motorista sempre à disposição",
        "Serviço VIP em cada chegada e partida",
      ],
      days: [
        { t: "Chegada, recebidos na porta do avião", d: "Serviço VIP na imigração e depois o Mena House, onde a Grande Pirâmide enche a janela." },
        { t: "O Grande Museu Egípcio", d: "O tesouro completo de Tutancâmon e a Grande Escadaria com um egiptólogo sênior; a tarde é livre." },
        { t: "Sozinhos dentro da Grande Pirâmide", d: "Duas horas dentro da pirâmide de Quéops, aberta só para vocês, e depois a Pirâmide de Degraus e o Serapeum de Saqqara." },
        { t: "Luxor, e Karnak à noite", d: "Voo para o sul com serviço VIP; à noite Karnak abre para vocês e o jantar é servido no recinto." },
        { t: "Balão ao amanhecer e túmulos reais", d: "Um cesto privado sobre a margem oeste e depois os túmulos de Seti I, Tutancâmon e da rainha Nefertari." },
        { t: "Abidos e Dendera", d: "Os dois templos mais bonitos do Egito de carro particular, almoço no caminho e pôr do sol numa faluca privada." },
        { t: "Partida", d: "Voo para o Cairo, com acompanhamento até o seu voo internacional." },
      ],
    },
    "royal-nile": {
      title: "O Nilo real",
      kicker: "Uma dahabiya fretada para o seu grupo, de Assuã a Esna",
      route: "Cairo · Assuã · Abu Simbel · o Nilo · Luxor",
      body:
        "Quatro noites numa dahabiya à vela sem outros hóspedes: a tripulação, o cozinheiro e as paradas são de vocês, e o barco para onde os grandes cruzeiros não conseguem. Antes, o Cairo com a Grande Pirâmide aberta em privado e uma noite no Old Cataract; Abu Simbel de avião particular; e, no fim, Karnak aberto para o seu jantar.",
      highlights: [
        "Fretamento completo de uma dahabiya de primeira linha — sem outros hóspedes",
        "Abertura privada da Grande Pirâmide; jantar em Karnak depois do fechamento",
        "Abu Simbel de avião particular",
        "Old Cataract, ala histórica Palace, de frente para o Nilo",
        "Os túmulos de Seti I e Nefertari; um balão privado",
        "Serviço VIP em cada chegada e partida",
      ],
      days: [
        { t: "Chegada, recebidos na porta do avião", d: "Serviço VIP e depois o Four Seasons at The First Residence, sobre o Nilo." },
        { t: "O Grande Museu Egípcio", d: "O tesouro de Tutancâmon e a Grande Escadaria com um egiptólogo sênior; uma tarde sem pressa." },
        { t: "Sozinhos dentro da Grande Pirâmide", d: "Duas horas privadas dentro da pirâmide de Quéops e depois a Pirâmide de Degraus e o Serapeum de Saqqara." },
        { t: "Assuã e o Old Cataract", d: "Voo matinal para o sul; Filae de lancha privada e o pôr do sol no terraço onde Agatha Christie se hospedou." },
        { t: "Abu Simbel, e a bordo", d: "Os templos de Ramsés II com a primeira luz, de avião particular; de volta para o almoço, a sua dahabiya zarpa." },
        { t: "Kom Ombo", d: "Navegando para o norte até o templo duplo de Sobek e Hórus; noite ancorados numa margem tranquila." },
        { t: "Gebel el-Silsila e Edfu", d: "As antigas pedreiras de arenito e suas capelas, e depois Edfu, o templo mais bem conservado do Egito." },
        { t: "El Kab", d: "Túmulos escavados na rocha que poucos veem, uma última tarde à vela e jantar no convés." },
        { t: "Luxor, e Karnak à noite", d: "Desembarque em Esna; os túmulos de Seti I e Nefertari; Karnak aberto depois do fechamento, com jantar no recinto." },
        { t: "Balão e partida", d: "Um cesto privado ao amanhecer sobre a margem oeste; voo para o Cairo e partida VIP." },
      ],
    },
    "karnak-to-coral-sea": {
      title: "De Karnak ao mar de coral",
      kicker: "O Oberoi Philae pelo Nilo, e depois um iate privado no Mar Vermelho",
      route: "Cairo · Luxor · o Nilo · Assuã · Abu Simbel · Mar Vermelho",
      body:
        "O cruzeiro clássico pelo Nilo no barco mais refinado do rio, em suíte, com o final que ele merece: um avião particular de Assuã ao Mar Vermelho, uma suíte com piscina privativa e um iate com tripulação para passar o dia entre os recifes de Giftun. No caminho, a Grande Pirâmide e Karnak abrem para vocês.",
      highlights: [
        "O Oberoi Philae, quatro noites em suíte de luxo",
        "Abertura privada da Grande Pirâmide; jantar em Karnak depois do fechamento",
        "Avião particular para Abu Simbel e até o Mar Vermelho",
        "Um iate a motor com tripulação por um dia inteiro",
        "Suítes no Old Cataract e no Oberoi de Sahl Hasheesh",
        "Serviço VIP em cada chegada e partida",
      ],
      days: [
        { t: "Chegada, recebidos na porta do avião", d: "Serviço VIP e depois o Mena House, com a Grande Pirâmide na janela." },
        { t: "O Grande Museu Egípcio", d: "O tesouro de Tutancâmon com um egiptólogo sênior; a tarde é livre." },
        { t: "Sozinhos dentro da Grande Pirâmide", d: "Duas horas privadas dentro da pirâmide de Quéops e depois a Pirâmide de Degraus e o Serapeum de Saqqara." },
        { t: "Luxor, a bordo do Oberoi Philae", d: "Voo para o sul e embarque; à noite Karnak abre para vocês, com jantar no recinto." },
        { t: "A margem oeste", d: "Um balão privado ao amanhecer, os túmulos de Seti I e Nefertari, e o barco zarpa para o sul." },
        { t: "Esna e Edfu", d: "Pela eclusa de Esna até o templo de Hórus em Edfu." },
        { t: "De Kom Ombo a Assuã", d: "O templo à beira-rio de Kom Ombo, e Assuã ao anoitecer." },
        { t: "O Old Cataract", d: "Desembarque em Assuã; Filae de lancha privada; uma faluca privada entre as ilhas ao pôr do sol." },
        { t: "Abu Simbel de avião particular", d: "Os templos de Ramsés II com a primeira luz, de volta a Assuã para o almoço e uma tarde tranquila." },
        { t: "Para o Mar Vermelho, em privado", d: "Avião particular para Hurghada e para o Oberoi de Sahl Hasheesh — uma suíte com piscina privativa." },
        { t: "Um dia de iate", d: "Um iate a motor com tripulação até os recifes de Giftun: snorkel, almoço a bordo e volta ao pôr do sol." },
        { t: "Partida", d: "Voo de volta a partir de Hurghada, ou para o Cairo para a conexão, com serviço VIP." },
      ],
    },
    "grand-odyssey": {
      title: "A grande odisseia privada",
      kicker: "Cada trecho privado — avião, dahabiya e iate",
      route: "Cairo · Assuã · Abu Simbel · o Nilo · Luxor · Mar Vermelho",
      body:
        "O Egito inteiro sem um único momento compartilhado. Avião particular em cada trecho interno; uma dahabiya fretada por quatro noites entre Assuã e Esna; a Grande Pirâmide e Karnak abertos para vocês; e três noites no Mar Vermelho com dois dias a bordo do seu próprio iate. Pensada para uma primeira visita que quer ser a definitiva.",
      highlights: [
        "Avião particular em cada trecho interno",
        "Fretamento completo de uma dahabiya por quatro noites",
        "Abertura privada da Grande Pirâmide; jantar em Karnak depois do fechamento",
        "Dois dias a bordo de um iate com tripulação",
        "Suítes no Mena House, no Old Cataract, no Al Moudira e no Oberoi",
        "Um egiptólogo e um assistente pessoal durante toda a viagem",
      ],
      days: [
        { t: "Chegada, recebidos na porta do avião", d: "Serviço VIP e depois o Mena House, com a Grande Pirâmide na janela." },
        { t: "O Grande Museu Egípcio", d: "O tesouro de Tutancâmon com um egiptólogo sênior; uma tarde sem pressa." },
        { t: "Grande Pirâmide, Saqqara e Dahshur", d: "Duas horas privadas dentro da pirâmide de Quéops, e depois a Pirâmide de Degraus e a Pirâmide Vermelha." },
        { t: "De avião particular para Assuã", d: "O Old Cataract e, à tarde, Filae de lancha privada." },
        { t: "Abu Simbel", d: "De avião particular com a primeira luz; ao pôr do sol, uma faluca privada entre as ilhas." },
        { t: "A bordo da sua dahabiya", d: "O barco é de vocês a partir do almoço, navegando para o norte até Kom Ombo." },
        { t: "Gebel el-Silsila", d: "Pedreiras antigas e capelas talhadas no penhasco; ancoragem numa margem tranquila." },
        { t: "Edfu", d: "O templo de Hórus logo cedo, antes dos visitantes do dia." },
        { t: "El Kab", d: "Túmulos escavados na rocha que poucos veem; um último jantar no convés." },
        { t: "Luxor, e Karnak à noite", d: "Desembarque em Esna e o Al Moudira; Karnak aberto depois do fechamento, com jantar no recinto." },
        { t: "Balão ao amanhecer e túmulos reais", d: "Um cesto privado sobre a margem oeste; os túmulos de Seti I, Tutancâmon e Nefertari." },
        { t: "Para o Mar Vermelho, em privado", d: "Avião particular para Hurghada; uma suíte com piscina privativa no Oberoi de Sahl Hasheesh." },
        { t: "O iate", d: "Os recifes de Giftun num iate a motor com tripulação, almoço no convés." },
        { t: "O iate de novo — ou nada", d: "Outro recife, um mergulho ou o dia no spa." },
        { t: "Partida", d: "Avião particular para o Cairo e serviço VIP até o seu voo de volta." },
      ],
    },
  },

  standardOverline: "Como funciona este nível",
  standard: [
    { title: "Primeiro o preço, depois a prova", body: "Cada preço está nesta página, e cada item da viagem é confirmado por escrito, em nome de vocês, antes de qualquer pagamento." },
    { title: "Um único interlocutor", body: "Quem desenha a viagem é quem responde a vocês enquanto estão no Egito. Nada de central de atendimento, nem de um número que para de responder depois do sinal." },
    { title: "Mudanças sem complicação", body: "Cada viagem pode ser refeita — dias, hotéis, ritmo, um grupo maior ou equipe que viaja com vocês — e é recalculada pelo mesmo critério." },
    { title: "Discrição por regra", body: "Sem grupos, sem carros compartilhados, sem listas de saídas publicadas. Nada sobre quem vocês são ou para onde vão é comentado fora da equipe que organiza." },
  ],

  faqOverline: "Antes de nos escrever",
  faqs: ({ from2, to2, from4, to4, peak }) => [
    { q: "Quanto custa uma viagem de ultraluxo ao Egito?", a: `As quatro viagens Kemet Ultra custam, para dois, de ${from2} por pessoa por sete dias até ${to2} por quinze. Para quatro, o preço por pessoa cai para entre ${from4} e ${to4}, porque o fretamento, o avião e as aberturas privadas são divididos. As semanas de Natal, Réveillon e Páscoa têm um acréscimo de ${peak} %.` },
    { q: "Dá mesmo para abrir a Grande Pirâmide só para nós?", a: "Sim. Durante duas horas a Grande Pirâmide abre só para o seu grupo, fora do horário de visita, com o seu egiptólogo ao lado e mais ninguém lá dentro. Cuidamos de tudo; vocês só precisam chegar." },
    { q: "Como é o jantar dentro de Karnak?", a: "Quando os últimos visitantes vão embora, Karnak abre para o seu grupo. Vocês percorrem a sala hipostila com o seu egiptólogo e o jantar é servido dentro do recinto do templo. Não há nada para vocês organizarem." },
    { q: "Por que o Winter Palace não está na lista?", a: "O Winter Palace de Luxor fechou no início de 2026 para uma restauração completa e reabre em julho de 2027 como Mandarin Oriental Winter Palace. Até lá, em Luxor vocês ficam no Al Moudira, na margem oeste. O Old Cataract de Assuã continua aberto na sua histórica ala Palace enquanto a ala do Nilo é renovada." },
    { q: "Qual dahabiya é fretada?", a: "Uma dahabiya de primeira linha, de seis a dez cabines, fretada inteira, com tripulação e cozinheiro próprios — escolhida para as suas datas e nomeada na proposta por escrito." },
    { q: "Dá para mudar ou estender uma viagem?", a: "Todas. Dias, hotéis, a ordem do roteiro e o ritmo podem mudar, e o preço é recalculado pelo mesmo critério. Grupos maiores, equipe que viaja com vocês e chegadas de jato particular são planejados desde o início." },
    { q: "Com quanta antecedência reservar?", a: "De oito a doze semanas para viajar entre outubro e abril, quando as aberturas privadas e os fretamentos de dahabiya são mais disputados. Às vezes dá com menos prazo; antes de se comprometerem, vocês sabem quais itens ainda podem ser garantidos." },
    { q: "Com quem vamos tratar?", a: "Com uma única pessoa, da primeira mensagem ao último dia no Egito. Se a organização fica a cargo de um family office ou de uma assistente, eles também tratam sempre com a mesma pessoa." },
  ],

  closeTitle: "Contem quem viaja, e quando.",
  closeBody:
    "Cada viagem desta página pode ser mudada. Primeiro vocês recebem um programa por escrito, depois o preço, e nada é pago até cada item estar confirmado em nome de vocês. Tudo fica entre nós.",
  closeCta: "WhatsApp, em particular",
  closeQuiet: "ou por e-mail",

  whatsapp: "Olá Kemet — gostaria de conversar sobre uma viagem Kemet Ultra pelo Egito.",
  whatsappJourney: (t) => `Olá Kemet — gostaria de conversar sobre “${t}” (Kemet Ultra).`,
  mailSubject: "Kemet Ultra — consulta confidencial",
  mailBody: "Contem quem viaja, mais ou menos quando, e qual viagem interessa a vocês.\n\n",
};
