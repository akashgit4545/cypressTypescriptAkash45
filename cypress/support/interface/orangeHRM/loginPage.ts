export interface loginScreen {
    launchOrangeHRMPage(): void;
    successfullLogin(): void;
}

export const loginScreenSelectors = {

    getUsername: () => cy.get('input[name="username"]'),
    getPassword: () => cy.get('input[name="password"]'),
    getLoginButton: () => cy.get('button[type="submit"]')
}