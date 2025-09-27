import { Container } from "inversify";
import { ORANGE_HRM_SYMBOLS } from "./orangeHRM.symbol";
import { loginScreen } from "../interface/orangeHRM/loginPage";
import { orangeHRMLoginPage } from "../domain/orangeHRMDomain/orangeHRMLogin";

export const orangeContainer = new Container;

orangeContainer.bind<loginScreen>(ORANGE_HRM_SYMBOLS.loginScreen).to(orangeHRMLoginPage);