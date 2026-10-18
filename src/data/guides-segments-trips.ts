// ---------------------------------------------------------------------------
// Segment guides, October 2026 — trips built around something else: an Umrah,
// a cruise port call, a flight connection. English only. Facts that move
// (visa fees, routes, the digital visa on arrival) are dated or stated as what
// to check. Nothing here is promised that the day cannot be planned to deliver:
// the cruise page says how the day is timed, never that the ship is caught.
//
// The Umrah page follows what the Indonesian and Malay "Umrah plus Mesir"
// pages already say: Kemet arranges the Egypt part only, Egypt after the
// pilgrimage, fewer than four days is not worth it, Luxor from about eight
// days, nothing paid before the dates are fixed.
// ---------------------------------------------------------------------------
import type { Guide } from "@/types";
import { findMonth } from "@/data/months";

const temp = (month: string, place: "cairo" | "luxor" | "aswan" | "redSea") => findMonth(month)!.temps[place];
const dest = (...ids: string[]) => ids.map((id) => ({ domain: "destination" as const, id }));
const tour = (...ids: string[]) => ids.map((id) => ({ domain: "tour" as const, id }));
const guide = (...ids: string[]) => ids.map((id) => ({ domain: "guide" as const, id }));
const exp = (...ids: string[]) => ids.map((id) => ({ domain: "experience" as const, id }));

export const segmentGuidesTrips: Guide[] = [
  // ===== Umrah and Egypt ====================================================
  {
    id: "umrah-and-egypt",
    slug: "umrah-and-egypt",
    domain: "guide",
    title: "Umrah and Egypt: adding Cairo after your pilgrimage",
    locales: ["en"],
    guideType: "practical",
    category: "travel-styles",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "Adding Egypt after Umrah: Cairo is about two hours from Jeddah or Madinah. The visa by passport, Islamic Cairo, halal food, prayer times and how many days to add.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-10",
    keyFacts: [
      { label: "Jeddah or Madinah → Cairo", value: "About 2 hours, nonstop" },
      { label: "Egypt visa", value: "Follows your passport, not your Umrah visa" },
      { label: "Time difference", value: "Saudi Arabia is 1 hour ahead in winter, level in summer" },
      { label: "Best order", value: "Umrah first, then Egypt" },
      { label: "Time in Egypt", value: "3 to 7 nights" },
      { label: "What we arrange", value: "The Egypt part only" },
      { label: "Pay by", value: "PayPal, card or bank transfer" },
    ],
    keyTakeaways: [
      "Saudia, EgyptAir and flynas fly nonstop to Cairo from both Jeddah and Madinah, in about two hours",
      "Your Egypt visa depends on your passport. An Umrah visa is not a Gulf residence permit, so the residents' visa on arrival does not apply",
      "Egypt works best after the pilgrimage: late starts, shorter days, nothing that cannot be dropped",
      "Islamic Cairo deserves a full day of its own, planned around the prayer times",
      "We arrange the Egypt part only, not the Umrah or the Saudi visa, and fit it to the dates you already hold",
    ],
    sections: [
      {
        heading: "What we arrange, and what we do not",
        paragraphs: [
          "From Britain, the United States, Canada, South Africa, Nigeria, Singapore or Australia, the end of your Umrah leaves you a short flight from Cairo: a few days in Egypt without a second long-haul journey.",
          "We arrange the Egypt part: meeting you at the airport, hotels, your own licensed Egyptologist, your vehicle and driver, entrance tickets and domestic flights within Egypt. We do not organise the Umrah or the Saudi visa; that is your Umrah operator's work. We fit the Egypt days to the dates you already hold.",
        ],
      },
      {
        heading: "Flights from Jeddah and Madinah",
        paragraphs: [
          "Saudia, EgyptAir, flynas, flyadeal and others fly nonstop from Jeddah to Cairo in about two hours; Saudia, EgyptAir and flynas fly from Madinah in about the same. Saudi Arabia is one hour ahead of Cairo in winter and on the same time in summer, so there is no jet lag.",
          "Book a multi-city ticket: home to Jeddah or Madinah, then Cairo back home. From Cairo, British Airways and EgyptAir fly nonstop to London Heathrow, and EgyptAir to Manchester, Johannesburg, Lagos, New York, Washington and Toronto — check the current schedules. To Singapore or Australia it is one stop. We meet you on arrival at Cairo airport.",
        ],
        noteLink: { label: "The VIP arrival service at Cairo airport", href: "experiences/vip-airport-service.html" },
      },
      {
        heading: "The visa depends on your passport",
        paragraphs: [
          "Egypt and Saudi Arabia have separate entry rules, and the Egypt visa follows your passport. British, American, Singaporean and Australian passport holders can apply for Egypt's tourist e-visa on the official portal, visa2egypt.gov.eg, or buy a visa on arrival. South African passport holders can use the e-visa. Canadians should also read Global Affairs Canada's Egypt page, as the rules for Canadians changed recently. Nigerian passport holders cannot use either: get a visa from an Egyptian embassy before you leave for Saudi Arabia.",
          "An Umrah visa is not a residence permit, so the visa on arrival that many Gulf residents can use does not apply to pilgrims. If your passport allows it, apply for the e-visa before you leave home. The fee changed during 2026 and a further rise has been announced for January 2027: check the current amount on the official portal. Your passport should be valid for at least six months beyond your stay.",
        ],
        note: "Pay for an e-visa only on visa2egypt.gov.eg. Other sites that look official add their own fee.",
        noteType: "warning",
        noteLink: { label: "Living in the Gulf? Egypt for Gulf residents", href: "guides/egypt-for-gulf-residents.html" },
      },
      {
        heading: "Islamic Cairo, in a full day",
        paragraphs: [
          "Cairo holds a thousand years of Islamic history within a few kilometres. It deserves a day of its own, not an hour after the pyramids, and your guide orders it by geography and prayer times:",
        ],
        items: [
          "Al-Azhar Mosque, founded in the tenth century, and Al-Muizz Street, walked on foot past Mamluk madrasas",
          "The Mosque-Madrasa of Sultan Hassan, below the Citadel",
          "The Mosque of Ibn Tulun, the oldest in Cairo to survive in its original form, with its spiral minaret",
          "The Mosque of Amr ibn al-As, the first mosque built in Africa (21 AH, 641–642 CE), rebuilt over the centuries on the same site",
          "The Citadel and the alabaster Mosque of Muhammad Ali",
          "If you wish, the mausoleum of Imam al-Shafi'i",
        ],
        note: "We keep Ibn Tulun for late afternoon, when its courtyard is almost empty and the light is low.",
        noteType: "tip",
        noteLink: { label: "Religious Cairo & the Citadel, as a private day", href: "tour-religious-citadel.html" },
      },
      {
        heading: "Prayer, halal food and dress",
        paragraphs: [
          "Prayer times shape the day rather than interrupt it. There are mosques near almost every major site and a prayer room at the Grand Egyptian Museum; in Islamic Cairo you pray in the mosques you are visiting. On a Friday the morning is kept light so you can pray Jumu'ah, and visits move to the afternoon.",
          "Egypt is a Muslim-majority country, and meat in its restaurants and hotels is generally halal. There are no halal stickers, because halal is the norm. We check the exceptions in advance: international hotel restaurants that serve alcohol, foreign menus on Nile boats, and desserts made with alcohol-based flavourings.",
          "In mosques, everyone covers shoulders and knees, and women cover their hair. Bring your own scarf, and socks, since shoes come off at the door.",
        ],
        noteLink: { label: "Egyptian food, dish by dish", href: "guides/egyptian-food-guide.html" },
      },
      {
        heading: "A gentle pace, for families too",
        paragraphs: [
          "Umrah asks a great deal of body and mind, which is why Egypt works best after it: late starts, shorter days, an afternoon rest, and nothing that cannot be dropped. If your flights force the other order, we keep the Egypt days light, so you do not reach Makkah tired.",
          "With children or older parents, the private vehicle waits where you need it and the day bends around rests. Tell us ages and any mobility needs. Groups travelling together from one Umrah operator are welcome: give us the exact number early, because it decides the vehicles and the guides.",
        ],
      },
      {
        heading: "How many days, and a rest by the sea",
        paragraphs: [
          `Three nights is the shortest stay that makes sense: Giza and the Grand Egyptian Museum one day, Islamic Cairo the next. Five gives Cairo at an easy pace, with Saqqara or a free afternoon. Six or seven lets you end with a rest — on the Red Sea, ${temp("january", "redSea")} by day even in January, or in Alexandria, two and a half to three hours from Cairo by road — or add Luxor by a short domestic flight.`,
          `October to April suits sightseeing. From June to August Cairo reaches ${temp("july", "cairo")}, so we start early and rest at noon. If your Umrah falls in Ramadan, Egypt's sites stay open, many with shorter afternoon hours, and we schedule nothing across the hour before iftar, the worst traffic of the day.`,
        ],
        noteLink: { label: "Ramadan in Egypt", href: "collections/ramadan-in-egypt.html" },
      },
      {
        heading: "How a private journey works",
        paragraphs: [
          "Everything is private: your own licensed Egyptologist, in English, Arabic or any of our other guiding languages, your own vehicle and driver, and hotels chosen for the room rather than the star rating. Tell us your dates in and out of Saudi Arabia and how many of you are travelling; we reply within one working day with a real itinerary and a clear price, with no obligation.",
          "If your Umrah dates are not fixed yet, we plan with provisional ones, and nothing is paid until they are. Our prices are set in euros, and you can pay by PayPal, card or bank transfer.",
        ],
      },
    ],
    planningTips: [
      "Book a multi-city ticket: home to Jeddah or Madinah, then Cairo back home.",
      "If your passport allows it, apply for the e-visa before you leave home, on visa2egypt.gov.eg only.",
      "Nigerian passport holders: get your Egypt visa from an Egyptian embassy before you travel to Saudi Arabia.",
      "Pack a scarf and socks for mosque visits.",
    ],
    importantNotes: [
      "Kemet arranges the Egypt part of your journey only. The Umrah and the Saudi visa are arranged by your Umrah operator.",
      "An Umrah visa is not a Gulf residence permit and does not qualify you for the residents' visa on arrival in Egypt.",
      "Your passport should be valid for at least six months beyond your stay in Egypt.",
    ],
    faqs: [
      { q: "Can I visit Egypt after Umrah?", a: "Yes. Jeddah and Madinah are about two hours from Cairo by nonstop flight. Entry depends on your passport: British, American, Singaporean and Australian passport holders can use the e-visa or a visa on arrival; Nigerian passport holders need a visa from an Egyptian embassy in advance." },
      { q: "Does my Umrah visa let me into Egypt?", a: "No. An Umrah visa is not a residence permit, so the visa on arrival many Gulf residents can use does not apply. Use the visa your own passport allows, and check the current fee on visa2egypt.gov.eg — it changed during 2026." },
      { q: "Is the food in Egypt halal?", a: "Generally, yes: Egypt is a Muslim-majority country and meat in restaurants and hotels is normally halal. We check the exceptions in advance — hotel restaurants that serve alcohol, foreign menus on Nile boats, and desserts with alcohol-based flavourings." },
      { q: "How many days should we add?", a: "Three to seven nights. Three covers Giza, the Grand Egyptian Museum and a full day in Islamic Cairo; five gives Cairo at an easy pace; seven adds a rest on the Red Sea or in Alexandria, or Luxor by a short flight." },
      { q: "Does Kemet organise the Umrah?", a: "No. We arrange the Egypt part only: hotels, your Egyptologist, vehicle and driver, entrance tickets and domestic flights within Egypt. Your Umrah operator arranges the Umrah and the Saudi visa, and we fit our dates to theirs." },
    ],
    hero: {
      alt: "The white marble courtyard of Al-Azhar Mosque in Cairo, with its minarets and dome under a blue sky",
      label: "Umrah and Egypt",
      src: "/images/cairo/cairo-al-azhar-mosque-courtyard.webp",
      width: 736,
      height: 920,
    },
    seo: {
      title: "Umrah and Egypt: Adding Cairo After Umrah | Kemet",
      description:
        "Adding Egypt after Umrah: two-hour flights from Jeddah and Madinah, the visa by passport, Islamic Cairo, halal food, prayer times and how many days to add.",
    },
    relationships: {
      tours: tour("tour-religious-citadel", "tour-giza-museum", "tour-cairo-culture-5day"),
      destinations: dest("cairo", "giza", "alexandria", "hurghada"),
      experiences: exp("old-cairo-walking", "grand-egyptian-museum-private", "vip-airport-service"),
      relatedGuides: guide("egyptian-food-guide", "egypt-for-gulf-residents", "egypt-from-africa"),
    },
  },

  // ===== Cruise shore excursions ============================================
  {
    id: "egypt-cruise-shore-excursions",
    slug: "egypt-cruise-shore-excursions",
    domain: "guide",
    title: "Private shore excursions in Egypt for cruise passengers",
    locales: ["en"],
    guideType: "practical",
    category: "travel-styles",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "Private shore days from Egypt's cruise ports — Alexandria, Port Said, Safaga and Sokhna: the drive times, what fits in a port call, and how the day is planned around all-aboard.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-10",
    keyFacts: [
      { label: "Alexandria → Giza", value: "About 3 hours each way" },
      { label: "Port Said → Cairo & Giza", value: "About 3 hours each way" },
      { label: "Safaga → Luxor", value: "About 3½–4 hours each way" },
      { label: "Sokhna → Cairo", value: "About 2 hours each way" },
      { label: "Meeting point", value: "At the port" },
      { label: "Planned around", value: "Your all-aboard time, with a traffic margin" },
      { label: "Shore pass", value: "As your cruise line instructs" },
    ],
    keyTakeaways: [
      "From Alexandria you can stay in the city, or drive about three hours each way to the pyramids",
      "Port Said and Sokhna are the ports for Cairo; Safaga is the port for Luxor, three and a half to four hours away",
      "We plan the day backwards from your all-aboard time, with a margin for traffic, and fix the time to turn back before you start",
      "Your own Egyptologist and vehicle meet you at the port: no coach, and no waiting for anyone else",
      "Shore passes and port formalities are set by your cruise line; follow its instructions",
    ],
    sections: [
      {
        heading: "Why a private shore day",
        paragraphs: [
          "A shore day in Egypt is long on driving and short on time. With your own guide and vehicle, you leave as soon as you are ashore, stop where you want, and turn back at a time set for your ship. It suits passengers of any nationality who want the pyramids without a fifty-seat coach.",
          "Your Egyptologist is licensed by Egypt's Ministry of Tourism and Antiquities and can guide in English, German, Italian, Spanish, French, Russian, Portuguese, Arabic, Indonesian, Malay or Mandarin Chinese.",
        ],
      },
      {
        heading: "Alexandria: the city, or the pyramids",
        paragraphs: [
          "Alexandria's cruise port is in the city itself, so the day can stay there: the Catacombs of Kom el-Shoqafa, Pompey's Pillar, the Roman amphitheatre, the Citadel of Qaitbay on the site of the ancient Pharos lighthouse, and the Bibliotheca Alexandrina, with a seafood lunch on the Mediterranean front. Little time on the road, and plenty of margin before all-aboard.",
          "For the pyramids, Giza is roughly three hours' drive each way, depending on traffic, so about six hours of the day are spent on the road. That leaves time for the pyramids and the Sphinx. Whether the Grand Egyptian Museum, beside the plateau, also fits depends on how long your ship is in port; send us your times and we will tell you plainly.",
        ],
        noteLink: { label: "Alexandria's sights, stop by stop", href: "tour-alexandria.html" },
      },
      {
        heading: "Port Said and Sokhna: the ports for Cairo",
        paragraphs: [
          "From Port Said, Cairo and Giza are roughly three hours' drive. From Sokhna (Ain Sokhna), Cairo is roughly two. Either makes a Cairo day possible: the pyramids and the Sphinx, the Grand Egyptian Museum, or both in a long port call — more easily from Sokhna, with less time on the road.",
        ],
        noteLink: { label: "Giza & the Grand Museum: what the day covers", href: "tour-giza-museum.html" },
      },
      {
        heading: "Safaga: Luxor in a day",
        paragraphs: [
          `Safaga, on the Red Sea, is the port for Luxor, roughly three and a half to four hours' drive each way. With seven to eight hours on the road, time in Luxor is short: choose two of the major sites — Karnak, the Valley of the Kings, the Temple of Hatshepsut — rather than all of them. From May to September Luxor is hot by midday, ${temp("june", "luxor")} in June, and we set the order with that in mind.`,
        ],
      },
      {
        heading: "How we plan the day",
        paragraphs: [
          "Every shore day is planned backwards from your ship's all-aboard time. We subtract a margin for traffic and the port, and fix the latest time to leave the last site before the day begins. Your guide keeps to it.",
          "We cannot control the traffic or the port, and we do not pretend to. What we control is the plan: if the morning starts late, through a delayed berthing or a slow disembarkation, the visits are shortened, not the margin.",
          "Your guide and vehicle meet you at the port, at the terminal or the port gate depending on the port and your cruise line's arrangements. Lunch is booked in advance on the way or near the sites, so it does not eat into the visits.",
        ],
        note: "Check whether your all-aboard time is in ship's time or Egyptian local time; ships do not always keep local time. Egypt's summer time runs from the last Friday of April to the last Thursday of October.",
        noteType: "warning",
      },
      {
        heading: "Shore passes and what to bring",
        paragraphs: [
          "Shore passes and port formalities are arranged through your cruise line, and the rules depend on the port and your ship. Your cruise line will tell you what your shore pass requires; follow its instructions exactly.",
        ],
        items: [
          "The documents your cruise line asks you to carry ashore, and your ship card",
          "Comfortable closed shoes — Giza and Luxor are sand, gravel and uneven stone",
          "A hat and sun protection; bottled water is in the vehicle",
          "A scarf, and covered shoulders and knees, if a mosque is on your list",
          "Some Egyptian pounds in small notes for tips and small purchases",
        ],
      },
      {
        heading: "How a private journey works",
        paragraphs: [
          "Everything is private: your own licensed Egyptologist and your own vehicle and driver, for your party alone. Tell us your ship, the date, the port, your arrival and all-aboard times and how many of you are coming; we reply within one working day with a real plan for the day and a clear price, with no obligation. Our prices are set in euros, and you can pay by PayPal, card or bank transfer.",
        ],
      },
    ],
    planningTips: [
      "Send us the ship's name, the port, the date and the arrival and all-aboard times from your cruise documents.",
      "Confirm whether all-aboard is in ship's time or local time.",
      "From Alexandria, choose between the city and the pyramids rather than trying for both.",
      "From Safaga, pick two Luxor sites rather than four.",
    ],
    importantNotes: [
      "Shore passes and port formalities are set by your cruise line; follow its instructions.",
      "Drive times depend on traffic. The day is planned with a margin, and the visits are shortened before the margin is.",
    ],
    faqs: [
      { q: "Can we see the pyramids from Alexandria port?", a: "Yes, in a long port call. Giza is roughly three hours' drive each way, depending on traffic, which leaves time for the pyramids and the Sphinx. Whether the Grand Egyptian Museum also fits depends on your ship's times." },
      { q: "Will we be back at the ship in time?", a: "We plan for it rather than promise it. The day is worked backwards from your all-aboard time with a margin for traffic, and the time to leave the last site is fixed before you start. If anything runs late, the visits are shortened, not the margin." },
      { q: "How far is Luxor from Safaga?", a: "Roughly three and a half to four hours' drive each way. Time in Luxor is limited, so we choose two of the major sites — Karnak, the Valley of the Kings, the Temple of Hatshepsut — to suit your port times." },
      { q: "Do we need a visa for a shore excursion?", a: "Shore passes and port formalities are arranged through your cruise line, and the requirements depend on the port and your ship. Your cruise line will tell you what your shore pass requires." },
      { q: "Can friends from the ship join us?", a: "Yes. The guide and vehicle are for your party, whoever is in it. Tell us how many of you are coming so we choose the right vehicle." },
    ],
    hero: {
      alt: "The Citadel of Qaitbay in Alexandria, at the end of a paved approach lined with old cannons and palms",
      label: "Shore excursions in Egypt",
      src: "/images/alexandria/alexandria-qaitbay-citadel.webp",
      width: 736,
      height: 981,
    },
    seo: {
      title: "Egypt Shore Excursions: Private Port Days | Kemet",
      description:
        "Private shore excursions from Alexandria, Port Said, Safaga and Sokhna: drive times to the pyramids and Luxor, and how the day is planned around all-aboard.",
    },
    relationships: {
      tours: tour("tour-giza-sphinx", "tour-giza-museum", "tour-alexandria"),
      destinations: dest("alexandria", "giza", "cairo", "luxor"),
      experiences: exp("grand-egyptian-museum-private", "alexandria-heritage-walk"),
      relatedGuides: guide("cairo-layover-tour", "transportation-in-egypt"),
    },
  },

  // ===== Cairo layover ======================================================
  {
    id: "cairo-layover-tour",
    slug: "cairo-layover-tour",
    domain: "guide",
    title: "A Cairo layover: the pyramids between flights",
    locales: ["en"],
    guideType: "practical",
    category: "travel-styles",
    parentGuideId: "egypt-travel-guide",
    shortSummary:
      "Seeing the pyramids on a Cairo layover: who can leave the airport, how many hours you need, what fits between flights, luggage, and which of Cairo's two airports you use.",
    difficulty: "easy",
    readingTimeMinutes: 6,
    lastUpdated: "2026-10",
    keyFacts: [
      { label: "Layover needed", value: "At least 8–9 hours between flights" },
      { label: "Cairo airport → Giza", value: "About 1 hour in normal traffic" },
      { label: "To leave the airport", value: "The visa your passport requires" },
      { label: "What fits", value: "Pyramids & Sphinx, or the Grand Egyptian Museum" },
      { label: "Airports", value: "Cairo International (CAI) or Sphinx International (SPX)" },
      { label: "Book with", value: "Both flight numbers" },
    ],
    keyTakeaways: [
      "Leaving the airport means entering Egypt: you need the visa your passport requires, and enough time",
      "Allow at least eight to nine hours between flights for the pyramids and the Sphinx, or for the Grand Egyptian Museum",
      "Giza is about an hour from Cairo International in normal traffic, longer at rush hour",
      "Check your ticket: flydubai and some other airlines use Sphinx International near Giza, not Cairo International",
      "Book with your flight numbers: the plan is built around your onward departure",
    ],
    sections: [
      {
        heading: "Can you leave the airport?",
        paragraphs: [
          "Leaving the airport means entering Egypt, so you need the visa your passport requires, exactly as if you were staying a week. Many passports can use Egypt's tourist e-visa, applied for on the official portal visa2egypt.gov.eg, or buy a visa on arrival. For a layover, get the e-visa before you travel if your passport allows it: it is one less queue.",
          "The paper visa on arrival is paid in cash. At Cairo International, a digital visa on arrival, paid by card and issued as a QR code, has run as a pilot since 1 August 2026; other airports still issue the paper sticker. The fee changed during 2026 and a further rise has been announced for January 2027, so check the current amount on the official portal.",
          "Some passports, Nigerian, Kenyan and Ghanaian among them, need a visa from an Egyptian embassy before travel. Your passport should be valid for at least six months beyond your stay.",
        ],
        note: "Pay for an e-visa only on visa2egypt.gov.eg. Other sites that look official add their own fee.",
        noteType: "warning",
      },
      {
        heading: "How long a layover you need",
        paragraphs: [
          "We suggest at least eight to nine hours between flights. Giza is about an hour's drive from Cairo International in normal traffic, but the hours go elsewhere. Roughly:",
        ],
        items: [
          "Arrival: immigration, the visa if you are buying one, and meeting your guide",
          "About an hour's drive to Giza, longer at rush hour",
          "Two to three hours at the pyramids and the Sphinx",
          "About an hour back to the airport",
          "Check-in and security, in the time your airline asks for",
        ],
      },
      {
        heading: "What fits between flights",
        paragraphs: [
          "With eight to nine hours: the pyramids of Khufu, Khafre and Menkaure, the panoramic viewpoint where all three line up, and the Valley Temple leading to the Great Sphinx. It is our half-day Giza tour, timed to your flights.",
          `Or the Grand Egyptian Museum instead: about four hours with your Egyptologist for the complete Tutankhamun collection, the grand staircase of royal statues and Khufu's solar boat. It is air-conditioned, which matters from June to August, when Cairo reaches ${temp("july", "cairo")} by day.`,
          "Both need a longer layover. Our Giza & the Grand Museum day runs about eight hours on its own, before the airport at each end.",
        ],
        noteLink: { label: "Giza Pyramids & Sphinx, the half-day tour", href: "tour-giza-sphinx.html" },
      },
      {
        heading: "Which airport: Cairo International or Sphinx International",
        paragraphs: [
          "Most flights use Cairo International (CAI). Some airlines, flydubai among them, use Sphinx International (SPX), west of Cairo near Giza. Check the ticket for both flights: the airport changes the drive and the meeting point. Landing at one and leaving from the other means crossing Greater Cairo, so allow more time.",
          "At Cairo International, our VIP meet-and-assist service runs in every terminal, around the clock, with advance booking. You are met at the aircraft door or jet bridge by name, taken through the fast-track immigration lane with your visa handled, and walked to your driver; on departure it runs in reverse. The visa fee itself is separate. If your flight uses Sphinx International, tell us, because the meeting arrangements are different.",
        ],
        noteLink: { label: "VIP airport meet & assist", href: "experiences/vip-airport-service.html" },
      },
      {
        heading: "Your luggage",
        paragraphs: [
          "If both flights are on one ticket, ask your airline whether your checked bags go through to your final destination. If they do, you leave the airport with hand luggage only, and it can stay in your private vehicle while you visit. If they do not, or your flights are on separate tickets, you collect your bags and check them in again, which takes time we build into the plan. Keep your passport and boarding passes with you.",
        ],
      },
      {
        heading: "Night layovers",
        paragraphs: [
          "Landing in the evening? The Sound & Light show at Giza is an hour-long show after dark, with the pyramids and the Sphinx lit against the desert. Showtimes vary by season and the languages rotate, with English most nights; it takes about three hours door to door from a Cairo or Giza hotel.",
          "If your onward flight leaves late morning or later, sunrise at Giza is the other choice: a quiet desert viewpoint before dawn, then the plateau with your Egyptologist before the day visitors arrive, in three to four hours. A hotel room for a few hours' sleep makes either far easier.",
        ],
        noteLink: { label: "The Pyramids Sound & Light show, privately", href: "experiences/giza-sound-light-private.html" },
      },
      {
        heading: "Book with your flight numbers",
        paragraphs: [
          "Send us both flight numbers when you book. We follow the inbound flight, so a delay moves the meeting rather than cancelling it — but a long delay shortens the visit, because the onward flight always comes first. The time you must leave Giza is fixed before the day begins, worked back from your departure.",
        ],
      },
      {
        heading: "How a private journey works",
        paragraphs: [
          "Everything is private: your own licensed Egyptologist, in any of our guiding languages, and your own vehicle and driver. Tell us your flights, the date and how many of you are travelling; we reply within one working day with a real plan and a clear price, with no obligation. Our prices are set in euros, and you can pay by PayPal, card or bank transfer.",
        ],
      },
    ],
    planningTips: [
      "Get the e-visa before you travel if your passport allows it — one less queue on the day.",
      "Check which airport each flight uses: Cairo International or Sphinx International.",
      "Ask your airline whether your checked bags go through to your final destination.",
      "Send both flight numbers when you book.",
    ],
    importantNotes: [
      "Leaving the airport means entering Egypt: without the visa your passport requires, you cannot leave.",
      "Allow at least eight to nine hours between flights; your onward flight always comes first.",
      "Your passport should be valid for at least six months beyond your stay.",
    ],
    faqs: [
      { q: "Can I see the pyramids on a Cairo layover?", a: "Yes, with enough time and the right visa. Allow at least eight to nine hours between flights: Giza is about an hour from Cairo International in normal traffic, and you need time for immigration on arrival and check-in before your onward flight." },
      { q: "Do I need a visa to leave Cairo airport on a layover?", a: "Yes. Leaving the airport means entering Egypt, so you need the visa your passport requires: the e-visa from visa2egypt.gov.eg or a visa on arrival, where your passport allows. Nigerian, Kenyan and Ghanaian passport holders, among others, need a visa from an Egyptian embassy in advance." },
      { q: "What can I do with a nine-hour layover in Cairo?", a: "The Giza pyramids and the Sphinx, or the Grand Egyptian Museum: one or the other. Both need a longer layover, because our Giza & the Grand Museum day runs about eight hours on its own." },
      { q: "What do I do with my luggage?", a: "If your checked bags go through to your final destination, you leave the airport with hand luggage only, and it can stay in your private vehicle while you visit. If they do not, you collect and re-check them, which takes time we build into the plan." },
      { q: "Which Cairo airport does flydubai use?", a: "Sphinx International (SPX), west of Cairo near Giza, not Cairo International. Some other airlines use it too, so check the ticket for both flights." },
      { q: "Is there anything to do on a night layover?", a: "Yes. The Sound & Light show at Giza runs in the evening, about three hours door to door from a Cairo or Giza hotel. If your onward flight leaves late morning or later, sunrise at the pyramids is the other choice." },
    ],
    hero: {
      alt: "The pyramids of Giza in silhouette against the sun low on the horizon",
      label: "A Cairo layover",
      src: "/images/stock/giza-pyramids-sunrise-sky.webp",
      width: 2400,
      height: 1440,
    },
    seo: {
      title: "Cairo Layover Tour: Pyramids Between Flights | Kemet",
      description:
        "See the pyramids on a Cairo layover: the visa to leave the airport, how many hours you need, what fits between flights, luggage, and Cairo's two airports.",
    },
    relationships: {
      tours: tour("tour-giza-sphinx", "tour-giza-museum", "tour-cairo-vip-3day"),
      destinations: dest("giza", "cairo"),
      experiences: exp("vip-airport-service", "grand-egyptian-museum-private", "giza-sound-light-private", "sunrise-giza-pyramids"),
      relatedGuides: guide("transportation-in-egypt", "egypt-cruise-shore-excursions"),
    },
  },
];
