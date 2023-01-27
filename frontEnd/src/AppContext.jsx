import { useContext, useState, createContext } from "react";

import useWindowSize from "./useWindowSize";
import useEffectThatFetchData from "./useEffectThatFetchData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isInMain, setIsInMain] = useState(false);
  const [kittens, setkittens] = useState([]);

  const windowSize = useWindowSize();
  const screenSize = windowSize > 900 ? "big" : "small";

  const values = {
    loading,
    setLoading,
    isInMain,
    setIsInMain,
    kittens,
    setkittens,
    screenSize,
  };

  useEffectThatFetchData(setLoading, setkittens);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("UseApp must be used within an App context");
  return context;
};

export { AppContext, AppProvider, useApp };
