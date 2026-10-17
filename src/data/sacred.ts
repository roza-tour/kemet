// ---------------------------------------------------------------------------
// The Sacred Senses of Egypt — incense, stones, cotton and linen.
// The words for egyptian-incense-stones-cotton.html, kept as data so the page
// can be translated set by set, the way the other languages are.
//
// HOW THIS PAGE TALKS ABOUT BELIEF
// It is written for readers who come to incense and stones for their spirit
// — to clear a home, for calm, against the evil eye. Those beliefs are given
// as what they are: traditions, old and living, shared with respect. What is
// stated as FACT is only what history records — the temples' three daily
// incenses (Plutarch), Hatshepsut's voyage to Punt, Sinai turquoise, Aswan
// amethyst, the long staple of Egyptian cotton. Health claims ("sterilises
// the air") are not made: burning anything makes smoke, so the page says to
// open a window.
// ---------------------------------------------------------------------------
import type { MediaPlaceholder } from "@/types";

export interface SacredIncense {
  name: string;
  /** As it is asked for in a Cairo shop. */
  ar: string;
  /** Where it comes from, and its history — facts. */
  story: string;
  /** How it is used in an Egyptian home — tradition. */
  home: string;
  /** Resin, wood or leaf: sets the colour of its card. */
  tone: "amber" | "gold" | "wood" | "dark" | "green" | "frost";
  image?: MediaPlaceholder;
}

export const incenses: SacredIncense[] = [
  {
    name: "Myrrh",
    ar: "مُرّ",
    story: "Resin of the Commiphora tree, brought from the lands the Egyptians called Punt. The priests burned it at midday, and it was among the precious materials of embalming.",
    home: "Warm, bitter-sweet and grounding — burned to settle a house at the end of the day.",
    tone: "amber",
  },
  {
    name: "Luban dakar",
    ar: "لبان دكر",
    story: "Frankincense of the finest grade — pale, clear tears of Boswellia resin, the kind Cairo's shops call dakar. Hatshepsut sent ships to Punt for living incense trees; the voyage is carved on her temple at Deir el-Bahari.",
    home: "Bright, clean and uplifting — the classic morning incense, burned to clear a room.",
    tone: "gold",
  },
  {
    name: "Sandalwood",
    ar: "صندل",
    story: "A fragrant wood that came to Egypt along the trade routes from India, and is now the soft, creamy heart of many Cairo blends.",
    home: "Calm and enveloping — an evening scent, for slowing down.",
    tone: "wood",
  },
  {
    name: "Oud",
    ar: "عود",
    story: "Agarwood, prized across Egypt and the Arab world for centuries, and still the most precious thing on the incense shelf.",
    home: "Deep, rich and lasting — burned to welcome guests, on Fridays and on feast days. A little perfumes a whole house.",
    tone: "dark",
  },
  {
    name: "Mint",
    ar: "نعناع",
    story: "Grown along the Nile and in every Egyptian kitchen garden; dried leaves laid on the coals, or a few drops of its oil.",
    home: "Fresh and cooling — a lift for a heavy afternoon.",
    tone: "green",
  },
  {
    name: "Camphor",
    ar: "كافور",
    story: "Crystals from the camphor tree, long kept in Egyptian homes and tucked into linen chests.",
    home: "Cool and sharp — used to freshen a room and keep linen fresh.",
    tone: "frost",
  },
];

/** The temples' day of incense, as Plutarch records it (On Isis and Osiris). */
export const templeDay = [
  { when: "Dawn", what: "Resin", note: "Frankincense as the sun rose." },
  { when: "Midday", what: "Myrrh", note: "As the sun stood highest." },
  { when: "Sunset", what: "Kyphi", note: "A blend of sixteen ingredients, to send the day off." },
];

export interface SacredStone {
  name: string;
  /** What Egypt called it, and in which language. */
  called: string;
  calledIn: "ancient Egyptian" | "Arabic";
  /** Where it came from — fact. */
  origin: string;
  /** What it meant — the belief. */
  meaning: string;
  /** How it is drawn: an opaque polished cabochon or a faceted, clear gem. */
  cut: "cabochon" | "faceted";
  colors: [string, string, string];
}

export const stones: SacredStone[] = [
  {
    name: "Turquoise",
    called: "mefkat", calledIn: "ancient Egyptian",
    origin: "Mined in Sinai since the Old Kingdom, at Serabit el-Khadim and Wadi Maghara — where a temple stands to Hathor, Lady of Turquoise.",
    meaning: "Joy, new life and protection.",
    cut: "cabochon",
    colors: ["#7FE0D2", "#2FB3A6", "#11655F"],
  },
  {
    name: "Lapis lazuli",
    called: "khesbed", calledIn: "ancient Egyptian",
    origin: "Brought from the mountains of Afghanistan for the hair of the gods and the night sky inlaid on Tutankhamun's mask.",
    meaning: "The heavens, and truth.",
    cut: "cabochon",
    colors: ["#5B7FE0", "#2A4C9A", "#121F4A"],
  },
  {
    name: "Carnelian",
    called: "herset", calledIn: "ancient Egyptian",
    origin: "A red stone gathered in Egypt's deserts and carved into amulets for the living and the dead.",
    meaning: "Life, blood and vitality.",
    cut: "cabochon",
    colors: ["#F2916A", "#C8553D", "#6E1F14"],
  },
  {
    name: "Peridot",
    called: "zabargad", calledIn: "Arabic",
    origin: "From Zabargad, an island in the Red Sea mined since antiquity — the source of some of the finest peridot ever found.",
    meaning: "Light, and the green of the growing season.",
    cut: "faceted",
    colors: ["#D9F07A", "#9DBF3B", "#4A6214"],
  },
  {
    name: "Amethyst",
    called: "hesmen", calledIn: "ancient Egyptian",
    origin: "Mined at Wadi el-Hudi near Aswan in the Middle Kingdom, and strung into the jewellery of royal women.",
    meaning: "Calm, and a clear head.",
    cut: "faceted",
    colors: ["#D3A8F0", "#8E5BB5", "#3E1F5C"],
  },
];

export const sacredFaqs = [
  {
    q: "What incense did the ancient Egyptians burn?",
    a: "Resins above all — frankincense and myrrh, brought from the lands they called Punt — and kyphi, a blend of resins, honey, wine and spices whose recipe is carved on the walls of Edfu temple. Plutarch records the temple day: resin at dawn, myrrh at midday, kyphi at sunset.",
  },
  {
    q: "What is luban dakar?",
    a: "The name Cairo's incense sellers give the finest grade of frankincense: pale, clear tears of Boswellia resin. It burns bright and clean, and is the classic incense for the morning.",
  },
  {
    q: "How do I burn resin incense at home?",
    a: "Light a charcoal disc in a heatproof dish and let it turn grey, then lay a pea-sized piece of resin on top. Open a window: a little smoke goes a long way, and incense is meant to scent a room, not fill it.",
  },
  {
    q: "Is incense used against the evil eye in Egypt?",
    a: "Yes — it is one of the oldest traditions in Egyptian homes: incense is burned after a visit, before a new beginning and against hasad, the evil eye. It is a belief rather than a science, and we share it as Egyptians live it.",
  },
  {
    q: "Which gemstones come from Egypt itself?",
    a: "Turquoise from Sinai, peridot from Zabargad island in the Red Sea, amethyst from Wadi el-Hudi near Aswan, and carnelian from the deserts. Lapis lazuli, the deep blue of Tutankhamun's mask, was always imported, from the mountains of Afghanistan.",
  },
  {
    q: "What makes Egyptian cotton different?",
    a: "Its staple — the length of each fibre. Egyptian cotton is extra-long staple, so it spins into a finer, stronger and softer yarn, which grows softer with every wash.",
  },
  {
    q: "Can I buy these during my journey, or have them sent home?",
    a: "Both. On a journey, your guide or a shopping companion takes you to Cairo's incense sellers and to stones, cotton and linen. From anywhere, write to us on WhatsApp: we send photographs of the actual pieces and a price, with shipping to your country. Payment by bank transfer, card or PayPal.",
  },
];

// ---------------------------------------------------------------------------
// Photographs. Each slot is optional: the page draws its own still life,
// velvet or weave where one is missing. Borrowed photographs carry their
// credit through data/photoCredits.ts. The PRODUCTS themselves — the stones
// we offer, the clothes — must be the owner's own photographs: a stock image
// of a stone or a shirt on a page that sells stones and shirts would be read
// as the thing on sale.
// ---------------------------------------------------------------------------
export interface SacredPhotos {
  hero?: MediaPlaceholder;
  resin?: MediaPlaceholder;
  jewel?: MediaPlaceholder;
  /** A wide photograph for the stones' velvet tray. */
  tray?: MediaPlaceholder;
  /** By stone name, as in `stones`. */
  stone?: Record<string, MediaPlaceholder>;
  linen?: MediaPlaceholder;
  cotton?: MediaPlaceholder;
  flax?: MediaPlaceholder;
  souk?: MediaPlaceholder;
  parcel?: MediaPlaceholder;
  /** By incense name, as in `incenses`. */
  incense?: Record<string, MediaPlaceholder>;
}

export const sacredPhotos: SacredPhotos = {
  hero: {
    src: "/images/stock/incense-burner-smoke.webp", width: 2000, height: 1415,
    alt: "Smoke curling from the spout of an engraved brass incense burner",
  },
  resin: {
    src: "/images/stock/frankincense-myrrh-burning.webp", width: 1400, height: 1752,
    alt: "Tears of frankincense and dark myrrh smouldering on charcoal in a brass burner",
  },
  jewel: {
    src: "/images/sacred/sithathoryunet-pectoral.webp", width: 1563, height: 1600,
    alt: "The pectoral of Princess Sithathoryunet, gold inlaid with turquoise, lapis lazuli and carnelian, about 1887–1878 BC",
  },
  tray: {
    src: "/images/sacred/amenemhat-girdle-bracelets.webp", width: 1600, height: 1269,
    alt: "A gold cowrie-shell girdle and bracelets strung with carnelian, turquoise and lapis lazuli, from the reign of Amenemhat III",
  },
  incense: {
    Myrrh: { src: "/images/stock/myrrh-on-charcoal.webp", width: 900, height: 900, alt: "Pieces of myrrh smouldering on a charcoal ring" },
    "Luban dakar": { src: "/images/stock/frankincense-tears.webp", width: 900, height: 900, alt: "Pale tears of Omani frankincense" },
  },
  stone: {
    Turquoise: { src: "/images/stock/turquoise-raw.webp", width: 700, height: 700, alt: "Raw sky-blue turquoise" },
    "Lapis lazuli": { src: "/images/stock/lapis-lazuli-raw.webp", width: 700, height: 700, alt: "Raw lapis lazuli, deep blue veined with white" },
    Peridot: { src: "/images/stock/peridot-crystal.webp", width: 700, height: 700, alt: "A clear green peridot crystal, lit from behind" },
    Amethyst: { src: "/images/stock/amethyst-druse.webp", width: 700, height: 700, alt: "A bed of violet amethyst crystals" },
  },
  flax: {
    src: "/images/stock/flax-field-flowering.webp", width: 1400, height: 933,
    alt: "A field of flax in blue flower, the plant linen is spun from",
  },
  souk: {
    src: "/images/stock/khan-el-khalili-attar-shop.webp", width: 1400, height: 928,
    alt: "A spice and attar shop in Khan el-Khalili, sacks of herbs and spices before shelves of jars",
  },
  cotton: {
    src: "/images/stock/cotton-open-boll.webp", width: 1400, height: 933,
    alt: "An open cotton boll on the branch",
  },
  linen: {
    src: "/images/sacred/ancient-linen-sheet-fringe.webp", width: 1600, height: 1200,
    alt: "The fringe and sheer weave of an ancient Egyptian linen sheet, about 1473–1458 BC",
  },
};
