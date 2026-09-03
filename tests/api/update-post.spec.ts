import { expect, test } from "@playwright/test";

test("Update post information", async({ request }) => {
    const dataPayload = {
        title: "Update AI QA Bootcamp"
    }

    const response = await request.patch("https://jsonplaceholder.typicode.com/posts/1", {
        data: dataPayload
    })

    expect(response.status()).toBe(200)

    const post = await response.json()
    expect(post.title).toBe(dataPayload.title)
})