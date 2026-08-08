import test, { chromium } from "@playwright/test";

test("Login to Salesforce", async()=>{
   const browser = await chromium.launch({channel:"chrome",headless:false})
    const context1 = await browser.newContext();
    const page =await context1.newPage();
    await page.goto("https://login.salesforce.com/")
    await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025")
    await page.getByRole(`button`).click()
   await page.locator(`//button[contains(@class,"slds-show")]`).click()
   await page.waitForTimeout(5000);
   await page.locator(`//button[text()="View All"]`).click();
   await page.getByPlaceholder("Search apps or items...").fill("Sales");
   await page.locator(`//mark[text()="Sales"][2]`).click();
   await page.waitForTimeout(5000);
   await page.close()
})