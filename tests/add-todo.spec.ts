import { test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('user can add a todo item', async ({ page }) => {
  const todoPage = new TodoPage(page);
  
  await todoPage.goto();
  await todoPage.addTodo('Buy milk');
  await todoPage.expectTodoVisible('Buy milk');
});
