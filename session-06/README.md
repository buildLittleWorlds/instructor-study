# Session 6 Instructor Paper-App: Knowing Without Reading

**Rebuilt for the Session 6 transformation.** The page was previously *The Agreement Machine*, a
calibration lab about rubrics. Session 6 stopped being a testing session and became the conceptual
session of the course, so the page was re-centred on the new idea. Nothing working was thrown away:
the evaluation modules moved down the page and now serve Session 7, and the Agreement Machine
survives in full as a side exhibit.

The URL is unchanged, because it is cited from the Classroom idea post and from Six Ideas card #5.

## What the page is now

> You are publishing apps whose code you have not read, and you know they work because you clicked
> them. That is a real way of knowing, it is not only happening in code, and it is not entirely new.
> What *is* new is that the layer you stopped reading can be confidently wrong — and that some
> layers cannot be read at all.

Fully static, no dependencies, no data files, nothing collected or exported.

**This page now works from `file://`.** It used to be the one Study page that did not, because it
fetched `data/rubric.json`. That data is inlined in the second script block. `data/rubric.json`
remains in the folder as the readable source of those numbers, but the page no longer loads it —
edit both if you change the panels, or delete the file and keep the inline copy as the single
source. Zero `fetch(` calls remain in `index.html`; that is the check.

## The three lead exhibits (Session 6 content)

1. **Three rungs.** Code you wrote / code AI wrote / a model, each with a *read it* and a *check it*
   button. Six states, all visibly different. Rung one: both doors open, reading takes eleven
   seconds. Rung two: both doors still open, reading would take twenty minutes — this is the rung
   the students' own apps live on. Rung three: *read it* shows 240 numbers and the verdict turns
   red — **"Reading did not work. It cannot — this is not a door."** That red verdict is the only
   one on the page and it is the beat the session turns on.

   The numbers are generated from a fixed seed (`1987`), so the grid is identical on every visit and
   an instructor can point at a specific number twice. The page labels them as illustrative rather
   than extracted weights. That label costs the exhibit nothing, because a grid of *real* weights
   would be exactly as unreadable — which is the claim.

2. **The confident summary.** Twenty-four lines of a real quiz app beside a five-claim description
   of it. Four claims are true of the code; one is not, and it is deliberately the most plausible
   one ("it saves your best score so you can try to beat it later" — a thing quiz apps usually do,
   and a thing this code never does). The reader is asked to spot it *before* checking. The closing
   insight only appears once all five are checked.

   The honesty label matters here and should not be edited away: the description was hand-written to
   demonstrate the failure mode. A real assistant summarising twenty-four lines would probably get
   all five right. **That is the actual problem** — you cannot tell an accurate summary from a
   confident one by looking at it, which is why the only move is to check.

3. **Where else this happened.** Six fields — photography, navigation, spreadsheets, chess,
   medicine, biology — each showing what stopped being hand-made, what the person steers instead,
   what instrument lets them see in, and what it cost. **Four of the six are badged "before AI"**,
   and that is the anti-hype guardrail built into the page rather than bolted onto it.

   Two carry an extra beat worth thirty seconds each in the room. **Navigation** is the honest cost:
   the mental map you used to build for free now goes unbuilt unless you choose to build it.
   **Biology** is the good news: AlphaFold colours its answer by confidence, and it is the only tool
   on the list that tells you where to doubt it.

Then **"So what is actually new?"** names three things and only three — the fallible layer, the
unreadable layer, and the change in who can do what — before the page hands off to its second half.

## The evaluation half (Session 7 content)

These modules are unchanged and still verified. They are **not run in the room during Session 6**;
they are the hand-off, and Session 7's run-of-show opens on them.

- **A window, not a verdict.** *Mostly unseen system → chosen check → observable evidence → where to
  look next.* Plus **"My check shows ___; it does not show ___."**
- **Three meanings of "it works."** A real 60×40 board running the Gosper glider gun, with a damage
  brush and three computed tests: reach the target once (passes, glider crosses at generation 40),
  keep working (passes), recover from damage (**fails** for almost any strike, because nothing ever
  trained the gun to survive a reader). **That failure is the lesson. Do not soften it.** Hands off
  to the Growing Neural CA grow/persist/regenerate triple, where the third test is chosen at
  training time.
- **The yardstick makes the jump.** The emergence-mirage argument as one slider: per-digit skill *p*
  on ten-digit addition, all-or-nothing = p¹⁰ (a late cliff) versus partial credit = p (smooth).
  Cites Schaeffer et al. 2023 against Wei et al. 2022 and labels the debate **live, not settled**.
- **Side exhibit — The Agreement Machine.** The original two-round calibration lab, intact.
  Agreement = share of rater-pairs landing within one point, computed in the browser. Untrained
  panels average ~49–54% agreement; trained panels converge while still discriminating by item
  (cliché low, pigeon high, Monday mid). The limitation says plainly that rating the same items
  twice nudges Round 2, and that **agreement is not correctness — a whole panel can agree and still
  be wrong.**

## The student move this page models

Not "name a success check" any more. **Ask AI to explain your own app, then check one thing it told
you against the real page.** "The AI told me my app ___. When I checked, ___." Both outcomes count
fully; a summary that turned out to be accurate is a real result, not a null one.

## Before class

Do one cold pass of the three lead exhibits. Press both buttons on all three rungs — especially
rung three's *read it*, which is the beat. Find the false claim in the summary yourself before you
reveal it. Click through all six fields so the switcher is warm.

## Using it in Session 6

1. Open on the ladder after the room has answered "how do you know your app works?" Rung three is
   the payoff; let it sit.
2. Run the confident summary and give the room a real minute to hunt before anyone presses a button.
3. Move through the switcher fast — two minutes a field. Name that four of six are pre-AI.
4. Land the three new things, then stop. The lower half of the page is next session.
5. Do not run the Agreement Machine in the room this week. It is a good exhibit and there is no time
   for it; students are not a standing ratings panel and never were.

## Using it in Session 7

Open the lower half. Window visual → gun bench (let a student do the damaging) → the five checks.
The yardstick slider if the room is quick. Then switch tabs to the Session 7 page for the describe
gate.

## Files

- `index.html` — the whole paper-app (vanilla JS, no dependencies, no network).
- `data/rubric.json` — the rubric and panel numbers in readable form. **No longer loaded by the
  page**; kept as the source of the inlined copy.

## Preview & deploy

`python3 -m http.server 8000` from this folder, or just open `index.html` — it works from the file
system now. Deploy by pushing (`session-06/`).
