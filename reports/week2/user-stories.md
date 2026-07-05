# Voice Games: User Stories

## User Roles / Personas
* **Child:** The primary end-user playing the games to practice English pronunciation.
* **Parent / Tutor:** The secondary user monitoring the child's progress and selecting learning materials.

## Initial proposed MVP v1 scope
* US-01
* US-02
* US-03
* US-04
* US-07
* US-08
* US-12
* US-14

---

## US-01: Select a Game

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want to choose a game from the main menu,
so that I can play the game I like.

### Notes and constraints
The menu should feature simple square icons for easy navigation.

---

## US-02: Listen to English Words

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want to click an English word and hear its pronunciation,
so that I know how it should sound.

### Notes and constraints
Must use the browser's native Text-to-Speech API.

---

## US-03: Listen to Russian Translations

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want to click a Russian translation and hear it spoken,
so that I understand the meaning of the word.

### Notes and constraints
Must use the browser's native Text-to-Speech API with Russian language support.

---

## US-04: Progress by Speaking

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want to pronounce words correctly to continue the game,
so that I practice speaking English.

### Notes and constraints
This is the core "forced pronunciation" mechanic. Progress must be physically blocked until the word is spoken. Recognition relies on browser native Web Speech API and Levenshtein distance comparison.

---

## US-05: Get Pronunciation Feedback

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want to receive feedback after speaking a word,
so that I know whether I pronounced it correctly.

### Notes and constraints
Visual feedback (e.g., green checkmarks or changing colors).
Upgraded to "Must Have" during the Week 2 customer meeting, as the customer clarified that phrase validation is a key element of the product

---

## US-06: Practice Words and Phrases

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want to practice both words and phrases,
so that I improve my speaking skills.

### Notes and constraints
MVP will focus on single words first, phrases can be added as complexity increases.
Upgraded to "Must Have" during the Week 2 customer meeting, as the customer clarified that phrase validation is a key element of the product

---

## US-07: Use Visual Hints

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want to see hints showing which words I have already pronounced,
so that I know what to say next.

### Notes and constraints
Includes the sentence-hint mechanic discussed with the customer (e.g., words change color as they are spoken).

---

## US-08: Save Progress Automatically

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want my progress to be saved automatically,
so that I can continue later.

### Notes and constraints
Must be stored locally in the browser's Local Storage. No backend database.

---

## US-09: Choose a Vocabulary List

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child (or Parent),
I want to choose a word list,
so that I can learn vocabulary that matches my level.

### Notes and constraints
For MVP v1, a default pre-defined list might be used to save development time.
Upgraded to "Must Have" during the Week 2 customer meeting, as the customer clarified that phrase validation is a key element of the product.

---

## US-10: View Learning Progress

**Requirement status:** Active
**MoSCoW priority:** Should Have

As a parent,
I want to see my child’s learning progress,
so that I can monitor improvement.

### Notes and constraints
Requires a UI screen to aggregate data from Local Storage.
Upgraded to "Should Have" during the Week 2 customer meeting based on stakeholder feedback.

---

## US-11: Export Progress Report

**Requirement status:** Active
**MoSCoW priority:** Could Have

As a parent,
I want to download a progress report,
so that I can review my child’s learning.

### Notes and constraints
Customer suggested downloading a CSV file (Word, Translation, Frequency).

---

## US-12: Play Different Games

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want multiple pronunciation games,
so that learning remains fun and engaging.

### Notes and constraints
Scope is 10 games developed independently and linked via the main menu.

---

## US-13: Increase Difficulty

**Requirement status:** Active
**MoSCoW priority:** Should Have

As a child,
I want the games to become more challenging,
so that I continue improving.

### Notes and constraints
Difficulty scaling mechanics per game.

---

## US-14: Play Without Registration

**Requirement status:** Active
**MoSCoW priority:** Must Have

As a child,
I want to start playing without creating an account,
so that I can begin learning immediately.

### Notes and constraints
Strict privacy constraint: no logins, no user accounts.

---

## US-15: Earn Rewards

**Requirement status:** Active
**MoSCoW priority:** Could Have

As a child,
I want to earn stars, badges, or achievements,
so that I feel motivated to keep practicing.

### Notes and constraints
Nice-to-have gamification feature if time permits after the core 10 games are stable.

---

## US-16: Non-Speech Engaging Actions

**Requirement status:** Active
**MoSCoW priority:** Should Have

As a child, 
I want some actions in the game to not require pronouncing any words, 
so that I don't constantly speak and the game remains engaging.

### Notes and constraints
Requested by the customer to prevent cognitive fatigue during extended play sessions. Games must incorporate minor arcade mechanics between pronunciation tasks to balance the pacing.