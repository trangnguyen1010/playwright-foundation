import { expect, test } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

test.describe('Test for todo page', ()=>{
    test('Adding todo item', async({page}) => {
        const todoPage = new TodoPage(page)

        await todoPage.goto()

        const todoList = ['Buy milk', "reading book"]
        //adding some item
        for(const task of todoList ){
            await todoPage.addTodo(task)
            await expect(todoPage.getTodoItem(task)).toBeVisible()
        }

        //complete 1 item
        await todoPage.completeTodo(todoList[0])

        //assert counter is 1
        const pending = await todoPage.getPendingItems()
        await expect(pending).toHaveCount(1)
    })
})