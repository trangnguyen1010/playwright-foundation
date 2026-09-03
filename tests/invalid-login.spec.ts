import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { invalidUser } from "../test-data/users";

test("Invalid login", async({page}) => {
    const loginPage = new LoginPage(page)
    const invalidUsername = invalidUser.username
    const invalidPassword = invalidUser.password

    await loginPage.goto()
    await loginPage.login(invalidUsername, invalidPassword)

    await expect(loginPage.errorMessage).toHaveText("Your username is invalid!")
})