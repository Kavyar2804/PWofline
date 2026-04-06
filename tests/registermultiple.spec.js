import{test} from '@playwright/test'
import { Registerpage } from '../pageobjects/registerpage.js';
import tdata from '../testdata/multipledata.json'


for(let data of tdata)
{
test(`register user ${data.username}`, async({page}) => {

let rpage= new Registerpage(page)
 await rpage.navigate('https://demoapps.qspiders.com/ui?scenario=1')
await rpage.nametf.waitFor()
await rpage.registeruser(data.username, data.email, data.pwd)
await page.pause()
    
}); 
}


