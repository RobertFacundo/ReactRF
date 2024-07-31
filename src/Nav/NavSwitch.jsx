import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import sunIcon from "../../public/sun.png";
import moonIcon from "../../public/moon.png";

const Switch = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [showIcons, setShowIcons] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIcons(true)
        }, 3200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div onClick={toggleTheme} className= {`flex items-center justify-center p-2 cursor-pointer transition-opacity duration-[2700ms] ${showIcons ? 'opacity-100' : 'opacity-0'}`}>
            {showIcons && (
                <>
                    <img
                        className={`w-14 translate-x-32 -translate-y-8 absolute transition-opacity duration-[1500ms] ease-in-out ${showIcons && isDarkMode ? 'opacity-100' : 'opacity-0'}`}
                        src={moonIcon}
                        alt="Sun Icon"
                    />
                    <img
                        className={`w-16 translate-x-32 -translate-y-8 absolute transition-opacity duration-[1500ms] ease-in-out ${showIcons && isDarkMode ? 'opacity-0' : 'opacity-100'}`}
                        src={sunIcon}
                        alt="Moon Icon"
                    />
                </>
            )}
        </div>

    )
};

export default Switch;