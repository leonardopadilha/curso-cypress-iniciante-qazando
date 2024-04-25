/// <reference types="cypress" />

const $ = require('../../elementos/elementos_home');

export default {
    accessRegisterPage() {
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
    }
}