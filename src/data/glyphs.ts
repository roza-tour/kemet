// The site's glyph library — identity symbols, pharaonic gods, friezes and
// craft markers. One 0 0 100 100 viewBox each, painted with the site-wide gold
// gradient `url(#gs)` (defined once per page by SvgDefs) plus a literal gold
// stroke, so they need no per-instance styling.
//
// The bodies live here, not in SymbolIcon.astro, because SvgDefs has to emit
// them as <symbol> definitions and SymbolIcon only references them. Writing
// each glyph into every place it appears cost the site 2.6MB: the home page
// alone drew 106 icons from 19 distinct shapes, and the FAQ drew 127.

export const GLYPHS: Record<string, string> = {
  // Pharaonic — key of life
  ankh: `<g fill="none" stroke="url(#gs)" stroke-width="6" stroke-linecap="round">
    <ellipse cx="50" cy="29" rx="14" ry="18"/>
    <path d="M50 47 V88"/>
    <path d="M30 58 H70"/>
  </g>`,
  // Nubian — solar disc with rays
  sun: `<g stroke="url(#gs)" stroke-width="5" stroke-linecap="round">
    <circle cx="50" cy="50" r="15" fill="url(#gs)" stroke="none"/>
    ${Array.from({ length: 12 }, (_, i) => {
      const a = (i * Math.PI) / 6;
      const x1 = 50 + Math.cos(a) * 24, y1 = 50 + Math.sin(a) * 24;
      const x2 = 50 + Math.cos(a) * 36, y2 = 50 + Math.sin(a) * 36;
      return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}"/>`;
    }).join("")}
  </g>`,
  // Coptic — flared equal-armed cross
  cross: `<g fill="url(#gs)">
    <path d="M44 16 H56 V44 H84 V56 H56 V90 H44 V56 H16 V44 H44 Z"/>
    <circle cx="50" cy="14" r="4"/><circle cx="50" cy="92" r="4"/>
    <circle cx="14" cy="50" r="4"/><circle cx="86" cy="50" r="4"/>
  </g>`,
  // Islamic — crescent and star
  crescent: `<g fill="url(#gs)">
    <path d="M70 18a34 34 0 1 0 0 64 27 27 0 1 1 0-64Z"/>
    <path d="M76 38 l4.5 9.2 10.2 1.5-7.4 7.2 1.7 10.1-9-4.8-9 4.8 1.7-10.1-7.4-7.2 10.2-1.5Z"/>
  </g>`,
  // Bedouin · Sinai — camel silhouette
  camel: `<path fill="url(#gs)" d="M12 52 C12 47 16 44 21 44 C24 34 32 28 41 28 C50 28 56 34 58 42 C62 43 66 41 69 37 L74 26 C76 21 80 18 85 18 C88 18 90 19 92 21 L95 25 L90 27 C88 28 87 30 86 33 L82 46 C80 52 76 56 72 58 L74 84 L69 84 L66 62 L62 62 L62 84 L57 84 L55 62 C48 63 40 63 34 61 L33 84 L28 84 L27 60 L24 59 L22 84 L17 84 L17 57 C14 56 12 54 12 52 Z"/>
    <path fill="none" stroke="url(#gs)" stroke-width="2.2" stroke-linecap="round" d="M13 50 C9 52 8 58 9 63"/>
    <circle cx="86" cy="23" r="1.4" fill="#0A0806"/>`,
  // Greco-Roman — classical column
  greco: `<g fill="url(#gs)">
    <path d="M22 18h56v8H22z"/>
    <path d="M26 26h48v6H26z"/>
    <path d="M30 32q20 6 40 0v4q-20 6-40 0z"/>
  </g>
  <g fill="none" stroke="url(#gs)" stroke-width="4">
    <path d="M36 40v40M50 40v40M64 40v40"/>
  </g>
  <g fill="url(#gs)">
    <path d="M30 80h40v6H30z"/>
    <path d="M24 86h52v8H24z"/>
  </g>`,
  // Siwan · Amazigh — palm
  palm: `<g fill="none" stroke="url(#gs)" stroke-width="5" stroke-linecap="round">
    <path d="M50 90V44"/>
    <path d="M50 44C40 30 28 26 16 28M50 44C42 26 40 16 44 10M50 44C58 26 60 16 56 10M50 44C60 30 72 26 84 28M50 44C36 36 26 36 18 42M50 44C64 36 74 36 82 42"/>
  </g>
  <circle cx="50" cy="42" r="5" fill="url(#gs)"/>`,
  // The Red Sea — fish
  fish: `<g fill="url(#gs)">
    <path d="M14 50c10-16 30-24 48-22 8 1 14 4 18 9-4 5-10 8-18 9-18 2-38-6-48-5Z" fill="none" stroke="url(#gs)" stroke-width="5" stroke-linejoin="round"/>
    <path d="M80 37c6-4 11-5 14-4-2 6-2 11 0 17-3 1-8 0-14-4Z"/>
    <circle cx="34" cy="44" r="3.5"/>
  </g>`,
  // Eye of Horus (wedjat)
  eye: `<g fill="none" stroke="url(#gs)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 50c10-12 26-18 42-15 9 2 16 7 22 14-9 5-20 8-32 7C34 55 24 53 16 50Z"/>
    <path d="M22 38c10-8 24-12 38-9"/>
    <path d="M40 60l-6 22"/>
    <path d="M58 60c4 10 1 18-9 20 6-6 6-12 0-16"/>
  </g>
  <circle cx="40" cy="48" r="6" fill="url(#gs)"/>`,
  // Scarab beetle
  scarab: `<g fill="url(#gs)">
    <ellipse cx="50" cy="56" rx="20" ry="26"/>
    <path d="M50 30c-9 0-15 5-15 11 0 4 7 6 15 6s15-2 15-6c0-6-6-11-15-11Z"/>
  </g>
  <g fill="none" stroke="url(#gs)" stroke-width="4" stroke-linecap="round">
    <path d="M50 34V80"/>
    <path d="M30 44 14 36M30 56 12 56M32 70 18 78"/>
    <path d="M70 44 86 36M70 56 88 56M68 70 82 78"/>
  </g>`,
  // Anubis — jackal head
  anubis: `<path fill="url(#gs)" d="M30 8 L40 30 L44 30 L47 9 L53 33 C58 35 62 38 66 41 L88 49 C90 50 90 53 88 54 L67 57 C62 59 59 63 59 68 L62 94 L30 94 C31 84 32 72 32 60 C32 48 29 36 30 8 Z"/>
    <path fill="#0A0806" d="M47 43 C50 40 55 40 58 42 C55 45 50 46 47 43 Z"/>
    <path fill="none" stroke="#0A0806" stroke-width="1.6" stroke-linecap="round" d="M33 16 L39 29"/>`,
  // Horus — falcon head
  horus: `<path fill="url(#gs)" d="M24 42 C25 27 37 16 52 14 C62 13 70 15 76 21 L80 23 C86 26 89 31 89 37 C89 42 86 45 83 47 C83 43 81 41 78 41 C76 47 71 52 65 55 L67 71 C68 81 65 89 62 94 L26 94 C24 82 22 67 23 55 C23 50 23 46 24 42 Z"/>
    <circle cx="62" cy="28" r="4" fill="#0A0806"/>
    <path fill="#0A0806" d="M59.5 33 C58.5 41 56 48 52 54 C57.5 50 61.5 43 62.5 34 Z"/>
    <path fill="none" stroke="#0A0806" stroke-width="1.8" stroke-linecap="round" d="M67 33 C71 34.5 74.5 37 78 40.5"/>`,
  // Nile — a felucca under its lateen sail
  boat: `<g fill="url(#gs)">
    <path d="M50 12 48 66 76 60Z"/>
    <path d="M12 66h76l-9 15a10 10 0 0 1-8 5H29a10 10 0 0 1-8-5Z"/>
  </g>
  <g fill="none" stroke="url(#gs)" stroke-width="4" stroke-linecap="round">
    <path d="M50 12V70"/>
    <path d="M8 90q12 6 21 0t21 0q12 6 21 0t21 0"/>
  </g>`,
  // Maat — the balance, for the pages that weigh a price
  scales: `<g fill="none" stroke="url(#gs)" stroke-width="5" stroke-linecap="round">
    <path d="M50 16v62"/>
    <path d="M20 30h60"/>
    <path d="M34 82h32"/>
    <path d="M8 44a12 12 0 0 0 24 0Z" fill="url(#gs)" stroke="none"/>
    <path d="M68 44a12 12 0 0 0 24 0Z" fill="url(#gs)" stroke="none"/>
    <path d="M20 30v14"/>
    <path d="M80 30v14"/>
  </g>
  <circle cx="50" cy="16" r="5" fill="url(#gs)"/>`,
  // Lotus
  lotus: `<g fill="url(#gs)">
    <path d="M50 86C40 70 38 54 50 36 62 54 60 70 50 86Z"/>
    <path d="M50 84C36 76 28 62 28 44 44 50 52 64 50 84Z"/>
    <path d="M50 84C64 76 72 62 72 44 56 50 48 64 50 84Z"/>
    <path d="M50 82C32 80 18 70 12 54 30 52 46 62 50 82Z" opacity=".75"/>
    <path d="M50 82C68 80 82 70 88 54 70 52 54 62 50 82Z" opacity=".75"/>
  </g>`,
};
