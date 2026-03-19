import { useEffect, useRef } from "react";
import { featureCards } from "../constants";
import TitleHeader from "../components/common/TitleHeader";
import GlowCard from "../components/common/GlowCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".feature-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <TitleHeader
          overline="What I Do"
          title="My Approach to Marketing"
          description="A data-driven, results-focused methodology built over 5+ years of scaling campaigns."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featureCards.map((card, idx) => (
            <GlowCard key={idx} className="feature-card">
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-text mb-3">{card.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {card.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
