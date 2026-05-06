import { test, expect } from '@playwright/test';


test.beforeEach('login to app', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();  
});

test('verify apply leave ', async() => {

  await page.getByText('Quick Launch').click();
await expect(page.locator('#app')).toContainText('Assign Leave');
await page.getByRole('button', { name: 'Apply Leave' }).click();
await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('My Leave');
await expect(page.getByRole('link', { name: 'My Leave' })).toBeVisible();
  
});
