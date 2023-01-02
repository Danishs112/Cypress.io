import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pageObject/login.js'

const login = new LoginPage();

When("I should see {string} heading on the page", (heading) => {
  try {
    login.checkVisibilityOfHeading(heading);
    cy.log(`user is able to see the ${heading} on the page`);
  }
  catch (error) {
    cy.log(`user is not able to see the ${heading} on the page`);
    throw error;
  }

});

Then("I should see {string} subheading on the page", (subheading) => {
  try {
    login.checkVisibilityOfSubHeading(subheading);
    cy.log(`user is able to see the ${subheading} on the page`);
  }
  catch (error) {
    cy.log(`user is not able to see the ${subheading} on the page`);
    throw error;
  }
});

When("I fill {string} email on the email input field", (email) => {
  try {
    login.typeEmailOnEmailInputField(email);
    cy.log(`user is able to fill ${email} on the email input field`);
  }
  catch (error) {
    cy.log(`user is not able to fill ${email} on the email input field`);
    throw error;
  }

});

When("I fill {string} password on the password input field", (password) => {
  try {
    login.typePasswordOnPasswordInputField(password)
    cy.log(`user is able to fill ${email} on the password input field`);
  }
  catch (error) {
    cy.log(`user is not able to fill ${email} on the password input field`);
    throw error;
  }
});


When("I check the remember me checkbox", () => {
  try {
    login.checkRememberMeCheckbox();
    cy.log('user is able to check the checkbox');
  }
  catch (error) {
    cy.log('user is not able to check the checkbox');
    throw error;
  }
});

Then("I should navigate to the {string} dashboard page", (page) => {
  try {
    login.checkUrlContainsText(page)
    cy.log(`user is able to navigate to ${page} dashboard page`);
  }
  catch (error) {
    cy.log(`user is not able to navigate to ${page} dashboard page`);
    throw error;
  }
});