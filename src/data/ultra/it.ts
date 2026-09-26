import type { UltraText } from "./types";

export const it: UltraText = {
  metaTitle: "Viaggi ultra lusso in Egitto — quattro viaggi privati | Kemet",
  metaDescription:
    "Kemet Ultra: la Grande Piramide aperta solo per voi, cena dentro Karnak, una dahabiya o uno yacht privati, le suite migliori. Da 7 a 15 giorni, prezzi chiari.",
  keywords:
    "viaggio ultra lusso egitto, viaggio privato di lusso egitto, apertura privata grande piramide, cena tempio di karnak, dahabiya charter privato, yacht privato mar rosso, mena house suite, old cataract assuan, oberoi philae",
  crumb: "Kemet Ultra",

  heroTag: "Kemet Ultra · su richiesta privata",
  h1: ["L'Egitto, aperto", "solo per voi"],
  lede:
    "Quattro viaggi privati al vertice del mercato egiziano: la Grande Piramide aperta per il vostro gruppo, la cena dentro Karnak dopo la chiusura, una dahabiya o uno yacht senza altri ospiti e gli alberghi storici nelle loro stanze migliori. Con i prezzi dichiarati, e ogni elemento confermato per iscritto prima di qualsiasi pagamento.",
  ctaPrimary: "Parlateci in privato",
  ctaQuiet: "oppure inviate una richiesta riservata",

  facts: [
    ["Aperto per voi", "la Grande Piramide e Karnak, senza altri visitatori"],
    ["Nessun altro a bordo", "una dahabiya noleggiata sul Nilo, uno yacht con equipaggio sul Mar Rosso"],
    ["Prima il prezzo, poi la prova", "ogni prezzo pubblicato, ogni elemento confermato per iscritto prima dell'acconto"],
  ],

  question: "Che cos'è Kemet Ultra?",
  answer: ({ from2, to2, from4 }) =>
    `Kemet Ultra è il livello più alto di Kemet: quattro viaggi in Egitto interamente privati, da 7 a 15 giorni, con la Grande Piramide aperta solo per voi, la cena dentro Karnak dopo la chiusura, una dahabiya o uno yacht noleggiati e suite al Mena House, all'Old Cataract e agli Oberoi. In due da ${from2} a ${to2} a persona; in quattro da ${from4}.`,

  journeysOverline: "I viaggi",
  journeysTitle: ["Quattro modi di vivere l'Egitto", "a questo livello"],

  labels: {
    duration: (d, n) => `${d} giorni / ${n} notti`,
    from: "Da",
    perPersonTwo: "a persona, in due",
    perPersonFour: (p) => `${p} a persona in quattro`,
    stays: "Dove soggiornate",
    nights: (n) => (n === 1 ? "1 notte" : `${n} notti`),
    dayByDay: "Giorno per giorno",
    day: "Giorno",
    enquire: (t) => `Informazioni su ${t}`,
    priceNote: (peak) =>
      `Prezzi in euro, a persona, da ottobre 2026 a settembre 2027, comprensivi di tutti gli elementi indicati in questa pagina. Voli internazionali e mance non sono inclusi. Le settimane di punta — dal 20 dicembre al 5 gennaio e la settimana di Pasqua — prevedono un supplemento del ${peak}%.`,
  },

  place: { giza: "Giza", cairo: "Il Cairo", luxor: "Luxor, riva ovest", aswan: "Assuan", nile: "Sul Nilo", redsea: "Mar Rosso" },
  room: {
    pyramidSuite: "Suite con vista sulle piramidi",
    nileSuite: "Suite con vista sul Nilo",
    palaceWing: "Ala storica Palace, vista Nilo",
    suite: "Suite",
    charter: "Noleggio esclusivo — l'intera barca",
    cruiseSuite: "Suite di lusso",
    poolSuite: "Grand suite con piscina privata",
  },
  dahabiya: "Dahabiya privata",

  journeys: {
    "private-pharaoh": {
      title: "Il faraone privato",
      kicker: "La Grande Piramide e Karnak, ciascuna aperta solo per il vostro gruppo",
      route: "Il Cairo · Giza · Luxor · Abido",
      body:
        "Una settimana costruita intorno a due porte che di solito restano chiuse. A Giza la Grande Piramide viene aperta per due ore solo per voi; a Luxor, Karnak resta aperto dopo la chiusura e la cena viene servita nel recinto del tempio. In mezzo: il Grand Egyptian Museum con un egittologo esperto, le tombe più belle della Valle dei Re e i due templi che quasi nessuno raggiunge.",
      highlights: [
        "Apertura privata della Grande Piramide — due ore, solo il vostro gruppo",
        "Karnak aperto dopo la chiusura, con cena nel recinto",
        "Le tombe di Seti I, Nefertari e Tutankhamon",
        "Una cesta privata in mongolfiera e una feluca privata",
        "Un egittologo esperto per tutto il viaggio, autista sempre disponibile",
        "Servizio VIP a ogni arrivo e partenza",
      ],
      days: [
        { t: "Arrivo, accoglienza alla porta dell'aereo", d: "Servizio VIP all'immigrazione, poi il Mena House, dove la Grande Piramide riempie la finestra." },
        { t: "Il Grand Egyptian Museum", d: "Il tesoro completo di Tutankhamon e il Grande Scalone con un egittologo esperto; il pomeriggio è vostro." },
        { t: "Soli dentro la Grande Piramide", d: "Due ore dentro la piramide di Cheope, aperta solo per voi, poi la Piramide a gradoni e il Serapeo di Saqqara." },
        { t: "Luxor, e Karnak di notte", d: "Il volo verso sud con servizio VIP; la sera Karnak viene aperto per voi e la cena è servita nel recinto." },
        { t: "Mongolfiera all'alba e tombe reali", d: "Una cesta privata sopra la riva ovest, poi le tombe di Seti I, Tutankhamon e della regina Nefertari." },
        { t: "Abido e Dendera", d: "I due templi più belli d'Egitto in auto privata, pranzo lungo la strada e tramonto su una feluca privata." },
        { t: "Partenza", d: "Volo per il Cairo, con accompagnamento fino al vostro volo internazionale." },
      ],
    },
    "royal-nile": {
      title: "Il Nilo reale",
      kicker: "Una dahabiya noleggiata per il vostro gruppo, da Assuan a Esna",
      route: "Il Cairo · Assuan · Abu Simbel · il Nilo · Luxor",
      body:
        "Quattro notti su una dahabiya a vela senza altri ospiti: equipaggio, cuoco e ormeggi sono vostri, e la barca si ferma dove le grandi navi non possono. Prima, il Cairo con la Grande Piramide aperta in privato e una notte all'Old Cataract; Abu Simbel in aereo privato; e alla fine Karnak, aperto per la vostra cena.",
      highlights: [
        "Noleggio esclusivo di una dahabiya di prima categoria — nessun altro ospite",
        "Apertura privata della Grande Piramide; cena a Karnak dopo la chiusura",
        "Abu Simbel in aereo privato",
        "Old Cataract, ala storica Palace, affacciata sul Nilo",
        "Le tombe di Seti I e Nefertari; una mongolfiera privata",
        "Servizio VIP a ogni arrivo e partenza",
      ],
      days: [
        { t: "Arrivo, accoglienza alla porta dell'aereo", d: "Servizio VIP, poi il Four Seasons at The First Residence, sopra il Nilo." },
        { t: "Il Grand Egyptian Museum", d: "Il tesoro di Tutankhamon e il Grande Scalone con un egittologo esperto; un pomeriggio senza fretta." },
        { t: "Soli dentro la Grande Piramide", d: "Due ore private dentro la piramide di Cheope, poi la Piramide a gradoni e il Serapeo di Saqqara." },
        { t: "Assuan e l'Old Cataract", d: "Volo del mattino verso sud; Philae in motoscafo privato, poi il tramonto dalla terrazza dove soggiornò Agatha Christie." },
        { t: "Abu Simbel, poi a bordo", d: "I templi di Ramses II alla prima luce, in aereo privato; di ritorno per pranzo, la vostra dahabiya salpa." },
        { t: "Kom Ombo", d: "Navigando verso nord fino al doppio tempio di Sobek e Horus; notte ormeggiati su una riva tranquilla." },
        { t: "Gebel el-Silsila ed Edfu", d: "Le antiche cave di arenaria e le loro cappelle, poi Edfu, il tempio meglio conservato d'Egitto." },
        { t: "El Kab", d: "Tombe rupestri che pochi vedono, un ultimo pomeriggio a vela e cena sul ponte." },
        { t: "Luxor, e Karnak di notte", d: "Sbarco a Esna; le tombe di Seti I e Nefertari; Karnak aperto dopo la chiusura, con cena nel recinto." },
        { t: "Mongolfiera, poi partenza", d: "Una cesta privata all'alba sopra la riva ovest; volo per il Cairo e partenza VIP." },
      ],
    },
    "karnak-to-coral-sea": {
      title: "Da Karnak al mare dei coralli",
      kicker: "L'Oberoi Philae sul Nilo, poi uno yacht privato sul Mar Rosso",
      route: "Il Cairo · Luxor · il Nilo · Assuan · Abu Simbel · Mar Rosso",
      body:
        "La classica crociera sul Nilo sulla nave più raffinata del fiume, in suite, e poi un finale all'altezza: un aereo privato da Assuan al Mar Rosso, una suite con piscina propria e uno yacht con equipaggio per una giornata tra le barriere di Giftun. Lungo il viaggio, la Grande Piramide e Karnak vengono aperti per voi.",
      highlights: [
        "L'Oberoi Philae, quattro notti in suite di lusso",
        "Apertura privata della Grande Piramide; cena a Karnak dopo la chiusura",
        "Aereo privato per Abu Simbel e fino al Mar Rosso",
        "Uno yacht a motore con equipaggio per un'intera giornata",
        "Suite all'Old Cataract e all'Oberoi di Sahl Hasheesh",
        "Servizio VIP a ogni arrivo e partenza",
      ],
      days: [
        { t: "Arrivo, accoglienza alla porta dell'aereo", d: "Servizio VIP, poi il Mena House con la Grande Piramide alla finestra." },
        { t: "Il Grand Egyptian Museum", d: "Il tesoro di Tutankhamon con un egittologo esperto; il pomeriggio è vostro." },
        { t: "Soli dentro la Grande Piramide", d: "Due ore private dentro la piramide di Cheope, poi la Piramide a gradoni e il Serapeo di Saqqara." },
        { t: "Luxor, a bordo dell'Oberoi Philae", d: "Volo verso sud e imbarco; la sera Karnak viene aperto per voi, con cena nel recinto." },
        { t: "La riva ovest", d: "Una mongolfiera privata all'alba, le tombe di Seti I e Nefertari, poi la nave salpa verso sud." },
        { t: "Esna ed Edfu", d: "Attraverso la chiusa di Esna fino al tempio di Horus a Edfu." },
        { t: "Da Kom Ombo ad Assuan", d: "Il tempio sul fiume di Kom Ombo, e Assuan in serata." },
        { t: "L'Old Cataract", d: "Sbarco ad Assuan; Philae in motoscafo privato; una feluca privata tra le isole al tramonto." },
        { t: "Abu Simbel in aereo privato", d: "I templi di Ramses II alla prima luce, di ritorno ad Assuan per pranzo e un pomeriggio tranquillo." },
        { t: "Verso il Mar Rosso, in privato", d: "Aereo privato per Hurghada e l'Oberoi di Sahl Hasheesh — una suite con piscina propria." },
        { t: "Una giornata in yacht", d: "Uno yacht a motore con equipaggio verso le barriere di Giftun: snorkeling, pranzo a bordo, rientro al tramonto." },
        { t: "Partenza", d: "Volo di rientro da Hurghada, o per il Cairo in coincidenza, con servizio VIP." },
      ],
    },
    "grand-odyssey": {
      title: "La grande odissea privata",
      kicker: "Ogni spostamento privato — aereo, dahabiya e yacht",
      route: "Il Cairo · Assuan · Abu Simbel · il Nilo · Luxor · Mar Rosso",
      body:
        "Tutto l'Egitto senza un solo momento condiviso. Un aereo privato per ogni tratta interna; una dahabiya noleggiata per quattro notti tra Assuan ed Esna; la Grande Piramide e Karnak aperti per voi; e tre notti sul Mar Rosso con due giornate a bordo del vostro yacht. Pensato per un primo viaggio che vuole essere quello definitivo.",
      highlights: [
        "Aereo privato su ogni tratta interna",
        "Noleggio esclusivo di una dahabiya per quattro notti",
        "Apertura privata della Grande Piramide; cena a Karnak dopo la chiusura",
        "Due giornate a bordo di uno yacht con equipaggio",
        "Suite al Mena House, all'Old Cataract, all'Al Moudira e all'Oberoi",
        "Un egittologo e un assistente personale per tutto il viaggio",
      ],
      days: [
        { t: "Arrivo, accoglienza alla porta dell'aereo", d: "Servizio VIP, poi il Mena House con la Grande Piramide alla finestra." },
        { t: "Il Grand Egyptian Museum", d: "Il tesoro di Tutankhamon con un egittologo esperto; un pomeriggio senza fretta." },
        { t: "Grande Piramide, Saqqara e Dahshur", d: "Due ore private dentro la piramide di Cheope, poi la Piramide a gradoni e la Piramide Rossa." },
        { t: "In aereo privato ad Assuan", d: "L'Old Cataract, e nel pomeriggio Philae in motoscafo privato." },
        { t: "Abu Simbel", d: "In aereo privato alla prima luce; al tramonto una feluca privata tra le isole." },
        { t: "A bordo della vostra dahabiya", d: "La barca è vostra dal pranzo, navigando verso nord fino a Kom Ombo." },
        { t: "Gebel el-Silsila", d: "Cave antiche e cappelle scavate nella roccia; ormeggio su una riva tranquilla." },
        { t: "Edfu", d: "Il tempio di Horus di buon mattino, prima dei visitatori della giornata." },
        { t: "El Kab", d: "Tombe rupestri che pochi vedono; un'ultima cena sul ponte." },
        { t: "Luxor, e Karnak di notte", d: "Sbarco a Esna, poi l'Al Moudira; Karnak aperto dopo la chiusura, con cena nel recinto." },
        { t: "Mongolfiera all'alba e tombe reali", d: "Una cesta privata sopra la riva ovest; le tombe di Seti I, Tutankhamon e Nefertari." },
        { t: "Verso il Mar Rosso, in privato", d: "Aereo privato per Hurghada; una suite con piscina propria all'Oberoi di Sahl Hasheesh." },
        { t: "Lo yacht", d: "Le barriere di Giftun su uno yacht a motore con equipaggio, pranzo in coperta." },
        { t: "Ancora lo yacht — o niente del tutto", d: "Un'altra barriera, un'immersione o la giornata alla spa." },
        { t: "Partenza", d: "Aereo privato per il Cairo e servizio VIP fino al volo di rientro." },
      ],
    },
  },

  standardOverline: "Come funziona questo livello",
  standard: [
    { title: "Prima il prezzo, poi la prova", body: "Ogni prezzo è in questa pagina. Prima che si muova denaro, ogni elemento — il permesso, il noleggio, la suite — viene confermato per iscritto, a vostro nome." },
    { title: "Un solo referente", body: "Chi disegna il viaggio è chi vi risponde mentre siete in Egitto. Non un call center, né un numero che smette di rispondere dopo l'acconto." },
    { title: "Modifiche senza complicazioni", body: "Ogni viaggio può essere ridisegnato — giorni, alberghi, ritmo, un gruppo più grande o personale al seguito — e viene ricalcolato con lo stesso criterio." },
    { title: "Discrezione come regola", body: "Nessun gruppo, nessun veicolo condiviso, nessuna lista di partenze pubblicata. Nulla su chi siete o dove andate viene discusso fuori dalla squadra che realizza il viaggio." },
  ],

  faqOverline: "Prima di scriverci",
  faqs: ({ from2, to2, from4, to4, peak }) => [
    { q: "Quanto costa un viaggio ultra lusso in Egitto?", a: `I quattro viaggi Kemet Ultra costano, in due, da ${from2} a persona per sette giorni a ${to2} per quindici. In quattro il prezzo a persona scende tra ${from4} e ${to4}, perché noleggio, aereo e aperture private vengono condivisi. Le settimane di punta a Natale, Capodanno e Pasqua prevedono un supplemento del ${peak}%.` },
    { q: "La Grande Piramide può davvero essere aperta solo per noi?", a: "Sì. Il Ministero del Turismo e delle Antichità concede aperture private della Grande Piramide a un solo gruppo, di solito per due ore fuori dall'orario pubblico. Si richiede a vostro nome, servono da quattro a otto settimane, e nulla viene addebitato finché il permesso non è concesso." },
    { q: "Come funziona la cena dentro Karnak?", a: "Karnak viene aperto per il vostro gruppo dopo che il pubblico è uscito; attraversate la sala ipostila con il vostro egittologo e la cena viene servita nel recinto del tempio. Servono un permesso e misure di sicurezza, richiesti insieme alla prenotazione. Se una data viene rifiutata, lo sapete prima di pagare e vi viene proposta l'alternativa più vicina." },
    { q: "Perché il Winter Palace non è incluso?", a: "Il Winter Palace di Luxor ha chiuso all'inizio del 2026 per un restauro completo e riaprirà a luglio 2027 come Mandarin Oriental Winter Palace. Fino ad allora a Luxor soggiornate all'Al Moudira, sulla riva ovest. L'Old Cataract di Assuan resta aperto nella sua storica ala Palace mentre l'ala sul Nilo viene rinnovata." },
    { q: "Quale dahabiya viene noleggiata?", a: "Una dahabiya di prima categoria da sei a dieci cabine, noleggiata per intero — come la Sanctuary Zein Nile Chateau o la Meroe di Nour el Nil, secondo le date. La barca è indicata nella vostra proposta scritta prima di qualsiasi pagamento." },
    { q: "Un viaggio si può modificare o allungare?", a: "Sempre. Giorni, alberghi, ordine delle tappe e ritmo possono cambiare, e il prezzo viene ricalcolato con lo stesso criterio. Gruppi più numerosi, personale al seguito e arrivo in jet privato sono previsti fin dall'inizio." },
    { q: "Con quanto anticipo prenotare?", a: "Da otto a dodici settimane per viaggi tra ottobre e aprile, quando aperture private e noleggi di dahabiya sono più richiesti. A volte è possibile con meno preavviso; prima dell'impegno saprete quali elementi si possono ancora assicurare." },
    { q: "Con chi avremo a che fare?", a: "Con una sola persona, dal primo messaggio all'ultimo giorno in Egitto. Se l'organizzazione è affidata a un family office o a un assistente, anche loro trattano sempre con la stessa persona." },
  ],

  closeTitle: "Diteci chi viaggia, e quando.",
  closeBody:
    "Ogni viaggio qui può essere modificato. Ricevete prima un programma scritto e poi il prezzo, e non si paga nulla finché ogni elemento non è confermato a vostro nome. Tutto resta tra noi.",
  closeCta: "WhatsApp, in privato",
  closeQuiet: "oppure per email",

  whatsapp: "Buongiorno Kemet — vorrei parlare di un viaggio Kemet Ultra in Egitto.",
  whatsappJourney: (t) => `Buongiorno Kemet — vorrei parlare di «${t}» (Kemet Ultra).`,
  mailSubject: "Kemet Ultra — richiesta riservata",
  mailBody: "Diteci chi viaggia, più o meno quando e quale viaggio vi interessa.\n\n",
};
