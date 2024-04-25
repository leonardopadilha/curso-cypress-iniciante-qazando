/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');
const user = require('../../fixtures/dadosUsuario.json');

const email = faker.internet.email();
const password = faker.internet.password({ length: 6});
const invalidPassword = faker.internet.password({ length: 3});
const name = faker.person.fullName();

describe("Cadastro de usuário", () => {
  it("Validar campo nome vazio", () => {
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

    cy.get("#btnRegister").should("be.visible").click();

    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .then((errorMessage) => {
        expect(errorMessage).to.contain("O campo nome deve ser prenchido");
      });
  });

  it("Validar campo e-mail vazio", () => {
    cy.visit("/").get("#electronics_banner").should("be.visible");

    cy.get(".right_list_fix li:nth-child(2) a")
      .should("be.visible")
      .should("contain", "Cadastro")
      .click();

    // validando se está na tela de cadastro
    cy.get(".account_form h3")
      .should("be.visible")
      .then((principalText) => {
        expect(principalText).to.contain("Cadastro de usuário");
      });

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

  it("Validar campo e-mail invalido", () => {
    cy.visit("/").get("#electronics_banner").should("be.visible");

    cy.get(".right_list_fix li:nth-child(2) a")
      .should("be.visible")
      .should("contain", "Cadastro")
      .click();

    // validando se está na tela de cadastro
    cy.get(".account_form h3")
      .should("be.visible")
      .then((principalText) => {
        expect(principalText).to.contain("Cadastro de usuário");
      });

    cy.get("#user").type(name);

    cy.get("#email").type(invalidPassword);

    cy.get("#btnRegister").should("be.visible").click();

    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .then((errorMessage) => {
        expect(errorMessage).to.contain(
          "O campo e-mail deve ser prenchido corretamente"
        );
      });
  });

  it("Validar campo senha invalido", () => {
    cy.visit("/").get("#electronics_banner").should("be.visible");

    cy.get(".right_list_fix li:nth-child(2) a")
      .should("be.visible")
      .should("contain", "Cadastro")
      .click();

    // validando se está na tela de cadastro
    cy.get(".account_form h3")
      .should("be.visible")
      .then((principalText) => {
        expect(principalText).to.contain("Cadastro de usuário");
      });

    cy.get("#user").type(name);

    cy.get("#email").type(email);

    cy.get("#password").type(invalidPassword);

    cy.get("#btnRegister").should("be.visible").click();

    cy.get("#errorMessageFirstName")
      .should("be.visible")
      .then((errorMessage) => {
        expect(errorMessage).to.contain(
          "O campo senha deve ter pelo menos 6 dígitos"
        );
      });
  });

  it("Validar cadastro com sucesso com fakerjs", () => {
    cy.visit("/").get("#electronics_banner").should("be.visible");

    cy.get(".right_list_fix li:nth-child(2) a")
      .should("be.visible")
      .should("contain", "Cadastro")
      .click();

    // validando se está na tela de cadastro
    cy.get(".account_form h3")
      .should("be.visible")
      .then((principalText) => {
        expect(principalText).to.contain("Cadastro de usuário");
      });

    cy.get("#user").type(name);
    cy.get("#email").type(email);
    cy.get("#password").type(password);

    cy.get("#btnRegister").should("be.visible").click();

    cy.get(".swal2-success div:nth-child(4)").should("be.visible");

    cy.get("#swal2-title")
      .should("be.visible")
      .then((createUserSuccess) => {
        expect(createUserSuccess.text()).to.equal("Cadastro realizado!");
      });

    cy.get("#swal2-html-container")
      .should("be.visible")
      .then((messageSucces) => {
        expect(messageSucces.text()).to.equal(`Bem-vindo ${name}`);
      });
  });

  it("Validar cadastro com sucesso utilizando fixtures", () => {
    cy.visit("/").get("#electronics_banner").should("be.visible");

    cy.get(".right_list_fix li:nth-child(2) a")
      .should("be.visible")
      .should("contain", "Cadastro")
      .click();

    // validando se está na tela de cadastro
    cy.get(".account_form h3")
      .should("be.visible")
      .then((principalText) => {
        expect(principalText).to.contain("Cadastro de usuário");
      });

    cy.get("#user").type(user.name);
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);

    cy.get("#btnRegister").should("be.visible").click();

    cy.get(".swal2-success div:nth-child(4)").should("be.visible");

    cy.get("#swal2-title")
      .should("be.visible")
      .then((createUserSuccess) => {
        expect(createUserSuccess.text()).to.equal("Cadastro realizado!");
      });

    cy.get("#swal2-html-container")
      .should("be.visible")
      .then((messageSucces) => {
        expect(messageSucces.text()).to.equal(`Bem-vindo ${user.name}`);
      });
  });
});