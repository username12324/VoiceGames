# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0-mvp2] - 2026-06-28

### Added
- "Voice Angler" game prototype: A fishing game introducing a rarity system and reaction-based voice commands.
- "Spell Match-3" game prototype: A match-3 game requiring players to pronounce words correctly to execute powerful spells.
- Core game logic utilities: Implemented algorithms for Levenshtein distance, fuzzy string matching (`fuzzScore`), and weighted randomness for game progression.
- Quality Requirement Tests (QRT): Added Playwright automated tests to ensure Performance (UI updates <= 500ms), Reliability (handling mic permission errors), and Usability (protecting users from invalid speech inputs).
- Automated CI/CD Quality Gates: Configured GitLab CI to run QRTs, unit tests, and deployment health checks automatically on every branch push.

### Changed
- Re-architected the core voice recognition mechanic to use a strictly defined "select-then-speak" workflow instead of continuous listening, improving accuracy and reducing browser fatigue.
- Restructured the project directory, moving games into a modular `games/` structure (e.g., `games/color-match`, `games/shared`).

### Fixed
- Stabilized the CI pipeline by running Playwright tests sequentially (`--workers=1`) to prevent local Python HTTP server crashes under concurrent load.
- Repaired JUnit test reporting paths in the CI pipeline so test artifacts are correctly uploaded to GitLab.

## [1.0.0-mvp1] - 2026-06-21

### Added
- Core voice recognition system utilizing the browser's native Web Speech API for accurate speech transcription.
- Text-to-Speech playback functionality.
- "Color Match" game playable demo: Users can manually trigger voice listening to select a color (e.g., "green") and paint shapes.
- "Heroes of Voice & Magic" (Spell Caster) game playable demo: A turn-based battle system where players cast attack, defense, and healing spells by pronouncing their names.
- Immediate visual text feedback of the recognized speech during gameplay.
- Deployment of the MVP v1 web application to GitLab Pages.
