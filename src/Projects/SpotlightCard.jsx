import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsDetails from "./ProjectsDetails";

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
      className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#0f172a] border border-white/10 shadow-lg hover:shadow-[#0a597b] transition-all duration-500"
    >
      {/* Project Image */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay effect */}
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
        <h3
          className="text-2xl text-[#5bcdfe] font-semibold"
          
        >
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href={clientRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 bg-[#0591cd] text-sm rounded-md shadow hover:scale-105 transition-transform"
          >
            Github
          </a>
         
          <button
            onClick={() => {
              setIsOpen(true);
              setStoreId(id);
            }}
            className="px-4 py-1 border border-[#0591cd] text-white text-sm rounded-md hover:bg-[#0e709a] hover:text-[#ffffff] transition-all"
          >
            View Details
          </button>
          {isOpen && (
            <ProjectsDetails
              storeId={storeId}
              isOpen={isOpen}
              close={close}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function SpotlightProjects() {
  const projects = [
    {
      id: 1,
      image: "https://i.ibb.co.com/Cshg4pRC/Screenshot-2025-11-16-211509.png",
      title: "Nest Mart",
      subtitle: "Shop Smarter with React & Tailwind",
      description:
        "Nest Mart is a modern e-commerce app built with React, Tailwind CSS, and React Router, offering smooth navigation and product filtering.",
      liveLink: "https://my-project-2-nested-router-pmd8.vercel.app/",
      clientRepo:
        "https://github.com/saimatabassum79/my-project-2-Nested-Router-",
      serverRepo:
        "https://github.com/saimatabassum79/my-project-2-Nested-Router-",
      accent: "#22c55e",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/tPM20Zcf/Screenshot-2025-11-16-211449.png",
      title: "ShopHeaven",
      subtitle: "Your Heaven for Every Product You Need",
      description:
        "ShopHeaven is a modern e-commerce platform with product filtering, cart & wishlist features, built using React, Tailwind CSS, and React Router.",
      liveLink: "https://my-project-1-react-router.vercel.app/",
      clientRepo: "https://github.com/saimatabassum79/my-project-1-react-router-",
      serverRepo: "https://github.com/saimatabassum79/my-project-1-react-router-",
      accent: "#06b6d4",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/nqprTT5y/Screenshot-2025-11-16-211350.png",
      title: "SocialHub",
      subtitle: "Explore Trends, Connect Smarter",
      description:
        "SocialHub is a smart platform to discover and download trending apps in one place, offering a simple and seamless experience. Built with React, Tailwind CSS, and React Router.",
      liveLink: "https://socialhub2saima-new.vercel.app/",
      clientRepo: "https://github.com/saimatabassum79/SocialHub-porjects",
      serverRepo: "https://github.com/saimatabassum79/SocialHub-porjects",
      accent: "#f472b6",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-12 bg-[#0a0f18] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl sm:text-5xl text-[#1bb1f1] font-extrabold mb-14   bg-clip-text"
      >
        My Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </section>
  );
}
