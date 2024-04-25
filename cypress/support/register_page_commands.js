/// <reference types="cypress" />

const $ = require('../elementos/elementos_cadastro_usuario');

Cypress.Commands.add('saveRegister', () => {
    cy.get($.buttons.register).should("be.visible").click();
})

Cypress.Commands.add('fillName', (name) => {
    cy.get("#user").type(name);
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get("#email").type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get("#password").type(password)
})

Cypress.Commands.add('checkMessageErrorName', (message) => {
    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .then((errorMessage) => {
        expect(errorMessage).to.contain(message);
      });
})

Cypress.Commands.add('checkRegisterSuccess', () => {
    cy.get(".swal2-success div:nth-child(4)").should("be.visible");
})

Cypress.Commands.add('checkMessageRegisterSuccess', (message) => {
    cy.get("#swal2-title")
        .should("be.visible")
        .then((createUserSuccess) => {
        expect(createUserSuccess.text()).to.equal("Cadastro realizado!");
    });
})

Cypress.Commands.add('checkMessageWelcome', (name) => {
    cy.get("#swal2-html-container")
        .should("be.visible")
        .then((messageSucces) => {
        expect(messageSucces.text()).to.equal(`Bem-vindo ${name}`);
    });
});

/* 
método criado para aprender sobre a inclusão do timeout
Cypress.Commands.add('checkMessageWelcomeWithTimeout', (name) => {
    cy.get("#swal2-html-container", {timeout: 3000})
        .should("be.visible")
        .then((messageSucces) => {
        expect(messageSucces.text()).to.equal(`Bem-vindo ${name}`);
    }); 
});        
*/