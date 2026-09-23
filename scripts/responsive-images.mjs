// ---------------------------------------------------------------------------
// Responsive image variants — run automatically before every build (prebuild).
//
// Every photograph used to ship as one file, usually 1600px wide, to every
// screen. Measured across all 171 pages, the image a reader sees most often is
// a customer-gallery thumbnail drawn 228px wide (156px on a phone), and the next
// is a tour card at 355px — each downloading the full 1600px original. Images
// were 85-90% of every page's weight.
//
// For each photo under public/images this writes smaller copies beside it —
// name-320w.webp, name-480w.webp, name-640w.webp, name-960w.webp — and a
// manifest of which exist, so the pages can offer them in `srcset` and the
// browser can take the smallest one that still has MORE pixels than it will
// draw. The original stays as the largest rung, so nothing is ever upscaled
// and no screen gets fewer pixels than it did before.
//
// Why these four steps: 480 exists because 228px thumbnails on a 2x screen
// need 456 real pixels — without it they would jump to 640 and double in size.
// A 1280 rung was measured and dropped: almost every source is 1280 wide or
// less, so it produced almost nothing.
//
// Idempotent: a variant is only rewritten when its source is newer, and sharp's
// output is deterministic, so a rebuild with no new photos changes no bytes and
// git sees nothing.
// ---------------------------------------------------------------------------
import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, relative, dirname, basename, extname } from "node:path";

const ROOT = "public/images";
const LADDER = [320, 480, 640, 960];
const QUALITY = 82; // a downscale hides compression; 82 is visually lossless here
const VARIANT = /-\d+w\.webp$/;
const MANIFEST = "src/data/generated/image-variants.json";

const sources = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (extname(f) === ".webp" && !VARIANT.test(f)) sources.push(p);
  }
})(ROOT);

const manifest = {};
let written = 0, kept = 0;
for (const src of sources.sort()) {
  const meta = await sharp(src).metadata();
  const srcTime = statSync(src).mtimeMs;
  const widths = [];
  for (const w of LADDER) {
    if (w >= meta.width) continue; // never upscale — the original covers it
    const out = join(dirname(src), `${basename(src, ".webp")}-${w}w.webp`);
    if (existsSync(out) && statSync(out).mtimeMs >= srcTime) { kept++; widths.push(w); continue; }
    await sharp(src).resize({ width: w }).webp({ quality: QUALITY }).toFile(out);
    written++; widths.push(w);
  }
  // key is the public URL the pages already use: "/images/giza/x.webp"
  manifest["/" + relative("public", src).split("\\").join("/")] = { w: meta.width, h: meta.height, v: widths };
}

mkdirSync(dirname(MANIFEST), { recursive: true });
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 0) + "\n");
console.log(`responsive images: ${sources.length} sources · ${written} written · ${kept} up to date`);
