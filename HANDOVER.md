# Continuity & handover — read this if Shannon isn't available

This document exists so Last Chance Ranch never loses its website. It lists
every account the site depends on, who controls it today, and what a new
developer needs to know. Written 2026-09-05.

## The 60-second version for a new developer

- The website is **static HTML/CSS/JS — no framework, no build system**.
  `python build.py` regenerates the per-dog pages and stamps the shared
  header/footer into every page (needs Python 3 + Node on PATH, nothing else).
- **Deploy = `git push` to `main`.** Render auto-deploys in ~30 seconds.
- Dog data on the site comes **live from the records app**
  (`https://lcr-animal-records.onrender.com/api/public/dogs`) — the site never
  stores its own roster, so it can't show an adopted dog. The homepage popup
  comes from the same app (`/api/public/announcement`), edited by ranch staff.
- Read `README.md` for the file map and editing how-tos, `CONTENT-TODO.md` for
  open content questions.

## Accounts that keep this running

| What | Where | Controlled by (2026-09) | If Shannon is gone |
|---|---|---|---|
| **Domain** lastchanceranchsc.com | Wix (purchased through Wix, renews ~summer 2028) | **Last Chance Ranch** (their Wix login) | Already theirs. DNS lives in Wix — the site works as long as the DNS records pointing at Render stay put. |
| **Website code** | github.com/selard73/lcr-site | Shannon's GitHub | Repo should be transferred to (or mirrored in) an LCR-controlled GitHub account — see checklist below. Any full clone of this repo IS the entire website. |
| **Website hosting** | Render.com static site → lastchanceranchsc.com | Shannon's Render account | A new developer can recreate it in ~10 minutes free: new Render static site from the repo, publish directory `.`, then point the Wix DNS records at it. Nothing on Render is irreplaceable. |
| **Records app code** | github.com/selard73/lcr-animal-records | Shannon's GitHub | Same transfer note. This one matters more — see below. |
| **Records app hosting + DATABASE** | Render.com web service + Postgres + persistent disk (photos/audio) | Shannon's Render account | **This is the only component with real data in it** (dog records, photos, voice notes). Priority #1 in any handover: keep the Postgres database and the media disk, or export them. Env vars needed to run it are listed in that repo's `.env.example` / CLAUDE.md. |
| **Records app API keys** | Deepgram (voice), Anthropic (extraction agent) | Keys in Render env vars | The public website works WITHOUT these — only the staff voice features need them. A successor can create their own free/cheap keys and swap the env vars. |
| **Sponsor form** | JotForm form 262473512720048 ("Inmate Sponsorship") | Shannon's personal JotForm (free) | Sponsor filings + the thank-you autoresponder live here; notification email goes to Shannon. To move: create any new JotForm with the same 5 fields, update the form ID + field names at the top of the script in `sponsor.html`. The autoresponder HTML is saved at `docs/sponsor-autoresponder.html`. |
| **Analytics** | Google Analytics property `G-Z8G3NMP20Q` | Shannon's Google account | Nice-to-have only. A successor can make a new GA property and change `GA_ID` at the top of `assets/site.js`. |
| **Facebook / TikTok / YouTube / Idealist / Petfinder / Cash App / Chewy / Amazon** | — | **Last Chance Ranch / Grecia** | Already theirs. The site only links to them (all links live in `window.LCR` at the bottom of `assets/dogs.js`). |

## What ranch staff can already do without any developer

- **Dog roster, photos, videos, adoption status** — records app (their PINs).
  Everything flows to the website automatically.
- **Homepage popup / promotions** — records app → "Website popup" link on the
  staff home page.
- **Sponsor list** — JotForm submissions table (currently Shannon's account).

## Handover checklist (account actions only the owners can do)

1. **GitHub**: create a `lastchanceranchsc` GitHub account (or org) with
   credentials stored at the ranch; transfer both repos to it, or add it as a
   collaborator with admin rights. (Settings → Collaborators, or Settings →
   Transfer ownership.)
2. **Render**: either convert to a Render Team with an LCR owner, or store the
   account credentials with the ranch. At minimum: connect the transferred
   GitHub repos so deploys keep working.
3. **JotForm**: add lastchanceranchofsc@gmail.com as a notification recipient
   on the sponsorship form, and store the account credentials with the ranch.
4. **Google Analytics**: Admin → Property access → add an LCR Google account
   as administrator.
5. **Database safety net**: from the Render Postgres dashboard, download a
   backup now and then (or a successor's first task: `pg_dump`). The photos
   live on the service's persistent disk (`/var/data`).
6. Keep a copy of this file somewhere outside the repo too (print it, email it
   to the ranch inbox).

## Costs a successor should know about

- Domain: ~$50/yr via Wix (transferable to a cheaper registrar).
- Render: website is free; the records app runs on the free tier (sleeps when
  idle) — a paid instance (~$7/mo) removes the cold starts if ever wanted.
- Deepgram/Anthropic: pay-per-use, only for staff voice features.
- Everything else: free tiers.
