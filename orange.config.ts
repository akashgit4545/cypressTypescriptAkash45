import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "https://www.google.com/",
        env: {
            ornageHrmUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
            username: "Admin",
            password: "admin123",
        },
        specPattern: "cypress/integration/**/**/**/*.ts",
    },
});
