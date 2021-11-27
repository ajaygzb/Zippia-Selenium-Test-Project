const { assert, expect, AssertionError } = require('chai');
const elementsUtility = require('../utilities/elementsUtility');

class OverviewPage {
    
    get demographicsComponent() { return $('//h2[text()="Project Manager Demographics"]') }

    get topColleges() { return $('.college-list-container') }

    get pmComponentTitle() { return $('(//*[contains(@class,"h-chart-bar-section--title")])[1]') }

    get pmComapreJobFilter() { return $('(//*[contains(text(),"Compare Jobs")])[1]') }

    get jobTitle() { return $('(//input[@name="jobTitle" and @placeholder="Job Title"])[1]') } 

    get cancelButton() { return $('(//*[@class="filter-footer"]/*[text()="Clear"])[1]') } 

    get applyButton() { return $('(//*[@class="filter-footer"]/*[text()="Apply"])[1]') } 

    get dropdownItem() { return $('//*[@class="dropdown-item"]/parent::li') }    

    get topCollegesTitle() { return $('//*[@class="college-list-container"]/child::h2') }   

    get topCollegesList() { return $$('#colleges-list .item-title') }  
           

    async open(){  

            await browser.url('/project-manager-jobs');
            console.log(await browser.getUrl());                 
            const starttime = new Date().getTime()
            await browser.pause(5000)
            const endtime = new Date().getTime()
            console.log(endtime - starttime)     
        }

   
    async getCareerMainPageTitle(){  
        
            const title = await browser.getTitle();            
            await expect(title).to.equal('How to Become A Project Manager: Jobs, Career, Salary and Skills - Zippia');
        }         
       

    async moveToPMDemographicsComponent(){
        
            // await browser.pause(7000);
            console.log(await this.demographicsComponent.isDisplayedInViewport());
            await this.demographicsComponent.waitForExist({ timeout: 5000 });
            await this.demographicsComponent.scrollIntoView();
            console.log(await this.demographicsComponent.isDisplayedInViewport());
            // await browser.pause(5000);
            console.log('Moving to Project Manager Demographics component');

        }   

    async verifyPMDemographicsComponentTitle() {        
        
        await this.pmComponentTitle.waitForExist({ timeout: 5000 });
        expect(await this.pmComponentTitle.getText()).to.be.equal('PROJECT MANAGER DEMOGRAPHICS');
      //  console.log('Verifying Project Manager Demographics component Title to be: ${await pmComponentTitle.getText()}');
      console.log('Verifying Project Manager Demographics component Title');
       
    }

    async genderWisePercentage() {

        const percentageList = await $$('//*[text()="Gender"]/following::*[contains(@class,"value")]');
        await percentageList[1].waitForExist({ timeout: 5000 });

        for (let i = 0; i < percentageList.length; i++){

            // console.log('percentage data: ', await percentageList[i].getText());
            if(await percentageList[i].getText() === '66.3 %') {

                expect(await percentageList[i].getText()).to.be.equal('66.3 %');
                console.log('Male project manager percentage are: ', await percentageList[i].getText());
            }

            if(await percentageList[i].getText() === '29.6 %') {

                expect(await percentageList[i].getText()).to.be.equal('29.6 %');
                console.log('Female project manager percentage are: ', await percentageList[i].getText());
            }

            if(await percentageList[i].getText() === '4.0 %') {

                expect(await percentageList[i].getText()).to.be.equal('4.0 %');
                console.log('Unknown project manager percentage are: ', await percentageList[i].getText());
            }
            
        }
                     
    }

    async verifyPMCompareJobsFilter() {        
        
        await this.pmComapreJobFilter.waitForExist({ timeout: 5000 });
        await this.pmComapreJobFilter.click();
        await browser.takeScreenshot();

        const filterHeader = await $('.filter-header');
        expect(await filterHeader.getText()).to.be.equal('Compare Jobs');

        await this.cancelButton.isDisplayed();        
        await this.applyButton.isDisplayed();
        await this.jobTitle.isDisplayed();          
        
        console.log('Verifying Project Manager Compare Jobs filter');
       
    }
    async addingJobRoleThroughFilter() {    
        
        await this.jobTitle.waitForExist({ timeout: 5000 });
        await this.jobTitle.setValue('Quality Assurance Analyst'); 
        await this.dropdownItem.waitForExist({ timeout: 5000 });
        await this.dropdownItem.click();
        await browser.pause(7000);
        console.log('Adding Job Role through Compare Jobs filter');    

    }

    async clearingCopareJobsFilter() { 

        const updatedFilter = await $('//*[text()="Project Manager Demographics"]/following::*[contains(@class,"button active")]');
        await updatedFilter.waitForExist({ timeout: 5000 });
        await updatedFilter.click();

        await this.cancelButton.waitForExist({ timeout: 5000 });
        await this.cancelButton.click();
        await browser.refresh();
        await this.moveToPMDemographicsComponent();
        await this.verifyPMCompareJobsFilter();
        // assert(await $$('.filter-option').getText() === null);
        let filteroption1 = await $('.filter-option');       
        console.log(await filteroption1.isExisting());      
        console.log('Clearing Project Manager Compare Jobs filter');
    
    }

    async moveToTopCollegesComponent() {
       
        console.log(await this.topColleges.isDisplayedInViewport());
        await this.topColleges.waitForExist({ timeout: 5000 });
        await this.topColleges.scrollIntoView();
        console.log(await this.topColleges.isDisplayedInViewport());
        // await browser.pause(5000);
        console.log('Moving to Top Colleges for Project Managers component');
    }

    async verifyTopPMCollegesTitle() {       
        
        await this.topCollegesTitle.waitForExist({ timeout: 5000 });
        expect(await this.topCollegesTitle.getText()).to.be.equal('Top Colleges for Project Managers');
        console.log('Verifying Top Colleges for Project Managers Title');
    }

    async verifyTopPMCollegesList() {       
        
        await this.topCollegesTitle.waitForExist({ timeout: 5000 });
        // const topCollegesList = await $$('#colleges-list .item-title');

        expect(await this.topCollegesList[0].getText()).to.be.equal('1. University of Pennsylvania');
        expect(await this.topCollegesList[1].getText()).to.be.equal('2. University of Southern California');
        expect(await this.topCollegesList[2].getText()).to.be.equal('3. Northwestern University');

        console.log('Verifying Top Colleges List for Project Managers');
    }

    async verifyTopPMCollegesDetails() {       
        
        await this.topCollegesTitle.waitForExist({ timeout: 5000 });
        const collegeListItem = await $$('.colleges-list-item');
        await collegeListItem[0].click();

        await $('.popup-header').waitForExist({ timeout: 5000 });

        const actualCollegeName1 = await $('//*[contains(@class,"college-information")]/h2').getText();
        const expectedCollegeName1 = await this.topCollegesList[0].getText();
        expect(actualCollegeName1.toLowerCase() === expectedCollegeName1.toLowerCase());      
        
        // await $('.popup-close-icon').click();
        console.log('Verifying Top Colleges Details');
    
    }

}
module.exports = new OverviewPage()