import { createContext, useContext, useState, useEffect } from "react";
import { fetchSkipOptions } from "../services/apiSkipOptions";

const SkipOptionsContext = createContext();

function SkipOptionsProvider({ children }) {
  const [skipOptions, setSkipOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSkipOptions() {
      const skipOptionsData = await fetchSkipOptions();
      setSkipOptions(skipOptionsData);
      setIsLoading(false);
    }

    getSkipOptions();
  }, []);

  return (
    <SkipOptionsContext.Provider value={{ skipOptions, isLoading }}>
      {children}
    </SkipOptionsContext.Provider>
  );
}

function useSkipOptions() {
  const context = useContext(SkipOptionsContext);

  if (context === undefined)
    throw new Error(
      "SkipOptionsContext was used outside of SkipOptionsProvider",
    );

  return context;
}

export { SkipOptionsProvider, useSkipOptions };
