import { injectable } from "inversify";
import { basicScreen, basicScreenSelectors } from "../interface/basic";

@injectable()
export class basicScreenPageImpl implements basicScreen {
    validateGoogleLogo(): void {
        basicScreenSelectors.getLogo().should('be.visible');
    }
    validateGoogleSearchTab(): void {
        basicScreenSelectors.getGoogleSearchTab().should('be.visible');
    }

}