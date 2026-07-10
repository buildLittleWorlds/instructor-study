# Session 9 Instructor Paper-App: The Four Corners

The Bridge artifact for Session 9 (strand W9, the short-strand anthology week): an **interactive 2×2 sorter** — the study's core claim redrawn as a map the reader walks alone. Readers sort eight unlabeled passages into the four corners built from the class vocabulary (false mean / random swerve / classic form / true swerve), export their sorting, then compare against the room's consensus. Genre: argument-as-sorting-game. Ninth deliberately-different form: map (S1), tree (S2), spotlight (S3), dashboard (S4), forge (S5), calibration lab (S6), corpus browser (S7), many-paths reveal (S8), **2×2 sorter (S9)**. Fully static, no dependencies.

## The axes (the vocabulary, made spatial)

x: *expected → unexpected* · y: *choices serve the whole: weakly → strongly*.
Corners: *classic form* (expected/strong), *the true swerve* (unexpected/strong), *the false mean* (expected/weak), *the random swerve* (unexpected/weak).

## Files

- `index.html` — the paper-app (vanilla JS; copy-before-reveal enforced by button gating).
- `data/items.json` — the eight cards: **six are row ids resolved at load from `../session-07/data/dataset.json`** (texts never copied, so cards can't drift from the evidence), two are classic-form specimens authored by me (marked).
- `data/consensus.json` — the answer key: per-card quadrant votes. **Illustrative until the Session 9 data moment**; its note says so and the page quotes that note in the method.

## The two troublemakers (the interpretation's engine)

- **r20** (random, piano tuner, 15/20 — the spike): the illustrative room splits 6/5 between random swerve and true swerve. Noise can wear purpose's clothes for one sentence.
- **r24** (directed, taxidermist, 16/20 — the weak commission): lands in *classic form* — the commission asked for a break the room couldn't find. Provenance ≠ placement; only placement is about quality.

## Teaching moves built in

1. **Copy before reveal** — "Copy my sorting" unlocks at 8/8; the reveal is a separate second step. A prediction recorded after the answer is not a prediction.
2. **Provenance revealed last** — each card's origin (condition + row id, or "written by me") appears only inside the reveal, under the room's votes.
3. **Research language modeled** — the summary reports matches/total judged blind, and sends disagreement to the origin line instead of calling either side wrong.
4. **The border readout (added 2026-07-05)** — after the reveal, the summary names *where* the reader's misses concentrated (e.g., "your one miss sits on the random swerve ↔ true swerve border — the exact border this whole study lives on"). The export now carries the standard `{paper, session, exported, …}` envelope like every other paper's.

## Honesty

Run cards inherit Session 7's illustrative-data label (their file is fetched live and its note chain holds). The consensus tallies are authored guesses, labeled in `consensus.json`, quoted on the page, to be replaced by the real class sorting.

## Before class (stronger)

1. Run the data moment: class sorts, clicks "Copy my sorting", pastes in chat; tally per-card quadrant votes into `data/consensus.json` (update `n`), drop the illustrative note.
2. If Session 7's dataset was regenerated with real runs, re-read the interpretation — the two-troublemakers story depends on rows r20/r24 keeping their roles (swap `items.json` row ids if the new data's spike/weak rows differ).

## Preview & deploy

Serve the **repo root** (the page fetches `../session-07/`): `python3 -m http.server 8000` from `instructor-study/`, then open `/session-09/`. Deploy by pushing (`session-09/`). Link on the landing page. (No Six Ideas card — card 6 waits on Session 10.)

## Using it in the 8-minute short strand

1. Narrowing move: "My final paper needs one interaction that carries the whole claim. Here it is: the claim as a map."
2. Class sorts four of the eight cards live; everyone copies their sorting into the chat (that's the data moment — the consensus file is built from these).
3. Reveal on screen: let the piano-tuner split and the taxidermist demotion do the talking.
4. Pair with the anthology specimen (*Communicating with Interactive Articles*): prose and interaction interleaved is the week's writing lesson.
5. Cliffhanger on the page: next week the machine judges — will it find the true swerve, or vote for its own reflection? (→ Week 10, the judge-vs-panel duel.) **Students spend the studio hour restructuring their chosen rep into `final/` — this is the Checkpoint C draft week.**
