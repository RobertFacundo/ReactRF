import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import { Tooltip } from "@mui/material";
import TypingText from "./TypingText";

const About = () => {
    const { language } = useContext(LanguageContext);
    const { isDarkMode } = useContext(ThemeContext);

    const staggerDuration = 0.2;

    const logos = [
        { src: "/logos/html.png", tooltip: "HTML" },
        { src: "/logos/css.png", tooltip: "CSS" },
        { src: "/logos/js.png", tooltip: "JavaScript" },
        { src: "/logos/react.png", tooltip: "React" },
        { src: "/logos/sass.png", tooltip: "Sass" },
        { src: "/logos/tailwind.png", tooltip: "Tailwind CSS" },
        { src: "/logos/bulma.png", tooltip: "Bulma" },
        { src: "/logos/framer.png", tooltip: "Framer Motion" },
        { src: "/logos/firebase.png", tooltip: "Firebase" },
    ];

    const parrafos = {
        es: [
            {
                id: "parrafo1",
                text: (
                    <>
                        Originalmente de <b>Argentina</b>, mi trayectoria comenzó en el mundo de la música, donde desarrollé una profunda apreciación por la expresión artística y la colaboración creativa. Para la misma época y durante varias temporadas, tuve el privilegio de trabajar en hoteles de renombre en los <b>Estados Unidos</b>, donde no solo adquirí una valiosa experiencia laboral, sino que también tuve la oportunidad de aprender y perfeccionar el idioma inglés <a href="/certificados/certificadoIngles.jpeg" target="_blank"><i>(Upper Intermediate B2)</i></a>.
                    </>
                ),
            },
            {
                id: "parrafo2",
                text: (
                    <>
                        Sin embargo, mi verdadero viaje hacia la realización personal comenzó cuando decidí adentrarme en el mundo de la programación. Desde entonces he estado comprometido a dedicarle todo mi tiempo para mejorar mis habilidades. Actualmente estoy inscrito en el Curso de <b>Desarrollo Web Full Stack</b> en <a className="l" target="_blank" href="https://www.coderhouse.com/ar/"><i>CoderHouse</i></a>, destacándome en áreas como <b>HTML, CSS, React y JavaScript</b> con resultados sobresalientes.
                    </>
                ),
            },
            {
                id: "parrafo3",
                text: (
                    <>
                        Mis proyectos, presentados a continuación, son un testimonio de mi dedicación y creatividad en este campo de constante evolución.
                    </>
                ),
            },
            {
                id: "parrafo4",
                text: (
                    <>
                        Mi visión para el futuro pasa por seguir creciendo profesionalmente como programador, con especial interés en el <b>Diseño UX/UI</b>. Creo firmemente que la combinación de mis habilidades técnicas y mi pasión por el diseño me posiciona como un candidato único y altamente calificado para abordar los desafíos del mundo digital actual.
                    </>
                ),
            },
        ],
        en: [
            {
                id: "parrafo1",
                text: (
                    <>
                        Originally from <b>Argentina</b>, my journey began in the world of music, where I developed a deep appreciation for artistic expression and creative collaboration. During the same period, I had the privilege of working at renowned hotels in the <b>United States</b>, where I not only gained valuable work experience but also had the opportunity to learn and perfect the English language.
                    </>
                ),
            },
            {
                id: "parrafo2",
                text: (
                    <>
                        However, my true journey towards personal fulfillment began when I decided to delve into the world of programming. Since then, I have been committed to dedicating all my time to improving my skills. I am currently enrolled in the <b>Full Stack Web Development</b> course at <a className="l" target="_blank" href="https://www.coderhouse.com/ar/"><i>CoderHouse</i></a>, excelling in areas such as <b>HTML, CSS, React, and JavaScript</b> with outstanding results.
                    </>
                ),
            },
            {
                id: "parrafo3",
                text: (
                    <>
                        My projects, presented here, are a testament to my dedication and creativity in this ever-evolving field.
                    </>
                ),
            },
            {
                id: "parrafo4",
                text: (
                    <>
                        My vision for the future involves continuing to grow professionally as a programmer, with a particular interest in <b>UX/UI Design</b>. I firmly believe that the combination of my technical skills and my passion for design positions me as a unique and highly qualified candidate to tackle the challenges of the current digital world.
                    </>
                ),
            },
        ],
    };

    const fontBuda = {
        fontFamily: 'Buda, sans-serif',
    };

    const animations = [
        { initial: { opacity: 0, x: 200 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -100 }, transition: { duration: 1.8 } },
        { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -100 }, transition: { duration: 1.8 } },
        { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -100 }, transition: { duration: 2.5 } },
        { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -100 }, transition: { duration: 2.5 } },
    ];


    return (
        <div
        >
            <motion.div
                className="h-16 content-end relative dark:bg-black bg-white transition-colors duration-700 flex flex-col items-center justify-center lg:block"
                style={{ zIndex: 50 }}
            >
                {/* <h1 className="pl-3 pb-1 text-3xl tracking-widest font-extralight ">Facundo Robert</h1>  */}
                <TypingText text="Faacundo Robert" speed={200} className="typing-text pl-3 pb-1 text-3xl text-center"/>
                <hr className="lg:w-1/3 w-5/12 " />
            </motion.div>

            <div
                className="flex justify-end"

            >
                <div className="lg:w-1/3 lg:block hidden">
                    {!isDarkMode && <img className="-z-50" src="/cherryblossom.png" alt="cherrytree" />}
                </div>

                <motion.section
                    className="flex-col lg:w-2/3 z-50 relative bg-transparent lg:dark:bg-black lg:bg-white transition-colors duration-700 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex lg:ml-2 lg:pl-6 flex-col xl:flex-row ">
                        <motion.h2 className="text-2xl lg:w-1/4 font-extralight text-center tracking-widest pb-1 w-full lg:mx-auto"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 1.5 }}>
                            {language === 'es' ? (
                                <>
                                    <span className="block">Desarrollador</span>
                                    <span className="block">Web</span>
                                </>
                            ) : (
                                <>
                                    <span className="block">Web</span>
                                    <span className="block">Developer</span>
                                </>
                            )}
                        </motion.h2>
                        <section className="flex lg:w-3/4 justify-around mx-auto space-x-2"
                        >
                            {logos.map((logo, index) => (
                                <Tooltip key={index}

                                    title={logo.tooltip} placement="top" enterDelay={300} leaveDelay={200}
                                    componentsProps={{
                                        tooltip: {
                                            sx: {
                                                ...fontBuda,
                                                bgcolor: 'rgba(45, 44, 44, 1)',  // Custom background color
                                                color: 'white',
                                                fontSize: '14px',
                                                borderRadius: '4px',
                                            },
                                        },
                                    }}>
                                    <motion.img transition={{ duration: 1, delay: index * staggerDuration }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="xl:w-14 w-11 pb-1 cursor-pointer" key={index} src={logo.src} alt={logo.tooltip}
                                        title={logo.tooltip} />
                                </Tooltip>
                            ))}
                        </section>
                    </div>
                    <hr className="lg:ml-6 lg:pl-6 mr-3 ml-3 " />
                    <div className="h-screen mx-auto overflow-auto">
                        {parrafos[language].map((parrafo, index) => (
                            <motion.p className="indent-2 p-2 pr-4 lg:ml-6 text-sm xl:text-lg   font-buda tracking-wider text-center overflow-auto"
                                key={index}
                                initial={animations[index % animations.length].initial}
                                animate={animations[index % animations.length].animate}
                                exit={animations[index % animations.length].exit}
                                transition={animations[index % animations.length].transition}
                            >
                                {parrafo.text}
                            </motion.p>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default About;