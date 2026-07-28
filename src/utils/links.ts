// ---------------------------------------------------------------------------
// Link builders — generic helpers for the external/contact links used across
// the site. Kept presentation-free so any component can reuse them.
// ---------------------------------------------------------------------------
import { SITE_URL, site } from "@/config/site";

/** Pre-filled WhatsApp chat link for a given message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Plain WhatsApp link with no pre-filled message (opens the chat). */
export function whatsappHref(): string {
  return `https://wa.me/${site.whatsapp}`;
}

/** mailto: link with an encoded subject and optional body. */
export function mailtoLink(subject: string, body = ""): string {
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body) params.set("body", body);
  return `mailto:${site.email}?${params.toString()}`;
}

/** Plain mailto: link with no subject. */
export function emailHref(): string {
  return `mailto:${site.email}`;
}

/**
 * tel: link built from the site phone number. The display number is stripped
 * of spaces and hyphens; the leading + is preserved for international dialling.
 * Value comes from centralized site config — never hardcoded.
 */
export function phoneHref(): string {
  const digits = site.phoneDisplay.replace(/[\s\-().]/g, "");
  return `tel:${digits}`;
}

/**
 * Absolute canonical URL for a route file (e.g. "tours.html"). The homepage
 * canonicalises to the bare origin ("https://kemet-travel.com/"); every other
 * page keeps its real ".html" path. Internal links, canonicals and the sitemap
 * all use the same .html form, so crawlers never hit a redirect.
 */
export function canonical(file: string): string {
  return `${SITE_URL}/${publicPath(file)}`;
}

/**
 * The public URL form of a route file, relative to the site root.
 *
 * A directory index is served at the directory URL, not at its index.html:
 *   index.html        → ""      (the bare origin)
 *   de/index.html     → "de/"
 *   tours.html        → "tours.html"
 *
 * Everything that emits a URL — canonical, hreflang, the sitemap, the language
 * switcher — goes through this, so the site never publishes two URLs for the
 * same document. `.htaccess` 301s the index.html form to match.
 */
export function publicPath(file: string): string {
  if (file === "index.html") return "";
  if (file.endsWith("/index.html")) return file.slice(0, -"index.html".length);
  return file;
}

/**
 * Build a WhatsApp or mailto link for a specific enquiry type.
 * All contact values come from site config — nothing is hardcoded here.
 */
export function enquiryLink(
  channel: "whatsapp" | "email",
  whatsappMessage: string,
  emailSubject: string,
  emailBody?: string,
): string {
  if (channel === "whatsapp") return whatsappLink(whatsappMessage);
  return mailtoLink(emailSubject, emailBody ?? "");
}
