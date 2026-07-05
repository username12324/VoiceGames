
## 1. Meeting Overview
* **Topic:** Requirements validation, User Stories prioritization, and MVP v1 scope approval.
* **Artifacts Demonstrated:** List of prioritized User Stories (MoSCoW), Figma UI/UX prototype (Main Menu, Game Interface, Settings).

## 2. Discussion Points & Customer Feedback

### **User Stories & Priorities**
* **US-04 (Progress by Speaking):** The customer noted that pronunciation itself is not the primary motivation for a child; the motivation is to "continue playing" the engaging game.
* **US-08 (Save Progress):** The most critical progress metric is tracking how many times a child has pronounced specific words on cards, which defines how often the word will be shown.
* **US-09 (Choose a Vocabulary List):** The customer emphasized the need for custom wordlist uploads and default lists.
* **US-10 / US-11 (Progress Tracking):** Progress UI should be simple, tracking the number of times a word was pronounced correctly/incorrectly or the last time it was pronounced.
* **New Requirement Identified:** The customer requested adding actions in the game that do not require pronouncing words, allowing the child to take breaks from speaking and making the game more engaging.
* **Discarded Ideas:** A proposed feature where an AI plays the game and pronounces words for the child to repeat was discussed but discarded, as it would give children a tool to bypass actual learning.

### **The "Tutor Use-Case" & Phrases**
* The customer confirmed that practicing phrases is a "key element of the game," validating the team's idea to include spatial phrases (e.g., "on the table").
* The current speech recognition engine has not been explicitly tested with long phrases yet, but the engine handles individual words well, and games can split phrases into separate word validations.

## Interface & Prototype Feedback
* **Main Menu Layout:** The customer suggested displaying all games in a scrollable grid rather than using cards, though the team's card approach will be further considered.
* **Microphone Activation:** The customer initially assumed the microphone would only activate when action is required. The team explained that for arcade games like Doodle Jump, continuous activation (or a toggle) is necessary.
* **Game Concept (Apple/Table Image Identification):** The customer advised against a game concept requiring mechanics to upload images and allocate words to specific image areas, citing it as too technically difficult for this stage.
* **Accessibility:** The font text in the prototype was noted as potentially too large; the customer advised testing font sizes directly with children to ensure readability.

## 3. Decisions & Approvals
* **MoSCoW Reprioritization:** The customer explicitly requested changing the priority of several features:
  * US-05 (Get Pronunciation Feedback): Changed to **Must Have**.
  * US-06 (Practice Words and Phrases): Changed to **Must Have**.
  * US-09 (Choose a Vocabulary List): Changed to **Must Have**.
  * US-10 (View Learning Progress): Confirmed as **Should Have**.
* **MVP v1 Scope Approval:** The customer explicitly approved the proposed MVP v1 scope, which includes implementing 1-2 basic games to showcase core mechanics. The approved user stories for MVP v1 are: US-01, US-02, US-03, US-04, US-07, US-08, US-12, US-14.