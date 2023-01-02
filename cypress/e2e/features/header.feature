Feature: Header

    As a tester, I want to test the "https://admin-demo.nopcommerce.com/" application login page

    Background:
        Given I login to the dashboard with "admin" credentials

    Scenario:Checking the functionality of nopcommerce logo
        When I navigate to '/Admin/Product/List' page
        And I click on nopCommerce logo on the Header
        Then I should navigate to the admin page