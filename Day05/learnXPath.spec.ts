import {test, chromium} from '@playwright/test'
test("login to salesforce", async({})=>{

const browser=await chromium.launch({channel:"msedge", headless:false})
const Context1= await browser.newContext()
const page = await Context1.newPage()
await page.goto('https://login.salesforce.com/');
await page.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com");
await page.locator(`#password`).fill("TestLeaf@2025");
await page.waitForTimeout(10000)
await page.locator(`//input[contains(@class,"primary")]`).click();
await page.waitForTimeout(10000)
const titleOfPage= await page.title()
console.log(titleOfPage);
})
