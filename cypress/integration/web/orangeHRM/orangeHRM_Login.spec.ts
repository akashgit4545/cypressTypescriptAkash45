import { orangeHRMContainer } from "../../../support/containers/inversify.config";
import { ORANGE_HRM_SYMBOLS } from "../../../support/containers/orangeHRM.symbol";
import { loginScreen } from "../../../support/interface/orangeHRM/loginPage";

describe(`Validate orange HRM login Screen`, () => {

    let loginPage: loginScreen;

    before(() => {
        loginPage = orangeHRMContainer.get(ORANGE_HRM_SYMBOLS.loginScreen);
    });

    it(`Validate the landing screen`, () => {
        loginPage.launchOrangeHRMPage();
        loginPage.successfullLogin();
    })
})