import React, { useEffect, useReducer, createContext, useContext } from "react";

const PerilContext = createContext();

const perilUrl =
  "https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE";

export const Status = {
  loading: "loading",
  done: "done",
};

const initialState = {
  status: Status.loading,
  data: {},
};

const PerilReducer = (state, { type, payload }) => {
  switch (type) {
    case Status.loading:
      return { ...state, status: Status.loading };
    case Status.done:
      return { ...state, status: Status.done, data: payload };
    default:
      throw new Error(`unknown dispatch value: ${type} `);
  }
};

export const PerilContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PerilReducer, initialState);

  useEffect(() => {
    fetch(perilUrl)
      .then((response) => response.json())
      .then((data) => dispatch({ type: Status.done, payload: data }));
  }, []);

  return (
    <PerilContext.Provider value={state}>{children}</PerilContext.Provider>
  );
};

export const usePerilContext = () => {
  const context = useContext(PerilContext);
  if (context === null) {
    throw new Error("Must be used within a PerilContext Provider");
  }
  return context;
};
