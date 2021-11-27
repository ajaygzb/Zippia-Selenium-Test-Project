const elementsUtility = require('../utilities/elementsUtility');
const salaryPage = require ('../pageobjects/salary.page');


describe("Salary Page", function () {

    beforeEach( async () => {
        // runs before each test in this block
        await salaryPage.open();  
      });

    it("Getting Salary Page Title", async () => {

        // browser.url('/project-manager-jobs');
        // await careermainpage.open();         
        await salaryPage.getSalaryPageTitle();       
                
    });


    it("Moving to Average Project Manager Salary Component", async () => {
          
        await salaryPage.moveToAvgProjectManagerSalary();    
                
    });

    it("Verifying Average Project Manager Salary component displayed fields", async () => {
         
        await salaryPage.moveToAvgProjectManagerSalary();  
        await salaryPage.verifyAvgPMSalaryComponentFields();  
                
    });

    it("Verifying Location filter for Average Project Manager Salary component", async () => {
         
        await salaryPage.moveToAvgProjectManagerSalary();  
        await salaryPage.verifyLocationFilter(); 
                
    });
    
    it("Verifying Industry filter for Average Project Manager Salary component", async () => {
         
        await salaryPage.moveToAvgProjectManagerSalary();  
        await salaryPage.verifyIndustryFilter();
                
    });
    
    it("Verifying Education filter for Average Project Manager Salary component", async () => {
         
        await salaryPage.moveToAvgProjectManagerSalary();  
        await salaryPage.verifyEducationFilter();
                
    });
});
