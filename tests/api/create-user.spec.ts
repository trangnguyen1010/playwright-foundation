import {  expect, test } from "@playwright/test";

test.describe("POST API test", () => {

    test("Create a new user", async({ request}) => {
        const userPayload = {
            name: "Trang",
            username: "trangnguyen",
            email: "trang@example.com"
        }
        const response = await request.post("https://jsonplaceholder.typicode.com/users", {
            data: userPayload
        })

        expect(response.status()).toBe(201)
        expect(response.ok()).toBeTruthy()

        // verify new data
        const user = await response.json()

        expect(user.name).toBe(userPayload.name)
        expect(user.username).toBe(userPayload.username)
        expect(user.email).toBe(userPayload.email)
    })
})