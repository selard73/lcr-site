/* ============================================================
   ADOPTABLE DOGS — the single source of truth for the site.
   Edit this file, then run  python build.py  to regenerate the
   individual dog pages in /dogs/.  The "Find a Dog" grid reads
   this file directly in the browser.

   Fields:
     key      short id → dogs/<key>.html and img/dogs/<key>.jpg
     num      inmate number (theirs — not sequential)
     name / aka
     blurb    one line for the card
     breed, sex, age, weight, energy, kids, dogs, cats
     status   "Available" | "Bonded pair" | "Adoption pending" | "Adopted"
     rank     the seal title (Snuggle Officer, etc.)
     report   bullet list — Behavior Report
     notes    paragraphs — Warden's Notes (HTML allowed)
     conditions  parole conditions (one line)
     history / medical  optional paragraphs (HTML allowed) — accordions
     petfinder  optional link
     hidden   true → not shown anywhere (adopted, on hold, unconfirmed)
     pair     {num, name} → bonded pair, must be adopted together
   ============================================================ */
window.DOGS = [
  { key:"blue", num:"34", name:"Blue", aka:"Bleu", rank:"The Blue-Eyed Bandit · Yard Boss",
    blurb:"Ice-blue eyes, zero chill, and a belly-rub success rate of 100%.",
    breed:"Catahoula Leopard Dog mix", sex:"Neutered male", age:"About 2 years", weight:"52.5 lbs",
    energy:"High", kids:"TBD", dogs:"Yes", cats:"TBD", status:"Available",
    report:["Very social","People friendly","Dog friendly","Loves to play and run","Needs structure & daily exercise"],
    notes:[
      "Inmate #34 is wanted in at least three counties for the same offense: <strong>making eye contact.</strong> Those eyes are <strong>ice-blue</strong>, they are legally a weapon, and Blue deploys them on every volunteer and visitor who comes down the row. Nobody has finished a shift without giving him a belly rub. Nobody.",
      "Blue is serving time for circumstances beyond his control. He has proven to be a model inmate — <strong>very social, friendly with people and dogs</strong>, and a full-tilt believer that every yard time is the best day of his life. He runs like he's being paid per lap.",
      "He's ready for early release into a committed home with <strong>structure, exercise</strong>, and a couch he's technically not allowed on. <span class='rec'>(PAROLE) is recommended.</span>"],
    conditions:"An approved adopter willing to provide structure, exercise, and a lifelong commitment.",
    petfinder:"https://www.petfinder.com/member/us/sc/aiken/last-chance-ranch-of-south-carolina-sc10004/" },

  { key:"isaiah", num:"35", name:"Isaiah", aka:"", rank:"Snuggle Officer",
    blurb:"A smooth operator whose cuddle skills should honestly require a permit.",
    breed:"Labrador Retriever", sex:"Neutered male", age:"1½ years", weight:"51 lbs",
    energy:"Medium–High", kids:"TBD", dogs:"Yes", cats:"Interested, not aggressive", status:"Available",
    report:["Dog friendly","People friendly","Toy & treat motivated","Cat interested but not aggressive","Loves cuddles"],
    notes:[
      "Inmate #35 is what the file calls a smooth operator. Isaiah has <strong>stolen the hearts of staff and inmates alike</strong> with a charming personality, an irresistible smile, and <strong>cuddle skills</strong> that should honestly require a permit. He is always on his best behavior when treats or toys are involved — and he has figured out that treats or toys are always involved if he looks at you like that.",
      "He is <strong>friendly with people, friendly with dogs</strong>, and merely <em>interested</em> in cats, which around here counts as restraint. Assigned rank: <strong>Snuggle Officer.</strong> He takes the title seriously.",
      "Isaiah is ready for parole into a loving forever home. <span class='rec'>(PAROLE) is highly recommended.</span>"],
    conditions:"An approved adopter willing to provide structure, exercise, treats, and a lifelong commitment.",
    petfinder:"https://www.petfinder.com/dog/isaiah-9b60422f-254a-4c12-821f-5e2764afc673/sc/aiken/last-chance-ranch-of-south-carolina-sc10004/details/" },

  { key:"oatmeal", num:"39", name:"Oatmeal", aka:"", rank:"Door Greeter, First Class",
    blurb:"Good with cats, good with dogs, great with doors. Waiting since May 2024.",
    breed:"Lab mix", sex:"Male", age:"4 years", weight:"TBD",
    energy:"Medium", kids:"TBD", dogs:"Yes", cats:"Yes", status:"Available",
    report:["Good with cats","Good with dogs","No food aggression","Loves people & attention","House training in progress","Mild leash pulling (settles)"],
    notes:[
      "Inmate #39 has been in the system since <strong>May 28, 2024</strong> — longer than any dog should wait. He's currently doing his time in the <strong>Half Way House</strong> (a private home, home-to-home adoption), where he has taken up a quiet line of work: <strong>greeting people at doors</strong> like every one of them is the score of a lifetime.",
      "He is a model inmate — <strong>gets along with dogs, gets along with cats</strong>, guards nothing but the doorway. He is still perfecting his house training and pulls a little on leash for the first block, then settles in like a pro. He doesn't need perfection. He needs <strong>a patient human and a soft place to land.</strong>",
      "<strong>Booked 05/28/24.</strong> He has served his time. <span class='rec'>(PAROLE) is strongly recommended.</span>"],
    conditions:"A patient home willing to finish house training. Home-to-home adoption — he goes straight from his foster home to yours.",
    history:"Oatmeal came to Last Chance Ranch in May 2024 and has been living in a private foster home (our “Half Way House”) while he waits." },

  { key:"sanders", num:"42", name:"Sanders", aka:"", rank:"E Block Rookie · Reformed Side-Eye Specialist",
    blurb:"Came in feral and unsure. Now: mandatory couch time and Netflix rehabilitation.",
    breed:"Mixed breed", sex:"Male", age:"TBD", weight:"TBD",
    energy:"Low–Medium", kids:"TBD", dogs:"Yes (lives with dogs)", cats:"TBD", status:"Available",
    report:["Came in shy — warming up every day","Lives with other dogs (E Block)","Couch time: mandatory","Best for a patient, quiet home"],
    notes:[
      "Inmate #42 was picked up roaming the streets of North Augusta with a lengthy rap sheet: <strong>resisting leashes, avoiding human interaction, suspicious side-eye activity</strong>, and possession of zero indoor survival skills. Sanders came in feral and unsure of this whole “being loved” program.",
      "After transfer to E Block, he began serving his sentence of <strong>mandatory couch time, supervised Netflix rehabilitation</strong>, homemade meals, and emotional support from fellow inmates. Progress report: <strong>the side-eye is now mostly ironic.</strong> He is learning that hands are for petting, couches are for sharing, and people can be trusted — one at a time, on his schedule.",
      "The right person for Sanders is <strong>patient, quiet, and unbothered by a slow burn.</strong> He'll get there. <span class='rec'>(PAROLE) recommended</span> to a home that lets him take his time."],
    conditions:"A patient, calm home. Time to warm up. Couch access.",
    history:"Found as a stray in North Augusta, SC. Arrived fearful of people; now living comfortably with other dogs in E Block and gaining confidence daily." },

  { key:"leroy", num:"51", name:"Leroy", aka:"", rank:"The Professional · Works Alone",
    blurb:"Knows his commands, works for one trusted human, and prefers to be the only pet.",
    breed:"Terrier / American Pit Bull Terrier mix", sex:"Male", age:"4½ years", weight:"TBD",
    energy:"Medium", kids:"TBD", dogs:"No — only pet", cats:"No", status:"Available",
    report:["Knows all basic commands","Smart & attentive","Loves working with his person","Fiercely loyal","Only pet — not dog or cat friendly"],
    notes:[
      "Inmate #51 officially checked into Last Chance Ranch from Orangeburg, SC, and immediately established himself as <strong>a professional.</strong> Leroy <strong>already knows all of his basic commands.</strong> He is smart, attentive, and does his best work alongside one trusted human — the kind of partner who's already thought three moves ahead and doesn't need a crew.",
      "Now, every inmate has a few conditions to their parole. Leroy's is simple: <strong>he prefers to be the only inmate in the cell block.</strong> He is not dog-friendly or cat-friendly — but he is incredibly loyal and devoted to his human. Once you earn his trust, <strong>you've got a best friend for life.</strong> That's not a limitation. That's a commitment.",
      "<span class='rec'>(PAROLE) recommended</span> to a one-dog household ready for a partner, not a pet."],
    conditions:"Only pet in the home. A person ready to earn his trust and keep it.",
    history:"Came to Last Chance Ranch from Orangeburg, SC." },

  { key:"frodo", num:"52", name:"Frodo", aka:"", rank:"Ringbearer · Head of Napping",
    blurb:"A senior hobbit who has finished his quest and would like a lap now, please.",
    breed:"Staffordshire Bull Terrier", sex:"Male", age:"Senior", weight:"TBD",
    energy:"Low", kids:"TBD", dogs:"TBD", cats:"TBD", status:"Available",
    report:["Couch po-ta-to","Long naps a specialty","Daily cuddles (non-negotiable)","Calm & steady","Senior — minimum security"],
    notes:[
      "Meet Frodo, <strong>the bravest little hobbit this side of the Shire.</strong> Unlike his famous namesake, this Frodo has already completed his long journey and is ready to retire somewhere far more comfortable than Mordor. There has been some debate around the Ranch as to whether he is <strong>a Hobbit or a po-ta-to.</strong> The evidence is overwhelming: he is round, soft, happiest lounging, and has perfected the ancient art of doing absolutely nothing for hours at a time.",
      "While other inmates cause shenanigans, Frodo has dedicated himself to becoming <strong>the finest couch po-ta-to in the entire Shire.</strong> His parole requirements are simple: <strong>a warm lap, plenty of naps, daily cuddles</strong>, and someone who understands that every great hero deserves a peaceful ending to his story.",
      "He's looking for his own Grey Havens. <span class='rec'>(PAROLE) is highly recommended — eligible for immediate release.</span>"],
    conditions:"A warm lap worthy of the Shire. Long naps. Daily cuddles. A peaceful golden-years home." },

  { key:"princess", num:"16", name:"Princess", aka:"Trophy", rank:"Her Majesty · Sovereign of Snacks",
    blurb:"A senior German Shepherd who would like to be your one and only. Snacks accepted as tribute.",
    breed:"German Shepherd", sex:"Spayed female", age:"8+ years (senior)", weight:"60 lbs",
    energy:"Low–Medium", kids:"No small children", dogs:"No — only pet", cats:"No", status:"Available",
    report:["Loves snacks (all of them)","Knows basic commands","Walks great on a leash","Only animal — no other pets","No small children","Calm & regal"],
    notes:[
      "Inmate #16 goes by Princess. Her alias is Trophy. <strong>Both are accurate.</strong> She is not the getaway driver and she is not the lookout — <strong>she is what's in the vault</strong>, the reason the whole crew showed up. Eight-plus years of experience being adored — <strong>loyal, protective</strong>, and with no intention of sharing the throne.",
      "The Warden's file is clear on her terms: Princess needs to be the <strong>ONLY animal</strong> in the home, and <strong>no small children</strong>. Not out of malice — out of policy. She wants her own kingdom. In exchange she offers a subject who <strong>knows her basic commands, walks beautifully on a leash</strong>, and will accept snacks as tribute at any hour.",
      "She's looking for <strong>a quiet, snack-filled home where she can be your one and only.</strong> <span class='rec'>(PAROLE) is recommended</span> for an adopter ready to serve a queen."],
    conditions:"Only animal in the home. No small children. A quiet kingdom and a well-stocked snack drawer.",
    petfinder:"https://www.petfinder.com/dog/princess-aka-trophy-e36836dc-6534-4910-a3e9-5a9cd5e692eb/sc/aiken/last-chance-ranch-of-south-carolina-sc10004/details/" },

  { key:"lizzy", num:"8", name:"Lizzy", aka:"Lizzie", rank:"H-Block Veteran · The Family Business", hidden:true,
    pair:{ num:"9", name:"Thumper" },
    blurb:"Bonded with her brother Thumper — a two-for-one deal on love (and snack budget).",
    breed:"Lab mix", sex:"Female", age:"TBD", weight:"TBD",
    energy:"Medium", kids:"TBD", dogs:"Yes", cats:"TBD", status:"Bonded pair",
    report:["Bonded with brother Thumper (#9)","Must be adopted together","Seasoned — handles anything","Bickers over beds, forgets it for treats","Dog friendly (obviously)"],
    notes:[
      "The Warden reports that H-Block remains under the firm control of its resident sibling duo, <strong>Inmate #8 Lizzy and Inmate #9 Thumper.</strong> These two have perfected the art of sibling life: one minute inseparable, the next arguing over who gets the best bed, five minutes later back together like nothing happened. All disagreements are <strong>immediately forgotten if treats are involved.</strong>",
      "They may bicker like siblings, but Lizzy and Thumper are <strong>a bonded pair and must be adopted together.</strong> They've spent their lives side by side, and separating them isn't an option. They deserve a home where they can keep serving their sentence together — keeping morale high and the snack budget completely out of control.",
      "Case status: guilty of stealing hearts. <span class='rec'>(PAROLE) recommended — together.</span>"],
    conditions:"Adopted together with Thumper (#9). Two beds. A generous snack budget." }
];

/* Site-wide links & contact — used by every page. */
window.LCR = {
  name: "Last Chance Ranch of South Carolina",
  apply:  "https://form.jotform.com/261266940400047",   // adoption application
  foster: "https://form.jotform.com/261407369955064",   // foster application
  donate: "https://cash.app/$LastChanceRanchSC",
  facebook: "https://www.facebook.com/profile.php?id=61582497165034",
  tiktok: "https://www.tiktok.com/@last.chance.ranch03",
  youtube: "https://www.youtube.com/@LastChanceRanchofSC",
  petfinder: "https://www.petfinder.com/member/us/sc/aiken/last-chance-ranch-of-south-carolina-sc10004/",
  quiz: "https://pawtner-in-crime.onrender.com",
  // The rescue's own animal records — the live source for adoptable dogs.
  dogsFeed: "https://lcr-animal-records.onrender.com/api/public/dogs",
  phone: "(803) 479-8408",
  email: "lastchanceranchofsc@gmail.com",
  city: "Aiken, SC"
};
