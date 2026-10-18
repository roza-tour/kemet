// ---------------------------------------------------------------------------
// Photographs that are not ours — yet.
//
// On 11 Oct 2026 the owner asked for free photographs "for now, wherever one
// is missing", to be replaced by our own as they are taken. These are those
// stand-ins, all under /images/stock/. Each is one of two kinds:
//
//   · CC0 or public domain — free to use with no credit required. Listed here
//     anyway, so the shot list is complete.
//   · A Creative Commons licence that requires a credit (CC BY, CC BY-SA).
//     Placeholder.astro prints that credit on the photograph itself, linked to
//     the source, so the condition is met wherever the photo appears. These are
//     kept to galleries and the cuisine cards — never a card or hero that sits
//     inside a link, where a second link would be invalid.
//
// Nothing here is presented as our guests, our kitchen or our tour: the alt
// text on each page says what is in the picture, not that we took it.
//
// TO REPLACE ONE: put our photograph in the folder of its subject, point the
// page at it, delete its line here and the file in /images/stock/. The credit
// goes with it.
// ---------------------------------------------------------------------------

export interface PhotoCredit {
  /** What the photograph shows — the shot we need instead. */
  subject: string;
  creator: string;
  /** As the source states it, e.g. "CC0", "Public domain", "CC BY-SA 4.0". */
  license: string;
  /** The page the photograph was taken from. */
  source: string;
}

const C = "https://commons.wikimedia.org/wiki/File:";

export const photoCredits: Record<string, PhotoCredit> = {
  "/images/stock/giza-pyramids-sunrise-sky.webp": { subject: "Sunrise over the pyramids of Giza", creator: "Ben Sutherland", license: "CC BY 2.0", source: "https://www.flickr.com/photos/bensutherland/27684377097" },
  "/images/stock/incense-burner-smoke.webp": { subject: "Smoke rising from an engraved brass incense burner", creator: "Mark Bonica", license: "CC BY 2.0", source: "https://www.flickr.com/photos/23119666@N03/4635439613" },
  "/images/stock/frankincense-myrrh-burning.webp": { subject: "Frankincense and myrrh burning on charcoal in a brass burner", creator: "Mark Bonica", license: "CC BY 2.0", source: "https://www.flickr.com/photos/23119666@N03/4636042546" },
  "/images/stock/myrrh-on-charcoal.webp": { subject: "Myrrh burning on charcoal", creator: "maja kuzmanovic", license: "CC BY-SA 2.0", source: "https://www.flickr.com/photos/deziluzija/50796268726" },
  "/images/stock/cotton-open-boll.webp": { subject: "An open cotton boll", creator: "Alabama Extension", license: "CC0", source: "https://www.flickr.com/photos/alabama_extension/53489490144" },
  "/images/stock/khan-el-khalili-attar-shop.webp": { subject: "A spice and attar shop in Khan el-Khalili", creator: "Dan (twiga_swala)", license: "CC BY-SA 2.0", source: "https://www.flickr.com/photos/twiga_swala/2274965337" },
  "/images/stock/molokhia.webp": { subject: "Molokhia", creator: "Yosi I", license: "CC BY 2.5", source: `${C}Molokheya_hi_res.JPG` },
  "/images/stock/feteer.webp": { subject: "Feteer meshaltet", creator: "Mohamed Ouda", license: "CC BY-SA 4.0", source: `${C}Egyptian-food-16.jpg` },
  "/images/stock/sayadeya.webp": { subject: "Sayadeya (fish over spiced rice)", creator: "Wikimedia Commons contributor", license: "CC0", source: `${C}Sayadiyah_Fish.jpg` },
  "/images/stock/om-ali.webp": { subject: "Om Ali", creator: "Miansari66", license: "CC0", source: `${C}Umm_Ali.JPG` },
  "/images/stock/qatayef.webp": { subject: "Qatayef", creator: "Benoît Prieur", license: "CC0", source: `${C}Qatayef_libanais_(dessert)_à_Lyon.jpg` },
  "/images/stock/stuffed-vine-leaves.webp": { subject: "Cooking class — stuffed vine leaves (mahshi)", creator: "Gatimetemia", license: "CC0", source: "https://commons.wikimedia.org/w/index.php?curid=164444691" },
  "/images/stock/giza-sphinx-with-pyramid.webp": { subject: "The Great Sphinx of Giza with a pyramid behind it", creator: "Rawpixel (public domain)", license: "CC0", source: "https://www.rawpixel.com/image/6031697" },
  "/images/stock/giza-khafre-pyramid.webp": { subject: "The Pyramid of Khafre at Giza", creator: "Rawpixel (public domain)", license: "CC0", source: "https://www.rawpixel.com/image/6025148" },
  "/images/stock/giza-camel-rider-pyramids.webp": { subject: "A camel rider before the pyramids of Giza", creator: "Rawpixel (public domain)", license: "CC0", source: "https://www.rawpixel.com/image/5944062" },
  "/images/luxor/luxor-temple-columns-night.webp": { subject: "Luxor Temple at night", creator: "Rawpixel (public domain)", license: "CC0", source: "https://www.rawpixel.com/image/5941421" },
  "/images/stock/cairo-airport-apron.webp": { subject: "VIP meet & assist at Cairo airport", creator: "ديفيد عادل وهبة خليل", license: "CC0", source: "https://commons.wikimedia.org/w/index.php?curid=43747781" },
  "/images/stock/nmec-main-hall.webp": { subject: "National Museum of Egyptian Civilization", creator: "Nabbegat", license: "CC BY 4.0", source: `${C}National_Museum_of_Egyptian_Civilization_2025_111.jpg` },
  "/images/stock/egyptian-museum-menkaure-triad.webp": { subject: "Egyptian Museum, Tahrir", creator: "Warren LeMay", license: "CC0", source: "https://commons.wikimedia.org/w/index.php?curid=79361153" },
  "/images/stock/abu-simbel-both-temples.webp": { subject: "Abu Simbel — both temples", creator: "Warren LeMay", license: "CC0", source: "https://www.flickr.com/photos/59081381@N03/48016635108" },
  "/images/stock/abu-simbel-nefertari-temple.webp": { subject: "Abu Simbel — Temple of Nefertari", creator: "Warren LeMay", license: "CC0", source: "https://www.flickr.com/photos/59081381@N03/48016731172" },
  "/images/stock/abu-simbel-nefertari-facade.webp": { subject: "Abu Simbel — Nefertari facade", creator: "Warren LeMay", license: "CC0", source: "https://www.flickr.com/photos/59081381@N03/48016649331" },
  "/images/stock/siwa-shali-fortress.webp": { subject: "Siwa — the Shali fortress", creator: "ولاء", license: "Public domain", source: `${C}Shali_Fortress44.jpg` },
  "/images/stock/abu-simbel-hathor-hall.webp": { subject: "Abu Simbel — Hathor hall", creator: "Warren LeMay", license: "CC0", source: "https://www.flickr.com/photos/59081381@N03/48016652406" },
};

/** Needs no credit: CC0, public domain, public-domain mark. */
const NO_CREDIT = /^(CC0|Public domain|PDM)/i;

/** The credit to print on a photograph, when its licence asks for one. */
export function creditFor(src?: string): PhotoCredit | undefined {
  const c = src ? photoCredits[src] : undefined;
  return c && !NO_CREDIT.test(c.license) ? c : undefined;
}
