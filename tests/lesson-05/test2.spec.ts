import { test } from '@playwright/test';

test("Demo test 02", async ({ page }) => {
    await test.step('Step 1: Di den trang material', async () => {
        await page.goto("https://material.playwrightvn.com");
    });

    await test.step('Step 2: Click vao bai hoc 2', async () => {
        const baiHoc2Locator = page.locator("//a[@href='02-xpath-product-page.html']");
        await baiHoc2Locator.click();

        // Product 1
        await page.locator('//button[@data-product-id="1"]').dblclick();

        // Product 2
        await page.locator('//button[@data-product-id="2"]').dblclick();
        await page.locator('//button[@data-product-id="2"]').click();

        // Product 3
        await page.locator('//button[@data-product-id="3"]').click();
    });
});