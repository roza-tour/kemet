// ---------------------------------------------------------------------------
// Eclipse Day in Luxor — Monday 2 August 2027.
//
// The one fixed-date, small-group departure Kemet runs (owner, 18 Oct 2026):
// the date is set by the sky, not by us. Four groups of up to twelve, each
// with its own licensed Egyptologist and its own air-conditioned vehicle; a
// day tour, hotel not included. Travellers who want a whole journey around it
// choose 3 days, a week or 10 days in the same form — those are private and
// quoted for their dates.
//
// Times are Egypt's summer time (UTC+3) on 2 August. Totality over Luxor is
// about 13:02–13:08 local, from the same tables as the eclipse guide.
//
// Shown on the eclipse guide and on its nine translations, with the
// registration form, and only until the day itself (beforeDate).
// ---------------------------------------------------------------------------
import { ECLIPSE_2027 } from "@/data/timeboxed";

export const ECLIPSE_DAY = {
  date: ECLIPSE_2027,
  /** Per person, EUR, hotel not included. Lowered from 195 to 149 by the owner, 19 Oct 2026. */
  price: 149,
  groups: 4,
  groupSize: 12,
  capacity: 48,
  /** For the Event schema: pick-up to the end of the felucca, Egypt summer time. */
  start: "2027-08-02T05:45:00+03:00",
  end: "2027-08-02T19:30:00+03:00",
  /** The registration form's choices, in this order. Values are what the
   *  handler (public/contact-handler.php) accepts. */
  plans: ["day", "3days", "week", "10days"] as const,
} as const;

export type EclipsePlan = (typeof ECLIPSE_DAY.plans)[number];

export interface EclipseDayText {
  /** Small caps line above the title. */
  eyebrow: string;
  title: string;
  /** Two or three sentences: what the day is and who it is for. */
  lede: string;
  /** "per person" — follows the formatted price. */
  perPerson: string;
  /** "Hotel not included". */
  hotelNote: string;
  /** "48 places in four groups of up to 12". */
  capacity: string;
  scheduleHeading: string;
  /** [Luxor local time, what happens] — times are the same in every language. */
  schedule: Array<[string, string]>;
  includedHeading: string;
  included: string[];
  excludedHeading: string;
  excluded: string[];
  /** Where the times come from. */
  timesNote: string;
  /** The slim line near the top of the page that jumps to the form. */
  banner: string;
  bannerCta: string;
  form: {
    heading: string;
    intro: string;
    name: string;
    email: string;
    whatsapp: string;
    whatsappHint: string;
    travellers: string;
    plan: string;
    planOptions: Record<EclipsePlan, string>;
    /** Under the choice: what the longer options mean. */
    planNote: string;
    note: string;
    optional: string;
    submit: string;
    sending: string;
    ok: string;
    err: string;
    honeypot: string;
    privacy: string;
  };
}

export const eclipseDayEn: EclipseDayText = {
  eyebrow: "Eclipse Day · Monday 2 August 2027",
  title: "Eclipse Day in Luxor",
  lede:
    "One day planned around six minutes: the Valley of the Kings at opening, a shaded viewing place on the West Bank for totality, a late Egyptian lunch and a felucca at sunset. Small groups of up to 12, each with its own Egyptologist and its own vehicle — the one fixed-date departure we run, because the date is set by the sky.",
  perPerson: "per person",
  hotelNote: "Hotel not included",
  capacity: "48 places in four groups of up to 12",
  scheduleHeading: "The day",
  schedule: [
    ["05:45", "Pick-up from your hotel in Luxor"],
    ["06:00", "The Valley of the Kings at opening, then the Temple of Hatshepsut — before the heat"],
    ["09:00", "Back to your hotel to rest, cool off and eat"],
    ["11:15", "To the viewing place: a reserved, shaded spot on the West Bank beneath the Theban hills"],
    ["11:30", "Cold drinks, certified eclipse glasses, and your Egyptologist on the Sun in ancient Egypt — Ra, Khepri, the Aten and the solar boat"],
    ["≈ 11:50", "The partial eclipse begins"],
    ["13:02–13:08", "Totality — about six minutes and 22 seconds of darkness at midday"],
    ["13:15", "A late Egyptian lunch while the partial phase plays out"],
    ["15:00", "Back to your hotel for the hottest hours"],
    ["18:15", "A felucca on the Nile as the sun goes down"],
  ],
  includedHeading: "Included",
  included: [
    "An air-conditioned vehicle and driver for your group",
    "A licensed Egyptologist for your group of up to 12",
    "Entrance to the Valley of the Kings (standard ticket, three tombs) and the Temple of Hatshepsut",
    "Certified eclipse glasses (ISO 12312-2) for every guest",
    "A reserved, shaded viewing place with seating",
    "Cold drinks and water all day",
    "A late Egyptian lunch",
    "A sunset felucca on the Nile",
  ],
  excludedHeading: "Not included",
  excluded: [
    "Hotel and flights",
    "Tombs on a special ticket (Tutankhamun, Seti I)",
    "Tips",
  ],
  timesNote:
    "Times follow the published eclipse tables for Luxor (totality about 13:02–13:08 local time) and are confirmed for the viewing place.",
  banner: "Eclipse Day in Luxor, 2 August 2027 — a small-group day tour.",
  bannerCta: "Register",
  form: {
    heading: "Register for Eclipse Day",
    intro:
      "Registration is free and there is nothing to pay now. Places are confirmed in the order registrations arrive; we send the payment details on WhatsApp and by email when the programme is final.",
    name: "Full name",
    email: "Email",
    whatsapp: "WhatsApp number",
    whatsappHint: "With your country code, e.g. +44 7700 900123",
    travellers: "Number of travellers",
    plan: "What would you like?",
    planOptions: {
      day: "Eclipse Day only — 2 August",
      "3days": "A 3-day journey around the eclipse",
      week: "A week in Egypt around the eclipse",
      "10days": "10 days in Egypt around the eclipse",
    },
    planNote:
      "The longer journeys are private, built around 2 August and quoted for your dates; hotel rates for eclipse week are quoted from live availability.",
    note: "Anything we should know",
    optional: "optional",
    submit: "Register",
    sending: "Sending…",
    ok: "Thank you — you are registered. We will write to you on WhatsApp and by email.",
    err: "Something went wrong. Please write to us on WhatsApp or at info@kemet-travel.com.",
    honeypot: "Leave this field empty",
    privacy: "We use these details only to arrange your eclipse day.",
  },
};
