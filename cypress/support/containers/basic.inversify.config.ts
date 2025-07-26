import { Container } from "inversify";
import { basicScreenPageImpl } from "../domain/basic-domain";
import { BASIC_SYMBOLS } from "./basic.symbol";
import { basicScreen } from "../interface/basic";

export const basicContainer = new Container();

basicContainer.bind<basicScreen>(BASIC_SYMBOLS.basicScreen).to(basicScreenPageImpl)