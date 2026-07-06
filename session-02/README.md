# Session 2 Instructor Paper-App (v2): The Garden of Forking Sentences

The Bridge artifact for Session 2 (strand W2): a **probability tree you grow**. Every path from top to tip is one possible sentence; a temperature dial reshapes the whole tree from a narrow trunk (cold) to a wild bush (hot); a "grow a sentence" button takes a weighted random walk — and **the walked branches flash orange on the tree**, so cold visibly re-lights the same trunk while hot scatters flashes across the bush. Batches report their own tally ("This batch at T=0.4: 2 distinct in 10") so the cold/hot contrast doesn't get buried in the running total. Genre: many-paths / generative tree. Fully static. (v1, "The False Mean" blind gallery, is preserved in `../archive/session-02-v1/`. The companion toy `playground/` — Loading the Dice — is unchanged and still linked.)

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies).
- `data/tree.json` — the prompt and a nested branch tree with base probabilities.

## The temperature math (real)

Each fork's sibling probabilities are raised to the power 1/T and renormalized — the exact move a real sampler makes. Verified behavior: at T=0.3 the top branch holds ~70% and the shy tail nearly vanishes; at T=1.6 the top branch drops to ~26% and the tail rises to ~6%. Branch thickness/darkness and the random walk both use these tempered odds.

## Before class: honest data (optional)

The tree's probabilities are illustrative (hand-set to mimic a real distribution's shape), and the method note says so. If you want them real, replace each fork's `p` values with measured next-token probabilities from a model and nothing else changes.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-02/`) — the existing URL now serves v2; the playground keeps working at `session-02/playground/`.

## Using it in the 15-minute Bridge

1. Narrowing move: "You saw temperature widen the dice. Here's what it does to whole sentences."
2. Drag the dial **fully cold (T=0.1)** and press **Grow 10** — the same trunk flashes over and over and the batch line reads "1–2 distinct in 10" (the false mean; verified by simulation, the "same few paths" verdict fires >99% of the time down there). Drag it hot and press **Grow 10** — the flashes scatter, the batch counter jumps, and the strange tips appear ("a museum," "underwater, obviously").
3. Land the point: every wild sentence was already on the tree; heat never adds a branch. Randomness ≠ new ideas.
4. Cliffhanger on the page: where would a genuinely *better* sentence come from?
