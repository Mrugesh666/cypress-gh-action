const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
  //  specPattern: "**/*.feature",
    watchForFileChanges: false,
    defaultCommandTimeout: 900000,
    specPattern: 'cypress/e2e/Features/**/*.feature',
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
     // require('cypress-cucumber-preprocessor/plugin')(on, config);
       require('cypress-mochawesome-reporter/plugin')(on);
      // return config;

      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    }
  },
});
