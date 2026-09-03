import {  expect, test } from "@playwright/test";

test.describe("Create comments API", () => {
    test("Create new comment", async({ request }) => {
        const response = await request.post("https://jsonplaceholder.typicode.com/comments", {
            data: {
                name: "Trang",
                email : "trang@example.com",
                body: "Great API"
            }
        })

        expect(response.status()).toBe(201)
        expect(response.ok()).toBeTruthy()

        //verify new data
        const comment = await response.json()

        expect(comment.name).toBe("Trang")
        expect(comment.email).toBe("trang@example.com")
        expect(comment.body).toBe("Great API")

    })
})