import{test, expect} from '@playwright/test'
const { AxeBuilder } = require('@axe-core/playwright');


test.describe('Accessibility Testiing HomePage ', async()=>{

    test.beforeEach(async({page})=>{
        await page.goto('/',{timeout:6000})
    })
    
    test('Validate Home Page', async({page})=>{
        const scan = await new AxeBuilder({ page }).analyze(); 
        expect(scan.violations).toEqual([]); 
    })


    test('Validate home page with WCAG AA standerds', async({page})=>{
        const scan = await new AxeBuilder({page})
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

        expect(scan.violations).toEqual([])

    })
})