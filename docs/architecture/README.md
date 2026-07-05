# Voice Games MVP — Architecture Documentation

This document describes the software architecture of Voice Games MVP.

## Overview

Voice Games MVP is a **frontend-only** browser-based application that helps children practice English pronunciation using the browser's native **Web Speech API**.

### Key Architectural Decisions
- **No Backend**: All data is stored in the browser's LocalStorage.
- **Client-side Speech Recognition**: Uses Web Speech API (Chrome/Firefox).
- **Static Hosting**: Deployed via GitLab Pages (HTTPS required for microphone access).

---

## 1. Static View (Component Diagram)
The following diagram shows the main components of the system:

![Component Diagram](static-view/component-diagram.png)

**Explanation:**
- **Main Menu & Games**: UI components for game selection and gameplay.
- **Speech Manager**: Centralized service for voice recognition and TTS.
- **State Manager**: Handles progress saving/loading.
- **LocalStorage**: Persistent storage without a backend.

---

## 2. Dynamic View (Sequence Diagram)
The following diagram shows the "select-then-speak" mechanic in Spell Caster:

![Sequence Diagram](dynamic-view/sequence-diagram.png)

**Explanation:**
1. User selects a spell manually (e.g., "Fireball").
2. System only listens for THAT specific word.
3. Reduces false positives and cognitive load.

---

## 3. Deployment View
The following diagram shows how the application is deployed:

![Deployment Diagram](deployment-view/deployment-diagram.png)

**Explanation:**
- **GitLab CI/CD**: Automated build and deployment.
- **GitLab Pages**: Free HTTPS hosting (required for Web Speech API).
- **Browser**: Runs entirely client-side. No backend server required.

---

## Architecture Decision Records (ADRs)
The following ADRs document important architectural decisions:

- [ADR-001: Use Browser-Native Web Speech API](adr/001-use-browser-native-speech-api.md)
- [ADR-002: Client-Side State Management via LocalStorage](adr/002-client-side-localstorage-state.md)
- [ADR-003: Select-then-Speak Interaction Pattern](adr/003-select-then-speak-interaction-pattern.md)