import{test as basetest} from '@playwright/test'

export const test = basetest.extend({

    loginfixture:async({page}, use)=>{
          
        await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
        await page.getByPlaceholder('Enter your name').fill('abc123')
        await page.getByPlaceholder('Enter Your Email').fill('abc123@gmail.com')
        await page.getByPlaceholder('Enter your password').fill('abc@123')
        await page.getByRole('button', {name:'Register'}).click()
        console.log('fixture');
        

      await use()

      //logout

    },

    search:async({page, use})=>{



    }




})