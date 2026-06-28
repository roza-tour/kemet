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
    hero: { alt: "Karnak Temple colonnade in winter morning light" },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-10-day", "tour-7-day", "tour-3-day", "tour-giza-museum"),
      destinations: dest("luxor", "aswan", "cairo", "giza"),
      experiences: exp("sunrise-giza-pyramids", "luxor-temple-night", "private-felucca-nile"),
      guides: guide("best-time-to-visit-egypt", "egypt-travel-guide"),
      relatedCollections: col("luxury-egypt", "first-time-egypt"),
    },
    seo: {
      title: "Egypt in Winter — The Best Season for Travel | Kemet",
      description:
        "Plan your Egypt winter trip — October to March is the golden window: 18–26 °C across the Nile Valley, perfect photography light and monuments at their most accessible.",
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
    hero: { alt: "Alexandria Bibliotheca Alexandrina waterfront in summer" },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-giza-museum", "tour-cairo-museums", "tour-alexandria", "tour-religious-citadel"),
      destinations: dest("cairo", "giza", "alexandria"),
      experiences: exp("sunrise-giza-pyramids", "old-cairo-walking", "egyptian-cooking"),
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
    hero: { alt: "First-time visitor at the Giza Pyramids with the Sphinx in the foreground" },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-10-day", "tour-7-day", "tour-3-day", "tour-giza-museum"),
      destinations: dest("cairo", "giza", "luxor", "aswan", "alexandria"),
      experiences: exp("sunrise-giza-pyramids", "luxor-temple-night", "old-cairo-walking"),
      guides: guide("egypt-travel-guide", "egypt-visa-guide", "best-time-to-visit-egypt", "transportation-in-egypt"),
      relatedCollections: col("egypt-in-winter", "luxury-egypt"),
    },
    seo: {
      title: "First-Time Visitors to Egypt — Essential Guide & Curated Tours | Kemet",
      description:
        "Planning your first trip to Egypt? Everything you need: essential tours, the right destinations, planning guides and experiences that define Egypt — curated by Kemet.",
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
    hero: { alt: "Private dahabiya at sunset on the Nile between Luxor and Aswan" },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-10-day", "tour-7-day"),
      destinations: dest("luxor", "aswan", "cairo", "giza"),
      experiences: exp("sunrise-giza-pyramids", "luxor-temple-night", "private-felucca-nile"),
      guides: guide("egypt-travel-guide", "best-time-to-visit-egypt"),
      relatedCollections: col("egypt-in-winter", "first-time-egypt"),
    },
    seo: {
      title: "Luxury Egypt — Private Tours, Nile Cruises & Exclusive Experiences | Kemet",
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
    hero: { alt: "Family standing at the base of the Great Pyramid of Giza" },
    lastReviewed: "2026-01",
    relationships: {
      tours: tour("tour-7-day", "tour-4-day", "tour-fayoum", "tour-giza-museum"),
      destinations: dest("giza", "cairo", "luxor", "fayoum"),
      experiences: exp("sunrise-giza-pyramids", "private-felucca-nile", "egyptian-cooking"),
      guides: guide("egypt-travel-guide", "best-time-to-visit-egypt"),
      relatedCollections: col("first-time-egypt", "egypt-in-winter"),
    },
    seo: {
      title: "Family Adventures in Egypt — Tours & Experiences for Families | Kemet",
      description:
        "Egypt is one of the great family destinations — Pyramids, mummies, Nile sailing and desert wildlife. Curated family tours and experiences from Kemet.",
    },
  },
];

/** Collections in editorial priority order (highest first). */
export const collectionsByPriority = [...collections].sort(
  (a, b) => (b.priority ?? 0) - (a.priority ?? 0),
);

/** Featured collections only, in priority order. */
export const featuredCollections = collectionsByPriority.filter((c) => c.featured);
