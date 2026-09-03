import { expect, test } from "@playwright/test";

test('Playwright homepage displays Get started link', async({page}) => {
    await page.goto('https://playwright.dev/')

    await expect(page).toHaveTitle(/Playwright/)

    const getStartedLink = page.getByRole('link', {
        name: 'Get Started'
    })
    page.getByText

    await expect(getStartedLink).toBeVisible()

    await getStartedLink.click()
    await expect(page).toHaveURL(/.*intro/)
})