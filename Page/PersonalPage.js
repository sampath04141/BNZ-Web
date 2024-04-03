const { expect } = require('@playwright/test');

class PersonalPage {
    constructor(page) {
        this.page = page;
        this.bannerTitle = this.page.locator('.welcome_heading');
    }

    async validateBannerTitile(expectedValue) {

        await expect(this.bannerTitle).toHaveText(expectedValue);
    }

}
module.exports = { PersonalPage, }