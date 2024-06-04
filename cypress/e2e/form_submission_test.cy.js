require('Cypress-xpath');
import Registeration from '../pageObjects/registerationPage';
import 'cypress-mochawesome-reporter/register';

describe('Registeration Form Tests', () => {
  
  it('Verify regieteration screen after successful submission', () => {    
    cy.fixture('surveyDetails').then((surveyData) => {
      cy.visit(surveyData.applicationURL);
      const reg = new Registeration();
      reg.setuserName(surveyData.username);
      reg.setAge();
      reg.setExerciseInfo();
      reg.submitForm();
      cy.url().should('not.eq', surveyData.applicationURL);
      cy.url().should('eq', surveyData.successScreenURL);
      cy.xpath(reg.confirmationMessage).should('have.text', surveyData.successMessage);
    })
  })
})