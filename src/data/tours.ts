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
        q: "How much walking does this day involve?",
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

  // ========================= NILE CRUISES ==================================
  {
    slug: "tour-nile-cruise",
    hero: {
      alt: "An ancient temple standing at the edge of the Nile in Upper Egypt",
      src: "/images/luxor/luxor-temple-on-the-nile.webp",
      width: 736,
      height: 736,
    },
    title: "Nile in Style: Aswan to Luxor",
    subtitle:
      "Three nights on the river between Aswan and Luxor, with Kom Ombo and Edfu unlocked along the way — the classic cruise, privately guided.",
    kind: "multiday",
    category: "Nile Cruise",
    tag: "4 Days",
    durationLabel: "4 Days / 3 Nights",
    startPoint: "Aswan (hotel, station or airport)",
    cities: ["Aswan", "Kom Ombo", "Edfu", "Luxor"],
    visiting: "Aswan · Kom Ombo · Edfu · Luxor",
    isPrivate: privateNote,
    price: 745,
    was: 968,
    summary:
      "The essential Nile cruise, done properly — Philae and the High Dam, three nights afloat past Kom Ombo and Edfu, and Luxor's East and West Banks with your own Egyptologist.",
    overview:
      "Two hundred kilometres of river separate Aswan from Luxor, and for three thousand years this was Egypt's highway of kings. This journey covers it the only way it should be covered: slowly, by water. You board in Aswan after visiting the island Temple of Philae and the High Dam, then sail north with stops at Kom Ombo — the twin temple shared by the crocodile god Sobek and Horus the Elder — and Edfu, the best-preserved temple in Egypt. The cruise ends in Luxor with a full private programme across both banks: Karnak and Luxor Temple on the east, the Valley of the Kings and Hatshepsut's terraces on the west. Your Egyptologist sails with you, so every stop is guided privately even though the vessel itself is shared.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Aswan — Philae, the High Dam & embarkation",
        items: [
          "Private meet in Aswan and morning visit to the High Dam and the Unfinished Obelisk",
          "Motorboat to the island Temple of Philae, sanctuary of Isis",
          "Board your cruise ship before lunch; afternoon at leisure on the sundeck",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Kom Ombo & Edfu",
        items: [
          "Morning sail to Kom Ombo and its twin temple above the riverbank",
          "Continue to Edfu — the Temple of Horus, the most complete in Egypt",
          "Evening on board as the ship moors below the temple town",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "The Esna lock & arrival in Luxor",
        items: [
          "Pass through the Esna lock as the valley widens toward Thebes",
          "Afternoon arrival in Luxor; optional evening visit to Luxor Temple illuminated",
          "Final night on board",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Luxor — both banks & disembarkation",
        items: [
          "Karnak's great hypostyle hall with your Egyptologist",
          "Cross to the West Bank — Valley of the Kings and the Temple of Hatshepsut",
          "Disembark and transfer to your Luxor hotel, station or airport",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "3-night full-board Nile cruise, Aswan to Luxor",
      "All shore excursions as private visits with your own guide",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Is the cruise itself private?",
        a: "The ship is shared with other guests; your sightseeing is not. Every shore excursion runs privately with your own Egyptologist and vehicle, and your cabin is of course your own.",
      },
      {
        q: "Can this cruise be upgraded to a dahabiya?",
        a: "Yes. A private dahabiya — a traditional sailing vessel for your party alone — covers the same route over four to five nights. Availability is limited, so ask early; we will quote it alongside the standard cruise.",
      },
      {
        q: "How do I get to Aswan for embarkation?",
        a: "Most guests fly from Cairo (1 hr 15 min) or take the overnight sleeper train. We arrange either as an add-on, timed to the ship's boarding window.",
      },
    ],
    order: 13,
  },

  {
    slug: "tour-upper-egypt-5day",
    hero: {
      alt: "A colossus of Ramesses II at the entrance of Luxor Temple",
      src: "/images/luxor/luxor-temple-ramesses-colossus.webp",
      width: 736,
      height: 1104,
    },
    title: "Temples of the South",
    subtitle:
      "Five unhurried days through Upper Egypt — Luxor's two banks, the road south past Edfu and Kom Ombo, and Aswan's islands.",
    kind: "multiday",
    category: "Signature Journey",
    tag: "5 Days",
    durationLabel: "5 Days / 4 Nights",
    startPoint: "Luxor (hotel, station or airport)",
    cities: ["Luxor", "Edfu", "Kom Ombo", "Aswan"],
    visiting: "Luxor · Edfu · Kom Ombo · Aswan",
    isPrivate: privateNote,
    price: 925,
    summary:
      "The deep-history heart of Egypt by private road journey — Karnak, the Valley of the Kings, Edfu, Kom Ombo and Philae, with time to actually absorb them.",
    overview:
      "Upper Egypt holds the country's densest concentration of monuments, and most itineraries sprint through it. This one doesn't. Two full days in Luxor split the East Bank's temples from the West Bank's necropolis, so neither is rushed. The drive south to Aswan then becomes part of the journey rather than a transfer: Edfu and Kom Ombo break the road exactly where the ancient river traffic once paused. Aswan closes the journey at a gentler register — Philae by motorboat, the granite quarries, and a felucca hour under sail before you fly or train back. Five-star hotels throughout, private Egyptologist from first day to last.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Arrival in Luxor & the East Bank",
        items: [
          "Private meet at Luxor airport or station",
          "Karnak temple complex — the great hypostyle hall in afternoon light",
          "Luxor Temple at dusk as the floodlights come up",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "The West Bank in full",
        items: [
          "Valley of the Kings — three royal tombs with your Egyptologist",
          "The terraced Mortuary Temple of Hatshepsut at Deir el-Bahri",
          "Colossi of Memnon and a village-road drive back along the floodplain",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "South by road — Edfu & Kom Ombo",
        items: [
          "Morning drive to Edfu and the Temple of Horus, Egypt's best preserved",
          "Kom Ombo's twin sanctuary above a bend in the Nile",
          "Arrive Aswan by late afternoon; evening free on the corniche",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Aswan — Philae & the river",
        items: [
          "High Dam and the Unfinished Obelisk in the granite quarry",
          "Motorboat to the island Temple of Philae",
          "Golden-hour felucca sail among the First Cataract islands",
        ],
      },
      {
        label: "Day",
        num: "05",
        title: "Departure — or Abu Simbel",
        items: [
          "Morning at leisure, or an optional early excursion to Abu Simbel",
          "Private transfer to Aswan airport or station",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "4 nights' accommodation in 5-star hotels (Luxor & Aswan)",
      "Private felucca sail in Aswan",
      ...baseIncluded.slice(1),
    ],
    excluded: [
      "Abu Simbel excursion (optional extra)",
      ...baseExcluded,
    ],
    faqs: [
      {
        q: "Why drive from Luxor to Aswan instead of cruising?",
        a: "The road allows Edfu and Kom Ombo without committing to a cruise ship's fixed schedule, and keeps every night in a full-size hotel room. If you would rather sail, our Nile in Style cruise covers the same corridor by water.",
      },
      {
        q: "Does this journey include Abu Simbel?",
        a: "Not by default — but it slots in cleanly as an early-morning excursion from Aswan on the final day, by road convoy or short flight. Tell us at booking so we can hold the timing.",
      },
      {
        q: "How do I reach Luxor to start?",
        a: "By EgyptAir flight from Cairo (55 minutes) or the overnight sleeper train. Both are easily added; the itinerary begins whenever you land.",
      },
    ],
    order: 14,
  },

  // ========================= THEMED JOURNEYS ================================
  {
    slug: "tour-honeymoon-9day",
    hero: {
      alt: "The Nile and desert hills framed through an ancient temple doorway at Aswan",
      src: "/images/aswan/nile-view-temple-window.webp",
      width: 736,
      height: 1308,
    },
    title: "Honeymoon on the Nile",
    subtitle:
      "Nine days built for two — Cairo's icons, a three-night cruise, Aswan's islands and long golden evenings with nowhere to hurry to.",
    kind: "multiday",
    category: "Honeymoon",
    tag: "9 Days",
    durationLabel: "9 Days / 8 Nights",
    startPoint: "Cairo (airport or hotel)",
    cities: ["Cairo", "Giza", "Aswan", "Luxor"],
    visiting: "Cairo · Giza · Aswan · Luxor",
    isPrivate: privateNote,
    price: 1690,
    was: 2140,
    summary:
      "Egypt as a honeymoon should be — private sunrise at the pyramids, a felucca at golden hour, three nights on the Nile and suites chosen for the view.",
    overview:
      "A honeymoon itinerary is not a standard itinerary with rose petals. The pacing is different: later starts, longer evenings, one signature moment a day rather than four. This journey opens in Cairo with the Egyptian Museum and a private early-access sunrise at Giza before the plateau opens. You fly south to Aswan — the softest, most romantic city on the river — for a private felucca at golden hour and dinner overlooking the cataract. A three-night cruise carries you to Luxor past Kom Ombo and Edfu, with a dawn hot-air balloon over the Theban hills as the closing image. Hotels and cabins are selected for Nile views throughout, and every guide knows this is a honeymoon, not a forced march.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Arrival in Cairo",
        items: [
          "Private airport welcome and transfer to a Nile-view suite",
          "Evening at leisure — dinner recommendations from your planner",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Sunrise at Giza & the museum",
        items: [
          "Early-access sunrise session on the Giza plateau, before public opening",
          "Late breakfast, then the Grand Egyptian Museum at your own pace",
          "Afternoon rest; evening felucca drinks on the Cairo Nile",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Fly to Aswan",
        items: [
          "Morning flight south",
          "Philae — the island temple of Isis, goddess of love, by motorboat",
          "Sunset felucca among the granite islands; dinner on a Nubian terrace",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Aswan & embarkation",
        items: [
          "Slow morning — the botanical island or the souk, as you prefer",
          "Board your Nile cruise before lunch",
          "Sail-away afternoon on the sundeck",
        ],
      },
      {
        label: "Day",
        num: "05",
        title: "Kom Ombo & Edfu",
        items: [
          "The twin temple of Kom Ombo in morning light",
          "Edfu's Temple of Horus in the afternoon",
          "Dinner aboard as the ship moors for the night",
        ],
      },
      {
        label: "Day",
        num: "06",
        title: "Esna lock & arrival in Luxor",
        items: [
          "A day on the water — the honeymoon day of doing nothing, beautifully",
          "Evening arrival in Luxor; Luxor Temple illuminated, if you wish",
        ],
      },
      {
        label: "Day",
        num: "07",
        title: "Balloons & the West Bank",
        items: [
          "Dawn hot-air balloon over the Valley of the Kings (weather permitting)",
          "Valley of the Kings and Hatshepsut's temple with your Egyptologist",
          "Disembark to a Luxor hotel for the final nights",
        ],
      },
      {
        label: "Day",
        num: "08",
        title: "Karnak & a day for two",
        items: [
          "Karnak in the quiet of early morning",
          "Afternoon entirely at leisure — pool, spa or the museum",
          "Farewell dinner arranged by your planner",
        ],
      },
      {
        label: "Day",
        num: "09",
        title: "Fly to Cairo & depart",
        items: [
          "Morning flight to Cairo connecting to your international departure",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "8 nights — Nile-view suites, 5-star hotels and a 3-night full-board cruise",
      "Domestic flights Cairo–Aswan and Luxor–Cairo",
      "Private early-access Giza sunrise session",
      "Sunset felucca charter in Aswan",
      ...baseIncluded.slice(1),
    ],
    excluded: [
      "Hot-air balloon flight (booked on request, ~EUR 120 per person)",
      ...baseExcluded,
    ],
    faqs: [
      {
        q: "How is this different from the 10-day Icons journey?",
        a: "The route overlaps; the rhythm doesn't. This itinerary trades Alexandria and the sleeper trains for flights, Nile-view suites, later mornings and reserved evenings. It is built around couple-time rather than coverage.",
      },
      {
        q: "Can you arrange surprises — flowers, a private dinner, a proposal?",
        a: "Yes, discreetly and often. Tell your planner what you have in mind and we will handle the staging; temple proposals need a little advance choreography and we know exactly where the quiet corners are.",
      },
      {
        q: "Is the balloon flight safe to include?",
        a: "Luxor ballooning is run by licensed operators under civil-aviation oversight, flies only in calm dawn conditions, and is cancelled without hesitation in wind. We book flexible dates so a cancelled morning can roll to the next.",
      },
    ],
    order: 15,
  },

  {
    slug: "tour-family-8day",
    hero: {
      alt: "The Great Sphinx with a pyramid rising behind it at Giza",
      src: "/images/giza/giza-sphinx-and-pyramid.webp",
      width: 736,
      height: 920,
    },
    title: "Family Egypt: Pyramids to the Nile",
    subtitle:
      "Eight days engineered for curious kids and unhurried parents — mummies, feluccas, tomb-painting colours and afternoons by the pool.",
    kind: "multiday",
    category: "Family Journey",
    tag: "8 Days",
    durationLabel: "8 Days / 7 Nights",
    startPoint: "Cairo (airport or hotel)",
    cities: ["Cairo", "Giza", "Luxor", "Aswan"],
    visiting: "Cairo · Giza · Luxor · Aswan",
    isPrivate: privateNote,
    price: 1385,
    was: 1690,
    summary:
      "Egypt with children done right: short guided mornings, family-specialist Egyptologists, pool afternoons, and the moments no classroom can match.",
    overview:
      "Egypt is the most rewarding classroom on earth — if the pacing respects how children actually travel. This journey keeps guided visits to the mornings, hands the afternoons to pools and gardens, and uses guides who specialise in families: the ones who explain mummification to an eight-year-old vividly enough that the eight-year-old explains it back at dinner. Cairo and Giza open the trip with the Sphinx, the Grand Egyptian Museum's Tutankhamun galleries and the mummies at NMEC. A flight south (children rarely love sleeper trains the second time) leads to Luxor's painted tombs and a felucca hour in Aswan where the only requirement is trailing a hand in the Nile. Rooms are family suites or connecting rooms throughout.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Arrival in Cairo",
        items: [
          "Private airport welcome — car seats fitted if needed",
          "Settle into connecting rooms; evening at leisure",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Pyramids & the Sphinx",
        items: [
          "Giza plateau in the cool of morning — pyramids, panorama and Sphinx",
          "Optional short camel ride at the panorama point",
          "Pool afternoon; evening Sound & Light show at the pyramids (optional)",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Tutankhamun & the mummies",
        items: [
          "Grand Egyptian Museum — the boy-king's treasure, told for young minds",
          "The Royal Mummies Hall at NMEC for brave older children",
          "Ice cream on the Nile corniche",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Fly to Luxor — Karnak",
        items: [
          "Morning flight south",
          "Karnak scavenger-hunt style: find the scarab, count the columns",
          "Hotel pool afternoon",
        ],
      },
      {
        label: "Day",
        num: "05",
        title: "Valley of the Kings",
        items: [
          "Early West Bank visit — three tombs chosen for vivid colour",
          "Hatshepsut's temple and the Colossi of Memnon",
          "Free afternoon; family cooking demo at the hotel (optional)",
        ],
      },
      {
        label: "Day",
        num: "06",
        title: "To Aswan by road — Edfu",
        items: [
          "Drive south with a stop at Edfu, entered by horse-drawn calèche",
          "Arrive Aswan; evening gelato on the corniche",
        ],
      },
      {
        label: "Day",
        num: "07",
        title: "Feluccas & Nubian colour",
        items: [
          "Philae by motorboat — an island temple is an adventure in itself",
          "Afternoon felucca sail and a visit to a painted Nubian village",
          "Henna drawings and hibiscus tea with a Nubian family",
        ],
      },
      {
        label: "Day",
        num: "08",
        title: "Fly home via Cairo",
        items: [
          "Morning flight to Cairo connecting to your departure",
        ],
      },
    ],
    included: [
      "Private family-specialist Egyptologist throughout",
      "7 nights' accommodation — family suites or connecting rooms, 5-star",
      "Domestic flights Cairo–Luxor and Aswan–Cairo",
      "Felucca sail and Nubian village visit in Aswan",
      ...baseIncluded.slice(1),
    ],
    excluded: [
      "Sound & Light show and camel rides (optional extras)",
      ...baseExcluded,
    ],
    faqs: [
      {
        q: "What ages does this itinerary suit?",
        a: "It is tuned for roughly ages 6–15. Younger children manage well too — the mornings are short — but the tombs and museums land hardest from about seven up. Guides adapt on the spot to whoever is in front of them.",
      },
      {
        q: "How much walking will the children do?",
        a: "Site visits are kept to two or three hours in the morning cool, with vehicle support close by. The single longest walk is Karnak, and it is broken with shade stops and, frankly, games.",
      },
      {
        q: "Is the food manageable for fussy eaters?",
        a: "Yes. Hotels carry familiar options alongside Egyptian dishes, and your guide will always know where reliable pasta or grilled chicken is. Most children leave addicted to fresh mango juice.",
      },
    ],
    order: 16,
  },

  {
    slug: "tour-photography-7day",
    hero: {
      alt: "Hot-air balloons drifting over the West Bank of Luxor at dawn",
      src: "/images/luxor/luxor-hot-air-balloons-dawn.webp",
      width: 736,
      height: 981,
    },
    title: "Egypt Through the Lens",
    subtitle:
      "Seven days scheduled around light, not opening hours — dawn plateaus, blue-hour temples and the Nile at golden hour.",
    kind: "multiday",
    category: "Photography Journey",
    tag: "7 Days",
    durationLabel: "7 Days / 6 Nights",
    startPoint: "Cairo (airport or hotel)",
    cities: ["Cairo", "Giza", "Luxor", "Aswan"],
    visiting: "Cairo · Giza · Luxor · Aswan",
    isPrivate: privateNote,
    price: 1290,
    summary:
      "An itinerary built backwards from the light: early-access Giza at sunrise, Karnak before the crowds, balloons over Thebes and feluccas at golden hour.",
    overview:
      "Most Egypt itineraries put you at the great sites in the flat, crowded middle of the day — the worst hours a camera will ever see. This journey inverts the logic. Every day is scheduled around first and last light: private early access at Giza before the plateau opens, Karnak's hypostyle hall in the low morning sun that rakes the reliefs into relief, the illuminated Avenue of Sphinxes at blue hour, and Aswan's lateen sails backlit at golden hour. Your guide understands photographers — which means knowing when to talk, when to carry a tripod permit, and when to simply leave you alone with the scene. Non-photographing partners travel well on this trip too; the light that flatters a sensor flatters a memory just as much.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Cairo arrival & brief",
        items: [
          "Private transfer and evening route brief with your guide",
          "Kit check — permits arranged for tripods where required",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Giza at first light",
        items: [
          "Early-access sunrise session on the plateau, pre-opening",
          "Mid-morning: the panorama point and Sphinx enclosure angles",
          "Afternoon edit break; blue-hour cityscape from Al-Azhar Park",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Islamic Cairo — streets & lanterns",
        items: [
          "Golden-hour walk down Al-Muizz Street as the lanterns come on",
          "Khan el-Khalili's alleys — people, copper and light shafts",
          "Fly to Luxor in the evening",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Balloons & the West Bank",
        items: [
          "Dawn hot-air balloon over the Theban necropolis (weather permitting)",
          "Valley of the Kings interiors — hand-held technique where tripods are barred",
          "Hatshepsut's terraces in late side-light",
        ],
      },
      {
        label: "Day",
        num: "05",
        title: "Karnak & Luxor Temple by night",
        items: [
          "Karnak at opening — one hour before the coaches arrive",
          "Afternoon on the river: fishermen, feluccas and reflections",
          "The Avenue of Sphinxes and Luxor Temple floodlit at blue hour",
        ],
      },
      {
        label: "Day",
        num: "06",
        title: "Aswan — sails & granite",
        items: [
          "Morning drive south (Edfu stop on request)",
          "Philae by motorboat — the temple rising from the water",
          "Golden-hour felucca charter among the cataract islands",
        ],
      },
      {
        label: "Day",
        num: "07",
        title: "Nubian colour & departure",
        items: [
          "Early light in a painted Nubian village",
          "Fly to Cairo for your onward connection",
        ],
      },
    ],
    included: [
      "Private photography-aware Egyptologist guide throughout",
      "6 nights' accommodation in 5-star hotels",
      "Domestic flights Cairo–Luxor and Aswan–Cairo",
      "Private early-access Giza sunrise session",
      "Golden-hour felucca charter in Aswan",
      "Photography permits where required (tripod/site)",
      ...baseIncluded.slice(1),
    ],
    excluded: [
      "Hot-air balloon flight (booked on request)",
      "Camera equipment and drone permits (drones are effectively prohibited in Egypt)",
      ...baseExcluded,
    ],
    faqs: [
      {
        q: "Can I bring a drone?",
        a: "No — assume you cannot. Egypt's drone rules are among the strictest anywhere and equipment is confiscated at the airport. Everything on this itinerary is planned for ground-level and balloon perspectives instead.",
      },
      {
        q: "Are tripods allowed at the sites?",
        a: "It varies by site and changes; some require a paid permit, some ban them outright, and the interiors of royal tombs are hand-held only. We arrange permits ahead where they exist and plan technique around it where they do not.",
      },
      {
        q: "Is this trip worthwhile for a non-photographer partner?",
        a: "Genuinely yes. The schedule simply means seeing the sites at their emptiest and most beautiful hours; the only cost is early alarms, which the light repays.",
      },
    ],
    order: 17,
  },

  {
    slug: "tour-grand-14day",
    hero: {
      alt: "The pyramids of Giza rising from the desert with the Sphinx before them",
      src: "/images/home/egypt-giza-pyramids-desert-panorama.webp",
      width: 736,
      height: 920,
    },
    title: "The Grand Tour of Egypt",
    subtitle:
      "Fourteen days, every register of the country — Cairo, Alexandria, the Nile by cruise, Abu Simbel and the Red Sea to finish.",
    kind: "multiday",
    category: "Grand Tour",
    tag: "14 Days",
    durationLabel: "14 Days / 13 Nights",
    startPoint: "Cairo (airport or hotel)",
    cities: ["Cairo", "Giza", "Alexandria", "Aswan", "Abu Simbel", "Luxor", "Sharm El Sheikh"],
    visiting: "Cairo · Alexandria · Aswan · Abu Simbel · Luxor · Red Sea",
    isPrivate: privateNote,
    price: 2480,
    was: 2980,
    flightsIncluded: true,
    summary:
      "Our most complete journey: two capitals, a Nile cruise, Ramesses II's mountain temple at Abu Simbel, and four Red Sea days to absorb it all.",
    overview:
      "This is the itinerary for travellers who intend to come once and see it whole. The first week belongs to history: Cairo's two great museums and medieval quarters, Alexandria on the Mediterranean, then a flight south for Abu Simbel — the mountain temple of Ramesses II above Lake Nasser — before a three-night cruise carries you down the Nile from Aswan to Luxor. The second week changes key entirely: after Luxor's tombs and temples you fly to Sharm El Sheikh, where the desert meets some of the clearest water on earth. Four Red Sea days close the journey with snorkelling over the reefs of Ras Mohammed and nothing on the schedule that cannot be cancelled in favour of the pool. All domestic flights are included; every guided day is private.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Arrival in Cairo",
        items: ["Private airport welcome and transfer to your 5-star hotel", "Evening orientation with your planner"],
      },
      {
        label: "Day",
        num: "02",
        title: "Giza & the Grand Egyptian Museum",
        items: ["The pyramids, panorama and Sphinx in the morning cool", "Tutankhamun's complete treasure at the GEM"],
      },
      {
        label: "Day",
        num: "03",
        title: "Islamic & Coptic Cairo",
        items: ["The Citadel and the alabaster Mosque of Muhammad Ali", "The Hanging Church and Old Cairo's lanes", "Khan el-Khalili at dusk"],
      },
      {
        label: "Day",
        num: "04",
        title: "Alexandria day",
        items: ["Catacombs of Kom El Shoqafa and Pompey's Pillar", "The Citadel of Qaitbay on the Pharos site", "Seafood lunch on the corniche; return to Cairo"],
      },
      {
        label: "Day",
        num: "05",
        title: "Fly south — Aswan",
        items: ["Morning flight to Aswan", "Philae by motorboat and the Unfinished Obelisk", "Evening free on the corniche"],
      },
      {
        label: "Day",
        num: "06",
        title: "Abu Simbel",
        items: ["Dawn road journey to Abu Simbel", "The Great Temple of Ramesses II and the Temple of Nefertari", "Return to Aswan; felucca at golden hour"],
      },
      {
        label: "Day",
        num: "07",
        title: "Embark your Nile cruise",
        items: ["Morning at leisure; board before lunch", "Sail-away afternoon on the river"],
      },
      {
        label: "Day",
        num: "08",
        title: "Kom Ombo & Edfu",
        items: ["The twin temple of Sobek and Horus the Elder", "Edfu — the best-preserved temple in Egypt"],
      },
      {
        label: "Day",
        num: "09",
        title: "Arrival in Luxor",
        items: ["Through the Esna lock to Thebes", "Luxor Temple illuminated in the evening (optional)"],
      },
      {
        label: "Day",
        num: "10",
        title: "Luxor — both banks",
        items: ["Karnak with your Egyptologist at opening", "Valley of the Kings and Hatshepsut's temple", "Disembark to your Luxor hotel"],
      },
      {
        label: "Day",
        num: "11",
        title: "Fly to the Red Sea",
        items: ["Morning flight to Sharm El Sheikh", "Check in; the schedule ends here on purpose"],
      },
      {
        label: "Day",
        num: "12",
        title: "Reefs of Ras Mohammed",
        items: ["Boat day in the national park — two snorkelling stops over coral walls", "Deck lunch on board"],
      },
      {
        label: "Day",
        num: "13",
        title: "Red Sea at leisure",
        items: ["A free day — dive, spa or simply the sea", "Farewell dinner in Old Market Sharm"],
      },
      {
        label: "Day",
        num: "14",
        title: "Departure",
        items: ["Fly to Cairo connecting to your international departure"],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "13 nights — 5-star hotels, a 3-night full-board Nile cruise and a Red Sea resort",
      "All domestic flights (Cairo–Aswan, Luxor–Sharm El Sheikh, Sharm–Cairo)",
      "Abu Simbel excursion by private vehicle",
      "Ras Mohammed boat day with snorkelling equipment",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Is fourteen days too long for a first visit?",
        a: "It is the length most returning guests wish they had booked the first time. The Red Sea days at the end are what make the history week sustainable — the trip breathes instead of accumulating fatigue.",
      },
      {
        q: "How much of this journey is flying?",
        a: "Three internal flights, each about an hour, replacing what would otherwise be twelve-hour road or rail legs. The one long drive we keep — Aswan to Abu Simbel — is itself part of the experience, crossing open desert at dawn.",
      },
      {
        q: "Can the Red Sea leg be swapped or extended?",
        a: "Freely. Some guests trade it for extra Luxor nights or Siwa; others extend Sharm to a full week. The first ten days form the spine and the final act is yours to shape.",
      },
    ],
    order: 18,
  },

  {
    slug: "tour-cairo-culture-5day",
    hero: {
      alt: "The ancient Mosque of Amr ibn al-As in Old Cairo",
      src: "/images/cairo/cairo-amr-ibn-al-as-mosque.webp",
      width: 1200,
      height: 630,
    },
    title: "Cairo of the Eight Worlds",
    subtitle:
      "Five days inside a single city's layers — pharaonic, Coptic, Islamic and modern Cairo, read street by street with a historian.",
    kind: "multiday",
    category: "Cultural Journey",
    tag: "5 Days",
    durationLabel: "5 Days / 4 Nights",
    startPoint: "Cairo (airport or hotel)",
    cities: ["Cairo", "Giza", "Saqqara", "Memphis"],
    visiting: "Cairo · Giza · Saqqara · Memphis",
    isPrivate: privateNote,
    price: 795,
    summary:
      "A deep, slow reading of the world's greatest layered city — its two museums, three faiths, medieval streets and the necropolis where the pyramid was invented.",
    overview:
      "Most visitors give Cairo two nights and a checklist. This journey gives it five days and a thesis: that Cairo is not a stopover but the densest cultural site in the Mediterranean world. The pharaonic layer gets two days — Giza plus the Saqqara–Memphis–Dahshur arc where the pyramid form was invented — but the heart of the itinerary is the living city: the Coptic quarter built into a Roman fortress, the thousand-year fabric of Islamic Cairo walked mosque by mosque with a historian guide, the Khan el-Khalili's trade routes still faintly legible in its alleys, and the two great museums read as a single collection split across a century. Evenings are engineered as carefully as mornings — a Sufi tanoura performance, dinner in a restored Ottoman house, tea where Cairenes actually drink it.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Arrival & the Egyptian Museum",
        items: [
          "Private airport welcome and transfer",
          "The Egyptian Museum's dense old halls with your historian",
          "Evening walk through downtown's belle-époque streets",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Giza & the Grand Egyptian Museum",
        items: [
          "The plateau at opening — pyramids, panorama, Sphinx",
          "Afternoon in the GEM's Tutankhamun galleries",
          "Optional evening Sound & Light show",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Saqqara, Memphis & Dahshur",
        items: [
          "Djoser's Step Pyramid — where stone architecture begins",
          "The colossus of Ramesses II at Memphis",
          "The Bent and Red Pyramids at Dahshur, usually near-empty",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Coptic & Islamic Cairo",
        items: [
          "The Roman fortress of Babylon, Hanging Church and Ben Ezra Synagogue",
          "Ibn Tulun's ninth-century mosque and the Citadel",
          "Al-Muizz Street at dusk; Sufi tanoura performance after dark",
        ],
      },
      {
        label: "Day",
        num: "05",
        title: "The bazaar & departure",
        items: [
          "Khan el-Khalili with context — workshops, not just stalls",
          "Final lunch in a restored Ottoman house",
          "Private transfer to the airport",
        ],
      },
    ],
    included: [
      "Private historian-Egyptologist guide throughout",
      "4 nights' accommodation in a 5-star hotel",
      "Sufi tanoura performance tickets",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Is five days genuinely enough material in one city?",
        a: "Cairo could fill fifteen. Five days is the point at which the city stops being a blur of monuments and becomes legible — you start recognising dynasties, mosque styles and street patterns unprompted. That is the goal.",
      },
      {
        q: "How much walking does the Islamic Cairo day involve?",
        a: "Around four kilometres over the day, on cobbles and stone, broken constantly by visits. Comfortable shoes matter more on this journey than any other we run.",
      },
      {
        q: "Can Alexandria be added?",
        a: "Yes — a sixth day on the Mediterranean extends this journey naturally. Ask when booking and we will fold it in.",
      },
    ],
    order: 19,
  },

  // ========================= RED SEA =======================================
  {
    slug: "tour-sharm-5day",
    hero: {
      alt: "A thatched beach camp above the coral reef shallows of the Red Sea at Sharm El Sheikh",
      src: "/images/redsea/sharm-reef-beach-camp.webp",
      width: 736,
      height: 981,
    },
    title: "Red Sea Retreat: Sharm El Sheikh",
    subtitle:
      "Five days where Sinai's mountains meet the clearest water in the northern hemisphere — reefs, desert evenings and deliberate idleness.",
    kind: "multiday",
    category: "Red Sea",
    tag: "5 Days",
    durationLabel: "5 Days / 4 Nights",
    startPoint: "Sharm El Sheikh (airport or hotel)",
    cities: ["Sharm El Sheikh", "Ras Mohammed"],
    visiting: "Sharm El Sheikh · Ras Mohammed",
    isPrivate: privateNote,
    price: 890,
    summary:
      "The Red Sea done with intent — a private reef-boat day in Ras Mohammed, a Sinai desert evening under the stars, and space left deliberately empty.",
    overview:
      "Sharm El Sheikh sits at the tip of the Sinai Peninsula, where desert mountains drop into water so clear the reefs read like maps from the surface. It is Egypt's great exhale — which is exactly how this itinerary treats it. Two anchor days are arranged privately: a boat day in Ras Mohammed National Park, whose coral walls at the meeting point of the gulfs of Suez and Aqaba rank among the finest snorkelling on earth, and a Sinai desert evening of Bedouin tea, grilled dinner and astronomy in some of the darkest skies reachable from any resort. The rest is unscheduled on principle. Works as a stand-alone escape or the closing chapter of a longer Egypt journey — Luxor is under an hour's flight away.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Arrival on the Red Sea",
        items: [
          "Private airport meet and resort check-in",
          "Orientation over drinks — the week shaped around your preferences",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Ras Mohammed by boat",
        items: [
          "Full-day private boat into the national park",
          "Two or three snorkelling stops over coral walls and gardens",
          "Deck lunch on board",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "At leisure",
        items: [
          "A free day — introductory dive, spa or simply the beach",
          "Evening stroll through Old Market Sharm and the Al Sahaba Mosque",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "Sinai desert evening",
        items: [
          "Late-afternoon 4x4 into the Sinai interior",
          "Bedouin tea, charcoal dinner and star-gazing far from resort light",
        ],
      },
      {
        label: "Day",
        num: "05",
        title: "Departure",
        items: [
          "Morning at leisure and private airport transfer",
        ],
      },
    ],
    included: [
      "4 nights' accommodation in a 5-star Red Sea resort (half board)",
      "Private full-day Ras Mohammed boat charter with snorkelling equipment",
      "Sinai desert evening with Bedouin dinner",
      "Private air-conditioned transfers",
      "Hotel pickup & drop-off",
      "Bottled water every day",
    ],
    excluded: [
      "Scuba diving (arranged on request with licensed centres)",
      "Marine park fees where applicable",
      ...baseExcluded,
    ],
    faqs: [
      {
        q: "When is the sea warm enough?",
        a: "Essentially always. Water temperatures run 21 °C in winter to 28 °C in late summer; snorkelling is year-round, and even January is comfortable in a shorty wetsuit, which the boat carries.",
      },
      {
        q: "Do I need to be able to dive?",
        a: "No. Ras Mohammed's reefs rise close enough to the surface that snorkelling shows you most of the spectacle. If you want to try diving, we arrange a licensed introductory session at your resort's house reef.",
      },
      {
        q: "Does this combine with the Nile itineraries?",
        a: "Perfectly — that is how most guests use it. Luxor–Sharm is a short flight, and four Red Sea days after a week of temples is the best-ordered version of Egypt we know.",
      },
    ],
    order: 20,
  },

  {
    slug: "tour-red-sea-diving-4day",
    hero: {
      alt: "Snorkellers over the deep blue circle of a Red Sea reef hole",
      src: "/images/redsea/red-sea-blue-hole.webp",
      width: 736,
      height: 736,
    },
    title: "Dive the Red Sea",
    subtitle:
      "Four days built around bottom time — Ras Mohammed's walls, the Strait of Tiran's drift reefs and small-group boats that leave early.",
    kind: "multiday",
    category: "Red Sea",
    tag: "4 Days",
    durationLabel: "4 Days / 3 Nights",
    startPoint: "Sharm El Sheikh (airport or hotel)",
    cities: ["Sharm El Sheikh", "Ras Mohammed", "Tiran"],
    visiting: "Ras Mohammed · Strait of Tiran",
    isPrivate: privateNote,
    price: 720,
    summary:
      "Six guided boat dives across the two best site groups in Sinai — Ras Mohammed and Tiran — with a PADI centre we have vetted, plus a shore warm-up.",
    overview:
      "The northern Red Sea is one of the world's benchmark dive regions: 20-metre-plus visibility as the norm, water never truly cold, and reef walls that fall away from snorkel depth to blue water. This programme concentrates it into four days without cutting corners on safety or surface intervals. After a check dive on your resort's house reef, two full boat days cover the two essential site groups — Ras Mohammed National Park, where Shark and Yolanda reefs form the most famous double site in Sinai, and the Strait of Tiran's four named reefs swept by gentle drift currents and pelagics. Diving runs through a licensed PADI centre we work with continuously; groups are capped small, and non-diving partners are welcome aboard with snorkelling gear.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "Arrival & check dive",
        items: [
          "Private airport meet and resort check-in",
          "Afternoon equipment fitting and house-reef check dive",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Ras Mohammed boat day",
        items: [
          "Two guided dives — Shark & Yolanda reefs conditions permitting",
          "Deck lunch and long surface intervals in the park's anchorages",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Strait of Tiran boat day",
        items: [
          "Two guided drift dives on the Tiran reef chain",
          "Optional third afternoon dive or early return for the spa",
        ],
      },
      {
        label: "Day",
        num: "04",
        title: "No-fly morning & departure",
        items: [
          "A surface morning — the 18–24 h no-fly interval is built in",
          "Private airport transfer",
        ],
      },
    ],
    included: [
      "3 nights' accommodation in a 5-star Red Sea resort (half board)",
      "5 guided dives (1 check dive + 2 two-dive boat days) with a licensed PADI centre",
      "Full equipment rental, tanks and weights",
      "Marine park fees for Ras Mohammed",
      "Private air-conditioned transfers",
      "Hotel pickup & drop-off",
      "Bottled water every day",
    ],
    excluded: [
      "Dive insurance (mandatory — arranged at booking if you have none)",
      "Certification courses (available as an alternative programme)",
      ...baseExcluded,
    ],
    faqs: [
      {
        q: "What certification level do I need?",
        a: "Open Water covers everything scheduled; the sites are dived to 18–30 m profiles. If you are uncertified, tell us — the same four days convert cleanly into an Open Water course with the same centre.",
      },
      {
        q: "Why is the last morning dive-free?",
        a: "Flying too soon after diving risks decompression sickness. The itinerary enforces the standard no-fly interval so your final boat day never has to be compromised to make a flight.",
      },
      {
        q: "What will I actually see?",
        a: "Dense soft-coral walls, anthias clouds, Napoleon wrasse, turtles and reef sharks at Ras Mohammed; eagle rays and schooling barracuda ride the Tiran currents. The northern Red Sea rewards divers at every experience level.",
      },
    ],
    order: 21,
  },

  // ========================= SHORT BREAKS & DAY TOURS =======================
  {
    slug: "tour-luxor-3day",
    hero: {
      alt: "Osiride statues of Hatshepsut on the upper terrace of her temple at Deir el-Bahri",
      src: "/images/luxor/hatshepsut-osiride-statues.webp",
      width: 736,
      height: 1308,
    },
    title: "Luxor Immersion",
    subtitle:
      "Three days in the world's greatest open-air museum — both banks properly done, with the illuminated temple at night as the hinge.",
    kind: "multiday",
    category: "Short Break",
    tag: "3 Days",
    durationLabel: "3 Days / 2 Nights",
    startPoint: "Luxor (airport, station or hotel)",
    cities: ["Luxor"],
    visiting: "Karnak · Luxor Temple · West Bank",
    isPrivate: privateNote,
    price: 495,
    summary:
      "Luxor without the sprint: Karnak at opening, the Valley of the Kings before the heat, Hatshepsut's terraces and the Avenue of Sphinxes after dark.",
    overview:
      "Luxor is routinely given a single frantic day; it holds more surviving monument than the rest of the country combined. This short break restores the missing time. The East Bank day takes Karnak at opening — an hour ahead of the coaches — and returns after dark for Luxor Temple floodlit along the restored Avenue of Sphinxes, which is simply a different monument at night. The West Bank day descends into three royal tombs chosen for colour and crowd patterns, then Hatshepsut's cliff-cut terraces and the Colossi of Memnon. The final morning is yours: a dawn balloon over the necropolis, the superb Luxor Museum, or nothing at all. It slots cleanly onto the front or back of any Cairo itinerary by flight or sleeper train.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "The East Bank & the temple by night",
        items: [
          "Arrival meet at Luxor airport or station",
          "Karnak temple complex at opening with your Egyptologist",
          "Evening: Luxor Temple illuminated, entered along the Avenue of Sphinxes",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "The West Bank",
        items: [
          "Valley of the Kings — three tombs before the day-heat",
          "The Mortuary Temple of Hatshepsut at Deir el-Bahri",
          "Colossi of Memnon and the artisans' village of Deir el-Medina (time permitting)",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Your Luxor morning & departure",
        items: [
          "Optional dawn hot-air balloon, or the Luxor Museum's select collection",
          "Private transfer to airport or station",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "2 nights' accommodation in a 5-star Luxor hotel",
      "Evening entry to Luxor Temple and the Avenue of Sphinxes",
      ...baseIncluded.slice(1),
    ],
    excluded: [
      "Hot-air balloon flight (optional extra)",
      "Special tombs requiring separate tickets (Tutankhamun, Seti I — arranged on request)",
      ...baseExcluded,
    ],
    faqs: [
      {
        q: "Which tombs are included in the Valley of the Kings?",
        a: "The standard ticket covers three from the open rotation, and your guide will steer you to the best-painted of the day. Tutankhamun, Seti I and Ramses V/VI carry separate tickets we can pre-arrange.",
      },
      {
        q: "Is the night visit to Luxor Temple worth it?",
        a: "It is the single best-value evening in Egypt. The floodlighting recovers colour and depth that midday sun bleaches out, and the Avenue of Sphinxes lit end-to-end is unforgettable.",
      },
      {
        q: "How do I combine this with Cairo?",
        a: "Fly (55 minutes) or take the overnight sleeper in either direction. Most guests run Cairo first and use this break as the southern chapter; we time the transfers either way.",
      },
    ],
    order: 22,
  },

  {
    slug: "tour-cairo-vip-3day",
    hero: {
      alt: "A stone-paved lane of Islamic Cairo glowing with lanterns at night",
      src: "/images/cairo/cairo-islamic-old-street-night.webp",
      width: 850,
      height: 477,
    },
    title: "Cairo VIP Short Stay",
    subtitle:
      "Three days, zero friction — fast-track arrival, the pyramids and both great museums, and medieval Cairo after the day-trippers leave.",
    kind: "multiday",
    category: "Short Break",
    tag: "3 Days",
    durationLabel: "3 Days / 2 Nights",
    startPoint: "Cairo (airport, VIP meet & assist)",
    cities: ["Cairo", "Giza"],
    visiting: "Giza · GEM · Islamic Cairo",
    isPrivate: privateNote,
    price: 545,
    summary:
      "The essential Cairo, concierge-run: fast-track immigration, private plateau morning, the Grand Egyptian Museum, and lantern-lit Islamic Cairo by night.",
    overview:
      "Built for travellers passing through Cairo on limited time who refuse to experience it badly, this short stay compresses the essentials without ever feeling compressed. Arrival is met airside with fast-track immigration and luggage handling. The Giza morning runs early and private; the Grand Egyptian Museum follows while the plateau crowds peak elsewhere. The final evening belongs to medieval Cairo at its best hour — Al-Muizz Street and the Khan el-Khalili after dusk, when the lanterns take over from the tour groups. A dedicated driver and Egyptologist stay with you throughout, and the schedule flexes hour by hour around how you actually feel.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "VIP arrival & the Citadel",
        items: [
          "Airside meet, fast-track immigration and private transfer",
          "Afternoon at the Saladin Citadel and Mosque of Muhammad Ali",
          "Sunset over the old city from Al-Azhar Park",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Giza & the Grand Egyptian Museum",
        items: [
          "The plateau at opening — pyramids, panorama and Sphinx",
          "The GEM's grand staircase and Tutankhamun galleries after lunch",
          "Evening free, with our restaurant reservations if wanted",
        ],
      },
      {
        label: "Day",
        num: "03",
        title: "Medieval Cairo & departure",
        items: [
          "The Egyptian Museum in Tahrir or Coptic Cairo — your choice",
          "Al-Muizz Street and Khan el-Khalili as the lanterns come on",
          "Fast-track departure assistance at the airport",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "2 nights' accommodation in a 5-star hotel",
      "VIP airport meet & assist with fast-track, both directions",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "What does the VIP airport service actually include?",
        a: "You are met at the aircraft door or jet bridge, walked through a fast-track immigration lane, and your luggage is handled to the car. On departure the same team runs check-in and security in reverse. It converts Cairo airport from a chore into a non-event.",
      },
      {
        q: "Can the itinerary flex if I land late or jet-lagged?",
        a: "Completely. The order above is the default, not a contract — your guide re-sequences around your energy, and nothing is lost by swapping days.",
      },
      {
        q: "Is two nights enough for Cairo?",
        a: "Enough for the essentials done well, which is this itinerary's promise. If you can add a third night, the Saqqara–Dahshur day is the strongest upgrade.",
      },
    ],
    order: 23,
  },

  {
    slug: "tour-alexandria-2day",
    hero: {
      alt: "The seafront Montaza Palace and its gardens in Alexandria",
      src: "/images/alexandria/alexandria-montaza-palace.webp",
      width: 960,
      height: 600,
    },
    title: "Alexandria Overnight",
    subtitle:
      "Two Mediterranean days — the catacombs, the Citadel on the Pharos site, the reborn Library, and an evening the day-trippers never see.",
    kind: "multiday",
    category: "Short Break",
    tag: "2 Days",
    durationLabel: "2 Days / 1 Night",
    startPoint: "Cairo (hotel pickup)",
    cities: ["Alexandria"],
    visiting: "Catacombs · Qaitbay · Bibliotheca · Montaza",
    isPrivate: privateNote,
    price: 365,
    summary:
      "Alexandria with its missing half restored: the Greco-Roman sites by day, then the corniche at dusk, seafood by the water and the morning light day-trips never catch.",
    overview:
      "Alexandria as a day trip is a fine sprint; Alexandria overnight is a different city. This journey does the essential circuit properly — the three-level Catacombs of Kom El Shoqafa, Pompey's Pillar, the Citadel of Qaitbay standing on the exact footprint of the ancient lighthouse, and the Bibliotheca Alexandrina — then stays for the hours that make the city make sense: the corniche promenade at dusk, seafood chosen by weight at a waterfront institution, and a slow morning through the Montaza Palace gardens and the Roman Amphitheatre before an unhurried return to Cairo. The Mediterranean pace is the point; one night here recalibrates an entire Egypt itinerary.",
    itinerary: [
      {
        label: "Day",
        num: "01",
        title: "The ancient city",
        items: [
          "Morning drive from Cairo on the desert road",
          "Catacombs of Kom El Shoqafa and Pompey's Pillar",
          "The Citadel of Qaitbay and the Bibliotheca Alexandrina",
          "Dusk on the corniche and a waterfront seafood dinner",
        ],
      },
      {
        label: "Day",
        num: "02",
        title: "Palaces, Romans & return",
        items: [
          "Montaza Palace gardens in the morning sea air",
          "The Roman Amphitheatre at Kom el-Dikka",
          "Relaxed drive back to Cairo by late afternoon",
        ],
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "1 night's accommodation in a seafront 4/5-star hotel",
      "Seafood dinner on the first evening",
      ...baseIncluded.slice(1),
    ],
    excluded: baseExcluded,
    faqs: [
      {
        q: "Why stay overnight instead of the day trip?",
        a: "The drive is five to six hours round-trip; as a day tour that leaves Alexandria only its midday. The overnight puts you there for dusk, dinner and morning light — the city's three best hours — for a modest extra cost.",
      },
      {
        q: "When is Alexandria at its best?",
        a: "April to October, when the Mediterranean climate is the whole point. In summer it runs 5–10 °C cooler than Cairo and becomes Egypt's own seaside escape.",
      },
      {
        q: "Is the seafood really the thing to do?",
        a: "Emphatically. You choose the fish by weight from the day's ice display and it arrives grilled or fried with Alexandrian sides. Your guide knows which corniche institutions deserve the reputation.",
      },
    ],
    order: 24,
  },

  {
    slug: "tour-abu-simbel",
    hero: {
      alt: "The four seated colossi of Ramesses II at the Great Temple of Abu Simbel",
      src: "/images/aswan/abu-simbel-great-temple-colossi.webp",
      width: 736,
      height: 1308,
    },
    title: "Abu Simbel Private Excursion",
    subtitle:
      "The mountain temples of Ramesses II above Lake Nasser — a dawn desert road, two rock-cut sanctuaries, and back in Aswan for lunch.",
    kind: "day",
    category: "Day Tour",
    tag: "Full Day",
    durationLabel: "Full day (≈8 hours, from Aswan)",
    startPoint: "Aswan hotel or cruise ship",
    cities: ["Abu Simbel"],
    visiting: "Great Temple · Temple of Nefertari",
    isPrivate: privateNote,
    price: 145,
    summary:
      "Ramesses II's colossal rock-cut temples — carved into a Nubian mountainside, moved block by block above the rising lake, and still aligned to the sun.",
    overview:
      "Abu Simbel is the far south's non-negotiable: two temples cut directly into a sandstone mountain by Ramesses II around 1264 BCE, fronted by four seated colossi twenty metres tall. When Lake Nasser rose behind the High Dam in the 1960s, UNESCO's rescue sawed the entire complex into a thousand blocks and rebuilt it sixty-five metres higher — an engineering feat nearly as remarkable as the original. This private excursion runs the classic way: a pre-dawn departure from Aswan across open desert, arrival as the first light hits the colossi, unhurried time inside both the Great Temple and Nefertari's smaller sanctuary with your Egyptologist, and return to Aswan by early afternoon. Twice a year, on 22 February and 22 October, the rising sun reaches the innermost sanctuary — ask us about aligning your dates.",
    itinerary: [
      {
        label: "Stop",
        num: "01",
        title: "The dawn desert road",
        text: "Depart Aswan around 4 a.m. by private vehicle, crossing 280 km of open desert as the sky lightens — a journey with its own austere beauty, coffee provided.",
      },
      {
        label: "Stop",
        num: "02",
        title: "The Great Temple of Ramesses II",
        text: "Stand before the four seated colossi, then pass inside through halls of Osiride pillars to the sanctuary where four gods sit — aligned so the sun reaches them just two mornings a year.",
      },
      {
        label: "Stop",
        num: "03",
        title: "The Temple of Nefertari",
        text: "The smaller temple Ramesses dedicated to his queen and the goddess Hathor — one of the very few Egyptian temples where a queen's statues stand equal in scale to the king's.",
      },
      {
        label: "Stop",
        num: "04",
        title: "Return to Aswan",
        text: "Back across the desert to reach Aswan by early afternoon, in time for lunch, your cruise departure or a felucca at golden hour.",
      },
    ],
    included: [
      ...baseIncluded.slice(0, 1),
      "Private air-conditioned vehicle for the desert road, both ways",
      "All entrance fees to both temples",
      "Breakfast box and bottled water",
      "Hotel or cruise-ship pickup & drop-off in Aswan",
    ],
    excluded: [
      "Flight option Aswan–Abu Simbel (available on request, limited schedule)",
      "Lunch (returned to Aswan by early afternoon)",
      "Tipping (gratuities)",
      "Personal expenses",
    ],
    faqs: [
      {
        q: "Why does the day start at 4 a.m.?",
        a: "Three reasons: the desert road runs in organised windows, the temples are at their emptiest and coolest at opening, and returning by early afternoon keeps your Aswan day — or cruise schedule — intact.",
      },
      {
        q: "Is flying an option instead of the road?",
        a: "Yes — EgyptAir operates a short 45-minute hop on a limited schedule, cutting the round trip to about five hours. Seats sell out early; tell us at booking and we will quote both ways.",
      },
      {
        q: "What is the Sun Festival?",
        a: "On 22 February and 22 October the rising sun penetrates 60 metres into the Great Temple and lights the seated gods of the sanctuary — the alignment Ramesses' architects built in three thousand years ago. Visiting on those dates needs planning months ahead; we arrange it on request.",
      },
    ],
    order: 25,
  },
];

// Lookups -----------------------------------------------------------------
export const toursByOrder = [...tours].sort((a, b) => a.order - b.order);
export const multidayTours = toursByOrder.filter((t) => t.kind === "multiday");
export const dayTours = toursByOrder.filter((t) => t.kind === "day");

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}
