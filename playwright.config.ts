import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { outputFolder: 'reports/playwright-report', open: 'never' }]],
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com', // Optional: Set a base URL for API tests
  },
});
