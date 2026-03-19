import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}) => {
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!countRef.current) return;

    const obj = { count: 0 };

    gsap.to(obj, {
      count: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (countRef.current) {
          const displayValue =
            value % 1 === 0 ? Math.round(obj.count) : obj.count.toFixed(1);
          countRef.current.innerText = `${prefix}${displayValue}${suffix}`;
        }
      },
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [value, suffix, prefix, duration]);

  return (
    <div className="text-center">
      <div
        ref={countRef}
        className="text-4xl md:text-5xl font-bold text-primary mb-2"
      >
        {prefix}0{suffix}
      </div>
      <p className="text-text-muted text-sm md:text-base">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
