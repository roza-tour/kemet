// ---------------------------------------------------------------------------
// Experience catalogue — the five reference implementations for Phase 8.
// Each experience is production-quality data; future experiences are data-only.
// No component or page changes are required to add new experiences.
//
// Relationship rule: each experience lists its canonical destinations via Ref.
// The inverse (experiences shown on a destination page) is derived at build time
// by registry.ts — never hand-maintained here.
// ---------------------------------------------------------------------------
import type { Experience } from "@/types";

export const experiences: Experience[] = [
  // ── 1. Sunrise at the Giza Pyramids ──────────────────────────────────────
  {
    id: "sunrise-giza-pyramids",
    slug: "sunrise-giza-pyramids",
    domain: "experience",
    title: "Sunrise at the Giza Pyramids",
    shortSummary:
      "Watch the first light of dawn break over the Great Pyramid in an exclusive early-access session before the plateau opens to day visitors — led by a licensed Egyptologist.",
    longDescription:
      "Few moments in travel match the silence of the Giza Plateau at dawn. As the eastern sky shifts from deep violet to amber, the silhouettes of Khufu, Khafre and Menkaure gradually resolve from the darkness into the oldest surviving members of the Seven Wonders of the Ancient World. This private early-access experience is led by a licensed Egyptologist who tailors their commentary to your interests — from royal mythology and construction logistics to the astronomical alignments the ancient builders encoded into the plateau's geometry. With the site nearly empty, you can move at your own pace, photograph without crowds and appreciate the sheer scale of these 4,500-year-old monuments in near-total silence. The session also takes in the Sphinx enclosure at first light, before the tour coaches arrive and the day's noise begins.",
    category: "historical",
    durationLabel: "3–4 hours",
    durationMinutes: 210,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    bestSeasons: ["autumn", "winter", "spring"],
    region: "cairo",
    location: "Giza Plateau, Giza",
    meetingPointNote:
      "Confirmed at booking. Your private vehicle collects you from your Cairo or Giza hotel.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Your private party only — no shared groups.",
    availabilityNote:
      "Available most mornings year-round, subject to seasonal access restrictions and official closures.",
    priceNote:
      "Pricing confirmed on enquiry. Plateau entrance fees and licensed Egyptologist included.",
    highlights: [
      "Exclusive early-access to the plateau before it opens to the public",
      "Private licensed Egyptologist guide (Ministry of Tourism certified)",
      "Photography without crowds — all three pyramids and the Sphinx",
      "Hotel pickup and drop-off included (Cairo & Giza)",
      "Intimate scale: your party only, no tour groups",
    ],
    keyFacts: [
      { label: "Duration", value: "3–4 hours" },
      { label: "Difficulty", value: "Easy" },
      { label: "Start time", value: "Before sunrise (time confirmed at booking)" },
      { label: "Location", value: "Giza Plateau" },
      { label: "Group type", value: "Private — your party only" },
      { label: "Languages", value: "English, French, Arabic" },
      { label: "Suitable for", value: "All ages" },
    ],
    whatsIncluded: [
      "Private licensed Egyptologist guide",
      "Giza Plateau entrance fees",
      "Sphinx enclosure entrance",
      "Private air-conditioned vehicle and driver",
      "Hotel pickup and drop-off (Cairo & Giza)",
    ],
    whatsExcluded: [
      "Interior pyramid entrance (optional, available on request at additional cost)",
      "Camel or horse rides",
      "Gratuities",
      "Hotel accommodation",
    ],
    preparationTips: [
      "Dress in layers — desert mornings are cold in winter, even when midday temperatures are high",
      "Bring a small torch for the pre-sunrise walk from the vehicle to the plateau",
      "Flat, closed-toe shoes are recommended — the terrain is uneven gravel and sand",
      "A wide-angle lens captures all three pyramids in a single frame from the panorama point",
    ],
    goodToKnow: [
      "The Egyptian authorities occasionally restrict early access for filming or official events — alternative times are arranged in this case",
      "The Sphinx is visible from the plateau, and the enclosure entrance is included in this experience",
      "Photography is freely permitted on the plateau exterior; interior photography policies vary",
    ],
    faqs: [
      {
        q: "How early does the experience start?",
        a: "Pickup times depend on the season and current sunrise time — typically between 5:00 and 6:30 am. Exact times are confirmed at booking.",
      },
      {
        q: "Is this suitable for children?",
        a: "Yes. The experience involves gentle walking on paved and sandy paths and is suitable for most ages. Guides adapt their commentary for younger visitors.",
      },
      {
        q: "Can we enter inside a pyramid?",
        a: "Interior access is available at an additional charge with a separate ticket. This must be requested in advance as daily entry numbers are strictly limited.",
      },
    ],
    hero: {
      alt: "The Great Pyramid of Giza silhouetted against an amber dawn sky",
      label: "Sunrise at the Giza Pyramids",
    },
    seo: {
      title: "Sunrise at the Giza Pyramids — Private Dawn Experience | Kemet Egypt",
      description:
        "Private early-access dawn experience at the Giza Plateau with a licensed Egyptologist. Watch first light break over the Great Pyramid before the day-visitors arrive.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "giza" }],
      relatedExperiences: [
        { domain: "experience", id: "old-cairo-walking" },
      ],
    },
  },

  // ── 2. Private Felucca Sailing on the Nile ───────────────────────────────
  {
    id: "private-felucca-nile",
    slug: "private-felucca-nile",
    domain: "experience",
    title: "Private Felucca Sailing on the Nile",
    shortSummary:
      "Charter an entire traditional felucca and drift down the Nile past ancient temples, granite boulders and palm-lined riverbanks — at the same unhurried pace Egyptians have sailed for millennia.",
    longDescription:
      "The felucca — a lateen-sailed wooden boat unchanged in its essentials for thousands of years — is the most intimate way to experience the Nile. Under exclusive charter, the vessel belongs to your party alone. From the moment you cast off from the Aswan corniche, the hum of the city fades and is replaced by the sound of wind filling the sail and the gentle slap of water against the hull. The river here is extraordinarily beautiful: the First Cataract's granite boulders break the surface in striking formations, Elephantine Island lies low and green in the middle distance and the dunes of the Western Desert rise beyond the west bank. Your captain navigates the currents with the instinctive skill that comes from generations of Nilotic sailing. A typical afternoon sail takes in Elephantine Island, the Botanical Garden on Kitchener's Island and the Aga Khan Mausoleum on the west bank hill, though the route adapts to wind, current and your preferences.",
    category: "nile-experience",
    durationLabel: "2 hours",
    durationMinutes: 120,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    bestSeasons: ["autumn", "winter", "spring"],
    region: "nile-valley",
    location: "Aswan, Upper Egypt",
    meetingPointNote:
      "The felucca departs from the Aswan corniche. Your hotel and exact departure point are confirmed at booking.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Entire vessel chartered for your party — maximum 8 people.",
    availabilityNote:
      "Available daily in season. Wind conditions occasionally affect timing; your captain advises on the day.",
    priceNote:
      "Pricing confirmed on enquiry. Full vessel charter included — no per-person charge.",
    highlights: [
      "Entire felucca chartered exclusively for your group",
      "First Cataract granite islands and Elephantine Island",
      "Kitchener's Botanical Garden viewed from the water",
      "West-bank dunes and the Aga Khan Mausoleum",
      "Completely unhurried — no schedule, no other passengers",
    ],
    keyFacts: [
      { label: "Duration", value: "2 hours" },
      { label: "Difficulty", value: "Easy" },
      { label: "Departure", value: "Aswan corniche (confirmed at booking)" },
      { label: "Group type", value: "Private charter — up to 8 guests" },
      { label: "Languages", value: "English, French, Arabic" },
      { label: "Best season", value: "October – April" },
    ],
    whatsIncluded: [
      "Exclusive felucca charter (entire vessel)",
      "Experienced Nilotic captain",
      "Life jackets",
      "Bottled water",
    ],
    whatsExcluded: [
      "Disembarkation visits to islands (available on request, subject to operator permit)",
      "Lunch or refreshments beyond bottled water",
      "Gratuities",
      "Hotel transfers",
    ],
    preparationTips: [
      "Bring sun protection — shade on a felucca is limited and the Nile reflects UV strongly",
      "A light layer is useful if sailing in the late afternoon; temperatures drop quickly after sunset",
      "Flat shoes are recommended — boarding and leaving the felucca requires a small step",
    ],
    goodToKnow: [
      "Feluccas are wind-powered and cannot motor against strong headwinds; the captain will advise on conditions",
      "The experience is conducted in a relaxed, unhurried style — there is no formal commentary unless requested",
      "Photography of the riverbanks is unrestricted; Egyptian military installations on the corniche should not be photographed",
    ],
    faqs: [
      {
        q: "Can we stop at Elephantine Island?",
        a: "A sailing circuit past the island is standard. Landing requires a separate permit and arrangements; this can be organised on request when booking.",
      },
      {
        q: "Is the experience suitable for non-swimmers?",
        a: "Yes. Life jackets are provided and the felucca sails in calm, sheltered sections of the river. The experience is gentle and low-risk.",
      },
    ],
    hero: {
      alt: "A traditional felucca with a white lateen sail on the Nile near Aswan",
      label: "Private Felucca on the Nile",
    },
    seo: {
      title: "Private Felucca Sailing on the Nile, Aswan — Exclusive Charter | Kemet Egypt",
      description:
        "Charter an entire traditional felucca in Aswan for an unhurried private sail on the Nile past Elephantine Island, the First Cataract and the desert west bank.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "aswan" }],
      relatedExperiences: [
        { domain: "experience", id: "luxor-temple-night" },
      ],
    },
  },

  // ── 3. Old Cairo Walking Experience ──────────────────────────────────────
  {
    id: "old-cairo-walking",
    slug: "old-cairo-walking",
    domain: "experience",
    title: "Old Cairo Walking Experience",
    shortSummary:
      "Walk the medieval lanes of Islamic Cairo and the Coptic quarter with a historian guide who reads the city's 1,400-year layered fabric — from Roman fortifications to Ottoman merchant palaces.",
    longDescription:
      "Cairo is not one city but a dozen, each built on the ruins of its predecessor. This private walking experience moves through the oldest inhabited layers: the Roman fortress of Babylon, where Christianity arrived in Africa; the Coptic quarter with its hanging churches built into the Roman towers; and the medieval fabric of Islamic Cairo — the world's largest surviving medieval city and a UNESCO World Heritage Site. Your historian guide is not a script-reader but someone who actually knows the city: who can stand in the courtyard of Ibn Tulun mosque and explain what made its ninth-century founder different from every other Abbasid governor, or point out the Mamluk water distribution systems still visible in the alley walls. The walk takes in the Khan el-Khalili bazaar quarter and the perfume-sellers' alley at its edge, giving you the knowledge to navigate and appreciate it independently later in your trip.",
    category: "walking-tour",
    durationLabel: "3 hours",
    durationMinutes: 180,
    difficulty: "moderate",
    familyFriendly: true,
    luxuryFriendly: false,
    adventureFriendly: false,
    bestSeasons: ["autumn", "winter", "spring"],
    region: "cairo",
    location: "Islamic Cairo & Coptic Quarter, Cairo",
    meetingPointNote:
      "Meeting point is the Roman fortress of Babylon, Coptic Cairo. Hotel pickup available on request.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Private — your party only. Maximum 8 people for comfortable lane navigation.",
    availabilityNote:
      "Available most mornings. Friday prayers affect access to some mosques; alternative timings arranged.",
    priceNote: "Pricing confirmed on enquiry. All site entrance fees included.",
    highlights: [
      "Roman fortress of Babylon and the Hanging Church",
      "Ben Ezra Synagogue — one of the oldest in Africa",
      "Ibn Tulun Mosque — Cairo's oldest intact mosque (AD 879)",
      "The medieval fabric of Islamic Cairo (UNESCO World Heritage Site)",
      "Khan el-Khalili bazaar quarter and the perfume-sellers' alley",
    ],
    keyFacts: [
      { label: "Duration", value: "3 hours" },
      { label: "Difficulty", value: "Moderate (cobblestones and uneven surfaces)" },
      { label: "Start point", value: "Coptic Cairo (Babylon fortress)" },
      { label: "Group type", value: "Private — your party only" },
      { label: "Languages", value: "English, French, Arabic" },
      { label: "Suitable for", value: "Ages 8 and above" },
    ],
    whatsIncluded: [
      "Private historian guide",
      "All mosque and church entrance fees",
      "Bottled water",
    ],
    whatsExcluded: [
      "Museum of Islamic Art entrance (optional addition, 1 hour)",
      "Lunch or refreshments beyond water",
      "Hotel transfers (available on request)",
      "Gratuities",
    ],
    preparationTips: [
      "Wear comfortable, flat shoes — the alleyways are cobbled and sometimes uneven",
      "Shoulders and knees should be covered for entry into mosques and churches; scarves are available from the guide if needed",
      "The walk involves moderate distances (approx. 3–4 km) with some steps and inclines",
      "Morning starts (before 10 am) avoid the peak heat and the earliest tourist groups",
    ],
    goodToKnow: [
      "Friday is the Islamic holy day — some mosques close to visitors during prayer times (late morning); the route adapts accordingly",
      "Photography is permitted in most public spaces and the exterior of religious buildings; interior photography policies vary",
      "The Khan el-Khalili section of the walk is observational — no purchases are obligatory and the guide provides context that makes browsing more rewarding",
    ],
    faqs: [
      {
        q: "How much walking is involved?",
        a: "The route covers approximately 3–4 km over three hours, including pauses for explanation at each site. The terrain includes cobblestones and occasional steps but no sustained climbs.",
      },
      {
        q: "Can the walk be adapted for younger children?",
        a: "Yes. The historian can shorten the route and adjust commentary for family groups with younger children. A shorter 2-hour version covering just the Coptic quarter is available.",
      },
    ],
    hero: {
      alt: "The medieval lanes of Islamic Cairo with a minaret visible above the rooftops",
      label: "Old Cairo Walking Experience",
    },
    seo: {
      title: "Old Cairo Walking Experience — Private Historian Tour | Kemet Egypt",
      description:
        "Private walking tour of Islamic Cairo and the Coptic quarter with a historian guide. Roman fortress of Babylon, Ibn Tulun Mosque, Hanging Church and Khan el-Khalili.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "cairo" }],
      relatedExperiences: [
        { domain: "experience", id: "sunrise-giza-pyramids" },
        { domain: "experience", id: "egyptian-cooking" },
      ],
    },
  },

  // ── 4. Egyptian Cooking Experience ───────────────────────────────────────
  {
    id: "egyptian-cooking",
    slug: "egyptian-cooking",
    domain: "experience",
    title: "Egyptian Cooking Experience",
    shortSummary:
      "Learn to cook four dishes that trace Egypt's 7,000-year food history — from ancient grain preparations to Ottoman-era stuffed vegetables — in a private kitchen session led by a Cairo food specialist.",
    longDescription:
      "Egyptian food is one of the oldest continuous culinary traditions on earth, shaped by pharaonic grain culture, Coptic fasting practices, Arab spice routes and Ottoman palace cooking. This private kitchen session unpacks that history through your hands. You begin with a guided visit to a neighbourhood market, where your instructor explains how Egyptians actually shop — what the seasonal markers mean, which spice merchants to trust, why the pickles in the corner shop have been made the same way since the Fatimid period. Back in the kitchen, you prepare four dishes representative of different periods and influences. The session ends with a shared meal of what you've cooked, accompanied by a short tasting of Egyptian breads and mezze that adds context to what you've made.",
    category: "food-drink",
    durationLabel: "4 hours",
    durationMinutes: 240,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: false,
    adventureFriendly: false,
    bestSeasons: ["spring", "summer", "autumn", "winter"],
    region: "cairo",
    location: "Central Cairo (exact address confirmed at booking)",
    meetingPointNote:
      "The session begins at a neighbourhood market; hotel pickup is included.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Private — your party only. Maximum 6 people for kitchen comfort.",
    availabilityNote:
      "Available most mornings and some evenings, year-round.",
    priceNote:
      "Pricing confirmed on enquiry. All ingredients, market visit and the shared meal are included.",
    highlights: [
      "Guided neighbourhood market visit with your instructor",
      "Four dishes spanning pharaonic, Coptic, Arab and Ottoman food traditions",
      "Hands-on cooking in a private kitchen",
      "Shared meal of your dishes with Egyptian breads and mezze",
      "Recipe booklet to take home",
    ],
    keyFacts: [
      { label: "Duration", value: "4 hours (including market visit and meal)" },
      { label: "Difficulty", value: "Easy — no prior cooking experience required" },
      { label: "Location", value: "Central Cairo (confirmed at booking)" },
      { label: "Group type", value: "Private — maximum 6 guests" },
      { label: "Languages", value: "English, French, Arabic" },
      { label: "Dietary notes", value: "Vegetarian options available; advise at booking" },
    ],
    whatsIncluded: [
      "Guided neighbourhood market visit",
      "All ingredients and kitchen equipment",
      "Private cooking instruction",
      "Shared meal and Egyptian bread/mezze tasting",
      "Recipe booklet",
      "Hotel pickup and drop-off",
    ],
    whatsExcluded: [
      "Beverages beyond water and Egyptian tea",
      "Gratuities",
    ],
    preparationTips: [
      "Wear comfortable clothes that don't mind a splash of oil or turmeric",
      "Advise of any dietary restrictions or allergies at booking — the menu can be adjusted",
      "The market visit involves a short walk (15–20 minutes) on mixed surfaces",
    ],
    goodToKnow: [
      "The market visit is to a working neighbourhood market, not a tourist bazaar",
      "All dietary preferences are accommodated with advance notice — vegan and gluten-free options available",
      "Children who enjoy cooking are welcome; the instructor adjusts tasks for younger participants",
    ],
    faqs: [
      {
        q: "What dishes do we cook?",
        a: "The menu varies seasonally and is curated by the instructor. A typical session includes ful medames (ancient broad-bean stew), mahshi (Ottoman-style stuffed vegetables), a pharaonic-influenced grain salad and konafa (Levantine pastry). The exact dishes are confirmed before the session.",
      },
      {
        q: "Do we need any cooking experience?",
        a: "None at all. The session is designed for curious travellers, not trained cooks. The emphasis is on food history and flavour rather than technique.",
      },
    ],
    hero: {
      alt: "Hands rolling grape leaves for Egyptian mahshi on a marble kitchen counter",
      label: "Egyptian Cooking Experience",
    },
    seo: {
      title: "Egyptian Cooking Experience, Cairo — Private Kitchen Session | Kemet Egypt",
      description:
        "Private Egyptian cooking class in Cairo — market visit, four dishes spanning 7,000 years of food history, and a shared meal. Hands-on, history-led, private instruction.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "cairo" }],
      relatedExperiences: [
        { domain: "experience", id: "old-cairo-walking" },
      ],
    },
  },

  // ── 5. Luxor Temple by Night ──────────────────────────────────────────────
  {
    id: "luxor-temple-night",
    slug: "luxor-temple-night",
    domain: "experience",
    title: "Luxor Temple by Night",
    shortSummary:
      "Walk the illuminated Avenue of Sphinxes into Luxor Temple after dark — one of the most dramatic experiences in Egyptian heritage tourism, now fully accessible following the 2021 restoration.",
    longDescription:
      "The 2021 completion of the Avenue of Sphinxes — a 2.7 km processional road lined with 1,057 ram-headed and human-headed sphinxes that once connected Luxor Temple to Karnak — transformed the experience of visiting Luxor at night. Walking this avenue after dark, with each sphinx and pylon lit from beneath, is among the most genuinely cinematic experiences in Egyptian heritage travel. Luxor Temple itself is exceptionally evocative under illumination: its colours sharper than in daylight, its scale more legible without the bleaching of the midday sun. This private experience is guided by a licensed Egyptologist who walks the Avenue of Sphinxes with you, explaining the ritual processions (the Opet Festival) that once moved along this road, before entering the temple enclosure and covering its key chambers, the Abu Haggag mosque built inside the pylon, and the remarkable Roman paintings preserved in what was briefly a sanctuary of the Imperial cult.",
    category: "night-experience",
    durationLabel: "2–3 hours",
    durationMinutes: 150,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    bestSeasons: ["autumn", "winter", "spring"],
    region: "nile-valley",
    location: "Luxor Temple & Avenue of Sphinxes, Luxor",
    meetingPointNote:
      "The walk begins at the northern end of the Avenue of Sphinxes, near Karnak. Hotel pickup available.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Private — your party only.",
    availabilityNote:
      "Available most evenings. The temple opens to visitors after dark from approximately 6 pm.",
    priceNote:
      "Pricing confirmed on enquiry. All entrance fees and the Egyptologist guide included.",
    highlights: [
      "The 2.7 km Avenue of Sphinxes — fully restored and illuminated after dark",
      "Luxor Temple under floodlighting — colours and proportions at their most dramatic",
      "The Abu Haggag mosque built inside the New Kingdom pylon",
      "Roman imperial-cult paintings inside the temple's innermost sanctuary",
      "Fewer visitors than day sessions — a more contemplative experience",
    ],
    keyFacts: [
      { label: "Duration", value: "2–3 hours" },
      { label: "Difficulty", value: "Easy" },
      { label: "Start time", value: "After sunset (approx. 7 pm, confirmed at booking)" },
      { label: "Location", value: "Luxor Temple, Luxor" },
      { label: "Group type", value: "Private — your party only" },
      { label: "Languages", value: "English, French, Arabic" },
    ],
    whatsIncluded: [
      "Private licensed Egyptologist guide",
      "Luxor Temple entrance fee",
      "Avenue of Sphinxes access",
      "Hotel pickup and drop-off (Luxor)",
    ],
    whatsExcluded: [
      "Karnak Temple (separate complex, separate ticket — day visits recommended)",
      "Gratuities",
      "Dinner or refreshments",
    ],
    preparationTips: [
      "Bring a light layer — winter evenings in Luxor cool quickly after sunset",
      "Wear flat, comfortable shoes; the Avenue of Sphinxes is paved but long",
      "A tripod dramatically improves low-light photography of the illuminated pylon and sphinxes",
    ],
    goodToKnow: [
      "The Abu Haggag mosque, built inside the pylon of Ramesses II, is an active place of worship — respectful dress and behaviour are expected",
      "The temple is at its least crowded in the two hours after opening; earlier evening visits can still have moderate footfall",
      "Photography is freely permitted throughout the site",
    ],
    faqs: [
      {
        q: "Is this different from a daytime visit to Luxor Temple?",
        a: "Significantly so. The illumination changes the colour temperature and depth of the reliefs, revealing detail that washes out in direct sunlight. The Avenue of Sphinxes at night is a completely different experience from seeing it in daylight.",
      },
      {
        q: "Can we combine this with a Karnak visit?",
        a: "Karnak is a separate complex approximately 2.5 km north. It is open to visitors in the evening as well. We can arrange a full evening itinerary combining both sites.",
      },
    ],
    hero: {
      alt: "The Avenue of Sphinxes in Luxor illuminated at night, leading to the pylon of Luxor Temple",
      label: "Luxor Temple by Night",
    },
    seo: {
      title: "Luxor Temple by Night — Avenue of Sphinxes Illuminated Experience | Kemet Egypt",
      description:
        "Private guided evening experience at Luxor Temple and the restored Avenue of Sphinxes. One of Egypt's most dramatic heritage experiences — best seen after dark.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "luxor" }],
      relatedExperiences: [
        { domain: "experience", id: "private-felucca-nile" },
      ],
    },
  },
];
