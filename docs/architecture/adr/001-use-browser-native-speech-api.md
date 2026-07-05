# ADR 001: Use Browser-Native Web Speech API

## Status
Accepted

## Context
We needed a way to recognize children's English pronunciation in real-time. Options considered:
1. Sending audio to a backend server with AI (e.g., Whisper API)
2. Using the browser's native Web Speech API

## Decision
We use the **browser-native Web Speech API** for speech recognition and Text-to-Speech API for playback.

## Consequences

### Positive
- Zero backend costs — no server infrastructure needed
- No network latency — instant feedback (critical for games)
- Privacy — audio never leaves the user's device permanently
- Simplicity — no backend development required

### Negative
- Requires HTTPS (Web Speech API only works in secure contexts)
- Browser compatibility limited mostly to Chrome/Edge
- Chrome sends audio to Google servers for processing

## Quality Requirements Addressed
- Privacy/Security: No user data stored on our servers
- Performance Efficiency: Instant UI feedback without backend round-trip
- Usability: No registration or setup required