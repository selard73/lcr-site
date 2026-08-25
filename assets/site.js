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
