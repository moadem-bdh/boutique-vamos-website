"use client";
import {
  createContext,
  useState,
  type FC,
  useContext,
  type PropsWithChildren,
} from "react";

export type languageContextType = {
  language: "en" | "fr";
  setLanguage: (lang: "en" | "fr") => void;
};

export const LanguageContext = createContext<languageContextType>({
  language: "en",
  setLanguage: () => {},
});

export const LangaugeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLangauge = () => useContext(LanguageContext);
