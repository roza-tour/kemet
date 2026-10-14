// ---------------------------------------------------------------------------
// Share images — run automatically after every build (postbuild).
//
// Each page's <meta property="og:image"> names /og/<path>.jpg, derived from
// the photograph at /images/<path>.webp (src/utils/share.ts). This writes the
// ones that do not exist yet: 1200×630, cropped on the photograph's most
// interesting region, a soft shade along the foot and the Kemet mark in the
// corner, as a progressive JPEG — the format and shape WhatsApp, Facebook,
// X and LinkedIn all read.
//
// They are kept in public/og/ so the next build starts with them (and git
// sees no change when nothing changed), and copied into dist/og/ for this
// one. A card no page names any more is deleted, so the folder never holds
// more than the site uses.
// ---------------------------------------------------------------------------
import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, existsSync, readFileSync, copyFileSync, rmSync } from "node:fs";
import { join, dirname, relative } from "node:path";

const DIST = "dist";
const CACHE = "public/og";
const W = 1200, H = 630;
const MARK = "public/images/brand/kemet-logo-gold.webp";
const OG = /<meta property="og:image" content="https:\/\/kemet-travel\.com\/og\/([^"]+)\.jpg"/;

const pages = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".html")) pages.push(p);
  }
})(DIST);

const wanted = new Set();
for (const p of pages) {
  const m = OG.exec(readFileSync(p, "utf8"));
  if (m) wanted.add(decodeURI(m[1]));
}

// The shade and the mark are the same on every card.
const shade = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">` +
  `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">` +
  `<stop offset="0.55" stop-color="#0B0907" stop-opacity="0"/>` +
  `<stop offset="1" stop-color="#0B0907" stop-opacity="0.62"/>` +
  `</linearGradient></defs><rect width="${W}" height="${H}" fill="url(#g)"/></svg>`,
);
const mark = await sharp(MARK).resize({ height: 92 }).toBuffer();

let made = 0, kept = 0;
for (const path of [...wanted].sort()) {
  const src = join("public/images", `${path}.webp`);
  const out = join(CACHE, `${path}.jpg`);
  if (!existsSync(src)) throw new Error(`og-images: no photograph for /og/${path}.jpg (expected ${src})`);
  if (existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs) kept++;
  else {
    mkdirSync(dirname(out), { recursive: true });
    await sharp(src)
      .resize(W, H, { fit: "cover", position: sharp.strategy.attention })
      .composite([{ input: shade }, { input: mark, left: 44, top: H - 92 - 36 }])
      .jpeg({ quality: 80, progressive: true, mozjpeg: true })
      .toFile(out);
    made++;
  }
  const dest = join(DIST, "og", `${path}.jpg`);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(out, dest);
}

// Drop cards no page uses any more.
let dropped = 0;
if (existsSync(CACHE)) {
  (function sweep(dir) {
    for (const f of readdirSync(dir)) {
      const p = join(dir, f);
      if (statSync(p).isDirectory()) { sweep(p); if (!readdirSync(p).length) rmSync(p, { recursive: true }); continue; }
      const key = relative(CACHE, p).split("\\").join("/").replace(/\.jpg$/, "");
      if (!wanted.has(key)) {
        rmSync(p);
        const d = join(DIST, "og", relative(CACHE, p));
        if (existsSync(d)) rmSync(d);
        dropped++;
      }
    }
  })(CACHE);
}
console.log(`og-images: ${wanted.size} share cards (${made} written, ${kept} unchanged, ${dropped} removed)`);
