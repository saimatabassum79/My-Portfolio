// Carousel.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({
    children,
    baseWidth = 300,
    autoplay = true,
    autoplayDelay = 3000,
    pauseOnHover = true,
    loop = true,
    round = false,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const length = React.Children.count(children);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + length) % length);
    };

    useEffect(() => {
        if (!autoplay) return;

        const startAutoplay = () => {
            intervalRef.current = setInterval(() => {
                nextSlide();
            }, autoplayDelay);
        };

        startAutoplay();

        return () => clearInterval(intervalRef.current);
    }, [autoplay, autoplayDelay]);

    const handleMouseEnter = () => {
        if (pauseOnHover) clearInterval(intervalRef.current);
    };
    const handleMouseLeave = () => {
        if (pauseOnHover && autoplay) {
            intervalRef.current = setInterval(() => {
                nextSlide();
            }, autoplayDelay);
        }
    };

    return (
        <div
            className="relative overflow-hidden"
            style={{ width: baseWidth }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 w-full"
                >
                    {React.Children.toArray(children)[currentIndex]}
                </motion.div>
            </AnimatePresence>


            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-green-400/70 text-black p-2 rounded-full hover:bg-green-500 transition"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-green-400/70 text-black p-2 rounded-full hover:bg-green-500 transition"
            >
                &#10095;
            </button>


            <div className="absolute bottom-2 w-full flex justify-center gap-2">
                {Array.from({ length }).map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-green-400" : "bg-gray-500/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
