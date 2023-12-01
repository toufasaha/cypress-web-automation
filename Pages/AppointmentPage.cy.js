
class Appointment{
    appointment(){
        cy.get('#combo_facility').select("Seoul CURA Healthcare Center");
        cy.wait(3000);
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicaid').click();
        
        cy.wait(3000);
        cy.get('#txt_comment').type('need medical support');
        cy.wait(2000);
        cy.get('.glyphicon').click();
        cy.get('.datepicker-days > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(7)').click();
        cy.get('#btn-book-appointment').type("submit");

        cy.wait(2000);

        //Assertion
        cy.get('h2').should('have.text', 'Appointment Confirmation');
        
    }

}

export default Appointment;