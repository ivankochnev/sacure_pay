READ ME. HOW INSTALL AND RUN CREATION OF DORMANT ACCOUNT PROJECT

I. :::::::::::::: Install Cypress on you PC ::::::::::::::

https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements


II. :::::::::::::: OPEN CYPRESS PROJECT :::::::::::::

 1. Download create_account_cypress project
 2. in console cd to create_account_cypress folder
 3. yarn install
 4. yarn cypress


III. :::::::::::::: RUN CYPRESS TESTS ::::::::::::::

 • command to run ALL test cases (feature files) in Code Console (DEMO environment)
ENV="demo" yarn cy:test 
 • command to run ALL test cases (feature files) in Code Console (UAT environment)
ENV="uat" yarn cy:test 
 • command to open Cypress Console and run tests in it (UAT environment)
ENV="uat" yarn cy:open


IV. :::::::::::::: NOTES ::::::::::::::

Test files which describes tests with plain language:
 • pc-228_01_create_account_confirm_dob.feature
 • pc-228_02_create_account_confirm_sms.feature
 • pc-228_03_create_account_resend_sms.feature
 • pc-228_04_create_account_incorrect_dob.feature
 • pc-228_05_create_account_incorrect_sms_code.feature
 • pc-228_06_create_account_set_password.feature
 • pc-228_07_create_account_back_button.feature

Step definition files which converts plain language and executes tests:
 • confirm_it_is_you_steps.js
 • login_steps.js
 • shared_steps.js

Test and page navigation files which executes tests for specifiec page:
 • ..cypress/fixtures/testdata.json - contains test data (e.g. names, card number etc.)
 • ../cypress/pages/assertions.js
 • ../cypress/pages/confirmationPage.js
 • ../cypress/pages/getConfig.js
 • ../cypress/pages/loginPage.js

Environment files:
 • package.json - test configuration file (if you want to change test browser - update lines 10-12 [chrome - by default])
 • ../cypress/scripts/cypress-dev.json - test configuration file for particular environment (DEV)
 • ../cypress/scripts/cypress-demo.json
 • ../cypress/scripts/cypress-uat.json
 • ../cypress/scripts/cypress-stage.json

Support files:
 • ../support/commands.js - contains POST requests to register dormant account and visit URL and etc.

Test report files:
..reports/cucumber-html-report/index.html - combined test report file
..reports/cucumber-json/  - folder contains each test case result in JSON format (e.g. pc-228_01_create_account_confirm_dob.cucumber.json)
..reports/mocha/  - folder contains each test case result in HTML format (e.g. mochawesome_001.html)


V. OCR Document Codes
###############################################################
# OCRLabs ORBIT SDK API - interaction with ocr labs orbit sdk
###############################################################
orbitSdk.aus.driversLicence.sdkType=ORBIT_ID_ANZ
orbitSdk.passport.sdkType=ORBIT_MRZ
orbitSdk.aus.immicard.sdkType=ORBIT_ID_ANZ
orbitSdk.aus.medicareCard.sdkType=ORBIT_ID_ANZ
orbitSdk.aus.birthCertificate.sdkType=ORBIT_ID_AUSCERT
orbitSdk.aus.changeOfNameCertificate.sdkType=ORBIT_ID_AUSCERT
orbitSdk.aus.marriageCertificate.sdkType=ORBIT_ID_AUSCERT

orbitSdk.facial.sdkType=ORBIT_FR
orbitSdk.facial.apiType=idkit

orbitSdk.aus.driversLicence.subType.prefix=AUS_
orbitSdk.aus.driversLicence.subType.suffix=_DRIVERLICENCE

orbitSdk.aus.birthCertificate.subType.prefix=AUS_
orbitSdk.aus.birthCertificate.subType.suffix=_BIRTH

orbitSdk.aus.changeOfNameCertificate.subType.prefix=AUS_
orbitSdk.aus.changeOfNameCertificate.subType.suffix=_NAME

orbitSdk.aus.marriageCertificate.subType.prefix=AUS_
orbitSdk.aus.marriageCertificate.subType.suffix=_MARRIAGE

orbitSdk.passport.subType=PASSPORT
orbitSdk.aus.immicard.subType=AUS_IMMICARD
orbitSdk.aus.medicareCard.subType=AUS_MEDICARE