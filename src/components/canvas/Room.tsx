import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Room = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Create a simple geometric room placeholder
  // In production, replace with useGLTF("/models/room.glb")
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    // Subtle floating animation
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.08;
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Placeholder: Simple box representing the room */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#6366f1" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Additional geometric elements */}
      <mesh position={[1.5, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#a855f7" metalness={0.5} roughness={0.3} />
      </mesh>

      <mesh position={[-1.5, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 1.5, 32]} />
        <meshStandardMaterial color="#6366f1" metalness={0.3} roughness={0.4} />
      </mesh>
    </group>
  );
};

export default Room;
