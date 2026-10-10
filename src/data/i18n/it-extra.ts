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
import { PEAK } from "@/data/ultra/journeys";

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
