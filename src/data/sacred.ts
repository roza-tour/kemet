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
  calledIn: "ancient Egyptian" | "Arabic" | "Latin";
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
  {
    name: "Garnet",
    called: "granatum", calledIn: "Latin",
    origin: "Strung into Egyptian necklaces since before the pharaohs — garnet beads lie in Predynastic graves — and set in the jewellery of the Middle Kingdom. Its name comes from the pomegranate.",
    meaning: "The red of life, like carnelian.",
    cut: "faceted",
    colors: ["#F07A8A", "#B8203A", "#4E0716"],
  },
];

export interface SacredOil {
  name: string;
  ar: string;
  /** Where it comes from, and its history — facts. */
  story: string;
  /** How it is used — tradition and use, never a medical claim. */
  home: string;
}

/**
 * The oils of Egypt. Facts are history and agriculture (the seven sacred oils,
 * Delta jasmine, Fayoum chamomile, black seed in Tutankhamun's tomb); uses are
 * scent, skin, hair and massage. Nothing here claims to treat anything.
 */
export const oils: SacredOil[] = [
  {
    name: "Jasmine",
    ar: "ياسمين",
    story: "Egypt is one of the world's great growers of jasmine. In the Nile Delta the flowers are picked by hand before sunrise, while their scent is strongest, and extracted the same day.",
    home: "Warm, heady and joyful — a drop in a carrier oil for the evening.",
  },
  {
    name: "Geranium",
    ar: "عطرة",
    story: "Grown in Middle Egypt and distilled for perfumers across the world, Egyptian geranium is prized for its rose-like scent.",
    home: "Bright and rosy — a balancing note in a massage blend.",
  },
  {
    name: "Chamomile",
    ar: "بابونج",
    story: "Egypt is one of the world's largest growers of chamomile, in the fields of Fayoum and Beni Suef.",
    home: "Soft and apple-sweet — for winding down at night.",
  },
  {
    name: "Black seed",
    ar: "حبة البركة",
    story: "Pressed cold from the seeds of Nigella. Black seed was found in the tomb of Tutankhamun.",
    home: "Rich and peppery — used on skin and hair in Egyptian homes for generations.",
  },
  {
    name: "Sesame",
    ar: "سيرج",
    story: "The everyday oil of Egypt, pressed from sesame seed in small traditional presses.",
    home: "Light and warming — a classic base for massage.",
  },
  {
    name: "Moringa",
    ar: "زيت البان",
    story: "Ben oil, from the moringa tree. Ancient perfumers prized it because it keeps for years without turning and carries a scent well.",
    home: "Silky and almost scentless — the base that carries another oil.",
  },
  {
    name: "Blue lotus",
    ar: "لوتس أزرق",
    story: "The sacred flower of the sun, painted on temple walls and carried in the hands of queens. Its scent is rare and precious.",
    home: "Delicate and floral — for meditation and quiet.",
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
    q: "What oils did the ancient Egyptians use?",
    a: "Plant oils — moringa (ben oil), sesame and castor among them — steeped with flowers, resins and spices to make perfumes and ointments. Temples kept seven sacred oils for their rituals, and offering slabs with seven hollows, one for each oil, survive from the Old Kingdom.",
  },
  {
    q: "How do I make a massage oil?",
    a: "Mix a few drops of an essential oil — jasmine, geranium or chamomile — into a carrier oil such as sesame, sweet almond or moringa. Essential oils are too strong to use on the skin undiluted: test the blend on a small patch of skin first, keep it away from the eyes, and ask your doctor before using essential oils if you are pregnant.",
  },
  {
    q: "Is Egyptian jasmine special?",
    a: "Egypt is one of the world's largest producers of jasmine. In the Nile Delta the flowers are picked by hand before sunrise, when their scent is strongest, and extracted the same day.",
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
    a: "Both. On a journey, your guide or a shopping companion takes you to Cairo's incense and oil sellers, and to stones, cotton and linen. From anywhere, write to us on WhatsApp: we send photographs of the actual pieces and a price, with shipping to your country. Payment by bank transfer, card or PayPal.",
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
  /** The owner's own stones, shown together under "Our stones". */
  ownStones?: (MediaPlaceholder & { name: string })[];
  /** The oils chapter: its arch, the seven-oils slab, the massage and our oils. */
  oilsArch?: MediaPlaceholder;
  oilsSlab?: MediaPlaceholder;
  massage?: MediaPlaceholder;
  ownOils?: MediaPlaceholder;
  /** By oil name, as in `oils`. */
  oil?: Record<string, MediaPlaceholder>;
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
    "Luban dakar": { src: "/images/sacred/incense/frankincense-tears-oil.webp", width: 320, height: 320, alt: "Tears of frankincense in a wooden bowl, beside bottles of frankincense oil" },
    Oud: { src: "/images/sacred/incense/oud-chips-burning.webp", width: 500, height: 500, alt: "Chips of oud smouldering in a burner, more agarwood beside it" },
    Mint: { src: "/images/sacred/incense/mint-leaves-powder.webp", width: 393, height: 393, alt: "Dried mint, ground, with fresh mint leaves" },
  },
  // The owner's own photographs of the stones Kemet offers.
  stone: {
    Turquoise: { src: "/images/sacred/stones/turquoise-tumbled-circle.webp", width: 400, height: 400, alt: "Polished turquoise stones" },
    Carnelian: { src: "/images/sacred/stones/carnelian-beads-circle.webp", width: 400, height: 400, alt: "Strands of polished carnelian beads" },
    "Lapis lazuli": { src: "/images/sacred/stones/lapis-lazuli-tumbled-circle.webp", width: 400, height: 400, alt: "Polished lapis lazuli stones, deep blue flecked with gold" },
    Peridot: { src: "/images/sacred/stones/peridot-pear-cut-circle.webp", width: 400, height: 400, alt: "Pear-cut peridots" },
    Amethyst: { src: "/images/sacred/stones/amethyst-cabochons-circle.webp", width: 400, height: 400, alt: "Polished amethyst cabochons" },
    Garnet: { src: "/images/sacred/stones/garnet-hearts-circle.webp", width: 400, height: 400, alt: "Heart-cut garnets" },
  },
  ownStones: [
    { name: "Turquoise", src: "/images/sacred/stones/turquoise-tumbled.webp", width: 640, height: 479, alt: "Polished turquoise stones" },
    { name: "Lapis lazuli", src: "/images/sacred/stones/lapis-lazuli-tumbled.webp", width: 800, height: 800, alt: "Polished lapis lazuli stones on a white plate" },
    { name: "Carnelian", src: "/images/sacred/stones/carnelian-beads.webp", width: 894, height: 894, alt: "Strands of polished carnelian beads" },
    { name: "Peridot", src: "/images/sacred/stones/peridot-pear-cut.webp", width: 710, height: 532, alt: "Five pear-cut peridots" },
    { name: "Amethyst", src: "/images/sacred/stones/amethyst-cabochons.webp", width: 300, height: 300, alt: "Polished amethyst cabochons" },
    { name: "Garnet", src: "/images/sacred/stones/garnet-hearts.webp", width: 1600, height: 1600, alt: "Heart-cut garnets" },
  ],
  oilsArch: {
    src: "/images/sacred/oils/perfume-amphora-glass.webp", width: 1161, height: 1500,
    alt: "An ancient Egyptian perfume bottle of blue glass shaped like an amphora, about 1386–1330 BC",
  },
  oilsSlab: {
    src: "/images/sacred/oils/seven-sacred-oils-slab.webp", width: 721, height: 299,
    alt: "An Old Kingdom offering slab with a row of hollows for the seven sacred oils",
  },
  massage: {
    src: "/images/sacred/oils/massage-oils.webp", width: 1024, height: 768,
    alt: "Massage oils in glass bottles with white flowers and rolled towels",
  },
  oil: {
    Jasmine: { src: "/images/sacred/oils/jasmine-blossom.webp", width: 600, height: 600, alt: "White jasmine in flower" },
    Geranium: { src: "/images/sacred/oils/geranium-flower.webp", width: 600, height: 600, alt: "A pink rose-geranium flower among its leaves" },
    Chamomile: { src: "/images/sacred/oils/chamomile-flowers.webp", width: 600, height: 600, alt: "Chamomile flowers" },
    Sesame: { src: "/images/sacred/oils/sesame-seeds.webp", width: 600, height: 600, alt: "Sesame seeds" },
    "Black seed": { src: "/images/sacred/oils/black-seed-jar.webp", width: 400, height: 400, alt: "Black seed in a glass jar" },
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
