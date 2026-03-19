import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGSAPContext = (callback: (ctx: gsap.Context) => void) => {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      callback(ctxRef.current!);
    });

    return () => {
      ctxRef.current?.revert();
    };
  }, [callback]);

  return ctxRef;
};
