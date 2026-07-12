# Sprint 3 Retrospective (Week 5)

## What went well
- We successfully delivered the MVP v2.1 increment, migrating to a generic parsing system for words/sentences.
- Architecture documentation was successfully completed. Alisa created highly detailed PlantUML diagrams for Static, Dynamic, and Deployment views.
- The Sprint Review meeting with the customer was very productive and yielded highly actionable UX feedback for our games (like Voice Angler and Spell Match-3).

## What did not go well
- **Conceptual misalignments**: We spent time coding a strict separation between "words" and "sentences" only to find out the customer found this restrictive and unintuitive. We had to refactor this logic.
- **Architectural friction**: We struggled initially to explain our "frontend-only" architecture during the review, realizing late that client-side SPA architectures still require formal documentation.
- **Deployment issues**: We discovered our initial hosting solution was blocked outside of the Russian Federation, preventing some users from testing the MVP.

## What you changed compared to the previous Sprint based on the previous Sprint Retrospective
- **Version Control Strategy**: We stopped treating every sprint as a major version bump, and successfully used a minor release version (MVP v2.1) to correctly map our progress to SemVer while satisfying Assignment 5 requirements.
- **Feedback Collection**: We moved from passive testing to actively recording and analyzing the Sprint Review transcript to extract structured feedback points.

## Action points (Process improvements for the next Sprint)
- **Action Point 1 (Infrastructure)**: Prioritize migrating our hosting to GitLab Pages early in the next sprint to resolve accessibility issues immediately.
- **Action Point 2 (Development Flow)**: Focus on prototyping interactive mechanics first (e.g., clickable fish, sentence-power attacks) before investing time in visual polish (animations).
- **Action Point 3 (Architecture)**: Write Architecture Decision Records (ADRs) *before* implementing the technical choices, rather than documenting them retroactively.
