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
        photos: [{ alt: "Uma tigela de koshari com molho de tomate, cebola frita e salsinha", label: "Koshari" }],
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
];
