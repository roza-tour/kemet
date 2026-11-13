// The home hero as a slow reel (components/Hero.astro).
//
// The hero's own photograph is in the page and paints first. Once the page has
// finished loading, the other photographs are fetched one at a time and
// cross-fade in, each with a slow drift — the opening of a film rather than a
// slideshow. Nothing here runs for a visitor who asked for reduced motion or
// for less data, and the reel pauses while the tab is in the background.
(function () {
  var bg = document.querySelector(".hero .bg[data-reel]");
  if (!bg) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var conn = navigator.connection;
  if (conn && (conn.saveData || /2g/.test(conn.effectiveType || ""))) return;
  var extra;
  try { extra = JSON.parse(bg.getAttribute("data-reel")); } catch (e) { return; }
  var first = bg.querySelector("img");
  if (!first || !extra || !extra.length) return;

  var imgs = [first], i = 0, timer = null;
  var HOLD = 7000;

  function show(n) {
    imgs[i].classList.remove("is-on");
    imgs[n].classList.add("is-on");
    i = n;
    timer = setTimeout(next, HOLD);
  }
  function next() {
    var n = (i + 1) % (extra.length + 1);
    if (imgs[n]) return show(n);
    var s = extra[n - 1], im = new Image();
    im.alt = "";                       // the first photograph carries the description
    im.setAttribute("aria-hidden", "true");
    im.decoding = "async";
    im.sizes = "100vw";
    if (s.srcset) im.srcset = s.srcset;
    if (s.pos) im.style.objectPosition = s.pos;
    im.onload = function () { bg.appendChild(im); imgs[n] = im; requestAnimationFrame(function () { show(n); }); };
    im.onerror = function () { timer = setTimeout(next, HOLD); };
    im.src = s.src;
  }
  function start() {
    bg.classList.add("reel");
    first.classList.add("is-on");
    timer = setTimeout(next, HOLD);
  }
  if (document.readyState === "complete") start(); else window.addEventListener("load", start);
  document.addEventListener("visibilitychange", function () {
    clearTimeout(timer);
    if (!document.hidden && bg.classList.contains("reel")) timer = setTimeout(next, 3000);
  });
})();
