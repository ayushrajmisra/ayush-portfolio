import { motion } from "motion/react";
import { ArrowUpRight, Lightbulb, Code2, Rocket, GraduationCap } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

const principles = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Think with purpose",
    description: "Understanding the problem before choosing the technology or building the solution.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Build with technology",
    description: "Creating websites, mobile applications and digital experiences that are useful and accessible.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Grow through execution",
    description: "Turning ideas into practical projects through planning, experimentation and continuous learning.",
  },
];

export default function About() {
  const profile = portfolioData.profile;
  const education = portfolioData.education;

  return (
    <section id="about" className="relative overflow-hidden bg-[#0c1326] px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#6688ff]/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#829cff]">
              01 / A little about me
            </p>
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              More than just
              <span className="block text-slate-500">writing code.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            A curious mind, a builder's mindset and a belief in creating technology that makes a difference.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#6688ff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#aabaff]">
                My perspective
              </span>
            </div>

            <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              I enjoy turning complex ideas into simple digital experiences.
            </h3>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-slate-400">
              <p>
                I'm {profile.name}, a developer and product builder interested in creating meaningful digital solutions. My work brings together website development, mobile applications and product thinking.
              </p>
              <p>
                As Founder & Director at Kartsho Solutions, I am working towards building digital products that address practical needs. I enjoy exploring ideas, understanding users and shaping those ideas into useful experiences.
              </p>
              <p>
                My journey has also been shaped by college activities, teamwork and leadership experiences. These have helped me value collaboration, responsibility and learning beyond technology.
              </p>
            </div>

            <a
              href="#projects"
              className="mt-9 inline-flex items-center gap-3 border-b border-[#6688ff]/50 pb-2 text-sm font-semibold text-white transition hover:border-[#a99aff] hover:text-[#aabaff]"
            >
              Explore what I build
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="space-y-4">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="premium-card group rounded-2xl border border-white/[0.08] bg-[#111b33]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6688ff]/35 hover:bg-[#15213e] sm:p-7"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6688ff]/20 bg-[#6688ff]/10 text-[#91a7ff] transition group-hover:bg-[#6688ff]/20">
                      <Icon size={21} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                        <span className="text-xs font-semibold tracking-widest text-slate-600">{item.number}</span>
                      </div>
                      <p className="text-sm leading-7 text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-5 rounded-2xl border border-[#6688ff]/20 bg-gradient-to-r from-[#1a2a50] to-[#171b35] p-6 sm:p-7"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#b6c4ff]">
                <GraduationCap size={23} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#aabaff]">Academic background</p>
                <h4 className="mt-1 text-base font-semibold text-white">{education.degree}</h4>
                <p className="mt-1 text-sm text-slate-400">{education.institution} · {education.period}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

