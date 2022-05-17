class enquiryForm {
   
    static setCompanyField(company_name) {
        cy.get('input[name="Company"]').type(company_name);
        cy.wait(101)
    }

    static setFirstNameField(first_name) {
        cy.get('input[name="FirstName"]').type(first_name);
        cy.wait(102);
    }

    static setLastNameField(last_name) {
        cy.get('input[name="LastName"]').type(last_name);
        cy.wait(103);
    }

    static setEnquiryField(message) {
        cy.get('textarea[name="Description"]').type(message);
        cy.wait(104);
    }
    static setPhoneField(phone) {
        cy.get('input[name="Phone"]').type(phone);
        cy.wait(105);
    }

    static setWebsiteField(url) {
        cy.get('input[name="Website"]').type(url);
        cy.wait(106);
    }

    static setEmailField(email) {
        cy.get('input[name="Email"]').type(email);
        cy.wait(107);
    }


}

export default enquiryForm