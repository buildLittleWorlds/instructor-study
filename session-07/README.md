# Session 7 Instructor Paper-App: One Pattern, New Cells

This is **Version 1 of 5** of the cumulative instructor example **What Makes Something One Thing?**

It is an instructor demonstration, not the student assignment. Students keep developing their own paper-apps through the Session 7 loop:

> describe the check → run it → locate the layer → change one thing → rerun the check

The example expands “debugging” beyond code. A page can compute correctly while its interaction fails to expose the intended question, or while its prose claims more than the check demonstrates.

## Public artifact

- `index.html` — one self-contained paper-app with no build step, persistence, account, upload, or model download.
- Stable route: `/session-07/`
- Title: **One Pattern, New Cells**
- Umbrella project: **What Makes Something One Thing?**

## The page’s three layers

1. **Today’s course practice** translates the existing Session 7 testing loop into code, interaction, and claim layers.
2. **Instructor example** lets the reader mark a glider’s cells, advance one generation, and inspect whether a coordinate-based boundary follows the moving pattern.
3. **Development record** separates the observed result from Daniel’s interpretation, decision, rejection, and current claim.

The reader action that later versions will retain is:

> select a part → assign it to a whole → inspect overlap or change → state and revise the rule

## Computed versus authored

### Computed

- Conway’s B3/S23 transition rule.
- The five live cells at each generation.
- Born, survived, and departed counts between adjacent generations.
- Whether the reader’s marked coordinates are occupied after the pattern advances.
- Six deterministic self-checks exposed as `window.S7.selftest()`.

### Authored

- The identity question.
- The four possible identity criteria.
- The paper-layer interpretation and limitation.
- The development-ledger judgments.

The self-check verifies the Life computation. It does **not** verify the philosophical interpretation.

## Verified Life fixture

Coordinates are zero-indexed in the source. The shipped fixture is:

```text
generation 0: (2,1) (3,2) (1,3) (2,3) (3,3)
generation 1: (1,2) (3,2) (2,3) (3,3) (2,4)
generation 2: (3,2) (1,3) (3,3) (2,4) (3,4)
generation 3: (2,2) (3,3) (4,3) (2,4) (3,4)
generation 4: (3,2) (4,3) (2,4) (3,4) (4,4)
```

Generation 4 is generation 0 translated by `(1,1)`, with the original orientation restored.

From generation 0 to generation 1:

- 3 positions survive;
- 2 positions are born;
- 2 positions depart.

### Re-verification

Open the browser console on the page and run:

```js
S7.selftest()
```

Expected:

```text
pass: true
six case results, each pass: true
```

Then perform the visible behavioral check:

1. Select **Mark all live cells** at generation 0.
2. Select **Advance one generation**.
3. Select **Compare changes**.
4. Confirm that the page reports 3 survived, 2 born, and 2 departed.
5. Confirm that three marked positions remain alive, two marked positions are empty, and two new live cells are unmarked.
6. Tab to a cell, activate it with Space or Enter, and confirm focus remains on that same cell after its marked state changes.

## 15-minute bridge

1. **Predict (2 minutes):** “If I mark the five cells, will my boundary still contain the glider after one generation?”
2. **Run (3 minutes):** mark all live cells, advance, and compare.
3. **Separate the checks (3 minutes):**
   - What did the engine check establish?
   - What did the identity interaction make visible?
   - What remains a judgment?
4. **Connect to student work (4 minutes):** ask each student to name the layer most likely to need revision in their own page: code, interaction, labels, emphasis, idea, or claim.
5. **Rerun (3 minutes):** students apply one bounded change and repeat the same check when possible.

## Before class

- Serve the repository over HTTP and open `/session-07/`.
- Run `S7.selftest()` and confirm all six cases pass.
- Exercise every grid and form control with mouse and keyboard.
- Check mobile width around 390 px and desktop width around 1280 px.
- Refresh and confirm no selections or writing persist.
- Follow the advance-release link and confirm Session 8 labels its motivating encounter as simulated teaching evidence rather than participant data.

## Development record discipline

This version records only evidence that already exists:

- the deterministic Life fixture passes;
- a fixed-coordinate boundary fails to include two newly born glider cells;
- the app was deliberately changed from a repair simulation into a boundary-making interaction.

The advance-release Sessions 8–10 may use invented but plausible teaching scenarios to demonstrate how revision could proceed before a class encounter occurs. Every such scenario must be visibly labeled as simulated, contain no fabricated participant quotation, and remain separate from actual technical results.

## Next-version contract

Session 8 is **One Part, Several Wholes**, using an original SVG image. Its simulated encounter must motivate:

- one interaction revision;
- one written revision;
- one feature deliberately rejected or postponed;
- one claim classified as directly shown, source-supported, or still open.

If a real encounter later occurs, record it as a separate dated observation rather than rewriting the simulation as if it had predicted the participant.

## Local preview

From the Instructor Study repository root:

```text
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/session-07/
```

GitHub Pages serves the repository root. Local revision and verification do not authorize commit, push, or deployment.
