# Session 10 Instructor Paper-App: The Second Opinion

A standalone instructor example about AI-assisted authorship and responsibility.

The page keeps one interaction from the earlier version: the reader toggles between two notes that disclose the same AI help. One apologizes and narrates process; the other documents direction, testing, revision, and responsibility.

**v2 (2026-07-12) adds two modules:**

1. **Who is the author of the glider?** A real glider loops on a small wrapped board while the reader assigns four claims to a cast (Conway / Richard Guy / Bill Gosper / the rule itself / you, just now): who invented the rule, who found the glider, who built the gun, who made *this* glider move. The reveal walks the history — rule authored by Conway (searched, 1968–70), glider *found* by Guy (1969), gun *engineered* by Gosper ($50 wager, 1970) — and lands the field's actual solution: it never crowned one author; it **named contributions**, which is what an authorship note does. Coda: Conway's love/hate relationship with the invention that eclipsed him (Numberphile); made things outgrow their makers. A mapping table ties each historical role to the student's project, with AI named as the new party in the middle that owns nothing.
2. **The authorship-note forge.** An eight-moment invented-but-typical build log; the reader files each moment under *AI helped me… / I chose… / I tested… / I changed or rejected…* (or leaves it out) and the note assembles live. Honesty flags are computed against the log: filing a moment where it doesn't belong, documenting no tests, omitting the "AI wrote ~80% of the final JavaScript" moment, or filing everything under AI-helped (the apology pattern, diagnosable). Filing everything honestly earns the responsibility-note verdict. The existing two-notes toggle remains above as the worked example.

## Course role

- Make AI assistance visible without treating it as misconduct.
- Separate contribution from typing every line.
- Show that authorship can rest on choosing, directing, testing, revising, explaining, and publishing.
- Give students a short model for their own authorship note — and now a place to practice the filing before writing it.

The page does not use the former Session 7 dataset, an AI judge, human panel scores, ratings exports, or class data. The forge checks the reader's filing locally against the shipped log; nothing is collected or submitted.

## Cellular automata callback

Name the layers in a Game of Life app:

1. Conway chose the rule.
2. The student chose the idea and directed the build.
3. AI generated or revised code and prose.
4. The computer executed the rule.
5. The pattern emerged.

The glider module now makes this manipulable — four claims, four different honest answers — and the landing question is the crib sheet's: **Who is the author of the glider? Now answer it for your app.**

## Using it in the 15-minute Bridge

1. Run the four glider claims with the room voting each before a volunteer clicks.
2. Read the history reveal aloud; pause on *rule by / discovered by / constructed by*.
3. Use the confession-versus-responsibility toggle as the central exhibit.
4. File three or four forge moments live — let the room catch a deliberate misfiling and watch the flag fire.
5. Land: "Both notes can be factually true. One apologizes; one documents responsibility. Write the second kind." Students add authorship notes grounded in real decisions.

## Preview

Open `index.html` directly or serve the Instructor Study repository over HTTP. The page is self-contained and has no data dependency; authored content (claims, cast, build log) sits in `EDIT HERE` blocks in the script.
