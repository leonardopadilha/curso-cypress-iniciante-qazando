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

    it('Validar campo e-mail inválido', () => {
        
        cy.visit('/')
            .get('#electronics_banner')
                .should('be.visible')

        cy.get('.right_list_fix li:first-child a')
            .click()

        cy.url()
            .should('include', '/login')

        cy.get('#user')
            .type('fdafsafsd.com')

        cy.get('.login_submit button')
            .click()

        cy.get('.account_form div:nth-child(2) input + span')
            .should('be.visible')
            .then((message) => {
                expect(message.text()).to.equal('E-mail inválido.')
            })
    })

    it('Validar campo senha inválido', () => {

        cy.visit('/')
        .get('#electronics_banner')
            .should('be.visible')

        cy.get('.right_list_fix li:first-child a')
            .click()

        cy.url()
            .should('include', '/login')

        cy.get('#user')
            .type('teste@teste.com')

        cy.get('#password')
            .type(invalidPassword)

        cy.get('.login_submit button')
            .click()

        cy.get('.account_form div:nth-child(3) input + span')
            .should('be.visible')
            .then((message) => {
                expect(message.text()).to.equal('Senha inválida.')
            })
    })

    it('Validar login com sucesso', () => {

        cy.visit('/')
        .get('#electronics_banner')
            .should('be.visible')

        cy.get('.right_list_fix li:first-child a')
            .click()

        cy.url()
            .should('include', '/login')

        cy.get('#user')
            .type(email)

        cy.get('#password')
            .type(password)

        cy.get('.login_submit button')
            .click()

        cy.get('.swal2-success div:nth-child(4)')
            .should('be.visible')

        cy.get('#swal2-title')
            .should('be.visible')
            .then((loginSuccess) => {
                expect(loginSuccess.text()).to.equal('Login realizado')
            })

        cy.get('#swal2-html-container')
            .should('be.visible')
            .then((messageSucces) => {
                expect(messageSucces.text()).to.equal(`Olá, ${email}`)
            })
    })
})