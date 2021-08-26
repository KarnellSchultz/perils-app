import React from "react";

const perilUrl =
  "https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE";

const PerilContext = React.createContext();

export const PerilContextProvider = ({ children }) => {
  const [state, setState] = React.useState();

  React.useEffect(() => {
    fetch(perilUrl)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

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
