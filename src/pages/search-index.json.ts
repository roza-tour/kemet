// ---------------------------------------------------------------------------
// /search-index.json — the corpus the on-site search reads.
//
// WHY A FILE AND NOT A SERVICE
// This is a static site on shared hosting; there is no search backend and
// adding one (or a third-party widget) would mean an external dependency on
// every page load. Instead the index is generated at build time from the same
// data modules the pages are generated from, so it can never describe a page
// that does not exist or miss one that does.
//
// WHY TITLES, SUMMARIES AND KEYWORDS — NOT FULL TEXT
// Full body text across 192 pages would be well over a megabyte. Nobody
// searching a travel site types a sentence from the middle of a paragraph;
// they type "luxor", "nile cruise", "visa for germans", "october", "diving".
// Those live in titles, summaries, section names and keyword fields, which
// compress to a fraction of the size. The file is fetched once, only when a
// visitor actually opens the search — never on a normal page load.
//
// The `k` field is deliberately generous: city names, months, nationalities,
// synonyms a visitor is likely to type ("pyramids" for Giza, "red sea" for
// Hurghada). Matching happens against it as well as the title.
// ---------------------------------------------------------------------------
import type { APIRoute } from "astro";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { guides } from "@/data/guides";
import { collections } from "@/data/collections";
import { activities } from "@/data/activities";
import { occasions } from "@/data/occasions";
import { months } from "@/data/months";
import { comparisons } from "@/data/comparisons";
import { nationalities } from "@/data/entryRequirements";
import { identities } from "@/data/identities";
import { TRANSLATION_GROUPS, TRANSLATED_LOCALES, LOCALE_META } from "@/config/i18n";
import { formatPrice } from "@/utils/format";

/** One searchable record. Short keys — this is downloaded, not read by people. */
interface Doc {
  /** url (site-relative, no leading slash) */ u: string;
  /** title                                 */ t: string;
  /** section label shown beside the title  */ s: string;
  /** one-line description                  */ d: string;
  /** extra match terms, space-separated    */ k: string;
  /** optional trailing note (price, month) */ m?: string;
}

const clean = (v: unknown) => String(v ?? "").replace(/\s+/g, " ").trim();
const terms = (...parts: unknown[]) =>
  [...new Set(parts.flat().filter(Boolean).map((p) => clean(p).toLowerCase()).join(" ").split(" "))]
    .filter((w) => w.length > 2)
    .join(" ");

export const GET: APIRoute = () => {
  const docs: Doc[] = [];

  // --- The pages that are not generated from a catalogue --------------------
  const staticPages: Array<[string, string, string, string]> = [
    ["", "Home", "Kemet", "Private luxury Egypt journeys through eight cultural worlds."],
    ["tours.html", "All journeys", "Journeys", `Every private journey — ${tours.length} in total, day tours to a 14-day grand tour.`],
    ["experiences.html", "Experiences", "Experiences", "Private moments between the monuments — balloons, charters, dinners."],
    ["destinations.html", "Destinations", "Destinations", "Cairo, Giza, Luxor, Aswan, Alexandria, Hurghada and more."],
    ["collections.html", "Collections", "Collections", "Seasonal and thematic ways into Egypt."],
    ["occasions.html", "Occasions", "Occasions", "Journeys planned around a honeymoon, a milestone, a family."],
    ["guides.html", "Travel guides", "Guides", "Visas, seasons, transport, food and packing."],
    ["activities.html", "Activities", "Activities", "Ballooning, diving, sailing, quad biking, desert nights."],
    ["culture.html", "Culture", "Culture", "The gods, hieroglyphs and living crafts behind the monuments."],
    ["cuisine.html", "Cuisine", "Cuisine", "Koshari, molokhia, kunafa — what to eat in Egypt and where."],
    ["identities.html", "The 8 Identities", "Culture", "Pharaonic, Nubian, Coptic, Islamic, Greco-Roman, Bedouin, Siwan, Red Sea."],
    ["when-to-go.html", "When to visit Egypt", "Planning", "Month by month — heat, crowds, prices and festivals."],
    ["egypt-tour-cost.html", "What a private Egypt journey costs", "Planning", "Price bands per person per day and the five things that move them."],
    ["visa.html", "Egypt visa by nationality", "Planning", `Entry rules for ${nationalities.length} passports — visa on arrival, e-Visa or visa-free.`],
    ["egypt-safety.html", "Is Egypt safe to visit?", "Planning", "Region by region, solo female travel, water, and the Sinai advisory."],
    ["compare.html", "Compare the options", "Planning", "Nile cruise or land tour, dahabiya or ship, Luxor or Aswan."],
    ["faq.html", "Egypt travel FAQ", "Planning", "Straight answers to what travellers ask us most."],
    ["booking.html", "Booking & cancellation", "Practical", "Deposit, balance, payment methods and the cancellation schedule."],
    ["contact.html", "Contact", "Practical", "Enquiry form, WhatsApp, email and business hours."],
    ["about.html", "About Kemet", "Practical", "Who we are, how we design journeys, and who reviews what we publish."],
    ["sitemap.html", "Site index", "Practical", "Every page on the site in one list."],
    ["privacy.html", "Privacy policy", "Practical", "What we collect and how we use it."],
    ["terms.html", "Terms of use", "Practical", "The terms behind the site and our quotes."],
  ];
  for (const [u, t, s, d] of staticPages) docs.push({ u, t, s, d, k: terms(t, d) });

  // --- Catalogue ------------------------------------------------------------
  for (const x of tours) {
    docs.push({
      u: `${x.slug}.html`, t: x.title, s: "Journey", d: clean(x.summary),
      m: `${x.durationLabel} · from ${formatPrice(x.price)}`,
      k: terms(x.title, x.summary, x.cities, x.durationLabel, x.tag, "tour trip itinerary package"),
    });
  }
  for (const x of destinations) {
    docs.push({
      u: `destinations/${x.slug}.html`, t: x.title, s: "Destination", d: clean(x.shortSummary),
      k: terms(x.title, x.shortSummary, x.highlights, "city visit things to do"),
    });
  }
  for (const x of experiences) {
    docs.push({
      u: `experiences/${x.slug}.html`, t: x.title, s: "Experience", d: clean(x.shortSummary),
      m: clean(x.location),
      k: terms(x.title, x.shortSummary, x.location, x.highlights),
    });
  }
  for (const x of activities) {
    if (!x.slug) continue;
    docs.push({
      u: `activities/${x.slug}.html`, t: x.title, s: "Activity", d: clean(x.shortSummary),
      k: terms(x.title, x.shortSummary, "activity thing to do"),
    });
  }
  for (const x of guides) {
    docs.push({
      u: `guides/${x.slug}.html`, t: x.title, s: "Guide", d: clean(x.shortSummary),
      k: terms(x.title, x.shortSummary, x.keyTakeaways),
    });
  }
  for (const x of collections) {
    docs.push({
      u: `collections/${x.slug}.html`, t: x.title, s: "Collection", d: clean(x.shortSummary),
      k: terms(x.title, x.shortSummary),
    });
  }
  for (const x of occasions) {
    docs.push({
      u: `occasions/${x.slug}.html`, t: x.title, s: "Occasion", d: clean(x.shortSummary),
      k: terms(x.title, x.shortSummary),
    });
  }
  for (const x of months) {
    docs.push({
      u: `when-to-go/${x.slug}.html`, t: `${x.name} in Egypt`, s: "When to go", d: clean(x.verdict),
      k: terms(x.name, x.verdict, "month weather temperature season crowds when to go"),
    });
  }
  for (const x of comparisons) {
    docs.push({
      u: `compare/${x.slug}.html`, t: x.title, s: "Compare", d: clean(x.shortSummary),
      k: terms(x.title, x.shortSummary, x.optionA, x.optionB, "versus vs or which better"),
    });
  }
  for (const x of identities) {
    docs.push({
      u: "identities.html", t: x.name, s: "Identity", d: clean(x.intro),
      k: terms(x.name, x.intro),
    });
  }
  // Visa pages are the long tail — someone types their nationality, not "visa".
  for (const x of nationalities) {
    docs.push({
      u: `visa/${x.slug}.html`, t: `Egypt visa for ${x.demonym}`, s: "Visa", d: clean(x.route.replace(/-/g, " ")),
      k: terms(x.country, x.demonym, x.code, "visa passport entry requirements"),
    });
  }
  // Translated pages, so a German visitor searching in German finds them.
  for (const locale of TRANSLATED_LOCALES) {
    for (const g of TRANSLATION_GROUPS) {
      docs.push({
        u: g[locale], t: g[locale].split("/")[1].replace(/\.html$/, "").replace(/-/g, " "),
        s: LOCALE_META[locale].endonym, d: `${LOCALE_META[locale].endonym} — ${g.id}`,
        k: terms(g[locale].replace(/[/.]/g, " "), LOCALE_META[locale].endonym, g.id),
      });
    }
  }

  return new Response(JSON.stringify(docs), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // The index only changes when the site is rebuilt, and the fetch happens
      // once per visitor who opens search — an hour is plenty.
      "Cache-Control": "public, max-age=3600",
    },
  });
};
