import { Locator, Page} from "@playwright/test";

export class LoginPage {
    readonly errorMessage: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly usernameInput: Locator
    readonly successTitle: Locator
    readonly logoutButton: Locator
    
    constructor(private readonly page: Page){
        this.errorMessage = page.locator('#error')
        this.usernameInput = page.getByLabel("Username")
        this.passwordInput = page.getByLabel("Password")
        this.submitButton = page.getByRole("button", {name: "Submit"})
        this.successTitle = page.getByText("Logged In Successfully")
        this.logoutButton = page.getByRole("link", {name: /logout/i})
    }

   

    async goto() {
        await this.page.goto("https://practicetestautomation.com/practice-test-login/")
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
    }

    async getErrorMessage(){
        return  this.errorMessage.textContent()
        
    }

    async logout(){
        await this.logoutButton.click()
    }

    async isLoggedIn(){
        return await this.logoutButton.isVisible()
    }
}

