// Currency — the header's currency choice (components/HeaderPrefs.astro).
//
// Prices are set and shown in euros everywhere; another currency only adds an
// approximate figure under each price marked data-eur. The choice is kept on
// this device (localStorage, wrapped: a private window simply falls back).
// With no choice made, visitors in the Americas — decided by the device's time
// zone, not its language, because many Europeans browse in American English —
// see dollars (Canadian dollars in Canada); everyone else sees euros only.
//
// The rates and symbols travel on the menu itself (data-fx, data-sym), set at
// build time from config/site.ts, so this file stays the same on every page
// and is cached once.
(function () {
  var menu = document.querySelector(".hp-cur");
  if (!menu) return;
  var fx = {}, sym = {};
  try { fx = JSON.parse(menu.getAttribute("data-fx") || "{}"); } catch (e) {}
  try { sym = JSON.parse(menu.getAttribute("data-sym") || "{}"); } catch (e) {}

  var CANADA = /^America\/(Toronto|Montreal|Vancouver|Edmonton|Winnipeg|Halifax|St_Johns|Regina|Moncton|Whitehorse|Yellowknife|Iqaluit|Glace_Bay|Goose_Bay|Swift_Current|Dawson_Creek|Fort_Nelson|Creston|Atikokan|Rankin_Inlet|Resolute|Cambridge_Bay|Inuvik|Dawson|Nipigon|Thunder_Bay|Rainy_River|Pangnirtung)$/;

  function initial() {
    try {
      var saved = localStorage.getItem("kemet_cur");
      if (saved && (saved === "EUR" || fx[saved])) return saved;
    } catch (e) {}
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (tz.indexOf("America/") !== 0) return "EUR";
      var langs = (navigator.languages || [navigator.language || ""]).join(" ");
      return CANADA.test(tz) || /-CA\b/i.test(langs) ? "CAD" : "USD";
    } catch (e) { return "EUR"; }
  }

  function apply(code) {
    var old = document.querySelectorAll("small.fx");
    for (var i = 0; i < old.length; i++) old[i].parentNode.removeChild(old[i]);
    if (code !== "EUR" && fx[code]) {
      var s0 = sym[code] || code;
      // "CHF 2,100" and "AED 8,400" need a space; "US$2,290" and "£1,700" do not.
      var lead = "≈ " + s0 + (/[A-Z]$/.test(s0) ? " " : "");
      var els = document.querySelectorAll("[data-eur]");
      for (var j = 0; j < els.length; j++) {
        var v = Math.round(Number(els[j].getAttribute("data-eur")) * fx[code]);
        if (!v) continue;
        var small = document.createElement("small");
        small.className = "fx";
        var bdi = document.createElement("bdi"); // keeps "≈ US$2,290" in order on Arabic pages
        bdi.textContent = lead + v.toLocaleString("en-US");
        small.appendChild(bdi);
        els[j].appendChild(small);
      }
    }
    var labels = document.querySelectorAll("[data-cur-label]");
    for (var l = 0; l < labels.length; l++) labels[l].textContent = code;
    var btns = document.querySelectorAll("[data-cur]");
    for (var m = 0; m < btns.length; m++) btns[m].setAttribute("aria-pressed", btns[m].getAttribute("data-cur") === code ? "true" : "false");
  }

  function closeAll(except) {
    var open = document.querySelectorAll("details.hp[open]");
    for (var n = 0; n < open.length; n++) if (open[n] !== except) open[n].removeAttribute("open");
  }

  apply(initial());

  document.addEventListener("click", function (e) {
    var t = e.target;
    var btn = t && t.closest ? t.closest("[data-cur]") : null;
    if (btn) {
      var code = btn.getAttribute("data-cur");
      try { localStorage.setItem("kemet_cur", code); } catch (err) {}
      apply(code);
      closeAll(null);
      return;
    }
    // A click anywhere else closes an open panel; opening one closes the other.
    var inside = t && t.closest ? t.closest("details.hp") : null;
    closeAll(inside);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll(null);
  });
})();
