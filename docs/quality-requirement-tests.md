# Quality Requirement Tests (QRT)

This document maps our architectural quality requirements (defined in `docs/quality-requirements.md`) to their automated test implementations in the repository.

---

## QRT-PERF-01: Time Behavior (Performance Efficiency)
*   **Requirement ID:** `QR-PERF-01`
*   **Automated Test Location:** [Link](../tests/qrt/performance.spec.js)
*   **Test Objective:** Ensure that the UI updates within 500 milliseconds of the Web Speech API successfully returning a matched spoken phrase.
*   **Implementation Details:**
    - Uses Playwright to mock the `SpeechRecognition` constructor and `window.speechSynthesis`.
    - Navigates to `/games/color-match/index.html`.
    - Selects the "Red" color button and clicks the roof tile to select it.
    - Programmatically triggers the `onresult` handler with the correct spoken phrase ("red").
    - Measures the elapsed time from the trigger to when `micStatus` transitions to the `'Painting'` status.
    - Asserts that the elapsed time is less than or equal to 500ms.
    - Asserts that the SVG element's fill color or `dataset.current` property matches the hex value `#ef4444`.

---

## QRT-REL-01: Fault Tolerance (Reliability)
*   **Requirement ID:** `QR-REL-01`
*   **Automated Test Location:** [Link](../tests/qrt/fault-tolerance.spec.js)
*   **Test Objective:** Verify that the system handles microphone permission denials or unsupported browsers gracefully without crashing.
*   **Implementation Details:**
    - Uses Playwright to mock `navigator.mediaDevices.getUserMedia` to reject with a `NotAllowedError`.
    - Mocks `SpeechRecognition` to trigger `onerror({ error: 'not-allowed' })` when started.
    - Navigates to `/games/spell-match3/index.html` and triggers a challenge by clicking two adjacent gems.
    - Clicks the microphone activation button.
    - Asserts that the feedback message element displays `not-allowed` or other user fallback instructions rather than leaving the interface frozen.
    - Asserts that no uncaught JavaScript errors are recorded on the page window (`window._testErrors`).

---

## QRT-USAB-01: User Error Protection (Usability)
*   **Requirement ID:** `QR-USAB-01`
*   **Automated Test Location:** [Link](../tests/qrt/user-error-protection.spec.js)
*   **Test Objective:** Ensure the game continues running, keeps the microphone active, and does not prematurely penalize the user or fail the game state when an incorrect phrase is recognized.
*   **Implementation Details:**
    - Mocks `SpeechRecognition` to return an incorrect, unrecognized string (`'asdfghjkl'`) with low confidence.
    - Navigates to `/games/spell-match3/index.html` and initiates a challenge.
    - Records the initial timer value.
    - Clicks the microphone button to activate recognition.
    - Waits for the mock result to process.
    - Verifies that the timer decreases (game is still active, not paused or crashed) and the spelling challenge panel remains active, allowing subsequent attempts.
    - Asserts that no uncaught exceptions occurred during this flow.
