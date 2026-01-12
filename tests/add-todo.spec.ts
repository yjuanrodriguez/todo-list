import { test, expect } from '@playwright/test';

test('user can add a todo item', async ({ page }) => {
  // Arrange
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Act
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Buy milk');
  await input.press('Enter');

  // Assert
  const todo = page.getByTestId('todo-title').filter({ hasText: 'Buy milk' });
  await expect(todo).toBeVisible(); 
});
