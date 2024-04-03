import { test, expect } from '@playwright/test'

test('retrive ser list (GET REQUEST)', async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users?page=2")
    expect((await response.status())).toBe(200)
    console.log('status code-->' + await response.status())

    const text = (await response.text())
    console.log((await response.json()))
    expect(text).toContain('Michael')

})




