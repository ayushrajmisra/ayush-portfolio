import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-[#6688ff] via-[#b6a3ff] to-[#d6b36a]"
      style={{ scaleX: shouldReduceMotion ? scrollYProgress : smoothProgress }}
    />
  );
}
