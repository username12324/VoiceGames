# Sprint 3 Review Summary (Week 5)

## Meeting Details
- **Date:** 04.07.2026
- **Participants:** 
  - Kir Tormasov (Team member 1 / Scrum Master)
  - Robert Kharisov (Team member 2 / Product Owner)
  - Customer
- **Sprint Goal Reviewed:** Showcase MVP v2 increment, including new word list structures, progress saving, and new game prototypes (Voice Angler, Spell Match-3), and gather feedback for further development.

## Delivered MVP v2 Increment
- **Word Lists & Progress:** Introduced thematically categorized word lists (Fantasy, Animals, Food, Space) and basic progress tracking/counters.
- **Color Match:** Updated with new features and sentence integration.
- **Heroes of Voice & Magic:** Showcased current attack mechanics with voice input.
- **Voice Angler (Fishing Game):** Showcased the new prototype where fish swim towards the boat/bait.
- **Spell Match-3:** Showcased the matching mechanics using sentences.
- **Picture Sentence:** The team decided to remove this prototype to focus on purely list-based mechanics instead of image-dependent mechanics.

## Customer Feedback Summary
- **Word Lists:** The customer requested the ability to click on words/sentences within the list to hear their pronunciation before playing the games. They advised not to worry about profanity filtering, as the TTS engine handles it.
- **Sentences vs. Words:** The customer strongly suggested not hardcoding the difference between words and sentences. They proposed a generic handling system where sentences are split into individual words (e.g., a "Doodle Jump" style mechanic where each platform is the next word in the sentence). The system should not dictate what the child learns, but rather provide a generic format.
- **Spell Match-3:** The customer noted that animations after pronouncing words are missing or too fast. They also emphasized that sentences generated or used in games should be logical (e.g., "Wolves hunt in packs" instead of "Wolves climb the trees") to avoid confusing children.
- **Heroes of Voice & Magic:** Discussed a new mechanic where players select an action type, but activate it by pronouncing the correct next word in a sentence. The closer the child gets to the correct word, the stronger the attack and feedback. The customer liked this idea.
- **Voice Angler:** The customer found it counter-intuitive that background fish are unplayable and the player just waits. They suggested making the visible fish playable (placing the bait on their specific lane). The team proposed a mechanic where placing the bait in high-traffic areas increases the chance of catching rare fish.
- **Scope & Future Plans:** The customer advised focusing on creating **new games** with novel voice mechanics rather than just polishing the existing ones, as the current games already give a good idea of the gameplay.

## User Acceptance Testing (UAT) Results Discussed
- *Specific UAT test cases (Pass/Fail) were not explicitly read out as a formal checklist during this session, but the customer organically tested the deployed games on their end and provided real-time UX feedback (as summarized above).*

## Architecture and Quality Requirements Discussion
- **Deployment & Access:** The customer reported that the current hosting is not accessible outside of the Russian Federation. The team confirmed plans to migrate deployment to **GitLab Pages** to resolve this.
- **Architecture:** The team expressed uncertainty about describing the architecture since the app has no backend. The customer clarified that a frontend-only application still has an architecture (e.g., engine, layout, state management) because it satisfies functional requirements. The team will document this frontend architecture accordingly.

## Follow-up Action Items & Product Backlog Updates

**Selected for Sprint 3 (MVP v2.1):**
- **[Refactor]** Decouple "words" and "sentences" into a generic handling system.
- **[Feature]** Add text-to-speech pronunciation playback when clicking on items in the Word Lists.
- **[Architecture]** Document frontend architecture views (Static, Dynamic, Deployment) and Configuration Management.

**Deferred to Sprint 4 (MVP v3) / Future Sprints:**
- **[Enhancement]** Ensure generated/default sentences are logical and contextually appropriate.
- **[Enhancement]** Fix missing/fast animations in Spell Match-3.
- **[Feature]** Implement the "pronounce the correct word in a sentence" mechanic for spell power in Heroes of Voice & Magic.
- **[Enhancement]** Revamp Voice Angler mechanics to make background fish interactive or implement the "traffic-based" catch rate.
- **[Infrastructure]** Ensure CI/CD pipeline deploys the application to GitLab Pages for global accessibility.
- **[Project Scope]** Prioritize the development of new game prototypes for the next sprint over polishing existing ones.
