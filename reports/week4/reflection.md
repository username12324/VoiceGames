# Week 4 Reflection

## Learning points
During the fourth week of the project, our team gained practical experience with quality automation, CI/CD, and user acceptance testing:
* **UAT and Game Pacing**: Through customer User Acceptance Testing (UAT), we learned that mechanics designed to add urgency (such as the timer in Color Match) can sometimes detract from the desired "meditative" flow of educational games. Constant UAT is vital for tuning game pacing and UX.
* **CI/CD Quality Gates**: We experienced the difficulty of maintaining a stable CI pipeline when automated tests depend heavily on complex game states. Automating Quality Requirement Tests (QRTs) highlighted the need for more robust, isolated test design so that deployment isn't blocked by flaky tests.
* **Feature Feasibility**: Discussing the custom image URL feature with the customer taught us the importance of identifying technical risks early; relying on external uncontrolled URLs introduces significant reliability issues that can break the core game experience.

## Validated assumptions
Through implementation, CI, UAT, and the Sprint Review, we validated and rejected several assumptions:
* **Select-then-speak Mechanic**: We assumed that the "select-then-speak" mechanic would resolve the UX issues associated with continuous microphone listening. This was successfully validated during the Sprint Review, as it worked smoothly across multiple games.
* **Timer in Color Match**: We assumed a timer would make Color Match more engaging. This was rejected by the customer during UAT, as they found it counterintuitive and preferred a slower, methodical pace.
* **Custom Image URLs**: We assumed allowing users to load custom images via URLs would be a highly requested feature. However, upon discussing the technical risks (broken links, external site downtime), we and the customer mutually agreed that this assumption was flawed, and the feature was deferred to a "Could Have" priority.

## Friction and gaps
While delivering the Week 4 increment, we encountered several bottlenecks and technical risks:
* **Technical Risk (CI Pipeline)**: A major point of friction was a failing automated test in the CI pipeline that had to be temporarily bypassed to allow deployment. This represents a significant technical debt and a gap in our quality assurance process.
* **UX/Visual Gaps**: Unresolved UX issues remain in the prototypes. For example, Heroes of Voice & Magic is missing English translations and has a disruptive microphone status indicator. Voice Angler suffers from visual overlap between the pier asset and the fish paths.

## Planned response
- **Implement Progress Tracking and Wordlists**: We will prioritize the implementation of a dynamic vocabulary list system and progress tracking in the browser's `localStorage`. This will allow users to track their practice history across different games and use customized vocabulary sets.
- **Expand Game Portfolio**: We will focus on developing new game concepts and prototypes, continuing our progress toward the project's goal of delivering 10 unique voice-controlled educational games.
