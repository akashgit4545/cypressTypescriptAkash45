export interface basicScreen {
    validateGoogleLogo(): void;
    validateGoogleSearchTab(): void;
};

export const basicScreenSelectors = {
    getLogo: () => cy.get('.lnXdpd'),
    getGoogleSearchTab: () => cy.get("[value='Google Search']"),
};
export enum basicScreenContents {

}