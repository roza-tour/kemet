// Site search — the panel under the nav's input.
//
// Lives in a .js file rather than inside the component's <script> so that
// Astro bundles it into the shared /_astro module (it is identical on all 171
// pages) without astro check type-checking hand-written DOM code that has
// never pretended to satisfy strictNullChecks.

(function () {
    var form = document.getElementById("nsform");
    var input = document.getElementById("sin");
    var panel = document.getElementById("sp");
    var list = document.getElementById("sres");
    if (!form || !input || !panel || !list) return;

    var docs = null, loading = false, cursor = -1, lastReported = "";
    var depth = (location.pathname.match(/\//g) || []).length - 1;
    var prefix = depth > 0 ? "../".repeat(depth) : "";

    function load() {
      if (docs || loading) return;
      loading = true;
      fetch(prefix + "search-index.json", { credentials: "omit" })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          // Fold once per document, here, rather than on every keystroke of
          // every query. 278 records × three fields is a few milliseconds at
          // load; doing it inside the scorer would repeat it on every letter.
          for (var i = 0; i < d.length; i++) {
            d[i]._t = fold(d[i].t);
            d[i]._k = fold(d[i].k);
            d[i]._d = fold(d[i].d);
          }
          docs = d; loading = false; run();
        })
        .catch(function () { loading = false; });
    }

    /* The panel is a sibling of the nav, so it has to be told where the field
       is. Recomputed on every open, and on scroll or resize while open,
       because the bar changes height once the page is scrolled. */
    function place() {
      var r = input.getBoundingClientRect();
      // The field is narrow; the results are not. 520px is what it takes for a
      // journey title and its duration/price to sit on one line instead of
      // wrapping into a ragged column.
      var width = Math.max(r.width, 520);
      var right = Math.min(window.innerWidth - 12, r.right + 8);
      var left = Math.max(12, right - width);
      panel.style.top = Math.round(r.bottom + 10) + "px";
      panel.style.left = Math.round(left) + "px";
      panel.style.width = Math.round(Math.min(width, window.innerWidth - 24)) + "px";
    }

    /* Accent folding. The site is published in eight languages, and nobody
       reaches for the accent key in a search box: people type "croisiere",
       "egypte", "espanol". Without folding, a French visitor searching the
       French pages gets nothing — the index says "croisière" and the query
       says "croisiere", and a substring test calls that a miss.

       NFD splits an accented character into its base letter plus a combining
       mark, and the range below strips the marks. It leaves Cyrillic, Arabic
       and Latin-without-accents untouched, so the Russian pages are unaffected.
       Folding is applied to BOTH sides — once per document at load, once per
       keystroke for the query. */
    function fold(s) {
      return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    }

    /* Ranking. Every word in the query must match something, and where it
       matched decides the score: a word that starts a title beats one buried
       in a description, so "luxor" returns Luxor before a journey that merely
       mentions it.

       The last word of the query is matched as a PREFIX rather than whole,
       because it is usually still being typed — "nile cru" should already be
       showing the Nile cruise. Earlier words are treated as complete. */
    function score(doc, words, lastIsPrefix) {
      var t = doc._t, k = doc._k, d = doc._d, s = 0;
      for (var i = 0; i < words.length; i++) {
        var w = words[i], hit = 0;
        var isLast = lastIsPrefix && i === words.length - 1;
        if (t === w) hit = 120;
        else if (t.indexOf(w) === 0) hit = 90;
        else if (t.indexOf(" " + w) > -1) hit = 70;
        else if (t.indexOf(w) > -1) hit = 50;
        else if (k.indexOf(w) === 0 || k.indexOf(" " + w) > -1) hit = 30;
        else if (k.indexOf(w) > -1) hit = 16;
        else if (d.indexOf(w) > -1) hit = 10;
        // A prefix that matched nothing whole still counts, at a discount, so
        // a half-typed word narrows the list instead of emptying it.
        if (!hit && isLast) {
          if (t.indexOf(w) > -1) hit = 40;
          else if (k.indexOf(w) > -1) hit = 8;
          else if (d.indexOf(w) > -1) hit = 5;
        }
        if (!hit) return 0;
        s += hit;
      }
      return s;
    }

    function esc(s) {
      return String(s).replace(/[&<>"]/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
      });
    }

    function hide() {
      panel.hidden = true;
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
      cursor = -1;
    }

    function run() {
      var raw = input.value.trim();
      var q = fold(raw);
      cursor = -1;
      if (q.length < 2) { hide(); return; }
      if (!docs) { load(); return; }

      // The last word counts as a prefix unless the visitor typed a trailing
      // space — that space is the signal that they consider the word finished.
      var lastIsPrefix = !/\s$/.test(input.value);
      var words = q.split(/\s+/).filter(Boolean);
      var scored = [];
      for (var i = 0; i < docs.length; i++) {
        var sc = score(docs[i], words, lastIsPrefix);
        if (sc > 0) scored.push([sc, docs[i]]);
      }
      scored.sort(function (a, b) { return b[0] - a[0]; });
      var top = scored.slice(0, 8).map(function (x) { return x[1]; });

      if (!top.length) {
        list.innerHTML =
          '<li class="sres-none">Nothing matched <b>' + esc(raw) + '</b>. ' +
          '<a href="' + prefix + 'contact.html">Ask us directly</a> — journeys are ' +
          'planned individually, so one that is not on the site can still be built.</li>';
        report(q, 0);
      } else {
        list.innerHTML = top.map(function (r, i) {
          return '<li role="option" id="sres-' + i + '" aria-selected="false">' +
            '<a href="' + prefix + esc(r.u) + '">' +
              '<span class="sres-k">' + esc(r.s) + '</span>' +
              '<span class="sres-t">' + esc(r.t) + '</span>' +
              '<span class="sres-d">' + esc(r.d) + '</span>' +
              (r.m ? '<span class="sres-m">' + esc(r.m) + '</span>' : "") +
            "</a></li>";
        }).join("");
        report(q, top.length);
      }
      place();
      panel.hidden = false;
      input.setAttribute("aria-expanded", "true");
    }

    /* Reported through an event, the same way the enquiry form reports its
       outcome — this component need not know how the collector works.
       Debounced, so typing "luxor" sends one search rather than five. */
    var timer;
    function report(q, hits) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (q.length < 3 || q === lastReported) return;
        lastReported = q;
        document.dispatchEvent(new CustomEvent("kemet:search", { detail: { q: q, hits: hits } }));
      }, 900);
    }

    function move(step) {
      var items = list.querySelectorAll("li[role=option]");
      if (!items.length) return;
      if (cursor > -1 && items[cursor]) items[cursor].setAttribute("aria-selected", "false");
      cursor = (cursor + step + items.length) % items.length;
      items[cursor].setAttribute("aria-selected", "true");
      items[cursor].scrollIntoView({ block: "nearest" });
      input.setAttribute("aria-activedescendant", items[cursor].id);
    }

    input.addEventListener("focus", load);
    input.addEventListener("input", run);
    form.addEventListener("submit", function (e) {
      // With JS the first result is the answer; without it the form falls
      // through to the site index, which is why it has a real action.
      var first = list.querySelector("li[role=option] a");
      if (first) { e.preventDefault(); location.href = first.getAttribute("href"); }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
      else if (e.key === "Escape") { input.value = ""; hide(); input.blur(); }
      else if (e.key === "Enter" && cursor > -1) {
        var items = list.querySelectorAll("li[role=option] a");
        if (items[cursor]) { e.preventDefault(); location.href = items[cursor].getAttribute("href"); }
      }
    });

    document.addEventListener("click", function (e) {
      if (!panel.hidden && !panel.contains(e.target) && !form.contains(e.target)) hide();
    });
    addEventListener("scroll", function () { if (!panel.hidden) place(); }, { passive: true });
    addEventListener("resize", function () { if (!panel.hidden) place(); });

    // "/" and Cmd/Ctrl-K jump to the field from anywhere on the page.
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key === "k")) {
        var tag = (document.activeElement && document.activeElement.tagName) || "";
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  })();
