import { expect, test } from "@playwright/test";

test('Title test', async({page}) => {

    await page.goto("https://playwright.dev")
    await expect(page).toHaveTitle(/Playwright/)
    
    const button = page.getByRole("link", {
        name: "Get started"
    })

    await expect(button).toBeVisible()
    await button.click()

    await expect(page).toHaveURL(/.*intro/)

    const heading = page.getByRole('heading', {
        name: "Installation"
    })

    await expect(heading).toBeVisible()
    await expect(heading).toContainText("Installation")
})