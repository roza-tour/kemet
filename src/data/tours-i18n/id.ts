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
  // ===== Egypt Icons & Nile Cruise =====
  {
    slug: "tour-10-day",
    localeSlug: "tour-mesir-10-hari-pesiar-nil",
    metaTitle: "Tour Mesir 10 Hari dengan Pesiar Sungai Nil | Kemet",
    metaDescription: "Sepuluh hari serba privat: Kairo, Alexandria, kereta tidur ke Aswan, dan tiga malam pesiar Nil menuju Luxor, bersama Egyptologist Anda sendiri.",
    keywords: "tour mesir 10 hari, paket tour mesir dengan pesiar nil, tour privat mesir, kairo luxor aswan, liburan ke mesir 10 hari",
    crumb: "Ikon Mesir & pesiar Nil",
    title: "Ikon Mesir & Pesiar Sungai Nil",
    subtitle: "Sepuluh hari tanpa terburu-buru, dari Piramida Giza hingga kuil-kuil Mesir Hulu, dirangkai oleh tiga malam pesiar di Sungai Nil.",
    durationLabel: "10 Hari / 9 Malam",
    startPoint: "Kairo (bandara atau hotel)",
    summary: "Perjalanan unggulan kami: Kairo, Alexandria, kereta tidur ke selatan, dan tiga malam pesiar Nil dari Aswan ke Luxor — seluruh lapisan Mesir dalam satu alur.",
    overview: "Inilah Mesir secara utuh, dengan ritme untuk dinikmati, bukan sekadar dicentang. Anda memulai di Kairo dengan harta karun Museum Mesir, menghabiskan sehari di tepi Laut Mediterania di Alexandria, lalu naik kereta tidur ke selatan menuju Aswan. Dari sana, pesiar tiga malam membawa Anda menghilir Sungai Nil melewati Kom Ombo dan Edfu hingga Luxor, tempat kuil-kuil Karnak dan makam-makam kerajaan di Tepi Barat menanti. Anda kembali ke Kairo untuk Piramida Giza dan lorong-lorong tua Kairo Islam yang dimakan usia. Seluruh perjalanan bersifat privat, dipandu Egyptologist Anda sendiri.",
    itinerary: [
      {
        title: "Kairo & Museum Mesir",
        items: [
          "Penyambutan privat di Bandara Internasional Kairo",
          "Transfer ke hotel dan pengarahan singkat sebagai sambutan",
          "Sore di Museum Mesir di Tahrir — emas kerajaan dari Tanis dan mahakarya Kerajaan Lama",
        ],
      },
      {
        title: "Alexandria di tepi Mediterania",
        items: [
          "Perjalanan darat ke Alexandria melalui jalan gurun",
          "Katakombe Kom El Shoqafa dan Pilar Pompey",
          "Benteng Qaitbay di bekas lokasi Mercusuar Pharos dan Bibliotheca Alexandrina yang modern",
          "Makan siang hidangan laut di tepi pantai sebelum kembali ke Kairo",
        ],
      },
      {
        title: "Kairo Koptik & kereta malam ke Aswan",
        items: [
          "Gereja Gantung, Gereja Abu Serga, dan lorong-lorong Kairo Lama",
          "Transfer ke stasiun menjelang malam",
          "Naik kereta tidur ke selatan menuju Aswan, dengan kabin privat dan makan malam di kereta",
        ],
      },
      {
        title: "Aswan & naik kapal",
        items: [
          "Tiba di Aswan, lalu mengunjungi Bendungan Tinggi dan Obelisk yang Belum Selesai",
          "Menyeberang dengan perahu motor ke Kuil Philae di pulaunya, yang dipersembahkan bagi Isis",
          "Naik ke kapal pesiar Nil Anda dan bersantap siang di atas sungai",
        ],
      },
      {
        title: "Berlayar ke Kom Ombo & Edfu",
        items: [
          "Pagi berlayar ke hilir menyusuri Lembah Nil",
          "Kom Ombo, kuil kembar bagi Sobek dan Horus Tua",
          "Berlanjut ke Edfu dan Kuil Horus yang agung, kuil paling utuh di Mesir",
        ],
      },
      {
        title: "Pintu air Esna & tiba di Luxor",
        items: [
          "Melewati pintu air Esna saat lembah mulai melebar",
          "Tiba di Luxor pada sore hari, dengan waktu untuk beristirahat di kapal",
          "Pilihan malam pertunjukan Suara dan Cahaya di Karnak (biaya tambahan)",
        ],
      },
      {
        title: "Tepi Timur Luxor",
        items: [
          "Karnak, kompleks kuil terbesar di dunia kuno",
          "Kuil Luxor di jantung kota",
          "Turun dari kapal dan transfer ke hotel Anda di Luxor",
        ],
      },
      {
        title: "Tepi Barat & kereta ke Kairo",
        items: [
          "Lembah Para Raja dan perbukitan Thebes yang penuh makam berlukis",
          "Kuil Pemakaman Hatshepsut dan Kolosus Memnon",
          "Kereta tidur malam kembali ke Kairo",
        ],
      },
      {
        title: "Giza & Saqqara",
        items: [
          "Piramida Khufu, Khafre, dan Menkaure, serta Sphinx Agung",
          "Titik pandang panorama di atas plateau Giza",
          "Piramida Bertingkat Djoser di Saqqara, monumen batu tertua di dunia",
        ],
      },
      {
        title: "Kairo Islam & keberangkatan",
        items: [
          "Benteng Salahuddin dan Masjid Muhammad Ali yang berlapis alabaster",
          "Pasar Khan el-Khalili untuk berjalan-jalan sekali lagi",
          "Transfer privat ke bandara untuk penerbangan pulang Anda",
        ],
      },
    ],
    comfort: {
      sleep: "Hotel di Kairo dan Luxor, tiga malam di kapal pesiar Nil, dan dua malam di kereta tidur — diganti hotel pada versi dengan pesawat",
      drives: "Perjalanan sehari dari Kairo ke Alexandria pulang-pergi lewat jalan darat",
    },
    faqs: [
      { q: "Apakah pesiar Nil-nya privat?", a: "Anda bepergian dengan Egyptologist dan transfer privat Anda sendiri, tetapi kapal pesiarnya dipakai bersama tamu lain. Kabinnya privat, dan semua kunjungan wisata dijalankan sebagai rombongan privat." },
      { q: "Seperti apa perjalanan dengan kereta malam?", a: "Anda menempati kabin tidur privat, dengan makan malam dan sarapan disajikan di kereta. Cara ini menghemat satu transfer di siang hari, dan Anda tiba dalam keadaan segar untuk kunjungan pagi." },
      { q: "Bisakah Abu Simbel ditambahkan?", a: "Bisa. Abu Simbel tersedia sebagai tambahan opsional dari Aswan, dengan penerbangan singkat atau mobil pribadi, dan paling baik ditambahkan pada hari di Aswan. Kami mengaturnya atas permintaan." },
      { q: "Kapan waktu terbaik untuk berkunjung?", a: "Oktober hingga April membawa suhu yang nyaman, baik di Kairo maupun di Mesir Hulu. Musim panas terasa terik di selatan, jadi kami berangkat pagi-pagi dan beristirahat pada siang hari." },
    ],
  },

  // ===== The Grand Tour of Egypt =====
  {
    slug: "tour-grand-14day",
    localeSlug: "tour-mesir-14-hari-laut-merah",
    metaTitle: "Tur Akbar Mesir 14 Hari dengan Laut Merah | Kemet",
    metaDescription: "Empat belas hari privat: Kairo, Alexandria, pesiar Nil, kuil Ramses II di Abu Simbel, dan tiga malam di Laut Merah. Semua penerbangan domestik termasuk.",
    keywords: "tour mesir 14 hari, paket tour mesir lengkap, tour mesir dan laut merah, tour abu simbel, pesiar nil aswan luxor",
    crumb: "Tur akbar, 14 hari",
    title: "Tur Akbar Mesir",
    subtitle: "Empat belas hari, seluruh wajah negeri ini — Kairo, Alexandria, Sungai Nil dengan kapal pesiar, Abu Simbel, dan Laut Merah sebagai penutup.",
    durationLabel: "14 Hari / 13 Malam",
    startPoint: "Kairo (bandara atau hotel)",
    summary: "Perjalanan kami yang paling lengkap: Kairo dan Alexandria, pesiar Nil, kuil Ramses II yang dipahat di gunung di Abu Simbel, dan tiga malam di Laut Merah untuk meresapi semuanya.",
    overview: "Inilah rencana perjalanan bagi mereka yang berniat datang sekali dan melihat semuanya. Sepuluh hari pertama milik sejarah: Piramida dan Grand Egyptian Museum, kawasan abad pertengahan dan Koptik di Kairo, Alexandria di tepi Mediterania, lalu terbang ke selatan untuk Abu Simbel — kuil Ramses II yang dipahat di gunung, di atas Danau Nasser — sebelum pesiar tiga malam membawa Anda menghilir Sungai Nil dari Aswan ke Luxor. Empat hari terakhir berganti nada sepenuhnya: setelah makam dan kuil Luxor, Anda terbang ke Sharm El Sheikh, tempat gurun bertemu sebagian perairan paling jernih di bumi. Tiga malam di Laut Merah menutup perjalanan dengan snorkeling di atas terumbu karang Ras Mohammed, tanpa satu pun agenda yang tak bisa dibatalkan demi kolam renang. Semua penerbangan domestik sudah termasuk; setiap hari berpemandu bersifat privat.",
    itinerary: [
      {
        title: "Tiba di Kairo",
        items: [
          "Penyambutan privat di bandara dan transfer ke hotel Anda",
          "Orientasi malam hari bersama perencana perjalanan Anda",
        ],
      },
      {
        title: "Giza & Grand Egyptian Museum",
        items: [
          "Piramida, titik panorama, dan Sphinx di pagi yang sejuk",
          "Seluruh harta karun Tutankhamun di GEM",
        ],
      },
      {
        title: "Kairo Islam & Koptik",
        items: [
          "Benteng Salahuddin dan Masjid Muhammad Ali yang berlapis alabaster",
          "Gereja Gantung dan lorong-lorong Kairo Lama",
          "Khan el-Khalili saat senja",
        ],
      },
      {
        title: "Sehari di Alexandria",
        items: [
          "Katakombe Kom El Shoqafa dan Pilar Pompey",
          "Benteng Qaitbay di bekas lokasi Mercusuar Pharos",
          "Makan siang hidangan laut di tepi laut (corniche); kembali ke Kairo",
        ],
      },
      {
        title: "Terbang ke selatan — Aswan",
        items: [
          "Penerbangan pagi ke Aswan",
          "Philae dengan perahu motor dan Obelisk yang Belum Selesai",
          "Malam bebas di corniche",
        ],
      },
      {
        title: "Abu Simbel",
        items: [
          "Perjalanan darat saat fajar menuju Abu Simbel",
          "Kuil Agung Ramses II dan Kuil Nefertari",
          "Kembali ke Aswan; felucca pada jam keemasan",
        ],
      },
      {
        title: "Naik kapal pesiar Nil",
        items: [
          "Pagi bebas; naik kapal sebelum makan siang",
          "Sore hari kapal mulai berlayar menyusuri sungai",
        ],
      },
      {
        title: "Kom Ombo & Edfu",
        items: [
          "Kuil kembar Sobek dan Horus Tua",
          "Edfu — kuil paling utuh di Mesir",
        ],
      },
      {
        title: "Tiba di Luxor",
        items: [
          "Melewati pintu air Esna menuju Thebes",
          "Kuil Luxor bermandi cahaya pada malam hari (opsional)",
        ],
      },
      {
        title: "Luxor — kedua tepi sungai",
        items: [
          "Karnak bersama Egyptologist Anda saat gerbang dibuka",
          "Lembah Para Raja dan kuil Hatshepsut",
          "Turun dari kapal menuju hotel Anda di Luxor",
        ],
      },
      {
        title: "Terbang ke Laut Merah",
        items: [
          "Penerbangan pagi ke Sharm El Sheikh",
          "Check-in; jadwal sengaja berakhir di sini",
        ],
      },
      {
        title: "Terumbu karang Ras Mohammed",
        items: [
          "Sehari berperahu di taman nasional — dua titik snorkeling di atas dinding karang",
          "Makan siang di geladak kapal",
        ],
      },
      {
        title: "Bersantai di Laut Merah",
        items: [
          "Hari bebas — menyelam, spa, atau sekadar laut",
          "Makan malam perpisahan di Old Market, Sharm",
        ],
      },
      {
        title: "Keberangkatan",
        items: [
          "Terbang ke Kairo untuk penerbangan internasional lanjutan Anda",
        ],
      },
    ],
    comfort: {
      sleep: "Hotel di Kairo dan Aswan, tiga malam di kapal pesiar Nil, hotel di Luxor, lalu resor di Laut Merah",
      drives: "Perjalanan sehari ke Alexandria, serta Aswan ke Abu Simbel pulang-pergi lewat jalan darat",
      early: "Perjalanan darat sebelum fajar menuju Abu Simbel",
    },
    faqs: [
      { q: "Apakah empat belas hari terlalu lama untuk kunjungan pertama?", a: "Itulah lama yang dibutuhkan Mesir untuk dilihat secara utuh, bukan sekadar dicicipi. Hari-hari di Laut Merah pada akhir perjalanan itulah yang membuat sepekan penuh sejarah tetap terasa ringan — perjalanan ini bernapas, bukan menumpuk lelah." },
      { q: "Berapa banyak penerbangan dalam perjalanan ini?", a: "Tiga penerbangan domestik, masing-masing sekitar satu jam, menggantikan perjalanan darat atau kereta yang bila tidak demikian akan memakan dua belas jam. Dua perjalanan panjang tetap lewat darat: perjalanan sehari ke Alexandria, serta Aswan ke Abu Simbel pulang-pergi — yang kedua justru menjadi bagian dari pengalaman itu sendiri, melintasi gurun terbuka saat fajar." },
      { q: "Bisakah bagian Laut Merah diganti atau diperpanjang?", a: "Tentu, sebebas yang Anda mau. Sebagian tamu menukarnya dengan malam tambahan di Luxor atau dengan Siwa; yang lain memperpanjang Sharm menjadi sepekan penuh. Sepuluh hari pertama adalah tulang punggungnya, dan babak terakhirnya Anda sendiri yang membentuk." },
    ],
  },

  // ===== Honeymoon on the Nile =====
  {
    slug: "tour-honeymoon-9day",
    localeSlug: "bulan-madu-mesir-9-hari",
    metaTitle: "Bulan Madu di Mesir 9 Hari dengan Pesiar Nil | Kemet",
    metaDescription: "Sembilan hari untuk berdua: matahari terbit privat di Giza, felucca di Aswan pada jam keemasan, tiga malam pesiar Nil, dan suite yang dipilih demi pemandangan.",
    keywords: "bulan madu ke mesir, paket honeymoon mesir, bulan madu sungai nil, honeymoon mesir 9 hari, pesiar nil bulan madu",
    crumb: "Bulan madu, 9 hari",
    title: "Bulan Madu di Sungai Nil",
    subtitle: "Sembilan hari yang dirancang untuk berdua — ikon-ikon Kairo, pesiar tiga malam, pulau-pulau Aswan, dan senja keemasan yang panjang tanpa perlu terburu-buru ke mana pun.",
    durationLabel: "9 Hari / 8 Malam",
    startPoint: "Kairo (bandara atau hotel)",
    summary: "Mesir sebagaimana bulan madu seharusnya — matahari terbit privat di piramida, felucca pada jam keemasan, tiga malam di Sungai Nil, dan suite yang dipilih karena pemandangannya.",
    overview: "Rencana bulan madu bukanlah rencana perjalanan biasa yang ditaburi kelopak mawar. Ritmenya berbeda: mulai lebih siang, malam lebih panjang, satu momen istimewa sehari, bukan empat. Perjalanan ini dibuka di Kairo dengan matahari terbit di Giza lewat akses awal privat sebelum plateau dibuka, lalu Grand Egyptian Museum dengan ritme Anda sendiri. Anda terbang ke selatan ke Aswan — kota paling lembut dan paling romantis di tepi sungai — untuk felucca privat pada jam keemasan dan makan malam menghadap jeram Sungai Nil. Pesiar tiga malam membawa Anda ke Luxor melewati Kom Ombo dan Edfu, dengan balon udara saat fajar di atas perbukitan Thebes sebagai gambaran penutup. Hotel dan kabin dipilih dengan pemandangan Sungai Nil di sepanjang perjalanan, dan setiap pemandu tahu bahwa ini bulan madu, bukan perjalanan maraton.",
    itinerary: [
      {
        title: "Tiba di Kairo",
        items: [
          "Penyambutan privat di bandara dan transfer ke suite dengan pemandangan Sungai Nil",
          "Malam bebas — rekomendasi makan malam dari perencana perjalanan Anda",
        ],
      },
      {
        title: "Matahari terbit di Giza & museum",
        items: [
          "Matahari terbit di titik pandang sembilan piramida, lalu akses awal ke plateau sebelum dibuka untuk umum",
          "Sarapan agak siang, lalu Grand Egyptian Museum dengan ritme Anda sendiri",
          "Istirahat siang; malamnya bersantai dengan minuman di atas felucca di Sungai Nil, Kairo",
        ],
      },
      {
        title: "Terbang ke Aswan",
        items: [
          "Penerbangan pagi ke selatan",
          "Philae — kuil pulau milik Isis, dewi cinta, dengan perahu motor",
          "Felucca saat matahari terbenam di antara pulau-pulau granit; makan malam di teras Nubia",
        ],
      },
      {
        title: "Aswan & naik kapal",
        items: [
          "Pagi yang santai — pulau botani atau pasar (souk), sesuai pilihan Anda",
          "Naik kapal pesiar Nil sebelum makan siang",
          "Sore hari kapal mulai berlayar, dinikmati dari geladak atas",
        ],
      },
      {
        title: "Kom Ombo & Edfu",
        items: [
          "Kuil kembar Kom Ombo dalam cahaya pagi",
          "Kuil Horus di Edfu pada sore hari",
          "Makan malam di kapal saat kapal bersandar untuk bermalam",
        ],
      },
      {
        title: "Pintu air Esna & tiba di Luxor",
        items: [
          "Sehari di atas air — hari bulan madu untuk tidak melakukan apa-apa, dengan indahnya",
          "Tiba di Luxor pada malam hari; Kuil Luxor bermandi cahaya, bila Anda mau",
        ],
      },
      {
        title: "Balon udara & Tepi Barat",
        items: [
          "Balon udara saat fajar di atas Tepi Barat Luxor, bila Anda menambahkannya (tergantung cuaca)",
          "Lembah Para Raja dan kuil Hatshepsut bersama Egyptologist Anda",
          "Turun dari kapal menuju hotel di Luxor untuk malam-malam terakhir",
        ],
      },
      {
        title: "Karnak & sehari untuk berdua",
        items: [
          "Karnak dalam keheningan pagi buta",
          "Sore sepenuhnya bebas — kolam renang, spa, atau museum",
          "Makan malam perpisahan yang diatur perencana perjalanan Anda",
        ],
      },
      {
        title: "Terbang ke Kairo & pulang",
        items: [
          "Penerbangan pagi ke Kairo untuk penerbangan internasional lanjutan Anda",
        ],
      },
    ],
    comfort: {
      sleep: "Suite dengan pemandangan Sungai Nil di Kairo, hotel di Aswan, tiga malam di kapal pesiar Nil, lalu hotel di Luxor",
      early: "Matahari terbit di Giza, balon udara saat fajar di atas Tepi Barat Luxor, dan Karnak di pagi buta",
    },
    faqs: [
      { q: "Apa bedanya dengan perjalanan Ikon Mesir 10 hari?", a: "Rutenya bersinggungan; ritmenya tidak. Rencana ini menukar Alexandria dan kereta tidur dengan penerbangan, suite dengan pemandangan Sungai Nil, pagi yang lebih santai, dan malam-malam yang disisihkan. Semuanya disusun di sekitar waktu berdua, bukan banyaknya tempat yang dikunjungi." },
      { q: "Bisakah Anda menyiapkan kejutan — bunga, makan malam privat, lamaran?", a: "Bisa, dengan diskret, dan sering kami lakukan. Ceritakan rencana Anda kepada perencana perjalanan Anda, dan kami yang menata semuanya; lamaran di kuil butuh sedikit koreografi sebelumnya, dan kami tahu persis di mana sudut-sudut yang sepi." },
      { q: "Apakah aman menyertakan penerbangan balon udara?", a: "Balon udara di Luxor dioperasikan oleh operator berlisensi di bawah pengawasan otoritas penerbangan sipil, hanya terbang saat fajar dalam kondisi tenang, dan dibatalkan tanpa ragu bila berangin. Kami memesan tanggal yang fleksibel agar pagi yang batal bisa dipindah ke hari berikutnya." },
    ],
  },

  // ===== Egypt Through the Lens =====
  {
    slug: "tour-photography-7day",
    localeSlug: "tour-fotografi-mesir-7-hari",
    metaTitle: "Tour Fotografi Mesir 7 Hari, Mengikuti Cahaya | Kemet",
    metaDescription: "Tujuh hari yang dijadwalkan menurut cahaya: Giza saat matahari terbit, Karnak sebelum keramaian, kuil saat blue hour, dan felucca Aswan pada jam keemasan.",
    keywords: "tour fotografi mesir, perjalanan fotografi mesir, hunting foto mesir, foto piramida giza, tour mesir 7 hari",
    crumb: "Fotografi, 7 hari",
    title: "Mesir di Balik Lensa",
    subtitle: "Tujuh hari yang dijadwalkan menurut cahaya, bukan jam buka — plateau saat fajar, kuil saat blue hour, dan Sungai Nil pada jam keemasan.",
    durationLabel: "7 Hari / 6 Malam",
    startPoint: "Kairo (bandara atau hotel)",
    summary: "Rencana perjalanan yang disusun mundur dari cahaya: akses awal ke Giza saat matahari terbit, Karnak sebelum keramaian, pilihan balon udara di atas Thebes, dan felucca pada jam keemasan.",
    overview: "Sebagian besar rencana perjalanan di Mesir membawa Anda ke situs-situs besar pada tengah hari yang datar dan padat — jam-jam terburuk yang pernah dilihat sebuah kamera. Perjalanan ini membalik logika itu. Setiap hari dijadwalkan menurut cahaya pertama dan terakhir: akses awal privat ke Giza sebelum plateau dibuka, aula hipostil Karnak dalam sinar pagi yang rendah dan menyapu relief hingga tampak timbul, Jalan Sphinx yang bermandi cahaya saat blue hour, serta layar-layar segitiga Aswan yang tersorot cahaya dari belakang pada jam keemasan. Pemandu Anda memahami fotografer — artinya tahu kapan berbicara, kapan membawa izin tripod, dan kapan cukup membiarkan Anda sendirian dengan pemandangan di depan Anda. Pasangan yang tidak memotret pun akan menikmati perjalanan ini; cahaya yang memanjakan sensor sama memanjakannya bagi kenangan.",
    itinerary: [
      {
        title: "Tiba di Kairo & pengarahan",
        items: [
          "Transfer privat dan pengarahan rute pada malam hari bersama pemandu Anda",
          "Pemeriksaan perlengkapan — izin tripod diurus di tempat yang mewajibkannya",
        ],
      },
      {
        title: "Giza dalam cahaya pertama",
        items: [
          "Matahari terbit di titik pandang sembilan piramida — dengan waktu untuk memotret — lalu plateau sebelum dibuka",
          "Menjelang siang: titik panorama dan sudut-sudut di kawasan Sphinx",
          "Jeda siang untuk menyunting foto; lanskap kota saat blue hour dari Taman Al-Azhar",
        ],
      },
      {
        title: "Kairo Islam — jalan & lentera",
        items: [
          "Berjalan menyusuri Jalan Al-Muizz pada jam keemasan saat lentera mulai menyala",
          "Lorong-lorong Khan el-Khalili — orang-orang, tembaga, dan berkas-berkas cahaya",
          "Terbang ke Luxor pada malam hari",
        ],
      },
      {
        title: "Balon udara & Tepi Barat",
        items: [
          "Balon udara saat fajar di atas nekropolis Thebes, bila Anda menambahkannya (tergantung cuaca)",
          "Interior makam di Lembah Para Raja — teknik genggam di tempat tripod dilarang",
          "Teras-teras Hatshepsut dalam cahaya samping menjelang sore",
        ],
      },
      {
        title: "Karnak & Kuil Luxor di malam hari",
        items: [
          "Karnak saat dibuka — satu jam sebelum bus-bus wisata tiba",
          "Sore di sungai: nelayan, felucca, dan pantulan di air",
          "Jalan Sphinx dan Kuil Luxor bermandi lampu sorot saat blue hour",
        ],
      },
      {
        title: "Aswan — layar & granit",
        items: [
          "Perjalanan darat pagi ke selatan (singgah di Edfu atas permintaan)",
          "Philae dengan perahu motor — kuil yang muncul dari air",
          "Sewa felucca pada jam keemasan di antara pulau-pulau di jeram Sungai Nil",
        ],
      },
      {
        title: "Warna Nubia & keberangkatan",
        items: [
          "Cahaya pagi di sebuah desa Nubia yang dicat warna-warni",
          "Terbang ke Kairo untuk penerbangan lanjutan Anda",
        ],
      },
    ],
    comfort: {
      sleep: "Hotel di Kairo, Luxor, dan Aswan",
      drives: "Luxor ke Aswan lewat jalan darat",
      early: "Matahari terbit di Giza, balon udara saat fajar di atas Tepi Barat, dan cahaya pagi di sebuah desa Nubia",
    },
    faqs: [
      { q: "Bolehkah saya membawa drone?", a: "Tidak — anggap saja tidak bisa. Aturan drone di Mesir termasuk yang paling ketat di dunia, dan perangkatnya disita di bandara. Seluruh rencana perjalanan ini justru disusun untuk sudut pandang dari darat dan dari balon udara." },
      { q: "Apakah tripod diizinkan di situs-situs?", a: "Tergantung situsnya, dan aturannya bisa berubah; sebagian mewajibkan izin berbayar, sebagian melarangnya sama sekali, dan di dalam makam kerajaan hanya boleh memotret genggam. Kami mengurus izin lebih dulu di tempat yang menyediakannya, dan menyesuaikan teknik di tempat yang tidak." },
      { q: "Apakah perjalanan ini layak bagi pasangan yang tidak memotret?", a: "Sungguh layak. Jadwalnya hanya berarti melihat situs-situs pada jam-jamnya yang paling sepi dan paling indah; satu-satunya harga yang dibayar adalah alarm pagi, dan cahayanya membalas dengan lunas." },
    ],
  },

  // ===== Family Egypt: Pyramids to the Nile =====
  {
    slug: "tour-family-8day",
    localeSlug: "liburan-keluarga-mesir-8-hari",
    metaTitle: "Liburan Keluarga ke Mesir 8 Hari Bersama Anak | Kemet",
    metaDescription: "Delapan hari di Mesir bersama anak: kunjungan pagi yang singkat, Egyptologist yang khusus menangani keluarga, sore di kolam renang, dan felucca di Aswan.",
    keywords: "liburan keluarga ke mesir, tour mesir bersama anak, wisata mesir untuk anak, paket liburan keluarga mesir, tour mesir 8 hari",
    crumb: "Keluarga, 8 hari",
    title: "Mesir untuk Keluarga: dari Piramida ke Sungai Nil",
    subtitle: "Delapan hari yang dirancang untuk anak-anak yang penuh rasa ingin tahu dan orang tua yang tak ingin terburu-buru — mumi, felucca, warna-warni lukisan makam, dan sore di tepi kolam renang.",
    durationLabel: "8 Hari / 7 Malam",
    startPoint: "Kairo (bandara atau hotel)",
    summary: "Mesir bersama anak, dengan cara yang tepat: pagi berpemandu yang singkat, Egyptologist yang khusus menangani keluarga, sore di kolam renang, dan momen-momen yang tak tertandingi ruang kelas mana pun.",
    overview: "Mesir adalah ruang kelas paling berharga di bumi — asalkan ritmenya menghormati cara anak-anak benar-benar bepergian. Perjalanan ini menaruh kunjungan berpemandu di pagi hari, menyerahkan sore hari kepada kolam renang dan taman, dan memakai pemandu yang memang khusus menangani keluarga: mereka yang menjelaskan mumifikasi kepada anak delapan tahun dengan begitu hidup sampai si anak menjelaskannya kembali saat makan malam. Kairo dan Giza membuka perjalanan dengan Sphinx, galeri Tutankhamun di Grand Egyptian Museum, dan mumi-mumi di NMEC, Museum Nasional Peradaban Mesir. Penerbangan ke selatan (jarang ada anak yang masih menyukai kereta tidur untuk kedua kalinya) membawa Anda ke makam-makam berlukis di Luxor dan satu jam ber-felucca di Aswan, tempat satu-satunya kewajiban adalah mencelupkan tangan ke air Sungai Nil. Di sepanjang perjalanan, kamarnya berupa suite keluarga atau kamar yang saling terhubung.",
    itinerary: [
      {
        title: "Tiba di Kairo",
        items: [
          "Penyambutan privat di bandara — kursi anak dipasang bila diperlukan",
          "Menempati kamar yang saling terhubung; malam bebas",
        ],
      },
      {
        title: "Piramida & Sphinx",
        items: [
          "Plateau Giza di pagi yang sejuk — piramida, titik panorama, dan Sphinx",
          "Pilihan naik unta sebentar di titik panorama",
          "Sore di kolam renang; malamnya pertunjukan Suara dan Cahaya di piramida (opsional)",
        ],
      },
      {
        title: "Tutankhamun & para mumi",
        items: [
          "Grand Egyptian Museum — harta karun sang raja belia, diceritakan untuk anak-anak",
          "Aula Mumi Kerajaan di NMEC untuk anak-anak yang lebih besar dan pemberani",
          "Es krim di tepi Sungai Nil (corniche)",
        ],
      },
      {
        title: "Terbang ke Luxor — Karnak",
        items: [
          "Penerbangan pagi ke selatan",
          "Karnak ala perburuan harta karun: temukan skarabnya, hitung tiang-tiangnya",
          "Sore di kolam renang hotel",
        ],
      },
      {
        title: "Lembah Para Raja",
        items: [
          "Kunjungan pagi-pagi ke Tepi Barat — tiga makam yang dipilih karena warnanya yang cerah",
          "Kuil Hatshepsut dan Kolosus Memnon",
          "Sore bebas; demo memasak untuk keluarga di hotel (opsional)",
        ],
      },
      {
        title: "Ke Aswan lewat darat — Edfu",
        items: [
          "Perjalanan ke selatan dengan singgah di Edfu, yang didatangi dengan kereta kuda (calèche)",
          "Tiba di Aswan; gelato malam hari di corniche",
        ],
      },
      {
        title: "Felucca & warna Nubia",
        items: [
          "Philae dengan perahu motor — kuil di sebuah pulau sudah merupakan petualangan tersendiri",
          "Sore berlayar dengan felucca dan mengunjungi desa Nubia yang dicat warna-warni",
          "Lukisan henna dan teh rosella bersama sebuah keluarga Nubia",
        ],
      },
      {
        title: "Pulang lewat Kairo",
        items: [
          "Penerbangan pagi ke Kairo untuk penerbangan lanjutan Anda",
        ],
      },
    ],
    comfort: {
      sleep: "Hotel di Kairo, Luxor, dan Aswan",
      drives: "Luxor ke Aswan lewat jalan darat, dengan singgah di Edfu",
      early: "Berangkat pagi-pagi untuk Lembah Para Raja",
    },
    faqs: [
      { q: "Rencana perjalanan ini cocok untuk usia berapa?", a: "Rencana ini disesuaikan untuk anak usia sekitar 6–15 tahun. Anak yang lebih kecil pun biasanya menikmatinya — kunjungan paginya singkat — tetapi makam dan museum paling berkesan mulai sekitar usia tujuh tahun. Para pemandu menyesuaikan diri di tempat dengan siapa pun yang ada di hadapan mereka." },
      { q: "Seberapa banyak anak-anak akan berjalan kaki?", a: "Kunjungan situs dibatasi dua atau tiga jam di pagi yang sejuk, dengan kendaraan selalu siap di dekatnya. Jalan kaki terpanjang adalah di Karnak, dan itu pun diselingi berhenti di tempat teduh dan, terus terang saja, permainan." },
      { q: "Apakah makanannya cocok untuk anak yang pilih-pilih makanan?", a: "Ya. Hotel menyediakan pilihan yang akrab di lidah di samping hidangan Mesir, dan pemandu Anda selalu tahu di mana ada pasta atau ayam panggang yang bisa diandalkan. Kebanyakan anak pulang dalam keadaan ketagihan jus mangga segar." },
    ],
  },

  // ===== Egypt Highlights Deluxe =====
  {
    slug: "tour-7-day",
    localeSlug: "tour-mesir-7-hari",
    metaTitle: "Tour Mesir 7 Hari: Kairo, Alexandria, Luxor | Kemet",
    metaDescription: "Tujuh hari privat: Museum Mesir, Alexandria, kuil dan makam Luxor, Piramida Giza dan Saqqara, dengan kereta tidur dan Egyptologist Anda sendiri.",
    keywords: "tour mesir 7 hari, paket tour mesir seminggu, tour kairo alexandria luxor, tour privat mesir, liburan ke mesir 7 hari",
    crumb: "Mesir 7 hari",
    title: "Pesona Utama Mesir dalam Sepekan",
    subtitle: "Sepekan yang merangkum yang terpenting — Kairo, Alexandria, dan Luxor — dengan malam-malam di kereta tidur di antaranya.",
    durationLabel: "7 Hari / 6 Malam",
    startPoint: "Kairo (bandara atau hotel)",
    summary: "Daya tarik utama Mesir dalam tujuh hari — Museum Mesir, Alexandria, kuil dan makam Luxor, serta Piramida Giza.",
    overview: "Bagi Anda yang punya waktu sepekan, perjalanan ini menyaring Mesir hingga ke hal-hal terbaiknya tanpa terburu-buru. Kairo dibuka dengan Museum Mesir; sehari penuh di tepi Mediterania untuk Alexandria; lalu kereta tidur membawa Anda ke Luxor, ke kuil-kuil bagi yang hidup dan makam-makam bagi yang telah tiada. Anda kembali ke utara untuk Piramida Giza, Saqqara, dan jantung abad pertengahan Kairo Islam. Privat sepanjang perjalanan, dengan Egyptologist Anda sendiri dan hotel bintang empat atau lima.",
    itinerary: [
      {
        title: "Kairo & Museum Mesir",
        items: [
          "Penyambutan privat di bandara dan transfer ke hotel Anda",
          "Sore di Museum Mesir di Tahrir",
          "Orientasi malam hari bersama pemandu Anda",
        ],
      },
      {
        title: "Perjalanan sehari ke Alexandria",
        items: [
          "Perjalanan darat ke pesisir Mediterania",
          "Katakombe Kom El Shoqafa, Pilar Pompey, dan Benteng Qaitbay",
          "Bibliotheca Alexandrina dan makan siang hidangan laut di tepi pantai",
        ],
      },
      {
        title: "Kairo Koptik & kereta malam ke Luxor",
        items: [
          "Gereja Gantung dan Kairo Lama di pagi hari",
          "Transfer ke stasiun pada malam hari",
          "Kereta tidur ke selatan dengan kabin privat",
        ],
      },
      {
        title: "Tepi Timur Luxor",
        items: [
          "Kompleks kuil Karnak dan Jalan Sphinx",
          "Kuil Luxor di jantung kota",
          "Check-in di hotel Anda di Luxor",
        ],
      },
      {
        title: "Tepi Barat & kereta ke Kairo",
        items: [
          "Lembah Para Raja dan Kuil Pemakaman Hatshepsut",
          "Kolosus Memnon",
          "Kereta tidur malam kembali ke Kairo",
        ],
      },
      {
        title: "Giza & Saqqara",
        items: [
          "Piramida Giza dan Sphinx Agung",
          "Titik pandang panorama di plateau",
          "Piramida Bertingkat Djoser di Saqqara",
        ],
      },
      {
        title: "Kairo Islam & keberangkatan",
        items: [
          "Benteng Salahuddin dan Masjid Muhammad Ali",
          "Pasar Khan el-Khalili",
          "Transfer privat ke bandara",
        ],
      },
    ],
    comfort: {
      sleep: "Hotel di Kairo dan Luxor, serta dua malam di kereta tidur — diganti hotel pada versi dengan pesawat",
      drives: "Perjalanan sehari dari Kairo ke Alexandria pulang-pergi lewat jalan darat",
    },
    faqs: [
      { q: "Seberapa banyak saya harus berjalan kaki?", a: "Dalam batas yang nyaman — kompleks kuil seperti Karnak berarti satu atau dua jam berjalan kaki di permukaan yang tidak rata. Kami mengatur ritme setiap hari dan beristirahat saat panas." },
      { q: "Apakah kereta malamnya nyaman?", a: "Ya. Anda menempati kabin tidur privat dengan makan malam dan sarapan disajikan di kereta, sehingga perjalanan panjang berlangsung selagi Anda beristirahat." },
      { q: "Bisakah diperpanjang dengan pesiar Nil?", a: "Tentu saja — banyak tamu menambahkan pesiar 3 atau 4 malam antara Aswan dan Luxor. Beri tahu kami tanggal Anda, dan kami akan menyesuaikan perpanjangannya." },
    ],
  },

  // ===== Cairo of the Eight Worlds =====
  {
    slug: "tour-cairo-culture-5day",
    localeSlug: "wisata-budaya-kairo-5-hari",
    metaTitle: "Wisata Budaya Kairo 5 Hari Bersama Sejarawan | Kemet",
    metaDescription: "Lima hari menyelami lapisan Kairo — firaun, Koptik, Islam, dan modern — bersama pemandu sejarawan: dua museum, Saqqara dan Dahshur, Kairo Islam, tanoura.",
    keywords: "wisata budaya kairo, tour kairo 5 hari, wisata sejarah kairo, kairo islam, kairo koptik",
    crumb: "Budaya Kairo, 5 hari",
    title: "Kairo, Kota Delapan Dunia",
    subtitle: "Lima hari menyelami lapisan-lapisan satu kota — Kairo firaun, Koptik, Islam, dan modern, dibaca jalan demi jalan bersama seorang sejarawan.",
    durationLabel: "5 Hari / 4 Malam",
    startPoint: "Kairo (bandara atau hotel)",
    summary: "Pembacaan yang dalam dan perlahan atas kota berlapis terbesar di dunia — dua museumnya, tiga agamanya, jalan-jalan abad pertengahannya, dan nekropolis tempat piramida diciptakan.",
    overview: "Kebanyakan pengunjung memberi Kairo dua malam dan sebuah daftar centang. Perjalanan ini memberinya lima hari dan sebuah tesis: bahwa Kairo bukan tempat transit, melainkan situs budaya terpadat di dunia Mediterania. Lapisan firaun mendapat dua hari — Giza, ditambah busur Saqqara–Memphis–Dahshur tempat bentuk piramida diciptakan — tetapi jantung perjalanan ini adalah kota yang hidup: kawasan Koptik yang dibangun di dalam benteng Romawi, jalinan seribu tahun Kairo Islam yang dijelajahi masjid demi masjid bersama pemandu sejarawan, jalur-jalur dagang Khan el-Khalili yang jejaknya masih samar terbaca di lorong-lorongnya, dan dua museum besar yang dibaca sebagai satu koleksi yang terbelah oleh satu abad. Malam hari direncanakan secermat pagi hari — berjalan menyusuri jalan-jalan belle époque di pusat kota, pertunjukan tanoura sufi, dan minum teh di tempat warga Kairo benar-benar minum teh.",
    itinerary: [
      {
        title: "Tiba & Museum Mesir",
        items: [
          "Penyambutan privat di bandara dan transfer",
          "Aula-aula lama Museum Mesir yang padat koleksi, bersama sejarawan Anda",
          "Berjalan pada malam hari menyusuri jalan-jalan belle époque di pusat kota",
        ],
      },
      {
        title: "Giza & Grand Egyptian Museum",
        items: [
          "Plateau saat dibuka — piramida, titik panorama, Sphinx",
          "Sore di galeri Tutankhamun di GEM",
          "Pilihan pertunjukan Suara dan Cahaya pada malam hari",
        ],
      },
      {
        title: "Saqqara, Memphis & Dahshur",
        items: [
          "Piramida Bertingkat Djoser — tempat arsitektur batu bermula",
          "Patung raksasa Ramses II di Memphis",
          "Piramida Bengkok dan Piramida Merah di Dahshur, biasanya nyaris tanpa pengunjung",
        ],
      },
      {
        title: "Kairo Koptik & Islam",
        items: [
          "Benteng Romawi Babilon, Gereja Gantung, dan Sinagoge Ben Ezra",
          "Masjid Ibnu Thulun dari abad kesembilan dan Benteng Salahuddin",
          "Jalan Al-Muizz saat senja; pertunjukan tanoura sufi selepas gelap",
        ],
      },
      {
        title: "Pasar & keberangkatan",
        items: [
          "Khan el-Khalili beserta konteksnya — bengkel-bengkel perajin, bukan sekadar kios",
          "Makan siang terakhir di sebuah rumah zaman Utsmaniyah yang telah dipugar",
          "Transfer privat ke bandara",
        ],
      },
    ],
    comfort: {
      sleep: "Satu hotel di Kairo untuk keempat malam",
    },
    faqs: [
      { q: "Apakah satu kota benar-benar cukup untuk lima hari?", a: "Kairo bisa mengisi lima belas hari. Lima hari adalah titik ketika kota ini berhenti menjadi deretan monumen yang kabur dan mulai bisa dibaca — Anda mulai mengenali dinasti, gaya masjid, dan pola jalan tanpa perlu diberi tahu. Itulah tujuannya." },
      { q: "Seberapa banyak jalan kaki pada hari di Kairo Islam?", a: "Sekitar empat kilometer sepanjang hari, di atas batu bulat dan lantai batu, terus-menerus diselingi kunjungan. Sepatu yang nyaman lebih penting pada perjalanan ini dibanding perjalanan kami yang lain mana pun." },
      { q: "Bisakah Alexandria ditambahkan?", a: "Bisa — hari keenam di tepi Mediterania memperpanjang perjalanan ini dengan wajar. Sampaikan saat memesan, dan kami akan memasukkannya." },
    ],
  },

  // ===== Temples of the South =====
  {
    slug: "tour-upper-egypt-5day",
    localeSlug: "tour-luxor-aswan-5-hari",
    metaTitle: "Tour Mesir Hulu 5 Hari: Luxor, Edfu, Aswan | Kemet",
    metaDescription: "Lima hari privat di Mesir Hulu: Karnak, Lembah Para Raja, Edfu, Kom Ombo, dan Philae lewat jalan darat, bersama Egyptologist Anda sendiri.",
    keywords: "tour luxor aswan, tour mesir hulu, wisata luxor 5 hari, wisata kuil mesir, lembah para raja",
    crumb: "Mesir Hulu, 5 hari",
    title: "Kuil-Kuil di Selatan",
    subtitle: "Lima hari tanpa terburu-buru di Mesir Hulu — kedua tepi Luxor, jalan ke selatan melewati Edfu dan Kom Ombo, dan pulau-pulau Aswan.",
    durationLabel: "5 Hari / 4 Malam",
    startPoint: "Luxor (hotel, stasiun, atau bandara)",
    summary: "Jantung sejarah Mesir yang paling dalam, ditempuh dengan perjalanan darat privat — Karnak, Lembah Para Raja, Edfu, Kom Ombo, dan Philae, dengan waktu untuk benar-benar meresapinya.",
    overview: "Mesir Hulu menyimpan konsentrasi monumen terpadat di negeri ini, dan kebanyakan rencana perjalanan melintasinya sambil berlari. Yang ini tidak. Dua hari penuh di Luxor memisahkan kuil-kuil Tepi Timur dari nekropolis Tepi Barat, sehingga tak satu pun dikunjungi dengan tergesa-gesa. Perjalanan darat ke selatan menuju Aswan pun menjadi bagian dari perjalanan, bukan sekadar transfer: Edfu dan Kom Ombo menyela jalan tepat di tempat lalu lintas sungai zaman kuno dulu berhenti. Aswan menutup perjalanan dengan nada yang lebih lembut — Philae dengan perahu motor, tambang granit, dan satu jam berlayar dengan felucca sebelum Anda kembali dengan pesawat atau kereta. Egyptologist privat Anda sendiri dari hari pertama hingga terakhir.",
    itinerary: [
      {
        title: "Tiba di Luxor & Tepi Timur",
        items: [
          "Penyambutan privat di bandara atau stasiun Luxor",
          "Kompleks kuil Karnak — aula hipostil agung dalam cahaya sore",
          "Kuil Luxor saat senja ketika lampu sorot mulai menyala",
        ],
      },
      {
        title: "Tepi Barat secara menyeluruh",
        items: [
          "Lembah Para Raja — tiga makam kerajaan bersama Egyptologist Anda",
          "Kuil Pemakaman Hatshepsut yang berteras di Deir el-Bahari",
          "Kolosus Memnon dan perjalanan kembali lewat jalan desa menyusuri dataran banjir",
        ],
      },
      {
        title: "Ke selatan lewat darat — Edfu & Kom Ombo",
        items: [
          "Perjalanan pagi ke Edfu dan Kuil Horus, yang paling utuh di Mesir",
          "Tempat suci kembar Kom Ombo di atas tikungan Sungai Nil",
          "Tiba di Aswan menjelang petang; malam bebas di corniche",
        ],
      },
      {
        title: "Aswan — Philae & sungai",
        items: [
          "Bendungan Tinggi dan Obelisk yang Belum Selesai di tambang granit",
          "Perahu motor ke Kuil Philae di pulaunya",
          "Berlayar dengan felucca pada jam keemasan di antara pulau-pulau Katarak Pertama",
        ],
      },
      {
        title: "Keberangkatan — atau Abu Simbel",
        items: [
          "Pagi bebas, atau pilihan perjalanan pagi-pagi ke Abu Simbel",
          "Transfer privat ke bandara atau stasiun Aswan",
        ],
      },
    ],
    comfort: {
      sleep: "Hotel di Luxor, lalu hotel di Aswan",
      drives: "Luxor ke Aswan lewat jalan darat, dengan singgah di Edfu dan Kom Ombo",
      early: "Hanya bila Anda memilih perjalanan opsional ke Abu Simbel pada hari terakhir",
    },
    faqs: [
      { q: "Mengapa lewat darat dari Luxor ke Aswan, bukan berlayar?", a: "Jalan darat memungkinkan Edfu dan Kom Ombo tanpa terikat jadwal tetap kapal pesiar, dan setiap malam Anda tidur di kamar hotel berukuran penuh. Bila Anda lebih suka berlayar, perjalanan pesiar kami, Nile in Style, menempuh koridor yang sama lewat air." },
      { q: "Apakah perjalanan ini mencakup Abu Simbel?", a: "Tidak secara bawaan — tetapi Abu Simbel mudah disisipkan sebagai perjalanan pagi-pagi dari Aswan pada hari terakhir, dengan mobil pribadi atau penerbangan singkat. Beri tahu kami saat memesan agar kami bisa mengamankan jadwalnya." },
      { q: "Bagaimana cara mencapai Luxor untuk memulai?", a: "Dengan penerbangan EgyptAir dari Kairo (55 menit) atau kereta tidur malam. Keduanya mudah ditambahkan; rencana perjalanan dimulai kapan pun Anda mendarat." },
    ],
  },

  // ===== From Pyramids to the Sea =====
  {
    slug: "tour-4-day",
    localeSlug: "tour-kairo-alexandria-4-hari",
    metaTitle: "Tour Kairo & Alexandria 4 Hari, Privat | Kemet",
    metaDescription: "Empat hari privat: Museum Mesir, katakombe dan benteng Alexandria, Piramida Giza dan Saqqara dalam cahaya pagi, lalu lorong-lorong Kairo Islam.",
    keywords: "tour kairo alexandria, tour mesir 4 hari, wisata kairo 4 hari, piramida giza dan saqqara, liburan singkat ke mesir",
    crumb: "Kairo & Alexandria",
    title: "Dari Piramida ke Laut",
    subtitle: "Empat hari yang memadukan monumen Kairo dan Giza dengan sehari di tepi Mediterania di Alexandria.",
    durationLabel: "4 Hari / 3 Malam",
    startPoint: "Kairo (bandara atau hotel)",
    summary: "Perjalanan ringkas di utara — Museum Mesir, lapisan Yunani-Romawi Alexandria, Piramida Giza, dan Kairo abad pertengahan.",
    overview: "Singkat harinya tetapi kaya ragamnya, liburan ini memadukan monumen-monumen perintis Kerajaan Lama dengan Alexandria, kota kosmopolitan di tepi Mediterania. Anda memulai dengan Museum Mesir, menghabiskan sehari penuh di antara katakombe dan benteng Alexandria, lalu memberi Giza dan Saqqara cahaya pagi yang layak mereka dapatkan, sebelum menutup perjalanan di lorong-lorong Kairo Islam. Ideal sebagai perjalanan tersendiri atau sebagai paruh pertama rencana perjalanan Mesir yang lebih panjang.",
    itinerary: [
      {
        title: "Tiba & Museum Mesir",
        items: [
          "Penyambutan privat di bandara dan transfer ke hotel",
          "Sore di Museum Mesir di Tahrir",
          "Rekomendasi makan malam penyambutan dari pemandu Anda",
        ],
      },
      {
        title: "Perjalanan sehari ke Alexandria",
        items: [
          "Katakombe Kom El Shoqafa",
          "Benteng Qaitbay dan Bibliotheca Alexandrina",
          "Pilar Pompey dan makan siang hidangan laut di tepi pantai",
        ],
      },
      {
        title: "Giza & Saqqara",
        items: [
          "Piramida Giza dan Sphinx Agung",
          "Piramida Bertingkat Djoser di Saqqara",
          "Memphis, ibu kota pertama Mesir yang bersatu",
        ],
      },
      {
        title: "Kairo Islam & keberangkatan",
        items: [
          "Benteng Salahuddin dan Masjid Muhammad Ali",
          "Pasar Khan el-Khalili",
          "Transfer privat ke bandara",
        ],
      },
    ],
    comfort: {
      sleep: "Satu hotel di Kairo untuk ketiga malam",
      drives: "Perjalanan sehari dari Kairo ke Alexandria pulang-pergi lewat jalan darat",
    },
    faqs: [
      { q: "Apakah empat hari cukup untuk Kairo dan Alexandria?", a: "Cukup — rencana perjalanan ini disusun untuk mencakup hal-hal terpenting dari keduanya tanpa terburu-buru, dengan satu hari penuh untuk Alexandria dan satu pagi penuh untuk plateau Giza." },
      { q: "Bisakah saya menambahkan Luxor atau pesiar Nil?", a: "Mudah. Liburan ini menjadi paruh pertama yang alami; kami menambahkan penerbangan atau kereta tidur ke Luxor dan Aswan kapan pun Anda punya lebih banyak hari." },
      { q: "Berapa lama perjalanan darat ke Alexandria?", a: "Sekitar dua setengah sampai tiga jam sekali jalan melalui jalan gurun, dengan kendaraan privat ber-AC bersama pemandu Anda." },
    ],
  },
  // ===== Red Sea Retreat: Sharm El Sheikh =====
  {
    slug: "tour-sharm-5day",
    localeSlug: "liburan-sharm-el-sheikh-5-hari",
    metaTitle: "Laut Merah: Sharm El Sheikh 5 Hari, Privat | Kemet",
    metaDescription: "Lima hari di tempat pegunungan Sinai bertemu air terjernih di belahan bumi utara: sehari berperahu privat di Ras Mohammed dan semalam di gurun Sinai.",
    keywords: "liburan sharm el sheikh, wisata laut merah mesir, snorkeling ras mohammed, malam di gurun sinai, liburan pantai mesir",
    crumb: "Laut Merah, 5 hari",
    title: "Rehat di Laut Merah: Sharm El Sheikh",
    subtitle: "Lima hari di tempat pegunungan Sinai bertemu air paling jernih di belahan bumi utara — terumbu karang, malam di gurun, dan bermalas-malasan yang memang disengaja.",
    durationLabel: "5 hari / 4 malam",
    startPoint: "Sharm El Sheikh (bandara atau hotel)",
    summary: "Laut Merah yang dijalani dengan sengaja — sehari penuh berperahu privat di Ras Mohammed, satu malam di bawah bintang di gurun Sinai, dan waktu yang sengaja dibiarkan kosong.",
    overview: "Sharm El Sheikh terletak di ujung Semenanjung Sinai, tempat pegunungan gurun terjun ke dalam air yang begitu jernih sehingga dari permukaan pun terumbu karangnya terbaca seperti peta. Di sinilah Mesir menghela napas panjang — dan begitulah rute ini memperlakukannya. Dua hari utama diatur secara privat: sehari berperahu di Taman Nasional Ras Mohammed, yang dinding-dinding karangnya, di titik pertemuan Teluk Suez dan Teluk Aqaba, termasuk lokasi snorkeling terbaik di dunia; dan satu malam di gurun Sinai dengan teh Badui, makan malam bakar, dan pengamatan bintang di bawah salah satu langit tergelap yang bisa dijangkau dari resort mana pun. Selebihnya sengaja tidak dijadwalkan. Cocok sebagai liburan tersendiri atau sebagai bab penutup perjalanan yang lebih panjang di Mesir — Luxor tak sampai satu jam penerbangan dari sini.",
    itinerary: [
      { title: "Tiba di Laut Merah", items: ["Penyambutan privat di bandara dan check-in di resort", "Perkenalan sambil menikmati minuman — pekan Anda disusun mengikuti keinginan Anda"] },
      { title: "Ras Mohammed dengan perahu", items: ["Sehari penuh dengan perahu privat ke dalam taman nasional", "Dua atau tiga titik snorkeling di atas dinding dan taman karang", "Makan siang di geladak perahu"] },
      { title: "Hari bebas", items: ["Hari tanpa jadwal — mencoba menyelam, spa, atau sekadar pantai", "Jalan-jalan malam di Old Market Sharm dan Masjid Al-Sahaba"] },
      { title: "Malam di gurun Sinai", items: ["Menjelang sore, berangkat dengan mobil 4x4 ke pedalaman Sinai", "Teh Badui, makan malam di atas bara arang, dan mengamati bintang jauh dari cahaya resort"] },
      { title: "Kepulangan", items: ["Pagi bebas dan transfer privat ke bandara"] },
    ],
    comfort: { sleep: "Satu resort di Laut Merah untuk keempat malam" },
    faqs: [
      { q: "Kapan air lautnya cukup hangat?", a: "Bisa dibilang selalu. Suhu air berkisar dari 21 °C pada musim dingin hingga 28 °C pada akhir musim panas; snorkeling bisa dilakukan sepanjang tahun, dan bahkan bulan Januari tetap nyaman dengan wetsuit pendek (shorty), yang tersedia di perahu." },
      { q: "Apakah saya harus bisa menyelam?", a: "Tidak. Terumbu karang Ras Mohammed naik cukup dekat ke permukaan sehingga dengan snorkeling Anda sudah melihat sebagian besar keindahannya. Jika ingin mencoba menyelam, kami mengatur sesi perkenalan menyelam berlisensi di house reef resort Anda." },
      { q: "Bisakah digabung dengan rute Sungai Nil?", a: "Sangat bisa — begitulah kebanyakan tamu memanfaatkannya. Luxor–Sharm hanya penerbangan singkat, dan empat hari di Laut Merah setelah sepekan menjelajahi kuil adalah urutan Mesir terbaik yang kami tahu." },
    ],
  },

  // ===== Dive the Red Sea =====
  {
    slug: "tour-red-sea-diving-4day",
    localeSlug: "paket-diving-laut-merah-4-hari",
    metaTitle: "Diving Laut Merah 4 Hari dari Sharm El Sheikh | Kemet",
    metaDescription: "Empat penyelaman berpemandu dari perahu di dua kelompok situs terbaik Sinai — Ras Mohammed dan Tiran — bersama pusat selam PADI yang telah kami periksa.",
    keywords: "diving laut merah, diving sharm el sheikh, menyelam di ras mohammed, diving selat tiran, paket diving mesir padi",
    crumb: "Diving, 4 hari",
    title: "Menyelam di Laut Merah",
    subtitle: "Empat hari yang disusun demi waktu di bawah air — dinding karang Ras Mohammed, terumbu berarus di Selat Tiran, dan perahu berkelompok kecil yang berangkat pagi.",
    durationLabel: "4 hari / 3 malam",
    startPoint: "Sharm El Sheikh (bandara atau hotel)",
    summary: "Empat penyelaman berpemandu dari perahu di dua kelompok situs terbaik Sinai — Ras Mohammed dan Tiran — bersama pusat selam PADI yang telah kami periksa, setelah check dive di house reef.",
    overview: "Laut Merah bagian utara adalah salah satu kawasan selam yang menjadi tolok ukur dunia: jarak pandang lebih dari 20 meter sudah biasa, airnya tidak pernah benar-benar dingin, dan dinding karangnya turun dari kedalaman snorkeling hingga ke air biru. Program ini memadatkannya menjadi empat hari tanpa mengorbankan keselamatan maupun surface interval. Setelah check dive di house reef resort Anda, dua hari penuh di perahu mencakup dua kelompok situs yang wajib — Taman Nasional Ras Mohammed, tempat terumbu Shark dan Yolanda membentuk situs ganda paling terkenal di Sinai, dan empat terumbu bernama di Selat Tiran yang disapu arus lembut untuk drift dive dan didatangi ikan pelagis. Penyelaman dijalankan oleh pusat selam PADI berlisensi yang terus bekerja sama dengan kami; ukuran rombongan dibatasi kecil, dan pasangan yang tidak menyelam dipersilakan ikut di perahu dengan perlengkapan snorkeling.",
    itinerary: [
      { title: "Tiba & check dive", items: ["Penyambutan privat di bandara dan check-in di resort", "Sore hari: mencoba perlengkapan dan check dive di house reef"] },
      { title: "Sehari di perahu: Ras Mohammed", items: ["Dua penyelaman berpemandu — terumbu Shark & Yolanda bila kondisi memungkinkan", "Makan siang di geladak dan surface interval yang panjang di tempat-tempat berlabuh di taman nasional"] },
      { title: "Sehari di perahu: Selat Tiran", items: ["Dua drift dive berpemandu di rangkaian terumbu Tiran", "Pilihan penyelaman ketiga pada sore hari, atau kembali lebih awal untuk spa"] },
      { title: "Pagi jeda terbang & kepulangan", items: ["Pagi di permukaan — jeda bebas terbang 18–24 jam sudah diperhitungkan", "Transfer privat ke bandara"] },
    ],
    comfort: { sleep: "Satu resort di Laut Merah untuk ketiga malam" },
    faqs: [
      { q: "Sertifikasi tingkat apa yang saya perlukan?", a: "Open Water sudah mencakup semua yang dijadwalkan; situs-situsnya diselami dengan profil kedalaman 18–30 m. Jika Anda belum bersertifikat, beri tahu kami — empat hari yang sama dapat diubah dengan mulus menjadi kursus Open Water di pusat selam yang sama." },
      { q: "Mengapa pagi terakhir tanpa menyelam?", a: "Terbang terlalu cepat setelah menyelam berisiko menimbulkan penyakit dekompresi. Rute ini menerapkan jeda standar sebelum terbang (no-fly interval), sehingga hari terakhir Anda di perahu tidak pernah perlu dikorbankan demi mengejar penerbangan." },
      { q: "Apa yang sebenarnya akan saya lihat?", a: "Di Ras Mohammed: dinding karang lunak yang rapat, awan ikan anthias, ikan napoleon, penyu, dan hiu karang; di Tiran, pari elang dan kawanan barakuda menunggangi arus. Laut Merah bagian utara memuaskan penyelam di setiap tingkat pengalaman." },
    ],
  },

  // ===== Luxor Immersion =====
  {
    slug: "tour-luxor-3day",
    localeSlug: "tur-luxor-3-hari-2-malam",
    metaTitle: "Tur Privat Luxor 3 Hari — Tepi Timur & Tepi Barat | Kemet",
    metaDescription: "Tiga hari di Luxor tanpa tergesa: Karnak saat baru dibuka, Lembah Para Raja sebelum panas, teras Hatshepsut, dan Kuil Luxor bermandi cahaya pada malam hari.",
    keywords: "tur luxor 3 hari, wisata luxor mesir, lembah para raja, kuil karnak luxor, tur privat luxor",
    crumb: "Luxor, 3 hari",
    title: "Menyelami Luxor",
    subtitle: "Tiga hari di museum terbuka terbesar di dunia — kedua tepi sungai dijelajahi dengan layak, dengan kuil yang bermandi cahaya pada malam hari sebagai porosnya.",
    durationLabel: "3 hari / 2 malam",
    startPoint: "Luxor (bandara, stasiun, atau hotel)",
    summary: "Luxor tanpa terburu-buru: Karnak saat baru dibuka, Lembah Para Raja sebelum panas, teras-teras Hatshepsut, dan Jalan Sphinx setelah gelap.",
    overview: "Luxor sering hanya diberi satu hari yang serba tergesa, padahal kota ini menyimpan salah satu konsentrasi monumen kuno terpadat di muka bumi. Liburan singkat ini mengembalikan waktu yang hilang itu. Hari di Tepi Timur dimulai di Karnak saat baru dibuka — satu jam sebelum bus-bus wisata — lalu kembali setelah gelap untuk Kuil Luxor yang disorot lampu di sepanjang Jalan Sphinx yang telah dipugar; pada malam hari, kuil ini benar-benar menjadi monumen yang berbeda. Hari di Tepi Barat turun ke tiga makam kerajaan yang dipilih berdasarkan warnanya dan pola keramaiannya, lalu teras-teras Hatshepsut yang dipahat di tebing dan Kolosus Memnon. Pagi terakhir milik Anda: balon udara saat fajar di atas nekropolis, Museum Luxor yang istimewa, atau tidak melakukan apa pun. Perjalanan ini mudah dipasang sebelum atau sesudah rute Kairo mana pun, dengan pesawat atau kereta tidur.",
    itinerary: [
      { title: "Tepi Timur & kuil di malam hari", items: ["Penyambutan saat tiba di bandara atau stasiun Luxor", "Kompleks kuil Karnak saat baru dibuka, bersama Egyptologist Anda", "Malam hari: Kuil Luxor bermandi cahaya, dimasuki melalui Jalan Sphinx"] },
      { title: "Tepi Barat", items: ["Lembah Para Raja — tiga makam sebelum panas siang", "Kuil pemakaman Hatshepsut di Deir el-Bahri", "Kolosus Memnon dan desa para perajin Deir el-Medina (bila waktu memungkinkan)"] },
      { title: "Pagi Anda di Luxor & kepulangan", items: ["Pilihan balon udara saat fajar, atau koleksi pilihan Museum Luxor", "Transfer privat ke bandara atau stasiun"] },
    ],
    comfort: { sleep: "Satu hotel di Luxor untuk kedua malam", early: "Hanya jika Anda memilih balon udara saat fajar pada pagi terakhir" },
    faqs: [
      { q: "Makam mana saja yang termasuk di Lembah Para Raja?", a: "Tiket standar mencakup tiga makam dari daftar yang sedang dibuka secara bergiliran, dan pemandu akan mengarahkan Anda ke makam dengan lukisan terbaik hari itu. Makam Tutankhamun, Seti I, dan Ramses V/VI memerlukan tiket terpisah yang dapat kami siapkan sebelumnya." },
      { q: "Apakah kunjungan malam ke Kuil Luxor sepadan?", a: "Inilah malam yang paling sepadan dengan biayanya di Mesir. Sorotan lampu mengembalikan warna dan kedalaman yang dipudarkan matahari siang, dan Jalan Sphinx yang menyala dari ujung ke ujung tak akan terlupakan." },
      { q: "Bagaimana menggabungkannya dengan Kairo?", a: "Terbang (55 menit) atau naik kereta tidur malam, ke arah mana pun. Kebanyakan tamu memulai dari Kairo dan menjadikan liburan ini bab selatannya; kami mengatur waktu transfer untuk kedua arah." },
    ],
  },

  // ===== Cairo VIP Short Stay =====
  {
    slug: "tour-cairo-vip-3day",
    localeSlug: "kairo-vip-3-hari-2-malam",
    metaTitle: "Kairo VIP 3 Hari — Piramida & Grand Egyptian Museum | Kemet",
    metaDescription: "Tiga hari di Kairo tanpa repot: imigrasi jalur cepat saat tiba, plateau Giza privat di pagi hari, Grand Egyptian Museum, dan Kairo Islam bermandi lentera.",
    keywords: "tour kairo 3 hari, transit di kairo, grand egyptian museum, wisata kairo privat, liburan singkat ke kairo",
    crumb: "Kairo VIP, 3 hari",
    title: "Singgah Singkat VIP di Kairo",
    subtitle: "Tiga hari tanpa hambatan — kedatangan jalur cepat, piramida dan Grand Egyptian Museum, serta Kairo abad pertengahan setelah wisatawan harian pulang.",
    durationLabel: "3 hari / 2 malam",
    startPoint: "Kairo (bandara, layanan sambutan VIP)",
    summary: "Kairo yang esensial, diurus layaknya oleh concierge: imigrasi jalur cepat, pagi privat di plateau Giza, Grand Egyptian Museum, dan Kairo Islam yang diterangi lentera pada malam hari.",
    overview: "Dirancang bagi pelancong yang melintasi Kairo dengan waktu terbatas namun enggan menikmatinya setengah hati, singgah singkat ini memadatkan hal-hal esensial tanpa pernah terasa padat. Anda disambut di sisi udara bandara (airside) dengan imigrasi jalur cepat dan penanganan bagasi. Pagi di Giza dimulai awal dan privat; Grand Egyptian Museum menyusul ketika keramaian di plateau mencapai puncaknya — saat Anda sudah di tempat lain. Malam terakhir menjadi milik Kairo abad pertengahan pada jam terbaiknya — Jalan Al-Muizz dan Khan el-Khalili selepas senja, ketika lentera mengambil alih dari rombongan tur. Sopir dan Egyptologist khusus mendampingi Anda sepanjang waktu, dan jadwalnya menyesuaikan dari jam ke jam mengikuti kondisi Anda yang sebenarnya.",
    itinerary: [
      { title: "Kedatangan VIP & Benteng Salahuddin", items: ["Penyambutan di sisi udara bandara, imigrasi jalur cepat, dan transfer privat", "Sore hari di Benteng Salahuddin dan Masjid Muhammad Ali", "Matahari terbenam di atas kota tua dari Taman Al-Azhar"] },
      { title: "Giza & Grand Egyptian Museum", items: ["Plateau saat baru dibuka — piramida, titik panorama, dan Sphinx", "Tangga agung GEM dan galeri Tutankhamun setelah makan siang", "Malam bebas, dengan reservasi restoran dari kami bila diinginkan"] },
      { title: "Kairo abad pertengahan & kepulangan", items: ["Museum Mesir di Tahrir atau Kairo Koptik — sesuai pilihan Anda", "Jalan Al-Muizz dan Khan el-Khalili saat lentera mulai menyala", "Pendampingan jalur cepat untuk keberangkatan di bandara"] },
    ],
    comfort: { sleep: "Satu hotel di Kairo untuk kedua malam" },
    faqs: [
      { q: "Apa saja yang sebenarnya termasuk dalam layanan VIP bandara?", a: "Anda disambut di pintu pesawat atau garbarata, diantar melalui jalur imigrasi cepat, dan bagasi Anda diurus sampai ke mobil. Saat keberangkatan, tim yang sama mengurus check-in dan pemeriksaan keamanan dengan urutan sebaliknya. Bandara Kairo pun berubah dari urusan yang melelahkan menjadi hal yang nyaris tak terasa." },
      { q: "Bisakah rutenya disesuaikan jika saya tiba larut malam atau masih jet lag?", a: "Sepenuhnya bisa. Urutan di atas adalah susunan awal, bukan kontrak — pemandu Anda menyusun ulang urutannya mengikuti tenaga Anda, dan tidak ada yang hilang dengan menukar hari." },
      { q: "Apakah dua malam cukup untuk Kairo?", a: "Cukup untuk hal-hal esensial yang dijalani dengan baik — itulah janji rute ini. Jika Anda bisa menambah malam ketiga, hari Saqqara–Dahshur adalah tambahan yang paling berharga." },
    ],
  },

  // ===== Alexandria Overnight =====
  {
    slug: "tour-alexandria-2day",
    localeSlug: "aleksandria-2-hari-1-malam",
    metaTitle: "Aleksandria 2 Hari 1 Malam dari Kairo, Privat | Kemet",
    metaDescription: "Dua hari di tepi Mediterania: katakombe, benteng di tapak Pharos, Bibliotheca Alexandrina, dan malam yang tak pernah dilihat wisatawan harian.",
    keywords: "aleksandria mesir, wisata alexandria dari kairo, aleksandria 2 hari 1 malam, katakombe kom el shoqafa, bibliotheca alexandrina",
    crumb: "Aleksandria, 2 hari",
    title: "Semalam di Aleksandria",
    subtitle: "Dua hari di tepi Mediterania — katakombe, benteng di tapak Mercusuar Pharos, perpustakaan yang lahir kembali, dan malam yang tak pernah disaksikan wisatawan harian.",
    durationLabel: "2 hari / 1 malam",
    startPoint: "Kairo (penjemputan di hotel)",
    summary: "Aleksandria dengan separuhnya yang hilang dikembalikan: situs-situs Yunani-Romawi pada siang hari, lalu corniche saat senja, hidangan laut di tepi air, dan cahaya pagi yang tak pernah tertangkap tur sehari.",
    overview: "Aleksandria sebagai tur sehari adalah lari cepat yang menyenangkan; Aleksandria dengan menginap adalah kota yang lain sama sekali. Perjalanan ini menjalani rute utamanya dengan layak — Katakombe Kom El Shoqafa yang bertingkat tiga, Pilar Pompey, Benteng Qaitbay yang berdiri tepat di tapak mercusuar kuno, dan Bibliotheca Alexandrina — lalu tinggal untuk jam-jam yang membuat kota ini bisa dipahami: berjalan di corniche saat senja, hidangan laut yang dipilih per berat di sebuah rumah makan ternama di tepi air, dan pagi yang lambat menyusuri taman Istana Montaza dan Amfiteater Romawi sebelum kembali ke Kairo tanpa tergesa. Ritme Mediterania itulah intinya; satu malam di sini menyetel ulang seluruh rute perjalanan Anda di Mesir.",
    itinerary: [
      { title: "Kota kuno", items: ["Berangkat pagi dari Kairo melalui jalan gurun", "Katakombe Kom El Shoqafa dan Pilar Pompey", "Benteng Qaitbay dan Bibliotheca Alexandrina", "Senja di corniche dan makan malam hidangan laut di tepi air"] },
      { title: "Istana, jejak Romawi & kembali", items: ["Taman Istana Montaza dalam udara laut pagi", "Amfiteater Romawi di Kom el-Dikka", "Perjalanan santai kembali ke Kairo, tiba pada sore hari"] },
    ],
    comfort: { sleep: "Satu malam di hotel tepi laut di Aleksandria", drives: "Kairo ke Aleksandria pulang-pergi lewat jalan darat" },
    faqs: [
      { q: "Mengapa menginap, bukan tur sehari?", a: "Perjalanan darat pulang-pergi memakan lima sampai enam jam; sebagai tur sehari, Aleksandria hanya kebagian siangnya. Dengan menginap, Anda berada di sana untuk senja, makan malam, dan cahaya pagi — tiga jam terbaik kota ini — dengan tambahan biaya yang tidak besar." },
      { q: "Kapan Aleksandria paling indah?", a: "April sampai Oktober, ketika iklim Mediterania menjadi daya tarik utamanya. Pada musim panas suhunya 5–10 °C lebih sejuk daripada Kairo, dan kota ini menjadi tempat berlibur di tepi laut milik orang Mesir sendiri." },
      { q: "Apakah hidangan lautnya memang wajib dicoba?", a: "Sangat. Anda memilih ikan per berat dari pajangan es tangkapan hari itu, lalu ikan itu datang dibakar atau digoreng dengan lauk pendamping khas Aleksandria. Pemandu Anda tahu rumah makan corniche mana yang memang layak dengan reputasinya." },
    ],
  },

  // ===== Cairo to Luxor & Aswan =====
  {
    slug: "tour-3-day",
    localeSlug: "luxor-aswan-3-hari-termasuk-pesawat",
    metaTitle: "Luxor & Aswan 3 Hari dari Kairo, Termasuk Pesawat | Kemet",
    metaDescription: "Tiga hari di kuil dan makam Mesir Hulu dari Kairo — Karnak, Lembah Para Raja, Philae, dan Bendungan Tinggi — dengan penerbangan domestik sudah termasuk.",
    keywords: "tour luxor aswan 3 hari, paket wisata mesir hulu, kairo ke luxor naik pesawat, karnak lembah para raja philae, wisata aswan",
    crumb: "Luxor & Aswan, 3 hari",
    title: "Dari Kairo ke Luxor & Aswan",
    subtitle: "Tiga hari di kuil dan makam Mesir Hulu, dengan penerbangan domestik sudah termasuk dalam harga.",
    durationLabel: "3 hari / 2 malam",
    startPoint: "Kairo (termasuk penerbangan)",
    summary: "Putaran cepat lewat Luxor dan Aswan dengan penerbangan sudah termasuk — Karnak, Lembah Para Raja, Philae, dan Bendungan Tinggi — pergi dan pulang dari Kairo.",
    overview: "Ketika waktu terbatas tetapi Mesir Hulu yang memanggil, putaran dengan penerbangan termasuk ini menghadirkan situs-situs utama di selatan dalam tiga hari yang terfokus. Anda terbang dari Kairo ke Luxor untuk kuil-kuil di Tepi Timur dan makam-makam kerajaan di Tepi Barat, melanjutkan perjalanan darat ke Aswan untuk Bendungan Tinggi dan kuil pulau Philae, lalu terbang kembali ke Kairo. Penerbangan domestik sudah termasuk, sehingga jarak yang jauh seakan lenyap dan hari-hari Anda terisi monumen, bukan perpindahan.",
    itinerary: [
      { title: "Terbang ke Luxor — Tepi Timur", items: ["Penerbangan pagi Kairo–Luxor, disambut saat tiba", "Kompleks kuil Karnak", "Kuil Luxor dan menginap di Luxor"] },
      { title: "Tepi Barat & lanjut ke Aswan", items: ["Lembah Para Raja dan kuil pemakaman Hatshepsut", "Kolosus Memnon", "Perjalanan darat ke Aswan menyusuri Sungai Nil dan menginap"] },
      { title: "Aswan & terbang ke Kairo", items: ["Bendungan Tinggi Aswan dan Obelisk yang Belum Selesai", "Kuil pulau Philae dengan perahu motor", "Penerbangan sore kembali ke Kairo"] },
    ],
    comfort: { sleep: "Satu hotel di Luxor, lalu satu di Aswan", drives: "Luxor ke Aswan lewat jalan darat" },
    faqs: [
      { q: "Apakah penerbangan domestik benar-benar termasuk?", a: "Ya — penerbangan Kairo–Luxor maupun Aswan–Kairo sudah termasuk dalam harga. Anda hanya perlu mengatur sendiri penerbangan internasional ke dan dari Kairo." },
      { q: "Apakah tiga hari terlalu terburu-buru?", a: "Temponya cepat, tetapi urutannya tertata: penerbangan menghapus perjalanan darat yang panjang, sehingga setiap hari dihabiskan di monumen, bukan di jalan di antaranya." },
      { q: "Bisakah menambahkan Abu Simbel dari Aswan?", a: "Bisa, sebagai tambahan opsional dengan penerbangan pagi atau mobil pribadi. Ini menambah beberapa jam pada pagi di Aswan, jadi kami merencanakannya sejak awal." },
    ],
  },

  // ===== Fayoum Oasis =====
  {
    slug: "tour-fayoum",
    localeSlug: "wisata-oasis-fayoum-sehari",
    metaTitle: "Oasis Fayoum — Tur Privat Sehari dari Kairo | Kemet",
    metaDescription: "Danau Qarun, air terjun dan bukit pasir Wadi El Rayan, fosil paus Wadi Al-Hitan, dan desa tembikar Tunis — sehari di oasis hijau di barat daya Kairo.",
    keywords: "oasis fayoum, wisata fayoum dari kairo, wadi el rayan, lembah paus wadi al hitan, danau qarun",
    crumb: "Oasis Fayoum",
    title: "Oasis Fayoum",
    subtitle: "Sehari penuh di oasis hijau di barat daya Kairo — danau, air terjun di gurun, fosil paus, dan desa perajin tembikar.",
    durationLabel: "Sehari penuh (sekitar 10 jam)",
    startPoint: "Hotel di Kairo atau Giza",
    summary: "Danau Qarun, air terjun dan bukit pasir Wadi El Rayan, fosil paus Wadi Al-Hitan, dan para perajin tembikar desa Tunis — separuh Mesir yang lain, liar dan hijau.",
    overview: "Satu setengah jam di barat daya Kairo, cekungan Fayoum menukar monumen dengan bentang alam: danau garam yang luas, air terjun air tawar di tengah gurun, lembah fosil paus yang diakui UNESCO, dan desa perajin tembikar di lereng bukit. Hari penuh ini adalah pergantian suasana total dari kuil-kuil — cakrawala lapang, aneka burung, bukit pasir, dan makan siang ikan di tepi danau. Perjalanannya privat, dengan pemandu dan sopir Anda sepanjang hari.",
    itinerary: [
      { title: "Danau Qarun", text: "Dimulai di tepi Danau Qarun, Danau Moeris pada zaman kuno, tempat burung-burung migran berkumpul dan perahu-perahu nelayan tua berjajar di air. Kesan pertama tentang oasis ini sebelum masuk lebih dalam ke gurun." },
      { title: "Air terjun Wadi El Rayan", text: "Air terjun terbesar di Mesir, tempat dua danau Rayan tercurah di antara bukit pasir. Ada waktu untuk berjalan menyusuri tepiannya dan menikmati bentang alam yang sama sekali tidak mirip Lembah Nil." },
      { title: "Lembah Paus (Wadi Al-Hitan)", text: "Situs Warisan Dunia UNESCO yang menyimpan kerangka paus purba berusia 40 juta tahun, terawetkan di tempat yang dahulu merupakan laut purba. Sebuah museum terbuka tentang rentang waktu yang teramat panjang, di tengah hamparan pasir." },
      { title: "Danau Ajaib & Gunung Mudawara", text: "Danau yang dijuluki Danau Ajaib (Magic Lake), dialiri mata air mineral dan berganti warna mengikuti cahaya, di bawah bukit pasir Mudawara — tempat favorit untuk sandboarding dan untuk sejenak berdiam diri." },
      { title: "Desa tembikar Tunis & makan siang di tepi danau", text: "Perjalanan berakhir di Tunis, desa di lereng bukit yang terkenal dengan perajin dan studio tembikarnya, lalu makan siang ikan yang santai di tepi danau sebelum kembali ke Kairo." },
    ],
    faqs: [
      { q: "Apakah Fayoum cocok untuk keluarga?", a: "Ya — perpaduan danau, bukit pasir, dan fosil menarik bagi segala usia. Medannya mudah, dengan jalan kaki singkat, bukan pendakian panjang." },
      { q: "Apa yang sebaiknya dikenakan dan dibawa?", a: "Sepatu yang nyaman, pelindung matahari, dan lapisan pakaian tipis untuk angin dari danau. Bagian gurun bisa berdebu, jadi kacamata hitam akan membantu." },
      { q: "Seberapa jauh dari Kairo?", a: "Sekitar 90 menit hingga dua jam sekali jalan dengan kendaraan pribadi, tergantung letak hotel Anda dan lalu lintas saat keluar kota." },
    ],
  },

  // ===== Giza & the Grand Museum =====
  {
    slug: "tour-giza-museum",
    localeSlug: "tur-piramida-giza-dan-grand-egyptian-museum",
    metaTitle: "Piramida Giza & Grand Egyptian Museum, Tur Sehari | Kemet",
    metaDescription: "Piramida dan Sphinx di pagi hari, Grand Egyptian Museum di sore hari — keajaiban tertua dan museum terbaru dalam satu hari, dengan pemandu privat.",
    keywords: "tur piramida giza, grand egyptian museum, wisata giza sehari, koleksi tutankhamun, tour piramida privat",
    crumb: "Giza & GEM",
    title: "Giza & Grand Egyptian Museum",
    subtitle: "Piramida dan Sphinx di pagi hari, Grand Egyptian Museum di sore hari — keajaiban lama dan yang baru, dalam satu hari.",
    durationLabel: "Sehari penuh (sekitar 8 jam)",
    startPoint: "Hotel di Kairo atau Giza",
    summary: "Piramida Agung, panorama ketiga piramida, Kuil Lembah dan Sphinx, lalu Grand Egyptian Museum yang luas dan baru di sampingnya.",
    overview: "Hari ini menyandingkan keajaiban dunia tertua dengan museum terbaru yang dibangun untuk menyimpan harta karunnya. Pagi hari milik plateau Giza — piramida Khufu, Khafre, dan Menkaure, titik pandang panorama, dan Sphinx Agung yang menjaga kuil lembahnya. Sore hari berpindah ke Grand Egyptian Museum, museum arkeologi terbesar di dunia, yang galeri-galeri dan tangga agungnya akhirnya menghimpun koleksi Tutankhamun secara utuh. Pemandu dan transfer privat sepanjang hari.",
    itinerary: [
      { title: "Piramida Agung Khufu", text: "Berdiri di kaki satu-satunya keajaiban dunia kuno yang masih bertahan, piramida Khufu, dan pelajari bagaimana piramida ini didirikan. Masuk ke ruang-ruang di dalamnya tersedia sebagai tambahan opsional." },
      { title: "Khafre, Menkaure & panorama", text: "Lanjut ke piramida Khafre dan Menkaure dan ke titik pandang panorama tempat ketiganya berjajar di atas gurun — gambar klasik Giza." },
      { title: "Kuil Lembah & Sphinx Agung", text: "Menyusuri Kuil Lembah Khafre yang dibangun dari granit hingga ke kaki Sphinx Agung, penjaga bertubuh singa yang dipahat langsung dari batuan induk plateau." },
      { title: "Grand Egyptian Museum (GEM)", text: "Menyeberang ke Grand Egyptian Museum di samping plateau — tangga agungnya yang dipenuhi patung dan galeri Tutankhamun yang lengkap, koleksi unggulan Mesir modern." },
    ],
    faqs: [
      { q: "Bisakah kami masuk ke dalam Piramida Agung?", a: "Bisa, sebagai tambahan opsional. Tiket untuk ruang-ruang di dalamnya dijual dalam jumlah terbatas setiap hari; kami dapat mengamankannya atas permintaan, tergantung ketersediaan." },
      { q: "Apakah Grand Egyptian Museum sudah dibuka sepenuhnya?", a: "Galeri-galeri utama, tangga agung, dan koleksi Tutankhamun terbuka untuk pengunjung. Pemandu Anda akan memusatkan perhatian pada sorotan utama sehingga sore Anda tidak pernah terasa terburu-buru." },
      { q: "Seberapa banyak berjalan kaki pada hari ini?", a: "Sedang, di sekitar plateau dan di galeri-galeri museum. Kami menyesuaikan dengan langkah Anda, dengan jeda istirahat di tempat teduh." },
      { q: "Bisakah kami melihat galeri Tutankhamun secara privat?", a: "Bisa, sebagai tambahan opsional: galeri Tutankhamun dibuka hanya untuk rombongan Anda selama satu setengah jam, tanpa pengunjung lain di antara harta sang raja belia. Sebutkan saat Anda mengirim pertanyaan, agar dapat diatur untuk tanggal Anda." },
      { q: "Bisakah kami berkeliling plateau dengan mobil golf?", a: "Bisa, sebagai tambahan opsional yang privat. Mobil golf khusus untuk rombongan Anda membawa Anda berkeliling plateau, alih-alih berjalan kaki menempuh jarak panjang di antara monumen — sangat membantu bila membawa anak kecil, bagi tamu lanjut usia, atau di tengah panas siang." },
    ],
  },

  // ===== Saqqara, Memphis & Dahshur =====
  {
    slug: "tour-saqqara",
    localeSlug: "tur-saqqara-memphis-dahshur",
    metaTitle: "Saqqara, Memphis & Dahshur — Tur Privat Sehari | Kemet",
    metaDescription: "Piramida Bertingkat Djoser, reruntuhan terbuka Memphis, serta Piramida Bengkok dan Piramida Merah di Dahshur — kisah lahirnya piramida dalam satu hari.",
    keywords: "tur saqqara, piramida bertingkat djoser, piramida merah dahshur, memphis mesir, wisata sehari dari kairo",
    crumb: "Saqqara, Memphis & Dahshur",
    title: "Saqqara, Memphis & Dahshur",
    subtitle: "Tempat lahirnya piramida — dari piramida bertingkat pertama milik Djoser hingga makam-makam geometris agung di Dahshur.",
    durationLabel: "Sehari penuh (sekitar 8 jam)",
    startPoint: "Hotel di Kairo atau Giza",
    summary: "Piramida Bertingkat Djoser, reruntuhan terbuka Memphis, serta Piramida Bengkok dan Piramida Merah di Dahshur — kisah bagaimana piramida diciptakan.",
    overview: "Sebelum Giza, ada Saqqara. Hari ini menelusuri lahirnya piramida di tiga situs di selatan Kairo, yang sering lebih sepi daripada Giza dan justru makin berkesan karenanya. Anda memulai di Piramida Bertingkat Djoser, bangunan batu monumental tertua di dunia, menyusuri sisa-sisa Memphis di alam terbuka, ibu kota pertama, dan mengakhiri hari di Dahshur, tempat Piramida Bengkok dan Piramida Merah memperlihatkan lompatan teknik menuju bentuk piramida sejati. Privat sepanjang hari.",
    itinerary: [
      { title: "Piramida Bertingkat Djoser", text: "Pusat Saqqara — piramida bertingkat yang dirancang Imhotep untuk Raja Djoser, monumen batu besar tertua di dunia, di tengah kompleks pemakamannya yang luas." },
      { title: "Memphis & patung raksasa Ramses II", text: "Museum terbuka Memphis, ibu kota kuno Mesir yang bersatu, tempat sebuah patung raksasa Ramses II yang berbaring dan sebuah sphinx alabaster berukiran halus." },
      { title: "Piramida Bengkok di Dahshur", text: "Di Dahshur, Piramida Bengkok milik Sneferu, yang sudut kemiringannya berubah — jejak saat para insinyur kuno mengoreksi arah di tengah pembangunan." },
      { title: "Piramida Merah", text: "Piramida Merah di dekatnya, piramida sejati pertama yang berhasil, yang dapat Anda masuki untuk turun ke ruang-ruangnya yang berlangit-langit bertingkat (corbel)." },
    ],
    faqs: [
      { q: "Apa bedanya Saqqara dengan Giza?", a: "Saqqara lebih tua dan biasanya lebih sepi. Situs ini menceritakan bagaimana piramida berkembang, dari bentuk bertingkat Djoser hingga piramida sejati di Dahshur — pelengkap sempurna untuk hari di Giza." },
      { q: "Bisakah kami masuk ke dalam piramida di Dahshur?", a: "Bisa — Piramida Merah umumnya terbuka untuk dimasuki, dengan lorong menurun yang dilalui sambil membungkuk menuju ruang pemakaman. Pemandu Anda akan memberi saran pada hari itu." },
      { q: "Apakah ini hari pertama yang baik di Kairo?", a: "Sangat baik — keramaian lebih sedikit, dan alur ceritanya jelas sehingga kunjungan ke Giza sesudahnya terasa lebih kaya." },
    ],
  },

  // ===== Religious Cairo & the Citadel =====
  {
    slug: "tour-religious-citadel",
    localeSlug: "wisata-religi-kairo-dan-benteng-salahuddin",
    metaTitle: "Wisata Religi Kairo & Benteng Salahuddin, Privat | Kemet",
    metaDescription: "Gereja Gantung, Sinagoge Ben Ezra, dan Gereja Abu Serga di Kairo Lama, lalu Benteng Salahuddin dan Masjid Muhammad Ali yang berlapis alabaster.",
    keywords: "wisata religi kairo, gereja gantung kairo, benteng salahuddin, masjid muhammad ali, kairo koptik",
    crumb: "Wisata religi Kairo",
    title: "Kairo Religi & Benteng Salahuddin",
    subtitle: "Ragam iman Kairo dalam satu hari — gereja-gereja Koptik, sinagoge kuno, dan benteng agung bermahkota masjid.",
    durationLabel: "Sehari penuh (sekitar 8 jam)",
    startPoint: "Hotel di Kairo atau Giza",
    summary: "Gereja Gantung, Sinagoge Ben Ezra, dan Gereja Abu Serga di Kairo Lama, lalu Benteng Salahuddin dan Masjid Muhammad Ali yang berlapis alabaster.",
    overview: "Warisan religi Kairo menumpuk sejarah Koptik, Yahudi, dan Islam dalam beberapa kilometer persegi saja. Hari ini bergerak dari lorong-lorong Kairo Lama — Gereja Gantung, Sinagoge Ben Ezra yang kuno, dan Gereja Abu Serga — naik ke Benteng Salahuddin dari abad pertengahan, yang dimahkotai Masjid Muhammad Ali berlapis alabaster dengan pemandangan luas ke seluruh kota. Hari yang reflektif dan sarat suasana, dipandu Egyptologist Anda.",
    itinerary: [
      { title: "Gereja Gantung", text: "Dimulai di Kairo Koptik, di Gereja Gantung yang seolah tergantung di atas menara gerbang Romawi — salah satu gereja tertua di Mesir, dengan sekat kayu yang halus dan ikon-ikonnya." },
      { title: "Sinagoge Ben Ezra & Abu Serga", text: "Menyusuri lorong-lorong sempit menuju Sinagoge Ben Ezra dan Gereja Abu Serga, yang menurut tradisi menandai tempat Keluarga Kudus berlindung di Mesir." },
      { title: "Benteng Salahuddin", text: "Naik ke Benteng Salahuddin, benteng abad pertengahan yang menguasai Kairo selama berabad-abad, dengan panorama yang menjangkau hingga piramida pada hari yang cerah." },
      { title: "Masjid Muhammad Ali", text: "Diakhiri di dalam Masjid Muhammad Ali yang berlapis alabaster, bangunan ikonis bergaya Utsmaniyah yang kubah-kubahnya membentuk cakrawala Kairo." },
    ],
    faqs: [
      { q: "Apakah ada aturan berpakaian?", a: "Ya — pakaian sopan diwajibkan di situs-situs religi: bahu dan lutut tertutup, dan alas kaki dilepas di masjid. Bawalah selendang; kami akan memandu Anda pada hari itu." },
      { q: "Apakah situs-situsnya berdekatan?", a: "Situs-situs di Kairo Koptik dapat dicapai satu sama lain dengan berjalan kaki; Benteng hanya sebentar dengan mobil pribadi, sehingga hari berjalan dengan nyaman." },
      { q: "Apakah situs-situsnya akan buka?", a: "Kami menyusun rencana dengan memperhitungkan waktu salat dan penutupan apa pun agar kunjungan Anda lancar. Memotret umumnya diperbolehkan, dengan beberapa pembatasan di bagian dalam." },
    ],
  },

  // ===== Cairo Museums =====
  {
    slug: "tour-cairo-museums",
    localeSlug: "tur-museum-kairo-dan-mumi-kerajaan",
    metaTitle: "Museum Kairo — Tur Sehari dengan Aula Mumi Kerajaan | Kemet",
    metaDescription: "Harta Museum Mesir di Tahrir, lalu Museum Nasional Peradaban Mesir (NMEC) dan Aula Mumi Kerajaannya — dua koleksi besar dalam satu hari.",
    keywords: "museum mesir kairo, mumi firaun kairo, museum nasional peradaban mesir, aula mumi kerajaan, wisata museum kairo",
    crumb: "Museum Kairo",
    title: "Museum-Museum Kairo",
    subtitle: "Dua koleksi besar dalam satu hari — Museum Mesir yang bersejarah dan Museum Nasional Peradaban Mesir, dengan Mumi Kerajaan.",
    durationLabel: "Sehari penuh (sekitar 7 jam)",
    startPoint: "Hotel di Kairo atau Giza",
    summary: "Harta karun Museum Mesir di Tahrir, lalu Museum Nasional Peradaban Mesir dan Aula Mumi Kerajaannya.",
    overview: "Hari untuk mereka yang mencintai benda-benda itu sendiri. Anda memulai di Museum Mesir di Tahrir yang sarat kisah, yang aula-aula berusia seabad menyimpan konsentrasi harta firaun terpadat di mana pun, lalu berpindah ke Museum Nasional Peradaban Mesir (NMEC) yang modern, tempat Aula Mumi Kerajaan yang agung menghadirkan para raja dan ratu Kerajaan Baru di galeri-galeri yang hening dengan suhu yang dijaga. Hari bagi para penikmat sejati, dituturkan oleh Egyptologist Anda.",
    itinerary: [
      { title: "Museum Mesir, Tahrir", text: "Museum tua yang megah di Lapangan Tahrir — patung, sarkofagus, papirus, dan emas Kerajaan Baru, dijelajahi dari satu sorotan ke sorotan berikutnya bersama pemandu Anda." },
      { title: "Museum Nasional Peradaban Mesir", text: "Menyeberangi kota menuju NMEC di Fustat, museum modern yang menelusuri Mesir dari prasejarah hingga masa kini dalam satu alur kisah yang luas." },
      { title: "Aula Mumi Kerajaan", text: "Turun ke Aula Mumi Kerajaan yang temaram, tempat jasad para firaun yang terawetkan — di antaranya Ramses II dan Hatshepsut — disemayamkan dalam tata pamer yang penuh hormat." },
    ],
    faqs: [
      { q: "Apakah Aula Mumi Kerajaan termasuk?", a: "Ya — Aula Mumi Kerajaan adalah bagian dari kunjungan. Aula ini tercakup dalam tiket NMEC, yang — seperti setiap tiket pada tur sehari kami — dibayar sesuai tarif resmi di loket tanpa tambahan apa pun. Ruangannya tenang dan penuh hormat, dan memotret tidak diizinkan di dalamnya." },
      { q: "Apa beda kedua museum ini?", a: "Museum Mesir padat, bersejarah, dan penuh harta; NMEC modern dan bercerita, dengan mumi sebagai pusatnya. Bersama-sama, keduanya memberi gambaran yang utuh." },
      { q: "Apakah ini terlalu banyak untuk satu hari?", a: "Tidak, bila ada pemandu yang memilihkan sorotannya. Kami memusatkan perhatian pada benda-benda terpenting di masing-masing museum, dengan jeda di antara keduanya." },
    ],
  },

  // ===== Alexandria Sightseeing =====
  {
    slug: "tour-alexandria",
    localeSlug: "tur-sehari-aleksandria-dari-kairo",
    metaTitle: "Aleksandria — Tur Privat Sehari dari Kairo | Kemet",
    metaDescription: "Katakombe Kom El Shoqafa, Pilar Pompey, Benteng Qaitbay di tapak Pharos kuno, dan Bibliotheca Alexandrina, dengan makan siang hidangan laut.",
    keywords: "tur sehari aleksandria, wisata alexandria dari kairo, benteng qaitbay, bibliotheca alexandrina, katakombe kom el shoqafa",
    crumb: "Aleksandria, sehari",
    title: "Menjelajah Aleksandria",
    subtitle: "Sehari penuh di tepi Mediterania — katakombe, pilar Romawi, benteng yang dikelilingi laut, dan perpustakaan modern yang agung.",
    durationLabel: "Sehari penuh (sekitar 11 jam)",
    startPoint: "Hotel di Kairo atau Giza",
    summary: "Katakombe Kom El Shoqafa, Pilar Pompey, Benteng Qaitbay di tapak Pharos lama, dan Bibliotheca Alexandrina, dengan makan siang hidangan laut.",
    overview: "Kota Aleksander mengenakan masa lalu Yunani-Romawinya dengan ringan di sepanjang corniche Mediterania yang melengkung. Hari penuh ini mencakup Katakombe Kom El Shoqafa di bawah tanah, Pilar Pompey yang menjulang, Benteng Qaitbay yang dibangun di atas fondasi mercusuar Pharos yang legendaris, dan Bibliotheca Alexandrina yang modern dan menjulang tinggi — pewaris Perpustakaan kuno. Makan siang hidangan laut di tepi laut sudah menjadi bagian dari kunjungan. Pemandu dan transfer privat dari Kairo.",
    itinerary: [
      { title: "Katakombe Kom El Shoqafa", text: "Turun ke Katakombe Kom El Shoqafa, nekropolis Romawi bertingkat tempat gaya Mesir dan klasik berpadu dalam batu berukir — salah satu keajaiban paling ganjil dari zaman kuno." },
      { title: "Pilar Pompey", text: "Kunjungi Pilar Pompey, tiang kemenangan Romawi yang besar, menjulang dari reruntuhan Serapeum dan diapit sphinx-sphinx granit." },
      { title: "Benteng Qaitbay", text: "Menyusuri tembok laut Benteng Qaitbay, yang didirikan tepat di tempat Mercusuar Pharos — salah satu keajaiban dunia kuno — dahulu berdiri." },
      { title: "Bibliotheca Alexandrina & makan siang hidangan laut", text: "Diakhiri di Bibliotheca Alexandrina yang modern dan dramatis, Perpustakaan Aleksandria yang lahir kembali, setelah makan siang hidangan laut yang santai di tepi Mediterania." },
    ],
    faqs: [
      { q: "Berapa lama perjalanan dari Kairo?", a: "Sekitar dua setengah hingga tiga jam sekali jalan melalui jalan gurun — karena itulah ini perjalanan sehari penuh yang panjang, tetapi sepadan." },
      { q: "Bisakah kami pergi dengan kereta saja?", a: "Bisa — bagi yang lebih menyukainya, kami dapat mengatur perjalanan dengan kereta dan menyambut Anda di Aleksandria bersama pemandu dan kendaraan privat Anda. Cukup tanyakan." },
      { q: "Apakah Bibliotheca Alexandrina layak dikunjungi?", a: "Sangat layak — arsitekturnya saja sudah memukau, dan gedung ini berdiri sebagai gema yang disengaja dari Perpustakaan kuno yang membuat kota ini termasyhur." },
    ],
  },

  // ===== Giza Pyramids & Sphinx =====
  {
    slug: "tour-giza-sphinx",
    localeSlug: "tur-piramida-giza-setengah-hari",
    metaTitle: "Piramida Giza & Sphinx — Tur Privat Setengah Hari | Kemet",
    metaDescription: "Piramida Agung, piramida Khafre dan Menkaure, titik panorama, serta Kuil Lembah dan Sphinx Agung — Giza dalam satu pagi bersama pemandu privat.",
    keywords: "tur piramida giza, sphinx giza, piramida giza setengah hari, wisata piramida dari kairo, pemandu privat piramida",
    crumb: "Piramida Giza",
    title: "Piramida Giza & Sphinx",
    subtitle: "Setengah hari yang terfokus di antara tiga piramida agung dan Sphinx, dengan titik pandang panorama yang klasik.",
    durationLabel: "Setengah hari (sekitar 5 jam)",
    startPoint: "Hotel di Kairo atau Giza",
    summary: "Piramida Agung, piramida Khafre dan Menkaure, titik pandang panorama, serta Kuil Lembah dengan Sphinx Agung — Giza dalam satu pagi.",
    overview: "Bagi pelancong dengan waktu terbatas atau sela waktu di hari kedatangan, setengah hari ini menghadirkan plateau Giza tanpa basa-basi. Anda menyaksikan Piramida Agung Khufu, piramida Khafre dan Menkaure di sebelahnya, titik pandang panorama tempat ketiganya berjajar, dan Kuil Lembah yang mengarah ke Sphinx Agung. Pemandu privat membuat kunjungan singkat ini bermakna, dan tur ini berpadu rapi dengan sore yang bebas atau kunjungan ke Grand Egyptian Museum.",
    itinerary: [
      { title: "Piramida Agung Khufu", text: "Dimulai di kaki Piramida Agung, keajaiban dunia kuno terakhir yang masih berdiri, dengan pemandu yang menjelaskan bagaimana dan mengapa piramida ini dibangun." },
      { title: "Khafre & Menkaure", text: "Lanjut ke piramida Khafre — yang puncaknya masih berlapis batu selubung aslinya — dan piramida Menkaure yang lebih kecil." },
      { title: "Titik pandang panorama", text: "Berhenti sejenak di panorama gurun tempat ketiga piramida berjajar, foto klasik Giza, dengan pilihan naik unta atau kuda di dekatnya." },
      { title: "Kuil Lembah & Sphinx Agung", text: "Diakhiri di Kuil Lembah dari granit dan Sphinx Agung, penjaga raksasa yang dipahat dari batuan dasar plateau." },
    ],
    faqs: [
      { q: "Mengapa memilih setengah hari, bukan sehari penuh?", a: "Ideal untuk hari kedatangan atau keberangkatan, atau bila Anda ingin melihat piramida tanpa museum. Jika ingin sekaligus ke Grand Egyptian Museum, pilih tur sehari penuh kami, Giza & Grand Egyptian Museum." },
      { q: "Bisakah saya naik unta di piramida?", a: "Bisa — naik unta dan kuda tersedia di plateau sebagai tambahan opsional. Pemandu Anda akan membantu mendapatkan harga yang wajar pada hari itu." },
      { q: "Bisakah kami masuk ke dalam piramida?", a: "Masuk ke bagian dalam tersedia sebagai tambahan opsional, untuk Piramida Agung atau salah satu piramida yang lebih kecil, tergantung kuota tiket harian." },
      { q: "Bisakah kami berkeliling plateau dengan mobil golf?", a: "Bisa, sebagai tambahan opsional yang privat. Mobil golf khusus untuk rombongan Anda membawa Anda berkeliling plateau, alih-alih berjalan kaki menempuh jarak panjang di antara monumen — sangat membantu bila membawa anak kecil, bagi tamu lanjut usia, atau di tengah panas siang." },
    ],
  },

  // ===== Abu Simbel Private Excursion =====
  {
    slug: "tour-abu-simbel",
    localeSlug: "tur-abu-simbel-dari-aswan",
    metaTitle: "Abu Simbel dari Aswan — Tur Privat Sehari | Kemet",
    metaDescription: "Kuil-kuil gunung Ramses II di atas Danau Nasser: berangkat sebelum fajar dari Aswan, dua tempat suci yang dipahat di batu, kembali untuk makan siang.",
    keywords: "tur abu simbel dari aswan, kuil abu simbel, kuil ramses ii, kuil nefertari, festival matahari abu simbel",
    crumb: "Abu Simbel",
    title: "Tur Privat Abu Simbel",
    subtitle: "Kuil-kuil gunung Ramses II di atas Danau Nasser — jalan gurun saat fajar, dua tempat suci yang dipahat di batu, dan kembali di Aswan untuk makan siang.",
    durationLabel: "Sehari penuh (sekitar 8 jam, dari Aswan)",
    startPoint: "Hotel atau kapal pesiar di Aswan",
    summary: "Kuil-kuil batu raksasa Ramses II — dipahat di lereng gunung Nubia, dipindahkan blok demi blok ke atas permukaan danau yang naik, dan masih sejajar dengan matahari.",
    overview: "Abu Simbel adalah tujuan wajib di ujung selatan: dua kuil yang dipahat langsung ke dalam gunung batu pasir oleh Ramses II sekitar tahun 1264 SM, dengan empat patung raksasa duduk setinggi dua puluh meter di bagian depannya. Ketika Danau Nasser naik di belakang Bendungan Tinggi pada tahun 1960-an, operasi penyelamatan UNESCO memotong seluruh kompleks menjadi seribu blok dan membangunnya kembali enam puluh lima meter lebih tinggi — prestasi teknik yang hampir sama menakjubkannya dengan aslinya. Tur privat ini berjalan dengan cara klasik: berangkat dari Aswan sebelum fajar melintasi gurun terbuka, tiba saat cahaya pertama menyentuh patung-patung raksasa, waktu yang leluasa di dalam Kuil Agung maupun tempat suci Nefertari yang lebih kecil bersama Egyptologist Anda, dan kembali ke Aswan selepas tengah hari. Dua kali setahun, pada 22 Februari dan 22 Oktober, matahari terbit mencapai ruang suci terdalam — tanyakan kepada kami soal menyesuaikan tanggal Anda.",
    itinerary: [
      { title: "Jalan gurun saat fajar", text: "Berangkat dari Aswan sekitar pukul 4 pagi dengan kendaraan pribadi, melintasi 280 km gurun terbuka saat langit mulai terang — perjalanan dengan keindahannya sendiri yang bersahaja, kopi disediakan." },
      { title: "Kuil Agung Ramses II", text: "Berdiri di hadapan empat patung raksasa yang duduk, lalu masuk melewati aula-aula berpilar Osiris menuju ruang suci tempat empat dewa duduk — disejajarkan sedemikian rupa sehingga matahari hanya menjangkau mereka dua pagi dalam setahun." },
      { title: "Kuil Nefertari", text: "Kuil yang lebih kecil, dipersembahkan Ramses untuk permaisurinya dan Dewi Hathor — salah satu dari sedikit sekali kuil Mesir tempat patung seorang ratu berdiri sama besar dengan patung sang raja." },
      { title: "Kembali ke Aswan", text: "Kembali melintasi gurun dan tiba di Aswan selepas tengah hari, tepat waktu untuk makan siang, keberangkatan kapal pesiar Anda, atau berlayar dengan felucca dalam cahaya keemasan sore." },
    ],
    faqs: [
      { q: "Mengapa hari dimulai pukul 4 pagi?", a: "Tiga alasan: jalan gurun dibuka dalam jendela waktu yang terorganisasi, kuil-kuil paling sepi dan sejuk saat baru dibuka, dan kembali selepas tengah hari menjaga hari Anda di Aswan — atau jadwal kapal pesiar — tetap utuh." },
      { q: "Apakah bisa terbang, bukan lewat jalan darat?", a: "Bisa — EgyptAir mengoperasikan penerbangan singkat 45 menit dengan jadwal terbatas, yang memangkas perjalanan pulang-pergi menjadi sekitar lima jam. Kursinya cepat habis; beri tahu kami saat memesan dan kami akan memberikan penawaran untuk kedua cara." },
      { q: "Apa itu Festival Matahari?", a: "Pada 22 Februari dan 22 Oktober, matahari terbit menembus 60 meter ke dalam Kuil Agung dan menerangi dewa-dewa yang duduk di ruang suci — keselarasan yang dirancang para arsitek Ramses tiga ribu tahun yang lalu. Berkunjung pada tanggal-tanggal itu perlu direncanakan berbulan-bulan sebelumnya; kami mengaturnya atas permintaan." },
    ],
  },
];
