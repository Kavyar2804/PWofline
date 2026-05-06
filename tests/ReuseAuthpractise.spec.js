import { test, expect } from '@playwright/test';


test.beforeEach('login to app', async({page}) => {

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();


  
});

test('verify timesheet page', async ({ page }) => {
 
  await expect(page.locator('#app')).toContainText('Quick Launch');
  await expect(page.locator('#app')).toContainText('Timesheets');
  await page.getByRole('button', { name: 'Timesheets' }).click();
  await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');
  await expect(page.getByLabel('Topbar Menu').getByText('Timesheets')).toBeVisible();
  await expect(page.locator('form').getByRole('button', { name: 'View' })).toBeVisible();
  await expect(page.getByLabel('Sidepanel').getByRole('list')).toContainText('Dashboard');
  

});


test('add candidate for recuruitment', async() => {

    await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('abc');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('z');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('d');
  await page.getByRole('textbox', { name: 'Type here' }).first().click();
  await page.getByRole('textbox', { name: 'Type here' }).first().fill('abc@gmail.com');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('#app')).toContainText('abc z d');
  
});




