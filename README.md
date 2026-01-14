# PW TodoMVC - Automation Testing Project

## Project Overview

Training project for learning automation testing with Playwright. Testing TodoMVC application using TypeScript and modern testing practices.

---

## Language and Version

- **Language**: TypeScript
- **Version**: 5.x

## Runtime and Version

- **Runtime**: Node.js
- **Version**: 18.x or higher

## Automation Framework

- **Framework**: Playwright
- **Version**: Latest (@playwright/test)

## Reporting Tools

- **Built-in**: Playwright HTML Reporter
- **UI Mode**: Playwright Test UI Runner
- **Report Command**: `npx playwright show-report`

## Relevant Configurations

### Base URL
```
https://demo.playwright.dev/todomvc/
```

### Configuration File
```typescript
testDir: './tests'
baseURL: 'https://demo.playwright.dev/todomvc/'
timeout: 30000
expect.timeout: 5000
```

---

## Project Real Structure

```
pw_todo/
├── tests/
│   ├── add-todo.spec.ts              # Iteration 1: Single todo addition
│   └── add-multiple-todo.spec.ts     # Iteration 2: Multi-step todo workflow
├── playwright.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
├── package-lock.json
└── README.md
```

---

## Execution Strategy

### Run All Tests
```bash
npm test
```

### Run Tests with UI Mode (Interactive)
```bash
npm run test:ui
```

### Run Specific Test File
```bash
npx playwright test tests/add-todo.spec.ts
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### View HTML Report
```bash
npx playwright show-report
```

---

## Project Iterations

### Iteration 0 - Project Setup (TypeScript)
**Status**: ✅ Completed

**Objectives**:
- Initialize Playwright project with TypeScript
- Configure baseURL in playwright.config.ts
- Add test:ui script to package.json

**Deliverables**:
- Playwright project initialized
- `npm test` runs successfully
- `npm run test:ui` launches UI runner

---

### Iteration 1 - First Happy Path Test
**Status**: ✅ Completed

**Objectives**:
- Create first end-to-end test
- User creates a todo and sees it on the list

**Test File**: `tests/add-todo.spec.ts`

**Test Scenario**:
1. Navigate to application
2. Fill input field with "Buy milk"
3. Press Enter
4. Assert todo is visible on the list

**Key Selectors Used**:
- Input field: `getByPlaceholder('What needs to be done?')`
- Todo item: `getByTestId('todo-title')`

**Status**: ✅ Test is stable and passes consistently

---

### Iteration 2 - Expand Test with Multiple Steps + Assertions
**Status**: ✅ Completed

**Objectives**:
- Create multi-step end-to-end test
- Verify complete todo workflow with filters and counter

**Test File**: `tests/add-multiple-todo.spec.ts`

**Test Scenario**:
1. Add 3 todos ("Buy milk", "Walk the dog", "Learn Playwright")
2. Verify all 3 todos are visible (count = 3)
3. Mark first todo as completed
4. Verify items left counter shows "2 items left"
5. Switch to "Completed" filter - verify only 1 todo visible
6. Switch to "Active" filter - verify 2 todos visible
7. Switch to "All" filter - verify all 3 todos visible
8. Click "Clear completed" button
9. Verify only 2 active todos remain
10. Verify counter shows "2 items left"

**Key Selectors Used**:
- Input field: `getByPlaceholder('What needs to be done?')`
- Todo items: `getByTestId('todo-title')`
- Checkbox: `locator('input[type="checkbox"]')`
- Items counter: `getByTestId('todo-count')`
- Filter links: `getByRole('link')`
- Clear button: `getByRole('button', { name: 'Clear completed' })`

**Status**: ✅ Test passes with all assertions verified

---

## Evidences and Debugging

### Test Execution Output
```
✅ Iteration 1: add-todo.spec.ts PASSED
✅ Iteration 2: add-multiple-todo.spec.ts PASSED
```

### Running Tests Locally
```bash
npm test
```
Expected: All tests pass with green checkmarks

### UI Mode Execution (Recommended for Debugging)
```bash
npm run test:ui
```
Features:
- Step-by-step execution visualization
- Real-time browser preview
- Inspector for element selection
- Pause and resume capability

### Debug Mode
```bash
npx playwright test --debug
```
Launches Inspector tool to:
- Step through each action
- Inspect DOM elements
- View network activity
- Set breakpoints

### View Test Report
```bash
npx playwright show-report
```
Displays:
- Test results summary
- Individual test details
- Screenshots and traces
- Error context

---

## Next Steps

### Iteration 3 (Planned)
- Add Page Object Model (POM) pattern
- Refactor existing tests to use page objects
- Create reusable page classes for TodoMVC

### Future Iterations
- Add more test scenarios (edit, delete todo)
- Implement fixtures for test data
- Add parallel execution configuration
- Enhance error reporting

---

**Last Updated**: January 14, 2026
**Framework Version**: Playwright Latest
**TypeScript Version**: 5.x
