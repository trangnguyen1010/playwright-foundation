import { Page, Locator, expect } from "@playwright/test";


export class TodoPage{
    readonly page: Page
    readonly todoInput: Locator
    readonly todoItem: Locator
    constructor(page: Page){
        this.page = page
        this.todoInput = page.getByPlaceholder("What needs to be done?")
        this.todoItem = page.locator(".todo-list").getByRole("listitem")
    }

    async goto(){
        await this.page.goto('https://demo.playwright.dev/todomvc')
    }

    async addTodo(text: string){
        await this.todoInput.fill(text)
        await this.todoInput.press('Enter')
    }

    getTodoItem(text: string){
        return this.todoItem.filter({hasText: text})
    }

    async completeTodo(text: string){
        await this.todoItem.filter({hasText: text}).getByRole('checkbox').check()
    }

    async getPendingItems(){
        return this.page.locator('.todo-list li:not(.completed)')
    }
}