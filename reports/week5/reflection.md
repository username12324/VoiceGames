# Week 5 Reflection

## Learning points
During the fifth week of the project, our team gained practical experience with software architecture documentation, decision tracking, and CI/CD configuration management:
- **Architectural Reasoning**: We learned how to formally document a frontend-only application. By creating Static, Dynamic, and Deployment views, we understood that even without a backend, mapping UI components to game logic and deployment environments (GitLab Pages) requires clear architectural planning.
- **Decision Tracking**: We gained experience using Architecture Decision Records (ADRs) to formally justify our technical choices, such as using the native Web Speech API instead of third-party plugins and relying on Local Storage for state management.
- **Configuration Management**: We learned how to manage environment configurations via `.gitlab-ci.yml` to automatically build, test, and deploy our static assets to GitLab Pages.

## Validated assumptions
Through implementation, CI, UAT, and the Sprint Review, we validated and rejected several assumptions:
- **The Web Speech API is sufficient for our MVP**: Validated. Testing confirmed that the native browser API is capable enough for our core mechanics (Speech-to-Text and Text-to-Speech) without requiring complex backend servers, validating our ADR.
- **Strictly separating "Words" and "Sentences" is intuitive for children**: Rejected. Customer feedback highlighted that this hardcoded separation was confusing and restrictive. This led to our decision to refactor into a generic word-by-word parsing sequence.

## Friction and gaps
While delivering the Week 5 increment, we encountered several bottlenecks and technical risks:
- **Technical Risk (Architecture/Process)**: We initially struggled with how to document our architecture since we lack a traditional backend/database structure. This caused some friction until we realized we needed to document the frontend component structure and state management. Additionally, we faced issues with our initial hosting being inaccessible outside of the Russian Federation.
- **UX/Visual Gaps**: The Sprint Review revealed UX gaps: animations in "Spell Match-3" were missing or too fast, and players found the non-interactive background elements in "Voice Angler" counter-intuitive.

## Planned response
- In the next sprint (Sprint 4 / MVP v3), we will shift our focus towards creating new, interactive gameplay mechanics (e.g., traffic-based fish catching, sentence-power attacks) based on the customer's direct UX feedback, while deferring visual polishing. We will also finalize our CI/CD migration to GitLab Pages to resolve accessibility issues.
