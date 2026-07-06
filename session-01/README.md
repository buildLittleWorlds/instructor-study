# Session 1 Instructor Paper-App (v2): The Map of Meaning

The Bridge artifact for Session 1 (strand W1), rebuilt to open the course with a bang: a **live embedding model runs in the reader's browser** and places words — including the reader's own — on a 2-D map of meaning. Genre: explorable atlas. (v1, "The Prototype Problem," is preserved in `../archive/session-01-v1/`.)

## Files

- `index.html` — the paper-app. Uses Transformers.js from CDN (ES module, **pinned to @4.2.0** so a future release can't break class day) with a graceful static fallback.
- `data/words.json` — 36 words in 6 categories, the prototype category, the precomputed fallback layout, and `fallbackPrototype`.

## How it works

On load it tries to run `Xenova/all-MiniLM-L6-v2` (~30 MB, cached after first load) in the browser. If it loads: every word is embedded and projected onto the **2-D viewing angle that best spreads the six category centers** (top-2 directions of the between-group differences, found by power iteration in-page, deterministic seed so the map is identical every load); the reader can type any word and watch the real model place it through the same projection. If it can't load (old device, no WebGPU/WASM, offline): the page shows `fallbackCoords` — **the same layout precomputed with the identical model and projection (baked 2026-07-05), i.e. real data, not an approximation** — and disables only the "type your own word" box. The prototype reveal uses the full 384-d space when live and the baked `fallbackPrototype` ("cat", measured the same way) in fallback, so both modes tell the same truth.

*Why not the old two anchor-axes (made↔living × small↔big)?* Measured with the real model, that projection gave only 13/36 words a same-category nearest neighbor on screen — the middle of the map was a blob. The centroid-spreading angle gives 29/36 and visibly distinct regions (remaining mix-ups are mostly foods↔tools, which the limitation now turns into a teachable point).

There's also an in-week-1 data moment: after class words are placed live, **"Copy today's class words (JSON)"** copies every placed word + its neighborhood — paste it into the shared scratchpad. That's the export trick (the course's data-collection method) planted in Session 1, and your study's first rows.

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
3. Data moment: take words from the class ("dragon," "sadness," someone's name), type each, and let the model place it live — ask the room to predict the neighborhood first. Then press **Copy today's class words (JSON)** and paste the rows into the shared scratchpad: their judgments just became the study's first data. (Demo tip: words with plausible neighborhoods — dragon, sadness, sushi, volcano — land beautifully; a far-from-everything word like "xylophone" triggers the page's honest "nothing here is close" line, which is its own teachable beat.)
4. Cliffhanger on the page: *the model hands us the center every time — is the center any good?*

## Session 1 duty

Still the fallback rep core: the students' predict-and-reveal rep can stay static (their own prompt + tally). The live map is the instructor showpiece; students meet Tier-1 by watching, not building, this week.
