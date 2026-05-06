import { createContext, useContext, useState } from "react";

const UiContext = createContext();

export function UiProvider({ children }) {
  const [unitSysOpen, setUnitSysOpen] = useState(false);

  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [selectDayDropDawn, setSelectDayDropDawn] = useState(false);

  return (
    <UiContext.Provider
      value={{
        unitSysOpen,
        setUnitSysOpen,
        suggestionsOpen,
        setSuggestionsOpen,
        selectDayDropDawn,
        setSelectDayDropDawn,
      }}
    >
      {children}
    </UiContext.Provider>
  );
}

export function useUiContext() {
  const data = useContext(UiContext);
  return data;
}
