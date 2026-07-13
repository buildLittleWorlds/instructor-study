# Session 5 Instructor Paper-App: The Next Move

The Bridge artifact for Session 5: **a curiosity is useful when it gives you a next move.** Genre: history walk + triage forge. The reader predicts the fate of the R-pentomino before running a real Life engine, watches Conway's group's curiosity become the field's direction (glider → $50 wager → Gosper's gun), then triages seven authored curiosities into four verdict categories before seeing the instructor's calls — and finishes on three sentence-starters aimed at their own project. Landing line, on the page and in class: **"A useful curiosity gives you a next move."** Fully self-contained: one file, no fetch, no dependencies; works opened straight from `file://`.

## The three modules

1. **the five cells nobody could predict.** A real bounded B3/S23 engine (120×80, double-buffered `Uint8Array`). Predict-first gate: the run controls stay locked until the reader picks a settle-time chip. Run (~20 gen/s), Fast (~120 gen/s), Skip to the end (chunked so ~1,100 generations never freeze the page, progress every 100 gens), Reset. Live readouts: generation, population, a population sparkline, and a **real glider census** — sixteen templates the page generates at load by running a lone glider four steps and taking every rotation/reflection, matched exactly with an empty one-cell border, every ten generations. Settle detection is real too: state hashed and compared with two generations back (checked only after gen 10, hash confirmed cell-by-cell). On this board the R-pentomino settles at **generation 1103, population 118, peak 314, most gliders aloft at once 5** — computed live on every visit, never hardcoded; the reveal card quotes the canonical infinite-board record (1,103 generations, 116 cells, six gliders; Richard Guy, 1969) as history beside the live numbers. Second beat: **Load the glider gun** swaps in the Gosper gun and the $50-wager story; on this bounded board the gliders die at the edge, and the page says so.
2. **does it give you a next move?** Seven authored curiosity cards. For each, the reader picks a verdict chip *before* seeing the instructor's: **watchable now / buildable smaller / just an opinion (as stated) / needs a yardstick first**. Each reveal carries two or three sentences of reasoning; a running tally ends on "You matched my verdict on N of 7 — disagreement is fine; the four categories are the tool." Closes with the three sentence-starters ("I want the visitor to… / The interesting part is… / The smallest next version is…") as a quiet card the reader answers in their head — no inputs, no storage.
3. **the study I stopped building.** Three click-to-expand cards: what the retired twelve-session research machine was, why it failed the course's material gate (coordination without payoff for these students), and what survived (Session 4's measured sameness, Session 6's calibration lesson, Session 10's authorship exhibit, and the archive kept as provenance at `../archive/2026-07-10-curiosity-pivot-later-session-chain/`). Closing line: "Abandoning a direction is a research move when you can say what you kept" — which is exactly what the session asks students to do with their own builds.

## Honesty framing

- **Computed, live:** every generation of the board, the settle detection, the glider template matching (and its "most seen aloft at once" maximum), the sparkline, the prediction verdict, and the Module 5B match tally. The readouts always show this board's own numbers; the canonical record appears only as quoted history.
- **Authored:** the three history beats, the seven curiosity cards and their verdicts and reasoning, and the Module 5C strand cards. All of it lives in one marked block at the top of the page's script (`EDIT HERE`).
- **Limits, stated on the page:** the board is bounded (edges absorb travelers; infinite Life is the ideal object the canonical numbers describe — the match is close because the ash forms untouched mid-board while the edges swallow the gliders); the census recognizes only the standard glider's sixteen phase-orientations, so rarer spaceships go uncounted; and the run is fully deterministic — same seed, same rule, same movie every time; the surprise is not randomness.
- **Guardrail:** a transformer is not a cellular automaton, and the page makes no LLM mechanism claims. Session 5 teaches a continuity — curiosity → direction — and says so plainly.

No localStorage, no exports, no class data: the reader's picks sharpen the reader's eye and go nowhere.

## Using it in the 15-minute Bridge

1. **Predict.** Put the five cells on screen and make the room commit to a chip before anything runs — under 100, a few hundred, over a thousand, never. Wrong-but-locked beats right-but-after.
2. **Run, then Skip.** Let it churn at Run speed for ~20 seconds so they feel the 1970 problem, then Skip to the end and read the reveal card aloud: settle generation, peak, gliders — and Guy finding the glider by watching.
3. **Load the gun.** Tell the $50 story over the running gun; let the census count the stream. A strange seed is a curiosity; the gun is what a curiosity becomes when it hands someone a next move.
4. **Triage two or three cards live.** Have the room vote a verdict chip before you click, then argue with your reasoning. Card 1 (opinion → narrowed build) and card 4 (city → one intersection) are the reliable arguments.
5. **Land the sentence-starters.** "I want the visitor to… / The interesting part is… / The smallest next version is…" — then release students to pick their own direction: a current app, an older app, or a new curiosity, plus one deployed improvement. Module 5C is there if anyone asks what abandoning a direction looks like done honestly.

## Before class

The page is fully self-contained — no data folder, no fetch. Every authored piece (history beats, the seven cards and verdicts, the strand cards) sits in the `EDIT HERE` block at the top of the inline script; swap cards freely, keep the four verdict categories. If you touch the seeds or the engine, re-check the settle numbers by watching a Skip run — the page computes them fresh, so the reveal card will stay honest even if the copy in this README goes stale.

## Preview & deploy

Open `index.html` directly (`file://` works — nothing is fetched) or serve the folder with `python3 -m http.server 8000`. Deploy by pushing `session-05/`.
