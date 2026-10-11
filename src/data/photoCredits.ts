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
  "/images/stock/koshari.webp": { subject: "Koshari", creator: "Youmna9115", license: "CC0", source: "https://commons.wikimedia.org/w/index.php?curid=188395232" },
  "/images/stock/ful-medames.webp": { subject: "Ful medames breakfast plate", creator: "Miansari66", license: "CC0", source: `${C}Ful_Medames.JPG` },
  "/images/stock/tameya-frying.webp": { subject: "Ta'meya frying at a street stall", creator: "Roland Unger", license: "CC BY-SA 3.0", source: `${C}EgFoodFryingFalafel.jpg` },
  "/images/stock/molokhia.webp": { subject: "Molokhia", creator: "Yosi I", license: "CC BY 2.5", source: `${C}Molokheya_hi_res.JPG` },
  "/images/stock/stuffed-pigeon.webp": { subject: "Stuffed pigeon (hamam mahshi)", creator: "Dede Elfeky", license: "CC BY-SA 4.0", source: `${C}120820111243ت.jpg` },
  "/images/stock/feteer.webp": { subject: "Feteer meshaltet", creator: "Mohamed Ouda", license: "CC BY-SA 4.0", source: `${C}Egyptian-food-16.jpg` },
  "/images/stock/sayadeya.webp": { subject: "Sayadeya (fish over spiced rice)", creator: "Wikimedia Commons contributor", license: "CC0", source: `${C}Sayadiyah_Fish.jpg` },
  "/images/stock/kunafa.webp": { subject: "Kunafa", creator: "Bazel", license: "Public domain", source: `${C}Kinafa.jpg` },
  "/images/stock/basbousa.webp": { subject: "Basbousa", creator: "Sami Mlouhi", license: "CC BY-SA 4.0", source: `${C}Basboussa_-_harisa_-_بسبوسة_photo1.jpg` },
  "/images/stock/om-ali.webp": { subject: "Om Ali", creator: "Miansari66", license: "CC0", source: `${C}Umm_Ali.JPG` },
  "/images/stock/qatayef.webp": { subject: "Qatayef", creator: "Benoît Prieur", license: "CC0", source: `${C}Qatayef_libanais_(dessert)_à_Lyon.jpg` },
  "/images/stock/hawawshi.webp": { subject: "Hawawshi", creator: "Mkevy", license: "CC BY-SA 4.0", source: `${C}Egyptian_meatloaf_1.jpg` },
  "/images/stock/stuffed-vine-leaves.webp": { subject: "Cooking class — stuffed vine leaves (mahshi)", creator: "Gatimetemia", license: "CC0", source: "https://commons.wikimedia.org/w/index.php?curid=164444691" },
  "/images/stock/cairo-airport-aircraft-stand.webp": { subject: "VIP meet & assist at Cairo airport", creator: "ديفيد عادل وهبة خليل", license: "CC0", source: "https://commons.wikimedia.org/w/index.php?curid=43747781" },
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
