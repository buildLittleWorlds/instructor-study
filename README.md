# The Instructor's Study

Weekly paper-apps for *The False Mean* — the instructor's research strand for AI + Research Level 2 (Youth Horizons Learning). Each session folder is a complete, self-contained static paper-app: prose, evidence, and interaction on one page, with its dataset in the page's own `data/` folder.

**Live site:** https://buildlittleworlds.github.io/instructor-study/

## Structure

```
index.html        landing page linking every session
session-01/       The Prototype Problem      (embeddings & prototypes)
session-02/       The False Mean             (probability & temperature)
session-03/       Fitted or Veneer?          (attention & context)
session-04/ ...   added weekly
```

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
