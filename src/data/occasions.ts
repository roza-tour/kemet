// ---------------------------------------------------------------------------
// Occasions — journeys defined by the reason for travelling, not the season or
// the itinerary shape.
//
// WHY THESE AND NOT OTHERS
// The collections already cover *when* and *what kind* of Egypt (winter,
// honeymoon, family, first-time, Red Sea…). These pages answer a different
// question: something is being marked, and that changes the planning. They are
// deliberately chosen not to duplicate an existing collection — there is no
// "honeymoon" or "family" page here, because collections/honeymoon-egypt and
// collections/family-egypt already own those queries and competing with our own
// pages would only split them.
//
// POSITIONING
// Every occasion below is one that people plan properly and spend on. The copy
// assumes a traveller who is choosing between doing something well and not
// doing it — never between us and the cheapest option. Nothing here promises a
// service we cannot deliver: where access depends on permissions we say so.
// ---------------------------------------------------------------------------

export interface OccasionIdea {
  /** Short label for the idea. */
  title: string;
  /** The concrete version — a real place, a real hour, a real arrangement. */
  body: string;
}

export interface Occasion {
  slug: string;
  /** Page H1. */
  title: string;
  /** Breadcrumb / card label — shorter. */
  label: string;
  /** SymbolIcon name. */
  symbol: string;
  /** One line for cards and the hub. */
  shortSummary: string;
  /** Meta description — kept under 165 characters. */
  metaDescription: string;
  /** Opening paragraph, sets the tone. */
  lede: string;
  /** What is different about planning this particular kind of journey. */
  whatChanges: string;
  /** Concrete suggestions. Specific enough to be useful, honest about limits. */
  ideas: OccasionIdea[];
  /** Practical points that genuinely matter for this occasion. */
  practical: string[];
  /** Tour categories that suit — used to surface real journeys. */
  suitedCategories: string[];
  faqs: Array<{ q: string; a: string }>;
  /** Search terms this page is written to answer. */
  keywords: string[];
}

export const occasions: Occasion[] = [
  // =========================================================================
  {
    slug: "proposal-in-egypt",
    title: "Proposing in Egypt",
    label: "A proposal",
    symbol: "lotus",
    shortSummary: "One moment, planned to the minute, in a country built for them.",
    metaDescription:
      "How to propose in Egypt — the settings that work, the timing that matters, and how a private journey is planned around a single moment.",
    lede:
      "There is a version of this where you carry a ring through four airports, wait for the right moment, and it never quite arrives — the light is wrong, there are two hundred people at the viewpoint, the guide is mid-sentence about Ramesses II. And there is the version where the moment is the fixed point and the entire day is built backwards from it. We plan the second one.",
    whatChanges:
      "Everything is arranged around a single quarter of an hour. That means knowing which sites empty and when, which terraces face the right way at sunset, and where you can be alone without being anywhere difficult. It also means your Egyptologist knows exactly what is happening and exactly when to walk twenty paces away — and that nobody else does, including whoever you are travelling with, if that is what you want.",
    ideas: [
      {
        title: "The Giza plateau, early",
        body:
          "The plateau opens before the coaches arrive and the light between seven and eight is long and gold. The southern viewpoint gives you all three pyramids with nothing in the frame but sand. It is the most photographed view in the world and, for about forty minutes a day, one of the emptiest.",
      },
      {
        title: "A felucca off Aswan at sunset",
        body:
          "A private felucca, one boatman, no engine. The river goes copper, Elephantine Island passes on one side and the Tombs of the Nobles on the other, and there is genuinely nobody else on board. Of everything in Egypt this is the setting most people describe afterwards without being able to explain why.",
      },
      {
        title: "A rooftop above Islamic Cairo",
        body:
          "The call to prayer moves across the medieval city from a dozen minarets at slightly different moments, which is a sound rather than a noise. A restored rooftop above Al-Muizz Street at dusk, a table for two, and the whole of Fatimid Cairo below.",
      },
      {
        title: "Philae, on the water",
        body:
          "The temple of Isis sits on its own island and you arrive by motorboat. Late afternoon, when the day's visitors have gone back across, the colonnade is empty and the light comes off the water onto the columns. Isis and Osiris is the oldest love story anyone here knows, which is either too obvious or exactly right.",
      },
      {
        title: "The Western Desert, at night",
        body:
          "If you want somewhere nobody has proposed before: the White Desert, three hours west of the oasis road, where the chalk formations are the colour of bone and there is no light for a hundred kilometres in any direction. A private camp, a cook, and more stars than most people have seen in their lives.",
      },
    ],
    practical: [
      "Tell us early — some of these need permissions, a specific boat, or a table that holds four months out.",
      "Carry the ring in hand luggage, not checked. Egyptian customs are relaxed about personal jewellery; airlines are not relaxed about lost bags.",
      "Photography can be arranged discreetly, from a distance, so the moment is not staged and you still have it afterwards. Say the word and it is handled without anyone visible.",
      "October to April gives you the light and the temperature. May to September the desert and the Nile are still workable at dawn and dusk, but the middle of the day is not.",
      "If it goes to plan, the rest of the journey should not be a schedule. We leave the days after deliberately loose.",
    ],
    suitedCategories: ["Honeymoon", "Signature Journey", "Nile Cruise"],
    faqs: [
      {
        q: "Where is the best place to propose in Egypt?",
        a: "There is no single answer, but the four settings that work most reliably are the Giza plateau in the first hour after opening, a private felucca off Aswan at sunset, the island temple of Philae late in the afternoon, and a rooftop above Islamic Cairo at dusk. Each is private enough to feel like yours and photogenic enough that you will want the picture afterwards.",
      },
      {
        q: "Can you arrange a private proposal at the Pyramids?",
        a: "We can plan your arrival for the quietest hour, position you at the viewpoints most people never reach, and have your Egyptologist step away at the right moment. Genuinely exclusive after-hours access to the plateau depends on permissions that are granted case by case by the antiquities authorities and cannot be promised in advance — where it is possible we will tell you honestly what is involved, and where it is not we will say so rather than take your money for a maybe.",
      },
      {
        q: "How far in advance should I plan a proposal trip?",
        a: "Three months is comfortable; six is better if you want a specific boat, a particular table or a desert camp. Some of these are single-unit arrangements — there is one dahabiya, one terrace, one sunset — and they are taken by people who booked earlier.",
      },
      {
        q: "Can you keep it a secret from my partner?",
        a: "Yes, and we plan for it. Correspondence goes to one address only, the written itinerary can be produced in two versions, and your guide is briefed separately. It is not the first time we have done this.",
      },
    ],
    keywords: [
      "propose in egypt", "proposal at the pyramids", "romantic egypt proposal",
      "where to propose in egypt", "engagement trip egypt", "private felucca aswan sunset",
    ],
  },

  // =========================================================================
  {
    slug: "anniversary-in-egypt",
    title: "Anniversaries and milestone birthdays",
    label: "A milestone",
    symbol: "ankh",
    shortSummary: "For the birthdays that end in a zero and the years worth marking.",
    metaDescription:
      "Planning a milestone birthday or a significant anniversary in Egypt — how the journey changes when the trip is the occasion, not a holiday.",
    lede:
      "A fortieth, a sixtieth, twenty-five years married, a retirement that has been earned twice over. These trips are different from holidays in a way that is easy to miss: the traveller is not trying to see as much as possible. They have chosen this place, for this year, on purpose — and what they want is for it to be good, not for it to be full.",
    whatChanges:
      "The pace slows and the standard rises. We cut the itinerary rather than pad it, spend the saving on where you sleep and who guides you, and build in the things a normal trip treats as optional — the long lunch, the afternoon with nothing in it, the second visit to the one temple that turned out to matter. On a milestone journey the question is never how many sites we can fit; it is which four you will still be describing in ten years.",
    ideas: [
      {
        title: "A dahabiya instead of a cruise ship",
        body:
          "Ten cabins instead of a hundred and forty. A sailing boat that moors where the ships cannot, at villages with no dock, and that stops when you want to swim. It is the single largest upgrade available on the Nile and it is not a matter of thread count — it is a different river.",
      },
      {
        title: "The room, not the hotel",
        body:
          "In Cairo there are perhaps a dozen rooms with a real, unobstructed pyramid view, and several hundred rooms in hotels that advertise one. In Luxor the difference between a river-facing room and a garden-facing room at the same address is the difference between waking up in Egypt and waking up in a hotel. We book the room, not the property.",
      },
      {
        title: "A day built around one thing",
        body:
          "The Valley of the Kings at opening with the extra-ticket tombs — Seti I, Nefertari — included rather than debated at the gate. Then nothing. Lunch that lasts two hours, an afternoon by the water, and dinner somewhere that took a month to book. One thing done completely beats four done adequately.",
      },
      {
        title: "Something nobody in the family has done",
        body:
          "A dawn balloon over the West Bank of Luxor, going up in the dark and watching the sun come off the Theban hills onto the colossi below. Or Abu Simbel at first light, four hours before the day-trippers land. Milestones want a photograph that is not the same photograph everybody has.",
      },
      {
        title: "The private table",
        body:
          "Dinner in a restored Ottoman house in Cairo, in a garden in Aswan, or on the deck with the boat moored and the crew ashore. Where a celebration meal can be arranged privately we will arrange it; where a venue will not do it properly we will tell you rather than book it anyway.",
      },
    ],
    practical: [
      "Tell us what is being marked and roughly what you would like the trip to feel like. That single sentence changes the itinerary more than any list of sites.",
      "For a party of four or more the per-person cost falls sharply — a private journey divides its fixed costs across your party, so a milestone shared with family is often better value per head than the same trip for two.",
      "October to April is the comfortable half of the year. If the date is fixed and it lands in summer, the answer is dawn starts, the Red Sea, and Upper Egypt at the very beginning and end of the day.",
      "Dietary requirements, mobility, a knee that does not do stairs — say so at the planning stage. It changes which tombs we choose, not whether you see them.",
      "Anything time-critical — a cake, a specific table, a gift delivered to the room — is arranged in writing beforehand, not left to the day.",
    ],
    suitedCategories: ["Signature Journey", "Grand Tour", "Nile Cruise", "Honeymoon"],
    faqs: [
      {
        q: "Can you arrange a birthday celebration during the trip?",
        a: "Yes. A private dinner, a cake, a table on the deck or in a garden, a gift in the room on the right morning — all of it is arranged in advance and confirmed in writing, so nothing depends on a conversation at reception on the night. Tell us the date and what you have in mind.",
      },
      {
        q: "What is a dahabiya, and is it worth it?",
        a: "A dahabiya is a small sailing boat — typically eight to twelve cabins — that works the Nile the way boats did before engines. It moors at villages the large ships cannot reach, carries a tenth of the passengers, and is quiet. It costs meaningfully more than a standard cruise vessel. For a milestone journey it is the upgrade we recommend before any other.",
      },
      {
        q: "We are travelling as a group of six for a significant birthday. Does that work?",
        a: "It works better than two, both practically and financially. A private guide, vehicle and driver cost the same for six as for two, so the per-person price drops substantially. Six is also the size where a private boat, a private table and a private vehicle stop being extravagant and start being obvious.",
      },
      {
        q: "How far ahead should we book a milestone trip?",
        a: "Six months for a fixed date in high season, particularly if a dahabiya or a specific hotel room is part of the plan — there are very few of each and they go early. Three months is workable outside December, January and Easter.",
      },
    ],
    keywords: [
      "milestone birthday egypt", "anniversary trip egypt", "60th birthday trip egypt",
      "special occasion egypt travel", "dahabiya nile cruise", "celebrate anniversary in egypt",
    ],
  },

  // =========================================================================
  {
    slug: "private-group-egypt",
    title: "A private group, not a group tour",
    label: "A private group",
    symbol: "scarab",
    shortSummary: "Six to sixteen people who already know each other, and nobody who doesn't.",
    metaDescription:
      "Private group travel in Egypt for six to sixteen — your own Egyptologist, your own vehicle, your own itinerary, and nobody outside your party.",
    lede:
      "There is a persistent confusion in this industry between a group tour and a group travelling privately. The first sells you a seat next to a stranger on a fixed date. The second is a journey that belongs entirely to your party — a family that has grown, a set of friends who have been threatening this for years, a small company taking its people somewhere that is not a conference hotel. The size is similar. Nothing else is.",
    whatChanges:
      "Larger parties make private travel cheaper per person, not more expensive, because the guide, the vehicle and the driver are shared across more people rather than fewer. What changes is coordination: room configurations that actually suit who is sharing with whom, a pace that works for the slowest walker without boring the fastest, and — above a certain size — a second guide so nobody is at the back of a group of sixteen straining to hear.",
    ideas: [
      {
        title: "One boat, entirely yours",
        body:
          "A dahabiya has eight to twelve cabins. At the right party size you take the whole boat: no other passengers, no fixed dinner sitting, no schedule but yours. It is the cleanest version of private group travel that exists in Egypt and, split across twelve people, it is not the number most people expect.",
      },
      {
        title: "Two guides, one itinerary",
        body:
          "Above about ten people, one guide talking to everyone means half the party hears half of it. Two Egyptologists let the group split naturally — the ones who want the full hour in the tomb, and the ones who want the courtyard and the shade — and rejoin for lunch.",
      },
      {
        title: "Days that fork and rejoin",
        body:
          "Nobody in a group of twelve wants the same Tuesday. We build days that split — a balloon at dawn for the six who want it, a slow morning for the six who do not — and put everyone back together for the afternoon. This is only possible when the vehicles and guides are yours.",
      },
      {
        title: "The long table",
        body:
          "The part people remember is rarely a monument. It is the dinner where all twelve of you were at one table on a deck, or in a garden in Aswan, or on a roof in Cairo. Private group travel is the only version where that table can be arranged properly every single night.",
      },
    ],
    practical: [
      "Six is where the economics turn decisively in your favour. Twelve is where a whole boat becomes reasonable. Above sixteen we plan it as two coordinated parties rather than one large one — the experience degrades past that point and we would rather say so.",
      "One person is the point of contact for planning, but we are happy to send the itinerary to everyone. Group trips fall apart over information, not over money.",
      "Room configuration is the single most common source of friction. Send us who is sharing with whom at the start, not after the hotels are held.",
      "Pace is set by the party, not the plan. Tell us honestly about mobility, ages and stamina and the itinerary is built for the real group rather than the ideal one.",
      "A deposit confirms the whole party; individual balances can be settled separately if that is easier.",
    ],
    suitedCategories: ["Grand Tour", "Signature Journey", "Family Journey", "Nile Cruise"],
    faqs: [
      {
        q: "What is the difference between a private group and a group tour?",
        a: "A group tour sells individual seats on a fixed departure — you travel with strangers, on their dates, following an itinerary you cannot change. A private group journey is the opposite in every respect: everyone travelling knows each other, the dates are yours, and the itinerary is written for your party alone. Kemet only does the second.",
      },
      {
        q: "How many people can travel together?",
        a: "Comfortably up to about sixteen. Six to twelve is the range where a private journey works best — large enough that the per-person cost is low, small enough that one table, one boat and one conversation still work. Above sixteen we plan it as two parallel parties with coordinated logistics rather than pretending a group of thirty is intimate.",
      },
      {
        q: "Is a private group cheaper per person than travelling as a couple?",
        a: "Usually, and often substantially. The guide, the vehicle and the driver cost the same regardless of how many people use them, so the per-person share falls as the party grows. A family of eight frequently pays less per head for a fully private journey than a couple pays for the same itinerary.",
      },
      {
        q: "Can we charter an entire Nile boat?",
        a: "Yes. A dahabiya typically has eight to twelve cabins and can be taken whole. A standard cruise vessel can also be chartered but the economics rarely justify it — the dahabiya is the better boat and the sensible size for a private party.",
      },
      {
        q: "Can everyone pay separately?",
        a: "Yes. One deposit confirms the journey, and individual balances can be settled separately if that suits the party better. We will invoice however is easiest.",
      },
    ],
    keywords: [
      "private group tour egypt", "egypt group travel", "charter dahabiya nile",
      "egypt tour for large family", "private egypt tour for friends", "small group egypt private",
    ],
  },

  // =========================================================================
  {
    slug: "returning-to-egypt",
    title: "Returning to Egypt",
    label: "A second visit",
    symbol: "eye",
    shortSummary: "You have done Giza, Karnak and the Valley. This is the rest of it.",
    metaDescription:
      "A second visit to Egypt — Abydos, Dendera, the Fayoum, Siwa and the sites nobody queues for, planned for travellers who have done the highlights.",
    lede:
      "Most of Egypt's visitors see the same eight places, and they are the eight places for good reason. But the country holds several thousand years and about ten times as many sites, and the ones that go unvisited are not lesser — they are simply further from the airport. If you have already stood in the hypostyle hall at Karnak, this is a different country and it is largely empty.",
    whatChanges:
      "The itinerary stops being a checklist and becomes a subject. Second visits are usually organised around a thread — a dynasty, a material, a region, a question — rather than around the map. They also go slower and further: the sites are more spread out, the roads are longer, and the reward is standing in a painted hall with nobody else in it, which almost never happens at the headline sites.",
    ideas: [
      {
        title: "Abydos and Dendera",
        body:
          "Two of the most complete temples in Egypt, both reachable from Luxor, both largely ignored. The Osireion at Abydos is the strangest structure in the country and the ceiling at Dendera — the astronomical zodiac, the colour still on it after two thousand years — is the single best-preserved painted surface most visitors never see.",
      },
      {
        title: "The Fayoum",
        body:
          "Ninety minutes from Cairo: a lake below sea level, the Valley of the Whales with its forty-million-year-old fossil skeletons in open desert, Greco-Roman mummy portraits that look uncannily like photographs, and pottery villages still working. It is the easiest genuinely unvisited day in Egypt.",
      },
      {
        title: "Siwa",
        body:
          "Ten hours from Cairo or a flight and a drive, hard against the Libyan border, and unlike anywhere else in the country — a Berber oasis with its own language, a mud-brick fortress town, salt lakes you float in, and the oracle Alexander crossed the desert to consult. It takes three days minimum and it is worth every one of them.",
      },
      {
        title: "Middle Egypt",
        body:
          "Beni Hasan, Tuna el-Gebel, Amarna. The rock tombs of the Middle Kingdom and the abandoned capital of the heretic pharaoh Akhenaten, in a stretch of the country almost nobody visits. The wall paintings at Beni Hasan — wrestlers, hunters, everyday life in 1900 BCE — are as good as anything in the Valley.",
      },
      {
        title: "The one site you did not finish",
        body:
          "Second visits often have an unfinished piece: the tomb that was closed, the museum wing you ran out of time for, the temple you saw at the wrong hour. Say what it was. Building the trip around going back properly to one place is a better plan than most itineraries we are asked for.",
      },
    ],
    practical: [
      "Allow more days than the map suggests. Abydos and Dendera together are a long day from Luxor; Middle Egypt and Siwa need overnights.",
      "The guide matters more on a second visit than a first. Ask us for someone with a specialism — Ptolemaic, Coptic, prehistory, the Amarna period — and we will match rather than allocate.",
      "Some sites in Middle Egypt require a police escort as routine procedure. It is arranged in advance, adds no cost, and changes nothing about the day beyond a vehicle in front of yours.",
      "Accommodation thins out quickly away from the Nile corridor. In the Fayoum and Siwa the best places are small and take few guests; book early or accept the second choice.",
      "October to March, without exception. Middle Egypt and the Western Desert in summer are not a matter of comfort but of feasibility.",
    ],
    suitedCategories: ["Cultural Journey", "Grand Tour", "Photography Journey", "Signature Journey"],
    faqs: [
      {
        q: "What is there to see in Egypt beyond the Pyramids and Luxor?",
        a: "A great deal, and most of it is empty. Abydos and Dendera north of Luxor are among the most complete temples in the country. The Fayoum, ninety minutes from Cairo, holds a fossil valley and Greco-Roman portraiture. Middle Egypt has Beni Hasan and Akhenaten's abandoned capital at Amarna. Siwa, on the Libyan border, is a Berber oasis unlike anywhere else in Egypt. None of these has a queue.",
      },
      {
        q: "Is a second trip to Egypt worth it?",
        a: "For the right traveller it is better than the first. The headline sites are extraordinary and also crowded; the second tier is nearly as extraordinary and frequently deserted. A second visit also allows a subject rather than a survey — one dynasty, one region, one question followed properly across a fortnight.",
      },
      {
        q: "How many days do I need for Siwa?",
        a: "Three at an absolute minimum, and five is the honest answer. It is ten hours by road from Cairo, or a flight to Marsa Matruh and a four-hour drive. Anything shorter spends more of the trip travelling than being there.",
      },
      {
        q: "Can you arrange a specialist guide?",
        a: "Yes, and on a second visit it is the thing we would spend on first. Our Egyptologists have specialisms — the Amarna period, Ptolemaic temples, Coptic Egypt, prehistory, hieroglyphic epigraphy. Tell us the thread you want to follow and we match the guide to it rather than assigning whoever is free.",
      },
    ],
    keywords: [
      "second trip to egypt", "off the beaten path egypt", "abydos dendera tour",
      "siwa oasis travel", "middle egypt amarna beni hasan", "unusual places to visit in egypt",
    ],
  },

  // =========================================================================
  {
    slug: "three-generations-egypt",
    title: "Three generations, one journey",
    label: "Three generations",
    symbol: "palm",
    shortSummary: "Grandparents, parents and children in one country, at one pace that works.",
    metaDescription:
      "Planning an Egypt journey across three generations — pace, access, room configurations and the sites that hold a nine-year-old and a seventy-nine-year-old at once.",
    lede:
      "This is the hardest trip to plan well and the one people are most glad they did. A nine-year-old and a seventy-nine-year-old want genuinely different things from a Tuesday, and the failure mode is not disagreement — it is a compromise that suits neither, with everyone politely exhausted by day four. It is entirely solvable, but not by an itinerary bought off a page.",
    whatChanges:
      "The plan is built around energy rather than around sites. Mornings go to whoever needs the cool hours, afternoons fork, and every day has a genuine off-ramp — a way for one part of the party to stop without the rest having to. It also means being honest about access before you arrive: which tombs have steep steps and no handrail, which sites are sand rather than path, and where a wheelchair genuinely works and where it does not.",
    ideas: [
      {
        title: "One base, several days",
        body:
          "Changing hotels is the most tiring thing a multi-generational party does. Staying four nights in Luxor and travelling out each day beats two nights here and two there, even when the map argues otherwise. Fewer suitcases, fewer check-ins, and a pool everyone can retreat to.",
      },
      {
        title: "A boat solves several problems at once",
        body:
          "On the Nile the hotel moves and you do not. Grandparents can stay aboard when a temple is one temple too many, children have space and water, and everyone reconvenes for dinner. For three generations a cruise is not a luxury choice, it is a logistical one.",
      },
      {
        title: "The sites that hold everyone",
        body:
          "Some work across all three ages without effort: the Grand Egyptian Museum, because scale does the work; Abu Simbel, for the same reason; a felucca, because nobody has to walk; the camel road at Giza; Philae, reached by boat. Others — the deeper tombs, the long climbs — are best planned as optional for whoever wants them.",
      },
      {
        title: "Split the day, not the family",
        body:
          "The most useful thing a private journey gives a large family is the ability to fork. A second vehicle for one morning means the grandparents get Karnak at eight and back by eleven, the teenagers get the balloon, the small ones get the pool — and everybody has lunch together and tells the others about it.",
      },
      {
        title: "Rooms, properly configured",
        body:
          "Interconnecting rooms for parents and small children, a ground floor or a lift for grandparents, and enough separation that the teenagers are not sharing with anybody. This is booked at the start, not requested at reception. It is boring and it decides how the week feels.",
      },
    ],
    practical: [
      "Tell us the ages. Not roughly — actually. A six-year-old and a twelve-year-old are different trips, and so are a fit seventy-year-old and a seventy-year-old with a bad hip.",
      "Say plainly what anyone cannot do: stairs, heat, long walks, early starts. We plan around it rather than discovering it at the entrance to a tomb.",
      "Egyptian sites are largely unshaded and often sand underfoot. Wheelchair access is real at the major museums and limited to non-existent inside most tombs — we will tell you site by site before you commit.",
      "Domestic flights instead of long drives are worth the cost on this trip more than on any other. Ten hours in a vehicle is what turns a good week into a hard one.",
      "October to April. With children out of school in summer, the answer is the Red Sea plus dawn starts in Upper Egypt — not midday at Karnak in August.",
      "Per person, this is the cheapest way for a large family to travel privately: the guide and the vehicle are split across everyone.",
    ],
    suitedCategories: ["Family Journey", "Nile Cruise", "Signature Journey", "Grand Tour"],
    faqs: [
      {
        q: "Is Egypt suitable for grandparents and young children together?",
        a: "Yes, with a plan built for it. The requirements are a slower pace, days that can fork so one part of the party can stop, few hotel changes, and honest information about which sites involve stairs, heat and uneven ground. A private journey makes all four possible; a coach tour makes none of them possible.",
      },
      {
        q: "Is Egypt wheelchair accessible?",
        a: "Partly, and the honest answer varies enormously by site. The Grand Egyptian Museum and the Egyptian Museum are largely step-free. The Giza plateau is manageable at the viewpoints. Most tombs in the Valley of the Kings involve steep ramps or steps with no handrail, and many temples are uneven stone. We will go through it site by site before you book rather than after you arrive.",
      },
      {
        q: "What is the best Egypt itinerary for a multi-generational family?",
        a: "Typically Cairo for three or four nights with the Giza plateau and the Grand Egyptian Museum, then a Nile cruise or a single Luxor base for four, and — if there is appetite — a few days on the Red Sea at the end. The cruise does a lot of work: the accommodation moves while the family stays put, and anyone can skip a temple without missing the day.",
      },
      {
        q: "How many days should we allow?",
        a: "Ten to twelve. Three generations need slack in the schedule far more than two adults do, and the difference between ten days and seven is not three more sites — it is three afternoons where nothing has to happen.",
      },
      {
        q: "Will it cost more because there are more of us?",
        a: "In total yes, per person no — and often considerably less. A private guide, vehicle and driver cost the same for eight people as for two, so the per-head share falls as the party grows. Large families are the group for whom private travel makes the most financial sense.",
      },
    ],
    keywords: [
      "multigenerational family trip egypt", "egypt with grandparents",
      "egypt family holiday three generations", "egypt accessible travel wheelchair",
      "best egypt itinerary for families", "egypt with kids and grandparents",
    ],
  },
];

export const findOccasion = (slug: string): Occasion | undefined =>
  occasions.find((o) => o.slug === slug);
