import {test, expect} from '../fixtures/fixtures';


test('add todo item', async ({todoPage}) => {
    await todoPage.addTodo('Buy milk');
    await expect(todoPage.getTodoItem('Buy milk')).toBeVisible();

    await todoPage.completeTodo('Buy milk');
    await expect(todoPage.getTodoItem('Buy milk')).toHaveClass(/failed/);
})
