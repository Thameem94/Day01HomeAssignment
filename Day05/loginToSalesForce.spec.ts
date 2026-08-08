import test, { chromium } from "@playwright/test";

test("Login to Salesforce", async()=>{
   const browser = await chromium.launch({channel:"chrome",headless:false})
    const context1 = await browser.newContext();
    const page =await context1.newPage();
    await page.goto("https://login.salesforce.com/")
    await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByRole("textbox",{name:"Password"}).fill("TestLeaf@2025")
    await page.getByRole(`button`).click()
    await page.waitForTimeout(5000);
    const pageofTitle = await page.title()
    console.log(`The name of the landing page ${pageofTitle}`);
    const pageofUrl = await page.url()
    console.log(`The URL of the Page: ${pageofUrl}`);
    
                
})