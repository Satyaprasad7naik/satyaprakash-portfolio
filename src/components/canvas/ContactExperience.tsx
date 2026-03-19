import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const ContactExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, 3, 3]} intensity={0.6} color="#a855f7" />

        {/* Globe-like sphere */}
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.3}
            roughness={0.4}
            emissive="#6366f1"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Rotating rings */}
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[2, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>

        <mesh rotation={[0, Math.PI / 3, 0]}>
          <torusGeometry args={[2.2, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
