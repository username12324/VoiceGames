**Date**: 20.06.2026

## Participants or roles:
1. Robert (Team Member 2 / Product Owner)
2. Kir (Team Member 1 / Scrum Master)
3. Danko (Customer)

## Artifacts demonstrated:
1. Live MVP v1 web application website.
2. "Color Match" game playable demo.
3. "Heroes of Voice & Magic" (Spell Caster) game playable demo.
4. GitLab Backlog showing MVP v1 and MVP v2 issues.

## Scope reviewed:
1. The team reviewed the MVP v1 goals: playing without registration, automatic progress saving, visual hints, game selection, and voice-driven progression.
2. The inclusion of Russian translation and English word listening features was also reviewed as part of the MVP v1 scope.

## Implemented increment discussed:
1. The core voice recognition system was successfully transcribing speech during the meeting.
2. **Color Match Increment**: A functioning prototype where users can manually trigger voice listening to select a color (e.g., "green") and paint shapes.
3. **Spell Caster Increment**: A turn-based battle system where the player can cast attack, defense, and healing spells by pronouncing their names, with visual text feedback of the recognized speech.

## Approvals or requested changes:
1. **General Approval**: The customer liked the core ideas of both games and approved the gameplay loop.
2. **Change - Voice Activation**: The customer requested moving away from a constantly listening microphone to a "select-then-speak" mechanic (the user selects a spell/color manually, then activates it via voice).
3. **Change - Color Match Mechanic**: The customer requested adding a multi-select or timer feature to avoid the tedium of pronouncing words for every single tile. The team proposed a 10-second "dipping brush" timer for auto-painting, which the customer approved.
4. **Change - Spell Caster Progression**: The proposed "chest" loot system was rejected; the customer requested that loot drop directly from defeated monsters.
5. **Change - Spell Caster Visuals**: The customer approved sticking to a pixelated, Heroes of Might and Magic visual style rather than a cartoonish one.

## Risks:
1. **Performance/Usability Risk**: Requiring the system to check pronunciation against a massive list of words simultaneously is inefficient. This will be mitigated by the new "select-then-speak" mechanic, reducing the check to only 1-3 words per action.
2. **Resource Risk**: Relying on a single developer for prototyping creates a bottleneck. The customer pointed out that all team members should spend time prototyping in Google AI Studio to increase velocity.

## Action points:
1. Team to implement the "select-then-speak" voice activation logic across games.
2. Team to add a customizable 10-second painting timer to the Color Match game.
3. Team to use AI image generators to convert current game assets into pixel art for Spell Caster.
4. All team members to start prototyping game concepts independently to distribute the development load.
5. Team to send the final MVP v2 backlog priorities and estimates to the customer via Telegram for asynchronous review.

## Resulting Product Backlog or scope changes:
1. **Highest Priority Addition**: Adding word lists (vocabulary management) and dynamically tying them to game actions is the critical priority for the MVP v2 scope.
2. **Scope Reduction**: The "chest" loot system user story will be removed from the backlog.
3. **Estimations**: Two new user stories (Coloring Game and Spell Caster) were estimated at 3 Story Points each.