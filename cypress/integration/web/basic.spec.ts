import { BASIC_SYMBOLS } from "../../support/containers/basic.symbol";
import { container } from "../../support/containers/inversify.config";
import { basicScreen } from "../../support/interface/basic";

describe('start with basics', () => {
    let basicPage: basicScreen;

    before(() => {
        basicPage = container.get(BASIC_SYMBOLS.basicScreen)
    })
    it('launch an browser', () => {
        cy.visit('/');
        basicPage.validateGoogleLogo();
        basicPage.validateGoogleSearchTab();
        
    })
})