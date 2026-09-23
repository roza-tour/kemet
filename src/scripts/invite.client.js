// The access invite — shown once, after two minutes counted across pages.
//
// In a .js file for the same reason as search.client.js: bundled and cached
// once for the whole visit, and not type-checked as TypeScript.

(function () {
    var KEY = "kemet-invite-v1";      // joined or dismissed — never again here
    var SPENT = "kemet-invite-spent";  // time on the site this visit, in ms
    var WAIT = 120000;                 // two minutes, counted across pages
    var root = document.getElementById("access-invite");
    if (!root) return;

    // "?invite=now" forces it open immediately, for looking at it on purpose.
    // Without this the only way to see it again is to clear site data, which is
    // how a working dialog gets reported as broken.
    var preview = /[?&]invite=now/.test(location.search);

    // Never interrupt a visitor who is already in a transaction or reading the
    // terms — and never on a page reached from an email we sent.
    var path = location.pathname;
    if (!preview) {
      if (/(contact|booking|privacy|terms|unsubscribe)/.test(path)) return;
      try { if (localStorage.getItem(KEY)) return; } catch (e) { return; }
    }

    var opened = false, lastFocus = null;

    function remember() { try { localStorage.setItem(KEY, String(Date.now())); } catch (e) {} }

    function open() {
      if (opened) return;
      opened = true;
      lastFocus = document.activeElement;
      root.hidden = false;
      root.setAttribute("aria-hidden", "false");
      requestAnimationFrame(function () { root.classList.add("is-open"); });
      var f = root.querySelector('input[type="email"]');
      if (f) setTimeout(function () { f.focus(); }, 420);
      detach();
    }

    function close() {
      root.classList.remove("is-open");
      root.setAttribute("aria-hidden", "true");
      setTimeout(function () { root.hidden = true; }, 300);
      remember();
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    root.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) { e.preventDefault(); close(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && opened && !root.hidden) close();
      // Keep the tab ring inside the dialog while it is open.
      if (e.key === "Tab" && opened && !root.hidden) {
        var f = root.querySelectorAll('button, input, a[href]');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // --- What opens it ------------------------------------------------------
    var armed = false;
    var onOut = function (e) { if (armed && e.clientY <= 0) open(); };
    var onScroll = function () {
      if (!armed) return;
      var d = document.documentElement;
      var pct = (scrollY + innerHeight) / Math.max(d.scrollHeight, 1);
      if (pct > 0.55) open();
    };
    function detach() {
      document.removeEventListener("mouseout", onOut);
      removeEventListener("scroll", onScroll);
    }
    // TWO MINUTES ON THE SITE, NOT TWO MINUTES ON A PAGE.
    //
    // The timer used to start again on every page load, which meant a visitor
    // reading four pages for forty seconds each — nearly three minutes, exactly
    // the engaged reader this is for — never saw it at all, because no single
    // page ever reached two minutes. It was reported as the dialog being
    // broken, and it was: the rule was written about pages when it was always
    // meant to be about the visit.
    //
    // Time spent is now carried across pages in sessionStorage, so the two
    // minutes accumulate however the visitor moves around, and reset when the
    // tab closes — a new visit starts its own count.
    function spent() { try { return parseInt(sessionStorage.getItem(SPENT), 10) || 0; } catch (e) { return 0; } }
    function arm() {
      armed = true;
      document.addEventListener("mouseout", onOut);
      addEventListener("scroll", onScroll, { passive: true });
    }

    if (preview) { arm(); open(); }
    else {
      var carried = spent();
      var began = Date.now();
      // Bank the time from this page as it is spent, so a visitor who leaves
      // mid-page does not lose the seconds they were here.
      var tick = setInterval(function () {
        try { sessionStorage.setItem(SPENT, String(carried + (Date.now() - began))); } catch (e) {}
      }, 5000);
      addEventListener("pagehide", function () {
        clearInterval(tick);
        try { sessionStorage.setItem(SPENT, String(carried + (Date.now() - began))); } catch (e) {}
      });
      setTimeout(arm, Math.max(WAIT - carried, 1500));
    }

    // --- Submitting ---------------------------------------------------------
    var form = document.getElementById("ainv-form");
    var msg = document.getElementById("ainv-msg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.email.value.trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { msg.textContent = "That email address does not look right."; return; }
      if (!form.consent.checked) { msg.textContent = "Please tick the box so we know you want to hear from us."; return; }

      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true; btn.textContent = "Sending…";

      var body = new FormData(form);
      body.set("locale", document.documentElement.lang || "en");

      fetch(form.action, { method: "POST", body: body, headers: { "X-Requested-With": "fetch" } })
        .then(function (r) { return r.json(); })
        .catch(function () { return { ok: false }; })
        .then(function (r) {
          if (r && r.ok) {
            remember();
            form.innerHTML = '<p class="ainv-done">Thank you — you\'re on the list.<br>'
              + 'We\'ll write when the season turns, and first when the limited dates open.</p>';
          } else {
            btn.disabled = false; btn.textContent = "Keep me posted";
            msg.textContent = (r && r.message) ||
              "That didn't go through. Message us on WhatsApp and we'll add you by hand.";
          }
        });
    });
  })();
