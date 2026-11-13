// Design your journey on the map (components/JourneyMap.astro).
//
// The map, the stops and the catalogue journeys are already in the page. This
// keeps the list of chosen stops in the order they were tapped, draws the
// route through them, lets each stop's nights be changed, and writes the
// message that goes to WhatsApp or email — from the visitor's own app; nothing
// is stored and nothing is sent to us by the page.
(function () {
  var root = document.querySelector(".jmap[data-jmap]");
  if (!root) return;
  var cfg;
  try { cfg = JSON.parse(root.getAttribute("data-jmap")); } catch (e) { return; }
  root.classList.add("is-live");

  var stops = {};
  var nodes = root.querySelectorAll(".jm-stop");
  for (var i = 0; i < nodes.length; i++) {
    var g = nodes[i];
    stops[g.getAttribute("data-stop")] = {
      el: g, x: Number(g.getAttribute("data-x")), y: Number(g.getAttribute("data-y")),
      name: g.getAttribute("data-name"), def: Number(g.getAttribute("data-nights")),
    };
  }
  var order = [];       // stop keys, in the order tapped
  var nights = {};      // key → nights
  var cruise = false;

  var route = root.querySelector(".jm-route");
  var list = root.querySelector(".jmap-list");
  var empty = root.querySelector(".jmap-empty");
  var cruiseRow = root.querySelector(".jmap-cruise");
  var cruiseBox = cruiseRow.querySelector("input");
  var totalRow = root.querySelector(".jmap-total");
  var send = root.querySelector(".jmap-send");
  var clear = root.querySelector(".jmap-clear");
  var wa = root.querySelector(".jmap-wa");
  var mail = root.querySelector(".jmap-mail");
  var near = root.querySelectorAll(".jmap-near li");

  /** Arabic pages write their numbers in Arabic-Indic digits. */
  function digits(n) {
    return cfg.lang === "ar" ? String(n).replace(/[0-9]/g, function (d) { return String.fromCharCode(0x660 + Number(d)); }) : String(n);
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  /** A gentle curve from stop to stop, bowing the same way each time. */
  function path() {
    if (order.length < 2) return "";
    var d = "";
    for (var k = 0; k < order.length - 1; k++) {
      var a = stops[order[k]], b = stops[order[k + 1]];
      var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      var dx = b.x - a.x, dy = b.y - a.y;
      var cx = mx - dy * 0.16, cy = my + dx * 0.16;
      d += (k ? " " : "M" + a.x + " " + a.y + " ") + "Q" + cx.toFixed(1) + " " + cy.toFixed(1) + " " + b.x + " " + b.y;
    }
    return d;
  }

  function message() {
    var lines = [cfg.hello, ""];
    var sum = 0;
    order.forEach(function (key, n) {
      var v = nights[key];
      sum += v;
      lines.push(digits(n + 1) + ". " + stops[key].name + " — " + (v ? cfg.nights + ": " + digits(v) : cfg.dayVisit));
    });
    lines.push("", cfg.total + ": " + digits(sum));
    if (cruise && has("luxor") && has("aswan")) lines.push(cfg.cruise);
    return lines.join("\n");
  }
  function has(k) { return order.indexOf(k) !== -1; }

  function render() {
    var some = order.length > 0;
    route.setAttribute("d", path());
    for (var key in stops) {
      var at = order.indexOf(key);
      stops[key].el.setAttribute("aria-pressed", at === -1 ? "false" : "true");
      stops[key].el.querySelector(".jm-num").textContent = at === -1 ? "" : digits(at + 1);
    }

    list.textContent = "";
    var sum = 0;
    order.forEach(function (key, n) {
      var v = nights[key];
      sum += v;
      var li = el("li");
      li.appendChild(el("span", "n", digits(n + 1)));
      var nm = el("span", "nm", stops[key].name);
      nm.appendChild(el("small", "", v ? cfg.nights : cfg.dayVisit));
      li.appendChild(nm);
      var step = el("span", "jmap-step");
      var minus = el("button", "", "−"); minus.type = "button"; minus.setAttribute("aria-label", cfg.fewer + " — " + stops[key].name);
      var plus = el("button", "", "+"); plus.type = "button"; plus.setAttribute("aria-label", cfg.more + " — " + stops[key].name);
      minus.addEventListener("click", function () { nights[key] = Math.max(0, nights[key] - 1); render(); });
      plus.addEventListener("click", function () { nights[key] = Math.min(21, nights[key] + 1); render(); });
      step.appendChild(minus); step.appendChild(el("b", "", digits(v))); step.appendChild(plus);
      li.appendChild(step);
      var rm = el("button", "rm", "×"); rm.type = "button"; rm.setAttribute("aria-label", cfg.remove + " — " + stops[key].name);
      rm.addEventListener("click", function () { toggle(key); });
      li.appendChild(rm);
      list.appendChild(li);
    });

    empty.hidden = some;
    list.hidden = !some;
    totalRow.hidden = !some;
    send.hidden = !some;
    clear.hidden = !some;
    cruiseRow.hidden = !(has("luxor") && has("aswan"));
    totalRow.querySelector("b").textContent = digits(sum);

    if (some) {
      var msg = message();
      wa.href = "https://wa.me/" + cfg.wa + "?text=" + encodeURIComponent(msg);
      mail.href = "mailto:" + cfg.mail + "?subject=" + encodeURIComponent(cfg.subject) + "&body=" + encodeURIComponent(msg);
    }

    // The catalogue journeys that share the most stops with this route.
    var scored = [];
    for (var j = 0; j < near.length; j++) {
      var keys = (near[j].getAttribute("data-keys") || "").split(" ");
      var both = 0;
      for (var q = 0; q < keys.length; q++) if (has(keys[q])) both++;
      var union = keys.length + order.length - both;
      near[j].classList.remove("is-near");
      near[j].style.order = "";
      scored.push({ li: near[j], score: some ? (union ? both / union : 0) : (keys.length >= 3 ? 0.1 : 0), size: keys.length });
    }
    scored.sort(function (a, b) { return b.score - a.score || b.size - a.size; });
    for (var s = 0, shown = 0; s < scored.length && shown < 3; s++) {
      if (scored[s].score <= 0) break;
      scored[s].li.classList.add("is-near");
      scored[s].li.style.order = String(shown++);
    }
  }

  function toggle(key) {
    var at = order.indexOf(key);
    if (at === -1) { order.push(key); if (nights[key] == null) nights[key] = stops[key].def; }
    else order.splice(at, 1);
    render();
  }

  root.addEventListener("click", function (e) {
    var g = e.target.closest ? e.target.closest(".jm-stop") : null;
    if (g) toggle(g.getAttribute("data-stop"));
  });
  root.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var g = e.target.closest ? e.target.closest(".jm-stop") : null;
    if (g) { e.preventDefault(); toggle(g.getAttribute("data-stop")); }
  });
  cruiseBox.addEventListener("change", function () { cruise = cruiseBox.checked; render(); });
  clear.addEventListener("click", function () { order = []; nights = {}; cruise = false; cruiseBox.checked = false; render(); });

  render();
})();
