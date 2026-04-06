import {test} from '@playwright/test'

test('locators', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    // await page.locator('//input[@id="twotabsearchtextbox"]')

    await page.getByPlaceholder('Enter your name').fill('laptop') // input fields

    await page.getByLabel('Password').fill('abc@1234') //input field or forms

    await page.getByText('Without placeholder').click()

   let text= await page.getByText('Password', {exact:true}).textContent()

   console.log(text);


   await page.getByRole('button',{name:'Register'}).click()

   await page.getByRole('link', {name: 'Button', exact:true}).click()
   


    //get by methods
    
});