// ---------------------------------------------------------------------------
// Pagine italiane — six key pages for the Italian market.
//
// Italy has the shortest flight into Egypt of any major Western European market
// (about 3h15 from Rome or Milan), which changes the trip shape: shorter breaks
// are realistic and Egypt competes with Mediterranean destinations rather than
// with long-haul. Reference points follow: Semana/Pasqua and Ferragosto rather
// than German school terms, Rome and Milan rather than Frankfurt.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";

export const it: LocalizedPage[] = [
  // ===== Home ==============================================================
  {
    groupId: "home",
    symbol: "ankh",
    title: "Kemet — Viaggi privati in Egitto con egittologo",
    description:
      "Viaggi privati su misura in Egitto: egittologo autorizzato solo per voi, auto privata, nessun pullman di gruppo e nessuna data fissa.",
    keywords:
      "viaggi in egitto, viaggio privato egitto, egitto su misura, crociera sul nilo, egittologo guida, viaggio di lusso egitto",
    crumb: "Home",
    h1: "L'Egitto, in privato",
    standfirst:
      "Nessun pullman, nessuna data di partenza fissa, nessuno sconosciuto nel vostro itinerario.",
    lede:
      "L'Egitto non è un paese solo: sono otto mondi culturali stratificati lungo un unico fiume. Kemet progetta viaggi privati e senza fretta attraverso questi mondi — dalle Piramidi di Giza ai templi di Luxor, fino alla navigazione del Nilo verso Assuan. Ogni viaggio è accompagnato da un egittologo autorizzato dal Ministero del Turismo egiziano ed è costruito interamente attorno a voi.",
    facts: [
      { label: "Formula", value: "Esclusivamente privato" },
      { label: "Guida", value: "Egittologo autorizzato" },
      { label: "Volo da Roma", value: "circa 3 ore e 15" },
      { label: "Periodo migliore", value: "da ottobre ad aprile" },
    ],
    sections: [
      {
        title: "Un egittologo, non un accompagnatore",
        body:
          "Ogni viaggio è guidato da una persona autorizzata dal Ministero del Turismo egiziano e laureata in egittologia. Sta con voi davanti ai monumenti, non aspetta al parcheggio — e per quella giornata appartiene solo a voi, rispondendo alle vostre domande invece di recitare davanti a quaranta persone. Su richiesta, in italiano.",
      },
      {
        title: "Solo il vostro gruppo",
        body:
          "Nessun pullman condiviso. Nessuna data fissa. Se viaggiate in due, l'auto, la guida e il ritmo appartengono a due persone. Il costo per persona scende sensibilmente al crescere del gruppo: una famiglia di sei paga spesso meno a testa, per un viaggio interamente privato, di quanto una coppia paghi per lo stesso itinerario.",
      },
      {
        title: "Prima progettato, poi messo per iscritto",
        body:
          "Costruiamo l'itinerario partendo dai vostri interessi e dalle vostre date, non da una pagina di catalogo. Lo ricevete per iscritto prima di qualsiasi pagamento e viene modificato tutte le volte che serve finché non è giusto. Sono compresi l'egittologo, tutti gli ingressi, i trasferimenti privati con aria condizionata, il prelievo in hotel, il pranzo nei giorni di visita e l'acqua.",
      },
      {
        title: "Il tempo si protegge, non si riempie",
        body:
          "Una giornata con quattro siti è più facile da vendere e peggiore da vivere. Progettiamo attorno alla luce, al caldo e alla folla — la Valle dei Re all'apertura, il Museo Egizio quando i pullman se ne sono andati — e il pomeriggio lo lasciamo stare.",
      },
      {
        title: "Sul prezzo, con franchezza",
        body:
          "Kemet lavora nella fascia alta del mercato egiziano e lo diciamo senza imbarazzo. Un egittologo privato per una settimana costa quello che costa; così un'auto che è solo vostra e una camera che guarda il fiume invece del parcheggio. Quello che non facciamo è quotare basso e recuperare la differenza con supplementi, soste per acquisti e un itinerario che diventa silenziosamente di gruppo.",
      },
    ],
    highlights: {
      heading: "Per chi non sono questi viaggi",
      items: [
        "Per chi cerca il prezzo più basso per l'Egitto — non siamo i più economici e non proviamo a esserlo",
        "Viaggi in pullman e partenze di gruppo a data fissa, vendute a posto",
        "Ostelli, camerate e itinerari zaino in spalla",
        "Chi preferisce organizzarsi la logistica da sé",
      ],
    },
    faqs: [
      { q: "Quanto costa un viaggio privato in Egitto?", a: "Per un viaggio interamente privato e su misura, con egittologo autorizzato, auto e autista privati e buoni alberghi, calcolate tra i 200 e i 450 euro a persona al giorno. La cifra per persona scende sensibilmente al crescere del gruppo, perché guida e mezzo vengono divisi fra più persone." },
      { q: "Ci sono guide che parlano italiano?", a: "Sì. Lavoriamo con egittologi autorizzati che guidano in italiano. Segnalatelo in fase di progettazione: il numero di egittologi italofoni è limitato e in alta stagione sono impegnati con largo anticipo." },
      { q: "Serve il visto per l'Egitto ai cittadini italiani?", a: "Sì, ma è semplice: i cittadini italiani possono acquistare il visto turistico all'arrivo in aeroporto per 30 dollari statunitensi, valido per un soggiorno fino a 30 giorni. In alternativa esiste l'e-Visa online allo stesso prezzo." },
      { q: "Quanti giorni servono per l'Egitto?", a: "Otto-dieci giorni sul posto coprono Il Cairo, Luxor, una crociera sul Nilo e Assuan senza correre. Sei-sette giorni bastano per Il Cairo e Luxor. Dodici-quattordici lasciano spazio ad Abu Simbel, Alessandria o una settimana sul Mar Rosso." },
      { q: "L'Egitto è sicuro?", a: "Le zone turistiche — Il Cairo, Giza, Luxor, Assuan, Alessandria e la costa del Mar Rosso — sono presidiate e visitate ogni anno da milioni di persone. I fastidi concreti sono i venditori insistenti ai siti principali e il traffico del Cairo, entrambi in gran parte eliminati da guida e autista privati. Consultate comunque gli avvisi aggiornati della Farnesina prima di prenotare." },
    ],
    cta: {
      heading: "Raccontateci cosa avete in mente",
      text: "Inviateci le vostre date e chi viaggia. Riceverete un itinerario vero con il prezzo dettagliato — senza impegno e senza call center.",
      whatsapp: "Buongiorno Kemet — sono interessato a un viaggio privato in Egitto.",
      emailSubject: "Richiesta — viaggio privato in Egitto",
    },
    moreLabel: "Il sito completo",
    moreText:
      "Queste pagine sono una selezione in italiano. Il catalogo completo di Kemet — tutti i viaggi, le destinazioni, le esperienze e le guide — è disponibile in inglese. Rispondiamo naturalmente in italiano.",
  },

  // ===== Viaggi ============================================================
  {
    groupId: "journeys",
    symbol: "sun",
    title: "Viaggi in Egitto — itinerari privati | Kemet",
    description:
      "Itinerari privati e su misura in Egitto, da un giorno a due settimane — con egittologo autorizzato, mezzo privato e nessuna data fissa.",
    keywords:
      "viaggi in egitto, itinerario egitto, tour egitto privato, crociera nilo prenotare, egitto su misura, cairo luxor assuan",
    crumb: "Viaggi in Egitto",
    h1: "I nostri viaggi in Egitto",
    standfirst:
      "Punti di partenza, non programmi fissi — ogni itinerario viene riscritto sulle vostre date e sul vostro gruppo.",
    lede:
      "Tutti i nostri viaggi sono privati. Quello che vedete qui sono forme collaudate, non prodotti da acquistare così come sono. Diteci quando viaggiate, chi viene e cosa vi interessa, e l'itinerario viene ridisegnato attorno a questo.",
    facts: [
      { label: "Viaggio più breve", value: "1 giorno" },
      { label: "Viaggio più lungo", value: "14 giorni" },
      { label: "Gruppo", value: "Solo il vostro" },
      { label: "Acconto", value: "25%" },
    ],
    sections: [
      {
        title: "L'itinerario classico e perché funziona",
        body:
          "Il Cairo per le Piramidi, il Grande Museo Egizio e la città medievale; Luxor per i templi e la Valle dei Re; il tratto del Nilo fino ad Assuan in barca. Quest'ordine non è casuale: i templi fra Luxor e Assuan sorgono sulla riva e sono stati costruiti per essere raggiunti dall'acqua. Otto-dieci giorni coprono tutto questo senza fretta.",
      },
      {
        title: "Cosa è compreso nel prezzo",
        body:
          "Il vostro egittologo autorizzato per tutto il viaggio, tutti i biglietti d'ingresso, i trasferimenti privati con aria condizionata, il prelievo e il rientro in hotel, il pranzo in ogni giornata di visita e l'acqua ogni giorno. Non compresi: voli internazionali, visto d'ingresso, mance, spese personali ed extra espressamente indicati. Ogni preventivo elenca entrambe le voci prima che vi impegniate.",
      },
      {
        title: "Perché il prezzo per persona scende col gruppo",
        body:
          "Una guida privata, un mezzo e un autista costano lo stesso che li usino due persone o sei. Due viaggiatori sostengono l'intero costo dell'auto; sei lo dividono. Per questo una famiglia di sei paga spesso meno a testa, per un viaggio interamente privato, di quanto una coppia paghi per lo stesso itinerario.",
      },
      {
        title: "Acconto, saldo e modifiche",
        body:
          "Un acconto del 25% conferma il viaggio; il saldo è dovuto 30 giorni prima della partenza. Prima ricevete l'itinerario scritto con il prezzo dettagliato. Le modifiche prima della conferma sono normali e gratuite: la fase di progettazione serve esattamente a questo.",
      },
    ],
    faqs: [
      { q: "Quanti giorni servono per visitare l'Egitto?", a: "Otto-dieci giorni sul posto coprono Il Cairo, Luxor, una crociera sul Nilo e Assuan senza correre. Sei-sette bastano per Il Cairo e Luxor. Sotto i cinque giorni conviene restare al Cairo e farlo bene, piuttosto che attraversare il paese due volte." },
      { q: "Qual è il periodo migliore per andare in Egitto?", a: "Da ottobre ad aprile. All'interno di questo periodo, ottobre, febbraio e la prima metà di marzo sono i più forti: lo stesso clima del picco di dicembre-gennaio, ma con molte meno persone e prezzi più bassi." },
      { q: "Vale la pena fare una crociera sul Nilo?", a: "Fra Luxor e Assuan sì, e non principalmente per la nave. I templi di quel tratto sorgono sulla riva e si raggiungono molto meglio dall'acqua che da un parcheggio. Inoltre l'alloggio si sposta mentre voi restate, eliminando due o tre cambi d'albergo." },
      { q: "L'itinerario si può modificare?", a: "Viene modificato comunque: è proprio il punto. Ogni itinerario su questa pagina è un punto di partenza. Diteci cosa volete vedere di più, di meno o per niente, e il viaggio viene riscritto prima di qualsiasi pagamento." },
    ],
    cta: {
      heading: "Quale itinerario fa per voi?",
      text: "Inviateci le vostre date e la dimensione del gruppo. Rispondiamo personalmente, di norma entro un giorno lavorativo, con un itinerario vero e un prezzo.",
      whatsapp: "Buongiorno Kemet — vorrei un preventivo per un viaggio privato in Egitto.",
      emailSubject: "Richiesta preventivo — viaggio in Egitto",
    },
    moreLabel: "Vedere tutti i viaggi",
    moreText:
      "Il catalogo completo con tutti i viaggi, le destinazioni e le esperienze è disponibile in inglese. Consigliamo e rispondiamo in italiano.",
  },

  // ===== Crociera sul Nilo =================================================
  {
    groupId: "nile-cruise",
    symbol: "fish",
    title: "Crociera sul Nilo Luxor–Assuan privata | Kemet",
    description:
      "Crociera privata sul Nilo fra Luxor e Assuan con egittologo dedicato — i templi visti dall'acqua, dahabeya o nave, e cosa conta davvero.",
    keywords:
      "crociera sul nilo, crociera nilo luxor assuan, dahabeya nilo, crociera nilo privata, motonave nilo, kom ombo edfu",
    crumb: "Crociera sul Nilo",
    h1: "La crociera sul Nilo",
    standfirst: "Fra Luxor e Assuan il fiume è la strada.",
    lede:
      "Quasi tutto ciò per cui vale la pena fermarsi fra Luxor e Assuan si trova a poche centinaia di metri dal Nilo. Per questo il fiume è la strada, e per questo per quel tratto consigliamo quasi sempre la barca. Il vantaggio vero non è la nave: è l'arrivo. Scendete e siete già lì, invece di entrare passando da un parcheggio di pullman.",
    facts: [
      { label: "Tratta", value: "Luxor ↔ Assuan" },
      { label: "Durata", value: "3–4 notti" },
      { label: "Templi lungo il percorso", value: "Kom Ombo, Edfu, Esna" },
      { label: "Periodo migliore", value: "ottobre–aprile" },
    ],
    sections: [
      {
        title: "Cosa si vede lungo il percorso",
        body:
          "Kom Ombo, l'insolito tempio doppio dedicato al dio coccodrillo Sobek e a Horus il Vecchio, proprio sulla riva. Edfu, il tempio meglio conservato d'Egitto, con le mura ancora integre. Esna, il cui soffitto dipinto è stato riportato alla luce solo negli ultimi anni. A un capo Luxor — Karnak, il tempio di Luxor, la Valle dei Re — e all'altro Assuan, con File e la strada per Abu Simbel.",
      },
      {
        title: "Dahabeya o motonave",
        body:
          "Una dahabeya è una barca a vela tradizionale, di norma con otto-dodici cabine. Ormeggia su banchi di sabbia e presso villaggi che le navi grandi non possono raggiungere, porta un decimo dei passeggeri e non ha programma di intrattenimento. Costa sensibilmente di più. Una motonave da sessanta-centoquaranta cabine è lo standard di mercato, ben disponibile e del tutto adeguata per un primo viaggio. Se il viaggio celebra qualcosa, la dahabeya è l'unico upgrade che consigliamo prima di ogni altro.",
      },
      {
        title: "La direzione di navigazione conta",
        body:
          "Le barche vanno in entrambi i sensi e non è lo stesso viaggio. Verso nord, cioè da Assuan a Luxor, si va con la corrente ed è più rapido, e Luxor arriva alla fine — il che significa raggiungere la riva occidentale e la Valle dei Re quando ormai sapete leggere un tempio. Di norma consigliamo questo senso, e per il vostro itinerario vi spieghiamo perché.",
      },
      {
        title: "Cosa la crociera non fa",
        body:
          "Non vi porta lontano dal fiume. Abydos e Dendera, i due grandi templi a nord di Luxor, non sono su nessuna rotta di crociera; e nemmeno il Fayyum, il Medio Egitto o il deserto. Se il motivo del viaggio è vedere l'Egitto oltre il circuito consueto, la barca è lo strumento sbagliato e progettiamo senza esitazione un itinerario via terra.",
      },
    ],
    faqs: [
      { q: "Quante notti dura una crociera sul Nilo?", a: "Tre o quattro notti sono lo standard e bastano. Tre notti coprono Luxor–Assuan o il contrario con i templi principali; quattro aggiungono un ritmo più lento e di solito Esna. Le crociere di sette notti ripetono in gran parte lo stesso tratto: una dahabeya sfrutta meglio le notti in più." },
      { q: "Cos'è una dahabeya?", a: "Una barca a vela tradizionale del Nilo, con due alberi e di norma otto-dodici cabine, che naviga il fiume come si faceva prima dei motori. Ormeggia su banchi di sabbia e presso villaggi irraggiungibili per le navi grandi e non ha programma di intrattenimento. Costa sensibilmente di più a notte rispetto a una motonave." },
      { q: "Si soffre il mal di mare in crociera sul Nilo?", a: "Praticamente mai. Il Nilo è acqua interna piatta, le barche vanno lente e non c'è onda. Chi non regge una traversata in mare sul fiume sta quasi sempre benissimo." },
      { q: "Con quanto anticipo prenotare una crociera sul Nilo?", a: "Tre-quattro mesi per alberghi e motonavi consuete; sei mesi se nel piano c'è una dahabeya specifica. Per Natale, Capodanno e Pasqua vale fino a un anno prima: le dahabeye sono poche decine e vengono prese per prime." },
    ],
    cta: {
      heading: "Progettare la crociera",
      text: "Diteci le vostre date e chi viaggia. Indichiamo la barca per nome nel preventivo — con le dahabeye è esattamente lì che sta la differenza.",
      whatsapp: "Buongiorno Kemet — sono interessato a una crociera privata sul Nilo.",
      emailSubject: "Richiesta — crociera sul Nilo",
    },
    moreLabel: "Approfondire il tratto del Nilo",
    moreText:
      "Programmi dettagliati, descrizioni delle imbarcazioni e il catalogo completo sono disponibili in inglese.",
  },

  // ===== Costi =============================================================
  {
    groupId: "cost",
    symbol: "sun",
    title: "Quanto costa un viaggio in Egitto? (2026) | Kemet",
    description:
      "Quanto costa davvero un viaggio privato in Egitto — le fasce reali del mercato, i cinque fattori che muovono il prezzo e dove si colloca Kemet.",
    keywords:
      "quanto costa viaggio egitto, prezzo viaggio egitto, costo crociera nilo, viaggio egitto prezzo a persona, egitto costo vacanza",
    crumb: "Costi",
    h1: "Quanto costa un viaggio privato in Egitto",
    standfirst:
      "Una risposta onesta, scritta per la fascia alta del mercato invece che per quella bassa.",
    lede:
      "Quasi tutte le pagine che rispondono a questa domanda sono scritte per un altro viaggiatore: budget giornalieri, camerate e come contrattare una feluca. È un modo legittimo di vedere l'Egitto e non è quello che progettiamo noi. Qui trovate la stessa domanda risposta per un viaggio privato e guidato, con le cifre che quotiamo davvero.",
    facts: [
      { label: "Privato, su misura", value: "200–450 € p.p./giorno" },
      { label: "Una settimana in due", value: "2.800–6.000 € totali" },
      { label: "Acconto", value: "25%" },
      { label: "Saldo", value: "30 giorni prima" },
    ],
    sections: [
      {
        title: "Quattro modi di vedere l'Egitto",
        body:
          "Viaggio indipendente con mezzi pubblici e alberghi semplici: circa 40-90 euro a persona al giorno. Viaggio di gruppo in pullman con venti-quaranta compagni e date fisse: 90-180 euro. Privato e su misura con egittologo dedicato, mezzo proprio e buoni alberghi: 200-450 euro — qui si colloca Kemet. In cima al mercato, con dahabeya noleggiata interamente e voli privati fra le città: da 600 euro. La distanza fra il fondo e la cima del mercato è in Egitto più ampia che quasi ovunque.",
      },
      {
        title: "In quanti siete — il fattore più pesante",
        body:
          "Una guida privata, un mezzo e un autista costano lo stesso che li usino due persone o sei. Il prezzo per persona scende quindi in modo netto al crescere del gruppo. Una famiglia di sei paga spesso meno a testa, per un viaggio interamente privato, di quanto una coppia paghi per lo stesso itinerario.",
      },
      {
        title: "Quando venite",
        body:
          "L'Egitto ha un'alta stagione reale — grosso modo ottobre-aprile, più Natale, Capodanno e Pasqua — e la differenza non è marginale. La stessa suite sul Nilo può costare il doppio a Capodanno rispetto a inizio giugno. Se le vostre date sono flessibili anche solo di due settimane, fine ottobre, inizio marzo e la prima metà di giugno comprano molto più viaggio a parità di spesa.",
      },
      {
        title: "Dove dormite",
        body:
          "Gli alberghi sono la voce più grossa di quasi ogni preventivo e la forbice in Egitto è enorme. Un buon cinque stelle al Cairo e un albergo storico con vista libera sulle Piramidi sono entrambi «cinque stelle»: non costano lo stesso e non sono la stessa cosa. Sul Nilo la distanza è ancora maggiore.",
      },
      {
        title: "Quanto lavorano le giornate",
        body:
          "Un itinerario con quattro siti al giorno è più economico da costruire e peggiore da vivere. Giornate più lente richiedono più notti, e più notti costano di più — ma sono la differenza fra «aver visto l'Egitto» ed «esserci stati». Preferiamo quotarvi sette giorni distesi che cinque estenuanti.",
      },
    ],
    faqs: [
      { q: "Quanto costa un tour privato dell'Egitto?", a: "Per un viaggio interamente privato e su misura, con egittologo autorizzato, auto e autista privati e buoni alberghi, calcolate tra i 200 e i 450 euro a persona al giorno. La cifra scende sensibilmente al crescere del gruppo, perché guida e mezzo vengono divisi fra più persone." },
      { q: "Perché un viaggio privato costa più di uno di gruppo?", a: "Perché quasi nulla è condiviso. Un viaggio di gruppo divide una guida, un pullman e un autista fra trenta persone; uno privato li dedica al vostro gruppo soltanto. Comprate inoltre la possibilità di cambiare il piano: restare più a lungo ad Abu Simbel, saltare il negozio di papiri, partire alle sei perché la luce è migliore." },
      { q: "Quanto mettere in conto per una settimana in Egitto?", a: "A livello privato e su misura, una settimana per due persone si colloca di norma fra 2.800 e 6.000 euro complessivi, a seconda di alberghi, stagione e se fra le città si vola o si guida. Voli internazionali, visto da 30 dollari e mance restano fuori." },
      { q: "L'Egitto è un paese caro?", a: "L'Egitto è fra i paesi meno cari al mondo per cibo, trasporti e ingressi, e insieme uno di quelli con la distanza più ampia fra fascia bassa e fascia alta. Non costa l'accesso: costa la qualità della persona che vi sta accanto a spiegare cosa state guardando." },
      { q: "Quando si paga?", a: "Un acconto del 25% del totale conferma il viaggio; il saldo è dovuto 30 giorni prima della partenza. Nulla viene pagato prima che abbiate davanti l'itinerario scritto e il prezzo dettagliato." },
    ],
    cta: {
      heading: "Un preventivo concreto",
      text: "Inviateci le vostre date, il gruppo e a grandi linee cosa volete che il viaggio sia. Riceverete un itinerario scritto con il prezzo dettagliato, senza impegno.",
      whatsapp: "Buongiorno Kemet — vorrei un preventivo per un viaggio privato in Egitto.",
      emailSubject: "Richiesta preventivo — Egitto",
    },
    moreLabel: "Dettaglio completo dei prezzi",
    moreText:
      "La panoramica completa di prezzi e servizi, con tutti i viaggi, è disponibile in inglese.",
  },

  // ===== Quando andare =====================================================
  {
    groupId: "when-to-go",
    symbol: "sun",
    title: "Quando andare in Egitto — mese per mese | Kemet",
    description:
      "Quando andare in Egitto: temperature di Cairo, Luxor, Assuan e Mar Rosso, affluenza, prezzi e un giudizio onesto mese per mese.",
    keywords:
      "quando andare in egitto, clima egitto, egitto temperature mese, miglior periodo egitto, mar rosso temperatura acqua, egitto estate caldo",
    crumb: "Quando andare",
    h1: "Quando andare in Egitto",
    standfirst:
      "Il momento cambia un viaggio in Egitto più di qualsiasi altra decisione.",
    lede:
      "La risposta breve è da ottobre ad aprile. La risposta utile è che in Egitto convivono due climi — i monumenti nell'entroterra e le barriere coralline sulla costa — e i loro momenti migliori stanno agli estremi opposti dell'anno. Ottobre è l'unico mese in cui entrambi sono quasi al meglio.",
    facts: [
      { label: "Miglior mese in assoluto", value: "ottobre" },
      { label: "Miglior mese per i monumenti", value: "febbraio" },
      { label: "Miglior rapporto prezzo-clima", value: "marzo" },
      { label: "Miglior periodo per immersioni", value: "maggio, giugno, settembre" },
    ],
    sections: [
      {
        title: "Da ottobre ad aprile — l'alta stagione",
        body:
          "In questi mesi le temperature diurne nell'entroterra restano gradevoli: Luxor fra 22 e 37 gradi a seconda del mese, Il Cairo fra 19 e 31. All'interno della stagione, ottobre, febbraio e la prima metà di marzo sono i più forti. Dicembre e gennaio offrono il clima migliore in assoluto, insieme ai prezzi più alti e alla maggiore affluenza dell'anno.",
      },
      {
        title: "Da maggio a settembre — caldo nell'entroterra, ideale al mare",
        body:
          "In piena estate Assuan raggiunge regolarmente 42-45 gradi e un itinerario lungo il Nilo va costruito interamente attorno al caldo: partenza all'alba, visite fino alle undici, pomeriggio come riposo vero. In cambio si ottengono monumenti praticamente vuoti e i prezzi più bassi dell'anno. Sul Mar Rosso è invece il periodo migliore: acqua fra i 27 e i 30 gradi.",
      },
      {
        title: "Pasqua e Ferragosto",
        body:
          "Sono le due finestre in cui la domanda italiana verso l'Egitto è più forte, e quelle in cui le buone imbarcazioni sul Nilo e le camere migliori si esauriscono per prime. Pasqua cade nel periodo più gradevole dell'anno e va prenotata con largo anticipo. Ferragosto cade nel picco del caldo: per il Mar Rosso è ottimo, per Luxor e Assuan richiede un itinerario disegnato sull'alba.",
      },
      {
        title: "Ramadan e feste",
        body:
          "Il Ramadan si sposta ogni anno di circa undici giorni. I siti restano aperti, spesso con orari ridotti, e il ritmo della giornata si inverte: pomeriggi silenziosi, poi tutto il paese si accende al tramonto per l'iftar. Molti viaggiatori lo descrivono poi come la parte più memorabile del viaggio. La festa del sole di Abu Simbel cade il 22 febbraio e il 22 ottobre.",
      },
    ],
    faqs: [
      { q: "Qual è il periodo migliore per andare in Egitto?", a: "Da ottobre ad aprile. All'interno, ottobre, febbraio e la prima metà di marzo sono i più forti: ottobre offre giornate calde e un Mar Rosso ancora estivo, febbraio il clima più gradevole per i monumenti, marzo quasi lo stesso clima a prezzi più bassi." },
      { q: "Quanto fa caldo in Egitto d'estate?", a: "A luglio e agosto Assuan raggiunge regolarmente 42-45 gradi e Luxor i quaranta bassi; Il Cairo sta nei trentacinque. Il caldo è secco e quindi più sopportabile degli stessi valori altrove, ma richiede un itinerario che parta all'alba e lasci libero il pomeriggio." },
      { q: "Qual è il periodo migliore per le immersioni nel Mar Rosso?", a: "Maggio, giugno, settembre e ottobre. L'acqua raggiunge i 27-30 gradi in estate e la visibilità è migliore in autunno. Settembre e ottobre sono la combinazione ideale: acqua ancora estiva e folla delle vacanze già rientrata." },
      { q: "L'Egitto è affollato a Natale?", a: "È il picco dell'anno. Il clima è eccellente e i prezzi delle imbarcazioni sul Nilo e delle buone camere possono raddoppiare a Capodanno — quella settimana si esaurisce fino a un anno prima. Il Natale copto del 7 gennaio prolunga la stagione di altre due settimane." },
    ],
    cta: {
      heading: "Incerti su quando?",
      text: "Diteci cosa volete che il viaggio sia — monumenti, barriera corallina, crociera o tutti e tre — e quando potete più o meno partire. Vi diciamo quale mese lo regge davvero.",
      whatsapp: "Buongiorno Kemet — vorrei un consiglio su quando andare in Egitto.",
      emailSubject: "Domanda — quando andare in Egitto",
    },
    moreLabel: "Tutti e dodici i mesi in dettaglio",
    moreText:
      "Un'analisi dettagliata di ogni singolo mese — temperature, affluenza, prezzi e giudizio — è disponibile in inglese.",
  },

  // ===== Visto =============================================================
  {
    groupId: "visa",
    symbol: "ankh",
    title: "Visto Egitto per italiani (2026) | Kemet",
    description:
      "Visto per l'Egitto per cittadini italiani: 30 dollari all'arrivo o e-Visa online, soggiorno fino a 30 giorni, passaporto valido sei mesi.",
    keywords:
      "visto egitto, visto egitto italiani, visto all'arrivo egitto, e-visa egitto, egitto documenti ingresso, costo visto egitto",
    crumb: "Visto Egitto",
    h1: "Visto per l'Egitto — cittadini italiani",
    standfirst:
      "Si ottiene all'arrivo, costa 30 dollari, vale 30 giorni. Verificato il 27 luglio 2026.",
    lede:
      "I cittadini italiani hanno bisogno di un visto turistico per l'Egitto, ma possono acquistarlo senza complicazioni all'arrivo in aeroporto. In alternativa esiste l'e-Visa online allo stesso prezzo, se preferite arrivare con il visto già emesso.",
    facts: [
      { label: "Costo", value: "30 dollari USA" },
      { label: "Soggiorno", value: "fino a 30 giorni" },
      { label: "Passaporto", value: "valido 6 mesi" },
      { label: "Pagine libere", value: "almeno 2" },
    ],
    sections: [
      {
        title: "Visto all'arrivo o e-Visa?",
        body:
          "Sono entrambi validi e costano uguale. All'arrivo è più rapido da organizzare e richiede pochi minuti allo sportello bancario in area arrivi — si paga in contanti in dollari statunitensi, quindi portate banconote in buono stato. L'e-Visa è la soluzione più tranquilla: atterrate con il visto già emesso e andate diretti al controllo passaporti, cosa che conta soprattutto dopo un volo lungo o arrivando la sera con bambini.",
      },
      {
        title: "Cosa serve avere con sé",
        body:
          "Un passaporto valido almeno sei mesi oltre la data d'ingresso, con almeno due pagine libere. Gli agenti possono chiedere la prenotazione alberghiera della prima notte e un biglietto di ritorno o proseguimento: teneteli entrambi accessibili sul telefono. Se organizziamo noi il viaggio, ricevete un unico documento di conferma con tutto ciò che potrebbe essere richiesto.",
      },
      {
        title: "Il permesso solo Sinai",
        body:
          "Se l'intero viaggio resta entro Sharm el-Sheikh, Dahab, Nuweiba e Taba, i cittadini italiani possono ottenere ai valichi del Sinai un permesso gratuito di 15 giorni invece del visto. È davvero restrittivo: non consente di raggiungere Il Cairo, Luxor, Assuan o la terraferma egiziana, nemmeno per una gita in giornata. Se c'è anche solo la possibilità di voler vedere le Piramidi, acquistate il visto normale.",
      },
      {
        title: "Arrivare dall'Italia",
        body:
          "Circa 3 ore e 15 minuti senza scalo da Roma o Milano — il volo più breve verso l'Egitto fra i grandi mercati dell'Europa occidentale. Anche Venezia e Napoli servono Il Cairo. Hurghada e Marsa Alam ricevono voli diretti da numerosi aeroporti italiani, cosa rilevante se il viaggio è costruito attorno al Mar Rosso.",
      },
    ],
    highlights: {
      heading: "Importante",
      items: [
        "Le regole d'ingresso sono stabilite dal governo egiziano e possono cambiare",
        "Queste informazioni sono state verificate il 27 luglio 2026 su fonti pubbliche",
        "Fa fede esclusivamente il portale ufficiale visa2egypt.gov.eg — verificatelo prima di prenotare",
        "Se viaggiate con noi, confermiamo per iscritto i vostri requisiti esatti prima di qualsiasi pagamento",
      ],
    },
    faqs: [
      { q: "Serve il visto per l'Egitto ai cittadini italiani?", a: "Sì. I cittadini italiani possono acquistare il visto turistico a ingresso singolo all'arrivo negli aeroporti egiziani per 30 dollari statunitensi, valido per un soggiorno fino a 30 giorni. L'e-Visa è disponibile online allo stesso prezzo se preferite arrivare con il visto già emesso." },
      { q: "Quanto costa il visto per l'Egitto?", a: "30 dollari statunitensi per l'ingresso singolo, sia acquistato in aeroporto sia richiesto online come e-Visa. L'e-Visa a ingressi multipli costa 65 dollari. Il prezzo dell'ingresso singolo è passato da 25 a 30 dollari il 1° marzo 2026. Gli sportelli in aeroporto accettano solo contanti." },
      { q: "Quanto posso restare con il visto turistico?", a: "Fino a 30 giorni dalla data d'ingresso. Le proroghe sono possibili in Egitto tramite le autorità competenti, ma richiedono tempo. Se sapete già di voler restare più a lungo, richiedete l'e-Visa a ingressi multipli o pianificate entro i 30 giorni." },
      { q: "Quanto deve essere valido il passaporto?", a: "Almeno sei mesi oltre la data d'ingresso, con almeno due pagine libere. È il requisito standard e viene verificato all'arrivo." },
      { q: "Quanto dura il volo dall'Italia all'Egitto?", a: "Circa 3 ore e 15 minuti senza scalo da Roma o Milano verso Il Cairo — il volo più breve verso l'Egitto fra i grandi mercati dell'Europa occidentale. Hurghada e Marsa Alam ricevono voli diretti da molti aeroporti italiani." },
    ],
    cta: {
      heading: "Un viaggio dall'Italia?",
      text: "Inviateci le vostre date e chi viaggia. Confermiamo i requisiti d'ingresso e costruiamo il viaggio attorno a questi.",
      whatsapp: "Buongiorno Kemet — viaggio dall'Italia e vorrei organizzare un viaggio privato in Egitto.",
      emailSubject: "Richiesta dall'Italia — Kemet Egitto",
    },
    moreLabel: "Requisiti d'ingresso per altre nazionalità",
    moreText:
      "Le regole d'ingresso per cinquanta nazionalità — con costo, durata del soggiorno e tempi di volo — sono disponibili in inglese.",
  },

  // ===== L'Egitto è sicuro? ================================================
  // Il riferimento è Viaggiare Sicuri della Farnesina, non i bollettini
  // anglosassoni, e la distinzione fra Sinai del Nord e del Sud è esplicita:
  // il mercato italiano vola in massa su Sharm el-Sheikh e Marsa Alam e legge
  // titoli sul "Sinai" che parlano di un'altra regione.
  {
    groupId: "safety",
    symbol: "horus",
    title: "L'Egitto è sicuro? Una risposta onesta | Kemet",
    description:
      "L'Egitto è sicuro? Regione per regione — Il Cairo, Luxor, Mar Rosso e Sinai — con donne sole, acqua, venditori insistenti e le zone sconsigliate.",
    keywords:
      "egitto è sicuro, sicurezza egitto, egitto viaggiare sicuri, sharm el sheikh è sicura, marsa alam sicura, viaggiare da sola in egitto, egitto vacanze sicurezza 2026",
    crumb: "Sicurezza",
    h1: "L'Egitto è sicuro?",
    standfirst:
      "La versione onesta — quello che conta davvero, quello che è rumore di fondo, e l'unica regione che fa davvero eccezione.",
    lede:
      "Gran parte dell'ansia legata a un viaggio in Egitto viene dai titoli di giornale, non dal paese. Le zone in cui un viaggiatore va davvero sono fra le aree turistiche più sorvegliate al mondo, e i problemi che i visitatori segnalano realmente sono ordinari: venditori che non accettano un primo no, un traffico con una logica tutta sua, un caldo che a giugno è pericoloso se non lo si pianifica, e uno stomaco che reagisce a un'acqua diversa. Niente di tutto ciò è irrilevante. Niente di tutto ciò è nemmeno quello che ci si immagina.",
    facts: [
      { label: "Emergenze", value: "Polizia 122 · Ambulanza 123 · Polizia turistica 126" },
      { label: "Acqua del rubinetto", value: "Non potabile — bottiglia ovunque" },
      { label: "Fastidio principale", value: "Venditori insistenti · traffico al Cairo" },
      { label: "Prima di prenotare", value: "Consultare Viaggiare Sicuri" },
    ],
    sections: [
      {
        title: "Sinai del Nord e Sinai del Sud non sono la stessa cosa",
        body:
          "È il punto più importante di questa pagina, ed è quello che viene confuso più spesso. Il Sinai del Nord è oggetto di una sconsigliazione stabile da parte della Farnesina e della maggior parte dei governi occidentali. Le località che gli italiani intendono quando dicono \"Sinai\" — Sharm el-Sheikh, Dahab, Nuweiba — si trovano nel Sinai del Sud, a diverse centinaia di chilometri di distanza, e sono di norma escluse da quelle indicazioni. I voli charter dall'Italia vi operano con continuità. Nessun itinerario Kemet entra nel Sinai del Nord né nelle zone di confine del deserto occidentale.",
      },
      {
        title: "Il Cairo e Giza",
        body:
          "Le piramidi, i musei e il Cairo islamico ricevono milioni di visitatori l'anno senza incidenti. I due fastidi reali sono il traffico — denso e improvvisato — e i venditori insistenti sull'altopiano di Giza. Un autista privato elimina completamente il primo, una guida egittologa elimina in gran parte il secondo: gli approcci vengono intercettati prima di arrivare a voi, perché a intercettarli è qualcuno che i venditori riconoscono come del posto.",
      },
      {
        title: "Alto Egitto: il rischio è il caldo, non la criminalità",
        body:
          "Luxor e Assuan sono più tranquille del Cairo sotto ogni aspetto, e i siti monumentali sono presidiati in modo capillare. Il rischio reale fra maggio e settembre non è la criminalità ma il caldo: 45 °C alle due del pomeriggio sono una questione medica, non un disagio. In quei mesi costruiamo gli itinerari attorno a partenze all'alba e pomeriggi liberi — oppure vi diciamo che ottobre sarebbe la scelta migliore.",
      },
      {
        title: "Viaggiare da sola",
        body:
          "Le donne viaggiano da sole in Egitto, e ciò che viene riferito più spesso non è pericolo ma attenzione: sguardi, commenti, approcci insistenti, soprattutto nelle zone affollate del Cairo. Una guida privata cambia questa dinamica più di qualunque altra singola misura, perché gli approcci si interrompono quando si è visibilmente accompagnate da un professionista egiziano. Tenere spalle e ginocchia coperte fuori dai villaggi turistici riduce ulteriormente l'attenzione, ed è comunque richiesto in moschee e chiese.",
      },
      {
        title: "Acqua, cibo e stomaco",
        body:
          "L'acqua del rubinetto non è potabile in nessuna parte dell'Egitto, nemmeno negli hotel buoni e nemmeno per lavarsi i denti. L'acqua in bottiglia è ovunque, costa poco ed è inclusa in ogni giornata di visita. Il ghiaccio di hotel e ristoranti affermati è prodotto con acqua trattata e non pone problemi; quello di un chiosco di strada sì. Mangiate dove c'è ricambio: un banco affollato è un banco sicuro.",
      },
      {
        title: "Quello che non pretendiamo di essere",
        body:
          "Le indicazioni cambiano, e noi siamo un operatore turistico, non un'autorità. Prima di prenotare qualsiasi cosa, leggete le raccomandazioni aggiornate di Viaggiare Sicuri per l'Egitto: sono scritte per i cittadini italiani e sono più aggiornate di qualunque pagina di un operatore, questa compresa. Se riteniamo che un percorso richiesto sia una cattiva idea, ve lo diciamo — anche quando ci costa la prenotazione.",
      },
    ],
    highlights: {
      heading: "In breve",
      items: [
        "Le regioni turistiche — Cairo, Giza, Luxor, Assuan, Alessandria, Mar Rosso — sono fortemente presidiate",
        "Sinai del Nord: sconsigliato. Sinai del Sud con Sharm el-Sheikh e Dahab: normalmente escluso",
        "Nessun itinerario Kemet entra nel Sinai del Nord o nelle zone di confine occidentali",
        "Acqua del rubinetto mai, nemmeno per i denti",
        "Consultare Viaggiare Sicuri prima di prenotare",
      ],
    },
    faqs: [
      { q: "L'Egitto è sicuro per i turisti nel 2026?", a: "Le regioni turistiche — Il Cairo, Giza, Luxor, Assuan, Alessandria e la costa del Mar Rosso — sono fortemente presidiate e ricevono milioni di viaggiatori l'anno senza incidenti. I fastidi concreti sono i venditori insistenti nei siti principali e il traffico del Cairo, entrambi in gran parte eliminati da una guida privata con autista. Il Sinai del Nord e alcune zone di confine sono sconsigliati e non rientrano in alcun itinerario. Consultate Viaggiare Sicuri prima di prenotare." },
      { q: "Sharm el-Sheikh è sicura?", a: "Sharm el-Sheikh si trova nel Sinai del Sud, normalmente escluso dalle indicazioni relative al Sinai del Nord, ed è servita con continuità dai voli charter europei. La zona alberghiera e i fondali di Ras Mohammed sono autonomi e frequentati regolarmente. L'avvertenza di cui molti hanno letto riguarda il Sinai del Nord, a centinaia di chilometri di distanza e fuori da qualsiasi itinerario." },
      { q: "Marsa Alam e Hurghada sono sicure?", a: "Sì. Marsa Alam e Hurghada sono località del Mar Rosso sulla terraferma egiziana, lontane dal Sinai, e ricevono voli diretti da diversi aeroporti italiani. Funzionano tutto l'anno per il traffico charter europeo. Immersioni e sport acquatici comportano il normale rischio legato all'operatore: per questo l'operatore conta più del prezzo, e vi diciamo il nostro prima di prenotare." },
      { q: "Posso viaggiare da sola in Egitto?", a: "Sì, e molte lo fanno. Quello che viene riferito è soprattutto attenzione più che pericolo — sguardi, commenti, approcci insistenti, in particolare nelle zone affollate del Cairo. Una guida privata cambia sensibilmente la situazione, perché gli approcci cessano quando si è visibilmente accompagnate. Spalle e ginocchia coperte fuori dai villaggi turistici riducono ulteriormente l'attenzione." },
      { q: "Si può bere l'acqua del rubinetto in Egitto?", a: "No, in nessun luogo, nemmeno negli hotel buoni e nemmeno per lavarsi i denti. L'acqua in bottiglia è disponibile ovunque, costa poco ed è inclusa in ogni giornata di visita. Il ghiaccio di hotel e ristoranti affermati non pone problemi, quello di strada sì." },
      { q: "Servono vaccinazioni o un'assicurazione di viaggio?", a: "Per l'ingresso dall'Italia non sono richieste vaccinazioni, ma fate verificare dal vostro medico o da un ambulatorio di medicina dei viaggi cosa sia raccomandato per voi e se le vaccinazioni di routine siano aggiornate. L'assicurazione sanitaria di viaggio non è obbligatoria ma è fortemente consigliata, soprattutto se sono previste immersioni o voli in mongolfiera: molte polizze li escludono per impostazione predefinita." },
    ],
    cta: {
      heading: "Ancora dubbi?",
      text: "Chiedeteci esattamente ciò che vi preoccupa. Avrete una risposta diretta — anche quando la risposta è che un certo piano non è una buona idea.",
      whatsapp: "Buongiorno Kemet — ho una domanda sulla sicurezza in Egitto.",
      emailSubject: "Domanda sulla sicurezza in Egitto — Kemet",
    },
    moreLabel: "Versione completa in inglese",
    moreText:
      "La versione integrale, con altre regioni e altre domande, è disponibile in inglese.",
  },
];
