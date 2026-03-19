import { useEffect, useRef } from "react";
import HeroExperience from "../components/canvas/HeroExperience";
import Button from "../components/common/Button";
import { heroContent } from "../constants";
import gsap from "gsap";

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Character stagger animation for headline
    if (!headlineRef.current) return;

    const text = headlineRef.current.innerText;
    headlineRef.current.innerHTML = text
      .split("")
      .map(
        (char) =>
          `<span class="hero-char" style="display:inline-block;opacity:0;transform:translateY(80px) rotateX(-45deg)">${
            char === " " ? "&nbsp;" : char
          }</span>`
      )
      .join("");

    gsap.to(".hero-char", {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.7,
      ease: "back.out(1.2)",
      stagger: 0.02,
      delay: 0.3,
    });
  }, []);

  useEffect(() => {
    // Section entrance animations
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".hero-subtext",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.2,
      }
    );

    gsap.fromTo(
      ".hero-cta",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        delay: 1.4,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-screen pt-20 pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <h1
              ref={headlineRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight mb-6"
            >
              {heroContent.headline}
            </h1>

            <p className="hero-subtext text-xl md:text-2xl text-primary font-semibold mb-2">
              {heroContent.subheadline}
            </p>

            <p className="hero-subtext text-text-muted text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              {heroContent.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="primary" size="lg" className="hero-cta">
                {heroContent.cta1} →
              </Button>
              <Button variant="secondary" size="lg" className="hero-cta">
                {heroContent.cta2}
              </Button>
            </div>

            {/* Metrics Teaser */}
            <div className="hero-subtext flex gap-8 pt-8 border-t border-border/50">
              <div>
                <p className="text-2xl font-bold text-primary">4.2x</p>
                <p className="text-sm text-text-muted">Average ROAS</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-text-muted">Campaigns Launched</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">220%</p>
                <p className="text-sm text-text-muted">Organic Growth</p>
              </div>
            </div>
          </div>

          {/* Right: 3D Canvas */}
          <div className="relative w-full h-80 md:h-96 lg:h-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 rounded-lg glass-effect border border-border/50">
              <HeroExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
