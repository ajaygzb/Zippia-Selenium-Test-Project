/** const Page = require('./page');  **/

// import { assert } from "chai";
// import { default as $ } from "webdriverio/build/commands/browser/$";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ElementUtility {

    doClick(element){
        element.waitForDisplayed();
        element.click();
    }

    doSetValue(element, value){
        element.waitForDisplayed();
        element.setValue(value);
    }

    doGetText(element){
        element.waitForDisplayed();
        return element.getText();
    }

    doGetPageTitle (){
        browser.waitUntil(async () =>{

            const title = browser.getTitle();
            console.log('Title of page is:'+title);
            // return (browser.getTitle() === pageTitle)  

        }, 6000, 'Title is not displayed after the given time')

        return browser.getTitle();
    }

    doIsDisplayed(element){
        element.waitForDisplayed();
        element.isDisplayed();
    }
    moveToElement(element){

        element.moveTo(xoffset, yoffset);
    }

    clickElement(element){
        element.click();
    }

    keyboardActions(element){
        element.waitForDisplayed();
        element.setValue("Shift");
        
    }

    dragAndDropelement(element){
        element.dragAndDrop(element, duration);
     }

     scrollIntoView(element){        
        element.scrollIntoView();
        console.log(element.isDisplayedInViewport());
     }

     selectDropDownValue(value){
        element.selectVisibleText(value);
        element.selectByIndex(value);
        element.selectByAttribute('value', value);
        
        let list = $$(selector)
        console.log('Length is:', list.length)
        for (let i=0; i<list.length; i++){
        const element = list[i]
        console.log(i, element.getText())        
            if(element.getText() == 'Mar'){
                element.click();
                break;
            }

        }
     }

     popUpAlertHandle(){
         browser.dissmissAlert();
         browser.acceptAlert();
         const alertText = browser.getAlertText();
         assert.equal('Actual alert text', alertText)
         browser.pause(5000);
     }
     waitForDisplayed(element){
        element.click();
        element.waitForDisplayed(5000);
        assert.equal(true,element.isDisplayed());
     }

     waitForEnabled(element){
        element.click();
        element.waitForEnabled(5000);
        assert.equal(true,element.isEnabled());
     }

     waitForExist(element,element2){
        element.waitForDisplayed();
        element.click();
        element2.waitForExist(5000);
        assert.equal(true, element2.isExisting());
     }

     waitUntil(element){
         browser.waitUntil(function(){
             return element.isDisplayed() === true
         }, 10000, 'element is not displayed after the given time')
     }
}

// export default new ElementUtility();
module.exports = new ElementUtility()
