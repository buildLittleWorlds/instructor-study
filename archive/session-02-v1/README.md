# Session 2 Instructor Paper-App: The False Mean

The Bridge artifact for Session 2 (strand W2). A blind temperature gallery: ten unlabeled answers to one prompt, rated on surprise and coherence, revealed as a curve. This artifact also *teaches the export-ratings pattern by existing* - the "Copy my ratings" button is the course's data-collection method, demonstrated on the instructor's own study first.

## Files

- `index.html` - the paper-app (single file, vanilla JS, no dependencies).
- `data/gallery.json` - the ten outputs with temperature labels (hidden until reveal; order shuffled per visit).
- `data/ratings.json` - accumulated rater rows; class-average bars recompute from this file on every load.

## Before class: regenerate the data honestly

Both data files currently hold **illustrative drafts**.

1. Run the temperature sweep for real through your API tool: *"Describe an old library in two or three sentences,"* two outputs at each of 0.2 / 0.7 / 1.0 / 1.3 / 1.7. Paste into `gallery.json`, fill `model` and `date`, delete the `note`.
2. Empty `ratings.json` to `{ "ratings": [] }` - the page will say "yours could be the first rows." Real rows arrive in class.

## The data loop (the week's lesson)

1. In class, students rate the gallery blind and click **Copy my ratings** (initials + 10 rows of JSON to their clipboard).
2. They paste the rows into the class chat.
3. You append them to the `ratings` array in `data/ratings.json`, commit, push.
4. On reload, the class-average curve exists - grown from judgments made minutes earlier. Say the sentence out loud: *the app is the spreadsheet.*

## Preview and deploy

Same as Session 1: `python3 -m http.server 8000` locally (fetch needs HTTP); deploy by pushing to the demo repo (`instructor-study/session-02/`) or dragging the folder onto Netlify Drop. Link the URL on the class proceedings page.

## Using it in the 15-minute Bridge

1. (2 min) Narrowing move: "You just saw temperature widen the sampling. My study needs to know what randomness does to *quality* - so we measure it blind."
2. (8 min) Class rates three cards together (call out scores), you enter them; everyone commits a best-overall prediction; reveal. The near-twin low-temp cards and the whale-skeleton card do the teaching.
3. (3 min) Data moment: two volunteers copy-paste their full ratings; you commit live; reload; the class curve appears.
4. (2 min) Cliffhanger on the page: nothing improved surprise *and* coherence at once. What could? Leave it on screen going into the inquiry hour.

## Session 2 duty

This is also the fallback rep core: the students' blind gallery rep is a copy of Part 1 + the export button, on their own prompt (their sweep outputs come from your tool during the inquiry hour).
