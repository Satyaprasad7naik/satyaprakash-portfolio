import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { skills } from "../constants";
import TitleHeader from "../components/common/TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".tech-card");

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: "back.out(1.5)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <TitleHeader
          overline="Tech Stack"
          title="Tools of the Trade"
          description="Platforms and tools I use daily to manage, analyze, and optimize campaigns at scale."
        />

        {/* 3D Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="tech-card group relative h-40 md:h-48 rounded-lg glass-effect border border-border/50 hover:border-primary/50 overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:glow-border"
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-sm md:text-base font-semibold text-text text-center px-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </p>
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Desktop Message */}
        <div className="text-center p-8 rounded-lg glass-effect border border-border/50">
          <p className="text-text-muted text-sm md:text-base">
            💡 <strong>Pro Tip:</strong> I learn new tools based on what the project requires. These are my current favorites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
