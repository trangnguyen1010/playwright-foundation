import { expect, test } from "@playwright/test";

test("Delete API testing", async({ request }) => {
    const response = await request.delete("https://jsonplaceholder.typicode.com/posts/1")

    expect([200, 204]).toContain(response.status())
    expect(response.ok()).toBeTruthy()

    if(response.status() !== 204){
        const body = await response.json()
        expect(body).toEqual({})
    }
})