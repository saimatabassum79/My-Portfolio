import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef } from "react";

function FloatingOrb({ position, color, size, speed }) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
    mesh.current.position.x = position[0] + Math.cos(t * speed) * 0.3;
  });

  return (
    <Sphere ref={mesh} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        {/* lights */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />

        {/* floating orbs */}
        <FloatingOrb position={[-4, 0, -2]} color="#0ea5e9" size={1.5} speed={0.6} />
        <FloatingOrb position={[3, 1, -3]} color="#8b5cf6" size={2} speed={0.4} />
        <FloatingOrb position={[0, -2, -4]} color="#22d3ee" size={1.8} speed={0.5} />
      </Canvas>
    </div>
  );
}
