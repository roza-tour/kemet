// ---------------------------------------------------------------------------
// Booking, payment & cancellation terms — the single source of truth for the
// /booking.html page. Rendered by src/pages/booking.astro; no figures are
// hardcoded in the page markup.
//
// ⚠️ DRAFT TERMS — CONFIRM BEFORE PUBLISHING
// The specific figures below (deposit %, balance due window, cancellation
// tiers, accepted payment methods) are sensible luxury-travel defaults, NOT
// confirmed Kemet policy. Review every value with the business and adjust to
// the real terms before this page is deployed. Following the project's
// integrity standard, nothing here should go live as a factual claim until
// verified. Currency mirrors the site (EUR).
// ---------------------------------------------------------------------------

export interface CancellationTier {
  /** Human window, e.g. "45+ days before departure". */
  window: string;
  /** What the traveller pays / forfeits in that window. */
  charge: string;
}

export interface BookingStep {
  step: number;
  heading: string;
  body: string;
}

export interface BookingTerms {
  /** Ordered enquiry → confirmation → travel flow. */
  steps: BookingStep[];
  /** Deposit required to confirm a booking (draft). */
  deposit: { label: string; note: string };
  /** When the remaining balance falls due (draft). */
  balance: { label: string; note: string };
  /** Accepted payment methods (draft — company.paymentMethods is empty). */
  paymentMethods: string[];
  /** Traveller-initiated cancellation schedule (draft). */
  cancellationTiers: CancellationTier[];
  /** Amendments, insurance, operator-side cancellation, force majeure. */
  policies: { heading: string; body: string }[];
}

export const bookingTerms: BookingTerms = {
  steps: [
    {
      step: 1,
      heading: "Enquire — free and without obligation",
      body: "Send us your dates, interests and party size. We reply within one business day with an initial assessment and any questions. There is no charge and no commitment at this stage.",
    },
    {
      step: 2,
      heading: "Receive and refine your proposal",
      body: "We design a private itinerary with a fully itemised quote — what is included and excluded, priced per person in euros. We revise it with you until it is exactly right.",
    },
    {
      step: 3,
      heading: "Confirm with a deposit",
      body: "When you are happy, a deposit confirms your journey and lets us begin securing hotels, guides, cruises and permits in your name.",
    },
    {
      step: 4,
      heading: "Settle the balance before you travel",
      body: "The remaining balance is due ahead of departure. Once settled, we issue your final documents, day-by-day programme and named point of contact.",
    },
  ],

  // DRAFT — confirm the real deposit percentage.
  deposit: {
    label: "25% of the total trip cost",
    note: "Payable to confirm your booking. It is applied to your final balance, not an additional charge.",
  },

  // DRAFT — confirm the real balance-due window.
  balance: {
    label: "Due 30 days before departure",
    note: "For bookings made within 30 days of departure, the full amount is payable at the time of confirmation.",
  },

  // DRAFT — company.paymentMethods is currently empty; confirm accepted methods.
  paymentMethods: ["Bank transfer", "Major credit & debit cards"],

  // DRAFT — confirm the real cancellation schedule.
  cancellationTiers: [
    { window: "45+ days before departure", charge: "Deposit only" },
    { window: "30–44 days before departure", charge: "50% of the total trip cost" },
    { window: "15–29 days before departure", charge: "75% of the total trip cost" },
    { window: "Under 15 days before departure", charge: "100% of the total trip cost" },
  ],

  policies: [
    {
      heading: "Changes to your booking",
      body: "We accommodate amendments wherever possible. Some changes — particularly to flights, cruises or peak-season hotels — may carry supplier charges, which we always confirm with you before proceeding.",
    },
    {
      heading: "Travel insurance",
      body: "Comprehensive travel insurance covering medical care, cancellation and repatriation is strongly recommended for every traveller and should be arranged as soon as your booking is confirmed.",
    },
    {
      heading: "If we have to change or cancel",
      body: "If circumstances beyond our control require a change, we will always offer the closest possible alternative or a fair refund of amounts not already committed to suppliers on your behalf.",
    },
    {
      heading: "Circumstances beyond control (force majeure)",
      body: "Neither party is liable for events outside reasonable control — such as extreme weather, civil disruption or travel restrictions. In such cases we work with you to reschedule or recover as much value as possible.",
    },
  ],
};
