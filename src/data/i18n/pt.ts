// ---------------------------------------------------------------------------
// Páginas em português — the eight key pages for the Portuguese-speaking market.
//
// Written for Brazil first: there is no direct flight, so the reference points
// are the one-stop routes through the Gulf, Istanbul and Addis Ababa; the travel
// windows are the Brazilian summer (December to February, with Carnival) and
// the July school holidays, which fall in Egypt's hottest month; travel advice
// is the Itamaraty's; and the yellow-fever certificate, which Egypt asks of
// travellers arriving from Brazil, is stated plainly because nobody else tells
// them. Portugal reads the same pages. The copy is Brazilian Portuguese ("você",
// "trem", "ônibus") — a reader in Lisbon is well used to it.
//
// Prices stay in euros, as on every other page of the site.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import { tours } from "@/data/tours";
import { BUILD_YEAR } from "@/utils/format";

// Read from the journeys, so the figures follow the catalogue when prices move.
const FLY_EXTRA = tours.find((t) => t.flyOption)?.flyOption?.extra ?? 0;
const multiDay = tours.filter((t) => t.kind === "multiday");
const nightsOf = (label: string) => Number(/^(\d+)\s*Days?/i.exec(label)?.[1] ?? 1);
const perDay = multiDay.map((t) => t.price / nightsOf(t.durationLabel));
const PER_DAY_LOW = Math.round(Math.min(...perDay));
const PER_DAY_HIGH = Math.round(Math.max(...perDay));

export const pt: LocalizedPage[] = [
  // ===== Início ============================================================
  {
    groupId: "home",
    symbol: "ankh",
    title: "Kemet — Viagens privadas ao Egito com egiptólogo",
    description:
      "Viagens privadas e sob medida pelo Egito: egiptólogo credenciado só para vocês, carro particular, sem ônibus de excursão e sem datas fixas.",
    keywords:
      "viagem ao egito, viagem privada egito, egito sob medida, cruzeiro no nilo, guia egiptólogo, viagem de luxo egito, roteiro egito",
    crumb: "Início",
    h1: "O Egito, só para vocês",
    standfirst:
      "Sem ônibus, sem data de saída fixa, sem desconhecidos no seu roteiro.",
    lede:
      "O Egito não é um país só: são oito mundos culturais sobrepostos ao longo de um único rio. A Kemet desenha viagens privadas e sem pressa por esses mundos — das Pirâmides de Gizé aos templos de Luxor e à navegação pelo Nilo até Assuã. Toda viagem é conduzida por um egiptólogo credenciado pelo Ministério do Turismo do Egito e construída inteiramente em torno de vocês.",
    facts: [
      { label: "Formato", value: "Exclusivamente privado" },
      { label: "Guia", value: "Egiptólogo credenciado" },
      { label: "Voo desde São Paulo", value: "uma conexão, cerca de 17–20 h" },
      { label: "Melhor época", value: "outubro a abril" },
    ],
    sections: [
      {
        title: "Um egiptólogo, não um acompanhante",
        body:
          "Cada viagem é guiada por um profissional credenciado pelo Ministério do Turismo do Egito e formado em egiptologia. Ele fica com vocês diante dos monumentos, não esperando no estacionamento — e o dia é só de vocês: ele responde às suas perguntas em vez de recitar um texto para quarenta pessoas. Em português, se vocês pedirem.",
      },
      {
        title: "Só o seu grupo",
        body:
          "Nada de ônibus compartilhado, nada de data fixa. Se viajam duas pessoas, o carro, o guia e o ritmo são de duas pessoas. O preço por pessoa cai bastante quando o grupo cresce: uma família de seis costuma pagar menos por cabeça, numa viagem totalmente privada, do que um casal paga pelo mesmo roteiro.",
      },
      {
        title: "Primeiro desenhado, depois por escrito",
        body:
          "O roteiro nasce dos seus interesses e das suas datas, não de uma página de catálogo. Vocês recebem tudo por escrito antes de pagar qualquer coisa, e ele muda quantas vezes for preciso até ficar certo. Estão incluídos o egiptólogo, todas as entradas, os traslados privados com ar-condicionado, a busca no hotel, o almoço nos dias de passeio e a água.",
      },
      {
        title: "O tempo é protegido, não preenchido",
        body:
          "Um dia com quatro sítios arqueológicos é mais barato de vender e pior de viver. Planejamos em torno da luz, do calor e do movimento — o Vale dos Reis na abertura, o museu depois que os ônibus vão embora — e deixamos a tarde em paz.",
      },
      {
        title: "Sobre o preço, com franqueza",
        body:
          "A Kemet trabalha no segmento alto do mercado egípcio, e dizemos isso sem rodeio. Um egiptólogo particular durante uma semana custa o que custa; um carro só de vocês e um quarto de frente para o rio, e não para o estacionamento, também. O que não fazemos é cotar baixo e recuperar a diferença com opcionais, paradas em lojas e um roteiro que, sem ninguém perceber, vira excursão.",
      },
    ],
    highlights: {
      heading: "Para quem estas viagens não são",
      items: [
        "Para quem procura o menor preço do Egito — não somos os mais baratos, nem tentamos ser",
        "Excursões de ônibus e saídas em grupo com data fixa, vendidas por lugar",
        "Hostels, quartos compartilhados e roteiros de mochilão",
        "Quem prefere cuidar sozinho da logística",
      ],
    },
    faqs: [
      { q: "Quanto custa uma viagem privada ao Egito?", a: `Uma viagem totalmente privada e sob medida, com egiptólogo credenciado, carro com motorista e bons hotéis, fica no mercado entre 200 e 450 euros por pessoa por dia. As viagens da Kemet saem entre ${PER_DAY_LOW} e ${PER_DAY_HIGH} euros por pessoa por dia, com hotéis de 4 ou 5 estrelas. O valor por pessoa cai bastante quando o grupo cresce, porque o guia e o carro são divididos entre mais gente.` },
      { q: "Existem guias que falam português?", a: "Sim. Trabalhamos com egiptólogos credenciados que guiam em português, e temos guias em todos os principais idiomas. Avisem ao planejar a viagem: os egiptólogos que falam português são poucos e, na alta temporada, ficam reservados com muita antecedência." },
      { q: "Quantos dias são necessários para o Egito?", a: "Vindo do Brasil, a viagem só compensa a partir de oito a dez dias no destino: isso cobre o Cairo, Luxor, um cruzeiro pelo Nilo e Assuã sem pressa. Doze a catorze dias deixam espaço para Abu Simbel, Alexandria ou alguns dias no Mar Vermelho." },
      { q: "O Egito é seguro?", a: "As regiões turísticas — Cairo, Gizé, Luxor, Assuã, Alexandria e o litoral do Mar Vermelho — são policiadas e recebem milhões de visitantes por ano. Os incômodos reais são os vendedores insistentes nos grandes sítios e o trânsito do Cairo, e os dois praticamente desaparecem com guia e motorista particulares. Consulte sempre as orientações atuais do Itamaraty antes de reservar." },
    ],
    cta: {
      heading: "Contem o que vocês têm em mente",
      text: "Mandem as datas e quem vai viajar. Vocês recebem um roteiro de verdade, com o preço detalhado — sem compromisso e sem central de atendimento.",
      whatsapp: "Olá Kemet — tenho interesse numa viagem privada ao Egito.",
      emailSubject: "Consulta — viagem privada ao Egito",
    },
    moreLabel: "O site completo",
    moreText:
      "Estas páginas são uma seleção em português. O catálogo completo da Kemet — todas as viagens, destinos, experiências e guias — está em inglês. E respondemos, naturalmente, em português.",
  },

  // ===== Viagens ===========================================================
  {
    groupId: "journeys",
    symbol: "sun",
    title: "Viagens ao Egito — roteiros privados | Kemet",
    description:
      "Roteiros privados e sob medida pelo Egito, de um dia a duas semanas — com egiptólogo credenciado, carro particular e sem datas fixas.",
    keywords:
      "viagens ao egito, roteiro egito, pacote egito privado, cruzeiro no nilo reserva, egito sob medida, cairo luxor assuã",
    crumb: "Viagens ao Egito",
    h1: "Nossas viagens ao Egito",
    standfirst:
      "Pontos de partida, não pacotes fechados — cada roteiro é reescrito para as suas datas e o seu grupo.",
    lede:
      "Todas as nossas viagens são privadas. O que vocês veem aqui são formatos testados, não produtos para comprar do jeito que estão. Digam quando viajam, quem vai junto e o que interessa a vocês, e o roteiro é redesenhado em torno disso.",
    facts: [
      { label: "Viagem mais curta", value: "1 dia" },
      { label: "Viagem mais longa", value: "14 dias" },
      { label: "Grupo", value: "Só o seu" },
      { label: "Sinal", value: "25 %" },
    ],
    sections: [
      {
        title: "O roteiro clássico, e por que ele funciona",
        body:
          "O Cairo para as Pirâmides, o Grande Museu Egípcio e a cidade medieval; Luxor para os templos e o Vale dos Reis; o trecho do Nilo até Assuã de barco. A ordem não é por acaso: os templos entre Luxor e Assuã ficam na margem e foram construídos para quem chegava pela água. De oito a dez dias cobrem tudo sem pressa.",
      },
      {
        title: "O que o preço inclui",
        body:
          "O seu egiptólogo credenciado durante toda a viagem, todas as entradas, os traslados privados com ar-condicionado, a busca e o retorno ao hotel, o almoço em cada dia de passeio e água todos os dias. Não inclui: voos internacionais, gorjetas, gastos pessoais e os extras indicados como tal. Cada orçamento detalha as duas listas antes de vocês se comprometerem.",
      },
      {
        title: "Por que o preço por pessoa cai com o grupo",
        body:
          "Um guia particular, um carro e um motorista custam o mesmo para duas pessoas ou para seis. Dois viajantes pagam o carro inteiro; seis dividem. Por isso uma família de seis costuma pagar menos por cabeça, numa viagem totalmente privada, do que um casal pelo mesmo roteiro.",
      },
      {
        title: "Sinal, saldo e mudanças",
        body:
          "Um sinal de 25 % confirma a viagem; o saldo é pago 30 dias antes da chegada. Antes disso vocês recebem o roteiro por escrito, com o preço detalhado. Mudanças antes da confirmação são normais e não custam nada: é para isso que existe a fase de desenho.",
      },
    ],
    faqs: [
      { q: "Quantos dias são necessários para conhecer o Egito?", a: "Oito a dez dias no destino cobrem o Cairo, Luxor, um cruzeiro pelo Nilo e Assuã sem pressa. Seis ou sete bastam para o Cairo e Luxor. Com a distância desde o Brasil, menos de uma semana raramente compensa — é melhor ficar mais e fazer bem feito." },
      { q: "Qual é a melhor época para ir ao Egito?", a: "De outubro a abril. Nesse período, outubro, fevereiro e a primeira metade de março são os meses mais fortes: o mesmo clima do pico de dezembro e janeiro, mas com bem menos gente e preços menores. O Carnaval cai justamente nessa janela." },
      { q: "Vale a pena fazer um cruzeiro pelo Nilo?", a: "Entre Luxor e Assuã, sim — e não principalmente pelo barco. Os templos desse trecho ficam na margem e se chega a eles muito melhor pela água do que por um estacionamento de ônibus. Além disso, o hotel viaja enquanto vocês ficam, o que evita duas ou três trocas de hotel." },
      { q: "Dá para mudar o roteiro?", a: "Ele muda de qualquer jeito — é essa a ideia. Cada roteiro desta página é um ponto de partida. Digam o que querem ver mais, menos ou nem ver, e a viagem é reescrita antes de vocês pagarem qualquer coisa." },
    ],
    cta: {
      heading: "Qual roteiro combina com vocês?",
      text: "Mandem as datas e o tamanho do grupo. Respondemos pessoalmente, normalmente em um dia útil, com um roteiro de verdade e um preço.",
      whatsapp: "Olá Kemet — gostaria de um orçamento para uma viagem privada ao Egito.",
      emailSubject: "Pedido de orçamento — viagem ao Egito",
    },
    moreLabel: "Ver todas as viagens",
    moreText:
      "O catálogo completo, com todas as viagens, destinos e experiências, está em inglês. O atendimento e as respostas são em português.",
  },

  // ===== Cruzeiro ==========================================================
  {
    groupId: "nile-cruise",
    symbol: "fish",
    title: "Cruzeiro privado pelo Nilo, Luxor–Assuã | Kemet",
    description:
      "Cruzeiro privado pelo Nilo entre Luxor e Assuã com egiptólogo próprio — os templos pela água, dahabiya ou navio, e o que realmente importa.",
    keywords:
      "cruzeiro no nilo, cruzeiro nilo luxor assuã, dahabiya nilo, cruzeiro privado nilo, barco no nilo egito, kom ombo edfu",
    crumb: "Cruzeiro pelo Nilo",
    h1: "O cruzeiro pelo Nilo",
    standfirst: "Entre Luxor e Assuã, o rio é a estrada.",
    lede:
      "Quase tudo o que vale uma parada entre Luxor e Assuã está a poucas centenas de metros do Nilo. Por isso o rio é a estrada, e por isso para esse trecho recomendamos quase sempre o barco. A vantagem real não é a embarcação: é a chegada. Vocês descem e já estão lá, em vez de entrar atravessando um estacionamento de ônibus.",
    facts: [
      { label: "Trecho", value: "Luxor ↔ Assuã" },
      { label: "Duração", value: "3–4 noites" },
      { label: "Templos no caminho", value: "Kom Ombo, Edfu, Esna" },
      { label: "Melhor época", value: "outubro–abril" },
    ],
    sections: [
      {
        title: "O que se vê pelo caminho",
        body:
          "Kom Ombo, o curioso templo duplo dedicado ao deus-crocodilo Sobek e a Hórus, o Velho, bem na margem. Edfu, o templo mais bem conservado do Egito, com as paredes ainda inteiras. Esna, cujo teto pintado só foi recuperado nos últimos anos. Numa ponta, Luxor — Karnak, o Templo de Luxor, o Vale dos Reis —, na outra, Assuã, com Filae e o caminho para Abu Simbel.",
      },
      {
        title: "Dahabiya ou navio de cruzeiro",
        body:
          "A dahabiya é um veleiro tradicional, normalmente com oito a doze cabines. Ela atraca em bancos de areia e vilarejos aonde os barcos grandes não chegam, leva uma fração dos passageiros e não tem programa de animação. Custa bem mais. Um navio de cruzeiro de sessenta a cento e quarenta cabines é o padrão do mercado, tem boa disponibilidade e é perfeitamente adequado para uma primeira viagem. Se a viagem comemora alguma coisa, a dahabiya é o upgrade que recomendamos antes de qualquer outro.",
      },
      {
        title: "O sentido da navegação importa",
        body:
          "Os barcos fazem os dois sentidos, e não é a mesma viagem. Rumo ao norte, de Assuã a Luxor, se desce a favor da correnteza, é mais rápido, e Luxor fica para o fim — ou seja, vocês chegam à margem oeste e ao Vale dos Reis quando já sabem ler um templo. Costumamos recomendar esse sentido e explicamos o porquê no roteiro de vocês.",
      },
      {
        title: "O que um cruzeiro não faz",
        body:
          "Ele não afasta vocês do rio. Abidos e Dendera, os dois grandes templos ao norte de Luxor, não estão em nenhuma rota de cruzeiro; nem o Fayum, o Médio Egito ou o deserto. Se o motivo da viagem é ver o Egito além do circuito de sempre, o barco é a ferramenta errada, e desenhamos sem hesitar um roteiro por terra.",
      },
    ],
    faqs: [
      { q: "Quantas noites deve ter um cruzeiro pelo Nilo?", a: "Três ou quatro noites é o padrão, e é suficiente. Três noites cobrem Luxor–Assuã ou o contrário com os templos principais; quatro dão um ritmo mais calmo e normalmente incluem Esna. Os cruzeiros de sete noites repetem boa parte do mesmo trecho: uma dahabiya aproveita melhor essas noites a mais." },
      { q: "O que é uma dahabiya?", a: "Um veleiro tradicional do Nilo, de dois mastros e normalmente com oito a doze cabines, que navega o rio como se fazia antes dos motores. Atraca em bancos de areia e vilarejos inacessíveis aos barcos grandes e não tem programa de animação. Custa bem mais por noite do que um navio de cruzeiro convencional." },
      { q: "Dá enjoo num cruzeiro pelo Nilo?", a: "Praticamente nunca. O Nilo é água interior e calma, os barcos andam devagar e não há ondas. Quem enjoa no mar costuma ficar perfeitamente bem no rio." },
      { q: "Com quanta antecedência reservar um cruzeiro pelo Nilo?", a: "Três a quatro meses para hotéis e barcos convencionais; seis meses se há uma dahabiya específica no plano. Para Natal, Réveillon, Carnaval e Páscoa, até um ano antes: existem só algumas dezenas de dahabiyas, e elas lotam primeiro." },
      {
        q: "Avião ou trem noturno para Luxor e Assuã?",
        a: `Se o conforto vem antes do preço, é melhor voar: Cairo–Luxor é menos de uma hora de voo, e Cairo–Assuã cerca de uma hora e quinze. O trem leva umas dez horas até Luxor e treze até Assuã, por isso costuma ser feito à noite: cabine de duas camas com pia, jantar e café da manhã, mas banheiros compartilhados; no sentido sul, chega a Luxor por volta das cinco e meia da manhã. Nossas viagens com trem noturno também são oferecidas com voos internos e noites de hotel, por ${FLY_EXTRA} € a mais por pessoa.`,
      },
    ],
    cta: {
      heading: "Planejar o cruzeiro",
      text: "Digam as datas e quem vai viajar. No orçamento nomeamos o barco — com as dahabiyas, é exatamente aí que está a diferença.",
      whatsapp: "Olá Kemet — tenho interesse num cruzeiro privado pelo Nilo.",
      emailSubject: "Consulta — cruzeiro pelo Nilo",
    },
    moreLabel: "Mais sobre o trecho do Nilo",
    moreText:
      "Programas detalhados, descrições das embarcações e o catálogo completo estão disponíveis em inglês.",
  },

  // ===== Custo =============================================================
  {
    groupId: "cost",
    symbol: "sun",
    title: `Quanto custa viajar para o Egito? (${BUILD_YEAR}) | Kemet`,
    description:
      "Quanto custa de verdade uma viagem privada ao Egito — as faixas reais do mercado, os fatores que mexem no preço e onde a Kemet está.",
    keywords:
      "quanto custa viajar para o egito, preço viagem egito, custo cruzeiro nilo, viagem egito preço por pessoa, orçamento egito, egito em euros",
    crumb: "Custo",
    h1: "Quanto custa uma viagem privada ao Egito",
    standfirst:
      "Uma resposta honesta, escrita para o segmento alto do mercado e não para o mais barato.",
    lede:
      "Quase todas as páginas que respondem a essa pergunta foram escritas para outro viajante: orçamento diário, quarto compartilhado e como pechinchar uma faluca. É um jeito legítimo de conhecer o Egito, e não é o que nós desenhamos. Aqui está a mesma pergunta respondida para uma viagem privada e guiada, com os valores que realmente orçamos.",
    facts: [
      { label: "Privado, sob medida", value: "200–450 € p.p./dia" },
      { label: "Viagens da Kemet", value: `${PER_DAY_LOW}–${PER_DAY_HIGH} € p.p./dia` },
      { label: "Uma semana a dois", value: "2.800–6.000 € no total" },
      { label: "Sinal", value: "25 %" },
    ],
    sections: [
      {
        title: "Quatro maneiras de conhecer o Egito",
        body:
          "Viagem independente com transporte público e hotéis simples: uns 40 a 90 euros por pessoa por dia. Excursão de ônibus com vinte ou quarenta pessoas e datas fixas: 90 a 180 euros. Privada e sob medida, com egiptólogo próprio, carro próprio e bons hotéis: 200 a 450 euros. No topo do mercado, com dahabiya exclusiva e voos privados entre as cidades: a partir de 600 euros. A distância entre o piso e o teto do mercado é maior no Egito do que em quase qualquer outro país.",
      },
      {
        title: "Onde a Kemet está",
        body:
          `Na faixa privada e sob medida, e na entrada dela: as viagens de vários dias da Kemet saem entre ${PER_DAY_LOW} e ${PER_DAY_HIGH} euros por pessoa por dia, com hotéis de 4 ou 5 estrelas, todas as entradas, o egiptólogo, os traslados e o almoço incluídos. O valor sobe com a categoria do hotel e com a dahabiya, e cai por pessoa quando o grupo cresce. Os preços são em euros.`,
      },
      {
        title: "Quantos vocês são — o fator de maior peso",
        body:
          "Um guia particular, um carro e um motorista custam o mesmo para duas pessoas ou para seis. Por isso o preço por pessoa cai claramente com o tamanho do grupo. Uma família de seis costuma pagar menos por cabeça, numa viagem totalmente privada, do que um casal pelo mesmo roteiro.",
      },
      {
        title: "Quando vocês viajam",
        body:
          "O Egito tem uma alta temporada de verdade — grosso modo de outubro a abril, mais Natal, Réveillon e Páscoa — e a diferença não é pequena. A mesma suíte no Nilo pode custar o dobro no Réveillon do que no início de junho. Se as datas são flexíveis nem que seja em duas semanas, o fim de outubro, o início de março e a primeira metade de junho compram bem mais viagem pelo mesmo dinheiro.",
      },
      {
        title: "Onde vocês dormem",
        body:
          "Os hotéis são o maior item de quase todo orçamento, e a variação no Egito é enorme. Um bom cinco estrelas no Cairo e um hotel histórico com vista aberta para as Pirâmides são ambos \"cinco estrelas\": nem custam o mesmo, nem são a mesma coisa. No Nilo, a diferença é ainda maior.",
      },
    ],
    faqs: [
      { q: "Quanto custa uma viagem privada pelo Egito?", a: `No mercado, uma viagem totalmente privada e sob medida, com egiptólogo credenciado, carro com motorista e bons hotéis, fica entre 200 e 450 euros por pessoa por dia. As viagens da Kemet saem entre ${PER_DAY_LOW} e ${PER_DAY_HIGH} euros por pessoa por dia. O valor cai bastante quando o grupo cresce, porque o guia e o carro são divididos.` },
      { q: "Por que uma viagem privada custa mais do que uma excursão?", a: "Porque quase nada é dividido. Uma excursão divide um guia, um ônibus e um motorista entre trinta pessoas; uma viagem privada dedica tudo só ao seu grupo. E vocês compram também a liberdade de mudar o plano: ficar mais em Abu Simbel, pular a loja de papiros, sair às seis porque a luz é melhor." },
      { q: "Quanto reservar para uma semana no Egito?", a: "No nível privado e sob medida, uma semana para duas pessoas costuma ficar entre 2.800 e 6.000 euros no total, conforme os hotéis, a temporada e se entre as cidades se voa ou se vai de carro. Os voos internacionais e as gorjetas ficam de fora." },
      { q: "O Egito é caro?", a: "O Egito está entre os países mais baratos do mundo em comida, transporte e entradas — e, ao mesmo tempo, é um dos que têm a maior distância entre a faixa baixa e a alta. O que custa não é o acesso: é a qualidade de quem está ao seu lado explicando o que vocês estão vendo." },
      { q: "Em que moeda são os preços, e quando se paga?", a: "Os orçamentos são em euros. Um sinal de 25 % do total confirma a viagem; o saldo é pago 30 dias antes da chegada. Nada é pago antes de vocês terem em mãos o roteiro por escrito com o preço detalhado." },
    ],
    cta: {
      heading: "Um orçamento concreto",
      text: "Mandem as datas, o grupo e, em linhas gerais, o que vocês querem que a viagem seja. Vocês recebem um roteiro por escrito com o preço detalhado, sem compromisso.",
      whatsapp: "Olá Kemet — gostaria de um orçamento para uma viagem privada ao Egito.",
      emailSubject: "Pedido de orçamento — Egito",
    },
    moreLabel: "Todos os preços em detalhe",
    moreText:
      "O detalhamento completo de preços e serviços, com todas as viagens, está disponível em inglês.",
  },

  // ===== Quando ir =========================================================
  {
    groupId: "when-to-go",
    symbol: "sun",
    title: "Melhor época para ir ao Egito — mês a mês | Kemet",
    description:
      "Quando ir ao Egito: temperaturas do Cairo, Luxor, Assuã e Mar Vermelho, movimento, preços e um veredito honesto mês a mês — e as férias de julho.",
    keywords:
      "melhor época para ir ao egito, clima egito, egito temperatura por mês, quando ir ao egito, egito em julho, egito no carnaval, mar vermelho temperatura da água",
    crumb: "Melhor época",
    h1: "A melhor época para ir ao Egito",
    standfirst:
      "O momento muda uma viagem ao Egito mais do que qualquer outra decisão.",
    lede:
      "A resposta curta é de outubro a abril — o que, para quem vem do Brasil, coincide com as férias de verão e o Carnaval. A resposta útil é que no Egito convivem dois climas — os monumentos do interior e os recifes do litoral — e o melhor de cada um está em pontas opostas do ano. Outubro é o único mês em que os dois estão quase no auge.",
    facts: [
      { label: "Melhor mês no geral", value: "outubro" },
      { label: "Melhor mês para monumentos", value: "fevereiro" },
      { label: "Melhor preço pelo clima", value: "março" },
      { label: "Melhor época para mergulho", value: "maio, junho, setembro" },
    ],
    sections: [
      {
        title: "De outubro a abril — a alta temporada",
        body:
          "Nesses meses, as temperaturas de dia no interior ficam agradáveis: Luxor entre 22 e 37 graus conforme o mês, o Cairo entre 19 e 31. Dentro da temporada, outubro, fevereiro e a primeira metade de março são os mais fortes. Dezembro e janeiro têm o melhor clima de todos, junto com os preços mais altos e o maior movimento do ano.",
      },
      {
        title: "Férias de verão e Carnaval",
        body:
          "De dezembro a fevereiro, o verão brasileiro cai no inverno egípcio — a combinação perfeita: dias de 22 a 26 graus em Luxor e noites frescas. O Carnaval, em fevereiro ou março, é uma das melhores semanas do ano no Nilo. Natal e Réveillon são o pico absoluto: reservem com até um ano de antecedência.",
      },
      {
        title: "Férias de julho — possível, com outro desenho",
        body:
          "Julho é o mês mais quente do Egito: Assuã chega com frequência a 42–45 graus e Luxor passa dos 40. Dá para viajar, mas o roteiro precisa ser construído em torno do calor: saída ao amanhecer, visitas até as onze, a tarde como descanso de verdade. Em troca, monumentos quase vazios e os menores preços do ano. No Mar Vermelho, por outro lado, é época excelente: água entre 27 e 30 graus.",
      },
      {
        title: "Ramadã e festas",
        body:
          "O Ramadã muda de data a cada ano, cerca de onze dias. Os sítios continuam abertos, muitas vezes com horário reduzido, e o ritmo do dia se inverte: tardes silenciosas e, ao pôr do sol, o país inteiro se acende para o iftar. Muitos viajantes contam depois que foi a parte mais marcante da viagem. O festival do sol de Abu Simbel acontece em 22 de fevereiro e 22 de outubro.",
      },
    ],
    faqs: [
      { q: "Qual é a melhor época para ir ao Egito?", a: "De outubro a abril. Nesse período, outubro, fevereiro e a primeira metade de março são os mais fortes: outubro tem dias quentes e um Mar Vermelho ainda de verão, fevereiro o clima mais agradável para os monumentos, e março quase o mesmo clima com preços menores." },
      { q: "Vale a pena ir ao Egito em julho?", a: "Vale, se o roteiro for pensado para o calor. Em julho Assuã chega a 42–45 graus e Luxor passa dos 40; o calor é seco e mais suportável do que esses números em outros lugares, mas exige começar ao amanhecer e deixar a tarde livre. Em troca, sítios vazios, preços baixos e o Mar Vermelho no seu melhor." },
      { q: "Qual é a melhor época para mergulhar no Mar Vermelho?", a: "Maio, junho, setembro e outubro. A água chega a 27–30 graus no verão e a visibilidade é melhor no outono. Setembro e outubro são a combinação ideal: água ainda de verão e as multidões de férias já de volta para casa." },
      { q: "O Egito fica cheio no Natal e no Réveillon?", a: "É o pico do ano. O clima é excelente, e os preços dos barcos no Nilo e dos bons quartos podem dobrar no Réveillon — essa semana esgota até um ano antes. O Natal copta, em 7 de janeiro, estende a temporada por mais duas semanas." },
    ],
    cta: {
      heading: "Em dúvida sobre quando?",
      text: "Digam o que vocês querem que a viagem seja — monumentos, recife, cruzeiro ou os três — e mais ou menos quando podem viajar. Diremos qual mês sustenta isso de verdade.",
      whatsapp: "Olá Kemet — gostaria de uma orientação sobre quando viajar ao Egito.",
      emailSubject: "Consulta — melhor época para ir ao Egito",
    },
    moreLabel: "Os doze meses em detalhe",
    moreText:
      "Um detalhamento de cada mês — temperaturas, movimento, preços e veredito — está disponível em inglês.",
  },

  // ===== É seguro? =========================================================
  // A referência é o Itamaraty. O certificado de febre amarela é dito com todas
  // as letras: o Egito o pede a quem chega do Brasil, e quase ninguém avisa.
  {
    groupId: "safety",
    symbol: "horus",
    title: "É seguro viajar para o Egito? Resposta honesta | Kemet",
    description:
      "O Egito é seguro? Região por região — Cairo, Luxor, Mar Vermelho e Sinai — mulheres viajando sozinhas, a água, a febre amarela e as áreas a evitar.",
    keywords:
      "é seguro viajar para o egito, segurança no egito, egito é perigoso, sharm el sheikh é seguro, hurghada é seguro, viajar sozinha egito, egito febre amarela",
    crumb: "Segurança",
    h1: "É seguro viajar para o Egito?",
    standfirst:
      "A versão honesta — o que importa de verdade, o que é ruído e a única região que é, sim, uma exceção.",
    lede:
      "Quase toda a preocupação em torno de uma viagem ao Egito vem das manchetes, não do país. As regiões aonde um viajante vai de fato estão entre as áreas turísticas mais policiadas que existem, e os problemas que os visitantes realmente contam são comuns: vendedores que não aceitam o primeiro não, um trânsito com lógica própria, um calor que em junho é perigoso se não for levado a sério, e um estômago que estranha a água. Nada disso é pouco. Nada disso é o que as pessoas imaginam.",
    facts: [
      { label: "Emergências", value: "Polícia 122 · Ambulância 123 · Polícia turística 126" },
      { label: "Água da torneira", value: "Não potável — mineral em todo lugar" },
      { label: "Incômodo principal", value: "Vendedores insistentes · trânsito do Cairo" },
      { label: "Saindo do Brasil", value: "Certificado de febre amarela (CIVP)" },
    ],
    sections: [
      {
        title: "Sinai do Norte e Sinai do Sul não são a mesma coisa",
        body:
          "Este é o ponto mais importante da página, e o que mais se confunde. O Sinai do Norte tem recomendação permanente de não viajar da maioria dos governos, inclusive nas orientações do Itamaraty. Os destinos em que um viajante pensa quando diz \"Sinai\" — Sharm el-Sheikh, Dahab, Nuweiba — ficam no Sinai do Sul, a centenas de quilômetros, e normalmente estão fora dessa recomendação. Nenhum roteiro da Kemet entra no Sinai do Norte nem nas zonas de fronteira do deserto ocidental.",
      },
      {
        title: "Cairo e Gizé",
        body:
          "As pirâmides, os museus e o Cairo islâmico recebem milhões de visitantes por ano sem incidentes. Os dois incômodos reais são o trânsito — denso e improvisado — e os vendedores insistentes no planalto de Gizé. Um motorista particular elimina o primeiro por completo, e um guia egiptólogo elimina boa parte do segundo: as abordagens são cortadas antes de chegar a vocês, porque quem corta é alguém que os vendedores reconhecem como local.",
      },
      {
        title: "Alto Egito: o risco é o calor, não a violência",
        body:
          "Luxor e Assuã são mais tranquilas do que o Cairo em todos os sentidos, e os sítios arqueológicos são fortemente policiados. O risco real entre maio e setembro não é a violência, é o calor: 45 °C às duas da tarde é uma questão médica, não um desconforto. Nesses meses construímos o roteiro em torno de saídas ao amanhecer e tardes livres — ou dizemos que outubro seria uma escolha melhor.",
      },
      {
        title: "Febre amarela: o documento que ninguém avisa",
        body:
          "O Egito exige o Certificado Internacional de Vacinação ou Profilaxia (CIVP) contra a febre amarela de quem chega de países com risco de transmissão, e o Brasil está nessa lista — vale também para quem passa mais de doze horas numa conexão nesses países. Quem vem de Portugal não precisa. A vacina deve ser tomada pelo menos dez dias antes do embarque, e o certificado é emitido pela Anvisa. Confirmem a regra atual com a Anvisa antes de viajar.",
      },
      {
        title: "Viajar sozinha",
        body:
          "Mulheres viajam sozinhas pelo Egito, e o que elas mais contam não é perigo, é atenção: olhares, comentários, abordagens insistentes, sobretudo em áreas movimentadas do Cairo. Um guia particular muda essa dinâmica mais do que qualquer outra medida, porque as abordagens param quando se está visivelmente acompanhada por um profissional egípcio. Ombros e joelhos cobertos fora das áreas turísticas reduzem ainda mais a atenção, e em mesquitas e igrejas isso é esperado de todo modo.",
      },
      {
        title: "Água, comida e estômago",
        body:
          "A água da torneira não é potável em lugar nenhum do Egito, nem em bons hotéis, nem para escovar os dentes. Água mineral há em toda parte, é barata e vem incluída em todo dia de passeio. O gelo de hotéis e restaurantes estabelecidos é feito com água tratada e não dá problema; o de barraca de rua, sim. Comam onde há movimento: balcão cheio é balcão seguro.",
      },
    ],
    highlights: {
      heading: "Em resumo",
      items: [
        "As regiões turísticas — Cairo, Gizé, Luxor, Assuã, Alexandria, Mar Vermelho — são fortemente policiadas",
        "Sinai do Norte: desaconselhado. Sinai do Sul, com Sharm el-Sheikh e Dahab: normalmente fora da recomendação",
        "Nenhum roteiro da Kemet entra no Sinai do Norte nem nas fronteiras do oeste",
        "Saindo do Brasil: certificado de febre amarela (CIVP)",
        "Água da torneira nunca, nem para os dentes",
        "Consultem as orientações do Itamaraty antes de reservar",
      ],
    },
    faqs: [
      { q: "É seguro viajar para o Egito em 2026?", a: "As regiões turísticas — Cairo, Gizé, Luxor, Assuã, Alexandria e o litoral do Mar Vermelho — são fortemente policiadas e recebem milhões de viajantes por ano sem incidentes. Os incômodos práticos são os vendedores insistentes nos grandes sítios e o trânsito do Cairo, e os dois praticamente desaparecem com guia e motorista particulares. O Sinai do Norte e algumas zonas de fronteira são desaconselhados e não fazem parte de nenhum roteiro. Consultem as orientações do Itamaraty antes de reservar." },
      { q: "Preciso de vacina de febre amarela para ir ao Egito?", a: "Saindo do Brasil, sim. O Egito exige o Certificado Internacional de Vacinação ou Profilaxia (CIVP) contra a febre amarela de quem chega de países com risco de transmissão, e o Brasil está entre eles. A vacina precisa ser tomada pelo menos dez dias antes do embarque, e o certificado é emitido pela Anvisa. Confirmem a regra atual com a Anvisa antes de viajar." },
      { q: "Sharm el-Sheikh é seguro?", a: "Sharm el-Sheikh fica no Sinai do Sul, normalmente fora das recomendações sobre o Sinai do Norte, e recebe voos da Europa o ano todo. A zona hoteleira e os recifes de Ras Mohammed se visitam normalmente. O alerta de que muita gente ouviu falar se refere ao Sinai do Norte, a centenas de quilômetros e fora de qualquer roteiro." },
      { q: "Posso viajar sozinha para o Egito?", a: "Sim, e muitas viajam. O que se relata é sobretudo atenção, mais do que perigo — olhares, comentários, abordagens insistentes, principalmente em áreas movimentadas do Cairo. Um guia particular muda muito a situação, porque as abordagens param quando se está visivelmente acompanhada. Ombros e joelhos cobertos fora das áreas turísticas reduzem ainda mais a atenção." },
      { q: "Posso beber a água da torneira no Egito?", a: "Não, em lugar nenhum, nem em bons hotéis, nem para escovar os dentes. Água mineral há em toda parte, é barata e vem incluída em todo dia de passeio. O gelo de hotéis e restaurantes estabelecidos não dá problema; o de rua, sim." },
      { q: "Preciso de seguro-viagem?", a: "Não é obrigatório, mas é muito recomendado, sobretudo se o plano tem mergulho ou balão: muitas apólices excluem essas atividades por padrão. Confiram também se a cobertura médica vale para o Egito e para as escalas do caminho." },
    ],
    cta: {
      heading: "Ainda com dúvidas?",
      text: "Perguntem exatamente o que preocupa vocês. A resposta é direta — mesmo quando a resposta é que um plano específico não é boa ideia.",
      whatsapp: "Olá Kemet — tenho uma pergunta sobre segurança no Egito.",
      emailSubject: "Pergunta sobre segurança no Egito — Kemet",
    },
    moreLabel: "Versão completa em inglês",
    moreText:
      "A versão integral, com mais regiões e mais perguntas, está disponível em inglês.",
  },

  // ===== Uso exclusivo =====================================================
  // O público brasileiro chega aqui por casamentos, lua de mel, bodas e viagens
  // de incentivo. O cliente quer a experiência, não a burocracia: a página diz
  // o que é possível e que cuidamos de tudo, sem contar o trâmite.
  {
    groupId: "private-access",
    symbol: "horus",
    title: "Monumentos exclusivos no Egito | Kemet",
    description:
      "Monumentos fechados ao público e reservados para um só grupo: a Grande Pirâmide fora do horário, o planalto de Gizé antes de abrir, jantar dentro de Karnak.",
    keywords:
      "grande pirâmide acesso privado, casamento no egito, lua de mel egito, jantar privado karnak, evento corporativo egito, monumento exclusivo egito",
    crumb: "Uso exclusivo",
    h1: "Fechado para todos os outros",
    standfirst:
      "Não uma hora mais tranquila nem uma entrada lateral — o monumento vazio, e lá dentro só o seu grupo.",
    lede:
      "Há lugares no Egito que podem ser fechados ao público e reservados para um único grupo. A Grande Pirâmide reabre depois do fechamento; o planalto de Gizé recebe vocês antes de os portões abrirem; dentro do recinto de Karnak a mesa é posta. Nós cuidamos de tudo em nome de vocês — vocês só chegam e aproveitam.",
    facts: [
      { label: "Para", value: "Só o seu grupo" },
      { label: "Organizado", value: "Em nome de vocês" },
      { label: "Antecedência", value: "De semanas a meses" },
      { label: "Custo", value: "Nada antes de confirmado" },
    ],
    sections: [
      {
        title: "A Grande Pirâmide, duas horas sem mais ninguém",
        body:
          "A pirâmide fecha ao público e reabre para um só grupo, com duas horas ininterruptas lá dentro. Vocês sobem a Grande Galeria sem fila atrás nem vozes à frente e podem ficar sentados em silêncio na Câmara do Rei — exatamente o que ninguém que visita de dia consegue fazer. Não se compra pela internet por preço nenhum.",
      },
      {
        title: "O planalto antes do amanhecer",
        body:
          "O planalto com a primeira luz e mais quatrocentas pessoas dentro é uma foto que todo mundo já tem. Antes de abrir, é outro lugar: sem ônibus, sem vendedores de camelo, sem fila na Esfinge, e com a luz entrando rasante pelo leste. O horário é das 5 às 7 (abril–setembro) e das 6 às 8 (outubro–março). O café da manhã pode ser montado na areia, de frente para as três pirâmides.",
      },
      {
        title: "Jantar dentro do recinto de Karnak",
        body:
          "Karnak é o maior edifício religioso já construído, e a sua sala hipostila sustenta cento e trinta e quatro colunas da altura de um prédio de seis andares. Com o recinto fechado, a mesa pode ser posta lá dentro e as colunas iluminadas de baixo, como foram pensadas para ser vistas. De uma mesa íntima a cerca de duzentos convidados, com iluminação, som, palco e bufê.",
      },
      {
        title: "Discrição, por regra",
        body:
          "De uma celebração privada não publicamos, não nomeamos nem fotografamos nada. Nenhum cliente vira referência sem ter sido consultado, e nenhuma noite aparece neste site. Se a ocasião pede um acordo de confidencialidade antes da primeira conversa, e não depois, é só dizer: ele sai no mesmo dia.",
      },
    ],
    highlights: {
      heading: "Lugares que podem ser reservados com exclusividade",
      items: [
        "Grande Pirâmide de Quéops — duas horas ininterruptas depois do fechamento",
        "Planalto de Gizé — antes de abrir, de duas pessoas a um grupo grande",
        "Recinto de Karnak, Luxor — jantar para até cerca de 200 convidados",
        "Grand Egyptian Museum — galerias fechadas para um só grupo",
        "Cidadela de Saladino, Cairo — terraço sobre a cidade inteira",
        "Filae, Assuã — o templo da ilha depois do último barco público",
        "Terraços de Hatshepsut, Luxor — três níveis na rocha de Tebas",
        "Dahabiya — o barco inteiro, não uma cabine",
      ],
    },
    faqs: [
      {
        q: "É possível mesmo reservar a Grande Pirâmide só para nós?",
        a: "Sim, e é a reserva mais difícil do Egito. A pirâmide fecha ao público e reabre para um grupo, com duas horas ininterruptas lá dentro. Cuidamos de todo o processo em nome de vocês. Quem oferece isso como reserva imediata não está oferecendo a coisa de verdade.",
      },
      {
        q: "Com quanta antecedência devo pedir?",
        a: "Algumas semanas para o planalto antes da abertura, a Cidadela ou uma noite no museu. Dois ou três meses para uma produção completa dentro de um recinto, com iluminação, som, palco e bufê. Meses para a Grande Pirâmide. Se a data é fixa, é a primeira coisa que precisamos saber.",
      },
      {
        q: "Quanto custa?",
        a: "É orçado, não publicado. O valor depende do lugar, do número de convidados, da data e do que a noite precisa — uma mesa para oito dentro de Karnak e um jantar para duzentos com palco não são duas versões do mesmo preço. Orçamento por escrito e detalhado antes de qualquer compromisso.",
      },
      {
        q: "E se não for possível na data?",
        a: "Nada é cobrado antes da confirmação, então uma negativa não custa nada a vocês. Na primeira conversa dizemos o que é realista, e se uma data ou um lugar nos parecem difíceis dizemos logo, não depois de um sinal. Quando há risco, a segunda opção é combinada antes.",
      },
    ],
    cta: {
      heading: "Contem a ocasião",
      text: "As datas primeiro, se vocês já têm — é o que leva mais tempo, e o resto vem depois. Se o que vocês têm em mente não for possível, dizemos na primeira resposta, não na quarta.",
      whatsapp: "Olá Kemet — gostaria de reservar um monumento com exclusividade para uma ocasião. Podemos falar de datas?",
      emailSubject: "Uso exclusivo — consulta",
    },
    moreLabel: "Mais em inglês",
    moreText: "Oito lugares, cada um explicado em detalhe na página em inglês.",
  },
];
