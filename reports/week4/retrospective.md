# Sprint Retrospective

## What went well
- **Successful Implementation of New Mechanics**: The team successfully integrated the "select-then-speak" voice activation logic across the games, directly addressing feedback from the previous sprint.
- **Expanded Game Roster**: We successfully delivered and demonstrated four playable game prototypes (Color Match, Heroes of Voice & Magic, Voice Angler, and Spell Mastery), making significant progress toward the 10-game goal.
- **Positive Customer Engagement**: The customer responded very positively to the new game concepts, praising the "Voice Angler" gameplay loop and strongly approving the proposed "Flight Control Simulator" concept.

## What did not go well
- **CI Pipeline Instability**: The CI pipeline automation is currently failing due to a game-dependent test. The team had to temporarily bypass the test to allow deployment, which introduced technical debt and weakened our quality gates.
- **UX Misalignments**: Certain UI/UX decisions did not align with the customer's expectations. The timer mechanic in Color Match was found to be counterintuitive and redundant. Additionally, "Heroes of Voice & Magic" lacked English translations, and some visual elements were poorly placed or overlapped in "Voice Angler".
- **Feature Complexity Risks**: Discussions around loading custom images via external URLs revealed significant reliability and technical risks, forcing us to defer the feature.

## What you changed compared to the previous Sprint based on the previous Sprint Retrospective
- **Adopted "Select-then-Speak"**: Based on the Week 3 retrospective action point to "Transition from a constantly listening microphone to a 'select-then-speak' mechanic", we successfully implemented and demonstrated this flow in the current sprint to improve usability and system performance.
- **Increased Prototyping Output**: The team distributed the prototyping load better, resulting in the successful delivery of two entirely new game prototypes (Voice Angler and Spell Mastery) within a single sprint.

## Action points (Process improvements for the next Sprint)
- **Prioritize System Infrastructure**: Focus on building shared infrastructure (like the dynamic wordlists and progress tracking API) early in the sprint so it can be easily integrated into both existing and new games without causing regressions.
- **Accelerate Game Prototyping**: Streamline our brainstorming and prototyping process to rapidly test and iterate on new game ideas, ensuring we stay on track to reach the 10-game goal.
