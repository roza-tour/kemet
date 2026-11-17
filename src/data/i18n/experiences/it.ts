// ---------------------------------------------------------------------------
// The experience and activity pages in Italiano — the words only. See
// ./types.ts for the fields and ./build.ts for how they become pages.
// ---------------------------------------------------------------------------
import type { ExpText } from "./types";

export const itExperiences: ExpText[] = [

  // ===== Private Felucca Sailing on the Nile =====
  {
    kind: "experience",
    id: "private-felucca-nile",
    localeSlug: "feluca-privata-assuan",
    metaTitle: "Feluca privata ad Assuan — noleggio esclusivo | Kemet",
    metaDescription:
      "Noleggiate un'intera feluca ad Assuan per una navigazione privata e senza fretta sul Nilo, tra l'isola Elefantina, la Prima Cataratta e la riva occidentale.",
    keywords:
      "feluca privata assuan, giro in feluca sul nilo, noleggio feluca assuan, navigare sul nilo ad assuan, isola elefantina feluca, escursione privata assuan",
    name: "Navigazione privata in feluca sul Nilo",
    summary:
      "Noleggiate un'intera feluca tradizionale e lasciatevi portare dalla corrente del Nilo tra templi antichi, massi di granito e rive bordate di palme — con la stessa andatura pacata con cui gli egiziani navigano da millenni.",
    description:
      "La feluca — un'imbarcazione di legno a vela latina, rimasta nei suoi tratti essenziali identica da migliaia di anni — è il modo più intimo di vivere il Nilo. Con il noleggio esclusivo, la barca è soltanto vostra. Dal momento in cui mollate gli ormeggi dalla corniche di Assuan, il brusio della città si dissolve e al suo posto restano il vento che gonfia la vela e il lieve sciabordio dell'acqua contro lo scafo. Qui il fiume è straordinariamente bello: i massi di granito della Prima Cataratta affiorano in formazioni scenografiche, l'isola Elefantina giace bassa e verde a media distanza e le dune del Deserto Occidentale si alzano oltre la riva occidentale. Il capitano conduce la barca tra le correnti con l'istintiva maestria che nasce da generazioni di navigazione sul Nilo. Una tipica navigazione pomeridiana tocca l'isola Elefantina, il Giardino Botanico sull'isola di Kitchener e il Mausoleo dell'Aga Khan sulla collina della riva occidentale, anche se il percorso si adatta al vento, alla corrente e ai vostri desideri.",
    duration: "2 ore",
    where: "Assuan, Alto Egitto",
    bestTime: "",
    highlights: [
      "Un'intera feluca noleggiata in esclusiva per il vostro gruppo",
      "Le isole di granito della Prima Cataratta e l'isola Elefantina",
      "Il Giardino Botanico di Kitchener visto dall'acqua",
      "Le dune della riva occidentale e il Mausoleo dell'Aga Khan",
      "Senza alcuna fretta — nessun programma, nessun altro passeggero",
    ],
    keyFacts: [
      { label: "Durata", value: "2 ore" },
      { label: "Difficoltà", value: "Facile" },
      { label: "Partenza", value: "Corniche di Assuan (confermata alla prenotazione)" },
      { label: "Tipo di gruppo", value: "Noleggio privato — fino a 8 ospiti" },
      { label: "Lingue", value: "inglese, tedesco, italiano, spagnolo, francese, russo, indonesiano, malese, portoghese, arabo, cinese mandarino" },
      { label: "Stagione migliore", value: "Da ottobre ad aprile" },
    ],
    included: [
      "Noleggio esclusivo della feluca (intera imbarcazione)",
      "Capitano esperto della navigazione sul Nilo",
      "Giubbotti di salvataggio",
      "Acqua in bottiglia",
    ],
    excluded: [
      "Visite con sbarco sulle isole (su richiesta, soggette al permesso dell'operatore)",
      "Pranzo o rinfreschi oltre all'acqua in bottiglia",
      "Mance",
      "Trasferimenti dall'hotel",
    ],
    prepare: [
      "Portate una protezione solare — a bordo di una feluca l'ombra è poca e il Nilo riflette intensamente i raggi UV",
      "Un capo leggero è utile se navigate nel tardo pomeriggio; dopo il tramonto la temperatura scende in fretta",
      "Si consigliano scarpe basse — per salire sulla feluca e scendere occorre fare un piccolo gradino",
    ],
    goodToKnow: [
      "Le feluche si muovono solo col vento e non possono andare a motore contro un forte vento contrario; il capitano vi consiglierà in base alle condizioni",
      "L'esperienza si svolge con uno stile rilassato e senza fretta — non c'è un commento formale, a meno che non lo chiediate",
      "Le rive si possono fotografare liberamente; le installazioni militari egiziane sulla corniche non vanno fotografate",
    ],
    goodFor: [],
    meetingPoint:
      "La feluca parte dalla corniche di Assuan. Il vostro hotel e il punto di partenza esatto vengono confermati alla prenotazione.",
    groupSize: "Intera imbarcazione noleggiata per il vostro gruppo — massimo 8 persone.",
    availability:
      "Disponibile ogni giorno in stagione. Le condizioni del vento possono talvolta incidere sull'orario; il capitano vi consiglia il giorno stesso.",
    priceNote:
      "Prezzo confermato su richiesta. Noleggio dell'intera imbarcazione incluso — nessuna tariffa a persona.",
    faqs: [
      {
        q: "Possiamo fermarci all'isola Elefantina?",
        a: "Un giro in navigazione intorno all'isola è la norma. Lo sbarco richiede un permesso e un'organizzazione a parte; si può predisporre su richiesta al momento della prenotazione.",
      },
      {
        q: "L'esperienza è adatta a chi non sa nuotare?",
        a: "Sì. Sono forniti i giubbotti di salvataggio e la feluca naviga in tratti calmi e riparati del fiume. L'esperienza è tranquilla e a basso rischio.",
      },
    ],
    photos: [
      { alt: "Una feluca tradizionale con vela latina bianca sul Nilo ad Assuan", label: "Feluca privata sul Nilo" },
      { alt: "Una feluca in controluce sul Nilo mentre il sole tramonta sull'acqua", label: "Ora d'oro" },
      { alt: "Una feluca a vela latina che scivola accanto alle palme sul Nilo al tramonto", label: "A vele spiegate" },
    ],
  },

  // ===== Old Cairo Walking Experience =====
  {
    kind: "experience",
    id: "old-cairo-walking",
    localeSlug: "il-cairo-antico-a-piedi",
    metaTitle: "Il Cairo antico a piedi — tour privato con storico | Kemet",
    metaDescription:
      "Tour privato a piedi del Cairo islamico e del quartiere copto: la fortezza di Babilonia, la moschea di Ibn Tulun, la Chiesa Sospesa e Khan el-Khalili.",
    keywords:
      "il cairo antico a piedi, tour a piedi cairo islamico, cairo copto visita guidata, moschea di ibn tulun, chiesa sospesa cairo, tour privato il cairo",
    name: "Il Cairo antico a piedi",
    summary:
      "Camminate tra i vicoli medievali del Cairo islamico e del quartiere copto con una guida storica che legge quasi duemila anni di città stratificata — dalle fortificazioni romane ai palazzi dei mercanti ottomani.",
    description:
      "Il Cairo non è una città sola, ma una dozzina, ciascuna costruita sulle rovine della precedente. Questa esperienza privata a piedi attraversa gli strati abitati più antichi: la fortezza romana di Babilonia, cuore del Cairo copto; il quartiere copto, con la Chiesa Sospesa costruita sopra la porta romana della fortezza; e il tessuto medievale del Cairo islamico — la più grande città medievale giunta fino a noi e Patrimonio dell'Umanità UNESCO. La vostra guida storica non si limita a recitare un copione, ma conosce davvero la città: sa fermarsi nel cortile della moschea di Ibn Tulun e spiegare che cosa distingueva il suo fondatore del IX secolo da ogni altro governatore abbaside, o indicare nei muri dei vicoli i sistemi mamelucchi di distribuzione dell'acqua ancora visibili. Il quartiere copto e il Cairo islamico distano qualche chilometro l'uno dall'altro: un'auto privata vi porta dall'uno all'altro, così la camminata si concentra dove conta. Il percorso si conclude nel quartiere del bazar di Khan el-Khalili e nel vicolo dei profumieri al suo margine, dandovi gli strumenti per orientarvi e apprezzarlo da soli più avanti nel viaggio.",
    duration: "3 ore",
    where: "Cairo islamico e quartiere copto, Il Cairo",
    bestTime: "",
    highlights: [
      "La fortezza romana di Babilonia e la Chiesa Sospesa",
      "La sinagoga Ben Ezra — una delle più antiche dell'Africa",
      "La moschea di Ibn Tulun — la più antica moschea del Cairo giunta intatta (879 d.C.)",
      "Il tessuto medievale del Cairo islamico (Patrimonio dell'Umanità UNESCO)",
      "Il quartiere del bazar di Khan el-Khalili e il vicolo dei profumieri",
    ],
    keyFacts: [
      { label: "Durata", value: "3 ore" },
      { label: "Difficoltà", value: "Moderata (acciottolato e superfici irregolari)" },
      { label: "Punto di partenza", value: "Cairo copto (fortezza di Babilonia)" },
      { label: "Tipo di gruppo", value: "Privato — solo il vostro gruppo" },
      { label: "Lingue", value: "inglese, tedesco, italiano, spagnolo, francese, russo, indonesiano, malese, portoghese, arabo, cinese mandarino" },
      { label: "Adatto a", value: "Dagli 8 anni in su" },
    ],
    included: [
      "Guida storica privata",
      "Auto privata tra il quartiere copto e il Cairo islamico",
      "Tutti i biglietti d'ingresso a moschee e chiese",
      "Acqua in bottiglia",
    ],
    excluded: [
      "Ingresso al Museo d'Arte Islamica (aggiunta facoltativa, 1 ora)",
      "Pranzo o rinfreschi oltre all'acqua",
      "Trasferimenti dall'hotel (su richiesta)",
      "Mance",
    ],
    prepare: [
      "Indossate scarpe comode e basse — i vicoli sono acciottolati e a tratti irregolari",
      "Per entrare in moschee e chiese spalle e ginocchia vanno coperte; se serve, la guida mette a disposizione delle sciarpe",
      "Il percorso comporta distanze moderate (circa 3–4 km a piedi, con un breve tragitto privato in auto tra i due quartieri) e qualche gradino e salita",
      "Partendo la mattina (prima delle 10) si evitano il caldo più intenso e i primi gruppi di turisti",
    ],
    goodToKnow: [
      "Il venerdì è il giorno sacro dell'islam — alcune moschee chiudono ai visitatori durante la preghiera (a tarda mattinata); il percorso si adatta di conseguenza",
      "La fotografia è consentita nella maggior parte degli spazi pubblici e all'esterno degli edifici religiosi; all'interno le regole variano",
      "La parte a Khan el-Khalili è di sola osservazione — nessun acquisto è obbligatorio e la guida fornisce il contesto che rende più interessante curiosare",
    ],
    goodFor: [],
    meetingPoint:
      "Il punto d'incontro è la fortezza romana di Babilonia, nel Cairo copto. Ritiro in hotel su richiesta.",
    groupSize:
      "Privato — solo il vostro gruppo. Massimo 8 persone, per muoversi comodamente nei vicoli.",
    availability:
      "Disponibile quasi ogni mattina. La preghiera del venerdì incide sull'accesso ad alcune moschee; si concordano orari alternativi.",
    priceNote:
      "Prezzo confermato su richiesta. Tutti i biglietti d'ingresso ai siti inclusi.",
    faqs: [
      {
        q: "Quanto si cammina?",
        a: "Il percorso copre circa 3–4 km a piedi in tre ore, con un breve tragitto privato in auto tra il quartiere copto e il Cairo islamico e soste per le spiegazioni a ogni sito. Il terreno comprende acciottolato e qualche gradino, ma nessuna salita prolungata.",
      },
      {
        q: "Si può adattare la camminata a bambini piccoli?",
        a: "Sì. Lo storico può accorciare il percorso e adattare il racconto per le famiglie con bambini piccoli. È disponibile una versione più breve, di 2 ore, dedicata al solo quartiere copto.",
      },
    ],
    photos: [
      { alt: "Un vicolo medievale del Cairo islamico illuminato dalle lanterne lungo via al-Muizz, con i minareti sopra i tetti", label: "Il Cairo antico" },
    ],
  },

  // ===== Egyptian Cooking Experience =====
  {
    kind: "experience",
    id: "egyptian-cooking",
    localeSlug: "corso-di-cucina-egiziana-cairo",
    metaTitle: "Corso di cucina egiziana al Cairo — lezione privata | Kemet",
    metaDescription:
      "Corso privato di cucina egiziana al Cairo: visita al mercato, quattro piatti lungo 7.000 anni di storia gastronomica e un pasto condiviso.",
    keywords:
      "corso di cucina egiziana, lezione di cucina al cairo, cucina egiziana tradizionale, ful medames, mahshi, corso di cucina privato cairo",
    name: "Corso di cucina egiziana",
    summary:
      "Imparate a cucinare quattro piatti che ripercorrono i 7.000 anni di storia gastronomica dell'Egitto — dalle antiche preparazioni di cereali alle verdure ripiene di epoca ottomana — in una lezione privata in cucina con uno specialista di cucina del Cairo.",
    description:
      "La cucina egiziana è una delle più antiche tradizioni culinarie ininterrotte della terra, plasmata dalla cultura faraonica dei cereali, dalle pratiche di digiuno copte, dalle vie arabe delle spezie e dalla cucina dei palazzi ottomani. Questa lezione privata in cucina racconta quella storia attraverso le vostre mani. Si comincia con una visita guidata a un mercato di quartiere, dove l'istruttore vi spiega come fanno davvero la spesa gli egiziani — che cosa indicano i segnali stagionali, di quali venditori di spezie ci si può fidare, perché i sottaceti della bottega all'angolo si preparano allo stesso modo dall'epoca fatimide. Tornati in cucina, preparate quattro piatti rappresentativi di epoche e influenze diverse. La lezione si chiude con un pasto condiviso di ciò che avete cucinato, accompagnato da una breve degustazione di pani e mezze egiziani che aggiunge contesto a quanto avete preparato.",
    duration: "4 ore",
    where: "Centro del Cairo (indirizzo esatto confermato alla prenotazione)",
    bestTime: "",
    highlights: [
      "Visita guidata a un mercato di quartiere con il vostro istruttore",
      "Quattro piatti che spaziano tra le tradizioni gastronomiche faraonica, copta, araba e ottomana",
      "Cucina pratica in una cucina privata",
      "Pasto condiviso con i piatti preparati, accompagnato da pani e mezze egiziani",
      "Ricettario da portare a casa",
    ],
    keyFacts: [
      { label: "Durata", value: "4 ore (visita al mercato e pasto compresi)" },
      { label: "Difficoltà", value: "Facile — non occorre alcuna esperienza di cucina" },
      { label: "Luogo", value: "Centro del Cairo (confermato alla prenotazione)" },
      { label: "Tipo di gruppo", value: "Privato — massimo 6 ospiti" },
      { label: "Lingue", value: "inglese, tedesco, italiano, spagnolo, francese, russo, indonesiano, malese, portoghese, arabo, cinese mandarino" },
      { label: "Note alimentari", value: "Opzioni vegetariane disponibili; segnalatelo alla prenotazione" },
    ],
    included: [
      "Visita guidata a un mercato di quartiere",
      "Tutti gli ingredienti e le attrezzature da cucina",
      "Istruzioni di cucina private",
      "Pasto condiviso e degustazione di pani e mezze egiziani",
      "Ricettario",
      "Trasferimento dall'hotel e ritorno",
    ],
    excluded: [
      "Bevande oltre all'acqua e al tè egiziano",
      "Mance",
    ],
    prepare: [
      "Indossate abiti comodi, a cui non importi una macchia d'olio o di curcuma",
      "Segnalate alla prenotazione eventuali restrizioni alimentari o allergie — il menu può essere adattato",
      "La visita al mercato comporta una breve camminata (15–20 minuti) su superfici varie",
    ],
    goodToKnow: [
      "La visita è a un vero mercato di quartiere in attività, non a un bazar turistico",
      "Tutte le preferenze alimentari sono accolte con un congruo preavviso — sono disponibili opzioni vegane e senza glutine",
      "I bambini a cui piace cucinare sono i benvenuti; l'istruttore adatta i compiti ai partecipanti più piccoli",
    ],
    goodFor: [],
    meetingPoint:
      "La lezione inizia in un mercato di quartiere; il trasferimento dall'hotel è incluso.",
    groupSize:
      "Privato — solo il vostro gruppo. Massimo 6 persone, per lavorare comodamente in cucina.",
    availability:
      "Disponibile quasi ogni mattina e in alcune sere, tutto l'anno.",
    priceNote:
      "Prezzo confermato su richiesta. Tutti gli ingredienti, la visita al mercato e il pasto condiviso inclusi.",
    faqs: [
      {
        q: "Quali piatti cuciniamo?",
        a: "Il menu varia con le stagioni ed è curato dall'istruttore. Una lezione tipo comprende ful medames (l'antico stufato di fave), mahshi (verdure ripiene alla maniera ottomana), un'insalata di cereali di ispirazione faraonica e kunafa (il dolce di pasta filiforme che Il Cairo prepara dall'epoca fatimide). I piatti esatti vengono confermati prima della lezione.",
      },
      {
        q: "Serve esperienza di cucina?",
        a: "Nessuna. La lezione è pensata per viaggiatori curiosi, non per cuochi esperti. Il centro è la storia del cibo e il sapore, più che la tecnica.",
      },
    ],
    photos: [
      { alt: "Un piatto di foglie di vite ripiene con limone e prezzemolo", label: "Cucina egiziana" },
    ],
  },

  // ===== Luxor Temple by Night =====
  {
    kind: "experience",
    id: "luxor-temple-night",
    localeSlug: "tempio-di-luxor-di-notte",
    metaTitle: "Tempio di Luxor di notte — Viale delle Sfingi | Kemet",
    metaDescription:
      "Serata privata e guidata al Tempio di Luxor e al restaurato Viale delle Sfingi: una delle esperienze più scenografiche d'Egitto, da vedere al buio.",
    keywords:
      "tempio di luxor di notte, viale delle sfingi luxor, visita serale tempio di luxor, luxor di sera, tour privato luxor, illuminazione tempio di luxor",
    name: "Il Tempio di Luxor di notte",
    summary:
      "Percorrete il Viale delle Sfingi illuminato fino al Tempio di Luxor dopo il tramonto — una delle esperienze più spettacolari del patrimonio egiziano, oggi pienamente accessibile dopo il restauro del 2021.",
    description:
      "Il completamento nel 2021 del Viale delle Sfingi — una strada processionale di 2,7 km fiancheggiata da 1.057 sfingi con testa di ariete e testa umana, che un tempo univa il Tempio di Luxor a Karnak — ha trasformato la visita di Luxor di notte. Percorrere questo viale al buio, con ogni sfinge e ogni pilone illuminati dal basso, è tra le esperienze più autenticamente cinematografiche del viaggio nel patrimonio egiziano. Il Tempio di Luxor stesso è straordinariamente suggestivo sotto le luci: i colori più nitidi che di giorno, le proporzioni più leggibili senza lo sbiancamento del sole di mezzogiorno. Questa esperienza privata è guidata da un egittologo abilitato che percorre con voi il Viale delle Sfingi, spiegando le processioni rituali (la Festa di Opet) che un tempo scorrevano lungo questa strada, prima di entrare nel recinto del tempio e illustrarne gli ambienti principali, la moschea di Abu Haggag costruita all'interno del pilone e i notevoli dipinti romani conservati in quello che fu per breve tempo un santuario del culto imperiale.",
    duration: "2–3 ore",
    where: "Tempio di Luxor e Viale delle Sfingi, Luxor",
    bestTime: "",
    highlights: [
      "Il Viale delle Sfingi di 2,7 km — interamente restaurato e illuminato dopo il tramonto",
      "Il Tempio di Luxor sotto i fari — colori e proporzioni al massimo della scenografia",
      "La moschea di Abu Haggag costruita all'interno del pilone del Nuovo Regno",
      "I dipinti romani del culto imperiale nel santuario più interno del tempio",
      "Meno visitatori che nelle visite diurne — un'esperienza più raccolta",
    ],
    keyFacts: [
      { label: "Durata", value: "2–3 ore" },
      { label: "Difficoltà", value: "Facile" },
      { label: "Orario di inizio", value: "Dopo il tramonto (circa le 19, confermato alla prenotazione)" },
      { label: "Luogo", value: "Tempio di Luxor, Luxor" },
      { label: "Tipo di gruppo", value: "Privato — solo il vostro gruppo" },
      { label: "Lingue", value: "inglese, tedesco, italiano, spagnolo, francese, russo, indonesiano, malese, portoghese, arabo, cinese mandarino" },
    ],
    included: [
      "Egittologo privato abilitato",
      "Biglietto d'ingresso al Tempio di Luxor",
      "Accesso al Viale delle Sfingi",
      "Trasferimento dall'hotel e ritorno (Luxor)",
    ],
    excluded: [
      "Tempio di Karnak (complesso a parte, biglietto a parte — si consigliano le visite di giorno)",
      "Mance",
      "Cena o rinfreschi",
    ],
    prepare: [
      "Portate un capo leggero — le sere d'inverno a Luxor si raffreddano in fretta dopo il tramonto",
      "Indossate scarpe basse e comode; il Viale delle Sfingi è lastricato ma lungo",
      "Un treppiede migliora in modo netto le fotografie con poca luce del pilone e delle sfingi illuminati",
    ],
    goodToKnow: [
      "La moschea di Abu Haggag, costruita all'interno del pilone di Ramses II, è un luogo di culto attivo — sono richiesti abbigliamento e comportamento rispettosi",
      "Il tempio è più tranquillo a sera inoltrata; la prima ora dopo il tramonto può essere ancora piuttosto affollata",
      "La fotografia è libera in tutto il sito",
    ],
    goodFor: [],
    meetingPoint:
      "La camminata comincia all'estremità nord del Viale delle Sfingi, vicino a Karnak. Ritiro in hotel disponibile.",
    groupSize: "Privato — solo il vostro gruppo.",
    availability:
      "Disponibile quasi ogni sera. Il tempio resta aperto fino a sera ed è illuminato dal tramonto.",
    priceNote:
      "Prezzo confermato su richiesta. Tutti i biglietti d'ingresso e l'egittologo inclusi.",
    faqs: [
      {
        q: "È diverso da una visita diurna al Tempio di Luxor?",
        a: "In modo sostanziale. L'illuminazione cambia la temperatura colore e la profondità dei rilievi, rivelando dettagli che con la luce diretta del sole svaniscono. Il Viale delle Sfingi di notte è un'esperienza completamente diversa da quella di giorno.",
      },
      {
        q: "Possiamo abbinarla a una visita a Karnak?",
        a: "Karnak è un complesso a parte, all'altra estremità del Viale delle Sfingi, a circa 2,7 km a nord. Dopo il tramonto apre solo per lo spettacolo Suoni e Luci, perciò la combinazione migliore è Karnak di giorno e questa camminata la sera — oppure lo spettacolo seguito da questa camminata, che possiamo organizzare.",
      },
    ],
    photos: [
      { alt: "Colonne scolpite del tempio di Luxor illuminate di notte, con la luna fra di esse", label: "Luxor di notte" },
    ],
  },

  // ===== Private Nile Dinner Cruise =====
  {
    kind: "experience",
    id: "private-nile-dinner-cruise",
    localeSlug: "cena-privata-sul-nilo-cairo",
    metaTitle: "Cena in crociera privata sul Nilo, Il Cairo | Kemet",
    metaDescription:
      "Cena in crociera riservata sul Nilo del Cairo — menu egiziano fisso, skyline al crepuscolo, trasferimenti inclusi. Niente ponti condivisi né code al buffet.",
    keywords:
      "cena sul nilo il cairo, crociera con cena sul nilo, cena privata sul nilo, cena in barca il cairo, crociera serale nilo cairo, cena romantica sul nilo",
    name: "Cena privata in crociera sul Nilo",
    summary:
      "Una cena a bordo sul Nilo del Cairo, su un'imbarcazione riservata — lo skyline della capitale che scorre lento davanti a voi durante una serata senza fretta e di ottima cucina.",
    description:
      "Il Cairo è una città di fiume che la maggior parte dei visitatori vede solo dalle sue rive. Questa serata rimedia. Un'imbarcazione per la cena è riservata al vostro gruppo — niente tavoli condivisi, niente spettacolo a catena di montaggio — e molla gli ormeggi al calare della luce, quando la città si ammorbidisce e i minareti, la torre e i ponti si accendono uno dopo l'altro. La cena è un menu egiziano fisso costruito su grigliate al carbone e mezze invece che sul teatro del buffet, servito col vostro ritmo mentre la barca compie il suo lento giro tra la Corniche e la punta dell'isola di Zamalek. Si può organizzare musica dal vivo di oud, oppure lasciare la serata semplicemente silenziosa — sull'acqua il frastuono della città si riduce a un brusio, ed è proprio questo, per molti ospiti, il senso di tutto.",
    duration: "2,5–3 ore",
    where: "Corniche del Nilo, centro del Cairo",
    bestTime: "",
    highlights: [
      "Imbarcazione riservata — il vostro è l'unico tavolo che conta",
      "Lo skyline del Cairo al crepuscolo dal centro del fiume",
      "Cena egiziana a menu fisso di grigliate al carbone e mezze, non una fila al buffet",
      "Musica dal vivo di oud facoltativa, organizzata su richiesta",
      "Trasferimento dall'hotel e ritorno inclusi",
    ],
    keyFacts: [
      { label: "Durata", value: "2,5–3 ore" },
      { label: "Partenza", value: "Dopo il tramonto (l'orario varia secondo la stagione)" },
      { label: "Tipo di gruppo", value: "Privato — fino a 12 ospiti" },
      { label: "Alimentazione", value: "Opzioni vegetariane e allergie gestite con preavviso" },
      { label: "Lingue", value: "inglese, tedesco, italiano, spagnolo, francese, russo, indonesiano, malese, portoghese, arabo, cinese mandarino" },
    ],
    included: [
      "Prenotazione dell'imbarcazione privata",
      "Cena egiziana a menu fisso con bibite analcoliche e acqua minerale",
      "Trasferimenti privati da e per il vostro hotel del Cairo o di Giza",
    ],
    excluded: [
      "Bevande alcoliche (si possono portare a bordo; chiedete alla prenotazione)",
      "Musicista dal vivo (facoltativo, organizzato su richiesta)",
      "Mance",
    ],
    prepare: [
      "Portate un capo leggero — la brezza del fiume è nettamente più fresca che nelle strade, anche d'estate",
      "Se viaggiate con bambini piccoli prenotate il turno più presto; la navigazione più tarda è adatta alle coppie",
    ],
    goodToKnow: [
      "Il percorso compie un giro nel tratto centrale del Nilo al Cairo; l'imbarco e lo sbarco avvengono allo stesso molo",
      "Le navigazioni invernali valgono pienamente la pena — lo skyline è più nitido nei mesi freschi",
    ],
    goodFor: [],
    meetingPoint:
      "Punto d'imbarco sulla corniche del centro del Cairo, confermato alla prenotazione. Trasferimento dall'hotel e ritorno inclusi.",
    groupSize:
      "Imbarcazione riservata al vostro gruppo — da 2 fino a 12 ospiti.",
    availability:
      "Naviga ogni sera, tutto l'anno; sono disponibili partenze anticipate per le famiglie.",
    priceNote:
      "Prezzo confermato su richiesta. Prenotazione dell'intera imbarcazione e cena a menu fisso inclusi.",
    faqs: [
      {
        q: "È una di quelle grandi barche da festa?",
        a: "No — volutamente. Quelle hanno ponti condivisi, buffet e spettacoli amplificati. Questa è un'imbarcazione più piccola, riservata in privato, con un menu fisso e il volume abbassato. Lo spettacolo lo offre la città.",
      },
      {
        q: "Potete soddisfare esigenze alimentari particolari?",
        a: "Sì. Con un congruo preavviso il menu si adatta a vegetariani, pescetariani e alla maggior parte delle allergie — diteci tutto alla prenotazione e non al molo.",
      },
    ],
    photos: [
      { alt: "Una feluca sul Nilo al Cairo, con la Torre del Cairo alle spalle", label: "Cena sul Nilo" },
    ],
  },


  // ===== Grand Egyptian Museum Private Tour =====
  {
    kind: "experience",
    id: "grand-egyptian-museum-private",
    localeSlug: "grand-egyptian-museum-visita-privata",
    metaTitle: "Grand Egyptian Museum: visita privata — Tutankhamon | Kemet",
    metaDescription:
      "Visita privata guidata al Grand Egyptian Museum — il tesoro completo di Tutankhamon, la grande scalinata e la barca solare di Cheope, lontano dalla folla.",
    keywords:
      "grand egyptian museum visita privata, tour privato grand egyptian museum, tesoro di tutankhamon, gem giza visita guidata, barca solare di cheope, museo grand egyptian guida",
    name: "Visita privata al Grand Egyptian Museum",
    summary:
      "Il più grande museo archeologico mai costruito, percorso in privato con un egittologo — il tesoro completo di Tutankhamon, la grande scalinata e la barca solare.",
    description:
      "Il Grand Egyptian Museum è troppo grande per essere girato a caso. Le sue gallerie permanenti custodiscono oltre 50.000 oggetti; la sola collezione di Tutankhamon — esposta al completo per la prima volta da quando Carter aprì la tomba, nel 1922 — conta più di 5.000 pezzi. Senza una traccia, i visitatori vagano; con un egittologo esperto, l'edificio diventa un racconto. Questa visita privata attraversa il museo seguendo l'ordine della storia: il colosso di Ramses II alto undici metri nell'atrio, la processione di re della grande scalinata che sale verso le piramidi inquadrate nella vetrata, l'oro del faraone bambino nella sequenza in cui lo rivelò la tomba stessa e la barca solare di Cheope, lunga quarantaquattro metri — una vera nave di 4.500 anni fa, costruita per portare un faraone attraverso l'aldilà. I tempi sono pianificati attorno alle ondate di pullman e il ritmo è interamente vostro. Per la visione più ravvicinata in assoluto, le gallerie di Tutankhamon possono essere aperte in privato per il vostro gruppo: un'ora e mezza con il tesoro del faraone bambino e nessun altro visitatore nella sala.",
    duration: "4 ore",
    where: "Grand Egyptian Museum, margine della piana di Giza",
    bestTime: "",
    highlights: [
      "L'intera collezione di Tutankhamon — oltre 5.000 oggetti finalmente riuniti",
      "La grande scalinata di statue reali con le piramidi nella vetrata",
      "La barca solare di Cheope, vecchia di 4.500 anni: quarantaquattro metri di cedro originale",
      "Un egittologo esperto che trasforma cinquantamila oggetti in un'unica storia",
      "Tempi calibrati sulle ondate di pullman; completamente climatizzato tutto l'anno",
      "Facoltativo: le gallerie di Tutankhamon aperte in privato per il vostro gruppo, per un'ora e mezza",
    ],
    keyFacts: [
      { label: "Durata", value: "4 ore" },
      { label: "Luogo", value: "Margine della piana di Giza" },
      { label: "Tipo di gruppo", value: "Privato — solo il vostro gruppo" },
      { label: "Si abbina bene a", value: "Una mattinata sulla piana di Giza" },
      { label: "Lingue", value: "inglese, tedesco, italiano, spagnolo, francese, russo, indonesiano, malese, portoghese, arabo, cinese mandarino" },
    ],
    included: [
      "Egittologo esperto privato",
      "Biglietti d'ingresso al museo (gallerie principali e Tutankhamon)",
      "Trasferimenti privati con aria condizionata, Il Cairo e Giza",
    ],
    excluded: [
      "Mostre speciali che richiedono biglietti a parte",
      "Apertura privata delle gallerie di Tutankhamon (extra facoltativo — un'ora e mezza, solo per il vostro gruppo)",
      "Pranzo (i ristoranti del museo sono buoni; la vostra guida vi consiglierà)",
      "Mance",
    ],
    prepare: [
      "Scarpe comode — l'edificio misura quasi un chilometro da un capo all'altro",
      "La fotografia è consentita nella maggior parte delle gallerie senza flash; le sale di Tutankhamon la limitano",
    ],
    goodToKnow: [
      "Il GEM e il vecchio Museo Egizio di piazza Tahrir sono edifici diversi con collezioni diverse — una visita seria merita entrambi",
      "L'estate è un ottimo momento per questa esperienza; l'edificio è interamente climatizzato",
    ],
    goodFor: [],
    meetingPoint:
      "Trasferimento dall'hotel del Cairo o di Giza incluso; il museo sorge accanto alla piana.",
    groupSize: "Privato — solo il vostro gruppo.",
    availability: "Disponibile ogni giorno; turni al mattino e al pomeriggio.",
    priceNote:
      "Prezzo confermato su richiesta. Biglietti d'ingresso ed egittologo inclusi.",
    faqs: [
      {
        q: "Che differenza c'è rispetto al semplice acquisto di un biglietto?",
        a: "La scala. Il GEM è il più grande museo archeologico del mondo, e chi lo visita da solo si stanca puntualmente nel primo terzo del percorso. Un egittologo privato ordina la collezione in un racconto, sa dove la folla si addensa e fa sembrare quattro ore più brevi di due ore di visita autonoma.",
      },
      {
        q: "Conviene fare le piramidi e il GEM nello stesso giorno?",
        a: "È l'abbinamento naturale — la piana nel fresco del mattino, il museo climatizzato nel pomeriggio. La nostra giornata «Giza e il Grand Museum» ha proprio questa forma; questa esperienza è la sola metà dedicata al museo, per chi preferisce ritmi diversi.",
      },
      {
        q: "Possiamo vedere il tesoro di Tutankhamon senza folla?",
        a: "Sì. Come extra facoltativo, le gallerie di Tutankhamon vengono aperte in privato per il vostro gruppo per un'ora e mezza, con il vostro egittologo e nessun altro visitatore accanto all'oro del faraone bambino. Menzionatelo quando ci contattate, così si può organizzare per la vostra data.",
      },
    ],
    photos: [
      { alt: "Il Grand Egyptian Museum al margine della piana di Giza", label: "Grand Egyptian Museum" },
      { alt: "La barca solare di cedro di Cheope esposta nella sua sala al museo", label: "Barca solare" },
    ],
  },

  // ===== Red Sea Private Yacht Day =====
  {
    kind: "experience",
    id: "red-sea-yacht-day",
    localeSlug: "yacht-privato-sharm-el-sheikh",
    metaTitle: "Yacht privato a Sharm El Sheikh — Ras Mohammed | Kemet",
    metaDescription:
      "Noleggiate uno yacht privato da Sharm El Sheikh per un giorno — snorkeling a Ras Mohammed, pranzo a bordo all'ancora e rotta decisa solo da voi.",
    keywords:
      "yacht privato sharm el sheikh, noleggio yacht sharm, escursione in barca ras mohammed, giornata in yacht mar rosso, snorkeling ras mohammed, charter privato sharm el sheikh",
    name: "Giornata in yacht privato sul Mar Rosso",
    summary:
      "Uno yacht privato in partenza da Sharm El Sheikh per l'intera giornata — le barriere di Ras Mohammed, pranzo a bordo all'ancora e una rotta decisa interamente dal vostro gruppo.",
    description:
      "La differenza tra un'escursione in barca condivisa e un noleggio privato sul Mar Rosso è la differenza tra un orario e una giornata. Con lo yacht riservato solo al vostro gruppo, la rotta segue le preferenze anziché il programma: lunghe soste di snorkeling sui giardini di corallo del Parco Nazionale di Ras Mohammed, un ancoraggio in una laguna turchese per il pranzo alla griglia, una deviazione perché l'acqua, semplicemente, sembra quella giusta. L'equipaggio pensa a tutto — la guida in acqua, i drink in coperta, la discreta competenza che rende senza sforzo una giornata di mare — e lo sfondo del Sinai fa il resto: montagne desertiche spoglie che scendono in un'acqua con visibilità di venti metri come norma. È la giornata più bella del Mar Rosso, condotta al ritmo di chi è a bordo e non secondo una lista di passeggeri.",
    duration: "Giornata intera (≈7 ore)",
    where: "Porticciolo di Sharm El Sheikh e Parco Nazionale di Ras Mohammed",
    bestTime: "",
    highlights: [
      "Uno yacht intero noleggiato in esclusiva per il vostro gruppo",
      "Soste di snorkeling sulle pareti e sui giardini di corallo di Ras Mohammed",
      "Pranzo fresco in coperta dalla griglia di bordo, all'ancora in una laguna",
      "Rotta e ritmo decisi dal vostro gruppo, non da una lista di passeggeri condivisa",
      "Attrezzatura da snorkeling, guida ed equipaggio inclusi",
    ],
    keyFacts: [
      { label: "Durata", value: "Giornata intera (≈7 ore)" },
      { label: "Partenza", value: "Porticciolo di Sharm El Sheikh, ~9:00" },
      { label: "Tipo di gruppo", value: "Noleggio privato — fino a 10 ospiti" },
      { label: "Parco marino", value: "Parco Nazionale di Ras Mohammed" },
      { label: "Temperatura del mare", value: "21–28 °C nel corso dell'anno" },
    ],
    included: [
      "Noleggio dello yacht privato con equipaggio completo",
      "Attrezzatura da snorkeling e guida in acqua",
      "Pranzo in coperta, bibite analcoliche e acqua",
      "Tariffe d'ingresso al parco marino di Ras Mohammed",
      "Trasferimenti dall'hotel a Sharm El Sheikh",
    ],
    excluded: [
      "Immersioni con le bombole dallo yacht (organizzate su richiesta con un centro abilitato)",
      "Bevande alcoliche (si possono organizzare in anticipo)",
      "Mance per l'equipaggio",
    ],
    prepare: [
      "Una crema solare ad alto SPF e rispettosa della barriera — il sole in coperta unito al riverbero dell'acqua è fortissimo",
      "Portate un cambio asciutto; il ritorno è più ventoso dell'andata",
    ],
    goodToKnow: [
      "Le giornate di mare vengono annullate di rado, ma d'inverno può esserci mare mosso — l'equipaggio vi dice la verità",
      "Chi non sa nuotare è il benvenuto; giubbotti di salvataggio e ombra in coperta rendono comunque la giornata piacevole",
    ],
    goodFor: [],
    meetingPoint:
      "Porticciolo di Sharm El Sheikh; trasferimenti dall'hotel a Sharm inclusi.",
    groupSize: "Intero yacht noleggiato per il vostro gruppo — fino a 10 ospiti.",
    availability: "Naviga ogni giorno, se le condizioni del mare lo consentono.",
    priceNote:
      "Prezzo confermato su richiesta. Noleggio completo — nessuna tariffa a persona a bordo.",
    faqs: [
      {
        q: "Possiamo combinare snorkeling e immersioni con le bombole nello stesso noleggio?",
        a: "Sì — con un congruo preavviso possono unirsi al noleggio una guida subacquea abilitata e le bombole, così i subacquei brevettati scendono mentre il resto del gruppo fa snorkeling sulla stessa barriera dalla superficie.",
      },
      {
        q: "La giornata è adatta ai bambini?",
        a: "Moltissimo. Gli ancoraggi nella laguna sono calmi e a basso fondale, a bordo c'è attrezzatura da snorkeling di misura per bambini e l'equipaggio è esperto con i piccoli nuotatori. Comunicateci le età alla prenotazione, così l'attrezzatura sarà quella giusta.",
      },
    ],
    photos: [
      { alt: "Una laguna turchese che incontra i promontori desertici spogli di Ras Mohammed, Mar Rosso", label: "Yacht sul Mar Rosso" },
      { alt: "Le baie curve di Sharm El Sheikh viste dall'alto", label: "Sharm El Sheikh" },
      { alt: "Un campo sulla spiaggia con tetto di paglia sopra i bassi fondali corallini di Sharm El Sheikh", label: "Bassi fondali" },
    ],
  },

  // ===== Guided Red Sea Diving =====
  {
    kind: "experience",
    id: "luxury-red-sea-diving",
    localeSlug: "immersioni-mar-rosso-sharm-el-sheikh",
    metaTitle: "Immersioni nel Mar Rosso, Sharm El Sheikh — Ras Mohammed | Kemet",
    metaDescription:
      "Due immersioni guidate nel Mar Rosso con centro PADI selezionato — pareti di Ras Mohammed, piccoli gruppi, attrezzatura inclusa. Discover Scuba per chi inizia.",
    keywords:
      "immersioni mar rosso, immersioni sharm el sheikh, diving ras mohammed, discover scuba diving sharm, immersioni guidate mar rosso, battesimo del mare sharm el sheikh",
    name: "Immersioni guidate nel Mar Rosso",
    summary:
      "Due immersioni guidate in barca sulle barriere di riferimento del Sinai con un centro PADI selezionato — piccoli gruppi, intervalli in superficie senza fretta e attrezzatura su misura.",
    description:
      "Il Mar Rosso settentrionale è il luogo in cui gran parte del mondo ha imparato a immergersi, e i motivi restano validi: un'acqua che non diventa mai davvero fredda, una visibilità che parte da venti metri e pareti di barriera che cominciano alla profondità dello snorkeling e precipitano nel blu. Questa esperienza è un'unica giornata in barca, organizzata come si deve — due immersioni guidate in siti scelti in base alle condizioni del mattino tra i gruppi di barriere di Ras Mohammed e quelli locali di Sharm, con un centro PADI abilitato con cui collaboriamo con continuità, anziché chi ha fatto il preventivo più basso. I gruppi sono tenuti piccoli, gli intervalli in superficie sono davvero riposanti e la barca ospita comodamente anche chi fa snorkeling, quindi i gruppi misti funzionano bene. I subacquei brevettati si inseriscono subito; la stessa giornata si trasforma, per i principianti, in un'introduzione Discover Scuba con istruzione individuale.",
    duration: "Giornata intera (2 immersioni)",
    where: "Barriere di Sharm El Sheikh e Ras Mohammed",
    bestTime: "",
    highlights: [
      "Due immersioni guidate sui gruppi di barriere di Ras Mohammed e di Sharm",
      "Centro PADI selezionato — piccoli gruppi, valutazioni meteo oneste",
      "Pareti di coralli molli, nuvole di anthias, tartarughe e pesci Napoleone",
      "Possibilità di Discover Scuba per principianti non brevettati",
      "Accompagnatori che fanno snorkeling benvenuti sulla stessa barca",
    ],
    keyFacts: [
      { label: "Durata", value: "Giornata intera" },
      { label: "Immersioni", value: "2 immersioni guidate in barca" },
      { label: "Rapporto", value: "Max 4 subacquei per guida" },
      { label: "Requisito", value: "Brevetto Open Water (o opzione Discover Scuba)" },
      { label: "Acqua", value: "21–28 °C; visibilità tipica oltre 20 m" },
    ],
    included: [
      "Due immersioni guidate in barca con un centro PADI abilitato",
      "Noleggio dell'attrezzatura completa, bombole e zavorre",
      "Tariffe del parco marino, dove previste",
      "Pranzo a bordo e bibite analcoliche",
      "Trasferimenti dall'hotel a Sharm El Sheikh",
    ],
    excluded: [
      "Assicurazione per le immersioni (obbligatoria; organizzata alla prenotazione, se necessario)",
      "Ricariche Nitrox (su richiesta)",
      "Mance",
    ],
    prepare: [
      "Portate il brevetto e il logbook — il centro li chiederà, ed è un buon segno",
      "Non prendete l'aereo nelle 18–24 ore dopo l'immersione; organizziamo il vostro itinerario di conseguenza",
    ],
    goodToKnow: [
      "L'inverno è ottimo per immergersi — a bordo c'è una muta da 5 mm e i siti sono più tranquilli",
      "La stessa giornata in barca può trasformarsi in un'introduzione Discover Scuba con istruzione individuale",
    ],
    goodFor: [],
    meetingPoint:
      "Molo del centro di immersioni, Sharm El Sheikh; trasferimenti dall'hotel inclusi.",
    groupSize: "Massimo 4 subacquei per guida; guida privata disponibile su richiesta.",
    availability:
      "Partenze giornaliere, se le condizioni lo consentono. Per le immersioni guidate è richiesto il brevetto.",
    priceNote:
      "Prezzo confermato su richiesta. Attrezzatura, barca e tariffe del parco inclusi.",
    faqs: [
      {
        q: "Non ho mai fatto immersioni — posso partecipare lo stesso?",
        a: "Sì, con un'introduzione Discover Scuba Diving: teoria ed esercizi in acque confinate al mattino, poi un'immersione guidata su una barriera poco profonda con un istruttore in rapporto uno a uno. Non serve alcun brevetto, e conta ai fini di un corso Open Water, se vi viene la passione.",
      },
      {
        q: "Come si inserisce in un itinerario sul Nilo?",
        a: "Senza problemi — da Luxor a Sharm El Sheikh il volo è breve. L'unica regola è l'intervallo senza voli dopo l'immersione, perciò programmiamo i giorni di immersione almeno un giorno intero prima di qualsiasi volo.",
      },
    ],
    photos: [
      { alt: "Una vivace barriera corallina del Mar Rosso brulicante di pesci tropicali", label: "Immersioni nel Mar Rosso" },
    ],
  },

  // ===== Sinai Desert Evening & Stargazing =====
  {
    kind: "experience",
    id: "sinai-stargazing-bedouin",
    localeSlug: "notte-di-stelle-deserto-sinai",
    metaTitle: "Stelle e cena beduina nel Sinai, Sharm El Sheikh | Kemet",
    metaDescription:
      "Una serata privata ospiti dei beduini nell'interno del Sinai — tè sul fuoco, cena alla brace e osservazione guidata delle stelle sotto i cieli più bui d'Egitto.",
    keywords:
      "cena beduina sinai, osservazione delle stelle sinai, notte nel deserto sharm el sheikh, stelle nel deserto, escursione serale deserto sinai, cielo stellato sinai",
    name: "Serata nel deserto del Sinai e osservazione delle stelle",
    summary:
      "Via dalle luci dei resort, nell'interno del Sinai — tè beduino accanto al fuoco, una cena alla brace e alcuni dei cieli più bui raggiungibili da un qualsiasi aeroporto.",
    description:
      "Venti minuti oltre l'ultimo lampione di Sharm El Sheikh, il Sinai torna a essere ciò che è sempre stato: montagne di granito spoglie, quiete assoluta e un cielo notturno che la maggior parte dei visitatori non ha mai davvero visto. La serata è curata da una famiglia beduina il cui legame con questo paesaggio precede ogni resort della costa. Si apre con un tè zuccherato preparato sul fuoco al riparo di una parete di roccia, prosegue con una cena alla brace consumata su tappeti sotto il cielo aperto e si chiude sdraiati a leggere, con una guida, un cielo così fitto da mostrare a occhio nudo la struttura della Via Lattea — con un telescopio per i pianeti quando le condizioni lo permettono. Non è folklore messo in scena. È una cena nel deserto con persone che ci vivono, e ricalibra l'intera costa.",
    duration: "5 ore (serata)",
    where: "Interno del Sinai, da Sharm El Sheikh",
    bestTime: "",
    highlights: [
      "Autentica ospitalità beduina — tè, fuoco e conversazione senza fretta",
      "Cena alla brace su tappeti sotto il cielo aperto",
      "Cieli abbastanza bui da mostrare la struttura della Via Lattea a occhio nudo",
      "Lettura guidata delle costellazioni; telescopio quando le condizioni lo permettono",
      "Trasferimento privato in 4x4 all'andata e al ritorno dal deserto",
    ],
    keyFacts: [
      { label: "Durata", value: "≈5 ore, dal tardo pomeriggio a notte" },
      { label: "Tipo di gruppo", value: "Privato — solo il vostro gruppo" },
      { label: "Cielo migliore", value: "Intorno alla luna nuova" },
      { label: "Terreno", value: "Facile — tappeti e sedute basse al campo" },
      { label: "Temperatura", value: "Le notti nel deserto si raffreddano di colpo — strati forniti" },
    ],
    included: [
      "Trasferimenti privati in 4x4 dal vostro hotel di Sharm",
      "Cena e tè offerti dai beduini",
      "Sessione guidata di osservazione delle stelle",
      "Coperte e sedute al campo",
    ],
    excluded: [
      "Bevande alcoliche (non offerte al campo)",
      "Mance per i vostri ospiti",
    ],
    prepare: [
      "Portate uno strato caldo anche in primavera — le temperature del deserto calano rapidamente dopo il tramonto",
      "Lasciate adattare gli occhi: tenere spenti gli schermi dei telefoni per venti minuti rende il cielo due volte più profondo",
    ],
    goodToKnow: [
      "Il momento cambia con il calendario lunare — orientiamo le prenotazioni verso le finestre più buie",
      "La serata si abbina perfettamente a una giornata di mare; deserto e barriera in ventiquattro ore",
    ],
    goodFor: [],
    meetingPoint:
      "Ritiro in hotel a Sharm El Sheikh in 4x4 nel tardo pomeriggio.",
    groupSize: "Privato — solo il vostro gruppo, ospite di una famiglia beduina.",
    availability:
      "Si svolge quasi ogni sera; il periodo migliore è attorno alla luna nuova, per il cielo più buio.",
    priceNote:
      "Prezzo confermato su richiesta. Cena, trasferimenti e ospitalità inclusi.",
    faqs: [
      {
        q: "È un «finto spettacolo beduino»?",
        a: "No — ed è proprio questo il punto. Non ci sono palchi con danza del ventre né carovane di quad. È una cena ospitata in un campo di famiglia, con il cielo come evento principale.",
      },
      {
        q: "Che cosa vedremo davvero nel cielo?",
        a: "In una notte serena e senza luna: il nucleo della Via Lattea nella stagione giusta, diversi pianeti, satelliti e meteore a ogni ora. La guida legge il cielo sia con il sapere stellare beduino sia con l'astronomia moderna, una combinazione migliore di ciascuno dei due presi da soli.",
      },
    ],
    photos: [
      { alt: "Viaggiatori attorno a un falò nel deserto aperto al crepuscolo", label: "Sera nel deserto" },
    ],
  },

  // ===== Pyramids Sound & Light, Privately =====
  {
    kind: "experience",
    id: "giza-sound-light-private",
    localeSlug: "suoni-e-luci-piramidi-giza",
    metaTitle: "Suoni e Luci alle Piramidi di Giza — serata privata | Kemet",
    metaDescription:
      "Lo spettacolo Suoni e Luci di Giza fatto come si deve — posti riservati sulla terrazza, trasferimenti privati e cena facoltativa con vista sulla piana.",
    keywords:
      "suoni e luci piramidi di giza, spettacolo suoni e luci giza, sound and light giza, serata alle piramidi, spettacolo notturno piramidi, suoni e luci cairo",
    name: "Suoni e Luci alle Piramidi, in privato",
    summary:
      "La piana di Giza dopo il tramonto — la Sfinge che racconta cinquemila anni mentre la luce corre sulle piramidi, con posti riservati sulla terrazza e trasferimenti privati.",
    description:
      "Di notte la piana di Giza si svuota, il deserto si raffredda e i monumenti vengono restituiti al teatro. Lo spettacolo Suoni e Luci è dichiaratamente classico — la Sfinge «parla», le piramidi ricevono la luce una dopo l'altra e cinque millenni sono condensati in un'ora di narrazione — e visto dal posto giusto funziona sorprendentemente bene. Questa formula si occupa di ciò che di solito non funziona: trasferimenti privati calibrati per evitare la ressa all'ingresso, posti riservati sulla terrazza con ottima visuale anziché sulle panche comuni, e un egittologo a disposizione a cena prima dello spettacolo o per un caffè dopo, per distinguere la poesia dello show dall'archeologia vera. Si inserisce alla perfezione in una serata di arrivo, quando il jet lag chiede qualcosa di spettacolare che non esiga nulla.",
    duration: "3 ore (spettacolo di 1 ora)",
    where: "Piana di Giza, area del teatro della Sfinge",
    bestTime: "",
    highlights: [
      "Le piramidi e la Sfinge illuminate contro la notte del deserto",
      "Posti riservati sulla terrazza con visuale libera",
      "Trasferimenti privati calibrati sulla folla all'ingresso",
      "Attività ideale per la serata di arrivo — spettacolare, senza sforzo",
      "Cena facoltativa prima dello spettacolo con vista sulla piana",
    ],
    keyFacts: [
      { label: "Durata", value: "≈3 ore porta a porta; spettacolo di 1 ora" },
      { label: "Orari dello spettacolo", value: "Serali, variabili secondo la stagione" },
      { label: "Lingue", value: "Calendario a rotazione; inglese quasi ogni sera" },
      { label: "Tipo di gruppo", value: "Trasferimenti privati e posti riservati" },
      { label: "Adatto a", value: "Tutte le età" },
    ],
    included: [
      "Posti riservati sulla terrazza per lo spettacolo",
      "Trasferimenti privati con aria condizionata, Il Cairo e Giza",
      "Gestione della prenotazione in base al calendario delle lingue",
    ],
    excluded: [
      "Cena prima dello spettacolo (facoltativa, organizzata su richiesta)",
      "Mance",
    ],
    prepare: [
      "In inverno portate uno strato in più — di notte la piana è nettamente più fredda della città",
      "Se aggiungete la cena, arrivate con appetito; la vista fa metà del lavoro",
    ],
    goodToKnow: [
      "Lo spettacolo è teatro, non una lezione — godetevelo come spettacolo e lasciate l'archeologia alla luce del giorno",
      "Si abbina naturalmente a una visita alla piana o al Grand Egyptian Museum la mattina seguente",
    ],
    goodFor: [],
    meetingPoint:
      "Trasferimento dall'hotel del Cairo o di Giza incluso; gli orari dello spettacolo variano secondo la stagione e la lingua.",
    groupSize: "Trasferimenti privati e posti riservati per il vostro gruppo.",
    availability:
      "Ogni sera, con calendari di lingue a rotazione; spettacoli in inglese quasi ogni sera.",
    priceNote:
      "Prezzo confermato su richiesta. Posti riservati e trasferimenti inclusi.",
    faqs: [
      {
        q: "Vale la pena vedere lo spettacolo Suoni e Luci?",
        a: "Come teatro sotto le vere piramidi, sì — soprattutto in una serata di arrivo, quando le energie sono basse e le aspettative vanno gestite. Prendetelo come spettacolo anziché come erudizione e si merita ampiamente la sua ora.",
      },
      {
        q: "In che lingua è la narrazione?",
        a: "Il calendario ruota ogni sera tra inglese, francese, spagnolo, tedesco e altre lingue, con traduzione in cuffia disponibile alla maggior parte degli spettacoli. Confermiamo il programma delle lingue per le vostre date prima della prenotazione.",
      },
    ],
    photos: [
      { alt: "Lo spettacolo Suoni e Luci che illumina una piramide e la Sfinge a Giza", label: "Suoni e Luci" },
    ],
  },

  // ===== Nubian Village Experience =====
  {
    kind: "experience",
    id: "nubian-village-experience",
    localeSlug: "villaggio-nubiano-assuan",
    metaTitle: "Villaggio nubiano ad Assuan — visita privata in famiglia | Kemet",
    metaDescription:
      "Attraversate il Nilo fino a un villaggio nubiano dipinto sopra Assuan — visita privata in famiglia, con tè all'ibisco, henné e cultura nubiana viva.",
    keywords:
      "villaggio nubiano assuan, visita villaggio nubiano, nubia egitto cultura, escursione privata assuan, casa nubiana assuan, tè all'ibisco nubia",
    name: "Visita a un villaggio nubiano",
    summary:
      "Attraversate il Nilo fino a un villaggio nubiano dipinto sopra Assuan — tè all'ibisco in una casa di famiglia, henné, chiacchiere sulle spezie e una cultura più antica del confine dei faraoni.",
    description:
      "La Nubia non è un'escursione a tema: è una cultura viva, con la sua lingua, la sua musica e la sua architettura, portata avanti da comunità che hanno ricostruito il proprio mondo attorno ad Assuan dopo che il lago Nasser sommerse la loro terra negli anni Sessanta. Questa visita si fonda su un rapporto consolidato con un villaggio e con una grande famiglia. Si attraversa il fiume in barca nel tardo pomeriggio, quando le case dipinte — blu, gialli saturi e candidi motivi geometrici — ricevono la luce migliore, e la visita si svolge a ritmo domestico: tè all'ibisco e pane appena sfornato nel cortile di famiglia, la forma della lingua nubiana sulle labbra del vostro ospite, henné per chi lo desidera e, dal tetto, la vista del Nilo che si piega tra il granito, che spiega a colpo d'occhio perché questa cultura non abbia mai lasciato il fiume. Siete ospiti, non pubblico.",
    duration: "3–4 ore",
    where: "Villaggio nubiano sulla riva occidentale, Assuan",
    bestTime: "",
    highlights: [
      "Un rapporto consolidato con una famiglia, non una tappa a rotazione dei tour",
      "Il villaggio dipinto nella sua migliore luce del tardo pomeriggio",
      "Tè all'ibisco, pane fresco e conversazione senza fretta",
      "Vista dal tetto sulla curva di granito del Nilo",
      "Henné e musica nubiana, dove la famiglia li offre, mai messi in scena",
    ],
    keyFacts: [
      { label: "Durata", value: "3–4 ore, compresa la traversata del fiume" },
      { label: "Tipo di gruppo", value: "Privato — solo il vostro gruppo" },
      { label: "Momento migliore", value: "Tardo pomeriggio" },
      { label: "Terreno", value: "Facili vicoli del villaggio; alcuni sentieri sabbiosi" },
      { label: "Lingue", value: "inglese, arabo (nubiano in famiglia)" },
    ],
    included: [
      "Trasferimento privato in barca dalla corniche di Assuan, andata e ritorno",
      "Ospitalità della famiglia con tè, pane e rinfreschi",
      "Guida per tutta la visita — contesto culturale in entrambe le direzioni",
      "Trasferimento dall'hotel e ritorno ad Assuan",
    ],
    excluded: [
      "Acquisti di artigianato (mai obbligatori; comprare direttamente avvantaggia chi lo realizza)",
      "Mance",
    ],
    prepare: [
      "Vestitevi in modo sobrio — entrate in una casa di famiglia, non in un locale",
      "Chiedete prima di fotografare le persone; la guida vi faciliterà il compito",
    ],
    goodToKnow: [
      "Gli acquisti al villaggio vanno direttamente a chi realizza gli oggetti — la migliore economia da souvenir d'Egitto",
      "La visita si abbina naturalmente a una navigazione in feluca; lo stesso pomeriggio può comprenderle entrambe",
    ],
    goodFor: [],
    meetingPoint:
      "Partenza in barca dalla corniche di Assuan; trasferimento dall'hotel incluso.",
    groupSize: "Privato — solo il vostro gruppo, ospite di una sola famiglia.",
    availability:
      "Nel pomeriggio, tutto l'anno; la fascia più tarda offre la luce e la temperatura migliori.",
    priceNote:
      "Prezzo confermato su richiesta. Barca, ospitalità e rinfreschi inclusi.",
    faqs: [
      {
        q: "È una visita rispettosa o invadente?",
        a: "Se fatta a modo nostro, è un'ospitalità voluta da entrambe le parti. Lavoriamo con una sola famiglia con accordi stabili, le visite sono private e dettate dal ritmo degli ospitanti, e ciò che si spende arriva direttamente al villaggio. Quello che ci rifiutiamo di organizzare è la versione con la carovana di venti barche.",
      },
      {
        q: "Che legame c'è tra la Nubia e l'antico Egitto?",
        a: "Profondo e reciproco. La Nubia fu per l'antico Egitto vicina a sud, partner commerciale, rivale e — durante la 25ª dinastia — sovrana, quando faraoni nubiani governarono l'intero paese. Il granito delle cave di Assuan e gran parte dell'oro dell'Egitto provenivano da questa frontiera.",
      },
    ],
    photos: [
      { alt: "Una terrazza nubiana dipinta sopra il Nilo al tramonto ad Assuan", label: "Villaggio nubiano" },
    ],
  },

  // ===== Alexandria Heritage Walk =====
  {
    kind: "experience",
    id: "alexandria-heritage-walk",
    localeSlug: "alessandria-d-egitto-a-piedi",
    metaTitle: "Alessandria d'Egitto a piedi — tour privato guidato | Kemet",
    metaDescription:
      "Tour privato a piedi tra gli strati di Alessandria — Anfiteatro romano, centro belle époque, caffè storici e corniche fino a Qaitbay, sul sito del Faro.",
    keywords:
      "alessandria d'egitto a piedi, tour a piedi alessandria, visita guidata alessandria d'egitto, anfiteatro romano kom el-dikka, cittadella di qaitbay, tour privato alessandria",
    name: "Alessandria d'Egitto a piedi",
    summary:
      "La capitale perduta del Mediterraneo a piedi — resti greco-romani, caffè belle époque e la corniche, letti da una guida che sa dove affiorano gli strati.",
    description:
      "Alessandria nasconde il suo passato in piena vista: un teatro romano sotto una piazza moderna, le pietre dell'antico faro riciclate in una fortezza mamelucca, la grande Biblioteca rinata in vetro e granito a poche centinaia di metri da dove bruciò la sua antenata. Questa esperienza a piedi legge la città strato dopo strato. Parte dall'Anfiteatro romano di Kom el-Dikka, attraversa gli isolati del centro dove le facciate belle époque portano ancora nomi greci e italiani, si concede una vera sosta — un caffè e un dolcetto in uno dei grandi caffè superstiti dove un tempo discutevano i poeti e gli esuli della città — e si chiude sulla corniche con la Cittadella di Qaitbay oltre l'acqua, eretta sull'esatta impronta del Faro. È il tessuto connettivo che il giro di monumenti in auto non offre mai: non solo ciò che Alessandria ha, ma ciò che Alessandria era.",
    duration: "3 ore",
    where: "Centro di Alessandria e la corniche",
    bestTime: "",
    highlights: [
      "L'Anfiteatro romano di Kom el-Dikka — un teatro sotto la città moderna",
      "Le facciate belle époque del centro e la loro storia cosmopolita",
      "Un caffè in uno dei grandi caffè superstiti dell'Alessandria letteraria",
      "La corniche e Qaitbay sul sito dell'antico Faro",
      "Una guida che legge gli strati della città, non solo i suoi luoghi",
    ],
    keyFacts: [
      { label: "Durata", value: "3 ore" },
      { label: "Distanza", value: "≈3 km a passo di passeggiata" },
      { label: "Tipo di gruppo", value: "Privato — solo il vostro gruppo" },
      { label: "Luce migliore", value: "Dal tardo pomeriggio al crepuscolo" },
      { label: "Lingue", value: "inglese, tedesco, italiano, spagnolo, francese, russo, indonesiano, malese, portoghese, arabo, cinese mandarino" },
    ],
    included: [
      "Guida privata per tutta la durata",
      "Ingresso all'Anfiteatro romano",
      "Caffè e dolcetto in un caffè storico",
    ],
    excluded: [
      "Trasporto dal Cairo (si vedano la nostra giornata ad Alessandria e i viaggi con pernottamento)",
      "Pranzo",
      "Mance",
    ],
    prepare: [
      "Scarpe comode; i marciapiedi sono quelli, sinceri, di un porto del Mediterraneo",
      "Una giacca leggera fuori stagione — la brezza di mare comanda in questa città",
    ],
    goodToKnow: [
      "La camminata si inserisce nella nostra giornata o nel nostro pernottamento ad Alessandria come loro spina culturale",
      "Le sere d'estate trasformano la corniche — tutta la città esce a passeggiare",
    ],
    goodFor: [],
    meetingPoint:
      "Punto d'incontro in centro, confermato alla prenotazione; facilmente abbinabile a qualsiasi giornata ad Alessandria.",
    groupSize: "Privato — solo il vostro gruppo.",
    availability:
      "Al mattino e nel tardo pomeriggio; le sere d'estate sono particolarmente belle.",
    priceNote:
      "Prezzo confermato su richiesta. Ingressi e sosta al caffè inclusi.",
    faqs: [
      {
        q: "Include le Catacombe e la Biblioteca?",
        a: "Volutamente non le duplica — sono il fulcro della nostra giornata completa ad Alessandria. Questa camminata copre la città che sta tra i siti principali: il teatro, i caffè, le strade e il lungomare che danno senso ai monumenti.",
      },
      {
        q: "Alessandria si visita a piedi?",
        a: "Il centro storico sì — pianeggiante, compatto e fatto per passeggiare, soprattutto quando arriva la brezza del pomeriggio. La corniche è una delle grandi passeggiate sul lungomare del Mediterraneo.",
      },
    ],
    photos: [
      { alt: "Il faro che si erge sul lungomare di Alessandria", label: "Alessandria a piedi" },
    ],
  },

  // ===== VIP Airport Meet & Assist =====
  {
    kind: "experience",
    id: "vip-airport-service",
    localeSlug: "assistenza-vip-aeroporto-cairo",
    metaTitle: "Assistenza VIP in aeroporto al Cairo — fast track | Kemet",
    metaDescription:
      "Accolti alla porta dell'aereo, fast track all'immigrazione, bagagli portati all'auto. Assistenza VIP all'aeroporto del Cairo, 24 ore su 24 in tutti i terminal.",
    keywords:
      "assistenza vip aeroporto cairo, fast track aeroporto cairo, meet and assist cairo, accoglienza aeroporto cairo, servizio vip aeroporto egitto, visto aeroporto cairo",
    name: "Accoglienza e assistenza VIP in aeroporto",
    summary:
      "Accolti alla porta dell'aereo, accompagnati lungo la corsia veloce dell'immigrazione, bagagli portati fino all'auto — l'aeroporto del Cairo ridotto a un corridoio e a una stretta di mano.",
    description:
      "L'aeroporto internazionale del Cairo è uno scalo perfettamente funzionale, che si vive male proprio nei momenti sbagliati: dopo un lungo volo notturno, prima di una partenza all'alba, con i bambini o con quaranta minuti tra una coincidenza e l'altra. Questo servizio lo toglie dall'equazione. All'arrivo siete accolti per nome alla porta dell'aereo o al finger, accompagnati lungo la corsia veloce dell'immigrazione con il visto già sbrigato, e i vostri bagagli vengono ritirati e consegnati a un autista che vi sta già aspettando. Le partenze seguono lo schema speculare: dal marciapiede alla lounge, con check-in, controlli di sicurezza e immigrazione compressi in pochi minuti. È l'esperienza meno fotogenica che offriamo e una delle più utili — perché la prima e l'ultima ora di un viaggio danno il tono a tutto ciò che sta in mezzo.",
    duration: "≈1 ora per direzione",
    where: "Aeroporto internazionale del Cairo (tutti i terminal)",
    bestTime: "",
    highlights: [
      "Accoglienza lato air side alla porta dell'aereo, per nome",
      "Corsia veloce all'immigrazione, con il visto sbrigato per voi",
      "Servizio facchino — bagagli dal nastro al veicolo",
      "Servizio speculare in partenza: dal marciapiede alla lounge in pochi minuti",
      "24 ore su 24 in tutti i terminal dell'aeroporto internazionale del Cairo",
    ],
    keyFacts: [
      { label: "Durata", value: "≈1 ora per direzione" },
      { label: "Copertura", value: "Aeroporto internazionale del Cairo, tutti i terminal" },
      { label: "Disponibilità", value: "24 ore su 24, ogni compagnia aerea" },
      { label: "Tipo di gruppo", value: "Privato — per gruppo" },
      { label: "Disponibile anche", value: "Aeroporti di Luxor, Assuan e Sharm su richiesta" },
    ],
    included: [
      "Accoglienza lato air side al gate d'arrivo o al finger",
      "Fast track all'immigrazione e gestione del visto",
      "Servizio facchino e gestione dei bagagli",
      "Accompagnamento fino al vostro autista o alla coincidenza successiva",
    ],
    excluded: [
      "La tassa del visto in sé (gestita, ma non coperta)",
      "Accesso alla lounge della compagnia aerea (organizzato su richiesta)",
      "Mance",
    ],
    prepare: [
      "Inviate il numero del volo alla prenotazione — il team monitora i ritardi in automatico",
      "Tenete a portata di mano passaporto e importo per il visto; al resto pensiamo noi",
    ],
    goodToKnow: [
      "Il servizio dà il meglio all'arrivo dopo lunghi voli notturni e nelle partenze all'alba",
      "Gli aeroporti regionali (Luxor, Assuan, Sharm El Sheikh) offrono lo stesso servizio su richiesta",
    ],
    goodFor: [],
    meetingPoint:
      "Arrivi: accoglienza alla porta dell'aereo o al finger. Partenze: accoglienza al marciapiede del terminal.",
    groupSize: "Privato — prezzo per gruppo, non per viaggiatore.",
    availability:
      "Tutti i voli, tutti i terminal, 24 ore su 24 con prenotazione anticipata.",
    priceNote:
      "Prezzo confermato su richiesta; incluso automaticamente nei nostri itinerari VIP.",
    faqs: [
      {
        q: "Vale davvero la pena per un viaggiatore esperto?",
        a: "Per un viaggiatore esperto che viaggia da solo con il solo bagaglio a mano, forse no. Per famiglie, primi viaggi, coincidenze strette o chiunque atterri alle 3 di notte dopo quattordici ore di volo, trasforma l'ora peggiore del viaggio in un non-evento — ed è per questo che è compreso in tutti i nostri itinerari VIP.",
      },
      {
        q: "Monitorate i ritardi dei voli?",
        a: "Sì — il team segue il vostro numero di volo dalla partenza, così un ritardo di tre ore sposta semplicemente l'incontro, senza mai annullarlo.",
      },
    ],
    photos: [
      { alt: "Un aereo al suo stallo all'aeroporto internazionale del Cairo, con la scaletta passeggeri in posizione", label: "Assistenza VIP" },
    ],
  },

  // ===== Sufi Tanoura Show =====
  {
    kind: "activity",
    id: "sufi-tanoura-cairo",
    localeSlug: "spettacolo-sufi-tanoura-cairo",
    metaTitle: "Spettacolo sufi della tanoura al Cairo | Kemet",
    metaDescription:
      "Una serata di musica sufi egiziana e danza rotante della tanoura nel Cairo medievale — un'esibizione devozionale, non uno spettacolo turistico.",
    keywords:
      "spettacolo tanoura cairo, danza sufi cairo, dervisci rotanti egitto, serata sufi il cairo, tanoura show, spettacolo sufi egiziano",
    name: "Spettacolo sufi della tanoura",
    summary:
      "Una serata di musica sufi egiziana e danza rotante della tanoura nel Cairo medievale — un'esibizione devozionale, non uno spettacolo turistico.",
    description:
      "La tanoura prende il nome dalla gonna, e la forma discende dalla pratica sufi mevlevi del roteare come disciplina meditativa. In Egitto ha sviluppato un proprio linguaggio: più gonne appesantite dai colori saturi, sollevate e separate mentre il danzatore gira, accompagnate da un ensemble dal vivo di ney, rababa, oud e percussioni. Le esibizioni che si tengono negli edifici ottomani restaurati del Cairo medievale sono autentiche — i musicisti sono seri, il repertorio è devozionale e la rotazione si protrae molto più a lungo di quanto sembri possibile. È una delle poche esperienze serali del Cairo che appartengono davvero alla città, anziché essere messe in scena per i visitatori.",
    duration: "Circa 1 ora di spettacolo · 2–3 ore con i trasferimenti",
    where: "Il Cairo",
    bestTime:
      "Quasi ogni sera tutto l'anno; le sere di Ramadan sono eccezionali e le più affollate.",
    highlights: [
      "Un trasferimento a inizio serata verso il Cairo medievale, spesso abbinato a una passeggiata lungo via al-Muizz prima dello spettacolo",
      "Posti a sedere in un cortile o in una sala ottomana restaurati — suggestivi, e non grandi",
      "Un ensemble dal vivo che apre il programma: flauto ney, rababa, oud e percussioni a mano",
      "La tanoura vera e propria — una rotazione prolungata con gonne sovrapposte, illuminate e sollevate mentre il danzatore gira",
      "Tempo dopo per un tè e per i vicoli circostanti, vivaci fino a notte inoltrata",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "I posti sono spesso non riservati e le sale sono piccole — arrivare presto migliora sensibilmente dove ci si siede",
      "È opportuno un abbigliamento sobrio: è una forma devozionale eseguita in un quartiere religioso storico",
      "Di norma si può fotografare senza flash; verificate la sera stessa, perché varia da sala a sala",
      "Lo spettacolo è in arabo e senza narrazione — la vostra guida può spiegare la struttura e il repertorio",
      "I programmi possono cambiare con breve preavviso in occasione delle festività religiose",
    ],
    goodFor: [
      "Viaggiatori che mettono la cultura al primo posto",
      "Famiglie con bambini più grandi",
      "Fotografi",
      "Una serata dopo una giornata di musei",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Che cos'è la danza della tanoura?",
        a: "La tanoura è la forma egiziana del roteare sufi. Il danzatore gira in continuazione con gonne appesantite e dai colori vivaci — tanoura significa gonna — mentre un ensemble dal vivo suona musica devozionale. Ha la stessa origine della tradizione mevlevi della Turchia, ma ha sviluppato un carattere nettamente egiziano nei costumi, nella musica e nella messa in scena.",
      },
      {
        q: "Lo spettacolo sufi al Cairo è adatto ai bambini?",
        a: "Sì, e i bambini più grandi di solito lo apprezzano — i colori, i tamburi e la pura spettacolarità della rotazione prolungata catturano bene l'attenzione. È un evento serale di circa un'ora, quindi i più piccoli possono trovarlo lungo.",
      },
      {
        q: "Dove si tiene l'esibizione sufi della tanoura?",
        a: "In edifici storici restaurati del Cairo islamico medievale, più spesso un palazzo o una wikala di epoca ottomana vicino a via al-Muizz. L'ambientazione è gran parte dell'esperienza, e si abbina naturalmente a una passeggiata nei vicoli circostanti prima dello spettacolo.",
      },
    ],
    photos: [
      { alt: "Un danzatore sufi di tanoura che gira con una gonna dai colori vivaci", label: "Tanoura" },
    ],
  },

  // ===== Banana Boat Ride =====
  {
    kind: "activity",
    id: "banana-boat-sharm",
    localeSlug: "banana-boat-sharm-el-sheikh",
    metaTitle: "Banana boat a Sharm El Sheikh | Kemet",
    metaDescription:
      "Una veloce corsa su un gonfiabile nelle acque turchesi e riparate del Mar Rosso — il modo più semplice di andare sull'acqua per gruppi di età miste.",
    keywords:
      "banana boat sharm el sheikh, banana boat mar rosso, attività in acqua sharm, divertimento in famiglia sharm el sheikh, escursione banana boat, sport acquatici sharm",
    name: "Banana boat",
    summary:
      "Una veloce corsa su un gonfiabile nelle acque turchesi e riparate del Mar Rosso — il modo più semplice di andare sull'acqua per gruppi di età miste.",
    description:
      "Non tutto, sul Mar Rosso, richiede maschera e briefing. Il banana boat è esattamente ciò che sembra: un gonfiabile trainato da un motoscafo sull'acqua piatta all'interno della linea della barriera, a qualunque ritmo desideri il gruppo. Funziona perché l'acqua di Sharm è calda, limpida e riparata, e perché è l'unica attività della costa che un gruppo con età e capacità natatorie diverse può fare tutto insieme. È anche un'ottima prima mezz'ora di una giornata in barca, prima che cominci lo snorkeling e il ritmo rallenti.",
    duration: "Circa 15–20 minuti in acqua",
    where: "Sharm El Sheikh",
    bestTime:
      "Da aprile a novembre per l'acqua più calda; le mattine sono le più calme.",
    highlights: [
      "Un breve briefing e un salvagente ben regolato prima di salire a bordo",
      "Salita sul gonfiabile da un molo o dal bagnasciuga",
      "Un traino sull'acqua piatta dentro la barriera, a una velocità che chi guida adatta al gruppo",
      "Cadere fa parte del gioco — chi guida torna subito indietro",
      "Subito di nuovo in barca o sulla spiaggia, di solito con il tempo per un bagno dopo",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "I salvagenti sono forniti e indossati da tutti, quindi non occorre nuotare con sicurezza",
      "Reggetevi con entrambe le mani e lasciate a riva gli oggetti sciolti — occhiali da sole, telefoni, gioielli",
      "Sconsigliato in gravidanza o con problemi alla schiena, al collo o alle spalle; la corsa è sobbalzante per natura",
      "Gli operatori fissano di norma un'età minima di circa sei anni, con un adulto accanto ai bambini più piccoli",
      "Solo creme solari rispettose della barriera, da riapplicare dopo — vi bagnerete",
    ],
    goodFor: [
      "Famiglie",
      "Gruppi di amici",
      "Chi non sa nuotare, con il giubbotto",
      "Una prima attività leggera sulla costa",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Bisogna saper nuotare per fare il banana boat?",
        a: "No. Tutti indossano un salvagente, la corsa resta in acque basse e riparate dentro la linea della barriera, e il motoscafo torna subito indietro se qualcuno cade. Gli ospiti timorosi o che non sanno nuotare lo fanno senza problemi, e chi guida terrà un'andatura dolce se lo chiedete.",
      },
      {
        q: "Il banana boat è adatto ai bambini?",
        a: "Sì, da circa sei anni con un adulto accanto, anche se ogni operatore stabilisce la propria età minima. È una delle poche attività del Mar Rosso che va bene per un'intera famiglia insieme, qualunque sia la capacità di nuotare.",
      },
      {
        q: "Dove si svolge il banana boat?",
        a: "Nelle baie riparate lungo la costa di Sharm El Sheikh, dentro la linea della barriera dove l'acqua è piatta, bassa e calda. Di solito parte dal molo di un hotel oppure è il tratto iniziale di una giornata in barca privata.",
      },
    ],
    photos: [
      { alt: "Ospiti su un banana boat attraverso il turchese del Mar Rosso", label: "Banana boat" },
    ],
  },

  // ===== Parasailing =====
  {
    kind: "activity",
    id: "parasailing-sharm",
    localeSlug: "parasailing-sharm-el-sheikh",
    metaTitle: "Parasailing a Sharm El Sheikh | Kemet",
    metaDescription:
      "Un volo trainato sotto una vela sopra la barriera del Mar Rosso a Sharm El Sheikh — pochi minuti di quiete e la costa distesa sotto di voi.",
    keywords:
      "parasailing sharm el sheikh, volo con il paracadute ascensionale sharm, parasailing mar rosso, attività in barca sharm el sheikh, parasailing in coppia, parasailing prezzo sharm",
    name: "Parasailing",
    summary:
      "Un volo trainato sotto una vela sopra la barriera del Mar Rosso a Sharm El Sheikh — pochi minuti di quiete e la costa distesa sotto di voi.",
    description:
      "Il parasailing è il modo meno faticoso di prendere quota su questa costa. Si è imbracati sotto una vela e trainati da una barca, si stacca dal ponte e si sale fino a circa un centinaio di metri. Ciò che a Sharm lo rende da fare è quello che c'è sotto: l'acqua è così limpida che dall'alto si legge la struttura della barriera — i bassi fondali chiari, le teste di corallo scure, l'improvvisa linea blu notte dove la parete precipita — con le montagne del Sinai alle spalle della città. Una volta in alto, lontano dal motore, il volo è sorprendentemente silenzioso.",
    duration: "Circa 10–15 minuti in volo · 1–2 ore compreso il giro in barca",
    where: "Sharm El Sheikh",
    bestTime:
      "Al mattino, prima che si alzi il vento del pomeriggio. Da aprile a novembre per le condizioni più calde.",
    highlights: [
      "Un breve tragitto in barca dal porticciolo o dal molo fino all'area di traino",
      "Vestizione dell'imbracatura e briefing sui segnali di decollo e atterraggio",
      "Decollo direttamente dalla piattaforma della barca mentre il cavo si svolge — non si corre né si salta",
      "Da dieci a quindici minuti in quota, di solito in volo singolo o in tandem",
      "Discesa con verricello fino al ponte, di norma atterrando all'asciutto",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Gli operatori fissano limiti di peso a entrambe le estremità — troppo leggeri e non si vola, troppo pesanti e si vola in tandem; confermate in anticipo",
      "Non adatto in gravidanza o con problemi cardiaci, alla schiena o alle spalle",
      "Il vento decide tutto: i voli vengono annullati o spostati alla mattina seguente se si alza",
      "Fissate o lasciate a terra cappelli, occhiali e telefoni — ciò che cade è perso",
      "Di solito si resta all'asciutto, ma chiedete un atterraggio con tuffo se lo desiderate",
    ],
    goodFor: [
      "Chi lo fa per la prima volta e vuole quota senza fatica",
      "Coppie (voli in tandem)",
      "Fotografi",
      "Chi non vuole immergersi",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Il parasailing a Sharm El Sheikh è sicuro?",
        a: "È tra le attività acquatiche più controllate della costa: si decolla e si atterra dalla barca stessa con un verricello, le imbracature vengono controllate prima di ogni volo e le operazioni si fermano del tutto quando le condizioni del vento sono incerte. Non si salta e non si corre — fa tutto la barca.",
      },
      {
        q: "A che altezza si arriva con il parasailing?",
        a: "Di solito attorno a un centinaio di metri, a seconda della lunghezza del cavo e del vento. È abbastanza alto da leggere l'intera struttura della barriera sotto di voi e vedere le montagne del Sinai dietro la costa, e il volo è tranquillo una volta in alto.",
      },
      {
        q: "Si può fare parasailing in due?",
        a: "Sì — i voli in tandem sono la norma e sono spesso la scelta predefinita per gli ospiti più pesanti. Le coppie di solito li preferiscono, e gli operatori indicano la fascia di peso per il volo singolo o in tandem quando il volo viene organizzato.",
      },
    ],
    photos: [
      { alt: "Una coppia in parasailing sopra il Mar Rosso sotto una vela colorata", label: "Parasailing" },
    ],
  },

  // ===== Camel Ride at the Pyramids =====
  {
    kind: "activity",
    id: "camel-ride-pyramids",
    localeSlug: "giro-in-cammello-piramidi-giza",
    metaTitle: "Giro in cammello alle Piramidi di Giza | Kemet",
    metaDescription:
      "Un breve giro in cammello lungo il margine del deserto di Giza fino al punto panoramico — l'approccio classico, organizzato perché nessuno debba contrattare.",
    keywords:
      "giro in cammello piramidi, cammello piramidi di giza, passeggiata in cammello giza, cammello al punto panoramico giza, escursione in cammello egitto, cammello piramidi prezzo",
    name: "Giro in cammello alle Piramidi",
    summary:
      "Un breve giro in cammello lungo il margine del deserto di Giza fino al punto panoramico — l'approccio classico, organizzato perché nessuno debba contrattare.",
    description:
      "Il giro in cammello a Giza ha una cattiva fama, in buona parte meritata: la piana è uno dei luoghi dell'Egitto più insistenti per i procacciatori, e un giro non organizzato può trasformarsi in una trattativa a metà strada sulla sabbia. Organizzato come si deve, è tutt'altra cosa. Un breve giro lungo il margine del deserto vi porta al punto panoramico in cui le tre piramidi si allineano, su un percorso più tranquillo della strada e usato per avvicinarsi a Giza da sempre, da quando c'è chi viene qui. Venti o trenta minuti bastano davvero — abbastanza per la vista e le fotografie, abbastanza pochi per restare comodi.",
    duration: "20–40 minuti in sella, all'interno di una mezza giornata o di una giornata intera a Giza",
    where: "Giza",
    bestTime:
      "Al primo mattino o nel tardo pomeriggio. In estate evitate del tutto il mezzogiorno.",
    highlights: [
      "Incontro con il conducente in un punto concordato sulla piana, con il prezzo già stabilito",
      "Si sale mentre il cammello è accovacciato — si alza prima con le zampe posteriori, quindi ci si sporge indietro, poi in avanti",
      "Una camminata lungo il margine del deserto, con le piramidi da un lato e la sabbia aperta dall'altro",
      "Tempo al punto panoramico dove le tre piramidi si allineano, per le fotografie",
      "Si scende nello stesso modo, poi si prosegue la visita a piedi o in veicolo",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Tutto è organizzato e pagato in anticipo tramite noi — nessuna trattativa sulla sabbia e nessuna pressione per extra",
      "Salire e scendere sono i momenti instabili; il conducente tiene fermo l'animale per tutto il tempo",
      "I pantaloni lunghi sono molto più comodi dei pantaloncini e le scarpe chiuse tengono fuori la sabbia",
      "Sconsigliato in gravidanza o con problemi alla schiena o all'anca; una carrozza trainata da cavalli è un'alternativa più dolce",
      "Se un animale appare magro o mal tenuto, non ci serviamo di quel conducente — ditelo alla vostra guida e verrà cambiato all'istante",
    ],
    goodFor: [
      "Chi visita Giza per la prima volta",
      "Fotografi",
      "Famiglie con bambini più grandi",
      "La classica fotografia di Giza",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Vale la pena fare un giro in cammello alle Piramidi?",
        a: "Per la maggior parte di chi viene per la prima volta, sì — ma tenetelo breve. Venti o trenta minuti lungo il margine del deserto fino al punto panoramico vi danno l'avvicinamento e le fotografie senza che il giro diventi scomodo. La sua cattiva fama dipende soprattutto dai giri non organizzati che finiscono in una contrattazione, cosa che si evita prenotando in anticipo.",
      },
      {
        q: "Quanto costa un giro in cammello a Giza?",
        a: "Quando è organizzato tramite noi, è già compreso nel prezzo del vostro itinerario, quindi sulla piana non c'è alcuna trattativa né pressione per pagamenti aggiuntivi a metà giro. I prezzi proposti sulla sabbia a chi si presenta all'improvviso variano enormemente, ed è all'origine della maggior parte dei reclami.",
      },
      {
        q: "I cammelli delle Piramidi sono trattati bene?",
        a: "Dipende dal conducente, ed è proprio per questo che lavoriamo con alcuni in particolare. Non ci serviamo di conducenti i cui animali siano magri, doloranti o mal equipaggiati, e se non siete soddisfatti delle condizioni di un animale, ditelo alla vostra guida e verrà sostituito subito.",
      },
    ],
    photos: [
      { alt: "Un cammello addobbato che riposa davanti alle Piramidi di Giza nella prima luce", label: "Cammello" },
    ],
  },

  // ===== Diving the Red Sea =====
  {
    kind: "activity",
    id: "diving-marsa-alam",
    localeSlug: "immersioni-marsa-alam",
    metaTitle: "Immersioni nel Mar Rosso — Marsa Alam | Kemet",
    metaDescription:
      "Pareti di barriera nel Mar Rosso meridionale a Marsa Alam — 20–30 metri di visibilità, acqua calda tutto l'anno e barriere meglio conservate del nord.",
    keywords:
      "immersioni marsa alam, diving marsa alam, immersioni mar rosso, snorkeling marsa alam, elphinstone immersioni, corso open water marsa alam",
    name: "Immersioni nel Mar Rosso",
    summary:
      "Immersioni su pareti di barriera nel Mar Rosso meridionale a Marsa Alam — 20–30 metri di visibilità, acqua calda tutto l'anno e barriere in condizioni migliori del nord.",
    description:
      "Marsa Alam si trova abbastanza a sud perché le immersioni cambino carattere. Le barriere qui hanno visto meno traffico di quelle di Sharm e Hurghada, le pareti sono ripide e vicine a riva, e i siti sono noti per la fauna più grande: dugonghi nelle baie di prateria sommersa, tartarughe quasi di routine e, per i subacquei con l'esperienza adatta, le barriere al largo di Elphinstone e dei Fury Shoals. La temperatura dell'acqua va da circa 22 °C in inverno a 28 °C a fine estate, e una visibilità di 20–30 metri è la norma, non l'eccezione. Va bene sia per un primo corso Open Water sia per una settimana seria di immersioni, il che è insolito.",
    duration: "Mezza giornata per due immersioni in barca; una settimana intera per una serie completa",
    where: "Marsa Alam",
    bestTime:
      "Tutto l'anno. Marzo–maggio e settembre–novembre offrono il giusto equilibrio tra acqua calda e vento leggero.",
    highlights: [
      "Partenza al mattino dal porticciolo, con i siti del giorno scelti in base alle condizioni e al vostro livello di brevetto",
      "Un briefing per ogni immersione sul profilo del sito, l'ingresso e l'uscita e la profondità massima prevista",
      "Di norma due immersioni, con un intervallo in superficie e un pranzo a bordo tra l'una e l'altra",
      "Pareti di barriera, giardini di corallo e — a seconda del sito — tartarughe, pesci Napoleone e squali di barriera sulle barriere al largo",
      "Rientro al porticciolo nel pomeriggio, con i logbook firmati",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Portate il brevetto e il logbook; un centro può chiedere un'immersione di controllo se non vi immergete da tempo",
      "Non prendete l'aereo per almeno 24 ore dopo l'ultima immersione — ciò condiziona il modo in cui si costruisce la fine di un itinerario in Egitto",
      "Solo creme solari rispettose della barriera, e non appoggiatevi mai al corallo né toccatelo: sono barriere protette",
      "Chi non si immerge può venire sulla stessa barca e fare snorkeling negli stessi siti — le pareti iniziano vicino alla superficie",
      "Elphinstone e le barriere più lontane dalla costa sono spazzate dalle correnti e riservate ai subacquei esperti",
    ],
    goodFor: [
      "Subacquei brevettati",
      "Chi si avvicina per la prima volta con un'immersione di prova o un corso",
      "Chi fa snorkeling sulla stessa barca",
      "Fotografi",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Marsa Alam è adatta alle immersioni?",
        a: "È tra le migliori d'Egitto. Le barriere meridionali hanno subito meno pressione di quelle più a nord, le pareti sono ripide e vicine alla costa, e la zona è nota per dugonghi, tartarughe e — sulle barriere al largo — grandi pelagici. Una visibilità di 20–30 metri è la norma e l'acqua resta tra circa 22 e 28 °C tutto l'anno.",
      },
      {
        q: "I principianti possono immergersi nel Mar Rosso?",
        a: "Sì. Le baie riparate sono ideali per le immersioni di prova e i corsi Open Water: acqua calda, limpida, bassa all'inizio e con la vita della barriera subito a portata di mano. Principianti e subacquei esperti di solito possono salire sulla stessa barca nello stesso giorno, con siti o profili diversi.",
      },
      {
        q: "Quanto bisogna aspettare per volare dopo un'immersione?",
        a: "Almeno 24 ore dopo l'ultima immersione. È un vincolo fermo, non un suggerimento, e incide sulla costruzione dell'itinerario — collochiamo sempre i giorni di immersione in modo che l'intervallo sia rispettato prima di qualsiasi volo, nazionale o internazionale.",
      },
      {
        q: "Bisogna immergersi per godersi il Mar Rosso?",
        a: "No. Poiché le pareti della barriera iniziano molto vicino alla superficie, chi fa snorkeling vede gran parte di ciò che vedono i subacquei. I membri di un gruppo che non si immergono vengono di solito sulla stessa barca e trascorrono la giornata a fare snorkeling negli stessi siti.",
      },
    ],
    photos: [
      { alt: "Un subacqueo accanto a una vivida barriera corallina del Mar Rosso brulicante di pesci", label: "Immersione" },
    ],
  },

  // ===== Quad Biking =====
  {
    kind: "activity",
    id: "quad-biking-desert",
    localeSlug: "quad-nel-deserto-egitto",
    metaTitle: "Quad nel deserto — Deserto Occidentale | Kemet",
    metaDescription:
      "Un'escursione guidata in quad nel deserto aperto con sosta per il tè beduino e il tramonto — dune, silenzio e un cielo che vira dall'oro al viola.",
    keywords:
      "quad nel deserto, escursione in quad egitto, quad al tramonto deserto, quad biking deserto occidentale, tè beduino deserto, escursione quad giza",
    name: "Quad nel deserto",
    summary:
      "Un'escursione guidata in quad nel deserto aperto con sosta per il tè beduino e il tramonto — dune, silenzio e un cielo che vira dall'oro al viola.",
    description:
      "In Egitto il deserto comincia all'improvviso. Pochi minuti dopo l'ultimo edificio il terreno diventa una distesa aperta di sabbia e ghiaia, e il rumore cessa. Un'escursione guidata in quad è il modo onesto più rapido per entrarci: circa un'ora di guida in colonna tra dune e spianate, fino a un punto abbastanza lontano da non avere nulla di artificiale in nessuna direzione, poi una sosta per il tè zuccherato mentre il sole tramonta. Ciò che si ricorda non è la guida — è spegnere i motori. Il silenzio nel deserto profondo è totale, e la sequenza dei colori al tramonto, dall'oro al rosa al viola, dura circa venti minuti e vale la polvere.",
    duration: "1–2 ore in sella · circa 3–4 ore con i trasferimenti e la sosta per il tè",
    where: "Deserto Occidentale",
    bestTime:
      "Dal tardo pomeriggio al tramonto, da ottobre ad aprile. In estate evitate il mezzogiorno.",
    highlights: [
      "Un trasferimento fino al punto di raduno al margine del deserto, nel tardo pomeriggio",
      "Un briefing di sicurezza e un breve giro di prova prima di partire — non si presuppone alcuna esperienza",
      "Guida in colonna dietro una guida di testa, con un chiudifila in fondo",
      "Una sosta in un campo beduino o in un punto panoramico aperto per il tè zuccherato mentre il sole cala",
      "Ritorno in sella o in trasferimento nell'ultima luce",
    ],
    keyFacts: [],
    included: [],
    excluded: [],
    prepare: [],
    goodToKnow: [
      "Occhiali protettivi e un copricapo sono essenziali — la polvere è la vera protagonista della giornata; entrambi sono forniti",
      "Indossate scarpe chiuse, maniche lunghe e abiti che non vi dispiaccia rovinare",
      "Per chi guida da solo valgono limiti minimi di età; i bambini più piccoli di solito siedono dietro a una guida",
      "Sconsigliato in gravidanza o con problemi alla schiena, ai polsi o alle spalle — i quad vibrano molto sul terreno sconnesso",
      "Lenti a contatto e sabbia al vento non vanno d'accordo; meglio gli occhiali sotto gli occhiali protettivi",
    ],
    goodFor: [
      "Viaggiatori amanti dell'avventura",
      "Famiglie con adolescenti",
      "Fotografi del tramonto",
      "Un cambio di ritmo dopo i giorni dedicati ai templi",
    ],
    meetingPoint: "",
    groupSize: "",
    availability: "",
    priceNote: "",
    faqs: [
      {
        q: "Serve esperienza per guidare un quad nel deserto?",
        a: "No. I mezzi sono automatici, il briefing copre tutto ciò che serve e si fa un breve giro di prova prima di partire. Si procede in colonna dietro una guida di testa, con un chiudifila in fondo, a un'andatura adatta al partecipante più lento del gruppo.",
      },
      {
        q: "Che cosa indossare per il quad nel deserto?",
        a: "Scarpe chiuse, maniche lunghe e pantaloni lunghi, più abiti che non vi dispiaccia riempire di polvere — e la polvere è garantita. Occhiali protettivi e copricapo sono forniti e davvero necessari. Se portate lenti a contatto, portate invece gli occhiali: sabbia al vento e lenti sono una cattiva combinazione.",
      },
      {
        q: "Il quad è adatto ai bambini?",
        a: "I bambini più grandi e gli adolescenti di solito guidano, nel rispetto dell'età minima fissata dall'operatore per chi guida da solo; i più piccoli siedono dietro a una guida. Non è adatto in gravidanza né a chi ha problemi alla schiena, ai polsi o alle spalle, perché il percorso è davvero accidentato.",
      },
    ],
    photos: [
      { alt: "Ospiti in quad tra le dune del deserto vicino alle piramidi di Giza", label: "Quad" },
    ],
  },
];
