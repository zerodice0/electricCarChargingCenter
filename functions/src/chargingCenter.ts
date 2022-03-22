import { Request, Response } from "firebase-functions";
import axios from "axios";
import { CharginCenter } from "./chargingCenter.model";
import { isValidArray } from "./chargingCenter.module";

export const chargingCenter = async (
    request: Request,
    response: Response
  ) => {
  const {pageNo, numOfRows, zcode} = request.query;

  const baseUrl = process.env.BASE_URL;
  const serviceKey = process.env.SERVICE_KEY;
  const isDotEnvWorking = baseUrl && serviceKey;

  if (!isDotEnvWorking) {
    response.status(500).send("Server environment is not working");
    return;
  }

  let apiUrl = `${baseUrl}?serviceKey=${serviceKey}`;
  pageNo && (apiUrl += `&pageNo=${pageNo ?? 1}`);
  numOfRows && (apiUrl += `&numOfRows=${numOfRows ?? 10}`);
  zcode && (apiUrl += `&zcode=${zcode ?? 11}`);

  const responseFromPublicApi = await axios.get(apiUrl);

  if (responseFromPublicApi.status !== 200) {
    response.status(500).send("Server is not working");
    return;
  }

  const body = responseFromPublicApi.data;
  const header = isValidArray(body?.header) ?
    body.header[0] : [];
  const items:[CharginCenter] = isValidArray(body?.items) ?
    body.items[0].item : [];

  response.status(200).send({
    resultMessage: header?.resultMessage,
    resultCode: header?.resultCode,
    totalCount: header?.totalCount,
    pageNo: header?.pageNo,
    numOfRows: header?.numOfRows,
    items: items.map(
      (item: CharginCenter) => ({
        name: item.statNm,
        address: item.addr,
        useTime: item.useTime,
        latitude: item.lat,
        longitude: item.lng,
        phoneNumber: item.busiCall,
        updateDate: item.statUpdDt,
      })
    ),
  });
};