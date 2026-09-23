// ---------------------------------------------------------------------------
// srcset for the site's photographs.
//
// The variants are written by scripts/responsive-images.mjs (run before every
// build) and listed in data/generated/image-variants.json. This turns that list
// into the `srcset` an <img> offers, so the browser takes the smallest file
// that still has at least as many pixels as it will draw.
//
// `sizes` is the other half, and the half that can go wrong. It tells the
// browser how wide the image will be BEFORE layout, and the browser multiplies
// it by the screen density to pick a file. Too small and it picks a file with
// fewer pixels than the screen shows — a softer photo, which is the one thing
// this change must never do. So every value in SIZES below was MEASURED across
// all 171 built pages at 1440, 1024, 768 and 390px, and each is set at or above
// the widest the image was actually drawn. Erring large costs a few kilobytes;
// erring small costs sharpness.
// ---------------------------------------------------------------------------
import variants from "@/data/generated/image-variants.json";

type Entry = { w: number; h: number; v: number[] };
const MAP = variants as Record<string, Entry>;

/** Every width this photo exists at, smallest first, original last. */
export function srcsetFor(src: string | undefined): string | undefined {
  if (!src) return undefined;
  const e = MAP[src];
  if (!e || e.v.length === 0) return undefined;
  const stem = src.replace(/\.webp$/, "");
  return [...e.v.map((w) => `${stem}-${w}w.webp ${w}w`), `${src} ${e.w}w`].join(", ");
}

/**
 * Measured display widths, per context — every one read off a sweep of all
 * image contexts at every viewport from 320 to 1920px in 20px steps, then
 * checked by a second sweep asserting that the chosen file never has fewer
 * pixels than it draws. The layouts break at 700, ~1010 and 1180px.
 *
 * Where a breakpoint falls BETWEEN two measured widths, the range is given to
 * the larger branch: the gap costs bytes, never sharpness.
 */
export const SIZES = {
  // tour & activity cards: 1 col (vw-50) · 3 col (33.3vw-37) · cap 356
  card: "(max-width: 700px) calc(100vw - 48px), (max-width: 1180px) 34vw, 360px",
  // customer gallery strip: 156 · 198 from 580 · 228 from 840
  thumb: "(max-width: 560px) 160px, (max-width: 820px) 200px, 230px",
  // wide photograph under a page header: vw-48 · vw-60 · cap 1120
  wide: "(max-width: 1180px) calc(100vw - 48px), 1120px",
  // two-up photographs: 1 col (vw-48) · 2 col (50vw-42) · cap 548
  half: "(max-width: 700px) calc(100vw - 48px), (max-width: 1180px) calc(50vw - 40px), 550px",
  // home destination strip: 268 · 318 from 700
  strip: "(max-width: 680px) 270px, 320px",
  // photo beside text (private-hire, identities, vip, home overview):
  // 1 col up to ~1010 (vw-48 / vw-60) · 2 col (50vw-30) · cap 560
  beside: "(max-width: 1020px) calc(100vw - 48px), (max-width: 1180px) calc(50vw - 28px), 560px",
  // home experience mosaic, wide tile: vw-50 · vw-62 · 66.7vw-50 · cap 737
  mosaic: "(max-width: 1020px) calc(100vw - 48px), (max-width: 1180px) calc(66.7vw - 48px), 740px",
  // small inset in the home overview: 64vw-29 · 44vw-26 · 19vw-8 · cap 213
  inset: "(max-width: 700px) 64vw, (max-width: 1020px) 44vw, (max-width: 1180px) 19vw, 220px",
  // full-bleed hero — the viewport
  full: "100vw",
} as const;

export type SizesKey = keyof typeof SIZES;
