const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    //defaultCommandTimeout: 5000, -> Apenas para aprender sobre essa opção
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
