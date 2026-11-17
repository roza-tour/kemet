// ---------------------------------------------------------------------------
// The experiences hub in each language — the page that lists a language's
// experience and activity pages, and the "Experiences" entry in that
// language's menu (config/nav-i18n.ts). Only the hub's own words are here:
// every card's name and summary come from that language's texts.
//
// The address is declared here and in config/translation-groups.json
// ("experiences"); the page stops the build if the two disagree.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";

export interface ExpHubWords {
  slug: string;
  /** Breadcrumb and menu label. */
  crumb: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  text: string;
  /** The two section headings. */
  experiences: string;
  activities: string;
  /** The link back to this page from an experience page. */
  all: string;
}

export const EXP_HUB: Record<TranslatedLocale, ExpHubWords> = {
  de: {
    slug: "erlebnisse-in-aegypten", crumb: "Erlebnisse",
    metaTitle: "Erlebnisse in Ägypten — privat geführt | Kemet",
    metaDescription: "Private Erlebnisse in Ägypten: Sonnenaufgang in Gizeh, Feluke auf dem Nil, Ballonfahrt über Luxor, Tauchen im Roten Meer — und Aktivitäten für jede Reise.",
    title: "Erlebnisse in Ägypten",
    text: "Private Momente, um die sich ein Tag bauen lässt — vom Sonnenaufgang an den Pyramiden bis zur Feluke auf dem Nil — und Aktivitäten, die sich in jede Reise einfügen.",
    experiences: "Private Erlebnisse", activities: "Aktivitäten", all: "Alle Erlebnisse",
  },
  it: {
    slug: "esperienze-in-egitto", crumb: "Esperienze",
    metaTitle: "Esperienze in Egitto — private e su misura | Kemet",
    metaDescription: "Esperienze private in Egitto: alba a Giza, feluca sul Nilo, mongolfiera su Luxor, immersioni nel Mar Rosso — e attività da inserire in ogni viaggio.",
    title: "Esperienze in Egitto",
    text: "Momenti privati attorno a cui costruire una giornata — dall'alba alle piramidi alla feluca sul Nilo — e attività che si inseriscono in qualsiasi viaggio.",
    experiences: "Esperienze private", activities: "Attività", all: "Tutte le esperienze",
  },
  es: {
    slug: "experiencias-en-egipto", crumb: "Experiencias",
    metaTitle: "Experiencias en Egipto — privadas y a medida | Kemet",
    metaDescription: "Experiencias privadas en Egipto: amanecer en Guiza, faluca por el Nilo, globo sobre Luxor, buceo en el mar Rojo — y actividades para cualquier viaje.",
    title: "Experiencias en Egipto",
    text: "Momentos privados en torno a los cuales construir un día — del amanecer en las pirámides a la faluca por el Nilo — y actividades que encajan en cualquier viaje.",
    experiences: "Experiencias privadas", activities: "Actividades", all: "Todas las experiencias",
  },
  fr: {
    slug: "experiences-en-egypte", crumb: "Expériences",
    metaTitle: "Expériences en Égypte — privées et sur mesure | Kemet",
    metaDescription: "Expériences privées en Égypte : lever du soleil à Gizeh, felouque sur le Nil, montgolfière à Louxor, plongée en mer Rouge — et des activités pour chaque voyage.",
    title: "Expériences en Égypte",
    text: "Des moments privés autour desquels bâtir une journée — du lever du soleil aux pyramides à la felouque sur le Nil — et des activités qui s'insèrent dans n'importe quel voyage.",
    experiences: "Expériences privées", activities: "Activités", all: "Toutes les expériences",
  },
  ru: {
    slug: "vpechatleniya-v-egipte", crumb: "Впечатления",
    metaTitle: "Впечатления в Египте — частные программы | Kemet",
    metaDescription: "Частные впечатления в Египте: рассвет в Гизе, фелюга на Ниле, воздушный шар над Луксором, дайвинг на Красном море — и занятия для любого путешествия.",
    title: "Впечатления в Египте",
    text: "Частные события, вокруг которых строится день, — от рассвета у пирамид до фелюги на Ниле — и занятия, которые вписываются в любое путешествие.",
    experiences: "Частные впечатления", activities: "Активный отдых", all: "Все впечатления",
  },
  id: {
    slug: "pengalaman-di-mesir", crumb: "Pengalaman",
    metaTitle: "Pengalaman di Mesir — Privat & Dirancang Khusus | Kemet",
    metaDescription: "Pengalaman privat di Mesir: matahari terbit di Giza, felucca di Sungai Nil, balon udara di Luxor, menyelam di Laut Merah — plus aktivitas pilihan.",
    title: "Pengalaman di Mesir",
    text: "Momen privat yang menjadi inti sebuah hari — dari matahari terbit di piramida hingga felucca di Sungai Nil — serta aktivitas yang dapat disisipkan ke perjalanan mana pun.",
    experiences: "Pengalaman privat", activities: "Aktivitas", all: "Semua pengalaman",
  },
  ms: {
    slug: "pengalaman-istimewa-di-mesir", crumb: "Pengalaman",
    metaTitle: "Pengalaman di Mesir — Persendirian & Khas untuk Anda | Kemet",
    metaDescription: "Pengalaman persendirian di Mesir: matahari terbit di Giza, felucca di Sungai Nil, belon udara di Luxor, selam di Laut Merah — serta aktiviti pilihan.",
    title: "Pengalaman di Mesir",
    text: "Detik-detik persendirian yang menjadi teras sesuatu hari — daripada matahari terbit di piramid hingga felucca di Sungai Nil — serta aktiviti yang boleh diselitkan dalam mana-mana percutian.",
    experiences: "Pengalaman persendirian", activities: "Aktiviti", all: "Semua pengalaman",
  },
  pt: {
    slug: "experiencias-no-egito", crumb: "Experiências",
    metaTitle: "Experiências no Egito — privadas e sob medida | Kemet",
    metaDescription: "Experiências privadas no Egito: nascer do sol em Gizé, faluca no Nilo, balão sobre Luxor, mergulho no mar Vermelho — e atividades para qualquer viagem.",
    title: "Experiências no Egito",
    text: "Momentos privados em torno dos quais se constrói um dia — do nascer do sol nas pirâmides à faluca no Nilo — e atividades que cabem em qualquer viagem.",
    experiences: "Experiências privadas", activities: "Atividades", all: "Todas as experiências",
  },
  ar: {
    slug: "tajarib-fi-masr", crumb: "التجارب",
    metaTitle: "تجارب خاصة في مصر — مصمَّمة لكم | كيميت",
    metaDescription: "تجارب خاصة في مصر: شروق الشمس في الجيزة، فلوكة في النيل، منطاد فوق الأقصر، الغوص في البحر الأحمر — وأنشطة تناسب كل رحلة.",
    title: "تجارب في مصر",
    text: "لحظات خاصة يُبنى حولها يوم كامل — من شروق الشمس عند الأهرامات إلى الفلوكة في النيل — وأنشطة تندرج في أي رحلة.",
    experiences: "تجارب خاصة", activities: "الأنشطة", all: "كل التجارب",
  },
};

/** The hub's route in a language, as config/translation-groups.json declares it. */
export const expHubRoute = (locale: TranslatedLocale) => `${locale}/${EXP_HUB[locale].slug}.html`;
