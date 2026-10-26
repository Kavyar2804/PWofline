import {expect, test} from '../customfixture/login.js'

// import{ test, expect} from '@playwright/test'

test('performing assertions', async({loginfixture,page}) => {

// await page.goto('https://demoapps.qspiders.com/ui')
// // await  expect(page).toHaveTitle('DemoApps | Qspiders | Text', {timeout:2000})
// await expect(page.getByText('Without placeholder')).toContainText('placeholder')
// await page.goto('https://demoapps.qspiders.com/ui/table?scenario=1')
// await expect(page.locator('//tbody/tr/th')).toContainText(['HP Envy'])
//  await expect(page.locator('//tbody/tr[1]/th')).toHaveAttribute('scope', 'row',{timeout:3000})
 await expect(page.locator('//tbody/tr/th')).not.toHaveCount(4)
  await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
await page.getByRole('button', {name: 'Yes'}).click()
await expect.soft(page.getByRole('button', {name: 'Yes'}), 'it should have css property').toHaveCSS('background-color', 'rgb(134, 239, 172)')

// await expect(page).tobe

// await expect.soft(page, 'to match exact to the screenshot').toHaveScreenshot()

// let a = 'PLAYWRIGHT'

// expect(a, 'should match').toContain('PLAYWRIGHT')

await expect(page).toHaveScreenshot('homepage')

});

