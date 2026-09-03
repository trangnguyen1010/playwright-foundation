import { test as base } from "@playwright/test";
import { HomePage, ProductPage } from "../pages/HomePage";
import { SearchResultPage } from "../pages/SearchResultPage";

type Pages = {
    homePage: HomePage
    searchResultPage: SearchResultPage
    productPage: ProductPage
}

export const test = base.extend<Pages>({
    homePage: async({page}, use) => {
        await use(new HomePage(page))
    },

    searchResultPage: async({page}, use) => {
        await use(new SearchResultPage(page))
    },

    productPage: async({page}, use) => {
        await use(new ProductPage(page))
    }
})

export {expect} from "@playwright/test"