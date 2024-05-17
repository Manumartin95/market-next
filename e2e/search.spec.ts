import { expect, test } from '@playwright/test'

test('search item', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('textbox').fill('foo')

  await page.getByRole('button', { name: 'Search' }).click()

  await expect(page).toHaveURL('/products?search=foo')
})
