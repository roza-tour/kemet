// ---------------------------------------------------------------------------
// Share photographs chosen by hand — for the pages that have no photograph of
// their own at the top (the months, the comparisons, the occasions, the hubs,
// and the translated pages written as text), so that each still shares a
// picture of its own subject instead of the first tour card it happens to
// list, or the generic card. Everything else shares its own lead photograph
// (utils/share).
//
// The alt text is written in each page's language: it is what a screen reader
// says on X or Facebook when the card appears. `null` keeps the generic card
// on purpose (the legal pages, the sitemap, the 404).
//
// Photos whose file names say one thing and show another are not used here:
// luxor-temple-on-the-nile is a rock-cut temple at Abu Simbel, and
// aswan-nubian-village-nile is not in Egypt.
// ---------------------------------------------------------------------------
import type { SiteLocale } from "@/config/i18n";
import { localeOfRoute } from "@/config/i18n";

type Alts = Partial<Record<SiteLocale, string>>;
interface Choice { src: string; alt: Alts; routes: string[] }

const img = (p: string) => `/images/${p}.webp`;

const CHOICES: Choice[] = [
  // ---- Translated pages of one subject: the same photograph in every language
  {
    src: img("giza/giza-great-pyramid-clear-sky"),
    alt: {
      en: "The Red Pyramid of Dahshur, the first true pyramid, under a clear desert sky",
      de: "Die Rote Pyramide von Dahschur, die erste echte Pyramide, unter klarem Wüstenhimmel",
      fr: "La pyramide rouge de Dahchour, la première vraie pyramide, sous un ciel clair du désert",
      es: "La Pirámide Roja de Dahshur, la primera pirámide verdadera, bajo un cielo despejado",
      it: "La Piramide Rossa di Dahshur, la prima vera piramide, sotto un cielo limpido",
      ru: "Красная пирамида в Дахшуре — первая настоящая пирамида — под ясным небом пустыни",
      pt: "A Pirâmide Vermelha de Dahshur, a primeira pirâmide verdadeira, sob um céu limpo",
      id: "Piramida Merah Dahshur, piramida sejati pertama, di bawah langit gurun yang cerah",
      ms: "Piramid Merah Dahshur, piramid sebenar yang pertama, di bawah langit gurun yang cerah",
      ar: "الهرم الأحمر في دهشور، أول هرم كامل، تحت سماء الصحراء الصافية",
    },
    routes: ["ar/index.html", "de/index.html", "es/index.html", "fr/index.html", "id/index.html",
      "it/index.html", "ms/index.html", "pt/index.html", "ru/index.html"],
  },
  {
    src: img("tours/tour-nile-cairo-feluccas-aerial"),
    alt: {
      en: "Cairo from above: minarets, the Nile and white-sailed feluccas",
      de: "Kairo von oben: Minarette, der Nil und Feluken mit weißen Segeln",
      fr: "Le Caire vu d'en haut : minarets, le Nil et des felouques aux voiles blanches",
      es: "El Cairo desde el aire: minaretes, el Nilo y faluchos de velas blancas",
      it: "Il Cairo dall'alto: minareti, il Nilo e feluche dalle vele bianche",
      ru: "Каир сверху: минареты, Нил и фелуки под белыми парусами",
      pt: "O Cairo visto de cima: minaretes, o Nilo e falucas de velas brancas",
      id: "Kairo dari atas: menara masjid, Sungai Nil, dan perahu felucca berlayar putih",
      ms: "Kaherah dari atas: menara masjid, Sungai Nil dan perahu felucca berlayar putih",
      ar: "القاهرة من أعلى: المآذن والنيل والفلوكات بأشرعتها البيضاء",
    },
    routes: ["egypt-safety.html", "ar/hal-masr-amina.html", "de/ist-aegypten-sicher.html",
      "es/es-seguro-viajar-a-egipto.html", "fr/securite-en-egypte.html", "id/apakah-mesir-aman.html",
      "it/e-sicuro-viaggiare-in-egitto.html", "ms/adakah-mesir-selamat.html",
      "pt/e-seguro-viajar-para-o-egito.html", "ru/bezopasnost-v-egipte.html"],
  },
  {
    src: img("luxor/luxor-hatshepsut-colonnade"),
    alt: {
      en: "The ramp and colonnades of Hatshepsut's temple beneath the cliffs of Deir el-Bahri",
      de: "Rampe und Säulenhallen des Hatschepsut-Tempels unter den Felsen von Deir el-Bahari",
      fr: "La rampe et les colonnades du temple d'Hatchepsout au pied des falaises de Deir el-Bahari",
      es: "La rampa y las columnatas del templo de Hatshepsut bajo los acantilados de Deir el-Bahari",
      it: "La rampa e i colonnati del tempio di Hatshepsut sotto le falesie di Deir el-Bahari",
      ru: "Пандус и колоннады храма Хатшепсут под скалами Дейр-эль-Бахри",
      pt: "A rampa e as colunatas do templo de Hatshepsut sob as falésias de Deir el-Bahari",
      id: "Jalan landai dan barisan tiang kuil Hatshepsut di bawah tebing Deir el-Bahari",
      ms: "Laluan landai dan barisan tiang kuil Hatshepsut di bawah tebing Deir el-Bahari",
      ar: "منحدر وأعمدة معبد حتشبسوت أسفل منحدرات الدير البحري",
    },
    routes: ["egypt-tour-cost.html", "ar/taklifat-rehla-ila-masr.html", "de/aegypten-reise-kosten.html",
      "es/cuanto-cuesta-viajar-a-egipto.html", "fr/prix-voyage-egypte.html", "id/biaya-liburan-ke-mesir.html",
      "it/quanto-costa-viaggio-egitto.html", "ms/kos-percutian-ke-mesir.html",
      "pt/quanto-custa-viajar-para-o-egito.html", "ru/stoimost-tura-v-egipet.html"],
  },
  {
    src: img("giza/giza-great-pyramid-khufu"),
    alt: {
      de: "Die Cheops-Pyramide auf dem Plateau von Gizeh",
      fr: "La pyramide de Khéops sur le plateau de Gizeh",
      es: "La pirámide de Keops en la meseta de Guiza",
      it: "La piramide di Cheope sull'altopiano di Giza",
      ru: "Пирамида Хеопса на плато Гиза",
      pt: "A pirâmide de Quéops no planalto de Gizé",
      id: "Piramida Khufu di dataran tinggi Giza",
      ms: "Piramid Khufu di dataran tinggi Giza",
      ar: "هرم خوفو على هضبة الجيزة",
    },
    routes: ["ar/hajz-mawaqea-athariya-khas.html", "de/exklusive-nutzung-monumente-aegypten.html",
      "es/monumentos-en-exclusiva-egipto.html", "fr/monuments-en-exclusivite-egypte.html",
      "id/sewa-eksklusif-situs-mesir.html", "it/monumenti-in-esclusiva-egitto.html",
      "ms/tempahan-eksklusif-tapak-mesir.html", "pt/monumentos-exclusivos-egito.html",
      "ru/ekskluzivnyy-dostup-k-pamyatnikam.html"],
  },
  {
    src: img("cruise/nile-cruise-sunset"),
    alt: {
      de: "Ein Nilschiff zwischen Assuan und Luxor bei Sonnenuntergang",
      fr: "Un bateau de croisière entre Assouan et Louxor au coucher du soleil",
      es: "Un crucero por el Nilo entre Asuán y Luxor al atardecer",
      it: "Una nave da crociera tra Assuan e Luxor al tramonto",
      ru: "Круизное судно между Асуаном и Луксором на закате",
      pt: "Um navio de cruzeiro entre Assuã e Luxor ao pôr do sol",
      id: "Kapal pesiar Sungai Nil antara Aswan dan Luxor saat matahari terbenam",
      ms: "Kapal persiaran Sungai Nil antara Aswan dan Luxor ketika matahari terbenam",
      ar: "مركب نيلي بين أسوان والأقصر عند الغروب",
    },
    routes: ["ar/rehla-niliya-khassa.html", "de/nilkreuzfahrt.html", "es/crucero-por-el-nilo.html",
      "fr/croisiere-sur-le-nil.html", "id/pesiar-sungai-nil.html", "it/crociera-sul-nilo.html",
      "ms/pelayaran-sungai-nil.html", "pt/cruzeiro-pelo-nilo.html", "ru/kruiz-po-nilu.html"],
  },
  {
    src: img("home/egypt-giza-pyramids-desert-panorama"),
    alt: {
      en: "The three great pyramids of Giza rising from the desert",
      de: "Die drei großen Pyramiden von Gizeh in der Wüste",
      fr: "Les trois grandes pyramides de Gizeh dans le désert",
      es: "Las tres grandes pirámides de Guiza en el desierto",
      it: "Le tre grandi piramidi di Giza nel deserto",
      ru: "Три великие пирамиды Гизы среди пустыни",
      pt: "As três grandes pirâmides de Gizé no deserto",
      id: "Tiga piramida besar Giza menjulang dari gurun",
      ms: "Tiga piramid besar Giza menjulang dari gurun",
      ar: "أهرامات الجيزة الثلاثة الكبرى في قلب الصحراء",
    },
    routes: ["tours.html", "ar/rehlat-masr-khassa.html", "de/aegypten-reisen.html", "es/viajes-a-egipto.html",
      "fr/voyage-egypte.html", "id/paket-tour-mesir.html", "it/viaggi-in-egitto.html",
      "ms/pakej-pelancongan-mesir.html", "pt/viagens-ao-egito.html", "ru/tury-v-egipet.html"],
  },
  {
    src: img("activities/balloons-luxor-sunrise-west-bank"),
    alt: {
      en: "Hot-air balloons at sunrise over the villages and green fields of Luxor's West Bank",
      de: "Heißluftballons bei Sonnenaufgang über den Dörfern und Feldern am Westufer von Luxor",
      fr: "Montgolfières au lever du soleil au-dessus des villages et des champs de la rive ouest de Louxor",
      es: "Globos al amanecer sobre los pueblos y campos de la orilla oeste de Luxor",
      it: "Mongolfiere all'alba sopra i villaggi e i campi della riva occidentale di Luxor",
      ru: "Воздушные шары на рассвете над деревнями и полями западного берега Луксора",
      pt: "Balões ao nascer do sol sobre as aldeias e campos da margem oeste de Luxor",
      id: "Balon udara saat matahari terbit di atas desa dan sawah tepi barat Luxor",
      ms: "Belon udara ketika matahari terbit di atas kampung dan sawah tebing barat Luxor",
      ar: "مناطيد عند الشروق فوق قرى وحقول البر الغربي في الأقصر",
    },
    routes: ["when-to-go.html", "ar/afdal-waqt-lizyarat-masr.html", "de/beste-reisezeit-aegypten.html",
      "es/mejor-epoca-para-viajar-a-egipto.html", "fr/quand-partir-en-egypte.html", "id/waktu-terbaik-ke-mesir.html",
      "it/quando-andare-in-egitto.html", "ms/masa-terbaik-ke-mesir.html",
      "pt/melhor-epoca-para-ir-ao-egito.html", "ru/kogda-luchshe-ehat-v-egipet.html"],
  },
  {
    src: img("cairo/cairo-tower-nile-skyline"),
    alt: {
      de: "Der Cairo Tower über dem Nil",
      fr: "La tour du Caire au-dessus du Nil",
      es: "La Torre de El Cairo sobre el Nilo",
      it: "La Torre del Cairo sopra il Nilo",
      ru: "Каирская башня над Нилом",
      pt: "A Torre do Cairo sobre o Nilo",
      id: "Menara Kairo menjulang di atas Sungai Nil",
      ms: "Menara Kaherah menjulang di atas Sungai Nil",
    },
    routes: ["de/weihnachten-in-aegypten.html", "es/navidad-y-fin-de-ano-en-egipto.html",
      "fr/noel-et-nouvel-an-en-egypte.html", "it/natale-e-capodanno-in-egitto.html",
      "pt/natal-e-reveillon-no-egito.html", "ru/novyy-god-v-egipte.html",
      "id/libur-akhir-tahun-ke-mesir.html", "ms/cuti-hujung-tahun-ke-mesir.html"],
  },
  {
    src: img("redsea/sinai-wadi-rock-pool"),
    alt: { id: "Kolam batu di sebuah wadi di Sinai", ms: "Kolam batu di sebuah wadi di Sinai" },
    routes: ["id/gunung-sinai.html", "ms/bukit-tursina.html"],
  },
  {
    src: img("cairo/cairo-al-azhar-mosque-courtyard"),
    alt: { id: "Halaman berarkade Masjid Al-Azhar di Kairo", ms: "Halaman berarked Masjid Al-Azhar di Kaherah" },
    routes: ["id/halal-dan-waktu-salat.html", "ms/halal-dan-waktu-solat.html"],
  },
  {
    src: img("cairo/cairo-sultan-hassan-mosque-aerial"),
    alt: {
      id: "Masjid Sultan Hassan dan Ar-Rifa'i di Kairo, dengan piramida di kejauhan",
      ms: "Masjid Sultan Hassan dan Ar-Rifa'i di Kaherah, dengan piramid di kejauhan",
    },
    routes: ["id/umrah-plus-mesir.html", "ms/umrah-plus-mesir.html"],
  },
  {
    src: img("cairo/cairo-islamic-rooftops-sunset"),
    alt: {
      id: "Kubah dan menara Kairo Islam dalam cahaya senja",
      ms: "Kubah dan menara Kaherah Islam dalam cahaya senja",
    },
    routes: ["id/ziarah-kairo-islam.html", "ms/ziarah-kaherah-islam.html"],
  },
  {
    src: img("cruise/nile-dahabiya-deck"),
    alt: { it: "Il ponte in teak di una nave sul Nilo, apparecchiato per la giornata" },
    routes: ["it/dove-dormire-in-egitto.html"],
  },
  // ---- One-language occasion pages
  { src: img("alexandria/coptic-cathedral-alexandria"), alt: { es: "La catedral copta de San Marcos en Alejandría" }, routes: ["es/semana-santa-en-egipto.html"] },
  { src: img("activities/balloons-luxor-first-light"), alt: { fr: "Des montgolfières s'élèvent dans la première lumière sur la vallée du Nil à Louxor" }, routes: ["fr/toussaint-en-egypte.html"] },
  { src: img("redsea/sharm-naama-bay-aerial"), alt: { it: "Le baie di Sharm el-Sheikh viste dall'alto" }, routes: ["it/ferragosto-in-egitto.html"] },
  { src: img("activities/tanoura-spin"), alt: { pt: "Dançarinos de tanoura girando com saias coloridas e iluminadas" }, routes: ["pt/carnaval-no-egito.html"] },
  // ---- The months
  { src: img("luxor/luxor-temple-colonnade"), alt: { en: "The colonnade of Luxor Temple with its royal statues" }, routes: ["when-to-go/january.html"] },
  { src: img("stock/abu-simbel-both-temples"), alt: { en: "The two rock-cut temples of Abu Simbel: the Great Temple beyond, the Temple of Nefertari in front" }, routes: ["when-to-go/february.html"] },
  { src: img("activities/balloons-over-luxor"), alt: { en: "A fleet of hot-air balloons rising over the Nile valley and temples of Luxor at dawn" }, routes: ["when-to-go/march.html"] },
  { src: img("fayoum/fayoum-wadi-rayan"), alt: { en: "A desert lake under a wide sky at Wadi El Rayan in the Fayoum" }, routes: ["when-to-go/april.html"] },
  { src: img("redsea/red-sea-beach-resort-palms"), alt: { en: "Palm-lined Red Sea resort beach" }, routes: ["when-to-go/may.html"] },
  { src: img("redsea/hurghada-island-jetty"), alt: { en: "A jetty reaching over turquoise water to an island near Hurghada" }, routes: ["when-to-go/june.html"] },
  { src: img("alexandria/alexandria-corniche-bay"), alt: { en: "Alexandria's corniche curving around the bay, seen from above" }, routes: ["when-to-go/july.html"] },
  { src: img("redsea/red-sea-blue-hole"), alt: { en: "The Blue Hole at Dahab seen from above, its reef dropping into deep blue" }, routes: ["when-to-go/august.html"] },
  { src: img("redsea/hurghada-beach-boats"), alt: { en: "Boats on turquoise water off a Hurghada beach" }, routes: ["when-to-go/september.html"] },
  { src: img("stock/abu-simbel-nefertari-temple"), alt: { en: "The facade of the Temple of Nefertari and Hathor at Abu Simbel" }, routes: ["when-to-go/october.html"] },
  { src: img("activities/act-felucca-sunset"), alt: { en: "A lateen-sailed felucca drifting past palms on the Nile at sunset" }, routes: ["when-to-go/november.html"] },
  { src: img("cruise/nile-cruise-night"), alt: { en: "A Nile cruise ship illuminated on the river after dark" }, routes: ["when-to-go/december.html"] },
  // ---- The comparisons
  { src: img("aswan/aswan-high-dam"), alt: { en: "The Aswan High Dam holding back Lake Nasser" }, routes: ["compare.html"] },
  { src: img("cruise/nile-cruise-ship"), alt: { en: "A Nile cruise ship moored on the river" }, routes: ["compare/dahabiya-vs-cruise-ship.html"] },
  { src: img("stock/egyptian-museum-menkaure-triad"), alt: { en: "A triad statue of King Menkaure with the goddess Hathor in the Egyptian Museum, Cairo" }, routes: ["compare/egyptian-museum-vs-grand-egyptian-museum.html"] },
  { src: img("stock/cairo-airport-aircraft-stand"), alt: { en: "A jet at its stand at Cairo airport, the steps already in place" }, routes: ["compare/fly-or-sleeper-train.html"] },
  { src: img("aswan/aswan-nubian-decorated-boats"), alt: { en: "Brightly decorated Nubian boats moored on the Nile at Aswan" }, routes: ["compare/luxor-vs-aswan.html"] },
  { src: img("cruise/nile-cruise-golden"), alt: { en: "A Nile cruise ship reflected in the river at golden hour" }, routes: ["compare/nile-cruise-vs-land-tour.html"] },
  { src: img("redsea/hurghada-beach-umbrellas"), alt: { en: "Palms and beach umbrellas on the Red Sea at Hurghada" }, routes: ["compare/sharm-el-sheikh-vs-hurghada.html"] },
  // ---- The occasions
  { src: img("cruise/nile-dahabiya-deck"), alt: { en: "The teak sun-deck of a Nile cruise vessel set for the day" }, routes: ["occasions.html"] },
  { src: img("activities/felucca-golden-hour"), alt: { en: "A felucca silhouetted on the Nile as the sun sets over the water" }, routes: ["occasions/proposal-in-egypt.html"] },
  { src: img("redsea/sharm-farsha-cafe-sunset"), alt: { en: "A beach café at sunset on the Sharm El Sheikh coast" }, routes: ["occasions/anniversary-in-egypt.html"] },
  { src: img("activities/camel-caravan-giza"), alt: { en: "Riders on camels crossing the sand before the pyramids of Giza" }, routes: ["occasions/private-group-egypt.html"] },
  { src: img("fayoum/fayoum-desert-camp"), alt: { en: "Travellers around a campfire in the Fayoum desert at dusk" }, routes: ["occasions/returning-to-egypt.html"] },
  { src: img("fayoum/fayoum-waterwheels"), alt: { en: "Traditional wooden waterwheels of the Fayoum" }, routes: ["occasions/three-generations-egypt.html"] },
  // ---- The hubs
  { src: img("activities/act-quad-biking"), alt: { en: "Guests quad biking across desert dunes near the Giza pyramids" }, routes: ["activities.html"] },
  { src: img("activities/balloons-luxor-silhouettes-dawn"), alt: { en: "Balloons in silhouette as the sun clears the horizon over Luxor" }, routes: ["collections.html"] },
  { src: img("alexandria/alexandria-bibliotheca"), alt: { en: "The disc of the Bibliotheca Alexandrina on the waterfront" }, routes: ["guides.html"] },
  { src: img("giza/giza-sphinx-and-pyramid"), alt: { en: "A pyramid of Giza beyond weathered limestone blocks" }, routes: ["faq.html"] },
];

/** Pages that keep the generic card on purpose. */
const GENERIC = ["404.html", "privacy.html", "terms.html", "sitemap.html"];

const BY_ROUTE = new Map<string, { src: string; alt: string } | null>();
for (const c of CHOICES) {
  for (const r of c.routes) {
    if (BY_ROUTE.has(r)) throw new Error(`sharePhotos: ${r} is chosen twice`);
    const alt = c.alt[localeOfRoute(r)];
    if (!alt) throw new Error(`sharePhotos: no ${localeOfRoute(r)} alt for ${r}`);
    BY_ROUTE.set(r, { src: c.src, alt });
  }
}
for (const r of GENERIC) BY_ROUTE.set(r, null);

/**
 * The hand-chosen share photograph for a route: an entry, `null` for the
 * generic card on purpose, or undefined when the page's own photo is used.
 */
export function chosenSharePhoto(route: string): { src: string; alt: string } | null | undefined {
  return BY_ROUTE.get(route);
}
