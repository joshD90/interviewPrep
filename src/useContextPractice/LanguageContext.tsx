import { FC, ReactNode, SetStateAction, createContext, useState } from "react";

export const LanguageContext = createContext<{
  language: "english" | "french";
  setLanguage: React.Dispatch<SetStateAction<"english" | "french">>;
}>({ setLanguage: () => null, language: "english" });

type Props = { children: ReactNode };

export const LanguageContextProvider: FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<"french" | "english">("english");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
