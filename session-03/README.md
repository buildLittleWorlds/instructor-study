# Session 3 Instructor Paper-App (v3): Attention Spotlight

The Bridge artifact for Session 3 (strand W3): **guess what a word needs, then watch what it pays attention to light up.** Clicking an underlined word enters *guess mode* — the reader picks the 2–3 neighbors they think settle its meaning, then reveals, keeps their picks ringed over the glowing answer, and gets a score against the three strongest links ("You matched 2 of 3"). The same word "bank" glows river/current in one sentence and savings/money in another — attention building meaning from neighbors, made visible. Genre: heatmap inspection. Fully static. (v1, "Fitted or Veneer?", is preserved in `../archive/session-03-v1/`.)

**v3 (2026-07-12) opens the Session 2 lab's dial #1** — neighborhood — and adds three modules that carry the CA↔transformer thread onto this page:

1. **One step or many: the fixed ring vs. the spotlight.** The active sentence becomes a one-dimensional Life board: a strict ±1 neighbor rule spreads influence one position per step (the Life lab's light cone, pointed at text), with a per-cue readout of how many steps each glowing clue would take — versus **"Attention: one step,"** which lights every cue at once. Beside it, the static 3×3 fixed ring: eight neighbors, always the same eight, each counting exactly 1 — *fixed, local, binary* versus *chosen, global, graded*.
2. **The closeness engine: what the spotlight is made of.** For the active focus word, every other word in the sentence gets a **real cosine similarity** (blue bar) measured with the same model and settings as Session 1's Map of Meaning — plus a live softmax that turns similarities into attention-style weights (sharpness slider included, honestly labeled as a demo of the softmax stage, not sampling temperature). Narrow the context window and outside words drop to **exactly zero weight** however similar they are — the hard half of dial #1. Two computed insight cards do the interpreting:
   - **The torn word:** out of context, "bank" leans water (river: 0.500) and money (savings: 0.514) in near-perfect balance — the isolated vector holds both meanings; settling is attention's job.
   - **Closeness is not attention:** for "sharp," my strongest cue "reply" scores only 0.249 raw closeness (below even "a" at 0.399). The sharp–reply link is built *in context* by learned attention — raw closeness is the starting material, not the verdict.
3. **Nudge it: swap one word.** Post-reveal buttons change exactly one word and re-settle the reading — three swaps, three lessons: a **flip** (sharp: reply→knife — the meaning flips to a blade), a **tug-of-war** (savings: savings→river — the cues now disagree, and a weighted reading can report the tie a binary neighborhood can't), and a **held line** (spring: mattress→sofa — remaining cues hold the meaning; weighted evidence degrades gracefully).

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies).
- `data/sentences.json` — five sentences with authored attends-maps, meaning labels, captions, two compare pairs (two "banks," two "springs"), **three authored swaps**, the torn-word wordlists, and `modelSims`: real cosine similarities (fixed at author time, dated in the file).
- `attention-is-all-you-need/index.html` — a standalone, dependency-free guided tour of Vaswani et al.'s 2017 paper. It covers the sequential-computation problem, a staged query/key/value calculation, multi-head attention, the complete encoder–decoder architecture, and the paper's reported evidence.

## Guided paper tour

The Attention Spotlight page links to `attention-is-all-you-need/` after its three interactive modules. The tour links outward to the updated [arXiv record](https://arxiv.org/abs/1706.03762), which matches the attached v7 paper used for verification, and identifies the [NeurIPS 2017 publication record](https://proceedings.neurips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html).

The tour keeps three evidence types visibly separate:

1. Equations, architecture facts, examples, and benchmark results attributed to the paper.
2. Authored toy scores computed live to make scaled dot-product attention inspectable.
3. Authored SVG head diagrams inspired by Figures 3–5, explicitly not presented as extracted model weights or complete explanations of model behavior.

The source PDF is not stored in this repository. The public route stays static and self-contained; only the two outbound source links require a network connection.

## Honesty framing (important — three kinds of numbers)

1. The **glowing links** are an illustrative, hand-authored attention map — a true teaching diagram of which neighbors a model must connect to disambiguate the word, not weights extracted from a model's internals.
2. The **blue closeness bars** are *real measurements* — cosine similarity of mean-pooled, normalized single-word embeddings from `Xenova/all-MiniLM-L6-v2` (identical model/settings to Session 1), computed 2026-07-12 — but they measure **context-free closeness, not attention**: real attention computes similarity through learned query/key projections, in context, across many heads and layers.
3. The **softmax weights** are computed live in the page from those real cosines; the sharpness slider demonstrates the softmax stage and is explicitly *not* Session 2's sampling temperature.

The method note and accuracy box say all of this on the page. If you change words or add sentences, regenerate `modelSims` (below) — never hand-type similarity values.

## Regenerating `modelSims`

Node 18+, then:

```bash
mkdir sims && cd sims && npm init -y && npm install @huggingface/transformers@4.2.0
```

```js
// sims.mjs — cosine of mean-pooled, normalized single-word embeddings
import { pipeline } from '@huggingface/transformers';
const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
const emb = async w => Array.from((await extractor(w, { pooling:'mean', normalize:true })).data);
const dot = (a,b) => a.reduce((s,x,i) => s+x*b[i], 0);
// for each focus word f and lowercased context word w (including swap words):
// sims[f][w] = Math.round(dot(await emb(f), await emb(w)) * 1000) / 1000;
```

Every non-punctuation token of every sentence (and every swap word) must have an entry under its sentence's focus word — the page looks similarities up by lowercased word. Update the `computed` date in `modelSims` when you regenerate.

## Cellular automata counter-model (5 minutes)

Before Attention Spotlight, return briefly to Game of Life: a Conway cell can inspect only its eight immediate neighbors; a neural cellular automaton uses a local `3×3` neighborhood plus hidden state; local influence spreads over repeated steps. Contrast that with a transformer token connecting to distant tokens in its allowed context through attention. **v3 makes this contrast manipulable on the page** — the fixed-ring module is the 1-D version of the Life lab's light-cone tool, and the "What to notice" section links back to the lab's Three Dials module (`../session-02/randomness-lab/#dynamics-title`).

Land: **How does what a unit can see change what the whole system can do?** Do not call CA neighbors "attention"; local propagation versus long-distance connection is the contrast.

## Before class

Add or swap sentences freely in `data/sentences.json` — keep at least one compare pair for the "same word, two minds" reveal, which is the paper's punch. If you touch any words, rerun the sims script above. The three swap buttons are the new crowd moment: run the **sharp → knife** flip live and let the room gasp before you name the lesson.

## Preview & deploy

`python3 -m http.server 8000` from this folder (the main app's `fetch()` needs HTTP). Open `/` for Attention Spotlight or `/attention-is-all-you-need/` for the guided paper tour. Deploy by pushing (`session-03/`) — both routes are served by the existing GitHub Pages site.

## Using it in the 15-minute Bridge

1. Use the cellular-automata contrast above (or run the fixed-ring module's step counter live — count aloud with the clicks).
2. Click "bank" in the river sentence and let the room guess two useful context words before revealing.
3. Press **Spotlight the two banks** and compare the different neighborhoods of meaning; then open the closeness engine and show the torn word: out of context the model holds *both* banks at once.
4. **Nudge it:** swap reply→knife. One word, whole reading flips. Ask: what is the smallest change *your* app responds to?
5. Land: context reshapes meaning — and weighting, not counting, is what does the reshaping. Cliffhanger: nobody typed these weights; who wrote the rule? (→ Session 4.) Release students to free-choice builds; they do not need to submit scores or build attention cards.
