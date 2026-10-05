// ---------------------------------------------------------------------------
// Google Ads measurement — the two identifiers, in one place.
//
// WHY A FILE FOR TWO STRINGS
// The conversion ID goes in the <head> of all 282 pages and the label goes in
// a click handler at the bottom of the body. Keeping them apart is how a site
// ends up firing a conversion against an ID that was rotated six months ago.
// One file, both readers.
//
// WHERE THE LABEL COMES FROM
// Google Ads → Tools → Conversions → (the enquiry action) → "Tag setup" →
// "Install the tag yourself". The snippet it shows contains:
//
//     gtag('event', 'conversion', {'send_to': 'AW-18494288275/AbC-D_efG'});
//                                               ^^^^^^^^^^^^ ^^^^^^^^^^^
//                                               the ID        the LABEL
//
// Paste only the part after the slash. Until it is filled in, the tag still
// loads and still records page views and remarketing audiences — but no
// conversion is reported, and the campaign has nothing to optimise towards.
// components/GoogleTag.astro prints a build-time warning while it is empty.
// ---------------------------------------------------------------------------

/** The Google Ads account's tag ID. */
export const GOOGLE_ADS_ID = "AW-18494288275";

/**
 * The conversion label for "enquiry form submitted" — the "Website enquiry
 * form" action (id 7820730872). The second character is a lowercase L, not
 * a capital i: the two are pixel-identical in the Google Ads UI font, which
 * is why this was copied as text rather than read off a screenshot. A wrong
 * label raises no error anywhere; conversions are simply dropped.
 */
export const GOOGLE_ADS_ENQUIRY_LABEL = "XlAkCPjDm5EdEJPj4fJE";

/** `AW-xxxx/label`, or "" while the label is unknown. */
export const enquirySendTo = GOOGLE_ADS_ENQUIRY_LABEL
  ? `${GOOGLE_ADS_ID}/${GOOGLE_ADS_ENQUIRY_LABEL}`
  : "";

/**
 * Where Consent Mode starts out denied.
 *
 * The EEA, plus the UK and Switzerland, which are not in the EEA but whose
 * law lands in the same place for this purpose. Google reads these as region
 * codes and applies them in preference to the global default, so the global
 * default below them can stay "granted" for everywhere else.
 *
 * Germany, France, Italy and Austria are on this list — which is to say, the
 * markets this account actually advertises in. Until a consent banner calls
 * gtag('consent','update',…), those visitors send cookieless pings only and
 * their conversions are modelled rather than counted.
 */
export const CONSENT_DENIED_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];
