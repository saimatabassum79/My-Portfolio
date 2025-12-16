import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function GlassDisc() {
  const ref = useRef();

  useFrame(({ mouse }) => {
    ref.current.rotation.x = mouse.y * 0.6;
    ref.current.rotation.y = mouse.x * 0.6;
  });

  return (
    <mesh ref={ref} scale={1.2}>
      <circleGeometry args={[1, 32]} />
      <meshStandardMaterial
        color="#0EA5E9"
        opacity={0.25}
        transparent
      />
    </mesh>
  );
}

export default function ThreeHoverIcon() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      className="absolute inset-0"
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.8} />
      <GlassDisc />
    </Canvas>
  );
}
