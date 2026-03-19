import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Standard reveal pattern for sections
export const createSectionReveal = (
  element: Element | HTMLElement,
  delay = 0
) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

// Staggered reveal for multiple elements
export const createStaggerReveal = (
  elements: NodeListOf<Element> | HTMLElement[],
  trigger?: Element | string
) => {
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: trigger || elements[0],
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

// Character stagger animation (for hero text)
export const createCharacterStagger = (
  element: HTMLElement,
  duration = 0.7
) => {
  if (!element) return;

  const text = element.innerText;
  element.innerHTML = text
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
    duration,
    ease: "back.out(1.2)",
    stagger: 0.02,
    delay: 0.3,
  });
};

// Navbar entrance
export const createNavbarEntrance = (element: HTMLElement) => {
  if (!element) return;

  gsap.fromTo(
    element,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.3 }
  );
};

// Button hover glow effect
export const createButtonGlow = (button: HTMLElement) => {
  if (!button) return;

  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
      duration: 0.3,
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      boxShadow: "0 0 0px rgba(99, 102, 241, 0)",
      duration: 0.3,
    });
  });
};

// Refresh ScrollTrigger (call after layout changes)
export const refreshScrollTrigger = () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
};
