import { chargingCenter } from "./chargingCenter";
import { registRequestHandler } from "./chargingCenter.module";

export const getChargingCenterInformation = 
  registRequestHandler(chargingCenter);
