import React from "react";

const PerilContext = React.createContext();

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
      break;
  }
};

export const PerilContextProvider = ({ children }) => {
  //   const [state, setState] = React.useState();
  const [state, dispatch] = React.useReducer(PerilReducer, initialState);

  React.useEffect(() => {
    fetch(perilUrl)
      .then((res) => res.json())
      .then((data) => dispatch({ type: Status.done, payload: data }));
  }, []);
  console.log(state);
  return (
    <PerilContext.Provider value={state}>{children}</PerilContext.Provider>
  );
};

export const usePerilContext = () => {
  const context = React.useContext(PerilContext);
  if (context === null) {
    throw new Error("Must be used within a PerilContext Provider");
  }
  return context;
};
