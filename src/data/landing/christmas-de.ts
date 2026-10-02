// ---------------------------------------------------------------------------
// WEIHNACHTEN & SILVESTER — the German landing layer.
//
// WHERE IT GOES, AND WHY NOT A NEW PAGE
// de/weihnachten-in-aegypten.html already exists (i18n/eu-holidays.ts), is
// indexed, and is written for this market rather than translated into it. The
// same reasoning as the English page applies and applies harder: a second
// German page about Christmas in Egypt would compete with it for the one
// query that matters, and the ad spend would sit on the weaker of the two. So
// this is a layer on that page — same URL, same canonical, same sitemap entry.
//
// WHAT IT ADDS AND WHAT IT DELIBERATELY DOES NOT
// It adds the four dated moments, the booking window in one sentence, the
// journeys with their prices, and a German enquiry form. It supplies NO
// `detail` blocks: that page already carries four long sections, a highlights
// panel and four FAQs in German, and repeating them under a second heading
// would be the same essay twice. The landing run sits above all of it.
//
// NOT A TRANSLATION OF THE ENGLISH LANDING PAGE
// The arguments differ because the reader does. A German traveller is coming
// out of a genuinely dark, cold December, is used to Christmas as a public
// holiday and finds it strange that Egypt treats the 25th as a working day,
// and asks about a German-speaking Egyptologist — which the existing page
// answers and the English one never raises. The prices are read from the same
// catalogue and formatted German-style; the deposit and the cancellation
// tiers are read as NUMBERS from the booking terms (landing/terms.ts) so the
// German wording can be German without the figures drifting from the English.
// ---------------------------------------------------------------------------
import type { LandingPage } from "@/types";
import { tours } from "@/data/tours";
import { findMonth } from "@/data/months";
import { TERMS, tierAt } from "@/data/landing/terms";

// --- the clock (same rules as the English page, German wording) -------------
const DAY = 86_400_000;
const now = new Date();
const THIS_YEAR = now.getUTCFullYear();

/**
 * Rolls over after Coptic Christmas, not after Boxing Day — see christmas.ts.
 *
 * EXPORTED, and the German page's own title and description are built from it
 * (i18n/eu-holidays.ts → deWeihnachten). They used to roll over on 1 January
 * while this ran to the 7th, so for the first week of January the title
 * offered next December while the landing layer on the same page was still
 * selling the week that was running. One rule, one place, no disagreement.
 */
export const SEASON_Y = now < new Date(Date.UTC(THIS_YEAR, 0, 8)) ? THIS_YEAR - 1 : THIS_YEAR;

const EVE = new Date(Date.UTC(SEASON_Y, 11, 24));
const XMAS = new Date(Date.UTC(SEASON_Y, 11, 25));
const NYE = new Date(Date.UTC(SEASON_Y, 11, 31));
const EPIPH = new Date(Date.UTC(SEASON_Y + 1, 0, 6));
const COPTIC = new Date(Date.UTC(SEASON_Y + 1, 0, 7));
const PEAK_FROM = new Date(Date.UTC(SEASON_Y, 11, 20));
const PEAK_TO = new Date(Date.UTC(SEASON_Y + 1, 0, 5));
/** From about the 12th January eases noticeably — months.ts, January. */
const EASES = new Date(Date.UTC(SEASON_Y + 1, 0, 12));

const DAYS_OUT = Math.round((EVE.getTime() - now.getTime()) / DAY);
const WEEKS_OUT = Math.round(DAYS_OUT / 7);
const MONTHS_OUT = Math.round(DAYS_OUT / 30.44);

const de = (x: Date) => x.toLocaleDateString("de-DE", { timeZone: "UTC", day: "numeric", month: "long" });
const deY = (x: Date) => x.toLocaleDateString("de-DE", { timeZone: "UTC", day: "numeric", month: "long", year: "numeric" });

// --- read, never typed ------------------------------------------------------
const dec = findMonth("december")!;
const jan = findMonth("january")!;

const JOURNEY_SLUGS = [
  "tour-10-day",
  "tour-nile-cruise",
  "tour-7-day",
  "tour-grand-14day",
  "tour-cairo-vip-3day",
  "tour-luxor-3day",
];
const journeyTours = JOURNEY_SLUGS.map((s) => tours.find((t) => t.slug === s)!);
/** German price formatting — 1.915 €, not €1,915. */
const eur = (n: number) => `${n.toLocaleString("de-DE")} €`;
const FROM_PRICE = Math.min(...journeyTours.map((t) => t.price));

const PEAK = `${de(PEAK_FROM)} bis ${de(PEAK_TO)}`;
const DATES = `${deY(EVE)} – ${deY(COPTIC)}`;

/** The cancellation tier a booking made today falls under, put into German. */
const TIER = tierAt(DAYS_OUT);
const tierText =
  TIER.charge.kind === "deposit"
    ? `nur die Anzahlung`
    : `${TIER.charge.percent} % des Reisepreises`;
const tierWhen =
  TIER.maxDays === undefined
    ? `ab ${TIER.minDays} Tagen vor Abreise`
    : TIER.minDays === 0
      ? `weniger als ${TIER.maxDays + 1} Tage vor Abreise`
      : `${TIER.minDays} bis ${TIER.maxDays} Tage vor Abreise`;

// --- the booking window, one sentence per stage -----------------------------
type Stage = "early" | "prime" | "late" | "last" | "live";
const STAGE: Stage =
  DAYS_OUT <= 2 ? "live"
  : DAYS_OUT <= 45 ? "last"
  : DAYS_OUT <= 120 ? "late"
  : DAYS_OUT <= 275 ? "prime"
  : "early";

const WINDOWS: Record<Stage, LandingPage["window"]> = {
  early: {
    eyebrow: `Noch rund ${MONTHS_OUT} Monate`,
    heading: "Noch ist nichts vergeben",
    line: `Und genau das ist der Vorteil: Dies ist der einzige Zeitpunkt im Jahr, an dem Sie Schiff und Zimmer aussuchen, statt zu nehmen, was übrig ist.`,
  },
  prime: {
    eyebrow: `Noch ${MONTHS_OUT} Monate`,
    heading: "Jetzt werden die guten Schiffe vergeben",
    line: `Die gut geführten Schiffe haben noch Kabinen und die bekannten Häuser noch ihre guten Zimmer — beides geht gerade weg, und der ${de(NYE)} ist immer zuerst ausgebucht.`,
  },
  late: {
    eyebrow: `Noch ${WEEKS_OUT} Wochen`,
    heading: "Spät, aber machbar — und wir sagen Ihnen genau, wie",
    line: `Die kleinen Dahabiyas und die meisten Zimmer mit Pyramidenblick sind weg. Ein sehr gutes Weihnachten ${SEASON_Y} ist trotzdem möglich, und binnen eines Werktages wissen Sie, welches.`,
  },
  last: {
    eyebrow: `Noch ${DAYS_OUT} Tage`,
    heading: "Das ist spät — und wir sagen das auch",
    line: `Wir sehen nach und sagen Ihnen offen, was es noch gibt. Wenn Ihre Termine aber um zwei Wochen verschiebbar sind: Mitte Januar ist dasselbe Wetter zu deutlich weniger Geld.`,
  },
  live: {
    eyebrow: "Die Festtage laufen gerade",
    heading: "Diese Termine sind vergeben — die Wochen danach nicht",
    line: `Ab etwa dem ${de(EASES)} entfällt der Feiertagszuschlag, und am Wetter ändert sich nichts: ${jan.temps.luxor} in Luxor, ${jan.temps.cairo} in Kairo, dasselbe klare Licht.`,
  },
};

// --- the page ---------------------------------------------------------------
export const weihnachtenLanding: LandingPage = {
  ui: {
    seeJourneys: "Die Reisen ansehen",
    journeysEyebrow: "Reisen",
    assurancesHeading: "Wie es weitergeht",
    detailEyebrow: "Ausführlich",
    otherLanguagesLabel: "Auch geschrieben für",
    form: {
      nameLabel: "Ihr Name *",
      emailLabel: "E-Mail *",
      phoneLabel: "Telefon / WhatsApp",
      datesLabel: "Reisezeitraum",
      messageLabel: "Ihre Nachricht *",
      partyLabel: "Wer reist",
      paceLabel: "Tempo",
      priorityLabel: "Was zählt mehr",
      chooseLabel: "Bitte wählen, wenn Sie mögen",
      partyOptions: [
        "Wir zwei",
        "Familie mit Kindern",
        "Drei Generationen oder ältere Reisende",
        "Eine private Gruppe",
        "Nur ich",
      ],
      paceOptions: [
        "Ruhig — später Start, weniger Stationen am Tag",
        "Ausgewogen",
        "Volle Tage — so viel wie möglich",
      ],
      priorityOptions: [
        "Komfort zuerst",
        "Komfort und Preis im Gleichgewicht",
        "Den Preis niedrig halten",
      ],
      submit: "Anfrage senden",
      sending: "Wird gesendet…",
      okNote: "Vielen Dank — Ihre Nachricht ist angekommen. Wir antworten innerhalb eines Werktages.",
      errNote:
        "Da ist etwas schiefgelaufen und die Nachricht wurde nicht gesendet. Bitte prüfen Sie Name, E-Mail und Nachricht — oder schreiben Sie uns stattdessen auf WhatsApp.",
      honeypotLabel: "Website",
    },
  },

  eyebrow: `${DATES} · private Reisen`,
  h1: `Weihnachten und Silvester in Ägypten ${SEASON_Y}`,
  // The hero of the page itself already carries the German standfirst; this
  // one replaces it on the landing layer and is deliberately shorter.
  standfirst:
    `Zu Hause ist es um vier Uhr dunkel. Luxor liegt bei ${dec.temps.luxor}, am ${de(NYE)} liegt die Nilflotte gemeinsam vor Anker — und privat heißt hier: Ihre Gruppe, Ihr Ägyptologe, Ihr Tempo.`,
  ctaLabel: "Termine anfragen",

  facts: [
    { label: "Luxor tagsüber", value: dec.temps.luxor },
    { label: "Kairo tagsüber", value: dec.temps.cairo },
    { label: "Rotes Meer", value: dec.seaTemp },
    { label: "Am 25. Dezember", value: "Alles geöffnet" },
    { label: "Flugzeit", value: "4 Std., +1 Std." },
    { label: "Private Reisen ab", value: eur(FROM_PRICE) },
  ],

  moments: [
    {
      date: `${EVE.getUTCDate()}. – ${de(XMAS)}`,
      title: "Weihnachten an den Pyramiden",
      line: "In Ägypten kein Feiertag. Das Plateau hat ganz normal geöffnet.",
    },
    {
      date: de(NYE),
      // Not "Silvester auf dem Nil" — the page's own third section is already
      // called that, and two identical h2s on one page is a navigation dead
      // end for anyone reading by headings.
      title: "Silvester an Deck",
      line: "Die Flotte liegt gemeinsam vor Luxor oder Edfu. Dinner unter freiem Himmel.",
    },
    {
      date: `1. – ${de(EPIPH)}`,
      title: "Die Tempel im Winterlicht",
      line: `${dec.temps.luxor} in Luxor, tiefe Sonne, die klarste Luft des Jahres.`,
    },
    {
      date: de(COPTIC),
      title: "Koptische Weihnacht, Alt-Kairo",
      line: "Mitternachtsliturgie in der Hängenden Kirche. Gäste sind willkommen.",
    },
  ],

  window: WINDOWS[STAGE],

  journeys: JOURNEY_SLUGS.map((id) => ({ domain: "tour" as const, id })),
  journeysIntro: {
    heading: "Reisen, die über die Feiertage funktionieren",
    text:
      `Privat, nur Ihre Gruppe, und auf Ihre Termine anpassbar. Preise pro Person in der Normalsaison — der Zuschlag für ${PEAK} wird im Angebot getrennt ausgewiesen.`,
  },

  form: {
    heading: STAGE === "live"
      ? "Sagen Sie uns Ihre Termine"
      : `Ihre Termine für ${SEASON_Y}/${String(SEASON_Y + 1).slice(2)}`,
    subtext:
      `Antwort innerhalb eines Werktages, mit ausgewiesenem Preis und ohne Verpflichtung${
        STAGE === "late" || STAGE === "last"
          ? " — und wenn die ehrliche Antwort lautet, dass die Termine nicht mehr funktionieren, sagen wir das"
          : ""
      }.`,
    datesPlaceholder: `z. B. ${de(PEAK_FROM)} bis ${de(PEAK_TO)}, oder flexibel`,
    messagePlaceholder:
      "Personenzahl, ob Silvester auf dem Nil Priorität hat, und ob die Termine verschiebbar sind.",
  },

  // The same four promises the English page makes, with the figures read from
  // the booking terms rather than translated out of the English sentences.
  assurances: [
    "Reisezeitraum und Personenzahl genügen. Wir antworten innerhalb eines Werktages mit einer ersten Einschätzung und Rückfragen — kostenlos und unverbindlich.",
    `${TERMS.depositPercent} % des Reisepreises bestätigen die Buchung und werden auf den Endbetrag angerechnet. Der Rest ist ${TERMS.balanceDays} Tage vor Abreise fällig.`,
    // Said out loud only when it actually bites. At four months out the
    // applicable tier is the mildest one and printing it reads as a deadline
    // where there is none; inside six weeks it is the single thing a German
    // reader most needs to see before they commit, so it is on the card and
    // not buried in the terms.
    ...(STAGE === "last" || STAGE === "live"
      ? [`Stornierung bei einer jetzt bestätigten Buchung: ${tierText} (${tierWhen}).`]
      : []),
    "Überweisung oder Kreditkarte. Preise pro Person in Euro, aufgeschlüsselt, mit klar benannten Leistungen — enthalten und nicht enthalten.",
    "Nur Ihre Gruppe, durchgehend mit privatem Ägyptologen und eigenem Fahrzeug. Kein Sammelbus, kein Anschluss an eine Gruppe am Eingang.",
  ],

  // No `detail` here on purpose: de/weihnachten-in-aegypten.html already
  // carries four long sections, a highlights panel and four FAQs in German,
  // all of them below this run. See the header of this file.

  otherLanguages: [
    { route: "collections/christmas-new-year-egypt.html", label: "Christmas & New Year in Egypt", lang: "en" },
    { route: "ru/novyy-god-v-egipte.html", label: "Новый год в Египте", lang: "ru" },
  ],
};
