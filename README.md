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
session-09/                V1 accumulation; V2 contraction; V3 selective expansion; V4 Life sonification; V5 Cage/Life synthesizer
session-10/                older v4 draft; reconcile to the music/reader-path chain before reuse
session-11/                reserved for v5 - One Token, Several Contexts (not active)
archive/                   historical instructor artifacts; not course authority
```

Session 7 begins one cumulative instructor example. Session 8 contains a public image-to-music revision chain, culminating in `revised-3/` with sound-first experiments, listener mapping, an abstract, four analytical sections, and six sources. The first Session 9 page carried nearly all of that material forward and added a reader path plus mechanistic-interpretability research. `session-09/revised/` makes the opposite move: it cuts back to the glider, one compact music bench, and a bounded disagreement among Dennett, Barenholtz, and a peer-reviewed generative-memory model. `session-09/revised-2/` expands again, but selectively: it develops the glider as an encounter with persistence through sequential generation while keeping the larger V1 apparatus out. `session-09/revised-3/` then makes a structural revision: the Life state is no longer adjacent to a musical example but directly generates a visible and audible score. `session-09/revised-4/` preserves that direct mapping as a control, adds designed and prepared-chance pitch modulation, and develops an original source-linked comparison with John Cage's writings and electronic works.

The standalone Sessions 7-10 retired on 2026-07-28 are preserved under `archive/2026-07-28-pre-one-thing-sequence/`. Session 11 remains a reserved route and should not be treated as built or tested.

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
- Session 9 - addition reaches a limit; V2 tests subtraction; V3 expands selectively; V4 joins the visual computation and musical encounter into one instrument; V5 turns the mapping itself into the Cage/Life question.
- Session 10 - authorship and provenance should grow from the actual revision, source, and reader record; the older embedding draft is not yet reconciled.
- Session 11 - remains planned and must follow the reconciled Session 10 path.

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
