// ---------------------------------------------------------------------------
// Perjalanan dalam bahasa Indonesia.
//
// Ditulis untuk pembaca Indonesia, bukan diterjemahkan kata demi kata dari
// bahasa Inggris. Baris yang berulang ada di phrasebook.ts.
// ---------------------------------------------------------------------------
import type { TourText } from "./types";

export const id: TourText[] = [
  // ===== Cairo Authentic Food ===========================================
  {
    slug: "tour-cairo-food",
    localeSlug: "wisata-kuliner-malam-di-kairo",
    metaTitle: "Wisata Kuliner Malam di Kairo, Privat | Kemet",
    metaDescription: "Semalam menjelajahi rasa Kairo: koshari, ful dan ta'meya, hawawshi dan merpati panggang, kunafa dan basbousa, ditutup di ahwa tradisional.",
    keywords: "wisata kuliner kairo, makanan jalanan kairo, koshari, makanan mesir, tur malam kairo",
    crumb: "Wisata kuliner malam",
    title: "Kairo, dari Rasanya",
    subtitle: "Semalam berjalan kaki menyusuri rasa Kairo — koshari, jajanan jalanan klasik, merpati panggang, dan manisan bersirup.",
    durationLabel: "Malam (sekitar 4 jam)",
    startPoint: "Hotel di Kairo",
    summary: "Mencicipi hidangan paling dicintai di Kairo bersama pemandu, pada malam hari — koshari, ful dan ta'meya, hawawshi dan merpati panggang, kunafa dan basbousa, ditutup di ahwa tradisional.",
    overview: "Ibu kota Mesir paling nikmat dijelajahi dengan berjalan kaki setelah matahari terbenam. Malam bersama pemandu ini membawa Anda menyusuri hidangan yang menjadi keseharian Kairo — koshari, simfoni karbohidrat yang mengenyangkan; ful dan ta'meya yang disantap kapan saja; hawawshi berisi daging dan merpati panggang; lalu penutup manis kunafa dan basbousa. Anda mengakhiri malam seperti warga Kairo: dengan teh mint dan shisha di sebuah ahwa, kedai kopi tradisional. Selingan santai yang penuh rasa di antara kunjungan ke monumen.",
    itinerary: [
      {
        title: "Koshari",
        text: "Dimulai dengan hidangan nasional Mesir — koshari, lapisan nasi, kacang lentil, pasta, dan buncis yang mengenyangkan, di bawah bawang goreng renyah dan saus tomat yang segar asam.",
        photos: [{ alt: "Koshari: saus tomat dituang ke atas pasta, kacang lentil, buncis, dan bawang goreng", label: "Koshari" }],
      },
      {
        title: "Ful dan ta'meya",
        text: "Cicipi ful medames, kacang fava yang dimasak perlahan dan disantap dari pagi hingga malam, bersama ta'meya, falafel khas Mesir dari kacang fava yang digoreng saat dipesan.",
        photos: [{ alt: "Semangkuk ful medames dengan tomat dan daun herba, jeruk lemon, dan segelas teh", label: "Ful medames" }, { alt: "Ta'meya berbalut wijen di piring, dengan kantong-kantong adonan hijau dari kacang fava dan herba di belakangnya", label: "Ta'meya" }],
      },
      {
        title: "Hawawshi dan merpati panggang",
        text: "Berlanjut ke inti hidangan gurih malam ini — hawawshi, daging cincang berbumbu yang dipanggang di dalam roti renyah, dan hamam mahshi, merpati panggang berisi nasi berbumbu.",
        photos: [{ alt: "Hawawshi terbelah yang memperlihatkan daging cincang berbumbu, dengan acar di sampingnya", label: "Hawawshi" }, { alt: "Dua merpati panggang isi nasi (hamam mahshi) di atas sayuran hijau", label: "Merpati isi" }],
      },
      {
        title: "Kunafa dan basbousa",
        text: "Saatnya hidangan penutup: kunafa hangat dengan adonan serat di atas keju manis, dan potongan basbousa, kue semolina yang direndam sirup.",
        photos: [{ alt: "Kunafa bertabur pistachio, sepotong diangkat memperlihatkan keju yang meleleh", label: "Kunafa" }, { alt: "Potongan basbousa, masing-masing dengan sebutir almond", label: "Basbousa" }],
      },
      {
        title: "Ahwa tradisional",
        text: "Malam ditutup di sebuah ahwa di gang kecil, dengan teh mint, kopi Turki, dan riuh rendah kota — begitulah seharusnya setiap malam di Kairo berakhir.",
        photos: [{ alt: "Dua gelas teh di meja sebuah kedai kopi tradisional yang dindingnya penuh foto-foto lama berbingkai", label: "Di ahwa" }],
      },
    ],
    faqs: [
      { q: "Apakah makanan sudah termasuk dalam harga?", a: "Tidak. Harga mencakup pemandu kuliner pribadi, rute, dan transfer. Makanan dan minuman dibayar langsung di setiap persinggahan — pemandu yang memesan dan bisa memberi tahu harga setiap hidangan." },
      { q: "Apakah makanannya aman bagi wisatawan?", a: "Ya — kami memilih tempat yang ramai dan tepercaya dengan perputaran tinggi, dan pemandu yang memesan. Air mineral tersedia sepanjang malam." },
      { q: "Apakah bisa menyesuaikan kebutuhan makanan?", a: "Vegetarian sangat terlayani — koshari, ful, ta'meya, dan manisannya semua tanpa daging. Beri tahu kami soal alergi sebelumnya dan kami akan menyesuaikan rutenya." },
      { q: "Apakah saya akan terlalu kenyang?", a: "Anda sendiri yang menentukan berapa banyak memesan di setiap persinggahan, dan dengan berbagi piring Anda bisa mencicipi banyak hal tanpa berlebihan. Datanglah dengan perut lapar, tanpa khawatir." },
    ],
  },
];
