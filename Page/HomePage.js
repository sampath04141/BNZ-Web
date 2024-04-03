// Import expect function from '@playwright/test' module
const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.bannerTitle = this.page.locator('.welcome_heading');
        this.headMenuLeftItemsXpath = '//nav[@aria-label="Header"]/ul[1]/li['
        this.personal = this.page.locator('//nav[@aria-label="Header"]/ul[1]/li[1]');
        this.business = this.page.locator('//nav[@aria-label="Header"]/ul[1]/li[2]');
    }

    async validateBannerTitle() {
        // banner title
        await expect(this.bannerTitle).toHaveText('Grow your money with a term deposit');
    }

    async validateMainMenuItems(inxex, expectedValue) {
        const menuXpath = this.headMenuLeftItemsXpath + inxex + ']/a';
        await expect(await this.page.locator(menuXpath).textContent()).toContain(expectedValue);
    }

    async clickMainMenuItem(item) {
        if (item === 'Personal') {
            console.log('here-->' + this.personal);
            await this.personal.click();
        }
        else {
            console.log('here 2-->' + this.business);
            await this.business.click();
        }
    }
}

module.exports = { HomePage };
