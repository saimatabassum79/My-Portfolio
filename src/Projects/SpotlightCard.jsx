import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsDetails from "./ProjectsDetails";
import { Link } from "react-router";

const ProjectCard = ({
  id,
  image,
  title,
  subtitle,
  description,
  liveLink,
  clientRepo,
  serverRepo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [storeId, setStoreId] = useState(null);

  const close = () => setIsOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-[#0a597b] transition-all duration-500 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#0f172a]"
    >
      {/* Project Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105 bg-black"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm rounded-md hover:bg-[#0591cd] transition"
          >
            View Live
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-2xl sm:text-3xl text-[#5bcdfe] font-semibold">
          {title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base">{subtitle}</p>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href={clientRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#0591cd] text-sm sm:text-base rounded-md shadow hover:scale-105 transition-transform"
          >
            Github
          </a>
          <button
            onClick={() => {
              setIsOpen(true);
              setStoreId(id);
            }}
            className="px-4 py-2 border border-[#0591cd] text-white text-sm sm:text-base rounded-md hover:bg-[#0e709a] hover:text-white transition-all"
          >
            View Details
          </button>
          {isOpen && (
            <ProjectsDetails storeId={storeId} isOpen={isOpen} close={close} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function SpotlightProjects() {
  const [showAll, setShowAll] = useState(false);
   
  const projects = [
    {
      id: 1,
      image: "https://i.ibb.co.com/rGmcHRJk/Screenshot-2025-11-20-202247.png",
      title: "Online Platform",
      subtitle: "Effortless Online Shopping with Next.js",
      description:
        "A fully responsive e-commerce platform built with React,Tailwind CSS and Next.js, featuring category-based product filtering, dynamic routing, and a smooth shopping experience.",
      liveLink: "https://next-js-project-4-mav2b35f0-saima-tabassums-projects-781fcc27.vercel.app/",
      clientRepo:
        "https://github.com/saimatabassum79/Next-js-project-4",
     
      accent: "#22c55e",
    },

    {
      id: 2,
      image: "https://i.ibb.co/TD8LZfjG/Screenshot-2025-11-18-213357.png",
      title: "Nest Mart",
      subtitle: "Shop Smarter with React & Tailwind",
      description:
        "Nest Mart is a modern e-commerce app built with React, Tailwind CSS, and React Router, offering smooth navigation and product filtering.",
      liveLink: "https://my-project-2-nested-router-pmd8.vercel.app/",
      clientRepo:
        "https://github.com/saimatabassum79/my-project-2-Nested-Router-",
      
      accent: "#22c55e",
    },
    {
      id: 3,
      image: "https://i.ibb.co/5x4Bzjfy/Screenshot-2025-11-18-224151.png",
      title: "Trouble",
      subtitle: "Conquer Challenges, Effortlessly",
      description:
        "Trouble is a smart platform to discover and popular tours in one place, offering a simple and seamless experience. Built with React, Tailwind CSS, and React Router.",
      liveLink: "https://products-shop-project-3.vercel.app/",
      clientRepo: "https://github.com/saimatabassum79/Products-Shop-project-3",
     
      accent: "#f472b6",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/KzQzJhqB/Screenshot-2025-11-19-013241.png",
      title: "ShopHeaven",
      subtitle: "Your Heaven for Every Product You Need",
      description:
        "ShopHeaven is a modern e-commerce platform with product filtering, cart & wishlist features, built using React, Tailwind CSS, and React Router.",
      liveLink: "https://my-project-1-react-router.vercel.app/",
      clientRepo: "https://github.com/saimatabassum79/my-project-1-react-router-",
      
      accent: "#06b6d4",
    },
  ];
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <section className="py-16 px-6 sm:px-12 bg-[#0a0f18] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl sm:text-5xl text-[#1bb1f1] font-extrabold mb-14"
      >
        My Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleProjects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}

      </div>
      
       {/* VIEW ALL BUTTON */}
      <div className="text-center mt-14">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 rounded-full bg-[#0591cd] text-white text-lg font-semibold shadow hover:bg-[#0e709a] transition"
        >
          {showAll ? "View Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
}
