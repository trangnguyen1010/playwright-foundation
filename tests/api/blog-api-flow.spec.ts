import { expect, test } from "@playwright/test";

test("Mini project: search all posts by user id", async({ request }) => {
    const userId = 4
    const response = await request.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            userId
        }
    })

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()

    const posts = await response.json()

    expect(posts.length).toBeGreaterThan(0)

    for(const post of posts){
        expect(post.userId).toBe(userId)
    }

    const firstPost = posts[0]
    // search comment by post id
    const commentResponse = await request.get("https://jsonplaceholder.typicode.com/comments", {
        params: {
            postId: firstPost.id
        }
    })

    expect(commentResponse.status()).toBe(200)
    expect(commentResponse.ok()).toBeTruthy()

    const comments = await commentResponse.json()

    expect(comments.length).toBeGreaterThan(0)

    for(const comment of comments){
        expect(comment.postId).toBe(firstPost.id)
        expect(comment.id).toBeGreaterThan(0)
        expect(comment.body.length).toBeGreaterThan(0)
        expect(comment.email).toContain("@")
    }
})