import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/qrt',
  use: {
    baseURL: 'http://localhost:3000',
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'junit-qrt.xml' }],
  ],
});