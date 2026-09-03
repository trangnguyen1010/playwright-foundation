import { Locator, Page } from "@playwright/test";

export class HomePage{

    readonly searchField: Locator
    readonly searchButton: Locator
    constructor(private readonly page: Page){
        this.searchField = page.locator("#search-query")
        this.searchButton = page.getByRole("button", {name: "Search"})
    }

    async goto(): Promise<void>{
        await this.page.goto("https://practicesoftwaretesting.com/")
        await this.searchField.waitFor({state: "visible"})
    }

    async search(keyword: string): Promise<void>{
        await this.searchField.fill(keyword)
        await this.searchButton.click()
    }
}

export class ProductPage{
    constructor(private readonly page: Page){}

    async getTitle(): Promise<string>{
        return await this.page.locator("[data-test='product-name']").innerText()
    }
}