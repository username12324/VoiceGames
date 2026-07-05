import { test, expect } from '@playwright/test';

test('QR-USAB-01: Must ignore invalid speech input and continue timer', async ({ page }) => {
  // Inject mock speech recognition that returns gibberish
  await page.addInitScript(() => {
    const mockResult = { results: [[{ transcript: 'asdfghjkl', confidence: 0.1 }]] };
    window.SpeechRecognition = function () {
      const recognition = {
        start: () => {
          setTimeout(() => {
            if (recognition.onresult) recognition.onresult(mockResult);
          }, 100);
        },
        onresult: null,
        onerror: null,
        continuous: false,
        interimResults: false,
        lang: 'en-US',
      };
      return recognition;
    };
    navigator.mediaDevices.getUserMedia = () => Promise.resolve(new MediaStream());
  });

  // Navigate to Spell Match-3
  await page.goto('/games/spell-match3/index.html');

  // Click two adjacent gems to trigger a spell challenge
  const cell00 = page.locator('#c0x0');
  const cell01 = page.locator('#c0x1');
  await cell00.click();
  await cell01.click();

  // Wait for the phrase panel to become active
  const phrasePanel = page.locator('#phrasePanel');
  await expect(phrasePanel).toHaveClass(/active/, { timeout: 3000 });

  // Get initial timer value
  const timerNum = page.locator('#timerNum');
  const initialTimer = await timerNum.textContent();

  // Click mic to trigger speech recognition (gibberish)
  const micBtn = page.locator('#micBtn');
  await micBtn.click();

  // Wait a moment for processing
  await page.waitForTimeout(1500);

  // Check timer decreased (game continues)
  const newTimer = await timerNum.textContent();
  expect(parseInt(newTimer)).toBeLessThan(parseInt(initialTimer));

  // Verify phrase panel is still active (game not broken)
  await expect(phrasePanel).toHaveClass(/active/);

  // Check for uncaught errors
  const errors = await page.evaluate(() => window._testErrors || []);
  expect(errors).toHaveLength(0);
});
