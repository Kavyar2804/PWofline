import {test} from '@playwright/test'

test('handle multiple windows', async({browser}) => {

   const cntxt =  await browser.newContext()
   const page = await cntxt.newPage()
   await page.goto('https://demoapps.qspiders.com/ui/browser')

   let pagepromise= cntxt.waitForEvent('page')
   await page.getByRole('button', {name:'view more'}).first().click()
   let page2= await pagepromise

   await page2.getByRole('button',{name:'Add to Cart'}).click()
   await page2.close()
   
   console.log(await cntxt.pages.length);
   
   await cntxt.pages.length
   await page.pause()
    
});