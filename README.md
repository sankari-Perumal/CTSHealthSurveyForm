# Health survey registeration form Test Automation framework
 
## Description 
This automation Project is implemented using following tools and technologies
1. Javascript
2. Cypress
 
## Automation Scope
1. Tests for registeration form

## Project setup Instructions 
 
Follow the steps below to setup project
 
1. Clone the project from
2. Open project location with VSCODE
3. Enter in vscode terminal `npm init`
3. Enter in vscode terminal `npm install cypress --save-dev`
4. Enter in vscode terminal `npm install -D cypress-xpath`
5. Enter in vscode terminal `npm i --save-dev cypress-mochawesome-reporter` 
 
## Test Execution Instructions (Running tests in locally)
 
Follow the steps below to execute e2e tests
 
1. Enter in vscode terminal `npx cypress open` or `npx cypress run --spec cypress/e2e/form_submission_test.cy.js` 
 - if you use `npx cypress open` will open the Cypress Application and choose the E2E Testing -> Chrome -> Start E2E Testing in Chrome 
 - Choose the spec file to run from the list 

 
### Test Browsers
1. Chrome
2. Edge
3. Electron
 
## Project Structure
1. `cypress\e2e` -> all the test scripts will be present
2. `cypress\fixtures` -> urls, user details and verification messages will be present 
3. `cypress\pageObjects` -> UI page elements and its actions will be present
4. `cypress\reports` -> Html report will be generated 
5. `cypress.config.js` - e2e test configuretion will be present
6. `package.json` -> dependencies and theire versions
7. `package-lock.json` -> dependencies download path information

## Test Run Reports 
- Project uses `cypress-mochawesome-reporter`
- Playwright Reports will be automatically generated after each build execution and Report link can be found in `cypress/reports`
