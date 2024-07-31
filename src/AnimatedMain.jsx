import React, { useRef, useEffect, useContext } from "react";
import "./animatedMain.css";
import { ThemeContext } from "./ThemeContext";

const AnimatedMain = ({ children }) => {
    const canvasRef = useRef(null);
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (isDarkMode) {
            const ctx = canvas.getContext("2d");

            const resizeCanvas = () => {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight - 13;
            };

            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);

            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            const japanese = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
            const numbers = "0123456789";
            let allCharacters = characters + japanese + numbers;
            allCharacters = allCharacters.split("");

            const font_size = 13;
            let columns = Math.floor(canvas.width / font_size);
            let drops = Array(columns).fill(1);

            const draw = () => {
                ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = "#0F0"; // Green color
                ctx.font = font_size + "px arial";

                for (let i = 0; i < drops.length; i++) {
                    const text = allCharacters[Math.floor(Math.random() * allCharacters.length)];
                    ctx.fillText(text, i * font_size, drops[i] * font_size);

                    if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }

                    drops[i]++;
                }
            };

            const intervalId = setInterval(draw, 69);

            return () => {
                clearInterval(intervalId);
                window.removeEventListener("resize", resizeCanvas);
            };
        } else {
            // Animación de hojas cayendo
            const container = document.getElementById("leaf-container");
            const w = container.offsetWidth;
            const h = container.offsetHeight;

            const totalLeaves = 57;
            const leafImages = [
                "/cherry.png",
                "/cherry2.png",
                "/cherry3.png",
            ];

            for (let i = 0; i < totalLeaves; i++) {
                const leaf = document.createElement("div");
                leaf.className = "dot";
                leaf.style.backgroundImage = `url('${getRandomLeafImage()}')`;
                leaf.style.opacity = "0"; // Inicia oculto
                container.appendChild(leaf);
                animateLeaf(leaf);
            }

            function getRandomLeafImage() {
                return leafImages[Math.floor(Math.random() * leafImages.length)];
            }

            function animateLeaf(leaf) {
                const x = Math.random() * w;
                const y = Math.random() * h;
                const size = Math.random() * 20 + 20; // Tamaño aleatorio entre 20px y 40px
                const fallDuration = Math.random() * 5 + 5; // Duración de caída entre 5s y 10s

                leaf.style.width = `${size}px`;
                leaf.style.height = `${size}px`;

                // Desvanecimiento y movimiento inicial
                leaf.style.transition = "opacity 1s, transform 6s ease-in-out";
                leaf.style.opacity = "1"; // Desaparece suavemente

                // Mover la hoja desde la parte superior hasta la posición final
                leaf.style.transform = `translate(${x}px, ${-size}px)`;

                setTimeout(() => {
                    leaf.style.transform = `translate(${x}px, ${h + size}px)`;
                }, 10);

                setTimeout(() => {
                    leaf.style.opacity = "0"; // Desvanecimiento final
                    setTimeout(() => {
                        leaf.remove(); // Eliminar la hoja después de la animación
                        createNewLeaf(); // Crear una nueva hoja
                    }, 1000);
                }, fallDuration * 1000);
            }

            function createNewLeaf() {
                const leaf = document.createElement("div");
                leaf.className = "dot";
                leaf.style.backgroundImage = `url('${getRandomLeafImage()}')`;
                leaf.style.opacity = "0"; // Inicia oculto
                container.appendChild(leaf);
                animateLeaf(leaf);
            }
        }
    }, [isDarkMode]);

    return (
        <main className={`animated-main h-screen  bg-white text-gray-600 dark:bg-black dark:text-slate-300 transition-colors duration-700 `}>
            <canvas className={`${!isDarkMode ? "hidden" : "block"}  z-20`} ref={canvasRef} id="matrix-canvas"></canvas>
            <div className="content overflow-auto sm:overflow-hidden">
                <div id="leaf-container" className={`leaf-container ${isDarkMode ? "hidden" : "block"}  z-10`}></div>
                {children}
            </div>
        </main>
    );
};

export default AnimatedMain;