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
session-07/                The Debug Loop - opens dial #3: iteration (curiosity-era rebuild)
session-08/                The Naming of Things - census and honest scope (curiosity-era rebuild)
session-09/                The Argument You Run - lineage and reader path (curiosity-era rebuild)
session-10/                The Second Opinion - authorship, glider credit, note forge
archive/                   historical instructor artifacts; not course authority
```

Sessions 5 and 7-9 were rebuilt on 2026-07-12 from the parent course's `session-build-specs.md` as curiosity-era instructor demonstrations: self-contained pages, no class ratings, exports, or shared datasets. Their previous continuous-study versions remain archived.

## Data and interaction rule

Current instructor pages may compute from shipped illustrative data or run a model in the browser. They do not ask students to export ratings, paste JSON, supply a shared panel, or update a class dataset.

## Local preview

Several pages use `fetch()`. From this repository root, run:

```text
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

GitHub Pages serves the `main` branch root. This local cleanup does not authorize a commit, push, or deployment.
