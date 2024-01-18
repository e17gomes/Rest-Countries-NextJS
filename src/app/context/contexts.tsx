import React, { createContext, useState, ReactNode } from 'react';

type ThemeProviderProps = {
    children: ReactNode;
  };

  const ThemeContext =  createContext<{ theme: string; toggleTheme: () => void }>({
    theme: 'light', 
    toggleTheme: () => {},
  });
  
  
  const ThemeProvider = ({ children }: ThemeProviderProps) => {
      
      const [theme, setTheme] = useState('light');
      
      
      const toggleTheme = () => {
          setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export { ThemeContext, ThemeProvider };