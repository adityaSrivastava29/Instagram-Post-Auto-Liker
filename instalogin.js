const puppeteer = require("puppeteer");
//const id = "kaleenbhaiya___07";
const id = "hovih38053@0ranges.com";
const pw = "qwerty@123";
const search ="vivekmishra7368";
//"atulsingh.abhi";
//cre_ativemind07
let NoofPost = 12;
(async function () {
    try{
        let browser = await puppeteer.launch({
          headless: false,
          defaultViewport: null,
          args: ["--start-maximized"],
         // executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        });
        let pages = await browser.pages();
        let tab = pages[0];
        const navigationPromise = tab.waitForNavigation({waitUntil: "domcontentloaded"});
        await tab.goto("https://www.instagram.com/");
        await tab.waitForSelector('input[name="username"]');
        // input username and Password and submit
        await tab.type('input[name="username"]', id);
        await tab.type('input[name="password"]', pw);
        await tab.click('button[type="submit"]');
        // click to home 
        await tab.waitForSelector('svg[aria-label="Home"]');
        await tab.waitForSelector('button.sqdOP.yWX7d.y3zKF');
        await tab.click('button.sqdOP.yWX7d.y3zKF');
        await tab.waitForSelector('button.aOOlW.HoLwm');
        await tab.click('button.aOOlW.HoLwm');
        // find selector for search and input instagram id 
        await tab.waitForSelector('input[placeholder="Search"]');
        await tab.type('input[placeholder="Search"]',search);  
        // search 
        await tab.waitForSelector(`.fuqBx a[href="/${search}/"]`);
        await tab.click(`.fuqBx a[href="/${search}/"]`);
        // click
        await tab.waitForSelector('._9VEo1.T-jvg');
        await tab.click('._9VEo1.T-jvg');
      
        //open Post
        await tab.waitForSelector('.v1Nh3.kIKUG._bz0w:first-child');
        await tab.click('.v1Nh3.kIKUG._bz0w:first-child');
       
        //for post like

        await tab.waitForSelector('.fr66n button.wpO6b .QBdPU  svg[aria-label="Like"]');
        await tab.click('.fr66n button.wpO6b .QBdPU  svg[aria-label="Like"]');
        await tab.keyboard.press('Enter');
       
       
        // click on the right arrow button for more posts
        await tab.waitForSelector('.coreSpriteRightPaginationArrow');
        await tab.click('.coreSpriteRightPaginationArrow');

        for(let i=0;i<NoofPost;i++)
        {
            await tab.waitForSelector('.fr66n button.wpO6b .QBdPU  svg[aria-label="Like"]');
            await tab.click('.fr66n button.wpO6b .QBdPU  svg[aria-label="Like"]');
            
            await tab.waitForSelector('.coreSpriteRightPaginationArrow');
             await tab.click('.coreSpriteRightPaginationArrow');
        }
        
        console.log("Successfull");

    }
    catch(err){
        console.log(err);
    }
})();
