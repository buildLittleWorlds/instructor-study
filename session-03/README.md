# Session 3 Instructor Paper-App (v3): Attention Spotlight

The Session 3 instructor example asks readers to guess which context words help settle an ambiguous word, then compare their reading with a hand-authored teaching diagram. The same word “bank” uses different cues in a river sentence and a savings sentence. The new context-window control lets the instructor show one neighbor, three neighbors, or the whole sentence before the reveal.

This is an instructor example and idea generator. Students build any small app they care about; they do not reproduce the diagram, submit scores, or run a context experiment.

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies).
- `data/sentences.json` — five sentences with a focus word, an authored cue map, meaning labels, captions, and two compare pairs.

## Honesty framing (important)

The glowing cues are hand-authored context clues, not attention weights extracted from a model. Real transformers use many attention heads across many layers, and attention weights are not a complete explanation of model reasoning. The page labels this limitation next to the interaction.

## Before class

Add or swap sentences in `data/sentences.json`. Keep at least one compare pair for the same-word/different-context reveal. Test all three context-window settings after changing token indexes.

## Cellular automata counter-model (5 minutes)

Before Attention Spotlight, return briefly to Game of Life: a Conway cell can inspect only its eight immediate neighbors; a neural cellular automaton uses a local `3×3` neighborhood plus hidden state; local influence spreads over repeated steps. Contrast that with a transformer token connecting to distant tokens in its allowed context through attention.

Land: **How does what a unit can see change what the whole system can do?** Do not call CA neighbors "attention"; local propagation versus long-distance connection is the contrast.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-03/`) — the existing URL now serves v2.

## Using it in the 15-minute Bridge

1. Use the cellular-automata contrast above.
2. Start with **One neighbor**, then widen the context window.
3. Click “bank” in the river sentence and let the room guess two useful context words before revealing.
4. Press **Spotlight the two banks** and compare the two authored cue maps.
5. State that the diagram is illustrative, then release students to free-choice builds.
