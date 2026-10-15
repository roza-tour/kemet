// ---------------------------------------------------------------------------
// Los viajes en español.
//
// Escrito para quien lee en español a ambos lados del Atlántico: «usted»,
// sin «vosotros», y las palabras que se entienden en Madrid y en Ciudad de
// México (visa, recogida, traslados). Las líneas repetidas viven en
// phrasebook.ts.
// ---------------------------------------------------------------------------
import type { TourText } from "./types";

export const es: TourText[] = [
  // ===== Cairo Authentic Food ===========================================
  {
    slug: "tour-cairo-food",
    localeSlug: "noche-gastronomica-en-el-cairo",
    metaTitle: "Noche gastronómica en El Cairo, en privado | Kemet",
    metaDescription: "Una noche por los sabores de El Cairo: koshari, ful y ta'meya, hawawshi y pichón, kunafa y basbousa, y al final un ahwa tradicional.",
    keywords: "tour gastronómico el cairo, comida callejera el cairo, koshari, comida egipcia, tour nocturno el cairo",
    crumb: "Noche gastronómica",
    title: "El Cairo, con todos sus sabores",
    subtitle: "Una noche a pie por los sabores de El Cairo: koshari, clásicos callejeros, pichón a la parrilla y dulces bañados en almíbar.",
    durationLabel: "Noche (unas 4 horas)",
    startPoint: "Hotel en El Cairo",
    summary: "Una degustación guiada por la noche de los platos más queridos de El Cairo: koshari, ful y ta'meya, hawawshi y pichón a la parrilla, kunafa y basbousa, para terminar en un ahwa tradicional.",
    overview: "La capital de Egipto se descubre mejor a pie y después del atardecer. Esta noche guiada le lleva por los platos que definen el día a día de El Cairo: el koshari, una sinfonía de carbohidratos; el ful y la ta'meya, que se comen a cualquier hora; el hawawshi relleno de carne y el pichón a la parrilla; y, como final dulce, la kunafa y la basbousa. Se termina donde terminan los cairotas: con té de menta y shisha en un ahwa, el café tradicional. Un contrapunto relajado y sabroso a los monumentos.",
    itinerary: [
      {
        title: "Koshari",
        text: "Se empieza con el plato nacional de Egipto: el koshari, una reconfortante combinación de arroz, lentejas, pasta y garbanzos bajo cebolla frita crujiente y una salsa de tomate ácida.",
        photos: [{ alt: "Koshari: la salsa de tomate vertida sobre la pasta, las lentejas, los garbanzos y la cebolla frita", label: "Koshari" }],
      },
      {
        title: "Ful y ta'meya",
        text: "Pruebe el ful medames, las habas cocidas a fuego lento que se comen de la mañana a la noche, junto a la ta'meya, la versión egipcia del falafel hecha con habas, frita al momento.",
        photos: [{ alt: "Un plato hondo de ful medames con tomate y hierbas, limón y un vaso de té", label: "Ful medames" }, { alt: "Ta'meya con costra de sésamo en un plato y, detrás, bolsas de la masa verde de habas y hierbas", label: "Ta'meya" }],
      },
      {
        title: "Hawawshi y pichón a la parrilla",
        text: "Llega el corazón salado de la noche: el hawawshi, carne picada especiada horneada dentro de un pan crujiente, y el hamam mahshi, pichón a la parrilla relleno de arroz sazonado.",
        photos: [{ alt: "Hawawshi abierto que muestra la carne picada especiada, con encurtidos al lado", label: "Hawawshi" }, { alt: "Dos pichones asados rellenos de arroz (hamam mahshi) sobre hojas verdes", label: "Pichón relleno" }],
      },
      {
        title: "Kunafa y basbousa",
        text: "Llega el postre: kunafa tibia, con su masa de hilos sobre queso dulce, y cuadrados de basbousa, el pastel de sémola bañado en almíbar.",
        photos: [{ alt: "Kunafa con pistacho, con una porción levantada sobre el queso fundido", label: "Kunafa" }, { alt: "Cuadrados de basbousa, cada uno con una almendra", label: "Basbousa" }],
      },
      {
        title: "Un ahwa tradicional",
        text: "Se termina en un ahwa de una calle secundaria, con té de menta, café turco y el murmullo de la ciudad: así debería terminar toda noche en El Cairo.",
        photos: [{ alt: "Dos vasos de té en la mesa de un café tradicional, con las paredes cubiertas de viejas fotos enmarcadas", label: "En el ahwa" }],
      },
    ],
    faqs: [
      { q: "¿La comida está incluida en el precio?", a: "No. El precio cubre su guía gastronómico privado, el recorrido y los traslados. La comida y las bebidas se pagan directamente en cada parada; su guía se encarga de pedir y puede indicarle el precio de cada plato." },
      { q: "¿La comida es segura para los visitantes?", a: "Sí: elegimos locales concurridos y de confianza, con mucha rotación, y su guía se encarga de pedir. Hay agua embotellada durante toda la noche." },
      { q: "¿Se adaptan a dietas especiales?", a: "Los vegetarianos comen muy bien: el koshari, el ful, la ta'meya y los dulces no llevan carne. Avísenos con antelación de cualquier alergia y adaptaremos el recorrido." },
      { q: "¿Terminaré demasiado lleno?", a: "Usted decide cuánto pedir en cada parada, y compartiendo los platos se prueba de todo sin excederse en ninguno. Venga con hambre, pero sin preocupación." },
    ],
  },
];
