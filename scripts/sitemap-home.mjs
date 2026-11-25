// The sitemap writer prints the home page as <loc>https://kemet-travel.com</loc>
// whatever serialize() returns, while the page's canonical and every hreflang
// link say https://kemet-travel.com/. The two are the same address, but the
// sitemap should repeat the canonical exactly, so the slash is put back here.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";

for (const f of readdirSync("dist").filter((n) => /^sitemap-\d+\.xml$/.test(n))) {
  const path = `dist/${f}`;
  const xml = readFileSync(path, "utf8");
  const fixed = xml.replace(/<loc>(https:\/\/[^<\/]+)<\/loc>/g, "<loc>$1/</loc>");
  if (fixed !== xml) writeFileSync(path, fixed);
}
