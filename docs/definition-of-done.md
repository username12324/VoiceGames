# Definition of Done (DoD)

A Product Backlog Item (PBI) or User Story is considered "Done" only when all the following criteria are strictly met.

## 1. Code & Implementation
* The feature is fully implemented and verified against the specified Acceptance Criteria.
* The code follows the team's agreed-upon style and formatting guidelines.
* There is no commented-out, unused, or temporary debugging code left in the branch.
* Relevant automated unit and integration tests have been implemented for the new code.
* Relevant automated Quality Requirement Tests (QRTs) have been implemented and linked if the PBI addresses a Quality Requirement.

## 2. Quality Assurance & Review
* The code has been reviewed and approved by at least one other team member via a Merge Request (MR).
* All required Continuous Integration (CI) checks for the product stack pass successfully.
* Critical modules affected by the changes meet the minimum 30% automated line coverage expectation.
* The feature has been manually tested and verified in the target environment.
* Testing evidence (e.g., CI logs, coverage reports, QRT results, UAT UIs, or manual testing screenshots) is preserved in the MR, CI pipeline, or linked documentation.

## 3. Documentation & Workflow
* The root `CHANGELOG.md` has been updated with a clear description of any user-visible changes.
* Any necessary run, deployment, or access instructions in the root `README.md` have been updated if applicable.
* The PBI's status is officially updated to `Done` in the issue tracker and synchronized with `docs/user-stories.md`.