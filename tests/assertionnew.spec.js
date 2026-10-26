import {test,expect} from '@playwright/test'


test('assertions', async({page}) => {



await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
await page.getByPlaceholder('Enter your name').click()
await expect(page.getByPlaceholder('Enter your name')).toBeFocused()

await expect.soft(page).toHaveScreenshot()

await page.goto('https://demoapps.qspiders.com/ui/table?scenario=1')
await expect.soft(page.locator('//tbody/tr/th'),'elements should be present in order').toContainText(['HP Envy', 'Levis Shirt'])
await expect(page.locator('//tbody/tr/th')).toHaveCount(4)

await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
await page.getByRole('button',{name:'Yes'}).click()
await expect(page.getByRole('button',{name:'Yes'}),'should have css values').toHaveCSS('background-color','rgb(134 239 172)')
await expect(page).toHaveScreenshot()
await page.pause()
    
    
});