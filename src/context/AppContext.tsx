import React, { createContext, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileNavbarOpen: boolean;
  toggleTheme: () => void;
  darkMode: boolean;
  toggleMobileNavbar: () => void;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    window.matchMedia(`(prefers-color-scheme: dark)`).matches
  );

  const toggleTheme = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  const toggleMobileNavbar = () => {
    setMobileNavbarOpen((mobileNavbarOpen) => !mobileNavbarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        mobileNavbarOpen,
        toggleTheme,
        darkMode,
        toggleMobileNavbar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
