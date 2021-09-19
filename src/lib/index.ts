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
  // Other services would be added here like a POST or UPDATE type of service
}

export type ListPerilResponse = Peril[];

// fetch request detials
type RequestHandler = (request: Request) => Promise<unknown>;

// PerilServiceClient only has once service now, but it's setup in a way that would
// allow for others to be added without much trouble. I could imagine a new Service for each HTTP method
// or a new service for getting a specific peril ect.
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
