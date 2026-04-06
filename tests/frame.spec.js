import { test} from '@playwright/test'

test('frame', async({page}) => {

await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
//content frame
// let frame= await page.locator('[class="w-full h-96"]').contentFrame()
// await frame.locator('#username').fill('abc123')

//framelocator
let frame = await page.frameLocator('[class="w-full h-96"]')
await frame.locator('#username').fill('abc123')

console.log(await page.frames().length);

const frames = page.frames();

for (const frame of frames) {
  console.log(frame.url());
}
await page.pause()

    
});
test.skip('nested frame', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')
    let parentframe= await page.frameLocator('[class="w-full h-96"]')
    let child= await parentframe.frameLocator('iframe')
    await child.locator('#email').fill('abc@gamil')  
});

test('url of frame', async({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    let frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator('[name="mytext1"]').fill('25656')


    //explicit waits

    page.waitForEvent() //can be used to handle dowload event or new page
    page.waitForLoadState('domcontentloaded', {timeout:10000})
   
    page.waitForTimeout(2000) //avoid the usage it will just pause the execution

    page.waitForSelector('css/xpath expression',{timeout:10000})

    page.getByRole().waitFor({state:''}) //by default  wait for the state visible

    page.waitForURL('https://playwright.dev/docs/api/class-page#page-wait-for-url') //wait for the particular url to load


page.waitForNavigation()

});