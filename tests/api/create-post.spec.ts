import { expect, test } from "@playwright/test";

test.describe("Create post API", () => {
   
    test("create a new post", async({ request}) => {
        const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
            data: {
                title: "AI QA Bootcamp",
                body: "Learning API Testing",
                userId: 1
            }
        })

        
        expect(response.status()).toBe(201)
        expect(response.ok()).toBeTruthy()

        // verify new data 
        const post = await response.json()
        expect(post.title).toBe("AI QA Bootcamp")
        expect(post.body).toBe("Learning API Testing")
        expect(post.userId).toBe(1)
    })
})