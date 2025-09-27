import { loginScreen, loginScreenSelectors } from "../../interface/orangeHRM/loginPage";

export class orangeHRMLoginPage implements loginScreen {
    launchOrangeHRMPage(): void {
        cy.visit(Cypress.env('ornageHrmUrl'));
    };

    successfullLogin(): void {
        loginScreenSelectors.getUsername().type(Cypress.env('username'));
        loginScreenSelectors.getPassword().type(Cypress.env('password'));
        loginScreenSelectors.getLoginButton().click();
    }

}