// ---------------------------------------------------------------------------
// Kemet — Egyptian cuisine, split into savoury dishes and sweets for the
// two-part layout on cuisine.html.
// ---------------------------------------------------------------------------
import type { Dish } from "@/types";

export const savoury: Dish[] = [
  {
    name: "Koshari",
    native: "كشري",
    tags: ["Vegetarian", "National dish"],
    image: { alt: "Koshari, with tomato sauce poured over pasta, lentils, chickpeas and crisp fried onions", src: "/images/food/koshari-sauce-pour.webp", width: 720, height: 900 },
    note: "Egypt's beloved national dish — rice, lentils, macaroni and chickpeas under crisp fried onions and a tangy tomato-garlic sauce.",
  },
  {
    name: "Ful & Falafel",
    native: "فول وطعمية",
    tags: ["Vegetarian", "Breakfast"],
    image: { alt: "A bowl of ful medames topped with tomato and herbs, with lemon and a glass of tea", src: "/images/food/ful-medames-bowl.webp", width: 702, height: 437 },
    note: "Slow-stewed fava beans (ful medames) with ta'meya, the green, herb-flecked Egyptian falafel made from fava rather than chickpea.",
  },
  {
    name: "Molokhia",
    native: "ملوخية",
    tags: ["Home cooking"],
    image: { alt: "A bowl of molokhia, the green jute-mallow soup", src: "/images/stock/molokhia.webp", width: 1280, height: 1037 },
    note: "A silky, garlicky green soup of jute-mallow leaves, simmered with coriander and served over rice with chicken, rabbit or beef.",
  },
  {
    name: "Stuffed Pigeon",
    native: "حمام محشي",
    tags: ["Celebrations"],
    image: { alt: "Two roasted pigeons stuffed with rice (hamam mahshi) on a bed of greens", src: "/images/food/hamam-mahshi.webp", width: 735, height: 478 },
    note: "Hamam mahshi — pigeon roasted and stuffed with seasoned freekeh or rice, a celebratory dish prized across Egypt.",
  },
  {
    name: "Feteer",
    native: "فطير مشلتت",
    tags: ["Sweet or savoury"],
    image: { alt: "A stack of flaky, many-layered feteer pastry", src: "/images/stock/feteer.webp", width: 1280, height: 853 },
    note: "Feteer meshaltet, a many-layered flaky pastry pulled paper-thin and baked golden, served plain, savoury or with honey.",
  },
  {
    name: "Sayadeya",
    native: "صيادية",
    tags: ["Alexandria & the coast"],
    image: { alt: "Spiced fish served over golden rice with pine nuts", src: "/images/stock/sayadeya.webp", width: 1280, height: 867 },
    note: "A coastal favourite of spiced fish baked over caramelised-onion rice, fragrant with cumin — the taste of Alexandria and the Red Sea.",
  },
];

export const sweets: Dish[] = [
  {
    name: "Kunafa",
    native: "كنافة",
    tags: ["Ramadan"],
    image: { alt: "Kunafa topped with pistachio, a slice lifted to show the melted cheese inside", src: "/images/food/kunafa-pistachio.webp", width: 736, height: 920 },
    note: "Fine shredded pastry over sweet cheese or cream, baked crisp and drenched in syrup — a centrepiece of Ramadan tables and celebrations.",
  },
  {
    name: "Basbousa",
    native: "بسبوسة",
    tags: ["Semolina & syrup"],
    image: { alt: "Squares of basbousa, each topped with an almond", src: "/images/food/basbousa-almond.webp", width: 720, height: 720 },
    note: "Syrup-soaked semolina cake, tender and grainy, crowned with an almond and often scented with coconut or orange-blossom water.",
  },
  {
    name: "Om Ali",
    native: "أم علي",
    tags: ["Served warm"],
    image: { alt: "Om Ali baked in a pan, with almonds, pistachios and coconut", src: "/images/stock/om-ali.webp", width: 1280, height: 960 },
    note: "Egypt's warm bread-and-milk pudding baked with nuts and raisins — comfort food wrapped in a famous medieval palace legend.",
  },
  {
    name: "Qatayef",
    native: "قطايف",
    tags: ["Ramadan"],
    image: { alt: "Qatayef pancakes folded over a pistachio filling", src: "/images/stock/qatayef.webp", width: 1280, height: 960 },
    note: "Folded pancakes stuffed with nuts or sweet cream, then fried or baked in syrup — made almost exclusively during Ramadan.",
  },
];
