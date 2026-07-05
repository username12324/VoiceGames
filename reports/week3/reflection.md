# Week 3 Reflection

## Learning points
During the third week of the project, our team gained practical experience across several key Agile and development processes:
* **Product Backlog Migration & Refinement:** We learned how to properly migrate our requirements into GitLab Issues, applying labels and organizing them within Milestones to keep track of the MVP scope[cite: 1].
* **Estimation and Sprint Planning:** We gained experience in estimating tasks and planning our Sprint workload realistically, ensuring that UI, logic, QA, and documentation tasks were balanced across the team[cite: 1].
* **Workflow Enforcement:** We successfully enforced a strict MR (Merge Request) review process, ensuring that the Scrum Master and team members verified and approved changes before they were merged into the main branch[cite: 1].
* **MVP v1 Delivery and Customer Review:** We learned how to package our increment into a deliverable state (GitLab Pages) and successfully conducted a Sprint Review with our customer, Danko, gathering actionable feedback on the live product[cite: 1].

## Validated assumptions
Through the deployment of MVP v1 and the Sprint Review, we validated and rejected several key assumptions[cite: 1]:
* **Speech Fatigue is a Real Barrier:** We assumed that forcing the user to speak for every single action would be exhausting and degrade the experience. Customer feedback strongly validated this, leading to the approval of our "select-then-speak" mechanic[cite: 1].
* **Timer Implementation for Pacing:** We assumed that a 10-second timer for coloring tiles in "Color Match" would improve the game's flow compared to voice-commanding every single tile. This decision was confirmed as effective during the review[cite: 1].
* **Simplified Loot Drop Mechanics:** We rejected the assumption that a complex chest-opening system was necessary for "Heroes of Voice & Magic", confirming that direct loot drops from monsters fit the fast-paced rogue-like gameplay loop much better[cite: 1].
* **Visual Direction:** We assumed that an AI-generated pixel art style reminiscent of *Heroes of Might and Magic* would fit the game's tone. The customer approved this visual direction, validating our UI approach[cite: 1].

## Friction and gaps
While delivering MVP v1, we encountered several bottlenecks, technical risks, and unresolved requirements[cite: 1]:
* **Technical Risks with SVG Assets:** We faced a blocking technical issue where SVG files lacked `id` attributes on `path` tags. This process friction temporarily prevented us from implementing dynamic color rendering in the game and required rework[cite: 1].
* **Tooling Friction:** Our workflow was briefly disrupted by a local IDE error (Antigravity failing to initialize the `gitlab-orbit` MCP server), which required us to pause and manually delete configurations to resume development[cite: 1].
* **Missing Scope:** The implementation of dynamic word lists was deferred to stabilize the core speech recognition. This remains a gap in the current build and creates an unresolved requirement for customizable gameplay sessions[cite: 1].

## Planned response
To address the gaps and feedback discovered during the MVP v1 delivery, our team plans the following steps for the next Sprint[cite: 1]:
* **Implement Dynamic Word Lists:** We will prioritize the backlog items related to fetching and integrating word lists to cover the missing scope in MVP v2, linking these tasks directly to our next Milestone[cite: 1].
* **Standardize Asset Pipelines:** We will enforce strict preparation guidelines for all SVG UI assets (requiring explicitly mapped IDs and classes) to avoid the technical friction experienced this week[cite: 1].
* **Finalize Documentation and Traceability:** The Product Owner will update the main `README.md` and ensure all QA testing reports (`testing-report.md`) are properly linked to their respective closed PBIs and MRs in GitLab to officially close the current release cycle and prepare for the next[cite: 1].