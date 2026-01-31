// src/contexts/IntentContext.jsx
import React, { createContext, useContext, useState } from "react";

const IntentContext = createContext(null);

export function IntentProvider({ children }) {
  const [stateOfBeing, setStateOfBeing] = useState(null); // "grounded" | "connected" | ...

  const value = {
    stateOfBeing,
    setStateOfBeing,
  };

  return (
    <IntentContext.Provider value={value}>
      {children}
    </IntentContext.Provider>
  );
}

export function useIntentContext() {
  const ctx = useContext(IntentContext);
  if (!ctx) throw new Error("useIntentContext must be used within IntentProvider");
  return ctx;
}
