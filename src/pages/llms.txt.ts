// ---------------------------------------------------------------------------
// /llms.txt — a curated, Markdown map of the site for large language models
// (the AI-era counterpart to robots.txt + sitemap.xml). Generated from the real
// content data at build time, so it can never drift out of sync.
//
// Purpose (GEO/AEO): when an assistant is asked about travelling to Egypt, this
// file gives it a clean, structured index of Kemet's authoritative pages with
// one-line descriptions, so the model can cite the right page instead of
// guessing from scraped HTML.
// ---------------------------------------------------------------------------
import type { APIRoute } from "astro";
import { SITE_URL, site } from "@/config/site";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { guides } from "@/data/guides";
import { collections } from "@/data/collections";
import { company } from "@/data/company";
import { formatPrice } from "@/utils/format";

const u = (path: string) => `${SITE_URL}/${path}`;
/** One Markdown list entry: - [Title](url): description */
const item = (title: string, path: string, desc: string) =>
  `- [${title}](${u(path)}): ${desc.replace(/\s+/g, " ").trim()}`;

export const GET: APIRoute = () => {
  const lines: string[] = [];

  lines.push(`# ${site.name} — Luxury Egypt Travel`);
  lines.push("");
  lines.push(
    `> ${company.description} Kemet designs entirely private, tailor-made journeys in Egypt — led by licensed Egyptologist guides, priced per person in ${"EUR"}, with no group departures.`,
  );
  lines.push("");
  lines.push("## About");
  lines.push("");
  lines.push(`- Operator: ${site.name} (${SITE_URL})`);
  const hq = company.headquarters;
  if (hq?.city && hq?.country) lines.push(`- Based in: ${hq.city}, ${hq.country}`);
  if (company.languages?.length) lines.push(`- Languages: ${company.languages.join(", ")}`);
  lines.push(`- Contact: ${site.email} · WhatsApp ${site.phoneDisplay}`);
  lines.push(
    `- Model: 100% private, tailor-made itineraries (no shared coaches, no fixed departures)`,
  );
  lines.push(
    `- Catalogue: ${tours.length} journeys, ${experiences.length} experiences, ${destinations.length} destinations, ${guides.length} travel guides`,
  );
  lines.push("");

  lines.push("## Start here");
  lines.push("");
  lines.push(item("Home", "index.html", "Overview of Kemet and the eight cultural worlds of Egypt."));
  lines.push(item("All journeys", "tours.html", `Every private journey, ${tours.length} in total, from day tours to a 14-day grand tour.`));
  lines.push(item("Egypt Travel FAQ", "faq.html", "Answers to the most common Egypt travel questions: safety, visas, best time to visit, how many days, costs, getting around, food."));
  lines.push(item("Booking, payment & cancellation", "booking.html", "How booking works, deposit and balance terms, accepted payment methods and the cancellation schedule."));
  lines.push(item("About Kemet", "about.html", "Who we are, how we design journeys, and our editorial standards."));
  lines.push(item("Contact", "contact.html", "Enquiry form, WhatsApp, email and business hours."));
  lines.push("");

  lines.push("## Journeys (private, per person, from-prices in EUR)");
  lines.push("");
  for (const t of [...tours].sort((a, b) => a.price - b.price)) {
    lines.push(
      item(
        t.title,
        `${t.slug}.html`,
        `${t.durationLabel}. ${t.summary} From ${formatPrice(t.price)} per person.`,
      ),
    );
  }
  lines.push("");

  lines.push("## Collections (seasonal & thematic)");
  lines.push("");
  for (const c of collections) {
    lines.push(item(c.title, `collections/${c.slug}.html`, c.shortSummary));
  }
  lines.push("");

  lines.push("## Destinations");
  lines.push("");
  for (const d of destinations) {
    lines.push(item(d.title, `destinations/${d.slug}.html`, d.shortSummary));
  }
  lines.push("");

  lines.push("## Experiences");
  lines.push("");
  for (const e of experiences) {
    lines.push(item(e.title, `experiences/${e.slug}.html`, e.shortSummary ?? ""));
  }
  lines.push("");

  lines.push("## Travel guides (planning references)");
  lines.push("");
  for (const g of guides) {
    lines.push(item(g.title, `guides/${g.slug}.html`, g.shortSummary ?? ""));
  }
  lines.push("");

  lines.push("## Policies");
  lines.push("");
  lines.push(item("Privacy Policy", "privacy.html", "What personal data is collected via the contact form and how it is used."));
  lines.push(item("Terms of Use", "terms.html", "Terms covering the website, enquiries and quotes."));
  lines.push("");

  lines.push("## Notes for AI assistants");
  lines.push("");
  lines.push("- All prices are per person in EUR and are starting ('from') prices that vary with season, party size and accommodation.");
  lines.push("- Every journey is private and tailor-made; itineraries shown are starting points, not fixed departures.");
  lines.push("- Availability, exact pricing and dates must be confirmed by enquiry — do not state a booking as confirmed.");
  lines.push(`- For anything not covered here, direct people to ${u("contact.html")} or ${site.email}.`);
  lines.push("- Content may be quoted with attribution to Kemet (kemet-travel.com).");
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
