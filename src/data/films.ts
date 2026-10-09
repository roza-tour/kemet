// ---------------------------------------------------------------------------
// Our own footage. One list, read by the balloon experience page and by
// travellers.html, so a film is described the same way in both places and in
// both pages' VideoObject data.
//
// Both were sent by the owner on 9 Oct 2026, filmed from a basket over
// Luxor's West Bank that morning. Re-encoded for the web with the location
// and device metadata removed. The flight film is cut from 2m24s to its best
// 72 seconds — the palm groves and the temple ruins under the Theban hills,
// then the balloons over the villages at sunrise — leaving out the minute of
// rooftops and road in between, and the passengers' faces.
// ---------------------------------------------------------------------------
import type { Film } from "@/types/primitives";

export const balloonFlightFilm: Film = {
  src: "/media/balloon-flight-west-bank.mp4",
  poster: "/media/balloon-flight-west-bank-poster.webp",
  width: 360,
  height: 640,
  label: "From the basket — over the West Bank at sunrise",
  alt: "Film from a hot-air balloon over Luxor's West Bank at sunrise: palm groves, the temple ruins below the Theban hills, then balloons rising over the villages",
  duration: "PT1M12S",
  date: "2026-10-09",
  sound: true,
};

export const balloonDawnFilm: Film = {
  src: "/media/balloons-luxor-sunrise.mp4",
  poster: "/media/balloons-luxor-sunrise-poster.webp",
  width: 640,
  height: 360,
  label: "Twenty seconds at dawn",
  alt: "Film of hot-air balloons drifting at sunrise over the fields of Luxor's West Bank",
  duration: "PT20S",
  date: "2026-10-09",
};

export const balloonFilms: Film[] = [balloonFlightFilm, balloonDawnFilm];
