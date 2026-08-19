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

  /* grid on Find a Dog */
  const grid = $("#doggrid");
  if (grid) {
    const dogs = visible();
    grid.innerHTML = dogs.map(dogCard).join("");
    const c = $("#dogcount"); if (c) c.textContent = dogs.length;
  }

  /* home preview: first N dogs */
  const prev = $("#dogpreview");
  if (prev) prev.innerHTML = visible().slice(0, +prev.dataset.n || 4).map(dogCard).join("");

  /* "more inmates" strip on profile pages */
  const strip = $("#morestrip");
  if (strip) {
    const me = strip.dataset.skip;
    strip.innerHTML = visible().filter(d => d.key !== me).map(d =>
      `<a href="${d.key}.html"><img src="../img/dogs/${d.key}.jpg" alt="" loading="lazy" onerror="this.style.visibility='hidden'">${esc(d.name)}</a>`).join("");
  }
})();
