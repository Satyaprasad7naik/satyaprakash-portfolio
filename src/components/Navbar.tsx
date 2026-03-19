import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

type SmootherLike = {
  paused: (_value: boolean) => void;
  scrollTop: (_value: number) => void;
  scrollTo: (target: string, smooth?: boolean) => void;
};

export let smoother: SmootherLike = {
  paused: () => {},
  scrollTop: (value: number) => {
    window.scrollTo({ top: value, behavior: "auto" });
  },
  scrollTo: (target: string, smooth = true) => {
    const section = document.querySelector(target);
    if (!section) return;
    section.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  },
};

const Navbar = () => {
  useEffect(() => {
    smoother = {
      paused: () => {},
      scrollTop: (value: number) => {
        window.scrollTo({ top: value, behavior: "auto" });
      },
      scrollTo: (target: string, smooth = true) => {
        const section = document.querySelector(target);
        if (!section) return;
        section.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
      },
    };

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    const clickHandlers: Array<{
      element: HTMLAnchorElement;
      handler: (e: Event) => void;
    }> = [];

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const handler = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const target = e.currentTarget as HTMLAnchorElement;
          const section = target.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true);
          }
        }
      };

      element.addEventListener("click", handler);
      clickHandlers.push({ element, handler });
    });

    const onResize = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", onResize);

    return () => {
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Satyaprakash
        </a>
        <a
          href="mailto:satyaprakash@airdesk.io"
          className="navbar-connect"
          data-cursor="disable"
        >
          satyaprakash@airdesk.io
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#experience" href="#experience">
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
