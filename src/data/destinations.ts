// ---------------------------------------------------------------------------
// Destination catalogue. Reference implementations for the destination system —
// adding a destination later means adding an entry here; no component or logic
// change is required.
//
// `title` is the destination name (ContentEntity contract). Coordinates and
// media are placeholders (no fabricated values, no real photography). Tours and
// experiences are NOT listed here — they are derived from their own refs via
// src/data/registry. Only nearby destinations are authored (symmetric edge).
// ---------------------------------------------------------------------------
import type { Destination } from "@/types";

const near = (...ids: string[]) =>
  ids.map((id) => ({ domain: "destination" as const, id }));

const PLACEHOLDER_GEO = { lat: null, lng: null };

export const destinations: Destination[] = [
  {
    id: "cairo",
    slug: "cairo",
    domain: "destination",
    title: "Cairo",
    locales: ["en"],
    shortSummary:
      "Egypt's capital on the Nile — medieval Islamic and Coptic quarters, the Egyptian Museum, and the gateway to Giza.",
    longDescription:
      "Cairo is the largest city in the Arab world and one of the oldest continuously inhabited capitals on earth. Founded as a royal city by the Fatimids in 969 CE, it grew over the lanes of Old Cairo, where Coptic churches and an ancient synagogue still stand. Islamic Cairo holds a thousand years of mosques, madrasas and the Saladin Citadel, while the Khan el-Khalili bazaar has traded since the fourteenth century. Today the city pairs that heritage with the Egyptian Museum on Tahrir Square and the Grand Egyptian Museum on its western edge, beside the Pyramids of Giza.",
    region: "cairo",
    coordinates: PLACEHOLDER_GEO,
    elevationMeters: 23,
    unesco: { listed: true, siteName: "Historic Cairo" },
    bestSeasons: ["autumn", "winter", "spring"],
    climateSummary:
      "Hot desert climate: very hot, dry summers and mild winters with little rainfall.",
    recommendedStay: "2–3 days",
    travelStyles: ["cultural", "historical"],
    accessibilityNotes:
      "Major museums are largely step-free; medieval lanes and minarets involve stairs and uneven ground.",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    historicalImportance:
      "Medieval capital of Islamic Egypt and a centre of learning since the founding of Al-Azhar in 970 CE.",
    culturalImportance:
      "A meeting point of Islamic, Coptic and modern Arab culture, and Egypt's centre of film, music and publishing.",
    highlights: [
      "The Egyptian Museum on Tahrir Square",
      "Saladin Citadel and the Mosque of Muhammad Ali",
      "Khan el-Khalili bazaar and Al-Muizz Street",
      "Coptic Cairo and the Hanging Church",
      "The Grand Egyptian Museum",
    ],
    photographyHighlights: [
      "The Citadel skyline at dusk",
      "Lantern-lit alleys of Khan el-Khalili",
      "Minaret rooftops along Al-Muizz Street",
    ],
    thingsToKnow: [
      "Modest dress is required at mosques and churches; carry a scarf.",
      "Friday is the main prayer day and some sites adjust their hours.",
      "Traffic is heavy — allow generous time between districts.",
    ],
    whyVisit: [
      "Two world-class museums of ancient Egypt in one city",
      "A thousand years of Islamic and Coptic architecture",
      "The natural base for visiting Giza, Saqqara and Memphis",
    ],
    symbol: "crescent",
    hero: { alt: "Cairo skyline with minarets and the Citadel", label: "Cairo" },
    gallery: [
      { alt: "Khan el-Khalili bazaar, Cairo", label: "Bazaar" },
      { alt: "Mosque of Muhammad Ali at the Citadel", label: "Citadel" },
    ],
    relationships: { nearbyDestinations: near("giza", "alexandria") },
  },

  {
    id: "giza",
    slug: "giza",
    domain: "destination",
    title: "Giza",
    locales: ["en"],
    shortSummary:
      "Home of the Great Pyramid and the Sphinx, on the desert plateau across the Nile from Cairo.",
    longDescription:
      "Giza sits on the west bank of the Nile, where the desert plateau rises from the edge of greater Cairo. Its pyramids — built for the pharaohs Khufu, Khafre and Menkaure around 2600–2500 BCE — are the last surviving wonder of the ancient world, guarded by the Great Sphinx and approached through Khafre's granite Valley Temple. The Grand Egyptian Museum now stands at the plateau's edge, gathering the treasures of Tutankhamun beside the monuments that inspired them. Though administratively its own city, Giza is reached as a short drive from central Cairo.",
    region: "cairo",
    coordinates: PLACEHOLDER_GEO,
    unesco: {
      listed: true,
      siteName: "Memphis and its Necropolis – the Pyramid Fields",
    },
    bestSeasons: ["autumn", "winter", "spring"],
    climateSummary:
      "Hot desert climate; early-morning visits avoid both heat and crowds.",
    recommendedStay: "1 day",
    travelStyles: ["historical", "photography"],
    accessibilityNotes:
      "The plateau is open desert with sandy, sloping ground; the Grand Egyptian Museum is fully step-free.",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    historicalImportance:
      "Site of the last surviving wonder of the ancient world, built during Egypt's Fourth Dynasty.",
    culturalImportance:
      "The enduring emblem of ancient Egypt and its most visited monument complex.",
    highlights: [
      "The Great Pyramid of Khufu",
      "The pyramids of Khafre and Menkaure",
      "The Great Sphinx and Khafre's Valley Temple",
      "The panoramic desert viewpoint",
      "The Grand Egyptian Museum",
    ],
    photographyHighlights: [
      "The three pyramids aligned from the panorama point",
      "The Sphinx at sunrise",
      "Camel silhouettes on the plateau ridge",
    ],
    thingsToKnow: [
      "Interior pyramid tickets are limited and sold on the day.",
      "Bring water, sun protection and sturdy footwear for the sand.",
      "Agree any camel or horse ride and its price before setting off.",
    ],
    whyVisit: [
      "The only surviving ancient wonder of the world",
      "The Sphinx and the great Fourth-Dynasty pyramids",
      "The Grand Egyptian Museum on the same plateau",
    ],
    symbol: "ankh",
    hero: { alt: "The pyramids of Giza on the desert plateau", label: "Giza" },
    gallery: [
      { alt: "The Great Sphinx of Giza", label: "Sphinx" },
      { alt: "Panorama of the three Giza pyramids", label: "Panorama" },
    ],
    relationships: { nearbyDestinations: near("cairo") },
  },

  {
    id: "luxor",
    slug: "luxor",
    domain: "destination",
    title: "Luxor",
    locales: ["en"],
    shortSummary:
      "The open-air museum of ancient Thebes — Karnak, Luxor Temple and the royal tombs of the Valley of the Kings.",
    longDescription:
      "Built over the ancient city of Thebes, Luxor holds the greatest concentration of monuments in Egypt. On the East Bank, the temple complex of Karnak and the riverside Luxor Temple mark the city of the living. Across the Nile, the West Bank was the city of the dead: the Valley of the Kings, where Tutankhamun and Ramesses ruled in eternity; the terraced mortuary temple of Hatshepsut; and the Colossi of Memnon. Long the heart of New Kingdom Egypt, Luxor remains a working town wrapped around three and a half thousand years of stone.",
    region: "nile-valley",
    coordinates: PLACEHOLDER_GEO,
    elevationMeters: 76,
    unesco: { listed: true, siteName: "Ancient Thebes with its Necropolis" },
    bestSeasons: ["autumn", "winter", "spring"],
    climateSummary:
      "Very hot, dry summers and warm, sunny winters; winter is the prime season.",
    recommendedStay: "2 days",
    travelStyles: ["historical", "cultural"],
    accessibilityNotes:
      "Temples involve walking over uneven ancient ground; some tombs require steep descents.",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    historicalImportance:
      "Capital of Egypt at the height of the New Kingdom and burial place of its pharaohs.",
    culturalImportance:
      "The richest surviving record of ancient Egyptian temple and funerary art.",
    highlights: [
      "Karnak Temple and its great hypostyle hall",
      "Luxor Temple in the heart of the city",
      "The Valley of the Kings",
      "The mortuary temple of Hatshepsut",
      "The Colossi of Memnon",
    ],
    photographyHighlights: [
      "Karnak's columns in low morning light",
      "Hot-air balloons over the West Bank at dawn",
      "The Avenue of Sphinxes at Luxor Temple",
    ],
    thingsToKnow: [
      "Start early; the open sites become very hot by midday.",
      "Some royal tombs require separate tickets (Tutankhamun, Seti I).",
      "Photography rules vary by tomb — your guide will advise.",
    ],
    whyVisit: [
      "The world's greatest open-air collection of monuments",
      "The royal tombs of the Valley of the Kings",
      "Dawn ballooning over the temples of Thebes",
    ],
    symbol: "horus",
    hero: { alt: "Karnak Temple columns at Luxor", label: "Luxor" },
    gallery: [
      { alt: "Valley of the Kings, Luxor West Bank", label: "Valley of the Kings" },
      { alt: "Mortuary Temple of Hatshepsut", label: "Hatshepsut" },
    ],
    relationships: { nearbyDestinations: near("aswan") },
  },

  {
    id: "aswan",
    slug: "aswan",
    domain: "destination",
    title: "Aswan",
    locales: ["en"],
    shortSummary:
      "Egypt's tranquil southern city on the Nile — Nubian culture, the High Dam and the island temple of Philae.",
    longDescription:
      "Aswan is Egypt's southernmost city and its gentlest, set where the Nile breaks around granite islands and Nubian villages climb the far bank. For millennia it was the country's frontier and quarry — the Unfinished Obelisk still lies in the bedrock it was cut from. The island temple of Philae, dedicated to Isis, was moved stone by stone to higher ground when the Aswan High Dam created Lake Nasser. The dam, the felucca-filled river and the colour of Nubian markets give Aswan a rhythm quite distinct from the north, and it is the usual starting point for Nile cruises and trips to Abu Simbel.",
    region: "nubia",
    coordinates: PLACEHOLDER_GEO,
    unesco: {
      listed: true,
      siteName: "Nubian Monuments from Abu Simbel to Philae",
    },
    bestSeasons: ["autumn", "winter", "spring"],
    climateSummary:
      "One of the driest, sunniest places on earth; warm winters and intensely hot summers.",
    recommendedStay: "2 days",
    travelStyles: ["cultural", "relaxed"],
    accessibilityNotes:
      "Island sites are reached by motorboat; the riverside and markets are mostly level.",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    historicalImportance:
      "Ancient Egypt's southern frontier and granite quarry, and the gateway to Nubia.",
    culturalImportance:
      "The heart of living Nubian culture, language, music and craft.",
    highlights: [
      "The island Temple of Philae",
      "The Aswan High Dam",
      "The Unfinished Obelisk",
      "Nubian villages and the Aswan corniche",
      "Elephantine Island and a felucca on the Nile",
    ],
    photographyHighlights: [
      "Feluccas under sail at sunset",
      "Painted Nubian houses above the river",
      "Philae Temple rising from the water",
    ],
    thingsToKnow: [
      "Abu Simbel is a half-day trip south by road or short flight.",
      "Island temples are reached by short motorboat transfers.",
      "Aswan is the common embarkation point for Nile cruises to Luxor.",
    ],
    whyVisit: [
      "The Nile at its most beautiful and relaxed",
      "Living Nubian culture and riverside villages",
      "The starting point for cruises and Abu Simbel",
    ],
    symbol: "sun",
    hero: { alt: "Feluccas on the Nile at Aswan", label: "Aswan" },
    gallery: [
      { alt: "Temple of Philae near Aswan", label: "Philae" },
      { alt: "Nubian village above the Nile", label: "Nubian village" },
    ],
    relationships: { nearbyDestinations: near("luxor") },
  },

  {
    id: "alexandria",
    slug: "alexandria",
    domain: "destination",
    title: "Alexandria",
    locales: ["en"],
    shortSummary:
      "Egypt's Mediterranean port founded by Alexander the Great — Greco-Roman ruins and the reborn Library.",
    longDescription:
      "Founded by Alexander the Great in 331 BCE, Alexandria was the intellectual capital of the ancient Mediterranean, home to the Great Library and the Pharos lighthouse, one of the wonders of the ancient world. The city wears that past lightly along a curving seafront corniche: the Roman catacombs of Kom El Shoqafa, the towering Pompey's Pillar, and the Citadel of Qaitbay built on the lighthouse's foundations. The modern Bibliotheca Alexandrina, a vast disc of glass and granite, was raised in deliberate echo of the ancient Library. Cooler and breezier than the Nile valley, Alexandria is Egypt's window on the sea.",
    region: "mediterranean",
    coordinates: PLACEHOLDER_GEO,
    bestSeasons: ["spring", "summer", "autumn"],
    climateSummary:
      "Mild Mediterranean climate; warm summers, cool damp winters, sea breezes year-round.",
    recommendedStay: "1–2 days",
    travelStyles: ["cultural", "historical"],
    accessibilityNotes:
      "The corniche and library are accessible; the catacombs involve a spiral descent.",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    historicalImportance:
      "Capital of Greco-Roman Egypt and the foremost centre of learning in the ancient world.",
    culturalImportance:
      "A historically cosmopolitan port and the symbolic home of the Library of Alexandria.",
    highlights: [
      "The Catacombs of Kom El Shoqafa",
      "Pompey's Pillar and the Serapeum",
      "The Citadel of Qaitbay on the Pharos site",
      "The Bibliotheca Alexandrina",
      "The Greco-Roman Museum and the corniche",
    ],
    photographyHighlights: [
      "The Citadel of Qaitbay against the sea",
      "The sweep of the Corniche at dusk",
      "The disc of the Bibliotheca Alexandrina",
    ],
    thingsToKnow: [
      "It is a long day trip from Cairo, or an easy overnight stay.",
      "Sea breezes make it noticeably cooler than the Nile valley.",
      "Seafood on the corniche is the local speciality.",
    ],
    whyVisit: [
      "Greco-Roman Egypt beside the Mediterranean",
      "The reborn Library of Alexandria",
      "A cooler, maritime change from the desert interior",
    ],
    symbol: "greco",
    hero: { alt: "The Citadel of Qaitbay on the Alexandria seafront", label: "Alexandria" },
    gallery: [
      { alt: "Bibliotheca Alexandrina", label: "Library" },
      { alt: "The Alexandria corniche", label: "Corniche" },
    ],
    relationships: { nearbyDestinations: near("cairo") },
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
