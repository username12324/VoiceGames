# Voice Games - Assignment 4 Report

**Project Name:** Voice Games  
**Description:** A frontend-only web application (HTML/JS/CSS) designed to help children practice English pronunciation using the browser's native Web Speech API and Text-to-Speech API.  
**License:** [LICENSE](../../LICENSE)

## 1. Scope & Sprint Planning
- **Sprint Goal:** Implement the "select-then-speak" voice activation logic across the games, introduce new game prototypes (Voice Angler and Spell Match-3) to progress towards the 10-game goal, and address previous customer feedback regarding voice mechanics and English/Russian word integration. We also focused on setting up quality requirements and CI/CD pipelines.
- **Sprint Dates:** 23.06.2026 - 28.06.2026
- **Short Scope Summary:** Delivery of "select-then-speak" logic in Color Match and Heroes of Voice and Magic. Introduction of two new playable prototypes: Voice Angler and Spell Match-3. Implementing QA testing and CI/CD pipeline automation.
- **Product Backlog Board/View:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/boards)
- **Sprint Backlog Board/Table:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/boards?milestone_title=Sprint%202)
- **Assignment 4 Sprint Milestone:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/milestones/2#tab-issues)
- **Total Sprint Size:** 49 Story Points

## 2. Delivered Product & Documentation
- **Summary of Delivered Product Changes:**
  - **Color Match Increment:** Updated with the "select-then-speak" feature and an active timer mechanic forcing players to speak repeatedly to keep the brush active.
  - **Heroes of Voice and Magic Increment:** Reimplemented with "select-then-speak" logic, updated pixel-art visuals, and enemy attack mechanics.
  - **Voice Angler Increment:** A new fishing game where players cast a bait and use voice commands to pull out fish within a specific time limit based on fish rarity.
  - **Spell Match-3 Increment:** A new match-3/word-tree game where players navigate a tree of words and use voice commands to clear paths.
- **Deployed Product / Runnable Artifact:** [Link](https://vg-mvp-ff7595.pages.pg.innopolis.university/)
- **Run/Access Instructions:** [Run / Access Instructions](../../README.md#run--access-instructions)
- **Roadmap:** [docs/roadmap.md](../../docs/roadmap.md)
- **SemVer Release (Assignment 4 Sprint Increment):** [v2.0.0-mvp2](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/releases/v2.0.0-mvp2)
- **Changelog:** [CHANGELOG.md](../../CHANGELOG.md)

## 3. Customer Feedback & Response
- **Feedback not addressed:** We intentionally deferred the feature to load custom user images via URLs due to technical risks and reliability concerns if external sites go down. This was agreed with the customer to be moved to a "Could Have" priority.

### Customer Feedback Response Table
| Feedback point | Resulting PBI or issue | Status | Response |
|---|---|---|---|
| The customer found the timer mechanic in Color Match counterintuitive and preferred a methodical pace. | [Issue #32](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/32) | Done | Removed the timer and fully implemented the "select-then-speak" flow. |
| The customer requested English word translations and spell effect descriptions in Heroes of Voice and Magic. | [Issue #33](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/33) | Done | Added English translations and descriptive texts for spell effects below Russian spells. |
| The customer requested grouping enemies in a triangle formation to save screen space. | [Issue #33](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/33) | Done | Adjusted the CSS grid layout for enemies into a cohesive triangle formation. |
| The customer noticed visual overlap issues with the pier and fish paths in Voice Angler. | [Issue #34](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/34) | Done | Replaced the pier asset with a boat positioned safely above the wave interaction lines. |

## 4. Quality Assurance, Testing & CI
- **Definition of Done:** [docs/definition-of-done.md](../../docs/definition-of-done.md)
- **Quality Requirements:** [docs/quality-requirements.md](../../docs/quality-requirements.md)
  - **Quality Model & ISO/IEC 25010 Sub-characteristics:** We utilize the ISO/IEC 25010 quality model, specifically focusing on **Performance Efficiency** (Time Behavior - ensuring UI updates within 500ms), **Reliability** (Fault Tolerance - gracefully handling microphone exceptions), and **Usability** (User Error Protection - safeguarding the game state from random unrecognized speech).
- **Quality Requirement Tests:** [docs/quality-requirement-tests.md](../../docs/quality-requirement-tests.md)
- **Testing Documentation:** [docs/testing.md](../../docs/testing.md)
- **User Acceptance Tests:** [docs/user-acceptance-tests.md](../../docs/user-acceptance-tests.md)
- **Testing Status Summary:** Critical modules (like `utils.js` governing game logic and math) are covered by Jest unit tests with 100% line coverage (well above the 30% minimum). Integration and Quality Requirement E2E tests are handled via Playwright.
  - **Links to Unit Tests:** [tests/unit/game-logic.test.js](../../tests/unit/game-logic.test.js)
  - **Links to Integration Tests:** [tests/qrt/](../../tests/qrt/)
  - **Links to Automated Quality Requirement Tests:** [tests/qrt/](../../tests/qrt/)
- **CI Pipeline & Protection:**
  - **CI Pipeline:** [GitLab Pipelines](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/pipelines)
  - **Latest Protected-Branch CI Run:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/pipelines/47796)
  - **Branch Protection/Rules Evidence:** Refer to screenshot in Appendix.
  - **Screenshots/Report Links:** Refer to Appendix.
- **Governance Statement:** The automated tests, CI checks, quality requirement tests, and the updated Definition of Done defined in Assignment 4 are maintained project assets. They will govern later project work by serving as mandatory quality gates; any future code changes must pass these automated checks before being merged, ensuring the product quality does not regress as new features are added.

## 5. Review & Reflection Deliverables
- **Customer Review Summary:** [reports/week4/customer-review-summary.md](customer-review-summary.md)
- **Customer Review Transcript:** [reports/week4/customer-review-transcript.md](customer-review-transcript.md) *(Transcript is published with customer's permission)*.
- **Sprint Retrospective:** [reports/week4/retrospective.md](retrospective.md)
- **Week 4 Reflection:** [reports/week4/reflection.md](reflection.md)
- **LLM Usage Report:** [reports/week4/llm-report.md](llm-report.md)
- **Public Sanitized Demo Video:** [Link](https://drive.google.com/file/d/1ieKfqTPgpsKIjkmd6z1YmJJgRqRVjHOw/view?usp=sharing)

### UAT Results Summary
- **Color Match:** Tested new timer mechanic; Failed/Needs product changes. The customer found it redundant and preferred a meditative pace.
- **Heroes of Voice and Magic:** Passed but needs UX improvements. The customer successfully cast spells but identified issues with missing translations, unclear effects, and UI element bouncing.
- **Voice Angler:** Passed but needs visual improvements. The customer successfully caught fish and liked the rarity system, but identified visual overlap issues with the pier.
- **CI Pipeline Issue:** Identified that a bypassed failing test in CI needs to be fixed to ensure deployment stability.

## 6. Current Status & Next Steps
- **Current Product Status:** Live MVP web application deployed via GitLab Pages with 4 playable game prototypes ("Color Match", "Heroes of Voice and Magic", "Voice Angler", and "Spell Match-3"). The "select-then-speak" logic has been successfully integrated.
- **Next Steps:** 
  - Implement progress tracking and dynamic word list features across the games.

## 7. Contribution Traceability

| Team Member | Assigned Issues | PRs/MRs Created | Review / QA / Docs Activity |
|---|---|---|---|
| Kir Tormasov (Team Lead) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/28) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/36) | Reviewed and approved work, led customer interview, worked mostly on the CI pipeline |
| Robert Kharisov (Product Owner) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/31) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/43) | Prioritized backlog, worked with docs, authored testing and QRT documentation, collected customer feedback into a summary |
| Timur Rasulov (Lead Coder) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/34) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/48) | Worked on games, fixed bugs, implemented all code features requested by customer |
| Alisa Saraikina (UX Designer) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/30) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/58) | Made the presentation, created SVG assets for Heroes of Voice and Magic |
| Ibragim Bulatov (QA/Tester) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/36) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/55) | Tested games, found bugs, gathered testing reports |

## 8. Appendix: Screenshots
- **Sprint Milestone:** [Link](images/sprint-milestone.png)
- **Latest Protected-Default-Branch CI Run:** [Link](images/ci-run.png)
- **Branch Protection or Rules Evidence:** [Link](images/branch-protection.png)
- **Coverage or Test Report:** [Link](images/coverage-report.png)
- **Additional QA Check Result:** [Link](images/qa-check-result.png)
- **SemVer Release:** [Link](images/semver-release.png)
- **Example Reviewed Issue-Linked PR/MR:** [Link](images/reviewed-mr.png)
- **Product Backlog / Sprint Backlog:** [Link](images/sprint-backlog.png)
