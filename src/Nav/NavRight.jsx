import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { NavLink } from "react-router-dom";

const NavRight = () => {
    const { language, isAnimating } = useContext(LanguageContext);
    

    const links = {
        en: [
            { path: "/projects", label: "Projects" },
            { path: "/certifications", label: "Certifications" },
            { path: "/", label: "About" },
            { path: "/contact", label: "Contact" }
        ],
        es: [
            { path: "/projects", label: "Proyectos" },
            { path: "/certifications", label: "Certificaciones" },
            { path: "/", label: "Acerca" },
            { path: "/contact", label: "Contacto" }
        ]
    };
  

    return (
       
           
            <ul className={`flex  justify-around md:justify-between  md:basis-2/3 md:items-center md:max-w-lg xl:space-x-32 md:ml-6 lg:space-x-16  md:pt-6 md:mt-6 md:pr-6 md:text-2xl text-base tracking-wide transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {links[language].map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `link-hover ${isActive ? 'active-link' : ''}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
       
    )
};

export default NavRight;