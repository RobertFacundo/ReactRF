import React, { useEffect, useRef } from "react";
import { useLanguage } from "../LanguageContext";

const NavLeft = () => {
    const spanishWord = "Español";
    const englishWord = "English";

    const spanishButtonRef = useRef(null);
    const englishButtonRef = useRef(null);
    const { toggleLanguage } = useLanguage();

    useEffect(() => {
        const duration = 2900;
        const startTime = Date.now();

        const animateSpans = (element) => {
            const spans = element.querySelectorAll('span');
            const originalLettters = Array.from(spans).map(span => span.textContent.trim());

            const intervalId = setInterval(() => {
                const currentTime = Date.now();

                if (currentTime - startTime >= duration) {
                    spans.forEach((span, index) => {
                        console.log(`Restoring: ${span.textContent} -> ${span.dataset.originalLetter}`);
                        span.textContent = originalLettters[index];
                        span.style.color = '';
                    });
                    clearInterval(intervalId);
                } else {
                    spans.forEach((span) => {
                        span.textContent = getRandomCharacter();
                        span.style.color = "#08da08bf";
                    });
                }
            }, 130);
        };

        animateSpans(spanishButtonRef.current);
        animateSpans(englishButtonRef.current);

    }, []);

    const getRandomCharacter = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzあいうえおか0123456789きくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
        return characters.charAt(Math.floor(Math.random() * characters.length))
    };

    const renderword = (word) => {
        return word.split('').map((char, index) => (
            <span className="font-extralight tracking-widest" key={index}>{char}</span>
        ));
    };


    return (
        <ul className="flex p-3 text-sm ml-6 ">
            <li className="pr-6 pt-6 space-x-0.5 cursor-pointer font-semibold"
                ref={spanishButtonRef}
                onClick={() => toggleLanguage('es')}>
                {renderword(spanishWord)}
            </li>
            <li className="pt-6 space-x-0.5 cursor-pointer font-semibold"
                ref={englishButtonRef}
                onClick={()=> toggleLanguage('en')}
            >
                {renderword(englishWord)}
            </li>
        </ul>
    );
};

export default NavLeft;