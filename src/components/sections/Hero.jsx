import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Code2,
  Smartphone,
  Globe,
  Layers3,
} from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import profileImage from "../../assets/images/optimized/AM.webp";

const technologies = [
  { name: "React", icon: Code2, position: "top-8 left-0" },
  { name: "Mobile Apps", icon: Smartphone, position: "top-28 -right-2" },
  { name: "Web Development", icon: Globe, position: "bottom-28 -left-5" },
  { name: "Product Builder", icon: Layers3, position: "bottom-8 right-0" },
];

export default function Hero() {
  const profile = portfolioData.profile;
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, 0.35], [0, 85]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.35]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080d1b] px-6 pb-24 pt-32 lg:px-10"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#3156db]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#9275ed]/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.075] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d6b36a]/40 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#d6b36a]/20 bg-[#d6b36a]/[0.07] px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e3c98f]">
              Founder · Developer · Product Builder
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-5 text-sm font-medium tracking-wide text-slate-400"
          >
            Hello, I'm {profile.firstName}.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]"
          >
            Turning ideas into
            <span className="mt-1 block bg-gradient-to-r from-[#e8d7ad] via-[#d6b36a] to-[#a99aff] bg-clip-text text-transparent">
              digital reality.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-bold text-[#101522] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8c986] hover:shadow-[0_12px_35px_rgba(214,179,106,0.22)]"
            >
              Explore My Work
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d6b36a]/60 hover:bg-white/5"
            >
              <Download size={16} />
              View Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500"
          >
            <span className="h-px w-10 bg-[#d6b36a]" />
            Based in {profile.location}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center"
          style={shouldReduceMotion ? undefined : { y: portraitY, opacity: portraitOpacity }}
        >
          <div className="absolute inset-5 rounded-full border border-[#d6b36a]/20" />
          <div className="absolute inset-14 rounded-full border border-dashed border-[#a99aff]/25" />

          {!shouldReduceMotion && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-transparent border-t-[#d6b36a]/70"
            />
          )}

          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[270px] w-[270px] overflow-hidden rounded-full border border-[#d6b36a]/25 bg-gradient-to-br from-[#25396d] to-[#151128] shadow-[0_0_100px_rgba(73,99,210,0.25)] sm:h-[340px] sm:w-[340px]"
          >
            <img
              src={profileImage}
              alt="Ayush Misra"
              className="h-full w-full object-cover object-[50%_12%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d1b]/45 via-transparent to-[#d6b36a]/10" />
          </motion.div>

          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.15 }}
                className={`absolute ${tech.position} z-10 flex items-center gap-2 rounded-xl border border-white/10 bg-[#121b34]/95 px-3 py-3 shadow-xl backdrop-blur-xl`}
              >
                <Icon size={16} className="text-[#d6b36a]" />
                <span className="text-[10px] font-semibold text-slate-200 sm:text-xs">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}

          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6b36a]" />
            Design · Develop · Build
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-slate-500 transition hover:text-white sm:flex"
      >
        Scroll to explore
        <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  );
}


