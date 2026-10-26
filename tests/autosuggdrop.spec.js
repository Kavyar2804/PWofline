import{test} from '@playwright/test'
import { Registerpage } from '../pageobjects/registerpage';

import {Register} from '../pageobjects/registerpage.js'

test('auto suggestion dynamic dd @smoke', async({page}) => {

    await page.goto('https://www.amazon.in/')
    await page.waitForLoadState('domcontentloaded') // wait for the website to load
    await page.getByPlaceholder('Search Amazon').fill('laptop')
    await page.locator('//div[@class="left-pane-results-container"]/div').last().waitFor()
    // let alltext= await page.locator('//div[@class="left-pane-results-container"]/div').allTextContents()
    // console.log(alltext);
     let allloc= await page.locator('//div[@class="left-pane-results-container"]/div').all()
     for(let loc of allloc)
     {
        let text = await loc.textContent()
        if(text.includes('20000'))
        {
            await loc.click()
            break
        }

     }

    await page.pause()
    let rpage= new Register(page)
    await rpage.navigate()
});

