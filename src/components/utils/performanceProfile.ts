export type PerformanceTier = "low" | "medium" | "high";

export type PerformanceProfile = {
  tier: PerformanceTier;
  isMobile: boolean;
  prefersReducedMotion: boolean;
  dprCap: number;
  antialias: boolean;
};

export function getPerformanceProfile(): PerformanceProfile {
  const isMobile = window.innerWidth <= 900 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;

  let tier: PerformanceTier = "high";

  if (isMobile || prefersReducedMotion || cores <= 4 || memory <= 4) {
    tier = "low";
  } else if (cores <= 6 || memory <= 8) {
    tier = "medium";
  }

  return {
    tier,
    isMobile,
    prefersReducedMotion,
    dprCap: tier === "low" ? 1.1 : tier === "medium" ? 1.35 : 1.6,
    antialias: tier !== "low",
  };
}
