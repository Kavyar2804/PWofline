
import{test} from '@playwright/test'

test('mouse actions', async({page}) => {

    // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    // await page.getByRole('button', {name:'Yes'}).click() // by default it is left click


    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1')
    // await page.getByRole('button', {name: 'Right Click'}).click({button:'right'})


    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2')
    // // await page.getByRole('button', {name:'Yes'}).click({clickCount:2})

    //  await page.getByRole('button', {name:'Yes'}).dblclick()

    //  //disabled

    //  await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    //  await page.locator('#submit').click({force:true})

    //  await page.locator('#submit').dispatchEvent('click') //draging,  press enter



    // //mouse hover , up & down
    // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
    // await page.locator('#circle').hover()
    // // await page.mouse.down()
    // await page.locator('#circle').dispatchEvent('mousedown')
    // await page.waitForTimeout(2000)
    // // await page.mouse.up()
    // await page.locator('#circle').dispatchEvent('mouseup')

    // await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
    // // // await page.waitForTimeout(2000)
    // // await page.mouse.wheel(0,1000)
    // //  await page.mouse.wheel(0,1000)
    // //   await page.mouse.wheel(0,1000)

    // await page.locator('[type="checkbox"]').scrollIntoViewIfNeeded()


    //   await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabHorizontal')
    //   await page.waitForTimeout(2000)
    //    await page.mouse.wheel(1000,0)
    //   await page.mouse.wheel(100,0)

    // await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
    // await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover()
    // await page.mouse.move(100,200)


    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')
    // await page.getByText('Drag Me').hover()
    // await page.mouse.down()
    // await page.mouse.move(200,100)
    // await page.mouse.up()

    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    //dragging by mouse
    // await page.getByText('Mobile Charger').hover()
    // await page.mouse.down()
    // await page.locator("//div[text()='Mobile Accessories']/parent::div").hover()
    // await page.mouse.up()

    // dragging by method
    // await page.getByText('Mobile Charger').dragTo(page.locator("//div[text()='Mobile Accessories']/parent::div"))


    //dragging by getting location

     await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
     await page.getByText('Mobile Charger').hover()
     await page.mouse.down()
  let boxdetails =  await page.locator("//div[text()='Mobile Accessories']/parent::div").boundingBox()
  console.log(boxdetails);

  await page.mouse.move(boxdetails.x, boxdetails.y)

  await page.mouse.up()
  





    await page.pause()




    

    
});