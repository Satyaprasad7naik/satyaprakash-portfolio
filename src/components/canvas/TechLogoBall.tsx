import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TechLogoBallProps {
  name: string;
  icon: string;
}

const TechLogoBall: React.FC<TechLogoBallProps> = ({ name, icon }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const isHoveredRef = useRef(false);
  const baseRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!meshRef.current) return;

    // Random initial rotation
    baseRotationRef.current.x = Math.random() * Math.PI;
    baseRotationRef.current.y = Math.random() * Math.PI;
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;

    const rotationSpeed = isHoveredRef.current ? 0.05 : 0.01;

    meshRef.current.rotation.x += rotationSpeed;
    meshRef.current.rotation.y += rotationSpeed * 1.5;

    // Subtle bobbing animation
    meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.3;
  });

  const handlePointerEnter = () => {
    isHoveredRef.current = true;
  };

  const handlePointerLeave = () => {
    isHoveredRef.current = false;
  };

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#6366f1"
        metalness={0.4}
        roughness={0.3}
        emissive="#6366f1"
        emissiveIntensity={0.2}
      />

      {/* Text for icon */}
      <mesh position={[0, 0, 1.05]}>
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial transparent={true} depthWrite={false} />
      </mesh>
    </mesh>
  );
};

export default TechLogoBall;
