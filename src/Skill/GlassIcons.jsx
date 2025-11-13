// GlassIconsMarquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVercel } from "react-icons/si";

// Color map for purge-safe Tailwind classes
const colorMap = {
  html: "text-orange-900",
  css: "text-blue-500",
  tailwind: "text-cyan-400",
  javascript: "text-yellow-400",
  react: "text-blue-300",
  git: "text-red-500",
  github: "text-black",
  vercel: "text-gray-300",
};

// Icon data with color keys
const skillIcons = [
  { icon: <FaHtml5 />, label: "HTML", colorKey: "html" },
  { icon: <FaCss3Alt />, label: "CSS", colorKey: "css" },
  { icon: <SiTailwindcss />, label: "Tailwind", colorKey: "tailwind" },
  { icon: <SiJavascript />, label: "JavaScript", colorKey: "javascript" },
  { icon: <FaReact />, label: "React", colorKey: "react" },
  { icon: <FaGitAlt />, label: "Git", colorKey: "git" },
  { icon: <FaGithub />, label: "GitHub", colorKey: "github" },
  { icon: <SiVercel />, label: "Vercel", colorKey: "vercel" },
];

// Split into two rows
const half = Math.ceil(skillIcons.length / 2);
const firstRow = skillIcons.slice(0, half);
const secondRow = skillIcons.slice(half);

const GlassIconsMarquee = () => {
  const renderIcons = (icons) =>
    icons.map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col px-4 my-3 py-5 items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <div className={`text-2xl sm:text-3xl mb-2 ${colorMap[item.colorKey]}`}>
          {item.icon}
        </div>
        <span className="text-gray-200 text-xs">{item.label}</span>
      </div>
    ));

  return (
    <div className="py-7 bg-black/70 rounded-xl mx-4 sm:mx-12 space-y-4">
      {/* First row */}
      <Marquee speed={35} gradient={false} pauseOnHover={true}>
        <div className="flex gap-4 w-max">{renderIcons([...firstRow, ...firstRow])}</div>
      </Marquee>

      {/* Second row */}
      <Marquee speed={40} gradient={false} pauseOnHover={true} direction="right">
        <div className="flex gap-4 w-max">{renderIcons([...secondRow, ...secondRow])}</div>
      </Marquee>
    </div>
  );
};

export default GlassIconsMarquee;
