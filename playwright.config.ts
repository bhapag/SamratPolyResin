import { defineConfig } from '@playwright/test';

// Port is overridable so a preview server left running by another checkout
// cannot be silently reused. That happened on 2026-09-09: a stale server from a
// different working copy answered on 4322, served the pre-consolidation site,
// and failed 23 tests that were actually fine. Set PW_PORT to run in isolation.
const PORT = Number(process.env.PW_PORT ?? 4322);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
  },
  webServer: {
    command: `npm run preview -- --port ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
