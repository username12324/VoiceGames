import { test, expect } from '@playwright/test';

test('QR-REL-01: Must handle microphone errors gracefully', async ({ page }) => {
  // Mock both getUserMedia and SpeechRecognition to force an error
  await page.addInitScript(() => {
    // Mock getUserMedia to reject
    navigator.mediaDevices.getUserMedia = () => Promise.reject(new Error('NotAllowedError'));

    // Mock SpeechRecognition to immediately call onerror when start() is called
    window.SpeechRecognition = function() {
      const rec = {
        start: () => {
          setTimeout(() => {
            if (rec.onerror) {
              rec.onerror({ error: 'not-allowed' });
            }
          }, 10);
        },
        onerror: null,
        onresult: null,
        onend: null,
        continuous: false,
        interimResults: false,
        lang: 'en-US',
      };
      return rec;
    };
  });

  // Navigate to Spell Match‑3
  await page.goto('/games/spell-match3/index.html');

  // Make a move to trigger the spell challenge (click two adjacent gems)
  const cell00 = page.locator('#c0x0');
  const cell01 = page.locator('#c0x1');
  await cell00.click();
  await cell01.click();

  // Wait for the phrase panel to become active
  const phrasePanel = page.locator('#phrasePanel');
  await expect(phrasePanel).toHaveClass(/active/, { timeout: 5000 });

  // Click the microphone button
  const micBtn = page.locator('#micBtn');
  await micBtn.click();

  // Verify that the feedback element shows an error message (look for 'not-allowed' or 'Mic')
  const feedback = page.locator('#feedback');
  await expect(feedback).toContainText('not-allowed', { timeout: 5000 });

  // Check for uncaught JavaScript errors
  const errors = await page.evaluate(() => window._testErrors || []);
  expect(errors).toHaveLength(0);
});