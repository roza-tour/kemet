// ---------------------------------------------------------------------------
// Food doodles — hairline drawings of the Egyptian table, for the cuisine
// page's background and its drinks row. Each is drawn on a 100×100 grid as
// strokes only (a menu illustration, not a cartoon): the page colours them,
// sizes them and sets them at low opacity behind the text.
// ---------------------------------------------------------------------------

export type DoodleName =
  | "tea" | "bread" | "beans" | "chilli" | "lemon" | "qidra" | "kunafa"
  | "garlic" | "cezve" | "mint" | "tameya" | "cane" | "karkadeh";

/** A stroke path, or a filled one (dots, seeds). */
export interface DoodlePath { d: string; fill?: boolean }

const r1 = (n: number) => Math.round(n * 10) / 10;

/** A lemon slice: rind, pith and eight segments. */
function lemon(): DoodlePath[] {
  const seg: string[] = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    seg.push(`M50 50 L${r1(50 + Math.cos(a) * 23)} ${r1(50 + Math.sin(a) * 23)}`);
  }
  return [
    { d: "M50 18 A32 32 0 1 1 49.9 18 Z" },
    { d: "M50 25 A25 25 0 1 1 49.9 25 Z" },
    { d: seg.join(" ") },
  ];
}

/** A kunafa nest: shredded pastry wound into a spiral, pistachio at the heart. */
function kunafa(): DoodlePath[] {
  const pts: string[] = [];
  const turns = 3.6, steps = 150;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = t * turns * Math.PI * 2;
    const r = 5 + t * 29 + Math.sin(a * 5) * 1.6;
    pts.push(`${i ? "L" : "M"}${r1(50 + Math.cos(a) * r)} ${r1(50 + Math.sin(a) * r)}`);
  }
  return [
    { d: pts.join(" ") },
    { d: "M47 48 a2.2 2.2 0 1 0 .1 0 Z M53 52 a2 2 0 1 0 .1 0 Z M50 54.5 a1.6 1.6 0 1 0 .1 0 Z", fill: true },
  ];
}

/** Sesame seeds on a ta'meya, or bran on a loaf: small filled grains. */
function grains(list: [number, number, number][]): DoodlePath {
  return {
    d: list.map(([x, y, rot]) => {
      const dx = r1(Math.cos((rot * Math.PI) / 180) * 1.9), dy = r1(Math.sin((rot * Math.PI) / 180) * 1.9);
      return `M${r1(x - dx)} ${r1(y - dy)} L${r1(x + dx)} ${r1(y + dy)}`;
    }).join(" "),
  };
}

export const DOODLES: Record<DoodleName, DoodlePath[]> = {
  // A tea glass on its saucer, mint in it, steam rising
  tea: [
    { d: "M33 34 H67 L62 84 H38 Z" },
    { d: "M35.5 47 H64.5" },
    { d: "M25 88 Q50 96 75 88" },
    { d: "M44 27 q-5 -6 0 -11 q5 -5 0 -10 M55 27 q-5 -6 0 -11 q5 -5 0 -10" },
    { d: "M61 35 q4 -13 18 -14 q-3 12 -18 14 Z M63 33 L75 24" },
  ],
  // Aish baladi: the round loaf, puffed into a pocket
  bread: [
    { d: "M16 54 C16 31 34 18 52 18 C72 18 85 34 84 54 C83 74 67 86 48 86 C29 86 16 74 16 54 Z" },
    { d: "M27 52 Q49 30 73 46" },
    grains([[34, 64, 20], [46, 70, 80], [60, 66, 140], [40, 42, 60], [64, 38, 10], [56, 56, 110], [30, 50, 150], [70, 58, 40]]),
  ],
  // Fava beans, the beans of ful
  beans: [
    { d: "M22 40 C22 30 34 26 42 30 C46 32 48 36 52 36 C58 36 60 44 56 49 C50 56 26 54 22 40 Z" },
    { d: "M40 31 q3 4 7 2" },
    { d: "M50 66 C50 56 62 52 70 56 C74 58 76 62 80 62 C86 62 88 70 84 75 C78 82 54 80 50 66 Z" },
    { d: "M68 57 q3 4 7 2" },
    { d: "M20 74 C20 67 28 64 34 67 C37 68 38 71 41 71 C45 71 46 76 44 80 C40 85 23 84 20 74 Z" },
  ],
  // A chilli for the shatta
  chilli: [
    { d: "M40 31 C33 49 42 73 76 85 C61 71 55 53 55 33 Z" },
    { d: "M40 31 Q47.5 25 55 33" },
    { d: "M47.5 28 Q48 16 59 11" },
  ],
  lemon: lemon(),
  // The qidra, the pot ful is slow-cooked in overnight
  qidra: [
    { d: "M41 25 H59 L57 35 C74 39 80 51 80 63 C80 78 66 88 50 88 C34 88 20 78 20 63 C20 51 26 39 43 35 Z" },
    { d: "M37 21 H63" },
    { d: "M50 13.5 a3 3 0 1 0 .1 0 Z" },
    { d: "M21.5 58 H78.5 M23 66 H77" },
  ],
  kunafa: kunafa(),
  // A head of garlic, for the ta'leya
  garlic: [
    { d: "M50 16 C52 28 76 38 76 60 C76 78 62 86 50 86 C38 86 24 78 24 60 C24 38 48 28 50 16 Z" },
    { d: "M50 30 C40 46 38 66 44 85 M50 30 C60 46 62 66 56 85" },
    { d: "M44 86 l-3 6 M50 86 v7 M56 86 l3 6" },
  ],
  // A cezve for Turkish coffee, the long handle out to one side
  cezve: [
    { d: "M35 40 H61 L59 50 C67 57 71 67 71 76 C71 84 65 88 57 88 H39 C31 88 25 84 25 76 C25 67 29 57 37 50 Z" },
    { d: "M35 40 L29 36" },
    { d: "M60 46 L93 33 M61 51 L94 38 M93 33 L94 38" },
    { d: "M42 33 q-4 -5 0 -9 q4 -4 0 -8 M52 33 q-4 -5 0 -9 q4 -4 0 -8" },
  ],
  // A sprig of mint
  mint: [
    { d: "M50 92 C50 72 47 50 52 14" },
    { d: "M50 74 C38 76 28 68 26 58 C38 56 48 62 50 74 Z M50 74 C62 74 70 64 72 54 C60 54 52 62 50 74 Z" },
    { d: "M50 48 C40 50 32 44 30 35 C40 33 48 39 50 48 Z M51 46 C61 46 67 38 69 29 C59 29 52 36 51 46 Z" },
    { d: "M52 24 C46 22 44 16 45 10 C51 12 53 18 52 24 Z" },
  ],
  // Ta'meya: Egyptian falafel, sesame on the crust
  tameya: [
    { d: "M38 40 a14 14 0 1 0 .1 0 Z" },
    { d: "M64 46 a13 13 0 1 0 .1 0 Z" },
    { d: "M48 66 a13 13 0 1 0 .1 0 Z" },
    grains([[33, 49, 30], [42, 51, 120], [37, 58, 70], [60, 55, 160], [68, 60, 40], [64, 66, 100], [44, 76, 20], [53, 80, 140], [48, 86, 80]]),
  ],
  // Sugarcane juice: a tall glass, foam on top, a length of cane beside it
  cane: [
    { d: "M30 30 H58 L54 88 H34 Z" },
    { d: "M31 38 Q37 34 44 38 Q51 42 57 38" },
    { d: "M74 10 L64 90 M80 11 L70 91 M74 10 L80 11 M64 90 L70 91" },
    { d: "M72.5 30 L78.4 31 M70 52 L75.8 52.8 M67.4 73 L73.2 73.8" },
  ],
  // Karkadeh: a tall glass of iced hibiscus, a straw
  karkadeh: [
    { d: "M34 30 H66 L62 88 H38 Z" },
    { d: "M36 42 H64" },
    { d: "M42 52 l9 -3 l3 9 l-9 3 Z M52 66 l8 2 l-2 8 l-8 -2 Z" },
    { d: "M58 14 L52 74 M58 14 L68 10" },
  ],
};
