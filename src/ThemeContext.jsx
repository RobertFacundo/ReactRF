import React, { useEffect, useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }

    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeProvider, ThemeContext };