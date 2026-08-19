# Last Chance Ranch of South Carolina — website

Static site (no build tools beyond Python + Node for the tiny generator). Same hosting pattern as
`pawtner-in-crime` and `fairy-dog-child`: push to GitHub → Render static site auto-deploys.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Home — hero, 4 ways to help, mission, dog preview, quiz + socials |
| `dogs/index.html` | Find a Dog — grid rendered from `assets/dogs.js` |
| `dogs/<key>.html` | One page per dog — **generated** by `build.py`, don't hand-edit |
| `adopt.html` | Process, policy, FAQ, embedded JotForm application |
| `foster.html` | Why/what/how, FAQ, embedded JotForm foster application |
| `volunteer.html` | Roles + how to sign up |
| `donate.html` | Cash App, monthly, sponsor, wishlist, fundraisers, partners |
| `about.html` | Story, what we do, contact (`#contact`) |
| `404.html` | Not-found page |

## Editing
- **Dogs:** edit `assets/dogs.js` (fields documented at the top), drop the photo in `img/dogs/<key>.jpg`,
  then run `python build.py` (needs Node on PATH). Set `hidden:true` when a dog is adopted.
- **Links / phone / email:** `window.LCR` at the bottom of `assets/dogs.js` — every page fills them in at load.
- **Header / footer:** `_partials/header.html` and `_partials/footer.html`, then `python build.py` to stamp them into all pages.
- **Dog page layout:** `_partials/dog.html`.
- **Styles:** `assets/site.css` (brand tokens at the top).
- **Share image:** `og-src.html` → screenshot with headless Chrome at 1200×630 → `og.png`.
- After deploy, change `SITE` in `build.py` and the `og:image` URLs in the page `<head>`s to the real domain, then rebuild.

## Local preview
`python -m http.server 8791` in this folder → http://localhost:8791
