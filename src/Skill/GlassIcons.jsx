import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiVercel, SiNextdotjs, SiRedux, SiApollographql } from "react-icons/si";
import { Html } from "@react-three/drei";
import * as THREE from "three";

// Skill icons + labels + color
const skillIcons = [
  { icon: <FaHtml5 />, label: "HTML", color: "#F16529" },
  { icon: <FaCss3Alt />, label: "CSS", color: "#2965F1" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#38BDF8" },
  { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" },
  { icon: <FaReact />, label: "React", color: "#61DBFB" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "#000789" },
  { icon: <SiRedux />, label: "Redux ", color: "#764ABC" },
  { icon: <SiApollographql />, label: "API ", color: "#311C87" },
  { icon: <FaGitAlt />, label: "Git", color: "#F05032" },
  { icon: <FaGithub />, label: "GitHub", color: "#181717" },
  { icon: <SiVercel />, label: "Vercel", color: "#008965" },
];

// Orbit icons
function OrbitIcons() {
  const groupRef = useRef();
  const radius = 4;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.2;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {skillIcons.map((item, idx) => {
        const angle = (idx / skillIcons.length) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        return (
          <mesh key={idx} position={[x, 0, z]}>
            <Html distanceFactor={9} style={{ transform: "translate(-50%, -50%)" }}>
              <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-110 transition-transform duration-500  cursor-pointer">
                <div style={{ color: item.color }} className="text-1xl sm:text-2xl mb-1">
                  {item.icon}
                </div>
                <span className="text-gray-200 text-[11px] text-center">{item.label}</span>
              </div>
            </Html>
          </mesh>
        );
      })}
    </group>
  );
}

// Background glowing rings + spotlight
function GlowRingsWithSpotlight() {
  const groupRef = useRef();
  const rings = Array.from({ length: 3 });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((ring, i) => {
      ring.rotation.z = t * 0.2 * (i + 1);
    });
  });

  return (
    <group ref={groupRef}>
      {/* Glowing orbit rings */}
      {rings.map((_, i) => {
        const geometry = new THREE.RingGeometry(4 + i * 0.7, 4.2 + i * 0.7, 64);
        const material = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? "#0EA5E9" : "#8B5CF6",
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.1,
        });
        return <mesh key={i} geometry={geometry} material={material} rotation-x={Math.PI / 2} />;
      })}

      {/* Spotlight from above */}
      <pointLight
        color="#ffffff"
        intensity={1.5}
        distance={10}
        decay={2}
        position={[0, 5, 0]}
        castShadow
      />
    </group>
  );
}

export default function GlassIconsOrbitSpotlightV2() {
  return (
    <div className="w-full h-[500px] sm:h-[600px] relative">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        {/* Ambient light for base lighting */}
        <ambientLight intensity={0.5} />

        {/* Background rings + spotlight */}
        <GlowRingsWithSpotlight />

        {/* Orbit icons */}
        <OrbitIcons />
      </Canvas>
    </div>
  );
}
