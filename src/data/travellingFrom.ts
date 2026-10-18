// ---------------------------------------------------------------------------
// "Planning from your country" — the written-for-you pages, as real links.
//
// The footer's "Travelling from" picker (TravellingFrom.astro) is a <select>:
// useful to a person, invisible to a crawler, because an <option> is not a
// link. These are the same destinations as <a href> links, grouped the way a
// traveller thinks ("I'm in Singapore", "we're doing Umrah first"), shown on
// the guides hub and reached from the Plan menu on every page — so each page
// written for a nationality is two clicks from anywhere, for search engines
// and answer engines as much as for people.
// ---------------------------------------------------------------------------
import { guides } from "@/data/guides";

export interface FromLink { label: string; href: string; note?: string; lang?: string }
export interface FromGroup { heading: string; links: FromLink[] }

const g = (slug: string, label: string, note?: string): FromLink => {
  if (!guides.some((x) => x.slug === slug)) throw new Error(`travellingFrom: no guide "${slug}"`);
  return { label, href: `guides/${slug}.html`, note };
};

export const FROM_GROUPS: FromGroup[] = [
  {
    heading: "Europe",
    links: [
      g("egypt-from-uk-ireland", "The UK & Ireland"),
      g("egypt-half-term-uk", "British half-term"),
      g("egypt-from-scandinavia", "Scandinavia & the Nordics"),
      g("egypt-from-netherlands-belgium", "The Netherlands & Belgium"),
    ],
  },
  {
    heading: "The Americas",
    links: [
      g("egypt-from-usa-canada", "The USA & Canada"),
      g("thanksgiving-spring-break-egypt", "Thanksgiving & spring break"),
      { label: "Latinoamérica", href: "es/viajar-a-egipto-desde-latinoamerica.html", note: "en español", lang: "es" },
    ],
  },
  {
    heading: "Asia & the Pacific",
    links: [
      g("egypt-from-australia-new-zealand", "Australia & New Zealand"),
      g("egypt-from-india", "India"),
      g("egypt-from-singapore-hong-kong-china", "Singapore, Hong Kong & China", "Mandarin-speaking guides"),
    ],
  },
  {
    heading: "Africa & the Gulf",
    links: [
      g("egypt-from-africa", "South Africa, Nigeria, Kenya & Ghana"),
      g("egypt-for-gulf-residents", "Residents of the Gulf"),
      { label: "العائلات الخليجية", href: "ar/sayf-masr-lil-aailat-al-khalijiya.html", note: "بالعربية", lang: "ar" },
    ],
  },
  {
    heading: "Your trip",
    links: [
      g("umrah-and-egypt", "Umrah and Egypt"),
      g("egypt-cruise-shore-excursions", "A cruise stop in Egypt"),
    ],
  },
];
