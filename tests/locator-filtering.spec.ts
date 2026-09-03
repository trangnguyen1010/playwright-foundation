import { expect, test } from "@playwright/test";

test("Verify filtering & chaining", async({page}) => {
    await page.goto("https://demo.playwright.dev/todomvc")

    const todoField = page.getByPlaceholder("What needs to be done?")

    // adding the items for todo list
    const todoList = ["Milk", "Bread", "Eggs", "Butter"]
    for(const task of todoList ){
        await todoField.fill(task)
        await todoField.press('Enter')
    }

    const listItem = page.locator('.todo-list').getByRole('listitem')
    // tick some item
    await listItem.filter({hasText: 'Bread'}).getByRole("checkbox").check()
    await listItem.filter({hasText: "Butter"}).getByRole("checkbox").check()

    // verify the items that have not finished
    const pendingItem = page.locator('.todo-list li:not(.completed)')
    await expect(pendingItem).toHaveCount(2)
    // verify milk does not have class completed
    await expect(listItem.filter({hasText: "Milk"})).not.toHaveClass("completed")
})