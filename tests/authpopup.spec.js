import{test} from '@playwright/test'

test('authpopup', {
    tag:['@smoke','@regression']},async({browser}) => {

    const contxt= await browser.newContext(
       {httpCredentials:{
    username:'admin',
    password:'admin'
       }}
    )
    const page= await contxt.newPage()
    await page.goto('https://admin:admin@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    await page.pause()
    
});