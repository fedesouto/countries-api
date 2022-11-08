import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext)


export const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const handleChange = () => {
        setDarkTheme(!darkTheme);
        if(!darkTheme) {
            document.body.classList.add('dark')
        }
        else {
            document.body.className = ''
        }
    }
    return <ThemeContext.Provider value={{darkTheme, setDarkTheme, handleChange}}>
        {children}
    </ThemeContext.Provider>
}