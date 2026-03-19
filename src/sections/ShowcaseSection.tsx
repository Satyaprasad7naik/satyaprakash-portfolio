import { useEffect, useRef } from "react";
import { caseStudies } from "../constants";
import TitleHeader from "../components/common/TitleHeader";
import Button from "../components/common/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".showcase-item");

    items.forEach((item, idx) => {
      const isEven = idx % 2 === 0;

      gsap.fromTo(
        item.querySelector(".showcase-image"),
        {
          opacity: 0,
          x: isEven ? -80 : 80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        item.querySelector(".showcase-content"),
        {
          opacity: 0,
          x: isEven ? 80 : -80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <TitleHeader
          overline="Case Studies"
          title="Featured Projects"
          description="Recent campaigns that moved the needle for our clients."
        />

        <div className="space-y-20">
          {caseStudies.slice(0, 3).map((study, idx) => (
            <div
              key={study.id}
              className={`showcase-item grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`showcase-image rounded-lg overflow-hidden glass-effect border border-border/50 h-80 md:h-96 flex items-center justify-center ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-text-muted text-sm">
                    Project Screenshot Placeholder
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className={`showcase-content ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-text mb-4">
                  {study.title}
                </h3>

                <p className="text-text-muted text-lg mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8 py-8 border-y border-border/50">
                  <div>
                    <p className="text-sm text-text-muted uppercase tracking-widest mb-2">
                      Objective
                    </p>
                    <p className="text-text font-semibold">{study.objective}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted uppercase tracking-widest mb-2">
                      Result
                    </p>
                    <p className="text-primary font-bold">{study.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="secondary" size="md">
                  View Case Study →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
