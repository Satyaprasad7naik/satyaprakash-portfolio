import { useEffect, useRef } from "react";
import { logoShowcase } from "../constants";
import TitleHeader from "../components/common/TitleHeader";
import gsap from "gsap";

const LogoShowcase = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    // Infinite scroll marquee animation
    const marquee = marqueeRef.current;
    const marqueeContent = marquee.querySelector(".marquee-content");

    if (!marqueeContent) return;

    gsap.fromTo(
      marqueeContent,
      { x: 0 },
      {
        x: -marqueeContent.scrollWidth / 2,
        duration: 30,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
        <TitleHeader
          overline="Platforms & Tools"
          title="I Master These Tools"
          description="A curated set of platforms I use daily to drive results."
        />
      </div>

      {/* Marquee Container */}
      <div
        ref={marqueeRef}
        className="overflow-hidden glass-effect border-y border-border"
      >
        <div className="marquee-content flex gap-12 py-8 px-6 whitespace-nowrap">
          {[...logoShowcase, ...logoShowcase].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 flex-shrink-0 px-6 py-3 rounded-lg glass-effect border border-border/50 hover:border-primary/50 transition-all"
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="text-sm font-medium text-text whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
