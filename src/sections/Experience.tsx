import { useEffect, useRef } from "react";
import { experience } from "../constants";
import TitleHeader from "../components/common/TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll(".timeline-item");

    gsap.fromTo(
      items,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <TitleHeader
          overline="Career"
          title="Experience"
          description="5+ years of building campaigns and scaling growth across agencies and in-house teams."
        />

        {/* Timeline */}
        <div className="space-y-8 md:space-y-12">
          {experience.map((job, idx) => (
            <div key={job.id} className="timeline-item relative">
              {/* Timeline node & line */}
              <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary border-4 border-bg z-10" />
                {idx !== experience.length - 1 && (
                  <div className="absolute top-12 left-1/2 w-1 h-24 md:h-32 bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2" />
                )}
              </div>

              {/* Content */}
              <div className="ml-20 md:ml-24 glass-effect border border-border/50 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-text mb-2">
                      {job.role}
                    </h3>
                    <p className="text-primary font-semibold">{job.company}</p>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <p className="text-text-muted leading-relaxed mb-6">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
