// ---------------------------------------------------------------------------
// Halaman Bahasa Melayu — seven key pages for the Malaysian market.
//
// Deliberately NOT the Indonesian file with a few words swapped. The two
// markets read differently: Malaysian vocabulary (percutian, tempahan, bilik,
// kenderaan) rather than Indonesian, ringgit rather than rupiah, KLIA rather
// than Soekarno-Hatta, and the school-holiday and Raya calendar that Malaysian
// families actually plan around. What the two share is the shape of the trip:
// Al-Azhar and the tomb of Imam al-Shafi'i alongside Giza, halal as an assumed
// baseline rather than a special request, and a great many journeys attached
// to an Umrah in Saudi Arabia.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import { tours } from "@/data/tours";

// Read from the journeys, so the figure follows the catalogue when prices move.
const FLY_EXTRA = tours.find((t) => t.flyOption)?.flyOption?.extra ?? 0;
import { BUILD_YEAR } from "@/utils/format";

export const ms: LocalizedPage[] = [
  // ===== Utama =============================================================
  {
    groupId: "home",
    symbol: "ankh",
    title: "Kemet — Pakej pelancongan Mesir persendirian",
    description:
      "Percutian Mesir persendirian yang disusun khas: pemandu Egyptologist berlesen untuk rombongan anda sahaja, kenderaan sendiri, tiada bas kumpulan.",
    keywords:
      "pakej pelancongan mesir, percutian ke mesir, tour mesir, pelayaran sungai nil, pakej mesir persendirian",
    crumb: "Utama",
    h1: "Mesir, untuk rombongan anda sahaja",
    standfirst:
      "Tiada bas pelancong, tiada tarikh berlepas yang ditetapkan, tiada orang luar dalam perjalanan anda.",
    lede:
      "Mesir bukan satu negara, tetapi lapan dunia budaya yang bertindan di sepanjang satu sungai. Kemet menyusun perjalanan persendirian yang tidak tergesa-gesa merentasi dunia-dunia itu — dari Piramid Giza dan Al-Azhar hingga kuil-kuil Luxor dan pelayaran Sungai Nil ke Aswan. Setiap perjalanan dibawa oleh Egyptologist berlesen Kementerian Pelancongan Mesir, dan disusun sepenuhnya mengikut anda.",
    facts: [
      { label: "Bentuk", value: "Persendirian sepenuhnya" },
      { label: "Pemandu", value: "Egyptologist berlesen" },
      { label: "Dari KLIA", value: "±13 jam, satu transit" },
      { label: "Masa terbaik", value: "Oktober – April" },
    ],
    sections: [
      {
        title: "Egyptologist, bukan sekadar pengiring",
        body:
          "Setiap perjalanan dibawa oleh seseorang yang berlesen Kementerian Pelancongan Mesir dan berlatar belakang Egyptology. Beliau berdiri bersama anda di hadapan monumen, bukan menunggu di tempat letak kereta, dan pada hari itu beliau milik rombongan anda sahaja — menjawab soalan anda, bukan membaca teks di hadapan empat puluh orang.",
      },
      {
        title: "Mesir yang dicari pengunjung Malaysia",
        body:
          "Ramai tetamu kami tiba dengan senarai yang tiada dalam risalah Eropah: Masjid dan Universiti Al-Azhar, makam Imam Asy-Syafie — imam mazhab yang diikuti Malaysia — Masjid Amr bin Al-As sebagai masjid pertama di benua Afrika, Masjid Sultan Hassan, serta Gunung Sinai dan Biara Saint Catherine. Kesemuanya boleh disusun dalam satu rangkaian bersama Giza dan Luxor, dan pemandu kami faham mengapa susunannya penting.",
      },
      {
        title: "Soal makanan halal",
        body:
          "Ini soalan pertama yang hampir pasti ditanya, dan jawapannya melegakan: Mesir sebuah negara majoriti Muslim, jadi daging di restoran dan hotel pada asasnya halal tanpa perlu dicari khas. Yang tetap kami perhatikan ialah perkara kecil — hotel yang menghidangkan alkohol di restoran yang sama, atau menu antarabangsa di kapal pelayaran — dan kami memberitahu anda lebih awal, bukan selepas anda duduk.",
      },
      {
        title: "Rombongan anda sahaja",
        body:
          "Tiada bas dikongsi. Tiada tarikh tetap. Jika anda berdua, kenderaan, pemandu dan rentak perjalanan milik dua orang. Kos setiap orang turun dengan ketara apabila rombongan bertambah: keluarga seramai enam orang selalunya membayar lebih murah seorang untuk percutian persendirian sepenuhnya berbanding pasangan suami isteri bagi laluan yang sama.",
      },
      {
        title: "Tentang harga, secara berterus terang",
        body:
          "Kemet berada di segmen atas pasaran Mesir dan kami menyatakannya tanpa segan. Egyptologist persendirian selama seminggu ada harganya; begitu juga kenderaan yang hanya milik anda dan bilik yang menghadap sungai, bukan tempat letak kereta. Apa yang kami tidak lakukan: meletakkan harga rendah lalu menampungnya dengan caj tambahan, singgah di kedai berkomisen, dan laluan yang senyap-senyap bertukar menjadi kumpulan.",
      },
    ],
    highlights: {
      heading: "Perjalanan ini bukan untuk",
      items: [
        "Pencari harga termurah ke Mesir — kami bukan yang termurah dan tidak cuba menjadi",
        "Pelancongan bas dan pakej kumpulan bertarikh tetap",
        "Asrama, bilik dikongsi dan laluan bergaya backpacker",
        "Mereka yang lebih suka menguruskan logistik sendiri",
      ],
    },
    faqs: [
      { q: "Berapa kos pakej Mesir persendirian?", a: "Untuk percutian persendirian sepenuhnya dengan Egyptologist berlesen, kenderaan dan pemandu sendiri serta hotel yang baik, jangkakan 200–450 euro seorang sehari, tidak termasuk tiket penerbangan antarabangsa. Jumlah seorang turun dengan ketara apabila rombongan bertambah kerana pemandu dan kenderaan dikongsi." },
      { q: "Adakah pemandu yang berbahasa Melayu?", a: "Bilangannya terhad, dan kami tidak akan menjanjikan sesuatu yang belum kami pastikan. Nyatakan keperluan ini pada awal perancangan: kami akan mengesahkan ketersediaannya untuk tarikh anda sebelum sebarang bayaran, dan jika tiada kami katakan terus serta menawarkan pemandu berbahasa Inggeris atau Arab." },
      { q: "Adakah makanan di Mesir halal?", a: "Mesir sebuah negara majoriti Muslim, jadi daging di restoran dan hotel umumnya halal tanpa perlu dicari khas. Yang perlu diberi perhatian hanyalah restoran hotel antarabangsa yang turut menghidangkan alkohol, dan kami menyediakan senarai tempat makan sejak awal." },
      { q: "Berapa hari diperlukan untuk Mesir?", a: "Lapan hingga sepuluh hari di sana memadai untuk Kaherah, Luxor, pelayaran Sungai Nil dan Aswan tanpa tergesa-gesa. Enam hingga tujuh hari cukup untuk Kaherah dan Luxor. Dua belas hingga empat belas hari memberi ruang untuk Abu Simbel, Alexandria atau Laut Merah." },
      { q: "Boleh digabungkan dengan umrah?", a: "Sangat kerap. Ramai tetamu kami tiba di Mesir sebelum atau selepas ibadah di Arab Saudi, dan penerbangan Jeddah–Kaherah hanya sekitar dua jam. Urusan ibadah dikendalikan oleh penganjur anda; kami menyusun bahagian Mesir dan menyelaraskan tarikh supaya kedua-duanya bersambung kemas." },
    ],
    cta: {
      heading: "Ceritakan rancangan anda",
      text: "Hantarkan tarikh dan siapa yang akan pergi. Anda akan menerima susunan perjalanan sebenar berserta perincian harga — tanpa ikatan dan tanpa pusat panggilan.",
      whatsapp: "Salam Kemet — saya ingin merancang percutian persendirian ke Mesir.",
      emailSubject: "Pertanyaan — percutian persendirian ke Mesir",
    },
    moreLabel: "Laman penuh",
    moreText:
      "Halaman-halaman ini ialah pilihan dalam Bahasa Melayu. Katalog penuh Kemet — semua laluan, destinasi, pengalaman dan panduan praktikal — tersedia dalam Bahasa Inggeris. Kami tetap membalas mesej anda dalam Bahasa Melayu.",
  },

  // ===== Pakej =============================================================
  {
    groupId: "journeys",
    symbol: "sun",
    title: "Pakej Pelancongan Mesir — laluan persendirian | Kemet",
    description:
      "Laluan persendirian ke Mesir, dari sehari hingga dua minggu — dengan Egyptologist berlesen, kenderaan sendiri dan tiada tarikh berlepas tetap.",
    keywords:
      "pakej pelancongan mesir, itinerari mesir, percutian kaherah luxor, laluan perjalanan mesir, pakej mesir malaysia",
    crumb: "Pakej Pelancongan",
    h1: "Laluan perjalanan kami di Mesir",
    standfirst:
      "Ini titik permulaan, bukan program siap — setiap laluan ditulis semula mengikut tarikh dan rombongan anda.",
    lede:
      "Semua perjalanan kami bersifat persendirian. Apa yang anda lihat di sini ialah bentuk yang telah teruji, bukan barangan siap beli. Beritahu kami bila anda berangkat, siapa yang ikut, dan apa yang paling ingin anda lihat — laluannya dilukis semula daripada situ.",
    facts: [
      { label: "Terpendek", value: "1 hari" },
      { label: "Terpanjang", value: "14 hari" },
      { label: "Rombongan", value: "Rombongan anda sahaja" },
      { label: "Deposit", value: "25 %" },
    ],
    sections: [
      {
        title: "Laluan klasik dan sebab ia berkesan",
        body:
          "Kaherah untuk Piramid, Grand Egyptian Museum dan kota lamanya; Luxor untuk kuil-kuil dan Lembah Raja-Raja; kemudian menyusuri Sungai Nil ke Aswan dengan kapal. Susunan itu bukan kebetulan: kuil-kuil antara Luxor dan Aswan terletak di tebing sungai dan memang dibina untuk didatangi dari air. Lapan hingga sepuluh hari merangkumi kesemuanya tanpa tergesa-gesa.",
      },
      {
        title: "Sehari untuk Kaherah Islam",
        body:
          "Satu hari penuh di Kaherah Islam ialah bahagian yang paling kerap kami tambah untuk tetamu Malaysia: Al-Azhar, makam Imam Asy-Syafie, Masjid Amr bin Al-As, Masjid Sultan Hassan dan Masjid Ibnu Tulun, ditutup di Khan el-Khalili. Hari itu berdiri sendiri dan tidak mengurangkan masa untuk Giza — ia hanya menuntut satu hari tambahan di Kaherah.",
      },
      {
        title: "Apa yang termasuk dalam harga",
        body:
          "Egyptologist berlesen sepanjang perjalanan, semua tiket masuk, pemindahan persendirian berhawa dingin, ambilan dan hantaran hotel, makan tengah hari pada hari lawatan, dan air setiap hari. Tidak termasuk: tiket penerbangan antarabangsa, visa, tip, perbelanjaan peribadi dan tambahan yang dinyatakan berasingan. Setiap sebut harga menyenaraikan kedua-duanya sebelum anda membuat keputusan.",
      },
      {
        title: "Berapa hari — secara jujur",
        body:
          "Sehari di Kaherah bermakna Giza dan Saqqara, atau Grand Egyptian Museum, tetapi bukan kedua-duanya dengan sempurna. Empat hingga lima hari memberi Kaherah dan Luxor. Lapan hingga sepuluh menambah Sungai Nil dan Aswan. Melebihi empat belas hari, yang bertambah bukan lagi tapak lawatan tetapi ruang bernafas: Abu Simbel tanpa bangun pukul empat pagi, Alexandria, atau beberapa hari di Laut Merah.",
      },
    ],
    faqs: [
      { q: "Bolehkah laluan yang ditawarkan diubah?", a: "Itulah tujuannya. Laluan yang dipaparkan ialah titik permulaan. Anda boleh memanjangkan satu bahagian, membuangnya, menukar kelas hotel, atau bermula daripada helaian kosong — sebut harga dikira semula pada setiap versi dan tiada bayaran sebelum susunannya anda persetujui." },
      { q: "Berapa awal perlu membuat tempahan?", a: "Untuk tempoh Oktober hingga April, sediakan dua hingga tiga bulan: itulah bulan-bulan apabila Egyptologist yang baik, kapal dahabiya dan bilik berpemandangan habis dahulu. Di luar musim itu, beberapa minggu selalunya memadai." },
      { q: "Betulkah kami berjalan sendirian sahaja?", a: "Betul. Kenderaan, pemandu dan Egyptologist ditempah untuk rombongan anda sahaja, berapa pun bilangannya. Anda tidak akan digabungkan dengan tetamu lain semata-mata untuk memenuhi kenderaan." },
      { q: "Bagaimana jika penerbangan domestik tertangguh?", a: "Laluannya disusun semula di sana pada hari yang sama tanpa caj tambahan — itulah kelebihan perjalanan persendirian: tiada kumpulan yang menunggu dan tiada slot bersama yang perlu dikejar. Penyelaras anda di Mesir boleh dihubungi sepanjang perjalanan." },
    ],
    cta: {
      heading: "Biar kami lakarkan laluannya",
      text: "Tarikh, bilangan peserta, dan satu perkara yang tidak boleh terlepas sudah memadai untuk bermula.",
      whatsapp: "Salam Kemet — saya mahukan laluan persendirian di Mesir.",
      emailSubject: "Pertanyaan laluan — Mesir",
    },
    moreLabel: "Katalog penuh",
    moreText:
      "Kesemua dua puluh lima laluan berserta perincian harian, hotel dan harga tersedia dalam Bahasa Inggeris di laman utama. Hantarkan pertanyaan anda dalam Bahasa Melayu — kami balas dalam Bahasa Melayu.",
  },

  // ===== Pelayaran Sungai Nil ==============================================
  {
    groupId: "nile-cruise",
    symbol: "boat",
    title: "Pelayaran Sungai Nil — dahabiya atau kapal besar | Kemet",
    description:
      "Pelayaran persendirian di Sungai Nil antara Luxor dan Aswan: dahabiya berlayar atau kapal lima bintang, Egyptologist di atas kapal sepanjang jalan.",
    keywords:
      "pelayaran sungai nil, cruise nil mesir, dahabiya nil, kapal nil luxor aswan, percutian sungai nil",
    crumb: "Pelayaran Sungai Nil",
    h1: "Pelayaran di Sungai Nil",
    standfirst:
      "Antara Luxor dan Aswan, sungai kekal cara terbaik untuk bergerak — dan pilihan kapal menentukan seluruh perjalanan.",
    lede:
      "Kuil-kuil antara Luxor dan Aswan dibina menghadap sungai. Kita mendatanginya dari air kerana begitulah ia direka: Edfu dan Kom Ombo muncul dari geladak sebelum muncul dari tempat letak kereta. Tiga hingga empat malam sudah merangkumi bahagian ini, dan pilihan kapal lebih menentukan daripada tempohnya.",
    facts: [
      { label: "Laluan", value: "Luxor ⇄ Aswan" },
      { label: "Tempoh", value: "3–4 malam" },
      { label: "Dahabiya", value: "6–12 kabin" },
      { label: "Kapal besar", value: "40–80 kabin" },
    ],
    sections: [
      {
        title: "Dahabiya atau kapal besar",
        body:
          "Dahabiya ialah kapal layar dengan beberapa kabin sahaja. Ia berlayar, berlabuh di beting pasir yang tidak mampu didekati kapal besar, dan jika disewa penuh tiada penumpang lain selain rombongan anda. Kapal lima bintang memberi ruang lebih luas, kolam renang dan geladak atas, tetapi mengikut jadual bersama dan berlabuh di tempat yang sama dengan kapal lain. Kedua-duanya baik; kedua-duanya bercerita perkara berbeza.",
      },
      {
        title: "Apa yang kelihatan dari sungai",
        body:
          "Edfu, kuil Horus, yang paling utuh di Mesir. Kom Ombo, kuil berkembar di selekoh sungai, paling cantik menjelang senja. Pintu air Esna, sawah, kampung, nelayan — dan di Aswan, kuil Philae di pulaunya. Antara lawatan, tiada apa yang berlaku; itulah yang dicari.",
      },
      {
        title: "Bila masa terbaik untuk belayar",
        body:
          "Oktober hingga April ialah tempoh terbaik: siang yang suam, malam yang nyaman di geladak. Mei hingga September, Mesir Hulu menjadi sangat panas — melebihi 40 °C di Aswan — jadi lawatan dialihkan ke awal pagi. Harga turun banyak pada musim panas, dan bagi yang tahan haba, kuil-kuil hampir kosong.",
      },
      {
        title: "Untuk rombongan keluarga besar",
        body:
          "Dahabiya sangat sesuai untuk keluarga besar: kanak-kanak bebas bergerak di atas kapal, harinya pendek, dan ada jam-jam panjang yang tidak menuntut apa-apa. Menyewa satu kapal penuh untuk satu keluarga besar selalunya munasabah dari segi kos bermula sekitar lapan hingga dua belas orang.",
      },
    ],
    faqs: [
      { q: "Berapa malam di Sungai Nil?", a: "Tiga hingga empat malam merangkumi bahagian Luxor–Aswan bersama Edfu dan Kom Ombo tanpa masa kosong. Sesetengah dahabiya menawarkan tujuh malam dengan persinggahan yang tidak dibuat kapal besar, seperti El-Kab atau Gebel Silsila." },
      { q: "Bolehkah menyewa satu kapal penuh?", a: "Boleh, bagi dahabiya. Sewaan penuh bermakna kapal, anak kapal dan tukang masak untuk rombongan anda sahaja — lazimnya bermula daripada lapan hingga dua belas orang, dan masih boleh untuk rombongan lebih kecil. Kapal pelayaran besar pada praktiknya tidak disewa penuh." },
      { q: "Bagaimana dengan makanan di atas kapal?", a: "Dapur kapal Mesir memasak masakan Mesir, dan dagingnya halal sebagaimana lazimnya di Mesir. Bagi kapal antarabangsa yang turut menghidangkan alkohol, kami memberitahu lebih awal supaya anda boleh memilih dengan sedar." },
      { q: "Adakah Egyptologist bersama kami di kapal?", a: "Dalam perjalanan kami, Egyptologist anda menyertai sepanjang pelayaran dan mengiringi di setiap kuil — bukan pemandu baharu di setiap persinggahan. Inilah beza utamanya berbanding membeli pakej pelayaran secara berasingan." },
      { q: "Adakah kami akan mabuk laut?", a: "Tidak. Sungai Nil tidak berombak dan tidak menyebabkan mabuk laut — airnya tenang. Satu-satunya pergerakan yang terasa ialah ketika melalui pintu air Esna, dan ia pun perlahan." },
      {
        q: "Naik kapal terbang atau kereta api tidur ke Luxor dan Aswan?",
        a: `Jika keselesaan lebih penting daripada harga, lebih baik terbang: Kaherah–Luxor kurang daripada sejam, Kaherah–Aswan kira-kira sejam suku. Kereta api mengambil masa kira-kira sepuluh jam ke Luxor dan tiga belas jam ke Aswan, jadi biasanya ia dinaiki pada waktu malam — dalam kabin dua katil dengan sinki, termasuk makan malam dan sarapan, tetapi tandasnya dikongsi; menuju ke selatan ia tiba di Luxor sekitar jam lima setengah pagi. Pakej kami yang menggunakan kereta api tidur juga ditawarkan dengan penerbangan domestik dan bermalam di hotel, dengan tambahan ${FLY_EXTRA} € seorang.`,
      },
    ],
    cta: {
      heading: "Mari pilih kapalnya bersama",
      text: "Nyatakan tarikh dan bilangan peserta; kami akan berterus terang yang mana lebih sesuai — dahabiya atau kapal besar.",
      whatsapp: "Salam Kemet — saya berminat dengan pelayaran persendirian di Sungai Nil.",
      emailSubject: "Pertanyaan — pelayaran Sungai Nil",
    },
    moreLabel: "Perincian laluan",
    moreText:
      "Perincian harian pelayaran, jenis kapal dan harga tersedia dalam Bahasa Inggeris di laman utama. Hubungi kami dalam Bahasa Melayu.",
  },

  // ===== Kos ===============================================================
  {
    groupId: "cost",
    symbol: "scales",
    title: `Kos Percutian ke Mesir — anggaran sebenar ${BUILD_YEAR} | Kemet`,
    description:
      "Berapa kos percutian persendirian ke Mesir: julat seorang sehari, lima perkara yang menggerakkan harga, dan apa yang sudah termasuk.",
    keywords:
      "kos percutian ke mesir, harga pakej mesir, bajet melancong ke mesir, belanja ke mesir",
    crumb: "Kos",
    h1: "Berapa kos percutian ke Mesir",
    standfirst:
      "Julat yang sebenar — dan lima keputusan yang benar-benar menggerakkan angkanya.",
    lede:
      "Percutian persendirian di Mesir lazimnya berada dalam julat 200–450 euro seorang sehari, tidak termasuk tiket penerbangan antarabangsa. Jurang antara kedua-dua angka itu bukan kebetulan: ia terhasil daripada lima keputusan yang anda buat semasa merancang. Eloklah mengenali kelima-limanya sebelum membandingkan dua sebut harga.",
    facts: [
      { label: "Peringkat asas", value: "±200 € seorang sehari" },
      { label: "Pertengahan", value: "±300 € seorang sehari" },
      { label: "Peringkat atas", value: "450 € ke atas" },
      { label: "Deposit", value: "25 %" },
    ],
    sections: [
      {
        title: "1. Bilangan peserta",
        body:
          "Inilah faktor paling kuat, jauh mengatasi yang lain. Egyptologist, kenderaan dan pemandu berharga sama sama ada untuk dua orang atau enam orang: kosnya dibahagi. Keluarga seramai enam orang kerap membayar jauh lebih murah seorang untuk percutian persendirian sepenuhnya berbanding pasangan suami isteri pada laluan yang sama.",
      },
      {
        title: "2. Kelas hotel",
        body:
          "Ini tuas kedua. Beza antara hotel empat bintang yang baik dan hotel mewah di tebing Sungai Nil boleh melebihi keseluruhan kos harian yang lain jika dijumlahkan. Sebaliknya, menukar hotel tidak mengubah tapak lawatan, pemandu mahupun tiket masuk — inilah item paling mudah dilaraskan tanpa menjejaskan perjalanan.",
      },
      {
        title: "3. Musim",
        body:
          "Oktober hingga April semuanya lebih mahal — itulah musim Mesir Hulu. Mei hingga September, hotel dan kapal yang sama turun banyak, kadangkala separuh, kerana Aswan mencecah 40 °C. Musim tidak mengubah mutu perjalanan, hanya waktu keluar melawat.",
      },
      {
        title: "4. Kapal di Sungai Nil",
        body:
          "Satu kabin di kapal lima bintang dan sewaan penuh sebuah dahabiya berada pada tahap kos yang berbeza sama sekali. Item inilah yang paling kerap menjelaskan keseluruhan beza antara dua sebut harga yang pada pandangan pertama menawarkan perkara yang sama.",
      },
      {
        title: "5. Penerbangan domestik",
        body:
          "Kaherah–Luxor dan Aswan–Kaherah ditempuh dengan pesawat: kira-kira sejam, berbanding sepuluh jam perjalanan darat. Item ini kecil tetapi nyata, dan dalam sebut harga kami ia berdiri sebagai baris tersendiri, bukan dileburkan ke dalam pakej.",
      },
    ],
    highlights: {
      heading: "Yang sudah termasuk dalam harga kami",
      items: [
        "Egyptologist berlesen sepanjang perjalanan",
        "Semua tiket masuk tapak di sepanjang laluan",
        "Pemindahan persendirian berhawa dingin dan ambilan hotel",
        "Makan tengah hari pada hari lawatan, air setiap hari",
        "Tidak termasuk: tiket antarabangsa, visa, tip, perbelanjaan peribadi",
      ],
    },
    faqs: [
      { q: "Mengapa harga setiap pakej tidak disiarkan?", a: "Kerana angka itu akan salah bagi hampir semua orang yang membacanya. Laluan yang sama untuk dua orang pada bulan Januari dan enam orang pada bulan Jun tidak berharga sama seorang, dan bezanya besar. Kami memilih julat yang jujur dan sebut harga yang tepat, bukan angka penarik." },
      { q: "Adakah caj tersembunyi?", a: "Tiada. Setiap sebut harga menyenaraikan apa yang termasuk dan apa yang tidak, sebelum anda membayar apa-apa. Kami tidak membuat singgahan membeli-belah berkomisen dan tidak menambah caj setelah anda tiba." },
      { q: "Berapa perlu disediakan untuk tip?", a: "Tip sebahagian daripada adat di Mesir. Sediakan bersamaan 8–12 euro sehari seorang untuk pemandu, drebar dan anak kapal secara keseluruhan. Kami memberikan pecahannya sebelum berangkat supaya tidak janggal dan tidak berlebihan." },
      { q: "Bayaran dalam mata wang apa?", a: "Sebut harga kami dalam euro. Di Mesir, pound Mesir digunakan untuk perbelanjaan kecil; kad diterima di hotel dan restoran besar, kurang di tempat lain. Sediakan sedikit tunai untuk tip dan pasar." },
    ],
    cta: {
      heading: "Dapatkan sebut harga yang tepat",
      text: "Tarikh, bilangan peserta dan kelas hotel yang anda mahukan sudah memadai untuk angka yang pasti, bukan sekadar julat.",
      whatsapp: "Salam Kemet — saya mahukan sebut harga percutian ke Mesir.",
      emailSubject: "Permohonan sebut harga — Mesir",
    },
    moreLabel: "Perincian harga",
    moreText:
      "Pecahan item demi item berserta harga setiap laluan diterbitkan dalam Bahasa Inggeris di laman utama. Untuk sebut harga, tulis kepada kami dalam Bahasa Melayu.",
  },

  // ===== Masa terbaik ======================================================
  {
    groupId: "when-to-go",
    symbol: "sun",
    title: "Masa Terbaik ke Mesir — panduan bulan demi bulan | Kemet",
    description:
      "Bila masa terbaik ke Mesir: haba, kesesakan, harga dan hari besar, bulan demi bulan — untuk Kaherah, Luxor, Aswan dan Laut Merah.",
    keywords:
      "masa terbaik ke mesir, cuaca mesir, musim di mesir, mesir bulan berapa, cuti sekolah ke mesir",
    crumb: "Masa terbaik",
    h1: "Bila masa terbaik ke Mesir",
    standfirst:
      "Oktober hingga April untuk Lembah Nil. Selebihnya tahun ada sebabnya sendiri, dan sebabnya kukuh.",
    lede:
      "Jawapan ringkasnya: Oktober hingga April. Lembah Nil pada bulan-bulan itu suam tanpa menyeksa, dan hari lawatan selesa dari pagi hingga petang. Jawapan panjangnya lebih menarik, kerana musim panas ada kelebihan yang nyata, dan Laut Merah tidak mengikut kalendar Luxor.",
    facts: [
      { label: "Terbaik", value: "Oktober – April" },
      { label: "Paling sesak", value: "Disember – Januari" },
      { label: "Paling panas", value: "Jun – Ogos" },
      { label: "Laut Merah", value: "baik sepanjang tahun" },
    ],
    sections: [
      {
        title: "Oktober hingga April — musimnya",
        body:
          "Luxor dan Aswan sekitar 25–30 °C pada waktu siang, dengan malam yang nyaman di geladak kapal. Kaherah terasa lembut. Inilah tempoh apabila lawatan petang masih selesa, dan sebab itulah semua orang datang. Buat tempahan dua hingga tiga bulan lebih awal, dan lebih awal lagi untuk hujung Disember.",
      },
      {
        title: "Mei hingga September — panas, dan kelebihannya",
        body:
          "Aswan kerap melepasi 40 °C. Lawatan dibuat antara pukul enam hingga sebelas, kemudian kembali ke hotel. Sebagai ganti: kuil yang hampir kosong, hotel dan kapal pada harga yang jauh berbeza, dan cahaya yang tidak muncul pada musim sibuk. Bagi Laut Merah, musim panas justeru yang terbaik.",
      },
      {
        title: "Menyelaraskan dengan kalendar Malaysia",
        body:
          "Cuti sekolah pertengahan tahun jatuh tepat pada kemuncak panas Mesir Hulu; ia tetap boleh dijalani dengan jadual pagi, dan kosnya jauh lebih ringan — ramai keluarga memilihnya justeru kerana itu. Cuti Aidilfitri berubah setiap tahun; jika jatuh antara Oktober dan April, itulah gabungan terbaik yang mungkin. Cuti akhir tahun pula bertembung dengan minggu tersibuk di Mesir, jadi tempah sangat awal.",
      },
      {
        title: "Ramadan di Mesir",
        body:
          "Tapak lawatan, muzium dan hotel beroperasi seperti biasa, dan waktu siang justeru lebih tenang. Yang berubah ialah irama kota: sebahagian kedai makan tempatan tutup sehingga maghrib, manakala malam-malam Kaherah menjadi salah satu pengalaman terkuat sepanjang tahun. Bagi tetamu yang berpuasa, kami menyusun jadual lawatan mengikut waktu solat dan berbuka, bukan sebaliknya.",
      },
    ],
    faqs: [
      { q: "Bolehkah ke Mesir pada musim panas?", a: "Boleh, asalkan menerima rentaknya: lawatan awal pagi, kembali ke hotel pada waktu paling panas, keluar semula menjelang petang. Balasannya tapak yang kosong dan harga yang turun banyak. Laut Merah pada musim panas pula sempurna." },
      { q: "Bulan apa paling selesa?", a: "November dan Mac ialah kompromi terbaik: habanya selesa, kesesakan masih munasabah, dan harga belum mencecah kemuncak hujung tahun." },
      { q: "Adakah Mesir kerap hujan?", a: "Hampir tidak pernah di Lembah Nil — beberapa milimeter setahun sahaja di Luxor dan Aswan. Alexandria dan pesisir Mediterranean menerima hujan sebenar pada musim sejuk, dan itu perlu diambil kira jika laluan anda turun sampai ke laut." },
      { q: "Bagaimana dengan waktu solat sepanjang perjalanan?", a: "Masjid ada di mana-mana, termasuk berhampiran kebanyakan tapak lawatan, dan jadual harian kami menyediakan ruang untuk solat tanpa anda perlu meminta. Nyatakan sahaja semasa perancangan supaya susunan harinya dibuat sejak awal." },
    ],
    cta: {
      heading: "Mari tetapkan tarikhnya",
      text: "Nyatakan bila anda boleh berangkat — kami jelaskan sejujurnya, kebaikan dan keburukan tempoh itu.",
      whatsapp: "Salam Kemet — bila masa terbaik untuk ke Mesir?",
      emailSubject: "Pertanyaan — masa terbaik ke Mesir",
    },
    moreLabel: "Panduan bulan demi bulan",
    moreText:
      "Panduan terperinci untuk kesemua dua belas bulan — suhu, kesesakan, harga dan hari besar — diterbitkan dalam Bahasa Inggeris di laman utama.",
  },

  // ===== Keselamatan =======================================================
  {
    groupId: "safety",
    symbol: "eye",
    title: "Adakah Mesir Selamat? Jawapan mengikut wilayah | Kemet",
    description:
      "Adakah Mesir selamat dikunjungi? Ditinjau mengikut wilayah — Kaherah, Luxor, Laut Merah dan Sinai — termasuk wanita bersendirian dan air minuman.",
    keywords:
      "adakah mesir selamat, keselamatan pelancong mesir, mesir bahaya, sinai selamat, percutian mesir selamat",
    crumb: "Keselamatan",
    h1: "Adakah Mesir selamat dikunjungi?",
    standfirst:
      "Bagi kawasan pelancongan, ya — dengan nota yang nyata, dan satu kawasan yang tidak boleh ada dalam mana-mana laluan.",
    lede:
      "Kawasan yang dikunjungi pelancong — Kaherah, Giza, Luxor, Aswan, Alexandria dan pesisir Laut Merah — menerima berjuta tetamu setiap tahun dan dikawal rapi. Jenayah kekerasan terhadap pelancong jarang berlaku. Masalah yang benar-benar nyata berlainan jenisnya: peniaga yang mendesak, lalu lintas Kaherah, dan haba. Berikut perinciannya, tanpa dimanis-maniskan.",
    facts: [
      { label: "Lembah Nil", value: "selamat, dikawal rapi" },
      { label: "Laut Merah", value: "selamat" },
      { label: "Sinai Selatan", value: "selamat di pesisir" },
      { label: "Sinai Utara", value: "jangan dikunjungi" },
    ],
    sections: [
      {
        title: "Apa yang selamat, dan sebabnya",
        body:
          "Kaherah, Giza, Saqqara, Luxor, Aswan, Abu Simbel, Alexandria, Hurghada dan Sharm El Sheikh menampung sebahagian besar pelancongan Mesir, dan kehadiran pihak berkuasa jelas kelihatan di tapak, jalan raya dan pintu hotel. Sebuah keluarga dalam perjalanan persendirian bukan sasaran; risiko hariannya lebih menyerupai mana-mana bandar besar, dengan tahap keganasan yang lebih rendah.",
      },
      {
        title: "Kawasan yang mesti dikecualikan",
        body:
          "Sinai Utara — di luar jalur pesisir pelancongan, ke arah sempadan Gaza — berada di bawah amaran rasmi hampir semua kementerian luar negeri, termasuk Kementerian Luar Negeri Malaysia. Tiada laluan yang serius memasukinya, termasuk laluan kami. Sebaliknya, Sharm El Sheikh, Dahab dan pesisir Sinai Selatan ialah dunia yang berbeza sama sekali dan dikunjungi seperti biasa.",
      },
      {
        title: "Wanita yang bermusafir bersendirian",
        body:
          "Ia boleh dilakukan dan ramai yang melakukannya, tetapi kami berterus terang: perhatian dan komen di jalanan lebih kerap berbanding di Asia Tenggara, terutamanya di Kaherah. Pakaian yang menutup bahu dan lutut, kenderaan persendirian dan bukan berjalan kaki pada waktu malam, serta pemandu yang sentiasa mengiringi menghilangkan hampir keseluruhan masalah itu. Kebanyakannya menggambarkannya sebagai memenatkan dari segi sosial, bukan berbahaya.",
      },
      {
        title: "Air, makanan dan haba",
        body:
          "Jangan minum air paip: air botol ada di mana-mana dan kami membekalkannya setiap hari. Hotel dan kedai makan yang sibuk jarang bermasalah; jus tepi jalan dan ulam yang dibasuh dengan air paip lebih berisiko. Pada musim panas, ancaman kesihatan yang sebenar ialah haba, bukan jenayah — sebab itulah lawatan dijadualkan awal pagi.",
      },
      {
        title: "Peniaga, dan bagaimana mereka hilang",
        body:
          "Di sekitar piramid dan kuil besar, pelawaan datang tanpa henti: unta, cenderamata, 'gambar percuma' yang rupanya tidak percuma. Ia tidak berbahaya, cuma memenatkan. Dengan Egyptologist dan pemandu persendirian, sebahagian besarnya lenyap: anda tidak berhenti di tempat yang salah, anda tidak keseorangan, dan ada orang yang menjawab bagi pihak anda.",
      },
    ],
    faqs: [
      { q: "Apa kata nasihat rasmi?", a: "Kebanyakan kementerian luar negeri menasihatkan kewaspadaan biasa bagi kawasan pelancongan dan melarang keras Sinai Utara serta kawasan gurun sempadan di barat dan selatan. Semak halaman rasmi negara anda sebelum menempah: ia lebih berwibawa daripada mana-mana halaman komersial, termasuk halaman ini." },
      { q: "Sesuaikah Mesir untuk kanak-kanak?", a: "Sesuai, malah negara yang mudah difahami kanak-kanak. Yang perlu dilaraskan ialah rentaknya: pagi yang lebih pendek, rehat pada waktu panas, dan air minuman sepanjang masa. Banyak perjalanan kami ialah perjalanan keluarga." },
      { q: "Perlukah insurans khas?", a: "Insurans perjalanan yang merangkumi rawatan perubatan dan pemindahan sangat digalakkan, seperti di mana-mana. Jika program anda merangkumi menyelam, pastikan aktiviti itu dilindungi: banyak polisi standard mengecualikannya melebihi kedalaman tertentu." },
      { q: "Selamatkah berjalan sendiri di Kaherah?", a: "Selamat, di kawasan biasa dan pada waktu siang. Halangannya bukan keselamatan tetapi lalu lintas: melintas jalan besar di Kaherah ialah satu latihan tersendiri, dan pemandu teksi menawar. Kereta berserta pemandu tidak mahal dan menghapuskan kedua-dua kerenah itu." },
    ],
    cta: {
      heading: "Ada soalan khusus tentang keselamatan?",
      text: "Silakan tanya: kami menjawab dengan terus terang, termasuk apabila jawapannya ialah 'lebih baik jangan'.",
      whatsapp: "Salam Kemet — saya ada soalan tentang keselamatan di Mesir.",
      emailSubject: "Pertanyaan — keselamatan di Mesir",
    },
    moreLabel: "Panduan penuh",
    moreText:
      "Panduan keselamatan Mesir yang terperinci mengikut wilayah diterbitkan dalam Bahasa Inggeris di laman utama.",
  },

  // ===== Visa ==============================================================
  // ===== Akses eksklusif ====================================================
  // Pasaran Malaysia untuk halaman ini ialah ACARA, bukan percutian: sesi
  // pertunangan dan prewedding di luar negara, majlis kedua, ulang tahun
  // perkahwinan, dan perjalanan insentif korporat — selalunya disambung dengan
  // umrah. Justeru penekanannya pada kebenaran rasmi dan kepastian tarikh.
  {
    groupId: "private-access",
    symbol: "horus",
    title: "Tempahan Eksklusif Tapak Mesir — Piramid & Karnak | Kemet",
    description:
      "Monumen Mesir dipegang untuk satu rombongan: Piramid Agung selepas waktu lawatan, Karnak untuk jamuan malam, dataran Giza sebelum pintu dibuka.",
    keywords:
      "tempah piramid untuk majlis, akses eksklusif piramid giza, fotografi prewedding di mesir, majlis perkahwinan di mesir, acara korporat mesir, sewa tapak bersejarah mesir",
    crumb: "Akses eksklusif",
    h1: "Ditutup kepada semua orang kecuali anda",
    standfirst:
      "Bukan waktu sunyi, bukan pintu sisi — monumennya, kosong, dan yang berada di dalamnya hanya rombongan anda.",
    lede:
      "Ada tempat di Mesir yang boleh ditutup kepada orang awam dan dipegang untuk satu rombongan sahaja. Piramid Agung dibuka semula selepas waktu lawatan tamat; dataran Giza dimasuki sebelum pintu dibuka; meja jamuan digelar di dalam kompleks Karnak. Semua ini bukan soal membayar lebih, tetapi soal KEBENARAN rasmi — dan kebenaran itulah yang kami uruskan atas nama anda.",
    facts: [
      { label: "Asasnya", value: "Kebenaran rasmi, bukan bayaran" },
      { label: "Dipohon", value: "Atas nama anda" },
      { label: "Tempoh", value: "Beberapa minggu hingga beberapa bulan" },
      { label: "Bayaran", value: "Tiada sebelum kebenaran diluluskan" },
    ],
    sections: [
      {
        title: "Piramid Agung, dua jam tanpa orang lain",
        body:
          "Piramid ditutup kepada orang awam lalu dibuka semula untuk satu rombongan, dengan dua jam penuh di dalamnya. Anda menaiki Grand Gallery tanpa barisan di belakang dan tanpa suara di hadapan, dan boleh duduk diam di Bilik Raja — satu perkara yang tidak pernah diperoleh sesiapa yang datang pada waktu siang. Kebenarannya melibatkan Kementerian Pelancongan dan Purbakala, Kementerian Dalam Negeri, serta penyeliaan kawasan piramid. Ia tidak boleh dibeli dalam talian pada sebarang harga.",
      },
      {
        title: "Dataran Giza sebelum pintu dibuka",
        body:
          "Gambar dataran ketika matahari terbit dengan empat ratus orang lain di dalamnya sudah dimiliki semua orang. Sebelum pintu dibuka, tempat itu berbeza sama sekali: tiada bas, tiada penjaja unta, tiada barisan di Sphinx, dan cahaya masuk mendatar dari timur. Tingkapnya 5.00–7.00 pagi (April–September) dan 6.00–8.00 pagi (Oktober–Mac) — inilah pilihan paling kerap untuk sesi prewedding.",
      },
      {
        title: "Jamuan malam di dalam Karnak",
        body:
          "Karnak ialah bangunan keagamaan terbesar yang pernah didirikan, dan dewan hypostyle-nya menampung seratus tiga puluh empat tiang setinggi bangunan enam tingkat. Selepas tapak ditutup, meja boleh digelar di dalam kompleks dan tiang-tiang disuluh dari bawah — persis cara ia sepatutnya dilihat. Muat untuk jamuan kecil sehingga kira-kira dua ratus tetamu, lengkap dengan pencahayaan, bunyi, pentas dan katering.",
      },
      {
        title: "Untuk rombongan korporat dan keluarga besar",
        body:
          "Perjalanan insentif dari Kuala Lumpur biasanya mendarat dengan satu transit melalui Teluk, dan banyak rombongan menyambungnya dengan umrah. Untuk acara syarikat, teres Kubu Salahuddin memandang seluruh Kaherah sehingga ke piramid pada petang yang cerah — satu-satunya tempat di ibu kota yang menunjukkan semuanya serentak. Untuk keluarga besar, dahabiya disewa sepenuhnya: bukan kabin di atas kapal, tetapi kapalnya.",
      },
      {
        title: "Kerahsiaan sebagai standard",
        body:
          "Tiada acara persendirian yang kami siarkan, namakan atau rakam. Tiada pelanggan dijadikan rujukan tanpa dipohon kebenaran dahulu, dan tiada satu pun malam muncul di laman ini. Jika acara anda memerlukan perjanjian kerahsiaan sebelum perbualan pertama dan bukan selepasnya, katakan sahaja — dokumennya dihantar pada hari yang sama.",
      },
    ],
    highlights: {
      heading: "Tapak yang boleh dipegang eksklusif",
      items: [
        "Piramid Agung Khufu — dua jam penuh di dalam, selepas waktu lawatan",
        "Dataran Giza — sebelum pintu dibuka, untuk dua orang hingga rombongan besar",
        "Kompleks Karnak, Luxor — jamuan malam sehingga kira-kira 200 tetamu",
        "Grand Egyptian Museum — galeri ditutup untuk satu rombongan",
        "Kubu Salahuddin, Kaherah — teres memandang seluruh ibu kota",
        "Philae, Aswan — pulau kuil selepas bot awam terakhir berlepas",
        "Teres Hatshepsut, Luxor — tiga tingkat di kaki tebing Thebes",
        "Dahabiya — disewa sepenuhnya, bukan mengikut kabin",
      ],
    },
    faqs: [
      {
        q: "Piramid Agung benar-benar boleh ditempah secara persendirian?",
        a: "Boleh, dan inilah pengaturan paling sukar di Mesir. Piramid ditutup kepada orang awam lalu dibuka semula untuk satu rombongan, dengan dua jam penuh di dalamnya. Asasnya kebenaran rasmi daripada Kementerian Pelancongan dan Purbakala, Kementerian Dalam Negeri, dan penyeliaan kawasan — atas permohonan bertulis yang menyatakan tujuan, waktu tepat dan bilangan orang. Sesiapa yang menawarkannya sebagai tempahan segera tidak sedang menawarkan perkara yang sebenar.",
      },
      {
        q: "Berapa awal saya perlu menghubungi?",
        a: "Beberapa minggu untuk dataran Giza sebelum waktu buka, Kubu, atau malam di muzium. Dua hingga tiga bulan untuk acara penuh di dalam kompleks kuil, kerana pencahayaan, bunyi, pentas dan katering masing-masing memerlukan kelulusan sendiri. Berbulan-bulan untuk Piramid Agung. Jika tarikh anda sudah tetap, itulah perkara pertama yang perlu kami tahu — segalanya boleh direka mengikut kebenaran, tetapi kebenaran tidak boleh direka mengikut tarikh.",
      },
      {
        q: "Boleh untuk fotografi prewedding atau majlis?",
        a: "Boleh. Sesi prewedding paling kerap mengambil dataran Giza sebelum pintu dibuka, kerana cahayanya dan kerana kawasannya benar-benar kosong. Untuk majlis atau jamuan, kompleks Karnak dan teres Kubu ialah dua pilihan yang menampung ramai tetamu. Perkahwinan dari segi undang-undang diuruskan berasingan melalui kedutaan atau di Malaysia — kebanyakan pasangan berkahwin secara rasmi dahulu, kemudian mengadakan upacaranya di sini.",
      },
      {
        q: "Berapa kosnya?",
        a: "Ia ditawarkan, bukan disenaraikan. Angkanya disusun daripada yuran kebenaran bagi tapak berkenaan, bilangan tetamu, tarikh, dan apa yang malam itu perlukan — meja untuk lapan orang di dalam Karnak dan jamuan dua ratus tetamu dengan pentas bukan dua versi satu harga. Kami mengemukakan sebut harga bertulis dan terperinci sebelum sebarang komitmen.",
      },
      {
        q: "Bagaimana jika kebenaran ditolak?",
        a: "Tiada bayaran sebelum kebenaran diluluskan, jadi penolakan tidak merugikan anda. Sejak perbualan pertama kami akan menyatakan sejauh mana kemungkinannya, dan jika pada pandangan kami tarikh atau tapak itu tidak realistik kami menyatakannya ketika itu juga — bukan selepas deposit. Jika penolakan mungkin berlaku, pilihan kedua dipersetujui sebelum permohonan dihantar.",
      },
    ],
    cta: {
      heading: "Ceritakan majlisnya",
      text: "Tarikh dahulu jika sudah ada — kebenaran ialah bahagian paling panjang, dan selebihnya mengikut. Jika apa yang anda bayangkan tidak mungkin, kami menyatakannya pada balasan pertama, bukan pada balasan keempat.",
      whatsapp: "Salam Kemet — saya ingin bertanya tentang akses eksklusif ke tapak di Mesir untuk sesuatu majlis. Boleh kita bincangkan tarikhnya?",
      emailSubject: "Akses eksklusif — pertanyaan",
    },
    moreLabel: "Selengkapnya dalam bahasa Inggeris",
    moreText: "Lapan tapak, berserta laluan kebenaran masing-masing, dijelaskan sepenuhnya di halaman bahasa Inggeris.",
  },
];
