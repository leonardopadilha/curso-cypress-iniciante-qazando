/// <reference types="cypress" />

describe("Asserts", () => {

    it('Verificar se elemento está visível', () => {
        cy.visit('/')
            .get('.fa-user')
                .click()

        cy.get('.account_form h3')
            .should('be.visible')
            .should('contain', 'Login')

        cy.get('.account_form h3')
            .then((element) => {
                expect(element.text()).eq('Login')
                expect(element).to.be.visible
                expect(element).not.to.be.disabled
            })
    })
})