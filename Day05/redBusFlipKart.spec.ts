import test, { chromium, expect, firefox } from "@playwright/test";
import { channel } from "node:diagnostics_channel";

test("launch the browsers of Edge and Firefox", async()=>{
   const browser = await chromium.launch({channel:"msedge", headless:false});
    const context1 = await browser.newContext();
    const page =await context1.newPage();
    await page.goto("https://www.redbus.in")
    await page.waitForTimeout(5000);
    const pageTitle = await page.title();
    console.log(`The title of landing page ${pageTitle}`);
    const pageUrl = await page.url();
    console.log(`The title of landing page ${pageUrl}`)
    await browser.close()
    //Launching firefox
    const firefoxBrowser= await firefox.launch({headless:false})
    const firefoxContext= await firefoxBrowser.newContext()
    const firefoxPage = await firefoxContext.newPage();
   await firefoxPage.goto("https://www.flipkart.com")
    const fireFoxPageTitle = await firefoxPage.title();
    console.log(`The page landing in the: ${fireFoxPageTitle}`)
    const firefoxUrl = await firefoxPage.url();
    console.log(`The URL of the Page: ${firefoxUrl}`)
    await firefoxPage.close();
    })

