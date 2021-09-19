import { createPerilServiceClient } from "../index";
import { createRequestHandler } from "./request";

export const createAPIClient = () => {
  const requestHandler = createRequestHandler();
  return {
    PerilService: createPerilServiceClient(requestHandler),
  };
};
