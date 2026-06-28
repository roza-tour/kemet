// ---------------------------------------------------------------------------
// Kemet — Egyptian cuisine, split into savoury dishes and sweets for the
// two-part layout on cuisine.html.
// ---------------------------------------------------------------------------
import type { Dish } from "@/types";

export const savoury: Dish[] = [
  {
    name: "Koshari",
    note: "Egypt's beloved national dish — rice, lentils, macaroni and chickpeas under crisp fried onions and a tangy tomato-garlic sauce.",
  },
  {
    name: "Ful & Falafel",
    note: "Slow-stewed fava beans (ful medames) with ta'meya, the green, herb-flecked Egyptian falafel made from fava rather than chickpea.",
  },
  {
    name: "Molokhia",
    note: "A silky, garlicky green soup of jute-mallow leaves, simmered with coriander and served over rice with chicken, rabbit or beef.",
  },
  {
    name: "Stuffed Pigeon",
    note: "Hamam mahshi — pigeon roasted and stuffed with seasoned freekeh or rice, a celebratory dish prized across Egypt.",
  },
  {
    name: "Feteer",
    note: "Feteer meshaltet, a many-layered flaky pastry pulled paper-thin and baked golden, served plain, savoury or with honey.",
  },
  {
    name: "Sayadeya",
    note: "A coastal favourite of spiced fish baked over caramelised-onion rice, fragrant with cumin — the taste of Alexandria and the Red Sea.",
  },
];

export const sweets: Dish[] = [
  {
    name: "Kunafa",
    note: "Shredded pastry over sweet cheese or cream, soaked in syrup.",
  },
  {
    name: "Basbousa",
    note: "Syrup-soaked semolina cake, crowned with an almond.",
  },
  {
    name: "Om Ali",
    note: "Warm pastry-and-milk pudding with nuts and raisins.",
  },
  {
    name: "Qatayef",
    note: "Stuffed pancakes of nuts or cream, a Ramadan classic.",
  },
];
