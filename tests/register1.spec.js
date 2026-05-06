import{test} from '@playwright/test'
import { Registerpage } from '../pageobjects/registerpage.js';
import tdata from '../testdata/registerdata.json'
import excel from 'exceljs'
import path, { join } from 'path';
 

test('register user', async({page}) => {

let rpage= new Registerpage(page)
 await rpage.navigate('https://demoapps.qspiders.com/ui?scenario=1')
await rpage.nametf.waitFor()

let book = new excel.Workbook()
await book.xlsx.readFile('C:/Users/User/OneDrive/Desktop/PWofline/testdata/registerdata.xlsx')
 let sheet = book.getWorksheet('Sheet1')
 let username=  sheet.getRow(1).getCell(1).toString()
 let email= sheet.getRow(2).getCell(1).toString()
 let pwd = sheet.getRow(3).getCell(1).toString()


 //read multiple data

//  sheet.actualRowCount()
// sheet.actualColumnCount()
 for (let i =1 ; i <= sheet.columnCount; i++) {
    for (let j = 1; j <=sheet.rowCount; j++) {

        let data= sheet.getRow(j).getCell(i).toString()
        console.log(data);
           
    }
   
    
 }



await rpage.registeruser(username,email,pwd)

// await rpage.registeruser(tdata.username,tdata.email, tdata.pwd)
await page.pause()
    
});

test.skip('writedatatoexcel', async({page}) => {

let book = new excel.Workbook()
await book.xlsx.readFile(path.join(__dirname, '../testdata/registerdata.xlsx'))
// let sheet = book.addWorksheet('newsheet1') //create new sheet in same excel file
let sheet = book.getWorksheet('Sheet1') //write to same worksheet
sheet.getRow(2).getCell(3).value='playwright'
await book.xlsx.writeFile('C:/Users/User/OneDrive/Desktop/PWofline/testdata/registerdata.xlsx')



    
});






// console.log(sheet.actualColumnCount);
// console.log(sheet.actualRowCount);


//  for (let i = 1; i <= sheet.columnCount; i++) {
//     for (let j = 1; j <=sheet.rowCount; j++) {
//         let data= sheet.getRow(i).getCell(j).toString()
//         console.log(data);
        
        
//     }
    
    
 //}