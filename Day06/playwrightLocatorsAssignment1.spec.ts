import {test,chromium} from '@playwright/test';

test("Create a Lead", async()=>{
   const browser=await chromium.launch({channel:"chrome", headless:false})
   const Context1= await browser.newContext()
   const page = await Context1.newPage()
   await page.goto('http://leaftaps.com/opentaps/control/main'); 
   await page.locator(`#username`).fill("DemoCSR")
   await page.locator(`#password`).fill("crmsfa")
   await page.locator(`//input[contains(@class, "Submit")]`).click();
   await page.getByRole("link", {name:"CRM/SFA"}).click();
   await page.getByRole("link", {name:"Leads"}).click();
   await page.getByText('Create Lead', {exact:true}).click();
   await page.locator(`#createLeadForm_companyName`).fill("Testleaf")
   await page.locator(`#createLeadForm_firstName`).fill("Thameem")
   await page.locator(`#createLeadForm_lastName`).fill("Ashiq")
   await page.locator(`#createLeadForm_personalTitle`).fill("Mr")
   await page.locator('#createLeadForm_generalProfTitle').fill("testing")
await page.locator('#createLeadForm_annualRevenue').fill("10000")
await page.locator('#createLeadForm_departmentName').fill("CSE")
await page.locator('#createLeadForm_primaryPhoneNumber').fill("1234567890")
await page.locator('.smallSubmit').click();
const pageOfTilte= await page.title()
console.log(`The landing page is:${pageOfTilte}`);
await page.waitForTimeout(5000)

})