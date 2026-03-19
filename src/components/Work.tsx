import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "Lead Generation Engine",
    category: "Meta Ads + CRO",
    tools: "Meta Ads, Landing Pages, CRO",
  },
  {
    title: "SEO Traffic Growth",
    category: "Organic Strategy",
    tools: "SEO, Content Clusters, Semrush",
  },
  {
    title: "Google Ads Funnel Rebuild",
    category: "Performance Marketing",
    tools: "Google Ads, Analytics, A/B Testing",
  },
  {
    title: "Brand Awareness Campaign",
    category: "Social + Display",
    tools: "Social Media, Display, Creative Strategy",
  },
  {
    title: "Email Automation Sequences",
    category: "Lifecycle Marketing",
    tools: "HubSpot, Segmentation, Automation",
  },
  {
    title: "Conversion Rate Optimization",
    category: "Experimentation",
    tools: "Hotjar, CRO, User Behavior Insights",
  },
];

const Work = () => {
  useGSAP(() => {
    if (window.innerWidth <= 1025) {
      gsap.fromTo(
        ".work-box",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".work-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      return;
    }

    let translateX = 0;
    let timeline: gsap.core.Timeline | null = null;

    const setTranslateX = () => {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = Math.max(
        0,
        rect.width * box.length - (rectLeft + parentWidth) + padding
      );
    };

    setTranslateX();

    timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: 0.8,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    const onResize = () => {
      setTranslateX();
      timeline?.scrollTrigger?.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      timeline?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
