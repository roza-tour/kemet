// ---------------------------------------------------------------------------
// The fixed words on a translated experience or activity page — the section
// headings and fact labels — once per language. The seasons, "Highlights",
// "Good to know" and the enquiry block are the destination pages' own
// (../destinations/labels.ts), so the two families of page cannot drift apart.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";

export interface ExpLabels {
  duration: string;
  where: string;
  expect: string;
  included: string;
  excluded: string;
  prepare: string;
  glance: string;
  practical: string;
  goodFor: string;
  /** %s is the page's name. */
  whatsapp: string;
  moreText: string;
}

export const EXP_LABELS: Record<TranslatedLocale, ExpLabels> = {
  de: { duration: "Dauer", where: "Ort", expect: "Was Sie erwartet", included: "Inbegriffen", excluded: "Nicht inbegriffen", prepare: "Vorbereitung", glance: "Auf einen Blick", practical: "Buchung & Treffpunkt", goodFor: "Geeignet für", whatsapp: "Hallo Kemet — ich interessiere mich für dieses Erlebnis: %s.", moreText: "Ähnliche Erlebnisse und die englische Originalseite." },
  fr: { duration: "Durée", where: "Lieu", expect: "À quoi s'attendre", included: "Inclus", excluded: "Non inclus", prepare: "Se préparer", glance: "En bref", practical: "Réservation et rendez-vous", goodFor: "Idéal pour", whatsapp: "Bonjour Kemet — cette expérience m'intéresse : %s.", moreText: "Des expériences proches, et la page d'origine en anglais." },
  it: { duration: "Durata", where: "Dove", expect: "Cosa aspettarsi", included: "Incluso", excluded: "Non incluso", prepare: "Come prepararsi", glance: "In breve", practical: "Prenotazione e punto d'incontro", goodFor: "Ideale per", whatsapp: "Buongiorno Kemet — mi interessa questa esperienza: %s.", moreText: "Esperienze simili e la pagina originale in inglese." },
  es: { duration: "Duración", where: "Lugar", expect: "Qué esperar", included: "Incluido", excluded: "No incluido", prepare: "Cómo prepararse", glance: "De un vistazo", practical: "Reserva y punto de encuentro", goodFor: "Ideal para", whatsapp: "Hola Kemet — me interesa esta experiencia: %s.", moreText: "Experiencias similares y la página original en inglés." },
  pt: { duration: "Duração", where: "Local", expect: "O que esperar", included: "Incluído", excluded: "Não incluído", prepare: "Como se preparar", glance: "Em resumo", practical: "Reserva e ponto de encontro", goodFor: "Ideal para", whatsapp: "Olá, Kemet — tenho interesse nesta experiência: %s.", moreText: "Experiências parecidas e a página original em inglês." },
  ru: { duration: "Длительность", where: "Где", expect: "Чего ожидать", included: "Включено", excluded: "Не включено", prepare: "Как подготовиться", glance: "Коротко", practical: "Бронирование и место встречи", goodFor: "Кому подойдёт", whatsapp: "Здравствуйте, Kemet — меня интересует эта программа: %s.", moreText: "Похожие впечатления и исходная страница на английском." },
  id: { duration: "Durasi", where: "Lokasi", expect: "Yang akan Anda alami", included: "Termasuk", excluded: "Tidak termasuk", prepare: "Persiapan", glance: "Sekilas", practical: "Pemesanan & titik temu", goodFor: "Cocok untuk", whatsapp: "Halo Kemet — saya tertarik dengan pengalaman ini: %s.", moreText: "Pengalaman serupa dan halaman asli berbahasa Inggris." },
  ms: { duration: "Tempoh", where: "Lokasi", expect: "Apa yang menanti anda", included: "Termasuk", excluded: "Tidak termasuk", prepare: "Persediaan", glance: "Sepintas lalu", practical: "Tempahan & tempat bertemu", goodFor: "Sesuai untuk", whatsapp: "Helo Kemet — saya berminat dengan pengalaman ini: %s.", moreText: "Pengalaman seumpamanya dan halaman asal dalam bahasa Inggeris." },
  ar: { duration: "المدة", where: "المكان", expect: "ما الذي ينتظركم", included: "يشمل", excluded: "لا يشمل", prepare: "كيف تستعدون", glance: "في سطور", practical: "الحجز ونقطة اللقاء", goodFor: "مناسبة لـ", whatsapp: "مرحبًا كيميت — أهتم بهذه التجربة: %s.", moreText: "تجارب مشابهة، والصفحة الأصلية بالإنجليزية." },
};
