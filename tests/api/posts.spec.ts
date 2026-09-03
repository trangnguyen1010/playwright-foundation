import { APIResponse, expect, test } from "@playwright/test";

test.describe("API posts testing", () => {
    let response: APIResponse

    test.beforeEach("get response from api", async({ request }) => {
        response = await request.get("https://jsonplaceholder.typicode.com/posts")
    })

    test("Verify GET /post return correct status", async()=> {
        expect(response.status()).toBe(200)
        expect(response.ok()).toBeTruthy()
    })

    test("Verify there are 100 posts", async()=> {
        const posts = await response.json()
        expect(posts).toBeInstanceOf(Array)
        expect(posts.length).toBe(100)
    })
})