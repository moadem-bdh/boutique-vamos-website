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

type LanguageProviderProps = PropsWithChildren & {
  initialLanguage: "en" | "fr";
};

export const LanguageContext = createContext<languageContextType>({
  language: "en",
  setLanguage: () => {},
});

export const LanguageProvider: FC<LanguageProviderProps> = ({ children , initialLanguage }) => {
  const [language, setLanguage] = useState<"en" | "fr">(initialLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
