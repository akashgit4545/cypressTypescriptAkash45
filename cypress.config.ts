import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env: {
      ornageHrmUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      username: "Admin",
      password: "admin123",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/**/**/**/*.ts",
    baseUrl: "https://www.google.com/",
  },
});
