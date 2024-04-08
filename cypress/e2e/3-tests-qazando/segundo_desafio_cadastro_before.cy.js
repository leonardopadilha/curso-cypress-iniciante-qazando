/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');
const user = require('../../fixtures/dadosUsuario.json');

const email = faker.internet.email();
const password = faker.internet.password({ length: 6});
const invalidPassword = faker.internet.password({ length: 3});
const name = faker.person.fullName();

describe("Cadastro de usuário", () => {
  beforeEach('Acessando a pagina de cadastro', () => {

    cy.visit("/").get("#electronics_banner").should("be.visible");

    cy.get(".right_list_fix li:nth-child(2) a")
      .should("be.visible")
      .should("contain", "Cadastro")
      .click();

    cy.get(".account_form h3")
      .should("be.visible")
      .then((principalText) => {
        expect(principalText).to.contain("Cadastro de usuário");
      });
  })

  it("Validar campo nome vazio", () => {

    cy.get("#btnRegister").should("be.visible").click();

    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .then((errorMessage) => {
        expect(errorMessage).to.contain("O campo nome deve ser prenchido");
      });
  });

  it("Validar campo e-mail vazio", () => {

    cy.get("#user").type(name);

    cy.get("#btnRegister").should("be.visible").click();

    cy.get("#email").should("be.empty");

    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .then((errorMessage) => {
        expect(errorMessage).to.contain(
          "O campo e-mail deve ser prenchido corretamente"
        );
      });
  });
});