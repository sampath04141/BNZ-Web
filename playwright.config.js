// @ts-check
const { defineConfig, devices } = require('@playwright/test');
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */


module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  timeout: 20000,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],
  ['junit', { outputFile: 'test-results/e2e-results.xml' }],
  ['json', { outputFile: 'test-results/e2e-results.json' }],
  ['allure-playwright', { outputFolder: 'allure-results' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.bnz.co.nz/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
 
  /* Configure projects for major browsers */
  projects: [

    {
      name: 'local',
      use: { ...devices['Desktop Chrome'], headless: false },
      testMatch: ["**/tests/E2E/*.spec.js", "**/tests/API/*.spec.js"],
    },

    {
      name: 'CI',
      use: {
        ...devices['Desktop Chrome'],
      },
      testMatch: ["**/tests/E2E/*.spec.js", "**/tests/API/*.spec.js"],
      timeout:20000,
    },

    {
      name: 'ACC',
      use: { ...devices['Desktop Chrome'] },
      testMatch:["**/tests/AccTesting/*.spec.js"]

    },

    {
      name: 'VT',
      use: { ...devices['Desktop Chrome'] },
      testMatch:["**/tests/VisualTesting/*.spec.js"]

    },

    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

