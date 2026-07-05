# Architecture Quality Requirements

This document defines the core quality requirements for the Voice Games platform, following the ISO/IEC 25010 standard. Each requirement is measurable and linked to an automated Quality Requirement Test (QRT).

## 1. Time Behavior (Performance Efficiency)
*   **ID:** `QR-PERF-01`
*   **ISO/IEC 25010 Sub-characteristic:** Performance Efficiency -> Time Behavior
*   **Measurable Scenario:** When the Web Speech API successfully recognizes and returns a spoken phrase from the user, the core game loop must update the UI state within 500 milliseconds.
*   **Rationale:** Voice-controlled arcade games rely on rapid feedback. If the visual response is delayed after a successful voice command, children may think the system failed to hear them and repeat the phrase, leading to user frustration and broken game loops.
*   **Traceability:** Voice validation logic, Core UI rendering loop (Color Match, Heroes, Voice Angler).
*   **QRT Linkage:** Verified by `QRT-PERF-01` (see `quality-requirement-tests.md`).

## 2. Fault Tolerance (Reliability)
*   **ID:** `QR-REL-01`
*   **ISO/IEC 25010 Sub-characteristic:** Reliability -> Fault Tolerance
*   **Measurable Scenario:** If the application attempts to initialize the Web Speech API but encounters a `NotAllowedError` (microphone blocked) or `NotSupportedError` (unsupported browser), the application must not crash or freeze. Instead, it must intercept the error and display a graceful UI fallback message instructing the user to check their browser permissions or switch browsers.
*   **Rationale:** Microphone permission issues are the most frequent point of failure in web-based voice applications. Handling these exceptions gracefully is critical to ensure the application remains stable and the user understands how to fix the issue.
*   **Traceability:** Microphone initialization module, Game boot sequence.
*   **QRT Linkage:** Verified by `QRT-REL-01` (see `quality-requirement-tests.md`).

## 3. User Error Protection (Usability)
*   **ID:** `QR-USAB-01`
*   **ISO/IEC 25010 Sub-characteristic:** Usability -> User Error Protection
*   **Measurable Scenario:** During an active "select-then-speak" listening phase (e.g., a 10-second timer to cast a spell), if the Web Speech API returns an unrecognized or incorrect string of words, the system must ignore the invalid input, keep the microphone active, and allow the timer to continue without throwing an unhandled exception or prematurely failing the game state.
*   **Rationale:** The target audience consists of children practicing English. Mispronunciations or background noise will frequently trigger incorrect string matches. The system must protect the user from being heavily penalized for a single mispronunciation by allowing them to try again seamlessly within the allotted time.
*   **Traceability:** Match-3 spell validation, Color Match multi-select timer, Voice Angler rarity timer.
*   **QRT Linkage:** Verified by `QRT-USAB-01` (see `quality-requirement-tests.md`).

## Architecture Decision Records (ADRs) Traceability

The following Architecture Decision Records (ADRs) document the key technical decisions that support our Quality Requirements:

- **ADR-001: Use Browser-Native Web Speech API**
  - *Supports:* Privacy/Security (no backend data storage), Performance Efficiency (instant local feedback).
  - *Link:* [docs/architecture/adr/001-use-browser-native-speech-api.md](architecture/adr/001-use-browser-native-speech-api.md)

- **ADR-002: Client-Side State Management via LocalStorage**
  - *Supports:* Usability (zero friction onboarding, no registration), Reliability (works offline).
  - *Link:* [docs/architecture/adr/002-client-side-localstorage-state.md](architecture/adr/002-client-side-localstorage-state.md)

- **ADR-003: Select-then-Speak Interaction Pattern**
  - *Supports:* Usability (prevents cognitive fatigue and false positives), Performance Efficiency (reduces processing load).
  - *Link:* [docs/architecture/adr/003-select-then-speak-interaction-pattern.md](architecture/adr/003-select-then-speak-interaction-pattern.md)