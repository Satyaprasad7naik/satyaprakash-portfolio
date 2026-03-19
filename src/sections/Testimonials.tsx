import { useEffect, useRef } from "react";
import { testimonials } from "../constants";
import TitleHeader from "../components/common/TitleHeader";
import GlowCard from "../components/common/GlowCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".testimonial-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
      <div className="max-w-5xl mx-auto">
        <TitleHeader
          overline="Testimonials"
          title="What People Say"
          description="Feedback from clients and colleagues I've worked with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <GlowCard key={testimonial.id} className="testimonial-card flex flex-col">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={16} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text text-sm md:text-base leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border/50">
                <p className="font-semibold text-text">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-text-muted">
                  {testimonial.role}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
