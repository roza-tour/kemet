// ---------------------------------------------------------------------------
// Kemet — tour catalogue. All 12 journeys live here; pages are rendered from
// this data by src/pages/[slug].astro and listed on tours.html / index.html.
//
// PRICING NOTE: every `price` and `was` value is the source-operator price
// already marked up by +20%, expressed in EUR, per person. Where a `was`
// value exists it is shown struck-through.
//
// Types live in src/types; formatting/lookups in src/utils — this module is
// pure content plus the derived lists used by listings.
// ---------------------------------------------------------------------------
import type { Tour } from "@/types";

// Standard inclusions / exclusions (brief §4) ------------------------------
const baseIncluded = [
  "Private Egyptologist guide throughout",
  "All entrance fees to sites and monuments",
  "Lunch on each touring day",
  "Private air-conditioned transfers",
  "Hotel pickup & drop-off",
  "Bottled water every day",
];

const baseExcluded = [
  "International flights to and from Egypt",
  "Egypt entry visa",
  "Tipping (gratuities)",
  "Personal expenses",
  "Optional extras — Abu Simbel, camel rides, dinner cruise, drinks",
];

const privateNote = "Yes — your party only";

export const tours: Tour[] = [
  // ========================= MULTI-DAY =====================================
  {
    slug: "tour-10-day",
    hero: {
      alt: "The great hypostyle hall of Karnak Temple in Luxor",
      src: "/images/luxor/luxor-karnak-hypostyle-hall.webp",
      width: 652,
      height: 980,
    },
    title: "Egypt Icons & Nile Cruise",
    subtitle:
      "Ten unhurried days from the Pyramids of Giza to the temples of Upper Egypt, threaded together by a three-night Nile cruise.",
    kind: "multiday",
    category: "Signature Journey",
    tag: "10 Days",
    durationLabel: "10 Days / 9 Nights",
    startPoint: "Cairo (airport or hotel)",
    cities: ["Cairo", "Giza", "Alexandria", "Aswan", "Luxor"],
    visiting: "Cairo · Giza · Alexandria · Aswan · Luxor",
    isPrivate: privateNote,
    price: 1741,
    was: 2263,
    summary:
      "Our most complete journey: Cairo, Alexandria, a sleeper train south, and a three-night Nile cruise from Aswan to Luxor — every layer of Egypt in one arc.",
    overview:
      "This is the full sweep of Egypt, paced to be lived rather than ticked off. You begin in Cairo with the treasures of the Egyptian Museum, take a day on the Mediterranean at Alexandria, then ride the sleeper train south to Aswan. From there a three-night Nile cruise carries you downstream past Kom Ombo and Edfu to Luxor, where the temples of Karnak and the royal tombs of the West Bank wait. You return to Cairo for the Pyramids of Giza and the timeworn lanes of Islamic Cairo. Travel is private throughout, led by your own Egyptologist.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Cairo & the Egyptian Museum",
        items: [
          "Private meet-and-greet at Cairo International Airport",
          "Transfer to your 5-star hotel and welcome briefing",
          "Afternoon at the Egyptian Museum in Tahrir — the royal collections and gold of the New Kingdom",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Alexandria on the Mediterranean",
        items: [
          "Drive to Alexandria along the desert road",
          "Catacombs of Kom El Shoqafa and Pompey's Pillar",
          "Citadel of Qaitbay on the old Pharos site and the modern Bibliotheca Alexandrina",
          "Seafront seafood lunch before returning to Cairo",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Coptic Cairo & overnight train to Aswan",
        items: [
          "Hanging Church, Abu Serga and the lanes of Old Cairo",
          "Early evening transfer to the station",
          "Board the sleeper train south to Aswan with private cabins and dinner aboard",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Aswan & embarkation",
        items: [
          "Arrive Aswan and visit the High Dam and the Unfinished Obelisk",
          "Sail by motorboat to the island Temple of Philae, dedicated to Isis",
          "Board your Nile cruise ship and settle in for lunch on the river",
        ],
      },
      {
        label: "Day",
        num: "05",
        title: "Sailing to Kom Ombo & Edfu",
        items: [
          "Morning sail downstream through the Nile valley",
          "Kom Ombo, the twin temple of Sobek and Horus the Elder",
          "Continue to Edfu and the great Temple of Horus, the best-preserved in Egypt",
        ],
      },
      {
        label: "Day",
        num: "06",
        title: "Esna lock & arrival in Luxor",
        items: [
          "Sail through the Esna lock as the valley opens out",
          "Afternoon arrival in Luxor with time to rest aboard",
          "Optional sound-and-light evening at Karnak (extra)",
        ],
      },
      {
        label: "Day",
        num: "07",
        title: "Luxor East Bank",
        items: [
          "Karnak, the largest temple complex of the ancient world",
          "Luxor Temple in the heart of the city",
          "Disembark and transfer to your Luxor hotel",
        ],
      },
      {
        label: "Day",
        num: "08",
        title: "West Bank & train to Cairo",
        items: [
          "Valley of the Kings and the tomb-painted hills of Thebes",
          "Mortuary Temple of Hatshepsut and the Colossi of Memnon",
          "Evening sleeper train back to Cairo",
        ],
      },
      {
        label: "Day",
        num: "09",
        title: "Giza & Saqqara",
        items: [
          "The Pyramids of Khufu, Khafre and Menkaure and the Great Sphinx",
          "Step Pyramid of Djoser at Saqqara, the world's oldest stone monument",
          "Panoramic viewpoint across the Giza plateau",
        ],
      },
      {
        label: "Day",
        num: "10",
        title: "Islamic Cairo & departure",
        items: [
          "Saladin Citadel and the alabaster Mosque of Muhammad Ali",
          "Khan el-Khalili bazaar for a last wander",
          "Private transfer to the airport for your departure",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "9 nights' accommodation — 5-star hotels and a deluxe Nile cruise",
      "3-night full-board Nile cruise, Aswan to Luxor",
      "Sleeper-train berths Cairo↔Upper Egypt (both directions)",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Is the Nile cruise private?",
        a: "You travel with your own Egyptologist and private transfers, but the cruise ship itself is shared with other guests. Cabins are private and all sightseeing is run as a private group.",
      },
      {
        q: "How do the overnight trains work?",
        a: "You travel in a private sleeper cabin with dinner and breakfast served aboard. It saves a daytime transfer and arrives refreshed for the morning's sightseeing.",
      },
      {
        q: "Can Abu Simbel be added?",
        a: "Yes. Abu Simbel is offered as an optional extra from Aswan, by short flight or road convoy, and is best added on the Aswan day. We arrange it on request.",
      },
      {
        q: "What is the best time of year to travel?",
        a: "October to April brings comfortable temperatures across both Cairo and Upper Egypt. Summer is hot in the south, so we start early and rest in the afternoons.",
      },
    ],
    order: 1,
  },
  {
    slug: "tour-7-day",
    hero: {
      alt: "The Great Sphinx of Giza facing the dawn",
      src: "/images/giza/giza-great-sphinx-frontal.webp",
      width: 736,
      height: 920,
    },
    title: "Egypt Highlights Deluxe",
    subtitle:
      "A week that gathers the essentials — Cairo, Alexandria and Luxor — with sleeper-train nights between them.",
    kind: "multiday",
    category: "Signature Journey",
    tag: "7 Days",
    durationLabel: "7 Days / 6 Nights",
    startPoint: "Cairo (airport or hotel)",
    cities: ["Cairo", "Giza", "Alexandria", "Luxor"],
    visiting: "Cairo · Giza · Alexandria · Luxor",
    isPrivate: privateNote,
    price: 1072,
    was: 1392,
    summary:
      "The headline acts of Egypt in seven days — the Egyptian Museum, Alexandria, the temples and tombs of Luxor, and the Pyramids of Giza.",
    overview:
      "For travellers with a week to give, this journey distils Egypt to its greatest hits without rushing them. Cairo opens with the Egyptian Museum; a full day on the Mediterranean takes in Alexandria; then the sleeper train carries you to Luxor for the temples of the living and the tombs of the dead. You return north for the Pyramids of Giza, Saqqara and the medieval heart of Islamic Cairo. Private throughout, with your own Egyptologist and five-star hotels.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Cairo & the Egyptian Museum",
        items: [
          "Private airport welcome and transfer to your 5-star hotel",
          "Afternoon at the Egyptian Museum in Tahrir",
          "Evening orientation with your guide",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Alexandria day trip",
        items: [
          "Drive to the Mediterranean coast",
          "Catacombs of Kom El Shoqafa, Pompey's Pillar and the Citadel of Qaitbay",
          "Bibliotheca Alexandrina and a seafront seafood lunch",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Coptic Cairo & overnight train to Luxor",
        items: [
          "Hanging Church and Old Cairo in the morning",
          "Evening transfer to the station",
          "Sleeper train south with private cabins",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Luxor East Bank",
        items: [
          "Karnak temple complex and the avenue of sphinxes",
          "Luxor Temple at the city's heart",
          "Check in to your Luxor hotel",
        ],
      },
      {
        label: "Day",
        num: "05",
        title: "West Bank & train to Cairo",
        items: [
          "Valley of the Kings and the Mortuary Temple of Hatshepsut",
          "Colossi of Memnon",
          "Evening sleeper train back to Cairo",
        ],
      },
      {
        label: "Day",
        num: "06",
        title: "Giza & Saqqara",
        items: [
          "Pyramids of Giza and the Great Sphinx",
          "Step Pyramid of Djoser at Saqqara",
          "Panoramic plateau viewpoint",
        ],
      },
      {
        label: "Day",
        num: "07",
        title: "Islamic Cairo & departure",
        items: [
          "Saladin Citadel and the Mosque of Muhammad Ali",
          "Khan el-Khalili bazaar",
          "Private transfer to the airport",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "6 nights' accommodation in 5-star hotels",
      "Sleeper-train berths Cairo↔Luxor (both directions)",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "How much walking should I expect?",
        a: "A comfortable amount — temple complexes such as Karnak involve an hour or two on foot over uneven ground. We pace each day and rest in the heat.",
      },
      {
        q: "Are the overnight trains comfortable?",
        a: "Yes. You have a private sleeper cabin with dinner and breakfast served aboard, so the long transfers happen while you rest.",
      },
      {
        q: "Can I extend with a Nile cruise?",
        a: "Absolutely — many guests add a 3 or 4-night cruise between Aswan and Luxor. Tell us your dates and we will tailor the extension.",
      },
    ],
    order: 2,
  },
  {
    slug: "tour-4-day",
    hero: {
      alt: "The lighthouse on the Alexandria seafront on the Mediterranean",
      src: "/images/alexandria/alexandria-lighthouse.webp",
      width: 736,
      height: 920,
    },
    title: "From Pyramids to the Sea",
    subtitle:
      "Four days pairing the monuments of Cairo and Giza with a day on the Mediterranean at Alexandria.",
    kind: "multiday",
    category: "Short Break",
    tag: "4 Days",
    durationLabel: "4 Days / 3 Nights",
    startPoint: "Cairo (airport or hotel)",
    cities: ["Cairo", "Giza", "Alexandria"],
    visiting: "Cairo · Giza · Alexandria",
    isPrivate: privateNote,
    price: 562,
    was: 730,
    summary:
      "A compact northern journey — the Egyptian Museum, Alexandria's Greco-Roman layers, the Pyramids of Giza and medieval Cairo.",
    overview:
      "Short on days but rich in range, this break pairs the founding monuments of the Old Kingdom with the Mediterranean cosmopolis of Alexandria. You start with the Egyptian Museum, spend a full day among Alexandria's catacombs and citadel, then give Giza and Saqqara the morning light they deserve before closing in the lanes of Islamic Cairo. Ideal as a stand-alone trip or the front half of a longer Egypt itinerary.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Arrival & the Egyptian Museum",
        items: [
          "Private airport welcome and hotel transfer",
          "Afternoon at the Egyptian Museum in Tahrir",
          "Welcome dinner recommendations from your guide",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Alexandria day trip",
        items: [
          "Catacombs of Kom El Shoqafa",
          "Citadel of Qaitbay and the Bibliotheca Alexandrina",
          "Pompey's Pillar and a seafront seafood lunch",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Giza & Saqqara",
        items: [
          "Pyramids of Giza and the Great Sphinx",
          "Step Pyramid of Djoser at Saqqara",
          "Memphis, first capital of a united Egypt",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Islamic Cairo & departure",
        items: [
          "Saladin Citadel and the Mosque of Muhammad Ali",
          "Khan el-Khalili bazaar",
          "Private transfer to the airport",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "3 nights' accommodation in 5-star hotels",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Is four days enough for Cairo and Alexandria?",
        a: "Yes — this itinerary is built to cover the essentials of both without rushing, with one full day given to Alexandria and a full morning to the Giza plateau.",
      },
      {
        q: "Can I add Luxor or a Nile cruise?",
        a: "Easily. This break makes a natural first half; we add a flight or sleeper train to Luxor and Aswan whenever you have more days.",
      },
      {
        q: "How long is the drive to Alexandria?",
        a: "About two and a half to three hours each way on the desert road, in a private air-conditioned vehicle with your guide.",
      },
    ],
    order: 3,
  },
  {
    slug: "tour-3-day",
    hero: {
      alt: "A painted royal tomb in the Valley of the Kings, Luxor",
      src: "/images/luxor/luxor-valley-of-the-kings-tomb.webp",
      width: 1000,
      height: 600,
    },
    title: "Cairo to Luxor & Aswan",
    subtitle:
      "Three days of Upper Egypt's temples and tombs, with domestic flights folded into the price.",
    kind: "multiday",
    category: "Short Break",
    tag: "3 Days",
    durationLabel: "3 Days / 2 Nights",
    startPoint: "Cairo (flights included)",
    cities: ["Cairo", "Luxor", "Aswan"],
    visiting: "Luxor · Aswan",
    isPrivate: privateNote,
    price: 479,
    was: 540,
    flightsIncluded: true,
    summary:
      "A fast, flight-included loop through Luxor and Aswan — Karnak, the Valley of the Kings, Philae and the High Dam — out and back from Cairo.",
    overview:
      "When time is short but Upper Egypt is the draw, this flight-included loop delivers the south's headline sites in three focused days. You fly Cairo to Luxor for the temples of the East Bank and the royal tombs of the West, drive on to Aswan for the High Dam and the island temple of Philae, then fly back to Cairo. Domestic flights are included, so the long distances vanish and the days stay full of monuments rather than transfers.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Fly to Luxor — the East Bank",
        items: [
          "Morning flight Cairo to Luxor, met on arrival",
          "Karnak temple complex",
          "Luxor Temple and overnight in Luxor",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "West Bank & on to Aswan",
        items: [
          "Valley of the Kings and the Mortuary Temple of Hatshepsut",
          "Colossi of Memnon",
          "Drive to Aswan along the Nile and overnight",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Aswan & fly to Cairo",
        items: [
          "Aswan High Dam and the Unfinished Obelisk",
          "Island Temple of Philae by motorboat",
          "Afternoon flight back to Cairo",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "Domestic flights Cairo–Luxor and Aswan–Cairo",
      "2 nights' accommodation in 5-star hotels",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Are the domestic flights really included?",
        a: "Yes — both the Cairo–Luxor and Aswan–Cairo flights are part of the price. You only arrange your own international flights to and from Cairo.",
      },
      {
        q: "Is three days too rushed?",
        a: "It is brisk but well-sequenced: flights remove the long road transfers, so each day is spent at the monuments rather than travelling between them.",
      },
      {
        q: "Can I add Abu Simbel from Aswan?",
        a: "Yes, as an optional extra by early flight or road convoy. It adds a few hours to the Aswan morning, so we plan it in advance.",
      },
    ],
    order: 4,
  },

  // ========================= DAY TOURS =====================================
  {
    slug: "tour-fayoum",
    title: "Fayoum Oasis",
    subtitle:
      "A full day in the green oasis southwest of Cairo — lakes, desert waterfalls, fossil whales and a pottery village.",
    kind: "day",
    category: "Day Tour",
    tag: "Full Day",
    durationLabel: "Full day (≈10 hours)",
    startPoint: "Cairo or Giza hotel",
    cities: ["Fayoum"],
    visiting: "Lake Qarun · Wadi El Rayan · Wadi Al-Hitan · Tunis village",
    isPrivate: privateNote,
    price: 126,
    summary:
      "Lake Qarun, the waterfalls and dunes of Wadi El Rayan, the fossil whales of Wadi Al-Hitan and the potters of Tunis village — Egypt's wild, green other half.",
    overview:
      "An hour and a half southwest of Cairo, the Fayoum depression trades monuments for landscape: a great salt lake, freshwater waterfalls in the desert, a UNESCO valley of fossilised whales, and a hillside village of potters. This full day is a complete change of register from the temples — wide horizons, birdlife, dunes and a lakeside fish lunch. Travel is private, with your guide and driver for the whole day.",
    itinerary: [
      {
        label: "Stop",
        num: "01",
        title: "Lake Qarun",
        text: "Begin on the shore of Lake Qarun, the ancient Lake Moeris, where migratory birds gather and old fishing boats line the water. A first feel for the oasis before heading deeper into the desert.",
      },
      {
        label: "Stop",
        num: "02",
        title: "Wadi El Rayan waterfalls",
        text: "Egypt's largest waterfalls, where the two Rayan lakes spill between dunes. Time to walk the shoreline and take in a landscape that feels nothing like the Nile valley.",
      },
      {
        label: "Stop",
        num: "03",
        title: "Valley of the Whales (Wadi Al-Hitan)",
        text: "A UNESCO World Heritage site holding 40-million-year-old skeletons of early whales, preserved where an ancient sea once lay. An open-air museum of deep time among the sands.",
      },
      {
        label: "Stop",
        num: "04",
        title: "Magic Lake & Mudawara Mountain",
        text: "The so-called Magic Lake, fed by mineral springs and changing colour with the light, beneath the dunes of Mudawara — a favourite spot for sandboarding and a moment of stillness.",
      },
      {
        label: "Stop",
        num: "05",
        title: "Tunis pottery village & lakeside lunch",
        text: "Finish in Tunis, the hillside village famous for its potters and studios, then a relaxed fish lunch by the lake before the drive back to Cairo.",
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "4x4 desert transfer where required",
      "Lakeside fish lunch",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Is Fayoum suitable for families?",
        a: "Yes — the mix of lakes, dunes and fossils appeals across ages. The terrain is easy, with short walks rather than long hikes.",
      },
      {
        q: "What should I wear and bring?",
        a: "Comfortable shoes, sun protection and a light layer for the breeze off the lake. The desert sections can be dusty, so sunglasses help.",
      },
      {
        q: "How far is it from Cairo?",
        a: "Around 90 minutes to two hours each way by private vehicle, depending on your hotel and traffic leaving the city.",
      },
    ],
    order: 5,
  },
  {
    slug: "tour-giza-museum",
    hero: {
      alt: "The Great Pyramid of Khufu on the Giza plateau",
      src: "/images/giza/giza-great-pyramid-khufu.webp",
      width: 736,
      height: 981,
    },
    title: "Giza & the Grand Museum",
    subtitle:
      "The Pyramids and Sphinx in the morning, the Grand Egyptian Museum in the afternoon — the old wonder and the new, in one day.",
    kind: "day",
    category: "Day Tour",
    tag: "Full Day",
    durationLabel: "Full day (≈8 hours)",
    startPoint: "Cairo or Giza hotel",
    cities: ["Giza"],
    visiting: "Giza plateau · Great Sphinx · GEM",
    isPrivate: privateNote,
    price: 72,
    summary:
      "The Great Pyramid, the panorama of all three pyramids, the Valley Temple and Sphinx, then the vast new Grand Egyptian Museum beside them.",
    overview:
      "This day sets the oldest wonder of the world beside the newest museum built to hold its treasures. The morning belongs to the Giza plateau — the pyramids of Khufu, Khafre and Menkaure, the panoramic viewpoint, and the Great Sphinx guarding its valley temple. The afternoon moves to the Grand Egyptian Museum, the largest archaeological museum in the world, whose galleries and grand staircase finally gather Tutankhamun's collection in full. Private guide and transfers throughout.",
    itinerary: [
      {
        label: "Stop",
        num: "01",
        title: "Great Pyramid of Khufu",
        text: "Stand at the base of the only surviving wonder of the ancient world, the pyramid of Khufu, and learn how it was raised. Entry inside the chambers is available as an optional extra.",
      },
      {
        label: "Stop",
        num: "02",
        title: "Khafre, Menkaure & the panorama",
        text: "Continue to the pyramids of Khafre and Menkaure and the panoramic viewpoint where all three line up across the desert — the classic image of Giza.",
      },
      {
        label: "Stop",
        num: "03",
        title: "Valley Temple & the Great Sphinx",
        text: "Walk the granite-built Valley Temple of Khafre to the foot of the Great Sphinx, the lion-bodied guardian carved from the plateau's living rock.",
      },
      {
        label: "Stop",
        num: "04",
        title: "Grand Egyptian Museum (GEM)",
        text: "Cross to the Grand Egyptian Museum beside the plateau — its great staircase of statuary and the complete Tutankhamun galleries, the headline collection of modern Egypt.",
      },
    ],
    included: [...baseIncluded],
    excluded: [
      "Entry inside the pyramid chambers (optional extra)",
      ...baseExcluded,
    ],
    faqs: [
      {
        q: "Can we go inside the Great Pyramid?",
        a: "Yes, as an optional extra. A limited number of tickets are sold each day for the interior chambers; we can secure one on request, subject to availability.",
      },
      {
        q: "Is the Grand Egyptian Museum fully open?",
        a: "The main galleries, the grand staircase and the Tutankhamun collection are open to visitors. Your guide will focus on the highlights so the afternoon never feels rushed.",
      },
      {
        q: "How much walking is involved?",
        a: "A moderate amount across the plateau and through the museum galleries. We take it at your pace with rests in the shade.",
      },
    ],
    order: 6,
  },
  {
    slug: "tour-saqqara",
    hero: {
      alt: "The Step Pyramid of Djoser at Saqqara, the world's oldest stone monument",
      src: "/images/giza/saqqara-step-pyramid-djoser.webp",
      width: 1600,
      height: 1200,
    },
    title: "Saqqara, Memphis & Dahshur",
    subtitle:
      "The birthplace of the pyramid — from Djoser's first step pyramid to the great geometric tombs of Dahshur.",
    kind: "day",
    category: "Day Tour",
    tag: "Full Day",
    durationLabel: "Full day (≈8 hours)",
    startPoint: "Cairo or Giza hotel",
    cities: ["Saqqara", "Memphis", "Dahshur"],
    visiting: "Saqqara · Memphis · Dahshur",
    isPrivate: privateNote,
    price: 62,
    summary:
      "Djoser's Step Pyramid, the open-air ruins of Memphis, and the Bent and Red Pyramids of Dahshur — the story of how the pyramid was invented.",
    overview:
      "Before Giza there was Saqqara. This day follows the invention of the pyramid across three sites south of Cairo, often quieter than Giza and all the more atmospheric for it. You begin at the Step Pyramid of Djoser, the world's oldest monumental stone building, walk the open-air remains of Memphis, the first capital, and finish at Dahshur, where the Bent and Red Pyramids show the engineering leap toward the true pyramid form. Private throughout.",
    itinerary: [
      {
        label: "Stop",
        num: "01",
        title: "Step Pyramid of Djoser",
        text: "Saqqara's centrepiece — the stepped pyramid designed by Imhotep for King Djoser, the world's oldest large stone monument, set in its vast funerary enclosure.",
      },
      {
        label: "Stop",
        num: "02",
        title: "Memphis & the colossus of Ramses II",
        text: "The open-air museum of Memphis, ancient capital of a united Egypt, home to a recumbent colossus of Ramses II and a finely carved alabaster sphinx.",
      },
      {
        label: "Stop",
        num: "03",
        title: "Bent Pyramid of Dahshur",
        text: "At Dahshur, the Bent Pyramid of Sneferu, whose changing angle records the moment ancient engineers corrected course mid-build.",
      },
      {
        label: "Stop",
        num: "04",
        title: "Red Pyramid",
        text: "The Red Pyramid nearby, the first successful true pyramid, which you can enter to descend into its corbelled chambers.",
      },
    ],
    included: [...baseIncluded],
    excluded: baseExcluded,
    faqs: [
      {
        q: "How does Saqqara compare with Giza?",
        a: "Saqqara is older and usually quieter. It tells the story of how pyramids developed, from Djoser's stepped form to the true pyramids at Dahshur — a perfect complement to a Giza day.",
      },
      {
        q: "Can we go inside the pyramids at Dahshur?",
        a: "Yes — the Red Pyramid is generally open to enter, with a stooped passage down to the burial chambers. Your guide will advise on the day.",
      },
      {
        q: "Is this a good first day in Cairo?",
        a: "It is an excellent one — fewer crowds and a clear narrative that makes the later Giza visit richer.",
      },
    ],
    order: 7,
  },
  {
    slug: "tour-religious-citadel",
    hero: {
      alt: "The Mosque of Muhammad Ali crowning the Saladin Citadel in Cairo",
      src: "/images/cairo/cairo-mosque-muhammad-ali-citadel.webp",
      width: 736,
      height: 1104,
    },
    title: "Religious Cairo & the Citadel",
    subtitle:
      "The faiths of Cairo in one day — Coptic churches, an ancient synagogue, and the great mosque-crowned Citadel.",
    kind: "day",
    category: "Day Tour",
    tag: "Full Day",
    durationLabel: "Full day (≈8 hours)",
    startPoint: "Cairo or Giza hotel",
    cities: ["Cairo"],
    visiting: "Coptic Cairo · Saladin Citadel",
    isPrivate: privateNote,
    price: 73,
    summary:
      "The Hanging Church, Ben Ezra Synagogue and Abu Serga in Old Cairo, then Saladin's Citadel and the alabaster Mosque of Muhammad Ali.",
    overview:
      "Cairo's religious heritage layers Coptic, Jewish and Islamic histories within a few square kilometres. This day moves from the lanes of Old Cairo — the Hanging Church, the ancient Ben Ezra Synagogue and the church of Abu Serga — up to the medieval Saladin Citadel, crowned by the alabaster Mosque of Muhammad Ali with its sweeping views over the city. A thoughtful, atmospheric day led by your Egyptologist.",
    itinerary: [
      {
        label: "Stop",
        num: "01",
        title: "The Hanging Church",
        text: "Begin in Coptic Cairo at the Hanging Church, suspended above a Roman gate tower, one of the oldest churches in Egypt with its delicate wooden screens and icons.",
      },
      {
        label: "Stop",
        num: "02",
        title: "Ben Ezra Synagogue & Abu Serga",
        text: "Walk the narrow lanes to the Ben Ezra Synagogue and the church of Abu Serga, traditionally held to mark where the Holy Family sheltered in Egypt.",
      },
      {
        label: "Stop",
        num: "03",
        title: "Saladin Citadel",
        text: "Climb to the Citadel of Saladin, the medieval fortress that commanded Cairo for centuries, with panoramas reaching to the pyramids on a clear day.",
      },
      {
        label: "Stop",
        num: "04",
        title: "Mosque of Muhammad Ali",
        text: "Finish inside the alabaster Mosque of Muhammad Ali, the Ottoman-style landmark whose domes define the Cairo skyline.",
      },
    ],
    included: [...baseIncluded],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Is there a dress code?",
        a: "Yes — modest dress is required at the religious sites: shoulders and knees covered, and shoes removed at the mosque. Bring a scarf; we will guide you on the day.",
      },
      {
        q: "Are the sites close together?",
        a: "The Coptic Cairo sites are within walking distance of one another; the Citadel is a short private drive away, so the day flows comfortably.",
      },
      {
        q: "Will the sites be open?",
        a: "We plan around prayer times and any closures so your visit is smooth. Photography is generally allowed, with some interior restrictions.",
      },
    ],
    order: 8,
  },
  {
    slug: "tour-cairo-museums",
    hero: {
      alt: "The grand hall of the Egyptian Museum in Cairo",
      src: "/images/cairo/cairo-egyptian-museum-hall.webp",
      width: 1067,
      height: 1600,
    },
    title: "Cairo Museums",
    subtitle:
      "Two great collections in one day — the historic Egyptian Museum and the National Museum of Egyptian Civilization, with the Royal Mummies.",
    kind: "day",
    category: "Day Tour",
    tag: "Full Day",
    durationLabel: "Full day (≈7 hours)",
    startPoint: "Cairo or Giza hotel",
    cities: ["Cairo"],
    visiting: "Egyptian Museum · NMEC",
    isPrivate: privateNote,
    price: 58,
    summary:
      "The treasures of the Egyptian Museum in Tahrir, then the National Museum of Egyptian Civilization and its Royal Mummies Hall.",
    overview:
      "A day for those who love the objects themselves. You begin at the storied Egyptian Museum in Tahrir, whose century-old halls hold the densest concentration of pharaonic treasure anywhere, then move to the modern National Museum of Egyptian Civilization (NMEC), where the great Royal Mummies Hall presents the kings and queens of the New Kingdom in hushed, climate-controlled galleries. A connoisseur's day, narrated by your Egyptologist.",
    itinerary: [
      {
        label: "Stop",
        num: "01",
        title: "Egyptian Museum, Tahrir",
        text: "The grand old museum on Tahrir Square — statuary, sarcophagi, papyri and the gold of the New Kingdom, walked highlight by highlight with your guide.",
      },
      {
        label: "Stop",
        num: "02",
        title: "National Museum of Egyptian Civilization",
        text: "Cross the city to the NMEC in Fustat, a modern museum tracing Egypt from prehistory to the present across a single sweeping narrative.",
      },
      {
        label: "Stop",
        num: "03",
        title: "Royal Mummies Hall",
        text: "Descend into the dimly lit Royal Mummies Hall, where the preserved bodies of pharaohs including Ramses II and Hatshepsut rest in dignified display.",
      },
    ],
    included: [...baseIncluded],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Is the Royal Mummies Hall included?",
        a: "Yes — entry to the Royal Mummies Hall within the NMEC is included. It is a quiet, respectful space, and photography is not permitted inside.",
      },
      {
        q: "How do the two museums differ?",
        a: "The Egyptian Museum is dense, historic and treasure-packed; the NMEC is modern and narrative, with the mummies as its centrepiece. Together they give a complete picture.",
      },
      {
        q: "Is this too much for one day?",
        a: "Not with a guide curating the highlights. We focus on the essential objects in each, with a break between the two museums.",
      },
    ],
    order: 9,
  },
  {
    slug: "tour-alexandria",
    hero: {
      alt: "The Roman Amphitheatre at Kom el-Dikka in Alexandria",
      src: "/images/alexandria/alexandria-roman-amphitheatre.webp",
      width: 1000,
      height: 600,
    },
    title: "Alexandria Sightseeing",
    subtitle:
      "A full day on the Mediterranean — catacombs, a Roman pillar, a sea-girt citadel and the great modern library.",
    kind: "day",
    category: "Day Tour",
    tag: "Full Day",
    durationLabel: "Full day (≈11 hours)",
    startPoint: "Cairo or Giza hotel",
    cities: ["Alexandria"],
    visiting: "Catacombs · Qaitbay · Bibliotheca Alexandrina",
    isPrivate: privateNote,
    price: 52,
    summary:
      "The Catacombs of Kom El Shoqafa, Pompey's Pillar, the Citadel of Qaitbay on the old Pharos site and the Bibliotheca Alexandrina, with a seafood lunch.",
    overview:
      "Alexander's city wears its Greco-Roman past lightly along a curving Mediterranean corniche. This full day takes in the underground Catacombs of Kom El Shoqafa, the towering Pompey's Pillar, the Citadel of Qaitbay built on the foundations of the legendary Pharos lighthouse, and the soaring modern Bibliotheca Alexandrina — heir to the ancient Library. A seafront seafood lunch comes with the territory. Private guide and transfers from Cairo.",
    itinerary: [
      {
        label: "Stop",
        num: "01",
        title: "Catacombs of Kom El Shoqafa",
        text: "Descend into the Catacombs of Kom El Shoqafa, a multi-level Roman necropolis where Egyptian and classical styles blend in carved stone — one of antiquity's stranger marvels.",
      },
      {
        label: "Stop",
        num: "02",
        title: "Pompey's Pillar",
        text: "Visit Pompey's Pillar, the great Roman triumphal column rising from the ruins of the Serapeum, flanked by granite sphinxes.",
      },
      {
        label: "Stop",
        num: "03",
        title: "Citadel of Qaitbay",
        text: "Walk the sea walls of the Citadel of Qaitbay, raised on the very spot where the Pharos lighthouse — a wonder of the ancient world — once stood.",
      },
      {
        label: "Stop",
        num: "04",
        title: "Bibliotheca Alexandrina & seafood lunch",
        text: "Finish at the dramatic modern Bibliotheca Alexandrina, the reborn Library of Alexandria, after a relaxed seafood lunch on the Mediterranean front.",
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "Seafront seafood lunch",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "How long is the drive from Cairo?",
        a: "Around two and a half to three hours each way on the desert road, which is why this is a long but rewarding full-day trip.",
      },
      {
        q: "Can we visit by train instead?",
        a: "Yes — for those who prefer it we can arrange the journey by train and meet you in Alexandria with your private guide and vehicle. Just ask.",
      },
      {
        q: "Is the Bibliotheca Alexandrina worth it?",
        a: "Very much so — its architecture alone is striking, and the building stands as a deliberate echo of the ancient Library that made the city famous.",
      },
    ],
    order: 10,
  },
  {
    slug: "tour-giza-sphinx",
    hero: {
      alt: "The Great Sphinx of Giza in profile before the pyramids",
      src: "/images/giza/giza-great-sphinx-profile.webp",
      width: 736,
      height: 1104,
    },
    title: "Giza Pyramids & Sphinx",
    subtitle:
      "A focused half day among the three great pyramids and the Sphinx, with the classic panoramic viewpoint.",
    kind: "day",
    category: "Day Tour",
    tag: "Half Day",
    durationLabel: "Half day (≈5 hours)",
    startPoint: "Cairo or Giza hotel",
    cities: ["Giza"],
    visiting: "Giza plateau · Great Sphinx",
    isPrivate: privateNote,
    price: 60,
    summary:
      "The Great Pyramid, the pyramids of Khafre and Menkaure, the panoramic viewpoint and the Valley Temple with the Great Sphinx — Giza in a morning.",
    overview:
      "For travellers with limited time or an arrival-day window, this half day delivers the Giza plateau without filler. You take in the Great Pyramid of Khufu, the neighbouring pyramids of Khafre and Menkaure, the panoramic viewpoint where all three align, and the Valley Temple leading to the Great Sphinx. A private guide makes the short visit count, and it pairs neatly with an afternoon at leisure or the Grand Egyptian Museum.",
    itinerary: [
      {
        label: "Stop",
        num: "01",
        title: "Great Pyramid of Khufu",
        text: "Begin at the foot of the Great Pyramid, the last standing wonder of the ancient world, with your guide explaining how and why it was built.",
      },
      {
        label: "Stop",
        num: "02",
        title: "Khafre & Menkaure",
        text: "Move on to the pyramids of Khafre — still capped with its original casing stones at the apex — and the smaller Menkaure.",
      },
      {
        label: "Stop",
        num: "03",
        title: "Panoramic viewpoint",
        text: "Pause at the desert panorama where all three pyramids line up, the classic photograph of Giza, with optional camel or horse rides nearby.",
      },
      {
        label: "Stop",
        num: "04",
        title: "Valley Temple & the Great Sphinx",
        text: "End at the granite Valley Temple and the Great Sphinx, the colossal guardian carved from the plateau's bedrock.",
      },
    ],
    included: [...baseIncluded.filter((x) => !x.startsWith("Lunch"))],
    excluded: [
      "Lunch (half-day tour)",
      "Camel or horse rides (optional extra)",
      ...baseExcluded.filter((x) => !x.startsWith("Optional extras")),
      "Other optional extras — dinner cruise, drinks",
    ],
    faqs: [
      {
        q: "Why choose the half day over the full day?",
        a: "It is ideal on an arrival or departure day, or when you want the pyramids without a museum. For the Grand Egyptian Museum as well, choose our full-day Giza & the Grand Museum tour.",
      },
      {
        q: "Can I ride a camel at the pyramids?",
        a: "Yes — camel and horse rides are available at the plateau as an optional extra. Your guide will help you arrange a fair price on the day.",
      },
      {
        q: "Can we go inside a pyramid?",
        a: "Interior entry is available as an optional extra for the Great Pyramid or one of the smaller pyramids, subject to the daily ticket allocation.",
      },
    ],
    order: 11,
  },
  {
    slug: "tour-cairo-food",
    title: "Cairo Authentic Food",
    subtitle:
      "An evening walking the flavours of Cairo — koshari, street classics, grilled pigeon and honey-soaked sweets.",
    kind: "day",
    category: "Day Tour",
    tag: "Evening",
    durationLabel: "Evening (≈4 hours)",
    startPoint: "Cairo hotel",
    cities: ["Cairo"],
    visiting: "Downtown Cairo · street-food quarters",
    isPrivate: privateNote,
    price: 54,
    summary:
      "A guided evening tasting of Cairo's best-loved dishes — koshari, ful and ta'meya, hawawshi and grilled pigeon, kunafa and basbousa, finished at a traditional ahwa.",
    overview:
      "Egypt's capital is a feast best discovered on foot and after dark. This guided evening leads you through the dishes that define everyday Cairo — the carbohydrate symphony of koshari, the breakfast-anytime staples of ful and ta'meya, the meat-stuffed hawawshi and grilled pigeon, and a sweet finish of kunafa and basbousa. You end where Cairenes do, over mint tea and shisha at a traditional ahwa (café). A relaxed, flavour-led counterpoint to the monuments.",
    itinerary: [
      {
        label: "Stop",
        num: "01",
        title: "Koshari",
        text: "Start with Egypt's national dish — koshari, a comforting layer of rice, lentils, pasta and chickpeas under crisp fried onions and a tangy tomato sauce.",
      },
      {
        label: "Stop",
        num: "02",
        title: "Ful & ta'meya",
        text: "Taste ful medames, the slow-cooked fava beans eaten morning to night, alongside ta'meya, Egypt's fava-bean take on falafel, fried fresh to order.",
      },
      {
        label: "Stop",
        num: "03",
        title: "Hawawshi & grilled pigeon",
        text: "Move to the savoury heart of the evening — hawawshi, spiced minced meat baked in crisp bread, and hamam mahshi, grilled pigeon stuffed with seasoned rice.",
      },
      {
        label: "Stop",
        num: "04",
        title: "Kunafa & basbousa",
        text: "Turn to dessert with warm kunafa, its shredded pastry over sweet cheese, and squares of syrup-soaked basbousa semolina cake.",
      },
      {
        label: "Stop",
        num: "05",
        title: "A traditional ahwa",
        text: "Finish at a backstreet ahwa over mint tea, Turkish coffee and the murmur of the city — the way every Cairo evening should end.",
      },
    ],
    included: [
      "Private local food guide for the evening",
      "All food tastings listed in the itinerary",
      "Bottled water and tea/coffee at the ahwa",
      "Private air-conditioned transfers",
      "Hotel pickup & drop-off",
    ],
    excluded: [
      "Alcoholic drinks",
      "Additional dishes beyond the tasting menu",
      ...baseExcluded.filter(
        (x) => !x.startsWith("Optional extras") && !x.startsWith("Tipping"),
      ),
      "Tipping (gratuities)",
    ],
    faqs: [
      {
        q: "Is the food safe for visitors?",
        a: "Yes — we choose busy, trusted establishments with high turnover, and your guide handles ordering. Bottled water is provided throughout.",
      },
      {
        q: "Can dietary needs be accommodated?",
        a: "Vegetarians are well served — koshari, ful, ta'meya and the sweets are all meat-free. Tell us in advance about allergies and we will adjust the route.",
      },
      {
        q: "Will I be too full?",
        a: "Portions are tasting-sized and spread across the walk, so you sample widely without overdoing any one stop. Come hungry but not anxious.",
      },
    ],
    order: 12,
  },
];

// Lookups -----------------------------------------------------------------
export const toursByOrder = [...tours].sort((a, b) => a.order - b.order);
export const multidayTours = toursByOrder.filter((t) => t.kind === "multiday");
export const dayTours = toursByOrder.filter((t) => t.kind === "day");

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
