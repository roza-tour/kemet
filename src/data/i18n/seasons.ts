// ---------------------------------------------------------------------------
// The seasonal ribbon, in every language the site speaks.
//
// WHY THIS FILE EXISTS
// The ribbon and the nav chip sit on every page of the site, including the
// localised ones. Until now they were English on all of them: an Indonesian
// reader finished three thousand words of Indonesian and was told, at the foot
// of the page, that "The heat breaks and the season reopens". The one element
// that announces the site is paying attention to the time of year was the one
// element that had not been translated.
//
// These are not machine translations of the English. Each line is written for
// the market it addresses, with the same brevity and the same refusal to
// exaggerate — the German is short because German readers of this kind of copy
// expect it to be, and the Indonesian and Malay lines for Ramadan and the two
// Eids are written for readers who keep them, not for readers who observe them
// from outside.
//
// `{dates}` is replaced at build time with the event's real dates, formatted
// in the reader's own locale by Intl.DateTimeFormat — so a German reader sees
// "9.–11. März 2027" and an Indonesian reader "9–11 Maret 2027", from the same
// ISO values, rather than one hand-typed English string shown to everyone.
// ---------------------------------------------------------------------------
import type { SeasonKey } from "@/data/seasonalCalendar";
import type { SiteLocale } from "@/config/i18n";

export interface SeasonText {
  /** Two or three words. It has to fit the nav chip at 680px wide. */
  label: string;
  /** One sentence. `{dates}` is substituted where the occasion has dates. */
  note: string;
}

export const SEASON_TEXT: Record<SiteLocale, Record<SeasonKey, SeasonText>> = {
  en: {
    winter:  { label: "Winter in Egypt", note: "Peak season — clear skies, 22 °C on the Theban west bank, and the Nile at its best." },
    spring:  { label: "Spring in Egypt", note: "Warm days, cool evenings, and the desert in flower before the summer heat arrives." },
    summer:  { label: "Summer in Egypt", note: "Luxor at its hottest, so the touring day starts at dawn — and the Red Sea is at its warmest." },
    autumn:  { label: "Autumn in Egypt", note: "The heat breaks and the season reopens — the best light of the year on the Nile, before the winter crowds." },
    ramadan: { label: "Ramadan in Egypt", note: "Expected {dates}. Islamic Cairo is lantern-lit until dawn." },
    "eid-fitr": { label: "Eid al-Fitr", note: "Expected {dates} — the feast that closes Ramadan; festive cities, quiet monuments." },
    "eid-adha": { label: "Eid al-Adha", note: "Expected {dates} — Egypt's biggest holiday; quiet monuments, festive cities." },
    easter:  { label: "Easter in Egypt", note: "Easter Sunday is {dates} — spring on the Nile, warm days and cool evenings, and the long weekend most of Europe travels in." },
    "easter-both": { label: "Easter in Egypt", note: "Easter Sunday is {dates}, Western and Orthodox together this year — the Nile valley at its best, and booked early." },
    "orthodox-easter": { label: "Orthodox Easter", note: "Orthodox and Coptic Easter falls on {dates} — Egypt's own Easter, and the spring weekend the country spends outdoors." },
    "sun-festival": { label: "Abu Simbel Sun Festival", note: "Sunrise reaches the inner sanctuary on {dates}." },
    thanksgiving: { label: "Thanksgiving week", note: "{dates} — the American long weekend, in the best month on the Nile. Book it a season ahead." },
    valentines: { label: "Valentine's on the Nile", note: "{dates} — a felucca at sunset and dinner on the water, in the best month of the year for it." },
    christmas: { label: "Christmas & New Year in Egypt", note: "Winter sun, New Year's Eve on the Nile, Coptic Christmas on 7 January." },
    "christmas-booking": { label: "Christmas & New Year", note: "The first week of Egypt's year to sell out — the best Nile cabins and Giza-view rooms go first." },
  },

  de: {
    winter:  { label: "Winter in Ägypten", note: "Hochsaison — klarer Himmel, 22 °C am thebanischen Westufer und der Nil von seiner besten Seite." },
    spring:  { label: "Frühling in Ägypten", note: "Warme Tage, kühle Abende und die Wüste in Blüte, bevor die Sommerhitze einsetzt." },
    summer:  { label: "Sommer in Ägypten", note: "Luxor auf dem Höhepunkt der Hitze — der Besichtigungstag beginnt im Morgengrauen, und das Rote Meer ist am wärmsten." },
    autumn:  { label: "Herbst in Ägypten", note: "Die Hitze bricht, die Saison öffnet wieder — das beste Licht des Jahres am Nil, noch vor dem Winterandrang." },
    ramadan: { label: "Ramadan in Ägypten", note: "Voraussichtlich {dates}. Das islamische Kairo ist bis zum Morgengrauen von Laternen erleuchtet." },
    "eid-fitr": { label: "Eid al-Fitr", note: "Voraussichtlich {dates} — das Fest zum Ende des Ramadan: festliche Städte, ruhige Monumente." },
    "eid-adha": { label: "Eid al-Adha", note: "Voraussichtlich {dates} — Ägyptens größter Feiertag: ruhige Monumente, festliche Städte." },
    easter:  { label: "Ostern in Ägypten", note: "Ostersonntag ist {dates} — Frühling am Nil, warme Tage, kühle Abende und das lange Wochenende, an dem halb Europa verreist." },
    "easter-both": { label: "Ostern in Ägypten", note: "Ostersonntag ist {dates}, westlich und orthodox in diesem Jahr am selben Tag — das Niltal von seiner besten Seite, und früh ausgebucht." },
    "orthodox-easter": { label: "Orthodoxes Ostern", note: "Das orthodoxe und koptische Osterfest fällt auf {dates} — Ägyptens eigenes Ostern, das Frühlingswochenende, das das Land im Freien verbringt." },
    "sun-festival": { label: "Sonnenfest von Abu Simbel", note: "Am {dates} erreicht die aufgehende Sonne das innerste Heiligtum." },
    thanksgiving: { label: "Thanksgiving-Woche", note: "{dates} — das lange amerikanische Wochenende, im besten Monat am Nil. Eine Saison im Voraus buchen." },
    valentines: { label: "Valentinstag am Nil", note: "{dates} — eine Feluke im Sonnenuntergang und Abendessen auf dem Wasser, im schönsten Monat dafür." },
    christmas: { label: "Weihnachten & Neujahr in Ägypten", note: "Wintersonne, Silvester auf dem Nil, koptisches Weihnachten am 7. Januar." },
    "christmas-booking": { label: "Weihnachten & Neujahr", note: "Die erste Woche des Jahres, die in Ägypten ausgebucht ist — die besten Nilkabinen und Zimmer mit Pyramidenblick sind zuerst weg." },
  },

  it: {
    winter:  { label: "Inverno in Egitto", note: "Alta stagione — cielo terso, 22 °C sulla riva occidentale di Tebe e il Nilo al suo meglio." },
    spring:  { label: "Primavera in Egitto", note: "Giornate calde, sere fresche e il deserto in fiore prima che arrivi il caldo dell'estate." },
    summer:  { label: "Estate in Egitto", note: "Luxor al culmine del caldo: la giornata di visite comincia all'alba — e il Mar Rosso è alla temperatura migliore." },
    autumn:  { label: "Autunno in Egitto", note: "Il caldo si spezza e la stagione riapre — la luce migliore dell'anno sul Nilo, prima della folla invernale." },
    ramadan: { label: "Ramadan in Egitto", note: "Previsto {dates}. Il Cairo islamico resta illuminato dalle lanterne fino all'alba." },
    "eid-fitr": { label: "Eid al-Fitr", note: "Previsto {dates} — la festa che chiude il Ramadan: città in festa, monumenti tranquilli." },
    "eid-adha": { label: "Eid al-Adha", note: "Previsto {dates} — la festa più grande d'Egitto: monumenti tranquilli, città in festa." },
    easter:  { label: "Pasqua in Egitto", note: "La Pasqua cade il {dates} — primavera sul Nilo, giornate calde e sere fresche, il ponte in cui viaggia mezza Europa." },
    "easter-both": { label: "Pasqua in Egitto", note: "La Pasqua cade il {dates}, quest'anno cattolica e ortodossa insieme — la valle del Nilo al suo meglio, e si prenota presto." },
    "orthodox-easter": { label: "Pasqua ortodossa", note: "La Pasqua ortodossa e copta cade il {dates} — la Pasqua dell'Egitto, il fine settimana di primavera che il paese passa all'aperto." },
    "sun-festival": { label: "Festa del Sole ad Abu Simbel", note: "Il {dates} il sole che sorge raggiunge il santuario più interno." },
    thanksgiving: { label: "Settimana del Ringraziamento", note: "{dates} — il lungo fine settimana americano, nel mese migliore sul Nilo. Si prenota con una stagione di anticipo." },
    valentines: { label: "San Valentino sul Nilo", note: "{dates} — una feluca al tramonto e cena sull'acqua, nel mese più bello per farlo." },
    christmas: { label: "Natale e Capodanno in Egitto", note: "Sole d'inverno, notte di Capodanno sul Nilo, Natale copto il 7 gennaio." },
    "christmas-booking": { label: "Natale e Capodanno", note: "La prima settimana dell'anno a esaurirsi in Egitto — le cabine migliori sul Nilo e le camere vista piramidi vanno via per prime." },
  },

  es: {
    winter:  { label: "Invierno en Egipto", note: "Temporada alta — cielos despejados, 22 °C en la orilla occidental de Tebas y el Nilo en su mejor momento." },
    spring:  { label: "Primavera en Egipto", note: "Días cálidos, tardes frescas y el desierto en flor antes de que llegue el calor del verano." },
    summer:  { label: "Verano en Egipto", note: "Luxor en lo más alto del calor: la jornada de visitas empieza al amanecer — y el mar Rojo está en su mejor temperatura." },
    autumn:  { label: "Otoño en Egipto", note: "Se rompe el calor y la temporada vuelve a abrir — la mejor luz del año sobre el Nilo, antes del lleno invernal." },
    ramadan: { label: "Ramadán en Egipto", note: "Previsto {dates}. El Cairo islámico queda iluminado por farolillos hasta el amanecer." },
    "eid-fitr": { label: "Eid al-Fitr", note: "Previsto {dates} — la fiesta que cierra el Ramadán: ciudades de celebración, monumentos tranquilos." },
    "eid-adha": { label: "Eid al-Adha", note: "Previsto {dates} — la mayor fiesta de Egipto: monumentos tranquilos, ciudades de celebración." },
    easter:  { label: "Semana Santa en Egipto", note: "El Domingo de Resurrección es el {dates} — primavera en el Nilo, días cálidos y tardes frescas, y el puente en que viaja media Europa." },
    "easter-both": { label: "Semana Santa en Egipto", note: "El Domingo de Resurrección es el {dates}, este año católico y ortodoxo a la vez — el valle del Nilo en su mejor momento, y se reserva pronto." },
    "orthodox-easter": { label: "Pascua ortodoxa", note: "La Pascua ortodoxa y copta cae el {dates} — la Pascua propia de Egipto, el fin de semana de primavera que el país pasa al aire libre." },
    "sun-festival": { label: "Fiesta del Sol de Abu Simbel", note: "El {dates} el sol naciente alcanza el santuario más interior." },
    thanksgiving: { label: "Semana de Acción de Gracias", note: "{dates} — el puente largo estadounidense, en el mejor mes del Nilo. Se reserva con una temporada de antelación." },
    valentines: { label: "San Valentín en el Nilo", note: "{dates} — una faluca al atardecer y cena sobre el agua, en el mejor mes del año para ello." },
    christmas: { label: "Navidad y Año Nuevo en Egipto", note: "Sol de invierno, Nochevieja en el Nilo, Navidad copta el 7 de enero." },
    "christmas-booking": { label: "Navidad y Año Nuevo", note: "La primera semana del año que se agota en Egipto — los mejores camarotes del Nilo y las habitaciones con vista a las pirámides se van primero." },
  },

  fr: {
    winter:  { label: "L'hiver en Égypte", note: "Haute saison — ciel limpide, 22 °C sur la rive ouest de Thèbes et le Nil à son meilleur." },
    spring:  { label: "Le printemps en Égypte", note: "Journées chaudes, soirées fraîches et le désert en fleurs avant l'arrivée de la chaleur d'été." },
    summer:  { label: "L'été en Égypte", note: "Louxor au plus fort de la chaleur : la journée de visites commence à l'aube — et la mer Rouge est à sa meilleure température." },
    autumn:  { label: "L'automne en Égypte", note: "La chaleur se brise et la saison rouvre — la plus belle lumière de l'année sur le Nil, avant l'affluence d'hiver." },
    ramadan: { label: "Le Ramadan en Égypte", note: "Prévu {dates}. Le Caire islamique reste éclairé aux lanternes jusqu'à l'aube." },
    "eid-fitr": { label: "Aïd al-Fitr", note: "Prévu {dates} — la fête qui clôt le Ramadan : villes en fête, monuments tranquilles." },
    "eid-adha": { label: "Aïd al-Adha", note: "Prévu {dates} — la plus grande fête d'Égypte : monuments tranquilles, villes en fête." },
    easter:  { label: "Pâques en Égypte", note: "Le dimanche de Pâques tombe le {dates} — le printemps sur le Nil, journées chaudes et soirées fraîches, et le long week-end où l'Europe voyage." },
    "easter-both": { label: "Pâques en Égypte", note: "Le dimanche de Pâques tombe le {dates}, catholique et orthodoxe le même jour cette année — la vallée du Nil à son meilleur, et réservée tôt." },
    "orthodox-easter": { label: "Pâques orthodoxe", note: "Pâques orthodoxe et copte tombe le {dates} — la Pâques propre à l'Égypte, le week-end de printemps que le pays passe dehors." },
    "sun-festival": { label: "Fête du Soleil d'Abou Simbel", note: "Le {dates}, le soleil levant atteint le sanctuaire le plus intérieur." },
    thanksgiving: { label: "Semaine de Thanksgiving", note: "{dates} — le long week-end américain, au meilleur mois sur le Nil. À réserver une saison à l'avance." },
    valentines: { label: "La Saint-Valentin sur le Nil", note: "{dates} — une félouque au coucher du soleil et un dîner sur l'eau, au plus beau mois pour cela." },
    christmas: { label: "Noël et Nouvel An en Égypte", note: "Soleil d'hiver, réveillon sur le Nil, Noël copte le 7 janvier." },
    "christmas-booking": { label: "Noël et Nouvel An", note: "La première semaine de l'année à afficher complet en Égypte — les meilleures cabines sur le Nil et les chambres face aux pyramides partent d'abord." },
  },

  ru: {
    winter:  { label: "Зима в Египте", note: "Высокий сезон — ясное небо, 22 °C на западном берегу Фив и Нил в лучшую свою пору." },
    spring:  { label: "Весна в Египте", note: "Тёплые дни, прохладные вечера и цветущая пустыня — до того, как придёт летняя жара." },
    summer:  { label: "Лето в Египте", note: "Луксор в самую жару: день экскурсий начинается на рассвете — а Красное море прогрето лучше всего." },
    autumn:  { label: "Осень в Египте", note: "Жара отступает, сезон открывается снова — лучший свет года на Ниле, до зимнего наплыва." },
    ramadan: { label: "Рамадан в Египте", note: "Ожидается {dates}. Исламский Каир освещён фонарями до рассвета." },
    "eid-fitr": { label: "Ид аль-Фитр", note: "Ожидается {dates} — праздник, завершающий Рамадан: города в празднике, памятники в тишине." },
    "eid-adha": { label: "Ид аль-Адха", note: "Ожидается {dates} — самый большой праздник Египта: памятники в тишине, города в празднике." },
    easter:  { label: "Пасха в Египте", note: "Пасха — {dates}: весна на Ниле, тёплые дни и прохладные вечера, и те длинные выходные, когда путешествует вся Европа." },
    "easter-both": { label: "Пасха в Египте", note: "Пасха — {dates}, в этом году западная и православная в один день: долина Нила в лучшую пору, и бронируют её рано." },
    "orthodox-easter": { label: "Православная Пасха", note: "Православная и коптская Пасха приходится на {dates} — собственная Пасха Египта и те весенние выходные, которые страна проводит под открытым небом." },
    "sun-festival": { label: "Солнечный праздник в Абу-Симбеле", note: "{dates} восходящее солнце достигает внутреннего святилища." },
    thanksgiving: { label: "Неделя Дня благодарения", note: "{dates} — американские длинные выходные, в лучший месяц на Ниле. Бронировать за сезон." },
    valentines: { label: "День святого Валентина на Ниле", note: "{dates} — фелука на закате и ужин на воде, в лучший месяц года для этого." },
    christmas: { label: "Рождество и Новый год в Египте", note: "Зимнее солнце, Новый год на Ниле, коптское Рождество 7 января." },
    "christmas-booking": { label: "Рождество и Новый год", note: "Первая неделя года, которая распродаётся в Египте, — лучшие каюты на Ниле и номера с видом на пирамиды уходят первыми." },
  },

  id: {
    winter:  { label: "Musim Dingin di Mesir", note: "Puncak musim — langit cerah, 22 °C di tepi barat Thebes, dan Sungai Nil dalam keadaan terbaiknya." },
    spring:  { label: "Musim Semi di Mesir", note: "Siang yang hangat, malam yang sejuk, dan gurun yang berbunga sebelum panas musim panas tiba." },
    summer:  { label: "Musim Panas di Mesir", note: "Luxor di puncak panasnya, jadi hari kunjungan dimulai saat fajar — dan Laut Merah sedang paling hangat." },
    autumn:  { label: "Musim Gugur di Mesir", note: "Panas mereda dan musim kembali dibuka — cahaya terbaik sepanjang tahun di Sungai Nil, sebelum keramaian musim dingin." },
    ramadan: { label: "Ramadan di Mesir", note: "Diperkirakan {dates}. Kairo Islam menyala oleh lentera sampai menjelang subuh." },
    "eid-fitr": { label: "Idulfitri", note: "Diperkirakan {dates} — hari raya penutup Ramadan: kota-kota meriah, situs-situs justru lengang." },
    "eid-adha": { label: "Iduladha", note: "Diperkirakan {dates} — hari raya terbesar di Mesir: situs-situs lengang, kota-kota meriah." },
    easter:  { label: "Paskah di Mesir", note: "Minggu Paskah jatuh pada {dates} — musim semi di Sungai Nil, siang hangat dan malam sejuk, dan akhir pekan panjang saat sebagian besar Eropa bepergian." },
    "easter-both": { label: "Paskah di Mesir", note: "Minggu Paskah jatuh pada {dates}, tahun ini Barat dan Ortodoks bersamaan — Lembah Nil dalam keadaan terbaik, dan dipesan jauh hari." },
    "orthodox-easter": { label: "Paskah Ortodoks", note: "Paskah Ortodoks dan Koptik jatuh pada {dates} — Paskahnya Mesir sendiri, akhir pekan musim semi yang dihabiskan seluruh negeri di luar rumah." },
    "sun-festival": { label: "Festival Matahari Abu Simbel", note: "Pada {dates} matahari terbit mencapai ruang terdalam kuil." },
    thanksgiving: { label: "Pekan Thanksgiving", note: "{dates} — akhir pekan panjang Amerika, di bulan terbaik di Sungai Nil. Dipesan satu musim sebelumnya." },
    valentines: { label: "Valentine di Sungai Nil", note: "{dates} — felucca saat matahari terbenam dan makan malam di atas air, di bulan terbaik sepanjang tahun untuk itu." },
    christmas: { label: "Natal & Tahun Baru di Mesir", note: "Matahari musim dingin, malam Tahun Baru di Sungai Nil, Natal Koptik pada 7 Januari." },
    "christmas-booking": { label: "Natal & Tahun Baru", note: "Pekan pertama dalam setahun yang habis dipesan di Mesir — kabin terbaik di Sungai Nil dan kamar menghadap piramida paling cepat habis." },
  },

  ms: {
    winter:  { label: "Musim Sejuk di Mesir", note: "Kemuncak musim — langit cerah, 22 °C di tebing barat Thebes, dan Sungai Nil pada keadaan terbaiknya." },
    spring:  { label: "Musim Bunga di Mesir", note: "Siang yang hangat, malam yang nyaman, dan padang pasir berbunga sebelum panas musim panas tiba." },
    summer:  { label: "Musim Panas di Mesir", note: "Luxor pada kemuncak panasnya, jadi hari lawatan bermula pada waktu subuh — dan Laut Merah paling suam ketika ini." },
    autumn:  { label: "Musim Luruh di Mesir", note: "Panas mula reda dan musim dibuka semula — cahaya terbaik sepanjang tahun di Sungai Nil, sebelum orang ramai musim sejuk." },
    ramadan: { label: "Ramadan di Mesir", note: "Dijangka {dates}. Kaherah Islam bermandi cahaya tanglung sehingga menjelang subuh." },
    "eid-fitr": { label: "Aidilfitri", note: "Dijangka {dates} — hari raya penutup Ramadan: bandar meriah, tapak bersejarah pula lengang." },
    "eid-adha": { label: "Aidiladha", note: "Dijangka {dates} — perayaan terbesar di Mesir: tapak bersejarah lengang, bandar meriah." },
    easter:  { label: "Easter di Mesir", note: "Ahad Easter jatuh pada {dates} — musim bunga di Sungai Nil, siang hangat dan malam nyaman, serta hujung minggu panjang ketika kebanyakan Eropah bermusafir." },
    "easter-both": { label: "Easter di Mesir", note: "Ahad Easter jatuh pada {dates}, tahun ini Barat dan Ortodoks serentak — Lembah Nil pada keadaan terbaik, dan ditempah lebih awal." },
    "orthodox-easter": { label: "Easter Ortodoks", note: "Easter Ortodoks dan Koptik jatuh pada {dates} — Easter milik Mesir sendiri, hujung minggu musim bunga yang dihabiskan seluruh negara di luar rumah." },
    "sun-festival": { label: "Perayaan Matahari Abu Simbel", note: "Pada {dates} matahari terbit mencapai ruang terdalam kuil." },
    thanksgiving: { label: "Minggu Thanksgiving", note: "{dates} — hujung minggu panjang Amerika, pada bulan terbaik di Sungai Nil. Ditempah satu musim lebih awal." },
    valentines: { label: "Valentine di Sungai Nil", note: "{dates} — felucca ketika matahari terbenam dan makan malam di atas air, pada bulan terbaik sepanjang tahun untuknya." },
    christmas: { label: "Krismas & Tahun Baharu di Mesir", note: "Matahari musim sejuk, malam Tahun Baharu di Sungai Nil, Krismas Koptik pada 7 Januari." },
    "christmas-booking": { label: "Krismas & Tahun Baharu", note: "Minggu pertama dalam setahun yang habis ditempah di Mesir — kabin terbaik di Sungai Nil dan bilik menghadap piramid paling cepat habis." },
  },
  pt: {
    winter:  { label: "Inverno no Egito", note: "O auge da temporada — céu limpo, 22 °C na margem oeste de Tebas e o Nilo no seu melhor." },
    spring:  { label: "Primavera no Egito", note: "Dias quentes, noites agradáveis e o deserto em flor antes do calor do verão." },
    summer:  { label: "Verão no Egito", note: "Luxor no pico do calor, então os dias de visita começam ao amanhecer — e o Mar Vermelho está no seu mais quente." },
    autumn:  { label: "Outono no Egito", note: "O calor cede e a temporada recomeça — a melhor luz do ano no Nilo, antes do movimento do inverno." },
    ramadan: { label: "Ramadã no Egito", note: "Previsto para {dates}. O Cairo islâmico se ilumina de lanternas até pouco antes do amanhecer." },
    "eid-fitr": { label: "Eid al-Fitr", note: "Previsto para {dates} — a festa que encerra o Ramadã: cidades em festa, sítios arqueológicos vazios." },
    "eid-adha": { label: "Eid al-Adha", note: "Previsto para {dates} — a maior festa do Egito: sítios vazios, cidades em festa." },
    easter:  { label: "Páscoa no Egito", note: "O domingo de Páscoa cai em {dates} — primavera no Nilo, dias quentes e noites agradáveis, e um feriado prolongado." },
    "easter-both": { label: "Páscoa no Egito", note: "O domingo de Páscoa cai em {dates}, este ano junto com a Páscoa ortodoxa — o Vale do Nilo no seu melhor, e reservado com antecedência." },
    "orthodox-easter": { label: "Páscoa Ortodoxa", note: "A Páscoa ortodoxa e copta cai em {dates} — a Páscoa do próprio Egito, um fim de semana de primavera que o país inteiro passa ao ar livre." },
    "sun-festival": { label: "Festival do Sol de Abu Simbel", note: "Em {dates} o sol nascente alcança a câmara mais profunda do templo." },
    thanksgiving: { label: "Semana de Ação de Graças", note: "{dates} — o feriado prolongado americano, no melhor mês do Nilo. Reservado com uma temporada de antecedência." },
    valentines: { label: "Dia dos Namorados no Nilo", note: "{dates} — faluca ao pôr do sol e jantar sobre a água, no melhor mês do ano para isso." },
    christmas: { label: "Natal e Réveillon no Egito", note: "Sol de inverno, Réveillon no Nilo, Natal copta em 7 de janeiro." },
    "christmas-booking": { label: "Natal e Réveillon", note: "A primeira semana do ano a esgotar no Egito — as melhores cabines no Nilo e os quartos com vista para as pirâmides saem primeiro." },
  },
};

/** "Explore" on the ribbon's call to action, and the close button's label. */
export const SEASON_UI: Record<SiteLocale, { explore: string; dismiss: string }> = {
  en: { explore: "Explore",   dismiss: "Dismiss seasonal notice" },
  de: { explore: "Entdecken", dismiss: "Saisonhinweis schließen" },
  it: { explore: "Scopri",    dismiss: "Chiudi l'avviso stagionale" },
  es: { explore: "Descubrir", dismiss: "Cerrar el aviso de temporada" },
  fr: { explore: "Découvrir", dismiss: "Fermer l'avis saisonnier" },
  ru: { explore: "Смотреть",  dismiss: "Закрыть сезонное уведомление" },
  id: { explore: "Jelajahi",  dismiss: "Tutup pemberitahuan musim" },
  ms: { explore: "Terokai",   dismiss: "Tutup notis bermusim" },
  pt: { explore: "Descobrir", dismiss: "Fechar o aviso da temporada" },
};
