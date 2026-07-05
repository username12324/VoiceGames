# Testing Strategy and Documentation

This document describes the testing layers, coverage requirements, CI/CD pipeline integration, and automated QA gates implemented in the Voice Games repository.

---

## 1. Testing Layers

We divide our automated testing into two main layers: Unit Testing (for algorithmic utilities) and End-to-End/Integration Testing (using Playwright to verify UI states and Web Speech API interactions).

### Unit Tests
*   **Objective:** Verify core logic utilities that operate independently of browser Web Speech API wrappers.
*   **Critical Modules:** [games/shared/utils.js](../games/shared/utils.js) which provides:
    - `levenshtein`: Case-insensitive Levenshtein distance calculations.
    - `fuzzScore`: Double-ratio distance metric to score pronunciation similarity.
    - `phraseMatches`: Matches recognized words against target phrases and fallback alternatives.
    - `rarityPoints`: Rarity score calculator.
    - `pickFish`: Weighted random choice algorithm for fish spawning.
    - `findMatches`: Grid-matching engine for the Spell Match-3 board.
*   **Test Suite Location:** [tests/unit/game-logic.test.js](../tests/unit/game-logic.test.js)
*   **Execution Command:** 
    ```bash
    npm run test:unit
    ```

### Integration & Quality Requirement Tests (QRTs)
*   **Objective:** Simulate user interactions (clicks, timing) and speech events via mocked `SpeechRecognition` to verify state transitions and performance thresholds.
*   **Test Suite Location:** [tests/qrt/](../tests/qrt/)
    - `performance.spec.js`: Verifies `QR-PERF-01` (UI updates <= 500ms).
    - `fault-tolerance.spec.js`: Verifies `QR-REL-01` (microphones exceptions intercepted without crashes).
    - `user-error-protection.spec.js`: Verifies `QR-USAB-01` (gibberish speech does not break/freeze active timers).
*   **Execution Command:** 
    ```bash
    npx playwright test tests/qrt/ --workers=1
    ```

---

## 2. Test Coverage & CI/CD Integration

All tests run automatically in the GitLab CI/CD pipeline on commit pushes to any branch.

- **Job Configuration:** Set up in [.gitlab-ci.yml](../.gitlab-ci.yml).
- **Unit Coverage:** The `unit-tests` job tracks test line coverage on critical modules using Jest.
  - **Minimum Threshold:** Critical modules must maintain at least 30% line coverage (currently exceeded by 100% coverage on `utils.js`).
- **Reports:**
  - Playwright HTML reports are saved as CI artifacts.
  - Playwright JUnit reports are output to `junit-qrt.xml` and uploaded as test reports.

---

## 3. Additional QA Checks

To satisfy quality gates beyond traditional unit/integration testing:

- **Selected QA Check:** **HTTP Status Check (`http-status-check`)**
  - **Stage:** `qr-test` (in CI)
  - **Risk Addressed:** Deployment accessibility risk. Ensures the production build on GitLab Pages initializes and serves main pages successfully without returning HTTP errors.
  - **Execution:** Runs curl commands targeting `$CI_PAGES_URL`.
  - **Limitations:** Only checks HTTP headers and accessibility of the index page; it does not dynamically navigate game features.
