import {expect, test} from '@playwright/test'
import path from 'node:path';
import fs1 from 'fs'
test('filedownload', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    let customfilepath = 'C:/Users/User/OneDrive/Desktop/PWDowload'
    let filename= 'some.txt'
    let fullpath = path.join(customfilepath,filename)
    console.log(fullpath);
    await page.locator('#writeArea').fill('Lets download the file')
    let dowloadpromise= page.waitForEvent('download')
    await page.getByRole('button',{name:'Download'}).click()
     let dowloadfile = await dowloadpromise
     console.log(await dowloadfile.path());
    await dowloadfile.saveAs(fullpath)
    if(fs1.existsSync(fullpath))
    {
        console.log('file is available');
    }
    else{
        console.log('not dowloaded');
    }
    let filecontent= fs1.readFileSync(fullpath,'utf-8')
    console.log(filecontent);
    expect(filecontent).toContain('download')
    

    await page.pause()


    



    
});