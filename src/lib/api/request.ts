export type Request = {
  path: string;
  method: string;
  body: string | null;
};

const basePerilUrl = "https://hedvig-staging-rest-api.vercel.app/";

export const createRequestHandler =
  () =>
  async ({ path, method, body }: Request): Promise<unknown> => {
    const url = new URL(path, basePerilUrl);
    const headers = new Headers();
    const request = new Request(url.toString(), {
      method,
      ...(body && { body }),
      headers,
    });

    return fetch(request).then(async (response) => {
      if (response.status !== 200) {
        const responseBody = await response.json();
        return new Error(responseBody.message);
      }

      const data = await response.json();
      return data;
    });
  };
