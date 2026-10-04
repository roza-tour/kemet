// ---------------------------------------------------------------------------
// THE CHROME, IN EVERY LANGUAGE THE SITE PUBLISHES IN.
//
// WHY THIS FILE EXISTS
// The pages were translated; the furniture around them was not. A German
// reader arriving on a German page met an English navigation bar, an English
// footer, an English search box and an English pop-up — which reads, fairly,
// as a translated brochure stapled to an English website. On a page carrying
// paid traffic that is the difference between an enquiry and a back button.
//
// Every string a visitor can see or a screen reader can announce that is NOT
// page content lives here, for all ten locales. Components read it by locale
// and never hard-code English.
//
// WHAT IS DELIBERATELY NOT TRANSLATED
// The 25 journey pages themselves are English, and so are their titles. We do
// not pretend otherwise: `englishNote` says it in the reader's own language
// wherever a localised page links into the catalogue, and `fullSiteEnglish`
// is how a localised nav offers the rest of the site. Translating a label
// that opens an English page, with nothing said, would be a worse lie than
// leaving the label in English.
// ---------------------------------------------------------------------------
import type { SiteLocale } from "@/config/i18n";

export interface UiStrings {
  // --- navigation --------------------------------------------------------
  /** Group label for the journeys dropdown. */
  navJourneys: string;
  /** Group label for the planning dropdown. */
  navPlan: string;
  contact: string;
  searchPlaceholder: string;
  searchAria: string;
  searchResults: string;
  openMenu: string;
  /** "Open the … menu" — `%s` is replaced with the group label. */
  openNamedMenu: string;
  skipToContent: string;
  brandHome: string;
  close: string;

  // --- footer ------------------------------------------------------------
  footExplore: string;
  footJourneys: string;
  footCompany: string;
  footContact: string;
  enquire: string;
  allJourneys: string;
  /** The one link out of a localised page into the rest of the site. */
  fullSiteEnglish: string;
  /** The same link in the nav bar, where the full sentence is too wide and
   *  crowds out the items that actually lead somewhere in this language. */
  englishShort: string;
  brandBlurb: string;
  tierLine: string;
  motto: string;

  // --- journey cards -----------------------------------------------------
  perPerson: string;
  /** The qualifier under a price: "%n" is the party size it assumes. */
  priceBasisPax: string;
  /** Said beside it when gate tickets sit outside the published price. */
  priceBasisTickets: string;
  /** The duration chip on a journey card, which is built from data. */
  tag: { days: string; fullDay: string; halfDay: string; evening: string };
  /**
   * Place names that differ from the English spelling. Only the ones that
   * differ are listed; anything absent falls through unchanged, which is
   * right for Luxor, Edfu and the rest. Leaving Cairo as "Cairo" on a German
   * page that says "Kairo" three lines above it is the sort of detail that
   * tells a reader the translation stopped at the article.
   */
  places: Record<string, string>;
  /** Said once, where a localised page links into the English catalogue. */
  englishNote: string;

  // --- floating button ---------------------------------------------------
  whatsappAria: string;

  // --- the one interruption (components/conversion/AccessInvite) ---------
  invite: {
    eyebrow: string;
    heading: string;
    text: string;
    emailLabel: string;
    consent: string;
    submit: string;
    note: string;
    privacy: string;
  };
}

export const UI: Record<SiteLocale, UiStrings> = {
  en: {
    navJourneys: "Journeys",
    navPlan: "Plan",
    contact: "Contact",
    searchPlaceholder: "Search",
    searchAria: "Search the site",
    searchResults: "Search results",
    openMenu: "Open menu",
    openNamedMenu: "Open the %s menu",
    skipToContent: "Skip to content",
    brandHome: "Kemet — Luxury Egypt Travel — home",
    close: "Close",
    footExplore: "Explore",
    footJourneys: "Journeys",
    footCompany: "Company",
    footContact: "Contact",
    enquire: "Enquire",
    allJourneys: "All journeys",
    fullSiteEnglish: "The full site, in English",
    englishShort: "The full site",
    brandBlurb: "Private luxury travel through every layer of Egypt — the Black Land, in full colour.",
    tierLine: "Private · Tailor-made · Never a group",
    motto: "The Land · The Legacy · The Journey",
    perPerson: "/ person",
    priceBasisPax: "from %n travellers",
    priceBasisTickets: "tickets not included",
    englishNote: "The journey pages themselves are in English.",
    tag: { days: "Days", fullDay: "Full Day", halfDay: "Half Day", evening: "Evening" },
    places: {},
    whatsappAria: "Chat with us on WhatsApp",
    invite: {
      eyebrow: "By invitation",
      heading: "The dates that run out",
      text: "Two sunrises a year at Abu Simbel. One set of cabins at New Year. We write when they open.",
      emailLabel: "Your email",
      consent: "Yes — write to me. I can unsubscribe at any time.",
      submit: "Keep me posted",
      note: "A few times a year.",
      privacy: "How we handle it",
    },
  },

  de: {
    navJourneys: "Reisen",
    navPlan: "Planen",
    contact: "Kontakt",
    searchPlaceholder: "Suchen",
    searchAria: "Website durchsuchen",
    searchResults: "Suchergebnisse",
    openMenu: "Menü öffnen",
    openNamedMenu: "Menü %s öffnen",
    skipToContent: "Zum Inhalt springen",
    brandHome: "Kemet — Luxusreisen Ägypten — Startseite",
    close: "Schließen",
    footExplore: "Entdecken",
    footJourneys: "Reisen",
    footCompany: "Unternehmen",
    footContact: "Kontakt",
    enquire: "Anfragen",
    allJourneys: "Alle Reisen",
    fullSiteEnglish: "Die ganze Website auf Englisch",
    englishShort: "Alles auf Englisch",
    brandBlurb: "Private Luxusreisen durch alle Schichten Ägyptens — das Schwarze Land, in voller Farbe.",
    tierLine: "Privat · Maßgeschneidert · Nie in der Gruppe",
    motto: "Das Land · Das Erbe · Die Reise",
    perPerson: "/ Person",
    priceBasisPax: "ab %n Reisenden",
    priceBasisTickets: "Eintritte nicht enthalten",
    englishNote: "Die Reiseverläufe im Detail sind auf Englisch.",
    tag: { days: "Tage", fullDay: "Ganzer Tag", halfDay: "Halber Tag", evening: "Abend" },
    places: {
      Cairo: "Kairo", Giza: "Gizeh", Aswan: "Assuan", Saqqara: "Sakkara",
      Dahshur: "Dahschur", Fayoum: "Fayyum", "Sharm El Sheikh": "Scharm el-Scheich",
    },
    whatsappAria: "Schreiben Sie uns auf WhatsApp",
    invite: {
      eyebrow: "Auf Einladung",
      heading: "Die Termine, die ausgehen",
      text: "Zwei Sonnenaufgänge im Jahr in Abu Simbel. Ein Satz Kabinen an Silvester. Wir schreiben, sobald sie öffnen.",
      emailLabel: "Ihre E-Mail",
      consent: "Ja — schreiben Sie mir. Ich kann mich jederzeit abmelden.",
      submit: "Benachrichtigen Sie mich",
      note: "Ein paar Mal im Jahr.",
      privacy: "Wie wir damit umgehen",
    },
  },

  it: {
    navJourneys: "Viaggi",
    navPlan: "Pianificare",
    contact: "Contatti",
    searchPlaceholder: "Cerca",
    searchAria: "Cerca nel sito",
    searchResults: "Risultati della ricerca",
    openMenu: "Apri il menu",
    openNamedMenu: "Apri il menu %s",
    skipToContent: "Vai al contenuto",
    brandHome: "Kemet — Viaggi di lusso in Egitto — home",
    close: "Chiudi",
    footExplore: "Esplora",
    footJourneys: "Viaggi",
    footCompany: "Azienda",
    footContact: "Contatti",
    enquire: "Richiedi",
    allJourneys: "Tutti i viaggi",
    fullSiteEnglish: "Il sito completo, in inglese",
    englishShort: "Tutto in inglese",
    brandBlurb: "Viaggi privati di lusso attraverso ogni strato dell'Egitto — la Terra Nera, a colori.",
    tierLine: "Privato · Su misura · Mai in gruppo",
    motto: "La Terra · L'Eredità · Il Viaggio",
    perPerson: "/ persona",
    priceBasisPax: "da %n viaggiatori",
    priceBasisTickets: "biglietti non inclusi",
    englishNote: "Le pagine dei singoli viaggi sono in inglese.",
    tag: { days: "Giorni", fullDay: "Giornata intera", halfDay: "Mezza giornata", evening: "Serata" },
    places: {
      Cairo: "Il Cairo", Aswan: "Assuan", Alexandria: "Alessandria",
      Memphis: "Menfi", Fayoum: "Fayyum",
    },
    whatsappAria: "Scrivici su WhatsApp",
    invite: {
      eyebrow: "Su invito",
      heading: "Le date che si esauriscono",
      text: "Due albe all'anno ad Abu Simbel. Una sola serie di cabine a Capodanno. Scriviamo quando aprono.",
      emailLabel: "La tua email",
      consent: "Sì — scrivetemi. Posso annullare l'iscrizione in qualsiasi momento.",
      submit: "Tienimi aggiornato",
      note: "Qualche volta all'anno.",
      privacy: "Come trattiamo i dati",
    },
  },

  es: {
    navJourneys: "Viajes",
    navPlan: "Planificar",
    contact: "Contacto",
    searchPlaceholder: "Buscar",
    searchAria: "Buscar en el sitio",
    searchResults: "Resultados de la búsqueda",
    openMenu: "Abrir el menú",
    openNamedMenu: "Abrir el menú %s",
    skipToContent: "Ir al contenido",
    brandHome: "Kemet — Viajes de lujo a Egipto — inicio",
    close: "Cerrar",
    footExplore: "Explorar",
    footJourneys: "Viajes",
    footCompany: "Empresa",
    footContact: "Contacto",
    enquire: "Consultar",
    allJourneys: "Todos los viajes",
    fullSiteEnglish: "El sitio completo, en inglés",
    englishShort: "Todo en inglés",
    brandBlurb: "Viajes privados de lujo por todas las capas de Egipto — la Tierra Negra, a todo color.",
    tierLine: "Privado · A medida · Nunca en grupo",
    motto: "La Tierra · El Legado · El Viaje",
    perPerson: "/ persona",
    priceBasisPax: "desde %n viajeros",
    priceBasisTickets: "entradas no incluidas",
    englishNote: "Las páginas de cada viaje están en inglés.",
    tag: { days: "Días", fullDay: "Día completo", halfDay: "Medio día", evening: "Noche" },
    places: {
      Cairo: "El Cairo", Giza: "Guiza", Aswan: "Asuán", Alexandria: "Alejandría",
      Memphis: "Menfis", Fayoum: "El Fayum",
    },
    whatsappAria: "Escríbanos por WhatsApp",
    invite: {
      eyebrow: "Por invitación",
      heading: "Las fechas que se agotan",
      text: "Dos amaneceres al año en Abu Simbel. Un solo juego de camarotes en Nochevieja. Escribimos cuando se abren.",
      emailLabel: "Su correo",
      consent: "Sí — escríbanme. Puedo darme de baja cuando quiera.",
      submit: "Manténganme al tanto",
      note: "Unas pocas veces al año.",
      privacy: "Cómo tratamos sus datos",
    },
  },

  fr: {
    navJourneys: "Voyages",
    navPlan: "Préparer",
    contact: "Contact",
    searchPlaceholder: "Rechercher",
    searchAria: "Rechercher sur le site",
    searchResults: "Résultats de recherche",
    openMenu: "Ouvrir le menu",
    openNamedMenu: "Ouvrir le menu %s",
    skipToContent: "Aller au contenu",
    brandHome: "Kemet — Voyages de luxe en Égypte — accueil",
    close: "Fermer",
    footExplore: "Explorer",
    footJourneys: "Voyages",
    footCompany: "Société",
    footContact: "Contact",
    enquire: "Demander",
    allJourneys: "Tous les voyages",
    fullSiteEnglish: "Le site complet, en anglais",
    englishShort: "Tout en anglais",
    brandBlurb: "Voyages privés de luxe à travers toutes les couches de l'Égypte — la Terre Noire, en couleurs.",
    tierLine: "Privé · Sur mesure · Jamais en groupe",
    motto: "La Terre · L'Héritage · Le Voyage",
    perPerson: "/ personne",
    priceBasisPax: "à partir de %n voyageurs",
    priceBasisTickets: "billets non inclus",
    englishNote: "Les pages de chaque voyage sont en anglais.",
    tag: { days: "Jours", fullDay: "Journée entière", halfDay: "Demi-journée", evening: "Soirée" },
    places: {
      Cairo: "Le Caire", Giza: "Gizeh", Aswan: "Assouan", Luxor: "Louxor",
      Alexandria: "Alexandrie", Saqqara: "Saqqarah", Dahshur: "Dahchour",
      Edfu: "Edfou", "Abu Simbel": "Abou Simbel", "Sharm El Sheikh": "Charm el-Cheikh",
    },
    whatsappAria: "Écrivez-nous sur WhatsApp",
    invite: {
      eyebrow: "Sur invitation",
      heading: "Les dates qui s'épuisent",
      text: "Deux levers de soleil par an à Abou Simbel. Un seul jeu de cabines au Nouvel An. Nous écrivons dès qu'elles ouvrent.",
      emailLabel: "Votre e-mail",
      consent: "Oui — écrivez-moi. Je peux me désinscrire à tout moment.",
      submit: "Tenez-moi au courant",
      note: "Quelques fois par an.",
      privacy: "Ce que nous en faisons",
    },
  },

  ru: {
    navJourneys: "Маршруты",
    navPlan: "Планирование",
    contact: "Контакты",
    searchPlaceholder: "Поиск",
    searchAria: "Поиск по сайту",
    searchResults: "Результаты поиска",
    openMenu: "Открыть меню",
    openNamedMenu: "Открыть меню «%s»",
    skipToContent: "Перейти к содержанию",
    brandHome: "Kemet — люкс-путешествия по Египту — главная",
    close: "Закрыть",
    footExplore: "Обзор",
    footJourneys: "Маршруты",
    footCompany: "Компания",
    footContact: "Контакты",
    enquire: "Отправить запрос",
    allJourneys: "Все маршруты",
    fullSiteEnglish: "Весь сайт на английском",
    englishShort: "Всё на английском",
    brandBlurb: "Частные люкс-путешествия сквозь все слои Египта — Чёрная земля, в цвете.",
    tierLine: "Частно · По вашей мерке · Никогда не в группе",
    motto: "Земля · Наследие · Путешествие",
    perPerson: "/ чел.",
    priceBasisPax: "от %n человек",
    priceBasisTickets: "билеты не включены",
    englishNote: "Страницы отдельных маршрутов — на английском.",
    tag: { days: "дней", fullDay: "Весь день", halfDay: "Полдня", evening: "Вечер" },
    places: {
      Cairo: "Каир", Giza: "Гиза", Aswan: "Асуан", Luxor: "Луксор",
      Alexandria: "Александрия", Memphis: "Мемфис", Saqqara: "Саккара",
      Dahshur: "Дахшур", Fayoum: "Файюм", Edfu: "Эдфу", "Kom Ombo": "Ком-Омбо",
      "Abu Simbel": "Абу-Симбел", "Sharm El Sheikh": "Шарм-эш-Шейх",
      "Ras Mohammed": "Рас-Мохаммед", Tiran: "Тиран",
    },
    whatsappAria: "Напишите нам в WhatsApp",
    invite: {
      eyebrow: "По приглашению",
      heading: "Даты, которые заканчиваются",
      text: "Два восхода в году в Абу-Симбеле. Один набор кают на Новый год. Мы пишем, как только открывается бронирование.",
      emailLabel: "Ваш e-mail",
      consent: "Да — пишите мне. Я могу отписаться в любой момент.",
      submit: "Сообщите мне",
      note: "Несколько раз в год.",
      privacy: "Как мы обращаемся с данными",
    },
  },

  // Brazilian Portuguese: the pt pages say "Egito", not "Egipto".
  pt: {
    navJourneys: "Viagens",
    navPlan: "Planejar",
    contact: "Contato",
    searchPlaceholder: "Pesquisar",
    searchAria: "Pesquisar no site",
    searchResults: "Resultados da pesquisa",
    openMenu: "Abrir o menu",
    openNamedMenu: "Abrir o menu %s",
    skipToContent: "Ir para o conteúdo",
    brandHome: "Kemet — Viagens de luxo ao Egito — início",
    close: "Fechar",
    footExplore: "Explorar",
    footJourneys: "Viagens",
    footCompany: "Empresa",
    footContact: "Contato",
    enquire: "Solicitar proposta",
    allJourneys: "Todas as viagens",
    fullSiteEnglish: "O site completo, em inglês",
    englishShort: "Tudo em inglês",
    brandBlurb: "Viagens privadas de luxo por todas as camadas do Egito — a Terra Negra, em cores.",
    tierLine: "Privado · Sob medida · Nunca em grupo",
    motto: "A Terra · O Legado · A Viagem",
    perPerson: "/ pessoa",
    priceBasisPax: "a partir de %n viajantes",
    priceBasisTickets: "ingressos não incluídos",
    englishNote: "As páginas de cada viagem estão em inglês.",
    tag: { days: "Dias", fullDay: "Dia inteiro", halfDay: "Meio dia", evening: "Noite" },
    places: {
      Giza: "Gizé", Aswan: "Assuã", Memphis: "Mênfis", Saqqara: "Sacará", Fayoum: "Faium",
    },
    whatsappAria: "Fale conosco no WhatsApp",
    invite: {
      eyebrow: "A convite",
      heading: "As datas que se esgotam",
      text: "Dois nasceres do sol por ano em Abu Simbel. Um único conjunto de cabines no Réveillon. Escrevemos quando abrem.",
      emailLabel: "Seu e-mail",
      consent: "Sim — podem me escrever. Posso cancelar quando quiser.",
      submit: "Quero ser avisado",
      note: "Algumas vezes por ano.",
      privacy: "Como tratamos seus dados",
    },
  },

  id: {
    navJourneys: "Perjalanan",
    navPlan: "Perencanaan",
    contact: "Kontak",
    searchPlaceholder: "Cari",
    searchAria: "Cari di situs ini",
    searchResults: "Hasil pencarian",
    openMenu: "Buka menu",
    openNamedMenu: "Buka menu %s",
    skipToContent: "Lewati ke konten",
    brandHome: "Kemet — perjalanan mewah ke Mesir — beranda",
    close: "Tutup",
    footExplore: "Jelajahi",
    footJourneys: "Perjalanan",
    footCompany: "Perusahaan",
    footContact: "Kontak",
    enquire: "Kirim pertanyaan",
    allJourneys: "Semua perjalanan",
    fullSiteEnglish: "Situs lengkap, dalam bahasa Inggris",
    englishShort: "Semua, bahasa Inggris",
    brandBlurb: "Perjalanan mewah privat menelusuri setiap lapisan Mesir — Tanah Hitam, dalam warna penuh.",
    tierLine: "Privat · Dirancang khusus · Tidak pernah rombongan",
    motto: "Negeri · Warisan · Perjalanan",
    perPerson: "/ orang",
    priceBasisPax: "mulai %n orang",
    priceBasisTickets: "tiket masuk tidak termasuk",
    englishNote: "Halaman rincian tiap perjalanan berbahasa Inggris.",
    tag: { days: "Hari", fullDay: "Sehari penuh", halfDay: "Setengah hari", evening: "Malam" },
    places: { Cairo: "Kairo", Alexandria: "Aleksandria" },
    whatsappAria: "Hubungi kami lewat WhatsApp",
    invite: {
      eyebrow: "Dengan undangan",
      heading: "Tanggal yang cepat habis",
      text: "Dua matahari terbit setahun di Abu Simbel. Satu set kabin di malam Tahun Baru. Kami mengabari saat dibuka.",
      emailLabel: "Email Anda",
      consent: "Ya — kirimi saya kabar. Saya bisa berhenti berlangganan kapan saja.",
      submit: "Beri tahu saya",
      note: "Beberapa kali setahun.",
      privacy: "Cara kami menanganinya",
    },
  },

  ms: {
    navJourneys: "Percutian",
    navPlan: "Perancangan",
    contact: "Hubungi",
    searchPlaceholder: "Cari",
    searchAria: "Cari dalam laman ini",
    searchResults: "Hasil carian",
    openMenu: "Buka menu",
    openNamedMenu: "Buka menu %s",
    skipToContent: "Langkau ke kandungan",
    brandHome: "Kemet — percutian mewah ke Mesir — laman utama",
    close: "Tutup",
    footExplore: "Terokai",
    footJourneys: "Percutian",
    footCompany: "Syarikat",
    footContact: "Hubungi",
    enquire: "Hantar pertanyaan",
    allJourneys: "Semua percutian",
    fullSiteEnglish: "Laman penuh, dalam bahasa Inggeris",
    englishShort: "Semua, bahasa Inggeris",
    brandBlurb: "Percutian mewah privat menyusuri setiap lapisan Mesir — Tanah Hitam, dalam warna penuh.",
    tierLine: "Privat · Direka khas · Tidak pernah berkumpulan",
    motto: "Negeri · Warisan · Perjalanan",
    perPerson: "/ seorang",
    priceBasisPax: "dari %n orang",
    priceBasisTickets: "tiket masuk tidak termasuk",
    englishNote: "Halaman butiran setiap percutian dalam bahasa Inggeris.",
    tag: { days: "Hari", fullDay: "Sehari penuh", halfDay: "Setengah hari", evening: "Malam" },
    places: { Cairo: "Kaherah", Alexandria: "Iskandariah" },
    whatsappAria: "Hubungi kami di WhatsApp",
    invite: {
      eyebrow: "Dengan jemputan",
      heading: "Tarikh yang cepat habis",
      text: "Dua matahari terbit setahun di Abu Simbel. Satu set kabin pada malam Tahun Baharu. Kami memaklumkan apabila dibuka.",
      emailLabel: "E-mel anda",
      consent: "Ya — hantarkan kepada saya. Saya boleh berhenti melanggan bila-bila masa.",
      submit: "Beritahu saya",
      note: "Beberapa kali setahun.",
      privacy: "Cara kami menanganinya",
    },
  },

  ar: {
    navJourneys: "الرحلات",
    navPlan: "التخطيط",
    contact: "تواصلوا معنا",
    searchPlaceholder: "بحث",
    searchAria: "ابحثوا في الموقع",
    searchResults: "نتائج البحث",
    openMenu: "فتح القائمة",
    openNamedMenu: "فتح قائمة %s",
    skipToContent: "تخطَّ إلى المحتوى",
    brandHome: "كيميت — رحلات فاخرة إلى مصر — الرئيسية",
    close: "إغلاق",
    footExplore: "استكشاف",
    footJourneys: "الرحلات",
    footCompany: "الشركة",
    footContact: "تواصلوا معنا",
    enquire: "اطلبوا عرضاً",
    allJourneys: "كل الرحلات",
    fullSiteEnglish: "الموقع كاملاً بالإنجليزية",
    englishShort: "الموقع بالإنجليزية",
    brandBlurb: "رحلات خاصة فاخرة عبر طبقات مصر كلها — الأرض السوداء، بالألوان.",
    tierLine: "خاص · مُصمَّم لكم · بلا مجموعات",
    motto: "الأرض · الإرث · الرحلة",
    perPerson: "/ للفرد",
    priceBasisPax: "من %n أفراد",
    priceBasisTickets: "التذاكر غير مشمولة",
    englishNote: "صفحات تفاصيل كل رحلة بالإنجليزية.",
    tag: { days: "أيام", fullDay: "يوم كامل", halfDay: "نصف يوم", evening: "مسائية" },
    places: {
      Cairo: "القاهرة", Giza: "الجيزة", Aswan: "أسوان", Luxor: "الأقصر",
      Alexandria: "الإسكندرية", Memphis: "منف", Saqqara: "سقارة", Dahshur: "دهشور",
      Fayoum: "الفيوم", Edfu: "إدفو", "Kom Ombo": "كوم أمبو", "Abu Simbel": "أبو سمبل",
      "Sharm El Sheikh": "شرم الشيخ", "Ras Mohammed": "رأس محمد", Tiran: "تيران",
    },
    whatsappAria: "راسلونا على واتساب",
    invite: {
      eyebrow: "بدعوة خاصة",
      heading: "المواعيد التي تنفد",
      text: "شروقان في السنة عند أبو سمبل. مجموعة واحدة من الغرف ليلة رأس السنة. نكتب لكم حين تُفتح.",
      emailLabel: "بريدكم الإلكتروني",
      consent: "نعم — راسلوني. يمكنني إلغاء الاشتراك في أي وقت.",
      submit: "أبلغوني",
      note: "بضع مرات في السنة.",
      privacy: "كيف نتعامل مع بياناتكم",
    },
  },
};

/**
 * The site's own language, typed as a SiteLocale. config/routes types its
 * DEFAULT_LOCALE as the wider `Locale`, which widens any prop that defaults
 * to it back to plain string and loses the check that a component was handed
 * a language the strings actually exist in.
 */
export const UI_DEFAULT: SiteLocale = "en";

/** The chrome for a locale. Falls back to English for an unknown key. */
export const ui = (locale: SiteLocale): UiStrings => UI[locale] ?? UI.en;

/** The duration chip on a journey card, built from the catalogue's own tag. */
export function tourTag(tag: string, t: UiStrings): string {
  const n = /^(\d+)\s+Days?$/i.exec(tag);
  if (n) return `${n[1]} ${t.tag.days}`;
  if (/^full day$/i.test(tag)) return t.tag.fullDay;
  if (/^half day$/i.test(tag)) return t.tag.halfDay;
  if (/^evening$/i.test(tag)) return t.tag.evening;
  return tag;  // an unrecognised shape stays as written rather than guessed at
}

/**
 * The short qualifier under a card's price, in this language. Built here
 * rather than in utils/format, which returns English and is also used by the
 * English tour pages in their longer, sentence form.
 */
export function priceBasisShort(
  tour: { priceBasisPax?: number; ticketsExcluded?: boolean },
  t: UiStrings,
): string | undefined {
  const parts: string[] = [];
  if (tour.priceBasisPax) parts.push(t.priceBasisPax.replace("%n", String(tour.priceBasisPax)));
  if (tour.ticketsExcluded) parts.push(t.priceBasisTickets);
  return parts.length ? parts.join(" · ") : undefined;
}

/** A place name in this language, or the English spelling where they match. */
export const placeName = (city: string, t: UiStrings) => t.places[city] ?? city;

/** "Open the %s menu" with the group's own label substituted. */
export const namedMenu = (t: UiStrings, label: string) =>
  t.openNamedMenu.replace("%s", label);
