// ---------------------------------------------------------------------------
// Kemet — signature activities, shown as a grid of cards on activities.html.
// ---------------------------------------------------------------------------
import type { Activity } from "@/types";

export const activities: Activity[] = [
  {
    id: "balloon-luxor",
    title: "Hot-Air Balloon over Luxor",
    place: "Luxor",
    blurb:
      "Lift off at dawn over the West Bank as the temples and tombs of Thebes emerge from the mist and the Nile turns gold below.",
    image: { src: "/images/activities/act-balloon-luxor.webp", alt: "Hot-air balloons drifting over the Nile valley and temples of Luxor at dawn", width: 1300, height: 867 },
  },
  {
    id: "sufi-tanoura",
    title: "Sufi Tanoura Show",
    place: "Cairo",
    blurb:
      "An evening of whirling dervishes and live music in a restored Ottoman palace — colour, percussion and devotion in motion.",
    image: { src: "/images/activities/act-tanoura.webp", alt: "A Sufi tanoura performer spinning in a brightly coloured skirt", width: 1200, height: 800 },
  },
  {
    id: "banana-boat",
    title: "Banana Boat Ride",
    place: "Sharm El Sheikh",
    blurb:
      "A fast, laughter-filled spin across the turquoise shallows of the Red Sea — the easiest way onto the water for all ages.",
    image: { src: "/images/activities/act-banana-boat.webp", alt: "Guests riding a banana boat across the turquoise Red Sea", width: 1200, height: 800 },
  },
  {
    id: "parasailing",
    title: "Parasailing",
    place: "Sharm El Sheikh",
    blurb:
      "Rise on the wind above the reef line for a gull's-eye view of the coast, the corals and the desert mountains behind.",
    image: { src: "/images/activities/act-parasailing.webp", alt: "A pair parasailing above the Red Sea under a colourful canopy", width: 1200, height: 800 },
  },
  {
    id: "felucca-sunset",
    title: "Felucca Sail at Sunset",
    place: "Aswan",
    blurb:
      "Drift under a lateen sail past Elephantine Island and the Nubian shore as the sun sinks behind the dunes — Egypt at its most serene.",
    image: { src: "/images/activities/act-felucca-sunset.webp", alt: "A felucca under sail on the Nile at golden sunset", width: 1300, height: 867 },
  },
  {
    id: "camel-pyramids",
    title: "Camel Ride at the Pyramids",
    place: "Giza",
    blurb:
      "Cross the desert edge by camel for the timeless approach to the pyramids and the panoramic viewpoint beyond the plateau.",
    image: { src: "/images/activities/act-camel-pyramids.webp", alt: "Guests on a camel caravan before the Pyramids of Giza", width: 1300, height: 867 },
  },
  {
    id: "diving-red-sea",
    title: "Diving the Red Sea",
    place: "Marsa Alam",
    blurb:
      "Descend reef walls alive with coral and fish in some of the clearest, warmest water on earth, from beginner dives to deep sites.",
    image: { src: "/images/activities/act-diving.webp", alt: "A scuba diver beside a vivid Red Sea coral reef teeming with fish", width: 1200, height: 800 },
  },
  {
    id: "quad-biking",
    title: "Quad Biking",
    place: "Western Desert",
    blurb:
      "Throttle across open dunes into the silence of the desert, stopping for sweet tea and a sunset that runs the full spectrum of gold.",
    image: { src: "/images/activities/act-quad-biking.webp", alt: "Guests quad biking across desert dunes near the Giza pyramids", width: 1300, height: 867 },
  },
];
