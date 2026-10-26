import{test} from '@playwright/test'

test('dialogs', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0')
  
        let count=0
      page.on('dialog',async(dialog)=>{
       
        if(count<1)
            {
              console.log( await dialog.message());
        await page.waitForTimeout(2000)
        await dialog.accept()  // to click on ok 
        count++
        }
        else{
              await dialog.dismiss()
        }
      

    })

    await page.locator('//tbody/tr[1]/td/input').check()

    await page.getByRole('button', {name:'Delete'}).click()
    
    //  page.once('dialog',async(dialog)=>{

    //     console.log( await dialog.message());
    //     await page.waitForTimeout(2000)
    //     await dialog.accept()  // to click on ok 

    // })


    await page.locator('//tbody/tr[1]/td/input').check()
     await page.getByRole('button', {name:'Delete'}).click()

        await page.pause()

    
});

test.skip('promp popup', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')

        page.once('dialog',async(dialog)=>{

        console.log( await dialog.message());
        await page.waitForTimeout(2000)
        await dialog.defaultValue(  )
        await dialog.accept('some text')  // to click on ok 

    })


    await page.locator('//tbody/tr[1]/td/input').check()
     await page.getByRole('button', {name:'Delete'}).click()

        await page.pause()

    
});