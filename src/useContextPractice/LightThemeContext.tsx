import React, {
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const ThemeContext = createContext<{
  setTheme: React.Dispatch<SetStateAction<"light" | "dark">>;
  theme: "light" | "dark";
}>({ setTheme: () => null, theme: "light" });

type Props = { children: ReactNode };

export const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  if (!ThemeContext) return null;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
