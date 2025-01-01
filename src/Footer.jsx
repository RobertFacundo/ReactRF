import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";


const Footer = () => {
    const { language } = useContext(LanguageContext)
    return (

        <footer className=" items-center justify-center  text-sm h-6 fixed bg-transparent bottom-0 w-full bg-white z-50 text-gray-600 hover:text-black dark:bg-black dark:text-slate-300 flex transition-colors duration-700">
            &copy; {language === 'en' ? ('All rights reserved 2025 | Developed by') : ('Todos los derechos reservados 2025 | Desarrollado por')}     <a
                href="/assets/RobertFacundoCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-light pl-1 dark:hover:text-white flex transition-colors duration-700"
            >
                Robert
            </a>
        </footer>

    )
};

export default Footer;