import { expect, test } from "@playwright/test";

test("Adding multiple todo items", async({page}) => {
    await page.goto("https://demo.playwright.dev/todomvc")

    const todoField = page.getByPlaceholder("What needs to be done?")
    const todoList = ["task 1", "task 2", "Task 3"]
    const listItem = page.locator(".todo-list").getByRole("listitem")
    
    // fill to the todo list
    for(const task of todoList){
        await todoField.fill(task)
        await todoField.press("Enter")
        await expect(page.getByText(task)).toBeVisible()
    }

    //assert if the list is correct
    await expect(listItem).toHaveCount(3)

    //verify the second item have right text
    await expect(listItem.nth(1)).toHaveText(todoList[1])

    // tick on one todo item
    const firstItem = listItem.first()
    const firstCheckbox = firstItem.getByRole("checkbox")
    
    await firstCheckbox.check()
    await expect(firstItem).toHaveClass("completed")
})