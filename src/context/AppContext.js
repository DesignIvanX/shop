import React from "react";
import Loader from "../components/Loader.jsx";
import useInitialState from "../hooks/useInitialState";

const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const initialState = useInitialState();
  const isEmty = Object.keys(initialState.state).length;
  return (
    <>
      {isEmty > 0 ? (
        <AppContext.Provider value={initialState}>
          {children}
        </AppContext.Provider>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AppContext;
