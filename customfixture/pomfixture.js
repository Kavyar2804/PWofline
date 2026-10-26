import {test as base1} from '@playwright/test'
import { Registerpage } from '../pageobjects/registerpage.js'

export const pomtest= base1.extend({

regstrpg:async({page}, use)=>{
    const rpage= new Registerpage(page)
    await use(rpage)

},
homepg:async({page}, use)=>{



}

})


// const LoginPage = require('./LoginPage');
// const HomePage = require('./HomePage');
// const CartPage = require('./CartPage');

// class POMManager {

//     constructor(page) {
//         this.page = page;

//         this.loginPage = null;
//         this.homePage = null;
//         this.cartPage = null;
//     }

//     getLoginPage() {

//         if (!this.loginPage) {
//             this.loginPage = new LoginPage(this.page);
//         }

//         return this.loginPage;
//     }

//     getHomePage() {

//         if (!this.homePage) {
//             this.homePage = new HomePage(this.page);
//         }

//         return this.homePage;
//     }

//     getCartPage() {

//         if (!this.cartPage) {
//             this.cartPage = new CartPage(this.page);
//         }

//         return this.cartPage;
//     }
// }

// module.exports = POMManager;


// const base = require('@playwright/test');
// const POMManager = require('../pages/POMManager');

// exports.test = base.test.extend({

//     pom: async ({ page }, use) => {

//         const pom = new POMManager(page);

//         await use(pom);
//     }

// });

// exports.expect = base.expect;




// const { test } = require('../fixtures/baseTest');

// test('Open Cart', async ({ page, pom }) => {

//     await page.goto('https://www.saucedemo.com');

//     await pom.getLoginPage().login(
//         'standard_user',
//         'secret_sauce'
//     );

//     await pom.getCartPage().openCart();
// });