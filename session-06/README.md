# Session 6 Instructor Paper-App: The Agreement Machine

An instructor-only **calibration lab**. The reader tries the same three story openings twice — once on gut feeling and once with named criteria — to see how the definition of success changes a judgment. The page is fully static and does not collect or export ratings.

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies).
- `data/rubric.json` — the four-criterion rubric (Fit, Form, Earned surprise, Return) with scale anchors; three openings, each with an untrained panel and a trained panel.

## The measure is real (computed)

Agreement = share of rater-pairs that land within one point of each other, computed in the browser (the reader's own rating is added to each panel). Verified: untrained panels average ~49% agreement (scores spread 1–5); trained panels hit 100% (tight) while still discriminating quality by item (cliché low, pigeon high, Monday mid). The rubric doesn't flatten — it converges *and* separates.

**Per-criterion Round 2:** the reader considers Fit / Form / Earned surprise / Return separately. `rubric.json` carries illustrative panels so the page can compute the contrast locally. After the reveal, the page names which criterion remains least settled.

## The clean-design note (honesty)

The paper rates the same items twice, which means Round 2 is nudged by having seen them. The limitation says this plainly and points to the cleaner design the panels actually model: separate untrained and trained groups on the items. It also flags the deeper truth — agreement makes a judgment *usable as evidence*, not automatically *correct*.

## The rubric

Fit · Form · Earned surprise · Return are one instructor-created example of how naming criteria changes what a test can see. Students do not need to use these criteria in their own projects.

## Before class

Test the shipped interaction and use one item to introduce the idea that different definitions of success produce different judgments. Keep the illustrative panels; students are not a standing ratings panel.

## Cellular automata evaluation callback (under 5 minutes)

Use Growing Neural Cellular Automata to distinguish three tests: can the system reach the target once, remain stable, and recover after damage? The point is not to collect class ratings. The point is that **success depends on which behavior you test**, and one impressive demonstration does not establish robustness.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-06/`). Link on the landing page and Six Ideas card #5.

## Using it in the 15-minute Bridge

1. Use the grow/persist/regenerate callback above.
2. Demonstrate one item in the Agreement Machine to show that different criteria answer different questions.
3. Ask each student to name one success check for their own app: loads, responds, recovers, explains itself, or handles an unusual input.
4. Do not collect class ratings, exports, or agreement rows.
