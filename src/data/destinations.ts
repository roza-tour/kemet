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
      "Cairo is the Arab world's largest city and one of the oldest continuously inhabited capitals on earth. The layers of settlement here span more than two thousand years: Roman Babylon, the fortress built to guard the Nile crossing, is still visible in the Coptic quarter, its towers incorporated into the Hanging Church — one of the oldest Christian places of worship in Africa. The Fatimid caliphate founded Cairo as a royal city in 969 CE and immediately established Al-Azhar mosque and university, now the oldest continuously operating university in the world. Over the following centuries, Islamic Cairo grew into one of the great medieval cities of the world: a dense fabric of mosques, madrasas and merchant palaces surrounding the fourteenth-century Khan el-Khalili bazaar, still trading today. Modern greater Cairo is home to some twenty million people. It holds the Egyptian Museum on Tahrir Square — the world's largest collection of pharaonic antiquities — and, on its western edge beside the Giza plateau, the Grand Egyptian Museum: the largest archaeological museum ever built, purpose-designed to display Tutankhamun's complete treasure alongside the great monuments it was found near.",
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
      "Medieval capital of Islamic Egypt and, after 1261 CE, the seat of the Abbasid Caliphate in exile — making Cairo the symbolic centre of the Sunni Islamic world for two centuries. Home to Al-Azhar, founded 970 CE, the oldest university in continuous operation anywhere on earth.",
    culturalImportance:
      "The cultural capital of the Arab world — centre of Arabic-language cinema, music, literature and satellite media. Home to the Coptic Patriarchate, one of the world's oldest Christian communities, alongside the heartland of contemporary Islamic scholarship.",
    highlights: [
      "The Egyptian Museum on Tahrir Square — the world's largest collection of pharaonic antiquities",
      "The Grand Egyptian Museum — the largest archaeological museum ever built, with the complete Tutankhamun treasure",
      "Saladin Citadel and the alabaster Mosque of Muhammad Ali",
      "Khan el-Khalili bazaar and the medieval lanes of Al-Muizz Street",
      "Coptic Cairo — the Hanging Church, Ben Ezra Synagogue and the Roman fortress of Babylon",
    ],
    photographyHighlights: [
      "The Citadel and its Ottoman domes against the Cairo skyline at dusk",
      "Lantern-lit alleys of Khan el-Khalili at night",
      "Minaret rooftops along Al-Muizz Street from above",
    ],
    thingsToKnow: [
      "Modest dress is required at mosques and churches — shoulders and knees covered; carry a scarf as a precaution.",
      "Friday is the main prayer day and some sites reduce their opening hours or close during late-morning prayers.",
      "Cairo's traffic is heavy at almost any hour — allow generous time between districts and book transfers in advance.",
      "Cairo runs later than northern European hours: restaurants fill after 8 pm, the bazaar is liveliest from mid-morning.",
      "The Egyptian Museum on Tahrir and the Grand Egyptian Museum near Giza are separate buildings 20 km apart, with different collections — both are worth a half-day each.",
    ],
    whyVisit: [
      "Two world-class museums of ancient Egypt — the historic Egyptian Museum and the new Grand Egyptian Museum",
      "A thousand years of Islamic and Coptic architecture in the world's largest surviving medieval city",
      "The natural base for day trips to Giza, Saqqara, Memphis, Dahshur and Alexandria",
      "One of the great food cities of the Arab world — from koshari shops to Nile-side rooftop dining",
    ],
    symbol: "crescent",
    hero: { alt: "Cairo skyline with minarets and the Citadel", label: "Cairo" },
    gallery: [
      { alt: "Khan el-Khalili bazaar, Cairo", label: "Bazaar" },
      { alt: "Mosque of Muhammad Ali at the Citadel", label: "Citadel" },
    ],
    faqs: [
      {
        q: "How many days do I need in Cairo?",
        a: "Two to three days covers the essentials: one day at the Egyptian Museum or Grand Egyptian Museum, one day for Islamic Cairo and the Citadel, and one day for Giza and Saqqara. Three days is the more comfortable option and leaves room for the Coptic quarter and a food walk. Five days or more allows a day trip to Alexandria and a genuinely relaxed pace.",
      },
      {
        q: "What is the difference between the Egyptian Museum and the Grand Egyptian Museum?",
        a: "The Egyptian Museum on Tahrir Square is the century-old original — dense, atmospheric, and holding the bulk of Egypt's pharaonic collection across its packed galleries. The Grand Egyptian Museum (GEM), opened progressively from 2021, is the new purpose-built museum on the Giza plateau edge, with the complete Tutankhamun gallery as its centrepiece and a grand staircase of royal statuary. They are 20 kilometres apart. Both are worth visiting; the GEM is the better introduction, the old museum the deeper archive.",
      },
      {
        q: "Is Cairo safe for tourists?",
        a: "Yes. Cairo's main tourist areas — Tahrir Square, Islamic Cairo, the Coptic quarter and Giza — are well-policed and safe for international visitors. The practical nuisances are persistent touts at the Pyramids and, to a lesser degree, the bazaar. A private guide eliminates most friction. Standard urban precautions apply as in any major city.",
      },
      {
        q: "How do I get between central Cairo and the Giza Pyramids?",
        a: "The Giza plateau is approximately 25 kilometres from central Cairo — about 45 minutes by private vehicle or Uber. Cairo Metro Line 2 reaches Giza station, from which a taxi or Uber covers the final 5 km to the plateau in 10–15 minutes. On a guided tour, all transfers are arranged.",
      },
    ],
    relationships: { nearbyDestinations: near("giza", "alexandria") },
    seo: {
      title: "Cairo Travel Guide — Egyptian Museum, Islamic Cairo & Coptic Quarter | Kemet",
      description:
        "Plan your Cairo visit. The Egyptian Museum, Grand Egyptian Museum, Khan el-Khalili, the Citadel and the gateway to Giza's Pyramids — expert guide by Egypt travel specialists.",
    },
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
      "The Giza plateau rises from the edge of greater Cairo on the west bank of the Nile, a limestone escarpment where the Sahara begins. The three pyramids built here during Egypt's Fourth Dynasty — for the pharaohs Khufu (c. 2560 BCE), his son Khafre, and grandson Menkaure — are the only surviving wonder of the ancient world. Khufu's Great Pyramid stood as the tallest structure on earth for nearly four thousand years, built from an estimated 2.3 million stone blocks averaging 2.5 tonnes each. Khafre's pyramid retains a band of the original polished limestone casing at its apex; the Great Sphinx, 73 metres long and 20 metres tall, was carved from the plateau's living bedrock and guards the approach to Khafre's Valley Temple — a mortuary complex of red Aswan granite and alabaster that remains one of the finest examples of Old Kingdom stonework in existence. The Grand Egyptian Museum, opened progressively from 2021, was built specifically on the plateau's edge to display the antiquities of Giza and to give Tutankhamun's complete treasure — over 5,000 objects — a permanent, purpose-designed home beside the monuments that inspired them.",
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
      "Site of the last surviving ancient wonder of the world, built during the Old Kingdom's Fourth Dynasty — the most technically ambitious construction programme in human history. The plateau remained an active ceremonial site, and later a quarry, for over two thousand years after the pyramids were completed.",
    culturalImportance:
      "The enduring global emblem of ancient Egypt and the image most associated with human civilisation itself. The Grand Egyptian Museum now anchors a new chapter in how the world encounters the pharaonic heritage — the largest archaeological museum ever built, on the same ground as the monuments.",
    highlights: [
      "The Great Pyramid of Khufu — the only surviving ancient wonder of the world",
      "The pyramids of Khafre (with original limestone casing at the apex) and Menkaure",
      "The Great Sphinx and Khafre's Valley Temple — Old Kingdom granite and alabaster",
      "The panoramic desert viewpoint where all three pyramids align",
      "The Grand Egyptian Museum — the complete Tutankhamun treasure and royal statuary",
    ],
    photographyHighlights: [
      "All three pyramids aligned from the panorama point at sunrise",
      "The Sphinx at first light, before the day-visitors arrive",
      "Camel silhouettes on the plateau ridge at golden hour",
    ],
    thingsToKnow: [
      "Interior pyramid tickets are sold daily at the plateau on a first-come basis and numbers are strictly limited — arrive early or ask your operator to plan accordingly.",
      "Bring water, sun protection and closed-toe shoes; the plateau is open desert with sandy, uneven terrain.",
      "Agree any camel or horse ride and its price before mounting — riders are independent vendors, not part of the official site.",
      "The Grand Egyptian Museum requires a separate ticket and is a full half-day in its own right; plan for a full day if combining both.",
      "Photography is unrestricted on the exterior plateau; interior photography policies vary by pyramid — your guide will advise.",
    ],
    whyVisit: [
      "The only surviving wonder of the ancient world — the Great Pyramid has stood for 4,500 years",
      "The Great Sphinx and the Old Kingdom valley temples — the finest Fourth-Dynasty stonework",
      "The Grand Egyptian Museum, purpose-built beside the pyramids to hold their treasures",
      "Sunrise at the plateau before the crowds arrive — one of Egypt's defining travel moments",
    ],
    symbol: "ankh",
    hero: { alt: "The pyramids of Giza on the desert plateau", label: "Giza" },
    gallery: [
      { alt: "The Great Sphinx of Giza", label: "Sphinx" },
      { alt: "Panorama of the three Giza pyramids", label: "Panorama" },
    ],
    faqs: [
      {
        q: "Can you go inside the Great Pyramid?",
        a: "Yes, as an optional extra. A limited number of interior tickets are sold each day at the plateau for entry into the Great Pyramid's ascending passages and the King's Chamber. The daily supply is fixed and sells out — arrive early, or ask your tour operator to plan for this. The Red Pyramid at nearby Dahshur is also open for interior visits and is often less crowded.",
      },
      {
        q: "How long should I spend at Giza?",
        a: "A minimum of three to four hours covers the main plateau — the three pyramids, the panoramic viewpoint and the Sphinx. Adding the Grand Egyptian Museum brings the total to a full day. A half-day visit to the plateau alone is practical if time is limited, and it pairs naturally with a separate afternoon at the GEM.",
      },
      {
        q: "What is the best time of day to visit the Giza Pyramids?",
        a: "Early morning, immediately after the plateau opens (typically 7 or 8 am depending on the season). The light is flattering for photography, temperatures are manageable, and the first two hours see far fewer visitors than midday. Private early-access experiences before public opening are available through specialist operators.",
      },
      {
        q: "What is the Grand Egyptian Museum?",
        a: "The Grand Egyptian Museum (GEM) is the world's largest archaeological museum, built on the Giza plateau adjacent to the pyramids. Its permanent collection includes the complete Tutankhamun treasure — over 5,000 objects displayed together for the first time — and a grand staircase lined with pharaonic statuary. It is a separate building from the historic Egyptian Museum on Tahrir Square in central Cairo.",
      },
    ],
    relationships: { nearbyDestinations: near("cairo") },
    seo: {
      title: "Giza Pyramids & Great Sphinx — Complete Visitor Guide | Kemet Egypt",
      description:
        "Visit the Giza Pyramids, Great Sphinx and Grand Egyptian Museum. Tickets, timing, early access and everything you need to know — from Egypt travel specialists.",
    },
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
      "Luxor stands on the east bank of the Nile at the site of ancient Thebes, the capital of Egypt at the height of the New Kingdom (c. 1550–1070 BCE). The concentration of monuments here is greater than anywhere else on earth. On the East Bank stand the temples of the living city: Karnak, the largest religious complex ever constructed — a 2-kilometre enclosure of temples, hypostyle halls and processional avenues built continuously over thirteen centuries by successive pharaohs — and the riverside Luxor Temple, connected to Karnak by the 2.7-kilometre Avenue of Sphinxes, lined with 1,057 ram-headed sphinxes and dramatically illuminated after the avenue's 2021 restoration. The West Bank was the ancient city of the dead: the Valley of the Kings, where sixty-two royal tombs have been discovered cut into the limestone Theban hills, including the intact tomb of Tutankhamun found by Howard Carter in 1922; the terraced mortuary temple of Hatshepsut at Deir el-Bahri; and the Colossi of Memnon — two 18-metre quartzite statues of Amenhotep III that are all that remains of what was once Egypt's largest funerary temple. Luxor is not a ruin city but a working town of half a million people whose residents live alongside, and sometimes within, three and a half thousand years of stone.",
    region: "nile-valley",
    coordinates: PLACEHOLDER_GEO,
    elevationMeters: 76,
    unesco: { listed: true, siteName: "Ancient Thebes with its Necropolis" },
    bestSeasons: ["autumn", "winter", "spring"],
    climateSummary:
      "Very hot, dry summers and warm, sunny winters; October to March is the prime season for outdoor monuments.",
    recommendedStay: "2 days",
    travelStyles: ["historical", "cultural"],
    accessibilityNotes:
      "Temples involve walking over uneven ancient ground; some Valley of the Kings tombs require steep descents on narrow staircases.",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    historicalImportance:
      "Capital of Egypt at the height of its imperial power during the New Kingdom, and the burial place of its greatest pharaohs — Ramesses II, Seti I, Tutankhamun, Hatshepsut and Thutmose III among them. No city on earth holds a comparable density of surviving ancient monuments.",
    culturalImportance:
      "The richest surviving record of ancient Egyptian temple art, royal funerary practice and New Kingdom theology. Every major Egyptological discovery of the last two centuries has centred on Luxor's monuments — Karnak alone was under excavation for over a century before its main features were fully mapped.",
    highlights: [
      "Karnak Temple and its great hypostyle hall — 134 columns up to 23 metres tall, built for Ramesses II",
      "Luxor Temple in the heart of the city, illuminated along the Avenue of Sphinxes after dark",
      "The Valley of the Kings — 62 royal tombs including Tutankhamun, Ramesses II and Seti I",
      "The mortuary temple of Hatshepsut, terraced into the Theban cliffs at Deir el-Bahri",
      "The Colossi of Memnon — 18-metre statues of Amenhotep III guarding the West Bank plain",
    ],
    photographyHighlights: [
      "Karnak's hypostyle columns in low morning light before the tour groups arrive",
      "Hot-air balloons drifting over the West Bank temples at dawn",
      "The Avenue of Sphinxes at Luxor Temple after dark, floodlit and still",
    ],
    thingsToKnow: [
      "Start monument visits early — Karnak and the Valley of the Kings are best before 9 am, when temperatures and crowd density both rise sharply.",
      "The standard Valley of the Kings ticket includes three tombs; separate tickets are sold for Tutankhamun's tomb, Seti I and Ramesses V/VI — confirm with your guide which to prioritise.",
      "Photography rules differ by tomb — some ban cameras entirely, others allow without flash. Your guide will advise before you enter each.",
      "Luxor Temple is open after dark and illuminated; a night visit to the Avenue of Sphinxes is one of the most dramatic experiences in Egyptian heritage travel.",
      "East and West Banks are connected by Luxor Bridge (by vehicle) or a local ferry — your guide manages all logistics.",
    ],
    whyVisit: [
      "Karnak — the largest ancient religious complex ever built, spanning thirteen centuries of continuous construction",
      "The Valley of the Kings — sixty-two royal tombs in the Theban hills, including Tutankhamun found intact in 1922",
      "The illuminated Avenue of Sphinxes at night — 1,057 sphinxes lining a 2.7 km restored processional road",
      "Hot-air ballooning over the West Bank at dawn — one of Egypt's most distinctive and celebrated experiences",
    ],
    symbol: "horus",
    hero: { alt: "Karnak Temple columns at Luxor", label: "Luxor" },
    gallery: [
      { alt: "Valley of the Kings, Luxor West Bank", label: "Valley of the Kings" },
      { alt: "Mortuary Temple of Hatshepsut", label: "Hatshepsut" },
    ],
    faqs: [
      {
        q: "How many days should I spend in Luxor?",
        a: "Two full days is the practical minimum. Day one covers Karnak and Luxor Temple on the East Bank. Day two covers the Valley of the Kings, Hatshepsut's temple and the Colossi of Memnon on the West Bank. Three days allows a more relaxed pace, time at the Luxor Museum, and an evening at the illuminated avenue or a sunrise balloon flight. Most visitors who spend only one day in Luxor return wishing they had planned for two.",
      },
      {
        q: "What is the difference between the East Bank and West Bank in Luxor?",
        a: "In ancient Thebes, the East Bank was the city of the living — where the temples of Karnak and Luxor Temple were built for the worship of Amun and the celebration of kingship. The West Bank was the city of the dead: the necropolis where all royal burials were made. Ancient Egyptians placed their dead on the west because the setting sun disappeared into the west each evening, symbolising the passage into the afterlife. The distinction is still the framework for visiting Luxor today.",
      },
      {
        q: "Is Tutankhamun's tomb worth visiting in the Valley of the Kings?",
        a: "Yes, with an important caveat. Tutankhamun's tomb (KV62) is much smaller than those of Ramesses II or Seti I — all the treasure was removed and is now at the Grand Egyptian Museum in Cairo. What remains is the burial chamber with its painted walls in exceptional condition, and the king's mummy still in situ in its outermost coffin. The tomb's historical significance is immense. Its visual scale, however, is modest compared to the great Ramesside tombs nearby.",
      },
      {
        q: "Can you take a hot-air balloon flight over Luxor?",
        a: "Yes. Balloon flights over Luxor's West Bank at dawn are among Egypt's most celebrated experiences, available most mornings between October and May. Flights last approximately 45 to 60 minutes and launch from the West Bank to drift over the Theban hills, the Valley of the Kings and the mortuary temples. Your tour operator arranges booking; flights go ahead subject to wind conditions.",
      },
    ],
    relationships: { nearbyDestinations: near("aswan") },
    seo: {
      title: "Luxor, Egypt — Karnak, Valley of the Kings & Avenue of Sphinxes | Kemet",
      description:
        "Luxor travel guide. Karnak Temple, Valley of the Kings, Luxor Temple illuminated at night and the West Bank monuments — how to make the most of two days in the world's greatest monument city.",
    },
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
      "Aswan is Egypt's southernmost city, set where the Nile meets the First Cataract — a stretch of granite rapids and boulder-strewn islands that marked the ancient boundary between Egypt and Nubia. For four thousand years it was Egypt's frontier garrison and its quarry: the distinctive pink Aswan granite used in obelisks, colossi and temple columns across the country was cut from these cliffs, and the Unfinished Obelisk still lies in the bedrock of the ancient quarry, abandoned mid-cut when a crack appeared. At 42 metres and an estimated 1,168 tonnes, it would have been the largest obelisk ever raised. The island temples of Philae, dedicated to the goddess Isis, were the last outpost of active pharaonic worship, still drawing pilgrims as late as the sixth century CE. When the Aswan High Dam created Lake Nasser in the 1960s and 70s, the Philae complex faced permanent submersion; in one of UNESCO's most ambitious rescue operations, the temples were dismantled stone by stone between 1972 and 1980 and rebuilt on the higher ground of Agilkia Island, where they stand today. The dam itself, completed in 1970, ended the Nile's annual flood cycle and generates electricity for the whole of Egypt. Beyond its monuments, Aswan is the heartland of living Nubian culture: the painted villages, music and extraordinary hospitality of the Nubian people give the city a warmth and colour that distinguishes it from anywhere else in Egypt.",
    region: "nubia",
    coordinates: PLACEHOLDER_GEO,
    unesco: {
      listed: true,
      siteName: "Nubian Monuments from Abu Simbel to Philae",
    },
    bestSeasons: ["autumn", "winter", "spring"],
    climateSummary:
      "One of the driest, sunniest places on earth; warm winters of 20–25 °C and intensely hot summers reaching 42 °C.",
    recommendedStay: "2 days",
    travelStyles: ["cultural", "relaxed"],
    accessibilityNotes:
      "Island sites are reached by motorboat; the corniche, markets and main monuments are mostly on level ground.",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    historicalImportance:
      "Ancient Egypt's southern frontier and the source of the granite used in its greatest monuments for over three millennia. Aswan's quarries supplied the obelisks of Karnak, the colossi of Ramesses II and the column capitals of temples across the Nile valley.",
    culturalImportance:
      "The living heartland of Nubian culture — an ancient people of the Nile corridor between Egypt and Sudan with a distinct language, music, weaving tradition and painted architectural style, who were displaced by Lake Nasser but have maintained their cultural identity in the communities around Aswan.",
    highlights: [
      "The island Temple of Philae — rescued from Lake Nasser and rebuilt on Agilkia Island by UNESCO",
      "The Aswan High Dam and Lake Nasser — the engineering transformation that reshaped modern Egypt",
      "The Unfinished Obelisk in the ancient granite quarry — the largest obelisk ever attempted",
      "Nubian villages on the west bank and Elephantine Island",
      "Felucca sailing among the First Cataract's granite islands at sunset",
    ],
    photographyHighlights: [
      "Feluccas under full sail at sunset against the Aswan granite islands",
      "Painted Nubian houses in yellow and blue above the west bank",
      "Philae Temple rising from the water as the motorboat approaches",
    ],
    thingsToKnow: [
      "Abu Simbel is a half-day trip south by early-morning road convoy (3.5 hours each way, departing around 4 am) or a short EgyptAir flight (45 minutes, limited schedule).",
      "Philae, Elephantine Island and Kitchener's Botanical Garden are all reached by short motorboat transfer from the Aswan corniche.",
      "Aswan is the standard embarkation or disembarkation point for Nile cruises between Aswan and Luxor.",
      "Temperatures in Aswan are the highest in Egypt; October to February is the most comfortable window for outdoor sightseeing.",
      "Nubian village visits and Elephantine Island are most rewarding with a local guide who can provide cultural context.",
    ],
    whyVisit: [
      "The Nile at its most beautiful — granite cataracts, island temples and painted Nubian villages on the west bank",
      "The Temple of Philae — dismantled stone by stone and rebuilt on a new island to save it from Lake Nasser",
      "The departure point for Abu Simbel visits and Nile cruises to Luxor",
      "Living Nubian culture — the music, food and hospitality of one of Africa's most distinctive river communities",
    ],
    symbol: "sun",
    hero: { alt: "Feluccas on the Nile at Aswan", label: "Aswan" },
    gallery: [
      { alt: "Temple of Philae near Aswan", label: "Philae" },
      { alt: "Nubian village above the Nile", label: "Nubian village" },
    ],
    faqs: [
      {
        q: "How do I get to Abu Simbel from Aswan?",
        a: "By road: a 3.5-hour drive each way through open desert, departing at 3–4 am to join the organised convoy that operates for security reasons. By air: EgyptAir operates a limited number of flights (approximately 45 minutes) from Aswan Airport — advance booking is essential and seats sell out quickly. Most visitors make Abu Simbel a day trip from Aswan. Those who stay overnight at Abu Simbel can attend the early-morning Sun Festival illumination, when the rising sun penetrates the inner sanctuary and illuminates the four seated statues — a remarkable and rarely seen event.",
      },
      {
        q: "What is Nubian culture?",
        a: "Nubians are the ancient people of the Nile valley corridor between southern Egypt and northern Sudan. They have a distinct language (the main dialects are Nobiin and Kenzi), a tradition of painted architecture using vivid colours, distinctive music and weaving, and a culture of extraordinary hospitality. Their historic homeland along the Nile between Aswan and Sudan was submerged by Lake Nasser when the Aswan High Dam was completed. Many Nubian families were relocated to villages around Aswan, where their cultural traditions survive and visitors can experience them through guided village visits.",
      },
      {
        q: "Is Aswan worth visiting on its own, or mainly as a base for Abu Simbel?",
        a: "Both. Aswan has substantial independent appeal: the Temple of Philae is one of Egypt's most beautiful island sanctuaries; the Unfinished Obelisk in its ancient quarry is one of the most viscerally instructive monuments in Egypt; and a felucca among the First Cataract's granite islands at sunset is among the most peaceful experiences in Egyptian travel. Most visitors spend two nights in Aswan — one for the city's own monuments and a Nubian village visit, one for the Abu Simbel excursion.",
      },
      {
        q: "Does a Nile cruise depart from Aswan?",
        a: "Yes. The classic Nile cruise between Aswan and Luxor runs approximately 200 kilometres northbound along the river, stopping at Kom Ombo and Edfu over three to four nights. Cruises depart in both directions — Aswan-northbound is the more common direction, as it allows a visit to the High Dam and Philae before embarking. Your tour operator confirms the direction and schedule based on your overall itinerary.",
      },
    ],
    relationships: { nearbyDestinations: near("luxor") },
    seo: {
      title: "Aswan, Egypt — Temple of Philae, Nile & Nubian Culture | Kemet",
      description:
        "Aswan travel guide. The Temple of Philae, the Unfinished Obelisk, Abu Simbel day trips, felucca sailing and Nubian culture — from Egypt travel specialists.",
    },
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
      "Alexandria was founded in 331 BCE by Alexander the Great on a narrow strip of land between the Mediterranean Sea and Lake Mareotis, chosen for its natural harbour and its position as a pivot between Africa and the Greek world. For three centuries under the Ptolemaic dynasty it was the foremost intellectual city in the ancient world — home to the great Library, founded around 295 BCE, which sought to gather a copy of every text in existence; the Mouseion, an early academy of scholars; and the Pharos lighthouse, built around 280 BCE and one of the Seven Ancient Wonders, which guided ships into the harbour for eight centuries before earthquakes brought it down in the fourteenth century CE. The city's layered past is visible across its surviving monuments. The Catacombs of Kom El Shoqafa, a second-century CE Roman-era necropolis discovered in 1900 when a donkey fell through the entrance, descend three levels underground and blend Egyptian, Greek and Roman funerary motifs in a way unique in the ancient world. Pompey's Pillar — actually raised in honour of the Emperor Diocletian in 297 CE — is a 27-metre monolithic column standing among the ruins of the ancient Serapeum, the largest Roman column outside Constantinople. The Citadel of Qaitbay, built by the Mamluk sultan in 1477 CE using stones from the ruined Pharos, looks out to sea from the exact spot where the ancient lighthouse stood. Modern Alexandria is a working Mediterranean port city of over five million people — cooler and breezier than the Nile valley, with a 20-kilometre corniche seafront. The Bibliotheca Alexandrina, opened in 2002, is a deliberate revival of the ancient Library's spirit: a vast circular building of grey granite and glass holding over two million volumes.",
    region: "mediterranean",
    coordinates: PLACEHOLDER_GEO,
    bestSeasons: ["spring", "summer", "autumn"],
    climateSummary:
      "Mild Mediterranean climate with warm summers averaging 28–30 °C, cool damp winters, and sea breezes year-round.",
    recommendedStay: "1–2 days",
    travelStyles: ["cultural", "historical"],
    accessibilityNotes:
      "The corniche and Bibliotheca Alexandrina are accessible; the Catacombs of Kom El Shoqafa involve a spiral staircase descending three levels.",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    historicalImportance:
      "The foremost intellectual centre of the ancient Mediterranean world for over three centuries: home to the great Library, the Mouseion academy, the Pharos lighthouse (one of the Seven Ancient Wonders) and the first systematic collection of world knowledge. Capital of Ptolemaic Egypt and the city where Cleopatra VII ruled.",
    culturalImportance:
      "Historically the most cosmopolitan city of the ancient world, drawing Greek, Egyptian, Jewish, Roman and later Arab cultures into a single urban fabric. The 'Alexandrian spirit' — synthesis of traditions, intellectual inquiry and Mediterranean openness — remains the city's defining character and the explicit inspiration for the modern Bibliotheca Alexandrina.",
    highlights: [
      "The Catacombs of Kom El Shoqafa — a three-level Roman necropolis blending Egyptian, Greek and Roman art",
      "Pompey's Pillar — the largest ancient monolithic column outside Constantinople, standing in the ruins of the Serapeum",
      "The Citadel of Qaitbay, built on the exact site of the Pharos lighthouse",
      "The Bibliotheca Alexandrina — the contemporary heir to the ancient Library, opened in 2002",
      "Alexandria's 20-kilometre Mediterranean corniche and its celebrated seafront seafood culture",
    ],
    photographyHighlights: [
      "The Citadel of Qaitbay against the open Mediterranean from the sea walls",
      "The sweep of the Alexandria corniche at dusk, with the city's art-deco facades",
      "The circular disc of the Bibliotheca Alexandrina from above or from the waterfront",
    ],
    thingsToKnow: [
      "Alexandria is a 2.5 to 3-hour drive each way from Cairo on the desert road — a long but rewarding full-day trip; an overnight stay allows a more comfortable pace.",
      "Sea breezes make Alexandria noticeably cooler than the Nile valley — a genuine advantage in summer, worth a light layer in winter evenings.",
      "Seafood ordered by weight and grilled or fried to order at corniche restaurants is the local speciality.",
      "The Catacombs of Kom El Shoqafa involve a spiral staircase descending three levels underground — not suitable for visitors with limited mobility.",
      "The Greco-Roman Museum was undergoing renovation as of 2026 — confirm its status when planning your visit.",
    ],
    whyVisit: [
      "The Catacombs of Kom El Shoqafa — one of antiquity's most unusual and compelling underground monuments",
      "The Citadel of Qaitbay on the exact site of the ancient Pharos lighthouse, one of the Seven Wonders of the Ancient World",
      "The Bibliotheca Alexandrina — the contemporary heir to the world's most famous library",
      "Mediterranean Egypt — a cooler, coastal, intellectually rich counterpoint to the heat and density of the Nile valley",
    ],
    symbol: "greco",
    hero: { alt: "The Citadel of Qaitbay on the Alexandria seafront", label: "Alexandria" },
    gallery: [
      { alt: "Bibliotheca Alexandrina", label: "Library" },
      { alt: "The Alexandria corniche", label: "Corniche" },
    ],
    faqs: [
      {
        q: "Is Alexandria worth visiting as a day trip from Cairo?",
        a: "Yes — it is the most rewarding day trip from Cairo. The drive (2.5 to 3 hours each way) is long, which is why the day starts early, but the combination of the Catacombs, the Citadel, the Bibliotheca Alexandrina and a seafront seafood lunch makes it genuinely worthwhile. An overnight stay in Alexandria allows a more relaxed pace, time on the corniche in the evening and access to the city's distinct atmosphere.",
      },
      {
        q: "Is the ancient Library of Alexandria still there?",
        a: "No. The original Library of Alexandria was lost in stages over several centuries through fire, conflict and gradual neglect — not in a single dramatic event. The Bibliotheca Alexandrina, opened in 2002, is a modern institution built in deliberate cultural homage to the ancient Library on the approximate original site. It is a new building, not a recovery of the original, but it holds over two million volumes and is one of the most architecturally striking buildings in Egypt.",
      },
      {
        q: "How is Alexandria different from the rest of Egypt?",
        a: "Alexandria feels Mediterranean rather than Nile-valley. The climate is cooler, the pace is slower, the food culture is built around seafood, and the historical character is Greco-Roman rather than pharaonic. There are no pyramids or temple complexes — the appeal is layered cosmopolitan history (Hellenistic, Roman, medieval Arab), its distinctly European-influenced architecture and the pleasure of being by the sea. Many visitors find it a refreshing change of register after Cairo and Luxor.",
      },
      {
        q: "What is Pompey's Pillar, and why is it named after Pompey?",
        a: "Pompey's Pillar is a 27-metre Roman triumphal column standing among the ruins of the ancient Serapeum in Alexandria — the largest ancient monolithic column outside Constantinople. Despite the popular name, it has nothing to do with the Roman general Pompey: it was erected in 297 CE in honour of the Emperor Diocletian. The misnaming originated with medieval European travellers who incorrectly connected it to Pompey's death in Egypt. The column is carved from a single piece of Aswan pink granite.",
      },
    ],
    relationships: { nearbyDestinations: near("cairo") },
    seo: {
      title: "Alexandria, Egypt — Catacombs, Citadel of Qaitbay & Bibliotheca Alexandrina | Kemet",
      description:
        "Alexandria travel guide. The Catacombs of Kom El Shoqafa, the Citadel of Qaitbay on the Pharos site and the Bibliotheca Alexandrina — Greco-Roman Egypt on the Mediterranean.",
    },
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
