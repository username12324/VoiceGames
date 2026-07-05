# ADR 002: Client-Side State Management via LocalStorage

## Status
Accepted

## Context
The customer explicitly requested that children must be able to play **without creating an account** (US-14). However, we still need to save their learning progress, unlocked spells, and game states.

Options considered:
1. Backend database with user accounts (rejected due to US-14)
2. Browser's LocalStorage
3. SessionStorage (rejected because data is lost when the browser tab is closed)

## Decision
We will use **LocalStorage** to store all user progress as JSON strings.

## Consequences

### Positive
- **Frictionless onboarding**: No login walls or password recovery needed.
- **Instant read/write**: No network delay when saving or loading a game.
- **Meets US-14**: Strictly no registration required.
- **Simple implementation**: Uses native browser API, no extra libraries needed.

### Negative
- **Device-specific**: Progress is tied to one specific browser and device.
- **Data loss risk**: If the child or parent clears the browser cache, all progress is lost.
- **Storage limits**: LocalStorage is limited to ~5-10MB per domain (sufficient for JSON text data).

## Quality Requirements Addressed
- **Usability**: Zero friction to start playing.
- **Reliability**: App works offline after the initial page load.
- **Privacy**: No personal data is transmitted to external servers.