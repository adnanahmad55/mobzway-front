"use client";
import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LanguageProvider({ children, defaultLang }) {
  const [lang, setLang] = useState(defaultLang);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
