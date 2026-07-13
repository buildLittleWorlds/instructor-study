# Session 4 Instructor Paper-App: The Slop Detector

An instructor-only **living dashboard** that makes one learned behavior visible: repeated stock language across unrelated prompts. The reader predicts, inspects the computed comparison, and tests phrases against the shipped sample. Students are not asked to reproduce the dashboard or contribute data.

**v5 (2026-07-12) opens the Session 2 lab's dial #2 — the rule — and adds three modules** that put the session's counter-model on the page itself (previously it lived only in this README's talk track):

1. **The Rule Forge: search that ends in a sentence.** A real 32×22 variant-rule Life bench (same R-pentomino seed every run; only the rule changes) with toggleable birth/survival bits, six presets, and Conway's three desiderata as live meters computed from a silent 200-step audit: doesn't fizzle, doesn't blow up, stays quietly alive. B2/S23 floods, B3/S3 dies at step 3, HighLife kills the R-pentomino at step 9, B34/S34 settles into a tiny loop — and the reader feels how few rules light all three lamps. Two insight cards land the split (*search that ends in a sentence versus search that ends in a hundred billion numbers*) and the learnability facet (*a rule table has no slope* — Springer & Kenyon).
2. **Coarse engine, fine skin.** The From Cells to Pixels coda as a manipulable: one 20×20 pulsar state array rendered twice (hard cells vs. a soft hand-written skin) with a reveal-the-grid toggle. Honest note: the real paper's skin is learned; ours is a brush — the layer separation is the lesson. Links to cells2pixels.github.io, the Distill ancestor, and the anthology card.
3. **Be the reward model.** Six A/B preference rounds over authored answer pairs with authored ingredient tags (stock phrasing, warmth, hedging, list shape, length, concrete detail, risk, plainness). The page tallies the reader's actual clicks (chosen minus rejected per ingredient), assembles "the answer your ratings would tune toward" from their top-rewarded ingredients, and hands down one of three verdicts (false-mean lean / swerve rater / split). Closes the loop with the dashboard above: nobody wrote the slop — it was voted into existence.

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies). The v5 modules are self-contained (no data dependency); the reward-model pairs live in an `EDIT HERE` block in the second script.
- `data/slop.json` — 8 AI answers + 8 human notes to the same 8 unrelated prompts, plus the stock-phrase list.

## The measure is real (computed, not hand-set)

Sameness = average pairwise Jaccard overlap of content words within a set (stop-words removed), computed in the browser from the shipped texts. Verified on the current sample: **AI ≈ 12.3% self-similarity vs humans ≈ 0.25% — about 49× more alike**, and every stock phrase is AI-heavy / human-zero. Swap in your own collected texts and every number and bar updates automatically.

**Control bar (added 2026-07-05):** the page now also computes the **AI ↔ Human cross overlap (0.8%)** and discloses the length gap (≈22 vs ≈13 content words) in the method — the pre-emptive answer to "aren't the AI ones just longer?" The AI answers resemble each other ~15× more than they resemble a human answering the same prompt.

**Hunt your own tell:** a live phrase-tester under the chart lets a reader type any phrase and see AI-versus-human counts with text highlighting. Nothing is collected, copied, or submitted.

## Honesty framing

The texts are illustrative (the AI answers written to show real tells; the human notes deliberately idiosyncratic), but the numbers on the page are honest measurements *of this sample* — the method note and limitation say exactly that, and flag that shared-vocabulary is a surface proxy (a deeper version compares meaning with embeddings — the natural Tier-1 upgrade, "The Sameness Atlas, Live," in the tech backlog).

## Before class (optional instructor extension)

An instructor may replace the illustrative sample with a separately prepared, ethically sourced comparison. Keep that preparation outside the student workflow and update the page's data note honestly.

> **v4 boundary:** real-data replacement is optional instructor work. Do not turn it into student data collection.

## Cellular automata counter-model (5 minutes)

Contrast three sources of rules: Conway's `B3/S23` was written by a person (searched by hand for two years against desiderata — the Rule Forge makes this playable); Growing Neural Cellular Automata share one local neural update rule learned through a target and training experience; language-model pretraining and RLHF also shape learned behavior through objectives and examples, though the architecture and task are different.

Use the Growing/Persistent/Regenerating distinction: growth-only systems may decay or explode; persistence training encourages stability; damage during training strengthens regeneration. (Session 6's page now runs the three-tests version of this on a live glider gun.) Land: **If nobody wrote the final behavior line by line, what shaped it?**

**v5 accuracy notes:** the Forge's desiderata thresholds are instructor-authored (the method note says so on the page); the reward-model pairs and tags are authored while the tally of reader clicks is real; the "fine skin" is a hand-written renderer, not a learned decoder — the separation of world from picture is the claim, not parity with the paper.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-04/`). Link it on the landing page and the Six Ideas card #4.

## Using it in the 15-minute Bridge

1. Open the Rule Forge and let the room try to beat Conway: two or three rule swaps, meters live. Land the split — a sentence versus a hundred billion numbers.
2. Read three AI answers to unrelated prompts aloud and let the room hear the sameness.
3. Reveal the existing bars and click one stock-phrase tell.
4. Run **Be the reward model** with the room voting each round aloud (one volunteer clicks). The verdict card answers the Interpretation's question — whose preferences? — with the room's own.
5. If there's a spare minute, the pulsar's fine-skin toggle is the cells2pixels coda in twenty seconds.
6. Release students to make one behavior in their own app more intentional. Do not collect class phrase rows or require a dashboard.
