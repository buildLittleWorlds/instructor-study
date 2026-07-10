# Session 3 Instructor Paper-App (v2): Attention Spotlight

The Bridge artifact for Session 3 (strand W3): **guess what a word needs, then watch what it pays attention to light up.** Clicking an underlined word now enters *guess mode* — the reader picks the 2–3 neighbors they think settle its meaning, then reveals, keeps their picks ringed over the glowing answer, and gets a score against the three strongest links ("You matched 2 of 3"). Predict-before-look, the course's signature habit, built into the page. The same word "bank" glows river/current in one sentence and savings/money in another — attention building meaning from neighbors, made visible. Genre: heatmap inspection. Fully static. (v1, "Fitted or Veneer?", is preserved in `../archive/session-03-v1/`.)

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies).
- `data/sentences.json` — five sentences with a focus word each, an authored attends-map (which neighbors glow and how strongly), meaning labels, captions, and two compare pairs (two "banks," two "springs").

## Honesty framing (important)

The glowing links are an **illustrative attention map** — hand-drawn to show which neighbors a model must connect to disambiguate the word, not weights extracted from a specific model's internals. The method note and limitation say this plainly. It's a true teaching diagram of how attention works, not a raw readout. If you ever wire in real attention weights (e.g., via a small model), swap the `attends` maps and update the note.

## Before class

Add or swap sentences freely in `data/sentences.json` — the page validates focus-word/index alignment at author time (see the build check). Keep at least one compare pair for the "same word, two minds" reveal, which is the paper's punch.

## Cellular automata counter-model (5 minutes)

Before Attention Spotlight, return briefly to Game of Life: a Conway cell can inspect only its eight immediate neighbors; a neural cellular automaton uses a local `3×3` neighborhood plus hidden state; local influence spreads over repeated steps. Contrast that with a transformer token connecting to distant tokens in its allowed context through attention.

Land: **How does what a unit can see change what the whole system can do?** Do not call CA neighbors "attention"; local propagation versus long-distance connection is the contrast.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-03/`) — the existing URL now serves v2.

## Using it in the 15-minute Bridge

1. Use the cellular-automata contrast above.
2. Click "bank" in the river sentence and let the room guess two useful context words before revealing.
3. Press **Spotlight the two banks** and compare the different neighborhoods of meaning.
4. Land: context reshapes meaning. Release students to free-choice builds; they do not need to submit scores or build attention cards.
