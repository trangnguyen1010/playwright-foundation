import { APIResponse, expect, request, test } from "@playwright/test";

test.describe("API testing", () => {
    let response: APIResponse
    let users: any[]

    test.beforeEach(async({request}) => {
        response = await request.get("https://jsonplaceholder.typicode.com/users")
        users = await response.json()
    })

  test("Verify response status", async () => {

    expect(response.status()).toBe(200)
    expect(response.ok()).toBe(true)
  })

  test("Test case 2 - verify total number of users", async () => {
    expect(Array.isArray(users)).toBeTruthy()
    expect(users).toHaveLength(10)
  })

  test("Test case 3 - verify the first user information", async () => {
    const firstUser = {
      id: users[0].id,
      name: users[0].name,
      username: users[0].username,
    }

    expect(firstUser.id).toBe(1)
    expect(firstUser.name).toBe("Leanne Graham")
    expect(firstUser.username).toBe("Bret")
  })

  test("Test case 4 - verify every user has required fields", async () => {    for (const user of users) {
      expect(user.id).toEqual(expect.any(Number))
      expect(user.name).toEqual(expect.any(String))
      expect(user.username).toBeDefined()
      expect(user.email).toBeDefined()
    }
  })
})
