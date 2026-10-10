// ---------------------------------------------------------------------------
// Italian pages with no English counterpart in the translation clusters.
//
// "Dove dormire in Egitto" is the Italian edition of the English guide
// guides/where-to-stay-in-egypt.html (data/guides.ts). It is a standalone page
// rather than a member of a translation group because a group must carry all
// ten locales (config/translation-groups.json), and only Italian has it. So
// there is no hreflang pair between the two; each stands on its own in its
// own language, which is all a search engine needs from two pages that do not
// share a word.
//
// HOTEL STATUS is the same as the English guide's and comes from the same
// source — data/ultra/journeys.ts, "HOTEL STATUS, CHECKED SEPTEMBER 2026".
// When a hotel's status changes there, change it here and in guides.ts too.
// The peak supplement is read from PEAK, never typed.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";
import type { Film } from "@/types/primitives";
import { PEAK } from "@/data/ultra/journeys";
import { balloonFlightFilm, balloonDawnFilm } from "@/data/films";

export const itDoveDormire: LocalizedPage = {
  groupId: "standalone-it-hotel",
  symbol: "lotus",
  title: "Dove dormire in Egitto: i migliori hotel 2026–27 | Kemet",
  description:
    "Dove dormire in Egitto — Giza, Il Cairo, Luxor, Assuan, il Nilo e il Mar Rosso — e quali alberghi storici sono aperti nella stagione 2026–27.",
  keywords:
    "dove dormire in egitto, migliori hotel egitto, hotel di lusso egitto, mena house piramidi, old cataract assuan, winter palace luxor, hotel luxor riva occidentale, dahabiya privata",
  crumb: "Dove dormire",
  h1: "Dove dormire in Egitto: i migliori hotel, città per città",
  standfirst:
    "Gli alberghi su cui vale la pena costruire un viaggio — e quali dei più famosi si possono davvero prenotare per la stagione 2026–27.",
  lede:
    "In Egitto conta la camera prima del marchio. Gli alberghi davvero grandi sono pochi, e lo sono per un motivo che si vede dalla finestra: le piramidi da un balcone a Giza, il Nilo e l'isola Elefantina da una terrazza ad Assuan. Lo stesso albergo senza quella vista è un altro soggiorno. Quest'anno, poi, c'è una domanda che viene prima di tutte: se l'albergo è aperto. Due degli hotel storici del paese sono in pieno restauro, e i siti di prenotazione non sempre lo dicono.",
  facts: [
    { label: "Giza", value: "Marriott Mena House" },
    { label: "Luxor", value: "Al Moudira, riva occidentale" },
    { label: "Assuan", value: "Old Cataract, Palace wing" },
    { label: "Stato verificato", value: "settembre 2026" },
  ],
  sections: [
    {
      title: "Giza: Marriott Mena House",
      body:
        "Un padiglione di caccia reale dell'Ottocento ai piedi dell'altopiano di Giza, e l'albergo dove nel 1943 la Conferenza del Cairo riunì Churchill, Roosevelt e Chiang Kai-shek. La sua ragione d'essere è la vista: da una suite con vista sulle piramidi, a colazione la Grande Piramide riempie la finestra. È anche la base pratica per un ingresso privato all'altopiano al mattino presto, che è a pochi minuti invece che a un'ora di traffico. Chiedete la camera con vista piramidi per nome: quella sul giardino è una bella camera d'albergo, l'altra è il motivo per cui si viene.",
    },
    {
      title: "Il Cairo: Four Seasons Hotel Cairo at The First Residence",
      body:
        "Quando il viaggio ha bisogno del Cairo vero e proprio — il Museo Egizio, il Cairo islamico e copto, una cena in città — il Four Seasons at The First Residence è l'indirizzo tranquillo sul Nilo, con le suite affacciate sul fiume. È la scelta giusta per un soggiorno che comincia o finisce nella capitale, o per chi non vuole tornare ogni sera fino a Giza.",
    },
    {
      title: "Luxor: Al Moudira — e il Winter Palace, quest'anno",
      body:
        "Al Moudira sta sulla riva occidentale, tra i campi di canna da zucchero, fra il Nilo e le colline tebane, a breve distanza dalla Valle dei Re e dal tempio di Hatshepsut: suite tra i giardini, silenzio, e le tombe raggiungibili prima dei pullman. Per un viaggio costruito intorno alla riva occidentale è l'albergo che scegliamo. Il Winter Palace, l'albergo storico di Luxor sulla riva orientale, ha chiuso all'inizio del 2026 per un restauro completo: riaprirà a luglio 2027 come Mandarin Oriental Winter Palace e non è prenotabile per la stagione 2026–27. Se ve lo propongono per quest'inverno, fatevelo confermare per iscritto prima di pagare.",
    },
    {
      title: "Assuan: l'Old Cataract",
      body:
        "Aperto nel 1899 sulla riva di granito sopra la prima cataratta, l'Old Cataract è l'albergo più suggestivo d'Egitto: qui soggiornò Agatha Christie, qui fu girato nel 1978 il film Assassinio sul Nilo, e la sua terrazza guarda dritta sull'isola Elefantina mentre le feluche virano al tramonto. Da maggio 2026 è gestito da Mandarin Oriental. Gli ospiti alloggiano nell'ala storica, il Palace wing — l'edificio originale, quello con la vista — mentre l'ala più recente sul Nilo è in ristrutturazione fino a luglio 2027. È aperto e prenotabile.",
    },
    {
      title: "Sul Nilo: una dahabiya privata, o The Oberoi Philae",
      body:
        "Tra Assuan e Luxor il miglior albergo è una barca. Una dahabiya presa per intero — una barca a vela di poche cabine, con l'equipaggio solo per voi — ormeggia su banchi di sabbia e villaggi dove le grandi navi non arrivano, e si ferma dove volete voi. Per chi preferisce le comodità di una nave su un percorso fisso, The Oberoi Philae è la nave di lusso che prenotiamo, con suite e servizio Oberoi.",
    },
    {
      title: "Il Mar Rosso: The Oberoi Beach Resort, Sahl Hasheesh",
      body:
        "Per chiudere il viaggio con il mare, l'Oberoi di Sahl Hasheesh, a sud di Hurghada, è un resort di sole suite sulla sua costa; le grand suite hanno la piscina privata. È anche la base per una giornata in yacht privato tra le barriere coralline.",
    },
    {
      title: "Quando prenotare",
      body:
        `Da ottobre ad aprile, otto-dodici settimane prima: per avere la camera che volete e non quella che resta. Per Natale, Capodanno e la settimana di Pasqua, prima ancora — queste settimane hanno un supplemento di circa il ${PEAK}% e le camere migliori vanno via per prime. Una dahabiya privata va fissata sei mesi prima per gran parte della stagione, di più per le feste: è la prenotazione intorno a cui si costruisce il resto del viaggio. Nei viaggi Kemet Ultra ogni albergo e ogni categoria di camera è indicato nell'itinerario prima di qualsiasi pagamento.`,
    },
  ],
  highlights: {
    heading: "In breve",
    items: [
      "In Egitto la camera conta più del marchio: la vista piramidi a Giza e la vista sul Nilo ad Assuan sono il punto",
      "Il Winter Palace di Luxor è chiuso per la stagione 2026–27: riapre a luglio 2027 come Mandarin Oriental Winter Palace",
      "L'Old Cataract di Assuan è aperto, gestito da Mandarin Oriental da maggio 2026, con gli ospiti nel Palace wing",
      "Sulla riva occidentale di Luxor, Al Moudira è tra i campi, a breve distanza dalla Valle dei Re",
      `Prenotare 8–12 settimane prima tra ottobre e aprile; Natale, Capodanno e Pasqua hanno un supplemento di circa il ${PEAK}%`,
    ],
  },
  faqs: [
    {
      q: "Il Winter Palace di Luxor è aperto?",
      a: "Non per la stagione 2026–27. Il Winter Palace ha chiuso all'inizio del 2026 per un restauro completo e riaprirà a luglio 2027 come Mandarin Oriental Winter Palace. Per un soggiorno di lusso a Luxor quest'anno, Al Moudira sulla riva occidentale è l'albergo che prenotiamo. (Stato verificato a settembre 2026.)",
    },
    {
      q: "L'Old Cataract di Assuan è aperto?",
      a: "Sì. L'Old Cataract è gestito da Mandarin Oriental da maggio 2026 ed è aperto: gli ospiti alloggiano nel Palace wing, l'edificio storico del 1899 affacciato sul Nilo e sull'isola Elefantina, mentre l'ala sul Nilo è in ristrutturazione fino a luglio 2027.",
    },
    {
      q: "Quale albergo di Giza ha la vista sulle piramidi?",
      a: "Il Marriott Mena House, ai piedi dell'altopiano di Giza: le sue camere e suite con vista piramidi guardano direttamente la Grande Piramide. Chiedete la vista piramidi per nome, perché le camere sul giardino non ce l'hanno.",
    },
    {
      q: "A Luxor meglio la riva orientale o quella occidentale?",
      a: "La occidentale, per un viaggio costruito intorno alla Valle dei Re, alla Valle delle Regine e al tempio di Hatshepsut: è più tranquilla e mette le tombe a pochi minuti al mattino presto. La orientale avvicina Karnak, il tempio di Luxor e la città. Con il Winter Palace chiuso fino a luglio 2027, quest'anno sistemiamo i nostri ospiti sulla riva occidentale.",
    },
    {
      q: "Qual è il miglior albergo d'Egitto?",
      a: "Per un primo viaggio, i due soggiorni che sono parte dell'esperienza stessa sono una suite con vista piramidi al Marriott Mena House di Giza e il Palace wing dell'Old Cataract ad Assuan — e, tra i due, una dahabiya privata sul Nilo.",
    },
  ],
  cta: {
    heading: "Diteci dove volete svegliarvi",
    text: "Date e numero di persone bastano per un itinerario vero, con gli alberghi e il prezzo — senza impegno.",
    whatsapp: "Buongiorno Kemet — vorremmo un viaggio in Egitto con alberghi di alto livello.",
    emailSubject: "Alberghi in Egitto — richiesta itinerario",
  },
  moreLabel: "Continuare",
  moreRoute: "it/viaggi-ultra-lusso-egitto.html",
  moreText:
    "I quattro viaggi Kemet Ultra, con l'albergo e la camera di ogni notte, sono nella pagina Ultra.",
  links: [
    { label: "Natale e Capodanno in Egitto", route: "it/natale-e-capodanno-in-egitto.html" },
    { label: "Crociera sul Nilo", route: "it/crociera-sul-nilo.html" },
    { label: "Quando andare in Egitto", route: "it/quando-andare-in-egitto.html" },
  ],
};

// ===========================================================================
// The Italian editions of two experiences, written from the English pages
// (data/experiences.ts) — same facts, same limits, nothing added that the
// English does not say. Standalone for the same reason as the hotels page.
// Their photographs and films are the English page's, captioned in Italian.
// ===========================================================================

/** The balloon films, captioned in Italian — the files are the same. */
const itBalloonFilms: Film[] = [
  {
    ...balloonFlightFilm,
    label: "Dal cesto — sopra la riva occidentale all'alba",
    alt: "Video da una mongolfiera sopra la riva occidentale di Luxor all'alba: i palmeti, le rovine dei templi sotto le colline tebane, poi le mongolfiere che salgono sui villaggi",
  },
  {
    ...balloonDawnFilm,
    label: "Venti secondi all'alba",
    alt: "Video di mongolfiere che salgono all'alba sui campi della riva occidentale di Luxor",
  },
];

export const itMongolfiera: LocalizedPage = {
  groupId: "standalone-it-mongolfiera",
  symbol: "sun",
  title: "Mongolfiera a Luxor all'alba, sulla Valle dei Re | Kemet",
  description:
    "Volo in mongolfiera all'alba sulla riva occidentale di Luxor: la Valle dei Re, il tempio di Hatshepsut e il Nilo dall'alto, con piloti autorizzati.",
  keywords:
    "mongolfiera luxor, volo in mongolfiera egitto, mongolfiera valle dei re, luxor all'alba, mongolfiera privata luxor",
  crumb: "Mongolfiera a Luxor",
  h1: "Mongolfiera a Luxor, all'alba",
  standfirst:
    "La necropoli tebana dall'alto mentre il sole sorge sul Nilo — la Valle dei Re, il tempio di Hatshepsut e il verde della valle, come solo una mongolfiera li mostra.",
  lede:
    "Luxor all'alba da un cesto di mongolfiera è una delle immagini che definiscono il viaggio nel mondo, e se lo merita: in nessun altro posto si resta sospesi in silenzio sopra tremilacinquecento anni di monumenti, mentre il sole sorge sul fiume che li ha resi possibili.",
  facts: [
    { label: "Volo", value: "45–60 minuti" },
    { label: "Partenza", value: "prima dell'alba" },
    { label: "Stagione", value: "ottobre – maggio" },
    { label: "Età minima", value: "6 anni" },
  ],
  sections: [
    {
      title: "Il volo",
      body:
        "Si parte dalla riva occidentale nei primi minuti calmi della giornata e ci si alza sopra la canna da zucchero e il bordo della piana alluvionale: compaiono le terrazze di Hatshepsut scavate nella falesia, le colline traforate della Valle dei Re e, oltre l'acqua, Karnak che prende la prima luce. Il volo dura dai 45 ai 60 minuti; il prelievo in hotel è prima dell'alba, con una breve traversata in barca fino al campo di partenza.",
    },
    {
      title: "La sicurezza, detta chiaramente",
      body:
        "I voli si svolgono sotto il controllo dell'aviazione civile egiziana, con piloti autorizzati, solo al mattino e con limiti di vento severi. Con il vento sbagliato si annulla senza esitare — ed è esattamente quello che si vuole da un operatore di mongolfiere. Per questo il volo va fissato all'inizio del soggiorno a Luxor, con le date flessibili: una mattina annullata passa alla successiva, oppure si rimborsa.",
    },
    {
      title: "Cesto condiviso, o tutto per voi",
      body:
        "I cesti sono condivisi e divisi in scomparti. Per una coppia o una famiglia la versione migliore è il cesto privato, solo per voi: si chiede al momento della prenotazione, e la disponibilità è più limitata di quella dei posti condivisi.",
    },
    {
      title: "Come prepararsi",
      body:
        "Vestitevi a strati: sul campo di partenza prima dell'alba fa freddo, un'ora dopo fa caldo. Scarpe chiuse e basse — l'atterraggio è dolce, ma resta un campo. E caricate la macchina fotografica la sera prima: non è la mattina giusta per restare senza batteria.",
    },
  ],
  photos: [
    { alt: "Mongolfiere all'alba sopra i villaggi e i campi verdi della riva occidentale di Luxor, viste dal cesto", label: "Dal cesto", src: "/images/activities/balloons-luxor-sunrise-west-bank.webp", width: 814, height: 458 },
    { alt: "Mongolfiere controluce mentre il sole sale sull'orizzonte di Luxor", label: "L'alba", src: "/images/activities/balloons-luxor-silhouettes-dawn.webp", width: 743, height: 418 },
    { alt: "Una flotta di mongolfiere che si alza sulla valle del Nilo e sui templi di Luxor all'alba", label: "La flotta", src: "/images/activities/balloons-over-luxor.webp", width: 1500, height: 1000 },
    { alt: "Mongolfiere sopra la riva occidentale e la piana verde del Nilo", label: "Sopra Tebe", src: "/images/activities/act-balloon-luxor.webp", width: 1300, height: 867 },
    { alt: "Mongolfiere che salgono nella prima luce sulla valle del Nilo a Luxor", label: "Prima luce", src: "/images/activities/balloons-luxor-first-light.webp", width: 885, height: 498 },
  ],
  films: itBalloonFilms,
  highlights: {
    heading: "In breve",
    items: [
      "La Valle dei Re e il tempio di Hatshepsut dall'alto",
      "L'alba sul Nilo e sui templi della riva orientale",
      "Piloti autorizzati, sotto il controllo dell'aviazione civile",
      "Date flessibili: una mattina annullata passa alla successiva",
      "Cesto privato su richiesta, per coppie e famiglie",
    ],
  },
  faqs: [
    {
      q: "Il volo in mongolfiera a Luxor è sicuro?",
      a: "I voli si svolgono sotto il controllo dell'Autorità dell'aviazione civile egiziana, con piloti autorizzati, solo al mattino e con limiti di vento severi. La risposta giusta al meteo incerto è annullare, e gli operatori con cui lavoriamo annullano senza esitare. Fissate il volo all'inizio del soggiorno, così c'è margine per riprogrammarlo.",
    },
    {
      q: "Possiamo avere un cesto tutto per noi?",
      a: "Sì: il cesto privato si può prenotare ed è la versione migliore per coppie e famiglie. Chiedetelo al momento della prenotazione, perché la disponibilità è più limitata dei posti condivisi.",
    },
    {
      q: "Quando si vola?",
      a: "Quasi tutte le mattine da ottobre a maggio, solo con il meteo giusto. I voli annullati si riprogrammano o si rimborsano. L'orario del prelievo in hotel si conferma la sera prima.",
    },
    {
      q: "Da che età si può volare?",
      a: "Dai 6 anni: lo decide l'altezza della parete del cesto.",
    },
  ],
  cta: {
    heading: "Diteci i vostri giorni a Luxor",
    text: "Fissiamo il volo — o un cesto tutto vostro — all'inizio del soggiorno, così una mattina di vento non vi fa perdere la mongolfiera. Il prezzo si conferma su richiesta.",
    whatsapp: "Buongiorno Kemet — vorremmo il volo in mongolfiera a Luxor.",
    emailSubject: "Mongolfiera a Luxor — richiesta",
  },
  moreLabel: "Continuare",
  moreRoute: "it/luxor-3-giorni.html",
  moreText: "La mongolfiera entra in qualsiasi viaggio che passa da Luxor: ecco il nostro Luxor in tre giorni.",
  links: [
    { label: "Dove dormire in Egitto", route: "it/dove-dormire-in-egitto.html" },
    { label: "Crociera sul Nilo", route: "it/crociera-sul-nilo.html" },
    { label: "Quando andare in Egitto", route: "it/quando-andare-in-egitto.html" },
  ],
};

export const itAlbaPiramidi: LocalizedPage = {
  groupId: "standalone-it-alba-piramidi",
  symbol: "eye",
  title: "Alba alle Piramidi di Giza, in privato | Kemet",
  description:
    "Le Piramidi di Giza all'alba, con accesso anticipato prima dell'apertura al pubblico e la vostra guida con licenza: la prima luce su Cheope, senza folla.",
  keywords:
    "alba piramidi giza, piramidi all'alba, visita privata piramidi, accesso anticipato giza, sfinge all'alba",
  crumb: "Alba alle Piramidi",
  h1: "L'alba alle Piramidi di Giza",
  standfirst:
    "La prima luce sulla Grande Piramide, con l'altopiano ancora chiuso al pubblico — e una guida egittologica con licenza solo per voi, anche in italiano.",
  lede:
    "Pochi momenti di viaggio valgono il silenzio dell'altopiano di Giza all'alba. Mentre il cielo a est passa dal viola profondo all'ambra, le sagome di Cheope, Chefren e Micerino emergono dal buio: le ultime sopravvissute delle Sette Meraviglie del mondo antico.",
  facts: [
    { label: "Durata", value: "3–4 ore" },
    { label: "Partenza", value: "prima dell'alba" },
    { label: "Luogo", value: "Altopiano di Giza" },
    { label: "Guida", value: "con licenza, anche in italiano" },
  ],
  sections: [
    {
      title: "Un'ora che quasi nessuno vede",
      body:
        "L'accesso anticipato porta sull'altopiano prima che apra ai visitatori della giornata. Con il sito quasi vuoto ci si muove al proprio ritmo, si fotografa senza folla e si misura in silenzio la scala di monumenti che hanno quattromilacinquecento anni.",
    },
    {
      title: "Con una guida egittologica, solo per voi",
      body:
        "La visita è condotta da una guida egittologica con licenza del Ministero del Turismo, che adatta il racconto ai vostri interessi: la mitologia dei re, la logistica dei cantieri, gli allineamenti astronomici che i costruttori fissarono nella geometria dell'altopiano. Il gruppo siete solo voi.",
    },
    {
      title: "La Sfinge alla prima luce",
      body:
        "La visita comprende il recinto della Sfinge, alla prima luce del giorno: prima che arrivino i pullman e che cominci il rumore della giornata.",
    },
    {
      title: "Come prepararsi",
      body:
        "Vestitevi a strati: d'inverno le mattine nel deserto sono fredde, anche quando a mezzogiorno fa caldo. Portate una piccola torcia per il tratto a piedi prima dell'alba, e scarpe chiuse e basse, perché il terreno è ghiaia e sabbia. Un grandangolo prende le tre piramidi in un solo scatto dal punto panoramico.",
    },
  ],
  photos: [
    { alt: "La Grande Piramide di Cheope sull'altopiano di Giza sotto un cielo limpido", label: "La Grande Piramide", src: "/images/giza/giza-great-pyramid-clear-sky.webp", width: 1600, height: 1062 },
    { alt: "Un cammello addobbato a riposo davanti alle Piramidi di Giza nella luce calda del mattino", label: "Il mattino", src: "/images/giza/giza-camel-pyramids-sunrise.webp", width: 736, height: 736 },
    { alt: "La Sfinge davanti a una piramide di Giza", label: "La Sfinge", src: "/images/giza/giza-sphinx-and-pyramid.webp", width: 736, height: 920 },
    { alt: "La Grande Piramide di Cheope sull'altopiano di Giza", label: "Cheope", src: "/images/giza/giza-great-pyramid-khufu.webp", width: 736, height: 981 },
  ],
  highlights: {
    heading: "In breve",
    items: [
      "Accesso anticipato all'altopiano, prima dell'apertura al pubblico",
      "Guida egittologica privata con licenza del Ministero del Turismo, anche in italiano",
      "Fotografie senza folla — le tre piramidi e la Sfinge",
      "Prelievo e rientro in hotel compresi (Il Cairo e Giza)",
      "Solo il vostro gruppo, nessun gruppo turistico",
    ],
  },
  faqs: [
    {
      q: "A che ora si comincia?",
      a: "Dipende dalla stagione e dall'ora dell'alba: di solito il prelievo in hotel è tra le 5:00 e le 6:30. L'orario esatto si conferma alla prenotazione.",
    },
    {
      q: "È adatta ai bambini?",
      a: "Sì. Si cammina con calma su sentieri lastricati e sabbiosi, ed è adatta a quasi tutte le età. La guida adatta il racconto ai più giovani.",
    },
    {
      q: "Si può entrare in una piramide?",
      a: "Sì, con un biglietto separato e un costo aggiuntivo. Va chiesto in anticipo, perché gli ingressi giornalieri sono rigorosamente limitati.",
    },
    {
      q: "La guida parla italiano?",
      a: "Sì: la visita si può fare in italiano, con una guida del nostro team. Ditecelo al momento della prenotazione.",
    },
  ],
  cta: {
    heading: "Diteci il vostro giorno al Cairo",
    text: "Con la data e il numero di persone vi confermiamo l'orario dell'alba e il prezzo — l'ingresso all'altopiano e la guida sono compresi.",
    whatsapp: "Buongiorno Kemet — vorremmo l'alba alle Piramidi di Giza.",
    emailSubject: "Alba alle Piramidi di Giza — richiesta",
  },
  moreLabel: "Continuare",
  moreRoute: "it/giza-e-grand-egyptian-museum.html",
  moreText: "Per Giza di giorno, con il Grand Egyptian Museum, ecco la nostra giornata completa.",
  links: [
    { label: "Dove dormire in Egitto", route: "it/dove-dormire-in-egitto.html" },
    { label: "Il Cairo VIP in 3 giorni", route: "it/il-cairo-vip-3-giorni.html" },
    { label: "Quando andare in Egitto", route: "it/quando-andare-in-egitto.html" },
  ],
};
