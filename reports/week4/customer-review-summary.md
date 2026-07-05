**Date**: 26.06.2026

## Participants or roles:
1. Kir Tormasov (Team member 1 / Scrum Master)
2. Robert Kharisov (Team member 2 / Product Owner)
3. Timur Rasulov (Team member 3 / Developer)
4. Customer

## Artifacts demonstrated:
1. Live MVP web application and new game prototypes deployed via GitLab Pages.
2. "Color Match" game playable demo with "select-then-speak" and timer mechanics.
3. "Heroes of Voice & Magic" (Spell Caster) game playable demo.
4. "Voice Angler" (Fishing game) playable demo.
5. "Spell Match-3" (Word-tree gamedemonstration.

## Scope & Sprint Goal reviewed:
1. The team reviewed the implementation of the "select-then-speak" voice activation logic across the games.
2. The team discussed the new game prototypes added to reach the 10-game goal, including Voice Angler and Spell Mastery.
3. Addressed previous customer feedback regarding voice mechanics and English/Russian word integration.
4. Technical improvements and CI/CD pipeline automation progress were briefly discussed.

## Implemented increment discussed:
1. **Color Match Increment**: Updated with the "select-then-speak" feature and an active timer mechanic forcing players to speak repeatedly to keep the brush active.
2. **Heroes of Voice & Magic Increment**: Reimplemented with "select-then-speak" logic, updated pixel-art visuals, and enemy attack mechanics.
3. **Voice Angler Increment**: A new fishing game where players cast a bait and use voice commands to pull out fish within a specific time limit based on fish rarity.
4. **Spell Mastery Increment**: A new word-3 game where players navigate a tree of words and use voice commands to clear paths.

## UAT results & Quality evidence discussed:
1. **UAT on Color Match**: The customer tested the new timer mechanic and found it counterintuitive and redundant, preferring a more methodical and meditative pace.
2. **UAT on Heroes of Voice & Magic**: The customer successfully cast spells using voice. Identified UX issues with missing English word translations, unclear spell effects, and disruptive UI element bouncing.
3. **UAT on Voice Angler**: The customer successfully caught fish and liked the rarity system, though identified visual overlap issues with the pier and fish paths.
4. **Quality Evidence**: The team reported that the CI pipeline was in a rudimentary state and currently failing due to a game-dependent test. The test was temporarily bypassed to allow deployment, which was acknowledged as a technical debt to be fixed.

## Approvals or requested changes:
1. **Change - Color Match Mechanic**: The customer requested removing the timer mechanic. The flow should be slow-paced: select parts, select color, then pronounce to commit the paint.
2. **Change - Heroes of Voice & Magic UI**: The customer requested adding English word translations and spell effect descriptions next to the Russian words.
3. **Change - Heroes of Voice & Magic Layout**: The bouncing microphone activity status should be moved to the top or corner to be more UX friendly. Enemies should be placed in a triangle formation to save screen space.
4. **Change - Voice Angler Visuals**: The customer suggested replacing the pier with a boat placed above the waves to prevent overlapping with the fish paths.
5. **Approval - Game Concepts**: The customer praised the "Voice Angler" gameplay loop and highly approved the proposed "Flight Control Simulator" concept for future implementation.
6. **Change - Custom Images**: The customer advised against implementing a feature to load custom user images via URLs due to technical risks, suggesting it be moved to a "Could Have" priority.

## Risks:
1. **Technical & Pipeline Risk**: The CI pipeline currently has a bypassed failing test. This needs to be properly fixed to ensure deployment stability.
2. **Feature Complexity Risk**: Allowing users to load custom images via external URLs introduces significant reliability risks if external sites go down.

## Action points:
1. **Color Match**: Remove the timer and implement a methodical "select parts, choose color, pronounce, paint" flow.
2. **Heroes of Voice & Magic**: Add English translations and spell descriptions; move the microphone status indicator; adjust enemy layout into a triangle.
3. **Voice Angler**: Replace the pier asset with a boat positioned above the wave lines.
4. **Infrastructure**: Fix the bypassed automated test in the CI pipeline to ensure proper quality gates.
5. **General**: Implement progress tracking and dynamic word list features across the games.

## Resulting Product Backlog or scope changes:
1. **Scope Reduction (Priority Shift)**: The feature for custom image loading via URLs is moved to "Could Have" and deferred to the end of the project.
2. **Backlog Refinement**: Adjustments to Color Match, Heroes of Voice & Magic, and Voice Angler user stories to reflect the requested UX and mechanical changes.
3. **New Game Addition**: The "Flight Control Simulator" concept is approved for further prototyping if time permits.
