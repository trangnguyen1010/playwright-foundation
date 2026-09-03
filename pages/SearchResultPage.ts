import { Locator, Page } from "@playwright/test";

export class SearchResultPage{
    readonly searchResultTitle: Locator
    readonly productNames: Locator

    constructor(page: Page){
        this.searchResultTitle = page.locator('[data-test="search_completed"]')
        this.productNames = page.locator('[data-test="product-name"]')
        
    }

    async getResultCount(): Promise<number>{
      return await this.productNames.count()
    }

    async getProductNames(): Promise<string[]>{
       const names = await this.productNames.allTextContents()

       return names.map((name) => name.trim())
    }

    async openFirstResult(): Promise<void>{
        await this.productNames.first().click()
    }
}