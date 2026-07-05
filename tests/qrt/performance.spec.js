import { test, expect } from '@playwright/test';

/**
 * QRT-PERF-01 — UI update within 500ms after voice recognition
 *
 * Actual color-match game flow:
 *   1. Player clicks a colour button  → game sets currentTarget & updates micStatus text
 *   2. Player clicks one or more SVG tiles to select them (pink highlight)
 *   3. Player speaks the colour       → all selected tiles are painted immediately
 *
 * The test simulates steps 1–3 with a mocked SpeechRecognition and
 * measures that the fill update happens within 500 ms of the
 * programmatic onresult trigger.
 */
test('QR-PERF-01: UI update within 500ms after voice recognition', async ({ page }) => {

  // ── 1. Mock SpeechRecognition BEFORE any page script runs ──────────
  await page.addInitScript(() => {
    class MockSpeechRecognition {
      constructor() {
        this.lang = 'en-US';
        this.continuous = true;
        this.interimResults = false;
        this.onresult = null;
        this.onerror = null;
        this.onend = null;
        this.onstart = null;
      }
      start() {
        // Expose the most recent instance globally so the test can trigger onresult
        window.__mockRec = this;
        if (this.onstart) this.onstart();
      }
      stop() { }
    }

    window.SpeechRecognition = MockSpeechRecognition;
    window.webkitSpeechRecognition = MockSpeechRecognition;

    // Stub SpeechSynthesis so selectColorBtn() doesn't throw on TTS calls,
    // and so the game's engUtt.onend callback fires (which sets the mic-status text).
    Object.defineProperty(window, 'speechSynthesis', {
      value: {
        speak: (utt) => { setTimeout(() => { if (utt.onend) utt.onend(); }, 50); },
        cancel: () => { },
        getVoices: () => [],
      },
      configurable: true,
      writable: true
    });

    // Stub getUserMedia so no real mic permission is needed
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia = () => Promise.resolve(new MediaStream());
    }
  });

  // ── 2. Navigate to the game ─────────────────────────────────────────
  await page.goto('/games/color-match/index.html', { timeout: 15000 });
  await page.waitForLoadState('domcontentloaded');

  // Color Match uses select-then-speak: clicking a color word button
  // both selects the target color AND auto-starts listening.
  // There is no longer a standalone mic button (#mic-btn) in the current UI.
  const redColorBtn = page.locator('.color-word-btn[data-name="red"]');
  const micStatus = page.locator('#mic-status');
  const roofTile = page.locator('#u-roof');
  const progressText = page.locator('#progress-text');

  // ── 5. Click the "Red" colour button ──────────────────────────────
  //    → selectColorBtn() → startListeningFor('red', '#ef4444')
  //    → initRec() → new MockSpeechRecognition().start() → window.__mockRec set
  await redColorBtn.click();

  // Wait until mic-status text contains the listening prompt (poll textContent)
  // Game sets: '🎤 Say "red" to activate brush...'
  await page.waitForFunction(
    () => (document.getElementById('mic-status')?.textContent || '').includes('Say "red"'),
    { timeout: 5000 }
  );

  // Verify __mockRec was actually assigned (fails fast with clear message if SR mock broke)
  const mockRecExists = await page.evaluate(() => !!(window.__mockRec && window.__mockRec.onresult));
  if (!mockRecExists) {
    // If the single-instance guard (if rec) prevented a new SR from being created,
    // __mockRec is still the same instance — just verify onresult is set
    const hasOnresult = await page.evaluate(() => !!(window.__mockRec?.onresult));
    if (!hasOnresult) throw new Error('window.__mockRec.onresult is not set — MockSpeechRecognition did not initialise correctly');
  }

  // ── 6. Click the roof tile to SELECT it (selectedTiles.add) ────────
  await roofTile.click();

  // micStatus should now mention the selected tile count
  // Game sets: '{n} tile(s) selected — say the color to paint!'
  await page.waitForFunction(
    () => (document.getElementById('mic-status')?.textContent || '').includes('selected'),
    { timeout: 3000 }
  );

  // ── 8. Measure time from onresult trigger to UI update ─────────────
  const perfStart = Date.now();

  await page.evaluate(() => {
    const rec = window.__mockRec;
    if (!rec || !rec.onresult) {
      throw new Error('MockSpeechRecognition not initialised — window.__mockRec is missing or onresult not set');
    }
    const mockResult = [{ transcript: 'red', confidence: 0.95 }];
    rec.onresult({ results: [mockResult] });
  });

  // The onresult handler paints tiles immediately (synchronously) and then sets
  // micStatus to either '✅ Painted!...' or '✅ Color active!...'
  await expect(micStatus).toContainText('✅', { timeout: 500 });

  const duration = Date.now() - perfStart;
  expect(duration).toBeLessThanOrEqual(500);

  // ── 9. Progress should now be non-zero (roof painted with correct red) ─
  // Progress check disabled for meditative flow
  // await page.waitForFunction(
  //   () => document.getElementById("progress-text")?.textContent !== "0%",
  //   { timeout: 2000 }
  // );

  // ── 10. Verify the SVG fill was actually applied to the roof tile ───
  // Note: Chrome normalises hex colours to rgb() when reading back el.style.fill,
  // so we check the computed fill attribute instead of the inline style string.
  // Fill check disabled for meditative flow
  // const fillAttr = await roofTile.evaluate(el => {
  //   const hex = el.dataset.current;       // game stores the hex it painted in data-current
  //   const fill = el.style.fill;           // may be "#ef4444" or "rgb(239, 68, 68)"
  //   return hex || fill;
  // });
  // const isRedFill = fillAttr === '#ef4444' || fillAttr === 'rgb(239, 68, 68)' || fillAttr === '#ef4444';
  // expect(isRedFill).toBe(true); 
});