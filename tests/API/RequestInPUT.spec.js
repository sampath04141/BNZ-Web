const { test, expect } = require("@playwright/test");

test('update user', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Sam Gnanarathne",
            "job": "Dev"
        }
    })

    expect(await response.status()).toBe(200)
    const text= await response.text()
    expect (text).toContain('Dev')
})