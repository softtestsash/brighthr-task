# BrightHR Task

This repository contains a project for automated testing using Playwright.

## Task

1. Navigate to the employee tab on the left-hand side of the panel and add an employee by filling in all the fields, including optional ones.
2. Add another employee.
3. Navigate to the employee tab and verify that both employees are displayed.
4. Integrate this build so tests can run in the CI setup of your choice.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
3. Run the tests
   ```bash
   npx playwright test

## CI Setup
For this task I am using Github Actions which runs on every pull-request to the main branch

## To-do/Improvements
- Move employees to fixtures
- Teardown the test by removing created employees via the api
- Login via the api (assuming this is covered by an e2e test
