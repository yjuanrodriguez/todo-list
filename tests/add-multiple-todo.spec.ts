import { test, expect } from '@playwright/test';

test('user can add and manage todos with filters and counter', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const inputField = page.getByPlaceholder('What needs to be done?');
  
  await inputField.fill('Buy milk');
  await inputField.press('Enter');
  
  await inputField.fill('Walk the dog');
  await inputField.press('Enter');
  
  await inputField.fill('Learn Playwright');
  await inputField.press('Enter');

  const todos = page.locator('.todo-list li');
  await expect(todos).toHaveCount(3);

  const firstTodoCheckbox = page.locator('input.toggle').first();
  await firstTodoCheckbox.check();
  
  const itemsLeft = page.locator('.todo-count');
  await expect(itemsLeft).toContainText('2 items left');

  const completedFilter = page.getByRole('link', { name: 'Completed' });
  await completedFilter.click();
  await expect(page.locator('.todo-list li')).toHaveCount(1);
 
  const activeFilter = page.getByRole('link', { name: 'Active' });
  await activeFilter.click();
  await expect(page.locator('.todo-list li')).toHaveCount(2);
 
  const allFilter = page.getByRole('link', { name: 'All' });
  await allFilter.click();
  await expect(page.locator('.todo-list li')).toHaveCount(3);

  const clearCompletedButton = page.getByRole('button', { name: 'Clear completed' });
  await clearCompletedButton.click();

  await allFilter.click();
  
  await expect(page.locator('.todo-list li')).toHaveCount(2);
  await expect(itemsLeft).toContainText('2 items left');
});