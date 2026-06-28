// ---------------------------------------------------------------------------
// Kemet — culture page content: pharaonic symbols & gods (inline-SVG cards)
// and a panel of living crafts.
// ---------------------------------------------------------------------------
import type { CultureSymbol, Craft } from "@/types";

export const symbols: CultureSymbol[] = [
  {
    symbol: "ankh",
    name: "Ankh",
    nature: "the key of life",
    note: "Carried by gods and kings, the looped cross signified life itself and the breath given to the living and the dead.",
  },
  {
    symbol: "eye",
    name: "Eye of Horus",
    nature: "protection & wholeness",
    note: "The wedjat eye, restored after Horus lost it to Set, became Egypt's great emblem of healing, protection and royal power.",
  },
  {
    symbol: "scarab",
    name: "Scarab",
    nature: "rebirth at dawn",
    note: "The dung beetle rolling its ball mirrored the sun god pushing the sun across the sky — a daily emblem of renewal and rebirth.",
  },
  {
    symbol: "anubis",
    name: "Anubis",
    nature: "guardian of the dead",
    note: "The jackal-headed god of embalming and the necropolis, who weighed the heart of the deceased against the feather of truth.",
  },
  {
    symbol: "horus",
    name: "Horus",
    nature: "the falcon king",
    note: "The sky god whose right eye was the sun and left the moon; every living pharaoh ruled as the earthly embodiment of Horus.",
  },
  {
    symbol: "lotus",
    name: "Lotus",
    nature: "creation & the sun",
    note: "The blue lotus closing at night and opening at dawn became a symbol of creation, the sun's daily rebirth and Upper Egypt itself.",
  },
];

export const crafts: Craft[] = [
  {
    symbol: "lotus",
    name: "Khayamiya (tentmakers)",
    note: "The hand-appliquéd textiles of Cairo's Street of the Tentmakers, stitched in geometric and pharaonic motifs.",
  },
  {
    symbol: "ankh",
    name: "Alabaster carving",
    note: "Luxor's artisans turn and polish translucent Egyptian alabaster into vessels and lamps, as their forebears did for the tombs.",
  },
  {
    symbol: "sun",
    name: "Nubian beadwork",
    note: "The bright, geometric beadwork and basketry of the Nubian south, carrying colour and pattern down the generations.",
  },
  {
    symbol: "horus",
    name: "Oud & tabla",
    note: "The lute-like oud and the goblet-shaped tabla drum, the twin voices of Egyptian music from village wedding to concert hall.",
  },
];
