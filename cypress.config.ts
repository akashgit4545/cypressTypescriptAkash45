import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/integration/**/**/*.ts",
    baseUrl:"https://www.google.com/",
  },
});
