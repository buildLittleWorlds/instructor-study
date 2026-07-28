# Session 8 Instructor Paper-App: The Naming of Things

The Bridge artifact for Session 8 (the paper-layer session): **a field-guide lab plus an honest-scope sorter.** The reader stirs a real Conway soup and watches it burn down to ash — first as anonymous debris, then with a field guide switched on that names and censuses every settled object. Then six plausible sentences about that very lab get sorted into three bins — *this page showed it / a source I can cite shows it / this page can't show it* — and the same four-sentence paper layer appears written two ways: an overclaiming draft with every loan against missing evidence highlighted and annotated, and an honest draft that survives a reader who checks. Session idea: **explanation is part of the interface; honest scope is stronger than overclaiming.** Landing lines: "The interaction lets the reader see it; the paper layer helps them know what they saw." / "Honest scope is stronger than overclaiming."

Fully self-contained: one `index.html`, no data folder, no fetch — it works from `file://` (double-click it). All authored content (claims, verdicts, both drafts, predict copy) sits in the `EDIT HERE` block in the script.

## Modules

1. **8A — Names on, names off.** A bounded 48×32 B3/S23 board (Uint8Array double buffer, ~30 gen/s). *Stir a soup* seeds the central 24×16 region at ~38% density and keeps the seed so *Replay the same soup* reruns it exactly. A run stops when the state-hash has repeated with period ≤ 2 for 20 straight checks, or at a 600-generation cap (a wandering glider is the usual culprit; the capped status says, honestly, "mostly settled; something is still moving"). At settle — before any names — the predict beat asks how many *kinds* of thing survived (1–3 / 4–6 / 7 or more; the window closes if the reader peeks first). The big **names off / names on** toggle then flips the same pixels from debris into labeled citizens: canvas labels at each object, a census table (name / count / cells — the cells column always sums to the population readout, a built-in audit), and the prediction scored against the census's kind count. A cumulative tally runs across soups this visit ("Across your N soups: blocks X, blinkers Y, …"), and after 2+ soups the punch card lands the Catagolue tie (below).
2. **8B — Say only what the page shows.** Six authored claims, three bins, per-claim verdicts. Claim 1's verdict computes a live receipt from the reader's own census (and admits the sentence may be *false for your run* — checking is the point). Claim 5 is the planted trap (a can't-show claim dressed as a census result). Claim 6 verifies itself: its reveal carries a *Replay the same soup* button, and when the rerun settles the card compares final-state hashes and reports "Identical final state: yes/no." Score line after all six: "N of 6 in the right bin." The closing scaffold shows the four-sentence paper layer (curious / can do / noticed / next) as **the overclaiming draft** (five rust-highlighted overclaims, each annotated on tap) and **the honest draft**, toggleable.

## Computed vs authored (honesty framing)

- **Computed live:** the soup, settling, hashes, the census and kind counts, claim 1's receipt, claim 6's verification, the score. The field guide's canonical forms are **generated at page load** by stepping and rotating eleven base patterns in code (union of the two alternating phases → 8-connected components → each phase normalized → smallest of the 8 symmetries → match either phase against any phase of an entry). No canonical string in the file is hand-typed — the toad/beacon/glider second-through-fourth phases are derived by stepping, precisely so a typo can't teach the guide to lie.
- **Authored (EDIT HERE):** the eleven names in the guide, the six claims and verdicts, both drafts, the predict question.
- **Verified before shipping:** the detector was unit-tested against hand-built boards — block, blinker (both phases), beehive, boat, loaf, tub, pond, ship, toad and beacon (both phases each), a mid-flight glider in all four phases — plus a long boat and a snake, two still lifes the guide does *not* know, which correctly land in "unnamed (rarer than my field guide)." The same check ships in the page: open the console and run `S8.selftest()`. Across test batches of random soups, every census's cells column summed to the population and every seed replay produced an identical final hash.

## The Catagolue tie (course vocabulary callback)

After the second soup, the punch card names what the cumulative tally shows: the same few citizens, every time. On Catagolue's census the top four objects are ~84.7% of everything random soups ever make, and the top sixteen are over 99.9% ([LifeWiki: Most common objects on Catagolue](https://conwaylife.com/wiki/Most_common_objects_on_Catagolue)). **The ash is the false mean of the Life universe** — Sessions 4–5's vocabulary (false mean / random swerve / true swerve), now measured instead of merely asserted — and the page's twist is that you can only *see* the sameness once the things have names. The accuracy box keeps the scope clean: the 84.7% is Catagolue's number, cited not measured; this finite board eats its gliders at the edges; and one page's soup is an anecdote — the census is the evidence.

## Using it in the 15-minute Bridge

1. **Stir a soup, names off.** Let the room watch the boil-down cold. If it caps at 600, read the capped line aloud — that sentence is the week's lesson in miniature.
2. **Predict kinds.** Everyone votes a chip (1–3 / 4–6 / 7 or more) before anything is named.
3. **Names on.** Read the census. Ask what changed on the board (nothing) and what changed in the room (everything).
4. **Second soup.** Same few citizens; the cumulative punch card lands the Catagolue line — the ash is the false mean of the Life universe.
5. **Sort two claims live** — claim 1 (check it against the table on screen) and claim 5 (the trap). If time allows, run claim 6's verification and let determinism take a bow.
6. **Show the two drafts.** Tap one overclaim, hear the charge, toggle to honest. Then release students to write their own four sentences for their own app — and to mark, for each sentence, which of the three calls it makes.

Students do not submit predictions, censuses, or scores; nothing on the page collects anything.

## Before class

Run one soup end-to-end on the classroom machine (about 10–20 seconds of animation; median settle in testing was ~270–290 generations). Have a settled soup on the board before you open module 8B so claim 1's receipt and claim 6's verification have something to bite. If you swap claims or rewrite verdicts in the `EDIT HERE` block, keep the answer distribution honest — two shown, two cited, two can't-show — and keep claim 5's trap flavor: a can't-show sentence that *sounds* like a census result.

## Preview & deploy

Self-contained: open `index.html` directly (`file://` works — there is no fetch), or `python3 -m http.server 8000` if you prefer. Deploy by pushing (`session-08/`). Sanity check after deploy: stir a soup, and run `S8.selftest()` in the console.
