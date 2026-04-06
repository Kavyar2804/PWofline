// import{test} from '@playwright/test'
// import { Registerpage } from '../pageobjects/registerpage.js';

// import {rgstpage} from '../pageobjects/registerpage.js'

import {hookstest as test} from '../customfixture/hooksfixture.js'

test('register user', async({regstrpg,loginfixture,logoutfixture}) => {

    console.log('test1');
// let rpage= new Registerpage(page)
await regstrpg.nametf.waitFor()
await regstrpg.registeruser('abc123','abc@gmail.com', 'abc123')



// await page.pause()
    
})