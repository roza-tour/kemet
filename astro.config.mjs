import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

// Deploy-time configuration is read from the environment (see .env.example),
// with safe fallbacks so a default build is fully reproducible. `site` must
// match `config/site.ts` — both read the same PUBLIC_SITE_URL variable.
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const SITE_URL = (PUBLIC_SITE_URL || "https://kemet-travel.com").replace(/\/$/, "");


// Pages whose canonical points at a different page. They stay on the site and
// in the navigation; they are simply not submitted for indexing.
const CANONICALISED_AWAY = ["/activities/hot-air-balloon-luxor.html"];

// A locale home is published at the directory, not at its index.html.
const LOCALE_HOME = /^\/(de|it|es)\/index$/;

// Translation clusters, mirrored from src/config/i18n.ts. Kept as literal data
// here because astro.config.mjs is loaded before the TS path aliases resolve.
const GROUPS = [
  ["", "de/", "it/", "es/"],
  ["tours.html", "de/aegypten-reisen.html", "it/viaggi-in-egitto.html", "es/viajes-a-egipto.html"],
  ["tour-nile-cruise.html", "de/nilkreuzfahrt.html", "it/crociera-sul-nilo.html", "es/crucero-por-el-nilo.html"],
  ["egypt-tour-cost.html", "de/aegypten-reise-kosten.html", "it/quanto-costa-viaggio-egitto.html", "es/cuanto-cuesta-viajar-a-egipto.html"],
  ["when-to-go.html", "de/beste-reisezeit-aegypten.html", "it/quando-andare-in-egitto.html", "es/mejor-epoca-para-viajar-a-egipto.html"],
  ["visa.html", "de/aegypten-visum.html", "it/visto-egitto.html", "es/visado-egipto.html"],
];
const LANGS = ["en", "de", "it", "es"];
const SITEMAP_ALTERNATES = {};
for (const g of GROUPS) {
  const links = g.map((path, i) => ({ lang: LANGS[i], url: `${SITE_URL}/${path}` }));
  links.push({ lang: "x-default", url: `${SITE_URL}/${g[0]}` });
  for (const path of g) SITEMAP_ALTERNATES[`${SITE_URL}/${path}`] = links;
}

// Static output. build.format "file" emits flat .html files (index.html,
// tours.html, tour-7-day.html ...) so the in-page ".html" links resolve on any
// static host such as cPanel / public_html.
export default defineConfig({
  site: SITE_URL,
  build: { format: "file" },
  // This is a multi-page site: every click is a full document load. Prefetching
  // on hover/focus fetches the next page ~200-800ms before the click lands, so
  // navigation feels instant instead of "heavy". Only same-origin links are
  // prefetched, Astro skips it on save-data and 2G connections, and a
  // `<link rel="prefetch">` is a browser hint only — crawlers ignore it, so
  // this carries no indexing risk.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  integrations: [
    sitemap({
      // A sitemap must list exactly the URLs the canonical tags declare. Any
      // disagreement is a conflicting signal and Search Console reports it.
      //
      //   • build.format "file" emits flat .html files, so the sitemap uses the
      //     .html form — crawlers never hit an extensionless 404.
      //   • A directory index is published at the directory (/de/), never at
      //     /de/index.html, matching utils/links → publicPath.
      //   • Pages that canonicalise to another page are excluded entirely: a
      //     URL cannot both be submitted for indexing and point elsewhere.
      // NOTE: `filter` sees the pre-serialize URL, which has no ".html"
      // suffix under build.format "file" — compare against both forms.
      filter: (page) => {
        const p = page.replace(/\/$/, "").replace(/\.html$/, "");
        return !CANONICALISED_AWAY.some((c) => p.endsWith(c.replace(/\.html$/, "")));
      },
      serialize(item) {
        const url = new URL(item.url);
        let path = url.pathname.replace(/\/$/, "");
        if (path === "") {
          item.url = `${url.origin}/`;
        } else if (LOCALE_HOME.test(path)) {
          // "/de/index" → "/de/"
          item.url = `${url.origin}${path.replace(/index$/, "")}`;
        } else {
          item.url = `${url.origin}${path}.html`;
        }
        // hreflang alternates, so Google finds the whole translation cluster
        // from the sitemap as well as from the page head.
        const group = SITEMAP_ALTERNATES[item.url];
        if (group) item.links = group;
        // Freshness signal — the date this build was published.
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
});
