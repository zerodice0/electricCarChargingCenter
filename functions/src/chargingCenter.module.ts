import * as functions from "firebase-functions";
import { Handler } from "./chargingCenter.model";

export const registRequestHandler = (handler: Handler) => functions
  .region("asia-northeast3")
  .https
  .onRequest(handler);

export const isValidArray = (array: []): boolean =>
  array && array.length > 0;