# Zippia-Selenium-Test-Project
Selenium test project for Zippia

*Prerequisite:*
1) Latest chrome browser: Make sure to have latest chrome browser installed on your local machine (Since the current framework configured to execute on chrome browser but we can have multiple browsers configured by adding few configuration steps with which we can achieve cross browser testing.)
2) Latest node.js: Install from the site - https://nodejs.org/en/ take the LTS version based on your Operating system (Once node is installed check node version by firing command to the terminal or cmd *node -v*)
![image](https://user-images.githubusercontent.com/43804328/138724920-3b0094fd-845e-4fe3-b84e-dd83d2dab3b8.png)

3) Latest JDK: JDK is required for executing report. Follow installing JDK and Setting JAVA_HOME steps from document (https://www.oracle.com/webfolder/technetwork/tutorials/oraclecode/windows-hol-setup.pdf) and once its done check installed jdk verison by firing command to terminal or cmd *java --version*
![image](https://user-images.githubusercontent.com/43804328/138724790-02ada9c3-b8b0-40a5-8fb2-90332aae3aa7.png)  


*Run Some Sample Tests:*

To execute the entire test suite in local machine, you can use below mentioned option: 
1) To execute this project on local machine enter mentioned command to terminal by navigating to the root directory of project: npm run test or npm test

![image](https://user-images.githubusercontent.com/43804328/138725204-2c4a0fdf-f439-4c09-9fc8-5c98c10de431.png)

2) To view allure reports on browser enter mentioned command to terminal by navigating to the root directory of project: npm run report

![image](https://user-images.githubusercontent.com/43804328/138725322-ef0de79c-a786-4e66-8652-be57d88a0e64.png)

*Tech Stack:*
1) Programming Language: JavaScript
2) Testing Framework: Mocha JavaScript Framework
3) Assertion: Chai library
4) Design pattern: Page Object Model (POM)
5) Reports: Allure reports
6) Source Code Management: Git


*Mocha JavaScript framework:*

Tests are written in the Mocha framework. See below screenshot and More about Mocha can be found at https://mochajs.org/

![image](https://user-images.githubusercontent.com/43804328/138686062-f2078764-9eb5-4c9e-80dd-c9f5505327f9.png)



*Design Pattern used: Page Object Model (POM):* A way of representing interactions with a page or component. It Helps to be more maintainable and easier to read.

Within your web app's UI there are areas that your tests interact with. A Page Object simply models these as objects within the test code. This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place. In other wards one of the challenges of writing test automation is keeping your [selectors] (classes, id's, or xpath's etc.) up to date with the latest version of your code. The next challenge is to keep the code you write nice and [DRY] (Don't Repeat Yourself). The page object pattern helps us accomplish this in one solution. Instead of including our selectors in Spec file (in Mocha), we instead place them in a <pagename>.js file where we can manage all these selectors and methods together. Your test file should only call the test methods.

![image](https://user-images.githubusercontent.com/43804328/138686158-5d5cfe4f-2d1b-41b5-8c36-0767e914d94d.png)
	
*Allure Reports:*

The Allure Reporter creates Allure test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. 
![image](https://user-images.githubusercontent.com/43804328/138686329-6a9d4551-4942-480a-8e1a-e9605a93e240.png)

![image](https://user-images.githubusercontent.com/43804328/138686502-5e246890-9b43-4dac-a894-2e1b2bd96968.png)
