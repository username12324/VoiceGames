# ADR 003: Select-then-Speak Interaction Pattern

## Status
Accepted

## Context
In MVP v1, the microphone was constantly listening and checking audio against a massive dictionary of words. During the Sprint 1 Review, the customer (Danko) pointed out that:
1. A constantly listening microphone causes cognitive fatigue for the child.
2. Checking pronunciation against all words simultaneously is computationally inefficient.
3. It leads to too many false positives from background noise.

## Decision
We will transition all game mechanics to a **"select-then-speak"** pattern. 
The user must first click an action (e.g., a specific spell or color) with their mouse/finger, and *then* the microphone activates to listen only for that specific 1-3 word phrase.

## Consequences

### Positive
- **Reduces false positives**: The system only validates against the specific target word, ignoring background noise.
- **Prevents fatigue**: The microphone is not always active, giving the child a break.
- **Better performance**: Reduces CPU and browser load by only processing audio when explicitly requested.
- **Clearer UX**: The user knows exactly what word they need to pronounce.

### Negative
- **Extra click required**: Requires an additional UI interaction step before speaking.
- **Less "arcade" feel**: Not suitable for fast-paced games like Doodle Jump where continuous speaking is needed.

## Quality Requirements Addressed
- **Usability**: Prevents the game from triggering random actions based on background noise.
- **Performance Efficiency**: Reduces processing load on the browser's speech engine.
- **User Error Protection**: Provides clear visual feedback on what to pronounce before listening.

## Related Issues
- Customer feedback from Sprint 1 Review (2026-06-21)
- Issue #24: Implement select-then-speak mechanic