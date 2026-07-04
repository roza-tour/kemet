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
      alt: "A decorated camel resting before the Pyramids of Giza in warm early light",
      label: "Sunrise at the Giza Pyramids",
      src: "/images/giza/giza-camel-pyramids-sunrise.webp",
      width: 736,
      height: 736,
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
      alt: "A traditional felucca under white lateen sail on the Nile at Aswan",
      label: "Private Felucca on the Nile",
      src: "/images/aswan/aswan-felucca-sailing-nile.webp",
      width: 736,
      height: 981,
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
      alt: "A lantern-lit medieval lane of Islamic Cairo along Al-Muizz Street, minarets above the rooftops",
      label: "Old Cairo Walking Experience",
      src: "/images/cairo/cairo-al-muizz-street.webp",
      width: 736,
      height: 1104,
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
      alt: "The colonnade of Luxor Temple with its seated royal statues, floodlit in the evening",
      label: "Luxor Temple by Night",
      src: "/images/luxor/luxor-temple-colonnade.webp",
      width: 736,
      height: 920,
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

  // ── 6. Private Nile Dinner Cruise ─────────────────────────────────────────
  {
    id: "private-nile-dinner-cruise",
    slug: "private-nile-dinner-cruise",
    domain: "experience",
    title: "Private Nile Dinner Cruise",
    shortSummary:
      "Dinner afloat on the Cairo Nile aboard a privately reserved vessel — the capital's skyline sliding past over a slow, well-cooked evening.",
    longDescription:
      "Cairo is a river city that most visitors only ever see from its banks. This evening corrects that. A dinner vessel is reserved for your party — no shared tables, no stage-show conveyor belt — and casts off as the light drops, when the city softens and the minarets, tower and bridges come on one by one. Dinner is a set Egyptian menu built around charcoal grills and mezze rather than buffet theatre, served at your pace as the boat makes its slow loop between the Corniche and the island tip of Zamalek. Live oud music can be arranged, or the evening can simply be left quiet — on the water, the city's roar drops to a hum, which many guests find is the entire point.",
    category: "nile-experience",
    durationLabel: "2.5–3 hours",
    durationMinutes: 165,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    bestSeasons: ["spring", "summer", "autumn", "winter"],
    region: "cairo",
    location: "Nile Corniche, central Cairo",
    meetingPointNote:
      "Boarding point on the central Cairo corniche, confirmed at booking. Hotel pickup and drop-off included.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Vessel reserved for your party — from 2 up to 12 guests.",
    availabilityNote: "Sails nightly, year-round; earlier family departures available.",
    priceNote: "Pricing confirmed on enquiry. Full vessel reservation and set dinner included.",
    highlights: [
      "Privately reserved vessel — your table is the only one that matters",
      "Cairo's skyline at dusk from the middle of the river",
      "Set Egyptian dinner of charcoal grills and mezze, not a buffet line",
      "Optional live oud music, arranged on request",
      "Hotel pickup and drop-off included",
    ],
    keyFacts: [
      { label: "Duration", value: "2.5–3 hours" },
      { label: "Departure", value: "After sunset (time varies by season)" },
      { label: "Group type", value: "Private — up to 12 guests" },
      { label: "Dietary", value: "Vegetarian and allergies accommodated with notice" },
      { label: "Languages", value: "English, French, Arabic" },
    ],
    whatsIncluded: [
      "Private vessel reservation",
      "Set Egyptian dinner with soft drinks and mineral water",
      "Private transfers from and to your Cairo or Giza hotel",
    ],
    whatsExcluded: [
      "Alcoholic drinks (may be brought aboard; ask when booking)",
      "Live musician (optional, arranged on request)",
      "Gratuities",
    ],
    preparationTips: [
      "Bring a light layer — the river breeze is noticeably cooler than the streets, even in summer",
      "Book the earlier slot if travelling with young children; the later sailing suits couples",
    ],
    goodToKnow: [
      "The route loops the central Cairo reach of the Nile; boarding and disembarking use the same dock",
      "Winter sailings are fully worthwhile — the skyline is clearest in the cool months",
    ],
    faqs: [
      {
        q: "Is this one of the big party boats?",
        a: "No — deliberately. Those run shared decks, buffets and amplified shows. This is a smaller vessel reserved privately, with a set menu and the volume turned down. The city provides the spectacle.",
      },
      {
        q: "Can you cater for dietary requirements?",
        a: "Yes. The menu adapts to vegetarian, pescatarian and most allergies with advance notice — tell us at booking rather than on the dock.",
      },
    ],
    hero: {
      alt: "Feluccas and river craft on the Cairo Nile seen from above at dusk",
      label: "Private Nile Dinner Cruise",
      src: "/images/tours/tour-nile-cairo-feluccas-aerial.webp",
      width: 736,
      height: 1308,
    },
    seo: {
      title: "Private Nile Dinner Cruise, Cairo — Exclusive Evening on the River | Kemet Egypt",
      description:
        "A privately reserved dinner cruise on the Cairo Nile — set Egyptian menu, skyline at dusk and hotel transfers included. No shared decks, no buffet lines.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "cairo" }],
      relatedExperiences: [
        { domain: "experience", id: "private-felucca-nile" },
        { domain: "experience", id: "old-cairo-walking" },
      ],
    },
  },

  // ── 7. Hot-Air Balloon over Luxor ─────────────────────────────────────────
  {
    id: "hot-air-balloon-luxor",
    slug: "hot-air-balloon-luxor",
    domain: "experience",
    title: "Hot-Air Balloon over Luxor",
    shortSummary:
      "Drift over the Theban necropolis at dawn — the Valley of the Kings, Hatshepsut's temple and the Nile's green edge, seen the way only a balloon allows.",
    longDescription:
      "Luxor at dawn from a balloon basket is one of the defining images of world travel, and it is earned honestly: nowhere else can you hang quietly above three and a half thousand years of monument while the sun comes up over the river that made them possible. Flights launch from the West Bank in the calm first minutes of the day, rising over the sugarcane and floodplain edge to reveal Hatshepsut's terraces cut into the cliff, the honeycombed hills of the Valley of the Kings and, across the water, Karnak catching the first light. Flights run 45 to 60 minutes with licensed pilots under Egyptian civil-aviation oversight, and are cancelled without hesitation in unsuitable wind — which is exactly what you want from a balloon operator. We hold flexible dates so a cancelled morning rolls to the next.",
    category: "luxury-experience",
    durationLabel: "3 hours (45–60 min flight)",
    durationMinutes: 180,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: true,
    bestSeasons: ["autumn", "winter", "spring"],
    region: "nile-valley",
    location: "West Bank, Luxor",
    meetingPointNote:
      "Pre-dawn hotel pickup in Luxor; a short boat crossing to the West Bank launch field is part of the experience.",
    isPrivate: false,
    languages: ["en", "ar"],
    groupSizeNote:
      "Baskets are shared (sectioned compartments); private-basket charters available on request.",
    availabilityNote:
      "Flies most mornings October–May, strictly weather permitting. Cancelled flights are rebooked or refunded.",
    priceNote: "Pricing confirmed on enquiry; private-basket charter quoted separately.",
    highlights: [
      "The Valley of the Kings and Hatshepsut's temple from the air",
      "Sunrise over the Nile and the temples of the East Bank",
      "Licensed pilots under civil-aviation oversight",
      "Flexible-date booking — cancelled mornings roll forward",
      "Private-basket charter available for couples and families",
    ],
    keyFacts: [
      { label: "Flight time", value: "45–60 minutes" },
      { label: "Start", value: "Pre-dawn pickup (time confirmed the evening before)" },
      { label: "Season", value: "October – May" },
      { label: "Minimum age", value: "6 years (basket wall height)" },
      { label: "Group type", value: "Shared basket; private charter on request" },
    ],
    whatsIncluded: [
      "Hotel pickup and drop-off in Luxor",
      "Boat crossing to the West Bank launch site",
      "45–60 minute flight with a licensed pilot",
      "Light pre-flight refreshment and flight certificate",
    ],
    whatsExcluded: [
      "Private-basket charter (optional, quoted on request)",
      "Gratuities",
    ],
    preparationTips: [
      "Wear layers — the launch field is cold before sunrise, warm an hour later",
      "Flat closed shoes; the landing is gentle but is still a field",
      "Charge your camera the night before; this is not the morning to run out of battery",
    ],
    goodToKnow: [
      "Wind cancellations are a feature, not a failure — never fly with an operator who won't cancel",
      "Book for early in your Luxor stay so a cancelled morning has room to roll forward",
    ],
    faqs: [
      {
        q: "Is ballooning in Luxor safe?",
        a: "Flights operate under Egyptian Civil Aviation Authority oversight with licensed pilots, morning-only windows and strict wind limits. The correct answer to marginal weather is cancellation, and the operators we use cancel without hesitation. Book early in your stay so there is room to rebook.",
      },
      {
        q: "Can we have a basket to ourselves?",
        a: "Yes — private-basket charters are available and are the best version of the experience for couples and families. Ask when booking; availability is tighter than shared seats.",
      },
    ],
    hero: {
      alt: "Hot-air balloons over the West Bank of Luxor at first light",
      label: "Hot-Air Balloon over Luxor",
      src: "/images/luxor/luxor-hot-air-balloons-dawn.webp",
      width: 736,
      height: 981,
    },
    seo: {
      title: "Hot-Air Balloon over Luxor — Dawn Flight above the Valley of the Kings | Kemet Egypt",
      description:
        "Sunrise balloon flight over Luxor's West Bank — the Valley of the Kings, Hatshepsut's temple and the Nile at dawn, with licensed pilots and flexible-date booking.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "luxor" }],
      relatedExperiences: [
        { domain: "experience", id: "luxor-temple-night" },
        { domain: "experience", id: "sunrise-giza-pyramids" },
      ],
    },
  },

  // ── 8. Grand Egyptian Museum Private Tour ─────────────────────────────────
  {
    id: "grand-egyptian-museum-private",
    slug: "grand-egyptian-museum-private",
    domain: "experience",
    title: "Grand Egyptian Museum Private Tour",
    shortSummary:
      "The largest archaeological museum ever built, walked privately with an Egyptologist — Tutankhamun's complete treasure, the grand staircase and the solar boat.",
    longDescription:
      "The Grand Egyptian Museum is too big to wander well. Its permanent galleries hold over 50,000 objects; the Tutankhamun collection alone — displayed complete for the first time since Carter opened the tomb in 1922 — runs to more than 5,000 pieces. Without structure, visitors drift; with a senior Egyptologist, the building becomes a narrative. This private tour moves through the museum in story order: the eleven-metre colossus of Ramesses II in the atrium, the grand staircase's procession of kings rising toward the pyramids framed in the window, the boy-king's gold in the sequence the tomb itself revealed, and Khufu's forty-four-metre solar boat — a real, 4,500-year-old ship built to carry a pharaoh through the afterlife. Timing is planned around the coach waves, and the pace is entirely yours.",
    category: "museum-visit",
    durationLabel: "4 hours",
    durationMinutes: 240,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    bestSeasons: ["spring", "summer", "autumn", "winter"],
    region: "cairo",
    location: "Grand Egyptian Museum, Giza plateau edge",
    meetingPointNote: "Hotel pickup from Cairo or Giza included; the museum sits beside the plateau.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Private — your party only.",
    availabilityNote: "Available daily; morning and afternoon sessions.",
    priceNote: "Pricing confirmed on enquiry. Entrance fees and Egyptologist included.",
    highlights: [
      "The complete Tutankhamun collection — over 5,000 objects together at last",
      "The grand staircase of royal statuary with the pyramids in the window",
      "Khufu's 4,500-year-old solar boat, forty-four metres of original cedar",
      "A senior Egyptologist who turns fifty thousand objects into one story",
      "Timed around the tour-coach waves; fully air-conditioned year-round",
    ],
    keyFacts: [
      { label: "Duration", value: "4 hours" },
      { label: "Location", value: "Giza plateau edge" },
      { label: "Group type", value: "Private — your party only" },
      { label: "Best combined with", value: "A Giza plateau morning" },
      { label: "Languages", value: "English, French, Arabic" },
    ],
    whatsIncluded: [
      "Private senior Egyptologist guide",
      "Museum entrance fees (main galleries and Tutankhamun)",
      "Private air-conditioned transfers, Cairo & Giza",
    ],
    whatsExcluded: [
      "Special exhibitions requiring separate tickets",
      "Lunch (the museum's restaurants are good; your guide will advise)",
      "Gratuities",
    ],
    preparationTips: [
      "Comfortable shoes — the building is nearly a kilometre end to end",
      "Photography is permitted in most galleries without flash; the Tutankhamun rooms restrict it",
    ],
    goodToKnow: [
      "The GEM and the old Egyptian Museum in Tahrir are different buildings with different collections — a serious visit deserves both",
      "Summer is an excellent time for this experience; the building is fully climate-controlled",
    ],
    faqs: [
      {
        q: "How is this different from just buying a museum ticket?",
        a: "Scale. The GEM is the largest archaeological museum on earth, and unguided visitors reliably exhaust themselves in the first third. A private Egyptologist sequences the collection into a story, knows where the crowds pulse, and makes four hours feel shorter than a self-guided two.",
      },
      {
        q: "Should we do the pyramids and the GEM on the same day?",
        a: "It is the natural pairing — plateau in the morning cool, museum in the climate-controlled afternoon. Our Giza & the Grand Museum day tour runs exactly that shape; this experience is the museum half on its own, for those pacing it differently.",
      },
    ],
    hero: {
      alt: "The Grand Egyptian Museum at the edge of the Giza plateau",
      label: "Grand Egyptian Museum",
      src: "/images/giza/giza-grand-egyptian-museum.webp",
      width: 474,
      height: 592,
    },
    gallery: [
      {
        alt: "Khufu's cedar solar boat displayed in its museum hall",
        label: "Solar boat",
        src: "/images/giza/khufu-solar-boat-museum.webp",
        width: 1200,
        height: 900,
      },
    ],
    seo: {
      title: "Grand Egyptian Museum Private Tour — Tutankhamun with an Egyptologist | Kemet Egypt",
      description:
        "Private guided tour of the Grand Egyptian Museum — the complete Tutankhamun treasure, the grand staircase and Khufu's solar boat, paced around the crowds.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "giza" }],
      relatedExperiences: [
        { domain: "experience", id: "sunrise-giza-pyramids" },
        { domain: "experience", id: "giza-sound-light-private" },
      ],
    },
  },

  // ── 9. Red Sea Private Yacht Day ──────────────────────────────────────────
  {
    id: "red-sea-yacht-day",
    slug: "red-sea-yacht-day",
    domain: "experience",
    title: "Red Sea Private Yacht Day",
    shortSummary:
      "A private yacht out of Sharm El Sheikh for the day — Ras Mohammed's reefs, deck lunch at anchor and a route set entirely by your party.",
    longDescription:
      "The difference between a shared boat trip and a private charter on the Red Sea is the difference between a schedule and a day. With the yacht reserved for your party alone, the route follows preference rather than programme: long snorkelling stops over the coral gardens of Ras Mohammed National Park, an anchorage in a turquoise lagoon for lunch off the grill, a detour because the water simply looks right. The crew handle everything — guiding in the water, drinks on deck, the quiet competence that makes a sea day effortless — and the Sinai backdrop does the rest: bare desert mountains dropping into water with twenty-metre visibility as the norm. It is the Red Sea's best day, run at the pace of the people on board rather than the manifest.",
    category: "luxury-experience",
    durationLabel: "Full day (≈7 hours)",
    durationMinutes: 420,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: true,
    bestSeasons: ["spring", "summer", "autumn", "winter"],
    region: "red-sea",
    location: "Sharm El Sheikh marina & Ras Mohammed National Park",
    meetingPointNote: "Sharm El Sheikh marina; hotel transfers within Sharm included.",
    isPrivate: true,
    languages: ["en", "ar"],
    groupSizeNote: "Entire yacht chartered for your party — up to 10 guests.",
    availabilityNote: "Sails daily, sea conditions permitting.",
    priceNote: "Pricing confirmed on enquiry. Full charter — no per-person rate aboard.",
    highlights: [
      "Entire yacht chartered exclusively for your group",
      "Snorkelling stops over Ras Mohammed's coral walls and gardens",
      "Fresh deck lunch from the on-board grill, at anchor in a lagoon",
      "Route and pace set by your party, not a shared manifest",
      "Snorkelling equipment, guide and crew included",
    ],
    keyFacts: [
      { label: "Duration", value: "Full day (≈7 hours)" },
      { label: "Departure", value: "Sharm El Sheikh marina, ~9 am" },
      { label: "Group type", value: "Private charter — up to 10 guests" },
      { label: "Marine park", value: "Ras Mohammed National Park" },
      { label: "Sea temperature", value: "21–28 °C across the year" },
    ],
    whatsIncluded: [
      "Private yacht charter with full crew",
      "Snorkelling equipment and in-water guide",
      "Deck lunch, soft drinks and water",
      "Ras Mohammed marine park fees",
      "Hotel transfers within Sharm El Sheikh",
    ],
    whatsExcluded: [
      "Scuba diving from the yacht (arranged on request with a licensed centre)",
      "Alcoholic drinks (may be arranged in advance)",
      "Gratuities for the crew",
    ],
    preparationTips: [
      "High-SPF, reef-safe sunscreen — the deck sun plus water reflection is fierce",
      "Bring a dry change of clothes; the ride home is breezier than the ride out",
    ],
    goodToKnow: [
      "Sea days cancel rarely, but winter can bring chop — the crew call it honestly",
      "Non-swimmers are welcome; life vests and shaded deck space make it a fine day regardless",
    ],
    faqs: [
      {
        q: "Can we combine snorkelling and diving on the same charter?",
        a: "Yes — a licensed dive guide and tanks can join the charter with advance notice, so certified divers descend while the rest of the party snorkels the same reef from above.",
      },
      {
        q: "Is the day suitable for children?",
        a: "Very. The lagoon anchorages are calm and shallow, junior-size snorkelling gear is carried, and the crew are practised hands with young swimmers. Tell us ages at booking so the kit is right.",
      },
    ],
    hero: {
      alt: "A turquoise lagoon meeting bare desert headlands at Ras Mohammed, Red Sea",
      label: "Red Sea Private Yacht Day",
      src: "/images/redsea/ras-mohammed-lagoon.webp",
      width: 764,
      height: 458,
    },
    seo: {
      title: "Red Sea Private Yacht Charter, Sharm El Sheikh — Ras Mohammed Day | Kemet Egypt",
      description:
        "Charter a private yacht from Sharm El Sheikh for the day — snorkelling over Ras Mohammed's reefs, deck lunch at anchor and a route set by your party alone.",
    },
    relationships: {
      relatedExperiences: [
        { domain: "experience", id: "luxury-red-sea-diving" },
        { domain: "experience", id: "sinai-stargazing-bedouin" },
      ],
    },
  },

  // ── 10. Guided Red Sea Diving ─────────────────────────────────────────────
  {
    id: "luxury-red-sea-diving",
    slug: "luxury-red-sea-diving",
    domain: "experience",
    title: "Guided Red Sea Diving",
    shortSummary:
      "Two guided boat dives on Sinai's benchmark reefs with a vetted PADI centre — small groups, unhurried surface intervals and gear that fits.",
    longDescription:
      "The northern Red Sea is where much of the world learned to dive, and the reasons hold: water that never turns truly cold, visibility that starts at twenty metres, and reef walls that begin at snorkel depth and fall into blue. This experience is a single, properly run boat day — two guided dives at sites chosen on the morning's conditions from the Ras Mohammed and local Sharm reef groups, with a licensed PADI centre we work with continuously rather than whoever quoted lowest. Groups are capped small, surface intervals are genuinely restful, and the boat carries snorkelling guests comfortably, so mixed parties travel well. Certified divers slot straight in; the same day converts into a Discover Scuba introduction for beginners with one-to-one instruction.",
    category: "nature",
    durationLabel: "Full day (2 dives)",
    durationMinutes: 420,
    difficulty: "moderate",
    familyFriendly: false,
    luxuryFriendly: true,
    adventureFriendly: true,
    bestSeasons: ["spring", "summer", "autumn", "winter"],
    region: "red-sea",
    location: "Sharm El Sheikh reefs & Ras Mohammed",
    meetingPointNote: "Dive-centre jetty, Sharm El Sheikh; hotel transfers included.",
    isPrivate: false,
    languages: ["en", "ar"],
    groupSizeNote: "Maximum 4 divers per guide; private guide available on request.",
    availabilityNote: "Daily departures, conditions permitting. Certification card required for guided dives.",
    priceNote: "Pricing confirmed on enquiry. Equipment, boat and park fees included.",
    highlights: [
      "Two guided dives on the Ras Mohammed / Sharm reef groups",
      "Vetted PADI centre — small groups, honest weather calls",
      "Soft-coral walls, anthias clouds, turtles and Napoleon wrasse",
      "Discover Scuba conversion for uncertified beginners",
      "Snorkelling companions welcome on the same boat",
    ],
    keyFacts: [
      { label: "Duration", value: "Full day" },
      { label: "Dives", value: "2 guided boat dives" },
      { label: "Ratio", value: "Max 4 divers per guide" },
      { label: "Requirement", value: "Open Water certification (or Discover Scuba option)" },
      { label: "Water", value: "21–28 °C; 20 m+ visibility typical" },
    ],
    whatsIncluded: [
      "Two guided boat dives with a licensed PADI centre",
      "Full equipment rental, tanks and weights",
      "Marine park fees where applicable",
      "Boat lunch and soft drinks",
      "Hotel transfers within Sharm El Sheikh",
    ],
    whatsExcluded: [
      "Dive insurance (mandatory; arranged at booking if needed)",
      "Nitrox fills (available on request)",
      "Gratuities",
    ],
    preparationTips: [
      "Bring your certification card and logbook — the centre will ask, which is a good sign",
      "Do not fly within 18–24 hours after diving; we sequence your itinerary around it",
    ],
    goodToKnow: [
      "Winter diving is excellent — a 5 mm suit is carried aboard and the sites are quieter",
      "The same boat day converts to a Discover Scuba introduction with one-to-one instruction",
    ],
    faqs: [
      {
        q: "I've never dived — can I still join?",
        a: "Yes, as a Discover Scuba Diving introduction: theory and confined-water practice in the morning, then a shallow guided reef dive with an instructor holding a one-to-one ratio. No certification needed, and it counts toward an Open Water course if the bug bites.",
      },
      {
        q: "How does this fit into a Nile itinerary?",
        a: "Cleanly — Luxor to Sharm El Sheikh is a short flight. The only rule is the no-fly interval after diving, so we schedule dive days at least a full day before any flight.",
      },
    ],
    hero: {
      alt: "A vivid Red Sea coral reef alive with tropical fish",
      label: "Guided Red Sea Diving",
      src: "/images/redsea/red-sea-coral-reef-fish.webp",
      width: 736,
      height: 915,
    },
    seo: {
      title: "Red Sea Diving, Sharm El Sheikh — Guided Boat Dives at Ras Mohammed | Kemet Egypt",
      description:
        "Two guided Red Sea boat dives with a vetted PADI centre — Ras Mohammed's walls, small groups and full equipment. Discover Scuba option for beginners.",
    },
    relationships: {
      relatedExperiences: [
        { domain: "experience", id: "red-sea-yacht-day" },
      ],
    },
  },

  // ── 11. Sinai Desert Evening & Stargazing ─────────────────────────────────
  {
    id: "sinai-stargazing-bedouin",
    slug: "sinai-stargazing-bedouin",
    domain: "experience",
    title: "Sinai Desert Evening & Stargazing",
    shortSummary:
      "Out of the resort lights and into the Sinai interior — Bedouin tea by the fire, a charcoal dinner and some of the darkest skies within reach of any airport.",
    longDescription:
      "Twenty minutes beyond Sharm El Sheikh's last streetlight, the Sinai turns back into what it has always been: bare granite mountains, absolute quiet and a night sky most visitors have never actually seen. This evening is hosted by a Bedouin family whose relationship with this landscape predates every resort on the coast. It begins with sweet tea brewed over the fire in the lee of a rock wall, moves through a charcoal-grilled dinner eaten on carpets under the open sky, and ends lying back for a guided reading of a sky dense enough to show the Milky Way's structure to the naked eye — with a telescope for the planets when conditions allow. It is not staged folklore. It is dinner in the desert with people who live there, and it recalibrates the entire coast.",
    category: "desert-adventure",
    durationLabel: "5 hours (evening)",
    durationMinutes: 300,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: true,
    bestSeasons: ["spring", "autumn", "winter"],
    region: "red-sea",
    location: "Sinai interior, from Sharm El Sheikh",
    meetingPointNote: "Hotel pickup in Sharm El Sheikh by 4x4 in the late afternoon.",
    isPrivate: true,
    languages: ["en", "ar"],
    groupSizeNote: "Private — your party only, hosted by a Bedouin family.",
    availabilityNote: "Runs most evenings; best around the new moon for the darkest sky.",
    priceNote: "Pricing confirmed on enquiry. Dinner, transfers and hosting included.",
    highlights: [
      "Genuine Bedouin hospitality — tea, fire and unhurried conversation",
      "Charcoal-grilled dinner on carpets under the open sky",
      "Skies dark enough to show the Milky Way's structure unaided",
      "Guided constellation reading; telescope when conditions allow",
      "Private 4x4 transfer into and out of the desert",
    ],
    keyFacts: [
      { label: "Duration", value: "≈5 hours, late afternoon to night" },
      { label: "Group type", value: "Private — your party only" },
      { label: "Best sky", value: "Around the new moon" },
      { label: "Terrain", value: "Easy — carpets and low seating at camp" },
      { label: "Temperature", value: "Desert nights drop sharply — layers provided" },
    ],
    whatsIncluded: [
      "Private 4x4 transfers from your Sharm hotel",
      "Bedouin-hosted dinner and tea",
      "Guided stargazing session",
      "Blankets and camp seating",
    ],
    whatsExcluded: [
      "Alcoholic drinks (not offered at the camp)",
      "Gratuities for your hosts",
    ],
    preparationTips: [
      "Bring a warm layer even in spring — desert temperatures fall fast after sunset",
      "Let your eyes adapt: phone screens off for twenty minutes makes the sky twice as deep",
    ],
    goodToKnow: [
      "Timing shifts with the lunar calendar — we steer bookings toward the darkest windows",
      "The evening pairs perfectly with a sea day; desert and reef in twenty-four hours",
    ],
    faqs: [
      {
        q: "Is this a staged 'Bedouin show'?",
        a: "No — and that is the point. There is no belly-dancing stage or quad-bike convoy. It is a hosted dinner at a family camp, with the sky as the main event. Guests consistently call it the quietest, most memorable evening of the coast.",
      },
      {
        q: "What will we actually see in the sky?",
        a: "On a clear, moonless night: the Milky Way core in season, several planets, satellites, and meteors on any given hour. The guide reads the sky in both Bedouin star-lore and modern astronomy, which is a better combination than either alone.",
      },
    ],
    hero: {
      alt: "A lantern-lit terrace in the Sinai night above the Red Sea",
      label: "Sinai Desert Evening",
      src: "/images/redsea/sinai-cliff-lounge-night.webp",
      width: 736,
      height: 1308,
    },
    gallery: [
      {
        alt: "A still rock pool hidden in a granite wadi of the Sinai interior",
        label: "Sinai wadi",
        src: "/images/redsea/sinai-wadi-rock-pool.webp",
        width: 719,
        height: 800,
      },
    ],
    seo: {
      title: "Sinai Desert Evening & Stargazing, Sharm El Sheikh — Bedouin Dinner | Kemet Egypt",
      description:
        "A private Bedouin-hosted evening in the Sinai interior — fire-brewed tea, charcoal dinner and guided stargazing under some of the darkest skies in Egypt.",
    },
    relationships: {
      relatedExperiences: [
        { domain: "experience", id: "red-sea-yacht-day" },
      ],
    },
  },

  // ── 12. Pyramids Sound & Light, Privately ─────────────────────────────────
  {
    id: "giza-sound-light-private",
    slug: "giza-sound-light-private",
    domain: "experience",
    title: "Pyramids Sound & Light, Privately",
    shortSummary:
      "The Giza plateau after dark — the Sphinx narrating five thousand years as light plays across the pyramids, with private terrace seating and transfers.",
    longDescription:
      "By night the Giza plateau empties, the desert cools, and the monuments are handed back to theatre. The Sound & Light show is unapologetically classic — the Sphinx 'speaks', the pyramids take the light one by one, and five millennia are compressed into an hour of narration — and seen from the right seat it lands surprisingly well. This arrangement handles the part that usually doesn't: private transfers timed to skip the entry crush, reserved terrace seating with clear sightlines rather than the general benches, and an Egyptologist on hand at dinner beforehand or coffee afterwards to separate the show's poetry from the actual archaeology. It slots neatly into an arrival evening, when jet lag wants something spectacular that demands nothing.",
    category: "night-experience",
    durationLabel: "3 hours (1-hour show)",
    durationMinutes: 180,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    bestSeasons: ["spring", "summer", "autumn", "winter"],
    region: "cairo",
    location: "Giza plateau, Sphinx theatre area",
    meetingPointNote: "Hotel pickup from Cairo or Giza included; showtimes vary by season and language.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Private transfers and reserved seating for your party.",
    availabilityNote: "Runs nightly with rotating language schedules; English shows most evenings.",
    priceNote: "Pricing confirmed on enquiry. Reserved seating and transfers included.",
    highlights: [
      "The pyramids and Sphinx illuminated against the desert night",
      "Reserved terrace seating with unobstructed sightlines",
      "Private transfers timed around the entry crowds",
      "Ideal arrival-evening activity — spectacular, effortless",
      "Optional pre-show dinner with plateau views",
    ],
    keyFacts: [
      { label: "Duration", value: "≈3 hours door to door; 1-hour show" },
      { label: "Showtimes", value: "Evenings, varying by season" },
      { label: "Languages", value: "Rotating schedule; English most nights" },
      { label: "Group type", value: "Private transfers & reserved seats" },
      { label: "Suitable for", value: "All ages" },
    ],
    whatsIncluded: [
      "Reserved terrace seating for the show",
      "Private air-conditioned transfers, Cairo & Giza",
      "Booking management around the language schedule",
    ],
    whatsExcluded: [
      "Pre-show dinner (optional, arranged on request)",
      "Gratuities",
    ],
    preparationTips: [
      "Bring a layer in winter — the plateau is markedly colder than the city at night",
      "Arrive hungry if adding the dinner; the view does half the work",
    ],
    goodToKnow: [
      "The show is theatre, not a lecture — enjoy it as spectacle and save the archaeology for daylight",
      "Pairs naturally with a next-morning plateau or Grand Egyptian Museum visit",
    ],
    faqs: [
      {
        q: "Is the Sound & Light show worth it?",
        a: "As theatre under the real pyramids, yes — especially on an arrival evening when energy is low and expectations want managing. Treat it as spectacle rather than scholarship and it more than earns its hour.",
      },
      {
        q: "What language is the narration in?",
        a: "The schedule rotates nightly across English, French, Spanish, German and others, with headset translations available at most shows. We confirm the language line-up for your dates before booking.",
      },
    ],
    hero: {
      alt: "The Sound and Light show illuminating a pyramid and the Sphinx at Giza",
      label: "Pyramids Sound & Light",
      src: "/images/giza/giza-sound-and-light-show.webp",
      width: 1200,
      height: 800,
    },
    seo: {
      title: "Pyramids Sound & Light Show, Giza — Private Evening with Transfers | Kemet Egypt",
      description:
        "The Giza Sound & Light show done properly — reserved terrace seating, private transfers and optional dinner with plateau views. The perfect arrival evening.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "giza" }],
      relatedExperiences: [
        { domain: "experience", id: "sunrise-giza-pyramids" },
        { domain: "experience", id: "grand-egyptian-museum-private" },
      ],
    },
  },

  // ── 13. Nubian Village Experience ─────────────────────────────────────────
  {
    id: "nubian-village-experience",
    slug: "nubian-village-experience",
    domain: "experience",
    title: "Nubian Village Experience",
    shortSummary:
      "Cross the Nile to a painted Nubian village above Aswan — hibiscus tea in a family house, henna, spice talk and a culture older than the pharaohs' border.",
    longDescription:
      "Nubia is not a themed excursion; it is a living culture with its own language, music and architecture, carried by communities who rebuilt their world around Aswan after Lake Nasser submerged their homeland in the 1960s. This visit is built on a standing relationship with one village and one extended family. You cross by boat in the late afternoon, when the painted houses — saturated blues, yellows and geometric whitework — take the best light, and the visit unfolds at domestic pace: hibiscus tea and just-baked bread in the family courtyard, the shape of the Nubian language on your host's lips, henna for those who want it, and a rooftop view of the Nile bending through granite that explains at a glance why this culture never left the river. You are a guest, not an audience.",
    category: "cultural",
    durationLabel: "3–4 hours",
    durationMinutes: 210,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: false,
    adventureFriendly: false,
    bestSeasons: ["autumn", "winter", "spring"],
    region: "nubia",
    location: "West-bank Nubian village, Aswan",
    meetingPointNote: "Boat departure from the Aswan corniche; hotel pickup included.",
    isPrivate: true,
    languages: ["en", "ar"],
    groupSizeNote: "Private — your party only, hosted by one family.",
    availabilityNote: "Afternoons year-round; the late slot has the best light and temperature.",
    priceNote: "Pricing confirmed on enquiry. Boat, hosting and refreshments included.",
    highlights: [
      "A standing family relationship, not a rotating tour stop",
      "The painted village in its best late-afternoon light",
      "Hibiscus tea, fresh bread and unhurried conversation",
      "Rooftop view over the Nile's granite bend",
      "Henna and Nubian music where the family offers, never staged",
    ],
    keyFacts: [
      { label: "Duration", value: "3–4 hours including the river crossing" },
      { label: "Group type", value: "Private — your party only" },
      { label: "Best time", value: "Late afternoon" },
      { label: "Terrain", value: "Easy village lanes; some sandy paths" },
      { label: "Languages", value: "English, Arabic (Nubian at home)" },
    ],
    whatsIncluded: [
      "Private boat transfer from the Aswan corniche, both ways",
      "Family hosting with tea, bread and refreshments",
      "Guide throughout — cultural context in both directions",
      "Hotel pickup and drop-off in Aswan",
    ],
    whatsExcluded: [
      "Handicraft purchases (never obligatory; buying direct benefits the maker)",
      "Gratuities",
    ],
    preparationTips: [
      "Dress modestly — you are entering a family home, not a venue",
      "Ask before photographing people; your guide will smooth the way",
    ],
    goodToKnow: [
      "Purchases in the village go directly to makers — the best souvenir economics in Egypt",
      "The visit pairs naturally with a felucca sail; the same afternoon can hold both",
    ],
    faqs: [
      {
        q: "Is this respectful to visit, or intrusive?",
        a: "Done our way, it is hospitality both sides chose. We work with one family on standing terms, visits are private and paced by the hosts, and spending lands directly in the village. What we refuse to run is the twenty-boat convoy version.",
      },
      {
        q: "What is the connection between Nubia and ancient Egypt?",
        a: "Deep and reciprocal. Nubia was ancient Egypt's southern neighbour, trade partner, rival and — in the 25th Dynasty — its ruler, when Nubian pharaohs governed the whole country. The granite of Aswan's quarries and much of Egypt's gold came from this frontier.",
      },
    ],
    hero: {
      alt: "A blue-painted Nubian village above the Nile at Aswan",
      label: "Nubian Village Experience",
      src: "/images/aswan/aswan-nubian-village-nile.webp",
      width: 512,
      height: 640,
    },
    seo: {
      title: "Nubian Village Experience, Aswan — Private Family Visit | Kemet Egypt",
      description:
        "Cross the Nile to a painted Nubian village above Aswan — a private, family-hosted visit with hibiscus tea, henna and living Nubian culture. No convoy tourism.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "aswan" }],
      relatedExperiences: [
        { domain: "experience", id: "private-felucca-nile" },
      ],
    },
  },

  // ── 14. Alexandria Heritage Walk ──────────────────────────────────────────
  {
    id: "alexandria-heritage-walk",
    slug: "alexandria-heritage-walk",
    domain: "experience",
    title: "Alexandria Heritage Walk",
    shortSummary:
      "The Mediterranean's lost capital on foot — Greco-Roman remains, belle-époque cafés and the corniche, read by a guide who knows where the layers show.",
    longDescription:
      "Alexandria hides its past in plain sight: a Roman theatre below a modern square, the ancient lighthouse's stones recycled into a Mamluk fortress, the great Library reborn in glass and granite a few hundred metres from where its predecessor burned. This walking experience reads the city layer by layer. It moves from the Roman Amphitheatre at Kom el-Dikka through the downtown blocks where belle-époque façades still carry Greek and Italian names, pauses properly — coffee and a pastry at one of the surviving grand cafés where the city's poets and exiles once argued — and finishes on the corniche with the Citadel of Qaitbay across the water, standing on the exact footprint of the Pharos. It is the connective tissue the drive-through monument circuit never supplies: not just what Alexandria has, but what Alexandria was.",
    category: "walking-tour",
    durationLabel: "3 hours",
    durationMinutes: 180,
    difficulty: "moderate",
    familyFriendly: true,
    luxuryFriendly: false,
    adventureFriendly: false,
    bestSeasons: ["spring", "summer", "autumn"],
    region: "mediterranean",
    location: "Downtown Alexandria & the corniche",
    meetingPointNote: "Meeting point downtown, confirmed at booking; easily combined with any Alexandria day.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Private — your party only.",
    availabilityNote: "Mornings and late afternoons; summer evenings are especially good.",
    priceNote: "Pricing confirmed on enquiry. Entrances and café stop included.",
    highlights: [
      "The Roman Amphitheatre at Kom el-Dikka — a theatre under the modern city",
      "Belle-époque downtown façades and their cosmopolitan history",
      "Coffee at a surviving grand café of literary Alexandria",
      "The corniche and Qaitbay on the ancient Pharos site",
      "A guide who reads the city's layers, not just its sights",
    ],
    keyFacts: [
      { label: "Duration", value: "3 hours" },
      { label: "Distance", value: "≈3 km at a strolling pace" },
      { label: "Group type", value: "Private — your party only" },
      { label: "Best light", value: "Late afternoon into dusk" },
      { label: "Languages", value: "English, French, Arabic" },
    ],
    whatsIncluded: [
      "Private guide throughout",
      "Roman Amphitheatre entrance",
      "Coffee and pastry at a historic café",
    ],
    whatsExcluded: [
      "Transport from Cairo (see our Alexandria day tour and overnight journeys)",
      "Lunch",
      "Gratuities",
    ],
    preparationTips: [
      "Comfortable shoes; pavements are honest Mediterranean-port pavements",
      "A light jacket off-season — the sea breeze owns this city",
    ],
    goodToKnow: [
      "The walk slots into our Alexandria day tour or overnight as its cultural spine",
      "Summer evenings transform the corniche — the whole city comes out to walk it",
    ],
    faqs: [
      {
        q: "Does this cover the Catacombs and the Library?",
        a: "It deliberately doesn't duplicate them — those anchor our full Alexandria day tour. This walk covers the connective city between the headline sites: the theatre, the cafés, the streets and the seafront that make the monuments make sense.",
      },
      {
        q: "Is Alexandria walkable?",
        a: "The historic core is — flat, compact and made for strolling, particularly once the afternoon breeze arrives. The corniche is one of the great urban seafront walks of the Mediterranean.",
      },
    ],
    hero: {
      alt: "The lighthouse standing on the Alexandria seafront",
      label: "Alexandria Heritage Walk",
      src: "/images/alexandria/alexandria-lighthouse.webp",
      width: 736,
      height: 920,
    },
    seo: {
      title: "Alexandria Heritage Walk — Private Guided Walking Tour | Kemet Egypt",
      description:
        "A private walking tour of Alexandria's layers — the Roman Amphitheatre, belle-époque downtown, historic cafés and the corniche to Qaitbay on the Pharos site.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "alexandria" }],
      relatedExperiences: [
        { domain: "experience", id: "old-cairo-walking" },
      ],
    },
  },

  // ── 15. VIP Airport Meet & Assist ─────────────────────────────────────────
  {
    id: "vip-airport-service",
    slug: "vip-airport-service",
    domain: "experience",
    title: "VIP Airport Meet & Assist",
    shortSummary:
      "Met at the aircraft door, walked through fast-track immigration, luggage handled to the car — Cairo airport reduced to a corridor and a handshake.",
    longDescription:
      "Cairo International is a perfectly functional airport experienced badly at exactly the wrong moments: after a long-haul overnight, before a dawn departure, with children, or with forty minutes between connections. This service removes it from the equation. On arrival you are met at the aircraft door or jet bridge by name, escorted through the fast-track immigration lane with your visa handled, and your luggage is collected and brought to a driver who is already waiting. Departures run the mirror image: kerb to lounge with check-in, security and immigration compressed into minutes. It is the least photogenic experience we offer and one of the most consistently praised — because the first and last hour of a journey sets the tone for everything between.",
    category: "luxury-experience",
    durationLabel: "≈1 hour per direction",
    durationMinutes: 60,
    difficulty: "easy",
    familyFriendly: true,
    luxuryFriendly: true,
    adventureFriendly: false,
    bestSeasons: ["spring", "summer", "autumn", "winter"],
    region: "cairo",
    location: "Cairo International Airport (all terminals)",
    meetingPointNote:
      "Arrivals: met at the aircraft door or jet bridge. Departures: met at the terminal kerb.",
    isPrivate: true,
    languages: ["en", "fr", "ar"],
    groupSizeNote: "Private — priced per party, not per traveller.",
    availabilityNote: "All flights, all terminals, 24/7 with advance booking.",
    priceNote: "Pricing confirmed on enquiry; included automatically in our VIP itineraries.",
    highlights: [
      "Met airside at the aircraft door, by name",
      "Fast-track immigration lane with visa handled for you",
      "Porter service — luggage from belt to vehicle",
      "Departure mirror service: kerb to lounge in minutes",
      "24/7 across all Cairo International terminals",
    ],
    keyFacts: [
      { label: "Duration", value: "≈1 hour per direction" },
      { label: "Coverage", value: "Cairo International, all terminals" },
      { label: "Availability", value: "24/7, every airline" },
      { label: "Group type", value: "Private — per party" },
      { label: "Also available", value: "Luxor, Aswan & Sharm airports on request" },
    ],
    whatsIncluded: [
      "Airside meet & greet at arrival gate or jet bridge",
      "Fast-track immigration and visa handling",
      "Porter service and luggage handling",
      "Escort to your driver or onward connection",
    ],
    whatsExcluded: [
      "Visa fee itself (USD 25, handled but not covered)",
      "Airline lounge access (arranged on request)",
      "Gratuities",
    ],
    preparationTips: [
      "Send your flight number at booking — the team tracks delays automatically",
      "Keep your passport and visa fee accessible; everything else is handled",
    ],
    goodToKnow: [
      "The service shines brightest on arrival after long-haul overnights and on early departures",
      "Regional airports (Luxor, Aswan, Sharm El Sheikh) offer the same service on request",
    ],
    faqs: [
      {
        q: "Is this really worth it for a capable traveller?",
        a: "For a seasoned solo traveller with hand luggage, perhaps not. For families, first visits, tight connections or anyone landing at 3 a.m. after fourteen hours in the air, it converts the worst hour of the trip into a non-event — which is why it is built into all our VIP itineraries.",
      },
      {
        q: "Do you track flight delays?",
        a: "Yes — the team monitors your flight number from departure, so a three-hour delay simply moves the meeting, never cancels it.",
      },
    ],
    hero: {
      alt: "VIP airport meet and assist service",
      label: "VIP Airport Meet & Assist",
    },
    seo: {
      title: "VIP Airport Meet & Assist, Cairo — Fast-Track Arrival & Departure | Kemet Egypt",
      description:
        "Met at the aircraft door, fast-tracked through immigration, luggage handled to the car. Cairo airport VIP meet & assist, 24/7 across all terminals.",
    },
    relationships: {
      destinations: [{ domain: "destination", id: "cairo" }],
      relatedExperiences: [
        { domain: "experience", id: "private-nile-dinner-cruise" },
      ],
    },
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
