# The Instructor's Study

Weekly paper-apps for *The False Mean* — the instructor's research strand for AI + Research Level 2 (Youth Horizons Learning). Each session folder is a complete, self-contained static paper-app: prose, evidence, and interaction on one page, with its dataset in the page's own `data/` folder.

**Live site:** https://buildlittleworlds.github.io/instructor-study/

## Structure

```
index.html            landing page linking everything
proceedings/          class gallery - student paper-apps as they ship
anthology/            the museum - filterable specimen collection (grows weekly)
session-01/           The Prototype Problem      (embeddings & prototypes)
session-02/           The False Mean             (probability & temperature)
session-02/playground/  Loading the Dice - temperature sampling toy
session-03/           Attention Spotlight        (attention & context)
session-04/ ...       added weekly, each in a different formal genre
```

**Form of the week:** each session's paper deliberately inhabits a different anthology genre - predict-reveal (1), blind gallery + sandbox toy (2), evidence cards (3), atlas (4), app-first (5), living dashboard (6), filterable corpus (7), many-paths (8), interactive sorter (9), judge-vs-panel duel (10). One study, many forms.

Each session folder has its own README covering: how to regenerate the data honestly before class, the in-class data loop (export button → paste → commit → reload), and the 15-minute Bridge run-of-show.

## Deploy

GitHub Pages, from the `main` branch root. Every folder is plain HTML/JS/JSON — no build step, no server, no API keys. New sessions deploy by pushing a new folder.

## Local preview

`fetch()` needs HTTP, so from the repo root:

```
python3 -m http.server 8000
```

then open http://localhost:8000.

## The weekly data loop

Readers rate/judge on the page and click the export button; their rows arrive as JSON; the author pastes them into that session's `data/` file and pushes. The class-average sections recompute on load. No spreadsheets, no forms, no backend — the app is the spreadsheet.
