// The site's glyph library — identity symbols, pharaonic gods, friezes and
// craft markers. One 0 0 100 100 viewBox each, painted with the site-wide gold
// gradient `url(#gs)` (defined once per page by SvgDefs) plus a literal gold
// stroke, so they need no per-instance styling.
//
// The bodies live here, not in SymbolIcon.astro, because SvgDefs has to emit
// them as <symbol> definitions and SymbolIcon only references them. Writing
// each glyph into every place it appears cost the site 2.6MB: the home page
// alone drew 106 icons from 19 distinct shapes, and the FAQ drew 127.

// THE STYLE (October 2026). The first set was solid silhouettes with round
// caps — clip-art, and the owner said so: "cartoonish". These are drawn the way
// Egyptian goldwork is made: a gold contour, a faint gold body so the form still
// reads at 19px inside a medallion, and fine incised lines inside it — the
// cloisonné partitions of a pectoral, the grooves of a carved relief. The forms
// follow the actual hieroglyphs (the wedjat's teardrop and spiral, the recumbent
// jackal on its shrine, the standing falcon, the scarab with its sun disc).
//
//   B — body: contour + faint fill.   L — incised detail line.   S — bare stroke.
const B = `fill="url(#gs)" fill-opacity=".2" stroke="url(#gs)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
const L = `fill="none" stroke="url(#gs)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"`;
const S = `fill="none" stroke="url(#gs)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`;
const rays = (n: number, r0: number, rL: number, rS: number) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i * 2 * Math.PI) / n - Math.PI / 2;
    const r1 = i % 2 ? rS : rL;
    const p = (r: number) => `${(50 + Math.cos(a) * r).toFixed(1)} ${(50 + Math.sin(a) * r).toFixed(1)}`;
    return `<path d="M${p(r0)} L${p(r1)}" stroke-width="${i % 2 ? 1.7 : 3}"/>`;
  }).join("");
const star8 = (cx: number, cy: number, R: number, r: number) =>
  "M" + Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    const rr = i % 2 ? r : R;
    return `${(cx + Math.cos(a) * rr).toFixed(1)} ${(cy + Math.sin(a) * rr).toFixed(1)}`;
  }).join(" L") + "Z";

export const GLYPHS: Record<string, string> = {
  ankh: `<path ${B} fill-rule="evenodd" d="M50 7C38 7 31 16 31 27c0 10 8 18 19 22 11-4 19-12 19-22C69 16 62 7 50 7ZM50 15c-6 0-10 5-10 12 0 6 4 11 10 14 6-3 10-8 10-14 0-7-4-12-10-12Z"/>
    <path ${B} d="M18 47 46 51h8l28-4v15l-28-4h-8l-28 4Z"/>
    <path ${B} d="M46 58h8l5 34H41Z"/>
    <path ${L} d="M24 54.5h52M50 63v24"/>`,

  sun: `<circle cx="50" cy="50" r="17" ${B}/>
    <circle cx="50" cy="50" r="11" ${L}/>
    <circle cx="50" cy="50" r="4" fill="url(#gs)"/>
    <g fill="none" stroke="url(#gs)" stroke-linecap="round">${rays(16, 23, 39, 31)}</g>`,

  cross: `<path ${B} d="M44 44 40 11q10 4 20 0l-4 33 33-4q-4 10 0 20l-33-4 4 33q-10-4-20 0l4-33-33 4q4-10 0-20Z"/>
    <circle cx="50" cy="50" r="6.5" ${L}/>
    <path ${L} d="M50 17v20M50 63v20M17 50h20M63 50h20"/>`,

  crescent: `<path ${B} d="M65.2 24.7A33 33 0 1 0 65.2 75.3 28.4 28.4 0 1 1 65.2 24.7Z"/>
    <path fill="url(#gs)" stroke="url(#gs)" stroke-width="1.4" stroke-linejoin="round" d="${star8(63, 50, 10, 5.5)}"/>`,

  camel: `<path ${B} stroke-width="2.6" d="M12 52 C12 47 16 44 21 44 C24 34 32 28 41 28 C50 28 56 34 58 42 C62 43 66 41 69 37 L74 26 C76 21 80 18 85 18 C88 18 90 19 92 21 L95 25 L90 27 C88 28 87 30 86 33 L82 46 C80 52 76 56 72 58 L74 84 L69 84 L66 62 L62 62 L62 84 L57 84 L55 62 C48 63 40 63 34 61 L33 84 L28 84 L27 60 L24 59 L22 84 L17 84 L17 57 C14 56 12 54 12 52 Z"/>
    <path ${L} d="M26 40 C34 46 48 47 56 43 M24 47 C34 53 50 54 58 49"/>
    <path ${L} d="M28 50v6M36 52v7M44 53v7M52 52v6"/>
    <path ${S} stroke-width="2" d="M13 50 C9 52 8 58 9 63"/>
    <circle cx="86" cy="23" r="1.4" fill="url(#gs)"/>`,

  greco: `<path ${B} d="M20 14h60v7H20Z"/>
    <path ${B} d="M27 21h46c-2 5-6 8-11 8H38c-5 0-9-3-11-8Z"/>
    <path ${L} d="M30 23a4 4 0 1 0 6 3M70 23a4 4 0 1 1-6 3"/>
    <path ${B} d="M33 30h34l-2 50H35Z"/>
    <path ${L} d="M41 33v44M50 33v44M59 33v44"/>
    <path ${B} d="M29 80h42v6H29Z"/>
    <path ${B} d="M22 86h56v7H22Z"/>`,

  palm: `<path ${B} stroke-width="2.6" d="M47 92 48.5 46h3L53 92Z"/>
    <path ${L} d="M48 52l4 4M48 60l4 4M48 68l4 4M48 76l4 4M48 84l4 4M52 52l-4 4M52 60l-4 4M52 68l-4 4M52 76l-4 4"/>
    <g ${S} stroke-width="2.6">
      <path d="M50 44C40 30 27 27 14 30"/><path d="M50 44C60 30 73 27 86 30"/>
      <path d="M50 44C44 28 44 18 49 9"/><path d="M50 44C38 38 27 40 19 47"/><path d="M50 44C62 38 73 40 81 47"/>
    </g>
    <g ${L}>
      <path d="M40 35l-3 6M33 31l-2 6M25 30l-1 6M60 35l3 6M67 31l2 6M75 30l1 6M46 28l-5 2M45 20l-5 1M37 41l-1 6M29 41l0 6M63 41l1 6M71 41l0 6"/>
    </g>
    <circle cx="44" cy="50" r="2.2" fill="url(#gs)"/><circle cx="40" cy="54" r="2.2" fill="url(#gs)"/><circle cx="56" cy="50" r="2.2" fill="url(#gs)"/><circle cx="60" cy="54" r="2.2" fill="url(#gs)"/>`,

  fish: `<path ${B} d="M10 50C22 34 44 30 62 34c8 2 14 6 18 11l12-9c-2 9-2 19 0 28l-12-9c-4 5-10 9-18 11C44 70 22 66 10 50Z"/>
    <path ${L} d="M26 38c6-7 16-11 26-11l-4 6M34 64l-4 7 10-4"/>
    <path ${L} d="M40 44a5 5 0 0 0 0 8M48 42a6 6 0 0 0 0 12M56 42a6 6 0 0 0 0 12M64 43a5 5 0 0 0 0 10"/>
    <circle cx="23" cy="47" r="2.6" fill="url(#gs)"/>
    <path ${L} d="M30 44c2 4 2 8 0 12"/>`,

  eye: `<path ${B} d="M14 28c18-10 46-12 70-6l-1 6c-23-5-49-3-68 6Z"/>
    <path ${B} d="M14 46C24 36 36 33 48 33s24 4 32 11l10-1-9 4c-8 7-20 10-33 10S24 54 14 46Z"/>
    <circle cx="47" cy="45" r="8.5" fill="url(#gs)"/>
    <path ${S} stroke-width="3.4" d="M40 57 33 86"/>
    <path ${S} stroke-width="3.4" d="M57 57c5 10 9 16 7 23-2 6-10 7-11 1-1-4 3-6 6-4"/>`,

  scarab: `<circle cx="50" cy="13" r="8" fill="url(#gs)"/>
    <path ${B} d="M41 28c0-5 4-7 9-7s9 2 9 7l-3 3H44Z"/>
    <path ${B} d="M33 34c2-3 9-4 17-4s15 1 17 4l-2 9H35Z"/>
    <path ${B} d="M35 45h30c3 8 4 18 2 27-3 9-9 14-17 14s-14-5-17-14c-2-9-1-19 2-27Z"/>
    <path ${L} d="M50 45v40M40 52c-2 6-2 14 0 20M60 52c2 6 2 14 0 20"/>
    <g ${S} stroke-width="2.4">
      <path d="M34 38 24 33 16 37M66 38l10-5 8 4"/>
      <path d="M34 54H20l-7 6M66 54h14l7 6"/>
      <path d="M38 72l-10 6-4 9M62 72l10 6 4 9"/>
    </g>`,

  anubis: `<path ${B} d="M12 72h78v18H12Z"/>
    <path ${L} d="M12 77h78M18 84h66"/>
    <path ${B} stroke-width="2.6" d="M20 72C18 62 22 55 32 54L54 50C58 49 60 46 61 42L62 31 63 12 67 27 69 10 72 27C77 29 83 32 88 35 89 36 89 38 87 38L76 40C73 42 72 46 72 52 72 58 74 62 78 64L90 67C92 68 92 72 90 72Z"/>
    <path ${L} d="M60 44c3 3 7 4 11 3M64 18l1.5 8M68.5 16l1.5 9"/>
    <path ${S} stroke-width="2.2" d="M21 62c-6 2-8 10-7 24"/>
    <circle cx="74" cy="31" r="1.5" fill="url(#gs)"/>`,

  horus: `<path ${B} stroke-width="2.6" d="M48 20C50 13 56 10 62 11 68 12 72 16 74 20L78 23C79 24 78 26 76 26H73C73 30 72 33 70 36L68 70 60 76H44L30 90 24 86 36 72C36 56 40 36 48 20Z"/>
    <path ${L} d="M53 27C46 38 42 54 41 70M60 32C56 42 54 56 54 70M47 46l6 2M45 56l8 2"/>
    <path ${L} d="M50 76v12M58 76v12M44 90h22"/>
    <circle cx="64" cy="19" r="2" fill="url(#gs)"/>
    <path ${L} d="M64 22l-4 9"/>`,

  boat: `<path ${B} d="M50 9 47 64 79 58Z"/>
    <path ${L} d="M49 20 60 59M48.5 33 69 58M48 47 75 58"/>
    <path ${S} stroke-width="2.4" d="M50 6v62M42 12l18-6"/>
    <path ${B} d="M10 66h80l-8 13a9 9 0 0 1-7 4H25a9 9 0 0 1-7-4Z"/>
    <path ${L} d="M16 72h68"/>
    <path ${L} d="M8 90q10 5 19 0t19 0q10 5 19 0t19 0"/>`,

  scales: `<path ${B} d="M48 22h4v60h-4Z"/>
    <path ${B} d="M34 82h32l4 8H30Z"/>
    <path ${S} d="M16 30q34-6 68 0"/>
    <path ${L} d="M18 30l-8 18M18 30l8 18M82 30l-8 18M82 30l8 18"/>
    <path ${B} d="M6 48h24a12 7 0 0 1-24 0ZM70 48h24a12 7 0 0 1-24 0Z"/>
    <path ${B} stroke-width="2" d="M50 21c-2-6-1-12 3-17 2 5 2 11-3 17Z"/>
    <path ${L} d="M51 18c1-3 1-6 2-9"/>`,

  lotus: `<path ${B} d="M50 88C44 76 42 60 50 38c8 22 6 38 0 50Z"/>
    <path ${B} d="M50 86C40 78 33 64 33 46c12 8 18 22 17 40Z"/>
    <path ${B} d="M50 86C60 78 67 64 67 46c-12 8-18 22-17 40Z"/>
    <path ${B} d="M48 86C32 84 19 72 14 56c16 2 28 12 34 30Z"/>
    <path ${B} d="M52 86c16-2 29-14 34-30-16 2-28 12-34 30Z"/>
    <path ${L} d="M50 46v34M40 58c2 8 5 16 9 24M60 58c-2 8-5 16-9 24"/>
    <path ${S} stroke-width="2.4" d="M50 88v6"/>`,
};
