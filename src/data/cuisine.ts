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
    note: "Fine shredded pastry over sweet cheese or cream, baked crisp and drenched in syrup — a centrepiece of Ramadan tables and celebrations.",
  },
  {
    name: "Basbousa",
    note: "Syrup-soaked semolina cake, tender and grainy, crowned with an almond and often scented with coconut or orange-blossom water.",
  },
  {
    name: "Om Ali",
    note: "Egypt's warm bread-and-milk pudding baked with nuts and raisins — comfort food wrapped in a famous medieval palace legend.",
  },
  {
    name: "Qatayef",
    note: "Folded pancakes stuffed with nuts or sweet cream, then fried or baked in syrup — made almost exclusively during Ramadan.",
  },
];
