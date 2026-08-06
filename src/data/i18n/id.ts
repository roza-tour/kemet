// ---------------------------------------------------------------------------
// Halaman Bahasa Indonesia — seven key pages for the Indonesian market.
//
// The Indonesian traveller comes to Egypt with a different map in their head to
// a European one. Al-Azhar, the tomb of Imam al-Shafi'i — the madhhab most of
// Indonesia follows — Amr ibn al-As, Mount Sinai and the Nile of the Qur'anic
// narrative sit alongside the pharaonic sites rather than behind them, and a
// great many trips are built around an Umrah in Saudi Arabia. The copy reflects
// that ordering. Reference points: Jakarta and Surabaya, one-stop routings
// through the Gulf, Lebaran and the June–July school holidays.
//
// ⚠️ VISA ACCURACY
// Indonesia is NOT yet in data/entryRequirements, so no route is asserted for
// the Indonesian passport on the visa page below — it explains both routes and
// sends the reader to the Egyptian government portal, which is the site's
// standing policy for passports we have not corroborated. Once Indonesia is
// added to that file with a verified route, tighten this page to state it.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";

export const id: LocalizedPage[] = [
  // ===== Beranda ===========================================================
  {
    groupId: "home",
    symbol: "ankh",
    title: "Kemet — Tour Mesir privat dengan pemandu Egyptologist",
    description:
      "Tour Mesir privat yang dirancang khusus: pemandu Egyptologist berlisensi hanya untuk rombongan Anda, mobil pribadi, tanpa bus grup dan tanpa tanggal tetap.",
    keywords:
      "tour mesir, paket wisata mesir, liburan ke mesir, pesiar sungai nil, pemandu berbahasa indonesia, wisata mesir privat",
    crumb: "Beranda",
    h1: "Mesir, hanya untuk rombongan Anda",
    standfirst:
      "Tanpa bus wisata, tanpa tanggal keberangkatan tetap, tanpa orang asing dalam perjalanan Anda.",
    lede:
      "Mesir bukan satu negeri, melainkan delapan dunia budaya yang bertumpuk di sepanjang satu sungai. Kemet merancang perjalanan privat yang tidak terburu-buru melintasi dunia-dunia itu — dari Piramida Giza dan Al-Azhar hingga kuil-kuil Luxor dan pelayaran Nil menuju Aswan. Setiap perjalanan dipandu Egyptologist berlisensi Kementerian Pariwisata Mesir, dan disusun sepenuhnya di sekitar Anda.",
    facts: [
      { label: "Format", value: "Privat sepenuhnya" },
      { label: "Pemandu", value: "Egyptologist berlisensi" },
      { label: "Dari Jakarta", value: "±13 jam, satu transit" },
      { label: "Waktu terbaik", value: "Oktober – April" },
    ],
    sections: [
      {
        title: "Egyptologist, bukan sekadar tour leader",
        body:
          "Setiap perjalanan dipandu orang berlisensi Kementerian Pariwisata Mesir dengan latar pendidikan Egyptology. Ia berdiri bersama Anda di depan monumen, bukan menunggu di parkiran, dan hari itu ia hanya milik rombongan Anda — menjawab pertanyaan Anda, bukan membacakan teks di depan empat puluh orang.",
      },
      {
        title: "Mesir yang dicari jamaah Indonesia",
        body:
          "Banyak tamu kami datang dengan daftar yang tidak ada di brosur Eropa: Masjid Al-Azhar dan universitasnya, makam Imam Asy-Syafi'i — imam mazhab yang diikuti sebagian besar Indonesia — Masjid Amr bin Ash sebagai masjid pertama di benua Afrika, Masjid Sultan Hassan, serta Gunung Sinai dan Biara Santa Katarina. Semua itu dapat disusun dalam satu rangkaian bersama Giza dan Luxor, dan pemandu kami memahami mengapa urutannya penting.",
      },
      {
        title: "Soal makanan",
        body:
          "Ini pertanyaan pertama yang hampir selalu muncul, dan jawabannya melegakan: Mesir adalah negeri berpenduduk mayoritas Muslim, sehingga daging yang dijual di restoran dan hotel pada dasarnya halal tanpa perlu dicari khusus. Yang tetap kami perhatikan adalah hal-hal kecil — hotel yang menyajikan alkohol di restoran yang sama, atau menu internasional di kapal pesiar — dan kami memberi tahu Anda sebelumnya, bukan setelah Anda duduk.",
      },
      {
        title: "Rombongan Anda saja",
        body:
          "Tidak ada bus gabungan. Tidak ada tanggal tetap. Jika Anda berdua, maka mobil, pemandu dan ritme perjalanan milik dua orang. Biaya per orang turun cukup jauh seiring bertambahnya rombongan: keluarga berenam sering membayar lebih murah per kepala untuk perjalanan yang sepenuhnya privat dibanding sepasang suami istri untuk rute yang sama.",
      },
      {
        title: "Tentang harga, terus terang",
        body:
          "Kemet bekerja di segmen atas pasar Mesir dan kami mengatakannya tanpa sungkan. Egyptologist pribadi selama sepekan memang ada harganya; begitu pula mobil yang hanya milik Anda dan kamar yang menghadap sungai, bukan menghadap parkiran. Yang tidak kami lakukan: memasang harga murah lalu menutupinya dengan biaya tambahan, singgah di toko suvenir berkomisi, dan rute yang diam-diam berubah menjadi grup.",
      },
    ],
    highlights: {
      heading: "Perjalanan ini bukan untuk",
      items: [
        "Pencari harga termurah ke Mesir — kami bukan yang termurah dan tidak berusaha menjadi",
        "Wisata bus dan keberangkatan grup dengan tanggal tetap",
        "Hostel, kamar bersama, dan rute ala backpacker",
        "Mereka yang lebih suka mengurus logistik sendiri",
      ],
    },
    faqs: [
      { q: "Berapa biaya tour privat ke Mesir?", a: "Untuk perjalanan yang sepenuhnya privat dengan Egyptologist berlisensi, mobil dan sopir pribadi, serta hotel yang baik, perkirakan 200–450 euro per orang per hari, di luar tiket pesawat internasional. Angka per orang turun cukup jauh saat rombongan bertambah, karena pemandu dan kendaraan dibagi." },
      { q: "Apakah ada pemandu berbahasa Indonesia?", a: "Jumlahnya terbatas, dan kami tidak akan menjanjikan apa yang belum kami pastikan. Beritahukan kebutuhan ini di awal perencanaan: kami akan mengonfirmasi ketersediaannya untuk tanggal Anda sebelum ada pembayaran, dan jika tidak tersedia kami katakan terus terang serta menawarkan pemandu berbahasa Inggris atau Arab." },
      { q: "Apakah makanan di Mesir halal?", a: "Mesir berpenduduk mayoritas Muslim, sehingga daging di restoran dan hotel umumnya halal tanpa perlu dicari khusus. Yang perlu diperhatikan hanya restoran hotel internasional yang juga menyajikan alkohol, dan kami menyiapkan pilihan tempat makan sejak awal, bukan dadakan." },
      { q: "Berapa hari yang dibutuhkan untuk Mesir?", a: "Delapan sampai sepuluh hari di lokasi cukup untuk Kairo, Luxor, pelayaran Nil dan Aswan tanpa terburu-buru. Enam sampai tujuh hari cukup untuk Kairo dan Luxor. Dua belas sampai empat belas hari memberi ruang untuk Abu Simbel, Alexandria, atau Laut Merah." },
      { q: "Bisakah digabung dengan umrah?", a: "Sangat sering. Banyak tamu kami tiba di Mesir sebelum atau sesudah ibadah di Arab Saudi, dan penerbangan Jeddah–Kairo hanya sekitar dua jam. Ibadahnya sendiri diatur oleh penyelenggara Anda; kami menyusun bagian Mesirnya dan menyesuaikan tanggal agar keduanya tersambung rapi." },
    ],
    cta: {
      heading: "Ceritakan rencana Anda",
      text: "Kirimkan tanggal dan siapa saja yang berangkat. Anda akan menerima rancangan perjalanan yang sebenarnya beserta rincian harga — tanpa keharusan memesan dan tanpa call center.",
      whatsapp: "Halo Kemet — saya ingin merencanakan perjalanan privat ke Mesir.",
      emailSubject: "Permintaan — perjalanan privat ke Mesir",
    },
    moreLabel: "Situs lengkap",
    moreText:
      "Halaman-halaman ini adalah ringkasan dalam Bahasa Indonesia. Katalog lengkap Kemet — seluruh rute, destinasi, pengalaman dan panduan praktis — tersedia dalam Bahasa Inggris. Kami tetap membalas pesan Anda dalam Bahasa Indonesia.",
  },

  // ===== Paket / rute ======================================================
  {
    groupId: "journeys",
    symbol: "sun",
    title: "Paket Tour Mesir — rute privat yang disusun khusus | Kemet",
    description:
      "Rute privat ke Mesir, dari satu hari hingga dua pekan — dengan Egyptologist berlisensi, kendaraan pribadi, dan tanpa tanggal keberangkatan tetap.",
    keywords:
      "paket tour mesir, itinerary mesir, wisata mesir kairo luxor, rute perjalanan mesir, paket mesir privat",
    crumb: "Paket Tour Mesir",
    h1: "Rute perjalanan kami di Mesir",
    standfirst:
      "Ini titik awal, bukan program jadi — setiap rute ditulis ulang mengikuti tanggal dan rombongan Anda.",
    lede:
      "Semua perjalanan kami bersifat privat. Yang Anda lihat di sini adalah bentuk yang sudah teruji, bukan produk siap beli. Sampaikan kapan Anda berangkat, siapa yang ikut, dan apa yang paling ingin Anda lihat — rutenya digambar ulang dari situ.",
    facts: [
      { label: "Terpendek", value: "1 hari" },
      { label: "Terpanjang", value: "14 hari" },
      { label: "Rombongan", value: "Hanya rombongan Anda" },
      { label: "Uang muka", value: "25 %" },
    ],
    sections: [
      {
        title: "Rute klasik dan mengapa rute itu berhasil",
        body:
          "Kairo untuk Piramida, Grand Egyptian Museum dan kota tuanya; Luxor untuk kuil-kuil dan Lembah Para Raja; lalu menyusuri Nil sampai Aswan dengan kapal. Urutan itu bukan kebetulan: kuil-kuil antara Luxor dan Aswan berdiri di tepi sungai dan memang dirancang untuk didatangi dari air. Delapan sampai sepuluh hari mencakup semuanya tanpa tergesa.",
      },
      {
        title: "Kairo untuk ziarah dan sejarah Islam",
        body:
          "Satu hari penuh di Kairo Islam adalah bagian yang paling sering kami tambahkan untuk tamu Indonesia: Al-Azhar, makam Imam Asy-Syafi'i, Masjid Amr bin Ash, Masjid Sultan Hassan dan Masjid Ibnu Thulun, ditutup di Khan el-Khalili. Hari itu berdiri sendiri dan tidak mengurangi waktu untuk Giza — ia hanya menuntut satu hari lagi di Kairo.",
      },
      {
        title: "Yang sudah termasuk dalam harga",
        body:
          "Egyptologist berlisensi selama seluruh perjalanan, seluruh tiket masuk, transfer privat ber-AC, penjemputan dan pengantaran hotel, makan siang pada hari kunjungan, dan air setiap hari. Tidak termasuk: tiket pesawat internasional, visa, tip, pengeluaran pribadi dan tambahan yang disebutkan tersendiri. Setiap penawaran mencantumkan kedua daftar itu sebelum Anda memutuskan.",
      },
      {
        title: "Berapa hari — apa adanya",
        body:
          "Satu hari di Kairo berarti Giza dan Saqqara, atau Grand Egyptian Museum, tetapi tidak keduanya dengan layak. Empat sampai lima hari memberi Kairo dan Luxor. Delapan sampai sepuluh menambah Nil dan Aswan. Di atas empat belas hari yang bertambah bukan lagi situs, melainkan ruang bernapas: Abu Simbel tanpa bangun pukul empat pagi, Alexandria, atau beberapa hari di Laut Merah.",
      },
    ],
    faqs: [
      { q: "Bisakah rute yang ditawarkan diubah?", a: "Justru itu intinya. Rute yang ditampilkan adalah titik awal. Anda boleh memperpanjang satu bagian, menghapusnya, mengganti kelas hotel, atau memulai dari halaman kosong — penawaran dihitung ulang pada setiap versi dan tidak ada pembayaran sebelum naskahnya Anda setujui." },
      { q: "Berapa lama sebelumnya harus memesan?", a: "Untuk periode Oktober sampai April, siapkan dua sampai tiga bulan: itulah bulan-bulan ketika Egyptologist yang baik, kapal dahabiya, dan kamar dengan pemandangan habis lebih dulu. Di luar musim itu, beberapa pekan sering sudah cukup." },
      { q: "Apakah benar kami berjalan sendiri saja?", a: "Benar. Kendaraan, sopir dan Egyptologist dipesan hanya untuk rombongan Anda, berapa pun jumlahnya. Anda tidak akan pernah digabungkan dengan tamu lain demi memenuhi kursi." },
      { q: "Bagaimana jika penerbangan domestik tertunda?", a: "Rutenya disusun ulang di tempat pada hari itu juga tanpa biaya tambahan — itulah keuntungan perjalanan privat: tidak ada grup yang menunggu dan tidak ada jadwal bersama yang harus dikejar. Koordinator Anda di Mesir dapat dihubungi sepanjang perjalanan." },
    ],
    cta: {
      heading: "Mari kami rancang rutenya",
      text: "Tanggal, jumlah peserta, dan satu hal yang tidak boleh terlewat sudah cukup untuk memulai.",
      whatsapp: "Halo Kemet — saya ingin rute privat di Mesir.",
      emailSubject: "Permintaan rute — Mesir",
    },
    moreLabel: "Katalog lengkap",
    moreText:
      "Dua puluh lima rute lengkap dengan rincian harian, hotel dan harga tersedia dalam Bahasa Inggris di situs utama. Kirim pertanyaan Anda dalam Bahasa Indonesia — kami balas dalam Bahasa Indonesia.",
  },

  // ===== Pesiar Sungai Nil =================================================
  {
    groupId: "nile-cruise",
    symbol: "boat",
    title: "Pesiar Sungai Nil — dahabiya atau kapal besar | Kemet",
    description:
      "Pesiar privat di Sungai Nil antara Luxor dan Aswan: dahabiya berlayar atau kapal bintang lima, Egyptologist ikut di kapal, kuil didatangi dari air.",
    keywords:
      "pesiar sungai nil, cruise nil mesir, dahabiya nil, kapal nil luxor aswan, wisata sungai nil",
    crumb: "Pesiar Sungai Nil",
    h1: "Pesiar di Sungai Nil",
    standfirst:
      "Antara Luxor dan Aswan, sungai tetap cara terbaik untuk berpindah — dan pilihan kapalnya menentukan seluruh perjalanan.",
    lede:
      "Kuil-kuil antara Luxor dan Aswan dibangun menghadap sungai. Kita mendatanginya dari air karena begitulah ia dirancang: Edfu dan Kom Ombo muncul dari geladak sebelum muncul dari tempat parkir. Tiga sampai empat malam sudah mencakup bagian ini, dan pilihan kapal lebih menentukan daripada lamanya.",
    facts: [
      { label: "Rute", value: "Luxor ⇄ Aswan" },
      { label: "Lama", value: "3–4 malam" },
      { label: "Dahabiya", value: "6–12 kabin" },
      { label: "Kapal besar", value: "40–80 kabin" },
    ],
    sections: [
      {
        title: "Dahabiya atau kapal besar",
        body:
          "Dahabiya adalah kapal layar dengan beberapa kabin saja. Ia berlayar, bersandar di gundukan pasir yang tak terjangkau kapal besar, dan bila disewa penuh tidak ada penumpang lain selain rombongan Anda. Kapal bintang lima memberi ruang lebih luas, kolam renang dan geladak atas, tetapi mengikuti jadwal bersama dan bersandar di tempat yang sama dengan kapal lain. Keduanya baik; keduanya bercerita hal yang berbeda.",
      },
      {
        title: "Apa yang terlihat dari sungai",
        body:
          "Edfu, kuil Horus, yang paling utuh di Mesir. Kom Ombo, kuil ganda di tikungan sungai, paling indah menjelang senja. Pintu air Esna, ladang, kampung, nelayan — dan di Aswan, kuil Philae di pulaunya. Di antara kunjungan, tidak terjadi apa-apa; justru itulah yang dicari.",
      },
      {
        title: "Kapan sebaiknya berlayar",
        body:
          "Oktober sampai April adalah waktu terbaik: siang hangat, malam sejuk di geladak. Mei sampai September, Mesir Hulu menjadi sangat panas — di atas 40 °C di Aswan — sehingga kunjungan dipindah ke pagi buta. Harga turun jauh di musim panas, dan bagi yang tahan panas, kuil-kuil hampir kosong.",
      },
      {
        title: "Untuk rombongan keluarga",
        body:
          "Dahabiya sangat cocok untuk keluarga besar: anak-anak bebas bergerak di kapal, hari-harinya pendek, dan ada jam-jam panjang yang tidak menuntut apa pun. Menyewa satu kapal penuh untuk satu keluarga besar sering kali masuk akal secara biaya mulai dari sekitar delapan sampai dua belas orang.",
      },
    ],
    faqs: [
      { q: "Berapa malam di Sungai Nil?", a: "Tiga sampai empat malam mencakup bagian Luxor–Aswan bersama Edfu dan Kom Ombo tanpa waktu kosong. Beberapa dahabiya menawarkan tujuh malam dengan persinggahan yang tidak dilakukan kapal besar, seperti El-Kab atau Gebel Silsila." },
      { q: "Bisakah menyewa satu kapal penuh?", a: "Bisa, untuk dahabiya. Sewa penuh berarti kapal, awak dan juru masak hanya untuk rombongan Anda — umumnya mulai dari delapan sampai dua belas orang, dan tetap mungkin untuk rombongan lebih kecil. Kapal pesiar besar pada praktiknya tidak disewa penuh." },
      { q: "Bagaimana dengan makanan di kapal?", a: "Dapur kapal Mesir memasak masakan Mesir, dan dagingnya halal sebagaimana umumnya di Mesir. Pada kapal internasional yang juga menyajikan alkohol, kami sampaikan hal itu sejak awal agar Anda dapat memilih dengan sadar, bukan mengetahuinya di meja makan." },
      { q: "Apakah Egyptologist ikut di kapal?", a: "Pada perjalanan kami, Egyptologist Anda ikut sepanjang pesiar dan mendampingi di setiap kuil — bukan pemandu baru di setiap persinggahan. Inilah beda utamanya dengan membeli paket pesiar secara terpisah." },
      { q: "Apakah bisa mabuk laut?", a: "Tidak. Sungai Nil tidak berombak dan tidak menimbulkan mabuk laut — airnya tenang. Satu-satunya gerakan yang terasa adalah saat melewati pintu air Esna, dan itu pun pelan." },
    ],
    cta: {
      heading: "Mari pilih kapalnya bersama",
      text: "Sebutkan tanggal dan jumlah peserta; kami akan mengatakan terus terang mana yang lebih cocok — dahabiya atau kapal besar.",
      whatsapp: "Halo Kemet — saya tertarik pesiar privat di Sungai Nil.",
      emailSubject: "Permintaan — pesiar Sungai Nil",
    },
    moreLabel: "Rincian rute",
    moreText:
      "Rincian harian pesiar, jenis kapal dan harga tersedia dalam Bahasa Inggris di situs utama. Silakan hubungi kami dalam Bahasa Indonesia.",
  },

  // ===== Biaya =============================================================
  {
    groupId: "cost",
    symbol: "scales",
    title: "Biaya Liburan ke Mesir — perkiraan nyata 2026 | Kemet",
    description:
      "Berapa biaya liburan privat ke Mesir: kisaran per orang per hari, lima hal yang menggerakkan harga, dan apa saja yang sudah termasuk.",
    keywords:
      "biaya liburan ke mesir, harga tour mesir, budget wisata mesir, biaya perjalanan mesir",
    crumb: "Biaya",
    h1: "Berapa biaya liburan ke Mesir",
    standfirst:
      "Kisaran yang nyata — dan lima keputusan yang benar-benar menggerakkan angkanya.",
    lede:
      "Perjalanan privat di Mesir umumnya berada di kisaran 200–450 euro per orang per hari, di luar tiket pesawat internasional. Jarak antara kedua angka itu bukan kebetulan: ia lahir dari lima keputusan yang Anda ambil saat merencanakan. Ada baiknya mengenali kelimanya sebelum membandingkan dua penawaran.",
    facts: [
      { label: "Tingkat awal", value: "±200 € / orang / hari" },
      { label: "Menengah", value: "±300 € / orang / hari" },
      { label: "Atas", value: "450 € ke atas" },
      { label: "Uang muka", value: "25 %" },
    ],
    sections: [
      {
        title: "1. Jumlah peserta",
        body:
          "Ini faktor terkuat, jauh melampaui yang lain. Egyptologist, kendaraan dan sopir berharga sama untuk dua orang maupun enam orang: biayanya dibagi. Keluarga berenam kerap membayar jauh lebih murah per kepala untuk perjalanan yang sepenuhnya privat dibanding sepasang suami istri pada rute yang sama.",
      },
      {
        title: "2. Kelas hotel",
        body:
          "Ini tuas kedua. Selisih antara hotel bintang empat yang baik dan hotel mewah di tepi Nil bisa melampaui seluruh biaya harian lainnya jika digabung. Sebaliknya, mengganti hotel tidak mengubah situs, pemandu, maupun tiket masuk — inilah pos yang paling mudah disesuaikan tanpa merusak perjalanan.",
      },
      {
        title: "3. Musim",
        body:
          "Oktober sampai April semuanya lebih mahal — itulah musimnya Mesir Hulu. Mei sampai September, hotel dan kapal yang sama turun jauh, kadang setengahnya, karena Aswan mencapai 40 °C. Musim tidak mengubah mutu perjalanan, hanya jam berangkatnya.",
      },
      {
        title: "4. Kapal di Sungai Nil",
        body:
          "Satu kabin di kapal bintang lima dan sewa penuh sebuah dahabiya berada pada orde biaya yang berbeda. Pos inilah yang paling sering menjelaskan seluruh selisih antara dua penawaran yang sepintas tampak menawarkan hal yang sama.",
      },
      {
        title: "5. Penerbangan domestik",
        body:
          "Kairo–Luxor dan Aswan–Kairo ditempuh dengan pesawat: sekitar satu jam, dibanding sepuluh jam perjalanan darat. Pos ini tidak besar tetapi nyata, dan pada penawaran kami ia berdiri sebagai baris tersendiri, bukan dilebur ke dalam paket.",
      },
    ],
    highlights: {
      heading: "Yang sudah termasuk dalam harga kami",
      items: [
        "Egyptologist berlisensi untuk seluruh perjalanan",
        "Seluruh tiket masuk situs di sepanjang rute",
        "Transfer privat ber-AC dan penjemputan di hotel",
        "Makan siang pada hari kunjungan, air setiap hari",
        "Tidak termasuk: tiket internasional, visa, tip, pengeluaran pribadi",
      ],
    },
    faqs: [
      { q: "Mengapa harga per paket tidak dipublikasikan?", a: "Karena angka itu akan salah untuk hampir semua orang yang membacanya. Rute yang sama untuk dua orang pada bulan Januari dan enam orang pada bulan Juni tidak berharga sama per kepala, dan selisihnya besar. Kami memilih kisaran yang jujur dan penawaran yang tepat, bukan angka pemancing." },
      { q: "Apakah ada biaya tersembunyi?", a: "Tidak. Setiap penawaran mencantumkan apa yang termasuk dan apa yang tidak, sebelum Anda membayar apa pun. Kami tidak melakukan singgah belanja berkomisi dan tidak menambahkan biaya setibanya di Mesir." },
      { q: "Berapa yang perlu disiapkan untuk tip?", a: "Tip adalah bagian dari kebiasaan di Mesir. Siapkan setara 8–12 euro per hari per orang untuk pemandu, sopir dan awak kapal secara keseluruhan. Kami memberikan rincian pembagiannya sebelum keberangkatan agar tidak canggung dan tidak berlebihan." },
      { q: "Membayar dengan mata uang apa?", a: "Penawaran kami dalam euro. Di Mesir, pound Mesir dipakai untuk pengeluaran kecil; kartu diterima di hotel dan restoran besar, kurang di tempat lain. Siapkan sedikit uang tunai untuk tip dan pasar." },
    ],
    cta: {
      heading: "Dapatkan penawaran yang tepat",
      text: "Tanggal, jumlah peserta, dan kelas hotel yang Anda inginkan sudah cukup untuk angka yang pasti, bukan sekadar kisaran.",
      whatsapp: "Halo Kemet — saya ingin penawaran biaya perjalanan ke Mesir.",
      emailSubject: "Permintaan penawaran — Mesir",
    },
    moreLabel: "Rincian harga",
    moreText:
      "Rincian pos demi pos beserta harga setiap rute diterbitkan dalam Bahasa Inggris di situs utama. Untuk penawaran, tulis saja kepada kami dalam Bahasa Indonesia.",
  },

  // ===== Waktu terbaik =====================================================
  {
    groupId: "when-to-go",
    symbol: "sun",
    title: "Waktu Terbaik ke Mesir — panduan bulan per bulan | Kemet",
    description:
      "Kapan waktu terbaik ke Mesir: panas, keramaian, harga dan hari besar, bulan demi bulan — untuk Kairo, Luxor, Aswan dan Laut Merah.",
    keywords:
      "waktu terbaik ke mesir, cuaca mesir, musim di mesir, mesir bulan apa, liburan sekolah ke mesir",
    crumb: "Waktu terbaik",
    h1: "Waktu terbaik berkunjung ke Mesir",
    standfirst:
      "Oktober sampai April untuk Lembah Nil. Sisa tahunnya punya alasan tersendiri, dan alasannya kuat.",
    lede:
      "Jawaban singkatnya: Oktober sampai April. Lembah Nil pada bulan-bulan itu hangat tanpa menyiksa, dan hari kunjungan nyaman dari pagi hingga sore. Jawaban panjangnya lebih menarik, sebab musim panas punya kelebihan yang nyata, dan Laut Merah tidak mengikuti kalender Luxor.",
    facts: [
      { label: "Terbaik", value: "Oktober – April" },
      { label: "Paling ramai", value: "Desember – Januari" },
      { label: "Paling panas", value: "Juni – Agustus" },
      { label: "Laut Merah", value: "baik sepanjang tahun" },
    ],
    sections: [
      {
        title: "Oktober sampai April — musimnya",
        body:
          "Luxor dan Aswan berkisar 25–30 °C pada siang hari, dengan malam yang sejuk di geladak kapal. Kairo terasa lembut. Inilah masa ketika kunjungan sore hari masih nyaman, dan karena itulah semua orang datang. Pesan dua sampai tiga bulan sebelumnya, lebih awal lagi untuk akhir Desember.",
      },
      {
        title: "Mei sampai September — panas, dan untungnya",
        body:
          "Aswan kerap melewati 40 °C. Kunjungan dilakukan pukul enam sampai sebelas, lalu kembali ke hotel. Sebagai gantinya: kuil yang nyaris kosong, hotel dan kapal dengan harga yang jauh berbeda, dan cahaya yang tidak muncul di musim ramai. Untuk Laut Merah, musim panas justru yang terbaik.",
      },
      {
        title: "Menyesuaikan dengan kalender Indonesia",
        body:
          "Liburan sekolah Juni–Juli jatuh tepat di puncak panas Mesir Hulu; itu tetap bisa dijalani dengan jadwal pagi, dan biayanya jauh lebih ringan — banyak keluarga memilih justru karena itu. Libur Lebaran berpindah setiap tahun; bila jatuh antara Oktober dan April, itulah kombinasi terbaik yang mungkin. Libur akhir Desember bertepatan dengan pekan tersibuk di Mesir, jadi pesan sangat awal.",
      },
      {
        title: "Ramadan di Mesir",
        body:
          "Situs, museum dan hotel tetap beroperasi normal, dan siang hari justru lebih tenang. Yang berubah adalah irama kota: sebagian rumah makan lokal tutup hingga maghrib, sementara malam-malam Kairo menjadi salah satu pengalaman terkuat sepanjang tahun. Bagi tamu yang berpuasa, kami menyusun jadwal kunjungan mengikuti waktu salat dan berbuka, bukan sebaliknya.",
      },
    ],
    faqs: [
      { q: "Bisakah ke Mesir saat musim panas?", a: "Bisa, asalkan menerima ritmenya: kunjungan pagi buta, kembali ke hotel pada jam terpanas, keluar lagi menjelang sore. Imbalannya situs yang kosong dan harga yang turun jauh. Laut Merah pada musim panas justru sempurna." },
      { q: "Bulan apa yang paling nyaman?", a: "November dan Maret adalah kompromi terbaik: panasnya nyaman, keramaian masih wajar, dan harga belum mencapai puncak akhir tahun." },
      { q: "Apakah Mesir sering hujan?", a: "Hampir tidak pernah di Lembah Nil — hanya beberapa milimeter setahun di Luxor dan Aswan. Alexandria dan pesisir Mediterania menerima hujan sungguhan pada musim dingin, dan itu perlu diperhitungkan bila rute Anda turun sampai ke laut." },
      { q: "Bagaimana dengan waktu salat selama perjalanan?", a: "Masjid ada di mana-mana, termasuk di dekat sebagian besar situs, dan jadwal harian kami menyisihkan waktu untuk salat tanpa Anda perlu memintanya. Sampaikan saja saat perencanaan agar susunan harinya dibuat sejak awal." },
    ],
    cta: {
      heading: "Mari tentukan tanggalnya",
      text: "Sebutkan kapan Anda bisa berangkat — kami jelaskan apa adanya, kelebihan maupun kekurangan periode itu.",
      whatsapp: "Halo Kemet — kapan waktu terbaik ke Mesir?",
      emailSubject: "Pertanyaan — waktu terbaik ke Mesir",
    },
    moreLabel: "Panduan bulan per bulan",
    moreText:
      "Panduan rinci untuk kedua belas bulan — suhu, keramaian, harga dan hari besar — diterbitkan dalam Bahasa Inggris di situs utama.",
  },

  // ===== Keamanan ==========================================================
  {
    groupId: "safety",
    symbol: "eye",
    title: "Apakah Mesir Aman? Jawaban per wilayah | Kemet",
    description:
      "Apakah Mesir aman dikunjungi? Ditinjau per wilayah — Kairo, Luxor, Laut Merah dan Sinai — termasuk perempuan bepergian sendiri, air minum dan pedagang.",
    keywords:
      "apakah mesir aman, keamanan wisata mesir, mesir bahaya atau tidak, sinai aman, travel mesir aman",
    crumb: "Keamanan",
    h1: "Apakah Mesir aman dikunjungi?",
    standfirst:
      "Untuk wilayah wisata, ya — dengan catatan yang nyata, dan satu wilayah yang tidak boleh ada dalam rute mana pun.",
    lede:
      "Wilayah yang didatangi wisatawan — Kairo, Giza, Luxor, Aswan, Alexandria dan pesisir Laut Merah — menerima jutaan tamu setiap tahun dan dijaga ketat. Kejahatan dengan kekerasan terhadap wisatawan jarang terjadi. Masalah yang benar-benar nyata berbeda jenisnya: pedagang yang memaksa, lalu lintas Kairo, dan panas. Berikut rinciannya, tanpa dipermanis.",
    facts: [
      { label: "Lembah Nil", value: "aman, dijaga ketat" },
      { label: "Laut Merah", value: "aman" },
      { label: "Sinai Selatan", value: "aman di pesisir" },
      { label: "Sinai Utara", value: "jangan dikunjungi" },
    ],
    sections: [
      {
        title: "Yang aman, dan alasannya",
        body:
          "Kairo, Giza, Saqqara, Luxor, Aswan, Abu Simbel, Alexandria, Hurghada dan Sharm El Sheikh menampung sebagian besar pariwisata Mesir, dan kehadiran aparat terlihat jelas di situs, jalan dan pintu hotel. Keluarga dalam perjalanan privat bukan sasaran; risiko hariannya lebih menyerupai kota besar mana pun, dengan tingkat kekerasan yang lebih rendah.",
      },
      {
        title: "Wilayah yang harus dikecualikan",
        body:
          "Sinai Utara — di luar jalur pesisir wisata, ke arah perbatasan Gaza — berada di bawah peringatan resmi hampir seluruh kementerian luar negeri, termasuk Kementerian Luar Negeri RI. Tidak ada rute serius yang masuk ke sana, termasuk rute kami. Sebaliknya, Sharm El Sheikh, Dahab dan pesisir Sinai Selatan adalah dunia yang sama sekali berbeda dan dikunjungi secara normal.",
      },
      {
        title: "Perempuan yang bepergian sendiri",
        body:
          "Bisa dilakukan dan banyak yang melakukannya, tetapi kami berterus terang: perhatian dan komentar di jalan lebih sering daripada di Asia Tenggara, terutama di Kairo. Pakaian yang menutup bahu dan lutut, kendaraan pribadi alih-alih jalan kaki pada malam hari, dan pemandu yang tetap mendampingi menghilangkan hampir seluruh masalah itu. Kebanyakan menggambarkannya sebagai melelahkan secara sosial, bukan berbahaya.",
      },
      {
        title: "Air, makanan dan panas",
        body:
          "Jangan minum air keran: air kemasan tersedia di mana-mana dan kami menyediakannya setiap hari. Hotel dan rumah makan yang ramai jarang bermasalah; jus pinggir jalan dan lalapan yang dicuci air keran lebih berisiko. Pada musim panas, ancaman kesehatan yang sesungguhnya adalah panas, bukan kejahatan — karena itulah kunjungan dijadwalkan pagi buta.",
      },
      {
        title: "Pedagang, dan bagaimana mereka menghilang",
        body:
          "Di sekitar piramida dan kuil besar, tawaran datang terus-menerus: unta, suvenir, 'foto gratis' yang ternyata tidak gratis. Ini tidak berbahaya, hanya melelahkan. Dengan Egyptologist dan sopir pribadi, sebagian besarnya lenyap: Anda tidak berhenti di tempat yang salah, Anda tidak sendirian, dan ada yang menjawab mewakili Anda.",
      },
    ],
    faqs: [
      { q: "Apa kata imbauan resmi?", a: "Sebagian besar kementerian luar negeri menyarankan kewaspadaan normal untuk wilayah wisata dan melarang keras Sinai Utara serta wilayah gurun perbatasan di barat dan selatan. Periksa halaman resmi negara Anda sebelum memesan: itu lebih berwenang daripada halaman komersial mana pun, termasuk halaman ini." },
      { q: "Apakah Mesir cocok untuk anak-anak?", a: "Cocok, dan justru negeri yang mudah dipahami anak. Yang perlu disesuaikan adalah ritmenya: pagi yang lebih pendek, jeda pada jam panas, dan air minum sepanjang waktu. Banyak perjalanan kami adalah perjalanan keluarga." },
      { q: "Perlukah asuransi khusus?", a: "Asuransi perjalanan yang mencakup biaya medis dan evakuasi sangat dianjurkan, seperti di mana pun. Bila program Anda mencakup menyelam, pastikan aktivitas itu tercakup: banyak polis standar mengecualikannya di atas kedalaman tertentu." },
      { q: "Amankah berjalan sendiri di Kairo?", a: "Aman, di kawasan biasa dan pada siang hari. Kendalanya bukan keamanan melainkan lalu lintas: menyeberang jalan besar di Kairo adalah latihan tersendiri, dan sopir taksi menawar. Mobil dengan sopir tidak mahal dan menghilangkan kedua kerepotan itu." },
    ],
    cta: {
      heading: "Ada pertanyaan khusus soal keamanan?",
      text: "Silakan tanyakan: kami menjawab terus terang, termasuk ketika jawabannya adalah 'sebaiknya jangan'.",
      whatsapp: "Halo Kemet — saya ingin bertanya soal keamanan di Mesir.",
      emailSubject: "Pertanyaan — keamanan di Mesir",
    },
    moreLabel: "Panduan lengkap",
    moreText:
      "Panduan keamanan Mesir yang terinci per wilayah diterbitkan dalam Bahasa Inggris di situs utama.",
  },

  // ===== Visa ==============================================================
  {
    groupId: "visa",
    symbol: "ankh",
    title: "Visa Mesir — cara mengurus dan biayanya 2026 | Kemet",
    description:
      "Visa Mesir: visa on arrival atau e-Visa daring, izin tinggal 30 hari, paspor berlaku enam bulan. Cara memastikan aturan untuk paspor Anda.",
    keywords:
      "visa mesir, visa on arrival mesir, e-visa mesir, syarat masuk mesir, paspor untuk mesir",
    crumb: "Visa",
    h1: "Visa masuk Mesir",
    standfirst:
      "Dua jalur, satu otoritas — dan satu hal yang wajib diperiksa sebelum memesan tiket.",
    lede:
      "Mesir menerbitkan visa turis 30 hari melalui dua jalur: dibeli setibanya di bandara, atau diurus daring sebelum berangkat sebagai e-Visa. Jalur mana yang terbuka untuk Anda ditentukan oleh paspor Anda, bukan oleh maskapai atau agen perjalanan — dan hanya satu situs yang berwenang menjawabnya.",
    facts: [
      { label: "Biaya", value: "30 USD (sekali masuk)" },
      { label: "Izin tinggal", value: "30 hari" },
      { label: "Paspor", value: "berlaku 6 bulan" },
      { label: "Portal resmi", value: "visa2egypt.gov.eg" },
    ],
    sections: [
      {
        title: "Aturan untuk paspor Indonesia",
        body:
          "Kami tidak mencantumkan jalur tertentu untuk paspor Indonesia di halaman ini, dan itu disengaja. Ketentuan masuk berubah, dan menebak dapat membuat seseorang kehilangan perjalanannya. Yang kami lakukan: memeriksakan paspor dan tanggal Anda terhadap portal resmi pemerintah Mesir, lalu memberi tahu Anda jalur yang berlaku — tanpa biaya dan sebelum ada pemesanan apa pun. Portal pemerintah Mesir tetap menjadi satu-satunya pihak yang memutuskan.",
      },
      {
        title: "Visa on arrival dan e-Visa",
        body:
          "Visa on arrival dibeli di loket bank bandara sebelum pemeriksaan imigrasi, sebaiknya dengan uang tunai dolar AS, lalu Anda lanjut ke imigrasi — biasanya hanya beberapa menit. E-Visa diajukan daring, dibayar dengan kartu, dan tiba melalui surel untuk dicetak. Bila paspor Anda memenuhi syarat keduanya, e-Visa menghemat waktu pada musim ramai.",
      },
      {
        title: "Hanya satu situs yang resmi",
        body:
          "E-Visa hanya diajukan melalui visa2egypt.gov.eg, portal pemerintah Mesir. Banyak situs perantara berpenampilan resmi menagih tiga sampai lima kali lipat untuk mengisikan formulir yang sama. Bila alamatnya tidak berakhiran gov.eg, itu bukan layanan resmi.",
      },
      {
        title: "Izin Sinai dan batasnya",
        body:
          "Bila Anda masuk melalui Sharm El Sheikh atau Taba dan tetap di pesisir Sinai Selatan, tersedia izin gratis 15 hari saat kedatangan. Izin ini TIDAK mencakup wilayah Mesir lainnya: dengan izin tersebut Anda tidak dapat pergi ke Kairo maupun Luxor. Kunjungan ke Gunung Sinai dan Biara Santa Katarina tetap dimungkinkan. Begitu rute keluar dari Sinai, visa penuh diperlukan.",
      },
    ],
    faqs: [
      { q: "Bagaimana memastikan aturan untuk paspor saya?", a: "Kirimkan kewarganegaraan dan tanggal perjalanan Anda kepada kami; kami periksakan terhadap portal resmi pemerintah Mesir dan menjawab dengan jalur yang tepat, tanpa biaya dan tanpa keharusan memesan. Anda juga dapat memeriksanya sendiri di visa2egypt.gov.eg." },
      { q: "Apakah paspor harus berlaku enam bulan?", a: "Ya, enam bulan terhitung sejak tanggal masuk ke Mesir. Ini penyebab penolakan paling umum di konter keberangkatan, dan sepenuhnya dapat dihindari: periksa tanggalnya saat memesan, bukan sepekan sebelum terbang." },
      { q: "Apakah anak-anak juga memerlukan visa?", a: "Ya. Setiap orang yang memegang paspor sendiri memerlukan visanya sendiri, berapa pun usianya, dengan biaya yang sama." },
      { q: "Berapa lama sebelumnya e-Visa diajukan?", a: "Portal resmi menganjurkan sekurang-kurangnya tujuh hari sebelum keberangkatan. Dalam praktiknya persetujuan sering datang dalam satu sampai tiga hari kerja, tetapi jangan menundanya sampai malam sebelum terbang." },
      { q: "Bisakah masa tinggal diperpanjang?", a: "Bisa, melalui kantor imigrasi di Mesir, tetapi itu urusan administratif yang memakan waktu. Bila sejak awal Anda tahu akan tinggal lebih dari 30 hari, ajukan visa multiple entry sejak awal." },
    ],
    cta: {
      heading: "Ragu soal paspor Anda?",
      text: "Sebutkan kewarganegaraan dan tanggal perjalanan; kami konfirmasikan jalur yang tepat — gratis, bahkan sebelum ada pemesanan.",
      whatsapp: "Halo Kemet — saya ingin bertanya soal visa Mesir.",
      emailSubject: "Pertanyaan — visa Mesir",
    },
    moreLabel: "Aturan per kewarganegaraan",
    moreText:
      "Aturan masuk terperinci untuk setiap paspor yang telah kami verifikasi diterbitkan dalam Bahasa Inggris di situs utama. Portal resmi pemerintah Mesir tetap menjadi otoritas dalam hal ini.",
  },
];
