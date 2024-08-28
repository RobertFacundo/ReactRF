import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';



const fontBuda = {
    fontFamily: 'Buda, sans-serif',
};

const Projects = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    const projects = language === 'en'
        ? [
            {
                src: 'proyectos/fotografico.mp4',
                desc: 'A photography portfolio template where I perfected the skills I learned in various courses.',
                link: 'https://robertfacundo.github.io/PortfolioFotografia/'
            },
            {
                src: 'proyectos/historia.mp4',
                desc: 'I designed this website with history as the topic, from which I thought I could create something interesting. The big challenge was making a dropdown menu that appears from behind the image slider without breaking everything I had done.',
                link: 'https://robertfacundo.github.io/SitioWebHistoria-/'
            },
            {
                src: 'proyectos/react.mp4',
                desc: 'This time, I designed a site with modern architecture based on React, integrating a variety of interactive and functional components. Using advanced state and effect techniques, each component is designed to manage local and global states efficiently. The application also includes sophisticated features such as API utilization, dynamic generation of literary quotes, trivia games, and task list management. Additionally, detailed interaction tracking is implemented through interactive graphs, allowing for user behavior analysis. This approach ensures optimal performance and a smooth user experience, which are fundamental in modern and scalable web applications.',
                link: 'https://main--luxury-starship-c00ba3.netlify.app/'
            },
            {
                src: 'proyectos/reactecommerce.mp4',
                desc: "This React shopping cart application allows users to add products to a cart, review selected items, and place an order. The application uses Firebase to manage data persistence and localStorage to maintain the user's cart even after reloading the page. Additionally, the Bulma library is employed for design and user interface, providing a modern and responsive look. SweetAlert is used to display informative and error alerts elegantly.",
                link: 'https://ecommercereactfinalproject.netlify.app/'
            },
            {
                src: 'proyectos/videojuego.mp4',
                desc: 'I decided to practice on my own, and the chosen theme was video games. I had fun designing the infinite carousel, grid, and a search input.',
                link: 'https://robertfacundo.github.io/Practica-WebVideojuegos/'
            },
            {
                src: '/proyectos/portfolio.mp4',
                desc: 'This portfolio is developed in React and uses multiple context providers to manage the theme and language globally. Navigation is handled with React Router, allowing users to move between different routes such as "About", "Contact", "Certifications," and "Projects." Entry and exit animations are managed with framer-motion, providing smooth transitions between pages. On the projects page, Swiper is used to display projects interactively with navigation, pagination, and keyboard support. The theme context (ThemeContext) allows toggling between dark and light modes, dynamically applying styles throughout the site.',
                link: 'https://main--robertfacundo.netlify.app/'
            },
            {
                src: 'proyectos/cuentos.mp4',
                desc: 'My first dive into the world of HTML and CSS. Margin, padding, display: flex, and discovering the wonder of hover. Passed with flying colors, and as a bonus, I used the site to upload stories I had written in the past.',
                link: 'https://robertfacundo.github.io/PreEntrega3Robert/'
            },
            {
                src: 'proyectos/js.mp4',
                desc: 'This site is the final project of the JavaScript course. It implements iterative loops, conditionals, and DOM modifications, as well as having a semi-functional shopping cart.',
                link: 'https://robertfacundo.github.io/ProyectoFinalJavaScript/'
            },
            {
                src: 'proyectos/musicShop.mp4',
                desc: 'E-commerce for musical instruments with a shopping cart that is displayed in a modal. I used fetch to obtain product data from a JSON file and display them in the DOM using an asynchronous function. The products can be viewed by selecting the corresponding category in the navigation bar. The styles are defined in SCSS for an attractive and responsive presentation of the store.',
                link: 'https://robertfacundo.github.io/musicShop/'
            },
            {
                src: 'proyectos/fetch.mp4',
                desc: "This project is a React application that uses a custom hook to fetch and display information about Pokémon from the PokeAPI. The application allows users to filter Pokémon by type (category) and view a random set of detailed Pokémon based on the user's selection.",
                link: 'https://fecthreact.netlify.app/psychic'
            },
            {
                src: 'proyectos/ecommerce.mp4',
                desc: 'On my own, I wanted to emulate a clothing e-commerce site to practice grid layouts, product presentation, and functionalities such as filters and onclick events.',
                link: 'https://robertfacundo.github.io/PracticaEcommerceRopa/'
            },

        ]
        : [
            {
                src: 'proyectos/fotografico.mp4',
                desc: 'Un template de un portfolio fotográfico en el que perfeccioné las habilidades que aprendí en los diferentes cursos.',
                link: 'https://robertfacundo.github.io/PortfolioFotografia/'
            },
            {
                src: 'proyectos/historia.mp4',
                desc: 'Diseñé este sitio sobre historia, del que pensé que podria hacer algo interesante. El gran desafío fue hacer un menú desplegable que salga desde detrás del slider de imágenes sin que se rompa todo lo que habia hecho.',
                link: 'https://robertfacundo.github.io/SitioWebHistoria-/'
            },
            {
                src: 'proyectos/react.mp4',
                desc: 'En esta oportunidad diseñé un sitio con arquitectura moderna basada en React, integrando una variedad de componentes interactivos y funcionales. Utilizando técnicas avanzadas de estado y efectos, cada componente está diseñado para gestionar estados locales y globales de manera eficiente. La aplicación también incluye características sofisticadas como utilizacion de APIs, e implementa un seguimiento detallado de interacciones a través de gráficos interactivos, permitiendo análisis del comportamiento del usuario. Este enfoque garantiza un rendimiento óptimo y una experiencia de usuario fluida, fundamentales en aplicaciones web modernas y escalables.',
                link: 'https://main--luxury-starship-c00ba3.netlify.app/'
            },
            {
                src: 'proyectos/reactecommerce.mp4',
                desc: 'Esta aplicación de carrito de compras en React permite a los usuarios agregar productos a un carrito, revisar los elementos seleccionados y realizar un pedido. La aplicación utiliza Firebase para gestionar la persistencia de datos y el almacenamiento en localStorage para mantener el carrito del usuario incluso después de recargar la página. Además, se emplea la biblioteca Bulma para el diseño y la interfaz de usuario, proporcionando un aspecto moderno y responsivo.SweetAlert se utiliza para mostrar alertas informativas y de error de manera elegante.',
                link: 'https://ecommercereactfinalproject.netlify.app/'
            },
            {
                src: 'proyectos/videojuego.mp4',
                desc: 'Decidí practicar por mi cuenta, y la temática elegida fue la de videojuegos. Me entretuve ideando el carrousel infinito, grid, un input de busqueda.',
                link: 'https://robertfacundo.github.io/Practica-WebVideojuegos/'
            },
            {
                src: 'proyectos/portfolio.mp4',
                desc: 'Mi portfolio está desarrollado en React y utiliza múltiples proveedores de contexto para manejar el tema y el idioma a nivel global. La navegación está gestionada con React Router, permitiendo a los usuarios moverse entre diferentes las rutas. Las animaciones de entrada y salida se manejan con framer-motion, proporcionando una transición suave entre las páginas. En la página de proyectos, se utiliza Swiper para mostrar los proyectos de forma interactiva con navegación, paginación y soporte de teclado.',
                link: 'https://main--robertfacundo.netlify.app/'
            },
            {
                src: 'proyectos/cuentos.mp4',
                desc: 'Mi primera zambullida al universo del HTML y CSS. Margin, padding, display: flex y conocer la maravilla del hover. Aprobado con nota sobresaliente, de yapa aproveché el sitio para subir cuentos que había escrito en otro tiempo.',
                link: 'https://robertfacundo.github.io/PreEntrega3Robert/'
            },
            {
                src: 'proyectos/js.mp4',
                desc: 'Este sitio es el proyecto final del curso de Javascript. Se implementan ciclos iterativos, condicionales, modificaciones del DOM, además de tener un carro de compras semi funcional.',
                link: 'https://robertfacundo.github.io/ProyectoFinalJavaScript/'
            },
            {
                src: 'proyectos/musicShop.mp4',
                desc: 'E-commerce de instrumentos musicales con carrito de compras, que se visualiza con un modal. Utilicé fetch para obtener los datos de los productos desde un archivo JSON y mostrarlos en el DOM mediante  una función asíncrona. Los productos se pueden visualizar al seleccionar la categoría correspondiente en la barra de navegación. Los estilos están definidos en SCSS para una presentación atractiva y responsiva de la tienda.',
                link: 'https://robertfacundo.github.io/musicShop/'
            },
            {
                src: 'proyectos/fetch.mp4',
                desc: 'Este proyecto es una aplicación de React que utiliza un hook personalizado para obtener y mostrar información sobre Pokémon desde la PokeAPI. La aplicación permite a los usuarios filtrar Pokémon por tipo (categoría) y visualizar un conjunto aleatorio de Pokémon detallados basados en la selección del usuario.',
                link: 'https://fecthreact.netlify.app/'
            },
            {
                src: 'proyectos/ecommerce.mp4',
                desc: 'Por mi cuenta quise emular un E-commerce de ropa, para poder practicar la disposicion de las grillas, presentación de productos, y funcionalidades como filtros y eventos onclick.',
                link: 'https://robertfacundo.github.io/PracticaEcommerceRopa/'
            },
        ]


    return (
        <motion.div
            className={`flex flex-col item h-screen bg-cover bg-no-repeat bg-bottom`}
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
            <hr className="w-1/5 mx-auto border-black dark:border-white " />
            <div className="w-full  bg-slate-50 dark:bg-transparent transition-colors duration-700"
            >
                <Swiper
                    className="projects-swiper "
                    modules={[Pagination, Keyboard, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} >
                            <div className={`flex flex-col lg:flex-row p-6 h-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <motion.video autoPlay loop muted
                                    className="lg:w-3/5 h-96 mx-auto"
                                    src={project.src}
                                    alt={`Project ${index + 1}`}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 1 }}
                                />
                                <div className="flex flex-col items-center justify-center font-buda text-xl tracking-wider text-center">
                                    <motion.p
                                        className="w-4/5 mx-auto z-50 pt-6"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 1 }}
                                    >
                                        {project.desc}
                                    </motion.p>
                                    <motion.a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.link}
                                        className="mt-6 link-hover italic hover:font-semibold"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 1 }}
                                    >
                                        {language === 'en' ? 'Visit' : 'Visitar'}
                                    </motion.a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.div>
    );
};

export default Projects;