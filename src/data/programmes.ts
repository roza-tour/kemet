// ---------------------------------------------------------------------------
// Programmes — journeys to the places beyond the Nile that the catalogue does
// not yet price: Siwa, the Red Sea coast and its islands, Sinai, the deserts,
// and a slower Aswan. English first (November 2026).
//
// WHAT THESE ARE, AND WHAT THEY ARE NOT
// Each is a real programme with a day-by-day shape, written from research done
// on 16–17 Nov 2026 (road times, flight days, opening hours, protected-area
// rules, what comparable operators sell). They carry NO PRICE, ON PURPOSE:
// the rate belongs to the dates, the lodges open then, the boats and the size
// of the party, and the owner has not yet fixed a rate for any of them. The
// pages say so and say how a price is given (in writing, within two hours).
//
// NOTHING HERE NAMES A HOTEL, A BOAT OR A SUPPLIER. The catalogue never does,
// and a name on this page would read as a partnership we do not claim. Where a
// stay is simple, the text says it is simple.
//
// THE ORDER OF THE DAYS IS NOT FIXED. Domestic flights do not run daily on
// every route (Luxor–Sharm non-stop: one to four a week; Marsa Alam: limited
// days), the monastery at St Catherine is closed on Fridays and Sundays, boats
// stop when the wind rises, and sites keep their own hours. Every page says
// that the days are placed once the dates are known, and each carries the one
// constraint that matters most for that programme (`fixed`).
//
// Times marked as ours come from the destination pages (data/destinations.ts);
// the others are from the research file and are given as "about".
// ---------------------------------------------------------------------------

export interface ProgrammeDay {
  /** "Day 1", "Days 3–4" … */
  label: string;
  title: string;
  text: string;
}

export interface Programme {
  slug: string;
  title: string;
  /** How it is used: on its own, on the end of a longer Egypt journey, or as one extra. */
  kind: "stand-alone" | "extension" | "add-on";
  /** "8 days / 7 nights" */
  length: string;
  /** "Cairo to Cairo" */
  route: string;
  bestMonths: string;
  /** Months or conditions to avoid, in a sentence. */
  avoid: string;
  /** One or two sentences under the title. */
  standfirst: string;
  /** Who it is for. */
  forWhom: string;
  days: ProgrammeDay[];
  /** What is not found in the usual version of this trip. */
  different: string[];
  /** What is private. */
  privateNote: string;
  /** Where you sleep, said plainly. */
  stay: string;
  /** The constraint that sets the order of the days. */
  fixed: string;
  /** Destination ids that appear in the destination hero picker and links. */
  places: string[];
  /** Photograph: a destination's hero (index 0) or gallery photo (1…). */
  photo: { destination: string; index: number };
  /** Catalogue journeys this extends or follows. */
  alongside: string[];
  faqs: Array<{ q: string; a: string }>;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
}

/** The sentence on every programme page about the order of the days. */
export const ORDER_NOTE =
  "The days below are in their natural order, not their final one. Egypt's domestic flights do not run every day on every route, " +
  "boats stop when the wind rises, and each site keeps its own hours — so once your dates are fixed we rearrange the days " +
  "around the flights and the opening times that fall on them.";

export const PRICE_NOTE =
  "No price is printed here, on purpose. The rate depends on your dates, on what is open and available then, and on the size of your party. " +
  "Send us the dates and we reply in writing, within two hours, with the route in its final order and the price.";

export const PROGRAMME_HUB = {
  route: "programmes.html",
  title: "Private Programmes — Siwa, the Red Sea & Sinai | Kemet",
  description:
    "Nine private programmes beyond the Nile: Siwa, Red Sea islands, Sinai, the White Desert, Marsa Alam, Aswan. Planned around your dates, priced on request.",
  heading: "Programmes",
  text: "Egypt beyond the Nile valley, planned the way the rest of our journeys are: your own Egyptologist, your own vehicle, your own boat where there is water. Each is priced on request, because each depends on your dates.",
};

export const programmes: Programme[] = [
  // ── 1 ───────────────────────────────────────────────────────────────────
  {
    slug: "alexanders-road-siwa",
    title: "Alexander's Road: Alexandria, El Alamein & Siwa",
    kind: "stand-alone",
    length: "8 days / 7 nights",
    route: "Cairo to Cairo",
    bestMonths: "Mid-October to November, and February to March",
    avoid: "June to August (the heat, and the oasis's best lodges have no air conditioning). December and January are workable with warm clothes; we check which coastal hotels are open.",
    standfirst:
      "The coast road and the desert beyond it, told in order by one Egyptologist: the city Alexander founded, the war cemeteries of El Alamein, and three nights in Siwa, where he came to ask the oracle.",
    forWhom: "Travellers who have seen the Nile and want the Egypt that lies beyond it.",
    days: [
      { label: "Day 1", title: "Cairo to Alexandria", text: "North by road, about two and a half to three hours. The afternoon is with your Egyptologist in the city Alexander founded: the Greco-Roman Museum, Kom el-Dikka, and the corniche at dusk." },
      { label: "Day 2", title: "El Alamein", text: "Along the coast to the Commonwealth war cemetery, the museum, and the German and Italian memorials. The afternoon is by the sea." },
      { label: "Day 3", title: "West, then south to Siwa", text: "On along the Mediterranean to Marsa Matruh and south across the desert — about four hours from Matruh. You arrive in time for the light on the lake." },
      { label: "Day 4", title: "The oasis", text: "The Temple of the Oracle at Aghurmi in the morning; Cleopatra's Spring; the painted tombs of Gebel al-Mawta; the mud-and-salt town of Shali at dusk." },
      { label: "Day 5", title: "Salt and sand", text: "The salt lakes early. In the afternoon, by 4x4 into the Great Sand Sea: the dunes, a cold lake, the spring at Bir Wahed, and sunset from the crest. Desert days need permits, which we arrange — tell us your dates a few weeks ahead." },
      { label: "Day 6", title: "A day left empty on purpose", text: "The gardens, an olive or date press at work in season, Fatnas at sunset — and a second visit to the Oracle at the end of the day, in the late light." },
      { label: "Day 7", title: "Back to the sea", text: "North across the desert and along the coast to El Alamein." },
      { label: "Day 8", title: "To Cairo", text: "About three hours to Cairo and the airport." },
    ],
    different: [
      "One guide, one story. The route is Alexander's own in 331 BCE — the new city, the coast road west, then south to the Oracle — told in order by the same Egyptologist. Elsewhere the road is only a transfer.",
      "A third day in Siwa with nothing booked, and a return to the Oracle at dusk instead of a single mid-morning stop.",
    ],
    privateNote: "Your Egyptologist, your vehicle and driver from Cairo to Cairo; a licensed Siwan desert driver and 4x4 on the sand day.",
    stay: "Alexandria and the coast by the sea. In Siwa, a small lodge in the oasis — the best of them are rustic by design, some without electricity, and we tell you which before you choose.",
    fixed: "Siwa is reached by road only: there are no scheduled flights, and the drive from Cairo is a full day. The journey is built around the road, not around the airlines.",
    places: ["alexandria", "marsa-matruh-north-coast", "siwa"],
    photo: { destination: "siwa", index: 0 },
    alongside: ["tour-alexandria-2day", "tour-4-day"],
    faqs: [
      { q: "How long is the drive to Siwa?", a: "From Cairo it is a full day — eight to ten hours. This journey breaks it at Alexandria and El Alamein, so the road is part of the story, and the last leg from Marsa Matruh is about four hours." },
      { q: "Can it be shorter?", a: "Yes. 'Siwa at the Date Harvest' keeps four nights, and in the cooler months a shorter Siwa stay of three nights runs from Cairo by road. Tell us how many days you have." },
    ],
    seoTitle: "Alexander's Road — Alexandria, El Alamein & Siwa | Kemet",
    seoDescription: "An 8-day private journey along the coast and into the desert to Siwa: Alexandria, El Alamein and three nights at the oasis of the Oracle. Priced on request.",
    keywords: "Siwa Oasis tour, Alexandria El Alamein Siwa, private Siwa journey, Egypt coast and oasis tour, Alexander the Great Siwa, Siwa from Cairo",
  },

  // ── 2 ───────────────────────────────────────────────────────────────────
  {
    slug: "siwa-date-harvest",
    title: "Siwa at the Date Harvest",
    kind: "extension",
    length: "5 days / 4 nights",
    route: "Cairo to Cairo, by road",
    bestMonths: "Mid-October to mid-November, for the harvest; outside the harvest the same shape runs from October to April",
    avoid: "June to August.",
    standfirst:
      "Four nights timed to the weeks the dates are picked and the oasis gathers for its autumn full-moon festival — and a way in that can skip the long road.",
    forWhom: "Travellers adding one remote chapter to a Cairo or Nile journey, and those who like to arrive when something is happening.",
    days: [
      { label: "Day 1", title: "Cairo to El Alamein", text: "About three hours by road. The memorials in the afternoon; a night by the sea." },
      { label: "Day 2", title: "On to Siwa", text: "South across the desert, about six to six and a half hours in all. Sunset at Fatnas." },
      { label: "Day 3", title: "Harvest day", text: "A morning in the date gardens with a Siwan grower — the climb, the sorting, the varieties; an olive press; the Oracle and Gebel al-Mawta in the late light. On festival days, an hour with a Siwan host at Gebel Dakrour, if the community welcomes visitors that year." },
      { label: "Day 4", title: "Salt and sand", text: "The salt lakes at first light; the Great Sand Sea and Bir Wahed in the afternoon, by 4x4 with a permit we arrange." },
      { label: "Day 5", title: "Home", text: "Siwa to Cairo in one long day of eight to ten hours — or add a night on the coast." },
    ],
    different: [
      "It is dated. The days fall in the weeks the gardens are busiest and the autumn gathering takes place — the festival follows the moon, so we set the days once we know the year's dates.",
      "A faster way in, where it can be had: a private aircraft from Cairo can replace the road on the first two and the last day, as the airstrip is military and landing needs permission, which takes about two weeks. We tell you whether it is available for your dates.",
    ],
    privateNote: "Your guide, vehicle and driver throughout; the grower's garden is visited by your party only.",
    stay: "A small lodge in the oasis, simple by design; the coast night is in a hotel by the sea.",
    fixed: "The harvest and the festival follow the season and the moon, and Siwa has no scheduled flights. Both set the days.",
    places: ["siwa", "marsa-matruh-north-coast"],
    photo: { destination: "siwa", index: 1 },
    alongside: ["tour-cairo-culture-5day", "tour-cairo-vip-3day", "tour-4-day"],
    faqs: [
      { q: "Are foreign visitors welcome at the festival?", a: "It is a gathering of the Siwan community, not a performance. Whether and how visitors are welcomed varies by year, so we ask a Siwan host before we promise it, and we plan the harvest day to be worth the journey either way." },
      { q: "Can I fly instead of driving?", a: "A private charter is possible on request. Siwa's airstrip is military, landing needs permission (about two weeks), and the aircraft cannot stay overnight, so we confirm it for your dates before we plan around it." },
    ],
    seoTitle: "Siwa at the Date Harvest — a 5-Day Private Journey | Kemet",
    seoDescription: "Five days in Siwa timed to the autumn date harvest and full-moon gathering, by road or private aircraft. Priced on request, planned around your dates.",
    keywords: "Siwa date harvest, Siwa festival October, Siwa private tour 5 days, Siwa from Cairo, Siwa Oasis autumn, Siwa charter flight",
  },

  // ── 3 ───────────────────────────────────────────────────────────────────
  {
    slug: "dendera-to-the-sea",
    title: "Dendera to the Sea",
    kind: "extension",
    length: "4 days / 3 nights",
    route: "Luxor to the Hurghada coast",
    bestMonths: "March to May, and September to November",
    avoid: "June to August is hot and windy; December to February is sunny but breezy, with a cool sea.",
    standfirst:
      "The last great temple on the way to the sea. Luxor to the Red Sea with Dendera guided on the road, a boat at seven in the morning, and a day left open.",
    forWhom: "Couples and families ending a Nile journey who want rest — and one last great temple on the way to it.",
    days: [
      { label: "Day 1", title: "Dendera, then the desert road", text: "Leave Luxor at 08:00 for Dendera: two hours with your Egyptologist under the painted ceilings, in the crypt and on the roof, as access allows on the day. Then east through Qena and across the Eastern Desert to the coast, arriving mid-afternoon." },
      { label: "Day 2", title: "The sea before the fleet", text: "Your own boat at 07:00 and the reef with a marine guide while the water is flat, back by early afternoon." },
      { label: "Day 3", title: "An open day, three ways", text: "Mons Claudianus — a Roman quarry and fort in the desert behind the coast — by 4x4 with your guide; a first kite or wing lesson on Soma Bay's flat water; or a desert evening with a telescope." },
      { label: "Day 4", title: "To the airport", text: "A private transfer to Hurghada airport, about twenty minutes from Sahl Hasheesh." },
    ],
    different: [
      "The transfer is a day of the journey. Luxor to the Red Sea is usually a taxi; here it begins at Dendera.",
      "Rome in the desert: the imperial quarries behind the coast are rarely part of a Red Sea stay.",
    ],
    privateNote: "Your Egyptologist, vehicle and driver on day 1; the boat on day 2; the 4x4 on day 3.",
    stay: "A beach resort on the coast between Sahl Hasheesh and Soma Bay, or El Gouna if you want a town to walk in; the hotels are at the standard of the rest of our catalogue.",
    fixed: "Dendera and the quarry road have their own hours and conditions, and flights out of Hurghada decide the last day; the days are placed around them.",
    places: ["dendera-abydos", "hurghada"],
    photo: { destination: "dendera-abydos", index: 0 },
    alongside: ["tour-10-day", "tour-luxor-3day", "tour-upper-egypt-5day", "tour-honeymoon-9day", "tour-family-8day"],
    faqs: [
      { q: "How long is the drive from Luxor to the Red Sea?", a: "About four hours without a stop. With Dendera on the way the day is longer, and it is a proper day: the temple takes two hours." },
      { q: "Is Mons Claudianus easy to reach?", a: "It is a half to full day by 4x4 from the coast, on tracks that need the right permits and a driver who knows them. We arrange both, and keep the day free so it can move with the weather." },
    ],
    seoTitle: "Dendera to the Sea — Luxor to the Red Sea, Privately | Kemet",
    seoDescription: "Four days from Luxor to the Red Sea with Dendera guided on the way, a private boat at seven and a Roman quarry in the desert. Priced on request.",
    keywords: "Luxor to Hurghada private transfer Dendera, Dendera temple tour, Luxor Red Sea extension, Soma Bay kite, Mons Claudianus, Nile and Red Sea",
  },

  // ── 4 ───────────────────────────────────────────────────────────────────
  {
    slug: "red-sea-islands",
    title: "The Islands of the Northern Red Sea",
    kind: "stand-alone",
    length: "6 days / 5 nights",
    route: "Hurghada airport to Hurghada airport",
    bestMonths: "April to May, and September to November (November is usually the calmest)",
    avoid: "June to August (strong wind, and heat); December to February (cool water, and wind can cancel a day on the boat).",
    standfirst:
      "Three groups of islands, each from your own boat, each reached before the day boats: Shaab El Erg in the north, Giftun at its opening hour, and the Tobia sandbanks off Safaga.",
    forWhom: "Travellers who want the sea itself — swimmers, snorkellers, families with confident children — rather than a pool with a view of it.",
    days: [
      { label: "Day 1", title: "Arrive; El Gouna", text: "Hurghada airport and a private transfer to El Gouna, about thirty to forty minutes." },
      { label: "Day 2", title: "North", text: "Your own boat from El Gouna to the reefs of Shaab El Erg — dolphins sometimes come, if they choose — and the islands beyond." },
      { label: "Day 3", title: "A slow morning", text: "A morning with nowhere to be, then south by road to Sahl Hasheesh, about an hour." },
      { label: "Day 4", title: "The centre: Giftun", text: "Out at 07:00 for the first mooring of the day on the island's reef; ashore when the island opens, at nine, and away before the day boats land. Lunch on board in the lee of Abu Minqar or Magawish; back by mid-afternoon." },
      { label: "Day 5", title: "South: Tobia", text: "From the Soma Bay pier to the Tobia sandbanks off Safaga, early — or a day ashore." },
      { label: "Day 6", title: "Home", text: "A private transfer to the airport, twenty minutes." },
    ],
    different: [
      "First out, first ashore, gone before the fleet. Day boats leave together in the morning and put guests ashore in batches; a private boat can leave at first light and be there as the island opens.",
      "Three island groups, not one. Giftun is sold as if it were the only island on this coast.",
    ],
    privateNote: "The boat, its crew and a marine guide on every sea day; all transfers.",
    stay: "Beach resorts at El Gouna and Sahl Hasheesh or Soma Bay, at the standard of the rest of our catalogue. A night on an island itself is not part of this programme: stays on islands on this coast are few, and we say what is available on your dates if you ask.",
    fixed: "The national park decides where a boat may moor and land, and the wind decides whether it goes at all. Sea days are placed with a spare day where we can and moved around the forecast.",
    places: ["hurghada"],
    photo: { destination: "hurghada", index: 1 },
    alongside: ["tour-sharm-5day", "tour-red-sea-diving-4day", "tour-10-day"],
    faqs: [
      { q: "What if the wind cancels a boat day?", a: "It happens, most often from December to February and in high summer. We place the three sea days with room to move one, and rearrange them around the forecast rather than cancel them." },
      { q: "Can we sleep on an island?", a: "Not by default. Island stays on this coast are few; if you want one, ask, and we will tell you what exists on your dates and whether it belongs in the programme." },
    ],
    seoTitle: "Islands of the Northern Red Sea — Private Boat Days | Kemet",
    seoDescription: "Six days of private boat trips to the islands off Hurghada, El Gouna and Safaga, reached before the day boats. Planned around wind; priced on request.",
    keywords: "Giftun island private boat, Red Sea islands private charter, El Gouna boat day, Tobia islands Safaga, Shaab El Erg dolphins, Hurghada islands luxury",
  },

  // ── 5 ───────────────────────────────────────────────────────────────────
  {
    slug: "sinai-reef-mountain-monastery",
    title: "Sinai: Reef, Mountain and Monastery",
    kind: "stand-alone",
    length: "7 days / 6 nights",
    route: "Sharm El Sheikh to Sharm El Sheikh",
    bestMonths: "March to May, and late September to November",
    avoid: "December to February (the summit is below freezing after dark); June to August (too hot on the lower path by day).",
    standfirst:
      "Sinai whole: the Straits of Tiran by private yacht, Mount Sinai at sunset rather than at 2 a.m., the monastery at opening time from next door, and then Dahab.",
    forWhom: "Travellers who want the sea, the summit and the oldest working monastery — and will give up one night of resort comfort for it.",
    days: [
      { label: "Day 1", title: "Arrive in Sharm El Sheikh", text: "About an hour's flight from Cairo." },
      { label: "Day 2", title: "The Straits of Tiran", text: "By private yacht: Gordon Reef for an easy first swim, Jackson for confident swimmers, lunch aboard. A reef day — boats do not land on Tiran — and snorkelling only, because tomorrow is altitude." },
      { label: "Day 3", title: "Mount Sinai at sunset", text: "Inland to St Catherine, about three hours. Lunch and rest; then the long path up the mountain with a Bedouin guide of the Jebeliya, timed for the summit at sunset — two and a half to three hours up — and down by torchlight. A night at the foot of the mountain." },
      { label: "Day 4", title: "The monastery, then Dahab", text: "Saint Catherine's Monastery at opening time with your guide: the basilica, the mosaic of the Transfiguration, the icons. Then to the Gulf of Aqaba at Dahab, about two hours." },
      { label: "Day 5", title: "Dahab", text: "The rim of the Blue Hole early, before the day visitors; the lagoon in the afternoon." },
      { label: "Day 6", title: "Back to Sharm", text: "About an hour by road, with a free afternoon." },
      { label: "Day 7", title: "Departure", text: "" },
    ],
    different: [
      "Sunset, not sunrise. The usual way up is a night coach and a start at one or two in the morning with every other group. A private afternoon climb puts you on the summit at the end of the day.",
      "The monastery at opening time, from next door. Day visitors arrive after three hours on the road and share a short opening; you will have slept nearby.",
    ],
    privateNote: "Your guide, vehicle and driver throughout; the yacht; the mountain guide.",
    stay: "Sharm and Dahab at the standard of the rest of our catalogue. St Catherine has no hotel of that standard, and we say so: the night at the foot of the mountain is in the best simple lodging there is.",
    fixed: "The monastery is closed on Fridays, Sundays and Greek Orthodox feast days, so day 4 cannot fall on one; the whole week is placed around that, and around the days Cairo, Luxor and Sharm are linked by flights.",
    places: ["sharm-el-sheikh", "saint-catherine", "dahab"],
    photo: { destination: "saint-catherine", index: 0 },
    alongside: ["tour-sharm-5day", "tour-red-sea-diving-4day", "tour-grand-14day"],
    faqs: [
      { q: "Is the climb difficult?", a: "It is steady rather than technical, and a real mountain walk: two and a half to three hours up, cold at the top at any time of year, with the descent after dark. It suits anyone who walks well, and it is not for everyone." },
      { q: "Can I dive on this programme?", a: "Not in the days before the mountain: altitude follows a dive day badly, and the rule of at least 24 hours before flying applies as well. Dahab is the place to dive, and we place the days so that the buffer is kept." },
    ],
    seoTitle: "Sinai: Reef, Mountain & Monastery — 7 Private Days | Kemet",
    seoDescription: "Tiran by private yacht, Mount Sinai at sunset, St Catherine's Monastery at opening time, then Dahab. Seven days from Sharm El Sheikh, priced on request.",
    keywords: "Mount Sinai sunset climb, St Catherine's Monastery private tour, Sinai private journey, Tiran private yacht, Dahab Blue Hole, Sharm El Sheikh Sinai itinerary",
  },

  // ── 6 ───────────────────────────────────────────────────────────────────
  {
    slug: "mount-sinai-sunset",
    title: "Mount Sinai at Sunset",
    kind: "add-on",
    length: "2 days / 1 night",
    route: "From and back to Sharm El Sheikh or Dahab",
    bestMonths: "March to May, and late September to November",
    avoid: "December to February (below freezing at the summit after dark); June to August.",
    standfirst:
      "The mountain and the monastery without a night on a coach: up in the afternoon, the summit at sunset, and Saint Catherine's Monastery at opening time the next morning.",
    forWhom: "Guests already staying in Sharm or Dahab who want Sinai's interior.",
    days: [
      { label: "Day 1", title: "Up the mountain", text: "Leave Sharm at 08:00 and reach St Catherine by late morning. Lunch and rest; then up the camel path in the early afternoon with a Bedouin guide, the summit at sunset, and down by torchlight — about three hours up and two down." },
      { label: "Day 2", title: "The monastery", text: "Saint Catherine's Monastery at opening time with your guide, then back to Sharm by mid-afternoon, or to Dahab by lunch." },
    ],
    different: [
      "The hour of the climb and the hour of the monastery: the same two points as the longer Sinai programme, as a single overnight.",
    ],
    privateNote: "Your guide, vehicle and driver; the mountain guide.",
    stay: "Simple, and said to be: St Catherine has no hotel at the standard of the rest of our catalogue.",
    fixed: "The monastery is closed on Fridays, Sundays and Greek Orthodox feast days, so day 2 cannot fall on one. If you are diving, we place it before the dive days, or after a full day out of the water.",
    places: ["saint-catherine", "sharm-el-sheikh", "dahab"],
    photo: { destination: "saint-catherine", index: 1 },
    alongside: ["tour-sharm-5day", "tour-grand-14day"],
    faqs: [
      { q: "Can this be added to the Sharm retreat?", a: "Yes. It takes the place of the retreat's free day, and we choose the day around the monastery's opening days and the retreat's flights." },
    ],
    seoTitle: "Mount Sinai at Sunset — a Private Overnight from Sharm | Kemet",
    seoDescription: "Climb Mount Sinai in the afternoon for sunset and see St Catherine's Monastery at opening time the next morning. A private overnight from Sharm or Dahab.",
    keywords: "Mount Sinai sunset, St Catherine monastery tour from Sharm, Mount Sinai private tour, Sinai overnight, climb Mount Sinai without night coach",
  },

  // ── 7 ───────────────────────────────────────────────────────────────────
  {
    slug: "marsa-alam-hamata-islands",
    title: "The Far South: Marsa Alam and the Hamata Islands",
    kind: "extension",
    length: "5 days / 4 nights",
    route: "Luxor (or Edfu) to Marsa Alam",
    bestMonths: "March to May, and September to November; winter is warmer here than further north",
    avoid: "June to August is very hot.",
    standfirst:
      "Turtles at first light, and islands with nothing on them. The desert road from the Nile to the far south of the Red Sea, where the coast is still quiet.",
    forWhom: "Travellers who have had enough of people, and want turtles, dolphins and islands with no beach club on them.",
    days: [
      { label: "Day 1", title: "The desert road", text: "Luxor to the coast by the Edfu–Marsa Alam road, about five hours (three hours forty-five from Edfu, if you are leaving a Nile cruise)." },
      { label: "Day 2", title: "Abu Dabbab", text: "At first light, before the day buses: green turtles grazing on the seagrass, seen with a private snorkel guide. The afternoon is free." },
      { label: "Day 3", title: "The Qulaan islands", text: "South to Hamata, about an hour and a half by road, then out by boat to the Qulaan islands — small white-sand islands inside the national park — for the lagoons, the reef and, on the way home, the mangroves." },
      { label: "Day 4", title: "Samadai, or the wadi", text: "The dolphin reef of Samadai if a place within the daily quota can be had; otherwise Wadi el-Gemal with an Ababda guide, and a dark, quiet night to finish." },
      { label: "Day 5", title: "Departure", text: "From Marsa Alam airport, or by road to Hurghada (about three and a half hours)." },
    ],
    different: [
      "Islands with nothing on them — the opposite of Giftun: no concession, no loungers.",
      "The coast as the end of a journey: you arrive by the desert road from the Nile, not by charter flight.",
    ],
    privateNote: "Vehicle and driver; the snorkel guide; the boat on day 3.",
    stay: "Marsa Alam has few hotels at the standard of the rest of our catalogue. We choose a small, quiet one and describe it frankly.",
    fixed: "Flights out of Marsa Alam run on limited days, and the island boats and Samadai work to park quotas; both set the order of the days.",
    places: ["marsa-alam", "aswan", "luxor"],
    photo: { destination: "marsa-alam", index: 0 },
    alongside: ["tour-upper-egypt-5day", "tour-10-day", "tour-family-8day"],
    faqs: [
      { q: "Are the islands open to landing?", a: "They lie inside a national park and the rules decide where a boat may land, especially in the months turtles nest. We plan the boat day to what is permitted on your dates and tell you before you go." },
      { q: "How do I leave?", a: "By road to Hurghada, or by air from Marsa Alam on the days it runs — flights are limited, which is why the last day is the last thing we fix." },
    ],
    seoTitle: "The Far South: Marsa Alam & the Hamata Islands | Kemet",
    seoDescription: "Five days from Luxor to Marsa Alam by the desert road: turtles at Abu Dabbab, the Qulaan islands by private boat, and a quiet Red Sea coast. Priced on request.",
    keywords: "Marsa Alam private tour, Abu Dabbab turtles, Hamata islands, Qulaan islands boat, Wadi el-Gemal, Luxor to Marsa Alam, Samadai dolphins",
  },

  // ── 8 ───────────────────────────────────────────────────────────────────
  {
    slug: "white-desert-night",
    title: "A Night in the White Desert",
    kind: "extension",
    length: "3 days / 2 nights",
    route: "Cairo to Cairo",
    bestMonths: "October to April",
    avoid: "May to September; December to February nights are close to freezing in the open desert.",
    standfirst:
      "One night under a sky with no light in it, among chalk shaped by the wind — with an Egyptologist as well as a desert crew, and a second night in a real bed.",
    forWhom: "Travellers with two spare days in Cairo.",
    days: [
      { label: "Day 1", title: "Bahariya, the Black Desert, the White Desert", text: "Cairo to Bahariya, about four hours and a quarter. The gilded mummies at Bawiti with your Egyptologist. After lunch, by 4x4 through the Black Desert, past Crystal Mountain and the cliffs of Agabat, to the White Desert for sunset — and a private camp among the chalk." },
      { label: "Day 2", title: "Sunrise on foot", text: "Dawn on foot among the formations. Then back to the oasis: the palm gardens, a hot spring, and a night in a lodge." },
      { label: "Day 3", title: "To Cairo", text: "Bahariya to Cairo, four to five hours." },
    ],
    different: [
      "A camp that is yours, set before you arrive and with proper bedding — and the second night in a bed with a bathroom.",
      "An Egyptologist as well as a desert crew. Desert trips are usually sold with a driver-guide only.",
    ],
    privateNote: "Your Egyptologist; vehicle and driver; the 4x4 crew and the camp, pitched for your party alone.",
    stay: "A private camp, and a lodge in Bahariya, which is simple. Whether camping inside the protected area is allowed on your dates is something we confirm before you book; if it is not, the night is placed in a lodge at the edge of the desert and the evening is spent in the formations.",
    fixed: "Desert permits need weeks of notice and an official guide, and camping rules in the protected area change; we confirm both when we fix the dates.",
    places: ["bahariya-white-desert"],
    photo: { destination: "bahariya-white-desert", index: 0 },
    alongside: ["tour-cairo-culture-5day", "tour-cairo-vip-3day", "tour-fayoum"],
    faqs: [
      { q: "Is it cold?", a: "At night, yes: from December to February close to freezing in the open desert. We supply the bedding; bring warm layers for the evening." },
      { q: "Do I need a permit?", a: "Desert days need permits, which we arrange. They require weeks of notice, so tell us your dates a month ahead if you can." },
    ],
    seoTitle: "A Night in the White Desert — a 3-Day Private Camp | Kemet",
    seoDescription: "Three days from Cairo to Bahariya and the White Desert: a private camp among the chalk, an Egyptologist on the first day, and a lodge for the second night.",
    keywords: "White Desert camp private, Bahariya White Desert tour from Cairo, Black Desert Crystal Mountain, desert camping Egypt, Bawiti golden mummies",
  },

  // ── 9 ───────────────────────────────────────────────────────────────────
  {
    slug: "aswan-islands-abu-simbel",
    title: "Aswan: Islands of the First Cataract, and a Night at Abu Simbel",
    kind: "extension",
    length: "4 days / 3 nights",
    route: "Aswan to Aswan",
    bestMonths: "October to March. Around 22 February and 22 October, rooms at Abu Simbel sell out months ahead.",
    avoid: "May to September.",
    standfirst:
      "Aswan told as an archipelago, five islands in two days by water — then Abu Simbel in the late afternoon and again at sunrise, with a night beside the lake between.",
    forWhom: "Travellers who would otherwise give Aswan one rushed day and Abu Simbel a four o'clock start.",
    days: [
      { label: "Day 1", title: "Elephantine and the islands", text: "A private motorboat to Elephantine: the ruins of ancient Abu, the Nilometer, the small museum, the Nubian lanes. Sunset under sail around Kitchener's Island." },
      { label: "Day 2", title: "Upriver", text: "To Sehel for the Famine Stela and the cataract inscriptions; then Philae on its island, with Bigeh across the channel. Lunch on Heissa." },
      { label: "Day 3", title: "To Abu Simbel", text: "South by road, three to three and a half hours, or by air in forty-five minutes. The temples in the late afternoon, when the day visitors have gone; the sound and light show; a night beside the lake." },
      { label: "Day 4", title: "The temples at sunrise", text: "The temples again in the morning light, then back to Aswan and onward." },
    ],
    different: [
      "Aswan as an archipelago: five islands in two days, by water.",
      "Abu Simbel twice, in the two good lights, instead of once in the morning with every other day visitor.",
    ],
    privateNote: "Your Egyptologist; the motorboat and a felucca; vehicle and driver.",
    stay: "Aswan in the hotels our catalogue already uses. Abu Simbel has few hotels, and none matches the best in Cairo or Luxor: the night is simple, and good for its view and its hour.",
    fixed: "Flights to Abu Simbel run on set days and times; by road it is a pre-dawn start. We choose between them on your dates, and the days are placed accordingly.",
    places: ["aswan", "abu-simbel"],
    photo: { destination: "abu-simbel", index: 0 },
    alongside: ["tour-abu-simbel", "tour-upper-egypt-5day", "tour-nile-cruise"],
    faqs: [
      { q: "Is this the same as the Abu Simbel day trip?", a: "No. The day trip is an early start from Aswan and a few hours at the temples with everyone else. This one sleeps at Abu Simbel, so you see the temples at the end of one day and the start of the next." },
      { q: "When does the sun reach the inner sanctuary?", a: "Twice a year, on 22 February and 22 October, the rising sun reaches the sanctuary and lights three of its four seated statues. Those dates sell out months ahead, so tell us early if they matter." },
    ],
    seoTitle: "Aswan Islands & a Night at Abu Simbel — 4 Private Days | Kemet",
    seoDescription: "Elephantine, Philae and the islands of the First Cataract by private boat, then Abu Simbel in the late light and at sunrise. Four days, priced on request.",
    keywords: "Abu Simbel overnight, Abu Simbel sunrise, Aswan islands private boat, Elephantine Philae Sehel, Aswan felucca private, Abu Simbel night",
  },
];

export const programmeBySlug = (slug: string) => programmes.find((p) => p.slug === slug);
export const programmeRoute = (p: Programme) => `programmes/${p.slug}.html`;
