import { expect, test } from "@playwright/test";

test("Verify the timeout function", async({page}) => {
    await page.goto("https://demo.playwright.dev/todomvc")

    const todoField = page.getByPlaceholder("What needs to be done?")

    await todoField.fill("New task")
    await todoField.press('Enter')

    //assert new doto item to be visible
    const listItem = page.locator('.todo-list').getByRole('listitem')
    await expect(listItem.getByText("New task")).toBeVisible({timeout: 500})
})

test("strict mode violation demo", async({page}) => {
    await page.goto("https://demo.playwright.dev/todomvc")

    const todoField = page.getByPlaceholder("What needs to be done?")

    for(const task of ['task 1', 'task 2', 'task 3']){
        await todoField.fill(task)
        await todoField.press('Enter')
    }

    const listItems = page.locator('.todo-list').getByRole('listitem')
    await listItems.click()
    //locator get 3 elements
})