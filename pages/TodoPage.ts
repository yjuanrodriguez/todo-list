import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly inputField: Locator;
  readonly todoList: Locator;
  readonly todoItems: Locator;
  readonly itemsCounter: Locator;
  readonly allFilter: Locator;
  readonly activeFilter: Locator;
  readonly completedFilter: Locator;
  readonly clearCompletedButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputField = page.getByPlaceholder('What needs to be done?');
    this.todoList = page.locator('.todo-list');
    this.todoItems = page.locator('.todo-list li');
    this.itemsCounter = page.locator('.todo-count');
    this.allFilter = page.getByRole('link', { name: 'All' });
    this.activeFilter = page.getByRole('link', { name: 'Active' });
    this.completedFilter = page.getByRole('link', { name: 'Completed' });
    this.clearCompletedButton = page.getByRole('button', { name: 'Clear completed' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async addTodo(text: string) {
    await this.inputField.fill(text);
    await this.inputField.press('Enter');
  }

  async toggleTodo(text: string) {
    const todoItem = this.todoItems.filter({ hasText: text });
    const checkbox = todoItem.locator('input.toggle');
    await checkbox.check();
  }

  async filterActive() {
    await this.activeFilter.click();
  }

  async filterCompleted() {
    await this.completedFilter.click();
  }

  async filterAll() {
    await this.allFilter.click();
  }

  async clearCompleted() {
    await this.clearCompletedButton.click();
  }

  async expectTodoVisible(text: string) {
    const todoItem = this.page.getByTestId('todo-title').filter({ hasText: text });
    await expect(todoItem).toBeVisible();
  }

  async expectTodoCount(count: number) {
    await expect(this.todoItems).toHaveCount(count);
  }

  async expectItemsLeft(count: number) {
    await expect(this.itemsCounter).toContainText(`${count} items left`);
  }
}
