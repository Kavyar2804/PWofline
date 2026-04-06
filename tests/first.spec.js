import {test} from '@playwright/test'

test.describe('', ()=>{

    test('first script',async({browser})=>{

    //test.slow()
    //test.setTimeout(10000)

    const context = await browser.newContext()  // creates a fresh instances like incogoti browse.. where cookies & history
   await context.addCookies([
    {
    name:'abc',
    value:'abc@123',
    domain:'example.com',
    url:'https://www.amazon.in/'}]
   )
   
    const page = await context.newPage() // adds one tab to the fresh browser instance
    await page.goto('https://www.amazon.in/')
    await page.locator('#twotabsearchtextbox').fill('mobiles')
    console.log( await page.title());
     console.log(await page.url());
     await page.goBack()
     await page.goForward()
     await page.reload()

     await page.screenshot({path: './screenshoot/screen1.png', fullPage:true})

     const cooki= await context.cookies()
     console.log(cooki);
     
    
    // await page.pause()

    // const page2= await context.newPage()

    // console.log( await page.viewportSize());
    // await page.setViewportSize({width:1000, height:720})
    

    // await page2.goto('https://playwright.dev/docs')
    // console.log(await page2.title());
    // await page2.pause()

    // console.log(await context.pages().length);

    //  const allpages= await context.pages()

    //  await allpages[1].close()

    //  console.log(await context.pages().length);
   

})

test.skip('seconnd', async({page})=>{

    await page.goto('https://www.flipkart.com/')
await page.pause()


})


})


//test annotations
//test.only
//test.skip
//test.fixme
//test.fail
//test.slow()
//test.slow()
//test.setTimeout(10000)
//test.deacribe()





