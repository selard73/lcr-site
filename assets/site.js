/* Google Analytics (GA4). Inert until GA_ID is a real measurement ID, so this
   file is safe to ship before the property exists.
   We track intent, not just pageviews: an adoption or foster application, a
   donation tap, a phone/email click. Those are the numbers that tell the Ranch
   whether the site is doing its job. Mirrors the quiz's event scheme. */
(function () {
  var GA_ID = "G-Z8G3NMP20Q";   // lastchanceranchsc.com stream, created 2026-09-01
  if (!/^G-[A-Z0-9]{6,}$/.test(GA_ID)) return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", GA_ID);

  /* The outbound links are stamped in from window.LCR (data-link/-mail/-tel), and
     the dog cards are painted in later from the records feed — so listen once on
     the document rather than binding per element. */
  var INTENT = { apply: "apply_click", foster: "foster_click", donate: "donate_click", quiz: "quiz_click" };
  var SOCIAL = { facebook: 1, tiktok: 1, youtube: 1, petfinder: 1 };

  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest && e.target.closest("a");
    if (!a) return;
    var key = a.dataset.link;
    if (key && INTENT[key]) return gtag("event", INTENT[key], { link_url: a.href });
    if (key && SOCIAL[key]) return gtag("event", "social_click", { network: key });
    if (a.hasAttribute("data-tel")  || a.protocol === "tel:")    return gtag("event", "phone_click");
    if (a.hasAttribute("data-mail") || a.protocol === "mailto:") return gtag("event", "email_click");
    var dog = a.closest(".dog");
    if (dog) {
      var h = dog.querySelector("h3");
      gtag("event", "dog_click", { dog_name: h ? h.textContent.trim() : "" });
    }
  }, true);
})();

/* Shared behavior: nav toggle, link fill-in, dog grid, "more dogs" strip. */
(function(){
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const ROOT = document.body.dataset.root || "";      // "" at site root, "../" inside /dogs/

  /* nav */
  const t = $(".navtoggle"), nav = $(".nav");
  if (t && nav) t.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    t.setAttribute("aria-expanded", open);
  });
  const here = location.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
  $$(".nav a").forEach(a => {
    const p = a.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
    if (p === here || (p && p.endsWith("/dogs") && here.includes("/dogs"))) a.setAttribute("aria-current", "page");
  });

  /* fill data-link / data-text from LCR */
  if (window.LCR) {
    $$("[data-link]").forEach(a => { const v = LCR[a.dataset.link]; if (v) a.href = v; });
    $$("[data-text]").forEach(e => { const v = LCR[e.dataset.text]; if (v) e.textContent = v; });
    $$("[data-mail]").forEach(a => { a.href = "mailto:" + LCR.email; a.textContent = a.textContent || LCR.email; });
    $$("[data-tel]").forEach(a => { a.href = "tel:" + LCR.phone.replace(/\D/g, ""); });
  }

  const visible = () => (window.DOGS || []).filter(d => !d.hidden);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const meta = d => [d.age, d.weight, d.sex].filter(v => v && !/^tbd$/i.test(v)).map(v => v.replace(/^(neutered|spayed) /i, "")).join(" / ");

  /* dog card */
  window.dogCard = function(d){
    const num = d.pair ? `#${d.num} & #${d.pair.num}` : `#${d.num}`;
    const name = d.pair ? `${d.name} &amp; ${d.pair.name}` : esc(d.name);
    const flag = d.pair ? `<span class="stamp sm flag">Bonded pair</span>` : (d.status && d.status !== "Available" ? `<span class="stamp sm flag">${esc(d.status)}</span>` : "");
    return `<a class="dog ${d.pair ? "paired" : ""}" href="${ROOT}dogs/${d.key}.html">
      <div class="pic"><span class="ph">?</span><img src="${ROOT}img/dogs/${d.key}.jpg" alt="${esc(d.name)}" loading="lazy" onerror="this.remove()"><span class="num">Inmate ${num}</span>${flag}</div>
      <div class="body"><h3>${name}</h3><div class="meta">${esc(meta(d) || d.breed || "")}</div>
      <p class="blurb">${esc(d.blurb || "")}</p><span class="btn sm">Meet ${esc(d.name)}</span></div></a>`;
  };

  /* A card built from the records app's feed. Those dogs live in the app, so the
     card links there rather than to a static profile page. */
  const liveCard = function(d){
    const num  = d.inmate_number ? `<span class="num">Inmate #${esc(d.inmate_number)}</span>` : "";
    const flag = d.status_label && d.status_label !== "Available"
      ? `<span class="stamp sm flag">${esc(d.status_label)}</span>` : "";
    const pic  = d.photo
      ? `<img src="${esc(d.photo.url)}" alt="${esc(d.name)}" loading="lazy" onerror="this.remove()">` : "";
    const vid  = d.has_video ? `<p class="blurb">▶ Yard-time footage on file</p>` : "";
    return `<a class="dog" href="${esc(d.url)}">
      <div class="pic"><span class="ph">?</span>${pic}${num}${flag}</div>
      <div class="body"><h3>${esc(d.name)}</h3><div class="meta">${esc(d.summary || "")}</div>
      ${vid}<span class="btn sm">Meet ${esc(d.name)}</span></div></a>`;
  };

  /* The animal records are the only roster we show. Never seed these from the
     built-in list: it goes stale the moment a dog is adopted, and listing an
     adopted dog wastes an adopter's time and the rescue's. So we wait, and if
     the records can't be reached we say so rather than inventing a roster.
     (The app sleeps between visits, so a cold start can take a few seconds.) */
  const grid = $("#doggrid");
  const prev = $("#dogpreview");

  if (grid || prev) {
    const waiting = `<p class="loading">Fetching the current roster from the Ranch…</p>`;
    if (grid) grid.innerHTML = waiting;
    if (prev) prev.innerHTML = waiting;

    fetch(LCR.dogsFeed, { mode: "cors" })
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(data => {
        const dogs = (data.dogs || []).filter(d => d.photo);
        if (!dogs.length) throw new Error("empty");
        if (grid) {
          grid.innerHTML = dogs.map(liveCard).join("");
          const c = $("#dogcount"); if (c) c.textContent = dogs.length;
        }
        if (prev) prev.innerHTML = dogs.slice(0, +prev.dataset.n || 4).map(liveCard).join("");
      })
      .catch(() => {
        const fb = (window.LCR && LCR.facebook) || "#";
        const msg = `<p class="loading">We can't reach the kennel roster right now.
          <a href="${LCR.dogsPage || LCR.dogsFeed}">See the dogs here</a> or
          <a href="${fb}" target="_blank" rel="noopener">message us on Facebook</a>.</p>`;
        if (grid) { grid.innerHTML = msg; const c = $("#dogcount"); if (c) c.textContent = "—"; }
        if (prev) prev.innerHTML = msg;
      });
  }

  /* Homepage popup: whatever promotion the Ranch has saved in the records app
     (/announcement there → /api/public/announcement here). Dismissing remembers
     that announcement's key, so an edited announcement shows again. */
  if (document.body.dataset.popup === "home" && window.LCR && LCR.dogsFeed) {
    const src = LCR.dogsFeed.replace(/\/dogs$/, "/announcement");
    fetch(src, { mode: "cors" })
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(a => {
        if (!a.active) return;
        let seen = null;
        try { seen = localStorage.getItem("lcr_popup_seen"); } catch { /* private mode */ }
        if (seen === a.key) return;
        const wrap = document.createElement("div");
        wrap.className = "promo";
        wrap.setAttribute("role", "dialog");
        wrap.setAttribute("aria-modal", "true");
        wrap.setAttribute("aria-label", a.heading);
        wrap.innerHTML = `<div class="promo-card">
            <button class="promo-x" aria-label="Close">✕</button>
            <p class="eyebrow">From the Warden's office</p>
            <h2>${esc(a.heading)}</h2>
            ${a.message ? `<p class="promo-msg">${esc(a.message)}</p>` : ""}
            <div class="btns center">
              ${a.link_url ? `<a class="btn red" href="${esc(a.link_url)}" target="_blank" rel="noopener">${esc(a.link_label || "Learn more")}</a>` : ""}
              <button class="btn ghost promo-later">${a.link_url ? "Maybe later" : "Got it"}</button>
            </div>
          </div>`;
        const close = () => {
          try { localStorage.setItem("lcr_popup_seen", a.key); } catch { /* private mode */ }
          wrap.remove();
          document.body.classList.remove("modal-open");
        };
        wrap.addEventListener("click", e => { if (e.target === wrap) close(); });
        wrap.querySelector(".promo-x").addEventListener("click", close);
        wrap.querySelector(".promo-later").addEventListener("click", close);
        document.addEventListener("keydown", function esc2(e){ if (e.key === "Escape"){ close(); document.removeEventListener("keydown", esc2); } });
        document.body.appendChild(wrap);
        document.body.classList.add("modal-open");
        if (typeof gtag === "function") gtag("event", "promo_view", { promo: a.heading });
      })
      .catch(() => { /* no popup is fine */ });
  }

  /* reviews ticker: duplicate the run so the -50% loop has no seam */
  const rev = $("#reviews");
  if (rev) rev.innerHTML += rev.innerHTML;

  /* "more inmates" strip on profile pages */
  const strip = $("#morestrip");
  if (strip) {
    const me = strip.dataset.skip;
    strip.innerHTML = visible().filter(d => d.key !== me).map(d =>
      `<a href="${d.key}.html"><img src="../img/dogs/${d.key}.jpg" alt="" loading="lazy" onerror="this.style.visibility='hidden'">${esc(d.name)}</a>`).join("");
  }
})();
