import { test, expect } from '@playwright/test';

test('name contains dell', async ({ page }) => {
  await page.goto('http://localhost:3000/#/search');
  await page.getByRole('textbox').fill('dell');
  await page.getByRole('main').getByRole('link', { name: 'Search' }).click();

  await expect(page).toHaveURL(/.*#\/products/);
  await expect(page.locator('body')).toContainText('dell-streak-7');
  await expect(page.locator('body')).toContainText('dell-venue');
  await expect(page.locator('body')).not.toContainText('droid-2-global-by-motorola');
})
