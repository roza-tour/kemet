// ---------------------------------------------------------------------------
// Halaman Bahasa Indonesia yang tidak ada padanan Inggrisnya.
//
// WHY THESE FOUR AND NOT A TRANSLATION OF FOUR ENGLISH PAGES
// The Indonesian market does not search a translated version of the English
// long tail. It searches things the English site does not answer at all, and
// would have no reason to: whether Egypt can be attached to an Umrah, what a
// ziarah route through Islamic Cairo actually contains, how to reach Mount
// Sinai, and how prayer and food work across a touring day. Four English
// pages rendered in Indonesian would compete for terms the site already
// ranks for in English; these four compete for terms nothing on the domain
// addresses.
//
// Each has no English original, so it carries no hreflang — see
// data/i18n/standalone.ts for why a cluster of one is worse than none.
//
// ⚠️ ACCURACY. Two rules were applied throughout:
//   · Nothing is promised that operations would have to improvise. The Umrah
//     itself is explicitly NOT sold — that is the reader's own operator's
//     job, and saying otherwise would be a claim this business cannot honour.
//   · Religious and historical statements are the uncontested ones: that
//     Imam al-Shafi'i is buried in Cairo, that Amr ibn al-As is the first
//     mosque built in Africa, that St Catherine's stands at the foot of the
//     mountain. Where a site is disputed or traditional rather than
//     established — which peak is the Biblical one — it is said to be
//     traditional, because it is.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";

// ===== Umrah + Mesir =======================================================
export const idUmrah: LocalizedPage = {
  groupId: "standalone-id-umrah",
  symbol: "ankh",
  title: "Umrah Plus Mesir — cara menyambung keduanya | Kemet",
  description:
    "Menggabungkan umrah dengan perjalanan ke Mesir: Jeddah–Kairo hanya sekitar dua jam. Apa yang kami atur, apa yang tidak, dan berapa hari yang masuk akal.",
  keywords:
    "umrah plus mesir, paket umrah dan mesir, jeddah ke kairo, wisata mesir setelah umrah, ziarah mesir",
  crumb: "Umrah plus Mesir",
  h1: "Menyambung Mesir dengan umrah Anda",
  standfirst:
    "Jeddah ke Kairo sekitar dua jam. Itulah satu-satunya alasan teknis mengapa penggabungan ini masuk akal.",
  lede:
    "Banyak tamu kami tiba di Mesir beberapa hari sebelum atau sesudah ibadah di Arab Saudi. Jaraknya memang pendek — Jeddah–Kairo kurang dari dua setengah jam, dan penerbangannya banyak setiap hari. Yang perlu diatur bukan penerbangannya, melainkan susunan harinya: berapa hari yang masuk akal setelah perjalanan yang melelahkan, dan urutan mana yang tidak membuat salah satunya terasa terburu-buru.",
  facts: [
    { label: "Jeddah → Kairo", value: "±2 jam 15 menit" },
    { label: "Tambahan wajar", value: "5–8 hari" },
    { label: "Urutan terbaik", value: "umrah dahulu" },
    { label: "Yang kami atur", value: "bagian Mesir saja" },
  ],
  sections: [
    {
      title: "Yang kami atur, dan yang tidak",
      body:
        "Kami mengatur bagian Mesir: penjemputan di bandara, hotel, pemandu Egyptologist berlisensi, kendaraan, tiket masuk, dan penerbangan domestik di dalam Mesir. Kami TIDAK menyelenggarakan umrah dan tidak mengurus visa Arab Saudi — itu ranah penyelenggara umrah Anda, dan menyatakan sebaliknya berarti menjanjikan sesuatu yang bukan kewenangan kami. Yang kami lakukan adalah menyesuaikan tanggal bagian Mesir dengan jadwal yang sudah Anda pegang, sehingga keduanya tersambung tanpa hari yang terbuang.",
    },
    {
      title: "Sebaiknya Mesir sebelum atau sesudah?",
      body:
        "Sesudah, hampir selalu. Ibadah menuntut tenaga dan konsentrasi, dan menempatkannya setelah seminggu berjalan kaki di Luxor bukan awal yang baik. Sebaliknya, Mesir setelah umrah terasa seperti pelonggaran: ritmenya lebih lambat, harinya lebih pendek, dan tidak ada yang wajib. Bila jadwal penerbangan memaksa urutan sebaliknya, kami memperpendek hari-hari pertama di Mesir agar Anda tidak tiba di Makkah dalam keadaan lelah.",
    },
    {
      title: "Berapa hari yang masuk akal",
      body:
        "Lima hari memberi Kairo dengan layak: Giza dan Saqqara, Grand Egyptian Museum, dan satu hari penuh untuk Kairo Islam. Delapan hari menambahkan Luxor dengan penerbangan domestik. Sepuluh sampai dua belas menambahkan pelayaran Sungai Nil ke Aswan. Kurang dari empat hari sebaiknya tidak — Anda akan menghabiskannya di jalan dan di bandara.",
    },
    {
      title: "Rombongan besar dan jamaah yang datang bersama",
      body:
        "Rombongan yang tiba bersama dari satu penyelenggara umrah bukan masalah, justru sebaliknya: biaya pemandu dan kendaraan dibagi, sehingga biaya per orang turun jauh. Yang kami minta hanyalah jumlah pasti dan komposisi rombongan sejak awal, karena itu menentukan jumlah kendaraan dan pembagian pemandu — dan itu tidak bisa diputuskan di hari keberangkatan.",
    },
  ],
  highlights: {
    heading: "Yang biasanya ditambahkan setelah umrah",
    items: [
      "Satu hari penuh Kairo Islam: Al-Azhar, Imam Asy-Syafi'i, Amr bin Ash",
      "Giza dan Saqqara dengan Egyptologist, dimulai pagi buta",
      "Grand Egyptian Museum — setengah hari, bukan satu jam",
      "Gunung Sinai dan Biara Santa Katarina, bila waktunya cukup",
      "Luxor dengan penerbangan domestik, bila ada delapan hari atau lebih",
    ],
  },
  faqs: [
    { q: "Apakah Kemet menyelenggarakan umrah?", a: "Tidak. Kami mengatur bagian Mesir saja — hotel, pemandu, kendaraan, tiket dan penerbangan domestik di dalam Mesir. Ibadah dan visa Arab Saudi diurus penyelenggara umrah Anda. Kami menyesuaikan tanggal kami dengan jadwal mereka." },
    { q: "Berapa lama penerbangan Jeddah ke Kairo?", a: "Sekitar dua jam seperempat, dengan beberapa penerbangan setiap hari dari beberapa maskapai. Praktisnya: berangkat pagi dari Jeddah dan Anda sudah di hotel Kairo sebelum makan siang." },
    { q: "Apakah perlu visa terpisah untuk Mesir?", a: "Ya, Mesir dan Arab Saudi adalah dua negara dengan aturan masing-masing. Ketentuan masuk berubah dan kami tidak menebak: sebutkan kewarganegaraan dan tanggal Anda, dan kami periksakan terhadap portal resmi pemerintah Mesir — visa2egypt.gov.eg — sebelum ada pemesanan." },
    { q: "Bisakah tanggalnya belum pasti?", a: "Bisa, dan itu lumrah: tanggal umrah sering baru pasti belakangan. Kami menyusun rancangan dengan tanggal sementara, dan menetapkannya setelah jadwal Anda pasti. Tidak ada pembayaran sebelum tanggalnya fix." },
  ],
  cta: {
    heading: "Kirimkan jadwal umrah Anda",
    text: "Tanggal keberangkatan dan kepulangan dari Arab Saudi, serta jumlah jamaah — cukup itu untuk menyusun bagian Mesir di sekitarnya.",
    whatsapp: "Halo Kemet — saya ingin menyambung perjalanan ke Mesir dengan umrah.",
    emailSubject: "Umrah plus Mesir — permintaan rancangan",
  },
  moreLabel: "Selengkapnya",
  moreRoute: "id/paket-tour-mesir.html",
  moreText:
    "Rute lengkap kami di Mesir, dengan rincian harian, ada di halaman paket tour. Katalog penuh tersedia dalam Bahasa Inggris.",
  links: [
    { label: "Ziarah Kairo Islam", route: "id/ziarah-kairo-islam.html" },
    { label: "Gunung Sinai dan Biara Santa Katarina", route: "id/gunung-sinai.html" },
  ],
};

// ===== Ziarah Kairo Islam ==================================================
export const idZiarah: LocalizedPage = {
  groupId: "standalone-id-ziarah",
  symbol: "eye",
  title: "Ziarah Kairo Islam — Al-Azhar & Imam Asy-Syafi'i | Kemet",
  description:
    "Satu hari penuh di Kairo Islam: Al-Azhar, makam Imam Asy-Syafi'i, Masjid Amr bin Ash, Sultan Hassan dan Ibnu Thulun, dengan pemandu dan kendaraan pribadi.",
  keywords:
    "ziarah kairo, makam imam syafii kairo, masjid al azhar, masjid amr bin ash, kairo islam, wisata religi mesir",
  crumb: "Ziarah Kairo Islam",
  h1: "Kairo Islam, dalam satu hari penuh",
  standfirst:
    "Bukan satu jam yang diselipkan di antara piramida — ini hari tersendiri, dan memang menuntutnya.",
  lede:
    "Kairo menyimpan seribu tahun sejarah Islam dalam radius beberapa kilometer, dan sebagian besar brosur Eropa melewatkannya sama sekali. Untuk tamu dari Indonesia daftar ini justru sering yang pertama disebut. Semuanya bisa dijalani dalam satu hari bila disusun menurut letaknya, bukan menurut urutan dalam buku — dan itulah yang menentukan apakah hari ini terasa penuh atau terburu-buru.",
  facts: [
    { label: "Lama", value: "satu hari penuh" },
    { label: "Mulai", value: "setelah subuh" },
    { label: "Pemandu", value: "Egyptologist berlisensi" },
    { label: "Ditutup di", value: "Khan el-Khalili" },
  ],
  sections: [
    {
      title: "Makam Imam Asy-Syafi'i",
      body:
        "Imam Muhammad bin Idris asy-Syafi'i wafat di Fustat pada tahun 204 H dan dimakamkan di Kairo. Kubah makamnya, yang dibangun kembali pada masa Ayyubiyah, adalah salah satu bangunan kayu berkubah terbesar di Mesir. Bagi sebagian besar tamu Indonesia — yang mengikuti mazhab beliau — ini kerap menjadi titik paling berkesan dalam seluruh perjalanan, dan kami memberinya waktu yang layak, bukan perhentian sepuluh menit.",
    },
    {
      title: "Masjid Amr bin Ash",
      body:
        "Masjid pertama yang dibangun di benua Afrika, didirikan pada tahun 21 H ketika Fustat masih kota baru. Bangunan yang berdiri sekarang adalah hasil pemugaran berabad-abad, tetapi letaknya tidak pernah berpindah — Anda berdiri di tapak yang sama. Letaknya bersebelahan dengan kawasan Koptik, sehingga keduanya wajar digabung dalam satu pagi.",
    },
    {
      title: "Al-Azhar dan kota Fatimiyah",
      body:
        "Masjid Al-Azhar didirikan tahun 359 H dan universitasnya termasuk yang tertua yang masih berjalan sampai hari ini — dengan ribuan mahasiswa Indonesia di dalamnya. Dari sana jalan Al-Muizz membentang ke utara melewati Sultan Hassan, Ar-Rifa'i, madrasah-madrasah Mamluk, sampai gerbang Bab al-Futuh. Berjalan kaki adalah satu-satunya cara: kawasan ini tidak dirancang untuk mobil.",
    },
    {
      title: "Ibnu Thulun, dan mengapa disimpan terakhir",
      body:
        "Masjid Ahmad bin Thulun, tahun 265 H, adalah masjid tertua di Kairo yang masih utuh dalam bentuk aslinya — halaman terbuka yang luas dan menara spiral yang tidak ada duanya di Mesir. Kami menyimpannya menjelang sore karena pada jam itu halamannya nyaris kosong dan cahayanya rendah, dan karena setelah setengah hari yang padat, ruang seluas itu terasa seperti tarikan napas.",
    },
    {
      title: "Waktu salat mengatur hari, bukan sebaliknya",
      body:
        "Hari ini disusun mengikuti waktu salat, bukan menyesuaikannya belakangan. Anda salat di masjid-masjid yang sedang dikunjungi — dan salat di Al-Azhar atau di Ibnu Thulun adalah bagian dari kunjungan itu sendiri, bukan jeda darinya. Jumat diperlakukan tersendiri: jadwalnya lebih longgar dan sebagian kunjungan dipindahkan ke sore.",
    },
  ],
  faqs: [
    { q: "Apakah cukup satu hari?", a: "Cukup, bila disusun menurut letak dan dimulai pagi. Yang tidak cukup adalah menyelipkannya sebagai setengah hari di sela Giza — itu berarti dua atau tiga perhentian tergesa dan kawasan Al-Muizz terlewat sama sekali." },
    { q: "Apakah non-Muslim boleh masuk?", a: "Ke sebagian besar masjid di Kairo, ya, di luar waktu salat dan dengan pakaian yang pantas. Rombongan campuran biasa kami tangani dan tidak menjadi masalah." },
    { q: "Bagaimana dengan pakaian?", a: "Bahu dan lutut tertutup untuk semua, dan kerudung untuk perempuan di dalam masjid — sebagian menyediakan pinjaman, tetapi membawa sendiri lebih nyaman. Sepatu dilepas di pintu, jadi kaus kaki memudahkan." },
    { q: "Bisakah digabung dengan hari Giza?", a: "Bisa secara teknis, tidak kami sarankan. Keduanya hari penuh. Menggabungkannya berarti memotong keduanya, dan yang lebih dahulu dipotong biasanya justru bagian yang Anda datang untuk melihatnya." },
  ],
  cta: {
    heading: "Susun hari ziarah Anda",
    text: "Sebutkan tanggal dan jumlah rombongan; kami susun urutannya menurut letak dan waktu salat.",
    whatsapp: "Halo Kemet — saya ingin hari ziarah di Kairo Islam.",
    emailSubject: "Ziarah Kairo Islam — permintaan rancangan",
  },
  moreLabel: "Selengkapnya",
  moreRoute: "id/paket-tour-mesir.html",
  moreText:
    "Hari ini berdiri sendiri dan dapat disisipkan ke rute mana pun. Rute lengkap kami ada di halaman paket tour.",
  links: [
    { label: "Umrah plus Mesir", route: "id/umrah-plus-mesir.html" },
    { label: "Makanan halal dan waktu salat", route: "id/halal-dan-waktu-salat.html" },
  ],
};

// ===== Gunung Sinai ========================================================
export const idSinai: LocalizedPage = {
  groupId: "standalone-id-sinai",
  symbol: "sun",
  title: "Gunung Sinai & Biara Santa Katarina — panduan | Kemet",
  description:
    "Mendaki Gunung Sinai untuk menyaksikan matahari terbit, dan Biara Santa Katarina di kakinya. Berapa lama, seberapa berat, kapan, dan bagaimana mencapainya.",
  keywords:
    "gunung sinai, jabal musa, biara santa katarina, mendaki gunung sinai, wisata sinai mesir",
  crumb: "Gunung Sinai",
  h1: "Gunung Sinai, dan biara di kakinya",
  standfirst:
    "Naik dalam gelap, tiba saat fajar, turun sebelum panas. Tiga jam mendaki, dan tidak perlu menjadi pendaki.",
  lede:
    "Jabal Musa berdiri 2.285 meter di jantung Sinai selatan, dan menurut tradisi di puncaknya Nabi Musa menerima wahyu. Di kakinya berdiri Biara Santa Katarina, salah satu biara tertua di dunia yang tidak pernah berhenti beroperasi sejak abad keenam. Pendakiannya dilakukan malam hari agar Anda tiba di puncak saat matahari terbit — dan agar Anda tidak mendaki di bawah matahari Sinai.",
  facts: [
    { label: "Ketinggian", value: "2.285 meter" },
    { label: "Naik", value: "±3 jam" },
    { label: "Mulai", value: "sekitar pukul 01.00" },
    { label: "Suhu puncak", value: "dingin, bahkan musim panas" },
  ],
  sections: [
    {
      title: "Seberapa berat sebenarnya",
      body:
        "Tidak perlu pengalaman mendaki. Jalur unta yang landai memakan waktu sekitar tiga jam dengan langkah santai, dan hanya 750 anak tangga batu terakhir yang benar-benar menanjak — bagian itu harus dijalani sendiri. Unta tersedia untuk sebagian besar jalur bagi yang membutuhkan. Yang paling sering mengejutkan orang bukan pendakiannya, melainkan dinginnya di puncak: bahkan pada bulan Agustus suhunya bisa mendekati nol sebelum fajar, dan angin bertiup kencang.",
    },
    {
      title: "Biara Santa Katarina",
      body:
        "Dibangun atas perintah Kaisar Yustinianus pada abad keenam dan tidak pernah kosong sejak itu. Di dalamnya tersimpan salah satu koleksi ikon dan manuskrip tertua di dunia. Di kompleks yang sama berdiri sebuah masjid Fatimiyah dari abad kesebelas — dibangun di dalam biara, dan itulah sebabnya tempat ini bertahan ketika begitu banyak yang lain tidak. Biara hanya buka pada pagi hari dan tutup pada hari Jumat, Minggu dan hari-hari besar, sehingga kunjungan dilakukan setelah turun dari gunung.",
    },
    {
      title: "Bagaimana mencapainya",
      body:
        "Dari Sharm El Sheikh sekitar tiga jam berkendara, dan inilah cara yang paling masuk akal — banyak tamu kami menggabungkannya dengan beberapa hari di Laut Merah. Dari Kairo perjalanan darat memakan tujuh sampai delapan jam, sehingga hampir selalu lebih baik terbang ke Sharm terlebih dahulu. Menginap semalam di dekat biara membuat pendakian jauh lebih manusiawi daripada berangkat tengah malam dari pantai.",
    },
    {
      title: "Kapan sebaiknya",
      body:
        "Sepanjang tahun, dengan catatan. Musim panas: mendaki justru paling nyaman karena dilakukan malam hari, tetapi bawa jaket. Musim dingin: siangnya menyenangkan, tetapi puncak bisa di bawah nol dan sesekali bersalju. Bulan purnama membuat jalur terang dan indah; bulan gelap membuat langit berbintang menjadi alasan tersendiri untuk naik.",
    },
  ],
  highlights: {
    heading: "Yang perlu dibawa",
    items: [
      "Jaket tebal dan sarung tangan — puncaknya dingin sepanjang tahun",
      "Sepatu dengan sol yang mencengkeram, bukan sandal",
      "Senter kepala, agar tangan tetap bebas di anak tangga",
      "Air lebih banyak dari perkiraan Anda",
      "Pakaian sopan untuk biara: bahu dan lutut tertutup",
    ],
  },
  faqs: [
    { q: "Apakah anak-anak bisa ikut?", a: "Anak usia sekitar sepuluh tahun ke atas umumnya mampu, asalkan terbiasa berjalan jauh. Yang lebih kecil sebaiknya tidak: dinginnya, jamnya dan 750 anak tangga terakhir bukan kombinasi yang ramah. Untuk keluarga dengan anak kecil, biara saja tanpa pendakian tetap sepadan." },
    { q: "Apakah aman?", a: "Kawasan Sinai selatan — Sharm El Sheikh, Dahab, dan jalur ke Santa Katarina — dikunjungi secara normal dan diamankan. Yang berbeda sama sekali adalah Sinai UTARA, yang berada di bawah peringatan resmi dan tidak masuk dalam rute mana pun, termasuk rute kami." },
    { q: "Bisakah naik unta sampai puncak?", a: "Tidak sampai puncak. Unta mengantar sampai ujung jalur landai; 750 anak tangga terakhir harus dijalani kaki. Itu bagian tersulit sekaligus terpendek." },
    { q: "Berapa lama seluruhnya?", a: "Jika menginap di dekat biara: berangkat sekitar pukul satu dini hari, matahari terbit di puncak, turun sekitar pukul sembilan, biara pada pagi hari, dan kembali ke Sharm menjelang sore." },
  ],
  cta: {
    heading: "Tanyakan tentang Sinai",
    text: "Sebutkan tanggal dan dari mana Anda berangkat — Sharm atau Kairo — dan kami susun bagian ini dengan ritme yang masuk akal.",
    whatsapp: "Halo Kemet — saya ingin bertanya tentang Gunung Sinai dan Biara Santa Katarina.",
    emailSubject: "Gunung Sinai — permintaan rancangan",
  },
  moreLabel: "Selengkapnya",
  moreRoute: "id/paket-tour-mesir.html",
  moreText:
    "Bagian ini dapat disisipkan ke rute mana pun, dan paling wajar digabung dengan beberapa hari di Laut Merah.",
  links: [
    { label: "Umrah plus Mesir", route: "id/umrah-plus-mesir.html" },
    { label: "Apakah Mesir aman?", route: "id/apakah-mesir-aman.html" },
  ],
};

// ===== Halal & waktu salat =================================================
export const idHalal: LocalizedPage = {
  groupId: "standalone-id-halal",
  symbol: "lotus",
  title: "Makanan Halal & Waktu Salat di Mesir | Kemet",
  description:
    "Makanan di Mesir pada dasarnya halal karena negaranya mayoritas Muslim. Yang perlu dicek hanya beberapa hal kecil, dan bagaimana salat masuk dalam hari kunjungan.",
  keywords:
    "makanan halal di mesir, apakah makanan mesir halal, waktu salat di mesir, masjid dekat piramida, kuliner mesir",
  crumb: "Halal & waktu salat",
  h1: "Makanan dan salat, tanpa perlu dicari",
  standfirst:
    "Mesir negara mayoritas Muslim. Pertanyaannya bukan apakah ada yang halal, melainkan hal-hal kecil yang tetap perlu diperhatikan.",
  lede:
    "Ini pertanyaan pertama yang hampir selalu muncul, dan jawabannya melegakan: daging yang dijual di restoran dan hotel di Mesir pada dasarnya halal tanpa perlu dicari khusus, dan masjid ada di mana-mana termasuk di dekat hampir semua situs. Yang tetap perlu diperhatikan hanya beberapa hal, dan kami mengurusnya sebelum Anda duduk — bukan setelahnya.",
  facts: [
    { label: "Penduduk Muslim", value: "mayoritas besar" },
    { label: "Daging di restoran", value: "halal secara umum" },
    { label: "Yang perlu dicek", value: "hotel internasional" },
    { label: "Masjid", value: "di dekat hampir semua situs" },
  ],
  sections: [
    {
      title: "Yang benar-benar perlu diperhatikan",
      body:
        "Tiga hal, bukan lebih. Pertama, restoran hotel internasional yang juga menyajikan alkohol di ruang yang sama — bukan soal dagingnya, tetapi sebagian tamu tetap ingin tahu sebelumnya. Kedua, menu internasional di kapal pesiar Sungai Nil, yang kadang memuat bahan yang tidak Anda harapkan; kami menanyakannya ke dapur sebelum keberangkatan. Ketiga, kue dan hidangan penutup di hotel besar, yang sesekali memakai perisa beralkohol. Ketiganya kami tanyakan di awal, bukan saat Anda sudah di meja.",
    },
    {
      title: "Makanan Mesir yang layak dicoba",
      body:
        "Kusyari — beras, lentil, makaroni dan buncis di bawah bawang goreng dengan saus tomat pedas — adalah hidangan nasional dan sepenuhnya nabati. Ful dan ta'miya (falafel Mesir dari kacang fava, bukan kacang arab) adalah sarapan negeri ini. Molokhia, hamam mahsyi, fatta, dan untuk penutup: basbusa, kunafa, dan umm ali. Semuanya tersedia di rumah makan biasa yang ramai — dan di sanalah rasanya paling benar.",
    },
    {
      title: "Salat dalam hari kunjungan",
      body:
        "Jadwal harian kami menyisihkan waktu salat tanpa Anda perlu memintanya. Masjid berada di dekat hampir semua situs utama, dan di kompleks besar seperti Grand Egyptian Museum tersedia musala. Di Luxor dan Aswan, kunjungan pagi biasanya selesai sebelum zuhur. Bila Anda berpuasa — di bulan Ramadan atau puasa sunah — kami menyusun hari mengikuti waktu berbuka, bukan sebaliknya.",
    },
    {
      title: "Air, dan satu kebiasaan yang perlu dijaga",
      body:
        "Jangan minum air keran; air kemasan tersedia di mana-mana dan kami menyediakannya setiap hari. Hotel dan rumah makan yang ramai jarang bermasalah. Yang lebih berisiko adalah jus pinggir jalan dengan es yang tidak diketahui asalnya, dan lalapan mentah yang dicuci dengan air keran. Ini berlaku untuk semua wisatawan, bukan hanya dari Asia Tenggara.",
    },
  ],
  faqs: [
    { q: "Apakah semua daging di Mesir halal?", a: "Pada dasarnya ya: Mesir negara mayoritas Muslim dan rumah potong mengikuti tata cara Islam. Yang berbeda hanyalah beberapa hotel internasional dan kapal pesiar dengan menu asing — dan itu kami tanyakan lebih dahulu." },
    { q: "Apakah ada sertifikasi halal seperti di Indonesia?", a: "Tidak dalam bentuk label yang Anda kenal, karena di Mesir hal ini adalah kondisi normal dan bukan pengecualian yang perlu ditandai. Karena itu jangan mencari stiker halal — yang lebih berguna adalah bertanya, dan itu kami lakukan untuk Anda." },
    { q: "Apakah mudah salat berjamaah?", a: "Sangat mudah. Azan terdengar di mana-mana dan masjid terbuka sepanjang hari. Di Kairo Islam Anda justru salat di masjid-masjid yang sedang dikunjungi, dan itu bagian dari kunjungannya." },
    { q: "Bagaimana jika berkunjung saat Ramadan?", a: "Situs, museum dan hotel beroperasi normal, dan siang hari justru lebih tenang. Sebagian rumah makan lokal tutup sampai magrib. Kami memindahkan kunjungan ke pagi dan menyediakan waktu istirahat menjelang berbuka." },
  ],
  cta: {
    heading: "Ada pantangan atau kebutuhan khusus?",
    text: "Sebutkan sejak awal — alergi, pantangan, atau preferensi rombongan — dan itu masuk ke dalam rancangan, bukan ke catatan terakhir.",
    whatsapp: "Halo Kemet — saya ingin bertanya soal makanan dan waktu salat selama di Mesir.",
    emailSubject: "Pertanyaan — makanan halal dan waktu salat",
  },
  moreLabel: "Selengkapnya",
  moreRoute: "id/paket-tour-mesir.html",
  moreText:
    "Hal-hal praktis lainnya ada di halaman-halaman kami yang lain; katalog lengkap tersedia dalam Bahasa Inggris.",
  links: [
    { label: "Ziarah Kairo Islam", route: "id/ziarah-kairo-islam.html" },
    { label: "Waktu terbaik ke Mesir", route: "id/waktu-terbaik-ke-mesir.html" },
  ],
};
