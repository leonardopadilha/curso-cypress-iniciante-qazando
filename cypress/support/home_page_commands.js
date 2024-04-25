// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

const $ = require('../elementos/elementos_home');

Cypress.Commands.add('accessRegisterPage', () => {
    cy.visit("/").get($.banner.principalBanner).should("be.visible");

    cy.get($.links.register)
      .should("be.visible")
      .should("contain", "Cadastro")
      .click();

    cy.get($.title.formRegisterUser)
      .should("be.visible")
      .then((principalText) => {
        expect(principalText).to.contain("Cadastro de usuário");
      });
})