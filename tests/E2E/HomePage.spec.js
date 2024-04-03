import { test, expect } from '@playwright/test';
import { HomePage } from '../../Page/HomePage';
import { BusinessPage } from '../../Page/BusinessPage';
import { PersonalPage } from '../../Page/PersonalPage';


let homePage;
let personalPage;
let businessPage;

let menu = ['Personal Banking',
    'Business',
    'Institutional',
    'Private'];

let menuPageBannerTitle = ['Grow your money with a term deposit',
    'Expertise to help you find the right solutions'];


test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test.describe('Validate main page ', async () => {

    test('Validate page loading', async ({ page }) => {
        await expect(page).toHaveTitle('BNZ - Personal & Business Banking');
        await expect(page).toHaveURL('https://www.bnz.co.nz/');
    });

    test('Validate banner title', async ({ page }) => {
        homePage = new HomePage(page);
        homePage.validateBannerTitle();
    });

    test('Validate main menu heading in the left side', async ({ page }) => {
        homePage = new HomePage(page);

        for (var i = 0; i < menu.length; i++)
            homePage.validateMainMenuItems(i + 1, menu[i]);
    })

    test('Validate personal pages title', async ({ page }) => {
        homePage = new HomePage(page);
        personalPage = new PersonalPage(page);
        businessPage = new BusinessPage(page);

        await homePage.clickMainMenuItem('Personal');
        await personalPage.validateBannerTitile(menuPageBannerTitle[0]);
        await homePage.clickMainMenuItem('Business');
        await businessPage.validateBannerTitile(menuPageBannerTitle[1]);

    })




})

