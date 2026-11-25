// ---------------------------------------------------------------------------
// The privacy policy, the terms of use and the booking terms, in the nine
// languages besides English. GENERATED on 25 Nov 2026 from data/legal.ts and
// data/booking.ts (one translator per language, checked for the same
// structure, the same numbers and the same email and URLs as the English).
//
// When the English changes, these must change with it: each page states that
// the English version applies where a translation differs, but a translation
// that has fallen behind is still a page that says something untrue.
// ---------------------------------------------------------------------------
import type { TranslatedLocale } from "@/config/i18n";

interface Doc {
  localeSlug: string; metaTitle: string; metaDescription: string; standfirst: string;
  title: string; intro: string; lastUpdated: string;
  sections: Array<{ heading: string; body: string[] }>;
}
export interface LegalTexts {
  privacy: Doc;
  terms: Doc;
  booking: {
    localeSlug: string; metaTitle: string; metaDescription: string; title: string; standfirst: string;
    stepsHeading: string; steps: Array<{ heading: string; body: string }>;
    paymentHeading: string;
    depositLabel: string; deposit: { label: string; note: string };
    balanceLabel: string; balance: { label: string; note: string };
    methodsLabel: string; paymentMethods: string[];
    cancelHeading: string; cancelText: string;
    cancellationTiers: Array<{ window: string; charge: string }>;
    policiesHeading: string; policies: Array<{ heading: string; body: string }>;
  };
  labels: {
    lastUpdatedLabel: string; englishPrevails: string; ctaHeading: string; ctaText: string;
    whatsapp: string; emailSubject: string; moreLabel: string; moreText: string;
  };
}

export const LEGAL: Record<TranslatedLocale, LegalTexts> = {
 "de": {
  "privacy": {
   "localeSlug": "datenschutz",
   "metaTitle": "Datenschutzerklärung | Kemet",
   "metaDescription": "Wie Kemet die personenbezogenen Daten erhebt, nutzt und schützt, die Sie uns bei einer Kontaktaufnahme mitteilen. So wenig wie möglich, nie verkauft.",
   "standfirst": "Was wir erheben, wie wir es verwenden und welche Rechte Sie an Ihren Daten haben. Wir erheben so wenig wie möglich — und verkaufen nie etwas davon.",
   "title": "Datenschutzerklärung",
   "intro": "Diese Erklärung beschreibt, welche personenbezogenen Daten Kemet erhebt, wenn Sie uns kontaktieren oder diese Website nutzen, wie wir sie verwenden und welche Rechte Sie daran haben. Wir erheben so wenig wie möglich und verkaufen Daten nie.",
   "lastUpdated": "November 2026",
   "sections": [
    {
     "heading": "Wer wir sind",
     "body": [
      "Kemet ist ein privates Reisedesign-Unternehmen, das maßgeschneiderte Reisen in Ägypten gestaltet, und ist „Verantwortlicher“ im Sinne dieser Erklärung. Unser Sitz ist Kairo, Ägypten.",
      "Zu allem, was in dieser Erklärung steht — auch für jedes Ersuchen um Auskunft, Berichtigung oder Löschung Ihrer Daten —, erreichen Sie uns per E-Mail unter info@kemet-travel.com."
     ]
    },
    {
     "heading": "Was wir erheben",
     "body": [
      "Wenn Sie uns über das Kontaktformular eine Nachricht senden, erheben wir die Angaben, die Sie selbst machen: Ihren Namen, Ihre E-Mail-Adresse und — sofern Sie sie eingeben — Ihre Telefonnummer, Ihre geplanten Reisedaten, die Größe Ihrer Reisegruppe, das von Ihnen gewählte Tempo und die von Ihnen gewählten Prioritäten sowie den Inhalt Ihrer Nachricht.",
      "Wie fast alle Websites zeichnet auch unser Server in seinen Protokollen übliche technische Informationen auf (etwa IP-Adresse, Browsertyp und aufgerufene Seiten). Wir verwenden diese nicht, um Sie persönlich zu identifizieren.",
      "Wenn Sie sich in unsere Liste eintragen — über die Einladung auf dieser Website oder über den Reiseplaner —, senden wir Ihnen zuerst eine E-Mail mit der Bitte um Bestätigung; bis Sie bestätigen, schicken wir Ihnen nichts weiter. Wir speichern Ihre E-Mail-Adresse, Ihren Namen, falls Sie ihn angeben, ob Sie sich über die Einladung oder über den Reiseplaner angemeldet haben, die Sprache der Seite sowie einen Nachweis Ihrer Einwilligung: wann Sie sie erteilt und wann Sie bestätigt haben, den Wortlaut, dem Sie zugestimmt haben, und die jeweilige IP-Adresse. Sie können die Liste jederzeit über den Abmeldelink in unseren E-Mails oder durch eine Nachricht an uns verlassen.",
      "Wir führen keine Nutzerkonten und nehmen auf dieser Website keine Zahlungen entgegen; wir erheben hier daher weder Passwörter noch Kartendaten."
     ]
    },
    {
     "heading": "Wie wir Ihre Daten verwenden",
     "body": [
      "Wir verwenden die Angaben aus Ihrer Anfrage ausschließlich, um Ihnen zu antworten, um zu verstehen, was Sie suchen, und — wenn Sie sich dafür entscheiden — um Ihre Reise zu gestalten und zu organisieren. Wir können Sie mit den von Ihnen angegebenen Kontaktdaten per E-Mail, Telefon oder WhatsApp kontaktieren.",
      "Wenn Sie nicht gleich mit uns reisen, schreiben wir Ihnen unter Umständen noch einmal zu der Reise, nach der Sie gefragt haben: höchstens dreimal in dem Jahr nach Ihrer Anfrage. Sagen Sie uns jederzeit Bescheid, dann schreiben wir nicht mehr.",
      "Unsere Rechtsgrundlage ist Ihre Einwilligung, sind die Schritte, die auf Ihren Wunsch hin erforderlich sind, um eine Reiseleistung zu vereinbaren und zu erbringen, und, für diese Folgenachrichten, unser berechtigtes Interesse daran, die Frage zu beantworten, mit der Sie sich an uns gewandt haben. Wir geben Ihre Daten nicht an Werbetreibende weiter und verwenden sie nicht für automatisierte Entscheidungsfindung."
     ]
    },
    {
     "heading": "Cookies und Analyse",
     "body": [
      "Diese Website verwendet keine Cookies für Werbung oder Tracking und lädt keine Analyse- oder Werbeskripte von Dritten. Sie erstellt kein Marketingprofil von Ihnen.",
      "Wie die Website genutzt wird, messen wir mit einer eigenen, einfachen Analyse, die ausschließlich auf unserem Server läuft. Für jede aufgerufene Seite werden die Seite selbst, die Website oder Suchmaschine, über die Sie auf sie gelangt sind, ein Kampagnen-Kennzeichen im Link, über den Sie gekommen sind, die Geräteart (Smartphone, Tablet oder Computer, anhand der Bildschirmbreite bestimmt) und die Spracheinstellung Ihres Browsers aufgezeichnet. Ebenso Aktionen auf der Seite: das Antippen von WhatsApp oder E-Mail, welche Reise Sie geöffnet haben, Suchen auf dieser Website (einschließlich der gesuchten Wörter), wie weit Sie eine Seite gelesen und wie lange Sie dort verbracht haben. Besuche werden mit einem Code gezählt, der aus Ihrer Verbindung und Ihrem Browser zusammen mit einem täglich wechselnden Geheimwert gebildet wird. So lässt sich ein Besucher nicht von einem Tag zum nächsten verfolgen, und der Code kann nicht in eine IP-Adresse zurückverwandelt werden; Ihre IP-Adresse selbst wird nicht gespeichert.",
      "Sendet Ihr Browser ein „Do Not Track“- oder „Global Privacy Control“-Signal, wird nichts davon aufgezeichnet. Diese Analyseeinträge werden nach 13 Monaten automatisch gelöscht.",
      "Wenn Sie uns eine Anfrage senden, vermerken wir, auf welchem Weg Sie an diesem Tag auf die Website gelangt sind — zum Beispiel über eine Suchmaschine oder einen KI-Assistenten — und welche Seiten Sie gelesen haben, damit wir Ihnen zu der Reise antworten können, die Sie sich angesehen haben. Dies wird zusammen mit Ihrer Anfrage gespeichert.",
      "Die Website merkt sich außerdem einige Anzeigeeinstellungen in Ihrem Browser, etwa dass Sie den saisonalen Banner oder die Einladung zu unserer Liste geschlossen haben. Diese bleiben auf Ihrem Gerät und werden nie an uns gesendet."
     ]
    },
    {
     "heading": "An wen wir Daten weitergeben",
     "body": [
      "Wir geben Ihre Daten nur weiter, soweit dies erforderlich ist, um Ihnen zu antworten oder eine von Ihnen gewünschte Reise zu organisieren — zum Beispiel an die Hotels, das Kreuzfahrtschiff oder die Fluggesellschaft, die für Ihre konkrete Reiseroute gebucht werden. Ihre Reiseleitung und Ihr Fahrdienst gehören zum eigenen Team von Kemet.",
      "Unsere Website und unser E-Mail-Dienst werden von unserem Hosting-Anbieter betrieben, der Daten in unserem Auftrag nach seinen eigenen Sicherheitsbedingungen verarbeitet. Wir verkaufen, vermieten oder tauschen Ihre personenbezogenen Daten niemals an Dritte."
     ]
    },
    {
     "heading": "Wie lange wir Daten aufbewahren",
     "body": [
      "Eine Anfrage bewahren wir drei Jahre ab dem Tag ihres Eingangs auf und löschen sie dann. Kommt eine Buchung zustande, können einzelne Unterlagen länger aufbewahrt werden, um buchhalterische oder gesetzliche Pflichten zu erfüllen.",
      "Wenn Sie sich in unsere Liste eintragen, bewahren wir Ihre Angaben auf, bis Sie die Liste verlassen. Eine Anmeldung, die nie über die von uns gesendete E-Mail bestätigt wird, wird nach 30 Tagen gelöscht. Wenn Sie die Liste verlassen, behalten wir einen Vermerk mit Ihrer Adresse und dem Datum des Austritts, damit Sie nicht versehentlich erneut eingetragen werden.",
      "Sie können jederzeit die Löschung Ihrer Daten verlangen (siehe „Ihre Rechte“)."
     ]
    },
    {
     "heading": "Ihre Rechte",
     "body": [
      "Wenn Sie sich in der EU/dem EWR, im Vereinigten Königreich oder in einem vergleichbaren Rechtsgebiet befinden, haben Sie das Recht auf Auskunft über die personenbezogenen Daten, die wir über Sie gespeichert haben, auf deren Berichtigung oder Löschung, auf Widerspruch gegen oder Einschränkung ihrer Verarbeitung sowie auf Erhalt einer Kopie in einem übertragbaren Format.",
      "Um eines dieser Rechte auszuüben, schreiben Sie uns eine E-Mail an info@kemet-travel.com; wir antworten innerhalb einer angemessenen Frist. Sie haben außerdem das Recht, sich bei Ihrer örtlichen Datenschutzaufsichtsbehörde zu beschweren."
     ]
    },
    {
     "heading": "Assistenten und der MCP-Server",
     "body": [
      "KI-Assistenten können unsere veröffentlichten Seiten und unseren Reisekatalog über einen schreibgeschützten Server unter https://kemet-travel.com/mcp lesen. Er hat keinen Login und setzt keine Cookies. Was ein Assistent an ihn sendet (Suchwörter, eine Reisekennung, eine Sprache), wird nicht gespeichert. Wir führen nur eine anonyme tägliche Zählung, welches Werkzeug verwendet wurde, ohne IP-Adresse und ohne Angaben zur Anfrage.",
      "Der Server kann nichts buchen und nichts versenden. Wenn Sie einen Assistenten bitten, uns zu kontaktieren, gibt er Ihnen einen Link; eine Nachricht erreicht uns nur, wenn Sie ihn öffnen und die Nachricht selbst absenden. Was Sie in den Assistenten selbst eingeben, unterliegt der Datenschutzerklärung dieses Assistenten."
     ]
    },
    {
     "heading": "Sicherheit",
     "body": [
      "Die Website wird über verschlüsseltes HTTPS bereitgestellt, und wir treffen angemessene technische und organisatorische Maßnahmen, um die Daten zu schützen, die Sie uns senden. Keine Übertragung über das Internet kann als vollkommen sicher garantiert werden, doch wir arbeiten daran, Ihre Daten zu schützen."
     ]
    },
    {
     "heading": "Änderungen dieser Erklärung",
     "body": [
      "Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Das Datum oben zeigt, wann sie zuletzt überarbeitet wurde; die aktuelle Fassung finden Sie stets auf dieser Seite."
     ]
    },
    {
     "heading": "Kontakt",
     "body": [
      "Fragen zu Ihrem Datenschutz oder zu dieser Erklärung? Schreiben Sie an info@kemet-travel.com; wir helfen Ihnen gern."
     ]
    }
   ]
  },
  "terms": {
   "localeSlug": "nutzungsbedingungen",
   "metaTitle": "Nutzungsbedingungen | Kemet",
   "metaDescription": "Die Bedingungen für die Nutzung der Kemet-Website, für Anfragen und Angebote. Bitte zusammen mit unseren Buchungs- und Stornobedingungen lesen.",
   "standfirst": "Die Bedingungen hinter unserer Website, unseren Anfragen und Angeboten — verständlich formuliert und zusammen mit unseren Buchungs- und Stornobedingungen zu lesen.",
   "title": "Nutzungsbedingungen",
   "intro": "Diese Bedingungen regeln Ihre Nutzung der Kemet-Website und legen fest, auf welcher Grundlage wir Informationen und Angebote bereitstellen. Bitte lesen Sie sie zusammen mit unseren Buchungs- und Stornobedingungen, die Anzahlung, Zahlung und Stornierung einer bestätigten Reise regeln.",
   "lastUpdated": "November 2026",
   "sections": [
    {
     "heading": "Über diese Bedingungen",
     "body": [
      "Mit der Nutzung dieser Website erklären Sie sich mit diesen Bedingungen einverstanden. Wenn Sie ihnen nicht zustimmen, nutzen Sie die Website bitte nicht. Es gilt das Recht der Arabischen Republik Ägypten, und jede Streitigkeit im Zusammenhang mit dieser Website unterliegt der Gerichtsbarkeit der ägyptischen Gerichte."
     ]
    },
    {
     "heading": "Wer wir sind",
     "body": [
      "Kemet gestaltet und organisiert private, maßgeschneiderte Reisen in Ägypten und arbeitet von Kairo aus. Ihre lizenzierte, ägyptologisch ausgebildete Reiseleitung und Ihr Fahrdienst gehören zum eigenen Team von Kemet, und die Hotels einer Kemet-Reise werden auf Grundlage der eigenen Verträge von Kemet mit diesen Hotels gebucht. Sie erreichen uns unter info@kemet-travel.com."
     ]
    },
    {
     "heading": "Anfragen, Angebote und Preise",
     "body": [
      "Eine Anfrage oder ein von uns übersandtes Angebot ist ein Vorschlag, keine bestätigte Buchung. Die Preise werden pro Person in Euro angegeben und hängen von Reisedaten, Verfügbarkeit, Gruppengröße und den Bestandteilen Ihrer Reiseroute ab.",
      "Preise und Verfügbarkeit können sich ändern, bis eine Buchung schriftlich bestätigt und eine Anzahlung eingegangen ist. Den endgültigen Preis bestätigen wir Ihnen stets, bevor Sie sich verbindlich entscheiden."
     ]
    },
    {
     "heading": "Buchung, Zahlung und Stornierung",
     "body": [
      "Wenn Sie eine Reise bestätigen, gelten die Bedingungen zu Anzahlung, Restzahlung und Stornierung, die auf unserer Seite „Buchung, Zahlung und Stornierung“ aufgeführt sind. Bitte lesen Sie diese Seite, bevor Sie bestätigen."
     ]
    },
    {
     "heading": "Richtigkeit der Inhalte der Website",
     "body": [
      "Wir bemühen uns, die Informationen auf dieser Website richtig und aktuell zu halten, doch Angaben wie Öffnungszeiten, Zugang zu Stätten, Preise und Reisebedingungen können sich ändern. Die Inhalte dienen der allgemeinen Orientierung und werden erst Bestandteil eines Vertrags, wenn sie in Ihrer Reiseroute bestätigt sind."
     ]
    },
    {
     "heading": "Geistiges Eigentum",
     "body": [
      "Texte, Gestaltung, Logos und Bilder auf dieser Website gehören Kemet oder werden mit Erlaubnis verwendet und sind urheberrechtlich geschützt. Sie dürfen sie ohne unsere schriftliche Zustimmung nicht für kommerzielle Zwecke kopieren, vervielfältigen oder wiederverwenden."
     ]
    },
    {
     "heading": "Reisepass, Visum und Versicherung",
     "body": [
      "Sie sind dafür verantwortlich, einen gültigen Reisepass und das richtige Visum für Ägypten zu besitzen und etwaige Gesundheits- oder Einreisevorschriften zu erfüllen. Wir können Sie beraten, doch die Anforderungen werden von den Behörden festgelegt und liegen letztlich in Ihrer Verantwortung.",
      "Wir empfehlen dringend eine umfassende Reiseversicherung für jede reisende Person, die medizinische Versorgung, Stornierung und Rücktransport abdeckt."
     ]
    },
    {
     "heading": "Wer Ihre Reise durchführt",
     "body": [
      "Ihre ägyptologische Reiseleitung und Ihr Fahrdienst gehören zum eigenen Team von Kemet, und Ihre Hotels werden auf Grundlage der eigenen Verträge von Kemet mit diesen Hotels gebucht; für die Menschen und Orte Ihrer Reiseroute stehen wir daher unmittelbar ein.",
      "Einzelne Teile einer Reise werden von den Unternehmen durchgeführt, die sie betreiben: ein planmäßig verkehrendes Nilkreuzfahrtschiff, Inlandsflüge und Züge. Diese Leistungen erbringen sie nach ihren eigenen Beförderungsbedingungen, und ihre Fahrpläne können sich gelegentlich aus Gründen ändern, die wir nicht beeinflussen können. Wenn das geschieht, organisieren wir den übrigen Reiseverlauf entsprechend um und informieren Sie umgehend."
     ]
    },
    {
     "heading": "Haftungsbeschränkung",
     "body": [
      "Soweit gesetzlich zulässig, haftet Kemet nicht für mittelbare Schäden oder Folgeschäden, die aus der Nutzung dieser Website entstehen, und nicht für Ereignisse außerhalb unserer zumutbaren Kontrolle. Nichts in diesen Bedingungen beschränkt eine Haftung, die rechtlich nicht beschränkt werden kann."
     ]
    },
    {
     "heading": "Kontakt",
     "body": [
      "Fragen zu diesen Bedingungen? Schreiben Sie an info@kemet-travel.com."
     ]
    }
   ]
  },
  "booking": {
   "localeSlug": "buchung-zahlung-stornierung",
   "metaTitle": "Buchung, Zahlung und Stornierung | Kemet",
   "metaDescription": "So funktioniert die Buchung einer privaten Kemet-Reise — die Schritte, Anzahlung und Zahlungsbedingungen, akzeptierte Zahlungsarten und die Stornobedingungen.",
   "title": "Buchung, Zahlung und Stornierung",
   "standfirst": "Alles, was Sie vor Ihrer Bestätigung wissen sollten — wie die Buchung abläuft, wann Zahlungen fällig werden und wie unsere Stornobedingungen lauten. Transparent und ohne versteckte Kosten.",
   "stepsHeading": "So funktioniert die Buchung",
   "steps": [
    {
     "heading": "Anfragen — kostenlos und unverbindlich",
     "body": "Senden Sie uns Ihre Reisedaten, Interessen und die Zahl der Reisenden. Wir antworten innerhalb von zwei Stunden mit einem Reiseplan Tag für Tag und einem klaren Preis. In diesem Stadium entstehen weder Kosten noch eine Verpflichtung."
    },
    {
     "heading": "Vorschlag erhalten und verfeinern",
     "body": "Wir gestalten eine private Reiseroute mit einem vollständig aufgeschlüsselten Angebot — was enthalten und was nicht enthalten ist, Preise pro Person in Euro. Wir überarbeiten es gemeinsam mit Ihnen, bis es genau stimmt."
    },
    {
     "heading": "Mit einer Anzahlung bestätigen",
     "body": "Wenn Sie zufrieden sind, bestätigt eine Anzahlung Ihre Reise und ermöglicht es uns, in Ihrem Namen Hotels, Reiseleitung, Kreuzfahrten und Genehmigungen zu sichern."
    },
    {
     "heading": "Restzahlung vor der Reise",
     "body": "Der verbleibende Restbetrag ist vor der Abreise fällig. Sobald er beglichen ist, stellen wir Ihnen die endgültigen Unterlagen, das Tagesprogramm und Ihre namentlich benannte Ansprechperson zur Verfügung."
    }
   ],
   "paymentHeading": "Anzahlung und Restzahlung",
   "depositLabel": "Anzahlung",
   "deposit": {
    "label": "25 % der Gesamtreisekosten",
    "note": "Zahlbar zur Bestätigung Ihrer Buchung. Sie wird auf Ihre Restzahlung angerechnet und ist keine zusätzliche Gebühr."
   },
   "balanceLabel": "Restzahlung",
   "balance": {
    "label": "Fällig 30 Tage vor der Abreise",
    "note": "Bei Buchungen, die weniger als 30 Tage vor der Abreise erfolgen, ist der gesamte Betrag bei der Bestätigung zu zahlen."
   },
   "methodsLabel": "Zahlungsarten",
   "paymentMethods": [
    "Banküberweisung",
    "Gängige Kredit- und Debitkarten",
    "PayPal"
   ],
   "cancelHeading": "Stornierung durch Sie",
   "cancelText": "Wenn Sie stornieren müssen, fallen die folgenden Gebühren an, je nachdem, wie lange vor der Abreise Sie uns Bescheid geben. Die Gebühren spiegeln die Verpflichtungen wider, die wir in Ihrem Namen gegenüber Hotels, Reiseleitungen und Leistungsträgern eingehen.",
   "cancellationTiers": [
    {
     "window": "45 oder mehr Tage vor der Abreise",
     "charge": "Nur die Anzahlung"
    },
    {
     "window": "30–44 Tage vor der Abreise",
     "charge": "50 % der Gesamtreisekosten"
    },
    {
     "window": "15–29 Tage vor der Abreise",
     "charge": "75 % der Gesamtreisekosten"
    },
    {
     "window": "Weniger als 15 Tage vor der Abreise",
     "charge": "100 % der Gesamtreisekosten"
    }
   ],
   "policiesHeading": "Änderungen, Versicherung und Unvorhergesehenes",
   "policies": [
    {
     "heading": "Änderungen Ihrer Buchung",
     "body": "Wir setzen Änderungen nach Möglichkeit um. Manche Änderungen — insbesondere bei Flügen, Kreuzfahrten oder Hotels in der Hauptsaison — können Gebühren der Leistungsträger nach sich ziehen, die wir Ihnen stets bestätigen, bevor wir fortfahren."
    },
    {
     "heading": "Reiseversicherung",
     "body": "Eine umfassende Reiseversicherung, die medizinische Versorgung, Stornierung und Rücktransport abdeckt, wird für jede reisende Person dringend empfohlen und sollte abgeschlossen werden, sobald Ihre Buchung bestätigt ist."
    },
    {
     "heading": "Wenn wir ändern oder absagen müssen",
     "body": "Erfordern Umstände außerhalb unserer Kontrolle eine Änderung, bieten wir stets die bestmögliche Alternative an oder eine angemessene Erstattung der Beträge, die in Ihrem Namen noch nicht an Leistungsträger gebunden sind."
    },
    {
     "heading": "Umstände außerhalb der Kontrolle (höhere Gewalt)",
     "body": "Keine der Parteien haftet für Ereignisse außerhalb der zumutbaren Kontrolle — etwa extreme Wetterlagen, zivile Unruhen oder Reisebeschränkungen. In solchen Fällen arbeiten wir mit Ihnen daran, die Reise zu verschieben oder möglichst viel des Wertes zurückzugewinnen."
    }
   ]
  },
  "labels": {
   "lastUpdatedLabel": "Zuletzt aktualisiert",
   "englishPrevails": "Dies ist eine Übersetzung. Weicht sie von der englischen Fassung ab, gilt die englische Fassung.",
   "ctaHeading": "Fragen vor der Buchung?",
   "ctaText": "Sie sind sich bei einer Bedingung oder einem Termin nicht sicher? Schreiben Sie uns, und wir erklären es Ihnen, bevor Sie sich entscheiden. Wir antworten innerhalb von zwei Stunden.",
   "whatsapp": "Guten Tag, Kemet — ich habe eine Frage zu Ihren Buchungsbedingungen.",
   "emailSubject": "Kemet — eine Frage zu den Buchungsbedingungen",
   "moreLabel": "Auch lesenswert",
   "moreText": "Die beiden anderen Dokumente, die für eine Anfrage und eine Buchung gelten."
  }
 },
 "fr": {
  "privacy": {
   "localeSlug": "politique-de-confidentialite",
   "metaTitle": "Politique de confidentialité | Kemet",
   "metaDescription": "Comment Kemet recueille, utilise et protège les données personnelles que vous nous communiquez en nous contactant. Le strict minimum, jamais vendu.",
   "standfirst": "Ce que nous recueillons, ce que nous en faisons et les droits dont vous disposez sur vos données. Nous en recueillons le strict minimum — et ne les vendons jamais.",
   "title": "Politique de confidentialité",
   "intro": "Cette politique explique quelles données personnelles Kemet recueille lorsque vous nous contactez ou utilisez ce site, l'usage que nous en faisons et les droits dont vous disposez à leur égard. Nous en recueillons le strict minimum et ne les vendons jamais.",
   "lastUpdated": "novembre 2026",
   "sections": [
    {
     "heading": "Qui sommes-nous",
     "body": [
      "Kemet est une société de conception de voyages privés, qui organise des voyages sur mesure en Égypte ; elle est le « responsable du traitement » au sens de la présente politique. Nous sommes établis au Caire, en Égypte.",
      "Vous pouvez nous joindre pour toute question relative à cette politique — y compris pour toute demande d'accès, de rectification ou de suppression de vos données — par e-mail à info@kemet-travel.com."
     ]
    },
    {
     "heading": "Ce que nous recueillons",
     "body": [
      "Lorsque vous nous envoyez un message via le formulaire de contact, nous recueillons les informations que vous choisissez de nous fournir : votre nom, votre adresse e-mail et — si vous les saisissez — votre numéro de téléphone, vos dates de voyage envisagées, la taille de votre groupe, le rythme et les priorités que vous choisissez, et le contenu de votre message.",
      "Comme presque tous les sites web, notre serveur enregistre également dans ses journaux des informations techniques courantes (telles que l'adresse IP, le type de navigateur et les pages demandées). Nous ne les utilisons pas pour vous identifier personnellement.",
      "Si vous rejoignez notre liste — depuis l'invitation présente sur ce site ou depuis le concepteur de voyage — nous vous envoyons d'abord un e-mail pour vous demander de confirmer, et rien d'autre n'est envoyé tant que vous ne l'avez pas fait. Nous conservons votre adresse e-mail, votre nom si vous le donnez, le fait que vous vous soyez inscrit(e) depuis l'invitation ou depuis le concepteur de voyage, la langue de la page, ainsi qu'une trace de votre consentement : la date à laquelle vous l'avez donné et celle à laquelle vous l'avez confirmé, le texte auquel vous avez adhéré et l'adresse IP d'où chacun provient. Vous pouvez quitter la liste à tout moment grâce au lien de désinscription présent dans nos e-mails, ou en nous écrivant.",
      "Nous ne proposons pas de comptes utilisateurs et n'encaissons aucun paiement sur ce site ; nous ne recueillons donc jamais ici de mots de passe ni de données de carte bancaire."
     ]
    },
    {
     "heading": "Comment nous utilisons vos données",
     "body": [
      "Nous utilisons les informations de votre demande uniquement pour vous répondre, pour comprendre ce que vous recherchez et — si vous donnez suite — pour concevoir et organiser votre voyage. Nous pouvons vous contacter par e-mail, par téléphone ou par WhatsApp, à l'aide des coordonnées que vous nous avez fournies.",
      "Si vous ne voyagez pas tout de suite avec nous, nous pouvons vous écrire de nouveau au sujet du voyage sur lequel vous nous avez interrogés : au plus trois fois dans l'année qui suit votre demande. Dites-le-nous à tout moment et nous ne vous écrirons plus.",
      "Notre base juridique est votre consentement, les démarches nécessaires à la conclusion et à l'exécution d'un contrat de voyage à votre demande, et, pour ces messages de suivi, notre intérêt légitime à répondre à la question que vous nous avez adressée. Nous ne partageons pas vos données avec des annonceurs et nous ne les utilisons pas pour une prise de décision automatisée."
     ]
    },
    {
     "heading": "Cookies et statistiques de fréquentation",
     "body": [
      "Ce site n'utilise aucun cookie à des fins publicitaires ou de suivi, et ne charge aucun script d'analyse ou de publicité tiers. Il ne constitue aucun profil marketing à votre sujet.",
      "Nous mesurons l'usage du site au moyen de notre propre outil statistique simple, qui fonctionne uniquement sur notre serveur. Pour chaque page consultée, il enregistre la page, le site ou le moteur de recherche qui y a mené, l'éventuel marqueur de campagne du lien par lequel vous êtes arrivé, le type d'appareil (téléphone, tablette ou ordinateur, déduit de la largeur de l'écran) et le réglage de langue de votre navigateur. Il enregistre aussi les actions sur la page : un appui sur WhatsApp ou sur l'e-mail, le voyage que vous avez ouvert, les recherches sur ce site (y compris les mots recherchés), jusqu'où vous avez lu une page et combien de temps vous y êtes resté. Les visites sont comptées à l'aide d'un code formé à partir de votre connexion et de votre navigateur, associés à un secret qui change chaque jour : un visiteur ne peut donc pas être suivi d'un jour à l'autre, et le code ne peut pas être reconverti en adresse IP. Votre adresse IP elle-même n'est pas conservée.",
      "Si votre navigateur envoie un signal Do Not Track ou Global Privacy Control, rien de tout cela n'est enregistré. Ces données statistiques sont supprimées automatiquement au bout de 13 mois.",
      "Lorsque vous nous envoyez une demande, nous notons comment vous avez accédé au site ce jour-là — par exemple via un moteur de recherche ou un assistant d'IA — et les pages que vous avez lues, afin de pouvoir vous répondre au sujet du voyage que vous consultiez. Ces informations sont conservées avec votre demande.",
      "Le site mémorise aussi dans votre navigateur quelques choix d'affichage, par exemple le fait que vous avez fermé le bandeau saisonnier ou l'invitation à rejoindre notre liste. Ces informations restent sur votre appareil et ne nous sont jamais transmises."
     ]
    },
    {
     "heading": "Avec qui nous les partageons",
     "body": [
      "Nous ne partageons vos données que lorsque cela est nécessaire pour vous répondre ou pour organiser un voyage que vous nous avez demandé de préparer — par exemple avec les hôtels, le bateau de croisière ou la compagnie aérienne réservés pour votre itinéraire précis. Votre guide et votre chauffeur font partie de l'équipe de Kemet.",
      "Notre site web et notre messagerie sont hébergés par notre hébergeur, qui traite les données pour notre compte selon ses propres conditions de sécurité. Nous ne vendons, ne louons ni n'échangeons jamais vos données personnelles à qui que ce soit."
     ]
    },
    {
     "heading": "Durée de conservation",
     "body": [
      "Nous conservons une demande pendant trois ans à compter du jour où elle a été envoyée, puis nous la supprimons. Lorsqu'une réservation est conclue, certains documents peuvent être conservés plus longtemps afin de respecter des obligations comptables ou légales.",
      "Si vous rejoignez notre liste, nous conservons vos coordonnées jusqu'à ce que vous la quittiez. Une inscription qui n'est jamais confirmée depuis l'e-mail que nous envoyons est supprimée au bout de 30 jours. Si vous quittez la liste, nous gardons une trace de votre adresse et de la date de votre départ, afin que vous ne soyez pas réinscrit(e) par erreur.",
      "Vous pouvez nous demander de supprimer vos données à tout moment (voir « Vos droits »)."
     ]
    },
    {
     "heading": "Vos droits",
     "body": [
      "Si vous vous trouvez dans l'UE/EEE, au Royaume-Uni ou dans une juridiction comparable, vous avez le droit d'accéder aux données personnelles que nous détenons à votre sujet, de les faire rectifier ou supprimer, de vous opposer à leur utilisation ou d'en demander la limitation, et d'en recevoir une copie dans un format portable.",
      "Pour exercer l'un de ces droits, écrivez-nous à info@kemet-travel.com ; nous vous répondrons dans un délai raisonnable. Vous avez également le droit d'introduire une réclamation auprès de l'autorité de protection des données de votre pays."
     ]
    },
    {
     "heading": "Assistants et serveur MCP",
     "body": [
      "Des assistants d'IA peuvent lire nos pages publiées et notre catalogue de voyages via un serveur en lecture seule à l'adresse https://kemet-travel.com/mcp. Il ne demande aucune connexion et ne dépose aucun cookie. Ce qu'un assistant lui envoie (mots recherchés, identifiant de voyage, langue) n'est pas conservé. Nous gardons uniquement un décompte quotidien anonyme de l'outil utilisé, sans adresse IP ni aucun détail de la requête.",
      "Le serveur ne peut ni réserver ni envoyer quoi que ce soit. Si vous demandez à un assistant de nous contacter, il vous remet un lien, et un message ne nous parvient que lorsque vous l'ouvrez et l'envoyez vous-même. Ce que vous saisissez dans l'assistant lui-même relève de la politique de confidentialité propre à cet assistant."
     ]
    },
    {
     "heading": "Sécurité",
     "body": [
      "Le site est diffusé en HTTPS chiffré, et nous prenons des mesures techniques et organisationnelles raisonnables pour protéger les informations que vous nous envoyez. Aucune transmission sur internet ne peut être garantie comme totalement sûre, mais nous nous efforçons de protéger vos données."
     ]
    },
    {
     "heading": "Modifications de cette politique",
     "body": [
      "Nous pouvons mettre à jour cette politique de temps à autre. La date indiquée en haut de page précise celle de la dernière révision ; la version en vigueur se trouve toujours sur cette page."
     ]
    },
    {
     "heading": "Nous contacter",
     "body": [
      "Une question sur la protection de votre vie privée ou sur cette politique ? Écrivez à info@kemet-travel.com ; nous serons heureux de vous aider."
     ]
    }
   ]
  },
  "terms": {
   "localeSlug": "conditions-d-utilisation",
   "metaTitle": "Conditions d'utilisation | Kemet",
   "metaDescription": "Les conditions d'usage du site Kemet, des demandes et des devis. À lire avec nos conditions de réservation et d'annulation pour un voyage confirmé.",
   "standfirst": "Les conditions qui encadrent notre site, les demandes et les devis — rédigées simplement, à lire avec nos conditions de réservation et d'annulation.",
   "title": "Conditions d'utilisation",
   "intro": "Ces conditions régissent votre utilisation du site web de Kemet et définissent le cadre dans lequel nous fournissons des informations et des devis. Veuillez les lire avec nos conditions de réservation et d'annulation, qui couvrent l'acompte, le paiement et l'annulation d'un voyage confirmé.",
   "lastUpdated": "novembre 2026",
   "sections": [
    {
     "heading": "À propos de ces conditions",
     "body": [
      "En utilisant ce site web, vous acceptez ces conditions. Si vous ne les acceptez pas, veuillez ne pas utiliser le site. Elles sont régies par le droit de la République arabe d'Égypte, et tout litige relatif à ce site web relèvera de la compétence des tribunaux égyptiens."
     ]
    },
    {
     "heading": "Qui sommes-nous",
     "body": [
      "Kemet conçoit et organise des voyages privés sur mesure en Égypte, depuis Le Caire. Votre guide égyptologue agréé et votre chauffeur font partie de l'équipe de Kemet, et les hôtels d'un voyage Kemet sont réservés dans le cadre des contrats que Kemet a conclus directement avec eux. Vous pouvez nous joindre à info@kemet-travel.com."
     ]
    },
    {
     "heading": "Demandes, devis et prix",
     "body": [
      "Une demande ou un devis que nous vous envoyons constitue une proposition, et non une réservation confirmée. Les prix sont indiqués par personne, en euros, et dépendent des dates, des disponibilités, de la taille du groupe et des éléments de votre itinéraire.",
      "Les prix et les disponibilités peuvent changer tant qu'une réservation n'a pas été confirmée par écrit et qu'un acompte n'a pas été reçu. Nous confirmons toujours le prix définitif avec vous avant que vous ne vous engagiez."
     ]
    },
    {
     "heading": "Réservation, paiement et annulation",
     "body": [
      "Lorsque vous confirmez un voyage, l'acompte, le solde et les conditions d'annulation indiqués sur notre page Réservation et annulation s'appliquent. Veuillez lire cette page avant de confirmer."
     ]
    },
    {
     "heading": "Exactitude du contenu du site",
     "body": [
      "Nous veillons à ce que les informations de ce site soient exactes et à jour, mais certains éléments, tels que les horaires d'ouverture, l'accès aux sites, les prix et les conditions de voyage, peuvent changer. Le contenu est fourni à titre indicatif et ne fait partie d'aucun contrat tant qu'il n'est pas confirmé dans votre itinéraire."
     ]
    },
    {
     "heading": "Propriété intellectuelle",
     "body": [
      "Les textes, la conception, les logos et les images de ce site web appartiennent à Kemet ou sont utilisés avec autorisation, et sont protégés par le droit d'auteur. Vous ne pouvez pas les copier, les reproduire ni les réutiliser à des fins commerciales sans notre accord écrit."
     ]
    },
    {
     "heading": "Passeports, visas et assurance",
     "body": [
      "Il vous incombe de détenir un passeport en cours de validité et le visa approprié pour l'Égypte, et de satisfaire à toute exigence sanitaire ou d'entrée. Nous pouvons vous conseiller, mais ces exigences sont fixées par les autorités et relèvent en dernier ressort de votre responsabilité.",
      "Nous recommandons vivement de souscrire, pour chaque voyageur, une assurance voyage complète couvrant les soins médicaux, l'annulation et le rapatriement."
     ]
    },
    {
     "heading": "Qui assure votre voyage",
     "body": [
      "Votre guide égyptologue et votre chauffeur font partie de l'équipe de Kemet, et vos hôtels sont réservés dans le cadre des contrats que Kemet a conclus directement avec eux : les personnes et les lieux de votre itinéraire sont donc ceux dont nous répondons directement.",
      "Certaines parties d'un voyage sont assurées par les sociétés qui les exploitent : un bateau de croisière sur le Nil à horaires fixes, les vols intérieurs et les trains. Ces prestations sont fournies selon leurs propres conditions de transport, et leurs horaires peuvent occasionnellement changer pour des raisons indépendantes de notre volonté. Dans ce cas, nous réorganisons le reste du voyage en conséquence et vous en informons immédiatement."
     ]
    },
    {
     "heading": "Limitation de responsabilité",
     "body": [
      "Dans la mesure permise par la loi, Kemet n'est pas responsable des dommages indirects ou consécutifs résultant de l'utilisation de ce site web, ni des événements échappant à notre contrôle raisonnable. Rien dans ces conditions ne limite une responsabilité qui ne peut légalement être limitée."
     ]
    },
    {
     "heading": "Nous contacter",
     "body": [
      "Une question sur ces conditions ? Écrivez à info@kemet-travel.com."
     ]
    }
   ]
  },
  "booking": {
   "localeSlug": "reservation-paiement-annulation",
   "metaTitle": "Réservation, paiement et annulation | Kemet",
   "metaDescription": "Comment réserver un voyage privé Kemet : les étapes, l'acompte et les conditions de paiement, les moyens de paiement acceptés et la politique d'annulation.",
   "title": "Réservation, paiement et annulation",
   "standfirst": "Tout ce qu'il faut savoir avant de confirmer — comment fonctionne la réservation, quand les paiements sont dus et nos conditions d'annulation. En toute transparence, sans frais cachés.",
   "stepsHeading": "Comment fonctionne la réservation",
   "steps": [
    {
     "heading": "Faites votre demande — gratuite et sans engagement",
     "body": "Envoyez-nous vos dates, vos centres d'intérêt et la taille de votre groupe. Nous vous répondons sous deux heures avec un programme jour par jour et un prix clair. Cette étape est gratuite et sans engagement."
    },
    {
     "heading": "Recevez et affinez votre proposition",
     "body": "Nous concevons un itinéraire privé accompagné d'un devis entièrement détaillé — ce qui est inclus et exclu, avec des prix par personne en euros. Nous le retravaillons avec vous jusqu'à ce qu'il soit exactement tel que vous le souhaitez."
    },
    {
     "heading": "Confirmez avec un acompte",
     "body": "Lorsque vous êtes satisfait(e), un acompte confirme votre voyage et nous permet de commencer à réserver, en votre nom, les hôtels, les guides, les croisières et les autorisations."
    },
    {
     "heading": "Réglez le solde avant le départ",
     "body": "Le solde restant est dû avant le départ. Une fois celui-ci réglé, nous vous remettons vos documents définitifs, le programme jour par jour et le nom de votre interlocuteur."
    }
   ],
   "paymentHeading": "Acompte et solde",
   "depositLabel": "Acompte",
   "deposit": {
    "label": "25 % du coût total du voyage",
    "note": "Payable pour confirmer votre réservation. Il est déduit de votre solde final et ne constitue pas un frais supplémentaire."
   },
   "balanceLabel": "Solde",
   "balance": {
    "label": "Dû 30 jours avant le départ",
    "note": "Pour les réservations effectuées moins de 30 jours avant le départ, la totalité du montant est payable au moment de la confirmation."
   },
   "methodsLabel": "Moyens de paiement",
   "paymentMethods": [
    "Virement bancaire",
    "Principales cartes de crédit et de débit",
    "PayPal"
   ],
   "cancelHeading": "Annulation de votre part",
   "cancelText": "Si vous devez annuler, les frais suivants s'appliquent selon le délai dont vous nous prévenez avant le départ. Ces frais correspondent aux engagements que nous prenons en votre nom auprès des hôtels, des guides et des prestataires.",
   "cancellationTiers": [
    {
     "window": "45 jours ou plus avant le départ",
     "charge": "Acompte uniquement"
    },
    {
     "window": "30 à 44 jours avant le départ",
     "charge": "50 % du coût total du voyage"
    },
    {
     "window": "15 à 29 jours avant le départ",
     "charge": "75 % du coût total du voyage"
    },
    {
     "window": "Moins de 15 jours avant le départ",
     "charge": "100 % du coût total du voyage"
    }
   ],
   "policiesHeading": "Modifications, assurance et imprévus",
   "policies": [
    {
     "heading": "Modifications de votre réservation",
     "body": "Nous acceptons les modifications chaque fois que possible. Certains changements — notamment pour les vols, les croisières ou les hôtels en haute saison — peuvent entraîner des frais facturés par les prestataires, que nous vous confirmons toujours avant de poursuivre."
    },
    {
     "heading": "Assurance voyage",
     "body": "Une assurance voyage complète couvrant les soins médicaux, l'annulation et le rapatriement est vivement recommandée pour chaque voyageur et doit être souscrite dès la confirmation de votre réservation."
    },
    {
     "heading": "Si nous devons modifier ou annuler",
     "body": "Si des circonstances indépendantes de notre volonté imposent une modification, nous vous proposerons toujours la meilleure solution de remplacement possible ou un remboursement équitable des sommes non encore engagées auprès des prestataires en votre nom."
    },
    {
     "heading": "Circonstances indépendantes de la volonté des parties (force majeure)",
     "body": "Aucune des parties n'est responsable des événements échappant à son contrôle raisonnable — tels que des conditions météorologiques extrêmes, des troubles civils ou des restrictions de voyage. Dans ce cas, nous travaillons avec vous pour reprogrammer le voyage ou récupérer la plus grande valeur possible."
    }
   ]
  },
  "labels": {
   "lastUpdatedLabel": "Dernière mise à jour",
   "englishPrevails": "Ceci est une traduction. En cas de différence avec la version anglaise, la version anglaise prévaut.",
   "ctaHeading": "Des questions avant de réserver ?",
   "ctaText": "Une condition ou une date ne vous paraît pas claire ? Écrivez-nous et nous vous l'expliquerons avant que vous ne décidiez. Nous répondons sous deux heures.",
   "whatsapp": "Bonjour Kemet — j'ai une question sur vos conditions de réservation.",
   "emailSubject": "Kemet — une question sur les conditions de réservation",
   "moreLabel": "À lire aussi",
   "moreText": "Les deux autres documents qui s'appliquent à une demande et à une réservation."
  }
 },
 "it": {
  "privacy": {
   "localeSlug": "informativa-sulla-privacy",
   "metaTitle": "Informativa sulla privacy | Kemet",
   "metaDescription": "Come Kemet raccoglie, usa e protegge i dati personali che ci comunicate quando ci contattate. Ne raccogliamo il minimo e non li vendiamo mai.",
   "standfirst": "Cosa raccogliamo, come lo usiamo e quali diritti avete sui vostri dati. Ne raccogliamo il minimo indispensabile — e non li vendiamo mai.",
   "title": "Informativa sulla privacy",
   "intro": "Questa informativa spiega quali dati personali Kemet raccoglie quando ci contattate o usate questo sito, come li utilizziamo e quali diritti avete su di essi. Ne raccogliamo il minimo indispensabile e non li vendiamo mai.",
   "lastUpdated": "novembre 2026",
   "sections": [
    {
     "heading": "Chi siamo",
     "body": [
      "Kemet è una società di progettazione di viaggi privati che organizza viaggi su misura in Egitto ed è il «titolare del trattamento» ai fini della presente informativa. Abbiamo sede al Cairo, in Egitto.",
      "Potete contattarci per qualsiasi questione relativa a questa informativa — compresa qualsiasi richiesta di accesso, rettifica o cancellazione dei vostri dati — scrivendo a info@kemet-travel.com."
     ]
    },
    {
     "heading": "Cosa raccogliamo",
     "body": [
      "Quando ci inviate un messaggio tramite il modulo di contatto, raccogliamo i dati che scegliete di fornire: il vostro nome, l'indirizzo email e — se li inserite — il numero di telefono, le date di viaggio previste, le dimensioni del gruppo, il ritmo e le priorità che scegliete e il contenuto del messaggio.",
      "Come quasi tutti i siti web, il nostro server registra nei propri log anche informazioni tecniche standard (come l'indirizzo IP, il tipo di browser e le pagine richieste). Non le usiamo per identificarvi personalmente.",
      "Se vi iscrivete al nostro elenco — dall'invito presente su questo sito o dal progettista di viaggi — vi inviamo prima un'email in cui vi chiediamo di confermare, e finché non lo fate non inviamo nient'altro. Conserviamo il vostro indirizzo email, il vostro nome se lo indicate, se vi siete iscritti dall'invito o dal progettista di viaggi, la lingua della pagina e la registrazione del vostro consenso: quando lo avete dato e quando lo avete confermato, la formulazione che avete accettato e l'indirizzo IP da cui proveniva ciascuno dei due passaggi. Potete uscire dall'elenco in qualsiasi momento tramite il link di annullamento dell'iscrizione presente nelle nostre email, oppure scrivendoci.",
      "Non gestiamo account utente e su questo sito non riceviamo pagamenti, quindi qui non raccogliamo mai password né dati di carte."
     ]
    },
    {
     "heading": "Come usiamo i vostri dati",
     "body": [
      "Usiamo i dati della vostra richiesta esclusivamente per rispondervi, per capire che cosa cercate e — se decidete di procedere — per progettare e organizzare il vostro viaggio. Potremmo contattarvi per email, telefono o WhatsApp usando i recapiti che ci fornite.",
      "Se non viaggiate subito con noi, potremmo scrivervi di nuovo a proposito del viaggio per cui ci avete contattato: al massimo tre volte nell'anno successivo alla vostra richiesta. Ditecelo in qualsiasi momento e non vi scriveremo più.",
      "La nostra base giuridica è il vostro consenso, l'esecuzione di misure necessarie per concludere e dare esecuzione a un accordo di viaggio su vostra richiesta e, per quei messaggi di seguito, il nostro legittimo interesse a rispondere alla domanda che ci avete rivolto. Non condividiamo i vostri dati con inserzionisti e non li usiamo per processi decisionali automatizzati."
     ]
    },
    {
     "heading": "Cookie e statistiche",
     "body": [
      "Questo sito non usa cookie per pubblicità o tracciamento e non carica script di analisi o pubblicitari di terze parti. Non costruisce alcun profilo di marketing su di voi.",
      "Misuriamo l'utilizzo del sito con un nostro semplice sistema di statistiche, che funziona soltanto sul nostro server. Per ogni pagina visualizzata registra la pagina, il sito web o il motore di ricerca che vi ha rimandato, l'eventuale etichetta di campagna nel link da cui siete arrivati, il tipo di dispositivo (telefono, tablet o computer, stabilito in base alla larghezza dello schermo) e l'impostazione della lingua del vostro browser. Registra anche le azioni sulla pagina: il tocco su WhatsApp o sull'e-mail, il viaggio che avete aperto, le ricerche in questo sito (comprese le parole cercate), fin dove avete letto una pagina e quanto tempo vi siete rimasti. Le visite vengono contate con un codice ricavato dalla vostra connessione e dal vostro browser insieme a un valore segreto che cambia ogni giorno: un visitatore non può quindi essere seguito da un giorno all'altro, e il codice non può essere riconvertito in un indirizzo IP. Il vostro indirizzo IP in sé non viene memorizzato.",
      "Se il vostro browser invia un segnale Do Not Track o Global Privacy Control, nulla di tutto ciò viene registrato. Questi dati statistici vengono eliminati automaticamente dopo 13 mesi.",
      "Quando ci inviate una richiesta, annotiamo come siete arrivati al sito quel giorno — per esempio tramite un motore di ricerca o un assistente di intelligenza artificiale — e quali pagine avete letto, così da poter rispondervi sul viaggio che stavate guardando. Questa informazione viene conservata insieme alla vostra richiesta.",
      "Il sito memorizza inoltre nel vostro browser alcune scelte di visualizzazione, per esempio il fatto che abbiate chiuso il banner stagionale o l'invito al nostro elenco. Restano sul vostro dispositivo e non ci vengono mai inviate."
     ]
    },
    {
     "heading": "Con chi li condividiamo",
     "body": [
      "Condividiamo i vostri dati solo quando è necessario per rispondervi o per organizzare un viaggio che ci avete chiesto di progettare — per esempio con gli hotel, la nave da crociera o la compagnia aerea prenotati per il vostro specifico itinerario. La vostra guida e il vostro autista fanno parte del team di Kemet.",
      "Il nostro sito web e la nostra posta elettronica sono ospitati dal nostro fornitore di hosting, che tratta i dati per nostro conto secondo i propri termini di sicurezza. Non vendiamo, non affittiamo e non scambiamo mai i vostri dati personali con nessuno."
     ]
    },
    {
     "heading": "Per quanto tempo li conserviamo",
     "body": [
      "Conserviamo una richiesta per tre anni dal giorno in cui è stata inviata, poi la cancelliamo. Se si arriva a una prenotazione, alcuni documenti possono essere conservati più a lungo per adempiere a obblighi contabili o di legge.",
      "Se vi iscrivete al nostro elenco, conserviamo i vostri dati finché non ne uscite. Un'iscrizione che non viene mai confermata dall'email che inviamo viene cancellata dopo 30 giorni. Se uscite dall'elenco, conserviamo una nota del vostro indirizzo e della data di uscita, in modo che non siate aggiunti di nuovo per errore.",
      "Potete chiederci in qualsiasi momento di cancellare i vostri dati (vedere «I vostri diritti»)."
     ]
    },
    {
     "heading": "I vostri diritti",
     "body": [
      "Se vi trovate nell'UE/SEE, nel Regno Unito o in una giurisdizione analoga, avete il diritto di accedere ai dati personali che conserviamo su di voi, di farli rettificare o cancellare, di opporvi al loro trattamento o di limitarlo e di riceverne una copia in formato portabile.",
      "Per esercitare uno qualsiasi di questi diritti, scrivete a info@kemet-travel.com e vi risponderemo entro un termine ragionevole. Avete inoltre il diritto di proporre reclamo all'autorità di protezione dei dati del vostro paese."
     ]
    },
    {
     "heading": "Assistenti e server MCP",
     "body": [
      "Gli assistenti di intelligenza artificiale possono leggere le nostre pagine pubblicate e il nostro catalogo di viaggi tramite un server in sola lettura all'indirizzo https://kemet-travel.com/mcp. Non richiede accesso e non imposta cookie. Ciò che un assistente gli invia (parole di ricerca, un identificativo di viaggio, una lingua) non viene memorizzato. Conserviamo soltanto un conteggio giornaliero anonimo dello strumento utilizzato, senza indirizzo IP e senza alcun dettaglio della richiesta.",
      "Il server non può prenotare né inviare nulla. Se chiedete a un assistente di contattarci, vi fornisce un link, e un messaggio ci raggiunge solo quando lo aprite e lo inviate voi stessi. Ciò che scrivete nell'assistente stesso è trattato secondo l'informativa sulla privacy di quell'assistente."
     ]
    },
    {
     "heading": "Sicurezza",
     "body": [
      "Il sito è erogato tramite HTTPS cifrato e adottiamo misure tecniche e organizzative ragionevoli per proteggere i dati che ci inviate. Nessuna trasmissione via internet può essere garantita come completamente sicura, ma ci impegniamo per mantenere al sicuro i vostri dati."
     ]
    },
    {
     "heading": "Modifiche a questa informativa",
     "body": [
      "Possiamo aggiornare questa informativa di tanto in tanto. La data in alto indica quando è stata riveduta l'ultima volta; la versione in vigore si trova sempre su questa pagina."
     ]
    },
    {
     "heading": "Contattateci",
     "body": [
      "Domande sulla vostra privacy o su questa informativa? Scrivete a info@kemet-travel.com e saremo lieti di aiutarvi."
     ]
    }
   ]
  },
  "terms": {
   "localeSlug": "condizioni-di-utilizzo",
   "metaTitle": "Condizioni di utilizzo | Kemet",
   "metaDescription": "Le condizioni che regolano l'uso del sito Kemet, delle richieste e dei preventivi. Da leggere insieme alle condizioni di prenotazione e cancellazione.",
   "standfirst": "Le condizioni alla base del nostro sito, delle richieste e dei preventivi — scritte in modo chiaro, da leggere insieme alle nostre condizioni di prenotazione e cancellazione.",
   "title": "Condizioni di utilizzo",
   "intro": "Queste condizioni regolano l'uso del sito web di Kemet e stabiliscono le basi su cui forniamo informazioni e preventivi. Vi preghiamo di leggerle insieme alle nostre condizioni di prenotazione e cancellazione, che disciplinano acconto, pagamento e cancellazione per un viaggio confermato.",
   "lastUpdated": "novembre 2026",
   "sections": [
    {
     "heading": "Informazioni su queste condizioni",
     "body": [
      "Utilizzando questo sito web accettate queste condizioni. Se non siete d'accordo, vi preghiamo di non usare il sito. Esse sono regolate dalla legge della Repubblica Araba d'Egitto e qualsiasi controversia relativa a questo sito sarà soggetta alla giurisdizione dei tribunali egiziani."
     ]
    },
    {
     "heading": "Chi siamo",
     "body": [
      "Kemet progetta e organizza viaggi privati su misura in Egitto, operando dal Cairo. La vostra guida egittologica con licenza e il vostro autista fanno parte del team di Kemet, e gli hotel di un viaggio Kemet sono prenotati in base ai contratti che Kemet stessa ha stipulato con essi. Potete contattarci all'indirizzo info@kemet-travel.com."
     ]
    },
    {
     "heading": "Richieste, preventivi e prezzi",
     "body": [
      "Una richiesta o un preventivo che vi inviamo è una proposta, non una prenotazione confermata. I prezzi sono indicati a persona in euro e dipendono dalle date, dalla disponibilità, dal numero di partecipanti e dai componenti del vostro itinerario.",
      "Prezzi e disponibilità possono cambiare finché una prenotazione non è confermata per iscritto e non è stato ricevuto un acconto. Confermiamo sempre con voi il prezzo finale prima che vi impegniate."
     ]
    },
    {
     "heading": "Prenotazioni, pagamento e cancellazione",
     "body": [
      "Quando confermate un viaggio, si applicano l'acconto, il saldo e le condizioni di cancellazione indicati nella nostra pagina Prenotazione, pagamento e cancellazione. Vi preghiamo di leggere quella pagina prima di confermare."
     ]
    },
    {
     "heading": "Accuratezza dei contenuti del sito",
     "body": [
      "Ci impegniamo a mantenere accurate e aggiornate le informazioni di questo sito, ma dettagli come orari di apertura, accesso ai siti, prezzi e condizioni di viaggio possono cambiare. I contenuti sono forniti a titolo di orientamento generale e non fanno parte di alcun contratto finché non sono confermati nel vostro itinerario."
     ]
    },
    {
     "heading": "Proprietà intellettuale",
     "body": [
      "Testi, grafica, loghi e immagini di questo sito web appartengono a Kemet o sono utilizzati con autorizzazione e sono protetti dal diritto d'autore. Non potete copiarli, riprodurli o riutilizzarli per scopi commerciali senza il nostro consenso scritto."
     ]
    },
    {
     "heading": "Passaporti, visti e assicurazione",
     "body": [
      "Siete responsabili di essere in possesso di un passaporto valido e del visto corretto per l'Egitto e di soddisfare qualsiasi requisito sanitario o di ingresso. Possiamo fornire consigli, ma i requisiti sono stabiliti dalle autorità e restano in ultima analisi a vostra responsabilità.",
      "Raccomandiamo vivamente un'assicurazione di viaggio completa che copra cure mediche, annullamento e rimpatrio per ogni viaggiatore."
     ]
    },
    {
     "heading": "Chi realizza il vostro viaggio",
     "body": [
      "La vostra guida egittologica e il vostro autista fanno parte del team di Kemet, e i vostri hotel sono prenotati in base ai contratti che Kemet stessa ha stipulato con essi: le persone e i luoghi del vostro itinerario sono dunque quelli di cui rispondiamo direttamente.",
      "Alcune parti di un viaggio sono gestite dalle società che le operano: una nave da crociera sul Nilo di linea, voli interni e treni. Forniscono tali servizi secondo le proprie condizioni di trasporto e i loro orari possono occasionalmente cambiare per motivi indipendenti dalla nostra volontà. Quando accade, riorganizziamo il resto del viaggio di conseguenza e ve lo comunichiamo subito."
     ]
    },
    {
     "heading": "Limitazione di responsabilità",
     "body": [
      "Nella misura consentita dalla legge, Kemet non risponde di danni indiretti o consequenziali derivanti dall'uso di questo sito web, né di eventi al di fuori del nostro ragionevole controllo. Nulla in queste condizioni limita una responsabilità che non può essere legalmente limitata."
     ]
    },
    {
     "heading": "Contattateci",
     "body": [
      "Domande su queste condizioni? Scrivete a info@kemet-travel.com."
     ]
    }
   ]
  },
  "booking": {
   "localeSlug": "prenotazione-pagamento-cancellazione",
   "metaTitle": "Prenotazione, pagamento e cancellazione | Kemet",
   "metaDescription": "Come funziona la prenotazione di un viaggio privato Kemet: le fasi, le condizioni di acconto e pagamento, i metodi accettati e la politica di cancellazione.",
   "title": "Prenotazione, pagamento e cancellazione",
   "standfirst": "Tutto ciò che occorre sapere prima di confermare — come funziona la prenotazione, quando scadono i pagamenti e le nostre condizioni di cancellazione. In modo trasparente, senza costi nascosti.",
   "stepsHeading": "Come funziona la prenotazione",
   "steps": [
    {
     "heading": "Richiedete — gratis e senza impegno",
     "body": "Inviateci le vostre date, i vostri interessi e il numero di partecipanti. Rispondiamo entro due ore con un programma giorno per giorno e un prezzo chiaro. In questa fase non c'è alcun costo né impegno."
    },
    {
     "heading": "Ricevete e perfezionate la proposta",
     "body": "Progettiamo un itinerario privato con un preventivo dettagliato voce per voce — che cosa è incluso ed escluso, con prezzi a persona in euro. Lo modifichiamo insieme a voi finché non è esattamente come lo desiderate."
    },
    {
     "heading": "Confermate con un acconto",
     "body": "Quando siete soddisfatti, un acconto conferma il vostro viaggio e ci permette di iniziare ad assicurarvi hotel, guide, crociere e permessi a vostro nome."
    },
    {
     "heading": "Saldate prima di partire",
     "body": "Il saldo rimanente è dovuto prima della partenza. Una volta saldato, vi inviamo i documenti definitivi, il programma giorno per giorno e il nominativo del vostro referente."
    }
   ],
   "paymentHeading": "Acconto e saldo",
   "depositLabel": "Acconto",
   "deposit": {
    "label": "25% del costo totale del viaggio",
    "note": "Da versare per confermare la prenotazione. Viene detratto dal saldo finale e non costituisce un addebito aggiuntivo."
   },
   "balanceLabel": "Saldo",
   "balance": {
    "label": "Da versare 30 giorni prima della partenza",
    "note": "Per le prenotazioni effettuate a meno di 30 giorni dalla partenza, l'intero importo è dovuto al momento della conferma."
   },
   "methodsLabel": "Metodi di pagamento",
   "paymentMethods": [
    "Bonifico bancario",
    "Principali carte di credito e di debito",
    "PayPal"
   ],
   "cancelHeading": "Cancellazione da parte vostra",
   "cancelText": "Se avete bisogno di cancellare, si applicano gli addebiti seguenti, in base a quanto tempo prima della partenza ce lo comunicate. Gli addebiti riflettono gli impegni che assumiamo per vostro conto con hotel, guide e operatori.",
   "cancellationTiers": [
    {
     "window": "45 o più giorni prima della partenza",
     "charge": "Solo l'acconto"
    },
    {
     "window": "Da 30 a 44 giorni prima della partenza",
     "charge": "50% del costo totale del viaggio"
    },
    {
     "window": "Da 15 a 29 giorni prima della partenza",
     "charge": "75% del costo totale del viaggio"
    },
    {
     "window": "Meno di 15 giorni prima della partenza",
     "charge": "100% del costo totale del viaggio"
    }
   ],
   "policiesHeading": "Modifiche, assicurazione e imprevisti",
   "policies": [
    {
     "heading": "Modifiche alla prenotazione",
     "body": "Accogliamo le modifiche ovunque sia possibile. Alcune modifiche — in particolare a voli, crociere o hotel in alta stagione — possono comportare addebiti da parte dei fornitori, che confermiamo sempre con voi prima di procedere."
    },
    {
     "heading": "Assicurazione di viaggio",
     "body": "Un'assicurazione di viaggio completa che copra cure mediche, annullamento e rimpatrio è vivamente raccomandata per ogni viaggiatore e andrebbe stipulata non appena la prenotazione è confermata."
    },
    {
     "heading": "Se siamo noi a dover modificare o cancellare",
     "body": "Se circostanze al di fuori del nostro controllo rendono necessaria una modifica, vi offriremo sempre l'alternativa più vicina possibile oppure un equo rimborso degli importi non già impegnati con i fornitori per vostro conto."
    },
    {
     "heading": "Circostanze al di fuori del controllo (forza maggiore)",
     "body": "Nessuna delle parti risponde di eventi al di fuori del ragionevole controllo — come condizioni meteorologiche estreme, disordini civili o restrizioni di viaggio. In tali casi lavoriamo con voi per riprogrammare o recuperare il maggior valore possibile."
    }
   ]
  },
  "labels": {
   "lastUpdatedLabel": "Ultimo aggiornamento",
   "englishPrevails": "Questa è una traduzione. In caso di differenze rispetto alla versione inglese, prevale la versione inglese.",
   "ctaHeading": "Domande prima di prenotare?",
   "ctaText": "Non siete sicuri di una condizione o di una data? Scriveteci e ve la spiegheremo prima che decidiate. Rispondiamo entro due ore.",
   "whatsapp": "Buongiorno Kemet — ho una domanda sulle vostre condizioni di prenotazione.",
   "emailSubject": "Kemet — una domanda sulle condizioni di prenotazione",
   "moreLabel": "Leggete anche",
   "moreText": "Gli altri due documenti che si applicano a una richiesta e a una prenotazione."
  }
 },
 "es": {
  "privacy": {
   "localeSlug": "politica-de-privacidad",
   "metaTitle": "Política de privacidad | Kemet",
   "metaDescription": "Cómo Kemet recoge, utiliza y protege los datos personales que usted comparte al contactarnos. Recogemos lo mínimo posible y nunca los vendemos.",
   "standfirst": "Qué recogemos, cómo lo utilizamos y los derechos que usted tiene sobre sus datos. Recogemos lo mínimo posible y nunca lo vendemos.",
   "title": "Política de privacidad",
   "intro": "Esta política explica qué datos personales recoge Kemet cuando usted se pone en contacto con nosotros o utiliza este sitio web, cómo los utilizamos y qué derechos tiene sobre ellos. Recogemos lo mínimo posible y nunca los vendemos.",
   "lastUpdated": "noviembre de 2026",
   "sections": [
    {
     "heading": "Quiénes somos",
     "body": [
      "Kemet es una empresa de diseño de viajes privados que organiza viajes a medida por Egipto y es el «responsable del tratamiento» a los efectos de esta política. Tenemos nuestra sede en El Cairo, Egipto.",
      "Puede contactar con nosotros sobre cualquier asunto de esta política —incluida cualquier solicitud de acceso, rectificación o supresión de sus datos— por correo electrónico en info@kemet-travel.com."
     ]
    },
    {
     "heading": "Qué recogemos",
     "body": [
      "Cuando nos envía un mensaje a través del formulario de contacto, recogemos los datos que usted decide facilitar: su nombre, su correo electrónico y —si los introduce— su número de teléfono, las fechas previstas de viaje, el tamaño de su grupo, el ritmo y las prioridades que elija y el contenido de su mensaje.",
      "Como casi todos los sitios web, nuestro servidor también registra en sus archivos de registro información técnica habitual (como la dirección IP, el tipo de navegador y las páginas solicitadas). No la utilizamos para identificarle personalmente.",
      "Si se unen a nuestra lista —desde la invitación de este sitio o desde el diseñador de viajes—, primero les enviamos un correo para que lo confirmen, y no se envía nada más hasta que lo hagan. Conservamos su dirección de correo electrónico, su nombre si nos lo facilitan, si se suscribieron desde la invitación o desde el diseñador de viajes, el idioma de la página y un registro de su consentimiento: cuándo lo dieron y cuándo lo confirmaron, el texto con el que estuvieron de acuerdo y la dirección IP desde la que procedía cada uno. Pueden darse de baja de la lista en cualquier momento mediante el enlace de baja de nuestros correos o escribiéndonos.",
      "No gestionamos cuentas de usuario ni cobramos pagos en este sitio web, por lo que aquí nunca recogemos contraseñas ni datos de tarjetas."
     ]
    },
    {
     "heading": "Cómo utilizamos sus datos",
     "body": [
      "Utilizamos los datos de su consulta únicamente para responderle, para entender lo que busca y —si decide seguir adelante— para diseñar y organizar su viaje. Podemos contactar con usted por correo electrónico, teléfono o WhatsApp con los datos que nos facilite.",
      "Si no viajan con nosotros de inmediato, podemos volver a escribirles sobre el viaje por el que preguntaron: como máximo tres veces en el año siguiente a su consulta. Avísennos en cualquier momento y no volveremos a escribirles.",
      "Nuestra base jurídica es su consentimiento, las gestiones necesarias para celebrar y ejecutar un arreglo de viaje a petición de ustedes y, para esos mensajes de seguimiento, nuestro interés legítimo en responder a la pregunta que nos plantearon. No compartimos su información con anunciantes ni la utilizamos para tomar decisiones automatizadas."
     ]
    },
    {
     "heading": "Cookies y analítica",
     "body": [
      "Este sitio web no utiliza cookies publicitarias ni de seguimiento, y no carga scripts de analítica ni de publicidad de terceros. No elabora ningún perfil de marketing sobre usted.",
      "Medimos el uso del sitio con nuestra propia herramienta de estadísticas sencilla, que funciona solo en nuestro servidor. Para cada página vista registra la página, el sitio web o el buscador desde el que se llegó a ella, la etiqueta de campaña que pudiera llevar el enlace por el que llegó, el tipo de dispositivo (teléfono, tableta u ordenador, según el ancho de la pantalla) y la configuración de idioma de su navegador. También registra acciones en la página: pulsar WhatsApp o el correo electrónico, qué viaje abrió, las búsquedas en este sitio (incluidas las palabras buscadas), hasta dónde leyó una página y cuánto tiempo pasó en ella. Las visitas se cuentan con un código formado a partir de su conexión y su navegador junto con un valor secreto que cambia cada día, de modo que no se puede seguir a un visitante de un día a otro y el código no puede convertirse de nuevo en una dirección IP. Su dirección IP en sí no se almacena.",
      "Si su navegador envía una señal de «No rastrear» (Do Not Track) o de Control Global de Privacidad (Global Privacy Control), no se registra nada de lo anterior. Estos registros de analítica se eliminan automáticamente a los 13 meses.",
      "Cuando nos envía una consulta, anotamos cómo llegó al sitio ese día —por ejemplo, a través de un buscador o de un asistente de IA— y qué páginas leyó, para poder responderle sobre el viaje que estaba viendo. Esta información se conserva junto con su consulta.",
      "El sitio también recuerda en su navegador algunas preferencias de visualización, como que usted cerró el banner de temporada o la invitación a nuestra lista. Estas preferencias permanecen en su dispositivo y nunca se nos envían."
     ]
    },
    {
     "heading": "Con quién los compartimos",
     "body": [
      "Compartimos sus datos solo cuando es necesario para responderle o para organizar un viaje que usted nos ha pedido planificar —por ejemplo, con los hoteles, el crucero o la aerolínea reservados para su itinerario concreto—. Su guía y su conductor forman parte del equipo propio de Kemet.",
      "Nuestro sitio web y nuestro correo electrónico están alojados por nuestro proveedor de alojamiento, que trata los datos por cuenta nuestra conforme a sus propias condiciones de seguridad. Nunca vendemos, alquilamos ni intercambiamos sus datos personales con nadie."
     ]
    },
    {
     "heading": "Cuánto tiempo los conservamos",
     "body": [
      "Conservamos una consulta durante tres años desde el día en que se envió y después la eliminamos. Cuando se llega a hacer una reserva, algunos registros pueden conservarse más tiempo para cumplir obligaciones contables o legales.",
      "Si se unen a nuestra lista, conservamos sus datos hasta que se den de baja. Una suscripción que nunca se confirma desde el correo que enviamos se elimina a los 30 días. Si se dan de baja, guardamos una nota con su dirección y la fecha de la baja, para que no se les vuelva a añadir por error.",
      "Puede pedirnos que eliminemos sus datos en cualquier momento (véase «Sus derechos»)."
     ]
    },
    {
     "heading": "Sus derechos",
     "body": [
      "Si se encuentra en la UE o el EEE, en el Reino Unido o en una jurisdicción comparable, tiene derecho a acceder a los datos personales que conservamos sobre usted, a que se rectifiquen o se supriman, a oponerse a su uso o a limitarlo, y a recibir una copia en un formato portable.",
      "Para ejercer cualquiera de estos derechos, escríbanos a info@kemet-travel.com y le responderemos en un plazo razonable. También tiene derecho a presentar una reclamación ante la autoridad de protección de datos de su país."
     ]
    },
    {
     "heading": "Asistentes y servidor MCP",
     "body": [
      "Los asistentes de IA pueden leer nuestras páginas publicadas y nuestro catálogo de viajes a través de un servidor de solo lectura en https://kemet-travel.com/mcp. No requiere inicio de sesión y no instala cookies. Lo que un asistente le envía (palabras de búsqueda, el identificador de un viaje, un idioma) no se almacena. Solo conservamos un recuento diario anónimo de qué herramienta se utilizó, sin dirección IP y sin detalles de la solicitud.",
      "El servidor no puede reservar ni enviar nada. Si usted pide a un asistente que contacte con nosotros, este le da un enlace, y un mensaje solo nos llega cuando usted lo abre y lo envía por su cuenta. Lo que usted escribe en el propio asistente se rige por la política de privacidad de ese asistente."
     ]
    },
    {
     "heading": "Seguridad",
     "body": [
      "El sitio se sirve mediante HTTPS cifrado y adoptamos medidas técnicas y organizativas razonables para proteger los datos que usted nos envía. Ninguna transmisión por internet puede garantizarse como totalmente segura, pero trabajamos para mantener sus datos a salvo."
     ]
    },
    {
     "heading": "Cambios en esta política",
     "body": [
      "Podemos actualizar esta política de vez en cuando. La fecha que figura al principio indica cuándo se revisó por última vez; la versión vigente siempre está en esta página."
     ]
    },
    {
     "heading": "Contacto",
     "body": [
      "¿Tiene preguntas sobre su privacidad o esta política? Escriba a info@kemet-travel.com y le atenderemos con mucho gusto."
     ]
    }
   ]
  },
  "terms": {
   "localeSlug": "condiciones-de-uso",
   "metaTitle": "Condiciones de uso | Kemet",
   "metaDescription": "Las condiciones que rigen el uso del sitio web de Kemet, las consultas y los presupuestos. Léalas junto con nuestras condiciones de reserva y cancelación.",
   "standfirst": "Las condiciones de nuestro sitio web, de las consultas y de los presupuestos, redactadas con claridad y para leerse junto con nuestras condiciones de reserva y cancelación.",
   "title": "Condiciones de uso",
   "intro": "Estas condiciones rigen el uso que usted haga del sitio web de Kemet y establecen las bases sobre las que facilitamos información y presupuestos. Le rogamos que las lea junto con nuestras condiciones de reserva y cancelación, que regulan el depósito, el pago y la cancelación de un viaje confirmado.",
   "lastUpdated": "noviembre de 2026",
   "sections": [
    {
     "heading": "Sobre estas condiciones",
     "body": [
      "Al utilizar este sitio web usted acepta estas condiciones. Si no está de acuerdo con ellas, le rogamos que no utilice el sitio. Se rigen por las leyes de la República Árabe de Egipto, y cualquier controversia relacionada con este sitio web quedará sometida a la jurisdicción de los tribunales egipcios."
     ]
    },
    {
     "heading": "Quiénes somos",
     "body": [
      "Kemet diseña y organiza viajes privados y a medida por Egipto, con sede en El Cairo. Su egiptólogo titulado y su conductor forman parte del equipo propio de Kemet, y los hoteles de un viaje de Kemet se reservan con contratos propios de Kemet con ellos. Puede contactar con nosotros en info@kemet-travel.com."
     ]
    },
    {
     "heading": "Consultas, presupuestos y precios",
     "body": [
      "Una consulta o un presupuesto que le enviemos es una propuesta, no una reserva confirmada. Los precios se muestran por persona y en euros, y dependen de las fechas, la disponibilidad, el tamaño del grupo y los componentes de su itinerario.",
      "Los precios y la disponibilidad pueden cambiar hasta que una reserva se confirme por escrito y se reciba un depósito. Siempre confirmamos con usted el precio final antes de que se comprometa."
     ]
    },
    {
     "heading": "Reservas, pago y cancelación",
     "body": [
      "Cuando usted confirma un viaje, se aplican el depósito, el saldo y las condiciones de cancelación que figuran en nuestra página de reserva y cancelación. Le rogamos que lea esa página antes de confirmar."
     ]
    },
    {
     "heading": "Exactitud del contenido del sitio web",
     "body": [
      "Nos esforzamos por mantener la información de este sitio exacta y actualizada, pero datos como los horarios de apertura, el acceso a los sitios, los precios y las condiciones de viaje pueden cambiar. El contenido se ofrece como orientación general y no forma parte de ningún contrato hasta que se confirme en su itinerario."
     ]
    },
    {
     "heading": "Propiedad intelectual",
     "body": [
      "Los textos, el diseño, los logotipos y las imágenes de este sitio web pertenecen a Kemet o se utilizan con permiso, y están protegidos por derechos de autor. No puede copiarlos, reproducirlos ni reutilizarlos con fines comerciales sin nuestro consentimiento por escrito."
     ]
    },
    {
     "heading": "Pasaportes, visados y seguros",
     "body": [
      "Usted es responsable de disponer de un pasaporte válido y del visado correcto para Egipto, y de cumplir los requisitos sanitarios o de entrada que correspondan. Podemos asesorarle, pero los requisitos los fijan las autoridades y, en última instancia, son responsabilidad suya.",
      "Recomendamos encarecidamente contratar un seguro de viaje integral que cubra la asistencia médica, la cancelación y la repatriación de cada viajero."
     ]
    },
    {
     "heading": "Quién presta su viaje",
     "body": [
      "Su egiptólogo y su conductor forman parte del equipo propio de Kemet, y sus hoteles se reservan con contratos propios de Kemet con ellos, de modo que las personas y los lugares de su itinerario son de los que respondemos directamente.",
      "Algunas partes de un viaje las prestan las empresas que las operan: un crucero regular por el Nilo, los vuelos nacionales y los trenes. Prestan esos servicios bajo sus propias condiciones de transporte, y sus horarios pueden cambiar en ocasiones por motivos ajenos a nuestro control. Cuando eso ocurre, reorganizamos el resto del viaje en consecuencia y se lo comunicamos de inmediato."
     ]
    },
    {
     "heading": "Limitación de responsabilidad",
     "body": [
      "En la medida en que la ley lo permita, Kemet no es responsable de los daños indirectos o consecuenciales derivados del uso de este sitio web, ni de los hechos que escapen a nuestro control razonable. Nada de lo dispuesto en estas condiciones limita ninguna responsabilidad que no pueda limitarse legalmente."
     ]
    },
    {
     "heading": "Contacto",
     "body": [
      "¿Tiene preguntas sobre estas condiciones? Escriba a info@kemet-travel.com."
     ]
    }
   ]
  },
  "booking": {
   "localeSlug": "reserva-pago-y-cancelacion",
   "metaTitle": "Reserva, pago y cancelación | Kemet",
   "metaDescription": "Cómo funciona la reserva de un viaje privado de Kemet: pasos, depósito y pago, medios de pago aceptados y política de cancelación.",
   "title": "Reserva, pago y cancelación",
   "standfirst": "Todo lo que necesita saber antes de confirmar: cómo funciona la reserva, cuándo vencen los pagos y nuestras condiciones de cancelación. Con transparencia y sin costes ocultos.",
   "stepsHeading": "Cómo funciona la reserva",
   "steps": [
    {
     "heading": "Consulte, gratis y sin compromiso",
     "body": "Envíenos sus fechas, sus intereses y el tamaño de su grupo. Le respondemos en un plazo de dos horas con un itinerario día a día y un precio claro. En esta fase no hay ningún coste ni compromiso."
    },
    {
     "heading": "Reciba y afine su propuesta",
     "body": "Diseñamos un itinerario privado con un presupuesto totalmente detallado —qué está incluido y qué no, con precios por persona en euros—. Lo revisamos con usted hasta que sea exactamente lo que desea."
    },
    {
     "heading": "Confirme con un depósito",
     "body": "Cuando esté conforme, un depósito confirma su viaje y nos permite empezar a asegurar hoteles, guías, cruceros y permisos a su nombre."
    },
    {
     "heading": "Abone el saldo antes de viajar",
     "body": "El saldo restante vence antes de la salida. Una vez abonado, le enviamos su documentación final, el programa día a día y una persona de contacto con nombre."
    }
   ],
   "paymentHeading": "Depósito y saldo",
   "depositLabel": "Depósito",
   "deposit": {
    "label": "25 % del coste total del viaje",
    "note": "Pagadero para confirmar su reserva. Se descuenta de su saldo final; no es un cargo adicional."
   },
   "balanceLabel": "Saldo",
   "balance": {
    "label": "Vence 30 días antes de la salida",
    "note": "En las reservas realizadas con menos de 30 días de antelación a la salida, el importe total es pagadero en el momento de la confirmación."
   },
   "methodsLabel": "Medios de pago",
   "paymentMethods": [
    "Transferencia bancaria",
    "Principales tarjetas de crédito y débito",
    "PayPal"
   ],
   "cancelHeading": "Cancelación por su parte",
   "cancelText": "Si necesita cancelar, se aplican los siguientes cargos según la antelación con la que nos lo comunique respecto a la salida. Los cargos reflejan los compromisos que asumimos con hoteles, guías y operadores en su nombre.",
   "cancellationTiers": [
    {
     "window": "45 o más días antes de la salida",
     "charge": "Solo el depósito"
    },
    {
     "window": "De 30 a 44 días antes de la salida",
     "charge": "50 % del coste total del viaje"
    },
    {
     "window": "De 15 a 29 días antes de la salida",
     "charge": "75 % del coste total del viaje"
    },
    {
     "window": "Menos de 15 días antes de la salida",
     "charge": "100 % del coste total del viaje"
    }
   ],
   "policiesHeading": "Cambios, seguro e imprevistos",
   "policies": [
    {
     "heading": "Cambios en su reserva",
     "body": "Atendemos las modificaciones siempre que es posible. Algunos cambios —en particular los de vuelos, cruceros u hoteles de temporada alta— pueden conllevar cargos de los proveedores, que siempre confirmamos con usted antes de proceder."
    },
    {
     "heading": "Seguro de viaje",
     "body": "Se recomienda encarecidamente un seguro de viaje integral que cubra la asistencia médica, la cancelación y la repatriación de cada viajero, y que debe contratarse en cuanto se confirme su reserva."
    },
    {
     "heading": "Si tenemos que modificar o cancelar",
     "body": "Si circunstancias ajenas a nuestro control exigen un cambio, siempre le ofreceremos la alternativa más próxima posible o un reembolso justo de los importes que aún no se hayan comprometido con proveedores en su nombre."
    },
    {
     "heading": "Circunstancias fuera de control (fuerza mayor)",
     "body": "Ninguna de las partes responde de los hechos ajenos a su control razonable, como condiciones meteorológicas extremas, disturbios civiles o restricciones de viaje. En tales casos, trabajamos con usted para reprogramar el viaje o recuperar el mayor valor posible."
    }
   ]
  },
  "labels": {
   "lastUpdatedLabel": "Última actualización",
   "englishPrevails": "Esta es una traducción. Si difiere de la versión en inglés, prevalece la versión en inglés.",
   "ctaHeading": "¿Dudas antes de reservar?",
   "ctaText": "¿No tiene claro un término o una fecha? Escríbanos y se lo explicaremos antes de que decida. Respondemos en un plazo de dos horas.",
   "whatsapp": "Buenos días Kemet — tengo una pregunta sobre sus condiciones de reserva.",
   "emailSubject": "Kemet — una pregunta sobre las condiciones de reserva",
   "moreLabel": "Lea también",
   "moreText": "Los otros dos documentos que se aplican a una consulta y a una reserva."
  }
 },
 "pt": {
  "privacy": {
   "localeSlug": "politica-de-privacidade",
   "metaTitle": "Política de Privacidade | Kemet",
   "metaDescription": "Como a Kemet coleta, usa e protege os dados pessoais que vocês compartilham ao nos contatar. Coletamos o mínimo possível e nunca vendemos.",
   "standfirst": "O que coletamos, como usamos e os direitos que vocês têm sobre os seus dados. Coletamos o mínimo possível — e nunca vendemos.",
   "title": "Política de Privacidade",
   "intro": "Esta política explica quais dados pessoais a Kemet coleta quando vocês nos contatam ou usam este site, como os utilizamos e os direitos que vocês têm sobre eles. Coletamos o mínimo possível e nunca vendemos esses dados.",
   "lastUpdated": "novembro de 2026",
   "sections": [
    {
     "heading": "Quem somos",
     "body": [
      "A Kemet é uma empresa privada de desenho de viagens que organiza viagens sob medida pelo Egito e é a “controladora” dos dados para os fins desta política. Temos sede no Cairo, Egito.",
      "Vocês podem falar conosco sobre qualquer assunto desta política — inclusive qualquer pedido de acesso, correção ou exclusão dos seus dados — por e-mail, em info@kemet-travel.com."
     ]
    },
    {
     "heading": "O que coletamos",
     "body": [
      "Quando vocês nos enviam uma mensagem pelo formulário de contato, coletamos os dados que escolherem informar: nome, endereço de e-mail e — se os preencherem — número de telefone, datas previstas da viagem, tamanho do grupo, ritmo e prioridades que escolherem e o conteúdo da mensagem.",
      "Como quase todos os sites, o nosso servidor também registra, em seus logs, informações técnicas padrão (como endereço IP, tipo de navegador e páginas solicitadas). Não usamos essas informações para identificar vocês pessoalmente.",
      "Se vocês entrarem na nossa lista — pelo convite neste site ou pelo desenhador de viagens — primeiro enviamos um e-mail pedindo que confirmem, e nada mais é enviado até que o façam. Guardamos o seu endereço de e-mail, o seu nome, se o informarem, se se inscreveram pelo convite ou pelo desenhador de viagens, o idioma da página e um registro do consentimento: quando foi dado e quando foi confirmado, o texto com o qual concordaram e o endereço IP de onde partiu cada um. Vocês podem sair da lista a qualquer momento pelo link de cancelamento da inscrição nos nossos e-mails, ou escrevendo para nós.",
      "Não temos contas de usuário e não recebemos pagamentos neste site; por isso nunca coletamos aqui senhas nem dados de cartão."
     ]
    },
    {
     "heading": "Como usamos os seus dados",
     "body": [
      "Usamos os dados da sua consulta exclusivamente para responder a vocês, para entender o que procuram e — se seguirem em frente — para desenhar e organizar a sua viagem. Podemos entrar em contato por e-mail, telefone ou WhatsApp, usando os dados que vocês informarem.",
      "Se vocês não viajarem conosco de imediato, podemos escrever-lhes novamente sobre a viagem que consultaram: no máximo três vezes no ano seguinte à consulta. Digam-nos a qualquer momento e não escreveremos mais.",
      "A nossa base legal é o seu consentimento, as providências necessárias para celebrar e executar um serviço de viagem a pedido de vocês e, no caso dessas mensagens de acompanhamento, o nosso interesse legítimo em responder à pergunta que vocês nos trouxeram. Não compartilhamos os seus dados com anunciantes e não os usamos para decisões automatizadas."
     ]
    },
    {
     "heading": "Cookies e análise de uso",
     "body": [
      "Este site não usa cookies para publicidade ou rastreamento e não carrega scripts de análise ou de publicidade de terceiros. Ele não cria um perfil de marketing sobre vocês.",
      "Medimos a utilização do site com a nossa própria ferramenta de estatísticas simples, que funciona apenas no nosso servidor. Para cada página vista, regista a página, o site ou motor de busca que levou até ela, a eventual etiqueta de campanha no link por onde chegou, o tipo de dispositivo (telemóvel, tablet ou computador, deduzido da largura do ecrã) e a definição de idioma do seu navegador. Regista também ações na página: tocar no WhatsApp ou no e-mail, a viagem que abriu, as pesquisas neste site (incluindo as palavras pesquisadas), até onde leu uma página e quanto tempo lá passou. As visitas são contadas com um código formado a partir da sua ligação e do seu navegador, juntamente com um valor secreto que muda todos os dias, pelo que um visitante não pode ser seguido de um dia para o outro e o código não pode ser convertido de volta num endereço IP. O seu endereço IP em si não é guardado.",
      "Se o seu navegador enviar um sinal Do Not Track ou Global Privacy Control, nada disso é registrado. Esses registros de análise são excluídos automaticamente após 13 meses.",
      "Quando vocês nos enviam uma consulta, anotamos como chegaram ao site naquele dia — por exemplo, por um mecanismo de busca ou por um assistente de IA — e quais páginas leram, para podermos responder sobre a viagem que estavam vendo. Essa informação é guardada junto com a sua consulta.",
      "O site também memoriza no seu navegador algumas escolhas de exibição, como o fato de vocês terem fechado o banner sazonal ou o convite para a nossa lista. Essas informações ficam no seu dispositivo e nunca são enviadas a nós."
     ]
    },
    {
     "heading": "Com quem compartilhamos",
     "body": [
      "Compartilhamos os seus dados apenas quando é necessário para responder a vocês ou para organizar uma viagem que nos pediram para planejar — por exemplo, com os hotéis, o navio de cruzeiro ou a companhia aérea reservados para o seu roteiro específico. O seu guia e o seu motorista fazem parte da equipe da própria Kemet.",
      "O nosso site e o nosso e-mail são hospedados pelo nosso provedor de hospedagem, que trata os dados em nosso nome sob os seus próprios termos de segurança. Nunca vendemos, alugamos nem trocamos os seus dados pessoais com ninguém."
     ]
    },
    {
     "heading": "Por quanto tempo os guardamos",
     "body": [
      "Guardamos uma consulta por três anos a contar do dia em que foi enviada e depois a excluímos. Quando há uma reserva, alguns registros podem ser mantidos por mais tempo para cumprir obrigações contábeis ou legais.",
      "Se vocês entrarem na nossa lista, guardamos os seus dados até saírem dela. Uma inscrição que nunca seja confirmada pelo e-mail que enviamos é excluída após 30 dias. Se vocês saírem da lista, guardamos um registro do seu endereço e da data da saída, para que não sejam acrescentados de novo por engano.",
      "Vocês podem pedir a exclusão dos seus dados a qualquer momento (veja “Os seus direitos”)."
     ]
    },
    {
     "heading": "Os seus direitos",
     "body": [
      "Se vocês estiverem na UE/EEE, no Reino Unido ou em jurisdição comparável, têm o direito de acessar os dados pessoais que mantemos sobre vocês, de corrigi-los ou excluí-los, de se opor ao uso que fazemos deles ou de restringi-lo, e de receber uma cópia em formato portável.",
      "Para exercer qualquer um desses direitos, escrevam para info@kemet-travel.com e responderemos em prazo razoável. Vocês também têm o direito de apresentar reclamação à autoridade de proteção de dados do seu país."
     ]
    },
    {
     "heading": "Assistentes e o servidor MCP",
     "body": [
      "Assistentes de IA podem ler as nossas páginas publicadas e o nosso catálogo de viagens por meio de um servidor somente de leitura em https://kemet-travel.com/mcp. Ele não tem login e não define cookies. O que um assistente lhe envia (palavras de busca, o identificador de uma viagem, um idioma) não é armazenado. Guardamos apenas uma contagem diária anônima de qual ferramenta foi usada, sem endereço IP e sem detalhes da solicitação.",
      "O servidor não pode fazer reservas nem enviar nada. Se vocês pedirem a um assistente que entre em contato conosco, ele fornece um link, e uma mensagem só chega até nós quando vocês mesmos a abrem e a enviam. O que vocês digitam no próprio assistente é tratado conforme a política de privacidade desse assistente."
     ]
    },
    {
     "heading": "Segurança",
     "body": [
      "O site é servido por HTTPS criptografado, e adotamos medidas técnicas e organizacionais razoáveis para proteger os dados que vocês nos enviam. Nenhuma transmissão pela internet pode ser garantida como totalmente segura, mas trabalhamos para manter os seus dados protegidos."
     ]
    },
    {
     "heading": "Alterações nesta política",
     "body": [
      "Podemos atualizar esta política de tempos em tempos. A data no início indica quando foi revisada pela última vez; a versão atual está sempre nesta página."
     ]
    },
    {
     "heading": "Fale conosco",
     "body": [
      "Dúvidas sobre a sua privacidade ou sobre esta política? Escrevam para info@kemet-travel.com e teremos prazer em ajudar."
     ]
    }
   ]
  },
  "terms": {
   "localeSlug": "termos-de-uso",
   "metaTitle": "Termos de Uso | Kemet",
   "metaDescription": "Os termos que regem o uso do site da Kemet, as consultas e os orçamentos. Leiam junto com os termos de Reserva e Cancelamento das viagens confirmadas.",
   "standfirst": "Os termos por trás do nosso site, das consultas e dos orçamentos — escritos de forma clara e para serem lidos junto com os nossos termos de Reserva e Cancelamento.",
   "title": "Termos de Uso",
   "intro": "Estes termos regem o uso do site da Kemet e estabelecem as bases sobre as quais fornecemos informações e orçamentos. Leiam-nos junto com os nossos termos de Reserva e Cancelamento, que tratam de sinal, pagamento e cancelamento de uma viagem confirmada.",
   "lastUpdated": "novembro de 2026",
   "sections": [
    {
     "heading": "Sobre estes termos",
     "body": [
      "Ao usar este site, vocês concordam com estes termos. Se não concordarem, por favor não usem o site. Estes termos são regidos pelas leis da República Árabe do Egito, e qualquer disputa relativa a este site ficará sujeita à jurisdição dos tribunais egípcios."
     ]
    },
    {
     "heading": "Quem somos",
     "body": [
      "A Kemet desenha e organiza viagens privadas e sob medida pelo Egito, operando a partir do Cairo. O seu egiptólogo credenciado e o seu motorista fazem parte da equipe da própria Kemet, e os hotéis de uma viagem da Kemet são reservados com base nos contratos da própria Kemet com eles. Vocês podem falar conosco em info@kemet-travel.com."
     ]
    },
    {
     "heading": "Consultas, orçamentos e preços",
     "body": [
      "Uma consulta ou um orçamento que lhes enviamos é uma proposta, não uma reserva confirmada. Os preços são apresentados por pessoa, em euros, e dependem das datas, da disponibilidade, do tamanho do grupo e dos componentes do seu roteiro.",
      "Os preços e a disponibilidade podem mudar até que uma reserva seja confirmada por escrito e o sinal seja recebido. Sempre confirmamos o preço final com vocês antes de vocês se comprometerem."
     ]
    },
    {
     "heading": "Reservas, pagamento e cancelamento",
     "body": [
      "Quando vocês confirmam uma viagem, aplicam-se o sinal, o saldo e as condições de cancelamento descritos na nossa página de Reserva e Cancelamento. Leiam essa página antes de confirmar."
     ]
    },
    {
     "heading": "Exatidão do conteúdo do site",
     "body": [
      "Nos esforçamos para manter as informações deste site corretas e atualizadas, mas detalhes como horários de funcionamento, acesso aos locais, preços e condições de viagem podem mudar. O conteúdo é fornecido como orientação geral e não faz parte de nenhum contrato até ser confirmado no seu roteiro."
     ]
    },
    {
     "heading": "Propriedade intelectual",
     "body": [
      "Os textos, o design, os logotipos e as imagens deste site pertencem à Kemet ou são usados com autorização, e são protegidos por direitos autorais. Vocês não podem copiá-los, reproduzi-los nem reutilizá-los para fins comerciais sem o nosso consentimento por escrito."
     ]
    },
    {
     "heading": "Passaportes, vistos e seguro",
     "body": [
      "Cabe a vocês ter passaporte válido e o visto correto para o Egito, e cumprir quaisquer exigências sanitárias ou de entrada. Podemos orientar, mas as exigências são definidas pelas autoridades e, em última instância, são de responsabilidade de vocês.",
      "Recomendamos fortemente um seguro-viagem abrangente, que cubra assistência médica, cancelamento e repatriação, para cada viajante."
     ]
    },
    {
     "heading": "Quem executa a sua viagem",
     "body": [
      "O seu egiptólogo e o seu motorista fazem parte da equipe da própria Kemet, e os seus hotéis são reservados com base nos contratos da própria Kemet com eles; assim, as pessoas e os lugares do seu roteiro são aqueles pelos quais respondemos diretamente.",
      "Algumas partes de uma viagem são executadas pelas empresas que as operam: um navio de cruzeiro regular pelo Nilo, voos domésticos e trens. Elas prestam esses serviços sob as suas próprias condições de transporte, e os seus horários podem eventualmente mudar por motivos alheios ao nosso controle. Quando isso acontece, reorganizamos o restante da viagem em função da mudança e avisamos vocês imediatamente."
     ]
    },
    {
     "heading": "Limitação de responsabilidade",
     "body": [
      "Na medida permitida por lei, a Kemet não é responsável por perdas indiretas ou consequenciais decorrentes do uso deste site, nem por eventos fora do nosso controle razoável. Nada nestes termos limita qualquer responsabilidade que não possa ser legalmente limitada."
     ]
    },
    {
     "heading": "Fale conosco",
     "body": [
      "Dúvidas sobre estes termos? Escrevam para info@kemet-travel.com."
     ]
    }
   ]
  },
  "booking": {
   "localeSlug": "reserva-pagamento-e-cancelamento",
   "metaTitle": "Reserva, Pagamento e Cancelamento | Kemet",
   "metaDescription": "Como funciona reservar uma viagem privada da Kemet: etapas, sinal e saldo, formas de pagamento aceitas e política de cancelamento.",
   "title": "Reserva, Pagamento e Cancelamento",
   "standfirst": "Tudo o que vocês precisam saber antes de confirmar — como funciona a reserva, quando os pagamentos vencem e os nossos termos de cancelamento. Com transparência e sem custos ocultos.",
   "stepsHeading": "Como funciona a reserva",
   "steps": [
    {
     "heading": "Consulta — gratuita e sem compromisso",
     "body": "Enviem-nos as suas datas, os seus interesses e o tamanho do grupo. Respondemos em até duas horas, com um roteiro dia a dia e um preço claro. Nesta etapa não há cobrança nem compromisso."
    },
    {
     "heading": "Recebam e ajustem a sua proposta",
     "body": "Desenhamos um roteiro privado com um orçamento totalmente detalhado — o que está incluído e o que não está, com preço por pessoa em euros. Ajustamos o roteiro com vocês até que fique exatamente certo."
    },
    {
     "heading": "Confirmem com um sinal",
     "body": "Quando estiverem satisfeitos, um sinal confirma a sua viagem e nos permite começar a garantir, em nome de vocês, hotéis, guias, cruzeiros e autorizações."
    },
    {
     "heading": "Quitem o saldo antes de viajar",
     "body": "O saldo restante vence antes da partida. Depois de quitado, emitimos os documentos finais, o programa dia a dia e um contato nomeado."
    }
   ],
   "paymentHeading": "Sinal e saldo",
   "depositLabel": "Sinal",
   "deposit": {
    "label": "25% do custo total da viagem",
    "note": "Pago para confirmar a sua reserva. É abatido do saldo final, não é uma cobrança adicional."
   },
   "balanceLabel": "Saldo",
   "balance": {
    "label": "Vence 30 dias antes da partida",
    "note": "Para reservas feitas a menos de 30 dias da partida, o valor total deve ser pago no momento da confirmação."
   },
   "methodsLabel": "Formas de pagamento",
   "paymentMethods": [
    "Transferência bancária",
    "Principais cartões de crédito e débito",
    "PayPal"
   ],
   "cancelHeading": "Cancelamento por vocês",
   "cancelText": "Se precisarem cancelar, aplicam-se as cobranças abaixo, conforme a antecedência com que nos avisarem em relação à partida. As cobranças refletem compromissos que assumimos com hotéis, guias e operadores em nome de vocês.",
   "cancellationTiers": [
    {
     "window": "45 dias ou mais antes da partida",
     "charge": "Apenas o sinal"
    },
    {
     "window": "30–44 dias antes da partida",
     "charge": "50% do custo total da viagem"
    },
    {
     "window": "15–29 dias antes da partida",
     "charge": "75% do custo total da viagem"
    },
    {
     "window": "Menos de 15 dias antes da partida",
     "charge": "100% do custo total da viagem"
    }
   ],
   "policiesHeading": "Alterações, seguro e imprevistos",
   "policies": [
    {
     "heading": "Alterações na sua reserva",
     "body": "Atendemos a alterações sempre que possível. Algumas mudanças — em especial em voos, cruzeiros ou hotéis de alta temporada — podem gerar cobranças dos fornecedores, que sempre confirmamos com vocês antes de prosseguir."
    },
    {
     "heading": "Seguro-viagem",
     "body": "Um seguro-viagem abrangente, que cubra assistência médica, cancelamento e repatriação, é fortemente recomendado a todos os viajantes e deve ser contratado assim que a sua reserva for confirmada."
    },
    {
     "heading": "Se tivermos de alterar ou cancelar",
     "body": "Se circunstâncias alheias ao nosso controle exigirem uma alteração, sempre ofereceremos a alternativa mais próxima possível ou um reembolso justo dos valores que ainda não tenham sido comprometidos com fornecedores em nome de vocês."
    },
    {
     "heading": "Circunstâncias fora de controle (força maior)",
     "body": "Nenhuma das partes é responsável por eventos fora do controle razoável — como clima extremo, distúrbios civis ou restrições de viagem. Nesses casos, trabalhamos com vocês para remarcar ou recuperar o máximo de valor possível."
    }
   ]
  },
  "labels": {
   "lastUpdatedLabel": "Última atualização",
   "englishPrevails": "Esta é uma tradução. Se houver diferença em relação à versão em inglês, prevalece a versão em inglês.",
   "ctaHeading": "Dúvidas antes de reservar?",
   "ctaText": "Não têm certeza sobre algum termo ou alguma data? Mandem-nos uma mensagem e explicaremos antes de vocês decidirem. Respondemos em até duas horas.",
   "whatsapp": "Olá Kemet — tenho uma dúvida sobre os termos de reserva de vocês.",
   "emailSubject": "Kemet — uma dúvida sobre os termos de reserva",
   "moreLabel": "Leiam também",
   "moreText": "Os outros dois documentos que se aplicam a uma consulta e a uma reserva."
  }
 },
 "ru": {
  "privacy": {
   "localeSlug": "politika-konfidencialnosti",
   "metaTitle": "Политика конфиденциальности | Kemet",
   "metaDescription": "Как Kemet собирает, использует и защищает личные данные, которые вы сообщаете при обращении к нам. Мы собираем минимум и никогда не продаём данные.",
   "standfirst": "Что мы собираем, как это используем и какие права вы имеете в отношении своих данных. Мы собираем минимум — и никогда не продаём данные.",
   "title": "Политика конфиденциальности",
   "intro": "В этой политике объясняется, какие персональные данные Kemet собирает, когда вы обращаетесь к нам или пользуетесь этим сайтом, как мы их используем и какие права вы имеете в отношении этих данных. Мы собираем минимум и никогда не продаём данные.",
   "lastUpdated": "Ноябрь 2026",
   "sections": [
    {
     "heading": "Кто мы",
     "body": [
      "Kemet — частная компания, разрабатывающая индивидуальные путешествия по Египту, и является «оператором персональных данных» в значении настоящей политики. Мы находимся в Каире, Египет.",
      "По любому вопросу, связанному с этой политикой, — в том числе с просьбой предоставить доступ к вашим данным, исправить или удалить их, — вы можете написать нам по электронной почте: info@kemet-travel.com."
     ]
    },
    {
     "heading": "Что мы собираем",
     "body": [
      "Когда вы отправляете нам сообщение через контактную форму, мы собираем те сведения, которые вы решили указать: ваше имя, адрес электронной почты и — если вы их вводите — номер телефона, предполагаемые даты поездки, размер вашей группы, выбранные вами темп и приоритеты и текст сообщения.",
      "Как почти все сайты, наш сервер также записывает в журналах стандартные технические данные (например, IP-адрес, тип браузера и запрошенные страницы). Мы не используем их для того, чтобы установить вашу личность.",
      "Если вы подписываетесь на нашу рассылку — через приглашение на этом сайте или из конструктора поездок, — мы сначала отправляем письмо с просьбой подтвердить подписку, и до вашего подтверждения ничего больше не отправляется. Мы храним ваш адрес электронной почты, ваше имя, если вы его указали, подписались ли вы через приглашение или из конструктора поездок, язык страницы, и запись о вашем согласии: когда вы его дали и когда подтвердили, формулировку, с которой вы согласились, и IP-адрес, с которого это было сделано в каждом случае. Вы можете в любой момент отписаться по ссылке в наших письмах или написав нам.",
      "На этом сайте нет учётных записей пользователей, и мы не принимаем на нём платежи, поэтому мы никогда не собираем здесь ни пароли, ни данные банковских карт."
     ]
    },
    {
     "heading": "Как мы используем ваши данные",
     "body": [
      "Мы используем сведения из вашего запроса исключительно для того, чтобы ответить вам, понять, что вы ищете, и — если вы решите продолжить — составить и организовать ваше путешествие. Мы можем связываться с вами по электронной почте, телефону или в WhatsApp, используя указанные вами контактные данные.",
      "Если вы не отправитесь в путешествие с нами сразу, мы можем написать вам ещё раз о поездке, о которой вы спрашивали: не более трёх раз в течение года после вашего запроса. Скажите нам об этом в любой момент — и мы больше не напишем.",
      "Наши правовые основания — ваше согласие, действия, необходимые для заключения и исполнения договора о поездке по вашей просьбе, а для этих повторных сообщений — наш законный интерес в том, чтобы ответить на вопрос, с которым вы к нам обратились. Мы не передаём ваши данные рекламодателям и не используем их для автоматизированного принятия решений."
     ]
    },
    {
     "heading": "Файлы cookie и аналитика",
     "body": [
      "Этот сайт не использует файлы cookie для рекламы или отслеживания и не загружает сторонние скрипты аналитики или рекламы. Он не формирует ваш маркетинговый профиль.",
      "Мы измеряем, как используется сайт, с помощью собственной простой аналитики, которая работает только на нашем сервере. Для каждой просмотренной страницы она фиксирует саму страницу, сайт или поисковую систему, с которых вы пришли, метку кампании в ссылке, по которой вы перешли (если она есть), тип устройства (телефон, планшет или компьютер — определяется по ширине экрана) и языковую настройку вашего браузера. Фиксируются и действия на странице: нажатие на WhatsApp или электронную почту, какой маршрут вы открыли, поиск по сайту (включая искомые слова), до какого места вы дочитали страницу и сколько времени на ней провели. Посещения подсчитываются с помощью кода, который формируется из данных вашего соединения и браузера вместе с секретным значением, меняющимся каждый день, поэтому посетителя нельзя отследить от одного дня к другому, а код нельзя обратно превратить в IP-адрес. Сам ваш IP-адрес не сохраняется.",
      "Если ваш браузер отправляет сигнал Do Not Track или Global Privacy Control, ничего из перечисленного не записывается. Записи аналитики автоматически удаляются через 13 месяцев.",
      "Когда вы отправляете нам запрос, мы отмечаем, как вы попали на сайт в этот день — например, через поисковую систему или ИИ-ассистента, — и какие страницы вы читали, чтобы ответить вам о том путешествии, которое вы рассматривали. Эти сведения хранятся вместе с вашим запросом.",
      "Сайт также запоминает в вашем браузере несколько настроек отображения, например, что вы закрыли сезонный баннер или приглашение в нашу рассылку. Эти данные остаются на вашем устройстве и нам не передаются."
     ]
    },
    {
     "heading": "Кому мы передаём данные",
     "body": [
      "Мы передаём ваши данные только тогда, когда это необходимо, чтобы ответить вам или организовать поездку, которую вы попросили нас спланировать, — например, отелям, круизному теплоходу или авиакомпании, забронированным для вашего конкретного маршрута. Ваш гид и водитель — члены собственной команды Kemet.",
      "Наш сайт и почта размещены у нашего хостинг-провайдера, который обрабатывает данные от нашего имени на условиях безопасности, установленных им самим. Мы никогда не продаём, не сдаём в аренду и не обмениваем ваши персональные данные ни с кем."
     ]
    },
    {
     "heading": "Как долго мы храним данные",
     "body": [
      "Мы храним запрос три года со дня его отправки, после чего удаляем. Если бронирование состоялось, некоторые записи могут храниться дольше, чтобы выполнить требования бухгалтерского учёта или закона.",
      "Если вы подписываетесь на рассылку, мы храним ваши данные, пока вы не отпишетесь. Подписка, которую так и не подтвердили по отправленному нами письму, удаляется через 30 дней. Если вы отписываетесь, мы сохраняем запись о вашем адресе и дате отписки, чтобы вас по ошибке не добавили снова.",
      "Вы можете в любой момент попросить нас удалить ваши данные (см. раздел «Ваши права»)."
     ]
    },
    {
     "heading": "Ваши права",
     "body": [
      "Если вы находитесь в ЕС/ЕЭЗ, Великобритании или в сопоставимой юрисдикции, вы вправе получать доступ к хранящимся у нас персональным данным о вас, требовать их исправления или удаления, возражать против их использования или ограничивать его, а также получить их копию в переносимом формате.",
      "Чтобы воспользоваться любым из этих прав, напишите нам на info@kemet-travel.com, и мы ответим в разумный срок. Вы также вправе подать жалобу в местный орган по защите персональных данных."
     ]
    },
    {
     "heading": "Ассистенты и сервер MCP",
     "body": [
      "ИИ-ассистенты могут читать наши опубликованные страницы и каталог путешествий через сервер только для чтения по адресу https://kemet-travel.com/mcp. Вход в систему не требуется, файлы cookie не устанавливаются. То, что ассистент отправляет серверу (поисковые слова, идентификатор путешествия, язык), не сохраняется. Мы храним только анонимный ежедневный подсчёт того, какой инструмент использовался, без IP-адреса и без каких-либо подробностей запроса.",
      "Сервер не может ничего забронировать или отправить. Если вы просите ассистента связаться с нами, он выдаёт вам ссылку, и сообщение попадает к нам, только когда вы сами откроете её и отправите его. То, что вы вводите в самом ассистенте, обрабатывается в соответствии с политикой конфиденциальности этого ассистента."
     ]
    },
    {
     "heading": "Безопасность",
     "body": [
      "Сайт работает по защищённому протоколу HTTPS, и мы принимаем разумные технические и организационные меры для защиты информации, которую вы нам направляете. Ни одну передачу данных через интернет нельзя гарантировать как абсолютно безопасную, но мы стараемся обеспечить сохранность ваших данных."
     ]
    },
    {
     "heading": "Изменения в этой политике",
     "body": [
      "Время от времени мы можем обновлять эту политику. Дата вверху страницы показывает, когда она была пересмотрена в последний раз; действующая версия всегда находится на этой странице."
     ]
    },
    {
     "heading": "Свяжитесь с нами",
     "body": [
      "Есть вопросы о конфиденциальности или об этой политике? Напишите на info@kemet-travel.com — мы будем рады помочь."
     ]
    }
   ]
  },
  "terms": {
   "localeSlug": "usloviya-ispolzovaniya-sayta",
   "metaTitle": "Условия использования сайта | Kemet",
   "metaDescription": "Условия использования сайта Kemet, запросов и предложений. Читайте вместе с условиями бронирования и отмены для подтверждённых поездок.",
   "standfirst": "Условия, на которых работают наш сайт, запросы и предложения, — изложенные просто и читаемые вместе с условиями бронирования и отмены.",
   "title": "Условия использования",
   "intro": "Эти условия регулируют использование вами сайта Kemet и определяют, на каких основаниях мы предоставляем информацию и предложения. Просим читать их вместе с нашими условиями бронирования, оплаты и отмены, которые охватывают предоплату, оплату и отмену подтверждённой поездки.",
   "lastUpdated": "Ноябрь 2026",
   "sections": [
    {
     "heading": "Об этих условиях",
     "body": [
      "Пользуясь этим сайтом, вы соглашаетесь с настоящими условиями. Если вы с ними не согласны, пожалуйста, не пользуйтесь сайтом. К ним применяется право Арабской Республики Египет, и любой спор, связанный с этим сайтом, подлежит юрисдикции судов Египта."
     ]
    },
    {
     "heading": "Кто мы",
     "body": [
      "Kemet разрабатывает и организует индивидуальные путешествия по Египту, работая из Каира. Ваш лицензированный гид-египтолог и ваш водитель — члены собственной команды Kemet, а отели в путешествии с Kemet бронируются по собственным договорам Kemet с ними. Вы можете связаться с нами по адресу info@kemet-travel.com."
     ]
    },
    {
     "heading": "Запросы, предложения и цены",
     "body": [
      "Запрос или присланное нами предложение — это проект, а не подтверждённое бронирование. Цены указываются на человека в евро и зависят от дат, наличия мест, размера группы и составляющих вашего маршрута.",
      "Цены и наличие мест могут меняться, пока бронирование не подтверждено в письменной форме и не получена предоплата. Окончательную цену мы всегда подтверждаем с вами до того, как вы принимаете на себя обязательства."
     ]
    },
    {
     "heading": "Бронирование, оплата и отмена",
     "body": [
      "Когда вы подтверждаете поездку, действуют условия предоплаты, оплаты остатка и отмены, изложенные на нашей странице «Бронирование, оплата и отмена». Пожалуйста, прочитайте её до подтверждения."
     ]
    },
    {
     "heading": "Точность содержимого сайта",
     "body": [
      "Мы стараемся поддерживать информацию на этом сайте точной и актуальной, однако такие сведения, как часы работы, доступ к объектам, цены и условия поездок, могут меняться. Содержимое предоставляется для общего ознакомления и не входит ни в какой договор, пока не подтверждено в вашем маршруте."
     ]
    },
    {
     "heading": "Интеллектуальная собственность",
     "body": [
      "Тексты, оформление, логотипы и изображения на этом сайте принадлежат Kemet или используются с разрешения правообладателей и охраняются авторским правом. Без нашего письменного согласия вы не вправе копировать, воспроизводить или использовать их в коммерческих целях."
     ]
    },
    {
     "heading": "Паспорта, визы и страхование",
     "body": [
      "Вы несёте ответственность за наличие действительного паспорта и нужной визы в Египет, а также за выполнение любых требований, связанных со здоровьем и въездом. Мы можем проконсультировать, но требования устанавливаются государственными органами, и ответственность за их соблюдение в конечном счёте лежит на вас.",
      "Мы настоятельно рекомендуем для каждого путешественника полную туристическую страховку, покрывающую медицинскую помощь, отмену поездки и репатриацию."
     ]
    },
    {
     "heading": "Кто проводит ваше путешествие",
     "body": [
      "Ваш гид-египтолог и ваш водитель — члены собственной команды Kemet, а ваши отели бронируются по собственным договорам Kemet с ними, поэтому за людей и места в вашем маршруте мы отвечаем непосредственно.",
      "Некоторые части путешествия выполняют компании, которые ими управляют: рейсовый круизный теплоход по Нилу, внутренние авиарейсы и поезда. Они оказывают эти услуги на собственных условиях перевозки, и их расписание иногда может меняться по причинам, не зависящим от нас. В таком случае мы перестраиваем остальную часть путешествия с учётом этого изменения и сразу сообщаем вам."
     ]
    },
    {
     "heading": "Ограничение ответственности",
     "body": [
      "В пределах, допускаемых законом, Kemet не несёт ответственности за косвенные или последующие убытки, возникшие в связи с использованием этого сайта, а также за события, находящиеся вне нашего разумного контроля. Ничто в настоящих условиях не ограничивает ответственность, которую по закону ограничить нельзя."
     ]
    },
    {
     "heading": "Свяжитесь с нами",
     "body": [
      "Есть вопросы об этих условиях? Напишите на info@kemet-travel.com."
     ]
    }
   ]
  },
  "booking": {
   "localeSlug": "bronirovanie-oplata-otmena",
   "metaTitle": "Бронирование, оплата и отмена | Kemet",
   "metaDescription": "Как устроено бронирование частного путешествия с Kemet: этапы, предоплата и условия оплаты, способы оплаты и правила отмены.",
   "title": "Бронирование, оплата и отмена",
   "standfirst": "Всё, что нужно знать до подтверждения: как проходит бронирование, когда наступают сроки платежей и каковы условия отмены. Прозрачно и без скрытых расходов.",
   "stepsHeading": "Как проходит бронирование",
   "steps": [
    {
     "heading": "Запрос — бесплатно и без обязательств",
     "body": "Пришлите нам даты, интересы и количество участников. Мы отвечаем в течение двух часов с программой по дням и понятной ценой. На этом этапе нет ни платы, ни обязательств."
    },
    {
     "heading": "Получите и доработайте предложение",
     "body": "Мы составляем индивидуальный маршрут с подробной сметой — что включено и что не включено, цена на человека в евро. Мы дорабатываем его вместе с вами, пока он не станет именно таким, как нужно."
    },
    {
     "heading": "Подтвердите предоплатой",
     "body": "Когда вас всё устраивает, предоплата подтверждает ваше путешествие и позволяет нам начать бронировать отели, гидов, круизы и разрешения на ваше имя."
    },
    {
     "heading": "Оплатите остаток до поездки",
     "body": "Оставшаяся сумма подлежит оплате до отъезда. После оплаты мы выдаём вам итоговые документы, программу по дням и контактное лицо, указанное по имени."
    }
   ],
   "paymentHeading": "Предоплата и остаток",
   "depositLabel": "Предоплата",
   "deposit": {
    "label": "25% от общей стоимости поездки",
    "note": "Вносится для подтверждения бронирования. Засчитывается в окончательную сумму остатка и не является дополнительным платежом."
   },
   "balanceLabel": "Остаток",
   "balance": {
    "label": "Оплачивается за 30 дней до отъезда",
    "note": "При бронировании менее чем за 30 дней до отъезда вся сумма оплачивается в момент подтверждения."
   },
   "methodsLabel": "Способы оплаты",
   "paymentMethods": [
    "Банковский перевод",
    "Основные кредитные и дебетовые карты",
    "PayPal"
   ],
   "cancelHeading": "Отмена с вашей стороны",
   "cancelText": "Если вам нужно отменить поездку, применяются следующие удержания в зависимости от того, насколько заранее до отъезда вы нас уведомили. Удержания отражают обязательства, которые мы принимаем перед отелями, гидами и операторами от вашего имени.",
   "cancellationTiers": [
    {
     "window": "За 45 и более дней до отъезда",
     "charge": "Только предоплата"
    },
    {
     "window": "За 30–44 дня до отъезда",
     "charge": "50% от общей стоимости поездки"
    },
    {
     "window": "За 15–29 дней до отъезда",
     "charge": "75% от общей стоимости поездки"
    },
    {
     "window": "Менее чем за 15 дней до отъезда",
     "charge": "100% от общей стоимости поездки"
    }
   ],
   "policiesHeading": "Изменения, страхование и непредвиденные обстоятельства",
   "policies": [
    {
     "heading": "Изменения в вашем бронировании",
     "body": "Мы по возможности идём навстречу при внесении изменений. Некоторые изменения — особенно в авиаперелётах, круизах или отелях в высокий сезон — могут повлечь платежи поставщикам услуг, и мы всегда согласуем их с вами до того, как продолжить."
    },
    {
     "heading": "Туристическая страховка",
     "body": "Полная туристическая страховка, покрывающая медицинскую помощь, отмену поездки и репатриацию, настоятельно рекомендуется каждому путешественнику; оформить её следует сразу после подтверждения бронирования."
    },
    {
     "heading": "Если изменить или отменить поездку приходится нам",
     "body": "Если обстоятельства, не зависящие от нас, потребуют внести изменение, мы всегда предложим наиболее близкую альтернативу или справедливый возврат сумм, которые ещё не были переданы поставщикам услуг от вашего имени."
    },
    {
     "heading": "Обстоятельства непреодолимой силы (форс-мажор)",
     "body": "Ни одна из сторон не отвечает за события вне разумного контроля — такие как экстремальная погода, гражданские беспорядки или ограничения на поездки. В таких случаях мы вместе с вами переносим поездку или возвращаем как можно большую часть её стоимости."
    }
   ]
  },
  "labels": {
   "lastUpdatedLabel": "Последнее обновление",
   "englishPrevails": "Это перевод. В случае расхождений с английской версией применяется английская версия.",
   "ctaHeading": "Есть вопросы до бронирования?",
   "ctaText": "Не уверены в каком-то условии или дате? Напишите нам, и мы всё объясним до того, как вы примете решение. Мы отвечаем в течение двух часов.",
   "whatsapp": "Здравствуйте, Kemet! У меня вопрос об условиях бронирования.",
   "emailSubject": "Kemet — вопрос об условиях бронирования",
   "moreLabel": "Читайте также",
   "moreText": "Два других документа, которые относятся к запросу и бронированию."
  }
 },
 "id": {
  "privacy": {
   "localeSlug": "kebijakan-privasi",
   "metaTitle": "Kebijakan Privasi | Kemet",
   "metaDescription": "Cara Kemet mengumpulkan, memakai, dan melindungi data pribadi yang Anda berikan saat menghubungi kami. Seminimal mungkin, tidak pernah dijual.",
   "standfirst": "Apa yang kami kumpulkan, cara kami menggunakannya, dan hak Anda atas data Anda. Kami mengumpulkan seminimal mungkin — dan tidak pernah menjualnya.",
   "title": "Kebijakan Privasi",
   "intro": "Kebijakan ini menjelaskan data pribadi apa yang dikumpulkan Kemet saat Anda menghubungi kami atau menggunakan situs web ini, cara kami menggunakannya, serta hak Anda atas data tersebut. Kami mengumpulkan seminimal mungkin dan tidak pernah menjualnya.",
   "lastUpdated": "November 2026",
   "sections": [
    {
     "heading": "Siapa kami",
     "body": [
      "Kemet adalah perusahaan perancang perjalanan privat yang menyusun perjalanan sesuai pesanan di Mesir, dan merupakan “pengendali data” (data controller) untuk keperluan kebijakan ini. Kami berkedudukan di Kairo, Mesir.",
      "Anda dapat menghubungi kami mengenai hal apa pun dalam kebijakan ini — termasuk setiap permintaan untuk mengakses, mengoreksi, atau menghapus data Anda — melalui email di info@kemet-travel.com."
     ]
    },
    {
     "heading": "Apa yang kami kumpulkan",
     "body": [
      "Saat Anda mengirim pesan melalui formulir kontak, kami mengumpulkan keterangan yang Anda pilih untuk diberikan: nama, alamat email Anda, dan — jika Anda mengisinya — nomor telepon, rencana tanggal perjalanan, jumlah rombongan Anda, ritme dan prioritas yang Anda pilih, serta isi pesan Anda.",
      "Seperti hampir semua situs web, server kami juga mencatat informasi teknis standar (seperti alamat IP, jenis peramban, dan halaman yang diminta) dalam lognya. Kami tidak menggunakannya untuk mengidentifikasi Anda secara pribadi.",
      "Jika Anda bergabung dalam daftar kami — dari undangan di situs ini atau dari perancang perjalanan — kami lebih dulu mengirim email yang meminta Anda mengonfirmasi, dan tidak ada email lain yang dikirim sampai Anda melakukannya. Kami menyimpan alamat email Anda, nama Anda jika Anda memberikannya, apakah Anda mendaftar dari undangan atau dari perancang perjalanan, bahasa halaman, serta catatan persetujuan Anda: kapan persetujuan itu diberikan dan kapan dikonfirmasi, kalimat yang Anda setujui, dan alamat IP asal masing-masing. Anda dapat keluar dari daftar kapan saja melalui tautan berhenti berlangganan di email kami, atau dengan menulis kepada kami.",
      "Kami tidak menyediakan akun pengguna dan tidak menerima pembayaran di situs web ini, sehingga kami tidak pernah mengumpulkan kata sandi atau data kartu di sini."
     ]
    },
    {
     "heading": "Cara kami menggunakan data Anda",
     "body": [
      "Kami menggunakan keterangan dari pertanyaan Anda semata-mata untuk membalas Anda, memahami apa yang Anda cari, dan — jika Anda melanjutkan — merancang serta mengatur perjalanan Anda. Kami dapat menghubungi Anda melalui email, telepon, atau WhatsApp menggunakan keterangan yang Anda berikan.",
      "Jika Anda tidak langsung bepergian bersama kami, kami dapat menulis kepada Anda lagi tentang perjalanan yang Anda tanyakan: paling banyak tiga kali dalam setahun setelah pertanyaan Anda. Beri tahu kami kapan saja dan kami tidak akan menulis lagi.",
      "Dasar hukum kami adalah persetujuan Anda, langkah-langkah yang diperlukan untuk membuat dan melaksanakan pengaturan perjalanan atas permintaan Anda, dan, untuk pesan tindak lanjut tersebut, kepentingan sah kami dalam menjawab pertanyaan yang Anda sampaikan kepada kami. Kami tidak membagikan data Anda kepada pengiklan dan tidak menggunakannya untuk pengambilan keputusan otomatis."
     ]
    },
    {
     "heading": "Cookie dan analitik",
     "body": [
      "Situs web ini tidak menggunakan cookie untuk iklan atau pelacakan, dan tidak memuat skrip analitik atau iklan pihak ketiga apa pun. Situs ini tidak membuat profil pemasaran tentang Anda.",
      "Kami mengukur cara situs ini digunakan dengan analitik sederhana milik kami sendiri, yang hanya berjalan di server kami. Untuk setiap halaman yang dilihat, analitik ini mencatat halamannya, situs web atau mesin pencari yang mengarahkan ke sana, tanda kampanye pada tautan yang Anda gunakan untuk datang (jika ada), jenis perangkat (ponsel, tablet, atau komputer, ditentukan dari lebar layar), dan pengaturan bahasa peramban Anda. Analitik ini juga mencatat tindakan di halaman: mengetuk WhatsApp atau email, perjalanan mana yang Anda buka, pencarian di situs ini (termasuk kata yang dicari), seberapa jauh Anda membaca sebuah halaman, dan berapa lama Anda berada di sana. Kunjungan dihitung dengan kode yang dibentuk dari koneksi dan peramban Anda bersama nilai rahasia yang berganti setiap hari, sehingga seorang pengunjung tidak dapat diikuti dari satu hari ke hari berikutnya dan kode itu tidak dapat diubah kembali menjadi alamat IP. Alamat IP Anda sendiri tidak disimpan.",
      "Jika peramban Anda mengirim sinyal Do Not Track atau Global Privacy Control, tidak ada satu pun dari hal ini yang dicatat. Catatan analitik ini dihapus secara otomatis setelah 13 bulan.",
      "Saat Anda mengirim pertanyaan kepada kami, kami mencatat bagaimana Anda sampai ke situs pada hari itu — misalnya melalui mesin pencari atau asisten AI — dan halaman apa yang Anda baca, agar kami dapat membalas tentang perjalanan yang sedang Anda lihat. Catatan ini disimpan bersama pertanyaan Anda.",
      "Situs ini juga mengingat beberapa pilihan tampilan di peramban Anda, misalnya bahwa Anda telah menutup banner musiman atau undangan untuk bergabung dalam daftar kami. Pilihan ini tetap berada di perangkat Anda dan tidak pernah dikirim kepada kami."
     ]
    },
    {
     "heading": "Dengan siapa kami membagikannya",
     "body": [
      "Kami membagikan data Anda hanya bila diperlukan untuk menjawab Anda atau untuk mengatur perjalanan yang Anda minta kami rencanakan — misalnya kepada hotel, kapal pesiar, atau maskapai yang dipesan untuk itinerari spesifik Anda. Pemandu dan sopir Anda adalah tim Kemet sendiri.",
      "Situs web dan email kami di-hosting oleh penyedia hosting kami, yang memproses data atas nama kami berdasarkan ketentuan keamanannya sendiri. Kami tidak pernah menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada siapa pun."
     ]
    },
    {
     "heading": "Berapa lama kami menyimpannya",
     "body": [
      "Kami menyimpan pertanyaan selama tiga tahun sejak hari dikirimkan, lalu menghapusnya. Bila terjadi pemesanan, sebagian catatan dapat disimpan lebih lama untuk memenuhi kewajiban akuntansi atau hukum.",
      "Jika Anda bergabung dalam daftar kami, kami menyimpan data Anda sampai Anda keluar dari daftar. Pendaftaran yang tidak pernah dikonfirmasi lewat email yang kami kirim akan dihapus setelah 30 hari. Jika Anda keluar dari daftar, kami menyimpan catatan alamat Anda dan tanggal Anda keluar, agar Anda tidak ditambahkan kembali karena kekeliruan.",
      "Anda dapat meminta kami menghapus data Anda kapan saja (lihat “Hak Anda”)."
     ]
    },
    {
     "heading": "Hak Anda",
     "body": [
      "Jika Anda berada di UE/EEA, Inggris, atau yurisdiksi yang sebanding, Anda berhak mengakses data pribadi Anda yang kami simpan, meminta agar data itu dikoreksi atau dihapus, menolak atau membatasi penggunaannya oleh kami, serta menerima salinannya dalam format yang dapat dipindahkan.",
      "Untuk menggunakan hak-hak ini, kirim email kepada kami di info@kemet-travel.com dan kami akan menanggapi dalam waktu yang wajar. Anda juga berhak mengajukan pengaduan kepada otoritas perlindungan data di wilayah Anda."
     ]
    },
    {
     "heading": "Asisten dan server MCP",
     "body": [
      "Asisten AI dapat membaca halaman terbitan kami dan katalog perjalanan kami melalui server hanya-baca di https://kemet-travel.com/mcp. Server ini tidak memerlukan login dan tidak menetapkan cookie. Apa yang dikirim asisten kepadanya (kata pencarian, id perjalanan, bahasa) tidak disimpan. Kami hanya menyimpan hitungan harian anonim tentang alat mana yang digunakan, tanpa alamat IP dan tanpa rincian permintaan.",
      "Server ini tidak dapat memesan atau mengirim apa pun. Jika Anda meminta asisten untuk menghubungi kami, asisten akan memberi Anda tautan, dan pesan baru sampai kepada kami ketika Anda sendiri membukanya dan mengirimkannya. Apa yang Anda ketik di asisten itu sendiri ditangani berdasarkan kebijakan privasi asisten tersebut."
     ]
    },
    {
     "heading": "Keamanan",
     "body": [
      "Situs ini disajikan melalui HTTPS terenkripsi, dan kami menerapkan langkah-langkah teknis dan organisasi yang wajar untuk melindungi data yang Anda kirimkan kepada kami. Tidak ada transmisi melalui internet yang dapat dijamin sepenuhnya aman, tetapi kami berupaya menjaga keamanan data Anda."
     ]
    },
    {
     "heading": "Perubahan pada kebijakan ini",
     "body": [
      "Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Tanggal di bagian atas menunjukkan kapan kebijakan ini terakhir direvisi; versi terkini selalu tersedia di halaman ini."
     ]
    },
    {
     "heading": "Hubungi kami",
     "body": [
      "Ada pertanyaan tentang privasi Anda atau kebijakan ini? Kirim email ke info@kemet-travel.com dan kami dengan senang hati membantu."
     ]
    }
   ]
  },
  "terms": {
   "localeSlug": "ketentuan-penggunaan",
   "metaTitle": "Ketentuan Penggunaan | Kemet",
   "metaDescription": "Ketentuan penggunaan situs web Kemet, pertanyaan, dan penawaran harga. Dibaca bersama ketentuan Pemesanan dan Pembatalan untuk perjalanan terkonfirmasi.",
   "standfirst": "Ketentuan di balik situs web, pertanyaan, dan penawaran harga kami — ditulis dengan bahasa lugas, dan dibaca bersama ketentuan Pemesanan & Pembatalan kami.",
   "title": "Ketentuan Penggunaan",
   "intro": "Ketentuan ini mengatur penggunaan situs web Kemet oleh Anda dan menetapkan dasar bagi kami dalam memberikan informasi dan penawaran harga. Harap bacalah bersama ketentuan Pemesanan & Pembatalan kami, yang mengatur uang muka, pembayaran, dan pembatalan untuk perjalanan yang telah dikonfirmasi.",
   "lastUpdated": "November 2026",
   "sections": [
    {
     "heading": "Tentang ketentuan ini",
     "body": [
      "Dengan menggunakan situs web ini, Anda menyetujui ketentuan ini. Jika Anda tidak menyetujuinya, mohon jangan menggunakan situs ini. Ketentuan ini diatur oleh hukum Republik Arab Mesir, dan setiap sengketa yang berkaitan dengan situs web ini tunduk pada yurisdiksi pengadilan Mesir."
     ]
    },
    {
     "heading": "Siapa kami",
     "body": [
      "Kemet merancang dan mengatur perjalanan privat sesuai pesanan di Mesir, beroperasi dari Kairo. Pemandu Egyptologist berlisensi dan sopir Anda adalah anggota tim Kemet sendiri, dan hotel dalam perjalanan Kemet dipesan berdasarkan kontrak Kemet sendiri dengan hotel tersebut. Anda dapat menghubungi kami di info@kemet-travel.com."
     ]
    },
    {
     "heading": "Pertanyaan, penawaran harga, dan harga",
     "body": [
      "Pertanyaan atau penawaran harga yang kami kirimkan kepada Anda merupakan usulan, bukan pemesanan yang telah dikonfirmasi. Harga ditampilkan per orang dalam euro dan bergantung pada tanggal, ketersediaan, jumlah rombongan, serta komponen itinerari Anda.",
      "Harga dan ketersediaan dapat berubah sampai pemesanan dikonfirmasi secara tertulis dan uang muka diterima. Kami selalu mengonfirmasi harga akhir kepada Anda sebelum Anda mengikatkan diri."
     ]
    },
    {
     "heading": "Pemesanan, pembayaran, dan pembatalan",
     "body": [
      "Saat Anda mengonfirmasi perjalanan, ketentuan uang muka, pelunasan, dan pembatalan yang tercantum di halaman Pemesanan & Pembatalan kami berlaku. Mohon baca halaman itu sebelum mengonfirmasi."
     ]
    },
    {
     "heading": "Keakuratan isi situs web",
     "body": [
      "Kami berupaya menjaga informasi di situs ini tetap akurat dan terkini, tetapi hal-hal seperti jam buka, akses ke situs, harga, dan kondisi perjalanan dapat berubah. Isi situs disediakan sebagai panduan umum dan tidak menjadi bagian dari kontrak apa pun sampai dikonfirmasi dalam itinerari Anda."
     ]
    },
    {
     "heading": "Kekayaan intelektual",
     "body": [
      "Teks, desain, logo, dan gambar di situs web ini adalah milik Kemet atau digunakan dengan izin, dan dilindungi hak cipta. Anda tidak boleh menyalin, memperbanyak, atau menggunakan ulang untuk tujuan komersial tanpa persetujuan tertulis dari kami."
     ]
    },
    {
     "heading": "Paspor, visa, dan asuransi",
     "body": [
      "Anda bertanggung jawab untuk memiliki paspor yang berlaku dan visa yang tepat untuk Mesir, serta memenuhi persyaratan kesehatan atau masuk apa pun. Kami dapat memberi saran, tetapi persyaratan ditetapkan oleh pihak berwenang dan pada akhirnya menjadi tanggung jawab Anda.",
      "Kami sangat menganjurkan asuransi perjalanan yang komprehensif, yang mencakup perawatan medis, pembatalan, dan pemulangan, untuk setiap pelancong."
     ]
    },
    {
     "heading": "Siapa yang menjalankan perjalanan Anda",
     "body": [
      "Pemandu Egyptologist dan sopir Anda adalah tim Kemet sendiri, dan hotel Anda dipesan berdasarkan kontrak Kemet sendiri dengan hotel tersebut, sehingga orang-orang dan tempat-tempat dalam itinerari Anda adalah pihak yang kami pertanggungjawabkan secara langsung.",
      "Sebagian bagian perjalanan dijalankan oleh perusahaan yang mengoperasikannya: kapal pesiar Sungai Nil terjadwal, penerbangan domestik, dan kereta api. Mereka menyediakan layanan tersebut berdasarkan syarat pengangkutan mereka sendiri, dan jadwalnya sesekali dapat berubah karena hal-hal di luar kendali kami. Bila itu terjadi, kami menyusun ulang sisa perjalanan di sekitarnya dan segera memberi tahu Anda."
     ]
    },
    {
     "heading": "Pembatasan tanggung jawab",
     "body": [
      "Sejauh diizinkan oleh hukum, Kemet tidak bertanggung jawab atas kerugian tidak langsung atau kerugian lanjutan yang timbul dari penggunaan situs web ini, atau atas peristiwa di luar kendali kami yang wajar. Tidak ada ketentuan dalam ketentuan ini yang membatasi tanggung jawab yang menurut hukum tidak dapat dibatasi."
     ]
    },
    {
     "heading": "Hubungi kami",
     "body": [
      "Ada pertanyaan tentang ketentuan ini? Kirim email ke info@kemet-travel.com."
     ]
    }
   ]
  },
  "booking": {
   "localeSlug": "pemesanan-pembayaran-pembatalan",
   "metaTitle": "Pemesanan, Pembayaran & Pembatalan | Kemet",
   "metaDescription": "Cara memesan perjalanan privat Kemet — langkah-langkahnya, ketentuan uang muka dan pembayaran, metode pembayaran yang diterima, dan kebijakan pembatalan.",
   "title": "Pemesanan, Pembayaran & Pembatalan",
   "standfirst": "Semua yang perlu Anda ketahui sebelum mengonfirmasi — cara pemesanan, kapan pembayaran jatuh tempo, dan ketentuan pembatalan kami. Transparan, tanpa biaya tersembunyi.",
   "stepsHeading": "Cara pemesanan",
   "steps": [
    {
     "heading": "Ajukan pertanyaan — gratis dan tanpa kewajiban",
     "body": "Kirimkan kepada kami tanggal, minat, dan jumlah rombongan Anda. Kami membalas dalam dua jam dengan rencana perjalanan hari demi hari dan harga yang jelas. Pada tahap ini tidak ada biaya dan tidak ada komitmen."
    },
    {
     "heading": "Terima dan sempurnakan usulan Anda",
     "body": "Kami merancang itinerari privat dengan penawaran harga yang dirinci lengkap — apa yang termasuk dan tidak termasuk, dengan harga per orang dalam euro. Kami merevisinya bersama Anda sampai benar-benar sesuai."
    },
    {
     "heading": "Konfirmasi dengan uang muka",
     "body": "Bila Anda sudah puas, uang muka mengonfirmasi perjalanan Anda dan memungkinkan kami mulai mengamankan hotel, pemandu, pesiar, dan izin atas nama Anda."
    },
    {
     "heading": "Lunasi sisanya sebelum Anda berangkat",
     "body": "Sisa pembayaran jatuh tempo sebelum keberangkatan. Setelah lunas, kami menerbitkan dokumen akhir, program harian, dan narahubung Anda yang disebutkan namanya."
    }
   ],
   "paymentHeading": "Uang muka & pelunasan",
   "depositLabel": "Uang muka",
   "deposit": {
    "label": "25% dari total biaya perjalanan",
    "note": "Dibayarkan untuk mengonfirmasi pemesanan Anda. Jumlah ini diperhitungkan pada sisa pembayaran akhir Anda, bukan biaya tambahan."
   },
   "balanceLabel": "Pelunasan",
   "balance": {
    "label": "Jatuh tempo 30 hari sebelum keberangkatan",
    "note": "Untuk pemesanan yang dilakukan dalam 30 hari sebelum keberangkatan, seluruh jumlah dibayarkan pada saat konfirmasi."
   },
   "methodsLabel": "Metode pembayaran",
   "paymentMethods": [
    "Transfer bank",
    "Kartu kredit & debit utama",
    "PayPal"
   ],
   "cancelHeading": "Pembatalan oleh Anda",
   "cancelText": "Jika Anda perlu membatalkan, biaya berikut berlaku sesuai seberapa jauh sebelum keberangkatan Anda memberi tahu kami. Biaya ini mencerminkan komitmen yang kami buat kepada hotel, pemandu, dan operator atas nama Anda.",
   "cancellationTiers": [
    {
     "window": "45+ hari sebelum keberangkatan",
     "charge": "Hanya uang muka"
    },
    {
     "window": "30–44 hari sebelum keberangkatan",
     "charge": "50% dari total biaya perjalanan"
    },
    {
     "window": "15–29 hari sebelum keberangkatan",
     "charge": "75% dari total biaya perjalanan"
    },
    {
     "window": "Kurang dari 15 hari sebelum keberangkatan",
     "charge": "100% dari total biaya perjalanan"
    }
   ],
   "policiesHeading": "Perubahan, asuransi & hal tak terduga",
   "policies": [
    {
     "heading": "Perubahan pada pemesanan Anda",
     "body": "Kami mengakomodasi perubahan sedapat mungkin. Beberapa perubahan — terutama pada penerbangan, pesiar, atau hotel musim ramai — dapat dikenai biaya dari pemasok, yang selalu kami konfirmasikan kepada Anda sebelum dilanjutkan."
    },
    {
     "heading": "Asuransi perjalanan",
     "body": "Asuransi perjalanan yang komprehensif, yang mencakup perawatan medis, pembatalan, dan pemulangan, sangat dianjurkan untuk setiap pelancong dan sebaiknya diurus segera setelah pemesanan Anda dikonfirmasi."
    },
    {
     "heading": "Jika kami harus mengubah atau membatalkan",
     "body": "Jika keadaan di luar kendali kami mengharuskan perubahan, kami akan selalu menawarkan alternatif terdekat yang mungkin atau pengembalian dana yang adil atas jumlah yang belum dikomitmenkan kepada pemasok atas nama Anda."
    },
    {
     "heading": "Keadaan di luar kendali (force majeure)",
     "body": "Tidak satu pun pihak bertanggung jawab atas peristiwa di luar kendali yang wajar — seperti cuaca ekstrem, gangguan sipil, atau pembatasan perjalanan. Dalam hal demikian, kami bekerja sama dengan Anda untuk menjadwalkan ulang atau memulihkan nilai sebanyak mungkin."
    }
   ]
  },
  "labels": {
   "lastUpdatedLabel": "Terakhir diperbarui",
   "englishPrevails": "Ini adalah terjemahan. Jika terdapat perbedaan dengan versi Bahasa Inggris, yang berlaku adalah versi Bahasa Inggris.",
   "ctaHeading": "Ada pertanyaan sebelum memesan?",
   "ctaText": "Ragu tentang suatu ketentuan atau tanggal? Kirim pesan kepada kami dan kami akan menjelaskannya sebelum Anda memutuskan. Kami membalas dalam dua jam.",
   "whatsapp": "Halo Kemet — saya ingin bertanya tentang ketentuan pemesanan Anda.",
   "emailSubject": "Kemet — pertanyaan tentang ketentuan pemesanan",
   "moreLabel": "Baca juga",
   "moreText": "Dua dokumen lain yang berlaku untuk pertanyaan dan pemesanan."
  }
 },
 "ms": {
  "privacy": {
   "localeSlug": "dasar-privasi",
   "metaTitle": "Dasar Privasi | Kemet",
   "metaDescription": "Cara Kemet mengumpul, menggunakan dan melindungi maklumat peribadi anda apabila menghubungi kami. Kami kumpul sesedikit mungkin dan tidak menjualnya.",
   "standfirst": "Apa yang kami kumpul, cara kami menggunakannya dan hak anda terhadap maklumat anda. Kami mengumpul sesedikit mungkin — dan tidak pernah menjualnya.",
   "title": "Dasar Privasi",
   "intro": "Dasar ini menerangkan maklumat peribadi yang dikumpul oleh Kemet apabila anda menghubungi kami atau menggunakan laman web ini, cara kami menggunakannya, dan hak anda terhadapnya. Kami mengumpul sesedikit mungkin dan tidak pernah menjualnya.",
   "lastUpdated": "November 2026",
   "sections": [
    {
     "heading": "Siapa kami",
     "body": [
      "Kemet ialah syarikat reka bentuk perjalanan persendirian yang mengatur perjalanan tempahan khas di Mesir, dan merupakan “pengawal data” bagi tujuan dasar ini. Kami berpangkalan di Kaherah, Mesir.",
      "Anda boleh menghubungi kami mengenai apa-apa perkara dalam dasar ini — termasuk sebarang permintaan untuk mengakses, membetulkan atau memadam maklumat anda — melalui e-mel di info@kemet-travel.com."
     ]
    },
    {
     "heading": "Apa yang kami kumpul",
     "body": [
      "Apabila anda menghantar mesej kepada kami melalui borang hubungan, kami mengumpul butiran yang anda pilih untuk berikan: nama anda, alamat e-mel, dan — jika anda mengisinya — nombor telefon, tarikh perjalanan yang dirancang, saiz rombongan anda, rentak dan keutamaan yang anda pilih serta kandungan mesej anda.",
      "Seperti hampir semua laman web, pelayan kami turut merekodkan maklumat teknikal standard (seperti alamat IP, jenis pelayar dan halaman yang diminta) dalam lognya. Kami tidak menggunakan maklumat ini untuk mengenal pasti anda secara peribadi.",
      "Jika anda menyertai senarai kami — daripada jemputan di laman ini atau daripada perancang perjalanan — kami mula-mula menghantar e-mel meminta anda mengesahkan, dan tiada apa-apa lagi dihantar sehingga anda berbuat demikian. Kami menyimpan alamat e-mel anda, nama anda jika anda memberikannya, sama ada anda mendaftar daripada jemputan atau daripada perancang perjalanan, bahasa halaman, serta rekod persetujuan anda: bila anda memberikannya dan bila anda mengesahkannya, perkataan yang anda setujui dan alamat IP asal setiap satunya. Anda boleh keluar daripada senarai pada bila-bila masa melalui pautan berhenti melanggan dalam e-mel kami, atau dengan menulis kepada kami.",
      "Kami tidak mengendalikan akaun pengguna dan tidak menerima pembayaran di laman web ini, jadi kami tidak pernah mengumpul kata laluan atau butiran kad di sini."
     ]
    },
    {
     "heading": "Cara kami menggunakan maklumat anda",
     "body": [
      "Kami menggunakan butiran daripada pertanyaan anda semata-mata untuk membalas kepada anda, memahami apa yang anda cari dan — jika anda meneruskan — mereka bentuk serta mengatur perjalanan anda. Kami boleh menghubungi anda melalui e-mel, telefon atau WhatsApp menggunakan butiran yang anda berikan.",
      "Jika anda tidak terus melancong bersama kami, kami mungkin menulis kepada anda sekali lagi tentang perjalanan yang anda tanyakan: paling banyak tiga kali dalam tahun selepas pertanyaan anda. Beritahu kami pada bila-bila masa dan kami tidak akan menulis lagi.",
      "Asas undang-undang kami ialah persetujuan anda, langkah-langkah yang perlu untuk mengikat dan melaksanakan pengaturan perjalanan atas permintaan anda, dan, bagi mesej susulan itu, kepentingan sah kami untuk menjawab soalan yang anda bawa kepada kami. Kami tidak berkongsi maklumat anda dengan pengiklan dan kami tidak menggunakannya untuk pembuatan keputusan secara automatik."
     ]
    },
    {
     "heading": "Kuki dan analitik",
     "body": [
      "Laman web ini tidak menggunakan kuki untuk pengiklanan atau penjejakan, dan tidak memuatkan sebarang skrip analitik atau pengiklanan pihak ketiga. Ia tidak membina profil pemasaran tentang anda.",
      "Kami mengukur cara laman web ini digunakan dengan analitik ringkas milik kami sendiri, yang hanya berjalan di pelayan kami. Bagi setiap halaman yang dilihat, analitik ini merekodkan halaman itu, laman web atau enjin carian yang membawa ke sana, tanda kempen pada pautan yang anda gunakan untuk datang (jika ada), jenis peranti (telefon, tablet atau komputer, ditentukan daripada lebar skrin) dan tetapan bahasa pelayar anda. Ia juga merekodkan tindakan di halaman: mengetik WhatsApp atau e-mel, perjalanan yang anda buka, carian di laman web ini (termasuk perkataan yang dicari), sejauh mana anda membaca sesuatu halaman dan berapa lama anda berada di situ. Lawatan dikira dengan kod yang dibentuk daripada sambungan dan pelayar anda bersama nilai rahsia yang bertukar setiap hari, jadi seseorang pelawat tidak boleh dijejaki dari satu hari ke hari berikutnya dan kod itu tidak boleh ditukar semula menjadi alamat IP. Alamat IP anda sendiri tidak disimpan.",
      "Jika pelayar anda menghantar isyarat Do Not Track atau Global Privacy Control, tiada apa-apa daripada ini direkodkan. Rekod analitik ini dipadam secara automatik selepas 13 bulan.",
      "Apabila anda menghantar pertanyaan kepada kami, kami mencatat cara anda sampai ke laman ini pada hari itu — contohnya melalui enjin carian atau pembantu AI — dan halaman yang anda baca, supaya kami dapat membalas mengenai perjalanan yang anda lihat. Catatan ini disimpan bersama pertanyaan anda.",
      "Laman ini juga mengingati beberapa pilihan paparan dalam pelayar anda, seperti anda telah menutup sepanduk bermusim atau jemputan ke senarai kami. Ini kekal pada peranti anda dan tidak pernah dihantar kepada kami."
     ]
    },
    {
     "heading": "Dengan siapa kami berkongsi",
     "body": [
      "Kami berkongsi maklumat anda hanya apabila perlu untuk menjawab anda atau untuk mengatur perjalanan yang anda minta kami rancangkan — contohnya dengan hotel, kapal persiaran atau syarikat penerbangan yang ditempah untuk jadual perjalanan khusus anda. Pemandu dan pemandu kenderaan anda ialah pasukan Kemet sendiri.",
      "Laman web dan e-mel kami dihoskan oleh penyedia pengehosan kami, yang memproses data bagi pihak kami di bawah terma keselamatan mereka sendiri. Kami tidak pernah menjual, menyewakan atau menukar maklumat peribadi anda kepada sesiapa pun."
     ]
    },
    {
     "heading": "Berapa lama kami menyimpannya",
     "body": [
      "Kami menyimpan sesuatu pertanyaan selama tiga tahun dari hari ia dihantar, kemudian memadamkannya. Jika tempahan dibuat, sesetengah rekod mungkin disimpan lebih lama bagi memenuhi obligasi perakaunan atau undang-undang.",
      "Jika anda menyertai senarai kami, kami menyimpan butiran anda sehingga anda keluar daripadanya. Pendaftaran yang tidak pernah disahkan daripada e-mel yang kami hantar dipadam selepas 30 hari. Jika anda keluar daripada senarai, kami menyimpan catatan alamat anda dan tarikh anda keluar, supaya anda tidak ditambah semula secara tersilap.",
      "Anda boleh meminta kami memadam maklumat anda pada bila-bila masa (lihat “Hak anda”)."
     ]
    },
    {
     "heading": "Hak anda",
     "body": [
      "Jika anda berada di EU/EEA, United Kingdom atau bidang kuasa yang setara, anda berhak mengakses maklumat peribadi yang kami simpan tentang anda, meminta maklumat itu dibetulkan atau dipadam, membantah atau menyekat cara kami menggunakannya, dan menerima salinan dalam format mudah alih.",
      "Untuk menggunakan mana-mana hak ini, hantarkan e-mel kepada kami di info@kemet-travel.com dan kami akan membalas dalam tempoh yang munasabah. Anda juga berhak membuat aduan kepada pihak berkuasa perlindungan data tempatan anda."
     ]
    },
    {
     "heading": "Pembantu dan pelayan MCP",
     "body": [
      "Pembantu AI boleh membaca halaman yang kami terbitkan dan katalog perjalanan kami melalui pelayan baca sahaja di https://kemet-travel.com/mcp. Ia tiada log masuk dan tidak menetapkan kuki. Apa yang dihantar oleh pembantu kepadanya (kata carian, id perjalanan, bahasa) tidak disimpan. Kami hanya menyimpan kiraan harian tanpa nama bagi alat yang digunakan, tanpa alamat IP dan tanpa butiran permintaan.",
      "Pelayan ini tidak boleh membuat tempahan atau menghantar apa-apa. Jika anda meminta pembantu menghubungi kami, ia memberikan anda satu pautan, dan mesej hanya sampai kepada kami apabila anda membukanya dan menghantarnya sendiri. Apa yang anda taip dalam pembantu itu sendiri dikendalikan di bawah dasar privasi pembantu tersebut."
     ]
    },
    {
     "heading": "Keselamatan",
     "body": [
      "Laman ini disampaikan melalui HTTPS yang disulitkan, dan kami mengambil langkah teknikal dan organisasi yang munasabah untuk melindungi maklumat yang anda hantar kepada kami. Tiada penghantaran melalui internet yang dapat dijamin selamat sepenuhnya, tetapi kami berusaha memastikan data anda selamat."
     ]
    },
    {
     "heading": "Perubahan pada dasar ini",
     "body": [
      "Kami boleh mengemas kini dasar ini dari semasa ke semasa. Tarikh di bahagian atas menunjukkan bila ia kali terakhir disemak; versi semasa sentiasa berada di halaman ini."
     ]
    },
    {
     "heading": "Hubungi kami",
     "body": [
      "Ada soalan tentang privasi anda atau dasar ini? Hantarkan e-mel ke info@kemet-travel.com dan kami dengan senang hati akan membantu."
     ]
    }
   ]
  },
  "terms": {
   "localeSlug": "terma-penggunaan",
   "metaTitle": "Terma Penggunaan | Kemet",
   "metaDescription": "Terma yang mengawal penggunaan laman web Kemet, pertanyaan dan sebut harga. Baca bersama terma Tempahan & Pembatalan kami untuk perjalanan yang disahkan.",
   "standfirst": "Terma di sebalik laman web, pertanyaan dan sebut harga kami — ditulis dengan jelas, dan dibaca bersama terma Tempahan & Pembatalan kami.",
   "title": "Terma Penggunaan",
   "intro": "Terma ini mengawal penggunaan laman web Kemet oleh anda dan menetapkan asas kami memberikan maklumat dan sebut harga. Sila baca bersama terma Tempahan & Pembatalan kami, yang meliputi deposit, pembayaran dan pembatalan bagi perjalanan yang disahkan.",
   "lastUpdated": "November 2026",
   "sections": [
    {
     "heading": "Tentang terma ini",
     "body": [
      "Dengan menggunakan laman web ini, anda bersetuju dengan terma ini. Jika anda tidak bersetuju, sila jangan gunakan laman ini. Terma ini ditadbir oleh undang-undang Republik Arab Mesir, dan sebarang pertikaian berkaitan laman web ini tertakluk kepada bidang kuasa mahkamah Mesir."
     ]
    },
    {
     "heading": "Siapa kami",
     "body": [
      "Kemet mereka bentuk dan mengatur perjalanan persendirian tempahan khas di Mesir, beroperasi dari Kaherah. Pemandu Egyptologist berlesen anda dan pemandu kenderaan anda ialah ahli pasukan Kemet sendiri, dan hotel dalam perjalanan Kemet ditempah di bawah kontrak Kemet sendiri dengan hotel tersebut. Anda boleh menghubungi kami di info@kemet-travel.com."
     ]
    },
    {
     "heading": "Pertanyaan, sebut harga dan harga",
     "body": [
      "Pertanyaan atau sebut harga yang kami hantar kepada anda ialah cadangan, bukan tempahan yang disahkan. Harga ditunjukkan bagi setiap orang dalam euro dan bergantung pada tarikh, ketersediaan, saiz rombongan dan komponen jadual perjalanan anda.",
      "Harga dan ketersediaan boleh berubah sehingga tempahan disahkan secara bertulis dan deposit diterima. Kami sentiasa mengesahkan harga akhir dengan anda sebelum anda membuat komitmen."
     ]
    },
    {
     "heading": "Tempahan, pembayaran dan pembatalan",
     "body": [
      "Apabila anda mengesahkan perjalanan, terma deposit, baki dan pembatalan yang dinyatakan pada halaman Tempahan & Pembatalan kami terpakai. Sila baca halaman itu sebelum mengesahkan."
     ]
    },
    {
     "heading": "Ketepatan kandungan laman web",
     "body": [
      "Kami berhati-hati untuk memastikan maklumat di laman ini tepat dan terkini, tetapi butiran seperti waktu operasi, akses ke tapak, harga dan keadaan perjalanan boleh berubah. Kandungan disediakan sebagai panduan am dan tidak menjadi sebahagian daripada sebarang kontrak sehingga disahkan dalam jadual perjalanan anda."
     ]
    },
    {
     "heading": "Harta intelek",
     "body": [
      "Teks, reka bentuk, logo dan imej di laman web ini dimiliki oleh Kemet atau digunakan dengan kebenaran, dan dilindungi oleh hak cipta. Anda tidak boleh menyalin, menghasilkan semula atau menggunakan semula semuanya untuk tujuan komersial tanpa persetujuan bertulis kami."
     ]
    },
    {
     "heading": "Pasport, visa dan insurans",
     "body": [
      "Anda bertanggungjawab memiliki pasport yang sah dan visa yang betul untuk Mesir, serta memenuhi sebarang syarat kesihatan atau kemasukan. Kami boleh memberi nasihat, tetapi syarat ditetapkan oleh pihak berkuasa dan pada akhirnya menjadi tanggungjawab anda.",
      "Kami sangat menyarankan insurans perjalanan yang komprehensif merangkumi rawatan perubatan, pembatalan dan penghantaran pulang bagi setiap pengembara."
     ]
    },
    {
     "heading": "Siapa yang menyampaikan perjalanan anda",
     "body": [
      "Pemandu Egyptologist dan pemandu kenderaan anda ialah pasukan Kemet sendiri, dan hotel anda ditempah di bawah kontrak Kemet sendiri dengan hotel tersebut, jadi orang dan tempat dalam jadual perjalanan anda ialah yang kami pertanggungjawabkan secara langsung.",
      "Sesetengah bahagian perjalanan dikendalikan oleh syarikat yang mengendalikannya: kapal persiaran Sungai Nil berjadual, penerbangan domestik dan kereta api. Mereka menyediakan perkhidmatan itu di bawah syarat pengangkutan mereka sendiri, dan jadual mereka kadangkala boleh berubah atas sebab di luar kawalan kami. Apabila itu berlaku, kami mengatur semula bahagian perjalanan yang lain berdasarkan perubahan itu dan memaklumkan anda dengan segera."
     ]
    },
    {
     "heading": "Had liabiliti",
     "body": [
      "Setakat yang dibenarkan oleh undang-undang, Kemet tidak bertanggungjawab atas kerugian tidak langsung atau berbangkit yang timbul daripada penggunaan laman web ini, atau atas peristiwa di luar kawalan munasabah kami. Tiada apa-apa dalam terma ini yang menghadkan sebarang liabiliti yang tidak boleh dihadkan secara sah."
     ]
    },
    {
     "heading": "Hubungi kami",
     "body": [
      "Ada soalan tentang terma ini? Hantarkan e-mel ke info@kemet-travel.com."
     ]
    }
   ]
  },
  "booking": {
   "localeSlug": "tempahan-bayaran-pembatalan",
   "metaTitle": "Tempahan, Pembayaran & Pembatalan | Kemet",
   "metaDescription": "Cara menempah perjalanan persendirian Kemet — langkah-langkahnya, terma deposit dan pembayaran, kaedah pembayaran yang diterima dan dasar pembatalan.",
   "title": "Tempahan, Pembayaran & Pembatalan",
   "standfirst": "Semua yang perlu anda tahu sebelum mengesahkan — cara tempahan berfungsi, bila pembayaran perlu dibuat, dan terma pembatalan kami. Telus, tanpa kos tersembunyi.",
   "stepsHeading": "Cara tempahan berfungsi",
   "steps": [
    {
     "heading": "Hantar pertanyaan — percuma dan tanpa obligasi",
     "body": "Hantarkan tarikh, minat dan saiz rombongan anda. Kami membalas dalam tempoh dua jam dengan jadual perjalanan hari demi hari dan harga yang jelas. Tiada bayaran dan tiada komitmen pada peringkat ini."
    },
    {
     "heading": "Terima dan murnikan cadangan anda",
     "body": "Kami mereka bentuk jadual perjalanan persendirian dengan sebut harga terperinci sepenuhnya — apa yang termasuk dan tidak termasuk, dihargai bagi setiap orang dalam euro. Kami menyemaknya bersama anda sehingga ia betul-betul menepati kehendak anda."
    },
    {
     "heading": "Sahkan dengan deposit",
     "body": "Apabila anda berpuas hati, deposit mengesahkan perjalanan anda dan membolehkan kami mula mendapatkan hotel, pemandu, pelayaran dan permit atas nama anda."
    },
    {
     "heading": "Jelaskan baki sebelum anda berlepas",
     "body": "Baki yang tinggal perlu dibayar sebelum pelepasan. Setelah dijelaskan, kami mengeluarkan dokumen akhir anda, program hari demi hari dan seorang rujukan hubungan yang dinamakan."
    }
   ],
   "paymentHeading": "Deposit & baki",
   "depositLabel": "Deposit",
   "deposit": {
    "label": "25% daripada jumlah kos perjalanan",
    "note": "Perlu dibayar untuk mengesahkan tempahan anda. Ia ditolak daripada baki akhir anda, bukan caj tambahan."
   },
   "balanceLabel": "Baki",
   "balance": {
    "label": "Perlu dibayar 30 hari sebelum pelepasan",
    "note": "Bagi tempahan yang dibuat dalam tempoh 30 hari sebelum pelepasan, jumlah penuh perlu dibayar semasa pengesahan."
   },
   "methodsLabel": "Kaedah pembayaran",
   "paymentMethods": [
    "Pindahan bank",
    "Kad kredit & debit utama",
    "PayPal"
   ],
   "cancelHeading": "Pembatalan oleh anda",
   "cancelText": "Jika anda perlu membatalkan, caj berikut terpakai berdasarkan berapa awal sebelum pelepasan anda memaklumkan kami. Caj ini mencerminkan komitmen yang kami buat kepada hotel, pemandu dan pengendali bagi pihak anda.",
   "cancellationTiers": [
    {
     "window": "45+ hari sebelum pelepasan",
     "charge": "Deposit sahaja"
    },
    {
     "window": "30–44 hari sebelum pelepasan",
     "charge": "50% daripada jumlah kos perjalanan"
    },
    {
     "window": "15–29 hari sebelum pelepasan",
     "charge": "75% daripada jumlah kos perjalanan"
    },
    {
     "window": "Kurang daripada 15 hari sebelum pelepasan",
     "charge": "100% daripada jumlah kos perjalanan"
    }
   ],
   "policiesHeading": "Perubahan, insurans & perkara tidak dijangka",
   "policies": [
    {
     "heading": "Perubahan pada tempahan anda",
     "body": "Kami menampung pindaan sedapat mungkin. Sesetengah perubahan — terutamanya pada penerbangan, pelayaran atau hotel musim puncak — mungkin dikenakan caj pembekal, yang sentiasa kami sahkan dengan anda sebelum meneruskan."
    },
    {
     "heading": "Insurans perjalanan",
     "body": "Insurans perjalanan yang komprehensif merangkumi rawatan perubatan, pembatalan dan penghantaran pulang amat disyorkan bagi setiap pengembara dan perlu diatur sebaik sahaja tempahan anda disahkan."
    },
    {
     "heading": "Jika kami terpaksa mengubah atau membatalkan",
     "body": "Jika keadaan di luar kawalan kami memerlukan perubahan, kami sentiasa akan menawarkan alternatif yang paling hampir atau bayaran balik yang adil bagi jumlah yang belum dikomitkan kepada pembekal bagi pihak anda."
    },
    {
     "heading": "Keadaan di luar kawalan (force majeure)",
     "body": "Tiada pihak yang bertanggungjawab atas peristiwa di luar kawalan munasabah — seperti cuaca ekstrem, gangguan awam atau sekatan perjalanan. Dalam keadaan sedemikian, kami bekerjasama dengan anda untuk menjadualkan semula atau memulihkan nilai sebanyak mungkin."
    }
   ]
  },
  "labels": {
   "lastUpdatedLabel": "Dikemas kini terakhir",
   "englishPrevails": "Ini ialah terjemahan. Jika terdapat perbezaan dengan versi bahasa Inggeris, versi bahasa Inggeris yang terpakai.",
   "ctaHeading": "Ada soalan sebelum menempah?",
   "ctaText": "Tidak pasti tentang sesuatu terma atau tarikh? Hantarkan mesej kepada kami dan kami akan menerangkannya sebelum anda membuat keputusan. Kami membalas dalam tempoh dua jam.",
   "whatsapp": "Helo Kemet — saya ada soalan tentang terma tempahan anda.",
   "emailSubject": "Kemet — soalan tentang terma tempahan",
   "moreLabel": "Baca juga",
   "moreText": "Dua dokumen lain yang terpakai pada pertanyaan dan tempahan."
  }
 },
 "ar": {
  "privacy": {
   "localeSlug": "siyasat-al-khususiya-wa-hamayat-al-bayanat",
   "metaTitle": "سياسة الخصوصية | Kemet",
   "metaDescription": "كيف تجمع Kemet المعلومات الشخصية التي تشاركونها عند التواصل معنا وتستخدمها وتحميها. نجمع أقل قدر ممكن ولا نبيعها أبداً.",
   "standfirst": "ما الذي نجمعه، وكيف نستخدمه، وما الحقوق التي تملكونها على معلوماتكم. نجمع أقل قدر ممكن — ولا نبيعه أبداً.",
   "title": "سياسة الخصوصية",
   "intro": "توضح هذه السياسة ما المعلومات الشخصية التي تجمعها Kemet عند تواصلكم معنا أو استخدامكم لهذا الموقع، وكيف نستخدمها، وما الحقوق التي تملكونها عليها. نجمع أقل قدر ممكن ولا نبيعه أبداً.",
   "lastUpdated": "نوفمبر ٢٠٢٦",
   "sections": [
    {
     "heading": "من نحن",
     "body": [
      "Kemet شركة خاصة لتصميم الرحلات تُعدّ رحلات مفصّلة على مقاس المسافر في مصر، وهي «المسؤول عن معالجة البيانات» (المتحكّم في البيانات) لأغراض هذه السياسة. مقرّنا في القاهرة، مصر.",
      "يمكنكم التواصل معنا بشأن أي أمر في هذه السياسة — بما في ذلك أي طلب للاطلاع على معلوماتكم أو تصحيحها أو حذفها — عبر البريد الإلكتروني info@kemet-travel.com."
     ]
    },
    {
     "heading": "ما الذي نجمعه",
     "body": [
      "عندما ترسلون إلينا رسالة عبر نموذج التواصل، نجمع البيانات التي تختارون تقديمها: اسمكم وبريدكم الإلكتروني، وكذلك — إن أدخلتموها — رقم هاتفكم وتواريخ السفر المزمعة وحجم مجموعتكم والإيقاع والأولويات التي تختارونها ومحتوى رسالتكم.",
      "وكغالبية المواقع الإلكترونية، يسجّل خادمنا أيضاً في سجلّاته معلومات تقنية اعتيادية (مثل عنوان IP ونوع المتصفح والصفحات المطلوبة). ولا نستخدم ذلك لتحديد هويتكم الشخصية.",
      "إذا انضممتم إلى قائمتنا — من الدعوة في هذا الموقع أو من مصمّم الرحلات — فإننا نرسل أولاً رسالة بريد إلكتروني نطلب فيها تأكيدكم، ولا يُرسَل إليكم شيء آخر ما لم تؤكدوا. نحتفظ ببريدكم الإلكتروني، واسمكم إن ذكرتموه، وما إذا كنتم قد اشتركتم من الدعوة أو من مصمّم الرحلات، ولغة الصفحة، وسجلّ موافقتكم: وقت إعطائها ووقت تأكيدها، والصياغة التي وافقتم عليها، وعنوان IP الذي صدرت منه كل منهما. ويمكنكم مغادرة القائمة في أي وقت عبر رابط إلغاء الاشتراك في رسائلنا، أو بمراسلتنا.",
      "لا نُدير حسابات للمستخدمين ولا نتلقى مدفوعات عبر هذا الموقع، ولذلك لا نجمع هنا كلمات مرور ولا بيانات بطاقات."
     ]
    },
    {
     "heading": "كيف نستخدم معلوماتكم",
     "body": [
      "نستخدم بيانات استفساركم حصراً للردّ عليكم، ولفهم ما تبحثون عنه، وللمضي — إذا قررتم ذلك — في تصميم رحلتكم وترتيبها. وقد نتواصل معكم بالبريد الإلكتروني أو الهاتف أو واتساب باستخدام البيانات التي تقدّمونها.",
      "إذا لم تسافروا معنا على الفور، فقد نكتب إليكم مجدداً بشأن الرحلة التي سألتم عنها: ثلاث مرات على الأكثر خلال السنة التي تلي استفساركم. أخبرونا في أي وقت ولن نكتب إليكم بعد ذلك.",
      "أساسنا القانوني هو موافقتكم، والخطوات اللازمة لإبرام ترتيبات السفر وتنفيذها بناءً على طلبكم، وفي ما يخصّ رسائل المتابعة تلك، مصلحتنا المشروعة في الإجابة عن السؤال الذي طرحتموه علينا. ولا نشارك معلوماتكم مع المعلنين، ولا نستخدمها في اتخاذ قرارات آلية."
     ]
    },
    {
     "heading": "ملفات تعريف الارتباط والتحليلات",
     "body": [
      "لا يستخدم هذا الموقع ملفات تعريف ارتباط لأغراض الإعلان أو التتبّع، ولا يحمّل أي نصوص برمجية للتحليلات أو الإعلانات من أطراف ثالثة. ولا يبني عنكم ملفاً تسويقياً.",
      "نقيس كيفية استخدام الموقع بتحليلاتنا البسيطة الخاصة التي تعمل على خادمنا وحده. وتسجّل لكل صفحة تُعرض: الصفحة، والموقع أو محرك البحث الذي أحال إليها، ووسم الحملة في الرابط الذي وصلتم منه إن وُجد، ونوع الجهاز (هاتف أو لوح أو حاسوب، بحسب عرض الشاشة)، وإعداد اللغة في متصفحكم. وتسجّل كذلك ما تفعلونه في الصفحة: النقر على واتساب أو البريد الإلكتروني، والرحلة التي فتحتموها، والبحث في هذا الموقع (بما في ذلك كلمات البحث)، والمدى الذي قرأتموه من الصفحة والوقت الذي قضيتموه فيها. وتُحصى الزيارات برمز يُنشأ من اتصالكم ومتصفحكم مع قيمة سرية تتغيّر كل يوم، فلا يمكن تتبّع الزائر من يوم إلى آخر، ولا يمكن تحويل الرمز إلى عنوان IP؛ أما عنوان IP نفسه فلا يُخزَّن.",
      "إذا أرسل متصفحكم إشارة «عدم التتبّع» (Do Not Track) أو إشارة التحكم العالمي في الخصوصية (Global Privacy Control)، فلا يُسجَّل شيء من ذلك. وتُحذف سجلات هذه التحليلات تلقائياً بعد ١٣ شهراً.",
      "وعندما ترسلون إلينا استفساراً، نسجّل كيف وصلتم إلى الموقع في ذلك اليوم — مثلاً عبر محرك بحث أو مساعد ذكاء اصطناعي — وأي الصفحات قرأتم، لنتمكن من الردّ بشأن الرحلة التي كنتم تطّلعون عليها. ويُحفظ ذلك مع استفساركم.",
      "ويتذكّر الموقع أيضاً بعض خيارات العرض في متصفحكم، كأن تكونوا قد أغلقتم لافتة الموسم أو الدعوة إلى قائمتنا. وتبقى هذه على جهازكم ولا تُرسَل إلينا أبداً."
     ]
    },
    {
     "heading": "مع من نشاركها",
     "body": [
      "لا نشارك معلوماتكم إلا حيثما يلزم للردّ عليكم أو لترتيب رحلة طلبتم منا تخطيطها — مثلاً مع الفنادق أو باخرة النيل السياحية أو شركة الطيران المحجوزة لبرنامجكم تحديداً. أما مرشدكم وسائقكم فهما من فريق Kemet نفسه.",
      "يُستضاف موقعنا وبريدنا الإلكتروني لدى مزوّد الاستضافة الذي نتعامل معه، وهو يعالج البيانات نيابةً عنا وفق شروطه الأمنية الخاصة. ولا نبيع معلوماتكم الشخصية ولا نؤجّرها ولا نتاجر بها مع أي جهة."
     ]
    },
    {
     "heading": "مدة الاحتفاظ بها",
     "body": [
      "نحتفظ بالاستفسار ثلاث سنوات من يوم إرساله، ثم نحذفه. وإذا تمّ حجز، فقد يُحتفظ ببعض السجلات مدة أطول للوفاء بالتزامات محاسبية أو قانونية.",
      "إذا انضممتم إلى قائمتنا، نحتفظ ببياناتكم إلى أن تغادروها. أما الاشتراك الذي لا يُؤكَّد من الرسالة التي نرسلها فيُحذف بعد ٣٠ يوماً. وإذا غادرتم القائمة، نحتفظ بملاحظة تتضمن عنوانكم وتاريخ مغادرتكم، حتى لا تُضافوا مجدداً عن طريق الخطأ.",
      "ويمكنكم أن تطلبوا منا حذف معلوماتكم في أي وقت (انظروا «حقوقكم»)."
     ]
    },
    {
     "heading": "حقوقكم",
     "body": [
      "إذا كنتم في الاتحاد الأوروبي أو المنطقة الاقتصادية الأوروبية أو المملكة المتحدة أو ولاية قضائية مماثلة، فلكم الحق في الاطلاع على المعلومات الشخصية التي نحتفظ بها عنكم، وفي تصحيحها أو حذفها، وفي الاعتراض على طريقة استخدامنا لها أو تقييدها، وفي الحصول على نسخة منها بصيغة قابلة للنقل.",
      "ولممارسة أي من هذه الحقوق، راسلونا على info@kemet-travel.com وسنردّ خلال مدة معقولة. ولكم كذلك الحق في تقديم شكوى إلى سلطة حماية البيانات المختصة في بلدكم."
     ]
    },
    {
     "heading": "المساعدون الآليون وخادم MCP",
     "body": [
      "يمكن لمساعدي الذكاء الاصطناعي قراءة صفحاتنا المنشورة وفهرس رحلاتنا عبر خادم للقراءة فقط على https://kemet-travel.com/mcp. وهو بلا تسجيل دخول ولا يضع ملفات تعريف ارتباط. وما يرسله المساعد إليه (كلمات البحث أو معرّف الرحلة أو اللغة) لا يُخزَّن. ونحتفظ فقط بعدّاد يومي مجهول للأداة التي استُخدمت، دون عنوان IP ودون أي تفاصيل عن الطلب.",
      "لا يستطيع الخادم أن يحجز أو يرسل أي شيء. فإذا طلبتم من مساعد أن يتواصل معنا، يمنحكم رابطاً، ولا تصلنا رسالة إلا عندما تفتحونه وترسلونها بأنفسكم. وما تكتبونه في المساعد نفسه تحكمه سياسة الخصوصية الخاصة بذلك المساعد."
     ]
    },
    {
     "heading": "الأمان",
     "body": [
      "يُقدَّم الموقع عبر اتصال HTTPS مشفّر، ونتخذ تدابير تقنية وتنظيمية معقولة لحماية المعلومات التي ترسلونها إلينا. ولا يمكن ضمان أمان أي إرسال عبر الإنترنت بصورة مطلقة، لكننا نعمل على إبقاء بياناتكم في أمان."
     ]
    },
    {
     "heading": "التعديلات على هذه السياسة",
     "body": [
      "قد نحدّث هذه السياسة من وقت لآخر. ويبيّن التاريخ في أعلاها موعد آخر مراجعة لها؛ والنسخة السارية موجودة دائماً في هذه الصفحة."
     ]
    },
    {
     "heading": "تواصلوا معنا",
     "body": [
      "هل لديكم أسئلة عن خصوصيتكم أو عن هذه السياسة؟ راسلونا على info@kemet-travel.com ويسعدنا مساعدتكم."
     ]
    }
   ]
  },
  "terms": {
   "localeSlug": "shurut-istikhdam-al-mawqea",
   "metaTitle": "شروط الاستخدام | Kemet",
   "metaDescription": "الشروط التي تحكم استخدام موقع Kemet والاستفسارات وعروض الأسعار. تُقرأ مع شروط الحجز والإلغاء الخاصة بالرحلات المؤكَّدة.",
   "standfirst": "الشروط الحاكمة لموقعنا واستفساراتكم وعروض أسعارنا — مكتوبة بوضوح، وتُقرأ مع شروط الحجز والإلغاء.",
   "title": "شروط الاستخدام",
   "intro": "تحكم هذه الشروط استخدامكم لموقع Kemet وتبيّن الأساس الذي نقدّم عليه المعلومات وعروض الأسعار. يُرجى قراءتها مع شروط الحجز والإلغاء، التي تتناول العربون والدفع والإلغاء في الرحلة المؤكَّدة.",
   "lastUpdated": "نوفمبر ٢٠٢٦",
   "sections": [
    {
     "heading": "عن هذه الشروط",
     "body": [
      "باستخدامكم هذا الموقع فإنكم توافقون على هذه الشروط. وإن لم توافقوا عليها، فيُرجى عدم استخدام الموقع. وتخضع هذه الشروط لقوانين جمهورية مصر العربية، ويخضع أي نزاع يتعلق بهذا الموقع لاختصاص المحاكم المصرية."
     ]
    },
    {
     "heading": "من نحن",
     "body": [
      "تصمّم Kemet رحلات خاصة على مقاس المسافر في مصر وترتّبها، وتعمل من القاهرة. ومرشدكم المرخّص المتخصص في علم المصريات وسائقكم من فريق Kemet نفسه، وتُحجز الفنادق في رحلة Kemet بموجب عقود Kemet الخاصة معها. ويمكنكم التواصل معنا على info@kemet-travel.com."
     ]
    },
    {
     "heading": "الاستفسارات وعروض الأسعار والأسعار",
     "body": [
      "الاستفسار أو عرض السعر الذي نرسله إليكم مجرد اقتراح، وليس حجزاً مؤكَّداً. وتُعرض الأسعار للفرد باليورو، وتتوقف على التواريخ والتوافر وعدد المسافرين ومكوّنات برنامجكم.",
      "قد تتغير الأسعار والتوافر إلى أن يُؤكَّد الحجز كتابةً ويُستلم العربون. ونؤكد لكم السعر النهائي دائماً قبل أن تلتزموا."
     ]
    },
    {
     "heading": "الحجز والدفع والإلغاء",
     "body": [
      "عندما تؤكدون رحلة، تسري شروط العربون والرصيد المتبقي والإلغاء الواردة في صفحة الحجز والإلغاء لدينا. يُرجى قراءة تلك الصفحة قبل التأكيد."
     ]
    },
    {
     "heading": "دقة محتوى الموقع",
     "body": [
      "نحرص على أن تكون المعلومات في هذا الموقع دقيقة وحديثة، لكن تفاصيل مثل مواعيد الفتح وإمكانية دخول المواقع والأسعار وظروف السفر قد تتغير. ويُقدَّم المحتوى للإرشاد العام ولا يُعدّ جزءاً من أي عقد إلا بعد تأكيده في برنامج رحلتكم."
     ]
    },
    {
     "heading": "الملكية الفكرية",
     "body": [
      "النصوص والتصميم والشعارات والصور في هذا الموقع مملوكة لـ Kemet أو مستخدمة بإذن، ومحمية بحقوق النشر. ولا يجوز لكم نسخها أو إعادة إنتاجها أو إعادة استخدامها لأغراض تجارية دون موافقتنا الكتابية."
     ]
    },
    {
     "heading": "جوازات السفر والتأشيرات والتأمين",
     "body": [
      "أنتم مسؤولون عن حيازة جواز سفر ساري المفعول وتأشيرة مصر الصحيحة، وعن استيفاء أي متطلبات صحية أو متطلبات دخول. ويمكننا إسداء المشورة، لكن المتطلبات تحددها السلطات وتبقى مسؤوليتكم في نهاية المطاف.",
      "ونوصي بشدة بتأمين سفر شامل يغطي الرعاية الطبية والإلغاء والإعادة إلى الوطن لكل مسافر."
     ]
    },
    {
     "heading": "من ينفّذ رحلتكم",
     "body": [
      "مرشدكم المتخصص في علم المصريات وسائقكم من فريق Kemet نفسه، وتُحجز فنادقكم بموجب عقود Kemet الخاصة معها، ولذلك فإن الأشخاص والأماكن في برنامجكم نتحمّل المسؤولية عنهم مباشرةً.",
      "وتديرُ بعضَ أجزاء الرحلة الشركاتُ المشغِّلة لها: باخرة نيلية بمواعيد منتظمة، والرحلات الجوية الداخلية، والقطارات. وتقدّم هذه الخدمات وفق شروط النقل الخاصة بها، وقد تتغير مواعيدها أحياناً لأسباب خارجة عن إرادتنا. وعندما يحدث ذلك نعيد ترتيب بقية الرحلة بما يتلاءم معه ونُبلغكم فوراً."
     ]
    },
    {
     "heading": "حدود المسؤولية",
     "body": [
      "في الحدود التي يسمح بها القانون، لا تتحمل Kemet المسؤولية عن الخسائر غير المباشرة أو التبعية الناشئة عن استخدام هذا الموقع، ولا عن الأحداث الخارجة عن سيطرتنا المعقولة. ولا يقيّد شيء في هذه الشروط أي مسؤولية لا يجوز قانوناً تقييدها."
     ]
    },
    {
     "heading": "تواصلوا معنا",
     "body": [
      "هل لديكم أسئلة عن هذه الشروط؟ راسلونا على info@kemet-travel.com."
     ]
    }
   ]
  },
  "booking": {
   "localeSlug": "shurut-al-hajz-wa-al-dafa-wa-al-ilgha",
   "metaTitle": "الحجز والدفع والإلغاء | Kemet",
   "metaDescription": "كيف يتم حجز رحلة خاصة مع Kemet — الخطوات، وشروط العربون والدفع، وطرق الدفع المقبولة، وسياسة الإلغاء.",
   "title": "الحجز والدفع والإلغاء",
   "standfirst": "كل ما تحتاجون إلى معرفته قبل التأكيد — كيف يتم الحجز، ومتى تستحق الدفعات، وشروط الإلغاء لدينا. بشفافية ودون أي تكاليف خفية.",
   "stepsHeading": "كيف يتم الحجز",
   "steps": [
    {
     "heading": "اطلبوا عرضاً — مجاناً ودون التزام",
     "body": "أرسلوا إلينا تواريخكم واهتماماتكم وعدد المسافرين. نردّ خلال ساعتين ببرنامج يومًا بيوم وسعر واضح. لا رسوم ولا التزام في هذه المرحلة."
    },
    {
     "heading": "تلقّوا مقترحكم وعدّلوه",
     "body": "نصمّم برنامجاً خاصاً مع عرض سعر مفصّل بنداً بنداً — ما هو مشمول وما هو غير مشمول، بالسعر للفرد باليورو. ونعدّله معكم حتى يصبح كما تريدون تماماً."
    },
    {
     "heading": "أكّدوا بدفع العربون",
     "body": "عندما تكونون راضين، يؤكد العربون رحلتكم ويتيح لنا البدء في تأمين الفنادق والمرشدين والرحلات النيلية والتصاريح باسمكم."
    },
    {
     "heading": "سدّدوا الرصيد المتبقي قبل السفر",
     "body": "يستحق الرصيد المتبقي قبل موعد المغادرة. وبعد سداده نصدر لكم مستنداتكم النهائية، وبرنامج كل يوم، وجهة اتصال مسمّاة."
    }
   ],
   "paymentHeading": "العربون والرصيد المتبقي",
   "depositLabel": "العربون",
   "deposit": {
    "label": "٢٥٪ من التكلفة الإجمالية للرحلة",
    "note": "يُدفع لتأكيد حجزكم. ويُخصم من رصيدكم النهائي، وليس رسماً إضافياً."
   },
   "balanceLabel": "الرصيد المتبقي",
   "balance": {
    "label": "يستحق قبل المغادرة بـ ٣٠ يوماً",
    "note": "في الحجوزات التي تتم قبل المغادرة بأقل من ٣٠ يوماً، يُدفع المبلغ كاملاً وقت التأكيد."
   },
   "methodsLabel": "طرق الدفع",
   "paymentMethods": [
    "تحويل مصرفي",
    "أبرز بطاقات الائتمان والخصم",
    "PayPal"
   ],
   "cancelHeading": "الإلغاء من جانبكم",
   "cancelText": "إذا اضطررتم إلى الإلغاء، تسري الرسوم التالية بحسب المدة التي تسبق المغادرة وقت إبلاغنا. وتعكس الرسوم التزامات نبرمها مع الفنادق والمرشدين والمشغّلين نيابةً عنكم.",
   "cancellationTiers": [
    {
     "window": "٤٥ يوماً أو أكثر قبل المغادرة",
     "charge": "العربون فقط"
    },
    {
     "window": "من ٣٠ إلى ٤٤ يوماً قبل المغادرة",
     "charge": "٥٠٪ من التكلفة الإجمالية للرحلة"
    },
    {
     "window": "من ١٥ إلى ٢٩ يوماً قبل المغادرة",
     "charge": "٧٥٪ من التكلفة الإجمالية للرحلة"
    },
    {
     "window": "أقل من ١٥ يوماً قبل المغادرة",
     "charge": "١٠٠٪ من التكلفة الإجمالية للرحلة"
    }
   ],
   "policiesHeading": "التعديلات والتأمين والظروف الطارئة",
   "policies": [
    {
     "heading": "تعديلات حجزكم",
     "body": "نستجيب للتعديلات كلما أمكن. وبعض التغييرات — لا سيما في الرحلات الجوية أو النيلية أو فنادق موسم الذروة — قد تترتب عليها رسوم من الموردين، ونؤكدها لكم دائماً قبل المضي فيها."
    },
    {
     "heading": "تأمين السفر",
     "body": "يُوصى بشدة بتأمين سفر شامل يغطي الرعاية الطبية والإلغاء والإعادة إلى الوطن لكل مسافر، وينبغي ترتيبه فور تأكيد حجزكم."
    },
    {
     "heading": "إذا اضطررنا إلى التغيير أو الإلغاء",
     "body": "إذا استلزمت ظروف خارجة عن إرادتنا إجراء تغيير، فسنعرض عليكم دائماً أقرب بديل ممكن أو استرداداً عادلاً للمبالغ التي لم نلتزم بها بعدُ تجاه الموردين نيابةً عنكم."
    },
    {
     "heading": "الظروف الخارجة عن السيطرة (القوة القاهرة)",
     "body": "لا يتحمل أي من الطرفين المسؤولية عن الأحداث الخارجة عن السيطرة المعقولة — مثل الطقس القاسي أو الاضطرابات المدنية أو قيود السفر. وفي مثل هذه الحالات نعمل معكم على إعادة الجدولة أو استرداد أكبر قدر ممكن من القيمة."
    }
   ]
  },
  "labels": {
   "lastUpdatedLabel": "آخر تحديث",
   "englishPrevails": "هذه ترجمة. وإذا اختلفت عن النسخة الإنجليزية، فالعبرة بالنسخة الإنجليزية.",
   "ctaHeading": "هل لديكم أسئلة قبل الحجز؟",
   "ctaText": "لستم متأكدين من أحد الشروط أو من موعد؟ راسلونا وسنشرحه لكم قبل أن تقرروا. نردّ خلال ساعتين.",
   "whatsapp": "مرحباً Kemet — لديّ سؤال عن شروط الحجز لديكم.",
   "emailSubject": "Kemet — سؤال عن شروط الحجز",
   "moreLabel": "اقرأوا أيضاً",
   "moreText": "الوثيقتان الأخريان اللتان تسريان على الاستفسار وعلى الحجز."
  }
 }
};
