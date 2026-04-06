import{test} from '@playwright/test'
import excel from 'exceljs'
import path from 'path';

test('auto suggestion dynamic dd', async({page}) => {

    await page.goto('https://www.amazon.in/')
    await page.waitForLoadState('domcontentloaded') // wait for the website to load
    await page.getByPlaceholder('Search Amazon.in').fill('laptop')
    await page.locator('//div[@class="left-pane-results-container"]/div').last().waitFor()
    let alltext= await page.locator('//div[@class="left-pane-results-container"]/div').allTextContents()
    console.log(alltext);


    const book= new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, '../testdata/registerdata.xlsx' ))
     let sheet= book.getWorksheet('newsheet1')

     for(let text of alltext)
     {
           let i = alltext.indexOf(text)
           console.log(i);

           sheet.getRow(i+1).getCell(1).value=text
           

     }
     await book.xlsx.writeFile(path.join(__dirname, '../testdata/registerdata.xlsx' ))
    






 
    await page.pause()
});







//     let book= new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname, '../testdata/registerdata.xlsx'))
//    let sheet = book.getWorksheet('newsheet')
//    for(let text of alltext)
//    {
//     let i= alltext.indexOf(text)
//     console.log(i)
//     sheet.getRow(i+1).getCell(1).value=text
    
//    }

//    await book.xlsx.writeFile(path.join(__dirname, '../testdata/registerdata.xlsx'))