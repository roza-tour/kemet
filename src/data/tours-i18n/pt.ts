// ---------------------------------------------------------------------------
// As viagens em português.
//
// Escrito em português do Brasil — «você», «trem», «ônibus» —, que é o
// português da maior parte de quem nos lê nesta língua. As linhas repetidas
// vivem em phrasebook.ts.
// ---------------------------------------------------------------------------
import type { TourText } from "./types";

export const pt: TourText[] = [
  // ===== Cairo Authentic Food ===========================================
  {
    slug: "tour-cairo-food",
    localeSlug: "noite-gastronomica-no-cairo",
    metaTitle: "Noite gastronômica no Cairo, privativa | Kemet",
    metaDescription: "Uma noite pelos sabores do Cairo: koshari, ful e ta'meya, hawawshi e pombo grelhado, kunafa e basbousa, e no fim um ahwa tradicional.",
    keywords: "tour gastronômico cairo, comida de rua cairo, koshari, comida egípcia, passeio noturno cairo",
    crumb: "Noite gastronômica",
    title: "O Cairo, com todos os sabores",
    subtitle: "Uma noite a pé pelos sabores do Cairo — koshari, clássicos de rua, pombo grelhado e doces encharcados de calda.",
    durationLabel: "Noite (cerca de 4 horas)",
    startPoint: "Hotel no Cairo",
    summary: "Uma degustação guiada, à noite, dos pratos mais queridos do Cairo — koshari, ful e ta'meya, hawawshi e pombo grelhado, kunafa e basbousa, terminando em um ahwa tradicional.",
    overview: "A capital do Egito se descobre melhor a pé e depois que escurece. Esta noite guiada leva você pelos pratos que definem o dia a dia do Cairo — o koshari, uma sinfonia de carboidratos; o ful e a ta'meya, que se comem a qualquer hora; o hawawshi recheado de carne e o pombo grelhado; e, para fechar com doçura, a kunafa e a basbousa. Você termina onde os cairotas terminam: com chá de hortelã e narguilé em um ahwa, o café tradicional. Um contraponto descontraído e saboroso aos monumentos.",
    itinerary: [
      {
        title: "Koshari",
        text: "Começa-se pelo prato nacional do Egito — o koshari, uma camada reconfortante de arroz, lentilha, macarrão e grão-de-bico sob cebola frita crocante e um molho de tomate azedinho.",
        photos: [{ alt: "Koshari: o molho de tomate despejado sobre o macarrão, as lentilhas, o grão-de-bico e a cebola frita", label: "Koshari" }],
      },
      {
        title: "Ful e ta'meya",
        text: "Prove o ful medames, a fava cozida lentamente que se come de manhã à noite, junto com a ta'meya, a versão egípcia do falafel feita de fava, frita na hora.",
        photos: [{ alt: "Uma tigela de ful medames com tomate e ervas, limão e um copo de chá", label: "Ful medames" }, { alt: "Ta'meya com crosta de gergelim em um prato e, atrás, sacos da massa verde de fava e ervas", label: "Ta'meya" }],
      },
      {
        title: "Hawawshi e pombo grelhado",
        text: "Chega o coração salgado da noite — o hawawshi, carne moída temperada assada dentro de um pão crocante, e o hamam mahshi, pombo grelhado recheado com arroz temperado.",
        photos: [{ alt: "Hawawshi aberto mostrando a carne moída temperada, com picles ao lado", label: "Hawawshi" }, { alt: "Dois pombos assados recheados com arroz (hamam mahshi) sobre folhas verdes", label: "Pombo recheado" }],
      },
      {
        title: "Kunafa e basbousa",
        text: "Hora da sobremesa: kunafa morna, com sua massa de fios sobre queijo doce, e quadrados de basbousa, o bolo de semolina encharcado de calda.",
        photos: [{ alt: "Kunafa com pistache, uma fatia erguida sobre o queijo derretido", label: "Kunafa" }, { alt: "Quadrados de basbousa, cada um com uma amêndoa", label: "Basbousa" }],
      },
      {
        title: "Um ahwa tradicional",
        text: "Termina-se em um ahwa de uma rua lateral, com chá de hortelã, café turco e o burburinho da cidade — é assim que toda noite no Cairo deveria acabar.",
        photos: [{ alt: "Dois copos de chá na mesa de um café tradicional, com as paredes cobertas de fotos antigas emolduradas", label: "No ahwa" }],
      },
    ],
    faqs: [
      { q: "A comida está incluída no preço?", a: "Não. O preço cobre o seu guia gastronômico privativo, o roteiro e os traslados. Comida e bebidas são pagas diretamente em cada parada — o guia faz os pedidos e pode dizer o preço de cada prato." },
      { q: "A comida é segura para visitantes?", a: "Sim — escolhemos lugares movimentados e de confiança, com grande rotatividade, e o guia cuida dos pedidos. Há água mineral durante toda a noite." },
      { q: "Vocês atendem a restrições alimentares?", a: "Vegetarianos comem muito bem — o koshari, o ful, a ta'meya e os doces não têm carne. Avise-nos com antecedência sobre alergias e ajustamos o roteiro." },
      { q: "Vou ficar cheio demais?", a: "Você decide quanto pedir em cada parada, e dividindo os pratos dá para provar de tudo sem exagerar em nenhum. Venha com fome, mas sem preocupação." },
    ],
  },
  // ===== Egypt Icons & Nile Cruise =====
  {
    slug: "tour-10-day",
    localeSlug: "egito-10-dias-com-cruzeiro-no-nilo",
    metaTitle: "Egito em 10 dias com cruzeiro pelo Nilo | Kemet",
    metaDescription: "Dez dias privativos: Cairo, Alexandria, trem-leito até Assuã e três noites de cruzeiro até Luxor, com o seu próprio egiptólogo.",
    keywords: "viagem egito 10 dias, roteiro egito com cruzeiro no nilo, cruzeiro nilo assuã luxor, viagem privada egito, cairo luxor assuã",
    crumb: "Ícones e cruzeiro",
    title: "Ícones do Egito e cruzeiro pelo Nilo",
    subtitle: "Dez dias sem pressa, das Pirâmides de Gizé aos templos do Alto Egito, costurados por um cruzeiro de três noites pelo Nilo.",
    durationLabel: "10 dias / 9 noites",
    startPoint: "Cairo (aeroporto ou hotel)",
    summary: "A nossa viagem assinatura: Cairo, Alexandria, um trem-leito rumo ao sul e um cruzeiro de três noites pelo Nilo, de Assuã a Luxor — todas as camadas do Egito num só arco.",
    overview: "Este é o Egito por inteiro, num ritmo feito para ser vivido, e não riscado de uma lista. Vocês começam no Cairo, com os tesouros do Museu Egípcio, passam um dia no Mediterrâneo, em Alexandria, e depois seguem de trem-leito para o sul, até Assuã. De lá, um cruzeiro de três noites leva vocês rio abaixo, passando por Kom Ombo e Edfu, até Luxor, onde esperam os templos de Karnak e as tumbas reais da margem oeste. A volta ao Cairo é para as Pirâmides de Gizé e as vielas gastas pelo tempo do Cairo islâmico. A viagem é privada do começo ao fim, conduzida pelo seu próprio egiptólogo.",
    itinerary: [
      {
        title: "Cairo e o Museu Egípcio",
        items: [
          "Recepção privativa no Aeroporto Internacional do Cairo",
          "Traslado ao hotel e conversa de boas-vindas",
          "Tarde no Museu Egípcio da praça Tahrir — o ouro real de Tânis e as obras-primas do Antigo Império",
        ],
      },
      {
        title: "Alexandria, no Mediterrâneo",
        items: [
          "De carro até Alexandria pela estrada do deserto",
          "Catacumbas de Kom el-Shoqafa e Coluna de Pompeu",
          "Cidadela de Qaitbay, no local do antigo Farol, e a moderna Bibliotheca Alexandrina",
          "Almoço de frutos do mar à beira-mar antes da volta ao Cairo",
        ],
      },
      {
        title: "Cairo copta e trem noturno para Assuã",
        items: [
          "Igreja Suspensa, Abu Serga e as vielas do Cairo Antigo",
          "Traslado à estação no início da noite",
          "Embarque no trem-leito rumo a Assuã, com cabines privativas e jantar a bordo",
        ],
      },
      {
        title: "Assuã e embarque",
        items: [
          "Chegada a Assuã e visita à Alta Barragem e ao Obelisco Inacabado",
          "De lancha até o templo de Filae, na sua ilha, dedicado a Ísis",
          "Embarque no navio de cruzeiro e almoço já navegando pelo rio",
        ],
      },
      {
        title: "Navegando para Kom Ombo e Edfu",
        items: [
          "Manhã de navegação rio abaixo pelo vale do Nilo",
          "Kom Ombo, o templo duplo de Sobek e de Hórus, o Velho",
          "Seguimos para Edfu e o grande Templo de Hórus, o mais bem conservado do Egito",
        ],
      },
      {
        title: "Eclusa de Esna e chegada a Luxor",
        items: [
          "Passagem pela eclusa de Esna, onde o vale se abre",
          "Chegada a Luxor à tarde, com tempo para descansar a bordo",
          "Noite opcional de Som e Luz em Karnak (à parte)",
        ],
      },
      {
        title: "Luxor, margem leste",
        items: [
          "Karnak, o maior complexo de templos do mundo antigo",
          "O Templo de Luxor, no coração da cidade",
          "Desembarque e traslado ao hotel em Luxor",
        ],
      },
      {
        title: "Margem oeste e trem para o Cairo",
        items: [
          "O Vale dos Reis e as colinas de Tebas, cheias de tumbas pintadas",
          "Templo funerário de Hatshepsut e Colossos de Mêmnon",
          "Trem-leito à noite de volta ao Cairo",
        ],
      },
      {
        title: "Gizé e Sacará",
        items: [
          "As pirâmides de Quéops, Quéfren e Miquerinos e a Grande Esfinge",
          "Mirante panorâmico sobre o planalto de Gizé",
          "Pirâmide de Degraus de Djoser, em Sacará, o monumento de pedra mais antigo do mundo",
        ],
      },
      {
        title: "Cairo islâmico e partida",
        items: [
          "Cidadela de Saladino e a mesquita de alabastro de Muhammad Ali",
          "Um último passeio pelo bazar Khan el-Khalili",
          "Traslado privativo ao aeroporto para o voo de volta",
        ],
      },
    ],
    comfort: {
      sleep: "Hotéis no Cairo e em Luxor, três noites no cruzeiro pelo Nilo e duas noites no trem-leito — na versão com voos, hotéis no lugar do trem",
      drives: "Um passeio de um dia do Cairo a Alexandria, ida e volta de carro",
    },
    faqs: [
      { q: "O cruzeiro pelo Nilo é privativo?", a: "Vocês viajam com o seu próprio egiptólogo e com traslados privativos, mas o navio de cruzeiro é compartilhado com outros hóspedes. As cabines são privativas, e todos os passeios são feitos só com o seu grupo." },
      { q: "Como funcionam os trens noturnos?", a: "Vocês viajam numa cabine-leito privativa, com jantar e café da manhã servidos a bordo. Isso poupa um traslado durante o dia, e vocês chegam descansados para os passeios da manhã." },
      { q: "Dá para incluir Abu Simbel?", a: "Sim. Abu Simbel é oferecido como extra opcional a partir de Assuã, num voo curto ou de carro privativo, e o melhor é encaixá-lo no dia de Assuã. Organizamos sob pedido." },
      { q: "Qual é a melhor época do ano para viajar?", a: "De outubro a abril as temperaturas são agradáveis tanto no Cairo quanto no Alto Egito. No verão o sul é quente, então começamos cedo e descansamos à tarde." },
    ],
  },
  // ===== The Grand Tour of Egypt =====
  {
    slug: "tour-grand-14day",
    localeSlug: "grande-viagem-pelo-egito-14-dias",
    metaTitle: "Grande viagem pelo Egito, 14 dias com Mar Vermelho | Kemet",
    metaDescription: "Catorze dias privativos: Cairo, Alexandria, Abu Simbel, três noites de cruzeiro pelo Nilo e três no Mar Vermelho. Voos internos incluídos.",
    keywords: "viagem egito 14 dias, egito em duas semanas, egito e mar vermelho, roteiro egito com abu simbel, cruzeiro nilo e sharm el sheikh",
    crumb: "Grande viagem, 14 dias",
    title: "A grande viagem pelo Egito",
    subtitle: "Catorze dias, todos os registros do país — Cairo, Alexandria, o Nilo de cruzeiro, Abu Simbel e, para terminar, o Mar Vermelho.",
    durationLabel: "14 dias / 13 noites",
    startPoint: "Cairo (aeroporto ou hotel)",
    summary: "A nossa viagem mais completa: Cairo e Alexandria, um cruzeiro pelo Nilo, o templo de Ramsés II escavado na montanha, em Abu Simbel, e três noites no Mar Vermelho para assentar tudo.",
    overview: "Este é o roteiro de quem pretende vir uma vez e ver o Egito inteiro. Os dez primeiros dias pertencem à história: as Pirâmides e o Grande Museu Egípcio, os bairros medieval e copta do Cairo, Alexandria no Mediterrâneo e depois um voo para o sul rumo a Abu Simbel — o templo de Ramsés II escavado na montanha, sobre o lago Nasser —, antes que um cruzeiro de três noites leve vocês pelo Nilo, de Assuã a Luxor. Os quatro últimos dias mudam completamente de tom: depois das tumbas e dos templos de Luxor, vocês voam para Sharm el-Sheikh, onde o deserto encontra algumas das águas mais claras do planeta. Três noites no Mar Vermelho fecham a viagem, com snorkel sobre os recifes de Ras Mohammed e nada na programação que não possa ser cancelado em favor da piscina. Todos os voos internos estão incluídos; todos os dias guiados são privativos.",
    itinerary: [
      {
        title: "Chegada ao Cairo",
        items: [
          "Recepção privativa no aeroporto e traslado ao hotel",
          "À noite, uma conversa de orientação com quem planejou a viagem de vocês",
        ],
      },
      {
        title: "Gizé e o Grande Museu Egípcio",
        items: [
          "As pirâmides, o mirante panorâmico e a Esfinge no frescor da manhã",
          "O tesouro completo de Tutancâmon no Grande Museu Egípcio (GEM)",
        ],
      },
      {
        title: "Cairo islâmico e copta",
        items: [
          "A Cidadela e a mesquita de alabastro de Muhammad Ali",
          "A Igreja Suspensa e as vielas do Cairo Antigo",
          "Khan el-Khalili ao entardecer",
        ],
      },
      {
        title: "Um dia em Alexandria",
        items: [
          "Catacumbas de Kom el-Shoqafa e Coluna de Pompeu",
          "A Cidadela de Qaitbay, no local do Farol",
          "Almoço de frutos do mar na corniche; volta ao Cairo",
        ],
      },
      {
        title: "Voo para o sul — Assuã",
        items: [
          "Voo pela manhã para Assuã",
          "Filae de lancha e o Obelisco Inacabado",
          "Noite livre na corniche",
        ],
      },
      {
        title: "Abu Simbel",
        items: [
          "Saída de carro ao amanhecer rumo a Abu Simbel",
          "O Grande Templo de Ramsés II e o Templo de Nefertari",
          "Volta a Assuã; falua na hora dourada",
        ],
      },
      {
        title: "Embarque no cruzeiro pelo Nilo",
        items: [
          "Manhã livre; embarque antes do almoço",
          "Tarde de partida, navegando pelo rio",
        ],
      },
      {
        title: "Kom Ombo e Edfu",
        items: [
          "O templo duplo de Sobek e de Hórus, o Velho",
          "Edfu — o templo mais bem conservado do Egito",
        ],
      },
      {
        title: "Chegada a Luxor",
        items: [
          "Pela eclusa de Esna até Tebas",
          "O Templo de Luxor iluminado à noite (opcional)",
        ],
      },
      {
        title: "Luxor — as duas margens",
        items: [
          "Karnak na abertura, com o seu egiptólogo",
          "O Vale dos Reis e o templo de Hatshepsut",
          "Desembarque e traslado ao hotel em Luxor",
        ],
      },
      {
        title: "Voo para o Mar Vermelho",
        items: [
          "Voo pela manhã para Sharm el-Sheikh",
          "Check-in; a programação termina aqui, de propósito",
        ],
      },
      {
        title: "Os recifes de Ras Mohammed",
        items: [
          "Dia de barco no parque nacional — duas paradas de snorkel sobre paredões de coral",
          "Almoço no convés, a bordo",
        ],
      },
      {
        title: "Mar Vermelho, dia livre",
        items: [
          "Um dia livre — mergulho, spa ou simplesmente o mar",
          "Jantar de despedida no Old Market, o mercado antigo de Sharm",
        ],
      },
      {
        title: "Partida",
        items: [
          "Voo para o Cairo, com conexão para o voo internacional de vocês",
        ],
      },
    ],
    comfort: {
      sleep: "Hotéis no Cairo e em Assuã, três noites no cruzeiro pelo Nilo, um hotel em Luxor e depois um resort no Mar Vermelho",
      drives: "Um passeio de um dia a Alexandria e o trajeto de Assuã a Abu Simbel, ida e volta de carro",
      early: "Saída de carro antes do amanhecer rumo a Abu Simbel",
    },
    faqs: [
      { q: "Catorze dias é demais para uma primeira visita?", a: "É o tempo de que o Egito precisa para ser visto por inteiro, e não só provado. São os dias de Mar Vermelho no final que tornam a semana de história sustentável — a viagem respira, em vez de acumular cansaço." },
      { q: "Quanto desta viagem é feito de avião?", a: "Três voos internos, de cerca de uma hora cada, que substituem o que de outra forma seriam trechos de doze horas por estrada ou trem. Dois trajetos longos continuam na estrada: o passeio de um dia a Alexandria e a ida e volta de Assuã a Abu Simbel — e este segundo já faz parte da experiência, cruzando o deserto aberto ao amanhecer." },
      { q: "Dá para trocar ou estender o trecho no Mar Vermelho?", a: "À vontade. Alguns viajantes trocam esses dias por noites extras em Luxor ou por Siwa; outros estendem Sharm até completar uma semana. Os dez primeiros dias formam a espinha dorsal, e o ato final vocês moldam como quiserem." },
    ],
  },
  // ===== Honeymoon on the Nile =====
  {
    slug: "tour-honeymoon-9day",
    localeSlug: "lua-de-mel-no-nilo-9-dias",
    metaTitle: "Lua de mel no Nilo: 9 dias pelo Egito a dois | Kemet",
    metaDescription: "Nove dias a dois: nascer do sol privativo nas pirâmides, falua na hora dourada, três noites no Nilo e suítes escolhidas pela vista.",
    keywords: "lua de mel no egito, roteiro lua de mel egito, cruzeiro no nilo lua de mel, lua de mel no nilo, viagem romântica egito",
    crumb: "Lua de mel, 9 dias",
    title: "Lua de mel no Nilo",
    subtitle: "Nove dias feitos para dois — os ícones do Cairo, um cruzeiro de três noites, as ilhas de Assuã e longos fins de tarde dourados, sem pressa para nada.",
    durationLabel: "9 dias / 8 noites",
    startPoint: "Cairo (aeroporto ou hotel)",
    summary: "O Egito como uma lua de mel deve ser — nascer do sol privativo nas pirâmides, uma falua na hora dourada, três noites no Nilo e suítes escolhidas pela vista.",
    overview: "Um roteiro de lua de mel não é um roteiro comum com pétalas de rosa. O ritmo é outro: saídas mais tarde, noites mais longas, um momento marcante por dia em vez de quatro. A viagem começa no Cairo com um nascer do sol privativo em Gizé, com acesso antecipado antes da abertura do planalto, e depois o Grande Museu Egípcio no ritmo de vocês. Vocês voam para o sul até Assuã — a cidade mais suave e romântica do rio — para uma falua privativa na hora dourada e um jantar com vista para a catarata. Um cruzeiro de três noites leva vocês a Luxor, passando por Kom Ombo e Edfu, com um balão ao amanhecer sobre as colinas de Tebas como imagem final. Hotéis e cabines são escolhidos pela vista para o Nilo em toda a viagem, e todos os guias sabem que isto é uma lua de mel, não uma marcha forçada.",
    itinerary: [
      {
        title: "Chegada ao Cairo",
        items: [
          "Recepção privativa no aeroporto e traslado a uma suíte com vista para o Nilo",
          "Noite livre — sugestões de jantar de quem planejou a viagem de vocês",
        ],
      },
      {
        title: "Nascer do sol em Gizé e o museu",
        items: [
          "Nascer do sol no mirante das nove pirâmides e, em seguida, acesso antecipado ao planalto antes da abertura ao público",
          "Café da manhã tardio e depois o Grande Museu Egípcio no ritmo de vocês",
          "Tarde de descanso; à noite, drinques numa falua no Nilo, no Cairo",
        ],
      },
      {
        title: "Voo para Assuã",
        items: [
          "Voo pela manhã para o sul",
          "Filae — o templo de Ísis, deusa do amor, na sua ilha, de lancha",
          "Falua ao pôr do sol entre as ilhas de granito; jantar num terraço núbio",
        ],
      },
      {
        title: "Assuã e embarque",
        items: [
          "Manhã tranquila — a ilha botânica ou o souk, como preferirem",
          "Embarque no cruzeiro pelo Nilo antes do almoço",
          "Tarde de partida no deck superior, ao sol",
        ],
      },
      {
        title: "Kom Ombo e Edfu",
        items: [
          "O templo duplo de Kom Ombo na luz da manhã",
          "O Templo de Hórus, em Edfu, à tarde",
          "Jantar a bordo enquanto o navio atraca para a noite",
        ],
      },
      {
        title: "Eclusa de Esna e chegada a Luxor",
        items: [
          "Um dia na água — o dia de lua de mel de não fazer nada, e lindamente",
          "Chegada a Luxor à noite; o Templo de Luxor iluminado, se quiserem",
        ],
      },
      {
        title: "Balões e margem oeste",
        items: [
          "Voo de balão ao amanhecer sobre a margem oeste de Luxor, se vocês o incluírem (se o tempo permitir)",
          "O Vale dos Reis e o templo de Hatshepsut com o seu egiptólogo",
          "Desembarque e traslado a um hotel em Luxor para as últimas noites",
        ],
      },
      {
        title: "Karnak e um dia a dois",
        items: [
          "Karnak no silêncio do começo da manhã",
          "Tarde inteiramente livre — piscina, spa ou o museu",
          "Jantar de despedida organizado por quem planejou a viagem de vocês",
        ],
      },
      {
        title: "Voo para o Cairo e partida",
        items: [
          "Voo pela manhã para o Cairo, com conexão para o voo internacional de vocês",
        ],
      },
    ],
    comfort: {
      sleep: "Uma suíte com vista para o Nilo no Cairo, um hotel em Assuã, três noites no cruzeiro pelo Nilo e depois um hotel em Luxor",
      early: "O nascer do sol em Gizé, um balão ao amanhecer sobre a margem oeste de Luxor e Karnak logo cedo",
    },
    faqs: [
      { q: "Em que esta viagem difere do roteiro Ícones, de 10 dias?", a: "O percurso se sobrepõe; o ritmo, não. Este roteiro troca Alexandria e os trens-leito por voos, suítes com vista para o Nilo, manhãs mais tardias e noites reservadas. É construído em torno do tempo a dois, e não de ver o máximo possível." },
      { q: "Vocês preparam surpresas — flores, um jantar privativo, um pedido de casamento?", a: "Sim, com discrição e com frequência. Contem a quem planeja a viagem de vocês o que têm em mente, e nós cuidamos da encenação; um pedido num templo pede um pouco de coreografia antecipada, e sabemos exatamente onde ficam os cantos tranquilos." },
      { q: "É seguro incluir o voo de balão?", a: "Os balões de Luxor são operados por empresas licenciadas, sob a supervisão da aviação civil, voam só nas condições calmas do amanhecer e são cancelados sem hesitação quando venta. Reservamos com datas flexíveis, para que uma manhã cancelada possa passar para o dia seguinte." },
    ],
  },
  // ===== Egypt Through the Lens =====
  {
    slug: "tour-photography-7day",
    localeSlug: "viagem-fotografica-egito-7-dias",
    metaTitle: "Viagem fotográfica ao Egito, 7 dias pela luz | Kemet",
    metaDescription: "Sete dias programados pela luz, não pelo horário: Gizé ao nascer do sol, Karnak antes da multidão e um balão opcional sobre Tebas.",
    keywords: "viagem fotográfica egito, fotografia no egito, fotografar as pirâmides, nascer do sol em gizé, expedição fotográfica egito",
    crumb: "Viagem fotográfica, 7 dias",
    title: "O Egito pela lente",
    subtitle: "Sete dias programados pela luz, não pelo horário de abertura — planaltos ao amanhecer, templos na hora azul e o Nilo na hora dourada.",
    durationLabel: "7 dias / 6 noites",
    startPoint: "Cairo (aeroporto ou hotel)",
    summary: "Um roteiro construído de trás para a frente a partir da luz: acesso antecipado a Gizé ao nascer do sol, Karnak antes da multidão, um balão opcional sobre Tebas e faluas na hora dourada.",
    overview: "A maioria dos roteiros pelo Egito coloca vocês nos grandes sítios no meio do dia, com luz chapada e muita gente — as piores horas que uma câmera pode enfrentar. Esta viagem inverte a lógica. Cada dia é programado em torno da primeira e da última luz: acesso antecipado privativo a Gizé antes da abertura do planalto, a sala hipostila de Karnak no sol baixo da manhã, que bate rasante e faz os relevos saltarem da pedra, a Avenida das Esfinges iluminada na hora azul e as velas latinas de Assuã em contraluz na hora dourada. O seu guia entende de fotógrafos — o que significa saber quando falar, quando levar a autorização para o tripé e quando simplesmente deixar vocês a sós com a cena. Quem viaja junto sem fotografar também aproveita muito: a luz que favorece um sensor favorece igualmente uma lembrança.",
    itinerary: [
      {
        title: "Chegada ao Cairo e briefing",
        items: [
          "Traslado privativo e, à noite, briefing do roteiro com o guia",
          "Revisão do equipamento — autorizações para tripé providenciadas onde são exigidas",
        ],
      },
      {
        title: "Gizé na primeira luz",
        items: [
          "Nascer do sol no mirante das nove pirâmides — com tempo para fotografar — e depois o planalto antes da abertura",
          "No meio da manhã: o mirante panorâmico e os ângulos do recinto da Esfinge",
          "Pausa à tarde para editar; a cidade na hora azul vista do Parque Al-Azhar",
        ],
      },
      {
        title: "Cairo islâmico — ruas e lanternas",
        items: [
          "Caminhada na hora dourada pela rua Al-Muizz, enquanto as lanternas se acendem",
          "As vielas do Khan el-Khalili — pessoas, cobre e feixes de luz",
          "Voo para Luxor à noite",
        ],
      },
      {
        title: "Balões e margem oeste",
        items: [
          "Voo de balão ao amanhecer sobre a necrópole de Tebas, se vocês o incluírem (se o tempo permitir)",
          "Interiores do Vale dos Reis — técnica com a câmera na mão, onde o tripé é proibido",
          "Os terraços de Hatshepsut na luz lateral do fim da tarde",
        ],
      },
      {
        title: "Karnak e o Templo de Luxor à noite",
        items: [
          "Karnak na abertura — uma hora antes de chegarem os ônibus de excursão",
          "Tarde no rio: pescadores, faluas e reflexos",
          "A Avenida das Esfinges e o Templo de Luxor iluminados na hora azul",
        ],
      },
      {
        title: "Assuã — velas e granito",
        items: [
          "De carro rumo ao sul pela manhã (parada em Edfu sob pedido)",
          "Filae de lancha — o templo surgindo da água",
          "Falua exclusiva na hora dourada entre as ilhas da catarata",
        ],
      },
      {
        title: "Cores núbias e partida",
        items: [
          "Primeira luz num vilarejo núbio pintado",
          "Voo para o Cairo para a conexão de vocês",
        ],
      },
    ],
    comfort: {
      sleep: "Hotéis no Cairo, em Luxor e em Assuã",
      drives: "De Luxor a Assuã de carro",
      early: "O nascer do sol em Gizé, um balão ao amanhecer sobre a margem oeste e a primeira luz num vilarejo núbio",
    },
    faqs: [
      { q: "Podemos levar um drone?", a: "Não — partam do princípio de que não. As regras do Egito para drones estão entre as mais rígidas do mundo, e o equipamento é confiscado no aeroporto. Tudo neste roteiro é planejado, em vez disso, para perspectivas a partir do chão e do balão." },
      { q: "Tripés são permitidos nos sítios?", a: "Depende do sítio, e as regras mudam; alguns exigem uma autorização paga, outros proíbem de vez, e nos interiores das tumbas reais só se fotografa com a câmera na mão. Providenciamos as autorizações com antecedência onde elas existem e, onde não existem, planejamos a técnica em função disso." },
      { q: "Esta viagem vale a pena para um acompanhante que não fotografa?", a: "Sinceramente, sim. A programação significa apenas ver os sítios nas horas mais vazias e mais bonitas; o único custo é o despertador tocar cedo, e a luz compensa." },
    ],
  },
  // ===== Family Egypt: Pyramids to the Nile =====
  {
    slug: "tour-family-8day",
    localeSlug: "egito-em-familia-8-dias",
    metaTitle: "Egito em família: 8 dias com crianças, privativo | Kemet",
    metaDescription: "O Egito com crianças, do jeito certo: manhãs guiadas curtas, egiptólogos especialistas em famílias e tardes livres na piscina.",
    keywords: "egito com crianças, viagem em família egito, roteiro egito com crianças, pirâmides com crianças, férias em família no egito",
    crumb: "Em família, 8 dias",
    title: "Egito em família: das pirâmides ao Nilo",
    subtitle: "Oito dias pensados para crianças curiosas e pais sem pressa — múmias, faluas, as cores das tumbas pintadas e tardes na piscina.",
    durationLabel: "8 dias / 7 noites",
    startPoint: "Cairo (aeroporto ou hotel)",
    summary: "O Egito com crianças, do jeito certo: manhãs guiadas curtas, egiptólogos especialistas em famílias, tardes na piscina e momentos que nenhuma sala de aula consegue igualar.",
    overview: "O Egito é a sala de aula mais recompensadora do mundo — desde que o ritmo respeite o jeito como as crianças realmente viajam. Esta viagem deixa as visitas guiadas para as manhãs, entrega as tardes às piscinas e aos jardins e conta com guias especialistas em famílias, capazes de explicar a mumificação a uma criança de oito anos com tanta vivacidade que, no jantar, é a criança quem explica de volta. O Cairo e Gizé abrem a viagem com a Esfinge, as galerias de Tutancâmon do Grande Museu Egípcio e as múmias do Museu Nacional da Civilização Egípcia (NMEC). Um voo para o sul (as crianças raramente gostam do trem-leito na segunda vez) leva às tumbas pintadas de Luxor e a uma hora de falua em Assuã, onde a única obrigação é deixar a mão correr pela água do Nilo. Os quartos são suítes familiares ou quartos conjugados em toda a viagem.",
    itinerary: [
      {
        title: "Chegada ao Cairo",
        items: [
          "Recepção privativa no aeroporto — cadeirinhas instaladas, se necessário",
          "Acomodação nos quartos conjugados; noite livre",
        ],
      },
      {
        title: "As pirâmides e a Esfinge",
        items: [
          "O planalto de Gizé no frescor da manhã — pirâmides, mirante panorâmico e Esfinge",
          "Passeio curto de camelo no mirante panorâmico (opcional)",
          "Tarde na piscina; à noite, espetáculo de Som e Luz nas pirâmides (opcional)",
        ],
      },
      {
        title: "Tutancâmon e as múmias",
        items: [
          "Grande Museu Egípcio — o tesouro do rei-menino, contado para mentes jovens",
          "A Sala das Múmias Reais do NMEC, para as crianças maiores e corajosas",
          "Sorvete na corniche do Nilo",
        ],
      },
      {
        title: "Voo para Luxor — Karnak",
        items: [
          "Voo pela manhã para o sul",
          "Karnak em clima de caça ao tesouro: encontrar o escaravelho, contar as colunas",
          "Tarde na piscina do hotel",
        ],
      },
      {
        title: "Vale dos Reis",
        items: [
          "Visita cedo à margem oeste — três tumbas escolhidas pelas cores vivas",
          "O templo de Hatshepsut e os Colossos de Mêmnon",
          "Tarde livre; demonstração de culinária em família no hotel (opcional)",
        ],
      },
      {
        title: "Para Assuã de carro — Edfu",
        items: [
          "De carro rumo ao sul, com parada em Edfu, aonde se chega de charrete puxada a cavalo",
          "Chegada a Assuã; à noite, gelato na corniche",
        ],
      },
      {
        title: "Faluas e cores núbias",
        items: [
          "Filae de lancha — um templo numa ilha já é uma aventura",
          "Passeio de falua à tarde e visita a um vilarejo núbio pintado",
          "Desenhos de hena e chá de hibisco com uma família núbia",
        ],
      },
      {
        title: "Volta para casa via Cairo",
        items: [
          "Voo pela manhã para o Cairo, com conexão para o voo de volta",
        ],
      },
    ],
    comfort: {
      sleep: "Hotéis no Cairo, em Luxor e em Assuã",
      drives: "De Luxor a Assuã de carro, com parada em Edfu",
      early: "Saída cedo para o Vale dos Reis",
    },
    faqs: [
      { q: "Para que idades este roteiro é indicado?", a: "Ele foi pensado para crianças de mais ou menos 6–15 anos. As menores também se saem bem — as manhãs são curtas —, mas as tumbas e os museus causam mais impacto a partir dos sete anos, mais ou menos. Os guias se adaptam na hora a cada criança que têm pela frente." },
      { q: "Quanto as crianças vão caminhar?", a: "As visitas aos sítios duram duas ou três horas, no frescor da manhã, com o carro sempre por perto. A caminhada mais longa é em Karnak, e ela é interrompida por paradas na sombra e, francamente, por brincadeiras." },
      { q: "E se as crianças forem enjoadas para comer?", a: "Sem problema. Os hotéis têm opções conhecidas ao lado dos pratos egípcios, e o guia sempre sabe onde encontrar uma massa ou um frango grelhado de confiança. A maioria das crianças vai embora viciada em suco de manga fresco." },
    ],
  },
  // ===== Egypt Highlights Deluxe =====
  {
    slug: "tour-7-day",
    localeSlug: "egito-em-7-dias",
    metaTitle: "Egito em 7 dias — Cairo, Alexandria e Luxor | Kemet",
    metaDescription: "Uma semana privativa: o Museu Egípcio, Alexandria, os templos e tumbas de Luxor e as Pirâmides de Gizé, com trem-leito entre as cidades.",
    keywords: "viagem egito 7 dias, egito em uma semana, roteiro cairo e luxor, viagem privada egito, passeio alexandria",
    crumb: "Egito em 7 dias",
    title: "O melhor do Egito, em grande estilo",
    subtitle: "Uma semana que reúne o essencial — Cairo, Alexandria e Luxor — com noites de trem-leito entre eles.",
    durationLabel: "7 dias / 6 noites",
    startPoint: "Cairo (aeroporto ou hotel)",
    summary: "As grandes atrações do Egito em sete dias — o Museu Egípcio, Alexandria, os templos e tumbas de Luxor e as Pirâmides de Gizé.",
    overview: "Para quem tem uma semana para dar ao Egito, esta viagem destila o país nos seus maiores clássicos, sem correria. O Cairo abre com o Museu Egípcio; um dia inteiro no Mediterrâneo é dedicado a Alexandria; depois, o trem-leito leva vocês a Luxor, para os templos dos vivos e as tumbas dos mortos. A volta para o norte é para as Pirâmides de Gizé, Sacará e o coração medieval do Cairo islâmico. Tudo privativo, com o seu próprio egiptólogo.",
    itinerary: [
      {
        title: "Cairo e o Museu Egípcio",
        items: [
          "Recepção privativa no aeroporto e traslado ao hotel",
          "Tarde no Museu Egípcio da praça Tahrir",
          "À noite, uma conversa de orientação com o guia",
        ],
      },
      {
        title: "Um dia em Alexandria",
        items: [
          "De carro até a costa do Mediterrâneo",
          "Catacumbas de Kom el-Shoqafa, Coluna de Pompeu e Cidadela de Qaitbay",
          "Bibliotheca Alexandrina e almoço de frutos do mar à beira-mar",
        ],
      },
      {
        title: "Cairo copta e trem noturno para Luxor",
        items: [
          "Igreja Suspensa e Cairo Antigo pela manhã",
          "Traslado à estação à noite",
          "Trem-leito rumo ao sul, com cabines privativas",
        ],
      },
      {
        title: "Luxor, margem leste",
        items: [
          "O complexo de templos de Karnak e a avenida das esfinges",
          "O Templo de Luxor, no coração da cidade",
          "Check-in no hotel em Luxor",
        ],
      },
      {
        title: "Margem oeste e trem para o Cairo",
        items: [
          "O Vale dos Reis e o templo funerário de Hatshepsut",
          "Colossos de Mêmnon",
          "Trem-leito à noite de volta ao Cairo",
        ],
      },
      {
        title: "Gizé e Sacará",
        items: [
          "As Pirâmides de Gizé e a Grande Esfinge",
          "Mirante panorâmico sobre o planalto",
          "Pirâmide de Degraus de Djoser, em Sacará",
        ],
      },
      {
        title: "Cairo islâmico e partida",
        items: [
          "Cidadela de Saladino e Mesquita de Muhammad Ali",
          "Bazar Khan el-Khalili",
          "Traslado privativo ao aeroporto",
        ],
      },
    ],
    comfort: {
      sleep: "Hotéis no Cairo e em Luxor e duas noites no trem-leito — na versão com voos, hotéis no lugar do trem",
      drives: "Um passeio de um dia do Cairo a Alexandria, ida e volta de carro",
    },
    faqs: [
      { q: "Quanto vamos caminhar?", a: "Uma quantidade confortável — complexos de templos como Karnak pedem uma ou duas horas a pé em terreno irregular. Dosamos o ritmo de cada dia e descansamos nas horas de calor." },
      { q: "Os trens noturnos são confortáveis?", a: "Sim. Vocês têm uma cabine-leito privativa, com jantar e café da manhã servidos a bordo, e os longos trajetos acontecem enquanto vocês descansam." },
      { q: "Dá para estender a viagem com um cruzeiro pelo Nilo?", a: "Com certeza — muitos viajantes acrescentam um cruzeiro de 3 ou 4 noites entre Assuã e Luxor. Digam as suas datas e montamos a extensão sob medida." },
    ],
  },
  // ===== Cairo of the Eight Worlds =====
  {
    slug: "tour-cairo-culture-5day",
    localeSlug: "cairo-cultural-5-dias",
    metaTitle: "O Cairo em 5 dias — uma viagem cultural | Kemet",
    metaDescription: "Cinco dias nas camadas de uma única cidade: o Cairo faraônico, copta, islâmico e moderno, lido rua a rua com um guia especialista em história.",
    keywords: "cairo cultural, roteiro cairo 5 dias, cairo islâmico visita guiada, cairo copta, sacará e dahshur passeio",
    crumb: "Cairo cultural",
    title: "O Cairo dos oito mundos",
    subtitle: "Cinco dias dentro das camadas de uma única cidade — o Cairo faraônico, copta, islâmico e moderno, lido rua a rua com um guia especialista em história.",
    durationLabel: "5 dias / 4 noites",
    startPoint: "Cairo (aeroporto ou hotel)",
    summary: "Uma leitura profunda e sem pressa da maior cidade em camadas do mundo — os seus dois museus, três religiões, ruas medievais e a necrópole onde a pirâmide foi inventada.",
    overview: "A maioria dos visitantes dá ao Cairo duas noites e uma lista. Esta viagem dá à cidade cinco dias e uma tese: a de que o Cairo não é uma escala, mas o sítio cultural mais denso do mundo mediterrâneo. A camada faraônica ganha dois dias — Gizé e o arco Sacará–Mênfis–Dahshur, onde a forma da pirâmide foi inventada —, mas o coração do roteiro é a cidade viva: o bairro copta construído dentro de uma fortaleza romana, o tecido milenar do Cairo islâmico percorrido mesquita a mesquita com um guia especialista em história, as rotas comerciais ainda levemente legíveis nas vielas do Khan el-Khalili e os dois grandes museus lidos como uma única coleção dividida ao longo de um século. As noites são planejadas com o mesmo cuidado que as manhãs — um passeio pelas ruas belle époque do centro, um espetáculo sufi de tanoura, um chá onde os cairotas realmente o tomam.",
    itinerary: [
      {
        title: "Chegada e o Museu Egípcio",
        items: [
          "Recepção privativa no aeroporto e traslado",
          "As velhas salas abarrotadas do Museu Egípcio com o seu guia, especialista em história",
          "Passeio à noite pelas ruas belle époque do centro",
        ],
      },
      {
        title: "Gizé e o Grande Museu Egípcio",
        items: [
          "O planalto na abertura — pirâmides, mirante panorâmico, Esfinge",
          "Tarde nas galerias de Tutancâmon do Grande Museu Egípcio",
          "Espetáculo de Som e Luz à noite (opcional)",
        ],
      },
      {
        title: "Sacará, Mênfis e Dahshur",
        items: [
          "A Pirâmide de Degraus de Djoser — onde começa a arquitetura em pedra",
          "O colosso de Ramsés II em Mênfis",
          "As pirâmides Curvada e Vermelha de Dahshur, em geral praticamente vazias",
        ],
      },
      {
        title: "Cairo copta e islâmico",
        items: [
          "A fortaleza romana da Babilônia, a Igreja Suspensa e a Sinagoga Ben Ezra",
          "A mesquita de Ibn Tulun, do século IX, e a Cidadela",
          "A rua Al-Muizz ao entardecer; espetáculo sufi de tanoura depois que escurece",
        ],
      },
      {
        title: "O bazar e a partida",
        items: [
          "O Khan el-Khalili com contexto — oficinas, não só barracas",
          "Último almoço numa casa otomana restaurada",
          "Traslado privativo ao aeroporto",
        ],
      },
    ],
    comfort: {
      sleep: "Um único hotel no Cairo para as quatro noites",
    },
    faqs: [
      { q: "Cinco dias numa só cidade é mesmo material suficiente?", a: "O Cairo daria para quinze. Cinco dias é o ponto em que a cidade deixa de ser um borrão de monumentos e se torna legível — vocês começam a reconhecer dinastias, estilos de mesquita e traçados de rua sem que ninguém aponte. Esse é o objetivo." },
      { q: "Quanto se caminha no dia do Cairo islâmico?", a: "Cerca de quatro quilômetros ao longo do dia, sobre paralelepípedos e pedra, com pausas constantes para as visitas. Sapatos confortáveis importam mais nesta viagem do que em qualquer outra que fazemos." },
      { q: "Dá para incluir Alexandria?", a: "Sim — um sexto dia no Mediterrâneo estende esta viagem com naturalidade. Peçam na reserva e nós o encaixamos." },
    ],
  },
  // ===== Temples of the South =====
  {
    slug: "tour-upper-egypt-5day",
    localeSlug: "templos-do-alto-egito-5-dias",
    metaTitle: "Alto Egito em 5 dias — Luxor, Edfu e Assuã | Kemet",
    metaDescription: "Cinco dias privativos pelo Alto Egito, por estrada: as duas margens de Luxor, Edfu e Kom Ombo no caminho, e depois Filae e as ilhas de Assuã.",
    keywords: "alto egito roteiro, luxor e assuã 5 dias, edfu e kom ombo, egito sem cruzeiro, templos do alto egito",
    crumb: "Alto Egito, 5 dias",
    title: "Os templos do Sul",
    subtitle: "Cinco dias sem pressa pelo Alto Egito — as duas margens de Luxor, a estrada para o sul passando por Edfu e Kom Ombo, e as ilhas de Assuã.",
    durationLabel: "5 dias / 4 noites",
    startPoint: "Luxor (hotel, estação ou aeroporto)",
    summary: "O coração da história antiga do Egito numa viagem privativa por estrada — Karnak, o Vale dos Reis, Edfu, Kom Ombo e Filae, com tempo para absorver tudo de verdade.",
    overview: "O Alto Egito reúne a maior concentração de monumentos do país, e a maioria dos roteiros passa por ele correndo. Este, não. Dois dias inteiros em Luxor separam os templos da margem leste da necrópole da margem oeste, para que nenhum dos dois seja feito às pressas. A viagem de carro para o sul, até Assuã, passa então a fazer parte da viagem, em vez de ser um simples traslado: Edfu e Kom Ombo interrompem a estrada exatamente onde o tráfego fluvial da Antiguidade fazia as suas paradas. Assuã encerra a viagem num registro mais suave — Filae de lancha, as pedreiras de granito e uma hora de falua à vela antes da volta de avião ou de trem. O seu próprio egiptólogo privativo, do primeiro ao último dia.",
    itinerary: [
      {
        title: "Chegada a Luxor e a margem leste",
        items: [
          "Recepção privativa no aeroporto ou na estação de Luxor",
          "O complexo de templos de Karnak — a grande sala hipostila na luz da tarde",
          "O Templo de Luxor ao entardecer, quando os refletores se acendem",
        ],
      },
      {
        title: "A margem oeste por inteiro",
        items: [
          "Vale dos Reis — três tumbas reais com o seu egiptólogo",
          "O templo funerário de Hatshepsut, em terraços, em Deir el-Bahari",
          "Colossos de Mêmnon e a volta por uma estrada de vilarejos ao longo da planície de inundação",
        ],
      },
      {
        title: "Para o sul de carro — Edfu e Kom Ombo",
        items: [
          "De carro pela manhã até Edfu e o Templo de Hórus, o mais bem conservado do Egito",
          "O santuário duplo de Kom Ombo, sobre uma curva do Nilo",
          "Chegada a Assuã no fim da tarde; noite livre na corniche",
        ],
      },
      {
        title: "Assuã — Filae e o rio",
        items: [
          "A Alta Barragem e o Obelisco Inacabado na pedreira de granito",
          "De lancha até o templo de Filae, na sua ilha",
          "Passeio de falua na hora dourada entre as ilhas da Primeira Catarata",
        ],
      },
      {
        title: "Partida — ou Abu Simbel",
        items: [
          "Manhã livre ou, se quiserem, uma excursão opcional bem cedo a Abu Simbel",
          "Traslado privativo ao aeroporto ou à estação de Assuã",
        ],
      },
    ],
    comfort: {
      sleep: "Um hotel em Luxor e depois outro em Assuã",
      drives: "De Luxor a Assuã de carro, com paradas em Edfu e Kom Ombo",
      early: "Só se vocês escolherem a excursão opcional a Abu Simbel no último dia",
    },
    faqs: [
      { q: "Por que ir de carro de Luxor a Assuã em vez de fazer um cruzeiro?", a: "A estrada permite ver Edfu e Kom Ombo sem se prender ao horário fixo de um navio de cruzeiro, e garante todas as noites num quarto de hotel de tamanho normal. Se preferirem navegar, o nosso cruzeiro Nile in Style faz o mesmo trecho pela água." },
      { q: "Esta viagem inclui Abu Simbel?", a: "Não por padrão — mas Abu Simbel se encaixa sem dificuldade como excursão bem cedo a partir de Assuã no último dia, de carro privativo ou num voo curto. Avisem na reserva, para que possamos garantir os horários." },
      { q: "Como chegamos a Luxor para começar?", a: "Num voo da EgyptAir a partir do Cairo (55 minutos) ou no trem-leito noturno. As duas opções se acrescentam facilmente; o roteiro começa assim que vocês chegarem." },
    ],
  },
  // ===== From Pyramids to the Sea =====
  {
    slug: "tour-4-day",
    localeSlug: "cairo-e-alexandria-4-dias",
    metaTitle: "Cairo e Alexandria em 4 dias, privativo | Kemet",
    metaDescription: "Quatro dias no norte do Egito: o Museu Egípcio, um dia inteiro em Alexandria, as Pirâmides de Gizé, Sacará e o Cairo islâmico.",
    keywords: "cairo e alexandria, egito 4 dias, roteiro cairo pirâmides, passeio a alexandria, viagem curta egito",
    crumb: "Cairo e Alexandria",
    title: "Das pirâmides ao mar",
    subtitle: "Quatro dias que juntam os monumentos do Cairo e de Gizé a um dia no Mediterrâneo, em Alexandria.",
    durationLabel: "4 dias / 3 noites",
    startPoint: "Cairo (aeroporto ou hotel)",
    summary: "Uma viagem compacta pelo norte — o Museu Egípcio, as camadas greco-romanas de Alexandria, as Pirâmides de Gizé e o Cairo medieval.",
    overview: "Curta em dias, mas rica em variedade, esta escapada junta os monumentos fundadores do Antigo Império à metrópole cosmopolita de Alexandria, no Mediterrâneo. Vocês começam pelo Museu Egípcio, passam um dia inteiro entre as catacumbas e a cidadela de Alexandria e depois dão a Gizé e a Sacará a luz da manhã que elas merecem, antes de terminar nas vielas do Cairo islâmico. Ideal como viagem independente ou como a primeira metade de um roteiro mais longo pelo Egito.",
    itinerary: [
      {
        title: "Chegada e o Museu Egípcio",
        items: [
          "Recepção privativa no aeroporto e traslado ao hotel",
          "Tarde no Museu Egípcio da praça Tahrir",
          "Sugestões do guia para o jantar de boas-vindas",
        ],
      },
      {
        title: "Um dia em Alexandria",
        items: [
          "Catacumbas de Kom el-Shoqafa",
          "Cidadela de Qaitbay e Bibliotheca Alexandrina",
          "Coluna de Pompeu e almoço de frutos do mar à beira-mar",
        ],
      },
      {
        title: "Gizé e Sacará",
        items: [
          "As Pirâmides de Gizé e a Grande Esfinge",
          "Pirâmide de Degraus de Djoser, em Sacará",
          "Mênfis, a primeira capital do Egito unificado",
        ],
      },
      {
        title: "Cairo islâmico e partida",
        items: [
          "Cidadela de Saladino e Mesquita de Muhammad Ali",
          "Bazar Khan el-Khalili",
          "Traslado privativo ao aeroporto",
        ],
      },
    ],
    comfort: {
      sleep: "Um único hotel no Cairo para as três noites",
      drives: "Um passeio de um dia do Cairo a Alexandria, ida e volta de carro",
    },
    faqs: [
      { q: "Quatro dias bastam para o Cairo e Alexandria?", a: "Sim — este roteiro foi feito para cobrir o essencial das duas cidades sem pressa, com um dia inteiro dedicado a Alexandria e uma manhã inteira ao planalto de Gizé." },
      { q: "Dá para acrescentar Luxor ou um cruzeiro pelo Nilo?", a: "Facilmente. Esta escapada funciona naturalmente como primeira metade; acrescentamos um voo ou o trem-leito para Luxor e Assuã sempre que vocês tiverem mais dias." },
      { q: "Quanto tempo leva a viagem de carro até Alexandria?", a: "Cerca de duas horas e meia a três horas em cada sentido, pela estrada do deserto, num veículo privativo com ar-condicionado e com o guia." },
    ],
  },
  // ===== Red Sea Retreat: Sharm El Sheikh =====
  {
    slug: "tour-sharm-5day",
    localeSlug: "sharm-el-sheikh-5-dias",
    metaTitle: "Mar Vermelho: Sharm el-Sheikh em 5 dias | Kemet",
    metaDescription: "Cinco dias onde as montanhas do Sinai encontram a água mais clara do hemisfério norte: barco privativo em Ras Mohammed e uma noite no deserto.",
    keywords: "sharm el sheikh viagem, mar vermelho egito, ras mohammed snorkel, deserto do sinai passeio, egito praia",
    crumb: "Mar Vermelho, 5 dias",
    title: "Refúgio no Mar Vermelho: Sharm el-Sheikh",
    subtitle: "Cinco dias onde as montanhas do Sinai encontram a água mais clara do hemisfério norte — recifes, noites no deserto e um ócio assumido.",
    durationLabel: "5 dias / 4 noites",
    startPoint: "Sharm el-Sheikh (aeroporto ou hotel)",
    summary: "O Mar Vermelho feito com intenção — um dia de barco privativo em Ras Mohammed, uma noite sob as estrelas no deserto do Sinai e tempo deixado vazio de propósito.",
    overview: "Sharm el-Sheikh fica na ponta da Península do Sinai, onde montanhas desérticas mergulham em uma água tão clara que, vistos da superfície, os recifes se leem como mapas. É o grande respiro do Egito — e é exatamente assim que este roteiro o trata. Dois dias-âncora são organizados de forma privativa: um dia de barco no Parque Nacional de Ras Mohammed, cujas paredes de coral, no encontro dos golfos de Suez e de Ácaba, estão entre os melhores pontos de snorkel do planeta, e uma noite no deserto do Sinai, com chá beduíno, jantar na brasa e observação do céu sob alguns dos céus mais escuros ao alcance de qualquer resort. O resto fica sem programação, por princípio. Funciona como uma escapada por si só ou como o capítulo final de uma viagem mais longa pelo Egito — Luxor fica a menos de uma hora de voo.",
    itinerary: [
      {
        title: "Chegada ao Mar Vermelho",
        items: [
          "Recepção privativa no aeroporto e check-in no resort",
          "Uma conversa de boas-vindas com um drinque — a semana desenhada em torno das preferências de vocês",
        ],
      },
      {
        title: "Ras Mohammed de barco",
        items: [
          "Dia inteiro de barco privativo pelo parque nacional",
          "Duas ou três paradas de snorkel sobre paredes e jardins de coral",
          "Almoço no convés, a bordo",
        ],
      },
      {
        title: "Dia livre",
        items: [
          "Um dia livre — batismo de mergulho, spa ou simplesmente a praia",
          "Passeio ao anoitecer pelo Old Market, o mercado antigo de Sharm, e pela Mesquita Al Sahaba",
        ],
      },
      {
        title: "Noite no deserto do Sinai",
        items: [
          "No fim da tarde, de 4x4 rumo ao interior do Sinai",
          "Chá beduíno, jantar na brasa e observação das estrelas longe das luzes dos resorts",
        ],
      },
      {
        title: "Partida",
        items: [
          "Manhã livre e traslado privativo ao aeroporto",
        ],
      },
    ],
    comfort: {
      sleep: "Um único resort no Mar Vermelho para as quatro noites",
    },
    faqs: [
      { q: "Quando o mar está quente o bastante?", a: "Praticamente sempre. A água vai de 21 °C no inverno a 28 °C no fim do verão; dá para fazer snorkel o ano todo, e mesmo em janeiro fica confortável com uma roupa de neoprene curta (shorty), que o barco leva a bordo." },
      { q: "É preciso saber mergulhar?", a: "Não. Os recifes de Ras Mohammed sobem tão perto da superfície que o snorkel mostra a maior parte do espetáculo. Se vocês quiserem experimentar o mergulho, organizamos um batismo com um centro licenciado no recife do próprio resort." },
      { q: "Dá para combinar com os roteiros pelo Nilo?", a: "Perfeitamente — é assim que a maioria dos nossos viajantes o aproveita. Luxor–Sharm é um voo curto, e quatro dias de Mar Vermelho depois de uma semana de templos é a versão mais bem ordenada do Egito que conhecemos." },
    ],
  },
  // ===== Dive the Red Sea =====
  {
    slug: "tour-red-sea-diving-4day",
    localeSlug: "mergulho-no-mar-vermelho-4-dias",
    metaTitle: "Mergulho no Mar Vermelho: 4 dias em Sharm | Kemet",
    metaDescription: "Quatro mergulhos guiados de barco nos dois melhores conjuntos de pontos do Sinai — Ras Mohammed e Tiran — com um centro PADI avaliado por nós.",
    keywords: "mergulho mar vermelho, mergulho sharm el sheikh, ras mohammed mergulho, estreito de tiran, viagem de mergulho egito",
    crumb: "Mergulho, 4 dias",
    title: "Mergulhar no Mar Vermelho",
    subtitle: "Quatro dias construídos em torno do tempo de fundo — as paredes de Ras Mohammed, os recifes de correnteza do Estreito de Tiran e barcos com grupos pequenos que saem cedo.",
    durationLabel: "4 dias / 3 noites",
    startPoint: "Sharm el-Sheikh (aeroporto ou hotel)",
    summary: "Quatro mergulhos guiados de barco nos dois melhores conjuntos de pontos do Sinai — Ras Mohammed e Tiran — com um centro PADI avaliado por nós, depois de um mergulho de checagem no recife do resort.",
    overview: "O norte do Mar Vermelho é uma das regiões de mergulho de referência no mundo: visibilidade acima de 20 metros como regra, água que nunca chega a ser fria de verdade e paredes de recife que descem da profundidade de snorkel até o azul. Este programa concentra tudo isso em quatro dias, sem economizar na segurança nem nos intervalos de superfície. Depois de um mergulho de checagem no recife do próprio resort, dois dias inteiros de barco cobrem os dois conjuntos essenciais — o Parque Nacional de Ras Mohammed, onde os recifes Shark e Yolanda formam o ponto duplo mais famoso do Sinai, e os quatro recifes batizados do Estreito de Tiran, varridos por correntezas suaves e frequentados por peixes pelágicos. Os mergulhos são feitos com um centro PADI licenciado com que trabalhamos de forma contínua; os grupos têm um limite pequeno de participantes, e acompanhantes que não mergulham são bem-vindos a bordo com equipamento de snorkel.",
    itinerary: [
      {
        title: "Chegada e mergulho de checagem",
        items: [
          "Recepção privativa no aeroporto e check-in no resort",
          "À tarde, ajuste do equipamento e mergulho de checagem no recife do resort",
        ],
      },
      {
        title: "Dia de barco em Ras Mohammed",
        items: [
          "Dois mergulhos guiados — recifes Shark e Yolanda, se as condições permitirem",
          "Almoço no convés e intervalos de superfície longos nos ancoradouros do parque",
        ],
      },
      {
        title: "Dia de barco no Estreito de Tiran",
        items: [
          "Dois mergulhos guiados de correnteza na cadeia de recifes de Tiran",
          "Terceiro mergulho opcional à tarde, ou volta mais cedo para o spa",
        ],
      },
      {
        title: "Manhã sem mergulho e partida",
        items: [
          "Uma manhã na superfície — o intervalo de 18 a 24 horas antes de voar já está previsto",
          "Traslado privativo ao aeroporto",
        ],
      },
    ],
    comfort: {
      sleep: "Um único resort no Mar Vermelho para as três noites",
    },
    faqs: [
      { q: "Qual nível de certificação é necessário?", a: "O Open Water cobre tudo o que está programado; os pontos são mergulhados em perfis de 18 a 30 m. Se vocês não têm certificação, avisem — os mesmos quatro dias se convertem sem complicação em um curso Open Water no mesmo centro." },
      { q: "Por que a última manhã é sem mergulho?", a: "Voar cedo demais depois de mergulhar traz risco de doença descompressiva. O roteiro respeita o intervalo padrão sem voo, para que o último dia de barco nunca precise ser sacrificado por causa de um voo." },
      { q: "O que vamos ver de fato?", a: "Paredes densas de coral mole, nuvens de anthias, peixes-napoleão, tartarugas e tubarões de recife em Ras Mohammed; raias-águia e cardumes de barracudas aproveitam as correntezas de Tiran. O norte do Mar Vermelho recompensa mergulhadores de todos os níveis de experiência." },
    ],
  },
  // ===== Luxor Immersion =====
  {
    slug: "tour-luxor-3day",
    localeSlug: "luxor-em-3-dias",
    metaTitle: "Luxor em 3 dias, privativo — as duas margens | Kemet",
    metaDescription: "Três dias em Luxor sem pressa: Karnak na abertura, o Vale dos Reis antes do calor, os terraços de Hatshepsut e o templo iluminado à noite.",
    keywords: "luxor 3 dias, roteiro luxor, vale dos reis visita, templo de karnak, luxor viagem privativa",
    crumb: "Luxor, 3 dias",
    title: "Imersão em Luxor",
    subtitle: "Três dias no maior museu a céu aberto do mundo — as duas margens vistas como se deve, com o templo iluminado à noite como eixo.",
    durationLabel: "3 dias / 2 noites",
    startPoint: "Luxor (aeroporto, estação ou hotel)",
    summary: "Luxor sem correria: Karnak na abertura, o Vale dos Reis antes do calor, os terraços de Hatshepsut e a Avenida das Esfinges depois que escurece.",
    overview: "Luxor costuma receber um único dia frenético, e no entanto guarda uma das concentrações mais densas de monumentos antigos do planeta. Esta escapada devolve o tempo que faltava. O dia na Margem Leste começa em Karnak na abertura — uma hora antes dos ônibus de excursão — e volta depois que escurece para o Templo de Luxor iluminado, ao longo da restaurada Avenida das Esfinges, que à noite é simplesmente outro monumento. O dia na Margem Oeste desce a três tumbas reais escolhidas pelas cores e pelo fluxo de visitantes, e segue para os terraços de Hatshepsut, talhados no penhasco, e os Colossos de Mêmnon. A última manhã é de vocês: um balão ao amanhecer sobre a necrópole, o excelente Museu de Luxor ou nada. A escapada se encaixa sem esforço no começo ou no fim de qualquer roteiro pelo Cairo, de avião ou de trem-leito.",
    itinerary: [
      {
        title: "A Margem Leste e o templo à noite",
        items: [
          "Recepção na chegada ao aeroporto ou à estação de Luxor",
          "O complexo de templos de Karnak na abertura, com o seu egiptólogo",
          "À noite: o Templo de Luxor iluminado, com entrada pela Avenida das Esfinges",
        ],
      },
      {
        title: "A Margem Oeste",
        items: [
          "Vale dos Reis — três tumbas antes do calor do dia",
          "O Templo Funerário de Hatshepsut, em Deir el-Bahri",
          "Colossos de Mêmnon e a vila dos artesãos de Deir el-Medina (se der tempo)",
        ],
      },
      {
        title: "A manhã de vocês em Luxor e partida",
        items: [
          "Balão de ar quente opcional ao amanhecer, ou a coleção seleta do Museu de Luxor",
          "Traslado privativo ao aeroporto ou à estação",
        ],
      },
    ],
    comfort: {
      sleep: "Um único hotel em Luxor para as duas noites",
      early: "Só se vocês escolherem o balão opcional ao amanhecer na última manhã",
    },
    faqs: [
      { q: "Quais tumbas do Vale dos Reis estão incluídas?", a: "O ingresso padrão dá direito a três tumbas entre as que estão abertas no rodízio, e o guia leva vocês às mais bem pintadas daquele dia. Tutancâmon, Seti I e Ramsés V/VI têm ingressos à parte, que podemos providenciar com antecedência." },
      { q: "A visita noturna ao Templo de Luxor vale a pena?", a: "É a noite com a melhor relação custo-benefício do Egito. A iluminação recupera a cor e a profundidade que o sol do meio-dia apaga, e a Avenida das Esfinges acesa de ponta a ponta é inesquecível." },
      { q: "Como combinar com o Cairo?", a: "De avião (55 minutos) ou no trem-leito noturno, em qualquer sentido. A maioria dos viajantes faz o Cairo primeiro e usa esta escapada como o capítulo sul; acertamos os traslados nos dois casos." },
    ],
  },
  // ===== Cairo VIP Short Stay =====
  {
    slug: "tour-cairo-vip-3day",
    localeSlug: "cairo-vip-3-dias",
    metaTitle: "Cairo VIP em 3 dias — pirâmides e GEM | Kemet",
    metaDescription: "Três dias no Cairo sem atrito: imigração expressa na chegada, o planalto cedo e privativo, o GEM e o Cairo islâmico à luz das lanternas.",
    keywords: "cairo 3 dias, roteiro cairo, grande museu egípcio visita, cairo guia particular, escala no cairo",
    crumb: "Cairo VIP, 3 dias",
    title: "Cairo VIP, estadia curta",
    subtitle: "Três dias sem nenhum atrito — chegada com imigração expressa, as pirâmides e o Grande Museu Egípcio, e o Cairo medieval depois que o pessoal do bate-volta vai embora.",
    durationLabel: "3 dias / 2 noites",
    startPoint: "Cairo (aeroporto, recepção e assistência VIP)",
    summary: "O essencial do Cairo, conduzido como um serviço de concierge: imigração expressa, manhã privativa no planalto, o Grande Museu Egípcio e, à noite, o Cairo islâmico à luz das lanternas.",
    overview: "Pensada para quem passa pelo Cairo com pouco tempo e se recusa a conhecê-lo mal, esta estadia curta condensa o essencial sem nunca parecer apertada. A recepção acontece ainda na área restrita do aeroporto, com imigração expressa e cuidado com a bagagem. A manhã em Gizé é cedo e privativa; o Grande Museu Egípcio vem em seguida, quando a multidão no planalto chega ao pico e vocês já estão em outro lugar. A última noite pertence ao Cairo medieval na sua melhor hora — a rua Al-Muizz e o Khan el-Khalili depois do anoitecer, quando as lanternas tomam o lugar dos grupos de excursão. Um motorista e um egiptólogo só de vocês acompanham a viagem do começo ao fim, e a programação se ajusta hora a hora conforme vocês realmente se sentem.",
    itinerary: [
      {
        title: "Chegada VIP e a Cidadela",
        items: [
          "Recepção na área restrita, imigração expressa e traslado privativo",
          "Tarde na Cidadela de Saladino e na Mesquita de Muhammad Ali",
          "Pôr do sol sobre a cidade antiga, visto do Parque Al-Azhar",
        ],
      },
      {
        title: "Gizé e o Grande Museu Egípcio",
        items: [
          "O planalto na abertura — pirâmides, panorama e Esfinge",
          "Depois do almoço, a grande escadaria do GEM e as galerias de Tutancâmon",
          "Noite livre, com reservas em restaurantes feitas por nós, se quiserem",
        ],
      },
      {
        title: "Cairo medieval e partida",
        items: [
          "O Museu Egípcio da Praça Tahrir ou o Cairo copta — vocês escolhem",
          "A rua Al-Muizz e o Khan el-Khalili quando as lanternas se acendem",
          "Assistência no embarque, com acesso expresso, no aeroporto",
        ],
      },
    ],
    comfort: {
      sleep: "Um único hotel no Cairo para as duas noites",
    },
    faqs: [
      { q: "O que inclui, de fato, o serviço VIP no aeroporto?", a: "Vocês são recebidos na porta do avião ou na ponte de embarque, conduzidos por uma fila expressa de imigração, e a bagagem é levada até o carro. Na partida, a mesma equipe cuida do check-in e da segurança no sentido inverso. O aeroporto do Cairo deixa de ser um incômodo e passa quase despercebido." },
      { q: "O roteiro se adapta a uma chegada tarde ou ao jet lag?", a: "Completamente. A ordem acima é o padrão, não um contrato — o guia reorganiza a sequência conforme a disposição de vocês, e nada se perde ao trocar os dias." },
      { q: "Duas noites bastam para o Cairo?", a: "Bastam para o essencial bem feito, que é a promessa deste roteiro. Se for possível acrescentar uma terceira noite, o dia em Sacará e Dahshur é o melhor complemento." },
    ],
  },
  // ===== Alexandria Overnight =====
  {
    slug: "tour-alexandria-2day",
    localeSlug: "alexandria-com-pernoite-2-dias",
    metaTitle: "Alexandria com pernoite, 2 dias saindo do Cairo | Kemet",
    metaDescription: "Dois dias no Mediterrâneo: as catacumbas, a Cidadela no lugar do Farol, a Biblioteca renascida e uma noite que o bate-volta nunca vê.",
    keywords: "alexandria egito, alexandria saindo do cairo, alexandria 2 dias, catacumbas de kom el shoqafa, bibliotheca alexandrina",
    crumb: "Alexandria, com pernoite",
    title: "Alexandria com pernoite",
    subtitle: "Dois dias mediterrâneos — as catacumbas, a Cidadela sobre o local do Farol, a Biblioteca renascida e uma noite que quem faz bate-volta nunca vê.",
    durationLabel: "2 dias / 1 noite",
    startPoint: "Cairo (busca no hotel)",
    summary: "Alexandria com a metade que faltava: os sítios greco-romanos de dia, depois a corniche ao entardecer, frutos do mar à beira d'água e a luz da manhã que o bate-volta nunca pega.",
    overview: "Alexandria em bate-volta é uma boa corrida; Alexandria com pernoite é outra cidade. Esta viagem faz o circuito essencial como se deve — as Catacumbas de Kom el-Shoqafa, em três níveis, a Coluna de Pompeu, a Cidadela de Qaitbay, erguida exatamente sobre a planta do antigo farol, e a Bibliotheca Alexandrina — e depois fica para as horas que dão sentido à cidade: o passeio pela corniche ao entardecer, frutos do mar escolhidos pelo peso em uma casa tradicional à beira-mar e uma manhã tranquila pelos jardins do Palácio de Montaza e pelo Anfiteatro Romano, antes de uma volta sem pressa ao Cairo. O ritmo mediterrâneo é o objetivo; uma noite aqui recalibra todo um roteiro pelo Egito.",
    itinerary: [
      {
        title: "A cidade antiga",
        items: [
          "De manhã, viagem desde o Cairo pela estrada do deserto",
          "Catacumbas de Kom el-Shoqafa e Coluna de Pompeu",
          "A Cidadela de Qaitbay e a Bibliotheca Alexandrina",
          "Entardecer na corniche e jantar de frutos do mar à beira-mar",
        ],
      },
      {
        title: "Palácios, romanos e volta",
        items: [
          "Os jardins do Palácio de Montaza, com o ar do mar pela manhã",
          "O Anfiteatro Romano de Kom el-Dikka",
          "Volta tranquila ao Cairo até o fim da tarde",
        ],
      },
    ],
    comfort: {
      sleep: "Uma noite em um hotel de frente para o mar em Alexandria",
      drives: "Do Cairo a Alexandria e de volta, por estrada",
    },
    faqs: [
      { q: "Por que pernoitar em vez de fazer o bate-volta?", a: "A viagem de carro leva de cinco a seis horas, ida e volta; num passeio de um dia, isso deixa para Alexandria só o meio do dia. Com o pernoite, vocês estão lá ao entardecer, no jantar e com a luz da manhã — as três melhores horas da cidade — por um custo extra modesto." },
      { q: "Qual é a melhor época para Alexandria?", a: "De abril a outubro, quando o clima mediterrâneo é justamente o motivo da visita. No verão, a cidade fica de 5 a 10 °C mais fresca que o Cairo e vira o refúgio de praia do próprio Egito." },
      { q: "Os frutos do mar são mesmo programa obrigatório?", a: "Sem dúvida. Vocês escolhem o peixe pelo peso, na vitrine de gelo do dia, e ele chega grelhado ou frito, com acompanhamentos alexandrinos. O guia sabe quais casas tradicionais da corniche merecem a fama." },
    ],
  },
  // ===== Cairo to Luxor & Aswan =====
  {
    slug: "tour-3-day",
    localeSlug: "luxor-e-assua-3-dias-com-voos",
    metaTitle: "Luxor e Assuã em 3 dias, voos incluídos | Kemet",
    metaDescription: "Três dias no Alto Egito saindo do Cairo, com voos domésticos incluídos: Karnak, o Vale dos Reis, a Alta Barragem e o templo de Filae.",
    keywords: "luxor e assuã 3 dias, roteiro alto egito, luxor assuã com voos, karnak vale dos reis filae, cairo luxor de avião",
    crumb: "Luxor e Assuã, 3 dias",
    title: "Do Cairo a Luxor e Assuã",
    subtitle: "Três dias pelos templos e tumbas do Alto Egito, com os voos domésticos já incluídos no preço.",
    durationLabel: "3 dias / 2 noites",
    startPoint: "Cairo (voos incluídos)",
    summary: "Um circuito rápido, com voos incluídos, por Luxor e Assuã — Karnak, o Vale dos Reis, Filae e a Alta Barragem —, com ida e volta a partir do Cairo.",
    overview: "Quando o tempo é curto mas o que atrai é o Alto Egito, este circuito com voos incluídos entrega os sítios mais emblemáticos do sul em três dias concentrados. Vocês voam do Cairo a Luxor para os templos da Margem Leste e as tumbas reais da Oeste, seguem de carro até Assuã para a Alta Barragem e o templo de Filae, na sua ilha, e depois voam de volta ao Cairo. Os voos domésticos estão incluídos, então as longas distâncias desaparecem e os dias ficam cheios de monumentos, e não de traslados.",
    itinerary: [
      {
        title: "Voo para Luxor — a Margem Leste",
        items: [
          "Voo pela manhã do Cairo a Luxor, com recepção na chegada",
          "Complexo de templos de Karnak",
          "Templo de Luxor e pernoite em Luxor",
        ],
      },
      {
        title: "Margem Oeste e rumo a Assuã",
        items: [
          "Vale dos Reis e o Templo Funerário de Hatshepsut",
          "Colossos de Mêmnon",
          "Viagem de carro até Assuã ao longo do Nilo e pernoite",
        ],
      },
      {
        title: "Assuã e voo para o Cairo",
        items: [
          "Alta Barragem de Assuã e o Obelisco Inacabado",
          "Templo de Filae, na ilha, de lancha",
          "Voo à tarde de volta ao Cairo",
        ],
      },
    ],
    comfort: {
      sleep: "Um hotel em Luxor e depois outro em Assuã",
      drives: "De Luxor a Assuã por estrada",
    },
    faqs: [
      { q: "Os voos domésticos estão mesmo incluídos?", a: "Sim — os voos Cairo–Luxor e Assuã–Cairo fazem parte do preço. Vocês só providenciam os voos internacionais de ida e volta ao Cairo." },
      { q: "Três dias não é corrido demais?", a: "É um ritmo ágil, mas bem encadeado: os voos eliminam os longos trajetos por estrada, e cada dia é passado nos monumentos, não viajando entre eles." },
      { q: "Dá para incluir Abu Simbel a partir de Assuã?", a: "Sim, como extra opcional, por um voo cedo ou de carro particular. Isso acrescenta algumas horas à manhã em Assuã, por isso planejamos com antecedência." },
    ],
  },
  // ===== Fayoum Oasis =====
  {
    slug: "tour-fayoum",
    localeSlug: "oasis-de-faium-passeio-de-um-dia",
    metaTitle: "Oásis de Faium — passeio privativo de um dia | Kemet",
    metaDescription: "Um dia inteiro no oásis verde a sudoeste do Cairo: lagos, cachoeiras no deserto, baleias fósseis e uma vila de oleiros.",
    keywords: "oásis de faium, wadi el rayan, vale das baleias wadi al hitan, passeio saindo do cairo, lago qarun",
    crumb: "Oásis de Faium",
    title: "O oásis de Faium",
    subtitle: "Um dia inteiro no oásis verde a sudoeste do Cairo — lagos, cachoeiras no deserto, baleias fósseis e uma vila de oleiros.",
    durationLabel: "Dia inteiro (cerca de 10 horas)",
    startPoint: "Hotel no Cairo ou em Gizé",
    summary: "O lago Qarun, as cachoeiras e dunas de Wadi el-Rayan, as baleias fósseis de Wadi al-Hitan e os oleiros da vila de Tunis — a outra metade do Egito, selvagem e verde.",
    overview: "A uma hora e meia a sudoeste do Cairo, a depressão de Faium troca monumentos por paisagem: um grande lago salgado, cachoeiras de água doce no deserto, um vale da UNESCO com baleias fossilizadas e uma vila de oleiros na encosta. Este dia inteiro é uma completa mudança de registro em relação aos templos — horizontes amplos, aves, dunas e um almoço de peixe à beira do lago. A viagem é privativa, com guia e motorista só de vocês durante o dia todo.",
    itinerary: [
      {
        title: "Lago Qarun",
        text: "Começa-se às margens do lago Qarun, o antigo lago Moeris, onde se reúnem aves migratórias e velhos barcos de pesca se alinham na água. Um primeiro contato com o oásis antes de seguir mais fundo no deserto.",
      },
      {
        title: "As cachoeiras de Wadi el-Rayan",
        text: "As maiores cachoeiras do Egito, onde os dois lagos de Rayan transbordam entre as dunas. Há tempo para caminhar pela margem e absorver uma paisagem que não lembra em nada o vale do Nilo.",
      },
      {
        title: "Vale das Baleias (Wadi al-Hitan)",
        text: "Um sítio do Patrimônio Mundial da UNESCO que guarda esqueletos de baleias primitivas de 40 milhões de anos, preservados onde um dia houve um mar antigo. Um museu a céu aberto do tempo profundo, em meio à areia.",
      },
      {
        title: "Lago Mágico e montanha de Mudawara",
        text: "O chamado Lago Mágico, alimentado por fontes minerais e que muda de cor com a luz, aos pés das dunas de Mudawara — um lugar muito procurado para o sandboard e para um momento de quietude.",
      },
      {
        title: "Vila de oleiros de Tunis e almoço à beira do lago",
        text: "Termina-se em Tunis, a vila na encosta famosa por seus oleiros e ateliês, e depois vem um almoço de peixe tranquilo à beira do lago, antes da volta de carro ao Cairo.",
      },
    ],
    faqs: [
      { q: "O Faium é indicado para famílias?", a: "Sim — a mistura de lagos, dunas e fósseis agrada a todas as idades. O terreno é fácil, com caminhadas curtas em vez de trilhas longas." },
      { q: "O que vestir e levar?", a: "Calçados confortáveis, proteção solar e uma camada leve para a brisa que vem do lago. Os trechos de deserto podem ter poeira, então óculos de sol ajudam." },
      { q: "Qual é a distância do Cairo?", a: "Cerca de 90 minutos a duas horas em cada sentido, em veículo particular, dependendo do hotel e do trânsito na saída da cidade." },
    ],
  },
  // ===== Giza & the Grand Museum =====
  {
    slug: "tour-giza-museum",
    localeSlug: "gize-e-grande-museu-egipcio",
    metaTitle: "Gizé e o Grande Museu Egípcio, dia privativo | Kemet",
    metaDescription: "Pirâmides e Esfinge pela manhã, o Grande Museu Egípcio à tarde — a maravilha antiga e o novo museu em um só dia, de forma privativa.",
    keywords: "grande museu egípcio, pirâmides de gizé passeio, gizé e gem, tutancâmon museu cairo, passeio pirâmides e museu",
    crumb: "Gizé e GEM",
    title: "Gizé e o Grande Museu",
    subtitle: "As Pirâmides e a Esfinge pela manhã, o Grande Museu Egípcio à tarde — a maravilha antiga e a nova, em um só dia.",
    durationLabel: "Dia inteiro (cerca de 8 horas)",
    startPoint: "Hotel no Cairo ou em Gizé",
    summary: "A Grande Pirâmide, o panorama das três pirâmides, o Templo do Vale e a Esfinge, e depois o imenso novo Grande Museu Egípcio, ao lado delas.",
    overview: "Este dia coloca a maravilha mais antiga do mundo ao lado do museu mais novo, construído para guardar seus tesouros. A manhã pertence ao planalto de Gizé — as pirâmides de Quéops, Quéfren e Miquerinos, o mirante panorâmico e a Grande Esfinge, guardiã do seu templo do vale. A tarde segue para o Grande Museu Egípcio, o maior museu arqueológico do mundo, cujas galerias e grande escadaria finalmente reúnem a coleção de Tutancâmon por completo. Guia particular e traslados privativos durante todo o dia.",
    itinerary: [
      {
        title: "Grande Pirâmide de Quéops",
        text: "Ao pé da única maravilha do mundo antigo que sobreviveu, a pirâmide de Quéops, vocês descobrem como ela foi erguida. A entrada nas câmaras internas é possível como extra opcional.",
      },
      {
        title: "Quéfren, Miquerinos e o panorama",
        text: "Em seguida, as pirâmides de Quéfren e Miquerinos e o mirante panorâmico onde as três se alinham sobre o deserto — a imagem clássica de Gizé.",
      },
      {
        title: "Templo do Vale e a Grande Esfinge",
        text: "O caminho atravessa o Templo do Vale de Quéfren, construído em granito, até os pés da Grande Esfinge, a guardiã com corpo de leão esculpida na própria rocha do planalto.",
      },
      {
        title: "Grande Museu Egípcio (GEM)",
        text: "Depois, o Grande Museu Egípcio, ao lado do planalto — sua grande escadaria de estatuária e as galerias completas de Tutancâmon, a coleção mais emblemática do Egito moderno.",
      },
    ],
    faqs: [
      { q: "Podemos entrar na Grande Pirâmide?", a: "Sim, como extra opcional. Um número limitado de ingressos para as câmaras internas é vendido a cada dia; podemos garantir os de vocês sob pedido, conforme a disponibilidade." },
      { q: "O Grande Museu Egípcio está totalmente aberto?", a: "As galerias principais, a grande escadaria e a coleção de Tutancâmon estão abertas ao público. O guia se concentra nos destaques, para que a tarde nunca pareça corrida." },
      { q: "Quanto se caminha neste dia?", a: "Uma quantidade moderada, pelo planalto e pelas galerias do museu. Seguimos no ritmo de vocês, com pausas na sombra." },
      { q: "Dá para ver as galerias de Tutancâmon de forma privativa?", a: "Sim, como extra opcional: as galerias de Tutancâmon são abertas só para o grupo de vocês durante uma hora e meia, sem nenhum outro visitante em meio ao tesouro do rei-menino. Mencionem isso no pedido, para que possa ser organizado na data de vocês." },
      { q: "Dá para circular pelo planalto de carrinho de golfe?", a: "Sim, como extra opcional privativo. Um carrinho de golfe só para o grupo de vocês percorre o planalto, em vez de vocês caminharem os longos trechos entre os monumentos — uma boa ideia com crianças pequenas, para viajantes mais velhos ou no calor do meio-dia." },
    ],
  },
  // ===== Saqqara, Memphis & Dahshur =====
  {
    slug: "tour-saqqara",
    localeSlug: "sacara-menfis-e-dahshur",
    metaTitle: "Sacará, Mênfis e Dahshur — dia privativo | Kemet",
    metaDescription: "O berço da pirâmide: a Pirâmide de Degraus de Djoser, o museu a céu aberto de Mênfis e as pirâmides Curvada e Vermelha de Dahshur.",
    keywords: "sacará passeio, saqqara pirâmide de degraus, pirâmide de djoser, dahshur pirâmide vermelha, mênfis egito",
    crumb: "Sacará, Mênfis e Dahshur",
    title: "Sacará, Mênfis e Dahshur",
    subtitle: "O berço da pirâmide — da primeira pirâmide de degraus, a de Djoser, às grandes tumbas geométricas de Dahshur.",
    durationLabel: "Dia inteiro (cerca de 8 horas)",
    startPoint: "Hotel no Cairo ou em Gizé",
    summary: "A Pirâmide de Degraus de Djoser, as ruínas a céu aberto de Mênfis e as pirâmides Curvada e Vermelha de Dahshur — a história de como a pirâmide foi inventada.",
    overview: "Antes de Gizé houve Sacará. Este dia acompanha a invenção da pirâmide por três sítios ao sul do Cairo, muitas vezes mais tranquilos que Gizé — e, por isso mesmo, com mais atmosfera. Vocês começam pela Pirâmide de Degraus de Djoser, a construção monumental em pedra mais antiga do mundo, caminham pelos vestígios a céu aberto de Mênfis, a primeira capital, e terminam em Dahshur, onde as pirâmides Curvada e Vermelha mostram o salto de engenharia rumo à forma da pirâmide verdadeira. Privativo do começo ao fim.",
    itinerary: [
      {
        title: "Pirâmide de Degraus de Djoser",
        text: "A peça central de Sacará — a pirâmide escalonada projetada por Imhotep para o rei Djoser, o mais antigo grande monumento de pedra do mundo, no seu vasto recinto funerário.",
      },
      {
        title: "Mênfis e o colosso de Ramsés II",
        text: "O museu a céu aberto de Mênfis, antiga capital do Egito unificado, onde estão um colosso deitado de Ramsés II e uma esfinge de alabastro finamente esculpida.",
      },
      {
        title: "Pirâmide Curvada de Dahshur",
        text: "Em Dahshur, a Pirâmide Curvada de Seneferu, cuja mudança de ângulo registra o momento em que os engenheiros antigos corrigiram o rumo no meio da obra.",
      },
      {
        title: "Pirâmide Vermelha",
        text: "A Pirâmide Vermelha, ali perto, a primeira pirâmide verdadeira bem-sucedida, onde é possível entrar e descer até as câmaras com teto em falsa abóbada.",
      },
    ],
    faqs: [
      { q: "Como Sacará se compara a Gizé?", a: "Sacará é mais antiga e costuma ser mais tranquila. Ela conta a história de como as pirâmides se desenvolveram, da forma escalonada de Djoser às pirâmides verdadeiras de Dahshur — o complemento perfeito para um dia em Gizé." },
      { q: "Dá para entrar nas pirâmides de Dahshur?", a: "Sim — a Pirâmide Vermelha costuma estar aberta à visitação interna, com uma passagem baixa, percorrida de corpo curvado, que desce até as câmaras funerárias. O guia orienta vocês no dia." },
      { q: "É um bom primeiro dia no Cairo?", a: "É um primeiro dia excelente — menos multidão e uma narrativa clara, que deixa mais rica a visita a Gizé depois." },
    ],
  },
  // ===== Religious Cairo & the Citadel =====
  {
    slug: "tour-religious-citadel",
    localeSlug: "cairo-religioso-e-cidadela",
    metaTitle: "Cairo religioso e a Cidadela — dia privativo | Kemet",
    metaDescription: "As religiões do Cairo em um dia: igrejas coptas, uma sinagoga antiga e a grande Cidadela coroada por sua mesquita.",
    keywords: "cairo copta, igreja suspensa cairo, sinagoga ben ezra, cidadela de saladino, mesquita de muhammad ali",
    crumb: "Cairo religioso",
    title: "O Cairo religioso e a Cidadela",
    subtitle: "As religiões do Cairo em um só dia — igrejas coptas, uma sinagoga antiga e a grande Cidadela coroada por uma mesquita.",
    durationLabel: "Dia inteiro (cerca de 8 horas)",
    startPoint: "Hotel no Cairo ou em Gizé",
    summary: "A Igreja Suspensa, a Sinagoga Ben Ezra e Abu Serga no Cairo Antigo, depois a Cidadela de Saladino e a mesquita de alabastro de Muhammad Ali.",
    overview: "O patrimônio religioso do Cairo sobrepõe as histórias copta, judaica e islâmica em poucos quilômetros quadrados. Este dia vai das vielas do Cairo Antigo — a Igreja Suspensa, a antiga Sinagoga Ben Ezra e a igreja de Abu Serga — até a Cidadela medieval de Saladino, coroada pela mesquita de alabastro de Muhammad Ali, com amplas vistas sobre a cidade. Um dia contemplativo e cheio de atmosfera, conduzido pelo seu egiptólogo.",
    itinerary: [
      {
        title: "A Igreja Suspensa",
        text: "O dia começa no Cairo copta, na Igreja Suspensa, erguida sobre a torre de um portão romano — uma das igrejas mais antigas do Egito, com seus delicados biombos de madeira e seus ícones.",
      },
      {
        title: "Sinagoga Ben Ezra e Abu Serga",
        text: "Pelas vielas estreitas até a Sinagoga Ben Ezra e a igreja de Abu Serga, que, segundo a tradição, marca o lugar onde a Sagrada Família se abrigou no Egito.",
      },
      {
        title: "Cidadela de Saladino",
        text: "A subida à Cidadela de Saladino, a fortaleza medieval que dominou o Cairo por séculos, com panoramas que, em dia claro, alcançam as pirâmides.",
      },
      {
        title: "Mesquita de Muhammad Ali",
        text: "O dia termina dentro da mesquita de alabastro de Muhammad Ali, o marco em estilo otomano cujas cúpulas definem o horizonte do Cairo.",
      },
    ],
    faqs: [
      { q: "Existe um código de vestimenta?", a: "Sim — nos locais religiosos é exigida roupa discreta: ombros e joelhos cobertos, e sapatos retirados na mesquita. Tragam um lenço; no dia, orientamos vocês." },
      { q: "Os locais ficam perto uns dos outros?", a: "Os locais do Cairo copta ficam a uma curta caminhada uns dos outros; a Cidadela fica a um trajeto curto de carro particular, então o dia flui com conforto." },
      { q: "Os locais estarão abertos?", a: "Planejamos em torno dos horários de oração e de eventuais fechamentos, para que a visita corra bem. Fotografar costuma ser permitido, com algumas restrições nos interiores." },
    ],
  },
  // ===== Cairo Museums =====
  {
    slug: "tour-cairo-museums",
    localeSlug: "museus-do-cairo",
    metaTitle: "Museus do Cairo — um dia com as Múmias Reais | Kemet",
    metaDescription: "Duas grandes coleções em um dia: o histórico Museu Egípcio da Praça Tahrir e o Museu Nacional da Civilização Egípcia, com as Múmias Reais.",
    keywords: "museu egípcio cairo, museu nacional da civilização egípcia, múmias reais cairo, museus do cairo, sala das múmias",
    crumb: "Museus do Cairo",
    title: "Os museus do Cairo",
    subtitle: "Duas grandes coleções em um dia — o histórico Museu Egípcio e o Museu Nacional da Civilização Egípcia, com as Múmias Reais.",
    durationLabel: "Dia inteiro (cerca de 7 horas)",
    startPoint: "Hotel no Cairo ou em Gizé",
    summary: "Os tesouros do Museu Egípcio, na Praça Tahrir, e depois o Museu Nacional da Civilização Egípcia e sua Sala das Múmias Reais.",
    overview: "Um dia para quem ama os objetos em si. Vocês começam pelo célebre Museu Egípcio da Praça Tahrir, cujas salas centenárias guardam a concentração mais densa de tesouros faraônicos do mundo, e seguem para o moderno Museu Nacional da Civilização Egípcia (NMEC), onde a grande Sala das Múmias Reais apresenta os reis e rainhas do Novo Império em galerias silenciosas e climatizadas. Um dia de conhecedor, narrado pelo seu egiptólogo.",
    itinerary: [
      {
        title: "Museu Egípcio, Tahrir",
        text: "O grande e antigo museu da Praça Tahrir — estátuas, sarcófagos, papiros e o ouro do Novo Império, percorridos destaque por destaque com o guia.",
      },
      {
        title: "Museu Nacional da Civilização Egípcia",
        text: "Atravessa-se a cidade até o NMEC, em Fustat, um museu moderno que conta o Egito da pré-história aos dias de hoje em uma única e ampla narrativa.",
      },
      {
        title: "Sala das Múmias Reais",
        text: "A descida à penumbra da Sala das Múmias Reais, onde os corpos preservados de faraós como Ramsés II e Hatshepsut repousam em uma exposição digna.",
      },
    ],
    faqs: [
      { q: "A Sala das Múmias Reais está incluída?", a: "Sim — a Sala das Múmias Reais faz parte da visita. Ela está coberta pelo ingresso do NMEC, que, como todos os ingressos dos nossos passeios de um dia, é pago pelo valor oficial da bilheteria, sem nenhum acréscimo. É um espaço silencioso e respeitoso, e não é permitido fotografar lá dentro." },
      { q: "Qual é a diferença entre os dois museus?", a: "O Museu Egípcio é denso, histórico e repleto de tesouros; o NMEC é moderno e narrativo, com as múmias como peça central. Juntos, dão um panorama completo." },
      { q: "Não é muita coisa para um dia só?", a: "Não com um guia que seleciona os destaques. Focamos nos objetos essenciais de cada um, com uma pausa entre os dois museus." },
    ],
  },
  // ===== Alexandria Sightseeing =====
  {
    slug: "tour-alexandria",
    localeSlug: "alexandria-passeio-de-um-dia",
    metaTitle: "Alexandria — passeio de um dia saindo do Cairo | Kemet",
    metaDescription: "Um dia inteiro no Mediterrâneo: catacumbas, uma coluna romana, uma cidadela cercada pelo mar e a grande biblioteca moderna.",
    keywords: "alexandria passeio de um dia, alexandria saindo do cairo, catacumbas de kom el shoqafa, cidadela de qaitbay, bibliotheca alexandrina",
    crumb: "Alexandria, um dia",
    title: "Alexandria em um dia",
    subtitle: "Um dia inteiro no Mediterrâneo — catacumbas, uma coluna romana, uma cidadela cercada pelo mar e a grande biblioteca moderna.",
    durationLabel: "Dia inteiro (cerca de 11 horas)",
    startPoint: "Hotel no Cairo ou em Gizé",
    summary: "As Catacumbas de Kom el-Shoqafa, a Coluna de Pompeu, a Cidadela de Qaitbay no antigo local do Farol e a Bibliotheca Alexandrina, com almoço de frutos do mar.",
    overview: "A cidade de Alexandre carrega com leveza o seu passado greco-romano ao longo da curva de uma corniche mediterrânea. Este dia inteiro passa pelas Catacumbas subterrâneas de Kom el-Shoqafa, pela imponente Coluna de Pompeu, pela Cidadela de Qaitbay, construída sobre as fundações do lendário Farol, e pela altiva e moderna Bibliotheca Alexandrina — herdeira da antiga Biblioteca. Um almoço de frutos do mar à beira-mar vem junto, naturalmente. Guia particular e traslados privativos a partir do Cairo.",
    itinerary: [
      {
        title: "Catacumbas de Kom el-Shoqafa",
        text: "A descida às Catacumbas de Kom el-Shoqafa, uma necrópole romana de vários níveis onde os estilos egípcio e clássico se misturam na pedra esculpida — uma das maravilhas mais singulares da Antiguidade.",
      },
      {
        title: "Coluna de Pompeu",
        text: "Visita à Coluna de Pompeu, a grande coluna triunfal romana que se ergue das ruínas do Serapeu, ladeada por esfinges de granito.",
      },
      {
        title: "Cidadela de Qaitbay",
        text: "Um passeio pelas muralhas sobre o mar da Cidadela de Qaitbay, construída exatamente no ponto onde um dia esteve o Farol — uma das maravilhas do mundo antigo.",
      },
      {
        title: "Bibliotheca Alexandrina e almoço de frutos do mar",
        text: "O dia termina na impressionante e moderna Bibliotheca Alexandrina, a Biblioteca de Alexandria renascida, depois de um almoço tranquilo de frutos do mar à beira do Mediterrâneo.",
      },
    ],
    faqs: [
      { q: "Quanto tempo leva a viagem desde o Cairo?", a: "Cerca de duas horas e meia a três horas em cada sentido, pela estrada do deserto — por isso este é um passeio de dia inteiro longo, mas que compensa." },
      { q: "Dá para ir de trem?", a: "Sim — para quem prefere, podemos organizar a viagem de trem e receber vocês em Alexandria com o guia particular e o veículo. É só pedir." },
      { q: "A Bibliotheca Alexandrina vale a pena?", a: "Muito — só a arquitetura já impressiona, e o edifício é um eco deliberado da antiga Biblioteca que tornou a cidade famosa." },
    ],
  },
  // ===== Giza Pyramids & Sphinx =====
  {
    slug: "tour-giza-sphinx",
    localeSlug: "piramides-de-gize-e-esfinge-meio-dia",
    metaTitle: "Pirâmides de Gizé e Esfinge, meio dia privativo | Kemet",
    metaDescription: "Meio dia concentrado entre as três grandes pirâmides e a Esfinge, com o clássico mirante panorâmico — de forma privativa.",
    keywords: "pirâmides de gizé, esfinge de gizé, passeio pirâmides cairo, pirâmides meio dia, guia particular pirâmides",
    crumb: "Pirâmides de Gizé",
    title: "Pirâmides de Gizé e Esfinge",
    subtitle: "Meio dia concentrado entre as três grandes pirâmides e a Esfinge, com o clássico mirante panorâmico.",
    durationLabel: "Meio dia (cerca de 5 horas)",
    startPoint: "Hotel no Cairo ou em Gizé",
    summary: "A Grande Pirâmide, as pirâmides de Quéfren e Miquerinos, o mirante panorâmico e o Templo do Vale com a Grande Esfinge — Gizé em uma manhã.",
    overview: "Para quem tem pouco tempo ou só uma janela no dia da chegada, este meio dia entrega o planalto de Gizé sem enrolação. Vocês veem a Grande Pirâmide de Quéops, as vizinhas pirâmides de Quéfren e Miquerinos, o mirante panorâmico onde as três se alinham e o Templo do Vale, que leva à Grande Esfinge. Um guia particular faz a visita curta render, e ela combina bem com uma tarde livre ou com o Grande Museu Egípcio.",
    itinerary: [
      {
        title: "Grande Pirâmide de Quéops",
        text: "Começa-se ao pé da Grande Pirâmide, a última maravilha do mundo antigo ainda de pé, com o guia explicando como e por que ela foi construída.",
      },
      {
        title: "Quéfren e Miquerinos",
        text: "Em seguida, as pirâmides de Quéfren — que ainda guarda no topo as pedras do revestimento original — e a menor, de Miquerinos.",
      },
      {
        title: "Mirante panorâmico",
        text: "Uma parada no panorama do deserto onde as três pirâmides se alinham, a fotografia clássica de Gizé, com passeios opcionais de camelo ou a cavalo ali perto.",
      },
      {
        title: "Templo do Vale e a Grande Esfinge",
        text: "O fim é no Templo do Vale, de granito, e na Grande Esfinge, a guardiã colossal esculpida na rocha do planalto.",
      },
    ],
    faqs: [
      { q: "Por que escolher o meio dia em vez do dia inteiro?", a: "É ideal no dia de chegada ou de partida, ou quando vocês querem as pirâmides sem um museu. Para incluir também o Grande Museu Egípcio, escolham o nosso passeio de dia inteiro Gizé e o Grande Museu." },
      { q: "Dá para andar de camelo nas pirâmides?", a: "Sim — passeios de camelo e a cavalo estão disponíveis no planalto como extra opcional. O guia ajuda vocês a combinar um preço justo no dia." },
      { q: "Podemos entrar em uma pirâmide?", a: "A entrada no interior está disponível como extra opcional, na Grande Pirâmide ou em uma das pirâmides menores, conforme a cota diária de ingressos." },
      { q: "Dá para circular pelo planalto de carrinho de golfe?", a: "Sim, como extra opcional privativo. Um carrinho de golfe só para o grupo de vocês percorre o planalto, em vez de vocês caminharem os longos trechos entre os monumentos — uma boa ideia com crianças pequenas, para viajantes mais velhos ou no calor do meio-dia." },
    ],
  },
  // ===== Abu Simbel Private Excursion =====
  {
    slug: "tour-abu-simbel",
    localeSlug: "abu-simbel-saindo-de-assua",
    metaTitle: "Abu Simbel saindo de Assuã — passeio privativo | Kemet",
    metaDescription: "Os templos na montanha de Ramsés II sobre o lago Nasser: estrada do deserto ao amanhecer, dois santuários na rocha e volta a Assuã para o almoço.",
    keywords: "abu simbel saindo de assuã, passeio abu simbel, templo de ramsés ii, templo de nefertari, festival do sol abu simbel",
    crumb: "Abu Simbel",
    title: "Abu Simbel, passeio privativo",
    subtitle: "Os templos na montanha de Ramsés II, acima do lago Nasser — a estrada do deserto ao amanhecer, dois santuários escavados na rocha e a volta a Assuã para o almoço.",
    durationLabel: "Dia inteiro (cerca de 8 horas, saindo de Assuã)",
    startPoint: "Hotel ou navio de cruzeiro em Assuã",
    summary: "Os templos colossais de Ramsés II escavados na rocha — talhados numa encosta da Núbia, transferidos bloco a bloco para cima do lago que subia e ainda alinhados com o sol.",
    overview: "Abu Simbel é o inegociável do extremo sul: dois templos escavados diretamente numa montanha de arenito por Ramsés II por volta de 1264 a.C., com quatro colossos sentados de vinte metros de altura na fachada. Quando o lago Nasser subiu atrás da Alta Barragem, nos anos 1960, o resgate da UNESCO serrou o conjunto inteiro em mil blocos e o reconstruiu sessenta e cinco metros acima — um feito de engenharia quase tão notável quanto o original. Este passeio privativo segue o jeito clássico: saída de Assuã antes do amanhecer, atravessando o deserto aberto, chegada quando a primeira luz bate nos colossos, tempo sem pressa dentro do Grande Templo e do santuário menor de Nefertari com o seu egiptólogo, e volta a Assuã no começo da tarde. Duas vezes por ano, em 22 de fevereiro e 22 de outubro, o sol nascente chega ao santuário mais interno — perguntem-nos sobre alinhar as datas de vocês.",
    itinerary: [
      {
        title: "A estrada do deserto ao amanhecer",
        text: "Saída de Assuã por volta das 4h, em veículo particular, atravessando 280 km de deserto aberto enquanto o céu clareia — um trajeto com uma beleza austera própria, com café providenciado.",
      },
      {
        title: "O Grande Templo de Ramsés II",
        text: "Diante dos quatro colossos sentados, e depois para dentro, por salas de pilares osiríacos, até o santuário onde estão sentados quatro deuses — alinhado para que o sol os alcance em apenas duas manhãs por ano.",
      },
      {
        title: "O Templo de Nefertari",
        text: "O templo menor que Ramsés dedicou à sua rainha e à deusa Hathor — um dos pouquíssimos templos egípcios em que as estátuas de uma rainha têm a mesma escala que as do rei.",
      },
      {
        title: "Volta a Assuã",
        text: "De volta pelo deserto, chegando a Assuã no começo da tarde, a tempo do almoço, da partida do cruzeiro ou de uma falua na hora dourada.",
      },
    ],
    faqs: [
      { q: "Por que o dia começa às 4h?", a: "Por três razões: a estrada do deserto funciona em janelas organizadas, os templos estão mais vazios e mais frescos na abertura, e a volta no começo da tarde preserva o dia de vocês em Assuã — ou a programação do cruzeiro." },
      { q: "Dá para ir de avião em vez de ir pela estrada?", a: "Sim — a EgyptAir opera um voo curto, de 45 minutos, com horários limitados, que reduz o passeio de ida e volta a cerca de cinco horas. Os lugares esgotam cedo; avisem-nos na reserva e cotamos as duas opções." },
      { q: "O que é o Festival do Sol?", a: "Em 22 de fevereiro e 22 de outubro, o sol nascente penetra 60 metros no Grande Templo e ilumina os deuses sentados do santuário — o alinhamento que os arquitetos de Ramsés construíram há três mil anos. Visitar nessas datas exige planejamento com meses de antecedência; organizamos sob pedido." },
    ],
  },
];
