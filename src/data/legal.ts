// ---------------------------------------------------------------------------
// Legal content — Privacy Policy and Terms, rendered by src/pages/privacy.astro
// and src/pages/terms.astro.
//
// ⚠️ REVIEW BEFORE RELYING ON THESE. They are professional, GDPR-aware
// templates grounded in how the site actually operates (a contact form that
// emails the site inbox, cPanel hosting, no on-site payment, no advertising
// cookies). They are NOT a substitute for legal advice. Confirm the legal
// entity name, registered address and governing jurisdiction — marked
// "[confirm …]" — with the business (and ideally a lawyer) before publishing.
// ---------------------------------------------------------------------------
import { site } from "@/config/site";

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const CONTACT = site.email; // info@kemet-travel.com

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  intro:
    "This policy explains what personal information Kemet collects when you contact us or use this website, how we use it, and the rights you have over it. We collect as little as possible and never sell it.",
  lastUpdated: "July 2026",
  sections: [
    {
      heading: "Who we are",
      body: [
        `Kemet is a private travel-design company arranging tailor-made journeys in Egypt (the “data controller” for the purposes of this policy). You can reach us about anything in this policy by email at ${CONTACT}.`,
        "[confirm registered legal entity name and address before publishing].",
      ],
    },
    {
      heading: "What we collect",
      body: [
        "When you send us a message through the contact form, we collect the details you choose to provide: your name, email address, and — if you enter them — your phone number, intended travel dates and the content of your message.",
        "Like almost all websites, our server also records standard technical information (such as IP address, browser type and the pages requested) in its logs. We do not use this to identify you personally.",
        "We do not operate user accounts and we do not take payments on this website, so we never collect passwords or card details here.",
      ],
    },
    {
      heading: "How we use your information",
      body: [
        "We use the details from your enquiry solely to reply to you, to understand what you are looking for, and — if you go ahead — to design and arrange your journey. We may contact you by email, phone or WhatsApp using the details you provide.",
        "Our legal basis is your consent and the steps necessary to enter into and perform a travel arrangement at your request. We do not use your information for advertising or automated decision-making.",
      ],
    },
    {
      heading: "Cookies and analytics",
      body: [
        "This website does not use advertising cookies or third-party tracking cookies. It does not build a marketing profile of you.",
        "If we add privacy-respecting analytics or embedded content in future, we will update this policy first.",
      ],
    },
    {
      heading: "Who we share it with",
      body: [
        "We share your information only where it is necessary to answer you or to arrange a trip you have asked us to plan — for example with the hotels, guides, cruise operators or transport providers involved in your specific itinerary.",
        "Our website and email are hosted by our hosting provider, who processes data on our behalf under their own security terms. We never sell, rent or trade your personal information to anyone.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "We keep enquiry correspondence only for as long as needed to assist you and to keep a record of any trip we arrange, after which it is deleted. Where a booking takes place, some records may be kept longer to meet accounting or legal obligations.",
        "You can ask us to delete your information at any time (see “Your rights”).",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "If you are in the EU/EEA, UK or a comparable jurisdiction, you have the right to access the personal information we hold about you, to have it corrected or deleted, to object to or restrict how we use it, and to receive a copy in a portable form.",
        `To exercise any of these rights, email us at ${CONTACT} and we will respond within a reasonable time. You also have the right to complain to your local data-protection authority.`,
      ],
    },
    {
      heading: "Security",
      body: [
        "The site is served over encrypted HTTPS, and we take reasonable technical and organisational measures to protect the information you send us. No transmission over the internet can be guaranteed completely secure, but we work to keep your data safe.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this policy from time to time. The date at the top shows when it was last revised; the current version always lives on this page.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about your privacy or this policy? Email ${CONTACT} and we will be glad to help.`,
      ],
    },
  ],
};

export const termsOfService: LegalDoc = {
  title: "Terms of Use",
  intro:
    "These terms govern your use of the Kemet website and set out the basis on which we provide information and quotes. Please read them alongside our Booking & Cancellation terms, which cover deposits, payment and cancellation for a confirmed trip.",
  lastUpdated: "July 2026",
  sections: [
    {
      heading: "About these terms",
      body: [
        "By using this website you agree to these terms. If you do not agree with them, please do not use the site. They are governed by the laws of Egypt [confirm governing jurisdiction], and any dispute relating to the website will be subject to that jurisdiction.",
      ],
    },
    {
      heading: "Who we are",
      body: [
        `Kemet designs and arranges private, tailor-made travel in Egypt. You can contact us at ${CONTACT}. [confirm registered legal entity name and licence details before publishing].`,
      ],
    },
    {
      heading: "Enquiries, quotes and prices",
      body: [
        "An enquiry or a quote we send you is a proposal, not a confirmed booking. Prices are shown per person in euros and depend on dates, availability, party size and the components of your itinerary.",
        "Prices and availability can change until a booking is confirmed in writing and a deposit is received. We always confirm the final price with you before you commit.",
      ],
    },
    {
      heading: "Bookings, payment and cancellation",
      body: [
        "When you confirm a trip, the deposit, balance and cancellation terms set out on our Booking & Cancellation page apply. Please read that page before confirming.",
      ],
    },
    {
      heading: "Accuracy of website content",
      body: [
        "We take care to keep the information on this site accurate and current, but details such as opening hours, site access, prices and travel conditions can change. Content is provided for general guidance and does not form part of any contract until confirmed in your itinerary.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The text, design, logos and images on this website belong to Kemet or are used with permission, and are protected by copyright. You may not copy, reproduce or reuse them for commercial purposes without our written consent.",
      ],
    },
    {
      heading: "Passports, visas and insurance",
      body: [
        "You are responsible for holding a valid passport and the correct visa for Egypt, and for meeting any health or entry requirements. We can advise, but requirements are set by the authorities and are ultimately your responsibility.",
        "We strongly recommend comprehensive travel insurance covering medical care, cancellation and repatriation for every traveller.",
      ],
    },
    {
      heading: "Third-party suppliers",
      body: [
        "A journey may include services delivered by independent suppliers — hotels, cruise operators, guides and transport providers. We select them with care, but each provides its services under its own terms, and elements outside our reasonable control may occasionally change.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the extent permitted by law, Kemet is not liable for indirect or consequential loss arising from use of this website, or for events beyond our reasonable control. Nothing in these terms limits any liability that cannot lawfully be limited.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        `Questions about these terms? Email ${CONTACT}.`,
      ],
    },
  ],
};
