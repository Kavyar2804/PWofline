 import{test} from '@playwright/test'
// import { log } from 'console';


test('gjkhgkghi',{tag: ['@smoke', '@regression']}, async({page}) => {
    
   await page.goto('');

await page.locator('#twotabsearchtextbo').fill('laptop');
// 


let res= await page.waitForFunction(() => {
  let autosugg= document.querySelectorAll('.s-suggestion-container')

 return autosugg.length
});
console.log(await res.jsonValue());

});


