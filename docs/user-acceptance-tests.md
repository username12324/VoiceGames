# User Acceptance Tests (UAT)

This document defines the active end-user-facing User Acceptance Test (UAT) scenarios verified during Sprint 2.

---

## Scenario UAT-1: Color Match — Select and Speak Flow
*   **Traceability:** User Story US-17 / `QR-PERF-01`
*   **Preconditions:** The application is running, and microphone permission has been granted.
*   **Steps:**
    1. Click the "Color Match" button on the main page.
    2. Click a color option button (e.g., **Red**).
    3. Click the roof tile (`#u-roof`) to select it. (The outline should highlight in pink).
    4. Say the word **"red"** into the microphone.
*   **Expected Result:** The roof tile is immediately painted red, the progress bar updates from 0% to a non-zero value, and the microphone status displays `"🖌️ Painting!"`.
*   **Execution Status (Week 4 Review):** 
    - **Status:** **Passed with Requested Changes**.
    - **Notes:** The customer successfully completed the flow but found the countdown brush timer counterintuitive for coloring multiple items. The timer will be removed in favor of a methodical select-then-speak coloring loop.

---

## Scenario UAT-2: Heroes of Voice & Magic — Spell Casting
*   **Traceability:** User Story US-18 / `QR-USAB-01`
*   **Preconditions:** The application is running.
*   **Steps:**
    1. Click the "Heroes of Voice & Magic" button.
    2. Click a spell icon (e.g., **Lightning** or **Fireball**).
    3. Click the microphone button next to the prompt.
    4. Pronounce the target spell name displayed on the screen.
*   **Expected Result:** The game registers the correct word, casts the spell damage/effect on the enemy monster, and triggers the enemy's attack counter-attack.
*   **Execution Status (Week 4 Review):**
    - **Status:** **Passed with UX Improvements**.
    - **Notes:** The customer successfully cast spells. Feedback requested adding English translations/descriptions next to the spell buttons and fixing the bouncing microphone indicator position.

---

## Scenario UAT-3: Voice Angler — Cast & Pull
*   **Traceability:** `QR-USAB-01` / Rarity System
*   **Preconditions:** The application is running.
*   **Steps:**
    1. Click the "Voice Angler" button.
    2. Click the water surface to cast the bait line.
    3. Wait for a fish to bite the bait (marked by visual cue / collision).
    4. Click the bobber and say the displayed target word before the rarity timer runs out (e.g., Common fish gives 7 seconds, Legendary gives less).
*   **Expected Result:** The fish is successfully caught, logged in the fisherman's journal, its rarity is highlighted, and the player earns points.
*   **Execution Status (Week 4 Review):**
    - **Status:** **Passed with Visual Improvements**.
    - **Notes:** The customer caught fish and approved the loop. Requested shifting the pier graphic to a boat above the waves to prevent the fish path line from overlapping the pier.
