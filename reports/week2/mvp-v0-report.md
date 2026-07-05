# MVP v0 Deployment Report

## 1. Deployment Links
* **Live MVP v0 Environment:** [link](http://10.93.26.179/play.html)
* **Demo Video:** [demo on Google Drive](https://drive.google.com/file/d/1QzNwz6QIoRrjd3dLMB9KvVxvpjkYPx8k/view?usp=sharing)

## 2. Supported User Stories
This MVP v0 serves as a frontend foundation and UI smoke-check. Based on the current deployment, it primarily focuses on validating the core routing and interface layout associated with:
* **US-01 (Select a Game):** Verifying the implementation of the main menu, the navigation sidebar, and the responsive game selection grid interface.

## 3. Testing Instructions (Smoke Test)
To verify the MVP v0 functionality, please follow these steps:

1. Open the [Live MVP v0 link](http://10.93.26.179/play.html) in a modern web browser.
2. Observe the main landing page, which features the project logo, description, and a navigation sidebar.
3. Click the **"Play"** button (located either in the center of the screen or in the left sidebar).
4. **Expected Result:** The application should smoothly route you to the "Choose a game" page, displaying a grid of interactive game cards (e.g., "Animal Caller", "Word Blaster", "Color Rush").

## 4. Known Technical Constraints
* **Placeholder Content:** The games listed on the selection screen are currently UI placeholders. Clicking on specific game cards will not launch a playable game loop at this stage.
* **Speech Processing Not Included:** The Web Speech API and microphone mechanics (US-04) are not yet integrated into this specific frontend build.