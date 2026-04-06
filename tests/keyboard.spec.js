import{test} from '@playwright/test'

test('keyboard actions', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/keyboard?sublist=0')
    // await page.locator('//input[@name="handleInput"]').type('playwright')
     await page.locator('//input[@name="handleInput"]').click()
    // await page.keyboard.type('playwright',{delay:50})
    // await page.keyboard.insertText('javascript')
    // await page.locator('//input[@name="handleInput"]').clear()
    await page.keyboard.press('Shift+a')
    // await page.keyboard.press('Shift')
    // await page.keyboard.press('a')
    // // await page.keyboard.up('Shift')

    await page.pause()

    // await page.goto('https://www.amazon.in/')
    // await page.getByPlaceholder('Search Amazon.in').click()
    // await page.keyboard.type('mobiles')
    // // await page.getByPlaceholder('Search Amazon.in').press('Enter')
    // await page.keyboard.press('Enter')
    // await page.keyboard.press('PageDown')





    
});