import { test, expect } from '@playwright/test'

test('Create a user', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {

            "name": "Sam Gnanarathne",
            "job": "Tester"
        }
    })

    expect(await response.toBeOK)
    const text = await response.text()
    expect(text).toContain('Sam Gnanarathne')
    expect(text).toContain('Tester')
})