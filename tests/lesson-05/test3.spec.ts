import { test } from '@playwright/test';

test("Demo test 03", async ({ page }) => {
    await test.step('Step 1: Di den trang material', async () => {
        await page.goto("https://material.playwrightvn.com");

        await test.step('Step 2: Click vao bai hoc 3', async () => {
            const baiHoc3Locator = page.locator('//a[@href="03-xpath-todo-list.html"]');
            await baiHoc3Locator.click();

            const inputToDo = page.locator(`//input[@id="new-task"]`);
            const addTask = page.locator(`//button[@id="add-task"]`);

            for (let i = 1; i <= 100; i++) {
                await page.locator(`//input[@id="new-task"]`).fill(`Todo ${i}`);
                await page.locator(`//button[@id="add-task"]`).click();
            };

            page.on('dialog', async dialog => dialog.accept()
            );
            for (let i = 1; i <= 100; i++) {
                if (i % 2 !== 0) {
                    await page.locator(`//button[@id="todo-${i}-delete"]`).click();
                };
            };
        });
    });
});