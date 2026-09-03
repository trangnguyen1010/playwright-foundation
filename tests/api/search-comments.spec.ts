import { expect, test } from "@playwright/test";

test("Search comments by post id ", async({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/comments", {
        params: {
            postId: 1
        }
    })

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    
    const comments = await response.json()
    expect(comments.length).toBeGreaterThan(0)
    for(const comment of comments){
        expect(comment.postId).toBe(1)
        expect(comment.id).toBeDefined()
        expect(comment.email).toBeDefined()
        expect(comment.body).toBeDefined()
    }
})