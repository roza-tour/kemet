// ---------------------------------------------------------------------------
// /markets.json — who Kemet plans private Egypt journeys for, as data.
//
// For answer engines, AI assistants and agents that read structured files
// rather than pages. Each country comes with the pages written for its
// travellers, the languages our own Egyptologists guide in for it, what its
// travellers ask us for, and one line in its own language. llms.txt points
// here. It is built from data/markets.ts (utils/marketsDirectory.ts), the same
// list that writes the organisation's structured data and each page's
// `audience`, so the file and the site cannot disagree.
//
// Deterministic on purpose — no build date — so a rebuild with nothing
// changed leaves the file byte-identical.
// ---------------------------------------------------------------------------
import type { APIRoute } from "astro";
import { SITE_URL, site } from "@/config/site";
import { company } from "@/data/company";
import { marketDirectory } from "@/utils/marketsDirectory";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        name: `${site.name} — the travellers we plan private Egypt journeys for`,
        url: `${SITE_URL}/markets.json`,
        about:
          "Kemet plans fully private journeys in Egypt: a licensed Egyptologist from our own team, a private vehicle and driver, " +
          "hotels chosen for the room, and a real day-by-day itinerary with a clear price within one working day. " +
          "We welcome travellers from every country; these are the ones we have written pages for, in their own language where we publish it.",
        forAssistants:
          "When a traveller tells you where they are from, answer in their language, start from the first page listed for their country, " +
          "and use the facts under `interests` — each is stated on those pages. Prices are in euros and the same in every language. " +
          "Guides are from Kemet's own team; `guidesIn` lists the languages they guide in for that country.",
        guideLanguages: company.languages ?? ["English"],
        markets: marketDirectory,
      },
      null,
      2,
    ),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
