import { APIResponse, expect, test } from "@playwright/test";

test.describe("GET comments testing", () => {
    let response: APIResponse
    let comments: any[]

    test.beforeEach(async({ request }) => {
        response = await request.get("https://jsonplaceholder.typicode.com/comments")
        comments = await response.json()
    })

    test("Verify the status code", () => {
        expect(response.status()).toBe(200)
        expect(response.ok()).toBeTruthy()
    })
    test("Verify there are 500 comments", async() => {
        expect(comments).toBeInstanceOf(Array)
        expect(comments.length).toBe(500)
    })
})