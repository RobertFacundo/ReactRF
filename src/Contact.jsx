import React, { useContext } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../public/fuji.jpg";
import { ThemeContext } from "./ThemeContext";
import TooltipLink from './TooltipLink';
import { LanguageContext } from "./LanguageContext";


const texts = {
    es: "Si estás buscando lanzar un sitio web a un precio accesible y con un diseño personalizado que refleje la calidad de tu emprendimiento, o si eres una empresa o reclutador en busca de un desarrollador web profesional, no dudes en contactarme.",
    en: "If you're looking to launch a website with an affordable price and a customized design that reflects the quality of your venture, or if you're a company or recruiter seeking a professional web developer, don't hesitate to contact me."
}

const links = [
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/robertfacundofrontend/",
        icon: "fa-linkedin",
        initial: { opacity: 0, x: -200 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 200 },
        transition: { duration: 1.5 },
    },
    {
        title: "Git Hub",
        href: "https://github.com/RobertFacundo?tab=repositories",
        icon: "fa-github",
        initial: { opacity: 0, y: -200 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 200 },
        transition: { duration: 1.5 },
    },
    {
        title: "E-mail",
        href: "mailto:robertfacundo@hotmail.com",
        icon: "fa-envelope",
        initial: { opacity: 0, y: 200 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -200 },
        transition: { duration: 1.5 },
    },
    {
        title: "WhatsApp",
        href: "https://wa.me/5492235801773",
        icon: "fa-whatsapp",
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -200 },
        transition: { duration: 1.5 },
    },
];
const fontBuda = {
    fontFamily: 'Buda, sans-serif',
};

const Contacto = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    return (
        <motion.div
            className={`flex flex-col item h-screen bg-cover bg-no-repeat bg-bottom`}
            style={!isDarkMode ? { backgroundImage: `url(${backgroundImage})` } : {}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
        >
            <motion.section className="dark:bg-black bg-white h-16 transition-colors duration-700 z-50 relative"
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 200 }}
                transition={{ duration: 2 }}>

            </motion.section>
            <hr className="w-1/5 mx-auto border-black dark:border-white" />
            <div style={fontBuda}>
                <p className="pt-6 mt-6 text-center text-xl dark:text-white text-black tracking-wider max-w-3xl mx-auto p-2">
                    {language === 'es' ? texts.es : texts.en}
                </p></div>
            <div className="flex-grow flex items-center justify-center mt-[-239px]">
                <div className="flex space-x-14">
                    {links.map((link, index) => (
                        <TooltipLink
                            key={index}
                            title={link.title}
                            href={link.href}
                            icon={link.icon}
                            initial={link.initial}
                            animate={link.animate}
                            exit={link.exit}
                            transition={link.transition}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Contacto;