import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function WaveLine() {
  const lineRef = useRef();

  const points = [];
  for (let i = 0; i < 100; i++) {
    points.push(
      new THREE.Vector3(
        (i - 50) * 0.08,
        Math.sin(i * 0.3) * 0.6,
        0
      )
    );
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = geometry.attributes.position.array;

    for (let i = 0; i < pos.length; i += 3) {
      pos[i + 1] = Math.sin(i * 0.02 + t) * 0.6;
    }

    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#0EA5E9" linewidth={2} />
    </line>
  );
}

export default function AboutWaveBG() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6] }}
      dpr={[1, 1.5]}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <WaveLine />
    </Canvas>
  );
}
