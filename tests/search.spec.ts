import { test, expect } from "../fixtures/testFixture";
import { searchData, validKeywords } from "../test-data/searchData";
import { verifyProductNames } from "../utils/SearchValidator";


test.describe("Search tools", () => {
    test.beforeAll( async() => {
        console.log("===== Test suite started =====")
    })

    test.beforeEach( async({ homePage }) => {
        console.log("Open home page")
        await homePage.goto()
    })
    test("search available product", async ({ page, homePage, searchResultPage }) => {
        await homePage.search(searchData.validKeyword)
        await expect(searchResultPage.searchResultTitle).toBeVisible()

        const resultCount = await searchResultPage.getResultCount()
        expect(resultCount).toBeGreaterThan(0)

        //verify the search result related to keyword
        
        const productNames = await searchResultPage.getProductNames()
        verifyProductNames(productNames, searchData.validKeyword)

        // open the first product

        await searchResultPage.openFirstResult()

        //verify product detail page
        await expect(page).toHaveURL(/product/)
    })

    for(const keyword of validKeywords){
        test(`Search product: ${keyword}`, async ({ page, homePage, searchResultPage }) => {
            
            await homePage.search(keyword)
            await expect(searchResultPage.searchResultTitle).toBeVisible()

            const resultCount = await searchResultPage.getResultCount()
            expect(resultCount).toBeGreaterThan(0)

            //Verify all products related to keyword

            const productNames = await searchResultPage.getProductNames()
            verifyProductNames(productNames, keyword)

            await searchResultPage.openFirstResult()

            //verify product detail page
            await expect(page).toHaveURL(/product/)

        })
    }

    test.afterEach( async() => {
        console.log("===Test completed ===")
    })

    test.afterAll( async() => {
        console.log("=== Test suite finished ===")
    })
    
})
