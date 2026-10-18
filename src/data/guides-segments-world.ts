// ---------------------------------------------------------------------------
// Segment guides, October 2026 — travellers from Singapore, Hong Kong, Taiwan
// and mainland China; from South Africa, Nigeria, Kenya and Ghana; and
// expatriates resident in the Gulf. English-language, additive: they reach
// travellers the existing market pages never addressed. Facts that move (visa
// fees, routes, entry rules) are stated as what to check, or dated. No prices.
// ---------------------------------------------------------------------------
import type { Guide } from "@/types";
import { findMonth } from "@/data/months";
const temp = (month: string, place: "cairo" | "luxor" | "aswan" | "redSea") => findMonth(month)!.temps[place];
const dest = (...ids: string[]) => ids.map((id) => ({ domain: "destination" as const, id }));
const tour = (...ids: string[]) => ids.map((id) => ({ domain: "tour" as const, id }));
const guide = (...ids: string[]) => ids.map((id) => ({ domain: "guide" as const, id }));
const exp = (...ids: string[]) => ids.map((id) => ({ domain: "experience" as const, id }));

export const segmentGuidesWorld: Guide[] = [
  // -------------------------------------------------------------------------
  // Singapore, Hong Kong, Taiwan & mainland China
  // -------------------------------------------------------------------------
  {
    id: "egypt-from-singapore-hong-kong-china",
    slug: "egypt-from-singapore-hong-kong-china",
    domain: "guide",
    title: "Egypt from Singapore, Hong Kong & China",
    locales: ["en"],
    guideType: "practical",
    category: "planning-your-trip",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "Planning Egypt from Singapore, Hong Kong, Taiwan or mainland China: the flights, the visa for each passport, the time difference, the best months and Mandarin-speaking Egyptologists.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-10",
    noReviewer: true,
    keyFacts: [
      { label: "Nonstop to Cairo", value: "From Beijing, Shanghai, Guangzhou, Hangzhou and Chengdu" },
      { label: "From Singapore & Hong Kong", value: "One stop" },
      { label: "Visa, China & Singapore", value: "E-visa, or visa on arrival" },
      { label: "Time difference", value: "Cairo is 6 hours behind in winter, 5 in summer" },
      { label: "Guiding in Mandarin", value: "Licensed Mandarin-speaking Egyptologists" },
      { label: "Best months", value: "October to April" },
      { label: "Pay by", value: "PayPal, card or bank transfer" },
    ],
    keyTakeaways: [
      "Nonstop flights reach Cairo from Beijing, Shanghai, Guangzhou, Hangzhou and Chengdu; from Singapore and Hong Kong it is one stop",
      "Mainland Chinese and Singaporean passports can use the e-visa or a visa on arrival, Taiwanese passports the e-visa; Hong Kong SAR passports have their own rule",
      "Kemet has licensed Egyptologists who guide in Mandarin Chinese",
      "Cairo is six hours behind Beijing, Hong Kong and Singapore in winter, five in summer",
      "Chinese New Year falls in Egypt's best weather — and its busy season, so book early",
    ],
    sections: [
      {
        heading: "Getting there",
        paragraphs: [
          "Five mainland Chinese cities have nonstop flights to Cairo: Beijing, with EgyptAir and Air China (about 11–12 hours); Shanghai, with EgyptAir and China Eastern (about 12–13 hours); Guangzhou and Hangzhou, with EgyptAir (about 10½ and 11½ hours); and Chengdu, with Sichuan Airlines (about 10½ hours). Frequencies change by season, so check the current schedule when you book.",
          "There is no nonstop flight from Singapore or Hong Kong. From Singapore it is one stop, through Dubai, Doha, Abu Dhabi or Istanbul; from Hong Kong, one stop through a Gulf hub or mainland China; from Taipei, connect through mainland China or a Gulf hub. EgyptAir has announced a Cairo–Singapore–Sydney route for 2027, subject to approval. We meet you on arrival at Cairo airport and take you to your hotel.",
        ],
      },
      {
        heading: "The visa, passport by passport",
        items: [
          "Mainland China: apply for the e-visa online before you fly, or get a visa on arrival at the airport.",
          "Singapore: the e-visa, or a visa on arrival.",
          "Taiwan: apply for the e-visa online before you fly.",
          "Hong Kong SAR: not on the e-visa list. Hong Kong SAR passport holders are listed by Hong Kong's Immigration Department as able to enter without a visa or with a visa on arrival — confirm before you fly.",
          "Philippines and Thailand: a visa from an Egyptian embassy or consulate, arranged before you travel. Neither the e-visa nor a visa on arrival is available to these passports.",
        ],
        paragraphs: [
          "Apply for the e-visa only on the official portal, visa2egypt.gov.eg. The fees changed during 2026, so check the current amount there. Cairo airport began a digital visa on arrival, paid by card, as a pilot on 1 August 2026; other airports still issue the paper visa sticker, paid in cash.",
          "In a family travelling on different passports, each person follows the rule for their own. Every passport should be valid for at least six months beyond your stay.",
        ],
        note: "Pay for an e-visa only on visa2egypt.gov.eg. Other sites that look official add their own fee.",
        noteType: "warning",
      },
      {
        heading: "Guiding in Mandarin",
        paragraphs: [
          "Kemet has licensed Egyptologists who guide in Mandarin Chinese. Every guide at Egypt's sites needs a licence from the Ministry of Tourism and Antiquities, and on a private journey your Egyptologist guides your party alone: no shared group, and time for every question.",
          "For Chinese-speaking families anywhere — in Singapore, Malaysia, Australia, North America or Europe — it means grandparents can hear the story of the pyramids in their own language. Tell us the language your party prefers when you enquire; our Egyptologists also guide in English, Malay, Indonesian and the other languages of this site.",
        ],
      },
      {
        heading: "Time difference and the first day",
        paragraphs: [
          "Beijing, Shanghai, Hong Kong, Taipei and Singapore keep the same time. Cairo is six hours behind them in winter and five in summer, when Egypt moves its clocks forward — from the last Friday of April to the last Thursday of October. After a long flight, and often a connection, we keep the first day light: the hotel, the Nile at sunset, and the pyramids the next morning.",
        ],
      },
      {
        heading: "When to come: Chinese New Year and Golden Week",
        paragraphs: [
          `October to April is the season. Chinese New Year, in late January or February, falls in the heart of it: ${temp("february", "luxor")} by day in Luxor and ${temp("february", "cairo")} in Cairo, with cool evenings. It is also Egypt's high season, when the best Nile cabins and hotel rooms go first — book three to four months ahead.`,
          `The National Day Golden Week, at the start of October, opens the season. It is still warm — ${temp("october", "luxor")} in Luxor and ${temp("october", "cairo")} in Cairo — so temple days start at dawn, and the Red Sea is warm enough to swim. The December holidays fall in Egypt's best weather too; in July and August, the Red Sea and Alexandria suit better than Upper Egypt.`,
        ],
        noteLink: { label: "The best time to visit Egypt, month by month", href: "guides/best-time-to-visit-egypt.html" },
      },
      {
        heading: "Food and dietary preferences",
        paragraphs: [
          "Egyptian food is made for sharing — grilled meats and fish, rice, fresh bread, slow-cooked beans and vegetable stews — and your guide can order for the table and explain each dish. Tell us how your party eats — mild food, vegetarian, no beef, smaller portions for children or grandparents — and we plan the meals around it and brief the hotels and Nile boats before you arrive.",
        ],
        noteLink: { label: "Egyptian food, dish by dish", href: "guides/egyptian-food-guide.html" },
      },
      {
        heading: "How many days",
        paragraphs: [
          "After a long flight, eight to ten days lets Egypt unfold: Cairo and Giza with the Grand Egyptian Museum, a short flight to Luxor, the Nile to Aswan, and Abu Simbel with a day more. A week covers Cairo and Luxor at a comfortable pace.",
        ],
        noteLink: { label: "A 10-day Egypt itinerary", href: "guides/10-day-egypt-itinerary.html" },
      },
      {
        heading: "How a private journey works",
        paragraphs: [
          "Everything is private: your own licensed Egyptologist, your own vehicle and driver, and hotels chosen for the room rather than the star rating. Our prices are set in euros, and you can pay by PayPal, card or bank transfer. Tell us your dates, how many of you are travelling and the language you would like to be guided in; we reply within one working day with a real itinerary and a clear price, with no obligation.",
        ],
      },
    ],
    planningTips: [
      "For Chinese New Year, book three to four months ahead — it is Egypt's high season.",
      "Check the rule for each passport in your party: e-visa, visa on arrival or an embassy visa.",
      "Tell us your guiding language and food preferences when you enquire.",
    ],
    importantNotes: [
      "Philippine and Thai passport holders need an Egyptian visa from an embassy or consulate before travelling.",
      "Hong Kong SAR passport holders: confirm the entry rules before you fly.",
      "Every passport should be valid for at least six months beyond your stay in Egypt.",
    ],
    faqs: [
      { q: "Are there direct flights from China to Egypt?", a: "Yes. EgyptAir and Air China fly nonstop to Cairo from Beijing, EgyptAir and China Eastern from Shanghai, EgyptAir from Guangzhou and Hangzhou, and Sichuan Airlines from Chengdu — about 10½ to 13 hours. Frequencies change by season." },
      { q: "Is there a direct flight from Singapore or Hong Kong to Cairo?", a: "No. From Singapore it is one stop, through Dubai, Doha, Abu Dhabi or Istanbul; from Hong Kong, one stop through a Gulf hub or mainland China. EgyptAir has announced a Cairo–Singapore–Sydney route for 2027, subject to approval." },
      { q: "Do Chinese and Singaporean citizens need a visa for Egypt?", a: "Yes, but it is simple: mainland Chinese and Singaporean passport holders can apply for the tourist e-visa on the official portal visa2egypt.gov.eg, or get a visa on arrival. Check the current fee on the official portal — it changed during 2026." },
      { q: "Can we have a Mandarin-speaking guide in Egypt?", a: "Yes. Kemet has licensed Egyptologists who guide in Mandarin Chinese. Tell us the language your party prefers when you enquire, and your journey is planned with a Mandarin-speaking Egyptologist." },
      { q: "What is the time difference between China and Egypt?", a: "Cairo is six hours behind Beijing, Shanghai, Hong Kong, Taipei and Singapore in winter, and five hours behind in summer, from the last Friday of April to the last Thursday of October." },
    ],
    hero: {
      alt: "The Great Sphinx of Giza in profile, with a pyramid behind it under a clear blue sky",
      label: "Egypt from Singapore, Hong Kong & China",
      src: "/images/stock/giza-sphinx-with-pyramid.webp",
      width: 1024,
      height: 683,
    },
    seo: {
      title: "Egypt from Singapore, Hong Kong & China: Visa | Kemet",
      description:
        "Egypt from Singapore, Hong Kong, Taiwan or China: nonstop and one-stop flights, the visa for each passport, the time difference and Mandarin-speaking guides.",
    },
    relationships: {
      tours: tour("tour-10-day", "tour-family-8day", "tour-abu-simbel"),
      destinations: dest("cairo", "giza", "luxor", "aswan"),
      experiences: exp("grand-egyptian-museum-private", "private-felucca-nile"),
      relatedGuides: guide("best-time-to-visit-egypt", "egyptian-food-guide", "10-day-egypt-itinerary"),
    },
  },

  // -------------------------------------------------------------------------
  // South Africa, Nigeria, Kenya & Ghana
  // -------------------------------------------------------------------------
  {
    id: "egypt-from-africa",
    slug: "egypt-from-africa",
    domain: "guide",
    title: "Egypt from South Africa, Nigeria, Kenya & Ghana",
    locales: ["en"],
    guideType: "practical",
    category: "planning-your-trip",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "Planning Egypt from South Africa, Nigeria, Kenya or Ghana: EgyptAir's nonstop flights, the visa for each passport, the time difference, the holidays that work and family journeys.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-10",
    noReviewer: true,
    keyFacts: [
      { label: "Nonstop to Cairo", value: "EgyptAir from Johannesburg, Lagos, Abuja, Nairobi and Accra" },
      { label: "Flight time", value: "About 4½–5½ hours; about 8½ from Johannesburg" },
      { label: "Visa, South Africa", value: "E-visa, online before you fly" },
      { label: "Visa, Nigeria, Kenya, Ghana", value: "From an Egyptian embassy or consulate, in advance" },
      { label: "Time difference", value: "Up to 3 hours, by country and season" },
      { label: "Best months", value: "October to April" },
    ],
    keyTakeaways: [
      "EgyptAir flies nonstop to Cairo from Johannesburg in about 8½ hours, and from Lagos, Abuja, Nairobi and Accra in about 4½ to 5½",
      "South African passport holders can apply for Egypt's tourist e-visa online",
      "Nigerian, Kenyan and Ghanaian passport holders need a visa from an Egyptian embassy or consulate before travelling — apply early",
      "Christmas, New Year and Easter all fall in Egypt's comfortable season; Christmas and New Year are its busiest fortnight",
      "A private journey is built around the whole family, from grandparents to young children",
    ],
    sections: [
      {
        heading: "Getting there",
        paragraphs: [
          "EgyptAir flies nonstop to Cairo from five African cities: Johannesburg, in about 8½ hours; Lagos, in about 5 to 5½; Abuja and Nairobi, in about 4½ to 5; and Accra, in about 5½. Frequencies change by season, so check the current schedule when you book. We meet you on arrival at Cairo airport and take you to your hotel.",
        ],
      },
      {
        heading: "The visa: read this first",
        items: [
          "South Africa: the tourist e-visa, applied for online before you fly.",
          "Nigeria, Kenya and Ghana: a visa from the Egyptian embassy or consulate, before you travel. The e-visa and the visa on arrival are not available to these passports.",
        ],
        paragraphs: [
          "South Africans apply for the e-visa on the official portal, visa2egypt.gov.eg. The fees changed during 2026, so check the current amount there, and pay only on the official portal.",
          "With a Nigerian, Kenyan or Ghanaian passport, check the current documents and processing time with the Egyptian embassy itself, and apply as soon as your dates are fixed — earlier still for Christmas and Easter. Once your journey is confirmed, we send the itinerary and hotel confirmations the application asks for. The decision is the embassy's alone, so until the visa is issued, choose flight fares you can change.",
          "Anyone in your party travelling on a different passport follows that passport's rule. Every passport should be valid for at least six months beyond your stay.",
        ],
        note: "Nigerian, Kenyan and Ghanaian passports: there is no e-visa and no visa on arrival. Do not set off for the airport without your visa.",
        noteType: "warning",
      },
      {
        heading: "Time difference",
        items: [
          "South Africa: the same time as Cairo in winter; Egypt is one hour ahead in summer.",
          "Nigeria: Egypt is one hour ahead in winter, two in summer.",
          "Ghana: Egypt is two hours ahead in winter, three in summer.",
          "Kenya: Kenya is one hour ahead of Egypt in winter; the same time in summer.",
        ],
        paragraphs: [
          "Egypt's summer time runs from the last Friday of April to the last Thursday of October. With a gap this small, there is no jet lag to speak of.",
        ],
      },
      {
        heading: "When to come: Christmas, Easter and the December holidays",
        paragraphs: [
          `October to April is the season, with warm, dry days and cool evenings: ${temp("december", "luxor")} by day in Luxor in December and ${temp("december", "cairo")} in Cairo. The Christmas and New Year fortnight is the busiest of Egypt's year, when the best Nile cabins and hotel rooms go first; with an embassy visa to arrange as well, start planning four to six months ahead.`,
          "Egypt has a Christmas of its own: the Coptic Orthodox Church marks the Nativity on 7 January, with a midnight liturgy at the Hanging Church in Old Cairo. Easter, in March or April, is warmer but comfortable, with early starts at the temples. In the mid-year holidays, Egypt's hottest months, the Red Sea and Alexandria suit better than Luxor and Aswan.",
        ],
        noteLink: { label: "Christmas & New Year in Egypt", href: "collections/christmas-new-year-egypt.html" },
      },
      {
        heading: "Families and several generations together",
        paragraphs: [
          "A private journey is built around the people in it. With grandparents and children together, the sites take the cool of the morning and the afternoons can divide — a second vehicle lets the grandparents rest while the children swim. Interconnecting rooms, a ground floor or a lift are arranged at booking, and on a Nile cruise the hotel moves and you do not. Tell us the ages in your party and anything about mobility, and we plan each day around it.",
        ],
        noteLink: { label: "Three generations, one journey", href: "occasions/three-generations-egypt.html" },
      },
      {
        heading: "Faith and food",
        paragraphs: [
          "Cairo's religious heritage is part of many journeys: in Old Cairo, the Hanging Church and the church of Abu Serga, traditionally held to mark where the Holy Family sheltered in Egypt; across the city, the mosques of Islamic Cairo and the Citadel. One full day takes in both. If you would like to attend a service or Friday prayers during your stay, tell us and we plan the day around it.",
          "Halal food is the norm in Egypt's restaurants and hotels. Tell us any dietary rules in your party, and we brief the hotels and boats before you arrive.",
        ],
      },
      {
        heading: "How a private journey works",
        paragraphs: [
          "Everything is private: your own licensed Egyptologist, your own vehicle and driver, and hotels chosen for the room rather than the star rating. Egypt's currency is the Egyptian pound; our prices are set in euros, and you can pay us by PayPal, card or bank transfer. Tell us your dates and how many of you are travelling; we reply within one working day with a real itinerary and a clear price, with no obligation.",
        ],
      },
    ],
    planningTips: [
      "Nigerian, Kenyan and Ghanaian passports: start the embassy visa application as soon as your dates are fixed.",
      "Until the visa is issued, choose flight fares you can change.",
      "For Christmas and New Year, plan four to six months ahead.",
    ],
    importantNotes: [
      "Nigerian, Kenyan and Ghanaian passport holders are not eligible for the e-visa or a visa on arrival.",
      "Pay for an e-visa only on visa2egypt.gov.eg; look-alike sites add their own fee.",
      "Every passport should be valid for at least six months beyond your stay in Egypt.",
    ],
    faqs: [
      { q: "Do South Africans need a visa for Egypt?", a: "Yes, and the simplest route is the tourist e-visa: apply online before you fly, on the official portal visa2egypt.gov.eg. Check the current fee there — it changed during 2026." },
      { q: "Do Nigerians need a visa for Egypt?", a: "Yes, from the Egyptian embassy or consulate, before you travel; Nigerian passport holders cannot use the e-visa or get a visa on arrival. Apply as soon as your dates are fixed. Once your journey is confirmed, we send the itinerary and hotel details the application asks for." },
      { q: "Do Kenyans and Ghanaians need a visa for Egypt?", a: "Yes. Kenyan and Ghanaian passport holders need a visa from the Egyptian embassy or consulate before travelling; neither the e-visa nor a visa on arrival is available to them. Check the current requirements with the embassy and apply early." },
      { q: "Are there direct flights to Egypt from South Africa, Nigeria, Kenya and Ghana?", a: "Yes. EgyptAir flies nonstop to Cairo from Johannesburg (about 8½ hours), Lagos (about 5 to 5½), Abuja and Nairobi (about 4½ to 5) and Accra (about 5½). Frequencies change by season." },
      { q: "Can you plan a trip for grandparents and young children together?", a: "Yes. The sites take the cool mornings, the afternoons can divide with a second vehicle, and interconnecting or ground-floor rooms are arranged at booking. A Nile cruise suits several generations well." },
    ],
    hero: {
      alt: "The two rock-cut temples of Abu Simbel: the Great Temple of Ramesses II in the distance and the Temple of Nefertari in front, with visitors on the forecourt",
      label: "Egypt from South Africa, Nigeria, Kenya & Ghana",
      src: "/images/stock/abu-simbel-both-temples.webp",
      width: 1024,
      height: 768,
    },
    seo: {
      title: "Egypt from South Africa, Nigeria, Kenya & Ghana | Kemet",
      description:
        "Egypt from South Africa, Nigeria, Kenya or Ghana: EgyptAir nonstop flights, the visa for each passport, time differences, the holidays that work, family trips.",
    },
    relationships: {
      tours: tour("tour-family-8day", "tour-10-day", "tour-religious-citadel"),
      destinations: dest("cairo", "giza", "luxor", "aswan"),
      experiences: exp("old-cairo-walking", "vip-airport-service"),
      relatedGuides: guide("best-time-to-visit-egypt", "egyptian-food-guide", "10-day-egypt-itinerary"),
    },
  },

  // -------------------------------------------------------------------------
  // Expatriates resident in the Gulf (GCC), searching in English. The Arabic
  // pages (ar/…) address Gulf citizens; this one is for residents.
  // -------------------------------------------------------------------------
  {
    id: "egypt-for-gulf-residents",
    slug: "egypt-for-gulf-residents",
    domain: "guide",
    title: "Egypt from Dubai, Abu Dhabi, Doha & Riyadh — for Gulf residents",
    locales: ["en"],
    guideType: "practical",
    category: "planning-your-trip",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "For expatriates living in the Gulf: the short flights to Cairo, the visa on arrival many residence-permit holders can use, what fits in three, four or five days, and the seasons.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-10",
    noReviewer: true,
    keyFacts: [
      { label: "Flight to Cairo", value: "About 2–4 hours" },
      { label: "Pyramids weekend", value: "flydubai lands at Sphinx airport, near Giza" },
      { label: "Visa", value: "Many residents can get a visa on arrival — confirm with your airline" },
      { label: "Time difference", value: "The Gulf is up to 2 hours ahead of Cairo" },
      { label: "Long weekend", value: "Cairo and Giza in 3 days" },
      { label: "Best inland", value: "October to April" },
      { label: "Summer", value: "The Red Sea and Alexandria" },
    ],
    keyTakeaways: [
      "Cairo is two to four hours' flying from Dubai, Abu Dhabi, Doha, Riyadh, Jeddah and Kuwait, with several airlines on each route",
      "flydubai flies to Sphinx International Airport, west of Cairo near Giza — useful for a pyramids weekend",
      "Many GCC residents can get a visa on arrival on their residence permit; conditions depend on nationality and permit, so confirm with your airline",
      "Three days covers Cairo and Giza; four or five add Luxor by air, or the Red Sea",
      "October to April suits the pyramids and temples; in summer, choose the Red Sea or Alexandria",
    ],
    sections: [
      {
        heading: "A short flight",
        paragraphs: [
          "From Dubai, Emirates and EgyptAir fly to Cairo International in about 3½ to 4 hours, and Air Arabia flies from Sharjah. From Abu Dhabi, Etihad, EgyptAir and Air Arabia take about the same; from Doha, Qatar Airways and EgyptAir about 3 to 3½ hours. From Riyadh — Saudia, EgyptAir, flynas, flyadeal, Riyadh Air and others — it is about 2½ hours, from Jeddah about 2, and from Kuwait, with Kuwait Airways, Jazeera and EgyptAir, about 2¾ to 3. Schedules change by season.",
          "flydubai flies from Dubai to Sphinx International Airport (SPX), west of Cairo near Giza — not to Cairo International. For a weekend built around the pyramids, that saves the drive across the city. We meet you on arrival at either airport.",
          "The clock barely moves: the UAE and Oman are two hours ahead of Cairo in winter and one in summer; Saudi Arabia, Qatar, Kuwait and Bahrain are one hour ahead in winter and level in summer.",
        ],
        noteLink: { label: "VIP meet and assist at the airport", href: "experiences/vip-airport-service.html" },
      },
      {
        heading: "The visa for Gulf residents",
        paragraphs: [
          "Many expatriates who hold a GCC residence permit — from the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain or Oman — can get a visa on arrival in Egypt. Conditions depend on your nationality and your residence permit: the permit generally needs to be valid for at least six months from arrival, a confirmed return ticket is expected, and some nationalities and job categories are excluded. Confirm with your airline before you fly.",
          "If your own passport is eligible for Egypt's tourist e-visa, use that: apply on the official portal, visa2egypt.gov.eg, and the visa is settled before you board. The fees changed during 2026, so check the current amount there. Cairo airport began a digital visa on arrival, paid by card, as a pilot on 1 August 2026; other airports still issue the paper visa sticker, paid in cash.",
          "The residents' rule is for residence-permit holders: parents visiting you on a visit visa follow the rule for their own passport, and an Umrah visa is not a residence permit. Every passport should be valid for at least six months beyond your stay.",
        ],
        note: "Pay for an e-visa only on visa2egypt.gov.eg. Other sites that look official add their own fee.",
        noteType: "warning",
        noteLink: { label: "Umrah and Egypt in one journey", href: "guides/umrah-and-egypt.html" },
      },
      {
        heading: "Long weekends and holiday breaks",
        paragraphs: [
          "Most Gulf residents come for a long weekend or a public-holiday break. The Eid holidays are the obvious windows — and Egypt celebrates them too: Red Sea resorts, domestic flights and trains fill with Egyptian families, while the great monuments often have some of their quietest mornings of the year. For Eid, book flights and Red Sea hotels early. Tell us the dates you have, however short, and we build the days around your flights.",
        ],
        noteLink: { label: "Eid al-Adha in Egypt", href: "collections/eid-al-adha-egypt.html" },
      },
      {
        heading: "What fits in three, four and five days",
        items: [
          "Three days — Cairo and Giza: the pyramids and the Sphinx in the early light, the Grand Egyptian Museum, Saqqara's Step Pyramid, and an evening in Islamic Cairo and Khan el-Khalili. Arrive early on the first day and leave late on the third.",
          "Four days — Cairo and Luxor: two days in Cairo and Giza, then a flight of about an hour to Luxor for Karnak, the Valley of the Kings and Hatshepsut's temple, flying home through Cairo. Or Cairo and Alexandria, on the Mediterranean.",
          "Five days — Cairo and the Red Sea: two days in Cairo and Giza, then an hour's flight to Sharm el-Sheikh or Hurghada for three days of reef and rest. Or Cairo, Luxor and Aswan, with domestic flights between them.",
        ],
        paragraphs: [
          "If your route lands you in Sharm el-Sheikh directly from abroad, a free \"Sinai only\" entry stamp covers stays under 15 days limited to Sharm, Dahab, Nuweiba and Taba — it does not cover Cairo or Luxor.",
        ],
        noteLink: { label: "Cairo VIP Short Stay: three days", href: "tour-cairo-vip-3day.html" },
      },
      {
        heading: "The seasons",
        paragraphs: [
          `October to April is the season for the pyramids and temples: ${temp("january", "luxor")} by day in Luxor in January and ${temp("january", "cairo")} in Cairo, with cool evenings. It is also Egypt's busiest time, so book December and the winter holidays early.`,
          `From May to September Upper Egypt is very hot — ${temp("july", "luxor")} by day in Luxor in July — and the temples become a dawn affair. Summer suits the Red Sea, for the water, and Alexandria, for the Mediterranean. Cairo and Giza still work on a summer weekend, with the plateau at dawn and the afternoon inside the air-conditioned Grand Egyptian Museum.`,
        ],
        noteLink: { label: "Egypt in summer", href: "collections/egypt-in-summer.html" },
      },
      {
        heading: "A guide in your language",
        paragraphs: [
          "Gulf households are international, and so are our guides. Your licensed Egyptologist can guide in English, Arabic, French, German, Italian, Spanish, Portuguese, Russian, Indonesian or Malay — or in Mandarin Chinese — which makes Egypt an easy few days to add when family visit you in the Gulf.",
        ],
      },
      {
        heading: "How a private journey works",
        paragraphs: [
          "Everything is private: your own licensed Egyptologist, your own vehicle and driver, and hotels chosen for the room rather than the star rating. Our prices are set in euros, and you can pay by PayPal, card or bank transfer. Tell us your dates — even if it is the next long weekend — and how many of you are travelling; we reply within one working day with a real itinerary and a clear price, with no obligation.",
        ],
      },
    ],
    planningTips: [
      "Confirm with your airline that your residence permit qualifies for a visa on arrival, and that it is valid for six months from arrival.",
      "For a pyramids weekend from Dubai, flydubai's flights land at Sphinx airport, near Giza.",
      "Book Eid breaks early: Egypt is on holiday too.",
    ],
    importantNotes: [
      "The residents' visa on arrival depends on your nationality and residence permit, and some are excluded. If your passport is eligible for the e-visa, use the e-visa.",
      "An Umrah visa is not a GCC residence permit.",
      "Every passport should be valid for at least six months beyond your stay in Egypt.",
    ],
    faqs: [
      { q: "Can Gulf residents get a visa on arrival in Egypt?", a: "Many can, on a GCC residence permit valid for at least six months from arrival and with a confirmed return ticket. Conditions depend on nationality and residence permit, and some are excluded, so confirm with your airline before you fly. If your own passport is eligible for the e-visa, use that." },
      { q: "How long is the flight from Dubai to Cairo?", a: "About 3½ to 4 hours. Emirates and EgyptAir fly to Cairo International; flydubai flies to Sphinx International Airport, west of Cairo near Giza." },
      { q: "What can we see in Egypt in three days?", a: "Cairo and Giza: the pyramids and the Sphinx, the Grand Egyptian Museum, Saqqara and an evening in Islamic Cairo. Arrive early on the first day and leave late on the third." },
      { q: "Can we see Luxor on a short trip from the Gulf?", a: "Yes, by air. Fly to Cairo and on to Luxor, about an hour; four days covers two in Cairo and Giza and two in Luxor." },
      { q: "Is Egypt too hot in summer?", a: `Upper Egypt is very hot from May to September — ${temp("july", "luxor")} by day in Luxor in July. Choose the Red Sea or Alexandria, or Cairo with early starts and afternoons in the air-conditioned Grand Egyptian Museum.` },
    ],
    hero: {
      alt: "A camel rider crossing the sand in front of a pyramid and its smaller satellite pyramids at Giza",
      label: "Egypt for Gulf residents",
      src: "/images/stock/giza-camel-rider-pyramids.webp",
      width: 1024,
      height: 680,
    },
    seo: {
      title: "Egypt for Gulf Residents: Dubai, Doha, Riyadh | Kemet",
      description:
        "For Gulf expatriates: short flights from Dubai, Abu Dhabi, Doha and Riyadh, the residents' visa on arrival, what fits in 3–5 days, and the best seasons to go.",
    },
    relationships: {
      tours: tour("tour-cairo-vip-3day", "tour-giza-museum", "tour-luxor-3day", "tour-sharm-5day"),
      destinations: dest("cairo", "giza", "luxor", "sharm-el-sheikh", "hurghada", "alexandria"),
      experiences: exp("vip-airport-service", "sunrise-giza-pyramids", "red-sea-yacht-day"),
      relatedGuides: guide("umrah-and-egypt", "best-time-to-visit-egypt", "transportation-in-egypt"),
    },
  },
];
