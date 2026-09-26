import type { UltraText } from "./types";

export const id: UltraText = {
  metaTitle: "Tur Ultra Mewah ke Mesir — Empat Perjalanan Privat | Kemet",
  metaDescription:
    "Kemet Ultra: Piramida Agung dibuka hanya untuk Anda, makan malam di dalam Karnak, dahabiya atau yacht privat, suite terbaik. 7–15 hari, harga terbuka.",
  keywords:
    "tur ultra mewah mesir, perjalanan privat mewah mesir, piramida agung dibuka privat, makan malam kuil karnak, sewa dahabiya privat, yacht privat laut merah, suite mena house, old cataract aswan, oberoi philae",
  crumb: "Kemet Ultra",

  heroTag: "Kemet Ultra · atas permintaan privat",
  h1: ["Mesir, dibuka", "hanya untuk Anda"],
  lede:
    "Empat perjalanan privat di puncak pasar Mesir: Piramida Agung dibuka untuk rombongan Anda, makan malam di dalam Karnak setelah gerbang ditutup, dahabiya atau yacht tanpa tamu lain, dan hotel-hotel legendaris di kamar terbaiknya. Harga dicantumkan terbuka, dan setiap unsur dikonfirmasi tertulis sebelum apa pun dibayar.",
  ctaPrimary: "Bicara secara privat",
  ctaQuiet: "atau kirim permintaan rahasia",

  facts: [
    ["Dibuka untuk Anda", "Piramida Agung dan Karnak, tanpa pengunjung lain di dalam"],
    ["Tak ada orang lain di kapal", "dahabiya sewaan di Sungai Nil, yacht berawak di Laut Merah"],
    ["Harga dulu, lalu bukti", "setiap harga dipublikasikan, setiap unsur dikonfirmasi tertulis sebelum uang muka"],
  ],

  question: "Apa itu Kemet Ultra?",
  answer: ({ from2, to2, from4 }) =>
    `Kemet Ultra adalah tingkat tertinggi Kemet: empat perjalanan Mesir yang sepenuhnya privat selama 7 hingga 15 hari, dengan Piramida Agung dibuka hanya untuk rombongan Anda, makan malam di dalam Karnak setelah tutup, dahabiya atau yacht sewaan, dan suite di Mena House, Old Cataract, serta Oberoi. Untuk dua orang ${from2}–${to2} per orang; untuk empat orang mulai ${from4}.`,

  journeysOverline: "Perjalanan",
  journeysTitle: ["Empat cara menjelajah Mesir", "di tingkat ini"],

  labels: {
    duration: (d, n) => `${d} hari / ${n} malam`,
    from: "Mulai",
    perPersonTwo: "per orang, untuk dua orang",
    perPersonFour: (p) => `${p} per orang untuk empat orang`,
    stays: "Tempat menginap",
    nights: (n) => `${n} malam`,
    dayByDay: "Hari demi hari",
    day: "Hari",
    enquire: (t) => `Tanyakan ${t}`,
    priceNote: (peak) =>
      `Harga dalam euro, per orang, untuk Oktober 2026 hingga September 2027, sudah termasuk semua unsur yang disebut di halaman ini. Penerbangan internasional dan tip tidak termasuk. Pekan puncak — 20 Desember hingga 5 Januari, serta pekan Paskah — dikenakan tambahan ${peak}%.`,
  },

  place: { giza: "Giza", cairo: "Kairo", luxor: "Luxor, Tepi Barat", aswan: "Aswan", nile: "Di Sungai Nil", redsea: "Laut Merah" },
  room: {
    pyramidSuite: "Suite dengan pemandangan piramida",
    nileSuite: "Suite dengan pemandangan Sungai Nil",
    palaceWing: "Sayap bersejarah Palace, pemandangan Nil",
    suite: "Suite",
    charter: "Sewa penuh — seluruh kapal",
    cruiseSuite: "Suite mewah",
    poolSuite: "Grand suite dengan kolam renang pribadi",
  },
  dahabiya: "Dahabiya privat",

  journeys: {
    "private-pharaoh": {
      title: "Firaun Privat",
      kicker: "Piramida Agung dan Karnak, masing-masing dibuka hanya untuk rombongan Anda",
      route: "Kairo · Giza · Luxor · Abydos",
      body:
        "Satu minggu yang dibangun di sekitar dua pintu yang biasanya tertutup. Di Giza, Piramida Agung dibuka dua jam hanya untuk rombongan Anda; di Luxor, Karnak tetap dibuka untuk Anda setelah jam tutup dan makan malam disajikan di dalam kompleks kuil. Di antaranya: Grand Egyptian Museum bersama Egyptologist senior, makam-makam terindah di Lembah Para Raja, dan dua kuil yang jarang dicapai pengunjung.",
      highlights: [
        "Piramida Agung dibuka privat — dua jam, hanya rombongan Anda",
        "Karnak dibuka setelah jam tutup, dengan makan malam di kompleks kuil",
        "Makam Seti I, Nefertari, dan Tutankhamun",
        "Keranjang balon udara privat dan felucca privat",
        "Satu Egyptologist senior sepanjang perjalanan, sopir siap sedia",
        "Layanan VIP di setiap kedatangan dan keberangkatan",
      ],
      days: [
        { t: "Tiba, disambut di pintu pesawat", d: "Layanan VIP melewati imigrasi, lalu Mena House, tempat Piramida Agung memenuhi jendela." },
        { t: "Grand Egyptian Museum", d: "Harta lengkap Tutankhamun dan Tangga Agung bersama Egyptologist senior; sore hari bebas." },
        { t: "Sendiri di dalam Piramida Agung", d: "Dua jam di dalam piramida Khufu yang dibuka hanya untuk Anda, lalu Piramida Bertingkat dan Serapeum di Saqqara." },
        { t: "Luxor, dan Karnak di malam hari", d: "Terbang ke selatan dengan layanan VIP; malam harinya Karnak dibuka untuk Anda dan makan malam disajikan di kompleks kuil." },
        { t: "Balon saat fajar dan makam raja", d: "Keranjang privat di atas Tepi Barat, lalu makam Seti I, Tutankhamun, dan Ratu Nefertari." },
        { t: "Abydos dan Dendera", d: "Dua kuil terindah di Mesir dengan mobil privat, makan siang di jalan, dan matahari terbenam di atas felucca privat." },
        { t: "Keberangkatan", d: "Terbang ke Kairo, didampingi hingga penerbangan internasional Anda." },
      ],
    },
    "royal-nile": {
      title: "Nil Kerajaan",
      kicker: "Dahabiya disewa untuk rombongan Anda, dari Aswan ke Esna",
      route: "Kairo · Aswan · Abu Simbel · Sungai Nil · Luxor",
      body:
        "Empat malam di dahabiya layar tanpa tamu lain: awak, koki, dan tempat berlabuh adalah milik Anda, dan kapal bisa singgah di tempat yang tak bisa dicapai kapal besar. Sebelumnya, Kairo dengan Piramida Agung dibuka privat dan satu malam di Old Cataract; Abu Simbel dengan pesawat privat; dan di akhir, Karnak dibuka untuk makan malam Anda.",
      highlights: [
        "Sewa penuh dahabiya kelas utama — tanpa tamu lain",
        "Piramida Agung dibuka privat; makan malam di Karnak setelah tutup",
        "Abu Simbel dengan pesawat privat",
        "Old Cataract, sayap bersejarah Palace, menghadap Sungai Nil",
        "Makam Seti I dan Nefertari; balon udara privat",
        "Layanan VIP di setiap kedatangan dan keberangkatan",
      ],
      days: [
        { t: "Tiba, disambut di pintu pesawat", d: "Layanan VIP, lalu Four Seasons at The First Residence di atas Sungai Nil." },
        { t: "Grand Egyptian Museum", d: "Harta Tutankhamun dan Tangga Agung bersama Egyptologist senior; sore yang santai." },
        { t: "Sendiri di dalam Piramida Agung", d: "Dua jam privat di dalam piramida Khufu, lalu Piramida Bertingkat dan Serapeum di Saqqara." },
        { t: "Aswan dan Old Cataract", d: "Penerbangan pagi ke selatan; Philae dengan perahu privat, lalu matahari terbenam dari teras tempat Agatha Christie pernah menginap." },
        { t: "Abu Simbel, lalu naik kapal", d: "Kuil-kuil Ramses II di cahaya pertama, dengan pesawat privat; kembali untuk makan siang, dan dahabiya Anda berlayar." },
        { t: "Kom Ombo", d: "Berlayar ke utara menuju kuil ganda Sobek dan Horus; bermalam di tepian yang sunyi." },
        { t: "Gebel el-Silsila dan Edfu", d: "Tambang batu pasir kuno dan kapel-kapelnya, lalu Edfu, kuil paling utuh di Mesir." },
        { t: "El Kab", d: "Makam pahatan batu yang jarang dilihat orang, sore terakhir di bawah layar, dan makan malam di dek." },
        { t: "Luxor, dan Karnak di malam hari", d: "Turun di Esna; makam Seti I dan Nefertari; Karnak dibuka setelah tutup, dengan makan malam di kompleks kuil." },
        { t: "Balon, lalu keberangkatan", d: "Keranjang privat saat fajar di atas Tepi Barat; terbang ke Kairo dan keberangkatan VIP." },
      ],
    },
    "karnak-to-coral-sea": {
      title: "Dari Karnak ke Laut Karang",
      kicker: "Oberoi Philae menyusuri Nil, lalu yacht privat di Laut Merah",
      route: "Kairo · Luxor · Sungai Nil · Aswan · Abu Simbel · Laut Merah",
      body:
        "Pelayaran Nil klasik di kapal paling elegan di sungai itu, dalam suite, lalu ditutup dengan layak: pesawat privat dari Aswan ke Laut Merah, suite dengan kolam renang sendiri, dan yacht berawak untuk seharian di terumbu Giftun. Di sepanjang jalan, Piramida Agung dan Karnak dibuka untuk Anda.",
      highlights: [
        "Oberoi Philae, empat malam di suite mewah",
        "Piramida Agung dibuka privat; makan malam di Karnak setelah tutup",
        "Pesawat privat ke Abu Simbel dan terus ke Laut Merah",
        "Yacht bermotor berawak untuk satu hari penuh",
        "Suite di Old Cataract dan Oberoi, Sahl Hasheesh",
        "Layanan VIP di setiap kedatangan dan keberangkatan",
      ],
      days: [
        { t: "Tiba, disambut di pintu pesawat", d: "Layanan VIP, lalu Mena House dengan Piramida Agung di jendela." },
        { t: "Grand Egyptian Museum", d: "Harta Tutankhamun bersama Egyptologist senior; sore hari bebas." },
        { t: "Sendiri di dalam Piramida Agung", d: "Dua jam privat di dalam piramida Khufu, lalu Piramida Bertingkat dan Serapeum di Saqqara." },
        { t: "Luxor, naik Oberoi Philae", d: "Terbang ke selatan dan naik kapal; malam harinya Karnak dibuka untuk Anda, dengan makan malam di kompleks kuil." },
        { t: "Tepi Barat", d: "Balon udara privat saat fajar, makam Seti I dan Nefertari, lalu kapal berlayar ke selatan." },
        { t: "Esna dan Edfu", d: "Melewati pintu air Esna menuju Kuil Horus di Edfu." },
        { t: "Kom Ombo ke Aswan", d: "Kuil tepi sungai di Kom Ombo, dan Aswan menjelang malam." },
        { t: "Old Cataract", d: "Turun di Aswan; Philae dengan perahu privat; felucca privat di antara pulau-pulau saat matahari terbenam." },
        { t: "Abu Simbel dengan pesawat privat", d: "Kuil-kuil Ramses II di cahaya pertama, kembali ke Aswan untuk makan siang dan sore yang tenang." },
        { t: "Ke Laut Merah, secara privat", d: "Pesawat privat ke Hurghada dan Oberoi di Sahl Hasheesh — suite dengan kolam renang sendiri." },
        { t: "Sehari di atas yacht", d: "Yacht bermotor berawak menuju terumbu Giftun: snorkeling, makan siang di kapal, kembali saat matahari terbenam." },
        { t: "Keberangkatan", d: "Terbang pulang dari Hurghada, atau ke Kairo untuk penerbangan lanjutan, dengan layanan VIP." },
      ],
    },
    "grand-odyssey": {
      title: "Odisei Privat Agung",
      kicker: "Setiap perpindahan privat — pesawat, dahabiya, dan yacht",
      route: "Kairo · Aswan · Abu Simbel · Sungai Nil · Luxor · Laut Merah",
      body:
        "Seluruh Mesir tanpa satu momen pun yang dibagi dengan orang lain. Pesawat privat di setiap rute domestik; dahabiya disewa empat malam antara Aswan dan Esna; Piramida Agung dan Karnak dibuka untuk Anda; serta tiga malam di Laut Merah dengan dua hari di atas yacht Anda sendiri. Dirancang untuk kunjungan pertama yang ingin menjadi yang paling berkesan.",
      highlights: [
        "Pesawat privat di setiap rute domestik",
        "Sewa penuh dahabiya selama empat malam",
        "Piramida Agung dibuka privat; makan malam di Karnak setelah tutup",
        "Dua hari di atas yacht berawak",
        "Suite di Mena House, Old Cataract, Al Moudira, dan Oberoi",
        "Satu Egyptologist dan satu asisten pribadi sepanjang perjalanan",
      ],
      days: [
        { t: "Tiba, disambut di pintu pesawat", d: "Layanan VIP, lalu Mena House dengan Piramida Agung di jendela." },
        { t: "Grand Egyptian Museum", d: "Harta Tutankhamun bersama Egyptologist senior; sore yang santai." },
        { t: "Piramida Agung, Saqqara, dan Dahshur", d: "Dua jam privat di dalam piramida Khufu, lalu Piramida Bertingkat dan Piramida Merah." },
        { t: "Dengan pesawat privat ke Aswan", d: "Old Cataract, dan Philae dengan perahu privat di sore hari." },
        { t: "Abu Simbel", d: "Dengan pesawat privat di cahaya pertama; saat matahari terbenam, felucca privat di antara pulau-pulau." },
        { t: "Di atas dahabiya Anda", d: "Kapal milik Anda sejak makan siang, berlayar ke utara hingga Kom Ombo." },
        { t: "Gebel el-Silsila", d: "Tambang kuno dan kapel yang dipahat di tebing; berlabuh di tepian yang sunyi." },
        { t: "Edfu", d: "Kuil Horus di pagi hari, sebelum pengunjung harian tiba." },
        { t: "El Kab", d: "Makam pahatan batu yang jarang dilihat orang; makan malam terakhir di dek." },
        { t: "Luxor, dan Karnak di malam hari", d: "Turun di Esna, lalu Al Moudira; Karnak dibuka setelah tutup, dengan makan malam di kompleks kuil." },
        { t: "Balon saat fajar dan makam raja", d: "Keranjang privat di atas Tepi Barat; makam Seti I, Tutankhamun, dan Nefertari." },
        { t: "Ke Laut Merah, secara privat", d: "Pesawat privat ke Hurghada; suite dengan kolam renang sendiri di Oberoi, Sahl Hasheesh." },
        { t: "Yacht", d: "Terumbu Giftun di atas yacht bermotor berawak, makan siang di dek." },
        { t: "Yacht lagi — atau tidak ke mana-mana", d: "Terumbu lain, menyelam, atau seharian di spa." },
        { t: "Keberangkatan", d: "Pesawat privat ke Kairo dan layanan VIP hingga penerbangan pulang Anda." },
      ],
    },
  },

  standardOverline: "Cara tingkat ini dijalankan",
  standard: [
    { title: "Harga dulu, lalu bukti", body: "Setiap harga ada di halaman ini. Sebelum uang berpindah, setiap unsur — izin, sewa kapal, suite — dikonfirmasi tertulis atas nama Anda." },
    { title: "Satu kontak", body: "Orang yang merancang perjalanan adalah orang yang menjawab Anda selama di Mesir. Bukan pusat panggilan, dan bukan nomor yang berhenti menjawab setelah uang muka." },
    { title: "Perubahan tanpa repot", body: "Setiap perjalanan bisa diubah — hari, hotel, ritme, rombongan lebih besar, atau staf yang ikut — dan dihitung ulang dengan dasar yang sama." },
    { title: "Kerahasiaan sebagai standar", body: "Tanpa grup, tanpa kendaraan bersama, tanpa daftar keberangkatan yang dipublikasikan. Tidak ada yang dibicarakan tentang siapa Anda atau ke mana Anda pergi di luar tim pelaksana." },
  ],

  faqOverline: "Sebelum Anda menulis",
  faqs: ({ from2, to2, from4, to4, peak }) => [
    { q: "Berapa biaya perjalanan ultra mewah ke Mesir?", a: `Empat perjalanan Kemet Ultra untuk dua orang berkisar dari ${from2} per orang untuk tujuh hari hingga ${to2} untuk lima belas hari. Untuk empat orang, harga per orang turun menjadi ${from4}–${to4}, karena sewa kapal, pesawat, dan pembukaan privat ditanggung bersama. Pekan Natal, Tahun Baru, dan Paskah dikenakan tambahan ${peak}%.` },
    { q: "Benarkah Piramida Agung bisa dibuka hanya untuk kami?", a: "Ya. Kementerian Pariwisata dan Purbakala memberikan izin pembukaan privat Piramida Agung untuk satu rombongan, biasanya dua jam di luar jam umum. Permohonan diajukan atas nama Anda, butuh empat hingga delapan minggu, dan tidak ada yang ditagih sebelum izin keluar." },
    { q: "Bagaimana makan malam di dalam Karnak?", a: "Karnak dibuka untuk rombongan Anda setelah pengunjung umum pergi; Anda menyusuri aula hipostil bersama Egyptologist, lalu makan malam disajikan di dalam kompleks kuil. Diperlukan izin dan pengamanan yang diajukan bersama pemesanan. Jika suatu tanggal ditolak, Anda diberi tahu sebelum membayar dan ditawari alternatif terdekat." },
    { q: "Mengapa Winter Palace tidak termasuk?", a: "Winter Palace di Luxor tutup sejak awal 2026 untuk restorasi total dan dibuka kembali pada Juli 2027 sebagai Mandarin Oriental Winter Palace. Hingga saat itu, di Luxor Anda menginap di Al Moudira di Tepi Barat. Old Cataract di Aswan tetap buka di sayap bersejarah Palace selama sayap Nil direnovasi." },
    { q: "Dahabiya mana yang disewa?", a: "Dahabiya kelas utama dengan enam hingga sepuluh kabin, disewa penuh — seperti Sanctuary Zein Nile Chateau atau Meroe milik Nour el Nil, tergantung tanggal. Nama kapal dicantumkan dalam penawaran tertulis sebelum apa pun dibayar." },
    { q: "Bisakah perjalanan diubah atau diperpanjang?", a: "Semuanya bisa. Hari, hotel, urutan rute, dan ritme bisa diubah, dan harga dihitung ulang dengan dasar yang sama. Rombongan besar, staf yang ikut, dan kedatangan dengan jet pribadi direncanakan sejak awal." },
    { q: "Berapa lama sebelumnya harus memesan?", a: "Delapan hingga dua belas minggu untuk perjalanan antara Oktober dan April, saat pembukaan privat dan sewa dahabiya paling diminati. Kadang bisa lebih singkat; sebelum Anda berkomitmen, kami sampaikan unsur mana yang masih bisa dipastikan." },
    { q: "Dengan siapa kami berurusan?", a: "Dengan satu orang, dari pesan pertama hingga hari terakhir di Mesir. Jika perencanaan diurus oleh family office atau asisten, mereka juga selalu berhubungan dengan orang yang sama." },
  ],

  closeTitle: "Ceritakan siapa yang bepergian, dan kapan.",
  closeBody:
    "Setiap perjalanan di sini bisa diubah. Anda menerima rencana tertulis lebih dulu, lalu harganya, dan tidak ada yang dibayar sampai setiap unsur dikonfirmasi atas nama Anda. Semuanya tetap di antara kita.",
  closeCta: "WhatsApp, secara privat",
  closeQuiet: "atau lewat email",

  whatsapp: "Halo Kemet — saya ingin membicarakan perjalanan Kemet Ultra ke Mesir.",
  whatsappJourney: (t) => `Halo Kemet — saya ingin membicarakan "${t}" (Kemet Ultra).`,
  mailSubject: "Kemet Ultra — permintaan rahasia",
  mailBody: "Ceritakan siapa yang bepergian, kira-kira kapan, dan perjalanan mana yang Anda minati.\n\n",
};
