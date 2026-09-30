// ---------------------------------------------------------------------------
// Halaman Bahasa Melayu yang tiada padanan Inggerisnya.
//
// DELIBERATELY NOT THE INDONESIAN FILE RELABELLED. The two markets share the
// shape of the trip — Umrah, ziarah, Sinai, halal — and almost nothing else
// about how they read:
//   · Vocabulary is Malaysian throughout: percutian, tempahan, kenderaan,
//     bilik, pemandu pelancong, sejuk, penginapan. Not Indonesian with the
//     spellings adjusted.
//   · The mountain is BUKIT TURSINA to a Malaysian reader — that is the name
//     used in Malay, and the page would look foreign without it.
//   · The reference points are Malaysian: KLIA rather than Soekarno-Hatta,
//     cuti sekolah and Aidilfitri rather than Lebaran, ringgit rather than
//     rupiah.
//   · Imam Asy-Syafie, not Asy-Syafi'i — Malaysian transliteration.
//
// Same two accuracy rules as the Indonesian set: the Umrah itself is NOT
// sold, and disputed or traditional attributions are stated as traditional.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";

// ===== Umrah + Mesir =======================================================
export const msUmrah: LocalizedPage = {
  groupId: "standalone-ms-umrah",
  symbol: "ankh",
  title: "Umrah Plus Mesir — cara menyambungkan keduanya | Kemet",
  description:
    "Menggabungkan umrah dengan percutian ke Mesir: Jeddah–Kaherah hanya sekitar dua jam. Apa yang kami uruskan, apa yang tidak, dan berapa hari yang munasabah.",
  keywords:
    "umrah plus mesir, pakej umrah dan mesir, jeddah ke kaherah, melancong mesir selepas umrah, ziarah mesir",
  crumb: "Umrah plus Mesir",
  h1: "Menyambungkan Mesir dengan umrah anda",
  standfirst:
    "Jeddah ke Kaherah lebih kurang dua jam. Itu sahaja sebab teknikal mengapa gabungan ini masuk akal.",
  lede:
    "Ramai tetamu kami tiba di Mesir beberapa hari sebelum atau selepas ibadah di Arab Saudi. Jaraknya memang pendek — Jeddah–Kaherah kurang daripada dua jam setengah, dan penerbangannya banyak setiap hari. Yang perlu disusun bukan penerbangannya, tetapi susunan harinya: berapa hari yang munasabah selepas perjalanan yang meletihkan, dan susunan mana yang tidak menjadikan salah satunya tergesa-gesa.",
  facts: [
    { label: "Jeddah → Kaherah", value: "±2 jam 15 minit" },
    { label: "Tambahan wajar", value: "5–8 hari" },
    { label: "Susunan terbaik", value: "umrah dahulu" },
    { label: "Yang kami uruskan", value: "bahagian Mesir sahaja" },
  ],
  sections: [
    {
      title: "Apa yang kami uruskan, dan apa yang tidak",
      body:
        "Kami menguruskan bahagian Mesir: sambutan di lapangan terbang, hotel, pemandu Egyptologist berlesen, kenderaan, tiket masuk, dan penerbangan domestik di dalam Mesir. Kami TIDAK mengendalikan umrah dan tidak menguruskan visa Arab Saudi — itu tanggungjawab penganjur umrah anda, dan mengatakan sebaliknya bermakna menjanjikan sesuatu yang bukan bidang kami. Yang kami lakukan ialah menyelaraskan tarikh bahagian Mesir dengan jadual yang sudah ada di tangan anda.",
    },
    {
      title: "Mesir sebelum atau selepas umrah?",
      body:
        "Selepas, hampir selalu. Ibadah menuntut tenaga dan tumpuan, dan meletakkannya selepas seminggu berjalan kaki di Luxor bukan permulaan yang baik. Sebaliknya, Mesir selepas umrah terasa seperti kelonggaran: rentaknya perlahan, harinya pendek, dan tiada yang wajib. Jika jadual penerbangan memaksa susunan sebaliknya, kami memendekkan hari-hari awal di Mesir supaya anda tidak tiba di Makkah dalam keadaan penat.",
    },
    {
      title: "Berapa hari yang munasabah",
      body:
        "Lima hari memberi Kaherah dengan sewajarnya: Giza dan Saqqara, Grand Egyptian Museum, dan satu hari penuh untuk Kaherah Islam. Lapan hari menambah Luxor dengan penerbangan domestik. Sepuluh hingga dua belas menambah pelayaran Sungai Nil ke Aswan. Kurang daripada empat hari sebaiknya tidak — masanya akan habis di jalan dan di lapangan terbang.",
    },
    {
      title: "Rombongan besar yang tiba bersama",
      body:
        "Rombongan yang datang bersama daripada satu penganjur umrah bukan masalah, malah sebaliknya: kos pemandu dan kenderaan dikongsi, jadi kos seorang turun banyak. Yang kami perlukan hanyalah bilangan tepat dan susunan rombongan lebih awal, kerana itu menentukan bilangan kenderaan dan pembahagian pemandu — dan itu tidak boleh diputuskan pada hari berlepas.",
    },
  ],
  highlights: {
    heading: "Yang biasa ditambah selepas umrah",
    items: [
      "Satu hari penuh Kaherah Islam: Al-Azhar, Imam Asy-Syafie, Amr bin Al-As",
      "Giza dan Saqqara bersama Egyptologist, bermula awal pagi",
      "Grand Egyptian Museum — setengah hari, bukan sejam",
      "Bukit Tursina dan Biara Saint Catherine, jika masa mengizinkan",
      "Luxor dengan penerbangan domestik, jika ada lapan hari atau lebih",
    ],
  },
  faqs: [
    { q: "Adakah Kemet mengendalikan umrah?", a: "Tidak. Kami menguruskan bahagian Mesir sahaja — hotel, pemandu, kenderaan, tiket dan penerbangan domestik di dalam Mesir. Ibadah dan visa Arab Saudi diuruskan oleh penganjur umrah anda. Kami menyelaraskan tarikh kami dengan jadual mereka." },
    { q: "Berapa lama penerbangan Jeddah ke Kaherah?", a: "Lebih kurang dua jam suku, dengan beberapa penerbangan setiap hari. Secara praktik: berlepas pagi dari Jeddah dan anda sudah berada di hotel Kaherah sebelum tengah hari." },
    { q: "Perlukah visa berasingan untuk Mesir?", a: "Ya, Mesir dan Arab Saudi dua negara dengan peraturan masing-masing. Bagi pasport Malaysia, visa Mesir boleh dibeli ketika tiba di lapangan terbang dengan bayaran 30 dolar Amerika untuk tinggal sehingga 30 hari. Pasport mesti sah enam bulan." },
    { q: "Bolehkah tarikh belum muktamad?", a: "Boleh, dan itu lazim: tarikh umrah selalunya disahkan lewat. Kami menyusun rancangan dengan tarikh sementara dan memuktamadkannya selepas jadual anda pasti. Tiada bayaran sebelum tarikh ditetapkan." },
  ],
  cta: {
    heading: "Hantarkan jadual umrah anda",
    text: "Tarikh berlepas dan pulang dari Arab Saudi, serta bilangan jemaah — cukup untuk kami susun bahagian Mesir di sekelilingnya.",
    whatsapp: "Salam Kemet — saya ingin menyambungkan percutian ke Mesir dengan umrah.",
    emailSubject: "Umrah plus Mesir — permohonan rancangan",
  },
  moreLabel: "Selanjutnya",
  moreRoute: "ms/pakej-pelancongan-mesir.html",
  moreText:
    "Laluan penuh kami di Mesir, berserta perincian harian, ada di halaman pakej pelancongan. Katalog penuh tersedia dalam Bahasa Inggeris.",
  links: [
    { label: "Ziarah Kaherah Islam", route: "ms/ziarah-kaherah-islam.html" },
    { label: "Bukit Tursina dan Biara Saint Catherine", route: "ms/bukit-tursina.html" },
  ],
};

// ===== Ziarah Kaherah Islam ================================================
export const msZiarah: LocalizedPage = {
  groupId: "standalone-ms-ziarah",
  symbol: "eye",
  title: "Ziarah Kaherah Islam — Al-Azhar & Imam Asy-Syafie | Kemet",
  description:
    "Satu hari penuh di Kaherah Islam: Al-Azhar, makam Imam Asy-Syafie, Masjid Amr bin Al-As, Sultan Hassan dan Ibnu Tulun, dengan pemandu sendiri.",
  keywords:
    "ziarah kaherah, makam imam syafie kaherah, masjid al azhar, masjid amr bin al as, kaherah islam, pelancongan islam mesir",
  crumb: "Ziarah Kaherah Islam",
  h1: "Kaherah Islam, dalam satu hari penuh",
  standfirst:
    "Bukan sejam yang diselitkan antara piramid — ini hari tersendiri, dan ia memang menuntutnya.",
  lede:
    "Kaherah menyimpan seribu tahun sejarah Islam dalam lingkungan beberapa kilometer, dan kebanyakan risalah Eropah melangkaunya sama sekali. Bagi tetamu dari Malaysia, senarai ini selalunya yang mula-mula disebut. Semuanya boleh dijalani dalam sehari jika disusun mengikut kedudukannya, bukan mengikut turutan dalam buku — dan itulah yang menentukan sama ada hari ini terasa penuh atau tergesa-gesa.",
  facts: [
    { label: "Tempoh", value: "satu hari penuh" },
    { label: "Mula", value: "selepas subuh" },
    { label: "Pemandu", value: "Egyptologist berlesen" },
    { label: "Ditutup di", value: "Khan el-Khalili" },
  ],
  sections: [
    {
      title: "Makam Imam Asy-Syafie",
      body:
        "Imam Muhammad bin Idris asy-Syafie wafat di Fustat pada tahun 204 Hijrah dan dimakamkan di Kaherah. Kubah makamnya, yang dibina semula pada zaman Ayyubiyah, antara binaan berkubah kayu terbesar di Mesir. Bagi kebanyakan tetamu Malaysia — yang mengikut mazhab beliau — ini kerap menjadi titik paling berkesan dalam seluruh perjalanan, dan kami memberikannya masa yang sewajarnya, bukan perhentian sepuluh minit.",
    },
    {
      title: "Masjid Amr bin Al-As",
      body:
        "Masjid pertama yang dibina di benua Afrika, didirikan pada tahun 21 Hijrah ketika Fustat masih sebuah kota baharu. Binaan yang berdiri sekarang hasil pemuliharaan berkurun lamanya, tetapi kedudukannya tidak pernah berubah — anda berdiri di tapak yang sama. Letaknya bersebelahan kawasan Koptik, jadi wajar kedua-duanya digabungkan dalam satu pagi.",
    },
    {
      title: "Al-Azhar dan kota Fatimiyah",
      body:
        "Masjid Al-Azhar didirikan pada tahun 359 Hijrah dan universitinya antara yang tertua yang masih berjalan sehingga hari ini — dengan pelajar Malaysia di dalamnya sejak berdekad lamanya. Dari situ jalan Al-Muizz terbentang ke utara melalui Sultan Hassan, Ar-Rifa'i, madrasah-madrasah Mamluk, hingga pintu gerbang Bab al-Futuh. Berjalan kaki satu-satunya cara: kawasan ini tidak direka untuk kereta.",
    },
    {
      title: "Ibnu Tulun, dan mengapa disimpan akhir",
      body:
        "Masjid Ahmad bin Tulun, tahun 265 Hijrah, ialah masjid tertua di Kaherah yang masih utuh dalam bentuk asalnya — halaman terbuka yang luas dan menara berpilin yang tiada bandingannya di Mesir. Kami menyimpannya untuk lewat petang kerana pada waktu itu halamannya hampir kosong dan cahayanya rendah — dan kerana selepas setengah hari yang padat, ruang seluas itu terasa seperti hela nafas.",
    },
    {
      title: "Waktu solat mengatur hari, bukan sebaliknya",
      body:
        "Hari ini disusun mengikut waktu solat, bukan diselaraskan kemudian. Anda solat di masjid-masjid yang sedang diziarahi — dan solat di Al-Azhar atau di Ibnu Tulun sebahagian daripada ziarah itu sendiri, bukan jeda daripadanya. Hari Jumaat dilayan berasingan: jadualnya lebih longgar dan sebahagian lawatan dipindahkan ke petang.",
    },
  ],
  faqs: [
    { q: "Cukupkah satu hari?", a: "Cukup, jika disusun mengikut kedudukan dan bermula awal pagi. Yang tidak cukup ialah menyelitkannya sebagai setengah hari di celah Giza — itu bermakna dua tiga perhentian tergesa dan kawasan Al-Muizz terlepas sama sekali." },
    { q: "Bolehkah bukan Muslim masuk?", a: "Ke kebanyakan masjid di Kaherah, boleh, di luar waktu solat dan dengan pakaian yang sesuai. Rombongan bercampur biasa kami kendalikan dan tidak menjadi masalah." },
    { q: "Bagaimana dengan pakaian?", a: "Bahu dan lutut tertutup untuk semua, dan tudung bagi wanita di dalam masjid — sesetengahnya menyediakan pinjaman, tetapi membawa sendiri lebih selesa. Kasut ditanggalkan di pintu, jadi stoking memudahkan." },
    { q: "Bolehkah digabung dengan hari Giza?", a: "Boleh dari segi teknikal, tetapi tidak kami sarankan. Kedua-duanya hari penuh. Menggabungkannya bermakna memotong kedua-duanya, dan yang mula-mula dipotong selalunya bahagian yang anda datang untuk melihatnya." },
  ],
  cta: {
    heading: "Susun hari ziarah anda",
    text: "Nyatakan tarikh dan bilangan rombongan; kami susun turutannya mengikut kedudukan dan waktu solat.",
    whatsapp: "Salam Kemet — saya mahukan hari ziarah di Kaherah Islam.",
    emailSubject: "Ziarah Kaherah Islam — permohonan rancangan",
  },
  moreLabel: "Selanjutnya",
  moreRoute: "ms/pakej-pelancongan-mesir.html",
  moreText:
    "Hari ini berdiri sendiri dan boleh diselitkan ke mana-mana laluan. Laluan penuh kami ada di halaman pakej pelancongan.",
  links: [
    { label: "Umrah plus Mesir", route: "ms/umrah-plus-mesir.html" },
    { label: "Makanan halal dan waktu solat", route: "ms/halal-dan-waktu-solat.html" },
  ],
};

// ===== Bukit Tursina =======================================================
export const msSinai: LocalizedPage = {
  groupId: "standalone-ms-sinai",
  symbol: "sun",
  title: "Bukit Tursina & Biara Saint Catherine — panduan | Kemet",
  description:
    "Mendaki Bukit Tursina untuk menyaksikan matahari terbit, dan Biara Saint Catherine di kakinya. Berapa lama, seberapa sukar, bila, dan bagaimana sampai ke sana.",
  keywords:
    "bukit tursina, gunung sinai, jabal musa, biara saint catherine, mendaki bukit tursina, pelancongan sinai mesir",
  crumb: "Bukit Tursina",
  h1: "Bukit Tursina, dan biara di kakinya",
  standfirst:
    "Naik dalam gelap, tiba ketika fajar, turun sebelum panas. Tiga jam mendaki, dan anda tidak perlu menjadi pendaki.",
  lede:
    "Jabal Musa berdiri 2,285 meter di tengah Sinai selatan, dan menurut tradisi di puncaknya Nabi Musa menerima wahyu. Di kakinya berdiri Biara Saint Catherine, antara biara tertua di dunia yang tidak pernah berhenti beroperasi sejak abad keenam. Pendakian dibuat pada waktu malam supaya anda tiba di puncak ketika matahari terbit — dan supaya anda tidak mendaki di bawah matahari Sinai.",
  facts: [
    { label: "Ketinggian", value: "2,285 meter" },
    { label: "Mendaki", value: "±3 jam" },
    { label: "Bermula", value: "sekitar pukul 1 pagi" },
    { label: "Suhu puncak", value: "sejuk, walaupun musim panas" },
  ],
  sections: [
    {
      title: "Sesukar mana sebenarnya",
      body:
        "Anda tidak perlu pengalaman mendaki. Laluan unta yang landai mengambil masa kira-kira tiga jam dengan langkah santai, dan hanya 750 anak tangga batu terakhir yang benar-benar mencabar — bahagian itu mesti dijalani sendiri. Unta tersedia untuk sebahagian besar laluan bagi yang memerlukan. Yang paling kerap mengejutkan orang bukan pendakiannya, tetapi sejuk di puncak: pada bulan Ogos pun suhunya boleh menghampiri sifar sebelum fajar, dengan angin yang kencang.",
    },
    {
      title: "Biara Saint Catherine",
      body:
        "Dibina atas perintah Maharaja Justinian pada abad keenam dan tidak pernah kosong sejak itu. Di dalamnya tersimpan antara koleksi ikon dan manuskrip tertua di dunia. Dalam kompleks yang sama berdiri sebuah masjid Fatimiyah dari abad kesebelas — dibina di dalam biara, dan itulah sebabnya tempat ini terselamat sedangkan begitu banyak yang lain tidak. Biara hanya dibuka pada waktu pagi dan tutup pada hari Jumaat, Ahad serta hari kebesaran, jadi lawatan dibuat selepas turun dari bukit.",
    },
    {
      title: "Bagaimana sampai ke sana",
      body:
        "Dari Sharm El Sheikh kira-kira tiga jam pemanduan, dan inilah cara yang paling munasabah — ramai tetamu kami menggabungkannya dengan beberapa hari di Laut Merah. Dari Kaherah perjalanan darat mengambil tujuh hingga lapan jam, jadi hampir selalu lebih baik terbang ke Sharm dahulu. Bermalam berhampiran biara menjadikan pendakian jauh lebih berperikemanusiaan berbanding bertolak tengah malam dari pantai.",
    },
    {
      title: "Bila masa terbaik",
      body:
        "Sepanjang tahun, dengan catatan. Musim panas: mendaki paling selesa kerana dibuat pada waktu malam, tetapi bawa jaket. Musim sejuk: siangnya menyenangkan, tetapi puncak boleh di bawah sifar dan sesekali bersalji. Bulan penuh menjadikan laluan terang dan cantik; bulan gelap menjadikan langit berbintang itu sendiri satu sebab untuk naik.",
    },
  ],
  highlights: {
    heading: "Apa yang perlu dibawa",
    items: [
      "Jaket tebal dan sarung tangan — puncaknya sejuk sepanjang tahun",
      "Kasut bertapak cengkam, bukan selipar",
      "Lampu kepala, supaya tangan bebas di anak tangga",
      "Air lebih banyak daripada jangkaan anda",
      "Pakaian sopan untuk biara: bahu dan lutut tertutup",
    ],
  },
  faqs: [
    { q: "Bolehkah kanak-kanak ikut?", a: "Kanak-kanak sekitar sepuluh tahun ke atas lazimnya mampu, asalkan biasa berjalan jauh. Yang lebih kecil sebaiknya tidak: sejuknya, waktunya dan 750 anak tangga terakhir bukan gabungan yang mesra. Bagi keluarga dengan anak kecil, biara sahaja tanpa pendakian tetap berbaloi." },
    { q: "Adakah ia selamat?", a: "Kawasan Sinai selatan — Sharm El Sheikh, Dahab, dan laluan ke Saint Catherine — dikunjungi seperti biasa dan dikawal. Yang berbeza sama sekali ialah Sinai UTARA, yang berada di bawah amaran rasmi dan tidak termasuk dalam mana-mana laluan, termasuk laluan kami." },
    { q: "Bolehkah menunggang unta sampai puncak?", a: "Tidak sampai puncak. Unta menghantar sehingga hujung laluan landai; 750 anak tangga terakhir mesti dijalani kaki. Itulah bahagian tersukar sekali gus terpendek." },
    { q: "Berapa lama keseluruhannya?", a: "Jika bermalam berhampiran biara: bertolak sekitar pukul satu pagi, matahari terbit di puncak, turun sekitar pukul sembilan, biara pada waktu pagi, dan kembali ke Sharm menjelang petang." },
  ],
  cta: {
    heading: "Tanya tentang Sinai",
    text: "Nyatakan tarikh dan dari mana anda bertolak — Sharm atau Kaherah — dan kami susun bahagian ini dengan rentak yang munasabah.",
    whatsapp: "Salam Kemet — saya ingin bertanya tentang Bukit Tursina dan Biara Saint Catherine.",
    emailSubject: "Bukit Tursina — permohonan rancangan",
  },
  moreLabel: "Selanjutnya",
  moreRoute: "ms/pakej-pelancongan-mesir.html",
  moreText:
    "Bahagian ini boleh diselitkan ke mana-mana laluan, dan paling wajar digabungkan dengan beberapa hari di Laut Merah.",
  links: [
    { label: "Umrah plus Mesir", route: "ms/umrah-plus-mesir.html" },
    { label: "Adakah Mesir selamat?", route: "ms/adakah-mesir-selamat.html" },
  ],
};

// ===== Halal & waktu solat =================================================
export const msHalal: LocalizedPage = {
  groupId: "standalone-ms-halal",
  symbol: "lotus",
  title: "Makanan Halal & Waktu Solat di Mesir | Kemet",
  description:
    "Makanan di Mesir pada asasnya halal kerana negaranya majoriti Muslim. Yang perlu disemak hanya beberapa perkara, dan bagaimana solat masuk dalam hari lawatan.",
  keywords:
    "makanan halal di mesir, adakah makanan mesir halal, waktu solat di mesir, masjid berhampiran piramid, makanan mesir",
  crumb: "Halal & waktu solat",
  h1: "Makanan dan solat, tanpa perlu dicari",
  standfirst:
    "Mesir negara majoriti Muslim. Persoalannya bukan sama ada ada yang halal, tetapi perkara kecil yang tetap perlu diperiksa.",
  lede:
    "Ini soalan pertama yang hampir pasti ditanya, dan jawapannya melegakan: daging yang dijual di restoran dan hotel di Mesir pada asasnya halal tanpa perlu dicari khas, dan masjid ada di mana-mana termasuk berhampiran hampir semua tapak lawatan. Yang tetap perlu diperiksa hanya beberapa perkara, dan kami menguruskannya sebelum anda duduk — bukan selepasnya.",
  facts: [
    { label: "Penduduk Muslim", value: "majoriti besar" },
    { label: "Daging di restoran", value: "halal secara umum" },
    { label: "Yang perlu disemak", value: "hotel antarabangsa" },
    { label: "Masjid", value: "berhampiran hampir semua tapak" },
  ],
  sections: [
    {
      title: "Apa yang benar-benar perlu diberi perhatian",
      body:
        "Tiga perkara, tidak lebih. Pertama, restoran hotel antarabangsa yang turut menghidangkan alkohol di ruang yang sama — bukan tentang dagingnya, tetapi sebahagian tetamu tetap mahu tahu lebih awal. Kedua, menu antarabangsa di kapal pelayaran Sungai Nil, yang kadangkala mengandungi bahan yang tidak anda jangkakan; kami bertanya kepada dapur sebelum berlepas. Ketiga, kek dan pencuci mulut di hotel besar, yang sesekali menggunakan perisa beralkohol. Ketiga-tiganya kami tanyakan di awal.",
    },
    {
      title: "Makanan Mesir yang berbaloi dicuba",
      body:
        "Kusyari — nasi, lentil, makaroni dan kacang kuda di bawah bawang goreng dengan sos tomato pedas — ialah hidangan kebangsaan dan sepenuhnya tanpa daging. Ful dan ta'miya (falafel Mesir daripada kacang fava, bukan kacang kuda) ialah sarapan negara ini. Molokhia, hamam mahsyi, fatta, dan untuk pencuci mulut: basbusa, kunafa dan umm ali. Semuanya ada di kedai makan biasa yang sibuk — dan di situlah rasanya paling betul.",
    },
    {
      title: "Solat dalam hari lawatan",
      body:
        "Jadual harian kami menyediakan ruang untuk solat tanpa anda perlu memintanya. Masjid terletak berhampiran hampir semua tapak utama, dan di kompleks besar seperti Grand Egyptian Museum ada surau. Di Luxor dan Aswan, lawatan pagi lazimnya selesai sebelum zohor. Jika anda berpuasa — di bulan Ramadan atau puasa sunat — kami menyusun hari mengikut waktu berbuka, bukan sebaliknya.",
    },
    {
      title: "Air, dan satu tabiat yang perlu dijaga",
      body:
        "Jangan minum air paip; air botol ada di mana-mana dan kami membekalkannya setiap hari. Hotel dan kedai makan yang sibuk jarang bermasalah. Yang lebih berisiko ialah jus tepi jalan dengan ais yang tidak diketahui asalnya, dan ulam mentah yang dibasuh dengan air paip. Ini berlaku kepada semua pelancong, bukan hanya dari Asia Tenggara.",
    },
  ],
  faqs: [
    { q: "Adakah semua daging di Mesir halal?", a: "Pada asasnya ya: Mesir negara majoriti Muslim dan rumah sembelih mengikut kaedah Islam. Yang berbeza hanyalah beberapa hotel antarabangsa dan kapal pelayaran dengan menu asing — dan itu kami tanyakan terlebih dahulu." },
    { q: "Adakah sijil halal seperti JAKIM di Malaysia?", a: "Tidak dalam bentuk label yang anda kenali, kerana di Mesir perkara ini keadaan biasa dan bukan pengecualian yang perlu ditanda. Jadi jangan mencari pelekat halal — yang lebih berguna ialah bertanya, dan itu kami lakukan untuk anda." },
    { q: "Mudahkah untuk solat berjemaah?", a: "Sangat mudah. Azan kedengaran di mana-mana dan masjid terbuka sepanjang hari. Di Kaherah Islam anda solat di masjid-masjid yang sedang diziarahi, dan itu sebahagian daripada ziarahnya." },
    { q: "Bagaimana jika melawat pada bulan Ramadan?", a: "Tapak lawatan, muzium dan hotel beroperasi seperti biasa, dan waktu siang lebih tenang. Sebahagian kedai makan tempatan tutup sehingga maghrib. Kami memindahkan lawatan ke waktu pagi dan menyediakan masa rehat menjelang berbuka." },
  ],
  cta: {
    heading: "Ada pantang larang atau keperluan khusus?",
    text: "Nyatakan dari awal — alahan, pantang larang, atau keperluan rombongan — dan ia masuk ke dalam rancangan, bukan ke nota terakhir.",
    whatsapp: "Salam Kemet — saya ingin bertanya tentang makanan dan waktu solat di Mesir.",
    emailSubject: "Pertanyaan — makanan halal dan waktu solat",
  },
  moreLabel: "Selanjutnya",
  moreRoute: "ms/pakej-pelancongan-mesir.html",
  moreText:
    "Perkara praktikal yang lain ada di halaman-halaman kami yang lain; katalog penuh tersedia dalam Bahasa Inggeris.",
  links: [
    { label: "Ziarah Kaherah Islam", route: "ms/ziarah-kaherah-islam.html" },
    { label: "Masa terbaik ke Mesir", route: "ms/masa-terbaik-ke-mesir.html" },
  ],
};
