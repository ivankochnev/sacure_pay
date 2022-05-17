import { Before, Given, When, Then, And, After } from 'cypress-cucumber-preprocessor/steps'
import enquiryForm from '../../pages/enquiryForm'

Given ("I vizit Google web site", () => {
    cy.visit("www.google.com.au");
    cy.get('input[name="q"]').click({ force: true });
    cy.get('input[name="q"]').type("SecurePay");

    cy.get('[type=submit]').contains('Google Search').should('be.visible').click({ force: true })

});

And ("I click on SecurePay link", () => {
    cy.contains('SecurePay Online Payments').should('be.visible').click({ force: true })
});

Then("I go to Pricing Standard Pricing", () => {
    cy.contains('Pricing').should('be.visible').click({ force: true })
    cy.wait(500);
    cy.contains('Standard pricing').should('be.visible').click({ force: true })
});


Then("I go to Pricing Standard Pricing", () => {
    cy.contains('Pricing').should('be.visible').click({ force: true })
    cy.wait(500);
    cy.contains('Standard pricing').should('be.visible').click({ force: true });
    cy.wait(1000);

});

And("I click on Learn more button under POLi and Verify POLi site is opened & loaded", () => {
    cy.wait(2000);
    cy.contains('Learn more').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'https://www.polipayments.com/')

});

And("I Navigate to Sell, Make a sales enquiry on the POLi site", () => {
    cy.contains('Buy with POLi').should('be.visible');
    cy.contains('Sell').should('be.visible').click({ force: true });
    cy.wait(1000);
    cy.contains('Make a sales enquiry').should('be.visible').click({ force: true });
    
});


Then("I fill Merchant Enquiry form with {string}, {string}, {string}, {string}, {string}, {string}, {string}", (company, first_name, last_name, message, phone, website, email) => {
    enquiryForm.setCompanyField(company);
    enquiryForm.setFirstNameField(first_name);
    enquiryForm.setLastNameField(last_name);
    enquiryForm.setEnquiryField(message);
    enquiryForm.setPhoneField(phone);
    enquiryForm.setWebsiteField(website);
    enquiryForm.setEmailField(email);


});






// Clicks through to the SecurePay website
// • Navigates to Pricing  Standard Pricing
// • Verifies that the page is loaded
// • Scroll down to bottom of the page, clicks on “Learn more” button under “POLi”
// • Verify POLi site is opened & loaded in the new window.
// • Navigate to Sell  Make a sales enquiry on the POLi site
// • Generates random data using an open-source library
// • Uses the generated data to fill in the contact us form

