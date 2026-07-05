
# Week 2 Analysis

## Learning points
During the second week of the project, our team gained valuable experience and improved our workflow in several key areas:
* **Team Roles and Delegation:** We learned how to better distribute responsibilities among team members to maximize efficiency.
* **Customer Communication:** We improved our communication skills during stakeholder interviews, learning how to present our ideas and gather constructive feedback.
* **Task Prioritization:** We gained practical experience in prioritizing project tasks and features effectively to shape a realistic MVP scope.
* **UI/UX Prototyping:** We learned how to work with prototyping software (Figma) to translate abstract requirements into visual user interfaces.
* **Requirements Engineering:** We learned how to properly formulate User Stories from a user's perspective and correctly assign MoSCoW priorities.
* **Handling Feedback:** We improved our ability to process and integrate customer feedback, noting that the customer was highly satisfied with our current application prototype and vision.

## Validated assumptions
Through our technical research and the second customer interview, we validated several critical assumptions:
* **Phrase Practice is Essential:** We assumed that testing phrases (A1-A2 level) alongside single words would provide more value. The customer confirmed this, stating that phrases are a "key element of the game".
* **Continuous Microphone Activation is Required:** We assumed that fast-paced arcade games (like Doodle Jump) require the microphone to be constantly active. The customer validated this approach, recognizing that relying solely on manual button presses for every action would disrupt the gameplay loop.
* **High Importance of Vocabulary Selection:** We assumed choosing vocabulary lists was a secondary feature, but the customer validated its critical importance by elevating US-09 to a "Must Have" priority.

## Needs clarification
Despite the successful meeting, a few technical constraints and design specifics still require clarification moving forward:
* **Speech Engine Limits with Phrases:** While we know the Web Speech API handles single words well, it remains unclear how reliably the Levenshtein distance logic will process 3-4 word phrases in a noisy environment. This needs hands-on technical testing.
* **Accessibility and Font Sizes:** The customer pointed out that the text size in the current prototype might be too large for an arcade game layout. We need to clarify the exact readable font size limits by testing the UI directly with the target audience (children).
* **Complex Game Mechanics:** The customer advised against complex game concepts that require uploading images and mapping words to specific objects (e.g., the "apple on the table" visual game). We need to clarify how to seamlessly integrate spatial phrase testing purely into our simpler arcade-style games.

## Planned response
Based on our learning points and the customer's direct feedback, we plan to implement the following changes for MVP v1:
* **Update Requirements:** We will update `user-stories.md` to reflect the newly agreed MoSCoW priorities, specifically moving US-05, US-06, and US-09 to "Must Have", US-10 to "Should Have". We will also add a new story addressing the customer's request for game actions that do not require speaking.
* **Refine the Figma Prototype:** We will adjust the typography in our UI designs to ensure text is appropriately sized for arcade gameplay. We will also explore the customer's suggestion of displaying games in a scrollable grid rather than isolated cards.
* **MVP v0 Technical Focus:** For our foundational deployment, we will strictly focus on 1 or 2 core arcade games. Our immediate technical response is to establish a working smoke-check of the native browser speech recognition before attempting to scale up to full sentence validation.