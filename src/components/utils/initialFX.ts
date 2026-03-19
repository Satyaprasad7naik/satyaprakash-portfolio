import gsap from "gsap";
import { smoother } from "../Navbar";

type WrappedText = {
  chars: HTMLElement[];
};

const wrapChars = (selector: string | string[]): WrappedText => {
  const nodes =
    typeof selector === "string"
      ? Array.from(document.querySelectorAll<HTMLElement>(selector))
      : selector.flatMap((s) => Array.from(document.querySelectorAll<HTMLElement>(s)));

  const chars: HTMLElement[] = [];

  nodes.forEach((el) => {
    const text = el.textContent || "";
    const wrapped = text
      .split("")
      .map(
        (ch) =>
          `<span class="split-char" style="display:inline-block">${
            ch === " " ? "&nbsp;" : ch
          }</span>`
      )
      .join("");
    el.innerHTML = wrapped;
    chars.push(...Array.from(el.querySelectorAll<HTMLElement>(".split-char")));
  });

  return { chars };
};

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.65,
    delay: 0.75,
  });

  const landingText = wrapChars([
    ".landing-info h3",
    ".landing-intro h2",
    ".landing-intro h1",
  ]);
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 0.95,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.018,
      delay: 0.2,
    }
  );

  const landingText2 = wrapChars(".landing-h2-info");
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 0.9,
      filter: "blur(0px)",
      ease: "power3.out",
      y: 0,
      stagger: 0.02,
      delay: 0.28,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      y: 0,
      delay: 0.55,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      delay: 0.05,
    }
  );

  const landingText3 = wrapChars(".landing-h2-info-1");
  const landingText4 = wrapChars(".landing-h2-1");
  const landingText5 = wrapChars(".landing-h2-2");

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: WrappedText, Text2: WrappedText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
  const delay = 2.8;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
