// ---------------------------------------------------------------------------
// I viaggi in italiano.
//
// Scritto per un lettore italiano, non trasposto parola per parola
// dall'inglese. I toponimi seguono l'uso italiano — Il Cairo, Giza, Assuan,
// Luxor, Abu Simbel, Saqqara, Dahshur, Sharm el-Sheikh, Menfi, Cheope,
// Chefren, Micerino — perché è con questi nomi che questo lettore ha
// incontrato l'Egitto in ogni libro e in ogni documentario della sua vita.
//
// Le righe ripetute — trasferimenti, biglietti d'ingresso, mance — non sono
// qui: vivono una volta per lingua in phrasebook.ts, indicizzate dal loro
// testo inglese. Vedi tours-i18n/types.ts per cosa porta questo file e cosa
// non porta.
// ---------------------------------------------------------------------------
import type { TourText } from "./types";

export const it: TourText[] = [
  {
    slug: "tour-10-day",
    localeSlug: "egitto-essenziale-crociera-nilo",
    metaTitle: "Viaggio in Egitto 10 giorni con crociera sul Nilo | Kemet",
    metaDescription:
      "Dieci giorni in privato: Il Cairo, Alessandria, treno notturno per Assuan e tre notti di crociera fino a Luxor, con il vostro egittologo.",
    keywords: "viaggio egitto 10 giorni, crociera nilo viaggio, viaggio privato egitto, cairo luxor assuan, egitto con crociera",
    crumb: "Essenziale & crociera",
    title: "L'Egitto essenziale & crociera sul Nilo",
    subtitle: "Dieci giorni senza fretta, dalle piramidi di Giza ai templi dell'Alto Egitto, tenuti insieme da tre notti di crociera sul Nilo.",
    durationLabel: "10 giorni / 9 notti",
    startPoint: "Il Cairo (aeroporto o hotel)",
    summary: "Il nostro viaggio più completo: Il Cairo, Alessandria, un treno notturno verso sud e tre notti di crociera da Assuan a Luxor — ogni strato dell'Egitto in un solo arco.",
    overview: "Questo è l'Egitto in tutta la sua ampiezza, con un ritmo pensato per essere vissuto anziché spuntato da un elenco. Si comincia al Cairo con i tesori del Museo Egizio, si passa una giornata sul Mediterraneo ad Alessandria, poi si prende il treno notturno per Assuan. Da lì una crociera di tre notti vi porta a valle oltre Kom Ombo ed Edfu fino a Luxor, dove attendono i templi di Karnak e le tombe reali della riva occidentale. Si torna al Cairo per le piramidi di Giza e i vicoli del Cairo islamico. Il viaggio è privato dall'inizio alla fine, guidato dal vostro egittologo.",
    itinerary: [
      { title: "Il Cairo & il Museo Egizio", items: [
        "Accoglienza privata all'aeroporto internazionale del Cairo",
        "Trasferimento in hotel e incontro di benvenuto",
        "Pomeriggio al Museo Egizio di Tahrir — l'oro reale di Tanis e i capolavori dell'Antico Regno",
      ]},
      { title: "Alessandria, sul Mediterraneo", items: [
        "Strada del deserto fino ad Alessandria",
        "Catacombe di Kom el-Shoqafa e colonna di Pompeo",
        "Cittadella di Qaitbay sul sito del Faro e la moderna Bibliotheca Alexandrina",
        "Pranzo di pesce sul lungomare prima del rientro al Cairo",
      ]},
      { title: "Il Cairo copto & treno notturno per Assuan", items: [
        "Chiesa Sospesa, Abu Serga e i vicoli del Cairo Vecchio",
        "Trasferimento in stazione nel primo serale",
        "Treno notturno verso Assuan, cabine private e cena a bordo",
      ]},
      { title: "Assuan & imbarco", items: [
        "Arrivo ad Assuan, visita alla Grande Diga e all'obelisco incompiuto",
        "In barca al tempio sull'isola di File, dedicato a Iside",
        "Imbarco sulla motonave e pranzo sul fiume",
      ]},
      { title: "Navigazione verso Kom Ombo & Edfu", items: [
        "Mattinata di navigazione a valle attraverso la valle del Nilo",
        "Kom Ombo, il tempio doppio di Sobek e Haroeris",
        "Si prosegue per Edfu e il grande tempio di Horus, il meglio conservato d'Egitto",
      ]},
      { title: "Chiusa di Esna & arrivo a Luxor", items: [
        "Passaggio della chiusa di Esna, dove la valle si apre",
        "Arrivo a Luxor nel pomeriggio, tempo per riposare a bordo",
        "Facoltativo: serata di suoni e luci a Karnak (supplemento)",
      ]},
      { title: "Luxor, riva orientale", items: [
        "Karnak, il più vasto complesso templare del mondo antico",
        "Il tempio di Luxor nel cuore della città",
        "Sbarco e trasferimento al vostro hotel di Luxor",
      ]},
      { title: "Riva occidentale & treno per Il Cairo", items: [
        "Valle dei Re e le colline scavate di tombe di Tebe",
        "Tempio funerario di Hatshepsut e colossi di Memnone",
        "Treno notturno di rientro al Cairo in serata",
      ]},
      { title: "Giza & Saqqara", items: [
        "Le piramidi di Cheope, Chefren e Micerino e la Grande Sfinge",
        "Piramide a gradoni di Djoser a Saqqara, il più antico monumento in pietra al mondo",
        "Punto panoramico sulla piana di Giza",
      ]},
      { title: "Il Cairo islamico & partenza", items: [
        "Cittadella di Saladino e moschea di alabastro di Mohammed Ali",
        "Bazar di Khan el-Khalili per un'ultima passeggiata",
        "Trasferimento privato in aeroporto",
      ]},
    ],
    comfort: {
      sleep: "Hotel al Cairo e a Luxor, tre notti sulla motonave e due notti in treno con cuccetta — hotel al loro posto nella versione con voli",
      drives: "Un'escursione dal Cairo ad Alessandria e ritorno su strada",
    },
    faqs: [
      { q: "La crociera è privata?", a: "Viaggiate con il vostro egittologo e con trasferimenti privati, ma la motonave è condivisa con altri ospiti. La cabina è vostra e tutte le visite si svolgono in privato." },
      { q: "Come funzionano i treni notturni?", a: "Avete una cabina con cuccette privata, cena e colazione servite a bordo. Si evita una giornata di trasferimento e si arriva riposati per le visite del mattino." },
      { q: "Si può aggiungere Abu Simbel?", a: "Sì. Abu Simbel è proposto come supplemento da Assuan, con volo breve o auto privata, e si inserisce al meglio nella giornata di Assuan. Lo organizziamo su richiesta." },
      { q: "Qual è il periodo migliore?", a: "Da ottobre ad aprile le temperature sono piacevoli sia al Cairo sia in Alto Egitto. D'estate il sud è caldo: partiamo presto e riposiamo nel pomeriggio." },
    ],
  },

  {
    slug: "tour-7-day",
    localeSlug: "egitto-7-giorni",
    metaTitle: "Viaggio in Egitto 7 giorni — Cairo, Alessandria, Luxor | Kemet",
    metaDescription:
      "Una settimana in privato: il Museo Egizio, Alessandria, i templi e le tombe di Luxor e le piramidi di Giza.",
    keywords: "viaggio egitto 7 giorni, egitto una settimana, cairo luxor viaggio, viaggio privato egitto settimana, alessandria escursione",
    crumb: "Egitto in 7 giorni",
    title: "L'Egitto essenziale, in una settimana",
    subtitle: "Una settimana che raccoglie l'essenziale — Il Cairo, Alessandria e Luxor — con le notti in treno cuccetta a fare da cerniera.",
    durationLabel: "7 giorni / 6 notti",
    startPoint: "Il Cairo (aeroporto o hotel)",
    summary: "I grandi nomi dell'Egitto in sette giorni — il Museo Egizio, Alessandria, i templi e le tombe di Luxor e le piramidi di Giza.",
    overview: "Per chi ha una settimana, questo viaggio distilla l'Egitto nelle sue pagine più belle senza sbrigarle. Il Cairo si apre con il Museo Egizio; una giornata intera sul Mediterraneo va ad Alessandria; poi il treno notturno vi porta a Luxor, ai templi dei vivi e alle tombe dei morti. Si risale a nord per le piramidi di Giza, Saqqara e il cuore medievale del Cairo islamico. Privato dall'inizio alla fine, con il vostro egittologo e hotel a quattro o cinque stelle.",
    itinerary: [
      { title: "Il Cairo & il Museo Egizio", items: [
        "Accoglienza privata in aeroporto e trasferimento in hotel",
        "Pomeriggio al Museo Egizio di Tahrir",
        "Presentazione del programma con la vostra guida in serata",
      ]},
      { title: "Giornata ad Alessandria", items: [
        "Strada verso la costa mediterranea",
        "Catacombe di Kom el-Shoqafa, colonna di Pompeo e cittadella di Qaitbay",
        "Bibliotheca Alexandrina e pranzo di pesce sul lungomare",
      ]},
      { title: "Il Cairo copto & treno notturno per Luxor", items: [
        "Chiesa Sospesa e Cairo Vecchio in mattinata",
        "Trasferimento in stazione in serata",
        "Treno notturno verso sud, cabine private",
      ]},
      { title: "Luxor, riva orientale", items: [
        "Complesso di Karnak e viale delle sfingi",
        "Il tempio di Luxor nel cuore della città",
        "Sistemazione nel vostro hotel di Luxor",
      ]},
      { title: "Riva occidentale & treno per Il Cairo", items: [
        "Valle dei Re e tempio funerario di Hatshepsut",
        "Colossi di Memnone",
        "Treno notturno di rientro al Cairo in serata",
      ]},
      { title: "Giza & Saqqara", items: [
        "Piramidi di Giza e Grande Sfinge",
        "Piramide a gradoni di Djoser a Saqqara",
        "Punto panoramico sulla piana",
      ]},
      { title: "Il Cairo islamico & partenza", items: [
        "Cittadella di Saladino e moschea di Mohammed Ali",
        "Bazar di Khan el-Khalili",
        "Trasferimento privato in aeroporto",
      ]},
    ],
    comfort: {
      sleep: "Hotel al Cairo e a Luxor e due notti in treno con cuccetta — hotel al loro posto nella versione con voli",
      drives: "Un'escursione dal Cairo ad Alessandria e ritorno su strada",
    },
    faqs: [
      { q: "Quanto si cammina?", a: "Il giusto: complessi come Karnak richiedono un'ora o due a piedi su terreno irregolare. Calibriamo il ritmo di ogni giornata e riposiamo nelle ore calde." },
      { q: "I treni notturni sono comodi?", a: "Sì. Avete una cabina con cuccette privata, cena e colazione servite a bordo: i tragitti lunghi avvengono mentre dormite." },
      { q: "Si può prolungare con una crociera?", a: "Certamente — molti ospiti aggiungono tre o quattro notti tra Assuan e Luxor. Diteci le date e inseriamo il prolungamento." },
    ],
  },

  {
    slug: "tour-grand-14day",
    localeSlug: "gran-tour-egitto-14-giorni",
    metaTitle: "Gran tour dell'Egitto, 14 giorni con Mar Rosso | Kemet",
    metaDescription:
      "Quattordici giorni in privato: Il Cairo, Alessandria, Abu Simbel, tre notti di crociera e quattro giorni sul Mar Rosso. Voli interni inclusi.",
    keywords: "gran tour egitto, viaggio egitto 14 giorni, egitto e mar rosso, abu simbel viaggio, egitto due settimane",
    crumb: "Gran tour, 14 giorni",
    title: "Il gran tour dell'Egitto",
    subtitle: "Quattordici giorni, tutti i registri del paese — Il Cairo, Alessandria, il Nilo in crociera, Abu Simbel e il Mar Rosso per finire.",
    durationLabel: "14 giorni / 13 notti",
    startPoint: "Il Cairo (aeroporto o hotel)",
    summary: "Il nostro viaggio più completo: due capitali, una crociera sul Nilo, il tempio di montagna di Ramesse II ad Abu Simbel e quattro giorni sul Mar Rosso per lasciar sedimentare tutto.",
    overview: "È l'itinerario di chi conta di venire una volta e vedere tutto. La prima settimana appartiene alla storia: i due grandi musei del Cairo e i suoi quartieri medievali, Alessandria sul Mediterraneo, poi un volo a sud per Abu Simbel — il tempio di montagna di Ramesse II sopra il lago Nasser — prima che una crociera di tre notti vi porti da Assuan a Luxor. La seconda settimana cambia registro del tutto: dopo le tombe e i templi di Luxor si vola a Sharm el-Sheikh, dove il deserto incontra una delle acque più limpide del pianeta. Quattro giorni sul Mar Rosso chiudono il viaggio, con lo snorkeling sulle barriere di Ras Mohammed e nulla in programma che non possa essere annullato in favore della piscina. Tutti i voli interni sono inclusi; ogni giornata guidata è privata.",
    itinerary: [
      { title: "Arrivo al Cairo", items: [
        "Accoglienza privata in aeroporto e trasferimento in hotel",
        "Presentazione del viaggio con il vostro consulente in serata",
      ]},
      { title: "Giza & il Grand Egyptian Museum", items: [
        "Le piramidi, il panorama e la Sfinge nel fresco del mattino",
        "Il tesoro completo di Tutankhamon al GEM",
      ]},
      { title: "Il Cairo islamico & copto", items: [
        "La Cittadella e la moschea di alabastro di Mohammed Ali",
        "La Chiesa Sospesa e i vicoli del Cairo Vecchio",
        "Khan el-Khalili all'imbrunire",
      ]},
      { title: "Giornata ad Alessandria", items: [
        "Catacombe di Kom el-Shoqafa e colonna di Pompeo",
        "Cittadella di Qaitbay sul sito del Faro",
        "Pranzo di pesce sulla corniche; rientro al Cairo",
      ]},
      { title: "Volo a sud — Assuan", items: [
        "Volo mattutino per Assuan",
        "File in barca e l'obelisco incompiuto",
        "Serata libera sulla corniche",
      ]},
      { title: "Abu Simbel", items: [
        "Strada all'alba verso Abu Simbel",
        "Il grande tempio di Ramesse II e il tempio di Nefertari",
        "Rientro ad Assuan; feluca nell'ora d'oro",
      ]},
      { title: "Imbarco per la crociera", items: [
        "Mattinata libera; imbarco prima di pranzo",
        "Partenza nel pomeriggio",
      ]},
      { title: "Kom Ombo & Edfu", items: [
        "Il tempio doppio di Sobek e Haroeris",
        "Edfu — il tempio meglio conservato d'Egitto",
      ]},
      { title: "Arrivo a Luxor", items: [
        "Attraverso la chiusa di Esna verso Tebe",
        "Il tempio di Luxor illuminato in serata (facoltativo)",
      ]},
      { title: "Luxor — entrambe le rive", items: [
        "Karnak all'apertura con il vostro egittologo",
        "Valle dei Re e tempio di Hatshepsut",
        "Sbarco verso il vostro hotel di Luxor",
      ]},
      { title: "Volo sul Mar Rosso", items: [
        "Volo mattutino per Sharm el-Sheikh",
        "Check-in; il programma finisce qui, di proposito",
      ]},
      { title: "Le barriere di Ras Mohammed", items: [
        "Giornata in barca nel parco nazionale — due soste di snorkeling sopra pareti di corallo",
        "Pranzo a bordo",
      ]},
      { title: "Mar Rosso, giornata libera", items: [
        "Una giornata libera — immersioni, spa o semplicemente il mare",
        "Cena d'addio al Vecchio Mercato di Sharm",
      ]},
      { title: "Partenza", items: ["Volo per Il Cairo in coincidenza con il vostro volo internazionale"] },
    ],
    comfort: {
      sleep: "Hotel al Cairo e ad Assuan, tre notti sulla motonave, un hotel a Luxor, poi un resort sul Mar Rosso",
      drives: "Un'escursione ad Alessandria, e Assuan–Abu Simbel andata e ritorno su strada",
      early: "Una partenza prima dell'alba per Abu Simbel",
    },
    faqs: [
      { q: "Quattordici giorni sono troppi per un primo viaggio?", a: "È la durata che la maggior parte di chi torna avrebbe voluto prenotare la prima volta. Sono proprio le giornate sul Mar Rosso a rendere sostenibile la settimana di storia: il viaggio respira invece di accumulare stanchezza." },
      { q: "Quanto si vola in questo viaggio?", a: "Tre voli interni di circa un'ora ciascuno, che sostituiscono quelle che sarebbero dodici ore di strada o di treno. L'unico lungo tragitto che manteniamo — Assuan–Abu Simbel — fa parte dell'esperienza: deserto aperto all'alba." },
      { q: "Si può scambiare o prolungare la parte sul Mar Rosso?", a: "Liberamente. Alcuni la scambiano con notti in più a Luxor o con Siwa, altri allungano Sharm a una settimana intera. I primi dieci giorni sono la spina dorsale; il finale è vostro." },
    ],
  },

  {
    slug: "tour-cairo-vip-3day",
    localeSlug: "il-cairo-vip-3-giorni",
    metaTitle: "Il Cairo in 3 giorni, VIP — piramidi e GEM | Kemet",
    metaDescription:
      "Tre giorni al Cairo senza attriti: corsia prioritaria all'arrivo, mattinata privata sulla piana, il GEM e il Cairo islamico tra le lanterne.",
    keywords: "il cairo 3 giorni, scalo il cairo, grand egyptian museum visita, cairo privato guida, viaggio breve cairo",
    crumb: "Il Cairo VIP, 3 giorni",
    title: "Il Cairo VIP, viaggio breve",
    subtitle: "Tre giorni, zero attriti — corsia prioritaria all'arrivo, le piramidi e i due grandi musei, e il Cairo medievale quando i gitanti se ne sono andati.",
    durationLabel: "3 giorni / 2 notti",
    startPoint: "Il Cairo (aeroporto, accoglienza VIP)",
    summary: "Il Cairo essenziale, gestito come una concierge: corsia prioritaria all'immigrazione, mattinata privata sulla piana, il Grand Egyptian Museum e il Cairo islamico illuminato a lanterne.",
    overview: "Pensato per chi passa dal Cairo con poco tempo e si rifiuta di viverlo male, questo viaggio breve condensa l'essenziale senza mai dare l'impressione di essere condensato. Vi accogliamo lato pista, con corsia prioritaria all'immigrazione e gestione dei bagagli. La mattinata a Giza è presto e privata; il Grand Egyptian Museum segue mentre la folla si accalca altrove sulla piana. L'ultima sera appartiene al Cairo medievale nella sua ora migliore — via al-Muizz e il Khan el-Khalili dopo il tramonto, quando le lanterne subentrano ai gruppi. Un autista e un egittologo dedicati restano con voi, e il programma si piega ora per ora a come vi sentite davvero.",
    itinerary: [
      { title: "Arrivo VIP & la Cittadella", items: [
        "Accoglienza lato pista, corsia prioritaria e trasferimento privato",
        "Pomeriggio alla cittadella di Saladino e alla moschea di Mohammed Ali",
        "Tramonto sulla città vecchia dal parco al-Azhar",
      ]},
      { title: "Giza & il Grand Egyptian Museum", items: [
        "La piana all'apertura — piramidi, panorama e Sfinge",
        "La grande scalinata e le gallerie di Tutankhamon del GEM dopo pranzo",
        "Serata libera, con le nostre prenotazioni al ristorante se lo desiderate",
      ]},
      { title: "Il Cairo medievale & partenza", items: [
        "Il Museo Egizio di Tahrir oppure il Cairo copto — a vostra scelta",
        "Via al-Muizz e Khan el-Khalili quando si accendono le lanterne",
        "Assistenza prioritaria alla partenza in aeroporto",
      ]},
    ],
    comfort: { sleep: "Entrambe le notti in un hotel del Cairo" },
    faqs: [
      { q: "Cosa comprende esattamente il servizio VIP in aeroporto?", a: "Vi accogliamo alla porta dell'aereo o al finger, vi accompagniamo in una corsia prioritaria all'immigrazione e portiamo i bagagli fino all'auto. Alla partenza la stessa squadra gestisce check-in e controlli al contrario. L'aeroporto del Cairo smette di essere una seccatura." },
      { q: "Il programma si adatta se arrivo tardi o con il fuso?", a: "Completamente. L'ordine qui sopra è l'impostazione predefinita, non un contratto: la vostra guida lo riorganizza in base alla vostra energia, e scambiare le giornate non fa perdere nulla." },
      { q: "Due notti bastano per Il Cairo?", a: "Bastano per l'essenziale fatto bene, che è ciò che questo itinerario promette. Se potete aggiungere una terza notte, la giornata Saqqara–Dahshur è l'integrazione più forte." },
    ],
  },

  {
    slug: "tour-luxor-3day",
    localeSlug: "luxor-3-giorni",
    metaTitle: "Luxor in 3 giorni, privato — entrambe le rive | Kemet",
    metaDescription:
      "Tre giorni a Luxor senza fretta: Karnak all'apertura, la Valle dei Re prima del caldo, Hatshepsut e il tempio illuminato.",
    keywords: "luxor 3 giorni, valle dei re visita, karnak tempio luxor, luxor viaggio privato, viaggio breve luxor",
    crumb: "Luxor, 3 giorni",
    title: "Luxor, con calma",
    subtitle: "Tre giorni nel più grande museo a cielo aperto del mondo — entrambe le rive fatte per bene, con il tempio illuminato di notte come perno.",
    durationLabel: "3 giorni / 2 notti",
    startPoint: "Luxor (aeroporto, stazione o hotel)",
    summary: "Luxor senza corsa: Karnak all'apertura, la Valle dei Re prima del caldo, le terrazze di Hatshepsut e il viale delle sfingi dopo il tramonto.",
    overview: "A Luxor si concede di solito una sola giornata frenetica; la città conserva più monumenti di tutto il resto del paese messo insieme. Questo viaggio breve restituisce il tempo mancante. La giornata sulla riva orientale prende Karnak all'apertura — un'ora prima dei pullman — e torna dopo il tramonto per il tempio di Luxor illuminato, raggiunto lungo il viale delle sfingi restaurato, che ne fa semplicemente un altro monumento. La giornata sulla riva occidentale scende in tre tombe reali scelte per il colore e per l'afflusso del giorno, poi raggiunge le terrazze scavate di Hatshepsut e i colossi di Memnone. L'ultima mattina è vostra: una mongolfiera all'alba sopra la necropoli, l'ottimo museo di Luxor, o niente del tutto. Si innesta con pulizia prima o dopo qualsiasi itinerario cairota, in aereo o in treno notturno.",
    itinerary: [
      { title: "La riva orientale & il tempio di notte", items: [
        "Accoglienza all'aeroporto o alla stazione di Luxor",
        "Complesso di Karnak all'apertura, con il vostro egittologo",
        "In serata: il tempio di Luxor illuminato, raggiunto lungo il viale delle sfingi",
      ]},
      { title: "La riva occidentale", items: [
        "Valle dei Re — tre tombe prima del caldo della giornata",
        "Il tempio funerario di Hatshepsut a Deir el-Bahari",
        "Colossi di Memnone e il villaggio degli artigiani di Deir el-Medina (tempo permettendo)",
      ]},
      { title: "La vostra mattinata a Luxor & partenza", items: [
        "Facoltativo: mongolfiera all'alba, oppure la raccolta scelta del museo di Luxor",
        "Trasferimento privato all'aeroporto o alla stazione",
      ]},
    ],
    comfort: {
      sleep: "Entrambe le notti in un hotel di Luxor",
      early: "Solo se scegliete la mongolfiera dell'ultima mattina",
    },
    faqs: [
      { q: "Quali tombe sono incluse nella Valle dei Re?", a: "Il biglietto standard ne copre tre tra quelle aperte quel giorno, e la vostra guida vi orienterà verso le meglio dipinte del momento. Tutankhamon, Seti I e Ramesse V/VI richiedono biglietti separati che possiamo prenotare in anticipo." },
      { q: "Vale la pena la visita serale al tempio di Luxor?", a: "È la serata più ripagante d'Egitto. L'illuminazione restituisce colore e profondità che il sole di mezzogiorno cancella, e il viale delle sfingi illuminato da un capo all'altro non si dimentica." },
      { q: "Come lo combino con Il Cairo?", a: "In aereo (55 minuti) o in treno notturno, in entrambe le direzioni. La maggior parte degli ospiti fa prima Il Cairo e usa questo viaggio come capitolo meridionale; sincronizziamo i trasferimenti in ogni caso." },
    ],
  },

  {
    slug: "tour-4-day",
    localeSlug: "cairo-alessandria-4-giorni",
    metaTitle: "Il Cairo & Alessandria, 4 giorni in privato | Kemet",
    metaDescription: "Quattro giorni nel nord dell'Egitto: Museo Egizio, una giornata intera ad Alessandria, le piramidi di Giza e il Cairo islamico.",
    keywords: "cairo alessandria viaggio, egitto 4 giorni, viaggio breve cairo piramidi, escursione alessandria, viaggio privato egitto breve",
    crumb: "Il Cairo & Alessandria",
    title: "Dalle piramidi al mare",
    subtitle: "Quattro giorni che uniscono i monumenti del Cairo e di Giza a una giornata mediterranea ad Alessandria.",
    durationLabel: "4 giorni / 3 notti",
    startPoint: "Il Cairo (aeroporto o hotel)",
    summary: "Un viaggio compatto nel nord — il Museo Egizio, gli strati greco-romani di Alessandria, le piramidi di Giza e il Cairo medievale.",
    overview: "Pochi giorni ma grande ampiezza: questo viaggio breve affianca i monumenti fondativi dell'Antico Regno alla cosmopolita Alessandria. Si comincia dal Museo Egizio, si passa una giornata intera tra catacombe e cittadella ad Alessandria, poi si concede a Giza e Saqqara la luce del mattino che meritano prima di chiudere nei vicoli del Cairo islamico. Ideale come viaggio a sé o come prima metà di un itinerario più lungo.",
    itinerary: [
      { title: "Arrivo & il Museo Egizio", items: [
        "Accoglienza privata in aeroporto e trasferimento in hotel",
        "Pomeriggio al Museo Egizio di Tahrir",
        "Consigli per la cena dalla vostra guida",
      ]},
      { title: "Giornata ad Alessandria", items: [
        "Catacombe di Kom el-Shoqafa",
        "Cittadella di Qaitbay e Bibliotheca Alexandrina",
        "Colonna di Pompeo e pranzo di pesce sul lungomare",
      ]},
      { title: "Giza & Saqqara", items: [
        "Piramidi di Giza e Grande Sfinge",
        "Piramide a gradoni di Djoser a Saqqara",
        "Menfi, prima capitale dell'Egitto unificato",
      ]},
      { title: "Il Cairo islamico & partenza", items: [
        "Cittadella di Saladino e moschea di Mohammed Ali",
        "Bazar di Khan el-Khalili",
        "Trasferimento privato in aeroporto",
      ]},
    ],
    comfort: { sleep: "Tutte e tre le notti in un hotel del Cairo", drives: "Un'escursione dal Cairo ad Alessandria e ritorno su strada" },
    faqs: [
      { q: "Quattro giorni bastano per Il Cairo e Alessandria?", a: "Sì — l'itinerario è costruito per coprire l'essenziale di entrambe senza fretta, con una giornata intera per Alessandria e una mattinata completa per la piana di Giza." },
      { q: "Si può aggiungere Luxor o una crociera?", a: "Facilmente. Questo viaggio è una prima metà naturale; aggiungiamo un volo o un treno notturno per Luxor e Assuan non appena avete più giorni." },
      { q: "Quanto dura il tragitto per Alessandria?", a: "Circa due ore e mezza o tre per tratta sulla strada del deserto, in veicolo privato con aria condizionata e con la vostra guida." },
    ],
  },

  {
    slug: "tour-3-day",
    localeSlug: "luxor-assuan-3-giorni-voli-inclusi",
    metaTitle: "Luxor & Assuan in 3 giorni, voli inclusi | Kemet",
    metaDescription: "Tre giorni in Alto Egitto dal Cairo con i voli interni nel prezzo: Karnak, Valle dei Re, Grande Diga e il tempio di File.",
    keywords: "luxor assuan 3 giorni, alto egitto viaggio breve, egitto volo interno incluso, karnak valle dei re file, cairo luxor aereo",
    crumb: "Luxor & Assuan, 3 giorni",
    title: "Dal Cairo a Luxor e Assuan",
    subtitle: "Tre giorni di templi e tombe dell'Alto Egitto, con i voli interni compresi nel prezzo.",
    durationLabel: "3 giorni / 2 notti",
    startPoint: "Il Cairo (voli inclusi)",
    summary: "Un anello rapido per Luxor e Assuan con i voli inclusi — Karnak, la Valle dei Re, File e la Grande Diga, in partenza dal Cairo e ritorno.",
    overview: "Quando il tempo è poco ma l'Alto Egitto è la vera ragione del viaggio, questo anello con i voli consegna i grandi nomi del sud in tre giornate concentrate. Si vola dal Cairo a Luxor per i templi della riva orientale e le tombe reali della riva occidentale, si prosegue verso Assuan per la Grande Diga e il tempio sull'isola di File, poi si rivola al Cairo. Con i voli interni inclusi le grandi distanze spariscono e le giornate restano piene di monumenti anziché di trasferimenti.",
    itinerary: [
      { title: "Volo per Luxor — la riva orientale", items: [
        "Volo mattutino Il Cairo–Luxor, accoglienza all'arrivo",
        "Complesso di Karnak",
        "Tempio di Luxor e pernottamento a Luxor",
      ]},
      { title: "Riva occidentale & verso Assuan", items: [
        "Valle dei Re e tempio funerario di Hatshepsut",
        "Colossi di Memnone",
        "Strada lungo il Nilo verso Assuan e pernottamento",
      ]},
      { title: "Assuan & volo per Il Cairo", items: [
        "Grande Diga di Assuan e obelisco incompiuto",
        "Tempio sull'isola di File in barca",
        "Volo di rientro al Cairo nel pomeriggio",
      ]},
    ],
    comfort: { sleep: "Un hotel a Luxor, poi uno ad Assuan", drives: "Luxor–Assuan su strada" },
    faqs: [
      { q: "I voli interni sono davvero inclusi?", a: "Sì — sia Il Cairo–Luxor sia Assuan–Il Cairo fanno parte del prezzo. Dovete organizzare solo i vostri voli internazionali da e per Il Cairo." },
      { q: "Tre giorni sono troppo pochi?", a: "È intenso ma ben sequenziato: i voli eliminano i lunghi tragitti su strada, così ogni giornata si passa ai monumenti e non tra l'uno e l'altro." },
      { q: "Si può aggiungere Abu Simbel da Assuan?", a: "Sì, come supplemento con volo mattutino o auto privata. Allunga di qualche ora la mattinata ad Assuan, quindi lo pianifichiamo in anticipo." },
    ],
  },

  {
    slug: "tour-alexandria-2day",
    localeSlug: "alessandria-con-pernottamento",
    metaTitle: "Alessandria con pernottamento, 2 giorni dal Cairo | Kemet",
    metaDescription: "Due giorni mediterranei: catacombe, cittadella sul sito del Faro, la nuova Biblioteca — e la serata che le gite in giornata non vedono mai.",
    keywords: "alessandria pernottamento, alessandria dal cairo, alessandria 2 giorni, catacombe kom el shoqafa, bibliotheca alexandrina",
    crumb: "Alessandria, una notte",
    title: "Alessandria, con una notte",
    subtitle: "Due giorni mediterranei — le catacombe, la cittadella sul sito del Faro, la Biblioteca rinata, e una serata che i gitanti non vedono mai.",
    durationLabel: "2 giorni / 1 notte",
    startPoint: "Il Cairo (prelievo in hotel)",
    summary: "Alessandria con la sua metà mancante: i siti greco-romani di giorno, poi la corniche al crepuscolo, il pesce in riva al mare e la luce del mattino che nessuna gita riesce a cogliere.",
    overview: "Alessandria in giornata è uno sprint rispettabile; Alessandria con una notte è un'altra città. Questo viaggio fa il giro essenziale per bene — le catacombe di Kom el-Shoqafa su tre livelli, la colonna di Pompeo, la cittadella di Qaitbay posata esattamente sull'impronta dell'antico faro, e la Bibliotheca Alexandrina — e poi resta per le ore che danno senso alla città: la passeggiata sulla corniche al crepuscolo, il pesce scelto a peso in un'istituzione sul mare, e una mattinata lenta tra i giardini del palazzo di Montazah e l'anfiteatro romano prima di un rientro senza fretta al Cairo. Il ritmo mediterraneo è proprio il punto; una notte qui ritara un intero itinerario egiziano.",
    itinerary: [
      { title: "La città antica", items: [
        "Strada del deserto dal Cairo in mattinata",
        "Catacombe di Kom el-Shoqafa e colonna di Pompeo",
        "La cittadella di Qaitbay e la Bibliotheca Alexandrina",
        "Crepuscolo sulla corniche e cena di pesce in riva al mare",
      ]},
      { title: "Palazzi, Romani & rientro", items: [
        "I giardini del palazzo di Montazah nell'aria marina del mattino",
        "L'anfiteatro romano di Kom el-Dikka",
        "Rientro tranquillo al Cairo nel tardo pomeriggio",
      ]},
    ],
    comfort: { sleep: "Una notte in un hotel fronte mare ad Alessandria", drives: "Il Cairo–Alessandria andata e ritorno su strada" },
    faqs: [
      { q: "Perché pernottare invece della gita in giornata?", a: "Il viaggio è di cinque o sei ore andata e ritorno; come gita, di Alessandria resta solo il mezzogiorno. Il pernottamento vi mette lì per il crepuscolo, la cena e la luce del mattino — le tre ore migliori della città — con un sovrapprezzo modesto." },
      { q: "Qual è la stagione migliore?", a: "Da aprile a ottobre, quando il clima mediterraneo è tutto il punto. D'estate la città sta 5–10 °C sotto Il Cairo e diventa la località balneare degli egiziani." },
      { q: "Il pesce è davvero da provare?", a: "Assolutamente. Si sceglie a peso dal banco del ghiaccio del giorno e arriva grigliato o fritto con i contorni alessandrini. La vostra guida sa quali istituzioni della corniche meritano la loro fama." },
    ],
  },

  {
    slug: "tour-upper-egypt-5day",
    localeSlug: "alto-egitto-5-giorni",
    metaTitle: "Alto Egitto in 5 giorni — Luxor, Edfu, Assuan | Kemet",
    metaDescription: "Cinque giorni in Alto Egitto su strada, in privato: entrambe le rive di Luxor, Edfu e Kom Ombo lungo il cammino, poi File e le isole di Assuan.",
    keywords: "alto egitto viaggio, luxor assuan 5 giorni, edfu kom ombo, egitto senza crociera, templi alto egitto",
    crumb: "Alto Egitto, 5 giorni",
    title: "I templi del Sud",
    subtitle: "Cinque giorni senza fretta attraverso l'Alto Egitto — entrambe le rive di Luxor, la strada verso sud per Edfu e Kom Ombo, e le isole di Assuan.",
    durationLabel: "5 giorni / 4 notti",
    startPoint: "Luxor (hotel, stazione o aeroporto)",
    summary: "Il cuore storico dell'Egitto in viaggio privato su strada — Karnak, la Valle dei Re, Edfu, Kom Ombo e File, con il tempo di assorbirli davvero.",
    overview: "L'Alto Egitto concentra la densità di monumenti più alta del paese, e la maggior parte degli itinerari lo attraversa di corsa. Questo no. Due giornate piene a Luxor separano i templi della riva orientale dalla necropoli della riva occidentale, così nessuna delle due viene liquidata. La strada verso sud diventa allora parte del viaggio anziché un trasferimento: Edfu e Kom Ombo spezzano il percorso esattamente dove il traffico fluviale antico faceva sosta. Assuan chiude il viaggio su un registro più dolce — File in barca, le cave di granito, e un'ora di feluca a vela prima dell'aereo o del treno. Hotel a quattro e cinque stelle per tutto il viaggio, egittologo privato dal primo all'ultimo giorno.",
    itinerary: [
      { title: "Arrivo a Luxor & la riva orientale", items: [
        "Accoglienza privata all'aeroporto o alla stazione di Luxor",
        "Complesso di Karnak — la grande sala ipostila nella luce del pomeriggio",
        "Il tempio di Luxor al crepuscolo, quando si accendono i fari",
      ]},
      { title: "La riva occidentale per intero", items: [
        "Valle dei Re — tre tombe reali con il vostro egittologo",
        "Il tempio funerario a terrazze di Hatshepsut a Deir el-Bahari",
        "Colossi di Memnone e rientro per le strade dei villaggi della piana",
      ]},
      { title: "Verso sud — Edfu & Kom Ombo", items: [
        "Strada mattutina verso Edfu e il tempio di Horus, il meglio conservato d'Egitto",
        "Il santuario doppio di Kom Ombo sopra un'ansa del Nilo",
        "Arrivo ad Assuan nel tardo pomeriggio; serata libera sulla corniche",
      ]},
      { title: "Assuan — File & il fiume", items: [
        "Grande Diga e obelisco incompiuto nella cava di granito",
        "In barca al tempio sull'isola di File",
        "Feluca nell'ora d'oro tra le isole della prima cateratta",
      ]},
      { title: "Partenza — o Abu Simbel", items: [
        "Mattinata libera, oppure escursione mattutina facoltativa ad Abu Simbel",
        "Trasferimento privato all'aeroporto o alla stazione di Assuan",
      ]},
    ],
    comfort: {
      sleep: "Un hotel a Luxor, poi uno ad Assuan",
      drives: "Luxor–Assuan su strada, con soste a Edfu e Kom Ombo",
      early: "Solo se scegliete l'escursione ad Abu Simbel l'ultimo giorno",
    },
    faqs: [
      { q: "Perché andare da Luxor ad Assuan su strada invece che in crociera?", a: "La strada permette Edfu e Kom Ombo senza sottostare all'orario fisso di una motonave, e lascia ogni notte una vera camera d'albergo. Se preferite navigare, la nostra crociera Nilo in Grande copre lo stesso corridoio via acqua." },
      { q: "Abu Simbel è incluso?", a: "Non di base — ma si inserisce con pulizia l'ultimo giorno come escursione mattutina da Assuan, in auto privata o con volo breve. Ditecelo alla prenotazione così blocchiamo gli orari." },
      { q: "Come raggiungo Luxor per iniziare?", a: "Con volo EgyptAir dal Cairo (55 minuti) o con il treno notturno. Entrambi si aggiungono senza difficoltà; il viaggio comincia appena atterrate." },
    ],
  },

  {
    slug: "tour-honeymoon-9day",
    localeSlug: "viaggio-di-nozze-nilo-9-giorni",
    metaTitle: "Viaggio di nozze in Egitto, 9 giorni sul Nilo | Kemet",
    metaDescription: "Nove giorni in due: alba privata alle piramidi, feluca nell'ora d'oro, tre notti sul Nilo e suite scelte per la vista.",
    keywords: "viaggio di nozze egitto, luna di miele nilo, egitto romantico, crociera nilo in due, honeymoon egitto",
    crumb: "Viaggio di nozze, 9 giorni",
    title: "Viaggio di nozze sul Nilo",
    subtitle: "Nove giorni fatti per due — i grandi nomi del Cairo, tre notti di crociera, le isole di Assuan e lunghe serate dorate senza nulla che incalzi.",
    durationLabel: "9 giorni / 8 notti",
    startPoint: "Il Cairo (aeroporto o hotel)",
    summary: "L'Egitto come dovrebbe essere un viaggio di nozze — alba privata alle piramidi, feluca nell'ora d'oro, tre notti sul Nilo e suite scelte per la vista.",
    overview: "Un viaggio di nozze non è un itinerario qualsiasi con i petali di rosa. Il ritmo è diverso: partenze più tarde, serate più lunghe, un momento forte al giorno anziché quattro. Questo viaggio si apre al Cairo con il Museo Egizio e un'alba privata a Giza prima che la piana apra. Si vola ad Assuan — la città più dolce e romantica del fiume — per una feluca privata nell'ora d'oro e una cena sopra la cateratta. Una crociera di tre notti vi porta a Luxor passando per Kom Ombo ed Edfu, con una mongolfiera all'alba sulle colline tebane come immagine finale. Hotel e cabine sono scelti per la vista sul Nilo, e ogni guida sa che questo è un viaggio di nozze e non una marcia forzata.",
    itinerary: [
      { title: "Arrivo al Cairo", items: [
        "Accoglienza privata in aeroporto e trasferimento in una suite con vista sul Nilo",
        "Serata libera — consigli per la cena dal vostro consulente",
      ]},
      { title: "Alba a Giza & il museo", items: [
        "Accesso privato anticipato alla piana di Giza all'alba, prima dell'apertura",
        "Colazione tarda, poi il Grand Egyptian Museum con i vostri tempi",
        "Riposo nel pomeriggio; aperitivo in feluca sul Nilo del Cairo in serata",
      ]},
      { title: "Volo ad Assuan", items: [
        "Volo mattutino verso sud",
        "File — il tempio sull'isola di Iside, dea dell'amore, in barca",
        "Feluca al tramonto tra le isole di granito; cena su una terrazza nubiana",
      ]},
      { title: "Assuan & imbarco", items: [
        "Mattinata lenta — l'isola botanica o il souk, come preferite",
        "Imbarco prima di pranzo",
        "Partenza nel pomeriggio, sul ponte sole",
      ]},
      { title: "Kom Ombo & Edfu", items: [
        "Il tempio doppio di Kom Ombo nella luce del mattino",
        "Il tempio di Horus a Edfu nel pomeriggio",
        "Cena a bordo mentre la nave ormeggia per la notte",
      ]},
      { title: "Chiusa di Esna & arrivo a Luxor", items: [
        "Una giornata sull'acqua — la giornata di nozze in cui non si fa nulla, splendidamente",
        "Arrivo a Luxor in serata; il tempio di Luxor illuminato, se vi va",
      ]},
      { title: "Mongolfiera & riva occidentale", items: [
        "Mongolfiera all'alba sopra la Valle dei Re (tempo permettendo)",
        "Valle dei Re e tempio di Hatshepsut con il vostro egittologo",
        "Sbarco verso un hotel di Luxor per le ultime notti",
      ]},
      { title: "Karnak & una giornata in due", items: [
        "Karnak nella quiete del primo mattino",
        "Pomeriggio del tutto libero — piscina, spa o museo",
        "Cena d'addio organizzata dal vostro consulente",
      ]},
      { title: "Volo al Cairo & partenza", items: ["Volo mattutino per Il Cairo in coincidenza con il vostro volo internazionale"] },
    ],
    comfort: {
      sleep: "Una suite con vista sul Nilo al Cairo, un hotel ad Assuan, tre notti sulla motonave, poi un hotel a Luxor",
      early: "Alba a Giza, una mongolfiera all'alba sulla riva occidentale di Luxor, e Karnak nel primo mattino",
    },
    faqs: [
      { q: "In cosa differisce dal viaggio di 10 giorni?", a: "L'itinerario si sovrappone, il ritmo no. Questo viaggio scambia Alessandria e i treni notturni con i voli, suite con vista sul Nilo, mattinate più tarde e serate riservate. È costruito attorno al tempo in due, non alla copertura." },
      { q: "Potete organizzare sorprese — fiori, una cena privata, una proposta?", a: "Sì, con discrezione e spesso. Dite al vostro consulente cosa avete in mente e ci occupiamo della regia; una proposta in un tempio richiede un po' di coreografia, e sappiamo esattamente dove sono gli angoli tranquilli." },
      { q: "La mongolfiera è sicura?", a: "I voli di Luxor sono gestiti da operatori autorizzati sotto la vigilanza dell'aviazione civile, decollano solo all'alba con aria calma e vengono annullati senza esitazione in caso di vento. Prenotiamo date flessibili perché una mattina annullata possa slittare alla successiva." },
    ],
  },
  {
    slug: "tour-family-8day",
    localeSlug: "egitto-in-famiglia-8-giorni",
    metaTitle: "Egitto in famiglia: 8 giorni con bambini | Kemet",
    metaDescription:
      "Otto giorni pensati per i bambini: visite brevi al mattino, pomeriggi in piscina, egittologi specializzati in famiglie, suite comunicanti.",
    keywords: "egitto con bambini, viaggio egitto famiglia, egitto in famiglia 8 giorni, vacanza egitto bambini, viaggio privato famiglia egitto",
    crumb: "In famiglia, 8 giorni",
    title: "Egitto in famiglia: dalle piramidi al Nilo",
    subtitle: "Otto giorni calibrati su bambini curiosi e genitori senza fretta — mummie, feluche, i colori delle tombe e pomeriggi in piscina.",
    durationLabel: "8 giorni / 7 notti",
    startPoint: "Il Cairo (aeroporto o hotel)",
    summary: "L'Egitto con i bambini fatto come si deve: mattinate guidate brevi, egittologi specializzati in famiglie, pomeriggi in piscina e momenti che nessuna aula può offrire.",
    overview: "L'Egitto è l'aula più bella del mondo — a patto che il ritmo rispetti il modo in cui i bambini viaggiano davvero. Questo viaggio tiene le visite guidate al mattino, affida i pomeriggi a piscine e giardini e si affida a guide specializzate in famiglie: quelle che spiegano la mummificazione a un bambino di otto anni in modo così vivido che poi è lui a rispiegarla a cena. Il Cairo e Giza aprono il viaggio con la Sfinge, le gallerie di Tutankhamon al Grand Egyptian Museum e le mummie reali al NMEC. Un volo verso sud (il treno notturno raramente piace due volte ai bambini) porta alle tombe dipinte di Luxor e a un'ora in feluca ad Assuan, dove l'unica cosa richiesta è lasciare una mano nell'acqua del Nilo. Le camere sono suite familiari o camere comunicanti per tutto il viaggio.",
    itinerary: [
      { title: "Arrivo al Cairo", items: [
        "Accoglienza privata in aeroporto — seggiolini auto montati se necessario",
        "Sistemazione in camere comunicanti; serata libera",
      ]},
      { title: "Le piramidi & la Sfinge", items: [
        "La piana di Giza nel fresco del mattino — piramidi, panorama e Sfinge",
        "Breve giro in cammello al punto panoramico, se i bambini vogliono",
        "Pomeriggio in piscina; in serata lo spettacolo di suoni e luci alle piramidi (facoltativo)",
      ]},
      { title: "Tutankhamon & le mummie", items: [
        "Grand Egyptian Museum — il tesoro del faraone bambino, raccontato per i più piccoli",
        "La Sala delle Mummie Reali al NMEC per i più grandi e coraggiosi",
        "Gelato sulla corniche del Nilo",
      ]},
      { title: "Volo a Luxor — Karnak", items: [
        "Volo mattutino verso sud",
        "Karnak come una caccia al tesoro: trovare lo scarabeo, contare le colonne",
        "Pomeriggio in piscina in hotel",
      ]},
      { title: "Valle dei Re", items: [
        "Riva occidentale di primo mattino — tre tombe scelte per i colori più vivi",
        "Il tempio di Hatshepsut e i Colossi di Memnone",
        "Pomeriggio libero; dimostrazione di cucina egiziana per famiglie in hotel (facoltativa)",
      ]},
      { title: "Verso Assuan via Edfu", items: [
        "Strada verso sud con sosta a Edfu, dove si entra in calesse",
        "Arrivo ad Assuan; gelato serale sulla corniche",
      ]},
      { title: "Feluche & colori nubiani", items: [
        "File in motoscafo — un tempio su un'isola è già un'avventura",
        "Nel pomeriggio vela in feluca e visita a un villaggio nubiano dipinto",
        "Disegni all'henné e tè al karkadè con una famiglia nubiana",
      ]},
      { title: "Rientro via Il Cairo", items: ["Volo mattutino per Il Cairo in coincidenza con il vostro volo di rientro"] },
    ],
    comfort: {
      sleep: "Hotel al Cairo, a Luxor e ad Assuan",
      drives: "Da Luxor ad Assuan su strada, con sosta a Edfu",
      early: "Una partenza presto per la Valle dei Re",
    },
    faqs: [
      { q: "Per quali età è pensato questo itinerario?", a: "È calibrato più o meno sui 6–15 anni. Anche i più piccoli se la cavano bene — le mattinate sono brevi — ma tombe e musei funzionano al meglio dai sette anni in su. Le guide si adattano sul posto a chi hanno davanti." },
      { q: "Quanto cammineranno i bambini?", a: "Le visite restano di due o tre ore nel fresco del mattino, con l'auto sempre a portata. La camminata più lunga è Karnak, ed è spezzata da soste all'ombra e, molto onestamente, da giochi." },
      { q: "Il cibo va bene anche per i bambini difficili?", a: "Sì. Gli hotel propongono piatti familiari accanto alla cucina egiziana, e la vostra guida saprà sempre dove trovare una pasta o un pollo alla griglia affidabili. La maggior parte dei bambini torna a casa dipendente dal succo di mango fresco." },
    ],
  },
  {
    slug: "tour-photography-7day",
    localeSlug: "viaggio-fotografico-egitto-7-giorni",
    metaTitle: "Viaggio fotografico in Egitto, 7 giorni | Kemet",
    metaDescription:
      "Sette giorni costruiti sulla luce: Giza all'alba con accesso anticipato, Karnak prima dei gruppi, mongolfiere su Tebe e feluche nell'ora d'oro.",
    keywords: "viaggio fotografico egitto, egitto fotografia, tour fotografico piramidi, luxor fotografia, viaggio foto nilo",
    crumb: "Fotografia, 7 giorni",
    title: "L'Egitto attraverso l'obiettivo",
    subtitle: "Sette giorni organizzati sulla luce, non sugli orari di apertura — piane all'alba, templi nell'ora blu e il Nilo nell'ora d'oro.",
    durationLabel: "7 giorni / 6 notti",
    startPoint: "Il Cairo (aeroporto o hotel)",
    summary: "Un itinerario costruito a partire dalla luce: accesso anticipato a Giza all'alba, Karnak prima dei gruppi, mongolfiere sopra Tebe e feluche nell'ora d'oro.",
    overview: "Quasi tutti gli itinerari egiziani vi portano ai grandi siti nelle ore centrali, piatte e affollate — le peggiori che una macchina fotografica incontrerà mai. Questo viaggio ribalta la logica. Ogni giornata è organizzata sulla prima e sull'ultima luce: accesso privato anticipato a Giza prima che la piana apra, la sala ipostila di Karnak nel sole basso del mattino che scolpisce i rilievi, il viale delle sfingi illuminato nell'ora blu, le vele latine di Assuan in controluce nell'ora d'oro. La vostra guida capisce i fotografi — e questo significa sapere quando parlare, quando portare un permesso per il cavalletto e quando semplicemente lasciarvi soli con la scena. Anche chi non fotografa viaggia bene in questo itinerario: la luce che lusinga un sensore lusinga allo stesso modo un ricordo.",
    itinerary: [
      { title: "Arrivo al Cairo & briefing", items: [
        "Trasferimento privato e briefing serale sul percorso con la vostra guida",
        "Controllo dell'attrezzatura — permessi per i cavalletti dove richiesti",
      ]},
      { title: "Giza alla prima luce", items: [
        "Sessione all'alba sulla piana con accesso anticipato, prima dell'apertura",
        "A metà mattina: il punto panoramico e gli angoli del recinto della Sfinge",
        "Pomeriggio dedicato alla post-produzione; skyline nell'ora blu dal parco di Al-Azhar",
      ]},
      { title: "Cairo islamico — strade & lanterne", items: [
        "Passeggiata nell'ora d'oro lungo via Al-Muizz mentre si accendono le lanterne",
        "I vicoli di Khan el-Khalili — volti, rame e lame di luce",
        "Volo serale per Luxor",
      ]},
      { title: "Mongolfiera & riva occidentale", items: [
        "Mongolfiera all'alba sopra la necropoli tebana (tempo permettendo)",
        "Interni della Valle dei Re — tecnica a mano libera dove i cavalletti sono vietati",
        "Le terrazze di Hatshepsut nella luce radente del pomeriggio",
      ]},
      { title: "Karnak & il tempio di Luxor di notte", items: [
        "Karnak all'apertura — un'ora prima che arrivino i pullman",
        "Pomeriggio sul fiume: pescatori, feluche e riflessi",
        "Il viale delle sfingi e il tempio di Luxor illuminati nell'ora blu",
      ]},
      { title: "Assuan — vele & granito", items: [
        "Trasferimento mattutino verso sud (sosta a Edfu su richiesta)",
        "File in motoscafo — il tempio che emerge dall'acqua",
        "Feluca privata nell'ora d'oro tra le isole della cateratta",
      ]},
      { title: "Colori nubiani & partenza", items: [
        "Prima luce in un villaggio nubiano dipinto",
        "Volo per Il Cairo in coincidenza con il vostro volo di rientro",
      ]},
    ],
    comfort: {
      sleep: "Hotel al Cairo, a Luxor e ad Assuan",
      drives: "Da Luxor ad Assuan su strada",
      early: "Alba a Giza, una mongolfiera all'alba sulla riva occidentale e la prima luce in un villaggio nubiano",
    },
    faqs: [
      { q: "Posso portare un drone?", a: "No — date per certo che non si può. Le norme egiziane sui droni sono tra le più severe al mondo e l'attrezzatura viene sequestrata in aeroporto. Tutto l'itinerario è pensato per prospettive da terra e dalla mongolfiera." },
      { q: "I cavalletti sono ammessi nei siti?", a: "Dipende dal sito e cambia nel tempo: alcuni richiedono un permesso a pagamento, altri li vietano del tutto, e negli interni delle tombe reali si scatta solo a mano libera. Dove il permesso esiste lo otteniamo in anticipo, dove non esiste pianifichiamo la tecnica di conseguenza." },
      { q: "Ha senso questo viaggio per un compagno che non fotografa?", a: "Sinceramente sì. Il programma significa semplicemente vedere i siti nelle ore più vuote e più belle; l'unico prezzo sono le sveglie all'alba, che la luce ripaga." },
    ],
  },
  {
    slug: "tour-cairo-culture-5day",
    localeSlug: "cairo-culturale-5-giorni",
    metaTitle: "Il Cairo culturale: 5 giorni negli strati della città | Kemet",
    metaDescription:
      "Cinque giorni dentro una sola città: Il Cairo faraonico, copto, islamico e moderno, letto strada per strada con uno storico.",
    keywords: "cairo culturale, cosa vedere al cairo 5 giorni, cairo islamico, cairo copto, viaggio privato cairo",
    crumb: "Il Cairo culturale, 5 giorni",
    title: "Il Cairo degli otto mondi",
    subtitle: "Cinque giorni dentro gli strati di una sola città — Il Cairo faraonico, copto, islamico e moderno, letto strada per strada con uno storico.",
    durationLabel: "5 giorni / 4 notti",
    startPoint: "Il Cairo (aeroporto o hotel)",
    summary: "Una lettura lenta e profonda della città più stratificata del mondo — i suoi due musei, tre fedi, le strade medievali e la necropoli dove è nata la piramide.",
    overview: "Quasi tutti concedono al Cairo due notti e un elenco di cose da spuntare. Questo viaggio gli dedica cinque giorni e una tesi: che Il Cairo non è uno scalo, ma il sito culturale più denso del Mediterraneo. Allo strato faraonico vanno due giornate — Giza più l'arco Saqqara–Menfi–Dahshur, dove la forma della piramide è stata inventata — ma il cuore dell'itinerario è la città viva: il quartiere copto costruito dentro una fortezza romana, il tessuto millenario del Cairo islamico percorso moschea per moschea con una guida storica, le vie commerciali di Khan el-Khalili ancora leggibili nei suoi vicoli, e i due grandi musei letti come un'unica collezione divisa da un secolo. Le serate sono curate con la stessa attenzione delle mattinate — una tanoura sufi, una cena in una casa ottomana restaurata, il tè dove lo bevono davvero i cairoti.",
    itinerary: [
      { title: "Arrivo & il Museo Egizio", items: [
        "Accoglienza privata in aeroporto e trasferimento",
        "Le sale dense e antiche del Museo Egizio con il vostro storico",
        "Passeggiata serale nelle vie belle époque del centro",
      ]},
      { title: "Giza & il Grand Egyptian Museum", items: [
        "La piana all'apertura — piramidi, panorama, Sfinge",
        "Pomeriggio nelle gallerie di Tutankhamon al GEM",
        "Spettacolo serale di suoni e luci, facoltativo",
      ]},
      { title: "Saqqara, Menfi & Dahshur", items: [
        "La piramide a gradoni di Djoser — dove nasce l'architettura in pietra",
        "Il colosso di Ramesse II a Menfi",
        "La piramide romboidale e la piramide rossa a Dahshur, di solito quasi deserte",
      ]},
      { title: "Il Cairo copto & islamico", items: [
        "La fortezza romana di Babilonia, la Chiesa Sospesa e la sinagoga Ben Ezra",
        "La moschea di Ibn Tulun, del nono secolo, e la Cittadella",
        "Via Al-Muizz all'imbrunire; danza sufi tanoura dopo il tramonto",
      ]},
      { title: "Il bazar & partenza", items: [
        "Khan el-Khalili con il suo contesto — le botteghe, non solo le bancarelle",
        "Pranzo d'addio in una casa ottomana restaurata",
        "Trasferimento privato in aeroporto",
      ]},
    ],
    comfort: {
      sleep: "Un solo hotel al Cairo per tutte e quattro le notti",
    },
    faqs: [
      { q: "Cinque giorni in una sola città bastano davvero?", a: "Il Cairo potrebbe riempirne quindici. Cinque giorni sono il punto in cui la città smette di essere una sequenza confusa di monumenti e diventa leggibile: iniziate a riconoscere dinastie, stili di moschea e trame urbane senza che nessuno ve lo suggerisca. È proprio questo l'obiettivo." },
      { q: "Quanto si cammina nella giornata del Cairo islamico?", a: "Circa quattro chilometri nell'arco della giornata, su ciottoli e pietra, continuamente interrotti dalle visite. Le scarpe comode contano in questo viaggio più che in qualsiasi altro." },
      { q: "Si può aggiungere Alessandria?", a: "Sì — una sesta giornata sul Mediterraneo prolunga questo viaggio in modo naturale. Chiedetelo in fase di prenotazione e la inseriamo." },
    ],
  },
  {
    slug: "tour-sharm-5day",
    localeSlug: "mar-rosso-sharm-5-giorni",
    metaTitle: "Mar Rosso: 5 giorni a Sharm el-Sheikh | Kemet",
    metaDescription:
      "Cinque giorni dove le montagne del Sinai incontrano l'acqua più limpida dell'emisfero nord: barriere coralline, serata nel deserto, riposo vero.",
    keywords: "sharm el sheikh 5 giorni, mar rosso vacanza, ras mohammed snorkeling, sinai deserto, egitto mare viaggio",
    crumb: "Mar Rosso, 5 giorni",
    title: "Ritiro sul Mar Rosso: Sharm el-Sheikh",
    subtitle: "Cinque giorni dove le montagne del Sinai scendono nell'acqua più limpida dell'emisfero settentrionale — coralli, serate nel deserto e ozio voluto.",
    durationLabel: "5 giorni / 4 notti",
    startPoint: "Sharm el-Sheikh (aeroporto o hotel)",
    summary: "Il Mar Rosso con un'idea precisa — una giornata in barca privata a Ras Mohammed, una serata nel deserto del Sinai sotto le stelle e spazi lasciati vuoti di proposito.",
    overview: "Sharm el-Sheikh sta sulla punta della penisola del Sinai, dove le montagne del deserto scendono in un'acqua così limpida che le barriere si leggono dalla superficie come una mappa. È il grande respiro dell'Egitto — ed è esattamente così che questo itinerario la tratta. Due giornate cardine sono organizzate in privato: una giornata in barca nel parco nazionale di Ras Mohammed, le cui pareti di corallo all'incontro tra i golfi di Suez e Aqaba sono tra i migliori luoghi di snorkeling del mondo, e una serata nel deserto del Sinai con tè beduino, cena alla griglia e astronomia in uno dei cieli più scuri raggiungibili da un resort. Il resto è senza programma, per scelta. Funziona come fuga a sé stante o come capitolo finale di un viaggio egiziano più lungo — Luxor è a meno di un'ora di volo.",
    itinerary: [
      { title: "Arrivo sul Mar Rosso", items: [
        "Accoglienza privata in aeroporto e check-in in resort",
        "Incontro di orientamento davanti a un drink — la settimana modellata sulle vostre preferenze",
      ]},
      { title: "Ras Mohammed in barca", items: [
        "Intera giornata in barca privata nel parco nazionale",
        "Due o tre soste di snorkeling su pareti e giardini di corallo",
        "Pranzo a bordo, sul ponte",
      ]},
      { title: "Giornata libera", items: [
        "Una giornata a disposizione — battesimo del mare, spa o semplicemente spiaggia",
        "Passeggiata serale nel Old Market di Sharm e alla moschea Al Sahaba",
      ]},
      { title: "Serata nel deserto del Sinai", items: [
        "4x4 nel tardo pomeriggio verso l'interno del Sinai",
        "Tè beduino, cena alla brace e osservazione delle stelle lontano dalle luci dei resort",
      ]},
      { title: "Partenza", items: ["Mattinata libera e trasferimento privato in aeroporto"] },
    ],
    comfort: {
      sleep: "Un solo resort sul Mar Rosso per tutte e quattro le notti",
    },
    faqs: [
      { q: "Quando il mare è abbastanza caldo?", a: "Praticamente sempre. L'acqua va dai 21 °C d'inverno ai 28 °C di fine estate; lo snorkeling si fa tutto l'anno, e anche gennaio è comodo con una muta corta, che la barca mette a disposizione." },
      { q: "Devo saper fare immersioni?", a: "No. Le barriere di Ras Mohammed salgono abbastanza vicino alla superficie perché lo snorkeling mostri quasi tutto lo spettacolo. Se volete provare l'immersione, organizziamo un battesimo del mare autorizzato sulla barriera del vostro resort." },
      { q: "Si abbina agli itinerari sul Nilo?", a: "Perfettamente — ed è così che la maggior parte dei nostri ospiti lo usa. Luxor–Sharm è un volo breve, e quattro giorni di Mar Rosso dopo una settimana di templi sono la versione dell'Egitto meglio ordinata che conosciamo." },
    ],
  },
  {
    slug: "tour-red-sea-diving-4day",
    localeSlug: "immersioni-mar-rosso-4-giorni",
    metaTitle: "Immersioni nel Mar Rosso: 4 giorni dal Sinai | Kemet",
    metaDescription:
      "Sei immersioni guidate tra Ras Mohammed e lo stretto di Tiran con un diving PADI selezionato, più un'immersione di prova dalla riva.",
    keywords: "immersioni mar rosso, diving sharm el sheikh, ras mohammed immersioni, stretto di tiran, viaggio sub egitto",
    crumb: "Immersioni, 4 giorni",
    title: "Immersioni nel Mar Rosso",
    subtitle: "Quattro giorni costruiti sul tempo di fondo — le pareti di Ras Mohammed, le derive dello stretto di Tiran e barche a piccoli gruppi che partono presto.",
    durationLabel: "4 giorni / 3 notti",
    startPoint: "Sharm el-Sheikh (aeroporto o hotel)",
    summary: "Sei immersioni guidate sui due migliori gruppi di siti del Sinai — Ras Mohammed e Tiran — con un diving PADI che abbiamo verificato, più un riscaldamento dalla riva.",
    overview: "Il Mar Rosso settentrionale è una delle regioni di riferimento per le immersioni nel mondo: visibilità oltre i 20 metri come norma, acqua mai davvero fredda e pareti di corallo che precipitano dalla quota dello snorkeling all'acqua blu. Questo programma lo concentra in quattro giorni senza rinunciare né alla sicurezza né agli intervalli di superficie. Dopo un'immersione di prova sulla barriera del resort, due giornate complete in barca coprono i due gruppi di siti essenziali — il parco nazionale di Ras Mohammed, dove Shark e Yolanda formano il doppio sito più celebre del Sinai, e le quattro barriere dello stretto di Tiran, percorse da correnti di deriva leggere e frequentate dai pelagici. Le immersioni sono gestite da un diving PADI autorizzato con cui lavoriamo in modo continuativo; i gruppi restano piccoli e chi non si immerge è il benvenuto a bordo con l'attrezzatura da snorkeling.",
    itinerary: [
      { title: "Arrivo & immersione di prova", items: [
        "Accoglienza privata in aeroporto e check-in in resort",
        "Nel pomeriggio prova dell'attrezzatura e immersione di verifica sulla barriera del resort",
      ]},
      { title: "Giornata in barca a Ras Mohammed", items: [
        "Due immersioni guidate — Shark & Yolanda, condizioni permettendo",
        "Pranzo sul ponte e lunghi intervalli di superficie negli ancoraggi del parco",
      ]},
      { title: "Giornata in barca allo stretto di Tiran", items: [
        "Due immersioni guidate in deriva sulla catena di barriere di Tiran",
        "Terza immersione pomeridiana facoltativa, o rientro anticipato per la spa",
      ]},
      { title: "Mattina senza volo & partenza", items: [
        "Una mattinata in superficie — l'intervallo di 18–24 ore senza volo è già previsto",
        "Trasferimento privato in aeroporto",
      ]},
    ],
    comfort: {
      sleep: "Un solo resort sul Mar Rosso per tutte e tre le notti",
    },
    faqs: [
      { q: "Quale brevetto serve?", a: "Un Open Water copre tutto il programma; i siti si immergono su profili tra i 18 e i 30 metri. Se non siete brevettati, ditecelo: gli stessi quattro giorni si convertono senza problemi in un corso Open Water con lo stesso diving." },
      { q: "Perché l'ultima mattina è senza immersioni?", a: "Volare troppo presto dopo un'immersione espone alla malattia da decompressione. L'itinerario rispetta l'intervallo standard senza volo, così l'ultima giornata in barca non deve mai essere sacrificata per prendere un aereo." },
      { q: "Che cosa si vede davvero?", a: "Pareti dense di coralli molli, nuvole di anthias, pesci Napoleone, tartarughe e squali di barriera a Ras Mohammed; aquile di mare e banchi di barracuda cavalcano le correnti di Tiran. Il Mar Rosso settentrionale ripaga i sub a ogni livello di esperienza." },
    ],
  },
  {
    slug: "tour-giza-sphinx",
    localeSlug: "piramidi-di-giza-mezza-giornata",
    metaTitle: "Piramidi di Giza e Sfinge: mezza giornata privata | Kemet",
    metaDescription:
      "Mezza giornata mirata tra le tre grandi piramidi e la Sfinge, con il punto panoramico classico e la vostra guida privata.",
    keywords: "piramidi di giza, sfinge, escursione giza mezza giornata, visita privata piramidi, cosa vedere a giza",
    crumb: "Piramidi & Sfinge",
    title: "Piramidi di Giza & Sfinge",
    subtitle: "Mezza giornata concentrata tra le tre grandi piramidi e la Sfinge, con il punto panoramico classico.",
    durationLabel: "Mezza giornata (≈5 ore)",
    startPoint: "Hotel al Cairo o a Giza",
    summary: "La Grande Piramide, le piramidi di Chefren e Micerino, il punto panoramico e il tempio della valle con la Grande Sfinge — Giza in una mattinata.",
    overview: "Per chi ha poco tempo o una finestra libera il giorno dell'arrivo, questa mezza giornata consegna la piana di Giza senza riempitivi. Vedrete la Grande Piramide di Cheope, le piramidi vicine di Chefren e Micerino, il punto panoramico da cui tutte e tre si allineano, e il tempio della valle che conduce alla Grande Sfinge. Una guida privata fa valere ogni minuto di una visita breve, e la mattinata si combina bene con un pomeriggio libero o con il Grand Egyptian Museum.",
    itinerary: [
      { title: "La Grande Piramide di Cheope", text: "Si comincia ai piedi della Grande Piramide, l'ultima delle sette meraviglie del mondo antico ancora in piedi, con la vostra guida che spiega come e perché è stata costruita." },
      { title: "Chefren & Micerino", text: "Si passa alle piramidi di Chefren — che conserva ancora il rivestimento originale sulla cima — e alla più piccola Micerino." },
      { title: "Punto panoramico", text: "Sosta al panorama nel deserto dove le tre piramidi si allineano, la fotografia classica di Giza, con la possibilità di un giro in cammello o a cavallo lì accanto." },
      { title: "Tempio della valle & la Grande Sfinge", text: "Si chiude al tempio della valle in granito e davanti alla Grande Sfinge, il guardiano colossale scolpito nella roccia della piana." },
    ],
    faqs: [
      { q: "Perché scegliere la mezza giornata invece dell'intera?", a: "È perfetta il giorno dell'arrivo o della partenza, o quando volete le piramidi senza un museo. Se volete anche il Grand Egyptian Museum, scegliete la nostra giornata intera Giza & Grand Museum." },
      { q: "Si può andare in cammello alle piramidi?", a: "Sì — giri in cammello e a cavallo sono disponibili sulla piana come extra facoltativo. La vostra guida vi aiuterà a concordare un prezzo giusto sul posto." },
      { q: "Si può entrare dentro una piramide?", a: "L'ingresso agli interni è disponibile come extra facoltativo per la Grande Piramide o per una delle piramidi minori, nei limiti dei biglietti disponibili ogni giorno." },
    ],
  },
  {
    slug: "tour-giza-museum",
    localeSlug: "giza-e-grand-egyptian-museum",
    metaTitle: "Giza e il Grand Egyptian Museum: giornata intera | Kemet",
    metaDescription:
      "Piramidi e Sfinge al mattino, il Grand Egyptian Museum nel pomeriggio: la meraviglia antica e il museo nuovo, in un solo giorno.",
    keywords: "grand egyptian museum, giza giornata intera, tutankhamon museo, escursione privata cairo, piramidi e museo",
    crumb: "Giza & Grand Museum",
    title: "Giza & il Grand Museum",
    subtitle: "Le piramidi e la Sfinge al mattino, il Grand Egyptian Museum nel pomeriggio — la meraviglia antica e quella nuova, nello stesso giorno.",
    durationLabel: "Giornata intera (≈8 ore)",
    startPoint: "Hotel al Cairo o a Giza",
    summary: "La Grande Piramide, il panorama sulle tre piramidi, il tempio della valle e la Sfinge, poi l'immenso Grand Egyptian Museum accanto alla piana.",
    overview: "Questa giornata mette la più antica meraviglia del mondo accanto al museo più nuovo, costruito per custodirne i tesori. La mattina appartiene alla piana di Giza — le piramidi di Cheope, Chefren e Micerino, il punto panoramico e la Grande Sfinge che veglia sul suo tempio della valle. Il pomeriggio si sposta al Grand Egyptian Museum, il più grande museo archeologico del mondo, le cui gallerie e la cui scalinata monumentale riuniscono finalmente per intero la collezione di Tutankhamon. Guida privata e trasferimenti per tutta la giornata.",
    itinerary: [
      { title: "La Grande Piramide di Cheope", text: "In piedi alla base dell'unica meraviglia del mondo antico ancora esistente, la piramide di Cheope, per capire come è stata innalzata. L'ingresso alle camere interne è disponibile come extra facoltativo." },
      { title: "Chefren, Micerino & il panorama", text: "Si continua verso le piramidi di Chefren e Micerino e verso il punto panoramico in cui tutte e tre si allineano nel deserto — l'immagine classica di Giza." },
      { title: "Tempio della valle & la Grande Sfinge", text: "Si attraversa il tempio della valle di Chefren, costruito in granito, fino ai piedi della Grande Sfinge, il guardiano dal corpo di leone scolpito nella roccia viva della piana." },
      { title: "Grand Egyptian Museum (GEM)", text: "Si passa al Grand Egyptian Museum, accanto alla piana — la grande scalinata delle statue e le gallerie complete di Tutankhamon, la collezione di punta dell'Egitto moderno." },
    ],
    faqs: [
      { q: "Si può entrare nella Grande Piramide?", a: "Sì, come extra facoltativo. Ogni giorno viene venduto un numero limitato di biglietti per le camere interne; su richiesta ne riserviamo uno, in base alla disponibilità." },
      { q: "Il Grand Egyptian Museum è completamente aperto?", a: "Le gallerie principali, la grande scalinata e la collezione di Tutankhamon sono aperte al pubblico. La vostra guida si concentrerà sui capolavori, così il pomeriggio non risulta mai di corsa." },
      { q: "Quanto si cammina in questa giornata?", a: "In misura moderata, sulla piana e nelle gallerie del museo. Procediamo con i vostri tempi, con pause all'ombra." },
    ],
  },
  {
    slug: "tour-saqqara",
    localeSlug: "saqqara-menfi-dahshur",
    metaTitle: "Saqqara, Menfi e Dahshur: giornata privata | Kemet",
    metaDescription:
      "Dove è nata la piramide: la piramide a gradoni di Djoser, le rovine di Menfi e le piramidi romboidale e rossa di Dahshur.",
    keywords: "saqqara, piramide a gradoni djoser, menfi egitto, dahshur piramide rossa, escursione cairo saqqara",
    crumb: "Saqqara, Menfi & Dahshur",
    title: "Saqqara, Menfi & Dahshur",
    subtitle: "Il luogo di nascita della piramide — dalla prima piramide a gradoni di Djoser alle grandi tombe geometriche di Dahshur.",
    durationLabel: "Giornata intera (≈8 ore)",
    startPoint: "Hotel al Cairo o a Giza",
    summary: "La piramide a gradoni di Djoser, le rovine all'aperto di Menfi e le piramidi romboidale e rossa di Dahshur — la storia di come è stata inventata la piramide.",
    overview: "Prima di Giza c'era Saqqara. Questa giornata segue l'invenzione della piramide attraverso tre siti a sud del Cairo, spesso più tranquilli di Giza e per questo più suggestivi. Si comincia dalla piramide a gradoni di Djoser, il più antico grande edificio in pietra del mondo, si percorrono i resti all'aperto di Menfi, la prima capitale, e si chiude a Dahshur, dove la piramide romboidale e la piramide rossa mostrano il salto ingegneristico verso la vera forma piramidale. Tutto in privato.",
    itinerary: [
      { title: "La piramide a gradoni di Djoser", text: "Il cuore di Saqqara — la piramide a gradoni progettata da Imhotep per il re Djoser, il più antico grande monumento in pietra del mondo, dentro il suo vasto recinto funerario." },
      { title: "Menfi & il colosso di Ramesse II", text: "Il museo all'aperto di Menfi, antica capitale dell'Egitto unificato, dove si trovano un colosso coricato di Ramesse II e una sfinge in alabastro finemente scolpita." },
      { title: "La piramide romboidale di Dahshur", text: "A Dahshur, la piramide romboidale di Snefru, il cui cambio di inclinazione registra il momento in cui gli ingegneri antichi corressero la rotta a metà del cantiere." },
      { title: "La piramide rossa", text: "Poco più avanti la piramide rossa, la prima vera piramide riuscita, nella quale si può entrare per scendere nelle camere a volta aggettante." },
    ],
    faqs: [
      { q: "Come si confronta Saqqara con Giza?", a: "Saqqara è più antica e di solito più tranquilla. Racconta come si sono sviluppate le piramidi, dalla forma a gradoni di Djoser alle vere piramidi di Dahshur — il complemento perfetto a una giornata a Giza." },
      { q: "Si può entrare nelle piramidi di Dahshur?", a: "Sì — la piramide rossa è generalmente aperta, con un corridoio in discesa da percorrere chinati fino alle camere funerarie. La vostra guida vi dirà la situazione del giorno." },
      { q: "È una buona prima giornata al Cairo?", a: "È un'ottima prima giornata: meno folla e un racconto chiaro che rende poi la visita a Giza molto più ricca." },
    ],
  },
  {
    slug: "tour-abu-simbel",
    localeSlug: "abu-simbel-da-assuan",
    metaTitle: "Abu Simbel da Assuan: escursione privata | Kemet",
    metaDescription:
      "I templi nella montagna di Ramesse II sul lago Nasser: partenza prima dell'alba da Assuan, due santuari rupestri, rientro per pranzo.",
    keywords: "abu simbel da assuan, escursione abu simbel, templi ramesse II, abu simbel privato, lago nasser",
    crumb: "Abu Simbel",
    title: "Abu Simbel, escursione privata",
    subtitle: "I templi nella montagna di Ramesse II sopra il lago Nasser — la strada del deserto all'alba, due santuari scavati nella roccia, e di nuovo ad Assuan per pranzo.",
    durationLabel: "Giornata intera (≈8 ore, da Assuan)",
    startPoint: "Hotel ad Assuan o motonave",
    summary: "I templi colossali di Ramesse II scavati nella roccia — intagliati in una montagna nubiana, spostati blocco per blocco sopra il lago che saliva, e ancora allineati al sole.",
    overview: "Abu Simbel è l'imperdibile dell'estremo sud: due templi scavati direttamente in una montagna di arenaria da Ramesse II intorno al 1264 a.C., con quattro colossi seduti alti venti metri sulla facciata. Quando il lago Nasser si alzò dietro la grande diga, negli anni Sessanta, il salvataggio dell'UNESCO segò l'intero complesso in oltre mille blocchi e lo ricostruì sessantacinque metri più in alto — un'impresa ingegneristica quasi pari all'originale. Questa escursione privata si svolge nel modo classico: partenza da Assuan prima dell'alba attraverso il deserto aperto, arrivo quando la prima luce colpisce i colossi, tempo senza fretta dentro il Grande Tempio e dentro il santuario più piccolo di Nefertari con il vostro egittologo, e rientro ad Assuan nel primo pomeriggio. Due volte l'anno, il 22 febbraio e il 22 ottobre, il sole che sorge raggiunge il santuario più interno — chiedeteci di far coincidere le date.",
    itinerary: [
      { title: "La strada del deserto all'alba", text: "Partenza da Assuan verso le 4 del mattino con veicolo privato, attraversando 280 km di deserto aperto mentre il cielo si schiarisce — un viaggio con una bellezza austera tutta sua, caffè incluso." },
      { title: "Il Grande Tempio di Ramesse II", text: "Davanti ai quattro colossi seduti, poi dentro, attraverso sale di pilastri osiriaci, fino al santuario dove siedono quattro divinità — allineate perché il sole le raggiunga soltanto due mattine all'anno." },
      { title: "Il tempio di Nefertari", text: "Il tempio più piccolo che Ramesse dedicò alla sua regina e alla dea Hathor — uno dei pochissimi templi egizi in cui le statue di una regina stanno alla stessa scala di quelle del re." },
      { title: "Rientro ad Assuan", text: "Di nuovo attraverso il deserto per essere ad Assuan nel primo pomeriggio, in tempo per il pranzo, per la partenza della crociera o per una feluca nell'ora d'oro." },
    ],
    faqs: [
      { q: "Perché la giornata comincia alle 4 del mattino?", a: "Per tre motivi: la strada del deserto si percorre in finestre organizzate, i templi all'apertura sono al minimo di folla e di caldo, e il rientro nel primo pomeriggio lascia intatta la vostra giornata ad Assuan — o il programma della crociera." },
      { q: "Si può volare invece di andare su strada?", a: "Sì — EgyptAir opera un volo di 45 minuti con orari limitati, che riduce l'andata e ritorno a circa cinque ore. I posti si esauriscono presto; ditecelo in fase di prenotazione e vi quotiamo entrambe le soluzioni." },
      { q: "Che cos'è la festa del sole?", a: "Il 22 febbraio e il 22 ottobre il sole nascente penetra per 60 metri dentro il Grande Tempio e illumina le divinità sedute del santuario — l'allineamento che gli architetti di Ramesse progettarono tremila anni fa. Visitarlo in quelle date richiede mesi di anticipo; lo organizziamo su richiesta." },
    ],
  },
  {
    slug: "tour-fayoum",
    localeSlug: "oasi-del-fayyum",
    metaTitle: "Oasi del Fayyum: giornata intera da Il Cairo | Kemet",
    metaDescription:
      "Una giornata nell'oasi verde a sud-ovest del Cairo: laghi, cascate nel deserto, le balene fossili di Wadi al-Hitan e il villaggio dei ceramisti.",
    keywords: "oasi del fayyum, wadi el rayan, wadi al hitan balene, lago qarun, escursione da il cairo fayyum",
    crumb: "Oasi del Fayyum",
    title: "L'oasi del Fayyum",
    subtitle: "Una giornata intera nell'oasi verde a sud-ovest del Cairo — laghi, cascate nel deserto, balene fossili e un villaggio di ceramisti.",
    durationLabel: "Giornata intera (≈10 ore)",
    startPoint: "Hotel al Cairo o a Giza",
    summary: "Il lago Qarun, le cascate e le dune di Wadi el-Rayan, le balene fossili di Wadi al-Hitan e i ceramisti del villaggio di Tunis — l'altra metà dell'Egitto, selvatica e verde.",
    overview: "A un'ora e mezza a sud-ovest del Cairo, la depressione del Fayyum scambia i monumenti con il paesaggio: un grande lago salato, cascate d'acqua dolce in mezzo al deserto, una valle patrimonio UNESCO piena di balene fossilizzate e un villaggio di ceramisti su una collina. Questa giornata intera cambia completamente registro rispetto ai templi — orizzonti larghi, uccelli, dune e un pranzo di pesce in riva al lago. Il viaggio è privato, con la vostra guida e il vostro autista per tutta la giornata.",
    itinerary: [
      { title: "Il lago Qarun", text: "Si comincia sulla riva del lago Qarun, l'antico lago Meride, dove si radunano gli uccelli migratori e le vecchie barche da pesca si allineano sull'acqua. Un primo assaggio dell'oasi prima di entrare più a fondo nel deserto." },
      { title: "Le cascate di Wadi el-Rayan", text: "Le cascate più grandi d'Egitto, dove i due laghi del Rayan si riversano l'uno nell'altro tra le dune. Il tempo per camminare lungo la riva e assorbire un paesaggio che non somiglia in nulla alla valle del Nilo." },
      { title: "La valle delle balene (Wadi al-Hitan)", text: "Patrimonio dell'umanità UNESCO, custodisce scheletri di balene primordiali di 40 milioni di anni, conservati dove un tempo c'era un mare antico. Un museo all'aperto del tempo profondo, in mezzo alla sabbia." },
      { title: "Il lago magico & la montagna di Mudawara", text: "Il cosiddetto lago magico, alimentato da sorgenti minerali e capace di cambiare colore con la luce, sotto le dune di Mudawara — luogo preferito per il sandboarding e per un momento di silenzio." },
      { title: "Il villaggio di Tunis & pranzo sul lago", text: "Si chiude a Tunis, il villaggio collinare famoso per i suoi ceramisti e i loro laboratori, poi un pranzo di pesce senza fretta in riva al lago prima del rientro al Cairo." },
    ],
    faqs: [
      { q: "Il Fayyum è adatto alle famiglie?", a: "Sì — il misto di laghi, dune e fossili funziona a ogni età. Il terreno è facile, con brevi passeggiate e non escursioni impegnative." },
      { q: "Come vestirsi e cosa portare?", a: "Scarpe comode, protezione solare e uno strato leggero per la brezza del lago. I tratti nel deserto possono essere polverosi, quindi gli occhiali da sole aiutano." },
      { q: "Quanto dista dal Cairo?", a: "Tra un'ora e mezza e due ore per tratta con veicolo privato, a seconda del vostro hotel e del traffico in uscita dalla città." },
    ],
  },
  {
    slug: "tour-religious-citadel",
    localeSlug: "cairo-religioso-e-cittadella",
    metaTitle: "Il Cairo religioso e la Cittadella: giornata privata | Kemet",
    metaDescription:
      "Le fedi del Cairo in una giornata: chiese copte, un'antica sinagoga e la Cittadella di Saladino con la moschea di Muhammad Ali.",
    keywords: "cairo copto, chiesa sospesa, sinagoga ben ezra, cittadella di saladino, moschea muhammad ali",
    crumb: "Il Cairo religioso & la Cittadella",
    title: "Il Cairo religioso & la Cittadella",
    subtitle: "Le fedi del Cairo in una sola giornata — chiese copte, un'antica sinagoga e la grande Cittadella coronata dalla sua moschea.",
    durationLabel: "Giornata intera (≈8 ore)",
    startPoint: "Hotel al Cairo o a Giza",
    summary: "La Chiesa Sospesa, la sinagoga Ben Ezra e Abu Serga nel Cairo antico, poi la Cittadella di Saladino e la moschea di alabastro di Muhammad Ali.",
    overview: "Il patrimonio religioso del Cairo sovrappone storie copte, ebraiche e islamiche in pochi chilometri quadrati. Questa giornata passa dai vicoli del Cairo antico — la Chiesa Sospesa, l'antichissima sinagoga Ben Ezra e la chiesa di Abu Serga — alla Cittadella medievale di Saladino, coronata dalla moschea di alabastro di Muhammad Ali e dal suo ampio panorama sulla città. Una giornata riflessiva e suggestiva, guidata dal vostro egittologo.",
    itinerary: [
      { title: "La Chiesa Sospesa", text: "Si comincia nel Cairo copto alla Chiesa Sospesa, sospesa sopra una torre di una porta romana, una delle più antiche chiese d'Egitto, con le sue delicate iconostasi in legno e le sue icone." },
      { title: "La sinagoga Ben Ezra & Abu Serga", text: "Si percorrono i vicoli stretti fino alla sinagoga Ben Ezra e alla chiesa di Abu Serga, che la tradizione indica come il luogo dove la Sacra Famiglia trovò rifugio in Egitto." },
      { title: "La Cittadella di Saladino", text: "Si sale alla Cittadella di Saladino, la fortezza medievale che per secoli ha dominato Il Cairo, con panorami che nelle giornate limpide arrivano fino alle piramidi." },
      { title: "La moschea di Muhammad Ali", text: "Si chiude dentro la moschea di alabastro di Muhammad Ali, il monumento in stile ottomano le cui cupole definiscono lo skyline del Cairo." },
    ],
    faqs: [
      { q: "C'è un codice di abbigliamento?", a: "Sì — nei luoghi di culto serve un abbigliamento sobrio: spalle e ginocchia coperte, e scarpe da togliere in moschea. Portate un foulard; vi guidiamo noi sul posto." },
      { q: "I luoghi sono vicini tra loro?", a: "I siti del Cairo copto sono a pochi passi l'uno dall'altro; la Cittadella è a breve distanza in auto privata, quindi la giornata scorre comodamente." },
      { q: "I luoghi saranno aperti?", a: "Organizziamo la giornata tenendo conto degli orari di preghiera e delle eventuali chiusure, così la visita è fluida. In genere si può fotografare, con alcune limitazioni negli interni." },
    ],
  },
  {
    slug: "tour-cairo-museums",
    localeSlug: "musei-del-cairo",
    metaTitle: "I musei del Cairo: Museo Egizio e NMEC in un giorno | Kemet",
    metaDescription:
      "Due grandi collezioni in una giornata: lo storico Museo Egizio di Tahrir e il Museo Nazionale della Civiltà Egizia con le Mummie Reali.",
    keywords: "museo egizio il cairo, nmec mummie reali, musei del cairo, visita privata museo egizio, mummie faraoni",
    crumb: "I musei del Cairo",
    title: "I musei del Cairo",
    subtitle: "Due grandi collezioni in una giornata — lo storico Museo Egizio e il Museo Nazionale della Civiltà Egizia, con le Mummie Reali.",
    durationLabel: "Giornata intera (≈7 ore)",
    startPoint: "Hotel al Cairo o a Giza",
    summary: "I tesori del Museo Egizio di Tahrir, poi il Museo Nazionale della Civiltà Egizia e la sua Sala delle Mummie Reali.",
    overview: "Una giornata per chi ama gli oggetti in sé. Si comincia dal celebre Museo Egizio di Tahrir, le cui sale centenarie custodiscono la più alta concentrazione di tesori faraonici al mondo, per poi passare al moderno Museo Nazionale della Civiltà Egizia (NMEC), dove la grande Sala delle Mummie Reali presenta i re e le regine del Nuovo Regno in gallerie silenziose e a clima controllato. Una giornata da intenditori, raccontata dal vostro egittologo.",
    itinerary: [
      { title: "Museo Egizio, Tahrir", text: "Il grande museo storico su piazza Tahrir — statue, sarcofagi, papiri e l'oro del Nuovo Regno, percorso capolavoro per capolavoro con la vostra guida." },
      { title: "Museo Nazionale della Civiltà Egizia", text: "Si attraversa la città fino al NMEC, a Fustat, un museo moderno che racconta l'Egitto dalla preistoria a oggi in un'unica narrazione continua." },
      { title: "La Sala delle Mummie Reali", text: "Si scende nella Sala delle Mummie Reali, in penombra, dove i corpi conservati di faraoni come Ramesse II e Hatshepsut riposano in un allestimento rispettoso." },
    ],
    faqs: [
      { q: "La Sala delle Mummie Reali è inclusa?", a: "Sì — l'ingresso alla Sala delle Mummie Reali all'interno del NMEC è incluso. È uno spazio silenzioso e rispettoso, e all'interno non è consentito fotografare." },
      { q: "In cosa differiscono i due musei?", a: "Il Museo Egizio è denso, storico e pieno di tesori; il NMEC è moderno e narrativo, con le mummie come fulcro. Insieme danno un quadro completo." },
      { q: "Non è troppo per una sola giornata?", a: "Non con una guida che seleziona i capolavori. Ci concentriamo sugli oggetti essenziali di ciascun museo, con una pausa tra i due." },
    ],
  },
  {
    slug: "tour-alexandria",
    localeSlug: "alessandria-escursione-giornata",
    metaTitle: "Alessandria d'Egitto: escursione di un giorno | Kemet",
    metaDescription:
      "Una giornata sul Mediterraneo: catacombe di Kom el-Shoqafa, colonna di Pompeo, cittadella di Qaitbay e la Bibliotheca Alexandrina.",
    keywords: "alessandria d'egitto escursione, catacombe kom el shoqafa, cittadella qaitbay, bibliotheca alexandrina, da il cairo ad alessandria",
    crumb: "Alessandria in giornata",
    title: "Alessandria, una giornata sul Mediterraneo",
    subtitle: "Una giornata intera sul Mediterraneo — catacombe, una colonna romana, una cittadella sul mare e la grande biblioteca moderna.",
    durationLabel: "Giornata intera (≈11 ore)",
    startPoint: "Hotel al Cairo o a Giza",
    summary: "Le catacombe di Kom el-Shoqafa, la colonna di Pompeo, la cittadella di Qaitbay sul sito dell'antico faro e la Bibliotheca Alexandrina, con pranzo di pesce.",
    overview: "La città di Alessandro porta con leggerezza il suo passato greco-romano lungo una corniche che segue la curva del Mediterraneo. Questa giornata intera comprende le catacombe sotterranee di Kom el-Shoqafa, l'altissima colonna di Pompeo, la cittadella di Qaitbay costruita sulle fondazioni del leggendario faro di Alessandria e la slanciata Bibliotheca Alexandrina, erede dell'antica Biblioteca. Un pranzo di pesce sul mare fa parte del pacchetto. Guida privata e trasferimenti dal Cairo.",
    itinerary: [
      { title: "Le catacombe di Kom el-Shoqafa", text: "Si scende nelle catacombe di Kom el-Shoqafa, una necropoli romana su più livelli dove stili egizi e classici si fondono nella pietra scolpita — una delle meraviglie più singolari dell'antichità." },
      { title: "La colonna di Pompeo", text: "Visita alla colonna di Pompeo, la grande colonna trionfale romana che si eleva dalle rovine del Serapeo, affiancata da sfingi di granito." },
      { title: "La cittadella di Qaitbay", text: "Si percorrono le mura sul mare della cittadella di Qaitbay, costruita esattamente dove un tempo si ergeva il faro di Alessandria, una delle meraviglie del mondo antico." },
      { title: "Bibliotheca Alexandrina & pranzo di pesce", text: "Si chiude alla spettacolare Bibliotheca Alexandrina, la Biblioteca di Alessandria rinata, dopo un pranzo di pesce senza fretta sul fronte mediterraneo." },
    ],
    faqs: [
      { q: "Quanto dura il viaggio dal Cairo?", a: "Dalle due ore e mezza alle tre per tratta sulla strada del deserto: è per questo che si tratta di una giornata lunga, ma che ripaga." },
      { q: "Si può andare in treno?", a: "Sì — per chi lo preferisce organizziamo il viaggio in treno e vi accogliamo ad Alessandria con la vostra guida privata e il veicolo. Basta chiederlo." },
      { q: "Vale la pena la Bibliotheca Alexandrina?", a: "Molto — già solo l'architettura colpisce, e l'edificio è un'eco voluta dell'antica Biblioteca che ha reso celebre la città." },
    ],
  },
  {
    slug: "tour-cairo-food",
    localeSlug: "serata-gastronomica-cairo",
    metaTitle: "Serata gastronomica al Cairo: street food guidato | Kemet",
    metaDescription:
      "Una serata a piedi tra i sapori del Cairo: koshari, ful e ta'meya, hawawshi e piccione alla griglia, kunafa e basbousa, e un ahwa tradizionale.",
    keywords: "street food il cairo, cibo egiziano koshari, tour gastronomico cairo, cucina egiziana, serata gastronomica egitto",
    crumb: "Serata gastronomica",
    title: "Il Cairo autentico, a tavola",
    subtitle: "Una serata a piedi tra i sapori del Cairo — koshari, classici di strada, piccione alla griglia e dolci al miele.",
    durationLabel: "Serata (≈4 ore)",
    startPoint: "Hotel al Cairo",
    summary: "Una degustazione serale guidata dei piatti più amati del Cairo — koshari, ful e ta'meya, hawawshi e piccione alla griglia, kunafa e basbousa, con chiusura in un ahwa tradizionale.",
    overview: "La capitale egiziana è un banchetto che si scopre meglio a piedi e dopo il tramonto. Questa serata guidata vi porta tra i piatti che definiscono il Cairo di ogni giorno — la sinfonia di carboidrati del koshari, il ful e la ta'meya che si mangiano a qualsiasi ora, l'hawawshi ripieno di carne e il piccione alla griglia, e un finale dolce di kunafa e basbousa. Si chiude dove chiudono i cairoti: davanti a un tè alla menta e a una shisha in un ahwa, il caffè tradizionale. Un controcanto rilassato e saporito ai monumenti.",
    itinerary: [
      { title: "Koshari", text: "Si parte dal piatto nazionale egiziano — il koshari, una stratificazione confortante di riso, lenticchie, pasta e ceci sotto cipolla fritta croccante e una salsa di pomodoro agrodolce." },
      { title: "Ful & ta'meya", text: "Si assaggia il ful medames, le fave cotte lentamente che si mangiano dalla mattina alla sera, insieme alla ta'meya, la versione egiziana del falafel a base di fave, fritta al momento." },
      { title: "Hawawshi & piccione alla griglia", text: "Si passa al cuore salato della serata — l'hawawshi, carne macinata e speziata cotta dentro il pane croccante, e l'hamam mahshi, piccione alla griglia farcito di riso aromatizzato." },
      { title: "Kunafa & basbousa", text: "Si arriva al dolce con la kunafa tiepida, la sua pasta a fili sopra il formaggio dolce, e con i quadretti di basbousa, la torta di semolino imbevuta di sciroppo." },
      { title: "Un ahwa tradizionale", text: "Si chiude in un ahwa di quartiere davanti a un tè alla menta, un caffè alla turca e il brusio della città — il modo in cui dovrebbe finire ogni serata al Cairo." },
    ],
    faqs: [
      { q: "Il cibo è sicuro per chi viene da fuori?", a: "Sì — scegliamo locali frequentati e affidabili, con grande ricambio di prodotto, e la vostra guida si occupa degli ordini. L'acqua in bottiglia è fornita durante tutta la serata." },
      { q: "Si possono gestire esigenze alimentari particolari?", a: "I vegetariani sono serviti bene — koshari, ful, ta'meya e i dolci sono tutti senza carne. Segnalateci in anticipo eventuali allergie e adattiamo il percorso." },
      { q: "Rischio di essere troppo pieno?", a: "Le porzioni sono da degustazione e distribuite lungo la camminata, così assaggiate molto senza esagerare in nessuna tappa. Venite affamati, ma senza ansia." },
    ],
  },
];
