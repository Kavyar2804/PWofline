import{expect, test} from '@playwright/test'
import path from 'node:path';

test('upload file', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#singleFileInput').setInputFiles('./jenkins.txt')
    console.log(__dirname);
    
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, '../uploadfile/jenkins.txt'))
   console.log(path.join(__dirname, '../uploadfile/jenkins.txt'));
   
    await page.getByRole('button', {name: 'Upload Single File'}).click()
    await page.pause()

    await expect(page.locator('#singleFileStatus')).toContainText('jenkins.txt')
});

test('upload multiple file', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#singleFileInput').setInputFiles('./jenkins.txt')
    console.log(__dirname);
    
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname, '../uploadfile/jenkins.txt'), path.join(__dirname , '../uploadfile/some.txt')])
//    console.log(path.join(__dirname, '../uploadfile/jenkins.txt'));
   
    await page.getByRole('button', {name: 'Upload Multiple Files'}).click()
    await page.pause()

});