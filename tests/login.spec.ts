import { expect, test } from "@playwright/test";
import { LoginPage} from "../pages/loginPage";
import { validUser, invalidUser } from "../test-data/users";



test.describe("Login test", () => {
    test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    })

    test("Successful login", async({page}) => {
        const loginPage = new LoginPage(page)
        const username = validUser.username
        const password = validUser.password

        await loginPage.login(username, password)

        await expect(page).toHaveURL(/logged-in-successfully/)
        await expect(loginPage.successTitle).toBeVisible()
        await expect(loginPage.logoutButton).toBeVisible()
    })

    test("Wrong username", async({page}) => {
        const loginPage = new LoginPage(page)
        const invalidUsername = invalidUser.username
        const password = validUser.password
        
        await loginPage.login(invalidUsername, password)
        await expect(loginPage.errorMessage).toContainText("Your username is invalid!")
    
    })

    test("Wrong password", async({page}) => {
        const loginPage = new LoginPage(page)
        const validUsername = validUser.username
        const invalidPassword = invalidUser.password

        await loginPage.login(validUsername, invalidPassword)

        await expect(loginPage.errorMessage).toContainText("Your password is invalid!")
        
    })

    test("Invalid username and password", async({page}) => {
        const loginPage = new LoginPage(page)
        const invalidUsername = invalidUser.username
        const invalidPassword = invalidUser.password

        await loginPage.login(invalidUsername, invalidPassword)
        await expect(loginPage.errorMessage).toContainText("Your username is invalid!")
    })
})
