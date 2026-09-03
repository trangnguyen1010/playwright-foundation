import {test, expect} from '@playwright/test';
import * as path from 'path'

test('iframe testing', async({page}) => {
    const filePath = path.resolve(__dirname, '../fixtures/iframe-parent.html')
    await page.goto(`file://${filePath}`)
    const iframe = page.frameLocator('#content-frame')

    await iframe.locator('#editor').fill('Hello World')
    await expect(iframe.locator('#editor')).toHaveValue('Hello World')
})

test('tabs testing', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/windows')
    await expect(page.getByText('Opening a new window')).toBeVisible()

    //click on the link to open new tab
    const [newPage] = await Promise.all([
       page.waitForEvent('popup'),
        page.getByText('Click Here').click()
    ])
    await expect(newPage.getByRole('heading', { name: 'New Window' })).toBeVisible()

    await newPage.close()
})