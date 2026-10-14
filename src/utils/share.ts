// ---------------------------------------------------------------------------
// Share images — the picture WhatsApp, Facebook, X and LinkedIn show when a
// page is shared.
//
// Until 14 Oct 2026, 294 of 338 pages shared one generic card (/og.jpg), and
// the few that named a photograph pointed at a WebP of whatever size it was
// while declaring a 1200×630 JPEG — which some platforms crop badly or drop.
//
// Now every page shares its own lead photograph: the one a page names, or else
// the first real photograph in its body. scripts/og-images.mjs (run after each
// build) turns each into /og/<same path>.jpg — 1200×630, the shape every
// platform expects, with the Kemet mark in the corner. A page with no
// photograph at all keeps the generic card.
//
// Two kinds of picture are never used: decorative ones (empty alt), and
// borrowed ones whose licence asks for a credit (data/photoCredits.ts) — the
// credit travels with the photo on our page, but a share card has nowhere to
// carry it.
// ---------------------------------------------------------------------------
import { creditFor } from "@/data/photoCredits";

export interface SharePhoto {
  /** Site-relative path of the 1200×630 JPEG, e.g. "/og/giza/x.jpg". */
  src: string;
  alt: string;
}

/** "/images/giza/x.webp" → "/og/giza/x.jpg"; anything else is not ours to convert. */
export function ogPathFor(src: string): string | undefined {
  const m = /^\/images\/(?!brand\/)(.+)\.webp$/.exec(src);
  return m ? `/og/${m[1]}.jpg` : undefined;
}

const decode = (s: string) =>
  s.replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

/** The first photograph in rendered HTML that can stand for the page. */
export function leadPhoto(html: string): { src: string; alt: string } | undefined {
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    const src = /\ssrc="([^"]+)"/.exec(tag)?.[1];
    const alt = decode(/\salt="([^"]*)"/.exec(tag)?.[1] ?? "").trim();
    if (!src || !alt || !ogPathFor(src) || creditFor(src)) continue;
    return { src, alt };
  }
  return undefined;
}

/**
 * The share image for a page: the photograph it names, else its lead
 * photograph, converted to its /og/ JPEG. Undefined means the generic card.
 */
export function sharePhotoFor(named: { src?: string; alt?: string }, body: string): SharePhoto | undefined {
  const pick = named.src && ogPathFor(named.src) && !creditFor(named.src)
    ? { src: named.src, alt: named.alt ?? "" }
    : leadPhoto(body);
  const og = pick && ogPathFor(pick.src);
  return og ? { src: og, alt: pick.alt } : undefined;
}
