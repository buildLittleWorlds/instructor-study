# Session 9 Instructor Paper-App: The Argument You Run

The Bridge artifact for Session 9 (reader path): **be a 1970 reader, then rearrange a page and feel the argument change.** Genre: **lineage walk + reader-path lab**. The page is a single self-contained `index.html` — no fetch, no data folder, no dependencies; it works from `file://` and collects, exports, and submits nothing. Session 9's idea on one line: *a paper-app makes an idea traversable; order, labels, and interaction shape understanding.* The done-check, verbatim on the page: **"A classmate can use the page without you narrating."**

## The two modules

1. **Be a 1970 reader.** Two framing paragraphs put the reader in October 1970, when Martin Gardner's "Mathematical Games" column introduced Conway's Game of Life and readers finished the argument by running it — graph paper, Go boards, after-hours mainframes, mail. Then the real hand check: generation 1 (the R-pentomino) drawn read-only on a 9×9, and an empty interactive 9×9 beside it where the reader clicks every cell they believe is alive in generation 2 under B3/S23. **Check my generation** grades cell-by-cell against the true board (computed live, not baked): accent ring = correct-alive, warn fill = alive-but-missed, warn ring = wrongly-alive, plus a score line ("You placed the board 79/81 cells right — 1 birth you found, 1 you missed."). Any checked round offers round 2: the shown grid becomes the true generation 2 and the reader predicts generation 3. After round 2, the payoff card lands the module: that ache in your attention is what hooked a generation of readers. A six-stop **lineage strip** (each card: year, name, and in bold *what the reader got to do*; click for one sentence and a link) walks Gardner's column → after-hours mainframes and the $50 glider-gun wager → explorable explanations → Growing Neural Cellular Automata (anthology specimen #5) → From Cells to Pixels (SIGGRAPH 2026) → *your paper-app*, a display-only fill-in-the-blank that points at the anthology's twenty-one specimens. Module landing line: *"This kind of page is fifty years old: an argument you complete by running it."*

2. **Order is an argument.** A miniature five-card paper-app about a blinker — Hook, What to do, The interaction (a real B3/S23 board on a bounded 5×5 with start/pause and step), What to notice, Next question — rendered in a preview pane with ▲▼ arrows on every card. Reordering re-renders the miniature instantly; the working board is a single live DOM node that gets *moved*, never rebuilt, so it keeps running (and keeps its generation count) wherever it lands. A **first-ten-seconds chip** above the preview always states which card a stranger meets first, with a computed annotation per card (interaction-first: "a stranger can act before reading — but will they know what they saw?", and so on for all five). Three loadable orders carry authored cost commentary: **explanation-first** ("three paragraphs stand between the stranger and the button — most strangers never make it"), **payoff-spoiled**, and **my order** (motive → action within ten seconds → meaning once the reader has something to attach it to → exit with a question). The page opens on explanation-first, because that is how most first drafts come out. A done-check card states Session 9's bar verbatim and suggests the sound-off test: hand someone your page, say nothing, watch where their cursor stalls. Module landing line: *"Order, labels, and interaction are doing the arguing — arrange them so a stranger knows where to start."*

## Computed vs. authored (honesty framing)

- **Computed:** one twelve-line B3/S23 stepper drives everything — the answer keys for both hand-check rounds (stepped live from the R-pentomino seed; no key is typed anywhere in the file), the cell-by-cell grading and score line, the blinker miniature, and the first-ten-seconds chip's reading of the current order. Reseed the left board and the page grades the new pattern just as strictly.
- **Authored:** the curiosity box, the two framing paragraphs, all six lineage stops, every sentence on the five cards, the three preset orders and their cost commentary, and the payoff card — all flagged `EDIT HERE` (data blocks in the script; prose paragraphs in the HTML).
- The on-page accuracy note says the lineage is compressed (dates and names are right; the strip names eras, not every ancestor) and states exactly what the boards are: real bounded-grid Conway, with the infinite-board equivalence claim below.

## Verified: the bounded boards tell the truth for these generations

Checked by scratch simulation before authoring (bounded 9×9 vs. bounded 13×13 vs. an unbounded set-based board):

- Generation 2 of the R-pentomino has **6 cells** (2 births, 4 survivors, 1 death — the crowded center dies); generation 3 has **7 cells** (3 births, 4 survivors, 2 deaths).
- The bounded 9×9 answers for generations 2 and 3 are **identical** to the 13×13 and infinite-board answers. In fact the 9×9 evolution matches the infinite board through generation 12; the pattern first pokes past the frame at generation 13 — so the page's claim ("an infinite board would give the same answers for these generations") holds with a wide margin, and the famous 1,000+-generation churn is honestly attributed to bigger boards.
- The blinker arithmetic on the What-to-notice card is checked too: each step, **two** cells die and **two** are born while the center survives (period 2; the 5×5 bound never touches it).

Re-check after any seed change (clipping each step to the bound is exactly bounded-grid evolution, since outside cells then never exist to influence anything):

```python
def step(live, bound=None):
    from collections import Counter
    counts = Counter(n for cell in live
                     for n in [(cell[0]+dr, cell[1]+dc)
                               for dr in (-1, 0, 1) for dc in (-1, 0, 1) if dr or dc])
    new = {c for c, k in counts.items() if k == 3 or (k == 2 and c in live)}
    return new if bound is None else {(r, c) for (r, c) in new
                                      if 0 <= r < bound and 0 <= c < bound}

g1 = {(3, 4), (3, 5), (4, 3), (4, 4), (5, 4)}          # R-pentomino, centered on the 9x9
assert step(g1, 9) == step(g1) and step(step(g1, 9), 9) == step(step(g1)), 'frame changed the answer!'
print('gen2:', len(step(g1)), 'cells · gen3:', len(step(step(g1))), 'cells · bounded == infinite: verified')
```

Output today: `gen2: 6 cells · gen3: 7 cells · bounded == infinite: verified`. Keep the seed a few cells clear of the frame and generations 2–3 stay safe by the same light-cone logic the sim confirms; if the assert ever fires, enlarge the board on the page or drop its infinite-board sentence.

## Using it in the 15-minute Bridge

1. **Be a 1970 reader, together.** Project the hand check and let the room call out cells for generation 2 — click only what they call, then Check. The grading does the correcting; the center cell's death by overcrowding is the usual gasp. Run round 2 (generation 2 → 3) only if the room is fast.
2. **Lineage strip, fast.** Walk the six cards left to right reading only the bold lines — fifty years in under a minute, ending on the blank card: *what does your reader get to do?*
3. **Load the three orders** in Module 9B and let the room feel the costs: explanation-first (count aloud how much reading stands before the button), payoff-spoiled, then my order. Let a student re-deal with the arrows and watch the chip change.
4. **Land the done-check:** "A classmate can use the page without you narrating." Students then open their own drafts and restructure the order — motive, action, meaning, exit — and run the sound-off test on a neighbor.

## Before class

Open the page from disk and click through both rounds and all three presets once. If you swap the seed pattern (the `R_OFFSETS` block), keep it well inside the frame and rerun the check script above — never trust a bounded board past its light cone, and never hand-type an answer key. The authored blocks are all marked `EDIT HERE`; the five cards' prose is deliberately tiny — resist the urge to fatten the Hook.

## Preview & deploy

No server needed — the page is fully self-contained and runs from `file://` (a plain double-click). `python3 -m http.server 8000` works too if you're previewing the whole study. Deploy by pushing (`session-09/`).
