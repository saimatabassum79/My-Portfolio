
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiLeetcode, SiMongodb, SiNextdotjs, SiExpress } from "react-icons/si";

const CircularText = ({ spinDuration = 20, className }) => {
    const [radius, setRadius] = useState(220);


    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 640) {
            
                setRadius(150);
            } else if (window.innerWidth < 1024) {
    
                setRadius(180);
            } else {
        
                setRadius(240);
            }
        };

        updateRadius(); // initial call
        window.addEventListener("resize", updateRadius);

        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    const icons = [
       
    ];
    return (
        <motion.div
            className={`relative flex items-center justify-center ${className}`}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: spinDuration, ease: "linear" }}
        >
            {icons.map((icon, i) => (
                <span
                    key={i}
                    style={{
                        position: "absolute",
                        transform: `rotate(${(360 / icons.length) * i}deg) translate(${radius}px) rotate(-${(360 / icons.length) * i
                            }deg)`,
                    }}
                >
                    {icon}
                </span>
            ))}
        </motion.div>
    );
};

export default CircularText;
