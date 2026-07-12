# Voice Games

A frontend-only web application (HTML/JS/CSS) designed to help children practice English pronunciation using the browser's native Web Speech API and Text-to-Speech API.

## Run / Access Instructions

1. **Access the application**: Open the deployed MVP v2.1 at [https://vg-mvp-ff7595.pages.pg.innopolis.university/](https://vg-mvp-ff7595.pages.pg.innopolis.university/).
2. **Browser Requirements**: Please use **Google Chrome** or **Mozilla Firefox**, as they provide excellent support for the Web Speech API required by the games.
3. **How to Play**: Upon entering the site, click the **Play** button, then select the game you are interested in playing.
4. **Permissions**: When you click the microphone button inside the games, a browser pop-up will appear. You must grant **full permission** to use the microphone for the voice recognition to work.
5. **Credentials**: No registration or login credentials are required to play the games.

## Local Setup

```bash
npm ci
npm run serve
```

Then open [http://localhost:3000](http://localhost:3000). Voice recognition features should be tested in Chrome or Firefox.

## Architecture & Process Documentation
- [Architecture Overview](docs/architecture/README.md)
- [Architecture Decision Records](docs/architecture/adr/)
- [Development Process & Configuration Management](docs/development-process.md)
- [Definition of Done](docs/definition-of-done.md)
- [Testing Strategy](docs/testing.md)
- [Roadmap](docs/roadmap.md)
- [Hosted Documentation Site](https://vg-mvp-ff7595.pages.pg.innopolis.university/docs/)
