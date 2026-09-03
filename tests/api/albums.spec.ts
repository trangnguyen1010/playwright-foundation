import { APIResponse, expect, test } from "@playwright/test";

test.describe("API albums testing", ()=> {
    let response: APIResponse
    let albums: any[]

    test.beforeEach(async({ request }) => {
        response = await request.get("https://jsonplaceholder.typicode.com/albums")
        albums = await response.json()
    })

    test("Verify status code", ()=> {
        expect(response.status()).toBe(200)
        expect(response.ok()).toBeTruthy()
    })

    test("Verify the first album information is correct", async()=> {
        expect(albums).toBeInstanceOf(Array)

        expect(albums[0].id).toBe(1)
        expect(albums[0].userId).toBe(1)
    })
})