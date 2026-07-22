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
 * Absolute canonical URL for a route file (e.g. "tours.html"). URLs are clean
 * (extensionless): the homepage canonicalises to the bare origin
 * ("https://kemet-travel.com/") and every other page drops its ".html"
 * ("https://kemet-travel.com/tours"). Apache serves the clean URL from the
 * real .html file and 301-redirects the .html form (see public/.htaccess).
 */
export function canonical(file: string): string {
  if (file === "index.html") return `${SITE_URL}/`;
  return `${SITE_URL}/${file.replace(/\.html$/, "")}`;
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
