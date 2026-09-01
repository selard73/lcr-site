#!/usr/bin/env python3
"""Generates dogs/<key>.html from assets/dogs.js and injects the shared
header/footer into every *.html page (between <!--HEADER--> / <!--FOOTER--> markers).

Run after editing assets/dogs.js or _partials/*.html:
    python build.py
"""
import json, re, pathlib, html

ROOT = pathlib.Path(__file__).parent
SITE = "https://lastchanceranchsc.com"   # the rescue's domain (Wix DNS -> Render)

# ---- read dog data out of dogs.js (evaluate with node so the JS stays the single source of truth) ----
import subprocess
data = json.loads(subprocess.check_output(
    ["node", "-e", "global.window={};require(process.argv[1]);process.stdout.write(JSON.stringify(window))",
     str(ROOT / "assets/dogs.js")], text=True, encoding="utf-8"))
DOGS, LCR = data["DOGS"], data["LCR"]

header = (ROOT / "_partials/header.html").read_text(encoding="utf-8")
footer = (ROOT / "_partials/footer.html").read_text(encoding="utf-8")
tmpl   = (ROOT / "_partials/dog.html").read_text(encoding="utf-8")

def partial(txt, root):
    return txt.replace("{ROOT}", root)

def inject(page: pathlib.Path):
    root = "../" if page.parent.name == "dogs" else ""
    t = page.read_text(encoding="utf-8")
    t2 = re.sub(r"<!--HEADER-->.*?<!--/HEADER-->", "<!--HEADER-->\n" + partial(header, root) + "\n<!--/HEADER-->", t, flags=re.S)
    t2 = re.sub(r"<!--FOOTER-->.*?<!--/FOOTER-->", "<!--FOOTER-->\n" + partial(footer, root) + "\n<!--/FOOTER-->", t2, flags=re.S)
    if t2 != t:
        page.write_text(t2, encoding="utf-8")
        print("updated", page.relative_to(ROOT))

def e(s): return html.escape(str(s or ""))

def dog_page(d):
    pair = d.get("pair")
    title = f"{d['name']} & {pair['name']}" if pair else d["name"]
    num = f"#{d['num']} & #{pair['num']}" if pair else f"#{d['num']}"
    facts = [("Age", d.get("age")), ("Weight", d.get("weight")), ("Sex", d.get("sex")), ("Breed", d.get("breed")),
             ("Energy", d.get("energy")), ("Good with kids", d.get("kids")), ("Good with dogs", d.get("dogs")),
             ("Good with cats", d.get("cats")), ("Status", d.get("status"))]
    facts_html = "".join(f"<li><b>{e(k)}</b><span>{e(v)}</span></li>" for k, v in facts if v)
    report = "".join(f"<li>{e(x)}</li>" for x in d.get("report", []))
    notes = "".join(f"<p>{p}</p>" for p in d.get("notes", []))
    accs = ""
    if d.get("history"): accs += f'<details class="acc"><summary>History</summary><div class="in"><p>{d["history"]}</p></div></details>'
    if d.get("medical"): accs += f'<details class="acc"><summary>Medical record</summary><div class="in"><p>{d["medical"]}</p></div></details>'
    else: accs += '<details class="acc"><summary>Medical record</summary><div class="in"><p>All Last Chance Ranch dogs are vetted before adoption — spayed/neutered, up to date on vaccines, and heartworm tested. Ask us for this dog’s full medical file.</p></div></details>'
    pf = f'<a class="btn ghost" href="{e(d["petfinder"])}" target="_blank" rel="noopener">View on Petfinder</a>' if d.get("petfinder") else ""
    stamp = "Bonded pair" if pair else ("Wanted for a better life" if d.get("status", "Available") == "Available" else d["status"])
    desc = re.sub(r"<[^>]+>", "", d.get("blurb") or "")
    out = tmpl
    for k, v in {
        "{TITLE}": e(title), "{NUM}": e(num), "{AKA}": (f'a.k.a. “{e(d["aka"])}”' if d.get("aka") else ""),
        "{RANK}": e(d.get("rank", "")), "{KEY}": d["key"], "{FACTS}": facts_html, "{REPORT}": report,
        "{NOTES}": notes, "{CONDITIONS}": e(d.get("conditions", "")), "{ACCORDIONS}": accs, "{PETFINDER}": pf,
        "{STAMP}": e(stamp), "{DESC}": e(desc), "{SITE}": SITE, "{NAME}": e(d["name"]),
        "{PAIRNOTE}": (f'<p class="callout"><strong>{e(d["name"])} and {e(pair["name"])} are a bonded pair and must be adopted together.</strong></p>' if pair else ""),
    }.items():
        out = out.replace(k, v)
    return out

# generate dog pages
for d in DOGS:
    p = ROOT / "dogs" / f"{d['key']}.html"
    p.write_text(dog_page(d), encoding="utf-8")
    print("wrote", p.relative_to(ROOT), "(hidden)" if d.get("hidden") else "")

# inject header/footer everywhere
for page in list(ROOT.glob("*.html")) + list((ROOT / "dogs").glob("*.html")):
    inject(page)

# sitemap
urls = [f"{SITE}/{p.name}" for p in ROOT.glob("*.html") if p.name != "404.html"] + [f"{SITE}/dogs/{d['key']}.html" for d in DOGS if not d.get("hidden")]
(ROOT / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    "".join(f"  <url><loc>{u}</loc></url>\n" for u in urls) + "</urlset>\n", encoding="utf-8")
print("done:", len(DOGS), "dogs")
