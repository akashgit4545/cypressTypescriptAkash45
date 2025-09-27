import { interfaces } from "inversify";
import { basicContainer } from "./basic.inversify.config";
import { orangeContainer } from "./orangeHRM.inversify.config";

export const container: interfaces.Container = basicContainer;

export const orangeHRMContainer: interfaces.Container = orangeContainer;