const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <pointLight position={[-3, 2, -3]} intensity={0.8} color="#6366f1" />
      <pointLight position={[3, -2, 3]} intensity={0.5} color="#a855f7" />
    </>
  );
};

export default HeroLights;
