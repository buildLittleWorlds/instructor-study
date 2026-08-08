# Session 10 Instructor Paper-App: The Work Is the Choosing

Session 10 is the revision-archaeology and project-lock encounter for **What Makes Something One Thing?** It reconstructs the public path through Sessions 8 and 9, identifies the in-class turn from Game of Life sonification toward John Cage and prepared chance, and records **Who Composes the Glider?** (`../session-09/revised-4/`) as the now-locked instructor project.

This replaces the earlier advance-release Session 10 about sentence embeddings. That page remains recoverable in repository history, but it no longer represents the project produced by the actual revision chain.

## Public artifact

- `index.html` — a self-contained HTML/CSS/JavaScript paper-app.
- Stable route: `/session-10/`
- Current project: Session 9 V5, **Who Composes the Glider?**
- Reader interaction: inspect one consequential decision, give it a provisional disposition, name the evidence, and copy a decision receipt.
- Storage boundary: the reader's selection and note remain in memory and disappear on refresh.

## Revision archaeology

The page keeps visible links to every relevant public artifact:

1. Session 7 begins with persistence through changing cells.
2. Session 8 moves from an image-led page to music, then to a sound-first bench, and finally to a listener path and source-backed paper.
3. Session 9 V1 accumulates the revision chain.
4. V2 contracts to one glider, one motif bench, and one bounded disagreement.
5. V3 expands selectively around sequential generation.
6. V4 makes the Game of Life state generate the score directly (`6af4b32`, 2026-08-04 8:17 p.m. CDT).
7. Twenty-six minutes later, the first Cage/Life composition version enters the record (`f95fa4e`, 8:43 p.m. CDT).
8. The next-morning revision becomes the multitrack studio now published as V5 (`921db1e`).

The commit sequence verifies repository state and timing. It does **not** prove what anyone said in class, when the idea was first conceived, or that the commit moment and the classroom moment were identical. The page labels the class-time interpretation as Daniel's account rather than participant evidence.

## Decision-record encounter

The reader can inspect seven connected decisions: medium, sound-first interaction, map-first reader path, subtraction, sonification, Cage/prepared chance, and the multitrack studio. Each record separates:

- where the decision entered the record;
- what Codex contributed;
- what Daniel judged and remains responsible for;
- what was checked and what happened;
- what was rejected or bounded;
- the current status.

The reader then marks the decision **Keep**, **Polish**, or **Reopen**, writes an evidence-based reason, and copies a plain-text receipt. This exercise is diagnostic only. It does not overturn the instructor lock: V5 is the project, Session 11 gives it a brief bounded polish pass, and in Session 12 the page remains available while students present their own work.

## Evidence boundary

The page distinguishes:

- **Computed:** Conway's B3/S23 transitions, direct score mappings, deterministic seed replay, rendered audio, and export files in V4/V5.
- **Designed:** pitch mappings, tempo, instruments, filters, stereo placement, periodic modulation, voice arrangement, reader order, and interface framing.
- **Source-proposed:** the bounded interpretations drawn from Cage, Brown, Xenakis, Lewis, and Oliveros.
- **Open:** whether Life composes, who owns the emergent musical identity, and whether replayability changes the work's status.

The chance process is locally prepared and seed-replayable. It is not described as an I Ching simulation, a Cage style generator, proof of Cage's claims, or autonomous composition.

## Verification

From the browser console:

```js
S10.selftest()
```

Expected: `pass: true`.

Then verify manually:

1. all Session 8 and Session 9 version links open the named public artifacts;
2. selecting each decision updates all receipt fields;
3. Keep, Polish, and Reopen update the provisional disposition;
4. writing a reason updates the copied receipt without network or file writes;
5. the actual project lock remains visible regardless of the provisional reader choice;
6. the computed, designed, source-proposed, and open boundaries remain distinct;
7. refresh clears the reader's note and returns to the first decision;
8. the page loads without external scripts, audio, video, or model downloads.

## Handoff

- **Session 11:** show no more than two small, verified presentation-serving changes, then give most of the meeting to student finishing and rehearsal.
- **Session 12:** no new instructor build or presentation; the page remains available while all class time belongs to student showcases.

Neither later session is represented here as already built or tested.
