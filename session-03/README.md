# Session 3 Instructor Paper-App (v2): Attention Spotlight

The Bridge artifact for Session 3 (strand W3): **click a word, watch what it pays attention to light up.** The same word "bank" glows river/current in one sentence and savings/money in another — attention building meaning from neighbors, made visible. Genre: heatmap inspection. Fully static. (v1, "Fitted or Veneer?", is preserved in `../archive/session-03-v1/`.)

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies).
- `data/sentences.json` — five sentences with a focus word each, an authored attends-map (which neighbors glow and how strongly), meaning labels, captions, and two compare pairs (two "banks," two "springs").

## Honesty framing (important)

The glowing links are an **illustrative attention map** — hand-drawn to show which neighbors a model must connect to disambiguate the word, not weights extracted from a specific model's internals. The method note and limitation say this plainly. It's a true teaching diagram of how attention works, not a raw readout. If you ever wire in real attention weights (e.g., via a small model), swap the `attends` maps and update the note.

## Before class

Add or swap sentences freely in `data/sentences.json` — the page validates focus-word/index alignment at author time (see the build check). Keep at least one compare pair for the "same word, two minds" reveal, which is the paper's punch.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-03/`) — the existing URL now serves v2.

## Using it in the 15-minute Bridge

1. Narrowing move: "You'll learn attention reads each word in light of the others. Let's literally watch it."
2. Click "bank" in the river sentence (water words glow), then in the savings sentence (money words glow). Then press **Spotlight the two banks** to show both at once.
3. Land the point: the model never stored one meaning for "bank" — it grows the meaning fresh from context every time. That's why *who the answer is for* can reshape everything.
4. Cliffhanger on the page: does the model truly reshape for a new audience, or just re-decorate? — the judgment we start measuring next.
