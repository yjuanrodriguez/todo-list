import { test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('user can add and manage todos with filters and counter', async ({ page }) => {
  const todoPage = new TodoPage(page);
  
  await todoPage.goto();
  
  await todoPage.addTodo('Buy milk');
  await todoPage.addTodo('Walk the dog');
  await todoPage.addTodo('Learn Playwright');

  await todoPage.expectTodoCount(3);

  await todoPage.toggleTodo('Buy milk');
  await todoPage.expectItemsLeft(2);

  await todoPage.filterCompleted();
  await todoPage.expectTodoCount(1);
 
  await todoPage.filterActive();
  await todoPage.expectTodoCount(2);
 
  await todoPage.filterAll();
  await todoPage.expectTodoCount(3);

  await todoPage.clearCompleted();

  await todoPage.filterAll();
  
  await todoPage.expectTodoCount(2);
  await todoPage.expectItemsLeft(2);
});