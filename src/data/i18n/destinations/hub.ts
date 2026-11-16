// ---------------------------------------------------------------------------
// The destinations hub in each language — the page that lists a language's 19
// destination pages by region, and the "Destinations" entry in that language's
// menu (config/nav-i18n.ts). Only the hub's own words are here: every card's
// name and summary come from that language's destination texts.
//
// The address is declared twice on purpose, as for the destination pages:
// here, and in config/translation-groups.json ("destinations"). The page stops
// the build if the two disagree.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";

export interface DestHubWords {
  /** File name without the extension, inside the language's folder. */
  slug: string;
  /** Breadcrumb and menu label. */
  crumb: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  text: string;
  /** The word on each card's link. */
  explore: string;
  /** The link back to this page from a destination page. */
  all: string;
}

export const DEST_HUB: Record<TranslatedLocale, DestHubWords> = {
  de: {
    slug: "reiseziele-in-aegypten", crumb: "Reiseziele",
    metaTitle: "Reiseziele in Ägypten — Kairo, Luxor, Assuan & mehr | Kemet",
    metaDescription: "Ägypten nach Reisezielen: Kairo, Gizeh, Luxor, Assuan, Alexandria, das Rote Meer, der Sinai und die Oasen — Höhepunkte, beste Reisezeit und Praktisches.",
    title: "Reiseziele in Ägypten",
    text: "Die Orte, aus denen Ägypten besteht — jeder mit seinen Höhepunkten, seiner besten Reisezeit und dem, was man vorher wissen sollte.",
    explore: "Entdecken", all: "Alle Reiseziele",
  },
  it: {
    slug: "destinazioni-in-egitto", crumb: "Destinazioni",
    metaTitle: "Destinazioni in Egitto — Il Cairo, Luxor, Assuan e oltre | Kemet",
    metaDescription: "L'Egitto per destinazioni: Il Cairo, Giza, Luxor, Assuan, Alessandria, il Mar Rosso, il Sinai e le oasi — cosa vedere, stagione migliore e consigli pratici.",
    title: "Destinazioni in Egitto",
    text: "I luoghi di cui è fatto l'Egitto — ciascuno con le sue cose da vedere, la sua stagione migliore e ciò che conviene sapere prima di partire.",
    explore: "Scopri", all: "Tutte le destinazioni",
  },
  es: {
    slug: "destinos-en-egipto", crumb: "Destinos",
    metaTitle: "Destinos en Egipto — El Cairo, Luxor, Asuán y más | Kemet",
    metaDescription: "Egipto por destinos: El Cairo, Guiza, Luxor, Asuán, Alejandría, el mar Rojo, el Sinaí y los oasis — qué ver, mejor época y consejos prácticos.",
    title: "Destinos en Egipto",
    text: "Los lugares de los que está hecho Egipto — cada uno con sus imprescindibles, su mejor época y lo que conviene saber antes de ir.",
    explore: "Descubrir", all: "Todos los destinos",
  },
  fr: {
    slug: "destinations-en-egypte", crumb: "Destinations",
    metaTitle: "Destinations en Égypte — Le Caire, Louxor, Assouan… | Kemet",
    metaDescription: "L'Égypte par destinations : Le Caire, Gizeh, Louxor, Assouan, Alexandrie, la mer Rouge, le Sinaï et les oasis — à voir, meilleure saison, conseils pratiques.",
    title: "Destinations en Égypte",
    text: "Les lieux dont l'Égypte est faite — chacun avec ses incontournables, sa meilleure saison et ce qu'il faut savoir avant de partir.",
    explore: "Découvrir", all: "Toutes les destinations",
  },
  ru: {
    slug: "napravleniya-egipta", crumb: "Направления",
    metaTitle: "Направления Египта — Каир, Луксор, Асуан и другие | Kemet",
    metaDescription: "Египет по направлениям: Каир, Гиза, Луксор, Асуан, Александрия, Красное море, Синай и оазисы — что посмотреть, лучший сезон и практические советы.",
    title: "Направления Египта",
    text: "Места, из которых состоит Египет, — у каждого свои главные достопримечательности, лучший сезон и то, что стоит знать заранее.",
    explore: "Подробнее", all: "Все направления",
  },
  id: {
    slug: "destinasi-wisata-mesir", crumb: "Destinasi",
    metaTitle: "Destinasi Wisata Mesir — Kairo, Luxor, Aswan & Lainnya | Kemet",
    metaDescription: "Mesir per destinasi: Kairo, Giza, Luxor, Aswan, Aleksandria, Laut Merah, Sinai, dan oasis — daya tarik utama, musim terbaik, dan tips praktis.",
    title: "Destinasi di Mesir",
    text: "Tempat-tempat yang membentuk Mesir — masing-masing dengan daya tarik utamanya, musim terbaiknya, dan hal yang perlu diketahui sebelum berangkat.",
    explore: "Jelajahi", all: "Semua destinasi",
  },
  ms: {
    slug: "destinasi-di-mesir", crumb: "Destinasi",
    metaTitle: "Destinasi di Mesir — Kaherah, Luxor, Aswan & Lain-Lain | Kemet",
    metaDescription: "Mesir mengikut destinasi: Kaherah, Giza, Luxor, Aswan, Alexandria, Laut Merah, Sinai dan oasis — tarikan utama, musim terbaik dan panduan praktikal.",
    title: "Destinasi di Mesir",
    text: "Tempat-tempat yang membentuk Mesir — setiap satunya dengan tarikan utama, musim terbaik dan perkara yang perlu diketahui sebelum bertolak.",
    explore: "Terokai", all: "Semua destinasi",
  },
  pt: {
    slug: "destinos-no-egito", crumb: "Destinos",
    metaTitle: "Destinos no Egito — Cairo, Luxor, Assuã e mais | Kemet",
    metaDescription: "O Egito por destinos: Cairo, Gizé, Luxor, Assuã, Alexandria, o mar Vermelho, o Sinai e os oásis — o que ver, melhor época e dicas práticas.",
    title: "Destinos no Egito",
    text: "Os lugares de que o Egito é feito — cada um com os seus destaques, a sua melhor época e o que convém saber antes de ir.",
    explore: "Explorar", all: "Todos os destinos",
  },
  ar: {
    slug: "al-wijhat-fi-masr", crumb: "الوجهات",
    metaTitle: "وجهات مصر — القاهرة والأقصر وأسوان وغيرها | كيميت",
    metaDescription: "مصر وجهةً وجهة: القاهرة، الجيزة، الأقصر، أسوان، الإسكندرية، البحر الأحمر، سيناء والواحات — أبرز المعالم وأفضل المواسم ونصائح عملية.",
    title: "وجهات مصر",
    text: "الأماكن التي تتكوّن منها مصر — لكلٍّ منها أبرز معالمه وأفضل مواسمه وما يحسن معرفته قبل السفر.",
    explore: "اكتشفوا", all: "كل الوجهات",
  },
};

/** The hub's route in a language, as config/translation-groups.json declares it. */
export const destHubRoute = (locale: TranslatedLocale) => `${locale}/${DEST_HUB[locale].slug}.html`;
