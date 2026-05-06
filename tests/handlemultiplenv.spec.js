import{test} from '@playwright/test'


test('env', async({page}) => {

    console.log(  process.env.BASE_URL);
    console.log(process.env.USERNAME1);
    const url= process.env.BASE_URL
    await page.goto(url)
    
    

  
    
});