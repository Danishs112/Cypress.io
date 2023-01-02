import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pageObject/login';


const loginPage = new LoginPage();

Given("I am on the login page", () => {
    try {
        loginPage.visit();
        cy.log('user is on the login page');
    }
    catch (error) {
        cy.log('user is not on login page');
        throw error;
    }
});


When("I click on the {string} button", (label) => {
    try {
        loginPage.clickButtonByVisibleText(label);
        cy.log(` user is able to click on ${label} button`);
    }
    catch (error) {
        cy.log(` user is not able to click on ${label} button`);
        throw error;
    }

});

Then("I should see {string} message on the page", (message) => {
    try {
        loginPage.checkMessageVisibility(message);
        cy.log(`user is able to see ${message} message on the page`);
    }
    catch (error) {
        cy.log(`user is not able to see ${message} message on the page`);
        throw error;
    }

});


Given("I login to the dashboard with {string} credentials", (user) => {
    try {
        loginPage.iloginWithUserCredentials(user);
        cy.log(`user is able to login into dashboard as ${user}`);
    }
    catch (error) {
        cy.log(`user is able to login into dashboard as ${user}`);
        throw error;
    }

});

