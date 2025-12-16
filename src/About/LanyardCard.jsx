import React from "react";
import { motion } from "framer-motion";


export default function LanyardCard({
  title = "Saima Tabassum",
  dropDelay = 0.2,
}) {
  return (
    <section className="relative w-full py-20 px-4 sm:px-12 overflow-hidden">
      
      
     

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center text-[#0EA5E9] mb-16"
        >
          About Me
        </motion.h2>

        {/* Cards */}
        <div className="relative w-full flex flex-col sm:flex-row justify-center gap-8">
          {[
            {
              heading: "Who I Am",
              text: `Hi, I’m Saima Tabassum, a passionate MERN Stack Developer from Bangladesh 🇧🇩, building modern & responsive web applications.`,
            },
            {
              heading: "Education",
              text: `Completed Diploma in Computer Science from Feni Computer Institute (2021-2022), building a strong foundation in programming and web development.`,
            },
            {
              heading: "Passions",
              text: `I create responsive and interactive web applications using React and Tailwind CSS, focusing on clean, efficient, and user-friendly interfaces.`,
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: dropDelay + index * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 60,
              }}
              viewport={{ once: true }}
              className="flex-1 bg-gradient-to-tr from-[#0EA5E9]/20 to-purple-500/20
              backdrop-blur-md border border-[#0EA5E9]/30 rounded-3xl
              p-6 sm:p-8 shadow-lg shadow-[#0EA5E9]/20
              hover:scale-105 transition-transform duration-500"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0EA5E9] mb-3">
                {card.heading}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 h-1 w-full max-w-7xl
          bg-gradient-to-r from-[#0EA5E9]/50 via-purple-400/40 to-[#0EA5E9]/20
          rounded-full origin-left"
        />
      </div>
    </section>
  );
}
