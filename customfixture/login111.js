import{ test as base} from '@playwright/test'

 export const test= base.extend({

loginfixture1:async({page},use)=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.locator('#name').fill('abc123')
    
    console.log('befor script execution');
    
    //setup
    await use()

    console.log('after script execution');
    

    //teardown
    //logout


}



})