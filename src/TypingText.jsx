import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const TypingText = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const { language } = useContext(ThemeContext)

    useEffect(() => {
        setDisplayedText('');
        let index = 0;
        const timer = setInterval(() => {
            if (index < text.length) {
                console.log(`index: ${index}, char: ${text.charAt(index)}`);
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(timer); // Clear interval when the entire text is typed
            }
        }, speed);

        // Clean up interval on component unmount
        return () => clearInterval(timer);
    }, [text, speed, language]);
    return (
        <div className="typing-text pl-3 pb-1 text-3xl text-center">
            {displayedText}
        </div>
    );
};

export default TypingText;