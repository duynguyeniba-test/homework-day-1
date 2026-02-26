import { test, expect } from '@playwright/test';

test('Bài học 4 - Personal notes dùng XPath cơ bản', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator(`//a[@href="04-xpath-personal-notes.html"]`).click();

    for (let i = 1; i <= 10; i++) {
    await page.locator(`//input[@id="note-title"]`).fill(`Action ${i}`);
    await page.locator(`//textarea[@id="note-content"]`).fill(`Mô tả action ${i}`);
    await page.locator(`//button[@id="add-note"]`).click();
    };
    // Mình không rõ hiểu đúng đề bài cho câu a lẫn b không nên mình ghi code ra đây rồi xem feedbacks nhé
    await page.locator(`//input[@id="search"]`).fill("một hoặc nhiều");
    await page.locator(`//input[@id="search"]`).click();
});