# Session 10 Instructor Paper-App: One Point, Several Neighborhoods

This is **Version 4 of 5** of **What Makes Something One Thing?** Embeddings first enter the cumulative example here.

It is an instructor demonstration, not the student assignment. Session 10 still asks students to use their real project record to document consequential AI contributions, human decisions, tests, revisions, and rejected suggestions.

## Public artifact

- `index.html` — a self-contained HTML/CSS/JavaScript paper-app.
- Stable route: `/session-10/`
- New capability: optional in-browser sentence embeddings.
- Carried forward: the Life, SVG, passage, and Boundary Notebook interactions.

## Human-first interaction

The model controls remain disabled until the reader assigns at least one human membership to a literary fragment. The reader can then:

1. reveal baked curated measurements without a network request; or
2. explicitly load the pinned model and recompute the same comparison in the browser.

Model failure leaves the human annotation, earlier cases, paper layer, Boundary Notebook, fallback similarities, and map usable.

## Pinned technical record

- Package: `@huggingface/transformers@4.2.0`
- Model: `Xenova/all-MiniLM-L6-v2`
- Model revision: `751bff37182d3f1213fa05d7196b954e230abad9`
- Model license: Apache-2.0
- Task: `feature-extraction`
- Precision: q8
- Pooling: normalized mean pooling
- Measurement: cosine similarity
- Baseline runtime: CPU/WASM
- Package host: jsDelivr
- Model host: Hugging Face

The fallback measurements were generated with the same package, revision, q8 weights, pooling, and normalization settings used by the live path.

The deterministic two-axis map uses:

- horizontal position = Mara similarity − Ivo similarity;
- vertical position = relationship similarity − setting similarity.

It is a teaching projection and explicitly discloses distortion of the 384-dimensional geometry.

## Epistemic boundary

The page uses **model similarity**, **neighborhood**, **comparison**, and **model output**.

It does not call the values:

- confidence;
- truth;
- proof;
- ground truth;
- attention weights;
- character classification.

The anchors were declared before the measurements were generated. Counterintuitive or disagreeing results remain evidence rather than being tuned away.

## Authorship and provenance

Daniel chose the project question, cumulative sequence, claims, interpretive categories, source boundary, and publication decisions. OpenAI Codex helped draft the implementation and verification logic under his direction. The pinned model computes the displayed similarities. None of those contributions transfers responsibility for the published page away from Daniel.

The Session 9 → 10 encounter is visibly labeled as a simulated teaching scenario. It is not presented as participant data. The technical measurements and source metadata are actual.

## Verification

From the browser console:

```js
S10.selftest()
```

Expected: `pass: true`.

Then verify:

1. model controls are disabled before a human annotation;
2. the curated comparison works without loading the model;
3. live loading begins only after the explicit button press;
4. progress and recoverable failure messages use an `aria-live` status;
5. the largest live-to-baked difference is reported against a `0.005` tolerance;
6. changing the selected fragment changes the exact bars and highlighted map point;
7. no similarity is labeled attention, confidence, truth, or proof;
8. all earlier cases remain usable;
9. refresh clears reader annotations and writing.

## Release boundary

This advance release stops at Version 4. Session 11’s attention stress test remains planned and is not silently represented as completed work.
