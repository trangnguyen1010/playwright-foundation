import { expect, test } from "@playwright/test";

test('test for todo page', async({page}) => {
    await page.goto("https://demo.playwright.dev/todomvc")

    //input 1 todo item

    const todoField =  page.getByPlaceholder("What needs to be done?")
    const todoValue = "New task 1"

    await todoField.fill(todoValue)
    await todoField.press("Enter")

    //assert new todo item

    const newItem = page.getByText(todoValue)
    await expect(newItem).toBeVisible()

    //serrt the item is display correctly
    await expect(page.getByTestId("todo-count")).toHaveText("1 item left")
})