import { createContext, FC, ReactNode, useState } from "react";

interface IThemeContext {
  isDarkMode: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  isDarkMode: false,
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [dark, setDark] = useState(defaultState.isDarkMode);

  const toggleDark = () => {
    setDark(!dark);
    localStorage.setItem("isDark", dark.toString());
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode: dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
