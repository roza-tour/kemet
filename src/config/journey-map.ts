// ---------------------------------------------------------------------------
// Design your journey on the map (components/JourneyMap.astro).
//
// The visitor taps the places they want, sets the nights, and sends the route
// to us on WhatsApp or by email. Nothing is priced here: a custom route is
// quoted in writing, as everything else is. Under the route the page shows the
// catalogue journeys that come closest, with their real catalogue prices.
//
// THE MAP is drawn from the coordinates below — the coast, the borders and the
// Nile are a simplified outline, enough to recognise the country, not a chart.
// Suggested nights are a starting point the visitor changes freely.
// ---------------------------------------------------------------------------
import type { SiteLocale } from "@/config/i18n";

export type StopKey = "alexandria" | "cairo" | "fayoum" | "siwa" | "luxor" | "aswan" | "abusimbel" | "hurghada" | "sharm";

export interface MapStop {
  key: StopKey;
  lon: number;
  lat: number;
  /** Nights suggested when the stop is added. 0 = a day visit. */
  nights: number;
  /** Which side of the dot the name sits on. */
  side: "left" | "right";
  /** The catalogue's city names (data/tours.ts → cities) that count as this stop. */
  cities: string[];
}

export const MAP_STOPS: MapStop[] = [
  { key: "alexandria", lon: 29.92, lat: 31.2, nights: 1, side: "left", cities: ["Alexandria"] },
  { key: "cairo", lon: 31.24, lat: 30.04, nights: 3, side: "right", cities: ["Cairo", "Giza", "Saqqara", "Memphis", "Dahshur"] },
  { key: "fayoum", lon: 30.84, lat: 29.31, nights: 1, side: "left", cities: ["Fayoum"] },
  { key: "siwa", lon: 25.52, lat: 29.2, nights: 2, side: "right", cities: ["Siwa"] },
  { key: "hurghada", lon: 33.81, lat: 27.26, nights: 3, side: "right", cities: ["Hurghada"] },
  { key: "sharm", lon: 34.33, lat: 27.91, nights: 3, side: "right", cities: ["Sharm El Sheikh", "Ras Mohammed", "Tiran"] },
  { key: "luxor", lon: 32.64, lat: 25.69, nights: 2, side: "left", cities: ["Luxor", "Edfu", "Kom Ombo"] },
  { key: "aswan", lon: 32.9, lat: 24.09, nights: 2, side: "left", cities: ["Aswan", "Edfu", "Kom Ombo"] },
  { key: "abusimbel", lon: 31.62, lat: 22.34, nights: 0, side: "left", cities: ["Abu Simbel"] },
];

/** Coast and borders, clockwise from Sallum. [lon, lat]. */
export const EGYPT_OUTLINE: Array<[number, number]> = [
  [25.15, 31.57], [25.9, 31.62], [27.24, 31.36], [28.4, 31.08], [28.95, 30.85], [29.92, 31.21], [30.42, 31.47], [31.1, 31.6],
  [31.82, 31.53], [32.3, 31.28], [33.1, 31.08], [33.8, 31.14], [34.22, 31.32],
  [34.9, 29.5], [34.68, 29.03], [34.52, 28.5], [34.44, 28.05], [34.33, 27.86], [34.25, 27.73],
  [33.62, 28.24], [33.2, 28.9], [33.0, 29.25], [32.72, 29.62], [32.58, 29.95],
  [32.36, 29.6], [32.66, 29.1], [32.95, 28.6], [33.1, 28.35], [33.6, 27.75], [33.81, 27.26], [33.95, 26.75], [34.28, 26.1],
  [34.9, 25.07], [35.3, 24.4], [35.48, 23.95], [35.6, 23.1], [36.3, 22.6], [36.88, 22.0],
  [25.0, 22.0], [25.0, 29.25], [24.7, 30.15], [24.9, 30.9],
];

/** The Nile from the southern border to Cairo, then its two branches. */
export const NILE: Array<[number, number]> = [
  [31.3, 22.0], [31.9, 22.6], [32.3, 23.1], [32.7, 23.6], [32.88, 23.97], [32.9, 24.09], [32.93, 24.45], [32.87, 24.98], [32.55, 25.29],
  [32.64, 25.69], [32.72, 26.16], [32.24, 26.05], [31.69, 26.56], [31.18, 27.18], [30.82, 27.73], [30.75, 28.1], [30.9, 28.6],
  [31.1, 29.07], [31.25, 29.6], [31.24, 30.04], [31.1, 30.18],
];
export const NILE_ROSETTA: Array<[number, number]> = [[31.1, 30.18], [30.8, 30.8], [30.42, 31.47]];
export const NILE_DAMIETTA: Array<[number, number]> = [[31.1, 30.18], [31.25, 30.5], [31.4, 31.0], [31.82, 31.53]];

export interface MapWords {
  /** <title> and <meta description> of the map's own page. */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  mapLabel: string;
  yourRoute: string;
  empty: string;
  nights: string;
  dayVisit: string;
  total: string;
  cruise: string;
  wa: string;
  mail: string;
  note: string;
  closest: string;
  from: string;
  clear: string;
  remove: string;
  moreNight: string;
  fewerNight: string;
  hello: string;
  subject: string;
  /** The two seas, written on the map. */
  med: string;
  red: string;
  stops: Record<StopKey, string>;
}

export const MAP_WORDS: Record<SiteLocale, MapWords> = {
  en: {
    metaTitle: "Design Your Egypt Journey on the Map | Kemet",
    metaDescription: "Draw your own route across Egypt: tap the places you want, set the nights, and send it to us. We reply with a private itinerary and a price in writing.",
    eyebrow: "Design your journey", heading: "Draw your route across Egypt", intro: "Tap the places you want to see, set the nights, and send us the route. We reply with a real itinerary and a price in writing.",
    mapLabel: "Map of Egypt — choose your stops", yourRoute: "Your route", empty: "Tap a place on the map to begin.", nights: "Nights", dayVisit: "day visit", total: "Total nights",
    cruise: "Sail between Luxor and Aswan on the Nile", wa: "Send on WhatsApp", mail: "Send by email", note: "A route of your own is priced on request. We reply within one working day.",
    closest: "The closest journeys in our catalogue", from: "from", clear: "Start again", remove: "Remove", moreNight: "One night more", fewerNight: "One night fewer",
    hello: "Hello Kemet — this is the route I have in mind:", subject: "My route across Egypt",
    med: "Mediterranean Sea", red: "Red Sea",
    stops: { alexandria: "Alexandria", cairo: "Cairo & Giza", fayoum: "Fayoum", siwa: "Siwa Oasis", luxor: "Luxor", aswan: "Aswan", abusimbel: "Abu Simbel", hurghada: "Hurghada · Red Sea", sharm: "Sharm El Sheikh" },
  },
  de: {
    metaTitle: "Ägyptenreise auf der Karte entwerfen | Kemet",
    metaDescription: "Zeichnen Sie Ihre eigene Route durch Ägypten: Orte antippen, Nächte festlegen, absenden. Wir antworten schriftlich mit einer privaten Route und einem Preis.",
    eyebrow: "Ihre Reise entwerfen", heading: "Zeichnen Sie Ihre Route durch Ägypten", intro: "Tippen Sie die Orte an, die Sie sehen möchten, legen Sie die Nächte fest und senden Sie uns die Route. Wir antworten mit einer echten Route und einem Preis, schriftlich.",
    mapLabel: "Karte von Ägypten — wählen Sie Ihre Stationen", yourRoute: "Ihre Route", empty: "Tippen Sie einen Ort auf der Karte an.", nights: "Nächte", dayVisit: "Tagesbesuch", total: "Nächte insgesamt",
    cruise: "Zwischen Luxor und Assuan auf dem Nil fahren", wa: "Per WhatsApp senden", mail: "Per E-Mail senden", note: "Eine eigene Route wird auf Anfrage kalkuliert. Wir antworten innerhalb eines Werktags.",
    closest: "Die ähnlichsten Reisen aus unserem Programm", from: "ab", clear: "Neu beginnen", remove: "Entfernen", moreNight: "Eine Nacht mehr", fewerNight: "Eine Nacht weniger",
    hello: "Hallo Kemet — diese Route stelle ich mir vor:", subject: "Meine Route durch Ägypten",
    med: "Mittelmeer", red: "Rotes Meer",
    stops: { alexandria: "Alexandria", cairo: "Kairo & Gizeh", fayoum: "Fayyum", siwa: "Oase Siwa", luxor: "Luxor", aswan: "Assuan", abusimbel: "Abu Simbel", hurghada: "Hurghada · Rotes Meer", sharm: "Scharm el-Scheich" },
  },
  fr: {
    metaTitle: "Dessinez votre voyage en Égypte sur la carte | Kemet",
    metaDescription: "Tracez votre itinéraire en Égypte : touchez les lieux, fixez les nuits, envoyez. Nous répondons par écrit avec un programme privé et un prix.",
    eyebrow: "Dessinez votre voyage", heading: "Tracez votre itinéraire à travers l'Égypte", intro: "Touchez les lieux que vous voulez voir, fixez les nuits et envoyez-nous l'itinéraire. Nous répondons par écrit, avec un vrai programme et un prix.",
    mapLabel: "Carte de l'Égypte — choisissez vos étapes", yourRoute: "Votre itinéraire", empty: "Touchez un lieu sur la carte pour commencer.", nights: "Nuits", dayVisit: "visite à la journée", total: "Total des nuits",
    cruise: "Naviguer sur le Nil entre Louxor et Assouan", wa: "Envoyer sur WhatsApp", mail: "Envoyer par e-mail", note: "Un itinéraire sur mesure est chiffré sur demande. Nous répondons sous un jour ouvré.",
    closest: "Les voyages les plus proches dans notre catalogue", from: "dès", clear: "Recommencer", remove: "Retirer", moreNight: "Une nuit de plus", fewerNight: "Une nuit de moins",
    hello: "Bonjour Kemet — voici l'itinéraire que j'ai en tête :", subject: "Mon itinéraire en Égypte",
    med: "Méditerranée", red: "Mer Rouge",
    stops: { alexandria: "Alexandrie", cairo: "Le Caire & Gizeh", fayoum: "Le Fayoum", siwa: "Oasis de Siwa", luxor: "Louxor", aswan: "Assouan", abusimbel: "Abou Simbel", hurghada: "Hurghada · mer Rouge", sharm: "Charm el-Cheikh" },
  },
  it: {
    metaTitle: "Disegnate il vostro viaggio in Egitto | Kemet",
    metaDescription: "Tracciate il vostro itinerario in Egitto: toccate i luoghi, scegliete le notti, inviate. Rispondiamo per iscritto con un programma privato e un prezzo.",
    eyebrow: "Disegnate il vostro viaggio", heading: "Tracciate il vostro itinerario in Egitto", intro: "Toccate i luoghi che volete vedere, scegliete le notti e inviateci l'itinerario. Rispondiamo per iscritto, con un programma vero e un prezzo.",
    mapLabel: "Mappa dell'Egitto — scegliete le tappe", yourRoute: "Il vostro itinerario", empty: "Toccate un luogo sulla mappa per cominciare.", nights: "Notti", dayVisit: "visita in giornata", total: "Notti in totale",
    cruise: "Navigare sul Nilo tra Luxor e Assuan", wa: "Invia su WhatsApp", mail: "Invia per e-mail", note: "Un itinerario su misura si quota su richiesta. Rispondiamo entro un giorno lavorativo.",
    closest: "I viaggi più vicini nel nostro catalogo", from: "da", clear: "Ricomincia", remove: "Rimuovi", moreNight: "Una notte in più", fewerNight: "Una notte in meno",
    hello: "Buongiorno Kemet — questo è l'itinerario che ho in mente:", subject: "Il mio itinerario in Egitto",
    med: "Mar Mediterraneo", red: "Mar Rosso",
    stops: { alexandria: "Alessandria", cairo: "Il Cairo e Giza", fayoum: "Fayyum", siwa: "Oasi di Siwa", luxor: "Luxor", aswan: "Assuan", abusimbel: "Abu Simbel", hurghada: "Hurghada · Mar Rosso", sharm: "Sharm el-Sheikh" },
  },
  es: {
    metaTitle: "Diseñe su viaje a Egipto en el mapa | Kemet",
    metaDescription: "Trace su propia ruta por Egipto: toque los lugares, elija las noches y envíela. Respondemos por escrito con un itinerario privado y un precio.",
    eyebrow: "Diseñe su viaje", heading: "Trace su ruta por Egipto", intro: "Toque los lugares que quiere ver, elija las noches y envíenos la ruta. Respondemos por escrito, con un itinerario real y un precio.",
    mapLabel: "Mapa de Egipto — elija sus paradas", yourRoute: "Su ruta", empty: "Toque un lugar en el mapa para empezar.", nights: "Noches", dayVisit: "visita de un día", total: "Noches en total",
    cruise: "Navegar por el Nilo entre Luxor y Asuán", wa: "Enviar por WhatsApp", mail: "Enviar por correo", note: "Una ruta propia se presupuesta bajo petición. Respondemos en un día hábil.",
    closest: "Los viajes más parecidos de nuestro catálogo", from: "desde", clear: "Empezar de nuevo", remove: "Quitar", moreNight: "Una noche más", fewerNight: "Una noche menos",
    hello: "Hola Kemet — esta es la ruta que tengo en mente:", subject: "Mi ruta por Egipto",
    med: "Mar Mediterráneo", red: "Mar Rojo",
    stops: { alexandria: "Alejandría", cairo: "El Cairo y Guiza", fayoum: "El Fayum", siwa: "Oasis de Siwa", luxor: "Luxor", aswan: "Asuán", abusimbel: "Abu Simbel", hurghada: "Hurghada · mar Rojo", sharm: "Sharm el-Sheikh" },
  },
  pt: {
    metaTitle: "Desenhe a sua viagem ao Egito no mapa | Kemet",
    metaDescription: "Trace o seu roteiro pelo Egito: toquem nos lugares, escolham as noites e enviem. Respondemos por escrito com um roteiro privativo e um preço.",
    eyebrow: "Desenhe a sua viagem", heading: "Trace o seu roteiro pelo Egito", intro: "Toquem nos lugares que querem ver, escolham as noites e enviem o roteiro. Respondemos por escrito, com um roteiro de verdade e um preço.",
    mapLabel: "Mapa do Egito — escolham as paradas", yourRoute: "O seu roteiro", empty: "Toquem em um lugar do mapa para começar.", nights: "Noites", dayVisit: "visita de um dia", total: "Total de noites",
    cruise: "Navegar pelo Nilo entre Luxor e Assuã", wa: "Enviar pelo WhatsApp", mail: "Enviar por e-mail", note: "Um roteiro próprio é orçado sob consulta. Respondemos em um dia útil.",
    closest: "As viagens mais próximas do nosso catálogo", from: "a partir de", clear: "Recomeçar", remove: "Remover", moreNight: "Uma noite a mais", fewerNight: "Uma noite a menos",
    hello: "Olá, Kemet — este é o roteiro que tenho em mente:", subject: "Meu roteiro pelo Egito",
    med: "Mar Mediterrâneo", red: "Mar Vermelho",
    stops: { alexandria: "Alexandria", cairo: "Cairo e Gizé", fayoum: "Faium", siwa: "Oásis de Siwa", luxor: "Luxor", aswan: "Assuã", abusimbel: "Abu Simbel", hurghada: "Hurghada · Mar Vermelho", sharm: "Sharm el-Sheikh" },
  },
  ru: {
    metaTitle: "Составьте маршрут по Египту на карте | Kemet",
    metaDescription: "Проложите свой маршрут по Египту: отметьте места, задайте ночи и отправьте нам. Мы ответим письменно — с индивидуальной программой и ценой.",
    eyebrow: "Составьте своё путешествие", heading: "Проложите маршрут по Египту", intro: "Отметьте места, которые хотите увидеть, задайте число ночей и отправьте нам маршрут. Мы ответим письменно — с настоящей программой и ценой.",
    mapLabel: "Карта Египта — выберите остановки", yourRoute: "Ваш маршрут", empty: "Нажмите на место на карте, чтобы начать.", nights: "Ночей", dayVisit: "визит на день", total: "Всего ночей",
    cruise: "Пройти по Нилу между Луксором и Асуаном", wa: "Отправить в WhatsApp", mail: "Отправить по почте", note: "Собственный маршрут рассчитывается по запросу. Отвечаем в течение одного рабочего дня.",
    closest: "Самые близкие путешествия из нашего каталога", from: "от", clear: "Начать заново", remove: "Убрать", moreNight: "На ночь больше", fewerNight: "На ночь меньше",
    hello: "Здравствуйте, Kemet — вот маршрут, который я задумал(а):", subject: "Мой маршрут по Египту",
    med: "Средиземное море", red: "Красное море",
    stops: { alexandria: "Александрия", cairo: "Каир и Гиза", fayoum: "Файюм", siwa: "Оазис Сива", luxor: "Луксор", aswan: "Асуан", abusimbel: "Абу-Симбел", hurghada: "Хургада · Красное море", sharm: "Шарм-эш-Шейх" },
  },
  id: {
    metaTitle: "Rancang Perjalanan Mesir Anda di Peta | Kemet",
    metaDescription: "Gambar rute Anda sendiri di Mesir: ketuk tempatnya, tentukan malamnya, lalu kirim. Kami membalas tertulis dengan rencana perjalanan privat dan harganya.",
    eyebrow: "Rancang perjalanan Anda", heading: "Gambar rute Anda melintasi Mesir", intro: "Ketuk tempat yang ingin Anda lihat, tentukan jumlah malam, lalu kirimkan rutenya. Kami membalas secara tertulis, dengan rencana perjalanan nyata dan harganya.",
    mapLabel: "Peta Mesir — pilih persinggahan Anda", yourRoute: "Rute Anda", empty: "Ketuk satu tempat di peta untuk memulai.", nights: "Malam", dayVisit: "kunjungan sehari", total: "Jumlah malam",
    cruise: "Berlayar di Sungai Nil antara Luxor dan Aswan", wa: "Kirim lewat WhatsApp", mail: "Kirim lewat email", note: "Rute buatan sendiri dihitung atas permintaan. Kami membalas dalam satu hari kerja.",
    closest: "Perjalanan terdekat dalam katalog kami", from: "mulai", clear: "Mulai lagi", remove: "Hapus", moreNight: "Tambah satu malam", fewerNight: "Kurangi satu malam",
    hello: "Halo Kemet — inilah rute yang saya inginkan:", subject: "Rute saya di Mesir",
    med: "Laut Tengah", red: "Laut Merah",
    stops: { alexandria: "Aleksandria", cairo: "Kairo & Giza", fayoum: "Fayoum", siwa: "Oasis Siwa", luxor: "Luxor", aswan: "Aswan", abusimbel: "Abu Simbel", hurghada: "Hurghada · Laut Merah", sharm: "Sharm El Sheikh" },
  },
  ms: {
    metaTitle: "Reka Perjalanan Mesir Anda pada Peta | Kemet",
    metaDescription: "Lukis laluan anda sendiri di Mesir: ketik tempatnya, tetapkan malamnya, kemudian hantar. Kami membalas bertulis dengan jadual persendirian dan harganya.",
    eyebrow: "Reka perjalanan anda", heading: "Lukis laluan anda merentasi Mesir", intro: "Ketik tempat yang ingin anda lihat, tetapkan bilangan malam, kemudian hantar laluannya. Kami membalas secara bertulis, dengan jadual perjalanan sebenar dan harganya.",
    mapLabel: "Peta Mesir — pilih persinggahan anda", yourRoute: "Laluan anda", empty: "Ketik satu tempat pada peta untuk bermula.", nights: "Malam", dayVisit: "lawatan sehari", total: "Jumlah malam",
    cruise: "Belayar di Sungai Nil antara Luxor dan Aswan", wa: "Hantar melalui WhatsApp", mail: "Hantar melalui e-mel", note: "Laluan rekaan sendiri dikira atas permintaan. Kami membalas dalam satu hari bekerja.",
    closest: "Perjalanan paling hampir dalam katalog kami", from: "dari", clear: "Mula semula", remove: "Buang", moreNight: "Tambah satu malam", fewerNight: "Kurang satu malam",
    hello: "Helo Kemet — inilah laluan yang saya inginkan:", subject: "Laluan saya di Mesir",
    med: "Laut Mediterranean", red: "Laut Merah",
    stops: { alexandria: "Alexandria", cairo: "Kaherah & Giza", fayoum: "Fayoum", siwa: "Oasis Siwa", luxor: "Luxor", aswan: "Aswan", abusimbel: "Abu Simbel", hurghada: "Hurghada · Laut Merah", sharm: "Sharm El Sheikh" },
  },
  ar: {
    metaTitle: "صمّموا رحلتكم إلى مصر على الخريطة | كيميت",
    metaDescription: "ارسموا مساركم في مصر: اضغطوا على الأماكن، حدّدوا الليالي، وأرسلوا المسار. نرد كتابةً ببرنامج خاص وسعر.",
    eyebrow: "صمّموا رحلتكم", heading: "ارسموا مساركم على خريطة مصر", intro: "اضغطوا على الأماكن التي تودّون زيارتها، وحدّدوا عدد الليالي، ثم أرسلوا لنا المسار. نرد كتابةً ببرنامج حقيقي وسعر.",
    mapLabel: "خريطة مصر — اختاروا محطاتكم", yourRoute: "مساركم", empty: "اضغطوا على مكان في الخريطة للبدء.", nights: "الليالي", dayVisit: "زيارة ليوم واحد", total: "مجموع الليالي",
    cruise: "الإبحار في النيل بين الأقصر وأسوان", wa: "إرسال عبر واتساب", mail: "إرسال بالبريد الإلكتروني", note: "المسار الخاص يُسعَّر عند الطلب. نرد خلال يوم عمل واحد.",
    closest: "أقرب الرحلات في برامجنا", from: "من", clear: "البدء من جديد", remove: "حذف", moreNight: "ليلة إضافية", fewerNight: "ليلة أقل",
    hello: "مرحبًا كيميت — هذا هو المسار الذي أفكر فيه:", subject: "مساري في مصر",
    med: "البحر المتوسط", red: "البحر الأحمر",
    stops: { alexandria: "الإسكندرية", cairo: "القاهرة والجيزة", fayoum: "الفيوم", siwa: "واحة سيوة", luxor: "الأقصر", aswan: "أسوان", abusimbel: "أبو سمبل", hurghada: "الغردقة · البحر الأحمر", sharm: "شرم الشيخ" },
  },
};

/** Where the map lives in each language (config/translation-groups.json → "design-journey"). */
export const MAP_ROUTE: Record<SiteLocale, string> = {
  en: "design-your-journey.html",
  de: "de/reise-auf-der-karte-entwerfen.html",
  it: "it/disegna-il-tuo-viaggio-in-egitto.html",
  es: "es/disene-su-viaje-a-egipto.html",
  fr: "fr/dessinez-votre-voyage-en-egypte.html",
  ru: "ru/sostavte-marshrut-po-egiptu.html",
  id: "id/rancang-perjalanan-mesir.html",
  ms: "ms/reka-perjalanan-mesir.html",
  pt: "pt/desenhe-sua-viagem-ao-egito.html",
  ar: "ar/sammem-rehlatak-fi-masr.html",
};
