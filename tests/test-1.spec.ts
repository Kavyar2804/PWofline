import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobiles');
  await page.getByRole('button', { name: 'mobiles under 10000 rupees' }).click();
  await page.getByRole('link', { name: 'Apply the filter Get It Today' }).click();
  await page.locator('#a-autoid-1-announce').click();
  await page.getByRole('link', { name: 'Go to Cart' }).click();
});