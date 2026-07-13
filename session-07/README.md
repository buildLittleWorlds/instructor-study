# Session 7 Instructor Paper-App: The Debug Loop

The Bridge artifact for Session 7: **useful AI development is a loop — observe, describe, request, test, revise.** A real bug in a real (tiny) universe that cannot be fixed by demanding the result: the page gates its own fix panel behind a precise bug description, then offers three "layers you control" — the seed, the rule, and a brush that paints the outcome onto glass the rule never reads. Genre: **repair bench + irreducibility challenge.** Fully self-contained single page (no fetch, no dependencies; works from `file://`).

**This page opens the Session 2 lab's dial #3 — iteration** (unbounded update loop versus fixed-depth forward pass). With Session 3's *neighborhood* (dial #1) and Session 4's *rule* (dial #2), **all three dials from the lab's "Two state arrays, three design dials" module are now open** — the page links back to `../session-02/randomness-lab/#dynamics-title` and says so on-page.

## The two modules

1. **7A — You can't paint the outcome.** A bounded Conway `B3/S23` bench, 46×18 cells: an eastbound lightweight spaceship and a 2×2 block in its flight lane. A live goal chip states the test in public (any live cell in the last three columns within 200 generations of Run). Flow: run and watch the ship and block **mutually annihilate — population 0 at generation 43** → the **describe gate** (three candidate bug reports; only the precise one unlocks the tools) → the **fix panel**: edit the seed (pause-at-0 editor), swap the rule (HighLife kills the ship at **gen 41** — a global change that never touched the local cause; `B2/S23` turns the chip **green at gen 16 for the wrong reason**, which triggers an insight card: *a green check is only as good as the check*), or **paint the outcome** on a translucent overlay the step function never reads — the world moves underneath the paint and the chip stays red. A loop card beside the bench maps the discipline to AI-assisted building: you cannot edit the weights; your layers are the prompt, the context, the code you accept or reject, and the test you run. Landing line: *"Describe the behavior you got, then change one layer you control."*
2. **7B — No shortcut: steps are the price.** Three 9×9 puzzle worlds, one ringed cell each: *will the ringed cell be alive at generation 8?* Reader answers twice, in order — an instant guess (recorded), then again after stepping the real rule there. A "Skip to the answer" button visibly just runs the 8 steps faster ("There is no formula door"). Local scorecard compares guessing with stepping. Then the transformer side, honestly schematic: a fixed stack of layers, one pass per token, easy or hard, then the model must speak — versus the CA's run-as-long-as-it-takes (your 8 steps; the R-pentomino's 1,103 on an unbounded board). Coda: chain-of-thought and reasoning models generate intermediate tokens — buying the network more generations — with the theory cite (Merrill & Sabharwal, ICLR 2024, arXiv:2310.07923). Landing line, big and quiet: *"Thinking tokens are generations."*

## Computed vs. authored (honesty framing)

**Computed live, in the page, as you press:** everything on the bench and in the puzzles — one shared step function (double-buffered `Uint8Array`, bounded dead edges), the goal chip and its verdicts, extinction/arrival generations, the puzzle truths, per-cell flicker counts, and the scorecard. The amber wish layer is stored *outside* the state array and is never read by the step function; that is the trap's entire honesty. The goal detector only reports on runs started from the current seed (Run always restarts from generation 0).

**Authored / schematic:** the scenario (ship coordinates, block placement, goal wording), the three candidate bug descriptions and which one counts as precise, the rule notes, the three puzzle seeds and ring placements, and the layer-stack diagram (no measured activations; illustrative layer count). All authored content sits in one marked `EDIT HERE` block (`CFG`) at the top of the script.

**Verified before written:** every number in the prose was simulated first, typed second:

| Claim | Verified |
|---|---|
| Conway + block: ship and block mutually annihilate | population 0 at **gen 43** (collision visible from ~35) |
| Conway, block removed: ship reaches right edge | **gen 71**, then a 4-cell boundary remnant |
| HighLife + block: ship still flies, still dies at the block | **gen 41** |
| `B2/S23` + block: chip green for the wrong reason | **gen 16** (board floods) |
| World 1 (R-pentomino, ring at 4,6) | **ALIVE** at gen 8 — turns on *at* gen 8 (history `000000001`) |
| World 2 (pi-heptomino, ring at 4,1) | **DEAD** at gen 8 — flickers 4 times on the way (`000011010`) |
| World 3 (loose zigzag, ring at 5,3) | **ALIVE** at gen 8 — flickers 3 times (`000010001`) |

## Re-verifying the numbers

If you touch the seeds, the block, a rule, or a ring placement, resimulate before trusting any sentence with a number in it — never hand-type dynamics. The page's engine and `CFG` sit between `/*ENGINE-START*/…/*ENGINE-END*/` and `/*CFG-START*/…/*CFG-END*/` markers precisely so a scratch script can extract and drive the *exact shipped code* in Node:

```js
// verify.mjs — node verify.mjs
import {readFileSync} from 'fs';
const html = readFileSync('./index.html','utf8');
const cut = (a,b)=>html.slice(html.indexOf(a)+a.length, html.indexOf(b));
const CFG = new Function(cut('/*CFG-START*/','/*CFG-END*/')+'; return CFG;')();
const {makeMasks, stepGrid} = new Function(cut('/*ENGINE-START*/','/*ENGINE-END*/')+'; return {makeMasks,stepGrid};')();
// build a seed, loop stepGrid, and print the generation at which
// population hits 0 / a live cell appears in the last three columns / gen-8 ring state.
```

The accuracy box on-page also reminds readers: prose numbers describe the shipped seed; the chip stays honest under edits because it is computed, prose can't be.

## Using it in the 15-minute Bridge

1. **Run the bug.** Press Run cold and say nothing. Ship meets block, both vanish, chip goes red at 43.
2. **Describe-gate with the room.** Try "The page is broken" aloud, let it bounce, and let the room work out *why* it bounced before anyone touches the precise chip. Name the lesson: a fix request starts with the behavior, stated so a stranger could find it.
3. **Remove the block live.** Seed editor on, four clicks, Run — green at 71. Say the loop out loud while it flies: observe, describe, change one layer, rerun.
4. **The B2 moment.** Restore the original seed, swap to `B2/S23`, Run. The chip goes green at 16 and the insight card lands: *the test passed and the behavior is wrong.* Tie it to Session 6 and to AI-written fixes accepted on green checks. (Optional dark-arts encore: the paint brush, and the caption about glass.)
5. **Puzzles.** Run World 2 as a room vote — instant guesses first, hands up, then step it and watch the ringed cell flicker on-off-on-off. Let the scorecard do the arithmetic.
6. **Land it:** "Thinking tokens are generations." Then the dial card: all three dials from Session 2 are now open. Cliffhanger → the paper layer (Session 8): the fix works and I can say why; next, the page has to *say it* to a stranger.

## Before class

- Reload the page — it carries no state (nothing is collected, exported, or submitted; there is nothing to clear, but a reload heals any demo leftovers).
- Rehearse the four seed-editor clicks that remove the block; fumbling them softens the beat.
- If you rearrange the bench or the puzzle seeds in `CFG`, rerun the verification recipe and update the numbers in the on-page prose *and* this README's table.
- Optional: preload the Session 2 lab in a second tab so the dial-card link lands somewhere warm.

## Preview & deploy

Open `index.html` directly — `file://` is fine; the page fetches nothing. Deploy by pushing `session-07/`; the page is one file and the existing URL pattern serves it.
