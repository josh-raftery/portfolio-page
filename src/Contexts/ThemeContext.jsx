import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('theme')));

  useEffect(() => {
      const darkLocal = JSON.parse(localStorage.getItem('dark'))
      if(darkLocal !== null){
        setDark(themeLocal)
      }
      document.documentElement.setAttribute('data-theme',dark ? "synthwave" : "emerald")
    },[dark])

  return (
    <ThemeContext.Provider value={{dark,setDark}}>
        {children}
    </ThemeContext.Provider>
  )
};