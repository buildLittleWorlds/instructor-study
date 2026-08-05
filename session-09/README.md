# Session 9 Instructor Paper-App

Session 9 now has five public versions. V1 accumulates, V2 deliberately subtracts, V3 expands one
connection that became visible only after the subtraction, V4 turns the Life computation itself
into music, and V5 makes the instrument usable for multitrack composition and export.

## Current revision

- `revised-4/index.html` — **Who Composes the Glider?**, Session 9 V5.
- Stable route: `/session-09/revised-4/`.
- Preserves V4's direct row-to-pitch instrument as a live seed editor and control condition.
- Arranges up to six independent Life voices with editable entries, generation lengths, tempo,
  mapping, pitch process, register, scale, oscillator, transpose, level, pan, and stereo width.
- Includes a reproducible chance-prepared voice generator and a three-voice demonstration score.
- Previews the complete arrangement in real time and renders a 44.1 kHz, 16-bit stereo WAV locally.
- Exports a ZIP score package containing the WAV, reusable JSON project, and human-readable Markdown
  ledger with every starting cell and musical decision; JSON projects can be reopened in the app.
- Adds an original source-linked paper on authorship, rules, contingency, performance, and listening
  through John Cage, Earle Brown, Iannis Xenakis, George E. Lewis, and Pauline Oliveros.
- States the limit directly: the system does not imitate those musicians or reproduce Cage's I Ching
  practice, Brown's performers, Xenakis's stochastic masses, Lewis's improvising software, or the
  embodied and social practice of Deep Listening.

Run `S9V5.selftest()` in the browser console. Expected: `pass: true`.

## Previous structural revision

- `revised-3/index.html` — **Hear the Pattern Travel**, Session 9 V4.
- Stable route: `/session-09/revised-3/`.
- Replaces separate Life and music cases with one cellular instrument: every computed generation
  becomes one synthesized musical event.
- Maps cell row to minor-pentatonic pitch, column to stereo position, birth to a bright upper
  attack, and death to a low pulse.
- Offers glider, blinker, pulsar, and R-pentomino seeds plus a click-to-draw custom board.
- Lets the reader switch between absolute board coordinates and translation-invariant pattern
  coordinates, then replay the same recent history under either mapping.
- Draws the accumulating score beside the live board and keeps the mapping choices inspectable.
- Labels the sonification as authored rather than treating the generated music as inherent in Life.

The V4 boundary distinguishes the B3/S23 states actually computed, the musical mapping designed for
the encounter, and the listener's still-open judgment about continuity.

Run `S9V4.selftest()` in the browser console. Expected: `pass: true`.

## Selective expansion revision

- `revised-2/index.html` — **Nothing Moves. Something Travels.**, Session 9 V3.
- Stable route: `/session-09/revised-2/`.
- Adds a cumulative participation trail so movement can be distinguished from repeated local
  generation.
- Lets the reader copy only the current five-cell configuration to a fresh board, demonstrating
  that the pattern can continue without carrying its displayed history.
- Lets the reader damage that present constraint and inspect how continuation changes.
- Maps present context, one-step production, and feedback onto Barenholtz's autoregressive proposal.
- Explicitly separates that useful analogy from his stronger autogeneration claim: Conway's rule is
  fixed and externally supplied, not learned from the board's statistical structure.
- Retains one compact original music encounter to move from exact continuation toward altered
  context and degraded-cue generation.

The V3 claim boundary remains explicit: the glider makes persistence without transport visible,
but it does not show that human memory uses Conway-like rules or that no memory traces are stored.

Run `S9V3.selftest()` in the browser console. Expected: `pass: true`.

## Contraction revision

- `revised/index.html` — **Generated Again**, Session 9 V2.
- Stable route: `/session-09/revised/`.
- Keeps only one live glider, one compact version of **Case 2 · musical figure — One motif,
  several wholes**, and a short theoretical disagreement.
- Connects Daniel Dennett's real-pattern account to Elan Barenholtz's proposed autoregressive
  account of memory and language.
- Uses Spens and Burgess's peer-reviewed generative-memory model as a counterpressure: generative
  reconstruction need not imply that nothing is encoded or stored.
- Labels Barenholtz's July 2026 contextual-persistence paper as a preprint and preserves its own
  limitation: it characterizes linguistic products, not the cognitive process that produced them.

The V2 claim boundary is intentionally small:

1. the app directly computes the glider and synthesizes separable musical layers;
2. the sources propose different accounts of patterns, beliefs, language, and memory;
3. the app does not establish how a human brain stores or generates a memory.

Run `S9V2.selftest()` in the browser console. Expected: `pass: true`.

## Earlier accumulated version

This is **Version 3 of 5** of **What Makes Something One Thing?** It continues the strongest
Session 8 music revision rather than replacing it with a new medium.

It is an instructor demonstration, not the student assignment. Students conduct one bounded
sound-off encounter on their own paper-app, separate observation from interpretation, revise one
part of the reader path, and add one small source-connected analytical passage.

## Public artifact

- `index.html` — a self-contained HTML/CSS/JavaScript paper-app.
- Stable route: `/session-09/`.
- Carried forward: the verified Game of Life case, all synthesized music interactions, the
  abstract, four original analytical sections, six-source shelf, Boundary Notebook, and development record
  from `session-08/revised-3/`.
- New in Session 9: a three-entrance reader path, an explicit sound-off question, and an experimental
  mechanistic-interpretability extension with five additional primary sources, including Anthropic's
  July 2026 global-workspace result.

## Continuity from Session 8

The active chain is:

1. original pond-image version;
2. first musical revision — replace a still case with sound in time;
3. sound-first revision — make every musical action answer in sound;
4. map-first revision — let the listener mark joints before section names arrive;
5. Session 9 reader-path revision — help a first-time reader reach the encounter without requiring
   a tour.

Every earlier version remains public. Session 9 does not hide the abandoned image or the intermediate
music interfaces.

## Revision logic

The Session 9 change begins with an **instructor audit, not first-time-reader data**:

- **Observation:** the completed page now contains several plausible beginnings: abstract,
  revision history, Life case, music bench, experiments, paper sections, sources, and ledger.
- **Possible interpretation:** stronger analysis can make the entrance harder to see when the
  interaction and paper do not visibly route into one another.
- **Provisional revision:** recommend `hear → map → compare → read`, while preserving separate
  entrances for readers who want the abstract or development record first.
- **Open check:** give the page to a first-time reader without coaching and record where the reader
  begins before deciding whether the new entrance works.

No participant quotation or behavior is invented.

## Paper-analysis model

The page models a source-to-app loop students can adapt:

1. name one idea from a credible source;
2. locate where the app lets a reader encounter or examine that idea;
3. state a modest interpretation;
4. name what the app does not establish;
5. revise the interaction or paper because of the connection.

The eleven sources remain because each supports or changes a specific claim. The five-source
interpretability shelf extends the older Gestalt question through polysemanticity, superposition,
sparse-autoencoder feature dictionaries, feature splitting, circuit tracing, and the J-space result.
It explicitly does not claim that musical listening and neural-network computation share a mechanism,
or that the J-space proves consciousness or describes every language model.

The interpretability-inspired paper experiment asks a reader to treat musical labels as a
provisional feature dictionary: decompose, probe across contexts, intervene, and split an overloaded
label when a finer resolution explains more. The page labels this as analysis of the app, not as
mechanistic interpretability performed on a model.

## Verification

From the browser console:

```js
S9.selftest()
```

Expected: `pass: true`, including `pathOk: true`.

Then verify manually:

1. the three entrance cards reach `Mark the joints`, the abstract, and the development record;
2. `Mark the joints` works with mouse and keyboard;
3. the Life fixture, music bench, two sound experiments, and Boundary Notebook still work;
4. every inline citation resolves to one of the eleven source cards, and every source is cited;
5. no audio or video file is embedded and sound starts only after a reader action;
6. refresh clears reader marks and notebook entries;
7. the instructor-audit language is not presented as a completed reader study;
8. the interpretability section separates direct app evidence, source-supported research claims,
   analogy, and open questions.

## Live teaching use

Use the original page to show how reasonable additions can accumulate. Then open V2 and ask what
became easier to encounter after the entrances, labs, notebook, development ledger, and large source
shelf were removed. The subtraction is not presented as proof that shorter is always better; it is
the next test in the revision trajectory.
