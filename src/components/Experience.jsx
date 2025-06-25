import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Book } from "./Book";
export const Experience = () => {

  const [floatingEnabled, setFloatingEnabled] = useState(true);

  useEffect(() => {
    const handleMouseDown = () => setFloatingEnabled(false);
    const handleMouseUp = () => setFloatingEnabled(true);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>   
      <Float
      enabled={floatingEnabled} 
      rotation-x={-Math.PI / 4}
      floatingIntensity={1}
      speed={2}
      rotationIntensity={2}>   
        <Book/>
      </Float>
      <OrbitControls />
      <Environment preset="studio" />      
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
