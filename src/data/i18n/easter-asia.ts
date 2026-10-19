// ---------------------------------------------------------------------------
// Easter in Egypt — the Indonesian and Malay editions.
//
// The English original is collections/easter-in-egypt.html (collections.ts →
// easter-in-egypt), and every fact here is a fact there: two Easters in most
// years (the Western date, and the Coptic Orthodox date Egypt itself keeps),
// Holy Week in Cairo with palm weaving on Palm Sunday and a Saturday-night
// liturgy that ends after midnight, a 55-day fast broken at home, Sham
// El-Nessim on the Monday after as a national holiday for everyone, the
// khamaseen, and Western Easter week as peak season.
//
// EVERY DATE IS COMPUTED, NONE IS TYPED. They come from data/easter.ts and are
// formatted in id-ID or ms-MY, so the pages roll to the next season by
// themselves. EASTER.same switches the wording in the years both Easters fall
// on one day (2028, 2031); month names are read from the computed dates, and
// temperatures from the month guide for the month the date actually lands in.
// Good Friday is Western Easter minus two days.
//
// WHAT THESE EDITIONS ADD FOR THEIR READERS. Indonesia: Jumat Agung is a
// national holiday, so Western Easter is a long weekend. Malaysia: Good Friday
// is a public holiday in Sabah and Sarawak only. Both: church groups that
// cross Egypt on a Holy Land pilgrimage (Sinai and St Catherine's, the Holy
// Family sites of Old Cairo), and Muslim readers who know Sham El-Nessim as
// the national spring holiday — and kahk as the Eid biscuit. "Holy Land", not
// "Tanah Suci", which both markets read as Mecca and Medina.
//
// WORDING. The Malay edition says "Easter", as the slug does, with "Paskah" in
// the keywords; Sunday is "Ahad" and the Easter liturgy is "the night before
// Easter Sunday" (Malay "malam Sabtu" would be Friday night). The guide is
// "Egyptologist" throughout and never bare "pemandu", which a Malaysian reads
// as driver; neither language marks the guide's gender.
//
// Standalone pages: the English original is a collection with its own
// template, so these cannot form a translation group (see standalone.ts).
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import type { MediaPlaceholder } from "@/types/primitives";
import { EASTER, EASTER_Y, fmtDay, fmtDayMonth } from "@/data/easter";
import { findMonth } from "@/data/months";

/** The English original, linked from both editions' "more" line. */
const EN_PAGE = "collections/easter-in-egypt.html";
/** The only CC0 photograph, so the one the pages are shared with. */
const SHARE_PHOTO = "/images/stock/sham-el-nessim-coloured-eggs.webp";

const Y = EASTER_Y;
const DAY = 86_400_000;
/** An ISO day moved by `n` days. */
const shift = (iso: string, n: number) =>
  new Date(new Date(`${iso}T12:00:00Z`).getTime() + n * DAY).toISOString().slice(0, 10);
/** Western Good Friday — Jumat Agung, Jumaat Agung. */
const GOOD_FRIDAY = shift(EASTER.western, -2);

/** The month-guide entry for the month an ISO day falls in. */
const monthOf = (iso: string) => findMonth(fmtDay(iso, "en-US", { month: "long" }).toLowerCase())!;
const W_MONTH = monthOf(EASTER.western);
const O_MONTH = monthOf(EASTER.orthodox);
const SAME_MONTH = W_MONTH.slug === O_MONTH.slug;
const mar = findMonth("march")!;
const apr = findMonth("april")!;

/** The same six photographs on both editions, described in each language. */
const PHOTOS = [
  { src: "/images/stock/hanging-church-cairo-interior.webp", width: 900, height: 679 },
  { src: "/images/stock/palm-sunday-woven-palm-crosses.webp", width: 1024, height: 865 },
  { src: "/images/stock/coptic-church-iconostasis-old-cairo.webp", width: 768, height: 920 },
  { src: "/images/stock/coptic-cairo-abu-serga-church.webp", width: 1024, height: 769 },
  { src: SHARE_PHOTO, width: 1024, height: 683 },
  { src: "/images/stock/kahk-easter-biscuits.webp", width: 1024, height: 640 },
];
function photos(alt: string[], label: string[]): MediaPlaceholder[] {
  return PHOTOS.map((p, i) => ({ ...p, alt: alt[i], label: label[i] }));
}

// ── Indonesian ──────────────────────────────────────────────────────────────
const idD = (iso: string) => fmtDayMonth(iso, "id-ID");
const idDY = (iso: string) => fmtDay(iso, "id-ID");
const idMonth = (iso: string) => fmtDay(iso, "id-ID", { month: "long" });

const idWeather = [
  "Akhir Maret dan April adalah pekan-pekan terakhir yang nyaman di Lembah Nil. Mulai April, Luxor dan Aswan makin panas, jadi kami menjadwalkan Lembah Para Raja saat baru dibuka dan mengosongkan sore hari; Kairo lebih nyaman.",
  SAME_MONTH
    ? `Pada bulan ${idMonth(EASTER.orthodox)}, ${EASTER.same ? "saat Paskah" : "saat kedua Paskah"}, Luxor ${O_MONTH.temps.luxor} dan Kairo ${O_MONTH.temps.cairo}.`
    : `Saat Paskah Barat, pada bulan ${idMonth(EASTER.western)}, Luxor ${W_MONTH.temps.luxor} dan Kairo ${W_MONTH.temps.cairo}; saat Paskah Koptik, pada bulan ${idMonth(EASTER.orthodox)}, Luxor ${O_MONTH.temps.luxor} dan Kairo ${O_MONTH.temps.cairo}.`,
  "Khamaseen — angin musim semi yang panas dan berdebu — bisa bertiup sehari atau dua hari antara Maret dan Mei; kami menyisakan setengah hari bebas untuk itu.",
].join(" ");

export const idEaster: LocalizedPage = {
  groupId: "standalone-id-easter",
  symbol: "lotus",
  theme: "easter",
  title: `Paskah di Mesir ${Y}: Paskah Koptik & Pekan Suci | Kemet`,
  description: EASTER.same
    ? `Paskah di Mesir ${Y}: Paskah Barat dan Koptik bersamaan pada ${idD(EASTER.orthodox)}, Sham El-Nessim ${idD(EASTER.sham)}. Pekan Suci di Kairo Lama, cuaca, dan kapan memesan.`
    : `Paskah di Mesir ${Y}: Paskah Barat ${idD(EASTER.western)}, Paskah Koptik ${idD(EASTER.orthodox)}, Sham El-Nessim ${idD(EASTER.sham)}. Pekan Suci di Kairo Lama, cuaca, dan kapan memesan.`,
  keywords:
    `paskah di mesir, paskah di mesir ${Y}, paskah koptik, paskah ortodoks mesir, sham el-nessim, libur jumat agung ke mesir, ziarah holy land mesir, tour holy land mesir, gereja koptik kairo`,
  crumb: "Paskah di Mesir",
  h1: "Paskah di Mesir",
  standfirst: EASTER.same
    ? `Pada ${Y} kedua Paskah jatuh pada hari yang sama, ${idD(EASTER.orthodox)}; sehari sesudahnya Sham El-Nessim, ketika seluruh negeri keluar rumah untuk berpiknik.`
    : `Dua Paskah dalam satu musim semi: Paskah Barat pada ${idD(EASTER.western)}, Paskah Koptik — Paskah milik Mesir sendiri — pada ${idD(EASTER.orthodox)}, dan sehari sesudahnya Sham El-Nessim, ketika seluruh negeri keluar rumah untuk berpiknik.`,
  lede:
    "Paskah adalah waktu yang baik untuk berada di Mesir, karena dua alasan. Yang pertama cuaca: akhir Maret dan April adalah pekan-pekan terakhir yang nyaman di Lembah Nil sebelum panas datang. Yang kedua, Mesir punya Paskahnya sendiri. Gereja Ortodoks Koptik — menurut tradisi didirikan oleh Santo Markus di Alexandria, dan kini komunitas Kristen terbesar di Timur Tengah — merayakan Paskah dengan liturgi yang baru selesai lewat tengah malam, dan pada hari Senin sesudahnya seluruh negeri, Muslim maupun Kristen, keluar rumah untuk Sham El-Nessim. Kami menyusun perjalanan Paskah mengikuti kedua kalender: monumen di pagi hari, gereja-gereja Kairo Lama saat pengunjung disambut, dan akhir pekan panjang ketika orang Mesir sendiri bepergian.",
  facts: EASTER.same
    ? [
        { label: `Paskah ${Y}`, value: `${idD(EASTER.orthodox)} (Barat & Koptik)` },
        { label: "Minggu Palma", value: idD(EASTER.palm) },
        { label: "Sham El-Nessim", value: idD(EASTER.sham) },
        { label: `Luxor pada bulan ${idMonth(EASTER.orthodox)}`, value: O_MONTH.temps.luxor },
      ]
    : [
        { label: `Paskah Barat ${Y}`, value: idD(EASTER.western) },
        { label: "Paskah Koptik", value: idD(EASTER.orthodox) },
        { label: "Sham El-Nessim", value: idD(EASTER.sham) },
        { label: `Luxor pada bulan ${idMonth(EASTER.western)}`, value: W_MONTH.temps.luxor },
      ],
  sections: [
    {
      title: "Dua Paskah",
      body:
        (EASTER.same
          ? `Pada kebanyakan tahun, Mesir merayakan Paskah dua kali, tetapi pada ${Y} keduanya jatuh pada hari yang sama: ${idD(EASTER.orthodox)}. Gereja Katolik dan Protestan — termasuk sebagian besar gereja di Indonesia — dan Gereja Ortodoks Koptik, gereja Mesir sendiri, merayakannya bersama. Paskah Koptik mengikuti perhitungan kalender Julian yang lebih tua, seperti gereja Ortodoks Yunani dan Rusia; pada tahun-tahun lain ia bisa jatuh sampai lima pekan setelah Paskah Barat. Gereja-gereja Katolik dan Anglikan di Kairo juga mengadakan ibadah Paskah.`
          : `Pada kebanyakan tahun, Mesir merayakan Paskah dua kali. Paskah Barat — Paskah gereja Katolik dan Protestan, termasuk sebagian besar gereja di Indonesia — jatuh pada ${idDY(EASTER.western)}. Paskah Ortodoks Koptik, Paskah milik Mesir sendiri, mengikuti perhitungan kalender Julian yang lebih tua, seperti gereja Ortodoks Yunani dan Rusia, dan jatuh pada ${idDY(EASTER.orthodox)}, ${EASTER.gap / 7} pekan kemudian. Selisihnya berubah setiap tahun, sampai lima pekan, dan pada beberapa tahun keduanya jatuh pada hari yang sama. Gereja-gereja Katolik dan Anglikan di Kairo mengadakan ibadah pada Paskah Barat.`) +
        ` Jumat Agung — pada ${Y} jatuh pada ${idD(GOOD_FRIDAY)} — adalah libur nasional di Indonesia, sehingga Paskah Barat menjadi akhir pekan panjang.`,
    },
    {
      title: "Pekan Suci di Kairo",
      body:
        `Pekan Suci Koptik dimulai pada Minggu Palma, ${idD(EASTER.palm)}. Di depan gereja-gereja Kairo, daun palma dianyam menjadi salib, mahkota, cincin, dan keledai kecil untuk anak-anak; keluarga membawanya pulang dan menyimpannya selama setahun. Ibadah digelar setiap hari sepanjang pekan. Liturgi Paskah berlangsung pada Sabtu malam, berjam-jam lamanya, dan berakhir lewat tengah malam dengan dentang lonceng. Liturgi itu menutup puasa 55 hari — sekitar delapan pekan — dan keluarga pulang untuk kembali menyantap daging, telur, dan keju. Mereka juga memanggang kahk dan biskuit, kue hari raya yang sama dengan saat Idulfitri. Salam hari itu: «Al-Masih qam!» — «Bil-haqiqa qam!», Kristus telah bangkit — Ia sungguh telah bangkit. Di Kairo Lama, Gereja Gantung (Hanging Church) dan Gereja Abu Serga, tempat Keluarga Kudus menurut tradisi pernah berlindung, penuh sesak pada malam Paskah.`,
    },
    {
      title: "Sham El-Nessim",
      body:
        `Senin setelah Paskah Koptik — pada ${Y} jatuh pada ${idD(EASTER.sham)} — adalah Sham El-Nessim, libur nasional untuk semua orang, Muslim maupun Kristen. Ini perayaan musim semi yang berakar pada Mesir kuno, lebih tua daripada kedua agama itu, dan pembaca yang pernah tinggal atau belajar di Mesir tentu mengenalnya. Keluarga menghabiskan hari di luar rumah: di tepi Sungai Nil, di taman, dan di sepanjang tepi laut (corniche) Alexandria. Hidangannya telur berwarna, daun bawang, selada, kacang lupin (termis), dan fesikh — ikan belanak asin yang rasanya tidak cocok untuk semua lidah. Taman-taman kota sangat padat, jadi kami menyusun hari itu di sekitar sungai: felucca, atau pulau taman di Sungai Nil.`,
    },
    {
      title: "Cuaca, keramaian, dan pemesanan",
      body:
        `${idWeather} Pekan Paskah Barat adalah musim puncak di Mesir: kabin terbaik di kapal Sungai Nil, kamar dengan pemandangan piramida Giza, dan penerbangan ke Abu Simbel habis berbulan-bulan sebelumnya — pesanlah tiga sampai enam bulan di muka. Sekitar Paskah Koptik dan Sham El-Nessim, Alexandria, Laut Merah, dan Sinai dipenuhi keluarga Mesir, dan kereta penuh. Monumen dan museum tetap buka.`,
    },
    {
      title: "Ziarah Holy Land lewat Mesir",
      body:
        "Banyak rombongan Kristen dari Indonesia menempuh ziarah Holy Land melalui Mesir. Bagian Mesir mencakup Gunung Sinai dan Biara Santa Katarina di kakinya, serta situs-situs Keluarga Kudus di Kairo Lama, seperti Gereja Abu Serga. Kami menyusun bagian itu khusus untuk rombongan Anda: Egyptologist berlisensi dari tim kami sendiri yang memandu dalam bahasa Indonesia, kendaraan khusus rombongan, dan jadwal yang mengikuti rute yang sudah Anda pegang. Biara Santa Katarina adalah biara Ortodoks Yunani yang merayakan Paskah Ortodoks dan tutup untuk pengunjung pada beberapa hari raya; kami memastikan jam bukanya untuk tanggal Anda.",
    },
  ],
  photos: photos(
    [
      "Ruang utama Gereja Gantung di Kairo Koptik, dengan langit-langit kayu, lampu gantung, dan mimbar marmer",
      "Salib dari anyaman daun palma untuk Minggu Palma, di atas nampan perak",
      "Deretan ikon di atas sekat kayu bertatah (ikonostasis) di Gereja Santa Barbara, Kairo Lama",
      "Salib Koptik terukir di dinding bata Gereja Abu Serga, Kairo Lama, di bawah jendela berkisi",
      "Telur berwarna untuk Paskah dan Sham El-Nessim",
      "Kahk bertabur gula halus dan biskuit, kue hari raya untuk Paskah dan Idulfitri",
    ],
    ["Gereja Gantung", "Minggu Palma", "Santa Barbara, Kairo Lama", "Abu Serga", "Telur berwarna", "Kahk"],
  ),
  sharePhoto: SHARE_PHOTO,
  highlights: {
    heading: "Sekilas",
    items: [
      EASTER.same
        ? `Paskah ${Y}: Barat dan Koptik bersamaan pada ${idD(EASTER.orthodox)}; Sham El-Nessim ${idD(EASTER.sham)}`
        : `Paskah Barat ${idD(EASTER.western)}, Paskah Koptik ${idD(EASTER.orthodox)}, Sham El-Nessim ${idD(EASTER.sham)}`,
      "Minggu Palma di Kairo: salib dan mahkota dari anyaman daun palma di depan gereja",
      "Liturgi Paskah Sabtu malam di Kairo Lama, berakhir lewat tengah malam dengan dentang lonceng",
      "Sham El-Nessim: seluruh Mesir berpiknik di luar rumah, dengan telur berwarna dan tradisi dari zaman Mesir kuno",
      "Gunung Sinai, Biara Santa Katarina, dan situs Keluarga Kudus untuk rombongan ziarah",
    ],
  },
  faqs: [
    {
      q: `Kapan Paskah di Mesir pada ${Y}?`,
      a: EASTER.same
        ? `Pada ${Y} kedua Paskah jatuh pada hari yang sama, ${idD(EASTER.orthodox)}: gereja Katolik dan Protestan merayakannya bersama Gereja Ortodoks Koptik, gereja Mesir sendiri. Minggu Palma Koptik jatuh pada ${idD(EASTER.palm)}, dan Sham El-Nessim, libur musim semi nasional, pada ${idD(EASTER.sham)}. Jumat Agung, libur nasional di Indonesia, jatuh pada ${idD(GOOD_FRIDAY)}.`
        : `Ada dua tanggal. Paskah Barat, yang dirayakan gereja Katolik dan Protestan, jatuh pada ${idDY(EASTER.western)} — Jumat Agung, libur nasional di Indonesia, pada ${idD(GOOD_FRIDAY)}. Paskah Ortodoks Koptik, Paskah yang dirayakan Mesir, jatuh pada ${idDY(EASTER.orthodox)}, didahului Minggu Palma pada ${idD(EASTER.palm)}. Sham El-Nessim, libur musim semi nasional, menyusul pada ${idD(EASTER.sham)}.`,
    },
    {
      q: "Apa itu Paskah Koptik?",
      a: "Paskah Gereja Ortodoks Koptik, gereja kuno Mesir dan komunitas Kristen terbesar di Timur Tengah. Paskah ini mengikuti perhitungan kalender Julian yang lebih tua, seperti gereja Ortodoks Yunani dan Rusia, sehingga jatuh sampai lima pekan setelah Paskah Barat, dan pada beberapa tahun di hari yang sama. Paskah ini menutup puasa 55 hari dan Pekan Suci yang diisi ibadah setiap hari; liturgi Paskahnya digelar pada Sabtu malam.",
    },
    {
      q: "Apakah Paskah hari libur di Mesir?",
      a: "Sham El-Nessim, Senin setelah Paskah Koptik, adalah libur nasional untuk semua orang. Minggu Paskah Koptik dirayakan umat Kristen Mesir, sedangkan Minggu dan Senin Paskah Barat adalah hari kerja biasa. Monumen dan museum tetap buka sepanjang waktu.",
    },
    {
      q: "Bolehkah wisatawan mengikuti ibadah Paskah di Kairo?",
      a: "Boleh. Gereja Koptik menyambut pengunjung yang sopan, dan gereja Katolik serta Anglikan di Kairo mengadakan ibadah Paskah Barat. Kenakan pakaian yang menutup bahu dan lutut — selendang tipis berguna — berdirilah di bagian belakang selama ibadah, dan mintalah izin sebelum memotret. Keluar dengan tenang di tengah liturgi yang panjang tidak masalah. Bila Anda ingin mengikuti liturgi Paskah, beri tahu kami: kami akan menyarankan gereja mana dan kapan sebaiknya tiba.",
    },
    {
      q: "Apakah Paskah waktu yang baik ke Mesir?",
      a: `Salah satu yang terbaik. Akhir Maret dan April adalah pekan-pekan terakhir yang nyaman di Lembah Nil: Kairo ${mar.temps.cairo} pada bulan Maret dan ${apr.temps.cairo} pada bulan April, Luxor ${mar.temps.luxor} pada bulan Maret. Yang perlu diperhitungkan adalah keramaian dan harga pada pekan Paskah Barat, serta arus libur orang Mesir sekitar Sham El-Nessim: pesan lebih awal, dan kunjungi Mesir Hulu pada pagi hari.`,
    },
    {
      q: "Bisakah Mesir digabung dengan ziarah Holy Land?",
      a: "Bisa. Kami menyusun bagian Mesir dari ziarah Anda — Gunung Sinai dan Biara Santa Katarina, serta Gereja Abu Serga dan Gereja Gantung di Kairo Lama — dengan Egyptologist berlisensi dari tim kami sendiri yang memandu dalam bahasa Indonesia. Karena Biara Santa Katarina tutup untuk pengunjung pada beberapa hari raya, kami memastikan jam bukanya untuk tanggal Anda.",
    },
  ],
  cta: {
    heading: "Paskah Anda di Mesir",
    text: "Beri tahu kami tanggal, jumlah peserta, dan apakah Anda ingin mengikuti liturgi Paskah atau menggabungkan perjalanan dengan ziarah Holy Land. Kami menyusunnya mengikuti kedua kalender.",
    whatsapp: `Halo Kemet — kami ingin ke Mesir saat Paskah ${Y}.`,
    emailSubject: `Paskah ${Y} di Mesir — pertanyaan`,
  },
  moreLabel: "Dalam bahasa Inggris",
  moreRoute: EN_PAGE,
  moreText: "Halaman kami tentang Paskah di Mesir, dalam bahasa Inggris, dengan tanggal untuk lima tahun ke depan.",
  links: [
    { label: "Gunung Sinai dan Biara Santa Katarina", route: "id/gunung-sinai.html" },
    { label: "Waktu terbaik ke Mesir", route: "id/waktu-terbaik-ke-mesir.html" },
    { label: "Pesiar Sungai Nil", route: "id/pesiar-sungai-nil.html" },
  ],
};

// ── Malay ───────────────────────────────────────────────────────────────────
const msD = (iso: string) => fmtDayMonth(iso, "ms-MY");
const msDY = (iso: string) => fmtDay(iso, "ms-MY");
const msMonth = (iso: string) => fmtDay(iso, "ms-MY", { month: "long" });

const msWeather = [
  "Akhir Mac dan April ialah minggu-minggu terakhir yang selesa di Lembah Nil. Mulai April, Luxor dan Aswan semakin panas, jadi kami menjadualkan Lembah Raja-Raja sebaik sahaja dibuka dan mengosongkan waktu petang; Kaherah lebih selesa.",
  SAME_MONTH
    ? `Pada bulan ${msMonth(EASTER.orthodox)}, ${EASTER.same ? "ketika Easter" : "ketika kedua-dua Easter"}, Luxor ${O_MONTH.temps.luxor} dan Kaherah ${O_MONTH.temps.cairo}.`
    : `Ketika Easter Barat, pada bulan ${msMonth(EASTER.western)}, Luxor ${W_MONTH.temps.luxor} dan Kaherah ${W_MONTH.temps.cairo}; ketika Easter Koptik, pada bulan ${msMonth(EASTER.orthodox)}, Luxor ${O_MONTH.temps.luxor} dan Kaherah ${O_MONTH.temps.cairo}.`,
  "Khamaseen — angin musim bunga yang panas dan berdebu — boleh bertiup sehari dua antara Mac dan Mei; kami menyimpan setengah hari lapang untuknya.",
].join(" ");

export const msEaster: LocalizedPage = {
  groupId: "standalone-ms-easter",
  symbol: "lotus",
  theme: "easter",
  title: `Easter di Mesir ${Y}: Easter Koptik & Minggu Suci | Kemet`,
  description: EASTER.same
    ? `Easter di Mesir ${Y}: Easter Barat dan Koptik serentak pada ${msD(EASTER.orthodox)}, Sham El-Nessim ${msD(EASTER.sham)}. Minggu Suci di Kaherah Lama, cuaca dan bila perlu menempah.`
    : `Easter di Mesir ${Y}: Easter Barat ${msD(EASTER.western)}, Easter Koptik ${msD(EASTER.orthodox)}, Sham El-Nessim ${msD(EASTER.sham)}. Minggu Suci di Kaherah Lama, cuaca dan bila perlu menempah.`,
  keywords:
    `easter di mesir, easter di mesir ${Y}, paskah di mesir, easter koptik, sham el-nessim, cuti jumaat agung ke mesir, ziarah holy land mesir, lawatan holy land mesir, gereja koptik kaherah`,
  crumb: "Easter di Mesir",
  h1: "Easter di Mesir",
  standfirst: EASTER.same
    ? `Pada ${Y} kedua-dua Easter jatuh pada hari yang sama, ${msD(EASTER.orthodox)}; keesokan harinya Sham El-Nessim, apabila seluruh negara keluar berkelah.`
    : `Dua Easter dalam satu musim bunga: Easter Barat pada ${msD(EASTER.western)}, Easter Koptik — Easter Mesir sendiri — pada ${msD(EASTER.orthodox)}, dan keesokan harinya Sham El-Nessim, apabila seluruh negara keluar berkelah.`,
  lede:
    "Easter (Paskah) ialah masa yang baik untuk berada di Mesir, atas dua sebab. Pertama, cuaca: akhir Mac dan April ialah minggu-minggu terakhir yang selesa di Lembah Nil sebelum panas tiba. Kedua, Mesir mempunyai Easter tersendiri. Gereja Ortodoks Koptik — menurut tradisi diasaskan oleh Santo Markus di Alexandria, dan kini komuniti Kristian terbesar di Timur Tengah — menyambut Easter dengan liturgi yang berakhir selepas tengah malam, dan pada hari Isnin selepasnya seluruh negara, Muslim dan Kristian, keluar berkelah sempena Sham El-Nessim. Kami merancang percutian Easter mengikut kedua-dua kalendar: monumen pada waktu pagi, gereja-gereja Kaherah Lama ketika pengunjung dialu-alukan, dan cuti panjang ketika rakyat Mesir sendiri turut bercuti.",
  facts: EASTER.same
    ? [
        { label: `Easter ${Y}`, value: `${msD(EASTER.orthodox)} (Barat & Koptik)` },
        { label: "Ahad Palma", value: msD(EASTER.palm) },
        { label: "Sham El-Nessim", value: msD(EASTER.sham) },
        { label: `Luxor pada bulan ${msMonth(EASTER.orthodox)}`, value: O_MONTH.temps.luxor },
      ]
    : [
        { label: `Easter Barat ${Y}`, value: msD(EASTER.western) },
        { label: "Easter Koptik", value: msD(EASTER.orthodox) },
        { label: "Sham El-Nessim", value: msD(EASTER.sham) },
        { label: `Luxor pada bulan ${msMonth(EASTER.western)}`, value: W_MONTH.temps.luxor },
      ],
  sections: [
    {
      title: "Dua Easter",
      body:
        (EASTER.same
          ? `Pada kebanyakan tahun, Mesir menyambut Easter dua kali, tetapi pada ${Y} kedua-duanya jatuh pada hari yang sama: ${msD(EASTER.orthodox)}. Gereja Katolik dan Protestan — termasuk kebanyakan gereja di Malaysia — dan Gereja Ortodoks Koptik, gereja Mesir sendiri, menyambutnya serentak. Easter Koptik mengikut kiraan kalendar Julian yang lebih tua, seperti gereja Ortodoks Yunani dan Rusia; pada tahun-tahun lain ia boleh jatuh sehingga lima minggu selepas Easter Barat. Gereja-gereja Katolik dan Anglikan di Kaherah turut mengadakan upacara Easter.`
          : `Pada kebanyakan tahun, Mesir menyambut Easter dua kali. Easter Barat — Easter gereja Katolik dan Protestan, termasuk kebanyakan gereja di Malaysia — jatuh pada ${msDY(EASTER.western)}. Easter Ortodoks Koptik, Easter Mesir sendiri, mengikut kiraan kalendar Julian yang lebih tua, seperti gereja Ortodoks Yunani dan Rusia, dan jatuh pada ${msDY(EASTER.orthodox)}, ${EASTER.gap / 7} minggu kemudian. Jaraknya berubah setiap tahun, sehingga lima minggu, dan pada sesetengah tahun kedua-duanya jatuh pada hari yang sama. Gereja-gereja Katolik dan Anglikan di Kaherah mengadakan upacara pada Easter Barat.`) +
        ` Jumaat Agung — pada ${Y} jatuh pada ${msD(GOOD_FRIDAY)} — ialah cuti umum di Sabah dan Sarawak sahaja, dan di sana Easter menjadi hujung minggu panjang.`,
    },
    {
      title: "Minggu Suci di Kaherah",
      body:
        `Minggu Suci Koptik bermula pada Ahad Palma, ${msD(EASTER.palm)}. Di luar gereja-gereja Kaherah, daun palma dianyam menjadi salib, mahkota, cincin dan keldai kecil untuk kanak-kanak; keluarga membawanya pulang dan menyimpannya selama setahun. Upacara diadakan setiap hari sepanjang minggu itu. Liturgi Easter diadakan pada malam sebelum Ahad Easter, berlangsung berjam-jam dan berakhir selepas tengah malam dengan bunyi loceng. Ia menamatkan puasa selama 55 hari — kira-kira lapan minggu — dan keluarga pulang untuk makan daging, telur dan keju semula. Mereka juga membakar kahk dan biskut, kuih raya yang sama seperti ketika Aidilfitri. Ucapan hari itu: «Al-Masih qam!» — «Bil-haqiqa qam!», Kristus telah bangkit — Dia sungguh telah bangkit. Di Kaherah Lama, Gereja Tergantung (Hanging Church) dan Gereja Abu Serga, tempat Keluarga Kudus menurut tradisi pernah berlindung, penuh sesak pada malam Easter.`,
    },
    {
      title: "Sham El-Nessim",
      body:
        `Isnin selepas Easter Koptik — pada ${Y} jatuh pada ${msD(EASTER.sham)} — ialah Sham El-Nessim, cuti umum untuk semua, Muslim dan Kristian. Ia perayaan musim bunga yang berakar pada zaman Mesir purba, lebih tua daripada kedua-dua agama itu, dan pembaca yang pernah tinggal atau belajar di Mesir tentu mengenalinya. Keluarga menghabiskan hari di luar rumah: di tebing Sungai Nil, di taman-taman, dan di sepanjang persisiran pantai (corniche) Alexandria. Juadahnya telur berwarna, daun bawang, daun salad, kacang lupin (termis) dan fesikh — ikan belanak masin yang bukan untuk semua tekak. Taman-taman bandar sangat sesak, jadi kami merancang hari itu di sekitar sungai: felucca, atau pulau taman di Sungai Nil.`,
    },
    {
      title: "Cuaca, kesesakan dan tempahan",
      body:
        `${msWeather} Minggu Easter Barat ialah musim puncak di Mesir: kabin terbaik di kapal Sungai Nil, bilik menghadap piramid Giza dan penerbangan ke Abu Simbel habis ditempah berbulan-bulan lebih awal — tempahlah tiga hingga enam bulan lebih awal. Sekitar Easter Koptik dan Sham El-Nessim, Alexandria, Laut Merah dan Sinai dipenuhi keluarga Mesir, dan kereta api penuh. Monumen dan muzium tetap dibuka.`,
    },
    {
      title: "Ziarah Holy Land melalui Mesir",
      body:
        "Ramai rombongan gereja dari Malaysia, termasuk dari Sabah dan Sarawak, menyertai ziarah Holy Land yang melalui Mesir. Bahagian Mesir merangkumi Bukit Tursina (Gunung Sinai) dan Biara Saint Catherine di kakinya, serta tapak-tapak Keluarga Kudus di Kaherah Lama, seperti Gereja Abu Serga. Kami menyusun bahagian itu khas untuk rombongan anda: Egyptologist berlesen daripada pasukan kami sendiri yang berbahasa Melayu, kenderaan sendiri, dan jadual yang mengikut laluan yang sudah anda tetapkan. Biara Saint Catherine ialah biara Ortodoks Yunani yang menyambut Easter Ortodoks dan ditutup kepada pengunjung pada sesetengah hari perayaan; kami mengesahkan waktu bukanya untuk tarikh anda.",
    },
  ],
  photos: photos(
    [
      "Ruang tengah Gereja Tergantung di Kaherah Koptik, dengan siling kayu, candelier dan mimbar marmar",
      "Salib daripada anyaman daun palma untuk Ahad Palma, di atas dulang perak",
      "Deretan ikon di atas skrin kayu bertatah (ikonostasis) di Gereja Santa Barbara, Kaherah Lama",
      "Salib Koptik terukir pada dinding bata Gereja Abu Serga, Kaherah Lama, di bawah tingkap berkisi",
      "Telur berwarna untuk Easter dan Sham El-Nessim",
      "Kahk bertabur gula aising dan biskut, kuih yang dibakar untuk Easter dan Aidilfitri",
    ],
    ["Gereja Tergantung", "Ahad Palma", "Santa Barbara, Kaherah Lama", "Abu Serga", "Telur berwarna", "Kahk"],
  ),
  sharePhoto: SHARE_PHOTO,
  highlights: {
    heading: "Sepintas lalu",
    items: [
      EASTER.same
        ? `Easter ${Y}: Barat dan Koptik serentak pada ${msD(EASTER.orthodox)}; Sham El-Nessim ${msD(EASTER.sham)}`
        : `Easter Barat ${msD(EASTER.western)}, Easter Koptik ${msD(EASTER.orthodox)}, Sham El-Nessim ${msD(EASTER.sham)}`,
      "Ahad Palma di Kaherah: salib dan mahkota daripada anyaman daun palma di luar gereja",
      "Liturgi Easter di Kaherah Lama, berakhir selepas tengah malam dengan bunyi loceng",
      "Sham El-Nessim: seluruh Mesir berkelah di luar rumah, dengan telur berwarna dan tradisi sejak zaman Mesir purba",
      "Bukit Tursina, Biara Saint Catherine dan tapak Keluarga Kudus untuk rombongan ziarah",
    ],
  },
  faqs: [
    {
      q: `Bilakah Easter di Mesir pada ${Y}?`,
      a: EASTER.same
        ? `Pada ${Y} kedua-dua Easter jatuh pada hari yang sama, ${msD(EASTER.orthodox)}: gereja Katolik dan Protestan menyambutnya serentak dengan Gereja Ortodoks Koptik, gereja Mesir sendiri. Ahad Palma Koptik jatuh pada ${msD(EASTER.palm)}, dan Sham El-Nessim, cuti umum musim bunga, pada ${msD(EASTER.sham)}. Jumaat Agung, cuti umum di Sabah dan Sarawak, jatuh pada ${msD(GOOD_FRIDAY)}.`
        : `Ada dua tarikh. Easter Barat, yang disambut gereja Katolik dan Protestan, jatuh pada ${msDY(EASTER.western)} — Jumaat Agung, cuti umum di Sabah dan Sarawak, pada ${msD(GOOD_FRIDAY)}. Easter Ortodoks Koptik, Easter yang disambut Mesir, jatuh pada ${msDY(EASTER.orthodox)}, didahului Ahad Palma pada ${msD(EASTER.palm)}. Sham El-Nessim, cuti umum musim bunga, menyusul pada ${msD(EASTER.sham)}.`,
    },
    {
      q: "Apakah Easter Koptik?",
      a: "Easter Gereja Ortodoks Koptik, gereja purba Mesir dan komuniti Kristian terbesar di Timur Tengah. Ia mengikut kiraan kalendar Julian yang lebih tua, seperti gereja Ortodoks Yunani dan Rusia, jadi ia jatuh sehingga lima minggu selepas Easter Barat, dan pada sesetengah tahun pada hari yang sama. Ia menamatkan puasa 55 hari dan Minggu Suci yang diisi upacara setiap hari; liturgi Easter diadakan pada malam sebelum Ahad Easter.",
    },
    {
      q: "Adakah Easter cuti umum di Mesir?",
      a: "Sham El-Nessim, Isnin selepas Easter Koptik, ialah cuti umum untuk semua. Ahad Easter Koptik disambut oleh penganut Kristian Mesir, manakala Ahad dan Isnin Easter Barat ialah hari bekerja biasa. Monumen dan muzium tetap dibuka sepanjang masa.",
    },
    {
      q: "Bolehkah pelancong menghadiri upacara Easter di Kaherah?",
      a: "Boleh. Gereja Koptik mengalu-alukan pengunjung yang menghormati upacara, dan gereja Katolik serta Anglikan di Kaherah mengadakan upacara Easter Barat. Pakai pakaian yang menutup bahu dan lutut — selendang nipis berguna — berdiri di bahagian belakang semasa upacara, dan minta izin sebelum mengambil gambar. Keluar dengan senyap di tengah-tengah liturgi yang panjang tidak menjadi masalah. Jika anda ingin menghadiri liturgi Easter, beritahu kami: kami akan mencadangkan gereja yang sesuai dan masa untuk tiba.",
    },
    {
      q: "Adakah Easter masa yang baik untuk ke Mesir?",
      a: `Antara yang terbaik. Akhir Mac dan April ialah minggu-minggu terakhir yang selesa di Lembah Nil: Kaherah ${mar.temps.cairo} pada bulan Mac dan ${apr.temps.cairo} pada bulan April, Luxor ${mar.temps.luxor} pada bulan Mac. Yang perlu diambil kira ialah kesesakan dan harga pada minggu Easter Barat, serta musim cuti rakyat Mesir sekitar Sham El-Nessim: tempah awal, dan lawati selatan pada waktu pagi.`,
    },
    {
      q: "Bolehkah Mesir digabungkan dengan ziarah Holy Land?",
      a: "Boleh. Kami menyusun bahagian Mesir dalam ziarah anda — Bukit Tursina dan Biara Saint Catherine, serta Gereja Abu Serga dan Gereja Tergantung di Kaherah Lama — dengan Egyptologist berlesen daripada pasukan kami sendiri yang berbahasa Melayu. Oleh sebab Biara Saint Catherine ditutup kepada pengunjung pada sesetengah hari perayaan, kami mengesahkan waktu bukanya untuk tarikh anda.",
    },
  ],
  cta: {
    heading: "Easter anda di Mesir",
    text: "Beritahu kami tarikh, bilangan peserta, dan sama ada anda ingin menghadiri liturgi Easter atau menggabungkan perjalanan dengan ziarah Holy Land. Kami merancangnya mengikut kedua-dua kalendar.",
    whatsapp: `Salam Kemet — kami ingin ke Mesir semasa Easter ${Y}.`,
    emailSubject: `Easter ${Y} di Mesir — pertanyaan`,
  },
  moreLabel: "Dalam bahasa Inggeris",
  moreRoute: EN_PAGE,
  moreText: "Halaman kami tentang Easter di Mesir, dalam bahasa Inggeris, dengan tarikh untuk lima tahun akan datang.",
  links: [
    { label: "Bukit Tursina dan Biara Saint Catherine", route: "ms/bukit-tursina.html" },
    { label: "Masa terbaik ke Mesir", route: "ms/masa-terbaik-ke-mesir.html" },
    { label: "Pelayaran Sungai Nil", route: "ms/pelayaran-sungai-nil.html" },
  ],
};
