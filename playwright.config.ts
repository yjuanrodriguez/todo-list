import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Where test files live
  testDir: './tests',

  // Shared settings for all tests
  use: {
    // Allows page.goto('/') to work
    baseURL: 'https://demo.playwright.dev/todomvc/',
  },
});
