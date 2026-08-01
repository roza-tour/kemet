// ---------------------------------------------------------------------------
// Deutsche Seiten — six key pages for the German market.
//
// Germany is Egypt's largest European source market by a clear margin, and
// German travellers search in German far more consistently than Italian or
// Spanish ones. Reference points are chosen accordingly: direct flights from
// Frankfurt and Munich, German school-holiday windows, and the Red Sea winter
// charter traffic that dominates the market.
// ---------------------------------------------------------------------------
import type { LocalizedPage } from "./types";

export const de: LocalizedPage[] = [
  // ===== Startseite ========================================================
  {
    groupId: "home",
    symbol: "ankh",
    title: "Kemet — Private Ägypten-Reisen mit Ägyptologen",
    description:
      "Maßgeschneiderte private Ägypten-Reisen: eigener lizenzierter Ägyptologe, eigener Wagen, keine Gruppenbusse und keine festen Termine.",
    keywords:
      "ägypten reisen, private ägypten rundreise, ägypten individualreise, nilkreuzfahrt, ägyptologe reiseleiter, luxusreise ägypten",
    crumb: "Startseite",
    h1: "Ägypten, privat bereist",
    standfirst:
      "Kein Reisebus, keine festen Abfahrtstermine, keine Fremden auf Ihrer Reiseroute.",
    lede:
      "Ägypten ist nicht ein Land, sondern acht kulturelle Welten entlang eines einzigen Flusses. Kemet plant private, unaufgeregte Reisen durch diese Welten — von den Pyramiden von Gizeh über die Tempel von Luxor bis zur Nilfahrt nach Assuan. Jede Reise wird von einem staatlich lizenzierten Ägyptologen begleitet und vollständig um Sie herum entworfen.",
    facts: [
      { label: "Reiseform", value: "Ausschließlich privat" },
      { label: "Reiseleitung", value: "Lizenzierter Ägyptologe" },
      { label: "Flugzeit ab Frankfurt", value: "ca. 4 Std. 15 Min." },
      { label: "Beste Reisezeit", value: "Oktober bis April" },
    ],
    sections: [
      {
        title: "Ein Ägyptologe, kein Reiseleiter",
        body:
          "Jede Reise wird von einem vom ägyptischen Tourismusministerium lizenzierten Führer mit einem Abschluss in Ägyptologie begleitet. Er steht mit Ihnen vor den Monumenten, nicht auf dem Parkplatz — und er gehört für den Tag Ihnen allein und beantwortet Ihre Fragen, statt vierzig Menschen etwas vorzutragen. Auf Wunsch auf Deutsch.",
      },
      {
        title: "Nur Ihre Reisegruppe",
        body:
          "Keine geteilten Busse. Keine festen Abfahrtstermine. Wenn Sie zu zweit reisen, gehören der Wagen, der Führer und das Tempo zwei Menschen. Der Preis pro Person sinkt dabei deutlich, je größer die Gruppe wird — eine Familie zu sechst zahlt pro Kopf oft weniger als ein Paar für dieselbe Reiseroute.",
      },
      {
        title: "Erst geplant, dann schriftlich",
        body:
          "Wir entwerfen die Reiseroute aus Ihren Interessen und Ihren Daten — nicht aus einem Katalog. Sie erhalten sie schriftlich, bevor irgendetwas bezahlt wird, und sie wird so oft geändert, wie Sie möchten, bis sie stimmt. Enthalten sind der Ägyptologe, sämtliche Eintritte, private klimatisierte Transfers, Abholung am Hotel, Mittagessen an Besichtigungstagen und Wasser.",
      },
      {
        title: "Zeit wird geschützt, nicht gefüllt",
        body:
          "Ein Tag mit vier Sehenswürdigkeiten lässt sich billiger verkaufen und schlechter erleben. Wir planen nach Licht, Hitze und Besucherströmen — das Tal der Könige zur Öffnung, das Ägyptische Museum, wenn die Busse weg sind — und lassen den Nachmittag in Ruhe.",
      },
      {
        title: "Wo wir stehen, offen gesagt",
        body:
          "Kemet arbeitet im oberen Segment des ägyptischen Marktes, und wir sagen das ohne Umschweife. Ein privater Ägyptologe für eine Woche kostet, was er kostet; ebenso ein Wagen, der nur Ihnen gehört, und ein Zimmer mit Blick auf den Fluss statt auf den Parkplatz. Was wir nicht tun: niedrig anbieten und die Differenz später über Zusatzleistungen und Einkaufsstopps zurückholen.",
      },
    ],
    highlights: {
      heading: "Für wen diese Reisen nicht gedacht sind",
      items: [
        "Für alle, die den günstigsten Preis für Ägypten suchen — wir sind nicht die Günstigsten und versuchen es auch nicht zu sein",
        "Bus- und Gruppenreisen mit festen Terminen, platzweise verkauft",
        "Hostels, Mehrbettzimmer und Backpacking-Routen",
        "Reisende, die die Organisation lieber selbst übernehmen",
      ],
    },
    faqs: [
      { q: "Was kostet eine private Ägypten-Reise?", a: "Für eine vollständig private, maßgeschneiderte Reise mit lizenziertem Ägyptologen, eigenem Fahrzeug und Fahrer sowie guten Hotels rechnen Sie mit etwa 200 bis 450 Euro pro Person und Tag. Der Betrag pro Person sinkt deutlich, je größer die Reisegruppe ist, weil Führer und Fahrzeug auf mehr Personen verteilt werden." },
      { q: "Gibt es deutschsprachige Reiseleiter?", a: "Ja. Wir arbeiten mit lizenzierten Ägyptologen, die auf Deutsch führen. Bitte geben Sie den Wunsch bei der Planung an — die Zahl der deutschsprachigen Ägyptologen ist begrenzt und sie sind in der Hauptsaison früh ausgebucht." },
      { q: "Brauchen Deutsche ein Visum für Ägypten?", a: "Ja, aber unkompliziert: deutsche Staatsangehörige können das Touristenvisum bei der Ankunft am Flughafen für 30 US-Dollar kaufen, gültig für einen Aufenthalt von bis zu 30 Tagen. Alternativ steht das e-Visum online zum gleichen Preis zur Verfügung." },
      { q: "Wie lange sollte eine Ägypten-Reise dauern?", a: "Acht bis zehn Tage vor Ort decken Kairo, Luxor, eine Nilkreuzfahrt und Assuan ohne Hetze ab. Sechs bis sieben Tage reichen für Kairo und Luxor. Zwölf bis vierzehn Tage lassen Raum für Abu Simbel, Alexandria oder eine Woche am Roten Meer." },
      { q: "Ist Ägypten sicher?", a: "Die touristischen Regionen — Kairo, Gizeh, Luxor, Assuan, Alexandria und die Küste des Roten Meeres — werden jährlich von Millionen Menschen besucht und sind gut gesichert. Die praktischen Ärgernisse sind aufdringliche Händler an den großen Stätten und der Kairoer Verkehr; beides entfällt mit privatem Führer und Fahrer weitgehend. Prüfen Sie vor der Buchung die aktuellen Hinweise des Auswärtigen Amts." },
    ],
    cta: {
      heading: "Erzählen Sie uns, was Sie vorhaben",
      text: "Schicken Sie uns Ihre Reisedaten und wer mitreist. Sie erhalten eine echte Reiseroute mit aufgeschlüsseltem Preis — unverbindlich und ohne Callcenter.",
      whatsapp: "Guten Tag Kemet — ich interessiere mich für eine private Ägypten-Reise.",
      emailSubject: "Anfrage — private Ägypten-Reise",
    },
    moreLabel: "Die vollständige Website",
    moreText:
      "Diese Seiten sind eine Auswahl auf Deutsch. Der vollständige Kemet-Katalog — alle Reisen, Reiseziele, Erlebnisse und Reiseführer — steht auf Englisch zur Verfügung. Wir antworten selbstverständlich auf Deutsch.",
  },

  // ===== Reisen ============================================================
  {
    groupId: "journeys",
    symbol: "sun",
    title: "Ägypten-Reisen — private Rundreisen | Kemet",
    description:
      "Private, maßgeschneiderte Ägypten-Rundreisen von einem Tag bis zwei Wochen — mit lizenziertem Ägyptologen, eigenem Fahrzeug und ohne feste Termine.",
    keywords:
      "ägypten rundreise, ägypten individualreise, private ägypten reise, nilkreuzfahrt buchen, ägypten reiseroute, kairo luxor assuan",
    crumb: "Ägypten-Reisen",
    h1: "Unsere Ägypten-Reisen",
    standfirst:
      "Ausgangspunkte, keine festen Programme — jede Route wird um Ihre Daten und Ihre Gruppe neu geschrieben.",
    lede:
      "Alle unsere Reisen sind privat. Was Sie hier sehen, sind bewährte Formen — nicht Produkte, die Sie so kaufen müssen, wie sie dastehen. Sagen Sie uns, wann Sie reisen, wer mitkommt und was Sie interessiert, und die Route wird darum herum neu entworfen.",
    facts: [
      { label: "Kürzeste Reise", value: "1 Tag" },
      { label: "Längste Reise", value: "14 Tage" },
      { label: "Gruppengröße", value: "Nur Ihre Gruppe" },
      { label: "Anzahlung", value: "25 %" },
    ],
    sections: [
      {
        title: "Die klassische Route und warum sie funktioniert",
        body:
          "Kairo für die Pyramiden, das Große Ägyptische Museum und die mittelalterliche Stadt; Luxor für die Tempel und das Tal der Könige; die Nilstrecke nach Assuan mit dem Schiff. Diese Reihenfolge ist kein Zufall — die Tempel zwischen Luxor und Assuan liegen am Ufer und wurden gebaut, um vom Wasser aus erreicht zu werden. Acht bis zehn Tage decken das ohne Hetze ab.",
      },
      {
        title: "Was im Preis enthalten ist",
        body:
          "Ihr privater lizenzierter Ägyptologe während der gesamten Reise, sämtliche Eintrittsgelder, private klimatisierte Transfers, Abholung und Rückbringung am Hotel, Mittagessen an jedem Besichtigungstag und täglich Trinkwasser. Nicht enthalten: internationale Flüge, das Einreisevisum, Trinkgelder, persönliche Ausgaben und ausdrücklich benannte Zusatzleistungen. Jedes Angebot listet beide Seiten auf, bevor Sie sich festlegen.",
      },
      {
        title: "Warum der Preis pro Person mit der Gruppengröße sinkt",
        body:
          "Ein privater Führer, ein Fahrzeug und ein Fahrer kosten dasselbe, ob zwei oder sechs Personen sie nutzen. Zwei Reisende tragen die gesamten Fahrzeugkosten; sechs teilen sie. Deshalb zahlt eine sechsköpfige Familie für eine vollständig private Reise pro Kopf häufig weniger als ein Paar für dieselbe Route.",
      },
      {
        title: "Anzahlung, Restzahlung und Änderungen",
        body:
          "Eine Anzahlung von 25 Prozent bestätigt die Reise; die Restzahlung ist 30 Tage vor Abreise fällig. Vorher erhalten Sie die schriftliche Reiseroute mit aufgeschlüsseltem Preis. Änderungswünsche vor der Bestätigung sind selbstverständlich und kostenfrei — dafür ist die Planungsphase da.",
      },
    ],
    faqs: [
      { q: "Wie viele Tage braucht man für Ägypten?", a: "Acht bis zehn Tage vor Ort decken Kairo, Luxor, eine Nilkreuzfahrt und Assuan ohne Hetze ab. Sechs bis sieben Tage reichen für Kairo und Luxor. Unter fünf Tagen bleiben Sie besser in Kairo und machen es richtig, statt das Land zweimal zu durchqueren." },
      { q: "Wann ist die beste Reisezeit für Ägypten?", a: "Oktober bis April. Innerhalb dieses Zeitraums sind Oktober, Februar und die erste Märzhälfte am stärksten: dieselbe Wetterlage wie im Dezember-Januar-Hochbetrieb, aber mit spürbar weniger Menschen und niedrigeren Preisen." },
      { q: "Lohnt sich eine Nilkreuzfahrt?", a: "Zwischen Luxor und Assuan ja — und zwar nicht in erster Linie wegen des Schiffes. Die Tempel dieser Strecke liegen am Ufer und werden vom Wasser aus deutlich besser erreicht als über einen Busparkplatz. Zudem bewegt sich die Unterkunft, während Sie bleiben, was zwei bis drei Hotelwechsel erspart." },
      { q: "Kann die Reiseroute geändert werden?", a: "Sie wird ohnehin geändert — das ist der Punkt. Jede Route auf dieser Seite ist ein Ausgangspunkt. Sagen Sie uns, was Sie mehr, weniger oder gar nicht sehen möchten, und die Reise wird entsprechend neu geschrieben, bevor irgendetwas bezahlt wird." },
    ],
    cta: {
      heading: "Welche Route passt zu Ihnen?",
      text: "Schicken Sie uns Ihre Reisedaten und Ihre Gruppengröße. Wir antworten persönlich, in der Regel innerhalb eines Werktags, mit einer echten Reiseroute und einem Preis.",
      whatsapp: "Guten Tag Kemet — ich hätte gern ein Angebot für eine private Ägypten-Rundreise.",
      emailSubject: "Angebotsanfrage — Ägypten-Rundreise",
    },
    moreLabel: "Alle Reisen ansehen",
    moreText:
      "Der vollständige Katalog mit allen Reisen, Reisezielen und Erlebnissen steht auf Englisch zur Verfügung. Wir beraten und antworten auf Deutsch.",
  },

  // ===== Nilkreuzfahrt =====================================================
  {
    groupId: "nile-cruise",
    symbol: "fish",
    title: "Nilkreuzfahrt Luxor–Assuan privat | Kemet",
    description:
      "Private Nilkreuzfahrt zwischen Luxor und Assuan mit eigenem Ägyptologen — Tempel vom Wasser aus, Dahabiya oder Schiff, was wirklich zählt.",
    keywords:
      "nilkreuzfahrt, nilkreuzfahrt luxor assuan, dahabiya nil, nilkreuzfahrt privat, ägypten schiffsreise, kom ombo edfu",
    crumb: "Nilkreuzfahrt",
    h1: "Die Nilkreuzfahrt",
    standfirst: "Zwischen Luxor und Assuan ist der Fluss die Straße.",
    lede:
      "Fast alles, wofür es sich auf der Strecke zwischen Luxor und Assuan zu halten lohnt, liegt wenige hundert Meter vom Nil entfernt. Deshalb ist der Fluss die Straße — und deshalb empfehlen wir für diesen Abschnitt praktisch immer das Schiff. Der eigentliche Vorteil ist nicht das Boot, sondern die Ankunft: Sie steigen aus und sind da, statt über einen Busparkplatz hineinzugehen.",
    facts: [
      { label: "Strecke", value: "Luxor ↔ Assuan" },
      { label: "Dauer", value: "3–4 Nächte" },
      { label: "Tempel unterwegs", value: "Kom Ombo, Edfu, Esna" },
      { label: "Beste Zeit", value: "Oktober bis April" },
    ],
    sections: [
      {
        title: "Was Sie unterwegs sehen",
        body:
          "Kom Ombo, der ungewöhnliche Doppeltempel für den Krokodilgott Sobek und Horus den Älteren, direkt am Ufer. Edfu, der besterhaltene Tempel Ägyptens, dessen Mauern vollständig stehen. Esna mit seiner erst in den letzten Jahren freigelegten farbigen Decke. Dazu Luxor an einem Ende — Karnak, Luxor-Tempel, Tal der Könige — und Assuan mit Philae und dem Weg nach Abu Simbel am anderen.",
      },
      {
        title: "Dahabiya oder Kreuzfahrtschiff",
        body:
          "Eine Dahabiya ist ein traditionelles Segelschiff mit meist acht bis zwölf Kabinen. Sie ankert an Sandbänken und Dörfern, die große Schiffe nicht anfahren können, trägt ein Zehntel der Passagiere und hat kein Unterhaltungsprogramm. Sie kostet deutlich mehr. Ein Kreuzfahrtschiff mit sechzig bis hundertvierzig Kabinen ist der Marktstandard, gut verfügbar und für eine erste Reise völlig angemessen. Wenn Ihre Reise einen Anlass hat, ist die Dahabiya das Upgrade, das wir vor jedem anderen empfehlen.",
      },
      {
        title: "Fahrtrichtung — sie macht einen Unterschied",
        body:
          "Schiffe fahren in beide Richtungen, und es ist nicht dieselbe Reise. Nach Norden, also Assuan nach Luxor, ist schneller mit der Strömung, und Luxor kommt zum Schluss — was bedeutet, dass Sie das Westufer mit dem Tal der Könige erreichen, wenn Sie einen Tempel bereits lesen können. Wir empfehlen meist diese Richtung und erklären für Ihre Route, warum.",
      },
      {
        title: "Was eine Kreuzfahrt nicht leistet",
        body:
          "Sie bringt Sie nicht vom Fluss weg. Abydos und Dendera, die beiden großen Tempel nördlich von Luxor, liegen auf keiner Kreuzfahrtroute; ebenso wenig das Fayum, Mittelägypten oder die Wüste. Wenn Sie Ägypten jenseits des Standardkreises sehen möchten, ist das Schiff das falsche Werkzeug, und wir planen ohne Zögern eine Landroute.",
      },
    ],
    faqs: [
      { q: "Wie viele Nächte sollte eine Nilkreuzfahrt dauern?", a: "Drei bis vier Nächte sind Standard und ausreichend. Drei Nächte decken Luxor bis Assuan oder umgekehrt mit den Haupttempeln ab; vier bringen ein ruhigeres Tempo und meist Esna dazu. Siebennächtige Fahrten wiederholen überwiegend dieselbe Strecke — eine Dahabiya nutzt die zusätzlichen Nächte besser." },
      { q: "Was ist eine Dahabiya?", a: "Ein traditionelles Nilsegelschiff mit zwei Masten und meist acht bis zwölf Kabinen, das den Fluss so befährt wie vor der Zeit der Motoren. Es ankert an Sandbänken und Dörfern, die große Schiffe nicht erreichen, und hat kein Unterhaltungsprogramm. Es kostet deutlich mehr pro Nacht als ein normales Kreuzfahrtschiff." },
      { q: "Wird man auf einer Nilkreuzfahrt seekrank?", a: "Praktisch nie. Der Nil ist flaches Binnengewässer, die Schiffe fahren langsam, es gibt keinen Seegang. Reisende, die eine Seeüberfahrt nicht vertragen, sind auf dem Fluss fast immer völlig beschwerdefrei." },
      { q: "Wann sollte man eine Nilkreuzfahrt buchen?", a: "Drei bis vier Monate im Voraus für Hotels und übliche Kreuzfahrtschiffe; sechs Monate, wenn eine bestimmte Dahabiya Teil des Plans ist. Für Weihnachten, Neujahr und Ostern gilt: bis zu ein Jahr vorher — es gibt nur wenige Dahabiyas und sie sind zuerst vergeben." },
    ],
    cta: {
      heading: "Nilkreuzfahrt planen",
      text: "Sagen Sie uns Ihre Reisedaten und wer mitreist. Wir nennen das Schiff namentlich im Angebot — bei Dahabiyas ist genau das der Unterschied.",
      whatsapp: "Guten Tag Kemet — ich interessiere mich für eine private Nilkreuzfahrt.",
      emailSubject: "Anfrage — Nilkreuzfahrt",
    },
    moreLabel: "Mehr zur Nilstrecke",
    moreText:
      "Ausführliche Reiseverläufe, Schiffsbeschreibungen und der vollständige Reisekatalog stehen auf Englisch zur Verfügung.",
  },

  // ===== Kosten ============================================================
  {
    groupId: "cost",
    symbol: "sun",
    title: "Was kostet eine Ägypten-Reise? (2026) | Kemet",
    description:
      "Was eine private Ägypten-Reise wirklich kostet — Preisspannen des Marktes, die fünf Faktoren, die den Preis bestimmen, und wo Kemet steht.",
    keywords:
      "ägypten reise kosten, was kostet ägypten urlaub, nilkreuzfahrt preis, private ägypten rundreise preis, ägypten reise preis pro person",
    crumb: "Kosten",
    h1: "Was eine private Ägypten-Reise kostet",
    standfirst:
      "Eine ehrliche Antwort, geschrieben für das obere Marktsegment statt für das untere.",
    lede:
      "Die meisten Seiten zu dieser Frage sind für andere Reisende geschrieben — Tagesbudgets, Mehrbettzimmer und wie man um eine Feluke feilscht. Das ist eine legitime Art, Ägypten zu sehen, und nicht die, die wir planen. Hier ist dieselbe Frage für eine private, geführte Reise beantwortet, mit den Zahlen, die wir tatsächlich anbieten.",
    facts: [
      { label: "Privat, maßgeschneidert", value: "200–450 € p. P./Tag" },
      { label: "Eine Woche zu zweit", value: "2.800–6.000 € gesamt" },
      { label: "Anzahlung", value: "25 %" },
      { label: "Restzahlung", value: "30 Tage vorher" },
    ],
    sections: [
      {
        title: "Vier Arten, Ägypten zu sehen",
        body:
          "Individualreise mit öffentlichen Verkehrsmitteln und einfachen Hotels: etwa 40 bis 90 Euro pro Person und Tag. Gruppenreise im Bus mit zwanzig bis vierzig Mitreisenden und festen Terminen: 90 bis 180 Euro. Privat und maßgeschneidert mit eigenem Ägyptologen, eigenem Fahrzeug und guten Hotels: 200 bis 450 Euro — hier steht Kemet. Ganz oben, mit gecharterter Dahabiya und Privatflügen zwischen den Städten: ab 600 Euro. Der Abstand zwischen unterem und oberem Ende ist in Ägypten größer als in fast jedem anderen Land.",
      },
      {
        title: "Wie viele Sie sind — der größte Einzelfaktor",
        body:
          "Ein privater Führer, ein Fahrzeug und ein Fahrer kosten dasselbe, ob zwei oder sechs Personen sie nutzen. Der Preis pro Person fällt daher deutlich, je größer die Gruppe wird. Eine sechsköpfige Familie zahlt pro Kopf oft weniger für eine vollständig private Reise als ein Paar für dieselbe Route.",
      },
      {
        title: "Wann Sie reisen",
        body:
          "Ägypten hat eine echte Hochsaison — etwa Oktober bis April, dazu Weihnachten, Neujahr und Ostern — und der Unterschied ist nicht geringfügig. Dieselbe Nilsuite kann über Neujahr doppelt so viel kosten wie Anfang Juni. Wenn Ihre Daten auch nur um zwei Wochen flexibel sind, bekommen Sie Ende Oktober, Anfang März und in der ersten Junihälfte spürbar mehr Reise für dasselbe Geld.",
      },
      {
        title: "Wo Sie schlafen",
        body:
          "Hotels sind in den meisten Angeboten der größte Posten, und die Spanne in Ägypten ist enorm. Ein solides Fünf-Sterne-Haus in Kairo und ein historisches Hotel mit freiem Blick auf die Pyramiden sind beide „fünf Sterne\" — sie kosten nicht dasselbe und sie sind nicht dasselbe. Am Nil ist der Abstand noch größer.",
      },
      {
        title: "Wie hart die Tage arbeiten",
        body:
          "Eine Route mit vier Sehenswürdigkeiten pro Tag ist billiger zu bauen und schlechter zu erleben. Langsamere Tage brauchen mehr Nächte, und mehr Nächte kosten mehr — aber sie sind der Unterschied zwischen „Ägypten gesehen haben\" und „dort gewesen sein\". Wir bieten lieber sieben ruhige Tage an als fünf erschöpfende.",
      },
    ],
    faqs: [
      { q: "Was kostet eine private Ägypten-Rundreise?", a: "Für eine vollständig private, maßgeschneiderte Reise mit lizenziertem Ägyptologen, eigenem Fahrzeug und Fahrer sowie guten Hotels rechnen Sie mit etwa 200 bis 450 Euro pro Person und Tag. Der Betrag sinkt deutlich mit der Gruppengröße, weil Führer und Fahrzeug auf mehr Personen verteilt werden." },
      { q: "Warum ist eine Privatreise teurer als eine Gruppenreise?", a: "Weil fast nichts geteilt wird. Eine Gruppenreise verteilt einen Führer, einen Bus und einen Fahrer auf dreißig Personen; eine Privatreise auf Ihre Gruppe allein. Sie kaufen außerdem die Möglichkeit, den Plan zu ändern — länger in Abu Simbel zu bleiben, den Papyrusladen auszulassen, um sechs Uhr zu starten, weil das Licht besser ist." },
      { q: "Wie viel sollte ich für eine Woche Ägypten einplanen?", a: "Auf privatem, maßgeschneidertem Niveau liegt eine Woche für zwei Personen typischerweise zwischen 2.800 und 6.000 Euro insgesamt, je nach Hotels, Saison und ob zwischen den Städten geflogen oder gefahren wird. Internationale Flüge, das Visum für 30 US-Dollar und Trinkgelder kommen hinzu." },
      { q: "Ist Ägypten ein teures Reiseland?", a: "Ägypten gehört bei Essen, Transport und Eintritten zu den günstigsten Ländern der Welt — und ist zugleich eines mit einem ungewöhnlich großen Abstand zwischen unterem und oberem Marktsegment. Geld kostet nicht der Zugang, sondern die Qualität des Menschen, der neben Ihnen erklärt, was Sie sehen." },
      { q: "Wann wird bezahlt?", a: "Eine Anzahlung von 25 Prozent des Gesamtpreises bestätigt die Reise; die Restzahlung ist 30 Tage vor Abreise fällig. Nichts wird bezahlt, bevor Sie die schriftliche Reiseroute und den aufgeschlüsselten Preis vorliegen haben." },
    ],
    cta: {
      heading: "Ein konkretes Angebot",
      text: "Schicken Sie uns Ihre Daten, Ihre Gruppe und ungefähr, was die Reise sein soll. Sie erhalten eine schriftliche Reiseroute mit aufgeschlüsseltem Preis — unverbindlich.",
      whatsapp: "Guten Tag Kemet — ich hätte gern ein Angebot für eine private Ägypten-Reise.",
      emailSubject: "Angebotsanfrage — Ägypten",
    },
    moreLabel: "Ausführliche Preisübersicht",
    moreText:
      "Die vollständige Preis- und Leistungsübersicht mit allen Reisen steht auf Englisch zur Verfügung.",
  },

  // ===== Beste Reisezeit ===================================================
  {
    groupId: "when-to-go",
    symbol: "sun",
    title: "Beste Reisezeit Ägypten — Monat für Monat | Kemet",
    description:
      "Wann nach Ägypten reisen? Temperaturen für Kairo, Luxor, Assuan und das Rote Meer, Besucherandrang, Preisniveau und ein ehrliches Urteil je Monat.",
    keywords:
      "beste reisezeit ägypten, ägypten wetter, ägypten klima monat, wann nach ägypten reisen, ägypten temperatur luxor, rotes meer wassertemperatur",
    crumb: "Beste Reisezeit",
    h1: "Die beste Reisezeit für Ägypten",
    standfirst:
      "Der Zeitpunkt verändert eine Ägypten-Reise stärker als jede andere Entscheidung.",
    lede:
      "Die kurze Antwort lautet Oktober bis April. Die nützliche Antwort ist, dass in Ägypten zwei Klimazonen gleichzeitig laufen — die Monumente im Landesinneren und die Riffe an der Küste — und dass ihre besten Zeiten an entgegengesetzten Enden des Jahres liegen. Oktober ist der einzige Monat, in dem beide nahezu ideal sind.",
    facts: [
      { label: "Beste Gesamtzeit", value: "Oktober" },
      { label: "Beste Zeit für Monumente", value: "Februar" },
      { label: "Bestes Preis-Wetter-Verhältnis", value: "März" },
      { label: "Beste Tauchzeit", value: "Mai, Juni, September" },
    ],
    sections: [
      {
        title: "Oktober bis April — die Hauptsaison",
        body:
          "In diesen Monaten liegen die Tagestemperaturen im Landesinneren im angenehmen Bereich: Luxor zwischen 22 und 37 Grad je nach Monat, Kairo zwischen 19 und 31. Innerhalb der Saison sind Oktober, Februar und die erste Märzhälfte am stärksten. Dezember und Januar bieten das beste Wetter überhaupt — und die höchsten Preise sowie den größten Andrang des Jahres.",
      },
      {
        title: "Mai bis September — heiß im Inland, ideal am Meer",
        body:
          "Im Hochsommer erreicht Assuan regelmäßig 42 bis 45 Grad, und eine Reise entlang des Nils muss vollständig um die Hitze herum gebaut werden: Start bei Sonnenaufgang, Besichtigung bis etwa elf Uhr, Nachmittag als echte Ruhezeit. Der Lohn sind praktisch leere Monumente und die niedrigsten Preise des Jahres. Am Roten Meer ist es zugleich die beste Zeit: Wassertemperaturen von 27 bis 30 Grad.",
      },
      {
        title: "Die deutschen Schulferien und was sie bedeuten",
        body:
          "Die Herbstferien, Weihnachten und Ostern sind die drei Fenster, in denen deutsche Reisende Ägypten am stärksten nachfragen — und in denen die guten Nilschiffe und Hotelzimmer zuerst vergeben sind. Wenn Sie nicht an Schulferien gebunden sind, geben Ende Oktober und die erste Märzhälfte dasselbe Wetter zu spürbar niedrigeren Preisen.",
      },
      {
        title: "Ramadan und Feste",
        body:
          "Ramadan verschiebt sich jährlich um etwa elf Tage. Sehenswürdigkeiten bleiben geöffnet, oft mit verkürzten Zeiten, und der Tagesrhythmus dreht sich: ruhige Nachmittage, dann erwacht das ganze Land bei Sonnenuntergang zum Iftar. Viele Reisende beschreiben es im Nachhinein als den eindrucksvollsten Teil ihrer Reise. Das Sonnenfest von Abu Simbel findet am 22. Februar und am 22. Oktober statt.",
      },
    ],
    faqs: [
      { q: "Wann ist die beste Reisezeit für Ägypten?", a: "Oktober bis April. Innerhalb dieses Zeitraums sind Oktober, Februar und die erste Märzhälfte am stärksten: Oktober bietet warme Tage und ein noch sommerwarmes Rotes Meer, Februar das angenehmste Wetter für die Monumente, März nahezu dasselbe Wetter zu niedrigeren Preisen." },
      { q: "Wie heiß wird es in Ägypten im Sommer?", a: "Im Juli und August erreicht Assuan regelmäßig 42 bis 45 Grad und Luxor die niedrigen Vierziger; Kairo liegt in den mittleren Dreißigern. Die Hitze ist trocken und dadurch erträglicher als dieselben Werte anderswo, erfordert aber eine Reiseroute, die bei Sonnenaufgang beginnt und den Nachmittag freilässt." },
      { q: "Wann ist die beste Zeit zum Tauchen im Roten Meer?", a: "Mai, Juni, September und Oktober. Das Wasser erreicht im Sommer 27 bis 30 Grad, die Sichtweiten sind im Herbst am besten. September und Oktober sind die ideale Kombination: sommerwarmes Wasser bei bereits abgereisten Ferienmassen." },
      { q: "Ist Ägypten an Weihnachten überlaufen?", a: "Es ist der Höhepunkt des Jahres. Das Wetter ist ausgezeichnet, und die Preise für Nilschiffe und gute Hotelzimmer können sich über Neujahr verdoppeln — diese Woche ist bis zu einem Jahr im Voraus ausgebucht. Das koptische Weihnachtsfest am 7. Januar verlängert die Saison um weitere zwei Wochen." },
    ],
    cta: {
      heading: "Unsicher, wann?",
      text: "Sagen Sie uns, was die Reise sein soll — Monumente, Riff, Nilfahrt oder alles drei — und wann Sie ungefähr können. Wir sagen Ihnen, welcher Monat das wirklich trägt.",
      whatsapp: "Guten Tag Kemet — ich brauche Rat, wann ich am besten nach Ägypten reise.",
      emailSubject: "Frage — beste Reisezeit Ägypten",
    },
    moreLabel: "Alle zwölf Monate im Detail",
    moreText:
      "Eine ausführliche Aufschlüsselung jedes einzelnen Monats — mit Temperaturen, Andrang, Preisniveau und Urteil — steht auf Englisch zur Verfügung.",
  },

  // ===== Visum =============================================================
  {
    groupId: "visa",
    symbol: "ankh",
    title: "Ägypten Visum für Deutsche (2026) | Kemet",
    description:
      "Ägypten-Visum für deutsche Staatsangehörige: 30 US-Dollar bei Ankunft oder als e-Visum, 30 Tage Aufenthalt, Reisepass sechs Monate gültig.",
    keywords:
      "ägypten visum, visum ägypten deutsche, ägypten visum on arrival, ägypten e-visum, ägypten einreise, ägypten visum kosten",
    crumb: "Ägypten-Visum",
    h1: "Ägypten-Visum für Deutsche",
    standfirst:
      "Bei Ankunft erhältlich, 30 US-Dollar, 30 Tage Aufenthalt. Stand: 27. Juli 2026.",
    lede:
      "Deutsche Staatsangehörige benötigen für Ägypten ein Touristenvisum, können es aber unkompliziert bei der Ankunft am Flughafen erwerben. Alternativ steht das e-Visum online zum gleichen Preis zur Verfügung, wenn Sie lieber mit bereits erteiltem Visum anreisen möchten.",
    facts: [
      { label: "Kosten", value: "30 US-Dollar" },
      { label: "Aufenthalt", value: "Bis zu 30 Tage" },
      { label: "Reisepass", value: "6 Monate gültig" },
      { label: "Freie Seiten", value: "Mindestens 2" },
    ],
    sections: [
      {
        title: "Visum bei Ankunft oder e-Visum?",
        body:
          "Beide sind gültig und kosten dasselbe. Bei Ankunft geht schneller in der Organisation und dauert am Bankschalter in der Ankunftshalle wenige Minuten — Sie zahlen bar in US-Dollar, also bringen Sie saubere Scheine mit. Das e-Visum ist die ruhigere Variante: Sie landen mit bereits erteiltem Visum und gehen direkt zur Passkontrolle, was nach einem langen Flug oder bei später Ankunft mit Kindern spürbar angenehmer ist.",
      },
      {
        title: "Was Sie dabeihaben müssen",
        body:
          "Einen Reisepass, der noch mindestens sechs Monate über das Einreisedatum hinaus gültig ist, mit mindestens zwei freien Seiten. Die Einreisebeamten fragen gelegentlich nach der Hotelbuchung für die erste Nacht und nach einem Rück- oder Weiterflugticket — halten Sie beides auf dem Telefon bereit. Wenn wir Ihre Reise organisieren, erhalten Sie ein einziges Bestätigungsdokument mit allem, wonach gefragt werden könnte.",
      },
      {
        title: "Die Sinai-Sondergenehmigung",
        body:
          "Wenn Ihre gesamte Reise innerhalb von Sharm el-Sheikh, Dahab, Nuweiba und Taba bleibt, können deutsche Staatsangehörige an den Sinai-Einreisepunkten eine kostenlose Genehmigung für 15 Tage statt eines Visums erhalten. Sie ist wirklich einschränkend: Reisen nach Kairo, Luxor, Assuan oder auf das ägyptische Festland sind damit nicht erlaubt — auch kein Tagesausflug. Wenn die Pyramiden auch nur möglicherweise auf Ihrem Plan stehen, kaufen Sie das normale Visum.",
      },
      {
        title: "Anreise aus Deutschland",
        body:
          "Etwa 4 Stunden 15 Minuten nonstop ab Frankfurt oder München; auch Berlin und Düsseldorf bedienen Kairo. Hurghada und Marsa Alam werden aus zahlreichen deutschen Flughäfen direkt angeflogen, was relevant ist, wenn Ihre Reise um das Rote Meer herum gebaut ist. Deutschland ist einer der größten Quellmärkte Ägyptens, entsprechend dicht ist das Flugangebot im Winterhalbjahr.",
      },
    ],
    highlights: {
      heading: "Wichtig",
      items: [
        "Einreisebestimmungen werden von der ägyptischen Regierung festgelegt und können sich ändern",
        "Diese Angaben wurden am 27. Juli 2026 gegen öffentliche Quellen geprüft",
        "Maßgeblich ist ausschließlich das offizielle Portal visa2egypt.gov.eg — prüfen Sie dort vor der Buchung",
        "Wenn Sie mit uns reisen, bestätigen wir Ihre genauen Anforderungen schriftlich, bevor etwas bezahlt wird",
      ],
    },
    faqs: [
      { q: "Brauchen Deutsche ein Visum für Ägypten?", a: "Ja. Deutsche Staatsangehörige können das einmalige Touristenvisum bei der Ankunft an ägyptischen Flughäfen für 30 US-Dollar erwerben, gültig für einen Aufenthalt von bis zu 30 Tagen. Das e-Visum ist online zum gleichen Preis erhältlich, wenn Sie lieber mit erteiltem Visum anreisen." },
      { q: "Was kostet das Ägypten-Visum?", a: "30 US-Dollar für die einmalige Einreise, ob am Flughafen gekauft oder online als e-Visum beantragt. Das Mehrfach-Einreise-e-Visum kostet 65 US-Dollar. Der Preis für die einmalige Einreise wurde zum 1. März 2026 von 25 auf 30 US-Dollar erhöht. Die Schalter am Flughafen nehmen ausschließlich Bargeld." },
      { q: "Wie lange darf ich mit dem Touristenvisum bleiben?", a: "Bis zu 30 Tage ab dem Einreisedatum. Verlängerungen sind in Ägypten über die Passbehörden möglich, dauern aber. Wenn Sie von vornherein länger bleiben möchten, beantragen Sie das Mehrfach-Einreise-e-Visum oder planen Sie innerhalb der 30 Tage." },
      { q: "Wie lange muss der Reisepass gültig sein?", a: "Mindestens sechs Monate über Ihr Einreisedatum hinaus, mit mindestens zwei freien Seiten. Das ist die Standardanforderung und wird bei der Einreise geprüft." },
      { q: "Wie lange dauert der Flug von Deutschland nach Ägypten?", a: "Etwa 4 Stunden 15 Minuten nonstop ab Frankfurt oder München nach Kairo. Berlin und Düsseldorf bedienen Kairo ebenfalls. Hurghada und Marsa Alam werden aus vielen deutschen Flughäfen direkt angeflogen, besonders im Winterhalbjahr." },
    ],
    cta: {
      heading: "Reise aus Deutschland planen?",
      text: "Schicken Sie uns Ihre Reisedaten und wer mitreist. Wir bestätigen die Einreiseanforderungen und bauen die Reise darum herum.",
      whatsapp: "Guten Tag Kemet — ich reise aus Deutschland und möchte eine private Ägypten-Reise planen.",
      emailSubject: "Anfrage aus Deutschland — Kemet Ägypten",
    },
    moreLabel: "Einreisebestimmungen weiterer Nationalitäten",
    moreText:
      "Die Einreiseregeln für fünfzig Nationalitäten — jeweils mit Gebühr, Aufenthaltsdauer und Flugzeiten — stehen auf Englisch zur Verfügung.",
  },

  // ===== Ist Ägypten sicher? ===============================================
  // Die meistgestellte Frage des deutschen Marktes vor der Buchung. Bezugspunkt
  // ist das Auswärtige Amt, nicht das US State Department, und der Unterschied
  // zwischen Nord- und Südsinai wird ausdrücklich benannt — deutsche Reisende
  // fliegen im Winter in großer Zahl nach Hurghada und Sharm el-Sheikh und
  // lesen Schlagzeilen über "Sinai", die eine andere Region meinen.
  {
    groupId: "safety",
    symbol: "horus",
    title: "Ist Ägypten sicher? Eine ehrliche Antwort | Kemet",
    description:
      "Ist Ägypten sicher? Region für Region — Kairo, Luxor, Rotes Meer und Sinai — dazu Alleinreisende Frauen, Wasser, Aufdringlichkeit und die Gebiete mit Reisewarnung.",
    keywords:
      "ist ägypten sicher, ägypten sicherheit, ägypten reisewarnung, sharm el sheikh sicher, hurghada sicher, ägypten alleine reisen frau, ägypten urlaub sicher 2026",
    crumb: "Sicherheit",
    h1: "Ist Ägypten sicher?",
    standfirst:
      "Die ehrliche Fassung — was wirklich zählt, was Rauschen ist, und die eine Region, die tatsächlich eine Ausnahme darstellt.",
    lede:
      "Die meiste Sorge vor einer Ägypten-Reise stammt aus Schlagzeilen, nicht aus dem Land. Die Gebiete, in die Reisende tatsächlich fahren, gehören zu den am stärksten bewachten Tourismusregionen überhaupt, und die Probleme, von denen Gäste wirklich berichten, sind alltäglich: Verkäufer, die ein erstes Nein nicht akzeptieren, Verkehr mit eigener Logik, Hitze, die im Juni gefährlich wird, wenn man nicht um sie herum plant, und ein Magen, der auf anderes Wasser reagiert. Nichts davon ist belanglos. Nichts davon ist aber auch das, was man sich vorstellt.",
    facts: [
      { label: "Notruf", value: "Polizei 122 · Rettung 123 · Touristenpolizei 126" },
      { label: "Leitungswasser", value: "Nicht trinkbar — Flaschenwasser überall" },
      { label: "Hauptärgernis", value: "Aufdringliche Verkäufer · Verkehr in Kairo" },
      { label: "Vor der Buchung", value: "Auswärtiges Amt prüfen" },
    ],
    sections: [
      {
        title: "Der Unterschied zwischen Nord- und Südsinai",
        body:
          "Das ist der wichtigste Punkt der ganzen Seite, und er wird regelmäßig verwechselt. Für den Nordsinai besteht eine stehende Reisewarnung des Auswärtigen Amts. Die Badeorte, die deutsche Reisende meinen, wenn sie \"Sinai\" sagen — Sharm el-Sheikh, Dahab, Nuweiba — liegen im Südsinai, mehrere hundert Kilometer entfernt, und sind von dieser Warnung in der Regel ausdrücklich ausgenommen. Der Winterflugverkehr aus Deutschland dorthin läuft durchgehend. Keine unserer Reiserouten führt in den Nordsinai oder in die Grenzregionen der Westwüste.",
      },
      {
        title: "Kairo und Gizeh",
        body:
          "Die Pyramiden, die Museen und das islamische Kairo werden jährlich von Millionen Menschen ohne Zwischenfall besucht. Die zwei echten Ärgernisse sind der Verkehr — dicht und improvisiert — und hartnäckige Verkäufer auf dem Plateau von Gizeh. Ein privater Fahrer nimmt Ihnen das Erste vollständig ab, ein Ägyptologe das Zweite weitgehend: Ansprachen werden abgefangen, bevor sie Sie erreichen, weil sie von jemandem abgefangen werden, den die Verkäufer als Einheimischen erkennen.",
      },
      {
        title: "Oberägypten: die Hitze ist das Risiko, nicht die Kriminalität",
        body:
          "Luxor und Assuan sind in jeder Hinsicht ruhiger als Kairo, und die Monumente werden stark bewacht. Das reale Risiko zwischen Mai und September ist nicht Kriminalität, sondern Hitze: 45 °C um zwei Uhr nachmittags sind eine medizinische Frage, keine Unannehmlichkeit. Reisen in diesen Monaten werden bei uns konsequent um Sonnenaufgangsstarts und lange Nachmittagspausen herum gebaut — oder wir sagen Ihnen, dass Oktober die bessere Wahl wäre.",
      },
      {
        title: "Als Frau allein unterwegs",
        body:
          "Frauen reisen allein durch Ägypten, und berichtet wird meist nicht von Gefahr, sondern von Aufmerksamkeit: Blicke, Bemerkungen, hartnäckige Ansprachen, besonders in belebten Vierteln Kairos. Eine private Reiseleitung verändert diese Dynamik stärker als jede andere Einzelmaßnahme, weil Ansprachen weitgehend aufhören, sobald Sie sichtbar in Begleitung einer ägyptischen Fachkraft sind. Schultern und Knie bedeckt zu halten reduziert die Aufmerksamkeit außerhalb der Badeorte zusätzlich und wird in Moscheen und Kirchen ohnehin erwartet.",
      },
      {
        title: "Wasser, Essen und der Magen",
        body:
          "Leitungswasser ist in Ägypten nirgends zum Trinken geeignet, auch nicht in guten Hotels — auch nicht zum Zähneputzen. Flaschenwasser ist überall verfügbar, günstig und an jedem Besichtigungstag bei uns inbegriffen. Eis in etablierten Hotels und Restaurants wird aus aufbereitetem Wasser hergestellt und ist unbedenklich; Eis vom Straßenstand ist es nicht. Essen Sie dort, wo Umschlag herrscht: ein voller Tresen ist ein sicherer Tresen.",
      },
      {
        title: "Was wir nicht behaupten",
        body:
          "Reisehinweise ändern sich, und wir sind ein Reiseveranstalter, keine Behörde. Lesen Sie vor jeder Buchung die aktuellen Reise- und Sicherheitshinweise des Auswärtigen Amts für Ägypten. Sie sind für deutsche Staatsangehörige geschrieben und aktueller als jede Veranstalterseite, diese eingeschlossen. Wenn wir eine geplante Route für eine schlechte Idee halten, sagen wir Ihnen das — auch wenn es die Buchung kostet.",
      },
    ],
    highlights: {
      heading: "Kurz gefasst",
      items: [
        "Die touristischen Regionen — Kairo, Gizeh, Luxor, Assuan, Alexandria, Rotes Meer — sind stark bewacht",
        "Nordsinai: stehende Reisewarnung. Südsinai mit Sharm el-Sheikh und Dahab: in der Regel ausgenommen",
        "Keine Kemet-Reiseroute führt in den Nordsinai oder die Grenzgebiete der Westwüste",
        "Leitungswasser nirgends trinken, auch nicht zum Zähneputzen",
        "Vor der Buchung die Hinweise des Auswärtigen Amts lesen",
      ],
    },
    faqs: [
      { q: "Ist Ägypten 2026 sicher für Touristen?", a: "Die touristischen Regionen — Kairo, Gizeh, Luxor, Assuan, Alexandria und die Küste des Roten Meeres — sind stark bewacht und werden jährlich von Millionen Reisenden ohne Zwischenfall besucht. Die praktischen Ärgernisse sind aufdringliche Verkäufer an den großen Sehenswürdigkeiten und der Verkehr in Kairo; beides nimmt eine private Reiseleitung mit eigenem Fahrer weitgehend heraus. Für den Nordsinai und einzelne Grenzgebiete bestehen Reisewarnungen; dorthin führt keine Reiseroute. Prüfen Sie vor der Buchung die aktuellen Hinweise des Auswärtigen Amts." },
      { q: "Ist Sharm el-Sheikh sicher?", a: "Sharm el-Sheikh liegt im Südsinai, der von den Warnungen für den Nordsinai in der Regel ausgenommen ist, und wird durchgehend von europäischen Charterflügen bedient. Die Hotelzone und die Tauchgründe von Ras Mohammed sind in sich geschlossen und werden routinemäßig besucht. Die Warnung, von der viele gelesen haben, betrifft den Nordsinai — mehrere hundert Kilometer entfernt und für uns kein Reiseziel." },
      { q: "Ist Hurghada sicher?", a: "Ja. Hurghada und Marsa Alam sind Badeorte am Roten Meer auf dem ägyptischen Festland, weit vom Sinai entfernt, und werden aus zahlreichen deutschen Flughäfen direkt angeflogen. Sie funktionieren das ganze Jahr über für europäischen Charterverkehr. Tauchen und Wassersport bergen das übliche Anbieterrisiko — deshalb zählt der Anbieter mehr als der Preis, und wir nennen Ihnen unseren vor der Buchung." },
      { q: "Kann ich als Frau allein nach Ägypten reisen?", a: "Ja, und viele tun es. Berichtet wird überwiegend von Aufmerksamkeit statt von Gefahr — Blicke, Bemerkungen, hartnäckige Ansprachen, vor allem in belebten Vierteln Kairos. Eine private Reiseleitung verändert das deutlich, weil Ansprachen aufhören, sobald Sie sichtbar begleitet werden. Bedeckte Schultern und Knie außerhalb der Badeorte reduzieren die Aufmerksamkeit weiter." },
      { q: "Kann man in Ägypten das Leitungswasser trinken?", a: "Nein, nirgends, auch nicht in guten Hotels und auch nicht zum Zähneputzen. Flaschenwasser ist überall verfügbar, günstig und an jedem Besichtigungstag bei uns inbegriffen. Eis aus etablierten Hotels und Restaurants ist unbedenklich, Eis vom Straßenstand nicht." },
      { q: "Brauche ich Impfungen oder eine Reiseversicherung?", a: "Für die Einreise aus Deutschland sind keine Impfungen vorgeschrieben; lassen Sie dennoch von Ihrem Arzt oder einer reisemedizinischen Beratung prüfen, was für Sie empfohlen ist und ob die Standardimpfungen aktuell sind. Eine Auslandsreisekrankenversicherung ist nicht Pflicht, aber dringend zu empfehlen — besonders wenn Tauchen oder Ballonfahren geplant sind, denn viele Policen schließen beides standardmäßig aus." },
    ],
    cta: {
      heading: "Noch unsicher?",
      text: "Fragen Sie uns genau das, was Sie beschäftigt. Sie bekommen eine gerade Antwort — auch dann, wenn die Antwort lautet, dass ein Plan keine gute Idee ist.",
      whatsapp: "Guten Tag Kemet — ich habe eine Frage zur Sicherheit in Ägypten.",
      emailSubject: "Frage zur Sicherheit in Ägypten — Kemet",
    },
    moreLabel: "Ausführlich auf Englisch",
    moreText:
      "Die vollständige Fassung mit weiteren Regionen und Fragen steht auf Englisch zur Verfügung.",
  },
];
