import { test, expect } from '@playwright/test';

test("Demo test 04", async ({ page }) => {
    await test.step('Step 1: Di den trang material', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Step 2: Click bai hoc 4', async () => {
        await page.locator(`//a[@href="04-xpath-personal-notes.html"]`).click();
    });
    // Câu a - mình ko hiểu đoạn code của Linh lắm do phần comment Linh 
    //bỏ nhiều content trong bài tập quá nên mình đã thử viết lại code nhưng báo lỗi ko run được

    await test.step('Add Node and Content', async () => {
        for (let i = 1; i <= 10; i++) {
            await page.locator(`//input[@id="note-title"]`).fill(`Action ${i}`);
            await page.locator(`//textarea[@id="note-content"]`).fill(`Mô tả action ${i}`);
            await page.locator(`//button[@id="add-note"]`).click();
        };
    });

    // Code sửa câu a
    // const notes = [];
    //     for (const note of notes) {
    //     await page.locator(`//input[@id="note-title"]`).fill(note.title);
    //     await page.locator(`//textarea[@id="note-content"]`).fill(note.content);
    //     await page.locator(`//button[@id="add-note"]`).click()

    // Câu b - Code đã sửa và bỏ hàm click
    await page.locator(`//input[@id="search"]`).fill("một hoặc nhiều");
});