/// <reference types="cypress" />

// https://www.npmjs.com/package/@faker-js/faker

const { faker } = require('@faker-js/faker');

const email = faker.internet.email();inso
const password = faker.internet.password({ length: 6});
const invalidPassword = faker.internet.password({ length: 3});

describe('Login de usuário', () => {
    it('Validar campo nome vazio', () => {
        cy.visit('/')
            .get('#electronics_banner')
                .should('be.visible')

        cy.get('.right_list_fix li:first-child a')
            .click()

        cy.url()
            .should('include', '/login')

        cy.get('#user')
            .should('be.visible')
            .then((inputEmail) => {
                expect(inputEmail).to.be.empty;
            })
    })

    it('Validar campo e-mail vazio', () => {

        cy.visit('/')
            .get('#electronics_banner')
                .should('be.visible')

        cy.get('.right_list_fix li:first-child a')
            .click()

        cy.url()
            .should('include', '/login')

        cy.get('#password')
            .should('be.visible')
            .then((inputEmail) => {
                expect(inputEmail).to.be.empty;
            })
    })
})