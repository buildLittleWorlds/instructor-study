# Session 1 Instructor Paper-App (v2): The Map of Meaning

The Bridge artifact for Session 1 (strand W1), rebuilt to open the course with a bang: a **live embedding model runs in the reader's browser** and places words — including the reader's own — on a 2-D map of meaning. Genre: explorable atlas. (v1, "The Prototype Problem," is preserved in `../archive/session-01-v1/`.)

## Files

- `index.html` — the paper-app. Uses Transformers.js from CDN (ES module, **pinned to @4.2.0** so a future release can't break class day) with a graceful static fallback.
- `data/words.json` — 36 words in 6 categories, the prototype category, the precomputed fallback layout, and `fallbackPrototype`.

## How it works

On load it tries to run `Xenova/all-MiniLM-L6-v2` (~30 MB, cached after first load) in the browser. If it loads: every word is embedded and projected onto the **2-D viewing angle that best spreads the six category centers** (top-2 directions of the between-group differences, found by power iteration in-page, deterministic seed so the map is identical every load); the reader can type any word and watch the real model place it through the same projection. If it can't load (old device, no WebGPU/WASM, offline): the page shows `fallbackCoords` — **the same layout precomputed with the identical model and projection (baked 2026-07-05), i.e. real data, not an approximation** — and disables only the "type your own word" box. The prototype reveal uses the full 384-d space when live and the baked `fallbackPrototype` ("cat", measured the same way) in fallback, so both modes tell the same truth.

*Why not the old two anchor-axes (made↔living × small↔big)?* Measured with the real model, that projection gave only 13/36 words a same-category nearest neighbor on screen — the middle of the map was a blob. The centroid-spreading angle gives 29/36 and visibly distinct regions (remaining mix-ups are mostly foods↔tools, which the limitation now turns into a teachable point).

The reader can place any word and immediately inspect its nearest neighbors. The interaction ends there: it does not collect, export, or share visitor input.

## 🚧 Device-test before class (important)

This is the course's first Tier-1 (live-model) page, so **test it on the weakest laptop a student might bring** before Session 1:

1. Open the deployed URL on a plain, older laptop with a normal browser.
2. Confirm the status banner reaches "Live model loaded," the map fills in, and "place your own word" works.
3. If it falls back on that device, decide whether to present live (your machine) and let students explore the fallback, or hold the live feature for a stronger-device week.

Keep the precomputed fallback honest: if you change the word list, regenerate `fallbackCoords`/`fallbackPrototype` with the same model (the coords are real measurements, and the method note says so).

## Preview & deploy

`fetch()` and ES modules need HTTP: `python3 -m http.server 8000` from this folder, then open http://localhost:8000. Deploy by pushing to the repo (`session-01/`) — the existing URL now serves v2. GitHub Pages serves the CDN import fine.

## Using it in the 15-minute Bridge

1. Narrowing move: "You'll learn meaning is a map of numbers. Watch a real network draw that map — then we hunt the center."
2. Live: load the map on your screen; click a couple of words to show neighbors; press **Reveal the prototype** and let the centroid word land.
3. Curiosity moment: take a few words from the room ("dragon," "sadness," "sushi," "volcano"), predict their neighborhoods, and place them live. A far-from-everything word like "xylophone" triggers the page's honest "nothing here is close" line. Discuss the surprise; do not turn it into a collection task.
4. Cliffhanger on the page: *the model hands us the center every time — is the center any good?*

## Current course role

This page remains an optional instructor example for embeddings and prototypes. It is not a student template and does not define Session 1 catch-up work. The session actually taught centered on AI-directed Game of Life builds and GitHub Pages deployment.
