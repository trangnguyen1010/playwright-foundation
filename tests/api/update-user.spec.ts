import { expect, test } from "@playwright/test";

test("Update user information", async({ request }) => {
        const dataPayload = {
        id: 1, 
        name: "Trang Nguyen",
        username: "trangnguyen",
        email: "trang@example.com"
    }
        const response = await request.put("https://jsonplaceholder.typicode.com/users/1", {
            data: dataPayload
        })

        expect(response.status()).toBe(200)
        const user = await response.json()

        //verify the user info
        expect(user.id).toBe(dataPayload.id)
        expect(user.name).toBe(dataPayload.name)
        expect(user.username).toBe(dataPayload.username)
        expect(user.email).toBe(dataPayload.email)
})
