/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');
const homePage = require('../../support/pages/home_page');

const user = require('../../fixtures/dadosUsuario.json');

const email = faker.internet.email();
const password = faker.internet.password({ length: 6});
const invalidPassword = faker.internet.password({ length: 3});
const name = faker.person.fullName();

const screens = ['desktop', 'iphone-x', 'iphone-6'];

screens.forEach(screen => {

  describe("Cadastro de usuário", () => {
    beforeEach('Acessando a pagina de cadastro', () => {
      if (screen != 'desktop') {
        cy.viewport(screen)
      }
      homePage.accessRegisterPage()
    })

    it("Validar campo nome vazio", () => {
      cy.saveRegister();
      cy.checkMessageErrorName("O campo nome deve ser prenchido")
    });

    it("Validar campo e-mail vazio", () => {
      cy.fillName(name);
      cy.saveRegister();
      cy.fillEmail("be.empty");
      cy.checkMessageErrorName("O campo e-mail deve ser prenchido corretamente")
    });

    it("Validar campo e-mail invalido", () => {
      cy.fillName(name);
      cy.fillEmail("test@11");
      cy.saveRegister();
      cy.checkMessageErrorName("O campo e-mail deve ser prenchido corretamente");
    });

    it("Validar campo senha invalido", () => {
      cy.fillName(name);
      cy.fillEmail(email);
      cy.fillPassword(invalidPassword);
      cy.saveRegister();
      cy.checkMessageErrorName("O campo senha deve ter pelo menos 6 dígitos");
    });

    it("Validar cadastro com sucesso com fakerjs", () => {
      cy.fillName(name);
      cy.fillEmail(email);
      cy.fillPassword(password);
      cy.saveRegister();
      cy.checkRegisterSuccess();
      cy.checkMessageRegisterSuccess("Cadastro realizado!");
      cy.checkMessageWelcome(name);
    });

    it("Validar cadastro com sucesso utilizando fixtures", () => {
      cy.fillName(user.name);
      cy.fillEmail(user.email);
      cy.fillPassword(user.password);
      cy.saveRegister();
      cy.checkRegisterSuccess();
      cy.checkMessageRegisterSuccess("Cadastro realizado!");
      cy.checkMessageWelcome(user.name)
    });

  });

})