const elementsUtility = require('../utilities/elementsUtility');
const overview = require('../pageobjects/overview.page')

describe("Verifying the browser is launching for the first time", async () => {

    it("First test to launch chrome browser", async () => {

        await browser.url('/project-manager-jobs');
        await browser.pause(2000);        
        // console.log('Verifying title of page:' +browser.getTitle());

        const titleText = await $('.title.text-break');
        console.log('Verifying title of page:', await titleText.getText());
        assert.equal(await titleText.getText(),'PROJECT MANAGER');
                
    });
    
});