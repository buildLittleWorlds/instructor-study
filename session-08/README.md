# Session 8 Instructor Paper-App: The Reveal

The Bridge artifact for Session 8 (strand W8): a **many-paths results reveal** — the Boba/multiverse-analysis genre. It finally computes the averages Session 7 refused to, then hands the reader the full analysis menu: 3 outlier toggles × 5 yardsticks × 2 aggregations = **80 paths**, recomputed live, with a "walk all 80" button that reports exactly where the finding holds and where it flips. Genre: many-paths analysis. Eighth deliberately-different form: map (S1), tree (S2), spotlight (S3), dashboard (S4), forge (S5), calibration lab (S6), corpus browser (S7), **many-paths reveal (S8)**. Fully static, no dependencies.

## Files

- `index.html` — the paper-app (vanilla JS; reads the reader's Session 7 sealed prediction from localStorage key `run-seal` and opens their envelope first).
- `data/predictions.json` — the sealed-envelope tallies (class tallies illustrative — swap in the real ones; `mySeal` is real).
- **No copy of the dataset.** The page fetches `../session-07/data/dataset.json` unchanged. That is a design decision, stated in the method: the analysis cannot quietly edit the evidence, and if S7's data is regenerated with real runs, this page updates itself.

## The result (computed, not typed)

Default path (flagged drift row excluded, mean of totals): **directed 19.0 · default 11.6 · random 11.5**. Every number in the prose is injected by the same in-browser computation, so text and data cannot disagree. Verified across all 80 paths: directed wins every path on total, fit, form, and return; **only on "earned surprise" alone does random win or tie** (~4.6 vs ~4.5). That flip is the interpretation's centerpiece: surprise is what randomness manufactures for free; fit, form, and return are what make it excellence.

## Teaching moves built in

1. **Envelopes before results** — the reveal is gated behind opening the sealed predictions (reader's own seal read from localStorage, mine, and the class tally). Prediction-before-reveal, practiced on ourselves.
2. **The outlier toggles** — include the flagged drift row (it *flatters* directed — honesty costs), drop random's luckiest row, drop directed's weakest. The bars barely breathe: that's what robust feels like.
3. **The one flip path** — judged by earned surprise alone, random edges directed. The winner-changed counter and the walk-all-80 summary make the fragility/robustness boundary exact.
4. **The two sentences** — reader writes their own does-not-prove sentence before seeing mine; copy button reuses the export pattern.

## Honesty

The rows are Session 7's authored, illustrative stand-ins (their own note is quoted live in the method). The class prediction tallies in `predictions.json` are illustrative and labeled. All statistics are computed in-browser from the fetched file.

## Before class (stronger)

1. Replace `data/predictions.json` tallies with the real sealed predictions from Session 7.
2. If you regenerated `session-07/data/dataset.json` with real runs, this page needs no changes — but re-read the interpretation prose to confirm the flip story still holds (the numbers update themselves; the argument might not).

## Preview & deploy

Serve the **repo root** (not this folder — the page fetches `../session-07/`): `python3 -m http.server 8000` from `instructor-study/`, then open `/session-08/`. Deploy by pushing (`session-08/`). Link on the landing page. (No Six Ideas card — Session 8 is method, not a new mechanism. Card 6 waits on Session 10.)

## Using it in the 15-minute Bridge

1. Narrowing move: "Last week I refused to average. Today I pay up — but an average is a choice, so you're getting all of them."
2. Open the envelopes (real class tallies pasted in), then the results. Let the gap land: ~19 vs ~11.6.
3. Hand them the path panel: toggle the outliers ("watch nothing happen — that's robustness"), then switch the yardstick to earned surprise ("watch it flip — that's what randomness buys").
4. Data moment: class drafts the does-not-prove sentence with you; a volunteer's version goes in the chat via the copy button.
5. Cliffhanger on the page: if directed won, *who made it excellent?* Hold for Week 10; next week we write the argument. (→ Week 9, the 2×2 sorter.) **Checkpoint B pitches follow in the last 25 minutes.**
