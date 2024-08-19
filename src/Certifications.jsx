import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';



const Certifications = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    const images = language === 'en'
        ? [
            "/certificados/en1.png",
            "/certificados/en2.png",
            "/certificados/reactniof.png",
        ]
        : [
            "/certificados/sp1.png",
            "/certificados/sp2.png",
            "/certificados/Reactes.png",
        ];

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
            <hr className="w-1/5 mx-auto border-black dark:border-white" />
            <motion.div className="w-full "
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 2.3 }}>
                <Swiper
                    modules={[Navigation, Pagination, Keyboard]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img src={src} alt={`Certification ${index + 1}`} className="swiper-image mx-auto md:pt-0 pt-5 " />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </motion.div>
    );
};

export default Certifications;