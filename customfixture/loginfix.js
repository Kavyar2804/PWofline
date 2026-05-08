import{test as base, expect} from '@playwright/test'



export const test1 = base.extend({

    loginfixture: [async({page},use)=>{

await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
await page.getByPlaceholder('Enter your name').fill('hjhjh')
await page.getByPlaceholder('Enter Your Email').fill('hhnn@gmail.com')
console.log('fixture');


await use()

console.log('teardown');

    },  { auto: true }]


})

export { expect } from '@playwright/test';

