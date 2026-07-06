# Session 4 Instructor Paper-App: The Slop Detector

The Bridge artifact for Session 4 (strand W4): a **living dashboard** that measures "slop." The reader predicts, then the page *computes live* how much a model's answers to eight unrelated prompts repeat themselves versus eight humans' answers — and lets them click each stock-phrase tell to see the evidence underneath. Genre: living dashboard (HELM-style), the course's first data-viz object. Fully static. This is the fourth deliberately-different form: map (S1), tree (S2), spotlight (S3), dashboard (S4).

## Files

- `index.html` — the paper-app (vanilla JS, no dependencies).
- `data/slop.json` — 8 AI answers + 8 human notes to the same 8 unrelated prompts, plus the stock-phrase list.

## The measure is real (computed, not hand-set)

Sameness = average pairwise Jaccard overlap of content words within a set (stop-words removed), computed in the browser from the shipped texts. Verified on the current sample: **AI ≈ 12.3% self-similarity vs humans ≈ 0.25% — about 49× more alike**, and every stock phrase is AI-heavy / human-zero. Swap in your own collected texts and every number and bar updates automatically.

**Control bar (added 2026-07-05):** the page now also computes the **AI ↔ Human cross overlap (0.8%)** and discloses the length gap (≈22 vs ≈13 content words) in the method — the pre-emptive answer to "aren't the AI ones just longer?" The AI answers resemble each other ~15× more than they resemble a human answering the same prompt.

**Hunt your own tell (added 2026-07-05):** a live phrase-tester under the chart — type any phrase, get AI-vs-human counts + text highlighting, then **Copy the hunt (JSON)** for the scratchpad. This is the strand's W4 data moment ("class hunts two more stock phrases live; counts go into your data") built into the page.

## Honesty framing

The texts are illustrative (the AI answers written to show real tells; the human notes deliberately idiosyncratic), but the numbers on the page are honest measurements *of this sample* — the method note and limitation say exactly that, and flag that shared-vocabulary is a surface proxy (a deeper version compares meaning with embeddings — the natural Tier-1 upgrade, "The Sameness Atlas, Live," in the tech backlog).

## Before class (optional, stronger)

Collect real data: send one model 8 genuinely unrelated prompts, and ask 8 people the same prompts. Paste both into `slop.json`. The dashboard then reports your class's own slop measurement — a far better demo than authored text.

## Preview & deploy

`python3 -m http.server 8000` from this folder. Deploy by pushing (`session-04/`). Link it on the landing page and the Six Ideas card #4.

## Using it in the 15-minute Bridge

1. Narrowing move: "You learned RLHF tunes models toward what raters liked, and the side effect is sameness. Let's measure it."
2. Read three AI answers to unrelated prompts aloud — let the room *hear* the sameness before the numbers.
3. Take the class prediction (which repeats more, by how much?), then reveal the bars: ~49× is a gasp.
4. Click a tell ("it's important to remember") to light up every AI text that uses it. Discussion beat: whose preferences trained this?
4b. Data moment: the class calls out suspected tells; type each into **Hunt your own tell** live ("tapestry"? "deep breath"? "journey"?), watch the counts land, then **Copy the hunt** and paste it into the scratchpad — their finds are now data. If someone asks whether the AI texts are just longer, point at the control bar: that's the answer, measured.
5. Cliffhanger on the page: "make it weirder" just makes edgy slop — so what actually beats slop? (→ Week 5, the real research question.)

**Checkpoint A** (rep review of Sessions 1–4) happens after this session — instructor-facing, not part of the paper.
