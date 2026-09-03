import { expect, test } from "@playwright/test";

test("Filter user by id", async({ request }) => {

    const response = await request.get("https://jsonplaceholder.typicode.com/users",{
        params: {
            id: 3
        }
    })

    const users = await response.json()
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    expect(users.length).toBe(1)
    expect(users[0].id).toBe(3)
    expect(users[0].name).toBeTruthy()
    expect(users[0].email).toContain("@")
})