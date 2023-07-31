"use client"

import { createContext, useState } from 'react';

const Theme = createContext();

export const DarkModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Theme.Provider value={{ mode, toggleMode }}>
      {children}
    </Theme.Provider>
  );
};

export default Theme;