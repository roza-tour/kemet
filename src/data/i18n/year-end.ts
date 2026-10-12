// ---------------------------------------------------------------------------
// Christmas, New Year and the year-end holidays — five more markets.
//
// Until October 2026 the site had this window in English, German, Italian and
// Russian only, and the seasonal ribbon, which runs "Christmas & New Year"
// from October, sent a French, Spanish or Brazilian reader who clicked it to
// the English page. These are the pages it now sends them to, written — like
// the German, Italian and Russian ones in eu-holidays.ts — for the market and
// not translated out of English:
//
//   fr  Noël et Nouvel An   the French Christmas school holidays sit exactly
//                           on Egypt's peak; booking early is the variable
//   es  Navidad y Reyes     Spanish schools stay shut until after Reyes, past
//                           the end of the peak — the Italian argument, in
//                           Spain's calendar
//   pt  Natal e Réveillon   written for Brazil: summer holidays long enough
//                           for two weeks, a long journey there, and January
//                           still on holiday after the peak ends
//   id  Libur akhir tahun   the school break and the Christmas leave; Egypt
//                           with a December umrah; Christmas for Christians
//   ms  Cuti hujung tahun   the same window for Malaysia
//
// EVERY DATE AND FIGURE IS READ, NOT TYPED: the season year from the German
// landing layer (one rollover rule for the whole site — after Coptic
// Christmas), temperatures from the month guide, prices from the catalogue,
// formatted in each locale's own way. The holiday supplement for 20 December
// – 5 January is itemised in the quote, as everywhere on the site.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import { tours } from "@/data/tours";
import { findMonth } from "@/data/months";
import { SEASON_Y } from "@/data/landing/christmas-de";

const dec = findMonth("december")!;

const tour = (slug: string) => tours.find((t) => t.slug === slug)!;
const daysOf = (slug: string) => /^(\d+)/.exec(tour(slug).durationLabel)?.[1] ?? "";
/** A catalogue price in the reader's own currency format: "1 915 €", "€ 1.915". */
const eur = (loc: string, slug: string) =>
  new Intl.NumberFormat(loc, { style: "currency", currency: "EUR", maximumFractionDigits: 0, useGrouping: "always" }).format(tour(slug).price);
const fmt = (loc: string) => (d: Date) =>
  d.toLocaleDateString(loc, { timeZone: "UTC", day: "numeric", month: "long" });

const EPIPH = new Date(Date.UTC(SEASON_Y + 1, 0, 6));

// ===== FRANÇAIS — Noël et Nouvel An ========================================
export const frNoel: LocalizedPage = {
  groupId: "standalone-fr-noel",
  symbol: "sun",
  theme: "christmas",
  title: `Noël et Nouvel An en Égypte ${SEASON_Y} | Kemet`,
  description:
    `Noël et le Nouvel An ${SEASON_Y} en Égypte : ${dec.temps.luxor} à Louxor, le réveillon sur le Nil, des voyages privés avec leurs prix — et quand réserver.`,
  keywords:
    "noël en égypte, nouvel an en égypte, réveillon sur le nil, croisière sur le nil noël, égypte vacances de noël, voyage égypte décembre",
  crumb: "Noël et Nouvel An",
  h1: "Noël et Nouvel An en Égypte",
  standfirst:
    `${dec.temps.luxor} à Louxor quand la nuit tombe à cinq heures en France — et deux semaines de vacances scolaires qui tombent exactement sur le pic égyptien.`,
  lede:
    `Les deux semaines de fin d'année sont les plus disputées du calendrier égyptien, et ce n'est pas un hasard : décembre est, pour le climat, presque parfait. Louxor est à ${dec.temps.luxor}, l'air est sec, et l'on visite Karnak à trois heures de l'après-midi sans souffrir. Le revers, c'est que tout le monde a fait le même calcul : les bons bateaux et les chambres sur le Nil partent des mois à l'avance.`,
  facts: [
    { label: "Louxor en journée", value: dec.temps.luxor },
    { label: "Le Caire en journée", value: dec.temps.cairo },
    { label: "Mer Rouge, l'eau", value: dec.seaTemp },
    { label: "Réserver", value: "4 à 6 mois avant" },
  ],
  sections: [
    {
      title: "Les vacances de Noël tombent sur le pic",
      body:
        "En Égypte, le pic des prix va de la dernière semaine de décembre au 4 ou 5 janvier — presque jour pour jour les vacances scolaires françaises de Noël. Pour une famille, la seule vraie variable est donc l'avance : réservées l'été ou en septembre, ces dates laissent le choix du bateau et des chambres ; en novembre, elles laissent ce qui reste. Pour un couple sans contrainte scolaire, la première quinzaine de décembre ou la seconde moitié de janvier donnent le même ciel pour nettement moins cher.",
    },
    {
      title: "Le réveillon de la Saint-Sylvestre sur le Nil",
      body:
        "Les bateaux et les grands hôtels de Louxor et d'Assouan font du 31 décembre une soirée à part, et un dîner sur le pont, la rive ouest dans la nuit, n'a rien à voir avec une salle d'hôtel. C'est aussi la première date à partir : qui veut passer le réveillon sur l'eau le décide l'été, pas en novembre.",
    },
    {
      title: "Le Noël copte, le 7 janvier",
      body:
        "Le Noël égyptien tombe le 7 janvier ; la veille au soir, la liturgie de minuit dans les églises du Vieux-Caire accueille les visiteurs. Si vos dates le permettent, rester jusque-là, c'est voir une fête qu'aucun groupe n'a au programme — et voyager déjà après le pic des prix.",
    },
    {
      title: "Ce que ça coûte, et pourquoi",
      body:
        `Notre voyage de ${daysOf("tour-10-day")} jours commence à ${eur("fr-FR", "tour-10-day")} par personne. Entre Noël et le Nouvel An s'ajoutent les suppléments que les hôtels et les bateaux nous appliquent : nous les indiquons à part dans le devis, sans les fondre dans le total. Pour qui est flexible, début décembre et la seconde moitié de janvier coûtent nettement moins, pour un climat identique.`,
    },
  ],
  highlights: {
    heading: "En bref",
    items: [
      `Louxor à ${dec.temps.luxor} : on visite aussi l'après-midi`,
      "Le réveillon sur le pont d'un bateau : la première date à partir",
      "Les vacances de Noël couvrent exactement le pic des prix",
      `Mer Rouge à ${dec.seaTemp} : trois jours de mer à la fin du voyage`,
      "Les soirées sont fraîches : une veste pour le pont",
    ],
  },
  faqs: [
    { q: "Combien de temps à l'avance réserver le Nouvel An en Égypte ?", a: "Quatre à six mois, et davantage pour une dahabiya entière ou une suite sur le Nil. Ce n'est pas un argument de vente : les bons bateaux sont peu nombreux, et ils sont attribués dès l'été." },
    { q: "Peut-on se baigner à Noël en Égypte ?", a: `En mer Rouge, oui : l'eau est à ${dec.seaTemp}, agréable pour la plupart. On ne se baigne pas dans le Nil, et les piscines de Haute-Égypte en décembre, si elles ne sont pas chauffées, sont une affaire de courage.` },
    { q: "Tout est-il ouvert le 25 décembre ?", a: "Oui. En Égypte, le 25 décembre n'est pas férié : sites, musées et restaurants sont ouverts normalement. Le jour férié est le 7 janvier, Noël copte." },
    { q: "Y a-t-il des guides francophones ?", a: "Oui : nous travaillons avec des égyptologues agréés qui guident en français. Pour les fêtes, ils sont aussi demandés que les bateaux — dites-le dès le premier message, pas à la confirmation." },
  ],
  cta: {
    heading: "Donnez-nous vos dates",
    text: "La période et le nombre de voyageurs suffisent pour un vrai itinéraire, avec le prix détaillé — sans engagement.",
    whatsapp: "Bonjour Kemet — nous pensons à l'Égypte pour Noël ou le Nouvel An.",
    emailSubject: "Noël et Nouvel An en Égypte — demande d'itinéraire",
  },
  moreLabel: "Continuer",
  moreRoute: "fr/voyage-egypte.html",
  moreText: "Tous nos itinéraires, jour par jour et en français, sont sur la page des voyages.",
  links: [
    { label: "Quand partir en Égypte", route: "fr/quand-partir-en-egypte.html" },
    { label: "Prix d'un voyage en Égypte", route: "fr/prix-voyage-egypte.html" },
    { label: "Croisière sur le Nil", route: "fr/croisiere-sur-le-nil.html" },
    { label: "La Toussaint en Égypte", route: "fr/toussaint-en-egypte.html" },
  ],
};

// ===== ESPAÑOL — Navidad, Nochevieja y Reyes ===============================
const esDate = fmt("es-ES");

export const esNavidad: LocalizedPage = {
  groupId: "standalone-es-navidad",
  symbol: "sun",
  theme: "christmas",
  title: `Navidad y Fin de Año en Egipto ${SEASON_Y} | Kemet`,
  description:
    `Navidad y Nochevieja ${SEASON_Y} en Egipto: ${dec.temps.luxor} en Luxor, Fin de Año en el Nilo, viajes privados con precio y por qué los días de Reyes salen más baratos.`,
  keywords:
    "navidad en egipto, nochevieja en egipto, fin de año en egipto, crucero por el nilo navidad, egipto en reyes, viaje a egipto en diciembre",
  crumb: "Navidad y Fin de Año",
  h1: "Navidad, Nochevieja y Reyes en Egipto",
  standfirst:
    `${dec.temps.luxor} en Luxor mientras en casa anochece antes de las seis — y unas vacaciones escolares que en España duran hasta después de Reyes, el ${esDate(EPIPH)}.`,
  lede:
    `Las dos semanas de fin de año son las más disputadas del calendario egipcio, y hay un motivo: en clima, diciembre es casi perfecto. Luxor está a ${dec.temps.luxor}, el aire es seco y se recorre Karnak a las tres de la tarde sin sufrir. La otra cara es que todo el mundo ha hecho la misma cuenta: los buenos barcos y las habitaciones sobre el Nilo se agotan con meses de antelación. Pero el calendario español tiene un detalle a su favor, y lo explicamos aquí.`,
  facts: [
    { label: "Luxor de día", value: dec.temps.luxor },
    { label: "El Cairo de día", value: dec.temps.cairo },
    { label: "Mar Rojo, agua", value: dec.seaTemp },
    { label: "Reservar", value: "4–6 meses antes" },
  ],
  sections: [
    {
      title: "Los días de Reyes: la ventaja del calendario español",
      body:
        `En Egipto el pico de precios va de la última semana de diciembre al 4 o 5 de enero; después, hoteles y barcos bajan de forma notable y el clima sigue idéntico. En España los colegios no vuelven hasta después de Reyes: cuanto más se acerque el viaje al ${esDate(EPIPH)}, más noches caen fuera del pico. Salir el 28 de diciembre en vez del 22, por ejemplo, deja los últimos días del viaje ya en precio normal. Y quien pueda añadir un día encuentra, el 7 de enero, la Navidad copta en el Cairo antiguo.`,
    },
    {
      title: "Nochevieja en el Nilo",
      body:
        "Los barcos y los grandes hoteles de Luxor y Asuán hacen del 31 de diciembre una noche aparte, y una cena en cubierta, con la orilla oeste a oscuras, no tiene nada que ver con un salón de hotel. Es también la primera fecha en agotarse: quien quiera recibir el año sobre el agua lo decide en verano, no en noviembre.",
    },
    {
      title: "¿Nilo o mar Rojo en Fin de Año?",
      body:
        `No hay que elegir. En diciembre el mar Rojo está templado sin ser tórrido, con el agua a ${dec.seaTemp}, y el valle del Nilo tiene el mejor clima del año para visitar. La forma que mejor funciona es una semana entre El Cairo, Luxor y el Nilo, y luego tres días de mar al final, cuando ya no apetece caminar.`,
    },
    {
      title: "Cuánto cuesta, y por qué",
      body:
        `Nuestro viaje de ${daysOf("tour-10-day")} días empieza en ${eur("es-ES", "tour-10-day")} por persona. Entre Navidad y Año Nuevo se suman los suplementos que hoteles y barcos nos aplican a nosotros: los indicamos aparte en el presupuesto, sin esconderlos en el total. Quien sea flexible encontrará principios de diciembre y la segunda quincena de enero bastante más baratos, con el mismo clima.`,
    },
  ],
  highlights: {
    heading: "En resumen",
    items: [
      `Luxor a ${dec.temps.luxor}: se visita también por la tarde`,
      "Nochevieja en la cubierta de un barco: la primera fecha en agotarse",
      "Después del 4–5 de enero los precios bajan, y en España los colegios siguen cerrados hasta Reyes",
      `Mar Rojo a ${dec.seaTemp}: tres días de mar al final del viaje`,
      "Por la noche refresca: en cubierta hace falta chaqueta",
    ],
  },
  faqs: [
    { q: "¿Con cuánta antelación se reserva el Fin de Año en Egipto?", a: "Cuatro a seis meses, y para una dahabiya entera o una suite sobre el Nilo, antes. No es una técnica de venta: los buenos barcos son pocos y en verano ya están asignados." },
    { q: "¿Uno se puede bañar en Navidad en Egipto?", a: `En el mar Rojo, sí: el agua está a ${dec.seaTemp}, agradable para casi todos. En el Nilo no se baña nadie, y las piscinas del Alto Egipto en diciembre, si no están climatizadas, son cuestión de valor.` },
    { q: "¿Conviene viajar después de Año Nuevo?", a: `Por precio, sí: desde el 4–5 de enero las tarifas bajan, con el mismo clima. Con los colegios cerrados hasta Reyes, una familia española puede dejar parte del viaje fuera del pico y volver el ${esDate(EPIPH)}.` },
    { q: "¿Hay guías que hablen español?", a: "Sí: trabajamos con egiptólogos titulados que guían en español. En Fin de Año se piden tanto como los barcos — díganoslo en el primer mensaje, no al confirmar." },
  ],
  cta: {
    heading: "Díganos sus fechas",
    text: "El periodo y cuántos viajan bastan para un itinerario de verdad, con el precio detallado y sin compromiso.",
    whatsapp: "Hola Kemet: estamos pensando en Egipto para Navidad o Fin de Año.",
    emailSubject: "Navidad y Fin de Año en Egipto — solicitud de itinerario",
  },
  moreLabel: "Seguir",
  moreRoute: "es/viajes-a-egipto.html",
  moreText: "Todos nuestros itinerarios, día a día y en español, están en la página de viajes.",
  links: [
    { label: "Mejor época para viajar a Egipto", route: "es/mejor-epoca-para-viajar-a-egipto.html" },
    { label: "Cuánto cuesta viajar a Egipto", route: "es/cuanto-cuesta-viajar-a-egipto.html" },
    { label: "Crucero por el Nilo", route: "es/crucero-por-el-nilo.html" },
    { label: "Semana Santa en Egipto", route: "es/semana-santa-en-egipto.html" },
  ],
};

// ===== PORTUGUÊS (Brasil) — Natal e Réveillon ==============================
export const ptNatal: LocalizedPage = {
  groupId: "standalone-pt-natal",
  symbol: "sun",
  theme: "christmas",
  title: `Natal e Réveillon no Egito ${SEASON_Y} | Kemet`,
  description:
    `Natal e Réveillon ${SEASON_Y} no Egito: ${dec.temps.luxor} em Luxor, a virada no Nilo, roteiros privados com preço — e por que as férias pedem uma viagem mais longa.`,
  keywords:
    "natal no egito, réveillon no egito, ano novo no egito, cruzeiro no nilo réveillon, egito em dezembro, viagem ao egito nas férias de janeiro",
  crumb: "Natal e Réveillon",
  h1: "Natal e Réveillon no Egito",
  standfirst:
    `Enquanto o Brasil ferve no verão, Luxor fica em ${dec.temps.luxor}, com ar seco e céu limpo — e as férias de dezembro e janeiro dão tempo para o Egito inteiro, não só para o Cairo.`,
  lede:
    `As duas semanas de fim de ano são as mais disputadas do calendário egípcio, e há um motivo: em clima, dezembro é quase perfeito. Luxor fica em ${dec.temps.luxor}, o ar é seco e dá para percorrer Karnak às três da tarde sem sofrer. O outro lado é que todo mundo fez a mesma conta: os bons barcos e os quartos sobre o Nilo esgotam com meses de antecedência. Para quem vem do Brasil, há uma vantagem a mais: as férias longas permitem duas semanas, que é o tempo certo para um país desse tamanho.`,
  facts: [
    { label: "Luxor de dia", value: dec.temps.luxor },
    { label: "Cairo de dia", value: dec.temps.cairo },
    { label: "Mar Vermelho, água", value: dec.seaTemp },
    { label: "Fuso horário", value: "+5 h em relação a Brasília" },
  ],
  sections: [
    {
      title: "Férias longas, viagem completa",
      body:
        `A viagem desde o Brasil é longa — normalmente com conexão na Europa ou no Golfo — e por isso uma semana é pouco. Com as férias de verão, dá para fazer o Egito como ele pede: o Cairo e as pirâmides, Luxor, o Nilo até Assuã, Abu Simbel e, se quiser, alguns dias no mar Vermelho no fim. É o formato da nossa viagem de ${daysOf("tour-grand-14day")} dias, a partir de ${eur("pt-BR", "tour-grand-14day")} por pessoa.`,
    },
    {
      title: "A virada no Nilo",
      body:
        "Os barcos e os grandes hotéis de Luxor e Assuã fazem do dia 31 uma noite à parte, e um jantar no convés, com a margem oeste no escuro, não tem nada a ver com um salão de hotel — de branco, se for tradição na família. É também a primeira data a esgotar: quem quer a virada sobre a água decide no meio do ano, não em novembro.",
    },
    {
      title: "Natal copto, 7 de janeiro",
      body:
        "O Natal egípcio cai em 7 de janeiro; na noite anterior, a liturgia da meia-noite nas igrejas do Cairo antigo recebe visitantes. Como as férias brasileiras seguem por janeiro, dá para ficar até lá — e ver uma festa que nenhum grupo tem no roteiro, já fora do pico de preços.",
    },
    {
      title: "Quanto custa, e por quê",
      body:
        `Nossa viagem de ${daysOf("tour-10-day")} dias começa em ${eur("pt-BR", "tour-10-day")} por pessoa. Entre o Natal e o Ano-Novo entram os suplementos que hotéis e barcos cobram de nós: eles aparecem à parte no orçamento, sem se esconder no total. E aqui o calendário brasileiro ajuda: depois do dia 5 de janeiro os preços caem bastante, o clima continua igual — e as férias ainda não acabaram.`,
    },
  ],
  highlights: {
    heading: "Em resumo",
    items: [
      `Luxor a ${dec.temps.luxor}: dá para passear também à tarde`,
      "A virada no convés de um barco: a primeira data a esgotar",
      "Depois de 5 de janeiro os preços caem — e as férias continuam",
      `Mar Vermelho a ${dec.seaTemp}: alguns dias de praia no fim da viagem`,
      "À noite esfria: leve um casaco para o convés",
    ],
  },
  faqs: [
    { q: "Com quanta antecedência reservar o Réveillon no Egito?", a: "Quatro a seis meses, e para uma dahabiya inteira ou uma suíte sobre o Nilo, antes. Não é técnica de venda: os bons barcos são poucos e no meio do ano já estão reservados." },
    { q: "Dá para tomar banho de mar no Natal?", a: `No mar Vermelho, sim: a água fica em ${dec.seaTemp}, agradável para quase todos. No Nilo ninguém nada, e as piscinas do Alto Egito em dezembro, se não forem aquecidas, são para os corajosos.` },
    { q: "Está tudo aberto em 25 de dezembro?", a: "Sim. No Egito, 25 de dezembro não é feriado: sítios, museus e restaurantes abrem normalmente. O feriado é 7 de janeiro, o Natal copto." },
    { q: "Há guias que falam português?", a: "Sim: trabalhamos com egiptólogos credenciados que guiam em português. No fim de ano eles são tão disputados quanto os barcos — avise na primeira mensagem, não na confirmação." },
  ],
  cta: {
    heading: "Diga as suas datas",
    text: "O período e quantas pessoas viajam bastam para um roteiro de verdade, com o preço detalhado e sem compromisso.",
    whatsapp: "Olá Kemet — estamos pensando no Egito para o Natal ou o Réveillon.",
    emailSubject: "Natal e Réveillon no Egito — pedido de roteiro",
  },
  moreLabel: "Continuar",
  moreRoute: "pt/viagens-ao-egito.html",
  moreText: "Todos os nossos roteiros, dia a dia e em português, estão na página de viagens.",
  links: [
    { label: "Melhor época para ir ao Egito", route: "pt/melhor-epoca-para-ir-ao-egito.html" },
    { label: "Quanto custa viajar para o Egito", route: "pt/quanto-custa-viajar-para-o-egito.html" },
    { label: "Cruzeiro pelo Nilo", route: "pt/cruzeiro-pelo-nilo.html" },
    { label: "Carnaval no Egito", route: "pt/carnaval-no-egito.html" },
  ],
};

// ===== BAHASA INDONESIA — Libur akhir tahun ================================
export const idAkhirTahun: LocalizedPage = {
  groupId: "standalone-id-akhir-tahun",
  symbol: "sun",
  theme: "christmas",
  title: `Liburan Akhir Tahun ke Mesir ${SEASON_Y} | Kemet`,
  description:
    `Libur akhir tahun ${SEASON_Y} di Mesir: Luxor ${dec.temps.luxor}, Tahun Baru di Sungai Nil, tur privat dengan harga, umrah plus Mesir, dan kapan harus memesan.`,
  keywords:
    "liburan akhir tahun ke mesir, tahun baru di mesir, libur natal ke mesir, tour mesir desember, umrah plus mesir desember, pesiar sungai nil tahun baru",
  crumb: "Libur akhir tahun",
  h1: "Libur Akhir Tahun di Mesir",
  standfirst:
    `Saat libur sekolah dan cuti Natal–Tahun Baru, Mesir sedang di musim terbaiknya: Luxor ${dec.temps.luxor}, udara kering, langit cerah.`,
  lede:
    `Dua pekan di akhir tahun adalah yang paling diperebutkan di kalender Mesir, dan alasannya jelas: Desember nyaris sempurna untuk berkeliling. Luxor ${dec.temps.luxor}, udaranya kering, dan Karnak bisa dijelajahi pukul tiga sore tanpa kepanasan. Sisi lainnya, semua orang berhitung sama: kapal-kapal yang baik dan kamar menghadap Sungai Nil habis berbulan-bulan sebelumnya. Bagi keluarga Indonesia, libur akhir semester dan cuti bersama Natal jatuh tepat di pekan-pekan ini — jadi yang menentukan adalah seberapa awal memesan.`,
  facts: [
    { label: "Luxor siang hari", value: dec.temps.luxor },
    { label: "Kairo siang hari", value: dec.temps.cairo },
    { label: "Laut Merah (air)", value: dec.seaTemp },
    { label: "Selisih waktu", value: "Mesir 5 jam lebih lambat dari WIB" },
  ],
  sections: [
    {
      title: "Musim terbaik, musim tersibuk",
      body:
        "Puncak harga di Mesir berlangsung dari pekan terakhir Desember hingga 4 atau 5 Januari. Kapal dan hotel terbaik untuk tanggal-tanggal itu biasanya sudah dipesan empat sampai enam bulan sebelumnya. Bila tanggal Anda bisa digeser, pekan pertama Desember atau paruh kedua Januari memberi cuaca yang sama dengan harga yang jauh lebih ringan.",
    },
    {
      title: "Umrah akhir tahun plus Mesir",
      body:
        "Banyak keluarga Indonesia memanfaatkan libur sekolah Desember untuk umrah, lalu menambahkan beberapa hari di Mesir — Kairo sebelum ke Tanah Suci atau sesudahnya. Penerbangan Jeddah–Kairo hanya sekitar dua jam. Kami menyusun program di Mesir mengikuti jadwal umrah Anda: Kairo Islam dan Al-Azhar, piramida Giza, dan bila waktunya cukup, Luxor dan Sungai Nil.",
    },
    {
      title: "Natal dan Tahun Baru di Mesir",
      body:
        "Di Mesir, 25 Desember bukan hari libur: situs bersejarah dan museum buka seperti biasa, dan gereja-gereja Katolik dan Protestan di Kairo mengadakan misa Natal. Natal Koptik, hari libur nasional Mesir, jatuh pada 7 Januari, dengan liturgi tengah malam di gereja-gereja Kairo Lama. Pada malam Tahun Baru, kapal-kapal di Luxor dan Aswan mengadakan makan malam di dek — dan bagi yang lebih suka malam yang tenang, pemandangan Sungai Nil tetap sama indahnya.",
    },
    {
      title: "Berapa biayanya",
      body:
        `Perjalanan ${daysOf("tour-10-day")} hari kami mulai dari ${eur("id-ID", "tour-10-day")} per orang. Antara Natal dan Tahun Baru ada biaya tambahan yang dikenakan hotel dan kapal kepada kami; kami mencantumkannya terpisah dalam penawaran, tidak disembunyikan di dalam total.`,
    },
  ],
  highlights: {
    heading: "Sekilas",
    items: [
      `Luxor ${dec.temps.luxor}: berkeliling nyaman sampai sore`,
      "Puncak harga 20 Desember – 5 Januari: pesan 4–6 bulan sebelumnya",
      "Bisa digabung dengan umrah libur sekolah",
      "Makanan halal dan waktu salat diperhitungkan setiap hari",
      "Malam hari sejuk: bawa jaket",
    ],
  },
  faqs: [
    { q: "Kapan sebaiknya memesan untuk libur akhir tahun?", a: "Empat sampai enam bulan sebelumnya, dan lebih awal lagi untuk dahabiya atau suite menghadap Sungai Nil. Ini bukan taktik penjualan: kapal yang baik jumlahnya sedikit dan sudah terisi sejak pertengahan tahun." },
    { q: "Apakah Mesir dingin pada bulan Desember?", a: `Siang hari hangat — Luxor ${dec.temps.luxor}, Kairo ${dec.temps.cairo} — tetapi malam dan pagi hari sejuk, terutama di gurun dan di dek kapal. Bawalah jaket dan pakaian berlapis.` },
    { q: "Bagaimana dengan makanan halal dan salat?", a: "Mesir negeri mayoritas Muslim: makanan halal mudah ditemukan, dan masjid ada di mana-mana. Kami menyusun hari agar waktu salat terjaga, termasuk salat Jumat." },
    { q: "Bisakah digabung dengan umrah?", a: "Bisa. Banyak yang ke Kairo sebelum atau sesudah umrah libur sekolah. Kami menyusun program di Mesir mengikuti jadwal umrah Anda." },
  ],
  cta: {
    heading: "Beri tahu kami tanggal Anda",
    text: "Tanggal dan jumlah peserta sudah cukup untuk itinerary yang sungguhan, lengkap dengan rincian harga — tanpa komitmen.",
    whatsapp: "Halo Kemet — kami ingin ke Mesir saat libur akhir tahun.",
    emailSubject: "Libur akhir tahun di Mesir — pertanyaan",
  },
  moreLabel: "Lanjutkan",
  moreRoute: "id/paket-tour-mesir.html",
  moreText: "Semua rute privat kami ada di halaman paket tour Mesir.",
  links: [
    { label: "Umrah plus Mesir", route: "id/umrah-plus-mesir.html" },
    { label: "Pesiar Sungai Nil", route: "id/pesiar-sungai-nil.html" },
    { label: "Waktu terbaik ke Mesir", route: "id/waktu-terbaik-ke-mesir.html" },
  ],
};

// ===== BAHASA MELAYU — Cuti hujung tahun ===================================
export const msHujungTahun: LocalizedPage = {
  groupId: "standalone-ms-hujung-tahun",
  symbol: "sun",
  theme: "christmas",
  title: `Cuti Hujung Tahun ke Mesir ${SEASON_Y} | Kemet`,
  description:
    `Cuti hujung tahun ${SEASON_Y} di Mesir: Luxor ${dec.temps.luxor}, Tahun Baru di Sungai Nil, lawatan persendirian dengan harga, umrah plus Mesir dan bila perlu menempah.`,
  keywords:
    "cuti hujung tahun ke mesir, tahun baru di mesir, cuti sekolah ke mesir, pakej mesir disember, umrah plus mesir disember, pelayaran sungai nil tahun baru",
  crumb: "Cuti hujung tahun",
  h1: "Cuti Hujung Tahun di Mesir",
  standfirst:
    `Ketika cuti sekolah dan cuti Krismas–Tahun Baru tiba, Mesir berada pada musim terbaiknya: Luxor ${dec.temps.luxor}, udara kering, langit cerah.`,
  lede:
    `Dua minggu di hujung tahun ialah yang paling direbut dalam kalendar Mesir, dan sebabnya jelas: Disember hampir sempurna untuk bersiar. Luxor ${dec.temps.luxor}, udaranya kering, dan Karnak boleh dijelajah pada pukul tiga petang tanpa kepanasan. Sisi lainnya, semua orang membuat kiraan yang sama: kapal yang baik dan bilik menghadap Sungai Nil habis berbulan-bulan lebih awal. Bagi keluarga Malaysia, cuti sekolah hujung tahun jatuh tepat pada minggu-minggu ini — jadi yang menentukan ialah seawal mana anda menempah.`,
  facts: [
    { label: "Luxor siang hari", value: dec.temps.luxor },
    { label: "Kaherah siang hari", value: dec.temps.cairo },
    { label: "Laut Merah (air)", value: dec.seaTemp },
    { label: "Beza waktu", value: "Mesir 6 jam di belakang Malaysia" },
  ],
  sections: [
    {
      title: "Musim terbaik, musim paling sibuk",
      body:
        "Puncak harga di Mesir berlangsung dari minggu terakhir Disember hingga 4 atau 5 Januari. Kapal dan hotel terbaik untuk tarikh-tarikh itu lazimnya sudah ditempah empat hingga enam bulan lebih awal. Jika tarikh anda boleh dianjak, minggu pertama Disember atau separuh kedua Januari memberi cuaca yang sama dengan harga yang jauh lebih ringan.",
    },
    {
      title: "Umrah hujung tahun plus Mesir",
      body:
        "Ramai keluarga Malaysia menggunakan cuti sekolah hujung tahun untuk umrah, kemudian menambah beberapa hari di Mesir — Kaherah sebelum ke Tanah Suci atau selepasnya. Penerbangan Jeddah–Kaherah hanya kira-kira dua jam. Kami menyusun program di Mesir mengikut jadual umrah anda: Kaherah Islam dan Al-Azhar, piramid Giza, dan jika masa mengizinkan, Luxor dan Sungai Nil.",
    },
    {
      title: "Krismas dan Tahun Baru di Mesir",
      body:
        "Di Mesir, 25 Disember bukan cuti umum: tapak bersejarah dan muzium dibuka seperti biasa, dan gereja-gereja Katolik dan Protestan di Kaherah mengadakan upacara Krismas. Krismas Koptik, cuti umum Mesir, jatuh pada 7 Januari, dengan liturgi tengah malam di gereja-gereja Kaherah Lama. Pada malam Tahun Baru, kapal-kapal di Luxor dan Aswan mengadakan makan malam di dek — dan bagi yang lebih gemar malam yang tenang, pemandangan Sungai Nil tetap sama indahnya.",
    },
    {
      title: "Berapa kosnya",
      body:
        `Perjalanan ${daysOf("tour-10-day")} hari kami bermula dari ${eur("ms-MY", "tour-10-day")} seorang. Antara Krismas dan Tahun Baru ada caj tambahan yang dikenakan hotel dan kapal kepada kami; kami menyenaraikannya secara berasingan dalam sebut harga, bukan disembunyikan dalam jumlah.`,
    },
  ],
  highlights: {
    heading: "Sepintas lalu",
    items: [
      `Luxor ${dec.temps.luxor}: bersiar selesa hingga petang`,
      "Puncak harga 20 Disember – 5 Januari: tempah 4–6 bulan lebih awal",
      "Boleh digabungkan dengan umrah cuti sekolah",
      "Makanan halal dan waktu solat diambil kira setiap hari",
      "Malam hari sejuk: bawa jaket",
    ],
  },
  faqs: [
    { q: "Bilakah patut menempah untuk cuti hujung tahun?", a: "Empat hingga enam bulan lebih awal, dan lebih awal lagi untuk dahabiya atau suite menghadap Sungai Nil. Ini bukan taktik jualan: kapal yang baik jumlahnya sedikit dan sudah penuh sejak pertengahan tahun." },
    { q: "Adakah Mesir sejuk pada bulan Disember?", a: `Siang hari hangat — Luxor ${dec.temps.luxor}, Kaherah ${dec.temps.cairo} — tetapi malam dan pagi sejuk, terutamanya di padang pasir dan di dek kapal. Bawalah jaket dan pakaian berlapis.` },
    { q: "Bagaimana dengan makanan halal dan solat?", a: "Mesir negara majoriti Muslim: makanan halal mudah didapati, dan masjid ada di mana-mana. Kami menyusun hari supaya waktu solat terjaga, termasuk solat Jumaat." },
    { q: "Bolehkah digabungkan dengan umrah?", a: "Boleh. Ramai yang ke Kaherah sebelum atau selepas umrah cuti sekolah. Kami menyusun program di Mesir mengikut jadual umrah anda." },
  ],
  cta: {
    heading: "Beritahu kami tarikh anda",
    text: "Tarikh dan bilangan peserta sudah cukup untuk jadual perjalanan sebenar, lengkap dengan perincian harga — tanpa komitmen.",
    whatsapp: "Salam Kemet — kami ingin ke Mesir semasa cuti hujung tahun.",
    emailSubject: "Cuti hujung tahun di Mesir — pertanyaan",
  },
  moreLabel: "Teruskan",
  moreRoute: "ms/pakej-pelancongan-mesir.html",
  moreText: "Semua laluan persendirian kami ada di halaman pakej pelancongan Mesir.",
  links: [
    { label: "Umrah plus Mesir", route: "ms/umrah-plus-mesir.html" },
    { label: "Pelayaran Sungai Nil", route: "ms/pelayaran-sungai-nil.html" },
    { label: "Masa terbaik ke Mesir", route: "ms/masa-terbaik-ke-mesir.html" },
  ],
};
