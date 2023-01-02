Feature: Login page

    As a tester, I want to test the "https://admin-demo.nopcommerce.com/" application login page

    Background:
        Given I am on the "login" page

    Scenario: Checking the visibility of heading and subheading on the page
       Then I should see "Admin area demo" heading on the page
       And I should see "Welcome, please sign in!" subheading on the page

    Scenario Outline: Check user is able to successfully log in to Dashboard application with the valid credentials
        When I fill "<email>" email on the email input field
        And I fill "<password>" password on the password input field
        And I check the remember me checkbox
        And I click on the "Log in" button
        Then I should navigate to the "admin" dashboard page

        Examples:
            | email       | password       |
            | admin_email | admin_password |


    Scenario Outline: Check user is not able to log in to Dashboard application with the invalid credentials
        When I fill "<email>" email on the email input field
        And I fill "<password>" password on the password input field
        And I check the remember me checkbox
        And I click on the "Log in" button
        Then I should see "<message>" message on the page

        Examples:
            | email         | password         | message                                                          |
            | invalid_email | invalid_password | Login was unsuccessful. Please correct the errors and try again. |
