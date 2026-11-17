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
  // Easter in Egypt (19 Oct 2026)
  "/images/stock/hanging-church-cairo-interior.webp": { subject: "The nave of the Hanging Church (al-Muallaqa) in Coptic Cairo", creator: "twiga_swala", license: "CC BY-SA 2.0", source: "https://www.flickr.com/photos/21013862@N08/2275672496" },
  "/images/stock/coptic-church-iconostasis-old-cairo.webp": { subject: "The iconostasis of the Church of St Barbara in Old Cairo", creator: "upyernoz", license: "CC BY 2.0", source: "https://www.flickr.com/photos/48600082269@N01/2082590228" },
  "/images/stock/coptic-cairo-abu-serga-church.webp": { subject: "A carved Coptic cross on the wall of Abu Serga church, Old Cairo", creator: "Prof. Mortel", license: "CC BY 2.0", source: "https://www.flickr.com/photos/43714545@N06/52087427429" },
  "/images/stock/palm-sunday-woven-palm-crosses.webp": { subject: "Crosses woven from palm leaves for Palm Sunday", creator: "bobosh_t", license: "CC BY-SA 2.0", source: "https://www.flickr.com/photos/31801622@N07/5630065384" },
  "/images/stock/kahk-easter-biscuits.webp": { subject: "Kahk and biscuits, the feast-day pastries of Egypt", creator: "Michelle Sym", license: "CC BY 2.0", source: "https://www.flickr.com/photos/33834418@N05/4006916955" },
  "/images/stock/sham-el-nessim-coloured-eggs.webp": { subject: "Coloured eggs for Easter and Sham El-Nessim", creator: "rawpixel", license: "CC0", source: "https://www.rawpixel.com/image/6025306/photo-image-public-domain-celebration-free" },
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
  // The destinations that had no photographs (17 Nov 2026). Heroes are all no-credit licences.
  "/images/stock/siwa-salt-lake.webp": { subject: "A turquoise salt pool in Siwa with thick white salt crust along its shore under a clear sky.", creator: "waa towaw", license: "Unsplash License", source: "https://unsplash.com/photos/turquoise-water-meets-salt-encrusted-shore-under-a-clear-sky-nAkHJekSsbo" },
  "/images/stock/siwa-aghurmi-oracle-temple.webp": { subject: "The mud-brick ruins on the hill of Aghurmi in Siwa, site of the Temple of the Oracle of Amun, with the tapering minaret of the old mosque.", creator: "Kevin Gabbert", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Oracle_Temple_Siwa_Egypt.JPG" },
  "/images/stock/marsa-matruh-agiba-cove.webp": { subject: "Bright turquoise water breaking on rock shelves below the low limestone cliffs at Agiba, west of Marsa Matruh, seen from the clifftop.", creator: "Youhana Nassif", license: "Unsplash License", source: "https://unsplash.com/photos/people-on-beach-during-daytime-9BZVf-jEDwU" },
  "/images/stock/marsa-matruh-agiba-beach.webp": { subject: "Agiba beach near Marsa Matruh in soft late light: a sandy cove beneath a pale limestone headland, with parasols on the sand and swimmers small in the turquoise Mediterranean.", creator: "NADER AYMAN", license: "Unsplash License", source: "https://unsplash.com/photos/a-group-of-people-standing-on-top-of-a-sandy-beach--BDjuxz13Z8" },
  "/images/stock/el-alamein-war-cemetery.webp": { subject: "Rows of white Commonwealth headstones in the sand of the El Alamein War Cemetery in low afternoon light, with a single tree among the graves.", creator: "Mona Hassan Abo-Abda", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:%D9%85%D9%82%D8%A7%D8%A8%D8%B1_%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D9%86_5.jpg" },
  "/images/stock/port-said-canal-boats.webp": { subject: "Red-painted wooden work boats with carved cabins moored on the Suez Canal at Port Said, with the waterfront buildings of the opposite bank across the water.", creator: "Abdalrhman Abdelbasst", license: "Unsplash License", source: "https://unsplash.com/photos/vibrant-red-boats-docked-by-city-waterfront-under-sunlight-arKAo8rnEFI" },
  "/images/stock/port-said-suez-canal-authority-building.webp": { subject: "The white Suez Canal Authority building at Port Said, with its three green domes and arcaded front, seen across the water of the canal.", creator: "Roland Unger", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:PortSaidSuezCanalAuthority.jpg" },
  "/images/stock/port-said-port-fuad-ferry.webp": { subject: "A green car ferry crossing the Suez Canal between Port Said and Port Fuad, with the twin minarets of the Port Fuad mosque on the far bank.", creator: "Nicola", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Faehre_Port_Said.jpg" },
  "/images/stock/mount-sinai-sunrise.webp": { subject: "Ridge after ridge of red granite mountains in the first light of sunrise, seen from high on Mount Sinai above Saint Catherine.", creator: "Artem Labunsky", license: "Unsplash License", source: "https://unsplash.com/photos/a-large-mountainous-area-Sf5rOkzV-qc" },
  "/images/stock/saint-catherine-monastery.webp": { subject: "Saint Catherine's Monastery seen from the hillside above: the fortified walls, the basilica's bell tower, the small white minaret and the cypress garden, under a granite mountainside.", creator: "Egghead06", license: "CC0", source: "https://commons.wikimedia.org/wiki/File:St_CatherinesPanorama.JPG" },
  "/images/stock/mount-sinai-high-range-early-light.webp": { subject: "The jagged granite peaks of the high Sinai catching early light, seen from the boulder-strewn stairway that climbs to the summit of Mount Sinai.", creator: "Artem Labunsky", license: "Unsplash License", source: "https://unsplash.com/photos/a-rocky-mountain-with-a-valley-below-iZXC2QsdwRk" },
  "/images/stock/dahab-blue-hole-coast.webp": { subject: "The coast at the Blue Hole north of Dahab, where bare Sinai mountains drop to a fringing reef and the deep blue Gulf of Aqaba, with the low dive cafés along the shore.", creator: "Raimond Klavins", license: "Unsplash License", source: "https://unsplash.com/photos/brown-mountain-near-blue-sea-under-blue-sky-during-daytime-zfeY8HkSAOE" },
  "/images/stock/dahab-lagoon-kites.webp": { subject: "Kitesurfers on a shallow turquoise lagoon at Dahab, with the Sinai mountains rising behind the far shore.", creator: "Abdelrahman Ismail", license: "Unsplash License", source: "https://unsplash.com/photos/people-parasailing-on-the-beach-jetDrAd_ti0" },
  "/images/stock/dahab-seafront.webp": { subject: "The seafront at Dahab: white-washed buildings and wooden café terraces above clear blue water, a small boat at anchor and the mountains of the far shore of the Gulf of Aqaba on the horizon.", creator: "Amakuru", license: "CC0", source: "https://commons.wikimedia.org/wiki/File:Shoreline_in_Dahab.jpg" },
  "/images/stock/marsa-alam-abu-dabbab-green-turtle.webp": { subject: "A green sea turtle grazing on the seagrass bed in the shallow bay of Abu Dabbab near Marsa Alam, photographed underwater.", creator: "Harry Jaschhof", license: "Unsplash License", source: "https://unsplash.com/photos/a-green-sea-turtle-swimming-in-the-ocean-uPmY42wjEcM" },
  "/images/stock/marsa-alam-coral-reef.webp": { subject: "A Red Sea reef wall off Marsa Alam covered in pink and yellow soft corals, with a cloud of small orange anthias fish in blue water.", creator: "Pascal van de Vendel", license: "Unsplash License", source: "https://unsplash.com/photos/a-coral-reef-with-fish-wPdbmBwyuEI" },
  "/images/stock/wadi-el-gemal-camels.webp": { subject: "A line of camels walking across the sandy floor of Wadi el-Gemal, past an acacia tree and bare rocky hills, south of Marsa Alam.", creator: "Ahmed Emad H", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:The_camel_family.jpg" },
  "/images/stock/white-desert-chalk-formations.webp": { subject: "Wind-carved chalk domes and outcrops of the White Desert rising from pale sand in low sunlight, with a single 4x4 small in the distance.", creator: "Ahmed Azab", license: "Unsplash License", source: "https://unsplash.com/photos/a-view-of-the-desert-from-a-distance-otWbS3M7Qpo" },
  "/images/stock/black-desert-volcanic-hills.webp": { subject: "Cone-shaped hills capped with black volcanic rock standing on a pale sand plain in the Black Desert near Bahariya Oasis.", creator: "Abdelrahman Ismail", license: "Unsplash License", source: "https://unsplash.com/photos/a-desert-landscape-with-a-mountain-in-the-distance-uQnXT5Blm1k" },
  "/images/stock/white-desert-camp-night.webp": { subject: "Lit dome tents pitched beside a mushroom-shaped chalk rock in the White Desert at night, under a sky of broken cloud and stars.", creator: "hany mohamed", license: "Unsplash License", source: "https://unsplash.com/photos/a-group-of-tents-in-a-desert-KJIGe_pPPHA" },
  "/images/stock/dakhla-al-qasr-old-town.webp": { subject: "The flat mud-brick roofs of the old town of Al-Qasr in Dakhla Oasis seen from above, with a dense date-palm grove behind and the desert escarpment on the horizon.", creator: "Daniel Csörföly", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Al-Qasr,OttomanVillage_2007jan15_nearDakhlaOasisEgypt54_byDanielCsorfoly.JPG" },
  "/images/stock/kharga-hibis-temple.webp": { subject: "The sandstone inner gateway and columned front of the Temple of Hibis in Kharga Oasis, seen head-on across the paved forecourt with palms behind.", creator: "Roland Unger", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:HibisGate3EastSide.jpg" },
  "/images/stock/kharga-bagawat-necropolis.webp": { subject: "Mud-brick chapel tombs with arched niches and doorways on the hillside of the early Christian necropolis of Bagawat in Kharga Oasis, with sand drifted into one arch.", creator: "Kabaeh49", license: "CC BY-SA 2.0 de", source: "https://commons.wikimedia.org/wiki/File:Bagawat.jpg" },
  "/images/stock/minya-nile-rowing-boat.webp": { subject: "A small rowing boat with two fishermen on the wide, calm Nile at Minya, with date palms on the far bank and the pale limestone cliffs of the eastern desert behind.", creator: "Ahmad Ajmi", license: "Unsplash License", source: "https://unsplash.com/photos/a-boat-on-the-water-dQID16T0Umw" },
  "/images/stock/beni-hasan-rock-tomb-entrance.webp": { subject: "The entrance to one of the Middle Kingdom rock tombs at Beni Hasan (tomb BH 5), its portico with two rock-cut columns hewn into the limestone cliff.", creator: "Olaf Tausch", license: "CC BY 3.0", source: "https://commons.wikimedia.org/wiki/File:Beni_Hassan_27.jpg" },
  "/images/stock/tuna-el-gebel-tomb-of-petosiris.webp": { subject: "The temple-shaped tomb of Petosiris at Tuna el-Gebel, its façade of four columns with floral capitals standing in the desert sand.", creator: "Einsamer Schütze (cropped)", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Tomb_of_Petosiris.JPG" },
  "/images/stock/dendera-hathor-temple-columns.webp": { subject: "Looking up at the Hathor-headed columns of the great hypostyle hall in the Temple of Hathor at Dendera, with the blue painted ceiling above.", creator: "David Leonard", license: "Unsplash License", source: "https://unsplash.com/photos/the-columns-of-the-temple-are-decorated-with-egyptian-art-vqPp5gK06uQ" },
  "/images/stock/abydos-seti-temple-barque-relief.webp": { subject: "A painted raised relief in the Chapel of Amun in the Temple of Seti I at Abydos: the king burns incense before the sacred barque of Amun, with the smaller barques of Khonsu and Mut behind.", creator: "A. Parrot", license: "CC0", source: "https://commons.wikimedia.org/wiki/File:Barques_of_Amun,_Mut,_and_Khonsu,_Temple_of_Seti_I_at_Abydos.jpg" },
  "/images/stock/abydos-osireion.webp": { subject: "The Osireion at Abydos seen from above: massive red granite pillars and lintels standing in green groundwater, with a wooden stair and walkway leading down into the sunken hall.", creator: "Olaf Tausch", license: "CC BY 3.0", source: "https://commons.wikimedia.org/wiki/File:Osireion_03.JPG" },
};

/** Needs no credit: CC0, public domain, public-domain mark. */
// The Unsplash License asks for no credit either (unsplash.com/license).
const NO_CREDIT = /^(CC0|Public domain|PDM|Unsplash License)/i;

/** The credit to print on a photograph, when its licence asks for one. */
export function creditFor(src?: string): PhotoCredit | undefined {
  const c = src ? photoCredits[src] : undefined;
  return c && !NO_CREDIT.test(c.license) ? c : undefined;
}
