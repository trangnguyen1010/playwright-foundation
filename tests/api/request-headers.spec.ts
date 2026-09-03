import { expect, test } from "@playwright/test";

test("Request with headers", async({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            Accept: "application/json"
        }
    })
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()

    const contentType = response.headers()["content-type"]
    expect(contentType).toContain("application/json")
})