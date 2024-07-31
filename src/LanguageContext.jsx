import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleLanguage = (lang) => {
        if (language === lang) return;

        setIsAnimating(true);
        setTimeout(() => {
            setLanguage(lang)
            setIsAnimating(false);
        }, 357);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, isAnimating }}>
            {children}
        </LanguageContext.Provider>
    );
};

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, LanguageContext, useLanguage };