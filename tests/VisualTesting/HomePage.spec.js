const { test, expect } = require('@playwright/test')

test('VT- Home page', async ({ page }) => {

    await page.goto('/')
    await expect(page).toHaveScreenshot('HomePage.png', {
        fullPage: true
    })
})

test('VT- Home page banner', async ({ page }) => {

    await page.goto('/')
    await expect(page.locator('.welcome_container')).toHaveScreenshot('HomePage-Banner.png')
})

test('VT- Home page banner masking text', async ({ page }) => {

    await page.goto('/')
    await expect(page.locator('.welcome_container')).toHaveScreenshot('HomePage-Banner-withMask.png',{
        mask:[page.locator('.welcome_heading'),],
        maxDiffPixels:50

    })
})

