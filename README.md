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
session-08/                v2 - One Part, Several Wholes
session-09/                v3 - One Passage, Several Characters
session-10/                v4 - One Point, Several Neighborhoods
session-11/                reserved for v5 - One Token, Several Contexts (not active)
archive/                   historical instructor artifacts; not course authority
```

Session 7 begins one cumulative instructor example. Sessions 8–10 are published in advance so students can see how one project accumulates, changes medium, and revises its paper layer. Each later version uses a prominently labeled simulated teaching encounter to demonstrate possible revision logic without pretending that a participant event occurred.

The standalone Sessions 7-10 retired on 2026-07-28 are preserved under `archive/2026-07-28-pre-one-thing-sequence/`. Session 11 remains a reserved route and should not be treated as built or tested.

## Cumulative instructor-example contract

Every active version distinguishes:

1. **Today’s course practice** - the transferable practice students apply to their own paper-apps.
2. **The instructor example** - the current state of Daniel’s individuation paper-app.
3. **The development record** - what was kept, tried, encountered, changed, rejected, and provisionally claimed.

The repeated reader action is:

> select a part → assign it to one or more wholes → inspect overlap or change → state and revise the rule

The conceptual sequence is fixed. Sessions 8–10 distinguish simulated encounter evidence from actual technical evidence:

- Session 7 - persistence through changing cells.
- Session 8 - one visual part participating in several wholes.
- Session 9 - one passage participating in several characters or relations.
- Session 10 - embeddings as several semantic neighborhoods and as a second observer, not an authority.
- Session 11 - query-relative attention as a stress test, with authored teaching vectors clearly separated from model evidence.

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
