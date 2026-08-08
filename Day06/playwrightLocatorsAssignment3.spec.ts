import {test, chromium, expect} from "@playwright/test";

test("Create a new Account", async()=>{
    const browser=await chromium.launch({channel:"chrome", headless:false})
       const Context1= await browser.newContext()
       const page = await Context1.newPage()
       await page.goto('https://login.salesforce.com/'); 
      await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025") 
    await page.getByRole('button').click()
    const PageTitle = await page.title();
    console.log(`The page landing in the: ${PageTitle}`)
    await expect.soft(page).toHaveTitle("Home | Salesforce");
    const pageUrl = await page.url();
    console.log(`The URL of the Page: ${pageUrl}`)
    await expect.soft(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home");
    await page.locator(`.slds-icon-waffle`).click()
    await page.getByRole('button', {name:"View All Applications"}).click();
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.locator(`//mark[text()='Service'][0]]`).click()
    await page.locator(`.slds-truncate`).click()
    await page.getByRole('generic').click()
    await page.locator(`#input-456`).fill("Thameem")
    await page.locator(`//button[contains(@class, "slds-button_brand")]`).click()
    await page.waitForTimeout(5000)
})