const elementsUtility = require('../utilities/elementsUtility');
const careerMainPage = require ('../pageobjects/career.main.page');


describe("Career Main Page", function () {

    beforeEach( async () => {
        // runs before each test in this block
        await careerMainPage.open();  
      });

    it("Getting Career Main page Title", async () => {

        // browser.url('/project-manager-jobs');
        // await careermainpage.open();         
        await careerMainPage.getCareerMainPageTitle();       
                
    });

    it("Moving to Project Manager Demographics component", async () => { 

        await careerMainPage.moveToPMDemographicsComponent();    

    });   

    it("Verifying Project Manager Demographics component Title", async () => { 

        await careerMainPage.moveToPMDemographicsComponent();
        await careerMainPage.verifyPMDemographicsComponentTitle();    

    });    

    it("Getting Gender wise percentage for Project Manager", async () => { 

        await careerMainPage.moveToPMDemographicsComponent();
        await careerMainPage.genderWisePercentage();     

    });

    it("Verifying Project Manager Compare Jobs filter", async () => { 

        await careerMainPage.moveToPMDemographicsComponent();
        await careerMainPage.verifyPMCompareJobsFilter();    

    });
    

    it("Comparing Jobs with Project Manager through Compare Jobs filter", async () => { 

        await careerMainPage.moveToPMDemographicsComponent();
        await careerMainPage.verifyPMCompareJobsFilter(); 
        await careerMainPage.addingJobRoleThroughFilter();   

    });

    it("Clearing Project Manager Compare Jobs filter", async () => { 

        await careerMainPage.moveToPMDemographicsComponent();
        await careerMainPage.verifyPMCompareJobsFilter(); 
        await careerMainPage.addingJobRoleThroughFilter();
        await careerMainPage.clearingCopareJobsFilter();   

    });
    
    
     it("Moving to Top Colleges for Project Managers component", async () => { 

        await careerMainPage.moveToTopCollegesComponent();             

    });

    it("Verifying Top Colleges for Project Managers Title", async () => { 

        await careerMainPage.moveToTopCollegesComponent(); 
        await careerMainPage.verifyTopPMCollegesTitle();   
                  

    });

    it("Verifying Top Colleges List for Project Managers", async () => { 

        await careerMainPage.moveToTopCollegesComponent();  
        await careerMainPage.verifyTopPMCollegesList();
                  
    });
    
    it("Verifying Top Colleges Details", async () => { 

        await careerMainPage.moveToTopCollegesComponent(); 
        await careerMainPage.verifyTopPMCollegesDetails();
                  
    });    
    

});
