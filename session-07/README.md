# Session 7 Instructor Paper-App: The Run

The Bridge artifact for Session 7 (strand W7): a **filterable evidence corpus** — the Argo Scholar / HELM living-table genre. It ships the actual dataset for the strand's three-condition study (8 prompts × default/random/directed, each rated on the four-criterion rubric) and lets the reader filter, sort, search, and inspect it — while deliberately withholding the aggregate verdict for next week. Genre: dataset/corpus browser. This is the seventh deliberately-different form: map (S1), tree (S2), spotlight (S3), dashboard (S4), forge (S5), calibration lab (S6), corpus browser (S7). Fully static.

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies; uses localStorage for the sealed prediction, degrading gracefully).
- `data/dataset.json` — 24 scored rows across three conditions + 1 flagged drift row; totals computed from the four criteria.

## The data (and the intended reveal it sets up for W8)

Verified pattern, drift row excluded: default mean ~11.6/20 (tight, reliable-mediocre — the false mean), random ~11.5 (wide 8–15, one rare spike — the piano-tuner line), directed ~19.0 (high, with an honest weak outlier at 16). Random's best beats every default; directed's worst still beats them — **real overlap**, so Week 8's reveal is a genuine analysis, not a foregone landslide. The page never prints these means; sorting by total lets the reader *feel* the shape without the formal average.

## Two teaching moves built in

1. **The cherry-pick trap** — a button highlights the single best directed row and worst default row, "proving" directed wins by anecdote, then names the trick: that's exactly why you keep and average everything.
2. **The flagged drift row** — mid-run the prompt drifted (wrong subject); it's logged, left visible, and excluded from analysis. Honest logging, not a highlight reel (the strand's W7 watch-for, made literal).

## Honesty

Texts and scores are illustrative (authored to show a real run's shape); totals are computed. On a real run these are model outputs the class rated. The note and limitation say so, and the limitation flags the small-N fragility that W8's outlier-toggle addresses.

## Before class (stronger)

Do the real run: batch-generate outputs across the three conditions (your key, screenshared per the run-of-show), have the class rate them on the rubric via the export pattern, and paste the rows into `dataset.json`. The browser then explores your class's own evidence.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-07/`). Link on the landing page. (No Six Ideas card — Session 7 is method, not a new mechanism.)

## Using it in the 15-minute Bridge

1. Narrowing move: "I have a yardstick judges agree on. Now watch what happens when I point it at everything — not my three favorites."
2. Sort by total, then hit the cherry-pick trap live: "I can prove anything with one row. That's the disease. Scale is the cure."
3. Show the flagged drift row: "I broke my own protocol here. I didn't hide it — I logged it."
4. Everyone seals a prediction. Cliffhanger on the page: next week we compute the averages — and see what one outlier does. (→ Week 8, The Results Rep.)
