import {test,chromium} from '@playwright/test';

test("Edit a Lead", async()=>{
   const browser=await chromium.launch({channel:"chrome", headless:false})
   const Context1= await browser.newContext()
   const page = await Context1.newPage()
   await page.goto('http://leaftaps.com/opentaps/control/main'); 
   await page.locator(`#username`).fill("DemoCSR")
   await page.locator(`#password`).fill("crmsfa")
   await page.locator(`//input[contains(@class, "Submit")]`).click();
   await page.getByRole("link", {name:"CRM/SFA"}).click();
   await page.getByRole("link", {name:"Leads"}).click();
   await page.getByRole("link", {name:"Find Leads"}).click();
   await page.locator(`#ext-gen248`).fill("Thameem")
   await page.locator('#ext-gen334').click()
   await page.getByRole('link', {name:"10911"}).click()
   await page.getByRole('link', {name:"Edit"}).click()
   await page.locator("#updateLeadForm_companyName").fill("TestLeaf1")
   await page.locator("#updateLeadForm_annualRevenue").fill("20000")
   await page.locator("#updateLeadForm_departmentName").fill("IT")
   await page.locator("#updateLeadForm_description").fill("My Profile")
   await page.getByRole('button', {name:"Update"}).click()
   const editPageOfTitle = await page.title()
   console.log(`the edited page is: ${editPageOfTitle}`);
   await page.waitForTimeout(5000);
})