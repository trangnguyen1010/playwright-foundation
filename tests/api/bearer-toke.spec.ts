import { expect, test } from "@playwright/test";

test("Bear-token testing", async({ request }) => {
    const token = "fake-token"
    const response = await request.get("https://httpbin.org/bearer", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    
    const body = await response.json()
    expect(body.authenticated).toBe(true)
    expect(body.token).toBe(token)

    console.log(response.headers())
    console.log(body)

})