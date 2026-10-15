// ---------------------------------------------------------------------------
// Perjalanan dalam bahasa Melayu.
//
// Ditulis untuk pembaca Malaysia, bukan diterjemah perkataan demi perkataan
// daripada bahasa Inggeris. Baris yang berulang ada dalam phrasebook.ts.
// ---------------------------------------------------------------------------
import type { TourText } from "./types";

export const ms: TourText[] = [
  // ===== Cairo Authentic Food ===========================================
  {
    slug: "tour-cairo-food",
    localeSlug: "jelajah-makanan-malam-di-kaherah",
    metaTitle: "Jelajah Makanan Malam di Kaherah, Persendirian | Kemet",
    metaDescription: "Semalam menjelajah rasa Kaherah: koshari, ful dan ta'meya, hawawshi dan merpati panggang, kunafa dan basbousa, diakhiri di ahwa tradisional.",
    keywords: "jelajah makanan kaherah, makanan jalanan kaherah, koshari, makanan mesir, lawatan malam kaherah",
    crumb: "Jelajah makanan malam",
    title: "Kaherah, Melalui Rasanya",
    subtitle: "Semalam berjalan kaki menyusuri rasa Kaherah — koshari, makanan jalanan klasik, burung merpati panggang dan manisan bersirap.",
    durationLabel: "Malam (lebih kurang 4 jam)",
    startPoint: "Hotel di Kaherah",
    summary: "Merasa hidangan paling digemari di Kaherah bersama pemandu, pada waktu malam — koshari, ful dan ta'meya, hawawshi dan burung merpati panggang, kunafa dan basbousa, diakhiri di ahwa tradisional.",
    overview: "Ibu kota Mesir paling seronok diterokai dengan berjalan kaki selepas matahari terbenam. Malam berpemandu ini membawa anda menyusuri hidangan yang menjadi rutin harian Kaherah — koshari, simfoni karbohidrat yang mengenyangkan; ful dan ta'meya yang dimakan pada bila-bila masa; hawawshi berinti daging dan burung merpati panggang; lalu pencuci mulut kunafa dan basbousa. Anda mengakhiri malam seperti penduduk Kaherah: dengan teh pudina dan shisha di sebuah ahwa, kedai kopi tradisional. Selingan santai yang penuh rasa di celah-celah lawatan ke monumen.",
    itinerary: [
      {
        title: "Koshari",
        text: "Bermula dengan hidangan kebangsaan Mesir — koshari, lapisan nasi, kacang dal, pasta dan kacang kuda yang mengenyangkan, di bawah bawang goreng rangup dan sos tomato yang masam segar.",
        photos: [{ alt: "Semangkuk koshari dengan sos tomato, bawang goreng dan pasli", label: "Koshari" }],
      },
      {
        title: "Ful dan ta'meya",
        text: "Rasai ful medames, kacang fava yang dimasak perlahan dan dimakan dari pagi hingga malam, bersama ta'meya, falafel versi Mesir daripada kacang fava yang digoreng sebaik dipesan.",
        photos: [{ alt: "Semangkuk ful medames dengan tomato dan herba, limau dan segelas teh", label: "Ful medames" }, { alt: "Ta'meya bersalut bijan di atas pinggan, dengan bungkusan adunan hijau kacang fava dan herba di belakangnya", label: "Ta'meya" }],
      },
      {
        title: "Hawawshi dan burung merpati panggang",
        text: "Seterusnya, kemuncak hidangan berlauk malam ini — hawawshi, daging cincang berempah yang dibakar di dalam roti rangup, dan hamam mahshi, burung merpati panggang berinti nasi berempah.",
        photos: [{ alt: "Hawawshi terbelah yang menampakkan daging cincang berempah, dengan jeruk di sebelahnya", label: "Hawawshi" }, { alt: "Dua ekor burung merpati panggang berinti nasi (hamam mahshi) di atas sayur hijau", label: "Merpati berinti" }],
      },
      {
        title: "Kunafa dan basbousa",
        text: "Tiba masa pencuci mulut: kunafa suam dengan adunan berserat di atas keju manis, dan potongan basbousa, kek semolina yang direndam sirap.",
        photos: [{ alt: "Kunafa bertabur pistachio, sepotong diangkat menampakkan keju yang cair", label: "Kunafa" }, { alt: "Potongan basbousa, setiap satu dengan sebiji badam", label: "Basbousa" }],
      },
      {
        title: "Ahwa tradisional",
        text: "Malam berakhir di sebuah ahwa di lorong kecil, dengan teh pudina, kopi Turki dan dengung kota — beginilah sepatutnya setiap malam di Kaherah berakhir.",
        photos: [{ alt: "Dua gelas teh di atas meja sebuah kedai kopi tradisional yang dindingnya dipenuhi gambar-gambar lama berbingkai", label: "Di ahwa" }],
      },
    ],
    faqs: [
      { q: "Adakah makanan termasuk dalam harga?", a: "Tidak. Harga merangkumi pemandu makanan peribadi anda, laluan dan pemindahan. Makanan dan minuman dibayar terus di setiap hentian — pemandu yang membuat pesanan dan boleh memberitahu harga setiap hidangan." },
      { q: "Adakah makanan selamat untuk pelancong?", a: "Ya — kami memilih premis yang sibuk dan dipercayai dengan pusingan bahan yang tinggi, dan pemandu yang membuat pesanan. Air botol disediakan sepanjang malam." },
      { q: "Bolehkah keperluan pemakanan diraikan?", a: "Vegetarian dilayan dengan baik — koshari, ful, ta'meya dan manisannya semuanya tanpa daging. Maklumkan kepada kami tentang alahan lebih awal dan kami akan menyesuaikan laluan." },
      { q: "Adakah saya akan terlalu kenyang?", a: "Anda sendiri yang menentukan berapa banyak untuk dipesan di setiap hentian, dan dengan berkongsi pinggan anda boleh merasa pelbagai hidangan tanpa berlebihan. Datanglah dalam keadaan lapar, tanpa bimbang." },
    ],
  },
];
