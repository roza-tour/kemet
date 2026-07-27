// ---------------------------------------------------------------------------
// Travel Guide catalogue. Five production-quality reference implementations —
// adding a future guide means adding one entry here; no component or logic
// change is required.
//
// Relationship rule (consistent with the rest of the content graph):
// guides list their destinations/tours/related guides on the canonical side;
// inverse lookups (guides for a destination, guides for a tour) are derived
// by the registry. Never store the inverse here.
// ---------------------------------------------------------------------------
import type { Guide } from "@/types";

const dest = (...ids: string[]) =>
  ids.map((id) => ({ domain: "destination" as const, id }));

const tour = (...ids: string[]) =>
  ids.map((id) => ({ domain: "tour" as const, id }));

const guide = (...ids: string[]) =>
  ids.map((id) => ({ domain: "guide" as const, id }));

export const guides: Guide[] = [
  // -------------------------------------------------------------------------
  // 1. Egypt Travel Guide — pillar / overview
  // -------------------------------------------------------------------------
  {
    id: "egypt-travel-guide",
    slug: "egypt-travel-guide",
    domain: "guide",
    title: "Egypt Travel Guide",
    locales: ["en"],
    guideType: "overview",
    category: "planning-your-trip",
    shortSummary:
      "Everything you need to plan a trip to Egypt — visa requirements, the best time to go, getting around, top destinations, culture and practical essentials.",
    readingTimeMinutes: 8,
    lastUpdated: "2026-01",
    keyFacts: [
      { label: "Capital", value: "Cairo" },
      { label: "Currency", value: "Egyptian Pound (EGP)" },
      { label: "Language", value: "Arabic (English widely spoken in tourism)" },
      { label: "Time zone", value: "UTC+2 (EET, no daylight saving)" },
      { label: "Visa", value: "On arrival or e-Visa for most nationalities" },
      { label: "Religion", value: "Predominantly Sunni Muslim; Coptic Christian minority" },
      { label: "Emergency", value: "Police 122 · Ambulance 123 · Tourism Police 126" },
    ],
    keyTakeaways: [
      "Visa on arrival is available for most western nationalities at major airports",
      "October to April is the ideal window for visiting Nile Valley monuments",
      "Egypt is a structured, well-developed destination for international tourism",
      "A private Egyptologist guide dramatically improves access to temples and context",
      "Cairo, Giza, Luxor and Aswan are the four pillars of most itineraries",
    ],
    sections: [
      {
        heading: "Egypt in brief",
        paragraphs: [
          "Egypt occupies the north-east corner of Africa, where the Nile cuts through one of the world's driest landscapes. Its civilisation is the longest continuously documented in the world — four thousand years of pharaohs, Greeks, Romans, Arabs and Ottomans left a record in stone that no other country can match.",
          "Modern Egypt is a stable, middle-income country of 106 million people. Tourism is deeply embedded: the country has been welcoming foreign travellers since the nineteenth century, and the infrastructure — airports, hotels, guides, monuments — reflects that experience. First-time visitors are often surprised by how smooth an Egyptian trip is.",
        ],
      },
      {
        heading: "Top destinations",
        paragraphs: [
          "Most itineraries are anchored by four cities. Cairo and Giza sit together at the northern end: Cairo for Islamic architecture, the Egyptian Museum and the Grand Egyptian Museum; Giza for the Pyramids and the Sphinx. Luxor, five hours south by high-speed train or one hour by air, holds the greatest concentration of ancient monuments anywhere — Karnak, Luxor Temple and the Valley of the Kings. Aswan, further south still, marks the Nile at its most serene and is the gateway to Abu Simbel and living Nubian culture.",
          "Alexandria, on the Mediterranean coast, offers a completely different Egypt — Greco-Roman ruins, the modern Bibliotheca Alexandrina and a relaxed seafront pace that contrasts with the heat of the desert interior.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "October to April is peak season and, for most visitors, the right choice. Daytime temperatures in the Nile Valley are 18–26 °C, cool mornings make early temple visits comfortable and the weather is reliably dry. High summer (June–August) brings extreme heat — 40 °C or above in Luxor and Aswan — which makes outdoor sightseeing genuinely demanding.",
          "The shoulder months of April–May and September–October are increasingly popular: slightly warmer than peak winter but quieter and less expensive. Ramadan (dates shift by 11 days each year) is a fascinating time to visit culturally, but some services and restaurant hours adjust — plan accordingly.",
        ],
      },
      {
        heading: "Visa and entry",
        paragraphs: [
          "Most western European, North American and many other nationalities can obtain a tourist visa on arrival at Cairo International, Hurghada or Sharm el-Sheikh airports. The single-entry visa costs USD 25 and allows a 30-day stay. Egypt's e-Visa system also allows pre-travel online applications for around the same cost, with processing typically taking 3–7 business days.",
          "Entry via land borders (Sinai crossing from Israel, or the Libyan and Sudanese frontiers) operates under separate rules. Check your government's current travel guidance before travelling overland.",
        ],
      },
      {
        heading: "Getting around",
        paragraphs: [
          "EgyptAir and budget carriers connect Cairo to Luxor and Aswan in under an hour, which suits itineraries covering the full Nile Valley in limited time. Egyptian National Railways' Spanish-built Talgo trains run the Cairo–Luxor–Aswan corridor in air-conditioned comfort — the overnight sleeper between Cairo and Luxor is a classic itinerary piece that saves a hotel night. Nile cruises between Luxor and Aswan run in three to seven-night formats and remain one of the most distinctive ways to travel in Egypt.",
          "Within cities, Uber operates in Cairo and is the most predictable option for tourists. Cairo's Metro covers the main north–south axis cheaply and efficiently. Intercity transfers are typically arranged through your tour operator.",
        ],
      },
      {
        heading: "Money and payments",
        paragraphs: [
          "Egypt's currency is the Egyptian Pound (EGP). ATMs are widely available in Cairo and tourist centres and give competitive rates. Keep small notes for tipping, entrance extras and markets — USD 1 and USD 5 notes are also accepted at many tourist sites. Most hotels and larger restaurants take international cards; smaller places are cash-only.",
        ],
      },
      {
        heading: "Culture and etiquette",
        paragraphs: [
          "Egypt is a Muslim-majority country and modest dress is expected, particularly at mosques, churches and in rural communities. Men and women should cover shoulders and knees at religious sites; women visiting mosques may be asked to cover their hair. Tipping (baksheesh) is a meaningful part of daily life for many Egyptians in service roles — 10–15% at sit-down restaurants is standard, and small tips for site guards who open extra rooms or provide context are customary.",
          "Friday is the main prayer day; some monuments and government buildings adjust their hours. During Ramadan, eating and drinking in public during daylight hours is disrespectful outside designated tourist areas.",
        ],
      },
      {
        heading: "Safety",
        paragraphs: [
          "Egypt's major tourist destinations are heavily patrolled and secured. Petty issues around monuments — overpricing, persistent touts, unsolicited 'guides' — are more common than any physical risk. Standard precautions apply: agree prices before rides or services, use licensed guides and keep an eye on bags in crowded markets.",
          "The UK, US, Australian and EU governments all maintain current travel advisories. Most classify the main tourist centres — Cairo, Giza, Luxor, Aswan, Alexandria — as safe for travel. Northern Sinai and western border regions carry higher risk ratings and should be avoided.",
        ],
      },
    ],
    importantNotes: [
      "Photography inside some temples and all royal tombs is prohibited or requires a paid permit — check before raising your camera.",
      "Agree the price of any camel ride, carriage or informal service before it begins.",
      "The Egyptian Museum on Tahrir Square and the Grand Egyptian Museum near Giza are separate buildings with different collections.",
    ],
    faqs: [
      {
        q: "Is Egypt safe for tourists?",
        a: "Yes. The major tourist centres — Cairo, Giza, Luxor, Aswan and Alexandria — are well-policed and safe for international visitors. Standard precautions apply. Check your government's current travel advisory before booking.",
      },
      {
        q: "Do I need a guide for Egypt?",
        a: "You don't, but a knowledgeable private Egyptologist guide significantly enriches visits to temples and tombs — the visual record only tells part of the story. Most quality tour operators provide licensed guides who dramatically improve the experience.",
      },
      {
        q: "How long do I need for Egypt?",
        a: "A week is the minimum for a meaningful visit: Cairo and Giza in two to three days, Luxor in two days, Aswan in one to two days. Ten to fourteen days allows a Nile cruise, Abu Simbel and Alexandria without rushing.",
      },
    ],
    hero: {
      alt: "The Great Pyramid of Khufu on the Giza plateau under a clear desert sky",
      label: "Egypt",
      src: "/images/giza/giza-great-pyramid-clear-sky.webp",
      width: 1600,
      height: 1062,
    },
    seo: {
      title: "Egypt Travel Guide — Visa, When to Go & Transport | Kemet",
      description:
        "Everything you need to plan a trip to Egypt. Visa requirements, best time to go, getting around, top destinations and practical advice from Egypt travel specialists.",
    },
    relationships: {
      destinations: dest("cairo", "giza", "luxor", "aswan", "alexandria"),
    },
  },

  // -------------------------------------------------------------------------
  // 2. Egypt Visa Guide
  // -------------------------------------------------------------------------
  {
    id: "egypt-visa-guide",
    slug: "egypt-visa-guide",
    domain: "guide",
    title: "Egypt Visa Guide",
    locales: ["en"],
    guideType: "planning",
    category: "visa-entry",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "How to get an Egypt tourist visa — visa on arrival, e-Visa, eligibility by nationality, costs, and what to expect at immigration.",
    difficulty: "easy",
    readingTimeMinutes: 5,
    lastUpdated: "2026-01",
    keyFacts: [
      { label: "Visa on arrival cost", value: "USD 25 per person" },
      { label: "e-Visa processing", value: "3–7 business days" },
      { label: "Passport validity required", value: "At least 6 months beyond entry" },
      { label: "On-arrival airports", value: "Cairo, Hurghada, Sharm el-Sheikh" },
      { label: "Stay permitted", value: "30 days (extendable to 6 months)" },
      { label: "Extension office", value: "Mogamma Building, Tahrir Square, Cairo" },
    ],
    keyTakeaways: [
      "Most western nationalities qualify for visa on arrival — no advance application required",
      "The e-Visa is convenient for travellers who prefer paperwork confirmed before flying",
      "Have USD 25 in cash ready for visa on arrival; ATMs are available after immigration",
      "Keep a photocopy of your passport and visa page separately throughout your stay",
    ],
    sections: [
      {
        heading: "Egypt visa options at a glance",
        paragraphs: [
          "Egypt offers two main routes for tourist entry: visa on arrival and e-Visa. Both grant the same 30-day stay and conditions — the difference is when and how you apply. A small number of nationalities require a full embassy visa in advance.",
        ],
      },
      {
        heading: "Visa on arrival",
        paragraphs: [
          "Citizens of most European, North American, Australian and many other countries can obtain a tourist visa on arrival at Cairo International Airport (Terminals 1 and 2), Hurghada International Airport and Sharm el-Sheikh International Airport.",
          "The process: on arrival, proceed to the bank counter in the arrivals hall before reaching passport control. Pay USD 25 per person in cash (euros and GBP are accepted at variable exchange rates, so USD is cleaner). You receive a visa sticker to paste into your passport, then present it at the immigration desk as normal.",
          "Processing is straightforward and typically takes under 30 minutes. Peak arrival periods — early morning long-haul flights — can add 20–40 minutes to the queue.",
        ],
      },
      {
        heading: "e-Visa",
        paragraphs: [
          "Egypt's e-Visa portal allows citizens of eligible countries to apply online before travel. Applications are typically processed within 3–7 business days. The approved e-Visa arrives by email as a PDF — print it and present it alongside your passport at immigration.",
          "The advantage of the e-Visa is having documentation confirmed before departure, which can reduce time at the airport. The cost is similar to the on-arrival fee.",
        ],
        note: "Always use the official government portal for e-Visa applications. Multiple third-party sites mimic the official one and charge unnecessary service fees for the same result.",
        noteType: "warning",
      },
      {
        heading: "Eligible nationalities",
        paragraphs: [
          "Visa on arrival is available to citizens of all EU member states, the United Kingdom, the United States, Canada, Australia, New Zealand, Japan, South Korea, Norway, Switzerland and many others. Some nationalities — including Jordanians and certain Gulf GCC nationals — may enter visa-free.",
          "Nationalities not covered by on-arrival or e-Visa must apply at the Egyptian embassy or consulate in their country. Allow at least two to four weeks for processing.",
        ],
      },
      {
        heading: "Entry at land borders",
        paragraphs: [
          "Visa on arrival is generally not available at land border crossings. Travellers entering from Israel (Taba border), Libya or Sudan should confirm current entry procedures with the Egyptian embassy well before travel — conditions at these crossings change separately from airports.",
        ],
      },
      {
        heading: "Extending your stay",
        paragraphs: [
          "A standard 30-day tourist visa can be extended to a maximum of six months at the Mogamma building on Tahrir Square in Cairo, or at regional passport offices in Luxor, Aswan and Alexandria. Apply before your current visa expires. Bring your passport, a passport photograph and, at some offices, a letter from your hotel confirming your accommodation.",
        ],
      },
    ],
    planningTips: [
      "If applying for an e-Visa, submit at least two weeks before departure to allow for processing and any unforeseen delays.",
      "Keep a printed copy of your hotel booking confirmation — immigration may request it alongside your visa.",
      "Obtain comprehensive travel insurance before departure; Egyptian hospitals require upfront payment from uninsured foreign nationals.",
    ],
    importantNotes: [
      "Your passport must be valid for at least 6 months beyond your planned entry date.",
      "Have USD 25 in cash for visa on arrival — card payment is not consistently available at airport bank counters.",
      "Travellers with prior Israel entry stamps should check current guidance — this occasionally attracts additional scrutiny at immigration.",
    ],
    faqs: [
      {
        q: "Can I get an Egypt visa on arrival?",
        a: "Yes. Citizens of most European, North American, Australian and many other nationalities qualify for visa on arrival at Cairo, Hurghada and Sharm el-Sheikh airports. The fee is USD 25 per person, paid in cash at the bank counter before immigration.",
      },
      {
        q: "How long does the Egypt e-Visa take?",
        a: "Standard e-Visa applications are processed within 3–7 business days through the official government portal.",
      },
      {
        q: "Can I extend my Egyptian tourist visa?",
        a: "Yes. A 30-day tourist visa can be extended at the Mogamma building in Cairo or at regional passport offices, allowing stays of up to six months in total.",
      },
      {
        q: "What documents do I need at Egyptian immigration?",
        a: "Your passport (valid for at least 6 months beyond entry), your visa sticker or printed e-Visa, and your hotel booking confirmation. A return or onward ticket may be requested.",
      },
    ],
    hero: {
      alt: "The Cairo Tower rising above the Nile and the city skyline",
      label: "Egypt entry",
      src: "/images/cairo/cairo-tower-nile-skyline.webp",
      width: 736,
      height: 981,
    },
    seo: {
      title: "Egypt Visa Guide — On Arrival, e-Visa & Requirements | Kemet",
      description:
        "How to get an Egypt tourist visa. Visa on arrival at airports, e-Visa online application, eligible nationalities, costs and what to expect at immigration.",
    },
    relationships: {
      relatedGuides: guide("egypt-travel-guide"),
    },
  },

  // -------------------------------------------------------------------------
  // 3. Best Time to Visit Egypt
  // -------------------------------------------------------------------------
  {
    id: "best-time-to-visit-egypt",
    slug: "best-time-to-visit-egypt",
    domain: "guide",
    title: "Best Time to Visit Egypt",
    locales: ["en"],
    guideType: "seasonal",
    category: "weather-seasons",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "Egypt's best travel season is October to April, when Nile Valley temperatures are mild and monuments are comfortable to explore. Here is what to expect season by season and destination by destination.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-01",
    keyFacts: [
      { label: "Peak season", value: "October – April" },
      { label: "Shoulder season", value: "Apr–May and Sep–Oct" },
      { label: "Off-season", value: "June – August (extreme heat in the south)" },
      { label: "Luxor summer high", value: "38–42 °C (100–108 °F)" },
      { label: "Cairo winter range", value: "10–22 °C (50–72 °F)" },
      { label: "Rainfall", value: "Minimal across the country; Alexandria receives most" },
    ],
    keyTakeaways: [
      "October to April is the best window for the Nile Valley — monuments are comfortable and weather is reliable",
      "Alexandria and the north coast suit summer visits when Mediterranean breezes keep temperatures tolerable",
      "April and October offer the best balance of lower prices, smaller crowds and good conditions",
      "Ramadan affects opening hours and atmosphere — a unique cultural experience worth planning around",
    ],
    sections: [
      {
        heading: "Egypt's climate in brief",
        paragraphs: [
          "Egypt divides climatically into three zones: the northern Mediterranean coast, the Nile Valley and Delta, and the desert interior. The Nile Valley — home to Luxor, Aswan and the monuments most visitors travel to see — is genuinely extreme in its range: summer temperatures can reach 44 °C in Aswan, while winter days in Luxor are warm (22–26 °C) and Cairo nights can drop to 10 °C. Rain is rare in the south; the north receives some winter rain, and Alexandria has a recognisably Mediterranean pattern.",
        ],
      },
      {
        heading: "October to April: the main season",
        paragraphs: [
          "This is when Egypt works best for most travellers. Nile Valley temperatures range from a comfortable 18 °C in January to 30 °C by April. Early mornings are fresh — perfect for Karnak, the Valley of the Kings and the Giza plateau before the midday sun intensifies. Hotels are busier and prices higher in December and January, but quality operators can still access monuments without peak-hour crowds.",
          "The Red Sea coast (Hurghada and Sharm el-Sheikh) stays warm enough for diving from October through May, making it a natural companion to a Nile Valley itinerary throughout the main season.",
        ],
      },
      {
        heading: "June to August: off-season",
        paragraphs: [
          "Luxor and Aswan in summer are genuinely hot: daytime temperatures of 38–42 °C are normal, rising higher in extreme years. Open-air monuments become difficult after 8 a.m., and moving between sites is exhausting. Tomb interiors are slightly cooler, but the general experience of the south in summer is demanding rather than enjoyable.",
          "Summer does have one advantage: far fewer tourists. Monument crowds thin noticeably and operators offer significant discounts. If you have a high heat tolerance and an itinerary built around 4 a.m. starts, it is manageable — but it is not the experience most visitors want.",
          "Cairo in summer is hot and humid but, as a fully air-conditioned city, more tolerable than the open-air sites. Alexandria is the genuine summer destination: Mediterranean breezes, 28–30 °C temperatures and a beach culture that makes it Egypt's own seaside resort.",
        ],
      },
      {
        heading: "Shoulder months: April–May and September–October",
        paragraphs: [
          "April and October are the best months for travellers seeking a balance of good weather, smaller crowds and more competitive pricing. May begins to tip warm in the south. September remains very hot but cools measurably toward the end of the month as the season starts to turn. Both shoulder windows reward the flexible traveller.",
        ],
      },
      {
        heading: "Destination-specific timing",
        items: [
          "Cairo and Giza: all year round. Summer is hot but the Giza plateau can be visited at dawn, and the museums are fully air-conditioned.",
          "Luxor: October to March is ideal for outdoor monuments; April is still pleasant; avoid June–August for open-air sites.",
          "Aswan: October to February is the most comfortable; March and April remain very enjoyable.",
          "Alexandria: April to October; the city's character is Mediterranean and summer is its main season.",
          "Red Sea (Hurghada, Sharm el-Sheikh): October to May for diving and snorkelling; summer sea temperatures are very warm.",
          "Abu Simbel: visit October–February to align with comfortable Aswan weather; or plan around the Sun Festival dates.",
        ],
      },
      {
        heading: "Ramadan",
        paragraphs: [
          "Ramadan falls at a different time each year (moving earlier by about 11 days annually). During the month, many Egyptians fast from dawn to sunset, and the evening iftar meal transforms public spaces. Tourist-area restaurants generally remain open during the day; some local cafés partially close.",
          "The atmosphere after sunset during Ramadan is festive and hospitality intensifies. It is a genuinely interesting time to be in Egypt — but check dates for your travel year at the planning stage.",
        ],
      },
      {
        heading: "Key festival and event dates",
        items: [
          "Abu Simbel Sun Festival: 22 February and 22 October — at these two dates, sunrise illuminates the inner sanctuary of Ramesses II's temple. Worth planning an Aswan visit around.",
          "Luxor African Arts Festival: March — music, visual arts and cultural exchange.",
          "Coptic Christmas: 7 January (Coptic calendar) — celebrated with public church services.",
          "Sham el-Nessim (Egyptian spring festival): Monday after Coptic Easter — families picnic at parks and on Nile banks.",
        ],
      },
    ],
    planningTips: [
      "Book December and January trips well in advance — it is the busiest and most expensive period.",
      "Pack a light layer for Cairo and Luxor evenings from November to February — it gets genuinely chilly after dark.",
      "Check the Ramadan calendar for your travel year early in the planning process — it affects meal timing but enriches the cultural experience.",
    ],
    faqs: [
      {
        q: "What is the best month to visit Egypt?",
        a: "October and November are generally ideal — the summer heat has passed, visitor numbers are picking up but not yet at peak, and conditions are reliably good across the whole country. March is a close second for the same reasons.",
      },
      {
        q: "Is Egypt too hot to visit in summer?",
        a: "Luxor and Aswan in June–August regularly reach 40–42 °C. It is possible with very early starts and air-conditioned hotels, but it is not the best experience. Cairo and Alexandria are more manageable. For most first-time visitors, summer in the Nile Valley is best avoided.",
      },
      {
        q: "When is Egypt least crowded?",
        a: "June–August sees the fewest international visitors due to the heat. April–May and September–October are quieter than peak winter with weather still broadly suitable.",
      },
      {
        q: "How different is the weather in Cairo, Luxor and Aswan?",
        a: "Significantly different. Cairo is cooler and slightly more humid. Luxor and Aswan, further south and deeper into the desert, are hotter and drier. In January, Cairo nights can approach 10 °C; Aswan daytime highs are around 23 °C with clear blue skies.",
      },
    ],
    hero: {
      alt: "Hot-air balloons drifting over the West Bank of Luxor at dawn",
      label: "Dawn over Luxor",
      src: "/images/luxor/luxor-hot-air-balloons-dawn.webp",
      width: 736,
      height: 981,
    },
    seo: {
      title: "Best Time to Visit Egypt — Season-by-Season Guide | Kemet",
      description:
        "When to go to Egypt. October to April is the peak season for the Nile Valley. Season-by-season breakdown covering Cairo, Luxor, Aswan, Alexandria and the Red Sea.",
    },
    relationships: {
      destinations: dest("cairo", "giza", "luxor", "aswan", "alexandria"),
      relatedGuides: guide("egypt-travel-guide"),
    },
  },

  // -------------------------------------------------------------------------
  // 4. Transportation in Egypt
  // -------------------------------------------------------------------------
  {
    id: "transportation-in-egypt",
    slug: "transportation-in-egypt",
    domain: "guide",
    title: "Getting Around Egypt",
    locales: ["en"],
    guideType: "practical",
    category: "transportation",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "How to travel between Egypt's cities and sites — domestic flights, high-speed trains, Nile cruises, the Cairo Metro, taxis and private transfers explained.",
    difficulty: "moderate",
    readingTimeMinutes: 7,
    lastUpdated: "2026-01",
    keyFacts: [
      { label: "Cairo → Luxor (flight)", value: "~55 minutes" },
      { label: "Cairo → Luxor (Talgo train)", value: "~4.5 hours" },
      { label: "Luxor → Aswan (cruise)", value: "3–4 nights" },
      { label: "Aswan → Abu Simbel (road)", value: "3.5 hours each way" },
      { label: "Cairo Metro lines", value: "3 lines, 61 stations" },
      { label: "Nile cruise departs", value: "Luxor (southbound) or Aswan (northbound)" },
    ],
    keyTakeaways: [
      "EgyptAir connects Cairo to Luxor and Aswan in under an hour — the fastest option when time is short",
      "The Talgo high-speed train is comfortable, reliable and a genuinely scenic experience",
      "A Nile cruise between Luxor and Aswan is one of Egypt's most distinctive journeys",
      "Uber operates in Cairo and is far more predictable than street taxis for tourist journeys",
      "Private transfers between cities offer full flexibility and are standard on guided tours",
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Egypt's main tourist corridor runs between Cairo and Aswan — roughly 1,000 kilometres of Nile. Three primary routes connect the cities: air, rail and the river itself. Within cities, the options are Cairo's Metro, Uber, licensed taxis and, for longer intercity legs, private transfers arranged by your tour operator.",
        ],
      },
      {
        heading: "Domestic flights",
        paragraphs: [
          "EgyptAir is the main domestic carrier, with flights from Cairo to Luxor (55 min), Aswan (1 hr 15 min), Hurghada (55 min) and Sharm el-Sheikh (1 hr). Budget carriers Nile Air and Air Arabia Egypt also serve key routes. Fares vary considerably — booking in advance saves money, and prices spike sharply over Christmas and New Year.",
          "Cairo International has three terminals. Domestic flights typically depart from Terminal 1 or Terminal 2 depending on the carrier. Allow 90 minutes before departure.",
        ],
      },
      {
        heading: "High-speed trains",
        paragraphs: [
          "Egypt's Spanish-built Talgo trains on the Cairo–Luxor–Aswan corridor are one of the country's great travel options. Air-conditioned, comfortable and reliable, they reduce the Cairo-to-Luxor journey to around four and a half hours and Cairo-to-Aswan to around six. First-class service includes meal options and is very reasonably priced by international standards.",
          "The overnight sleeper between Cairo and Luxor or Aswan is a legitimate itinerary piece: board in the evening, wake up in Upper Egypt. The Watania Wattrains wagons-lits service caters primarily to foreign visitors and includes dinner and breakfast. Book well in advance during peak months.",
        ],
        note: "Train booking is available online via Egyptian National Railways, but the booking interface is inconsistent. Your tour operator or a specialist booking service can confirm reservations more reliably.",
        noteType: "tip",
      },
      {
        heading: "Nile cruise",
        paragraphs: [
          "Cruising the Nile between Luxor and Aswan covers approximately 200 kilometres and passes through some of the most dramatic temple landscapes in Egypt: Esna, Edfu, Kom Ombo and Aswan. Cruises typically run three nights (Aswan to Luxor) or four nights (Luxor to Aswan), with guided temple visits at each stop.",
          "Vessels range from large motor cruisers (often used for group packages) to private dahabiyas — traditional wooden sailing boats carrying six to twelve passengers at a slower, more contemplative pace. Dahabiyas can stop anywhere along the bank, access less-visited sites and offer an entirely different atmosphere from motor cruisers. They represent the most authentic form of Nile travel.",
        ],
      },
      {
        heading: "Cairo Metro",
        paragraphs: [
          "Cairo's Metro is clean, inexpensive and efficient for navigating the city on north–south axes. Three lines cover 61 stations, connecting Heliopolis, downtown, Tahrir Square, Giza and suburbs to the south. A single journey costs around EGP 10–15 depending on distance. Women-only carriages operate at the front and back of each train.",
          "The Metro does not reach the Pyramids directly. The nearest station (Giza on Line 2) leaves a 5-kilometre gap to the plateau — a taxi or Uber completes the journey in 10–15 minutes.",
        ],
      },
      {
        heading: "Taxis and Uber",
        paragraphs: [
          "Uber operates throughout greater Cairo and is the most predictable transport option for tourists: prices are fixed before the journey, language barriers are removed and the route is tracked. The app accepts international cards and local payment methods.",
          "Cairo's white licensed taxis should have a meter, but metered fares are rarely used in practice — negotiate a price before getting in, or use Uber. Airport taxis are fixed-price (displayed on a board at arrivals) and somewhat more expensive than city taxis, but they save negotiation on arrival.",
        ],
      },
      {
        heading: "Private transfers",
        paragraphs: [
          "For intercity journeys that are not convenient by train or air — the two-hour drive from Luxor to Qena, or the road south from Aswan to Abu Simbel — a private vehicle with a driver is the standard arrangement on guided tours. This gives full flexibility on timing, stops and route, and is typically included in private tour packages.",
        ],
      },
      {
        heading: "Getting to Abu Simbel",
        paragraphs: [
          "Abu Simbel, Ramesses II's colossal rock-cut temple 280 kilometres south of Aswan, is reached by a 45-minute flight with EgyptAir (limited schedule) or a 3.5-hour road journey by private vehicle through the desert. Most visitors make it an early-start day trip from Aswan, departing before 4 a.m. to arrive at opening and avoid the midday heat.",
        ],
      },
    ],
    planningTips: [
      "Book the overnight sleeper train at least 2–3 weeks in advance, particularly for December–January.",
      "If your itinerary includes a Nile cruise, confirm whether the vessel is a motor cruiser or a dahabhiya — the experience differs considerably.",
      "For Abu Simbel by road from Aswan, depart by 4 a.m. to arrive at opening and leave before midday heat.",
    ],
    importantNotes: [
      "The Giza Pyramids are not directly served by Cairo Metro — a taxi or Uber from Giza station takes 10–15 minutes.",
      "Dahabiyas require more advance booking than motor cruisers; availability is limited, particularly in peak season.",
    ],
    faqs: [
      {
        q: "Is it easy to travel between Cairo, Luxor and Aswan?",
        a: "Yes. Flights take under an hour; the high-speed Talgo train is around four and a half hours to Luxor and six hours to Aswan. The overnight sleeper is comfortable and saves a hotel night. A Nile cruise is the most atmospheric option if time allows.",
      },
      {
        q: "Is Uber available in Egypt?",
        a: "Yes. Uber is well established in Cairo and is the most convenient option for most tourist journeys within the city. It operates with the international app and accepts international payment cards.",
      },
      {
        q: "What is a dahabhiya?",
        a: "A dahabhiya is a traditional wooden Egyptian sailing vessel used for Nile travel. Unlike the larger motor cruisers, they carry small groups of passengers (typically 6–12), travel at a slower pace and can stop wherever the traveller wishes. They represent the most authentic and intimate form of Nile cruising.",
      },
    ],
    hero: {
      alt: "Brightly decorated Nubian boats moored on the Nile at Aswan",
      label: "Nile travel",
      src: "/images/aswan/aswan-nubian-decorated-boats.webp",
      width: 736,
      height: 1077,
    },
    seo: {
      title: "Getting Around Egypt — Trains, Flights & Cruises | Kemet",
      description:
        "How to travel between Egypt's cities. Domestic flights, high-speed trains, Nile cruises, the Cairo Metro and private transfers explained for the main tourist route.",
    },
    relationships: {
      destinations: dest("cairo", "giza", "luxor", "aswan"),
      relatedGuides: guide("egypt-travel-guide", "best-time-to-visit-egypt"),
    },
  },

  // -------------------------------------------------------------------------
  // 5. Egyptian Food Guide
  // -------------------------------------------------------------------------
  {
    id: "egyptian-food-guide",
    slug: "egyptian-food-guide",
    domain: "guide",
    title: "Egyptian Food Guide",
    locales: ["en"],
    guideType: "food",
    category: "food-drink",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "A practical guide to Egyptian cuisine — the dishes to seek out, how Egyptians eat, where to find the best food, and what to expect for dietary requirements.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-01",
    keyFacts: [
      { label: "Cuisine character", value: "Levantine–North African; generous, communal, legume-rich" },
      { label: "Staple", value: "Aish (bread) — flat or leavened, baked daily" },
      { label: "National street food", value: "Koshary" },
      { label: "Halal", value: "All mainstream Egyptian restaurant food is halal" },
      { label: "Alcohol", value: "Available at licensed hotels and restaurants only" },
      { label: "Tipping", value: "10–15% at sit-down restaurants is expected" },
    ],
    keyTakeaways: [
      "Egyptian cuisine is built around legumes, bread, slow-cooked meats and mezze — deeply flavoured but not spicy",
      "Koshary is the national street food: pasta, rice, lentils, fried onions and a sharp tomato sauce",
      "Egyptian breakfast is often the best meal of the day — ful, eggs, white cheese and fresh bread",
      "The mezze tradition makes Egypt broadly welcoming for vegetarians",
      "Nile perch and river fish are served excellently along the corniche in Aswan and Alexandria",
    ],
    sections: [
      {
        heading: "The character of Egyptian food",
        paragraphs: [
          "Egyptian cuisine has been shaped over millennia at the crossroads of Africa, the Mediterranean and the Arab world. It is food built for nourishment and hospitality — generous portions, warm bread, slow-cooked legumes, charcoal-grilled meats and the ever-present mezze of dips, pickles and salads. It is not spicy in the way of Indian or Thai food, but it is deeply flavoured: cumin, coriander, garlic, lemon and slow-rendered fats give Egyptian cooking its character.",
          "The country's size creates regional variation. Alexandrian seafood owes as much to the Mediterranean as to the Nile; Nubian cooking in Aswan uses fish preparations and spices that differ from Cairo's; the Delta's agricultural richness shows in its dairy and vegetables.",
        ],
      },
      {
        heading: "Essential dishes",
        items: [
          "Ful Medames — slow-cooked fava beans with garlic, lemon, cumin and olive oil. The national breakfast, eaten with warm bread.",
          "Koshary — pasta, rice, brown lentils, crispy fried onion and a sharp tomato-vinegar sauce. Egypt's definitive street food.",
          "Molokhia — a thick soup of jute leaves cooked with garlic and coriander, served over rice with chicken or rabbit.",
          "Hamam Mahshi — pigeon stuffed with freekeh or rice, roasted whole. A Cairo classic rarely found elsewhere.",
          "Ta'amiya (Egyptian falafel) — made with fava beans rather than chickpeas; greener and softer than the Lebanese style.",
          "Fiteer Meshaltet — a flaky layered pastry, sweet or savoury, cooked in wood-fired ovens.",
          "Grilled kofta and kebab — charcoal-cooked minced meat (kofta) or cubed lamb (kebab), served with bread and salad.",
          "Om Ali — Egypt's bread pudding with cream, puff pastry and nuts; the classic dessert.",
        ],
      },
      {
        heading: "Breakfast culture",
        paragraphs: [
          "Egyptians take breakfast seriously. A full Egyptian spread includes ful medames, scrambled eggs, white cheese (gibna beida), fresh tomato and cucumber, olives, pickles and warm aish (bread). At hotels this becomes the morning buffet; in local cafés it is ordered by the piece and eaten communally at pavement tables from 6 a.m.",
          "Ful and ta'amiya sandwiches — both served in hollow aish baladi (round flatbread) with tomato, salad and chilli — are the main street breakfast, available from carts across every city and eaten standing or walking.",
        ],
      },
      {
        heading: "Street food",
        paragraphs: [
          "Egyptian street food is among the safest and most accessible of any Arab country. High-turnover carts and small shops are the best guarantee of freshness. Look for:",
        ],
        items: [
          "Koshary shops — identifiable by the visible layered ingredients; ordered, assembled and eaten fast.",
          "Ful and ta'amiya carts — often the same vendor running both from a single gas burner and a large pot.",
          "Hawawshi — a spiced minced-meat sandwich baked in a bread pocket, common in Cairo and Delta cities.",
          "Sugarcane juice (asab) — freshly pressed on the street; particularly popular in Luxor and Aswan.",
          "Grilled sweet potatoes — cart-grilled or wood-oven roasted, available in winter months across the south.",
        ],
      },
      {
        heading: "Dining out",
        paragraphs: [
          "Egypt has restaurants ranging from family-run neighbourhood places to high-end hotel dining. In tourist centres, English menus are standard. A full meal with mezze, a main and soft drinks costs USD 10–20 per person at quality local establishments; hotel restaurants charge 2–3 times more for similar food.",
          "Tipping of 10–15% is expected at sit-down restaurants. Some places add a service charge to the bill — check before tipping additionally. Small ful and ta'amiya stalls generally don't expect tips.",
        ],
      },
      {
        heading: "Vegetarian and dietary considerations",
        paragraphs: [
          "Egypt is broadly welcoming for vegetarians. The mezze tradition, ful, ta'amiya, koshary and the vegetable-heavy local cuisine mean plant-based eating is straightforward. Most restaurants will remove meat from dishes on request. Vegans need to be more specific — dairy and eggs appear throughout Egyptian cooking — but communicating clearly with staff at quality establishments generally works.",
          "All mainstream food in Egypt is halal, so pork is not served. Alcohol is available at licensed hotels and some restaurants but not at street level. The national soft drink culture — karkade (hibiscus iced tea), sahlab (warm orchid-root milk) and fresh juices — is excellent and worth exploring.",
        ],
      },
      {
        heading: "Where to eat well",
        items: [
          "Cairo: Koshary El-Tahrir (street food near Tahrir Square), Abou El Sid (Egyptian classics in a beautiful setting), Nile-side restaurants at Maadi for a quieter experience.",
          "Luxor: Sofra restaurant (traditional Egyptian, away from the tourist strip); local fish restaurants on the West Bank.",
          "Aswan: Nubian restaurants on the Aswan corniche and on Elephantine Island — fresh Nile fish grilled over charcoal.",
          "Alexandria: seafood restaurants along the corniche, where fish is ordered by weight and grilled or fried to order.",
        ],
      },
    ],
    planningTips: [
      "Try the hotel breakfast buffet once, then seek out a local ful café the next morning — the contrast is enlightening.",
      "Ask your guide for a restaurant recommendation in each city — Egyptologist guides often know excellent local places well off the tourist path.",
      "Koshary is best at a dedicated koshary shop, not at a tourist restaurant; the quality difference is significant.",
    ],
    importantNotes: [
      "Tap water in Egypt is treated but pipe infrastructure in older areas can introduce contaminants — use bottled water for drinking and teeth brushing.",
      "Street food is generally safe due to high turnover, but choose busy stalls and avoid anything sitting out in the heat.",
    ],
    faqs: [
      {
        q: "Is Egyptian food safe to eat?",
        a: "Yes — Egypt's tourist restaurant infrastructure is well established and food safety standards at hotel and tourist-facing establishments are generally good. Exercise standard caution with street food (high turnover is the best indicator of freshness) and use bottled water throughout.",
      },
      {
        q: "Is Egypt vegetarian-friendly?",
        a: "Yes. The Egyptian culinary tradition has a strong plant-based element — ful, ta'amiya, koshary, molokhia, mezze. Vegetarians will eat very well without needing constant special requests.",
      },
      {
        q: "What is the national dish of Egypt?",
        a: "Koshary is Egypt's most famous street dish — pasta, rice, brown lentils, fried onions and a tomato-vinegar sauce. But ful medames (stewed fava beans) is perhaps the more genuinely national food, eaten for breakfast across every social class.",
      },
      {
        q: "Can I drink tap water in Egypt?",
        a: "Tap water is treated and technically potable, but the pipe infrastructure in older areas can introduce contamination. Bottled water is inexpensive and universally available — use it for drinking and brushing teeth.",
      },
    ],
    hero: {
      alt: "Egyptian mezze spread with ful, ta'amiya and flatbread",
      label: "Egyptian cuisine",
    },
    seo: {
      title: "Egyptian Food Guide — What to Eat, Where & Cuisine Tips | Kemet",
      description:
        "A guide to Egyptian cuisine: essential dishes, street food, breakfast culture, vegetarian options and where to eat in Cairo, Luxor and Alexandria.",
    },
    relationships: {
      destinations: dest("cairo", "luxor", "aswan", "alexandria"),
      relatedGuides: guide("egypt-travel-guide"),
    },
  },
  // -------------------------------------------------------------------------
  // 6. The Ideal 10-Day Egypt Itinerary
  // -------------------------------------------------------------------------
  {
    id: "10-day-egypt-itinerary",
    slug: "10-day-egypt-itinerary",
    domain: "guide",
    title: "The Ideal 10-Day Egypt Itinerary",
    locales: ["en"],
    guideType: "planning",
    category: "planning-your-trip",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "A field-tested 10-day Egypt route — Cairo and Giza, a flight south, Luxor's two banks, a three-night Nile cruise to Aswan and Abu Simbel — with the pacing mistakes to avoid.",
    difficulty: "easy",
    readingTimeMinutes: 9,
    lastUpdated: "2026-07",
    keyTakeaways: [
      "Ten days is the sweet spot for a first visit: the full Cairo–Luxor–Nile–Aswan arc without a single rushed day",
      "Fly south, don't drive: Cairo to Luxor is one hour by air versus ten by road",
      "Cruise downstream logic matters — board in Aswan or Luxor depending on the day's sailing schedule, and let the cruise set the trip's spine",
      "Abu Simbel is worth the early start from Aswan — three hours each way for one of the greatest sights on earth",
      "Leave day ten genuinely free in Cairo: the Grand Egyptian Museum deserves an unhurried half day",
    ],
    keyFacts: [
      { label: "Total nights", value: "9 (3 Cairo · 2 Luxor · 3 cruise · 1 Cairo)" },
      { label: "Internal flights", value: "2 (Cairo–Luxor, Aswan–Cairo)" },
      { label: "Best months", value: "October – April" },
      { label: "Pace", value: "Full but never rushed — one anchor sight per day" },
    ],
    sections: [
      {
        heading: "Why ten days is the right length",
        paragraphs: [
          "A week forces a choice between depth and coverage; two weeks is a luxury not everyone has. Ten days is where the classic Egypt route stops fighting the calendar: Cairo and Giza get three nights instead of two, Luxor's West Bank gets the full morning it needs, the Nile cruise runs its natural three-night course, and Abu Simbel fits without wrecking the following day.",
          "The route below is the shape we build most first-visit journeys around. Every element can be swapped — a dahabiya for the cruise, the Red Sea instead of the second Cairo stay — but the pacing logic holds.",
        ],
      },
      {
        heading: "Days 1–3 · Cairo & Giza",
        items: [
          "Day 1 — Arrive, settle in. Nothing scheduled beyond dinner: jet lag is real and day 2 starts early.",
          "Day 2 — The Giza plateau at opening (the light and the calm are worth the alarm), the Great Sphinx, then Saqqara's Step Pyramid and Dahshur in the afternoon: the whole invention of the pyramid in one day.",
          "Day 3 — The Grand Egyptian Museum in the morning while you are fresh, then Islamic Cairo in the late afternoon: Al-Muizz Street, Khan el-Khalili as the lanterns come on.",
        ],
        note: "Resist the urge to add Alexandria here — it is a superb city but it costs a full day, and on a 10-day frame that day belongs to the south.",
        noteType: "tip",
      },
      {
        heading: "Days 4–5 · Luxor",
        items: [
          "Day 4 — Morning flight to Luxor (about an hour). Karnak in the afternoon, when the tour-bus wave has passed; Luxor Temple lit up after dark.",
          "Day 5 — The West Bank early: Valley of the Kings at opening, Hatshepsut's temple, the Colossi of Memnon — done by early afternoon, before the heat.",
        ],
        note: "The hot-air balloon flies at dawn on the West Bank — if it is on your list, day 5 is its slot. Book ahead and keep day 4's evening early.",
        noteType: "info",
      },
      {
        heading: "Days 6–8 · The Nile cruise to Aswan",
        paragraphs: [
          "Board in Luxor for the classic three-night southbound sailing: Esna lock, Edfu's Temple of Horus (the best-preserved in Egypt), Kom Ombo at sunset, arriving Aswan on the final morning. The cruise is deliberately the slowest part of the trip — river, temples, deck. That is the point.",
        ],
        items: [
          "Day 6 — Board by midday, sail through the Esna lock in the afternoon",
          "Day 7 — Edfu by horse-drawn calèche in the morning; Kom Ombo's double temple at golden hour",
          "Day 8 — Arrive Aswan: Philae on its island, the High Dam, a felucca around Elephantine at sunset",
        ],
      },
      {
        heading: "Day 9 · Abu Simbel, then fly north",
        paragraphs: [
          "The early start (roughly 4–5 am from Aswan, three hours each way by road) puts you at Ramesses II's rock-cut temples while the light is still low on the colossi. Back in Aswan by mid-afternoon for the evening flight to Cairo. It is a long day and worth every minute of it — but it is why day 10 must stay light.",
        ],
      },
      {
        heading: "Day 10 · Cairo, unhurried",
        paragraphs: [
          "Whatever you loved most, more of it: a second museum visit, Coptic Cairo's churches, a final koshari, shopping done properly. Departures are usually in the evening or overnight, so the day is fuller than it sounds — but it should never be scheduled to the hour.",
        ],
      },
      {
        heading: "How to adapt this route",
        items: [
          "Honeymoon — swap the cruise for a small dahabiya under sail and add a Red Sea coda (12 days total)",
          "Families — same shape, later starts, and a pool-anchored hotel in Luxor; children handle the cruise brilliantly",
          "Second visit — replace days 1–3 with Alexandria and the Fayoum, keep the south as is",
          "Slower, by rail — a private sleeper cabin replaces the Cairo–Luxor flight: dinner on board, the Nile valley at first light through the window",
        ],
      },
    ],
    planningTips: [
      "Book the cruise first — its fixed sailing days set the whole itinerary's rhythm",
      "October to April for the classic route; summer works but shifts everything to dawn starts",
      "This exact shape is our 10-day signature journey — we tailor it around your dates rather than selling fixed departures",
    ],
    faqs: [
      {
        q: "Is 10 days enough for Egypt?",
        a: "For a first visit, it is the sweet spot. Ten days covers Cairo and Giza, Luxor, a full three-night Nile cruise and Abu Simbel at a pace that never feels rushed — which a 7-day version cannot honestly claim. You will leave with the whole classical arc seen properly, and a reason to come back for Alexandria, Siwa or the Red Sea.",
      },
      {
        q: "Should I do the Nile cruise from Luxor or Aswan?",
        a: "Both directions sail the same stretch and visit the same temples. Southbound from Luxor fits this itinerary's flow (Cairo → Luxor → cruise → Aswan → fly home via Cairo); northbound from Aswan works equally well reversed. In practice the deciding factor is the sailing schedule of the specific vessel — cruises depart on fixed weekdays, and the itinerary is built around that.",
      },
      {
        q: "Is Abu Simbel worth the long day trip from Aswan?",
        a: "Yes — emphatically. The 4 am start and six hours of road time deter many visitors, and then they stand in front of the four 20-metre colossi of Ramesses II and stop mentioning the drive. If the early start is genuinely unappealing, there are short flights from Aswan, or an overnight at Abu Simbel itself, which also gives you the temples at dawn without the crowd.",
      },
      {
        q: "How much walking does this itinerary involve?",
        a: "Moderate and manageable. The big days — Giza with Saqqara, the West Bank, Abu Simbel — each involve two to three hours on your feet over uneven ground, usually in the morning. Because the trip is private, the pace is yours: more rest stops, shorter site visits or a car repositioned closer are all trivially arranged.",
      },
    ],
    seo: {
      title: "10-Day Egypt Itinerary — Cairo, Luxor & Nile Cruise | Kemet",
      description:
        "A field-tested 10-day Egypt itinerary: Cairo & Giza, Luxor's two banks, a 3-night Nile cruise to Aswan and Abu Simbel — with pacing tips and adaptations.",
    },
    relationships: {
      tours: tour("tour-10-day", "tour-grand-14day", "tour-7-day", "tour-nile-cruise"),
      destinations: dest("cairo", "giza", "luxor", "aswan"),
      relatedGuides: guide("egypt-travel-guide", "best-time-to-visit-egypt", "transportation-in-egypt"),
    },
  },

  // -------------------------------------------------------------------------
  // 7. What to Pack for Egypt
  // -------------------------------------------------------------------------
  {
    id: "egypt-packing-list",
    slug: "egypt-packing-list",
    domain: "guide",
    title: "What to Pack for Egypt",
    locales: ["en"],
    guideType: "practical",
    category: "packing",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "The Egypt packing list that actually matches the trip: what the desert, the monuments, the mosques and the Nile each demand — by season, with the five things everyone forgets.",
    difficulty: "easy",
    readingTimeMinutes: 7,
    lastUpdated: "2026-07",
    keyTakeaways: [
      "Layers beat outfits: a 20-degree swing between dawn and mid-afternoon is normal for most of the year",
      "Shoulders-and-knees coverage gets you into every mosque and church without improvising",
      "Real walking shoes, already broken in — monument floors are sand, gravel and 3,000-year-old stone",
      "Winter evenings are genuinely cold on the Nile: pack one warm layer even in December",
      "Sunscreen, a proper hat and a refillable bottle are non-negotiable twelve months a year",
    ],
    keyFacts: [
      { label: "Luggage style", value: "One case + one day-pack per person" },
      { label: "Dress code", value: "Modest at religious sites; relaxed at hotels & resorts" },
      { label: "Laundry", value: "Fast and inexpensive at hotels and cruise vessels" },
      { label: "Adapters", value: "Type C/F (European two-pin), 220V" },
    ],
    sections: [
      {
        heading: "The principle: pack for four climates at once",
        paragraphs: [
          "A classic Egypt itinerary crosses a desert plateau at dawn, an air-conditioned museum at noon, a mosque in the afternoon and a breezy cruise deck after dark — in one day. The packing answer is not more clothes; it is layers of light, breathable ones. Natural fabrics (cotton, linen) outperform synthetics everywhere except the Red Sea.",
        ],
      },
      {
        heading: "Clothing — the core list",
        items: [
          "4–5 light, loose tops with sleeves (sun protection doubles as mosque-readiness)",
          "2–3 pairs of light trousers or long skirts — knees covered gets you in everywhere",
          "One warm layer: a fleece or light jacket (November–March evenings drop to 8–11 °C)",
          "A scarf or shawl — instant shoulder or head cover, dust shield, sun block, cruise-deck warmth: the single hardest-working item in the bag",
          "Broken-in walking shoes with real soles, plus sandals for hotels and decks",
          "Swimwear — hotel pools everywhere, plus the Red Sea if it is on the route",
          "One smarter outfit for a cruise dinner or a Cairo rooftop evening",
        ],
        note: "There is no legal dress code for visitors, and hotels and resorts are fully relaxed. Modesty at religious sites and in older neighbourhoods is a courtesy that is always noticed and always repaid.",
        noteType: "info",
      },
      {
        heading: "Sun, sand and health",
        items: [
          "High-SPF sunscreen — and a reef-safe one if the Red Sea is on the itinerary",
          "A hat with a real brim; the site shade at Giza and Karnak rounds to zero",
          "Sunglasses (the desert glare is fierce), lip balm with SPF, and a small moisturiser — the dry air is relentless",
          "A refillable water bottle — your guide keeps bottled water in the vehicle, and hotels increasingly have refill stations",
          "A small personal kit: rehydration salts, your usual stomach remedy, plasters, any prescription in its original packaging",
          "Hand sanitiser and pocket tissues — public bathrooms at monument sites vary",
        ],
        note: "Tap water is not for drinking anywhere in Egypt. Bottled water is universal and inexpensive; brushing teeth with tap water in city hotels is generally fine.",
        noteType: "warning",
      },
      {
        heading: "Electronics & documents",
        items: [
          "Type C/F adapter (Egypt runs European two-pin at 220V) — one per person plus a spare",
          "Power bank — long site days, phone as camera",
          "Passport valid 6+ months, a printed copy kept separately, and your e-Visa confirmation or USD 25 in cash for the visa on arrival",
          "A modest amount of small-denomination cash for tips — see the money guide for how tipping actually works",
        ],
      },
      {
        heading: "By season",
        items: [
          "October–April (the classic season): everything above, with the warm layer promoted from optional to essential — cruise decks and desert dawns are cold",
          "May–September: swap a top for an extra one, add electrolytes, and treat the hat and sunscreen as safety equipment rather than accessories",
          "Ramadan (moves each year): nothing extra to pack, but slightly more conservative daywear is a graceful courtesy",
          "Red Sea add-on: rash guard or swim shirt (the sun on the water is stronger than it feels), reef-safe sunscreen only",
        ],
      },
      {
        heading: "The five things everyone forgets",
        items: [
          "The scarf (see above — it earns its place daily)",
          "A head torch: pre-dawn starts for Abu Simbel, the balloon, or the Sun Festival are genuinely dark",
          "A dry bag or zip pouch for sand-proofing phones and cameras on desert days",
          "Slip-on-able shoes — mosques mean shoes off and on several times in an afternoon",
          "An empty duffel folded flat in the case: the bazaar happens to almost everyone",
        ],
      },
    ],
    planningTips: [
      "Laundry on the cruise or at the hotel is cheap and next-day — pack for six days, not ten",
      "Leave room (or that folded duffel): Khan el-Khalili, Aswan's spice market and the Tunis pottery village are hard to walk out of empty-handed",
      "On a private journey the vehicle is your locker — heavy camera kit and the warm layer can live there between stops",
    ],
    faqs: [
      {
        q: "Is there a dress code for tourists in Egypt?",
        a: "No formal one. Hotels, resorts and cruise vessels are fully relaxed, and Cairo's modern districts dress like any big city. At mosques, churches and in the older quarters, covered shoulders and knees for everyone — and a head scarf for women inside mosques — is the expected courtesy. A light scarf in the day-pack covers every situation, literally.",
      },
      {
        q: "What shoes should I bring to Egypt?",
        a: "One pair of genuinely comfortable, already-broken-in walking shoes with proper soles — monument sites are sand, gravel and ancient stone, and you will cover several kilometres on the big days. Add sandals or slip-ons for hotels, decks and mosque visits, where shoes come off and on repeatedly. Heels have a hard time everywhere except a cruise dining room.",
      },
      {
        q: "Do I need warm clothes for Egypt in winter?",
        a: "Yes — more than most visitors expect. Daytimes are a glorious 18–26 °C, but desert and river temperatures fall fast after sunset: 8–11 °C evenings are normal from December to February, and a Nile cruise deck or a pre-dawn Abu Simbel start feels properly cold. One fleece or light jacket solves the entire season.",
      },
      {
        q: "Can I buy things I forget in Egypt?",
        a: "Almost everything, easily. Pharmacies are excellent, ubiquitous and inexpensive; sunscreen, adapters, hats and clothing are all readily available in Cairo, Luxor and the resort towns. The two things genuinely worth bringing from home are specific prescription medication and broken-in walking shoes.",
      },
    ],
    seo: {
      title: "What to Pack for Egypt — Season-by-Season Packing List | Kemet",
      description:
        "The Egypt packing list that matches the real trip: layers for desert dawns, mosque-ready cover, the right shoes, and the five things everyone forgets.",
    },
    relationships: {
      tours: tour("tour-10-day", "tour-7-day", "tour-nile-cruise"),
      destinations: dest("cairo", "giza", "luxor", "aswan"),
      relatedGuides: guide("egypt-travel-guide", "best-time-to-visit-egypt", "egypt-visa-guide", "10-day-egypt-itinerary"),
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
