// ---------------------------------------------------------------------------
// Kemet — "The 8 Identities": Egypt read as eight overlapping cultural worlds.
// Each carries its own accent colour (CSS var), an inline-SVG symbol name,
// a one-line intro and a handful of sample experiences.
// ---------------------------------------------------------------------------
import type { Identity } from "@/types";

export const identities: Identity[] = [
  {
    id: "pharaonic",
    name: "Pharaonic",
    symbol: "ankh",
    accentVar: "--pharaonic",
    intro:
      "The deep current beneath everything — five thousand years of temples, tombs and gods along the Nile.",
    experiences: [
      "Dawn at the Pyramids of Giza before the crowds",
      "The Valley of the Kings with an Egyptologist",
      "Karnak's hypostyle hall by low afternoon light",
      "The Tutankhamun galleries at the Grand Egyptian Museum",
    ],
  },
  {
    id: "nubian",
    name: "Nubian",
    symbol: "sun",
    accentVar: "--nubian",
    intro:
      "The bright south of Egypt — riverside villages of painted houses, drum rhythms and a living language older than Arabic.",
    experiences: [
      "A felucca to a Nubian village above Aswan",
      "Henna, hibiscus tea and home-cooked Nubian food",
      "The island temples of Philae and the High Dam",
      "Colour-saturated markets along the Aswan corniche",
    ],
  },
  {
    id: "coptic",
    name: "Coptic",
    symbol: "cross",
    accentVar: "--coptic",
    intro:
      "Egypt's Christian heritage — desert monasteries, ancient churches and a liturgy still sung in the language of the pharaohs.",
    experiences: [
      "The Hanging Church and the lanes of Old Cairo",
      "Abu Serga, linked to the Holy Family's journey",
      "The Coptic Museum's textiles and icons",
      "Desert monasteries of Wadi Natrun (on request)",
    ],
  },
  {
    id: "islamic",
    name: "Islamic",
    symbol: "crescent",
    accentVar: "--islamic",
    intro:
      "Medieval Cairo in stone — minarets and madrasas, the Citadel, and bazaars that have traded for a thousand years.",
    experiences: [
      "Saladin's Citadel and the Mosque of Muhammad Ali",
      "Al-Muizz street at dusk, lit minaret by minaret",
      "Khan el-Khalili for copper, spice and lanterns",
      "A Sufi tanoura performance after dark",
    ],
  },
  {
    id: "bedouin",
    name: "Bedouin · Sinai",
    symbol: "camel",
    accentVar: "--bedouin",
    intro:
      "The desert peoples of Sinai and the Eastern Desert — campfire hospitality, star-deep skies and trails only locals know.",
    experiences: [
      "Tea with a Bedouin host in a desert camp",
      "Star-gazing far from any city light",
      "A guided trek to a hidden Sinai canyon",
      "Sunrise from the slopes of Mount Sinai (on request)",
    ],
  },
  {
    id: "greco",
    name: "Greco-Roman",
    symbol: "column",
    accentVar: "--greco",
    intro:
      "Alexander's Mediterranean Egypt — Hellenistic cities, Roman ruins and the memory of the great Library.",
    experiences: [
      "The Catacombs of Kom El Shoqafa, Alexandria",
      "Pompey's Pillar and the Greco-Roman Museum",
      "The Citadel of Qaitbay on the Pharos site",
      "The temple of Kom Ombo on the Nile",
    ],
  },
  {
    id: "siwan",
    name: "Siwan · Amazigh",
    symbol: "palm",
    accentVar: "--siwan",
    intro:
      "Egypt's remote western oasis — Berber-rooted Siwa, salt lakes, palm groves and the oracle that once received Alexander.",
    experiences: [
      "The mudbrick fortress of Shali at Siwa",
      "The Temple of the Oracle of Amun",
      "Floating in Siwa's mineral salt lakes",
      "Sunset over the Great Sand Sea (on request)",
    ],
  },
  {
    id: "redsea",
    name: "The Red Sea",
    symbol: "fish",
    accentVar: "--redsea",
    intro:
      "Egypt's coral coast — warm clear water, reef walls and desert mountains meeting the sea at Hurghada and Marsa Alam.",
    experiences: [
      "Snorkelling or diving a Red Sea reef",
      "A liveaboard to the offshore islands (on request)",
      "Desert-and-sea days from Marsa Alam",
      "Dolphin and dugong waters of the south coast",
    ],
  },
];
