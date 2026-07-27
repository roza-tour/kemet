// ---------------------------------------------------------------------------
// /sitemap-images.xml — an image sitemap, generated from the content data.
//
// WHY: travel is the most visual category on the web and Google Images is a
// large, language-independent traffic source — a photograph of Abu Simbel is
// equally findable by someone searching in Portuguese, Japanese or Arabic.
// Until now the site had no image sitemap and no ImageObject markup, so a
// substantial library of original photography was effectively invisible.
//
// Every entry carries the page the image belongs to plus its caption and
// title, taken from the same alt text the page renders — so the sitemap can
// never describe an image differently from the page it sits on.
//
// Referenced from robots.txt as a second `Sitemap:` directive (the standard
// way to declare more than one sitemap) alongside the page sitemap index.
// ---------------------------------------------------------------------------
import type { APIRoute } from "astro";
import { SITE_URL } from "@/config/site";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { guides } from "@/data/guides";
import { collections } from "@/data/collections";
import { activities } from "@/data/activities";

interface Img {
  /** Absolute image URL. */
  loc: string;
  /** Caption — the image's own alt text. */
  caption?: string;
  /** Short title/label. */
  title?: string;
}

/** XML-escape a text node. */
const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const abs = (src: string) => (src.startsWith("http") ? src : `${SITE_URL}${src}`);

/** Collect the images that belong to one page, de-duplicated by URL. */
function imagesOf(...sets: Array<{ src?: string; alt?: string; label?: string } | undefined>): Img[] {
  const out: Img[] = [];
  const seen = new Set<string>();
  for (const m of sets) {
    if (!m?.src) continue;
    const loc = abs(m.src);
    if (seen.has(loc)) continue;
    seen.add(loc);
    out.push({ loc, caption: m.alt, title: m.label });
  }
  return out;
}

export const GET: APIRoute = () => {
  const entries: Array<{ page: string; images: Img[] }> = [];

  const add = (page: string, images: Img[]) => {
    if (images.length) entries.push({ page, images });
  };

  for (const t of tours) {
    add(`${t.slug}.html`, imagesOf(t.hero, ...(t.gallery ?? [])));
  }
  for (const d of destinations) {
    add(`destinations/${d.slug}.html`, imagesOf(d.hero, ...(d.gallery ?? [])));
  }
  for (const e of experiences) {
    add(`experiences/${e.slug}.html`, imagesOf(e.hero, ...(e.gallery ?? [])));
  }
  for (const g of guides) {
    add(`guides/${g.slug}.html`, imagesOf(g.hero, ...(g.gallery ?? [])));
  }
  for (const c of collections) {
    add(`collections/${c.slug}.html`, imagesOf(c.hero, ...(c.gallery ?? [])));
  }
  for (const a of activities) {
    if (!a.slug) continue;
    add(`activities/${a.slug}.html`, imagesOf(a.image));
  }

  // Photographs placed directly in a page template rather than coming from a
  // content record. Kept explicit and short — if this list grows, the image
  // belongs in the data instead.
  //
  // Deliberately excluded: the brand logo (not editorial content) and the
  // customer gallery. Our travellers agreed to their photographs appearing on
  // this site; that is not the same as us actively submitting their faces to a
  // global image index, so we don't.
  const pageImages: Array<[string, string, string]> = [
    ["destinations.html", "/images/alexandria/alexandria-corniche-bay.webp",
      "The Mediterranean corniche sweeping around the bay at Alexandria"],
    ["contact.html", "/images/alexandria/alexandria-stanley-bridge.webp",
      "The Stanley Bridge arching over the Mediterranean at Alexandria"],
    ["identities.html", "/images/alexandria/coptic-cathedral-alexandria.webp",
      "The twin bell towers of a Coptic Orthodox cathedral in Alexandria"],
    ["about.html", "/images/cairo/cairo-sultan-hassan-mosque-aerial.webp",
      "The historic mosques of Cairo from above, with the Giza pyramids on the horizon"],
  ];
  for (const [page, src, alt] of pageImages) {
    add(page, imagesOf({ src, alt }));
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries.map(({ page, images }) =>
      [
        "  <url>",
        `    <loc>${SITE_URL}/${page}</loc>`,
        ...images.map((i) =>
          [
            "    <image:image>",
            `      <image:loc>${esc(i.loc)}</image:loc>`,
            ...(i.caption ? [`      <image:caption>${esc(i.caption)}</image:caption>`] : []),
            ...(i.title ? [`      <image:title>${esc(i.title)}</image:title>`] : []),
            "    </image:image>",
          ].join("\n"),
        ),
        "  </url>",
      ].join("\n"),
    ),
    "</urlset>",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
