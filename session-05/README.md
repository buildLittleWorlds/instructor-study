# Session 5 Instructor Paper-App: Question Zero (the hinge)

The Bridge artifact for Session 5 (strand W5) — the hinge where the whole strand's research question gets locked. Genre: app-first pilot / **question forge** — the reader practices the research-method skill by doing it. This is the fifth deliberately-different form: map (S1), tree (S2), spotlight (S3), dashboard (S4), forge (S5). Fully static.

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies).
- `data/questions.json` — seven candidate research questions with kill-test answers and verdicts (one survivor), plus the three lighthouse "doors" (default / random / directed) and the swerve definitions.

## What it does (two moves)

1. **The kill-tests (Part 1).** Seven candidate questions; the reader files each as Testable / Too big / Just an opinion / Needs a yardstick, then sees the instructor's verdict and reasoning via three kill-tests (can you measure it? get the data? be surprised either way?). Scores the match. This teaches the session's real skill: narrowing a surprise into a testable question.
2. **Three doors (Part 2).** The surviving question becomes the locked study, which needs three versions of one answer. Three unlabeled first lines for a lighthouse prompt — DEFAULT (false mean), RANDOM (random swerve), DIRECTED (true swerve) — which the reader matches, then reveals. This completes the course vocabulary and states the both-ways payoff.
3. **The blind star + pilot row (added 2026-07-05).** Before the reveal the reader must also ★ the line they'd actually read on — a blind preference among the three conditions, i.e. the study's real dependent variable. After the reveal the payoff names their pick ("blind, you starred the true swerve") and **Copy my pilot row (JSON)** exports {blind preference, matches, score} for the scratchpad. This is the strand's W5 data moment ("class guesses which is which; 5 pilot rows") built into the page — run it with the room and you leave class with a real pilot.

## The research question this locks (for the whole strand)

*Do readers rate a deliberate, purposeful break (DIRECTED) higher than the model's default answer (DEFAULT) and a purely random one (RANDOM), judged blind on trained criteria?* Both outcomes are publishable — if DIRECTED wins, judgment beats averageness and noise; if not, that's a real surprise about how hard excellence is to commission. Weeks 6–8 build the instrument, run it, and analyze it.

## Honesty

The three lighthouse lines are a real pilot: the model produced them under three different instructions (default prompt / high temperature / "break one expectation on purpose"). The candidate questions are genuine — several are ones the instructor actually considered and abandoned. The verdicts are the instructor's reasoning, laid out to practice against, and the note says so.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-05/`). Link on the landing page. (No Six Ideas card — Session 5 teaches method, not a new mechanism.)

## Using it in the 15-minute Bridge

1. Narrowing move: "For four weeks I collected surprises. Watch me kill most of them and keep one."
2. Run two or three candidates live — take the class's verdict before revealing yours; the "Is AI art good?" one always sparks argument (that's the point: it's an opinion).
3. Reveal the survivor — the locked three-condition study — then the three doors: everyone matches DEFAULT/RANDOM/DIRECTED **and stars the line they'd read on** (blind) before anyone reveals; you name the false mean / random swerve / true swerve. Data moment: each student clicks **Copy my pilot row** and pastes it into the scratchpad — tally the blind stars aloud: that's the study's first pilot, collected in ninety seconds.
4. Read the both-ways payoff aloud. Cliffhanger on the page: I can't just ask "which is best?" — next week you become my expert panel (→ Week 6 rubric & agreement).

**Studio note:** Week 5 is the students' own hinge too — they lock their own questions and collect 5 pilot rows. This paper models exactly that move.
