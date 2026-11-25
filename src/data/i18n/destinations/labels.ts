// ---------------------------------------------------------------------------
// The fixed words on a translated destination page — section headings, the
// fact labels, the names of Egypt's regions and the seasons — once per
// language, so 19 destinations do not each carry their own copy.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";
import type { Season } from "@/types";

export interface DestLabels {
  why: string;
  highlights: string;
  know: string;
  when: string;
  region: string;
  stay: string;
  best: string;
  /** Keyed by config/taxonomy region id. */
  regions: Record<string, string>;
  seasons: Record<Season, string>;
  /** Between two seasons in a list. */
  comma: string;
  /** %s is the place's name. */
  cta: { heading: string; text: string; whatsapp: string; emailSubject: string };
  moreLabel: string;
  moreText: string;
}

const R = (cairo: string, nile: string, med: string, red: string, west: string, nubia: string) =>
  ({ cairo, "nile-valley": nile, mediterranean: med, "red-sea": red, "western-desert": west, nubia });
const S = (spring: string, summer: string, autumn: string, winter: string) => ({ spring, summer, autumn, winter });

export const DEST_LABELS: Record<TranslatedLocale, DestLabels> = {
  de: {
    why: "Warum hinfahren", highlights: "Höhepunkte", know: "Gut zu wissen", when: "Beste Reisezeit", region: "Region", stay: "Aufenthalt", best: "Beste Zeit",
    regions: R("Kairo & Gizeh", "Niltal", "Mittelmeerküste", "Rotes Meer & Sinai", "Westliche Wüste & Oasen", "Nubien"),
    seasons: S("Frühling", "Sommer", "Herbst", "Winter"), comma: ", ",
    cta: { heading: "Nennen Sie uns Ihre Daten", text: "Reisedaten und die Zahl der Reisenden genügen. Wir antworten innerhalb von zwei Stunden, mit einer echten Route und einem Preis.", whatsapp: "Hallo Kemet — ich interessiere mich für dieses Reiseziel: %s.", emailSubject: "Anfrage — %s" },
    moreLabel: "Mehr entdecken", moreText: "Orte in der Nähe und die englische Originalseite.",
  },
  fr: {
    why: "Pourquoi y aller", highlights: "Les incontournables", know: "Bon à savoir", when: "Quand partir", region: "Région", stay: "Durée conseillée", best: "Meilleure saison",
    regions: R("Le Caire & Gizeh", "Vallée du Nil", "Côte méditerranéenne", "Mer Rouge & Sinaï", "Désert Occidental & oasis", "Nubie"),
    seasons: S("printemps", "été", "automne", "hiver"), comma: ", ",
    cta: { heading: "Donnez-nous vos dates", text: "Vos dates et le nombre de voyageurs suffisent. Nous répondons sous deux heures, avec un véritable itinéraire et un prix.", whatsapp: "Bonjour Kemet — cette destination m'intéresse : %s.", emailSubject: "Demande — %s" },
    moreLabel: "Pour aller plus loin", moreText: "Les destinations voisines, et la page d'origine en anglais.",
  },
  it: {
    why: "Perché andarci", highlights: "Da non perdere", know: "Buono a sapersi", when: "Quando andare", region: "Regione", stay: "Durata consigliata", best: "Stagione migliore",
    regions: R("Il Cairo e Giza", "Valle del Nilo", "Costa mediterranea", "Mar Rosso e Sinai", "Deserto Occidentale e oasi", "Nubia"),
    seasons: S("primavera", "estate", "autunno", "inverno"), comma: ", ",
    cta: { heading: "Diteci le vostre date", text: "Bastano le date e il numero di viaggiatori. Rispondiamo entro due ore, con un itinerario vero e un prezzo.", whatsapp: "Buongiorno Kemet — mi interessa questa destinazione: %s.", emailSubject: "Richiesta — %s" },
    moreLabel: "Per saperne di più", moreText: "Le destinazioni vicine e la pagina originale in inglese.",
  },
  es: {
    why: "Por qué ir", highlights: "Imprescindibles", know: "Conviene saber", when: "Cuándo ir", region: "Región", stay: "Estancia recomendada", best: "Mejor época",
    regions: R("El Cairo y Guiza", "Valle del Nilo", "Costa mediterránea", "Mar Rojo y Sinaí", "Desierto Occidental y oasis", "Nubia"),
    seasons: S("primavera", "verano", "otoño", "invierno"), comma: ", ",
    cta: { heading: "Díganos sus fechas", text: "Con sus fechas y el número de viajeros es suficiente. Respondemos en dos horas, con un itinerario real y un precio.", whatsapp: "Hola Kemet — me interesa este destino: %s.", emailSubject: "Consulta — %s" },
    moreLabel: "Más información", moreText: "Los destinos cercanos y la página original en inglés.",
  },
  pt: {
    why: "Por que ir", highlights: "Imperdíveis", know: "Vale saber", when: "Quando ir", region: "Região", stay: "Estadia recomendada", best: "Melhor época",
    regions: R("Cairo e Gizé", "Vale do Nilo", "Costa mediterrânea", "Mar Vermelho e Sinai", "Deserto Ocidental e oásis", "Núbia"),
    seasons: S("primavera", "verão", "outono", "inverno"), comma: ", ",
    cta: { heading: "Mandem as datas", text: "As datas e o número de viajantes bastam. Respondemos em até duas horas, com um roteiro de verdade e um preço.", whatsapp: "Olá, Kemet — tenho interesse neste destino: %s.", emailSubject: "Consulta — %s" },
    moreLabel: "Para saber mais", moreText: "Os destinos próximos e a página original em inglês.",
  },
  ru: {
    why: "Зачем ехать", highlights: "Главное", know: "Полезно знать", when: "Когда ехать", region: "Регион", stay: "Сколько времени", best: "Лучший сезон",
    regions: R("Каир и Гиза", "Долина Нила", "Средиземноморское побережье", "Красное море и Синай", "Западная пустыня и оазисы", "Нубия"),
    seasons: S("весна", "лето", "осень", "зима"), comma: ", ",
    cta: { heading: "Назовите ваши даты", text: "Достаточно дат и числа путешественников. Отвечаем в течение двух часов — с настоящим маршрутом и ценой.", whatsapp: "Здравствуйте, Kemet — меня интересует это направление: %s.", emailSubject: "Запрос — %s" },
    moreLabel: "Подробнее", moreText: "Соседние направления и исходная страница на английском.",
  },
  id: {
    why: "Mengapa ke sini", highlights: "Yang utama", know: "Perlu diketahui", when: "Kapan berkunjung", region: "Wilayah", stay: "Lama tinggal", best: "Musim terbaik",
    regions: R("Kairo & Giza", "Lembah Nil", "Pesisir Laut Tengah", "Laut Merah & Sinai", "Gurun Barat & oasis", "Nubia"),
    seasons: S("musim semi", "musim panas", "musim gugur", "musim dingin"), comma: ", ",
    cta: { heading: "Kirimkan tanggal Anda", text: "Tanggal dan jumlah orang sudah cukup. Kami membalas dalam dua jam, dengan rencana perjalanan nyata dan harganya.", whatsapp: "Halo Kemet — saya tertarik dengan destinasi ini: %s.", emailSubject: "Pertanyaan — %s" },
    moreLabel: "Selengkapnya", moreText: "Destinasi di sekitarnya dan halaman asli berbahasa Inggris.",
  },
  ms: {
    why: "Mengapa ke sini", highlights: "Tarikan utama", know: "Perlu diketahui", when: "Bila melawat", region: "Wilayah", stay: "Tempoh penginapan", best: "Musim terbaik",
    regions: R("Kaherah & Giza", "Lembah Nil", "Pantai Mediterranean", "Laut Merah & Sinai", "Gurun Barat & oasis", "Nubia"),
    seasons: S("musim bunga", "musim panas", "musim luruh", "musim sejuk"), comma: ", ",
    cta: { heading: "Hantarkan tarikh anda", text: "Tarikh dan bilangan pengembara sudah memadai. Kami membalas dalam dua jam, dengan jadual perjalanan sebenar dan harganya.", whatsapp: "Helo Kemet — saya berminat dengan destinasi ini: %s.", emailSubject: "Pertanyaan — %s" },
    moreLabel: "Selanjutnya", moreText: "Destinasi berhampiran dan halaman asal dalam bahasa Inggeris.",
  },
  ar: {
    why: "لماذا تزورونها", highlights: "أبرز المعالم", know: "ما يحسن معرفته", when: "متى تزورونها", region: "المنطقة", stay: "مدة الإقامة", best: "أفضل المواسم",
    regions: R("القاهرة والجيزة", "وادي النيل", "ساحل البحر المتوسط", "البحر الأحمر وسيناء", "الصحراء الغربية والواحات", "النوبة"),
    seasons: S("الربيع", "الصيف", "الخريف", "الشتاء"), comma: "، ",
    cta: { heading: "أرسلوا لنا تواريخكم", text: "تكفي التواريخ وعدد المسافرين. نرد خلال ساعتين، ببرنامج حقيقي وسعر.", whatsapp: "مرحبًا كيميت — أهتم بهذه الوجهة: %s.", emailSubject: "استفسار — %s" },
    moreLabel: "للمزيد", moreText: "الوجهات القريبة، والصفحة الأصلية بالإنجليزية.",
  },
};
