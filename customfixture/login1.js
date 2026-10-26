import { test as basetest} from '@playwright/test'


export const test= basetest.extend({

    loginfixture1:async({page},use)=>{

// set up

console.log('setup');
await  page.goto('https://demoapps.qspiders.com/ui?scenario=1')
await page.getByPlaceholder('Enter your name').fill('abc')
await page.getByPlaceholder('Enter Your Email').fill('abc@123.com')
await page.getByPlaceholder('Enter your password').fill('abc@123')
await page.getByRole('button', {name: 'Register'}).click()

await use()


//teardown

console.log('teardown');


    }





})
