// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// const dotenv = require('dotenv');
// const path = require('path');

import dotenv  from 'dotenv';
// dotenv.config
dotenv.config({ 
  //  path: path.resolve(__dirname, '.env')
  // path:`./environment/qa.env` //this is hardcoding which we should not do
  //setting default env
  //  path:process.env.TEST_ENV ? `./environment/${process.env.TEST_ENV}.env` : `./environment/qa.env`
   path:`./environment/${process.env.TEST_ENV}.env`

 }); 

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({

  timeout:25000,
  // expect:{
  //   timeout:4000
  // },
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly:!!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html',{open:'on-failure', outputFolder:'./myreport'}], ['list']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://www.amazon.in/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    headless:false,
    // httpCredentials:{
    //   username:'admin',
    //   password:'admin'
    // },
    //permissions:['notifications'],
     viewport: null,
    //  launchOptions:{
    //   args:['--start-maximized']
    //  },
    screenshot:'only-on-failure',
    video:'on'
    
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        'launchOptions':{
          'args':['--start-maximized']
        } ,
        //permissions:[]
      },
    },

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
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
