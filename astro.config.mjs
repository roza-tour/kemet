import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

// Deploy-time configuration is read from the environment (see .env.example),
// with safe fallbacks so a default build is fully reproducible. `site` must
// match `config/site.ts` — both read the same PUBLIC_SITE_URL variable.
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const SITE_URL = (PUBLIC_SITE_URL || "https://kemetvoyages.com").replace(/\/$/, "");

// Static output. build.format "file" emits flat .html files (index.html,
// tours.html, tour-7-day.html ...) so the in-page ".html" links resolve on any
// static host such as cPanel / public_html.
export default defineConfig({
  site: SITE_URL,
  build: { format: "file" },
  integrations: [sitemap()],
});
