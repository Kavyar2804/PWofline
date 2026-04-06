import{expect, test} from '@playwright/test'

test('notification', async({browser}) => {

    const cntxt = await browser.newContext(
        {permissions:['notifications']}
    )
    const page= await cntxt.newPage()
    await page.goto('ui/browserNot?sublist=0')
    await page.getByRole('button', {name:'something'}).click()
    let status= await page.evaluate(()=>Notification.permission)
    //page.evaluate is a method in playwright that runs code inside the browser/context(not in nodejs)
    console.log(status);

    expect(status).toBe('granted')
    

    await page.pause()
    
});