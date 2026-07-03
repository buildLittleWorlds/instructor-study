# Session 1 Instructor Paper-App (v2): The Map of Meaning

The Bridge artifact for Session 1 (strand W1), rebuilt to open the course with a bang: a **live embedding model runs in the reader's browser** and places words — including the reader's own — on a 2-D map of meaning. Genre: explorable atlas. (v1, "The Prototype Problem," is preserved in `../archive/session-01-v1/`.)

## Files

- `index.html` — the paper-app. Uses Transformers.js from CDN (ES module) with a graceful static fallback.
- `data/words.json` — 36 words in 6 categories, the two meaning-axes (anchor words), the prototype category, and an approximate fallback layout used only if the model can't load.

## How it works

On load it tries to run `Xenova/all-MiniLM-L6-v2` (~30 MB, cached after first load) in the browser. If it loads: every word is embedded, projected onto two semantic axes (made↔living, small↔big), and plotted; the reader can type any word and watch the real model place it. If it can't load (old device, no WebGPU/WASM, offline): the page shows the approximate fallback layout, clearly labelled, and disables only the "type your own word" box. Either way the paper is complete and honest.

## 🚧 Device-test before class (important)

This is the course's first Tier-1 (live-model) page, so **test it on the weakest laptop a student might bring** before Session 1:

1. Open the deployed URL on a plain, older laptop with a normal browser.
2. Confirm the status banner reaches "Live model loaded," the map fills in, and "place your own word" works.
3. If it falls back on that device, decide whether to present live (your machine) and let students explore the fallback, or hold the live feature for a stronger-device week.

Keep the precomputed fallback honest: if you change the word list, the fallback coordinates are just an approximate backup — the method note already says so.

## Preview & deploy

`fetch()` and ES modules need HTTP: `python3 -m http.server 8000` from this folder, then open http://localhost:8000. Deploy by pushing to the repo (`session-01/`) — the existing URL now serves v2. GitHub Pages serves the CDN import fine.

## Using it in the 15-minute Bridge

1. Narrowing move: "You'll learn meaning is a map of numbers. Watch a real network draw that map — then we hunt the center."
2. Live: load the map on your screen; click a couple of words to show neighbors; press **Reveal the prototype** and let the centroid word land.
3. Data moment: take a word from the class ("dragon," "sadness," someone's name), type it, and let the model place it live — ask the room to predict the neighborhood first.
4. Cliffhanger on the page: *the model hands us the center every time — is the center any good?*

## Session 1 duty

Still the fallback rep core: the students' predict-and-reveal rep can stay static (their own prompt + tally). The live map is the instructor showpiece; students meet Tier-1 by watching, not building, this week.
