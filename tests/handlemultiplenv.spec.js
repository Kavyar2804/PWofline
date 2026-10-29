import{test} from '@playwright/test'


test('env', async({page}) => {

    const url= process.env.BASE_URL
    await page.goto(url)
    
    

  
    
});