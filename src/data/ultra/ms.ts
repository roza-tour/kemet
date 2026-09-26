import type { UltraText } from "./types";

export const ms: UltraText = {
  metaTitle: "Percutian Ultra Mewah ke Mesir — Empat Perjalanan | Kemet",
  metaDescription:
    "Kemet Ultra: Piramid Agung dibuka hanya untuk anda, makan malam di dalam Karnak, dahabiya atau kapal layar peribadi, suite terbaik. 7–15 hari, harga terbuka.",
  keywords:
    "percutian ultra mewah mesir, perjalanan peribadi mewah mesir, piramid agung dibuka peribadi, makan malam kuil karnak, sewa dahabiya peribadi, kapal layar peribadi laut merah, suite mena house, old cataract aswan, oberoi philae",
  crumb: "Kemet Ultra",

  heroTag: "Kemet Ultra · atas permintaan peribadi",
  h1: ["Mesir, dibuka", "hanya untuk anda"],
  lede:
    "Empat perjalanan peribadi di puncak pasaran Mesir: Piramid Agung dibuka untuk rombongan anda, makan malam di dalam Karnak selepas pintu ditutup, dahabiya atau kapal layar tanpa tetamu lain, dan hotel-hotel ternama di bilik terbaiknya. Harga dinyatakan secara terbuka, dan setiap unsur disahkan secara bertulis sebelum apa-apa bayaran.",
  ctaPrimary: "Berbual secara peribadi",
  ctaQuiet: "atau hantar pertanyaan sulit",

  signaturesOverline: "Ciri istimewa",
  signatures: [
    ["Piramid Agung, hanya anda", "dua jam di dalam, tanpa pelawat lain"],
    ["Makan malam di Karnak", "kuil dibuka selepas gelap untuk rombongan anda"],
    ["Sungai Nil, disewa", "dahabiya milik anda sendiri, atau Oberoi Philae di dalam suite"],
    ["Laut Merah, dengan kapal layar", "kapal layar berkru di terumbu Giftun"],
    ["Langit, secara peribadi", "pesawat peribadi ke Abu Simbel dan ke pantai"],
  ],

  question: "Apakah Kemet Ultra?",
  answer: ({ from2, to2, from4 }) =>
    `Kemet Ultra ialah peringkat tertinggi Kemet: empat perjalanan Mesir yang sepenuhnya peribadi selama 7 hingga 15 hari, dengan Piramid Agung dibuka hanya untuk rombongan anda, makan malam di dalam Karnak selepas tutup, dahabiya atau kapal layar sewaan, dan suite di Mena House, Old Cataract serta Oberoi. Untuk dua orang ${from2}–${to2} seorang; untuk empat orang dari ${from4}.`,

  glanceOverline: "Sepintas lalu",
  glanceTitle: "Pilih perjalanan anda",

  journeysOverline: "Perjalanan",
  journeysTitle: ["Empat cara menjelajah Mesir", "pada tahap ini"],

  labels: {
    duration: (d, n) => `${d} hari / ${n} malam`,
    from: "Dari",
    perPersonTwo: "seorang, untuk dua orang",
    perPersonFour: (p) => `${p} seorang untuk empat orang`,
    stays: "Tempat penginapan",
    nights: (n) => `${n} malam`,
    view: "Lihat perjalanan",
    dayByDay: "Hari demi hari",
    day: "Hari",
    enquire: (t) => `Tanya tentang ${t}`,
    priceNote: (peak) =>
      `Harga dalam euro, seorang, bagi Oktober 2026 hingga September 2027, termasuk semua unsur yang dinyatakan di halaman ini. Penerbangan antarabangsa dan tip tidak termasuk. Minggu puncak — 20 Disember hingga 5 Januari, serta minggu Easter — dikenakan caj tambahan ${peak}%.`,
  },

  place: { giza: "Giza", cairo: "Kaherah", luxor: "Luxor, Tebing Barat", aswan: "Aswan", nile: "Di Sungai Nil", redsea: "Laut Merah" },
  room: {
    pyramidSuite: "Suite dengan pemandangan piramid",
    nileSuite: "Suite dengan pemandangan Sungai Nil",
    palaceWing: "Sayap bersejarah Palace, pemandangan Nil",
    suite: "Suite",
    charter: "Sewa penuh — seluruh kapal",
    cruiseSuite: "Suite mewah",
    poolSuite: "Grand suite dengan kolam renang peribadi",
  },
  dahabiya: "Dahabiya peribadi",

  journeys: {
    "private-pharaoh": {
      title: "Firaun Peribadi",
      kicker: "Piramid Agung dan Karnak, masing-masing dibuka hanya untuk rombongan anda",
      route: "Kaherah · Giza · Luxor · Abydos",
      body:
        "Seminggu yang dibina di sekitar dua pintu yang biasanya tertutup. Di Giza, Piramid Agung dibuka selama dua jam hanya untuk rombongan anda; di Luxor, Karnak kekal dibuka untuk anda selepas waktu tutup dan makan malam dihidangkan di dalam kawasan kuil. Di antaranya: Grand Egyptian Museum bersama ahli Egyptologi kanan, makam-makam terindah di Lembah Raja-Raja, dan dua kuil yang jarang sampai dikunjungi pelawat.",
      highlights: [
        "Piramid Agung dibuka secara peribadi — dua jam, hanya rombongan anda",
        "Karnak dibuka selepas tutup, dengan makan malam di kawasan kuil",
        "Makam Seti I, Nefertari dan Tutankhamun",
        "Bakul belon udara peribadi dan felucca peribadi",
        "Seorang ahli Egyptologi kanan sepanjang perjalanan, pemandu sedia",
        "Layanan VIP pada setiap ketibaan dan pelepasan",
      ],
      days: [
        { t: "Ketibaan, disambut di pintu pesawat", d: "Layanan VIP melalui imigresen, kemudian Mena House, tempat Piramid Agung memenuhi tingkap." },
        { t: "Grand Egyptian Museum", d: "Khazanah lengkap Tutankhamun dan Tangga Agung bersama ahli Egyptologi kanan; petang bebas." },
        { t: "Bersendirian di dalam Piramid Agung", d: "Dua jam di dalam piramid Khufu yang dibuka hanya untuk anda, kemudian Piramid Bertingkat dan Serapeum di Saqqara." },
        { t: "Luxor, dan Karnak pada waktu malam", d: "Penerbangan ke selatan dengan layanan VIP; pada waktu malam Karnak dibuka untuk anda dan makan malam dihidangkan di kawasan kuil." },
        { t: "Belon ketika subuh dan makam diraja", d: "Bakul peribadi di atas Tebing Barat, kemudian makam Seti I, Tutankhamun dan Permaisuri Nefertari." },
        { t: "Abydos dan Dendera", d: "Dua kuil terindah di Mesir dengan kereta peribadi, makan tengah hari dalam perjalanan, dan matahari terbenam di atas felucca peribadi." },
        { t: "Pelepasan", d: "Penerbangan ke Kaherah, diiringi hingga penerbangan antarabangsa anda." },
      ],
    },
    "royal-nile": {
      title: "Nil Diraja",
      kicker: "Dahabiya disewa untuk rombongan anda, dari Aswan ke Esna",
      route: "Kaherah · Aswan · Abu Simbel · Sungai Nil · Luxor",
      body:
        "Empat malam di atas dahabiya berlayar tanpa tetamu lain: kru, tukang masak dan tempat berlabuh adalah milik anda, dan kapal boleh singgah di tempat yang tidak dapat dicapai kapal besar. Sebelum itu, Kaherah dengan Piramid Agung dibuka secara peribadi dan satu malam di Old Cataract; Abu Simbel dengan pesawat peribadi; dan di penghujungnya, Karnak dibuka untuk makan malam anda.",
      highlights: [
        "Sewa penuh dahabiya kelas utama — tanpa tetamu lain",
        "Piramid Agung dibuka secara peribadi; makan malam di Karnak selepas tutup",
        "Abu Simbel dengan pesawat peribadi",
        "Old Cataract, sayap bersejarah Palace, menghadap Sungai Nil",
        "Makam Seti I dan Nefertari; belon udara peribadi",
        "Layanan VIP pada setiap ketibaan dan pelepasan",
      ],
      days: [
        { t: "Ketibaan, disambut di pintu pesawat", d: "Layanan VIP, kemudian Four Seasons at The First Residence di atas Sungai Nil." },
        { t: "Grand Egyptian Museum", d: "Khazanah Tutankhamun dan Tangga Agung bersama ahli Egyptologi kanan; petang yang santai." },
        { t: "Bersendirian di dalam Piramid Agung", d: "Dua jam peribadi di dalam piramid Khufu, kemudian Piramid Bertingkat dan Serapeum di Saqqara." },
        { t: "Aswan dan Old Cataract", d: "Penerbangan pagi ke selatan; Philae dengan bot peribadi, kemudian matahari terbenam dari teres tempat Agatha Christie pernah menginap." },
        { t: "Abu Simbel, kemudian naik kapal", d: "Kuil-kuil Ramses II pada cahaya pertama, dengan pesawat peribadi; pulang untuk makan tengah hari, dan dahabiya anda belayar." },
        { t: "Kom Ombo", d: "Belayar ke utara ke kuil berkembar Sobek dan Horus; bermalam di tebing yang sunyi." },
        { t: "Gebel el-Silsila dan Edfu", d: "Kuari batu pasir purba dan kapel-kapelnya, kemudian Edfu, kuil paling terpelihara di Mesir." },
        { t: "El Kab", d: "Makam pahatan batu yang jarang dilihat orang, petang terakhir di bawah layar, dan makan malam di dek." },
        { t: "Luxor, dan Karnak pada waktu malam", d: "Turun di Esna; makam Seti I dan Nefertari; Karnak dibuka selepas tutup, dengan makan malam di kawasan kuil." },
        { t: "Belon, kemudian pelepasan", d: "Bakul peribadi ketika subuh di atas Tebing Barat; penerbangan ke Kaherah dan pelepasan VIP." },
      ],
    },
    "karnak-to-coral-sea": {
      title: "Dari Karnak ke Laut Karang",
      kicker: "Oberoi Philae menyusuri Nil, kemudian kapal layar peribadi di Laut Merah",
      route: "Kaherah · Luxor · Sungai Nil · Aswan · Abu Simbel · Laut Merah",
      body:
        "Pelayaran Nil klasik di atas kapal paling halus di sungai itu, di dalam suite, kemudian diakhiri dengan sewajarnya: pesawat peribadi dari Aswan ke Laut Merah, suite dengan kolam renang sendiri, dan kapal layar berkru untuk sehari di terumbu Giftun. Sepanjang perjalanan, Piramid Agung dan Karnak dibuka untuk anda.",
      highlights: [
        "Oberoi Philae, empat malam di suite mewah",
        "Piramid Agung dibuka secara peribadi; makan malam di Karnak selepas tutup",
        "Pesawat peribadi ke Abu Simbel dan terus ke Laut Merah",
        "Kapal layar bermotor berkru untuk sehari penuh",
        "Suite di Old Cataract dan Oberoi, Sahl Hasheesh",
        "Layanan VIP pada setiap ketibaan dan pelepasan",
      ],
      days: [
        { t: "Ketibaan, disambut di pintu pesawat", d: "Layanan VIP, kemudian Mena House dengan Piramid Agung di tingkap." },
        { t: "Grand Egyptian Museum", d: "Khazanah Tutankhamun bersama ahli Egyptologi kanan; petang bebas." },
        { t: "Bersendirian di dalam Piramid Agung", d: "Dua jam peribadi di dalam piramid Khufu, kemudian Piramid Bertingkat dan Serapeum di Saqqara." },
        { t: "Luxor, di atas Oberoi Philae", d: "Penerbangan ke selatan dan menaiki kapal; pada waktu malam Karnak dibuka untuk anda, dengan makan malam di kawasan kuil." },
        { t: "Tebing Barat", d: "Belon udara peribadi ketika subuh, makam Seti I dan Nefertari, kemudian kapal belayar ke selatan." },
        { t: "Esna dan Edfu", d: "Melalui pintu air Esna ke Kuil Horus di Edfu." },
        { t: "Kom Ombo ke Aswan", d: "Kuil tepi sungai di Kom Ombo, dan Aswan menjelang petang." },
        { t: "Old Cataract", d: "Turun di Aswan; Philae dengan bot peribadi; felucca peribadi di antara pulau-pulau ketika matahari terbenam." },
        { t: "Abu Simbel dengan pesawat peribadi", d: "Kuil-kuil Ramses II pada cahaya pertama, kembali ke Aswan untuk makan tengah hari dan petang yang tenang." },
        { t: "Ke Laut Merah, secara peribadi", d: "Pesawat peribadi ke Hurghada dan Oberoi di Sahl Hasheesh — suite dengan kolam renang sendiri." },
        { t: "Sehari di atas kapal layar", d: "Kapal layar bermotor berkru ke terumbu Giftun: snorkeling, makan tengah hari di atas kapal, pulang ketika matahari terbenam." },
        { t: "Pelepasan", d: "Penerbangan pulang dari Hurghada, atau ke Kaherah untuk penerbangan sambungan, dengan layanan VIP." },
      ],
    },
    "grand-odyssey": {
      title: "Odisi Peribadi Agung",
      kicker: "Setiap perpindahan peribadi — pesawat, dahabiya dan kapal layar",
      route: "Kaherah · Aswan · Abu Simbel · Sungai Nil · Luxor · Laut Merah",
      body:
        "Seluruh Mesir tanpa satu detik pun dikongsi dengan orang lain. Pesawat peribadi pada setiap laluan domestik; dahabiya disewa empat malam antara Aswan dan Esna; Piramid Agung dan Karnak dibuka untuk anda; dan tiga malam di Laut Merah dengan dua hari di atas kapal layar anda sendiri. Direka untuk lawatan pertama yang mahu menjadi yang paling bermakna.",
      highlights: [
        "Pesawat peribadi pada setiap laluan domestik",
        "Sewa penuh dahabiya selama empat malam",
        "Piramid Agung dibuka secara peribadi; makan malam di Karnak selepas tutup",
        "Dua hari di atas kapal layar berkru",
        "Suite di Mena House, Old Cataract, Al Moudira dan Oberoi",
        "Seorang ahli Egyptologi dan seorang pembantu peribadi sepanjang perjalanan",
      ],
      days: [
        { t: "Ketibaan, disambut di pintu pesawat", d: "Layanan VIP, kemudian Mena House dengan Piramid Agung di tingkap." },
        { t: "Grand Egyptian Museum", d: "Khazanah Tutankhamun bersama ahli Egyptologi kanan; petang yang santai." },
        { t: "Piramid Agung, Saqqara dan Dahshur", d: "Dua jam peribadi di dalam piramid Khufu, kemudian Piramid Bertingkat dan Piramid Merah." },
        { t: "Dengan pesawat peribadi ke Aswan", d: "Old Cataract, dan Philae dengan bot peribadi pada waktu petang." },
        { t: "Abu Simbel", d: "Dengan pesawat peribadi pada cahaya pertama; ketika matahari terbenam, felucca peribadi di antara pulau-pulau." },
        { t: "Di atas dahabiya anda", d: "Kapal milik anda sejak makan tengah hari, belayar ke utara hingga Kom Ombo." },
        { t: "Gebel el-Silsila", d: "Kuari purba dan kapel yang dipahat di tebing; berlabuh di tebing yang sunyi." },
        { t: "Edfu", d: "Kuil Horus pada awal pagi, sebelum pelawat harian tiba." },
        { t: "El Kab", d: "Makam pahatan batu yang jarang dilihat orang; makan malam terakhir di dek." },
        { t: "Luxor, dan Karnak pada waktu malam", d: "Turun di Esna, kemudian Al Moudira; Karnak dibuka selepas tutup, dengan makan malam di kawasan kuil." },
        { t: "Belon ketika subuh dan makam diraja", d: "Bakul peribadi di atas Tebing Barat; makam Seti I, Tutankhamun dan Nefertari." },
        { t: "Ke Laut Merah, secara peribadi", d: "Pesawat peribadi ke Hurghada; suite dengan kolam renang sendiri di Oberoi, Sahl Hasheesh." },
        { t: "Kapal layar", d: "Terumbu Giftun di atas kapal layar bermotor berkru, makan tengah hari di dek." },
        { t: "Kapal layar lagi — atau tiada apa-apa", d: "Terumbu lain, menyelam, atau sehari di spa." },
        { t: "Pelepasan", d: "Pesawat peribadi ke Kaherah dan layanan VIP hingga penerbangan pulang anda." },
      ],
    },
  },

  standardOverline: "Cara peringkat ini dikendalikan",
  standard: [
    { title: "Harga dahulu, kemudian bukti", body: "Setiap harga ada di halaman ini, dan setiap unsur perjalanan disahkan secara bertulis atas nama anda sebelum wang berpindah tangan." },
    { title: "Seorang wakil", body: "Orang yang mereka bentuk perjalanan ialah orang yang menjawab anda semasa di Mesir. Bukan pusat panggilan, dan bukan nombor yang berhenti menjawab selepas deposit." },
    { title: "Perubahan tanpa kerumitan", body: "Setiap perjalanan boleh diubah — hari, hotel, rentak, rombongan lebih besar atau kakitangan yang turut serta — dan dikira semula dengan asas yang sama." },
    { title: "Kerahsiaan sebagai amalan", body: "Tiada kumpulan, tiada kenderaan dikongsi, tiada senarai pelepasan diterbitkan. Tiada apa-apa tentang siapa anda atau ke mana anda pergi dibincangkan di luar pasukan pelaksana." },
  ],

  faqOverline: "Sebelum anda menulis",
  faqs: ({ from2, to2, from4, to4, peak }) => [
    { q: "Berapakah kos perjalanan ultra mewah ke Mesir?", a: `Empat perjalanan Kemet Ultra untuk dua orang bermula dari ${from2} seorang bagi tujuh hari hingga ${to2} bagi lima belas hari. Untuk empat orang, harga seorang turun kepada ${from4}–${to4}, kerana sewaan kapal, pesawat dan pembukaan peribadi dikongsi bersama. Minggu Krismas, Tahun Baharu dan Easter dikenakan caj tambahan ${peak}%.` },
    { q: "Benarkah Piramid Agung boleh dibuka hanya untuk kami?", a: "Ya. Selama dua jam, Piramid Agung dibuka hanya untuk rombongan anda di luar waktu awam, dengan ahli Egyptologi di sisi anda dan tiada orang lain di dalam. Semuanya kami uruskan; anda hanya perlu datang." },
    { q: "Bagaimanakah makan malam di dalam Karnak?", a: "Selepas pelawat terakhir beredar, Karnak dibuka untuk rombongan anda. Anda menyusuri dewan hipostil bersama ahli Egyptologi, kemudian makan malam dihidangkan di dalam kawasan kuil. Tiada apa-apa yang perlu anda uruskan." },
    { q: "Mengapa Winter Palace tidak termasuk?", a: "Winter Palace di Luxor ditutup sejak awal 2026 untuk pemulihan menyeluruh dan akan dibuka semula pada Julai 2027 sebagai Mandarin Oriental Winter Palace. Sehingga itu, di Luxor anda menginap di Al Moudira di Tebing Barat. Old Cataract di Aswan kekal dibuka di sayap bersejarah Palace sementara sayap Nil diubah suai." },
    { q: "Dahabiya manakah yang disewa?", a: "Dahabiya kelas utama dengan enam hingga sepuluh kabin, disewa sepenuhnya, dengan kru dan tukang masak sendiri — dipilih mengikut tarikh anda dan dinyatakan dalam cadangan bertulis." },
    { q: "Bolehkah perjalanan diubah atau dipanjangkan?", a: "Semuanya boleh. Hari, hotel, susunan laluan dan rentak boleh diubah, dan harga dikira semula dengan asas yang sama. Rombongan lebih besar, kakitangan yang turut serta dan ketibaan dengan jet peribadi dirancang dari awal." },
    { q: "Berapa awal perlu menempah?", a: "Lapan hingga dua belas minggu untuk perjalanan antara Oktober dan April, apabila pembukaan peribadi dan sewaan dahabiya paling diminati. Kadangkala boleh lebih singkat; sebelum anda komited, kami nyatakan unsur mana yang masih boleh dipastikan." },
    { q: "Dengan siapa kami akan berurusan?", a: "Dengan seorang sahaja, dari mesej pertama hingga hari terakhir di Mesir. Jika perancangan diuruskan oleh pejabat keluarga atau pembantu, mereka juga sentiasa berurusan dengan orang yang sama." },
  ],

  closeTitle: "Beritahu kami siapa yang melancong, dan bila.",
  closeBody:
    "Setiap perjalanan di sini boleh diubah. Anda menerima rancangan bertulis dahulu, kemudian harganya, dan tiada apa-apa dibayar sehingga setiap unsur disahkan atas nama anda. Semuanya kekal antara kita.",
  closeCta: "WhatsApp, secara peribadi",
  closeQuiet: "atau melalui e-mel",

  whatsapp: "Helo Kemet — saya ingin berbincang tentang perjalanan Kemet Ultra ke Mesir.",
  whatsappJourney: (t) => `Helo Kemet — saya ingin berbincang tentang "${t}" (Kemet Ultra).`,
  mailSubject: "Kemet Ultra — pertanyaan sulit",
  mailBody: "Beritahu kami siapa yang melancong, lebih kurang bila, dan perjalanan mana yang anda minati.\n\n",
};
