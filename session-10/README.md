# Session 10 Instructor Paper-App: The Second Opinion

The Bridge artifact for Session 10 (strand W10): a **judge-vs-panel duel** — an AI judge scores the study's own 24 rows with the Session 6 rubric, and the page sets its verdicts against the human panel's, criterion by criterion. Plus the **authorship-note demo**: the same facts written as a process confession and as documented judgment, toggleable — and the judgment version IS this paper's real authorship note. Genre: instrument-testing duel. Tenth deliberately-different form: map, tree, spotlight, dashboard, forge, calibration lab, corpus browser, many-paths reveal, 2×2 sorter, **judge duel (S10)**. Fully static, no dependencies. **This is Six Ideas mechanism #6 (AI-as-judge + authorship) — card 6 unlocks with this page.**

## Files

- `index.html` — the paper-app (vanilla JS; crown-your-judge prediction gates the duel; side-with-someone is blind).
- `data/judge.json` — the AI judge's per-row rubric scores. **Illustrative until the real run** (its note says so and the page quotes it): authored to the documented shape of AI-as-judge behavior — correct winner, compressed lead, polish bonus.
- Panel scores are **fetched unchanged from `../session-07/data/dataset.json`** (fourth page running on the same evidence file — the chain is the method).

## The result (computed in-browser, injected into the prose)

- Both judges crown DIRECTED — but the judge cuts the panel's 7.4-point lead to **1.9** and promotes DEFAULT to a close second (panel 11.6/11.5/19.0 → judge 14.9/10.4/16.8).
- Agreement (share of rows within ±1): **fit 100% · form 100% · surprise 88% · return 58%**.
- The polish bonus: on *return*, the judge scores DEFAULT rows **+2.1** over the humans.
- Top-3 splits (computed dynamically, drive the blind side-with-someone duel): r01 default lighthouse (+5, polish promoted), r20 random piano tuner (−5, the almost-crowned spike dismissed), r03 directed lighthouse (−4, the earned payoff unfelt).
- The sentence the page earns: *the machine can verify craft; it cannot yet feel whether a break earned its keep.*

## Teaching moves built in

1. **Crown your judge** — predict the machine's winner before any bars render (prediction-before-reveal, third week running).
2. **Blind sidings** — the three hardest splits shown with anonymized verdicts (A/B alternates which is the machine); reader sides first, learns identities after; copy-my-sidings reuses the export trick as the class data moment.
3. **The two notes** — confession vs judgment, same facts, toggle; the judgment version doubles as this paper's actual authorship note ("write the second kind").
4. **Symmetric humility** — the limitation states that when judge and panel split, nothing proves the humans right.

## Honesty

Judge scores are authored-illustrative, labeled in `judge.json` and quoted on the page. Panel rows inherit Session 7's own illustrative label. All statistics computed in-browser from the two files.

## Before class (stronger)

1. Do the real judge run through the instructor tool: per row, one model, temperature 0, rows shuffled, the four rubric definitions in the prompt, no condition labels. Paste scores into `judge.json`, drop the illustrative note.
2. Re-read the interpretation after: the compressed-lead + polish-bonus story must match what the real run shows (the numbers update themselves; the three named splits might not).
3. Update the Six Ideas card 6 draft in Classroom with this page's link before publishing it.

## Preview & deploy

Serve the **repo root** (the page fetches `../session-07/`): `python3 -m http.server 8000` from `instructor-study/`, then open `/session-10/`. Deploy by pushing (`session-10/`).

## Using it in the 15-minute Bridge

1. Narrowing move: "You've rated, and you've watched a room converge. Today the question is whether the machine that wrote the words can also judge them."
2. Class crowns their judge (chat votes), then the duel: let the compressed lead and the 58% land.
3. Blind sidings live — the class sides with A or B before identities drop; copy-my-sidings into the chat.
4. The authorship demo: toggle confession → note. One line: "Both are true. One apologizes, one takes responsibility. Write the second kind." (Students draft their own notes from their AI Help Records in the studio hour; **Checkpoint C grade after session**.)
5. Cliffhanger on the page: next week the class breaks my project. (→ Week 11, role reversal.)
