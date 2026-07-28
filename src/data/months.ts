// ---------------------------------------------------------------------------
// Egypt month by month — /when-to-go/<month>.html
//
// WHY
// "Egypt in January", "best time to visit Luxor", "is it too hot in Egypt in
// August" are among the highest-volume queries in the category, asked in every
// market on earth, and the site had no page for any of them. Timing is also the
// single variable that changes an Egyptian journey most — it decides the price,
// the crowds, and whether Upper Egypt is pleasant or punishing at noon.
//
// Temperatures are typical daytime highs for the region named, rounded, and
// described as ranges rather than precise averages — they are a planning aid,
// not a forecast. Crowd and price levels are relative to Egypt's own year.
//
// The occasions field links each month to the dated events already maintained
// in src/data/seasonalCalendar.ts, so the two never drift apart.
// ---------------------------------------------------------------------------

export type CrowdLevel = "Quiet" | "Moderate" | "Busy" | "Peak";

export interface MonthGuide {
  /** URL segment and canonical name. */
  slug: string;
  name: string;
  /** 1–12, for ordering and prev/next. */
  index: number;
  /** One line for cards and the hub. */
  shortSummary: string;
  /** Meta description, under 165 characters. */
  metaDescription: string;
  /** Typical daytime highs, °C. */
  temps: { cairo: string; luxor: string; aswan: string; redSea: string };
  /** Sea temperature on the Red Sea, °C. */
  seaTemp: string;
  crowds: CrowdLevel;
  /** Relative price level within Egypt's own year. */
  prices: "Lowest" | "Low" | "Mid" | "High" | "Highest";
  /** The opening argument for this month. */
  lede: string;
  /** What this month is genuinely good for. */
  goodFor: string[];
  /** What to be realistic about. */
  watchFor: string[];
  /** Occasions and festivals that can fall in this month. */
  occasions: string;
  /** The honest recommendation. */
  verdict: string;
  faqs: Array<{ q: string; a: string }>;
}

export const months: MonthGuide[] = [
  {
    slug: "january", name: "January", index: 1,
    shortSummary: "The coolest month, the clearest light, and the last of the peak crowds.",
    metaDescription: "Egypt in January — temperatures, crowds, prices, what to pack and whether it is the right month for Cairo, Luxor and the Nile.",
    temps: { cairo: "19–21°C", luxor: "22–24°C", aswan: "23–25°C", redSea: "22–23°C" },
    seaTemp: "21–22°C", crowds: "Peak", prices: "Highest",
    lede: "January is the coldest month in Egypt and, for walking around ruins, very close to the best. Days in Luxor sit in the low twenties with hard, clear light that photographers wait all year for. It is also the tail of the Christmas and New Year peak, so you are paying the highest prices of the year for it — and for the first ten days, sharing the Valley of the Kings with everyone else who had the same idea.",
    goodFor: ["Cairo and Upper Egypt on foot — the only months you can walk a site at midday in comfort", "Photography: the low winter sun and clean air give the sharpest light of the year", "Coptic Christmas on 7 January, a genuine and quietly moving occasion in Old Cairo"],
    watchFor: ["Evenings are properly cold — Aswan and the desert drop to single figures after dark, and Nile cabins are not always well heated", "The first week is still New Year pricing; from about the 12th it eases noticeably", "The Red Sea is diveable but the water is at its coldest — bring a thicker wetsuit or accept a shorter dive"],
    occasions: "Coptic Christmas falls on 7 January. In some years Ramadan begins in mid-to-late January — check the seasonal calendar for the year you are travelling.",
    verdict: "If your dates are fixed, January is an excellent month and you will not regret it. If they are not, the second half of the month gives you the same weather as the first at meaningfully lower prices.",
    faqs: [
      { q: "Is January a good time to visit Egypt?", a: "Yes — it is one of the two or three best months for the monuments. Daytime highs in Luxor sit around 22–24°C with clear, dry air, which makes walking the Valley of the Kings or the Giza plateau genuinely comfortable. The trade-off is price and crowds, both at their annual peak in the first ten days." },
      { q: "How cold does Egypt get in January?", a: "Colder than most visitors expect after dark. Daytime is pleasant — high teens in Cairo, low twenties in Upper Egypt — but Aswan and the desert can fall to 6–9°C overnight, and Nile boat cabins are not always well heated. Pack a proper jacket for evenings even though you will not use it at noon." },
      { q: "Can you swim in the Red Sea in January?", a: "Yes, though it is the coldest water of the year at around 21–22°C. Diving continues year-round and visibility in winter is excellent; you will simply want a 5mm wetsuit rather than a shorty. For swimming rather than diving, most people find it bracing." },
    ],
  },
  {
    slug: "february", name: "February", index: 2,
    shortSummary: "Warm days, thinner crowds, and the sun festival at Abu Simbel.",
    metaDescription: "Egypt in February — warm dry days, fewer visitors than January, the Abu Simbel Sun Festival on the 22nd, and what to pack.",
    temps: { cairo: "20–23°C", luxor: "24–26°C", aswan: "25–27°C", redSea: "23–24°C" },
    seaTemp: "21–22°C", crowds: "Busy", prices: "High",
    lede: "February is January with the New Year crowd gone and two degrees added. It is, for a first visit built around the monuments, arguably the single best month of the Egyptian year — warm enough to be outdoors all day, cool enough that a full morning at Karnak is a pleasure rather than an endurance test, and busy without being oppressive.",
    goodFor: ["A first, complete Egypt itinerary — Cairo, Luxor, a Nile cruise and Aswan all work perfectly", "The Abu Simbel Sun Festival on 22 February, when sunrise reaches the inner sanctuary", "Ballooning over Luxor: settled winter air means fewer weather cancellations"],
    watchFor: ["The khamaseen wind season can begin late in the month — occasional dusty days, rarely more than a nuisance", "Half-term breaks in Europe push prices up for a fortnight around mid-month", "Nights are still cool, particularly on the water"],
    occasions: "The Abu Simbel Sun Festival on 22 February. In several years Ramadan falls partly or wholly within February — check the calendar for your year.",
    verdict: "The month we would pick if someone gave us a free choice. Book earlier than you think for the week around the sun festival.",
    faqs: [
      { q: "Is February a good month for Egypt?", a: "It is arguably the best. Daytime temperatures of 24–26°C in Luxor are ideal for walking sites, the air is dry and clear, and the January peak has passed. The Abu Simbel Sun Festival on 22 February is a genuine spectacle worth planning around." },
      { q: "What is the Abu Simbel Sun Festival?", a: "Twice a year — on 22 February and 22 October — sunrise penetrates sixty metres into the temple of Ramesses II and illuminates the statues in the inner sanctuary. It is an alignment built deliberately into the temple three thousand years ago and preserved when the whole structure was moved in the 1960s. It draws large crowds and needs booking well ahead." },
      { q: "What should I pack for Egypt in February?", a: "Light layers for the day, a proper jacket for evenings, closed walking shoes for uneven tomb floors, a hat and high-factor sunscreen — the winter sun is weaker but the exposure at open sites is constant. Add a scarf for mosque visits and for the occasional dusty day." },
    ],
  },
  {
    slug: "march", name: "March", index: 3,
    shortSummary: "The last comfortable month before the heat, and the best value in it.",
    metaDescription: "Egypt in March — warm but not hot, fewer visitors, lower prices, and the last easy month for Upper Egypt before summer.",
    temps: { cairo: "23–26°C", luxor: "28–31°C", aswan: "29–32°C", redSea: "25–26°C" },
    seaTemp: "22–23°C", crowds: "Moderate", prices: "Mid",
    lede: "March is the month we quietly recommend most often. The weather is still genuinely comfortable, particularly in the first half; the winter crowds have thinned; and prices have come off their peak without the heat having arrived. It is the closest thing Egypt has to a month with no significant trade-off.",
    goodFor: ["Value — the same journey costs noticeably less than in January for weather that is barely different", "Nile cruising: warm days on deck without the summer glare", "The Red Sea starting to warm up while the inland sites are still easy"],
    watchFor: ["The khamaseen — a hot, dusty spring wind — is at its most likely from mid-March, and can close the desert for a day", "By the last week Aswan is regularly touching the low thirties, and midday at open sites gets hard", "Easter and Sham El-Nessim can fall in late March or April, which fills Egypt with domestic travellers"],
    occasions: "Ramadan falls partly in March in several years, and Sham El-Nessim can land in late March. Check the year's calendar before fixing dates.",
    verdict: "The first three weeks are the best value in the Egyptian year. If you want one recommendation for a first visit that balances weather, crowds and cost, this is it.",
    faqs: [
      { q: "Is March a good time to visit Egypt?", a: "Very. The first three weeks give near-winter comfort with post-peak prices and thinner crowds — the best combination of the year. By the final week Upper Egypt is regularly in the low thirties, which is still manageable with early starts but no longer effortless." },
      { q: "What is the khamaseen?", a: "A hot, dry wind from the Sahara that blows across Egypt mainly between March and May, sometimes carrying enough sand to turn the sky orange and reduce visibility. Individual episodes last a day or two. It rarely affects a whole trip but it can close desert excursions and delay flights, so it is worth building a little slack into a spring itinerary." },
      { q: "Is it hot in Egypt in March?", a: "Warm rather than hot for most of the month. Cairo sits in the mid-twenties, Luxor and Aswan around 28–32°C, and the shade is comfortable. The heat becomes a real planning factor from late March onwards, when early starts stop being a preference and become the sensible default." },
    ],
  },
  {
    slug: "april", name: "April", index: 4,
    shortSummary: "Spring, Sham El-Nessim, and the last of the easy weather inland.",
    metaDescription: "Egypt in April — spring festivals, warm to hot days, thinner international crowds and the point at which early starts become essential.",
    temps: { cairo: "27–30°C", luxor: "34–37°C", aswan: "35–38°C", redSea: "28–30°C" },
    seaTemp: "24–25°C", crowds: "Moderate", prices: "Mid",
    lede: "April is the hinge of the Egyptian year. Cairo and the Mediterranean coast are lovely; Upper Egypt has begun the long climb into summer and by the end of the month a midday walk at Karnak is a serious proposition. It is also the month of Sham El-Nessim, when the entire country goes outdoors on the same day — one of the most enjoyable things a visitor can accidentally walk into.",
    goodFor: ["Sham El-Nessim, Egypt's spring festival, when parks and riverbanks fill with families across every community", "Cairo, Alexandria and the Delta — the coast is at its best before the summer haze", "The Red Sea warming into genuine swimming temperature"],
    watchFor: ["Upper Egypt heat: Aswan can reach 38°C, and the Valley of the Kings must be done at opening or not at all", "Easter and Sham El-Nessim fill domestic hotels and the Red Sea for a long weekend", "Khamaseen winds remain possible into May"],
    occasions: "Sham El-Nessim — the Monday after Coptic Easter — falls in April in most years, and Eid al-Adha can fall in late April or May depending on the year.",
    verdict: "Excellent for Cairo, Alexandria and the coast. For Upper Egypt, plan dawn starts and long afternoons off, or shift to March.",
    faqs: [
      { q: "What is Sham El-Nessim?", a: "Egypt's spring festival, celebrated on the Monday after Coptic Easter and — remarkably — dating back to pharaonic times, which makes it one of the oldest continuously observed festivals anywhere. It is celebrated by all Egyptians regardless of faith, entirely outdoors, with salted fish, spring onions and coloured eggs. Parks, riverbanks and gardens fill from early morning." },
      { q: "Is April too hot for Egypt?", a: "Not for Cairo, Alexandria or the Red Sea, which are all at their most pleasant. For Luxor and Aswan it is the month heat becomes a planning constraint: 35–38°C means starting at sunrise, being back at the hotel by noon, and treating the afternoon as rest rather than sightseeing." },
      { q: "Can you swim in the Red Sea in April?", a: "Yes, comfortably. Water temperatures reach 24–25°C, air temperatures are in the high twenties, and the summer crowds have not arrived. April and May are among the best months on the coast." },
    ],
  },
  {
    slug: "may", name: "May", index: 5,
    shortSummary: "Hot inland, perfect on the coast, and the quietest prices of the year begin.",
    metaDescription: "Egypt in May — hot in Luxor and Aswan, excellent on the Red Sea, low season prices and how to plan around the heat.",
    temps: { cairo: "31–34°C", luxor: "38–41°C", aswan: "39–42°C", redSea: "31–33°C" },
    seaTemp: "26–27°C", crowds: "Quiet", prices: "Low",
    lede: "In May the Egyptian year divides in two. Upper Egypt becomes genuinely hot — forty degrees is normal in Aswan — and the classical circuit turns into an early-morning proposition. The Red Sea, meanwhile, becomes close to perfect: warm water, warm air, and the reefs at their best before the summer holiday crowd arrives.",
    goodFor: ["The Red Sea — arguably the best month of the year for diving and snorkelling before peak season", "Low-season pricing: the same private journey costs substantially less than in February", "Empty monuments — the Valley of the Kings at 6am in May is a different place entirely"],
    watchFor: ["Aswan and Luxor at 40°C+ demand a genuinely restructured day: sunrise starts, nothing between eleven and four", "Some Nile boats reduce sailings in the deep summer — check availability early", "Eid al-Adha can fall in May, which is one of Egypt's two busiest domestic travel weeks"],
    occasions: "Eid al-Adha falls in May in several years. Sham El-Nessim occasionally lands in early May when Coptic Easter is late.",
    verdict: "Go to the Red Sea. If you must do Upper Egypt in May, we will build the itinerary around dawn and dusk — and it works, but only if the plan respects the heat.",
    faqs: [
      { q: "Is May too hot to visit Egypt?", a: "For Luxor and Aswan it is hot — 38–42°C — but far from impossible with the right plan: start at sunrise, finish sightseeing by eleven, and treat the afternoon as rest. For Cairo it is warm but manageable, and for the Red Sea it is one of the best months of the year." },
      { q: "When is the cheapest time to visit Egypt?", a: "May to September is Egypt's low season inland, and May and June offer the largest saving relative to the weather you actually get. Prices for hotels, Nile boats and private journeys fall substantially from their winter peak, and the monuments are close to empty in the early morning." },
      { q: "Is May good for the Red Sea?", a: "Excellent. Water is around 26–27°C, air in the low thirties, visibility is good and the summer holiday crowds have not yet arrived. May and early June are the sweet spot for diving on the Egyptian coast." },
    ],
  },
  {
    slug: "june", name: "June", index: 6,
    shortSummary: "Deep summer inland, peak conditions on the reef.",
    metaDescription: "Egypt in June — very hot in Upper Egypt, superb Red Sea diving, low prices and how a private itinerary is restructured for the heat.",
    temps: { cairo: "33–36°C", luxor: "41–43°C", aswan: "42–44°C", redSea: "34–36°C" },
    seaTemp: "27–28°C", crowds: "Quiet", prices: "Lowest",
    lede: "June is the cheapest month to travel in Egypt and, for the right trip, one of the most rewarding. Upper Egypt is very hot — forty-two degrees in Aswan is a normal afternoon — but the light at dawn is extraordinary, the sites are empty, and the Red Sea is at its warmest and clearest. It is a month that rewards a plan and punishes an improvised one.",
    goodFor: ["The lowest prices of the year across hotels, boats and private journeys", "Diving: warm water, excellent visibility, and the northern reefs at their best", "Genuinely empty monuments — you can have Abu Simbel almost to yourself"],
    watchFor: ["Midday heat inland is a health matter, not a comfort one: hydration, shade and a restructured day are non-negotiable", "Some Nile cruise operators pause or reduce services in high summer", "Cairo can be hazy, and the city's heat is heavier than the dry heat further south"],
    occasions: "Eid al-Adha can fall in June depending on the lunar year.",
    verdict: "A superb month for the Red Sea and for a photographer willing to work at dawn. For a first classical itinerary with children or older travellers, wait.",
    faqs: [
      { q: "How hot is Egypt in June?", a: "Very hot inland — 41–44°C is normal in Luxor and Aswan, with Cairo in the mid-thirties. The heat is dry, which makes it more bearable than the same numbers elsewhere, but it requires a restructured day: sightseeing from sunrise to about eleven, then nothing until late afternoon." },
      { q: "Is June a good time for Red Sea diving?", a: "One of the best. Water is 27–28°C, visibility is at its annual best, and the reefs are in excellent condition. It is also before the peak European summer influx, so the dive sites are less crowded than they will be in July and August." },
      { q: "Is it worth visiting Egypt in summer?", a: "For the Red Sea, absolutely. For the classical circuit, it is worth it if you accept the terms — dawn starts, afternoons off, and full hydration — and the reward is monuments with almost nobody in them and prices at their lowest of the year." },
    ],
  },
  {
    slug: "july", name: "July", index: 7,
    shortSummary: "The hottest month, the emptiest sites, and the busiest coast.",
    metaDescription: "Egypt in July — peak summer heat inland, busy Red Sea resorts, lowest inland prices and how to travel comfortably despite the temperature.",
    temps: { cairo: "34–37°C", luxor: "41–44°C", aswan: "42–45°C", redSea: "35–38°C" },
    seaTemp: "28–29°C", crowds: "Quiet", prices: "Lowest",
    lede: "July is Egypt at its hottest and, inland, at its emptiest. The paradox of the month is that the coast is full — Gulf and European families on school holidays — while Karnak at seven in the morning may hold a dozen people. If heat is something you can plan around rather than something that ruins a holiday, July offers access to Egypt that no other month does.",
    goodFor: ["Empty monuments and unhurried guides — the single best month for photography without people in frame", "Warmest Red Sea water of the year", "The lowest prices in Egypt for hotels and private journeys inland"],
    watchFor: ["45°C in Aswan is a genuine limit; itineraries must be built around it, not despite it", "Red Sea resorts are at their busiest with Gulf and European family travel — book early for the coast", "Not the month for a first trip with young children or anyone who struggles in heat"],
    occasions: "Depending on the lunar year, Islamic New Year or Eid al-Adha may fall in July.",
    verdict: "For a diving trip, an excellent month. For the Nile valley, only with a plan built entirely around dawn — which we are happy to build, and will say so plainly if we think it is the wrong choice for your party.",
    faqs: [
      { q: "Is July too hot to visit Egypt?", a: "It is the hottest month, with 42–45°C common in Aswan. It is not impossible — the heat is dry, hotels and vehicles are air-conditioned, and sightseeing from sunrise to mid-morning is comfortable — but it demands an itinerary designed around it. For families with young children or travellers who dislike heat, we would suggest another month." },
      { q: "Are the Pyramids open in summer?", a: "Yes, year-round. In summer they open early and the first two hours are the ones to use. The Giza plateau is almost entirely unshaded, so an early start is not a preference in July, it is the plan." },
      { q: "Is the Red Sea busy in July?", a: "Yes — it is peak season on the coast, driven by Gulf and European school holidays. Hurghada, Sharm el-Sheikh and Marsa Alam fill, and the better hotels and dive boats book out well in advance. The inland sites, by contrast, are at their quietest." },
    ],
  },
  {
    slug: "august", name: "August", index: 8,
    shortSummary: "Still very hot, still very quiet inland, and the coast at full capacity.",
    metaDescription: "Egypt in August — high summer heat, busy Red Sea and North Coast, quiet monuments and honest advice on whether to travel.",
    temps: { cairo: "34–37°C", luxor: "41–43°C", aswan: "42–44°C", redSea: "35–38°C" },
    seaTemp: "29–30°C", crowds: "Quiet", prices: "Lowest",
    lede: "August is July with marginally shorter days and slightly more humidity in the north. Inland, the pattern is the same: extreme afternoon heat, deserted monuments, and the lowest prices of the year. On the coasts — both the Red Sea and Egypt's Mediterranean North Coast — it is the busiest month of the year, and the country's own holiday season is in full swing.",
    goodFor: ["Diving in the warmest water Egypt offers, at 29–30°C", "Alexandria and the Mediterranean coast, which are several degrees cooler than Cairo and full of life", "Monuments without crowds, if you are willing to be at the gate when it opens"],
    watchFor: ["Peak domestic and Gulf travel means the North Coast and Red Sea are fully booked and priced accordingly", "Humidity in Cairo and the Delta makes the heat feel heavier than the same temperature in Aswan", "Very long, very hot afternoons — plan for genuine rest, not a light break"],
    occasions: "Depending on the lunar year, Islamic New Year may fall in August. Egypt's domestic summer holiday peaks this month.",
    verdict: "Go north or go diving. If the classical circuit is the goal and your dates are flexible, October will give you far more of it.",
    faqs: [
      { q: "Can you visit Luxor in August?", a: "Yes, with the day built around the heat — at the site by 6am, finished by 10.30, and the afternoon spent indoors or by water. The reward is genuinely empty tombs. But it is honest to say that a first-time visitor with a fixed idea of what a holiday feels like will enjoy the same itinerary far more in October." },
      { q: "Where is coolest in Egypt in August?", a: "Alexandria and the Mediterranean coast, which run several degrees below Cairo and get a sea breeze, and the Red Sea coast, where the air is hot but the water is 29–30°C. Both are also, for exactly this reason, at their busiest with Egyptian and Gulf holidaymakers." },
      { q: "Is August a cheap time to visit Egypt?", a: "Inland, yes — it is the low season and prices for hotels, Nile boats and private journeys are at their annual floor. On the coasts the opposite is true: August is peak season and the good hotels are both full and expensive." },
    ],
  },
  {
    slug: "september", name: "September", index: 9,
    shortSummary: "The heat breaking, the coast still warm, and the shoulder season beginning.",
    metaDescription: "Egypt in September — the end of summer heat, warm Red Sea water, thinning coastal crowds and the start of good value inland.",
    temps: { cairo: "32–35°C", luxor: "39–41°C", aswan: "40–42°C", redSea: "33–36°C" },
    seaTemp: "28–29°C", crowds: "Quiet", prices: "Low",
    lede: "September is a month of change. The first half is still summer; by the last week Upper Egypt has come down enough that a full morning outdoors is comfortable again. The European school holidays have ended, so the Red Sea empties while the water is still at its warmest — which is, for divers, the single best combination the Egyptian year offers.",
    goodFor: ["Diving: the warmest water and the fewest people, once the first week has passed", "Value inland while the heat is easing but the winter pricing has not started", "The Abu Simbel Sun Festival preparations at the very end of the month"],
    watchFor: ["The first fortnight is still genuinely hot inland — treat it as summer, not autumn", "Ramadan falls in September in some years, which changes opening hours and the rhythm of the day", "Sea and air temperatures stay high, so it is not yet a 'cool' month anywhere"],
    occasions: "The lead-in to the Abu Simbel Sun Festival on 22 October. In some years Ramadan falls in September.",
    verdict: "The last week of September is quietly one of the best value weeks of the year, particularly if the Red Sea is part of the plan.",
    faqs: [
      { q: "Is September a good time to visit Egypt?", a: "The second half is. The first fortnight is still summer inland, but by the last week Luxor and Aswan have eased into the high thirties and mornings are comfortable again — with low-season prices still in effect and the coast emptying as European schools go back." },
      { q: "Is the Red Sea good in September?", a: "It is arguably the best month. Water is still 28–29°C from the summer, visibility is excellent, and the July–August crowds have gone home. Divers who can travel outside school holidays often pick September deliberately." },
      { q: "When does the heat break in Egypt?", a: "Gradually through late September and properly in October. There is no single day, but the practical marker is when a full morning at an open site stops requiring a 6am start — usually the last week of September in Upper Egypt, and a fortnight earlier in Cairo." },
    ],
  },
  {
    slug: "october", name: "October", index: 10,
    shortSummary: "The month we would choose — warm, clear, uncrowded, and the sun festival.",
    metaDescription: "Egypt in October — warm dry days, the Abu Simbel Sun Festival on the 22nd, moderate crowds and the best all-round month for a first visit.",
    temps: { cairo: "28–31°C", luxor: "35–37°C", aswan: "36–38°C", redSea: "31–33°C" },
    seaTemp: "27–28°C", crowds: "Moderate", prices: "Mid",
    lede: "If February is the best month for the monuments and June the best for the reef, October is the best for both at once. The summer heat has broken but the sea is still warm; the winter crowds have not arrived but the weather is already good; and prices sit between the low-season floor and the December peak. For a first visit that combines Cairo, the Nile and a few days on the Red Sea, this is the month.",
    goodFor: ["A combined classical and Red Sea itinerary — the only months where both are genuinely at their best", "The Abu Simbel Sun Festival on 22 October", "Warm evenings: the first month where dinner outdoors is comfortable everywhere"],
    watchFor: ["Upper Egypt still reaches the high thirties in the first half — mornings are still the right time for the big sites", "The sun festival week fills Aswan and Abu Simbel; book several months ahead", "Prices begin climbing from the last week as the winter season starts"],
    occasions: "The Abu Simbel Sun Festival on 22 October, when sunrise reaches the inner sanctuary of the Great Temple.",
    verdict: "Our most-recommended month for a first visit. If you can travel in the second half of October, do.",
    faqs: [
      { q: "Is October a good time to visit Egypt?", a: "It is the best all-round month. The heat has broken enough for comfortable sightseeing, the Red Sea is still 27–28°C, the crowds are moderate and prices sit below the winter peak. For an itinerary that combines the monuments with a few days on the coast, nothing else matches it." },
      { q: "When is the Abu Simbel Sun Festival?", a: "22 October and 22 February. At sunrise the light travels sixty metres into the Great Temple of Ramesses II and illuminates the seated statues in the sanctuary — an alignment designed into the temple over three thousand years ago and preserved when the whole building was relocated in the 1960s." },
      { q: "Is the Red Sea still warm in October?", a: "Yes — around 27–28°C, barely below the summer peak, with excellent visibility and far fewer people than in August. October is one of the strongest months of the year for diving in Egypt." },
    ],
  },
  {
    slug: "november", name: "November", index: 11,
    shortSummary: "Ideal weather, rising demand, and the start of the winter season.",
    metaDescription: "Egypt in November — near-perfect temperatures for sightseeing, the start of high season, and how to get the best of it before December prices.",
    temps: { cairo: "23–26°C", luxor: "29–31°C", aswan: "30–32°C", redSea: "27–29°C" },
    seaTemp: "25–26°C", crowds: "Busy", prices: "High",
    lede: "November is when the world remembers Egypt exists. The weather is close to flawless — high twenties in Luxor, mid-twenties in Cairo, dry and clear — and the international season begins in earnest. It is a superb month to travel and the last one before the Christmas pricing arrives, which makes the first three weeks particularly worth targeting.",
    goodFor: ["Sightseeing at any hour: the first month since March where midday at Karnak is comfortable", "Nile cruising in near-perfect conditions", "The Red Sea still warm enough for easy swimming"],
    watchFor: ["Demand rises sharply through the month — the good Nile boats and hotel rooms go early", "Prices climb steadily and jump in the final week as the Christmas period is priced in", "Evenings turn cool, especially on the water"],
    occasions: "The start of Egypt's main international season. Nothing fixed, which is part of its appeal.",
    verdict: "The first three weeks of November are excellent and slightly under-appreciated. Book early — this is the month that sells out quietly.",
    faqs: [
      { q: "Is November a good month to visit Egypt?", a: "Very. Temperatures of 29–31°C in Luxor and the mid-twenties in Cairo are close to ideal for sightseeing, the air is dry and clear, and the Red Sea is still warm. It is high season, so book well ahead — particularly for Nile boats." },
      { q: "How far ahead should I book for November?", a: "Three to four months for hotels and standard cruise vessels; six if you want a specific dahabiya or a landmark hotel room. November through February is Egypt's main season and the best accommodation is finite." },
      { q: "Do I need warm clothes in Egypt in November?", a: "A light jacket or a warm layer for evenings, yes — particularly on a Nile boat, where the temperature drops noticeably after sunset and the deck is exposed. Days are warm enough for short sleeves throughout." },
    ],
  },
  {
    slug: "december", name: "December", index: 12,
    shortSummary: "Peak season — the best weather, the highest prices, and Christmas on the Nile.",
    metaDescription: "Egypt in December — perfect sightseeing weather, peak crowds and prices, Christmas and New Year on the Nile, and how to plan around it.",
    temps: { cairo: "20–22°C", luxor: "24–26°C", aswan: "25–27°C", redSea: "24–25°C" },
    seaTemp: "23–24°C", crowds: "Peak", prices: "Highest",
    lede: "December is Egypt's showpiece month. The weather is as good as it gets for walking ruins, the light is clean and low, and the country is at its most international. It is also the most expensive and most crowded time of the year, and the last ten days are in a category of their own — New Year's Eve on a Nile boat is a fixture people book twelve months out.",
    goodFor: ["The best sightseeing weather of the year, with comfortable temperatures at any hour", "Christmas and New Year on the Nile — a genuine tradition for European travellers", "Coptic Christmas preparations in Old Cairo, ahead of 7 January"],
    watchFor: ["Peak pricing across every category, and it is not a small premium — the same suite can double over New Year", "The Valley of the Kings and the Giza plateau are at their busiest; early starts matter again, for crowds rather than heat", "Cold evenings — the desert and Aswan drop sharply after dark"],
    occasions: "Christmas and New Year. Coptic Christmas follows on 7 January, so the festive season in Egypt runs longer than most visitors expect.",
    verdict: "If you want Egypt at its most comfortable and the budget allows, December is unmatched. If value matters, the first week of December or the second half of March gives you nearly the same weather for considerably less.",
    faqs: [
      { q: "Is December a good time to visit Egypt?", a: "It is the most comfortable month for sightseeing — mid-twenties in Upper Egypt, low twenties in Cairo, dry and clear. It is also the most expensive and most crowded. The trade-off is real but many travellers judge it worth paying." },
      { q: "What is Christmas like in Egypt?", a: "Two Christmases, three weeks apart. The 25th is marked in hotels and by Egypt's international community; Coptic Christmas on 7 January is the significant religious date for Egypt's own Christians, celebrated with midnight liturgy in churches across the country. New Year's Eve on a Nile boat is the single most contested booking of the Egyptian year." },
      { q: "How far in advance should I book for Christmas in Egypt?", a: "Six to twelve months. Nile boats over Christmas and New Year, and the landmark hotel rooms, are taken up to a year ahead — and the small dahabiyas, of which there are very few, go first." },
    ],
  },
];

export const findMonth = (slug: string) => months.find((m) => m.slug === slug);
