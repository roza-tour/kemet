// Quick request — "plan your journey in 30 seconds".
//
// Three taps instead of a form: when, how many, what kind. The answer becomes
// a ready-written WhatsApp message (or an email) in the page's language, sent
// from the visitor's own app. Nothing is stored and nothing is sent to us by
// the page itself.
//
// It opens from any element marked data-quick-request — the header's Contact
// button first of all. That button is a real link (the contact page, or the
// page's own enquiry block), so without this script nothing is lost.
//
// The words for all ten languages live here rather than in each page, so a
// page carries one attribute and this file is downloaded once and cached.
(function () {
  var T = {
    en: { title: "Plan your journey in 30 seconds", q1: "When would you like to travel?", flex: "I'm flexible", q2: "How many travellers?", kids: "Children with us", q3: "What kind of journey?",
      k: ["The classics", "Nile cruise", "Honeymoon", "Family", "Ultra-luxury", "Red Sea", "Not sure — advise me"],
      next: "Next", back: "Back", close: "Close", ready: "Ready to send", wa: "Send on WhatsApp", mail: "Send by email", note: "We reply within one working day, with a real itinerary and a price.", more: "Other ways to reach us",
      hello: "Hello Kemet — I'd like to plan a journey.", lWhen: "When", lWho: "Travellers", lKind: "Journey", withKids: "with children", seen: "Seen on", subject: "Journey request" },
    de: { title: "Ihre Reise in 30 Sekunden anfragen", q1: "Wann möchten Sie reisen?", flex: "Ich bin flexibel", q2: "Wie viele Reisende?", kids: "Mit Kindern", q3: "Welche Art von Reise?",
      k: ["Die Klassiker", "Nilkreuzfahrt", "Flitterwochen", "Familie", "Ultra-Luxus", "Rotes Meer", "Noch offen — beraten Sie mich"],
      next: "Weiter", back: "Zurück", close: "Schließen", ready: "Bereit zum Senden", wa: "Per WhatsApp senden", mail: "Per E-Mail senden", note: "Wir antworten innerhalb eines Werktags, mit einer echten Route und einem Preis.", more: "Weitere Kontaktwege",
      hello: "Hallo Kemet — ich möchte eine Reise planen.", lWhen: "Wann", lWho: "Reisende", lKind: "Reise", withKids: "mit Kindern", seen: "Gesehen auf", subject: "Reiseanfrage" },
    fr: { title: "Votre voyage en 30 secondes", q1: "Quand souhaitez-vous partir ?", flex: "Je suis flexible", q2: "Combien de voyageurs ?", kids: "Avec des enfants", q3: "Quel type de voyage ?",
      k: ["Les classiques", "Croisière sur le Nil", "Voyage de noces", "En famille", "Ultra-luxe", "Mer Rouge", "Je ne sais pas — conseillez-moi"],
      next: "Suivant", back: "Retour", close: "Fermer", ready: "Prêt à envoyer", wa: "Envoyer sur WhatsApp", mail: "Envoyer par e-mail", note: "Nous répondons sous un jour ouvré, avec un véritable itinéraire et un prix.", more: "Autres moyens de nous joindre",
      hello: "Bonjour Kemet — je souhaite organiser un voyage.", lWhen: "Quand", lWho: "Voyageurs", lKind: "Voyage", withKids: "avec des enfants", seen: "Vu sur", subject: "Demande de voyage" },
    it: { title: "Il vostro viaggio in 30 secondi", q1: "Quando vorreste partire?", flex: "Sono flessibile", q2: "Quanti viaggiatori?", kids: "Con bambini", q3: "Che tipo di viaggio?",
      k: ["I classici", "Crociera sul Nilo", "Viaggio di nozze", "In famiglia", "Ultra-lusso", "Mar Rosso", "Non so — consigliatemi"],
      next: "Avanti", back: "Indietro", close: "Chiudi", ready: "Pronto da inviare", wa: "Invia su WhatsApp", mail: "Invia per e-mail", note: "Rispondiamo entro un giorno lavorativo, con un itinerario vero e un prezzo.", more: "Altri modi per contattarci",
      hello: "Buongiorno Kemet — vorrei organizzare un viaggio.", lWhen: "Quando", lWho: "Viaggiatori", lKind: "Viaggio", withKids: "con bambini", seen: "Visto su", subject: "Richiesta di viaggio" },
    es: { title: "Su viaje en 30 segundos", q1: "¿Cuándo le gustaría viajar?", flex: "Tengo flexibilidad", q2: "¿Cuántos viajeros?", kids: "Con niños", q3: "¿Qué tipo de viaje?",
      k: ["Los clásicos", "Crucero por el Nilo", "Luna de miel", "En familia", "Ultra lujo", "Mar Rojo", "No lo sé — aconséjenme"],
      next: "Siguiente", back: "Atrás", close: "Cerrar", ready: "Listo para enviar", wa: "Enviar por WhatsApp", mail: "Enviar por correo", note: "Respondemos en un día hábil, con un itinerario real y un precio.", more: "Otras formas de contacto",
      hello: "Hola Kemet — me gustaría planificar un viaje.", lWhen: "Cuándo", lWho: "Viajeros", lKind: "Viaje", withKids: "con niños", seen: "Visto en", subject: "Solicitud de viaje" },
    pt: { title: "Sua viagem em 30 segundos", q1: "Quando vocês gostariam de viajar?", flex: "Tenho flexibilidade", q2: "Quantos viajantes?", kids: "Com crianças", q3: "Que tipo de viagem?",
      k: ["Os clássicos", "Cruzeiro pelo Nilo", "Lua de mel", "Em família", "Ultraluxo", "Mar Vermelho", "Não sei — me orientem"],
      next: "Avançar", back: "Voltar", close: "Fechar", ready: "Pronto para enviar", wa: "Enviar pelo WhatsApp", mail: "Enviar por e-mail", note: "Respondemos em um dia útil, com um roteiro de verdade e um preço.", more: "Outras formas de contato",
      hello: "Olá, Kemet — gostaria de planejar uma viagem.", lWhen: "Quando", lWho: "Viajantes", lKind: "Viagem", withKids: "com crianças", seen: "Visto em", subject: "Pedido de viagem" },
    ru: { title: "Запрос на путешествие за 30 секунд", q1: "Когда вы хотите поехать?", flex: "Даты гибкие", q2: "Сколько путешественников?", kids: "С детьми", q3: "Какое путешествие?",
      k: ["Классика", "Круиз по Нилу", "Медовый месяц", "Семейное", "Ультра-люкс", "Красное море", "Не знаю — посоветуйте"],
      next: "Далее", back: "Назад", close: "Закрыть", ready: "Готово к отправке", wa: "Отправить в WhatsApp", mail: "Отправить по почте", note: "Отвечаем в течение одного рабочего дня — с настоящим маршрутом и ценой.", more: "Другие способы связи",
      hello: "Здравствуйте, Kemet — хочу спланировать путешествие.", lWhen: "Когда", lWho: "Путешественников", lKind: "Путешествие", withKids: "с детьми", seen: "Страница", subject: "Запрос на путешествие" },
    id: { title: "Rencanakan perjalanan Anda dalam 30 detik", q1: "Kapan Anda ingin bepergian?", flex: "Tanggal saya fleksibel", q2: "Berapa orang?", kids: "Bersama anak-anak", q3: "Perjalanan seperti apa?",
      k: ["Yang klasik", "Pesiar Sungai Nil", "Bulan madu", "Keluarga", "Ultra-mewah", "Laut Merah", "Belum tahu — beri saya saran"],
      next: "Lanjut", back: "Kembali", close: "Tutup", ready: "Siap dikirim", wa: "Kirim lewat WhatsApp", mail: "Kirim lewat email", note: "Kami membalas dalam satu hari kerja, dengan rencana perjalanan nyata dan harganya.", more: "Cara lain menghubungi kami",
      hello: "Halo Kemet — saya ingin merencanakan perjalanan.", lWhen: "Kapan", lWho: "Jumlah orang", lKind: "Perjalanan", withKids: "bersama anak-anak", seen: "Dilihat di", subject: "Permintaan perjalanan" },
    ms: { title: "Rancang perjalanan anda dalam 30 saat", q1: "Bilakah anda ingin melancong?", flex: "Tarikh saya fleksibel", q2: "Berapa orang?", kids: "Bersama kanak-kanak", q3: "Perjalanan jenis apa?",
      k: ["Yang klasik", "Pelayaran Sungai Nil", "Bulan madu", "Keluarga", "Ultra-mewah", "Laut Merah", "Belum pasti — nasihatkan saya"],
      next: "Seterusnya", back: "Kembali", close: "Tutup", ready: "Sedia dihantar", wa: "Hantar melalui WhatsApp", mail: "Hantar melalui e-mel", note: "Kami membalas dalam satu hari bekerja, dengan jadual perjalanan sebenar dan harganya.", more: "Cara lain menghubungi kami",
      hello: "Helo Kemet — saya ingin merancang perjalanan.", lWhen: "Bila", lWho: "Bilangan orang", lKind: "Perjalanan", withKids: "bersama kanak-kanak", seen: "Dilihat di", subject: "Permintaan perjalanan" },
    ar: { title: "اطلبوا رحلتكم في ٣٠ ثانية", q1: "متى تودّون السفر؟", flex: "تواريخي مرنة", q2: "كم عدد المسافرين؟", kids: "معنا أطفال", q3: "أي نوع من الرحلات؟",
      k: ["المعالم الكلاسيكية", "رحلة نيلية", "شهر العسل", "رحلة عائلية", "فاخرة جدًا", "البحر الأحمر", "لم أقرر — انصحوني"],
      next: "التالي", back: "رجوع", close: "إغلاق", ready: "جاهزة للإرسال", wa: "إرسال عبر واتساب", mail: "إرسال بالبريد الإلكتروني", note: "نرد خلال يوم عمل واحد، ببرنامج حقيقي وسعر.", more: "طرق أخرى للتواصل",
      hello: "مرحبًا كيميت — أودّ التخطيط لرحلة.", lWhen: "الموعد", lWho: "عدد المسافرين", lKind: "نوع الرحلة", withKids: "مع أطفال", seen: "من صفحة", subject: "طلب رحلة" },
  };
  var WHO = ["1", "2", "3–4", "5–6", "7+"];
  /** Arabic pages write their numbers in Arabic-Indic digits. */
  function digits(s) {
    return lang === "ar" ? String(s).replace(/[0-9]/g, function (d) { return String.fromCharCode(0x660 + Number(d)); }) : s;
  }

  var lang = (document.documentElement.lang || "en").slice(0, 2);
  var t = T[lang] || T.en;
  var dlg = null, state = null, opener = null;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  /** The next twelve months, named by the browser in the page's language. */
  function months() {
    var out = [], d = new Date();
    d.setDate(1);
    var fmt;
    try { fmt = new Intl.DateTimeFormat(lang === "ar" ? "ar-EG" : (document.documentElement.lang || "en"), { month: "short", year: "numeric" }); } catch (e) { fmt = null; }
    for (var i = 0; i < 12; i++) {
      out.push(digits(fmt ? fmt.format(d) : (d.getMonth() + 1) + "/" + d.getFullYear()));
      d.setMonth(d.getMonth() + 1);
    }
    return out;
  }

  function chips(list, key, wide) {
    var box = el("div", "qr-chips" + (wide ? " qr-chips--wide" : ""));
    list.forEach(function (label) {
      var b = el("button", "qr-chip", label);
      b.type = "button";
      b.setAttribute("aria-pressed", state[key] === label ? "true" : "false");
      b.addEventListener("click", function () {
        state[key] = label;
        // One tap answers the question and moves on.
        if (state.step < 3) { state.step++; render(); } else render();
      });
      box.appendChild(b);
    });
    return box;
  }

  function message() {
    var who = state.who + (state.kids ? " (" + t.withKids + ")" : "");
    var lines = [t.hello, "", t.lWhen + ": " + state.when, t.lWho + ": " + who, t.lKind + ": " + state.kind];
    var h1 = document.querySelector("h1");
    if (h1 && h1.textContent.trim()) lines.push("", t.seen + ": " + h1.textContent.trim().replace(/\s+/g, " "));
    return lines.join("\n");
  }

  function render() {
    var body = dlg.querySelector(".qr-body");
    body.textContent = "";
    var dots = dlg.querySelectorAll(".qr-dots i");
    for (var i = 0; i < dots.length; i++) dots[i].className = i < state.step ? "on" : "";

    if (state.step === 1) {
      body.appendChild(el("h3", "qr-q", t.q1));
      body.appendChild(chips(months().concat([t.flex]), "when"));
    } else if (state.step === 2) {
      body.appendChild(el("h3", "qr-q", t.q2));
      body.appendChild(chips(WHO.map(digits), "who"));
      var lab = el("label", "qr-kids");
      var cb = el("input"); cb.type = "checkbox"; cb.checked = !!state.kids;
      cb.addEventListener("change", function () { state.kids = cb.checked; });
      lab.appendChild(cb); lab.appendChild(el("span", "", t.kids));
      body.insertBefore(lab, body.lastChild);
    } else if (state.step === 3) {
      body.appendChild(el("h3", "qr-q", t.q3));
      body.appendChild(chips(t.k, "kind", true));
    }
    if (state.step === 3 && state.kind) {
      // The answers, read back, and the two ways to send them.
      body.textContent = "";
      body.appendChild(el("h3", "qr-q", t.ready));
      var sum = el("dl", "qr-sum");
      [[t.lWhen, state.when], [t.lWho, state.who + (state.kids ? " · " + t.withKids : "")], [t.lKind, state.kind]].forEach(function (r) {
        var row = el("div"); row.appendChild(el("dt", "", r[0])); row.appendChild(el("dd", "", r[1])); sum.appendChild(row);
      });
      body.appendChild(sum);
      var msg = message();
      var send = el("div", "qr-send");
      var wa = el("a", "qr-wa", t.wa);
      wa.href = "https://wa.me/" + dlg.getAttribute("data-wa") + "?text=" + encodeURIComponent(msg);
      wa.target = "_blank"; wa.rel = "noopener";
      var mail = el("a", "qr-mail", t.mail);
      mail.href = "mailto:" + dlg.getAttribute("data-mail") + "?subject=" + encodeURIComponent(t.subject) + "&body=" + encodeURIComponent(msg);
      send.appendChild(wa); send.appendChild(mail);
      body.appendChild(send);
      body.appendChild(el("p", "qr-note", t.note));
    }
    var back = dlg.querySelector(".qr-back");
    back.hidden = state.step === 1;
    var first = body.querySelector("button, a");
    if (first) first.focus({ preventScroll: true });
  }

  function build(trigger) {
    dlg = el("dialog", "qr");
    dlg.setAttribute("aria-label", t.title);
    dlg.setAttribute("data-wa", trigger.getAttribute("data-wa") || "");
    dlg.setAttribute("data-mail", trigger.getAttribute("data-mail") || "");
    var card = el("div", "qr-card");
    var head = el("div", "qr-head");
    head.appendChild(el("p", "qr-title", t.title));
    var x = el("button", "qr-x", "×"); x.type = "button"; x.setAttribute("aria-label", t.close);
    x.addEventListener("click", function () { dlg.close(); });
    head.appendChild(x);
    var dots = el("div", "qr-dots"); dots.setAttribute("aria-hidden", "true");
    dots.appendChild(el("i")); dots.appendChild(el("i")); dots.appendChild(el("i"));
    var foot = el("div", "qr-foot");
    var back = el("button", "qr-back", "‹ " + t.back); back.type = "button";
    back.addEventListener("click", function () {
      if (state.step === 3 && state.kind) state.kind = null; else state.step--;
      render();
    });
    var more = el("a", "qr-more", t.more);
    more.href = trigger.getAttribute("href") || "#";
    more.addEventListener("click", function () { dlg.close(); });
    foot.appendChild(back); foot.appendChild(more);
    card.appendChild(head); card.appendChild(dots); card.appendChild(el("div", "qr-body")); card.appendChild(foot);
    dlg.appendChild(card);
    // A tap on the dimmed page behind the card closes it.
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", function () { if (opener && opener.focus) opener.focus(); });
    document.body.appendChild(dlg);
  }

  document.addEventListener("click", function (e) {
    var trigger = e.target && e.target.closest ? e.target.closest("[data-quick-request]") : null;
    if (!trigger || !window.HTMLDialogElement) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return; // a new tab is the visitor's choice
    e.preventDefault();
    opener = trigger;
    if (!dlg) build(trigger);
    state = { step: 1, when: null, who: null, kids: false, kind: null };
    render();
    dlg.showModal();
  });
})();
