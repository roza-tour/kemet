// ---------------------------------------------------------------------------
// /seasons.json — the seasonal calendar as data, for the parts of the site that
// are not built by Astro.
//
// The calendar lives in TypeScript and is compiled into every page, but the
// private desk (desk.php) is PHP and cannot import it. Emitting it here means
// there is still exactly one calendar: change a date in seasonalCalendar.ts and
// the dispatch copy on the desk changes with it. A second, hand-kept copy in
// PHP would have drifted within a season.
//
// Nothing here is private — the same rows are already embedded in the HTML of
// every page on the site.
// ---------------------------------------------------------------------------
import type { APIRoute } from "astro";
import { seasonalCalendar } from "@/data/seasonalCalendar";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      seasonalCalendar.map((w) => ({
        theme: w.theme,
        label: w.label,
        note: w.note,
        start: w.start,
        end: w.end,
        priority: w.priority,
        slug: w.slug,
        href: w.href ?? `collections/${w.slug}.html`,
        eventDate: w.eventDate ?? "",
      })),
    ),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
