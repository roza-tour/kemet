// ---------------------------------------------------------------------------
// scripts/audit.mjs — technical SEO / indexability audit.
//
// Run it against the PUBLISHED files at the repo root, which are byte-for-byte
// what the live server serves:
//
//     npm run audit
//
// WHY THIS IS A COMMITTED SCRIPT AND NOT A ONE-OFF
// The findings it produces are only worth anything if they can be reproduced.
// Every check here exists because something was actually wrong at some point,
// or because something is deliberately unusual and a future reader needs to
// know it was a decision rather than an oversight.
//
// EXPECTED FINDINGS — these are correct, do not "fix" them:
//   noindex               404.html only.
//   canonical-not-self    404.html (points at the home page) and the activities
//                         duplicate of the balloon experience, which is
//                         deliberately consolidated onto the experiences page.
//   not-in-sitemap        that same consolidated duplicate. A URL cannot both
//                         be submitted for indexing and point somewhere else.
//   desc-long             ~20 pages sit at 159-168 characters against a 158
//                         target. Google truncates the tail; it does not affect
//                         indexing, and shortening good copy to save one word
//                         is not an improvement. Listed so it stays visible.
//
// A NOTE ON THE CHECKS THEMSELVES
// Three of them were wrong on their first run and reported problems the site
// did not have: an attribute regex that stopped at the apostrophe in "Egypt's",
// an image scan that read <img> tags out of a JavaScript string literal, and a
// path normaliser that turned /de/ into the directory "de" and so declared
// every locale home an orphan. Each is now handled explicitly and commented at
// the point of the fix. If this script reports something surprising, suspect
// the script first — it has been wrong before.
// ---------------------------------------------------------------------------
import { readFileSync, existsSync, statSync } from 'fs';
import { execSync } from 'child_process';

const ROOT = process.cwd();
const SITE = 'https://kemet-travel.com';
const html = execSync(
  `find . -name '*.html' -not -path './node_modules/*' -not -path './.git/*' -not -path './dist/*' -not -path './_audit/*'`,
  { encoding: 'utf8', maxBuffer: 64e6 }
).trim().split('\n').map(f => f.replace(/^\.\//, '')).sort();

const F = {};                       // findings, grouped
const add = (k, v) => (F[k] ||= []).push(v);

// One place that turns any site URL or href into the file that answers it.
// Directory-index pages are the trap: /de/ is served by de/index.html, and a
// naive normaliser both strips the trailing slash and then finds the DIRECTORY
// "de" on disk — so the page looks linked-from-nowhere and self-canonical
// looks wrong. Every path in this audit goes through here.
const toFile = (p) => {
  p = p.replace(/^\/+/, '');
  const parts = [];
  for (const seg of p.split('/')) { if (seg === '..') parts.pop(); else if (seg !== '.' && seg !== '') parts.push(seg); }
  let f = parts.join('/');
  if (f === '') return 'index.html';
  if (existsSync(f) && statSync(f).isDirectory()) return `${f}/index.html`;
  return f;
};
// ...and the URL the site should claim for a given file (the inverse).
const toUrl = (f) => f === 'index.html' ? `${SITE}/`
  : f.endsWith('/index.html') ? `${SITE}/${f.slice(0, -10)}`
  : `${SITE}/${f}`;

/** file path -> canonical URL the site claims for it */
const canonOf = {};
const titles = {}, descs = {};
const pages = {};

for (const f of html) {
  const raw = readFileSync(f, 'utf8');
  // JSON-LD is validated against the raw file; everything else is checked
  // against markup only. Scanning inside <script> made the first run report
  // 193 images with no dimensions — all of them string literals inside the
  // lightbox, none of them images.
  for (const m of raw.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(m[1]); } catch (e) { add('bad-jsonld', `${f}  ${e.message}`); }
  }
  const s = raw.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  pages[f] = s;

  // --- indexability -------------------------------------------------------
  const robots = [...s.matchAll(/<meta[^>]+name=["']robots["'][^>]*>/gi)].map(m => m[0]);
  for (const r of robots) if (/noindex|none/i.test(r)) add('noindex', `${f}  ${r}`);

  // --- canonical ----------------------------------------------------------
  const can = [...s.matchAll(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/gi)].map(m => m[1]);
  if (!can.length) add('no-canonical', f);
  if (can.length > 1) add('multi-canonical', `${f}  ${can.join(' | ')}`);
  if (can[0]) {
    canonOf[f] = can[0];
    if (!can[0].startsWith(SITE)) add('canonical-offsite', `${f}  ${can[0]}`);
    // the canonical must point at a URL this site actually serves
    if (!existsSync(toFile(can[0].replace(SITE, '')))) add('canonical-404', `${f}  →  ${can[0]}`);
    // and it must be self-referential (or an explicit, intended alias)
    if (can[0] !== toUrl(f)) add('canonical-not-self', `${f}  claims  ${can[0]}`);
  }

  // --- title / description / h1 -------------------------------------------
  const t = (s.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]?.trim();
  const d = (s.match(/<meta[^>]+name=["']description["'][^>]*content=(["'])([\s\S]*?)\1/i) || [])[2]?.trim();
  const T = t && t.replace(/&amp;/g,'&').replace(/&#39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/&mdash;/g,'—');
  if (!t) add('no-title', f); else { (titles[T] ||= []).push(f); if (T.length > 65) add('title-long', `${T.length}  ${f}  ${T}`); }
  if (!d) add('no-description', f); else { (descs[d] ||= []).push(f);
    if (d.length > 160) add('desc-long', `${d.length}  ${f}`);
    if (d.length < 70) add('desc-short', `${d.length}  ${f}`); }
  const h1 = [...s.matchAll(/<h1[\s>]/gi)].length;
  if (h1 === 0) add('no-h1', f);
  if (h1 > 1) add('multi-h1', `${f}  ×${h1}`);

  // --- lang ---------------------------------------------------------------
  const lang = (s.match(/<html[^>]+lang=["']([^"']+)["']/i) || [])[1];
  if (!lang) add('no-lang', f);

  // --- images -------------------------------------------------------------
  for (const m of s.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=/.test(m[0])) add('img-no-alt', `${f}  ${m[0].slice(0, 90)}`);
    if (!/\bwidth=/.test(m[0]) || !/\bheight=/.test(m[0])) add('img-no-dims', `${f}  ${m[0].slice(0, 90)}`);
  }

  // --- weight -------------------------------------------------------------
  const kb = statSync(f).size / 1024;
  if (kb > 120) add('page-heavy', `${kb.toFixed(0)}KB  ${f}`);
}

for (const [t, fs] of Object.entries(titles)) if (fs.length > 1) add('dup-title', `${fs.length}×  "${t}"  ${fs.join(', ')}`);
for (const [d, fs] of Object.entries(descs)) if (fs.length > 1) add('dup-desc', `${fs.length}×  ${fs.join(', ')}`);

// --- internal links: every href must resolve ------------------------------
const seen = new Set();
for (const f of html) {
  const dir = f.includes('/') ? f.replace(/\/[^/]*$/, '') : '';
  for (const m of pages[f].matchAll(/<a\b[^>]*href=["']([^"'#?]+)/gi)) {
    let h = m[1];
    if (/^(https?:|mailto:|tel:|javascript:|data:)/i.test(h)) continue;
    const p = toFile(h.startsWith('/') ? h : (dir ? `${dir}/${h}` : h));
    seen.add(p);
    if (!existsSync(p)) add('broken-link', `${f}  →  ${h}`);
  }
}
for (const f of html) if (!seen.has(f) && f !== '404.html') add('orphan', f);

// --- sitemap --------------------------------------------------------------
const smIdx = readFileSync('sitemap-index.xml', 'utf8');
const smFiles = [...smIdx.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(SITE + '/', ''));
const smUrls = new Set();
for (const sf of smFiles) {
  if (!existsSync(sf)) { add('sitemap-file-missing', sf); continue; }
  const x = readFileSync(sf, 'utf8');
  for (const m of x.matchAll(/<loc>([^<]+)<\/loc>/g)) smUrls.add(m[1]);
  if (!/<lastmod>/.test(x)) add('sitemap-no-lastmod', sf);
}
for (const u of smUrls) if (!existsSync(toFile(u.replace(SITE, '')))) add('sitemap-404', u);
// The sitemap library emits the site root as "https://host" with no trailing
// slash while the canonical tag says "https://host/". Those are the SAME URL —
// RFC 3986 normalises an empty path to "/" and every crawler does too — so
// accept both spellings rather than reporting a difference that does not exist.
const inSitemap = (u) => smUrls.has(u) || (u === `${SITE}/` && smUrls.has(SITE));
for (const f of html) {
  if (f === '404.html') continue;
  if (!inSitemap(toUrl(f))) add('not-in-sitemap', f);
}

// --- hreflang reciprocity --------------------------------------------------
const alts = {};
for (const f of html) {
  const a = [...pages[f].matchAll(/<link[^>]+rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi)]
    .map(m => [m[1], m[2]]);
  if (a.length) alts[f] = a;
}
for (const [f, a] of Object.entries(alts)) {
  const self = toUrl(f);
  if (!a.some(([, h]) => h === self)) add('hreflang-not-self', f);
  for (const [tag, href] of a) {
    if (tag === 'x-default') continue;
    const p = toFile(href.replace(SITE, ''));
    if (!existsSync(p)) { add('hreflang-404', `${f}  ${tag} → ${href}`); continue; }
    const back = alts[p];
    if (!back) { add('hreflang-one-way', `${f} → ${p} (${p} declares none)`); continue; }
    if (!back.some(([, h]) => h === self)) add('hreflang-one-way', `${f} → ${p} (no return link)`);
  }
}

// --- report ----------------------------------------------------------------
const order = ['noindex','no-canonical','multi-canonical','canonical-404','canonical-offsite','canonical-not-self',
  'bad-jsonld','broken-link','sitemap-404','sitemap-file-missing','not-in-sitemap','sitemap-no-lastmod',
  'hreflang-404','hreflang-one-way','hreflang-not-self','orphan','no-title','no-description','no-h1','multi-h1',
  'no-lang','dup-title','dup-desc','title-long','desc-long','desc-short','img-no-alt','img-no-dims','page-heavy'];
console.log(`Pages audited: ${html.length}\n`);
let clean = true;
for (const k of order) {
  const v = F[k];
  if (!v?.length) { console.log(`  ok    ${k}`); continue; }
  clean = false;
  console.log(`\n>> ${k.toUpperCase()}  (${v.length})`);
  for (const line of v.slice(0, 12)) console.log(`     ${line}`);
  if (v.length > 12) console.log(`     … ${v.length - 12} more`);
}
if (clean) console.log('\nNo findings.');


console.log("\n" + "=".repeat(72) + "\n");

// Read the locale list from the site's own registry rather than hardcoding it,
// so adding a language never makes this audit report false failures.
const LOCALES = JSON.parse(readFileSync(
  new URL('../src/config/translation-groups.json', import.meta.url), 'utf8')).locales.slice(1);
const html2 = execSync(`find . -name '*.html' -not -path './node_modules/*' -not -path './.git/*' -not -path './dist/*' -not -path './_audit/*'`,
  { encoding: 'utf8', maxBuffer: 64e6 }).trim().split('\n').map(f => f.replace(/^\.\//, '')).sort();
const F2 = {}; const add2 = (k, v) => (F2[k] ||= []).push(v);
const toFile2 = (p) => { p = p.replace(/^\/+/, ''); const parts = [];
  for (const seg of p.split('/')) { if (seg === '..') parts.pop(); else if (seg !== '.' && seg !== '') parts.push(seg); }
  let f = parts.join('/'); if (f === '') return 'index.html';
  if (existsSync(f) && statSync(f).isDirectory()) return `${f}/index.html`; return f; };

const schemaTypes = {};
for (const f of html2) {
  const raw = readFileSync(f, 'utf8');
  const s = raw.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');

  if (!/<meta[^>]+charset=/i.test(s)) add2('no-charset', f);
  if (!/name=["']viewport["']/i.test(s)) add2('no-viewport', f);
  if (!/property=["']og:title["']/i.test(s)) add2('no-og-title', f);
  if (!/property=["']og:image["']/i.test(s)) add2('no-og-image', f);
  if (!/name=["']twitter:card["']/i.test(s)) add2('no-twitter-card', f);

  // mixed content / offsite assets (a strict CSP-free static site should have none)
  for (const m of s.matchAll(/(?:src|href)=["'](http:\/\/[^"']+)["']/gi)) add2('mixed-content', `${f}  ${m[1]}`);

  // heading order
  const hs = [...s.matchAll(/<h([1-6])[\s>]/gi)].map(m => +m[1]);
  for (let i = 1; i < hs.length; i++) if (hs[i] > hs[i - 1] + 1) add2('heading-skip', `${f}  h${hs[i-1]} → h${hs[i]}`);

  // og:image must resolve
  const og = (s.match(/property=["']og:image["'][^>]*content=(["'])([\s\S]*?)\1/i) || [])[2];
  if (og && og.startsWith(SITE) && !existsSync(toFile2(og.replace(SITE, '')))) add2('og-image-404', `${f}  ${og}`);

  // schema coverage
  for (const m of raw.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    const walk = (n) => { if (!n || typeof n !== 'object') return;
      if (Array.isArray(n)) return n.forEach(walk);
      if (n['@type']) [].concat(n['@type']).forEach(t => (schemaTypes[t] ||= new Set()).add(f));
      Object.values(n).forEach(walk); };
    try { walk(JSON.parse(m[1])); } catch {}
  }

  // inline <style> weight — the whole design is inlined, so this is the real payload
  const styleKB = [...raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].reduce((a, m) => a + m[1].length, 0) / 1024;
  if (styleKB > 60) add2('inline-css-heavy', `${styleKB.toFixed(0)}KB  ${f}`);

  // lang vs path
  const lang = (s.match(/<html[^>]+lang=["']([^"']+)["']/i) || [])[1];
  const pref = f.split('/')[0];
  if (LOCALES.includes(pref) && lang !== pref) add2('lang-mismatch', `${f}  lang=${lang}`);
  if (!LOCALES.includes(pref) && lang !== 'en') add2('lang-mismatch', `${f}  lang=${lang}`);
}

// llms.txt links
for (const t of ['llms.txt', 'llms-full.txt']) {
  if (!existsSync(t)) { add2('missing-file', t); continue; }
  const s = readFileSync(t, 'utf8');
  for (const m of s.matchAll(/https:\/\/kemet-travel\.com(\/[^\s)\]]*)/g)) {
    // Strip the fragment and any sentence punctuation the URL was followed by —
    // "…/visa.html." is a link at the end of a sentence, not a path called
    // "visa.html.". The first version of this check reported four such
    // false positives.
    const p = toFile2(m[1].split('#')[0].replace(/[.,;:)]+$/, ''));
    if (!existsSync(p) && !/\.(txt|xml)$/.test(p)) add2('llms-404', `${t}  ${m[0]}`);
  }
}

// image sitemap
if (existsSync('sitemap-images.xml')) {
  const s = readFileSync('sitemap-images.xml', 'utf8');
  const imgs = [...s.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map(m => m[1]);
  for (const u of imgs) if (!existsSync(toFile2(u.replace(SITE, '')))) add2('sitemap-image-404', u);
  console.log(`Image sitemap: ${imgs.length} images`);
}

console.log(`Pages: ${html2.length}\n`);
const keys = ['no-charset','no-viewport','no-og-title','no-og-image','no-twitter-card','og-image-404',
  'mixed-content','heading-skip','lang-mismatch','llms-404','sitemap-image-404','missing-file','inline-css-heavy'];
for (const k of keys) {
  const v = F2[k];
  if (!v?.length) { console.log(`  ok    ${k}`); continue; }
  console.log(`\n>> ${k.toUpperCase()}  (${v.length})`);
  for (const l of v.slice(0, 10)) console.log(`     ${l}`);
  if (v.length > 10) console.log(`     … ${v.length - 10} more`);
}
// --- Market targeting -----------------------------------------------------
// Read back out of the BUILT pages, not out of the source that produced them:
// the question this answers is "what did the site actually ship", and a source
// file cannot answer that. Cross-checked against the entry-requirements pages
// so a market can never be declared while the page for that passport is gone.
{
  const org = (() => {
    const raw = readFileSync('index.html', 'utf8');
    for (const m of raw.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
      try {
        const parsed = JSON.parse(m[1]);
        for (const n of [].concat(parsed)) if (n.audience?.geographicArea) return n;
      } catch {}
    }
    return null;
  })();
  console.log('\nMarket targeting (declared on every page):');
  if (!org) {
    console.log('   >> NONE. The organisation declares no audience.geographicArea.');
  } else {
    const countries = [].concat(org.audience.geographicArea);
    console.log(`   ${countries.length} markets: ` +
      countries.map((c) => c.identifier || c.name).join(' '));
    const noVisaPage = countries.filter((c) => {
      const slug = (c.name || '').toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
      return !existsSync(`visa/${slug}.html`);
    });
    if (noVisaPage.length) {
      console.log('   no entry-requirements page yet: ' +
        noVisaPage.map((c) => c.name).join(', '));
    } else {
      console.log('   every declared market has an entry-requirements page.');
    }
  }
}

console.log('\nSchema types in use:');
for (const [t, fs] of Object.entries(schemaTypes).sort((a,b) => b[1].size - a[1].size))
  console.log(`   ${String(fs.size).padStart(4)}  ${t}`);
