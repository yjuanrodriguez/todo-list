import { test, expect } from '@playwright/test';

test('user can add a todo item', async ({ page }) => {
  
  await page.goto('https://demo.playwright.dev/todomvc/');
 
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Buy milk');
  await input.press('Enter');

  const todo = page.getByTestId('todo-title').filter({ hasText: 'Buy milk' });
  await expect(todo).toBeVisible(); 
});
