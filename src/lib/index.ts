import { Request } from "./api/request";
import { Peril } from "../App";
// const perilUrl =
// ("https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE");

export type ListPerilRequest = {
  //example of location and lang settings
  locale?: "sv_SE" | "en_SE";
  // example: contractType=SE_APARTMENT_RENT
  contractType?: string;
};

export interface PerilService {
  //List Perils
  ListPerils(request: ListPerilRequest): Promise<ListPerilResponse>;
}

export type ListPerilResponse = Peril[];

type RequestHandler = (request: Request) => Promise<unknown>;

export const createPerilServiceClient = (
  handler: RequestHandler
): PerilService => {
  return {
    ListPerils(request) {
      const defaultLocal = "en_SE";
      const defaultContractType = "SE_APARTMENT_RENT";
      const queryParams: string[] = [];
      const path = `api/perils`;
      if (request.contractType) {
      } else {
        queryParams.push(
          "contractType=" + encodeURIComponent(defaultContractType)
        );
      }

      if (request.locale) {
        queryParams.push(
          "locale=" + encodeURIComponent(request.locale.toString())
        );
      } else {
        queryParams.push("locale=" + encodeURIComponent(defaultLocal));
      }

      let uri = path;
      if (queryParams.length > 0) {
        uri += "?" + queryParams.join("&");
      }
      const body = null;
      return handler({
        path: uri,
        method: "GET",
        body,
      }) as Promise<ListPerilResponse>;
    },
  };
};
