import {test, expect} from '../fixtures/fixtures';

const tasks = ['walking the dog', ' ', 'buying groceries', 'cleaning the house'];
test.beforeEach(async () => {
        console.log('Starting test with fresh todo page')
    })
for (const task of tasks){
    
    test(` adding task: ${task}`, async ({todoPage}) => {
        if(task !== ' '){
        await todoPage.addTodo(task);
        await expect(todoPage.getTodoItem(task)).toBeVisible();
        }
        else{
            const pendingItems = await todoPage.getPendingItems();
            await expect(pendingItems).toHaveCount(0);
        }
    })
}