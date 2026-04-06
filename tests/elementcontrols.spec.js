import{test} from '@playwright/test'

test('elementcontrol', async({page}) => {

    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
   
    //   await page.getByPlaceholder('Enter your name').type('abc14235') //will not clear the existing data
    //    await page.getByPlaceholder('Enter your name').fill('abc@123') //will clear & fill new value
    //    let entereedval= await page.getByPlaceholder('Enter your name').getAttribute('value') // get attribute returns the attribute value
    //   console.log(entereedval);

    //   await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')

    //   await page.locator('#domain_a').check()

      //uncheck

      // single select dropdown

      await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')

      await page.locator('#country_code').selectOption('+91') //passing the visible text
      await page.locator('#country_code').selectOption({label:'+14'}) //selct by label
      await page.locator('#select3').selectOption({index:0})
    
       // multi select dropdown

       await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1')
       await page.locator('#select-multiple-native').selectOption(["Fjallraven - Foldsac...","Mens Casual Premium ..."])
       await page.getByRole('button', {name: 'Add'}).click()
       await page.pause()

       //to fetch text

        let text= await  page.locator('//tbody/tr/td[1]').allTextContents()
        console.log(text);
        
        //textcontent you will get text of hidded elements
        //innertext it will not return the hidden text


        //indexing methods
        //first()
        //last()
        //nth()

        let text1= await  page.locator('//tbody/tr/td[1]').first().textContent()
        console.log(text1);

        // let text2= await  page.locator('//tbody/tr/td[1]').nth(5)// zero based index
        




    
});