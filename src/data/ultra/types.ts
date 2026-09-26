// The words of the Kemet Ultra page, one object per language. Numbers, hotels
// and photographs are NOT here — they are in journeys.ts and shared by every
// language. Functions receive already-formatted figures so each language puts
// the number where its grammar wants it.
import type { UltraId, PlaceKey, RoomKey } from "./journeys";

export interface UltraDay {
  /** Short heading for the day. */
  t: string;
  /** One sentence: what happens. */
  d: string;
}

export interface UltraJourneyText {
  title: string;
  /** One line under the title: the shape of it. */
  kicker: string;
  /** "Cairo · Luxor · …" */
  route: string;
  body: string;
  /** The things that make this journey what it is — six, shown in two columns. */
  highlights: string[];
  /** Exactly `days` entries. */
  days: UltraDay[];
}

export interface UltraText {
  /** <title>, under ~60 characters. */
  metaTitle: string;
  /** Meta description, under ~160 characters. */
  metaDescription: string;
  keywords: string;
  /** Breadcrumb name of the page. */
  crumb: string;

  heroTag: string;
  /** Two lines; the second is set in gold italic. */
  h1: [string, string];
  lede: string;
  ctaPrimary: string;
  ctaQuiet: string;

  /** The five things only this tier does — one line each, set as gold medallions. */
  signaturesOverline: string;
  signatures: Array<[head: string, sub: string]>;

  /** The four journeys side by side, before the long plates. */
  glanceOverline: string;
  glanceTitle: string;

  question: string;
  /** 40–60 words; receives the formatted figures it quotes. */
  answer: (f: { from2: string; to2: string; from4: string; perDayLow: string; perDayHigh: string }) => string;

  journeysOverline: string;
  journeysTitle: [string, string];

  labels: {
    duration: (days: number, nights: number) => string;
    from: string;
    perPersonTwo: string;
    perPersonFour: (price: string) => string;
    stays: string;
    nights: (n: number) => string;
    /** Link from a glance card down to its journey. */
    view: string;
    dayByDay: string;
    day: string;
    enquire: (title: string) => string;
    priceNote: (peak: number) => string;
  };

  place: Record<PlaceKey, string>;
  room: Record<RoomKey, string>;
  /** Display name for the chartered dahabiya, which has no single hotel name. */
  dahabiya: string;

  journeys: Record<UltraId, UltraJourneyText>;

  standardOverline: string;
  standard: Array<{ title: string; body: string }>;

  faqOverline: string;
  faqs: (f: { from2: string; to2: string; from4: string; to4: string; peak: number }) => Array<{ q: string; a: string }>;

  closeTitle: string;
  closeBody: string;
  closeCta: string;
  closeQuiet: string;

  /** Pre-filled WhatsApp message and email subject/body, in this language. */
  whatsapp: string;
  whatsappJourney: (title: string) => string;
  mailSubject: string;
  mailBody: string;
}
