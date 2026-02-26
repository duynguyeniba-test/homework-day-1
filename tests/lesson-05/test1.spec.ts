import { test } from '@playwright/test';

test("Demo test 01", async ({ page }) => {
    await test.step('Step 1: Di den trang material', async () => {
        await page.goto("https://material.playwrightvn.com");
    });

    await test.step('Step 2: Click vao bai hoc 1', async () => {
        const baiHoc1Locator = page.locator("//a[@href='01-xpath-register-page.html']");
        await baiHoc1Locator.click();

        // Username - auto paste
        await page.locator("//input[@id='username']").fill("quocduy-nguyen");

        // Email - input sequentially
        await page.locator("//input[@id='email']").pressSequentially("duynguyeniba@gmail.com", { delay: 100 });

        // Gender
        await page.locator("//input[@id='male']").check();

        // Check vao checkbox Hobbies
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//input[@id='cooking']").check();
        await page.locator("//input[@id='reading']").check();

        // Check nhieu options cua Interests
        const interestsSelect = page.locator("#interests");
        await interestsSelect.selectOption(["technology", "art", "music"]);

        // Select country
        const selectCountry = page.locator("#country");
        await selectCountry.selectOption("canada");

        // Birthday input
        const birthdayInput = page.locator("//input[@id='dob']");
        await birthdayInput.fill("1996-01-23");

        // Biography - auto paste
        await page.locator("//textarea[@id='bio']").fill("Nothing to say hahahahahahaha");

        // Click Register button
        await page.click("//button[@type ='submit']");
    });
});