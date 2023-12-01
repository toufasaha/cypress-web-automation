class LoginPage{
    login(username, password){
        cy.visit("https://katalon-demo-cura.herokuapp.com/");

        cy.get('#menu-toggle').click();
        cy.get('.sidebar-nav > :nth-child(4) > a').click();

        cy.get('#txt-username').type(username);
        cy.get('#txt-password').type(password);
        cy.get('#btn-login').type("submit");
        cy.wait(3000);


    }
}

export default LoginPage;