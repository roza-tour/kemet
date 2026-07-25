// ---------------------------------------------------------------------------
// Editorial Collections catalogue. Each collection curates existing entities —
// tours, destinations, experiences, guides — around a travel theme. Collections
// do NOT duplicate content; they reference it via typed Refs.
//
// Adding a new collection is data-only. No component or template changes are
// ever required. Relationships propagate automatically through the registry.
// ---------------------------------------------------------------------------
import type { Collection } from "@/types";

const tour = (...ids: string[]) =>
  ids.map((id) => ({ domain: "tour" as const, id }));

const dest = (...ids: string[]) =>
  ids.map((id) => ({ domain: "destination" as const, id }));

const exp = (...ids: string[]) =>
  ids.map((id) => ({ domain: "experience" as const, id }));

const guide = (...ids: string[]) =>
  ids.map((id) => ({ domain: "guide" as const, id }));

const col = (...ids: string[]) =>
  ids.map((id) => ({ domain: "seasonal" as const, id }));

export const collections: Collection[] = [
  // ---------------------------------------------------------------------------
  // 1. Egypt in Winter
  // ---------------------------------------------------------------------------
  {
    id: "egypt-in-winter",
    slug: "egypt-in-winter",
    domain: "seasonal",
    title: "Egypt in Winter",
    subtitle: "The perfect season — cool days, clear light and uncrowded monuments.",
    shortSummary:
      "October to March is Egypt's golden window for travel: comfortable temperatures across the Nile Valley, brilliant photography light and the major monuments at their most accessible.",
    editorialIntro:
      "Winter transforms Egypt's ancient landscape. As temperatures drop to a comfortable 18–26 °C across the Nile Valley, the monuments breathe and the long-angle sunlight turns every stone golden. Cairo hums with its usual energy, but Luxor and Aswan settle into an unhurried rhythm ideal for deep, unhurried exploration. This is the season serious Egyptophiles plan around — and the season Kemet's private itineraries are built for.",
    collectionType: "seasonal",
    seasons: ["autumn", "winter"],
    travelStyles: ["luxury", "cultural", "historical"],
    audience: ["everyone", "couples", "luxury-travellers", "history-enthusiasts"],
    priority: 10,
    featured: true,
    highlights: [
      "Daytime temperatures of 18–26 °C across the Nile Valley — ideal for long monument visits",
      "Low-angle winter light creates extraordinary photography conditions at sunrise and sunset",
      "Peak season means all sites, tours, trains and Nile cruises are fully operational",
      "Karnak Sound & Light shows and outdoor evening experiences are fully comfortable",
      "Abu Simbel alignment event in February — the sun penetrates the inner sanctuary at dawn",
    ],
    planningNotes: [
      "Book 3–6 months ahead for peak winter (December–February) — prime Nile cruise dates sell out",
      "High-speed train Cairo–Luxor runs in under three hours; overnight sleeper is an alternative",
      "Luxor's East and West Banks warrant two full days each — plan at least four nights in Luxor",
      "Aswan in winter is 5–8 °C cooler than Luxor, making it the most comfortable desert city",
    ],
    travelTips: [
      "Early morning monument visits (before 9 am) give you cooler temperatures and fewer crowds",
      "Sunset felucca on the Nile at Aswan is at its most beautiful in winter's golden-hour light",
      "Pack a light layer for evenings — Nile Valley nights can reach 10 °C in January",
    ],
    faqs: [
      {
        q: "Is winter the best time to visit Egypt?",
        a: "For most visitors, yes. October to March brings the most comfortable temperatures for sightseeing across the Nile Valley — typically 18–26 °C by day, 8–14 °C at night. The light is excellent for photography. The trade-off is that December and January are peak season, so popular sites are busier and accommodation costs more.",
      },
      {
        q: "Does it rain in Egypt in winter?",
        a: "Rarely. The Nile Valley — Luxor, Aswan, Abu Simbel — receives almost no rainfall year-round. Cairo sees occasional light showers in December and January, and Alexandria's Mediterranean climate brings more frequent winter rain. For desert sightseeing, rain is essentially not a planning factor.",
      },
    ],
    hero: {
      alt: "Karnak Temple and its sacred lake at Luxor under clear winter light",
      src: "/images/luxor/luxor-karnak-sacred-lake.webp",
      width: 1000,
      height: 600,
    },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-10-day", "tour-nile-cruise", "tour-abu-simbel", "tour-7-day", "tour-3-day", "tour-giza-museum"),
      destinations: dest("luxor", "aswan", "cairo", "giza"),
      experiences: exp("sunrise-giza-pyramids", "luxor-temple-night", "private-felucca-nile", "hot-air-balloon-luxor"),
      guides: guide("best-time-to-visit-egypt", "egypt-travel-guide"),
      relatedCollections: col("luxury-egypt", "first-time-egypt"),
    },
    seo: {
      title: "Egypt in Winter — The Best Season for Travel | Kemet",
      description:
        "Plan your Egypt winter trip: October to March is the golden window — 18–26 °C across the Nile Valley, superb light and monuments at their most accessible.",
    },
  },

  // ---------------------------------------------------------------------------
  // 2. Egypt in Summer
  // ---------------------------------------------------------------------------
  {
    id: "egypt-in-summer",
    slug: "egypt-in-summer",
    domain: "seasonal",
    title: "Egypt in Summer",
    subtitle: "Cairo and Alexandria reward the intrepid summer traveller.",
    shortSummary:
      "Summer in Egypt demands a different strategy: early starts, coastal retreats and museum days. For experienced travellers, it offers quieter monuments, lower prices and the Mediterranean at its finest.",
    editorialIntro:
      "Summer is Egypt's bold season. Temperatures in Luxor and Aswan reach 40–45 °C — that is a real consideration. But Cairo, Alexandria and the Mediterranean coast run 5–10 °C cooler, and the attractions there are mostly indoors or coastal. The Giza Plateau at dawn, before 8 am, is genuinely manageable. The Grand Egyptian Museum is air-conditioned throughout. And Alexandria in July is one of the most underrated urban escapes in the Mediterranean. Summer visitors benefit from shorter queues at every monument and significantly lower tour prices.",
    collectionType: "seasonal",
    seasons: ["summer"],
    travelStyles: ["cultural", "historical", "relaxed"],
    audience: ["everyone", "solo", "history-enthusiasts"],
    priority: 5,
    featured: false,
    highlights: [
      "Grand Egyptian Museum fully air-conditioned — ideal for a full summer day",
      "Alexandria's Corniche and Bibliotheca Alexandrina offer cool, world-class culture",
      "Fewer crowds at every major monument compared to peak winter season",
      "Lower accommodation prices and more tour availability across the board",
      "Early morning Giza visits (before 8 am) are manageable even in summer heat",
    ],
    planningNotes: [
      "Avoid outdoor Nile Valley (Luxor, Aswan) sightseeing between 10 am and 4 pm in summer",
      "Structure days around early monument visits, midday museum or hotel time, and late-afternoon outings",
      "Alexandria is the standout summer destination — Mediterranean climate, no desert heat",
      "Hydration, sun protection and a hat are non-negotiable; factor rest into every itinerary day",
    ],
    travelTips: [
      "Book hotels with pools — they become a genuine mid-day necessity, not a luxury",
      "Summer evenings in Cairo are lively: Khan el-Khalili bazaar, Nile-side restaurants",
      "The Egyptian Museum on Tahrir is older and less well air-conditioned than the GEM — plan accordingly",
    ],
    faqs: [
      {
        q: "Is it safe to visit Egypt in summer?",
        a: "Yes, but it requires careful planning. The main risk is heat exhaustion, not safety. In Cairo and Alexandria — the recommended summer bases — daytime temperatures average 32–36 °C, which is warm but manageable with early starts and midday rest. The Nile Valley (Luxor, Aswan) reaches 42–45 °C and outdoor sightseeing there in summer is genuinely demanding.",
      },
      {
        q: "What is open in summer in Egypt?",
        a: "Everything. Egypt's monuments, museums, restaurants and transport all operate normally year-round. The Grand Egyptian Museum, the Egyptian Museum, the Coptic Museum, the Islamic Art Museum and Alexandria's Bibliotheca Alexandrina are all open and air-conditioned. Outdoor sites like Karnak and the Valley of the Kings are also open — they are simply best visited very early in the morning.",
      },
    ],
    hero: {
      alt: "The Montaza Palace and its gardens on the Alexandria coast in summer",
      src: "/images/alexandria/alexandria-montaza-palace.webp",
      width: 960,
      height: 600,
    },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-giza-museum", "tour-cairo-museums", "tour-alexandria-2day", "tour-sharm-5day", "tour-religious-citadel"),
      destinations: dest("cairo", "giza", "alexandria"),
      experiences: exp("grand-egyptian-museum-private", "old-cairo-walking", "red-sea-yacht-day", "egyptian-cooking"),
      guides: guide("best-time-to-visit-egypt", "egypt-travel-guide"),
      relatedCollections: col("egypt-in-winter", "first-time-egypt"),
    },
    seo: {
      title: "Egypt in Summer — Planning Guide for Summer Travel | Kemet",
      description:
        "Plan a summer trip to Egypt. Quieter monuments, lower prices and a different strategy: early starts, museum days and Alexandria on the Mediterranean.",
    },
  },

  // ---------------------------------------------------------------------------
  // 3. First-Time Visitors
  // ---------------------------------------------------------------------------
  {
    id: "first-time-egypt",
    slug: "first-time-egypt",
    domain: "seasonal",
    title: "First-Time Visitors",
    subtitle: "Egypt's essential collection — the definitive introduction to the greatest civilisation on earth.",
    shortSummary:
      "Everything a first-time visitor needs: the right tours, the right destinations, essential planning guides, and the experiences that define Egypt.",
    editorialIntro:
      "A first visit to Egypt is unlike any other travel experience. The scale of the Pyramids, the density of history in Luxor and the sensory immersion of Cairo's bazaars — none of it translates from photographs. This collection is built around one goal: making your first Egypt visit as rich, smooth and genuinely transformative as it can be. The tours here cover the four essential pillars (Cairo / Giza, Luxor, Aswan, and Alexandria as an optional extension). The guides answer every practical question in advance. The experiences add private moments that turn sightseeing into memory.",
    collectionType: "first-time",
    seasons: ["autumn", "winter", "spring"],
    travelStyles: ["cultural", "historical", "luxury"],
    audience: ["everyone", "first-timers", "couples", "families"],
    priority: 9,
    featured: true,
    highlights: [
      "Cairo and Giza: the Grand Egyptian Museum, the Pyramids and the Sphinx — the essential start",
      "Luxor: Karnak, the Valley of the Kings and Luxor Temple by night — the greatest monument city",
      "Aswan: the most beautiful Nile scenery, Nubian culture and the gateway to Abu Simbel",
      "Alexandria: optional Mediterranean extension with Greco-Roman heritage and seafront culture",
      "Private Egyptologist guide throughout — the single most valuable upgrade for a first visit",
    ],
    planningNotes: [
      "Minimum recommended first visit: 7 days. 10 days allows Cairo, Giza, Luxor, Aswan and Abu Simbel.",
      "Fly Cairo in, fly Luxor or Aswan out — the high-speed train covers the Cairo–Luxor leg comfortably",
      "A Nile cruise between Aswan and Luxor (3–4 nights) covers the monuments with no packing and unpacking",
      "Book a private Egyptologist guide for every monument visit — context transforms what you see",
    ],
    travelTips: [
      "Visit the Valley of the Kings first thing in the morning (gates open 6 am) before tour groups arrive",
      "The Grand Egyptian Museum is best visited on arrival day — it contextualises everything that follows",
      "Keep your first two days in Cairo lightly scheduled — jet lag is real and Cairo is intense",
    ],
    faqs: [
      {
        q: "How many days do I need for a first Egypt trip?",
        a: "Seven days is the practical minimum to cover Cairo/Giza and Luxor with any depth. Ten days adds Aswan and Abu Simbel. Fourteen days or more allows a genuine Nile cruise, Alexandria and a relaxed pace throughout. Most first-time visitors who do seven days return wishing they had booked ten.",
      },
      {
        q: "Is Egypt safe for first-time visitors?",
        a: "Yes. Egypt's major tourist sites — Cairo, Giza, Luxor, Aswan, Alexandria — are heavily patrolled and infrastructure for international tourism is mature and well-developed. The practical challenges for first-timers are navigating the heat, managing touts at major sites, and adjusting to the sensory intensity of Cairo — all manageable with good preparation and a private guide.",
      },
      {
        q: "Do I need a guide in Egypt?",
        a: "You do not need one legally, but a private Egyptologist guide is the single most impactful upgrade for a first visit. The monuments' context — why a specific pharaoh built a specific tomb, what the hieroglyphs say, how the engineering was achieved — transforms sightseeing into understanding. Kemet arranges private, licensed Egyptologist guides for every tour.",
      },
    ],
    hero: {
      alt: "The Great Sphinx of Giza facing the dawn beneath a pyramid",
      src: "/images/giza/giza-great-sphinx-frontal.webp",
      width: 736,
      height: 920,
    },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-10-day", "tour-7-day", "tour-nile-cruise", "tour-3-day", "tour-giza-museum"),
      destinations: dest("cairo", "giza", "luxor", "aswan", "alexandria"),
      experiences: exp("sunrise-giza-pyramids", "grand-egyptian-museum-private", "luxor-temple-night", "old-cairo-walking"),
      guides: guide("egypt-travel-guide", "egypt-visa-guide", "best-time-to-visit-egypt", "transportation-in-egypt"),
      relatedCollections: col("egypt-in-winter", "luxury-egypt"),
    },
    seo: {
      title: "First-Time Visitors to Egypt — Essential Guide | Kemet",
      description:
        "Planning your first trip to Egypt? The essential tours, the right destinations, planning guides and the experiences that define the country.",
    },
  },

  // ---------------------------------------------------------------------------
  // 4. Luxury Egypt
  // ---------------------------------------------------------------------------
  {
    id: "luxury-egypt",
    slug: "luxury-egypt",
    domain: "seasonal",
    title: "Luxury Egypt",
    subtitle: "Private, unhurried and deeply personal — Egypt at its most extraordinary.",
    shortSummary:
      "Egypt's finest hotels, private Egyptologist guides, exclusive monument access and bespoke Nile experiences — curated for discerning travellers who want complete privacy and no compromises.",
    editorialIntro:
      "The luxury Egypt experience is not about price — it is about access, privacy and depth. It means arriving at Karnak before the gates open, with a senior Egyptologist who has spent twenty years at the site. It means a private sundeck on the Nile between Luxor and Aswan, watching the riverbank palms pass at golden hour with no other boat in sight. It means staying at properties where staff know your name by arrival. This collection curates the combinations — tours, experiences, destinations — that consistently deliver that standard.",
    collectionType: "luxury",
    seasons: ["autumn", "winter", "spring"],
    travelStyles: ["luxury", "cultural", "historical"],
    audience: ["luxury-travellers", "couples"],
    priority: 8,
    featured: true,
    highlights: [
      "Private monument access: pre-opening entry and after-hours visits arranged on request",
      "Exclusive Nile cruising: boutique dahabiyas and private-charter cruises between Luxor and Aswan",
      "Senior Egyptologist guides — specialists rather than licensed generalists",
      "Five-star properties with genuine Nile, pyramid or temple views",
      "Completely private itineraries: your party, your schedule, your pace",
    ],
    planningNotes: [
      "Private dahabiya Nile cruises (4–7 nights, Luxor–Aswan) must be booked 6–12 months ahead",
      "Pre-opening access to the Valley of the Kings or Karnak requires advance coordination — allow 4 weeks",
      "Luxury properties in Luxor and Aswan have limited rooms; January and February fill earliest",
      "Allow two full days in Luxor minimum — a single day does not do justice to Karnak alone",
    ],
    travelTips: [
      "Sunset at Abu Simbel (one-night stay, not day trip) is one of the most memorable experiences in Egypt",
      "A private felucca at Aswan — booked exclusively for your party — is one of the simplest luxuries",
      "The Four Seasons Nile Plaza in Cairo offers views of the Nile that reward a slow, well-timed breakfast",
    ],
    faqs: [
      {
        q: "What is a dahabiya and why is it the luxury way to cruise the Nile?",
        a: "A dahabiya is a traditional Egyptian sailing vessel, smaller and slower than a cruise ship — typically accommodating 8–16 guests. Its size means it can moor at sites that larger ships cannot reach, and it operates at a pace set entirely by its passengers. A private charter means your party has the entire boat. It is the most intimate, least commercial way to travel the Nile between Luxor and Aswan.",
      },
      {
        q: "Can you arrange private access to monuments outside opening hours?",
        a: "Yes. Kemet arranges special-access permits for pre-opening entry and, in some cases, after-hours private visits to monuments including the Valley of the Kings and Karnak Temple. These require advance planning — typically four to eight weeks — and availability depends on the site and season. Contact us to discuss what is possible for your dates.",
      },
    ],
    hero: {
      alt: "A private Nubian terrace above the Nile at sunset in Aswan",
      src: "/images/aswan/aswan-nubian-terrace-sunset.webp",
      width: 736,
      height: 1275,
    },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-honeymoon-9day", "tour-grand-14day", "tour-10-day", "tour-nile-cruise", "tour-cairo-vip-3day"),
      destinations: dest("luxor", "aswan", "cairo", "giza"),
      experiences: exp("sunrise-giza-pyramids", "private-nile-dinner-cruise", "red-sea-yacht-day", "hot-air-balloon-luxor", "vip-airport-service"),
      guides: guide("egypt-travel-guide", "best-time-to-visit-egypt"),
      relatedCollections: col("egypt-in-winter", "first-time-egypt"),
    },
    seo: {
      title: "Luxury Egypt — Private Tours & Nile Cruises | Kemet",
      description:
        "Luxury Egypt travel by Kemet — private Egyptologist guides, exclusive dahabiya Nile cruises, pre-opening monument access and bespoke five-star itineraries.",
    },
  },

  // ---------------------------------------------------------------------------
  // 5. Family Adventures
  // ---------------------------------------------------------------------------
  {
    id: "family-egypt",
    slug: "family-egypt",
    domain: "seasonal",
    title: "Family Adventures",
    subtitle: "Egypt captures children's imaginations like nowhere else on earth.",
    shortSummary:
      "From the Pyramids of Giza to Fayoum's desert landscapes, Egypt is a natural family destination — endlessly fascinating for curious minds at every age.",
    editorialIntro:
      "No history lesson prepares a child for the moment they stand at the foot of the Great Pyramid. Nor for the moment a senior Egyptologist explains, in terms an eight-year-old can grasp, how the ancient Egyptians mummified their pharaohs. Egypt works for families because its defining experiences are visceral and tangible — you stand inside the things, not in front of them. This collection selects tours, experiences and destinations that have been refined through family travel, balancing depth of discovery with pace, variety and the practical realities of travelling with children.",
    collectionType: "family",
    seasons: ["autumn", "winter", "spring"],
    travelStyles: ["family", "cultural", "historical"],
    audience: ["families", "everyone"],
    priority: 7,
    featured: true,
    highlights: [
      "Giza Pyramids and the Sphinx — no child forgets the scale of the Great Pyramid up close",
      "Grand Egyptian Museum's dedicated children's areas and interactive mummy galleries",
      "Fayoum oasis: desert wildlife, whale fossils and the freshwater lake at Wadi El-Rayan",
      "Felucca sailing on the Nile: the gentlest, most memorable way to introduce children to the river",
      "Egyptian cooking class: children's version available — making kofta and koshari hands-on",
    ],
    planningNotes: [
      "Children under 6 find very long monument visits tiring — structure mornings for sightseeing, afternoons for hotels or pools",
      "Private guides who specialise in families make a significant difference — ask Kemet to specify this",
      "The Valley of the Kings involves steep descents into tombs; bring water and allow extra time",
      "Luxor is safer for families with young children than Cairo for independent exploration",
    ],
    travelTips: [
      "Let children carry the site plan / map — it gives them a role and helps orient the visit",
      "The Egyptian Museum's mummy room (separate ticket) is the highlight for most children aged 8+",
      "Fayoum makes an excellent day trip from Cairo — desert and wildlife without a long flight",
    ],
    faqs: [
      {
        q: "What age is appropriate for a first Egypt trip?",
        a: "There is no strict minimum. Children from about seven or eight upwards tend to engage meaningfully with the monuments — the scale of the Pyramids and the storytelling around mummies and pharaohs captivate this age group. Younger children can still enjoy Egypt (the Nile, animals, food) but may not retain the historical depth. Many families make a first visit at 7–10 years, then return when children are teenagers.",
      },
      {
        q: "Is Egypt safe for families with children?",
        a: "Yes. Egypt is a child-friendly culture — Egyptians are warmly attentive to children, and the major tourist areas are safe for family travel. The practical considerations are heat management (especially for children under ten), pacing monument visits carefully, and hydration. A private guide means you never need to worry about logistics, crowds or navigation — you simply focus on the experience.",
      },
    ],
    hero: {
      alt: "The Great Sphinx and a pyramid of Giza, a highlight for families",
      src: "/images/giza/giza-sphinx-and-pyramid.webp",
      width: 736,
      height: 920,
    },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-family-8day", "tour-7-day", "tour-4-day", "tour-fayoum", "tour-giza-museum"),
      destinations: dest("giza", "cairo", "luxor", "fayoum"),
      experiences: exp("sunrise-giza-pyramids", "giza-sound-light-private", "nubian-village-experience", "private-felucca-nile", "egyptian-cooking"),
      guides: guide("egypt-travel-guide", "best-time-to-visit-egypt"),
      relatedCollections: col("first-time-egypt", "egypt-in-winter"),
    },
    seo: {
      title: "Family Adventures in Egypt — Tours & Experiences | Kemet",
      description:
        "Egypt is one of the great family destinations — Pyramids, mummies, Nile sailing and desert wildlife. Curated family tours and experiences from Kemet.",
    },
  },

  // ---------------------------------------------------------------------------
  // 6. Christmas & New Year in Egypt
  // ---------------------------------------------------------------------------
  {
    id: "christmas-new-year-egypt",
    slug: "christmas-new-year-egypt",
    domain: "seasonal",
    title: "Christmas & New Year in Egypt",
    subtitle: "Winter sun, empty desert mornings and New Year's Eve on the Nile.",
    shortSummary:
      "Late December and early January are Egypt's warmest, brightest weeks of the northern winter — and the country's most sought-after travel dates. Christmas at the Pyramids, New Year's Eve aboard a Nile cruise, and Coptic Christmas on 7 January.",
    editorialIntro:
      "While northern Europe sits at four degrees and dark by four o'clock, Cairo is 20 °C under a clear sky and Luxor is warmer still. That contrast is why the fortnight around Christmas and New Year has become the most requested window in Egyptian travel — and why it needs the earliest planning of any date in the calendar. Egypt does not do Christmas the way Europe does, and that is precisely the appeal: the day itself is quiet at the monuments, hotel dining rooms put on serious festive tables, and on 31 December the Nile cruise fleet moors together at Luxor or Edfu for one of the more extraordinary New Year's Eves available anywhere. Egypt's own Christmas comes later — the Coptic Orthodox Church marks the Nativity on 7 January, and midnight liturgy at the Hanging Church in Old Cairo is one of the oldest continuous Christmas observances on earth.",
    collectionType: "seasonal",
    seasons: ["winter"],
    travelStyles: ["luxury", "cultural", "historical", "relaxed"],
    audience: ["everyone", "couples", "families", "luxury-travellers"],
    priority: 9,
    featured: true,
    highlights: [
      "Daytime temperatures of 19–24 °C in Cairo and 22–26 °C in Luxor and Aswan — the northern winter's best-value warmth",
      "New Year's Eve aboard a Nile cruise, moored alongside the fleet at Luxor or Edfu with a gala dinner on deck",
      "Christmas Day itself is a normal working day in Egypt — the Pyramids and Karnak are noticeably calmer than the days either side",
      "Coptic Christmas on 7 January — midnight liturgy at the Hanging Church and Abu Serga in Old Cairo",
      "Clear, low-angle winter light: the best photography conditions of the year at Giza and on the West Bank",
    ],
    planningNotes: [
      "This is the single most competitive window of the Egyptian year — the best Nile cruise cabins and Giza-view rooms are typically gone 6–9 months ahead",
      "Expect peak-season supplements over the 24 December – 2 January period at most hotels and on every cruise vessel",
      "Domestic flights (Cairo–Luxor, Cairo–Aswan) fill early over the holiday; the high-speed and sleeper trains are useful alternatives",
      "Egyptian schools break for a mid-year holiday in late January, not December, so domestic crowding is low over Christmas week",
      "Coptic Christmas Eve (6 January) sees heightened security and some road closures around Old Cairo's churches — worth planning around, not avoiding",
    ],
    travelTips: [
      "If New Year's Eve on the Nile is the priority, book the cruise first and build the land itinerary around its fixed departure day",
      "Ask for a Giza-facing room only if you actually want the view at dawn — the plateau is floodlit at night and rooms facing it can be bright",
      "Pack a warm layer: Luxor and Aswan drop to 8–11 °C after dark in late December, and Nile cruise decks are cold at night",
      "Attending Coptic Christmas liturgy is welcomed but it is worship, not a spectacle — dress modestly, arrive early and follow your guide's lead",
    ],
    faqs: [
      {
        q: "Is Egypt a good place to spend Christmas and New Year?",
        a: "Yes — it is one of the strongest winter-sun options within a short flight of Europe. Daytime temperatures sit around 19–24 °C in Cairo and a few degrees higher in Luxor and Aswan, the light is exceptional, and every major site is fully open. Egypt is a majority-Muslim country, so 25 December is an ordinary working day, which means the monuments are often quieter on Christmas Day itself than in the days around it. International hotels and Nile cruise vessels lay on full festive programmes for guests.",
      },
      {
        q: "How far in advance should I book Christmas or New Year in Egypt?",
        a: "Six to nine months for the 24 December – 2 January window. This is the peak of Egypt's peak season: the well-run Nile cruise vessels, the Giza-view hotel rooms and the domestic flights south all sell out first, and prices carry a holiday supplement. Three months out you can usually still build an excellent trip, but the specific cruise or hotel you had in mind may no longer be available.",
      },
      {
        q: "What is New Year's Eve like on a Nile cruise?",
        a: "Distinctive. On 31 December the cruise fleet is generally moored together at Luxor or Edfu, and vessels put on a gala dinner with live music on the upper deck. You get the celebration without the logistics — no taxis, no queues, and the temples the following morning before the crowds. Cabins on the New Year sailing are the first to sell out on any Egyptian itinerary.",
      },
      {
        q: "When is Coptic Christmas in Egypt?",
        a: "7 January. Egypt's Coptic Orthodox Church follows the older calendar, so the Nativity falls thirteen days after 25 December, with the main liturgy held late on the evening of 6 January. Services at the Hanging Church and Abu Serga in Old Cairo — buildings that have been in continuous use for well over a thousand years — are among the oldest Christmas observances anywhere. Visitors are welcome; modest dress and an early arrival are essential.",
      },
      {
        q: "Is it cold in Egypt in December and January?",
        a: "Not by northern-European standards, but the nights are cooler than people expect. Cairo runs about 19–21 °C by day and 9–11 °C at night; Luxor and Aswan reach 22–26 °C by day and drop to 8–11 °C after dark. Desert excursions and Nile cruise decks are genuinely cold in the early morning and evening, so pack a proper layer alongside the sun protection.",
      },
    ],
    hero: {
      alt: "A Nile cruise vessel lit up on the water at night",
      label: "Christmas & New Year in Egypt",
      src: "/images/cruise/nile-cruise-night.webp",
      width: 700,
      height: 500,
    },
    theme: "christmas",
    lastReviewed: "2026-07",
    relationships: {
      tours: tour(
        "tour-nile-cruise",
        "tour-7-day",
        "tour-10-day",
        "tour-cairo-vip-3day",
        "tour-luxor-3day",
        "tour-grand-14day",
      ),
      destinations: dest("cairo", "giza", "luxor", "aswan"),
      experiences: exp(
        "private-nile-dinner-cruise",
        "sunrise-giza-pyramids",
        "giza-sound-light-private",
        "hot-air-balloon-luxor",
        "old-cairo-walking",
      ),
      guides: guide("best-time-to-visit-egypt", "egypt-travel-guide"),
      relatedCollections: col("egypt-in-winter", "luxury-egypt", "first-time-egypt"),
    },
    seo: {
      title: "Christmas & New Year in Egypt — Tours & Nile Cruises | Kemet",
      description:
        "Christmas and New Year in Egypt: 19–26 °C winter sun, New Year's Eve on a Nile cruise, quiet Pyramids on Christmas Day and Coptic Christmas on 7 January.",
    },
  },

  // ---------------------------------------------------------------------------
  // 7. Ramadan in Egypt
  // ---------------------------------------------------------------------------
  {
    id: "ramadan-in-egypt",
    slug: "ramadan-in-egypt",
    domain: "seasonal",
    title: "Ramadan in Egypt",
    subtitle: "The month Cairo comes alive after dark.",
    shortSummary:
      "Travelling during Ramadan is not a compromise — it is the one month of the year when Cairo's medieval heart is lantern-lit until dawn, the monuments are quiet, and hospitality is at its most generous. It requires a little planning, and rewards it completely.",
    editorialIntro:
      "Most itineraries route around Ramadan. We think that is a mistake. For roughly thirty days the rhythm of Egypt inverts: mornings are unhurried and the great sites are noticeably emptier, and then at sunset the whole country exhales at once. Fanous lanterns are strung the length of Al-Muizz Street, tables of food appear on pavements for anyone passing, and Khan el-Khalili trades until three in the morning. Iftar — the meal that breaks the fast — is the most sociable hour in the Egyptian calendar, and being invited to one is not unusual. The practical trade-offs are real and we plan around them: shorter monument hours, restaurants that close during daylight, and an hour before sunset when Cairo's traffic is best avoided entirely. What you get in exchange is a version of the country most visitors never see.",
    collectionType: "seasonal",
    seasons: ["winter", "spring"],
    travelStyles: ["cultural", "historical", "photography"],
    audience: ["everyone", "couples", "history-enthusiasts", "photographers"],
    priority: 7,
    featured: false,
    highlights: [
      "Islamic Cairo after dark — Al-Muizz Street strung with fanous lanterns and busier at midnight than at midday",
      "Noticeably quieter monuments: Giza, Saqqara and Karnak see fewer visitors through the daytime hours",
      "Iftar at sunset — the most generous, most sociable meal of the Egyptian year",
      "Khan el-Khalili and the old cafés trading until two or three in the morning",
      "Ramadan falls in the cool season for the rest of this decade, so the daytime heat is not a factor",
    ],
    planningNotes: [
      "Ramadan follows the lunar calendar and moves about eleven days earlier each year — in 2027 it is expected to run from roughly 8 February to 8 March, with Eid al-Fitr around 9 March. Final dates depend on the crescent-moon sighting, so treat any published date as provisional until close to the time",
      "Many monuments and museums shorten their afternoon hours during Ramadan; we build itineraries around early starts and finish before the pre-iftar rush",
      "The hour before sunset is the worst traffic of the day, every day — everyone is travelling home to break the fast. We deliberately schedule nothing across it",
      "Hotel restaurants, tourist-area cafés and cruise vessels serve normally through the day; independent local restaurants in residential districts often do not open until sunset",
      "Eid al-Fitr, the three-day festival that closes Ramadan, is a national holiday — domestic flights and trains are heavily booked and some offices close, but the monuments stay open and the mood is celebratory",
    ],
    travelTips: [
      "Eating, drinking or smoking in the street during daylight is best avoided out of courtesy — hotels, restaurants and your private vehicle are all entirely fine",
      "Dress a little more conservatively than usual, particularly around mosques and in older districts",
      "Book an iftar table in advance: the good ones — rooftop tables over Islamic Cairo especially — fill weeks ahead",
      "Shift your day later. An early monument start, a long afternoon rest, then out from sunset until midnight matches the country's actual rhythm",
      "Alcohol service is reduced during Ramadan; international hotels generally continue to serve residents discreetly",
    ],
    faqs: [
      {
        q: "Can tourists visit Egypt during Ramadan?",
        a: "Absolutely, and it is one of the more rewarding times to come. Every major monument, museum, hotel and Nile cruise operates throughout Ramadan, and tourists are not expected to fast. Opening hours at some sites are shortened in the afternoon and the atmosphere shifts dramatically after sunset — with a private guide who plans around the day's rhythm, it is a straightforward and unusually memorable trip.",
      },
      {
        q: "When is Ramadan in Egypt?",
        a: "Ramadan follows the Islamic lunar calendar, so it moves roughly eleven days earlier each Gregorian year. In 2027 it is expected to begin around 8 February and end around 8 March, with Eid al-Fitr near 9 March. The exact start depends on the sighting of the crescent moon the evening before, so dates published in advance are always provisional by a day.",
      },
      {
        q: "Will restaurants and monuments be closed during Ramadan?",
        a: "Monuments and museums stay open, though several shorten their afternoon hours. Hotel restaurants, tourist-area cafés and cruise vessels serve normally throughout the day. What changes is local, residential-district dining: many independent restaurants do not open until iftar at sunset, and street food during daylight is limited. In practice this rarely affects a well-planned itinerary.",
      },
      {
        q: "Is it disrespectful to travel in Egypt during Ramadan?",
        a: "Not at all — Egypt welcomes visitors throughout the month and hospitality is, if anything, at its most generous. The courtesies are simple: avoid eating, drinking or smoking in the street during daylight, dress a little more modestly than usual, and be patient in the hour before sunset when everyone is hurrying home. Being invited to share an iftar is common, and accepting is the best thing you can do.",
      },
      {
        q: "What is the best thing to do in Egypt during Ramadan?",
        a: "Walk Islamic Cairo at night. Al-Muizz Street, Khan el-Khalili and the lanes around Al-Azhar are strung with fanous lanterns and are livelier at eleven at night than they are at midday, with the old cafés trading until two or three in the morning. Combine it with an iftar table on a rooftop overlooking the medieval skyline and you have an evening that simply does not exist during the other eleven months.",
      },
    ],
    hero: {
      alt: "Lantern-lit Al-Muizz Street in medieval Islamic Cairo at night",
      label: "Ramadan in Egypt",
      src: "/images/cairo/cairo-al-muizz-street.webp",
      width: 736,
      height: 1104,
    },
    theme: "ramadan",
    lastReviewed: "2026-07",
    relationships: {
      tours: tour(
        "tour-cairo-culture-5day",
        "tour-religious-citadel",
        "tour-cairo-food",
        "tour-cairo-museums",
        "tour-cairo-vip-3day",
      ),
      destinations: dest("cairo", "giza", "luxor"),
      experiences: exp("old-cairo-walking", "egyptian-cooking", "giza-sound-light-private"),
      guides: guide("egypt-travel-guide", "egyptian-food-guide", "best-time-to-visit-egypt"),
      relatedCollections: col("egypt-in-winter", "first-time-egypt"),
    },
    seo: {
      title: "Ramadan in Egypt — Dates & What Changes | Kemet",
      description:
        "Travelling to Egypt during Ramadan: expected dates, what opens and closes, lantern-lit Islamic Cairo after dark, iftar, and the courtesies to know.",
    },
  },

  // ---------------------------------------------------------------------------
  // 8. The Abu Simbel Sun Festival
  // ---------------------------------------------------------------------------
  {
    id: "abu-simbel-sun-festival",
    slug: "abu-simbel-sun-festival",
    domain: "seasonal",
    title: "The Abu Simbel Sun Festival",
    subtitle: "Twice a year, the sun reaches 60 metres into a mountain.",
    shortSummary:
      "On 22 February and 22 October, sunrise drives a shaft of light through the entire length of Ramesses II's temple to illuminate the gods in its innermost sanctuary — an alignment engineered more than three thousand years ago, and still accurate.",
    editorialIntro:
      "It lasts about twenty minutes. At dawn on two mornings each year, the rising sun clears the hills across Lake Nasser and sends a beam through the temple doorway at Abu Simbel, down sixty metres of rock-cut hall, and onto the four seated figures in the sanctuary at the very back. Three of them light up: Ra-Horakhty, Amun-Ra, and Ramesses II himself, seated among gods as one of them. The fourth, Ptah — a deity of the underworld — stays in shadow, as he was always meant to. The dates are traditionally read as Ramesses II's coronation and his birth. What makes it remarkable is not only the astronomy but that it survived the temple being cut into more than a thousand blocks and rebuilt 200 metres back and 65 metres higher when the High Dam flooded the original site in the 1960s — the reconstruction shifted the alignment by roughly a day, which is why the crowd now gathers on both the 21st and the 22nd.",
    collectionType: "festival",
    seasons: ["winter", "autumn"],
    travelStyles: ["historical", "cultural", "photography"],
    audience: ["history-enthusiasts", "photographers", "luxury-travellers", "couples"],
    priority: 8,
    featured: true,
    highlights: [
      "22 February and 22 October — the two mornings the sanctuary is lit, roughly twenty minutes each",
      "Ra-Horakhty, Amun-Ra and Ramesses II are illuminated; Ptah, god of the underworld, deliberately is not",
      "A dawn start from Aswan, arriving in the dark for the doors opening around 5:00–6:00 am",
      "Nubian music and dancing outside the temple through the morning — the event is a local festival, not only an archaeological one",
      "The rest of the day at Abu Simbel is unusually quiet once the crowd disperses back north",
    ],
    planningNotes: [
      "Both dates are fixed and known years ahead, and Aswan's hotels and the Lake Nasser cruise vessels sell out for them — book 6–12 months in advance",
      "Because the 1960s relocation shifted the alignment by about a day, many visitors attend on the 21st as well as the 22nd; if the event is the reason for your trip, allow both mornings",
      "The temple sits roughly 280 km south of Aswan — around a three-hour road transfer, so a festival morning means leaving Aswan between 2:00 and 3:00 am, or flying in on the short Aswan–Abu Simbel hop",
      "Staying overnight at Abu Simbel itself is the civilised option on festival dates: a handful of hotels sit within minutes of the temple, and they are the first thing to go",
      "February mornings at the lake are cold before dawn — 8–12 °C — and hot by mid-morning; October is milder at both ends",
    ],
    travelTips: [
      "The sanctuary is small and the moment is brief: your guide should position you before the doors open, not after",
      "Photography inside the temple is restricted and the light is extremely contrasty — expect to watch it rather than shoot it, and photograph the façade and the crowd instead",
      "Bring a head torch or use your phone for the walk in: the approach is genuinely dark at 5 am",
      "Combine the festival with Philae, the Unfinished Obelisk and a Nubian village afternoon — you are already in Aswan for the best part of a week's worth of sights",
      "If you cannot make the festival dates, Abu Simbel on any ordinary morning is still one of the great sights of the ancient world, and infinitely calmer",
    ],
    faqs: [
      {
        q: "What is the Abu Simbel Sun Festival?",
        a: "Twice a year, at sunrise on 22 February and 22 October, a shaft of sunlight passes through the doorway of the Great Temple of Ramesses II and travels about sixty metres to the sanctuary at the rear, illuminating three of the four seated statues there — Ra-Horakhty, Amun-Ra and Ramesses II. Ptah, associated with the underworld, remains in darkness. The alignment was engineered into the temple when it was cut from the mountainside in the thirteenth century BCE and the effect lasts roughly twenty minutes.",
      },
      {
        q: "What are the Abu Simbel Sun Festival dates?",
        a: "22 February and 22 October each year. Because the temple was dismantled and rebuilt on higher ground in the 1960s to save it from the rising waters of Lake Nasser, the alignment shifted by approximately one day, so many visitors now attend on both the 21st and the 22nd. The illumination happens at sunrise, with the temple opening early — generally between 5:00 and 6:00 am.",
      },
      {
        q: "Why are 22 February and 22 October the dates?",
        a: "The two dates are traditionally associated with Ramesses II's coronation and his birth, separated by exactly eight months. Whether they mark those precise events is debated by Egyptologists, but the deliberate astronomical design of the temple is not in question — the axis was set so that the sun would reach the sanctuary on two specific mornings and no others.",
      },
      {
        q: "How do I get to Abu Simbel for the sun festival?",
        a: "Abu Simbel is about 280 km south of Aswan. Most visitors travel by private road transfer, which takes roughly three hours and means leaving Aswan around 2:00–3:00 am to be in position before dawn. There is also a short flight from Aswan. On festival dates the most comfortable approach by far is to stay overnight in one of the few hotels at Abu Simbel itself — they book out many months ahead.",
      },
      {
        q: "Is the Abu Simbel Sun Festival worth it?",
        a: "If you have a genuine interest in ancient engineering or astronomy, yes — watching a three-thousand-year-old calculation still work to the minute is a rare thing. Be clear about what it involves: a middle-of-the-night start, cold, and a large crowd for a twenty-minute event in a confined space. Travellers who mainly want the temple itself are often better served visiting on an ordinary morning, when Abu Simbel is quiet and you can take your time.",
      },
    ],
    hero: {
      alt: "The colossal seated statues of Ramesses II at the Great Temple of Abu Simbel",
      label: "The Abu Simbel Sun Festival",
      src: "/images/aswan/abu-simbel-great-temple-colossi.webp",
      width: 736,
      height: 1308,
    },
    theme: "sun-festival",
    lastReviewed: "2026-07",
    relationships: {
      tours: tour(
        "tour-abu-simbel",
        "tour-upper-egypt-5day",
        "tour-nile-cruise",
        "tour-10-day",
        "tour-grand-14day",
      ),
      destinations: dest("aswan", "luxor", "cairo"),
      experiences: exp("nubian-village-experience", "private-felucca-nile"),
      guides: guide("best-time-to-visit-egypt", "transportation-in-egypt", "egypt-travel-guide"),
      relatedCollections: col("egypt-in-winter", "first-time-egypt", "luxury-egypt"),
    },
    seo: {
      title: "Abu Simbel Sun Festival — 22 Feb & 22 Oct Dates | Kemet",
      description:
        "The Abu Simbel Sun Festival: on 22 February and 22 October, sunrise lights the inner sanctuary of Ramesses II's temple. Dates, times and how to get there.",
    },
  },
];

/** Collections in editorial priority order (highest first). */
export const collectionsByPriority = [...collections].sort(
  (a, b) => (b.priority ?? 0) - (a.priority ?? 0),
);

/** Featured collections only, in priority order. */
export const featuredCollections = collectionsByPriority.filter((c) => c.featured);
