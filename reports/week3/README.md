# Voice Games - Assignment 3 Report

**Project Name:** Voice Games  
**Description:** A frontend-only web application (HTML/JS/CSS) designed to help children practice English pronunciation using the browser's native Web Speech API and Text-to-Speech API.  
**License:** [LICENSE](../../LICENSE)

## 1. Scope & Roadmap
- **Current Scope Summary:** Following customer feedback from Assignment 2, we pivoted our MVP v1 scope to focus heavily on two engaging core games: the "Coloring Game" and the "Spell Caster". These games utilize the Web Speech API to provide forced pronunciation mechanics and immediate visual feedback.
- **Historical User Stories:** [reports/week2/user-stories.md](../week2/user-stories.md)
- **Current User Stories Index:** [docs/user-stories.md](../../docs/user-stories.md)
- **Roadmap:** [docs/roadmap.md](../../docs/roadmap.md)
  - *Summary:* Sprint 1 focuses on core voice recognition, basic UI, the 2 initial games, and GitLab Pages deployment. Sprint 2 will introduce a progress dashboard and visual hints. MVP v3 will add gamification features and advanced phrase processing.

## 2. Customer Feedback & Pivot
- **Customer Feedback from Assignment 2:** The customer clarified that phrase validation is a key element and that cognitive fatigue should be prevented. This led us to pivot to the "Coloring Game" and combo-based "Spell Caster" to balance pacing and provide clear, engaging goals.
- **Customer Review Summary:** [reports/week3/customer-review-summary.md](customer-review-summary.md)
- **Customer Review Transcript/Notes:** [reports/week3/customer-review-transcript.md](customer-review-transcript.md).

## 3. Product Backlog & Sprint Planning
- **Explanation of Workflow:** We use standard Scrum semantic statuses (To Do, In Progress, Done). Priorities are set using MoSCoW. We use a dedicated Sprint milestone to scope Sprint 1, and an `mvp-v1` label to track the MVP version. User stories are decomposed into technical PBIs as needed.
- **Product Backlog Board/View:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/boards)
- **Current Sprint Backlog Board/View:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/boards?milestone_title=Sprint%201)
- **Current Sprint Milestone:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/milestones/1#tab-issues)
- **MVP Version Filtered View:** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues?sort=created_date&state=opened&label_name%5B%5D=mvp-v1&first_page_size=20)
- **Total Product Backlog Size:** 59 Story Points
- **Total Current Sprint Size:** 33 Story Points
- **MVP v1 Scope Description:** Focus on core pronunciation tracking, Text-to-Speech playback, and the implementations of US-17 (Coloring Game) and US-18 (Spell Caster) without a backend.
- **Verification Evidence:**
  - [add Heroes of Voice and Magic games](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/7)
  - [Add back-to-menu button to Color Match and Heroes of Voice and Magic](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/28)

## 4. Current Status & Next Steps
- **Product Status:** MVP v1 was successfully demonstrated to the customer. The core voice recognition system accurately transcribes speech. We have functioning prototypes for two games: "Color Match", allowing users to manually trigger voice listening to select a color and paint shapes, and "Spell Caster", featuring a turn-based battle system where players cast attack, defense, and healing spells via pronunciation with visual text feedback.
- **Next Steps:** Based on the Sprint Review, the next steps are to implement a "select-then-speak" voice activation logic across all games, add a 10-second auto-painting timer to Color Match, and generate pixel art assets for Spell Caster using AI. Additionally, the team will distribute prototyping work across all members in Google AI Studio and send the final MVP v2 backlog priorities and estimates to the customer for asynchronous review.

## 5. Contribution Traceability

| Team Member | Assigned Issues | PRs/MRs Created | Reviews |
|---|---|---|---|
| Robert Kharisov | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/9) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/new?merge_request%5Bsource_branch%5D=docs-week3) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/27) |
| Alisa Saraikina | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/20) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/26) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/28) |
| Kir Tormasov | N/A (Blocked)* | N/A (Blocked)* | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/16) |
| Timur Rasulov | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/14) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/28) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/19) |
| Ibragim Bulatov | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/issues/19) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/27) | [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/24) |

> **Note regarding Kir Tormasov's contributions:** Due to a critical technical blocker with the university's SSO portal (`sso.university.innopolis.ru`) having an expired SSL certificate (`NET::ERR_CERT_DATE_INVALID`), Kir was unable to securely log in to GitLab to create his own issues and Merge Requests during this Sprint. He still managed to participate in the review process for MR !16. A screenshot of the SSO security error is included in our evidence. [Link to the error](images/sso-error.jpg).


## 6. Process & Quality Assurance
- **Definition of Done:** [docs/definition-of-done.md](../../docs/definition-of-done.md)
- **Process Requirements:** [Process_Requirements.md](../../Process_Requirements.md)
- **Changelog:** [CHANGELOG.md](../../CHANGELOG.md)
- **Issue Templates & PR/MR Template:** 
  - Issues Templates:
    - [User Story Template](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/blob/689473e075f560042673de36fbf2b8ba229a1619/.gitlab/issue_templates/User_story.md)
  - MR Template: [MR Template](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/blob/689473e075f560042673de36fbf2b8ba229a1619/.gitlab/merge_request_templates/merge_request_template.md)
  
- **Reviewed PRs/MRs:** 
  - [MR-1](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/7)
  - [MR-2](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/13)
   - [MR-3](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/merge_requests/8)

- **LLM Usage Report:** [reports/week3/llm-report.md](llm-report.md)

## 7. Deliverables & Demonstration
- **SemVer Release (MVP v1):** [Link](https://gitlab.pg.innopolis.university/swp-voice-games/vg-mvp/-/releases/v1.0.0-MVP)
- **Deployed MVP v1:** [Link](https://vg-mvp-ff7595.pages.pg.innopolis.university/)
- **Run/Access Instructions:** [Run / Access Instructions](../../README.md#run--access-instructions)
- **Video Demonstration:** [Google Drive link](https://drive.google.com/file/d/1oyGGrJysSBsMqI29L7VuCRW8AZ6_vE5v/view?usp=sharing)

## 8. Reflections & Retrospective
- **Week 3 Reflection:** [reports/week3/reflection.md](reflection.md)
- **Sprint Retrospective:** [reports/week3/retrospective.md](retrospective.md)

## 9. Appendix: Screenshots
- **Product Backlog View:** [Link](images/product-backlog-view.png)
- **Sprint Backlog View:** [Link](images/sprint-backlog-view.png)
- **Sprint Milestone:** [Link](images/sprint-milestone.png)
- **MVP Version View:** [Link](images/mvp-version-view.png)
- **SemVer Release:** [Link](images/semver-release.png)
- **Delivered MVP v1:** [Link](images/delivered-mvp.png)
- **Example Reviewed PR/MR:** [Link](images/reviewed-mr.jpg)
