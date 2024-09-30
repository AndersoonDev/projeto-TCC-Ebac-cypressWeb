const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  
  chromeWebSecurity: false,
  e2e: {    
    // viewportWidth: 1200,
    // viewportHeight: 800,    
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
