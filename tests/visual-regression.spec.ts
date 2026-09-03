import {test, expect} from '@playwright/test';

test('visual regression testing', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await expect(page).toHaveScreenshot('todomvc-empty.png', {
        maxDiffPixels: 100,
    })

    //adding one more item and then taking a new screenshot to compare with the previous one
    await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await expect(page).toHaveScreenshot('todomvc-with-item.png', {
        maxDiffPixels: 100,
    })
  
})