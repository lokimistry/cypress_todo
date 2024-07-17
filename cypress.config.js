const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://todomvc-app-for-testing.surge.sh',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
