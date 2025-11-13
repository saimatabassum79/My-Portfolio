// GlassIconsMarquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVercel } from "react-icons/si";

const skillIcons = [
  { icon: <FaHtml5 />, label: "HTML", color: "orange-500" },
  { icon: <FaCss3Alt />, label: "CSS", color: "blue-500" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "cyan-400" },
  { icon: <SiJavascript />, label: "JavaScript", color: "yellow-400" },
  { icon: <FaReact />, label: "React", color: "blue-400" },
  { icon: <FaGitAlt />, label: "Git", color: "red-500" },
  { icon: <FaGithub />, label: "GitHub", color: "black" },
  { icon: <SiVercel />, label: "Vercel", color: "gray-300" },
];

// Split into 2 rows
const half = Math.ceil(skillIcons.length / 2);
const firstRow = skillIcons.slice(0, half);
const secondRow = skillIcons.slice(half);

const GlassIconsMarquee = () => {
  const renderIcons = (icons) =>
    icons.map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col px-4 my-3 py-5 items-center justify-center w-14 h-12 sm:w-17 sm:h-16 rounded-full  bg-white/13 backdrop-blur-sm border border-white/20 shadow-sm hover:scale-110 transition-transform duration-300 cursor-pointer"
      >
        <div className={`text-2xl sm:text-2xl text-${item.color} mb-2`}>{item.icon}</div>
        <span className="text-gray-200 text-xs">{item.label}</span>
      </div>
    ));

  return (
    <div className="py-7 bg-black/70 rounded-xl mx-4 sm:mx-12 space-y-4">
      {/* First row */}
      <Marquee speed={35} gradient={false} pauseOnHover={true}>
        <div className="flex gap-4 w-max ">{renderIcons([...firstRow, ...firstRow])}</div>
      </Marquee>

      {/* Second row */}
      <Marquee speed={40} gradient={false} pauseOnHover={true} direction="right">
        <div className="flex gap-4 w-max">{renderIcons([...secondRow, ...secondRow])}</div>
      </Marquee>
    </div>
  );
};

export default GlassIconsMarquee;
