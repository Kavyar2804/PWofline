import {test, expect} from '@playwright/test'

test('assertion', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    // // await expect(page).toHaveTitle('DemoApps | Qspiders |',{timeout:6000})
    // // await expect(page).toHaveURL('https://demoapps.qspiders.com/ui?scenario=1')
    await expect(page.getByPlaceholder('Enter your name')).toBeEditable({timeout:2000,editable:false})
    //  await expect(page.getByPlaceholder('Enter your name')).toBeInViewport({ratio:0.5})
    //  await expect(page.getByRole('link', {name:'Text Field', exact:true})).toContainText('Field')

    //  await page.goto('https://demoapps.qspiders.com/ui/table?scenario=1')
    //  await expect(page.locator('//tbody/tr/th')).toContainText(['HP Envy','APPLEIPhone', ])
    //  await expect(page.locator('//tbody/tr/th')).toHaveCount(4)

     await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
     await page.getByRole('button',{name: 'Yes'}).click()
     await expect.soft(page.getByRole('button',{name: 'Yes'}), 'should match the value').toHaveCSS('background-color', 'rgb(134, 239, 17)')

     await expect.soft(page, 'should match screenshot').toHaveScreenshot('home.png')

     let a = 'something'

     //negative
     expect(a).not.toContain('thing')
});