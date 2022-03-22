import * as functions from "firebase-functions";

export interface CharginCenter {
  statNm: string,
  statId: string,
  chgerId: string,
  chgerType: string,
  addr: string,
  location: string,
  useTime: string,
  lat: string,
  lng: string,
  busiId: string,
  bnm: string,
  busiNm: string,
  busiCall: string,
  stat: string,
  statUpdDt: string,
  lastTsdt: string,
  lastTedt: string,
  nowTsdt: string,
  powerType: string,
  output: string,
  method: string,
  zcode: string,
  parkingFree: string,
  note: string,
  limitYn: string,
  limitDetail: string,
  delYn: string,
  delDetail: string
}

export type Handler = (
  request:functions.https.Request,
  response: functions.Response
) => Promise<void>;