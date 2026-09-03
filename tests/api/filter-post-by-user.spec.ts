import { expect, test } from "@playwright/test";

test("Filter posts by user id", async({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/posts",{
        params: {
            userId: 2
        }
    })

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
    
    const posts = await response.json()
    expect(posts.length).toBeGreaterThan(0)
    for(const post of posts){
        expect(post.userId).toBe(2)
    }

})