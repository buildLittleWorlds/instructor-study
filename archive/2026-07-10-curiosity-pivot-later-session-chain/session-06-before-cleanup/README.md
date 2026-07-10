# Session 6 Instructor Paper-App: The Agreement Machine

The Bridge artifact for Session 6 (strand W6): a **calibration lab**. The reader rates the same three story openings twice — once on gut feeling, once with a four-criterion rubric — and watches their agreement with the panel jump from ~49% to 100%. Genre: reader-as-subject calibration experiment. This is the sixth deliberately-different form: map (S1), tree (S2), spotlight (S3), dashboard (S4), forge (S5), calibration lab (S6). Fully static.

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies).
- `data/rubric.json` — the four-criterion rubric (Fit, Form, Earned surprise, Return) with scale anchors; three openings, each with an untrained panel and a trained panel.

## The measure is real (computed)

Agreement = share of rater-pairs that land within one point of each other, computed in the browser (the reader's own rating is added to each panel). Verified: untrained panels average ~49% agreement (scores spread 1–5); trained panels hit 100% (tight) while still discriminating quality by item (cliché low, pigeon high, Monday mid). The rubric doesn't flatten — it converges *and* separates.

**Per-criterion Round 2 (added 2026-07-05).** Round 2 is now the actual instrument: the reader rates Fit / Form / Earned surprise / Return separately (1–5 each) and their overall is the average — exactly the per-criterion judgment the W7 run collects at scale. `rubric.json` now carries illustrative per-criterion trained panels (`trainedByCrit`), authored so each judge's four criteria round to their overall (verified programmatically — the page never contradicts itself). After the reveal the page shows per-criterion agreement and names **your worst-agreeing criterion** — which is exactly this week's Classroom question, so the paper feeds the discussion directly. Earned surprise and Return are authored as the wobbliest (98% panel-only vs 100%), matching the truth that surprise is the hardest judgment to train.

**Export (added 2026-07-05).** "Copy my two-round ratings (JSON)" appears with the headline — gut + per-criterion rows per opening. Collect the class's exports and you have the real panels for the swap-in below.

## The clean-design note (honesty)

The paper rates the same items twice, which means Round 2 is nudged by having seen them. The limitation says this plainly and points to the cleaner design the panels actually model: separate untrained and trained groups on the items. It also flags the deeper truth — agreement makes a judgment *usable as evidence*, not automatically *correct*.

## The rubric (used all strand)

Fit · Form · Earned surprise · Return — the four-criterion excellence rubric the instructor's study uses to judge the three conditions from Session 5. Weeks 7–8 apply it at scale (the run) and analyze the results.

## Before class (stronger)

Replace the illustrative panels with real class ratings: have students rate the three openings on gut, then on the rubric, and paste the numbers into `rubric.json` (via the export pattern from earlier weeks). The page then shows the class's own agreement jump.

> **v4 boundary:** keep this replacement optional. The page is an instructor example; students are not a standing ratings panel.

## Cellular automata evaluation callback (under 5 minutes)

Use Growing Neural Cellular Automata to distinguish three tests: can the system reach the target once, remain stable, and recover after damage? The point is not to collect class ratings. The point is that **success depends on which behavior you test**, and one impressive demonstration does not establish robustness.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-06/`). Link on the landing page and Six Ideas card #5.

## Using it in the 15-minute Bridge

1. Use the grow/persist/regenerate callback above.
2. Demonstrate one item in the Agreement Machine to show that different criteria answer different questions.
3. Ask each student to name one success check for their own app: loads, responds, recovers, explains itself, or handles an unusual input.
4. Do not collect class ratings, exports, or agreement rows.
