# Session 1 Instructor Paper-App: The Prototype Problem

The Bridge artifact for Session 1 (strand W1). A complete paper-app in miniature: thesis, method, two interactions, real evidence, limitation, try-it-yourself, authorship note, cliffhanger.

## Files

- `index.html` - the whole paper-app (single file, vanilla JS, no dependencies).
- `data/study.json` - the infant-study prediction questions and revealed results (real numbers from the experiments table in the corpus).
- `data/outputs.json` - the ten model outputs, hand-tagged features, and method fields.

## Current class dataset

The current deployed dataset in `data/outputs.json` was generated on 2026-07-03 with OpenAI GPT-5 via Codex, using the exact prompt in the artifact. The method field in the JSON states this directly so the page does not pretend these were from a different model or setup.

## Before class: regenerate the data honestly

If you want to rerun the example with another model before class, replace the current outputs so the artifact's method note is true:

1. Open ten fresh chats in your model of choice. Same prompt each time: *"Describe a beautiful room in two or three sentences."* Default settings.
2. Paste each response into an `outputs[].text` field.
3. Hand-tag features per output (keep the tags honest - tagging is a judgment call, and the authorship note says so).
4. Fill in `model`, `date`, and `settings`.
5. If the real tally differs from the draft (it will, somewhat), nothing else needs changing - the bars, top-5 scoring, and highlights all compute from the data.

## Preview locally

`fetch()` needs HTTP, so from this folder:

```
python3 -m http.server 8000
```

then open http://localhost:8000. (Double-clicking index.html will show a friendly error instead of the app.)

## Deploy (pick one)

**GitHub Pages** (course default): put this folder in your demo repo as `instructor-study/session-01/`, push, and it appears at `https://<you>.github.io/<repo>/instructor-study/session-01/`. One-time setup: repo Settings → Pages → Deploy from branch → main.

**Netlify Drop** (fastest first deploy): drag this folder onto https://app.netlify.com/drop - live URL in ~10 seconds. Good for demonstrating "deployed" before GitHub is set up.

Link the URL on the class proceedings page.

## Using it in the 15-minute Bridge

1. (2 min) Narrowing move: "You just learned embeddings average into prototypes. My study starts here: do *humans* anchor on prototypes too?"
2. (7 min) Run Part 1 live - the class votes on each infant question before you click. Then Part 2 - the class calls out three feature picks, you commit them, reveal the tally.
3. (4 min) Their predictions vs. the study = the data moment. Read the limitation aloud - modeling honest scope from day one.
4. (2 min) The cliffhanger is on the page. Leave it on screen going into the inquiry hour.

## Session 1 duty

This artifact is also the fallback rep core: the students' predict-and-reveal rep is a simplified copy of Part 2 (their own prompt, their own tally).
