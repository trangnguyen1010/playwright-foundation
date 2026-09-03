import { expect, test } from "@playwright/test";

test("API Headers & authentication", async({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users", {
        headers: {
            Accept: "application/json",
            "X-Training": "AI-QA-Bootcamp"
        }
    })

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()

    const contentType = response.headers()["content-type"]
    const users = await response.json()
    expect(contentType).toContain("application/json")
    expect(users.length).toBeGreaterThan(0)
})