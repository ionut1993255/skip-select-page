import { createContext, useContext, useState } from "react";

const SkipOptionSelectionContext = createContext();

function SkipOptionSelectionProvider({ children }) {
  const [selectedSkipOption, setSelectedSkipOption] = useState(null);

  function selectSkipOption(skipOption) {
    setSelectedSkipOption(skipOption);
  }

  return (
    <SkipOptionSelectionContext.Provider
      value={{ selectedSkipOption, selectSkipOption }}
    >
      {children}
    </SkipOptionSelectionContext.Provider>
  );
}

function useSkipOptionSelection() {
  const context = useContext(SkipOptionSelectionContext);

  if (context === undefined)
    throw new Error(
      "SkipOptionSelectionContext was used outside of SkipOptionSelectionProvider",
    );

  return context;
}

export { SkipOptionSelectionProvider, useSkipOptionSelection };
