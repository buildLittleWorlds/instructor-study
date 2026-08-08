# Instructor Examples - Curiosity-Driven Paper-App Studio

This repository contains public instructor examples and the Paper-App Anthology for AI + Research Level 2.

**Live site:** https://buildlittleworlds.github.io/instructor-study/

## Course boundary

These pages make AI ideas visible and show what a sophisticated paper-app can become. They are possibility space, not a numbered student checklist.

The normal student path is simpler: choose a curiosity, direct AI to build one useful interaction, test it, add a short explanation, and publish one public URL. Students do not have to reproduce an instructor page's topic, method, data, or technical stack.

## Active structure

```text
index.html                 landing page for current examples
anthology/                 idea museum and interaction-pattern collection
proceedings/               optional instructor-curated showcase
session-01/                The Map of Meaning
session-02/                probability tree, sampling toy, and randomness lab (the three design dials)
session-03/                Attention Spotlight - opens dial #1: neighborhood
session-04/                The Slop Detector + Rule Forge + reward model - opens dial #2: the rule
session-05/                The Next Move - curiosity into direction (curiosity-era rebuild)
session-06/                The Agreement Machine + gun bench + yardstick demo
session-07/                What Makes Something One Thing? v1 - One Pattern, New Cells
session-08/                v2 before - image, followed by revised/, revised-2/, and revised-3/ music pages
session-09/                V1 accumulation; V2 contraction; V3 selective expansion; V4 Life sonification; V5 Life composition studio
session-10/                revision archaeology and decision record; Session 9 V5 is now the locked project
session-11/                holding route for a brief polish comparison; actual polish result not yet built
archive/                   historical instructor artifacts; not course authority
```

Session 7 begins one cumulative instructor example. Session 8 contains a public image-to-music revision chain, culminating in `revised-3/` with sound-first experiments, listener mapping, an abstract, four analytical sections, and six sources. The first Session 9 page carried nearly all of that material forward and added a reader path plus mechanistic-interpretability research. `session-09/revised/` makes the opposite move: it cuts back to the glider, one compact music bench, and a bounded disagreement among Dennett, Barenholtz, and a peer-reviewed generative-memory model. `session-09/revised-2/` expands again, but selectively: it develops the glider as an encounter with persistence through sequential generation while keeping the larger V1 apparatus out. `session-09/revised-3/` then makes a structural revision: the Life state is no longer adjacent to a musical example but directly generates a visible and audible score. `session-09/revised-4/` keeps that instrument as a seed editor and turns it into a multitrack composition studio: musicians can combine independent Life voices, arrange and remap them, preview the score, export WAV/ZIP/JSON files with a pattern ledger, and read a source-linked paper connecting Cage with Earle Brown, Xenakis, George Lewis, and Pauline Oliveros. Session 10 now reads that public chain as revision archaeology: it records the quick class-time turn from direct Life sonification to the Cage/prepared-chance question, separates commit evidence from the instructor's account of the encounter, and locks Session 9 V5 as the project to finish.

The standalone Sessions 7-10 retired on 2026-07-28 are preserved under `archive/2026-07-28-pre-one-thing-sequence/`. Session 11 has a holding route for a brief bounded polish comparison, but no polish result should be claimed before it happens. Session 12 remains the student presentation; neither later outcome should be treated as built or tested.

## Cumulative instructor-example contract

Every active version distinguishes:

1. **Today’s course practice** - the transferable practice students apply to their own paper-apps.
2. **The instructor example** - the current state of Daniel’s individuation paper-app.
3. **The development record** - what was kept, tried, encountered, changed, rejected, and provisionally claimed.

The repeated reader action is:

> select a part → assign it to one or more wholes → inspect overlap or change → state and revise the rule

The current conceptual sequence distinguishes instructor observations, provisional interpretations,
reader evidence, source support, and actual technical evidence:

- Session 7 - persistence through changing cells.
- Session 8 - image-to-music revisions; parts and wholes become audible, testable, and source-backed.
- Session 9 - addition reaches a limit; V2 tests subtraction; V3 expands selectively; V4 joins the visual computation and musical encounter into one instrument; V5 makes that instrument a portable composition practice and asks how rules, chance, performance, and listening distribute authorship.
- Session 10 - reads the actual revision, source, and repository record; names the in-class Cage/Life interpretation as an instructor account rather than participant proof; and locks V5 as the project.
- Session 11 - will show no more than two verified presentation-serving changes to V5, then give most of the meeting to student finishing and rehearsal.
- Session 12 - adds no instructor version or lesson; the class belongs to student presentations.

## Data and interaction rule

Current instructor pages may compute from shipped illustrative data or run a model in the browser. They do not ask students to export ratings, paste JSON, supply a shared panel, or update a class dataset. Reader marks, annotations, and writing remain in memory only and disappear on refresh.

## Local preview

Several pages use `fetch()`. From this repository root, run:

```text
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

GitHub Pages serves the `main` branch root. This local cleanup does not authorize a commit, push, or deployment.
