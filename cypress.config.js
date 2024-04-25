const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    //defaultCommandTimeout: 5000, -> Apenas para aprender sobre essa opção
    //viewportWidth: 335, -> Configura a  largura da tela padrão do navegador
    //viewportHeight: 999, -> Configura a altura da tela padrão do navegador
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
