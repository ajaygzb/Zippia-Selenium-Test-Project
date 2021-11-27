const elementsUtility = require('../utilities/elementsUtility');
const careerMainPage = require('../pageobjects/career.main.page');
const { default: isEqual } = require('webdriverio/build/commands/element/isEqual');

class SalaryPage {
    
    get avgProjectManagerSalary() { return $('.salary-designer-body.no-salary-call-out') }

    get locationFilter() { return $('(//*[text()="Location"]/parent::*[@class=" zp-filter-button"])[1]')}

    get industryFilter() { return $('(//*[text()="Industry"]/parent::*[@class=" zp-filter-button"])[1]')}

    get educationFilter() { return $('(//*[text()="Education"]/parent::*[@class=" zp-filter-button"])[1]')}

    get filterHeader() { return $('.filter-header')}

    get filterOptions() { return $$('.filter-option')}   
    


    async open(){  

            await browser.url('/project-manager-jobs/salary/');
            console.log(await browser.getUrl());                 
            const starttime = new Date().getTime();
            await browser.pause(5000);
            const endtime = new Date().getTime();
            console.log(endtime - starttime);     
        }

   
    async getSalaryPageTitle(){  
        
            const title = await browser.getTitle();            
            await expect(title).to.equal('Average Project Manager Salary 2021: by State & Field - Zippia');
        }         
       

    async moveToAvgProjectManagerSalary(){
        
            // await browser.pause(7000);
            await this.avgProjectManagerSalary.waitForExist({ timeout: 5000 });
            console.log(await this.avgProjectManagerSalary.isDisplayedInViewport());
            await this.avgProjectManagerSalary.scrollIntoView();
            // await browser.pause(5000);           
            console.log("Component displayed in viewport:", await this.avgProjectManagerSalary.isDisplayedInViewport());
            console.log('Moving to Average Project Manager Salary Component');
        }
    async verifyAvgPMSalaryComponentFields(){
        
            await this.avgProjectManagerSalary.waitForExist({ timeout: 5000 });
            const avgSalaryHeader = await $('//*[contains(@class,"HeaderSection_salaryGraph")]').getText();
            expect(await avgSalaryHeader).to.be.equal('Average Project Manager Salary');

            await $('.average-salary-number').isDisplayed();
            await $('.hourly-rate-number').isDisplayed();
            await $('.last-updated-date').isDisplayed();
            
            await this.locationFilter.isDisplayed();
            await this.industryFilter.isDisplayed();
            await this.educationFilter.isDisplayed();

            expect(await $('//*[@class="number-description"]').getText()).to.be.equal('10 %');
            expect(await $('//*[contains(@class,"description-median")]').getText()).to.be.equal('Median');
            expect(await $('//*[contains(@class,"description-90")]').getText()).to.be.equal('90 %');
            
            console.log('Verifying Average Project Manager Salary component displayed fields');

        }

        async verifyLocationFilter(){
        
            await this.locationFilter.waitForExist({ timeout: 5000 });
            await this.locationFilter.click();

            await careerMainPage.cancelButton.waitForExist({ timeout: 5000 });
            // const locationFilterHeader = await $('.filter-header').getText();
            expect(await this.filterHeader.getText()).to.be.equal('Location');

            await careerMainPage.cancelButton.isDisplayed();
            await careerMainPage.applyButton.isDisplayed();

            await $('input[name="location"]').setValue('Washington, DC');
            await careerMainPage.dropdownItem.waitForExist(10000);
            careerMainPage.dropdownItem.click();
            careerMainPage.applyButton.click();
            
            console.log('Verifying Location filter for Average Project Manager Salary component');

        }

        async verifyIndustryFilter(){
        
            await this.industryFilter.waitForExist({ timeout: 5000 });
            await this.industryFilter.click();

            await careerMainPage.cancelButton.waitForExist({ timeout: 5000 });
            expect(await this.filterHeader.getText()).to.be.equal('Industry');

            // var industryFilterOptions = await $$('.filter-option');
            var expectedIndustryFilterOptions = ['Technology','Finance','Retail','Health Care','Manufacturing','Construction','Government'];

            for (let i = 0; i< this.filterOptions.length; i ++){

                var actualIndustryFilterOptions = await this.filterOptions[i].getText();
                
                
            }
            // console.log('actualIndustryFilterOptions', await actualIndustryFilterOptions);
            // assert(await actualIndustryFilterOptions == await expectedIndustryFilterOptions);
            isEqual(await actualIndustryFilterOptions, await expectedIndustryFilterOptions);
            console.log('Verifying industry filter options');

            await careerMainPage.cancelButton.isDisplayed();
            await careerMainPage.applyButton.isDisplayed();

            await this.filterOptions[1].click();
            await careerMainPage.applyButton.click();
            
            console.log('Verifying Industry filter for Average Project Manager Salary component');

        }

        async verifyEducationFilter(){
        
            await this.educationFilter.waitForExist({ timeout: 5000 });
            await this.educationFilter.click();

            await careerMainPage.cancelButton.waitForExist({ timeout: 5000 });
            expect(await this.filterHeader.getText()).to.be.equal('Education Level');

            // var industryFilterOptions = await $$('.filter-option');
            var expectedEducationFilterOptions = ["Associate","Bachelor's","Master's","Doctorate"];

            for (let i = 0; i< this.filterOptions.length; i ++){

                var actualEducationFilterOptions = await this.filterOptions[i].getText();
                
                
            }
            
            isEqual(await actualEducationFilterOptions, await expectedEducationFilterOptions);
            console.log('Verifying education filter options');

            await careerMainPage.cancelButton.isDisplayed();
            await careerMainPage.applyButton.isDisplayed();

            await this.filterOptions[0].click();
            await careerMainPage.applyButton.click();
            
            console.log('Verifying Education filter for Average Project Manager Salary component');

        }
        
    }
module.exports = new SalaryPage()