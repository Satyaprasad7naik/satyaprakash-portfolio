import { useEffect, useRef } from "react";
import { aboutContent, stats } from "../constants";
import TitleHeader from "../components/common/TitleHeader";
import AnimatedCounter from "../components/common/AnimatedCounter";
import gsap from "gsap";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        <TitleHeader
          overline="About Me"
          title={aboutContent.heading}
          center={true}
        />

        <div ref={textRef} className="prose prose-invert max-w-none mb-16">
          <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6">
            {aboutContent.intro}
          </p>

          <p className="text-2xl md:text-3xl font-bold text-text leading-relaxed">
            <span className="text-gradient">{aboutContent.highlight}</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <AnimatedCounter
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              duration={2.5}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
