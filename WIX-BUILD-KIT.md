# Wix Build Kit — Last Chance Ranch of South Carolina

Everything needed to rebuild the LCR site inside Wix, ported from this repo.
Copy blocks are paste-ready. Work top to bottom; each page section maps to one
Wix strip/section.

---

## 0. Before you build

- **Access:** ask LCR to add you as a **collaborator** (Wix: Site → Settings →
  Roles & Permissions → Invite People → Admin (Co-Owner)). Don't use their
  owner login. The invite goes to your email; you log in with your own account.
- **Editor:** use the regular **Wix Editor** (not Wix Studio, not ADI). Pick a
  blank template ("Start from blank") — we're rebuilding our own design, and a
  themed template fights you.
- **Domain:** they bought **lastchanceranchsc.com** through Wix. It won't
  connect until the site has a paid plan (Light plan is enough — no store
  needed). Site works on the free `*.wixsite.com` URL meanwhile.
- **Dogs = records app.** The adoptable-dogs section **links out** to the
  records app (`https://lcr-animal-records.onrender.com/dogs`) — single source
  of truth, kept current by Kirah's voice notes. Don't duplicate dog bios in
  Wix. Later: put the app on `dogs.lastchanceranchsc.com` (§8).

## 1. Site settings (Wix dashboard → Settings)

| Setting | Value |
|---|---|
| Site name | Last Chance Ranch of South Carolina |
| Favicon | `img/seal.jpg` (upload; favicon needs a paid plan) |
| Homepage SEO title | Last Chance Ranch of South Carolina — Dog & Cat Rescue, Aiken SC |
| Homepage SEO description | Last Chance Ranch of South Carolina is a small no-kill dog and cat sanctuary in Aiken, SC. Adopt, foster, volunteer, or donate — every animal here deserves a last chance. |
| Social share image | `og.png` from this repo |

Per-page SEO titles/descriptions are at the top of each page section below
(Wix: page menu → SEO Basics).

## 2. Theme — colors & fonts (Editor → Site Design)

**Color palette** (from `assets/site.css`):

| Role | Hex | Use |
|---|---|---|
| Paper (main bg) | `#EAE0C8` | default section background |
| Paper deep | `#D9CDAF` | alternate/striped sections |
| Paper light | `#F3ECDA` | "light" sections |
| Paper white | `#FBF7EC` | cards/callouts |
| Ink (text) | `#1B1A17` | headings, body, dark section bg |
| Ink soft | `#3B3830` | secondary text |
| Muted | `#6B655A` | fine print |
| Red | `#B8231F` | primary buttons, stamps, accents |
| Red deep | `#8E1814` | button hover |
| Wood | `#7A5230` / `#4E3218` | optional accents |

**Fonts** (map to Wix text theme):

| Role | Font | Wix note |
|---|---|---|
| Headings (H1/H2) | **Anton** | in Wix's font list |
| Subheads/eyebrows | **Oswald** (bold, ALL CAPS, letter-spaced) | in Wix's font list |
| Typewriter accents | **Special Elite** | if not in Wix's list: Site Design → Text → Upload fonts → get the free .ttf from fonts.google.com |
| Body | **Source Sans 3** (fallback: Source Sans Pro) | Wix lists Source Sans Pro — visually identical |

**Button styles:** primary = red bg `#B8231F`, paper-white text, square corners
(0 radius — the brand is blocky/stamp-like, no rounded pills). Secondary =
transparent with 2px ink border. Eyebrow labels above headings are Oswald,
all-caps, letter-spacing ~2px, red or muted.

## 3. Header & footer (site-wide)

**Header:** seal logo (`img/seal.jpg`, circular crop) + "**Last Chance Ranch**
/ of South Carolina · Aiken, SC". Menu:

Find a Dog (→ records app link) · Adopt · Foster · Volunteer · About · **Donate** (red button)

**Footer — 3 columns:**

*Col 1:* seal + "Last Chance Ranch / Department of Pawctions" +
> A small no-kill dog & cat sanctuary in Aiken, South Carolina. Every animal here is serving time for circumstances beyond their control — and every one of them is eligible for parole.

social links: Facebook · TikTok · YouTube · Petfinder

*Col 2 — Get involved:* Adoptable dogs · How to adopt · Foster a dog · Volunteer · Donate · Post Bail · Who's your pawtner in crime? (quiz)

*Col 3 — Contact the Warden:* (803) 479-8408 · lastchanceranchofsc@gmail.com · Aiken, South Carolina · Visits by appointment

*Bottom line:* © 2026 Last Chance Ranch of South Carolina. All inmates innocent. · Site by Shannon Lard (link shannonlard.com)

## 4. Master link list

| Purpose | URL |
|---|---|
| Adoptable dogs (records app) | https://lcr-animal-records.onrender.com/dogs — later https://dogs.lastchanceranchsc.com |
| Adoption application (JotForm) | https://form.jotform.com/261266940400047 |
| Foster application (JotForm) | https://form.jotform.com/261407369955064 |
| Donate (Cash App) | https://cash.app/$LastChanceRanchSC |
| Facebook | https://www.facebook.com/profile.php?id=61582497165034 |
| TikTok | https://www.tiktok.com/@last.chance.ranch03 |
| YouTube | https://www.youtube.com/@LastChanceRanchofSC |
| Petfinder | https://www.petfinder.com/member/us/sc/aiken/last-chance-ranch-of-south-carolina-sc10004/ |
| Quiz | https://pawtner-in-crime.onrender.com |
| Phone | (803) 479-8408 — **unconfirmed, see §9** |
| Email | lastchanceranchofsc@gmail.com |

## 5. Images to upload to Wix Media

From this repo: `img/seal.jpg` (logo), `img/coat.jpg` (mission section),
`img/kitchen.jpg` (about), `og.png` (social share), and `img/dogs/*.jpg`
(blue, isaiah, oatmeal, sanders, leroy, frodo, princess, lizzy — for the home
"inmates" strip; the records app owns the full roster).

---

## 6. Pages — paste-ready copy

### HOME  (`/`)

**Hero** — dark/paper split, Blue's photo right with red stamp "WANTED FOR A
BETTER LIFE" and tag "Inmate #34 — Blue":

- Eyebrow: `LAST CHANCE RANCH · DEPARTMENT OF PAWCTIONS`
- H1: `Every dog deserves a last chance.` (italicize "last chance")
- Lead: `We're a small, no-kill dog & cat sanctuary in Aiken, South Carolina. Our inmates are doing time for circumstances beyond their control — abandoned, neglected, or simply out of options — and every one of them is eligible for parole into a loving home.`
- Buttons: **Meet the inmates** (red → records app) · **Apply for parole** (light → adoption JotForm)

**Four ways to help** — eyebrow `FOUR WAYS TO HELP`, H2 `Join the Maximum
Security Snuggles Unit`, 4 cards:

1. `01 · Adopt` / **Apply for Parole** — `Every dog here has already been through the hard part. Browse the inmates, read their files, and apply. We match carefully so it sticks — for good.` → Find a dog
2. `02 · Foster` / **Run a Half Way House** — `Fostering saves lives twice: the dog on your couch, and the one who takes their kennel. Short-term, long-term, or foster-to-adopt — we cover food and vet care.` → Foster a dog
3. `03 · Volunteer` / **Join the Yard Crew** — `Walking, bathing, transport, photos, events, social media — we're volunteer-run, and there's a job for every skill set (and every schedule).` → Volunteer
4. `04 · Donate` / **Post Bail** — `Vet bills, food, and fence repairs don't pay themselves. Every dollar goes straight to the animals — no salaries, no overhead, no fancy office.` → Donate now (red)

**Mission** — dark section (ink bg, paper text), `img/coat.jpg` left:

- Eyebrow: `OUR MISSION`
- H2: `Rescue. Rehabilitate. Rehome — or keep for life.`
- Lead: `Last Chance Ranch rescues and rehabilitates abused, neglected, and unwanted dogs and cats, providing adoption when possible and lifelong sanctuary care when needed, while promoting humane treatment and responsible pet ownership.`
- Body: `We're no-kill, which means the dogs nobody else would take — the seniors, the shy ones, the ones with a rap sheet — get a home with us for as long as it takes. Some find families. Some stay forever. All of them are safe.`
- Button: **About the Ranch** (light)

**Inmates awaiting parole** — eyebrow `NOW BOOKING`, H2 `Inmates awaiting
parole`, then a **Repeater** (4 items across) wired to live data from the
records app. The page code (in the Git repo, `src/pages/Home.nsg8k.js`)
fetches `https://lcr-animal-records.onrender.com/api/public/dogs` and fills
the repeater automatically — the elements just need these exact IDs in the
editor (select element → right-click → View Properties → ID):

- Repeater: `dogRepeater` — each item containing:
- Image: `dogImage` · Text: `dogName` · Text: `dogSummary` · Text: `dogStatus`

Put placeholder content in the repeater in the editor (any dog photo + name)
so the section looks right even before the code runs. Below the repeater:
button **See all adoptable dogs** → records app.

**Two-up strip** (striped/deep paper bg):

*Left — quiz:* eyebrow `NOT SURE WHO'S YOUR TYPE?`, H2 `Who's your pawtner in crime?`, body `Bonnie had Clyde. Thelma had Louise. Butch had Sundance. Take our one-minute booking quiz, find out what you're in for, and meet the inmate who'd take the fall for you.`, red button **Get booked 🚨** → quiz.

*Right — social:* eyebrow `FOLLOW THE WARDEN`, H2 `Mug shots, parole hearings & alumni`, body `New inmates, Warden's Reports, and the good stuff — dogs going home. Follow along and share; every share finds a dog a family.`, ghost buttons Facebook · TikTok · YouTube.

### FIND A DOG

Not a Wix page — a **menu item linking straight to the records app**
(https://lcr-animal-records.onrender.com/dogs, open in new tab until it's on
dogs.lastchanceranchsc.com, then same-tab is fine).

### ADOPT  (`/adopt`)

SEO title: `Adopt — How It Works, FAQ & Application — Last Chance Ranch of South Carolina`
SEO description: `How to adopt a dog from Last Chance Ranch of South Carolina: our process, adoption FAQ, adoption policy, and the application.`

**Page header** (dark): eyebrow `ADOPTION`, H1 `Apply for parole`, lead
`Adopting from Last Chance Ranch means taking home a dog who has already survived the hard part. Here's how it works, what we ask, and what to expect.`
Buttons: **Adoption application** (red, anchor to form) · **See adoptable dogs** (light → records app).

**The process** — eyebrow `THE PROCESS`, H2 `How adoption works`, numbered steps:

1. **Read the files** — `Browse our adoptable dogs. Each inmate's page lists their energy level, who they get along with, and their conditions of parole. Be honest with yourself about your home, schedule, and other pets — the right match matters more than the cutest photo.`
2. **Submit an application** — `Fill out the adoption application. It takes about ten minutes. We ask for veterinary and personal references, some information about your home, and who lives there.`
3. **We review & check references** — `A volunteer reads every application and calls your references. We're small and volunteer-run, so please give us a few days — and check your spam folder for our email.`
4. **Meet & greet** — `Come meet your match at the Ranch (by appointment). If you have a dog at home, we'll arrange an introduction. Some dogs are in foster homes; we'll set up a meeting with the foster family.`
5. **Home visit & adoption** — `For some dogs we do a quick home visit or virtual walk-through. Then you sign the adoption contract, pay the adoption fee, and take your new best friend home. Parole granted.`

**Callout — Our adoption policy:**
`Our adoption process is designed to ensure each animal is placed in a safe, stable, and appropriate home. Potential adopters are required to complete an adoption application, provide veterinary and personal references, and demonstrate the ability to properly care for the animal. We carefully review each application to help ensure a good match based on the animal's needs, temperament, and lifestyle requirements.`
`**If an adoption does not work out, animals adopted through our program must be returned to Last Chance Ranch** rather than rehomed independently. Once a Last Chance dog, always a Last Chance dog — we'll take them back at any point in their life, no questions asked.`

**FAQ** — eyebrow `ADOPTION FAQ`, H2 `Questions from the visiting room` — use a
Wix **Collapsible/Accordion** with these Q&As:

- **What is the adoption fee?** `Adoption fees vary by dog and are listed when you apply — please email or message us for the current fee for a specific dog. Fees help offset spay/neuter, vaccines, heartworm testing and prevention, microchipping, and any other medical care the dog received with us. Fees for senior dogs and long-term residents are often reduced or waived.`
- **What's included?** `Every dog is spayed or neutered, up to date on age-appropriate vaccines, heartworm tested (and treated if needed), on flea/tick and heartworm prevention, and microchipped. You'll go home with their medical records and whatever we know about their history and personality.`
- **Do I need a fenced yard?** `Not necessarily. Some of our dogs need room to run and a secure fence; others are happy with leash walks and a couch. We match to the dog, not to a checklist. Apartment and rental homes are welcome — just be sure your lease allows dogs of that size and breed, and be ready to show it.`
- **I have other pets / kids. Can I still adopt?** `Usually, yes — but it depends on the dog. Each dog's page lists whether they're good with dogs, cats, and kids. Some inmates need to be the only pet, and a few aren't right for small children. We'll be honest with you; please be honest with us.`
- **Can I meet a dog before applying?** `We ask that you apply first. It's a small team, and the application helps us know which dogs to introduce you to. Once your application is in, we'll set up a visit at the Ranch or with the foster home.`
- **How long does it take?** `Typically one to two weeks from application to adoption day, depending on reference callbacks and scheduling the meet-and-greet. If it's been more than a week and you haven't heard from us, please follow up — we're volunteers and things occasionally slip through.`
- **Do you adopt out of state?** `We're in Aiken, SC and most of our adopters are within driving distance of the CSRA and the Midlands. We'll consider out-of-area applications case by case, but you'll need to come meet the dog and drive them home yourself.`
- **What if it doesn't work out?** `Call us. First, we'll help — a lot of early bumps (house training, a rough intro to the resident dog, decompression time) are normal and solvable, and we're happy to coach you through the first weeks. If it truly isn't a fit, the dog comes back to us. Please never rehome a Last Chance dog on your own.`
- **What is "foster-to-adopt"?** `A trial run. You take the dog home as a foster for a couple of weeks with the intent to adopt, and we finalize once everyone (including the resident pets) agrees. It's a great option for shy dogs, or homes with existing pets.`
- **Are all your animals up for adoption?** `No. Last Chance Ranch is a sanctuary as well as a rescue — some of our residents, including our cats, will live out their lives with us. The dogs on our adoptable dogs page are the ones currently ready for a home.`

**Application** (light section, anchor `apply`): eyebrow `READY?`, H2
`Adoption application`, intro `Fill it out below, or open the application in a new tab. Questions first? Email the Warden or message us on Facebook.`
Then **Embed → Embed a Site** (iframe) with the adoption JotForm URL, ~1200px tall.

### FOSTER  (`/foster`)

SEO title: `Foster a Dog — Last Chance Ranch of South Carolina`
SEO description: `Foster a dog for Last Chance Ranch of South Carolina in Aiken, SC. How fostering works, what we cover, FAQ, and the foster application.`

**Page header** (dark): eyebrow `FOSTERING`, H1 `Run a Half Way House`, lead
`Fostering saves lives twice: the dog on your couch, and the dog who takes their spot at the Ranch. You provide the home and the love. We provide everything else.`
Buttons: **Foster application** (red, anchor) · **Dogs who need a foster** (light → records app).

**Why foster** — eyebrow `WHY FOSTER`, H2 `A living room beats a kennel. Every time.`:
`Last Chance Ranch is small. We can only take in as many dogs as we have space for — and a dog in a foster home is a dog whose spot is open for the next one who has nowhere else to go.`
`Foster dogs also get adopted faster. In a home they learn (or remember) house manners, decompress from the shelter, and show us who they really are — which is exactly what adopters need to see. Shy dogs bloom in a quiet house. Long-timers get to skip the kennel entirely and go home to home.`
`Whether you can commit to two weeks or six months, one dog or a bonded pair, there's a foster role for you.`

**Two callout cards:**

*What we cover:* All veterinary care (at our vet) · Food, crate, leash, collar & bowls if you need them · Flea/tick and heartworm prevention · Medications · Backup: a volunteer you can call any time · Transport to and from vet visits and adoption events, if you can't

*What you provide:* A safe, dog-proofed home and a routine · Patience — the first two weeks are decompression · Photos and updates we can share (this is how dogs get adopted!) · Honest feedback about how the dog does with people, pets, and life · Willingness to meet potential adopters

**Ways to foster** — eyebrow `WAYS TO FOSTER`, H2 `Pick your sentence`, steps:

1. **Short-term / emergency** — `A few days to two weeks. Medical recovery, an overflow weekend, or covering another foster's vacation. Perfect if you can't commit long-term.`
2. **Standard foster** — `Until adopted — usually a few weeks to a few months. This is where the magic happens.`
3. **Foster-to-adopt** — `A two-week trial run with intent to adopt. Great for shy dogs, homes with resident pets, or if you just want to be sure.`
4. **Half Way House (home-to-home)** — `For long-term residents: the dog lives with you and is adopted directly from your home, never going back to a kennel.`
5. **Hospice / senior foster** — `Give a senior or medically fragile dog a soft place for however long they have. We cover all costs. It's the hardest job here and the one we're most grateful for.`

**Foster FAQ** — accordion:

- **Does fostering cost me anything?** `No. We cover vet care, food, and supplies. Many fosters choose to buy their own food or extras, and that's welcome, but it's never expected.`
- **I work full time. Can I still foster?** `Yes. Most of our fosters do. Adult dogs are fine on a normal workday schedule with a walk before and after; we'll match you with a dog whose needs fit your day. Puppies and dogs in medical recovery need more.`
- **I have my own dog / cat / kids.** `Great — that's exactly the information adopters need. We'll only place a dog with you who's known (or likely) to do well with your crew, and we'll do a proper introduction. Some fosters specifically take our "only pet" dogs because they have no other animals.`
- **What if I fall in love?** `Foster fail is the best kind of fail. You get first dibs. Just tell us before we approve another applicant.`
- **What if it isn't working?** `Call us. We'll troubleshoot first — most problems are decompression, and they pass. If it truly isn't a fit, we'll take the dog back. Nobody's stuck.`
- **Do I pick the dog?** `You tell us what you can handle — size, energy, other pets, time — and we suggest matches. If there's a specific inmate on the roster you want to foster, say so on the application.`
- **How do adopters find my foster dog?** `Through this site, Petfinder, our Facebook, and adoption events. Your photos, videos, and stories are the single biggest factor. We'll help you make them good.`

**Application** (anchor `apply`): eyebrow `READY?`, H2 `Foster application`,
same intro pattern as Adopt, embed the foster JotForm.

### VOLUNTEER  (`/volunteer`)

SEO title: `Volunteer — Last Chance Ranch of South Carolina`
SEO description: `Volunteer with Last Chance Ranch of South Carolina in Aiken, SC — dog walking, transport, events, photos, social media, and more.`

**Page header** (dark): eyebrow `VOLUNTEER`, H1 `Join the yard crew`, lead
`Last Chance Ranch is entirely volunteer-run. No paid staff, no office — just people who show up for the dogs. Whether you have two hours a month or two days a week, there's a job with your name on it.`
Button: **Sign up to volunteer** (red, anchor).

**Ways to help** — eyebrow `WORK ASSIGNMENTS`, H2 `Ways to help`, 6 cards:

1. `At the Ranch` / **Yard time** — `Walk, play, brush, bathe, and hang out with the dogs. Kennel cleaning, feeding, and yard upkeep too. Regular weekly shifts are gold; one-off help is welcome. Ages 16+ (younger with a parent).`
2. `On the road` / **Transport** — `Drive dogs to vet appointments, adoption events, foster homes, and freedom rides to their new families. A car and a crate is all it takes.`
3. `Out in public` / **Adoption events** — `Handle dogs, talk to people, hand out flyers at local events and pet stores. If you like dogs and people, this is the job.`
4. `Behind the camera` / **Photos & video** — `Good photos get dogs adopted. Come shoot mug shots, yard footage, and "released" alumni updates for Facebook, TikTok, and YouTube.`
5. `From your couch` / **Social & admin** — `Write Warden's Reports, answer messages, call references, update Petfinder, coordinate fosters. Remote-friendly and hugely needed.`
6. `Skilled trades` / **Fences, fixes & fundraising** — `Handy with tools? We always have a fence, gate, or kennel that needs work. Good at grant writing, bookkeeping, or events? Same.`

**Sign up** (light, anchor `signup`): eyebrow `SIGN UP`, H2 `Report for duty`:
`Send us a message with your name, where you're located, what you'd like to help with, and when you're generally available. We'll get back to you and set up an orientation visit at the Ranch.`
Contact list: email · phone/text · Facebook (message the page).
`**Groups welcome.** Scouts, church groups, businesses, school clubs — a work day at the Ranch is a great group project. Ask us about it.`

**Callout — Good to know:** Volunteers at the Ranch must be 16+, or accompanied by a parent/guardian. · Wear closed-toe shoes and clothes you don't mind getting muddy. Very muddy. · New volunteers start with a short orientation and shadow a regular. · Court-ordered community service: contact us to ask — we can sometimes accommodate. · Can't come out? Donations and wishlist items keep the lights on.

### DONATE  (`/donate`)

SEO title: `Donate — Post Bail — Last Chance Ranch of South Carolina`
SEO description: `Support Last Chance Ranch of South Carolina, a no-kill dog and cat sanctuary in Aiken, SC. Donate by Cash App, sponsor a dog, or send wishlist items.`

**Page header** (dark): eyebrow `DONATE`, H1 `Post bail`, lead
`We're volunteer-run with no paid staff, so every dollar goes where it should: vet bills, food, medicine, and the fences that keep everyone safe. Whatever you can give, an inmate is grateful.`
Button: **Give via Cash App** (red → Cash App link).

**Ways to give** — eyebrow `WAYS TO GIVE`, H2 `Pick your method`, 6 cards:

1. `Fastest` / **Cash App** — `One tap. Send any amount to $LastChanceRanchSC. Add a dog's name in the note to sponsor them directly.` → button $LastChanceRanchSC
2. `Monthly` / **Become a regular** — `A recurring gift — even $5 or $10 a month — is what lets us say yes when a dog has nowhere else to go. Set up a recurring payment in Cash App, or message us to arrange another way.`
3. `Sponsor` / **Sponsor an inmate** — `Cover a specific dog's food and vet care while they wait — especially our long-timers and sanctuary residents. We'll send you updates on your dog.` → Pick a dog (records app)
4. `Supplies` / **Send commissary** — `Dog food, treats, blankets, cleaning supplies, and toys are always needed. Message us for the current wishlist and drop-off / shipping details.` → Ask for the wishlist (email)
5. `Fundraisers` / **Join a campaign** — `We run seasonal fundraisers (Krispy Kreme Digital Dozens, holiday drives, and more). Follow us on Facebook to catch the next one — they're the fun way to give.` → Follow on Facebook
6. `Businesses` / **Partner with us** — `Host an adoption event, donate a percentage of sales, sponsor a kennel, or match your employees' gifts. We'll shout you out to everyone who follows the Warden.` → Email us

**Where it goes** — eyebrow `WHERE IT GOES`, H2 `What your money buys`:

- **$15** — a month of heartworm & flea/tick prevention for one dog
- **$25** — a bag of food that feeds the cell block for days
- **$60** — vaccines and microchip for a new intake
- **$150** — spay/neuter surgery
- **$500+** — heartworm treatment for a positive dog

Fine print: `Amounts are typical costs at our vet and vary by dog. Every gift, whatever the size, is pooled where the need is greatest unless you tell us otherwise.`

**Callout — Tax receipts:** `Need a receipt for your records? Email us with your name, the date, and the amount and we'll send one — and we're happy to answer questions about tax-deductibility.`

### ABOUT & CONTACT  (`/about`)

SEO title: `About & Contact — Last Chance Ranch of South Carolina`
SEO description: `About Last Chance Ranch of South Carolina — a no-kill dog and cat sanctuary in Aiken, SC — and how to reach us.`

**Page header** (dark): eyebrow `ABOUT THE RANCH`, H1 `Maximum security snuggles`, lead
`Last Chance Ranch of South Carolina is a small, no-kill dog & cat sanctuary in Aiken, SC — run entirely by volunteers, funded entirely by people like you.`

**Who we are** — `img/kitchen.jpg` right, eyebrow `WHO WE ARE`, H2 `The last stop before there isn't one`:
`The name isn't a joke. The animals who come to us are the ones who've run out of other options — dumped, seized, surrendered, aged out, or simply too shy, too old, or too much for anyone else to take on. When they get here, the running out stops.`
`**Our mission:** to rescue and rehabilitate abused, neglected, and unwanted dogs and cats, providing adoption when possible and lifelong sanctuary care when needed, while promoting humane treatment and responsible pet ownership.`
`That last part matters. We're a sanctuary as well as a rescue. The dogs and cats who can be adopted, we work hard to place well. The ones who can't — because of age, health, or a past that left marks — live out their lives with us, safe, fed, and loved. Nobody here is on a clock.`
`And yes, about the whole "prison" thing: it started as a joke on Facebook and stuck. Our inmates are all innocent. They're doing time for circumstances beyond their control, the Warden loves every one of them, and parole is always on the table.`

**What we do** — eyebrow `WHAT WE DO`, H2 `Rescue · Rehab · Rehome · Sanctuary`, 4 cards:

1. **Intake** — `Dogs and cats from local shelters, owner surrenders, and strays in the CSRA and beyond — prioritizing the ones most at risk.`
2. **Vetting** — `Every animal is spayed/neutered, vaccinated, tested and treated for heartworm, microchipped, and given whatever care they need — however long it takes.`
3. **Rehab** — `Decompression, socialization, basic manners, and for the fearful ones, patience. Some of our best dogs came in unable to be touched.`
4. **Rehome or keep** — `Careful matches, honest write-ups, and a lifetime return policy. If a home isn't in the cards, this is the home.`

**Contact** (anchor `contact`) — eyebrow `CONTACT`, H2 `Reach the Warden`:

- **Phone / text** — (803) 479-8408
- **Email** — lastchanceranchofsc@gmail.com
- **Facebook** — Last Chance Ranch of SC — fastest way to reach us
- **TikTok** — @last.chance.ranch03
- **YouTube** — Last Chance Ranch of SC
- **Petfinder** — Our Petfinder page
- **Location** — Aiken, South Carolina. **Visits are by appointment only** — please message ahead. We're a private property with a lot of dogs, not a walk-in shelter.

`We're volunteers with day jobs, so give us a day or two to reply. If it's urgent — an animal in danger — please also contact Aiken County Animal Services.` (link https://www.aikencountysc.gov/DspSvc?qSvcID=52)

**Callout — Found or need to surrender an animal?** `We're small and almost always full, but message us anyway — if we can't take an animal ourselves we'll do our best to point you to someone who can, or help you rehome responsibly.` → Message us (Facebook)

**Callout — Press & partnerships:** `Want to feature a dog, host an event, or partner your business with the Ranch? We'd love that. Email us.`

### 404 page

Wix: Settings → 404 page. H1 `Escaped inmate` — `The page you're looking for has been released. Head back to the yard.` → button **Back to the Ranch** (home).

---

## 7. Build order checklist

1. [ ] Accept collaborator invite; open blank template in Wix Editor
2. [ ] Site Design: color palette + text theme (§2)
3. [ ] Header + footer (§3) — they apply to all pages automatically
4. [ ] Create pages: Home, Adopt, Foster, Volunteer, Donate, About; add "Find a Dog" as an external-link menu item
5. [ ] Build Home (§6) — get one page fully styled first, then reuse its sections (copy/paste strips between pages)
6. [ ] Interior pages
7. [ ] Per-page SEO titles/descriptions; social share image (og.png)
8. [ ] Mobile editor pass on every page (Wix desktop→mobile doesn't auto-arrange well; check each page)
9. [ ] 404 page
10. [ ] Wix free-plan check: upgrade to a paid plan to remove the Wix banner/favicon lock and connect the domain
11. [ ] Connect lastchanceranchsc.com (it's already in their Wix account — one click under Settings → Domains)
12. [ ] DNS for the records app (§8)
13. [ ] Add Google Analytics or keep it simple (optional; needs paid plan)
14. [ ] Send LCR the CONTENT-TODO questions (§9) and fix anything they correct

## 8. Records app subdomain (after domain is live)

1. Render → lcr-animal-records service → Settings → Custom Domains → add `dogs.lastchanceranchsc.com`; Render shows a CNAME target.
2. Wix → Domains → lastchanceranchsc.com → Advanced DNS → add CNAME: host `dogs` → the Render target.
3. On Render, set `SITE_URL` env var to `https://dogs.lastchanceranchsc.com` (the onrender.com URL keeps working for staff home-screen icons).
4. Update the "Find a Dog" links in Wix to the new subdomain.

## 9. Still unconfirmed (from CONTENT-TODO.md — ask LCR)

- **Phone number**: site says (803) 479-8408; Petfinder says (610) 842-5022. Which is public?
- 501(c)(3)/EIN → affects Donate page tax language
- Adoption fee amounts; microchipping confirmation
- Foster program details (do they really cover food/supplies?)
- Volunteer age minimum (16+ assumed); home-visit policy; out-of-area policy
- Wishlist URL (Amazon/Chewy) if one exists
- Other payment methods besides Cash App
- Founding year / founder names for About
