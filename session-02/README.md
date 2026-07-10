# Session 2 Instructor Sequence: Where Does Randomness Enter?

Session 2 now uses three static objects in sequence:

1. `randomness-lab/` — Conway's Game of Life as a counter-model: fixed seed, random initial state, and explicitly noisy execution.
2. `playground/` — Loading the Dice: the real temperature formula over a small candidate-word distribution.
3. `index.html` — The Garden of Forking Sentences: temperature reshapes a whole probability tree and its weighted random walks.

The three objects answer one question: **when a system surprises us, did the surprise come from its input, its rules or learned parameters, or randomness while it ran?**

## Files

- `randomness-lab/index.html` — self-contained Game of Life laboratory; no dependencies or data files.
- `playground/index.html` — temperature/sampling toy.
- `index.html` — the Garden paper-app.
- `data/tree.json` — illustrative branch probabilities used by the Garden.

## Classroom Boundary

These are instructor examples. Students do not reproduce the Game of Life lab, collect ratings, or build temperature galleries. After the demonstration, they choose any small paper-app they want to build.

## Accuracy

- At 0% noise, the lab is exact finite-boundary Conway `B3/S23` and deterministic for a fixed state.
- A random board changes the initial condition; it is not temperature.
- The noise slider flips cells after the normal Conway step and is labeled as a nonstandard variant.
- Temperature reshapes language-model sampling at inference; it does not change learned weights.
- A transformer is not a cellular automaton. The comparison is a counter-model, not an architecture claim.

## Preview

Serve the instructor-study root:

```bash
python3 -m http.server 8000
```

Open:

- `http://localhost:8000/session-02/randomness-lab/`
- `http://localhost:8000/session-02/playground/`
- `http://localhost:8000/session-02/`

The complete teaching script is `../../session-02-run-of-show.md` in the parent course folder.
