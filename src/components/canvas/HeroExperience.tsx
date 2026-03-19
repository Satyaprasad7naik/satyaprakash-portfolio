import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import Room from "./Room";

const HeroExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <HeroLights />
        <Particles />
        <Room />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
