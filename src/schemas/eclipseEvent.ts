// schema.org Event for Eclipse Day in Luxor (data/eclipseDay.ts) — so search
// engines can show the day with its date and price, and answer engines can
// state what it is. Emitted only while the event is still ahead.
import { ECLIPSE_DAY, eclipseDayEn, type EclipseDayText } from "@/data/eclipseDay";
import { eclipseDayI18n } from "@/data/eclipseDay-i18n";
import { ORG_ID } from "@/schemas/jsonld";
import { canonical } from "@/utils/links";
import { SITE_URL } from "@/config/site";
import { beforeDate } from "@/data/timeboxed";
import type { SiteLocale } from "@/config/i18n";

export function eclipseDayEvent(locale: SiteLocale, route: string, image?: string): Record<string, unknown>[] {
  if (!beforeDate(ECLIPSE_DAY.date, [true]).length) return [];
  const T: EclipseDayText = locale === "en" ? eclipseDayEn : eclipseDayI18n[locale as keyof typeof eclipseDayI18n] ?? eclipseDayEn;
  const url = `${canonical(route)}#eclipse-day`;
  return [{
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": url,
    name: `${T.title} — 2027-08-02`,
    description: T.lede,
    startDate: ECLIPSE_DAY.start,
    endDate: ECLIPSE_DAY.end,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: locale,
    location: {
      "@type": "Place",
      name: "Luxor, West Bank",
      address: { "@type": "PostalAddress", addressLocality: "Luxor", addressRegion: "Luxor Governorate", addressCountry: "EG" },
    },
    ...(image ? { image: [image.startsWith("http") ? image : `${SITE_URL}${image}`] } : {}),
    organizer: { "@id": ORG_ID },
    maximumAttendeeCapacity: ECLIPSE_DAY.capacity,
    offers: {
      "@type": "Offer",
      price: ECLIPSE_DAY.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-10-18",
      url,
    },
  }];
}
