# Voice Games - Assignment 5 Report (MVP v2.1)

**Project Name:** Voice Games  
**Description:** A frontend-only web application (HTML/JS/CSS) designed to help children practice English pronunciation using the browser's native Web Speech API and Text-to-Speech API.

---

## 1. Scope & Sprint Planning
- **Sprint Goal:** Implement MVP v2.1 focusing on generic word/sentence parsing logic, adding TTS audio feedback to word lists, and establishing comprehensive architectural documentation.
- **Sprint Dates:** 29.06.2026 - 05.07.2026
- **Short Scope Summary:** This sprint focused on resolving technical debt by decoupling hardcoded word/sentence logic into a generic handling system, enhancing the Word Lists with clickable TTS pronunciation, and fully documenting the system's architecture (Static, Dynamic, and Deployment views) and ADRs.
- **Total Sprint Size:** 61
- **Links to Backlog & Planning:**
  - **Product Backlog Board/View:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/boards)
  - **Sprint Backlog Board/View:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/boards?milestone_title=Sprint%203)
  - **Sprint 3 Milestone:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/milestones/3)

---

## 2. Delivered Product & Documentation
- **Summary of Delivered MVP v2.1 Changes:**
  - **[Refactor]** Decoupled "words" and "sentences" into a generic handling system for flexible game sequences.
  - **[Feature]** Added text-to-speech pronunciation playback when clicking on items in the Word Lists.
  - **[Architecture]** Documented frontend architecture views (Static, Dynamic, Deployment) and Configuration Management.
- **Live Deployed Product / Runnable Artifact:** [Link](https://vg-mvp-ff7595.pages.pg.innopolis.university/)
- **Run/Access Instructions:** [Run / Access Instructions](../../README.md#run--access-instructions)
- **Project Roadmap:** [docs/roadmap.md](../../docs/roadmap.md)
- **Changelog:** [CHANGELOG.md](../../CHANGELOG.md)
- **SemVer Release (MVP v2.1):** [v2.1.0-mvp2](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/releases/v2.1.0-MVP2)
- **Public Sanitized Demo Video (under 2 mins):** [Link on Google Drive](https://drive.google.com/file/d/1mlpB_EBbEg8zs_LQKoTRV7OaARRRH7ON/view?usp=sharing)

---

## 3. Customer Feedback & Response
- **Feedback not addressed in this Sprint:** Enhancements for *Voice Angler* (interactive fish), *Heroes of Voice & Magic* (sentence power mechanic), and *Spell Match-3* animations were discussed but deliberately deferred to Sprint 4 (MVP v3) to prioritize the architecture documentation and core sentence parsing logic.

### Customer Feedback Response Table
| Feedback point | Resulting PBI or issue | Status | Response |
|---|---|---|---|
| Ability to hear pronunciation when clicking words in the Word List | [Issue #39](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/39) | Done | Added TTS click handlers to word list items. |
| Stop hardcoding differences between words and sentences; use generic handling (e.g. Doodle Jump word-by-word style) | [Issue #38](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/38) | Done | Refactored core parsing logic to decouple and split sentences generically. |
| Missing/fast animations and illogical sentences in Spell Match-3 | Deferred | To Do | Logged to backlog for Sprint 4. |
| Interactive bait and traffic-based fish mechanics in Voice Angler | Deferred | To Do | Logged to backlog for Sprint 4. |
| Tie attack power to pronunciation of the correct sentence word in Heroes of Voice & Magic | Deferred | To Do | Logged to backlog for Sprint 4. |

---

## 4. Software Architecture & ADRs
- **Architecture Main Entry:** [docs/architecture/README.md](../../docs/architecture/README.md)
- **Architectural Views:**
  - **Static View (Component Diagram):** [Link](../../docs/architecture/static-view/component-diagram.puml)
  - **Dynamic View (Sequence Diagram):** [Link](../../docs/architecture/dynamic-view/sequence-diagram.puml)
  - **Deployment View (Deployment Diagram):** [Link](../../docs/architecture/deployment-view/deployment-diagram.puml)
- **Architecture Decision Records (ADRs):** [ADR Directory](../../docs/architecture/adr/)
- **Architecture Summary:** The architecture is a frontend-only Single Page Application (SPA) utilizing HTML, CSS, and Vanilla JavaScript. It leverages the browser's native Web Speech API for voice recognition and Text-to-Speech synthesis without backend dependencies. Local Storage is utilized for client-side state management and progress tracking.
- **Quality Requirements & Architecture Link:** The architecture directly supports our **Usability** and **Performance** quality requirements (ISO/IEC 25010) by keeping all voice processing on the client side, ensuring zero network latency during speech recognition. The modular Component structure (Static View) ensures **Maintainability** by separating game logic from API interfaces.

---

## 5. Development Process & Configuration Management
- **Development Process Document:** [docs/development-process.md](../../docs/development-process.md)
  This maintained artifact formally documents our shared development process and configuration-management rules:
  - **Scrum Cadence & Backlogs:** Defines our weekly Sprints, Product/Sprint backlog separation, and clear entry criteria for Work Statuses (`To Do`, `Ready`, `In Progress`, `Review`, `Done`).
  - **Traceability:** Enforces strict linking from stable user-story IDs to GitLab issues, MRs, Sprint milestones, CI test evidence, and releases.
  - **Git & Review Workflow:** Specifies a protected `main` branch workflow with short-lived feature/fix/docs branches and mandatory MR reviews (illustrated via a Mermaid `gitGraph`).
  - **Configuration Management:** Controls product source files, shared game logic, tests, CI/CD pipelines, and maintained documentation. Ensures reproducible environment baselines (npm lockfile, Chrome/Firefox) and prevents secrets from being committed.
  - **CI/CD Quality Gates & Release:** Enforces Jest unit tests, Playwright QRTs, Lychee link checking, and automatic GitLab Pages deployment on `main`. Releases are tagged using SemVer-style increments (e.g., `v2.1.0-mvp2`).
- **Hosted Documentation Site:** [Link](https://vg-mvp-ff7595.pages.pg.innopolis.university/docs/index.html)

---

## 6. Quality Assurance, Testing & CI
- **Definition of Done:** [docs/definition-of-done.md](../../docs/definition-of-done.md)
- **Quality Requirements:** [docs/quality-requirements.md](../../docs/quality-requirements.md)
- **Quality Requirement Tests:** [docs/quality-requirement-tests.md](../../docs/quality-requirement-tests.md)
- **Testing Documentation:** [docs/testing.md](../../docs/testing.md)
- **User Acceptance Tests:** [docs/user-acceptance-tests.md](../../docs/user-acceptance-tests.md)
- **Testing & CI Status Summary:** Core parsing modules and generic handlers are covered by Jest unit tests. Playwright E2E tests validate the UI flow for the word lists TTS feature. CI pipeline strictly enforces these coverage and passing rates.
  - **Link to CI Pipeline:** [GitLab Pipelines](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/pipelines)
  - **Link to Latest Protected-Branch CI Run:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/pipelines/49098)

---

## 7. Review, UAT & Reflection Deliverables
- **Sprint Review Summary:** [sprint-review-summary.md](sprint-review-summary.md)
- **Sprint Review Transcript:** [sprint-review-transcript.md](sprint-review-transcript.md)
- **Reflection Report:** [reflection.md](reflection.md)
- **Sprint Retrospective:** [retrospective.md](retrospective.md)
- **LLM Usage Report:** [llm-report.md](llm-report.md)
- **Public Sanitized UAT Results Summary:**
  - UAT-01 - TTS Pronunciation in Word Lists: **Passed**
  - UAT-02 - Generic Sentence Parsing in Game Initialization: **Passed**

---

## 8. Current Status & Next Steps
- **Current Product Status:** The MVP v2.1 increment successfully standardizes how text content is parsed across all games and introduces interactive audio feedback to word lists. The system architecture is now formally documented.
- **Next Steps:** Proceed to Sprint 4 (MVP v3) to revamp the gameplay mechanics of Voice Angler and Heroes of Voice & Magic, based on the customer's Sprint 3 feedback.

---

## 9. Contribution Traceability
| Team Member | Assigned Issues | PRs/MRs Created | Technical Activities (Review, QA, Docs, Architecture, Automation) |
|---|---|---|---|
| Kir Tormasov (Team Lead) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/40) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/64) | Led customer review, managed CI/CD pipeline, and defined deployment architecture. |
| Robert Kharisov (Product Owner) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/42) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/70) | Authored Sprint documentation, compiled feedback, roadmap, and Sprint Review Summary. |
| Timur Rasulov (Lead Coder) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/39) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/65) | Implemented generic word/sentence parsing and TTS logic for word lists. |
| Alisa Saraikina (UX Designer) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/43) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/60) | Authored Architecture diagrams (Static, Dynamic, Deployment) and updated UI components. |
| Ibragim Bulatov (QA/Tester) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/44) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/68) | Executed UAT scenarios, verified TTS functionality, and reviewed MRs. |


---

## 10. Appendix: Screenshots
- **Sprint Milestone:** [Link](images/sprint-milestone.png)
- **Board or Project Workflow View:** [Link](images/board.png)
- **Latest Protected-Default-Branch CI Run:** [Link](images/ci-run.png)
- **SemVer Release:** [Link](images/semver-release.png)
- **Example Reviewed Issue-Linked PR/MR:** [Link](images/reviewed-mr.png)
- **Hosted Docs Site:** [Link](images/hosted-docs-site.png)
- **Product Access Evidence:** [Link](images/product-access.png)

---

## 11. Deviations
- **Documented Deviations:** **Semantic Versioning / Release Naming Deviation:** The assignment rubric refers to this increment as "MVP v2". However, because the team had already delivered and tagged the Week 4 sprint as MVP v2 (`v2.0.0-mvp2`), we are naming this deliverable **MVP v2.1** (Tag: `v2.1.0-mvp2`). This deviation maintains strict chronological SemVer compliance while still fully satisfying the assignment's MVP v2 scope requirements.
