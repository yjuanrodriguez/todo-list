# TodoMVC Test Automation Framework

## Project Overview

**Project Name:** TodoMVC - From 0 to a Framework

This is a test automation framework built with **Playwright** and **TypeScript** for testing the TodoMVC application. The project follows the **Page Object Model (POM)** design pattern to create a scalable, maintainable, and reusable test framework.

### Project Goals

- Automate functional testing of the TodoMVC application
- Build a robust, extensible test framework from scratch
- Follow industry best practices and design patterns
- Provide clear documentation and easy onboarding for new team members

---

## Project Structure

```
pw_todo/
├── tests/                    # Test files directory
│   ├── example.spec.ts      # Example test file
│   └── ...
├── pages/                    # Page Object Model classes
│   ├── basePage.ts          # Base page class with common methods
│   ├── todoPage.ts          # Todo application page object
│   └── ...
├── fixtures/                # Test fixtures and data
│   ├── testData.ts          # Test data and constants
│   └── ...
├── utils/                   # Utility functions
│   ├── helpers.ts           # Helper functions
│   └── ...
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies
└── README.md              # Project documentation
```

### Folder Descriptions

- **tests/**: Contains all test specifications. Test files follow the naming convention `*.spec.ts`
- **pages/**: Contains Page Object classes that encapsulate interactions with specific pages or features. Promotes code reusability and reduces maintenance overhead
- **fixtures/**: Stores test data, constants, and shared test setup configurations
- **utils/**: Contains helper functions and utility modules used across tests

---

## Technology Stack

- **Playwright**: Modern end-to-end testing framework
- **TypeScript**: Provides type safety and better code maintainability
- **Node.js**: JavaScript runtime for running tests

---

## Main Flows & Functionalities

### 1. **Test Execution**
   - Run all tests in the project
   - Run tests in UI mode for interactive debugging
   - Run tests in headed mode to see browser automation
   - Run tests with debugging capabilities

### 2. **Page Object Model (POM)**
   - Encapsulates page-specific actions and locators
   - Provides reusable methods for common interactions
   - Centralizes element selectors for easy maintenance
   - Reduces code duplication across tests

### 3. **Test Organization**
   - Tests are organized by feature or page
   - Each test file focuses on specific functionality
   - Shared utilities and fixtures support multiple test files

### 4. **Browser Support**
   - Tests run against Chromium, Firefox, and WebKit browsers
   - Configuration for parallel execution across browsers
   - Trace collection on failed tests for debugging

### 5. **Configuration Management**
   - Centralized configuration via `playwright.config.ts`
   - Base URL preconfigured for the TodoMVC application
   - Reporter setup for test results
   - Retry and parallel execution settings

---

## Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

### Installation

1. Install project dependencies:
```bash
npm install
```

2. Playwright browsers will be automatically installed during the first test run.

---

## Running Tests

### Available npm Scripts

- **`npm test`** - Run all tests
- **`npm run test:ui`** - Run tests in UI mode (interactive runner with visual feedback)
- **`npm run test:debug`** - Run tests in debug mode
- **`npm run test:headed`** - Run tests with visible browser window

### Examples

```bash
# Run all tests
npm test

# Run tests in UI mode for interactive debugging
npm run test:ui

# Run tests in a specific file
npx playwright test tests/example.spec.ts

# Run tests with a specific browser
npx playwright test --project=chromium

# Run a specific test by name
npx playwright test -g "test name"
```

---

## Configuration

The `playwright.config.ts` file contains the main configuration:

- **baseURL**: `https://demo.playwright.dev/todomvc/` - The application URL for testing
- **testDir**: `./tests` - Directory containing test files
- **reporters**: HTML report generation
- **projects**: Browser configurations (Chromium, Firefox, WebKit)
- **retries**: Automatic retry on CI environment
- **workers**: Parallel execution settings

---

## Page Object Model Pattern

The POM pattern improves test maintainability by:

1. **Encapsulation**: Page logic is separated from test logic
2. **Reusability**: Common actions are written once and used multiple times
3. **Maintainability**: Changes to selectors only need to be made in one place
4. **Readability**: Tests read like business workflows rather than technical implementations

### Base Page Class

The `BasePage` class provides common functionality used across all page objects:
- Navigation methods
- Wait mechanisms
- Element interaction helpers

---

## Continuous Integration

The framework is designed to work seamlessly in CI/CD pipelines:

- Automatic retry on failures
- Parallel test execution
- HTML report generation
- Trace collection for debugging

---

## Roadmap & Future Enhancements

As this project evolves, additional features will be added:

- Advanced assertions and custom matchers
- Data-driven testing capabilities
- API testing integration
- Performance monitoring
- Advanced reporting and analytics
- Docker integration for CI/CD

---

## Documentation Updates

This README will be continuously updated as new features, utilities, and patterns are added to the framework. Each iteration will document:

- New functionality and how to use it
- Updated project structure
- New flows and capabilities

---

## Contributing

When adding new tests or features:

1. Follow the existing folder structure
2. Use the Page Object Model pattern for page interactions
3. Write clear, descriptive test names
4. Add comments for complex test logic
5. Update this README with new functionality

---

## Support & Troubleshooting

For issues with test execution or framework setup, check:

- Playwright documentation: https://playwright.dev
- Project configuration in `playwright.config.ts`
- Browser compatibility in test reports

---

**Last Updated:** December 22, 2025
