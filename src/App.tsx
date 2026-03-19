import { Suspense } from "react";
import "./App.css";

// Layout components
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

// Section components (lazy loaded)
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import ShowcaseSection from "./sections/ShowcaseSection";
import About from "./sections/About";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="relative w-full">
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <Suspense fallback={null}>
          <LogoShowcase />
        </Suspense>
        <Suspense fallback={null}>
          <FeatureCards />
        </Suspense>
        <Suspense fallback={null}>
          <ShowcaseSection />
        </Suspense>
        <Suspense fallback={null}>
          <About />
        </Suspense>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Suspense fallback={null}>
          <TechStack />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
