// ---------------------------------------------------------------------------
// Named human expertise behind the written content.
//
// WHY THIS EXISTS
// Every page on this site was, until now, published by a brand and by nobody
// in particular. That is the weakest possible position for two audiences that
// increasingly decide who gets seen:
//
//   · Google's quality systems, which look for demonstrable experience and
//     first-hand expertise before trusting travel advice ("E-E-A-T"), and
//   · generative answer engines — ChatGPT, Perplexity, Gemini, AI Overviews —
//     which quote attributed, checkable statements far more readily than
//     anonymous marketing prose.
//
// A named specialist who reviews the content, is visible on the page, and is
// described in machine-readable form (schema.org Person, linked from the page
// that carries their words) is the single change that addresses both.
//
// ACCURACY RULE — the same one the rest of this codebase follows: nothing here
// is inferred. Every field below is exactly what the business owner supplied.
// Licence numbers, universities, years of experience and specific site
// credentials are deliberately ABSENT rather than guessed; add them only when
// they are confirmed, because a fabricated credential is far worse than a
// missing one.
// ---------------------------------------------------------------------------

export interface Expert {
  /** Stable id, used for the anchor on the About page. */
  id: string;
  name: string;
  /** Short title, as it appears in a byline. */
  role: string;
  /** One line — the byline itself. */
  short: string;
  /** Two or three sentences — the About page block. */
  bio: string;
  /** Nationality, for schema.org Person. */
  nationality: string;
  /** Subject areas this person is a source on (schema.org knowsAbout). */
  knowsAbout: string[];
  /**
   * Public profiles that are verifiably the same person (schema.org sameAs).
   * Supplied by the business owner. One outbound link only, from the About
   * page — the byline on every article points at the About page instead, so
   * a single profile is not linked from 180 pages.
   */
  sameAs: string[];
}

export const experts: Expert[] = [
  {
    id: "mervat-farouk",
    name: "Mervat Farouk",
    role: "Egyptologist guide",
    short: "Egyptian tour guide and specialist in Egyptology",
    bio:
      "Mervat Farouk is an Egyptian tour guide and a specialist in Egyptology. " +
      "She reviews what Kemet publishes about the monuments, the museums and " +
      "the practicalities of travelling in Egypt — so the guidance on this site " +
      "is checked by someone who works these sites in person, not written from " +
      "a desk.",
    nationality: "Egyptian",
    knowsAbout: [
      "Egyptology",
      "Ancient Egyptian history",
      "Pharaonic monuments",
      "Travel in Egypt",
    ],
    sameAs: ["https://www.facebook.com/amatalah.tota"],
  },
];

/** The expert who reviews editorial content. */
export const reviewer: Expert = experts[0];

export function getExpert(id: string): Expert | undefined {
  return experts.find((e) => e.id === id);
}
