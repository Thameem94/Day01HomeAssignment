import {test, chromium} from '@playwright/test'
import { asyncWrapProviders } from 'node:async_hooks'

test("login to salesforce", async({})=>{

const browser=await chromium.launch({channel:"chrome", headless:false})
const Context1= await browser.newContext()
const page = await Context1.newPage()
await page.goto('https://login.salesforce.com/');
await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")
await page.locator(`#password`).fill("TestLeaf@2025")
await page.locator(`#Login`).click()
await page.waitForTimeout(10000)
const titleOfPage = await page.title()
console.log("the name of the page ${titleOfPage}")
const titleofURl = await page.title()
console.log("the name of the url ${titleofURl}")
await page.close()
})