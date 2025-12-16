import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Particles() {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.0008;
  });

  return (
    <group ref={group} position={[3, 0, -2]}>
      {Array.from({ length: 60 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.random() * 3,
            Math.random() * 3 - 1.5,
            Math.random() * 3,
          ]}
          scale={0.03}
        >
          <sphereGeometry />
          <meshStandardMaterial color="#56c5f4" />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroThreeBG() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.8} />
      <Particles />
    </Canvas>
  );
}
