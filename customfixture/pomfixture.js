import {test as base} from '@playwright/test'
import { Registerpage } from '../pageobjects/registerpage.js'

export const pomtest= base.extend({

regstrpg:async({page}, use)=>{
    const rpage= new Registerpage(page)
    await use(rpage)

},
homepg:async({page}, use)=>{



}

})