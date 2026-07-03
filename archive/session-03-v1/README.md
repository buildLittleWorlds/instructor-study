# Session 3 Instructor Paper-App: Fitted or Veneer?

The Bridge artifact for Session 3 (strand W3). One request, four commissions (picture book / history journal / memorial program / theme-park brochure) for the same fictional clock tower. Readers match outputs to commissions blind, then make the week's real judgment - truly re-fitted, or re-polished veneer - with a "shared bones" detector that highlights the phrases recurring across all four outputs.

## Files

- `index.html` - the paper-app (single file, vanilla JS, no dependencies).
- `data/commissions.json` - the request stem, four commissions, four outputs, and the shared-phrase list.
- `data/judgments.json` - accumulated reader judgments; class tallies recompute from this file.

## Design notes worth keeping

- **The object is fictional on purpose.** The journal output's confident dates and materials are model-invented - fluent authority as part of the veneer. Keep this property when you regenerate: pick a fictional object, never a real one.
- **Part 1 is easy by design.** Matching proves surface adaptation exists; the paper's question is Part 2, where there is no answer key. The page says so - that gap is the setup for Week 6 (criteria and agreement).
- **The bones detector only highlights what you tell it to.** After regenerating, reread the four outputs and update `sharedPhrases` with the recurring phrases you actually find (case-insensitive substring match). The counts compute live, so a phrase that hits 2 of 4 is fine to include.

## Before class: regenerate the data honestly

1. Four fresh chats, same request stem, only the commission clause changed. Default settings.
2. Paste outputs into `commissions.json`; fill `model` and `date`; delete the `note`.
3. Re-hunt the shared phrases and update `sharedPhrases`.
4. Reset `judgments.json` to `{ "judgments": [] }` - real rows arrive via the export button in class.

## Preview and deploy

Same as Sessions 1-2: `python3 -m http.server 8000` locally; deploy by pushing to the demo repo (`instructor-study/session-03/`) or Netlify Drop. Link the URL on the class proceedings page.

## Using it in the 15-minute Bridge

1. (2 min) Narrowing move: "You just saw attention make context matter. My study needs to know how *deep* that adaptation goes - so we test fit against veneer."
2. (7 min) Class matches the four outputs by shout-out (it will go fast - say why that's expected), then votes fitted/veneer on each. Click **Show the shared bones** last; let the highlighting land in silence for a beat.
3. (4 min) Data moment: two volunteers export their judgments; commit; the tallies update. Point at the disagreement: without criteria, we can't even say what it means. Week 6 fixes that.
4. (2 min) Cliffhanger on the page: is taste just preference, or judgment experts converge on? Leave it on screen going into the inquiry hour.

## Session 3 duty

Also the fallback rep core: the students' guess-the-audience rep is Part 1 + the method box on their own request and audiences. Their method sections copy this page's variable/controls/measures shape - that paragraph is the week's writing lesson.
