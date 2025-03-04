# Playwright E2E Test Automation Framework

## Overview
This repository contains an end-to-end test automation framework built with Playwright for testing a [Capitally](https://www.mycapitally.com/) demo. 

The framework implements the Page Object Model (POM) design pattern and includes tests for various functionalities including portfolio management, reporting, and asset importing.

## Project Structure
```
e2e/
├── data/                    # Test data files
├── interfaces/             # TypeScript interfaces
├── models/                # Data models
├── pages/                 # Page Object Model classes
├── test-config/          # Test configuration
├── tests/                # Test specifications
└── utils/                # Utility functions and helpers
```

## Key Features
- Page Object Model implementation
- TypeScript support
- Custom test fixtures
- CSV report validation
- Reusable assertion helpers
- Configurable test setup
- Data-driven testing capabilities

## Prerequisites
- Node.js (latest LTS version)
- npm (Node Package Manager)
- Playwright

## Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Test Configuration
Configuration settings can be found in `e2e/test-config/test.setup.ts`:
- Base URL
- Test data path

## Running Tests
To run all tests:
```bash
npx playwright test
```

To run tests in UI mode:
```bash
npx playwright test --ui
```

To run a specific test file:
```bash
npx playwright test tests/SummaryTest.spec.ts
```

