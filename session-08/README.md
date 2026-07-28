# Session 8 Instructor Paper-App: One Part, Several Wholes

This is **Version 2 of 5** of the cumulative instructor example **What Makes Something One Thing?**

It is an instructor demonstration, not the student assignment. Students use the Session 8 practice to clarify the central action and written claim of their own evolving paper-apps.

## Public artifact

- `index.html` — a self-contained HTML/CSS/JavaScript paper-app.
- Stable route: `/session-08/`
- New medium: original layered SVG artwork.
- Carried forward: the verified Session 7 Game of Life case.

## Revision logic

This advance-release version uses an authored scenario to demonstrate how evidence could motivate revision:

> possible observation → possible interpretation → interactive and written revision

The page labels this material **Simulated teaching encounter — not participant data**. It contains no invented quotation and makes no claim about an actual reader. The development ledger keeps the simulation separate from actual technical results.

The simulated Session 7 observation motivates two changes:

1. the four-part recurring action is placed near the top;
2. one in-memory Boundary Notebook lets a reader state and revise a rule across cases.

## New interaction

The reader selects a suspended droplet in an original SVG and can assign it simultaneously to:

- the plant;
- the reflected sky;
- the water cycle;
- the composition.

Assignments appear through visible overlays and a textual status message. Color is not the only signal.

## Taste and restraint

This version visibly rejects an image uploader and automatic segmentation. Those additions would move attention toward model performance before the human boundary-making action is intelligible.

The paper layer distinguishes:

- what the page directly shows;
- what a source supports;
- what remains open.

## Verification

From the browser console:

```js
S8.selftest()
```

Expected: `pass: true`.

Then verify:

1. the Life case still reports 3 surviving, 2 born, and 2 departed positions after one generation;
2. the droplet can receive all four memberships at once;
3. every active membership appears in text;
4. the SVG droplet is operable with Enter and Space;
5. reset removes all overlays and assignments;
6. Boundary Notebook entries disappear after refresh;
7. no upload, account, analytics, persistence, or model request occurs.

## Source boundary

The artwork and interpretive prose are original course material. The external water-cycle link supports only the material-process example; it does not decide the visual interpretation.
